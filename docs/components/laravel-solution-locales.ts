export type LaravelSolutionLocale = 'en' | 'zh' | 'id' | 'es'

type FeatureKey =
  | 'php'
  | 'mysql'
  | 'postgresql'
  | 'redis'
  | 'nginx'
  | 'apache'
  | 'caddy'
  | 'nodejs'
  | 'cron'
  | 'https'

type TextPart = { label: string; feature?: FeatureKey }

type CopyData = {
  breadcrumbSolutions: string
  eyebrow: string
  heroTitle: string
  heroDescription: string
  download: string
  guide: string
  heroStackTitle: string
  heroStackDescription: string
  heroStack: Array<{ key: string; label?: string; feature?: FeatureKey; links?: TextPart[] }>
  requirementsTitle: string
  requirementsDescription: string
  requirementHeaders: [string, string, string]
  requirements: Array<{
    icon: string
    title: string
    serviceParts: TextPart[]
    support: string
  }>
  diagram: Record<string, string>
  stackTitle: string
  stackDescription: string
  stackOutcomes: Array<{ icon: string; title: string; description: string }>
  workspaceTitle: string
  workspaceDescription: string
  workspaceCaption: string
  proofPoints: Array<{ icon: string; title: string; description: string }>
  benefitsTitle: string
  benefitsDescription: string
  benefits: Array<{
    icon: string
    title: string
    description: string
    evidence?: string
    emphasis?: boolean
  }>
  projectPathsTitle: string
  projectPathsDescription: string
  projectPaths: Array<{ icon: string; title: string; steps: string[] }>
  setupGuide: string
  comparisonTitle: string
  comparisonDescription: string
  comparisonHeaders: [string, string, string, string]
  comparisonRows: Array<{ feature: string; host: string; container: string; flyenv: string }>
  faqTitle: string
  faqDescription: string
  faqs: Array<{ question: string; answer: string }>
  relatedTitle: string
  relatedSolutions: Array<{ name: string; description: string; slug: string; logo: string; href?: string }>
  ctaTitle: string
  ctaDescription: string
  haveQuestions: string
}

const featurePaths: Record<FeatureKey, string> = {
  php: '/features/php',
  mysql: '/features/mysql',
  postgresql: '/features/postgresql',
  redis: '/features/redis',
  nginx: '/features/nginx',
  apache: '/features/apache',
  caddy: '/features/caddy',
  nodejs: '/features/nodejs',
  cron: '/features/cron-jobs',
  https: '/features/local-sites-https'
}

const relatedLogos = {
  symfony: 'https://cdn.simpleicons.org/symfony/000000',
  wordpress: 'https://cdn.simpleicons.org/wordpress/21759B',
  magento: '/assets/demo-logos/magento.svg'
}

const sharedStack = [
  { key: 'php', label: 'PHP', feature: 'php' as FeatureKey },
  { key: 'composer', label: 'Composer' },
  {
    key: 'databases',
    links: [
      { label: 'MySQL', feature: 'mysql' as FeatureKey },
      { label: ' / ' },
      { label: 'PostgreSQL', feature: 'postgresql' as FeatureKey }
    ]
  },
  { key: 'redis', label: 'Redis', feature: 'redis' as FeatureKey },
  {
    key: 'web-servers',
    links: [
      { label: 'Nginx', feature: 'nginx' as FeatureKey },
      { label: ' / ' },
      { label: 'Apache', feature: 'apache' as FeatureKey },
      { label: ' / ' },
      { label: 'Caddy', feature: 'caddy' as FeatureKey }
    ]
  },
  { key: 'nodejs', label: 'Node.js', feature: 'nodejs' as FeatureKey },
  { key: 'cron', label: 'Cron', feature: 'cron' as FeatureKey },
  { key: 'https', label: 'HTTPS', feature: 'https' as FeatureKey }
]

const english: CopyData = {
  breadcrumbSolutions: 'Solutions',
  eyebrow: 'Framework solution',
  heroTitle: 'Laravel local development environment with FlyEnv',
  heroDescription: 'Build and run Laravel with PHP, databases, Redis, local domains, and HTTPS in one native workspace.',
  download: 'Download FlyEnv',
  guide: 'Read Laravel guide',
  heroStackTitle: 'What a Laravel project needs',
  heroStackDescription: 'The essential components for a modern Laravel project.',
  heroStack: sharedStack,
  requirementsTitle: 'What a Laravel project needs locally',
  requirementsDescription: 'A practical Laravel application consists of several components. FlyEnv provides and manages them for you.',
  requirementHeaders: ['Requirement', 'Local service', 'FlyEnv support'],
  requirements: [
    { icon: 'runtime', title: 'Application runtime', serviceParts: [{ label: 'PHP-FPM (e.g. PHP 8.3)', feature: 'php' }], support: 'Multiple PHP versions per project' },
    { icon: 'dependencies', title: 'Dependencies', serviceParts: [{ label: 'Composer' }], support: 'Built-in Composer, easy to use' },
    { icon: 'database', title: 'Database', serviceParts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' or ' }, { label: 'PostgreSQL', feature: 'postgresql' }], support: 'Both supported, switch per project' },
    { icon: 'cache', title: 'Cache & queues', serviceParts: [{ label: 'Redis', feature: 'redis' }], support: 'Start when needed' },
    { icon: 'web', title: 'Web server', serviceParts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }, { label: ' / ' }, { label: 'Caddy', feature: 'caddy' }], support: 'Flexible web server support' },
    { icon: 'frontend', title: 'Frontend assets', serviceParts: [{ label: 'Node.js + Vite', feature: 'nodejs' }], support: 'Modern frontend toolchain' },
    { icon: 'clock', title: 'Scheduled tasks', serviceParts: [{ label: 'Cron', feature: 'cron' }], support: 'Manage Laravel scheduler' },
    { icon: 'lock', title: 'Local HTTPS', serviceParts: [{ label: 'Trusted local certificate', feature: 'https' }], support: 'Real local domain with HTTPS' }
  ],
  diagram: { domain: 'https://<br />shop.test', localDomain: 'Local domain', withHttps: 'with HTTPS', webServer: 'Web server', port: 'port 80/443', application: 'Laravel<br />Application', php: 'PHP 8.3<br />(FPM)', database: 'Database', cacheQueues: 'Cache &amp; Queues', additionalTools: 'Additional tools (not in request chain)', frontendAssets: 'Frontend assets', taskScheduling: 'Task scheduling' },
  stackTitle: 'A real Laravel development stack in FlyEnv',
  stackDescription: 'A typical Laravel project running on FlyEnv, with a clear architecture and all the services you need.',
  stackOutcomes: [
    { icon: 'code', title: 'Project-level PHP version', description: 'Use the PHP version required by each Laravel project.' },
    { icon: 'globe', title: 'Local domain + HTTPS', description: 'Access your project with a trusted certificate.' },
    { icon: 'play', title: 'One-click startup group', description: 'Start all required services together and get to work.' },
    { icon: 'list', title: 'Queue workers / scheduler', description: 'Run workers and the Laravel scheduler easily.' }
  ],
  workspaceTitle: 'What it looks like in FlyEnv',
  workspaceDescription: 'A Laravel project with its services and runtime managed in one workspace.',
  workspaceCaption: 'A PHP Laravel Project group keeps Nginx, PHP-FPM, MySQL, and Redis together for repeatable startup.',
  proofPoints: [
    { icon: 'check', title: 'Project-level runtime', description: 'Choose the PHP-FPM version required by this Laravel project.' },
    { icon: 'list', title: 'Laravel project group', description: 'Keep Nginx, PHP-FPM, MySQL, and Redis in one controlled startup order.' },
    { icon: 'database', title: 'Managed service stack', description: 'See the core Laravel services together in one FlyEnv view.' },
    { icon: 'play', title: 'Repeatable startup', description: 'Start the project’s Startup Group whenever you return to the app.' }
  ],
  benefitsTitle: 'Why use FlyEnv for Laravel development',
  benefitsDescription: 'A more predictable and enjoyable local development experience for Laravel.',
  benefits: [
    { icon: 'code', title: 'Use different PHP versions per project', description: 'Keep Laravel projects on the versions they require without changing a global runtime.', emphasis: true, evidence: 'Laravel 8 → PHP 7.4 · Laravel 11 → PHP 8.2 · Laravel 12 → PHP 8.3+' },
    { icon: 'play', title: 'Run the full stack with one click', description: 'Start PHP, the database, Redis, the web server, and more from one Startup Group.', emphasis: true, evidence: 'PHP + Nginx + MySQL + Redis → Startup Group' },
    { icon: 'database', title: 'Choose MySQL or PostgreSQL', description: 'Use the database that matches the project instead of adapting the project to the tool.' },
    { icon: 'cache', title: 'Add Redis only when needed', description: 'Enable cache, sessions, or queues without carrying an unused service everywhere.' },
    { icon: 'lock', title: 'Use a real local domain and HTTPS', description: 'Test cookies, OAuth callbacks, webhooks, and secure browser features locally.', emphasis: true, evidence: 'https://shop.test' },
    { icon: 'clock', title: 'Run scheduler and queue workers', description: 'Keep background work close to the Laravel application during development.' }
  ],
  projectPathsTitle: 'New project or existing project',
  projectPathsDescription: 'FlyEnv works for new Laravel apps and projects you already have.',
  projectPaths: [
    { icon: 'plus', title: 'Start a new Laravel project', steps: ['Open PHP → New Project.', 'Choose Laravel template, framework version, PHP version, and Composer version.', 'FlyEnv runs the Composer creation command and shows the terminal output.', 'Create the matching local site in one click.', 'Open the new project with a local domain and HTTPS.'] },
    { icon: 'web', title: 'Run an existing Laravel project', steps: ['Import or open the existing Laravel project.', 'Set the required PHP version.', 'Configure the database, Redis, and other services if needed.', 'Add the local site and choose the public directory.', 'Start the project’s Startup Group and open the site.'] }
  ],
  setupGuide: 'See the complete setup guide',
  comparisonTitle: 'Compare local Laravel approaches',
  comparisonDescription: 'Different tools, different approaches. Here is how they compare for local Laravel development.',
  comparisonHeaders: ['Feature', 'Manual local setup', 'Container workflow', 'FlyEnv'],
  comparisonRows: [
    { feature: 'Environment model', host: 'Single PHP process', container: 'Docker containers', flyenv: 'Full local environment' },
    { feature: 'Database environment', host: 'Local or external', container: 'Containers', flyenv: 'MySQL or PostgreSQL modules' },
    { feature: 'Redis support', host: 'Manual setup', container: 'Container service', flyenv: 'Built-in, on demand' },
    { feature: 'Local domains', host: 'Manual setup', container: 'Project-dependent', flyenv: 'Managed local sites' },
    { feature: 'Multi-stack development', host: 'Manual switching', container: 'Docker Compose', flyenv: 'Project-level runtimes and services' }
  ],
  faqTitle: 'Laravel FAQ',
  faqDescription: 'Common questions about using FlyEnv for Laravel development.',
  faqs: [
    { question: 'Can I use different PHP versions for different Laravel projects?', answer: 'Yes. FlyEnv manages multiple PHP versions and lets each project or local site use the version it requires.' },
    { question: 'Can I use MySQL or PostgreSQL with Laravel?', answer: 'Yes. Choose the database module that matches the project and start it alongside the Laravel application.' },
    { question: 'Does FlyEnv support Redis queues?', answer: 'Yes. Start Redis when the application uses cache, sessions, Horizon, or queue workers, then keep it in the project’s Startup Group.' },
    { question: 'Can I use a .test domain with HTTPS?', answer: 'Yes. Create a local site with a readable domain and use FlyEnv’s trusted local HTTPS support.' },
    { question: 'Can I manage multiple Laravel projects?', answer: 'Yes. Each project can keep its own PHP version, local site, database choice, Redis usage, and supporting services.' },
    { question: 'Does FlyEnv replace the Laravel installation guide?', answer: 'No. The Solution page explains the environment and workflow; the Laravel Guide covers the detailed setup steps and configuration.' }
  ],
  relatedTitle: 'Related solutions',
  relatedSolutions: [{ name: 'Symfony', description: 'Modern PHP framework', slug: 'symfony', logo: relatedLogos.symfony }, { name: 'WordPress', description: 'CMS & websites', slug: 'wordpress', logo: relatedLogos.wordpress }, { name: 'Magento', description: 'E-commerce', slug: 'magento', logo: relatedLogos.magento }],
  ctaTitle: 'Ready to build Laravel locally?',
  ctaDescription: 'Run PHP, databases, Redis, local domains, and HTTPS in one workspace.',
  haveQuestions: 'Have questions using FlyEnv?'
}

const simplified = {
  zh: {
    breadcrumbSolutions: '解决方案', eyebrow: '框架解决方案', heroTitle: '使用 FlyEnv 构建 Laravel 本地开发环境', heroDescription: '在一个原生工作区中，使用 PHP、数据库、Redis、本地域名和 HTTPS 构建并运行 Laravel。', download: '下载 FlyEnv', guide: '阅读 Laravel 指南', heroStackTitle: 'Laravel 项目需要什么', heroStackDescription: '现代 Laravel 项目所需的核心组件。', requirementsTitle: 'Laravel 项目在本地需要什么', requirementsDescription: '一个实际的 Laravel 应用由多个组件组成，FlyEnv 为你提供并管理这些组件。', requirementHeaders: ['要求', '本地服务', 'FlyEnv 支持'], diagram: { domain: 'https://<br />shop.test', localDomain: '本地域名', withHttps: '支持 HTTPS', webServer: 'Web 服务器', port: '端口 80/443', application: 'Laravel<br />应用', php: 'PHP 8.3<br />(FPM)', database: '数据库', cacheQueues: '缓存与队列', additionalTools: '附加工具（不在请求链中）', frontendAssets: '前端资源', taskScheduling: '任务调度' }, stackTitle: 'FlyEnv 中的真实 Laravel 开发技术栈', stackDescription: '一个运行在 FlyEnv 中的典型 Laravel 项目，架构清晰，所需服务齐全。', workspaceTitle: 'FlyEnv 中的实际界面', workspaceDescription: '在一个工作区中管理 Laravel 项目、服务和运行时。', workspaceCaption: '一个 PHP Laravel Project 组将 Nginx、PHP-FPM、MySQL 和 Redis 放在一起，按固定顺序启动。', benefitsTitle: '为什么使用 FlyEnv 开发 Laravel', benefitsDescription: '为 Laravel 提供更可预测、更顺畅的本地开发体验。', projectPathsTitle: '新项目还是已有项目', projectPathsDescription: '无论是新建 Laravel 应用，还是已有项目，FlyEnv 都能适用。', setupGuide: '查看完整配置指南', comparisonTitle: 'Laravel 本地开发方式对比', comparisonDescription: '不同工具代表不同方式，下面对比它们用于 Laravel 本地开发时的差异。', comparisonHeaders: ['特性', '手动本地配置', '容器工作流', 'FlyEnv'], faqTitle: 'Laravel 常见问题', faqDescription: '关于使用 FlyEnv 开发 Laravel 的常见问题。', relatedTitle: '相关解决方案', ctaTitle: '准备好在本地构建 Laravel 了吗？', ctaDescription: '在一个工作区中运行 PHP、数据库、Redis、本地域名和 HTTPS。', haveQuestions: '使用 FlyEnv 时有问题？'
  },
  id: {
    breadcrumbSolutions: 'Solusi', eyebrow: 'Solusi framework', heroTitle: 'Lingkungan pengembangan Laravel lokal dengan FlyEnv', heroDescription: 'Bangun dan jalankan Laravel dengan PHP, database, Redis, domain lokal, dan HTTPS dalam satu workspace native.', download: 'Unduh FlyEnv', guide: 'Baca panduan Laravel', heroStackTitle: 'Yang dibutuhkan proyek Laravel', heroStackDescription: 'Komponen penting untuk proyek Laravel modern.', requirementsTitle: 'Yang dibutuhkan proyek Laravel secara lokal', requirementsDescription: 'Aplikasi Laravel nyata terdiri dari beberapa komponen. FlyEnv menyediakan dan mengelolanya untuk Anda.', requirementHeaders: ['Kebutuhan', 'Layanan lokal', 'Dukungan FlyEnv'], diagram: { domain: 'https://<br />shop.test', localDomain: 'Domain lokal', withHttps: 'dengan HTTPS', webServer: 'Web server', port: 'port 80/443', application: 'Aplikasi<br />Laravel', php: 'PHP 8.3<br />(FPM)', database: 'Database', cacheQueues: 'Cache &amp; antrean', additionalTools: 'Tool tambahan (bukan bagian dari rantai request)', frontendAssets: 'Aset frontend', taskScheduling: 'Penjadwalan tugas' }, stackTitle: 'Stack pengembangan Laravel nyata di FlyEnv', stackDescription: 'Proyek Laravel umum yang berjalan di FlyEnv, dengan arsitektur jelas dan semua layanan yang diperlukan.', workspaceTitle: 'Seperti apa di FlyEnv', workspaceDescription: 'Proyek Laravel dengan layanan dan runtime yang dikelola dalam satu workspace.', workspaceCaption: 'Grup PHP Laravel Project menjaga Nginx, PHP-FPM, MySQL, dan Redis bersama untuk startup yang konsisten.', benefitsTitle: 'Mengapa menggunakan FlyEnv untuk pengembangan Laravel', benefitsDescription: 'Pengalaman pengembangan lokal Laravel yang lebih mudah diprediksi dan nyaman.', projectPathsTitle: 'Proyek baru atau proyek yang sudah ada', projectPathsDescription: 'FlyEnv bekerja untuk aplikasi Laravel baru maupun proyek yang sudah Anda miliki.', setupGuide: 'Lihat panduan setup lengkap', comparisonTitle: 'Bandingkan pendekatan Laravel lokal', comparisonDescription: 'Tool berbeda berarti pendekatan berbeda. Berikut perbandingannya untuk pengembangan Laravel lokal.', comparisonHeaders: ['Fitur', 'Setup lokal manual', 'Workflow container', 'FlyEnv'], faqTitle: 'FAQ Laravel', faqDescription: 'Pertanyaan umum tentang menggunakan FlyEnv untuk pengembangan Laravel.', relatedTitle: 'Solusi terkait', ctaTitle: 'Siap membangun Laravel secara lokal?', ctaDescription: 'Jalankan PHP, database, Redis, domain lokal, dan HTTPS dalam satu workspace.', haveQuestions: 'Ada pertanyaan tentang FlyEnv?'
  },
  es: {
    breadcrumbSolutions: 'Soluciones', eyebrow: 'Solución para frameworks', heroTitle: 'Entorno de desarrollo local de Laravel con FlyEnv', heroDescription: 'Construye y ejecuta Laravel con PHP, bases de datos, Redis, dominios locales y HTTPS en un único workspace nativo.', download: 'Descargar FlyEnv', guide: 'Leer la guía de Laravel', heroStackTitle: 'Qué necesita un proyecto Laravel', heroStackDescription: 'Los componentes esenciales para un proyecto Laravel moderno.', requirementsTitle: 'Qué necesita Laravel en local', requirementsDescription: 'Una aplicación Laravel real se compone de varios elementos. FlyEnv los proporciona y gestiona por ti.', requirementHeaders: ['Necesidad', 'Servicio local', 'Compatibilidad de FlyEnv'], diagram: { domain: 'https://<br />shop.test', localDomain: 'Dominio local', withHttps: 'con HTTPS', webServer: 'Servidor web', port: 'puertos 80/443', application: 'Aplicación<br />Laravel', php: 'PHP 8.3<br />(FPM)', database: 'Base de datos', cacheQueues: 'Caché y colas', additionalTools: 'Herramientas adicionales (fuera de la cadena de peticiones)', frontendAssets: 'Recursos frontend', taskScheduling: 'Programación de tareas' }, stackTitle: 'Un stack real de desarrollo Laravel en FlyEnv', stackDescription: 'Un proyecto Laravel típico ejecutándose en FlyEnv, con una arquitectura clara y todos los servicios necesarios.', workspaceTitle: 'Así se ve en FlyEnv', workspaceDescription: 'Un proyecto Laravel con sus servicios y runtime gestionados en un solo workspace.', workspaceCaption: 'Un grupo PHP Laravel Project mantiene Nginx, PHP-FPM, MySQL y Redis juntos para un arranque repetible.', benefitsTitle: 'Por qué usar FlyEnv para desarrollar con Laravel', benefitsDescription: 'Una experiencia local de desarrollo Laravel más predecible y cómoda.', projectPathsTitle: 'Proyecto nuevo o proyecto existente', projectPathsDescription: 'FlyEnv funciona tanto para nuevas aplicaciones Laravel como para proyectos que ya tienes.', setupGuide: 'Ver la guía completa de configuración', comparisonTitle: 'Comparar enfoques locales para Laravel', comparisonDescription: 'Herramientas diferentes implican enfoques diferentes. Así se comparan para el desarrollo local de Laravel.', comparisonHeaders: ['Característica', 'Configuración local manual', 'Flujo con contenedores', 'FlyEnv'], faqTitle: 'Preguntas frecuentes de Laravel', faqDescription: 'Preguntas habituales sobre el uso de FlyEnv para desarrollar con Laravel.', relatedTitle: 'Soluciones relacionadas', ctaTitle: '¿Listo para desarrollar Laravel en local?', ctaDescription: 'Ejecuta PHP, bases de datos, Redis, dominios locales y HTTPS en un solo workspace.', haveQuestions: '¿Tienes preguntas sobre FlyEnv?'
  }
} as const

const localizedSections: Record<Exclude<LaravelSolutionLocale, 'en'>, Partial<CopyData>> = {
  zh: {
    requirements: [
      { icon: 'runtime', title: '应用运行时', serviceParts: [{ label: 'PHP-FPM（例如 PHP 8.3）', feature: 'php' }], support: '每个项目可使用不同 PHP 版本' },
      { icon: 'dependencies', title: '依赖', serviceParts: [{ label: 'Composer' }], support: '内置 Composer，开箱即用' },
      { icon: 'database', title: '数据库', serviceParts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' 或 ' }, { label: 'PostgreSQL', feature: 'postgresql' }], support: '两者都支持，可按项目切换' },
      { icon: 'cache', title: '缓存与队列', serviceParts: [{ label: 'Redis', feature: 'redis' }], support: '需要时再启动' },
      { icon: 'web', title: 'Web 服务器', serviceParts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }, { label: ' / ' }, { label: 'Caddy', feature: 'caddy' }], support: '灵活支持多种 Web 服务器' },
      { icon: 'frontend', title: '前端资源', serviceParts: [{ label: 'Node.js + Vite', feature: 'nodejs' }], support: '现代前端工具链' },
      { icon: 'clock', title: '定时任务', serviceParts: [{ label: 'Cron', feature: 'cron' }], support: '管理 Laravel 调度器' },
      { icon: 'lock', title: '本地 HTTPS', serviceParts: [{ label: '受信任的本地证书', feature: 'https' }], support: '使用带 HTTPS 的真实本地域名' }
    ],
    stackOutcomes: [
      { icon: 'code', title: '项目级 PHP 版本', description: '为每个 Laravel 项目使用它所需的 PHP 版本。' },
      { icon: 'globe', title: '本地域名 + HTTPS', description: '通过受信任的证书访问你的项目。' },
      { icon: 'play', title: '一键启动组', description: '一次启动所有必需服务，立即开始工作。' },
      { icon: 'list', title: '队列 Worker / 调度器', description: '轻松运行队列 Worker 和 Laravel 调度器。' }
    ],
    proofPoints: [
      { icon: 'check', title: '项目级运行时', description: '选择此 Laravel 项目所需的 PHP-FPM 版本。' },
      { icon: 'list', title: 'Laravel 项目组', description: '将 Nginx、PHP-FPM、MySQL 和 Redis 按固定启动顺序集中管理。' },
      { icon: 'database', title: '统一管理的服务栈', description: '在一个 FlyEnv 界面中查看 Laravel 所需的核心服务。' },
      { icon: 'play', title: '可重复启动', description: '每次返回项目时，都可以直接启动它的 Startup Group。' }
    ],
    benefits: [
      { icon: 'code', title: '每个项目使用不同的 PHP 版本', description: '让 Laravel 项目使用各自需要的版本，无需修改全局运行时。', emphasis: true, evidence: 'Laravel 8 → PHP 7.4 · Laravel 11 → PHP 8.2 · Laravel 12 → PHP 8.3+' },
      { icon: 'play', title: '一键运行完整技术栈', description: '通过一个 Startup Group 启动 PHP、数据库、Redis、Web 服务器等服务。', emphasis: true, evidence: 'PHP + Nginx + MySQL + Redis → Startup Group' },
      { icon: 'database', title: '选择 MySQL 或 PostgreSQL', description: '根据项目选择合适的数据库，而不是让项目迁就工具。' },
      { icon: 'cache', title: '需要时再添加 Redis', description: '按需启用缓存、Session 或队列，不必让每个项目都携带闲置服务。' },
      { icon: 'lock', title: '使用真实的本地域名和 HTTPS', description: '在本地测试 Cookie、OAuth 回调、Webhook 和安全浏览器功能。', emphasis: true, evidence: 'https://shop.test' },
      { icon: 'clock', title: '运行调度器和队列 Worker', description: '开发时让后台任务始终贴近 Laravel 应用运行。' }
    ],
    projectPaths: [
      { icon: 'plus', title: '开始一个新的 Laravel 项目', steps: ['打开 PHP → 新建项目。', '选择 Laravel 模板、框架版本、PHP 版本和 Composer 版本。', 'FlyEnv 执行 Composer 创建命令，并显示终端输出。', '一键创建匹配的本地站点。', '通过本地域名和 HTTPS 打开新项目。'] },
      { icon: 'web', title: '运行已有的 Laravel 项目', steps: ['导入或打开已有的 Laravel 项目。', '设置项目所需的 PHP 版本。', '按需配置数据库、Redis 和其他服务。', '添加本地站点并选择 public 目录。', '启动项目的 Startup Group 并打开站点。'] }
    ],
    comparisonRows: [
      { feature: '环境模式', host: '单一 PHP 进程', container: 'Docker 容器', flyenv: '完整本地环境' },
      { feature: '数据库环境', host: '本地或外部数据库', container: '容器', flyenv: 'MySQL 或 PostgreSQL 模块' },
      { feature: 'Redis 支持', host: '手动配置', container: '容器服务', flyenv: '内置，按需启用' },
      { feature: '本地域名', host: '手动配置', container: '取决于项目', flyenv: '统一管理的本地站点' },
      { feature: '多技术栈开发', host: '手动切换', container: 'Docker Compose', flyenv: '项目级运行时和服务' }
    ],
    faqs: [
      { question: '不同的 Laravel 项目可以使用不同的 PHP 版本吗？', answer: '可以。FlyEnv 管理多个 PHP 版本，并允许每个项目或本地站点使用自己需要的版本。' },
      { question: 'Laravel 可以使用 MySQL 或 PostgreSQL 吗？', answer: '可以。选择与项目匹配的数据库模块，并与 Laravel 应用一起启动。' },
      { question: 'FlyEnv 支持 Redis 队列吗？', answer: '支持。当应用使用缓存、Session、Horizon 或队列 Worker 时启动 Redis，并将它加入项目的 Startup Group。' },
      { question: '可以使用带 HTTPS 的 .test 域名吗？', answer: '可以。创建一个易读的本地站点域名，并使用 FlyEnv 的受信任本地 HTTPS 支持。' },
      { question: '可以管理多个 Laravel 项目吗？', answer: '可以。每个项目都可以保留自己的 PHP 版本、本地站点、数据库选择、Redis 使用方式和配套服务。' },
      { question: 'FlyEnv 会替代 Laravel 官方安装指南吗？', answer: '不会。本解决方案页面介绍环境和工作流，Laravel 指南则提供详细的安装步骤与配置说明。' }
    ],
    relatedSolutions: [
      { name: 'Symfony', description: '现代 PHP 框架', slug: 'symfony', logo: relatedLogos.symfony },
      { name: 'WordPress', description: 'CMS 与网站', slug: 'wordpress', logo: relatedLogos.wordpress },
      { name: 'Magento', description: '电子商务', slug: 'magento', logo: relatedLogos.magento }
    ]
  },
  id: {
    requirements: [
      { icon: 'runtime', title: 'Runtime aplikasi', serviceParts: [{ label: 'PHP-FPM (mis. PHP 8.3)', feature: 'php' }], support: 'Beberapa versi PHP untuk tiap proyek' },
      { icon: 'dependencies', title: 'Dependensi', serviceParts: [{ label: 'Composer' }], support: 'Composer bawaan, mudah digunakan' },
      { icon: 'database', title: 'Database', serviceParts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' atau ' }, { label: 'PostgreSQL', feature: 'postgresql' }], support: 'Keduanya didukung, dapat diganti per proyek' },
      { icon: 'cache', title: 'Cache & antrean', serviceParts: [{ label: 'Redis', feature: 'redis' }], support: 'Jalankan saat diperlukan' },
      { icon: 'web', title: 'Web server', serviceParts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }, { label: ' / ' }, { label: 'Caddy', feature: 'caddy' }], support: 'Dukungan web server yang fleksibel' },
      { icon: 'frontend', title: 'Aset frontend', serviceParts: [{ label: 'Node.js + Vite', feature: 'nodejs' }], support: 'Toolchain frontend modern' },
      { icon: 'clock', title: 'Tugas terjadwal', serviceParts: [{ label: 'Cron', feature: 'cron' }], support: 'Kelola scheduler Laravel' },
      { icon: 'lock', title: 'HTTPS lokal', serviceParts: [{ label: 'Sertifikat lokal tepercaya', feature: 'https' }], support: 'Domain lokal nyata dengan HTTPS' }
    ],
    stackOutcomes: [
      { icon: 'code', title: 'Versi PHP per proyek', description: 'Gunakan versi PHP yang dibutuhkan oleh setiap proyek Laravel.' },
      { icon: 'globe', title: 'Domain lokal + HTTPS', description: 'Akses proyek dengan sertifikat yang tepercaya.' },
      { icon: 'play', title: 'Grup startup satu klik', description: 'Jalankan semua layanan yang diperlukan bersama-sama dan langsung mulai bekerja.' },
      { icon: 'list', title: 'Worker antrean / scheduler', description: 'Jalankan worker dan scheduler Laravel dengan mudah.' }
    ],
    proofPoints: [
      { icon: 'check', title: 'Runtime per proyek', description: 'Pilih versi PHP-FPM yang dibutuhkan proyek Laravel ini.' },
      { icon: 'list', title: 'Grup proyek Laravel', description: 'Jaga Nginx, PHP-FPM, MySQL, dan Redis dalam urutan startup yang terkontrol.' },
      { icon: 'database', title: 'Stack layanan terkelola', description: 'Lihat layanan inti Laravel bersama-sama dalam satu tampilan FlyEnv.' },
      { icon: 'play', title: 'Startup yang konsisten', description: 'Jalankan Startup Group proyek setiap kali kembali mengerjakannya.' }
    ],
    benefits: [
      { icon: 'code', title: 'Gunakan versi PHP berbeda untuk tiap proyek', description: 'Pertahankan setiap proyek Laravel pada versi yang dibutuhkannya tanpa mengubah runtime global.', emphasis: true, evidence: 'Laravel 8 → PHP 7.4 · Laravel 11 → PHP 8.2 · Laravel 12 → PHP 8.3+' },
      { icon: 'play', title: 'Jalankan seluruh stack dengan satu klik', description: 'Mulai PHP, database, Redis, web server, dan lainnya dari satu Startup Group.', emphasis: true, evidence: 'PHP + Nginx + MySQL + Redis → Startup Group' },
      { icon: 'database', title: 'Pilih MySQL atau PostgreSQL', description: 'Gunakan database yang sesuai dengan proyek tanpa menyesuaikan proyek pada tool.' },
      { icon: 'cache', title: 'Tambahkan Redis hanya saat diperlukan', description: 'Aktifkan cache, session, atau antrean tanpa membawa layanan yang tidak digunakan.' },
      { icon: 'lock', title: 'Gunakan domain lokal nyata dan HTTPS', description: 'Uji cookie, callback OAuth, webhook, dan fitur browser yang aman secara lokal.', emphasis: true, evidence: 'https://shop.test' },
      { icon: 'clock', title: 'Jalankan scheduler dan worker antrean', description: 'Jaga pekerjaan di latar belakang tetap dekat dengan aplikasi Laravel selama pengembangan.' }
    ],
    projectPaths: [
      { icon: 'plus', title: 'Mulai proyek Laravel baru', steps: ['Buka PHP → New Project.', 'Pilih template Laravel, versi framework, versi PHP, dan versi Composer.', 'FlyEnv menjalankan perintah pembuatan Composer dan menampilkan output terminal.', 'Buat local site yang sesuai dengan satu klik.', 'Buka proyek baru dengan domain lokal dan HTTPS.'] },
      { icon: 'web', title: 'Jalankan proyek Laravel yang sudah ada', steps: ['Impor atau buka proyek Laravel yang sudah ada.', 'Atur versi PHP yang diperlukan.', 'Konfigurasikan database, Redis, dan layanan lain bila diperlukan.', 'Tambahkan local site dan pilih direktori public.', 'Jalankan Startup Group proyek dan buka sitenya.'] }
    ],
    comparisonRows: [
      { feature: 'Model lingkungan', host: 'Satu proses PHP', container: 'Container Docker', flyenv: 'Lingkungan lokal lengkap' },
      { feature: 'Lingkungan database', host: 'Lokal atau eksternal', container: 'Container', flyenv: 'Modul MySQL atau PostgreSQL' },
      { feature: 'Dukungan Redis', host: 'Setup manual', container: 'Layanan container', flyenv: 'Bawaan, sesuai kebutuhan' },
      { feature: 'Domain lokal', host: 'Setup manual', container: 'Bergantung pada proyek', flyenv: 'Local site terkelola' },
      { feature: 'Pengembangan multi-stack', host: 'Ganti secara manual', container: 'Docker Compose', flyenv: 'Runtime dan layanan per proyek' }
    ],
    faqs: [
      { question: 'Bisakah proyek Laravel yang berbeda menggunakan versi PHP yang berbeda?', answer: 'Bisa. FlyEnv mengelola beberapa versi PHP dan memungkinkan tiap proyek atau local site menggunakan versi yang dibutuhkannya.' },
      { question: 'Bisakah Laravel menggunakan MySQL atau PostgreSQL?', answer: 'Bisa. Pilih modul database yang sesuai dengan proyek dan jalankan bersama aplikasi Laravel.' },
      { question: 'Apakah FlyEnv mendukung antrean Redis?', answer: 'Ya. Jalankan Redis saat aplikasi menggunakan cache, session, Horizon, atau worker antrean, lalu masukkan ke Startup Group proyek.' },
      { question: 'Bisakah menggunakan domain .test dengan HTTPS?', answer: 'Bisa. Buat local site dengan domain yang mudah dibaca dan gunakan dukungan HTTPS lokal tepercaya dari FlyEnv.' },
      { question: 'Bisakah mengelola beberapa proyek Laravel?', answer: 'Bisa. Setiap proyek dapat memiliki versi PHP, local site, database, penggunaan Redis, dan layanan pendukungnya sendiri.' },
      { question: 'Apakah FlyEnv menggantikan panduan instalasi Laravel?', answer: 'Tidak. Halaman Solusi menjelaskan lingkungan dan workflow, sedangkan Panduan Laravel membahas langkah setup dan konfigurasi secara rinci.' }
    ],
    relatedSolutions: [
      { name: 'Symfony', description: 'Framework PHP modern', slug: 'symfony', logo: relatedLogos.symfony },
      { name: 'WordPress', description: 'CMS & website', slug: 'wordpress', logo: relatedLogos.wordpress },
      { name: 'Magento', description: 'E-commerce', slug: 'magento', logo: relatedLogos.magento }
    ]
  },
  es: {
    requirements: [
      { icon: 'runtime', title: 'Runtime de la aplicación', serviceParts: [{ label: 'PHP-FPM (p. ej., PHP 8.3)', feature: 'php' }], support: 'Varias versiones de PHP por proyecto' },
      { icon: 'dependencies', title: 'Dependencias', serviceParts: [{ label: 'Composer' }], support: 'Composer integrado y fácil de usar' },
      { icon: 'database', title: 'Base de datos', serviceParts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' o ' }, { label: 'PostgreSQL', feature: 'postgresql' }], support: 'Ambas disponibles, con cambio por proyecto' },
      { icon: 'cache', title: 'Caché y colas', serviceParts: [{ label: 'Redis', feature: 'redis' }], support: 'Inícialo solo cuando lo necesites' },
      { icon: 'web', title: 'Servidor web', serviceParts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }, { label: ' / ' }, { label: 'Caddy', feature: 'caddy' }], support: 'Compatibilidad flexible con servidores web' },
      { icon: 'frontend', title: 'Recursos frontend', serviceParts: [{ label: 'Node.js + Vite', feature: 'nodejs' }], support: 'Toolchain frontend moderno' },
      { icon: 'clock', title: 'Tareas programadas', serviceParts: [{ label: 'Cron', feature: 'cron' }], support: 'Gestiona el scheduler de Laravel' },
      { icon: 'lock', title: 'HTTPS local', serviceParts: [{ label: 'Certificado local de confianza', feature: 'https' }], support: 'Dominio local real con HTTPS' }
    ],
    stackOutcomes: [
      { icon: 'code', title: 'Versión de PHP por proyecto', description: 'Usa la versión de PHP que necesita cada proyecto Laravel.' },
      { icon: 'globe', title: 'Dominio local + HTTPS', description: 'Accede a tu proyecto con un certificado de confianza.' },
      { icon: 'play', title: 'Grupo de inicio con un clic', description: 'Inicia todos los servicios necesarios juntos y ponte a trabajar.' },
      { icon: 'list', title: 'Workers de colas / scheduler', description: 'Ejecuta los workers y el scheduler de Laravel fácilmente.' }
    ],
    proofPoints: [
      { icon: 'check', title: 'Runtime por proyecto', description: 'Elige la versión de PHP-FPM que necesita este proyecto Laravel.' },
      { icon: 'list', title: 'Grupo de proyecto Laravel', description: 'Mantén Nginx, PHP-FPM, MySQL y Redis en un orden de inicio controlado.' },
      { icon: 'database', title: 'Stack de servicios gestionado', description: 'Consulta los servicios principales de Laravel juntos en una vista de FlyEnv.' },
      { icon: 'play', title: 'Inicio repetible', description: 'Inicia el Startup Group del proyecto cada vez que vuelvas a la aplicación.' }
    ],
    benefits: [
      { icon: 'code', title: 'Usa distintas versiones de PHP por proyecto', description: 'Mantén cada proyecto Laravel en la versión que necesita sin cambiar el runtime global.', emphasis: true, evidence: 'Laravel 8 → PHP 7.4 · Laravel 11 → PHP 8.2 · Laravel 12 → PHP 8.3+' },
      { icon: 'play', title: 'Ejecuta todo el stack con un clic', description: 'Inicia PHP, la base de datos, Redis, el servidor web y más desde un único Startup Group.', emphasis: true, evidence: 'PHP + Nginx + MySQL + Redis → Startup Group' },
      { icon: 'database', title: 'Elige MySQL o PostgreSQL', description: 'Usa la base de datos que corresponde al proyecto, sin adaptar el proyecto a la herramienta.' },
      { icon: 'cache', title: 'Añade Redis solo cuando haga falta', description: 'Activa caché, sesiones o colas sin mantener servicios que no utilizas.' },
      { icon: 'lock', title: 'Usa un dominio local real y HTTPS', description: 'Prueba cookies, callbacks de OAuth, webhooks y funciones seguras del navegador en local.', emphasis: true, evidence: 'https://shop.test' },
      { icon: 'clock', title: 'Ejecuta el scheduler y los workers de colas', description: 'Mantén el trabajo en segundo plano cerca de la aplicación Laravel durante el desarrollo.' }
    ],
    projectPaths: [
      { icon: 'plus', title: 'Inicia un proyecto Laravel nuevo', steps: ['Abre PHP → Nuevo proyecto.', 'Elige la plantilla Laravel, la versión del framework, la versión de PHP y la versión de Composer.', 'FlyEnv ejecuta el comando de creación de Composer y muestra la salida del terminal.', 'Crea el sitio local correspondiente con un clic.', 'Abre el proyecto nuevo con un dominio local y HTTPS.'] },
      { icon: 'web', title: 'Ejecuta un proyecto Laravel existente', steps: ['Importa o abre el proyecto Laravel existente.', 'Establece la versión de PHP necesaria.', 'Configura la base de datos, Redis y otros servicios si hace falta.', 'Añade el sitio local y elige el directorio público.', 'Inicia el Startup Group del proyecto y abre el sitio.'] }
    ],
    comparisonRows: [
      { feature: 'Modelo de entorno', host: 'Un único proceso PHP', container: 'Contenedores Docker', flyenv: 'Entorno local completo' },
      { feature: 'Entorno de base de datos', host: 'Local o externo', container: 'Contenedores', flyenv: 'Módulos MySQL o PostgreSQL' },
      { feature: 'Compatibilidad con Redis', host: 'Configuración manual', container: 'Servicio en contenedor', flyenv: 'Integrado y bajo demanda' },
      { feature: 'Dominios locales', host: 'Configuración manual', container: 'Depende del proyecto', flyenv: 'Sitios locales gestionados' },
      { feature: 'Desarrollo con varios stacks', host: 'Cambio manual', container: 'Docker Compose', flyenv: 'Runtimes y servicios por proyecto' }
    ],
    faqs: [
      { question: '¿Puedo usar distintas versiones de PHP para diferentes proyectos Laravel?', answer: 'Sí. FlyEnv gestiona varias versiones de PHP y permite que cada proyecto o sitio local use la versión que necesita.' },
      { question: '¿Puedo usar MySQL o PostgreSQL con Laravel?', answer: 'Sí. Elige el módulo de base de datos que corresponda al proyecto e inícialo junto con la aplicación Laravel.' },
      { question: '¿FlyEnv es compatible con las colas de Redis?', answer: 'Sí. Inicia Redis cuando la aplicación use caché, sesiones, Horizon o workers de colas, y añádelo al Startup Group del proyecto.' },
      { question: '¿Puedo usar un dominio .test con HTTPS?', answer: 'Sí. Crea un sitio local con un dominio fácil de leer y utiliza el soporte HTTPS local de confianza de FlyEnv.' },
      { question: '¿Puedo gestionar varios proyectos Laravel?', answer: 'Sí. Cada proyecto puede conservar su versión de PHP, sitio local, base de datos, uso de Redis y servicios de apoyo.' },
      { question: '¿FlyEnv sustituye la guía de instalación de Laravel?', answer: 'No. Esta página explica el entorno y el flujo de trabajo; la guía de Laravel cubre los pasos detallados de configuración e instalación.' }
    ],
    relatedSolutions: [
      { name: 'Symfony', description: 'Framework PHP moderno', slug: 'symfony', logo: relatedLogos.symfony },
      { name: 'WordPress', description: 'CMS y sitios web', slug: 'wordpress', logo: relatedLogos.wordpress },
      { name: 'Magento', description: 'Comercio electrónico', slug: 'magento', logo: relatedLogos.magento }
    ]
  }
}

export const translateData = (locale: LaravelSolutionLocale): CopyData & { primaryStack: any[]; supportingServices: any[] } => {
  const base = english
  const language = locale === 'en' ? base : { ...base, ...simplified[locale], ...localizedSections[locale] }
  const translateParts = (parts: TextPart[]) => parts.map((part) => ({ ...part, href: part.feature ? featurePath(locale, part.feature) : undefined }))
  const translatedStack = (language.heroStack || base.heroStack).map((item: any) => ({
    ...item,
    href: item.feature ? featurePath(locale, item.feature) : undefined,
    links: item.links?.map((part: TextPart) => ({ ...part, href: part.feature ? featurePath(locale, part.feature) : undefined }))
  }))
  return {
    ...language,
    heroStack: translatedStack,
    requirements: language.requirements.map((item: any) => ({ ...item, serviceParts: translateParts(item.serviceParts) })),
    primaryStack: [
      { icon: 'globe', title: 'shop.test', logo: '', href: featurePath(locale, 'https') },
      { icon: 'web', title: 'Nginx', logo: '/assets/demo-logos/nginx.svg', href: featurePath(locale, 'nginx') },
      { icon: 'code', title: 'Laravel', logo: '/assets/demo-logos/laravel.svg' }
    ],
    supportingServices: [
      { icon: 'database', title: 'MySQL 8.4', description: language.diagram.database, logo: '/assets/demo-logos/mysql.svg', href: featurePath(locale, 'mysql') },
      { icon: 'cache', title: 'Redis 7', description: language.diagram.cacheQueues, logo: '/assets/demo-logos/redis.svg', href: featurePath(locale, 'redis') },
      { icon: 'frontend', title: 'Node.js / Vite', description: language.diagram.frontendAssets, logo: '/assets/demo-logos/nodedotjs.svg', href: featurePath(locale, 'nodejs') },
      { icon: 'clock', title: 'Cron / Scheduler', description: language.diagram.taskScheduling, logo: '', href: featurePath(locale, 'cron') }
    ],
    relatedSolutions: language.relatedSolutions.map((item: any) => ({ ...item, href: localizedPath(locale, `/solutions/${item.slug}`) }))
  } as CopyData & { primaryStack: any[]; supportingServices: any[] }
}

const featurePath = (locale: LaravelSolutionLocale, key: FeatureKey) => localizedPath(locale, featurePaths[key])
const localizedPath = (locale: LaravelSolutionLocale, path: string) => (locale === 'en' ? path : `/${locale}${path}`)
