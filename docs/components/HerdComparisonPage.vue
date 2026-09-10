<script setup lang="ts">
  import ComparisonLoopPage from './ComparisonLoopPage.vue'
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' }>()
  const locale = props.locale || 'en'
  const localeText = (value: any, locale: string): any => {
    const maps: Record<string, Record<string, string>> = {
      zh: {
        'Three key differences': '三个关键差异', 'Different development models': '不同的开发模式', 'Feature comparison': '功能对比', 'Which one should you choose?': '应该选择哪一个？', 'Frequently asked questions': '常见问题', 'Choose Laravel Herd if': '适合选择 Laravel Herd 的情况', 'Choose FlyEnv if': '适合选择 FlyEnv 的情况', Project: '项目', 'Built-in': '内置', 'Not included': '未包含',
        'Laravel-first development environment': '以 Laravel 为先的开发环境', 'Optimized around Laravel development (macOS / Windows)': '围绕 Laravel 开发优化（macOS / Windows）', 'One workspace across different stacks (macOS, Windows, Linux)': '跨不同技术堆栈的统一工作区（macOS、Windows、Linux）', 'Laravel-first workflow or general-purpose local development workspace?': 'Laravel 优先工作流，还是通用本地开发工作区？',
        'Laravel Herd provides one of the most polished local development workflows for Laravel and PHP developers, with first-party ecosystem integrations such as Forge, herd.yml and Reverb. FlyEnv takes a broader approach: one local development workspace for PHP, Node.js, Python, Go, Java and infrastructure services across different kinds of projects.': 'Laravel Herd 为 Laravel 和 PHP 开发者提供精致的本地开发工作流，并集成 Forge、herd.yml 和 Reverb 等官方生态工具。FlyEnv 采取更广泛的方式：在一个本地工作区中管理 PHP、Node.js、Python、Go、Java 及基础设施服务，适用于不同类型的项目。',
        'Free and open source': '免费且开源', 'Laravel Site': 'Laravel 站点', 'my-app.test · PHP 8.4 pinned per site': 'my-app.test · 每个站点固定 PHP 8.4', 'Herd Pro services': 'Herd Pro 服务', 'Managed services for the site': '站点托管服务', 'herd.yml shares the Laravel environment; Forge integration handles deployment.': 'herd.yml 共享 Laravel 环境；Forge 集成负责部署。', 'Laravel-first, per-site PHP (macOS / Windows)': 'Laravel 优先、按站点配置 PHP（macOS / Windows）', 'Laravel project': 'Laravel 项目', 'PHP 7.4–8.5, pinned per site': 'PHP 7.4–8.5，每个站点固定版本', 'Nginx with automatic .test domains': 'Nginx 与自动 .test 域名', 'herd.yml shared environment config': 'herd.yml 共享环境配置', 'Laravel Reverb and Herd Pro services': 'Laravel Reverb 和 Herd Pro 服务', 'Laravel Forge deployment integration': 'Laravel Forge 部署集成', 'One workspace across different stacks': '跨不同技术堆栈的统一工作区', 'Laravel, Node.js, Java and more — each project keeps its own stack in one app.': 'Laravel、Node.js、Java 等项目均可在同一应用中保留各自的技术堆栈。',
        'Why developers compare FlyEnv and Laravel Herd': '为什么开发者会比较 FlyEnv 和 Laravel Herd', 'Both run fast, native PHP environments. The real difference is what each product is centered around.': '两者都能运行快速、原生的 PHP 环境，真正的差异在于产品核心定位。', 'Laravel-first vs framework-agnostic': 'Laravel 优先与框架无关', 'Herd is built around Laravel, PHP, Composer, Forge, Reverb and herd.yml. FlyEnv covers Laravel too, but also WordPress, Node.js, Python, Go, Java / Tomcat and self-hosted apps like ERPNext, Gitea or Keycloak. The difference is not feature count — it is the center of the product.': 'Herd 围绕 Laravel、PHP、Composer、Forge、Reverb 和 herd.yml 构建。FlyEnv 同样支持 Laravel，也支持 WordPress、Node.js、Python、Go、Java / Tomcat，以及 ERPNext、Gitea、Keycloak 等自托管应用。差异不在功能数量，而在产品核心。', 'Laravel ecosystem integration vs general infrastructure workspace': 'Laravel 生态集成与通用基础设施工作区', 'Herd offers first-party Laravel integration: Forge deployment, herd.yml, Reverb and Laravel-focused tooling. FlyEnv instead offers broader runtime families, more database and service modules, multiple web servers, bundled database GUI tools and Startup Groups.': 'Herd 提供官方 Laravel 集成：Forge 部署、herd.yml、Reverb 和 Laravel 专用工具。FlyEnv 则提供更多运行时系列、数据库与服务模块、多种 Web 服务器、捆绑的数据库 GUI 工具和启动组。', 'Convention-driven setup vs modular environment composition': '约定驱动设置与模块化环境组合', 'Laravel conventions reduce setup work for Laravel projects: parked directories, per-site PHP versions and herd.yml come out of the box. FlyEnv instead lets you choose and combine runtimes, web servers, databases and services according to each project’s stack — Laravel or not.': 'Laravel 约定可减少项目设置工作：停放目录、按站点 PHP 版本和 herd.yml 开箱即用。FlyEnv 则允许根据每个项目的技术堆栈自由组合运行时、Web 服务器、数据库和服务，无论是否使用 Laravel。',
        'Deeply optimized for Laravel and PHP development': '针对 Laravel 和 PHP 开发深度优化', 'Per-site PHP version pinning': '按站点固定 PHP 版本', 'herd.yml shares Laravel environment configuration': 'herd.yml 共享 Laravel 环境配置', 'Laravel Forge integration': 'Laravel Forge 集成', 'Managed databases and services via Herd Pro': '通过 Herd Pro 管理数据库和服务', 'macOS and Windows only': '仅支持 macOS 和 Windows',
        'Multiple runtime families': '多个运行时系列', 'PHP, Node.js, Python, Go, Java': 'PHP、Node.js、Python、Go、Java', 'Install and manage PHP, Node.js, Python, Go and Java versions side by side, and use whichever runtime each project needs.': '并行安装和管理 PHP、Node.js、Python、Go、Java 版本，为每个项目使用所需运行时。', 'FlyEnv runtime version installation interface': 'FlyEnv 运行时版本安装界面', 'Integrated infrastructure modules': '集成基础设施模块', 'Databases, cache, storage, mail': '数据库、缓存、存储、邮件', 'Databases, Redis, object storage, mail testing and search engines run as managed modules next to your projects.': '数据库、Redis、对象存储、邮件测试和搜索引擎均可作为托管模块与项目并行运行。', 'FlyEnv database management interface': 'FlyEnv 数据库管理界面', 'Compose a complete project environment': '组合完整的项目环境', 'Per-project service stacks': '按项目划分的服务堆栈', 'Start PHP, MySQL, Redis, Mailpit and the other services a project depends on together with a Startup Group — one click starts the whole stack.': '通过启动组同时启动项目依赖的 PHP、MySQL、Redis、Mailpit 等服务，一键启动整个堆栈。', 'FlyEnv service management interface': 'FlyEnv 服务管理界面',
        Platforms: '平台', 'macOS, Windows': 'macOS、Windows', 'macOS, Windows, Linux': 'macOS、Windows、Linux', 'PHP versions': 'PHP 版本', 'PHP 7.4–8.5 with per-site pinning': 'PHP 7.4–8.5，按站点固定', 'Multiple managed versions, assigned per project': '多个托管版本，按项目分配', 'Node.js / other runtimes': 'Node.js / 其他运行时', 'Node.js via nvm (Herd Pro); PHP-focused overall': '通过 nvm 提供 Node.js（Herd Pro）；整体以 PHP 为主', 'Node.js, Python, Go, Java, Ruby, Rust and more': 'Node.js、Python、Go、Java、Ruby、Rust 等', 'Web servers': 'Web 服务器', Nginx: 'Nginx', 'Nginx, Apache, Caddy': 'Nginx、Apache、Caddy', Databases: '数据库', 'MySQL, MariaDB, PostgreSQL, MongoDB (Herd Pro)': 'MySQL、MariaDB、PostgreSQL、MongoDB（Herd Pro）', 'Multiple built-in database modules': '多个内置数据库模块', 'Redis / cache': 'Redis / 缓存', 'Via Herd Pro services': '通过 Herd Pro 服务', 'Built-in Redis and Memcached modules': '内置 Redis 和 Memcached 模块', 'Search engines': '搜索引擎', 'Typesense, Meilisearch (Herd Pro)': 'Typesense、Meilisearch（Herd Pro）', 'Meilisearch, Typesense and more': 'Meilisearch、Typesense 等', 'Object storage': '对象存储', 'MinIO, RustFS (Herd Pro)': 'MinIO、RustFS（Herd Pro）', 'Managed MinIO / RustFS modules': '托管 MinIO / RustFS 模块', 'Local domains and HTTPS': '本地域名和 HTTPS', 'Automatic .test domains and local HTTPS': '自动 .test 域名和本地 HTTPS', 'Custom domains and HTTPS per project': '按项目配置自定义域名和 HTTPS', 'Laravel ecosystem integration': 'Laravel 生态集成', 'herd.yml, Laravel Forge, Laravel Reverb': 'herd.yml、Laravel Forge、Laravel Reverb', 'Mail testing': '邮件测试', 'Built-in SMTP mail catcher and email client (Herd Pro)': '内置 SMTP 邮件捕获器和邮件客户端（Herd Pro）', 'Built-in Mailpit module': '内置 Mailpit 模块', 'Startup groups': '启动组', 'Built-in project services': '内置项目服务', 'Database GUI tools': '数据库 GUI 工具', 'No bundled GUI; herd db opens site databases in clients like TablePlus': '不捆绑 GUI；herd db 会在 TablePlus 等客户端中打开站点数据库', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin、pgAdmin、DbGate 等', 'AI / MCP integration': 'AI / MCP 集成', 'Built-in MCP server (herd-mcp) for AI coding agents': '内置 MCP 服务器（herd-mcp），用于 AI 编程代理', 'FlyEnv MCP Server and AI CLI modules': 'FlyEnv MCP 服务器和 AI CLI 模块',
        'Typical workflow: switching between Laravel and non-Laravel projects': '典型流程：在 Laravel 与非 Laravel 项目间切换', 'With Laravel Herd': '使用 Laravel Herd', 'Create or open the Laravel project': '创建或打开 Laravel 项目', 'Herd serves the site with its pinned PHP version': 'Herd 使用固定的 PHP 版本提供站点服务', 'Start the Herd Pro services the app needs': '启动应用所需的 Herd Pro 服务', 'Share the environment via herd.yml and Laravel tooling': '通过 herd.yml 和 Laravel 工具共享环境', 'A Node.js or Java project is outside Herd’s primary workflow — another tool covers that stack': 'Node.js 或 Java 项目不属于 Herd 的主要工作流，需要其他工具支持',
        'Laravel and PHP make up most of your development work.': '你的大部分开发工作围绕 Laravel 和 PHP。', 'You want a polished workflow designed around Laravel conventions.': '你希望使用围绕 Laravel 约定设计的精致工作流。', 'You value deep Laravel ecosystem integrations such as Forge and herd.yml.': '你重视 Forge、herd.yml 等深度 Laravel 生态集成。', 'Herd Pro\'s managed services cover the infrastructure your applications usually need.': 'Herd Pro 的托管服务能满足应用通常所需的基础设施。', 'You prefer a tool that stays closely aligned with the Laravel ecosystem.': '你偏好与 Laravel 生态紧密结合的工具。', 'You regularly work outside Laravel and PHP.': '你经常处理 Laravel 和 PHP 之外的项目。', 'You use PHP, Node.js, Python, Go or Java across different projects.': '你在不同项目中使用 PHP、Node.js、Python、Go 或 Java。', 'Your projects require a wider mix of databases and infrastructure services.': '你的项目需要更多数据库和基础设施服务。', 'You want different application stacks managed from one desktop workspace.': '你希望在一个桌面工作区管理不同应用堆栈。', 'You value Startup Groups, integrated management tools and FlyEnv\'s MCP workflow.': '你重视启动组、集成管理工具和 FlyEnv 的 MCP 工作流。',
        
        
        
          
                          
        'If nearly all of your work is Laravel, Herd is the more specialized tool. If your week spans several stacks, one workspace matters more than Laravel-specific extras.': '如果你的工作几乎全部围绕 Laravel，Herd 是更专业的工具。如果你每周需要处理多种技术堆栈，一个统一工作区比 Laravel 专属功能更重要。',
        'Should I switch from Laravel Herd to FlyEnv?': '我应该从 Laravel Herd 切换到 FlyEnv 吗？', 'Not necessarily. If you mostly build Laravel applications on macOS or Windows, Herd is an excellent, deeply integrated tool. FlyEnv becomes more useful when you work across several languages and frameworks, need Linux support, or want more infrastructure modules built in.': '不一定。如果你主要在 macOS 或 Windows 上构建 Laravel 应用，Herd 是优秀且深度集成的工具。当你需要跨多种语言和框架、Linux 支持或更多内置基础设施模块时，FlyEnv 会更有价值。', 'Does FlyEnv support Laravel development?': 'FlyEnv 支持 Laravel 开发吗？', 'Yes. FlyEnv runs complete Laravel stacks: multiple PHP versions, Nginx, Apache or Caddy, MySQL, MariaDB, PostgreSQL, Redis, queues and local domains with HTTPS. What it does not include is Laravel-specific tooling such as herd.yml or Forge integration.': '支持。FlyEnv 可运行完整 Laravel 堆栈：多个 PHP 版本、Nginx、Apache 或 Caddy、MySQL、MariaDB、PostgreSQL、Redis、队列以及带 HTTPS 的本地域名。但不包含 herd.yml 或 Forge 集成等 Laravel 专属工具。', 'Can FlyEnv replace Herd Pro services?': 'FlyEnv 能替代 Herd Pro 服务吗？', 'For local development, largely yes. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense and Meilisearch are available as built-in FlyEnv modules rather than a paid add-on tier, and FlyEnv’s Mailpit module covers the same local mail testing as Herd Pro’s mail server. Herd Pro also includes Laravel-specific extras like Reverb and the debug dump window, which FlyEnv does not replicate.': '对于本地开发，大部分情况下可以。MySQL、MariaDB、PostgreSQL、MongoDB、Redis、MinIO、RustFS、Typesense 和 Meilisearch 都是 FlyEnv 的内置模块，无需付费附加层；FlyEnv 的 Mailpit 模块也能完成 Herd Pro 邮件服务器的本地邮件测试。Herd Pro 还包含 Reverb 和调试转储窗口等 Laravel 专属功能，FlyEnv 不提供这些功能。', 'Does FlyEnv support herd.yml or Laravel Forge?': 'FlyEnv 支持 herd.yml 或 Laravel Forge 吗？', 'No. herd.yml and Forge integration are Laravel-ecosystem features of Herd. FlyEnv instead uses per-project site configuration and Startup Groups to keep each project’s services together.': '不支持。herd.yml 和 Forge 集成是 Herd 的 Laravel 生态功能。FlyEnv 使用按项目的站点配置和启动组，将每个项目的服务集中管理。', 'Can I run Node.js, Python or Java projects with FlyEnv?': 'FlyEnv 能运行 Node.js、Python 或 Java 项目吗？', 'Yes. FlyEnv manages Node.js, Python, Go, Java and other runtimes next to PHP, so non-Laravel projects live in the same workspace as your Laravel apps.': '可以。FlyEnv 在 PHP 旁管理 Node.js、Python、Go、Java 等运行时，因此非 Laravel 项目可与 Laravel 应用共存于同一工作区。', 'Does FlyEnv work on Linux?': 'FlyEnv 支持 Linux 吗？', 'Yes. FlyEnv supports macOS, Windows and Linux. Laravel Herd currently supports macOS and Windows.': '支持。FlyEnv 支持 macOS、Windows 和 Linux；Laravel Herd 目前支持 macOS 和 Windows。', 'Can I keep my existing Laravel projects?': '可以保留现有 Laravel 项目吗？', 'Yes. Point a FlyEnv local site at your existing project directory, pick the PHP version and services it needs, and keep working — no application rewrite is required in most cases.': '可以。将 FlyEnv 本地站点指向现有项目目录，选择所需 PHP 版本和服务即可继续工作，大多数情况下无需重写应用。', 'Can I use Herd and FlyEnv together?': '可以同时使用 Herd 和 FlyEnv 吗？', 'Yes. Some developers keep Herd for Laravel-focused work and use FlyEnv for Node.js, Java, Python or infrastructure-heavy projects. Just avoid running two web servers or databases on the same ports at the same time.': '可以。一些开发者保留 Herd 处理 Laravel 工作，同时使用 FlyEnv 处理 Node.js、Java、Python 或基础设施密集型项目。只要避免同时运行占用相同端口的两个 Web 服务器或数据库即可。',
        'Manage more than Laravel projects in one local workspace': '在一个本地工作区管理不止 Laravel 项目', 'Keep Laravel, Node.js, Python, Go, Java and their local services in one development workspace.': '在一个开发工作区中管理 Laravel、Node.js、Python、Go、Java 及其本地服务。', 'With FlyEnv': '使用 FlyEnv', 'Laravel project → PHP, Nginx, MySQL and Redis': 'Laravel 项目 → PHP、Nginx、MySQL 和 Redis', 'Node.js app → Node.js and PostgreSQL': 'Node.js 应用 → Node.js 和 PostgreSQL', 'Python app → Python 和 Redis': 'Python 应用 → Python 和 Redis', 'Java app → Tomcat and MySQL': 'Java 应用 → Tomcat 和 MySQL', 'Manage all of them from the same workspace': '在同一工作区管理所有项目', 'Cross-platform (macOS, Windows, Linux)': '跨平台（macOS、Windows、Linux）', 'Multiple runtime families and service versions': '多个运行时系列和服务版本', 'Databases, cache, object storage and mail testing built in': '内置数据库、缓存、对象存储和邮件测试', 'Each project keeps its own runtime and service configuration': '每个项目保留独立的运行时和服务配置'
      },
      id: {
        'Three key differences': 'Tiga perbedaan utama', 'Different development models': 'Model pengembangan yang berbeda', 'Feature comparison': 'Perbandingan fitur', 'Which one should you choose?': 'Mana yang harus dipilih?', 'Frequently asked questions': 'Pertanyaan umum', 'Choose Laravel Herd if': 'Pilih Laravel Herd jika', 'Choose FlyEnv if': 'Pilih FlyEnv jika', Project: 'Proyek', 'Built-in': 'Bawaan', 'Not included': 'Tidak termasuk',
        'Laravel-first development environment': 'Lingkungan pengembangan yang mengutamakan Laravel', 'Optimized around Laravel development (macOS / Windows)': 'Dioptimalkan untuk pengembangan Laravel (macOS / Windows)', 'One workspace across different stacks (macOS, Windows, Linux)': 'Satu ruang kerja untuk berbagai stack (macOS, Windows, Linux)', 'Laravel-first workflow or general-purpose local development workspace?': 'Alur Laravel atau ruang kerja pengembangan lokal serbaguna?', 'Laravel Herd provides one of the most polished local development workflows for Laravel and PHP developers, with first-party ecosystem integrations such as Forge, herd.yml and Reverb. FlyEnv takes a broader approach: one local development workspace for PHP, Node.js, Python, Go, Java and infrastructure services across different kinds of projects.': 'Laravel Herd menyediakan alur kerja pengembangan lokal yang sangat rapi bagi developer Laravel dan PHP, dengan integrasi ekosistem resmi seperti Forge, herd.yml, dan Reverb. FlyEnv mengambil pendekatan yang lebih luas: satu ruang kerja pengembangan lokal untuk PHP, Node.js, Python, Go, Java, dan layanan infrastruktur untuk berbagai jenis proyek.', 'Free and open source': 'Gratis dan sumber terbuka', 'Laravel Site': 'Situs Laravel', 'my-app.test · PHP 8.4 pinned per site': 'my-app.test · PHP 8.4 ditetapkan per situs', 'Herd Pro services': 'Layanan Herd Pro', 'Managed services for the site': 'Layanan terkelola untuk situs', 'herd.yml shares the Laravel environment; Forge integration handles deployment.': 'herd.yml membagikan lingkungan Laravel; integrasi Forge menangani penerapan.', 'Laravel-first, per-site PHP (macOS / Windows)': 'Berfokus pada Laravel, dengan PHP per situs (macOS / Windows)', 'Laravel project': 'Proyek Laravel', 'PHP 7.4–8.5, pinned per site': 'PHP 7.4–8.5, ditetapkan per situs', 'Nginx with automatic .test domains': 'Nginx dengan domain .test otomatis', 'herd.yml shared environment config': 'Konfigurasi lingkungan bersama herd.yml', 'Laravel Reverb and Herd Pro services': 'Laravel Reverb dan layanan Herd Pro', 'Laravel Forge deployment integration': 'Integrasi penerapan Laravel Forge', 'One workspace across different stacks': 'Satu ruang kerja untuk berbagai stack', 'Laravel, Node.js, Java and more — each project keeps its own stack in one app.': 'Laravel, Node.js, Java, dan lainnya — tiap proyek menyimpan stack sendiri dalam satu aplikasi.',
        'Why developers compare FlyEnv and Laravel Herd': 'Mengapa developer membandingkan FlyEnv dan Laravel Herd', 'Both run fast, native PHP environments. The real difference is what each product is centered around.': 'Keduanya menjalankan lingkungan PHP native yang cepat. Perbedaan utamanya adalah fokus masing-masing produk.', 'Laravel-first vs framework-agnostic': 'Mengutamakan Laravel vs bebas framework', 'Laravel ecosystem integration vs general infrastructure workspace': 'Integrasi ekosistem Laravel vs ruang kerja infrastruktur umum', 'Convention-driven setup vs modular environment composition': 'Penyiapan berbasis konvensi vs komposisi lingkungan modular',
        'Deeply optimized for Laravel and PHP development': 'Dioptimalkan untuk pengembangan Laravel dan PHP', 'Per-site PHP version pinning': 'Penetapan versi PHP per situs', 'herd.yml shares Laravel environment configuration': 'herd.yml membagikan konfigurasi lingkungan Laravel', 'Laravel Forge integration': 'Integrasi Laravel Forge', 'Managed databases and services via Herd Pro': 'Database dan layanan terkelola melalui Herd Pro', 'macOS and Windows only': 'Hanya macOS dan Windows', 'Multiple runtime families': 'Berbagai keluarga runtime', 'PHP, Node.js, Python, Go, Java': 'PHP, Node.js, Python, Go, Java', 'Integrated infrastructure modules': 'Modul infrastruktur terintegrasi', 'Databases, cache, storage, mail': 'Database, cache, penyimpanan, email', 'Compose a complete project environment': 'Susun lingkungan proyek lengkap', 'Per-project service stacks': 'Stack layanan per proyek', 'Platforms': 'Platform', 'macOS, Windows': 'macOS, Windows', 'macOS, Windows, Linux': 'macOS, Windows, Linux', 'PHP versions': 'Versi PHP', 'Web servers': 'Server web', 'Databases': 'Database', 'Redis / cache': 'Redis / cache', 'Search engines': 'Mesin pencari', 'Object storage': 'Penyimpanan objek', 'Local domains and HTTPS': 'Domain lokal dan HTTPS', 'Laravel ecosystem integration': 'Integrasi ekosistem Laravel', 'Mail testing': 'Pengujian email', 'Startup groups': 'Startup Groups', 'Database GUI tools': 'Alat GUI database', 'AI / MCP integration': 'Integrasi AI / MCP',
        'Herd is built around Laravel, PHP, Composer, Forge, Reverb and herd.yml. FlyEnv covers Laravel too, but also WordPress, Node.js, Python, Go, Java / Tomcat and self-hosted apps like ERPNext, Gitea or Keycloak. The difference is not feature count — it is the center of the product.': 'Herd dibangun di sekitar Laravel, PHP, Composer, Forge, Reverb, dan herd.yml. FlyEnv juga mendukung Laravel, serta WordPress, Node.js, Python, Go, Java / Tomcat, dan aplikasi mandiri seperti ERPNext, Gitea, atau Keycloak. Perbedaannya bukan jumlah fitur, melainkan fokus produk.', 'Herd offers first-party Laravel integration: Forge deployment, herd.yml, Reverb and Laravel-focused tooling. FlyEnv instead offers broader runtime families, more database and service modules, multiple web servers, bundled database GUI tools and Startup Groups.': 'Herd menyediakan integrasi Laravel resmi: penerapan Forge, herd.yml, Reverb, dan alat khusus Laravel. FlyEnv menawarkan lebih banyak keluarga runtime, modul database dan layanan, beberapa server web, alat GUI database bawaan, serta Startup Groups.', 'Laravel conventions reduce setup work for Laravel projects: parked directories, per-site PHP versions and herd.yml come out of the box. FlyEnv instead lets you choose and combine runtimes, web servers, databases and services according to each project’s stack — Laravel or not.': 'Konvensi Laravel mengurangi pekerjaan penyiapan: direktori parked, versi PHP per situs, dan herd.yml tersedia sejak awal. FlyEnv memungkinkan Anda memilih serta menggabungkan runtime, server web, database, dan layanan sesuai stack tiap proyek—baik Laravel maupun bukan.',
        'Install and manage PHP, Node.js, Python, Go and Java versions side by side, and use whichever runtime each project needs.': 'Instal dan kelola versi PHP, Node.js, Python, Go, dan Java berdampingan, lalu gunakan runtime yang dibutuhkan tiap proyek.', 'Databases, Redis, object storage, mail testing and search engines run as managed modules next to your projects.': 'Database, Redis, penyimpanan objek, pengujian email, dan mesin pencari berjalan sebagai modul terkelola di samping proyek Anda.', 'Start PHP, MySQL, Redis, Mailpit and the other services a project depends on together with a Startup Group — one click starts the whole stack.': 'Jalankan PHP, MySQL, Redis, Mailpit, dan layanan lain yang dibutuhkan proyek bersama Startup Group—satu klik menjalankan seluruh stack.',
        'PHP 7.4–8.5 with per-site pinning': 'PHP 7.4–8.5 dengan penetapan per situs', 'Multiple managed versions, assigned per project': 'Beberapa versi terkelola, ditetapkan per proyek', 'Node.js via nvm (Herd Pro); PHP-focused overall': 'Node.js melalui nvm (Herd Pro); secara umum berfokus pada PHP', 'Node.js, Python, Go, Java, Ruby, Rust and more': 'Node.js, Python, Go, Java, Ruby, Rust, dan lainnya', 'MySQL, MariaDB, PostgreSQL, MongoDB (Herd Pro)': 'MySQL, MariaDB, PostgreSQL, MongoDB (Herd Pro)', 'Multiple built-in database modules': 'Berbagai modul database bawaan', 'Via Herd Pro services': 'Melalui layanan Herd Pro', 'Built-in Redis and Memcached modules': 'Modul Redis dan Memcached bawaan', 'Typesense, Meilisearch (Herd Pro)': 'Typesense, Meilisearch (Herd Pro)', 'Meilisearch, Typesense and more': 'Meilisearch, Typesense, dan lainnya', 'MinIO, RustFS (Herd Pro)': 'MinIO, RustFS (Herd Pro)', 'Managed MinIO / RustFS modules': 'Modul MinIO / RustFS terkelola', 'Automatic .test domains and local HTTPS': 'Domain .test otomatis dan HTTPS lokal', 'Custom domains and HTTPS per project': 'Domain khusus dan HTTPS per proyek', 'herd.yml, Laravel Forge, Laravel Reverb': 'herd.yml, Laravel Forge, Laravel Reverb', 'Built-in SMTP mail catcher and email client (Herd Pro)': 'Penangkap email SMTP dan klien email bawaan (Herd Pro)', 'Built-in Mailpit module': 'Modul Mailpit bawaan', 'Built-in project services': 'Layanan proyek bawaan', 'No bundled GUI; herd db opens site databases in clients like TablePlus': 'Tidak ada GUI bawaan; herd db membuka database situs di klien seperti TablePlus', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate, dan lainnya', 'Built-in MCP server (herd-mcp) for AI coding agents': 'Server MCP bawaan (herd-mcp) untuk agen coding AI', 'FlyEnv MCP Server and AI CLI modules': 'Server MCP FlyEnv dan modul AI CLI',
        'If nearly all of your work is Laravel, Herd is the more specialized tool. If your week spans several stacks, one workspace matters more than Laravel-specific extras.': 'Jika hampir semua pekerjaan Anda adalah Laravel, Herd lebih terspesialisasi. Jika Anda menangani beberapa stack setiap minggu, satu ruang kerja lebih penting daripada fitur khusus Laravel.', 'Should I switch from Laravel Herd to FlyEnv?': 'Haruskah saya beralih dari Laravel Herd ke FlyEnv?', 'Not necessarily. If you mostly build Laravel applications on macOS or Windows, Herd is an excellent, deeply integrated tool. FlyEnv becomes more useful when you work across several languages and frameworks, need Linux support, or want more infrastructure modules built in.': 'Tidak selalu. Jika Anda terutama membuat aplikasi Laravel di macOS atau Windows, Herd adalah alat yang sangat terintegrasi. FlyEnv lebih berguna saat Anda bekerja dengan banyak bahasa dan framework, memerlukan dukungan Linux, atau ingin lebih banyak modul infrastruktur bawaan.', 'Does FlyEnv support Laravel development?': 'Apakah FlyEnv mendukung pengembangan Laravel?', 'Yes. FlyEnv runs complete Laravel stacks: multiple PHP versions, Nginx, Apache or Caddy, MySQL, MariaDB, PostgreSQL, Redis, queues and local domains with HTTPS. What it does not include is Laravel-specific tooling such as herd.yml or Forge integration.': 'Bisa. FlyEnv menjalankan stack Laravel lengkap: beberapa versi PHP, Nginx, Apache atau Caddy, MySQL, MariaDB, PostgreSQL, Redis, queue, dan domain lokal dengan HTTPS. Yang tidak tersedia adalah alat khusus Laravel seperti herd.yml atau integrasi Forge.', 'Can FlyEnv replace Herd Pro services?': 'Apakah FlyEnv dapat menggantikan layanan Herd Pro?', 'For local development, largely yes. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense and Meilisearch are available as built-in FlyEnv modules rather than a paid add-on tier, and FlyEnv’s Mailpit module covers the same local mail testing as Herd Pro’s mail server. Herd Pro also includes Laravel-specific extras like Reverb and the debug dump window, which FlyEnv does not replicate.': 'Untuk pengembangan lokal, sebagian besar bisa. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense, dan Meilisearch tersedia sebagai modul bawaan FlyEnv tanpa tingkat add-on berbayar. Modul Mailpit FlyEnv menyediakan pengujian email lokal seperti server email Herd Pro. Herd Pro juga memiliki fitur khusus Laravel seperti Reverb dan jendela debug dump yang tidak disediakan FlyEnv.', 'Does FlyEnv support herd.yml or Laravel Forge?': 'Apakah FlyEnv mendukung herd.yml atau Laravel Forge?', 'No. herd.yml and Forge integration are Laravel-ecosystem features of Herd. FlyEnv instead uses per-project site configuration and Startup Groups to keep each project’s services together.': 'Tidak. herd.yml dan integrasi Forge adalah fitur ekosistem Laravel milik Herd. FlyEnv menggunakan konfigurasi situs per proyek dan Startup Groups untuk menyatukan layanan tiap proyek.', 'Can I run Node.js, Python or Java projects with FlyEnv?': 'Bisakah saya menjalankan proyek Node.js, Python, atau Java dengan FlyEnv?', 'Yes. FlyEnv manages Node.js, Python, Go, Java and other runtimes next to PHP, so non-Laravel projects live in the same workspace as your Laravel apps.': 'Bisa. FlyEnv mengelola Node.js, Python, Go, Java, dan runtime lain berdampingan dengan PHP, sehingga proyek non-Laravel berada di ruang kerja yang sama dengan aplikasi Laravel Anda.', 'Does FlyEnv work on Linux?': 'Apakah FlyEnv berjalan di Linux?', 'Yes. FlyEnv supports macOS, Windows and Linux. Laravel Herd currently supports macOS and Windows.': 'Bisa. FlyEnv mendukung macOS, Windows, dan Linux. Laravel Herd saat ini mendukung macOS dan Windows.', 'Can I keep my existing Laravel projects?': 'Bisakah saya mempertahankan proyek Laravel yang ada?', 'Yes. Point a FlyEnv local site at your existing project directory, pick the PHP version and services it needs, and keep working — no application rewrite is required in most cases.': 'Bisa. Arahkan situs lokal FlyEnv ke direktori proyek yang ada, pilih versi PHP dan layanan yang diperlukan, lalu lanjutkan bekerja—biasanya tanpa menulis ulang aplikasi.', 'Can I use Herd and FlyEnv together?': 'Bisakah saya memakai Herd dan FlyEnv bersama?', 'Yes. Some developers keep Herd for Laravel-focused work and use FlyEnv for Node.js, Java, Python or infrastructure-heavy projects. Just avoid running two web servers or databases on the same ports at the same time.': 'Bisa. Sebagian developer memakai Herd untuk pekerjaan Laravel dan FlyEnv untuk proyek Node.js, Java, Python, atau yang membutuhkan banyak infrastruktur. Hindari menjalankan dua server web atau database pada port yang sama secara bersamaan.',
        'Typical workflow: switching between Laravel and non-Laravel projects': 'Alur umum: berpindah antara proyek Laravel dan non-Laravel', 'With Laravel Herd': 'Dengan Laravel Herd', 'Create or open the Laravel project': 'Buat atau buka proyek Laravel', 'Herd serves the site with its pinned PHP version': 'Herd menyajikan situs dengan versi PHP yang ditetapkan', 'Start the Herd Pro services the app needs': 'Jalankan layanan Herd Pro yang diperlukan aplikasi', 'Share the environment via herd.yml and Laravel tooling': 'Bagikan lingkungan melalui herd.yml dan alat Laravel', 'A Node.js or Java project is outside Herd’s primary workflow — another tool covers that stack': 'Proyek Node.js atau Java berada di luar alur utama Herd—gunakan alat lain untuk stack tersebut', 'Laravel and PHP make up most of your development work.': 'Sebagian besar pekerjaan Anda menggunakan Laravel dan PHP.', 'You want a polished workflow designed around Laravel conventions.': 'Anda menginginkan alur rapi yang dirancang berdasarkan konvensi Laravel.', 'You value deep Laravel ecosystem integrations such as Forge and herd.yml.': 'Anda menghargai integrasi ekosistem Laravel seperti Forge dan herd.yml.', 'Herd Pro\'s managed services cover the infrastructure your applications usually need.': 'Layanan terkelola Herd Pro mencakup infrastruktur yang biasanya dibutuhkan aplikasi Anda.', 'You prefer a tool that stays closely aligned with the Laravel ecosystem.': 'Anda memilih alat yang tetap dekat dengan ekosistem Laravel.', 'You regularly work outside Laravel and PHP.': 'Anda sering bekerja di luar Laravel dan PHP.', 'You use PHP, Node.js, Python, Go or Java across different projects.': 'Anda menggunakan PHP, Node.js, Python, Go, atau Java di berbagai proyek.', 'Your projects require a wider mix of databases and infrastructure services.': 'Proyek Anda memerlukan lebih banyak database dan layanan infrastruktur.', 'You want different application stacks managed from one desktop workspace.': 'Anda ingin mengelola berbagai stack aplikasi dari satu ruang kerja desktop.', 'You value Startup Groups, integrated management tools and FlyEnv\'s MCP workflow.': 'Anda menghargai Startup Groups, alat pengelolaan terintegrasi, dan alur MCP FlyEnv.',  'Manage more than Laravel projects in one local workspace': 'Kelola lebih dari proyek Laravel dalam satu ruang kerja lokal', 'Keep Laravel, Node.js, Python, Go, Java and their local services in one development workspace.': 'Kelola Laravel, Node.js, Python, Go, Java, dan layanan lokalnya dalam satu ruang kerja.', 'With FlyEnv': 'Dengan FlyEnv', 'Laravel project → PHP, Nginx, MySQL and Redis': 'Proyek Laravel → PHP, Nginx, MySQL, dan Redis', 'Node.js app → Node.js and PostgreSQL': 'Aplikasi Node.js → Node.js dan PostgreSQL', 'Python app → Python and Redis': 'Aplikasi Python → Python dan Redis', 'Java app → Tomcat and MySQL': 'Aplikasi Java → Tomcat dan MySQL', 'Manage all of them from the same workspace': 'Kelola semuanya dari ruang kerja yang sama', 'Cross-platform (macOS, Windows, Linux)': 'Lintas platform (macOS, Windows, Linux)', 'Multiple runtime families and service versions': 'Berbagai keluarga runtime dan versi layanan', 'Databases, cache, object storage and mail testing built in': 'Database, cache, penyimpanan objek, dan pengujian email tersedia', 'Each project keeps its own runtime and service configuration': 'Setiap proyek menyimpan konfigurasi runtime dan layanan sendiri'
      }
    }
    if (locale === 'id') {
      maps.id['Laravel-first, per-site PHP (macOS / Windows)'] =
        'Berfokus pada Laravel, dengan PHP per situs (macOS / Windows)'
      maps.id['Laravel Reverb and Herd Pro services'] = 'Laravel Reverb dan layanan Herd Pro'
      maps.id['Manage more than Laravel projects in one local workspace'] =
        'Kelola lebih dari sekadar proyek Laravel dalam satu ruang kerja lokal'
      maps.id['For local development, largely yes. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense and Meilisearch are available as built-in FlyEnv modules rather than a paid add-on tier, and FlyEnv’s Mailpit module covers the same local mail testing as Herd Pro’s mail server. Herd Pro also includes Laravel-specific extras like Reverb and the debug dump window, which FlyEnv does not replicate.'] =
        'Untuk pengembangan lokal, sebagian besar bisa. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense, dan Meilisearch tersedia sebagai modul bawaan FlyEnv, bukan sebagai add-on berbayar. Modul Mailpit FlyEnv menyediakan pengujian email lokal seperti server email Herd Pro. Herd Pro juga memiliki fitur khusus Laravel seperti Reverb dan jendela debug dump yang tidak disediakan FlyEnv.'
    }
    if (typeof value === 'string') return maps[locale]?.[value] || value
    if (Array.isArray(value)) return value.map((item) => localeText(item, locale))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localeText(item, locale)]))
    return value
  }

  const icon = (name: string) => `https://oss.macphpstudy.com/image/assets/demo-logos/${name}.svg`
  const tomcatIcon = 'https://oss.macphpstudy.com/image/tomcat.svg'
  const flyenvProjects = [
    {
      name: 'Laravel',
      kind: 'Project',
      icon: icon('laravel'),
      services: [
        { name: 'Nginx', icon: icon('nginx') },
        { name: 'PHP 8.4', icon: icon('php') },
        { name: 'MySQL', icon: icon('mysql') },
        { name: 'Redis', icon: icon('redis') }
      ]
    },
    {
      name: 'Node.js App',
      kind: 'Project',
      icon: icon('nodedotjs'),
      services: [
        { name: 'Caddy', icon: icon('caddy') },
        { name: 'Node.js', icon: icon('nodedotjs') },
        { name: 'PostgreSQL', icon: icon('postgresql') },
        { name: 'MinIO', icon: icon('minio') }
      ]
    },
    {
      name: 'Java App',
      kind: 'Project',
      icon: icon('openjdk'),
      services: [
        { name: 'Tomcat', icon: tomcatIcon },
        { name: 'OpenJDK', icon: icon('openjdk') },
        { name: 'MySQL', icon: icon('mysql') },
        { name: 'Redis', icon: icon('redis') }
      ]
    }
  ]
  const competitor = {
    name: 'Laravel Herd',
    mark: 'H',
    model: 'Laravel-first development environment',
    heroModelCaption: 'Optimized around Laravel development (macOS / Windows)',
    heroFlyenvCaption: 'One workspace across different stacks (macOS, Windows, Linux)',
    heroTitle: 'Laravel-first workflow or general-purpose local development workspace?',
    heroDescription:
      'Laravel Herd provides one of the most polished local development workflows for Laravel and PHP developers, with first-party ecosystem integrations such as Forge, herd.yml and Reverb. FlyEnv takes a broader approach: one local development workspace for PHP, Node.js, Python, Go, Java and infrastructure services across different kinds of projects.',
    platforms: ['macOS', 'Windows', 'Linux', 'Free and open source'],
    scopes: [
      {
        title: 'Laravel Site',
        detail: 'my-app.test · PHP 8.4 pinned per site',
        services: [
          { name: 'PHP 8.4', icon: icon('php') },
          { name: 'Nginx', icon: icon('nginx') }
        ]
      },
      {
        title: 'Herd Pro services',
        detail: 'Managed services for the site',
        services: [
          { name: 'MySQL', icon: icon('mysql') },
          { name: 'Redis', icon: icon('redis') },
          { name: 'MinIO', icon: icon('minio') },
          { name: 'Reverb' }
        ]
      }
    ],
    scopeNote: 'herd.yml shares the Laravel environment; Forge integration handles deployment.',
    modelCaption: 'Laravel-first, per-site PHP (macOS / Windows)',
    modelTree: {
      root: 'Laravel project',
      node: 'Laravel Herd',
      branches: [
        'PHP 7.4–8.5, pinned per site',
        'Nginx with automatic .test domains',
        'herd.yml shared environment config',
        'Laravel Reverb and Herd Pro services',
        'Laravel Forge deployment integration'
      ]
    },
    flyenvCaption: 'One workspace across different stacks',
    flyenvProjectsNote:
      'Laravel, Node.js, Java and more — each project keeps its own stack in one app.',
    differencesTitle: 'Why developers compare FlyEnv and Laravel Herd',
    differencesIntro:
      'Both run fast, native PHP environments. The real difference is what each product is centered around.',
    differences: [
      {
        title: 'Laravel-first vs framework-agnostic',
        body: 'Herd is built around Laravel, PHP, Composer, Forge, Reverb and herd.yml. FlyEnv covers Laravel too, but also WordPress, Node.js, Python, Go, Java / Tomcat and self-hosted apps like ERPNext, Gitea or Keycloak. The difference is not feature count — it is the center of the product.'
      },
      {
        title: 'Laravel ecosystem integration vs general infrastructure workspace',
        body: 'Herd offers first-party Laravel integration: Forge deployment, herd.yml, Reverb and Laravel-focused tooling. FlyEnv instead offers broader runtime families, more database and service modules, multiple web servers, bundled database GUI tools and Startup Groups.'
      },
      {
        title: 'Convention-driven setup vs modular environment composition',
        body: 'Laravel conventions reduce setup work for Laravel projects: parked directories, per-site PHP versions and herd.yml come out of the box. FlyEnv instead lets you choose and combine runtimes, web servers, databases and services according to each project’s stack — Laravel or not.'
      }
    ],
    scopeTitle: 'Different development models',
    modelBullets: [
      'Deeply optimized for Laravel and PHP development',
      'Per-site PHP version pinning',
      'herd.yml shares Laravel environment configuration',
      'Laravel Forge integration',
      'Managed databases and services via Herd Pro',
      { text: 'macOS and Windows only', tone: 'warn' }
    ],
    dailyCards: [
      {
        title: 'Multiple runtime families',
        placeholder: 'PHP, Node.js, Python, Go, Java',
        body: 'Install and manage PHP, Node.js, Python, Go and Java versions side by side, and use whichever runtime each project needs.',
        image: 'https://oss.macphpstudy.com/image/quick-start-2.webp',
        imageAlt: 'FlyEnv runtime version installation interface'
      },
      {
        title: 'Integrated infrastructure modules',
        placeholder: 'Databases, cache, storage, mail',
        body: 'Databases, Redis, object storage, mail testing and search engines run as managed modules next to your projects.',
        image: 'https://oss.macphpstudy.com/image/database-1.webp',
        imageAlt: 'FlyEnv database management interface'
      },
      {
        title: 'Compose a complete project environment',
        placeholder: 'Per-project service stacks',
        body: 'Start PHP, MySQL, Redis, Mailpit and the other services a project depends on together with a Startup Group — one click starts the whole stack.',
        image: 'https://oss.macphpstudy.com/image/features/startup-groups-1.webp',
        imageAlt: 'FlyEnv service management interface'
      }
    ],
    featureRows: [
      {
        name: 'Platforms',
        competitor: 'macOS, Windows',
        flyenv: 'macOS, Windows, Linux',
        competitorOk: true
      },
      {
        name: 'PHP versions',
        competitor: 'PHP 7.4–8.5 with per-site pinning',
        flyenv: 'Multiple managed versions, assigned per project',
        competitorOk: true
      },
      {
        name: 'Node.js / other runtimes',
        competitor: 'Node.js via nvm (Herd Pro); PHP-focused overall',
        flyenv: 'Node.js, Python, Go, Java, Ruby, Rust and more',
        competitorOk: true
      },
      {
        name: 'Web servers',
        competitor: 'Nginx',
        flyenv: 'Nginx, Apache, Caddy',
        competitorOk: true
      },
      {
        name: 'Databases',
        competitor: 'MySQL, MariaDB, PostgreSQL, MongoDB (Herd Pro)',
        flyenv: 'Multiple built-in database modules',
        competitorOk: true
      },
      {
        name: 'Redis / cache',
        competitor: 'Via Herd Pro services',
        flyenv: 'Built-in Redis and Memcached modules',
        competitorOk: true
      },
      {
        name: 'Search engines',
        competitor: 'Typesense, Meilisearch (Herd Pro)',
        flyenv: 'Meilisearch, Typesense and more',
        competitorOk: true
      },
      {
        name: 'Object storage',
        competitor: 'MinIO, RustFS (Herd Pro)',
        flyenv: 'Managed MinIO / RustFS modules',
        competitorOk: true
      },
      {
        name: 'Local domains and HTTPS',
        competitor: 'Automatic .test domains and local HTTPS',
        flyenv: 'Custom domains and HTTPS per project',
        competitorOk: true
      },
      {
        name: 'Laravel ecosystem integration',
        competitor: 'herd.yml, Laravel Forge, Laravel Reverb',
        flyenv: 'Not included',
        competitorOk: true,
        flyenvOk: false
      },
      {
        name: 'Mail testing',
        competitor: 'Built-in SMTP mail catcher and email client (Herd Pro)',
        flyenv: 'Built-in Mailpit module',
        competitorOk: true
      },
      {
        name: 'Startup groups',
        competitor: 'Not included',
        flyenv: 'Built-in project services',
        competitorOk: false
      },
      {
        name: 'Database GUI tools',
        competitor: 'No bundled GUI; herd db opens site databases in clients like TablePlus',
        flyenv: 'phpMyAdmin, pgAdmin, DbGate and more',
        competitorOk: false
      },
      {
        name: 'AI / MCP integration',
        competitor: 'Built-in MCP server (herd-mcp) for AI coding agents',
        flyenv: 'FlyEnv MCP Server and AI CLI modules',
        competitorOk: true
      }
    ],
    workflowTitle: 'Typical workflow: switching between Laravel and non-Laravel projects',
    workflow: {
      title: 'With Laravel Herd',
      mark: 'H',
      kind: 'competitor',
      steps: [
        'Create or open the Laravel project',
        'Herd serves the site with its pinned PHP version',
        'Start the Herd Pro services the app needs',
        'Share the environment via herd.yml and Laravel tooling',
        'A Node.js or Java project is outside Herd’s primary workflow — another tool covers that stack'
      ]
    },
    choices: [
      {
        title: 'Choose Laravel Herd if',
        kind: 'competitor',
        items: [
          'Laravel and PHP make up most of your development work.',
          'You want a polished workflow designed around Laravel conventions.',
          'You value deep Laravel ecosystem integrations such as Forge and herd.yml.',
          "Herd Pro's managed services cover the infrastructure your applications usually need.",
          'You prefer a tool that stays closely aligned with the Laravel ecosystem.'
        ]
      },
      {
        title: 'Choose FlyEnv if',
        kind: 'flyenv',
        items: [
          'You regularly work outside Laravel and PHP.',
          'You use PHP, Node.js, Python, Go or Java across different projects.',
          'Your projects require a wider mix of databases and infrastructure services.',
          'You want different application stacks managed from one desktop workspace.',
          "You value Startup Groups, integrated management tools and FlyEnv's MCP workflow."
        ]
      }
    ],
    choiceNote:
      'If nearly all of your work is Laravel, Herd is the more specialized tool. If your week spans several stacks, one workspace matters more than Laravel-specific extras.',
    faqs: [
      {
        question: 'Should I switch from Laravel Herd to FlyEnv?',
        answer:
          'Not necessarily. If you mostly build Laravel applications on macOS or Windows, Herd is an excellent, deeply integrated tool. FlyEnv becomes more useful when you work across several languages and frameworks, need Linux support, or want more infrastructure modules built in.'
      },
      {
        question: 'Does FlyEnv support Laravel development?',
        answer:
          'Yes. FlyEnv runs complete Laravel stacks: multiple PHP versions, Nginx, Apache or Caddy, MySQL, MariaDB, PostgreSQL, Redis, queues and local domains with HTTPS. What it does not include is Laravel-specific tooling such as herd.yml or Forge integration.'
      },
      {
        question: 'Can FlyEnv replace Herd Pro services?',
        answer:
          'For local development, largely yes. MySQL, MariaDB, PostgreSQL, MongoDB, Redis, MinIO, RustFS, Typesense and Meilisearch are available as built-in FlyEnv modules rather than a paid add-on tier, and FlyEnv’s Mailpit module covers the same local mail testing as Herd Pro’s mail server. Herd Pro also includes Laravel-specific extras like Reverb and the debug dump window, which FlyEnv does not replicate.'
      },
      {
        question: 'Does FlyEnv support herd.yml or Laravel Forge?',
        answer:
          'No. herd.yml and Forge integration are Laravel-ecosystem features of Herd. FlyEnv instead uses per-project site configuration and Startup Groups to keep each project’s services together.'
      },
      {
        question: 'Can I run Node.js, Python or Java projects with FlyEnv?',
        answer:
          'Yes. FlyEnv manages Node.js, Python, Go, Java and other runtimes next to PHP, so non-Laravel projects live in the same workspace as your Laravel apps.'
      },
      {
        question: 'Does FlyEnv work on Linux?',
        answer:
          'Yes. FlyEnv supports macOS, Windows and Linux. Laravel Herd currently supports macOS and Windows.'
      },
      {
        question: 'Can I keep my existing Laravel projects?',
        answer:
          'Yes. Point a FlyEnv local site at your existing project directory, pick the PHP version and services it needs, and keep working — no application rewrite is required in most cases.'
      },
      {
        question: 'Can I use Herd and FlyEnv together?',
        answer:
          'Yes. Some developers keep Herd for Laravel-focused work and use FlyEnv for Node.js, Java, Python or infrastructure-heavy projects. Just avoid running two web servers or databases on the same ports at the same time.'
      }
    ],
    ctaTitle: 'Manage more than Laravel projects in one local workspace',
    ctaDescription:
      'Keep Laravel, Node.js, Python, Go, Java and their local services in one development workspace.'
  }
  const localizedCompetitor = localeText(competitor, locale)
  const flyenvWorkflow = {
    title: 'With FlyEnv',
    mark: 'F',
    kind: 'flyenv' as const,
    steps: [
      'Laravel project → PHP, Nginx, MySQL and Redis',
      'Node.js app → Node.js and PostgreSQL',
      'Python app → Python and Redis',
      'Java app → Tomcat and MySQL',
      'Manage all of them from the same workspace'
    ]
  }
  const localizedFlyenvWorkflow = locale === 'zh'
    ? { ...flyenvWorkflow, steps: ['Laravel 项目 → PHP、Nginx、MySQL 和 Redis', 'Node.js 应用 → Node.js 和 PostgreSQL', 'Python 应用 → Python 和 Redis', 'Java 应用 → Tomcat 和 MySQL', '在同一工作区管理所有项目'] }
    : locale === 'id'
      ? { ...flyenvWorkflow, steps: ['Proyek Laravel → PHP, Nginx, MySQL, dan Redis', 'Aplikasi Node.js → Node.js dan PostgreSQL', 'Aplikasi Python → Python dan Redis', 'Aplikasi Java → Tomcat dan MySQL', 'Kelola semuanya dari ruang kerja yang sama'] }
      : flyenvWorkflow
</script>

<template>
  <ComparisonLoopPage
    :competitor="localizedCompetitor"
    :flyenv-projects="flyenvProjects"
    :flyenv-bullets="localeText([
      'Cross-platform (macOS, Windows, Linux)',
      'Multiple runtime families and service versions',
      'Custom domains and HTTPS per project',
      'Databases, cache, object storage and mail testing built in',
      'Each project keeps its own runtime and service configuration'
    ], locale)"
    :flyenv-workflow="localizedFlyenvWorkflow"
    :locale="props.locale"
  />
</template>
