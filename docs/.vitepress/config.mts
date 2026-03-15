import { defineConfig, defineConfigWithTheme } from 'vitepress'
import { AppHost, GoogleID, PROD, FootMessage } from './env'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import ElementPlus from 'unplugin-element-plus/vite'
import AppDownBtn from '../components/AppDownButton/index.vue'

const head: any = [['link', { rel: 'icon', href: '/favicon.ico' }]]
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
    { async: '', src: `https://storage.ko-fi.com/cdn/scripts/overlay-widget.js` }
  ], [
    'script',
    { async: '', src: `/js/index.js` }
  ])
}

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme({
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
  head,
  themeConfig: {
    footer: {
      message: FootMessage,
      copyright: 'Copyright © 2019-present <a href="https://github.com/xpf0000">Alex Xu</a>'
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
          { text: 'FlyPHPServer', link: '/flyphpserver' },
          { text: 'Guide', link: '/guide/what-is-flyenv' },
          { text: 'Community', link: '/community' },
          { text: 'Sponsor', link: '/sponsor' },
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
                { text: 'Build Local Offline AI Agent', link: '/guide/build-local-offline-ai-agent' },
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
        socialLinks: [
          { icon: 'github', link: 'https://github.com/xpf0000/FlyEnv' }
        ],
        nav: [
          { text: '下载', link: '/zh/download' },
          { text: 'FlyPHPServer', link: '/zh/flyphpserver' },
          { text: '指南', link: '/zh/guide/what-is-flyenv' },
          { text: '社区', link: '/zh/community' },
          { text: '捐赠', link: '/zh/sponsor' },
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
                { text: '本地离线AI智能体', link: '/zh/guide/build-local-offline-ai-agent' },
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
    }
  }
})
