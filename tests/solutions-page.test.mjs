import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')

test('Solutions data defines a project-first catalogue across every supported category', () => {
  const dataPath = resolve(projectRoot, 'docs/data/solutions.ts')
  assert.ok(existsSync(dataPath), 'docs/data/solutions.ts should exist')

  const source = read('docs/data/solutions.ts')
  for (const category of [
    'frameworks',
    'cms',
    'ecommerce',
    'erp',
    'crm',
    'developer-tools',
    'data-analytics'
  ]) {
    assert.match(source, new RegExp(`'${category}'`))
  }
  for (const name of ['WordPress', 'Laravel', 'Django', 'ERPNext', 'Gitea', 'Metabase']) {
    assert.match(source, new RegExp(`name: '${name}'`))
  }

  assert.ok(
    (source.match(/slug: '/g) || []).length >= 20,
    'catalogue should contain at least 20 solutions'
  )
  assert.match(source, /logo: '(?:\/assets\/demo-logos\/|https:\/\/cdn\.simpleicons\.org\/)/)
  assert.match(source, /stack: \[/)
})

test('Solutions data avoids unavailable Simple Icons marks for project brands outside that catalogue', () => {
  const source = read('docs/data/solutions.ts')

  for (const unavailableLogo of [
    'https://cdn.simpleicons.org/magento/EE672F',
    'https://cdn.simpleicons.org/opencart/2F7DB2',
    'https://cdn.simpleicons.org/suitecrm/0176D3',
    'https://cdn.simpleicons.org/espocrm/0071C5'
  ]) {
    assert.ok(
      !source.includes(unavailableLogo),
      `catalogue must not use unavailable logo ${unavailableLogo}`
    )
  }
})

test('English Solutions route exposes accessible discovery controls and links to published detail pages', () => {
  const pagePath = resolve(projectRoot, 'docs/solutions.md')
  const componentPath = resolve(projectRoot, 'docs/components/AppSolutions/en.vue')
  assert.ok(existsSync(pagePath), 'docs/solutions.md should exist')
  assert.ok(existsSync(componentPath), 'docs/components/AppSolutions/en.vue should exist')

  const page = read('docs/solutions.md')
  const component = read('docs/components/AppSolutions/en.vue')
  const config = read('docs/.vitepress/config.mts')

  assert.match(page, /title: 'Solutions: Run Popular Projects Locally \| FlyEnv'/)
  assert.match(
    page,
    /Run popular frameworks, CMS platforms, e-commerce apps, ERP systems and developer tools locally with FlyEnv/
  )
  assert.match(page, /<AppSolutions \/>/)
  assert.match(config, /\{ text: 'Solutions', link: '\/solutions' \}/)
  for (const hook of [
    'computed',
    'filteredSolutions',
    'aria-pressed',
    'aria-live="polite"',
    'type="search"',
    'Search projects...'
  ]) {
    assert.ok(component.includes(hook), `missing ${hook}`)
  }
  assert.match(component, /\/solutions\/\$\{solution\.slug\}/)
  assert.match(component, /solution_detail_click/)
  assert.match(component, /href="#solutions-catalog"/)
  assert.match(component, /:href="downloadHref"/)
})

test('English navigation places Solutions between Download and Demos', () => {
  const config = read('docs/.vitepress/config.mts')
  const downloadPosition = config.indexOf("{ text: 'Download', link: '/download' }")
  const solutionsPosition = config.indexOf("{ text: 'Solutions', link: '/solutions' }")
  const demosPosition = config.indexOf("{ text: 'Demos', link: '/demos' }")

  assert.ok(downloadPosition >= 0, 'English navigation should include Download')
  assert.ok(solutionsPosition > downloadPosition, 'Solutions should follow Download')
  assert.ok(demosPosition > solutionsPosition, 'Demos should follow Solutions')
})

test('every catalogue project has an English, SEO-ready solution detail route', () => {
  const routes = [
    ['laravel', 'Laravel'],
    ['django', 'Django'],
    ['fastapi', 'FastAPI'],
    ['spring-boot', 'Spring Boot'],
    ['wordpress', 'WordPress'],
    ['drupal', 'Drupal'],
    ['ghost', 'Ghost'],
    ['nextcloud', 'Nextcloud'],
    ['magento', 'Magento'],
    ['prestashop', 'PrestaShop'],
    ['opencart', 'OpenCart'],
    ['erpnext', 'ERPNext'],
    ['odoo', 'Odoo'],
    ['suitecrm', 'SuiteCRM'],
    ['espocrm', 'EspoCRM'],
    ['gitea', 'Gitea'],
    ['strapi', 'Strapi'],
    ['directus', 'Directus'],
    ['matomo', 'Matomo'],
    ['metabase', 'Metabase']
  ]
  const detailComponentPath = resolve(projectRoot, 'docs/components/AppSolutionDetail/en.vue')
  const detailDataPath = resolve(projectRoot, 'docs/data/solution-details.ts')

  assert.ok(existsSync(detailComponentPath), 'shared solution detail component should exist')
  assert.ok(existsSync(detailDataPath), 'project-specific solution detail data should exist')

  const component = read('docs/components/AppSolutionDetail/en.vue')
  for (const section of [
    'About',
    'Typical local stack',
    'How FlyEnv helps',
    'Set up the local environment',
    'Watch the demo',
    'Related solutions'
  ]) {
    assert.ok(component.includes(section), `missing ${section} section`)
  }
  assert.doesNotMatch(component, /Example local stack/)
  assert.doesNotMatch(component, /Useful FlyEnv capabilities/)
  assert.doesNotMatch(component, /min-w-\[580px\]/)
  assert.match(component, /table-fixed/)
  assert.match(component, /aria-labelledby="hero-stack-title"/)
  assert.match(component, /id="hero-stack-title"/)
  assert.match(component, /&larr; \{\{ copy\.allSolutions \}\}/)
  assert.match(component, /\{\{ categoryLabels\[related\.category\] \}\}/)
  assert.match(component, /md:grid-cols-2/)
  assert.match(component, /demos\.find\(\(item\) => item\.id === detail\.value\?\.demoId\)/)

  const detailData = read('docs/data/solution-details.ts')
  for (const demoId of [
    'erpnext-local-project',
    'gitea-local-project',
    'nextcloud-local-project'
  ]) {
    assert.match(detailData, new RegExp(`demoId: '${demoId}'`))
  }

  for (const [slug, name] of routes) {
    const routePath = resolve(projectRoot, `docs/solutions/${slug}.md`)
    assert.ok(existsSync(routePath), `missing ${slug} solution route`)

    const route = read(`docs/solutions/${slug}.md`)
    assert.match(route, new RegExp(`title: 'Run ${name} Locally with FlyEnv'`))
    assert.match(route, /titleTemplate: false/)
    assert.match(route, /layout: page/)
    assert.match(route, new RegExp(`<AppSolutionDetail slug="${slug}" />`))
  }
})

test('Chinese and Indonesian locales publish the complete Solutions catalogue', () => {
  const routes = [
    'laravel',
    'django',
    'fastapi',
    'spring-boot',
    'wordpress',
    'drupal',
    'ghost',
    'nextcloud',
    'magento',
    'prestashop',
    'opencart',
    'erpnext',
    'odoo',
    'suitecrm',
    'espocrm',
    'gitea',
    'strapi',
    'directus',
    'matomo',
    'metabase'
  ]
  const locales = [
    { directory: 'docs/zh', routePrefix: '/zh', label: '解决方案' },
    { directory: 'docs/id', routePrefix: '/id', label: 'Solusi' }
  ]

  for (const locale of locales) {
    const indexPath = resolve(projectRoot, `${locale.directory}/solutions.md`)
    assert.ok(existsSync(indexPath), `${locale.directory} Solutions index should exist`)

    const index = read(`${locale.directory}/solutions.md`)
    assert.match(index, new RegExp(`title: '.*${locale.label}.*'`))
    assert.match(index, /FlyEnv/)
    assert.match(index, /<AppSolutions locale="(?:zh|id)"\s*\/>/)

    for (const slug of routes) {
      const routePath = resolve(projectRoot, `${locale.directory}/solutions/${slug}.md`)
      assert.ok(existsSync(routePath), `missing ${locale.directory} ${slug} solution route`)

      const route = read(`${locale.directory}/solutions/${slug}.md`)
      assert.match(route, new RegExp(`<AppSolutionDetail slug="${slug}" locale="(?:zh|id)" />`))
      assert.match(route, /titleTemplate: false/)
    }
  }
})

test('Solutions homepage help steps are localized for Chinese and Indonesian locales', () => {
  const component = read('docs/components/AppSolutions/en.vue')

  for (const copy of [
    '选择项目',
    '配置本地环境',
    '启动技术栈',
    '开始本地开发',
    'Pilih proyek',
    'Siapkan lingkungan lokal',
    'Jalankan stack',
    'Mulai mengembangkan secara lokal'
  ]) {
    assert.ok(component.includes(copy), `missing localized help step: ${copy}`)
  }
  assert.match(component, /helpStepsByLocale/)
  assert.match(component, /helpSteps = computed\(/)
})

test('solution detail pages end with GitHub Issues, an email link, and copyable email support', () => {
  const component = read('docs/components/AppSolutionDetail/en.vue')

  assert.match(component, /id="solution-support-title"/)
  assert.match(component, /https:\/\/github\.com\/xpf0000\/FlyEnv\/issues/)
  assert.match(component, /alexpengfeixu@gmail\.com/)
  assert.match(component, /<a\s+[^>]*:href="`mailto:\$\{supportEmail\}`"[^>]*>[\s\S]*?\{\{ supportEmail \}\}[\s\S]*?<\/a>/)
  assert.match(component, /@click="copySupportEmail"/)
  assert.match(component, /navigator\.clipboard\.writeText\(supportEmail\)/)
  assert.match(component, /CopyDocument/)
  assert.match(component, /Check v-if="copiedEmail"/)
  for (const copy of [
    'Have questions using FlyEnv?',
    '有任何使用问题？',
    'Ada pertanyaan saat menggunakan FlyEnv?',
    'GitHub Issues'
  ]) {
    assert.ok(component.includes(copy), `missing support copy: ${copy}`)
  }
})

test('Solutions layout uses Tailwind utilities and neutralizes VitePress sibling list spacing', () => {
  const component = read('docs/components/AppSolutions/en.vue')

  assert.doesNotMatch(component, /<style\s+scoped>/)
  assert.match(component, /<ul[\s\S]*?class="[^"]*!list-none/)
  assert.match(component, /<ol[\s\S]*?class="[^"]*!list-none/)
  assert.match(component, /<li[^>]*class="[^"]*!mt-0[^"]*"[^>]*v-for="service in solution\.stack"/)
  assert.match(component, /<li[^>]*class="[^"]*!mt-0[^"]*"[^>]*v-for="[^"]*helpSteps"/)
})

test('internal Solutions planning documents are excluded from the published VitePress routes', () => {
  const config = read('docs/.vitepress/config.mts')

  assert.match(config, /srcExclude:\s*\[\s*'superpowers\/\*\*'\s*\]/)
})
