import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const read = (path) => readFileSync(resolve(projectRoot, path), 'utf8')
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const require = createRequire(import.meta.url)

const loadSolutionDetails = () => {
  const typescript = require('typescript')
  const output = typescript.transpileModule(read('docs/data/solution-details.ts'), {
    compilerOptions: { module: typescript.ModuleKind.CommonJS }
  }).outputText
  const module = { exports: {} }
  new Function('exports', 'module', output)(module.exports, module)
  return module.exports.solutionDetails
}

const loadSolutionAboutContent = () => {
  const typescript = require('typescript')
  const loadModule = (path) => {
    const output = typescript.transpileModule(read(path), {
      compilerOptions: { module: typescript.ModuleKind.CommonJS }
    }).outputText
    const module = { exports: {} }
    new Function('exports', 'module', output)(module.exports, module)
    return module.exports
  }
  const output = typescript.transpileModule(read('docs/data/solution-use-cases.ts'), {
    compilerOptions: { module: typescript.ModuleKind.CommonJS }
  }).outputText
  const module = { exports: {} }
  const groupModules = {
    './solution-about-group-a': loadModule('docs/data/solution-about-group-a.ts'),
    './solution-about-group-b': loadModule('docs/data/solution-about-group-b.ts'),
    './solution-about-group-c': loadModule('docs/data/solution-about-group-c.ts')
  }
  new Function('exports', 'module', 'require', output)(module.exports, module, (path) => {
    const group = groupModules[path]
    assert.ok(group, `unexpected solution About import: ${path}`)
    return group
  })
  return module.exports.solutionAboutContentByLocale
}

const expectedNextjsAboutContentByLocale = {
  en: {
    replaceOverview: true,
    paragraphs: [
      'Next.js is a React framework for building web applications that combine a polished frontend with server-side capabilities. It supports App Router, Server Components, server rendering, static generation, and API endpoints in one codebase, so teams can choose the right rendering model for each route.',
      'FlyEnv can be used as a local development environment for Next.js projects that depend on Node.js, PostgreSQL, MySQL, Redis, Nginx, Caddy, and other local services. This keeps the project close to its real operating conditions without turning local development into a collection of unrelated installers and manual configuration.'
    ],
    capabilities: [
      'App Router',
      'Server Components',
      'SSR / SSG / ISR',
      'Route Handlers',
      'Middleware',
      'Image & Font Optimization'
    ],
    useCases: [
      'SaaS applications and customer dashboards',
      'E-commerce storefronts and checkout flows',
      'SEO-focused content and marketing websites',
      'Full-stack web applications and BFF APIs',
      'Internal tools and operations portals'
    ],
    localEnvironment: {
      title: 'A real Next.js environment is more than next dev',
      description:
        'A simple project may only need Node.js. As it grows to include users, business data, caching, uploads, email, and third-party callbacks, the local environment usually grows with it.',
      items: [
        {
          title: 'Node.js runtime',
          description: 'Runs Next.js, local development tooling, and build tasks.'
        },
        {
          title: 'Database',
          description: 'Stores users, orders, application content, and other business data.'
        },
        {
          title: 'Redis',
          description: 'Supports caching, sessions, queues, and rate-limiting patterns.'
        },
        {
          title: 'HTTPS & custom domain',
          description: 'Provides a production-like local origin for cookies, OAuth, and callbacks.'
        },
        {
          title: 'Mail & storage',
          description:
            'Covers transactional email, file uploads, and other real product dependencies.'
        }
      ]
    }
  },
  zh: {
    replaceOverview: true,
    paragraphs: [
      'Next.js 是一个用于构建 Web 应用的 React 框架，同时覆盖精致的前端体验和服务端能力。它在同一代码库中支持 App Router、Server Components、服务端渲染、静态生成和 API 端点，让团队能为不同页面选择合适的渲染方式。',
      'FlyEnv 可作为依赖 Node.js、PostgreSQL、MySQL、Redis、Nginx、Caddy 等服务的 Next.js 项目的本地开发环境。它让本地环境更接近真实业务运行条件，而不是由分散的安装器和手动配置拼凑而成。'
    ],
    capabilities: [
      'App Router',
      'Server Components',
      'SSR / SSG / ISR',
      'Route Handlers',
      'Middleware',
      '图片与字体优化'
    ],
    useCases: [
      'SaaS 应用与客户后台',
      '电商前台与结算流程',
      '重视 SEO 的内容站与营销官网',
      '全栈 Web 应用与 BFF API',
      '内部工具与运营门户'
    ],
    localEnvironment: {
      title: '真实的 Next.js 本地环境不只有 next dev',
      description:
        '一个简单项目可能只需要 Node.js。当项目逐渐加入用户、业务数据、缓存、上传、邮件和第三方回调时，本地环境通常也会随之扩展。',
      items: [
        { title: 'Node.js 运行时', description: '运行 Next.js、本地开发工具和构建任务。' },
        { title: '数据库', description: '保存用户、订单、应用内容及其他业务数据。' },
        { title: 'Redis', description: '支持缓存、会话、队列和限流等常见模式。' },
        {
          title: 'HTTPS 与自定义域名',
          description: '为 Cookie、OAuth 和回调提供接近生产环境的本地来源。'
        },
        { title: '邮件与存储', description: '覆盖事务邮件、文件上传及其他真实应用依赖。' }
      ]
    }
  },
  id: {
    replaceOverview: true,
    paragraphs: [
      'Next.js adalah framework React untuk membangun aplikasi web yang memadukan frontend yang matang dengan kemampuan server-side. Framework ini mendukung App Router, Server Components, server rendering, static generation, dan endpoint API dalam satu codebase sehingga tim dapat memilih model rendering yang tepat untuk tiap route.',
      'FlyEnv dapat digunakan sebagai lingkungan development lokal untuk proyek Next.js yang bergantung pada Node.js, PostgreSQL, MySQL, Redis, Nginx, Caddy, dan layanan lokal lain. Ini menjaga lingkungan proyek dekat dengan kondisi operasional nyata tanpa menggabungkan installer dan konfigurasi manual yang tidak saling terhubung.'
    ],
    capabilities: [
      'App Router',
      'Server Components',
      'SSR / SSG / ISR',
      'Route Handlers',
      'Middleware',
      'Optimasi Gambar & Font'
    ],
    useCases: [
      'Aplikasi SaaS dan dasbor pelanggan',
      'Storefront e-commerce dan alur checkout',
      'Situs konten dan pemasaran yang fokus pada SEO',
      'Aplikasi web full-stack dan BFF API',
      'Alat internal dan portal operasional'
    ],
    localEnvironment: {
      title: 'Lingkungan Next.js nyata lebih dari next dev',
      description:
        'Proyek sederhana mungkin hanya membutuhkan Node.js. Saat pengguna, data bisnis, cache, unggahan, email, dan callback pihak ketiga ditambahkan, lingkungan lokal biasanya ikut berkembang.',
      items: [
        {
          title: 'Runtime Node.js',
          description: 'Menjalankan Next.js, tooling development lokal, dan tugas build.'
        },
        {
          title: 'Database',
          description: 'Menyimpan pengguna, pesanan, konten aplikasi, dan data bisnis lain.'
        },
        {
          title: 'Redis',
          description: 'Mendukung cache, sesi, antrean, dan pola pembatasan laju.'
        },
        {
          title: 'HTTPS & domain kustom',
          description: 'Menyediakan origin lokal mirip produksi untuk cookie, OAuth, dan callback.'
        },
        {
          title: 'Mail & storage',
          description:
            'Mencakup email transaksional, unggahan file, dan dependensi produk nyata lain.'
        }
      ]
    }
  }
}

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
    ['metabase', 'Metabase'],
    ['nextjs', 'Next.js'],
    ['nestjs', 'NestJS'],
    ['nuxt', 'Nuxt'],
    ['express', 'Express'],
    ['react-vite', 'React + Vite'],
    ['vue-vite', 'Vue 3 + Vite'],
    ['sveltekit', 'SvelteKit'],
    ['adonisjs', 'AdonisJS'],
    ['hono', 'Hono'],
    ['payload', 'Payload CMS'],
    ['medusa', 'Medusa'],
    ['node-red', 'Node-RED'],
    ['flask', 'Flask'],
    ['apache-superset', 'Apache Superset'],
    ['quarkus', 'Quarkus'],
    ['keycloak', 'Keycloak'],
    ['gin', 'Gin'],
    ['pocketbase', 'PocketBase'],
    ['ruby-on-rails', 'Ruby on Rails'],
    ['aspnet-core', 'ASP.NET Core']
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
  const runtimeDetails = loadSolutionDetails()
  const aboutContentByLocale = loadSolutionAboutContent()
  const aboutSourcePaths = [
    'docs/data/solution-use-cases.ts',
    'docs/data/solution-about-group-a.ts',
    'docs/data/solution-about-group-b.ts',
    'docs/data/solution-about-group-c.ts'
  ]
  const formerGeneratorMechanisms = [
    /^type SolutionFamily\b/m,
    /^interface SolutionProfile\b/m,
    /^const profiles\s*:/m,
    /^const templates\s*=/m,
    /^const localEnvironmentItems\s*=/m,
    /^const createContent\s*=/m,
    /^const generatedContent\s*=/m,
    /Object\.entries\(profiles\)\.map/,
    /Object\.fromEntries/
  ]
  for (const path of aboutSourcePaths) {
    const source = read(path)
    for (const mechanism of formerGeneratorMechanisms) {
      assert.doesNotMatch(source, mechanism, `${path} must not use the former content generator`)
    }
  }
  for (const path of aboutSourcePaths.slice(1)) {
    assert.doesNotMatch(read(path), /^\s*nextjs\s*:/m, `${path} must not define nextjs content`)
  }
  for (const locale of ['en', 'zh', 'id']) {
    assert.deepEqual(
      aboutContentByLocale[locale].nextjs,
      expectedNextjsAboutContentByLocale[locale],
      `${locale} Next.js content must remain the preserved reference record`
    )
  }
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
    assert.match(route, new RegExp(`title: 'Run ${escapeRegExp(name)} Locally with FlyEnv'`))
    assert.match(route, /titleTemplate: false/)
    assert.match(route, /layout: page/)
    assert.match(route, new RegExp(`<AppSolutionDetail slug="${slug}" />`))

    assert.ok(runtimeDetails[slug], `missing ${slug} runtime detail data in solutionDetails export`)
  }

  for (const [slug, name] of routes) {
    for (const locale of ['en', 'zh', 'id']) {
      const about = aboutContentByLocale[locale][slug]
      assert.ok(
        about?.paragraphs?.length >= 1 && about.paragraphs.length <= 2,
        `${locale} ${name} should define one or two explicit About paragraphs`
      )
      assert.ok(
        about.capabilities.length >= 4 && about.capabilities.length <= 7,
        `${locale} ${name} should define 4-7 core capabilities`
      )
      assert.ok(
        about.useCases.length >= 3 && about.useCases.length <= 5,
        `${locale} ${name} should define 3-5 common use cases`
      )
      assert.ok(
        about.localEnvironment.items.length >= 3 && about.localEnvironment.items.length <= 6,
        `${locale} ${name} should explain 3-6 local environment dependencies`
      )
    }
  }

  const representativeConcepts = {
    laravel: /Artisan|Eloquent|Queue|Scheduler|Vite/i,
    django: /manage\.py|Celery|migration|static|media/i,
    nestjs: /Module|Dependency Injection|Prisma|TypeORM|BullMQ|microservice/i,
    wordpress: /theme|plugin|WP-CLI|upload|permalink/i,
    magento: /Composer|OpenSearch|Elasticsearch|cron|static content|Redis/i
  }
  for (const [slug, concepts] of Object.entries(representativeConcepts)) {
    const about = aboutContentByLocale.en[slug]
    const content = [
      ...about.paragraphs,
      ...about.capabilities,
      ...about.useCases,
      about.localEnvironment.title,
      about.localEnvironment.description,
      ...about.localEnvironment.items.flatMap((item) => [item.title, item.description])
    ].join(' ')
    assert.match(
      content,
      concepts,
      `English ${slug} content should use distinctive technical concepts`
    )
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
    'metabase',
    'nextjs',
    'nestjs',
    'nuxt',
    'express',
    'react-vite',
    'vue-vite',
    'sveltekit',
    'adonisjs',
    'hono',
    'payload',
    'medusa',
    'node-red',
    'flask',
    'apache-superset',
    'quarkus',
    'keycloak',
    'gin',
    'pocketbase',
    'ruby-on-rails',
    'aspnet-core'
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
  assert.match(
    component,
    /<a\s+[^>]*:href="`mailto:\$\{supportEmail\}`"[^>]*>[\s\S]*?\{\{ supportEmail \}\}[\s\S]*?<\/a>/
  )
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
