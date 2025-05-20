---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: 'All-in-One Full-Stack Environment Management Tool. Supports macOS/Windows/Linux'

hero:
  name: "FlyEnv"
  text: "All-in-One Full-Stack Environment Management Tool"
  tagline: Supports macOS/Windows/Linux. One-click setup, instant development
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
    title: Lightning-Fast Performance
    details: Native static binary execution eliminates virtualization overhead. Quick startup with minimal resource usage ensures smoother development workflow.
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: Full-Stack Integration
    details: Comprehensive suite including dynamic/static servers, DNS, FTP, and multiple language environments (PHP/NodeJS/Java/Go/Python), plus databases, caching, queues and more. Cross-platform consistency guaranteed.
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: Deep Optimization
    details: Pain-point focused optimizations with convenient log viewing and config file management, letting you focus on coding.
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: Multi-Project Isolation
    details: Supports Apache/Nginx/Caddy/Tomcat, multi-version coexistence for PHP/NodeJS/Java/Go/Python, and flexible database switching to create isolated environments per project.

---

<script setup>
import AppModules from './components/AppModules/index.vue';
import AppNoFountTipsModules from './components/AppNoFoundTips/index.vue';
import AppCount from './components/AppCount/index.vue';
</script>

<AppCount />

<div class="flex justify-center text-6xl font-bold my-48">
Less Talk, More Product.
</div>

## Discussions

[FlyEnv Project: Reflections on Challenges and Future](https://github.com/xpf0000/FlyEnv/discussions/304)

## ✨ FlyEnv's Unique Advantages

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div class="flex flex-col">

### ⚡️ Instant Version Switching
Bid farewell to complex version management! FlyEnv enables **seamless transitions** between different versions of PHP, NodeJS, Java and more. Run PHP 5.6 and PHP 8.3 simultaneously, or switch between JDK 8 and JDK 20 instantly - all at your fingertips.

</div>

<div class="flex flex-col">

### ⚙️ Full-Stack One-Click Setup
From Python/NodeJS/PHP/Go/Java to Nginx/Apache/Caddy, plus databases and message queues - FlyEnv builds your complete tech stack **without commands**, eliminating complex configurations.

</div>

<div class="flex flex-col">

### 🛡️ Project-Level Isolation
Custom dedicated environments for each project! FlyEnv supports **project-specific version management** for NodeJS/PHP/Python etc. When entering project directories via terminal/PowerShell, environments auto-switch with zero manual setup.

</div>

<div class="flex flex-col">

### 💪 Native Performance, No Virtualization
FlyEnv runs as **native static binaries**, free from container overhead. This means faster startups, lower resource consumption, and smoother development.

</div>

<div class="flex flex-col">

### 🌎 Cross-Platform Consistency
Whether on macOS, Windows or Linux, FlyEnv ensures **identical environments**. No more "works on my machine" issues.

</div>

<div class="flex flex-col">

### 🍃 Lightweight Efficiency
Optimized for **minimal resource usage**. Running Nginx, PHP, MySQL and Redis simultaneously consumes just one-third the resources of traditional Docker solutions.

</div>

<div class="flex flex-col">

### 👨‍💻 Developer-Friendly Tools
- **Config & Log Management**: Direct access to config files and logs. Real-time log streaming with error highlighting simplifies debugging.
- **Local Web Hosting**: Easily create local sites with custom domains and HTTPS support.
- **One-Click SSL**: Generate self-signed SSL certificates instantly.

</div>

<div class="flex flex-col">

### 🏭 Production-Ready
FlyEnv configurations mirror **real production environments**, smoothing the development-to-deployment pipeline.

</div>

</div>

## 🚀 Core Modules

### 🤖 AI Assistant
<AppModules :type="7" />

### 🌐 Web Servers
<AppModules :type="0" />

### 💾 Database Servers
<AppModules :type="1" />

### 📧 Mail Servers
<AppModules :type="6" />

### 💻 Programming Languages
<AppModules :type="2" />

### 🔗 Data Queues & Caching
<AppModules :type="3" />

### 🔍 Search Engines
<AppModules :type="5" />

### 🗄️ Object Storage
<AppModules :type="8" />

### 🛠️ Utilities
<AppModules :type="4" />

<AppNoFountTipsModules />
