---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: 'Full-Stack Development Environment Management Tool. The Native Alternative to Docker/XAMPP for Windows & macOS'

hero:
  name: "FlyEnv"
  text: "Full-Stack Development Environment Manager"
  tagline: "Supports macOS/Windows/Linux. One-click setup, instant development"
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv App Icon'
  actions:
    - theme: brand
      text: About FlyEnv
      link: /guide/what-is-flyenv
    - theme: alt
      text: Quick Start
      link: /guide/getting-started

features:
  - icon:
      src: 'https://oss.macphpstudy.com/image/fast.svg'
      width: '32px'
      height: '32px'
    title: Native Speed (No Docker)
    details: Runs Nginx, PHP, MySQL, and Redis as native static binaries. Starts in milliseconds and uses 1/3 the RAM of Docker containers.
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: Universal Native Stack
    details: A unified replacement for <strong>NVM + XAMPP + Docker Desktop</strong>. Instantly run PHP, Node, Java, Python, Go, MySQL, Redis, and more—configured in seconds.
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: Modular & On-Demand
    details: Don't need Java? It won't be installed. FlyEnv stays lightweight by only downloading the runtimes you actually use.
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: Project-Level Isolation
    details: Automatically switches Node/PHP/Python versions when you cd into a project. No more global version conflicts.
---

<script setup>
import AppSvgIcon from './components/VueSvgIcon/svg.vue';
import AppCoreModule from './components/AppCoreModule/en.vue';
import AppToolsModule from './components/AppToolModule/en.vue';
import AppNoFountTipsModules from './components/AppNoFoundTips/index.vue';
import AppGitHubModules from './components/AppGithub/en.vue';
import AppCommentModules from './components/AppComment/index.vue';
import AppCanDoModules from './components/AppCanDo/en.vue';
import AppPriceModules from './components/AppPrice/en.vue';
</script>

<AppSvgIcon />

<AppCanDoModules />

<AppCoreModule />

<AppToolsModule />

<AppGitHubModules />

<AppCommentModules />

<AppPriceModules />

<AppNoFountTipsModules />