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
    metabase: { description: '开源商业智能和数据探索工具。', summary: 'Metabase 通常使用 Java、PostgreSQL、Nginx 和 HTTPS。FlyEnv 可管理其本地服务和项目环境。', overview: 'Metabase 是一个开源商业智能和数据探索工具。' }
  },
  id: {
    laravel: { description: 'Framework PHP modern untuk aplikasi web dan API.', summary: 'Proyek Laravel umumnya memadukan PHP, database, server web, dan layanan opsional seperti Redis. FlyEnv mengelola lingkungan lokal di sekitar aplikasi pada Windows, macOS, dan Linux.', overview: 'Laravel adalah framework PHP untuk membangun aplikasi web dan API.' },
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
    metabase: { description: 'Alat intelijen bisnis dan eksplorasi data open-source.', summary: 'Metabase biasanya menggunakan Java, PostgreSQL, Nginx, dan HTTPS. FlyEnv mengelola layanan dan lingkungan proyek lokalnya.', overview: 'Metabase adalah alat intelijen bisnis dan eksplorasi data open-source.' }
  }
}
