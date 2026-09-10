<script setup lang="ts">
  import ComparisonLoopPage from './ComparisonLoopPage.vue'
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' }>()
  const locale = props.locale || 'en'
  const localeText = (value: any, translations: any): any => {
    if (typeof value === 'string') return translations[locale]?.[value] || value
    if (Array.isArray(value)) return value.map((item) => localeText(item, translations))
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, localeText(item, translations)]))
    return value
  }

  const icon = (name: string) => `https://oss.macphpstudy.com/image/assets/demo-logos/${name}.svg`
  const flyenvProjects = [
    {
      name: 'Laravel',
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
      name: 'WordPress',
      kind: 'Project',
      icon: icon('wordpress'),
      services: [
        { name: 'Apache', icon: icon('apache') },
        { name: 'PHP 7.4', icon: icon('php') },
        { name: 'MariaDB', icon: icon('mariadb') },
        { name: 'Mailpit', icon: icon('php') }
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
    }
  ]
  const competitor = {
    name: 'Laragon',
    mark: 'L',
    model: 'Global environment switching',
    heroModelCaption: 'Global environment switching (Windows only)',
    heroFlyenvCaption: 'A dedicated environment per project (macOS, Windows, Linux)',
    heroTitle: 'Windows-first environment or cross-platform project workspace?',
    heroDescription:
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.',
    platforms: ['Windows', 'macOS', 'Linux', 'Free and open source'],
    scopes: [
      {
        title: 'PHP 8.3',
        detail: 'Active environment',
        services: [
          { name: 'PHP', icon: icon('php') },
          { name: 'Nginx', icon: icon('nginx') }
        ]
      },
      {
        title: 'Global services',
        detail: 'Switch together',
        services: [
          { name: 'Apache', icon: icon('apache') },
          { name: 'MySQL', icon: icon('mysql') },
          { name: 'Redis', icon: icon('redis') }
        ]
      }
    ],
    scopeNote:
      'One local environment for all projects. Switch PHP, web server and services globally.',
    modelCaption: 'Lightweight and flexible (Windows)',
    modelServices: [
      { name: 'Apache', icon: icon('apache') },
      { name: 'Nginx', icon: icon('nginx') },
      { name: 'PHP', icon: icon('php') },
      { name: 'MySQL', icon: icon('mysql') }
    ],
    modelRoot: 'C:\\laragon\\www (web root)',
    modelProjects: ['project-a', 'project-b', 'project-c'],
    flyenvCaption: 'Project-based environments (macOS / Windows / Linux)',
    differencesTitle: 'Why developers compare FlyEnv and Laragon',
    differencesIntro:
      'Both are excellent tools, but they are built with different goals and design philosophies.',
    differences: [
      {
        title: 'Windows-first vs cross-platform',
        body: 'Laragon runs on Windows. FlyEnv works natively across macOS, Windows and Linux.'
      },
      {
        title: 'Environment switching vs project configuration',
        body: 'Laragon focuses on global environment switching; FlyEnv lets each project keep its own settings.'
      },
      {
        title: 'Lightweight vs integrated modules',
        body: 'Laragon stays compact and extensible. FlyEnv brings runtimes, services and project tools into one workspace.'
      }
    ],
    scopeTitle: 'Different development models',
    modelBullets: [
      'Fast and easy to set up',
      'Switch PHP and services globally',
      'Automatic virtual hosts (Pretty URLs)',
      'Lightweight and extensible with portable tools',
      'Windows only'
    ],
    dailyCards: [
      {
        title: 'Multiple runtime versions',
        placeholder: 'PHP and runtime versions',
        body: 'Install and run multiple PHP versions side by side without conflicts.',
        image: 'https://oss.macphpstudy.com/image/quick-start-2.webp',
        imageAlt: 'FlyEnv runtime version installation interface'
      },
      {
        title: 'Local domains and HTTPS',
        placeholder: 'Local sites and HTTPS',
        body: 'Create local sites with custom domains and automatic HTTPS.',
        image: 'https://oss.macphpstudy.com/image/host-1.webp',
        imageAlt: 'FlyEnv local site HTTPS configuration interface'
      },
      {
        title: 'Project-specific service stacks',
        placeholder: 'Startup Groups and services',
        body: 'Keep each project’s web server, runtime and supporting services together.',
        image: 'https://oss.macphpstudy.com/image/features/startup-groups-1.webp',
        imageAlt: 'FlyEnv service management interface'
      }
    ],
    featureRows: [
      {
        name: 'Platforms',
        competitor: 'Windows only',
        flyenv: 'macOS, Windows, Linux',
        competitorOk: false
      },
      {
        name: 'PHP versions',
        competitor: 'Multiple versions (environment-level switching)',
        flyenv: 'Multiple managed versions (per project)',
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
        competitor: 'Built-in',
        flyenv: 'Multiple database modules',
        competitorOk: true
      },
      {
        name: 'PostgreSQL / Redis',
        competitor: 'Addable / package-based',
        flyenv: 'Built-in modules',
        competitorOk: false
      },
      {
        name: 'Local custom domains',
        competitor: 'Automatic Pretty URLs',
        flyenv: 'Built-in and managed',
        competitorOk: true
      },
      {
        name: 'Project configuration',
        competitor: 'Environment-oriented',
        flyenv: 'Per-project runtimes, services and domains',
        competitorOk: false
      },
      {
        name: 'Startup groups',
        competitor: 'Not available',
        flyenv: 'Built-in project services',
        competitorOk: false
      },
      {
        name: 'Database GUI tools',
        competitor: 'Bundled or addable tools',
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
    workflowTitle: 'Typical workflow: using different PHP versions',
    workflow: {
      title: 'With Laragon',
      mark: 'L',
      kind: 'competitor',
      steps: [
        'Add the required PHP versions',
        'Switch the active PHP version',
        'Restart or reload the environment',
        'Work on your project',
        'Switch again for another project'
      ]
    },
    choices: [
      {
        title: 'Choose Laragon if',
        kind: 'competitor',
        items: [
          'You are on Windows and mainly develop PHP applications.',
          'You want a lightweight, fast and portable local environment.',
          'Your projects can share one active runtime configuration.',
          'You prefer automatic local hosts with minimal setup.'
        ]
      },
      {
        title: 'Choose FlyEnv if',
        kind: 'flyenv',
        items: [
          'You need the same tool on macOS, Windows and Linux.',
          'Different projects need different runtimes, services or domains.',
          'You want databases, caches and tools managed in one workspace.',
          'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.'
        ]
      }
    ],
    faqs: [
      {
        question: 'Should I switch from Laragon to FlyEnv?',
        answer:
          'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.'
      },
      {
        question: 'Is Laragon only for Windows?',
        answer:
          'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.'
      },
      {
        question: 'Can I keep my existing Laragon projects?',
        answer:
          'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.'
      },
      {
        question: 'Can I still use Apache with FlyEnv?',
        answer:
          'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.'
      },
      {
        question: 'Can different projects use different PHP versions?',
        answer:
          'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.'
      },
      {
        question: 'Does FlyEnv support custom local domains and HTTPS?',
        answer:
          'Yes. You can manage custom domains and local HTTPS per project or site, keeping host settings separate instead of switching one global environment.'
      },
      {
        question: 'Can FlyEnv manage databases and other local services?',
        answer:
          'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.'
      },
      {
        question: 'Is FlyEnv suitable for team development?',
        answer:
          'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.'
      }
    ],
    ctaDescription: 'Keep each project’s runtimes, domains and services configured independently.'
  }
  const localizedCompetitor = localeText(competitor, {
    zh: {
      'Why developers compare FlyEnv and Laragon': '为什么开发者会比较 FlyEnv 和 Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': '两款工具都很出色，但目标和设计理念不同。',
      'Different development models': '不同的开发模式',
      'Typical workflow: using different PHP versions': '典型流程：使用不同的 PHP 版本',
      'Choose Laragon if': '适合选择 Laragon 的情况', 'Choose FlyEnv if': '适合选择 FlyEnv 的情况',
      'Frequently asked questions': '常见问题',
      'Windows-first environment or cross-platform project workspace?': 'Windows 优先的环境，还是跨平台的项目工作区？',
      'Lightweight and easy to use': '轻量且易于使用', 'Global environment switching': '全局切换环境',
      'Project-based environments': '按项目划分的环境', 'Windows only': '仅支持 Windows',
      'Active environment': '当前环境', 'Global services': '全局服务', 'Switch together': '一起切换',
      'Project': '项目', 'Built-in': '内置', 'Not available': '不可用', 'Not included': '未包含', 'Free and open source': '免费且开源',
      'Add separately': '需单独添加', 'Addable / package-based': '可添加 / 基于软件包',
      'Automatic Pretty URLs': '自动生成友好 URL', 'Per-project runtimes, services and domains': '按项目配置运行时、服务和域名',
      'Keep each project’s runtimes, domains and services configured independently.': '让每个项目独立配置运行时、域名和服务。',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon 是面向 Windows、专注 Web/PHP 开发的轻量易用本地服务器环境。FlyEnv 是原生跨平台工作区，可让每个项目使用各自的运行时和服务。',
      'Global environment switching (Windows only)': '全局切换环境（仅限 Windows）', 'A dedicated environment per project (macOS, Windows, Linux)': '每个项目独立的环境（macOS、Windows、Linux）', 'One local environment for all projects. Switch PHP, web server and services globally.': '所有项目共用一个本地环境，全局切换 PHP、Web 服务器和服务。', 'Each project has its own runtimes, services, ports, and configuration.': '每个项目都有自己的运行时、服务、端口和配置。', 'Lightweight and flexible (Windows)': '轻量灵活（Windows）', 'C:\\laragon\\www (web root)': 'C:\\laragon\\www（网站根目录）', 'Fast and easy to set up': '快速且易于设置', 'Switch PHP and services globally': '全局切换 PHP 和服务', 'Automatic virtual hosts (Pretty URLs)': '自动创建虚拟主机（自动生成友好 URL）', 'Lightweight and extensible with portable tools': '轻量且可通过便携工具扩展', 'Project-based environments (macOS / Windows / Linux)': '按项目划分的环境（macOS / Windows / Linux）', 'Cross-platform (macOS, Windows, Linux)': '跨平台（macOS、Windows、Linux）', 'Multiple runtimes and service versions': '多个运行时和服务版本', 'Custom domains and HTTPS per project': '按项目配置自定义域名和 HTTPS', 'Project settings stay separate from other projects': '项目设置与其他项目保持独立', 'Each project keeps its own runtime and service configuration': '每个项目保留自己的运行时和服务配置', 'View the same setup in FlyEnv’s runtime, site, and service workflows.': '在 FlyEnv 的运行时、站点和服务工作流中查看相同配置。',
      'Multiple runtime versions': '多个运行时版本', 'PHP and runtime versions': 'PHP 和运行时版本', 'Install and run multiple PHP versions side by side without conflicts.': '并行安装和运行多个 PHP 版本，互不冲突。', 'Local domains and HTTPS': '本地域名和 HTTPS', 'Local sites and HTTPS': '本地站点和 HTTPS', 'Create local sites with custom domains and automatic HTTPS.': '创建带自定义域名和自动 HTTPS 的本地站点。', 'Project-specific service stacks': '项目专属服务堆栈', 'Startup Groups and services': '启动组和服务', 'Keep each project’s web server, runtime and supporting services together.': '将每个项目的 Web 服务器、运行时和配套服务集中管理。', 'Platforms': '平台',  'macOS, Windows, Linux': 'macOS、Windows、Linux', 'PHP versions': 'PHP 版本', 'Multiple versions (environment-level switching)': '多个版本（环境级切换）', 'Multiple managed versions (per project)': '多个托管版本（按项目）', 'Web servers': 'Web 服务器', 'Apache, Nginx': 'Apache、Nginx', 'Nginx, Apache, Caddy': 'Nginx、Apache、Caddy', 'MySQL / MariaDB': 'MySQL / MariaDB', 'Multiple database modules': '多个数据库模块', 'PostgreSQL / Redis': 'PostgreSQL / Redis', 'Built-in modules': '内置模块', 'Local custom domains': '本地自定义域名',  'Built-in and managed': '内置并托管', 'Project configuration': '项目配置', 'Environment-oriented': '以环境为中心',  'Startup groups': '启动组', 'Built-in project services': '内置项目服务', 'Bundled or addable tools': '捆绑或可添加的工具', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin、pgAdmin、DbGate 等', 'AI / MCP integration': 'AI / MCP 集成', 'FlyEnv MCP Server and AI CLI modules': 'FlyEnv MCP 服务器和 AI CLI 模块', 'Object storage': '对象存储', 'Managed MinIO / RustFS modules': '托管 MinIO / RustFS 模块',
       'With Laragon': '使用 Laragon', 'With FlyEnv': '使用 FlyEnv', 'Add the required PHP versions': '添加所需的 PHP 版本', 'Switch the active PHP version': '切换当前 PHP 版本', 'Restart or reload the environment': '重启或重新加载环境', 'Work on your project': '处理项目', 'Switch again for another project': '为另一个项目再次切换', 'Install PHP 7.4 and PHP 8.3': '安装 PHP 7.4 和 PHP 8.3', 'Assign PHP 7.4 to Project A': '为项目 A 分配 PHP 7.4', 'Assign PHP 8.3 to Project B': '为项目 B 分配 PHP 8.3', 'Open either project without changing the other': '打开任一项目而不影响另一个项目', 'Switch between projects without changing global PHP': '在项目间切换而不改变全局 PHP',
      'You are on Windows and mainly develop PHP applications.': '你使用 Windows，主要开发 PHP 应用。', 'You want a lightweight, fast and portable local environment.': '你希望使用轻量、快速且可移植的本地环境。', 'Your projects can share one active runtime configuration.': '项目可以共用一套当前运行时配置。', 'You prefer automatic local hosts with minimal setup.': '你偏好几乎无需设置的自动本地主机。', 'You need the same tool on macOS, Windows and Linux.': '你需要在 macOS、Windows 和 Linux 上使用同一工具。', 'Different projects need different runtimes, services or domains.': '不同项目需要不同的运行时、服务或域名。', 'You want databases, caches and tools managed in one workspace.': '你希望在一个工作区管理数据库、缓存和工具。', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': '你使用 AI 编程客户端或 Ollama 等本地 AI 服务，并希望与项目堆栈一起管理。',
      'Should I switch from Laragon to FlyEnv?': '我应该从 Laragon 切换到 FlyEnv 吗？', 'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': '不一定。如果 Laragon 已经满足你的 Windows 工作流，就没有太多切换理由。当你需要跨平台一致性、按项目配置运行时和服务，或更多集成模块时，FlyEnv 会更有价值。', 'Is Laragon only for Windows?': 'Laragon 只支持 Windows 吗？', 'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon 面向 Windows 构建。若团队或项目需要跨平台使用相同本地工作流，FlyEnv 支持 macOS、Windows 和 Linux。', 'Can I keep my existing Laragon projects?': '可以保留现有 Laragon 项目吗？', 'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': '可以。FlyEnv 可使用现有项目目录。通常只需重新创建本地站点、运行时、服务和域名设置，无需重写应用代码。', 'Can I still use Apache with FlyEnv?': 'FlyEnv 还能使用 Apache 吗？', 'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': '可以。Apache 与 Nginx、Caddy 一样可用，因此现有 Apache 项目可以保留熟悉的 Web 服务器设置。', 'Can different projects use different PHP versions?': '不同项目可以使用不同 PHP 版本吗？', 'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': '可以。FlyEnv 可管理多个 PHP 版本，并为每个项目或本地站点分配所需版本，无需为所有项目更改全局运行时。', 'Does FlyEnv support custom local domains and HTTPS?': 'FlyEnv 支持自定义本地域名和 HTTPS 吗？', 'Yes. You can manage custom domains and local HTTPS per project or site, keeping host settings separate instead of switching one global environment.': '支持。你可以按项目或站点管理自定义域名和本地 HTTPS，让主机设置彼此独立，而不是切换一个全局环境。', 'Can FlyEnv manage databases and other local services?': 'FlyEnv 能管理数据库和其他本地服务吗？', 'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': '可以。FlyEnv 将数据库、缓存、邮件测试、对象存储和其他模块集中到一个工作区，让每个项目启动所需服务。', 'Is FlyEnv suitable for team development?': 'FlyEnv 适合团队开发吗？', 'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv 帮助团队在 macOS、Windows 和 Linux 上统一本地运行时、域名和项目服务。生产一致性仍可能需要容器或团队的部署标准。'
    },
    id: {
      'Why developers compare FlyEnv and Laragon': 'Mengapa developer membandingkan FlyEnv dan Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': 'Keduanya adalah alat yang baik, tetapi dibangun untuk tujuan dan filosofi desain yang berbeda.',
      'Different development models': 'Model pengembangan yang berbeda',
      'Typical workflow: using different PHP versions': 'Alur umum: menggunakan versi PHP yang berbeda',
      'Choose Laragon if': 'Pilih Laragon jika', 'Choose FlyEnv if': 'Pilih FlyEnv jika',
      'Frequently asked questions': 'Pertanyaan umum',
      'Windows-first environment or cross-platform project workspace?': 'Lingkungan khusus Windows atau ruang kerja proyek lintas platform?',
      'Global environment switching': 'Pergantian lingkungan global', 'Project-based environments': 'Lingkungan berbasis proyek',
      'Windows only': 'Khusus Windows', 'Active environment': 'Lingkungan aktif', 'Global services': 'Layanan global', 'Free and open source': 'Gratis dan sumber terbuka',
      'Switch together': 'Beralih bersama', 'Project': 'Proyek', 'Built-in': 'Bawaan', 'Not available': 'Tidak tersedia',
      'Not included': 'Tidak termasuk', 'Add separately': 'Tambahkan terpisah', 'Addable / package-based': 'Dapat ditambahkan / berbasis paket',
      'Automatic Pretty URLs': 'URL ramah otomatis', 'Per-project runtimes, services and domains': 'Runtime, layanan, dan domain per proyek',
      'Keep each project’s runtimes, domains and services configured independently.': 'Konfigurasikan runtime, domain, dan layanan setiap proyek secara mandiri.',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon adalah lingkungan server lokal yang ringan dan mudah digunakan untuk Windows, berfokus pada pengembangan web/PHP. FlyEnv adalah ruang kerja lintas platform yang berjalan secara native dan memungkinkan tiap proyek memakai runtime serta layanan sendiri.', 'Global environment switching (Windows only)': 'Pergantian lingkungan global (khusus Windows)', 'A dedicated environment per project (macOS, Windows, Linux)': 'Lingkungan khusus tiap proyek (macOS, Windows, Linux)', 'One local environment for all projects. Switch PHP, web server and services globally.': 'Satu lingkungan lokal untuk semua proyek. Ganti PHP, server web, dan layanan secara global.', 'Each project has its own runtimes, services, ports, and configuration.': 'Setiap proyek memiliki runtime, layanan, port, dan konfigurasi sendiri.', 'Lightweight and flexible (Windows)': 'Ringan dan fleksibel (Windows)', 'C:\\laragon\\www (web root)': 'C:\\laragon\\www (direktori root web)', 'Fast and easy to set up': 'Cepat dan mudah dikonfigurasi', 'Switch PHP and services globally': 'Ganti PHP dan layanan secara global', 'Automatic virtual hosts (Pretty URLs)': 'Host virtual otomatis (URL ramah)', 'Lightweight and extensible with portable tools': 'Ringan dan dapat diperluas dengan alat portabel', 'Project-based environments (macOS / Windows / Linux)': 'Lingkungan berbasis proyek (macOS / Windows / Linux)', 'Cross-platform (macOS, Windows, Linux)': 'Lintas platform (macOS, Windows, Linux)', 'Multiple runtimes and service versions': 'Berbagai runtime dan versi layanan', 'Custom domains and HTTPS per project': 'Domain khusus dan HTTPS per proyek', 'Project settings stay separate from other projects': 'Pengaturan proyek tetap terpisah', 'Each project keeps its own runtime and service configuration': 'Setiap proyek menyimpan konfigurasi runtime dan layanan sendiri',
      'Multiple runtime versions': 'Berbagai versi runtime', 'PHP and runtime versions': 'Versi PHP dan runtime', 'Install and run multiple PHP versions side by side without conflicts.': 'Instal dan jalankan beberapa versi PHP berdampingan tanpa konflik.', 'Local domains and HTTPS': 'Domain lokal dan HTTPS', 'Local sites and HTTPS': 'Situs lokal dan HTTPS', 'Create local sites with custom domains and automatic HTTPS.': 'Buat situs lokal dengan domain khusus dan HTTPS otomatis.', 'Project-specific service stacks': 'Stack layanan khusus proyek', 'Startup Groups and services': 'Startup Groups dan layanan', 'Keep each project’s web server, runtime and supporting services together.': 'Satukan server web, runtime, dan layanan pendukung tiap proyek.', 'Platforms': 'Platform',  'macOS, Windows, Linux': 'macOS, Windows, Linux', 'PHP versions': 'Versi PHP', 'Multiple versions (environment-level switching)': 'Beberapa versi (pergantian tingkat lingkungan)', 'Multiple managed versions (per project)': 'Beberapa versi terkelola (per proyek)', 'Web servers': 'Server web', 'Apache, Nginx': 'Apache, Nginx', 'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy', 'MySQL / MariaDB': 'MySQL / MariaDB', 'Multiple database modules': 'Berbagai modul database', 'PostgreSQL / Redis': 'PostgreSQL / Redis', 'Built-in modules': 'Modul bawaan', 'Local custom domains': 'Domain lokal khusus',  'Built-in and managed': 'Bawaan dan terkelola', 'Project configuration': 'Konfigurasi proyek', 'Environment-oriented': 'Berorientasi lingkungan',  'Startup groups': 'Startup Groups', 'Built-in project services': 'Layanan proyek bawaan', 'Bundled or addable tools': 'Alat bawaan atau dapat ditambahkan', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate, dan lainnya', 'AI / MCP integration': 'Integrasi AI / MCP', 'FlyEnv MCP Server and AI CLI modules': 'Server MCP FlyEnv dan modul AI CLI', 'Object storage': 'Penyimpanan objek', 'Managed MinIO / RustFS modules': 'Modul MinIO / RustFS terkelola',
       'With Laragon': 'Dengan Laragon', 'With FlyEnv': 'Dengan FlyEnv', 'Add the required PHP versions': 'Tambahkan versi PHP yang diperlukan', 'Switch the active PHP version': 'Ganti versi PHP aktif', 'Restart or reload the environment': 'Mulai ulang atau muat ulang lingkungan', 'Work on your project': 'Kerjakan proyek Anda', 'Switch again for another project': 'Beralih lagi untuk proyek lain', 'Install PHP 7.4 and PHP 8.3': 'Instal PHP 7.4 dan PHP 8.3', 'Assign PHP 7.4 to Project A': 'Tetapkan PHP 7.4 ke Proyek A', 'Assign PHP 8.3 to Project B': 'Tetapkan PHP 8.3 ke Proyek B', 'Open either project without changing the other': 'Buka salah satu proyek tanpa mengubah lainnya', 'Switch between projects without changing global PHP': 'Beralih antarproyek tanpa mengubah PHP global',
      'You are on Windows and mainly develop PHP applications.': 'Anda memakai Windows dan terutama mengembangkan aplikasi PHP.', 'You want a lightweight, fast and portable local environment.': 'Anda menginginkan lingkungan lokal yang ringan, cepat, dan portabel.', 'Your projects can share one active runtime configuration.': 'Proyek Anda dapat berbagi satu konfigurasi runtime aktif.', 'You prefer automatic local hosts with minimal setup.': 'Anda menyukai host lokal otomatis dengan penyiapan minimal.', 'You need the same tool on macOS, Windows and Linux.': 'Anda memerlukan alat yang sama di macOS, Windows, dan Linux.', 'Different projects need different runtimes, services or domains.': 'Proyek berbeda memerlukan runtime, layanan, atau domain berbeda.', 'You want databases, caches and tools managed in one workspace.': 'Anda ingin database, cache, dan alat dikelola dalam satu ruang kerja.', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Anda memakai klien coding AI atau layanan AI lokal seperti Ollama dan ingin mengelolanya bersama stack proyek.',
      'Should I switch from Laragon to FlyEnv?': 'Haruskah saya beralih dari Laragon ke FlyEnv?', 'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': 'Tidak selalu. Jika Laragon sudah sesuai dengan alur kerja khusus Windows Anda, tidak banyak alasan untuk beralih. FlyEnv lebih berguna saat Anda memerlukan konsistensi lintas platform, konfigurasi runtime dan layanan per proyek, atau modul yang lebih terintegrasi.', 'Is Laragon only for Windows?': 'Apakah Laragon hanya untuk Windows?', 'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon dibuat untuk Windows. FlyEnv mendukung macOS, Windows, dan Linux saat tim atau proyek memerlukan alur lokal yang sama lintas platform.', 'Can I keep my existing Laragon projects?': 'Bisakah saya mempertahankan proyek Laragon yang ada?', 'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': 'Bisa. FlyEnv dapat memakai direktori proyek yang ada. Biasanya Anda hanya perlu membuat ulang situs lokal, runtime, layanan, dan pengaturan domain tanpa menulis ulang kode aplikasi.', 'Can I still use Apache with FlyEnv?': 'Apakah saya masih bisa memakai Apache dengan FlyEnv?', 'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': 'Bisa. Apache tersedia bersama Nginx dan Caddy, sehingga proyek berbasis Apache dapat mempertahankan konfigurasi server web yang sudah dikenal.', 'Can different projects use different PHP versions?': 'Bisakah proyek berbeda memakai versi PHP berbeda?', 'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': 'Bisa. FlyEnv dapat mengelola beberapa versi PHP dan menetapkan versi yang diperlukan tiap proyek atau situs lokal tanpa mengubah runtime global.', 'Does FlyEnv support custom local domains and HTTPS?': 'Apakah FlyEnv mendukung domain lokal khusus dan HTTPS?', 'Yes. You can manage custom domains and local HTTPS per project or site, keeping host settings separate instead of switching one global environment.': 'Ya. Anda dapat mengelola domain khusus dan HTTPS lokal per proyek atau situs; pengaturan host tetap terisolasi, bukan dengan beralih di satu lingkungan global.', 'Can FlyEnv manage databases and other local services?': 'Apakah FlyEnv dapat mengelola database dan layanan lokal lain?', 'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': 'Bisa. FlyEnv menyatukan database, cache, pengujian email, penyimpanan objek, dan modul lain dalam satu ruang kerja sehingga tiap proyek dapat memulai layanan yang diperlukan.', 'Is FlyEnv suitable for team development?': 'Apakah FlyEnv cocok untuk pengembangan tim?', 'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv membantu tim menyelaraskan runtime lokal, domain, dan layanan proyek di macOS, Windows, dan Linux. Konsistensi dengan lingkungan produksi mungkin tetap memerlukan container atau standar deployment tim.'
    }
  })
  if (locale === 'zh') {
    localizedCompetitor.featureRows.forEach((row: any) => {
      if (row.name === 'Database GUI tools') row.name = '数据库图形工具'
    })
  } else if (locale === 'id') {
    localizedCompetitor.featureRows.forEach((row: any) => {
      if (row.name === 'Database GUI tools') row.name = 'Alat GUI database'
    })
  }
  if (locale === 'zh') {
    localizedCompetitor.differences = [
      { title: 'Windows 优先与跨平台', body: 'Laragon 运行于 Windows；FlyEnv 原生支持 macOS、Windows 和 Linux。' },
      { title: '环境切换与项目配置', body: 'Laragon 侧重全局环境切换；FlyEnv 让每个项目保留自己的设置。' },
      { title: '轻量与集成模块', body: 'Laragon 保持轻量且可扩展；FlyEnv 将运行时、服务和项目工具集中在一个工作区。' }
    ]
  } else if (locale === 'id') {
    localizedCompetitor.differences = [
      { title: 'Berorientasi Windows vs lintas platform', body: 'Laragon berjalan di Windows; FlyEnv berjalan secara native di macOS, Windows, dan Linux.' },
      { title: 'Pergantian lingkungan vs konfigurasi proyek', body: 'Laragon berfokus pada pergantian lingkungan global; FlyEnv memungkinkan tiap proyek menyimpan pengaturannya sendiri.' },
      { title: 'Ringan vs modul terintegrasi', body: 'Laragon tetap ringkas dan dapat diperluas; FlyEnv menyatukan runtime, layanan, dan alat proyek dalam satu ruang kerja.' }
    ]
  }
  const flyenvWorkflow = {
    title: 'With FlyEnv',
    mark: 'F',
    kind: 'flyenv' as const,
    steps: [
      'Install PHP 7.4 and PHP 8.3',
      'Assign PHP 7.4 to Project A',
      'Assign PHP 8.3 to Project B',
      'Open either project without changing the other',
      'Switch between projects without changing global PHP'
    ]
  }
</script>

<template>
  <ComparisonLoopPage
    :competitor="localizedCompetitor"
    :flyenv-projects="flyenvProjects"
    :flyenv-bullets="locale === 'zh'
      ? ['跨平台（macOS、Windows、Linux）', '多个运行时和服务版本', '按项目配置自定义域名和 HTTPS', '项目设置与其他项目保持独立', '每个项目保留自己的运行时和服务配置']
      : locale === 'id'
        ? ['Lintas platform (macOS, Windows, Linux)', 'Berbagai runtime dan versi layanan', 'Domain khusus dan HTTPS per proyek', 'Pengaturan proyek tetap terpisah', 'Setiap proyek menyimpan konfigurasi runtime dan layanan sendiri']
        : ['Cross-platform (macOS, Windows, Linux)', 'Multiple runtimes and service versions', 'Custom domains and HTTPS per project', 'Project settings stay separate from other projects', 'Each project keeps its own runtime and service configuration']"
    :flyenv-workflow="locale === 'zh' ? { ...flyenvWorkflow,  steps: ['安装 PHP 7.4 和 PHP 8.3', '为项目 A 分配 PHP 7.4', '为项目 B 分配 PHP 8.3', '打开任一项目而不影响另一个项目', '在项目之间切换而无需更改全局 PHP'] } : locale === 'id' ? { ...flyenvWorkflow,  steps: ['Instal PHP 7.4 dan PHP 8.3', 'Tetapkan PHP 7.4 ke Proyek A', 'Tetapkan PHP 8.3 ke Proyek B', 'Buka salah satu proyek tanpa mengubah proyek lain', 'Beralih proyek tanpa mengubah PHP global'] } : flyenvWorkflow"
    :locale="props.locale"
  />
</template>
