import { demos, getDemoCopy, getDemoEmbedUrl, getDemoPlatform } from '../data/demos'
import communityPosts from '../data/community-posts.json'
import communityPostsZh from '../data/community-posts-zh.json'
import { getComparisonFaqs, type ComparisonFaqSlug } from '../data/comparison-faqs'
import { solutions } from '../data/solutions'

export type SeoLocale = 'en' | 'zh' | 'id' | 'es'

type HeadEntry = [string, Record<string, any>, string?]

interface ResolveDescriptionOptions {
  relativePath: string
  title: string
  currentDescription?: string
  explicitDescription?: string
  preferredDescription?: string
}

interface BuildSeoHeadOptions {
  page: string
  title: string
  description: string
  head: HeadEntry[]
  host: string
  socialImage: string
  featureSlugs: string[]
  featureLabels: Record<SeoLocale, Record<string, string>>
}

interface RouteInfo {
  locale: SeoLocale
  language: string
  pagePath: string
  url: string
  localePath: string
  relative: string
}

interface CommunityPost {
  id: string
  title: string
  url: string
  author?: string
  platform: string
  language: string
  date: string
  summary: string
}

const languages: Record<SeoLocale, string> = {
  en: 'en',
  zh: 'zh-CN',
  id: 'id-ID',
  es: 'es-ES'
}

const ogLocales: Record<SeoLocale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  id: 'id_ID',
  es: 'es_ES'
}

const genericDescriptions: Record<SeoLocale, string> = {
  en: 'All-in-One Full-Stack Environment Management Tool. Support macOS / Windows / Linux',
  zh: '一体化全栈环境管理工具. 支持macOS / Windows / Linux',
  id: 'Pengelola lingkungan pengembangan full-stack terpadu untuk macOS, Windows, dan Linux.',
  es: 'Herramienta todo en uno para gestionar entornos de desarrollo full-stack. Compatible con macOS, Windows y Linux.'
}

const labels = {
  en: {
    home: 'FlyEnv',
    features: 'Features',
    guide: 'Guide',
    solutions: 'Solutions',
    compare: 'Compare',
    demos: 'Demos',
    community: 'Community',
    demoList: 'Demo videos',
    communityList: 'Community articles',
    list: 'list'
  },
  zh: {
    home: 'FlyEnv',
    features: '特性',
    guide: '指南',
    solutions: '解决方案',
    compare: '比较',
    demos: '演示',
    community: '社区',
    demoList: '演示视频',
    communityList: '社区文章',
    list: '列表'
  },
  id: {
    home: 'FlyEnv',
    features: 'Fitur',
    guide: 'Panduan',
    solutions: 'Solusi',
    compare: 'Perbandingan',
    demos: 'Demo',
    community: 'Komunitas',
    demoList: 'Video demo',
    communityList: 'Artikel komunitas',
    list: 'daftar'
  },
  es: {
    home: 'FlyEnv',
    features: 'Funcionalidades',
    guide: 'Guía',
    solutions: 'Soluciones',
    compare: 'Comparativas',
    demos: 'Demos',
    community: 'Comunidad',
    demoList: 'Vídeos de demostración',
    communityList: 'Artículos de la comunidad',
    list: 'lista'
  }
} satisfies Record<SeoLocale, Record<string, string>>

const compareItems = [
  { slug: 'xampp', name: 'FlyEnv vs XAMPP' },
  { slug: 'laragon', name: 'FlyEnv vs Laragon' },
  { slug: 'mamp', name: 'FlyEnv vs MAMP / MAMP Pro' },
  { slug: 'herd', name: 'FlyEnv vs Laravel Herd' },
  { slug: 'servbay', name: 'FlyEnv vs ServBay' },
  { slug: 'docker', name: 'FlyEnv vs Docker' }
]

const demoCategoryOrder = [
  'getting-started',
  'projects',
  'runtimes',
  'databases-services',
  'developer-tools',
  'ai-mcp'
]

export function localeFromRelativePath(relativePath: string): SeoLocale {
  if (relativePath.startsWith('zh/')) return 'zh'
  if (relativePath.startsWith('id/')) return 'id'
  if (relativePath.startsWith('es/')) return 'es'
  return 'en'
}

export function descriptionFromFrontmatter(frontmatter: Record<string, any>) {
  if (typeof frontmatter.description === 'string' && frontmatter.description.trim()) {
    return frontmatter.description.trim()
  }

  const descriptionEntry = Array.isArray(frontmatter.head)
    ? frontmatter.head.find(
        (entry: any) =>
          entry?.[0] === 'meta' && entry?.[1]?.name === 'description' && entry?.[1]?.content
      )
    : undefined
  return descriptionEntry?.[1]?.content
}

export function resolvePageDescription({
  relativePath,
  title,
  currentDescription,
  explicitDescription,
  preferredDescription
}: ResolveDescriptionOptions) {
  const locale = localeFromRelativePath(relativePath)
  const candidates = [explicitDescription, preferredDescription, currentDescription]
  const resolved = candidates.find(
    (candidate) => candidate?.trim() && candidate.trim() !== genericDescriptions[locale]
  )

  if (resolved) return resolved.trim()
  if (locale === 'zh') {
    return `${title}：了解配置方法、使用步骤和常见问题，适用于 macOS、Windows 和 Linux 本地开发。`
  }
  if (locale === 'id') {
    return `${title}: panduan penyiapan, konfigurasi, dan alur kerja untuk pengembangan lokal di macOS, Windows, dan Linux.`
  }
  if (locale === 'es') {
    return `${title}: guía de instalación, configuración y flujo de trabajo para desarrollo local en macOS, Windows y Linux.`
  }
  return `${title}: setup, configuration, and workflow guidance for local development on macOS, Windows, and Linux.`
}

function routeInfo(page: string, host: string): RouteInfo | undefined {
  const match = page.match(/^(?:(zh|id|es)\/)?(.+?)\.md$/)
  if (!match) return

  const locale = (match[1] ?? 'en') as SeoLocale
  const pagePath = match[2]
  const isIndexPage = /(?:^|\/)index$/.test(pagePath)
  const normalizedPath = pagePath.replace(/\/index$/, '').replace(/^index$/, '')
  const relative = isIndexPage
    ? `${normalizedPath ? `/${normalizedPath}` : ''}/`
    : `/${normalizedPath}`
  const localePath = locale === 'en' ? '' : `/${locale}`

  return {
    locale,
    language: languages[locale],
    pagePath,
    url: `${host}${localePath}${relative}`,
    localePath,
    relative
  }
}

function removeCustomSchema(head: HeadEntry[], url: string) {
  for (let index = head.length - 1; index >= 0; index -= 1) {
    const [tag, attributes, content] = head[index]
    if (tag !== 'script' || attributes?.type !== 'application/ld+json') continue

    head.splice(index, 1)
    const document = content ? JSON.parse(content) : undefined
    const documentNodes = Array.isArray(document?.['@graph']) ? document['@graph'] : [document]
    const types = documentNodes
      .flatMap((node) => (Array.isArray(node?.['@type']) ? node['@type'] : [node?.['@type']]))
      .filter(Boolean)
      .join(', ')
    console.warn(
      `[SEO] Ignored custom JSON-LD on ${url}${types ? ` (${types})` : ''}. Define supported schema in docs/.vitepress/seo.ts instead.`
    )
  }
}

function comparisonFaqNode(route: RouteInfo) {
  const match = route.pagePath.match(/^compare\/(docker|herd|servbay)$/)
  if (!match) return

  const faqs = getComparisonFaqs(match[1] as ComparisonFaqSlug, route.locale)
  return {
    '@type': 'FAQPage',
    '@id': `${route.url}#faq`,
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer }
    }))
  }
}

function humanizeSlug(slug: string) {
  const names: Record<string, string> = {
    nodejs: 'Node.js',
    dotnet: '.NET',
    'r-nacos': 'R-NACOS',
    'mcp-server': 'MCP Server',
    'github-copilot-cli': 'GitHub Copilot CLI',
    'claude-code': 'Claude Code',
    'cli-terminal': 'CLI & Terminal',
    'local-sites-https': 'Local Sites & HTTPS',
    'per-project-runtimes': 'Per-project Runtimes',
    'cron-jobs': 'Cron Jobs',
    'user-modules': 'User Modules',
    'startup-groups': 'Startup Groups',
    'cloudflare-tunnel': 'Cloudflare Tunnel'
  }
  return (
    names[slug] ||
    slug
      .split('-')
      .map((part) => `${part[0].toUpperCase()}${part.slice(1)}`)
      .join(' ')
  )
}

function collectionItems(
  route: RouteInfo,
  host: string,
  featureSlugs: string[],
  featureLabels: Record<SeoLocale, Record<string, string>>
) {
  const prefix = `${host}${route.localePath}`

  if (route.pagePath === 'features') {
    return featureSlugs.map((slug) => ({
      name: featureLabels[route.locale][slug] || humanizeSlug(slug),
      url: `${prefix}/features/${slug}`
    }))
  }
  if (route.pagePath === 'solutions') {
    return solutions.map((solution) => ({
      name: solution.name,
      url: `${prefix}/solutions/${solution.slug}`
    }))
  }
  if (route.pagePath === 'compare/index') {
    return compareItems.map((item) => ({
      name: item.name,
      url: `${prefix}/compare/${item.slug}`
    }))
  }
  return []
}

function visibleDemos() {
  const featured = demos
    .filter((demo) => demo.featured && typeof demo.featuredRank === 'number')
    .sort((first, second) => first.featuredRank! - second.featuredRank!)
  const catalog = demoCategoryOrder.flatMap((category) =>
    demos.filter((demo) => demo.category === category && !demo.featured).slice(0, 6)
  )
  return [...featured, ...catalog]
}

function demoVideoNodes(route: RouteInfo, host: string) {
  return visibleDemos().map((demo) => {
    const copy = getDemoCopy(demo, route.locale)
    const platform = getDemoPlatform(demo, route.locale)
    return {
      '@type': 'VideoObject',
      '@id': `${route.url}#video-${demo.id}`,
      name: copy.title,
      description: copy.summary,
      thumbnailUrl: `https://i.ytimg.com/vi/${demo.youtubeId}/hqdefault.jpg`,
      uploadDate: demo.publishedAt,
      embedUrl: getDemoEmbedUrl(demo, platform),
      url: demo.platforms[platform],
      inLanguage: route.language,
      publisher: { '@type': 'Organization', name: 'FlyEnv', url: `${host}/` }
    }
  })
}

function visibleCommunityPosts(locale: SeoLocale) {
  const source = (locale === 'zh' ? communityPostsZh : communityPosts) as CommunityPost[]
  return [...source].sort((first, second) => second.date.localeCompare(first.date)).slice(0, 10)
}

function communityArticleNodes(route: RouteInfo, host: string) {
  return visibleCommunityPosts(route.locale).map((post) => ({
    '@type': 'TechArticle',
    '@id': `${post.url}#article`,
    headline: post.title,
    url: post.url,
    description: post.summary,
    ...(post.author ? { author: { '@type': 'Person', name: post.author } } : {}),
    publisher: { '@type': 'Organization', name: post.platform },
    datePublished: post.date,
    inLanguage: post.language,
    about: { '@id': `${host}/#software` }
  }))
}

function itemListNode(
  route: RouteInfo,
  host: string,
  featureSlugs: string[],
  featureLabels: Record<SeoLocale, Record<string, string>>
) {
  const itemListId = `${route.url}#itemlist`
  let name = `${labels[route.locale][route.pagePath.split('/')[0]] || 'FlyEnv'} ${labels[route.locale].list}`
  let items: any[] = []

  if (route.pagePath === 'demos') {
    name = labels[route.locale].demoList
    items = demoVideoNodes(route, host)
  } else if (route.pagePath === 'community') {
    name = labels[route.locale].communityList
    items = communityArticleNodes(route, host)
  } else {
    items = collectionItems(route, host, featureSlugs, featureLabels).map((item) => ({
      '@type': 'WebPage',
      name: item.name,
      url: item.url
    }))
  }

  return {
    '@type': 'ItemList',
    '@id': itemListId,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item
    }))
  }
}

function breadcrumbNode(route: RouteInfo, title: string, host: string) {
  const match = route.pagePath.match(/^(features|guide|solutions|compare)\/(?!index$)(.+)$/)
  if (!match) return

  const section = match[1]
  const slug = match[2]
  const homeUrl = `${host}${route.localePath}/`
  const sectionUrl =
    section === 'guide'
      ? `${host}${route.localePath}/guide/what-is-flyenv`
      : `${host}${route.localePath}/${section}${section === 'compare' ? '/' : ''}`
  const itemListElement: any[] = [
    { '@type': 'ListItem', position: 1, name: labels[route.locale].home, item: homeUrl }
  ]

  if (section !== 'guide' || slug !== 'what-is-flyenv') {
    itemListElement.push({
      '@type': 'ListItem',
      position: itemListElement.length + 1,
      name: labels[route.locale][section],
      item: sectionUrl
    })
  }
  itemListElement.push({
    '@type': 'ListItem',
    position: itemListElement.length + 1,
    name: title,
    item: route.url
  })

  return {
    '@type': 'BreadcrumbList',
    '@id': `${route.url}#breadcrumb`,
    itemListElement
  }
}

function softwareNode(host: string) {
  return {
    '@type': 'SoftwareApplication',
    '@id': `${host}/#software`,
    name: 'FlyEnv',
    applicationCategory: 'DeveloperApplication',
    operatingSystem: ['Windows', 'macOS', 'Linux'],
    description:
      'FlyEnv is an open-source local development environment for managing runtimes, services, sites and AI-assisted workflows.',
    url: `${host}/`,
    downloadUrl: `${host}/download`,
    softwareHelp: `${host}/guide/what-is-flyenv`,
    sameAs: ['https://github.com/xpf0000/FlyEnv'],
    author: { '@type': 'Person', name: 'Alex Xu', url: 'https://github.com/xpf0000' },
    publisher: { '@id': `${host}/#organization` }
  }
}

function organizationNode(host: string) {
  return {
    '@type': 'Organization',
    '@id': `${host}/#organization`,
    name: 'FlyEnv',
    url: `${host}/`,
    logo: 'https://oss.macphpstudy.com/image/app-icon.png',
    sameAs: ['https://github.com/xpf0000/FlyEnv']
  }
}

function buildSchemaGraph(
  route: RouteInfo,
  title: string,
  description: string,
  host: string,
  featureSlugs: string[],
  featureLabels: Record<SeoLocale, Record<string, string>>
) {
  const collection = ['features', 'solutions', 'demos', 'community', 'compare/index'].includes(
    route.pagePath
  )
  const solutionBreadcrumbTitle =
    route.pagePath === 'solutions/laravel'
      ? 'Laravel'
      : route.pagePath === 'solutions/wordpress'
        ? 'WordPress'
        : title
  const breadcrumb = breadcrumbNode(route, solutionBreadcrumbTitle, host)
  const itemList = collection ? itemListNode(route, host, featureSlugs, featureLabels) : undefined
  const faq = comparisonFaqNode(route)
  const pageNode = {
    '@type': collection ? 'CollectionPage' : 'WebPage',
    '@id': `${route.url}#webpage`,
    name: title,
    url: route.url,
    description,
    inLanguage: route.language,
    isPartOf: { '@id': `${host}/#website` },
    ...(route.pagePath === 'solutions/laravel' || route.pagePath === 'solutions/wordpress'
      ? {
          about: {
            '@type': 'Thing',
            name: route.pagePath === 'solutions/laravel' ? 'Laravel' : 'WordPress',
            sameAs:
              route.pagePath === 'solutions/laravel'
                ? 'https://laravel.com/'
                : 'https://wordpress.org/'
          }
        }
      : {}),
    ...(breadcrumb ? { breadcrumb: { '@id': breadcrumb['@id'] } } : {}),
    ...(itemList ? { mainEntity: { '@id': itemList['@id'] } } : {}),
    ...(route.pagePath === 'index' || route.pagePath === 'download' || route.pagePath === 'license'
      ? { mainEntity: { '@id': `${host}/#software` } }
      : {})
  }
  const nodes: any[] = [pageNode]

  if (route.pagePath === 'index') {
    nodes.push({
      '@type': 'WebSite',
      '@id': `${host}/#website`,
      name: 'FlyEnv',
      url: `${host}/`,
      inLanguage: ['en', 'zh-CN', 'id-ID', 'es-ES'],
      publisher: { '@id': `${host}/#organization` },
      about: { '@id': `${host}/#software` }
    })
  }
  if (route.pagePath === 'index' || route.pagePath === 'download' || route.pagePath === 'license') {
    nodes.push(softwareNode(host), organizationNode(host))
  }
  if (breadcrumb) nodes.push(breadcrumb)
  if (itemList) nodes.push(itemList)
  if (faq) nodes.push(faq)

  return { '@context': 'https://schema.org', '@graph': nodes }
}

function upsertHeadEntry(
  head: HeadEntry[],
  additions: HeadEntry[],
  tag: string,
  key: string,
  value: string,
  attributes: Record<string, string>
) {
  const matches = head
    .map((entry, index) => ({ entry, index }))
    .filter(({ entry }) => entry[0] === tag && entry[1]?.[key] === value)

  if (matches.length > 0) {
    Object.assign(matches[0].entry[1], attributes)
    for (const duplicate of matches.slice(1).reverse()) head.splice(duplicate.index, 1)
  } else {
    additions.push([tag, attributes])
  }
}

export function buildSeoHead({
  page,
  title,
  description,
  head,
  host,
  socialImage,
  featureSlugs,
  featureLabels
}: BuildSeoHeadOptions) {
  const route = routeInfo(page, host)
  if (!route) return

  if (route.pagePath === '404' || route.pagePath === 'sponsor') {
    for (let index = head.length - 1; index >= 0; index -= 1) {
      const [tag, attributes] = head[index]
      const isSeoLink =
        tag === 'link' && ['canonical', 'alternate', 'describedby'].includes(attributes?.rel)
      const isSocialMeta =
        tag === 'meta' &&
        (String(attributes?.property || '').startsWith('og:') ||
          String(attributes?.name || '').startsWith('twitter:'))
      const isSchema = tag === 'script' && attributes?.type === 'application/ld+json'
      if (isSeoLink || isSocialMeta || isSchema) head.splice(index, 1)
    }
    return []
  }

  removeCustomSchema(head, route.url)
  const additions: HeadEntry[] = []

  for (let index = head.length - 1; index >= 0; index -= 1) {
    const [tag, attributes] = head[index]
    if (tag === 'link' && (attributes?.rel === 'alternate' || attributes?.rel === 'describedby')) {
      head.splice(index, 1)
    }
  }

  const localizedUrl = (locale: SeoLocale) =>
    `${host}${locale === 'en' ? '' : `/${locale}`}${route.relative}`
  const socialImageAlt =
    route.locale === 'zh'
      ? 'FlyEnv 应用图标'
      : route.locale === 'id'
        ? 'Ikon aplikasi FlyEnv'
        : route.locale === 'es'
          ? 'Icono de la aplicación FlyEnv'
          : 'FlyEnv application icon'

  upsertHeadEntry(head, additions, 'link', 'rel', 'canonical', {
    rel: 'canonical',
    href: route.url
  })
  additions.push(
    ['link', { rel: 'alternate', hreflang: 'en', href: localizedUrl('en') }],
    ['link', { rel: 'alternate', hreflang: 'zh-CN', href: localizedUrl('zh') }],
    ['link', { rel: 'alternate', hreflang: 'id-ID', href: localizedUrl('id') }],
    ['link', { rel: 'alternate', hreflang: 'es-ES', href: localizedUrl('es') }],
    ['link', { rel: 'alternate', hreflang: 'x-default', href: localizedUrl('en') }],
    ['link', { rel: 'describedby', href: `${host}/llms.txt` }]
  )
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:title', {
    property: 'og:title',
    content: title
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:description', {
    property: 'og:description',
    content: description
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:type', {
    property: 'og:type',
    content: 'website'
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:url', {
    property: 'og:url',
    content: route.url
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:image', {
    property: 'og:image',
    content: socialImage
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:image:alt', {
    property: 'og:image:alt',
    content: socialImageAlt
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:site_name', {
    property: 'og:site_name',
    content: 'FlyEnv'
  })
  upsertHeadEntry(head, additions, 'meta', 'property', 'og:locale', {
    property: 'og:locale',
    content: ogLocales[route.locale]
  })
  upsertHeadEntry(head, additions, 'meta', 'name', 'twitter:card', {
    name: 'twitter:card',
    content: 'summary'
  })
  upsertHeadEntry(head, additions, 'meta', 'name', 'twitter:title', {
    name: 'twitter:title',
    content: title
  })
  upsertHeadEntry(head, additions, 'meta', 'name', 'twitter:description', {
    name: 'twitter:description',
    content: description
  })
  upsertHeadEntry(head, additions, 'meta', 'name', 'twitter:image', {
    name: 'twitter:image',
    content: socialImage
  })
  upsertHeadEntry(head, additions, 'meta', 'name', 'twitter:image:alt', {
    name: 'twitter:image:alt',
    content: socialImageAlt
  })

  const schema = buildSchemaGraph(route, title, description, host, featureSlugs, featureLabels)
  additions.push(['script', { type: 'application/ld+json' }, JSON.stringify(schema)])
  return additions
}
