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

test('homepage conversion links submit one event with localized target and source context', async (t) => {
  const { page } = await openPage(t)
  const home = '/zh/'
  const cases = [
    ['/zh/demos', 'demos_nav_click', 'demos', 'hero'],
    ['/zh/features/php', 'home_feature_click', 'php', 'inline'],
    ['/zh/features/plugin-market', 'home_feature_click', 'plugin-market', 'inline'],
    ['/zh/features/mcp-server', 'home_feature_click', 'mcp-server', 'inline'],
    ['/zh/features/ai-memory', 'home_feature_click', 'ai-memory', 'inline'],
    ['/zh/solutions', 'solution_click', 'solutions', 'inline'],
    ['/zh/compare/', 'compare_nav_click', 'compare', 'inline'],
    ['/zh/license', 'license_nav_click', 'license', 'inline']
  ]
  for (const [target, event, content, position] of cases) {
    await page.goto(origin + home)
    await waitForView(page, home)
    await page
      .locator(`main a[data-analytics-surface^="new-home-"][href="${target}"]`)
      .first()
      .click()
    await waitForView(page, target)
    const [click, ...extra] = await eventPayloads(page, event)
    assert.equal(extra.length, 0, event)
    assert.equal(click?.source_page, home, event)
    assert.equal(click.target_page, target, event)
    assert.equal(click.content_id, content, event)
    assert.equal(click.cta_position, position, event)
    assert.equal(click.locale, 'zh', event)
  }

  await page.goto(origin + home)
  await waitForView(page, home)
  const demo = page.locator('main [data-analytics-surface="new-home-project-demo"]').first()
  const id = await demo.getAttribute('data-analytics-content-id')
  assert.ok(id)
  await demo.click()
  await waitForView(page, '/zh/demos')
  const [click, ...extra] = await eventPayloads(page, 'demos_nav_click')
  assert.equal(extra.length, 0)
  assert.equal(click.content_id, id)
  assert.equal(click.surface, 'demo_deep_link')
  assert.equal(click.target_page, '/zh/demos')
  assert.equal(click.cta_position, 'inline')
  assert.equal(click.source_page, home)
  assert.equal(click.locale, 'zh')
  assert.equal(click.target, '/zh/demos')

  await page.goto(origin + home)
  await waitForView(page, home)
  await page.locator('main [data-analytics-surface="new-home-final-cta"]').click()
  await waitForView(page, '/zh/download')
  const [footer, ...extraDownloads] = await eventPayloads(page, 'download_nav_click')
  assert.equal(extraDownloads.length, 0)
  assert.equal(footer?.content_id, 'download')
  assert.equal(footer.cta_position, 'footer')
  assert.equal(footer.source_page, home)
  assert.equal(footer.target_page, '/zh/download')

  await page.goto(origin + home)
  await waitForView(page, home)
  await page.locator('main a[data-analytics-event="home_section_click"][href="#compare"]').click()
  await page.waitForURL(origin + home + '#compare')
  const [jump, ...extraJumps] = await eventPayloads(page, 'home_section_click')
  assert.equal(extraJumps.length, 0)
  assert.equal(jump?.content_id, 'compare')
  assert.equal(jump.target_page, home)
  assert.equal(jump.cta_position, 'hero')
  assert.equal((await eventPayloads(page, 'compare_nav_click')).length, 0)
})

test('localized homepages render responsive layouts and a keyboard-operable Startup Group preview', async (t) => {
  const { page } = await openPage(t)
  for (const prefix of locales) {
    const home = prefix + '/'
    for (const [width, colorScheme] of [
      [320, 'dark'],
      [390, 'light'],
      [768, 'dark'],
      [1024, 'light'],
      [1440, 'light'],
      [1440, 'dark']
    ]) {
      await page.setViewportSize({ width, height: 900 })
      await page.emulateMedia({ colorScheme })
      await page.goto(origin + home)
      const main = page.locator('main.home-landing')
      assert.equal(await main.locator('h1').count(), 1, home)
      assert.equal(await page.locator('.VPSidebar').count(), 0, home)
      assert.equal(
        await page.locator('html').evaluate((html) => html.classList.contains('dark')),
        colorScheme === 'dark'
      )
      assert.equal(
        await page.evaluate((limit) => document.documentElement.scrollWidth <= limit, width),
        true,
        `${home} at ${width}`
      )
      const heroWidth = await main
        .locator('.hero-grid')
        .evaluate((hero) => hero.getBoundingClientRect().width)
      assert.equal(heroWidth, Math.min(width, 1400), home)
      const labels = await main
        .locator('.section-label')
        .evaluateAll((nodes) => nodes.map((node) => getComputedStyle(node).textDecorationLine))
      assert.ok(labels.length > 0 && labels.every((line) => line === 'none'), home)
      if (width === 390) {
        await waitForView(page, home)
        const start = main.locator('.hero .start-toggle')
        const services = main.locator('.hero .svc-status')
        assert.equal(await services.count(), 4)
        const ready = await services.allTextContents()
        const original = await start.innerText()
        await start.focus()
        await page.keyboard.press('Space')
        assert.equal(await start.getAttribute('aria-pressed'), 'true')
        assert.notDeepEqual(await services.allTextContents(), ready)
        assert.notEqual(await start.innerText(), original)
        await page.keyboard.press('Enter')
        assert.equal(await start.getAttribute('aria-pressed'), 'false')
        assert.deepEqual(await services.allTextContents(), ready)
      }
    }
  }
})

test('the homepage tablet menu keeps language, appearance and search controls reachable', async (t) => {
  const { page } = await openPage(t, 1024)
  await page.emulateMedia({ colorScheme: 'light' })
  await page.goto(origin + '/es/')
  await waitForView(page, '/es/')
  await page.locator('.VPNavBarHamburger').click()
  const screen = page.locator('#VPNavScreen')
  const darkMode = screen.getByRole('switch')
  await darkMode.click()
  await page.locator('html.dark').waitFor()
  await screen.locator('.VPNavScreenTranslations button').click()
  await screen.locator('a[href="/id/"]').click()
  await waitForView(page, '/id/')
  await screen.waitFor({ state: 'hidden' })
  assert.equal(await page.locator('.VPNavBarSearch button').first().isVisible(), true)
})

test('localized Compare entry, Plugin Market and migration links emit scoped navigation', async (t) => {
  const { page } = await openPage(t)
  const prefix = '/zh'
  const index = prefix + '/compare/'
  await page.goto(origin + prefix + '/demos')
  await waitForView(page, prefix + '/demos')
  await page.locator(`.VPNav a[href="${index}"]`).click()
  await waitForView(page, index)
  const [entry] = await eventPayloads(page, 'compare_nav_click')
  assert.equal(entry?.target_page, index)
  assert.equal(entry.surface, 'primary_nav')

  const market = prefix + '/features/plugin-market'
  await page.locator('main a[data-analytics-surface="compare-plugin-market"]').first().click()
  await waitForView(page, market)
  const [marketEvent, ...extraMarketEvents] = await eventPayloads(
    page,
    'compare_plugin_market_click'
  )
  assert.equal(marketEvent?.source_page, index)
  assert.equal(marketEvent.target_page, market)
  assert.equal(extraMarketEvents.length, 0)

  await page.goBack()
  await waitForView(page, index)
  const detail = index + 'laragon'
  await page
    .locator(`main a[data-analytics-surface="compare-entry"][href="${detail}"]`)
    .first()
    .click()
  await waitForView(page, detail)
  const detailEntry = (await eventPayloads(page, 'compare_nav_click')).at(-1)
  assert.equal(detailEntry?.source_page, index)
  assert.equal(detailEntry.target_page, detail)

  const guide = prefix + '/guide/getting-started'
  await page.locator(`main a[data-analytics-surface="compare-migration"][href="${guide}"]`).click()
  await waitForView(page, guide)
  const [migration, ...extraMigrations] = await eventPayloads(page, 'compare_migration_click')
  assert.equal(migration?.source_page, detail)
  assert.equal(migration.target_page, guide)
  assert.equal(extraMigrations.length, 0)
  assert.equal((await eventPayloads(page, 'guide_click')).length, 1)

  await page.goto(origin + index)
  await waitForView(page, index)
  await page.locator('main a[data-analytics-surface="compare-hero"]').click()
  await waitForView(page, prefix + '/download')
  const [download, ...extraDownloads] = await eventPayloads(page, 'download_nav_click')
  assert.equal(download?.source_page, index)
  assert.equal(download.target_page, prefix + '/download')
  assert.equal(download.cta_position, 'hero')
  assert.equal(extraDownloads.length, 0)
})

test('outside download links are excluded and a trailing-slash license link emits one pair', async (t) => {
  const { page } = await openPage(t)
  const source = '/id/compare/servbay'
  await page.goto(origin + source)
  await waitForView(page, source)
  const external = page.locator('main a[href="https://www.servbay.com/download"]').first()
  await external.evaluate((node) =>
    node.addEventListener('click', (event) => event.preventDefault())
  )
  await external.click()
  assert.equal((await eventPayloads(page, 'download_click')).length, 0)
  assert.equal((await eventPayloads(page, 'download_nav_click')).length, 0)

  const licenseFaq = page
    .locator('main #faq details')
    .filter({ has: page.locator('a[href="/id/license"]') })
  await licenseFaq.locator('summary').click()
  const license = licenseFaq.locator('a[href="/id/license"]')
  await license.evaluate((node) => node.setAttribute('href', '/id/license/'))
  await page.locator('main #faq a[href="/id/license/"]').click()
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
    await page.locator(`main a[href="${prefix}/demos?video=${videoId}"]`).first().click()
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

test('the approved Compare layouts fit all languages on mobile and dark desktop', async (t) => {
  const { page } = await openPage(t)
  const details = ['laragon', 'servbay', 'herd', 'xampp', 'mamp', 'docker']
  for (const [width, colorScheme] of [
    [320, 'light'],
    [1440, 'dark']
  ]) {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ colorScheme })
    for (const prefix of locales) {
      for (const slug of ['', ...details]) {
        const path = prefix + '/compare/' + slug
        await page.goto(origin + path)
        const main = page.locator('main')
        assert.equal(await main.locator('h1').count(), 1, path)
        assert.equal(await page.locator('.VPSidebar').count(), 0, path)
        assert.equal(
          await page.locator('html').evaluate((html) => html.classList.contains('dark')),
          colorScheme === 'dark',
          path
        )
        assert.ok(
          await page.evaluate((limit) => document.documentElement.scrollWidth <= limit, width),
          path
        )
        assert.ok(await main.locator(`a[href="${prefix}/features/plugin-market"]`).count(), path)
        const header = main.getByRole('table').first().getByRole('columnheader').last()
        assert.ok(
          await header.evaluate((node) => parseFloat(getComputedStyle(node).paddingTop) >= 12),
          path
        )
        if (slug) {
          assert.equal(await main.locator('#migration #migration-title').count(), 1, path)
          assert.ok(await main.locator('#faq details summary').count(), path)
        } else {
          for (const name of details) {
            assert.ok(
              await main
                .locator(
                  `a[data-analytics-surface="compare-entry"][href="${prefix}/compare/${name}"]`
                )
                .count(),
              path
            )
          }
        }
      }
    }
  }
})

test('Compare previews and FAQ disclosures work with the keyboard', async (t) => {
  const { page } = await openPage(t, 390)
  for (const [route, selector] of [
    ['', '[data-compare-startup-toggle]'],
    ['laragon', '[data-compare-startup]'],
    ['servbay', '[data-startup-preview]']
  ]) {
    const path = '/zh/compare/' + route
    await page.goto(origin + path)
    await waitForView(page, path)
    const button = page.locator(selector).first()
    const originalLabel = await button.innerText()
    await button.focus()
    await page.keyboard.press('Space')
    await page.waitForFunction(
      ({ selector, originalLabel }) =>
        document.querySelector(selector)?.innerText !== originalLabel,
      { selector, originalLabel }
    )
    await page.keyboard.press('Enter')
    assert.equal(await button.innerText(), originalLabel)
    if (route) {
      const faq = page.locator('main #faq details').first()
      await faq.locator('summary').focus()
      await page.keyboard.press('Enter')
      assert.equal(await faq.evaluate((node) => node.open), true)
    }
  }
})

test('Demos aligns with the Solutions catalog on desktop and mobile', async (t) => {
  const { page } = await openPage(t)
  const contentBounds = (locator) =>
    locator.evaluate((node) => {
      const { left, right } = node.getBoundingClientRect()
      return { left, right }
    })

  const columnCount = (locator) =>
    locator.evaluate((node) => getComputedStyle(node).gridTemplateColumns.split(' ').length)

  for (const prefix of locales) {
    for (const [width, columns] of [
      [320, 1],
      [390, 1],
      [640, 1],
      [768, 2],
      [960, 2],
      [1024, 2],
      [1100, 3],
      [1440, 3],
      [1920, 3]
    ]) {
      await page.setViewportSize({ width, height: 900 })
      await page.goto(origin + prefix + '/solutions')
      const solutions = await contentBounds(page.locator('#solutions-catalog'))
      await page.goto(origin + prefix + '/demos')
      const toolbar = await contentBounds(page.locator('.demos-browse-bar'))
      const featured = page.locator('.demos-featured-grid')
      const catalog = page.locator('.demos-grid').first()
      const documentWidth = await page.evaluate(() => document.documentElement.scrollWidth)
      assert.deepEqual(toolbar, solutions, `Demos toolbar in ${prefix || 'en'} at ${width}px`)
      assert.deepEqual(
        await contentBounds(featured),
        solutions,
        `Featured demos in ${prefix || 'en'} at ${width}px`
      )
      assert.equal(await columnCount(featured), columns, `Featured columns at ${width}px`)
      assert.equal(await columnCount(catalog), columns, `Catalog columns at ${width}px`)
      assert.ok(documentWidth <= width, `Demos horizontal overflow at ${width}px`)
    }
  }
})
