import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

const dist = new URL('../docs/.vitepress/dist/', import.meta.url)
const source = new URL('../docs/data/', import.meta.url)
const locales = ['en', 'zh', 'id', 'es', 'vi']

function readData(file) {
  const { outputText } = ts.transpileModule(readFileSync(new URL(file, source), 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  })
  const exports = {}
  runInNewContext(outputText, { exports })
  return exports
}

function readHtml(locale, route) {
  const prefix = locale === 'en' ? '' : locale + '/'
  return readFileSync(new URL(prefix + route + '.html', dist), 'utf8')
}

function section(html, id) {
  const result = html.match(
    new RegExp(`<section\\b[^>]*aria-labelledby="${id}"[^>]*>(.*?)</section>`, 's')
  )
  assert.ok(result, `Missing section ${id}`)
  return result[1]
}

function text(html) {
  return html
    .replace(/<[^>]+>/g, ' ')
    .replace(
      /&amp;|&quot;|&#39;|&#x27;|&lt;|&gt;/g,
      (entity) =>
        ({ '&amp;': '&', '&quot;': '"', '&#39;': "'", '&#x27;': "'", '&lt;': '<', '&gt;': '>' })[
          entity
        ]
    )
    .replace(/\s+/g, ' ')
    .trim()
}

test('the five homepages contain the approved sections, project links and licensing in static HTML', () => {
  const sections = [
    'why',
    'stack',
    'plugins',
    'ai',
    'projects',
    'compare',
    'developer-stories',
    'pricing'
  ]
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : '/' + locale
    const html = readHtml(locale, 'index')
    let previous = 0
    for (const id of sections) {
      const position = html.indexOf(`id="${id}"`, previous)
      assert.ok(position > previous, `${locale} ${id} missing or out of order`)
      previous = position
    }
    assert.equal((html.match(/<h1\b/g) || []).length, 1, locale)
    assert.doesNotMatch(html, /name="robots" content="[^"]*(?:noindex|nofollow)/)
    assert.ok(html.includes(`href="https://flyenv.com${prefix}/"`), locale)
    assert.match(html, /data-home-free-limits/)
    assert.match(html, /data-home-pro-benefits/)
    assert.ok(html.includes('$0') && html.includes('$10'), locale)
    for (const slug of ['laragon', 'xampp', 'mamp', 'herd']) {
      assert.ok(html.includes(`href="${prefix}/compare/${slug}"`), `${locale} ${slug}`)
    }
    assert.equal(
      (
        html.match(/<a\b[^>]*\?video=[^"]*"[^>]*data-analytics-surface="new-home-project-demo"/g) ||
        []
      ).length,
      3,
      locale
    )
  }
  assert.match(text(readHtml('en', 'index')), /all-in-one local development environment/i)
})

test('localized Laravel breadcrumb renders the locale home and Solutions links', () => {
  for (const locale of locales) {
    const prefix = locale === 'en' ? '' : '/' + locale
    const html = readHtml(locale, 'solutions/laravel')
    const nav = html.match(/<nav aria-label="Breadcrumb">(.*?)<\/nav>/s)?.[1] || ''
    assert.deepEqual(
      [...nav.matchAll(/<a href="([^"]+)"/g)].map((match) => match[1]),
      [prefix + '/', prefix + '/solutions'],
      locale
    )
  }
})

test('Compare trial migrations expose a localized getting started link on all detail routes', () => {
  for (const slug of ['laragon', 'servbay', 'herd', 'xampp', 'mamp', 'docker']) {
    for (const locale of locales) {
      const prefix = locale === 'en' ? '' : '/' + locale
      const html = section(readHtml(locale, 'compare/' + slug), 'migration-title')
      const guide = prefix + '/guide/getting-started'
      assert.ok(html.includes(`href="${guide}"`), `${slug} ${locale}: missing ${guide}`)
      assert.match(html, /data-analytics-surface="compare-migration"/)
    }
  }
})

test('localized Solution roles key each actual component and render alongside it', () => {
  const { solutionWorkflows } = readData('solution-workflows.ts')
  const { solutionDetails } = readData('solution-details.ts')
  const stacks = {
    erpnext: {
      python: 'Python',
      mariadb: 'MariaDB',
      redis: 'Redis',
      nginx: 'Nginx',
      nodejs: 'Node.js'
    },
    'spring-boot': {
      java: 'Java',
      database: 'PostgreSQL / MySQL',
      redis: 'Redis',
      proxy: 'Nginx / Caddy'
    },
    fastapi: {
      python: 'Python',
      database: 'PostgreSQL / MySQL',
      redis: 'Redis',
      proxy: 'Nginx / Caddy'
    }
  }
  for (const [slug, components] of Object.entries(stacks)) {
    const stack = solutionDetails[slug].stack
    assert.equal(stack.length, Object.keys(components).length)
    assert.deepEqual(
      Object.fromEntries(Array.from(stack, ({ key, component }) => [key, component])),
      components,
      slug
    )
    for (const locale of locales) {
      const { roles, help, setupSteps } = solutionWorkflows[slug][locale]
      assert.deepEqual(
        Object.keys(roles).sort(),
        Object.keys(components).sort(),
        `${slug} ${locale}`
      )
      const html = readHtml(locale, 'solutions/' + slug)
      const stackHtml = section(html, 'typical-stack-title')
      const table = stackHtml.match(/<tbody>(.*?)<\/tbody>/s)?.[1] || ''
      const rows = [...table.matchAll(/<tr\b[^>]*>(.*?)<\/tr>/gs)].map((match) => match[1])
      assert.equal(rows.length, Object.keys(components).length, `${slug} ${locale}`)
      for (const [key, component] of Object.entries(components)) {
        assert.ok(roles[key]?.trim(), `${slug} ${locale} missing ${key} role`)
        const row = rows.find(
          (row) => text(row.match(/<th\b[^>]*>(.*?)<\/th>/s)?.[1] || '') === component
        )
        assert.ok(
          row && text(row.match(/<td\b[^>]*>(.*?)<\/td>/s)?.[1] || '') === roles[key],
          `${slug} ${locale}: role for ${key}`
        )
      }
      const pageText = text(html)
      for (const copy of [...help.map((item) => item.title), ...setupSteps]) {
        assert.ok(
          copy?.trim() && pageText.includes(copy),
          `${slug} ${locale}: missing workflow copy`
        )
      }
    }
  }
})
