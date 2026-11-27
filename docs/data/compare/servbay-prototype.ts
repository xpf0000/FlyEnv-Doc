import type { CompareLocale } from './types'

type Translations = [en: string, zh: string, id: string, es: string, vi: string]

const localeIndex: Record<CompareLocale, number> = { en: 0, zh: 1, id: 2, es: 3, vi: 4 }

const copy = {
  compare: ['Compare', '比较', 'Perbandingan', 'Comparar', 'So sánh'],
  pageNav: ['On this page', '本页导航', 'Di halaman ini', 'En esta página', 'Trong trang này'],
  alternative: [
    'ServBay alternative',
    'ServBay 替代方案',
    'Alternatif ServBay',
    'Alternativa a ServBay',
    'Giải pháp thay thế ServBay'
  ],
  openWorkspace: [
    'An open workspace',
    '一个开放的工作区',
    'Ruang kerja terbuka',
    'Un espacio de trabajo abierto',
    'Một không gian làm việc mở'
  ],
  growsWithYou: [
    'that grows with you.',
    '随你一起成长。',
    'yang tumbuh bersama Anda.',
    'que crece contigo.',
    'phát triển cùng bạn.'
  ],
  heroLead: [
    'Both tools bring local development services together. FlyEnv gives you an open-source, project-oriented workspace with optional modules, native services and shared AI context.',
    '两款工具都把本地开发服务集中在一起。FlyEnv 提供开源、以项目为中心的工作区，支持可选模块、原生服务和共享 AI 上下文。',
    'Kedua alat menyatukan layanan pengembangan lokal. FlyEnv memberi Anda ruang kerja sumber terbuka yang berorientasi pada proyek, dengan modul opsional, layanan native, dan konteks AI bersama.',
    'Ambas herramientas reúnen servicios de desarrollo local. FlyEnv te ofrece un espacio de trabajo de código abierto orientado a proyectos, con módulos opcionales, servicios nativos y contexto de IA compartido.',
    'Cả hai công cụ đều tập hợp các dịch vụ phát triển cục bộ. FlyEnv cung cấp không gian làm việc mã nguồn mở theo dự án, với mô-đun tùy chọn, dịch vụ gốc và ngữ cảnh AI dùng chung.'
  ],
  download: ['Download FlyEnv', '下载 FlyEnv', 'Unduh FlyEnv', 'Descargar FlyEnv', 'Tải FlyEnv'],
  capabilities: [
    'Compare capabilities',
    '比较功能',
    'Bandingkan kemampuan',
    'Comparar funciones',
    'So sánh tính năng'
  ],
  openSource: ['Open source', '开源', 'Sumber terbuka', 'Código abierto', 'Mã nguồn mở'],
  workspace: ['Workspace', '工作区', 'Ruang kerja', 'Espacio de trabajo', 'Không gian làm việc'],
  buildWorkspace: [
    'Build your own workspace',
    '打造你自己的工作区',
    'Bangun ruang kerja sendiri',
    'Crea tu propio espacio de trabajo',
    'Tạo không gian làm việc của bạn'
  ],
  coreEnv: [
    'Core environment',
    '核心环境',
    'Lingkungan inti',
    'Entorno básico',
    'Môi trường cốt lõi'
  ],
  native: ['Native', '原生', 'Native', 'Nativo', 'Gốc'],
  projectWorkflow: [
    'Project workflow',
    '项目工作流',
    'Alur kerja proyek',
    'Flujo de trabajo del proyecto',
    'Quy trình dự án'
  ],
  compose: ['Compose', '组合', 'Susun', 'Combinar', 'Kết hợp'],
  runtimeSettings: [
    'Runtime settings',
    '运行时设置',
    'Pengaturan runtime',
    'Configuración del entorno de ejecución',
    'Cài đặt môi trường chạy'
  ],
  startupGroups: ['Startup Groups', '启动组', 'Grup Startup', 'Grupos de inicio', 'Nhóm khởi động'],
  sites: ['Local sites', '本地站点', 'Situs lokal', 'Sitios locales', 'Trang web cục bộ'],
  extendWhen: [
    'Extend when needed',
    '按需扩展',
    'Perluas saat dibutuhkan',
    'Amplía cuando lo necesites',
    'Mở rộng khi cần'
  ],
  optional: ['Optional', '可选', 'Opsional', 'Opcional', 'Tùy chọn'],
  pluginMarket: ['Plugin Market', '插件市场', 'Pasar Plugin', 'Mercado de plugins', 'Chợ plugin'],
  userModules: [
    'User Modules',
    '用户模块',
    'Modul Pengguna',
    'Módulos de usuario',
    'Mô-đun người dùng'
  ],
  sourceNative: [
    'Open source · native services',
    '开源 · 原生服务',
    'Sumber terbuka · layanan native',
    'Código abierto · servicios nativos',
    'Mã nguồn mở · dịch vụ gốc'
  ],
  illustrative: [
    'Illustrative workflow · not an application screenshot',
    '工作流示意 · 非应用截图',
    'Ilustrasi alur kerja · bukan tangkapan layar aplikasi',
    'Flujo ilustrativo · no es una captura de la aplicación',
    'Minh họa quy trình · không phải ảnh chụp ứng dụng'
  ],
  differences: [
    'Key differences',
    '主要区别',
    'Perbedaan utama',
    'Diferencias clave',
    'Khác biệt chính'
  ],
  extensible: [
    'Extensible workspace',
    '可扩展工作区',
    'Ruang kerja yang dapat diperluas',
    'Espacio extensible',
    'Không gian có thể mở rộng'
  ],
  workflows: [
    'Project & AI workflows',
    '项目和 AI 工作流',
    'Alur kerja proyek & AI',
    'Flujos de proyectos e IA',
    'Quy trình dự án và AI'
  ],
  tryProject: [
    'Try your project',
    '试用你的项目',
    'Coba proyek Anda',
    'Prueba tu proyecto',
    'Thử với dự án của bạn'
  ],
  faq: ['FAQ', '常见问题', 'FAQ', 'Preguntas frecuentes', 'Câu hỏi thường gặp'],
  differencesEyebrow: [
    'The key differences',
    '主要区别',
    'Perbedaan utama',
    'Las diferencias clave',
    'Những khác biệt chính'
  ],
  evolves: [
    'The difference is how your workspace evolves.',
    '区别在于工作区如何随项目演进。',
    'Perbedaannya terletak pada cara ruang kerja Anda berkembang.',
    'La diferencia está en cómo evoluciona tu espacio de trabajo.',
    'Khác biệt nằm ở cách không gian làm việc phát triển.'
  ],
  matrixIntro: [
    'Both products cover many common runtimes and services. Compare the FlyEnv workflows that matter beyond the shared core.',
    '两款产品都覆盖多种常见运行时和服务。看看在这些基础能力之外，FlyEnv 能为你的工作流带来什么。',
    'Kedua produk mencakup banyak runtime dan layanan umum. Bandingkan alur kerja FlyEnv di luar kemampuan dasar yang sama.',
    'Ambos productos abarcan numerosos entornos de ejecución y servicios habituales. Compara los flujos de FlyEnv que van más allá de esa base común.',
    'Cả hai sản phẩm đều hỗ trợ nhiều môi trường chạy và dịch vụ phổ biến. Hãy so sánh những quy trình của FlyEnv vượt ra ngoài nền tảng chung.'
  ],
  capability: ['Capability', '能力', 'Kemampuan', 'Capacidad', 'Tính năng'],
  standOut: [
    'Where FlyEnv is designed to stand out',
    'FlyEnv 的设计优势',
    'Keunggulan yang dirancang di FlyEnv',
    'Dónde destaca el diseño de FlyEnv',
    'Điểm khác biệt trong thiết kế FlyEnv'
  ],
  shared: [
    'Shared fundamentals',
    '共有基础能力',
    'Kemampuan dasar yang sama',
    'Funciones básicas compartidas',
    'Khả năng nền tảng chung'
  ],
  platforms: [
    'Desktop platforms',
    '桌面平台',
    'Platform desktop',
    'Plataformas de escritorio',
    'Nền tảng máy tính'
  ],
  sourceExtensibility: [
    'Source & extensibility',
    '源代码与扩展性',
    'Kode sumber & ekstensibilitas',
    'Código y extensibilidad',
    'Mã nguồn và khả năng mở rộng'
  ],
  upgradable: [
    'Upgradeable packages (see ServBay docs)',
    '可升级的软件包（参见 ServBay 文档）',
    'Paket dapat diperbarui (lihat dokumentasi ServBay)',
    'Paquetes actualizables (consulta la documentación de ServBay)',
    'Gói có thể nâng cấp (xem tài liệu ServBay)'
  ],
  sourceThirdParty: [
    'Open-source application + third-party plugin sources',
    '开源应用 + 第三方插件源',
    'Aplikasi sumber terbuka + sumber plugin pihak ketiga',
    'Aplicación de código abierto + fuentes de plugins de terceros',
    'Ứng dụng mã nguồn mở + nguồn plugin bên thứ ba'
  ],
  orchestration: [
    'Project orchestration',
    '项目编排',
    'Orkestrasi proyek',
    'Orquestación de proyectos',
    'Điều phối dự án'
  ],
  siteManagement: [
    'Sites and package management',
    '站点和软件包管理',
    'Pengelolaan situs dan paket',
    'Gestión de sitios y paquetes',
    'Quản lý trang web và gói'
  ],
  namedGroups: [
    'Named Startup Groups for managed services and runnable projects',
    '为托管服务和可运行项目建立命名启动组',
    'Grup Startup bernama untuk layanan terkelola dan proyek yang dapat dijalankan',
    'Grupos de inicio con nombre para servicios gestionados y proyectos ejecutables',
    'Nhóm khởi động có tên cho dịch vụ được quản lý và dự án có thể chạy'
  ],
  optionalModules: [
    'Optional modules',
    '可选模块',
    'Modul opsional',
    'Módulos opcionales',
    'Mô-đun tùy chọn'
  ],
  packageEcosystem: [
    'Package ecosystem',
    '软件包生态',
    'Ekosistem paket',
    'Ecosistema de paquetes',
    'Hệ sinh thái gói'
  ],
  pluginUserModules: [
    'Plugin Market + User Modules',
    '插件市场 + 用户模块',
    'Pasar Plugin + Modul Pengguna',
    'Mercado de plugins + módulos de usuario',
    'Chợ plugin + mô-đun người dùng'
  ],
  aiContext: [
    'AI context workflow',
    'AI 上下文工作流',
    'Alur kerja konteks AI',
    'Flujo de contexto de IA',
    'Quy trình ngữ cảnh AI'
  ],
  servbayAI: [
    'MCP, AI Gateway, local models',
    'MCP、AI 网关、本地模型',
    'MCP, AI Gateway, model lokal',
    'MCP, AI Gateway y modelos locales',
    'MCP, AI Gateway, mô hình cục bộ'
  ],
  flyenvAI: [
    'Built-in MCP + optional persistent AI Memory',
    '内置 MCP + 可选的持久化 AI Memory',
    'MCP bawaan + AI Memory persisten opsional',
    'MCP integrado + AI Memory persistente opcional',
    'MCP tích hợp + AI Memory lưu bền tùy chọn'
  ],
  runtime: [
    'Multiple runtimes',
    '多种运行时',
    'Beragam runtime',
    'Varios entornos de ejecución',
    'Nhiều môi trường chạy'
  ],
  runtimeList: [
    'PHP, Node.js, Python and more',
    'PHP、Node.js、Python 等',
    'PHP, Node.js, Python, dan lainnya',
    'PHP, Node.js, Python y más',
    'PHP, Node.js, Python và nhiều hơn nữa'
  ],
  certificates: [
    'Local sites & certificates',
    '本地站点与证书',
    'Situs lokal & sertifikat',
    'Sitios locales y certificados',
    'Trang web cục bộ và chứng chỉ'
  ],
  databases: [
    'Native databases',
    '原生数据库',
    'Basis data native',
    'Bases de datos nativas',
    'Cơ sở dữ liệu gốc'
  ],
  supported: ['Supported', '支持', 'Didukung', 'Compatible', 'Có hỗ trợ'],
  tableScroll: [
    'Scroll to compare both products',
    '横向滚动查看两款产品',
    'Gulir untuk membandingkan kedua produk',
    'Desplázate para comparar ambos productos',
    'Cuộn ngang để so sánh hai sản phẩm'
  ],
  tableNote: [
    '¹ ServBay’s {download} list macOS and Windows. Its {packages} also includes a Linux tab. The table compares selected workflows.',
    '¹ ServBay 的{download}列出 macOS 和 Windows，其{packages}也包含 Linux 标签。表中比较了部分工作流程。',
    '¹ {download} resmi ServBay mencantumkan macOS dan Windows. {packages} juga memuat tab Linux. Tabel ini membandingkan beberapa alur kerja.',
    '¹ Las {download} de ServBay muestran macOS y Windows. Su {packages} también incluye una pestaña para Linux. La tabla compara algunos flujos de trabajo.',
    '¹ {download} chính thức của ServBay liệt kê macOS và Windows. {packages} của hãng cũng có thẻ Linux. Bảng này so sánh một số quy trình.'
  ],
  servbayDownloads: [
    'public downloads',
    '公开下载页',
    'Unduhan',
    'descargas públicas',
    'Trang tải xuống'
  ],
  servbayPackages: [
    'package catalog',
    '软件包目录',
    'Katalog paketnya',
    'catálogo de paquetes',
    'Danh mục gói'
  ],
  productReferences: [
    'Product references',
    '产品资料',
    'Referensi produk',
    'Referencias de producto',
    'Tài liệu sản phẩm'
  ],
  servbayFeatures: [
    'ServBay features',
    'ServBay 功能',
    'Fitur ServBay',
    'Funciones de ServBay',
    'Tính năng ServBay'
  ],
  flyenvMarket: [
    'FlyEnv Plugin Market',
    'FlyEnv 插件市场',
    'Pasar Plugin FlyEnv',
    'Mercado de plugins de FlyEnv',
    'Chợ plugin FlyEnv'
  ],
  tryFlyenv: ['Try FlyEnv', '试用 FlyEnv', 'Coba FlyEnv', 'Probar FlyEnv', 'Dùng thử FlyEnv'],
  viewDemos: ['View demos', '查看演示', 'Lihat demo', 'Ver demostraciones', 'Xem bản trình diễn'],
  marketplace: [
    'Plugin Marketplace',
    '插件市场',
    'Pasar Plugin',
    'Mercado de plugins',
    'Chợ plugin'
  ],
  broadCapability: [
    'Broad in capability.',
    '功能丰富。',
    'Kemampuan luas.',
    'Amplio en capacidades.',
    'Tính năng phong phú.'
  ],
  focusedExperience: [
    'Focused in experience.',
    '体验专注。',
    'Pengalaman tetap terfokus.',
    'Una experiencia enfocada.',
    'Trải nghiệm tập trung.'
  ],
  marketLead: [
    'FlyEnv separates optional integrations from the core workflow. Install only the modules you need, discover new integrations through the Plugin Market, or bring your own commands through User Modules.',
    'FlyEnv 将可选集成与核心工作流分开。你可以只安装所需模块，在插件市场发现新的集成，也可以通过用户模块添加自己的命令。',
    'FlyEnv memisahkan integrasi opsional dari alur kerja inti. Instal modul yang dibutuhkan saja, temukan integrasi baru melalui Pasar Plugin, atau tambahkan perintah sendiri melalui Modul Pengguna.',
    'FlyEnv separa las integraciones opcionales del flujo principal. Instala solo los módulos que necesitas, descubre nuevas integraciones en el mercado de plugins o incorpora tus propios comandos con los módulos de usuario.',
    'FlyEnv tách tích hợp tùy chọn khỏi quy trình cốt lõi. Chỉ cài mô-đun cần dùng, tìm nội dung tích hợp trong Chợ plugin hoặc thêm lệnh riêng bằng mô-đun người dùng.'
  ],
  exploreMarket: [
    'Explore Plugin Market',
    '浏览插件市场',
    'Jelajahi Pasar Plugin',
    'Explorar el mercado de plugins',
    'Khám phá Chợ plugin'
  ],
  licenseRule: [
    'Installing and updating plugins requires an active FlyEnv license.',
    '安装和更新插件需要有效的 FlyEnv 授权。',
    'Instalasi dan pembaruan plugin memerlukan lisensi FlyEnv yang aktif.',
    'Instalar y actualizar plugins requiere una licencia activa de FlyEnv.',
    'Cài đặt và cập nhật plugin yêu cầu giấy phép FlyEnv còn hiệu lực.'
  ],
  workspaceExtended: [
    'Your workspace, extended',
    '扩展你的工作区',
    'Ruang kerja Anda, diperluas',
    'Tu espacio de trabajo ampliado',
    'Mở rộng không gian làm việc'
  ],
  onDemand: ['On demand', '按需', 'Sesuai kebutuhan', 'Bajo demanda', 'Theo nhu cầu'],
  catalogAlt: [
    'FlyEnv Plugin Market showing available and installed plugins',
    'FlyEnv 插件市场显示可用与已安装的插件',
    'Pasar Plugin FlyEnv menampilkan plugin yang tersedia dan terpasang',
    'Mercado de plugins de FlyEnv con plugins disponibles e instalados',
    'Chợ plugin FlyEnv hiển thị plugin hiện có và đã cài đặt'
  ],
  catalogFooter: [
    'Official catalog · third-party sources',
    '官方目录 · 第三方源',
    'Katalog resmi · sumber pihak ketiga',
    'Catálogo oficial · fuentes de terceros',
    'Danh mục chính thức · nguồn bên thứ ba'
  ],
  gain: ['What you gain', '你能获得什么', 'Manfaat untuk Anda', 'Qué obtienes', 'Lợi ích cho bạn'],
  realWorkflows: [
    'A workspace for real development workflows.',
    '为真实开发工作流打造的工作区。',
    'Ruang kerja untuk alur pengembangan nyata.',
    'Un espacio para flujos de desarrollo reales.',
    'Không gian cho quy trình phát triển thực tế.'
  ],
  projectTitle: [
    'Build around the project, not a list of services.',
    '围绕项目组织开发环境。',
    'Bangun lingkungan berdasarkan proyek.',
    'Organiza el entorno en torno al proyecto.',
    'Tổ chức môi trường xoay quanh dự án.'
  ],
  projectBody: [
    'Use project-level runtime settings and Startup Groups to organize the exact services and runnable projects a development task needs. Start them together when you return to that task.',
    '使用项目级运行时设置和启动组，组织开发任务所需的具体服务和可运行项目。回到该任务时，可以一起启动它们。',
    'Gunakan pengaturan runtime per proyek dan Grup Startup untuk mengatur layanan dan proyek yang diperlukan suatu tugas. Jalankan semuanya bersama saat kembali mengerjakan tugas itu.',
    'Usa la configuración del entorno de ejecución por proyecto y los grupos de inicio para organizar los servicios y proyectos ejecutables que necesita cada tarea. Inícialos juntos cuando retomes el trabajo.',
    'Dùng cài đặt môi trường chạy theo dự án và Nhóm khởi động để sắp xếp dịch vụ và dự án có thể chạy mà công việc cần. Khởi động chúng cùng lúc khi quay lại công việc.'
  ],
  exploreStartup: [
    'Explore Startup Groups',
    '了解启动组',
    'Jelajahi Grup Startup',
    'Explorar los grupos de inicio',
    'Khám phá Nhóm khởi động'
  ],
  fullStack: [
    'Full-stack development',
    '全栈开发',
    'Pengembangan full-stack',
    'Desarrollo full-stack',
    'Phát triển full-stack'
  ],
  stopGroup: ['Stop group', '停止启动组', 'Hentikan grup', 'Detener grupo', 'Dừng nhóm'],
  startGroup: ['Start group', '启动启动组', 'Mulai grup', 'Iniciar grupo', 'Khởi động nhóm'],
  running: ['Running', '运行中', 'Berjalan', 'En ejecución', 'Đang chạy'],
  stopped: ['Stopped', '已停止', 'Dihentikan', 'Detenido', 'Đã dừng'],
  interactive: [
    'Interactive concept · click to preview group state',
    '交互式示意 · 点击预览启动组状态',
    'Konsep interaktif · klik untuk melihat status grup',
    'Concepto interactivo · haz clic para ver el estado del grupo',
    'Minh họa tương tác · nhấp để xem trạng thái nhóm'
  ],
  aiTitle: [
    'Keep useful context when you switch AI agents.',
    '切换 AI 智能体时保留有用的上下文。',
    'Pertahankan konteks yang berguna saat berganti agen AI.',
    'Conserva el contexto útil al cambiar de agente de IA.',
    'Giữ ngữ cảnh hữu ích khi đổi tác nhân AI.'
  ],
  aiBody: [
    'FlyEnv brings persistent local memory into the development workspace. With compatible agents configured through MCP, project knowledge can be reused across sessions and tools, instead of being locked into one conversation.',
    'FlyEnv 将持久化本地记忆引入开发工作区。通过 MCP 配置兼容的智能体后，项目知识可以跨会话和工具复用。',
    'FlyEnv membawa memori lokal persisten ke ruang kerja pengembangan. Setelah agen yang kompatibel dikonfigurasi lewat MCP, pengetahuan proyek dapat digunakan kembali lintas sesi dan alat.',
    'FlyEnv incorpora memoria local persistente al espacio de desarrollo. Configura agentes compatibles mediante MCP para reutilizar el conocimiento del proyecto entre sesiones y herramientas.',
    'FlyEnv đưa bộ nhớ cục bộ lưu bền vào không gian phát triển. Với tác nhân tương thích được cấu hình qua MCP, kiến thức dự án có thể được dùng lại giữa các phiên và công cụ.'
  ],
  exploreMemory: [
    'Explore AI Memory',
    '了解 AI Memory',
    'Jelajahi AI Memory',
    'Explorar AI Memory',
    'Khám phá AI Memory'
  ],
  sharedContext: [
    'Shared AI context',
    '共享 AI 上下文',
    'Konteks AI bersama',
    'Contexto de IA compartido',
    'Ngữ cảnh AI dùng chung'
  ],
  memoryViaMcp: [
    'AI Memory via MCP',
    '通过 MCP 访问 AI Memory',
    'AI Memory melalui MCP',
    'AI Memory mediante MCP',
    'AI Memory qua MCP'
  ],
  memoryScope: [
    'Persistent local knowledge · project scope',
    '持久化本地知识 · 项目范围',
    'Pengetahuan lokal persisten · cakupan proyek',
    'Conocimiento local persistente · ámbito del proyecto',
    'Kiến thức lưu cục bộ · phạm vi dự án'
  ],
  memoryData: [
    'Local memory data',
    '本地记忆数据',
    'Data memori lokal',
    'Datos de memoria local',
    'Dữ liệu bộ nhớ cục bộ'
  ],
  example: ['Example', '示例', 'Contoh', 'Ejemplo', 'Ví dụ'],
  memories: ['Memories', '记忆', 'Memori', 'Recuerdos', 'Mục ghi nhớ'],
  revisions: [
    'Revision history',
    '修订记录',
    'Riwayat revisi',
    'Historial de revisiones',
    'Lịch sử sửa đổi'
  ],
  backups: ['Backups', '备份', 'Cadangan', 'Copias de seguridad', 'Bản sao lưu'],
  concept: [
    'Concept diagram · configure supported agents and services',
    '概念示意 · 配置受支持的智能体和服务',
    'Diagram konsep · konfigurasikan agen dan layanan yang didukung',
    'Diagrama conceptual · configura agentes y servicios compatibles',
    'Sơ đồ khái niệm · cấu hình tác nhân và dịch vụ được hỗ trợ'
  ],
  sourceTitle: [
    'Understand the tool you depend on.',
    '了解你日常依赖的工具。',
    'Pahami alat yang Anda andalkan.',
    'Entiende la herramienta de la que dependes.',
    'Hiểu công cụ bạn đang dựa vào.'
  ],
  sourceBody: [
    'Inspect the FlyEnv source, contribute improvements, and extend your workspace through official and third-party plugin sources. Use User Modules for your own commands and configuration.',
    '你可以查看 FlyEnv 源代码、贡献改进，并通过官方和第三方插件源扩展工作区。使用用户模块添加自己的命令和配置。',
    'Periksa kode sumber FlyEnv, sumbangkan perbaikan, dan perluas ruang kerja melalui sumber plugin resmi dan pihak ketiga. Gunakan Modul Pengguna untuk perintah dan konfigurasi Anda sendiri.',
    'Consulta el código de FlyEnv, contribuye con mejoras y amplía el espacio mediante fuentes oficiales y de terceros. Usa los módulos de usuario para tus propios comandos y configuraciones.',
    'Xem mã nguồn FlyEnv, đóng góp cải tiến và mở rộng không gian làm việc qua nguồn plugin chính thức và bên thứ ba. Dùng mô-đun người dùng cho lệnh và cấu hình riêng.'
  ],
  exploreSource: [
    'Explore the source on GitHub',
    '在 GitHub 查看源代码',
    'Lihat kode sumber di GitHub',
    'Ver el código en GitHub',
    'Xem mã nguồn trên GitHub'
  ],
  modular: [
    'Open, modular workspace',
    '开放、模块化的工作区',
    'Ruang kerja terbuka dan modular',
    'Espacio de trabajo abierto y modular',
    'Không gian làm việc mở và mô-đun'
  ],
  coreApp: ['Core app', '核心应用', 'Aplikasi inti', 'Aplicación principal', 'Ứng dụng cốt lõi'],
  nativeServices: [
    'Native runtimes and services',
    '原生运行时和服务',
    'Runtime dan layanan native',
    'Entornos de ejecución y servicios nativos',
    'Môi trường chạy và dịch vụ gốc'
  ],
  plugins: ['Plugins', '插件', 'Plugin', 'Plugins', 'Plugin'],
  integrations: [
    'Optional integrations',
    '可选集成',
    'Integrasi opsional',
    'Integraciones opcionales',
    'Tích hợp tùy chọn'
  ],
  yourScripts: [
    'Your own scripts',
    '你自己的脚本',
    'Skrip Anda sendiri',
    'Tus propios scripts',
    'Tập lệnh của bạn'
  ],
  nextProject: [
    'Your next project',
    '你的下一个项目',
    'Proyek Anda berikutnya',
    'Tu próximo proyecto',
    'Dự án tiếp theo của bạn'
  ],
  install: [
    'Install on demand',
    '按需安装',
    'Instal sesuai kebutuhan',
    'Instalar bajo demanda',
    'Cài theo nhu cầu'
  ],
  configure: ['Configure', '配置', 'Konfigurasikan', 'Configurar', 'Cấu hình'],
  startTogether: [
    'Start together',
    '一起启动',
    'Mulai bersama',
    'Iniciar juntos',
    'Khởi động cùng nhau'
  ],
  tryWithProject: [
    'Try with a real project',
    '用真实项目试一试',
    'Coba dengan proyek nyata',
    'Prueba con un proyecto real',
    'Thử với một dự án thực tế'
  ],
  migrationTitle: [
    'Try one ServBay project in FlyEnv.',
    '在 FlyEnv 中试跑一个 ServBay 项目。',
    'Coba satu proyek ServBay di FlyEnv.',
    'Prueba un proyecto de ServBay en FlyEnv.',
    'Thử một dự án ServBay trên FlyEnv.'
  ],
  migrationLead: [
    'Start with a familiar project instead of changing all of your development tools at once.',
    '先从一个熟悉的项目开始，再逐步调整你的开发工具。',
    'Mulai dari proyek yang sudah Anda kenal agar perpindahan alat pengembangan dapat dilakukan bertahap.',
    'Empieza por un proyecto conocido y cambia tus herramientas de desarrollo de forma gradual.',
    'Bắt đầu với một dự án quen thuộc rồi từng bước chuyển các công cụ phát triển.'
  ],
  gettingStarted: ['Getting started', '快速入门', 'Mulai menggunakan', 'Primeros pasos', 'Bắt đầu'],
  preserve: [
    'Preserve your current environment',
    '保留当前环境',
    'Pertahankan lingkungan saat ini',
    'Conserva tu entorno actual',
    'Giữ lại môi trường hiện tại'
  ],
  preserveBody: [
    'Back up source code, environment settings, certificates and database exports. Keep the original setup intact.',
    '备份源代码、环境设置、证书和数据库导出文件。完整保留原有配置。',
    'Cadangkan kode sumber, pengaturan lingkungan, sertifikat, dan hasil ekspor basis data. Biarkan konfigurasi awal tetap utuh.',
    'Haz copias del código fuente, los ajustes de entorno, los certificados y las exportaciones de base de datos. Conserva la configuración original.',
    'Sao lưu mã nguồn, cài đặt môi trường, chứng chỉ và bản xuất cơ sở dữ liệu. Giữ nguyên cấu hình ban đầu.'
  ],
  recreate: [
    'Recreate the required stack',
    '重建所需技术栈',
    'Buat ulang stack yang diperlukan',
    'Recrea la pila necesaria',
    'Tạo lại ngăn xếp cần thiết'
  ],
  recreateBody: [
    'Install matching versions of your runtimes and services in FlyEnv. Check platform availability and avoid port conflicts.',
    '在 FlyEnv 中安装匹配版本的运行时和服务。确认平台可用性，并避免端口冲突。',
    'Instal versi runtime dan layanan yang sesuai di FlyEnv. Periksa ketersediaan platform dan hindari konflik port.',
    'Instala en FlyEnv las versiones correspondientes de tus entornos de ejecución y servicios. Comprueba la disponibilidad por plataforma y evita conflictos de puertos.',
    'Cài các phiên bản môi trường chạy và dịch vụ tương ứng trong FlyEnv. Kiểm tra khả năng hỗ trợ nền tảng và tránh xung đột cổng.'
  ],
  connect: [
    'Connect your project',
    '接入你的项目',
    'Hubungkan proyek Anda',
    'Conecta tu proyecto',
    'Kết nối dự án'
  ],
  connectBody: [
    'Set the document root or reverse proxy, configure the local domain and HTTPS, then import a test database.',
    '设置网站根目录或反向代理，配置本地域名和 HTTPS，再导入测试数据库。',
    'Atur direktori akar situs atau reverse proxy, konfigurasikan domain lokal dan HTTPS, lalu impor basis data pengujian.',
    'Configura la raíz del sitio o el proxy inverso, el dominio local y HTTPS. Después, importa una base de datos de prueba.',
    'Đặt thư mục gốc hoặc proxy ngược, cấu hình tên miền cục bộ và HTTPS, rồi nhập cơ sở dữ liệu thử nghiệm.'
  ],
  extendOnly: [
    'Extend only when needed',
    '按需扩展',
    'Perluas hanya saat diperlukan',
    'Amplía solo cuando sea necesario',
    'Chỉ mở rộng khi cần'
  ],
  extendBody: [
    'Create a Startup Group for the managed services. Optionally add plugins or MCP configuration after the project runs.',
    '为托管服务建立一个启动组。项目运行后，再按需添加插件或 MCP 配置。',
    'Buat Grup Startup untuk layanan terkelola. Setelah proyek berjalan, tambahkan plugin atau konfigurasi MCP bila diperlukan.',
    'Crea un grupo de inicio para los servicios gestionados. Cuando el proyecto funcione, añade plugins o configura MCP si lo necesitas.',
    'Tạo Nhóm khởi động cho dịch vụ được quản lý. Khi dự án chạy được, thêm plugin hoặc cấu hình MCP nếu cần.'
  ],
  questions: ['Questions', '问题', 'Pertanyaan', 'Preguntas', 'Câu hỏi'],
  frequentlyAsked: [
    'Frequently asked questions',
    '常见问题',
    'Pertanyaan yang sering diajukan',
    'Preguntas frecuentes',
    'Câu hỏi thường gặp'
  ],
  faqAlternative: [
    'Is FlyEnv an alternative to ServBay?',
    'FlyEnv 可以替代 ServBay 吗？',
    'Apakah FlyEnv alternatif untuk ServBay?',
    '¿Es FlyEnv una alternativa a ServBay?',
    'FlyEnv có phải là lựa chọn thay thế ServBay không?'
  ],
  faqAlternativeAnswer: [
    'Yes, for many native local development workflows. Both tools support a broad range of runtimes and services. FlyEnv focuses on an open-source, project-oriented, extensible workspace.',
    '在许多原生本地开发流程中可以。两款工具都支持多种运行时和服务。FlyEnv 专注于开源、以项目为中心且可扩展的工作区。',
    'Ya, untuk banyak alur pengembangan lokal native. Kedua alat mendukung beragam runtime dan layanan. FlyEnv berfokus pada ruang kerja sumber terbuka yang berorientasi pada proyek dan dapat diperluas.',
    'Sí, en muchos flujos de desarrollo local nativo. Las dos herramientas admiten una amplia gama de entornos de ejecución y servicios. FlyEnv se centra en un espacio de trabajo de código abierto, orientado a proyectos y extensible.',
    'Có, với nhiều quy trình phát triển cục bộ chạy trực tiếp. Cả hai công cụ hỗ trợ nhiều môi trường chạy và dịch vụ. FlyEnv tập trung vào không gian làm việc mã nguồn mở, theo dự án và có thể mở rộng.'
  ],
  faqLinux: [
    'Does FlyEnv support Linux?',
    'FlyEnv 支持 Linux 吗？',
    'Apakah FlyEnv mendukung Linux?',
    '¿FlyEnv es compatible con Linux?',
    'FlyEnv có hỗ trợ Linux không?'
  ],
  faqLinuxAnswer: [
    'FlyEnv has desktop apps for Windows, macOS and Linux. Check the platform-specific availability of each service and plugin.',
    'FlyEnv 提供 Windows、macOS 和 Linux 桌面应用。请确认各服务和插件在相应平台的可用性。',
    'FlyEnv menyediakan aplikasi desktop untuk Windows, macOS, dan Linux. Periksa ketersediaan tiap layanan dan plugin pada platform Anda.',
    'FlyEnv ofrece aplicaciones de escritorio para Windows, macOS y Linux. Consulta la disponibilidad de cada servicio y plugin en tu plataforma.',
    'FlyEnv có ứng dụng máy tính cho Windows, macOS và Linux. Hãy kiểm tra khả năng hỗ trợ từng dịch vụ và plugin trên nền tảng của bạn.'
  ],
  faqMcp: [
    'Does FlyEnv support MCP and local AI tools?',
    'FlyEnv 支持 MCP 和本地 AI 工具吗？',
    'Apakah FlyEnv mendukung MCP dan alat AI lokal?',
    '¿FlyEnv admite MCP y herramientas de IA locales?',
    'FlyEnv có hỗ trợ MCP và công cụ AI cục bộ không?'
  ],
  faqMcpAnswer: [
    'Yes. FlyEnv provides a built-in MCP server, optional AI Memory, and integrations for local model and AI development tools. ServBay also offers MCP and AI capabilities.',
    '支持。FlyEnv 提供内置 MCP 服务器、可选的 AI Memory，以及本地模型和 AI 开发工具集成。ServBay 也提供 MCP 和 AI 功能。',
    'Ya. FlyEnv menyediakan server MCP bawaan, AI Memory opsional, serta integrasi untuk model lokal dan alat pengembangan AI. ServBay juga menawarkan kemampuan MCP dan AI.',
    'Sí. FlyEnv incluye un servidor MCP, AI Memory opcional e integraciones para modelos locales y herramientas de desarrollo con IA. ServBay también ofrece funciones de MCP e IA.',
    'Có. FlyEnv cung cấp máy chủ MCP tích hợp, AI Memory tùy chọn và các tích hợp cho mô hình cục bộ và công cụ phát triển AI. ServBay cũng có các tính năng MCP và AI.'
  ],
  faqMigrate: [
    'Can I migrate my existing sites and databases?',
    '能迁移现有站点和数据库吗？',
    'Bisakah saya memigrasikan situs dan basis data yang sudah ada?',
    '¿Puedo migrar mis sitios y bases de datos existentes?',
    'Tôi có thể chuyển trang web và cơ sở dữ liệu hiện có không?'
  ],
  faqMigrateAnswer: [
    'You can reuse source code and recreate local sites with matching runtime versions. Export and import databases into a separate test setup. Review paths, ports and certificates.',
    '你可以复用源代码，并用匹配的运行时版本重建本地站点。将数据库导出并导入独立测试环境。检查路径、端口和证书。',
    'Anda dapat memakai kembali kode sumber dan membuat ulang situs lokal dengan versi runtime yang sesuai. Ekspor dan impor basis data ke lingkungan pengujian terpisah. Periksa jalur, port, dan sertifikat.',
    'Puedes reutilizar el código fuente y recrear los sitios locales con versiones equivalentes del entorno de ejecución. Exporta e importa las bases de datos en un entorno de prueba separado. Revisa rutas, puertos y certificados.',
    'Bạn có thể dùng lại mã nguồn và tạo lại trang web cục bộ với phiên bản môi trường chạy tương ứng. Xuất rồi nhập cơ sở dữ liệu vào môi trường thử nghiệm riêng. Kiểm tra đường dẫn, cổng và chứng chỉ.'
  ],
  faqLicense: [
    'Do I need a license to install plugins?',
    '安装插件需要授权吗？',
    'Apakah saya memerlukan lisensi untuk menginstal plugin?',
    '¿Necesito una licencia para instalar plugins?',
    'Tôi có cần giấy phép để cài plugin không?'
  ],
  licenseDetails: [
    'See the {license} for current terms.',
    '现行条款请参阅{license}。',
    'Lihat {license} untuk ketentuan saat ini.',
    'Consulta la {license} para ver las condiciones vigentes.',
    'Xem {license} để biết điều khoản hiện hành.'
  ],
  licensePage: [
    'license page',
    '授权页面',
    'halaman lisensi',
    'página de licencias',
    'trang giấy phép'
  ],
  makeYours: [
    'Make it yours',
    '打造自己的环境',
    'Jadikan milik Anda',
    'Hazlo tuyo',
    'Thiết lập theo cách của bạn'
  ],
  closingTitle: [
    'Build a workspace you can grow with.',
    '打造能陪你成长的工作区。',
    'Bangun ruang kerja yang dapat tumbuh bersama Anda.',
    'Crea un espacio de trabajo que crezca contigo.',
    'Xây dựng không gian làm việc có thể phát triển cùng bạn.'
  ],
  closingBody: [
    'Start with the services you need today. Extend your FlyEnv workspace when your next project demands more.',
    '从今天需要的服务开始。下一个项目需要更多能力时，再扩展你的 FlyEnv 工作区。',
    'Mulai dengan layanan yang Anda perlukan saat ini. Perluas ruang kerja FlyEnv ketika proyek berikutnya membutuhkan lebih banyak kemampuan.',
    'Empieza con los servicios que necesitas hoy. Amplía tu espacio de FlyEnv cuando el siguiente proyecto exija más.',
    'Bắt đầu với các dịch vụ bạn cần hôm nay. Mở rộng không gian FlyEnv khi dự án tiếp theo có thêm yêu cầu.'
  ]
} satisfies Record<string, Translations>

export type ServBayCopyKey = keyof typeof copy

export function getServBayPrototypeCopy(locale: CompareLocale) {
  return (key: ServBayCopyKey) => copy[key][localeIndex[locale]]
}

export function getServBayPrototypeFaqs(locale: CompareLocale) {
  const tr = getServBayPrototypeCopy(locale)
  return [
    { question: tr('faqAlternative'), answer: tr('faqAlternativeAnswer') },
    { question: tr('faqLinux'), answer: tr('faqLinuxAnswer') },
    { question: tr('faqMcp'), answer: tr('faqMcpAnswer') },
    { question: tr('faqMigrate'), answer: tr('faqMigrateAnswer') },
    {
      question: tr('faqLicense'),
      answer: tr('licenseRule') + ' ' + tr('licenseDetails').replace('{license}', tr('licensePage'))
    }
  ]
}
