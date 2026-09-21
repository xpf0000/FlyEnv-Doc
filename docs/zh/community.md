---
layout: home
title: FlyEnv 社区故事、教程与开发者评测

head:
  - - meta
    - name: description
      content: "发现全球开发者使用 FlyEnv 的真实故事、教程和评测，了解从 XAMPP、Laragon 迁移以及在 Windows、macOS 和 Linux 上构建本地技术栈的实践。"
  - - meta
    - property: og:title
      content: "FlyEnv 社区故事与教程"
  - - meta
    - property: og:description
      content: "来自全球开发者的 FlyEnv 真实文章、教程和视频。"
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/community
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "FlyEnv 社区故事与教程"
  - - meta
    - name: twitter:description
      content: "来自全球开发者的 FlyEnv 真实文章、教程和视频。"
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/community
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/community
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/community
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/community
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/community
---

<script setup>
import AppCommunityPosts from '../components/AppCommunityPosts/index.vue'
import AppCommunityChannels from '../components/AppCommunityChannels/index.vue'
import AppCommunityCTA from '../components/AppCommunityCTA/index.vue'
import posts from '../data/community-posts-zh.json'
</script>

<AppCommunityPosts :posts="posts" locale="zh" />
<AppCommunityChannels title="加入社区" locale="zh" />
<AppCommunityCTA :posts="posts" locale="zh" />
