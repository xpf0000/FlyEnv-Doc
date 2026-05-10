---
layout: home

head:
  - - meta
    - name: description
      content: "Discover real developer stories, tutorials, and reviews about FlyEnv. Learn how teams replace XAMPP, Docker, and Laragon with FlyEnv on macOS and Windows."
  - - meta
    - property: og:title
      content: "FlyEnv Community Stories & Tutorials"
  - - meta
    - property: og:description
      content: "Real community articles, tutorials, and videos about FlyEnv from developers around the world."
  - - script
    - type: application/ld+json
    - |
      {"@context":"https://schema.org","@type":"ItemList","name":"FlyEnv Community Articles","description":"Community-driven tutorials, reviews, and stories about FlyEnv from developers worldwide.","itemListElement":[{"@type":"ListItem","position":1,"item":{"@type":"TechArticle","headline":"Tutorial Lengkap FlyEnv untuk Laravel: Setup Local Environment Alternatif XAMPP","description":"A comprehensive guide on why FlyEnv replaces XAMPP for PHP development on macOS with project-level version isolation and automatic SSL.","author":{"@type":"Person","name":"Arizainalf"},"publisher":{"@type":"Organization","name":"Medium"},"datePublished":"2025-05-14","about":{"@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"]}}},{"@type":"ListItem","position":2,"item":{"@type":"TechArticle","headline":"FlyEnv: Alternatif Terbaik Laragon untuk Pengembangan Web Lokal (Setup & Review)","description":"Experience sharing on migrating from Laragon to FlyEnv, highlighting multi-version runtime management and cross-platform support.","author":{"@type":"Person","name":"Caturputra"},"publisher":{"@type":"Organization","name":"Medium"},"datePublished":"2025-05-23","about":{"@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"]}}},{"@type":"ListItem","position":3,"item":{"@type":"TechArticle","headline":"FlyEnv: Panduan Lengkap Instalasi dan Konfigurasi Development Environment All-in-One","description":"Complete installation and configuration guide for FlyEnv covering PHP, Node.js, Java and project-level environment isolation.","author":{"@type":"Person","name":"Agus Prayogi"},"publisher":{"@type":"Organization","name":"Medium"},"datePublished":"2025-05-30","about":{"@type":"SoftwareApplication","name":"FlyEnv","applicationCategory":"DeveloperApplication","operatingSystem":["macOS","Windows","Linux"]}}}]}
---

<script setup>
import AppCommunityPosts from './components/AppCommunityPosts/index.vue'
import AppCommunityChannels from './components/AppCommunityChannels/index.vue'
import AppCommunityCTA from './components/AppCommunityCTA/index.vue'
import posts from './data/community-posts.json'
</script>

<AppCommunityPosts :posts="posts" locale="en" />
<AppCommunityChannels title="Join the Community" locale="en" />
<AppCommunityCTA locale="en" />
