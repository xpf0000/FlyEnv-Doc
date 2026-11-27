import type { CompareLocale } from './types'

type DetailTranslations = [zh: string, id: string, es: string, vi: string]

const localeIndex = { zh: 0, id: 1, es: 2, vi: 3 } as const

const translations: Record<string, DetailTranslations> = {
  Breadcrumb: ['面包屑导航', 'Jejak navigasi', 'Ruta de navegación', 'Đường dẫn điều hướng'],
  Compare: ['比较', 'Bandingkan', 'Comparar', 'So sánh'],
  'Download FlyEnv →': ['下载 FlyEnv →', 'Unduh FlyEnv →', 'Descargar FlyEnv →', 'Tải FlyEnv →'],
  'Compare capabilities': [
    '比较功能',
    'Bandingkan kemampuan',
    'Comparar funciones',
    'So sánh tính năng'
  ],
  'Open source': ['开源', 'Sumber terbuka', 'Código abierto', 'Mã nguồn mở'],
  'On this page': ['本页导航', 'Di halaman ini', 'En esta página', 'Trên trang này'],
  'The key differences': ['主要差异', 'Perbedaan utama', 'Diferencias clave', 'Khác biệt chính'],
  'Capability comparison': [
    '功能对比',
    'Perbandingan kemampuan',
    'Comparación de funciones',
    'So sánh tính năng'
  ],
  Capability: ['功能', 'Kemampuan', 'Función', 'Tính năng'],
  'Product references:': [
    '产品资料：',
    'Referensi produk:',
    'Referencias del producto:',
    'Tài liệu sản phẩm:'
  ],
  'Capabilities and package availability vary by edition, operating system and release. Check the official documentation for your setup.':
    [
      '功能和软件包因版本、系统和发行版而异，请查阅对应的官方文档。',
      'Kemampuan dan ketersediaan paket bergantung pada edisi, sistem operasi, dan rilis. Periksa dokumentasi resmi untuk pengaturan Anda.',
      'Las funciones y los paquetes disponibles varían según la edición, el sistema operativo y la versión. Consulta la documentación oficial para tu configuración.',
      'Tính năng và gói phần mềm tùy thuộc phiên bản và hệ điều hành. Hãy kiểm tra tài liệu chính thức của cấu hình bạn dùng.'
    ],
  'Try FlyEnv': ['试用 FlyEnv', 'Coba FlyEnv', 'Probar FlyEnv', 'Thử FlyEnv'],
  'Watch demos': ['观看演示', 'Tonton demo', 'Ver demos', 'Xem bản demo'],
  'What you gain': ['你能获得什么', 'Yang Anda dapatkan', 'Qué ganas', 'Bạn nhận được gì'],
  'Explore Plugin Market': [
    '查看插件市场',
    'Jelajahi Pasar Plugin',
    'Explorar el catálogo de complementos',
    'Khám phá Plugin Market'
  ],
  'Installing and updating plugins requires an active FlyEnv license.': [
    '安装和更新插件需要有效的 FlyEnv 授权。',
    'Instalasi dan pembaruan plugin memerlukan lisensi FlyEnv yang aktif.',
    'Para instalar o actualizar complementos necesitas una licencia de FlyEnv activa.',
    'Cần giấy phép FlyEnv còn hiệu lực để cài hoặc cập nhật plugin.'
  ],
  'ON DEMAND': ['按需添加', 'SESUAI KEBUTUHAN', 'BAJO DEMANDA', 'THEO NHU CẦU'],
  'Official catalog · third-party sources': [
    '官方目录 · 第三方来源',
    'Katalog resmi · sumber pihak ketiga',
    'Catálogo oficial · fuentes de terceros',
    'Danh mục chính thức · nguồn bên thứ ba'
  ],
  'Try with a real project': [
    '用真实项目试用',
    'Coba dengan proyek nyata',
    'Prueba con un proyecto real',
    'Thử với dự án thực tế'
  ],
  'Download FlyEnv': ['下载 FlyEnv', 'Unduh FlyEnv', 'Descargar FlyEnv', 'Tải FlyEnv'],
  'Getting started': ['快速入门', 'Mulai menggunakan FlyEnv', 'Primeros pasos', 'Bắt đầu'],
  Questions: ['问题', 'Pertanyaan', 'Preguntas', 'Câu hỏi'],
  'Frequently asked questions': [
    '常见问题',
    'Pertanyaan umum',
    'Preguntas frecuentes',
    'Câu hỏi thường gặp'
  ],
  'Make it yours': [
    '按你的方式搭建',
    'Sesuaikan ruang kerja Anda',
    'Adáptalo a tu forma de trabajar',
    'Tùy chỉnh theo cách của bạn'
  ],
  'Stop group': ['停止启动组', 'Hentikan grup', 'Detener grupo', 'Dừng nhóm'],
  'Start group': ['启动组', 'Jalankan grup', 'Iniciar grupo', 'Khởi động nhóm'],
  Running: ['运行中', 'Berjalan', 'En ejecución', 'Đang chạy'],
  Stopped: ['已停止', 'Berhenti', 'Detenido', 'Đã dừng'],
  'Group running': ['启动组运行中', 'Grup sedang berjalan', 'Grupo en ejecución', 'Nhóm đang chạy'],
  'Group stopped': ['启动组已停止', 'Grup telah dihentikan', 'Grupo detenido', 'Nhóm đã dừng'],
  'Interactive concept · click to preview group state': [
    '交互示意 · 点击预览启动组状态',
    'Simulasi interaktif · klik untuk melihat status grup',
    'Simulación interactiva · prueba el estado del grupo',
    'Minh họa tương tác · bấm để xem trạng thái nhóm'
  ],
  'Illustrative workflow · not an application screenshot': [
    '工作流示意图 · 非应用截图',
    'Ilustrasi alur kerja · bukan tangkapan layar aplikasi',
    'Flujo ilustrativo · no es una captura de la aplicación',
    'Minh họa quy trình · không phải ảnh chụp ứng dụng'
  ],
  'Laragon alternative': [
    'Laragon 替代方案',
    'Alternatif Laragon',
    'Alternativa a Laragon',
    'Giải pháp thay thế Laragon'
  ],
  'FlyEnv vs Laragon': [
    'FlyEnv 与 Laragon 对比',
    'FlyEnv vs Laragon',
    'FlyEnv frente a Laragon',
    'FlyEnv và Laragon'
  ],
  'Take your workflow': [
    '让开发流程',
    'Bawa alur kerja Anda',
    'Lleva tu flujo de trabajo',
    'Đưa quy trình của bạn'
  ],
  'beyond Windows.': [
    '走出 Windows。',
    'ke luar Windows.',
    'más allá de Windows.',
    'vượt ra ngoài Windows.'
  ],
  'Keep the familiar local development workflow you value. Add cross-platform support, project-level runtimes, grouped services and an extensible workspace as your projects grow.':
    [
      '沿用熟悉的本地开发流程。随着项目增长，获得跨平台支持、项目级运行时、服务分组和可扩展的工作区。',
      'Pertahankan alur pengembangan lokal yang Anda kenal. Tambahkan dukungan lintas platform, runtime per proyek, grup layanan, dan ruang kerja yang dapat diperluas.',
      'Conserva tu flujo de desarrollo local. Añade soporte multiplataforma, runtimes por proyecto, grupos de servicios y un espacio de trabajo ampliable.',
      'Giữ quy trình phát triển cục bộ quen thuộc. Thêm hỗ trợ đa nền tảng, runtime theo dự án, nhóm dịch vụ và không gian làm việc có thể mở rộng.'
    ],
  'Your projects': ['你的项目', 'Proyek Anda', 'Tus proyectos', 'Dự án của bạn'],
  WORKSPACE: ['工作区', 'RUANG KERJA', 'ESPACIO DE TRABAJO', 'KHÔNG GIAN LÀM VIỆC'],
  'Customer portal': ['客户门户', 'Portal pelanggan', 'Portal de clientes', 'Cổng khách hàng'],
  'Project A': ['项目 A', 'Proyek A', 'Proyecto A', 'Dự án A'],
  'API & frontend': ['API 和前端', 'API dan frontend', 'API y frontend', 'API và frontend'],
  'Project B': ['项目 B', 'Proyek B', 'Proyecto B', 'Dự án B'],
  'Legacy application': ['旧版应用', 'Aplikasi lama', 'Aplicación heredada', 'Ứng dụng cũ'],
  'Project C': ['项目 C', 'Proyek C', 'Proyecto C', 'Dự án C'],
  'One workspace, independent project settings': [
    '同一工作区，项目独立配置',
    'Satu ruang kerja, pengaturan proyek terpisah',
    'Un espacio de trabajo, configuraciones independientes',
    'Một không gian làm việc, cấu hình riêng cho từng dự án'
  ],
  'Key differences': ['主要差异', 'Perbedaan utama', 'Diferencias clave', 'Khác biệt chính'],
  'Project workflow': [
    '项目工作流',
    'Alur kerja proyek',
    'Flujo de trabajo del proyecto',
    'Quy trình dự án'
  ],
  'Try your project': [
    '试运行你的项目',
    'Coba proyek Anda',
    'Prueba tu proyecto',
    'Thử dự án của bạn'
  ],
  'Build on what you already know.': [
    '在熟悉的开发方式上继续扩展。',
    'Kembangkan alur kerja yang sudah Anda kenal.',
    'Parte de un flujo que ya conoces.',
    'Mở rộng từ quy trình bạn đã quen.'
  ],
  'Laragon offers a familiar portable Windows environment. FlyEnv is designed for native development across Windows, macOS and Linux, with project-oriented service management.':
    [
      'Laragon 提供熟悉的便携式 Windows 环境。FlyEnv 面向 Windows、macOS 和 Linux 的原生开发，按项目管理服务。',
      'Laragon menyediakan lingkungan Windows portabel yang familier. FlyEnv dirancang untuk pengembangan native di Windows, macOS, dan Linux dengan pengelolaan layanan per proyek.',
      'Laragon ofrece un entorno portátil de Windows. FlyEnv está diseñado para el desarrollo nativo en Windows, macOS y Linux con gestión de servicios por proyecto.',
      'Laragon cung cấp môi trường Windows di động quen thuộc. FlyEnv hướng đến phát triển native trên Windows, macOS và Linux, với dịch vụ được quản lý theo dự án.'
    ],
  'Why switch': ['切换的理由', 'Alasan beralih', 'Por qué cambiar', 'Lý do chuyển đổi'],
  'Desktop platforms': [
    '桌面平台',
    'Platform desktop',
    'Plataformas de escritorio',
    'Nền tảng máy tính'
  ],
  'Windows, macOS, Linux': [
    'Windows、macOS、Linux',
    'Windows, macOS, Linux',
    'Windows, macOS y Linux',
    'Windows, macOS, Linux'
  ],
  'Runtime management': [
    '运行时管理',
    'Pengelolaan runtime',
    'Gestión de runtimes',
    'Quản lý runtime'
  ],
  'Multiple versions; version switching': [
    '多个版本，可切换版本',
    'Beberapa versi yang bisa diganti',
    'Varias versiones y cambio de versión',
    'Nhiều phiên bản, cho phép chuyển đổi'
  ],
  'Per-project runtime settings + multiple versions': [
    '项目级运行时设置与多版本管理',
    'Pengaturan runtime per proyek dan beberapa versi',
    'Runtimes por proyecto y varias versiones',
    'Cài đặt runtime theo dự án và nhiều phiên bản'
  ],
  'Project startup': ['启动项目', 'Startup proyek', 'Arranque del proyecto', 'Khởi động dự án'],
  'Start/stop tools in a portable stack': [
    '启停便携技术栈中的工具',
    'Jalankan atau hentikan alat dalam stack portabel',
    'Inicia o detén herramientas en un stack portátil',
    'Bật hoặc tắt công cụ trong stack di động'
  ],
  'Named Startup Groups for project dependencies': [
    '通过命名启动组管理项目依赖',
    'Startup Groups bernama untuk dependensi proyek',
    'Grupos de inicio con nombre para dependencias del proyecto',
    'Nhóm khởi động có tên cho các phần phụ thuộc của dự án'
  ],
  'Extending your tools': [
    '扩展工具',
    'Perluasan alat',
    'Ampliación de herramientas',
    'Mở rộng công cụ'
  ],
  'Quick add and portable tooling': [
    'Quick add 和便携工具',
    'Quick add dan alat portabel',
    'Quick add y herramientas portátiles',
    'Quick add và công cụ di động'
  ],
  'Optional modules via Plugin Market': [
    '通过插件市场添加可选模块',
    'Modul opsional melalui Pasar Plugin',
    'Módulos opcionales desde el catálogo de complementos',
    'Module tùy chọn qua Plugin Market'
  ],
  'AI development': ['AI 开发', 'Pengembangan AI', 'Desarrollo con IA', 'Phát triển với AI'],
  'See Laragon documentation': [
    '参见 Laragon 文档',
    'Lihat dokumentasi Laragon',
    'Consulta la documentación de Laragon',
    'Xem tài liệu Laragon'
  ],
  'Built-in MCP; optional AI Memory': [
    '内置 MCP，可选 AI Memory',
    'MCP bawaan dan AI Memory opsional',
    'MCP integrado y AI Memory opcional',
    'MCP tích hợp và AI Memory tùy chọn'
  ],
  'Shared fundamentals': [
    '共通的基础能力',
    'Kemampuan dasar yang sama',
    'Funciones básicas compartidas',
    'Tính năng nền tảng tương đồng'
  ],
  'Local web stack': ['本地 Web 技术栈', 'Stack web lokal', 'Stack web local', 'Stack web cục bộ'],
  'PHP, web servers, databases': [
    'PHP、Web 服务器、数据库',
    'PHP, server web, database',
    'PHP, servidores web y bases de datos',
    'PHP, máy chủ web và cơ sở dữ liệu'
  ],
  'PHP, web servers, databases and more': [
    'PHP、Web 服务器、数据库等',
    'PHP, server web, database, dan lainnya',
    'PHP, servidores web, bases de datos y más',
    'PHP, máy chủ web, cơ sở dữ liệu và nhiều hơn nữa'
  ],
  'Local domains & HTTPS': [
    '本地域名与 HTTPS',
    'Domain lokal dan HTTPS',
    'Dominios locales y HTTPS',
    'Tên miền cục bộ và HTTPS'
  ],
  Supported: ['支持', 'Didukung', 'Compatible', 'Được hỗ trợ'],
  'FlyEnv project runtimes': [
    'FlyEnv 项目运行时',
    'Runtime proyek FlyEnv',
    'Runtimes de proyecto de FlyEnv',
    'Runtime dự án trong FlyEnv'
  ],
  'A project-first way to work.': [
    '以项目为中心的工作方式。',
    'Alur kerja yang berpusat pada proyek.',
    'Trabaja por proyecto.',
    'Làm việc theo từng dự án.'
  ],
  '01 / Project environments': [
    '01 / 项目环境',
    '01 / Lingkungan proyek',
    '01 / Entornos de proyecto',
    '01 / Môi trường dự án'
  ],
  'Stop switching your entire environment for one project.': [
    '无需为单个项目切换整个环境。',
    'Tidak perlu mengganti seluruh lingkungan demi satu proyek.',
    'Evita cambiar todo el entorno para un solo proyecto.',
    'Giữ nguyên môi trường của các dự án khác.'
  ],
  'Keep a legacy PHP project and a modern Laravel project on their own supported runtime versions. Manage Node.js or Python projects from the same workspace, too.':
    [
      '旧 PHP 项目和现代 Laravel 项目各用兼容的版本，还能在同一工作区管理 Node.js 或 Python 项目。',
      'Pertahankan versi yang kompatibel untuk proyek PHP lama dan Laravel modern. Kelola proyek Node.js atau Python di ruang kerja yang sama.',
      'Usa versiones compatibles para un proyecto PHP antiguo y otro moderno de Laravel. Gestiona también Node.js o Python desde el mismo espacio.',
      'Dùng phiên bản tương thích riêng cho dự án PHP cũ và Laravel mới. Quản lý cả Node.js hoặc Python trong cùng không gian làm việc.'
    ],
  'Project-level runtime management →': [
    '了解项目级运行时管理 →',
    'Kelola runtime per proyek →',
    'Gestionar runtimes por proyecto →',
    'Quản lý runtime theo dự án →'
  ],
  '02 / Startup Groups': [
    '02 / 启动组',
    '02 / Startup Groups',
    '02 / Grupos de inicio',
    '02 / Nhóm khởi động'
  ],
  'Bring a project’s services up together.': [
    '一次启动项目所需的服务。',
    'Jalankan layanan proyek sekaligus.',
    'Inicia juntos los servicios de un proyecto.',
    'Khởi động cùng lúc các dịch vụ của dự án.'
  ],
  'Group the installed PHP service, web server, database and cache that a project needs. Switch to another project without manually restarting each dependency.':
    [
      '把项目需要的 PHP 服务、Web 服务器、数据库和缓存加入组。切换项目时，无需逐个手动重启依赖。',
      'Kelompokkan layanan PHP, server web, database, dan cache yang dibutuhkan proyek. Beralih proyek tanpa memulai ulang tiap dependensi secara manual.',
      'Agrupa PHP, el servidor web, la base de datos y la caché. Cambia de proyecto sin reiniciar manualmente cada dependencia.',
      'Gom dịch vụ PHP, máy chủ web, cơ sở dữ liệu và bộ nhớ đệm của dự án. Chuyển dự án mà không phải khởi động lại từng dịch vụ theo cách thủ công.'
    ],
  'See Startup Groups →': [
    '查看启动组 →',
    'Lihat Startup Groups →',
    'Ver grupos de inicio →',
    'Xem nhóm khởi động →'
  ],
  'Startup Groups': ['启动组', 'Startup Groups', 'Grupos de inicio', 'Nhóm khởi động'],
  'Laravel project': ['Laravel 项目', 'Proyek Laravel', 'Proyecto Laravel', 'Dự án Laravel'],
  '03 / Cross-platform': [
    '03 / 跨平台',
    '03 / Lintas platform',
    '03 / Multiplataforma',
    '03 / Đa nền tảng'
  ],
  'One familiar workspace on your next computer.': [
    '换台电脑，也能沿用熟悉的工作区。',
    'Gunakan ruang kerja yang familier di komputer berikutnya.',
    'El mismo espacio de trabajo en tu próximo equipo.',
    'Không gian quen thuộc trên máy tính tiếp theo.'
  ],
  'Use FlyEnv on Windows, macOS and Linux. Keep the same management approach as you change operating systems; install the versions available for your platform.':
    [
      '在 Windows、macOS 和 Linux 上使用 FlyEnv。更换系统时沿用同样的管理方式，并安装该平台提供的版本。',
      'Gunakan FlyEnv di Windows, macOS, dan Linux. Pertahankan cara pengelolaan yang sama dan instal versi yang tersedia untuk platform Anda.',
      'Usa FlyEnv en Windows, macOS y Linux. Conserva el método de gestión al cambiar de sistema e instala las versiones disponibles para tu plataforma.',
      'Dùng FlyEnv trên Windows, macOS và Linux. Giữ cách quản lý quen thuộc khi chuyển hệ điều hành và chọn các phiên bản có sẵn.'
    ],
  'Explore all features →': [
    '查看全部功能 →',
    'Jelajahi semua fitur →',
    'Explorar todas las funciones →',
    'Khám phá mọi tính năng →'
  ],
  'Same idea, three platforms': [
    '同样的开发方式，三种平台',
    'Satu pendekatan, tiga platform',
    'Un enfoque, tres plataformas',
    'Một cách làm, ba nền tảng'
  ],
  'PHP · Node.js': ['PHP · Node.js', 'PHP · Node.js', 'PHP · Node.js', 'PHP · Node.js'],
  'PHP · Python': ['PHP · Python', 'PHP · Python', 'PHP · Python', 'PHP · Python'],
  'Java · Go': ['Java · Go', 'Java · Go', 'Java · Go', 'Java · Go'],
  'Common workflow': [
    '通用工作流',
    'Alur kerja yang sama',
    'Flujo de trabajo común',
    'Quy trình chung'
  ],
  Native: ['原生', 'Native', 'Nativo', 'Native'],
  Runtimes: ['运行时', 'Runtime', 'Runtimes', 'Runtime'],
  Services: ['服务', 'Layanan', 'Servicios', 'Dịch vụ'],
  'Local sites': ['本地站点', 'Situs lokal', 'Sitios locales', 'Trang web cục bộ'],
  Groups: ['启动组', 'Grup', 'Grupos', 'Các nhóm'],
  'Plugin Marketplace': ['插件市场', 'Pasar Plugin', 'Catálogo de complementos', 'Plugin Market'],
  'Add more than a traditional web stack.': [
    '走出传统 Web 技术栈。',
    'Lebih dari stack web tradisional.',
    'Ve más allá de un stack web tradicional.',
    'Mở rộng hơn stack web truyền thống.'
  ],
  'Start with PHP, a web server and a database. Later, add search, messaging, local AI or other optional modules as your projects need them.':
    [
      '从 PHP、Web 服务器和数据库开始。以后可以按项目需要添加搜索、消息、本地 AI 或其他可选模块。',
      'Mulai dengan PHP, server web, dan database. Tambahkan pencarian, perpesanan, AI lokal, atau modul opsional saat dibutuhkan.',
      'Empieza con PHP, un servidor web y una base de datos. Añade búsqueda, mensajería, IA local u otros módulos cuando los necesites.',
      'Bắt đầu với PHP, máy chủ web và cơ sở dữ liệu. Thêm tìm kiếm, nhắn tin, AI cục bộ hoặc module tùy chọn khi cần.'
    ],
  'Your workspace, extended': [
    '扩展你的工作区',
    'Perluas ruang kerja Anda',
    'Amplía tu espacio de trabajo',
    'Mở rộng không gian làm việc'
  ],
  'Try one Laragon project in FlyEnv.': [
    '用 FlyEnv 试跑一个 Laragon 项目。',
    'Coba satu proyek Laragon di FlyEnv.',
    'Prueba un proyecto de Laragon en FlyEnv.',
    'Thử một dự án Laragon trong FlyEnv.'
  ],
  'No need to migrate everything at once. Keep your existing code and original environment while you test a separate local setup.':
    [
      '无需一次迁移全部项目。保留现有代码和原环境，同时测试独立的本地配置。',
      'Tidak perlu memigrasikan semuanya sekaligus. Pertahankan kode dan lingkungan asli sambil menguji pengaturan lokal terpisah.',
      'Conserva el código y el entorno original mientras pruebas una configuración local separada.',
      'Giữ mã nguồn và môi trường cũ trong khi thử cấu hình cục bộ riêng.'
    ],
  'Back up your existing project': [
    '备份现有项目',
    'Cadangkan proyek yang ada',
    'Haz una copia del proyecto actual',
    'Sao lưu dự án hiện tại'
  ],
  'Keep a copy of your source, environment settings and database export. Stop or use different ports for conflicting services.':
    [
      '备份源码、环境配置和数据库导出。停止有冲突的服务，或为它们另设端口。',
      'Salin kode sumber, pengaturan lingkungan, dan ekspor database. Hentikan layanan yang bentrok atau gunakan port lain.',
      'Guarda el código, la configuración y una exportación de la base de datos. Detén los servicios en conflicto o cambia sus puertos.',
      'Sao lưu mã nguồn, cấu hình môi trường và bản xuất cơ sở dữ liệu. Dừng dịch vụ xung đột hoặc dùng cổng khác.'
    ],
  'Install the required versions': [
    '安装所需版本',
    'Instal versi yang diperlukan',
    'Instala las versiones necesarias',
    'Cài các phiên bản cần thiết'
  ],
  'Choose the PHP version, web server, database and any additional runtime your project requires.':
    [
      '选择所需的 PHP 版本、Web 服务器、数据库和其他运行时。',
      'Pilih versi PHP, server web, database, dan runtime lain yang dibutuhkan proyek.',
      'Elige la versión de PHP, el servidor web, la base de datos y los demás runtimes que necesites.',
      'Chọn phiên bản PHP, máy chủ web, cơ sở dữ liệu và runtime khác theo yêu cầu của dự án.'
    ],
  'Configure the local site': [
    '配置本地站点',
    'Siapkan situs lokal',
    'Configura el sitio local',
    'Cấu hình trang web cục bộ'
  ],
  'Point the site to your project directory, configure the document root and HTTPS, and import a test database.':
    [
      '将站点指向项目目录，配置文档根目录与 HTTPS，并导入测试数据库。',
      'Arahkan situs ke direktori proyek, atur document root dan HTTPS, lalu impor database uji.',
      'Apunta el sitio al directorio del proyecto, configura la raíz web y HTTPS, e importa una base de datos de prueba.',
      'Trỏ trang web tới thư mục dự án, cấu hình thư mục gốc và HTTPS, rồi nhập cơ sở dữ liệu thử nghiệm.'
    ],
  'Group the dependencies': [
    '将依赖加入分组',
    'Kelompokkan dependensi',
    'Agrupa las dependencias',
    'Gom nhóm các phần phụ thuộc'
  ],
  'Add the managed services to a Startup Group, then run and verify the application.': [
    '将受管理的服务加入启动组，然后运行并验证应用。',
    'Tambahkan layanan terkelola ke Startup Group, lalu jalankan dan verifikasi aplikasi.',
    'Añade los servicios gestionados a un grupo de inicio. Ejecuta y verifica la aplicación.',
    'Thêm các dịch vụ được quản lý vào nhóm khởi động, sau đó chạy và kiểm tra ứng dụng.'
  ],
  'Is FlyEnv a Laragon alternative for Windows?': [
    'FlyEnv 是 Windows 上的 Laragon 替代方案吗？',
    'Apakah FlyEnv alternatif Laragon untuk Windows?',
    '¿Es FlyEnv una alternativa a Laragon en Windows?',
    'FlyEnv có thay thế Laragon trên Windows được không?'
  ],
  'Yes. FlyEnv supports native development on Windows and also provides desktop apps for macOS and Linux. Individual service availability varies by platform.':
    [
      '是的。FlyEnv 支持 Windows 原生开发，也提供 macOS 和 Linux 版本。各服务的可用性因平台而异。',
      'Ya. FlyEnv mendukung pengembangan native di Windows, macOS, dan Linux. Ketersediaan layanan berbeda menurut platform.',
      'Sí. FlyEnv permite el desarrollo nativo en Windows, macOS y Linux. La disponibilidad de los servicios varía según la plataforma.',
      'Có. FlyEnv hỗ trợ phát triển native trên Windows, macOS và Linux. Dịch vụ có sẵn tùy nền tảng.'
    ],
  'Can I keep my existing Laravel or PHP projects?': [
    '能保留现有 Laravel 或 PHP 项目吗？',
    'Bisakah saya mempertahankan proyek Laravel atau PHP yang ada?',
    '¿Puedo conservar mis proyectos de Laravel o PHP?',
    'Tôi có thể giữ dự án Laravel hoặc PHP hiện tại không?'
  ],
  'Yes. Use your existing source code with a separately configured FlyEnv site and database. Review .env files, paths, ports and runtime requirements before switching.':
    [
      '能。保留现有源码，另行配置 FlyEnv 站点和数据库。切换前检查 .env、路径、端口和运行时要求。',
      'Ya. Gunakan kode yang ada dengan situs dan database FlyEnv terpisah. Periksa .env, jalur, port, dan kebutuhan runtime sebelum beralih.',
      'Sí. Usa el código existente con un sitio y una base de datos configurados por separado. Revisa .env, rutas, puertos y requisitos antes de cambiar.',
      'Có. Dùng mã hiện tại với trang web và cơ sở dữ liệu FlyEnv riêng. Kiểm tra .env, đường dẫn, cổng và yêu cầu runtime trước khi chuyển.'
    ],
  'Can FlyEnv manage different PHP versions?': [
    'FlyEnv 能管理不同的 PHP 版本吗？',
    'Bisakah FlyEnv mengelola beberapa versi PHP?',
    '¿Puede FlyEnv gestionar distintas versiones de PHP?',
    'FlyEnv có quản lý được nhiều phiên bản PHP không?'
  ],
  'FlyEnv supports multiple PHP versions and project-level runtime settings. See the per-project runtimes and PHP documentation for the platform-specific setup.':
    [
      'FlyEnv 支持多个 PHP 版本和项目级运行时设置。请查阅项目运行时和 PHP 文档，了解各平台的配置。',
      'FlyEnv mendukung beberapa versi PHP dan pengaturan per proyek. Lihat dokumentasi runtime per proyek dan PHP untuk konfigurasi platform Anda.',
      'FlyEnv admite varias versiones de PHP y configuración por proyecto. Consulta la documentación de runtimes y PHP para tu plataforma.',
      'FlyEnv hỗ trợ nhiều phiên bản PHP và cấu hình theo dự án. Xem tài liệu runtime theo dự án và PHP để biết cách thiết lập cho nền tảng của bạn.'
    ],
  'Does FlyEnv require Docker?': [
    'FlyEnv 需要 Docker 吗？',
    'Apakah FlyEnv memerlukan Docker?',
    '¿Necesita Docker FlyEnv?',
    'FlyEnv có cần Docker không?'
  ],
  'No. FlyEnv manages native local services. Docker can remain part of your workflow when you need containers.':
    [
      '不需要。FlyEnv 管理原生本地服务，需要容器时仍可使用 Docker。',
      'Tidak. FlyEnv mengelola layanan lokal native. Gunakan Docker saat membutuhkan container.',
      'No. FlyEnv gestiona servicios locales nativos. Puedes seguir usando Docker cuando necesites contenedores.',
      'Không. FlyEnv quản lý dịch vụ cục bộ native. Bạn vẫn có thể dùng Docker khi cần container.'
    ],
  'Is FlyEnv free?': [
    'FlyEnv 免费吗？',
    'Apakah FlyEnv gratis?',
    '¿Es gratuito FlyEnv?',
    'FlyEnv có miễn phí không?'
  ],
  'FlyEnv is open source and offers a free edition with optional Pro licensing. Some features and installing or updating plugins require a license. See the license page for details.':
    [
      'FlyEnv 开源，提供免费版和可选的 Pro 授权。部分功能以及安装或更新插件需要授权。详情见授权页面。',
      'FlyEnv bersumber terbuka dan menawarkan edisi gratis serta lisensi Pro opsional. Fitur tertentu, instalasi, dan pembaruan plugin memerlukan lisensi. Lihat halaman lisensi.',
      'FlyEnv es de código abierto, con una edición gratuita y una licencia Pro opcional. Algunas funciones y la instalación o actualización de complementos requieren licencia. Consulta la página de licencias.',
      'FlyEnv có mã nguồn mở, bản miễn phí và giấy phép Pro tùy chọn. Một số tính năng và việc cài hoặc cập nhật plugin cần giấy phép. Xem trang giấy phép.'
    ],
  'license page': ['授权页面', 'halaman lisensi', 'página de licencias', 'trang giấy phép'],
  'Keep your projects. Expand your workspace.': [
    '保留你的项目，扩展你的工作区。',
    'Pertahankan proyek. Perluas ruang kerja.',
    'Conserva tus proyectos. Amplía tu espacio de trabajo.',
    'Giữ dự án của bạn. Mở rộng không gian làm việc.'
  ],
  'Try FlyEnv on the platform you use today, with the stack you already know.': [
    '在现在的平台上，用熟悉的技术栈试用 FlyEnv。',
    'Coba FlyEnv di platform Anda dengan stack yang sudah dikenal.',
    'Prueba FlyEnv en tu plataforma con el stack que ya conoces.',
    'Thử FlyEnv trên nền tảng hiện tại với stack bạn đã quen.'
  ],
  'Laravel Herd alternative': [
    'Laravel Herd 替代方案',
    'Alternatif Laravel Herd',
    'Alternativa a Laravel Herd',
    'Giải pháp thay thế Laravel Herd'
  ],
  'FlyEnv vs Laravel Herd': [
    'FlyEnv 与 Laravel Herd 对比',
    'FlyEnv vs Laravel Herd',
    'FlyEnv frente a Laravel Herd',
    'FlyEnv và Laravel Herd'
  ],
  'Laravel is only part of your stack.': [
    'Laravel 只是技术栈的一部分。',
    'Laravel hanyalah bagian dari stack Anda.',
    'Laravel es solo una parte de tu stack.',
    'Laravel chỉ là một phần của stack của bạn.'
  ],
  'Keep the Laravel workflow you love. Manage PHP, frontend runtimes, backend services, databases and other projects from one native workspace — on macOS, Windows and Linux.':
    [
      '保留熟悉的 Laravel 工作流，在 macOS、Windows 和 Linux 上用同一个原生工作区管理 PHP、前端运行时、后端服务、数据库及其他项目。',
      'Pertahankan alur kerja Laravel Anda. Kelola PHP, runtime frontend, layanan backend, database, dan proyek lain di satu ruang kerja native di macOS, Windows, atau Linux.',
      'Mantén tu flujo de Laravel. Gestiona PHP, runtimes de frontend, servicios de backend, bases de datos y otros proyectos en un espacio nativo para macOS, Windows y Linux.',
      'Giữ quy trình Laravel bạn yêu thích. Quản lý PHP, runtime frontend, dịch vụ backend, cơ sở dữ liệu và dự án khác trong một không gian native trên macOS, Windows và Linux.'
    ],
  'One workspace, more than Laravel': [
    '一个工作区，不止 Laravel',
    'Satu ruang kerja, lebih dari Laravel',
    'Un espacio de trabajo más allá de Laravel',
    'Một không gian làm việc, hơn cả Laravel'
  ],
  PROJECTS: ['项目', 'PROYEK', 'PROYECTOS', 'DỰ ÁN'],
  'Laravel application': [
    'Laravel 应用',
    'Aplikasi Laravel',
    'Aplicación Laravel',
    'Ứng dụng Laravel'
  ],
  Frontend: ['前端', 'Frontend', 'Frontend', 'Frontend'],
  'Python API': ['Python API', 'API Python', 'API en Python', 'API Python'],
  SERVICE: ['服务', 'LAYANAN', 'SERVICIO', 'DỊCH VỤ'],
  'Try a project': ['试运行一个项目', 'Coba satu proyek', 'Prueba un proyecto', 'Thử một dự án'],
  'Keep Laravel. Grow beyond it.': [
    '保留 Laravel，向外扩展。',
    'Pertahankan Laravel. Perluas stack Anda.',
    'Conserva Laravel y amplía tu stack.',
    'Giữ Laravel. Mở rộng stack của bạn.'
  ],
  'Herd is built around a native Laravel and PHP workflow. FlyEnv brings a broader project and service management model to the same local development routine.':
    [
      'Herd 围绕原生 Laravel 和 PHP 工作流构建。FlyEnv 为同样的本地开发流程提供更广泛的项目和服务管理。',
      'Herd berfokus pada alur Laravel dan PHP native. FlyEnv membawa pengelolaan proyek dan layanan yang lebih luas ke pengembangan lokal Anda.',
      'Herd se centra en un flujo nativo para Laravel y PHP. FlyEnv amplía la gestión de proyectos y servicios dentro de tu rutina local.',
      'Herd tập trung vào quy trình Laravel và PHP native. FlyEnv mở rộng khả năng quản lý dự án và dịch vụ trong cùng quy trình phát triển cục bộ.'
    ],
  'Core differences': [
    '核心差异',
    'Perbedaan utama',
    'Diferencias principales',
    'Khác biệt cốt lõi'
  ],
  'macOS, Windows': ['macOS、Windows', 'macOS, Windows', 'macOS y Windows', 'macOS, Windows'],
  'macOS, Windows, Linux': [
    'macOS、Windows、Linux',
    'macOS, Windows, Linux',
    'macOS, Windows y Linux',
    'macOS, Windows, Linux'
  ],
  'Development focus': [
    '开发重点',
    'Fokus pengembangan',
    'Enfoque de desarrollo',
    'Trọng tâm phát triển'
  ],
  'Laravel and PHP, with Node.js tooling': [
    'Laravel、PHP 和 Node.js 工具',
    'Laravel dan PHP, dengan alat Node.js',
    'Laravel y PHP, con herramientas de Node.js',
    'Laravel và PHP, kèm công cụ Node.js'
  ],
  'Multi-language, framework-agnostic workspace': [
    '多语言、框架无关的工作区',
    'Ruang kerja multibahasa tanpa ikatan kerangka kerja',
    'Espacio de trabajo para varios lenguajes y frameworks',
    'Không gian đa ngôn ngữ, không phụ thuộc framework'
  ],
  'Runtime settings': [
    '运行时设置',
    'Pengaturan runtime',
    'Configuración de runtimes',
    'Cài đặt runtime'
  ],
  'Per-site PHP and Node.js versions': [
    '按站点选择 PHP 和 Node.js 版本',
    'Versi PHP dan Node.js per situs',
    'Versiones de PHP y Node.js por sitio',
    'Phiên bản PHP và Node.js theo trang web'
  ],
  'Project-level runtimes across supported languages': [
    '为项目配置受支持语言的运行时',
    'Runtime per proyek untuk bahasa yang didukung',
    'Runtimes por proyecto para los lenguajes compatibles',
    'Runtime theo dự án cho các ngôn ngữ được hỗ trợ'
  ],
  'Managing services': [
    '管理服务',
    'Pengelolaan layanan',
    'Gestión de servicios',
    'Quản lý dịch vụ'
  ],
  'Managed services available in Herd Pro': [
    'Herd Pro 提供受管理服务',
    'Layanan terkelola tersedia di Herd Pro',
    'Servicios gestionados disponibles en Herd Pro',
    'Herd Pro có dịch vụ được quản lý'
  ],
  'Install and manage native services as needed': [
    '按需安装和管理原生服务',
    'Instal dan kelola layanan native sesuai kebutuhan',
    'Instala y gestiona servicios nativos según necesites',
    'Cài và quản lý dịch vụ native theo nhu cầu'
  ],
  'Site and service management': [
    '站点和服务管理',
    'Pengelolaan situs dan layanan',
    'Gestión de sitios y servicios',
    'Quản lý trang web và dịch vụ'
  ],
  'Workspace expansion': [
    '工作区扩展',
    'Perluasan ruang kerja',
    'Ampliación del espacio de trabajo',
    'Mở rộng không gian làm việc'
  ],
  'Laravel-oriented tooling and integrations': [
    '面向 Laravel 的工具和集成',
    'Alat dan integrasi untuk Laravel',
    'Herramientas e integraciones de Laravel',
    'Công cụ và tích hợp hướng đến Laravel'
  ],
  'Plugin Marketplace + AI Memory + MCP': [
    '插件市场、AI Memory 和 MCP',
    'Pasar Plugin, AI Memory, dan MCP',
    'Catálogo de complementos, AI Memory y MCP',
    'Plugin Market, AI Memory và MCP'
  ],
  'Additional context': [
    '补充对比',
    'Informasi tambahan',
    'Contexto adicional',
    'Thông tin bổ sung'
  ],
  'Local sites & HTTPS': [
    '本地站点和 HTTPS',
    'Situs lokal dan HTTPS',
    'Sitios locales y HTTPS',
    'Trang web cục bộ và HTTPS'
  ],
  Available: ['可用', 'Tersedia', 'Disponible', 'Có sẵn'],
  'Databases and caches': [
    '数据库和缓存',
    'Database dan cache',
    'Bases de datos y cachés',
    'Cơ sở dữ liệu và bộ nhớ đệm'
  ],
  'Managed services in Pro': [
    'Pro 版的受管理服务',
    'Layanan terkelola di Pro',
    'Servicios gestionados en Pro',
    'Dịch vụ được quản lý trong bản Pro'
  ],
  'Native database and cache modules': [
    '原生数据库与缓存模块',
    'Modul database dan cache native',
    'Módulos nativos de bases de datos y caché',
    'Module cơ sở dữ liệu và bộ nhớ đệm native'
  ],
  'One workspace for the whole application.': [
    '一个工作区，管理整个应用。',
    'Satu ruang kerja untuk seluruh aplikasi.',
    'Un espacio de trabajo para toda la aplicación.',
    'Một không gian làm việc cho cả ứng dụng.'
  ],
  '01 / Beyond PHP': [
    '01 / 不止 PHP',
    '01 / Lebih dari PHP',
    '01 / Más allá de PHP',
    '01 / Hơn cả PHP'
  ],
  'Your Laravel app is not always the whole system.': [
    'Laravel 应用不一定是你的整个系统。',
    'Aplikasi Laravel belum tentu mencakup seluruh sistem.',
    'Tu aplicación Laravel puede ser solo una parte del sistema.',
    'Ứng dụng Laravel có thể chỉ là một phần của hệ thống.'
  ],
  'Run the PHP backend, the frontend toolchain and a separate Python or Java service in the same management workspace. Keep each project’s runtime settings explicit.':
    [
      '在同一个工作区运行 PHP 后端、前端工具链以及独立的 Python 或 Java 服务，并明确每个项目的运行时设置。',
      'Jalankan backend PHP, alat frontend, dan layanan Python atau Java terpisah di ruang kerja yang sama. Atur runtime tiap proyek dengan jelas.',
      'Usa el backend PHP, el frontend y servicios de Python o Java en el mismo espacio. Mantén explícita la configuración de runtimes de cada proyecto.',
      'Chạy backend PHP, bộ công cụ frontend và dịch vụ Python hoặc Java riêng trong cùng không gian. Đặt runtime rõ ràng cho từng dự án.'
    ],
  'Explore runtimes →': [
    '查看运行时 →',
    'Jelajahi runtime →',
    'Explorar runtimes →',
    'Khám phá runtime →'
  ],
  'Application architecture': [
    '应用架构',
    'Arsitektur aplikasi',
    'Arquitectura de la aplicación',
    'Kiến trúc ứng dụng'
  ],
  'Laravel backend': ['Laravel 后端', 'Backend Laravel', 'Backend Laravel', 'Backend Laravel'],
  'Analytics API': ['分析 API', 'API analitik', 'API de analítica', 'API phân tích'],
  '02 / Project startup': [
    '02 / 项目启动',
    '02 / Startup proyek',
    '02 / Arranque del proyecto',
    '02 / Khởi động dự án'
  ],
  'Bring the backend dependencies up together.': [
    '一起启动后端依赖。',
    'Jalankan dependensi backend sekaligus.',
    'Inicia juntas las dependencias del backend.',
    'Khởi động cùng lúc các phần phụ thuộc của backend.'
  ],
  'Use Startup Groups to start installed services such as the web server, PHP and Redis together. Run project-specific commands from the project’s own environment.':
    [
      '使用启动组一并启动已安装的 Web 服务器、PHP 和 Redis 等服务，在项目自己的环境中运行专用命令。',
      'Gunakan Startup Groups untuk menjalankan server web, PHP, dan Redis yang terpasang sekaligus. Jalankan perintah proyek di lingkungannya sendiri.',
      'Usa los grupos de inicio para arrancar juntos el servidor web, PHP y Redis. Ejecuta los comandos de cada proyecto en su propio entorno.',
      'Dùng nhóm khởi động để chạy cùng lúc máy chủ web, PHP và Redis đã cài. Chạy lệnh trong môi trường riêng của dự án.'
    ],
  'Explore Startup Groups →': [
    '了解启动组 →',
    'Jelajahi Startup Groups →',
    'Explorar grupos de inicio →',
    'Khám phá nhóm khởi động →'
  ],
  'ONE CLICK': ['一键启动', 'SEKALI KLIK', 'UN CLIC', 'MỘT LẦN BẤM'],
  'Laravel development': [
    'Laravel 开发',
    'Pengembangan Laravel',
    'Desarrollo con Laravel',
    'Phát triển Laravel'
  ],
  '03 / Local development': [
    '03 / 本地开发',
    '03 / Pengembangan lokal',
    '03 / Desarrollo local',
    '03 / Phát triển cục bộ'
  ],
  'Give every service a place in your workflow.': [
    '让每个服务融入工作流程。',
    'Tempatkan setiap layanan dalam alur kerja Anda.',
    'Integra cada servicio en tu flujo de trabajo.',
    'Đưa từng dịch vụ vào quy trình.'
  ],
  'Use local domains, HTTPS and reverse proxy configurations to bring web and API projects together without changing how you write Laravel code.':
    [
      '用本地域名、HTTPS 和反向代理把 Web 与 API 项目连接起来，保留原有 Laravel 编写方式。',
      'Gunakan domain lokal, HTTPS, dan reverse proxy untuk menyatukan proyek web dan API. Alur penulisan kode Laravel tetap sama.',
      'Combina proyectos web y API con dominios locales, HTTPS y proxies inversos sin cambiar cómo escribes Laravel.',
      'Dùng tên miền cục bộ, HTTPS và reverse proxy để kết nối dự án web và API, đồng thời giữ cách viết mã Laravel quen thuộc.'
    ],
  'Explore local projects →': [
    '查看本地项目 →',
    'Jelajahi proyek lokal →',
    'Explorar proyectos locales →',
    'Khám phá dự án cục bộ →'
  ],
  'Local application endpoints': [
    '本地应用入口',
    'Endpoint aplikasi lokal',
    'Endpoints de aplicaciones locales',
    'Điểm truy cập ứng dụng cục bộ'
  ],
  'Reverse proxy': ['反向代理', 'Reverse proxy', 'Proxy inverso', 'Reverse proxy'],
  'Plugin Marketplace · Beyond Laravel': [
    '插件市场 · 不止 Laravel',
    'Pasar Plugin · lebih dari Laravel',
    'Catálogo de complementos · más allá de Laravel',
    'Plugin Market · hơn cả Laravel'
  ],
  'Extend your workspace as the application evolves.': [
    '按应用需求扩展工作区。',
    'Perluas ruang kerja seiring aplikasi berkembang.',
    'Amplía el espacio de trabajo según evolucione tu aplicación.',
    'Mở rộng không gian làm việc theo nhu cầu ứng dụng.'
  ],
  'Add search, event streaming or local AI capabilities when the project calls for them. Keep the modules you need, rather than changing development tools for each new service.':
    [
      '按项目需要添加搜索、事件流或本地 AI。只保留所需模块，无需为每个新服务更换开发工具。',
      'Tambahkan pencarian, streaming peristiwa, atau AI lokal saat diperlukan. Gunakan modul yang dibutuhkan tanpa mengganti alat untuk tiap layanan.',
      'Añade búsqueda, flujos de eventos o IA local cuando el proyecto lo pida. Conserva los módulos necesarios sin cambiar de herramienta por cada servicio.',
      'Thêm tìm kiếm, luồng sự kiện hoặc AI cục bộ khi cần. Giữ các module cần thiết mà không phải đổi công cụ cho từng dịch vụ.'
    ],
  'Extend your workspace': [
    '扩展你的工作区',
    'Perluas ruang kerja Anda',
    'Amplía tu espacio de trabajo',
    'Mở rộng không gian làm việc'
  ],
  'Try your existing Laravel application in FlyEnv.': [
    '用 FlyEnv 试跑现有 Laravel 应用。',
    'Coba aplikasi Laravel yang ada di FlyEnv.',
    'Prueba tu aplicación de Laravel en FlyEnv.',
    'Thử ứng dụng Laravel hiện có trong FlyEnv.'
  ],
  'Keep your original environment while you test a separate setup. Start with one project, not a full migration.':
    [
      '测试独立配置时保留原环境。先试一个项目，再决定是否迁移。',
      'Pertahankan lingkungan lama saat menguji konfigurasi terpisah. Mulai dengan satu proyek sebelum memutuskan migrasi.',
      'Conserva tu entorno mientras pruebas una configuración separada. Empieza con un proyecto antes de migrar todo.',
      'Giữ môi trường cũ khi thử cấu hình riêng. Bắt đầu với một dự án trước khi chuyển toàn bộ.'
    ],
  'Keep your original environment': [
    '保留原环境',
    'Pertahankan lingkungan awal',
    'Conserva tu entorno original',
    'Giữ môi trường ban đầu'
  ],
  'Back up source, .env and database data. Record PHP, Node and service versions.': [
    '备份源码、.env 和数据库，记录 PHP、Node 和服务版本。',
    'Cadangkan kode, .env, dan data database. Catat versi PHP, Node, dan layanan.',
    'Respalda el código, .env y la base de datos. Anota las versiones de PHP, Node y servicios.',
    'Sao lưu mã nguồn, .env và dữ liệu. Ghi lại phiên bản PHP, Node và dịch vụ.'
  ],
  'Install compatible runtimes and services': [
    '安装兼容的运行时和服务',
    'Instal runtime dan layanan yang kompatibel',
    'Instala runtimes y servicios compatibles',
    'Cài runtime và dịch vụ tương thích'
  ],
  'Select PHP, a web server, your database, and Redis if the project uses it.': [
    '选择 PHP、Web 服务器和数据库。项目使用 Redis 时也一并安装。',
    'Pilih PHP, server web, dan database. Tambahkan Redis jika proyek menggunakannya.',
    'Elige PHP, un servidor web y una base de datos. Incluye Redis si el proyecto lo usa.',
    'Chọn PHP, máy chủ web, cơ sở dữ liệu và Redis nếu dự án dùng đến.'
  ],
  'Configure the site': ['配置站点', 'Siapkan situs', 'Configura el sitio', 'Cấu hình trang web'],
  'Point the document root at public/, restore a test database and adjust .env for local endpoints.':
    [
      '把文档根目录指向 public/，恢复测试数据库，并调整 .env 中的本地连接地址。',
      'Arahkan document root ke public/, pulihkan database uji, lalu sesuaikan endpoint lokal di .env.',
      'Apunta la raíz web a public/, restaura una base de datos de prueba y ajusta los endpoints locales en .env.',
      'Trỏ thư mục gốc đến public/, khôi phục cơ sở dữ liệu thử nghiệm rồi chỉnh địa chỉ cục bộ trong .env.'
    ],
  'Run and verify the project': [
    '运行并验证项目',
    'Jalankan dan verifikasi proyek',
    'Ejecuta y verifica el proyecto',
    'Chạy và kiểm tra dự án'
  ],
  'Run Composer and frontend commands, then test the application and create a Startup Group for managed services.':
    [
      '运行 Composer 和前端命令，测试应用，再为受管理的服务创建启动组。',
      'Jalankan Composer dan perintah frontend, uji aplikasi, lalu buat Startup Group untuk layanan yang dikelola.',
      'Ejecuta Composer y los comandos del frontend, prueba la aplicación y crea un grupo de inicio para los servicios gestionados.',
      'Chạy Composer và các lệnh frontend, kiểm tra ứng dụng rồi tạo nhóm khởi động cho dịch vụ được quản lý.'
    ],
  'Is FlyEnv a Laravel Herd alternative for Linux?': [
    'FlyEnv 是 Linux 上的 Laravel Herd 替代方案吗？',
    'Apakah FlyEnv alternatif Laravel Herd untuk Linux?',
    '¿Es FlyEnv una alternativa a Laravel Herd en Linux?',
    'FlyEnv có thay thế Laravel Herd trên Linux được không?'
  ],
  'FlyEnv runs on Linux as well as macOS and Windows. Choose the runtime and service versions available for your operating system.':
    [
      'FlyEnv 支持 Linux、macOS 和 Windows。请选择操作系统上可用的运行时和服务版本。',
      'FlyEnv berjalan di Linux, macOS, dan Windows. Pilih versi runtime dan layanan yang tersedia untuk sistem Anda.',
      'FlyEnv funciona en Linux, macOS y Windows. Elige las versiones de runtimes y servicios disponibles para tu sistema operativo.',
      'FlyEnv chạy trên Linux, macOS và Windows. Chọn phiên bản runtime và dịch vụ có sẵn cho hệ điều hành của bạn.'
    ],
  'Can I use my existing Laravel code?': [
    '可以继续用现有 Laravel 代码吗？',
    'Bisakah saya memakai kode Laravel yang ada?',
    '¿Puedo usar mi código de Laravel existente?',
    'Tôi có thể dùng mã Laravel hiện tại không?'
  ],
  'Yes. The project remains a Laravel application. Configure its local site, dependencies and database connection for the new environment.':
    [
      '可以。项目仍是 Laravel 应用，请为新环境配置本地站点、依赖和数据库连接。',
      'Ya. Proyek tetap menjadi aplikasi Laravel. Siapkan situs lokal, dependensi, dan koneksi database untuk lingkungan baru.',
      'Sí. El proyecto sigue siendo una aplicación Laravel. Configura el sitio local, las dependencias y la conexión a la base de datos.',
      'Có. Dự án vẫn là ứng dụng Laravel. Cấu hình trang web cục bộ, các phần phụ thuộc và kết nối cơ sở dữ liệu cho môi trường mới.'
    ],
  'Does FlyEnv support multiple PHP versions?': [
    'FlyEnv 支持多个 PHP 版本吗？',
    'Apakah FlyEnv mendukung beberapa versi PHP?',
    '¿Admite FlyEnv varias versiones de PHP?',
    'FlyEnv có hỗ trợ nhiều phiên bản PHP không?'
  ],
  'Yes. FlyEnv supports multiple versions and per-project runtime settings; availability depends on platform and package.':
    [
      '是的。FlyEnv 支持多个版本和项目级运行时设置，可用版本取决于平台与软件包。',
      'Ya. FlyEnv mendukung beberapa versi dan runtime per proyek. Ketersediaan bergantung pada platform dan paket.',
      'Sí. FlyEnv admite varias versiones y configuración por proyecto. La disponibilidad depende de la plataforma y el paquete.',
      'Có. FlyEnv hỗ trợ nhiều phiên bản và cấu hình runtime theo dự án. Tính khả dụng tùy nền tảng và gói phần mềm.'
    ],
  'Does FlyEnv support frontend and non-PHP projects?': [
    'FlyEnv 支持前端和非 PHP 项目吗？',
    'Apakah FlyEnv mendukung proyek frontend dan non-PHP?',
    '¿Admite FlyEnv proyectos frontend y sin PHP?',
    'FlyEnv có hỗ trợ frontend và dự án không dùng PHP không?'
  ],
  'Yes. It manages supported runtimes such as Node.js, Python, Java and Go, along with local services.':
    [
      '是的。FlyEnv 管理本地服务，以及 Node.js、Python、Java 和 Go 等受支持的运行时。',
      'Ya. FlyEnv mengelola layanan lokal dan runtime yang didukung seperti Node.js, Python, Java, dan Go.',
      'Sí. Gestiona servicios locales y runtimes como Node.js, Python, Java y Go.',
      'Có. FlyEnv quản lý dịch vụ cục bộ và các runtime như Node.js, Python, Java và Go.'
    ],
  'Do I need a Pro license?': [
    '需要 Pro 授权吗？',
    'Apakah saya memerlukan lisensi Pro?',
    '¿Necesito una licencia Pro?',
    'Tôi có cần giấy phép Pro không?'
  ],
  'Start with the free edition. Certain features and installing or updating plugins require an active license; see the license page.':
    [
      '可以从免费版开始。部分功能以及安装或更新插件需要有效授权，详情见授权页面。',
      'Mulai dengan edisi gratis. Fitur tertentu, instalasi, dan pembaruan plugin memerlukan lisensi aktif. Lihat halaman lisensi.',
      'Empieza con la edición gratuita. Algunas funciones y la instalación o actualización de complementos requieren licencia activa. Consulta la página de licencias.',
      'Bắt đầu với bản miễn phí. Một số tính năng và việc cài hoặc cập nhật plugin cần giấy phép còn hiệu lực. Xem trang giấy phép.'
    ],
  'Keep Laravel. Bring the rest of your stack along.': [
    '保留 Laravel，把其余技术栈一起带过来。',
    'Pertahankan Laravel dan bawa komponen stack lainnya.',
    'Mantén Laravel y trae contigo el resto de tu stack.',
    'Giữ Laravel và đưa phần còn lại của stack vào cùng.'
  ],
  'From scattered tools to one workspace.': [
    '把分散的工具集中到一个工作区。',
    'Satukan alat yang tersebar dalam satu ruang kerja.',
    'Reúne tus herramientas en un espacio de trabajo.',
    'Gom các công cụ rời rạc vào một không gian làm việc.'
  ],
  'XAMPP alternative': [
    'XAMPP 替代方案',
    'Alternatif XAMPP',
    'Alternativa a XAMPP',
    'Giải pháp thay thế XAMPP'
  ],
  'FlyEnv vs XAMPP': [
    'FlyEnv 与 XAMPP 对比',
    'FlyEnv vs XAMPP',
    'FlyEnv frente a XAMPP',
    'FlyEnv và XAMPP'
  ],
  'Beyond Apache, PHP and MariaDB.': [
    '不止 Apache、PHP 和 MariaDB。',
    'Lebih dari Apache, PHP, dan MariaDB.',
    'Más allá de Apache, PHP y MariaDB.',
    'Hơn cả Apache, PHP và MariaDB.'
  ],
  'Build the PHP environment each project actually needs. Choose your web server, runtime versions and native services independently, then manage them together in FlyEnv.':
    [
      '为每个项目搭建合适的 PHP 环境。分别选择 Web 服务器、运行时版本与原生服务，在 FlyEnv 中统一管理。',
      'Bangun lingkungan PHP yang sesuai untuk tiap proyek. Pilih server web, versi runtime, dan layanan native secara terpisah, lalu kelola di FlyEnv.',
      'Construye el entorno PHP que necesita cada proyecto. Elige por separado el servidor web, los runtimes y los servicios nativos, y gestiónalos en FlyEnv.',
      'Tạo môi trường PHP phù hợp cho từng dự án. Chọn riêng máy chủ web, phiên bản runtime và dịch vụ native rồi quản lý chúng trong FlyEnv.'
    ],
  'Build your own PHP stack': [
    '搭建你的 PHP 技术栈',
    'Bangun stack PHP Anda',
    'Crea tu stack PHP',
    'Tạo stack PHP của bạn'
  ],
  'Web server': ['Web 服务器', 'Server web', 'Servidor web', 'Máy chủ web'],
  CHOOSE: ['任选', 'PILIH', 'ELIGE', 'CHỌN'],
  Runtime: ['运行时', 'Runtime', 'Runtime', 'Runtime'],
  'PER PROJECT': ['按项目配置', 'PER PROYEK', 'POR PROYECTO', 'THEO DỰ ÁN'],
  'PHP extensions': ['PHP 扩展', 'Ekstensi PHP', 'Extensiones de PHP', 'Phần mở rộng PHP'],
  'Move from a bundled stack to a modular workspace.': [
    '从捆绑技术栈转向模块化工作区。',
    'Beralih dari stack paket ke ruang kerja modular.',
    'Pasa de un stack empaquetado a un espacio modular.',
    'Chuyển từ stack đóng gói sang không gian module.'
  ],
  'XAMPP makes a classic PHP stack easy to install. FlyEnv gives you more control over which components are installed, which versions your projects use and how your local environment evolves.':
    [
      'XAMPP 易于安装经典 PHP 技术栈。FlyEnv 让你控制安装哪些组件、项目使用什么版本，以及怎样扩展本地环境。',
      'XAMPP memudahkan pemasangan stack PHP klasik. FlyEnv memberi Anda kendali atas komponen, versi per proyek, dan perkembangan lingkungan lokal.',
      'XAMPP facilita instalar un stack PHP clásico. FlyEnv te da más control sobre los componentes, las versiones por proyecto y la evolución del entorno local.',
      'XAMPP giúp cài stack PHP cổ điển dễ dàng. FlyEnv cho bạn quyền chọn thành phần, phiên bản theo dự án và cách mở rộng môi trường cục bộ.'
    ],
  'Installation model': ['安装方式', 'Cara instalasi', 'Modelo de instalación', 'Cách cài đặt'],
  'Prepackaged web stack': [
    '预打包 Web 技术栈',
    'Stack web siap pakai',
    'Stack web preempaquetado',
    'Stack web đóng gói sẵn'
  ],
  'Choose individual native modules and versions': [
    '分别选择原生模块和版本',
    'Pilih modul dan versi native satu per satu',
    'Elige módulos y versiones nativas por separado',
    'Chọn từng module native và phiên bản'
  ],
  'Web servers': ['Web 服务器', 'Server web', 'Servidores web', 'Máy chủ web'],
  'Apache-centered distribution': [
    '以 Apache 为核心的发行包',
    'Distribusi berbasis Apache',
    'Distribución centrada en Apache',
    'Bản phân phối dựa trên Apache'
  ],
  'Apache, Nginx or Caddy': [
    'Apache、Nginx 或 Caddy',
    'Apache, Nginx, atau Caddy',
    'Apache, Nginx o Caddy',
    'Apache, Nginx hoặc Caddy'
  ],
  'PHP versions': ['PHP 版本', 'Versi PHP', 'Versiones de PHP', 'Phiên bản PHP'],
  'PHP version tied to selected distribution': [
    'PHP 版本由所选发行包决定',
    'Versi PHP mengikuti distribusi yang dipilih',
    'La versión de PHP depende de la distribución',
    'Phiên bản PHP đi kèm bản phân phối đã chọn'
  ],
  'Manage multiple installed PHP versions': [
    '管理多个已安装 PHP 版本',
    'Kelola beberapa versi PHP terpasang',
    'Gestiona varias versiones de PHP instaladas',
    'Quản lý nhiều phiên bản PHP đã cài'
  ],
  'Edit configuration and install compatible extensions': [
    '编辑配置并安装兼容扩展',
    'Edit konfigurasi dan instal ekstensi yang kompatibel',
    'Edita la configuración e instala extensiones compatibles',
    'Sửa cấu hình và cài phần mở rộng tương thích'
  ],
  'Extension management for supported PHP packages': [
    '为受支持 PHP 软件包管理扩展',
    'Pengelolaan ekstensi untuk paket PHP yang didukung',
    'Gestión de extensiones para paquetes PHP compatibles',
    'Quản lý phần mở rộng cho gói PHP được hỗ trợ'
  ],
  'Project environments': [
    '项目环境',
    'Lingkungan proyek',
    'Entornos de proyecto',
    'Môi trường dự án'
  ],
  'Shared stack with manual configuration options': [
    '技术栈共享，可手动配置',
    'Stack bersama dengan opsi konfigurasi manual',
    'Stack compartido con opciones de configuración manual',
    'Stack dùng chung, có cấu hình thủ công'
  ],
  'Project-level runtime settings and local site management': [
    '项目级运行时设置与本地站点管理',
    'Pengaturan runtime per proyek dan pengelolaan situs lokal',
    'Runtimes por proyecto y gestión de sitios locales',
    'Cấu hình runtime theo dự án và quản lý trang web cục bộ'
  ],
  'Additional services': [
    '额外服务',
    'Layanan tambahan',
    'Servicios adicionales',
    'Dịch vụ bổ sung'
  ],
  'Bundled tools vary by release': [
    '捆绑工具随发行版而异',
    'Alat bawaan berbeda menurut rilis',
    'Las herramientas incluidas varían por versión',
    'Công cụ đi kèm tùy bản phát hành'
  ],
  'Databases, caches, mail testing and optional plugins': [
    '数据库、缓存、邮件测试和可选插件',
    'Database, cache, pengujian email, dan plugin opsional',
    'Bases de datos, cachés, pruebas de correo y complementos opcionales',
    'Cơ sở dữ liệu, bộ nhớ đệm, thử email và plugin tùy chọn'
  ],
  'Local database': ['本地数据库', 'Database lokal', 'Base de datos local', 'Cơ sở dữ liệu cục bộ'],
  'MariaDB in current packages': [
    '当前发行包提供 MariaDB',
    'MariaDB pada paket saat ini',
    'MariaDB en los paquetes actuales',
    'MariaDB trong các gói hiện tại'
  ],
  'MySQL, MariaDB and other supported databases': [
    'MySQL、MariaDB 等受支持的数据库',
    'MySQL, MariaDB, dan database lain yang didukung',
    'MySQL, MariaDB y otras bases de datos compatibles',
    'MySQL, MariaDB và cơ sở dữ liệu khác được hỗ trợ'
  ],
  'FlyEnv features': ['FlyEnv 功能', 'Fitur FlyEnv', 'Funciones de FlyEnv', 'Tính năng FlyEnv'],
  'Build the PHP stack around your projects.': [
    '围绕项目搭建 PHP 技术栈。',
    'Bangun stack PHP mengikuti kebutuhan proyek.',
    'Diseña tu stack PHP alrededor de tus proyectos.',
    'Xây dựng stack PHP theo dự án của bạn.'
  ],
  '01 / Runtime choice': [
    '01 / 选择运行时',
    '01 / Pilihan runtime',
    '01 / Elección de runtime',
    '01 / Lựa chọn runtime'
  ],
  'Use the PHP version your project needs.': [
    '选项目需要的 PHP 版本。',
    'Gunakan versi PHP yang dibutuhkan proyek.',
    'Usa la versión de PHP que necesita tu proyecto.',
    'Dùng phiên bản PHP dự án cần.'
  ],
  'Keep existing projects on compatible PHP versions while starting new projects on newer releases. Configure the corresponding PHP service and extensions.':
    [
      '现有项目继续使用兼容 PHP，新项目可以采用更新版本。分别配置对应的 PHP 服务和扩展。',
      'Pertahankan versi PHP yang kompatibel untuk proyek lama, dan mulai proyek baru pada versi terkini. Siapkan layanan PHP serta ekstensinya.',
      'Mantén versiones compatibles en proyectos existentes y usa versiones nuevas en otros. Configura los servicios PHP y sus extensiones correspondientes.',
      'Giữ PHP tương thích cho dự án cũ và dùng bản mới cho dự án mới. Cấu hình dịch vụ PHP và phần mở rộng tương ứng.'
    ],
  'Explore PHP management →': [
    '了解 PHP 管理 →',
    'Jelajahi pengelolaan PHP →',
    'Explorar la gestión de PHP →',
    'Khám phá cách quản lý PHP →'
  ],
  'PHP environments': ['PHP 环境', 'Lingkungan PHP', 'Entornos PHP', 'Môi trường PHP'],
  'New application': ['新应用', 'Aplikasi baru', 'Aplicación nueva', 'Ứng dụng mới'],
  'Existing CMS': ['现有 CMS', 'CMS yang ada', 'CMS existente', 'CMS hiện có'],
  'COMPATIBLE PHP': ['兼容 PHP', 'PHP KOMPATIBEL', 'PHP COMPATIBLE', 'PHP TƯƠNG THÍCH'],
  '02 / Sites & HTTPS': [
    '02 / 站点与 HTTPS',
    '02 / Situs dan HTTPS',
    '02 / Sitios y HTTPS',
    '02 / Trang web và HTTPS'
  ],
  'Give each project its own local address.': [
    '为每个项目分配自己的本地地址。',
    'Gunakan alamat lokal tersendiri untuk tiap proyek.',
    'Da una dirección local propia a cada proyecto.',
    'Đặt địa chỉ cục bộ riêng cho từng dự án.'
  ],
  'Point a local site at its document root, select the supported server configuration and set up HTTPS. Avoid treating a single htdocs folder as the center of every project.':
    [
      '为本地站点设置文档根目录，选择受支持的服务器配置并启用 HTTPS。各项目无需局限于同一个 htdocs 目录。',
      'Atur document root situs, pilih konfigurasi server yang didukung, lalu aktifkan HTTPS. Proyek tidak harus berbagi satu folder htdocs.',
      'Apunta el sitio a su raíz web, elige un servidor compatible y configura HTTPS. Cada proyecto puede usar un directorio distinto de htdocs.',
      'Đặt thư mục gốc của trang, chọn cấu hình máy chủ phù hợp và bật HTTPS. Các dự án có thể dùng thư mục riêng thay cho một htdocs chung.'
    ],
  'Explore site setup →': [
    '查看站点配置 →',
    'Lihat penyiapan situs →',
    'Ver la configuración de sitios →',
    'Xem cách thiết lập trang web →'
  ],
  'Local site manager': [
    '本地站点管理器',
    'Pengelola situs lokal',
    'Gestor de sitios locales',
    'Trình quản lý trang web cục bộ'
  ],
  '03 / Native services': [
    '03 / 原生服务',
    '03 / Layanan native',
    '03 / Servicios nativos',
    '03 / Dịch vụ native'
  ],
  'Start only the dependencies you need.': [
    '只启动所需的依赖。',
    'Jalankan hanya dependensi yang diperlukan.',
    'Inicia las dependencias que necesitas.',
    'Chỉ khởi động các phần phụ thuộc cần thiết.'
  ],
  'Add a database, cache or mail-testing service when it becomes useful. Group the installed services for a repeatable startup routine.':
    [
      '按需添加数据库、缓存或邮件测试服务。将安装好的服务分组，复用同一套启动流程。',
      'Tambahkan database, cache, atau layanan pengujian email saat diperlukan. Kelompokkan layanan terpasang untuk startup yang konsisten.',
      'Añade bases de datos, cachés o pruebas de correo cuando las necesites. Agrupa los servicios instalados para repetir su arranque.',
      'Thêm cơ sở dữ liệu, bộ nhớ đệm hoặc dịch vụ thử email khi cần. Gom dịch vụ đã cài để khởi động theo quy trình có thể lặp lại.'
    ],
  'PHP development': ['PHP 开发', 'Pengembangan PHP', 'Desarrollo PHP', 'Phát triển PHP'],
  'Plugin Marketplace · A modular PHP environment': [
    '插件市场 · 模块化 PHP 环境',
    'Pasar Plugin · lingkungan PHP modular',
    'Catálogo de complementos · entorno PHP modular',
    'Plugin Market · môi trường PHP dạng module'
  ],
  'Start with PHP. Add the next tool when you need it.': [
    '从 PHP 开始，按需添加工具。',
    'Mulai dengan PHP. Tambahkan alat lain saat diperlukan.',
    'Empieza con PHP y añade herramientas cuando las necesites.',
    'Bắt đầu với PHP. Thêm công cụ khi cần.'
  ],
  'Use built-in modules for everyday services and extend with optional plugins for search, messaging or additional databases. Keep the workspace focused on your actual projects.':
    [
      '用内置模块处理日常服务，按需添加搜索、消息或其他数据库插件。让工作区专注于项目真正需要的能力。',
      'Gunakan modul bawaan untuk layanan sehari-hari dan plugin opsional untuk pencarian, perpesanan, atau database tambahan.',
      'Usa módulos integrados para los servicios habituales y complementos opcionales para búsqueda, mensajería u otras bases de datos. Conserva lo que necesitan tus proyectos.',
      'Dùng module tích hợp cho dịch vụ thường ngày, thêm plugin tìm kiếm, nhắn tin hoặc cơ sở dữ liệu khi dự án cần.'
    ],
  'Bring one XAMPP site into FlyEnv.': [
    '把一个 XAMPP 站点带入 FlyEnv。',
    'Bawa satu situs XAMPP ke FlyEnv.',
    'Trae un sitio de XAMPP a FlyEnv.',
    'Đưa một trang web XAMPP vào FlyEnv.'
  ],
  'Back up the site and database': [
    '备份站点和数据库',
    'Cadangkan situs dan database',
    'Respalda el sitio y la base de datos',
    'Sao lưu trang web và cơ sở dữ liệu'
  ],
  'Copy the project from htdocs or its custom directory; export MariaDB/MySQL data.': [
    '从 htdocs 或自定义目录复制项目，导出 MariaDB/MySQL 数据。',
    'Salin proyek dari htdocs atau direktori khusus, lalu ekspor data MariaDB/MySQL.',
    'Copia el proyecto de htdocs o su directorio personalizado. Exporta los datos de MariaDB/MySQL.',
    'Sao chép dự án từ htdocs hoặc thư mục tùy chỉnh rồi xuất dữ liệu MariaDB/MySQL.'
  ],
  'Match the required PHP stack': [
    '配置所需 PHP 技术栈',
    'Sesuaikan stack PHP yang dibutuhkan',
    'Recrea el stack PHP requerido',
    'Thiết lập stack PHP phù hợp'
  ],
  'Install compatible PHP, extensions, a web server and database. Avoid port conflicts with XAMPP.':
    [
      '安装兼容的 PHP、扩展、Web 服务器和数据库，避免与 XAMPP 的端口冲突。',
      'Instal PHP, ekstensi, server web, dan database yang kompatibel. Hindari benturan port dengan XAMPP.',
      'Instala PHP, extensiones, servidor web y base de datos compatibles. Evita conflictos de puertos con XAMPP.',
      'Cài PHP, phần mở rộng, máy chủ web và cơ sở dữ liệu tương thích. Tránh xung đột cổng với XAMPP.'
    ],
  'Create a local site': [
    '创建本地站点',
    'Buat situs lokal',
    'Crea un sitio local',
    'Tạo trang web cục bộ'
  ],
  'Set the document root and database connection, import the test data and enable HTTPS if needed.':
    [
      '配置文档根目录和数据库连接，导入测试数据，按需启用 HTTPS。',
      'Atur document root dan koneksi database, impor data uji, lalu aktifkan HTTPS jika diperlukan.',
      'Configura la raíz web y la conexión a la base de datos, importa datos de prueba y activa HTTPS si hace falta.',
      'Đặt thư mục gốc và kết nối cơ sở dữ liệu, nhập dữ liệu thử và bật HTTPS nếu cần.'
    ],
  'Check the application': [
    '检查应用',
    'Periksa aplikasi',
    'Comprueba la aplicación',
    'Kiểm tra ứng dụng'
  ],
  'Verify routes, uploads and database operations before changing your original setup.': [
    '修改原配置之前，验证路由、上传和数据库操作。',
    'Periksa rute, unggahan, dan operasi database sebelum mengubah konfigurasi awal.',
    'Comprueba las rutas, las subidas y las operaciones de base de datos antes de cambiar el entorno original.',
    'Kiểm tra tuyến, tải lên và thao tác cơ sở dữ liệu trước khi thay đổi cấu hình cũ.'
  ],
  'Is FlyEnv an XAMPP alternative?': [
    'FlyEnv 是 XAMPP 的替代方案吗？',
    'Apakah FlyEnv alternatif XAMPP?',
    '¿Es FlyEnv una alternativa a XAMPP?',
    'FlyEnv có thay thế XAMPP được không?'
  ],
  'Yes. FlyEnv offers a native PHP development environment with configurable web servers, PHP versions and databases.':
    [
      '是的。FlyEnv 提供原生 PHP 开发环境，可配置 Web 服务器、PHP 版本与数据库。',
      'Ya. FlyEnv menyediakan lingkungan pengembangan PHP native dengan server web, versi PHP, dan database yang dapat dikonfigurasi.',
      'Sí. FlyEnv ofrece desarrollo PHP nativo con servidores web, versiones de PHP y bases de datos configurables.',
      'Có. FlyEnv cung cấp môi trường PHP native với máy chủ web, phiên bản PHP và cơ sở dữ liệu có thể cấu hình.'
    ],
  'Can I keep Apache and MySQL?': [
    '能继续使用 Apache 和 MySQL 吗？',
    'Bisakah saya tetap memakai Apache dan MySQL?',
    '¿Puedo seguir usando Apache y MySQL?',
    'Tôi có thể tiếp tục dùng Apache và MySQL không?'
  ],
  'Yes. Use the supported Apache and MySQL or MariaDB modules that fit your project.': [
    '可以。选择项目需要的受支持 Apache 和 MySQL 或 MariaDB 模块。',
    'Ya. Gunakan modul Apache serta MySQL atau MariaDB yang didukung dan sesuai untuk proyek Anda.',
    'Sí. Usa los módulos compatibles de Apache y MySQL o MariaDB que necesite tu proyecto.',
    'Có. Chọn module Apache và MySQL hoặc MariaDB được hỗ trợ và phù hợp với dự án.'
  ],
  'Can I use phpMyAdmin?': [
    '能用 phpMyAdmin 吗？',
    'Bisakah saya menggunakan phpMyAdmin?',
    '¿Puedo usar phpMyAdmin?',
    'Tôi có thể dùng phpMyAdmin không?'
  ],
  'Yes. The MySQL module can set up phpmyadmin.test, or you can run a compatible phpMyAdmin installation as a local PHP site.':
    [
      '可以。MySQL 模块可以创建 phpmyadmin.test，你也可以把兼容的 phpMyAdmin 部署为本地站点。',
      'Ya. Modul MySQL dapat menyiapkan phpmyadmin.test, atau jalankan instalasi phpMyAdmin yang kompatibel sebagai situs PHP lokal.',
      'Sí. El módulo MySQL puede configurar phpmyadmin.test, o puedes ejecutar una instalación compatible de phpMyAdmin como sitio PHP local.',
      'Có. Module MySQL có thể thiết lập phpmyadmin.test. Bạn cũng có thể chạy bản phpMyAdmin tương thích như một trang PHP cục bộ.'
    ],
  'Can I run XAMPP and FlyEnv on the same machine?': [
    '能在一台电脑上同时安装 XAMPP 和 FlyEnv 吗？',
    'Bisakah saya memasang XAMPP dan FlyEnv di komputer yang sama?',
    '¿Puedo instalar XAMPP y FlyEnv en el mismo equipo?',
    'Tôi có thể cài XAMPP và FlyEnv trên cùng một máy không?'
  ],
  'You can keep both installed. Avoid conflicts between web server and database ports, domains and paths.':
    [
      '可以同时保留。避免 Web 服务器和数据库端口、域名及路径之间的冲突。',
      'Keduanya bisa tetap terpasang. Hindari benturan port server web dan database, domain, serta jalur.',
      'Puedes conservar los dos. Evita conflictos de puertos del servidor web y la base de datos, dominios y rutas.',
      'Có thể giữ cả hai. Tránh xung đột cổng máy chủ web và cơ sở dữ liệu, tên miền và đường dẫn.'
    ],
  'Does FlyEnv require containers?': [
    'FlyEnv 需要容器吗？',
    'Apakah FlyEnv membutuhkan container?',
    '¿Necesita contenedores FlyEnv?',
    'FlyEnv có cần container không?'
  ],
  'No. FlyEnv manages native local services directly on supported systems.': [
    '不需要。FlyEnv 在受支持系统上直接管理原生本地服务。',
    'Tidak. FlyEnv langsung mengelola layanan lokal native pada sistem yang didukung.',
    'No. FlyEnv gestiona servicios locales nativos directamente en sistemas compatibles.',
    'Không. FlyEnv quản lý trực tiếp dịch vụ cục bộ native trên hệ điều hành được hỗ trợ.'
  ],
  'Make your PHP environment fit your projects.': [
    '让 PHP 环境贴合你的项目。',
    'Sesuaikan lingkungan PHP dengan proyek Anda.',
    'Adapta tu entorno PHP a tus proyectos.',
    'Điều chỉnh môi trường PHP theo dự án của bạn.'
  ],
  'MAMP / MAMP PRO alternative': [
    'MAMP / MAMP PRO 替代方案',
    'Alternatif MAMP / MAMP PRO',
    'Alternativa a MAMP / MAMP PRO',
    'Giải pháp thay thế MAMP / MAMP PRO'
  ],
  'FlyEnv vs MAMP / MAMP PRO': [
    'FlyEnv 与 MAMP / MAMP PRO 对比',
    'FlyEnv vs MAMP / MAMP PRO',
    'FlyEnv frente a MAMP / MAMP PRO',
    'FlyEnv và MAMP / MAMP PRO'
  ],
  'More than a local web server.': [
    '不止一个本地 Web 服务器。',
    'Lebih dari sekadar server web lokal.',
    'Más que un servidor web local.',
    'Hơn cả một máy chủ web cục bộ.'
  ],
  'Manage your PHP and WordPress sites, frontend projects, databases and background services from one native development workspace. FlyEnv grows with the way you build applications.':
    [
      '在同一个原生开发工作区管理 PHP 和 WordPress 站点、前端项目、数据库及后台服务。FlyEnv 随应用开发方式扩展。',
      'Kelola situs PHP dan WordPress, proyek frontend, database, dan layanan latar belakang dalam satu ruang kerja native yang bisa berkembang sesuai kebutuhan aplikasi Anda.',
      'Gestiona sitios PHP y WordPress, proyectos frontend, bases de datos y servicios en segundo plano en un espacio nativo que crece con tus aplicaciones.',
      'Quản lý trang PHP và WordPress, dự án frontend, cơ sở dữ liệu và dịch vụ nền trong một không gian phát triển native luôn theo kịp nhu cầu ứng dụng.'
    ],
  'Your development workspace': [
    '你的开发工作区',
    'Ruang kerja pengembangan Anda',
    'Tu espacio de desarrollo',
    'Không gian phát triển của bạn'
  ],
  'WordPress site': ['WordPress 站点', 'Situs WordPress', 'Sitio WordPress', 'Trang web WordPress'],
  'Headless frontend': [
    '无头架构前端',
    'Frontend headless',
    'Frontend headless',
    'Frontend headless'
  ],
  APP: ['应用', 'APLIKASI', 'APLICACIÓN', 'ỨNG DỤNG'],
  'API & background jobs': [
    'API 与后台任务',
    'API dan tugas latar belakang',
    'API y tareas en segundo plano',
    'API và tác vụ nền'
  ],
  SERVICES: ['服务', 'LAYANAN', 'SERVICIOS', 'DỊCH VỤ'],
  'From local websites to complete project environments.': [
    '从本地网站走向完整的项目环境。',
    'Dari situs lokal ke lingkungan proyek yang lengkap.',
    'De sitios locales a entornos de proyecto completos.',
    'Từ trang web cục bộ đến môi trường dự án đầy đủ.'
  ],
  'MAMP provides a familiar local server environment, and MAMP PRO adds advanced site management. FlyEnv is built around a broader set of native runtimes, project dependencies and optional modules.':
    [
      'MAMP 提供熟悉的本地服务器环境，MAMP PRO 加入高级站点管理。FlyEnv 管理更多种类的原生运行时、项目依赖和可选模块。',
      'MAMP menawarkan server lokal yang familier, dan MAMP PRO menambah manajemen situs lanjutan. FlyEnv mencakup lebih banyak runtime native, dependensi proyek, dan modul opsional.',
      'MAMP ofrece un servidor local conocido y MAMP PRO añade gestión avanzada de sitios. FlyEnv gestiona más runtimes nativos, dependencias de proyectos y módulos opcionales.',
      'MAMP cung cấp môi trường máy chủ cục bộ quen thuộc, còn MAMP PRO thêm quản lý trang web nâng cao. FlyEnv quản lý nhiều runtime native, phần phụ thuộc dự án và module tùy chọn hơn.'
    ],
  'Primary workflow': [
    '主要工作流',
    'Alur kerja utama',
    'Flujo de trabajo principal',
    'Quy trình chính'
  ],
  'Local web development and site management': [
    '本地 Web 开发和站点管理',
    'Pengembangan web lokal dan pengelolaan situs',
    'Desarrollo web local y gestión de sitios',
    'Phát triển web cục bộ và quản lý trang web'
  ],
  'Sites, runtimes and project dependencies in one app': [
    '同一应用管理站点、运行时和项目依赖',
    'Situs, runtime, dan dependensi proyek dalam satu aplikasi',
    'Sitios, runtimes y dependencias en una aplicación',
    'Trang web, runtime và phần phụ thuộc trong một ứng dụng'
  ],
  'Switch bundled PHP versions. PRO adds per-site versions.': [
    '可切换内置 PHP 版本。PRO 可为各站点单独指定版本。',
    'Versi PHP bawaan dapat diganti. PRO menambahkan pemilihan versi per situs.',
    'Permite cambiar entre las versiones incluidas de PHP. PRO añade la selección por sitio.',
    'Có thể chuyển phiên bản PHP đi kèm. Bản PRO cho phép chọn phiên bản cho từng trang web.'
  ],
  'Multiple PHP versions and project-level settings': [
    '多个 PHP 版本与项目级设置',
    'Beberapa versi PHP dan pengaturan per proyek',
    'Varias versiones de PHP y configuración por proyecto',
    'Nhiều phiên bản PHP và cài đặt theo dự án'
  ],
  'Runtime scope': ['运行时范围', 'Cakupan runtime', 'Runtimes disponibles', 'Phạm vi runtime'],
  'PHP; additional language support varies by edition/platform': [
    'PHP；其他语言支持取决于版本和平台',
    'PHP; dukungan bahasa lain bergantung pada edisi dan platform',
    'PHP; otros lenguajes según edición y plataforma',
    'PHP; ngôn ngữ khác tùy phiên bản và nền tảng'
  ],
  'PHP, Node.js, Python, Java, Go and more': [
    'PHP、Node.js、Python、Java、Go 等',
    'PHP, Node.js, Python, Java, Go, dan lainnya',
    'PHP, Node.js, Python, Java, Go y más',
    'PHP, Node.js, Python, Java, Go và nhiều hơn nữa'
  ],
  'Service management': [
    '服务管理',
    'Pengelolaan layanan',
    'Gestión de servicios',
    'Quản lý dịch vụ'
  ],
  'Web and database stack; options vary by edition': [
    'Web 和数据库技术栈，选项随版本而异',
    'Stack web dan database; opsi bervariasi menurut edisi',
    'Stack web y de bases de datos; opciones según edición',
    'Stack web và cơ sở dữ liệu; tùy chọn theo phiên bản'
  ],
  'Native web servers, databases, caches and other modules': [
    '原生 Web 服务器、数据库、缓存和其他模块',
    'Server web, database, cache, dan modul native lainnya',
    'Servidores web, bases de datos, cachés y otros módulos nativos',
    'Máy chủ web, cơ sở dữ liệu, bộ nhớ đệm và module native khác'
  ],
  'Server and site controls': [
    '服务器与站点控制',
    'Kontrol server dan situs',
    'Controles de servidor y sitios',
    'Điều khiển máy chủ và trang web'
  ],
  'Workspace extension': [
    '工作区扩展',
    'Perluasan ruang kerja',
    'Ampliación del espacio de trabajo',
    'Mở rộng không gian làm việc'
  ],
  'Features depend on edition': [
    '功能因版本而异',
    'Fitur bergantung pada edisi',
    'Funciones según la edición',
    'Tính năng tùy phiên bản'
  ],
  'Optional plugins and local AI tools': [
    '可选插件和本地 AI 工具',
    'Plugin opsional dan alat AI lokal',
    'Complementos opcionales y herramientas de IA local',
    'Plugin tùy chọn và công cụ AI cục bộ'
  ],
  'Apache, Nginx': ['Apache、Nginx', 'Apache, Nginx', 'Apache y Nginx', 'Apache, Nginx'],
  'Apache, Nginx, Caddy': [
    'Apache、Nginx、Caddy',
    'Apache, Nginx, Caddy',
    'Apache, Nginx y Caddy',
    'Apache, Nginx, Caddy'
  ],
  'A workspace that goes beyond your sites.': [
    '工作区不只管理站点。',
    'Ruang kerja yang melampaui situs Anda.',
    'Un espacio de trabajo que va más allá de tus sitios.',
    'Không gian làm việc còn quản lý nhiều hơn trang web.'
  ],
  '01 / Local sites': [
    '01 / 本地站点',
    '01 / Situs lokal',
    '01 / Sitios locales',
    '01 / Trang web cục bộ'
  ],
  'Keep your website workflow familiar.': [
    '沿用熟悉的建站流程。',
    'Pertahankan alur kerja situs yang familier.',
    'Conserva tu flujo de trabajo web.',
    'Giữ quy trình làm web quen thuộc.'
  ],
  'Run PHP and WordPress projects with a chosen web server, database and site configuration. Use local domains and HTTPS for day-to-day development.':
    [
      '用选定的 Web 服务器、数据库和站点配置运行 PHP 和 WordPress 项目。日常开发可使用本地域名及 HTTPS。',
      'Jalankan proyek PHP dan WordPress dengan server web, database, dan konfigurasi pilihan. Gunakan domain lokal dan HTTPS untuk pengembangan sehari-hari.',
      'Ejecuta PHP y WordPress con el servidor, la base de datos y la configuración que prefieras. Usa dominios locales y HTTPS en el trabajo diario.',
      'Chạy dự án PHP và WordPress với máy chủ web, cơ sở dữ liệu và cấu hình đã chọn. Dùng tên miền cục bộ và HTTPS để phát triển hằng ngày.'
    ],
  'Explore PHP site setup →': [
    '了解 PHP 站点配置 →',
    'Jelajahi penyiapan situs PHP →',
    'Explorar la configuración de sitios PHP →',
    'Khám phá cách thiết lập trang web PHP →'
  ],
  'Your local sites': [
    '你的本地站点',
    'Situs lokal Anda',
    'Tus sitios locales',
    'Trang web cục bộ của bạn'
  ],
  SITE: ['站点', 'SITUS', 'SITIO', 'TRANG WEB'],
  '02 / Multi-runtime projects': [
    '02 / 多运行时项目',
    '02 / Proyek multi-runtime',
    '02 / Proyectos con varios runtimes',
    '02 / Dự án nhiều runtime'
  ],
  'Add a frontend or API without adding another manager.': [
    '添加前端或 API，无需另装管理器。',
    'Tambahkan frontend atau API tanpa pengelola lain.',
    'Añade un frontend o una API sin otro gestor.',
    'Thêm frontend hoặc API trong cùng trình quản lý.'
  ],
  'Use the same app for supported Node.js, Python and other runtimes when your website becomes a larger application. Project settings keep runtime requirements visible.':
    [
      '网站扩展成更大的应用后，在同一应用使用受支持的 Node.js、Python 等运行时。项目设置清楚记录运行时要求。',
      'Gunakan aplikasi yang sama untuk runtime Node.js, Python, dan lainnya saat situs berkembang. Pengaturan proyek memperjelas kebutuhan runtime.',
      'Usa la misma app para Node.js, Python y otros runtimes al crecer tu sitio. La configuración de cada proyecto deja visibles los requisitos.',
      'Dùng cùng ứng dụng cho Node.js, Python và các runtime khác khi trang web phát triển. Cấu hình dự án ghi rõ yêu cầu runtime.'
    ],
  'Explore runtime management →': [
    '查看运行时管理 →',
    'Jelajahi pengelolaan runtime →',
    'Explorar la gestión de runtimes →',
    'Khám phá cách quản lý runtime →'
  ],
  'Headless website': ['无头架构网站', 'Situs headless', 'Sitio headless', 'Trang web headless'],
  API: ['API', 'API', 'API', 'API'],
  '03 / Project dependencies': [
    '03 / 项目依赖',
    '03 / Dependensi proyek',
    '03 / Dependencias del proyecto',
    '03 / Phần phụ thuộc dự án'
  ],
  'Manage the services behind the website.': [
    '管理网站背后的服务。',
    'Kelola layanan di balik situs.',
    'Gestiona los servicios que sostienen tu sitio.',
    'Quản lý các dịch vụ phía sau trang web.'
  ],
  'Use native database, cache and mail-testing modules; group the managed services that belong to a project for quick startup.':
    [
      '使用原生数据库、缓存和邮件测试模块，将项目的受管服务分组以快速启动。',
      'Gunakan modul database, cache, dan pengujian email native. Kelompokkan layanan proyek agar cepat dimulai.',
      'Usa módulos nativos de bases de datos, caché y pruebas de correo, y agrupa los servicios para iniciarlos rápidamente.',
      'Dùng module cơ sở dữ liệu, bộ nhớ đệm và thử email native. Gom dịch vụ của dự án để khởi động nhanh.'
    ],
  'Client website': ['客户网站', 'Situs klien', 'Sitio de cliente', 'Trang web khách hàng'],
  'Plugin Marketplace · Room for more': [
    '插件市场 · 留出扩展空间',
    'Pasar Plugin · ruang untuk berkembang',
    'Catálogo de complementos · espacio para crecer',
    'Plugin Market · không gian để mở rộng'
  ],
  'Your next project may need more than a web server.': [
    '下个项目可能需要的不只是 Web 服务器。',
    'Proyek berikutnya mungkin memerlukan lebih dari server web.',
    'Tu próximo proyecto puede necesitar más que un servidor web.',
    'Dự án tiếp theo có thể cần nhiều hơn máy chủ web.'
  ],
  'Expand a website-focused setup with additional database, search, messaging and AI tools. The plugin system keeps optional capabilities separate from the everyday workspace.':
    [
      '为网站开发环境添加数据库、搜索、消息与 AI 工具。插件系统让可选功能与日常工作区分开。',
      'Perluas setup situs dengan database, pencarian, perpesanan, dan alat AI. Sistem plugin memisahkan fitur opsional dari ruang kerja sehari-hari.',
      'Amplía tu entorno web con bases de datos, búsquedas, mensajería e IA. El sistema de complementos mantiene estas funciones opcionales separadas del espacio cotidiano.',
      'Mở rộng môi trường web với cơ sở dữ liệu, tìm kiếm, nhắn tin và AI. Hệ thống plugin tách tính năng tùy chọn khỏi không gian làm việc hằng ngày.'
    ],
  'Try a MAMP website in FlyEnv.': [
    '在 FlyEnv 中试跑一个 MAMP 网站。',
    'Coba satu situs MAMP di FlyEnv.',
    'Prueba un sitio de MAMP en FlyEnv.',
    'Thử một trang web MAMP trong FlyEnv.'
  ],
  'Preserve your site and database': [
    '保留站点与数据库',
    'Simpan situs dan database',
    'Conserva el sitio y la base de datos',
    'Giữ trang web và cơ sở dữ liệu'
  ],
  'Back up the document root, database and host settings; record the PHP version.': [
    '备份文档根目录、数据库和主机设置，记录 PHP 版本。',
    'Cadangkan document root, database, dan pengaturan host. Catat versi PHP.',
    'Respalda la raíz web, la base de datos y la configuración del host. Anota la versión de PHP.',
    'Sao lưu thư mục gốc, cơ sở dữ liệu và cài đặt host. Ghi lại phiên bản PHP.'
  ],
  'Choose compatible components': [
    '选择兼容组件',
    'Pilih komponen yang kompatibel',
    'Elige componentes compatibles',
    'Chọn thành phần tương thích'
  ],
  'Install the PHP version, server and database you need. Keep the original MAMP setup intact.': [
    '安装所需的 PHP 版本、服务器和数据库，保留原有 MAMP 配置。',
    'Instal versi PHP, server, dan database yang dibutuhkan. Pertahankan pengaturan MAMP awal.',
    'Instala la versión de PHP, el servidor y la base de datos que necesites. Conserva la configuración de MAMP.',
    'Cài phiên bản PHP, máy chủ và cơ sở dữ liệu cần thiết. Giữ nguyên cấu hình MAMP cũ.'
  ],
  'Recreate the local site': [
    '重新创建本地站点',
    'Buat ulang situs lokal',
    'Recrea el sitio local',
    'Tạo lại trang web cục bộ'
  ],
  'Configure the domain, document root and HTTPS; restore the database and update local settings.':
    [
      '配置域名、文档根目录和 HTTPS，恢复数据库并更新本地设置。',
      'Atur domain, document root, dan HTTPS. Pulihkan database dan perbarui pengaturan lokal.',
      'Configura el dominio, la raíz web y HTTPS. Restaura la base de datos y actualiza los ajustes locales.',
      'Cấu hình tên miền, thư mục gốc và HTTPS. Khôi phục cơ sở dữ liệu và cập nhật thiết lập cục bộ.'
    ],
  'Verify and extend': [
    '验证后再扩展',
    'Verifikasi dan perluas',
    'Verifica y amplía',
    'Kiểm tra và mở rộng'
  ],
  'Test the site first. Add frontend tools, caching or mail testing only if the project needs them.':
    [
      '先测试网站，再按需添加前端工具、缓存或邮件测试。',
      'Uji situs dahulu. Tambahkan alat frontend, cache, atau pengujian email jika dibutuhkan.',
      'Prueba primero el sitio. Añade frontend, caché o pruebas de correo si el proyecto lo necesita.',
      'Kiểm tra trang web trước. Chỉ thêm công cụ frontend, bộ nhớ đệm hoặc thử email nếu cần.'
    ],
  'Is FlyEnv an alternative to MAMP on macOS?': [
    'FlyEnv 是 macOS 上的 MAMP 替代方案吗？',
    'Apakah FlyEnv alternatif MAMP di macOS?',
    '¿Es FlyEnv una alternativa a MAMP en macOS?',
    'FlyEnv có thay thế MAMP trên macOS được không?'
  ],
  'Yes. FlyEnv supports native local development on macOS, Windows and Linux.': [
    '是的。FlyEnv 支持 macOS、Windows 和 Linux 上的原生本地开发。',
    'Ya. FlyEnv mendukung pengembangan lokal native di macOS, Windows, dan Linux.',
    'Sí. FlyEnv admite desarrollo local nativo en macOS, Windows y Linux.',
    'Có. FlyEnv hỗ trợ phát triển cục bộ native trên macOS, Windows và Linux.'
  ],
  'Can I run WordPress locally?': [
    '能在本地运行 WordPress 吗？',
    'Bisakah saya menjalankan WordPress secara lokal?',
    '¿Puedo ejecutar WordPress en local?',
    'Tôi có thể chạy WordPress cục bộ không?'
  ],
  'Yes. Configure a compatible PHP web server and database, then install or restore your WordPress site.':
    [
      '能。配置兼容的 PHP、Web 服务器和数据库，再安装或恢复 WordPress 站点。',
      'Ya. Siapkan PHP, server web, dan database yang kompatibel, lalu instal atau pulihkan situs WordPress.',
      'Sí. Configura PHP, un servidor web y una base de datos compatibles. Después, instala o restaura WordPress.',
      'Có. Cấu hình PHP, máy chủ web và cơ sở dữ liệu tương thích, rồi cài hoặc khôi phục WordPress.'
    ],
  'Can I run different PHP versions for different projects?': [
    '不同项目能用不同 PHP 版本吗？',
    'Bisakah saya memakai versi PHP berbeda untuk tiap proyek?',
    '¿Puedo usar distintas versiones de PHP por proyecto?',
    'Tôi có thể dùng phiên bản PHP riêng cho từng dự án không?'
  ],
  'FlyEnv provides multiple installed PHP versions and project-level runtime settings; check platform availability.':
    [
      'FlyEnv 支持安装多个 PHP 版本和项目级运行时设置。请确认平台上的可用版本。',
      'FlyEnv menyediakan beberapa versi PHP terpasang dan runtime per proyek. Periksa ketersediaan untuk platform Anda.',
      'FlyEnv admite varias versiones instaladas de PHP y runtimes por proyecto. Comprueba la disponibilidad de tu plataforma.',
      'FlyEnv hỗ trợ nhiều phiên bản PHP đã cài và runtime theo dự án. Kiểm tra tính khả dụng trên nền tảng của bạn.'
    ],
  'Can I move my existing MAMP site?': [
    '能迁移现有 MAMP 网站吗？',
    'Bisakah saya memindahkan situs MAMP yang ada?',
    '¿Puedo trasladar mi sitio existente de MAMP?',
    'Tôi có thể chuyển trang web MAMP hiện có không?'
  ],
  'Keep a backup of the project and database, recreate the local site and verify settings before changing the old environment.':
    [
      '备份项目与数据库，重新创建本地站点，并核对配置后再修改旧环境。',
      'Cadangkan proyek dan database, buat ulang situs lokal, lalu verifikasi pengaturan sebelum mengubah lingkungan lama.',
      'Respalda el proyecto y la base de datos, recrea el sitio local y verifica su configuración antes de cambiar el entorno anterior.',
      'Sao lưu dự án và cơ sở dữ liệu, tạo lại trang web cục bộ và kiểm tra cấu hình trước khi thay đổi môi trường cũ.'
    ],
  'Can FlyEnv manage Node.js and other services?': [
    'FlyEnv 能管理 Node.js 和其他服务吗？',
    'Bisakah FlyEnv mengelola Node.js dan layanan lainnya?',
    '¿Puede FlyEnv gestionar Node.js y otros servicios?',
    'FlyEnv có quản lý được Node.js và dịch vụ khác không?'
  ],
  'Yes. Install supported runtimes and services on demand, and extend the workspace with optional plugins.':
    [
      '可以。按需安装受支持的运行时与服务，也可通过可选插件扩展工作区。',
      'Ya. Instal runtime dan layanan yang didukung sesuai kebutuhan, lalu perluas ruang kerja dengan plugin opsional.',
      'Sí. Instala runtimes y servicios compatibles bajo demanda y amplía el entorno con complementos opcionales.',
      'Có. Cài runtime và dịch vụ được hỗ trợ khi cần và mở rộng không gian làm việc bằng plugin tùy chọn.'
    ],
  'Go beyond your local web server.': [
    '超越本地 Web 服务器。',
    'Lebih dari server web lokal.',
    'Ve más allá de tu servidor web local.',
    'Mở rộng hơn máy chủ web cục bộ.'
  ],
  'Docker alternative': [
    'Docker 替代方案',
    'Alternatif Docker',
    'Alternativa a Docker',
    'Giải pháp thay thế Docker'
  ],
  'FlyEnv vs Docker': [
    'FlyEnv 与 Docker 对比',
    'FlyEnv vs Docker',
    'FlyEnv frente a Docker',
    'FlyEnv và Docker'
  ],
  'Develop natively. Containerize when you need to.': [
    '原生开发，需要时再用容器。',
    'Kembangkan secara native. Gunakan container saat diperlukan.',
    'Desarrolla de forma nativa. Usa contenedores cuando hagan falta.',
    'Phát triển native. Dùng container khi cần.'
  ],
  'Run supported local runtimes and services directly on your computer. Use FlyEnv for fast-to-configure day-to-day development, and keep Docker for container-based delivery, isolation and reproducible team environments.':
    [
      '直接在电脑上运行受支持的本地运行时和服务。用 FlyEnv 快速配置日常开发，容器交付、隔离和可复现的团队环境继续使用 Docker。',
      'Jalankan runtime dan layanan yang didukung langsung di komputer. Gunakan FlyEnv untuk pengembangan sehari-hari yang cepat disiapkan, dan Docker untuk pengiriman berbasis container, isolasi, dan lingkungan tim yang dapat direproduksi.',
      'Ejecuta runtimes y servicios compatibles directamente en tu equipo. Usa FlyEnv para el desarrollo diario y conserva Docker para entregas con contenedores, aislamiento y entornos de equipo reproducibles.',
      'Chạy runtime và dịch vụ cục bộ được hỗ trợ ngay trên máy. Dùng FlyEnv để thiết lập nhanh môi trường hằng ngày, giữ Docker cho bàn giao qua container, cô lập và môi trường nhóm có thể tái tạo.'
    ],
  'Choose the right development model': [
    '选择合适的开发模式',
    'Pilih model pengembangan yang sesuai',
    'Elige el modelo de desarrollo adecuado',
    'Chọn mô hình phát triển phù hợp'
  ],
  WORKFLOW: ['工作流', 'ALUR KERJA', 'FLUJO DE TRABAJO', 'QUY TRÌNH'],
  HOST: ['宿主系统', 'HOST', 'EQUIPO ANFITRIÓN', 'MÁY CHỦ'],
  'Your code': ['你的代码', 'Kode Anda', 'Tu código', 'Mã nguồn của bạn'],
  'Native runtime': ['原生运行时', 'Runtime native', 'Runtime nativo', 'Runtime native'],
  'Local DB': ['本地数据库', 'DB lokal', 'Base de datos local', 'CSDL cục bộ'],
  CONTAINERS: ['容器', 'CONTAINER', 'CONTENEDORES', 'CONTAINER'],
  Image: ['镜像', 'Image', 'Imagen', 'Image'],
  Container: ['容器', 'Container', 'Contenedor', 'Container'],
  Compose: ['Compose', 'Compose', 'Compose', 'Compose'],
  'Different approaches · both can coexist': [
    '不同方式，可以共存',
    'Pendekatan berbeda · keduanya dapat digunakan bersama',
    'Enfoques distintos que pueden coexistir',
    'Hai cách làm khác nhau có thể cùng tồn tại'
  ],
  'Native development is a choice, not a compromise.': [
    '原生开发是一种选择。',
    'Pengembangan native adalah pilihan.',
    'El desarrollo nativo es una opción.',
    'Phát triển native là một lựa chọn.'
  ],
  'Docker packages applications and services into containers. FlyEnv manages native local services and runtimes directly. The useful comparison is which workflow suits the task, not which tool replaces the other.':
    [
      'Docker 将应用和服务打包进容器。FlyEnv 直接管理原生本地服务与运行时。根据任务所需选用合适的工作流。',
      'Docker mengemas aplikasi dan layanan ke dalam container. FlyEnv mengelola runtime dan layanan lokal native secara langsung. Pilih alur yang sesuai untuk tugasnya.',
      'Docker empaqueta aplicaciones y servicios en contenedores. FlyEnv gestiona runtimes y servicios locales nativos. Elige el flujo adecuado para cada tarea.',
      'Docker đóng gói ứng dụng và dịch vụ vào container. FlyEnv quản lý trực tiếp dịch vụ và runtime cục bộ native. Chọn quy trình phù hợp với từng việc.'
    ],
  'Execution model': ['执行模式', 'Model eksekusi', 'Modelo de ejecución', 'Mô hình thực thi'],
  'Containerized processes; Docker Desktop manages the environment': [
    '容器内的进程，由 Docker Desktop 管理环境',
    'Proses di container; Docker Desktop mengelola lingkungan',
    'Procesos en contenedores; Docker Desktop gestiona el entorno',
    'Tiến trình trong container; Docker Desktop quản lý môi trường'
  ],
  'Native local processes on supported operating systems': [
    '在受支持的操作系统中运行原生进程',
    'Proses lokal native di sistem yang didukung',
    'Procesos locales nativos en sistemas compatibles',
    'Tiến trình cục bộ native trên hệ điều hành được hỗ trợ'
  ],
  'Project definition': [
    '项目定义',
    'Definisi proyek',
    'Definición del proyecto',
    'Định nghĩa dự án'
  ],
  'Images, Dockerfiles and Compose files': [
    '镜像、Dockerfile 和 Compose 文件',
    'Image, Dockerfile, dan file Compose',
    'Imágenes, Dockerfiles y archivos Compose',
    'Image, Dockerfile và tệp Compose'
  ],
  'Project-level runtime settings and service groups': [
    '项目级运行时设置与服务组',
    'Pengaturan runtime per proyek dan grup layanan',
    'Runtimes por proyecto y grupos de servicios',
    'Cài đặt runtime theo dự án và nhóm dịch vụ'
  ],
  'Local runtime access': [
    '访问本地运行时',
    'Akses runtime lokal',
    'Acceso a runtimes locales',
    'Truy cập runtime cục bộ'
  ],
  'Run commands in containers or use host tooling': [
    '在容器中运行命令，或使用宿主机工具',
    'Jalankan perintah di container atau gunakan alat host',
    'Ejecuta comandos en contenedores o usa herramientas del host',
    'Chạy lệnh trong container hoặc dùng công cụ trên máy chủ'
  ],
  'Use installed local runtimes directly': [
    '直接使用已安装的本地运行时',
    'Gunakan runtime lokal terpasang secara langsung',
    'Usa directamente los runtimes locales instalados',
    'Dùng trực tiếp runtime cục bộ đã cài'
  ],
  'Service configuration': [
    '服务配置',
    'Konfigurasi layanan',
    'Configuración de servicios',
    'Cấu hình dịch vụ'
  ],
  'Container configuration, ports, mounts and volumes': [
    '容器配置、端口、挂载和卷',
    'Konfigurasi container, port, mount, dan volume',
    'Configuración de contenedores, puertos, montajes y volúmenes',
    'Cấu hình container, cổng, mount và volume'
  ],
  'Manage service configuration, logs and ports in a desktop app': [
    '在桌面应用中管理服务配置、日志和端口',
    'Kelola konfigurasi layanan, log, dan port di aplikasi desktop',
    'Gestiona la configuración, los registros y los puertos desde la aplicación de escritorio',
    'Quản lý cấu hình dịch vụ, nhật ký và cổng trong ứng dụng máy tính'
  ],
  'Docker Compose and container management': [
    'Docker Compose 和容器管理',
    'Docker Compose dan pengelolaan container',
    'Docker Compose y gestión de contenedores',
    'Docker Compose và quản lý container'
  ],
  'Named Startup Groups for installed services': [
    '为已安装的服务命名并分组启动',
    'Startup Groups bernama untuk layanan terpasang',
    'Grupos de inicio con nombre para servicios instalados',
    'Nhóm khởi động có tên cho dịch vụ đã cài'
  ],
  Extensibility: ['扩展能力', 'Ekstensibilitas', 'Extensibilidad', 'Khả năng mở rộng'],
  'Container images and Docker ecosystem': [
    '容器镜像和 Docker 生态',
    'Image container dan ekosistem Docker',
    'Imágenes de contenedores y ecosistema Docker',
    'Image container và hệ sinh thái Docker'
  ],
  'Native modules and optional FlyEnv plugins': [
    'FlyEnv 原生模块与可选插件',
    'Modul native dan plugin opsional FlyEnv',
    'Módulos nativos y complementos opcionales de FlyEnv',
    'Module native và plugin tùy chọn của FlyEnv'
  ],
  'Container isolation': [
    '容器隔离',
    'Isolasi container',
    'Aislamiento de contenedores',
    'Cô lập container'
  ],
  'Container isolation is a core capability': [
    '容器隔离是核心能力',
    'Isolasi container merupakan kemampuan inti',
    'El aislamiento de contenedores es una función central',
    'Cô lập container là tính năng cốt lõi'
  ],
  'Native processes; not a container isolation system': [
    '在宿主系统直接运行进程',
    'Proses yang berjalan langsung di host',
    'Procesos nativos en el equipo anfitrión',
    'Tiến trình chạy trực tiếp trên máy chủ'
  ],
  'Deployment portability': [
    '部署可移植性',
    'Portabilitas deployment',
    'Portabilidad de despliegue',
    'Tính di động khi triển khai'
  ],
  'Container images and reproducible environments': [
    '容器镜像和可复现环境',
    'Image container dan lingkungan yang dapat direproduksi',
    'Imágenes y entornos reproducibles',
    'Image container và môi trường có thể tái tạo'
  ],
  'Local development; use your deployment toolchain separately': [
    '面向本地开发，部署使用独立工具链',
    'Pengembangan lokal dengan toolchain deployment terpisah',
    'Desarrollo local con una cadena de despliegue separada',
    'Phát triển cục bộ với bộ công cụ triển khai riêng'
  ],
  'A simpler path for native local workflows.': [
    '简化原生本地开发流程。',
    'Alur yang lebih sederhana untuk pengembangan lokal native.',
    'Un camino más sencillo para el desarrollo local nativo.',
    'Quy trình đơn giản hơn cho phát triển cục bộ native.'
  ],
  '01 / Native runtimes': [
    '01 / 原生运行时',
    '01 / Runtime native',
    '01 / Runtimes nativos',
    '01 / Runtime native'
  ],
  'Work directly with the tools on your computer.': [
    '直接使用电脑上的工具。',
    'Gunakan alat yang ada di komputer secara langsung.',
    'Usa directamente las herramientas de tu equipo.',
    'Dùng trực tiếp công cụ trên máy tính.'
  ],
  'For projects that do not require containers, use supported host runtimes and services. Run your normal project commands and access local service configuration without a container workflow.':
    [
      '不需要容器的项目可以用受支持的宿主机运行时和服务。直接运行项目命令并访问本地服务配置。',
      'Untuk proyek yang tidak membutuhkan container, gunakan runtime dan layanan host yang didukung. Jalankan perintah proyek dan akses konfigurasi lokal secara langsung.',
      'En proyectos sin requisitos de contenedores, usa runtimes y servicios compatibles del host. Ejecuta tus comandos habituales y accede directamente a la configuración local.',
      'Với dự án không cần container, dùng runtime và dịch vụ được hỗ trợ trên máy chủ. Chạy lệnh dự án và truy cập trực tiếp cấu hình dịch vụ cục bộ.'
    ],
  'Native development': [
    '原生开发',
    'Pengembangan native',
    'Desarrollo nativo',
    'Phát triển native'
  ],
  'Source code': ['源代码', 'Kode sumber', 'Código fuente', 'Mã nguồn'],
  'Local project folder': [
    '本地项目目录',
    'Folder proyek lokal',
    'Carpeta local del proyecto',
    'Thư mục dự án cục bộ'
  ],
  'PHP / Node.js / Python': [
    'PHP / Node.js / Python',
    'PHP / Node.js / Python',
    'PHP / Node.js / Python',
    'PHP / Node.js / Python'
  ],
  'Local database & cache': [
    '本地数据库与缓存',
    'Database dan cache lokal',
    'Base de datos y caché locales',
    'Cơ sở dữ liệu và cache cục bộ'
  ],
  'Bring the local stack up as a group.': [
    '把本地技术栈作为一组启动。',
    'Jalankan stack lokal sebagai satu grup.',
    'Inicia el stack local como grupo.',
    'Khởi động stack cục bộ theo nhóm.'
  ],
  'Use named groups for the installed services your project depends on. This is a native service startup workflow, not a Compose replacement or a container orchestration engine.':
    [
      '把项目依赖的已安装服务放入命名启动组。这个原生服务启动流程独立于 Compose 和容器编排。',
      'Gunakan grup bernama bagi layanan terpasang yang dibutuhkan proyek. Ini alur startup layanan native yang terpisah dari Compose dan orkestrasi container.',
      'Agrupa con un nombre los servicios instalados de tu proyecto. Este flujo de arranque nativo funciona por separado de Compose y de la orquestación de contenedores.',
      'Gom dịch vụ đã cài của dự án vào nhóm có tên. Quy trình khởi động dịch vụ native này hoạt động độc lập với Compose và điều phối container.'
    ],
  'Local application': ['本地应用', 'Aplikasi lokal', 'Aplicación local', 'Ứng dụng cục bộ'],
  '03 / Hybrid workflow': [
    '03 / 混合工作流',
    '03 / Alur kerja hibrida',
    '03 / Flujo híbrido',
    '03 / Quy trình kết hợp'
  ],
  'Keep containers where they add value.': [
    '在有价值的地方保留容器。',
    'Gunakan container saat memberikan manfaat.',
    'Conserva los contenedores donde aporten valor.',
    'Giữ container ở nơi chúng có ích.'
  ],
  'Develop with native services when that suits the task, then use Docker for containerized testing, reproducible team setup or delivery. Match runtime and dependency versions deliberately.':
    [
      '日常开发按需使用原生服务，用 Docker 执行容器化测试、复现团队环境或交付。留意运行时和依赖的版本匹配。',
      'Gunakan layanan native jika sesuai, lalu Docker untuk pengujian, lingkungan tim yang dapat direproduksi, atau pengiriman. Cocokkan versi runtime dan dependensi dengan sengaja.',
      'Desarrolla con servicios nativos cuando convenga y usa Docker para pruebas, entornos reproducibles o entregas. Alinea las versiones de runtimes y dependencias.',
      'Dùng dịch vụ native khi phù hợp, dùng Docker để kiểm thử qua container, tái tạo môi trường nhóm hoặc bàn giao. Chủ động đồng bộ phiên bản runtime và phần phụ thuộc.'
    ],
  'Explore local development →': [
    '了解本地开发 →',
    'Jelajahi pengembangan lokal →',
    'Explorar el desarrollo local →',
    'Khám phá phát triển cục bộ →'
  ],
  'A hybrid development workflow': [
    '混合开发工作流',
    'Alur pengembangan hibrida',
    'Flujo de desarrollo híbrido',
    'Quy trình phát triển kết hợp'
  ],
  'Daily development': [
    '日常开发',
    'Pengembangan sehari-hari',
    'Desarrollo diario',
    'Phát triển hằng ngày'
  ],
  'Native runtimes': ['原生运行时', 'Runtime native', 'Runtimes nativos', 'Runtime native'],
  'Local services': ['本地服务', 'Layanan lokal', 'Servicios locales', 'Dịch vụ cục bộ'],
  'Integration & delivery': [
    '集成和交付',
    'Integrasi dan pengiriman',
    'Integración y entrega',
    'Tích hợp và bàn giao'
  ],
  Images: ['镜像', 'Image', 'Imágenes', 'Image'],
  'Plugin Marketplace · Native services on demand': [
    '插件市场 · 按需添加原生服务',
    'Pasar Plugin · layanan native sesuai kebutuhan',
    'Catálogo de complementos · servicios nativos bajo demanda',
    'Plugin Market · dịch vụ native theo nhu cầu'
  ],
  'Add services without rebuilding your entire local setup.': [
    '添加服务，无需重建整套本地环境。',
    'Tambahkan layanan tanpa membangun ulang seluruh lingkungan lokal.',
    'Añade servicios sin reconstruir todo tu entorno local.',
    'Thêm dịch vụ mà không cần dựng lại toàn bộ môi trường cục bộ.'
  ],
  'Use supported native modules and optional plugins for databases, search, messaging or AI. Keep containers for workloads that depend on their isolation or packaged environment.':
    [
      '通过受支持的原生模块和可选插件添加数据库、搜索、消息或 AI。依赖隔离或打包环境的工作负载继续使用容器。',
      'Gunakan modul native dan plugin opsional untuk database, pencarian, perpesanan, atau AI. Pertahankan container untuk beban kerja yang memerlukan isolasi atau lingkungan paket.',
      'Usa módulos nativos y complementos para bases de datos, búsqueda, mensajería o IA. Conserva contenedores para las cargas que necesitan aislamiento o un entorno empaquetado.',
      'Dùng module native và plugin tùy chọn cho cơ sở dữ liệu, tìm kiếm, nhắn tin hoặc AI. Giữ container cho tác vụ cần cô lập hoặc môi trường đóng gói.'
    ],
  'Try native development with one Compose project.': [
    '用一个 Compose 项目试试原生开发。',
    'Coba pengembangan native dengan satu proyek Compose.',
    'Prueba el desarrollo nativo con un proyecto de Compose.',
    'Thử phát triển native với một dự án Compose.'
  ],
  'Inspect the Compose configuration': [
    '检查 Compose 配置',
    'Periksa konfigurasi Compose',
    'Revisa la configuración de Compose',
    'Kiểm tra cấu hình Compose'
  ],
  'Record runtime versions, services, exposed ports, volumes and environment variables. Keep your Compose files unchanged.':
    [
      '记录运行时版本、服务、开放端口、卷和环境变量。保留 Compose 文件。',
      'Catat versi runtime, layanan, port terbuka, volume, dan variabel lingkungan. Biarkan file Compose tetap utuh.',
      'Anota versiones, servicios, puertos expuestos, volúmenes y variables de entorno. Conserva tus archivos de Compose.',
      'Ghi lại phiên bản runtime, dịch vụ, cổng công khai, volume và biến môi trường. Giữ nguyên tệp Compose.'
    ],
  'Choose compatible native services': [
    '选择兼容的原生服务',
    'Pilih layanan native yang kompatibel',
    'Elige servicios nativos compatibles',
    'Chọn dịch vụ native tương thích'
  ],
  'Install equivalent supported runtimes and services; leave container-only dependencies in Docker.':
    [
      '安装等效的受支持运行时和服务，仅能在容器中运行的依赖继续留在 Docker。',
      'Instal runtime dan layanan setara yang didukung. Biarkan dependensi khusus container di Docker.',
      'Instala runtimes y servicios equivalentes compatibles. Mantén en Docker las dependencias que requieren contenedores.',
      'Cài runtime và dịch vụ tương đương được hỗ trợ. Giữ phần phụ thuộc chỉ chạy trong container ở Docker.'
    ],
  'Prepare test data and endpoints': [
    '准备测试数据与连接地址',
    'Siapkan data uji dan endpoint',
    'Prepara datos de prueba y endpoints',
    'Chuẩn bị dữ liệu thử nghiệm và địa chỉ kết nối'
  ],
  'Export/import data safely, configure separate ports and update local-only environment settings.':
    [
      '安全导出并导入数据，配置单独端口并更新本地环境设置。',
      'Ekspor dan impor data dengan aman, tetapkan port terpisah, lalu perbarui lingkungan lokal.',
      'Exporta e importa datos con cuidado, configura puertos aparte y actualiza los ajustes del entorno local.',
      'Xuất và nhập dữ liệu an toàn, đặt cổng riêng rồi cập nhật cấu hình môi trường cục bộ.'
    ],
  'Validate before adopting': [
    '验证后再正式采用',
    'Validasi sebelum menerapkan',
    'Valida antes de adoptar el flujo',
    'Kiểm tra trước khi áp dụng'
  ],
  'Run tests and verify the application. Continue using Docker for container-specific testing or deployment.':
    [
      '运行测试并验证应用。依赖容器的测试或部署继续使用 Docker。',
      'Jalankan pengujian dan verifikasi aplikasi. Tetap gunakan Docker untuk pengujian dan deployment yang memerlukan container.',
      'Ejecuta pruebas y verifica la aplicación. Conserva Docker para pruebas o despliegues que dependan de contenedores.',
      'Chạy kiểm thử và xác minh ứng dụng. Tiếp tục dùng Docker cho kiểm thử hoặc triển khai cần container.'
    ],
  'Is FlyEnv a complete Docker replacement?': [
    'FlyEnv 能完全替代 Docker 吗？',
    'Apakah FlyEnv bisa sepenuhnya menggantikan Docker?',
    '¿Puede FlyEnv sustituir por completo a Docker?',
    'FlyEnv có thay thế Docker hoàn toàn không?'
  ],
  'No. FlyEnv is a native local development environment, not a container engine. Docker remains valuable for isolation, images and reproducible environments.':
    [
      'FlyEnv 是原生本地开发环境。Docker 提供容器隔离、镜像和可复现环境。',
      'FlyEnv adalah lingkungan pengembangan lokal native. Docker menyediakan isolasi container, image, dan lingkungan yang dapat direproduksi.',
      'FlyEnv es un entorno de desarrollo local nativo. Docker aporta aislamiento, imágenes y entornos reproducibles.',
      'FlyEnv là môi trường phát triển cục bộ native. Docker cung cấp cô lập, image và môi trường có thể tái tạo.'
    ],
  'Can FlyEnv and Docker run together?': [
    'FlyEnv 能和 Docker 一起运行吗？',
    'Bisakah FlyEnv dan Docker berjalan bersama?',
    '¿Pueden convivir FlyEnv y Docker?',
    'FlyEnv và Docker có thể chạy cùng nhau không?'
  ],
  'Yes. Avoid port conflicts and configure the application to connect to the intended native or containerized service.':
    [
      '可以。避免端口冲突，并确认应用连接到预期的原生服务或容器服务。',
      'Ya. Hindari benturan port dan pastikan aplikasi terhubung ke layanan native atau container yang dimaksud.',
      'Sí. Evita conflictos de puertos y configura la aplicación para conectarse al servicio nativo o al contenedor previsto.',
      'Có. Tránh xung đột cổng và cấu hình ứng dụng để kết nối đúng dịch vụ native hoặc container.'
    ],
  'Does FlyEnv import Docker Compose files?': [
    'FlyEnv 能导入 Docker Compose 文件吗？',
    'Apakah FlyEnv dapat mengimpor file Docker Compose?',
    '¿Importa FlyEnv archivos de Docker Compose?',
    'FlyEnv có nhập được tệp Docker Compose không?'
  ],
  'This workflow does not assume automatic Compose import. Review the configuration and choose compatible local modules manually.':
    [
      '这个工作流需要查看 Compose 配置，再手动选择兼容的本地模块。',
      'Alur ini menggunakan konfigurasi Compose sebagai referensi. Pilih modul lokal yang kompatibel secara manual.',
      'En este flujo, revisa la configuración de Compose y elige manualmente módulos locales compatibles.',
      'Trong quy trình này, hãy xem cấu hình Compose rồi chọn thủ công module cục bộ tương thích.'
    ],
  'Is native development always faster?': [
    '原生开发总是更快吗？',
    'Apakah pengembangan native selalu lebih cepat?',
    '¿Es siempre más rápido el desarrollo nativo?',
    'Phát triển native có luôn nhanh hơn không?'
  ],
  'No universal performance claim applies. Results depend on the OS, workload, file access and configuration. Test your own project.':
    [
      '性能取决于系统、工作负载、文件访问和配置，请在自己的项目上实测。',
      'Hasil bergantung pada sistem, beban kerja, akses file, dan konfigurasi. Uji di proyek Anda sendiri.',
      'El resultado depende del sistema, la carga, el acceso a archivos y la configuración. Mídelo con tu propio proyecto.',
      'Kết quả tùy vào hệ điều hành, tác vụ, cách truy cập tệp và cấu hình. Hãy kiểm tra với dự án của bạn.'
    ],
  'Can I still deploy using Docker?': [
    '还能继续用 Docker 部署吗？',
    'Bisakah saya tetap melakukan deployment dengan Docker?',
    '¿Puedo seguir desplegando con Docker?',
    'Tôi có thể tiếp tục triển khai bằng Docker không?'
  ],
  'Yes. Keep your container build and deployment pipeline. FlyEnv can be used for a separate native development workflow.':
    [
      '可以。保留容器构建与部署流水线，使用 FlyEnv 进行独立的原生本地开发。',
      'Ya. Pertahankan pipeline build dan deployment container. Gunakan FlyEnv untuk alur pengembangan native yang terpisah.',
      'Sí. Conserva tu pipeline de compilación y despliegue con contenedores y usa FlyEnv para un flujo de desarrollo nativo separado.',
      'Có. Giữ pipeline build và triển khai container rồi dùng FlyEnv để phát triển native theo quy trình riêng.'
    ],
  'Develop natively when it makes sense.': [
    '适合时，就用原生开发。',
    'Kembangkan secara native saat sesuai.',
    'Desarrolla de forma nativa cuando tenga sentido.',
    'Phát triển native khi phù hợp.'
  ],
  'FlyEnv · native local workflow': [
    'FlyEnv · 原生本地工作流',
    'FlyEnv · alur lokal native',
    'FlyEnv · flujo local nativo',
    'FlyEnv · quy trình cục bộ native'
  ],
  'Docker · container workflow': [
    'Docker · 容器工作流',
    'Docker · alur container',
    'Docker · flujo con contenedores',
    'Docker · quy trình container'
  ],
  'Laragon documentation': [
    'Laragon 文档',
    'Dokumentasi Laragon',
    'Documentación de Laragon',
    'Tài liệu Laragon'
  ],
  'Laragon operations': [
    'Laragon 操作指南',
    'Operasi Laragon',
    'Operaciones de Laragon',
    'Thao tác trong Laragon'
  ],
  'MAMP documentation': ['MAMP 文档', 'Dokumentasi MAMP', 'Documentación de MAMP', 'Tài liệu MAMP'],
  'Docker bind mounts': [
    'Docker 绑定挂载',
    'Bind mount Docker',
    'Montajes bind de Docker',
    'Bind mount của Docker'
  ],
  'MAMP for macOS': ['macOS 版 MAMP', 'MAMP untuk macOS', 'MAMP para macOS', 'MAMP cho macOS'],
  'Herd for Windows': [
    'Windows 版 Herd',
    'Herd untuk Windows',
    'Herd para Windows',
    'Herd cho Windows'
  ],
  'XAMPP packages': ['XAMPP 发行包', 'Paket XAMPP', 'Paquetes de XAMPP', 'Gói XAMPP']
}

export function getComparisonText(text: string, locale: CompareLocale): string {
  return locale === 'en' ? text : (translations[text]?.[localeIndex[locale]] ?? text)
}
