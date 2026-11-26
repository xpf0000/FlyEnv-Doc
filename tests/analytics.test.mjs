import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { runInNewContext } from 'node:vm'
import ts from 'typescript'

const source = readFileSync(new URL('../docs/utils/analytics.ts', import.meta.url), 'utf8')
const { outputText } = ts.transpileModule(source, {
  compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
})

function browser(href, { referrer = '', navigator = {} } = {}) {
  const window = { location: new URL(href), navigator }
  const scripts = []
  const document = {
    referrer,
    createElement: () => ({}),
    head: { append: (script) => scripts.push(script) }
  }
  const exports = {}
  runInNewContext(outputText, { window, document, exports, URL, URLSearchParams })
  const router = { route: { data: { relativePath: 'es/index.md', title: 'FlyEnv' } } }
  return {
    window,
    scripts,
    router,
    ...exports,
    commands: () => Array.from(window.dataLayer || [], (command) => Array.from(command))
  }
}

test('SPA emits one sanitized view per document path and keeps public campaign attribution', () => {
  const app = browser(
    'https://flyenv.com/es/index.html?utm_source=community&utm_campaign=launch&order=example&q=private#anchor',
    {
      referrer: 'https://www.google.com/search?q=private'
    }
  )
  app.installAnalytics(app.router, 'G-TEST', 'https://flyenv.com')
  app.router.onAfterRouteChange()
  app.window.location = new URL('https://flyenv.com/es/?q=private')
  app.router.onAfterRouteChange()
  app.window.location = new URL('https://flyenv.com/vi/compare/docker?email=private')
  app.router.route.data = { relativePath: 'vi/compare/docker.md', title: 'Docker' }
  app.router.onAfterRouteChange()
  const configs = app.commands().filter(([type]) => type === 'config')
  assert.equal(configs[0][2].send_page_view, false)
  assert.equal(
    configs[0][2].page_location,
    'https://flyenv.com/es/?utm_source=community&utm_campaign=launch'
  )
  assert.equal(configs[0][2].page_referrer, 'https://www.google.com/')
  const views = app.commands().filter(([type, event]) => type === 'event' && event === 'page_view')
  assert.equal(views.length, 2)
  assert.equal(views[1][2].page_location, 'https://flyenv.com/vi/compare/docker')
  assert.equal(views[1][2].page_referrer, 'https://flyenv.com/es/')
  assert.equal(app.scripts.length, 1)
  assert.doesNotMatch(JSON.stringify(app.commands()), /order=|private|#anchor/)
})

test('custom events use five-locale source context and drop raw target query or fragment', () => {
  const app = browser('https://flyenv.com/vi/compare/docker.html')
  app.router.route.data = { relativePath: 'vi/compare/docker.md', title: 'Docker' }
  app.installAnalytics(app.router, 'G-TEST', 'https://flyenv.com')
  app.router.onAfterRouteChange()
  app.trackEvent('download_nav_click', {
    target: 'https://flyenv.com/vi/download?private=example#packages'
  })
  const payload = app.commands().at(-1)[2]
  assert.equal(payload.locale, 'vi')
  assert.equal(payload.page_type, 'compare')
  assert.equal(payload.content_id, 'docker')
  assert.equal(payload.source_page, '/vi/compare/docker')
  assert.equal(payload.target, '/vi/download')
})

test('payment return, non-production origins and privacy opt-outs do not initialize analytics', () => {
  const cases = [
    ['https://flyenv.com/es/payment-success?order=example', {}, 'es/payment-success.md'],
    ['http://localhost/', {}, 'index.md'],
    ['https://flyenv.com/', { globalPrivacyControl: true }, 'index.md'],
    ['https://flyenv.com/', { doNotTrack: '1' }, 'index.md']
  ]
  for (const [url, navigator, relativePath] of cases) {
    const app = browser(url, { navigator })
    app.router.route.data.relativePath = relativePath
    app.installAnalytics(app.router, 'G-TEST', 'https://flyenv.com')
    app.router.onAfterRouteChange?.()
    app.trackEvent('download_click')
    assert.equal(app.commands().length, 0, url)
    assert.equal(app.scripts.length, 0, url)
  }
})

test('unknown paths collapse to a fixed 404 and SPA payment paths suppress custom events', () => {
  const app = browser('https://flyenv.com/id/missing-example')
  app.router.route.path = '/id/missing-example'
  app.router.route.data = { isNotFound: true, title: '404' }
  app.installAnalytics(app.router, 'G-TEST', 'https://flyenv.com')
  app.router.onAfterRouteChange()
  assert.equal(app.commands().at(-1)[2].page_location, 'https://flyenv.com/id/404')
  app.window.location = new URL('https://flyenv.com/id/payment-success?order=example')
  app.router.route.data = { relativePath: 'id/payment-success.md', title: 'Payment Success' }
  app.router.onAfterRouteChange()
  assert.equal(app.commands().at(-1)[2].page_location, 'https://flyenv.com/id/payment-success')
  const before = app.commands().length
  app.trackEvent('download_click')
  assert.equal(app.commands().length, before)
})
