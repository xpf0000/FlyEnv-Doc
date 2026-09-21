import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const pagePath = new URL('../docs/components/WordPressSolutionPage.vue', import.meta.url)
const localeDataPath = new URL('../docs/components/wordpress-solution-locales.ts', import.meta.url)
const routePath = new URL('../docs/solutions/wordpress.md', import.meta.url)

test('WordPress solution uses an independent WordPress-specific page', async () => {
  const [page, localeData, route] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(localeDataPath, 'utf8'),
    readFile(routePath, 'utf8')
  ])
  const source = `${page}\n${localeData}`

  assert.match(route, /WordPressSolutionPage/)
  assert.doesNotMatch(route, /AppSolutionDetail/)
  assert.match(source, /WordPress local development environment with FlyEnv/)
  assert.match(source, /A WordPress site workflow in FlyEnv/)
  assert.match(source, /Multiple WordPress sites, one workspace/)
  assert.match(source, /PHP versions and extensions/)
  assert.match(source, /wp-content\/themes/)
  assert.match(source, /wp-content\/plugins/)
  assert.match(source, /Start a new WordPress site or bring an existing one local/)
  assert.doesNotMatch(page, /wordpress-workflow-arrow/)
  assert.doesNotMatch(page, /Queue workers|Laravel scheduler|Composer creation command/)
  assert.doesNotMatch(page, /<style/)

  assert.ok(
    page.indexOf('aria-labelledby="sites-title"') <
      page.indexOf('aria-labelledby="site-lifecycle-title"')
  )
})

test('WordPress solution covers site lifecycle and linked local services', async () => {
  const [page, localeData] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(localeDataPath, 'utf8')
  ])
  const source = `${page}\n${localeData}`

  for (const slug of [
    'php',
    'mysql',
    'mariadb',
    'nginx',
    'apache',
    'local-sites-https',
    'redis',
    'nodejs'
  ]) {
    assert.match(source, new RegExp(`/features/${slug}`))
  }
  assert.match(source, /document root/)
  assert.match(source, /wp-config\.php/)
  assert.match(source, /Startup Group/)
  assert.match(page, /assets\/demo-logos\/wordpress\.svg/)
  assert.doesNotMatch(page, /marker-end="url\(#wordpress-workflow-arrow\)"/)
  assert.doesNotMatch(page, /lg:grid-cols-\[minmax\(0,1fr\)_280px\]/)
  assert.match(page, /lg:grid-cols-\[minmax\(0,1fr\)_320px\]/)
})

test('WordPress solution refinements emphasize site-specific workflows', async () => {
  const [page, localeData] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(localeDataPath, 'utf8')
  ])
  const heroStack = localeData.match(/heroStack: \[([\s\S]*?)\n  \]/)?.[1]
  const benefits = localeData.match(/benefits: \[([\s\S]*?)\n  \]/)?.[1]

  assert.ok(heroStack)
  assert.equal((heroStack.match(/\{ label:/g) || []).length, 4)
  assert.doesNotMatch(heroStack, /Redis|Node\.js/)
  assert.match(localeData, /title: 'Theme \/ plugin development', description: 'Develop themes and plugins within wp-content\/themes and wp-content\/plugins\.'/)
  assert.match(localeData, /Each WordPress site keeps its own PHP version, document root, database, and local domain while remaining visible in one FlyEnv workspace\./)
  assert.ok(benefits)
  assert.match(benefits, /title: 'Choose MySQL or MariaDB',[^\n]+emphasis: true, evidence: 'Use the engine your site expects'/)
  assert.equal((benefits.match(/emphasis: true/g) || []).length, 3)
  assert.match(localeData, /title: 'Redis object cache',[^\n]+description: 'Optional object cache for sites whose caching setup uses Redis\.'/)
  assert.match(localeData, /title: 'Node\.js tooling',[^\n]+description: 'Add for theme or block tooling that requires a build step\.'/)
  assert.match(page, /class="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl bg/)
  assert.match(page, /class="mt-6 flex flex-col items-center justify-between gap-2 border-t/)
})

test('WordPress solution uses Tailwind utilities and accessible static content', async () => {
  const page = await readFile(pagePath, 'utf8')

  assert.doesNotMatch(page, /class="[^"]*\b(wordpress|solution|hero|site)-[a-z-]+\b[^"]*"/)
  assert.match(page, /class="[^"]*mx-auto[^\"]*max-w-/)
  assert.match(page, /aria-labelledby="site-lifecycle-title"/)
  assert.match(page, /<section class="border-y border-\[#dfe8f4\] bg-\[#f5faff\][^\"]*" aria-labelledby="sites-title">/)
  assert.match(page, /<section class="border-y border-\[#dfe8f4\] bg-white[^\"]*" aria-labelledby="site-lifecycle-title">/)
  assert.match(page, /v-for="item in copy\.faqs"/)
  assert.match(page, /class="mt-6 overflow-hidden rounded-2xl[^"]*"/)
  assert.match(page, /class="!m-0 !table w-full min-w-0 lg:min-w-\[760px\]/)
  assert.match(page, /<ol class="[^\"]*!list-none[^\"]*grid/)
  assert.doesNotMatch(page, /index === 0 \? '!mt-\[8px\]' : ''/)
  assert.doesNotMatch(page, /wordpress-workflow-arrow|<svg[^>]+pointer-events-none/)
  assert.doesNotMatch(page, /<details|<summary|group-open:/)
})

test('Related solutions loads the Drupal brand mark from a local SVG asset', async () => {
  const [page, localeData] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(localeDataPath, 'utf8')
  ])
  const source = `${page}\n${localeData}`

  assert.match(source, /logo: relatedLogos\.drupal/)
  assert.doesNotMatch(source, /oss\.macphpstudy\.com\/image\/assets\/demo-logos\/drupal\.svg/)

  const logo = await readFile(
    new URL('../docs/public/assets/demo-logos/drupal.svg', import.meta.url),
    'utf8'
  )
  assert.match(logo, /<svg[^>]*viewBox="0 0 24 24"/)
  assert.match(logo, /<path[^>]*fill="#0678BE"/)
})

test('WordPress localized routes use the standalone page and translated content data', async () => {
  const [zh, id, es, localeData] = await Promise.all([
    readFile(new URL('../docs/zh/solutions/wordpress.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/id/solutions/wordpress.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/es/solutions/wordpress.md', import.meta.url), 'utf8'),
    readFile(localeDataPath, 'utf8')
  ])

  for (const [route, locale] of [[zh, 'zh'], [id, 'id'], [es, 'es']]) {
    assert.match(route, /WordPressSolutionPage/)
    assert.match(route, new RegExp(`locale="${locale}"`))
    assert.doesNotMatch(route, /AppSolutionDetail/)
  }
  assert.match(localeData, /heroTitle: '使用 FlyEnv 构建 WordPress 本地开发环境'/)
  assert.match(localeData, /heroTitle: 'Lingkungan pengembangan WordPress lokal dengan FlyEnv'/)
  assert.match(localeData, /heroTitle: 'Entorno de desarrollo local de WordPress con FlyEnv'/)
  assert.match(localeData, /const localizedSections/)
  assert.match(localeData, /featurePath\(locale, item\.feature\)/)
})
