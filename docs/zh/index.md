---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: '全栈开发环境管理工具。Windows 和 macOS 上 Docker/XAMPP 的原生替代方案'

hero:
  name: "FlyEnv"
  text: "全栈开发环境管理器"
  tagline: "支持 macOS/Windows/Linux。一键启动，即刻开发"
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv 应用图标'
  actions:
    - theme: brand
      text: 了解FlyEnv
      link: /guide/getting-started
    - theme: alt
      text: 快速上手
      link: /guide/what-is-flyenv

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
    details: 统一替代 <strong>NVM + XAMPP + Docker Desktop</strong>。即刻运行 PHP、Node、Java、Python、Go、MySQL、Redis 等——秒级配置。
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
    details: 当您 cd 进入项目时自动切换 Node/PHP/Python 版本。不再有全局版本冲突。
---

<script setup>
import AppCoreModule from '../components/AppCoreModule/zh.vue';
import AppToolModule from '../components/AppToolModule/zh.vue';
import AppNoFountTipsModules from '../components/AppNoFoundTips/index.vue';
import AppGitHubModules from '../components/AppGithub/zh.vue';
import AppCommentModules from '../components/AppComment/zh.vue';
import AppCanDoModules from '../components/AppCanDo/zh.vue';
import AppPriceModules from '../components/AppPrice/zh.vue';
</script>

<AppCanDoModules />

<AppCoreModule />

<AppToolModule />

<AppGitHubModules />

<AppCommentModules />

<AppPriceModules />

<AppNoFountTipsModules />