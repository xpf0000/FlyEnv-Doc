export type HomeHeroLocale = 'en' | 'zh' | 'id' | 'es' | 'vi'

interface FeatureCardCopy {
  label: string
  title: string
  description: string
  link: string
}

interface HeroCopy {
  openSource: string
  native: string
  heading: [string, string]
  subtitle: string
  description: string
  download: string
  demos: string
  free: string
  gettingStarted: string
  compare: string
  multipleRuntimes: string
  extend: string
  oneWorkspace: string
  categories: [string, string, string, string, string, string]
  workspace: {
    navigation: [string, string, string, string, string, string, string, string, string]
    yourProjects: string
    heading: string
    projectCount: string
    nodeApp: string
    laravel: string
    readyToStart: string
    ready: string
    running: string
    start: string
    stop: string
    summary: string
    runningSummary: string
    local: string
    illustrative: string
  }
  why: {
    eyebrow: string
    heading: string
    description: string
    cards: [FeatureCardCopy, FeatureCardCopy, FeatureCardCopy, FeatureCardCopy]
    native: string
    library: string
    onDemand: string
    installed: string
    install: string
    runtimes: string
    automatic: string
    laravel: string
    group: string
    startAll: string
  }
}

export const homeHeroCopy: Record<HomeHeroLocale, HeroCopy> = {
  en: {
    openSource: 'Open source',
    native: 'Native local development',
    heading: ['From scattered tools', 'to one workspace.'],
    subtitle: 'The all-in-one local development environment that runs natively.',
    description:
      'Manage PHP, Node.js, Python, databases, web servers, local services and AI tools in one extensible workspace. Build, run and iterate on your projects.',
    download: 'Download FlyEnv',
    demos: 'Watch demos',
    free: 'Free to start',
    gettingStarted: 'Getting started',
    compare: 'Compare with your current tools',
    multipleRuntimes: 'Multiple runtimes',
    extend: 'Extend as you grow',
    oneWorkspace: 'One workspace for',
    categories: ['Runtimes', 'Databases', 'Web servers', 'Local services', 'AI tools', 'Plugins'],
    workspace: {
      navigation: [
        'Workspace',
        'Overview',
        'Sites',
        'Runtimes',
        'Services',
        'Startup Groups',
        'Extend',
        'Plugins',
        'AI & MCP'
      ],
      yourProjects: 'Your projects',
      heading: 'Local workspace',
      projectCount: '3 projects',
      nodeApp: 'Node app',
      laravel: 'Laravel development',
      readyToStart: 'Ready to start',
      ready: 'Ready',
      running: 'Running',
      start: 'Start group',
      stop: 'Stop group',
      summary: '4 services · 1 click',
      runningSummary: '4 services running',
      local: 'Local environment',
      illustrative: 'Illustrative workflow'
    },
    why: {
      eyebrow: 'Native by design',
      heading: 'Built for your machine.',
      description: 'A local environment should fit the way you develop.',
      cards: [
        {
          label: 'Native services',
          title: 'Run directly on your machine.',
          description:
            'Run local services natively, with direct access to your configuration, logs and files.',
          link: 'Native development'
        },
        {
          label: 'On-demand installation',
          title: 'Install only what you use.',
          description:
            'Choose the languages, databases and services your projects need. Add more tools as your work evolves.',
          link: 'Explore features'
        },
        {
          label: 'Project-level runtimes',
          title: 'Different projects. Different versions.',
          description:
            'Use the right runtime version for each project while keeping your global environment intact.',
          link: 'Project-level runtimes'
        },
        {
          label: 'Startup Groups',
          title: 'Start the full stack with one click.',
          description:
            'Group project dependencies, choose their startup order, and start or stop them together.',
          link: 'Explore Startup Groups'
        }
      ],
      native: 'Direct on your machine',
      library: 'Service library',
      onDemand: 'On demand',
      installed: 'Installed',
      install: 'Install',
      runtimes: 'Project runtimes',
      automatic: 'Automatic',
      laravel: 'Laravel stack',
      group: 'Startup Group',
      startAll: 'Start all services'
    }
  },
  zh: {
    openSource: '开源',
    native: '原生本地开发',
    heading: ['告别分散的工具，', '把开发集中在一个工作台。'],
    subtitle: '一站式原生本地开发环境。',
    description:
      '在一个可扩展的工作台中管理 PHP、Node.js、Python、数据库、Web 服务器、本地服务与 AI 工具，轻松构建、运行和迭代项目。',
    download: '下载 FlyEnv',
    demos: '观看演示',
    free: '免费开始',
    gettingStarted: '快速上手',
    compare: '与现用工具对比',
    multipleRuntimes: '多种运行时',
    extend: '按需扩展',
    oneWorkspace: '一个工作台，集中管理',
    categories: ['运行时', '数据库', 'Web 服务器', '本地服务', 'AI 工具', '插件'],
    workspace: {
      navigation: [
        '工作台',
        '概览',
        '站点',
        '运行时',
        '服务',
        '启动组',
        '扩展',
        '插件',
        'AI 与 MCP'
      ],
      yourProjects: '你的项目',
      heading: '本地工作台',
      projectCount: '3 个项目',
      nodeApp: 'Node 应用',
      laravel: 'Laravel 开发',
      readyToStart: '等待启动',
      ready: '就绪',
      running: '运行中',
      start: '启动组',
      stop: '停止组',
      summary: '4 项服务 · 一键启动',
      runningSummary: '4 项服务运行中',
      local: '本地环境',
      illustrative: '工作流示意'
    },
    why: {
      eyebrow: '原生运行',
      heading: '为你的电脑而生。',
      description: '本地环境应该适应你的开发方式。',
      cards: [
        {
          label: '原生服务',
          title: '直接在你的电脑上运行。',
          description: '在本机原生运行本地服务，直接访问配置、日志和文件。',
          link: '了解原生开发'
        },
        {
          label: '按需安装',
          title: '只安装用得到的工具。',
          description: '为项目选择所需的语言、数据库和服务，随项目发展添加更多工具。',
          link: '探索功能'
        },
        {
          label: '项目级运行时',
          title: '不同项目，各用各的版本。',
          description: '为每个项目使用合适的运行时版本，同时保持全局环境稳定。',
          link: '了解项目级运行时'
        },
        {
          label: '启动组',
          title: '一键启动完整技术栈。',
          description: '将项目依赖编入同一组，设定启动顺序，再统一启动或停止。',
          link: '探索启动组'
        }
      ],
      native: '直接在本机运行',
      library: '服务库',
      onDemand: '按需安装',
      installed: '已安装',
      install: '安装',
      runtimes: '项目运行时',
      automatic: '自动',
      laravel: 'Laravel 技术栈',
      group: '启动组',
      startAll: '启动所有服务'
    }
  },
  id: {
    openSource: 'Sumber terbuka',
    native: 'Pengembangan lokal native',
    heading: ['Dari berbagai alat', 'ke satu ruang kerja.'],
    subtitle: 'Lingkungan pengembangan lokal lengkap yang berjalan secara native.',
    description:
      'Kelola PHP, Node.js, Python, database, web server, layanan lokal, dan alat AI dalam satu ruang kerja yang dapat diperluas. Buat, jalankan, dan kembangkan project Anda.',
    download: 'Unduh FlyEnv',
    demos: 'Tonton demo',
    free: 'Mulai gratis',
    gettingStarted: 'Panduan memulai',
    compare: 'Bandingkan dengan alat Anda',
    multipleRuntimes: 'Beragam runtime',
    extend: 'Perluas sesuai kebutuhan',
    oneWorkspace: 'Satu ruang kerja untuk',
    categories: ['Runtime', 'Database', 'Web server', 'Layanan lokal', 'Alat AI', 'Plugin'],
    workspace: {
      navigation: [
        'Ruang kerja',
        'Ringkasan',
        'Situs',
        'Runtime',
        'Layanan',
        'Grup Startup',
        'Perluas',
        'Plugin',
        'AI & MCP'
      ],
      yourProjects: 'Project Anda',
      heading: 'Ruang kerja lokal',
      projectCount: '3 project',
      nodeApp: 'Aplikasi Node',
      laravel: 'Pengembangan Laravel',
      readyToStart: 'Siap dijalankan',
      ready: 'Siap',
      running: 'Berjalan',
      start: 'Jalankan grup',
      stop: 'Hentikan grup',
      summary: '4 layanan · 1 klik',
      runningSummary: '4 layanan berjalan',
      local: 'Lingkungan lokal',
      illustrative: 'Ilustrasi alur kerja'
    },
    why: {
      eyebrow: 'Dirancang untuk berjalan native',
      heading: 'Dibuat untuk komputer Anda.',
      description: 'Lingkungan lokal seharusnya sesuai dengan cara Anda mengembangkan project.',
      cards: [
        {
          label: 'Layanan native',
          title: 'Jalankan langsung di komputer Anda.',
          description:
            'Jalankan layanan lokal secara native dengan akses langsung ke konfigurasi, log, dan file.',
          link: 'Pengembangan native'
        },
        {
          label: 'Instalasi sesuai kebutuhan',
          title: 'Instal alat yang Anda gunakan.',
          description:
            'Pilih bahasa, database, dan layanan yang dibutuhkan project. Tambahkan alat sesuai perkembangan pekerjaan Anda.',
          link: 'Jelajahi fitur'
        },
        {
          label: 'Runtime per project',
          title: 'Project berbeda, versi berbeda.',
          description:
            'Gunakan versi runtime yang cocok untuk setiap project sambil mempertahankan lingkungan global.',
          link: 'Runtime per project'
        },
        {
          label: 'Grup Startup',
          title: 'Jalankan seluruh stack dengan satu klik.',
          description:
            'Kelompokkan dependensi project, tentukan urutan mulai, lalu jalankan atau hentikan semuanya sekaligus.',
          link: 'Jelajahi Grup Startup'
        }
      ],
      native: 'Langsung di komputer Anda',
      library: 'Pustaka layanan',
      onDemand: 'Sesuai kebutuhan',
      installed: 'Terpasang',
      install: 'Instal',
      runtimes: 'Runtime project',
      automatic: 'Otomatis',
      laravel: 'Stack Laravel',
      group: 'Grup Startup',
      startAll: 'Jalankan semua layanan'
    }
  },
  es: {
    openSource: 'Código abierto',
    native: 'Desarrollo local nativo',
    heading: ['De herramientas dispersas', 'a un solo espacio de trabajo.'],
    subtitle: 'El entorno de desarrollo local nativo todo en uno.',
    description:
      'Gestiona PHP, Node.js, Python, bases de datos, servidores web, servicios locales y herramientas de IA en un espacio de trabajo ampliable. Crea, ejecuta y mejora tus proyectos.',
    download: 'Descargar FlyEnv',
    demos: 'Ver demos',
    free: 'Empieza gratis',
    gettingStarted: 'Primeros pasos',
    compare: 'Compara con tus herramientas',
    multipleRuntimes: 'Varios runtimes',
    extend: 'Amplía cuando lo necesites',
    oneWorkspace: 'Un espacio de trabajo para',
    categories: [
      'Runtimes',
      'Bases de datos',
      'Servidores web',
      'Servicios locales',
      'Herramientas de IA',
      'Plugins'
    ],
    workspace: {
      navigation: [
        'Espacio de trabajo',
        'Vista general',
        'Sitios',
        'Runtimes',
        'Servicios',
        'Grupos de inicio',
        'Ampliar',
        'Plugins',
        'IA y MCP'
      ],
      yourProjects: 'Tus proyectos',
      heading: 'Espacio de trabajo local',
      projectCount: '3 proyectos',
      nodeApp: 'App de Node',
      laravel: 'Desarrollo con Laravel',
      readyToStart: 'Listo para iniciar',
      ready: 'Listo',
      running: 'En ejecución',
      start: 'Iniciar grupo',
      stop: 'Detener grupo',
      summary: '4 servicios · 1 clic',
      runningSummary: '4 servicios en ejecución',
      local: 'Entorno local',
      illustrative: 'Flujo de trabajo ilustrativo'
    },
    why: {
      eyebrow: 'Diseño nativo',
      heading: 'Hecho para tu equipo.',
      description: 'El entorno local debe adaptarse a tu forma de desarrollar.',
      cards: [
        {
          label: 'Servicios nativos',
          title: 'Ejecuta servicios en tu propio equipo.',
          description:
            'Ejecuta servicios locales de forma nativa, con acceso directo a tus archivos de configuración, registros y demás archivos.',
          link: 'Desarrollo nativo'
        },
        {
          label: 'Instalación bajo demanda',
          title: 'Instala solo lo que usas.',
          description:
            'Elige los lenguajes, bases de datos y servicios que requieren tus proyectos. Añade herramientas conforme las necesites.',
          link: 'Explorar funcionalidades'
        },
        {
          label: 'Runtimes por proyecto',
          title: 'Proyectos distintos. Versiones distintas.',
          description:
            'Usa la versión de runtime adecuada para cada proyecto y conserva tu entorno global.',
          link: 'Runtimes por proyecto'
        },
        {
          label: 'Grupos de inicio',
          title: 'Inicia toda la pila en un clic.',
          description:
            'Agrupa las dependencias del proyecto, elige el orden de inicio y arráncalas o detenlas juntas.',
          link: 'Explorar los grupos de inicio'
        }
      ],
      native: 'Directamente en tu equipo',
      library: 'Biblioteca de servicios',
      onDemand: 'Bajo demanda',
      installed: 'Instalado',
      install: 'Instalar',
      runtimes: 'Runtimes del proyecto',
      automatic: 'Automático',
      laravel: 'Pila Laravel',
      group: 'Grupo de inicio',
      startAll: 'Iniciar todos los servicios'
    }
  },
  vi: {
    openSource: 'Mã nguồn mở',
    native: 'Phát triển cục bộ chạy trực tiếp',
    heading: ['Từ nhiều công cụ rời rạc', 'đến một không gian làm việc.'],
    subtitle: 'Môi trường phát triển cục bộ tất cả trong một, chạy trực tiếp trên máy.',
    description:
      'Quản lý PHP, Node.js, Python, cơ sở dữ liệu, máy chủ web, dịch vụ cục bộ và công cụ AI trong một không gian làm việc có thể mở rộng. Xây dựng, chạy và cải tiến dự án của bạn.',
    download: 'Tải FlyEnv',
    demos: 'Xem bản demo',
    free: 'Bắt đầu miễn phí',
    gettingStarted: 'Hướng dẫn bắt đầu',
    compare: 'So sánh với công cụ bạn đang dùng',
    multipleRuntimes: 'Nhiều runtime',
    extend: 'Mở rộng khi cần',
    oneWorkspace: 'Một không gian làm việc cho',
    categories: [
      'Runtime',
      'Cơ sở dữ liệu',
      'Máy chủ web',
      'Dịch vụ cục bộ',
      'Công cụ AI',
      'Plugin'
    ],
    workspace: {
      navigation: [
        'Không gian làm việc',
        'Tổng quan',
        'Trang web',
        'Runtime',
        'Dịch vụ',
        'Nhóm khởi động',
        'Mở rộng',
        'Plugin',
        'AI và MCP'
      ],
      yourProjects: 'Dự án của bạn',
      heading: 'Không gian làm việc cục bộ',
      projectCount: '3 dự án',
      nodeApp: 'Ứng dụng Node',
      laravel: 'Phát triển Laravel',
      readyToStart: 'Sẵn sàng khởi động',
      ready: 'Sẵn sàng',
      running: 'Đang chạy',
      start: 'Khởi động nhóm',
      stop: 'Dừng nhóm',
      summary: '4 dịch vụ · 1 lần bấm',
      runningSummary: '4 dịch vụ đang chạy',
      local: 'Môi trường cục bộ',
      illustrative: 'Quy trình minh họa'
    },
    why: {
      eyebrow: 'Thiết kế để chạy trực tiếp',
      heading: 'Dành cho máy của bạn.',
      description: 'Môi trường cục bộ nên phù hợp với cách bạn phát triển.',
      cards: [
        {
          label: 'Dịch vụ chạy trực tiếp',
          title: 'Chạy trực tiếp trên máy của bạn.',
          description:
            'Chạy dịch vụ cục bộ ngay trên máy và truy cập trực tiếp vào cấu hình, nhật ký và tệp.',
          link: 'Phát triển trực tiếp trên máy'
        },
        {
          label: 'Cài đặt theo nhu cầu',
          title: 'Chỉ cài những gì bạn dùng.',
          description:
            'Chọn ngôn ngữ, cơ sở dữ liệu và dịch vụ cần cho dự án. Bổ sung công cụ khi công việc phát triển.',
          link: 'Khám phá tính năng'
        },
        {
          label: 'Runtime theo dự án',
          title: 'Mỗi dự án dùng phiên bản riêng.',
          description:
            'Dùng phiên bản runtime phù hợp cho từng dự án và giữ nguyên môi trường chung trên máy.',
          link: 'Runtime theo dự án'
        },
        {
          label: 'Nhóm khởi động',
          title: 'Khởi động cả stack chỉ với một lần bấm.',
          description:
            'Nhóm các thành phần mà dự án cần, chọn thứ tự khởi động rồi chạy hoặc dừng tất cả cùng lúc.',
          link: 'Khám phá nhóm khởi động'
        }
      ],
      native: 'Trực tiếp trên máy của bạn',
      library: 'Thư viện dịch vụ',
      onDemand: 'Theo nhu cầu',
      installed: 'Đã cài',
      install: 'Cài đặt',
      runtimes: 'Runtime dự án',
      automatic: 'Tự động',
      laravel: 'Stack Laravel',
      group: 'Nhóm khởi động',
      startAll: 'Khởi động mọi dịch vụ'
    }
  }
}
