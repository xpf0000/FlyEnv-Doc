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

export const solutionAboutGroupC: {
  en: Partial<Record<SolutionSlug, SolutionAboutContent>>
  zh: Partial<Record<SolutionSlug, SolutionAboutContent>>
  id: Partial<Record<SolutionSlug, SolutionAboutContent>>
  es: Partial<Record<SolutionSlug, SolutionAboutContent>>
} = {
  en: {
    'spring-boot': {
      replaceOverview: true,
      paragraphs: [
        'Spring Boot is the convention-driven layer of the Spring ecosystem for building standalone Java services. Its auto-configuration and starter dependencies let a service expose HTTP endpoints, persistence, security, and operational features without assembling every integration by hand.',
        'A local Spring Boot service is commonly run through Maven or Gradle with a selected JDK and a profile-specific configuration file. The surrounding database, migration tool, messaging client, and Actuator endpoints should reflect the dependencies actually enabled by that service.'
      ],
      capabilities: [
        'Auto-configuration',
        'Spring MVC / WebFlux',
        'Spring Data',
        'Spring Security',
        'Actuator',
        'Starter dependencies'
      ],
      useCases: [
        'Business REST services',
        'Enterprise integration APIs',
        'Transactional back-office systems',
        'Microservice-based platforms'
      ],
      localEnvironment: {
        title: 'A Spring Boot environment starts with more than a JAR',
        description:
          'The JDK and build tool are central; data stores and brokers belong beside the service only when its active profile configures them.',
        items: [
          {
            title: 'JDK, Maven, or Gradle',
            description: 'Compiles, tests, and runs the service with its declared dependency graph.'
          },
          {
            title: 'Profile database and migrations',
            description:
              'PostgreSQL, MySQL, and Flyway or Liquibase are common when the service persists domain data.'
          },
          {
            title: 'Actuator and integration endpoints',
            description:
              'Expose health, metrics, callbacks, or OAuth redirects locally; a broker such as Kafka is optional and service-specific.'
          }
        ]
      }
    },
    quarkus: {
      replaceOverview: true,
      paragraphs: [
        'Quarkus is a Java framework designed around fast startup, low memory use, and cloud-native deployment. It combines familiar Jakarta, REST, persistence, and reactive APIs with extension-based configuration and a developer mode that reloads code and configuration quickly.',
        'Local Quarkus work normally centers on `quarkus dev`, the chosen JDK, and the extensions declared by the project. Dev Services can provision certain containers automatically, but a database, Kafka, Redis, or native build tool should only be started when the application uses it.'
      ],
      capabilities: [
        'Dev Mode',
        'Extension ecosystem',
        'RESTEasy Reactive',
        'CDI with ArC',
        'Dev Services',
        'Native executable builds'
      ],
      useCases: [
        'Cloud-native Java APIs',
        'Container-first microservices',
        'Event-driven services',
        'Low-latency backend endpoints'
      ],
      localEnvironment: {
        title: 'Quarkus local work follows the selected extensions',
        description:
          'A small REST project can run with a JDK alone, while persistence or messaging extensions introduce their own local services.',
        items: [
          {
            title: 'JDK and quarkus dev',
            description: 'Runs continuous testing and live reload during development.'
          },
          {
            title: 'Extension-backed services',
            description:
              'A configured datasource, Redis client, or Kafka channel may need a matching local service; Dev Services can handle some setups.'
          },
          {
            title: 'Native build toolchain',
            description:
              'GraalVM or Mandrel is needed only when the project builds and tests a native executable.'
          }
        ]
      }
    },
    gin: {
      replaceOverview: true,
      paragraphs: [
        'Gin is a lightweight Go HTTP framework focused on fast routing and a small, explicit middleware pipeline. It is usually used to build JSON APIs where route groups, binding, validation, and handler composition stay close to the application code.',
        'A Gin project is developed with the Go toolchain and modules rather than a separate framework runtime. Its local shape is defined by the application configuration: a SQL database, Redis, generated API clients, or a reverse proxy are project dependencies, not Gin requirements.'
      ],
      capabilities: [
        'Radix-tree routing',
        'Middleware chain',
        'Route groups',
        'JSON binding',
        'Validation',
        'Context handling'
      ],
      useCases: [
        'High-throughput JSON APIs',
        'Internal Go services',
        'Webhook receivers',
        'Gateway and integration endpoints'
      ],
      localEnvironment: {
        title: 'A Gin service is driven by Go modules and configuration',
        description:
          'The framework itself needs Go; local data and integration services should match the repositories imported by the service.',
        items: [
          {
            title: 'Go toolchain and modules',
            description: 'Runs `go run`, tests, builds, and module dependency resolution.'
          },
          {
            title: 'Configured data store',
            description:
              'PostgreSQL, MySQL, or Redis is relevant only when the handlers or repository layer use it.'
          },
          {
            title: 'API client and webhook origin',
            description:
              'A local domain with HTTPS is useful when browser clients, signed webhooks, or OAuth callbacks require a stable origin.'
          }
        ]
      }
    },
    'aspnet-core': {
      replaceOverview: true,
      paragraphs: [
        'ASP.NET Core is the cross-platform .NET framework for HTTP APIs and server-rendered web applications. It combines a hosting model, middleware pipeline, dependency injection, configuration providers, and web stacks such as Minimal APIs, MVC, Razor Pages, and SignalR.',
        'Development generally uses the project SDK through `dotnet run` or an IDE launch profile. Local configuration can select Kestrel certificates, Entity Framework Core migrations, user secrets, and only those backing services such as SQL Server, PostgreSQL, Redis, or a message broker that the application actually configures.'
      ],
      capabilities: [
        'Minimal APIs',
        'MVC and Razor Pages',
        'Built-in dependency injection',
        'Middleware pipeline',
        'ASP.NET Core Identity',
        'SignalR'
      ],
      useCases: [
        'Line-of-business web applications',
        'REST and gRPC services',
        'Real-time dashboards',
        'Cross-platform enterprise APIs'
      ],
      localEnvironment: {
        title: 'An ASP.NET Core project is shaped by its launch profile',
        description:
          'The .NET SDK and Kestrel can be enough for a small application; persistent data and distributed features add selected services.',
        items: [
          {
            title: '.NET SDK and Kestrel',
            description:
              'Builds and runs the application through `dotnet run` with development settings.'
          },
          {
            title: 'EF Core database',
            description:
              'SQL Server, PostgreSQL, or another provider is used when the project applies migrations and stores application state.'
          },
          {
            title: 'Development HTTPS and secrets',
            description:
              'The local development certificate and Secret Manager support secure browser flows without placing credentials in source control.'
          }
        ]
      }
    },
    nextcloud: {
      replaceOverview: true,
      paragraphs: [
        'Nextcloud is a self-hosted collaboration platform centered on file synchronization, sharing, and extensible team applications. Its server combines user storage with apps for calendar, contacts, office integration, notifications, and external storage.',
        'A local Nextcloud installation is a PHP web application with a database and a writable data directory, typically managed through the `occ` command. Redis, a full-text search backend, an office server, and a reverse proxy are common additions for particular deployments, but they are not mandatory for every instance.'
      ],
      capabilities: [
        'File sync and sharing',
        'Apps ecosystem',
        'Calendar and contacts',
        'External storage',
        'Federated sharing',
        'occ administration'
      ],
      useCases: [
        'Private team file sharing',
        'Self-hosted collaboration portals',
        'Document synchronization testing',
        'Custom Nextcloud app development'
      ],
      localEnvironment: {
        title: 'Nextcloud needs storage, web access, and scheduled maintenance',
        description:
          'The data directory and database are core. Other services depend on enabled apps, scale, and the way the instance is integrated.',
        items: [
          {
            title: 'PHP web server and data directory',
            description: 'Serve the application and retain user files outside the application code.'
          },
          {
            title: 'Database and occ',
            description:
              'MySQL, MariaDB, or PostgreSQL stores metadata while `occ` performs installation, upgrades, and maintenance.'
          },
          {
            title: 'Cron and optional Redis',
            description:
              'Background jobs should run through cron; Redis is often configured for locking or cache, but is optional for a basic instance.'
          },
          {
            title: 'Optional office or search service',
            description:
              'Collabora, OnlyOffice, or a search backend is started only when those integrations are enabled.'
          }
        ]
      }
    },
    erpnext: {
      replaceOverview: true,
      paragraphs: [
        'ERPNext is an open-source ERP built on the Frappe Framework for accounting, sales, inventory, manufacturing, HR, and operational workflows. Its model is based on configurable DocTypes, role-aware forms, reports, and business processes rather than a standalone Python request server alone.',
        'Local development uses Bench to manage sites, Python environments, assets, workers, and process commands. A normal stack includes MariaDB and Redis; Node.js is used for asset workflows, while a scheduler, Socket.IO process, and worker queues are part of the Frappe process model.'
      ],
      capabilities: [
        'DocTypes',
        'Accounting ledger',
        'Inventory workflows',
        'Reports and print formats',
        'Role permissions',
        'Frappe Bench'
      ],
      useCases: [
        'Accounting and invoicing',
        'Inventory and procurement',
        'Manufacturing operations',
        'HR and payroll workflows',
        'Custom business applications on Frappe'
      ],
      localEnvironment: {
        title: 'ERPNext development is a Bench-managed multi-process stack',
        description:
          'Unlike a simple Python site, a local bench coordinates the site database, Redis-backed queues, assets, workers, and scheduler.',
        items: [
          {
            title: 'Bench and Python environment',
            description: 'Creates sites and runs Frappe or ERPNext commands such as `bench start`.'
          },
          {
            title: 'MariaDB and Redis',
            description:
              'MariaDB stores site data; Redis supports cache, queues, and Socket.IO-related services.'
          },
          {
            title: 'Workers, scheduler, and Socket.IO',
            description:
              'Process background jobs, scheduled documents, and realtime updates during realistic development.'
          },
          {
            title: 'Node.js asset workflow',
            description:
              'Required by Bench asset building; it is not a replacement for ERPNext application processes.'
          }
        ]
      }
    },
    odoo: {
      replaceOverview: true,
      paragraphs: [
        'Odoo is a modular suite of business applications covering sales, accounting, inventory, manufacturing, CRM, and more. Functional changes are commonly delivered as installable modules that define models, views, access rules, data files, and business logic on top of the Odoo ORM.',
        'A local Odoo instance runs with a release-compatible Python environment and PostgreSQL database. Development often points `addons_path` at custom modules and uses `odoo-bin` to install or upgrade them; longpolling, SMTP, a proxy, or external workers are only needed for features that use them.'
      ],
      capabilities: [
        'Modular addons',
        'Odoo ORM',
        'Views and actions',
        'Access control lists',
        'Automated actions',
        'Multi-company support'
      ],
      useCases: [
        'Sales and CRM operations',
        'Accounting and invoicing',
        'Warehouse management',
        'Manufacturing planning',
        'Custom vertical business modules'
      ],
      localEnvironment: {
        title: 'Odoo development centers on addons and PostgreSQL',
        description:
          'The runtime and database are core; deployment services should be introduced only where a custom module or test flow needs them.',
        items: [
          {
            title: 'Python and odoo-bin',
            description:
              'Run the server, load a development configuration, and upgrade modules with `-u`.'
          },
          {
            title: 'PostgreSQL',
            description:
              'Stores each Odoo database, module registry, records, and attachments metadata.'
          },
          {
            title: 'Custom addons path',
            description:
              'Keeps local modules separate from the Odoo source and makes them available to the instance.'
          },
          {
            title: 'Optional mail and proxy services',
            description:
              'SMTP or a reverse proxy is relevant only when mail flows, public URLs, or deployment-like routing are being tested.'
          }
        ]
      }
    },
    suitecrm: {
      replaceOverview: true,
      paragraphs: [
        'SuiteCRM is a PHP customer relationship management system for sales, marketing, service, and business process automation. It is organized around modules such as Accounts, Contacts, Leads, Opportunities, workflows, reports, and configurable fields rather than a generic PHP project structure.',
        'A local installation needs PHP, a compatible MySQL or MariaDB database, and a web server. Administrators and developers work with Module Builder, Studio, repair tools, scheduled jobs, and email configuration; search or cache services are not inherent requirements and should be added only when configured.'
      ],
      capabilities: [
        'CRM modules',
        'Studio and Module Builder',
        'Workflow automation',
        'Reports and dashboards',
        'Role security',
        'Scheduled jobs'
      ],
      useCases: [
        'Sales pipeline management',
        'Customer support operations',
        'Marketing campaign tracking',
        'Custom CRM module development'
      ],
      localEnvironment: {
        title: 'SuiteCRM local work follows its modules and scheduled jobs',
        description:
          'A PHP web stack and CRM database are essential. Background and integration services depend on enabled business workflows.',
        items: [
          {
            title: 'PHP web stack',
            description:
              'Runs SuiteCRM through Apache, Nginx with PHP-FPM, or another compatible local web server.'
          },
          {
            title: 'MySQL or MariaDB',
            description:
              'Stores customer records, module metadata, settings, and relationship data.'
          },
          {
            title: 'Cron scheduler',
            description: 'Runs configured scheduled jobs, campaign actions, and maintenance tasks.'
          },
          {
            title: 'Optional SMTP sandbox',
            description:
              'Useful when developing email templates and inbound or outbound mail behavior.'
          }
        ]
      }
    },
    espocrm: {
      replaceOverview: true,
      paragraphs: [
        'EspoCRM is a PHP CRM platform built around entity definitions, relationship metadata, roles, layouts, and extensible business logic. It provides sales, marketing, support, and reporting workflows while allowing teams to add custom entities and integrations through its metadata-driven model.',
        'A local EspoCRM project runs on PHP with MySQL or MariaDB and a web server. The built-in scheduled-job endpoint must be triggered by cron for automation, while IMAP, SMTP, WebSocket, or Redis-related services are relevant only for installations configured to use those integrations.'
      ],
      capabilities: [
        'Entity Manager',
        'Relationship metadata',
        'Role-based access',
        'BPM and workflows',
        'Formula scripts',
        'REST API'
      ],
      useCases: [
        'Sales and account management',
        'Customer support tracking',
        'Lead qualification',
        'Custom relationship-based CRM applications'
      ],
      localEnvironment: {
        title: 'EspoCRM combines entity metadata with scheduled automation',
        description:
          'The main local stack is intentionally compact; integration services are driven by the features under development.',
        items: [
          {
            title: 'PHP and web server',
            description: 'Serve the CRM application and its API on a local URL.'
          },
          {
            title: 'MySQL or MariaDB',
            description: 'Persists entities, relationships, user settings, and custom metadata.'
          },
          {
            title: 'Cron for scheduled jobs',
            description:
              'Calls EspoCRM scheduled-job processing so automation behaves like a running installation.'
          },
          {
            title: 'Optional mail integration',
            description:
              'Local SMTP or IMAP testing is needed only for email synchronization and notification features.'
          }
        ]
      }
    },
    gitea: {
      replaceOverview: true,
      paragraphs: [
        'Gitea is a self-hosted Git forge that provides repository hosting, pull requests, issues, actions, packages, and organization management. It is a deployable service with Git-over-SSH and HTTP behavior, not merely a Go project that developers run as an API framework.',
        'A local Gitea instance can use embedded SQLite for a small evaluation, or MySQL, MariaDB, or PostgreSQL for a more representative server setup. Its `app.ini` controls repository storage, SSH, OAuth, mail, actions, and database settings; Go is only necessary when building the service from source.'
      ],
      capabilities: [
        'Git over SSH and HTTP',
        'Pull requests',
        'Issues and projects',
        'Gitea Actions',
        'Package registry',
        'Organization management'
      ],
      useCases: [
        'Private team Git hosting',
        'Self-managed CI experimentation',
        'Source control integration testing',
        'Internal package publishing'
      ],
      localEnvironment: {
        title: 'Gitea combines a forge service with Git transport',
        description:
          'A compact evaluation can be one executable plus SQLite, while authentication, actions, and production-like storage add targeted dependencies.',
        items: [
          {
            title: 'Gitea service and app.ini',
            description:
              'Runs the web forge and configures its repositories, SSH port, security settings, and storage.'
          },
          {
            title: 'Database choice',
            description:
              'SQLite suits a small local instance; MySQL, MariaDB, or PostgreSQL is used when configured for a shared-style setup.'
          },
          {
            title: 'SSH and local domain',
            description:
              'Test clone URLs, SSH keys, webhooks, and browser flows with the same endpoints clients will use.'
          },
          {
            title: 'Optional Actions runner',
            description: 'A runner is required only when validating Gitea Actions workflows.'
          }
        ]
      }
    },
    keycloak: {
      replaceOverview: true,
      paragraphs: [
        'Keycloak is an identity and access management server for single sign-on, OAuth 2.0, OpenID Connect, SAML, and identity brokering. Its core concepts are realms, clients, users, roles, groups, scopes, and authentication flows, which applications consume through standards-based protocols.',
        'Local Keycloak development is primarily about a stable issuer URL and realistic redirect URIs. The development server can use a development database, while PostgreSQL is typical for persistent local realms; external user federation, SMTP, and reverse-proxy HTTPS should only be introduced when those flows are being tested.'
      ],
      capabilities: [
        'Realms and clients',
        'OAuth 2.0 and OpenID Connect',
        'SAML',
        'Authentication flows',
        'Identity brokering',
        'User federation'
      ],
      useCases: [
        'Single sign-on for applications',
        'OAuth/OIDC integration testing',
        'Central role management',
        'Identity provider federation'
      ],
      localEnvironment: {
        title: 'Keycloak testing depends on issuer and redirect URLs',
        description:
          'The auth server and a persistent realm store are the essentials; other services derive from the authentication scenario.',
        items: [
          {
            title: 'Keycloak server and realm import',
            description:
              'Runs the identity provider and can load repeatable test clients, roles, and users.'
          },
          {
            title: 'PostgreSQL for persistent realms',
            description:
              'Common for durable local identity data; development mode may use another supported option for quick experiments.'
          },
          {
            title: 'HTTPS domain and redirect URIs',
            description:
              'Lets browser clients, cookies, CORS, and callback validation behave like an integrated environment.'
          },
          {
            title: 'Optional SMTP or external IdP',
            description:
              'Needed only for email verification, password recovery, or brokered login flows.'
          }
        ]
      }
    },
    pocketbase: {
      replaceOverview: true,
      paragraphs: [
        'PocketBase is a compact backend application that bundles an embedded SQLite database, auth, REST APIs, realtime subscriptions, file storage, and an admin UI. Its deployment model favors one executable and a local data directory instead of a separately operated database server for typical projects.',
        'A local PocketBase workflow starts the executable with its `pb_data` directory and tests collections, API rules, hooks, migrations, and realtime clients together. Go is needed for source-based extensions or custom builds, while a reverse proxy and HTTPS are optional when browser origin or OAuth callback testing requires them.'
      ],
      capabilities: [
        'Embedded SQLite',
        'Collection API rules',
        'Authentication',
        'Realtime subscriptions',
        'File storage',
        'JavaScript and Go hooks'
      ],
      useCases: [
        'Small product backends',
        'Prototype APIs',
        'Realtime administrative tools',
        'Self-contained internal applications'
      ],
      localEnvironment: {
        title: 'PocketBase keeps most local state in one service',
        description:
          'Its embedded data store removes the need for a separate SQL server in many projects, though client integrations can still require a stable local origin.',
        items: [
          {
            title: 'PocketBase executable and pb_data',
            description:
              'Run the backend and preserve embedded SQLite data and file storage locally.'
          },
          {
            title: 'Migration and hook workflow',
            description:
              'Keep collection changes in `pb_migrations` and test JavaScript or Go extension behavior against local data.'
          },
          {
            title: 'Optional HTTPS proxy',
            description:
              'Useful for OAuth providers, secure cookies, or browser clients that require an HTTPS callback URL.'
          }
        ]
      }
    },
    matomo: {
      replaceOverview: true,
      paragraphs: [
        'Matomo is a self-hosted web analytics platform focused on keeping analytics data under the operator’s control. It records visits through a tracking endpoint and turns stored events into reports for websites, campaigns, goals, e-commerce activity, and privacy-aware measurement.',
        'Local Matomo development uses PHP, a MySQL-compatible database, and a web server, with the archive process running on a schedule for production-like reporting. A test site or tracking client is needed to generate events; Redis, a tag manager setup, or a proxy should be used only when the selected installation enables them.'
      ],
      capabilities: [
        'JavaScript tracker',
        'Goals and conversions',
        'E-commerce analytics',
        'Custom reports',
        'Privacy controls',
        'Scheduled archiving'
      ],
      useCases: [
        'Self-hosted website analytics',
        'Campaign attribution testing',
        'E-commerce conversion reporting',
        'Privacy-sensitive measurement deployments'
      ],
      localEnvironment: {
        title: 'Matomo needs both tracking traffic and report archiving',
        description:
          'The analytics application and database are core, but reports are most representative when local visits and scheduled archive jobs are exercised.',
        items: [
          {
            title: 'PHP web application',
            description: 'Serves the Matomo UI and the tracking endpoint used by test websites.'
          },
          {
            title: 'MySQL or MariaDB',
            description: 'Stores configuration, visit logs, conversions, and processed report data.'
          },
          {
            title: 'Archive cron job',
            description:
              'Runs `core:archive` on a schedule to build reports rather than relying only on browser-triggered archiving.'
          },
          {
            title: 'Test tracker origin',
            description:
              'A local site or test client supplies realistic tracking requests and consent behavior.'
          }
        ]
      }
    },
    metabase: {
      replaceOverview: true,
      paragraphs: [
        'Metabase is a business intelligence application for exploring data, composing questions, publishing dashboards, and distributing alerts. It keeps its own application metadata separate from the databases that analysts query, so permissions, collections, cards, and connections can be managed independently of business data.',
        'A local Metabase instance runs on Java with an application database such as PostgreSQL for durable metadata. It also needs one or more reachable sample data sources for meaningful development; SMTP, SSO, embedding settings, and a reverse proxy are optional integrations chosen by the deployment.'
      ],
      capabilities: [
        'Visual query builder',
        'SQL editor',
        'Dashboards',
        'Alerts and subscriptions',
        'Collections and permissions',
        'Embedding'
      ],
      useCases: [
        'Operational dashboards',
        'Self-service data exploration',
        'Embedded product analytics',
        'Scheduled business reporting'
      ],
      localEnvironment: {
        title: 'Metabase separates its metadata from analytical data sources',
        description:
          'A durable application database and a realistic query target make local dashboards reproducible; integration services are scenario-dependent.',
        items: [
          {
            title: 'Java runtime and Metabase application',
            description: 'Starts the server and its administration interface.'
          },
          {
            title: 'Application metadata database',
            description:
              'PostgreSQL or another supported database persists users, cards, dashboards, and connections.'
          },
          {
            title: 'Connected sample data source',
            description:
              'A reachable project database is needed to build and verify questions, models, and dashboards.'
          },
          {
            title: 'Optional SMTP or SSO',
            description:
              'Use these only when testing subscriptions, user provisioning, or enterprise authentication.'
          }
        ]
      }
    },
    'apache-superset': {
      replaceOverview: true,
      paragraphs: [
        'Apache Superset is an open-source analytics and data exploration platform built around SQLAlchemy connections, SQL Lab, chart definitions, dashboards, and fine-grained permissions. It is typically used to query existing analytical data stores rather than to own the business data itself.',
        'A local Superset environment uses Python and a metadata database, with Redis and Celery commonly handling cache, asynchronous queries, alerts, and reports. The `superset` CLI initializes metadata and roles; a broker, SMTP service, or reverse proxy is only required when the selected features use it.'
      ],
      capabilities: [
        'SQL Lab',
        'Dataset semantic layer',
        'Chart explorer',
        'Dashboards',
        'Role permissions',
        'Alerts and reports'
      ],
      useCases: [
        'Exploratory SQL analysis',
        'Operational analytics dashboards',
        'Embedded BI',
        'Scheduled report delivery',
        'Data source integration testing'
      ],
      localEnvironment: {
        title: 'Superset local development spans metadata, cache, and data engines',
        description:
          'A basic instance can start simply, but asynchronous analytics features need the same worker topology configured for the project.',
        items: [
          {
            title: 'Python environment and superset CLI',
            description:
              'Runs the web server and commands such as `superset db upgrade` and `superset init`.'
          },
          {
            title: 'Metadata database',
            description:
              'PostgreSQL or MySQL commonly persists users, datasets, charts, dashboards, and configuration.'
          },
          {
            title: 'Redis and Celery workers',
            description:
              'Common when caching, asynchronous SQL Lab queries, alerts, or reports are enabled.'
          },
          {
            title: 'Analytical data sources',
            description:
              'Connect only the databases or warehouses required to test datasets and dashboards.'
          }
        ]
      }
    }
  },
  zh: {
    'spring-boot': {
      replaceOverview: true,
      paragraphs: [
        'Spring Boot 是 Spring 生态中用于构建独立 Java 服务的约定优于配置层。自动配置和 Starter 依赖让服务无需逐项组装集成，即可提供 HTTP 接口、持久化、安全能力和运维端点。',
        '本地 Spring Boot 服务通常通过 Maven 或 Gradle、指定的 JDK 以及 profile 配置运行。数据库、迁移工具、消息客户端和 Actuator 端点应与该服务实际启用的依赖保持一致。'
      ],
      capabilities: [
        '自动配置',
        'Spring MVC / WebFlux',
        'Spring Data',
        'Spring Security',
        'Actuator',
        'Starter 依赖'
      ],
      useCases: ['业务 REST 服务', '企业集成 API', '事务型后台系统', '微服务平台'],
      localEnvironment: {
        title: 'Spring Boot 环境不只是一个 JAR',
        description:
          'JDK 与构建工具是核心；数据存储和消息代理只应在活动 profile 配置它们时与服务一同运行。',
        items: [
          { title: 'JDK、Maven 或 Gradle', description: '编译、测试并按声明的依赖图运行服务。' },
          {
            title: 'Profile 数据库与迁移',
            description: '服务持久化领域数据时，PostgreSQL、MySQL 与 Flyway 或 Liquibase 很常见。'
          },
          {
            title: 'Actuator 与集成端点',
            description:
              '本地暴露健康检查、指标、回调或 OAuth 重定向；Kafka 等消息代理是可选且依赖服务实现的。'
          }
        ]
      }
    },
    quarkus: {
      replaceOverview: true,
      paragraphs: [
        'Quarkus 是面向快速启动、低内存占用和云原生部署的 Java 框架。它将 Jakarta、REST、持久化和响应式 API 与基于扩展的配置结合，并通过开发模式快速重载代码和配置。',
        '本地 Quarkus 工作通常围绕 `quarkus dev`、所选 JDK 和项目声明的扩展展开。Dev Services 能自动提供部分容器服务，但数据库、Kafka、Redis 或原生构建工具只应在应用实际使用时启动。'
      ],
      capabilities: [
        '开发模式',
        '扩展生态',
        'RESTEasy Reactive',
        'ArC CDI',
        'Dev Services',
        '原生可执行文件构建'
      ],
      useCases: ['云原生 Java API', '容器优先的微服务', '事件驱动服务', '低延迟后端端点'],
      localEnvironment: {
        title: 'Quarkus 本地工作由已选扩展决定',
        description: '小型 REST 项目只需 JDK；持久化或消息扩展会引入各自的本地服务。',
        items: [
          { title: 'JDK 与 quarkus dev', description: '在开发中运行持续测试和热重载。' },
          {
            title: '扩展对应服务',
            description:
              '配置了 datasource、Redis 客户端或 Kafka channel 时才可能需要相应服务；部分场景可由 Dev Services 处理。'
          },
          {
            title: '原生构建工具链',
            description: '仅当项目构建和测试原生可执行文件时需要 GraalVM 或 Mandrel。'
          }
        ]
      }
    },
    gin: {
      replaceOverview: true,
      paragraphs: [
        'Gin 是轻量级 Go HTTP 框架，重点在于快速路由和小而明确的中间件链。它常用于构建 JSON API，路由组、绑定、校验和 handler 组合都贴近应用代码。',
        'Gin 项目使用 Go 工具链和模块开发，而不是单独的框架运行时。本地形态取决于应用配置：SQL 数据库、Redis、生成的 API 客户端或反向代理都是项目依赖，并非 Gin 的必需项。'
      ],
      capabilities: [
        'Radix Tree 路由',
        '中间件链',
        '路由组',
        'JSON 绑定',
        '参数校验',
        'Context 处理'
      ],
      useCases: ['高吞吐 JSON API', '内部 Go 服务', 'Webhook 接收器', '网关与集成端点'],
      localEnvironment: {
        title: 'Gin 服务由 Go Modules 与配置驱动',
        description: '框架本身只需要 Go；本地数据和集成服务应与服务导入的仓库和配置相符。',
        items: [
          {
            title: 'Go 工具链与 Modules',
            description: '运行 `go run`、测试、构建和模块依赖解析。'
          },
          {
            title: '已配置的数据存储',
            description: '仅当 handler 或 repository 层使用时，才运行 PostgreSQL、MySQL 或 Redis。'
          },
          {
            title: 'API 客户端与 Webhook Origin',
            description:
              '浏览器客户端、签名 Webhook 或 OAuth 回调需要稳定 origin 时，本地域名和 HTTPS 很有价值。'
          }
        ]
      }
    },
    'aspnet-core': {
      replaceOverview: true,
      paragraphs: [
        'ASP.NET Core 是跨平台 .NET 框架，用于 HTTP API 和服务端渲染 Web 应用。它提供托管模型、中间件管道、依赖注入、配置提供程序，以及 Minimal APIs、MVC、Razor Pages 和 SignalR 等 Web 技术栈。',
        '开发通常通过 `dotnet run` 或 IDE 启动配置使用项目 SDK。本地配置可选择 Kestrel 证书、Entity Framework Core 迁移和 User Secrets；SQL Server、PostgreSQL、Redis 或消息代理等后端服务只应在应用实际配置时运行。'
      ],
      capabilities: [
        'Minimal APIs',
        'MVC 与 Razor Pages',
        '内置依赖注入',
        '中间件管道',
        'ASP.NET Core Identity',
        'SignalR'
      ],
      useCases: ['业务 Web 应用', 'REST 与 gRPC 服务', '实时数据看板', '跨平台企业 API'],
      localEnvironment: {
        title: 'ASP.NET Core 项目由启动配置塑形',
        description: '小型应用只需 .NET SDK 和 Kestrel；持久化数据或分布式功能才会加入相应服务。',
        items: [
          {
            title: '.NET SDK 与 Kestrel',
            description: '通过 `dotnet run` 及开发设置构建和运行应用。'
          },
          {
            title: 'EF Core 数据库',
            description:
              '项目执行迁移并保存应用状态时，使用 SQL Server、PostgreSQL 或其他 provider。'
          },
          {
            title: '开发 HTTPS 与 Secrets',
            description: '本地开发证书和 Secret Manager 支持安全浏览器流程，同时避免凭据进入源码。'
          }
        ]
      }
    },
    nextcloud: {
      replaceOverview: true,
      paragraphs: [
        'Nextcloud 是以文件同步、共享和可扩展团队应用为核心的自托管协作平台。服务器将用户存储与日历、联系人、办公集成、通知和外部存储等应用结合起来。',
        '本地 Nextcloud 是 PHP Web 应用，带有数据库和可写数据目录，通常通过 `occ` 管理。Redis、全文搜索后端、办公服务器和反向代理是特定部署的常见扩展，但并非每个实例都必须使用。'
      ],
      capabilities: [
        '文件同步与共享',
        '应用生态',
        '日历与联系人',
        '外部存储',
        '联邦共享',
        'occ 管理'
      ],
      useCases: ['私有团队文件共享', '自托管协作门户', '文档同步测试', '自定义 Nextcloud 应用开发'],
      localEnvironment: {
        title: 'Nextcloud 需要存储、Web 访问和定期维护',
        description: '数据目录和数据库是核心。其他服务取决于启用的应用、规模和实例集成方式。',
        items: [
          {
            title: 'PHP Web 服务与数据目录',
            description: '提供应用并将用户文件保存在应用代码之外。'
          },
          {
            title: '数据库与 occ',
            description: 'MySQL、MariaDB 或 PostgreSQL 保存元数据，`occ` 用于安装、升级和维护。'
          },
          {
            title: 'Cron 与可选 Redis',
            description: '后台任务应由 cron 执行；Redis 常用于锁和缓存，但基础实例可不使用。'
          },
          {
            title: '可选办公或搜索服务',
            description: '仅在启用对应集成时运行 Collabora、OnlyOffice 或搜索后端。'
          }
        ]
      }
    },
    erpnext: {
      replaceOverview: true,
      paragraphs: [
        'ERPNext 是构建在 Frappe Framework 上的开源 ERP，覆盖会计、销售、库存、制造、人力资源和运营流程。它以可配置的 DocType、基于角色的表单、报表和业务流程为模型，而不只是单独的 Python 请求服务。',
        '本地开发通过 Bench 管理站点、Python 环境、资源、worker 和进程命令。常规栈包含 MariaDB 与 Redis；Node.js 用于资源流程，而 scheduler、Socket.IO 进程和 worker 队列是 Frappe 进程模型的一部分。'
      ],
      capabilities: [
        'DocType',
        '会计总账',
        '库存流程',
        '报表与打印格式',
        '角色权限',
        'Frappe Bench'
      ],
      useCases: [
        '会计与开票',
        '库存与采购',
        '制造运营',
        '人力资源与薪资流程',
        '基于 Frappe 的定制业务应用'
      ],
      localEnvironment: {
        title: 'ERPNext 开发是由 Bench 管理的多进程栈',
        description:
          '不同于简单 Python 站点，本地 bench 会协调站点数据库、Redis 队列、资源、worker 和 scheduler。',
        items: [
          {
            title: 'Bench 与 Python 环境',
            description: '创建站点并运行 `bench start` 等 Frappe 或 ERPNext 命令。'
          },
          {
            title: 'MariaDB 与 Redis',
            description: 'MariaDB 保存站点数据；Redis 支持缓存、队列和 Socket.IO 相关服务。'
          },
          {
            title: 'Worker、Scheduler 与 Socket.IO',
            description: '处理后台任务、定时文档和实时更新，使开发行为更接近真实系统。'
          },
          {
            title: 'Node.js 资源流程',
            description: 'Bench 构建资源需要 Node.js；它不是 ERPNext 应用进程的替代品。'
          }
        ]
      }
    },
    odoo: {
      replaceOverview: true,
      paragraphs: [
        'Odoo 是一套模块化业务应用，涵盖销售、会计、库存、制造、CRM 等。功能通常通过可安装模块交付，模块基于 Odoo ORM 定义模型、视图、访问规则、数据文件和业务逻辑。',
        '本地 Odoo 使用与版本兼容的 Python 环境和 PostgreSQL。开发时常将 `addons_path` 指向自定义模块，并用 `odoo-bin` 安装或升级模块；longpolling、SMTP、代理或外部 worker 仅在相关功能需要时加入。'
      ],
      capabilities: [
        '模块化 Addons',
        'Odoo ORM',
        '视图与 Actions',
        '访问控制列表',
        '自动化 Actions',
        '多公司支持'
      ],
      useCases: ['销售与 CRM 运营', '会计与开票', '仓库管理', '制造计划', '定制行业业务模块'],
      localEnvironment: {
        title: 'Odoo 开发围绕 Addons 与 PostgreSQL 展开',
        description: '运行时和数据库是核心；只有自定义模块或测试流程需要时才应加入部署服务。',
        items: [
          {
            title: 'Python 与 odoo-bin',
            description: '运行服务器、加载开发配置，并通过 `-u` 升级模块。'
          },
          {
            title: 'PostgreSQL',
            description: '保存 Odoo 数据库、模块注册信息、记录和附件元数据。'
          },
          {
            title: '自定义 addons path',
            description: '将本地模块与 Odoo 源码分离，并使实例可以加载它们。'
          },
          {
            title: '可选邮件与代理服务',
            description: '仅在测试邮件流程、公开 URL 或接近部署的路由时需要 SMTP 或反向代理。'
          }
        ]
      }
    },
    suitecrm: {
      replaceOverview: true,
      paragraphs: [
        'SuiteCRM 是用于销售、营销、服务和业务流程自动化的 PHP 客户关系管理系统。它围绕 Accounts、Contacts、Leads、Opportunities、工作流、报表和可配置字段等模块组织，而不是通用 PHP 项目结构。',
        '本地安装需要 PHP、兼容的 MySQL 或 MariaDB 数据库以及 Web 服务器。管理员和开发者会使用 Module Builder、Studio、修复工具、计划任务和邮件配置；搜索或缓存服务并非固有要求，只应在配置后加入。'
      ],
      capabilities: [
        'CRM 模块',
        'Studio 与 Module Builder',
        '工作流自动化',
        '报表与仪表盘',
        '角色安全',
        '计划任务'
      ],
      useCases: ['销售管道管理', '客户支持运营', '营销活动跟踪', '自定义 CRM 模块开发'],
      localEnvironment: {
        title: 'SuiteCRM 本地工作围绕模块与计划任务',
        description: 'PHP Web 栈和 CRM 数据库不可或缺；后台和集成服务取决于已启用的业务流程。',
        items: [
          {
            title: 'PHP Web 栈',
            description: '通过 Apache、Nginx 加 PHP-FPM 或其他兼容 Web 服务器运行 SuiteCRM。'
          },
          { title: 'MySQL 或 MariaDB', description: '保存客户记录、模块元数据、设置和关联数据。' },
          { title: 'Cron Scheduler', description: '运行已配置的计划任务、营销动作和维护工作。' },
          { title: '可选 SMTP Sandbox', description: '开发邮件模板及入站或出站邮件行为时很有用。' }
        ]
      }
    },
    espocrm: {
      replaceOverview: true,
      paragraphs: [
        'EspoCRM 是 PHP CRM 平台，围绕实体定义、关系元数据、角色、布局和可扩展业务逻辑构建。它提供销售、营销、支持和报表流程，同时允许团队通过元数据驱动模型添加自定义实体与集成。',
        '本地 EspoCRM 项目运行于 PHP、MySQL 或 MariaDB 和 Web 服务器。内置计划任务端点必须由 cron 触发才能执行自动化；IMAP、SMTP、WebSocket 或 Redis 相关服务只在安装实际配置这些集成时才相关。'
      ],
      capabilities: [
        'Entity Manager',
        '关系元数据',
        '角色访问控制',
        'BPM 与工作流',
        'Formula 脚本',
        'REST API'
      ],
      useCases: ['销售与客户管理', '客户支持跟踪', '线索资格评估', '定制关系型 CRM 应用'],
      localEnvironment: {
        title: 'EspoCRM 将实体元数据与计划自动化结合',
        description: '主本地栈保持紧凑；集成服务由正在开发的功能决定。',
        items: [
          { title: 'PHP 与 Web 服务器', description: '在本地 URL 上提供 CRM 应用及其 API。' },
          { title: 'MySQL 或 MariaDB', description: '持久化实体、关系、用户设置和自定义元数据。' },
          {
            title: '计划任务 Cron',
            description: '调用 EspoCRM 计划任务处理，使自动化行为接近运行中的安装。'
          },
          {
            title: '可选邮件集成',
            description: '仅在邮件同步和通知功能需要时测试本地 SMTP 或 IMAP。'
          }
        ]
      }
    },
    gitea: {
      replaceOverview: true,
      paragraphs: [
        'Gitea 是自托管 Git Forge，提供仓库托管、Pull Request、Issue、Actions、包管理和组织管理。它是可部署服务，具有 Git over SSH 和 HTTP 行为，并非只是以 Go API 框架方式运行的项目。',
        '本地 Gitea 小型评估可使用内置 SQLite，更接近共享服务器的配置可采用 MySQL、MariaDB 或 PostgreSQL。`app.ini` 控制仓库存储、SSH、OAuth、邮件、Actions 和数据库；只有从源码构建服务时才需要 Go。'
      ],
      capabilities: [
        'Git over SSH 与 HTTP',
        'Pull Request',
        'Issue 与项目',
        'Gitea Actions',
        '包注册表',
        '组织管理'
      ],
      useCases: ['私有团队 Git 托管', '自管 CI 实验', '源码管理集成测试', '内部包发布'],
      localEnvironment: {
        title: 'Gitea 将 Forge 服务与 Git 传输结合',
        description:
          '紧凑评估可由一个可执行文件和 SQLite 组成；认证、Actions 和接近生产的存储会加入有针对性的依赖。',
        items: [
          {
            title: 'Gitea 服务与 app.ini',
            description: '运行 Web Forge，并配置仓库、SSH 端口、安全设置和存储。'
          },
          {
            title: '数据库选择',
            description:
              'SQLite 适合小型本地实例；配置为共享式环境时可使用 MySQL、MariaDB 或 PostgreSQL。'
          },
          {
            title: 'SSH 与本地域名',
            description: '使用与客户端一致的端点测试 clone URL、SSH key、Webhook 和浏览器流程。'
          },
          {
            title: '可选 Actions Runner',
            description: '仅在验证 Gitea Actions workflow 时需要 runner。'
          }
        ]
      }
    },
    keycloak: {
      replaceOverview: true,
      paragraphs: [
        'Keycloak 是身份与访问管理服务器，用于单点登录、OAuth 2.0、OpenID Connect、SAML 和身份代理。其核心概念包括 realm、client、user、role、group、scope 和认证流程，应用通过标准协议使用这些能力。',
        '本地 Keycloak 开发重点是稳定的 issuer URL 和真实的 redirect URI。开发服务器可使用开发数据库，PostgreSQL 常用于持久 realm；外部用户联邦、SMTP 和反向代理 HTTPS 只应在测试对应流程时加入。'
      ],
      capabilities: [
        'Realm 与 Client',
        'OAuth 2.0 与 OpenID Connect',
        'SAML',
        '认证流程',
        '身份代理',
        '用户联邦'
      ],
      useCases: ['应用单点登录', 'OAuth/OIDC 集成测试', '集中角色管理', '身份提供商联邦'],
      localEnvironment: {
        title: 'Keycloak 测试依赖 Issuer 与重定向 URL',
        description: '认证服务器和持久 Realm 存储是基础，其他服务由认证场景决定。',
        items: [
          {
            title: 'Keycloak Server 与 Realm Import',
            description: '运行身份提供商，并可加载可重复使用的测试 client、role 和 user。'
          },
          {
            title: '持久 Realm 的 PostgreSQL',
            description: '常用于持久本地身份数据；开发模式可为快速实验使用其他受支持选项。'
          },
          {
            title: 'HTTPS 域名与 Redirect URI',
            description: '让浏览器 client、cookie、CORS 和回调校验像集成环境一样工作。'
          },
          {
            title: '可选 SMTP 或外部 IdP',
            description: '仅在邮件验证、密码找回或代理登录流程中需要。'
          }
        ]
      }
    },
    pocketbase: {
      replaceOverview: true,
      paragraphs: [
        'PocketBase 是紧凑型后端应用，将嵌入式 SQLite、认证、REST API、实时订阅、文件存储和管理 UI 集成在一起。其部署模型面向一个可执行文件和本地数据目录，而不是为典型项目单独运维数据库服务器。',
        '本地 PocketBase 流程会结合 `pb_data` 目录启动可执行文件，测试 collection、API rules、hooks、migrations 和实时 client。源码扩展或自定义构建需要 Go；只有浏览器 Origin 或 OAuth 回调测试需要时才加入反向代理和 HTTPS。'
      ],
      capabilities: [
        '嵌入式 SQLite',
        'Collection API Rules',
        '认证',
        '实时订阅',
        '文件存储',
        'JavaScript 与 Go Hooks'
      ],
      useCases: ['小型产品后端', '原型 API', '实时管理工具', '自包含内部应用'],
      localEnvironment: {
        title: 'PocketBase 将多数本地状态保存在一个服务中',
        description:
          '其嵌入式数据存储使许多项目不需要独立 SQL 服务，但客户端集成仍可能要求稳定的本地 Origin。',
        items: [
          {
            title: 'PocketBase 可执行文件与 pb_data',
            description: '运行后端并在本地保留嵌入式 SQLite 数据和文件存储。'
          },
          {
            title: 'Migration 与 Hook 流程',
            description:
              '`pb_migrations` 保存 collection 变更，并针对本地数据测试 JavaScript 或 Go 扩展行为。'
          },
          {
            title: '可选 HTTPS Proxy',
            description:
              'OAuth provider、安全 cookie 或需要 HTTPS 回调 URL 的浏览器 client 会用到它。'
          }
        ]
      }
    },
    matomo: {
      replaceOverview: true,
      paragraphs: [
        'Matomo 是自托管 Web 分析平台，强调由运营方掌控分析数据。它通过 tracking endpoint 记录访问，并将已存事件转换为网站、活动、目标、电商和隐私友好度量的报表。',
        '本地 Matomo 开发使用 PHP、兼容 MySQL 的数据库和 Web 服务器；要获得接近生产的报表，还应按计划运行 archive 流程。测试站点或 tracking client 用于生成事件；Redis、Tag Manager 配置或代理仅在所选安装启用时使用。'
      ],
      capabilities: [
        'JavaScript Tracker',
        '目标与转化',
        '电商分析',
        '自定义报表',
        '隐私控制',
        '定时归档'
      ],
      useCases: ['自托管网站分析', '营销归因测试', '电商转化报表', '重视隐私的度量部署'],
      localEnvironment: {
        title: 'Matomo 需要 Tracking 流量与报表归档',
        description: '分析应用和数据库是核心；本地访问和计划 archive job 能让报表更具代表性。',
        items: [
          {
            title: 'PHP Web 应用',
            description: '提供 Matomo UI 及测试站点使用的 tracking endpoint。'
          },
          {
            title: 'MySQL 或 MariaDB',
            description: '保存配置、访问日志、转化和处理后的报表数据。'
          },
          {
            title: 'Archive Cron Job',
            description: '定期运行 `core:archive` 生成报表，而不只依赖浏览器触发的归档。'
          },
          {
            title: '测试 Tracking Origin',
            description: '本地站点或测试 client 提供真实的 tracking 请求和 consent 行为。'
          }
        ]
      }
    },
    metabase: {
      replaceOverview: true,
      paragraphs: [
        'Metabase 是用于探索数据、编写问题、发布仪表盘和发送订阅的商业智能应用。它将自身应用元数据与分析师查询的数据库分离，因此权限、collection、card 和连接可独立于业务数据管理。',
        '本地 Metabase 在 Java 上运行，并使用 PostgreSQL 等应用数据库持久化元数据。要进行有意义的开发，还需要一个或多个可访问的样例数据源；SMTP、SSO、嵌入设置和反向代理都是由部署选择的可选集成。'
      ],
      capabilities: [
        '可视化查询构建器',
        'SQL 编辑器',
        '仪表盘',
        '告警与订阅',
        'Collection 与权限',
        '嵌入'
      ],
      useCases: ['运营仪表盘', '自助数据探索', '嵌入式产品分析', '定期业务报表'],
      localEnvironment: {
        title: 'Metabase 将元数据与分析数据源分离',
        description: '持久应用数据库和真实查询目标使本地仪表盘可复现；集成服务取决于使用场景。',
        items: [
          { title: 'Java 运行时与 Metabase 应用', description: '启动服务器和管理界面。' },
          {
            title: '应用元数据数据库',
            description: 'PostgreSQL 或其他受支持数据库持久化 user、card、dashboard 和连接。'
          },
          {
            title: '已连接的样例数据源',
            description: '构建和验证 question、model 与 dashboard 需要可访问的项目数据库。'
          },
          { title: '可选 SMTP 或 SSO', description: '仅在测试订阅、用户配置或企业认证时使用。' }
        ]
      }
    },
    'apache-superset': {
      replaceOverview: true,
      paragraphs: [
        'Apache Superset 是开源分析和数据探索平台，围绕 SQLAlchemy 连接、SQL Lab、图表定义、仪表盘和细粒度权限构建。它通常查询已有分析数据存储，而不是拥有业务数据本身。',
        '本地 Superset 环境使用 Python 和元数据数据库，Redis 与 Celery 常用于缓存、异步查询、告警和报表。`superset` CLI 初始化元数据与角色；消息代理、SMTP 或反向代理只在所选功能使用时才需要。'
      ],
      capabilities: ['SQL Lab', '数据集语义层', '图表探索器', '仪表盘', '角色权限', '告警与报表'],
      useCases: [
        '探索式 SQL 分析',
        '运营分析仪表盘',
        '嵌入式 BI',
        '定时报表投递',
        '数据源集成测试'
      ],
      localEnvironment: {
        title: 'Superset 本地开发覆盖元数据、缓存与数据引擎',
        description: '基础实例可以简单启动，但异步分析功能需要项目所配置的相同 worker 拓扑。',
        items: [
          {
            title: 'Python 环境与 superset CLI',
            description: '运行 Web 服务及 `superset db upgrade`、`superset init` 等命令。'
          },
          {
            title: '元数据数据库',
            description: 'PostgreSQL 或 MySQL 常用于保存 user、dataset、chart、dashboard 和配置。'
          },
          {
            title: 'Redis 与 Celery Worker',
            description: '启用缓存、异步 SQL Lab 查询、告警或报表时很常见。'
          },
          {
            title: '分析数据源',
            description: '只连接验证 dataset 和 dashboard 所需的数据库或数据仓库。'
          }
        ]
      }
    }
  },
  id: {
    'spring-boot': {
      replaceOverview: true,
      paragraphs: [
        'Spring Boot adalah lapisan convention-over-configuration dalam ekosistem Spring untuk membangun layanan Java mandiri. Auto-configuration dan starter dependency memungkinkan layanan menyediakan endpoint HTTP, persistensi, keamanan, serta fitur operasional tanpa merakit setiap integrasi secara manual.',
        'Layanan Spring Boot lokal biasanya dijalankan lewat Maven atau Gradle, JDK yang dipilih, dan konfigurasi khusus profile. Database, alat migrasi, klien pesan, serta endpoint Actuator perlu mengikuti dependensi yang benar-benar diaktifkan oleh layanan tersebut.'
      ],
      capabilities: [
        'Auto-configuration',
        'Spring MVC / WebFlux',
        'Spring Data',
        'Spring Security',
        'Actuator',
        'Starter dependencies'
      ],
      useCases: [
        'Layanan REST bisnis',
        'API integrasi enterprise',
        'Sistem back-office transaksional',
        'Platform berbasis microservices'
      ],
      localEnvironment: {
        title: 'Lingkungan Spring Boot lebih dari sebuah JAR',
        description:
          'JDK dan build tool adalah inti; penyimpanan data serta broker hanya dijalankan bersama layanan bila dikonfigurasi oleh profile aktif.',
        items: [
          {
            title: 'JDK, Maven, atau Gradle',
            description:
              'Mengompilasi, menguji, dan menjalankan layanan dengan graf dependensi yang dideklarasikan.'
          },
          {
            title: 'Database dan migrasi profile',
            description:
              'PostgreSQL, MySQL, serta Flyway atau Liquibase umum dipakai saat layanan menyimpan data domain.'
          },
          {
            title: 'Actuator dan endpoint integrasi',
            description:
              'Menyediakan health, metrik, callback, atau redirect OAuth secara lokal; broker seperti Kafka bersifat opsional dan spesifik layanan.'
          }
        ]
      }
    },
    quarkus: {
      replaceOverview: true,
      paragraphs: [
        'Quarkus adalah framework Java yang dirancang untuk startup cepat, penggunaan memori rendah, dan deployment cloud-native. Framework ini memadukan API Jakarta, REST, persistensi, dan reaktif dengan konfigurasi berbasis extension serta mode development yang cepat memuat ulang kode dan konfigurasi.',
        'Pekerjaan Quarkus lokal biasanya berpusat pada `quarkus dev`, JDK pilihan, dan extension yang dideklarasikan proyek. Dev Services dapat menyediakan beberapa container secara otomatis, tetapi database, Kafka, Redis, atau tool build native hanya perlu dijalankan saat aplikasi menggunakannya.'
      ],
      capabilities: [
        'Dev Mode',
        'Ekosistem extension',
        'RESTEasy Reactive',
        'CDI dengan ArC',
        'Dev Services',
        'Build executable native'
      ],
      useCases: [
        'API Java cloud-native',
        'Microservice container-first',
        'Layanan event-driven',
        'Endpoint backend latensi rendah'
      ],
      localEnvironment: {
        title: 'Kerja lokal Quarkus mengikuti extension yang dipilih',
        description:
          'Proyek REST kecil dapat berjalan hanya dengan JDK, sedangkan extension persistensi atau messaging menambah layanan lokalnya sendiri.',
        items: [
          {
            title: 'JDK dan quarkus dev',
            description: 'Menjalankan continuous testing dan live reload selama development.'
          },
          {
            title: 'Layanan pendukung extension',
            description:
              'Datasource, klien Redis, atau channel Kafka yang dikonfigurasi dapat membutuhkan layanan yang sesuai; beberapa setup ditangani Dev Services.'
          },
          {
            title: 'Toolchain build native',
            description:
              'GraalVM atau Mandrel dibutuhkan hanya bila proyek membangun dan menguji executable native.'
          }
        ]
      }
    },
    gin: {
      replaceOverview: true,
      paragraphs: [
        'Gin adalah framework HTTP Go ringan yang berfokus pada routing cepat dan rantai middleware kecil yang eksplisit. Framework ini lazim dipakai untuk membangun API JSON dengan route group, binding, validasi, dan komposisi handler yang tetap dekat dengan kode aplikasi.',
        'Proyek Gin dikembangkan dengan toolchain dan modules Go, bukan runtime framework terpisah. Bentuk lokalnya ditentukan konfigurasi aplikasi: database SQL, Redis, klien API yang digenerasi, atau reverse proxy adalah dependensi proyek, bukan kebutuhan Gin.'
      ],
      capabilities: [
        'Routing radix tree',
        'Rantai middleware',
        'Route groups',
        'JSON binding',
        'Validasi',
        'Penanganan context'
      ],
      useCases: [
        'API JSON throughput tinggi',
        'Layanan Go internal',
        'Penerima webhook',
        'Endpoint gateway dan integrasi'
      ],
      localEnvironment: {
        title: 'Layanan Gin digerakkan oleh Go modules dan konfigurasi',
        description:
          'Framework ini sendiri hanya membutuhkan Go; layanan data dan integrasi lokal harus sesuai dengan repository yang diimpor layanan.',
        items: [
          {
            title: 'Toolchain dan modules Go',
            description: 'Menjalankan `go run`, test, build, serta resolusi dependensi modul.'
          },
          {
            title: 'Data store terkonfigurasi',
            description:
              'PostgreSQL, MySQL, atau Redis relevan hanya saat handler atau lapisan repository memakainya.'
          },
          {
            title: 'Origin klien API dan webhook',
            description:
              'Domain lokal dengan HTTPS berguna bila klien browser, webhook bertanda tangan, atau callback OAuth memerlukan origin stabil.'
          }
        ]
      }
    },
    'aspnet-core': {
      replaceOverview: true,
      paragraphs: [
        'ASP.NET Core adalah framework .NET lintas platform untuk API HTTP dan aplikasi web server-rendered. Ia menggabungkan model hosting, pipeline middleware, dependency injection, configuration provider, serta stack web seperti Minimal APIs, MVC, Razor Pages, dan SignalR.',
        'Development umumnya memakai SDK proyek melalui `dotnet run` atau launch profile IDE. Konfigurasi lokal dapat memilih sertifikat Kestrel, migrasi Entity Framework Core, dan User Secrets; layanan pendukung seperti SQL Server, PostgreSQL, Redis, atau broker pesan hanya dijalankan bila aplikasi mengonfigurasinya.'
      ],
      capabilities: [
        'Minimal APIs',
        'MVC dan Razor Pages',
        'Dependency injection bawaan',
        'Pipeline middleware',
        'ASP.NET Core Identity',
        'SignalR'
      ],
      useCases: [
        'Aplikasi web line-of-business',
        'Layanan REST dan gRPC',
        'Dasbor realtime',
        'API enterprise lintas platform'
      ],
      localEnvironment: {
        title: 'Proyek ASP.NET Core dibentuk oleh launch profile',
        description:
          'Aplikasi kecil cukup memakai .NET SDK dan Kestrel; data persisten atau fitur terdistribusi menambah layanan yang dipilih.',
        items: [
          {
            title: '.NET SDK dan Kestrel',
            description:
              'Membangun dan menjalankan aplikasi melalui `dotnet run` dengan pengaturan development.'
          },
          {
            title: 'Database EF Core',
            description:
              'SQL Server, PostgreSQL, atau provider lain dipakai saat proyek menerapkan migrasi dan menyimpan state aplikasi.'
          },
          {
            title: 'HTTPS development dan secrets',
            description:
              'Sertifikat development lokal serta Secret Manager mendukung alur browser aman tanpa memasukkan kredensial ke source control.'
          }
        ]
      }
    },
    nextcloud: {
      replaceOverview: true,
      paragraphs: [
        'Nextcloud adalah platform kolaborasi self-hosted yang berpusat pada sinkronisasi file, berbagi, dan aplikasi tim yang dapat diperluas. Servernya memadukan penyimpanan pengguna dengan aplikasi kalender, kontak, integrasi office, notifikasi, dan external storage.',
        'Instalasi Nextcloud lokal adalah aplikasi web PHP dengan database dan direktori data yang dapat ditulis, biasanya dikelola lewat perintah `occ`. Redis, backend pencarian teks penuh, server office, dan reverse proxy merupakan tambahan umum pada deployment tertentu, tetapi tidak wajib untuk setiap instance.'
      ],
      capabilities: [
        'Sinkronisasi dan berbagi file',
        'Ekosistem apps',
        'Kalender dan kontak',
        'External storage',
        'Federated sharing',
        'Administrasi occ'
      ],
      useCases: [
        'Berbagi file tim privat',
        'Portal kolaborasi self-hosted',
        'Pengujian sinkronisasi dokumen',
        'Pengembangan aplikasi Nextcloud kustom'
      ],
      localEnvironment: {
        title: 'Nextcloud memerlukan storage, akses web, dan pemeliharaan terjadwal',
        description:
          'Direktori data dan database adalah inti. Layanan lain bergantung pada apps aktif, skala, dan cara instance diintegrasikan.',
        items: [
          {
            title: 'Web server PHP dan direktori data',
            description: 'Menyajikan aplikasi dan menyimpan file pengguna di luar kode aplikasi.'
          },
          {
            title: 'Database dan occ',
            description:
              'MySQL, MariaDB, atau PostgreSQL menyimpan metadata, sedangkan `occ` melakukan instalasi, upgrade, dan pemeliharaan.'
          },
          {
            title: 'Cron dan Redis opsional',
            description:
              'Background job sebaiknya berjalan melalui cron; Redis sering dikonfigurasi untuk locking atau cache, namun opsional pada instance dasar.'
          },
          {
            title: 'Layanan office atau search opsional',
            description:
              'Jalankan Collabora, OnlyOffice, atau backend search hanya saat integrasi tersebut diaktifkan.'
          }
        ]
      }
    },
    erpnext: {
      replaceOverview: true,
      paragraphs: [
        'ERPNext adalah ERP open-source di atas Frappe Framework untuk akuntansi, penjualan, inventaris, manufaktur, HR, dan alur operasional. Modelnya dibangun dari DocType yang dapat dikonfigurasi, formulir berbasis peran, laporan, dan proses bisnis, bukan sekadar server request Python tunggal.',
        'Development lokal menggunakan Bench untuk mengelola sites, environment Python, aset, worker, dan perintah proses. Stack normal mencakup MariaDB dan Redis; Node.js dipakai untuk alur aset, sedangkan scheduler, proses Socket.IO, dan worker queue adalah bagian dari model proses Frappe.'
      ],
      capabilities: [
        'DocTypes',
        'Buku besar akuntansi',
        'Alur inventaris',
        'Laporan dan format cetak',
        'Izin berbasis peran',
        'Frappe Bench'
      ],
      useCases: [
        'Akuntansi dan invoicing',
        'Inventaris dan procurement',
        'Operasi manufaktur',
        'Alur HR dan payroll',
        'Aplikasi bisnis kustom di Frappe'
      ],
      localEnvironment: {
        title: 'Development ERPNext adalah stack multi-proses yang dikelola Bench',
        description:
          'Tidak seperti situs Python sederhana, bench lokal mengoordinasikan database site, queue Redis, aset, worker, dan scheduler.',
        items: [
          {
            title: 'Bench dan environment Python',
            description:
              'Membuat site serta menjalankan perintah Frappe atau ERPNext seperti `bench start`.'
          },
          {
            title: 'MariaDB dan Redis',
            description:
              'MariaDB menyimpan data site; Redis mendukung cache, queue, dan layanan terkait Socket.IO.'
          },
          {
            title: 'Worker, scheduler, dan Socket.IO',
            description:
              'Memproses job latar belakang, dokumen terjadwal, dan update realtime agar development realistis.'
          },
          {
            title: 'Alur aset Node.js',
            description:
              'Node.js diperlukan untuk build aset Bench; ia bukan pengganti proses aplikasi ERPNext.'
          }
        ]
      }
    },
    odoo: {
      replaceOverview: true,
      paragraphs: [
        'Odoo adalah suite aplikasi bisnis modular yang mencakup penjualan, akuntansi, inventaris, manufaktur, CRM, dan lainnya. Perubahan fungsi biasanya disampaikan melalui module yang dapat dipasang, yang mendefinisikan model, view, access rule, data file, dan logika bisnis di atas Odoo ORM.',
        'Instance Odoo lokal berjalan dengan environment Python yang sesuai rilis dan database PostgreSQL. Development sering mengarahkan `addons_path` ke module kustom lalu memakai `odoo-bin` untuk memasang atau memperbaruinya; longpolling, SMTP, proxy, atau worker eksternal hanya diperlukan oleh fitur yang memakainya.'
      ],
      capabilities: [
        'Addons modular',
        'Odoo ORM',
        'Views dan actions',
        'Access control lists',
        'Automated actions',
        'Dukungan multi-company'
      ],
      useCases: [
        'Operasi sales dan CRM',
        'Akuntansi dan invoicing',
        'Manajemen gudang',
        'Perencanaan manufaktur',
        'Module bisnis vertikal kustom'
      ],
      localEnvironment: {
        title: 'Development Odoo berpusat pada addons dan PostgreSQL',
        description:
          'Runtime dan database adalah inti; layanan deployment ditambahkan hanya bila module kustom atau alur pengujian membutuhkannya.',
        items: [
          {
            title: 'Python dan odoo-bin',
            description:
              'Menjalankan server, memuat konfigurasi development, dan meng-upgrade module dengan `-u`.'
          },
          {
            title: 'PostgreSQL',
            description:
              'Menyimpan setiap database Odoo, registry module, record, dan metadata attachment.'
          },
          {
            title: 'Custom addons path',
            description:
              'Menjaga module lokal terpisah dari source Odoo serta menyediakannya bagi instance.'
          },
          {
            title: 'Mail dan proxy opsional',
            description:
              'SMTP atau reverse proxy relevan hanya ketika menguji alur mail, URL publik, atau routing mirip deployment.'
          }
        ]
      }
    },
    suitecrm: {
      replaceOverview: true,
      paragraphs: [
        'SuiteCRM adalah sistem manajemen hubungan pelanggan PHP untuk sales, marketing, service, dan otomasi proses bisnis. Sistem ini diatur oleh module seperti Accounts, Contacts, Leads, Opportunities, workflow, reports, dan field yang dapat dikonfigurasi, bukan struktur proyek PHP generik.',
        'Instalasi lokal membutuhkan PHP, database MySQL atau MariaDB yang kompatibel, dan web server. Administrator serta developer bekerja dengan Module Builder, Studio, tool repair, scheduled job, dan konfigurasi email; layanan search atau cache bukan kebutuhan bawaan dan hanya ditambahkan bila dikonfigurasi.'
      ],
      capabilities: [
        'Module CRM',
        'Studio dan Module Builder',
        'Otomasi workflow',
        'Reports dan dasbor',
        'Keamanan berbasis peran',
        'Scheduled jobs'
      ],
      useCases: [
        'Manajemen pipeline sales',
        'Operasi customer support',
        'Pelacakan kampanye marketing',
        'Pengembangan module CRM kustom'
      ],
      localEnvironment: {
        title: 'Kerja lokal SuiteCRM mengikuti module dan scheduled job',
        description:
          'Stack web PHP dan database CRM adalah inti. Layanan background serta integrasi bergantung pada alur bisnis yang diaktifkan.',
        items: [
          {
            title: 'Stack web PHP',
            description:
              'Menjalankan SuiteCRM melalui Apache, Nginx dengan PHP-FPM, atau web server lokal lain yang kompatibel.'
          },
          {
            title: 'MySQL atau MariaDB',
            description: 'Menyimpan record pelanggan, metadata module, pengaturan, dan data relasi.'
          },
          {
            title: 'Cron scheduler',
            description:
              'Menjalankan scheduled job, aksi kampanye, dan tugas pemeliharaan yang telah dikonfigurasi.'
          },
          {
            title: 'SMTP sandbox opsional',
            description:
              'Berguna saat mengembangkan template email serta perilaku mail masuk atau keluar.'
          }
        ]
      }
    },
    espocrm: {
      replaceOverview: true,
      paragraphs: [
        'EspoCRM adalah platform CRM PHP yang dibangun dari entity definition, relationship metadata, role, layout, dan logika bisnis yang dapat diperluas. Platform ini menyediakan alur sales, marketing, support, serta reporting, dan memungkinkan tim menambah entity maupun integrasi kustom dengan model berbasis metadata.',
        'Proyek EspoCRM lokal berjalan pada PHP dengan MySQL atau MariaDB dan web server. Endpoint scheduled job bawaan harus dipicu cron agar otomasi berjalan; layanan terkait IMAP, SMTP, WebSocket, atau Redis hanya relevan bila instalasi benar-benar mengonfigurasi integrasi tersebut.'
      ],
      capabilities: [
        'Entity Manager',
        'Relationship metadata',
        'Akses berbasis peran',
        'BPM dan workflows',
        'Formula scripts',
        'REST API'
      ],
      useCases: [
        'Manajemen sales dan account',
        'Pelacakan customer support',
        'Kualifikasi lead',
        'Aplikasi CRM berbasis relasi kustom'
      ],
      localEnvironment: {
        title: 'EspoCRM memadukan metadata entity dan otomasi terjadwal',
        description:
          'Stack lokal utamanya ringkas; layanan integrasi ditentukan oleh fitur yang sedang dikembangkan.',
        items: [
          {
            title: 'PHP dan web server',
            description: 'Menyajikan aplikasi CRM beserta API-nya pada URL lokal.'
          },
          {
            title: 'MySQL atau MariaDB',
            description: 'Menyimpan entity, relasi, pengaturan pengguna, dan metadata kustom.'
          },
          {
            title: 'Cron scheduled job',
            description:
              'Memanggil pemrosesan scheduled job EspoCRM agar otomasi menyerupai instalasi yang berjalan.'
          },
          {
            title: 'Integrasi mail opsional',
            description:
              'SMTP atau IMAP lokal hanya diuji saat fitur sinkronisasi email dan notifikasi memerlukannya.'
          }
        ]
      }
    },
    gitea: {
      replaceOverview: true,
      paragraphs: [
        'Gitea adalah Git forge self-hosted yang menyediakan hosting repository, pull request, issue, actions, package, dan manajemen organisasi. Ia adalah layanan yang dapat dideploy dengan perilaku Git-over-SSH serta HTTP, bukan sekadar proyek yang dijalankan sebagai framework API Go.',
        'Instance Gitea lokal dapat memakai SQLite bawaan untuk evaluasi kecil, atau MySQL, MariaDB, maupun PostgreSQL untuk setup server yang lebih representatif. `app.ini` mengatur penyimpanan repository, SSH, OAuth, mail, actions, dan database; Go hanya diperlukan saat membangun layanan dari source.'
      ],
      capabilities: [
        'Git melalui SSH dan HTTP',
        'Pull requests',
        'Issues dan projects',
        'Gitea Actions',
        'Package registry',
        'Manajemen organisasi'
      ],
      useCases: [
        'Hosting Git tim privat',
        'Eksperimen CI self-managed',
        'Pengujian integrasi source control',
        'Penerbitan package internal'
      ],
      localEnvironment: {
        title: 'Gitea menggabungkan layanan forge dengan transport Git',
        description:
          'Evaluasi ringkas dapat memakai satu executable dan SQLite; autentikasi, Actions, serta storage mirip produksi menambahkan dependensi terarah.',
        items: [
          {
            title: 'Layanan Gitea dan app.ini',
            description:
              'Menjalankan web forge serta mengonfigurasi repository, port SSH, pengaturan keamanan, dan storage.'
          },
          {
            title: 'Pilihan database',
            description:
              'SQLite cocok untuk instance lokal kecil; MySQL, MariaDB, atau PostgreSQL dipakai bila dikonfigurasi sebagai setup bergaya shared server.'
          },
          {
            title: 'SSH dan domain lokal',
            description:
              'Menguji clone URL, SSH key, webhook, dan alur browser pada endpoint yang digunakan klien.'
          },
          {
            title: 'Actions runner opsional',
            description: 'Runner diperlukan hanya ketika memvalidasi workflow Gitea Actions.'
          }
        ]
      }
    },
    keycloak: {
      replaceOverview: true,
      paragraphs: [
        'Keycloak adalah server identity and access management untuk single sign-on, OAuth 2.0, OpenID Connect, SAML, dan identity brokering. Konsep intinya berupa realm, client, user, role, group, scope, serta authentication flow yang digunakan aplikasi melalui protokol standar.',
        'Development Keycloak lokal terutama membutuhkan issuer URL yang stabil dan redirect URI realistis. Development server dapat memakai database development, sedangkan PostgreSQL lazim untuk realm persisten; user federation eksternal, SMTP, dan HTTPS reverse proxy hanya ditambahkan ketika alur tersebut diuji.'
      ],
      capabilities: [
        'Realms dan clients',
        'OAuth 2.0 dan OpenID Connect',
        'SAML',
        'Authentication flows',
        'Identity brokering',
        'User federation'
      ],
      useCases: [
        'Single sign-on aplikasi',
        'Pengujian integrasi OAuth/OIDC',
        'Manajemen role terpusat',
        'Federasi identity provider'
      ],
      localEnvironment: {
        title: 'Pengujian Keycloak bergantung pada issuer dan redirect URL',
        description:
          'Server auth dan penyimpanan realm persisten adalah inti; layanan lain ditentukan oleh skenario autentikasi.',
        items: [
          {
            title: 'Server Keycloak dan realm import',
            description:
              'Menjalankan identity provider serta dapat memuat client, role, dan user pengujian yang dapat diulang.'
          },
          {
            title: 'PostgreSQL untuk realm persisten',
            description:
              'Umum dipakai untuk data identitas lokal yang tahan lama; development mode dapat memakai opsi lain yang didukung untuk eksperimen cepat.'
          },
          {
            title: 'Domain HTTPS dan redirect URI',
            description:
              'Membuat client browser, cookie, CORS, dan validasi callback bekerja seperti lingkungan integrasi.'
          },
          {
            title: 'SMTP atau IdP eksternal opsional',
            description:
              'Dibutuhkan hanya untuk verifikasi email, pemulihan kata sandi, atau alur login brokered.'
          }
        ]
      }
    },
    pocketbase: {
      replaceOverview: true,
      paragraphs: [
        'PocketBase adalah aplikasi backend ringkas yang membundel database SQLite tertanam, auth, REST API, subscription realtime, file storage, dan admin UI. Model deployment-nya mengutamakan satu executable serta direktori data lokal, bukan server database yang dioperasikan terpisah untuk proyek biasa.',
        'Alur PocketBase lokal menjalankan executable bersama direktori `pb_data` dan menguji collection, API rules, hooks, migrations, serta client realtime. Go diperlukan untuk extension berbasis source atau build kustom; reverse proxy dan HTTPS bersifat opsional jika pengujian origin browser atau callback OAuth membutuhkannya.'
      ],
      capabilities: [
        'SQLite tertanam',
        'Collection API rules',
        'Autentikasi',
        'Subscription realtime',
        'File storage',
        'Hooks JavaScript dan Go'
      ],
      useCases: [
        'Backend produk kecil',
        'API prototipe',
        'Tool administrasi realtime',
        'Aplikasi internal mandiri'
      ],
      localEnvironment: {
        title: 'PocketBase menyimpan sebagian besar state lokal dalam satu layanan',
        description:
          'Data store tertanam menghilangkan kebutuhan server SQL terpisah bagi banyak proyek, tetapi integrasi klien tetap dapat memerlukan origin lokal stabil.',
        items: [
          {
            title: 'Executable PocketBase dan pb_data',
            description:
              'Menjalankan backend serta mempertahankan data SQLite tertanam dan file storage secara lokal.'
          },
          {
            title: 'Alur migration dan hook',
            description:
              'Menyimpan perubahan collection di `pb_migrations` dan menguji perilaku extension JavaScript atau Go terhadap data lokal.'
          },
          {
            title: 'HTTPS proxy opsional',
            description:
              'Berguna untuk provider OAuth, cookie aman, atau klien browser yang memerlukan callback URL HTTPS.'
          }
        ]
      }
    },
    matomo: {
      replaceOverview: true,
      paragraphs: [
        'Matomo adalah platform analitik web self-hosted yang menekankan kepemilikan data oleh operator. Ia merekam kunjungan melalui tracking endpoint lalu mengubah event tersimpan menjadi laporan situs, kampanye, goal, aktivitas e-commerce, dan pengukuran yang menjaga privasi.',
        'Development Matomo lokal memakai PHP, database kompatibel MySQL, dan web server; proses archive perlu berjalan terjadwal untuk laporan yang mirip produksi. Situs uji atau tracking client dibutuhkan untuk menghasilkan event, sedangkan Redis, setup Tag Manager, atau proxy digunakan hanya bila instalasi yang dipilih mengaktifkannya.'
      ],
      capabilities: [
        'JavaScript tracker',
        'Goals dan conversions',
        'Analitik e-commerce',
        'Custom reports',
        'Kontrol privasi',
        'Archiving terjadwal'
      ],
      useCases: [
        'Analitik situs self-hosted',
        'Pengujian atribusi kampanye',
        'Pelaporan konversi e-commerce',
        'Deployment pengukuran peka privasi'
      ],
      localEnvironment: {
        title: 'Matomo membutuhkan trafik tracking dan archive laporan',
        description:
          'Aplikasi analitik serta database adalah inti; kunjungan lokal dan archive job terjadwal menghasilkan laporan yang lebih representatif.',
        items: [
          {
            title: 'Aplikasi web PHP',
            description: 'Menyajikan UI Matomo dan tracking endpoint yang dipakai situs pengujian.'
          },
          {
            title: 'MySQL atau MariaDB',
            description:
              'Menyimpan konfigurasi, visit log, conversion, dan data laporan yang telah diproses.'
          },
          {
            title: 'Archive cron job',
            description:
              'Menjalankan `core:archive` secara terjadwal untuk membangun laporan, bukan hanya mengandalkan archiving dari browser.'
          },
          {
            title: 'Origin tracker pengujian',
            description:
              'Situs lokal atau klien uji menyediakan request tracking dan perilaku consent yang realistis.'
          }
        ]
      }
    },
    metabase: {
      replaceOverview: true,
      paragraphs: [
        'Metabase adalah aplikasi business intelligence untuk mengeksplorasi data, menyusun pertanyaan, menerbitkan dasbor, dan membagikan alert. Metabase memisahkan metadata aplikasinya dari database yang ditanya analis, sehingga permissions, collections, cards, dan connections dapat dikelola terpisah dari data bisnis.',
        'Instance Metabase lokal berjalan di Java dengan database aplikasi seperti PostgreSQL untuk metadata yang tahan lama. Development yang bermakna juga memerlukan satu atau beberapa sumber data contoh yang dapat dijangkau; SMTP, SSO, pengaturan embedding, dan reverse proxy adalah integrasi opsional sesuai deployment.'
      ],
      capabilities: [
        'Visual query builder',
        'Editor SQL',
        'Dasbor',
        'Alerts dan subscriptions',
        'Collections dan permissions',
        'Embedding'
      ],
      useCases: [
        'Dasbor operasional',
        'Eksplorasi data mandiri',
        'Analitik produk tersemat',
        'Pelaporan bisnis terjadwal'
      ],
      localEnvironment: {
        title: 'Metabase memisahkan metadata dari sumber data analitik',
        description:
          'Database aplikasi yang persisten serta target query realistis membuat dasbor lokal dapat direproduksi; layanan integrasi bergantung pada skenario.',
        items: [
          {
            title: 'Runtime Java dan aplikasi Metabase',
            description: 'Menjalankan server beserta antarmuka administrasinya.'
          },
          {
            title: 'Database metadata aplikasi',
            description:
              'PostgreSQL atau database lain yang didukung menyimpan user, cards, dasbor, dan connections.'
          },
          {
            title: 'Sumber data contoh yang terhubung',
            description:
              'Database proyek yang dapat dijangkau diperlukan untuk membuat serta memverifikasi questions, models, dan dasbor.'
          },
          {
            title: 'SMTP atau SSO opsional',
            description:
              'Gunakan hanya saat menguji subscriptions, provisioning user, atau autentikasi enterprise.'
          }
        ]
      }
    },
    'apache-superset': {
      replaceOverview: true,
      paragraphs: [
        'Apache Superset adalah platform open-source untuk analitik dan eksplorasi data yang dibangun dari koneksi SQLAlchemy, SQL Lab, definisi chart, dasbor, serta permission yang terperinci. Superset biasanya meng-query data store analitik yang sudah ada, bukan memiliki data bisnis itu sendiri.',
        'Lingkungan Superset lokal memakai Python dan database metadata, sementara Redis serta Celery umum menangani cache, query asinkron, alerts, dan reports. CLI `superset` menginisialisasi metadata serta role; broker, layanan SMTP, atau reverse proxy hanya diperlukan bila fitur yang dipilih memakainya.'
      ],
      capabilities: [
        'SQL Lab',
        'Lapisan semantik dataset',
        'Chart explorer',
        'Dasbor',
        'Role permissions',
        'Alerts dan reports'
      ],
      useCases: [
        'Analisis SQL eksploratif',
        'Dasbor analitik operasional',
        'BI tersemat',
        'Pengiriman laporan terjadwal',
        'Pengujian integrasi data source'
      ],
      localEnvironment: {
        title: 'Development Superset lokal mencakup metadata, cache, dan data engine',
        description:
          'Instance dasar dapat dimulai sederhana, tetapi fitur analitik asinkron memerlukan topologi worker yang sama dengan konfigurasi proyek.',
        items: [
          {
            title: 'Environment Python dan CLI superset',
            description:
              'Menjalankan web server serta perintah seperti `superset db upgrade` dan `superset init`.'
          },
          {
            title: 'Database metadata',
            description:
              'PostgreSQL atau MySQL umum menyimpan user, dataset, chart, dasbor, dan konfigurasi.'
          },
          {
            title: 'Redis dan Celery workers',
            description: 'Umum saat cache, query SQL Lab asinkron, alerts, atau reports diaktifkan.'
          },
          {
            title: 'Sumber data analitik',
            description:
              'Hubungkan hanya database atau warehouse yang diperlukan untuk memverifikasi dataset dan dasbor.'
          }
        ]
      }
    }
  },
  es: {
    'spring-boot': {
      replaceOverview: true,
      paragraphs: [
        'Spring Boot es la capa de convención sobre configuración del ecosistema Spring para crear servicios Java independientes. Su autoconfiguración y sus dependencias starter permiten que un servicio exponga endpoints HTTP, persistencia, seguridad y funciones operativas sin ensamblar cada integración a mano.',
        'Un servicio Spring Boot local suele ejecutarse con Maven o Gradle, un JDK seleccionado y un archivo de configuración específico del profile. La base de datos, la herramienta de migraciones, el cliente de mensajería y los endpoints de Actuator deben reflejar las dependencias realmente habilitadas por ese servicio.'
      ],
      capabilities: [
        'Autoconfiguración',
        'Spring MVC / WebFlux',
        'Spring Data',
        'Spring Security',
        'Actuator',
        'Dependencias starter'
      ],
      useCases: [
        'Servicios REST de negocio',
        'APIs de integración empresarial',
        'Sistemas transaccionales de back-office',
        'Plataformas basadas en microservicios'
      ],
      localEnvironment: {
        title: 'Un entorno Spring Boot empieza con más que un JAR',
        description:
          'El JDK y la herramienta de build son centrales; los almacenes de datos y los brokers solo deben acompañar al servicio cuando su profile activo los configura.',
        items: [
          {
            title: 'JDK, Maven o Gradle',
            description: 'Compila, prueba y ejecuta el servicio con su grafo de dependencias declarado.'
          },
          {
            title: 'Base de datos y migraciones del profile',
            description:
              'PostgreSQL, MySQL y Flyway o Liquibase son habituales cuando el servicio persiste datos de dominio.'
          },
          {
            title: 'Actuator y endpoints de integración',
            description:
              'Exponen health, métricas, callbacks o redirecciones OAuth en local; un broker como Kafka es opcional y depende del servicio.'
          }
        ]
      }
    },
    quarkus: {
      replaceOverview: true,
      paragraphs: [
        'Quarkus es un framework Java diseñado para un arranque rápido, un bajo consumo de memoria y despliegues cloud-native. Combina las conocidas APIs de Jakarta, REST, persistencia y programación reactiva con configuración basada en extensiones y un modo de desarrollo que recarga el código y la configuración rápidamente.',
        'El trabajo local con Quarkus suele centrarse en `quarkus dev`, el JDK elegido y las extensiones declaradas por el proyecto. Dev Services puede aprovisionar ciertos contenedores automáticamente, pero una base de datos, Kafka, Redis o una herramienta de build nativa solo deben iniciarse cuando la aplicación los usa.'
      ],
      capabilities: [
        'Modo Dev',
        'Ecosistema de extensiones',
        'RESTEasy Reactive',
        'CDI con ArC',
        'Dev Services',
        'Builds de ejecutables nativos'
      ],
      useCases: [
        'APIs Java cloud-native',
        'Microservicios container-first',
        'Servicios orientados a eventos',
        'Endpoints backend de baja latencia'
      ],
      localEnvironment: {
        title: 'El trabajo local con Quarkus sigue las extensiones seleccionadas',
        description:
          'Un proyecto REST pequeño puede ejecutarse solo con un JDK, mientras que las extensiones de persistencia o mensajería introducen sus propios servicios locales.',
        items: [
          {
            title: 'JDK y quarkus dev',
            description: 'Ejecuta pruebas continuas y recarga en vivo durante el desarrollo.'
          },
          {
            title: 'Servicios respaldados por extensiones',
            description:
              'Un datasource configurado, un cliente Redis o un canal de Kafka pueden necesitar un servicio local correspondiente; Dev Services puede encargarse de algunas configuraciones.'
          },
          {
            title: 'Toolchain de build nativo',
            description:
              'GraalVM o Mandrel solo se necesitan cuando el proyecto compila y prueba un ejecutable nativo.'
          }
        ]
      }
    },
    gin: {
      replaceOverview: true,
      paragraphs: [
        'Gin es un framework HTTP de Go ligero centrado en un enrutado rápido y una cadena de middleware pequeña y explícita. Suele usarse para construir APIs JSON donde los grupos de rutas, el binding, la validación y la composición de handlers permanecen cerca del código de la aplicación.',
        'Un proyecto Gin se desarrolla con el toolchain de Go y sus módulos, no con un runtime de framework separado. Su forma local la define la configuración de la aplicación: una base de datos SQL, Redis, clientes de API generados o un proxy inverso son dependencias del proyecto, no requisitos de Gin.'
      ],
      capabilities: [
        'Enrutado con radix tree',
        'Cadena de middleware',
        'Grupos de rutas',
        'Binding de JSON',
        'Validación',
        'Manejo del context'
      ],
      useCases: [
        'APIs JSON de alto rendimiento',
        'Servicios Go internos',
        'Receptores de webhooks',
        'Endpoints de gateway e integración'
      ],
      localEnvironment: {
        title: 'Un servicio Gin se rige por los módulos de Go y la configuración',
        description:
          'El framework en sí solo necesita Go; los servicios locales de datos e integración deben coincidir con los repositorios importados por el servicio.',
        items: [
          {
            title: 'Toolchain y módulos de Go',
            description: 'Ejecuta `go run`, pruebas, builds y la resolución de dependencias de módulos.'
          },
          {
            title: 'Almacén de datos configurado',
            description:
              'PostgreSQL, MySQL o Redis solo son relevantes cuando los handlers o la capa de repositorio los usan.'
          },
          {
            title: 'Cliente de API y origen de webhooks',
            description:
              'Un dominio local con HTTPS es útil cuando clientes de navegador, webhooks firmados o callbacks de OAuth requieren un origen estable.'
          }
        ]
      }
    },
    'aspnet-core': {
      replaceOverview: true,
      paragraphs: [
        'ASP.NET Core es el framework multiplataforma de .NET para APIs HTTP y aplicaciones web renderizadas en el servidor. Combina un modelo de hosting, una pipeline de middleware, inyección de dependencias, proveedores de configuración y stacks web como Minimal APIs, MVC, Razor Pages y SignalR.',
        'El desarrollo suele usar el SDK del proyecto mediante `dotnet run` o un perfil de inicio del IDE. La configuración local puede seleccionar certificados de Kestrel, migraciones de Entity Framework Core, user secrets y únicamente los servicios de respaldo como SQL Server, PostgreSQL, Redis o un broker de mensajes que la aplicación realmente configure.'
      ],
      capabilities: [
        'Minimal APIs',
        'MVC y Razor Pages',
        'Inyección de dependencias integrada',
        'Pipeline de middleware',
        'ASP.NET Core Identity',
        'SignalR'
      ],
      useCases: [
        'Aplicaciones web de línea de negocio',
        'Servicios REST y gRPC',
        'Paneles en tiempo real',
        'APIs empresariales multiplataforma'
      ],
      localEnvironment: {
        title: 'Un proyecto ASP.NET Core toma forma según su perfil de inicio',
        description:
          'El SDK de .NET y Kestrel pueden bastar para una aplicación pequeña; los datos persistentes y las funciones distribuidas añaden servicios seleccionados.',
        items: [
          {
            title: '.NET SDK y Kestrel',
            description:
              'Compila y ejecuta la aplicación mediante `dotnet run` con la configuración de desarrollo.'
          },
          {
            title: 'Base de datos de EF Core',
            description:
              'SQL Server, PostgreSQL u otro proveedor se usa cuando el proyecto aplica migraciones y almacena el estado de la aplicación.'
          },
          {
            title: 'HTTPS y secrets de desarrollo',
            description:
              'El certificado de desarrollo local y Secret Manager permiten flujos seguros en el navegador sin colocar credenciales en el control de versiones.'
          }
        ]
      }
    },
    nextcloud: {
      replaceOverview: true,
      paragraphs: [
        'Nextcloud es una plataforma de colaboración autoalojada centrada en la sincronización y el uso compartido de archivos, además de aplicaciones de equipo extensibles. Su servidor combina el almacenamiento de usuarios con apps de calendario, contactos, integración ofimática, notificaciones y almacenamiento externo.',
        'Una instalación local de Nextcloud es una aplicación web PHP con una base de datos y un directorio de datos escribible, que suele administrarse con el comando `occ`. Redis, un backend de búsqueda de texto completo, un servidor ofimático y un proxy inverso son añadidos habituales en ciertos despliegues, pero no son obligatorios en todas las instancias.'
      ],
      capabilities: [
        'Sincronización y uso compartido de archivos',
        'Ecosistema de apps',
        'Calendario y contactos',
        'Almacenamiento externo',
        'Uso compartido federado',
        'Administración con occ'
      ],
      useCases: [
        'Uso compartido privado de archivos en equipo',
        'Portales de colaboración autoalojados',
        'Pruebas de sincronización de documentos',
        'Desarrollo de apps personalizadas de Nextcloud'
      ],
      localEnvironment: {
        title: 'Nextcloud necesita almacenamiento, acceso web y mantenimiento programado',
        description:
          'El directorio de datos y la base de datos son el núcleo. Los demás servicios dependen de las apps habilitadas, la escala y la forma en que se integra la instancia.',
        items: [
          {
            title: 'Servidor web PHP y directorio de datos',
            description:
              'Sirven la aplicación y conservan los archivos de los usuarios fuera del código de la aplicación.'
          },
          {
            title: 'Base de datos y occ',
            description:
              'MySQL, MariaDB o PostgreSQL almacenan los metadatos, mientras que `occ` realiza la instalación, las actualizaciones y el mantenimiento.'
          },
          {
            title: 'Cron y Redis opcional',
            description:
              'Los trabajos en segundo plano deben ejecutarse con cron; Redis suele configurarse para bloqueos o caché, pero es opcional en una instancia básica.'
          },
          {
            title: 'Servicio ofimático o de búsqueda opcional',
            description:
              'Collabora, OnlyOffice o un backend de búsqueda solo se inician cuando esas integraciones están habilitadas.'
          }
        ]
      }
    },
    erpnext: {
      replaceOverview: true,
      paragraphs: [
        'ERPNext es un ERP de código abierto construido sobre Frappe Framework para contabilidad, ventas, inventario, fabricación, RR. HH. y flujos operativos. Su modelo se basa en DocTypes configurables, formularios con roles, informes y procesos de negocio, y no solo en un servidor de peticiones Python independiente.',
        'El desarrollo local usa Bench para gestionar sitios, entornos de Python, assets, workers y comandos de procesos. Un stack habitual incluye MariaDB y Redis; Node.js se usa para los flujos de assets, mientras que un scheduler, un proceso Socket.IO y las colas de workers forman parte del modelo de procesos de Frappe.'
      ],
      capabilities: [
        'DocTypes',
        'Libro mayor contable',
        'Flujos de inventario',
        'Informes y formatos de impresión',
        'Permisos por rol',
        'Frappe Bench'
      ],
      useCases: [
        'Contabilidad y facturación',
        'Inventario y compras',
        'Operaciones de fabricación',
        'Flujos de RR. HH. y nómina',
        'Aplicaciones de negocio personalizadas sobre Frappe'
      ],
      localEnvironment: {
        title: 'El desarrollo de ERPNext es un stack multiproceso gestionado por Bench',
        description:
          'A diferencia de un sitio Python sencillo, un bench local coordina la base de datos del sitio, las colas respaldadas por Redis, los assets, los workers y el scheduler.',
        items: [
          {
            title: 'Bench y entorno de Python',
            description: 'Crea sitios y ejecuta comandos de Frappe o ERPNext como `bench start`.'
          },
          {
            title: 'MariaDB y Redis',
            description:
              'MariaDB almacena los datos del sitio; Redis da soporte a la caché, las colas y los servicios relacionados con Socket.IO.'
          },
          {
            title: 'Workers, scheduler y Socket.IO',
            description:
              'Procesan trabajos en segundo plano, documentos programados y actualizaciones en tiempo real durante un desarrollo realista.'
          },
          {
            title: 'Flujo de assets con Node.js',
            description:
              'Bench lo requiere para compilar los assets; no sustituye a los procesos de la aplicación ERPNext.'
          }
        ]
      }
    },
    odoo: {
      replaceOverview: true,
      paragraphs: [
        'Odoo es una suite modular de aplicaciones de negocio que cubre ventas, contabilidad, inventario, fabricación, CRM y más. Los cambios funcionales suelen entregarse como módulos instalables que definen modelos, vistas, reglas de acceso, archivos de datos y lógica de negocio sobre el ORM de Odoo.',
        'Una instancia local de Odoo se ejecuta con un entorno de Python compatible con la versión y una base de datos PostgreSQL. En desarrollo es habitual apuntar `addons_path` a módulos personalizados y usar `odoo-bin` para instalarlos o actualizarlos; longpolling, SMTP, un proxy o workers externos solo se necesitan para las funciones que los usan.'
      ],
      capabilities: [
        'Addons modulares',
        'ORM de Odoo',
        'Vistas y acciones',
        'Listas de control de acceso',
        'Acciones automatizadas',
        'Soporte multiempresa'
      ],
      useCases: [
        'Operaciones de ventas y CRM',
        'Contabilidad y facturación',
        'Gestión de almacenes',
        'Planificación de fabricación',
        'Módulos verticales de negocio personalizados'
      ],
      localEnvironment: {
        title: 'El desarrollo de Odoo se centra en los addons y PostgreSQL',
        description:
          'El runtime y la base de datos son el núcleo; los servicios de despliegue solo deben introducirse cuando un módulo personalizado o un flujo de prueba los necesita.',
        items: [
          {
            title: 'Python y odoo-bin',
            description:
              'Ejecutan el servidor, cargan una configuración de desarrollo y actualizan módulos con `-u`.'
          },
          {
            title: 'PostgreSQL',
            description:
              'Almacena cada base de datos de Odoo, el registro de módulos, los registros y los metadatos de los adjuntos.'
          },
          {
            title: 'Ruta de addons personalizados',
            description:
              'Mantiene los módulos locales separados del código fuente de Odoo y los pone a disposición de la instancia.'
          },
          {
            title: 'Servicios de correo y proxy opcionales',
            description:
              'SMTP o un proxy inverso solo son relevantes cuando se prueban flujos de correo, URLs públicas o enrutado similar al de producción.'
          }
        ]
      }
    },
    suitecrm: {
      replaceOverview: true,
      paragraphs: [
        'SuiteCRM es un sistema de gestión de relaciones con clientes (CRM) en PHP para ventas, marketing, soporte y automatización de procesos de negocio. Se organiza en torno a módulos como Accounts, Contacts, Leads, Opportunities, workflows, informes y campos configurables, en lugar de una estructura genérica de proyecto PHP.',
        'Una instalación local necesita PHP, una base de datos MySQL o MariaDB compatible y un servidor web. Los administradores y desarrolladores trabajan con Module Builder, Studio, herramientas de reparación, trabajos programados y configuración de correo; los servicios de búsqueda o caché no son requisitos inherentes y solo deben añadirse cuando se configuran.'
      ],
      capabilities: [
        'Módulos CRM',
        'Studio y Module Builder',
        'Automatización de workflows',
        'Informes y paneles',
        'Seguridad por roles',
        'Trabajos programados'
      ],
      useCases: [
        'Gestión del pipeline de ventas',
        'Operaciones de soporte al cliente',
        'Seguimiento de campañas de marketing',
        'Desarrollo de módulos CRM personalizados'
      ],
      localEnvironment: {
        title: 'El trabajo local con SuiteCRM sigue sus módulos y trabajos programados',
        description:
          'Un stack web PHP y la base de datos del CRM son esenciales. Los servicios en segundo plano y de integración dependen de los flujos de negocio habilitados.',
        items: [
          {
            title: 'Stack web PHP',
            description:
              'Ejecuta SuiteCRM con Apache, Nginx con PHP-FPM u otro servidor web local compatible.'
          },
          {
            title: 'MySQL o MariaDB',
            description:
              'Almacena los registros de clientes, los metadatos de los módulos, la configuración y los datos de relaciones.'
          },
          {
            title: 'Scheduler con cron',
            description:
              'Ejecuta los trabajos programados configurados, las acciones de campañas y las tareas de mantenimiento.'
          },
          {
            title: 'Sandbox SMTP opcional',
            description:
              'Útil al desarrollar plantillas de correo y el comportamiento del correo entrante o saliente.'
          }
        ]
      }
    },
    espocrm: {
      replaceOverview: true,
      paragraphs: [
        'EspoCRM es una plataforma CRM en PHP construida en torno a definiciones de entidades, metadatos de relaciones, roles, layouts y lógica de negocio extensible. Ofrece flujos de ventas, marketing, soporte e informes, y permite a los equipos añadir entidades e integraciones personalizadas mediante su modelo basado en metadatos.',
        'Un proyecto local de EspoCRM se ejecuta con PHP, MySQL o MariaDB y un servidor web. El endpoint integrado de trabajos programados debe ser activado por cron para que la automatización funcione, mientras que los servicios relacionados con IMAP, SMTP, WebSocket o Redis solo son relevantes en instalaciones configuradas para usar esas integraciones.'
      ],
      capabilities: [
        'Entity Manager',
        'Metadatos de relaciones',
        'Acceso basado en roles',
        'BPM y workflows',
        'Scripts de fórmulas',
        'REST API'
      ],
      useCases: [
        'Gestión de ventas y cuentas',
        'Seguimiento del soporte al cliente',
        'Cualificación de leads',
        'Aplicaciones CRM personalizadas basadas en relaciones'
      ],
      localEnvironment: {
        title: 'EspoCRM combina metadatos de entidades con automatización programada',
        description:
          'El stack local principal es deliberadamente compacto; los servicios de integración dependen de las funciones en desarrollo.',
        items: [
          {
            title: 'PHP y servidor web',
            description: 'Sirven la aplicación CRM y su API en una URL local.'
          },
          {
            title: 'MySQL o MariaDB',
            description:
              'Persisten entidades, relaciones, configuración de usuarios y metadatos personalizados.'
          },
          {
            title: 'Cron para trabajos programados',
            description:
              'Invoca el procesamiento de trabajos programados de EspoCRM para que la automatización se comporte como en una instalación en ejecución.'
          },
          {
            title: 'Integración de correo opcional',
            description:
              'Las pruebas locales de SMTP o IMAP solo son necesarias para las funciones de sincronización de correo y notificaciones.'
          }
        ]
      }
    },
    gitea: {
      replaceOverview: true,
      paragraphs: [
        'Gitea es una forja Git autoalojada que ofrece alojamiento de repositorios, pull requests, issues, actions, paquetes y gestión de organizaciones. Es un servicio desplegable con comportamiento Git por SSH y HTTP, no simplemente un proyecto Go que los desarrolladores ejecutan como framework de API.',
        'Una instancia local de Gitea puede usar SQLite embebido para una evaluación pequeña, o MySQL, MariaDB o PostgreSQL para una configuración de servidor más representativa. Su `app.ini` controla el almacenamiento de repositorios, SSH, OAuth, correo, actions y la base de datos; Go solo es necesario cuando se compila el servicio desde el código fuente.'
      ],
      capabilities: [
        'Git por SSH y HTTP',
        'Pull requests',
        'Issues y proyectos',
        'Gitea Actions',
        'Registro de paquetes',
        'Gestión de organizaciones'
      ],
      useCases: [
        'Alojamiento Git privado para equipos',
        'Experimentación con CI autogestionado',
        'Pruebas de integración de control de versiones',
        'Publicación interna de paquetes'
      ],
      localEnvironment: {
        title: 'Gitea combina un servicio de forja con el transporte Git',
        description:
          'Una evaluación compacta puede ser un solo ejecutable más SQLite, mientras que la autenticación, las actions y un almacenamiento similar al de producción añaden dependencias específicas.',
        items: [
          {
            title: 'Servicio Gitea y app.ini',
            description:
              'Ejecuta la forja web y configura sus repositorios, el puerto SSH, los ajustes de seguridad y el almacenamiento.'
          },
          {
            title: 'Elección de base de datos',
            description:
              'SQLite es adecuado para una instancia local pequeña; MySQL, MariaDB o PostgreSQL se usan cuando se configura un entorno de estilo compartido.'
          },
          {
            title: 'SSH y dominio local',
            description:
              'Permiten probar URLs de clonación, claves SSH, webhooks y flujos de navegador con los mismos endpoints que usarán los clientes.'
          },
          {
            title: 'Runner de Actions opcional',
            description: 'Solo se necesita un runner al validar workflows de Gitea Actions.'
          }
        ]
      }
    },
    keycloak: {
      replaceOverview: true,
      paragraphs: [
        'Keycloak es un servidor de gestión de identidad y acceso para single sign-on, OAuth 2.0, OpenID Connect, SAML e identity brokering. Sus conceptos centrales son realms, clients, usuarios, roles, grupos, scopes y flujos de autenticación, que las aplicaciones consumen mediante protocolos estándar.',
        'El desarrollo local con Keycloak gira principalmente en torno a una URL de issuer estable y redirect URIs realistas. El servidor de desarrollo puede usar una base de datos de desarrollo, mientras que PostgreSQL es habitual para realms locales persistentes; la federación de usuarios externa, SMTP y el HTTPS del proxy inverso solo deben introducirse cuando se prueban esos flujos.'
      ],
      capabilities: [
        'Realms y clients',
        'OAuth 2.0 y OpenID Connect',
        'SAML',
        'Flujos de autenticación',
        'Identity brokering',
        'Federación de usuarios'
      ],
      useCases: [
        'Single sign-on para aplicaciones',
        'Pruebas de integración OAuth/OIDC',
        'Gestión centralizada de roles',
        'Federación de proveedores de identidad'
      ],
      localEnvironment: {
        title: 'Las pruebas de Keycloak dependen de las URLs de issuer y redirección',
        description:
          'El servidor de autenticación y un almacén persistente de realms son lo esencial; los demás servicios derivan del escenario de autenticación.',
        items: [
          {
            title: 'Servidor Keycloak e importación de realms',
            description:
              'Ejecuta el proveedor de identidad y puede cargar clients, roles y usuarios de prueba repetibles.'
          },
          {
            title: 'PostgreSQL para realms persistentes',
            description:
              'Habitual para datos de identidad locales duraderos; el modo de desarrollo puede usar otra opción soportada para experimentos rápidos.'
          },
          {
            title: 'Dominio HTTPS y redirect URIs',
            description:
              'Permiten que los clients de navegador, las cookies, CORS y la validación de callbacks se comporten como en un entorno integrado.'
          },
          {
            title: 'SMTP o IdP externo opcional',
            description:
              'Necesarios solo para la verificación de correo, la recuperación de contraseña o los flujos de inicio de sesión con broker.'
          }
        ]
      }
    },
    pocketbase: {
      replaceOverview: true,
      paragraphs: [
        'PocketBase es una aplicación backend compacta que integra una base de datos SQLite embebida, autenticación, APIs REST, suscripciones en tiempo real, almacenamiento de archivos y una UI de administración. Su modelo de despliegue favorece un solo ejecutable y un directorio de datos local, en lugar de un servidor de base de datos operado por separado para los proyectos habituales.',
        'Un flujo de trabajo local con PocketBase inicia el ejecutable con su directorio `pb_data` y prueba conjuntamente collections, reglas de API, hooks, migraciones y clientes en tiempo real. Go se necesita para extensiones basadas en el código fuente o builds personalizados, mientras que un proxy inverso y HTTPS son opcionales cuando las pruebas de origen de navegador o callbacks de OAuth los requieren.'
      ],
      capabilities: [
        'SQLite embebido',
        'Reglas de API de collections',
        'Autenticación',
        'Suscripciones en tiempo real',
        'Almacenamiento de archivos',
        'Hooks de JavaScript y Go'
      ],
      useCases: [
        'Backends de productos pequeños',
        'APIs de prototipos',
        'Herramientas administrativas en tiempo real',
        'Aplicaciones internas autocontenidas'
      ],
      localEnvironment: {
        title: 'PocketBase mantiene la mayor parte del estado local en un solo servicio',
        description:
          'Su almacén de datos embebido elimina la necesidad de un servidor SQL separado en muchos proyectos, aunque las integraciones de clientes pueden seguir requiriendo un origen local estable.',
        items: [
          {
            title: 'Ejecutable de PocketBase y pb_data',
            description:
              'Ejecutan el backend y conservan localmente los datos de SQLite embebido y el almacenamiento de archivos.'
          },
          {
            title: 'Flujo de migraciones y hooks',
            description:
              'Mantén los cambios de las collections en `pb_migrations` y prueba el comportamiento de las extensiones de JavaScript o Go con datos locales.'
          },
          {
            title: 'Proxy HTTPS opcional',
            description:
              'Útil para proveedores OAuth, cookies seguras o clientes de navegador que requieren una URL de callback HTTPS.'
          }
        ]
      }
    },
    matomo: {
      replaceOverview: true,
      paragraphs: [
        'Matomo es una plataforma de analítica web autoalojada centrada en mantener los datos analíticos bajo el control de quien la opera. Registra las visitas a través de un endpoint de tracking y convierte los eventos almacenados en informes de sitios web, campañas, objetivos, actividad de comercio electrónico y medición respetuosa con la privacidad.',
        'El desarrollo local de Matomo usa PHP, una base de datos compatible con MySQL y un servidor web, con el proceso de archivado ejecutándose de forma programada para obtener informes similares a los de producción. Se necesita un sitio de prueba o un cliente de tracking para generar eventos; Redis, una configuración de Tag Manager o un proxy solo deben usarse cuando la instalación elegida los habilita.'
      ],
      capabilities: [
        'Tracker de JavaScript',
        'Objetivos y conversiones',
        'Analítica de comercio electrónico',
        'Informes personalizados',
        'Controles de privacidad',
        'Archivado programado'
      ],
      useCases: [
        'Analítica web autoalojada',
        'Pruebas de atribución de campañas',
        'Informes de conversión de comercio electrónico',
        'Despliegues de medición sensibles a la privacidad'
      ],
      localEnvironment: {
        title: 'Matomo necesita tanto tráfico de tracking como archivado de informes',
        description:
          'La aplicación de analítica y la base de datos son el núcleo, pero los informes son más representativos cuando se ejercitan las visitas locales y los trabajos de archivado programados.',
        items: [
          {
            title: 'Aplicación web PHP',
            description: 'Sirve la UI de Matomo y el endpoint de tracking que usan los sitios de prueba.'
          },
          {
            title: 'MySQL o MariaDB',
            description:
              'Almacena la configuración, los registros de visitas, las conversiones y los datos de informes procesados.'
          },
          {
            title: 'Trabajo cron de archivado',
            description:
              'Ejecuta `core:archive` de forma programada para generar informes, en lugar de depender solo del archivado activado por el navegador.'
          },
          {
            title: 'Origen de tracking de prueba',
            description:
              'Un sitio local o cliente de prueba proporciona peticiones de tracking y comportamiento de consentimiento realistas.'
          }
        ]
      }
    },
    metabase: {
      replaceOverview: true,
      paragraphs: [
        'Metabase es una aplicación de business intelligence para explorar datos, componer preguntas, publicar dashboards y distribuir alertas. Mantiene sus propios metadatos de aplicación separados de las bases de datos que consultan los analistas, de modo que permisos, colecciones, tarjetas y conexiones pueden gestionarse independientemente de los datos de negocio.',
        'Una instancia local de Metabase se ejecuta sobre Java con una base de datos de aplicación como PostgreSQL para metadatos duraderos. También necesita una o más fuentes de datos de ejemplo accesibles para un desarrollo significativo; SMTP, SSO, la configuración de embedding y un proxy inverso son integraciones opcionales que elige el despliegue.'
      ],
      capabilities: [
        'Constructor visual de consultas',
        'Editor SQL',
        'Dashboards',
        'Alertas y suscripciones',
        'Colecciones y permisos',
        'Embedding'
      ],
      useCases: [
        'Dashboards operativos',
        'Exploración de datos self-service',
        'Analítica embebida en productos',
        'Informes de negocio programados'
      ],
      localEnvironment: {
        title: 'Metabase separa sus metadatos de las fuentes de datos analíticas',
        description:
          'Una base de datos de aplicación duradera y un objetivo de consulta realista hacen que los dashboards locales sean reproducibles; los servicios de integración dependen del escenario.',
        items: [
          {
            title: 'Runtime de Java y aplicación Metabase',
            description: 'Inician el servidor y su interfaz de administración.'
          },
          {
            title: 'Base de datos de metadatos de la aplicación',
            description:
              'PostgreSQL u otra base de datos soportada persiste usuarios, tarjetas, dashboards y conexiones.'
          },
          {
            title: 'Fuente de datos de ejemplo conectada',
            description:
              'Se necesita una base de datos del proyecto accesible para construir y verificar preguntas, modelos y dashboards.'
          },
          {
            title: 'SMTP o SSO opcional',
            description:
              'Úsalos solo al probar suscripciones, aprovisionamiento de usuarios o autenticación empresarial.'
          }
        ]
      }
    },
    'apache-superset': {
      replaceOverview: true,
      paragraphs: [
        'Apache Superset es una plataforma open source de analítica y exploración de datos construida en torno a conexiones SQLAlchemy, SQL Lab, definiciones de gráficos, dashboards y permisos detallados. Suele usarse para consultar almacenes de datos analíticos existentes, no para ser dueña de los datos de negocio en sí.',
        'Un entorno local de Superset usa Python y una base de datos de metadatos, con Redis y Celery gestionando habitualmente la caché, las consultas asíncronas, las alertas y los informes. La CLI `superset` inicializa los metadatos y los roles; un broker, un servicio SMTP o un proxy inverso solo son necesarios cuando las funciones seleccionadas los usan.'
      ],
      capabilities: [
        'SQL Lab',
        'Capa semántica de datasets',
        'Explorador de gráficos',
        'Dashboards',
        'Permisos por rol',
        'Alertas e informes'
      ],
      useCases: [
        'Análisis SQL exploratorio',
        'Dashboards de analítica operativa',
        'BI embebida',
        'Entrega programada de informes',
        'Pruebas de integración de fuentes de datos'
      ],
      localEnvironment: {
        title: 'El desarrollo local de Superset abarca metadatos, caché y motores de datos',
        description:
          'Una instancia básica puede iniciarse de forma sencilla, pero las funciones de analítica asíncrona necesitan la misma topología de workers configurada para el proyecto.',
        items: [
          {
            title: 'Entorno de Python y CLI de superset',
            description:
              'Ejecutan el servidor web y comandos como `superset db upgrade` y `superset init`.'
          },
          {
            title: 'Base de datos de metadatos',
            description:
              'PostgreSQL o MySQL suelen persistir usuarios, datasets, gráficos, dashboards y la configuración.'
          },
          {
            title: 'Workers de Redis y Celery',
            description:
              'Habituales cuando se habilitan la caché, las consultas asíncronas de SQL Lab, las alertas o los informes.'
          },
          {
            title: 'Fuentes de datos analíticas',
            description:
              'Conecta solo las bases de datos o data warehouses necesarios para probar datasets y dashboards.'
          }
        ]
      }
    }
  }
}
