---
layout: home

head:
  - - meta
    - name: description
      content: "发现全球开发者使用 FlyEnv 的真实故事、教程和评测。了解如何在 macOS 和 Windows 上用 FlyEnv 替代 XAMPP、Docker 和 Laragon。"
  - - meta
    - property: og:title
      content: "FlyEnv 社区故事与教程"
  - - meta
    - property: og:description
      content: "来自全球开发者的 FlyEnv 真实文章、教程和视频。"
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"ItemList","name":"FlyEnv 社区文章","description":"来自全球开发者的 FlyEnv 教程、评测和真实故事。","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"TechArticle","headline":"环境管理神器flyenv","url":"https://juejin.cn/post/7666754297045614628","description":"作者从维护多个 PHP、Node.js 与数据库服务项目的日常场景出发，介绍了通过统一图形界面安装不同运行时、按项目切换版本、管理本地服务、配置站点并查看日志的体验与适用场景。","author":{"@type":"Person","name":"西雨东晴"},"publisher":{"@type":"Organization","name":"掘金"},"datePublished":"2026-07-27","about":{"@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"]}}}]}
---

<script setup>
import AppCommunityPosts from '../components/AppCommunityPosts/index.vue'
import AppCommunityChannels from '../components/AppCommunityChannels/index.vue'
import AppCommunityCTA from '../components/AppCommunityCTA/index.vue'
import posts from '../data/community-posts-zh.json'
</script>

<AppCommunityPosts :posts="posts" locale="zh" />
<AppCommunityChannels title="加入社区" locale="zh" />
<AppCommunityCTA locale="zh" />
