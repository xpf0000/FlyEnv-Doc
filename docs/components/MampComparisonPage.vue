<script setup lang="ts">
  import ComparisonLoopPage from './ComparisonLoopPage.vue'
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' | 'es' }>()
  const locale = props.locale || 'en'
  const localeText = (value: any, locale: string): any => {
    const maps: Record<string, Record<string, string>> = {
      zh: {
        'Three key differences': '三个关键差异',
        'Different development scopes': '不同的开发范围',
        'Feature comparison': '功能对比',
        'Which one should you choose?': '应该选择哪一个？',
        'Frequently asked questions': '常见问题',
        'Choose MAMP / MAMP Pro if': '适合选择 MAMP / MAMP Pro 的情况',
        'Choose FlyEnv if': '适合选择 FlyEnv 的情况',
        Project: '项目',
        'Host-focused local web development': '以本地主机为中心的 Web 开发',
        'Host-focused local web development (macOS / Windows)': '以本地主机为中心的 Web 开发（macOS / Windows）',
        'A broader project workspace (macOS, Windows, Linux)': '更广泛的项目工作区（macOS、Windows、Linux）',
        'Web development stack or broader multi-runtime workspace?': 'Web 开发堆栈，还是更广泛的多运行时工作区？',
        'MAMP and MAMP Pro excel at PHP, WordPress and local web hosts. FlyEnv expands that workflow across multiple runtimes, databases, services and developer tools.': 'MAMP 和 MAMP Pro 擅长 PHP、WordPress 与本地主机。FlyEnv 将这一工作流扩展到多个运行时、数据库、服务和开发者工具。',
        'PHP and WordPress': 'PHP 和 WordPress',
        'Local hosts': '本地主机',
        'WordPress host · Pro': 'WordPress 主机 · Pro',
        'Legacy host · Pro': '旧版主机 · Pro',
        'A mature host and site workflow for web projects, with broader modules handled separately.': '成熟的 Web 项目主机与站点工作流，更广泛的模块需单独处理。',
        'Both are strong tools—optimized for different workflows.': '两者都是强大的工具，只是针对不同工作流进行了优化。',
        'Web-focused vs multi-runtime': '专注 Web 与多运行时',
        'MAMP centers on PHP and local web hosts. FlyEnv supports PHP, Node.js, Python, Go, Java and more.': 'MAMP 以 PHP 和本地主机为核心。FlyEnv 支持 PHP、Node.js、Python、Go、Java 等更多运行时。',
        'Host-centric vs project workspace': '主机中心与项目工作区',
        'MAMP Pro organizes local hosts and sites. FlyEnv organizes complete projects and their dependent services.': 'MAMP Pro 组织本地主机和站点。FlyEnv 组织完整项目及其依赖服务。',
        'Curated web stack vs broader modules': '精选 Web 堆栈与更广泛模块',
        'FlyEnv brings databases, caches, mail testing, object storage and other modules into one workspace.': 'FlyEnv 将数据库、缓存、邮件测试、对象存储和其他模块集中到一个工作区。',
        
        'Mature local web host workflow': '成熟的本地主机工作流',
        'Multiple PHP versions and host settings in MAMP Pro': '在 MAMP Pro 中使用多个 PHP 版本和主机设置',
        'Good fit for PHP and WordPress development': '适合 PHP 和 WordPress 开发',
        'Available on macOS and Windows': '支持 macOS 和 Windows',
        'Multiple runtime families': '多个运行时系列',
        'PHP, Node.js, Python, Go and Java': 'PHP、Node.js、Python、Go 和 Java',
        'Install and run several runtime families side by side without rebuilding the host workflow.': '并行安装和运行多个运行时系列，无需重建主机工作流。',
        'FlyEnv runtime version installation interface': 'FlyEnv 运行时版本安装界面',
        'Infrastructure modules': '基础设施模块',
        'Databases, caches and storage': '数据库、缓存和存储',
        'Bring databases, caching, mail testing and object storage into the same workspace.': '将数据库、缓存、邮件测试和对象存储放入同一工作区。',
        'FlyEnv local site HTTPS configuration interface': 'FlyEnv 本地站点 HTTPS 配置界面',
        'Project service groups': '项目服务组',
        'Startup Groups': '启动组',
        'Start the exact services a project needs without managing each as a separate external tool.': '启动项目所需的服务，无需将每项服务作为独立的外部工具管理。',
        'FlyEnv service management interface': 'FlyEnv 服务管理界面',
        Platforms: '平台',
        'macOS, Windows': 'macOS、Windows',
        'macOS, Windows, Linux': 'macOS、Windows、Linux',
        'PHP versions': 'PHP 版本',
        'Single active version / multiple per host in Pro': '单个活动版本 / Pro 中每台主机可用多个版本',
        'Multiple managed versions per project': '每个项目可管理多个版本',
        'Web servers': 'Web 服务器',
        'Apache, Nginx': 'Apache、Nginx',
        'Nginx, Apache, Caddy': 'Nginx、Apache、Caddy',
        'MySQL / MariaDB': 'MySQL / MariaDB',
        'Built-in or supported': '内置或支持',
        'Multiple database modules': '多个数据库模块',
        'PostgreSQL / Redis': 'PostgreSQL / Redis',
        'Optional add-on': '可选附加组件',
        'Built-in modules': '内置模块',
        'Local hosts / SSL': '本地主机 / SSL',
        'Per-host configuration': '按主机配置',
        'Built-in and automatic per project': '内置并按项目自动配置',
        'Project-specific configuration': '项目专属配置',
        'Per-host web configuration': '按主机进行 Web 配置',
        'Per-project runtimes, services and domains': '按项目配置运行时、服务和域名',
        
        'Some add-ons': '部分附加组件',
        'Many first-class modules': '大量内置集成模块',
        'Database GUI tools': '数据库 GUI 工具',
        phpMyAdmin: 'phpMyAdmin',
        'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin、pgAdmin、DbGate 等',
        'AI / MCP integration': 'AI / MCP 集成',
        'Not included': '未包含',
        'FlyEnv MCP Server and AI CLI modules': 'FlyEnv MCP 服务器和 AI CLI 模块',
        'Object storage': '对象存储',
        'Add separately': '需单独添加',
        'Managed MinIO / RustFS modules': '托管 MinIO / RustFS 模块',
        'Typical workflow: a project that needs more than a web stack': '典型流程：项目需要的不只是 Web 堆栈',
        'With MAMP / MAMP Pro': '使用 MAMP / MAMP Pro',
        'Create a local host or site': '创建本地主机或站点',
        'Choose the PHP version for the host': '为主机选择 PHP 版本',
        'Configure Apache or Nginx': '配置 Apache 或 Nginx',
        'Enable local HTTPS or SSL': '启用本地 HTTPS 或 SSL',
        'Connect MySQL': '连接 MySQL',
        'Add extra services or tools separately when needed': '需要时单独添加额外服务或工具',
        'Manage non-core services outside the main host workflow': '在主机工作流之外管理非核心服务',
        'You mostly build PHP or WordPress sites.': '你主要构建 PHP 或 WordPress 站点。',
        'You prefer a mature local host workflow.': '你偏好成熟的本地主机工作流。',
        'Your projects fit within a web-focused stack.': '你的项目适合专注 Web 的堆栈。',
        'You want host-level settings and familiar tooling.': '你需要主机级设置和熟悉的工具。',
        'You work across PHP, Node.js, Python, Go or Java.': '你使用 PHP、Node.js、Python、Go 或 Java 开发。',
        'You need project services, integrated tools and a broader workspace.': '你需要项目服务、集成工具和更广泛的工作区。',
        'You want local infrastructure modules beside each project.': '你希望在每个项目旁管理本地基础设施模块。',
        'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': '你使用 AI 编程客户端或 Ollama 等本地 AI 服务，并希望与项目堆栈一起管理。',
        'Should I switch from MAMP Pro to FlyEnv?': '我应该从 MAMP Pro 切换到 FlyEnv 吗？',
        'Not necessarily. MAMP Pro remains a strong fit for PHP and WordPress hosts. FlyEnv becomes more useful when you need broader runtime families, integrated infrastructure modules, or project-level service configuration.': '不一定。MAMP Pro 仍然适合 PHP 和 WordPress 主机。当你需要更多运行时系列、集成基础设施模块或项目级服务配置时，FlyEnv 会更有价值。',
        'Can FlyEnv handle the same PHP website workflows as MAMP Pro?': 'FlyEnv 能处理与 MAMP Pro 相同的 PHP 网站工作流吗？',
        'Yes. FlyEnv supports Apache or Nginx, multiple PHP versions, local domains, HTTPS, databases, and existing PHP or WordPress project directories.': '可以。FlyEnv 支持 Apache 或 Nginx、多个 PHP 版本、本地域名、HTTPS、数据库以及现有 PHP 或 WordPress 项目目录。',
        'Do I need to move my existing MAMP sites?': '我需要迁移现有的 MAMP 站点吗？',
        'No. You can keep the existing project directories and recreate their local site, runtime, database, and service settings in FlyEnv.': '不需要。你可以保留现有项目目录，并在 FlyEnv 中重新创建本地站点、运行时、数据库和服务设置。',
        'Can FlyEnv manage WordPress and traditional PHP sites?': 'FlyEnv 能管理 WordPress 和传统 PHP 站点吗？',
        'Yes. Configure each site with the PHP version, web server, database, domain, and HTTPS settings it needs.': '可以。为每个站点配置所需的 PHP 版本、Web 服务器、数据库、域名和 HTTPS 设置。',
        'When does FlyEnv make more sense than MAMP Pro?': '什么时候 FlyEnv 比 MAMP Pro 更合适？',
        'FlyEnv is a stronger fit when one machine or team needs Node.js, Python, Go, Java, multiple databases, caches, mail testing, object storage, or project-specific service groups.': '当一台机器或团队需要 Node.js、Python、Go、Java、多个数据库、缓存、邮件测试、对象存储或项目专属服务组时，FlyEnv 更合适。',
        'Can I use both MAMP Pro and FlyEnv on the same machine?': '可以在同一台机器上同时使用 MAMP Pro 和 FlyEnv 吗？',
        'Yes, but avoid starting both tools on overlapping ports. Stop one web server or database service before launching the other environment.': '可以，但应避免两个工具使用重叠端口。启动另一个环境前，请先停止其中一个 Web 服务器或数据库服务。',
        'Does FlyEnv support custom local domains and HTTPS?': 'FlyEnv 支持自定义本地域名和 HTTPS 吗？',
        'Yes. FlyEnv manages custom domains, local certificates, ports, and site settings from its Host workflow.': '支持。FlyEnv 可在 Host 工作流中管理自定义域名、本地证书、端口和站点设置。',
        'Can FlyEnv manage databases and infrastructure modules?': 'FlyEnv 能管理数据库和基础设施模块吗？',
        'Yes. FlyEnv provides managed modules for databases, caches, mail testing, object storage, and other local services, with startup groups for project workflows.': '可以。FlyEnv 提供数据库、缓存、邮件测试、对象存储和其他本地服务的托管模块，并通过启动组支持项目工作流。',
        'Bring runtimes, infrastructure and project services into one workspace.': '将运行时、基础设施和项目服务集中到一个工作区。',
        'With FlyEnv': '使用 FlyEnv',
        'Create or import a local project': '创建或导入本地项目',
        'Choose the runtime family and version': '选择运行时系列和版本',
        'Choose a web server when needed': '需要时选择 Web 服务器',
        'Start MySQL, Redis, Mailpit or other services': '启动 MySQL、Redis、Mailpit 或其他服务',
        'Save the project services as a startup group': '将项目服务保存为启动组',
        'Cross-platform workspace across macOS, Windows and Linux': '跨 macOS、Windows 和 Linux 的工作区',
        'Multiple runtime families and service versions': '多个运行时系列和服务版本',
        'Project-specific domains, HTTPS and services': '项目专属域名、HTTPS 和服务',
        'Infrastructure modules managed as first-class services': '将基础设施模块作为内置服务管理',
        'One workspace for broader development workflows': '一个工作区覆盖更广泛的开发工作流'
      },
      id: {
        'Three key differences': 'Tiga perbedaan utama',
        'Different development scopes': 'Cakupan pengembangan yang berbeda',
        'Feature comparison': 'Perbandingan fitur',
        'Which one should you choose?': 'Mana yang harus dipilih?',
        'Frequently asked questions': 'Pertanyaan umum',
        'Choose MAMP / MAMP Pro if': 'Pilih MAMP / MAMP Pro jika',
        'Choose FlyEnv if': 'Pilih FlyEnv jika',
        Project: 'Proyek',
        'Host-focused local web development': 'Pengembangan web lokal berfokus pada host',
        'Host-focused local web development (macOS / Windows)': 'Pengembangan web lokal berfokus pada host (macOS / Windows)',
        'A broader project workspace (macOS, Windows, Linux)': 'Ruang kerja proyek yang lebih luas (macOS, Windows, Linux)',
        'Web development stack or broader multi-runtime workspace?': 'Stack pengembangan web atau ruang kerja multi-runtime yang lebih luas?',
        'MAMP and MAMP Pro excel at PHP, WordPress and local web hosts. FlyEnv expands that workflow across multiple runtimes, databases, services and developer tools.': 'MAMP dan MAMP Pro unggul untuk PHP, WordPress, dan host web lokal. FlyEnv memperluas alur tersebut ke berbagai runtime, database, layanan, dan alat pengembang.',
        'PHP and WordPress': 'PHP dan WordPress',
        'Local hosts': 'Host lokal',
        'WordPress host · Pro': 'Host WordPress · Pro',
        'Legacy host · Pro': 'Host lama · Pro',
        'A mature host and site workflow for web projects, with broader modules handled separately.': 'Alur host dan situs yang matang untuk proyek web, sementara modul yang lebih luas ditangani terpisah.',
        'Both are strong tools—optimized for different workflows.': 'Keduanya alat yang kuat—dioptimalkan untuk alur kerja berbeda.',
        'Web-focused vs multi-runtime': 'Berfokus web vs multi-runtime',
        'MAMP centers on PHP and local web hosts. FlyEnv supports PHP, Node.js, Python, Go, Java and more.': 'MAMP berpusat pada PHP dan host web lokal. FlyEnv mendukung PHP, Node.js, Python, Go, Java, dan lainnya.',
        'Host-centric vs project workspace': 'Berpusat pada host vs ruang kerja proyek',
        'MAMP Pro organizes local hosts and sites. FlyEnv organizes complete projects and their dependent services.': 'MAMP Pro mengatur host dan situs lokal. FlyEnv mengatur proyek lengkap beserta layanan dependensinya.',
        'Curated web stack vs broader modules': 'Stack web terkurasi vs modul lebih luas',
        'FlyEnv brings databases, caches, mail testing, object storage and other modules into one workspace.': 'FlyEnv menyatukan database, cache, pengujian email, penyimpanan objek, dan modul lain dalam satu ruang kerja.',
        'Mature local web host workflow': 'Alur host web lokal yang matang',
        'Multiple PHP versions and host settings in MAMP Pro': 'Berbagai versi PHP dan pengaturan host di MAMP Pro',
        'Good fit for PHP and WordPress development': 'Cocok untuk pengembangan PHP dan WordPress',
        'Available on macOS and Windows': 'Tersedia di macOS dan Windows',
        'Multiple runtime families': 'Berbagai keluarga runtime',
        'PHP, Node.js, Python, Go and Java': 'PHP, Node.js, Python, Go, dan Java',
        'Install and run several runtime families side by side without rebuilding the host workflow.': 'Instal dan jalankan beberapa keluarga runtime berdampingan tanpa membangun ulang alur host.',
        'FlyEnv runtime version installation interface': 'Antarmuka instalasi versi runtime FlyEnv',
        'Infrastructure modules': 'Modul infrastruktur',
        'Databases, caches and storage': 'Database, cache, dan penyimpanan',
        'Bring databases, caching, mail testing and object storage into the same workspace.': 'Satukan database, cache, pengujian email, dan penyimpanan objek dalam ruang kerja yang sama.',
        'FlyEnv local site HTTPS configuration interface': 'Antarmuka konfigurasi HTTPS situs lokal FlyEnv',
        'Project service groups': 'Grup layanan proyek',
        'Startup Groups': 'Startup Groups',
        'Start the exact services a project needs without managing each as a separate external tool.': 'Jalankan layanan yang dibutuhkan proyek tanpa mengelolanya sebagai alat eksternal terpisah.',
        'FlyEnv service management interface': 'Antarmuka pengelolaan layanan FlyEnv',
        Platforms: 'Platform',
        'macOS, Windows': 'macOS, Windows',
        'macOS, Windows, Linux': 'macOS, Windows, Linux',
        'PHP versions': 'Versi PHP',
        'Single active version / multiple per host in Pro': 'Satu versi aktif / beberapa versi per host di Pro',
        'Multiple managed versions per project': 'Beberapa versi terkelola per proyek',
        'Web servers': 'Server web',
        'Apache, Nginx': 'Apache, Nginx',
        'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy',
        'MySQL / MariaDB': 'MySQL / MariaDB',
        'Built-in or supported': 'Bawaan atau didukung',
        'Multiple database modules': 'Berbagai modul database',
        'PostgreSQL / Redis': 'PostgreSQL / Redis',
        'Optional add-on': 'Add-on opsional',
        'Built-in modules': 'Modul bawaan',
        'Local hosts / SSL': 'Host lokal / SSL',
        'Per-host configuration': 'Konfigurasi per host',
        'Built-in and automatic per project': 'Bawaan dan otomatis per proyek',
        'Project-specific configuration': 'Konfigurasi khusus proyek',
        'Per-host web configuration': 'Konfigurasi web per host',
        'Per-project runtimes, services and domains': 'Runtime, layanan, dan domain per proyek',
        'Some add-ons': 'Beberapa modul tambahan',
        'Many first-class modules': 'Banyak modul bawaan yang terintegrasi',
        'Database GUI tools': 'Alat GUI database',
        phpMyAdmin: 'phpMyAdmin',
        'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate, dan lainnya',
        'AI / MCP integration': 'Integrasi AI / MCP',
        'Not included': 'Tidak termasuk',
        'FlyEnv MCP Server and AI CLI modules': 'Server MCP FlyEnv dan modul AI CLI',
        'Object storage': 'Penyimpanan objek',
        'Add separately': 'Perlu ditambahkan secara terpisah',
        'Managed MinIO / RustFS modules': 'Modul MinIO / RustFS terkelola',
        'Typical workflow: a project that needs more than a web stack': 'Alur umum: proyek yang membutuhkan lebih dari sekadar stack web',
        'With MAMP / MAMP Pro': 'Dengan MAMP / MAMP Pro',
        'Create a local host or site': 'Buat host atau situs lokal',
        'Choose the PHP version for the host': 'Pilih versi PHP untuk host',
        'Configure Apache or Nginx': 'Konfigurasikan Apache atau Nginx',
        'Enable local HTTPS or SSL': 'Aktifkan HTTPS atau SSL lokal',
        'Connect MySQL': 'Hubungkan MySQL',
        'Add extra services or tools separately when needed': 'Tambahkan layanan atau alat ekstra secara terpisah bila diperlukan',
        'Manage non-core services outside the main host workflow': 'Kelola layanan noninti di luar alur host utama',
        'You mostly build PHP or WordPress sites.': 'Anda terutama membuat situs PHP atau WordPress.',
        'You prefer a mature local host workflow.': 'Anda memilih alur host lokal yang matang.',
        'Your projects fit within a web-focused stack.': 'Proyek Anda sesuai dengan stack yang berfokus pada web.',
        'You want host-level settings and familiar tooling.': 'Anda menginginkan pengaturan tingkat host dan alat yang familiar.',
        'You work across PHP, Node.js, Python, Go or Java.': 'Anda bekerja dengan PHP, Node.js, Python, Go, atau Java.',
        'You need project services, integrated tools and a broader workspace.': 'Anda membutuhkan layanan proyek, alat terintegrasi, dan ruang kerja lebih luas.',
        'You want local infrastructure modules beside each project.': 'Anda ingin modul infrastruktur lokal di samping tiap proyek.',
        'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Anda memakai klien coding AI atau layanan AI lokal seperti Ollama dan ingin mengelolanya bersama stack proyek.',
        'Should I switch from MAMP Pro to FlyEnv?': 'Haruskah saya beralih dari MAMP Pro ke FlyEnv?',
        'Not necessarily. MAMP Pro remains a strong fit for PHP and WordPress hosts. FlyEnv becomes more useful when you need broader runtime families, integrated infrastructure modules, or project-level service configuration.': 'Tidak selalu. MAMP Pro tetap cocok untuk host PHP dan WordPress. FlyEnv lebih berguna saat Anda memerlukan lebih banyak keluarga runtime, modul infrastruktur terintegrasi, atau konfigurasi layanan tingkat proyek.',
        'Can FlyEnv handle the same PHP website workflows as MAMP Pro?': 'Apakah FlyEnv menangani alur situs PHP yang sama seperti MAMP Pro?',
        'Yes. FlyEnv supports Apache or Nginx, multiple PHP versions, local domains, HTTPS, databases, and existing PHP or WordPress project directories.': 'Bisa. FlyEnv mendukung Apache atau Nginx, beberapa versi PHP, domain lokal, HTTPS, database, serta direktori proyek PHP atau WordPress yang ada.',
        'Do I need to move my existing MAMP sites?': 'Apakah saya perlu memindahkan situs MAMP yang ada?',
        'No. You can keep the existing project directories and recreate their local site, runtime, database, and service settings in FlyEnv.': 'Tidak. Anda dapat mempertahankan direktori proyek yang ada dan membuat ulang pengaturan situs lokal, runtime, database, serta layanan di FlyEnv.',
        'Can FlyEnv manage WordPress and traditional PHP sites?': 'Apakah FlyEnv dapat mengelola situs WordPress dan PHP tradisional?',
        'Yes. Configure each site with the PHP version, web server, database, domain, and HTTPS settings it needs.': 'Bisa. Konfigurasikan setiap situs dengan versi PHP, server web, database, domain, dan pengaturan HTTPS yang diperlukan.',
        'When does FlyEnv make more sense than MAMP Pro?': 'Kapan FlyEnv lebih tepat daripada MAMP Pro?',
        'FlyEnv is a stronger fit when one machine or team needs Node.js, Python, Go, Java, multiple databases, caches, mail testing, object storage, or project-specific service groups.': 'FlyEnv lebih cocok saat satu mesin atau tim membutuhkan Node.js, Python, Go, Java, banyak database, cache, pengujian email, penyimpanan objek, atau grup layanan khusus proyek.',
        'Can I use both MAMP Pro and FlyEnv on the same machine?': 'Bisakah saya memakai MAMP Pro dan FlyEnv di mesin yang sama?',
        'Yes, but avoid starting both tools on overlapping ports. Stop one web server or database service before launching the other environment.': 'Bisa, tetapi hindari menjalankan kedua alat pada port yang sama. Hentikan salah satu server web atau layanan database sebelum menjalankan lingkungan lainnya.',
        'Does FlyEnv support custom local domains and HTTPS?': 'Apakah FlyEnv mendukung domain lokal khusus dan HTTPS?',
        'Yes. FlyEnv manages custom domains, local certificates, ports, and site settings from its Host workflow.': 'Bisa. FlyEnv mengelola domain khusus, sertifikat lokal, port, dan pengaturan situs melalui alur Host.',
        'Can FlyEnv manage databases and infrastructure modules?': 'Apakah FlyEnv dapat mengelola database dan modul infrastruktur?',
        'Yes. FlyEnv provides managed modules for databases, caches, mail testing, object storage, and other local services, with startup groups for project workflows.': 'Bisa. FlyEnv menyediakan modul terkelola untuk database, cache, pengujian email, penyimpanan objek, dan layanan lokal lain, dengan Startup Groups untuk alur proyek.',
        'Bring runtimes, infrastructure and project services into one workspace.': 'Satukan runtime, infrastruktur, dan layanan proyek dalam satu ruang kerja.',
        'With FlyEnv': 'Dengan FlyEnv',
        'Create or import a local project': 'Buat atau impor proyek lokal',
        'Choose the runtime family and version': 'Pilih keluarga dan versi runtime',
        'Choose a web server when needed': 'Pilih server web bila diperlukan',
        'Start MySQL, Redis, Mailpit or other services': 'Jalankan MySQL, Redis, Mailpit, atau layanan lain',
        'Save the project services as a startup group': 'Simpan layanan proyek sebagai Startup Group',
        'Cross-platform workspace across macOS, Windows and Linux': 'Ruang kerja lintas platform di macOS, Windows, dan Linux',
        'Multiple runtime families and service versions': 'Berbagai keluarga runtime dan versi layanan',
        'Project-specific domains, HTTPS and services': 'Domain, HTTPS, dan layanan khusus proyek',
        'Infrastructure modules managed as first-class services': 'Modul infrastruktur dikelola sebagai layanan bawaan',
        'One workspace for broader development workflows': 'Satu ruang kerja untuk alur pengembangan yang lebih luas'
      },
      es: {
        'Three key differences': 'Tres diferencias clave',
        'Different development scopes': 'Diferentes ámbitos de desarrollo',
        'Feature comparison': 'Comparación de funciones',
        'Which one should you choose?': '¿Cuál deberías elegir?',
        'Frequently asked questions': 'Preguntas frecuentes',
        'Choose MAMP / MAMP Pro if': 'Elige MAMP / MAMP Pro si',
        'Choose FlyEnv if': 'Elige FlyEnv si',
        Project: 'Proyecto',
        'Host-focused local web development': 'Desarrollo web local centrado en hosts',
        'Host-focused local web development (macOS / Windows)': 'Desarrollo web local centrado en hosts (macOS / Windows)',
        'A broader project workspace (macOS, Windows, Linux)': 'Un espacio de trabajo de proyectos más amplio (macOS, Windows, Linux)',
        'Web development stack or broader multi-runtime workspace?': '¿Stack de desarrollo web o un espacio de trabajo multi-runtime más amplio?',
        'MAMP and MAMP Pro excel at PHP, WordPress and local web hosts. FlyEnv expands that workflow across multiple runtimes, databases, services and developer tools.': 'MAMP y MAMP Pro destacan en PHP, WordPress y hosts web locales. FlyEnv amplía ese flujo de trabajo a múltiples runtimes, bases de datos, servicios y herramientas para desarrolladores.',
        'PHP and WordPress': 'PHP y WordPress',
        'Local hosts': 'Hosts locales',
        'WordPress host · Pro': 'Host de WordPress · Pro',
        'Legacy host · Pro': 'Host heredado · Pro',
        'A mature host and site workflow for web projects, with broader modules handled separately.': 'Un flujo de trabajo de hosts y sitios maduro para proyectos web, con los módulos más amplios gestionados por separado.',
        'Both are strong tools—optimized for different workflows.': 'Ambas son herramientas potentes, optimizadas para flujos de trabajo diferentes.',
        'Web-focused vs multi-runtime': 'Centrado en la web vs multi-runtime',
        'MAMP centers on PHP and local web hosts. FlyEnv supports PHP, Node.js, Python, Go, Java and more.': 'MAMP se centra en PHP y hosts web locales. FlyEnv admite PHP, Node.js, Python, Go, Java y más.',
        'Host-centric vs project workspace': 'Centrado en hosts vs espacio de trabajo de proyectos',
        'MAMP Pro organizes local hosts and sites. FlyEnv organizes complete projects and their dependent services.': 'MAMP Pro organiza hosts y sitios locales. FlyEnv organiza proyectos completos y sus servicios dependientes.',
        'Curated web stack vs broader modules': 'Stack web seleccionado vs módulos más amplios',
        'FlyEnv brings databases, caches, mail testing, object storage and other modules into one workspace.': 'FlyEnv reúne bases de datos, cachés, pruebas de correo, almacenamiento de objetos y otros módulos en un solo espacio de trabajo.',
        'Mature local web host workflow': 'Flujo de trabajo de hosts web locales maduro',
        'Multiple PHP versions and host settings in MAMP Pro': 'Múltiples versiones de PHP y ajustes de host en MAMP Pro',
        'Good fit for PHP and WordPress development': 'Ideal para el desarrollo con PHP y WordPress',
        'Available on macOS and Windows': 'Disponible en macOS y Windows',
        'Multiple runtime families': 'Múltiples familias de runtimes',
        'PHP, Node.js, Python, Go and Java': 'PHP, Node.js, Python, Go y Java',
        'Install and run several runtime families side by side without rebuilding the host workflow.': 'Instala y ejecuta varias familias de runtimes en paralelo sin reconstruir el flujo de trabajo de hosts.',
        'FlyEnv runtime version installation interface': 'Interfaz de instalación de versiones de runtime de FlyEnv',
        'Infrastructure modules': 'Módulos de infraestructura',
        'Databases, caches and storage': 'Bases de datos, cachés y almacenamiento',
        'Bring databases, caching, mail testing and object storage into the same workspace.': 'Reúne bases de datos, caché, pruebas de correo y almacenamiento de objetos en el mismo espacio de trabajo.',
        'FlyEnv local site HTTPS configuration interface': 'Interfaz de configuración HTTPS de sitios locales de FlyEnv',
        'Project service groups': 'Grupos de servicios de proyecto',
        'Startup Groups': 'Startup Groups',
        'Start the exact services a project needs without managing each as a separate external tool.': 'Inicia exactamente los servicios que un proyecto necesita sin gestionar cada uno como una herramienta externa independiente.',
        'FlyEnv service management interface': 'Interfaz de gestión de servicios de FlyEnv',
        Platforms: 'Plataformas',
        'macOS, Windows': 'macOS, Windows',
        'macOS, Windows, Linux': 'macOS, Windows, Linux',
        'PHP versions': 'Versiones de PHP',
        'Single active version / multiple per host in Pro': 'Una versión activa / varias por host en Pro',
        'Multiple managed versions per project': 'Varias versiones gestionadas por proyecto',
        'Web servers': 'Servidores web',
        'Apache, Nginx': 'Apache, Nginx',
        'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy',
        'MySQL / MariaDB': 'MySQL / MariaDB',
        'Built-in or supported': 'Integrado o compatible',
        'Multiple database modules': 'Varios módulos de bases de datos',
        'PostgreSQL / Redis': 'PostgreSQL / Redis',
        'Optional add-on': 'Complemento opcional',
        'Built-in modules': 'Módulos integrados',
        'Local hosts / SSL': 'Hosts locales / SSL',
        'Per-host configuration': 'Configuración por host',
        'Built-in and automatic per project': 'Integrado y automático por proyecto',
        'Project-specific configuration': 'Configuración específica del proyecto',
        'Per-host web configuration': 'Configuración web por host',
        'Per-project runtimes, services and domains': 'Runtimes, servicios y dominios por proyecto',
        'Some add-ons': 'Algunos complementos',
        'Many first-class modules': 'Numerosos módulos integrados de primer nivel',
        'Database GUI tools': 'Herramientas GUI de bases de datos',
        phpMyAdmin: 'phpMyAdmin',
        'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate y más',
        'AI / MCP integration': 'Integración de IA / MCP',
        'Not included': 'No incluido',
        'FlyEnv MCP Server and AI CLI modules': 'Servidor MCP de FlyEnv y módulos de CLI de IA',
        'Object storage': 'Almacenamiento de objetos',
        'Add separately': 'Se añade por separado',
        'Managed MinIO / RustFS modules': 'Módulos gestionados de MinIO / RustFS',
        'Typical workflow: a project that needs more than a web stack': 'Flujo de trabajo típico: un proyecto que necesita más que un stack web',
        'With MAMP / MAMP Pro': 'Con MAMP / MAMP Pro',
        'Create a local host or site': 'Crea un host o sitio local',
        'Choose the PHP version for the host': 'Elige la versión de PHP para el host',
        'Configure Apache or Nginx': 'Configura Apache o Nginx',
        'Enable local HTTPS or SSL': 'Activa HTTPS o SSL local',
        'Connect MySQL': 'Conecta MySQL',
        'Add extra services or tools separately when needed': 'Añade servicios o herramientas adicionales por separado cuando sea necesario',
        'Manage non-core services outside the main host workflow': 'Gestiona los servicios no esenciales fuera del flujo de trabajo principal de hosts',
        'You mostly build PHP or WordPress sites.': 'Principalmente creas sitios con PHP o WordPress.',
        'You prefer a mature local host workflow.': 'Prefieres un flujo de trabajo de hosts locales maduro.',
        'Your projects fit within a web-focused stack.': 'Tus proyectos encajan en un stack centrado en la web.',
        'You want host-level settings and familiar tooling.': 'Quieres ajustes a nivel de host y herramientas conocidas.',
        'You work across PHP, Node.js, Python, Go or Java.': 'Trabajas con PHP, Node.js, Python, Go o Java.',
        'You need project services, integrated tools and a broader workspace.': 'Necesitas servicios de proyecto, herramientas integradas y un espacio de trabajo más amplio.',
        'You want local infrastructure modules beside each project.': 'Quieres módulos de infraestructura local junto a cada proyecto.',
        'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Usas clientes de programación con IA o servicios locales de IA como Ollama y quieres gestionarlos junto con el stack de tu proyecto.',
        'Should I switch from MAMP Pro to FlyEnv?': '¿Debería cambiar de MAMP Pro a FlyEnv?',
        'Not necessarily. MAMP Pro remains a strong fit for PHP and WordPress hosts. FlyEnv becomes more useful when you need broader runtime families, integrated infrastructure modules, or project-level service configuration.': 'No necesariamente. MAMP Pro sigue siendo una gran opción para hosts de PHP y WordPress. FlyEnv resulta más útil cuando necesitas más familias de runtimes, módulos de infraestructura integrados o configuración de servicios a nivel de proyecto.',
        'Can FlyEnv handle the same PHP website workflows as MAMP Pro?': '¿Puede FlyEnv gestionar los mismos flujos de trabajo de sitios PHP que MAMP Pro?',
        'Yes. FlyEnv supports Apache or Nginx, multiple PHP versions, local domains, HTTPS, databases, and existing PHP or WordPress project directories.': 'Sí. FlyEnv admite Apache o Nginx, múltiples versiones de PHP, dominios locales, HTTPS, bases de datos y directorios de proyectos PHP o WordPress existentes.',
        'Do I need to move my existing MAMP sites?': '¿Necesito migrar mis sitios de MAMP existentes?',
        'No. You can keep the existing project directories and recreate their local site, runtime, database, and service settings in FlyEnv.': 'No. Puedes conservar los directorios de proyectos existentes y volver a crear sus ajustes de sitio local, runtime, base de datos y servicios en FlyEnv.',
        'Can FlyEnv manage WordPress and traditional PHP sites?': '¿Puede FlyEnv gestionar sitios de WordPress y PHP tradicionales?',
        'Yes. Configure each site with the PHP version, web server, database, domain, and HTTPS settings it needs.': 'Sí. Configura cada sitio con la versión de PHP, el servidor web, la base de datos, el dominio y los ajustes de HTTPS que necesite.',
        'When does FlyEnv make more sense than MAMP Pro?': '¿Cuándo tiene más sentido FlyEnv que MAMP Pro?',
        'FlyEnv is a stronger fit when one machine or team needs Node.js, Python, Go, Java, multiple databases, caches, mail testing, object storage, or project-specific service groups.': 'FlyEnv es la mejor opción cuando una máquina o un equipo necesita Node.js, Python, Go, Java, varias bases de datos, cachés, pruebas de correo, almacenamiento de objetos o grupos de servicios específicos de cada proyecto.',
        'Can I use both MAMP Pro and FlyEnv on the same machine?': '¿Puedo usar MAMP Pro y FlyEnv en la misma máquina?',
        'Yes, but avoid starting both tools on overlapping ports. Stop one web server or database service before launching the other environment.': 'Sí, pero evita iniciar ambas herramientas en puertos que se solapen. Detén un servidor web o servicio de base de datos antes de iniciar el otro entorno.',
        'Does FlyEnv support custom local domains and HTTPS?': '¿Admite FlyEnv dominios locales personalizados y HTTPS?',
        'Yes. FlyEnv manages custom domains, local certificates, ports, and site settings from its Host workflow.': 'Sí. FlyEnv gestiona dominios personalizados, certificados locales, puertos y ajustes de sitio desde su flujo de trabajo de Host.',
        'Can FlyEnv manage databases and infrastructure modules?': '¿Puede FlyEnv gestionar bases de datos y módulos de infraestructura?',
        'Yes. FlyEnv provides managed modules for databases, caches, mail testing, object storage, and other local services, with startup groups for project workflows.': 'Sí. FlyEnv proporciona módulos gestionados para bases de datos, cachés, pruebas de correo, almacenamiento de objetos y otros servicios locales, con grupos de inicio para los flujos de trabajo de proyectos.',
        'Bring runtimes, infrastructure and project services into one workspace.': 'Reúne runtimes, infraestructura y servicios de proyecto en un solo espacio de trabajo.',
        'With FlyEnv': 'Con FlyEnv',
        'Create or import a local project': 'Crea o importa un proyecto local',
        'Choose the runtime family and version': 'Elige la familia y la versión del runtime',
        'Choose a web server when needed': 'Elige un servidor web cuando sea necesario',
        'Start MySQL, Redis, Mailpit or other services': 'Inicia MySQL, Redis, Mailpit u otros servicios',
        'Save the project services as a startup group': 'Guarda los servicios del proyecto como un grupo de inicio',
        'Cross-platform workspace across macOS, Windows and Linux': 'Espacio de trabajo multiplataforma en macOS, Windows y Linux',
        'Multiple runtime families and service versions': 'Varias familias de runtimes y versiones de servicios',
        'Project-specific domains, HTTPS and services': 'Dominios, HTTPS y servicios específicos del proyecto',
        'Infrastructure modules managed as first-class services': 'Módulos de infraestructura gestionados como servicios de primer nivel',
        'One workspace for broader development workflows': 'Un solo espacio de trabajo para flujos de desarrollo más amplios'
      }
    }
    if (typeof value === 'string') return maps[locale]?.[value] || value
    if (Array.isArray(value)) return value.map((item) => localeText(item, locale))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localeText(item, locale)]))
    return value
  }
  const icon = (name: string) => `https://oss.macphpstudy.com/image/assets/demo-logos/${name}.svg`
  const flyenvProjects = [
    {
      name: 'Laravel Project',
      kind: 'Project',
      icon: icon('laravel'),
      services: [
        { name: 'Nginx', icon: icon('nginx') },
        { name: 'PHP 8.3', icon: icon('php') },
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
        { name: 'Tomcat', icon: icon('apache') },
        { name: 'Java', icon: icon('openjdk') },
        { name: 'PostgreSQL', icon: icon('postgresql') },
        { name: 'Redis', icon: icon('redis') }
      ]
    }
  ]
  const competitor = {
    name: 'MAMP / MAMP Pro',
    mark: 'M',
    model: 'Host-focused local web development',
    heroModelCaption: 'Host-focused local web development (macOS / Windows)',
    heroFlyenvCaption: 'A broader project workspace (macOS, Windows, Linux)',
    heroTitle: 'Web development stack or broader multi-runtime workspace?',
    heroDescription:
      'MAMP and MAMP Pro excel at PHP, WordPress and local web hosts. FlyEnv expands that workflow across multiple runtimes, databases, services and developer tools.',
    platforms: ['macOS', 'Windows', 'PHP and WordPress', 'Local hosts'],
    scopes: [
      {
        title: 'wordpress.local',
        detail: 'WordPress host · Pro',
        services: [
          { name: 'Nginx', icon: icon('nginx') },
          { name: 'PHP 8.3', icon: icon('php') },
          { name: 'MySQL', icon: icon('mysql') }
        ]
      },
      {
        title: 'legacy-php.local',
        detail: 'Legacy host · Pro',
        services: [
          { name: 'Apache', icon: icon('apache') },
          { name: 'PHP 7.4', icon: icon('php') },
          { name: 'MySQL', icon: icon('mysql') }
        ]
      }
    ],
    scopeNote:
      'A mature host and site workflow for web projects, with broader modules handled separately.',
    differencesTitle: 'Three key differences',
    differencesIntro: 'Both are strong tools—optimized for different workflows.',
    differences: [
      {
        title: 'Web-focused vs multi-runtime',
        body: 'MAMP centers on PHP and local web hosts. FlyEnv supports PHP, Node.js, Python, Go, Java and more.'
      },
      {
        title: 'Host-centric vs project workspace',
        body: 'MAMP Pro organizes local hosts and sites. FlyEnv organizes complete projects and their dependent services.'
      },
      {
        title: 'Curated web stack vs broader modules',
        body: 'FlyEnv brings databases, caches, mail testing, object storage and other modules into one workspace.'
      }
    ],
    scopeTitle: 'Different development scopes',
    modelBullets: [
      'Mature local web host workflow',
      'Multiple PHP versions and host settings in MAMP Pro',
      'Good fit for PHP and WordPress development',
      'Available on macOS and Windows'
    ],
    dailyCards: [
      {
        title: 'Multiple runtime families',
        placeholder: 'PHP, Node.js, Python, Go and Java',
        body: 'Install and run several runtime families side by side without rebuilding the host workflow.',
        image: 'https://oss.macphpstudy.com/image/quick-start-2.webp',
        imageAlt: 'FlyEnv runtime version installation interface'
      },
      {
        title: 'Infrastructure modules',
        placeholder: 'Databases, caches and storage',
        body: 'Bring databases, caching, mail testing and object storage into the same workspace.',
        image: 'https://oss.macphpstudy.com/image/host-1.webp',
        imageAlt: 'FlyEnv local site HTTPS configuration interface'
      },
      {
        title: 'Project service groups',
        placeholder: 'Startup Groups',
        body: 'Start the exact services a project needs without managing each as a separate external tool.',
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
        competitor: 'Single active version / multiple per host in Pro',
        flyenv: 'Multiple managed versions per project',
        competitorOk: true
      },
      {
        name: 'Web servers',
        competitor: 'Apache, Nginx',
        flyenv: 'Nginx, Apache, Caddy',
        competitorOk: true
      },
      {
        name: 'MySQL / MariaDB',
        competitor: 'Built-in or supported',
        flyenv: 'Multiple database modules',
        competitorOk: true
      },
      {
        name: 'PostgreSQL / Redis',
        competitor: 'Optional add-on',
        flyenv: 'Built-in modules',
        competitorOk: false
      },
      {
        name: 'Local hosts / SSL',
        competitor: 'Per-host configuration',
        flyenv: 'Built-in and automatic per project',
        competitorOk: true
      },
      {
        name: 'Project-specific configuration',
        competitor: 'Per-host web configuration',
        flyenv: 'Per-project runtimes, services and domains',
        competitorOk: true
      },
      {
        name: 'Infrastructure modules',
        competitor: 'Some add-ons',
        flyenv: 'Many first-class modules',
        competitorOk: false
      },
      {
        name: 'Database GUI tools',
        competitor: 'phpMyAdmin',
        flyenv: 'phpMyAdmin, pgAdmin, DbGate and more',
        competitorOk: true
      },
      {
        name: 'AI / MCP integration',
        competitor: 'Not included',
        flyenv: 'FlyEnv MCP Server and AI CLI modules',
        competitorOk: false
      },
      {
        name: 'Object storage',
        competitor: 'Add separately',
        flyenv: 'Managed MinIO / RustFS modules',
        competitorOk: false
      }
    ],
    workflowTitle: 'Typical workflow: a project that needs more than a web stack',
    workflow: {
      title: 'With MAMP / MAMP Pro',
      mark: 'M',
      kind: 'competitor',
      steps: [
        'Create a local host or site',
        'Choose the PHP version for the host',
        'Configure Apache or Nginx',
        'Enable local HTTPS or SSL',
        'Connect MySQL',
        'Add extra services or tools separately when needed',
        'Manage non-core services outside the main host workflow'
      ]
    },
    choices: [
      {
        title: 'Choose MAMP / MAMP Pro if',
        kind: 'competitor',
        items: [
          'You mostly build PHP or WordPress sites.',
          'You prefer a mature local host workflow.',
          'Your projects fit within a web-focused stack.',
          'You want host-level settings and familiar tooling.'
        ]
      },
      {
        title: 'Choose FlyEnv if',
        kind: 'flyenv',
        items: [
          'You work across PHP, Node.js, Python, Go or Java.',
          'You need project services, integrated tools and a broader workspace.',
          'You want local infrastructure modules beside each project.',
          'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Should I switch from MAMP Pro to FlyEnv?',
        answer:
          'Not necessarily. MAMP Pro remains a strong fit for PHP and WordPress hosts. FlyEnv becomes more useful when you need broader runtime families, integrated infrastructure modules, or project-level service configuration.'
      },
      {
        question: 'Can FlyEnv handle the same PHP website workflows as MAMP Pro?',
        answer:
          'Yes. FlyEnv supports Apache or Nginx, multiple PHP versions, local domains, HTTPS, databases, and existing PHP or WordPress project directories.'
      },
      {
        question: 'Do I need to move my existing MAMP sites?',
        answer:
          'No. You can keep the existing project directories and recreate their local site, runtime, database, and service settings in FlyEnv.'
      },
      {
        question: 'Can FlyEnv manage WordPress and traditional PHP sites?',
        answer:
          'Yes. Configure each site with the PHP version, web server, database, domain, and HTTPS settings it needs.'
      },
      {
        question: 'When does FlyEnv make more sense than MAMP Pro?',
        answer:
          'FlyEnv is a stronger fit when one machine or team needs Node.js, Python, Go, Java, multiple databases, caches, mail testing, object storage, or project-specific service groups.'
      },
      {
        question: 'Can I use both MAMP Pro and FlyEnv on the same machine?',
        answer:
          'Yes, but avoid starting both tools on overlapping ports. Stop one web server or database service before launching the other environment.'
      },
      {
        question: 'Does FlyEnv support custom local domains and HTTPS?',
        answer:
          'Yes. FlyEnv manages custom domains, local certificates, ports, and site settings from its Host workflow.'
      },
      {
        question: 'Can FlyEnv manage databases and infrastructure modules?',
        answer:
          'Yes. FlyEnv provides managed modules for databases, caches, mail testing, object storage, and other local services, with startup groups for project workflows.'
      }
    ],
    ctaDescription: 'Bring runtimes, infrastructure and project services into one workspace.'
  }
  const localizedCompetitor = localeText(competitor, locale)
  const flyenvWorkflow = {
    title: 'With FlyEnv',
    mark: 'F',
    kind: 'flyenv' as const,
    steps: [
      'Create or import a local project',
      'Choose the runtime family and version',
      'Choose a web server when needed',
      'Start MySQL, Redis, Mailpit or other services',
      'Save the project services as a startup group'
    ]
  }
</script>

<template>
  <ComparisonLoopPage
    :competitor="localizedCompetitor"
    :flyenv-projects="flyenvProjects"
    :flyenv-bullets="localeText([
      'Cross-platform workspace across macOS, Windows and Linux',
      'Multiple runtime families and service versions',
      'Project-specific domains, HTTPS and services',
      'Infrastructure modules managed as first-class services',
      'One workspace for broader development workflows'
    ], locale)"
    :flyenv-workflow="localeText(flyenvWorkflow, locale)"
    :locale="props.locale"
  />
</template>
