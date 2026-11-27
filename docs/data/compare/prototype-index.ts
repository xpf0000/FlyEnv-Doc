import type { CompareLocale } from './types'

export const compareOverviewTools = [
  { slug: 'laragon', name: 'Laragon', mark: 'L', color: '#f04466' },
  { slug: 'servbay', name: 'ServBay', mark: 'S', color: '#265be7' },
  { slug: 'herd', name: 'Laravel Herd', mark: 'H', color: '#f03e49' },
  { slug: 'xampp', name: 'XAMPP', mark: 'X', color: '#f77921' },
  { slug: 'mamp', name: 'MAMP', mark: 'M', color: '#526175' },
  { slug: 'docker', name: 'Docker', mark: 'D', color: '#149dd2' }
] as const

type OverviewCopy = {
  navigation: string
  kicker: string
  headline: [string, string, string]
  intro: string
  download: string
  browse: string
  source: string
  projects: [string, string]
  projectNames: [string, string, string, string]
  projectLabels: [string, string, string, string]
  diagramBottom: string
  illustration: string
  tools: [string, string, string, string]
  taglines: [string, string, string, string, string, string]
  matrix: [string, string, string, string, string, string]
  cells: [string, string, string, string][]
  sources: [string, string, string, string]
  benefits: [string, string][]
  workflow: [string, string]
  runtimes: [string, string, string, string]
  startup: [string, string, string, string]
  simulation: [string, string, string, string, string, string]
  market: [string, string, string, string, string, string, string, string]
  final: [string, string, string]
}

export const compareOverviewCopy = {
  en: {
    navigation: 'Compare',
    kicker: 'Compare local development tools',
    headline: ['Your stack grows.', 'Your workspace', 'should too.'],
    intro:
      'From PHP and Laravel to Node.js, Python, Java and AI. Manage the runtimes, services and project workflows you need in one native local development environment.',
    download: 'Download FlyEnv',
    browse: 'Browse comparisons',
    source: 'Open source',
    projects: ['Your projects', 'Workspace'],
    projectNames: ['Customer portal', 'API & frontend', 'AI development', 'Legacy application'],
    projectLabels: ['Project A', 'Project B', 'Optional', 'Project C'],
    diagramBottom: 'One workspace, independent project settings',
    illustration: 'Illustrative workflow · not an application screenshot',
    tools: [
      'Find your alternative',
      'Switch tools, not your ambitions.',
      'Choose the environment you use today. See what you can gain with FlyEnv.',
      'View comparison'
    ],
    taglines: [
      'Take your workflow beyond Windows.',
      'An open, extensible workspace for evolving projects.',
      'Keep Laravel. Manage the rest of your stack too.',
      'Go beyond the traditional Apache, PHP and MySQL stack.',
      'More than a local web server.',
      'Run local services natively when containers are not needed.'
    ],
    matrix: [
      'At a glance',
      'One workspace. More possibilities.',
      'A closer look at Laragon and ServBay, two of the most relevant alternatives for a growing development stack.',
      'Capability',
      'Platform & workflow',
      'Beyond the basics'
    ],
    cells: [
      ['Desktop platforms', 'Windows, macOS, Linux', 'Windows', 'macOS, Windows¹'],
      [
        'Development approach',
        'Native, project-oriented workspace',
        'Portable Windows environment',
        'Integrated multi-runtime environment'
      ],
      [
        'Runtimes & services',
        'Multiple languages, native services',
        'Multiple languages and services',
        'Multiple languages and services'
      ],
      [
        'Project workflow',
        'Per-project runtimes + Startup Groups',
        'Quick app, version switching',
        'Sites and package management'
      ],
      [
        'Extensibility',
        'Plugin catalog + third-party sources',
        'Quick add and portable tooling',
        'Upgradeable packages'
      ],
      [
        'AI workflow',
        'Built-in MCP + AI Memory plugin',
        'See official documentation',
        'MCP, AI Gateway, local models'
      ]
    ],
    sources: ['Product references', 'Laragon docs', 'ServBay features', 'FlyEnv features'],
    benefits: [
      [
        'Native by design',
        'Manage local services without adding a container layer to every project.'
      ],
      [
        'Project-first workflows',
        'Choose runtime versions and start the services each project needs.'
      ],
      ['Open and extensible', 'Inspect the source and expand your workspace with optional modules.']
    ],
    workflow: ['Why FlyEnv', 'Less environment management. More building.'],
    runtimes: [
      'Project-level runtimes',
      'Different projects. Different versions.',
      'Keep legacy applications and new projects side by side. Configure the runtime version and service settings your project needs instead of repeatedly changing global tools.',
      'Explore per-project runtimes'
    ],
    startup: [
      'Startup Groups',
      'Start the whole project stack.',
      'Organize installed service versions and runnable projects into groups. Start or stop the dependencies together when you switch projects.',
      'Explore Startup Groups'
    ],
    simulation: [
      'Laravel project',
      'Stop group',
      'Start group',
      'Running',
      'Stopped',
      'Interactive concept · click to preview group state'
    ],
    market: [
      'Plugin Marketplace',
      'Start with what you need. Grow when you’re ready.',
      'A broad workspace does not have to mean a crowded one. Add optional modules as your projects evolve, from databases and search engines to local AI and persistent agent memory.',
      'Explore Plugin Market',
      'Installing and updating plugins requires an active FlyEnv license.',
      'Your workspace, extended',
      'On demand',
      'Official catalog · third-party sources'
    ],
    final: [
      'Make it yours',
      'Your next project starts here.',
      'Try FlyEnv with one of your existing projects. Keep the tools you need, add more when you need them.'
    ]
  },
  zh: {
    navigation: '比较',
    kicker: '本地开发工具比较',
    headline: ['技术栈在成长，', '工作区也应', '跟上。'],
    intro:
      '从 PHP、Laravel 到 Node.js、Python、Java 和 AI，在一个原生本地开发环境中管理所需的运行时、服务和项目工作流。',
    download: '下载 FlyEnv',
    browse: '浏览比较',
    source: '开源',
    projects: ['你的项目', '工作区'],
    projectNames: ['客户门户', 'API 与前端', 'AI 开发', '旧版应用'],
    projectLabels: ['项目 A', '项目 B', '可选', '项目 C'],
    diagramBottom: '同一工作区，项目配置各自独立',
    illustration: '工作流示意 · 非应用截图',
    tools: [
      '寻找替代方案',
      '换个工具，目标不变。',
      '选择你现在使用的环境，看看 FlyEnv 能为你的项目带来什么。',
      '查看比较'
    ],
    taglines: [
      '让开发流程跨出 Windows。',
      '随着项目发展，按需扩展开放的工作区。',
      '继续使用 Laravel，也把其余技术栈一起管好。',
      '走出传统 Apache、PHP 和 MySQL 组合的限制。',
      '把应用需要的服务和本地站点一起管理。',
      '项目无需容器时，直接在本机运行服务。'
    ],
    matrix: [
      '快速浏览',
      '一个工作区，更多可能。',
      '深入了解 Laragon 和 ServBay，看看这两款常见工具如何应对不断扩展的开发技术栈。',
      '能力',
      '平台与工作流',
      '进阶能力'
    ],
    cells: [
      ['桌面平台', 'Windows、macOS、Linux', 'Windows', 'macOS、Windows¹'],
      ['开发方式', '以项目为中心的原生工作区', '便携的 Windows 环境', '集成多种运行时的环境'],
      ['运行时与服务', '多种语言、原生服务', '多种语言与服务', '多种语言与服务'],
      ['项目工作流', '项目级运行时与启动组', '快速创建应用、版本切换', '站点和软件包管理'],
      ['扩展能力', '插件目录与第三方源', '快速添加组件、便携工具', '可升级的软件包'],
      ['AI 工作流', '内置 MCP 与 AI Memory 插件', '参阅官方文档', 'MCP、AI Gateway、本地模型']
    ],
    sources: ['产品资料', 'Laragon 文档', 'ServBay 功能', 'FlyEnv 功能'],
    benefits: [
      ['原生运行', '直接管理本地服务，省去为每个项目增加容器层的步骤。'],
      ['以项目为中心', '为每个项目选择运行时版本，启动所需服务。'],
      ['开源且可扩展', '查看源代码，按需添加模块扩展工作区。']
    ],
    workflow: ['为什么选择 FlyEnv', '少花时间管理环境，多花时间做项目。'],
    runtimes: [
      '项目级运行时',
      '不同项目用各自需要的版本。',
      '旧应用和新项目可以同时运行。按项目配置运行时版本和服务，省去反复修改全局工具的步骤。',
      '了解项目级运行时'
    ],
    startup: [
      '启动组',
      '一次启动整个项目技术栈。',
      '将已安装的服务版本和可运行项目归入不同组。切换项目时，可以一并启动或停止相关依赖。',
      '了解启动组'
    ],
    simulation: [
      'Laravel 项目',
      '停止启动组',
      '启动此组',
      '运行中',
      '已停止',
      '交互示意 · 点击预览启动组状态'
    ],
    market: [
      '插件市场',
      '先装需要的模块，等项目需要时再扩展。',
      '工作区功能丰富，界面也可以保持清爽。随项目发展，按需添加数据库、搜索引擎、本地 AI 或可持久保存智能体上下文的模块。',
      '查看插件市场',
      '安装和更新插件需要有效的 FlyEnv 授权。',
      '扩展你的工作区',
      '按需安装',
      '官方目录 · 第三方源'
    ],
    final: [
      '开始使用',
      '从这里开始你的下一个项目。',
      '选一个现有项目试用 FlyEnv。保留常用工具，随项目需要添加其他模块。'
    ]
  },
  id: {
    navigation: 'Perbandingan',
    kicker: 'Bandingkan alat pengembangan lokal',
    headline: ['Stack Anda berkembang.', 'Ruang kerja Anda', 'ikut berkembang.'],
    intro:
      'Dari PHP dan Laravel hingga Node.js, Python, Java, dan AI. Kelola runtime, layanan, dan alur kerja proyek yang Anda perlukan dalam satu lingkungan pengembangan lokal native.',
    download: 'Unduh FlyEnv',
    browse: 'Lihat perbandingan',
    source: 'Sumber terbuka',
    projects: ['Proyek Anda', 'Ruang kerja'],
    projectNames: ['Portal pelanggan', 'API dan frontend', 'Pengembangan AI', 'Aplikasi lama'],
    projectLabels: ['Proyek A', 'Proyek B', 'Opsional', 'Proyek C'],
    diagramBottom: 'Satu ruang kerja dengan pengaturan terpisah untuk tiap proyek',
    illustration: 'Ilustrasi alur kerja · bukan tangkapan layar aplikasi',
    tools: [
      'Temukan alternatif Anda',
      'Ganti alat, pertahankan tujuan Anda.',
      'Pilih lingkungan yang Anda gunakan saat ini. Lihat manfaat yang bisa Anda peroleh dengan FlyEnv.',
      'Lihat perbandingan'
    ],
    taglines: [
      'Bawa alur kerja Anda ke luar Windows.',
      'Ruang kerja terbuka yang bisa diperluas seiring perkembangan proyek.',
      'Tetap gunakan Laravel sambil mengelola bagian lain dari stack Anda.',
      'Jelajahi pilihan di luar stack Apache, PHP, dan MySQL tradisional.',
      'Lebih dari sekadar server web lokal.',
      'Jalankan layanan lokal secara native saat kontainer tidak diperlukan.'
    ],
    matrix: [
      'Sekilas',
      'Satu ruang kerja. Lebih banyak kemungkinan.',
      'Lihat lebih dekat Laragon dan ServBay, dua alternatif yang relevan saat stack pengembangan Anda bertambah.',
      'Kemampuan',
      'Platform dan alur kerja',
      'Kemampuan lanjutan'
    ],
    cells: [
      ['Platform desktop', 'Windows, macOS, Linux', 'Windows', 'macOS, Windows¹'],
      [
        'Pendekatan pengembangan',
        'Ruang kerja native yang berpusat pada proyek',
        'Lingkungan portabel untuk Windows',
        'Lingkungan terpadu dengan berbagai runtime'
      ],
      [
        'Runtime dan layanan',
        'Beberapa bahasa dan layanan native',
        'Beberapa bahasa dan layanan',
        'Beberapa bahasa dan layanan'
      ],
      [
        'Alur kerja proyek',
        'Runtime per proyek dan Startup Groups',
        'Quick app dan pergantian versi',
        'Pengelolaan situs dan paket'
      ],
      [
        'Ekstensi',
        'Katalog plugin dan sumber pihak ketiga',
        'Quick add dan alat portabel',
        'Paket yang dapat ditingkatkan'
      ],
      [
        'Alur kerja AI',
        'MCP bawaan dan plugin AI Memory',
        'Lihat dokumentasi resmi',
        'MCP, AI Gateway, model lokal'
      ]
    ],
    sources: ['Referensi produk', 'Dokumentasi Laragon', 'Fitur ServBay', 'Fitur FlyEnv'],
    benefits: [
      [
        'Dirancang untuk berjalan secara native',
        'Kelola layanan lokal tanpa menambah lapisan kontainer pada setiap proyek.'
      ],
      [
        'Alur kerja berpusat pada proyek',
        'Pilih versi runtime dan jalankan layanan yang dibutuhkan tiap proyek.'
      ],
      [
        'Terbuka dan dapat diperluas',
        'Periksa kode sumber dan perluas ruang kerja Anda dengan modul opsional.'
      ]
    ],
    workflow: [
      'Mengapa FlyEnv',
      'Lebih sedikit mengatur lingkungan, lebih banyak mengembangkan proyek.'
    ],
    runtimes: [
      'Runtime per proyek',
      'Proyek berbeda, versi berbeda.',
      'Jalankan aplikasi lama dan proyek baru berdampingan. Atur versi runtime dan layanan yang diperlukan setiap proyek tanpa berulang kali mengubah alat global.',
      'Jelajahi runtime per proyek'
    ],
    startup: [
      'Startup Groups',
      'Jalankan seluruh stack proyek.',
      'Susun versi layanan terpasang dan proyek yang dapat dijalankan ke dalam grup. Jalankan atau hentikan dependensinya bersama saat Anda beralih proyek.',
      'Jelajahi Startup Groups'
    ],
    simulation: [
      'Proyek Laravel',
      'Hentikan grup',
      'Jalankan grup',
      'Berjalan',
      'Berhenti',
      'Konsep interaktif · klik untuk melihat status grup'
    ],
    market: [
      'Plugin Market',
      'Mulai dengan yang Anda butuhkan. Perluas saat siap.',
      'Ruang kerja bisa tetap rapi meski menyediakan banyak pilihan. Tambahkan modul opsional sesuai kebutuhan proyek, mulai dari database dan mesin pencari hingga AI lokal dan memori agen yang persisten.',
      'Jelajahi Plugin Market',
      'Lisensi FlyEnv aktif diperlukan untuk memasang dan memperbarui plugin.',
      'Perluas ruang kerja Anda',
      'Sesuai kebutuhan',
      'Katalog resmi · sumber pihak ketiga'
    ],
    final: [
      'Sesuaikan dengan kebutuhan Anda',
      'Proyek berikutnya dimulai di sini.',
      'Coba FlyEnv dengan salah satu proyek yang sudah ada. Pertahankan alat yang diperlukan, lalu tambahkan yang lain saat dibutuhkan.'
    ]
  },
  es: {
    navigation: 'Comparar',
    kicker: 'Compara herramientas de desarrollo local',
    headline: ['Tu stack crece.', 'Tu espacio de trabajo', 'también puede crecer.'],
    intro:
      'Desde PHP y Laravel hasta Node.js, Python, Java e IA. Gestiona los entornos de ejecución, servicios y flujos que necesitas en un solo entorno de desarrollo local nativo.',
    download: 'Descargar FlyEnv',
    browse: 'Ver comparaciones',
    source: 'Código abierto',
    projects: ['Tus proyectos', 'Espacio de trabajo'],
    projectNames: [
      'Portal de clientes',
      'API y frontend',
      'Desarrollo con IA',
      'Aplicación anterior'
    ],
    projectLabels: ['Proyecto A', 'Proyecto B', 'Opcional', 'Proyecto C'],
    diagramBottom: 'Un espacio de trabajo con ajustes independientes para cada proyecto',
    illustration: 'Flujo ilustrativo · no es una captura de la aplicación',
    tools: [
      'Encuentra tu alternativa',
      'Cambia de herramienta sin cambiar de objetivos.',
      'Elige el entorno que utilizas hoy. Descubre qué puedes ganar con FlyEnv.',
      'Ver comparación'
    ],
    taglines: [
      'Lleva tu flujo de trabajo más allá de Windows.',
      'Un espacio abierto y ampliable para proyectos que crecen.',
      'Sigue con Laravel y gestiona también el resto de tu stack.',
      'Amplía las posibilidades del stack tradicional de Apache, PHP y MySQL.',
      'Más que un servidor web local.',
      'Ejecuta servicios locales de forma nativa cuando no necesites contenedores.'
    ],
    matrix: [
      'De un vistazo',
      'Un espacio de trabajo. Más posibilidades.',
      'Descubre cómo se comparan Laragon y ServBay, dos alternativas relevantes para un stack de desarrollo que crece.',
      'Capacidad',
      'Plataforma y flujo de trabajo',
      'Funciones avanzadas'
    ],
    cells: [
      ['Plataformas de escritorio', 'Windows, macOS, Linux', 'Windows', 'macOS, Windows¹'],
      [
        'Enfoque de desarrollo',
        'Espacio nativo orientado a proyectos',
        'Entorno portátil para Windows',
        'Entorno integrado con varios entornos de ejecución'
      ],
      [
        'Entornos de ejecución y servicios',
        'Varios lenguajes y servicios nativos',
        'Varios lenguajes y servicios',
        'Varios lenguajes y servicios'
      ],
      [
        'Flujo de proyecto',
        'Entornos por proyecto y Startup Groups',
        'Quick app y cambio de versión',
        'Gestión de sitios y paquetes'
      ],
      [
        'Extensibilidad',
        'Catálogo de plugins y fuentes de terceros',
        'Quick add y herramientas portátiles',
        'Paquetes actualizables'
      ],
      [
        'Flujo con IA',
        'MCP integrado y plugin AI Memory',
        'Consulta la documentación oficial',
        'MCP, AI Gateway y modelos locales'
      ]
    ],
    sources: [
      'Referencias de los productos',
      'Documentación de Laragon',
      'Funciones de ServBay',
      'Funciones de FlyEnv'
    ],
    benefits: [
      [
        'Nativo por diseño',
        'Gestiona servicios locales sin añadir una capa de contenedores a cada proyecto.'
      ],
      [
        'Flujos centrados en proyectos',
        'Elige versiones y arranca los servicios que necesita cada proyecto.'
      ],
      [
        'Abierto y ampliable',
        'Consulta el código fuente y amplía tu espacio de trabajo con módulos opcionales.'
      ]
    ],
    workflow: ['Por qué FlyEnv', 'Menos tiempo gestionando entornos. Más tiempo desarrollando.'],
    runtimes: [
      'Entornos por proyecto',
      'Distintos proyectos, distintas versiones.',
      'Mantén aplicaciones antiguas y proyectos nuevos en paralelo. Configura la versión y los servicios que necesita cada proyecto sin cambiar continuamente las herramientas globales.',
      'Explorar los entornos por proyecto'
    ],
    startup: [
      'Startup Groups',
      'Arranca todo el stack del proyecto.',
      'Organiza en grupos las versiones instaladas de los servicios y los proyectos que se pueden ejecutar. Arranca o detén sus dependencias a la vez al cambiar de proyecto.',
      'Explorar Startup Groups'
    ],
    simulation: [
      'Proyecto Laravel',
      'Detener grupo',
      'Iniciar grupo',
      'En ejecución',
      'Detenido',
      'Concepto interactivo · haz clic para ver el estado del grupo'
    ],
    market: [
      'Mercado de plugins',
      'Empieza con lo que necesitas. Amplíalo a tu ritmo.',
      'Un espacio de trabajo versátil puede seguir siendo sencillo. Añade módulos opcionales conforme evolucionen tus proyectos, desde bases de datos y motores de búsqueda hasta IA local y memoria persistente para agentes.',
      'Explorar el mercado de plugins',
      'Para instalar y actualizar plugins necesitas una licencia activa de FlyEnv.',
      'Amplía tu espacio de trabajo',
      'Bajo demanda',
      'Catálogo oficial · fuentes de terceros'
    ],
    final: [
      'Hazlo tuyo',
      'Tu próximo proyecto empieza aquí.',
      'Prueba FlyEnv con uno de tus proyectos. Conserva las herramientas que usas y añade otras cuando las necesites.'
    ]
  },
  vi: {
    navigation: 'So sánh',
    kicker: 'So sánh các công cụ phát triển cục bộ',
    headline: ['Stack của bạn lớn dần.', 'Không gian làm việc', 'cũng cần theo kịp.'],
    intro:
      'Từ PHP và Laravel đến Node.js, Python, Java và AI. Quản lý runtime, dịch vụ và quy trình dự án bạn cần trong một môi trường phát triển cục bộ chạy trực tiếp trên hệ điều hành.',
    download: 'Tải FlyEnv',
    browse: 'Xem các bài so sánh',
    source: 'Mã nguồn mở',
    projects: ['Dự án của bạn', 'Không gian làm việc'],
    projectNames: ['Cổng khách hàng', 'API và frontend', 'Phát triển với AI', 'Ứng dụng cũ'],
    projectLabels: ['Dự án A', 'Dự án B', 'Tùy chọn', 'Dự án C'],
    diagramBottom: 'Một không gian làm việc với cấu hình riêng cho từng dự án',
    illustration: 'Minh họa quy trình · không phải ảnh chụp ứng dụng',
    tools: [
      'Tìm công cụ thay thế',
      'Đổi công cụ, giữ nguyên mục tiêu.',
      'Chọn môi trường bạn đang dùng và xem FlyEnv có thể hỗ trợ dự án của bạn như thế nào.',
      'Xem so sánh'
    ],
    taglines: [
      'Đưa quy trình của bạn lên các nền tảng ngoài Windows.',
      'Không gian làm việc mở, dễ mở rộng khi dự án phát triển.',
      'Tiếp tục dùng Laravel và quản lý cả phần còn lại của stack.',
      'Mở rộng khỏi stack Apache, PHP và MySQL truyền thống.',
      'Không chỉ là máy chủ web cục bộ.',
      'Chạy dịch vụ cục bộ trực tiếp trên hệ điều hành khi không cần container.'
    ],
    matrix: [
      'Tổng quan',
      'Một không gian làm việc. Thêm nhiều khả năng.',
      'Xem kỹ Laragon và ServBay, hai lựa chọn phù hợp khi stack phát triển của bạn ngày càng mở rộng.',
      'Khả năng',
      'Nền tảng và quy trình',
      'Tính năng nâng cao'
    ],
    cells: [
      ['Nền tảng máy tính', 'Windows, macOS, Linux', 'Windows', 'macOS, Windows¹'],
      [
        'Cách phát triển',
        'Không gian làm việc native theo từng dự án',
        'Môi trường di động cho Windows',
        'Môi trường tích hợp nhiều runtime'
      ],
      [
        'Runtime và dịch vụ',
        'Nhiều ngôn ngữ, dịch vụ native',
        'Nhiều ngôn ngữ và dịch vụ',
        'Nhiều ngôn ngữ và dịch vụ'
      ],
      [
        'Quy trình dự án',
        'Runtime theo dự án và Startup Groups',
        'Quick app và chuyển đổi phiên bản',
        'Quản lý website và gói phần mềm'
      ],
      [
        'Khả năng mở rộng',
        'Danh mục plugin và nguồn bên thứ ba',
        'Quick add và công cụ di động',
        'Gói phần mềm có thể nâng cấp'
      ],
      [
        'Quy trình AI',
        'MCP tích hợp và plugin AI Memory',
        'Xem tài liệu chính thức',
        'MCP, AI Gateway, mô hình cục bộ'
      ]
    ],
    sources: ['Tài liệu sản phẩm', 'Tài liệu Laragon', 'Tính năng ServBay', 'Tính năng FlyEnv'],
    benefits: [
      [
        'Thiết kế để chạy trực tiếp',
        'Quản lý dịch vụ cục bộ mà không phải thêm lớp container cho mọi dự án.'
      ],
      [
        'Quy trình theo từng dự án',
        'Chọn phiên bản runtime và khởi động dịch vụ cần thiết cho từng dự án.'
      ],
      ['Mở và có thể mở rộng', 'Xem mã nguồn và thêm các module tùy chọn vào không gian làm việc.']
    ],
    workflow: [
      'Vì sao chọn FlyEnv',
      'Bớt thời gian quản lý môi trường. Thêm thời gian phát triển.'
    ],
    runtimes: [
      'Runtime theo dự án',
      'Mỗi dự án có thể dùng một phiên bản riêng.',
      'Chạy song song ứng dụng cũ và dự án mới. Đặt phiên bản runtime và dịch vụ cho từng dự án để không phải thay đổi bộ công cụ chung nhiều lần.',
      'Khám phá runtime theo dự án'
    ],
    startup: [
      'Startup Groups',
      'Khởi động toàn bộ stack của dự án.',
      'Sắp xếp các phiên bản dịch vụ đã cài và dự án có thể chạy thành từng nhóm. Khi chuyển dự án, bạn có thể khởi động hoặc dừng các dịch vụ liên quan cùng lúc.',
      'Khám phá Startup Groups'
    ],
    simulation: [
      'Dự án Laravel',
      'Dừng nhóm',
      'Khởi động nhóm',
      'Đang chạy',
      'Đã dừng',
      'Mô phỏng tương tác · nhấp để xem trạng thái của nhóm'
    ],
    market: [
      'Chợ plugin',
      'Bắt đầu với những gì bạn cần. Mở rộng khi đã sẵn sàng.',
      'Không gian làm việc đa năng vẫn có thể gọn gàng. Thêm module tùy chọn khi dự án phát triển, từ cơ sở dữ liệu và công cụ tìm kiếm đến AI cục bộ và bộ nhớ lâu dài cho tác nhân.',
      'Khám phá Chợ plugin',
      'Cần giấy phép FlyEnv còn hiệu lực để cài đặt và cập nhật plugin.',
      'Mở rộng không gian làm việc',
      'Theo nhu cầu',
      'Danh mục chính thức · nguồn bên thứ ba'
    ],
    final: [
      'Tùy chỉnh theo cách bạn làm việc',
      'Dự án tiếp theo bắt đầu tại đây.',
      'Thử FlyEnv với một dự án hiện có. Giữ các công cụ bạn cần và bổ sung công cụ khác khi cần thiết.'
    ]
  }
} satisfies Record<CompareLocale, OverviewCopy>

export const compareOverviewSourceNote: Record<CompareLocale, string> = {
  en: '¹ ServBay’s public download and installation pages list macOS and Windows; check its current Linux availability. These are selected workflow differences, not an exhaustive feature checklist.',
  zh: '¹ ServBay 的公开下载及安装页面列有 macOS 和 Windows，Linux 的可用情况请查阅其最新官方信息。表中列出的是部分工作流差异。',
  id: '¹ Halaman unduhan dan instalasi publik ServBay mencantumkan macOS dan Windows. Periksa ketersediaan Linux terkini. Tabel ini menyoroti beberapa perbedaan alur kerja.',
  es: '¹ Las páginas públicas de descarga e instalación de ServBay indican macOS y Windows. Consulta la disponibilidad actual para Linux. La tabla recoge algunas diferencias de flujo de trabajo.',
  vi: '¹ Trang tải xuống và hướng dẫn cài đặt công khai của ServBay liệt kê macOS và Windows. Hãy kiểm tra thông tin mới nhất về Linux. Bảng tập trung vào một số khác biệt về quy trình.'
}

export type CompareOverviewCopy = OverviewCopy
