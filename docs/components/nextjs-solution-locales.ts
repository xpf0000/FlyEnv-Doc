export type NextjsSolutionLocale = 'en' | 'zh' | 'id' | 'es'

type FeatureKey =
  | 'nodejs'
  | 'postgresql'
  | 'mysql'
  | 'redis'
  | 'nginx'
  | 'caddy'
  | 'https'
  | 'startupGroups'

type CopyData = {
  breadcrumbSolutions: string
  eyebrow: string
  heroTitle: string
  heroDescription: string
  download: string
  guide: string
  heroStackTitle: string
  heroStackDescription: string
  heroStack: Array<{ key: string; label: string; feature?: FeatureKey }>
  requirementsTitle: string
  requirementsDescription: string
  requirements: Array<{
    icon: string
    title: string
    description: string
    linkLabel?: string
    feature?: FeatureKey
  }>
  lifecycleTitle: string
  lifecycleDescription: string
  lifecycleSteps: Array<{ icon: string; title: string; command: string; description: string }>
  workflowLabel: string
  packageTools: Array<{ label: string; feature?: FeatureKey }>
  architectureTitle: string
  architectureDescription: string
  architectureApplicationTitle: string
  architectureApplicationDescription: string
  architectureApplicationLabels: [string, string]
  architectureFlowLabels: [string, string, string]
  architectureLeft: Array<{ icon: string; title: string; description: string }>
  architectureRight: Array<{ icon: string; logo?: string; title: string; description: string }>
  runtimeTitle: string
  runtimeDescription: string
  runtimeNote: string
  runtimeVersionTitle: string
  runtimeVersionDescription: string
  runtimeVersionLink: string
  packageManagerTitle: string
  packageManagerDescription: string
  packageManagerNote: string
  screenshotAlt: string
  screenshotCaption: string
  workflowTitle: string
  workflowDescription: string
  workflows: Array<{ icon: string; title: string; steps: string[] }>
  setupGuide: string
  benefitsTitle: string
  benefitsDescription: string
  benefits: Array<{
    icon: string
    title: string
    description: string
    emphasis?: boolean
    evidence?: string
  }>
  faqTitle: string
  faqDescription: string
  faqs: Array<{ question: string; answer: string }>
  relatedTitle: string
  relatedSolutions: Array<{ name: string; description: string; href: string; logo: string }>
  ctaTitle: string
  ctaDescription: string
  haveQuestions: string
}

const relatedSolutions = [
  { name: 'Nuxt', logo: '/assets/demo-logos/nuxt.svg', slug: 'nuxt' },
  { name: 'NestJS', logo: 'https://cdn.simpleicons.org/nestjs/E0234E', slug: 'nestjs' },
  { name: 'React + Vite', logo: 'https://cdn.simpleicons.org/vite/646CFF', slug: 'react-vite' }
]

const english: CopyData = {
  breadcrumbSolutions: 'Solutions',
  eyebrow: 'Full-stack JavaScript solution',
  heroTitle: 'Next.js local development environment with FlyEnv',
  heroDescription:
    'Build, run, and test Next.js applications with the Node.js runtime, your preferred package manager, local databases, Redis, custom domains, and HTTPS — all managed in one workspace.',
  download: 'Download FlyEnv',
  guide: 'Read the Next.js setup guide',
  heroStackTitle: 'A typical local Next.js stack',
  heroStackDescription: 'The local pieces behind a full-stack Next.js project.',
  heroStack: [
    { key: 'runtime', label: 'Node.js runtime', feature: 'nodejs' },
    { key: 'package', label: 'npm / pnpm / Yarn' },
    { key: 'database', label: 'PostgreSQL / MySQL', feature: 'postgresql' },
    { key: 'redis', label: 'Redis', feature: 'redis' },
    { key: 'origin', label: 'Local domain + HTTPS', feature: 'https' }
  ],
  requirementsTitle: 'A practical local stack for Next.js',
  requirementsDescription:
    'Next.js can start as one Node.js process, but a realistic full-stack project often needs a runtime, build tools, data services, and a browser-facing origin that stay aligned.',
  requirements: [
    {
      icon: 'runtime',
      title: 'Node.js runtime',
      description:
        'Run the Next.js server, development tools, and build scripts on the project-supported release.',
      linkLabel: 'Node.js feature',
      feature: 'nodejs'
    },
    {
      icon: 'package',
      title: 'Package manager',
      description: 'Use the package manager and lockfile the repository already expects: npm, pnpm, Yarn, or Bun.',
      linkLabel: 'Project toolchain'
    },
    {
      icon: 'database',
      title: 'Application database',
      description:
        'Connect PostgreSQL or MySQL when server actions, route handlers, or the application layer need persistent data.',
      linkLabel: 'Database feature',
      feature: 'postgresql'
    },
    {
      icon: 'cache',
      title: 'Optional Redis',
      description: 'Add Redis for caching, sessions, queues, rate limiting, or background work when the application uses it.',
      linkLabel: 'Redis feature',
      feature: 'redis'
    },
    {
      icon: 'web',
      title: 'Local origin',
      description: 'Use Nginx or Caddy when the app needs a stable local hostname, proxy behavior, or multiple services.',
      linkLabel: 'Nginx feature',
      feature: 'nginx'
    },
    {
      icon: 'lock',
      title: 'HTTPS for browser flows',
      description: 'Test OAuth, secure cookies, webhooks, service workers, and other browser features on a trusted local origin.',
      linkLabel: 'Local HTTPS feature',
      feature: 'https'
    }
  ],
  lifecycleTitle: 'The Next.js lifecycle in FlyEnv',
  lifecycleDescription:
    'Keep the project runtime and package workflow together from installing dependencies to running a production-like build.',
  lifecycleSteps: [
    { icon: 'package', title: 'Install dependencies', command: 'npm install', description: 'Resolve the lockfile with the selected project toolchain.' },
    { icon: 'play', title: 'Run dev server', command: 'npm run dev', description: 'Run the App Router, Server Components, and route handlers locally.' },
    { icon: 'build', title: 'Build', command: 'npm run build', description: 'Catch production rendering and dependency issues before deployment.' },
    { icon: 'globe', title: 'Start production', command: 'npm start', description: 'Serve the built application through a local domain and HTTPS.' }
  ],
  workflowLabel: 'Project workflow',
  packageTools: [
    { label: 'npm' },
    { label: 'pnpm' },
    { label: 'Yarn' },
    { label: 'Bun' },
    { label: 'Node.js versions', feature: 'nodejs' },
    { label: 'Startup Groups', feature: 'startupGroups' }
  ],
  architectureTitle: 'Frontend and backend in one local workspace',
  architectureDescription:
    'A Next.js project can serve the UI, route handlers, server actions, and API calls from one application while still depending on local data services.',
  architectureApplicationTitle: 'Next.js application',
  architectureApplicationDescription: 'App Router · Server Components · Route Handlers · Server Actions',
  architectureApplicationLabels: ['Frontend', 'Backend'],
  architectureFlowLabels: ['Browser / HTTPS', 'Next.js application', 'PostgreSQL / Redis'],
  architectureLeft: [
    { icon: 'browser', title: 'Browser and local origin', description: 'Open https://next-app.test for cookies, OAuth, webhooks, and client-side integration tests.' },
    { icon: 'code', title: 'UI and route handlers', description: 'Render pages, server actions, API endpoints, and backend-for-frontend logic from the Next.js project.' }
  ],
  architectureRight: [
    { icon: 'database', logo: '/assets/demo-logos/postgresql.svg', title: 'PostgreSQL or MySQL', description: 'Store users, content, orders, and other application data used by the server layer.' },
    { icon: 'cache', logo: '/assets/demo-logos/redis.svg', title: 'Redis when needed', description: 'Support cache, sessions, queues, rate limits, or other fast shared state.' }
  ],
  runtimeTitle: 'Project runtime and package manager',
  runtimeDescription: 'Node.js is the application runtime; the package manager is part of the project toolchain. Keep both choices visible instead of relying on one global installation.',
  runtimeNote: 'FlyEnv manages the runtime and local services around your project without replacing npm, pnpm, Yarn, Bun, or your existing package scripts.',
  runtimeVersionTitle: 'Node.js version',
  runtimeVersionDescription: 'Match the release required by the Next.js version, dependencies, and deployment target.',
  runtimeVersionLink: 'Open Node.js feature',
  packageManagerTitle: 'Package manager',
  packageManagerDescription: 'Keep npm, pnpm, Yarn, or Bun aligned with the lockfile and the scripts the project uses.',
  packageManagerNote: 'Lockfile is part of the project',
  screenshotAlt: 'FlyEnv Startup Groups for starting project services together',
  screenshotCaption: 'Use a Startup Group to start the Next.js app, database, Redis, and other local services together with one click.',
  workflowTitle: 'Start a new Next.js project or run an existing one',
  workflowDescription: 'Choose the workflow that matches where the project is today, then keep its runtime and supporting services in one workspace.',
  workflows: [
    { icon: 'plus', title: 'Create a new Next.js project', steps: ['Open Node.js → New Project and choose the Next.js template.', 'Select the Node.js version and package manager the project will use.', 'Install dependencies and keep the project lockfile with the source.', 'Add the local domain, HTTPS, and database services when needed.', 'Create a Startup Group for the app and its supporting services.'] },
    { icon: 'folder', title: 'Run an existing Next.js project', steps: ['Open the repository and identify its Node.js and package manager requirements.', 'Select the matching Node.js version and install from the lockfile.', 'Start PostgreSQL, MySQL, Redis, or another configured service.', 'Configure the local proxy, hostname, and HTTPS for browser-facing flows.', 'Run next dev for development or next build and next start for a production-like check.'] }
  ],
  setupGuide: 'Read the complete Next.js setup guide',
  benefitsTitle: 'Why use FlyEnv for Next.js development',
  benefitsDescription: 'A more predictable local workflow for projects that move between browser UI, server code, builds, and data services.',
  benefits: [
    { icon: 'runtime', title: 'Match Node.js to the project', description: 'Keep different Next.js projects on the runtime releases their dependencies and deployment targets support.', emphasis: true, evidence: 'Project A → Node.js 20 · Project B → Node.js 22' },
    { icon: 'play', title: 'Run the app and services together', description: 'Start the Next.js app, database, Redis, and local proxy as one project group when the full stack is required.', emphasis: true, evidence: 'Next.js + PostgreSQL + Redis → Startup Group' },
    { icon: 'globe', title: 'Test a real local origin', description: 'Use a readable local hostname and HTTPS for browser behavior that localhost alone cannot reproduce.' },
    { icon: 'layers', title: 'Keep full-stack projects isolated', description: 'Keep each project’s runtime, local URL, database, Redis, and supporting services in its own workspace.' }
  ],
  faqTitle: 'Next.js FAQ',
  faqDescription: 'Common questions about using FlyEnv for local Next.js projects.',
  faqs: [
    { question: 'Can different Next.js projects use different Node.js versions?', answer: 'Yes. FlyEnv lets each project use the Node.js version it requires, which helps when applications or dependencies are on different release tracks.' },
    { question: 'Does FlyEnv replace the Next.js package manager?', answer: 'No. Keep using the package manager and lockfile chosen by the repository. FlyEnv provides the project runtime and local services around that toolchain.' },
    { question: 'Do I need a database for every Next.js project?', answer: 'No. A frontend-only project may only need Node.js. Add PostgreSQL or MySQL when the application uses server-side data, route handlers, or persistent content.' },
    { question: 'When should I add Redis?', answer: 'Add Redis when the application uses caching, sessions, queues, rate limiting, or another shared fast state pattern. It is optional, not a requirement of Next.js itself.' },
    { question: 'Can I test OAuth and webhooks on a local Next.js domain?', answer: 'Yes. Configure a local domain with trusted HTTPS so browser cookies, OAuth callbacks, webhooks, and other secure-origin features behave closer to production.' },
    { question: 'Can FlyEnv run next build and next start?', answer: 'Yes. FlyEnv provides the Node.js runtime and local services; the project’s own package scripts still run next build and next start for a production-like local check.' }
  ],
  relatedTitle: 'Related solutions',
  relatedSolutions: relatedSolutions.map((item) => ({ ...item, description: item.name === 'Nuxt' ? 'Vue full-stack framework' : item.name === 'NestJS' ? 'TypeScript backend framework' : 'React frontend workflow', href: `/solutions/${item.slug}` })),
  ctaTitle: 'Ready to build Next.js locally?',
  ctaDescription: 'Run the Node.js runtime, build workflow, data services, local domain, and HTTPS in one workspace.',
  haveQuestions: 'Have questions using FlyEnv?'
}

const localized: Record<Exclude<NextjsSolutionLocale, 'en'>, CopyData> = {
  zh: {
    ...english,
    breadcrumbSolutions: '解决方案',
    eyebrow: '全栈 JavaScript 解决方案',
    heroTitle: '使用 FlyEnv 构建 Next.js 本地开发环境',
    heroDescription: '在一个工作区中，使用 Node.js 运行时、项目指定的包管理器、本地数据库、Redis、自定义域名和 HTTPS 构建、运行并测试 Next.js 应用。',
    download: '下载 FlyEnv',
    guide: '阅读 Next.js 配置指南',
    heroStackTitle: '典型的本地 Next.js 技术栈',
    heroStackDescription: '全栈 Next.js 项目运行所需的本地组件。',
    heroStack: [
      { key: 'runtime', label: 'Node.js 运行时', feature: 'nodejs' },
      { key: 'package', label: 'npm / pnpm / Yarn' },
      { key: 'database', label: 'PostgreSQL / MySQL', feature: 'postgresql' },
      { key: 'redis', label: 'Redis', feature: 'redis' },
      { key: 'origin', label: '本地域名 + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'Next.js 的实用本地技术栈',
    requirementsDescription: 'Next.js 可以从一个 Node.js 进程开始运行，但真实的全栈项目通常还需要协调一致的运行时、构建工具、数据服务和浏览器访问入口。',
    requirements: [
      { icon: 'runtime', title: 'Node.js 运行时', description: '使用项目支持的版本运行 Next.js 服务器、开发工具和构建脚本。', linkLabel: 'Node.js 特性', feature: 'nodejs' },
      { icon: 'package', title: '包管理器', description: '使用仓库已经指定的包管理器和 lockfile：npm、pnpm、Yarn 或 Bun。', linkLabel: '项目工具链' },
      { icon: 'database', title: '应用数据库', description: '当 Server Actions、路由处理器或应用层需要持久化数据时，连接 PostgreSQL 或 MySQL。', linkLabel: '数据库特性', feature: 'postgresql' },
      { icon: 'cache', title: '可选 Redis', description: '应用需要缓存、会话、队列、限流或后台任务时，再添加 Redis。', linkLabel: 'Redis 特性', feature: 'redis' },
      { icon: 'web', title: '本地访问入口', description: '应用需要稳定的本地主机名、代理行为或多个服务时，使用 Nginx 或 Caddy。', linkLabel: 'Nginx 特性', feature: 'nginx' },
      { icon: 'lock', title: '浏览器流程的 HTTPS', description: '在受信任的本地入口上测试 OAuth、安全 Cookie、Webhook、Service Worker 等浏览器功能。', linkLabel: '本地 HTTPS 特性', feature: 'https' }
    ],
    lifecycleTitle: 'FlyEnv 中的 Next.js 开发生命周期',
    lifecycleDescription: '从安装依赖到运行接近生产环境的构建，让项目运行时与包管理工作流始终保持一致。',
    lifecycleSteps: [
      { icon: 'package', title: '安装依赖', command: 'npm install', description: '使用选定的项目工具链解析 lockfile。' },
      { icon: 'play', title: '运行开发服务器', command: 'npm run dev', description: '在本地运行 App Router、Server Components 和路由处理器。' },
      { icon: 'build', title: '构建', command: 'npm run build', description: '在部署前发现生产渲染和依赖问题。' },
      { icon: 'globe', title: '启动生产模式', command: 'npm start', description: '通过本地域名和 HTTPS 提供构建后的应用。' }
    ],
    workflowLabel: '项目工作流',
    packageTools: [{ label: 'npm' }, { label: 'pnpm' }, { label: 'Yarn' }, { label: 'Bun' }, { label: 'Node.js 版本', feature: 'nodejs' }, { label: '启动组', feature: 'startupGroups' }],
    architectureTitle: '在一个本地工作区中管理前端与后端',
    architectureDescription: 'Next.js 项目可以在一个应用中提供 UI、路由处理器、Server Actions 和 API 调用，同时继续使用本地数据服务。',
    architectureApplicationTitle: 'Next.js 应用',
    architectureApplicationDescription: 'App Router · Server Components · Route Handlers · Server Actions',
    architectureApplicationLabels: ['前端', '后端'],
    architectureFlowLabels: ['浏览器 / HTTPS', 'Next.js 应用', 'PostgreSQL / Redis'],
    architectureLeft: [
      { icon: 'browser', title: '浏览器与本地入口', description: '打开 https://next-app.test，测试 Cookie、OAuth、Webhook 和客户端集成流程。' },
      { icon: 'code', title: 'UI 与路由处理器', description: '由 Next.js 项目提供页面、Server Actions、API 端点和前端后端逻辑。' }
    ],
    architectureRight: [
      { icon: 'database', logo: '/assets/demo-logos/postgresql.svg', title: 'PostgreSQL 或 MySQL', description: '存储服务端使用的用户、内容、订单和其他应用数据。' },
      { icon: 'cache', logo: '/assets/demo-logos/redis.svg', title: '按需使用 Redis', description: '支持缓存、会话、队列、限流或其他高速共享状态。' }
    ],
    runtimeTitle: '项目运行时与包管理器',
    runtimeDescription: 'Node.js 是应用运行时，包管理器则属于项目工具链的一部分。让这两项选择清晰可见，不要依赖单一的全局安装。',
    runtimeNote: 'FlyEnv 管理项目周边的运行时和本地服务，但不会替代 npm、pnpm、Yarn、Bun 或项目现有的脚本。',
    runtimeVersionTitle: 'Node.js 版本',
    runtimeVersionDescription: '匹配 Next.js 版本、依赖和部署目标所要求的 Node.js 版本。',
    runtimeVersionLink: '打开 Node.js 特性',
    packageManagerTitle: '包管理器',
    packageManagerDescription: '让 npm、pnpm、Yarn 或 Bun 与项目的 lockfile 和脚本保持一致。',
    packageManagerNote: 'Lockfile 属于项目的一部分',
    screenshotAlt: 'FlyEnv 启动组一键启动项目服务',
    screenshotCaption: '使用启动组一键启动 Next.js 应用、数据库、Redis 及其他本地服务。',
    workflowTitle: '开始新的 Next.js 项目，或运行已有项目',
    workflowDescription: '根据项目当前状态选择合适的工作流，并在同一个工作区中管理运行时和配套服务。',
    workflows: [
      { icon: 'plus', title: '创建新的 Next.js 项目', steps: ['打开 Node.js → 新建项目，选择 Next.js 模板。', '选择项目使用的 Node.js 版本和包管理器。', '安装依赖，并将项目 lockfile 与源代码一起保存。', '按需添加本地域名、HTTPS 和数据库服务。', '为应用及其配套服务创建启动组。'] },
      { icon: 'folder', title: '运行已有的 Next.js 项目', steps: ['打开仓库，确认项目对 Node.js 和包管理器的要求。', '选择匹配的 Node.js 版本，并根据 lockfile 安装依赖。', '启动 PostgreSQL、MySQL、Redis 或其他已配置的服务。', '为浏览器访问流程配置本地代理、主机名和 HTTPS。', '开发时运行 next dev，接近生产环境检查时运行 next build 和 next start。'] }
    ],
    setupGuide: '阅读完整的 Next.js 配置指南',
    benefitsTitle: '为什么使用 FlyEnv 进行 Next.js 开发',
    benefitsDescription: '为需要在浏览器 UI、服务端代码、构建流程和数据服务之间切换的项目提供更可预测的本地工作流。',
    benefits: [
      { icon: 'runtime', title: '为项目匹配 Node.js', description: '让不同 Next.js 项目使用依赖和部署目标支持的运行时版本。', emphasis: true, evidence: '项目 A → Node.js 20 · 项目 B → Node.js 22' },
      { icon: 'play', title: '一起运行应用和服务', description: '需要完整技术栈时，将 Next.js 应用、数据库、Redis 和本地代理作为一个项目组启动。', emphasis: true, evidence: 'Next.js + PostgreSQL + Redis → 启动组' },
      { icon: 'globe', title: '测试真实的本地入口', description: '使用易读的本地主机名和 HTTPS，测试 localhost 无法复现的浏览器行为。' },
      { icon: 'layers', title: '隔离全栈项目', description: '为每个项目分别保留运行时、本地 URL、数据库、Redis 和配套服务。' }
    ],
    faqTitle: 'Next.js 常见问题',
    faqDescription: '关于使用 FlyEnv 开发本地 Next.js 项目的常见问题。',
    faqs: [
      { question: '不同的 Next.js 项目可以使用不同的 Node.js 版本吗？', answer: '可以。FlyEnv 允许每个项目使用自身所需的 Node.js 版本，适合应用或依赖处于不同版本周期的情况。' },
      { question: 'FlyEnv 会替代 Next.js 项目的包管理器吗？', answer: '不会。继续使用仓库选择的包管理器和 lockfile，FlyEnv 负责提供项目运行时以及周边的本地服务。' },
      { question: '每个 Next.js 项目都需要数据库吗？', answer: '不需要。纯前端项目可能只需要 Node.js；当应用使用服务端数据、路由处理器或持久化内容时，再添加 PostgreSQL 或 MySQL。' },
      { question: '什么时候应该添加 Redis？', answer: '当应用使用缓存、会话、队列、限流或其他高速共享状态模式时添加 Redis。Redis 是可选服务，并不是 Next.js 的必需组件。' },
      { question: '可以在本地 Next.js 域名上测试 OAuth 和 Webhook 吗？', answer: '可以。配置带受信任 HTTPS 的本地域名后，浏览器 Cookie、OAuth 回调、Webhook 和其他安全来源功能会更接近生产环境。' },
      { question: 'FlyEnv 可以运行 next build 和 next start 吗？', answer: '可以。FlyEnv 提供 Node.js 运行时和本地服务，项目自己的脚本仍然负责运行 next build 和 next start，完成接近生产环境的本地检查。' }
    ],
    relatedTitle: '相关解决方案',
    relatedSolutions: relatedSolutions.map((item) => ({ ...item, description: item.name === 'Nuxt' ? 'Vue 全栈框架' : item.name === 'NestJS' ? 'TypeScript 后端框架' : 'React 前端工作流', href: `/zh/solutions/${item.slug}` })),
    ctaTitle: '准备好在本地构建 Next.js 了吗？',
    ctaDescription: '在一个工作区中运行 Node.js、构建流程、数据服务、本地域名和 HTTPS。',
    haveQuestions: '使用 FlyEnv 时有疑问？'
  },
  id: {
    ...english,
    breadcrumbSolutions: 'Solusi',
    eyebrow: 'Solusi JavaScript full-stack',
    heroTitle: 'Lingkungan pengembangan Next.js lokal dengan FlyEnv',
    heroDescription: 'Bangun, jalankan, dan uji aplikasi Next.js dengan runtime Node.js, package manager pilihan Anda, database lokal, Redis, domain khusus, dan HTTPS—semuanya dikelola dalam satu workspace.',
    download: 'Unduh FlyEnv',
    guide: 'Baca panduan setup Next.js',
    heroStackTitle: 'Stack Next.js lokal yang umum',
    heroStackDescription: 'Komponen lokal di balik proyek Next.js full-stack.',
    heroStack: [
      { key: 'runtime', label: 'Runtime Node.js', feature: 'nodejs' },
      { key: 'package', label: 'npm / pnpm / Yarn' },
      { key: 'database', label: 'PostgreSQL / MySQL', feature: 'postgresql' },
      { key: 'redis', label: 'Redis', feature: 'redis' },
      { key: 'origin', label: 'Domain lokal + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'Stack lokal praktis untuk Next.js',
    requirementsDescription: 'Next.js dapat dimulai sebagai satu proses Node.js, tetapi proyek full-stack yang nyata biasanya membutuhkan runtime, alat build, layanan data, dan origin yang dapat diakses browser agar tetap selaras.',
    requirements: [
      { icon: 'runtime', title: 'Runtime Node.js', description: 'Jalankan server Next.js, alat pengembangan, dan script build dengan rilis yang didukung proyek.', linkLabel: 'Fitur Node.js', feature: 'nodejs' },
      { icon: 'package', title: 'Package manager', description: 'Gunakan package manager dan lockfile yang sudah ditentukan repository: npm, pnpm, Yarn, atau Bun.', linkLabel: 'Toolchain proyek' },
      { icon: 'database', title: 'Database aplikasi', description: 'Hubungkan PostgreSQL atau MySQL saat server actions, route handlers, atau lapisan aplikasi membutuhkan data persisten.', linkLabel: 'Fitur database', feature: 'postgresql' },
      { icon: 'cache', title: 'Redis opsional', description: 'Tambahkan Redis untuk cache, session, queue, rate limiting, atau pekerjaan latar belakang saat aplikasi membutuhkannya.', linkLabel: 'Fitur Redis', feature: 'redis' },
      { icon: 'web', title: 'Origin lokal', description: 'Gunakan Nginx atau Caddy ketika aplikasi membutuhkan hostname lokal yang stabil, perilaku proxy, atau beberapa layanan.', linkLabel: 'Fitur Nginx', feature: 'nginx' },
      { icon: 'lock', title: 'HTTPS untuk alur browser', description: 'Uji OAuth, secure cookie, webhook, service worker, dan fitur browser lain pada origin lokal tepercaya.', linkLabel: 'Fitur HTTPS lokal', feature: 'https' }
    ],
    lifecycleTitle: 'Siklus hidup Next.js di FlyEnv',
    lifecycleDescription: 'Satukan runtime proyek dan alur kerja package mulai dari instalasi dependensi hingga build yang mendekati produksi.',
    lifecycleSteps: [
      { icon: 'package', title: 'Instal dependensi', command: 'npm install', description: 'Resolusi lockfile dengan toolchain proyek yang dipilih.' },
      { icon: 'play', title: 'Jalankan server dev', command: 'npm run dev', description: 'Jalankan App Router, Server Components, dan route handlers secara lokal.' },
      { icon: 'build', title: 'Build', command: 'npm run build', description: 'Temukan masalah rendering produksi dan dependensi sebelum deployment.' },
      { icon: 'globe', title: 'Mulai produksi', command: 'npm start', description: 'Sajikan aplikasi yang sudah dibuild melalui domain lokal dan HTTPS.' }
    ],
    workflowLabel: 'Alur kerja proyek',
    packageTools: [{ label: 'npm' }, { label: 'pnpm' }, { label: 'Yarn' }, { label: 'Bun' }, { label: 'Versi Node.js', feature: 'nodejs' }, { label: 'Startup Group', feature: 'startupGroups' }],
    architectureTitle: 'Frontend dan backend dalam satu workspace lokal',
    architectureDescription: 'Proyek Next.js dapat menyediakan UI, route handlers, server actions, dan panggilan API dari satu aplikasi sekaligus tetap menggunakan layanan data lokal.',
    architectureApplicationTitle: 'Aplikasi Next.js',
    architectureApplicationDescription: 'App Router · Server Components · Route Handlers · Server Actions',
    architectureApplicationLabels: ['Frontend', 'Backend'],
    architectureFlowLabels: ['Browser / HTTPS', 'Aplikasi Next.js', 'PostgreSQL / Redis'],
    architectureLeft: [
      { icon: 'browser', title: 'Browser dan origin lokal', description: 'Buka https://next-app.test untuk menguji cookie, OAuth, webhook, dan integrasi sisi klien.' },
      { icon: 'code', title: 'UI dan route handlers', description: 'Render halaman, server actions, endpoint API, dan logika backend-for-frontend dari proyek Next.js.' }
    ],
    architectureRight: [
      { icon: 'database', logo: '/assets/demo-logos/postgresql.svg', title: 'PostgreSQL atau MySQL', description: 'Simpan pengguna, konten, pesanan, dan data aplikasi lain yang digunakan lapisan server.' },
      { icon: 'cache', logo: '/assets/demo-logos/redis.svg', title: 'Redis saat diperlukan', description: 'Dukung cache, session, queue, rate limit, atau shared state cepat lainnya.' }
    ],
    runtimeTitle: 'Runtime proyek dan package manager',
    runtimeDescription: 'Node.js adalah runtime aplikasi; package manager merupakan bagian dari toolchain proyek. Tampilkan keduanya dengan jelas dan jangan bergantung pada satu instalasi global.',
    runtimeNote: 'FlyEnv mengelola runtime dan layanan lokal di sekitar proyek tanpa menggantikan npm, pnpm, Yarn, Bun, atau script proyek yang sudah ada.',
    runtimeVersionTitle: 'Versi Node.js',
    runtimeVersionDescription: 'Gunakan rilis yang sesuai dengan versi Next.js, dependensi, dan target deployment.',
    runtimeVersionLink: 'Buka fitur Node.js',
    packageManagerTitle: 'Package manager',
    packageManagerDescription: 'Jaga npm, pnpm, Yarn, atau Bun tetap sesuai dengan lockfile dan script yang digunakan proyek.',
    packageManagerNote: 'Lockfile adalah bagian dari proyek',
    screenshotAlt: 'FlyEnv Startup Groups untuk memulai layanan proyek bersama-sama',
    screenshotCaption: 'Gunakan Startup Group untuk memulai aplikasi Next.js, database, Redis, dan layanan lokal lain dengan satu klik.',
    workflowTitle: 'Mulai proyek Next.js baru atau jalankan proyek yang sudah ada',
    workflowDescription: 'Pilih alur kerja yang sesuai dengan kondisi proyek saat ini, lalu simpan runtime dan layanan pendukungnya dalam satu workspace.',
    workflows: [
      { icon: 'plus', title: 'Buat proyek Next.js baru', steps: ['Buka Node.js → New Project dan pilih template Next.js.', 'Pilih versi Node.js dan package manager yang akan digunakan proyek.', 'Instal dependensi dan simpan lockfile proyek bersama source code.', 'Tambahkan domain lokal, HTTPS, dan layanan database bila diperlukan.', 'Buat Startup Group untuk aplikasi dan layanan pendukungnya.'] },
      { icon: 'folder', title: 'Jalankan proyek Next.js yang sudah ada', steps: ['Buka repository dan cek kebutuhan Node.js serta package manager-nya.', 'Pilih versi Node.js yang sesuai dan instal dari lockfile.', 'Mulai PostgreSQL, MySQL, Redis, atau layanan lain yang dikonfigurasi.', 'Atur proxy lokal, hostname, dan HTTPS untuk alur yang diakses browser.', 'Gunakan next dev untuk pengembangan atau next build dan next start untuk pemeriksaan yang mendekati produksi.'] }
    ],
    setupGuide: 'Baca panduan setup Next.js lengkap',
    benefitsTitle: 'Mengapa menggunakan FlyEnv untuk pengembangan Next.js',
    benefitsDescription: 'Alur kerja lokal yang lebih mudah diprediksi untuk proyek yang berpindah antara UI browser, kode server, build, dan layanan data.',
    benefits: [
      { icon: 'runtime', title: 'Sesuaikan Node.js dengan proyek', description: 'Jaga setiap proyek Next.js pada rilis runtime yang didukung dependensi dan target deployment-nya.', emphasis: true, evidence: 'Proyek A → Node.js 20 · Proyek B → Node.js 22' },
      { icon: 'play', title: 'Jalankan aplikasi dan layanan bersama', description: 'Mulai aplikasi Next.js, database, Redis, dan proxy lokal sebagai satu grup proyek saat full stack dibutuhkan.', emphasis: true, evidence: 'Next.js + PostgreSQL + Redis → Startup Group' },
      { icon: 'globe', title: 'Uji origin lokal yang nyata', description: 'Gunakan hostname lokal yang mudah dibaca dan HTTPS untuk perilaku browser yang tidak dapat direproduksi oleh localhost saja.' },
      { icon: 'layers', title: 'Pisahkan proyek full-stack', description: 'Simpan runtime, URL lokal, database, Redis, dan layanan pendukung setiap proyek dalam workspace masing-masing.' }
    ],
    faqTitle: 'FAQ Next.js',
    faqDescription: 'Pertanyaan umum tentang menggunakan FlyEnv untuk proyek Next.js lokal.',
    faqs: [
      { question: 'Bisakah proyek Next.js yang berbeda menggunakan versi Node.js yang berbeda?', answer: 'Bisa. FlyEnv memungkinkan setiap proyek menggunakan versi Node.js yang dibutuhkannya, sehingga aplikasi atau dependensi pada jalur rilis berbeda tetap dapat dikelola.' },
      { question: 'Apakah FlyEnv menggantikan package manager Next.js?', answer: 'Tidak. Tetap gunakan package manager dan lockfile yang dipilih repository. FlyEnv menyediakan runtime proyek dan layanan lokal di sekitar toolchain tersebut.' },
      { question: 'Apakah setiap proyek Next.js membutuhkan database?', answer: 'Tidak. Proyek frontend-only mungkin hanya membutuhkan Node.js. Tambahkan PostgreSQL atau MySQL saat aplikasi menggunakan data server, route handlers, atau konten persisten.' },
      { question: 'Kapan sebaiknya saya menambahkan Redis?', answer: 'Tambahkan Redis saat aplikasi menggunakan cache, session, queue, rate limiting, atau pola shared state cepat lainnya. Redis opsional, bukan kebutuhan Next.js.' },
      { question: 'Bisakah saya menguji OAuth dan webhook pada domain Next.js lokal?', answer: 'Bisa. Atur domain lokal dengan HTTPS tepercaya agar cookie browser, callback OAuth, webhook, dan fitur secure-origin lain berperilaku lebih dekat dengan produksi.' },
      { question: 'Bisakah FlyEnv menjalankan next build dan next start?', answer: 'Bisa. FlyEnv menyediakan runtime Node.js dan layanan lokal; script proyek tetap menjalankan next build dan next start untuk pemeriksaan lokal yang mendekati produksi.' }
    ],
    relatedTitle: 'Solusi terkait',
    relatedSolutions: relatedSolutions.map((item) => ({ ...item, description: item.name === 'Nuxt' ? 'Framework full-stack Vue' : item.name === 'NestJS' ? 'Framework backend TypeScript' : 'Alur kerja frontend React', href: `/id/solutions/${item.slug}` })),
    ctaTitle: 'Siap membangun Next.js secara lokal?',
    ctaDescription: 'Jalankan runtime Node.js, alur build, layanan data, domain lokal, dan HTTPS dalam satu workspace.',
    haveQuestions: 'Punya pertanyaan tentang FlyEnv?'
  },
  es: {
    ...english,
    breadcrumbSolutions: 'Soluciones',
    eyebrow: 'Solución JavaScript full-stack',
    heroTitle: 'Entorno de desarrollo local de Next.js con FlyEnv',
    heroDescription: 'Construye, ejecuta y prueba aplicaciones Next.js con el runtime de Node.js, tu gestor de paquetes preferido, bases de datos locales, Redis, dominios personalizados y HTTPS, todo gestionado en un único workspace.',
    download: 'Descargar FlyEnv',
    guide: 'Leer la guía de configuración de Next.js',
    heroStackTitle: 'Stack local típico de Next.js',
    heroStackDescription: 'Los componentes locales que hay detrás de un proyecto Next.js full-stack.',
    heroStack: [
      { key: 'runtime', label: 'Runtime de Node.js', feature: 'nodejs' },
      { key: 'package', label: 'npm / pnpm / Yarn' },
      { key: 'database', label: 'PostgreSQL / MySQL', feature: 'postgresql' },
      { key: 'redis', label: 'Redis', feature: 'redis' },
      { key: 'origin', label: 'Dominio local + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'Un stack local práctico para Next.js',
    requirementsDescription: 'Next.js puede empezar como un único proceso de Node.js, pero un proyecto full-stack real suele necesitar un runtime, herramientas de build, servicios de datos y un origen accesible desde el navegador que permanezcan coordinados.',
    requirements: [
      { icon: 'runtime', title: 'Runtime de Node.js', description: 'Ejecuta el servidor de Next.js, las herramientas de desarrollo y los scripts de build con una versión compatible con el proyecto.', linkLabel: 'Función de Node.js', feature: 'nodejs' },
      { icon: 'package', title: 'Gestor de paquetes', description: 'Usa el gestor de paquetes y el lockfile que ya espera el repositorio: npm, pnpm, Yarn o Bun.', linkLabel: 'Toolchain del proyecto' },
      { icon: 'database', title: 'Base de datos de la aplicación', description: 'Conecta PostgreSQL o MySQL cuando las server actions, los route handlers o la capa de aplicación necesiten datos persistentes.', linkLabel: 'Función de base de datos', feature: 'postgresql' },
      { icon: 'cache', title: 'Redis opcional', description: 'Añade Redis para caché, sesiones, colas, limitación de tráfico o tareas en segundo plano cuando la aplicación lo utilice.', linkLabel: 'Función de Redis', feature: 'redis' },
      { icon: 'web', title: 'Origen local', description: 'Usa Nginx o Caddy cuando la aplicación necesite un hostname local estable, comportamiento de proxy o varios servicios.', linkLabel: 'Función de Nginx', feature: 'nginx' },
      { icon: 'lock', title: 'HTTPS para flujos del navegador', description: 'Prueba OAuth, cookies seguras, webhooks, service workers y otras funciones del navegador en un origen local de confianza.', linkLabel: 'Función de HTTPS local', feature: 'https' }
    ],
    lifecycleTitle: 'Ciclo de vida de Next.js en FlyEnv',
    lifecycleDescription: 'Mantén juntos el runtime del proyecto y el flujo de paquetes, desde la instalación de dependencias hasta un build similar al de producción.',
    lifecycleSteps: [
      { icon: 'package', title: 'Instalar dependencias', command: 'npm install', description: 'Resuelve el lockfile con el toolchain seleccionado para el proyecto.' },
      { icon: 'play', title: 'Ejecutar servidor de desarrollo', command: 'npm run dev', description: 'Ejecuta localmente App Router, Server Components y route handlers.' },
      { icon: 'build', title: 'Build', command: 'npm run build', description: 'Detecta problemas de renderizado en producción y de dependencias antes del despliegue.' },
      { icon: 'globe', title: 'Iniciar producción', command: 'npm start', description: 'Sirve la aplicación compilada mediante un dominio local y HTTPS.' }
    ],
    workflowLabel: 'Flujo de trabajo del proyecto',
    packageTools: [{ label: 'npm' }, { label: 'pnpm' }, { label: 'Yarn' }, { label: 'Bun' }, { label: 'Versiones de Node.js', feature: 'nodejs' }, { label: 'Startup Groups', feature: 'startupGroups' }],
    architectureTitle: 'Frontend y backend en un único workspace local',
    architectureDescription: 'Un proyecto Next.js puede servir la UI, los route handlers, las server actions y las llamadas a API desde una aplicación, manteniendo a la vez sus servicios de datos locales.',
    architectureApplicationTitle: 'Aplicación Next.js',
    architectureApplicationDescription: 'App Router · Server Components · Route Handlers · Server Actions',
    architectureApplicationLabels: ['Frontend', 'Backend'],
    architectureFlowLabels: ['Navegador / HTTPS', 'Aplicación Next.js', 'PostgreSQL / Redis'],
    architectureLeft: [
      { icon: 'browser', title: 'Navegador y origen local', description: 'Abre https://next-app.test para probar cookies, OAuth, webhooks e integraciones del cliente.' },
      { icon: 'code', title: 'UI y route handlers', description: 'Renderiza páginas, server actions, endpoints de API y lógica backend-for-frontend desde el proyecto Next.js.' }
    ],
    architectureRight: [
      { icon: 'database', logo: '/assets/demo-logos/postgresql.svg', title: 'PostgreSQL o MySQL', description: 'Guarda usuarios, contenido, pedidos y otros datos de aplicación usados por la capa del servidor.' },
      { icon: 'cache', logo: '/assets/demo-logos/redis.svg', title: 'Redis cuando sea necesario', description: 'Proporciona caché, sesiones, colas, límites de tráfico u otro estado compartido de acceso rápido.' }
    ],
    runtimeTitle: 'Runtime del proyecto y gestor de paquetes',
    runtimeDescription: 'Node.js es el runtime de la aplicación; el gestor de paquetes forma parte del toolchain del proyecto. Mantén visibles ambas decisiones en lugar de depender de una instalación global.',
    runtimeNote: 'FlyEnv gestiona el runtime y los servicios locales alrededor del proyecto sin sustituir npm, pnpm, Yarn, Bun ni los scripts que ya utiliza el proyecto.',
    runtimeVersionTitle: 'Versión de Node.js',
    runtimeVersionDescription: 'Usa la versión requerida por Next.js, sus dependencias y el destino de despliegue.',
    runtimeVersionLink: 'Abrir función de Node.js',
    packageManagerTitle: 'Gestor de paquetes',
    packageManagerDescription: 'Mantén npm, pnpm, Yarn o Bun alineados con el lockfile y los scripts que utiliza el proyecto.',
    packageManagerNote: 'El lockfile forma parte del proyecto',
    screenshotAlt: 'FlyEnv Startup Groups para iniciar juntos los servicios del proyecto',
    screenshotCaption: 'Usa un Startup Group para iniciar con un clic la aplicación Next.js, la base de datos, Redis y otros servicios locales.',
    workflowTitle: 'Inicia un proyecto Next.js nuevo o ejecuta uno existente',
    workflowDescription: 'Elige el flujo que corresponda al estado actual del proyecto y mantén su runtime y sus servicios de apoyo en un único workspace.',
    workflows: [
      { icon: 'plus', title: 'Crear un proyecto Next.js nuevo', steps: ['Abre Node.js → Nuevo proyecto y elige la plantilla de Next.js.', 'Selecciona la versión de Node.js y el gestor de paquetes que usará el proyecto.', 'Instala las dependencias y conserva el lockfile junto al código fuente.', 'Añade el dominio local, HTTPS y los servicios de base de datos cuando sea necesario.', 'Crea un Startup Group para la aplicación y sus servicios de apoyo.'] },
      { icon: 'folder', title: 'Ejecutar un proyecto Next.js existente', steps: ['Abre el repositorio e identifica sus requisitos de Node.js y del gestor de paquetes.', 'Selecciona la versión de Node.js correspondiente e instala desde el lockfile.', 'Inicia PostgreSQL, MySQL, Redis u otro servicio configurado.', 'Configura el proxy local, el hostname y HTTPS para los flujos del navegador.', 'Usa next dev para desarrollar o next build y next start para una comprobación similar a producción.'] }
    ],
    setupGuide: 'Leer la guía completa de configuración de Next.js',
    benefitsTitle: 'Por qué usar FlyEnv para desarrollar con Next.js',
    benefitsDescription: 'Un flujo local más predecible para proyectos que pasan de la UI del navegador al código de servidor, los builds y los servicios de datos.',
    benefits: [
      { icon: 'runtime', title: 'Ajusta Node.js al proyecto', description: 'Mantén cada proyecto Next.js en una versión del runtime compatible con sus dependencias y su destino de despliegue.', emphasis: true, evidence: 'Proyecto A → Node.js 20 · Proyecto B → Node.js 22' },
      { icon: 'play', title: 'Ejecuta juntos la app y sus servicios', description: 'Inicia la aplicación Next.js, la base de datos, Redis y el proxy local como un grupo cuando necesites el stack completo.', emphasis: true, evidence: 'Next.js + PostgreSQL + Redis → Startup Group' },
      { icon: 'globe', title: 'Prueba un origen local real', description: 'Usa un hostname local legible y HTTPS para comportamientos del navegador que localhost por sí solo no puede reproducir.' },
      { icon: 'layers', title: 'Mantén aislados los proyectos full-stack', description: 'Conserva el runtime, la URL local, la base de datos, Redis y los servicios de apoyo de cada proyecto en su propio workspace.' }
    ],
    faqTitle: 'Preguntas frecuentes sobre Next.js',
    faqDescription: 'Preguntas habituales sobre el uso de FlyEnv para proyectos Next.js locales.',
    faqs: [
      { question: '¿Pueden distintos proyectos Next.js usar diferentes versiones de Node.js?', answer: 'Sí. FlyEnv permite que cada proyecto use la versión de Node.js que necesita, algo útil cuando las aplicaciones o sus dependencias siguen ciclos de lanzamiento distintos.' },
      { question: '¿FlyEnv sustituye al gestor de paquetes de Next.js?', answer: 'No. Sigue usando el gestor de paquetes y el lockfile elegidos por el repositorio. FlyEnv proporciona el runtime del proyecto y los servicios locales alrededor de ese toolchain.' },
      { question: '¿Todos los proyectos Next.js necesitan una base de datos?', answer: 'No. Un proyecto solo de frontend quizá necesite únicamente Node.js. Añade PostgreSQL o MySQL cuando la aplicación use datos del servidor, route handlers o contenido persistente.' },
      { question: '¿Cuándo debería añadir Redis?', answer: 'Añade Redis cuando la aplicación use caché, sesiones, colas, limitación de tráfico u otro patrón de estado compartido rápido. Es opcional, no un requisito de Next.js.' },
      { question: '¿Puedo probar OAuth y webhooks en un dominio local de Next.js?', answer: 'Sí. Configura un dominio local con HTTPS de confianza para que las cookies del navegador, los callbacks de OAuth, los webhooks y otras funciones de origen seguro se comporten de forma más parecida a producción.' },
      { question: '¿FlyEnv puede ejecutar next build y next start?', answer: 'Sí. FlyEnv proporciona el runtime de Node.js y los servicios locales; los scripts del propio proyecto siguen ejecutando next build y next start para una comprobación local similar a producción.' }
    ],
    relatedTitle: 'Soluciones relacionadas',
    relatedSolutions: relatedSolutions.map((item) => ({ ...item, description: item.name === 'Nuxt' ? 'Framework full-stack de Vue' : item.name === 'NestJS' ? 'Framework backend de TypeScript' : 'Flujo frontend de React', href: `/es/solutions/${item.slug}` })),
    ctaTitle: '¿Listo para crear con Next.js en local?',
    ctaDescription: 'Ejecuta el runtime de Node.js, el flujo de build, los servicios de datos, el dominio local y HTTPS en un único workspace.',
    haveQuestions: '¿Tienes preguntas sobre FlyEnv?'
  }
}

export function translateData(locale: NextjsSolutionLocale): CopyData {
  return locale === 'en' ? english : localized[locale]
}
