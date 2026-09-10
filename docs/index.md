---
# 针对 SEO 优化的 VitePress 首页配置
layout: home
markdownStyles: false

title: 'FlyEnv - Open Source Local Development Environment for AI Agents'
titleTemplate: false

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv is an open-source local development workspace for AI agents on macOS, Windows, and Linux, with runtimes, databases, web servers, sites, HTTPS, and MCP.'
  - - meta
    - property: og:title
      content: 'FlyEnv - Open Source Local Development Environment for AI Agents'
  - - meta
    - property: og:description
      content: 'FlyEnv is an open-source local development environment for AI agents on macOS, Windows and Linux. Manage PHP, Node.js, Python, databases, web servers, local sites and HTTPS with FlyEnv MCP.'
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
      content: 'FlyEnv - Open Source Local Development Environment for AI Agents'
  - - meta
    - name: twitter:description
      content: 'FlyEnv is an open-source local development environment for AI agents on macOS, Windows and Linux.'
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
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["Windows","macOS","Linux"],"description":"FlyEnv is an open-source local development environment for AI agents on macOS, Windows and Linux. Manage PHP, Node.js, Python, databases, web servers, local sites and HTTPS with FlyEnv MCP.","url":"https://flyenv.com/","downloadUrl":"https://flyenv.com/download","softwareHelp":"https://flyenv.com/guide/what-is-flyenv","sameAs":["https://github.com/xpf0000/FlyEnv"],"author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://flyenv.com/"}}
---

<script setup>
import AppNewHome from './components/AppNewHome/en.vue'
</script>

<AppNewHome />
