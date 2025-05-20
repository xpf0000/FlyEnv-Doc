# FlyEnv Documentation

This project is the official website and documentation for FlyEnv, built with [VitePress](https://vitepress.dev/) and styled using [Tailwind CSS 3](https://v3.tailwindcss.com/). Contributors should familiarize themselves with these technologies.

## File Structure

### /docs/.vitepress

Contains VitePress configuration files. Multi-language and page settings are defined in `/docs/.vitepress/config.mts`:

```js
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
              { text: 'Load I18n Language Packs', link: '/guide/dynamically-load-I18n-language-packs' },
              { text: 'Local Offline AI Agent', link: '/guide/build-local-offline-ai-agent' },
              { text: 'Use Proxy', link: '/guide/use-proxy' },
              { text: 'Host Management', link: '/guide/host' },
              { text: 'Database Credentials', link: '/guide/database-user-password' },
              { text: 'PHP Extensions Installation', link: '/guide/php-extensions-install' },
              { text: 'PHP Debugging with Xdebug', link: '/guide/php-debug-with-xdebug' },
              { text: 'Java Environment Setup', link: '/guide/set-up-java-development-environment.md' },
              { text: 'System PATH Configuration', link: '/guide/setup-system-path-environment.md' },
              { text: 'Project-Level Environment Isolation', link: '/guide/project-level-runtime-environment.md' },
            ],
            collapsed: false
          },
          {
            text: 'Advanced Topics',
            items: [
              { text: 'Running Laravel with FlyEnv', link: '/guide/run-laravel-use-flyenv' },
              { text: 'PHP icu4c Issues', link: '/guide/php-icu4c-issues' },
              { text: 'Apache: Parse .html as PHP', link: '/guide/apache-html-to-php' },
              { text: 'Nginx: Parse .html as PHP', link: '/guide/nginx-html-to-php' },
              { text: 'Caddy: Parse .html as PHP', link: '/guide/caddy-html-to-php' },
              { text: 'Apache Reverse Proxy for NestJS', link: '/guide/apache-reverse-proxy-nestjs' },
              { text: 'Nginx Reverse Proxy for NestJS', link: '/guide/nginx-reverse-proxy-nestjs' },
              { text: 'Caddy Reverse Proxy for NestJS', link: '/guide/caddy-reverse-proxy-nestjs' },
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
```

### /docs/components

Contains custom Vue components used in the project.

### /docs/guide

English version documentation pages.

### /docs/zh

Chinese version documentation pages.

## Multi-language Support

To add a new language:
1. Create a new directory under `/docs/` (e.g., `/docs/fr/` for French)
2. Add the corresponding language configuration in `/docs/.vitepress/config.mts`
3. Translate all documentation pages into the new language
