---
layout: home
title: Câu chuyện cộng đồng & hướng dẫn lập trình viên FlyEnv

head:
  - - meta
    - name: description
      content: 'Đọc các câu chuyện của lập trình viên về FlyEnv, trải nghiệm chuyển đổi, hướng dẫn, và các đánh giá về local stack trên macOS, Windows, và Linux.'
  - - meta
    - property: og:title
      content: "Câu chuyện cộng đồng & hướng dẫn của FlyEnv"
  - - meta
    - property: og:description
      content: "Các bài viết, hướng dẫn, và video thực tế từ cộng đồng về FlyEnv, chia sẻ bởi các lập trình viên trên khắp thế giới."
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/community
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "Câu chuyện cộng đồng & hướng dẫn của FlyEnv"
  - - meta
    - name: twitter:description
      content: "Các bài viết, hướng dẫn, và video thực tế từ cộng đồng về FlyEnv, chia sẻ bởi các lập trình viên trên khắp thế giới."
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/community
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
      hreflang: vi
      href: https://flyenv.com/vi/community
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/community
---

<script setup>
import AppCommunityPosts from '../components/AppCommunityPosts/index.vue'
import AppCommunityChannels from '../components/AppCommunityChannels/index.vue'
import AppCommunityCTA from '../components/AppCommunityCTA/index.vue'
import posts from '../data/community-posts.json'
</script>

<AppCommunityPosts :posts="posts" locale="vi" />
<AppCommunityChannels title="Tham gia cộng đồng" locale="vi" />
<AppCommunityCTA :posts="posts" locale="vi" />
