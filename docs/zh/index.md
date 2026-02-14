---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: 'Docker/XAMPP 的原生替代方案 | 您的本地开发工具箱，化繁为简'

hero:
  name: "FlyEnv"
  text: "本地开发工具箱，化繁为简。"
  tagline: "原生支持 PHP, Node.js, Python 及主流数据库。内置专业开发工具。一键配置，即刻开发"
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