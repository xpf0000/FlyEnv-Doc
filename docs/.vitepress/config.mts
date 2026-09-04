import { defineConfig, defineConfigWithTheme } from 'vitepress'
import { AppHost, GoogleID, PROD, FootMessage } from './env'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import AppDownBtn from '../components/AppDownButton/index.vue'
import { solutions } from '../data/solutions'
import { solutionContentByLocale } from '../data/solution-locales'

const head: any = [['link', { rel: 'icon', href: '/favicon.ico' }]]
const socialImage = 'https://oss.macphpstudy.com/image/app-icon.png'
if (PROD) {
  head.push([
    'script',
    { async: '', src: `https://www.googletagmanager.com/gtag/js?id=${GoogleID}` }
  ], [
    'script',
    {},
    `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GoogleID}');`
  ], [
    'script',
    { async: '', src: `/js/index.js` }
  ])
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
  srcExclude: ['superpowers/**'],
  vite: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
      ElementPlus({}),
    ],
    server: {
      host: '0.0.0.0',
      port: 4000
    },
    ssr: {
      noExternal: ['element-plus', '*/AppFeedback/*']
    }
  },
  sitemap: {
    hostname: AppHost
  },
  transformHead({ page, title, description }) {
    const match = page.match(/^(?:(zh|id)\/)?solutions\/([a-z0-9-]+)\.md$/)
    if (!match) return

    const locale = (match[1] ?? 'en') as 'en' | 'zh' | 'id'
    const slug = match[2]
    const solution = solutions.find((item) => item.slug === slug)
    if (!solution) return

    const localePath = locale === 'en' ? '' : `/${locale}`
    const language = locale === 'zh' ? 'zh-CN' : locale === 'id' ? 'id-ID' : 'en'
    const solutionDescription =
      solutionContentByLocale[locale][slug]?.summary ?? description
    const solutionsLabel = locale === 'zh' ? '解决方案' : locale === 'id' ? 'Solusi' : 'Solutions'
    const url = `${AppHost}${localePath}/solutions/${slug}.html`
    const schema = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: title,
          url,
          description: solutionDescription,
          inLanguage: language,
          isPartOf: {
            '@type': 'WebSite',
            name: 'FlyEnv',
            url: `${AppHost}${localePath || '/'}`
          }
        },
        {
          '@type': 'BreadcrumbList',
          '@id': `${url}#breadcrumb`,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'FlyEnv', item: `${AppHost}/` },
            {
              '@type': 'ListItem',
              position: 2,
              name: solutionsLabel,
              item: `${AppHost}${localePath}/solutions.html`
            },
            { '@type': 'ListItem', position: 3, name: solution.name, item: url }
          ]
        }
      ]
    }

    return [
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: solutionDescription }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: socialImage }],
      ['meta', { name: 'twitter:card', content: 'summary' }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: solutionDescription }],
      ['meta', { name: 'twitter:image', content: socialImage }],
      ...(locale === 'en' ? [] : [['link', { rel: 'canonical', href: url }]]),
      ['script', { type: 'application/ld+json' }, JSON.stringify(schema)]
    ]
  },
  head,
  themeConfig: {
    footer: {
      message: FootMessage,
      copyright: 'Copyright © 2019-present <a href="https://github.com/xpf0000">Alex Xu</a> · <a href="/terms">Terms of Service</a> · <a href="/privacy">Privacy Policy</a> · <a href="/refund-policy">Refund Policy</a>'
    },
    search: {
      provider: 'local'
    }
  },
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      title: "FlyEnv",
      description: "All-in-One Full-Stack Environment Management Tool. Support macOS / Windows / Linux",
      themeConfig: {
        socialLinks: [
          { icon: 'github', link: 'https://github.com/xpf0000/FlyEnv' }
        ],
        nav: [
          { text: 'Download', link: '/download' },
          { text: 'Features', link: '/features' },
          { text: 'Solutions', link: '/solutions' },
          { text: 'Demos', link: '/demos' },
          { text: 'Guide', link: '/guide/what-is-flyenv' },
          { text: 'Community', link: '/community' },
          { text: 'License', link: '/license' }
        ],
        sidebar: {
          '/guide/': [
            {
              text: 'Getting Started',
              items: [
                { text: 'What is FlyEnv?', link: '/guide/what-is-flyenv' },
                // 新增：专门吃“对比类”长尾搜索词，提升转化率
                { text: 'FlyEnv vs Docker & XAMPP', link: '/guide/flyenv-vs-docker-xampp' },
                { text: 'Quick Start Guide', link: '/guide/getting-started' },
                { text: 'About FlyEnv Helper', link: '/guide/about-flyenv-helper' },
                { text: 'License & Support', link: '/guide/about-license' },
              ],
              collapsed: false
            },
            {
              text: 'Compare',
              items: [
                { text: 'FlyEnv vs XAMPP', link: '/compare/xampp' },
              ],
              collapsed: false
            },
            {
              text: 'Core Environment Setup',
              // SEO意图：覆盖语言安装、多版本管理、扩展配置等高频基础需求
              items: [
                { text: 'Project-Level Version Isolation', link: '/guide/project-level-runtime-environment' },
                { text: 'Manage Node.js & PHP Versions', link: '/guide/manage-multiple-node-php-versions' }, // 新增：截留搜 NVM / PHP Monitor 的流量
                { text: 'System Path Management', link: '/guide/setup-system-path-environment' },
                { text: 'Set Up Java Environment', link: '/guide/set-up-java-development-environment' },
                { text: 'Install PHP Extensions', link: '/guide/php-extensions-install' },
                { text: 'Database & Security Settings', link: '/guide/database-user-password' },
              ],
              collapsed: false
            },
            {
              text: 'AI & Pro Productivity Tools',
              // SEO意图：最高优的引流板块，直接把GSC里跑出来的词前置
              items: [
                { text: 'FlyEnv AI Workspace & MCP Guide', link: '/guide/ai-coding-workspace-mcp' },
                { text: 'AI Coding Assistant Workflow', link: '/guide/flyenv-work-with-ai' },
                { text: 'Build Local Offline AI Agent', link: '/guide/build-local-offline-ai-agent' },
                { text: 'Self-Hosted AI Workflows with n8n', link: '/guide/build-local-ai-workflow-by-n8n' },
                { text: 'OpenClaw + Ollama Setup Guide', link: '/guide/openclaw' },
                { text: 'PHP Code Obfuscation Tool', link: '/guide/php-code-obfuscation' },
                // 新增：利用你刚集成的 Cloudflare 功能，截取 ngrok alternative 流量
                { text: 'Expose Localhost with Cloudflare Tunnel', link: '/guide/cloudflare-tunnel-local-development' },
                // 新增：截取 mailhog alternative 流量
                { text: 'Local Email Testing (Mailpit)', link: '/guide/local-email-testing-mailpit' },
                { text: 'Code Playground & Library', link: '/guide/code-playground-and-code-library' },
              ],
              collapsed: false
            },
            {
              text: 'Web Server & Reverse Proxy',
              // SEO意图：把原来分散的 Apache/Nginx/Caddy 合并，提升单页面权重
              items: [
                { text: 'Custom Domains & Auto SSL', link: '/guide/host' }, // 原来的 host，改名增加吸引力
                { text: 'Deploy PHP Projects Without Docker', link: '/guide/deploy-php-projects-without-docker' },
                { text: 'Parse HTML as PHP (Nginx/Apache/Caddy)', link: '/guide/parse-html-as-php-multi-servers' }, // 合并原有3个文件
                { text: 'Reverse Proxy Setup (NestJS/Node.js)', link: '/guide/reverse-proxy-nestjs-multi-servers' }, // 合并原有3个文件
                { text: 'Deploy Node/Python/Go Without Docker', link: '/guide/deploy-nodejs-python-go-without-docker' },
                { text: 'Network & Proxy Settings', link: '/guide/use-proxy' },
                { text: 'User Customizable Modules', link: '/guide/user-customizable-modules' },
                { text: 'Podman Module User Guide', link: '/guide/podman-module' },
              ],
              collapsed: false // 进阶配置可以默认折叠
            },
            {
              text: 'Troubleshooting & Optimization',
              // SEO意图：解答长尾报错词，增加在 Google 上的精选摘要曝光
              items: [
                { text: 'Windows Site Performance Tuning', link: '/guide/windows-site-performance-optimization' },
                { text: 'Run Laravel on FlyEnv', link: '/guide/run-laravel-use-flyenv' },
                { text: 'PHP Debugging with Xdebug', link: '/guide/php-debug-with-xdebug' }, // 移到排障这里更合理
                { text: 'Fix Common PHP Issues (icu4c)', link: '/guide/php-icu4c-issues' },
                { text: 'Dynamically Load I18n Packs', link: '/guide/dynamically-load-I18n-language-packs' },
              ],
              collapsed: false
            }
          ],
          '/features/': [
            {
              text: 'Features',
              items: [{ text: 'Overview', link: '/features' }],
              collapsed: false
            },
            {
              text: 'Languages & Runtimes',
              items: [
                { text: 'PHP', link: '/features/php' },
                { text: 'Node.js', link: '/features/nodejs' },
                { text: 'Python', link: '/features/python' },
                { text: 'Java', link: '/features/java' },
                { text: 'Go', link: '/features/go' },
                { text: 'Erlang', link: '/features/erlang' },
                { text: 'Ruby', link: '/features/ruby' },
                { text: 'Rust', link: '/features/rust' },
                { text: '.NET', link: '/features/dotnet' },
                { text: 'Zig', link: '/features/zig' },
                { text: 'Bun', link: '/features/bun' },
                { text: 'Deno', link: '/features/deno' },
                { text: 'Flutter', link: '/features/flutter' },
                { text: 'Gradle', link: '/features/gradle' }
              ],
              collapsed: false
            },
            {
              text: 'Web Servers & Local Sites',
              items: [
                { text: 'Local Sites & HTTPS', link: '/features/local-sites-https' },
                { text: 'FrankenPHP', link: '/features/frankenphp' },
                { text: 'Nginx', link: '/features/nginx' },
                { text: 'Apache', link: '/features/apache' },
                { text: 'Caddy', link: '/features/caddy' },
                { text: 'Tomcat', link: '/features/tomcat' }
              ],
              collapsed: false
            },
            {
              text: 'Databases',
              items: [
                { text: 'MySQL', link: '/features/mysql' },
                { text: 'PostgreSQL', link: '/features/postgresql' },
                { text: 'MariaDB', link: '/features/mariadb' },
                { text: 'MongoDB', link: '/features/mongodb' },
                { text: 'Qdrant', link: '/features/qdrant' },
                { text: 'ClickHouse', link: '/features/clickhouse' },
                { text: 'Neo4j', link: '/features/neo4j' }
              ],
              collapsed: false
            },
            {
              text: 'Cache, Messaging & Search',
              items: [
                { text: 'Redis', link: '/features/redis' },
                { text: 'Memcached', link: '/features/memcached' },
                { text: 'RabbitMQ', link: '/features/rabbitmq' },
                { text: 'Elasticsearch', link: '/features/elasticsearch' },
                { text: 'Meilisearch', link: '/features/meilisearch' },
                { text: 'Typesense', link: '/features/typesense' },
                { text: 'ZincSearch', link: '/features/zincsearch' },
                { text: 'Mailpit', link: '/features/mailpit' }
              ],
              collapsed: false
            },
            {
              text: 'Infrastructure, Storage & Network',
              items: [
                { text: 'Numa', link: '/features/numa' },
                { text: 'DNS Server', link: '/features/dns-server' },
                { text: 'FTP Server', link: '/features/ftp-server' },
                { text: 'MinIO', link: '/features/minio' },
                { text: 'RustFS', link: '/features/rustfs' },
                { text: 'Podman', link: '/features/podman' },
                { text: 'Cloudflared', link: '/features/cloudflared' },
                { text: 'Cloudflare Tunnel', link: '/features/cloudflare-tunnel' },
                { text: 'R-NACOS', link: '/features/r-nacos' },
                { text: 'Consul', link: '/features/consul' },
                { text: 'Etcd', link: '/features/etcd' }
              ],
              collapsed: false
            },
            {
              text: 'Developer Workflow',
              items: [
                { text: 'Startup Groups', link: '/features/startup-groups' },
                { text: 'Per-Project Runtimes', link: '/features/per-project-runtimes' },
                { text: 'Cron Jobs', link: '/features/cron-jobs' },
                { text: 'User Modules', link: '/features/user-modules' },
                { text: 'CLI & Terminal', link: '/features/cli-terminal' },
                { text: 'Temporal', link: '/features/temporal' }
              ],
              collapsed: false
            },
            {
              text: 'AI, MCP & Automation',
              items: [
                { text: 'MCP Server', link: '/features/mcp-server' },
                { text: 'Claude Code', link: '/features/claude-code' },
                { text: 'Codex', link: '/features/codex' },
                { text: 'OpenCode', link: '/features/opencode' },
                { text: 'Kimi', link: '/features/kimi' },
                { text: 'Antigravity CLI', link: '/features/antigravity-cli' },
                { text: 'GitHub Copilot CLI', link: '/features/github-copilot-cli' },
                { text: 'Hermes Agent', link: '/features/hermes-agent' },
                { text: 'OpenClaw', link: '/features/openclaw' },
                { text: 'n8n', link: '/features/n8n' },
                { text: 'Ollama', link: '/features/ollama' },
                { text: 'CLIProxyAPI', link: '/features/cliproxyapi' }
              ],
              collapsed: false
            }
          ]
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      title: "FlyEnv",
      description: "一体化全栈环境管理工具. 支持macOS / Windows / Linux",
      themeConfig: {
        footer: {
          message: FootMessage,
          copyright: 'Copyright © 2019-present <a href="https://github.com/xpf0000">Alex Xu</a> · <a href="/zh/terms">服务条款</a> · <a href="/zh/privacy">隐私政策</a> · <a href="/zh/refund-policy">退款政策</a>'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/xpf0000/FlyEnv' }
        ],
        nav: [
          { text: '下载', link: '/zh/download' },
          { text: '解决方案', link: '/zh/solutions' },
          { text: '演示', link: '/zh/demos' },
          { text: '指南', link: '/zh/guide/what-is-flyenv' },
          { text: '社区', link: '/zh/community' },
          { text: '许可证', link: '/zh/license' }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              text: '开始使用',
              items: [
                { text: '什么是FlyEnv?', link: '/zh/guide/what-is-flyenv' },
                { text: 'FlyEnv vs Docker & XAMPP', link: '/zh/guide/flyenv-vs-docker-xampp' },
                { text: '快速开始', link: '/zh/guide/getting-started' },
                { text: '关于许可证', link: '/zh/guide/about-license' },
                { text: '关于FlyEnv帮助程序', link: '/zh/guide/about-flyenv-helper' },
              ],
              collapsed: false
            },
            {
              text: '核心环境配置',
              items: [
                { text: '项目级环境隔离', link: '/zh/guide/project-level-runtime-environment.md' },
                { text: '管理 Node.js & PHP 版本', link: '/zh/guide/manage-multiple-node-php-versions' },
                { text: '设置系统PATH环境变量', link: '/zh/guide/setup-system-path-environment.md' },
                { text: '搭建Java开发环境', link: '/zh/guide/set-up-java-development-environment.md' },
                { text: 'PHP扩展安装', link: '/zh/guide/php-extensions-install' },
                { text: '数据库账号密码管理', link: '/zh/guide/database-user-password' },
              ],
              collapsed: false
            },
            {
              text: 'AI & 高效开发工具',
              items: [
                { text: 'FlyEnv AI 工作区与 MCP 指南', link: '/zh/guide/ai-coding-workspace-mcp' },
                { text: 'AI 编程助手效率翻倍工作流', link: '/zh/guide/flyenv-work-with-ai' },
                { text: '本地离线AI智能体', link: '/zh/guide/build-local-offline-ai-agent' },
                { text: '使用 n8n 构建本地 AI 工作流', link: '/zh/guide/build-local-ai-workflow-by-n8n' },
                { text: 'OpenClaw + Ollama 配置指南', link: '/zh/guide/openclaw' },
                { text: 'PHP代码混淆工具', link: '/zh/guide/php-code-obfuscation' },
                { text: 'Cloudflare Tunnel 内网穿透', link: '/zh/guide/cloudflare-tunnel-local-development' },
                { text: '本地邮件测试 (Mailpit)', link: '/zh/guide/local-email-testing-mailpit' },
                { text: '代码演练场 & 代码图书馆', link: '/zh/guide/code-playground-and-code-library.md' },
              ],
              collapsed: false
            },
            {
              text: '网络服务器与反向代理',
              items: [
                { text: '自定义域名与自动SSL', link: '/zh/guide/host' },
                { text: '无需 Docker 部署 PHP 项目', link: '/zh/guide/deploy-php-projects-without-docker' },
                { text: '解析HTML为PHP', link: '/zh/guide/parse-html-as-php-multi-servers' },
                { text: '反向代理设置', link: '/zh/guide/reverse-proxy-nestjs-multi-servers' },
                { text: '无需Docker部署Node/Python/Go', link: '/zh/guide/deploy-nodejs-python-go-without-docker' },
                { text: '网络与代理设置', link: '/zh/guide/use-proxy' },
                { text: '自定义模块', link: '/zh/guide/user-customizable-modules' },
                { text: 'Podman模块', link: '/zh/guide/podman-module' },
              ],
              collapsed: false
            },
            {
              text: '故障排除与优化',
              items: [
                { text: 'Windows站点访问速度优化', link: '/zh/guide/windows-site-performance-optimization.md' },
                { text: '运行Laravel', link: '/zh/guide/run-laravel-use-flyenv' },
                { text: 'PHP Xdebug 调试', link: '/zh/guide/php-debug-with-xdebug' },
                { text: 'PHP icu4c 问题', link: '/zh/guide/php-icu4c-issues' },
                { text: '动态加载I18n语言包', link: '/zh/guide/dynamically-load-I18n-language-packs' },
              ],
              collapsed: false
            }
          ]
        }
      }
    },
    id: {
      label: 'Bahasa Indonesia',
      lang: 'id-ID',
      link: '/id/',
      title: 'FlyEnv',
      description: 'Pengelola lingkungan pengembangan full-stack terpadu untuk macOS, Windows, dan Linux.',
      themeConfig: {
        footer: {
          message: FootMessage,
          copyright: 'Copyright © 2019-present <a href="https://github.com/xpf0000">Alex Xu</a> · <a href="/id/terms">Ketentuan Layanan</a> · <a href="/id/privacy">Kebijakan Privasi</a> · <a href="/id/refund-policy">Kebijakan Pengembalian Dana</a>'
        },
        socialLinks: [
          { icon: 'github', link: 'https://github.com/xpf0000/FlyEnv' }
        ],
        nav: [
          { text: 'Unduh', link: '/id/download' },
          { text: 'Solusi', link: '/id/solutions' },
          { text: 'Demo', link: '/id/demos' },
          { text: 'Panduan', link: '/id/guide/what-is-flyenv' },
          { text: 'Komunitas', link: '/id/community' },
          { text: 'Lisensi', link: '/id/license' }
        ],
        sidebar: {
          '/id/guide/': [
            {
              text: 'Memulai',
              items: [
                { text: 'Apa itu FlyEnv?', link: '/id/guide/what-is-flyenv' },
                { text: 'FlyEnv vs Docker & XAMPP', link: '/id/guide/flyenv-vs-docker-xampp' },
                { text: 'Panduan Mulai Cepat', link: '/id/guide/getting-started' },
                { text: 'Tentang FlyEnv Helper', link: '/id/guide/about-flyenv-helper' },
                { text: 'Lisensi & Dukungan', link: '/id/guide/about-license' }
              ],
              collapsed: false
            },
            {
              text: 'Penyiapan Lingkungan Inti',
              items: [
                { text: 'Isolasi Versi per Proyek', link: '/id/guide/project-level-runtime-environment' },
                { text: 'Kelola Versi Node.js & PHP', link: '/id/guide/manage-multiple-node-php-versions' },
                { text: 'Manajemen System Path', link: '/id/guide/setup-system-path-environment' },
                { text: 'Menyiapkan Lingkungan Java', link: '/id/guide/set-up-java-development-environment' },
                { text: 'Memasang Ekstensi PHP', link: '/id/guide/php-extensions-install' },
                { text: 'Pengaturan Database & Keamanan', link: '/id/guide/database-user-password' }
              ],
              collapsed: false
            },
            {
              text: 'AI & Alat Produktivitas',
              items: [
                { text: 'Panduan FlyEnv AI Workspace & MCP', link: '/id/guide/ai-coding-workspace-mcp' },
                { text: 'Alur Kerja Asisten Pemrograman AI', link: '/id/guide/flyenv-work-with-ai' },
                { text: 'Membangun Agen AI Offline Lokal', link: '/id/guide/build-local-offline-ai-agent' },
                { text: 'Alur Kerja AI Self-hosted dengan n8n', link: '/id/guide/build-local-ai-workflow-by-n8n' },
                { text: 'Panduan OpenClaw + Ollama', link: '/id/guide/openclaw' },
                { text: 'Alat Obfuscation Kode PHP', link: '/id/guide/php-code-obfuscation' },
                { text: 'Mengekspos Localhost dengan Cloudflare Tunnel', link: '/id/guide/cloudflare-tunnel-local-development' },
                { text: 'Pengujian Email Lokal (Mailpit)', link: '/id/guide/local-email-testing-mailpit' },
                { text: 'Code Playground & Library', link: '/id/guide/code-playground-and-code-library' }
              ],
              collapsed: false
            },
            {
              text: 'Server Web & Reverse Proxy',
              items: [
                { text: 'Domain Kustom & SSL Otomatis', link: '/id/guide/host' },
                { text: 'Mendeploy Proyek PHP Tanpa Docker', link: '/id/guide/deploy-php-projects-without-docker' },
                { text: 'Mengurai HTML sebagai PHP (Nginx/Apache/Caddy)', link: '/id/guide/parse-html-as-php-multi-servers' },
                { text: 'Penyiapan Reverse Proxy (NestJS/Node.js)', link: '/id/guide/reverse-proxy-nestjs-multi-servers' },
                { text: 'Mendeploy Node/Python/Go Tanpa Docker', link: '/id/guide/deploy-nodejs-python-go-without-docker' },
                { text: 'Pengaturan Jaringan & Proxy', link: '/id/guide/use-proxy' },
                { text: 'Modul yang Dapat Dikustomisasi Pengguna', link: '/id/guide/user-customizable-modules' },
                { text: 'Panduan Modul Podman', link: '/id/guide/podman-module' }
              ],
              collapsed: false
            },
            {
              text: 'Pemecahan Masalah & Optimasi',
              items: [
                { text: 'Penyetelan Performa Situs Windows', link: '/id/guide/windows-site-performance-optimization' },
                { text: 'Menjalankan Laravel di FlyEnv', link: '/id/guide/run-laravel-use-flyenv' },
                { text: 'Debug PHP dengan Xdebug', link: '/id/guide/php-debug-with-xdebug' },
                { text: 'Memperbaiki Masalah PHP Umum (icu4c)', link: '/id/guide/php-icu4c-issues' },
                { text: 'Memuat Paket I18n Secara Dinamis', link: '/id/guide/dynamically-load-I18n-language-packs' }
              ],
              collapsed: false
            }
          ]
        }
      }
    }
  }
})
