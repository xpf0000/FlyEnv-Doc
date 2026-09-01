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
    logo: '/assets/demo-logos/laravel.svg',
    stack: ['PHP', 'MySQL', 'Redis', 'Nginx']
  },
  {
    name: 'Django',
    slug: 'django',
    category: 'frameworks',
    description: 'High-level Python framework for secure, database-driven sites.',
    logo: '/assets/demo-logos/django.svg',
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
    name: 'WordPress',
    slug: 'wordpress',
    category: 'cms',
    description: "The world's most popular CMS for building websites.",
    logo: '/assets/demo-logos/wordpress.svg',
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
    logo: '/assets/demo-logos/nextcloud.svg',
    stack: ['PHP', 'MySQL', 'Redis', 'Nginx']
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
    name: 'ERPNext',
    slug: 'erpnext',
    category: 'erp',
    description: 'Open-source ERP for managing day-to-day business operations.',
    logo: '/assets/demo-logos/erpnext.svg',
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
    logo: '/assets/demo-logos/gitea.svg',
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
  }
]
