---
# 针对 SEO 优化的 VitePress 首页配置
layout: home
markdownStyles: false

title: 'FlyEnv - Môi trường phát triển local native mã nguồn mở'
titleTemplate: false

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv là workspace phát triển local native mã nguồn mở cho macOS, Windows và Linux. Quản lý runtime, cơ sở dữ liệu, site HTTPS và công cụ lập trình AI qua MCP.'
  - - meta
    - property: og:title
      content: 'FlyEnv - Môi trường phát triển local native mã nguồn mở'
  - - meta
    - property: og:description
      content: 'FlyEnv là workspace phát triển local native mã nguồn mở cho macOS, Windows và Linux. Quản lý runtime, cơ sở dữ liệu, site HTTPS và công cụ lập trình AI qua MCP.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: 'FlyEnv - Môi trường phát triển local native mã nguồn mở'
  - - meta
    - name: twitter:description
      content: 'FlyEnv là workspace phát triển local native mã nguồn mở cho macOS, Windows và Linux. Quản lý runtime, cơ sở dữ liệu, site HTTPS và công cụ lập trình AI qua MCP.'
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/
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
      hreflang: vi
      href: https://flyenv.com/vi/
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/
---

<script setup>
import AppNewHome from '../components/AppNewHome/vi.vue'
</script>

<AppNewHome />
