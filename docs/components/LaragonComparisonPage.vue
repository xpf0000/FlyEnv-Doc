<script setup lang="ts">
  import ComparisonLoopPage from './ComparisonLoopPage.vue'
  import ComparisonMigration from './ComparisonMigration.vue'
  import { laragonMigration } from '../data/compare/migrations'
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' | 'es' | 'vi' }>()
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
        { name: 'PHP 8.2', icon: icon('php') },
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
    model: 'Multi-Stack Profiles',
    heroModelCaption: 'Multi-Stack Profiles (Windows)',
    heroFlyenvCaption: 'Runtime and service settings by project (macOS, Windows, Linux)',
    heroTitle: 'Windows-first environment or cross-platform project workspace?',
    heroDescription:
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.',
    platforms: ['Windows', 'macOS', 'Linux', 'Free and open source'],
    scopes: [
      {
        title: 'PHP 8.3',
        detail: 'Example profile',
        services: [
          { name: 'PHP', icon: icon('php') },
          { name: 'Nginx', icon: icon('nginx') }
        ]
      },
      {
        title: 'Stack services',
        detail: 'Versions saved in a profile',
        services: [
          { name: 'Apache', icon: icon('apache') },
          { name: 'MySQL', icon: icon('mysql') },
          { name: 'Redis', icon: icon('redis') }
        ]
      }
    ],
    scopeNote:
      'Save versions of PHP, the web server and database in Laragon Profiles. Select the profile you want to work with.',
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
        title: 'Saved profiles and project settings',
        body: 'Laragon Profiles save a stack’s component versions. In FlyEnv, choose the site PHP in Host, bind CLI runtimes to a project folder and save its managed services in a Startup Group.'
      },
      {
        title: 'Lightweight vs integrated modules',
        body: 'Laragon stays compact and extensible. FlyEnv brings runtimes, services and project tools into one workspace.'
      }
    ],
    scopeTitle: 'Different development models',
    modelBullets: [
      'Fast and easy to set up',
      'Switch among saved stack profiles',
      'Automatic virtual hosts (Pretty URLs)',
      'Lightweight and extensible with portable tools',
      'Windows only'
    ],
    dailyCards: [
      {
        title: 'Multiple runtime versions',
        placeholder: 'PHP and runtime versions',
        body: 'Install multiple PHP versions and select the one each site needs.',
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
        competitorOk: true
      },
      {
        name: 'PHP versions',
        competitor: 'Multiple versions via the PHP menu or Profiles',
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
        name: 'MySQL',
        competitor: 'Included in the Full installer',
        flyenv: 'Multiple database modules',
        competitorOk: true
      },
      {
        name: 'PostgreSQL / Redis',
        competitor: 'Included in the Full installer',
        flyenv: 'Built-in modules',
        competitorOk: true
      },
      {
        name: 'Local custom domains',
        competitor: 'Automatic Pretty URLs',
        flyenv: 'Built-in and managed',
        competitorOk: true
      },
      {
        name: 'Project configuration',
        competitor: 'Multi-Stack Profiles and Procfile support',
        flyenv: 'Per-project runtimes, services and domains',
        competitorOk: true
      },
      {
        name: 'Database GUI tools',
        competitor: 'Bundled or addable tools',
        flyenv: 'phpMyAdmin, pgAdmin, DbGate and more',
        competitorOk: true
      },
    ],
    workflowTitle: 'Typical workflow: using different PHP versions',
    workflow: {
      title: 'With Laragon',
      mark: 'L',
      kind: 'competitor',
      steps: [
        'Add the required PHP versions',
        'Create or select a stack profile',
        'Assign the PHP, web server and database versions',
        'Work on your project',
        'Select another saved profile when needed'
      ]
    },
    choices: [
      {
        title: 'Choose Laragon if',
        kind: 'competitor',
        items: [
          'You are on Windows and mainly develop PHP applications.',
          'You want a lightweight, fast and portable local environment.',
          'You already organize your stacks with Laragon Profiles.',
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
          'Yes. In FlyEnv Host, configure a custom domain and local HTTPS for each site.'
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
      'Local HTTPS': '本地 HTTPS',
      'Why developers compare FlyEnv and Laragon': '为什么开发者会比较 FlyEnv 和 Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': '两款工具都很出色，但目标和设计理念不同。',
      'Different development models': '不同的开发模式',
      'Typical workflow: using different PHP versions': '典型流程：使用不同的 PHP 版本',
      'Choose Laragon if': '适合选择 Laragon 的情况', 'Choose FlyEnv if': '适合选择 FlyEnv 的情况',
      'Frequently asked questions': '常见问题',
      'Windows-first environment or cross-platform project workspace?': 'Windows 优先的环境，还是跨平台的项目工作区？',
      'Lightweight and easy to use': '轻量且易于使用', 'Multi-Stack Profiles': '多套环境配置',
      'Project-based environments': '按项目划分的环境', 'Windows only': '仅支持 Windows',
      'Example profile': '配置示例', 'Stack services': '环境服务', 'Versions saved in a profile': '版本保存在配置中',
      'Project': '项目', 'Built-in': '内置', 'Not available': '不可用', 'Not included': '未包含', 'Free and open source': '免费且开源',
      'Add separately': '需单独添加', 'Included in the Full installer': '完整安装包已包含',
      'Automatic Pretty URLs': '自动生成友好 URL', 'Per-project runtimes, services and domains': '按项目配置运行时、服务和域名',
      'Keep each project’s runtimes, domains and services configured independently.': '让每个项目独立配置运行时、域名和服务。',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon 是面向 Windows、专注 Web/PHP 开发的轻量易用本地服务器环境。FlyEnv 是原生跨平台工作区，可让每个项目使用各自的运行时和服务。',
      'Multi-Stack Profiles (Windows)': '多套环境配置（Windows）', 'Runtime and service settings by project (macOS, Windows, Linux)': '按项目配置运行时和服务（macOS、Windows、Linux）', 'Save versions of PHP, the web server and database in Laragon Profiles. Select the profile you want to work with.': '在 Laragon Profile 中保存 PHP、Web 服务器和数据库版本，开发时选择所需的配置。', 'Each project has its own runtimes, services, ports, and configuration.': '每个项目都有自己的运行时、服务、端口和配置。', 'Lightweight and flexible (Windows)': '轻量灵活（Windows）', 'C:\\laragon\\www (web root)': 'C:\\laragon\\www（网站根目录）', 'Fast and easy to set up': '快速且易于设置', 'Switch among saved stack profiles': '切换已保存的环境配置', 'Automatic virtual hosts (Pretty URLs)': '自动创建虚拟主机（自动生成友好 URL）', 'Lightweight and extensible with portable tools': '轻量且可通过便携工具扩展', 'Project-based environments (macOS / Windows / Linux)': '按项目划分的环境（macOS / Windows / Linux）', 'Cross-platform (macOS, Windows, Linux)': '跨平台（macOS、Windows、Linux）', 'Multiple runtimes and service versions': '多个运行时和服务版本', 'Custom domains and HTTPS per project': '按项目配置自定义域名和 HTTPS', 'Project settings stay separate from other projects': '项目设置与其他项目保持独立', 'Each project keeps its own runtime and service configuration': '每个项目保留自己的运行时和服务配置', 'View the same setup in FlyEnv’s runtime, site, and service workflows.': '在 FlyEnv 的运行时、站点和服务工作流中查看相同配置。',
      'Multiple runtime versions': '多个运行时版本', 'PHP and runtime versions': 'PHP 和运行时版本', 'Install multiple PHP versions and select the one each site needs.': '安装多个 PHP 版本，再为每个站点选择所需版本。', 'Local domains and HTTPS': '本地域名和 HTTPS', 'Local sites and HTTPS': '本地站点和 HTTPS', 'Create local sites with custom domains and automatic HTTPS.': '创建带自定义域名和自动 HTTPS 的本地站点。', 'Project-specific service stacks': '项目专属服务堆栈', 'Startup Groups and services': '启动组和服务', 'Keep each project’s web server, runtime and supporting services together.': '将每个项目的 Web 服务器、运行时和配套服务集中管理。', 'Platforms': '平台',  'macOS, Windows, Linux': 'macOS、Windows、Linux', 'PHP versions': 'PHP 版本', 'Multiple versions via the PHP menu or Profiles': '通过 PHP 菜单或 Profile 切换版本', 'Multiple managed versions (per project)': '多个托管版本（按项目）', 'Web servers': 'Web 服务器', 'Apache, Nginx': 'Apache、Nginx', 'Nginx, Apache, Caddy': 'Nginx、Apache、Caddy', 'MySQL / MariaDB': 'MySQL / MariaDB', 'Multiple database modules': '多个数据库模块', 'PostgreSQL / Redis': 'PostgreSQL / Redis', 'Built-in modules': '内置模块', 'Local custom domains': '本地自定义域名',  'Built-in and managed': '内置并托管', 'Project configuration': '项目配置', 'Multi-Stack Profiles and Procfile support': '多套环境配置和 Procfile 支持',  'Startup groups': '启动组', 'Built-in project services': '内置项目服务', 'Bundled or addable tools': '捆绑或可添加的工具', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin、pgAdmin、DbGate 等', 'AI / MCP integration': 'AI / MCP 集成', 'FlyEnv MCP Server and AI CLI modules': 'FlyEnv MCP 服务器和 AI CLI 模块', 'Object storage': '对象存储', 'Managed MinIO / RustFS modules': '托管 MinIO / RustFS 模块',
       'With Laragon': '使用 Laragon', 'With FlyEnv': '使用 FlyEnv', 'Add the required PHP versions': '添加所需的 PHP 版本', 'Create or select a stack profile': '创建或选择环境配置', 'Assign the PHP, web server and database versions': '指定 PHP、Web 服务器和数据库版本', 'Work on your project': '处理项目', 'Select another saved profile when needed': '按需选择另一个已保存的配置', 'Install PHP 8.2 and PHP 8.3': '安装 PHP 8.2 和 PHP 8.3', 'Assign PHP 8.2 to Project A': '为项目 A 分配 PHP 8.2', 'Assign PHP 8.3 to Project B': '为项目 B 分配 PHP 8.3', 'Open either project without changing the other': '打开任一项目而不影响另一个项目', 'Switch between projects without changing global PHP': '在项目间切换而不改变全局 PHP',
      'You are on Windows and mainly develop PHP applications.': '你使用 Windows，主要开发 PHP 应用。', 'You want a lightweight, fast and portable local environment.': '你希望使用轻量、快速且可移植的本地环境。', 'You already organize your stacks with Laragon Profiles.': '你已经用 Laragon Profile 管理不同技术栈。', 'You prefer automatic local hosts with minimal setup.': '你偏好几乎无需设置的自动本地主机。', 'You need the same tool on macOS, Windows and Linux.': '你需要在 macOS、Windows 和 Linux 上使用同一工具。', 'Different projects need different runtimes, services or domains.': '不同项目需要不同的运行时、服务或域名。', 'You want databases, caches and tools managed in one workspace.': '你希望在一个工作区管理数据库、缓存和工具。', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': '你使用 AI 编程客户端或 Ollama 等本地 AI 服务，并希望与项目堆栈一起管理。',
      'Should I switch from Laragon to FlyEnv?': '我应该从 Laragon 切换到 FlyEnv 吗？', 'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': '不一定。如果 Laragon 已经满足你的 Windows 工作流，就没有太多切换理由。当你需要跨平台一致性、按项目配置运行时和服务，或更多集成模块时，FlyEnv 会更有价值。', 'Is Laragon only for Windows?': 'Laragon 只支持 Windows 吗？', 'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon 面向 Windows 构建。若团队或项目需要跨平台使用相同本地工作流，FlyEnv 支持 macOS、Windows 和 Linux。', 'Can I keep my existing Laragon projects?': '可以保留现有 Laragon 项目吗？', 'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': '可以。FlyEnv 可使用现有项目目录。通常只需重新创建本地站点、运行时、服务和域名设置，无需重写应用代码。', 'Can I still use Apache with FlyEnv?': 'FlyEnv 还能使用 Apache 吗？', 'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': '可以。Apache 与 Nginx、Caddy 一样可用，因此现有 Apache 项目可以保留熟悉的 Web 服务器设置。', 'Can different projects use different PHP versions?': '不同项目可以使用不同 PHP 版本吗？', 'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': '可以。FlyEnv 可管理多个 PHP 版本，并为每个项目或本地站点分配所需版本，无需为所有项目更改全局运行时。', 'Does FlyEnv support custom local domains and HTTPS?': 'FlyEnv 支持自定义本地域名和 HTTPS 吗？', 'Yes. In FlyEnv Host, configure a custom domain and local HTTPS for each site.': '可以。在 FlyEnv「站点」中为每个站点配置自定义域名和本地 HTTPS。', 'Can FlyEnv manage databases and other local services?': 'FlyEnv 能管理数据库和其他本地服务吗？', 'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': '可以。FlyEnv 将数据库、缓存、邮件测试、对象存储和其他模块集中到一个工作区，让每个项目启动所需服务。', 'Is FlyEnv suitable for team development?': 'FlyEnv 适合团队开发吗？', 'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv 帮助团队在 macOS、Windows 和 Linux 上统一本地运行时、域名和项目服务。生产一致性仍可能需要容器或团队的部署标准。'
    },
    id: {
      'Local HTTPS': 'HTTPS lokal',
      'Why developers compare FlyEnv and Laragon': 'Mengapa developer membandingkan FlyEnv dan Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': 'Keduanya adalah alat yang baik, tetapi dibangun untuk tujuan dan filosofi desain yang berbeda.',
      'Different development models': 'Model pengembangan yang berbeda',
      'Typical workflow: using different PHP versions': 'Alur umum: menggunakan versi PHP yang berbeda',
      'Choose Laragon if': 'Pilih Laragon jika', 'Choose FlyEnv if': 'Pilih FlyEnv jika',
      'Frequently asked questions': 'Pertanyaan umum',
      'Windows-first environment or cross-platform project workspace?': 'Lingkungan khusus Windows atau ruang kerja proyek lintas platform?',
      'Multi-Stack Profiles': 'Profil Multi-Stack', 'Project-based environments': 'Lingkungan berbasis proyek',
      'Windows only': 'Khusus Windows', 'Example profile': 'Contoh profil', 'Stack services': 'Layanan stack', 'Free and open source': 'Gratis dan sumber terbuka',
      'Versions saved in a profile': 'Versi tersimpan dalam profil', 'Project': 'Proyek', 'Built-in': 'Bawaan', 'Not available': 'Tidak tersedia',
      'Not included': 'Tidak termasuk', 'Add separately': 'Tambahkan terpisah', 'Included in the Full installer': 'Termasuk dalam installer Full',
      'Automatic Pretty URLs': 'URL ramah otomatis', 'Per-project runtimes, services and domains': 'Runtime, layanan, dan domain per proyek',
      'Keep each project’s runtimes, domains and services configured independently.': 'Konfigurasikan runtime, domain, dan layanan setiap proyek secara mandiri.',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon adalah lingkungan server lokal yang ringan dan mudah digunakan untuk Windows, berfokus pada pengembangan web/PHP. FlyEnv adalah ruang kerja lintas platform yang berjalan secara native dan memungkinkan tiap proyek memakai runtime serta layanan sendiri.', 'Multi-Stack Profiles (Windows)': 'Profil Multi-Stack (Windows)', 'Runtime and service settings by project (macOS, Windows, Linux)': 'Pengaturan runtime dan layanan per proyek (macOS, Windows, Linux)', 'Save versions of PHP, the web server and database in Laragon Profiles. Select the profile you want to work with.': 'Simpan versi PHP, server web, dan database dalam Profil Laragon. Pilih profil sesuai pekerjaan Anda.', 'Each project has its own runtimes, services, ports, and configuration.': 'Setiap proyek memiliki runtime, layanan, port, dan konfigurasi sendiri.', 'Lightweight and flexible (Windows)': 'Ringan dan fleksibel (Windows)', 'C:\\laragon\\www (web root)': 'C:\\laragon\\www (direktori root web)', 'Fast and easy to set up': 'Cepat dan mudah dikonfigurasi', 'Switch among saved stack profiles': 'Beralih di antara profil stack', 'Automatic virtual hosts (Pretty URLs)': 'Host virtual otomatis (URL ramah)', 'Lightweight and extensible with portable tools': 'Ringan dan dapat diperluas dengan alat portabel', 'Project-based environments (macOS / Windows / Linux)': 'Lingkungan berbasis proyek (macOS / Windows / Linux)', 'Cross-platform (macOS, Windows, Linux)': 'Lintas platform (macOS, Windows, Linux)', 'Multiple runtimes and service versions': 'Berbagai runtime dan versi layanan', 'Custom domains and HTTPS per project': 'Domain khusus dan HTTPS per proyek', 'Project settings stay separate from other projects': 'Pengaturan proyek tetap terpisah', 'Each project keeps its own runtime and service configuration': 'Setiap proyek menyimpan konfigurasi runtime dan layanan sendiri',
      'Multiple runtime versions': 'Berbagai versi runtime', 'PHP and runtime versions': 'Versi PHP dan runtime', 'Install multiple PHP versions and select the one each site needs.': 'Instal beberapa versi PHP dan pilih yang diperlukan tiap situs.', 'Local domains and HTTPS': 'Domain lokal dan HTTPS', 'Local sites and HTTPS': 'Situs lokal dan HTTPS', 'Create local sites with custom domains and automatic HTTPS.': 'Buat situs lokal dengan domain khusus dan HTTPS otomatis.', 'Project-specific service stacks': 'Stack layanan khusus proyek', 'Startup Groups and services': 'Startup Groups dan layanan', 'Keep each project’s web server, runtime and supporting services together.': 'Satukan server web, runtime, dan layanan pendukung tiap proyek.', 'Platforms': 'Platform',  'macOS, Windows, Linux': 'macOS, Windows, Linux', 'PHP versions': 'Versi PHP', 'Multiple versions via the PHP menu or Profiles': 'Beberapa versi lewat menu PHP atau Profil', 'Multiple managed versions (per project)': 'Beberapa versi terkelola (per proyek)', 'Web servers': 'Server web', 'Apache, Nginx': 'Apache, Nginx', 'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy', 'MySQL / MariaDB': 'MySQL / MariaDB', 'Multiple database modules': 'Berbagai modul database', 'PostgreSQL / Redis': 'PostgreSQL / Redis', 'Built-in modules': 'Modul bawaan', 'Local custom domains': 'Domain lokal khusus',  'Built-in and managed': 'Bawaan dan terkelola', 'Project configuration': 'Konfigurasi proyek', 'Multi-Stack Profiles and Procfile support': 'Profil Multi-Stack dan dukungan Procfile',  'Startup groups': 'Startup Groups', 'Built-in project services': 'Layanan proyek bawaan', 'Bundled or addable tools': 'Alat bawaan atau dapat ditambahkan', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate, dan lainnya', 'AI / MCP integration': 'Integrasi AI / MCP', 'FlyEnv MCP Server and AI CLI modules': 'Server MCP FlyEnv dan modul AI CLI', 'Object storage': 'Penyimpanan objek', 'Managed MinIO / RustFS modules': 'Modul MinIO / RustFS terkelola',
       'With Laragon': 'Dengan Laragon', 'With FlyEnv': 'Dengan FlyEnv', 'Add the required PHP versions': 'Tambahkan versi PHP yang diperlukan', 'Create or select a stack profile': 'Buat atau pilih profil stack', 'Assign the PHP, web server and database versions': 'Tentukan versi PHP, server web, dan database', 'Work on your project': 'Kerjakan proyek Anda', 'Select another saved profile when needed': 'Pilih profil tersimpan lain bila perlu', 'Install PHP 8.2 and PHP 8.3': 'Instal PHP 8.2 dan PHP 8.3', 'Assign PHP 8.2 to Project A': 'Tetapkan PHP 8.2 ke Proyek A', 'Assign PHP 8.3 to Project B': 'Tetapkan PHP 8.3 ke Proyek B', 'Open either project without changing the other': 'Buka salah satu proyek tanpa mengubah lainnya', 'Switch between projects without changing global PHP': 'Beralih antarproyek tanpa mengubah PHP global',
      'You are on Windows and mainly develop PHP applications.': 'Anda memakai Windows dan terutama mengembangkan aplikasi PHP.', 'You want a lightweight, fast and portable local environment.': 'Anda menginginkan lingkungan lokal yang ringan, cepat, dan portabel.', 'You already organize your stacks with Laragon Profiles.': 'Anda sudah menata stack dengan Profil Laragon.', 'You prefer automatic local hosts with minimal setup.': 'Anda menyukai host lokal otomatis dengan penyiapan minimal.', 'You need the same tool on macOS, Windows and Linux.': 'Anda memerlukan alat yang sama di macOS, Windows, dan Linux.', 'Different projects need different runtimes, services or domains.': 'Proyek berbeda memerlukan runtime, layanan, atau domain berbeda.', 'You want databases, caches and tools managed in one workspace.': 'Anda ingin database, cache, dan alat dikelola dalam satu ruang kerja.', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Anda memakai klien coding AI atau layanan AI lokal seperti Ollama dan ingin mengelolanya bersama stack proyek.',
      'Should I switch from Laragon to FlyEnv?': 'Haruskah saya beralih dari Laragon ke FlyEnv?', 'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': 'Tidak selalu. Jika Laragon sudah sesuai dengan alur kerja khusus Windows Anda, tidak banyak alasan untuk beralih. FlyEnv lebih berguna saat Anda memerlukan konsistensi lintas platform, konfigurasi runtime dan layanan per proyek, atau modul yang lebih terintegrasi.', 'Is Laragon only for Windows?': 'Apakah Laragon hanya untuk Windows?', 'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon dibuat untuk Windows. FlyEnv mendukung macOS, Windows, dan Linux saat tim atau proyek memerlukan alur lokal yang sama lintas platform.', 'Can I keep my existing Laragon projects?': 'Bisakah saya mempertahankan proyek Laragon yang ada?', 'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': 'Bisa. FlyEnv dapat memakai direktori proyek yang ada. Biasanya Anda hanya perlu membuat ulang situs lokal, runtime, layanan, dan pengaturan domain tanpa menulis ulang kode aplikasi.', 'Can I still use Apache with FlyEnv?': 'Apakah saya masih bisa memakai Apache dengan FlyEnv?', 'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': 'Bisa. Apache tersedia bersama Nginx dan Caddy, sehingga proyek berbasis Apache dapat mempertahankan konfigurasi server web yang sudah dikenal.', 'Can different projects use different PHP versions?': 'Bisakah proyek berbeda memakai versi PHP berbeda?', 'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': 'Bisa. FlyEnv dapat mengelola beberapa versi PHP dan menetapkan versi yang diperlukan tiap proyek atau situs lokal tanpa mengubah runtime global.', 'Does FlyEnv support custom local domains and HTTPS?': 'Apakah FlyEnv mendukung domain lokal khusus dan HTTPS?', 'Yes. In FlyEnv Host, configure a custom domain and local HTTPS for each site.': 'Bisa. Di Host FlyEnv, atur domain khusus dan HTTPS lokal untuk tiap situs.', 'Can FlyEnv manage databases and other local services?': 'Apakah FlyEnv dapat mengelola database dan layanan lokal lain?', 'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': 'Bisa. FlyEnv menyatukan database, cache, pengujian email, penyimpanan objek, dan modul lain dalam satu ruang kerja sehingga tiap proyek dapat memulai layanan yang diperlukan.', 'Is FlyEnv suitable for team development?': 'Apakah FlyEnv cocok untuk pengembangan tim?', 'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv membantu tim menyelaraskan runtime lokal, domain, dan layanan proyek di macOS, Windows, dan Linux. Konsistensi dengan lingkungan produksi mungkin tetap memerlukan container atau standar deployment tim.'
    },
    es: {
      'Local HTTPS': 'HTTPS local',
      'Why developers compare FlyEnv and Laragon': 'Por qué los desarrolladores comparan FlyEnv y Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': 'Ambas son excelentes herramientas, pero están construidas con objetivos y filosofías de diseño diferentes.',
      'Different development models': 'Modelos de desarrollo diferentes',
      'Typical workflow: using different PHP versions': 'Flujo de trabajo típico: usar diferentes versiones de PHP',
      'Choose Laragon if': 'Elige Laragon si', 'Choose FlyEnv if': 'Elige FlyEnv si',
      'Frequently asked questions': 'Preguntas frecuentes',
      'Windows-first environment or cross-platform project workspace?': '¿Entorno centrado en Windows o espacio de trabajo multiplataforma por proyecto?',
      'Lightweight and easy to use': 'Ligero y fácil de usar', 'Multi-Stack Profiles': 'Perfiles de stack',
      'Project-based environments': 'Entornos por proyecto', 'Windows only': 'Solo Windows',
      'Example profile': 'Perfil de ejemplo', 'Stack services': 'Servicios del stack', 'Versions saved in a profile': 'Versiones guardadas en un perfil',
      'Project': 'Proyecto', 'Built-in': 'Integrado', 'Not available': 'No disponible', 'Not included': 'No incluido', 'Free and open source': 'Gratuito y de código abierto',
      'Add separately': 'Añadir por separado', 'Included in the Full installer': 'Incluidos en el instalador Full',
      'Automatic Pretty URLs': 'URLs amigables automáticas', 'Per-project runtimes, services and domains': 'Runtimes, servicios y dominios por proyecto',
      'Keep each project’s runtimes, domains and services configured independently.': 'Mantén los runtimes, dominios y servicios de cada proyecto configurados de forma independiente.',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon es un entorno de servidor local ligero y fácil de usar para Windows, centrado en el desarrollo web/PHP. FlyEnv es un espacio de trabajo multiplataforma nativo que te permite asignar a cada proyecto sus propios runtimes y servicios.', 'Multi-Stack Profiles (Windows)': 'Perfiles de stack (Windows)', 'Runtime and service settings by project (macOS, Windows, Linux)': 'Runtimes y servicios por proyecto (macOS, Windows, Linux)', 'Save versions of PHP, the web server and database in Laragon Profiles. Select the profile you want to work with.': 'Guarda las versiones de PHP, del servidor web y de la base de datos en perfiles de Laragon. Selecciona el perfil que necesites.', 'Each project has its own runtimes, services, ports, and configuration.': 'Cada proyecto tiene sus propios runtimes, servicios, puertos y configuración.', 'Lightweight and flexible (Windows)': 'Ligero y flexible (Windows)', 'C:\\laragon\\www (web root)': 'C:\\laragon\\www (raíz web)', 'Fast and easy to set up': 'Rápido y fácil de configurar', 'Switch among saved stack profiles': 'Cambia entre perfiles guardados', 'Automatic virtual hosts (Pretty URLs)': 'Hosts virtuales automáticos (URLs amigables)', 'Lightweight and extensible with portable tools': 'Ligero y extensible con herramientas portátiles', 'Project-based environments (macOS / Windows / Linux)': 'Entornos por proyecto (macOS / Windows / Linux)', 'Cross-platform (macOS, Windows, Linux)': 'Multiplataforma (macOS, Windows, Linux)', 'Multiple runtimes and service versions': 'Múltiples versiones de runtimes y servicios', 'Custom domains and HTTPS per project': 'Dominios personalizados y HTTPS por proyecto', 'Project settings stay separate from other projects': 'La configuración de cada proyecto se mantiene separada de la de los demás', 'Each project keeps its own runtime and service configuration': 'Cada proyecto conserva su propia configuración de runtime y servicios', 'View the same setup in FlyEnv’s runtime, site, and service workflows.': 'Consulta la misma configuración en los flujos de trabajo de runtimes, sitios y servicios de FlyEnv.',
      'Multiple runtime versions': 'Múltiples versiones de runtime', 'PHP and runtime versions': 'Versiones de PHP y runtime', 'Install multiple PHP versions and select the one each site needs.': 'Instala varias versiones de PHP y elige la que necesita cada sitio.', 'Local domains and HTTPS': 'Dominios locales y HTTPS', 'Local sites and HTTPS': 'Sitios locales y HTTPS', 'Create local sites with custom domains and automatic HTTPS.': 'Crea sitios locales con dominios personalizados y HTTPS automático.', 'Project-specific service stacks': 'Stacks de servicios por proyecto', 'Startup Groups and services': 'Grupos de inicio y servicios', 'Keep each project’s web server, runtime and supporting services together.': 'Mantén juntos el servidor web, el runtime y los servicios auxiliares de cada proyecto.', 'Platforms': 'Plataformas',  'macOS, Windows, Linux': 'macOS, Windows, Linux', 'PHP versions': 'Versiones de PHP', 'Multiple versions via the PHP menu or Profiles': 'Varias versiones desde el menú PHP o los perfiles', 'Multiple managed versions (per project)': 'Múltiples versiones gestionadas (por proyecto)', 'Web servers': 'Servidores web', 'Apache, Nginx': 'Apache, Nginx', 'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy', 'MySQL / MariaDB': 'MySQL / MariaDB', 'Multiple database modules': 'Múltiples módulos de base de datos', 'PostgreSQL / Redis': 'PostgreSQL / Redis', 'Built-in modules': 'Módulos integrados', 'Local custom domains': 'Dominios locales personalizados',  'Built-in and managed': 'Integrado y gestionado', 'Project configuration': 'Configuración de proyectos', 'Multi-Stack Profiles and Procfile support': 'Perfiles de stack y compatibilidad con Procfile',  'Startup groups': 'Grupos de inicio', 'Built-in project services': 'Servicios de proyecto integrados', 'Bundled or addable tools': 'Herramientas incluidas o añadibles', 'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate y más', 'AI / MCP integration': 'Integración de IA / MCP', 'FlyEnv MCP Server and AI CLI modules': 'Módulos de FlyEnv MCP Server y AI CLI', 'Object storage': 'Almacenamiento de objetos', 'Managed MinIO / RustFS modules': 'Módulos gestionados de MinIO / RustFS',
       'With Laragon': 'Con Laragon', 'With FlyEnv': 'Con FlyEnv', 'Add the required PHP versions': 'Añade las versiones de PHP necesarias', 'Create or select a stack profile': 'Crea o selecciona un perfil de stack', 'Assign the PHP, web server and database versions': 'Asigna las versiones de PHP, servidor web y base de datos', 'Work on your project': 'Trabaja en tu proyecto', 'Select another saved profile when needed': 'Selecciona otro perfil guardado si lo necesitas', 'Install PHP 8.2 and PHP 8.3': 'Instala PHP 8.2 y PHP 8.3', 'Assign PHP 8.2 to Project A': 'Asigna PHP 8.2 al Proyecto A', 'Assign PHP 8.3 to Project B': 'Asigna PHP 8.3 al Proyecto B', 'Open either project without changing the other': 'Abre cualquier proyecto sin cambiar el otro', 'Switch between projects without changing global PHP': 'Cambia entre proyectos sin modificar el PHP global',
      'You are on Windows and mainly develop PHP applications.': 'Estás en Windows y desarrollas principalmente aplicaciones PHP.', 'You want a lightweight, fast and portable local environment.': 'Quieres un entorno local ligero, rápido y portátil.', 'You already organize your stacks with Laragon Profiles.': 'Ya organizas tus stacks con los perfiles de Laragon.', 'You prefer automatic local hosts with minimal setup.': 'Prefieres hosts locales automáticos con una configuración mínima.', 'You need the same tool on macOS, Windows and Linux.': 'Necesitas la misma herramienta en macOS, Windows y Linux.', 'Different projects need different runtimes, services or domains.': 'Diferentes proyectos necesitan distintos runtimes, servicios o dominios.', 'You want databases, caches and tools managed in one workspace.': 'Quieres gestionar bases de datos, cachés y herramientas en un solo espacio de trabajo.', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Usas clientes de programación con IA o servicios locales de IA como Ollama y quieres gestionarlos junto al stack de tu proyecto.',
      'Should I switch from Laragon to FlyEnv?': '¿Debería cambiar de Laragon a FlyEnv?', 'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': 'No necesariamente. Si Laragon ya se ajusta a tu flujo de trabajo exclusivo de Windows, puede que no haya muchas razones para cambiar. FlyEnv resulta más útil cuando necesitas consistencia multiplataforma, configuración de runtimes y servicios por proyecto, o módulos más integrados.', 'Is Laragon only for Windows?': '¿Laragon es solo para Windows?', 'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon está construido para Windows. FlyEnv es compatible con macOS, Windows y Linux cuando tu equipo o tus proyectos necesitan el mismo flujo de trabajo local en todas las plataformas.', 'Can I keep my existing Laragon projects?': '¿Puedo conservar mis proyectos actuales de Laragon?', 'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': 'Sí. FlyEnv puede usar los directorios de proyecto existentes. Normalmente basta con recrear el sitio local, el runtime, los servicios y la configuración de dominios sin reescribir el código de la aplicación.', 'Can I still use Apache with FlyEnv?': '¿Puedo seguir usando Apache con FlyEnv?', 'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': 'Sí. Apache está disponible junto a Nginx y Caddy, por lo que los proyectos basados en Apache pueden conservar su configuración habitual de servidor web.', 'Can different projects use different PHP versions?': '¿Pueden diferentes proyectos usar diferentes versiones de PHP?', 'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': 'Sí. FlyEnv puede gestionar varias versiones de PHP y asignar a cada proyecto o sitio local la versión que necesita, sin cambiar un runtime global para todos los proyectos.', 'Does FlyEnv support custom local domains and HTTPS?': '¿FlyEnv admite dominios locales personalizados y HTTPS?', 'Yes. In FlyEnv Host, configure a custom domain and local HTTPS for each site.': 'Sí. En Host de FlyEnv puedes configurar un dominio propio y HTTPS local para cada sitio.', 'Can FlyEnv manage databases and other local services?': '¿FlyEnv puede gestionar bases de datos y otros servicios locales?', 'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': 'Sí. FlyEnv reúne bases de datos, cachés, pruebas de correo, almacenamiento de objetos y otros módulos en un solo espacio de trabajo, para que cada proyecto inicie los servicios que necesita.', 'Is FlyEnv suitable for team development?': '¿FlyEnv es adecuado para el desarrollo en equipo?', 'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv ayuda a los equipos a alinear runtimes, dominios y servicios de proyecto locales en macOS, Windows y Linux. La paridad con producción puede seguir requiriendo contenedores o el estándar de despliegue de tu equipo.'
    },
    vi: {
      'Local HTTPS': 'HTTPS cục bộ',
      'Why developers compare FlyEnv and Laragon': 'Vì sao nhà phát triển so sánh FlyEnv và Laragon',
      'Both are excellent tools, but they are built with different goals and design philosophies.': 'Cả hai đều là công cụ xuất sắc, nhưng được xây dựng với mục tiêu và triết lý thiết kế khác nhau.',
      'Different development models': 'Mô hình phát triển khác nhau',
      'Typical workflow: using different PHP versions': 'Quy trình điển hình: dùng các phiên bản PHP khác nhau',
      'Choose Laragon if': 'Chọn Laragon nếu',
      'Choose FlyEnv if': 'Chọn FlyEnv nếu',
      'Frequently asked questions': 'Câu hỏi thường gặp',
      'Windows-first environment or cross-platform project workspace?': 'Môi trường ưu tiên Windows hay không gian làm việc dự án đa nền tảng?',
      'Lightweight and easy to use': 'Nhẹ và dễ dùng',
      'Multi-Stack Profiles': 'Profile đa stack',
      'Project-based environments': 'Môi trường theo dự án',
      'Windows only': 'Chỉ Windows',
      'Example profile': 'Profile ví dụ',
      'Stack services': 'Dịch vụ trong stack',
      'Versions saved in a profile': 'Phiên bản được lưu trong profile',
      Project: 'Dự án',
      'Built-in': 'Tích hợp sẵn',
      'Not available': 'Không khả dụng',
      'Not included': 'Không bao gồm',
      'Free and open source': 'Miễn phí và mã nguồn mở',
      'Add separately': 'Thêm riêng',
      'Included in the Full installer': 'Có trong bộ cài Full',
      'Automatic Pretty URLs': 'Pretty URL tự động',
      'Per-project runtimes, services and domains': 'Runtime, dịch vụ và tên miền mỗi dự án',
      'Keep each project’s runtimes, domains and services configured independently.': 'Giữ runtime, tên miền và dịch vụ mỗi dự án được cấu hình độc lập.',
      'Laragon is a lightweight and easy-to-use local server environment for Windows, focused on web/PHP development. FlyEnv is a native cross-platform workspace that lets you match each project to its own runtimes and services.': 'Laragon là môi trường server local nhẹ và dễ dùng cho Windows, tập trung vào phát triển web/PHP. FlyEnv là không gian làm việc native đa nền tảng giúp bạn gán cho mỗi dự án runtime và dịch vụ riêng.',
      'Multi-Stack Profiles (Windows)': 'Profile đa stack (Windows)',
      'Runtime and service settings by project (macOS, Windows, Linux)': 'Thiết lập runtime và dịch vụ theo dự án (macOS, Windows, Linux)',
      'Save versions of PHP, the web server and database in Laragon Profiles. Select the profile you want to work with.': 'Lưu phiên bản PHP, máy chủ web và cơ sở dữ liệu trong Laragon Profile, rồi chọn profile để làm việc.',
      'Each project has its own runtimes, services, ports, and configuration.': 'Mỗi dự án có runtime, dịch vụ, port và cấu hình riêng.',
      'Lightweight and flexible (Windows)': 'Nhẹ và linh hoạt (Windows)',
      'C:\\laragon\\www (web root)': 'C:\\laragon\\www (web root)',
      'Fast and easy to set up': 'Nhanh và dễ thiết lập',
      'Switch among saved stack profiles': 'Chuyển giữa các profile stack đã lưu',
      'Automatic virtual hosts (Pretty URLs)': 'Virtual host tự động (Pretty URL)',
      'Lightweight and extensible with portable tools': 'Nhẹ và mở rộng được bằng công cụ portable',
      'Project-based environments (macOS / Windows / Linux)': 'Môi trường theo dự án (macOS / Windows / Linux)',
      'Cross-platform (macOS, Windows, Linux)': 'Đa nền tảng (macOS, Windows, Linux)',
      'Multiple runtimes and service versions': 'Nhiều runtime và phiên bản dịch vụ',
      'Custom domains and HTTPS per project': 'Tên miền tùy chỉnh và HTTPS mỗi dự án',
      'Project settings stay separate from other projects': 'Cài đặt dự án được giữ riêng với các dự án khác',
      'Each project keeps its own runtime and service configuration': 'Mỗi dự án giữ cấu hình runtime và dịch vụ riêng',
      'View the same setup in FlyEnv’s runtime, site, and service workflows.': 'Xem cấu hình tương tự trong quy trình runtime, site và dịch vụ của FlyEnv.',
      'Multiple runtime versions': 'Nhiều phiên bản runtime',
      'PHP and runtime versions': 'Phiên bản PHP và runtime',
      'Install multiple PHP versions and select the one each site needs.': 'Cài nhiều phiên bản PHP và chọn phiên bản cho từng site.',
      'Local domains and HTTPS': 'Tên miền local và HTTPS',
      'Local sites and HTTPS': 'Site local và HTTPS',
      'Create local sites with custom domains and automatic HTTPS.': 'Tạo site local với tên miền tùy chỉnh và HTTPS tự động.',
      'Project-specific service stacks': 'Stack dịch vụ riêng theo dự án',
      'Startup Groups and services': 'Startup Groups và dịch vụ',
      'Keep each project’s web server, runtime and supporting services together.': 'Gộp web server, runtime và dịch vụ hỗ trợ của mỗi dự án lại với nhau.',
      Platforms: 'Nền tảng',
      'macOS, Windows, Linux': 'macOS, Windows, Linux',
      'PHP versions': 'Phiên bản PHP',
      'Multiple versions via the PHP menu or Profiles': 'Nhiều phiên bản qua menu PHP hoặc Profile',
      'Multiple managed versions (per project)': 'Nhiều phiên bản được quản lý (theo dự án)',
      'Web servers': 'Web server',
      'Apache, Nginx': 'Apache, Nginx',
      'Nginx, Apache, Caddy': 'Nginx, Apache, Caddy',
      'MySQL / MariaDB': 'MySQL / MariaDB',
      'Multiple database modules': 'Nhiều mô-đun cơ sở dữ liệu',
      'PostgreSQL / Redis': 'PostgreSQL / Redis',
      'Built-in modules': 'Mô-đun tích hợp sẵn',
      'Local custom domains': 'Tên miền tùy chỉnh local',
      'Built-in and managed': 'Tích hợp sẵn và được quản lý',
      'Project configuration': 'Cấu hình dự án',
      'Multi-Stack Profiles and Procfile support': 'Profile đa stack và hỗ trợ Procfile',
      'Startup groups': 'Nhóm khởi động',
      'Built-in project services': 'Dịch vụ dự án tích hợp sẵn',
      'Bundled or addable tools': 'Công cụ đi kèm hoặc có thể thêm',
      'phpMyAdmin, pgAdmin, DbGate and more': 'phpMyAdmin, pgAdmin, DbGate và nhiều hơn',
      'AI / MCP integration': 'Tích hợp AI / MCP',
      'FlyEnv MCP Server and AI CLI modules': 'Mô-đun FlyEnv MCP Server và AI CLI',
      'Object storage': 'Lưu trữ đối tượng',
      'Managed MinIO / RustFS modules': 'Mô-đun MinIO / RustFS được quản lý',
      'With Laragon': 'Với Laragon',
      'With FlyEnv': 'Với FlyEnv',
      'Add the required PHP versions': 'Thêm các phiên bản PHP cần thiết',
      'Create or select a stack profile': 'Tạo hoặc chọn profile stack',
      'Assign the PHP, web server and database versions': 'Chọn phiên bản PHP, máy chủ web và cơ sở dữ liệu',
      'Work on your project': 'Làm việc trên dự án',
      'Select another saved profile when needed': 'Chọn profile đã lưu khác khi cần',
      'Install PHP 8.2 and PHP 8.3': 'Cài đặt PHP 8.2 và PHP 8.3',
      'Assign PHP 8.2 to Project A': 'Gán PHP 8.2 cho Dự án A',
      'Assign PHP 8.3 to Project B': 'Gán PHP 8.3 cho Dự án B',
      'Open either project without changing the other': 'Mở một trong hai dự án mà không thay đổi dự án còn lại',
      'Switch between projects without changing global PHP': 'Chuyển đổi giữa các dự án mà không thay đổi PHP toàn cục',
      'You are on Windows and mainly develop PHP applications.': 'Bạn đang dùng Windows và chủ yếu phát triển ứng dụng PHP.',
      'You want a lightweight, fast and portable local environment.': 'Bạn muốn môi trường local nhẹ, nhanh và portable.',
      'You already organize your stacks with Laragon Profiles.': 'Bạn đã dùng Laragon Profile để quản lý các stack.',
      'You prefer automatic local hosts with minimal setup.': 'Bạn thích host local tự động với thiết lập tối thiểu.',
      'You need the same tool on macOS, Windows and Linux.': 'Bạn cần cùng một công cụ trên macOS, Windows và Linux.',
      'Different projects need different runtimes, services or domains.': 'Các dự án khác nhau cần runtime, dịch vụ hoặc tên miền khác nhau.',
      'You want databases, caches and tools managed in one workspace.': 'Bạn muốn cơ sở dữ liệu, cache và công cụ được quản lý trong một không gian làm việc.',
      'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.': 'Bạn dùng client lập trình AI hoặc dịch vụ AI local như Ollama và muốn chúng được quản lý cùng stack dự án.',
      'Should I switch from Laragon to FlyEnv?': 'Tôi có nên chuyển từ Laragon sang FlyEnv không?',
      'Not necessarily. If Laragon already fits your Windows-only workflow, there may be little reason to switch. FlyEnv becomes more useful when you need cross-platform consistency, project-specific runtime and service configuration, or more integrated modules.': 'Không hẳn. Nếu Laragon đã phù hợp với quy trình chỉ dùng Windows của bạn, ít có lý do để chuyển. FlyEnv hữu ích hơn khi bạn cần tính nhất quán đa nền tảng, cấu hình runtime và dịch vụ theo dự án, hoặc các mô-đun tích hợp hơn.',
      'Is Laragon only for Windows?': 'Laragon chỉ dành cho Windows?',
      'Laragon is built for Windows. FlyEnv supports macOS, Windows, and Linux when your team or projects need the same local workflow across platforms.': 'Laragon được xây dựng cho Windows. FlyEnv hỗ trợ macOS, Windows và Linux khi nhóm hoặc dự án của bạn cần quy trình local giống nhau trên mọi nền tảng.',
      'Can I keep my existing Laragon projects?': 'Tôi có giữ được các dự án Laragon hiện có không?',
      'Yes. FlyEnv can use existing project directories. You normally recreate the local site, runtime, services, and domain settings without rewriting application code.': 'Có. FlyEnv có thể dùng thư mục dự án hiện có. Thông thường bạn chỉ cần tạo lại site local, runtime, dịch vụ và cài đặt tên miền mà không phải viết lại mã ứng dụng.',
      'Can I still use Apache with FlyEnv?': 'Tôi vẫn có thể dùng Apache với FlyEnv không?',
      'Yes. Apache is available alongside Nginx and Caddy, so existing Apache-based projects can keep their familiar web-server setup.': 'Có. Apache khả dụng cùng Nginx và Caddy, nên các dự án dựa trên Apache hiện có có thể giữ thiết lập web server quen thuộc.',
      'Can different projects use different PHP versions?': 'Các dự án khác nhau có thể dùng các phiên bản PHP khác nhau?',
      'Yes. FlyEnv can manage multiple PHP versions and assign the version each project or local site needs, without changing a global runtime for every project.': 'Có. FlyEnv có thể quản lý nhiều phiên bản PHP và gán phiên bản mà mỗi dự án hoặc site local cần, mà không thay đổi runtime toàn cục cho mọi dự án.',
      'Does FlyEnv support custom local domains and HTTPS?': 'FlyEnv có hỗ trợ tên miền local tùy chỉnh và HTTPS không?',
      'Yes. In FlyEnv Host, configure a custom domain and local HTTPS for each site.': 'Có. Trong Host của FlyEnv, bạn có thể đặt tên miền riêng và HTTPS cục bộ cho từng site.',
      'Can FlyEnv manage databases and other local services?': 'FlyEnv có quản lý được cơ sở dữ liệu và các dịch vụ local khác không?',
      'Yes. FlyEnv brings databases, caches, mail testing, object storage, and other modules into one workspace so each project can start the services it needs.': 'Có. FlyEnv đưa cơ sở dữ liệu, cache, kiểm thử email, object storage và các mô-đun khác vào một không gian làm việc để mỗi dự án khởi động các dịch vụ cần thiết.',
      'Is FlyEnv suitable for team development?': 'FlyEnv có phù hợp với phát triển nhóm không?',
      'FlyEnv helps teams align local runtimes, domains, and project services across macOS, Windows, and Linux. Production parity may still require containers or your team’s deployment standard.': 'FlyEnv giúp nhóm thống nhất runtime local, tên miền và dịch vụ dự án trên macOS, Windows và Linux. Tính tương đương sản phẩm vẫn có thể cần container hoặc tiêu chuẩn deployment của nhóm.'
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
  } else if (locale === 'es') {
    localizedCompetitor.featureRows.forEach((row: any) => {
      if (row.name === 'Database GUI tools') row.name = 'Herramientas GUI de base de datos'
    })
  } else if (locale === 'vi') {
    localizedCompetitor.featureRows.forEach((row: any) => {
      if (row.name === 'Database GUI tools') row.name = 'Công cụ GUI cơ sở dữ liệu'
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
  } else if (locale === 'es') {
    localizedCompetitor.differences = [
      { title: 'Centrado en Windows frente a multiplataforma', body: 'Laragon funciona en Windows. FlyEnv funciona de forma nativa en macOS, Windows y Linux.' },
      { title: 'Cambio de entorno frente a configuración por proyecto', body: 'Laragon se centra en el cambio global de entorno; FlyEnv permite que cada proyecto conserve su propia configuración.' },
      { title: 'Ligereza frente a módulos integrados', body: 'Laragon se mantiene compacto y extensible. FlyEnv reúne runtimes, servicios y herramientas de proyecto en un solo espacio de trabajo.' }
    ]
  } else if (locale === 'vi') {
    localizedCompetitor.differences = [
      { title: 'Ưu tiên Windows so với đa nền tảng', body: 'Laragon chạy trên Windows. FlyEnv hoạt động native trên macOS, Windows và Linux.' },
      { title: 'Chuyển đổi môi trường so với cấu hình dự án', body: 'Laragon tập trung vào chuyển đổi môi trường toàn cục; FlyEnv giúp mỗi dự án giữ cài đặt riêng.' },
      { title: 'Nhẹ so với mô-đun tích hợp', body: 'Laragon luôn gọn nhẹ và mở rộng được. FlyEnv đưa runtime, dịch vụ và công cụ dự án vào một không gian làm việc.' }
    ]
  }
  const flyenvWorkflow = {
    title: 'With FlyEnv',
    mark: 'F',
    kind: 'flyenv' as const,
    steps: [
      'Install PHP 8.2 and PHP 8.3',
      'Assign PHP 8.2 to Project A',
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
        : locale === 'es'
          ? ['Multiplataforma (macOS, Windows, Linux)', 'Múltiples versiones de runtimes y servicios', 'Dominios personalizados y HTTPS por proyecto', 'La configuración de cada proyecto se mantiene separada de la de los demás', 'Cada proyecto conserva su propia configuración de runtime y servicios']
          : locale === 'vi'
            ? ['Đa nền tảng (macOS, Windows, Linux)', 'Nhiều phiên bản runtime và dịch vụ', 'Tên miền tùy chỉnh và HTTPS theo dự án', 'Cài đặt dự án được giữ riêng với các dự án khác', 'Mỗi dự án giữ cấu hình runtime và dịch vụ riêng']
          : ['Cross-platform (macOS, Windows, Linux)', 'Multiple runtimes and service versions', 'Custom domains and HTTPS per project', 'Project settings stay separate from other projects', 'Each project keeps its own runtime and service configuration']"
    :flyenv-workflow="locale === 'zh' ? { ...flyenvWorkflow,  steps: ['安装 PHP 8.2 和 PHP 8.3', '为项目 A 分配 PHP 8.2', '为项目 B 分配 PHP 8.3', '打开任一项目而不影响另一个项目', '在项目之间切换而无需更改全局 PHP'] } : locale === 'id' ? { ...flyenvWorkflow,  steps: ['Instal PHP 8.2 dan PHP 8.3', 'Tetapkan PHP 8.2 ke Proyek A', 'Tetapkan PHP 8.3 ke Proyek B', 'Buka salah satu proyek tanpa mengubah proyek lain', 'Beralih proyek tanpa mengubah PHP global'] } : locale === 'es' ? { ...flyenvWorkflow,  steps: ['Instala PHP 8.2 y PHP 8.3', 'Asigna PHP 8.2 al Proyecto A', 'Asigna PHP 8.3 al Proyecto B', 'Abre cualquier proyecto sin cambiar el otro', 'Cambia entre proyectos sin modificar el PHP global'] } : locale === 'vi' ? { ...flyenvWorkflow,  steps: ['Cài đặt PHP 8.2 và PHP 8.3', 'Gán PHP 8.2 cho Dự án A', 'Gán PHP 8.3 cho Dự án B', 'Mở một trong hai dự án mà không thay đổi dự án còn lại', 'Chuyển đổi giữa các dự án mà không thay đổi PHP toàn cục'] } : flyenvWorkflow"
    :locale="props.locale"
  >
    <template #migration>
      <ComparisonMigration :migration="laragonMigration" :locale="locale" />
    </template>
  </ComparisonLoopPage>
</template>
