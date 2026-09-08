import type { SolutionSlug } from './solution-details'

interface LocalEnvironmentItem {
  title: string
  description: string
}

export interface SolutionAboutContent {
  paragraphs?: string[]
  replaceOverview?: boolean
  introduction?: string
  capabilities: string[]
  useCases: string[]
  localEnvironment: {
    title: string
    description: string
    items: LocalEnvironmentItem[]
  }
}

export const solutionAboutGroupA: {
  en: Partial<Record<SolutionSlug, SolutionAboutContent>>
  zh: Partial<Record<SolutionSlug, SolutionAboutContent>>
  id: Partial<Record<SolutionSlug, SolutionAboutContent>>
} = {
  en: {
    laravel: {
      replaceOverview: true,
      paragraphs: [
        'Laravel is a PHP framework for full-stack web applications and APIs. Its conventions bring routing, dependency injection, Eloquent models, validation, authentication, events, and templating into a coherent application structure.',
        'A Laravel project often starts with PHP, Composer, and a database. Features such as queued notifications, scheduled commands, cached data, and Vite-built assets add framework-specific processes that need to run beside the application.'
      ],
      capabilities: [
        'Eloquent ORM',
        'Artisan CLI',
        'Blade Templates',
        'Queues & Events',
        'Task Scheduler',
        'Migrations'
      ],
      useCases: [
        'Subscription products and customer portals',
        'Business systems with role-based workflows',
        'E-commerce backends',
        'Content-driven web applications',
        'REST APIs for web or mobile clients'
      ],
      localEnvironment: {
        title: 'A Laravel environment includes its application workflow',
        description:
          'The exact stack varies by project, but Laravel teams commonly develop application code, schema changes, workers, and frontend assets together.',
        items: [
          {
            title: 'PHP and Composer',
            description: 'Run the application and install the packages recorded in composer.lock.'
          },
          {
            title: 'MySQL or PostgreSQL',
            description:
              'Eloquent models and Laravel migrations commonly manage the project schema here.'
          },
          {
            title: 'Artisan workers and scheduler',
            description:
              'Run queue:work and schedule:work only when queued jobs or scheduled commands are configured.'
          },
          {
            title: 'Redis and Vite when used',
            description:
              'Redis is a common cache, session, or queue backend; Node.js and Vite are needed for projects that build frontend assets.'
          }
        ]
      }
    },
    django: {
      replaceOverview: true,
      paragraphs: [
        'Django is a high-level Python web framework built around reusable apps, a mature ORM, migrations, forms, authentication, and an automatic administration interface. It is particularly suited to database-backed sites whose business rules and content models evolve together.',
        'Development normally begins inside a Python virtual environment with manage.py coordinating the project. Deployable applications may also need a relational database, static and media handling, and Celery processes when asynchronous work is part of the design.'
      ],
      capabilities: [
        'Django ORM',
        'Admin Site',
        'Migrations',
        'Forms',
        'Authentication',
        'ASGI Support'
      ],
      useCases: [
        'Editorial and membership websites',
        'Data-heavy business applications',
        'Back-office tools built around the admin',
        'Marketplace or directory platforms',
        'APIs paired with Django REST Framework'
      ],
      localEnvironment: {
        title: 'A Django project is more than runserver',
        description:
          'manage.py coordinates framework tasks, while project choices determine which supporting processes are needed locally.',
        items: [
          {
            title: 'Python environment',
            description:
              'A venv, uv, or Poetry environment keeps Django and project dependencies isolated.'
          },
          {
            title: 'PostgreSQL or MySQL',
            description:
              'Production-like Django projects commonly use a relational database and apply schema changes with manage.py migrate.'
          },
          {
            title: 'Static and media files',
            description:
              'Templates, collected static assets, and user uploads require separate local paths and configuration.'
          },
          {
            title: 'Celery broker and worker when configured',
            description:
              'Redis or RabbitMQ and a Celery worker are relevant only for projects that run background tasks.'
          }
        ]
      }
    },
    fastapi: {
      replaceOverview: true,
      paragraphs: [
        'FastAPI is a Python framework for building typed HTTP APIs. Type hints drive validation, serialization, dependency injection, and OpenAPI documentation, while its ASGI foundation supports asynchronous endpoints and WebSockets.',
        'A local FastAPI service is usually run through an ASGI server such as Uvicorn. The rest of the environment should follow the service itself: an ORM-backed database for durable data, migrations, and optional worker or broker processes for asynchronous workloads.'
      ],
      capabilities: [
        'Type-driven Validation',
        'OpenAPI Documentation',
        'Dependency Injection',
        'Async ASGI Endpoints',
        'WebSockets',
        'Pydantic Models'
      ],
      useCases: [
        'Typed REST APIs',
        'Backend services for mobile applications',
        'Data and ML service endpoints',
        'Async integration APIs',
        'Internal API platforms'
      ],
      localEnvironment: {
        title: 'A FastAPI environment follows the service contract',
        description:
          'The framework itself is deliberately small, so local dependencies should reflect the API implementation rather than a preset stack.',
        items: [
          {
            title: 'Python and ASGI server',
            description:
              'Run the application with its locked Python dependencies and an ASGI server such as Uvicorn.'
          },
          {
            title: 'Database and migrations',
            description:
              'PostgreSQL or another selected database is paired with the project ORM and migration tool.'
          },
          {
            title: 'API clients and secure origin',
            description:
              'A local domain and HTTPS can matter for browser clients, OAuth redirects, or webhook callback testing.'
          },
          {
            title: 'Broker and workers when designed in',
            description:
              'Redis, RabbitMQ, or a worker process belongs only where the API explicitly offloads background work.'
          }
        ]
      }
    },
    flask: {
      replaceOverview: true,
      paragraphs: [
        'Flask is a lightweight Python web framework centered on routing, request handling, Jinja templates, and explicit extension choices. Its small core lets teams decide how to organize blueprints, persistence, authentication, command-line tasks, and deployment.',
        'That flexibility makes a Flask local environment project-specific. A small application may use only a virtual environment and the Flask development server; an application with SQLAlchemy, Alembic migrations, asset builds, or background tasks gains those services deliberately.'
      ],
      capabilities: [
        'Blueprints',
        'Jinja Templates',
        'Werkzeug Routing',
        'CLI Commands',
        'Extension Ecosystem',
        'WSGI Applications'
      ],
      useCases: [
        'Small web applications',
        'Custom internal tools',
        'JSON APIs',
        'Service prototypes',
        'Server-rendered sites with tailored architecture'
      ],
      localEnvironment: {
        title: 'Flask keeps the local stack intentionally explicit',
        description:
          'Unlike a batteries-included framework, Flask does not imply every supporting service; the project configuration is the source of truth.',
        items: [
          {
            title: 'Python virtual environment',
            description: 'Isolates Flask and the extensions chosen by the application.'
          },
          {
            title: 'Flask CLI and development server',
            description:
              'Run flask commands for the configured app factory, shell tasks, or local server.'
          },
          {
            title: 'Database and Alembic when used',
            description:
              'SQLAlchemy-backed applications commonly add a database and Alembic migration workflow.'
          },
          {
            title: 'Task worker only when configured',
            description:
              'Celery, RQ, or another worker service is optional and should match the application code.'
          }
        ]
      }
    },
    wordpress: {
      replaceOverview: true,
      paragraphs: [
        'WordPress is a PHP content management system whose core, themes, plugins, block editor, media library, and template hierarchy make publishing sites extensible without turning every content change into a deployment.',
        'Local WordPress work is commonly centered on a PHP web server, MySQL or MariaDB, and a stable local site address. Theme and plugin development also involves uploads, rewrite rules, and WP-CLI; Node.js is relevant only when the selected theme or block tooling uses it.'
      ],
      capabilities: [
        'Block Editor',
        'Theme Hierarchy',
        'Plugin API',
        'Media Library',
        'Custom Post Types',
        'WP-CLI'
      ],
      useCases: [
        'Marketing and company websites',
        'Editorial publications',
        'Membership or community sites',
        'Custom theme and plugin development',
        'Small commerce sites with WooCommerce'
      ],
      localEnvironment: {
        title: 'A WordPress site includes content and extension workflows',
        description:
          'The local setup needs to behave like a site, not just execute PHP, so authors and developers can test URLs, assets, and extensions together.',
        items: [
          {
            title: 'PHP web server and local domain',
            description:
              'Serve the site through its permalink-aware local URL and the PHP version supported by the installed release.'
          },
          {
            title: 'MySQL or MariaDB',
            description: 'Stores posts, users, options, taxonomy, and plugin or theme settings.'
          },
          {
            title: 'wp-content uploads and extensions',
            description:
              'Keep media uploads, themes, and plugins available as part of the project fixture.'
          },
          {
            title: 'WP-CLI and Node.js when needed',
            description:
              'WP-CLI supports repeatable site tasks; Node.js is optional for themes or custom block build pipelines.'
          }
        ]
      }
    },
    drupal: {
      replaceOverview: true,
      paragraphs: [
        'Drupal is a PHP CMS for structured, highly configurable digital experiences. Content entities, fields, taxonomy, Views, configuration management, permissions, and multilingual tools let teams model complex information and editorial workflows.',
        'Drupal development commonly combines Composer-managed PHP code with a relational database and a web server. Configuration synchronization, Drush commands, file storage, and optional frontend builds are as important to a reliable local project as opening the homepage.'
      ],
      capabilities: [
        'Content Entities',
        'Fields & Taxonomy',
        'Views',
        'Configuration Management',
        'Permissions',
        'Multilingual Content'
      ],
      useCases: [
        'Government and public-service websites',
        'Multilingual institutional sites',
        'Content platforms with complex taxonomy',
        'Editorial sites with governed workflows',
        'Custom module development'
      ],
      localEnvironment: {
        title: 'A Drupal environment preserves structure and configuration',
        description:
          'Content models and exported configuration are central to Drupal work, so local setup must support repeatable imports and extension changes.',
        items: [
          {
            title: 'PHP and Composer',
            description: 'Composer manages Drupal core, contributed modules, and project libraries.'
          },
          {
            title: 'Database and configuration sync',
            description:
              'The database holds content while exported configuration is commonly imported and exported with Drupal tools.'
          },
          {
            title: 'Drush',
            description:
              'Drush is used for cache rebuilds, updates, configuration commands, and other repeatable development tasks.'
          },
          {
            title: 'Public and private files',
            description:
              'Uploads and private files need local paths that match the site configuration; Node.js is optional for theme builds.'
          }
        ]
      }
    },
    ghost: {
      replaceOverview: true,
      paragraphs: [
        'Ghost is a Node.js publishing platform focused on professional writing, memberships, newsletters, and subscriptions. It provides an editor, theme layer, member management, email delivery features, and Content and Admin APIs around a publication rather than a general CMS plugin ecosystem.',
        'A local Ghost installation runs on Node.js and uses a database selected for the environment. Theme work benefits from realistic URLs and email settings, while external mail delivery and storage integrations should only be added when the publication configuration uses them.'
      ],
      capabilities: [
        'Publishing Editor',
        'Memberships',
        'Newsletters',
        'Theme API',
        'Content API',
        'Subscription Tiers'
      ],
      useCases: [
        'Independent publications',
        'Paid newsletters',
        'Creator membership sites',
        'Editorial brand sites',
        'Custom Ghost theme development'
      ],
      localEnvironment: {
        title: 'Ghost development follows a publication workflow',
        description:
          'The key local concerns are the publication database, theme behavior, member-facing URLs, and configured delivery integrations.',
        items: [
          {
            title: 'Node.js and Ghost CLI',
            description:
              'Run the Ghost instance and use its supported installation and development tooling.'
          },
          {
            title: 'Database',
            description:
              'SQLite is suitable for local development by default; MySQL is used where the selected setup requires it.'
          },
          {
            title: 'Theme files and local URL',
            description:
              'Theme development needs a local publication URL to test routing, members, and browser assets.'
          },
          {
            title: 'Mail delivery when configured',
            description:
              'Use SMTP only for transactional mail tests; Ghost newsletters require the configured Mailgun API integration.'
          }
        ]
      }
    },
    magento: {
      replaceOverview: true,
      paragraphs: [
        'Magento Open Source is a PHP commerce platform for stores with complex catalogs, pricing, promotions, customer groups, checkout behavior, and multiple storefronts. Its modular architecture makes extension and integration work a core part of implementation.',
        'Magento local development is notably more involved than a basic PHP site. Composer dependencies, MySQL, search indexing, Redis-backed cache or sessions, cron, queue consumers, generated code, and static content can all be active depending on the project configuration.'
      ],
      capabilities: [
        'Catalog & Inventory',
        'Multi-store',
        'Promotions',
        'Checkout',
        'Search Indexing',
        'Extension Modules'
      ],
      useCases: [
        'Multi-store retail operations',
        'B2B catalogs and customer pricing',
        'Large product catalogs',
        'Commerce integrations with ERP or PIM systems',
        'Custom checkout and extension development'
      ],
      localEnvironment: {
        title: 'Magento development coordinates a commerce stack',
        description:
          'A simple catalog may not enable every service, but realistic Magento work often requires several processes to expose indexing, cache, and asynchronous behavior.',
        items: [
          {
            title: 'PHP, Composer, and generated code',
            description:
              'Magento uses Composer packages and generated classes; CLI commands manage compilation and setup changes.'
          },
          {
            title: 'MySQL or MariaDB',
            description: 'Stores catalog, customer, sales, configuration, and index-related data.'
          },
          {
            title: 'OpenSearch or Elasticsearch',
            description:
              'Required by supported Magento versions for catalog search and indexing; use the engine required by the project release.'
          },
          {
            title: 'Redis, cron, and consumers when enabled',
            description:
              'Redis commonly supports cache or sessions, while cron and message-queue consumers are needed only for features configured to use them.'
          },
          {
            title: 'Static-content tooling',
            description:
              'Node.js tooling is optional, but Magento static-content deployment and theme assets must be rebuilt when the project workflow requires it.'
          }
        ]
      }
    },
    prestashop: {
      replaceOverview: true,
      paragraphs: [
        'PrestaShop is a PHP e-commerce platform for merchants operating product catalogs, orders, payments, shipping, and promotions. Its modules and themes let stores adapt the storefront and back office without replacing the commerce core.',
        'A local PrestaShop store commonly needs PHP, MySQL or MariaDB, a web server, and a store-specific URL. Module and theme work should preserve the database and image assets; Node.js belongs only to projects that use it for theme asset tooling.'
      ],
      capabilities: [
        'Product Catalog',
        'Order Management',
        'Modules',
        'Themes',
        'Carrier Rules',
        'Multi-language Storefronts'
      ],
      useCases: [
        'Small and mid-size online stores',
        'Merchant storefront customization',
        'Payment and carrier module integration',
        'Localized catalog sites',
        'Theme and module development'
      ],
      localEnvironment: {
        title: 'A PrestaShop environment is a working store',
        description:
          'Catalog state, modules, theme assets, and browser behavior need to be available together to test a change realistically.',
        items: [
          {
            title: 'PHP web server',
            description:
              'Run the store with the PHP version and extensions supported by its PrestaShop release.'
          },
          {
            title: 'MySQL or MariaDB',
            description: 'Holds products, customers, orders, configuration, and module data.'
          },
          {
            title: 'Store URL and image files',
            description:
              'Use a local domain for storefront behavior and preserve product image paths while testing imports or themes.'
          },
          {
            title: 'Theme asset tools when used',
            description:
              'Node.js is optional and should be started only for themes or frontend workflows that declare it.'
          }
        ]
      }
    },
    opencart: {
      replaceOverview: true,
      paragraphs: [
        'OpenCart is a PHP e-commerce platform for building and operating online stores. Its catalog, order system, extensions, themes, and multi-store support give merchants a relatively direct path from product data to a customer-facing storefront.',
        'Local OpenCart work is usually centered on PHP, a MySQL-compatible database, a web server, and a store URL. Extension changes, product images, rewrite behavior, and payment or shipping callbacks are more relevant to this workflow than a generic application-service stack.'
      ],
      capabilities: [
        'Product Catalog',
        'Order Processing',
        'Extensions',
        'Theme System',
        'Multi-store',
        'Language Packs'
      ],
      useCases: [
        'Small online stores',
        'Custom catalog storefronts',
        'Payment and shipping extension work',
        'Multi-store merchant setups',
        'OpenCart theme customization'
      ],
      localEnvironment: {
        title: 'An OpenCart setup should behave like a storefront',
        description:
          'Testing a store means retaining catalog data, image paths, URL rewriting, and browser-facing integration settings.',
        items: [
          {
            title: 'PHP and web server',
            description:
              'Serve OpenCart with the PHP version and required extensions for the installed release.'
          },
          {
            title: 'MySQL or MariaDB',
            description:
              'Stores catalog data, customer accounts, orders, settings, and extension configuration.'
          },
          {
            title: 'Images and local store URL',
            description:
              'Keep image directories available and use a local domain to test storefront links and rewrite rules.'
          },
          {
            title: 'HTTPS for callbacks when needed',
            description:
              'A secure local origin is useful when a payment provider, OAuth flow, or external callback requires it.'
          }
        ]
      }
    },
    payload: {
      replaceOverview: true,
      paragraphs: [
        'Payload CMS is a TypeScript-first headless CMS and application framework. Collections, fields, hooks, access control, a generated admin panel, uploads, and REST or GraphQL APIs are defined in application code rather than assembled through a separate CMS configuration layer.',
        'A Payload project normally uses Node.js with a database adapter selected in its configuration. Local work often includes schema changes, admin access, upload storage, and custom server code; Redis, object storage, or email services are optional integrations rather than framework requirements.'
      ],
      capabilities: [
        'Code-defined Collections',
        'Admin Panel',
        'Access Control',
        'Hooks',
        'REST & GraphQL',
        'Upload Collections'
      ],
      useCases: [
        'Headless content APIs',
        'Custom editorial applications',
        'Content-backed product sites',
        'TypeScript application backends',
        'CMS extensions with custom access rules'
      ],
      localEnvironment: {
        title: 'Payload development starts from its TypeScript configuration',
        description:
          'The selected database adapter and upload strategy define most of the supporting local environment.',
        items: [
          {
            title: 'Node.js and package manager',
            description: 'Run the Payload server, TypeScript tooling, and project scripts.'
          },
          {
            title: 'Configured database adapter',
            description:
              'MongoDB, PostgreSQL, SQLite, or another supported adapter should match the project configuration and migrations.'
          },
          {
            title: 'Admin URL and media storage',
            description:
              'A stable local URL supports admin and auth testing; uploads need the configured local or external storage adapter.'
          },
          {
            title: 'External services when integrated',
            description:
              'Redis, SMTP, and object storage are optional and should be included only for configured plugins or application features.'
          }
        ]
      }
    },
    strapi: {
      replaceOverview: true,
      paragraphs: [
        'Strapi is a Node.js headless CMS that models structured content and exposes it through an administration panel and REST or GraphQL APIs. Content types, lifecycle behavior, roles, plugins, and media handling make it a backend for many different frontend clients.',
        'A Strapi local environment is led by Node.js and the chosen database. Content-type changes affect schema and API behavior, while upload providers, email, Redis, and proxy settings are project integrations that should be represented only when configured.'
      ],
      capabilities: [
        'Content-Type Builder',
        'REST & GraphQL APIs',
        'Roles and Permissions',
        'Admin Panel',
        'Media Library',
        'Lifecycle Hooks'
      ],
      useCases: [
        'Headless CMS for web frontends',
        'Mobile content APIs',
        'Multi-channel editorial systems',
        'Product and catalog content APIs',
        'Custom Strapi plugin development'
      ],
      localEnvironment: {
        title: 'Strapi development centers on content types and APIs',
        description:
          'The local stack should make schema changes, administration, media, and the selected integrations behave consistently.',
        items: [
          {
            title: 'Node.js runtime',
            description: 'Runs Strapi, its administration build, and project scripts.'
          },
          {
            title: 'Configured SQL database',
            description:
              'SQLite suits simple local work; PostgreSQL or MySQL is common when matching a deployed project.'
          },
          {
            title: 'Media provider',
            description:
              'Use local uploads for development unless the project configures S3-compatible or another external provider.'
          },
          {
            title: 'Redis or SMTP when configured',
            description:
              'Caching, queues, and mail services are optional integrations, not a default Strapi requirement.'
          }
        ]
      }
    },
    directus: {
      replaceOverview: true,
      paragraphs: [
        'Directus is a data platform that layers a studio, authentication, permissions, automations, files, and REST or GraphQL APIs over an existing SQL database. It is designed around the database schema as the source of truth rather than around a code-first content model.',
        'Local Directus work begins with Node.js and the database being exposed. Schema snapshots, role rules, file storage, and Flows are commonly tested together; Redis, object storage, and email are optional services selected by the project configuration.'
      ],
      capabilities: [
        'Database Introspection',
        'Data Studio',
        'REST & GraphQL APIs',
        'Roles and Permissions',
        'Flows Automation',
        'File Management'
      ],
      useCases: [
        'APIs over existing SQL data',
        'Internal data administration',
        'Headless content operations',
        'Workflow automation around records',
        'Partner or customer data portals'
      ],
      localEnvironment: {
        title: 'A Directus environment is anchored to the database schema',
        description:
          'The selected database and its schema changes are central; ancillary services should be added only where Directus is configured to use them.',
        items: [
          {
            title: 'Node.js and Directus service',
            description: 'Runs the API, Data Studio, and project extensions.'
          },
          {
            title: 'SQL database',
            description:
              'PostgreSQL, MySQL, SQLite, or another supported database provides both the data model and Directus metadata.'
          },
          {
            title: 'Schema snapshots and extensions',
            description:
              'Keep schema snapshots, custom endpoints, hooks, and interface extensions alongside the local service.'
          },
          {
            title: 'Storage, Redis, and mail when configured',
            description:
              'File adapters, cache services, and SMTP belong only to the Directus configuration being tested.'
          }
        ]
      }
    }
  },
  zh: {
    laravel: {
      replaceOverview: true,
      paragraphs: [
        'Laravel 是用于构建全栈 Web 应用和 API 的 PHP 框架。它将路由、依赖注入、Eloquent 模型、验证、认证、事件和模板整合为一致的应用结构。',
        'Laravel 项目通常从 PHP、Composer 和数据库开始。队列通知、定时命令、缓存数据和 Vite 前端资源等功能会引入需要与应用同时运行的框架专有进程。'
      ],
      capabilities: [
        'Eloquent ORM',
        'Artisan CLI',
        'Blade 模板',
        '队列与事件',
        '任务调度器',
        '迁移'
      ],
      useCases: [
        '订阅产品与客户门户',
        '带角色流程的业务系统',
        '电商后端',
        '内容型 Web 应用',
        'Web 或移动端 REST API'
      ],
      localEnvironment: {
        title: 'Laravel 环境包含其应用工作流',
        description:
          '具体技术栈因项目而异，但 Laravel 团队通常会在本地同时处理应用代码、结构变更、Worker 和前端资源。',
        items: [
          {
            title: 'PHP 与 Composer',
            description: '运行应用，并安装 composer.lock 中锁定的依赖。'
          },
          {
            title: 'MySQL 或 PostgreSQL',
            description: 'Eloquent 模型和 Laravel Migration 通常在这里管理项目结构。'
          },
          {
            title: 'Artisan Worker 与调度器',
            description: '仅在项目配置了队列任务或定时命令时运行 queue:work 和 schedule:work。'
          },
          {
            title: 'Redis 与 Vite（按需）',
            description:
              'Redis 常用于缓存、Session 或队列后端；需要构建前端资源的项目才需要 Node.js 与 Vite。'
          }
        ]
      }
    },
    django: {
      replaceOverview: true,
      paragraphs: [
        'Django 是高级 Python Web 框架，以可复用 app、成熟 ORM、迁移、表单、认证和自动管理后台为核心。它尤其适合业务规则与内容模型共同演进的数据库驱动网站。',
        'Django 开发通常在 Python 虚拟环境中开始，并由 manage.py 协调项目任务。可部署应用还可能需要关系型数据库、静态与媒体文件处理，以及在设计包含异步任务时运行 Celery 进程。'
      ],
      capabilities: ['Django ORM', '管理后台', '迁移', '表单', '认证', 'ASGI 支持'],
      useCases: [
        '编辑和会员网站',
        '数据密集型业务应用',
        '基于管理后台的内部工具',
        '市场或目录平台',
        '搭配 Django REST Framework 的 API'
      ],
      localEnvironment: {
        title: 'Django 项目不只有 runserver',
        description: 'manage.py 协调框架任务，项目选择决定本地需要哪些周边进程。',
        items: [
          { title: 'Python 环境', description: 'venv、uv 或 Poetry 环境隔离 Django 和项目依赖。' },
          {
            title: 'PostgreSQL 或 MySQL',
            description:
              '接近生产的 Django 项目通常使用关系型数据库，并通过 manage.py migrate 应用结构变更。'
          },
          {
            title: '静态与媒体文件',
            description: '模板、收集后的静态资源和用户上传需要独立的本地路径及配置。'
          },
          {
            title: 'Celery Broker 与 Worker（按配置）',
            description: '只有运行后台任务的项目才需要 Redis 或 RabbitMQ 以及 Celery Worker。'
          }
        ]
      }
    },
    fastapi: {
      replaceOverview: true,
      paragraphs: [
        'FastAPI 是用于构建类型化 HTTP API 的 Python 框架。类型注解可驱动验证、序列化、依赖注入和 OpenAPI 文档，其 ASGI 基础也支持异步端点与 WebSocket。',
        '本地 FastAPI 服务通常通过 Uvicorn 等 ASGI 服务器运行。其余环境应跟随实际服务：持久化数据所需的 ORM 数据库、迁移工具，以及异步工作负载需要时才添加的 Worker 或 Broker。'
      ],
      capabilities: [
        '类型驱动验证',
        'OpenAPI 文档',
        '依赖注入',
        '异步 ASGI 端点',
        'WebSocket',
        'Pydantic 模型'
      ],
      useCases: [
        '类型化 REST API',
        '移动应用后端服务',
        '数据与机器学习服务端点',
        '异步集成 API',
        '内部 API 平台'
      ],
      localEnvironment: {
        title: 'FastAPI 环境跟随服务契约',
        description: '框架本身刻意保持轻量，本地依赖应反映 API 实现，而不是套用固定技术栈。',
        items: [
          {
            title: 'Python 与 ASGI 服务器',
            description: '使用锁定的 Python 依赖及 Uvicorn 等 ASGI 服务器运行应用。'
          },
          {
            title: '数据库与迁移',
            description: 'PostgreSQL 或项目选择的数据库应与 ORM 和迁移工具配套。'
          },
          {
            title: 'API 客户端与安全来源',
            description: '浏览器客户端、OAuth 重定向或 Webhook 回调测试时可能需要本地域名与 HTTPS。'
          },
          {
            title: 'Broker 与 Worker（按设计）',
            description: '仅当 API 明确将后台工作卸载时，才使用 Redis、RabbitMQ 或 Worker 进程。'
          }
        ]
      }
    },
    flask: {
      replaceOverview: true,
      paragraphs: [
        'Flask 是轻量级 Python Web 框架，以路由、请求处理、Jinja 模板和显式选择的扩展为中心。其小型核心允许团队自行决定 Blueprint、持久化、认证、命令任务和部署的组织方式。',
        '这种灵活性也使 Flask 本地环境因项目而异。小应用可能只使用虚拟环境和 Flask 开发服务器；使用 SQLAlchemy、Alembic 迁移、资源构建或后台任务的应用才按需增加这些服务。'
      ],
      capabilities: [
        'Blueprint',
        'Jinja 模板',
        'Werkzeug 路由',
        'CLI 命令',
        '扩展生态',
        'WSGI 应用'
      ],
      useCases: [
        '小型 Web 应用',
        '定制内部工具',
        'JSON API',
        '服务原型',
        '架构可控的服务端渲染网站'
      ],
      localEnvironment: {
        title: 'Flask 有意保持本地技术栈显式',
        description: '不同于内置大量功能的框架，Flask 不会暗示所有周边服务；项目配置才是依据。',
        items: [
          { title: 'Python 虚拟环境', description: '隔离 Flask 及应用选择的扩展。' },
          {
            title: 'Flask CLI 与开发服务器',
            description: '运行 flask 命令，服务于 app factory、Shell 任务或本地服务器。'
          },
          {
            title: '数据库与 Alembic（按需）',
            description: '使用 SQLAlchemy 的应用通常会加入数据库和 Alembic 迁移流程。'
          },
          {
            title: '任务 Worker（按配置）',
            description: 'Celery、RQ 或其他 Worker 服务是可选项，必须与应用代码一致。'
          }
        ]
      }
    },
    wordpress: {
      replaceOverview: true,
      paragraphs: [
        'WordPress 是 PHP 内容管理系统，其核心、主题、插件、区块编辑器、媒体库和模板层级让发布网站可以扩展，而不必把每一次内容修改都变成一次部署。',
        '本地 WordPress 工作通常围绕 PHP Web 服务器、MySQL 或 MariaDB 和稳定的站点地址展开。主题与插件开发还涉及上传、重写规则和 WP-CLI；只有所选主题或区块工具使用时才需要 Node.js。'
      ],
      capabilities: ['区块编辑器', '主题层级', '插件 API', '媒体库', '自定义文章类型', 'WP-CLI'],
      useCases: [
        '营销和企业网站',
        '编辑出版物',
        '会员或社区网站',
        '定制主题与插件开发',
        '使用 WooCommerce 的小型商店'
      ],
      localEnvironment: {
        title: 'WordPress 站点包含内容与扩展工作流',
        description:
          '本地设置应像一个站点一样工作，而非只执行 PHP，以便作者和开发者共同测试 URL、资源和扩展。',
        items: [
          {
            title: 'PHP Web 服务器与本地域名',
            description: '通过支持当前版本 PHP 的固定本地 URL 提供站点，并正确处理固定链接。'
          },
          {
            title: 'MySQL 或 MariaDB',
            description: '存储文章、用户、选项、分类法以及插件或主题设置。'
          },
          {
            title: 'wp-content 上传与扩展',
            description: '将媒体上传、主题和插件作为项目测试数据的一部分保留。'
          },
          {
            title: 'WP-CLI 与 Node.js（按需）',
            description: 'WP-CLI 支持可重复的站点任务；Node.js 仅用于主题或自定义区块构建流程。'
          }
        ]
      }
    },
    drupal: {
      replaceOverview: true,
      paragraphs: [
        'Drupal 是用于结构化、高度可配置数字体验的 PHP CMS。内容实体、字段、分类法、Views、配置管理、权限和多语言工具使团队能够建模复杂信息及编辑流程。',
        'Drupal 开发通常结合 Composer 管理的 PHP 代码、关系型数据库和 Web 服务器。配置同步、Drush 命令、文件存储和可选前端构建与打开首页同样是可靠本地项目的重要部分。'
      ],
      capabilities: ['内容实体', '字段与分类法', 'Views', '配置管理', '权限', '多语言内容'],
      useCases: [
        '政府和公共服务网站',
        '多语言机构网站',
        '拥有复杂分类法的内容平台',
        '受治理的编辑网站',
        '定制模块开发'
      ],
      localEnvironment: {
        title: 'Drupal 环境保留结构与配置',
        description:
          '内容模型和导出的配置是 Drupal 工作的核心，本地环境需要支持可重复导入和扩展变更。',
        items: [
          {
            title: 'PHP 与 Composer',
            description: 'Composer 管理 Drupal Core、贡献模块和项目库。'
          },
          {
            title: '数据库与配置同步',
            description: '数据库保存内容，导出配置通常通过 Drupal 工具导入和导出。'
          },
          {
            title: 'Drush',
            description: 'Drush 用于缓存重建、更新、配置命令和其他可重复开发任务。'
          },
          {
            title: '公开与私有文件',
            description: '上传和私有文件需要符合站点配置的本地路径；Node.js 只在主题构建时才需要。'
          }
        ]
      }
    },
    ghost: {
      replaceOverview: true,
      paragraphs: [
        'Ghost 是以专业写作、会员、新闻邮件和订阅为重点的 Node.js 发布平台。它围绕出版物提供编辑器、主题层、会员管理、邮件投递功能以及 Content 与 Admin API，而不是通用 CMS 插件生态。',
        '本地 Ghost 安装运行于 Node.js，并使用环境所选的数据库。主题工作受益于真实 URL 和邮件设置；外部邮件投递与存储集成只应在出版物配置实际使用时加入。'
      ],
      capabilities: ['发布编辑器', '会员', '新闻邮件', '主题 API', 'Content API', '订阅层级'],
      useCases: [
        '独立出版物',
        '付费新闻邮件',
        '创作者会员网站',
        '编辑型品牌网站',
        '定制 Ghost 主题开发'
      ],
      localEnvironment: {
        title: 'Ghost 开发围绕出版工作流',
        description: '本地关键点是出版物数据库、主题行为、面向会员的 URL 及已配置的投递集成。',
        items: [
          {
            title: 'Node.js 与 Ghost CLI',
            description: '运行 Ghost 实例，并使用受支持的安装与开发工具。'
          },
          { title: '数据库', description: 'SQLite 默认适合本地开发；当所选设置要求时使用 MySQL。' },
          {
            title: '主题文件与本地 URL',
            description: '主题开发需要本地出版 URL，以测试路由、会员和浏览器资源。'
          },
          {
            title: '邮件投递（按配置）',
            description: 'SMTP 仅适合测试事务邮件；Ghost 新闻邮件需要已配置的 Mailgun API 集成。'
          }
        ]
      }
    },
    magento: {
      replaceOverview: true,
      paragraphs: [
        'Magento Open Source 是面向复杂目录、定价、促销、客户分组、结算行为和多店铺的 PHP 电商平台。其模块化架构使扩展和集成开发成为实施工作的核心部分。',
        'Magento 本地开发明显比基础 PHP 站点更复杂。根据项目配置，Composer 依赖、MySQL、搜索索引、Redis 缓存或会话、Cron、队列 Consumer、生成代码和静态内容都可能同时运行。'
      ],
      capabilities: ['目录与库存', '多店铺', '促销', '结算', '搜索索引', '扩展模块'],
      useCases: [
        '多店铺零售运营',
        'B2B 目录与客户定价',
        '大型商品目录',
        '与 ERP 或 PIM 的电商集成',
        '定制结算与扩展开发'
      ],
      localEnvironment: {
        title: 'Magento 开发协调一套电商技术栈',
        description:
          '简单目录不会启用每一项服务，但真实 Magento 工作通常需要多个进程来呈现索引、缓存和异步行为。',
        items: [
          {
            title: 'PHP、Composer 与生成代码',
            description: 'Magento 使用 Composer 包和生成类；CLI 命令管理编译及安装变更。'
          },
          { title: 'MySQL 或 MariaDB', description: '存储目录、客户、销售、配置和索引相关数据。' },
          {
            title: 'OpenSearch 或 Elasticsearch',
            description: '受支持的 Magento 版本需要它进行目录搜索和索引；使用项目版本所要求的引擎。'
          },
          {
            title: 'Redis、Cron 与 Consumer（按启用）',
            description:
              'Redis 常用于缓存或会话；只有配置相应功能时才需要 Cron 和消息队列 Consumer。'
          },
          {
            title: '静态内容工具',
            description:
              'Node.js 工具是可选的，但项目流程要求时必须重建 Magento 静态内容和主题资源。'
          }
        ]
      }
    },
    prestashop: {
      replaceOverview: true,
      paragraphs: [
        'PrestaShop 是面向商品目录、订单、支付、配送和促销的 PHP 电商平台。模块和主题让商家可以适配前台与后台，而不必替换电商核心。',
        '本地 PrestaShop 商店通常需要 PHP、MySQL 或 MariaDB、Web 服务器和店铺专属 URL。模块和主题工作应保留数据库及图片资源；只有主题资源工具声明需要时才加入 Node.js。'
      ],
      capabilities: ['商品目录', '订单管理', '模块', '主题', '物流规则', '多语言店面'],
      useCases: [
        '中小型在线商店',
        '商家店面定制',
        '支付与物流模块集成',
        '本地化目录网站',
        '主题与模块开发'
      ],
      localEnvironment: {
        title: 'PrestaShop 环境是一间可运行的商店',
        description: '商品状态、模块、主题资源和浏览器行为需要同时可用，才能真实测试变更。',
        items: [
          {
            title: 'PHP Web 服务器',
            description: '使用该 PrestaShop 版本支持的 PHP 版本和扩展运行店铺。'
          },
          { title: 'MySQL 或 MariaDB', description: '保存商品、客户、订单、配置和模块数据。' },
          {
            title: '店铺 URL 与图片文件',
            description: '使用本地域名测试店面行为，并保留商品图片路径以测试导入或主题。'
          },
          {
            title: '主题资源工具（按需）',
            description: 'Node.js 是可选的，仅用于声明使用它的主题或前端工作流。'
          }
        ]
      }
    },
    opencart: {
      replaceOverview: true,
      paragraphs: [
        'OpenCart 是用于构建和运营在线商店的 PHP 电商平台。它的目录、订单系统、扩展、主题和多店铺支持，让商家能够较直接地从商品数据走到面向客户的店面。',
        '本地 OpenCart 工作通常围绕 PHP、MySQL 兼容数据库、Web 服务器和店铺 URL 展开。扩展变更、商品图片、重写行为以及支付或物流回调比通用应用服务栈更贴合此工作流。'
      ],
      capabilities: ['商品目录', '订单处理', '扩展', '主题系统', '多店铺', '语言包'],
      useCases: [
        '小型在线商店',
        '定制目录店面',
        '支付与物流扩展开发',
        '多店铺商家设置',
        'OpenCart 主题定制'
      ],
      localEnvironment: {
        title: 'OpenCart 设置应像店面一样工作',
        description: '测试商店意味着保留目录数据、图片路径、URL 重写和面向浏览器的集成设置。',
        items: [
          {
            title: 'PHP 与 Web 服务器',
            description: '使用安装版本所需的 PHP 版本和扩展提供 OpenCart。'
          },
          {
            title: 'MySQL 或 MariaDB',
            description: '保存目录数据、客户账户、订单、设置和扩展配置。'
          },
          {
            title: '图片与本地店铺 URL',
            description: '保留图片目录，并用本地域名测试店面链接和重写规则。'
          },
          {
            title: 'HTTPS（需要回调时）',
            description: '支付提供商、OAuth 流程或外部回调要求时，安全本地来源很有价值。'
          }
        ]
      }
    },
    payload: {
      replaceOverview: true,
      paragraphs: [
        'Payload CMS 是 TypeScript 优先的 Headless CMS 和应用框架。Collection、字段、Hook、访问控制、生成的管理后台、上传以及 REST 或 GraphQL API 都定义在应用代码中，而非通过单独的 CMS 配置层拼装。',
        'Payload 项目通常使用 Node.js 和配置中选择的数据库适配器。本地工作常包含结构变更、后台访问、上传存储和自定义服务端代码；Redis、对象存储或邮件服务是可选集成，而不是框架必需项。'
      ],
      capabilities: [
        '代码定义的 Collection',
        '管理后台',
        '访问控制',
        'Hook',
        'REST 与 GraphQL',
        '上传 Collection'
      ],
      useCases: [
        'Headless 内容 API',
        '定制编辑应用',
        '内容驱动产品网站',
        'TypeScript 应用后端',
        '带定制访问规则的 CMS 扩展'
      ],
      localEnvironment: {
        title: 'Payload 开发从 TypeScript 配置出发',
        description: '所选数据库适配器和上传策略决定了大部分本地周边环境。',
        items: [
          {
            title: 'Node.js 与包管理器',
            description: '运行 Payload 服务、TypeScript 工具和项目脚本。'
          },
          {
            title: '已配置的数据库适配器',
            description: 'MongoDB、PostgreSQL、SQLite 或其他受支持适配器应与项目配置和迁移一致。'
          },
          {
            title: '后台 URL 与媒体存储',
            description: '稳定本地 URL 支持后台和认证测试；上传需要已配置的本地或外部存储适配器。'
          },
          {
            title: '外部服务（已集成时）',
            description: 'Redis、SMTP 和对象存储仅在配置了插件或应用功能时加入。'
          }
        ]
      }
    },
    strapi: {
      replaceOverview: true,
      paragraphs: [
        'Strapi 是 Node.js Headless CMS，用于建模结构化内容，并通过管理后台以及 REST 或 GraphQL API 提供这些内容。内容类型、生命周期行为、角色、插件和媒体处理使其成为多种前端客户端的后端。',
        'Strapi 本地环境由 Node.js 和选定数据库主导。内容类型变更会影响结构与 API 行为；上传提供商、邮件、Redis 和代理设置属于项目集成，仅在配置时才应呈现。'
      ],
      capabilities: [
        '内容类型构建器',
        'REST 与 GraphQL API',
        '角色与权限',
        '管理后台',
        '媒体库',
        '生命周期 Hook'
      ],
      useCases: [
        'Web 前端的 Headless CMS',
        '移动端内容 API',
        '多渠道编辑系统',
        '产品与目录内容 API',
        '定制 Strapi 插件开发'
      ],
      localEnvironment: {
        title: 'Strapi 开发围绕内容类型和 API',
        description: '本地技术栈应让结构变更、管理、媒体和所选集成保持一致。',
        items: [
          { title: 'Node.js 运行时', description: '运行 Strapi、其管理后台构建和项目脚本。' },
          {
            title: '已配置的 SQL 数据库',
            description: 'SQLite 适合简单本地工作；对齐部署项目时常用 PostgreSQL 或 MySQL。'
          },
          {
            title: '媒体提供商',
            description: '除非项目配置了 S3 兼容或其他外部提供商，否则本地开发使用本地上传。'
          },
          {
            title: 'Redis 或 SMTP（按配置）',
            description: '缓存、队列和邮件服务是可选集成，并非 Strapi 默认要求。'
          }
        ]
      }
    },
    directus: {
      replaceOverview: true,
      paragraphs: [
        'Directus 是围绕现有 SQL 数据库提供 Studio、认证、权限、自动化、文件以及 REST 或 GraphQL API 的数据平台。它以数据库结构为事实来源，而不是采用代码优先内容模型。',
        '本地 Directus 工作从 Node.js 和被公开的数据库开始。结构快照、角色规则、文件存储和 Flow 通常需要一起测试；Redis、对象存储和邮件是项目配置选择的可选服务。'
      ],
      capabilities: [
        '数据库内省',
        'Data Studio',
        'REST 与 GraphQL API',
        '角色与权限',
        'Flows 自动化',
        '文件管理'
      ],
      useCases: [
        '面向既有 SQL 数据的 API',
        '内部数据管理',
        'Headless 内容运营',
        '围绕记录的工作流自动化',
        '合作伙伴或客户数据门户'
      ],
      localEnvironment: {
        title: 'Directus 环境锚定于数据库结构',
        description: '所选数据库及其结构变更是核心；周边服务只在 Directus 实际配置使用时加入。',
        items: [
          { title: 'Node.js 与 Directus 服务', description: '运行 API、Data Studio 和项目扩展。' },
          {
            title: 'SQL 数据库',
            description:
              'PostgreSQL、MySQL、SQLite 或其他支持的数据库同时提供数据模型和 Directus 元数据。'
          },
          {
            title: '结构快照与扩展',
            description: '将结构快照、自定义端点、Hook 和界面扩展与本地服务一起保留。'
          },
          {
            title: '存储、Redis 与邮件（按配置）',
            description: '文件适配器、缓存服务和 SMTP 仅属于正在测试的 Directus 配置。'
          }
        ]
      }
    }
  },
  id: {
    laravel: {
      replaceOverview: true,
      paragraphs: [
        'Laravel adalah framework PHP untuk aplikasi web full-stack dan API. Konvensinya menyatukan routing, dependency injection, model Eloquent, validasi, autentikasi, event, dan template dalam struktur aplikasi yang konsisten.',
        'Proyek Laravel sering dimulai dengan PHP, Composer, dan database. Notifikasi antrean, perintah terjadwal, data cache, dan aset yang dibangun Vite menambahkan proses khusus framework yang berjalan di samping aplikasi.'
      ],
      capabilities: [
        'Eloquent ORM',
        'Artisan CLI',
        'Blade Templates',
        'Queues & Events',
        'Task Scheduler',
        'Migrations'
      ],
      useCases: [
        'Produk berlangganan dan portal pelanggan',
        'Sistem bisnis dengan alur berbasis peran',
        'Backend e-commerce',
        'Aplikasi web berbasis konten',
        'REST API untuk web atau mobile'
      ],
      localEnvironment: {
        title: 'Lingkungan Laravel mencakup alur aplikasi',
        description:
          'Stack tepatnya berbeda tiap proyek, tetapi tim Laravel biasanya mengerjakan kode, perubahan skema, worker, dan aset frontend bersama-sama secara lokal.',
        items: [
          {
            title: 'PHP dan Composer',
            description: 'Menjalankan aplikasi dan memasang paket yang dikunci oleh composer.lock.'
          },
          {
            title: 'MySQL atau PostgreSQL',
            description:
              'Model Eloquent dan migration Laravel lazim mengelola skema proyek di sini.'
          },
          {
            title: 'Artisan worker dan scheduler',
            description:
              'Jalankan queue:work dan schedule:work hanya bila pekerjaan antrean atau perintah terjadwal dikonfigurasi.'
          },
          {
            title: 'Redis dan Vite bila digunakan',
            description:
              'Redis umum dipakai untuk cache, session, atau antrean; Node.js dan Vite diperlukan oleh proyek yang membangun aset frontend.'
          }
        ]
      }
    },
    django: {
      replaceOverview: true,
      paragraphs: [
        'Django adalah framework web Python tingkat tinggi dengan app yang dapat digunakan ulang, ORM matang, migration, form, autentikasi, dan situs administrasi otomatis. Django sangat cocok untuk situs berbasis database dengan aturan bisnis dan model konten yang berkembang bersama.',
        'Pengembangan biasanya dimulai dalam lingkungan virtual Python dengan manage.py yang mengoordinasikan proyek. Aplikasi yang dapat dideploy juga mungkin membutuhkan database relasional, pengelolaan static dan media, serta proses Celery bila pekerjaan asinkron adalah bagian dari rancangan.'
      ],
      capabilities: [
        'Django ORM',
        'Admin Site',
        'Migrations',
        'Forms',
        'Authentication',
        'ASGI Support'
      ],
      useCases: [
        'Situs editorial dan keanggotaan',
        'Aplikasi bisnis kaya data',
        'Tool back-office berbasis admin',
        'Platform marketplace atau direktori',
        'API dengan Django REST Framework'
      ],
      localEnvironment: {
        title: 'Proyek Django lebih dari runserver',
        description:
          'manage.py mengoordinasikan tugas framework, sementara pilihan proyek menentukan proses pendukung lokal yang diperlukan.',
        items: [
          {
            title: 'Lingkungan Python',
            description:
              'Lingkungan venv, uv, atau Poetry mengisolasi Django dan dependensi proyek.'
          },
          {
            title: 'PostgreSQL atau MySQL',
            description:
              'Proyek Django yang mendekati produksi lazim memakai database relasional dan menjalankan manage.py migrate.'
          },
          {
            title: 'File static dan media',
            description:
              'Template, aset static yang dikumpulkan, dan unggahan pengguna membutuhkan path serta konfigurasi lokal terpisah.'
          },
          {
            title: 'Broker dan worker Celery bila dikonfigurasi',
            description:
              'Redis atau RabbitMQ dan worker Celery hanya relevan untuk proyek yang menjalankan tugas latar belakang.'
          }
        ]
      }
    },
    fastapi: {
      replaceOverview: true,
      paragraphs: [
        'FastAPI adalah framework Python untuk membangun HTTP API bertipe. Type hint menggerakkan validasi, serialisasi, dependency injection, dan dokumentasi OpenAPI, sementara fondasi ASGI-nya mendukung endpoint asinkron serta WebSocket.',
        'Layanan FastAPI lokal biasanya dijalankan melalui server ASGI seperti Uvicorn. Lingkungan lainnya harus mengikuti layanan: database ber-ORM untuk data persisten, migration, serta proses worker atau broker hanya untuk beban kerja asinkron yang dirancang.'
      ],
      capabilities: [
        'Validasi berbasis tipe',
        'Dokumentasi OpenAPI',
        'Dependency Injection',
        'Endpoint ASGI Async',
        'WebSockets',
        'Model Pydantic'
      ],
      useCases: [
        'REST API bertipe',
        'Layanan backend aplikasi mobile',
        'Endpoint layanan data dan ML',
        'API integrasi asinkron',
        'Platform API internal'
      ],
      localEnvironment: {
        title: 'Lingkungan FastAPI mengikuti kontrak layanan',
        description:
          'Framework ini sengaja kecil, sehingga dependensi lokal harus mencerminkan implementasi API, bukan stack yang dipaksakan.',
        items: [
          {
            title: 'Python dan server ASGI',
            description:
              'Jalankan aplikasi dengan dependensi Python yang terkunci dan server ASGI seperti Uvicorn.'
          },
          {
            title: 'Database dan migration',
            description:
              'PostgreSQL atau database pilihan proyek dipasangkan dengan ORM serta alat migration.'
          },
          {
            title: 'Klien API dan origin aman',
            description:
              'Domain lokal dan HTTPS dapat penting untuk klien browser, redirect OAuth, atau pengujian callback webhook.'
          },
          {
            title: 'Broker dan worker bila dirancang',
            description:
              'Redis, RabbitMQ, atau worker hanya digunakan bila API secara eksplisit memindahkan kerja latar belakang.'
          }
        ]
      }
    },
    flask: {
      replaceOverview: true,
      paragraphs: [
        'Flask adalah framework web Python ringan yang berpusat pada routing, penanganan request, template Jinja, dan pilihan extension yang eksplisit. Inti kecilnya membiarkan tim menentukan sendiri susunan blueprint, persistensi, autentikasi, tugas CLI, dan deployment.',
        'Fleksibilitas itu membuat lingkungan Flask lokal bersifat spesifik proyek. Aplikasi kecil mungkin hanya memakai lingkungan virtual dan server development Flask; aplikasi dengan SQLAlchemy, migration Alembic, build aset, atau tugas latar belakang menambahkan layanan tersebut dengan sengaja.'
      ],
      capabilities: [
        'Blueprints',
        'Jinja Templates',
        'Werkzeug Routing',
        'CLI Commands',
        'Extension Ecosystem',
        'WSGI Applications'
      ],
      useCases: [
        'Aplikasi web kecil',
        'Tool internal khusus',
        'JSON API',
        'Prototipe layanan',
        'Situs server-rendered dengan arsitektur tersendiri'
      ],
      localEnvironment: {
        title: 'Flask menjaga stack lokal tetap eksplisit',
        description:
          'Tidak seperti framework lengkap, Flask tidak menyiratkan semua layanan pendukung; konfigurasi proyek adalah sumber kebenaran.',
        items: [
          {
            title: 'Lingkungan virtual Python',
            description: 'Mengisolasi Flask dan extension yang dipilih aplikasi.'
          },
          {
            title: 'Flask CLI dan server development',
            description:
              'Jalankan perintah flask untuk app factory, tugas shell, atau server lokal.'
          },
          {
            title: 'Database dan Alembic bila digunakan',
            description:
              'Aplikasi berbasis SQLAlchemy lazim menambahkan database dan alur migration Alembic.'
          },
          {
            title: 'Worker tugas bila dikonfigurasi',
            description:
              'Celery, RQ, atau layanan worker lain bersifat opsional dan harus sesuai kode aplikasi.'
          }
        ]
      }
    },
    wordpress: {
      replaceOverview: true,
      paragraphs: [
        'WordPress adalah sistem manajemen konten PHP dengan core, tema, plugin, block editor, media library, dan template hierarchy yang membuat situs penerbitan dapat diperluas tanpa menjadikan setiap perubahan konten sebagai deployment.',
        'Pekerjaan WordPress lokal umumnya berpusat pada server web PHP, MySQL atau MariaDB, dan alamat situs yang stabil. Pengembangan tema dan plugin juga melibatkan unggahan, aturan rewrite, dan WP-CLI; Node.js relevan hanya bila tooling tema atau block yang dipilih memerlukannya.'
      ],
      capabilities: [
        'Block Editor',
        'Theme Hierarchy',
        'Plugin API',
        'Media Library',
        'Custom Post Types',
        'WP-CLI'
      ],
      useCases: [
        'Situs pemasaran dan perusahaan',
        'Publikasi editorial',
        'Situs keanggotaan atau komunitas',
        'Pengembangan tema dan plugin khusus',
        'Toko kecil dengan WooCommerce'
      ],
      localEnvironment: {
        title: 'Situs WordPress mencakup alur konten dan ekstensi',
        description:
          'Setup lokal perlu berperilaku sebagai situs, bukan hanya menjalankan PHP, agar penulis dan developer dapat menguji URL, aset, dan ekstensi bersama.',
        items: [
          {
            title: 'Server PHP dan domain lokal',
            description:
              'Sajikan situs melalui URL lokal yang mendukung permalink dan versi PHP yang sesuai.'
          },
          {
            title: 'MySQL atau MariaDB',
            description:
              'Menyimpan post, user, option, taxonomy, serta pengaturan plugin atau tema.'
          },
          {
            title: 'Unggahan dan ekstensi wp-content',
            description:
              'Pertahankan unggahan media, tema, dan plugin sebagai bagian dari fixture proyek.'
          },
          {
            title: 'WP-CLI dan Node.js bila diperlukan',
            description:
              'WP-CLI mendukung tugas situs yang berulang; Node.js opsional untuk pipeline build tema atau custom block.'
          }
        ]
      }
    },
    drupal: {
      replaceOverview: true,
      paragraphs: [
        'Drupal adalah CMS PHP untuk pengalaman digital yang terstruktur dan sangat dapat dikonfigurasi. Entity konten, field, taxonomy, Views, configuration management, permission, dan alat multibahasa membantu tim memodelkan informasi serta alur editorial yang kompleks.',
        'Pengembangan Drupal umumnya memadukan kode PHP yang dikelola Composer, database relasional, dan server web. Sinkronisasi konfigurasi, perintah Drush, penyimpanan file, dan build frontend opsional sama pentingnya dengan membuka halaman utama untuk proyek lokal yang andal.'
      ],
      capabilities: [
        'Content Entities',
        'Fields & Taxonomy',
        'Views',
        'Configuration Management',
        'Permissions',
        'Multilingual Content'
      ],
      useCases: [
        'Situs pemerintah dan layanan publik',
        'Situs institusi multibahasa',
        'Platform konten dengan taxonomy kompleks',
        'Situs editorial dengan alur terkelola',
        'Pengembangan modul khusus'
      ],
      localEnvironment: {
        title: 'Lingkungan Drupal menjaga struktur dan konfigurasi',
        description:
          'Model konten dan konfigurasi yang diekspor adalah inti kerja Drupal, sehingga setup lokal harus mendukung import berulang dan perubahan ekstensi.',
        items: [
          {
            title: 'PHP dan Composer',
            description: 'Composer mengelola Drupal core, module kontribusi, dan library proyek.'
          },
          {
            title: 'Database dan config sync',
            description:
              'Database menyimpan konten, sementara konfigurasi ekspor lazim diimpor dan diekspor dengan tooling Drupal.'
          },
          {
            title: 'Drush',
            description:
              'Drush dipakai untuk rebuild cache, update, perintah konfigurasi, dan tugas pengembangan berulang.'
          },
          {
            title: 'File public dan private',
            description:
              'Unggahan serta file private memerlukan path lokal yang sesuai konfigurasi situs; Node.js opsional untuk build tema.'
          }
        ]
      }
    },
    ghost: {
      replaceOverview: true,
      paragraphs: [
        'Ghost adalah platform penerbitan Node.js yang berfokus pada tulisan profesional, keanggotaan, newsletter, dan langganan. Ghost menyediakan editor, lapisan tema, manajemen member, fitur pengiriman email, serta Content dan Admin API di sekitar publikasi, bukan ekosistem plugin CMS umum.',
        'Instalasi Ghost lokal berjalan pada Node.js dan menggunakan database yang dipilih oleh lingkungan. Pekerjaan tema mendapat manfaat dari URL dan pengaturan email yang realistis; integrasi pengiriman email serta storage eksternal hanya ditambahkan bila konfigurasi publikasi memakainya.'
      ],
      capabilities: [
        'Publishing Editor',
        'Memberships',
        'Newsletters',
        'Theme API',
        'Content API',
        'Subscription Tiers'
      ],
      useCases: [
        'Publikasi independen',
        'Newsletter berbayar',
        'Situs membership kreator',
        'Situs merek editorial',
        'Pengembangan tema Ghost khusus'
      ],
      localEnvironment: {
        title: 'Pengembangan Ghost mengikuti alur publikasi',
        description:
          'Hal lokal yang penting adalah database publikasi, perilaku tema, URL untuk member, dan integrasi pengiriman yang dikonfigurasi.',
        items: [
          {
            title: 'Node.js dan Ghost CLI',
            description:
              'Jalankan instance Ghost dan gunakan tooling instalasi serta development yang didukung.'
          },
          {
            title: 'Database',
            description:
              'SQLite sesuai untuk development lokal secara default; MySQL digunakan bila setup terpilih memerlukannya.'
          },
          {
            title: 'File tema dan URL lokal',
            description:
              'Pengembangan tema memerlukan URL publikasi lokal untuk menguji routing, member, dan aset browser.'
          },
          {
            title: 'Pengiriman email bila dikonfigurasi',
            description:
              'Gunakan SMTP hanya untuk menguji email transaksional; newsletter Ghost memerlukan integrasi API Mailgun yang dikonfigurasi.'
          }
        ]
      }
    },
    magento: {
      replaceOverview: true,
      paragraphs: [
        'Magento Open Source adalah platform commerce PHP untuk toko dengan katalog, harga, promosi, grup pelanggan, perilaku checkout, dan banyak storefront yang kompleks. Arsitektur modularnya menjadikan pengembangan extension dan integrasi sebagai bagian inti implementasi.',
        'Pengembangan Magento lokal jauh lebih terlibat daripada situs PHP dasar. Bergantung konfigurasi proyek, dependency Composer, MySQL, indeks pencarian, cache atau session Redis, cron, consumer antrean, kode hasil generate, dan konten statis dapat aktif bersamaan.'
      ],
      capabilities: [
        'Catalog & Inventory',
        'Multi-store',
        'Promotions',
        'Checkout',
        'Search Indexing',
        'Extension Modules'
      ],
      useCases: [
        'Operasi ritel multi-store',
        'Katalog B2B dan harga pelanggan',
        'Katalog produk besar',
        'Integrasi commerce dengan ERP atau PIM',
        'Pengembangan checkout dan extension khusus'
      ],
      localEnvironment: {
        title: 'Pengembangan Magento mengoordinasikan stack commerce',
        description:
          'Katalog sederhana tidak mengaktifkan setiap layanan, tetapi pekerjaan Magento nyata sering memerlukan banyak proses untuk menunjukkan indexing, cache, dan perilaku asinkron.',
        items: [
          {
            title: 'PHP, Composer, dan kode generate',
            description:
              'Magento menggunakan paket Composer dan class hasil generate; perintah CLI mengelola compilation serta perubahan setup.'
          },
          {
            title: 'MySQL atau MariaDB',
            description:
              'Menyimpan katalog, pelanggan, penjualan, konfigurasi, dan data terkait indeks.'
          },
          {
            title: 'OpenSearch atau Elasticsearch',
            description:
              'Versi Magento yang didukung memerlukannya untuk pencarian katalog dan indexing; gunakan engine yang diminta rilis proyek.'
          },
          {
            title: 'Redis, cron, dan consumer bila diaktifkan',
            description:
              'Redis umum untuk cache atau session, sementara cron dan consumer message queue diperlukan hanya untuk fitur yang dikonfigurasi.'
          },
          {
            title: 'Tooling konten statis',
            description:
              'Tooling Node.js opsional, tetapi konten statis Magento dan aset tema harus dibangun ulang bila alur proyek memerlukannya.'
          }
        ]
      }
    },
    prestashop: {
      replaceOverview: true,
      paragraphs: [
        'PrestaShop adalah platform e-commerce PHP untuk merchant yang mengelola katalog produk, pesanan, pembayaran, pengiriman, dan promosi. Module dan tema memungkinkan toko menyesuaikan storefront serta back office tanpa mengganti commerce core.',
        'Toko PrestaShop lokal umumnya memerlukan PHP, MySQL atau MariaDB, server web, dan URL khusus toko. Pekerjaan module serta tema harus mempertahankan database dan aset gambar; Node.js hanya ditambahkan untuk tooling aset tema yang memang menggunakannya.'
      ],
      capabilities: [
        'Product Catalog',
        'Order Management',
        'Modules',
        'Themes',
        'Carrier Rules',
        'Multi-language Storefronts'
      ],
      useCases: [
        'Toko online kecil dan menengah',
        'Kustomisasi storefront merchant',
        'Integrasi module pembayaran dan pengiriman',
        'Situs katalog terlokalisasi',
        'Pengembangan tema dan module'
      ],
      localEnvironment: {
        title: 'Lingkungan PrestaShop adalah toko yang berjalan',
        description:
          'Status katalog, module, aset tema, dan perilaku browser perlu tersedia bersama untuk menguji perubahan secara realistis.',
        items: [
          {
            title: 'Server web PHP',
            description:
              'Jalankan toko dengan versi PHP serta extension yang didukung rilis PrestaShop.'
          },
          {
            title: 'MySQL atau MariaDB',
            description: 'Menyimpan produk, pelanggan, pesanan, konfigurasi, dan data module.'
          },
          {
            title: 'URL toko dan file gambar',
            description:
              'Gunakan domain lokal untuk perilaku storefront dan pertahankan path gambar produk saat menguji import atau tema.'
          },
          {
            title: 'Tool aset tema bila digunakan',
            description:
              'Node.js opsional dan hanya dimulai untuk tema atau alur frontend yang menyatakannya.'
          }
        ]
      }
    },
    opencart: {
      replaceOverview: true,
      paragraphs: [
        'OpenCart adalah platform e-commerce PHP untuk membangun dan mengoperasikan toko online. Katalog, sistem pesanan, extension, tema, dan dukungan multi-store memberi merchant jalur yang langsung dari data produk ke storefront pelanggan.',
        'Pekerjaan OpenCart lokal biasanya berpusat pada PHP, database kompatibel MySQL, server web, dan URL toko. Perubahan extension, gambar produk, perilaku rewrite, serta callback pembayaran atau pengiriman lebih relevan untuk alur ini daripada stack layanan aplikasi generik.'
      ],
      capabilities: [
        'Product Catalog',
        'Order Processing',
        'Extensions',
        'Theme System',
        'Multi-store',
        'Language Packs'
      ],
      useCases: [
        'Toko online kecil',
        'Storefront katalog khusus',
        'Pekerjaan extension pembayaran dan pengiriman',
        'Setup merchant multi-store',
        'Kustomisasi tema OpenCart'
      ],
      localEnvironment: {
        title: 'Setup OpenCart perlu berperilaku sebagai storefront',
        description:
          'Menguji toko berarti mempertahankan data katalog, path gambar, URL rewrite, dan pengaturan integrasi yang menghadap browser.',
        items: [
          {
            title: 'PHP dan server web',
            description:
              'Sajikan OpenCart dengan versi PHP serta extension yang diperlukan oleh rilis terpasang.'
          },
          {
            title: 'MySQL atau MariaDB',
            description:
              'Menyimpan data katalog, akun pelanggan, pesanan, pengaturan, dan konfigurasi extension.'
          },
          {
            title: 'Gambar dan URL toko lokal',
            description:
              'Pertahankan direktori gambar dan gunakan domain lokal untuk menguji link storefront serta aturan rewrite.'
          },
          {
            title: 'HTTPS bila callback diperlukan',
            description:
              'Origin lokal aman berguna ketika provider pembayaran, alur OAuth, atau callback eksternal memerlukannya.'
          }
        ]
      }
    },
    payload: {
      replaceOverview: true,
      paragraphs: [
        'Payload CMS adalah CMS headless dan framework aplikasi yang mengutamakan TypeScript. Collection, field, hook, access control, admin panel yang dihasilkan, upload, serta REST atau GraphQL API didefinisikan dalam kode aplikasi, bukan dirakit melalui layer konfigurasi CMS terpisah.',
        'Proyek Payload biasanya memakai Node.js dengan database adapter yang dipilih dalam konfigurasinya. Kerja lokal sering mencakup perubahan skema, akses admin, storage upload, dan kode server khusus; Redis, object storage, atau layanan email adalah integrasi opsional, bukan kebutuhan framework.'
      ],
      capabilities: [
        'Collections berbasis kode',
        'Admin Panel',
        'Access Control',
        'Hooks',
        'REST & GraphQL',
        'Upload Collections'
      ],
      useCases: [
        'API konten headless',
        'Aplikasi editorial khusus',
        'Situs produk berbasis konten',
        'Backend aplikasi TypeScript',
        'Ekstensi CMS dengan aturan akses khusus'
      ],
      localEnvironment: {
        title: 'Pengembangan Payload dimulai dari konfigurasi TypeScript',
        description:
          'Database adapter dan strategi upload terpilih menentukan sebagian besar lingkungan pendukung lokal.',
        items: [
          {
            title: 'Node.js dan package manager',
            description: 'Menjalankan server Payload, tooling TypeScript, dan skrip proyek.'
          },
          {
            title: 'Database adapter terkonfigurasi',
            description:
              'MongoDB, PostgreSQL, SQLite, atau adapter yang didukung harus cocok dengan konfigurasi serta migration proyek.'
          },
          {
            title: 'URL admin dan media storage',
            description:
              'URL lokal stabil mendukung pengujian admin serta auth; upload memakai adapter storage lokal atau eksternal yang dikonfigurasi.'
          },
          {
            title: 'Layanan eksternal bila terintegrasi',
            description:
              'Redis, SMTP, dan object storage hanya ditambahkan untuk plugin atau fitur aplikasi yang dikonfigurasi.'
          }
        ]
      }
    },
    strapi: {
      replaceOverview: true,
      paragraphs: [
        'Strapi adalah CMS headless Node.js yang memodelkan konten terstruktur dan mengeksposnya melalui panel administrasi serta REST atau GraphQL API. Content type, perilaku lifecycle, role, plugin, dan penanganan media menjadikannya backend bagi berbagai klien frontend.',
        'Lingkungan Strapi lokal dipimpin oleh Node.js dan database terpilih. Perubahan content type memengaruhi skema serta perilaku API, sedangkan provider upload, email, Redis, dan pengaturan proxy adalah integrasi proyek yang hanya ditampilkan bila dikonfigurasi.'
      ],
      capabilities: [
        'Content-Type Builder',
        'REST & GraphQL APIs',
        'Roles and Permissions',
        'Admin Panel',
        'Media Library',
        'Lifecycle Hooks'
      ],
      useCases: [
        'CMS headless untuk frontend web',
        'API konten mobile',
        'Sistem editorial multi-kanal',
        'API konten produk dan katalog',
        'Pengembangan plugin Strapi khusus'
      ],
      localEnvironment: {
        title: 'Pengembangan Strapi berpusat pada content type dan API',
        description:
          'Stack lokal harus membuat perubahan skema, administrasi, media, dan integrasi terpilih berperilaku konsisten.',
        items: [
          {
            title: 'Runtime Node.js',
            description: 'Menjalankan Strapi, build administrasinya, dan skrip proyek.'
          },
          {
            title: 'Database SQL terkonfigurasi',
            description:
              'SQLite sesuai untuk kerja lokal sederhana; PostgreSQL atau MySQL umum saat menyamakan proyek deployment.'
          },
          {
            title: 'Provider media',
            description:
              'Gunakan upload lokal untuk development kecuali proyek mengonfigurasi provider eksternal yang kompatibel S3 atau lainnya.'
          },
          {
            title: 'Redis atau SMTP bila dikonfigurasi',
            description:
              'Layanan cache, antrean, dan email adalah integrasi opsional, bukan kebutuhan Strapi default.'
          }
        ]
      }
    },
    directus: {
      replaceOverview: true,
      paragraphs: [
        'Directus adalah platform data yang menambahkan studio, autentikasi, permission, automation, file, serta REST atau GraphQL API di atas database SQL yang sudah ada. Directus dirancang dengan skema database sebagai sumber kebenaran, bukan model konten code-first.',
        'Kerja Directus lokal dimulai dari Node.js dan database yang diekspos. Snapshot skema, aturan role, file storage, dan Flow lazim diuji bersama; Redis, object storage, dan email adalah layanan opsional yang dipilih konfigurasi proyek.'
      ],
      capabilities: [
        'Database Introspection',
        'Data Studio',
        'REST & GraphQL APIs',
        'Roles and Permissions',
        'Flows Automation',
        'File Management'
      ],
      useCases: [
        'API di atas data SQL yang ada',
        'Administrasi data internal',
        'Operasi konten headless',
        'Otomasi workflow di sekitar record',
        'Portal data partner atau pelanggan'
      ],
      localEnvironment: {
        title: 'Lingkungan Directus berakar pada skema database',
        description:
          'Database terpilih dan perubahan skemanya adalah pusatnya; layanan tambahan hanya ditambahkan bila Directus benar-benar dikonfigurasi untuk memakainya.',
        items: [
          {
            title: 'Node.js dan layanan Directus',
            description: 'Menjalankan API, Data Studio, dan extension proyek.'
          },
          {
            title: 'Database SQL',
            description:
              'PostgreSQL, MySQL, SQLite, atau database didukung lain menyediakan model data sekaligus metadata Directus.'
          },
          {
            title: 'Snapshot skema dan extension',
            description:
              'Simpan snapshot skema, endpoint khusus, hook, dan extension antarmuka bersama layanan lokal.'
          },
          {
            title: 'Storage, Redis, dan mail bila dikonfigurasi',
            description:
              'Adapter file, layanan cache, dan SMTP hanya milik konfigurasi Directus yang sedang diuji.'
          }
        ]
      }
    }
  }
}
