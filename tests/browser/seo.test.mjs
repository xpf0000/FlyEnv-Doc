import assert from 'node:assert/strict'
import { stat } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { after, before, test } from 'node:test'
import { chromium } from 'playwright'

const dist = fileURLToPath(new URL('../../docs/.vitepress/dist/', import.meta.url))
const origin = 'https://flyenv.com'
const locales = ['', '/zh', '/id', '/es', '/vi']
const tagHost = 'www.googletagmanager.com'
let browser

before(async () => {
  await stat(path.join(dist, 'index.html'))
  const channel = process.env.PLAYWRIGHT_CHROMIUM_CHANNEL
  browser = await chromium.launch({ channel })
})

after(async () => {
  await browser?.close()
})

async function openPage(t, width = 1440) {
  const context = await browser.newContext({
    viewport: { width, height: 900 },
    acceptDownloads: false,
    serviceWorkers: 'block'
  })
  const requests = []
  // Serve the production build under the configured production origin, entirely offline.
  await context.route('**/*', async (route) => {
    const url = new URL(route.request().url())
    requests.push(url.hostname)
    if (url.origin !== origin) return route.fulfill({ body: '' })

    const base = path.resolve(dist, '.' + decodeURIComponent(url.pathname))
    if (base !== path.resolve(dist) && !base.startsWith(dist)) return route.abort()
    for (const file of [base, path.join(base, 'index.html'), base + '.html']) {
      const info = await stat(file).catch((error) => {
        if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error
      })
      if (info?.isFile()) return route.fulfill({ path: file })
    }
    return route.fulfill({ status: 404, path: path.join(dist, '404.html') })
  })
  t.after(() => context.close())
  return { page: await context.newPage(), requests }
}

const eventPayloads = (page, name) =>
  page.evaluate(
    (name) =>
      (window.dataLayer || [])
        .filter(([cmd, type]) => cmd === 'event' && type === name)
        .map((entry) => entry[2]),
    name
  )

async function waitForView(page, path) {
  await page.waitForFunction(
    (path) =>
      (window.dataLayer || []).some(
        (entry) => entry[1] === 'page_view' && entry[2]?.page_path === path
      ),
    path
  )
}

test('Laravel breadcrumb opens the home page in the same language', async (t) => {
  for (const prefix of locales) {
    for (const width of [1440, 390]) {
      await t.test(`${prefix || 'en'} at ${width}px`, async (t) => {
        const { page } = await openPage(t, width)
        const source = prefix + '/solutions/laravel'
        await page.goto(origin + source)
        await waitForView(page, source)
        await page
          .getByRole('navigation', { name: 'Breadcrumb' })
          .getByRole('link', { name: 'FlyEnv' })
          .click()
        await page.waitForURL(origin + prefix + '/', { timeout: 5000 })
        assert.equal(await page.locator('h1').count(), 1)
      })
    }
  }
})

test('home download CTA and real package cards emit their own intent in all five languages', async (t) => {
  const { page } = await openPage(t)
  for (const prefix of locales) {
    const home = prefix + '/'
    const target = prefix + '/download'
    await page.goto(origin + home + '?utm_source=seo_test&order=ignored-example')
    await waitForView(page, home)
    const [firstView] = await eventPayloads(page, 'page_view')
    assert.equal(firstView.page_location, origin + home + '?utm_source=seo_test')

    await page.locator('a[data-analytics-surface="new-home-hero"][href$="/download"]').click()
    await waitForView(page, target)
    const [nav, ...otherNav] = await eventPayloads(page, 'download_nav_click')
    assert.equal(otherNav.length, 0, prefix)
    assert.equal(nav.source_page, home)
    assert.equal(nav.target_page, target)
    assert.equal(nav.cta_position, 'hero')

    const packages = page.locator('a[data-analytics-package-type]')
    assert.equal(await packages.count(), 8, prefix)
    const packageLink = page.locator(
      '[data-analytics-package-type="deb"][data-analytics-architecture="x64"]'
    )
    await packageLink.evaluate((node) =>
      node.addEventListener('click', (event) => event.preventDefault())
    )
    await packageLink.click()
    const downloads = await eventPayloads(page, 'download_click')
    assert.deepEqual(
      downloads.map((event) => event.download_intent),
      ['navigation', 'package']
    )
    const pkg = downloads[1]
    assert.equal(pkg.source_page, target)
    assert.equal(pkg.locale, prefix.slice(1) || 'en')
    assert.equal(pkg.platform, 'linux')
    assert.equal(pkg.architecture, 'x64')
    assert.equal(pkg.package_type, 'deb')
    assert.equal(pkg.download_source, 'github')
    assert.match(pkg.app_version, /^v\d+\.\d+\.\d+/)
  }
})

test('outside download links are excluded and a trailing-slash license link emits one pair', async (t) => {
  const { page } = await openPage(t)
  const source = '/id/compare/servbay'
  await page.goto(origin + source)
  await waitForView(page, source)
  const external = page.locator('a[href="https://www.servbay.com/download"]').first()
  await external.evaluate((node) =>
    node.addEventListener('click', (event) => event.preventDefault())
  )
  await external.click()
  assert.equal((await eventPayloads(page, 'download_click')).length, 0)
  assert.equal((await eventPayloads(page, 'download_nav_click')).length, 0)

  const license = page.locator('a[href="/id/license"]').first()
  await license.evaluate((node) => node.setAttribute('href', '/id/license/'))
  await license.click()
  await waitForView(page, '/id/license')
  assert.equal((await eventPayloads(page, 'license_click')).length, 1)
  const [nav, ...extra] = await eventPayloads(page, 'license_nav_click')
  assert.equal(extra.length, 0)
  assert.equal(nav.source_page, source)
  assert.equal(nav.target_page, '/id/license')
})

test('checkout emits one purchase intent while loading and returns to the correct language', async (t) => {
  const { page } = await openPage(t)
  for (const prefix of locales) {
    const source = prefix + '/license'
    let release
    const allowScript = new Promise((resolve) => {
      release = resolve
    })
    await page.route(
      'https://cdn.paddle.com/paddle/v2/paddle.js',
      async (route) => {
        await allowScript
        return route.fulfill({
          contentType: 'text/javascript',
          body: 'window.Paddle={Initialize(){},Checkout:{open(options){window.checkoutReturn=options.settings.successUrl}}}'
        })
      },
      { times: 1 }
    )

    try {
      await page.goto(origin + source)
      await waitForView(page, source)
      const button = page.locator('button[data-analytics-license-purchase="hero"]')
      await button.click()
      await button.and(page.locator(':disabled')).waitFor()
      await button.evaluate((node) => node.click())
      const [purchase, ...extra] = await eventPayloads(page, 'license_purchase_click')
      assert.equal(extra.length, 0)
      assert.equal(purchase.license_method, 'purchase')
      assert.equal(purchase.cta_position, 'hero')
      assert.equal(purchase.source_page, source)
    } finally {
      release()
    }
    await page.waitForFunction(() => window.checkoutReturn)
    assert.equal(
      await page.evaluate(() => window.checkoutReturn),
      origin + prefix + '/payment-success'
    )
  }
})

test('localized Compare deep links open one demo, record its source and restore keyboard focus', async (t) => {
  const { page } = await openPage(t, 390)
  for (const prefix of locales) {
    const source = prefix + '/compare/laragon'
    const videoId = 'project-environment-switching'
    await page.goto(origin + source)
    await waitForView(page, source)
    await page.locator(`a[href="${prefix}/demos?video=${videoId}"]`).click()
    await waitForView(page, prefix + '/demos')
    await page.waitForFunction(
      () => document.querySelectorAll('article[data-demo-id]').length === 1
    )
    const card = page.locator(`article[data-demo-id="${videoId}"]`)
    assert.equal(await card.count(), 1)
    assert.equal(await page.locator('iframe').count(), 0)
    const [nav, ...extra] = await eventPayloads(page, 'demos_nav_click')
    assert.equal(extra.length, 0)
    assert.equal(nav.surface, 'demo_deep_link')
    assert.equal(nav.source_page, source)

    const play = card.locator('button.demo-cover')
    await play.focus()
    await page.keyboard.press('Enter')
    const dialog = page.getByRole('dialog')
    await dialog.locator('iframe').waitFor()
    assert.equal(await dialog.locator('iframe').count(), 1)
    const [played, ...additional] = await eventPayloads(page, 'demos_play')
    assert.equal(additional.length, 0)
    assert.equal(played.demo_id, videoId)
    await page.keyboard.press('Escape')
    await dialog.waitFor({ state: 'hidden' })
    assert.equal(await play.evaluate((node) => node === document.activeElement), true)

    await page.locator('input[type=search]').fill('example-search')
    await page.waitForFunction(() =>
      (window.dataLayer || []).some((entry) => entry[1] === 'demos_search')
    )
    const [search] = await eventPayloads(page, 'demos_search')
    assert.equal(search.query_length, 'example-search'.length)
    assert.doesNotMatch(JSON.stringify(search), /example-search/)
    assert.equal((await eventPayloads(page, 'page_view')).length, 2)
  }
})

test('DNT, GPC and a direct payment return keep the tag unloaded', async (t) => {
  for (const setting of ['doNotTrack', 'globalPrivacyControl', 'payment']) {
    await t.test(setting, async (t) => {
      const { page, requests } = await openPage(t)
      if (setting !== 'payment') {
        await page.addInitScript(
          (setting) =>
            Object.defineProperty(navigator, setting, {
              value: setting === 'doNotTrack' ? '1' : true
            }),
          setting
        )
      }
      const target = setting === 'payment' ? '/id/payment-success?order=ignored-example' : '/id/'
      await page.goto(origin + target)
      assert.equal(await page.evaluate(() => typeof window.gtag), 'undefined')
      assert.equal(requests.includes(tagHost), false)
      assert.equal(await page.locator('h1').count(), 1)
    })
  }
})
