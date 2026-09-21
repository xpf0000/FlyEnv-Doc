import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const pagePath = new URL('../docs/components/LaravelSolutionPage.vue', import.meta.url)
const localeDataPath = new URL('../docs/components/laravel-solution-locales.ts', import.meta.url)
const routePath = new URL('../docs/solutions/laravel.md', import.meta.url)

const readSources = async () => {
  const [page, localeData] = await Promise.all([readFile(pagePath, 'utf8'), readFile(localeDataPath, 'utf8')])
  return { page, source: `${page}\n${localeData}` }
}

test('Laravel solution has its own page component with Laravel-specific sections', async () => {
  const { page, source } = await readSources()
  const route = await readFile(routePath, 'utf8')

  assert.match(route, /LaravelSolutionPage/)
  assert.match(source, /What a Laravel project needs locally/)
  assert.match(source, /A real Laravel development stack in FlyEnv/)
  assert.match(source, /New project or existing project/)
  assert.match(source, /Laravel FAQ/)
  assert.doesNotMatch(page, /AppSolutionDetail/)
  assert.doesNotMatch(page, /<style/)
})

test('Laravel stack diagram uses real service logos and SVG connectors', async () => {
  const { page, source } = await readSources()

  assert.equal((page.match(/marker-end="url\(#stack-arrow\)"/g) || []).length, 5)
  assert.match(page, /assets\/demo-logos\/laravel\.svg/)
  assert.match(page, /assets\/demo-logos\/nginx\.svg/)
  assert.match(page, /assets\/demo-logos\/mysql\.svg/)
  assert.match(page, /assets\/demo-logos\/redis\.svg/)
  assert.match(source, /Additional tools \(not in request chain\)/)
  assert.match(page, /lg:grid-cols-\[minmax\(0,1fr\)_280px\]/)
  assert.match(page, /w-\[780px\]/)
  assert.match(page, /stroke-dasharray="4 4"/)
  assert.match(page, /!table w-full min-w-\[760px\] table-fixed border-separate border-spacing-0/)
  assert.match(page, /<colgroup>/)
  assert.doesNotMatch(page, /\{\{ item\.icon \}\}/)
  assert.doesNotMatch(page, /icon: '[◌◇▤▦▣▧◷♙⌘◎▶≡]'/)
})

test('Laravel solution uses Tailwind utilities instead of custom class selectors', async () => {
  const { page, source } = await readSources()

  assert.doesNotMatch(page, /class="[^"]*\b(laravel|solution|hero|stack|faq)-[a-z-]+\b[^"]*"/)
  assert.match(page, /class="[^"]*mx-auto[^"]*max-w-/)
  assert.match(page, /class="[^"]*grid[^"]*md:grid-cols-/)
})

test('Laravel FAQ shows all answers in static XAMPP-style cards', async () => {
  const page = await readFile(pagePath, 'utf8')

  assert.match(page, /<article\s+v-for="item in faqs"/)
  assert.match(page, /text-\[15px\] leading-7/)
  assert.match(page, /grid items-stretch gap-4 md:grid-cols-2/)
  assert.doesNotMatch(page, /<details|<summary|group-open:/)
})

test('Laravel workspace proof keeps the screenshot and proof cards balanced', async () => {
  const { page, source } = await readSources()

  assert.match(page, /lg:grid-cols-\[minmax\(0,1fr\)_360px\]/)
  assert.match(page, /grid h-full grid-rows-4 gap-3/)
  assert.match(page, /text-sm leading-6 text-\[#68758a\]/)
  assert.match(page, /features\/startup-groups-1\.webp/)
  assert.match(source, /PHP Laravel Project group keeps Nginx, PHP-FPM, MySQL, and Redis/)
  assert.doesNotMatch(page, /text-\[11px\].*Project-level site settings/)
})

test('Laravel review refinements keep evidence close to the claims', async () => {
  const { page, source } = await readSources()

  assert.match(page, /v-if="item\.evidence"/)
  assert.match(source, /Laravel 8 → PHP 7\.4 · Laravel 11 → PHP 8\.2 · Laravel 12 → PHP 8\.3\+/)
  assert.match(source, /PHP \+ Nginx \+ MySQL \+ Redis → Startup Group/)
  assert.match(source, /Manual local setup/)
  assert.match(page, /<header class="max-w-3xl text-left">/)
})

test('Laravel FAQ has an independent background and single shared section boundaries', async () => {
  const { page, source } = await readSources()

  assert.match(page, /class="border-b border-\[#dfe8f4\] bg-white px-4 py-12/)
  assert.match(page, /class="border-t-0 border-\[#dfe8f4\] bg-\[#f5faff\] px-4 py-9/)
})

test('Laravel final polish strengthens hierarchy without adding sections', async () => {
  const { page, source } = await readSources()

  assert.match(source, /Build and run Laravel with PHP, databases, Redis, local domains, and HTTPS in one/)
  assert.match(page, /text-\[15px\] leading-6 dark:border-\[#2b3b55\]/)
  assert.match(page, /text-base leading-7 text-\[#59677b\]/)
  assert.equal((page.match(/emphasis: true/g) || []).length, 3)
  assert.match(page, /mt-6 flex flex-col items-center justify-between gap-4 rounded-xl bg-\[#1769f9\]/)
  assert.match(page, /mt-5 flex flex-col items-center justify-between gap-2 border-t/)
})

test('Laravel service modules link to existing FlyEnv feature pages', async () => {
  const { page, source } = await readSources()

  for (const slug of ['php', 'mysql', 'postgresql', 'redis', 'nginx', 'apache', 'caddy', 'nodejs', 'cron-jobs', 'local-sites-https']) {
    assert.match(page, new RegExp(`/features/${slug}`))
  }
})

test('Laravel related solutions use readable typography and a local Magento logo', async () => {
  const { page, source } = await readSources()

  assert.match(page, /id="related-title"[\s\S]*text-2xl[\s\S]*sm:text-3xl/)
  assert.equal((page.match(/text-base leading-7 text-\[#68758a\]/g) || []).length, 7)
  assert.match(source, /name: 'Magento'[\s\S]*logo: '\/assets\/demo-logos\/magento\.svg'/)
})

test('Laravel localized routes use the standalone page and translated content data', async () => {
  const [zh, id, es, localeData] = await Promise.all([
    readFile(new URL('../docs/zh/solutions/laravel.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/id/solutions/laravel.md', import.meta.url), 'utf8'),
    readFile(new URL('../docs/es/solutions/laravel.md', import.meta.url), 'utf8'),
    readFile(localeDataPath, 'utf8')
  ])

  for (const [route, locale] of [[zh, 'zh'], [id, 'id'], [es, 'es']]) {
    assert.match(route, /LaravelSolutionPage/)
    assert.match(route, new RegExp(`locale="${locale}"`))
    assert.doesNotMatch(route, /AppSolutionDetail/)
  }
  assert.match(localeData, /heroTitle: '使用 FlyEnv 构建 Laravel 本地开发环境'/)
  assert.match(localeData, /heroTitle: 'Lingkungan pengembangan Laravel lokal dengan FlyEnv'/)
  assert.match(localeData, /heroTitle: 'Entorno de desarrollo local de Laravel con FlyEnv'/)
  assert.match(localeData, /const localizedSections/)
})
