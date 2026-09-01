import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import test from 'node:test'

const read = (path) => readFileSync(resolve(process.cwd(), path), 'utf8')

test('the English license route uses the focused license component', () => {
  assert.match(
    read('docs/license.md'),
    /import AppLicensePage from '\.\/components\/AppLicensePage\/en\.vue'/
  )
  assert.match(read('docs/license.md'), /<AppLicensePage \/>/)
})

test('localized license and legacy sponsor routes use their localized license pages', () => {
  const locales = [
    {
      route: 'docs/zh/license.md',
      component: 'AppLicensePageZh',
      componentPath: '../components/AppLicensePage/zh.vue',
      sponsor: 'docs/zh/sponsor.md',
      licensePath: '/zh/license'
    },
    {
      route: 'docs/id/license.md',
      component: 'AppLicensePageId',
      componentPath: '../components/AppLicensePage/id.vue',
      sponsor: 'docs/id/sponsor.md',
      licensePath: '/id/license'
    }
  ]

  for (const locale of locales) {
    const route = read(locale.route)
    const sponsor = read(locale.sponsor)

    assert.match(route, new RegExp(`import ${locale.component} from '${locale.componentPath}'`))
    assert.match(route, new RegExp(`<${locale.component} \\/>`))
    assert.doesNotMatch(route, /AppSponsorPageV2/)
    assert.match(sponsor, new RegExp(`0; url=${locale.licensePath}`))
    assert.doesNotMatch(sponsor, /AppSponsorPageV2/)
  }
})

test('the English license page follows a spacious purchase-first composition', () => {
  const source = read('docs/components/AppLicensePage/en.vue')
  for (const copy of [
    'Get a FlyEnv License',
    'Buy securely with Paddle',
    'How it works',
    'Other ways to support or get a license',
    'Frequently Asked Questions',
    'Ready to get licensed?'
  ]) {
    assert.ok(source.includes(copy), `missing ${copy}`)
  }
  assert.doesNotMatch(
    source,
    /Built in public|community-preview-grid|recentStories|recentPullRequests/
  )
  assert.match(source, /mt-16 grid gap-8 md:grid-cols-2 lg:mt-20/)
  assert.match(source, /py-24 md:py-28 lg:py-32/)
  assert.match(source, /mt-16 grid gap-7 md:grid-cols-3 lg:mt-20/)
})

test('the legacy sponsor route points visitors to the English license page', () => {
  const source = read('docs/sponsor.md')
  assert.match(source, /name: robots[\s\S]*content: 'noindex,follow'/)
  assert.match(source, /rel: canonical[\s\S]*https:\/\/flyenv\.com\/license/)
  assert.match(source, /http-equiv: refresh[\s\S]*0; url=\/license/)
  assert.doesNotMatch(source, /AppSponsorPage/)
})

test('the English page keeps the established payment content and two-entry thanks section', () => {
  const source = read('docs/components/AppLicensePage/en.vue')
  for (const className of ['qrcode1@2x.png', 'qrcode2@2x.png', 'F4nniu', 'SignPath']) {
    assert.ok(source.includes(className), `missing established license content ${className}`)
  }
  assert.doesNotMatch(source, /donate-card|donate-hover|paddle-bg|wechat-bg|alipay-bg|thanks-card/)
})

test('the English license page uses Tailwind utilities for a spacious responsive layout', () => {
  const source = read('docs/components/AppLicensePage/en.vue')
  for (const className of [
    'max-w-6xl',
    'md:py-24',
    'lg:py-28',
    'md:grid-cols-2',
    'md:grid-cols-3',
    'dark:bg-slate-900',
    'bg-gradient-to-r'
  ]) {
    assert.ok(source.includes(className), `missing Tailwind layout utility ${className}`)
  }
  assert.doesNotMatch(source, /\.license-shell\s*\{/)
  assert.doesNotMatch(source, /\.license-buy-grid\s*\{/)
  assert.doesNotMatch(source, /\.secondary-methods\s*\{/)
})

test('the purchase journey requests proof in FlyEnv before manual license issuance', () => {
  const source = read('docs/components/AppLicensePage/en.vue')

  assert.match(source, /Request a license in FlyEnv/)
  assert.match(source, /Settings -&gt; License/)
  assert.match(source, /Paddle order ID or receipt\s+email with a contact email/)
  assert.match(source, /Receive your license/)
  assert.match(
    source,
    /Your request is reviewed manually, and the license is issued once it has been\s+verified/
  )
  assert.doesNotMatch(source, /Activate in FlyEnv/)
  assert.doesNotMatch(source, /enter your license key to activate/)
})

test('secondary payment and contribution CTAs keep their labels vertically centered', () => {
  const source = read('docs/components/AppLicensePage/en.vue')

  assert.equal(
    (source.match(/flex flex-col overflow-hidden rounded-lg border border-slate-200/g) || [])
      .length,
    3
  )
  assert.equal((source.match(/flex flex-1 flex-col p-8 text-center lg:p-9/g) || []).length, 3)
  assert.equal((source.match(/mt-9 md:mt-auto flex min-h-14/g) || []).length, 3)
  assert.doesNotMatch(source, /mt-auto pt-9 flex min-h-14/)
})

test('links inside colored license CTAs keep readable text', () => {
  const source = read('docs/components/AppLicensePage/en.vue')

  assert.match(source, /border-white\/60[^\n]*!text-white[^\n]*hover:!text-white/)
  assert.match(source, /bg-violet-600[^\n]*!text-white[^\n]*hover:!text-white/)
})

test('license FAQs state the current update and team licensing policies', () => {
  const source = read('docs/components/AppLicensePage/en.vue')

  assert.match(source, /Yes\. Future FlyEnv updates are included with the current license\./)
  assert.match(source, /Yes\. Team and education licensing can be discussed case by case\./)
  assert.match(source, /alexpengfeixu@gmail\.com/)
  assert.match(source, /number of devices, and organization details/)
})

test('the team licensing contact email is prominent and selectable', () => {
  const source = read('docs/components/AppLicensePage/en.vue')

  assert.match(source, /email: 'alexpengfeixu@gmail\.com'/)
  assert.match(
    source,
    /select-text cursor-text[^\n]*rounded-md bg-blue-50[^\n]*font-semibold !text-blue-700/
  )
  assert.doesNotMatch(source, /:href="`mailto:\$\{faq\.email\}`"/)
  assert.match(source, /CopyDocument \} from '@element-plus\/icons-vue'/)
  assert.match(source, /@click="copyEmail\(faq\.email\)"/)
  assert.match(source, /navigator\.clipboard\.writeText\(email\)/)
  assert.match(source, /Email address copied/)
})

test('license guides do not imply that GitHub sign-in is required for licensing', () => {
  for (const path of [
    'docs/guide/about-license.md',
    'docs/zh/guide/about-license.md',
    'docs/id/guide/about-license.md'
  ]) {
    const source = read(path)
    assert.doesNotMatch(source, /GitHub authorization is required/i)
    assert.doesNotMatch(source, /申请与管理许可证需要通过 GitHub/i)
    assert.doesNotMatch(source, /otorisasi GitHub diperlukan untuk mengajukan dan mengelola lisensi/i)
  }
})
