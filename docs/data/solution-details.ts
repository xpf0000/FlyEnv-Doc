export type SolutionSlug =
  | 'laravel'
  | 'django'
  | 'fastapi'
  | 'spring-boot'
  | 'wordpress'
  | 'drupal'
  | 'ghost'
  | 'nextcloud'
  | 'magento'
  | 'prestashop'
  | 'opencart'
  | 'erpnext'
  | 'odoo'
  | 'suitecrm'
  | 'espocrm'
  | 'gitea'
  | 'strapi'
  | 'directus'
  | 'matomo'
  | 'metabase'

interface ProjectResource {
  label: string
  href: string
}

interface StackItem {
  component: string
  role: string
}

interface DetailItem {
  title: string
  description: string
}

export interface SolutionDetail {
  summary: string
  overview: string
  resources: ProjectResource[]
  stack: StackItem[]
  help: DetailItem[]
  setupSteps: string[]
  relatedSlugs: SolutionSlug[]
  demoId?: string
  guide?: {
    label: string
    href: string
  }
}

export const solutionDetails: Record<SolutionSlug, SolutionDetail> = {
  laravel: {
    summary:
      'Laravel projects commonly combine PHP, a database, a web server, and optional services such as Redis. FlyEnv manages that local environment around the application on Windows, macOS, and Linux.',
    overview: 'Laravel is a PHP framework for building web applications and APIs.',
    resources: [
      { label: 'Official Website', href: 'https://laravel.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/laravel/laravel' },
      { label: 'Official Documentation', href: 'https://laravel.com/docs' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the Laravel application.' },
      { component: 'Composer', role: 'Installs PHP dependencies.' },
      { component: 'MySQL / PostgreSQL', role: 'Stores application data.' },
      { component: 'Redis', role: 'May support cache, sessions, or queues.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local project.' },
      { component: 'Node.js', role: 'May build frontend assets.' }
    ],
    help: [
      { title: 'Match PHP versions', description: 'Keep each project on the PHP version it targets.' },
      { title: 'Choose the database', description: 'Run MySQL or PostgreSQL alongside the application.' },
      { title: 'Add Redis when needed', description: 'Keep cache, session, or queue services close to the project.' },
      { title: 'Use a local domain', description: 'Serve the project through a readable address and local HTTPS.' }
    ],
    setupSteps: [
      'Follow the Laravel documentation for project installation and supported versions.',
      'Select the PHP version required by the project.',
      'Start MySQL or PostgreSQL when the application uses a database.',
      'Add Redis and frontend tooling when the project configuration needs them.',
      'Add the project, local domain, web server, and HTTPS configuration in FlyEnv.',
      'Group related services when starting the full local stack together is useful.'
    ],
    relatedSlugs: ['wordpress', 'magento', 'drupal'],
    guide: { label: 'Read the Laravel guide', href: '/guide/run-laravel-use-flyenv' }
  },
  django: {
    summary:
      'Django projects often pair Python with a database and, depending on the application, services such as Redis and a reverse proxy. FlyEnv keeps those local services manageable around the Django project.',
    overview: 'Django is a high-level Python web framework for database-driven web applications.',
    resources: [
      { label: 'Official Website', href: 'https://www.djangoproject.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/django/django' },
      { label: 'Official Documentation', href: 'https://docs.djangoproject.com/' }
    ],
    stack: [
      { component: 'Python', role: 'Runs the Django project.' },
      { component: 'PostgreSQL / MySQL', role: 'Stores application data when configured.' },
      { component: 'Redis', role: 'May support caching, channels, or background work.' },
      { component: 'Nginx / Apache / Caddy', role: 'May serve a local domain.' },
      { component: 'Node.js', role: 'May build project frontend assets.' }
    ],
    help: [
      { title: 'Select Python per project', description: 'Keep projects that target different Python versions separate.' },
      { title: 'Run the chosen database', description: 'Use PostgreSQL or MySQL when the Django settings require it.' },
      { title: 'Keep Redis optional', description: 'Start Redis only for projects that use its cache or async features.' },
      { title: 'Configure a local address', description: 'Use a web server, local domain, and HTTPS when the workflow needs them.' }
    ],
    setupSteps: [
      'Install and configure the Django project according to the official Django documentation.',
      'Choose the Python runtime expected by the project.',
      'Start the database configured in the project settings.',
      'Start Redis only when the project uses it.',
      'Configure a local web server, domain, and HTTPS when appropriate.',
      'Use a Startup Group to keep the project services together when useful.'
    ],
    relatedSlugs: ['fastapi', 'erpnext', 'odoo']
  },
  fastapi: {
    summary:
      'FastAPI applications typically need a Python runtime plus the database and supporting services chosen by the API. FlyEnv helps manage those services around a local FastAPI project.',
    overview: 'FastAPI is a Python framework for building APIs with modern type hints.',
    resources: [
      { label: 'Official Website', href: 'https://fastapi.tiangolo.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/fastapi/fastapi' },
      { label: 'Official Documentation', href: 'https://fastapi.tiangolo.com/' }
    ],
    stack: [
      { component: 'Python', role: 'Runs the API application.' },
      { component: 'PostgreSQL / MySQL', role: 'Stores API data when configured.' },
      { component: 'Redis', role: 'May support caching, queues, or rate limiting.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local API domain.' }
    ],
    help: [
      { title: 'Manage Python versions', description: 'Match the runtime version to the project requirements.' },
      { title: 'Run API data services', description: 'Start the database selected by the application.' },
      { title: 'Add Redis by configuration', description: 'Keep Redis available for services that use it.' },
      { title: 'Serve local endpoints', description: 'Use a local domain and HTTPS for browser or client integration.' }
    ],
    setupSteps: [
      'Use the FastAPI documentation for application installation and dependency setup.',
      'Select the Python runtime required by the application.',
      'Start the configured database service.',
      'Start Redis or another supporting service only when the project uses it.',
      'Configure a local domain, reverse proxy, and HTTPS when the API needs them.',
      'Keep the API and supporting services in a Startup Group when helpful.'
    ],
    relatedSlugs: ['django', 'strapi', 'directus']
  },
  'spring-boot': {
    summary:
      'Spring Boot services commonly run with a Java runtime and may connect to a database, Redis, and a local reverse proxy. FlyEnv manages those environment services alongside the application.',
    overview: 'Spring Boot is a Java framework for building stand-alone, production-ready services.',
    resources: [
      { label: 'Official Website', href: 'https://spring.io/projects/spring-boot' },
      { label: 'GitHub Repository', href: 'https://github.com/spring-projects/spring-boot' },
      { label: 'Official Documentation', href: 'https://docs.spring.io/spring-boot/' }
    ],
    stack: [
      { component: 'Java', role: 'Runs the Spring Boot application.' },
      { component: 'PostgreSQL / MySQL', role: 'May store service data.' },
      { component: 'Redis', role: 'May support caching or messaging patterns.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local service domain.' }
    ],
    help: [
      { title: 'Select the Java runtime', description: 'Use the JDK version required by the service.' },
      { title: 'Keep data services local', description: 'Run the project database without mixing it into other stacks.' },
      { title: 'Start Redis when configured', description: 'Keep cache and supporting services available only where needed.' },
      { title: 'Expose a local service URL', description: 'Configure domains and HTTPS for integration testing when useful.' }
    ],
    setupSteps: [
      'Follow the project build documentation for its Gradle or Maven workflow.',
      'Select the Java runtime required by the service.',
      'Start the database selected in the Spring configuration.',
      'Start Redis only when the application configuration uses it.',
      'Configure a local domain and reverse proxy for service testing when needed.',
      'Group the service and its dependencies for repeatable local starts.'
    ],
    relatedSlugs: ['metabase', 'fastapi', 'directus']
  },
  wordpress: {
    summary:
      'WordPress commonly runs on PHP with MySQL or MariaDB and a local web server. FlyEnv manages that familiar CMS environment and optional services such as Redis around each site.',
    overview: 'WordPress is an open-source content management system for building websites.',
    resources: [
      { label: 'Official Website', href: 'https://wordpress.org/' },
      { label: 'GitHub Repository', href: 'https://github.com/WordPress/WordPress' },
      { label: 'Official Documentation', href: 'https://wordpress.org/documentation/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs WordPress and PHP extensions.' },
      { component: 'MySQL / MariaDB', role: 'Stores site content and settings.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local website.' },
      { component: 'Redis', role: 'May support object caching when configured.' },
      { component: 'Node.js', role: 'May build custom theme or block assets.' }
    ],
    help: [
      { title: 'Match site PHP versions', description: 'Keep plugin and theme compatibility tied to the site runtime.' },
      { title: 'Run a site database', description: 'Manage MySQL or MariaDB for each local WordPress site.' },
      { title: 'Configure local domains', description: 'Use readable site addresses and local HTTPS.' },
      { title: 'Add services selectively', description: 'Keep Redis and frontend tooling available only for sites that use them.' }
    ],
    setupSteps: [
      'Install WordPress and its plugins according to the official documentation.',
      'Select the PHP version required by the site and its extensions.',
      'Start MySQL or MariaDB for the site database.',
      'Add Redis or Node.js only when the site configuration needs them.',
      'Add the site to FlyEnv and configure its local domain, web server, and HTTPS.',
      'Use a Startup Group for sites that need several services together.'
    ],
    relatedSlugs: ['drupal', 'prestashop', 'laravel']
  },
  drupal: {
    summary:
      'Drupal projects commonly pair PHP with a database, a web server, and project-specific dependency tooling. FlyEnv manages the local runtimes and services around that Drupal setup.',
    overview: 'Drupal is an open-source CMS for content-rich and highly configurable websites.',
    resources: [
      { label: 'Official Website', href: 'https://www.drupal.org/' },
      { label: 'GitHub Repository', href: 'https://github.com/drupal/drupal' },
      { label: 'Official Documentation', href: 'https://www.drupal.org/docs' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the Drupal application.' },
      { component: 'Composer', role: 'May manage project dependencies.' },
      { component: 'MySQL / MariaDB / PostgreSQL', role: 'Stores site content and settings.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local website.' },
      { component: 'Redis', role: 'May support caching when configured.' }
    ],
    help: [
      { title: 'Use the project PHP version', description: 'Match the runtime to the Drupal release and contributed modules.' },
      { title: 'Choose the configured database', description: 'Run the database type selected by the Drupal project.' },
      { title: 'Use readable site URLs', description: 'Set up a local domain and HTTPS for browser testing.' },
      { title: 'Keep services together', description: 'Start the site, database, cache, and web server as one local group.' }
    ],
    setupSteps: [
      'Follow the Drupal documentation for project installation and version requirements.',
      'Select the PHP runtime required by the project.',
      'Start the database chosen for the Drupal site.',
      'Start Redis only when the project configuration uses it.',
      'Configure a local domain, web server, and HTTPS in FlyEnv.',
      'Save the related services in a Startup Group when useful.'
    ],
    relatedSlugs: ['wordpress', 'nextcloud', 'laravel']
  },
  ghost: {
    summary:
      'Ghost publishing sites typically use Node.js and may use MySQL with a web server or reverse proxy. FlyEnv manages the local runtime and supporting services around a Ghost project.',
    overview: 'Ghost is an open-source publishing platform for creators and teams.',
    resources: [
      { label: 'Official Website', href: 'https://ghost.org/' },
      { label: 'GitHub Repository', href: 'https://github.com/TryGhost/Ghost' },
      { label: 'Official Documentation', href: 'https://ghost.org/docs/' }
    ],
    stack: [
      { component: 'Node.js', role: 'Runs Ghost and its local tooling.' },
      { component: 'MySQL', role: 'May store site data depending on the chosen configuration.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local publishing domain.' }
    ],
    help: [
      { title: 'Manage Node.js versions', description: 'Match the local runtime to the Ghost release.' },
      { title: 'Run MySQL when configured', description: 'Keep database-backed deployments local and isolated.' },
      { title: 'Use a local publishing URL', description: 'Configure a domain and HTTPS for theme or integration testing.' },
      { title: 'Keep site services grouped', description: 'Start the Ghost site and selected services together.' }
    ],
    setupSteps: [
      'Use the official Ghost documentation for installation and version requirements.',
      'Select the Node.js runtime supported by the Ghost version.',
      'Start MySQL only when the selected Ghost configuration needs it.',
      'Configure a local domain and reverse proxy when the site workflow uses one.',
      'Enable local HTTPS when browser integrations need a secure origin.',
      'Group the runtime and supporting services for convenient local starts.'
    ],
    relatedSlugs: ['wordpress', 'strapi', 'directus']
  },
  nextcloud: {
    summary:
      'Nextcloud deployments commonly use PHP, a database, a web server, and optional Redis. FlyEnv helps keep those local collaboration services coordinated around the Nextcloud project.',
    overview: 'Nextcloud is a self-hosted platform for file sharing and collaboration.',
    resources: [
      { label: 'Official Website', href: 'https://nextcloud.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/nextcloud/server' },
      { label: 'Official Documentation', href: 'https://docs.nextcloud.com/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the Nextcloud server.' },
      { component: 'MySQL / MariaDB / PostgreSQL', role: 'Stores file and application metadata.' },
      { component: 'Redis', role: 'May support caching and locking.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local collaboration site.' }
    ],
    help: [
      { title: 'Match the PHP release', description: 'Use the PHP version supported by the selected Nextcloud release.' },
      { title: 'Run the project database', description: 'Keep database services alongside the local server.' },
      { title: 'Add Redis when configured', description: 'Run cache and locking support when the deployment uses it.' },
      { title: 'Use secure local URLs', description: 'Configure a local domain and HTTPS for browser clients.' }
    ],
    setupSteps: [
      'Follow the Nextcloud documentation for installation and release-specific requirements.',
      'Select the supported PHP runtime.',
      'Start the database selected for the Nextcloud installation.',
      'Start Redis when the configuration uses it.',
      'Configure a local web server, domain, and HTTPS in FlyEnv.',
      'Group the project services for repeatable local starts.'
    ],
    relatedSlugs: ['drupal', 'gitea', 'wordpress'],
    demoId: 'nextcloud-local-project'
  },
  magento: {
    summary:
      'Magento projects typically combine PHP, a database, search, cache, and a web server. FlyEnv helps manage that version-sensitive local stack around the Magento project.',
    overview: 'Magento Open Source is an open-source e-commerce platform for online stores and commerce applications.',
    resources: [
      { label: 'Official Website', href: 'https://business.adobe.com/products/magento/magento-commerce.html' },
      { label: 'GitHub Repository', href: 'https://github.com/magento/magento2' },
      { label: 'Magento Open Source Documentation', href: 'https://experienceleague.adobe.com/en/docs/commerce-operations/installation-guide/overview' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the Magento application.' },
      { component: 'Composer', role: 'Installs Magento and PHP dependencies.' },
      { component: 'MySQL / MariaDB', role: 'Stores store and catalog data.' },
      { component: 'OpenSearch / Elasticsearch', role: 'Supports catalog search depending on the Magento release.' },
      { component: 'Redis', role: 'May support cache and sessions.' },
      { component: 'Nginx / Apache', role: 'Serves the local store.' }
    ],
    help: [
      { title: 'Match versioned PHP support', description: 'Keep the PHP runtime aligned with the Magento release.' },
      { title: 'Run the store database', description: 'Manage MySQL or MariaDB next to the application.' },
      { title: 'Coordinate search services', description: 'Use the search service supported by the specific Magento release.' },
      { title: 'Keep cache close by', description: 'Start Redis with the project when the configuration uses it.' }
    ],
    setupSteps: [
      'Use the official Magento documentation for version-specific installation and requirements.',
      'Select the PHP version required by the Magento release.',
      'Start MySQL or MariaDB for the store data.',
      'Configure the supported search service and Redis when the project needs them.',
      'Add the project to FlyEnv with a local domain, web server, and HTTPS.',
      'Save the multi-service environment as a Startup Group when useful.'
    ],
    relatedSlugs: ['prestashop', 'opencart', 'laravel']
  },
  prestashop: {
    summary:
      'PrestaShop projects commonly use PHP, MySQL or MariaDB, and a local web server. FlyEnv manages those services around an online store and optional theme-development tooling.',
    overview: 'PrestaShop is an open-source e-commerce platform for online merchants.',
    resources: [
      { label: 'Official Website', href: 'https://prestashop.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/PrestaShop/PrestaShop' },
      { label: 'Official Documentation', href: 'https://devdocs.prestashop-project.org/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the PrestaShop application.' },
      { component: 'MySQL / MariaDB', role: 'Stores catalog and store data.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local store.' },
      { component: 'Node.js', role: 'May support theme or asset development.' }
    ],
    help: [
      { title: 'Select the project PHP version', description: 'Match the runtime to the PrestaShop release.' },
      { title: 'Run the store database', description: 'Keep MySQL or MariaDB local to the project.' },
      { title: 'Use a local store address', description: 'Configure a domain and HTTPS for browser testing.' },
      { title: 'Add theme tooling when needed', description: 'Keep Node.js available for workflows that use it.' }
    ],
    setupSteps: [
      'Install PrestaShop according to the official documentation.',
      'Select the PHP version supported by the project release.',
      'Start MySQL or MariaDB for the store database.',
      'Add Node.js only for theme or asset workflows that need it.',
      'Configure the local domain, web server, and HTTPS in FlyEnv.',
      'Group the store services to start them together when useful.'
    ],
    relatedSlugs: ['magento', 'opencart', 'wordpress']
  },
  opencart: {
    summary:
      'OpenCart stores typically need PHP, a MySQL-compatible database, and a local web server. FlyEnv keeps that commerce environment organized around the project.',
    overview: 'OpenCart is an open-source e-commerce platform for building online stores.',
    resources: [
      { label: 'Official Website', href: 'https://www.opencart.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/opencart/opencart' },
      { label: 'Official Documentation', href: 'https://docs.opencart.com/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the OpenCart application.' },
      { component: 'MySQL / MariaDB', role: 'Stores catalog, orders, and settings.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local store.' },
      { component: 'Node.js', role: 'May support custom frontend workflows.' }
    ],
    help: [
      { title: 'Match PHP versions', description: 'Keep extensions and the core project on the expected runtime.' },
      { title: 'Manage a local database', description: 'Run MySQL or MariaDB with the store.' },
      { title: 'Configure a store domain', description: 'Use a readable local URL and HTTPS during browser testing.' },
      { title: 'Keep the stack contained', description: 'Start the store services as a single local group.' }
    ],
    setupSteps: [
      'Follow the OpenCart documentation for installation and supported versions.',
      'Select the PHP runtime required by the OpenCart project.',
      'Start MySQL or MariaDB for the store database.',
      'Add Node.js only when the project frontend workflow uses it.',
      'Configure a local domain, web server, and HTTPS in FlyEnv.',
      'Save the project services in a Startup Group when useful.'
    ],
    relatedSlugs: ['magento', 'prestashop', 'wordpress']
  },
  erpnext: {
    summary:
      'ERPNext environments can combine Python, MariaDB, Redis, a web server, and frontend tooling. FlyEnv helps manage these related local services around the ERPNext project.',
    overview: 'ERPNext is an open-source ERP for managing business operations.',
    resources: [
      { label: 'Official Website', href: 'https://erpnext.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/frappe/erpnext' },
      { label: 'Official Documentation', href: 'https://docs.frappe.io/erpnext' }
    ],
    stack: [
      { component: 'Python', role: 'Runs ERPNext application services.' },
      { component: 'MariaDB', role: 'Stores ERP application data.' },
      { component: 'Redis', role: 'Supports cache, queues, and real-time services.' },
      { component: 'Nginx', role: 'May serve the local application.' },
      { component: 'Node.js', role: 'May support asset build workflows.' }
    ],
    help: [
      { title: 'Manage the Python runtime', description: 'Keep the project runtime available alongside its services.' },
      { title: 'Run MariaDB and Redis', description: 'Keep core data and queue services together locally.' },
      { title: 'Use a local application URL', description: 'Configure domains and HTTPS when browser testing needs them.' },
      { title: 'Start the full stack together', description: 'Use a Startup Group for the multi-service environment.' }
    ],
    setupSteps: [
      'Follow ERPNext documentation for the project installation and bench workflow.',
      'Select the Python runtime required by the project release.',
      'Start MariaDB and Redis for the services the project uses.',
      'Keep Node.js available when the selected build workflow needs it.',
      'Configure the local web server, domain, and HTTPS in FlyEnv.',
      'Save the application services in a Startup Group for repeatable starts.'
    ],
    relatedSlugs: ['odoo', 'django', 'suitecrm'],
    demoId: 'erpnext-local-project'
  },
  odoo: {
    summary:
      'Odoo projects typically use Python and PostgreSQL, with a web server or proxy when a local domain is required. FlyEnv helps manage these local environment services around the application.',
    overview: 'Odoo is an open-source suite of business applications.',
    resources: [
      { label: 'Official Website', href: 'https://www.odoo.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/odoo/odoo' },
      { label: 'Official Documentation', href: 'https://www.odoo.com/documentation' }
    ],
    stack: [
      { component: 'Python', role: 'Runs the Odoo application.' },
      { component: 'PostgreSQL', role: 'Stores application and business data.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local Odoo domain.' }
    ],
    help: [
      { title: 'Choose Python per release', description: 'Match the local runtime to the selected Odoo version.' },
      { title: 'Run PostgreSQL locally', description: 'Keep the project database next to its application environment.' },
      { title: 'Configure browser access', description: 'Use a local domain and HTTPS where integration testing needs them.' },
      { title: 'Keep project services ready', description: 'Start the application dependencies together with a Startup Group.' }
    ],
    setupSteps: [
      'Use official Odoo documentation for installation and release-specific instructions.',
      'Select the Python runtime required by the Odoo release.',
      'Start PostgreSQL for the Odoo database.',
      'Configure a local reverse proxy only when the project workflow uses one.',
      'Add a local domain and HTTPS for browser-based testing when needed.',
      'Save the project services in a Startup Group when convenient.'
    ],
    relatedSlugs: ['erpnext', 'django', 'suitecrm']
  },
  suitecrm: {
    summary:
      'SuiteCRM projects commonly use PHP, a MySQL-compatible database, and a local web server. FlyEnv helps keep those CRM environment services aligned with the project.',
    overview: 'SuiteCRM is an open-source customer relationship management platform.',
    resources: [
      { label: 'Official Website', href: 'https://suitecrm.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/salesagility/SuiteCRM' },
      { label: 'Official Documentation', href: 'https://docs.suitecrm.com/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the SuiteCRM application.' },
      { component: 'MySQL / MariaDB', role: 'Stores CRM data and configuration.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local CRM site.' },
      { component: 'Node.js', role: 'May support project asset workflows.' }
    ],
    help: [
      { title: 'Match the PHP runtime', description: 'Use the PHP version required by the SuiteCRM release.' },
      { title: 'Keep CRM data local', description: 'Run MySQL or MariaDB with the project.' },
      { title: 'Use a readable local URL', description: 'Configure a domain and HTTPS for browser testing.' },
      { title: 'Start related services together', description: 'Save the CRM stack in a Startup Group when useful.' }
    ],
    setupSteps: [
      'Follow SuiteCRM documentation for installation and supported version requirements.',
      'Select the PHP version required by the project.',
      'Start MySQL or MariaDB for the CRM database.',
      'Add Node.js only if the selected project workflow needs it.',
      'Configure the local domain, web server, and HTTPS in FlyEnv.',
      'Use a Startup Group to keep the CRM services together.'
    ],
    relatedSlugs: ['espocrm', 'laravel', 'erpnext']
  },
  espocrm: {
    summary:
      'EspoCRM typically runs with PHP, a MySQL-compatible database, and a web server. FlyEnv helps manage that local CRM environment and any project-specific supporting services.',
    overview: 'EspoCRM is an open-source CRM platform for sales, marketing, and support teams.',
    resources: [
      { label: 'Official Website', href: 'https://www.espocrm.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/espocrm/espocrm' },
      { label: 'Official Documentation', href: 'https://docs.espocrm.com/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the EspoCRM application.' },
      { component: 'MySQL / MariaDB', role: 'Stores CRM records and settings.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local CRM site.' },
      { component: 'Redis', role: 'May support project-specific caching or jobs.' }
    ],
    help: [
      { title: 'Select the PHP version', description: 'Match the runtime to the EspoCRM release and extensions.' },
      { title: 'Run the CRM database', description: 'Keep MySQL or MariaDB alongside the project.' },
      { title: 'Add Redis when used', description: 'Start supporting cache services only for projects that configure them.' },
      { title: 'Configure a local CRM URL', description: 'Use local domains and HTTPS for browser-based workflows.' }
    ],
    setupSteps: [
      'Use the EspoCRM documentation for project installation and supported versions.',
      'Select the PHP runtime required by the project.',
      'Start MySQL or MariaDB for the CRM database.',
      'Start Redis only if the project configuration uses it.',
      'Configure the web server, local domain, and HTTPS in FlyEnv.',
      'Group related services when repeatable local starts are useful.'
    ],
    relatedSlugs: ['suitecrm', 'laravel', 'wordpress']
  },
  gitea: {
    summary:
      'Gitea can use a local database and a reverse proxy or web server for browser access. FlyEnv helps manage those services and Go tooling when a project builds Gitea from source.',
    overview: 'Gitea is an open-source self-hosted Git service for teams and individual developers.',
    resources: [
      { label: 'Official Website', href: 'https://about.gitea.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/go-gitea/gitea' },
      { label: 'Official Documentation', href: 'https://docs.gitea.com/' }
    ],
    stack: [
      { component: 'Gitea service', role: 'Runs the self-hosted Git application.' },
      { component: 'MySQL / MariaDB / PostgreSQL', role: 'May store application data when SQLite is not used.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local Git service domain.' },
      { component: 'Go', role: 'May be needed when building from source.' }
    ],
    help: [
      { title: 'Manage data services', description: 'Run the database selected by the Gitea configuration.' },
      { title: 'Use Go when building source', description: 'Keep Go tooling available for source-based workflows.' },
      { title: 'Configure secure local access', description: 'Use a local domain and HTTPS for web and Git clients.' },
      { title: 'Keep the service stack grouped', description: 'Start Gitea and its selected services together.' }
    ],
    setupSteps: [
      'Use the official Gitea documentation for installation and server configuration.',
      'Start a database only when the Gitea configuration does not use SQLite.',
      'Select Go when the workflow builds Gitea from source.',
      'Configure a local reverse proxy and domain when browser access needs one.',
      'Enable local HTTPS when Git clients or web integrations need a secure origin.',
      'Save the service and its dependencies in a Startup Group when useful.'
    ],
    relatedSlugs: ['nextcloud', 'strapi', 'directus'],
    demoId: 'gitea-local-project'
  },
  strapi: {
    summary:
      'Strapi projects typically use Node.js with a SQL database and may add Redis or a reverse proxy. FlyEnv manages those local services around the headless CMS project.',
    overview: 'Strapi is an open-source headless CMS for building content APIs.',
    resources: [
      { label: 'Official Website', href: 'https://strapi.io/' },
      { label: 'GitHub Repository', href: 'https://github.com/strapi/strapi' },
      { label: 'Official Documentation', href: 'https://docs.strapi.io/' }
    ],
    stack: [
      { component: 'Node.js', role: 'Runs the Strapi application.' },
      { component: 'PostgreSQL / MySQL', role: 'Stores content and application data.' },
      { component: 'Redis', role: 'May support project-specific cache or queue services.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local API domain.' }
    ],
    help: [
      { title: 'Manage Node.js per project', description: 'Keep the local runtime aligned with the Strapi release.' },
      { title: 'Run the selected database', description: 'Use PostgreSQL or MySQL according to the project configuration.' },
      { title: 'Add Redis selectively', description: 'Start supporting services only when the project uses them.' },
      { title: 'Expose local content APIs', description: 'Use domains and HTTPS when frontend clients need a secure local URL.' }
    ],
    setupSteps: [
      'Follow Strapi documentation for project creation, installation, and version support.',
      'Select the Node.js runtime required by the project.',
      'Start the database chosen by the Strapi configuration.',
      'Start Redis only when the project adds a service that uses it.',
      'Configure a local API domain, reverse proxy, and HTTPS when needed.',
      'Use a Startup Group to keep the CMS and its services together.'
    ],
    relatedSlugs: ['directus', 'fastapi', 'ghost']
  },
  directus: {
    summary:
      'Directus projects commonly run on Node.js with a SQL database and may use Redis or a local proxy. FlyEnv helps manage the services that support a local Directus data platform.',
    overview: 'Directus is a data platform that turns SQL databases into APIs and applications.',
    resources: [
      { label: 'Official Website', href: 'https://directus.io/' },
      { label: 'GitHub Repository', href: 'https://github.com/directus/directus' },
      { label: 'Official Documentation', href: 'https://docs.directus.io/' }
    ],
    stack: [
      { component: 'Node.js', role: 'Runs the Directus service.' },
      { component: 'PostgreSQL / MySQL', role: 'Provides the data source and application storage.' },
      { component: 'Redis', role: 'May support caching or other configured services.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local Directus domain.' }
    ],
    help: [
      { title: 'Match Node.js versions', description: 'Use the runtime supported by the Directus project.' },
      { title: 'Keep the data source local', description: 'Run the database that the project uses as its source of truth.' },
      { title: 'Add Redis by configuration', description: 'Start cache services only when the project requires them.' },
      { title: 'Use secure local URLs', description: 'Configure a domain and HTTPS for browser or API client testing.' }
    ],
    setupSteps: [
      'Follow Directus documentation for installation and project configuration.',
      'Select the Node.js runtime required by the project.',
      'Start the SQL database selected for the Directus project.',
      'Start Redis only when the configuration uses it.',
      'Configure a local domain, proxy, and HTTPS when clients need one.',
      'Group the data platform services for convenient local starts.'
    ],
    relatedSlugs: ['strapi', 'fastapi', 'metabase']
  },
  matomo: {
    summary:
      'Matomo commonly uses PHP, a MySQL-compatible database, and a web server for local analytics development. FlyEnv manages those local services around the Matomo project.',
    overview: 'Matomo is an open-source web analytics platform focused on data ownership.',
    resources: [
      { label: 'Official Website', href: 'https://matomo.org/' },
      { label: 'GitHub Repository', href: 'https://github.com/matomo-org/matomo' },
      { label: 'Official Documentation', href: 'https://matomo.org/docs/' }
    ],
    stack: [
      { component: 'PHP', role: 'Runs the Matomo application.' },
      { component: 'MySQL / MariaDB', role: 'Stores analytics configuration and data.' },
      { component: 'Nginx / Apache / Caddy', role: 'Serves the local analytics site.' },
      { component: 'Redis', role: 'May support project-specific cache integrations.' }
    ],
    help: [
      { title: 'Select the PHP runtime', description: 'Match the runtime to the Matomo release.' },
      { title: 'Run analytics storage locally', description: 'Manage MySQL or MariaDB beside the application.' },
      { title: 'Configure a local analytics URL', description: 'Use a local domain and HTTPS for browser-based testing.' },
      { title: 'Add optional services only when used', description: 'Keep Redis available for installations that configure it.' }
    ],
    setupSteps: [
      'Use the Matomo documentation for installation and current requirements.',
      'Select the PHP version supported by the Matomo release.',
      'Start MySQL or MariaDB for the analytics database.',
      'Start Redis only when the selected installation uses it.',
      'Configure a local domain, web server, and HTTPS in FlyEnv.',
      'Keep the project services in a Startup Group when useful.'
    ],
    relatedSlugs: ['metabase', 'wordpress', 'laravel']
  },
  metabase: {
    summary:
      'Metabase uses a Java runtime and a database for its application metadata, with a proxy when a local domain is useful. FlyEnv manages those local environment services around Metabase.',
    overview: 'Metabase is an open-source business intelligence and data exploration tool.',
    resources: [
      { label: 'Official Website', href: 'https://www.metabase.com/' },
      { label: 'GitHub Repository', href: 'https://github.com/metabase/metabase' },
      { label: 'Official Documentation', href: 'https://www.metabase.com/docs/' }
    ],
    stack: [
      { component: 'Java', role: 'Runs the Metabase application.' },
      { component: 'PostgreSQL / MySQL', role: 'May store application metadata.' },
      { component: 'Nginx / Caddy', role: 'May proxy a local Metabase domain.' }
    ],
    help: [
      { title: 'Manage the Java runtime', description: 'Use the JDK required by the Metabase release.' },
      { title: 'Run the application database', description: 'Keep the configured metadata database local to the project.' },
      { title: 'Use a local analytics address', description: 'Configure a domain and HTTPS for browser testing when useful.' },
      { title: 'Start dependencies together', description: 'Keep the application and local services in one Startup Group.' }
    ],
    setupSteps: [
      'Use the Metabase documentation for installation and supported version guidance.',
      'Select the Java runtime required by the Metabase release.',
      'Start the metadata database when the installation uses one.',
      'Configure a local reverse proxy and domain when browser access needs one.',
      'Enable local HTTPS when integrations require a secure origin.',
      'Save the application and services in a Startup Group when useful.'
    ],
    relatedSlugs: ['matomo', 'spring-boot', 'directus']
  }
}
