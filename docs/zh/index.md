---
layout: home

title: 'FlyEnv - 原生本地技术栈、AI 编程 CLI 与 MCP 工作区'
titleTemplate: false

head:
  - - meta
    - name: description
      content: 'FlyEnv 是一款原生桌面工作区，用于管理本地运行时、服务、AI 编程 CLI 和 FlyEnv MCP Server。可在 macOS、Windows 和 Linux 上运行项目，无需 Docker 额外开销。'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"],"inLanguage":"zh-CN","description":"FlyEnv 是一款原生桌面工作区，用于管理本地运行时、服务、AI 编程 CLI 和 FlyEnv MCP Server。可在 macOS、Windows 和 Linux 上运行项目，无需 Docker 额外开销。","url":"https://www.flyenv.com/zh/","downloadUrl":"https://www.flyenv.com/zh/download","softwareHelp":"https://www.flyenv.com/zh/guide/what-is-flyenv","author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}

hero:
  name: "FlyEnv"
  text: "原生本地技术栈、AI 编程 CLI 与 MCP 工作区"
  tagline: "在一个桌面应用中运行 PHP、Node.js、Python、数据库、本地站点、AI 编程客户端和 FlyEnv MCP Server。比 Docker、XAMPP、Herd 和零散 CLI 工具更轻、更快。"
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv - 原生本地技术栈、AI 编程 CLI 与 MCP 工作区'
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
    title: 原生本地技术栈
    details: 以原生二进制方式运行运行时、Web 服务器、数据库、队列、邮件测试和 HTTPS，比重容器方案启动更快、内存更低。
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: AI 编程 CLI 工作区
    details: 在与你的项目相同的桌面工作区中安装和管理 Claude Code、Codex、OpenCode、Kimi、Antigravity CLI 和 GitHub Copilot CLI。
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: 内置 MCP Server
    details: 通过 FlyEnv MCP Server，把本地服务、站点、配置、日志和部分生命周期操作暴露给 AI 客户端，无需手工维护每一个集成。
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: 项目与运维工具
    details: 按项目切换版本，管理本地域名和 SSL，使用 Cloudflare Tunnel、定时任务以及内置开发工具，全部集中在一个应用里。
---

<script setup>
import AppSvgIcon from '../components/VueSvgIcon/svg.vue'
import AppAiWorkflow from '../components/AppAiWorkflow/zh.vue'
import AppCoreModule from '../components/AppCoreModule/zh.vue'
import AppToolModule from '../components/AppToolModule/zh.vue'
import AppNoFountTipsModules from '../components/AppNoFoundTips/index.vue'
import AppGitHubModules from '../components/AppGithub/zh.vue'
import AppCommentModules from '../components/AppComment/zh.vue'
import AppCanDoModules from '../components/AppCanDo/zh.vue'
import AppPriceModules from '../components/AppPrice/zh.vue'
</script>

<AppSvgIcon />

<AppCanDoModules />

<AppAiWorkflow />

<AppGitHubModules />

<AppCoreModule />

<AppToolModule />

<AppCommentModules />

<AppPriceModules />

<AppNoFountTipsModules />
