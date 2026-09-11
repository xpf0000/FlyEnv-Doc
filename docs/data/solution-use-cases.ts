import type { SolutionSlug } from './solution-details'
import { solutionAboutGroupA, type SolutionAboutContent } from './solution-about-group-a'
import { solutionAboutGroupB } from './solution-about-group-b'
import { solutionAboutGroupC } from './solution-about-group-c'

export type SolutionAboutLocale = 'en' | 'zh' | 'id' | 'es'

const nextjsAboutContentByLocale: Record<
  SolutionAboutLocale,
  Partial<Record<SolutionSlug, SolutionAboutContent>>
> = {
  en: {
    nextjs: {
      replaceOverview: true,
      paragraphs: [
        'Next.js is a React framework for building web applications that combine a polished frontend with server-side capabilities. It supports App Router, Server Components, server rendering, static generation, and API endpoints in one codebase, so teams can choose the right rendering model for each route.',
        'FlyEnv can be used as a local development environment for Next.js projects that depend on Node.js, PostgreSQL, MySQL, Redis, Nginx, Caddy, and other local services. This keeps the project close to its real operating conditions without turning local development into a collection of unrelated installers and manual configuration.'
      ],
      capabilities: [
        'App Router',
        'Server Components',
        'SSR / SSG / ISR',
        'Route Handlers',
        'Middleware',
        'Image & Font Optimization'
      ],
      useCases: [
        'SaaS applications and customer dashboards',
        'E-commerce storefronts and checkout flows',
        'SEO-focused content and marketing websites',
        'Full-stack web applications and BFF APIs',
        'Internal tools and operations portals'
      ],
      localEnvironment: {
        title: 'A real Next.js environment is more than next dev',
        description:
          'A simple project may only need Node.js. As it grows to include users, business data, caching, uploads, email, and third-party callbacks, the local environment usually grows with it.',
        items: [
          {
            title: 'Node.js runtime',
            description: 'Runs Next.js, local development tooling, and build tasks.'
          },
          {
            title: 'Database',
            description: 'Stores users, orders, application content, and other business data.'
          },
          {
            title: 'Redis',
            description: 'Supports caching, sessions, queues, and rate-limiting patterns.'
          },
          {
            title: 'HTTPS & custom domain',
            description:
              'Provides a production-like local origin for cookies, OAuth, and callbacks.'
          },
          {
            title: 'Mail & storage',
            description:
              'Covers transactional email, file uploads, and other real product dependencies.'
          }
        ]
      }
    }
  },
  zh: {
    nextjs: {
      replaceOverview: true,
      paragraphs: [
        'Next.js 是一个用于构建 Web 应用的 React 框架，同时覆盖精致的前端体验和服务端能力。它在同一代码库中支持 App Router、Server Components、服务端渲染、静态生成和 API 端点，让团队能为不同页面选择合适的渲染方式。',
        'FlyEnv 可作为依赖 Node.js、PostgreSQL、MySQL、Redis、Nginx、Caddy 等服务的 Next.js 项目的本地开发环境。它让本地环境更接近真实业务运行条件，而不是由分散的安装器和手动配置拼凑而成。'
      ],
      capabilities: [
        'App Router',
        'Server Components',
        'SSR / SSG / ISR',
        'Route Handlers',
        'Middleware',
        '图片与字体优化'
      ],
      useCases: [
        'SaaS 应用与客户后台',
        '电商前台与结算流程',
        '重视 SEO 的内容站与营销官网',
        '全栈 Web 应用与 BFF API',
        '内部工具与运营门户'
      ],
      localEnvironment: {
        title: '真实的 Next.js 本地环境不只有 next dev',
        description:
          '一个简单项目可能只需要 Node.js。当项目逐渐加入用户、业务数据、缓存、上传、邮件和第三方回调时，本地环境通常也会随之扩展。',
        items: [
          { title: 'Node.js 运行时', description: '运行 Next.js、本地开发工具和构建任务。' },
          { title: '数据库', description: '保存用户、订单、应用内容及其他业务数据。' },
          { title: 'Redis', description: '支持缓存、会话、队列和限流等常见模式。' },
          {
            title: 'HTTPS 与自定义域名',
            description: '为 Cookie、OAuth 和回调提供接近生产环境的本地来源。'
          },
          { title: '邮件与存储', description: '覆盖事务邮件、文件上传及其他真实应用依赖。' }
        ]
      }
    }
  },
  id: {
    nextjs: {
      replaceOverview: true,
      paragraphs: [
        'Next.js adalah framework React untuk membangun aplikasi web yang memadukan frontend yang matang dengan kemampuan server-side. Framework ini mendukung App Router, Server Components, server rendering, static generation, dan endpoint API dalam satu codebase sehingga tim dapat memilih model rendering yang tepat untuk tiap route.',
        'FlyEnv dapat digunakan sebagai lingkungan development lokal untuk proyek Next.js yang bergantung pada Node.js, PostgreSQL, MySQL, Redis, Nginx, Caddy, dan layanan lokal lain. Ini menjaga lingkungan proyek dekat dengan kondisi operasional nyata tanpa menggabungkan installer dan konfigurasi manual yang tidak saling terhubung.'
      ],
      capabilities: [
        'App Router',
        'Server Components',
        'SSR / SSG / ISR',
        'Route Handlers',
        'Middleware',
        'Optimasi Gambar & Font'
      ],
      useCases: [
        'Aplikasi SaaS dan dasbor pelanggan',
        'Storefront e-commerce dan alur checkout',
        'Situs konten dan pemasaran yang fokus pada SEO',
        'Aplikasi web full-stack dan BFF API',
        'Alat internal dan portal operasional'
      ],
      localEnvironment: {
        title: 'Lingkungan Next.js nyata lebih dari next dev',
        description:
          'Proyek sederhana mungkin hanya membutuhkan Node.js. Saat pengguna, data bisnis, cache, unggahan, email, dan callback pihak ketiga ditambahkan, lingkungan lokal biasanya ikut berkembang.',
        items: [
          {
            title: 'Runtime Node.js',
            description: 'Menjalankan Next.js, tooling development lokal, dan tugas build.'
          },
          {
            title: 'Database',
            description: 'Menyimpan pengguna, pesanan, konten aplikasi, dan data bisnis lain.'
          },
          {
            title: 'Redis',
            description: 'Mendukung cache, sesi, antrean, dan pola pembatasan laju.'
          },
          {
            title: 'HTTPS & domain kustom',
            description:
              'Menyediakan origin lokal mirip produksi untuk cookie, OAuth, dan callback.'
          },
          {
            title: 'Mail & storage',
            description:
              'Mencakup email transaksional, unggahan file, dan dependensi produk nyata lain.'
          }
        ]
      }
    }
  },
  es: {
    nextjs: {
      replaceOverview: true,
      paragraphs: [
        'Next.js es un framework de React para crear aplicaciones web que combinan un frontend pulido con capacidades del lado del servidor. Admite App Router, Server Components, renderizado en el servidor, generación estática y endpoints de API en una misma base de código, de modo que los equipos pueden elegir el modelo de renderizado adecuado para cada ruta.',
        'FlyEnv puede usarse como entorno de desarrollo local para proyectos Next.js que dependen de Node.js, PostgreSQL, MySQL, Redis, Nginx, Caddy y otros servicios locales. Esto mantiene el proyecto cerca de sus condiciones reales de funcionamiento sin convertir el desarrollo local en una colección de instaladores inconexos y configuración manual.'
      ],
      capabilities: [
        'App Router',
        'Server Components',
        'SSR / SSG / ISR',
        'Route Handlers',
        'Middleware',
        'Optimización de imágenes y fuentes'
      ],
      useCases: [
        'Aplicaciones SaaS y paneles de clientes',
        'Tiendas de comercio electrónico y flujos de pago',
        'Sitios de contenido y marketing centrados en SEO',
        'Aplicaciones web full-stack y APIs BFF',
        'Herramientas internas y portales de operaciones'
      ],
      localEnvironment: {
        title: 'Un entorno real de Next.js es más que next dev',
        description:
          'Un proyecto sencillo puede necesitar solo Node.js. A medida que crece para incluir usuarios, datos de negocio, caché, subidas de archivos, correo y callbacks de terceros, el entorno local suele crecer con él.',
        items: [
          {
            title: 'Runtime de Node.js',
            description: 'Ejecuta Next.js, las herramientas de desarrollo local y las tareas de build.'
          },
          {
            title: 'Base de datos',
            description: 'Almacena usuarios, pedidos, contenido de la aplicación y otros datos de negocio.'
          },
          {
            title: 'Redis',
            description: 'Admite caché, sesiones, colas y patrones de limitación de velocidad.'
          },
          {
            title: 'HTTPS y dominio personalizado',
            description:
              'Proporciona un origen local similar a producción para cookies, OAuth y callbacks.'
          },
          {
            title: 'Correo y almacenamiento',
            description:
              'Cubre correo transaccional, subida de archivos y otras dependencias reales del producto.'
          }
        ]
      }
    }
  }
}

export const solutionAboutContentByLocale: Record<
  SolutionAboutLocale,
  Record<SolutionSlug, SolutionAboutContent>
> = {
  en: {
    ...solutionAboutGroupA.en,
    ...solutionAboutGroupB.en,
    ...solutionAboutGroupC.en,
    nextjs: nextjsAboutContentByLocale.en.nextjs
  } as Record<SolutionSlug, SolutionAboutContent>,
  zh: {
    ...solutionAboutGroupA.zh,
    ...solutionAboutGroupB.zh,
    ...solutionAboutGroupC.zh,
    nextjs: nextjsAboutContentByLocale.zh.nextjs
  } as Record<SolutionSlug, SolutionAboutContent>,
  id: {
    ...solutionAboutGroupA.id,
    ...solutionAboutGroupB.id,
    ...solutionAboutGroupC.id,
    nextjs: nextjsAboutContentByLocale.id.nextjs
  } as Record<SolutionSlug, SolutionAboutContent>,
  es: {
    ...solutionAboutGroupA.es,
    ...solutionAboutGroupB.es,
    ...solutionAboutGroupC.es,
    nextjs: nextjsAboutContentByLocale.es.nextjs
  } as Record<SolutionSlug, SolutionAboutContent>
}
