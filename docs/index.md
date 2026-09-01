---
# 针对 SEO 优化的 VitePress 首页配置
layout: home

title: 'FlyEnv - Native Local Development Environment'
titleTemplate: false

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv is a native local development environment for Windows, macOS and Linux. Run runtimes, databases, web servers, local sites, HTTPS and AI tools from one desktop app.'
  - - meta
    - property: og:title
      content: 'FlyEnv - Native Local Development Environment'
  - - meta
    - property: og:description
      content: 'FlyEnv is a native local development environment for Windows, macOS and Linux. Run runtimes, databases, web servers, local sites, HTTPS and AI tools from one desktop app.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: 'FlyEnv - Native Local Development Environment'
  - - meta
    - name: twitter:description
      content: 'FlyEnv is a native local development environment for Windows, macOS and Linux.'
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/
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
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["Windows","macOS","Linux"],"description":"FlyEnv is a native local development environment for Windows, macOS and Linux. Run runtimes, databases, web servers, local sites, HTTPS and AI tools from one desktop app.","url":"https://flyenv.com/","downloadUrl":"https://flyenv.com/download","softwareHelp":"https://flyenv.com/guide/what-is-flyenv","sameAs":["https://github.com/xpf0000/FlyEnv"],"author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://flyenv.com/"}}

hero:
  name: "FlyEnv"
  text: "Run your complete local development stack natively."
  tagline: "Manage runtimes, databases, web servers, local sites and HTTPS from one desktop app on Windows, macOS and Linux — with AI coding tools and MCP built in."
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv'
  actions:
    - theme: brand
      text: 'Download Free'
      link: /download
    - theme: alt
      text: 'Quick Start'
      link: /guide/getting-started

---

<script setup>
import AppSvgIcon from './components/VueSvgIcon/svg.vue';
import AppAiWorkflow from './components/AppAiWorkflow/en.vue';
import AppGitHubModules from './components/AppGithub/en.vue';
import AppCommunityEvidence from './components/AppCommunityEvidence/HomepageProof.vue';
import communityPosts from './data/community-posts.json';
import { communityEvidence } from './data/community-evidence';
import AppHomePositioning from './components/AppHomePositioning/en.vue';
import AppProjectStacks from './components/AppProjectStacks/en.vue';
import AppFeaturedModules from './components/AppFeaturedModules/en.vue';
import AppHomeFinalCta from './components/AppHomeFinalCta/en.vue';
</script>

<AppSvgIcon />

<AppHomePositioning />

<AppProjectStacks />

<AppCommunityEvidence :posts="communityPosts" :evidence="communityEvidence.en" locale="en" />

<AppFeaturedModules />

<AppAiWorkflow />

<AppGitHubModules />

<AppHomeFinalCta />
