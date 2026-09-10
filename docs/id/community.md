---
layout: home
title: Cerita Komunitas & Tutorial Pengembang FlyEnv

head:
  - - meta
    - name: description
      content: 'Temukan cerita, tutorial, dan ulasan nyata tentang FlyEnv, termasuk pengalaman berpindah dari XAMPP dan Laragon serta membangun stack lokal di Windows, macOS, dan Linux.'
  - - meta
    - property: og:title
      content: 'Cerita Komunitas & Tutorial FlyEnv'
  - - meta
    - property: og:description
      content: 'Artikel, tutorial, dan video nyata tentang FlyEnv dari pengembang di seluruh dunia.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/community
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: 'Cerita Komunitas & Tutorial FlyEnv'
  - - meta
    - name: twitter:description
      content: 'Artikel, tutorial, dan video nyata tentang FlyEnv dari pengembang di seluruh dunia.'
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/community
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
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"CollectionPage","name":"Cerita Komunitas FlyEnv","inLanguage":"id-ID","description":"Tutorial, ulasan, dan cerita komunitas FlyEnv dari pengembang di seluruh dunia.","url":"https://flyenv.com/id/community"}
---

<script setup>
import AppCommunityPosts from '../components/AppCommunityPosts/index.vue'
import AppCommunityChannels from '../components/AppCommunityChannels/index.vue'
import AppCommunityCTA from '../components/AppCommunityCTA/index.vue'
import posts from '../data/community-posts.json'
</script>

<AppCommunityPosts :posts="posts" locale="id" />
<AppCommunityChannels title="Bergabung dengan Komunitas" locale="id" />
<AppCommunityCTA :posts="posts" locale="id" />
