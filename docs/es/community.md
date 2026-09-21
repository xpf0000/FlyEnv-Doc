---
layout: home
title: Historias de la comunidad y tutoriales de desarrolladores de FlyEnv

head:
  - - meta
    - name: description
      content: 'Lee historias de desarrolladores de FlyEnv, experiencias de migración, tutoriales y reseñas sobre stacks locales en macOS, Windows y Linux.'
  - - meta
    - property: og:title
      content: "Historias de la comunidad y tutoriales de FlyEnv"
  - - meta
    - property: og:description
      content: "Artículos, tutoriales y vídeos reales de la comunidad sobre FlyEnv, escritos por desarrolladores de todo el mundo."
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/community
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: "Historias de la comunidad y tutoriales de FlyEnv"
  - - meta
    - name: twitter:description
      content: "Artículos, tutoriales y vídeos reales de la comunidad sobre FlyEnv, escritos por desarrolladores de todo el mundo."
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/community
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
      hreflang: es-ES
      href: https://flyenv.com/es/community
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

<AppCommunityPosts :posts="posts" locale="es" />
<AppCommunityChannels title="Únete a la comunidad" locale="es" />
<AppCommunityCTA :posts="posts" locale="es" />
