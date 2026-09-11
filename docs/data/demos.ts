export type DemoCategory =
  | 'getting-started'
  | 'projects'
  | 'runtimes'
  | 'databases-services'
  | 'developer-tools'
  | 'ai-mcp'

export type DemoLocale = 'en' | 'zh' | 'id' | 'es'
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
  featuredRank?: number
  locales: Record<DemoLocale, DemoCopy>
  platforms: {
    youtube: string
    bilibili?: string
  }
  relatedGuides: string[]
  relatedModules: string[]
}

type DemoSource = Omit<Demo, 'featured' | 'featuredRank' | 'locales' | 'platforms'> & {
  featured?: boolean
  featuredRank?: number
  titles: Record<DemoLocale, string>
  summaries?: Partial<Record<DemoLocale, string>>
  tags: string[]
}

export const demoCategories: Record<DemoLocale, Record<DemoCategory, string>> = {
  en: {
    'getting-started': 'Getting started',
    projects: 'Projects',
    runtimes: 'Languages & Runtimes',
    'databases-services': 'Databases & services',
    'developer-tools': 'Developer tools',
    'ai-mcp': 'AI & MCP'
  },
  zh: {
    'getting-started': '开始使用',
    projects: '项目实践',
    runtimes: '语言与运行时',
    'databases-services': '数据库与服务',
    'developer-tools': '开发工具',
    'ai-mcp': 'AI 与 MCP'
  },
  id: {
    'getting-started': 'Mulai cepat',
    projects: 'Proyek',
    runtimes: 'Bahasa & Runtime',
    'databases-services': 'Database & layanan',
    'developer-tools': 'Alat developer',
    'ai-mcp': 'AI & MCP'
  },
  es: {
    'getting-started': 'Primeros pasos',
    projects: 'Proyectos',
    runtimes: 'Lenguajes y runtimes',
    'databases-services': 'Bases de datos y servicios',
    'developer-tools': 'Herramientas de desarrollo',
    'ai-mcp': 'IA y MCP'
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
  },
  es: {
    'getting-started': 'Conoce el flujo de trabajo esencial de FlyEnv antes de configurar tu entorno local.',
    projects: 'Sigue un stack de proyecto local completo gestionado desde FlyEnv.',
    runtimes: 'Configura y cambia el flujo de trabajo de runtime que necesita tu proyecto.',
    'databases-services': 'Instala, ejecuta e inspecciona un servicio local sin una capa de contenedores.',
    'developer-tools': 'Usa una utilidad de desarrollo específica desde el espacio de trabajo de FlyEnv.',
    'ai-mcp': 'Conecta el desarrollo asistido por IA al entorno local que gestiona FlyEnv.'
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
  'sdbIbnIYoYY': 'BV1zrFDz4ELJ',
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
  'Cpq6i9T6IK4': 'BV1Ez5EzzEk5',
  // Fill these entries when the corresponding Bilibili videos are available.
  'vjZPrYqJavA': 'BV1Tjui66E2Z',
  'ZhvJ8a9Fp_4': 'BV1jxbQ6EEWx',
  '5NqSag8c4YY': 'BV1cFEp67E2v',
  'hKIx2LdNz0Y': 'BV1cXgp6aEdr',
  'Sd03V_wxh1k': 'BV1xrgn6wEWo',
  's6PHRiioyuc': 'BV1mX8865Eqp',
  'sXo7L4-cxh8': 'BV1NA8d6CEWn',
  'Kfb0meXjzUA': 'BV1fi8R6wETE',
  '47I5nZK3rjo': 'BV1i6oQYdE1g',
  '5gW3WHh8_Jw': 'BV19oE36BELa',
  '2sfoWGW9rm4': 'BV1B1846HEvV',
  'idjLaMh2RMw': 'BV1vM8462EZ8',
  'DByCl9MyYrg': 'BV1v3846yEPR',
  'mriHvqJmU1g': 'BV17U846JE3C',
  't7nKL45FdVk': 'BV1wqZ7BNErL',
  '8ceC7QqY4UA': 'BV1XuGV6oECA',
  'pa0QFgpu17w': 'BV1vNGV68EF4',
  'L-W1JNqWPEw': 'BV1Pmg36TE9n',
  'Jg7zfJTOZCM': 'BV1Kkg366EaB',
  'uFVZHMGORGM': 'BV1smg36KEG5',
  'yPk9HQJRvb8': 'BV13UZcYGEhu',
  'KChv2gvgKjw': 'BV1UXgM6NEZZ',
  'X8W1FcwWc00': 'BV1GhcYzNEyw',
  'qpgUJZmS6Ig': 'BV1fPc4ztEL6',
  'iPGTefjNWI8': 'BV11icbz5EWs',
  'LFazRyd_G3o': 'BV1XbcYzvEmg',
  'NSQNBS7zHqU': 'BV1W9cxzKEmM',
  'NiJW09NCa_0': 'BV1UBcYzbE2M',
  '2QxmRRVR15Q': 'BV1Q7ciz6ELv',
  'BYu3sNxuRF0': 'BV1XJc4z7ENe',
  'jZmnlraSHvs': 'BV1MSFdz4EDC',
  '2KZK97EP8is': 'BV1r1cbzMEBm',
  'cCXvWoJ4ayM': 'BV1mdcuzfE2p',
  'DiYIv_SoTDY': 'BV1bsZ7BGEaC',
  'x36kdgUI16k': 'BV1AZcxzYEKY',
  'oiVFGe4GhkY': 'BV1eRZ7BQEih',
  'Y17Tvrc9fsQ': 'BV1SMcEzXEX6',
  '4kyrX0-QPgM': 'BV117cEz2Ens',
  'DIX4lTgBP4c': 'BV1bAFQzGEPF',
  'Zb5YPO5BTaY': 'BV1yzcbzGEer',
  'dyT5GzuOrBc': 'BV13FZEBEEuh',
  '67cwHqygWFM': 'BV1txZ7BrEDY',
  'MqjFsqrpI0I': 'BV12ccgzxEE1'
}

function createDemo(source: DemoSource): Demo {
  const bilibili = bilibiliByYoutubeId[source.youtubeId]

  return {
    id: source.id,
    youtubeId: source.youtubeId,
    category: source.category,
    publishedAt: source.publishedAt,
    featured: source.featured === true,
    featuredRank: source.featuredRank,
    locales: {
      en: {
        title: source.titles.en,
        summary: source.summaries?.en || categorySummaries.en[source.category],
        tags: source.tags
      },
      zh: {
        title: source.titles.zh,
        summary: source.summaries?.zh || categorySummaries.zh[source.category],
        tags: source.tags
      },
      id: {
        title: source.titles.id,
        summary: source.summaries?.id || categorySummaries.id[source.category],
        tags: source.tags
      },
      es: {
        title: source.titles.es,
        summary: source.summaries?.es || categorySummaries.es[source.category],
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
    publishedAt: '2026-07-17', featured: true, featuredRank: 1,
    titles: { en: 'FlyEnv feature overview', zh: 'FlyEnv 功能总览', id: 'Ikhtisar fitur FlyEnv', es: 'Resumen de funciones de FlyEnv' },
    summaries: {
      en: 'See how FlyEnv brings runtimes, services, projects, and developer tools into one local workspace.',
      zh: '了解 FlyEnv 如何将运行时、服务、项目与开发工具集中到一个本地工作区。',
      id: 'Lihat cara FlyEnv menyatukan runtime, layanan, proyek, dan alat developer dalam satu ruang kerja lokal.',
      es: 'Descubre cómo FlyEnv reúne runtimes, servicios, proyectos y herramientas de desarrollo en un solo espacio de trabajo local.'
    },
    tags: ['FlyEnv', 'local development', 'native workflow'],
    relatedGuides: ['/guide/what-is-flyenv'], relatedModules: []
  },
  {
    id: 'flyenv-418-release', youtubeId: 'vjZPrYqJavA', category: 'getting-started',
    publishedAt: '2026-08-11',
    titles: { en: 'What is new in FlyEnv 4.18.0', zh: 'FlyEnv 4.18.0 新功能', id: 'Fitur baru FlyEnv 4.18.0', es: 'Novedades de FlyEnv 4.18.0' },
    tags: ['Neo4j', 'pgAdmin 4', 'DbGate', 'Redis Commander'],
    relatedGuides: ['/guide/what-is-flyenv'], relatedModules: []
  },
  {
    id: 'erpnext-local-project', youtubeId: 'ZhvJ8a9Fp_4', category: 'projects',
    publishedAt: '2026-08-16', featured: true, featuredRank: 3,
    titles: { en: 'Run ERPNext locally', zh: '本地运行 ERPNext', id: 'Menjalankan ERPNext secara lokal', es: 'Ejecuta ERPNext en local' },
    summaries: {
      en: 'Run ERPNext and its Frappe services together as a managed local stack.',
      zh: '将 ERPNext 与 Frappe 服务作为一个本地技术栈统一运行和管理。',
      id: 'Jalankan ERPNext dan layanan Frappe-nya bersama sebagai satu stack lokal terkelola.',
      es: 'Ejecuta ERPNext y sus servicios Frappe juntos como un stack local gestionado.'
    },
    tags: ['ERPNext', 'Frappe', 'local stack'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'php-project-services', youtubeId: '5NqSag8c4YY', category: 'projects',
    publishedAt: '2026-06-06',
    titles: { en: 'Deploy PHP app services without Docker', zh: '无需 Docker 部署 PHP 应用服务', id: 'Menerapkan layanan aplikasi PHP tanpa Docker', es: 'Despliega servicios de aplicaciones PHP sin Docker' },
    tags: ['Laravel Octane', 'RoadRunner', 'Swoole', 'Workerman'],
    relatedGuides: ['/guide/deploy-php-projects-without-docker'], relatedModules: []
  },
  {
    id: 'gitea-local-project', youtubeId: 'hKIx2LdNz0Y', category: 'projects',
    publishedAt: '2026-08-13',
    titles: { en: 'Self-host Gitea with MySQL and HTTPS', zh: '使用 MySQL 和 HTTPS 自托管 Gitea', id: 'Self-host Gitea dengan MySQL dan HTTPS', es: 'Aloja Gitea por tu cuenta con MySQL y HTTPS' },
    tags: ['Gitea', 'MySQL', 'HTTPS'], relatedGuides: ['/guide/host'], relatedModules: []
  },
  {
    id: 'openmrs-local-project', youtubeId: 'Sd03V_wxh1k', category: 'projects',
    publishedAt: '2026-08-13',
    titles: { en: 'Run OpenMRS locally with Tomcat', zh: '使用 Tomcat 本地运行 OpenMRS', id: 'Menjalankan OpenMRS secara lokal dengan Tomcat', es: 'Ejecuta OpenMRS en local con Tomcat' },
    tags: ['OpenMRS', 'Tomcat', 'Java'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'nextcloud-local-project', youtubeId: 's6PHRiioyuc', category: 'projects',
    publishedAt: '2026-08-23',
    titles: { en: 'Run a full Nextcloud PHP stack locally', zh: '本地运行完整的 Nextcloud PHP 技术栈', id: 'Menjalankan stack PHP Nextcloud lengkap secara lokal', es: 'Ejecuta un stack PHP de Nextcloud completo en local' },
    tags: ['Nextcloud', 'PHP', 'local stack'], relatedGuides: ['/guide/run-laravel-use-flyenv'], relatedModules: []
  },
  {
    id: 'keycloak-local-project', youtubeId: 'sXo7L4-cxh8', category: 'projects',
    publishedAt: '2026-08-26',
    titles: { en: 'Run Keycloak locally with Nginx, PostgreSQL and Mailpit', zh: '使用 Nginx、PostgreSQL 与 Mailpit 本地运行 Keycloak', id: 'Menjalankan Keycloak secara lokal dengan Nginx, PostgreSQL, dan Mailpit', es: 'Ejecuta Keycloak en local con Nginx, PostgreSQL y Mailpit' },
    tags: ['Keycloak', 'Nginx', 'PostgreSQL', 'Mailpit'], relatedGuides: ['/guide/host'], relatedModules: []
  },
  {
    id: 'snipe-it-local-project', youtubeId: 'Kfb0meXjzUA', category: 'projects',
    publishedAt: '2026-08-26',
    titles: { en: 'Run Snipe-IT locally with Nginx, PHP-FPM, MySQL and Mailpit', zh: '使用 Nginx、PHP-FPM、MySQL 与 Mailpit 本地运行 Snipe-IT', id: 'Menjalankan Snipe-IT secara lokal dengan Nginx, PHP-FPM, MySQL, dan Mailpit', es: 'Ejecuta Snipe-IT en local con Nginx, PHP-FPM, MySQL y Mailpit' },
    tags: ['Snipe-IT', 'Nginx', 'PHP-FPM', 'MySQL', 'Mailpit'], relatedGuides: ['/guide/run-laravel-use-flyenv'], relatedModules: []
  },
  {
    id: 'zero-config-runtimes', youtubeId: '47I5nZK3rjo', category: 'getting-started',
    publishedAt: '2025-03-28', featured: true, featuredRank: 2,
    titles: { en: 'Install PHP, Python, Go, Node.js and Java quickly', zh: '快速安装 PHP、Python、Go、Node.js 与 Java', id: 'Memasang PHP, Python, Go, Node.js, dan Java dengan cepat', es: 'Instala PHP, Python, Go, Node.js y Java rápidamente' },
    summaries: {
      en: 'Install and switch PHP, Python, Go, Node.js, and Java from one local workspace.',
      zh: '在一个本地工作区中安装和切换 PHP、Python、Go、Node.js 与 Java。',
      id: 'Instal dan ganti PHP, Python, Go, Node.js, serta Java dari satu ruang kerja lokal.',
      es: 'Instala y cambia entre PHP, Python, Go, Node.js y Java desde un solo espacio de trabajo local.'
    },
    tags: ['PHP', 'Python', 'Go', 'Node.js', 'Java'], relatedGuides: ['/guide/getting-started'], relatedModules: []
  },
  {
    id: 'multiple-php-versions', youtubeId: 'OYP1IOoJOtI', category: 'runtimes',
    publishedAt: '2026-02-14',
    titles: { en: 'Run multiple PHP versions at once', zh: '同时运行多个 PHP 版本', id: 'Menjalankan beberapa versi PHP sekaligus', es: 'Ejecuta varias versiones de PHP a la vez' },
    tags: ['PHP', 'multiple versions', 'project isolation'], relatedGuides: ['/guide/manage-multiple-node-php-versions'], relatedModules: []
  },
  {
    id: 'bun-runtime', youtubeId: 'lu68kw8_3dY', category: 'runtimes',
    publishedAt: '2026-08-01',
    titles: { en: 'Set up Bun versions, projects and services', zh: '配置 Bun 版本、项目与服务', id: 'Menyiapkan versi, proyek, dan layanan Bun', es: 'Configura versiones, proyectos y servicios de Bun' },
    tags: ['Bun', 'runtime', 'projects'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'native-node-python-go-services', youtubeId: 'SHK12kXApTM', category: 'runtimes',
    publishedAt: '2026-03-06',
    titles: { en: 'Run Node.js, Python and Go as native services', zh: '将 Node.js、Python 与 Go 作为原生服务运行', id: 'Menjalankan Node.js, Python, dan Go sebagai layanan native', es: 'Ejecuta Node.js, Python y Go como servicios nativos' },
    tags: ['Node.js', 'Python', 'Go', 'native services'], relatedGuides: ['/guide/deploy-nodejs-python-go-without-docker'], relatedModules: []
  },
  {
    id: 'node-project-runtime', youtubeId: 'Pt_I3NDciZw', category: 'runtimes',
    publishedAt: '2026-06-07',
    titles: { en: 'Use Node.js versions, services and Nginx per project', zh: '按项目使用 Node.js 版本、服务与 Nginx', id: 'Menggunakan versi Node.js, layanan, dan Nginx per proyek', es: 'Usa versiones de Node.js, servicios y Nginx por proyecto' },
    tags: ['Node.js', 'Nginx', 'project isolation'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'python-version-management', youtubeId: 'dhy0nJYsfQQ', category: 'runtimes',
    publishedAt: '2026-02-15',
    titles: { en: 'Manage Python versions on Windows', zh: '在 Windows 上管理 Python 版本', id: 'Mengelola versi Python di Windows', es: 'Gestiona versiones de Python en Windows' },
    tags: ['Python', 'Windows', 'runtime versions'], relatedGuides: ['/guide/manage-multiple-node-php-versions'], relatedModules: []
  },
  {
    id: 'project-environment-switching', youtubeId: 'Cpq6i9T6IK4', category: 'runtimes',
    publishedAt: '2025-04-18',
    titles: { en: 'Auto-switch runtimes for each project', zh: '按项目自动切换运行时', id: 'Mengganti runtime otomatis untuk setiap proyek', es: 'Cambia de runtime automáticamente en cada proyecto' },
    tags: ['PHP', 'Node.js', 'Python', 'project isolation'], relatedGuides: ['/guide/project-level-runtime-environment'], relatedModules: []
  },
  {
    id: 'postgresql-pgadmin', youtubeId: '5gW3WHh8_Jw', category: 'databases-services',
    publishedAt: '2026-06-08', featured: true, featuredRank: 4,
    titles: { en: 'Set up PostgreSQL and pgAdmin locally', zh: '本地配置 PostgreSQL 与 pgAdmin', id: 'Menyiapkan PostgreSQL dan pgAdmin secara lokal', es: 'Configura PostgreSQL y pgAdmin en local' },
    summaries: {
      en: 'Run PostgreSQL locally, then connect and manage it in pgAdmin 4.',
      zh: '本地运行 PostgreSQL，并通过 pgAdmin 4 连接和管理数据库。',
      id: 'Jalankan PostgreSQL secara lokal, lalu hubungkan dan kelola lewat pgAdmin 4.',
      es: 'Ejecuta PostgreSQL en local y luego conéctate y gestiónalo desde pgAdmin 4.'
    },
    tags: ['PostgreSQL', 'pgAdmin', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'postgresql-pgadmin4-stack', youtubeId: '2sfoWGW9rm4', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Run a PostgreSQL and pgAdmin 4 stack', zh: '运行 PostgreSQL 与 pgAdmin 4 技术栈', id: 'Menjalankan stack PostgreSQL dan pgAdmin 4', es: 'Ejecuta un stack de PostgreSQL y pgAdmin 4' },
    tags: ['PostgreSQL', 'pgAdmin 4', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'redis-commander', youtubeId: 'idjLaMh2RMw', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Run Redis and manage data in Redis Commander', zh: '运行 Redis 并使用 Redis Commander 管理数据', id: 'Menjalankan Redis dan mengelola data di Redis Commander', es: 'Ejecuta Redis y gestiona datos con Redis Commander' },
    summaries: {
      en: 'Run Redis locally and inspect keys, values, and connections in Redis Commander.',
      zh: '本地运行 Redis，并在 Redis Commander 中查看键、值与连接。',
      id: 'Jalankan Redis secara lokal dan periksa key, value, serta koneksi di Redis Commander.',
      es: 'Ejecuta Redis en local e inspecciona claves, valores y conexiones en Redis Commander.'
    },
    tags: ['Redis', 'Redis Commander', 'database'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'neo4j-browser', youtubeId: 'DByCl9MyYrg', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Run Neo4j with its Browser admin panel', zh: '运行 Neo4j 及其 Browser 管理面板', id: 'Menjalankan Neo4j dengan panel admin Browser', es: 'Ejecuta Neo4j con su panel de administración Browser' },
    tags: ['Neo4j', 'graph database', 'Browser'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mongodb-dbgate', youtubeId: 'mriHvqJmU1g', category: 'databases-services',
    publishedAt: '2026-08-23',
    titles: { en: 'Set up MongoDB and DbGate on Windows', zh: '在 Windows 上配置 MongoDB 与 DbGate', id: 'Menyiapkan MongoDB dan DbGate di Windows', es: 'Configura MongoDB y DbGate en Windows' },
    tags: ['MongoDB', 'DbGate', 'Windows'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'apache-native', youtubeId: 't7nKL45FdVk', category: 'databases-services',
    publishedAt: '2026-02-14',
    titles: { en: 'Run Apache natively across platforms', zh: '跨平台原生运行 Apache', id: 'Menjalankan Apache secara native lintas platform', es: 'Ejecuta Apache de forma nativa en todas las plataformas' },
    tags: ['Apache', 'web server', 'native'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'caddy-php-mysql', youtubeId: 'NuaYnRiD3AY', category: 'databases-services',
    publishedAt: '2026-08-04', featured: true, featuredRank: 5,
    titles: { en: 'Set up Caddy, PHP-FPM and MySQL locally', zh: '本地配置 Caddy、PHP-FPM 与 MySQL', id: 'Menyiapkan Caddy, PHP-FPM, dan MySQL secara lokal', es: 'Configura Caddy, PHP-FPM y MySQL en local' },
    summaries: {
      en: 'Configure Caddy, PHP-FPM, and MySQL together for a native local PHP stack.',
      zh: '将 Caddy、PHP-FPM 与 MySQL 配置为原生本地 PHP 技术栈。',
      id: 'Konfigurasikan Caddy, PHP-FPM, dan MySQL bersama sebagai stack PHP lokal native.',
      es: 'Configura Caddy, PHP-FPM y MySQL juntos para obtener un stack PHP local nativo.'
    },
    tags: ['Caddy', 'PHP-FPM', 'MySQL'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'minio-local', youtubeId: 'MJ9OQBOBXMg', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Install and run MinIO locally', zh: '本地安装并运行 MinIO', id: 'Memasang dan menjalankan MinIO secara lokal', es: 'Instala y ejecuta MinIO en local' },
    tags: ['MinIO', 'object storage', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'numa-local', youtubeId: '0qfnkr5V7eE', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Numa locally', zh: '本地运行 Numa', id: 'Menjalankan Numa secara lokal', es: 'Ejecuta Numa en local' },
    tags: ['Numa', 'local service', 'monitoring'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'temporal-local', youtubeId: 'E_jetPnVxBo', category: 'databases-services',
    publishedAt: '2026-07-27',
    titles: { en: 'Set up Temporal local development', zh: '配置 Temporal 本地开发', id: 'Menyiapkan pengembangan lokal Temporal', es: 'Configura el desarrollo local con Temporal' },
    tags: ['Temporal', 'workflow', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'rustfs-local', youtubeId: 'lCEEocXdt_M', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Run RustFS locally', zh: '本地运行 RustFS', id: 'Menjalankan RustFS secara lokal', es: 'Ejecuta RustFS en local' },
    tags: ['RustFS', 'object storage', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'clickhouse-local', youtubeId: '3ePJYddWYmQ', category: 'databases-services',
    publishedAt: '2026-07-27',
    titles: { en: 'Run ClickHouse locally in minutes', zh: '几分钟内本地运行 ClickHouse', id: 'Menjalankan ClickHouse secara lokal dalam hitungan menit', es: 'Ejecuta ClickHouse en local en cuestión de minutos' },
    tags: ['ClickHouse', 'analytics database', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'zincsearch-local', youtubeId: 'uOf2cWk3AtU', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Set up ZincSearch locally', zh: '本地配置 ZincSearch', id: 'Menyiapkan ZincSearch secara lokal', es: 'Configura ZincSearch en local' },
    tags: ['ZincSearch', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'meilisearch-local', youtubeId: 'vPD3lXo1vr0', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Set up Meilisearch and its dashboard locally', zh: '本地配置 Meilisearch 及其仪表盘', id: 'Menyiapkan Meilisearch dan dashboard-nya secara lokal', es: 'Configura Meilisearch y su panel en local' },
    tags: ['Meilisearch', 'search', 'dashboard'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'qdrant-local', youtubeId: 'ahetMNLLS7s', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Qdrant versions and dashboard locally', zh: '本地配置 Qdrant 版本与仪表盘', id: 'Menyiapkan versi dan dashboard Qdrant secara lokal', es: 'Configura versiones de Qdrant y su panel en local' },
    tags: ['Qdrant', 'vector database', 'dashboard'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'elasticsearch-local', youtubeId: 'B9Eo2Y-aXWQ', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Elasticsearch locally', zh: '本地配置 Elasticsearch', id: 'Menyiapkan Elasticsearch secara lokal', es: 'Configura Elasticsearch en local' },
    tags: ['Elasticsearch', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'rabbitmq-local', youtubeId: 'ymbyrr5zGkI', category: 'databases-services',
    publishedAt: '2026-08-04',
    titles: { en: 'Install and manage RabbitMQ locally', zh: '本地安装并管理 RabbitMQ', id: 'Memasang dan mengelola RabbitMQ secara lokal', es: 'Instala y gestiona RabbitMQ en local' },
    tags: ['RabbitMQ', 'message queue', 'Windows'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mariadb-module', youtubeId: 'mvmbRi6KsgI', category: 'databases-services',
    publishedAt: '2026-06-07',
    titles: { en: 'Install, switch and create MariaDB databases', zh: '安装、切换并创建 MariaDB 数据库', id: 'Memasang, mengganti, dan membuat database MariaDB', es: 'Instala, cambia y crea bases de datos de MariaDB' },
    tags: ['MariaDB', 'database', 'versions'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'mailpit-local', youtubeId: 'D4MkA25Ofd0', category: 'databases-services',
    publishedAt: '2026-06-11',
    titles: { en: 'Test local email with Mailpit', zh: '使用 Mailpit 测试本地邮件', id: 'Menguji email lokal dengan Mailpit', es: 'Prueba el correo local con Mailpit' },
    tags: ['Mailpit', 'SMTP', 'email testing'], relatedGuides: ['/guide/local-email-testing-mailpit'], relatedModules: []
  },
  {
    id: 'nacos-local', youtubeId: '8ceC7QqY4UA', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Nacos for service discovery locally', zh: '本地运行用于服务发现的 Nacos', id: 'Menjalankan Nacos untuk service discovery secara lokal', es: 'Ejecuta Nacos en local para el descubrimiento de servicios' },
    tags: ['Nacos', 'service discovery', 'configuration'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'etcd-local', youtubeId: 'xsw8BQxii10', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Set up and monitor etcd locally', zh: '本地配置并监控 etcd', id: 'Menyiapkan dan memantau etcd secara lokal', es: 'Configura y monitoriza etcd en local' },
    tags: ['etcd', 'service discovery', 'monitoring'], relatedGuides: ['/guide/user-customizable-modules'], relatedModules: []
  },
  {
    id: 'temporal-cli-local', youtubeId: '80psOMuDK9I', category: 'databases-services',
    publishedAt: '2026-07-28',
    titles: { en: 'Set up Temporal CLI locally', zh: '本地配置 Temporal CLI', id: 'Menyiapkan Temporal CLI secara lokal', es: 'Configura Temporal CLI en local' },
    tags: ['Temporal CLI', 'workflow', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mysql-local', youtubeId: 'uWWHAqxhVyk', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Manage local MySQL and reset root access', zh: '管理本地 MySQL 并重置 root 访问', id: 'Mengelola MySQL lokal dan mereset akses root', es: 'Gestiona MySQL en local y restablece el acceso root' },
    tags: ['MySQL', 'database', 'root password'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'nginx-module', youtubeId: 'zfdNZFRt3k4', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Set up and manage Nginx', zh: '配置并管理 Nginx', id: 'Menyiapkan dan mengelola Nginx', es: 'Configura y gestiona Nginx' },
    tags: ['Nginx', 'web server', 'local service'], relatedGuides: ['/guide/parse-html-as-php-multi-servers'], relatedModules: []
  },
  {
    id: 'mongodb-compass', youtubeId: 'wPjgwVeA6lw', category: 'databases-services',
    publishedAt: '2026-06-09',
    titles: { en: 'Set up MongoDB and connect Compass', zh: '配置 MongoDB 并连接 Compass', id: 'Menyiapkan MongoDB dan menghubungkan Compass', es: 'Configura MongoDB y conecta Compass' },
    tags: ['MongoDB', 'Compass', 'database'], relatedGuides: ['/guide/database-user-password'], relatedModules: []
  },
  {
    id: 'typesense-local', youtubeId: '3Uo22iqty9k', category: 'databases-services',
    publishedAt: '2026-07-30',
    titles: { en: 'Run Typesense locally', zh: '本地运行 Typesense', id: 'Menjalankan Typesense secara lokal', es: 'Ejecuta Typesense en local' },
    tags: ['Typesense', 'search', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'consul-local', youtubeId: 'pa0QFgpu17w', category: 'databases-services',
    publishedAt: '2026-08-01',
    titles: { en: 'Run Consul locally', zh: '本地运行 Consul', id: 'Menjalankan Consul secara lokal', es: 'Ejecuta Consul en local' },
    tags: ['Consul', 'service discovery', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'redis-module', youtubeId: 'u9xjPN-VWT4', category: 'databases-services',
    publishedAt: '2026-02-15',
    titles: { en: 'Set up and manage native Redis', zh: '配置并管理原生 Redis', id: 'Menyiapkan dan mengelola Redis native', es: 'Configura y gestiona Redis nativo' },
    tags: ['Redis', 'cache', 'local service'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'cliproxyapi-gateway', youtubeId: 'RmSl4jgmEyI', category: 'ai-mcp',
    publishedAt: '2026-08-01',
    titles: { en: 'Set up CLIProxyAPI as a local AI gateway', zh: '将 CLIProxyAPI 配置为本地 AI 网关', id: 'Menyiapkan CLIProxyAPI sebagai gateway AI lokal', es: 'Configura CLIProxyAPI como un gateway de IA local' },
    summaries: {
      en: 'Set up a local AI gateway with providers, OAuth, and API keys managed in FlyEnv.',
      zh: '在 FlyEnv 中配置本地 AI 网关，统一管理模型提供商、OAuth 与 API 密钥。',
      id: 'Siapkan gateway AI lokal di FlyEnv untuk mengelola provider, OAuth, dan API key.',
      es: 'Configura un gateway de IA local con proveedores, OAuth y claves de API gestionados en FlyEnv.'
    },
    tags: ['CLIProxyAPI', 'AI gateway', 'OAuth', 'API keys'], relatedGuides: ['/guide/ai-coding-workspace-mcp'], relatedModules: []
  },
  {
    id: 'ai-cli-mcp-crud', youtubeId: 'frprHkD1_rQ', category: 'ai-mcp',
    publishedAt: '2026-07-09', featured: true, featuredRank: 6,
    titles: { en: 'Build a PHP CRUD site with AI CLI and MCP', zh: '使用 AI CLI 与 MCP 构建 PHP CRUD 网站', id: 'Membangun situs PHP CRUD dengan AI CLI dan MCP', es: 'Crea un sitio CRUD en PHP con AI CLI y MCP' },
    summaries: {
      en: 'Use an AI CLI and MCP to build and manage a local PHP and MySQL project.',
      zh: '使用 AI CLI 与 MCP 构建并管理本地 PHP 和 MySQL 项目。',
      id: 'Gunakan AI CLI dan MCP untuk membangun serta mengelola proyek PHP dan MySQL lokal.',
      es: 'Usa AI CLI y MCP para crear y gestionar un proyecto local con PHP y MySQL.'
    },
    tags: ['MCP', 'AI CLI', 'MySQL', 'PHP'], relatedGuides: ['/guide/ai-coding-workspace-mcp'], relatedModules: []
  },
  {
    id: 'resume-opencode-session', youtubeId: 'L-W1JNqWPEw', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume an OpenCode session in one click', zh: '一键继续 OpenCode 会话', id: 'Melanjutkan sesi OpenCode dengan satu klik', es: 'Retoma una sesión de OpenCode con un clic' },
    tags: ['OpenCode', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'resume-claude-code-session', youtubeId: 'Jg7zfJTOZCM', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Claude Code session', zh: '继续 Claude Code 会话', id: 'Melanjutkan sesi Claude Code', es: 'Retoma una sesión de Claude Code' },
    tags: ['Claude Code', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'n8n-ollama-workflow', youtubeId: 'YnA1B3qmDJU', category: 'ai-mcp',
    publishedAt: '2026-03-23',
    titles: { en: 'Build a self-hosted n8n and Ollama workflow', zh: '构建自托管的 n8n 与 Ollama 工作流', id: 'Membangun alur kerja n8n dan Ollama self-hosted', es: 'Crea un flujo de trabajo autoalojado con n8n y Ollama' },
    tags: ['n8n', 'Ollama', 'AI workflow'], relatedGuides: ['/guide/build-local-ai-workflow-by-n8n'], relatedModules: []
  },
  {
    id: 'resume-kimi-session', youtubeId: 'uFVZHMGORGM', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Kimi session', zh: '继续 Kimi 会话', id: 'Melanjutkan sesi Kimi', es: 'Retoma una sesión de Kimi' },
    tags: ['Kimi', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'offline-ai-agent', youtubeId: 'yPk9HQJRvb8', category: 'ai-mcp',
    publishedAt: '2025-03-29',
    titles: { en: 'Build an offline local AI agent', zh: '构建离线本地 AI 智能体', id: 'Membangun agen AI lokal offline', es: 'Crea un agente de IA local sin conexión' },
    tags: ['AI agent', 'offline AI', 'Ollama'], relatedGuides: ['/guide/build-local-offline-ai-agent'], relatedModules: []
  },
  {
    id: 'openclaw-ollama-agent', youtubeId: 'j7_B-VzIyEU', category: 'ai-mcp',
    publishedAt: '2026-03-15',
    titles: { en: 'Build a local OpenClaw and Ollama agent', zh: '构建本地 OpenClaw 与 Ollama 智能体', id: 'Membangun agen OpenClaw dan Ollama lokal', es: 'Crea un agente local con OpenClaw y Ollama' },
    tags: ['OpenClaw', 'Ollama', 'AI agent'], relatedGuides: ['/guide/openclaw'], relatedModules: []
  },
  {
    id: 'resume-codex-session', youtubeId: 'KChv2gvgKjw', category: 'ai-mcp',
    publishedAt: '2026-08-14',
    titles: { en: 'Resume a Codex session', zh: '继续 Codex 会话', id: 'Melanjutkan sesi Codex', es: 'Retoma una sesión de Codex' },
    tags: ['Codex', 'AI coding', 'session'], relatedGuides: ['/guide/flyenv-work-with-ai'], relatedModules: []
  },
  {
    id: 'system-environment-tool', youtubeId: 'sdbIbnIYoYY', category: 'developer-tools',
    publishedAt: '2026-02-10',
    titles: { en: 'Manage system environment variables', zh: '管理系统环境变量', id: 'Mengelola variabel lingkungan sistem', es: 'Gestiona las variables de entorno del sistema' },
    tags: ['environment variables', 'PATH', 'Windows'], relatedGuides: ['/guide/setup-system-path-environment'], relatedModules: []
  },
  {
    id: 'ssl-certificate-generator', youtubeId: 'X8W1FcwWc00', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Generate local wildcard SSL certificates', zh: '生成本地通配符 SSL 证书', id: 'Membuat sertifikat SSL wildcard lokal', es: 'Genera certificados SSL wildcard locales' },
    tags: ['SSL', 'HTTPS', 'wildcard certificate'], relatedGuides: ['/guide/host'], relatedModules: []
  },
  {
    id: 'base64-encoder-decoder', youtubeId: 'qpgUJZmS6Ig', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Encode and decode Base64', zh: 'Base64 编码与解码', id: 'Encode dan decode Base64', es: 'Codifica y decodifica Base64' },
    tags: ['Base64', 'encoding', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'code-playground-library', youtubeId: 'yYSwnYC7V9M', category: 'developer-tools',
    publishedAt: '2025-08-23',
    titles: { en: 'Run snippets in Code Playground and Library', zh: '在代码演练场与代码库中运行片段', id: 'Menjalankan snippet di Code Playground dan Library', es: 'Ejecuta fragmentos en Code Playground y Library' },
    tags: ['code playground', 'snippets', 'developer tool'], relatedGuides: ['/guide/code-playground-and-code-library'], relatedModules: []
  },
  {
    id: 'rsa-key-pair-generator', youtubeId: 'iPGTefjNWI8', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate RSA key pairs', zh: '生成 RSA 密钥对', id: 'Membuat pasangan kunci RSA', es: 'Genera pares de claves RSA' },
    tags: ['RSA', 'security', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'html-entity-tool', youtubeId: 'LFazRyd_G3o', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Encode and decode HTML entities', zh: 'HTML 实体编码与解码', id: 'Encode dan decode entitas HTML', es: 'Codifica y decodifica entidades HTML' },
    tags: ['HTML entities', 'XSS', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'token-generator', youtubeId: 'NSQNBS7zHqU', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate secure tokens', zh: '生成安全 Token', id: 'Membuat token aman', es: 'Genera tokens seguros' },
    tags: ['token', 'security', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'string-encryption-tool', youtubeId: 'NiJW09NCa_0', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Encrypt and decrypt strings', zh: '字符串加密与解密', id: 'Mengenkripsi dan mendekripsi string', es: 'Cifra y descifra cadenas de texto' },
    tags: ['encryption', 'AES', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'chmod-calculator', youtubeId: '2QxmRRVR15Q', category: 'developer-tools',
    publishedAt: '2026-02-12',
    titles: { en: 'Calculate Linux chmod permissions', zh: '计算 Linux chmod 权限', id: 'Menghitung izin chmod Linux', es: 'Calcula permisos chmod de Linux' },
    tags: ['chmod', 'Linux', 'permissions'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'timestamp-converter', youtubeId: 'BYu3sNxuRF0', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Convert timestamps and date-time values', zh: '转换时间戳与日期时间', id: 'Mengonversi timestamp dan nilai tanggal-waktu', es: 'Convierte marcas de tiempo y valores de fecha y hora' },
    tags: ['timestamp', 'date time', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'qr-code-generator', youtubeId: 'jZmnlraSHvs', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate QR codes', zh: '生成二维码', id: 'Membuat kode QR', es: 'Genera códigos QR' },
    tags: ['QR code', 'developer tool', 'export'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'mime-type-lookup', youtubeId: '2KZK97EP8is', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Look up MIME types and file extensions', zh: '查询 MIME 类型与文件扩展名', id: 'Mencari tipe MIME dan ekstensi file', es: 'Consulta tipos MIME y extensiones de archivo' },
    tags: ['MIME type', 'file extension', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'screen-capture-tool', youtubeId: 'cCXvWoJ4ayM', category: 'developer-tools',
    publishedAt: '2026-02-09',
    titles: { en: 'Capture visible and hidden windows', zh: '捕获可见与隐藏窗口', id: 'Menangkap jendela terlihat dan tersembunyi', es: 'Captura ventanas visibles y ocultas' },
    tags: ['screen capture', 'Windows', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'http-status-codes', youtubeId: 'DiYIv_SoTDY', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Explore HTTP status codes', zh: '查看 HTTP 状态码', id: 'Menjelajahi kode status HTTP', es: 'Explora los códigos de estado HTTP' },
    tags: ['HTTP status', 'web development', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'hash-string-tool', youtubeId: 'x36kdgUI16k', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Generate and inspect string hashes', zh: '生成并查看字符串哈希', id: 'Membuat dan memeriksa hash string', es: 'Genera e inspecciona hashes de cadenas de texto' },
    tags: ['hash', 'MD5', 'SHA', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'regex-tool', youtubeId: 'oiVFGe4GhkY', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Test regular expressions interactively', zh: '交互式测试正则表达式', id: 'Menguji ekspresi reguler secara interaktif', es: 'Prueba expresiones regulares de forma interactiva' },
    tags: ['regex', 'developer tool', 'testing'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'process-kill-tool', youtubeId: 'Y17Tvrc9fsQ', category: 'developer-tools',
    publishedAt: '2026-02-13',
    titles: { en: 'Inspect and stop processes', zh: '查看并停止进程', id: 'Memeriksa dan menghentikan proses', es: 'Inspecciona y detén procesos' },
    tags: ['process', 'developer tool', 'system'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'port-kill-tool', youtubeId: '4kyrX0-QPgM', category: 'developer-tools',
    publishedAt: '2026-02-13',
    titles: { en: 'Find and stop port conflicts', zh: '查找并停止端口冲突', id: 'Mencari dan menghentikan konflik port', es: 'Encuentra y detén conflictos de puertos' },
    tags: ['port', 'process', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'data-format-converter', youtubeId: 'DIX4lTgBP4c', category: 'developer-tools',
    publishedAt: '2026-02-10',
    titles: { en: 'Convert JSON, XML, YAML and code formats', zh: '转换 JSON、XML、YAML 与代码格式', id: 'Mengonversi JSON, XML, YAML, dan format kode', es: 'Convierte JSON, XML, YAML y formatos de código' },
    tags: ['JSON', 'XML', 'YAML', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'base64-file-converter', youtubeId: 'Zb5YPO5BTaY', category: 'developer-tools',
    publishedAt: '2026-02-11',
    titles: { en: 'Convert images to and from Base64', zh: '在图片与 Base64 间转换', id: 'Mengonversi gambar ke dan dari Base64', es: 'Convierte imágenes a y desde Base64' },
    tags: ['Base64', 'images', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'custom-etcd-module', youtubeId: 'ViKMVkh3TL8', category: 'developer-tools',
    publishedAt: '2025-05-28',
    titles: { en: 'Build a custom etcd module', zh: '构建自定义 etcd 模块', id: 'Membangun modul etcd kustom', es: 'Crea un módulo etcd personalizado' },
    tags: ['etcd', 'custom module', 'advanced tutorial'], relatedGuides: ['/guide/user-customizable-modules'], relatedModules: []
  },
  {
    id: 'url-timing-analyzer', youtubeId: 'dyT5GzuOrBc', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Analyze website URL timing', zh: '分析网站 URL 耗时', id: 'Menganalisis waktu URL situs web', es: 'Analiza los tiempos de respuesta de las URL de un sitio web' },
    tags: ['URL timing', 'performance', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'file-metadata-hash', youtubeId: '67cwHqygWFM', category: 'developer-tools',
    publishedAt: '2026-02-14',
    titles: { en: 'Check file metadata and hashes', zh: '检查文件元数据与哈希', id: 'Memeriksa metadata dan hash file', es: 'Comprueba los metadatos y hashes de archivos' },
    tags: ['file metadata', 'hash', 'developer tool'], relatedGuides: [], relatedModules: []
  },
  {
    id: 'batch-image-processor', youtubeId: 'MqjFsqrpI0I', category: 'developer-tools',
    publishedAt: '2026-02-09',
    titles: { en: 'Resize, compress and watermark images in batches', zh: '批量缩放、压缩并添加图片水印', id: 'Mengubah ukuran, mengompres, dan memberi watermark gambar secara batch', es: 'Redimensiona, comprime y aplica marcas de agua a imágenes por lotes' },
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
