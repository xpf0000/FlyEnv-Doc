export type SolutionCategory =
  | 'frameworks'
  | 'cms'
  | 'ecommerce'
  | 'erp'
  | 'crm'
  | 'developer-tools'
  | 'data-analytics'

export interface Solution {
  name: string
  slug: string
  category: SolutionCategory
  description: string
  logo: string
  stack: string[]
}

export const solutionCategoryLabels: Record<SolutionCategory, string> = {
  frameworks: 'Frameworks',
  cms: 'CMS & Websites',
  ecommerce: 'E-commerce',
  erp: 'ERP & Business Apps',
  crm: 'CRM',
  'developer-tools': 'Developer Tools',
  'data-analytics': 'Data & Analytics'
}

export const solutionCategories = [
  { value: 'all', label: 'All' },
  { value: 'frameworks', label: solutionCategoryLabels.frameworks },
  { value: 'cms', label: solutionCategoryLabels.cms },
  { value: 'ecommerce', label: solutionCategoryLabels.ecommerce },
  { value: 'erp', label: solutionCategoryLabels.erp },
  { value: 'crm', label: solutionCategoryLabels.crm },
  { value: 'developer-tools', label: solutionCategoryLabels['developer-tools'] },
  { value: 'data-analytics', label: solutionCategoryLabels['data-analytics'] }
] as const

export const solutions: Solution[] = [
  {
    name: 'Laravel',
    slug: 'laravel',
    category: 'frameworks',
    description: 'Modern PHP framework for expressive web applications.',
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg',
    stack: ['PHP', 'MySQL', 'Redis', 'Nginx']
  },
  {
    name: 'Django',
    slug: 'django',
    category: 'frameworks',
    description: 'High-level Python framework for secure, database-driven sites.',
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/django.svg',
    stack: ['Python', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'FastAPI',
    slug: 'fastapi',
    category: 'frameworks',
    description: 'Modern Python framework for building fast web APIs.',
    logo: 'https://cdn.simpleicons.org/fastapi/009688',
    stack: ['Python', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Spring Boot',
    slug: 'spring-boot',
    category: 'frameworks',
    description: 'Java framework for production-ready web services.',
    logo: 'https://cdn.simpleicons.org/springboot/6DB33F',
    stack: ['Java', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Next.js',
    slug: 'nextjs',
    category: 'frameworks',
    description: 'React framework for full-stack web applications and server rendering.',
    logo: 'https://cdn.simpleicons.org/nextdotjs/000000',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'NestJS',
    slug: 'nestjs',
    category: 'frameworks',
    description: 'TypeScript framework for structured and scalable server-side applications.',
    logo: 'https://cdn.simpleicons.org/nestjs/E0234E',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Nuxt',
    slug: 'nuxt',
    category: 'frameworks',
    description: 'Vue framework for full-stack web applications and server rendering.',
    logo: 'https://cdn.simpleicons.org/nuxt/00DC82',
    stack: ['Node.js', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'Express',
    slug: 'express',
    category: 'frameworks',
    description: 'Minimal Node.js framework for web applications and APIs.',
    logo: 'https://cdn.simpleicons.org/express/000000',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'React + Vite',
    slug: 'react-vite',
    category: 'frameworks',
    description: 'Fast React application development with the Vite build tool.',
    logo: 'https://cdn.simpleicons.org/react/61DAFB',
    stack: ['Node.js', 'Nginx']
  },
  {
    name: 'Vue 3 + Vite',
    slug: 'vue-vite',
    category: 'frameworks',
    description: 'Modern Vue application development with the Vite build tool.',
    logo: 'https://cdn.simpleicons.org/vuedotjs/4FC08D',
    stack: ['Node.js', 'Nginx']
  },
  {
    name: 'SvelteKit',
    slug: 'sveltekit',
    category: 'frameworks',
    description: 'Svelte framework for fast full-stack web applications.',
    logo: 'https://cdn.simpleicons.org/svelte/FF3E00',
    stack: ['Node.js', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'AdonisJS',
    slug: 'adonisjs',
    category: 'frameworks',
    description: 'TypeScript-first Node.js framework for full-stack web applications.',
    logo: 'https://cdn.simpleicons.org/adonisjs/5A45FF',
    stack: ['Node.js', 'MySQL', 'Redis', 'Nginx']
  },
  {
    name: 'Hono',
    slug: 'hono',
    category: 'frameworks',
    description: 'Small, fast web framework for JavaScript and TypeScript runtimes.',
    logo: 'https://cdn.simpleicons.org/hono/E36002',
    stack: ['Node.js', 'Bun', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'Flask',
    slug: 'flask',
    category: 'frameworks',
    description: 'Lightweight Python framework for web applications and APIs.',
    logo: 'https://cdn.simpleicons.org/flask/000000',
    stack: ['Python', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Quarkus',
    slug: 'quarkus',
    category: 'frameworks',
    description: 'Java framework optimized for cloud-native applications and APIs.',
    logo: 'https://cdn.simpleicons.org/quarkus/4695EB',
    stack: ['Java', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Gin',
    slug: 'gin',
    category: 'frameworks',
    description: 'High-performance Go framework for web services and APIs.',
    logo: 'https://cdn.simpleicons.org/go/00ADD8',
    stack: ['Go', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'Ruby on Rails',
    slug: 'ruby-on-rails',
    category: 'frameworks',
    description: 'Full-stack Ruby framework for database-backed web applications.',
    logo: 'https://cdn.simpleicons.org/rubyonrails/D30001',
    stack: ['Ruby', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'ASP.NET Core',
    slug: 'aspnet-core',
    category: 'frameworks',
    description: 'Cross-platform .NET framework for modern web applications and APIs.',
    logo: 'https://cdn.simpleicons.org/dotnet/512BD4',
    stack: ['.NET', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'WordPress',
    slug: 'wordpress',
    category: 'cms',
    description: "The world's most popular CMS for building websites.",
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/wordpress.svg',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'Drupal',
    slug: 'drupal',
    category: 'cms',
    description: 'Flexible open-source CMS for content-rich digital experiences.',
    logo: 'https://cdn.simpleicons.org/drupal/0678BE',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'Ghost',
    slug: 'ghost',
    category: 'cms',
    description: 'Independent publishing platform for creators and teams.',
    logo: 'https://cdn.simpleicons.org/ghost/15171A',
    stack: ['Node.js', 'MySQL', 'Nginx']
  },
  {
    name: 'Nextcloud',
    slug: 'nextcloud',
    category: 'cms',
    description: 'Self-hosted platform for file sharing and collaboration.',
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/nextcloud.svg',
    stack: ['PHP', 'MySQL', 'Redis', 'Nginx']
  },
  {
    name: 'Payload CMS',
    slug: 'payload',
    category: 'cms',
    description: 'TypeScript headless CMS and application framework.',
    logo: 'https://cdn.simpleicons.org/payloadcms/000000',
    stack: ['Node.js', 'MongoDB', 'Redis', 'Nginx']
  },
  {
    name: 'Magento',
    slug: 'magento',
    category: 'ecommerce',
    description: 'Powerful e-commerce platform for online stores.',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/magento/magento-original.svg',
    stack: ['PHP', 'MySQL', 'Redis', 'Nginx']
  },
  {
    name: 'PrestaShop',
    slug: 'prestashop',
    category: 'ecommerce',
    description: 'Open-source e-commerce platform for online merchants.',
    logo: 'https://cdn.simpleicons.org/prestashop/DF0067',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'OpenCart',
    slug: 'opencart',
    category: 'ecommerce',
    description: 'Simple online store platform for selling products.',
    logo: 'https://raw.githubusercontent.com/opencart/opencart/master/upload/image/catalog/opencart-logo.png',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'Medusa',
    slug: 'medusa',
    category: 'ecommerce',
    description: 'Composable commerce platform built with Node.js and TypeScript.',
    logo: 'https://cdn.simpleicons.org/medusa/000000',
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'Nginx']
  },
  {
    name: 'ERPNext',
    slug: 'erpnext',
    category: 'erp',
    description: 'Open-source ERP for managing day-to-day business operations.',
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/erpnext.svg',
    stack: ['Python', 'MariaDB', 'Redis', 'Nginx']
  },
  {
    name: 'Odoo',
    slug: 'odoo',
    category: 'erp',
    description: 'Open-source suite of business applications.',
    logo: 'https://cdn.simpleicons.org/odoo/714B67',
    stack: ['Python', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'SuiteCRM',
    slug: 'suitecrm',
    category: 'crm',
    description: 'Open-source customer relationship management platform.',
    logo: 'https://raw.githubusercontent.com/salesagility/SuiteCRM/develop/include/images/suite_logo.png',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'EspoCRM',
    slug: 'espocrm',
    category: 'crm',
    description: 'Flexible CRM for sales, marketing, and support teams.',
    logo: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/espocrm.svg',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'Gitea',
    slug: 'gitea',
    category: 'developer-tools',
    description: 'Self-hosted Git service for teams and individual developers.',
    logo: 'https://oss.macphpstudy.com/image/assets/demo-logos/gitea.svg',
    stack: ['Go', 'MySQL', 'Nginx']
  },
  {
    name: 'Strapi',
    slug: 'strapi',
    category: 'developer-tools',
    description: 'Open-source headless CMS for content APIs.',
    logo: 'https://cdn.simpleicons.org/strapi/4945FF',
    stack: ['Node.js', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Directus',
    slug: 'directus',
    category: 'developer-tools',
    description: 'Data platform for turning SQL databases into APIs.',
    logo: 'https://cdn.simpleicons.org/directus/6644FF',
    stack: ['Node.js', 'PostgreSQL', 'Redis']
  },
  {
    name: 'Node-RED',
    slug: 'node-red',
    category: 'developer-tools',
    description: 'Flow-based programming tool for event-driven integrations and automation.',
    logo: 'https://cdn.simpleicons.org/nodered/8F0000',
    stack: ['Node.js', 'Nginx']
  },
  {
    name: 'Keycloak',
    slug: 'keycloak',
    category: 'developer-tools',
    description: 'Open-source identity and access management for applications and APIs.',
    logo: 'https://cdn.simpleicons.org/keycloak/4D4D4D',
    stack: ['Java', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'PocketBase',
    slug: 'pocketbase',
    category: 'developer-tools',
    description: 'Backend platform with an embedded database, APIs, auth, and file storage.',
    logo: 'https://cdn.simpleicons.org/pocketbase/B8DBE4',
    stack: ['Go', 'SQLite', 'Nginx']
  },
  {
    name: 'Matomo',
    slug: 'matomo',
    category: 'data-analytics',
    description: 'Open-source web analytics platform with data ownership.',
    logo: 'https://cdn.simpleicons.org/matomo/3152A0',
    stack: ['PHP', 'MySQL', 'Nginx']
  },
  {
    name: 'Metabase',
    slug: 'metabase',
    category: 'data-analytics',
    description: 'Open-source business intelligence and data exploration tool.',
    logo: 'https://cdn.simpleicons.org/metabase/509EE3',
    stack: ['Java', 'PostgreSQL', 'Nginx']
  },
  {
    name: 'Apache Superset',
    slug: 'apache-superset',
    category: 'data-analytics',
    description: 'Open-source data exploration and business intelligence platform.',
    logo: 'https://cdn.simpleicons.org/apache/0D6EFD',
    stack: ['Python', 'PostgreSQL', 'Redis', 'Nginx']
  }
]
