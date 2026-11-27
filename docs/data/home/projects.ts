import type { DemoLocale } from '../demos'

export const homeProjects = [
  {
    slug: 'laravel',
    demoId: 'php-project-services',
    workflow: '/solutions/laravel'
  },
  {
    slug: 'erpnext',
    demoId: 'erpnext-local-project',
    workflow: '/solutions/erpnext'
  },
  {
    slug: 'local-ai-agent',
    demoId: 'offline-ai-agent',
    workflow: '/guide/build-local-offline-ai-agent'
  }
] as const

export const homeComparisons = [
  { slug: 'laragon', name: 'Laragon', mark: 'L', color: '#be2649' },
  { slug: 'servbay', name: 'ServBay', mark: 'S', color: '#2563eb' },
  { slug: 'herd', name: 'Laravel Herd', mark: 'H', color: '#c2282d' },
  { slug: 'xampp', name: 'XAMPP', mark: 'X', color: '#bb4d0b' },
  { slug: 'mamp', name: 'MAMP', mark: 'M', color: '#475569' },
  { slug: 'docker', name: 'Docker', mark: 'D', color: '#086e9f' }
] as const

export const flyEnvRepository = 'https://github.com/xpf0000/FlyEnv'

export const homeRepositoryLinks = [
  { id: 'source', path: '', icon: 'code' },
  { id: 'releases', path: '/releases', icon: 'package' },
  { id: 'issues', path: '/issues', icon: 'message' }
] as const

type ProjectSlug = (typeof homeProjects)[number]['slug']
type ComparisonSlug = (typeof homeComparisons)[number]['slug']
type RepositoryLinkId = (typeof homeRepositoryLinks)[number]['id']

type ProjectCopy = {
  title: string
  description: string
  demoTitle: string
}

type ProjectsSectionCopy = {
  projects: {
    eyebrow: string
    title: string
    description: string
    allSolutions: string
    watchDemo: string
    viewSolution: string
    viewWorkflow: string
    cards: Record<ProjectSlug, ProjectCopy>
    demosTitle: string
    demosDescription: string
    allDemos: string
  }
  comparisons: {
    eyebrow: string
    title: string
    description: string
    allTools: string
    cards: Record<ComparisonSlug, string>
  }
  openSource: {
    eyebrow: string
    title: [string, string]
    description: string
    github: string
    community: string
    public: string
    repositoryDescription: string
    repositoryLinks: Record<RepositoryLinkId, { label: string; description: string }>
    communityTitle: string
    communityDescription: string
    exploreCommunity: string
  }
}

export const homeProjectsCopy: Record<DemoLocale, ProjectsSectionCopy> = {
  en: {
    projects: {
      eyebrow: 'Real development',
      title: 'Real projects. Real workflows.',
      description:
        'See how FlyEnv brings entire development environments together — not just individual services.',
      allSolutions: 'All solutions',
      watchDemo: 'Watch Demo',
      viewSolution: 'View Solution',
      viewWorkflow: 'View Workflow',
      cards: {
        laravel: {
          title: 'A complete PHP application',
          description: 'Run a Laravel app with its web server, database and cache.',
          demoTitle: 'Deploy PHP app services without Docker'
        },
        erpnext: {
          title: 'Complex project dependencies',
          description: 'Bring a multi-service business application together.',
          demoTitle: 'Run ERPNext locally'
        },
        'local-ai-agent': {
          title: 'A local AI workflow',
          description: 'Connect local models and the development environment.',
          demoTitle: 'Build an offline local AI agent'
        }
      },
      demosTitle: 'See FlyEnv in action.',
      demosDescription:
        'Browse real project setups, module walkthroughs and development workflows.',
      allDemos: 'Watch all demos'
    },
    comparisons: {
      eyebrow: 'Looking for a better workflow?',
      title: 'More than a traditional local stack.',
      description: 'Coming from another local development tool? See what you can gain with FlyEnv.',
      allTools: 'Compare all tools',
      cards: {
        laragon: 'Beyond Windows',
        servbay: 'Open & extensible',
        herd: 'Beyond Laravel',
        xampp: 'Modular PHP stack',
        mamp: 'More than web servers',
        docker: 'Native development'
      }
    },
    openSource: {
      eyebrow: 'Built in the open',
      title: ['Open source,', 'not a black box.'],
      description:
        'Inspect the code, follow development, report issues or contribute. FlyEnv is built in public, with developers who use it every day.',
      github: 'View on GitHub',
      community: 'Community',
      public: 'Public',
      repositoryDescription: 'Native local development environment',
      repositoryLinks: {
        source: { label: 'Source code', description: 'Inspect how FlyEnv works' },
        releases: { label: 'Releases', description: 'Follow the latest updates' },
        issues: { label: 'Issues & discussions', description: 'Shape the next release' }
      },
      communityTitle: 'Built with developers, not just for them.',
      communityDescription: 'Discover community stories, contributions and real-world workflows.',
      exploreCommunity: 'Explore the community'
    }
  },
  zh: {
    projects: {
      eyebrow: '真实开发场景',
      title: '真实项目，真实工作流。',
      description: '看看 FlyEnv 如何把分散的服务整合为完整的开发环境。',
      allSolutions: '全部解决方案',
      watchDemo: '观看演示',
      viewSolution: '查看解决方案',
      viewWorkflow: '查看工作流',
      cards: {
        laravel: {
          title: '完整的 PHP 应用',
          description: '运行 Laravel 应用及其 Web 服务器、数据库和缓存。',
          demoTitle: '无需 Docker 部署 PHP 应用服务'
        },
        erpnext: {
          title: '依赖复杂的项目',
          description: '将业务应用所需的多个服务整合在一起。',
          demoTitle: '本地运行 ERPNext'
        },
        'local-ai-agent': {
          title: '本地 AI 工作流',
          description: '让本地模型与开发环境协同工作。',
          demoTitle: '构建离线本地 AI 智能体'
        }
      },
      demosTitle: '看看 FlyEnv 如何工作。',
      demosDescription: '浏览真实项目搭建过程、模块演示和开发工作流。',
      allDemos: '观看全部演示'
    },
    comparisons: {
      eyebrow: '想改善开发工作流？',
      title: '不止于传统的本地技术栈。',
      description: '正在使用其他本地开发工具？看看 FlyEnv 能为你带来什么。',
      allTools: '比较全部工具',
      cards: {
        laragon: '跨平台开发',
        servbay: '开放且可扩展',
        herd: '支持更多框架',
        xampp: '模块化 PHP 技术栈',
        mamp: '涵盖更多开发服务',
        docker: '原生开发'
      }
    },
    openSource: {
      eyebrow: '公开开发',
      title: ['开源透明，', '远离黑盒。'],
      description:
        '查看源码、关注开发进展、反馈问题或参与贡献。FlyEnv 与每天使用它的开发者一起公开开发。',
      github: '在 GitHub 上查看',
      community: '社区',
      public: '公开',
      repositoryDescription: '原生本地开发环境',
      repositoryLinks: {
        source: { label: '源代码', description: '了解 FlyEnv 如何运行' },
        releases: { label: '版本发布', description: '关注最新更新' },
        issues: { label: '问题与讨论', description: '参与下一版本的改进' }
      },
      communityTitle: '与开发者一起构建。',
      communityDescription: '了解社区故事、开发者贡献和真实工作流。',
      exploreCommunity: '探索社区'
    }
  },
  id: {
    projects: {
      eyebrow: 'Pengembangan nyata',
      title: 'Proyek nyata. Alur kerja nyata.',
      description:
        'Lihat cara FlyEnv menyatukan berbagai layanan menjadi lingkungan pengembangan yang lengkap.',
      allSolutions: 'Semua solusi',
      watchDemo: 'Tonton demo',
      viewSolution: 'Lihat solusi',
      viewWorkflow: 'Lihat alur kerja',
      cards: {
        laravel: {
          title: 'Aplikasi PHP yang lengkap',
          description: 'Jalankan aplikasi Laravel beserta server web, database, dan cache-nya.',
          demoTitle: 'Menerapkan layanan aplikasi PHP tanpa Docker'
        },
        erpnext: {
          title: 'Dependensi proyek yang kompleks',
          description: 'Satukan berbagai layanan yang dibutuhkan aplikasi bisnis.',
          demoTitle: 'Menjalankan ERPNext secara lokal'
        },
        'local-ai-agent': {
          title: 'Alur kerja AI lokal',
          description: 'Hubungkan model lokal ke lingkungan pengembangan.',
          demoTitle: 'Membangun agen AI lokal offline'
        }
      },
      demosTitle: 'Lihat FlyEnv beraksi.',
      demosDescription:
        'Jelajahi penyiapan proyek nyata, panduan modul, dan alur kerja pengembangan.',
      allDemos: 'Tonton semua demo'
    },
    comparisons: {
      eyebrow: 'Mencari alur kerja yang lebih baik?',
      title: 'Lebih dari sekadar stack lokal tradisional.',
      description: 'Beralih dari alat pengembangan lokal lain? Lihat apa yang FlyEnv tawarkan.',
      allTools: 'Bandingkan semua alat',
      cards: {
        laragon: 'Lintas platform',
        servbay: 'Terbuka dan dapat diperluas',
        herd: 'Mendukung lebih banyak framework',
        xampp: 'Stack PHP modular',
        mamp: 'Lebih banyak layanan',
        docker: 'Pengembangan native'
      }
    },
    openSource: {
      eyebrow: 'Dikembangkan secara terbuka',
      title: ['Kode sumber terbuka,', 'pengembangan transparan.'],
      description:
        'Periksa kode, ikuti pengembangan, laporkan masalah, atau ikut berkontribusi. FlyEnv dikembangkan secara terbuka bersama pengembang yang menggunakannya setiap hari.',
      github: 'Lihat di GitHub',
      community: 'Komunitas',
      public: 'Publik',
      repositoryDescription: 'Lingkungan pengembangan lokal native',
      repositoryLinks: {
        source: { label: 'Kode sumber', description: 'Pelajari cara kerja FlyEnv' },
        releases: { label: 'Rilis', description: 'Ikuti pembaruan terbaru' },
        issues: { label: 'Isu dan diskusi', description: 'Bantu menentukan arah rilis berikutnya' }
      },
      communityTitle: 'Dibuat bersama para pengembang.',
      communityDescription: 'Temukan kisah komunitas, kontribusi, dan alur kerja nyata.',
      exploreCommunity: 'Jelajahi komunitas'
    }
  },
  es: {
    projects: {
      eyebrow: 'Desarrollo real',
      title: 'Proyectos reales. Flujos de trabajo reales.',
      description:
        'Descubre cómo FlyEnv reúne todos los servicios de un proyecto en un entorno de desarrollo completo.',
      allSolutions: 'Todas las soluciones',
      watchDemo: 'Ver demo',
      viewSolution: 'Ver solución',
      viewWorkflow: 'Ver flujo de trabajo',
      cards: {
        laravel: {
          title: 'Una aplicación PHP completa',
          description: 'Ejecuta una aplicación Laravel con su servidor web, base de datos y caché.',
          demoTitle: 'Despliega servicios de aplicaciones PHP sin Docker'
        },
        erpnext: {
          title: 'Dependencias de proyecto complejas',
          description: 'Reúne los servicios que necesita una aplicación empresarial.',
          demoTitle: 'Ejecuta ERPNext en local'
        },
        'local-ai-agent': {
          title: 'Un flujo de trabajo con IA local',
          description: 'Conecta modelos locales con el entorno de desarrollo.',
          demoTitle: 'Crea un agente de IA local sin conexión'
        }
      },
      demosTitle: 'Mira FlyEnv en acción.',
      demosDescription:
        'Explora configuraciones de proyectos reales, demostraciones de módulos y flujos de desarrollo.',
      allDemos: 'Ver todas las demos'
    },
    comparisons: {
      eyebrow: '¿Buscas mejorar tu flujo de trabajo?',
      title: 'Más que un stack local tradicional.',
      description:
        '¿Vienes de otra herramienta de desarrollo local? Descubre qué te ofrece FlyEnv.',
      allTools: 'Comparar todas las herramientas',
      cards: {
        laragon: 'Más allá de Windows',
        servbay: 'Abierto y extensible',
        herd: 'Más allá de Laravel',
        xampp: 'Stack PHP modular',
        mamp: 'Más servicios de desarrollo',
        docker: 'Desarrollo nativo'
      }
    },
    openSource: {
      eyebrow: 'Desarrollo abierto',
      title: ['Código abierto,', 'desarrollo transparente.'],
      description:
        'Consulta el código, sigue el desarrollo, informa de problemas o contribuye. FlyEnv se desarrolla en público con quienes lo usan a diario.',
      github: 'Ver en GitHub',
      community: 'Comunidad',
      public: 'Público',
      repositoryDescription: 'Entorno de desarrollo local nativo',
      repositoryLinks: {
        source: { label: 'Código fuente', description: 'Consulta cómo funciona FlyEnv' },
        releases: { label: 'Versiones', description: 'Sigue las últimas novedades' },
        issues: {
          label: 'Incidencias y debates',
          description: 'Ayuda a mejorar la próxima versión'
        }
      },
      communityTitle: 'Creado junto a quienes desarrollan.',
      communityDescription:
        'Descubre historias de la comunidad, contribuciones y flujos de trabajo reales.',
      exploreCommunity: 'Explorar la comunidad'
    }
  },
  vi: {
    projects: {
      eyebrow: 'Phát triển thực tế',
      title: 'Dự án thật. Quy trình thật.',
      description:
        'Xem FlyEnv tập hợp các dịch vụ của dự án thành một môi trường phát triển hoàn chỉnh.',
      allSolutions: 'Tất cả giải pháp',
      watchDemo: 'Xem demo',
      viewSolution: 'Xem giải pháp',
      viewWorkflow: 'Xem quy trình',
      cards: {
        laravel: {
          title: 'Một ứng dụng PHP hoàn chỉnh',
          description: 'Chạy ứng dụng Laravel cùng máy chủ web, cơ sở dữ liệu và bộ nhớ đệm.',
          demoTitle: 'Triển khai dịch vụ ứng dụng PHP không cần Docker'
        },
        erpnext: {
          title: 'Dự án có nhiều phần phụ thuộc',
          description: 'Tập hợp các dịch vụ mà một ứng dụng doanh nghiệp cần.',
          demoTitle: 'Chạy ERPNext local'
        },
        'local-ai-agent': {
          title: 'Quy trình AI cục bộ',
          description: 'Kết nối các mô hình cục bộ với môi trường phát triển.',
          demoTitle: 'Xây dựng AI agent local chạy offline'
        }
      },
      demosTitle: 'Xem FlyEnv hoạt động.',
      demosDescription:
        'Khám phá cách thiết lập dự án thật, sử dụng mô-đun và tổ chức quy trình phát triển.',
      allDemos: 'Xem tất cả demo'
    },
    comparisons: {
      eyebrow: 'Bạn muốn cải thiện quy trình phát triển?',
      title: 'Hơn cả một bộ công cụ cục bộ truyền thống.',
      description:
        'Đang dùng công cụ phát triển cục bộ khác? Xem FlyEnv có thể mang lại gì cho bạn.',
      allTools: 'So sánh tất cả công cụ',
      cards: {
        laragon: 'Hỗ trợ nhiều nền tảng',
        servbay: 'Mở và dễ mở rộng',
        herd: 'Hỗ trợ nhiều framework',
        xampp: 'Bộ công cụ PHP theo mô-đun',
        mamp: 'Nhiều dịch vụ phát triển hơn',
        docker: 'Phát triển trực tiếp trên máy'
      }
    },
    openSource: {
      eyebrow: 'Phát triển công khai',
      title: ['Mã nguồn mở,', 'phát triển minh bạch.'],
      description:
        'Xem mã nguồn, theo dõi quá trình phát triển, báo lỗi hoặc đóng góp. FlyEnv được phát triển công khai cùng những lập trình viên sử dụng công cụ mỗi ngày.',
      github: 'Xem trên GitHub',
      community: 'Cộng đồng',
      public: 'Công khai',
      repositoryDescription: 'Môi trường phát triển chạy trực tiếp trên máy',
      repositoryLinks: {
        source: { label: 'Mã nguồn', description: 'Tìm hiểu cách FlyEnv hoạt động' },
        releases: { label: 'Bản phát hành', description: 'Theo dõi các cập nhật mới nhất' },
        issues: { label: 'Vấn đề và thảo luận', description: 'Góp ý cho bản phát hành tiếp theo' }
      },
      communityTitle: 'Được xây dựng cùng cộng đồng lập trình viên.',
      communityDescription: 'Khám phá các câu chuyện, đóng góp và quy trình thực tế từ cộng đồng.',
      exploreCommunity: 'Khám phá cộng đồng'
    }
  }
}
