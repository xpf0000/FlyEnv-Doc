---
layout: home

title: 'FlyEnv - Lingkungan Pengembangan Lokal Native'
titleTemplate: false

head:
  - - meta
    - name: description
      content: 'FlyEnv adalah lingkungan pengembangan lokal native untuk Windows, macOS, dan Linux. Jalankan runtime, database, server web, situs lokal, HTTPS, dan alat AI dari satu aplikasi desktop.'
  - - meta
    - property: og:title
      content: 'FlyEnv - Lingkungan Pengembangan Lokal Native'
  - - meta
    - property: og:description
      content: 'FlyEnv adalah lingkungan pengembangan lokal native untuk Windows, macOS, dan Linux. Jalankan runtime, database, server web, situs lokal, HTTPS, dan alat AI dari satu aplikasi desktop.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/id/
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - meta
    - name: twitter:card
      content: summary
  - - meta
    - name: twitter:title
      content: 'FlyEnv - Lingkungan Pengembangan Lokal Native'
  - - meta
    - name: twitter:description
      content: 'FlyEnv adalah lingkungan pengembangan lokal native untuk Windows, macOS, dan Linux.'
  - - meta
    - name: twitter:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/id/
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
      {"@context":"https://schema.org","@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["Windows","macOS","Linux"],"inLanguage":"id-ID","description":"FlyEnv adalah lingkungan pengembangan lokal native untuk Windows, macOS, dan Linux. Jalankan runtime, database, server web, situs lokal, HTTPS, dan alat AI dari satu aplikasi desktop.","url":"https://flyenv.com/id/","downloadUrl":"https://flyenv.com/id/download","softwareHelp":"https://flyenv.com/id/guide/what-is-flyenv","sameAs":["https://github.com/xpf0000/FlyEnv"],"author":{"@type":"Person","name":"Alex Xu","url":"https://github.com/xpf0000"},"publisher":{"@type":"Organization","name":"FlyEnv","url":"https://flyenv.com/"}}

hero:
  name: 'FlyEnv'
  text: 'Jalankan seluruh stack pengembangan lokal Anda secara native.'
  tagline: 'Kelola runtime, database, server web, situs lokal, dan HTTPS dari satu aplikasi desktop di Windows, macOS, dan Linux, dengan alat pemrograman AI serta MCP yang sudah terintegrasi.'
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv'
  actions:
    - theme: brand
      text: 'Unduh Gratis'
      link: /id/download
    - theme: alt
      text: 'Mulai Cepat'
      link: /id/guide/getting-started
---

<script setup>
import AppSvgIcon from '../components/VueSvgIcon/svg.vue'
import AppAiWorkflow from '../components/AppAiWorkflow/id.vue'
import AppGitHubModules from '../components/AppGithub/id.vue'
import AppCommunityEvidence from '../components/AppCommunityEvidence/HomepageProof.vue'
import communityPosts from '../data/community-posts.json'
import { communityEvidence } from '../data/community-evidence'
import AppHomePositioning from '../components/AppHomePositioning/id.vue'
import AppProjectStacks from '../components/AppProjectStacks/id.vue'
import AppFeaturedModules from '../components/AppFeaturedModules/id.vue'
import AppHomeFinalCta from '../components/AppHomeFinalCta/id.vue'
</script>

<AppSvgIcon />

<AppHomePositioning />

<AppProjectStacks />

<AppCommunityEvidence :posts="communityPosts" :evidence="communityEvidence.id" locale="id" />

<AppFeaturedModules />

<AppAiWorkflow />

<AppGitHubModules />

<AppHomeFinalCta />
