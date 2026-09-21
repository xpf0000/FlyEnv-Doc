export type WordPressSolutionLocale = 'en' | 'zh' | 'id' | 'es'

type FeatureKey =
  | 'php'
  | 'mysql'
  | 'mariadb'
  | 'nginx'
  | 'apache'
  | 'https'
  | 'redis'
  | 'nodejs'

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
  heroStack: Array<{ label: string; feature: FeatureKey }>
  requirementsTitle: string
  requirementsDescription: string
  requirementHeaders: [string, string, string]
  requirements: Array<{
    icon: string
    title: string
    parts: TextPart[]
    support: string
  }>
  sitesTitle: string
  sitesDescription: string
  sitesCaption: string
  siteProof: Array<{ icon: string; title: string; description: string }>
  lifecycleTitle: string
  lifecycleDescription: string
  lifecycleSteps: Array<{
    icon: string
    title: string
    description: string
    feature?: FeatureKey
    path?: string
  }>
  lifecycleOptionalTitle: string
  lifecycleOptional: Array<{
    icon: string
    title: string
    description: string
    logo: string
    feature: FeatureKey
  }>
  benefitsTitle: string
  benefitsDescription: string
  benefits: Array<{
    icon: string
    title: string
    description: string
    evidence?: string
    emphasis?: boolean
  }>
  workflowTitle: string
  workflowDescription: string
  workflows: Array<{ icon: string; title: string; steps: string[] }>
  setupGuide: string
  comparisonTitle: string
  comparisonDescription: string
  comparisonHeaders: [string, string, string, string]
  comparisonRows: Array<{ feature: string; manual: string; container: string; flyenv: string }>
  faqTitle: string
  faqDescription: string
  faqs: Array<{ question: string; answer: string }>
  relatedTitle: string
  relatedSolutions: Array<{ name: string; description: string; slug: string; logo: string }>
  ctaTitle: string
  ctaDescription: string
  haveQuestions: string
}

const featurePaths: Record<FeatureKey, string> = {
  php: '/features/php',
  mysql: '/features/mysql',
  mariadb: '/features/mariadb',
  nginx: '/features/nginx',
  apache: '/features/apache',
  https: '/features/local-sites-https',
  redis: '/features/redis',
  nodejs: '/features/nodejs'
}

const relatedLogos = {
  laravel: 'https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg',
  magento: '/assets/demo-logos/magento.svg',
  drupal: '/assets/demo-logos/drupal.svg'
}

const english: CopyData = {
  breadcrumbSolutions: 'Solutions',
  eyebrow: 'CMS solution',
  heroTitle: 'WordPress local development environment with FlyEnv',
  heroDescription: 'Build, import, and manage WordPress sites with the PHP version, extensions, database, web server, local domain, and HTTPS each site needs.',
  download: 'Download FlyEnv',
  guide: 'Read Host guide',
  heroStackTitle: 'Core services at a glance',
  heroStackDescription: 'The essentials for running and testing a local WordPress site.',
  heroStack: [
    { label: 'PHP + extensions', feature: 'php' },
    { label: 'MySQL / MariaDB', feature: 'mysql' },
    { label: 'Nginx / Apache', feature: 'nginx' },
    { label: 'Local domains + HTTPS', feature: 'https' }
  ],
  requirementsTitle: 'What FlyEnv manages for each WordPress site',
  requirementsDescription: 'WordPress is site-centric: the files, document root, PHP runtime, database, and local URL need to stay aligned. FlyEnv keeps PHP versions and extensions attached to each project.',
  requirementHeaders: ['Requirement', 'Local service or setting', 'FlyEnv support'],
  requirements: [
    { icon: 'folder', title: 'Site files', parts: [{ label: 'Project root + wp-config.php', feature: 'https' }], support: 'Add or import an existing site' },
    { icon: 'runtime', title: 'PHP runtime', parts: [{ label: 'PHP-FPM', feature: 'php' }], support: 'Choose the version per project' },
    { icon: 'extension', title: 'PHP extensions', parts: [{ label: 'Loaded PHP extensions', feature: 'php' }], support: 'Inspect and install extensions visually' },
    { icon: 'database', title: 'Site database', parts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' or ' }, { label: 'MariaDB', feature: 'mariadb' }], support: 'Manage content and settings locally' },
    { icon: 'web', title: 'Web server', parts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }], support: 'Serve permalinks and local rewrites' },
    { icon: 'globe', title: 'Site URL', parts: [{ label: 'Custom local domain + HTTPS', feature: 'https' }], support: 'Test cookies, redirects, and webhooks' },
    { icon: 'cache', title: 'Optional services', parts: [{ label: 'Redis', feature: 'redis' }, { label: ' / ' }, { label: 'Node.js', feature: 'nodejs' }], support: 'Enable object cache or theme tooling only when needed' }
  ],
  sitesTitle: 'Multiple WordPress sites, one workspace',
  sitesDescription: 'Keep client sites, plugin work, and theme development separate without rebuilding the local stack each time.',
  sitesCaption: 'Each WordPress site keeps its own PHP version, document root, database, and local domain while remaining visible in one FlyEnv workspace.',
  siteProof: [
    { icon: 'runtime', title: 'Per-site PHP version', description: 'Keep plugin and theme compatibility tied to the project runtime.' },
    { icon: 'database', title: 'Separate site database', description: 'Manage MySQL or MariaDB without mixing client data between projects.' },
    { icon: 'folder', title: 'Clear document root', description: 'Reduce accidental exposure by making the served WordPress directory explicit.' },
    { icon: 'globe', title: 'Local domain and HTTPS', description: 'Test redirects, cookies, OAuth callbacks, and secure browser features locally.' }
  ],
  lifecycleTitle: 'A WordPress site workflow in FlyEnv',
  lifecycleDescription: 'Move from project files to a working local site: choose the runtime, connect the database, set the served root, and develop themes or plugins on a real local URL.',
  lifecycleSteps: [
    { icon: 'folder', title: 'Create or import', description: 'Start from a new project or an existing site directory.', path: '/guide/host' },
    { icon: 'runtime', title: 'PHP + extensions', description: 'Match the runtime to the plugins and themes.', feature: 'php' },
    { icon: 'database', title: 'MySQL / MariaDB', description: 'Attach the database that holds site content.', feature: 'mysql' },
    { icon: 'folder', title: 'Set site root', description: 'Keep wp-config.php and wp-content/ in the served directory.', feature: 'https' },
    { icon: 'globe', title: 'Local domain + HTTPS', description: 'Use client-site.test with a trusted certificate.', feature: 'https' },
    { icon: 'code', title: 'Theme / plugin development', description: 'Develop themes and plugins within wp-content/themes and wp-content/plugins.' }
  ],
  lifecycleOptionalTitle: 'Optional supporting services',
  lifecycleOptional: [
    { icon: 'cache', title: 'Redis object cache', description: 'Optional object cache for sites whose caching setup uses Redis.', logo: '', feature: 'redis' },
    { icon: 'frontend', title: 'Node.js tooling', description: 'Add for theme or block tooling that requires a build step.', logo: '/assets/demo-logos/nodedotjs.svg', feature: 'nodejs' }
  ],
  benefitsTitle: 'Why use FlyEnv for WordPress development',
  benefitsDescription: 'A more predictable local workflow for sites that depend on PHP, content files, databases, and browser-facing URLs.',
  benefits: [
    { icon: 'runtime', title: 'Match PHP to the site', description: 'Use a compatible PHP version for legacy plugins, modern block themes, or a client site.', emphasis: true, evidence: 'Legacy site → PHP 7.4 · Modern site → PHP 8.2+' },
    { icon: 'extension', title: 'See extension requirements', description: 'Check the PHP extensions a site needs before a plugin or import fails.', emphasis: true, evidence: 'PHP → Extensions → verify before debugging' },
    { icon: 'database', title: 'Choose MySQL or MariaDB', description: 'Keep the database engine close to the project instead of sharing one opaque stack.', emphasis: true, evidence: 'Use the engine your site expects' },
    { icon: 'folder', title: 'Keep site roots separate', description: 'Give every WordPress site an explicit directory and local URL.' },
    { icon: 'lock', title: 'Use real local HTTPS', description: 'Test login cookies, redirects, payment callbacks, and embedded content on a trusted domain.', evidence: 'https://client-site.test' },
    { icon: 'play', title: 'Start supporting services together', description: 'Use a Startup Group when a site needs PHP, its database, Redis, or frontend tooling at the same time.' }
  ],
  workflowTitle: 'Start a new WordPress site or bring an existing one local',
  workflowDescription: 'Use FlyEnv for a fresh site, an existing client project, or a theme and plugin workspace you already have.',
  workflows: [
    { icon: 'plus', title: 'Create a new WordPress site', steps: ['Open PHP → New Project and choose WordPress.', 'Choose the PHP version and Composer version used by the project.', 'Create the project files and add the matching local site.', 'Select the document root and configure the local domain.', 'Start the site with its database and open it over HTTPS.'] },
    { icon: 'folder', title: 'Import an existing site', steps: ['Open the existing WordPress directory.', 'Set the PHP version and check required extensions.', 'Create or connect the MySQL or MariaDB database.', 'Add the site root, local domain, rewrite behavior, and HTTPS.', 'Group the site services for a repeatable local start.'] }
  ],
  setupGuide: 'Read the Host setup guide',
  comparisonTitle: 'Compare local WordPress approaches',
  comparisonDescription: 'Different setups solve different problems. Here is what changes when WordPress runs in a manual stack, containers, or FlyEnv.',
  comparisonHeaders: ['Feature', 'Manual local stack', 'Container workflow', 'FlyEnv'],
  comparisonRows: [
    { feature: 'PHP version isolation', manual: 'Manual switching', container: 'Defined in container config', flyenv: 'Per-project runtime selection' },
    { feature: 'PHP extensions', manual: 'Edit php.ini by hand', container: 'Rebuild image or config', flyenv: 'Visual extension management' },
    { feature: 'Multiple sites', manual: 'Manual virtual hosts', container: 'One stack per project', flyenv: 'Managed local sites in one workspace' },
    { feature: 'Database lifecycle', manual: 'Separate server setup', container: 'Container service', flyenv: 'MySQL or MariaDB modules' },
    { feature: 'Local HTTPS', manual: 'Manual certificates', container: 'Proxy-specific setup', flyenv: 'Trusted local domains and HTTPS' }
  ],
  faqTitle: 'WordPress FAQ',
  faqDescription: 'Common questions about using FlyEnv for local WordPress sites.',
  faqs: [
    { question: 'Can different WordPress sites use different PHP versions?', answer: 'Yes. FlyEnv lets each project or local site use the PHP version it needs, which is useful when older plugins or themes are not ready for a newer runtime.' },
    { question: 'Can I use MariaDB instead of MySQL?', answer: 'Yes. FlyEnv provides both database modules. Choose the engine that matches the site or the environment you want to reproduce locally.' },
    { question: 'Where should the local site point?', answer: 'Point the site at the directory that contains the WordPress files and wp-config.php. Keep the served root explicit so private project files are not exposed accidentally.' },
    { question: 'Do I need Redis for every WordPress site?', answer: 'No. Redis is optional and is useful when the site or its caching setup uses object caching. Start it only for the projects that need it.' },
    { question: 'Can I develop themes or blocks that use Node.js?', answer: 'Yes. Add Node.js when the selected theme, block, or frontend tooling requires a build step. WordPress itself does not need Node.js to serve requests.' },
    { question: 'Can I manage several client WordPress sites in FlyEnv?', answer: 'Yes. Keep their directories, PHP versions, databases, local domains, and optional services separate while managing them from one workspace.' }
  ],
  relatedTitle: 'Related solutions',
  relatedSolutions: [
    { name: 'Laravel', description: 'PHP framework', slug: 'laravel', logo: relatedLogos.laravel },
    { name: 'Magento', description: 'E-commerce platform', slug: 'magento', logo: relatedLogos.magento },
    { name: 'Drupal', description: 'Content management system', slug: 'drupal', logo: relatedLogos.drupal }
  ],
  ctaTitle: 'Ready to build WordPress locally?',
  ctaDescription: 'Run the site runtime, database, local domain, and HTTPS in one workspace.',
  haveQuestions: 'Have questions using FlyEnv?'
}

const localizedSections: Record<Exclude<WordPressSolutionLocale, 'en'>, Partial<CopyData>> = {
  zh: {
    breadcrumbSolutions: '解决方案',
    eyebrow: 'CMS 解决方案',
    heroTitle: '使用 FlyEnv 构建 WordPress 本地开发环境',
    heroDescription: '为每个 WordPress 站点配置并管理所需的 PHP 版本、扩展、数据库、Web 服务器、本地域名和 HTTPS。',
    download: '下载 FlyEnv',
    guide: '阅读 Host 指南',
    heroStackTitle: '核心服务一览',
    heroStackDescription: '运行和测试本地 WordPress 站点所需的基础组件。',
    heroStack: [
      { label: 'PHP + 扩展', feature: 'php' },
      { label: 'MySQL / MariaDB', feature: 'mysql' },
      { label: 'Nginx / Apache', feature: 'nginx' },
      { label: '本地域名 + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'FlyEnv 为每个 WordPress 站点管理什么',
    requirementsDescription: 'WordPress 以站点为中心：文件、文档根目录、PHP 运行时、数据库和本地 URL 需要保持一致。FlyEnv 将 PHP 版本和扩展绑定到各个项目。',
    requirementHeaders: ['需求', '本地服务或设置', 'FlyEnv 支持'],
    requirements: [
      { icon: 'folder', title: '站点文件', parts: [{ label: '项目根目录 + wp-config.php', feature: 'https' }], support: '添加或导入已有站点' },
      { icon: 'runtime', title: 'PHP 运行时', parts: [{ label: 'PHP-FPM', feature: 'php' }], support: '按项目选择版本' },
      { icon: 'extension', title: 'PHP 扩展', parts: [{ label: '已加载的 PHP 扩展', feature: 'php' }], support: '直观查看并安装扩展' },
      { icon: 'database', title: '站点数据库', parts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' 或 ' }, { label: 'MariaDB', feature: 'mariadb' }], support: '在本地管理内容和设置' },
      { icon: 'web', title: 'Web 服务器', parts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }], support: '处理固定链接和本地重写' },
      { icon: 'globe', title: '站点 URL', parts: [{ label: '自定义本地域名 + HTTPS', feature: 'https' }], support: '测试 Cookie、重定向和 Webhook' },
      { icon: 'cache', title: '可选服务', parts: [{ label: 'Redis', feature: 'redis' }, { label: ' / ' }, { label: 'Node.js', feature: 'nodejs' }], support: '按需启用对象缓存或主题工具链' }
    ],
    sitesTitle: '多个 WordPress 站点，一个工作区',
    sitesDescription: '将客户站点、插件开发和主题开发彼此隔离，无需每次都重新搭建本地技术栈。',
    sitesCaption: '每个 WordPress 站点都保留自己的 PHP 版本、文档根目录、数据库和本地域名，同时集中显示在 FlyEnv 工作区中。',
    siteProof: [
      { icon: 'runtime', title: '每个站点独立 PHP 版本', description: '让插件和主题兼容性始终对应项目自己的运行时。' },
      { icon: 'database', title: '独立站点数据库', description: '管理 MySQL 或 MariaDB，避免不同客户项目的数据混在一起。' },
      { icon: 'folder', title: '明确的文档根目录', description: '明确指定 WordPress 目录，减少意外暴露项目文件的风险。' },
      { icon: 'globe', title: '本地域名和 HTTPS', description: '在本地测试重定向、Cookie、OAuth 回调和安全浏览器功能。' }
    ],
    lifecycleTitle: 'FlyEnv 中的 WordPress 站点工作流',
    lifecycleDescription: '从项目文件开始构建可运行的本地站点：选择运行时、连接数据库、设置服务根目录，并在真实本地 URL 上开发主题或插件。',
    lifecycleSteps: [
      { icon: 'folder', title: '新建或导入', description: '从新项目或已有站点目录开始。', path: '/guide/host' },
      { icon: 'runtime', title: 'PHP + 扩展', description: '让运行时匹配站点的插件和主题。', feature: 'php' },
      { icon: 'database', title: 'MySQL / MariaDB', description: '连接保存站点内容的数据库。', feature: 'mysql' },
      { icon: 'folder', title: '设置站点根目录', description: '确保 wp-config.php 和 wp-content/ 位于服务目录中。', feature: 'https' },
      { icon: 'globe', title: '本地域名 + HTTPS', description: '使用带可信证书的 client-site.test。', feature: 'https' },
      { icon: 'code', title: '主题 / 插件开发', description: '在 wp-content/themes 和 wp-content/plugins 中开发主题和插件。' }
    ],
    lifecycleOptionalTitle: '可选支持服务',
    lifecycleOptional: [
      { icon: 'cache', title: 'Redis 对象缓存', description: '当站点的缓存方案使用 Redis 时再启用对象缓存。', logo: '', feature: 'redis' },
      { icon: 'frontend', title: 'Node.js 工具链', description: '主题、区块或前端工具需要构建步骤时再添加。', logo: '/assets/demo-logos/nodedotjs.svg', feature: 'nodejs' }
    ],
    benefitsTitle: '为什么使用 FlyEnv 开发 WordPress',
    benefitsDescription: '为依赖 PHP、内容文件、数据库和浏览器访问 URL 的站点提供更可预测的本地工作流。',
    benefits: [
      { icon: 'runtime', title: '让 PHP 匹配站点', description: '为旧插件、现代区块主题或客户站点选择兼容的 PHP 版本。', emphasis: true, evidence: '旧站点 → PHP 7.4 · 现代站点 → PHP 8.2+' },
      { icon: 'extension', title: '查看扩展需求', description: '在插件或站点导入失败前，先确认站点需要哪些 PHP 扩展。', emphasis: true, evidence: 'PHP → 扩展 → 调试前先确认' },
      { icon: 'database', title: '选择 MySQL 或 MariaDB', description: '让数据库引擎贴合项目，而不是让项目迁就一个不透明的环境。', emphasis: true, evidence: '使用站点所需的数据库引擎' },
      { icon: 'folder', title: '分离各站点根目录', description: '为每个 WordPress 站点指定清晰的目录和本地 URL。' },
      { icon: 'lock', title: '使用真实的本地 HTTPS', description: '在可信域名上测试登录 Cookie、重定向、支付回调和嵌入内容。', evidence: 'https://client-site.test' },
      { icon: 'play', title: '一起启动支持服务', description: '当站点同时需要 PHP、数据库、Redis 或前端工具链时，使用 Startup Group。' }
    ],
    workflowTitle: '新建 WordPress 站点，或将已有站点带到本地',
    workflowDescription: '无论是新站点、已有客户项目，还是现成的主题和插件工作区，都可以使用 FlyEnv。',
    workflows: [
      { icon: 'plus', title: '新建 WordPress 站点', steps: ['打开 PHP → 新建项目，并选择 WordPress。', '选择项目使用的 PHP 版本和 Composer 版本。', '创建项目文件，并添加对应的本地站点。', '选择文档根目录并配置本地域名。', '启动站点和数据库，并通过 HTTPS 打开站点。'] },
      { icon: 'folder', title: '导入已有站点', steps: ['打开已有的 WordPress 目录。', '设置 PHP 版本并检查所需扩展。', '创建或连接 MySQL 或 MariaDB 数据库。', '添加站点根目录、本地域名、重写规则和 HTTPS。', '将站点服务加入启动组，方便重复启动。'] }
    ],
    setupGuide: '阅读 Host 完整配置指南',
    comparisonTitle: 'WordPress 本地开发方式对比',
    comparisonDescription: '不同的环境解决不同的问题。下面对比 WordPress 使用手动技术栈、容器或 FlyEnv 时的差异。',
    comparisonHeaders: ['特性', '手动本地技术栈', '容器工作流', 'FlyEnv'],
    comparisonRows: [
      { feature: 'PHP 版本隔离', manual: '手动切换', container: '在容器配置中定义', flyenv: '按项目选择运行时' },
      { feature: 'PHP 扩展', manual: '手动编辑 php.ini', container: '重新构建镜像或配置', flyenv: '可视化管理扩展' },
      { feature: '多个站点', manual: '手动配置虚拟主机', container: '每个项目一套技术栈', flyenv: '一个工作区管理多个本地站点' },
      { feature: '数据库生命周期', manual: '单独配置服务器', container: '容器服务', flyenv: 'MySQL 或 MariaDB 模块' },
      { feature: '本地 HTTPS', manual: '手动配置证书', container: '依赖代理的配置', flyenv: '可信本地域名和 HTTPS' }
    ],
    faqTitle: 'WordPress 常见问题',
    faqDescription: '关于使用 FlyEnv 开发本地 WordPress 站点的常见问题。',
    faqs: [
      { question: '不同的 WordPress 站点可以使用不同的 PHP 版本吗？', answer: '可以。FlyEnv 允许每个项目或本地站点使用所需的 PHP 版本，适合仍未兼容新版运行时的旧插件或主题。' },
      { question: '可以使用 MariaDB 代替 MySQL 吗？', answer: '可以。FlyEnv 提供两种数据库模块，选择与你的站点或需要复现的环境匹配的数据库引擎即可。' },
      { question: '本地站点应该指向哪个目录？', answer: '将站点指向包含 WordPress 文件和 wp-config.php 的目录。明确服务根目录，避免意外暴露项目中的私有文件。' },
      { question: '每个 WordPress 站点都需要 Redis 吗？', answer: '不需要。只有当站点或缓存方案使用对象缓存时才需要 Redis，只为真正需要它的项目启动即可。' },
      { question: '可以开发使用 Node.js 的主题或区块吗？', answer: '可以。当主题、区块或前端工具需要构建步骤时添加 Node.js。WordPress 本身不需要 Node.js 来处理请求。' },
      { question: '可以在 FlyEnv 中管理多个客户 WordPress 站点吗？', answer: '可以。每个站点都能保留独立的目录、PHP 版本、数据库、本地域名和可选服务，同时在一个工作区中统一管理。' }
    ],
    relatedTitle: '相关解决方案',
    relatedSolutions: [
      { name: 'Laravel', description: 'PHP 框架', slug: 'laravel', logo: relatedLogos.laravel },
      { name: 'Magento', description: '电子商务平台', slug: 'magento', logo: relatedLogos.magento },
      { name: 'Drupal', description: '内容管理系统', slug: 'drupal', logo: relatedLogos.drupal }
    ],
    ctaTitle: '准备好在本地构建 WordPress 了吗？',
    ctaDescription: '在一个工作区中运行站点运行时、数据库、本地域名和 HTTPS。',
    haveQuestions: '使用 FlyEnv 时有问题？'
  },
  id: {
    breadcrumbSolutions: 'Solusi',
    eyebrow: 'Solusi CMS',
    heroTitle: 'Lingkungan pengembangan WordPress lokal dengan FlyEnv',
    heroDescription: 'Bangun, impor, dan kelola situs WordPress dengan versi PHP, ekstensi, database, web server, domain lokal, dan HTTPS yang dibutuhkan setiap situs.',
    download: 'Unduh FlyEnv',
    guide: 'Baca panduan Host',
    heroStackTitle: 'Layanan inti sekilas',
    heroStackDescription: 'Komponen penting untuk menjalankan dan menguji situs WordPress lokal.',
    heroStack: [
      { label: 'PHP + ekstensi', feature: 'php' },
      { label: 'MySQL / MariaDB', feature: 'mysql' },
      { label: 'Nginx / Apache', feature: 'nginx' },
      { label: 'Domain lokal + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'Yang dikelola FlyEnv untuk setiap situs WordPress',
    requirementsDescription: 'WordPress berpusat pada situs: file, document root, runtime PHP, database, dan URL lokal harus tetap selaras. FlyEnv menjaga versi PHP dan ekstensi melekat pada setiap proyek.',
    requirementHeaders: ['Kebutuhan', 'Layanan atau pengaturan lokal', 'Dukungan FlyEnv'],
    requirements: [
      { icon: 'folder', title: 'File situs', parts: [{ label: 'Root proyek + wp-config.php', feature: 'https' }], support: 'Tambah atau impor situs yang sudah ada' },
      { icon: 'runtime', title: 'Runtime PHP', parts: [{ label: 'PHP-FPM', feature: 'php' }], support: 'Pilih versi untuk setiap proyek' },
      { icon: 'extension', title: 'Ekstensi PHP', parts: [{ label: 'Ekstensi PHP yang dimuat', feature: 'php' }], support: 'Periksa dan pasang ekstensi secara visual' },
      { icon: 'database', title: 'Database situs', parts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' atau ' }, { label: 'MariaDB', feature: 'mariadb' }], support: 'Kelola konten dan pengaturan secara lokal' },
      { icon: 'web', title: 'Web server', parts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }], support: 'Layani permalink dan rewrite lokal' },
      { icon: 'globe', title: 'URL situs', parts: [{ label: 'Domain lokal khusus + HTTPS', feature: 'https' }], support: 'Uji cookie, redirect, dan webhook' },
      { icon: 'cache', title: 'Layanan opsional', parts: [{ label: 'Redis', feature: 'redis' }, { label: ' / ' }, { label: 'Node.js', feature: 'nodejs' }], support: 'Aktifkan object cache atau tooling tema hanya saat diperlukan' }
    ],
    sitesTitle: 'Beberapa situs WordPress, satu workspace',
    sitesDescription: 'Pisahkan situs klien, pekerjaan plugin, dan pengembangan tema tanpa membangun ulang stack lokal setiap kali.',
    sitesCaption: 'Setiap situs WordPress memiliki versi PHP, document root, database, dan domain lokal sendiri, tetapi tetap terlihat dalam satu workspace FlyEnv.',
    siteProof: [
      { icon: 'runtime', title: 'Versi PHP per situs', description: 'Jaga kompatibilitas plugin dan tema tetap terkait dengan runtime proyek.' },
      { icon: 'database', title: 'Database situs terpisah', description: 'Kelola MySQL atau MariaDB tanpa mencampur data klien antarproyek.' },
      { icon: 'folder', title: 'Document root yang jelas', description: 'Kurangi risiko file proyek terekspos dengan menetapkan direktori WordPress yang dilayani.' },
      { icon: 'globe', title: 'Domain lokal dan HTTPS', description: 'Uji redirect, cookie, callback OAuth, dan fitur browser yang aman secara lokal.' }
    ],
    lifecycleTitle: 'Alur kerja situs WordPress di FlyEnv',
    lifecycleDescription: 'Mulai dari file proyek hingga situs lokal yang berjalan: pilih runtime, hubungkan database, tetapkan root yang dilayani, lalu kembangkan tema atau plugin pada URL lokal nyata.',
    lifecycleSteps: [
      { icon: 'folder', title: 'Buat atau impor', description: 'Mulai dari proyek baru atau direktori situs yang sudah ada.', path: '/guide/host' },
      { icon: 'runtime', title: 'PHP + ekstensi', description: 'Sesuaikan runtime dengan plugin dan tema.', feature: 'php' },
      { icon: 'database', title: 'MySQL / MariaDB', description: 'Hubungkan database yang menyimpan konten situs.', feature: 'mysql' },
      { icon: 'folder', title: 'Tetapkan root situs', description: 'Pastikan wp-config.php dan wp-content/ berada di direktori yang dilayani.', feature: 'https' },
      { icon: 'globe', title: 'Domain lokal + HTTPS', description: 'Gunakan client-site.test dengan sertifikat tepercaya.', feature: 'https' },
      { icon: 'code', title: 'Pengembangan tema / plugin', description: 'Kembangkan tema dan plugin di dalam wp-content/themes dan wp-content/plugins.' }
    ],
    lifecycleOptionalTitle: 'Layanan pendukung opsional',
    lifecycleOptional: [
      { icon: 'cache', title: 'Object cache Redis', description: 'Gunakan object cache opsional untuk situs yang konfigurasi cache-nya memakai Redis.', logo: '', feature: 'redis' },
      { icon: 'frontend', title: 'Tooling Node.js', description: 'Tambahkan saat tooling tema atau blok memerlukan proses build.', logo: '/assets/demo-logos/nodedotjs.svg', feature: 'nodejs' }
    ],
    benefitsTitle: 'Mengapa menggunakan FlyEnv untuk pengembangan WordPress',
    benefitsDescription: 'Workflow lokal yang lebih mudah diprediksi untuk situs yang bergantung pada PHP, file konten, database, dan URL yang diakses browser.',
    benefits: [
      { icon: 'runtime', title: 'Sesuaikan PHP dengan situs', description: 'Gunakan versi PHP yang kompatibel untuk plugin lama, tema blok modern, atau situs klien.', emphasis: true, evidence: 'Situs lama → PHP 7.4 · Situs modern → PHP 8.2+' },
      { icon: 'extension', title: 'Lihat kebutuhan ekstensi', description: 'Periksa ekstensi PHP yang dibutuhkan situs sebelum plugin atau impor mengalami kegagalan.', emphasis: true, evidence: 'PHP → Ekstensi → periksa sebelum debugging' },
      { icon: 'database', title: 'Pilih MySQL atau MariaDB', description: 'Dekatkan engine database dengan proyek, alih-alih berbagi satu stack yang tidak transparan.', emphasis: true, evidence: 'Gunakan engine yang diharapkan situs' },
      { icon: 'folder', title: 'Pisahkan root setiap situs', description: 'Berikan setiap situs WordPress direktori dan URL lokal yang jelas.' },
      { icon: 'lock', title: 'Gunakan HTTPS lokal nyata', description: 'Uji cookie login, redirect, callback pembayaran, dan konten tersemat pada domain tepercaya.', evidence: 'https://client-site.test' },
      { icon: 'play', title: 'Jalankan layanan pendukung bersama', description: 'Gunakan Startup Group saat situs membutuhkan PHP, database, Redis, atau tooling frontend secara bersamaan.' }
    ],
    workflowTitle: 'Buat situs WordPress baru atau bawa situs yang sudah ada ke lokal',
    workflowDescription: 'Gunakan FlyEnv untuk situs baru, proyek klien yang sudah ada, atau workspace tema dan plugin yang sudah Anda miliki.',
    workflows: [
      { icon: 'plus', title: 'Buat situs WordPress baru', steps: ['Buka PHP → New Project dan pilih WordPress.', 'Pilih versi PHP dan Composer yang digunakan proyek.', 'Buat file proyek dan tambahkan situs lokal yang sesuai.', 'Pilih document root dan konfigurasikan domain lokal.', 'Jalankan situs bersama databasenya dan buka melalui HTTPS.'] },
      { icon: 'folder', title: 'Impor situs yang sudah ada', steps: ['Buka direktori WordPress yang sudah ada.', 'Atur versi PHP dan periksa ekstensi yang diperlukan.', 'Buat atau hubungkan database MySQL atau MariaDB.', 'Tambahkan root situs, domain lokal, perilaku rewrite, dan HTTPS.', 'Kelompokkan layanan situs agar dapat dijalankan ulang dengan konsisten.'] }
    ],
    setupGuide: 'Baca panduan setup Host',
    comparisonTitle: 'Bandingkan pendekatan WordPress lokal',
    comparisonDescription: 'Setup yang berbeda menyelesaikan masalah yang berbeda. Berikut perubahannya saat WordPress berjalan dengan stack manual, container, atau FlyEnv.',
    comparisonHeaders: ['Fitur', 'Stack lokal manual', 'Workflow container', 'FlyEnv'],
    comparisonRows: [
      { feature: 'Isolasi versi PHP', manual: 'Beralih secara manual', container: 'Ditetapkan dalam konfigurasi container', flyenv: 'Pemilihan runtime per proyek' },
      { feature: 'Ekstensi PHP', manual: 'Edit php.ini secara manual', container: 'Bangun ulang image atau konfigurasi', flyenv: 'Manajemen ekstensi visual' },
      { feature: 'Beberapa situs', manual: 'Virtual host manual', container: 'Satu stack per proyek', flyenv: 'Situs lokal terkelola dalam satu workspace' },
      { feature: 'Siklus hidup database', manual: 'Setup server terpisah', container: 'Layanan container', flyenv: 'Modul MySQL atau MariaDB' },
      { feature: 'HTTPS lokal', manual: 'Sertifikat manual', container: 'Setup khusus proxy', flyenv: 'Domain lokal tepercaya dan HTTPS' }
    ],
    faqTitle: 'FAQ WordPress',
    faqDescription: 'Pertanyaan umum tentang menggunakan FlyEnv untuk situs WordPress lokal.',
    faqs: [
      { question: 'Bisakah situs WordPress yang berbeda memakai versi PHP yang berbeda?', answer: 'Bisa. FlyEnv memungkinkan setiap proyek atau situs lokal memakai versi PHP yang dibutuhkan, terutama saat plugin atau tema lama belum siap untuk runtime baru.' },
      { question: 'Bisakah saya memakai MariaDB sebagai pengganti MySQL?', answer: 'Bisa. FlyEnv menyediakan kedua modul database. Pilih engine yang sesuai dengan situs atau lingkungan yang ingin Anda tiru secara lokal.' },
      { question: 'Ke mana situs lokal harus diarahkan?', answer: 'Arahkan situs ke direktori yang berisi file WordPress dan wp-config.php. Tetapkan root yang dilayani dengan jelas agar file privat proyek tidak ikut terekspos.' },
      { question: 'Apakah setiap situs WordPress membutuhkan Redis?', answer: 'Tidak. Redis bersifat opsional dan berguna saat situs atau konfigurasi cache-nya menggunakan object caching. Jalankan hanya untuk proyek yang membutuhkannya.' },
      { question: 'Bisakah saya mengembangkan tema atau blok yang menggunakan Node.js?', answer: 'Bisa. Tambahkan Node.js saat tema, blok, atau tooling frontend yang dipilih membutuhkan proses build. WordPress sendiri tidak membutuhkan Node.js untuk melayani request.' },
      { question: 'Bisakah saya mengelola beberapa situs WordPress klien di FlyEnv?', answer: 'Bisa. Pisahkan direktori, versi PHP, database, domain lokal, dan layanan opsional setiap situs sambil mengelolanya dari satu workspace.' }
    ],
    relatedTitle: 'Solusi terkait',
    relatedSolutions: [
      { name: 'Laravel', description: 'Framework PHP', slug: 'laravel', logo: relatedLogos.laravel },
      { name: 'Magento', description: 'Platform e-commerce', slug: 'magento', logo: relatedLogos.magento },
      { name: 'Drupal', description: 'Sistem manajemen konten', slug: 'drupal', logo: relatedLogos.drupal }
    ],
    ctaTitle: 'Siap membangun WordPress secara lokal?',
    ctaDescription: 'Jalankan runtime situs, database, domain lokal, dan HTTPS dalam satu workspace.',
    haveQuestions: 'Ada pertanyaan tentang FlyEnv?'
  },
  es: {
    breadcrumbSolutions: 'Soluciones',
    eyebrow: 'Solución CMS',
    heroTitle: 'Entorno de desarrollo local de WordPress con FlyEnv',
    heroDescription: 'Crea, importa y gestiona sitios WordPress con la versión de PHP, las extensiones, la base de datos, el servidor web, el dominio local y HTTPS que necesita cada sitio.',
    download: 'Descargar FlyEnv',
    guide: 'Leer la guía de Host',
    heroStackTitle: 'Servicios principales de un vistazo',
    heroStackDescription: 'Los componentes esenciales para ejecutar y probar un sitio WordPress local.',
    heroStack: [
      { label: 'PHP + extensiones', feature: 'php' },
      { label: 'MySQL / MariaDB', feature: 'mysql' },
      { label: 'Nginx / Apache', feature: 'nginx' },
      { label: 'Dominios locales + HTTPS', feature: 'https' }
    ],
    requirementsTitle: 'Qué gestiona FlyEnv para cada sitio WordPress',
    requirementsDescription: 'WordPress gira en torno al sitio: los archivos, la raíz de documentos, el runtime de PHP, la base de datos y la URL local deben mantenerse alineados. FlyEnv vincula las versiones y extensiones de PHP a cada proyecto.',
    requirementHeaders: ['Necesidad', 'Servicio o ajuste local', 'Compatibilidad de FlyEnv'],
    requirements: [
      { icon: 'folder', title: 'Archivos del sitio', parts: [{ label: 'Raíz del proyecto + wp-config.php', feature: 'https' }], support: 'Añade o importa un sitio existente' },
      { icon: 'runtime', title: 'Runtime de PHP', parts: [{ label: 'PHP-FPM', feature: 'php' }], support: 'Elige la versión por proyecto' },
      { icon: 'extension', title: 'Extensiones de PHP', parts: [{ label: 'Extensiones de PHP cargadas', feature: 'php' }], support: 'Consulta e instala extensiones visualmente' },
      { icon: 'database', title: 'Base de datos del sitio', parts: [{ label: 'MySQL', feature: 'mysql' }, { label: ' o ' }, { label: 'MariaDB', feature: 'mariadb' }], support: 'Gestiona el contenido y los ajustes en local' },
      { icon: 'web', title: 'Servidor web', parts: [{ label: 'Nginx', feature: 'nginx' }, { label: ' / ' }, { label: 'Apache', feature: 'apache' }], support: 'Sirve los enlaces permanentes y las reescrituras locales' },
      { icon: 'globe', title: 'URL del sitio', parts: [{ label: 'Dominio local personalizado + HTTPS', feature: 'https' }], support: 'Prueba cookies, redirecciones y webhooks' },
      { icon: 'cache', title: 'Servicios opcionales', parts: [{ label: 'Redis', feature: 'redis' }, { label: ' / ' }, { label: 'Node.js', feature: 'nodejs' }], support: 'Activa la caché de objetos o las herramientas del tema solo cuando hagan falta' }
    ],
    sitesTitle: 'Varios sitios WordPress, un solo workspace',
    sitesDescription: 'Mantén separados los sitios de clientes, el trabajo con plugins y el desarrollo de temas sin reconstruir el stack local cada vez.',
    sitesCaption: 'Cada sitio WordPress conserva su propia versión de PHP, raíz de documentos, base de datos y dominio local, y todos se ven en un único workspace de FlyEnv.',
    siteProof: [
      { icon: 'runtime', title: 'Versión de PHP por sitio', description: 'Vincula la compatibilidad de plugins y temas al runtime del proyecto.' },
      { icon: 'database', title: 'Base de datos independiente', description: 'Gestiona MySQL o MariaDB sin mezclar los datos de distintos clientes.' },
      { icon: 'folder', title: 'Raíz de documentos clara', description: 'Reduce la exposición accidental haciendo explícito el directorio servido de WordPress.' },
      { icon: 'globe', title: 'Dominio local y HTTPS', description: 'Prueba redirecciones, cookies, callbacks de OAuth y funciones seguras del navegador en local.' }
    ],
    lifecycleTitle: 'Flujo de trabajo de un sitio WordPress en FlyEnv',
    lifecycleDescription: 'Pasa de los archivos del proyecto a un sitio local operativo: elige el runtime, conecta la base de datos, define la raíz servida y desarrolla temas o plugins en una URL local real.',
    lifecycleSteps: [
      { icon: 'folder', title: 'Crea o importa', description: 'Empieza con un proyecto nuevo o con el directorio de un sitio existente.', path: '/guide/host' },
      { icon: 'runtime', title: 'PHP + extensiones', description: 'Ajusta el runtime a los plugins y temas.', feature: 'php' },
      { icon: 'database', title: 'MySQL / MariaDB', description: 'Conecta la base de datos que contiene el contenido del sitio.', feature: 'mysql' },
      { icon: 'folder', title: 'Define la raíz del sitio', description: 'Mantén wp-config.php y wp-content/ dentro del directorio servido.', feature: 'https' },
      { icon: 'globe', title: 'Dominio local + HTTPS', description: 'Usa client-site.test con un certificado de confianza.', feature: 'https' },
      { icon: 'code', title: 'Desarrollo de temas / plugins', description: 'Desarrolla temas y plugins dentro de wp-content/themes y wp-content/plugins.' }
    ],
    lifecycleOptionalTitle: 'Servicios de apoyo opcionales',
    lifecycleOptional: [
      { icon: 'cache', title: 'Caché de objetos Redis', description: 'Caché de objetos opcional para sitios cuya configuración utiliza Redis.', logo: '', feature: 'redis' },
      { icon: 'frontend', title: 'Herramientas de Node.js', description: 'Añádelas cuando el tema o los bloques necesiten un paso de compilación.', logo: '/assets/demo-logos/nodedotjs.svg', feature: 'nodejs' }
    ],
    benefitsTitle: 'Por qué usar FlyEnv para desarrollar con WordPress',
    benefitsDescription: 'Un flujo local más predecible para sitios que dependen de PHP, archivos de contenido, bases de datos y URLs accesibles desde el navegador.',
    benefits: [
      { icon: 'runtime', title: 'Adapta PHP al sitio', description: 'Usa una versión compatible para plugins antiguos, temas de bloques modernos o sitios de clientes.', emphasis: true, evidence: 'Sitio antiguo → PHP 7.4 · Sitio moderno → PHP 8.2+' },
      { icon: 'extension', title: 'Comprueba las extensiones', description: 'Revisa las extensiones de PHP que necesita el sitio antes de que falle un plugin o una importación.', emphasis: true, evidence: 'PHP → Extensiones → comprueba antes de depurar' },
      { icon: 'database', title: 'Elige MySQL o MariaDB', description: 'Mantén el motor de base de datos cerca del proyecto en lugar de compartir un stack opaco.', emphasis: true, evidence: 'Usa el motor que espera tu sitio' },
      { icon: 'folder', title: 'Separa las raíces de los sitios', description: 'Asigna a cada sitio WordPress un directorio y una URL local explícitos.' },
      { icon: 'lock', title: 'Usa HTTPS local real', description: 'Prueba cookies de inicio de sesión, redirecciones, callbacks de pago y contenido incrustado en un dominio de confianza.', evidence: 'https://client-site.test' },
      { icon: 'play', title: 'Inicia juntos los servicios de apoyo', description: 'Usa un Startup Group cuando el sitio necesite PHP, su base de datos, Redis o herramientas frontend al mismo tiempo.' }
    ],
    workflowTitle: 'Crea un sitio WordPress nuevo o trae uno existente al entorno local',
    workflowDescription: 'Usa FlyEnv para un sitio nuevo, un proyecto de cliente existente o un workspace de temas y plugins que ya tengas.',
    workflows: [
      { icon: 'plus', title: 'Crea un sitio WordPress nuevo', steps: ['Abre PHP → New Project y elige WordPress.', 'Elige las versiones de PHP y Composer del proyecto.', 'Crea los archivos del proyecto y añade el sitio local correspondiente.', 'Selecciona la raíz de documentos y configura el dominio local.', 'Inicia el sitio con su base de datos y ábrelo mediante HTTPS.'] },
      { icon: 'folder', title: 'Importa un sitio existente', steps: ['Abre el directorio de WordPress existente.', 'Configura la versión de PHP y comprueba las extensiones necesarias.', 'Crea o conecta la base de datos MySQL o MariaDB.', 'Añade la raíz del sitio, el dominio local, las reescrituras y HTTPS.', 'Agrupa los servicios para poder iniciar el sitio de forma repetible.'] }
    ],
    setupGuide: 'Leer la guía completa de configuración de Host',
    comparisonTitle: 'Comparar enfoques locales para WordPress',
    comparisonDescription: 'Cada configuración resuelve problemas distintos. Estas son las diferencias entre ejecutar WordPress con un stack manual, contenedores o FlyEnv.',
    comparisonHeaders: ['Característica', 'Stack local manual', 'Flujo con contenedores', 'FlyEnv'],
    comparisonRows: [
      { feature: 'Aislamiento de versiones PHP', manual: 'Cambio manual', container: 'Definido en la configuración del contenedor', flyenv: 'Selección del runtime por proyecto' },
      { feature: 'Extensiones de PHP', manual: 'Editar php.ini a mano', container: 'Reconstruir la imagen o la configuración', flyenv: 'Gestión visual de extensiones' },
      { feature: 'Varios sitios', manual: 'Hosts virtuales manuales', container: 'Un stack por proyecto', flyenv: 'Sitios locales gestionados en un workspace' },
      { feature: 'Ciclo de vida de la base de datos', manual: 'Servidor independiente', container: 'Servicio en un contenedor', flyenv: 'Módulos MySQL o MariaDB' },
      { feature: 'HTTPS local', manual: 'Certificados manuales', container: 'Configuración específica del proxy', flyenv: 'Dominios locales de confianza y HTTPS' }
    ],
    faqTitle: 'Preguntas frecuentes de WordPress',
    faqDescription: 'Preguntas habituales sobre el uso de FlyEnv para sitios WordPress locales.',
    faqs: [
      { question: '¿Pueden distintos sitios WordPress usar versiones diferentes de PHP?', answer: 'Sí. FlyEnv permite que cada proyecto o sitio local utilice la versión de PHP que necesita, algo útil cuando plugins o temas antiguos aún no son compatibles con un runtime nuevo.' },
      { question: '¿Puedo usar MariaDB en lugar de MySQL?', answer: 'Sí. FlyEnv ofrece ambos módulos de base de datos. Elige el motor que coincida con el sitio o con el entorno que quieras reproducir localmente.' },
      { question: '¿A qué directorio debe apuntar el sitio local?', answer: 'Apunta el sitio al directorio que contiene los archivos de WordPress y wp-config.php. Mantén explícita la raíz servida para no exponer archivos privados del proyecto.' },
      { question: '¿Necesito Redis para todos los sitios WordPress?', answer: 'No. Redis es opcional y resulta útil cuando el sitio o su configuración de caché utiliza caché de objetos. Inícialo solo para los proyectos que lo necesiten.' },
      { question: '¿Puedo desarrollar temas o bloques que usen Node.js?', answer: 'Sí. Añade Node.js cuando el tema, bloque o herramienta frontend seleccionada necesite un paso de compilación. WordPress no necesita Node.js para servir peticiones.' },
      { question: '¿Puedo gestionar varios sitios WordPress de clientes en FlyEnv?', answer: 'Sí. Mantén separados sus directorios, versiones de PHP, bases de datos, dominios locales y servicios opcionales mientras los gestionas desde un único workspace.' }
    ],
    relatedTitle: 'Soluciones relacionadas',
    relatedSolutions: [
      { name: 'Laravel', description: 'Framework PHP', slug: 'laravel', logo: relatedLogos.laravel },
      { name: 'Magento', description: 'Plataforma de comercio electrónico', slug: 'magento', logo: relatedLogos.magento },
      { name: 'Drupal', description: 'Sistema de gestión de contenidos', slug: 'drupal', logo: relatedLogos.drupal }
    ],
    ctaTitle: '¿Listo para desarrollar WordPress en local?',
    ctaDescription: 'Ejecuta el runtime del sitio, la base de datos, el dominio local y HTTPS en un solo workspace.',
    haveQuestions: '¿Tienes preguntas sobre FlyEnv?'
  }
}

const localizedPath = (locale: WordPressSolutionLocale, path: string) => (locale === 'en' ? path : `/${locale}${path}`)
const featurePath = (locale: WordPressSolutionLocale, feature: FeatureKey) => localizedPath(locale, featurePaths[feature])

export const translateData = (locale: WordPressSolutionLocale) => {
  const language: CopyData = locale === 'en' ? english : { ...english, ...localizedSections[locale] }
  const parts = (items: TextPart[]) => items.map((part) => ({ ...part, href: part.feature ? featurePath(locale, part.feature) : undefined }))

  return {
    ...language,
    heroStack: language.heroStack.map((item) => ({ ...item, href: featurePath(locale, item.feature) })),
    requirements: language.requirements.map((item) => ({ ...item, parts: parts(item.parts) })),
    lifecycleSteps: language.lifecycleSteps.map((item) => ({ ...item, href: item.feature ? featurePath(locale, item.feature) : item.path ? localizedPath(locale, item.path) : undefined })),
    lifecycleOptional: language.lifecycleOptional.map((item) => ({ ...item, href: featurePath(locale, item.feature) })),
    relatedSolutions: language.relatedSolutions.map((item) => ({ ...item, href: localizedPath(locale, `/solutions/${item.slug}`) }))
  }
}
