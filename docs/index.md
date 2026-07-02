---
# 针对 SEO 优化的 VitePress 首页配置
layout: home

title: 'FlyEnv - Native Local Stack, AI Coding CLI & MCP Workspace'
titleTemplate: false

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv is a native desktop workspace for local runtimes, services, AI coding CLIs, and the FlyEnv MCP Server. Run projects on macOS, Windows, and Linux without Docker overhead.'
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"],"description":"FlyEnv is a native desktop workspace for local runtimes, services, AI coding CLIs, and the FlyEnv MCP Server. Run projects without Docker overhead and connect local context to AI tools.","url":"https://www.flyenv.com/","downloadUrl":"https://www.flyenv.com/download","softwareHelp":"https://www.flyenv.com/guide/what-is-flyenv","author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://www.flyenv.com"},"offers":{"@type":"Offer","price":"0","priceCurrency":"USD"}}

hero:
  name: "FlyEnv"
  # 优化：直接点出“它是谁的替代品”，吸引正在寻找 Docker/XAMPP 替代方案的用户
  text: "Native Local Stack, AI Coding CLI & MCP Workspace"
  tagline: "Run PHP, Node.js, Python, databases, local sites, AI coding clients, and the FlyEnv MCP Server from one desktop app. A faster native alternative to Docker, XAMPP, Herd, and scattered CLI tooling."
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv - Native local stack, AI coding CLI, and MCP workspace'
  actions:
    - theme: brand
      text: 'Download Free'
      link: /download
    - theme: alt
      text: 'Quick Start'
      link: /guide/getting-started

features:
  - icon:
      src: 'https://oss.macphpstudy.com/image/fast.svg'
      width: '32px'
      height: '32px'
    title: Native Local Stack
    details: Run runtimes, web servers, databases, queues, mail testing, and HTTPS as native binaries with faster startup and lower RAM than container-heavy setups.
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: AI Coding CLI Workspace
    details: Install and manage Claude Code, Codex, OpenCode, Kimi, Antigravity CLI, and GitHub Copilot CLI from the same desktop workspace as your projects.
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: Built-in MCP Server
    details: Expose local services, sites, configs, logs, and selected lifecycle actions to AI clients through the FlyEnv MCP Server without hand-editing every integration.
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: Project & Ops Utilities
    details: Switch versions per project, manage local domains and SSL, tunnel with Cloudflare, schedule cron jobs, and use built-in dev tools from one app.
---

<script setup>
import AppSvgIcon from './components/VueSvgIcon/svg.vue';
import AppAiWorkflow from './components/AppAiWorkflow/en.vue';
import AppCoreModule from './components/AppCoreModule/en.vue';
import AppToolsModule from './components/AppToolModule/en.vue';
import AppNoFountTipsModules from './components/AppNoFoundTips/index.vue';
import AppGitHubModules from './components/AppGithub/en.vue';
import AppCommentModules from './components/AppComment/index.vue';
import AppCanDoModules from './components/AppCanDo/en.vue';
import AppPriceModules from './components/AppPrice/en.vue';
</script>

<AppSvgIcon />

<AppCanDoModules />

<AppAiWorkflow />

<AppGitHubModules />

<AppCoreModule />

<AppToolsModule />

<AppCommentModules />

<AppPriceModules />

<AppNoFountTipsModules />
