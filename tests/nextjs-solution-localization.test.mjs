import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const cases = [
  { locale: 'zh', title: '使用 FlyEnv 构建 Next.js 本地开发环境', canonical: '/zh/solutions/nextjs' },
  { locale: 'id', title: 'Lingkungan Pengembangan Next.js Lokal dengan FlyEnv', canonical: '/id/solutions/nextjs' },
  { locale: 'es', title: 'Entorno de desarrollo local de Next.js con FlyEnv', canonical: '/es/solutions/nextjs' }
]

test('localized Next.js routes use the standalone page and localized metadata', async () => {
  for (const item of cases) {
    const source = await readFile(new URL(`../docs/${item.locale}/solutions/nextjs.md`, import.meta.url), 'utf8')

    assert.match(source, /NextjsSolutionPage/)
    assert.match(source, new RegExp(`locale="${item.locale}"`))
    assert.doesNotMatch(source, /AppSolutionDetail/)
    assert.match(source, new RegExp(item.title))
    assert.match(source, new RegExp(`canonical\\n      href: https://flyenv\\.com${item.canonical}`))
  }
})

test('Next.js locale data contains natural copy for all supported locales', async () => {
  const source = await readFile(new URL('../docs/components/nextjs-solution-locales.ts', import.meta.url), 'utf8')

  assert.match(source, /const localized: Record<Exclude<NextjsSolutionLocale, 'en'>, CopyData>/)
  assert.match(source, /heroTitle: '使用 FlyEnv 构建 Next\.js 本地开发环境'/)
  assert.match(source, /heroTitle: 'Lingkungan pengembangan Next\.js lokal dengan FlyEnv'/)
  assert.match(source, /heroTitle: 'Entorno de desarrollo local de Next\.js con FlyEnv'/)
  assert.match(source, /faqTitle: 'Next\.js 常见问题'/)
  assert.match(source, /faqTitle: 'FAQ Next\.js'/)
  assert.match(source, /faqTitle: 'Preguntas frecuentes sobre Next\.js'/)
})
