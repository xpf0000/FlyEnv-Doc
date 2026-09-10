export type FeatureRelatedKind = 'guide' | 'solution' | 'demo' | 'community'

export interface FeatureRelatedLink {
  kind: FeatureRelatedKind
  label: string
  href: string
}

const guide = (label: string, href: string): FeatureRelatedLink => ({ kind: 'guide', label, href })
const solution = (label: string, href: string): FeatureRelatedLink => ({
  kind: 'solution',
  label,
  href
})
const demo = (label: string, query: string): FeatureRelatedLink => ({
  kind: 'demo',
  label,
  href: `/demos?q=${encodeURIComponent(query)}`
})
const community = (label: string, href: string): FeatureRelatedLink => ({
  kind: 'community',
  label,
  href
})

const stories = {
  phpSwitch: community(
    'Community: switching PHP versions after years with XAMPP',
    'https://medium.com/@putusuthasatyawan/mencoba-flyenv-setelah-lama-menggunakan-xampp-e5f2980d8730'
  ),
  phpLinux: community(
    'Community: fixing PHP versions on Linux',
    'https://medium.com/@azka.thoyyib/flyenv-on-linux-actually-fixed-my-php-version-headache-668de6216565'
  ),
  phpLaravel: community(
    'Community: Laravel 12 migration from Laragon',
    'https://medium.com/@abbyansyahatha/flyenv-untuk-laravel-12-review-dan-tutorial-migrasi-dari-laragon-fd3b3b682fa3'
  ),
  phpWordPress: community(
    'Community: serving WordPress locally with FlyEnv',
    'https://medium.com/@agungf.wibowo/cara-mudah-serve-project-web-wordpress-di-local-komputermu-dengan-flyenv-0b5f07950bce'
  ),
  phpMac: community(
    'Community: a lightweight macOS PHP workflow',
    'https://dev.to/sihar/pengalaman-saya-menggunakan-flyenv-selama-6-bulan-4m8p'
  ),
  fullStack: community(
    'Community: FlyEnv for PHP, Node.js and AI',
    'https://medium.com/@goharabbasit/why-i-love-flyenv-my-all-in-one-dev-environment-with-ai-6570611838a7'
  ),
  nodeLaravel: community(
    'Community: managing PHP and Node.js for Laravel and Next.js',
    'https://medium.com/@mohaddes28/flyenv-is-awesome-359b5c905391'
  ),
  nodeLinux: community(
    'Community: a lightweight full-stack workflow on Linux',
    'https://www.linkedin.com/posts/hadiid-andri-yulison-984a69200_flyenv-webdevelopment-localenvironment-share-7469227528122007553-oCBY'
  ),
  rubyJekyll: community(
    'Community: installing Ruby and Jekyll locally',
    'https://blog.kiki.my.id/flyenv-cara-install-ruby-dan-jekyll-setup-local-development/'
  ),
  postgresLinux: community(
    'Community: PHP, Node.js and PostgreSQL on Linux',
    'https://www.linkedin.com/posts/hadiid-andri-yulison-984a69200_flyenv-webdevelopment-localenvironment-share-7469227528122007553-oCBY'
  ),
  aiReview: community(
    'Community: an all-in-one environment with local AI',
    'https://medium.com/@manyang.megantoro/flyenv-the-all-in-one-local-development-platform-with-local-ai-chat-support-d06314dd2985'
  ),
  aiFullStack: community(
    'Community: a modern full-stack environment with AI',
    'https://medium.com/@goharabbas321/flyenv-a-modern-local-development-environment-for-full-stack-developers-d1661b18f488'
  ),
  dockerSwitch: community(
    'Community: replacing XAMPP and Docker with FlyEnv',
    'https://medium.com/@mufaizabd/i-used-xampp-and-docker-for-years-now-i-fully-use-flyenv-71bb92d3a141'
  ),
  laragonSwitch: community(
    'Community: switching from Laragon to FlyEnv',
    'https://medium.com/@rafy683/why-i-finally-switched-from-laragon-to-flyenv-after-years-of-using-it-21be77579963'
  )
}

export const featureRelatedContent: Record<string, FeatureRelatedLink[]> = {
  php: [
    guide('Install PHP extensions', '/guide/php-extensions-install'),
    guide('Deploy PHP projects without Docker', '/guide/deploy-php-projects-without-docker'),
    solution('Run Laravel locally', '/solutions/laravel'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    demo('Browse PHP project demos', 'PHP'),
    stories.phpSwitch,
    stories.phpLinux,
    stories.phpMac,
    stories.phpLaravel,
    stories.phpWordPress,
    stories.laragonSwitch
  ],
  nodejs: [
    guide('Manage Node.js and PHP versions', '/guide/manage-multiple-node-php-versions'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('Reverse proxy setup for Node.js', '/guide/reverse-proxy-nestjs-multi-servers'),
    solution('Run Directus locally', '/solutions/directus'),
    solution('Run Strapi locally', '/solutions/strapi'),
    demo('Browse Node.js demos', 'Node.js'),
    stories.nodeLaravel,
    stories.nodeLinux,
    stories.laragonSwitch
  ],
  'local-sites-https': [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('Expose localhost with Cloudflare Tunnel', '/guide/cloudflare-tunnel-local-development'),
    guide('Run Laravel locally', '/guide/run-laravel-use-flyenv'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse local-site demos', 'HTTPS'),
    demo('Browse reverse-proxied site demos', 'Nginx'),
    stories.phpWordPress
  ],
  mkcert: [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('Expose localhost with Cloudflare Tunnel', '/guide/cloudflare-tunnel-local-development'),
    demo('Browse SSL and HTTPS demos', 'SSL'),
    solution('Run WordPress locally', '/solutions/wordpress')
  ],
  python: [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    ),
    solution('Run FastAPI locally', '/solutions/fastapi'),
    solution('Run Django locally', '/solutions/django'),
    demo('Browse Python demos', 'Python'),
    stories.nodeLinux
  ],
  java: [
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    solution('Run Spring Boot locally', '/solutions/spring-boot'),
    solution('Run Metabase locally', '/solutions/metabase'),
    demo('Browse Java demos', 'Java')
  ],
  go: [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    ),
    guide('Reverse proxy setup for Node.js', '/guide/reverse-proxy-nestjs-multi-servers'),
    solution('Run Gitea locally', '/solutions/gitea'),
    demo('Browse Go runtime demos', 'Go'),
    stories.nodeLinux
  ],
  ruby: [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    demo('Browse runtime demos', 'runtime'),
    stories.rubyJekyll,
    stories.fullStack
  ],
  rust: [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    demo('Browse Rust and RustFS demos', 'Rust'),
    guide('User-customizable modules', '/guide/user-customizable-modules')
  ],
  dotnet: [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    demo('Browse runtime demos', 'runtime'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  zig: [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    demo('Browse runtime demos', 'runtime'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  bun: [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('System PATH management', '/guide/setup-system-path-environment'),
    demo('Browse Bun runtime demos', 'Bun'),
    solution('Run Strapi locally', '/solutions/strapi')
  ],
  deno: [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('System PATH management', '/guide/setup-system-path-environment'),
    demo('Browse runtime demos', 'runtime'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    )
  ],
  erlang: [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    demo('Browse runtime demos', 'runtime'),
    demo('Browse RabbitMQ demos', 'RabbitMQ')
  ],
  gradle: [
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    solution('Run Spring Boot locally', '/solutions/spring-boot'),
    demo('Browse Gradle and Java demos', 'Java'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  flutter: [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    demo('Browse runtime demos', 'runtime'),
    guide('System PATH management', '/guide/setup-system-path-environment')
  ],
  nginx: [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('Parse HTML as PHP in Nginx, Apache and Caddy', '/guide/parse-html-as-php-multi-servers'),
    guide('Reverse proxy setup for Node.js', '/guide/reverse-proxy-nestjs-multi-servers'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse Nginx demos', 'Nginx')
  ],
  apache: [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('Parse HTML as PHP in Nginx, Apache and Caddy', '/guide/parse-html-as-php-multi-servers'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    demo('Browse Apache demos', 'Apache'),
    stories.phpWordPress
  ],
  caddy: [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('Parse HTML as PHP in Nginx, Apache and Caddy', '/guide/parse-html-as-php-multi-servers'),
    guide('Deploy PHP projects without Docker', '/guide/deploy-php-projects-without-docker'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse Caddy demos', 'Caddy')
  ],
  tomcat: [
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    guide('Custom domains and Auto SSL', '/guide/host'),
    solution('Run Spring Boot locally', '/solutions/spring-boot'),
    demo('Browse Tomcat demos', 'Tomcat')
  ],
  frankenphp: [
    guide('Deploy PHP projects without Docker', '/guide/deploy-php-projects-without-docker'),
    guide('Custom domains and Auto SSL', '/guide/host'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse PHP application-server demos', 'PHP'),
    stories.phpLaravel
  ],
  mysql: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse MySQL demos', 'MySQL'),
    stories.phpWordPress
  ],
  mariadb: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    demo('Browse MariaDB demos', 'MariaDB'),
    demo('Browse PHP database demos', 'PHP')
  ],
  postgresql: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run Django locally', '/solutions/django'),
    solution('Run Strapi locally', '/solutions/strapi'),
    demo('Browse PostgreSQL and pgAdmin demos', 'PostgreSQL'),
    stories.postgresLinux
  ],
  mongodb: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run Strapi locally', '/solutions/strapi'),
    demo('Browse MongoDB demos', 'MongoDB'),
    stories.fullStack
  ],
  clickhouse: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run Metabase locally', '/solutions/metabase'),
    demo('Browse ClickHouse demos', 'ClickHouse'),
    demo('Browse database demos', 'database')
  ],
  neo4j: [
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    demo('Browse Neo4j demos', 'Neo4j'),
    demo('Browse database demos', 'database'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  qdrant: [
    guide('Build a privacy-first offline AI agent', '/guide/build-local-offline-ai-agent'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse Qdrant and vector database demos', 'Qdrant'),
    demo('Browse Ollama AI demos', 'Ollama')
  ],
  redis: [
    guide('Database users and password configuration', '/guide/database-user-password'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse Redis Commander demos', 'Redis'),
    stories.phpLaravel
  ],
  memcached: [
    solution('Run WordPress locally', '/solutions/wordpress'),
    solution('Run Magento locally', '/solutions/magento'),
    demo('Browse cache and service demos', 'Redis'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  rabbitmq: [
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse RabbitMQ demos', 'RabbitMQ'),
    demo('Browse Redis queue demos', 'Redis'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    )
  ],
  elasticsearch: [
    solution('Run Magento locally', '/solutions/magento'),
    demo('Browse Elasticsearch demos', 'Elasticsearch'),
    demo('Browse search-service demos', 'search'),
    guide('Database users and password configuration', '/guide/database-user-password')
  ],
  meilisearch: [
    demo('Browse Meilisearch demos', 'Meilisearch'),
    demo('Browse search-service demos', 'search'),
    guide('Database users and password configuration', '/guide/database-user-password'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  typesense: [
    demo('Browse Typesense demos', 'Typesense'),
    demo('Browse search-service demos', 'search'),
    guide('Database users and password configuration', '/guide/database-user-password'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  zincsearch: [
    demo('Browse ZincSearch demos', 'ZincSearch'),
    demo('Browse search-service demos', 'search'),
    guide('Database users and password configuration', '/guide/database-user-password'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  mailpit: [
    guide('Local email testing with Mailpit', '/guide/local-email-testing-mailpit'),
    solution('Run Laravel locally', '/solutions/laravel'),
    solution('Run WordPress locally', '/solutions/wordpress'),
    demo('Browse Mailpit demos', 'Mailpit'),
    stories.phpLaravel
  ],
  minio: [
    solution('Run Nextcloud locally', '/solutions/nextcloud'),
    solution('Run Strapi locally', '/solutions/strapi'),
    demo('Browse MinIO object-storage demos', 'MinIO'),
    guide('User-customizable modules', '/guide/user-customizable-modules')
  ],
  rustfs: [
    solution('Run Nextcloud locally', '/solutions/nextcloud'),
    solution('Run Strapi locally', '/solutions/strapi'),
    demo('Browse RustFS object-storage demos', 'RustFS'),
    demo('Browse MinIO demos', 'MinIO')
  ],
  consul: [
    solution('Run Spring Boot locally', '/solutions/spring-boot'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    ),
    demo('Browse Consul service-discovery demos', 'Consul'),
    demo('Browse Nacos demos', 'Nacos')
  ],
  etcd: [
    guide('Create user-customizable modules', '/guide/user-customizable-modules'),
    demo('Browse etcd demos', 'etcd'),
    demo('Browse service-discovery demos', 'service discovery'),
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    )
  ],
  'r-nacos': [
    solution('Run Spring Boot locally', '/solutions/spring-boot'),
    guide('Set up a Java development environment', '/guide/set-up-java-development-environment'),
    demo('Browse Nacos demos', 'Nacos'),
    demo('Browse service-discovery demos', 'service discovery')
  ],
  temporal: [
    guide(
      'Deploy Node.js, Python and Go without Docker',
      '/guide/deploy-nodejs-python-go-without-docker'
    ),
    demo('Browse Temporal workflow demos', 'Temporal'),
    demo('Browse workflow demos', 'workflow'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  numa: [
    guide('Custom domains and Auto SSL', '/guide/host'),
    demo('Browse Numa and DNS demos', 'Numa'),
    demo('Browse local-service demos', 'local service'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  ollama: [
    guide('Build a privacy-first offline AI agent', '/guide/build-local-offline-ai-agent'),
    guide('Build self-hosted AI workflows with n8n', '/guide/build-local-ai-workflow-by-n8n'),
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    demo('Browse Ollama AI demos', 'Ollama'),
    stories.aiReview
  ],
  n8n: [
    guide('Build self-hosted AI workflows with n8n', '/guide/build-local-ai-workflow-by-n8n'),
    guide('Build a privacy-first offline AI agent', '/guide/build-local-offline-ai-agent'),
    demo('Browse n8n workflow demos', 'n8n'),
    demo('Browse Ollama AI demos', 'Ollama'),
    stories.aiFullStack
  ],
  cliproxyapi: [
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    demo('Browse CLIProxyAPI gateway demos', 'CLIProxyAPI'),
    stories.aiReview,
    stories.aiFullStack
  ],
  'claude-code': [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse Claude Code demos', 'Claude Code'),
    stories.aiReview
  ],
  codex: [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse Codex demos', 'Codex'),
    stories.aiFullStack
  ],
  opencode: [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse OpenCode demos', 'OpenCode'),
    stories.aiFullStack
  ],
  kimi: [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse Kimi demos', 'Kimi'),
    stories.aiReview
  ],
  'antigravity-cli': [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    demo('Browse AI coding demos', 'AI coding'),
    stories.aiFullStack
  ],
  'github-copilot-cli': [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('Manage Node.js and PHP versions', '/guide/manage-multiple-node-php-versions'),
    demo('Browse AI coding demos', 'AI coding'),
    stories.aiReview
  ],
  openclaw: [
    guide('OpenClaw and Ollama setup', '/guide/openclaw'),
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    demo('Browse OpenClaw demos', 'OpenClaw'),
    stories.aiReview
  ],
  'hermes-agent': [
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    guide('Build a privacy-first offline AI agent', '/guide/build-local-offline-ai-agent'),
    demo('Browse AI-agent demos', 'AI agent'),
    stories.aiFullStack
  ],
  'mcp-server': [
    guide('FlyEnv AI Workspace and MCP guide', '/guide/ai-coding-workspace-mcp'),
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    demo('Browse MCP demos', 'MCP'),
    stories.aiReview,
    stories.aiFullStack
  ],
  'dns-server': [
    guide('Custom domains and Auto SSL', '/guide/host'),
    demo('Browse local-site service demos', 'local service'),
    demo('Browse Numa demos', 'Numa'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  'ftp-server': [
    guide('Custom domains and Auto SSL', '/guide/host'),
    guide('User-customizable modules', '/guide/user-customizable-modules'),
    demo('Browse infrastructure demos', 'local service'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  'startup-groups': [
    guide('FlyEnv quick start', '/guide/getting-started'),
    guide('Run Laravel locally', '/guide/run-laravel-use-flyenv'),
    demo('Browse project-stack demos', 'local stack'),
    solution('Run Laravel locally', '/solutions/laravel')
  ],
  'cron-jobs': [
    guide('FlyEnv quick start', '/guide/getting-started'),
    demo('Browse Temporal workflow demos', 'Temporal'),
    demo('Browse project demos', 'Projects'),
    solution('Run Laravel locally', '/solutions/laravel')
  ],
  'per-project-runtimes': [
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('Manage Node.js and PHP versions', '/guide/manage-multiple-node-php-versions'),
    solution('Run Laravel locally', '/solutions/laravel'),
    demo('Browse project runtime demos', 'project isolation'),
    stories.nodeLaravel
  ],
  'user-modules': [
    guide('User-customizable modules', '/guide/user-customizable-modules'),
    demo('Browse custom module demos', 'custom module'),
    demo('Browse etcd demos', 'etcd'),
    guide('System PATH management', '/guide/setup-system-path-environment')
  ],
  'cli-terminal': [
    guide('System PATH management', '/guide/setup-system-path-environment'),
    guide('Project-level runtime isolation', '/guide/project-level-runtime-environment'),
    guide('How to work with AI coding assistants', '/guide/flyenv-work-with-ai'),
    demo('Browse AI CLI and terminal demos', 'AI coding'),
    stories.fullStack
  ],
  podman: [
    guide('Podman container management', '/guide/podman-module'),
    guide('FlyEnv vs Docker and XAMPP', '/guide/flyenv-vs-docker-xampp'),
    guide('Deploy PHP projects without Docker', '/guide/deploy-php-projects-without-docker'),
    demo('Browse container and project demos', 'local stack'),
    stories.dockerSwitch
  ],
  cloudflared: [
    guide('Expose localhost with Cloudflare Tunnel', '/guide/cloudflare-tunnel-local-development'),
    guide('Custom domains and Auto SSL', '/guide/host'),
    demo('Browse HTTPS tunnel demos', 'HTTPS'),
    guide('FlyEnv quick start', '/guide/getting-started')
  ],
  'cloudflare-tunnel': [
    guide('Expose localhost with Cloudflare Tunnel', '/guide/cloudflare-tunnel-local-development'),
    guide('Custom domains and Auto SSL', '/guide/host'),
    demo('Browse HTTPS tunnel demos', 'HTTPS'),
    solution('Run Laravel locally', '/solutions/laravel')
  ]
}
