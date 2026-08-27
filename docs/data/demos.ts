export type DemoCategory =
  | 'getting-started'
  | 'projects'
  | 'runtimes'
  | 'databases-services'
  | 'developer-tools'
  | 'ai-mcp'

export type DemoLocale = 'en' | 'zh' | 'id'
export type DemoPlatform = 'youtube' | 'bilibili'

export interface DemoCopy {
  title: string
  summary: string
  tags: string[]
}

export interface Demo {
  id: string
  youtubeId: string
  category: DemoCategory
  publishedAt: string
  featured: boolean
  locales: Record<DemoLocale, DemoCopy>
  platforms: {
    youtube: string
    bilibili?: string
  }
  relatedGuides: string[]
  relatedModules: string[]
}

type DemoSource = Omit<Demo, 'featured' | 'locales' | 'platforms'> & {
  featured?: boolean
  titles: Record<DemoLocale, string>
  tags: string[]
}

export const demoCategories: Record<DemoLocale, Record<DemoCategory, string>> = {
  en: {
    'getting-started': 'Getting started',
    projects: 'Projects',
    runtimes: 'Runtimes',
    'databases-services': 'Databases & services',
    'developer-tools': 'Developer tools',
    'ai-mcp': 'AI & MCP'
  },
  zh: {
    'getting-started': '开始使用',
    projects: '项目实践',
    runtimes: '运行时',
    'databases-services': '数据库与服务',
    'developer-tools': '开发工具',
    'ai-mcp': 'AI 与 MCP'
  },
  id: {
    'getting-started': 'Mulai cepat',
    projects: 'Proyek',
    runtimes: 'Runtime',
    'databases-services': 'Database & layanan',
    'developer-tools': 'Alat developer',
    'ai-mcp': 'AI & MCP'
  }
}

const categorySummaries: Record<DemoLocale, Record<DemoCategory, string>> = {
  en: {
    'getting-started': 'See the essential FlyEnv workflow before configuring your local environment.',
    projects: 'Follow a complete local project stack managed from FlyEnv.',
    runtimes: 'Set up and switch the runtime workflow your project needs.',
    'databases-services': 'Install, run, and inspect a local service without a container layer.',
    'developer-tools': 'Use a focused developer utility from the FlyEnv workspace.',
    'ai-mcp': 'Connect AI-assisted development to the local environment FlyEnv manages.'
  },
  zh: {
    'getting-started': '在配置本地环境前，先了解 FlyEnv 的核心工作流。',
    projects: '跟随完整的本地项目技术栈，了解如何通过 FlyEnv 管理。',
    runtimes: '配置并切换项目所需的运行时工作流。',
    'databases-services': '无需容器层，安装、运行并查看本地服务。',
    'developer-tools': '在 FlyEnv 工作区中使用专注的开发辅助工具。',
    'ai-mcp': '将 AI 辅助开发连接到 FlyEnv 管理的本地环境。'
  },
  id: {
    'getting-started': 'Lihat alur kerja inti FlyEnv sebelum mengatur lingkungan lokal Anda.',
    projects: 'Ikuti stack proyek lokal lengkap yang dikelola dari FlyEnv.',
    runtimes: 'Siapkan dan ganti alur kerja runtime yang dibutuhkan proyek Anda.',
    'databases-services': 'Pasang, jalankan, dan periksa layanan lokal tanpa lapisan container.',
    'developer-tools': 'Gunakan alat developer terfokus dari ruang kerja FlyEnv.',
    'ai-mcp': 'Hubungkan pengembangan berbantuan AI ke lingkungan lokal yang dikelola FlyEnv.'
  }
}

const bilibiliByYoutubeId: Partial<Record<string, string>> = {
  'TA2NA0JeGdo': 'BV1eCNR6FE2k',
  'RmSl4jgmEyI': 'BV1biGG6nEYz',
  'frprHkD1_rQ': 'BV1AyM761EpZ',
  'OYP1IOoJOtI': 'BV1r6Z7BwE8p',
  'NuaYnRiD3AY': 'BV129uF6BExw',
  'MJ9OQBOBXMg': 'BV1cd3b6mEc8',
  '0qfnkr5V7eE': 'BV1SeGG6DEHS',
  'E_jetPnVxBo': 'BV1TD3c67Eei',
  'lCEEocXdt_M': 'BV1Zc386VE4o',
  'lu68kw8_3dY': 'BV1GtGG6dE6y',
  '3ePJYddWYmQ': 'BV1S43w6QEvS',
  'SHK12kXApTM': 'BV1cFEp67E2v',
  'uOf2cWk3AtU': 'BV1Hu3463Ej7',
  'vPD3lXo1vr0': 'BV1EV346BEqi',
  'sdbIbnIYoYY': 'BV1i6oQYdE1g',
  'ahetMNLLS7s': 'BV16Q3P6VEPA',
  'B9Eo2Y-aXWQ': 'BV1if3P6BEBR',
  'YnA1B3qmDJU': 'BV1qGXFBfE7U',
  'ymbyrr5zGkI': 'BV1XiMZ6GEdw',
  'mvmbRi6KsgI': 'BV1NfEx6eE3V',
  'D4MkA25Ofd0': 'BV1CxEz6YEgx',
  'xsw8BQxii10': 'BV1eKGV6fEB5',
  '80psOMuDK9I': 'BV1Xc3v6UEEW',
  'uWWHAqxhVyk': 'BV1vuZ4B5EAg',
  'zfdNZFRt3k4': 'BV1jKZ4BjEgk',
  'Pt_I3NDciZw': 'BV1pzEs6tE2X',
  'dhy0nJYsfQQ': 'BV1hvZxBBEJk',
  'wPjgwVeA6lw': 'BV182E26AELB',
  '3Uo22iqty9k': 'BV1AT346CEFc',
  'j7_B-VzIyEU': 'BV1ciwMzUEGH',
  'yYSwnYC7V9M': 'BV14Je6zhECW',
  'u9xjPN-VWT4': 'BV1YaZxBzENJ',
  'ViKMVkh3TL8': 'BV1XxjzzdE3e',
  'Cpq6i9T6IK4': 'BV1Ez5EzzEk5'
}

function createDemo(source: DemoSource): Demo {
  const bilibili = bilibiliByYoutubeId[source.youtubeId]

  return {
    id: source.id,
    youtubeId: source.youtubeId,
    category: source.category,
    publishedAt: source.publishedAt,
    featured: source.featured === true,
    locales: {
      en: {
        title: source.titles.en,
        summary: categorySummaries.en[source.category],
        tags: source.tags
      },
      zh: {
        title: source.titles.zh,
        summary: categorySummaries.zh[source.category],
        tags: source.tags
      },
      id: {
        title: source.titles.id,
        summary: categorySummaries.id[source.category],
        tags: source.tags
      }
    },
    platforms: {
      youtube: 'https://www.youtube.com/watch?v=' + source.youtubeId,
      ...(bilibili ? { bilibili: 'https://www.bilibili.com/video/' + bilibili } : {})
    },
    relatedGuides: source.relatedGuides,
    relatedModules: source.relatedModules
  }
}

const sources: DemoSource[] = [
  {
    id: 'flyenv-feature-overview', youtubeId: 'TA2NA0JeGdo', category: 'getting-started',
    publishedAt: '2026-07-17', featured: true,
    titles: { en: 'FlyEnv feature overview', zh: 'FlyEnv 功能总览', id: 'Ikhtisar fitur FlyEnv' },
    tags: ['FlyEnv', 'local development', 'native workflow'],
    relatedGuides: ['/guide/what-is-flyenv'], relatedModules: []
  },
  {
    id: 'flyenv-418-release', youtubeId: 'vjZPrYqJavA', category: 'getting-started',
    publishedAt: '2026-08-11',
    titles: { en: 'What is new in FlyEnv 4.18.0', zh: 'FlyEnv 4.18.0 新功能', id: 'Fitur baru FlyEnv 4.18.0' },
    tags: ['Neo4j', 'pgAdmin 4', 'DbGate', 'Redis Commander'],
    relatedGuides: ['/guide/what-is-flyenv'], relatedModules: []
  },
  {
    id: 'phpwebstudy-overview', youtubeId: 'FHJ8nrQ2aj4', category: 'getting-started',
    publishedAt: '2024-09-28',
    titles: { en: 'PhpWebStudy all-in-one web environment', zh: 'PhpWebStudy 一体化 Web 环境', id: 'Lingkungan web lengkap PhpWebStudy' },
    tags: ['PhpWebStudy', 'PHP', 'web server'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'phpwebstudy-macos', youtubeId: 'f9emR2HFk9M', category: 'getting-started',
    publishedAt: '2022-12-23',
    titles: { en: 'PhpWebStudy on macOS', zh: 'macOS 上的 PhpWebStudy', id: 'PhpWebStudy di macOS' },
    tags: ['PhpWebStudy', 'macOS', 'PHP'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'flyphpserver-demo', youtubeId: 'QbuUkztmwLs', category: 'getting-started',
    publishedAt: '2026-05-07',
    titles: { en: 'FlyPHPServer demonstration', zh: 'FlyPHPServer 演示', id: 'Demo FlyPHPServer' },
    tags: ['FlyPHPServer', 'PHP', 'web server'], relatedGuides: [], relatedModules: ['/flyphpserver']
  },
  {
    id: 'phpwebstudy-windows-stack', youtubeId: 'rufRCVIeqj8', category: 'getting-started',
    publishedAt: '2024-11-11',
    titles: { en: 'Apache, PHP, MySQL and phpMyAdmin on Windows', zh: 'Windows 上的 Apache、PHP、MySQL 与 phpMyAdmin', id: 'Apache, PHP, MySQL, dan phpMyAdmin di Windows' },
    tags: ['Apache', 'PHP', 'MySQL', 'Windows'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'phpwebstudy-quick-stack', youtubeId: 'TwpnOXZ8cPo', category: 'getting-started',
    publishedAt: '2024-10-13',
    titles: { en: 'Build an Apache, PHP and MySQL stack quickly', zh: '快速搭建 Apache、PHP 与 MySQL 技术栈', id: 'Membangun stack Apache, PHP, dan MySQL dengan cepat' },
    tags: ['Apache', 'PHP', 'MySQL'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'erpnext-local-project', youtubeId: 'ZhvJ8a9Fp_4', category: 'projects',
    publishedAt: '2026-08-16', featured: true,
    titles: { en: 'Run ERPNext locally', zh: '本地运行 ERPNext', id: 'Menjalankan ERPNext secara lokal' },
    tags: ['ERPNext', 'Frappe', 'local stack'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'php-project-services', youtubeId: '5NqSag8c4YY', category: 'projects',
    publishedAt: '2026-06-06',
    titles: { en: 'Deploy PHP app services without Docker', zh: '无需 Docker 部署 PHP 应用服务', id: 'Menerapkan layanan aplikasi PHP tanpa Docker' },
    tags: ['Laravel Octane', 'RoadRunner', 'Swoole', 'Workerman'],
    relatedGuides: ['/guide/deploy-php-projects-without-docker'], relatedModules: []
  },
  {
    id: 'gitea-local-project', youtubeId: 'hKIx2LdNz0Y', category: 'projects',
    publishedAt: '2026-08-13',
    titles: { en: 'Self-host Gitea with MySQL and HTTPS', zh: '使用 MySQL 和 HTTPS 自托管 Gitea', id: 'Self-host Gitea dengan MySQL dan HTTPS' },
    tags: ['Gitea', 'MySQL', 'HTTPS'], relatedGuides: ['/guide/host'], relatedModules: []
  },
  {
    id: 'openmrs-local-project', youtubeId: 'Sd03V_wxh1k', category: 'projects',
    publishedAt: '2026-08-13',
    titles: { en: 'Run OpenMRS locally with Tomcat', zh: '使用 Tomcat 本地运行 OpenMRS', id: 'Menjalankan OpenMRS secara lokal dengan Tomcat' },
    tags: ['OpenMRS', 'Tomcat', 'Java'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'nextcloud-local-project', youtubeId: 's6PHRiioyuc', category: 'projects',
    publishedAt: '2026-08-23',
    titles: { en: 'Run a full Nextcloud PHP stack locally', zh: '本地运行完整的 Nextcloud PHP 技术栈', id: 'Menjalankan stack PHP Nextcloud lengkap secara lokal' },
    tags: ['Nextcloud', 'PHP', 'local stack'], relatedGuides: ['/guide/run-laravel-use-flyenv'], relatedModules: []
  },
  {
    id: 'zero-config-runtimes', youtubeId: '47I5nZK3rjo', category: 'runtimes',
    publishedAt: '2025-03-28',
    titles: { en: 'Install PHP, Python, Go, Node.js and Java quickly', zh: '快速安装 PHP、Python、Go、Node.js 与 Java', id: 'Memasang PHP, Python, Go, Node.js, dan Java dengan cepat' },
    tags: ['PHP', 'Python', 'Go', 'Node.js', 'Java'], relatedGuides: ['/guide/getting-started'], relatedModules: []
  },
  {
    id: 'multiple-php-versions', youtubeId: 'OYP1IOoJOtI', category: 'runtimes',
    publishedAt: '2026-02-14',
    titles: { en: 'Run multiple PHP versions at once', zh: '同时运行多个 PHP 版本', id: 'Menjalankan beberapa versi PHP sekaligus' },
    tags: ['PHP', 'multiple versions', 'project isolation'], relatedGuides: ['/guide/manage-multiple-node-php-versions'], relatedModules: []
  },
  {
    id: 'bun-runtime', youtubeId: 'lu68kw8_3dY', category: 'runtimes',
    publishedAt: '2026-08-01',
    titles: { en: 'Set up Bun versions, projects and services', zh: '配置 Bun 版本、项目与服务', id: 'Menyiapkan versi, proyek, dan layanan Bun' },
    tags: ['Bun', 'runtime', 'projects'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'native-node-python-go-services', youtubeId: 'SHK12kXApTM', category: 'runtimes',
    publishedAt: '2026-03-06',
    titles: { en: 'Run Node.js, Python and Go as native services', zh: '将 Node.js、Python 与 Go 作为原生服务运行', id: 'Menjalankan Node.js, Python, dan Go sebagai layanan native' },
    tags: ['Node.js', 'Python', 'Go', 'native services'], relatedGuides: ['/guide/deploy-nodejs-python-go-without-docker'], relatedModules: []
  },
  {
    id: 'node-project-runtime', youtubeId: 'Pt_I3NDciZw', category: 'runtimes',
    publishedAt: '2026-06-07',
    titles: { en: 'Use Node.js versions, services and Nginx per project', zh: '按项目使用 Node.js 版本、服务与 Nginx', id: 'Menggunakan versi Node.js, layanan, dan Nginx per proyek' },
    tags: ['Node.js', 'Nginx', 'project isolation'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'python-version-management', youtubeId: 'dhy0nJYsfQQ', category: 'runtimes',
    publishedAt: '2026-02-15',
    titles: { en: 'Manage Python versions on Windows', zh: '在 Windows 上管理 Python 版本', id: 'Mengelola versi Python di Windows' },
    tags: ['Python', 'Windows', 'runtime versions'], relatedGuides: ['/guide/manage-multiple-node-php-versions'], relatedModules: []
  },
  {
    id: 'project-environment-switching', youtubeId: 'Cpq6i9T6IK4', category: 'runtimes',
    publishedAt: '2025-04-18',
    titles: { en: 'Auto-switch runtimes for each project', zh: '按项目自动切换运行时', id: 'Mengganti runtime otomatis untuk setiap proyek' },
    tags: ['PHP', 'Node.js', 'Python', 'project isolation'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'postgresql-pgadmin', youtubeId: '5gW3WHh8_Jw', category: 'databases-services',
    publishedAt: '2026-06-08', featured: true,
    titles: { en: 'Set up PostgreSQL and pgAdmin locally', zh: '本地配置 PostgreSQL 与 pgAdmin', id: 'Menyiapkan PostgreSQL dan pgAdmin secara lokal' },
    tags: ['PostgreSQL', 'pgAdmin', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'postgresql-pgadmin4-stack', youtubeId: '2sfoWGW9rm4', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Run a PostgreSQL and pgAdmin 4 stack', zh: '运行 PostgreSQL 与 pgAdmin 4 技术栈', id: 'Menjalankan stack PostgreSQL dan pgAdmin 4' },
    tags: ['PostgreSQL', 'pgAdmin 4', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'redis-commander', youtubeId: 'idjLaMh2RMw', category: 'databases-services',
    publishedAt: '2026-08-23', featured: true,
    titles: { en: 'Run Redis and manage data in Redis Commander', zh: '运行 Redis 并使用 Redis Commander 管理数据', id: 'Menjalankan Redis dan mengelola data di Redis Commander' },
    tags: ['Redis', 'Redis Commander', 'database'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'neo4j-browser', youtubeId: 'DByCl9MyYrg', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Run Neo4j with its Browser admin panel', zh: '运行 Neo4j 及其 Browser 管理面板', id: 'Menjalankan Neo4j dengan panel admin Browser' },
    tags: ['Neo4j', 'graph database', 'Browser'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mongodb-dbgate', youtubeId: 'mriHvqJmU1g', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Set up MongoDB and DbGate on Windows', zh: '在 Windows 上配置 MongoDB 与 DbGate', id: 'Menyiapkan MongoDB dan DbGate di Windows' },
    tags: ['MongoDB', 'DbGate', 'Windows'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'apache-native', youtubeId: 't7nKL45FdVk', category: 'databases-services',
    publishedAt: '2026-02-14',
    titles: { en: 'Run Apache natively across platforms', zh: '跨平台原生运行 Apache', id: 'Menjalankan Apache secara native lintas platform' },
    tags: ['Apache', 'web server', 'native'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'caddy-php-mysql', youtubeId: 'NuaYnRiD3AY', category: 'databases-services',
    publishedAt: '2026-08-04', featured: true,
    titles: { en: 'Set up Caddy, PHP-FPM and MySQL locally', zh: '本地配置 Caddy、PHP-FPM 与 MySQL', id: 'Menyiapkan Caddy, PHP-FPM, dan MySQL secara lokal' },
    tags: ['Caddy', 'PHP-FPM', 'MySQL'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'minio-local', youtubeId: 'MJ9OQBOBXMg', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Install and run MinIO locally', zh: '本地安装并运行 MinIO', id: 'Memasang dan menjalankan MinIO secara lokal' },
    tags: ['MinIO', 'object storage', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'numa-local', youtubeId: '0qfnkr5V7eE', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Numa locally', zh: '本地运行 Numa', id: 'Menjalankan Numa secara lokal' },
    tags: ['Numa', 'local service', 'monitoring'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'temporal-local', youtubeId: 'E_jetPnVxBo', category: 'databases-services',
    publishedAt: '2026-07-27',
    titles: { en: 'Set up Temporal local development', zh: '配置 Temporal 本地开发', id: 'Menyiapkan pengembangan lokal Temporal' },
    tags: ['Temporal', 'workflow', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'rustfs-local', youtubeId: 'lCEEocXdt_M', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Run RustFS locally', zh: '本地运行 RustFS', id: 'Menjalankan RustFS secara lokal' },
    tags: ['RustFS', 'object storage', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'clickhouse-local', youtubeId: '3ePJYddWYmQ', category: 'databases-services',
    publishedAt: '2026-07-27',
    titles: { en: 'Run ClickHouse locally in minutes', zh: '几分钟内本地运行 ClickHouse', id: 'Menjalankan ClickHouse secara lokal dalam hitungan menit' },
    tags: ['ClickHouse', 'analytics database', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'zincsearch-local', youtubeId: 'uOf2cWk3AtU', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Set up ZincSearch locally', zh: '本地配置 ZincSearch', id: 'Menyiapkan ZincSearch secara lokal' },
    tags: ['ZincSearch', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'meilisearch-local', youtubeId: 'vPD3lXo1vr0', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Set up Meilisearch and its dashboard locally', zh: '本地配置 Meilisearch 及其仪表盘', id: 'Menyiapkan Meilisearch dan dashboard-nya secara lokal' },
    tags: ['Meilisearch', 'search', 'dashboard'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'qdrant-local', youtubeId: 'ahetMNLLS7s', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Qdrant versions and dashboard locally', zh: '本地配置 Qdrant 版本与仪表盘', id: 'Menyiapkan versi dan dashboard Qdrant secara lokal' },
    tags: ['Qdrant', 'vector database', 'dashboard'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'elasticsearch-local', youtubeId: 'B9Eo2Y-aXWQ', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Elasticsearch locally', zh: '本地配置 Elasticsearch', id: 'Menyiapkan Elasticsearch secara lokal' },
    tags: ['Elasticsearch', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'rabbitmq-local', youtubeId: 'ymbyrr5zGkI', category: 'databases-services',
    publishedAt: '2026-08-04',
    titles: { en: 'Install and manage RabbitMQ locally', zh: '本地安装并管理 RabbitMQ', id: 'Memasang dan mengelola RabbitMQ secara lokal' },
    tags: ['RabbitMQ', 'message queue', 'Windows'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mariadb-module', youtubeId: 'mvmbRi6KsgI', category: 'databases-services',
    publishedAt: '2026-06-07',
    titles: { en: 'Install, switch and create MariaDB databases', zh: '安装、切换并创建 MariaDB 数据库', id: 'Memasang, mengganti, dan membuat database MariaDB' },
    tags: ['MariaDB', 'database', 'versions'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'mailpit-local', youtubeId: 'D4MkA25Ofd0', category: 'databases-services',
    publishedAt: '2026-06-11',
    titles: { en: 'Test local email with Mailpit', zh: '使用 Mailpit 测试本地邮件', id: 'Menguji email lokal dengan Mailpit' },
    tags: ['Mailpit', 'SMTP', 'email testing'], relatedGuides: ['/guide/local-email-testing-mailpit'], relatedModules: []
  },
  {
    id: 'nacos-local', youtubeId: '8ceC7QqY4UA', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Nacos for service discovery locally', zh: '本地运行用于服务发现的 Nacos', id: 'Menjalankan Nacos untuk service discovery secara lokal' },
    tags: ['Nacos', 'service discovery', 'configuration'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'etcd-local', youtubeId: 'xsw8BQxii10', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Set up and monitor etcd locally', zh: '本地配置并监控 etcd', id: 'Menyiapkan dan memantau etcd secara lokal' },
    tags: ['etcd', 'service discovery', 'monitoring'], relatedGuides: ['/guide/user-customizable-modules'], relatedModules: []
  },
  {
    id: 'temporal-cli-local', youtubeId: '80psOMuDK9I', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Temporal CLI locally', zh: '本地配置 Temporal CLI', id: 'Menyiapkan Temporal CLI secara lokal' },
    tags: ['Temporal CLI', 'workflow', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mysql-local', youtubeId: 'uWWHAqxhVyk', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Manage local MySQL and reset root access', zh: '管理本地 MySQL 并重置 root 访问', id: 'Mengelola MySQL lokal dan mereset akses root' },
    tags: ['MySQL', 'database', 'root password'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'nginx-module', youtubeId: 'zfdNZFRt3k4', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Set up and manage Nginx', zh: '配置并管理 Nginx', id: 'Menyiapkan dan mengelola Nginx' },
    tags: ['Nginx', 'web server', 'local service'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'mongodb-compass', youtubeId: 'wPjgwVeA6lw', category: 'databases-services',
    publishedAt: '2026-06-09',
    titles: { en: 'Set up MongoDB and connect Compass', zh: '配置 MongoDB 并连接 Compass', id: 'Menyiapkan MongoDB dan menghubungkan Compass' },
    tags: ['MongoDB', 'Compass', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'typesense-local', youtubeId: '3Uo22iqty9k', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Run Typesense locally', zh: '本地运行 Typesense', id: 'Menjalankan Typesense secara lokal' },
    tags: ['Typesense', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'consul-local', youtubeId: 'pa0QFgpu17w', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Consul locally', zh: '本地运行 Consul', id: 'Menjalankan Consul secara lokal' },
    tags: ['Consul', 'service discovery', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'redis-module', youtubeId: 'u9xjPN-VWT4', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Set up and manage native Redis', zh: '配置并管理原生 Redis', id: 'Menyiapkan dan mengelola Redis native' },
    tags: ['Redis', 'cache', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'cliproxyapi-gateway', youtubeId: 'RmSl4jgmEyI', category: 'ai-mcp',
    publishedAt: '2026-08-01', featured: true,
    titles: { en: 'Set up CLIProxyAPI as a local AI gateway', zh: '将 CLIProxyAPI 配置为本地 AI 网关', id: 'Menyiapkan CLIProxyAPI sebagai gateway AI lokal' },
    tags: ['CLIProxyAPI', 'AI gateway', 'OAuth', 'API keys'], relatedGuides: ['/guide/ai-coding-workspace-mcp'], relatedModules: []
  },
  {
    id: 'ai-cli-mcp-crud', youtubeId: 'frprHkD1_rQ', category: 'ai-mcp',
    publishedAt: '2026-07-09',
    titles: { en: 'Build a PHP CRUD site with AI CLI and MCP', zh: '使用 AI CLI 与 MCP 构建 PHP CRUD 网站', id: 'Membangun situs PHP CRUD dengan AI CLI dan MCP' },
    tags: ['MCP', 'AI CLI', 'MySQL', 'PHP'], relatedGuides: ['/guide/ai-coding-workspace-mcp'], relatedModules: []
  },
  {
    id: 'resume-opencode-session', youtubeId: 'L-W1JNqWPEw', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume an OpenCode session in one click', zh: '一键继续 OpenCode 会话', id: 'Melanjutkan sesi OpenCode dengan satu klik' },
    tags: ['OpenCode', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'resume-claude-code-session', youtubeId: 'Jg7zfJTOZCM', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Claude Code session', zh: '继续 Claude Code 会话', id: 'Melanjutkan sesi Claude Code' },
    tags: ['Claude Code', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'n8n-ollama-workflow', youtubeId: 'YnA1B3qmDJU', category: 'ai-mcp',
    publishedAt: '2026-03-23',
    titles: { en: 'Build a self-hosted n8n and Ollama workflow', zh: '构建自托管的 n8n 与 Ollama 工作流', id: 'Membangun alur kerja n8n dan Ollama self-hosted' },
    tags: ['n8n', 'Ollama', 'AI workflow'], relatedGuides: ['/guide/build-local-ai-workflow-by-n8n'], relatedModules: []
  },
  {
    id: 'resume-kimi-session', youtubeId: 'uFVZHMGORGM', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Kimi session', zh: '继续 Kimi 会话', id: 'Melanjutkan sesi Kimi' },
    tags: ['Kimi', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'offline-ai-agent', youtubeId: 'yPk9HQJRvb8', category: 'ai-mcp',
    publishedAt: '2025-03-29',
    titles: { en: 'Build an offline local AI agent', zh: '构建离线本地 AI 智能体', id: 'Membangun agen AI lokal offline' },
    tags: ['AI agent', 'offline AI', 'Ollama'], relatedGuides: ['/guide/build-local-offline-ai-agent'], relatedModules: []
  },
  {
    id: 'openclaw-ollama-agent', youtubeId: 'j7_B-VzIyEU', category: 'ai-mcp',
    publishedAt: '2026-03-15',
    titles: { en: 'Build a local OpenClaw and Ollama agent', zh: '构建本地 OpenClaw 与 Ollama 智能体', id: 'Membangun agen OpenClaw dan Ollama lokal' },
    tags: ['OpenClaw', 'Ollama', 'AI agent'], relatedGuides: ['/guide/openclaw'], relatedModules: []
  },
  {
    id: 'resume-codex-session', youtubeId: 'KChv2gvgKjw', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Codex session', zh: '继续 Codex 会话', id: 'Melanjutkan sesi Codex' },
    tags: ['Codex', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'system-environment-tool', youtubeId: 'sdbIbnIYoYY', category: 'developer-tools',
    publishedAt: '2026-02-10',
    titles: { en: 'Manage system environment variables', zh: '管理系统环境变量', id: 'Mengelola variabel lingkungan sistem' },
    tags: ['environment variables', 'PATH', 'Windows'], relatedGuides: ['/guide/setup-system-path-environment'], relatedModules: []
  },
  {
    id: 'ssl-certificate-generator', youtubeId: 'X8W1FcwWc00', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Generate local wildcard SSL certificates', zh: '生成本地通配符 SSL 证书', id: 'Membuat sertifikat SSL wildcard lokal' },
    tags: ['SSL', 'HTTPS', 'wildcard certificate'], relatedGuides: ['/guide/host'], relatedModules: []
  },
  {
    id: 'base64-encoder-decoder', youtubeId: 'qpgUJZmS6Ig', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Encode and decode Base64', zh: 'Base64 编码与解码', id: 'Encode dan decode Base64' },
    tags: ['Base64', 'encoding', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'code-playground-library', youtubeId: 'yYSwnYC7V9M', category: 'developer-tools',
    publishedAt: '2025-08-23',
    titles: { en: 'Run snippets in Code Playground and Library', zh: '在代码演练场与代码库中运行片段', id: 'Menjalankan snippet di Code Playground dan Library' },
    tags: ['code playground', 'snippets', 'developer tool'], relatedGuides: ['/guide/code-playground-and-code-library'], relatedModules: []
  },
  {
    id: 'rsa-key-pair-generator', youtubeId: 'iPGTefjNWI8', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate RSA key pairs', zh: '生成 RSA 密钥对', id: 'Membuat pasangan kunci RSA' },
    tags: ['RSA', 'security', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'html-entity-tool', youtubeId: 'LFazRyd_G3o', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Encode and decode HTML entities', zh: 'HTML 实体编码与解码', id: 'Encode dan decode entitas HTML' },
    tags: ['HTML entities', 'XSS', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'token-generator', youtubeId: 'NSQNBS7zHqU', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate secure tokens', zh: '生成安全 Token', id: 'Membuat token aman' },
    tags: ['token', 'security', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'string-encryption-tool', youtubeId: 'NiJW09NCa_0', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Encrypt and decrypt strings', zh: '字符串加密与解密', id: 'Mengenkripsi dan mendekripsi string' },
    tags: ['encryption', 'AES', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'chmod-calculator', youtubeId: '2QxmRRVR15Q', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Calculate Linux chmod permissions', zh: '计算 Linux chmod 权限', id: 'Menghitung izin chmod Linux' },
    tags: ['chmod', 'Linux', 'permissions'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'timestamp-converter', youtubeId: 'BYu3sNxuRF0', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Convert timestamps and date-time values', zh: '转换时间戳与日期时间', id: 'Mengonversi timestamp dan nilai tanggal-waktu' },
    tags: ['timestamp', 'date time', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'qr-code-generator', youtubeId: 'jZmnlraSHvs', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate QR codes', zh: '生成二维码', id: 'Membuat kode QR' },
    tags: ['QR code', 'developer tool', 'export'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mime-type-lookup', youtubeId: '2KZK97EP8is', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Look up MIME types and file extensions', zh: '查询 MIME 类型与文件扩展名', id: 'Mencari tipe MIME dan ekstensi file' },
    tags: ['MIME type', 'file extension', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'screen-capture-tool', youtubeId: 'cCXvWoJ4ayM', category: 'developer-tools',
    publishedAt: '2026-02-09',
    titles: { en: 'Capture visible and hidden windows', zh: '捕获可见与隐藏窗口', id: 'Menangkap jendela terlihat dan tersembunyi' },
    tags: ['screen capture', 'Windows', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'http-status-codes', youtubeId: 'DiYIv_SoTDY', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Explore HTTP status codes', zh: '查看 HTTP 状态码', id: 'Menjelajahi kode status HTTP' },
    tags: ['HTTP status', 'web development', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'hash-string-tool', youtubeId: 'x36kdgUI16k', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate and inspect string hashes', zh: '生成并查看字符串哈希', id: 'Membuat dan memeriksa hash string' },
    tags: ['hash', 'MD5', 'SHA', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'regex-tool', youtubeId: 'oiVFGe4GhkY', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Test regular expressions interactively', zh: '交互式测试正则表达式', id: 'Menguji ekspresi reguler secara interaktif' },
    tags: ['regex', 'developer tool', 'testing'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'process-kill-tool', youtubeId: 'Y17Tvrc9fsQ', category: 'developer-tools',
    publishedAt: '2026-02-13',
    titles: { en: 'Inspect and stop processes', zh: '查看并停止进程', id: 'Memeriksa dan menghentikan proses' },
    tags: ['process', 'developer tool', 'system'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'port-kill-tool', youtubeId: '4kyrX0-QPgM', category: 'developer-tools',
    publishedAt: '2026-02-13',
    titles: { en: 'Find and stop port conflicts', zh: '查找并停止端口冲突', id: 'Mencari dan menghentikan konflik port' },
    tags: ['port', 'process', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'data-format-converter', youtubeId: 'DIX4lTgBP4c', category: 'developer-tools',
    publishedAt: '2026-02-10',
    titles: { en: 'Convert JSON, XML, YAML and code formats', zh: '转换 JSON、XML、YAML 与代码格式', id: 'Mengonversi JSON, XML, YAML, dan format kode' },
    tags: ['JSON', 'XML', 'YAML', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'base64-file-converter', youtubeId: 'Zb5YPO5BTaY', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Convert images to and from Base64', zh: '在图片与 Base64 间转换', id: 'Mengonversi gambar ke dan dari Base64' },
    tags: ['Base64', 'images', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'custom-etcd-module', youtubeId: 'ViKMVkh3TL8', category: 'developer-tools',
    publishedAt: '2025-05-28',
    titles: { en: 'Build a custom etcd module', zh: '构建自定义 etcd 模块', id: 'Membangun modul etcd kustom' },
    tags: ['etcd', 'custom module', 'advanced tutorial'], relatedGuides: ['/guide/user-customizable-modules'], relatedModules: []
  },
  {
    id: 'url-timing-analyzer', youtubeId: 'dyT5GzuOrBc', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Analyze website URL timing', zh: '分析网站 URL 耗时', id: 'Menganalisis waktu URL situs web' },
    tags: ['URL timing', 'performance', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'file-metadata-hash', youtubeId: '67cwHqygWFM', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Check file metadata and hashes', zh: '检查文件元数据与哈希', id: 'Memeriksa metadata dan hash file' },
    tags: ['file metadata', 'hash', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'batch-image-processor', youtubeId: 'MqjFsqrpI0I', category: 'developer-tools',
    publishedAt: '2026-02-09',
    titles: { en: 'Resize, compress and watermark images in batches', zh: '批量缩放、压缩并添加图片水印', id: 'Mengubah ukuran, mengompres, dan memberi watermark gambar secara batch' },
    tags: ['images', 'batch processing', 'developer tool'], relatedGuides: [], relatedModules: []
  }
]

export const demos: Demo[] = sources
  .map(createDemo)
  .sort((first, second) => second.publishedAt.localeCompare(first.publishedAt))

export function getDemoCopy(demo: Demo, locale: DemoLocale) {
  return demo.locales[locale] || demo.locales.en
}

export function getDemoPlatform(demo: Demo, locale: DemoLocale): DemoPlatform {
  if (locale === 'zh' && demo.platforms.bilibili) return 'bilibili'
  return 'youtube'
}

export function getDemoEmbedUrl(demo: Demo, platform: DemoPlatform) {
  if (platform === 'bilibili' && demo.platforms.bilibili) {
    const parts = demo.platforms.bilibili.split('/').filter(Boolean)
    const bvid = parts[parts.length - 1]
    return `https://player.bilibili.com/player.html?bvid=${bvid}&page=1`
  }

  return `https://www.youtube-nocookie.com/embed/${demo.youtubeId}?rel=0`
}
