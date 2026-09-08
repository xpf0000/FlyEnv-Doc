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

export const solutionAboutGroupB: {
  en: Partial<Record<SolutionSlug, SolutionAboutContent>>
  zh: Partial<Record<SolutionSlug, SolutionAboutContent>>
  id: Partial<Record<SolutionSlug, SolutionAboutContent>>
} = {
  en: {
    nestjs: {
      replaceOverview: true,
      paragraphs: [
        'NestJS is a TypeScript server framework that organizes backend code around modules, decorators, and dependency injection. Its adapters let one application expose HTTP APIs, GraphQL, WebSockets, and message-based services with consistent patterns.',
        'A small service starts with Node.js and its package manager. Projects using TypeORM or Prisma add a database; Redis, BullMQ, or RabbitMQ belong locally only when caching, jobs, or microservice transports are configured.'
      ],
      capabilities: [
        'Modules',
        'Dependency Injection',
        'Guards and Interceptors',
        'REST and GraphQL',
        'WebSockets',
        'Microservices'
      ],
      useCases: [
        'REST and GraphQL backends',
        'Backend for Frontend services',
        'Queue consumers and scheduled jobs',
        'WebSocket gateways',
        'Microservice APIs'
      ],
      localEnvironment: {
        title: 'A NestJS workspace reflects its transport choices',
        description:
          'The development server is only one part of a service that persists data or communicates asynchronously.',
        items: [
          {
            title: 'Node.js and package manager',
            description:
              'Runs nest CLI commands, TypeScript compilation, and the watch-mode service.'
          },
          {
            title: 'Database and ORM',
            description:
              'PostgreSQL or MySQL is common when Prisma or TypeORM entities and migrations are part of the service.'
          },
          {
            title: 'Job or message transport',
            description:
              'Run Redis for BullMQ, or RabbitMQ for configured message patterns; neither is required by NestJS itself.'
          },
          {
            title: 'API origin',
            description:
              'A local HTTPS proxy is useful only when browser clients, cookies, OAuth redirects, or callbacks need a stable origin.'
          }
        ]
      }
    },
    nuxt: {
      replaceOverview: true,
      paragraphs: [
        'Nuxt is a Vue framework for applications that can render on the server, generate static pages, or run as a client application. File-based routing, composables, server routes, and Nitro make frontend and server endpoints available in one project.',
        'Most Nuxt projects begin with Node.js and the Nuxt dev server. A database, content source, or API service is added according to the chosen modules and server routes, while an HTTPS domain matters for integrations that require a browser origin.'
      ],
      capabilities: [
        'File-based Routing',
        'SSR and SSG',
        'Nitro Server Engine',
        'Server Routes',
        'Auto Imports',
        'Nuxt Modules'
      ],
      useCases: [
        'SEO-oriented Vue sites',
        'Content and documentation sites',
        'Server-rendered product frontends',
        'Vue applications with server APIs',
        'Static sites with hybrid rendering'
      ],
      localEnvironment: {
        title: 'Nuxt development centers on rendering and content sources',
        description:
          'Whether the project is SSR, static, or hybrid determines which services actually need to run locally.',
        items: [
          {
            title: 'Node.js and Nuxt dev server',
            description:
              'Runs Nuxt, Vite-powered module transforms, and Nitro during local development.'
          },
          {
            title: 'Content or application API',
            description:
              'Run the configured headless CMS, backend API, or local content workflow instead of assuming a database is embedded in every Nuxt app.'
          },
          {
            title: 'Database for server routes',
            description:
              'Needed only when Nitro handlers or an attached service persist application data.'
          },
          {
            title: 'Local domain and HTTPS',
            description:
              'Useful for SSR cookie behavior, OAuth callbacks, or testing production-like host rules.'
          }
        ]
      }
    },
    express: {
      replaceOverview: true,
      paragraphs: [
        'Express is a minimal Node.js web framework built around routing and middleware. It deliberately leaves application structure, validation, persistence, and authentication choices to the project, making it a common base for focused HTTP services.',
        'An Express repository normally needs Node.js, npm, pnpm, or Yarn and its own start script. Databases, Redis, queues, and reverse proxies are project decisions, so the local stack should follow the middleware and integrations actually present.'
      ],
      capabilities: [
        'Routing',
        'Middleware Pipeline',
        'Request and Response APIs',
        'Template Engine Support',
        'Error Middleware',
        'Large npm Ecosystem'
      ],
      useCases: [
        'JSON REST APIs',
        'Webhook receivers',
        'Custom BFF services',
        'Server-rendered small sites',
        'Internal integration endpoints'
      ],
      localEnvironment: {
        title: 'Express supplies the HTTP layer, not a prescribed stack',
        description:
          'Its flexibility makes checking the repository configuration more useful than starting generic services.',
        items: [
          {
            title: 'Node.js and project scripts',
            description:
              'Runs the application, nodemon or another watcher, tests, and build steps chosen by the repository.'
          },
          {
            title: 'Configured persistence',
            description:
              'Start PostgreSQL, MySQL, MongoDB, or another store only when the application adapter uses it.'
          },
          {
            title: 'External callback endpoint',
            description:
              'A stable HTTPS local URL is relevant for webhooks, OAuth providers, and browser clients that call the service.'
          }
        ]
      }
    },
    'react-vite': {
      replaceOverview: true,
      paragraphs: [
        "React with Vite is a frontend workflow combining React components with Vite's fast development server and module graph. It favors client-rendered applications while leaving routing, state, testing, and backend architecture to the selected libraries.",
        'The core local process is Node.js running Vite with hot module replacement. API servers, mock services, HTTPS, or a reverse proxy become relevant when the frontend needs to exercise authentication, browser cookies, or cross-origin behavior.'
      ],
      capabilities: [
        'React Components',
        'Fast HMR',
        'JSX and TypeScript',
        'ES Module Dev Server',
        'Production Asset Build',
        'Plugin Ecosystem'
      ],
      useCases: [
        'Single-page applications',
        'Operations dashboards',
        'Design systems and component libraries',
        'Embedded product interfaces',
        'Frontend prototypes backed by APIs'
      ],
      localEnvironment: {
        title: 'A React and Vite project is usually frontend-first',
        description:
          'Keep the local environment small until the application needs to interact with real browser-facing dependencies.',
        items: [
          {
            title: 'Node.js and Vite',
            description:
              'Runs npm scripts, the HMR server, TypeScript transforms, and production builds.'
          },
          {
            title: 'Backend or API mock',
            description:
              'Use the project API, a mock server, or a local BFF when components need realistic data and error states.'
          },
          {
            title: 'HTTPS and proxy rules',
            description:
              'Needed when secure cookies, OAuth, service workers, or API CORS behavior must match a deployed origin.'
          }
        ]
      }
    },
    'vue-vite': {
      replaceOverview: true,
      paragraphs: [
        'Vue 3 with Vite is a modern frontend setup centered on Single-File Components, the Composition API, and fast incremental updates. Vite handles module serving and builds while Vue libraries determine routing, state management, and application conventions.',
        'Node.js and the Vite dev server are the essential local pieces. A separate API, mock server, or local HTTPS proxy is introduced only for the interfaces and browser behavior the Vue application needs to verify.'
      ],
      capabilities: [
        'Single-File Components',
        'Composition API',
        'Reactive State',
        'Fast HMR',
        'TypeScript Support',
        'Vite Plugin Pipeline'
      ],
      useCases: [
        'Administrative interfaces',
        'Interactive product frontends',
        'Reusable Vue component libraries',
        'Data-entry applications',
        'API-driven single-page apps'
      ],
      localEnvironment: {
        title: 'Vue and Vite development begins with the browser loop',
        description:
          'Backend services belong to the local workspace when the chosen application architecture calls them.',
        items: [
          {
            title: 'Node.js and Vite',
            description:
              'Runs the development server, dependency optimization, component transforms, and distribution build.'
          },
          {
            title: 'API or fixture service',
            description:
              'A local API or mock layer supports realistic Composition API data flows without implying a database is mandatory.'
          },
          {
            title: 'Browser-compatible origin',
            description:
              'Configure a proxy and HTTPS when testing auth redirects, secure cookies, service workers, or CORS rules.'
          }
        ]
      }
    },
    sveltekit: {
      replaceOverview: true,
      paragraphs: [
        "SvelteKit is Svelte's application framework, using filesystem routes, load functions, form actions, and adapters to build client-rendered, server-rendered, or static applications. Much of its server capability lives next to the UI rather than in a separate framework.",
        'Development starts with Node.js and the SvelteKit dev server. Server-side load functions and form actions may connect to a database, while adapter choice and browser integrations determine whether a local proxy or HTTPS origin is useful.'
      ],
      capabilities: [
        'Filesystem Routing',
        'Load Functions',
        'Form Actions',
        'SSR and Prerendering',
        'Server Hooks',
        'Adapters'
      ],
      useCases: [
        'Content-rich web applications',
        'Form-heavy product workflows',
        'Server-rendered Svelte sites',
        'Static documentation sites',
        'Small full-stack applications'
      ],
      localEnvironment: {
        title: 'SvelteKit local work spans routes and server-side code',
        description:
          'Its adapter and data-access choices determine the services surrounding the dev server.',
        items: [
          {
            title: 'Node.js and SvelteKit',
            description:
              'Runs the Vite development server, route compilation, tests, and adapter builds.'
          },
          {
            title: 'Application data store',
            description:
              'Start the configured database when server load functions, actions, or endpoints persist data.'
          },
          {
            title: 'Adapter target',
            description:
              'Use the selected Node, static, or edge-adapter workflow locally rather than assuming one deployment model.'
          },
          {
            title: 'Secure local origin',
            description:
              'Useful for OAuth, cookie policies, and callbacks that must see the same site scheme and host.'
          }
        ]
      }
    },
    adonisjs: {
      replaceOverview: true,
      paragraphs: [
        'AdonisJS is a TypeScript-first Node.js framework with an integrated application structure for routing, validation, authentication, Lucid ORM, Edge templates, and command-line workflows. It is designed for full-stack applications rather than only a thin HTTP layer.',
        'Adonis projects commonly run Node.js, use `node ace` commands for migrations and tasks, and connect through Lucid to a configured SQL database. Redis and queue workers are useful when the project enables queues or cache-backed features, not by default.'
      ],
      capabilities: [
        'Lucid ORM',
        'Node Ace CLI',
        'Authentication',
        'Validation',
        'Edge Templates',
        'Route Middleware'
      ],
      useCases: [
        'Database-backed web applications',
        'TypeScript JSON APIs',
        'Authentication-heavy portals',
        'Server-rendered dashboards',
        'Background job workflows'
      ],
      localEnvironment: {
        title: 'AdonisJS follows its own CLI and application conventions',
        description:
          'Its `.env` configuration and Ace commands identify the runtime services a project actually uses.',
        items: [
          {
            title: 'Node.js and package manager',
            description:
              'Runs `node ace serve --hmr`, TypeScript compilation, and repository scripts.'
          },
          {
            title: 'SQL database and Lucid migrations',
            description:
              'MySQL or PostgreSQL is needed when the configured Lucid connection stores application data.'
          },
          {
            title: 'Redis and queue worker',
            description:
              'Run these only for projects configured with cache, queue, or session drivers that depend on Redis.'
          },
          {
            title: 'Asset workflow',
            description:
              'Frontend assets may add Vite or another build task when the application includes an interactive UI.'
          }
        ]
      }
    },
    hono: {
      replaceOverview: true,
      paragraphs: [
        'Hono is a small web framework built on Web Standards APIs and designed to run across JavaScript and TypeScript environments such as Node.js, Bun, Deno, Cloudflare Workers, and other edge platforms. Its portability is a defining constraint, not just a deployment detail.',
        'The local runtime should match the target adapter: Node.js, Bun, Deno, or a worker emulator. Durable storage, bindings, and HTTPS tunnels are added only when the chosen platform integration or application feature requires them.'
      ],
      capabilities: [
        'Multi-runtime Adapters',
        'Web Standards APIs',
        'Router',
        'Middleware',
        'Typed RPC',
        'Edge Deployment Support'
      ],
      useCases: [
        'Edge API endpoints',
        'Lightweight JSON services',
        'Cloudflare Worker applications',
        'Webhook handlers',
        'TypeScript BFFs'
      ],
      localEnvironment: {
        title: 'Hono development starts by matching the deployment runtime',
        description:
          'A Node process is not automatically representative of a Worker, Bun, or Deno deployment.',
        items: [
          {
            title: 'Target runtime or emulator',
            description:
              'Run Node.js, Bun, Deno, or the appropriate Workers development tool for the adapter in use.'
          },
          {
            title: 'Platform bindings',
            description:
              'Use local emulation for KV, D1, R2, or other bindings only when the deployed Hono application uses them.'
          },
          {
            title: 'Callback tunnel or HTTPS URL',
            description:
              'Useful for externally delivered webhooks; a plain local port is enough for isolated request tests.'
          }
        ]
      }
    },
    medusa: {
      replaceOverview: true,
      paragraphs: [
        'Medusa is a composable commerce platform for building custom stores and commerce services with Node.js and TypeScript. Its modules and workflows model products, carts, orders, promotions, payments, fulfillment, and custom business processes without dictating a storefront.',
        'A Medusa backend commonly uses Node.js and PostgreSQL, and includes its Admin at `/app` on the backend origin. Redis is relevant when the backend configures Redis-backed infrastructure; simple v2 development can use local providers. A custom storefront is a separate application when the project has one, while payment, fulfillment, search, and file providers should be run or mocked according to the integrations under development.'
      ],
      capabilities: [
        'Commerce Modules',
        'Workflows',
        'Store APIs',
        'Admin APIs',
        'Promotion Engine',
        'Provider Interfaces'
      ],
      useCases: [
        'Custom commerce backends',
        'Headless store frontends',
        'Marketplace and multi-vendor extensions',
        'Subscription or B2B commerce',
        'Fulfillment and payment integrations'
      ],
      localEnvironment: {
        title: 'Medusa local development coordinates a commerce service and providers',
        description:
          'Product flows are only credible locally when the selected data, cache, and provider boundaries are represented.',
        items: [
          {
            title: 'Node.js Medusa backend',
            description:
              'Runs Medusa CLI commands, the commerce API, and project-specific workflows.'
          },
          {
            title: 'PostgreSQL',
            description: 'Stores commerce entities and is a standard Medusa backend dependency.'
          },
          {
            title: 'Redis',
            description:
              'Run it only when the backend configures Redis-backed infrastructure; simple v2 development can use local providers.'
          },
          {
            title: 'Bundled Admin and custom storefront',
            description:
              'Use the backend Admin at `/app` (for example, `localhost:9000/app`); run a separate Node.js server only for a custom storefront.'
          },
          {
            title: 'Commerce providers',
            description:
              'Use sandbox or local substitutes for configured payment, fulfillment, search, and file providers.'
          }
        ]
      }
    },
    'node-red': {
      replaceOverview: true,
      paragraphs: [
        'Node-RED is a flow-based programming tool for connecting devices, APIs, and online services. A visual editor defines flows made of nodes, while the runtime executes event-driven logic, credentials, HTTP endpoints, and protocol integrations such as MQTT.',
        'The Node-RED runtime runs on Node.js and stores flows and credentials in its user directory. MQTT brokers, databases, serial devices, or external APIs should appear in a local setup only when a flow actually connects to them; credentials need safe local configuration.'
      ],
      capabilities: [
        'Visual Flow Editor',
        'Node Palette',
        'HTTP and WebSocket Nodes',
        'MQTT Integration',
        'Context Storage',
        'Credential Management'
      ],
      useCases: [
        'IoT device orchestration',
        'Webhook and API automation',
        'MQTT message processing',
        'Industrial protocol bridges',
        'Internal notification flows'
      ],
      localEnvironment: {
        title: 'Node-RED is shaped by the endpoints in its flows',
        description:
          'Its supporting services are not abstract application dependencies; they are the brokers, devices, and APIs represented on the canvas.',
        items: [
          {
            title: 'Node.js and Node-RED runtime',
            description: 'Runs the editor, deployed flows, palette nodes, and local HTTP endpoints.'
          },
          {
            title: 'Flow and credential storage',
            description:
              'Keep the user directory and credential secret available so local flows survive restarts without exposing secrets.'
          },
          {
            title: 'MQTT broker or device simulator',
            description:
              'Run Mosquitto or another broker only for flows that publish or subscribe to MQTT topics.'
          },
          {
            title: 'Integration endpoints',
            description:
              'Local APIs, serial devices, databases, or HTTPS callback URLs are introduced by individual nodes and flows.'
          }
        ]
      }
    },
    'ruby-on-rails': {
      replaceOverview: true,
      paragraphs: [
        'Ruby on Rails is an opinionated full-stack framework centered on convention over configuration. Active Record, migrations, routing, Action Mailer, Active Job, Action Cable, and generators provide a coherent model for database-backed web applications.',
        'A Rails application normally uses Ruby, Bundler, and `bin/rails` commands alongside its configured database. Redis is common for cache, Action Cable, or job backends, and JavaScript or CSS bundling tools are needed only when the repository selects them.'
      ],
      capabilities: [
        'Active Record',
        'Migrations',
        'Action Mailer',
        'Active Job',
        'Action Cable',
        'Rails Generators'
      ],
      useCases: [
        'Database-backed product applications',
        'SaaS products',
        'Internal business systems',
        'Content and membership sites',
        'Real-time collaboration features'
      ],
      localEnvironment: {
        title: 'Rails development follows its bin commands and configured adapters',
        description:
          'The application database is fundamental; background work and frontend tooling follow the features enabled in the repository.',
        items: [
          {
            title: 'Ruby, Bundler, and bin/rails',
            description:
              'Runs the server, generators, tests, migrations, and project-scoped executable commands.'
          },
          {
            title: 'Database and schema migrations',
            description:
              'PostgreSQL, MySQL, or SQLite follows `config/database.yml` and Active Record migrations.'
          },
          {
            title: 'Redis and background jobs',
            description:
              'Needed when the selected cache store, Action Cable adapter, or Active Job queue backend uses Redis.'
          },
          {
            title: 'Assets and mail delivery',
            description:
              'Run the chosen JS or CSS tooling and a local mail catcher only when the application exercises those paths.'
          }
        ]
      }
    }
  },
  zh: {
    nestjs: {
      replaceOverview: true,
      paragraphs: [
        'NestJS 是面向服务端 TypeScript 应用的框架，以模块、装饰器和依赖注入组织代码。通过适配器，同一应用可按一致的模式提供 HTTP API、GraphQL、WebSocket 与消息服务。',
        '小型服务从 Node.js 和包管理器开始。使用 TypeORM 或 Prisma 的项目会接入数据库；只有配置了缓存、任务或微服务传输时，才需要 Redis、BullMQ 或 RabbitMQ。'
      ],
      capabilities: [
        '模块',
        '依赖注入',
        'Guards 与 Interceptors',
        'REST 与 GraphQL',
        'WebSocket',
        '微服务'
      ],
      useCases: [
        'REST 与 GraphQL 后端',
        'BFF 服务',
        '队列消费者与定时任务',
        'WebSocket 网关',
        '微服务 API'
      ],
      localEnvironment: {
        title: 'NestJS 工作区取决于所选传输方式',
        description: '开发服务器只是持久化数据或异步通信服务的一部分。',
        items: [
          {
            title: 'Node.js 与包管理器',
            description: '运行 nest CLI、TypeScript 编译和 watch 模式服务。'
          },
          {
            title: '数据库与 ORM',
            description: '服务使用 Prisma 或 TypeORM 的实体和迁移时，通常需要 PostgreSQL 或 MySQL。'
          },
          {
            title: '任务或消息传输',
            description:
              '使用 BullMQ 时运行 Redis，配置消息模式时运行 RabbitMQ；两者都不是 NestJS 的必需依赖。'
          },
          {
            title: 'API 来源',
            description:
              '浏览器客户端、Cookie、OAuth 回调或回调地址需要稳定来源时，才使用本地 HTTPS 代理。'
          }
        ]
      }
    },
    nuxt: {
      replaceOverview: true,
      paragraphs: [
        'Nuxt 是 Vue 应用框架，可进行服务端渲染、静态生成或纯客户端运行。文件路由、composables、server routes 与 Nitro 让前端和服务端端点可以放在同一项目中。',
        '大多数 Nuxt 项目从 Node.js 和 Nuxt 开发服务器开始。数据库、内容源或 API 服务取决于所选模块和 server routes；需要浏览器安全来源的集成才需要 HTTPS 域名。'
      ],
      capabilities: [
        '文件路由',
        'SSR 与 SSG',
        'Nitro Server Engine',
        'Server Routes',
        '自动导入',
        'Nuxt Modules'
      ],
      useCases: [
        '重视 SEO 的 Vue 网站',
        '内容与文档网站',
        '服务端渲染的产品前台',
        '带服务端 API 的 Vue 应用',
        '混合渲染静态站'
      ],
      localEnvironment: {
        title: 'Nuxt 开发围绕渲染模式与内容来源',
        description: '项目采用 SSR、静态生成还是混合模式，决定了实际需要运行哪些服务。',
        items: [
          {
            title: 'Node.js 与 Nuxt 开发服务器',
            description: '运行 Nuxt、Vite 模块转换和本地 Nitro。'
          },
          {
            title: '内容或应用 API',
            description:
              '运行项目配置的无头 CMS、后端 API 或本地内容工作流，不假定每个 Nuxt 应用都有数据库。'
          },
          {
            title: 'Server Routes 数据库',
            description: '只有 Nitro handlers 或关联服务持久化业务数据时才需要。'
          },
          {
            title: '本地域名与 HTTPS',
            description: '测试 SSR Cookie、OAuth 回调或生产主机规则时有用。'
          }
        ]
      }
    },
    express: {
      replaceOverview: true,
      paragraphs: [
        'Express 是围绕路由和中间件构建的极简 Node.js Web 框架。它把应用结构、校验、持久化和认证选择留给项目，因此常用于聚焦的 HTTP 服务。',
        'Express 仓库通常需要 Node.js、npm、pnpm 或 Yarn 以及自己的启动脚本。数据库、Redis、队列和反向代理都是项目选择，本地栈应跟随实际的中间件和集成。'
      ],
      capabilities: [
        '路由',
        '中间件管线',
        '请求与响应 API',
        '模板引擎支持',
        '错误处理中间件',
        'npm 生态'
      ],
      useCases: [
        'JSON REST API',
        'Webhook 接收器',
        '定制 BFF 服务',
        '小型服务端渲染网站',
        '内部集成端点'
      ],
      localEnvironment: {
        title: 'Express 提供 HTTP 层，而不规定技术栈',
        description: '检查仓库配置比启动通用服务更有意义。',
        items: [
          {
            title: 'Node.js 与项目脚本',
            description: '运行应用、nodemon 或其他监听器、测试和仓库选择的构建步骤。'
          },
          {
            title: '已配置的持久化服务',
            description: '仅当应用适配器使用时，才启动 PostgreSQL、MySQL、MongoDB 或其他存储。'
          },
          {
            title: '外部回调端点',
            description:
              'Webhook、OAuth 提供方或浏览器客户端需要访问服务时，使用稳定的本地 HTTPS URL。'
          }
        ]
      }
    },
    'react-vite': {
      replaceOverview: true,
      paragraphs: [
        'React + Vite 将 React 组件与 Vite 快速开发服务器和模块图结合，是现代前端开发工作流。它偏向客户端渲染，路由、状态、测试和后端架构由项目选择的库决定。',
        '核心本地进程是运行 Vite 热更新的 Node.js。当前端需要验证认证、浏览器 Cookie 或跨域行为时，才加入 API 服务、Mock 服务、HTTPS 或反向代理。'
      ],
      capabilities: [
        'React 组件',
        '快速 HMR',
        'JSX 与 TypeScript',
        'ES Module 开发服务器',
        '生产资源构建',
        '插件生态'
      ],
      useCases: [
        '单页应用',
        '运营数据看板',
        '设计系统与组件库',
        '嵌入式产品界面',
        '由 API 驱动的前端原型'
      ],
      localEnvironment: {
        title: 'React + Vite 通常以前端为中心',
        description: '在应用真正需要面向浏览器的依赖前，本地环境应保持精简。',
        items: [
          {
            title: 'Node.js 与 Vite',
            description: '运行 npm 脚本、HMR 服务、TypeScript 转换和生产构建。'
          },
          {
            title: '后端或 API Mock',
            description: '组件需要真实数据和错误状态时，使用项目 API、Mock 服务器或本地 BFF。'
          },
          {
            title: 'HTTPS 与代理规则',
            description: '需要匹配安全 Cookie、OAuth、Service Worker 或 API CORS 行为时才配置。'
          }
        ]
      }
    },
    'vue-vite': {
      replaceOverview: true,
      paragraphs: [
        'Vue 3 + Vite 是以单文件组件、Composition API 和快速增量更新为核心的前端组合。Vite 负责模块服务和构建，路由、状态管理和应用约定由 Vue 生态中的选择决定。',
        'Node.js 和 Vite 开发服务器是必要组成。只有验证 Vue 应用需要的接口或浏览器行为时，才引入独立 API、Mock 服务或本地 HTTPS 代理。'
      ],
      capabilities: [
        '单文件组件',
        'Composition API',
        '响应式状态',
        '快速 HMR',
        'TypeScript 支持',
        'Vite 插件管线'
      ],
      useCases: [
        '管理后台',
        '交互式产品前端',
        '可复用 Vue 组件库',
        '数据录入应用',
        'API 驱动的单页应用'
      ],
      localEnvironment: {
        title: 'Vue + Vite 开发从浏览器反馈循环开始',
        description: '后端服务仅在所选应用架构需要时进入本地工作区。',
        items: [
          {
            title: 'Node.js 与 Vite',
            description: '运行开发服务器、依赖预构建、组件转换和发布构建。'
          },
          {
            title: 'API 或 Fixture 服务',
            description: '本地 API 或 Mock 层可支持真实数据流，但不表示数据库是必需依赖。'
          },
          {
            title: '浏览器兼容来源',
            description: '测试认证跳转、安全 Cookie、Service Worker 或 CORS 时配置代理和 HTTPS。'
          }
        ]
      }
    },
    sveltekit: {
      replaceOverview: true,
      paragraphs: [
        'SvelteKit 是 Svelte 的应用框架，通过文件路由、load functions、form actions 和 adapters 构建客户端渲染、服务端渲染或静态应用。许多服务端能力与 UI 代码放在同一项目中。',
        '开发从 Node.js 和 SvelteKit 开发服务器开始。服务端 load functions 与 form actions 可能连接数据库，而 adapter 选择和浏览器集成决定是否需要本地代理或 HTTPS 来源。'
      ],
      capabilities: [
        '文件路由',
        'Load Functions',
        'Form Actions',
        'SSR 与预渲染',
        'Server Hooks',
        'Adapters'
      ],
      useCases: [
        '内容丰富的 Web 应用',
        '表单密集型产品流程',
        '服务端渲染 Svelte 网站',
        '静态文档站',
        '小型全栈应用'
      ],
      localEnvironment: {
        title: 'SvelteKit 本地开发覆盖路由与服务端代码',
        description: '围绕开发服务器的服务由 adapter 和数据访问方式决定。',
        items: [
          {
            title: 'Node.js 与 SvelteKit',
            description: '运行 Vite 开发服务器、路由编译、测试和 adapter 构建。'
          },
          {
            title: '应用数据存储',
            description: 'server load functions、actions 或端点持久化数据时启动配置的数据库。'
          },
          {
            title: 'Adapter 目标',
            description:
              '遵循项目选择的 Node、static 或 edge adapter 工作流，而不是默认一种部署模式。'
          },
          {
            title: '安全本地来源',
            description: 'OAuth、Cookie 策略和回调需要相同站点协议与主机时使用。'
          }
        ]
      }
    },
    adonisjs: {
      replaceOverview: true,
      paragraphs: [
        'AdonisJS 是 TypeScript 优先的 Node.js 框架，内置路由、校验、认证、Lucid ORM、Edge 模板和命令行工作流。它面向完整应用，而不仅是薄 HTTP 层。',
        'Adonis 项目通常使用 Node.js、`node ace` 命令和通过 Lucid 配置的 SQL 数据库。只有项目启用队列或缓存驱动功能时，Redis 与 worker 才有必要。'
      ],
      capabilities: ['Lucid ORM', 'Node Ace CLI', '认证', '校验', 'Edge 模板', '路由中间件'],
      useCases: [
        '数据库驱动的 Web 应用',
        'TypeScript JSON API',
        '认证密集型门户',
        '服务端渲染数据看板',
        '后台任务工作流'
      ],
      localEnvironment: {
        title: 'AdonisJS 遵循自身 CLI 与应用约定',
        description: '`.env` 配置和 Ace 命令能指出项目实际需要哪些运行服务。',
        items: [
          {
            title: 'Node.js 与包管理器',
            description: '运行 `node ace serve --hmr`、TypeScript 编译和仓库脚本。'
          },
          {
            title: 'SQL 数据库与 Lucid 迁移',
            description: '配置了 Lucid 连接保存业务数据时需要 MySQL 或 PostgreSQL。'
          },
          {
            title: 'Redis 与队列 worker',
            description: '仅当缓存、队列或会话驱动依赖 Redis 时运行。'
          },
          {
            title: '资源构建',
            description: '应用包含交互式 UI 时，可能还需要 Vite 或其他前端构建任务。'
          }
        ]
      }
    },
    hono: {
      replaceOverview: true,
      paragraphs: [
        'Hono 是基于 Web Standards API 的小型 Web 框架，可运行在 Node.js、Bun、Deno、Cloudflare Workers 等 JavaScript 与 TypeScript 环境。跨运行时能力是它的核心约束，而不仅是部署细节。',
        '本地运行时应与目标 adapter 匹配：Node.js、Bun、Deno 或 Worker 模拟器。持久化存储、bindings 和 HTTPS 隧道只在目标平台集成或应用功能需要时加入。'
      ],
      capabilities: [
        '多运行时 Adapters',
        'Web Standards API',
        '路由器',
        '中间件',
        '类型化 RPC',
        '边缘部署支持'
      ],
      useCases: [
        '边缘 API 端点',
        '轻量 JSON 服务',
        'Cloudflare Worker 应用',
        'Webhook 处理器',
        'TypeScript BFF'
      ],
      localEnvironment: {
        title: 'Hono 开发先匹配部署运行时',
        description: 'Node 进程不一定能代表 Worker、Bun 或 Deno 部署。',
        items: [
          {
            title: '目标运行时或模拟器',
            description: '按 adapter 运行 Node.js、Bun、Deno 或相应的 Workers 开发工具。'
          },
          {
            title: '平台 bindings',
            description: '只有部署的 Hono 应用使用时，才本地模拟 KV、D1、R2 等 bindings。'
          },
          {
            title: '回调隧道或 HTTPS URL',
            description: '外部 Webhook 投递时有用；独立请求测试只需本地端口。'
          }
        ]
      }
    },
    medusa: {
      replaceOverview: true,
      paragraphs: [
        'Medusa 是用 Node.js 和 TypeScript 构建定制商城与电商服务的可组合电商平台。其 modules 与 workflows 覆盖商品、购物车、订单、促销、支付、履约和定制业务流程，但不强制指定前台。',
        'Medusa 后端通常使用 Node.js 和 PostgreSQL，并在后端来源的 `/app` 提供 Admin。只有后端配置了 Redis 支持的基础设施时才需要 Redis；简单的 v2 开发可以使用本地 provider。定制 storefront 存在时才是独立应用；支付、履约、搜索和文件存储等 provider 应按当前开发的集成运行或模拟。'
      ],
      capabilities: [
        'Commerce Modules',
        'Workflows',
        'Store APIs',
        'Admin APIs',
        '促销引擎',
        'Provider Interfaces'
      ],
      useCases: [
        '定制电商后端',
        '无头商城前台',
        '市场与多商户扩展',
        '订阅或 B2B 电商',
        '履约与支付集成'
      ],
      localEnvironment: {
        title: 'Medusa 本地开发协调电商服务与 providers',
        description: '只有呈现选定的数据、缓存和 provider 边界时，商品流程才具有可信度。',
        items: [
          {
            title: 'Node.js Medusa 后端',
            description: '运行 Medusa CLI、商城 API 和项目定制 workflows。'
          },
          { title: 'PostgreSQL', description: '保存电商实体，是 Medusa 后端的标准依赖。' },
          {
            title: 'Redis',
            description:
              '只有后端配置 Redis 支持的基础设施时才运行；简单的 v2 开发可以使用本地 provider。'
          },
          {
            title: '内置 Admin 与定制 storefront',
            description:
              '使用后端的 `/app` Admin（例如 `localhost:9000/app`）；只有定制 storefront 才运行独立 Node.js 开发服务器。'
          },
          {
            title: '电商 Providers',
            description: '对支付、履约、搜索和文件 provider 使用 sandbox 或本地替代实现。'
          }
        ]
      }
    },
    'node-red': {
      replaceOverview: true,
      paragraphs: [
        'Node-RED 是用于连接设备、API 和在线服务的流式编程工具。可视化编辑器定义由节点组成的 flows，运行时执行事件逻辑、凭据、HTTP 端点及 MQTT 等协议集成。',
        'Node-RED 运行时基于 Node.js，并在用户目录保存 flows 和凭据。MQTT broker、数据库、串口设备或外部 API 只在 flow 实际连接它们时进入本地环境，凭据应安全配置。'
      ],
      capabilities: [
        '可视化 Flow 编辑器',
        'Node Palette',
        'HTTP 与 WebSocket 节点',
        'MQTT 集成',
        'Context Storage',
        '凭据管理'
      ],
      useCases: [
        'IoT 设备编排',
        'Webhook 与 API 自动化',
        'MQTT 消息处理',
        '工业协议桥接',
        '内部通知 Flow'
      ],
      localEnvironment: {
        title: 'Node-RED 由画布中的端点决定环境',
        description: '它的配套服务不是抽象应用依赖，而是 flows 中表达的 broker、设备和 API。',
        items: [
          {
            title: 'Node.js 与 Node-RED 运行时',
            description: '运行编辑器、已部署 flows、palette 节点和本地 HTTP 端点。'
          },
          {
            title: 'Flow 与凭据存储',
            description: '保留用户目录和凭据密钥，使本地 flows 重启后可用而不暴露秘密。'
          },
          {
            title: 'MQTT broker 或设备模拟器',
            description: '仅为发布或订阅 MQTT topic 的 flows 运行 Mosquitto 或其他 broker。'
          },
          {
            title: '集成端点',
            description: '本地 API、串口设备、数据库或 HTTPS 回调 URL 由具体节点和 flow 引入。'
          }
        ]
      }
    },
    'ruby-on-rails': {
      replaceOverview: true,
      paragraphs: [
        'Ruby on Rails 是以约定优于配置为核心的全栈框架。Active Record、迁移、路由、Action Mailer、Active Job、Action Cable 与生成器为数据库应用提供统一模型。',
        'Rails 应用通常使用 Ruby、Bundler、`bin/rails` 命令和已配置数据库。Redis 常用于缓存、Action Cable 或任务后端；JavaScript、CSS 打包工具只在仓库选择它们时需要。'
      ],
      capabilities: [
        'Active Record',
        'Migrations',
        'Action Mailer',
        'Active Job',
        'Action Cable',
        'Rails Generators'
      ],
      useCases: [
        '数据库驱动的产品应用',
        'SaaS 产品',
        '内部业务系统',
        '内容与会员网站',
        '实时协作功能'
      ],
      localEnvironment: {
        title: 'Rails 开发遵循 bin 命令与已配置 adapters',
        description: '应用数据库是基础；后台任务和前端工具由仓库启用的功能决定。',
        items: [
          {
            title: 'Ruby、Bundler 与 bin/rails',
            description: '运行服务器、生成器、测试、迁移和项目范围的可执行命令。'
          },
          {
            title: '数据库与 schema migrations',
            description:
              '根据 `config/database.yml` 和 Active Record migrations 使用 PostgreSQL、MySQL 或 SQLite。'
          },
          {
            title: 'Redis 与后台任务',
            description:
              '只有所选 cache store、Action Cable adapter 或 Active Job 队列后端使用 Redis 时才需要。'
          },
          {
            title: '资源与邮件投递',
            description: '仅在应用覆盖这些路径时运行所选 JS/CSS 工具和本地邮件捕获器。'
          }
        ]
      }
    }
  },
  id: {
    nestjs: {
      replaceOverview: true,
      paragraphs: [
        'NestJS adalah framework server TypeScript yang menyusun backend dengan modul, decorator, dan dependency injection. Melalui adapter, satu aplikasi dapat menyediakan HTTP API, GraphQL, WebSocket, dan layanan pesan dengan pola yang konsisten.',
        'Layanan kecil dimulai dari Node.js dan package manager. Proyek yang memakai TypeORM atau Prisma menambahkan database; Redis, BullMQ, atau RabbitMQ diperlukan hanya saat cache, job, atau transport microservice dikonfigurasi.'
      ],
      capabilities: [
        'Modul',
        'Dependency Injection',
        'Guards dan Interceptors',
        'REST dan GraphQL',
        'WebSocket',
        'Microservices'
      ],
      useCases: [
        'Backend REST dan GraphQL',
        'Layanan Backend for Frontend',
        'Konsumen antrean dan tugas terjadwal',
        'Gateway WebSocket',
        'API microservice'
      ],
      localEnvironment: {
        title: 'Workspace NestJS mengikuti pilihan transportnya',
        description:
          'Server development hanya satu bagian dari layanan yang menyimpan data atau berkomunikasi secara asinkron.',
        items: [
          {
            title: 'Node.js dan package manager',
            description: 'Menjalankan nest CLI, kompilasi TypeScript, dan layanan mode watch.'
          },
          {
            title: 'Database dan ORM',
            description:
              'PostgreSQL atau MySQL lazim saat entitas dan migrasi Prisma atau TypeORM digunakan.'
          },
          {
            title: 'Transport job atau pesan',
            description:
              'Jalankan Redis untuk BullMQ atau RabbitMQ untuk pola pesan yang dikonfigurasi; keduanya bukan kebutuhan NestJS sendiri.'
          },
          {
            title: 'Origin API',
            description:
              'Proxy HTTPS lokal berguna bila klien browser, cookie, redirect OAuth, atau callback memerlukan origin stabil.'
          }
        ]
      }
    },
    nuxt: {
      replaceOverview: true,
      paragraphs: [
        'Nuxt adalah framework Vue untuk aplikasi yang dapat dirender di server, digenerasikan statis, atau berjalan di klien. File routing, composables, server routes, dan Nitro menempatkan frontend serta endpoint server dalam satu proyek.',
        'Sebagian besar proyek Nuxt dimulai dengan Node.js dan server development Nuxt. Database, sumber konten, atau API ditambahkan sesuai modul dan server routes yang dipakai; domain HTTPS penting hanya untuk integrasi yang memerlukan origin browser.'
      ],
      capabilities: [
        'File-based Routing',
        'SSR dan SSG',
        'Nitro Server Engine',
        'Server Routes',
        'Auto Imports',
        'Nuxt Modules'
      ],
      useCases: [
        'Situs Vue berfokus SEO',
        'Situs konten dan dokumentasi',
        'Storefront produk server-rendered',
        'Aplikasi Vue dengan API server',
        'Situs statis dengan rendering hybrid'
      ],
      localEnvironment: {
        title: 'Development Nuxt berpusat pada rendering dan sumber konten',
        description:
          'Mode SSR, statis, atau hybrid menentukan layanan yang sungguh perlu dijalankan lokal.',
        items: [
          {
            title: 'Node.js dan server Nuxt',
            description:
              'Menjalankan Nuxt, transformasi modul berbasis Vite, dan Nitro secara lokal.'
          },
          {
            title: 'Konten atau API aplikasi',
            description:
              'Jalankan CMS headless, API backend, atau alur konten lokal yang dikonfigurasi, tanpa menganggap semua aplikasi Nuxt memiliki database.'
          },
          {
            title: 'Database untuk server routes',
            description:
              'Diperlukan hanya bila handler Nitro atau layanan terkait menyimpan data aplikasi.'
          },
          {
            title: 'Domain lokal dan HTTPS',
            description:
              'Berguna untuk menguji cookie SSR, callback OAuth, atau aturan host seperti produksi.'
          }
        ]
      }
    },
    express: {
      replaceOverview: true,
      paragraphs: [
        'Express adalah framework web Node.js minimal yang dibangun di sekitar routing dan middleware. Struktur aplikasi, validasi, penyimpanan, dan autentikasi sengaja diserahkan kepada proyek, sehingga cocok untuk layanan HTTP yang terfokus.',
        'Repository Express umumnya membutuhkan Node.js, npm, pnpm, atau Yarn beserta skrip start sendiri. Database, Redis, antrean, dan reverse proxy adalah pilihan proyek; stack lokal harus mengikuti middleware dan integrasi yang benar-benar ada.'
      ],
      capabilities: [
        'Routing',
        'Pipeline Middleware',
        'API Request dan Response',
        'Dukungan Template Engine',
        'Middleware Error',
        'Ekosistem npm'
      ],
      useCases: [
        'API JSON REST',
        'Penerima webhook',
        'Layanan BFF kustom',
        'Situs kecil server-rendered',
        'Endpoint integrasi internal'
      ],
      localEnvironment: {
        title: 'Express menyediakan lapisan HTTP, bukan stack baku',
        description:
          'Memeriksa konfigurasi repository lebih berguna daripada menyalakan layanan generik.',
        items: [
          {
            title: 'Node.js dan skrip proyek',
            description:
              'Menjalankan aplikasi, nodemon atau watcher lain, test, dan langkah build yang dipilih repository.'
          },
          {
            title: 'Penyimpanan terkonfigurasi',
            description:
              'Jalankan PostgreSQL, MySQL, MongoDB, atau store lain hanya saat adapter aplikasi memakainya.'
          },
          {
            title: 'Endpoint callback eksternal',
            description:
              'URL HTTPS lokal stabil relevan untuk webhook, penyedia OAuth, dan klien browser yang memanggil layanan.'
          }
        ]
      }
    },
    'react-vite': {
      replaceOverview: true,
      paragraphs: [
        'React + Vite menggabungkan komponen React dengan server development dan module graph Vite yang cepat. Alur ini condong ke aplikasi client-rendered, sementara routing, state, testing, dan arsitektur backend dipilih oleh library proyek.',
        'Proses lokal inti adalah Node.js yang menjalankan Vite dengan hot module replacement. Server API, mock service, HTTPS, atau proxy ditambahkan saat frontend perlu menguji autentikasi, cookie browser, atau perilaku lintas origin.'
      ],
      capabilities: [
        'Komponen React',
        'HMR Cepat',
        'JSX dan TypeScript',
        'Server Dev ES Module',
        'Build Aset Produksi',
        'Ekosistem Plugin'
      ],
      useCases: [
        'Aplikasi single-page',
        'Dashboard operasi',
        'Design system dan library komponen',
        'Antarmuka produk tertanam',
        'Prototipe frontend berbasis API'
      ],
      localEnvironment: {
        title: 'React + Vite biasanya mengutamakan frontend',
        description:
          'Pertahankan lingkungan lokal kecil sampai aplikasi perlu berinteraksi dengan dependensi yang terlihat browser.',
        items: [
          {
            title: 'Node.js dan Vite',
            description:
              'Menjalankan skrip npm, server HMR, transformasi TypeScript, dan build produksi.'
          },
          {
            title: 'Backend atau API mock',
            description:
              'Gunakan API proyek, mock server, atau BFF lokal saat komponen memerlukan data dan state error realistis.'
          },
          {
            title: 'HTTPS dan aturan proxy',
            description:
              'Diperlukan bila cookie aman, OAuth, service worker, atau perilaku CORS API harus menyerupai origin produksi.'
          }
        ]
      }
    },
    'vue-vite': {
      replaceOverview: true,
      paragraphs: [
        'Vue 3 + Vite adalah kombinasi frontend modern yang berpusat pada Single-File Components, Composition API, dan pembaruan inkremental cepat. Vite menangani penyajian modul dan build, sedangkan library Vue menentukan routing, state, dan konvensi aplikasi.',
        'Node.js dan server development Vite adalah bagian inti. API terpisah, layanan mock, atau proxy HTTPS lokal masuk hanya untuk antarmuka dan perilaku browser yang perlu diverifikasi aplikasi Vue.'
      ],
      capabilities: [
        'Single-File Components',
        'Composition API',
        'State Reaktif',
        'HMR Cepat',
        'Dukungan TypeScript',
        'Pipeline Plugin Vite'
      ],
      useCases: [
        'Antarmuka administrasi',
        'Frontend produk interaktif',
        'Library komponen Vue',
        'Aplikasi input data',
        'Single-page app berbasis API'
      ],
      localEnvironment: {
        title: 'Development Vue + Vite dimulai dari loop browser',
        description:
          'Layanan backend masuk ke workspace lokal hanya saat arsitektur aplikasi yang dipilih membutuhkannya.',
        items: [
          {
            title: 'Node.js dan Vite',
            description:
              'Menjalankan server development, optimasi dependensi, transformasi komponen, dan build distribusi.'
          },
          {
            title: 'API atau layanan fixture',
            description:
              'API lokal atau lapisan mock mendukung alur data realistis tanpa menyiratkan database wajib ada.'
          },
          {
            title: 'Origin kompatibel browser',
            description:
              'Atur proxy dan HTTPS saat menguji redirect autentikasi, cookie aman, service worker, atau CORS.'
          }
        ]
      }
    },
    sveltekit: {
      replaceOverview: true,
      paragraphs: [
        'SvelteKit adalah framework aplikasi Svelte yang memakai route filesystem, load functions, form actions, dan adapter untuk membuat aplikasi client-rendered, server-rendered, atau statis. Banyak kemampuan server berada di dekat kode UI, bukan framework terpisah.',
        'Development dimulai dari Node.js dan server SvelteKit. Load functions serta form actions sisi server dapat terhubung ke database, sedangkan pilihan adapter dan integrasi browser menentukan kebutuhan proxy atau origin HTTPS lokal.'
      ],
      capabilities: [
        'Routing Filesystem',
        'Load Functions',
        'Form Actions',
        'SSR dan Prerendering',
        'Server Hooks',
        'Adapters'
      ],
      useCases: [
        'Aplikasi web kaya konten',
        'Alur produk banyak formulir',
        'Situs Svelte server-rendered',
        'Situs dokumentasi statis',
        'Aplikasi full-stack kecil'
      ],
      localEnvironment: {
        title: 'Kerja lokal SvelteKit mencakup route dan kode server',
        description:
          'Pilihan adapter dan akses data menentukan layanan di sekitar server development.',
        items: [
          {
            title: 'Node.js dan SvelteKit',
            description: 'Menjalankan server Vite, kompilasi route, test, dan build adapter.'
          },
          {
            title: 'Store data aplikasi',
            description:
              'Jalankan database terkonfigurasi saat load functions, actions, atau endpoint server menyimpan data.'
          },
          {
            title: 'Target adapter',
            description:
              'Gunakan alur Node, static, atau edge adapter yang dipilih proyek, bukan menganggap satu model deployment.'
          },
          {
            title: 'Origin lokal aman',
            description:
              'Berguna untuk OAuth, kebijakan cookie, dan callback yang memerlukan skema serta host situs yang sama.'
          }
        ]
      }
    },
    adonisjs: {
      replaceOverview: true,
      paragraphs: [
        'AdonisJS adalah framework Node.js berorientasi TypeScript dengan struktur terpadu untuk routing, validasi, autentikasi, Lucid ORM, template Edge, dan alur CLI. Framework ini dirancang untuk aplikasi full-stack, bukan sekadar lapisan HTTP tipis.',
        'Proyek Adonis lazim memakai Node.js, perintah `node ace`, dan database SQL yang dikonfigurasi melalui Lucid. Redis serta worker antrean bermanfaat saat proyek mengaktifkan antrean atau fitur cache-backed, bukan secara bawaan.'
      ],
      capabilities: [
        'Lucid ORM',
        'Node Ace CLI',
        'Autentikasi',
        'Validasi',
        'Template Edge',
        'Middleware Route'
      ],
      useCases: [
        'Aplikasi web berbasis database',
        'API JSON TypeScript',
        'Portal dengan autentikasi kuat',
        'Dashboard server-rendered',
        'Alur background job'
      ],
      localEnvironment: {
        title: 'AdonisJS mengikuti CLI dan konvensi aplikasinya sendiri',
        description:
          'Konfigurasi `.env` dan perintah Ace menunjukkan layanan runtime yang benar-benar dipakai proyek.',
        items: [
          {
            title: 'Node.js dan package manager',
            description:
              'Menjalankan `node ace serve --hmr`, kompilasi TypeScript, dan skrip repository.'
          },
          {
            title: 'Database SQL dan migrasi Lucid',
            description:
              'MySQL atau PostgreSQL diperlukan saat koneksi Lucid terkonfigurasi menyimpan data aplikasi.'
          },
          {
            title: 'Redis dan worker antrean',
            description:
              'Jalankan hanya bila driver cache, antrean, atau session bergantung pada Redis.'
          },
          {
            title: 'Alur aset',
            description:
              'Vite atau tugas build lain mungkin diperlukan saat aplikasi menyertakan UI interaktif.'
          }
        ]
      }
    },
    hono: {
      replaceOverview: true,
      paragraphs: [
        'Hono adalah framework web kecil di atas Web Standards API yang berjalan di lingkungan JavaScript dan TypeScript seperti Node.js, Bun, Deno, serta Cloudflare Workers. Portabilitas lintas runtime adalah batasan utamanya, bukan sekadar detail deployment.',
        'Runtime lokal harus cocok dengan adapter target: Node.js, Bun, Deno, atau emulator Worker. Penyimpanan tahan lama, bindings, dan tunnel HTTPS ditambahkan hanya saat integrasi platform atau fitur aplikasi membutuhkannya.'
      ],
      capabilities: [
        'Adapter Multi-runtime',
        'Web Standards API',
        'Router',
        'Middleware',
        'RPC Bertipe',
        'Dukungan Edge Deployment'
      ],
      useCases: [
        'Endpoint API edge',
        'Layanan JSON ringan',
        'Aplikasi Cloudflare Worker',
        'Handler webhook',
        'BFF TypeScript'
      ],
      localEnvironment: {
        title: 'Development Hono dimulai dari runtime deployment',
        description: 'Proses Node tidak selalu mewakili deployment Worker, Bun, atau Deno.',
        items: [
          {
            title: 'Runtime target atau emulator',
            description:
              'Jalankan Node.js, Bun, Deno, atau alat development Workers yang sesuai untuk adapter.'
          },
          {
            title: 'Bindings platform',
            description:
              'Emulasikan KV, D1, R2, atau binding lain secara lokal hanya bila aplikasi Hono yang dideploy menggunakannya.'
          },
          {
            title: 'Tunnel callback atau URL HTTPS',
            description:
              'Berguna bagi webhook eksternal; test request terisolasi cukup memakai port lokal.'
          }
        ]
      }
    },
    medusa: {
      replaceOverview: true,
      paragraphs: [
        'Medusa adalah platform commerce composable untuk membangun toko dan layanan commerce kustom dengan Node.js serta TypeScript. Module dan workflow-nya memodelkan produk, cart, order, promosi, pembayaran, fulfillment, serta proses bisnis kustom tanpa menentukan storefront.',
        'Backend Medusa umumnya memakai Node.js dan PostgreSQL, serta menyertakan Admin pada `/app` di origin backend. Redis relevan bila backend mengonfigurasi infrastruktur berbasis Redis; development v2 sederhana dapat memakai provider lokal. Storefront kustom menjadi aplikasi terpisah bila proyek memilikinya, sedangkan provider pembayaran, fulfillment, pencarian, dan penyimpanan file dijalankan atau dimock sesuai integrasi yang sedang dikembangkan.'
      ],
      capabilities: [
        'Commerce Modules',
        'Workflows',
        'Store APIs',
        'Admin APIs',
        'Mesin Promosi',
        'Provider Interfaces'
      ],
      useCases: [
        'Backend commerce kustom',
        'Storefront headless',
        'Ekstensi marketplace dan multi-vendor',
        'Commerce subscription atau B2B',
        'Integrasi fulfillment dan pembayaran'
      ],
      localEnvironment: {
        title: 'Development Medusa mengoordinasikan layanan commerce dan provider',
        description:
          'Alur produk hanya realistis secara lokal bila batas data, cache, dan provider yang dipilih tersedia.',
        items: [
          {
            title: 'Backend Node.js Medusa',
            description: 'Menjalankan Medusa CLI, API commerce, dan workflow khusus proyek.'
          },
          {
            title: 'PostgreSQL',
            description:
              'Menyimpan entitas commerce dan merupakan dependensi standar backend Medusa.'
          },
          {
            title: 'Redis',
            description:
              'Jalankan hanya bila backend mengonfigurasi infrastruktur berbasis Redis; development v2 sederhana dapat memakai provider lokal.'
          },
          {
            title: 'Admin bawaan dan storefront kustom',
            description:
              'Gunakan Admin backend pada `/app` (misalnya `localhost:9000/app`); jalankan server Node.js terpisah hanya untuk storefront kustom.'
          },
          {
            title: 'Provider commerce',
            description:
              'Gunakan sandbox atau pengganti lokal untuk provider pembayaran, fulfillment, pencarian, dan file.'
          }
        ]
      }
    },
    'node-red': {
      replaceOverview: true,
      paragraphs: [
        'Node-RED adalah tool pemrograman berbasis flow untuk menghubungkan perangkat, API, dan layanan online. Editor visual mendefinisikan flow yang terdiri dari node, sementara runtime menjalankan logika event, kredensial, endpoint HTTP, dan integrasi protokol seperti MQTT.',
        'Runtime Node-RED berjalan di atas Node.js dan menyimpan flow serta kredensial di user directory. MQTT broker, database, perangkat serial, atau API eksternal masuk ke setup lokal hanya ketika flow benar-benar menghubungkannya; kredensial perlu dikonfigurasi dengan aman.'
      ],
      capabilities: [
        'Editor Flow Visual',
        'Node Palette',
        'Node HTTP dan WebSocket',
        'Integrasi MQTT',
        'Context Storage',
        'Manajemen Kredensial'
      ],
      useCases: [
        'Orkestrasi perangkat IoT',
        'Otomasi webhook dan API',
        'Pemrosesan pesan MQTT',
        'Jembatan protokol industri',
        'Flow notifikasi internal'
      ],
      localEnvironment: {
        title: 'Node-RED dibentuk oleh endpoint dalam flow',
        description:
          'Layanan pendukungnya bukan dependensi abstrak, melainkan broker, perangkat, dan API yang digambarkan pada canvas.',
        items: [
          {
            title: 'Node.js dan runtime Node-RED',
            description:
              'Menjalankan editor, flow terpasang, node palette, dan endpoint HTTP lokal.'
          },
          {
            title: 'Penyimpanan flow dan kredensial',
            description:
              'Pertahankan user directory dan secret kredensial agar flow lokal tetap ada setelah restart tanpa membocorkan rahasia.'
          },
          {
            title: 'Broker MQTT atau simulator perangkat',
            description:
              'Jalankan Mosquitto atau broker lain hanya untuk flow yang publish atau subscribe topic MQTT.'
          },
          {
            title: 'Endpoint integrasi',
            description:
              'API lokal, perangkat serial, database, atau URL callback HTTPS ditambahkan oleh node dan flow tertentu.'
          }
        ]
      }
    },
    'ruby-on-rails': {
      replaceOverview: true,
      paragraphs: [
        'Ruby on Rails adalah framework full-stack yang berpusat pada convention over configuration. Active Record, migrations, routing, Action Mailer, Active Job, Action Cable, dan generator memberi model terpadu untuk aplikasi web berbasis database.',
        'Aplikasi Rails biasanya memakai Ruby, Bundler, perintah `bin/rails`, dan database terkonfigurasi. Redis umum untuk cache, Action Cable, atau backend job; alat bundling JavaScript dan CSS diperlukan hanya bila repository memilihnya.'
      ],
      capabilities: [
        'Active Record',
        'Migrations',
        'Action Mailer',
        'Active Job',
        'Action Cable',
        'Rails Generators'
      ],
      useCases: [
        'Aplikasi produk berbasis database',
        'Produk SaaS',
        'Sistem bisnis internal',
        'Situs konten dan membership',
        'Fitur kolaborasi realtime'
      ],
      localEnvironment: {
        title: 'Development Rails mengikuti perintah bin dan adapter terkonfigurasi',
        description:
          'Database aplikasi adalah dasar; background work dan tool frontend mengikuti fitur yang diaktifkan repository.',
        items: [
          {
            title: 'Ruby, Bundler, dan bin/rails',
            description:
              'Menjalankan server, generator, test, migrasi, dan executable dalam lingkup proyek.'
          },
          {
            title: 'Database dan migrasi skema',
            description:
              'PostgreSQL, MySQL, atau SQLite mengikuti `config/database.yml` serta migrasi Active Record.'
          },
          {
            title: 'Redis dan background job',
            description:
              'Diperlukan saat cache store, adapter Action Cable, atau backend antrean Active Job yang dipilih memakai Redis.'
          },
          {
            title: 'Aset dan pengiriman email',
            description:
              'Jalankan tool JS atau CSS pilihan serta mail catcher lokal hanya saat aplikasi menguji jalur tersebut.'
          }
        ]
      }
    }
  }
}
