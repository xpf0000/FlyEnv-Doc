---
# 针对 SEO 优化的 VitePress 首页配置
layout: home
markdownStyles: false

title: 'FlyEnv - Open Source Native Local Development Environment'
titleTemplate: false

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv is an open-source native workspace for local development on macOS, Windows and Linux. Manage runtimes, databases, HTTPS sites and AI coding tools with MCP.'
  - - meta
    - property: og:title
      content: 'FlyEnv - Open Source Native Local Development Environment'
  - - meta
    - property: og:description
      content: 'FlyEnv is an open-source native workspace for local development on macOS, Windows and Linux. Manage runtimes, databases, HTTPS sites and AI coding tools with MCP.'
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
      content: 'FlyEnv - Open Source Native Local Development Environment'
  - - meta
    - name: twitter:description
      content: 'FlyEnv is an open-source native workspace for local development on macOS, Windows and Linux. Manage runtimes, databases, HTTPS sites and AI coding tools with MCP.'
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
---

<script setup>
import AppNewHome from './components/AppNewHome/en.vue'
</script>

<AppNewHome />
