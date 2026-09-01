---
layout: home

title: 'FlyEnv - 原生本地开发环境'
titleTemplate: false

head:
  - - meta
    - name: description
      content: 'FlyEnv 是适用于 macOS、Windows 和 Linux 的原生本地开发环境。在一个桌面应用中管理运行时、数据库、Web 服务器、本地站点和 HTTPS，并内置 AI 编程工具与 MCP。'
  - - meta
    - property: og:title
      content: 'FlyEnv - 原生本地开发环境'
  - - meta
    - property: og:description
      content: 'FlyEnv 是适用于 macOS、Windows 和 Linux 的原生本地开发环境。在一个桌面应用中管理运行时、数据库、Web 服务器、本地站点和 HTTPS，并内置 AI 编程工具与 MCP。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: 'FlyEnv - 原生本地开发环境'
  - - meta
    - name: twitter:description
      content: 'FlyEnv 是适用于 macOS、Windows 和 Linux 的原生本地开发环境。'
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["Windows","macOS","Linux"],"inLanguage":"zh-CN","description":"FlyEnv 是适用于 macOS、Windows 和 Linux 的原生本地开发环境。在一个桌面应用中管理运行时、数据库、Web 服务器、本地站点和 HTTPS，并内置 AI 编程工具与 MCP。","url":"https://flyenv.com/zh/","downloadUrl":"https://flyenv.com/zh/download","softwareHelp":"https://flyenv.com/zh/guide/what-is-flyenv","sameAs":["https://github.com/xpf0000/FlyEnv"],"author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://flyenv.com/"}}

hero:
  name: "FlyEnv"
  text: "原生运行完整的本地开发技术栈"
  tagline: "在 Windows、macOS 和 Linux 上，通过一个桌面应用管理运行时、数据库、Web 服务器、本地站点和 HTTPS。内置 AI 编程工具与 MCP。"
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv'
  actions:
    - theme: brand
      text: 免费下载
      link: /zh/download
    - theme: alt
      text: 快速上手
      link: /zh/guide/getting-started

---

<script setup>
import AppSvgIcon from '../components/VueSvgIcon/svg.vue'
import AppAiWorkflow from '../components/AppAiWorkflow/zh.vue'
import AppGitHubModules from '../components/AppGithub/zh.vue'
import AppCommunityEvidence from '../components/AppCommunityEvidence/HomepageProof.vue'
import communityPosts from '../data/community-posts-zh.json'
import { communityEvidence } from '../data/community-evidence'
import AppHomePositioning from '../components/AppHomePositioning/zh.vue'
import AppProjectStacks from '../components/AppProjectStacks/zh.vue'
import AppFeaturedModules from '../components/AppFeaturedModules/zh.vue'
import AppHomeFinalCta from '../components/AppHomeFinalCta/zh.vue'
</script>

<AppSvgIcon />

<AppHomePositioning />

<AppProjectStacks />

<AppCommunityEvidence :posts="communityPosts" :evidence="communityEvidence.zh" locale="zh" />

<AppFeaturedModules />

<AppAiWorkflow />

<AppGitHubModules />

<AppHomeFinalCta />
