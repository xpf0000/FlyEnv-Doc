---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

title: 'FlyEnv - 支持 PHP、Node.js 与 AI 的原生本地开发环境'
titleTemplate: false

head:
  - - meta
    - name: description
      content: 'FlyEnv 是一款原生本地开发环境管理工具，支持 PHP、Node.js、Python、数据库、HTTPS 与本地 AI。可在 macOS、Windows 和 Linux 上运行项目，无需 Docker 额外开销。'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"],"inLanguage":"zh-CN","description":"FlyEnv 是一款原生本地开发环境管理工具，支持 PHP、Node.js、Python、数据库、HTTPS 与本地 AI。可运行本地项目，无需 Docker 额外开销。","url":"https://www.flyenv.com/zh/","downloadUrl":"https://www.flyenv.com/zh/download","softwareHelp":"https://www.flyenv.com/zh/guide/what-is-flyenv","author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}

hero:
  name: "FlyEnv"
  text: "本地开发工具箱，化繁为简。"
  tagline: "原生支持 PHP, Node.js, Python 及主流数据库。内置专业开发工具。一键配置，即刻开发"
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv 应用图标'
  actions:
    - theme: brand
      text: 免费下载
      link: /zh/download
    - theme: alt
      text: 快速上手
      link: /zh/guide/getting-started

features:
  - icon:
      src: 'https://oss.macphpstudy.com/image/fast.svg'
      width: '32px'
      height: '32px'
    title: 原生速度（无需 Docker）
    details: 以原生静态二进制文件运行 Nginx、PHP、MySQL 和 Redis。毫秒级启动，内存占用仅为 Docker 容器的 1/3。
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: 通用原生技术栈
    details: 完美替代 <strong>NVM + XAMPP + Docker Desktop</strong>。即刻运行 PHP、Node、Java、Python、Go、MySQL、Redis 等多种环境。
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: 模块化 & 按需使用
    details: 不需要 Java？它就不会被安装。FlyEnv 仅下载您实际使用的运行时，保持轻量级。
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: 项目级隔离
    details: 切换项目目录时自动匹配对应的 Node/PHP/Python 版本。彻底告别全局版本冲突带来的困扰。
---

<script setup>
import AppSvgIcon from '../components/VueSvgIcon/svg.vue';
import AppCoreModule from '../components/AppCoreModule/zh.vue';
import AppToolModule from '../components/AppToolModule/zh.vue';
import AppNoFountTipsModules from '../components/AppNoFoundTips/index.vue';
import AppGitHubModules from '../components/AppGithub/zh.vue';
import AppCommentModules from '../components/AppComment/zh.vue';
import AppCanDoModules from '../components/AppCanDo/zh.vue';
import AppPriceModules from '../components/AppPrice/zh.vue';
</script>

<AppSvgIcon />

<AppCanDoModules />

<AppCoreModule />

<AppToolModule />

<AppGitHubModules />

<AppCommentModules />

<AppPriceModules />

<AppNoFountTipsModules />
