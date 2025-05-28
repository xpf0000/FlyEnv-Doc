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
              text: 'Introduction',
              items: [
                { text: 'What is FlyEnv?', link: '/guide/what-is-flyenv' },
                { text: 'Getting Started', link: '/guide/getting-started' },
              ],
              collapsed: true
            },
            {
              text: 'Module Reference',
              items: [
                { text: 'User Customizable Modules', link: '/guide/user-customizable-modules' },
                { text: 'Load I18n Language Packs', link: '/guide/dynamically-load-I18n-language-packs' },
                { text: 'Local Offline AI Agent', link: '/guide/build-local-offline-ai-agent' },
                { text: 'Use Proxy', link: '/guide/use-proxy' },
                { text: 'Host', link: '/guide/host' },
                { text: 'Database Account Password', link: '/guide/database-user-password' },
                { text: 'PHP Extensions Install', link: '/guide/php-extensions-install' },
                { text: 'PHP Debug With Xdebug', link: '/guide/php-debug-with-xdebug' },
                { text: 'Set Up Java Environment', link: '/guide/set-up-java-development-environment.md' },
                { text: 'System Path Environment', link: '/guide/setup-system-path-environment.md' },
                { text: 'Project-Level Environment Isolation', link: '/guide/project-level-runtime-environment.md' },
              ],
              collapsed: false
            },
            {
              text: 'Other',
              items: [
                { text: 'Run Laravel Use FlyEnv', link: '/guide/run-laravel-use-flyenv' },
                { text: 'PHP icu4c issues', link: '/guide/php-icu4c-issues' },
                { text: 'Apache parse .html file to php', link: '/guide/apache-html-to-php' },
                { text: 'Nginx parse .html file to php', link: '/guide/nginx-html-to-php' },
                { text: 'Caddy parse .html file to php', link: '/guide/caddy-html-to-php' },
                { text: 'Apache Reverse Proxy NestJS', link: '/guide/apache-reverse-proxy-nestjs' },
                { text: 'Nginx Reverse Proxy NestJS', link: '/guide/nginx-reverse-proxy-nestjs' },
                { text: 'Caddy Reverse Proxy NestJS', link: '/guide/caddy-reverse-proxy-nestjs' },
                { text: 'PHP Code Obfuscation', link: '/guide/php-code-obfuscation' },
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
              text: '简介',
              items: [
                { text: '什么是FlyEnv?', link: '/zh/guide/what-is-flyenv' },
                { text: '快速开始', link: '/zh/guide/getting-started' },
              ],
              collapsed: true
            },
            {
              text: '功能参考',
              items: [
                { text: '自定义模块使用指南', link: '/zh/guide/user-customizable-modules' },
                { text: '动态加载I18n语言包', link: '/zh/guide/dynamically-load-I18n-language-packs' },
                { text: '本地离线AI智能体', link: '/zh/guide/build-local-offline-ai-agent' },
                { text: '使用代理', link: '/zh/guide/use-proxy' },
                { text: '站点', link: '/zh/guide/host' },
                { text: '数据库账号密码', link: '/zh/guide/database-user-password' },
                { text: 'PHP扩展安装', link: '/zh/guide/php-extensions-install' },
                { text: '使用Xdebug调试PHP', link: '/zh/guide/php-debug-with-xdebug' },
                { text: '搭建Java开发环境', link: '/zh/guide/set-up-java-development-environment.md' },
                { text: '设置系统PATH环境变量', link: '/zh/guide/setup-system-path-environment.md' },
                { text: '项目级环境隔离', link: '/zh/guide/project-level-runtime-environment.md' },
              ],
              collapsed: false
            },
            {
              text: '其他',
              items: [
                { text: '运行Laravel', link: '/zh/guide/run-laravel-use-flyenv' },
                { text: 'PHP icu4c 问题', link: '/zh/guide/php-icu4c-issues' },
                { text: 'Apache解析.html文件为php', link: '/zh/guide/apache-html-to-php' },
                { text: 'Nginx解析.html文件为php', link: '/zh/guide/nginx-html-to-php' },
                { text: 'Caddy解析.html文件为php', link: '/zh/guide/caddy-html-to-php' },
                { text: 'Apache反向代理NestJS', link: '/zh/guide/apache-reverse-proxy-nestjs' },
                { text: 'Nginx反向代理NestJS', link: '/zh/guide/nginx-reverse-proxy-nestjs' },
                { text: 'Caddy反向代理NestJS', link: '/zh/guide/caddy-reverse-proxy-nestjs' },
                { text: 'PHP代码混淆', link: '/zh/guide/php-code-obfuscation' },
              ],
              collapsed: false
            }
          ]
        }
      }
    }
  }
})
