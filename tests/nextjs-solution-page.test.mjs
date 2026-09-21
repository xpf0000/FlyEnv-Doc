import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const pagePath = new URL('../docs/components/NextjsSolutionPage.vue', import.meta.url)
const localePath = new URL('../docs/components/nextjs-solution-locales.ts', import.meta.url)
const routePath = new URL('../docs/solutions/nextjs.md', import.meta.url)

test('Next.js solution uses an independent Next.js-specific page', async () => {
  const [page, route, locales] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(routePath, 'utf8'),
    readFile(localePath, 'utf8')
  ])
  const source = `${page}\n${locales}`

  assert.match(route, /NextjsSolutionPage/)
  assert.doesNotMatch(route, /AppSolutionDetail/)
  assert.match(source, /Next\.js local development environment with FlyEnv/)
  assert.match(source, /The Next\.js lifecycle in FlyEnv/)
  assert.match(source, /Frontend and backend in one local workspace/)
  assert.match(source, /Project runtime and package manager/)
  assert.match(source, /New Next\.js project|existing Next\.js project/)
  assert.doesNotMatch(page, /<style/)
})

test('Next.js solution models the real JavaScript stack and links FlyEnv services', async () => {
  const [page, locales] = await Promise.all([readFile(pagePath, 'utf8'), readFile(localePath, 'utf8')])
  const source = `${page}\n${locales}`

  for (const slug of ['nodejs', 'postgresql', 'mysql', 'redis', 'nginx', 'caddy', 'local-sites-https', 'startup-groups']) {
    assert.match(source, new RegExp(`/features/${slug}`))
  }
  assert.match(source, /next dev/)
  assert.match(source, /next build/)
  assert.match(source, /next start/)
  assert.match(source, /App Router/)
  assert.match(source, /Server Components/)
  assert.match(page, /marker-end="url\(#nextjs-architecture-arrow\)"/)
  assert.match(source, /assets\/demo-logos\/postgresql\.svg/)
  assert.match(source, /assets\/demo-logos\/redis\.svg/)
  assert.doesNotMatch(source, /PHP-FPM|Composer|wp-config\.php|Laravel scheduler/)
})

test('Next.js workflow examples and CTAs stay specific to Next.js', async () => {
  const [page, locales] = await Promise.all([readFile(pagePath, 'utf8'), readFile(localePath, 'utf8')])
  const source = `${page}\n${locales}`

  assert.match(source, /command: 'npm run dev'/)
  assert.match(source, /command: 'npm run build'/)
  assert.match(source, /command: 'npm start'/)
  assert.match(source, /Start a new Next\.js project or run an existing one/)
  assert.match(source, /Read the Next\.js setup guide/)
  assert.match(source, /startupGroups: localizedHref\('\/features\/startup-groups'\)/)
  assert.match(source, /Keep full-stack projects isolated/)
  assert.match(source, /runtime, local URL, database, Redis, and supporting services in its own workspace/)
  assert.doesNotMatch(source, /command: 'next dev'|command: 'next build'|Separate full-stack projects|Read the Node\.js deployment guide/)
})

test('Next.js solution keeps its copy accurate and its strongest proof focused', async () => {
  const [page, locales] = await Promise.all([readFile(pagePath, 'utf8'), readFile(localePath, 'utf8')])
  const source = `${page}\n${locales}`
  const benefits = source.match(/benefits: \[(.*?)\n  \]/s)?.[1] || ''

  assert.match(source, /preferred package manager, local databases, Redis, custom domains, and HTTPS — all managed in one workspace/)
  assert.match(source, /A typical local Next\.js stack/)
  assert.match(source, /A practical local stack for Next\.js/)
  assert.match(source, /Install dependencies/)
  assert.match(source, /Run dev server/)
  assert.match(source, /Start production/)
  assert.match(source, /Project workflow/)
  assert.match(source, /without replacing npm, pnpm, Yarn, Bun, or your existing package scripts/)
  assert.match(source, /Browser \/ HTTPS/)
  assert.match(source, /PostgreSQL \/ Redis/)
  assert.match(page, /<SvgIcon name="arrowRight" class="h-4 w-4 text-\[#1769f9\]" \/>/)
  assert.match(page, /lg:grid-cols-\[minmax\(0,0\.85fr\)_minmax\(0,1\.15fr\)\]/)
  assert.match(source, /start the Next\.js app, database, Redis, and other local services together with one click/)
  assert.equal((benefits.match(/\{ icon:/g) || []).length, 4)
  assert.doesNotMatch(source, /Keep the package workflow visible|Check the production build locally/)
})

test('Next.js solution keeps the page full width and FAQ answers visible', async () => {
  const page = await readFile(pagePath, 'utf8')

  assert.match(page, /class="[^\"]*w-full[^\"]*overflow-hidden/)
  assert.match(page, /class="[^\"]*mx-auto[^\"]*max-w-/)
  assert.match(page, /v-for="item in faqs"/)
  assert.doesNotMatch(page, /<details|<summary|group-open:/)
  assert.doesNotMatch(page, /w-screen|translate-x-1\/2|left-1\/2/)
})

test('Related solutions loads the Nuxt brand mark from a local SVG asset', async () => {
  const [page, locales, logo] = await Promise.all([
    readFile(pagePath, 'utf8'),
    readFile(localePath, 'utf8'),
    readFile(new URL('../docs/public/assets/demo-logos/nuxt.svg', import.meta.url), 'utf8')
  ])
  const source = `${page}\n${locales}`

  assert.match(source, /logo: '\/assets\/demo-logos\/nuxt\.svg'/)
  assert.match(logo, /<svg[^>]*viewBox="0 0 24 24"/)
  assert.match(logo, /<path[^>]*fill="#00DC82"/)
})
