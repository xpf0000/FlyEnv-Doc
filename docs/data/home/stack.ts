export type HomeStackLocale = 'en' | 'zh' | 'id' | 'es' | 'vi'

interface HomeStackCopy {
  stack: {
    eyebrow: string
    title: string
    description: string
    explore: string
    categories: [string, string, string, string, string]
    note: string
  }
  plugins: {
    name: string
    title: [string, string]
    description: string
    points: [string, string, string]
    explore: string
    licenseNote: string
    licenseLink: string
    screenshotAlt: string
    screenshotCaption: string
    floatTitle: string
    floatDescription: string
    moreTitle: string
    modules: [string, string, string, string]
  }
  ai: {
    eyebrow: string
    title: string
    description: string
    diagramLabel: string
    integration: string
    coreTitle: string
    coreDescription: string
    environment: [string, string, string]
    memory: [string, string, string]
    caption: string
    capabilities: [
      { title: string; description: string; link: string },
      { title: string; description: string; link: string },
      { title: string; description: string; link: string }
    ]
    steps: [string, string, string, string, string]
  }
}

export const homeStackCopy: Record<HomeStackLocale, HomeStackCopy> = {
  en: {
    stack: {
      eyebrow: 'The complete local stack',
      title: 'Your tools. Together at last.',
      description:
        'Choose what each project needs, from a simple PHP site to a multi-service application.',
      explore: 'Explore all features',
      categories: [
        'Runtimes',
        'Databases & cache',
        'Web servers',
        'Developer services',
        'AI development'
      ],
      note: 'Availability varies by platform and module. Explore the feature pages for details.'
    },
    plugins: {
      name: 'Plugin Marketplace',
      title: ['Broad in capability.', 'Focused in experience.'],
      description:
        'Start with the tools you need today. Add services, developer utilities and AI capabilities when your next project calls for them.',
      points: [
        'Install optional modules on demand',
        'Extend with official and third-party plugins',
        'Keep your daily workspace focused'
      ],
      explore: 'Explore Plugin Marketplace',
      licenseNote: 'Installing and updating plugins requires an active FlyEnv license. See',
      licenseLink: 'license options',
      screenshotAlt:
        'FlyEnv Plugin Marketplace showing MySQL Cluster, MariaDB Cluster and other official plugins',
      screenshotCaption: 'FlyEnv Plugin Marketplace screenshot',
      floatTitle: 'One workspace, more possibilities.',
      floatDescription: 'Add only what your projects need.',
      moreTitle: 'More plugins',
      modules: [
        'Persistent project context',
        'Multiple local instances',
        'Local model inference',
        'Explore the ecosystem'
      ]
    },
    ai: {
      eyebrow: 'Ready for AI agents',
      title: 'AI writes your code. FlyEnv runs your stack.',
      description:
        'Give coding agents access to the local environment they need to run, test and improve real projects.',
      diagramLabel: 'One environment · Multiple agents',
      integration: 'MCP integration',
      coreTitle: 'FlyEnv MCP integrations',
      coreDescription: 'Environment tools · memory plugin',
      environment: ['Local environment', 'Runtimes · services · sites', 'Ready to run'],
      memory: ['Shared AI Memory', 'Context · decisions · knowledge', 'Local memory plugin'],
      caption: 'Illustrative agent workflow',
      capabilities: [
        {
          title: 'Prepare and run the environment.',
          description:
            'Connect compatible coding agents through FlyEnv MCP to manage local services and sites.',
          link: 'Explore MCP Server'
        },
        {
          title: 'Keep context across agents.',
          description:
            'Share persistent project knowledge and decisions locally through the AI Memory plugin.',
          link: 'Explore AI Memory'
        },
        {
          title: 'Build your local AI stack.',
          description:
            'Manage local models, API proxies and supporting services alongside your application.',
          link: 'See a local AI workflow'
        }
      ],
      steps: ['Ask', 'Prepare', 'Run', 'Test & improve', 'Remember']
    }
  },
  zh: {
    stack: {
      eyebrow: '完整的本地开发技术栈',
      title: '所需工具，齐聚一处。',
      description: '从简单的 PHP 网站到依赖多项服务的应用，按项目选择所需组件。',
      explore: '查看所有功能',
      categories: ['运行时', '数据库和缓存', 'Web 服务器', '开发服务', 'AI 开发'],
      note: '可用性因平台和模块而异，详情请参阅各功能页面。'
    },
    plugins: {
      name: '插件市场',
      title: ['功能丰富，', '工作区依然清爽。'],
      description: '从当前所需的工具开始。后续项目需要时，再添加服务、开发工具和 AI 功能。',
      points: ['按需安装可选模块', '通过官方和第三方插件扩展功能', '让日常工作区保持简洁'],
      explore: '探索插件市场',
      licenseNote: '安装和更新插件需要已激活的 FlyEnv 许可证。查看',
      licenseLink: '许可证选项',
      screenshotAlt: 'FlyEnv 插件市场展示 MySQL Cluster、MariaDB Cluster 和其他官方插件',
      screenshotCaption: 'FlyEnv 插件市场界面截图',
      floatTitle: '一个工作区，更多可能。',
      floatDescription: '只添加项目所需的工具。',
      moreTitle: '更多插件',
      modules: ['持久保存项目上下文', '运行多个本地实例', '本地模型推理', '探索插件生态']
    },
    ai: {
      eyebrow: '为 AI 智能体准备就绪',
      title: 'AI 编写代码，FlyEnv 运行技术栈。',
      description: '让编程智能体访问本地环境，以运行、测试和改进真实项目。',
      diagramLabel: '一个环境 · 多个智能体',
      integration: 'MCP 集成',
      coreTitle: 'FlyEnv MCP 集成',
      coreDescription: '环境工具 · 记忆插件',
      environment: ['本地环境', '运行时 · 服务 · 站点', '就绪可运行'],
      memory: ['共享 AI 记忆', '上下文 · 决策 · 知识', '本地记忆插件'],
      caption: '智能体工作流程示意',
      capabilities: [
        {
          title: '准备并运行本地环境',
          description: '通过 FlyEnv MCP 连接兼容的编程智能体，管理本地服务和站点。',
          link: '了解 MCP Server'
        },
        {
          title: '在智能体之间保留上下文',
          description: '通过 AI Memory 插件持久保存项目知识和决策，并在本地共享。',
          link: '了解 AI Memory'
        },
        {
          title: '搭建本地 AI 技术栈',
          description: '在同一工作区管理应用、本地模型、API 代理和配套服务。',
          link: '查看本地 AI 工作流程'
        }
      ],
      steps: ['提出需求', '准备环境', '运行', '测试与改进', '保存记忆']
    }
  },
  id: {
    stack: {
      eyebrow: 'Stack lokal yang lengkap',
      title: 'Semua alat Anda dalam satu tempat.',
      description:
        'Pilih komponen yang dibutuhkan tiap proyek, dari situs PHP sederhana hingga aplikasi dengan banyak layanan.',
      explore: 'Jelajahi semua fitur',
      categories: [
        'Runtime',
        'Database dan cache',
        'Server web',
        'Layanan pengembangan',
        'Pengembangan AI'
      ],
      note: 'Ketersediaan berbeda menurut platform dan modul. Lihat halaman fitur untuk detailnya.'
    },
    plugins: {
      name: 'Plugin Marketplace',
      title: ['Banyak kemampuan.', 'Ruang kerja tetap terfokus.'],
      description:
        'Mulai dengan alat yang Anda perlukan sekarang. Tambahkan layanan, utilitas pengembangan, dan fitur AI saat proyek berikutnya membutuhkannya.',
      points: [
        'Instal modul opsional sesuai kebutuhan',
        'Tambahkan fitur lewat plugin resmi dan pihak ketiga',
        'Jaga ruang kerja harian tetap rapi'
      ],
      explore: 'Jelajahi Plugin Marketplace',
      licenseNote: 'Instalasi dan pembaruan plugin memerlukan lisensi FlyEnv yang aktif. Lihat',
      licenseLink: 'pilihan lisensi',
      screenshotAlt:
        'Plugin Marketplace FlyEnv yang menampilkan MySQL Cluster, MariaDB Cluster, dan plugin resmi lainnya',
      screenshotCaption: 'Tangkapan layar Plugin Marketplace FlyEnv',
      floatTitle: 'Satu ruang kerja, lebih banyak kemungkinan.',
      floatDescription: 'Tambahkan alat sesuai kebutuhan proyek.',
      moreTitle: 'Plugin lainnya',
      modules: [
        'Konteks proyek yang tersimpan',
        'Beberapa instans lokal',
        'Inferensi model lokal',
        'Jelajahi ekosistem plugin'
      ]
    },
    ai: {
      eyebrow: 'Siap untuk agen AI',
      title: 'AI menulis kode. FlyEnv menjalankan stack Anda.',
      description:
        'Beri agen pemrograman akses ke lingkungan lokal untuk menjalankan, menguji, dan menyempurnakan proyek nyata.',
      diagramLabel: 'Satu lingkungan · Banyak agen',
      integration: 'Integrasi MCP',
      coreTitle: 'Integrasi MCP FlyEnv',
      coreDescription: 'Alat lingkungan · plugin memori',
      environment: ['Lingkungan lokal', 'Runtime · layanan · situs', 'Siap berjalan'],
      memory: ['Memori AI bersama', 'Konteks · keputusan · pengetahuan', 'Plugin memori lokal'],
      caption: 'Ilustrasi alur kerja agen',
      capabilities: [
        {
          title: 'Siapkan dan jalankan lingkungan.',
          description:
            'Hubungkan agen pemrograman yang kompatibel lewat FlyEnv MCP untuk mengelola layanan dan situs lokal.',
          link: 'Jelajahi MCP Server'
        },
        {
          title: 'Pertahankan konteks antaragen.',
          description:
            'Bagikan pengetahuan dan keputusan proyek yang tersimpan secara lokal lewat plugin AI Memory.',
          link: 'Jelajahi AI Memory'
        },
        {
          title: 'Bangun stack AI lokal Anda.',
          description:
            'Kelola model lokal, proksi API, dan layanan pendukung bersama aplikasi Anda.',
          link: 'Lihat alur kerja AI lokal'
        }
      ],
      steps: ['Minta', 'Siapkan', 'Jalankan', 'Uji dan tingkatkan', 'Simpan']
    }
  },
  es: {
    stack: {
      eyebrow: 'El stack local completo',
      title: 'Todas tus herramientas, por fin juntas.',
      description:
        'Elige lo que necesita cada proyecto, desde un sitio PHP sencillo hasta una aplicación con varios servicios.',
      explore: 'Explorar todas las funciones',
      categories: [
        'Entornos de ejecución',
        'Bases de datos y caché',
        'Servidores web',
        'Servicios de desarrollo',
        'Desarrollo con IA'
      ],
      note: 'La disponibilidad depende de la plataforma y del módulo. Consulta las páginas de cada función para ver los detalles.'
    },
    plugins: {
      name: 'Mercado de plugins',
      title: ['Más posibilidades.', 'Un espacio de trabajo despejado.'],
      description:
        'Empieza con las herramientas que necesitas hoy. Añade servicios, utilidades de desarrollo y funciones de IA cuando tu próximo proyecto los requiera.',
      points: [
        'Instala módulos opcionales según los necesites',
        'Amplía las funciones con plugins oficiales y de terceros',
        'Mantén ordenado tu espacio de trabajo diario'
      ],
      explore: 'Explorar el mercado de plugins',
      licenseNote:
        'Para instalar y actualizar plugins necesitas una licencia activa de FlyEnv. Consulta las',
      licenseLink: 'opciones de licencia',
      screenshotAlt:
        'Mercado de plugins de FlyEnv con MySQL Cluster, MariaDB Cluster y otros plugins oficiales',
      screenshotCaption: 'Captura del mercado de plugins de FlyEnv',
      floatTitle: 'Un espacio de trabajo, más posibilidades.',
      floatDescription: 'Añade solo lo que necesiten tus proyectos.',
      moreTitle: 'Más plugins',
      modules: [
        'Contexto persistente del proyecto',
        'Varias instancias locales',
        'Inferencia de modelos locales',
        'Explora el ecosistema'
      ]
    },
    ai: {
      eyebrow: 'Listo para agentes de IA',
      title: 'La IA escribe tu código. FlyEnv ejecuta tu stack.',
      description:
        'Da a los agentes de programación acceso al entorno local para ejecutar, probar y mejorar proyectos reales.',
      diagramLabel: 'Un entorno · Varios agentes',
      integration: 'Integración MCP',
      coreTitle: 'Integraciones MCP de FlyEnv',
      coreDescription: 'Herramientas de entorno · plugin de memoria',
      environment: [
        'Entorno local',
        'Entornos de ejecución · servicios · sitios',
        'Listo para funcionar'
      ],
      memory: [
        'Memoria de IA compartida',
        'Contexto · decisiones · conocimiento',
        'Plugin de memoria local'
      ],
      caption: 'Flujo de trabajo del agente a modo de ejemplo',
      capabilities: [
        {
          title: 'Prepara y ejecuta el entorno.',
          description:
            'Conecta agentes de programación compatibles a través de FlyEnv MCP para gestionar servicios y sitios locales.',
          link: 'Explorar MCP Server'
        },
        {
          title: 'Conserva el contexto entre agentes.',
          description:
            'Comparte de forma local conocimientos y decisiones del proyecto que quedan guardados mediante el plugin AI Memory.',
          link: 'Explorar AI Memory'
        },
        {
          title: 'Crea tu stack local de IA.',
          description:
            'Gestiona modelos locales, proxies de API y servicios de apoyo junto a tu aplicación.',
          link: 'Ver un flujo de trabajo de IA local'
        }
      ],
      steps: ['Pedir', 'Preparar', 'Ejecutar', 'Probar y mejorar', 'Guardar']
    }
  },
  vi: {
    stack: {
      eyebrow: 'Bộ công nghệ phát triển cục bộ đầy đủ',
      title: 'Mọi công cụ bạn cần ở cùng một nơi.',
      description:
        'Chọn thành phần phù hợp với từng dự án, từ website PHP đơn giản đến ứng dụng có nhiều dịch vụ.',
      explore: 'Khám phá mọi tính năng',
      categories: [
        'Runtime',
        'Cơ sở dữ liệu và bộ nhớ đệm',
        'Máy chủ web',
        'Dịch vụ phát triển',
        'Phát triển với AI'
      ],
      note: 'Mức độ hỗ trợ tùy theo nền tảng và mô-đun. Xem chi tiết trên từng trang tính năng.'
    },
    plugins: {
      name: 'Kho plugin',
      title: ['Nhiều tính năng.', 'Không gian làm việc gọn gàng.'],
      description:
        'Bắt đầu với các công cụ bạn cần ngay hôm nay. Thêm dịch vụ, tiện ích phát triển và tính năng AI khi dự án tiếp theo cần đến.',
      points: [
        'Cài đặt mô-đun tùy chọn khi cần',
        'Mở rộng bằng plugin chính thức và của bên thứ ba',
        'Giữ không gian làm việc hằng ngày gọn gàng'
      ],
      explore: 'Khám phá kho plugin',
      licenseNote: 'Bạn cần giấy phép FlyEnv đang hoạt động để cài đặt và cập nhật plugin. Xem',
      licenseLink: 'các lựa chọn giấy phép',
      screenshotAlt:
        'Kho plugin FlyEnv hiển thị MySQL Cluster, MariaDB Cluster và các plugin chính thức khác',
      screenshotCaption: 'Ảnh chụp kho plugin FlyEnv',
      floatTitle: 'Một không gian làm việc, nhiều khả năng hơn.',
      floatDescription: 'Chỉ thêm những gì dự án cần.',
      moreTitle: 'Thêm plugin',
      modules: [
        'Lưu giữ ngữ cảnh dự án',
        'Nhiều máy chủ cục bộ',
        'Suy luận mô hình cục bộ',
        'Khám phá hệ sinh thái'
      ]
    },
    ai: {
      eyebrow: 'Sẵn sàng cho tác nhân AI',
      title: 'AI viết mã. FlyEnv chạy bộ công nghệ của bạn.',
      description:
        'Cho tác nhân lập trình truy cập môi trường cục bộ để chạy, kiểm thử và cải tiến các dự án thực tế.',
      diagramLabel: 'Một môi trường · Nhiều tác nhân',
      integration: 'Tích hợp MCP',
      coreTitle: 'Tích hợp MCP của FlyEnv',
      coreDescription: 'Công cụ môi trường · plugin bộ nhớ',
      environment: ['Môi trường cục bộ', 'Runtime · dịch vụ · website', 'Sẵn sàng chạy'],
      memory: ['Bộ nhớ AI dùng chung', 'Ngữ cảnh · quyết định · kiến thức', 'Plugin bộ nhớ cục bộ'],
      caption: 'Minh họa quy trình làm việc của tác nhân',
      capabilities: [
        {
          title: 'Chuẩn bị và chạy môi trường.',
          description:
            'Kết nối tác nhân lập trình tương thích qua FlyEnv MCP để quản lý dịch vụ và website cục bộ.',
          link: 'Khám phá MCP Server'
        },
        {
          title: 'Giữ ngữ cảnh giữa các tác nhân.',
          description:
            'Lưu giữ và chia sẻ kiến thức cùng quyết định của dự án cục bộ qua plugin AI Memory.',
          link: 'Khám phá AI Memory'
        },
        {
          title: 'Xây dựng bộ công nghệ AI cục bộ.',
          description: 'Quản lý mô hình cục bộ, proxy API và dịch vụ hỗ trợ cùng với ứng dụng.',
          link: 'Xem quy trình làm việc với AI cục bộ'
        }
      ],
      steps: ['Yêu cầu', 'Chuẩn bị', 'Chạy', 'Kiểm thử và cải tiến', 'Lưu vào bộ nhớ']
    }
  }
}
