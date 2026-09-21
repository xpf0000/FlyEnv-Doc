import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'

const distRoot = path.resolve('docs/.vitepress/dist')
const docsRoot = path.resolve('docs')
const siteUrl = 'https://flyenv.com'
const languageByLocale = {
  en: 'en',
  zh: 'zh-CN',
  id: 'id-ID',
  es: 'es-ES'
}

function collectHtmlFiles(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return collectHtmlFiles(filePath)
    return entry.name.endsWith('.html') ? [filePath] : []
  })
}

function collectFiles(directory, extension) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const filePath = path.join(directory, entry.name)
    if (entry.isDirectory()) return collectFiles(filePath, extension)
    return entry.name.endsWith(extension) ? [filePath] : []
  })
}

function extractAll(html, pattern) {
  return [...html.matchAll(pattern)].map((match) => match[1])
}

function localeFor(relativePath) {
  const locale = relativePath.split('/')[0]
  return locale in languageByLocale && locale !== 'en' ? locale : 'en'
}

function urlToOutputPath(url) {
  const pathname = new URL(url).pathname
  if (pathname.endsWith('/')) return `${pathname.slice(1)}index.html`
  return `${pathname.slice(1)}.html`
}

function typeIncludes(node, type) {
  const types = Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']]
  return types.includes(type)
}

function plainText(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;|&apos;/g, String.fromCodePoint(39))
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function faqSectionText(html) {
  const start = html.indexOf('id="faq-title"')
  if (start < 0) return ''
  const end = html.indexOf('<section', start)
  return plainText(html.slice(start, end < 0 ? html.length : end))
}

function topLevelNodes(documents) {
  return documents.flatMap((document) =>
    Array.isArray(document['@graph']) ? document['@graph'] : [document]
  )
}

function nestedNodes(value, result = []) {
  if (!value || typeof value !== 'object') return result
  if (Array.isArray(value)) {
    for (const item of value) nestedNodes(item, result)
    return result
  }
  if (value['@type']) result.push(value)
  for (const item of Object.values(value)) nestedNodes(item, result)
  return result
}

function collectInternalSchemaUrls(value, result = []) {
  if (!value || typeof value !== 'object') return result
  if (Array.isArray(value)) {
    for (const item of value) collectInternalSchemaUrls(item, result)
    return result
  }
  for (const [key, item] of Object.entries(value)) {
    if ((key === 'url' || key === 'item') && typeof item === 'string' && item.startsWith(siteUrl)) {
      result.push(item)
    } else {
      collectInternalSchemaUrls(item, result)
    }
  }
  return result
}

function formatIssues(issues) {
  return `${issues.slice(0, 20).join('\n')}${issues.length > 20 ? `\n... ${issues.length - 20} more` : ''}`
}

assert.ok(fs.existsSync(distRoot), 'Build output is missing; run yarn docs:build first')

const pages = collectHtmlFiles(distRoot).map((filePath) => {
  const relativePath = path.relative(distRoot, filePath)
  const html = fs.readFileSync(filePath, 'utf8')
  const jsonLdSources = extractAll(
    html,
    /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g
  )
  const jsonLd = jsonLdSources.map((source) => JSON.parse(source))
  return {
    relativePath,
    html,
    locale: localeFor(relativePath),
    htmlLanguage: extractAll(html, /<html lang="([^"]+)"/g),
    h1Count: (html.match(/<h1(?:\s|>)/g) || []).length,
    noindex: /<meta name="robots" content="[^"]*\bnoindex\b/.test(html),
    title: extractAll(html, /<title>([^<]+)<\/title>/g),
    description: extractAll(html, /<meta name="description" content="([^"]+)"/g),
    canonical: extractAll(html, /<link rel="canonical" href="([^"]+)"/g),
    ogTitle: extractAll(html, /<meta property="og:title" content="([^"]+)"/g),
    ogDescription: extractAll(html, /<meta property="og:description" content="([^"]+)"/g),
    ogUrl: extractAll(html, /<meta property="og:url" content="([^"]+)"/g),
    ogImage: extractAll(html, /<meta property="og:image" content="([^"]+)"/g),
    twitterCard: extractAll(html, /<meta name="twitter:card" content="([^"]+)"/g),
    twitterTitle: extractAll(html, /<meta name="twitter:title" content="([^"]+)"/g),
    twitterDescription: extractAll(html, /<meta name="twitter:description" content="([^"]+)"/g),
    twitterImage: extractAll(html, /<meta name="twitter:image" content="([^"]+)"/g),
    alternates: [...html.matchAll(/<link rel="alternate" hreflang="([^"]+)" href="([^"]+)"/g)].map(
      (match) => ({ language: match[1], url: match[2] })
    ),
    jsonLd
  }
})

const indexablePages = pages.filter((page) => !page.noindex)
const noindexPages = pages.filter((page) => page.noindex)
const outputPaths = new Set(pages.map((page) => page.relativePath))
const pageByCanonical = new Map(indexablePages.map((page) => [page.canonical[0], page]))

test('Markdown does not contain hand-authored JSON-LD', () => {
  const files = collectFiles(docsRoot, '.md')
    .filter((filePath) => fs.readFileSync(filePath, 'utf8').includes('application/ld+json'))
    .map((filePath) => path.relative(docsRoot, filePath))

  assert.deepEqual(files, [], formatIssues(files))
})

test('LLM index links every published documentation locale', () => {
  const llmsIndex = fs.readFileSync(path.join(distRoot, 'llms.txt'), 'utf8')
  const languageSection = llmsIndex.match(/## Languages\n([\s\S]*?)(?=\n## |$)/)?.[1] || ''
  const languageUrls = extractAll(languageSection, /\]\((https:\/\/flyenv\.com\/[^)]*)\)/g)

  assert.deepEqual(languageUrls, [
    'https://flyenv.com/',
    'https://flyenv.com/zh/',
    'https://flyenv.com/id/',
    'https://flyenv.com/es/'
  ])
})

test('indexable pages have complete, unique and coherent metadata', () => {
  const issues = []
  const exactOneFields = [
    'title',
    'description',
    'canonical',
    'ogTitle',
    'ogDescription',
    'ogUrl',
    'ogImage',
    'twitterCard',
    'twitterTitle',
    'twitterDescription',
    'twitterImage'
  ]

  for (const page of indexablePages) {
    for (const field of exactOneFields) {
      if (page[field].length !== 1) {
        issues.push(`${page.relativePath}: expected one ${field}, found ${page[field].length}`)
      }
    }
    if (page.description[0] !== page.ogDescription[0]) {
      issues.push(`${page.relativePath}: meta and Open Graph descriptions differ`)
    }
    if (page.description[0] !== page.twitterDescription[0]) {
      issues.push(`${page.relativePath}: meta and Twitter descriptions differ`)
    }
    if (page.canonical[0] !== page.ogUrl[0]) {
      issues.push(`${page.relativePath}: canonical and og:url differ`)
    }
    if (page.htmlLanguage.length !== 1 || page.htmlLanguage[0] !== languageByLocale[page.locale]) {
      issues.push(`${page.relativePath}: document language is missing or incorrect`)
    }
    if (page.h1Count !== 1) {
      issues.push(`${page.relativePath}: expected one h1, found ${page.h1Count}`)
    }
    if (page.alternates.length !== 5) {
      issues.push(
        `${page.relativePath}: expected five hreflang links, found ${page.alternates.length}`
      )
    } else {
      const alternateLanguages = new Set(page.alternates.map((alternate) => alternate.language))
      for (const language of ['en', 'zh-CN', 'id-ID', 'es-ES', 'x-default']) {
        if (!alternateLanguages.has(language)) {
          issues.push(`${page.relativePath}: missing ${language} hreflang`)
        }
      }
    }
    if (page.html.includes('https://www.flyenv.com')) {
      issues.push(`${page.relativePath}: contains the retired www host`)
    }
  }

  for (const field of ['title', 'description', 'canonical']) {
    const seen = new Map()
    for (const page of indexablePages) {
      const value = page[field][0]
      if (!value) continue
      if (seen.has(value)) {
        issues.push(`${page.relativePath}: duplicate ${field} also used by ${seen.get(value)}`)
      } else {
        seen.set(value, page.relativePath)
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('indexable pages expose one coherent JSON-LD graph with a page entity', () => {
  const issues = []

  for (const page of indexablePages) {
    if (page.jsonLd.length !== 1) {
      issues.push(`${page.relativePath}: expected one JSON-LD block, found ${page.jsonLd.length}`)
      continue
    }
    const document = page.jsonLd[0]
    if (document['@context'] !== 'https://schema.org' || !Array.isArray(document['@graph'])) {
      issues.push(`${page.relativePath}: JSON-LD must use one schema.org @graph`)
      continue
    }
    const pageNodes = document['@graph'].filter(
      (node) => typeIncludes(node, 'WebPage') || typeIncludes(node, 'CollectionPage')
    )
    if (pageNodes.length !== 1) {
      issues.push(`${page.relativePath}: expected one page entity, found ${pageNodes.length}`)
      continue
    }
    const pageNode = pageNodes[0]
    const canonical = page.canonical[0]
    if (pageNode.url !== canonical) {
      issues.push(`${page.relativePath}: page entity URL does not match canonical`)
    }
    if (pageNode['@id'] !== `${canonical}#webpage`) {
      issues.push(`${page.relativePath}: page entity has an unstable @id`)
    }
    if (pageNode.description !== page.description[0]) {
      issues.push(`${page.relativePath}: page entity description differs from meta description`)
    }
    if (pageNode.inLanguage !== languageByLocale[page.locale]) {
      issues.push(`${page.relativePath}: page entity language is incorrect`)
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('all localized Laravel solution pages use the current topic and entity metadata', () => {
  const expected = {
    en: {
      url: `${siteUrl}/solutions/laravel`,
      name: 'Laravel Local Development Environment with FlyEnv',
      description:
        'Build and manage a local Laravel development environment with PHP, Composer, MySQL or PostgreSQL, Redis, Nginx, local domains and HTTPS using FlyEnv on Windows, macOS and Linux.'
    },
    zh: {
      url: `${siteUrl}/zh/solutions/laravel`,
      name: '使用 FlyEnv 构建 Laravel 本地开发环境',
      description:
        '使用 FlyEnv 在 Windows、macOS 和 Linux 上，通过 PHP、Composer、MySQL 或 PostgreSQL、Redis、Nginx、本地域名和 HTTPS 构建并管理 Laravel 本地开发环境。'
    },
    id: {
      url: `${siteUrl}/id/solutions/laravel`,
      name: 'Lingkungan pengembangan Laravel lokal dengan FlyEnv',
      description:
        'Bangun dan kelola lingkungan pengembangan Laravel lokal dengan PHP, Composer, MySQL atau PostgreSQL, Redis, Nginx, domain lokal, dan HTTPS menggunakan FlyEnv di Windows, macOS, dan Linux.'
    },
    es: {
      url: `${siteUrl}/es/solutions/laravel`,
      name: 'Entorno de desarrollo local de Laravel con FlyEnv',
      description:
        'Construye y gestiona un entorno de desarrollo local de Laravel con PHP, Composer, MySQL o PostgreSQL, Redis, Nginx, dominios locales y HTTPS con FlyEnv en Windows, macOS y Linux.'
    }
  }

  for (const [locale, details] of Object.entries(expected)) {
    const page = pageByCanonical.get(details.url)
    assert.ok(page, `${locale}: Laravel page is missing from the build`)
    const nodes = topLevelNodes(page.jsonLd)
    const pageNode = nodes.find((node) => node['@id'] === `${details.url}#webpage`)
    const breadcrumb = nodes.find((node) => typeIncludes(node, 'BreadcrumbList'))

    assert.equal(pageNode.name, details.name)
    assert.equal(pageNode.description, details.description)
    assert.deepEqual(pageNode.about, {
      '@type': 'Thing',
      name: 'Laravel',
      sameAs: 'https://laravel.com/'
    })
    assert.equal(breadcrumb.itemListElement.at(-1).name, 'Laravel')
  }
})

test('WordPress solution metadata names the WordPress entity and breadcrumb', () => {
  const url = `${siteUrl}/solutions/wordpress`
  const page = pageByCanonical.get(url)
  assert.ok(page, 'English WordPress page is missing from the build')

  const nodes = topLevelNodes(page.jsonLd)
  const pageNode = nodes.find((node) => node['@id'] === `${url}#webpage`)
  const breadcrumb = nodes.find((node) => typeIncludes(node, 'BreadcrumbList'))

  assert.equal(pageNode.name, 'WordPress Local Development Environment with FlyEnv')
  assert.deepEqual(pageNode.about, {
    '@type': 'Thing',
    name: 'WordPress',
    sameAs: 'https://wordpress.org/'
  })
  assert.equal(breadcrumb.itemListElement.at(-1).name, 'WordPress')
})

test('hierarchical and collection routes use content-specific schema', () => {
  const issues = []
  const collectionPaths = new Set(
    [
      'features.html',
      'solutions.html',
      'demos.html',
      'community.html',
      'compare/index.html'
    ].flatMap((relativePath) => [
      relativePath,
      ...['zh', 'id', 'es'].map((locale) => `${locale}/${relativePath}`)
    ])
  )
  const homePaths = new Set(['index.html', 'zh/index.html', 'id/index.html', 'es/index.html'])

  for (const page of indexablePages) {
    const nodes = topLevelNodes(page.jsonLd)
    const allNodes = page.jsonLd.flatMap((document) => nestedNodes(document))

    if (collectionPaths.has(page.relativePath)) {
      if (!nodes.some((node) => typeIncludes(node, 'CollectionPage'))) {
        issues.push(`${page.relativePath}: missing CollectionPage`)
      }
      if (!nodes.some((node) => typeIncludes(node, 'ItemList'))) {
        issues.push(`${page.relativePath}: missing ItemList`)
      }
    }
    if (homePaths.has(page.relativePath)) {
      if (
        !nodes.some(
          (node) => typeIncludes(node, 'WebSite') && node['@id'] === `${siteUrl}/#website`
        )
      ) {
        issues.push(`${page.relativePath}: missing the stable WebSite entity`)
      }
      if (
        !nodes.some(
          (node) =>
            typeIncludes(node, 'SoftwareApplication') && node['@id'] === `${siteUrl}/#software`
        )
      ) {
        issues.push(`${page.relativePath}: missing the stable SoftwareApplication entity`)
      }
    }
    if (/^(?:(?:zh|id|es)\/)?demos\.html$/.test(page.relativePath)) {
      if (!allNodes.some((node) => typeIncludes(node, 'VideoObject'))) {
        issues.push(`${page.relativePath}: missing VideoObject entries`)
      }
    }
    if (/^(?:(?:zh|id|es)\/)?community\.html$/.test(page.relativePath)) {
      if (!allNodes.some((node) => typeIncludes(node, 'TechArticle'))) {
        issues.push(`${page.relativePath}: missing TechArticle entries`)
      }
    }
    if (
      /^(?:(?:zh|id|es)\/)?(?:features|guide|solutions|compare)\/.+\.html$/.test(
        page.relativePath
      ) &&
      !/^(?:(?:zh|id|es)\/)?compare\/index\.html$/.test(page.relativePath)
    ) {
      if (!nodes.some((node) => typeIncludes(node, 'BreadcrumbList'))) {
        issues.push(`${page.relativePath}: missing BreadcrumbList`)
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('generated rich entities contain their required project data', () => {
  const issues = []

  for (const page of indexablePages) {
    for (const node of page.jsonLd.flatMap((document) => nestedNodes(document))) {
      if (typeIncludes(node, 'VideoObject')) {
        for (const property of ['name', 'thumbnailUrl', 'uploadDate', 'description', 'embedUrl']) {
          if (!node[property]) issues.push(`${page.relativePath}: VideoObject missing ${property}`)
        }
      }
      if (typeIncludes(node, 'TechArticle')) {
        for (const property of ['headline', 'url', 'datePublished', 'publisher']) {
          if (!node[property]) issues.push(`${page.relativePath}: TechArticle missing ${property}`)
        }
      }
      if (typeIncludes(node, 'BreadcrumbList') || typeIncludes(node, 'ItemList')) {
        const items = node.itemListElement
        if (!Array.isArray(items) || items.length === 0) {
          issues.push(`${page.relativePath}: ${node['@type']} has no items`)
        } else if (items.some((item, index) => item.position !== index + 1)) {
          issues.push(`${page.relativePath}: ${node['@type']} positions are not sequential`)
        }
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('FAQ schema exactly matches the visible FAQ section', () => {
  const issues = []

  for (const page of indexablePages) {
    const visibleFaq = faqSectionText(page.html)
    const faqNodes = topLevelNodes(page.jsonLd).filter((node) => typeIncludes(node, 'FAQPage'))
    for (const faq of faqNodes) {
      for (const entity of faq.mainEntity || []) {
        if (!visibleFaq.includes(entity.name)) {
          issues.push(`${page.relativePath}: FAQ question is not visible: ${entity.name}`)
        }
        if (!visibleFaq.includes(entity.acceptedAnswer?.text)) {
          issues.push(`${page.relativePath}: FAQ answer is not visible for: ${entity.name}`)
        }
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('collection names and feature item names match their localized pages', () => {
  const issues = []
  const expectedEnglishFeatures = {
    'antigravity-cli': 'Antigravity CLI',
    clickhouse: 'ClickHouse',
    cliproxyapi: 'CLIProxyAPI',
    'dns-server': 'DNS Server',
    frankenphp: 'FrankenPHP',
    'ftp-server': 'FTP Server',
    mariadb: 'MariaDB',
    minio: 'MinIO',
    mkcert: 'mkcert',
    mongodb: 'MongoDB',
    mysql: 'MySQL',
    n8n: 'n8n',
    openclaw: 'OpenClaw',
    opencode: 'OpenCode',
    php: 'PHP',
    postgresql: 'PostgreSQL',
    rabbitmq: 'RabbitMQ',
    rustfs: 'RustFS',
    zincsearch: 'ZincSearch'
  }
  const expectedListNames = {
    'demos.html': 'Demo videos',
    'zh/demos.html': '演示视频',
    'id/demos.html': 'Video demo',
    'es/demos.html': 'Vídeos de demostración',
    'community.html': 'Community articles',
    'zh/community.html': '社区文章',
    'id/community.html': 'Artikel komunitas',
    'es/community.html': 'Artículos de la comunidad'
  }

  for (const page of indexablePages) {
    const itemList = topLevelNodes(page.jsonLd).find((node) => typeIncludes(node, 'ItemList'))
    const expectedName = expectedListNames[page.relativePath]
    if (expectedName && itemList?.name !== expectedName) {
      issues.push(
        `${page.relativePath}: expected ItemList name ${expectedName}, found ${itemList?.name}`
      )
    }
    if (page.relativePath !== 'features.html' || !itemList) continue

    for (const entry of itemList.itemListElement) {
      const slug = new URL(entry.item.url).pathname.split('/').pop()
      const expectedFeatureName = expectedEnglishFeatures[slug]
      if (expectedFeatureName && entry.item.name !== expectedFeatureName) {
        issues.push(
          `${page.relativePath}: expected ${slug} name ${expectedFeatureName}, found ${entry.item.name}`
        )
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('shared entities keep identical definitions across pages', () => {
  const issues = []
  const definitions = new Map()

  for (const page of indexablePages) {
    for (const node of topLevelNodes(page.jsonLd)) {
      if (
        ![`${siteUrl}/#website`, `${siteUrl}/#software`, `${siteUrl}/#organization`].includes(
          node['@id']
        )
      ) {
        continue
      }
      const serialized = JSON.stringify(node)
      const existing = definitions.get(node['@id'])
      if (existing && existing.serialized !== serialized) {
        issues.push(`${page.relativePath}: ${node['@id']} differs from ${existing.page}`)
      } else if (!existing) {
        definitions.set(node['@id'], { serialized, page: page.relativePath })
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('internal URLs exposed by JSON-LD resolve to built pages', () => {
  const issues = []

  for (const page of indexablePages) {
    for (const url of page.jsonLd.flatMap((document) => collectInternalSchemaUrls(document))) {
      const outputPath = urlToOutputPath(url)
      if (!outputPaths.has(outputPath)) {
        issues.push(`${page.relativePath}: schema URL ${url} has no built page`)
      }
    }
  }

  assert.deepEqual(issues, [], formatIssues(issues))
})

test('hreflang, sitemap, robots and noindex pages agree', () => {
  const issues = []
  const sitemap = fs.readFileSync(path.join(distRoot, 'sitemap.xml'), 'utf8')
  const sitemapUrls = extractAll(sitemap, /<loc>([^<]+)<\/loc>/g)
  const canonicalUrls = indexablePages.map((page) => page.canonical[0]).sort()

  assert.deepEqual(
    [...sitemapUrls].sort(),
    canonicalUrls,
    'sitemap must match indexable canonicals'
  )

  for (const page of indexablePages) {
    for (const alternate of page.alternates) {
      const target = pageByCanonical.get(alternate.url)
      if (!outputPaths.has(urlToOutputPath(alternate.url)) || !target) {
        issues.push(`${page.relativePath}: hreflang ${alternate.language} points to a missing page`)
        continue
      }
      if (target.noindex) {
        issues.push(`${page.relativePath}: hreflang ${alternate.language} points to a noindex page`)
      }
      const sourceLanguage = languageByLocale[page.locale]
      if (
        !target.alternates.some(
          (entry) => entry.language === sourceLanguage && entry.url === page.canonical[0]
        )
      ) {
        issues.push(`${page.relativePath}: hreflang ${alternate.language} is not reciprocal`)
      }
    }
  }
  for (const page of noindexPages) {
    if (page.jsonLd.length > 0) issues.push(`${page.relativePath}: noindex page contains JSON-LD`)
    if (page.canonical.length > 0)
      issues.push(`${page.relativePath}: noindex page contains canonical`)
  }

  const robots = fs.readFileSync(path.join(distRoot, 'robots.txt'), 'utf8')
  assert.match(robots, /^Sitemap: https:\/\/flyenv\.com\/sitemap\.xml$/m)
  assert.deepEqual(issues, [], formatIssues(issues))
})
