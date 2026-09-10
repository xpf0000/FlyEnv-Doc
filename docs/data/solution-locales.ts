import type { SolutionCategory } from './solutions'

export type SolutionLocale = 'en' | 'zh' | 'id'

export interface LocalizedSolutionContent {
  description: string
  summary: string
  overview: string
}

type LocalizedSolutionMap = Record<string, LocalizedSolutionContent>

export const solutionCategoryLabelsByLocale: Record<
  SolutionLocale,
  Record<SolutionCategory, string>
> = {
  en: {
    frameworks: 'Frameworks',
    cms: 'CMS & Websites',
    ecommerce: 'E-commerce',
    erp: 'ERP & Business Apps',
    crm: 'CRM',
    'developer-tools': 'Developer Tools',
    'data-analytics': 'Data & Analytics'
  },
  zh: {
    frameworks: '开发框架',
    cms: 'CMS 与网站',
    ecommerce: '电商',
    erp: 'ERP 与企业应用',
    crm: 'CRM',
    'developer-tools': '开发工具',
    'data-analytics': '数据与分析'
  },
  id: {
    frameworks: 'Framework',
    cms: 'CMS & Situs Web',
    ecommerce: 'E-commerce',
    erp: 'ERP & Aplikasi Bisnis',
    crm: 'CRM',
    'developer-tools': 'Alat Developer',
    'data-analytics': 'Data & Analitik'
  }
}

export const solutionContentByLocale: Record<SolutionLocale, LocalizedSolutionMap> = {
  en: {},
  zh: {
    laravel: { description: '用于构建 Web 应用和 API 的现代 PHP 框架。', summary: 'Laravel 项目通常结合 PHP、数据库、Web 服务器以及 Redis 等可选服务。FlyEnv 可在 Windows、macOS 和 Linux 上管理应用周边的本地环境。', overview: 'Laravel 是用于构建 Web 应用和 API 的 PHP 框架。' },
    django: { description: '面向安全、数据驱动网站的高级 Python 框架。', summary: 'Django 项目通常需要 Python、数据库以及按需启用的 Redis 和反向代理。FlyEnv 可集中管理这些本地服务。', overview: 'Django 是一个面向数据库驱动 Web 应用的高级 Python 框架。' },
    fastapi: { description: '用于构建高性能 Web API 的现代 Python 框架。', summary: 'FastAPI 应用通常需要 Python 运行时，以及 API 所选择的数据库和辅助服务。FlyEnv 可统一管理本地项目环境。', overview: 'FastAPI 是一个使用现代类型提示构建 API 的 Python 框架。' },
    'spring-boot': { description: '用于构建生产级 Web 服务的 Java 框架。', summary: 'Spring Boot 服务通常使用 Java，并可能连接数据库、Redis 和本地反向代理。FlyEnv 可管理应用周边的环境服务。', overview: 'Spring Boot 是用于构建独立、生产级服务的 Java 框架。' },
    wordpress: { description: '全球流行的开源网站内容管理系统。', summary: 'WordPress 通常运行在 PHP、MySQL 或 MariaDB 与本地 Web 服务器之上。FlyEnv 可管理每个站点的环境和可选 Redis 服务。', overview: 'WordPress 是用于构建网站的开源内容管理系统。' },
    drupal: { description: '用于内容丰富、可高度定制网站的开源 CMS。', summary: 'Drupal 项目通常需要 PHP、数据库和本地 Web 服务器。FlyEnv 可让这些服务按站点保持清晰、易管理。', overview: 'Drupal 是一个适用于内容丰富且高度可配置网站的开源 CMS。' },
    ghost: { description: '面向创作者和团队的独立发布平台。', summary: 'Ghost 项目通常使用 Node.js、MySQL 和本地 Web 服务器。FlyEnv 可管理其本地运行时和服务。', overview: 'Ghost 是一个面向创作者和团队的开源发布平台。' },
    nextcloud: { description: '用于文件共享和协作的自托管平台。', summary: 'Nextcloud 通常结合 PHP、数据库、Redis、Web 服务器和 HTTPS。FlyEnv 可集中管理这些本地服务。', overview: 'Nextcloud 是一个用于文件共享和协作的自托管平台。' },
    magento: { description: '适用于在线商店的强大开源电商平台。', summary: 'Magento 开发环境通常包含 PHP、MySQL 或 MariaDB、搜索服务、Redis 和 Nginx。FlyEnv 可管理这些本地依赖。', overview: 'Magento Open Source 是用于在线商店和商业应用的开源电商平台。' },
    prestashop: { description: '面向在线商家的开源电商平台。', summary: 'PrestaShop 通常需要 PHP、MySQL 或 MariaDB、Nginx 和 HTTPS。FlyEnv 可让本地商店技术栈易于启动和维护。', overview: 'PrestaShop 是一个面向在线商家的开源电商平台。' },
    opencart: { description: '用于销售商品的简洁开源网店平台。', summary: 'OpenCart 通常运行在 PHP、MySQL 或 MariaDB 和本地 Web 服务器上。FlyEnv 可管理这些项目依赖。', overview: 'OpenCart 是一个用于构建在线商店的开源电商平台。' },
    erpnext: { description: '用于日常业务运营的开源 ERP。', summary: 'ERPNext 通常结合 Python、MariaDB、Redis、Nginx 和相关 Frappe 服务。FlyEnv 可将其作为本地技术栈统一管理。', overview: 'ERPNext 是一个用于管理业务运营的开源 ERP。' },
    odoo: { description: '开源企业应用套件。', summary: 'Odoo 通常需要 Python、PostgreSQL 和本地反向代理。FlyEnv 可为每个项目管理这些服务。', overview: 'Odoo 是一个开源企业应用套件。' },
    suitecrm: { description: '开源客户关系管理平台。', summary: 'SuiteCRM 通常使用 PHP、MySQL 或 MariaDB 以及本地 Web 服务器。FlyEnv 可管理该 CRM 环境。', overview: 'SuiteCRM 是一个开源客户关系管理平台。' },
    espocrm: { description: '面向销售、市场和支持团队的灵活 CRM。', summary: 'EspoCRM 通常结合 PHP、数据库、可选 Redis 与本地 Web 服务器。FlyEnv 可管理项目周边的服务。', overview: 'EspoCRM 是一个面向销售、市场和支持团队的开源 CRM 平台。' },
    gitea: { description: '适合团队和个人开发者的自托管 Git 服务。', summary: 'Gitea 通常使用 Go、受支持的数据库、Nginx 和 HTTPS。FlyEnv 可管理其本地服务环境。', overview: 'Gitea 是一个适合团队和个人开发者的开源自托管 Git 服务。' },
    strapi: { description: '用于内容 API 的开源无头 CMS。', summary: 'Strapi 通常需要 Node.js、PostgreSQL 或 MySQL、Redis 和 HTTPS。FlyEnv 可让这些本地服务保持可控。', overview: 'Strapi 是一个用于构建内容 API 的开源无头 CMS。' },
    directus: { description: '将 SQL 数据库转为 API 的数据平台。', summary: 'Directus 通常使用 Node.js、数据库、Redis、反向代理和 HTTPS。FlyEnv 可管理本地 API 项目的依赖。', overview: 'Directus 是一个将 SQL 数据库转为 API 和应用的数据平台。' },
    matomo: { description: '强调数据所有权的开源网站分析平台。', summary: 'Matomo 通常需要 PHP、MySQL 或 MariaDB、Nginx 和 HTTPS。FlyEnv 可管理本地分析环境。', overview: 'Matomo 是一个强调数据所有权的开源网站分析平台。' },
    metabase: { description: '开源商业智能和数据探索工具。', summary: 'Metabase 通常使用 Java、PostgreSQL、Nginx 和 HTTPS。FlyEnv 可管理其本地服务和项目环境。', overview: 'Metabase 是一个开源商业智能和数据探索工具。' },
    nextjs: { description: '用于全栈 Web 应用和服务端渲染的 React 框架。', summary: 'Next.js 项目通常使用 Node.js、数据库、可选 Redis 与反向代理。FlyEnv 可按项目管理这些本地服务。', overview: 'Next.js 是一个用于构建全栈 React 应用的框架。' },
    nestjs: { description: '用于构建可扩展服务端应用的 TypeScript 框架。', summary: 'NestJS 服务通常使用 Node.js、数据库、Redis 与反向代理。FlyEnv 可统一管理本地 API 依赖。', overview: 'NestJS 是一个结构化的 TypeScript 服务端框架。' },
    nuxt: { description: '用于全栈 Web 应用和服务端渲染的 Vue 框架。', summary: 'Nuxt 项目运行在 Node.js 上，并可按需使用数据库和本地代理。FlyEnv 可管理其项目环境。', overview: 'Nuxt 是一个用于构建全栈 Vue 应用的框架。' },
    express: { description: '用于 Web 应用和 API 的轻量级 Node.js 框架。', summary: 'Express 项目通常使用 Node.js、数据库、可选 Redis 与反向代理。FlyEnv 可管理这些本地依赖。', overview: 'Express 是一个简洁的 Node.js Web 框架。' },
    'react-vite': { description: '使用 Vite 快速开发 React 应用。', summary: 'React + Vite 项目使用 Node.js 进行开发和构建，并可结合本地 Web 服务器与 HTTPS。', overview: 'React + Vite 是现代 React 前端开发工作流。' },
    'vue-vite': { description: '使用 Vite 开发现代 Vue 3 应用。', summary: 'Vue 3 + Vite 项目使用 Node.js 进行开发和构建，FlyEnv 可管理运行时和本地站点。', overview: 'Vue 3 + Vite 是现代 Vue 前端开发工作流。' },
    sveltekit: { description: '用于快速全栈 Web 应用的 Svelte 框架。', summary: 'SvelteKit 项目使用 Node.js，并可结合数据库与反向代理。FlyEnv 可管理本地全栈依赖。', overview: 'SvelteKit 是一个全栈 Svelte 应用框架。' },
    adonisjs: { description: '面向全栈 Web 应用的 TypeScript 优先 Node.js 框架。', summary: 'AdonisJS 通常使用 Node.js、MySQL 或 PostgreSQL、Redis 与 Web 服务器。', overview: 'AdonisJS 是一个 TypeScript 优先的 Node.js 全栈框架。' },
    hono: { description: '适用于 JavaScript 和 TypeScript 运行时的小型高性能 Web 框架。', summary: 'Hono 可运行在 Node.js 或 Bun 上，并按需连接数据库和本地代理。', overview: 'Hono 是一个轻量级的多运行时 Web 框架。' },
    payload: { description: '使用 TypeScript 构建的无头 CMS 和应用框架。', summary: 'Payload CMS 通常使用 Node.js、MongoDB 或 PostgreSQL、Redis 与 HTTPS。', overview: 'Payload 是一个 TypeScript 无头 CMS。' },
    medusa: { description: '基于 Node.js 和 TypeScript 的可组合电商平台。', summary: 'Medusa 通常使用 Node.js、PostgreSQL、Redis 与反向代理。FlyEnv 可管理本地电商技术栈。', overview: 'Medusa 是一个开源可组合电商平台。' },
    'node-red': { description: '用于事件驱动集成和自动化的流程式编程工具。', summary: 'Node-RED 运行在 Node.js 上，可结合本地域名和 HTTPS 测试 Webhook 与集成。', overview: 'Node-RED 是一个开源流程式自动化工具。' },
    flask: { description: '用于 Web 应用和 API 的轻量级 Python 框架。', summary: 'Flask 项目通常使用 Python、数据库、可选 Redis 与反向代理。', overview: 'Flask 是一个轻量级 Python Web 框架。' },
    'apache-superset': { description: '开源数据探索和商业智能平台。', summary: 'Apache Superset 通常使用 Python、元数据数据库、Redis 与反向代理。', overview: 'Apache Superset 是开源 BI 与数据分析平台。' },
    quarkus: { description: '面向云原生应用和 API 的 Java 框架。', summary: 'Quarkus 服务通常使用 Java、数据库、Redis 与本地代理。FlyEnv 可管理服务依赖。', overview: 'Quarkus 是一个云原生 Java 框架。' },
    keycloak: { description: '面向应用与 API 的开源身份和访问管理平台。', summary: 'Keycloak 使用 Java、数据库和本地 HTTPS 域名，适合测试登录与重定向流程。', overview: 'Keycloak 是一个开源身份管理平台。' },
    gin: { description: '用于 Web 服务和 API 的高性能 Go 框架。', summary: 'Gin 服务通常使用 Go、数据库、可选 Redis 与反向代理。', overview: 'Gin 是一个高性能 Go Web 框架。' },
    pocketbase: { description: '包含嵌入式数据库、API、认证和文件存储的后端平台。', summary: 'PocketBase 使用 Go 和内置 SQLite，可结合本地域名和 HTTPS 提供后端服务。', overview: 'PocketBase 是一个轻量级后端平台。' },
    'ruby-on-rails': { description: '用于数据库驱动 Web 应用的全栈 Ruby 框架。', summary: 'Rails 项目通常使用 Ruby、PostgreSQL、Redis 与反向代理。', overview: 'Ruby on Rails 是一个全栈 Ruby Web 框架。' },
    'aspnet-core': { description: '用于现代 Web 应用和 API 的跨平台 .NET 框架。', summary: 'ASP.NET Core 项目通常使用 .NET、数据库、Redis 与反向代理。', overview: 'ASP.NET Core 是一个跨平台 Web 应用框架。' }
  },
  id: {
    laravel: { description: 'Framework PHP modern untuk aplikasi web dan API.', summary: 'Proyek Laravel memadukan PHP, database, server web, dan layanan opsional seperti Redis. FlyEnv mengelola lingkungan lokal aplikasi di Windows, macOS, dan Linux.', overview: 'Laravel adalah framework PHP untuk membangun aplikasi web dan API.' },
    django: { description: 'Framework Python tingkat tinggi untuk situs aman berbasis database.', summary: 'Proyek Django biasanya memerlukan Python, database, serta Redis dan reverse proxy bila diperlukan. FlyEnv menyatukan pengelolaan layanan lokal tersebut.', overview: 'Django adalah framework Python tingkat tinggi untuk aplikasi web berbasis database.' },
    fastapi: { description: 'Framework Python modern untuk API web berperforma tinggi.', summary: 'Aplikasi FastAPI membutuhkan runtime Python serta database dan layanan pendukung yang dipilih API. FlyEnv mengelola lingkungan proyek lokalnya.', overview: 'FastAPI adalah framework Python untuk membangun API dengan type hint modern.' },
    'spring-boot': { description: 'Framework Java untuk layanan web siap produksi.', summary: 'Layanan Spring Boot biasanya memakai Java dan dapat terhubung ke database, Redis, serta reverse proxy lokal. FlyEnv mengelola layanan lingkungan di sekitarnya.', overview: 'Spring Boot adalah framework Java untuk membangun layanan mandiri yang siap produksi.' },
    wordpress: { description: 'CMS open-source populer untuk membangun situs web.', summary: 'WordPress biasanya berjalan dengan PHP, MySQL atau MariaDB, dan server web lokal. FlyEnv mengelola lingkungan situs serta Redis opsional.', overview: 'WordPress adalah sistem manajemen konten open-source untuk membangun situs web.' },
    drupal: { description: 'CMS open-source fleksibel untuk situs kaya konten.', summary: 'Proyek Drupal umumnya memerlukan PHP, database, dan server web lokal. FlyEnv menjaga layanan tersebut rapi dan mudah dikelola per situs.', overview: 'Drupal adalah CMS open-source untuk situs kaya konten dan sangat dapat dikonfigurasi.' },
    ghost: { description: 'Platform penerbitan independen untuk kreator dan tim.', summary: 'Proyek Ghost biasanya memakai Node.js, MySQL, dan server web lokal. FlyEnv mengelola runtime dan layanan lokalnya.', overview: 'Ghost adalah platform penerbitan open-source untuk kreator dan tim.' },
    nextcloud: { description: 'Platform self-hosted untuk berbagi file dan kolaborasi.', summary: 'Nextcloud biasanya memadukan PHP, database, Redis, server web, dan HTTPS. FlyEnv mengelola layanan lokal tersebut dari satu tempat.', overview: 'Nextcloud adalah platform self-hosted untuk berbagi file dan kolaborasi.' },
    magento: { description: 'Platform e-commerce open-source yang kuat untuk toko online.', summary: 'Lingkungan Magento biasanya berisi PHP, MySQL atau MariaDB, layanan pencarian, Redis, dan Nginx. FlyEnv mengelola dependensi lokal ini.', overview: 'Magento Open Source adalah platform e-commerce untuk toko online dan aplikasi perdagangan.' },
    prestashop: { description: 'Platform e-commerce open-source untuk pedagang online.', summary: 'PrestaShop biasanya memerlukan PHP, MySQL atau MariaDB, Nginx, dan HTTPS. FlyEnv membuat stack toko lokal mudah dijalankan dan dirawat.', overview: 'PrestaShop adalah platform e-commerce open-source untuk pedagang online.' },
    opencart: { description: 'Platform toko online open-source yang sederhana.', summary: 'OpenCart biasanya berjalan dengan PHP, MySQL atau MariaDB, dan server web lokal. FlyEnv mengelola dependensi proyek tersebut.', overview: 'OpenCart adalah platform e-commerce open-source untuk membangun toko online.' },
    erpnext: { description: 'ERP open-source untuk operasi bisnis sehari-hari.', summary: 'ERPNext biasanya memadukan Python, MariaDB, Redis, Nginx, dan layanan Frappe. FlyEnv mengelolanya sebagai satu stack lokal.', overview: 'ERPNext adalah ERP open-source untuk mengelola operasi bisnis.' },
    odoo: { description: 'Suite aplikasi bisnis open-source.', summary: 'Odoo biasanya memerlukan Python, PostgreSQL, dan reverse proxy lokal. FlyEnv mengelola layanan ini untuk setiap proyek.', overview: 'Odoo adalah suite aplikasi bisnis open-source.' },
    suitecrm: { description: 'Platform manajemen hubungan pelanggan open-source.', summary: 'SuiteCRM biasanya memakai PHP, MySQL atau MariaDB, serta server web lokal. FlyEnv mengelola lingkungan CRM tersebut.', overview: 'SuiteCRM adalah platform manajemen hubungan pelanggan open-source.' },
    espocrm: { description: 'CRM fleksibel untuk tim penjualan, pemasaran, dan dukungan.', summary: 'EspoCRM biasanya memadukan PHP, database, Redis opsional, dan server web lokal. FlyEnv mengelola layanan di sekitar proyek.', overview: 'EspoCRM adalah platform CRM open-source untuk tim penjualan, pemasaran, dan dukungan.' },
    gitea: { description: 'Layanan Git self-hosted untuk tim dan developer individu.', summary: 'Gitea biasanya menggunakan Go, database yang didukung, Nginx, dan HTTPS. FlyEnv mengelola lingkungan layanannya secara lokal.', overview: 'Gitea adalah layanan Git self-hosted open-source untuk tim dan developer individu.' },
    strapi: { description: 'CMS headless open-source untuk API konten.', summary: 'Strapi biasanya memerlukan Node.js, PostgreSQL atau MySQL, Redis, dan HTTPS. FlyEnv menjaga layanan lokal ini tetap terkendali.', overview: 'Strapi adalah CMS headless open-source untuk membangun API konten.' },
    directus: { description: 'Platform data untuk mengubah database SQL menjadi API.', summary: 'Directus biasanya menggunakan Node.js, database, Redis, reverse proxy, dan HTTPS. FlyEnv mengelola dependensi proyek API lokal ini.', overview: 'Directus adalah platform data yang mengubah database SQL menjadi API dan aplikasi.' },
    matomo: { description: 'Platform analitik web open-source dengan kepemilikan data.', summary: 'Matomo biasanya memerlukan PHP, MySQL atau MariaDB, Nginx, dan HTTPS. FlyEnv mengelola lingkungan analitik lokalnya.', overview: 'Matomo adalah platform analitik web open-source yang berfokus pada kepemilikan data.' },
    metabase: { description: 'Alat intelijen bisnis dan eksplorasi data open-source.', summary: 'Metabase biasanya menggunakan Java, PostgreSQL, Nginx, dan HTTPS. FlyEnv mengelola layanan dan lingkungan proyek lokalnya.', overview: 'Metabase adalah alat intelijen bisnis dan eksplorasi data open-source.' },
    nextjs: { description: 'Framework React untuk aplikasi web full-stack dan rendering server.', summary: 'Proyek Next.js biasanya memakai Node.js, database, Redis opsional, dan reverse proxy lokal.', overview: 'Next.js adalah framework untuk aplikasi React full-stack.' },
    nestjs: { description: 'Framework TypeScript untuk aplikasi server-side yang terstruktur dan skalabel.', summary: 'Layanan NestJS biasanya memakai Node.js, database, Redis, dan reverse proxy.', overview: 'NestJS adalah framework server-side TypeScript yang terstruktur.' },
    nuxt: { description: 'Framework Vue untuk aplikasi web full-stack dan rendering server.', summary: 'Proyek Nuxt berjalan di Node.js serta dapat memakai database dan proxy lokal.', overview: 'Nuxt adalah framework untuk aplikasi Vue full-stack.' },
    express: { description: 'Framework Node.js minimal untuk aplikasi web dan API.', summary: 'Proyek Express biasanya memakai Node.js, database, Redis opsional, dan reverse proxy.', overview: 'Express adalah framework web Node.js yang ringan.' },
    'react-vite': { description: 'Pengembangan aplikasi React cepat dengan Vite.', summary: 'React + Vite memakai Node.js untuk development dan build, serta server web lokal bila diperlukan.', overview: 'React + Vite adalah alur kerja frontend React modern.' },
    'vue-vite': { description: 'Pengembangan aplikasi Vue 3 modern dengan Vite.', summary: 'Vue 3 + Vite memakai Node.js untuk development dan build; FlyEnv mengelola runtime serta situs lokal.', overview: 'Vue 3 + Vite adalah alur kerja frontend Vue modern.' },
    sveltekit: { description: 'Framework Svelte untuk aplikasi web full-stack yang cepat.', summary: 'SvelteKit memakai Node.js, dan dapat dipadukan dengan database serta reverse proxy.', overview: 'SvelteKit adalah framework aplikasi Svelte full-stack.' },
    adonisjs: { description: 'Framework Node.js TypeScript-first untuk aplikasi web full-stack.', summary: 'AdonisJS biasanya memakai Node.js, MySQL atau PostgreSQL, Redis, dan server web.', overview: 'AdonisJS adalah framework full-stack Node.js TypeScript-first.' },
    hono: { description: 'Framework web kecil dan cepat untuk runtime JavaScript dan TypeScript.', summary: 'Hono dapat berjalan di Node.js atau Bun dengan database dan proxy sesuai kebutuhan proyek.', overview: 'Hono adalah framework web ringan multi-runtime.' },
    payload: { description: 'CMS headless dan framework aplikasi berbasis TypeScript.', summary: 'Payload CMS biasanya memakai Node.js, MongoDB atau PostgreSQL, Redis, dan HTTPS.', overview: 'Payload adalah CMS headless TypeScript.' },
    medusa: { description: 'Platform e-commerce composable berbasis Node.js dan TypeScript.', summary: 'Medusa biasanya memakai Node.js, PostgreSQL, Redis, dan reverse proxy.', overview: 'Medusa adalah platform e-commerce composable open-source.' },
    'node-red': { description: 'Alat pemrograman flow-based untuk integrasi dan otomasi.', summary: 'Node-RED berjalan di Node.js dan dapat memakai domain lokal serta HTTPS untuk menguji webhook.', overview: 'Node-RED adalah alat otomasi flow-based open-source.' },
    flask: { description: 'Framework Python ringan untuk aplikasi web dan API.', summary: 'Proyek Flask biasanya memakai Python, database, Redis opsional, dan reverse proxy.', overview: 'Flask adalah framework web Python ringan.' },
    'apache-superset': { description: 'Platform eksplorasi data dan business intelligence open-source.', summary: 'Apache Superset biasanya memakai Python, database metadata, Redis, dan reverse proxy.', overview: 'Apache Superset adalah platform BI dan analitik open-source.' },
    quarkus: { description: 'Framework Java untuk aplikasi dan API cloud-native.', summary: 'Layanan Quarkus biasanya memakai Java, database, Redis, dan proxy lokal.', overview: 'Quarkus adalah framework Java cloud-native.' },
    keycloak: { description: 'Platform manajemen identitas dan akses open-source untuk aplikasi dan API.', summary: 'Keycloak memakai Java, database, dan domain HTTPS lokal untuk menguji alur autentikasi.', overview: 'Keycloak adalah platform manajemen identitas open-source.' },
    gin: { description: 'Framework Go berperforma tinggi untuk layanan web dan API.', summary: 'Layanan Gin biasanya memakai Go, database, Redis opsional, dan reverse proxy.', overview: 'Gin adalah framework web Go berperforma tinggi.' },
    pocketbase: { description: 'Platform backend dengan database tertanam, API, auth, dan penyimpanan file.', summary: 'PocketBase memakai Go dan SQLite bawaan, serta dapat diproksikan lewat domain lokal dan HTTPS.', overview: 'PocketBase adalah platform backend ringkas.' },
    'ruby-on-rails': { description: 'Framework Ruby full-stack untuk aplikasi web berbasis database.', summary: 'Proyek Rails biasanya memakai Ruby, PostgreSQL, Redis, dan reverse proxy.', overview: 'Ruby on Rails adalah framework web Ruby full-stack.' },
    'aspnet-core': { description: 'Framework .NET lintas platform untuk aplikasi web dan API modern.', summary: 'Proyek ASP.NET Core biasanya memakai .NET, database, Redis, dan reverse proxy.', overview: 'ASP.NET Core adalah framework aplikasi web lintas platform.' }
  }
}
