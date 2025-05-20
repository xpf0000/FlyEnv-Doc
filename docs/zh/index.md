---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

titleTemplate: '一体化全栈环境管理工具. 支持macOS / Windows / Linux'

hero:
  name: "FlyEnv"
  text: "开发环境管理，从此简单如飞。"
  tagline: 支持 macOS / Windows / Linux. 一键启动，即刻开发
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv 应用图标'
  actions:
    - theme: brand
      text: 了解 FlyEnv
      link: /zh/guide/what-is-flyenv
    - theme: alt
      text: 快速上手
      link: /zh/guide/getting-started

features:
  - icon:
      src: 'https://oss.macphpstudy.com/image/fast.svg'
      width: '32px'
      height: '32px'
    title: 极致性能，快如闪电
    details: 原生静态二进制运行，拒绝虚拟容器的性能损耗。启动迅速，资源占用极低，让您的开发流程更加流畅。
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: 全栈集成，一应俱全
    details: 集成动态/静态服务器、DNS、FTP，以及 PHP/NodeJS/Java/Go/Python 等多种语言环境，更有数据库、缓存、队列等实用工具，满足您的全方位开发需求。跨平台支持，体验一致。
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    title: 深度优化，直击痛点
    details: 针对开发者日常痛点进行深度优化，提供便捷的日志查看和配置文件管理功能，让您更专注于代码本身。
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: 多项目环境隔离
    details: 支持 Apache/Nginx/Caddy/Tomcat，PHP/NodeJS/Java/Go/Python 多版本共存，以及 MySQL 等数据库的灵活切换，为每个项目打造独立的运行环境。

---

<script setup>
import AppModules from '../components/AppModules/index.vue';
import AppNoFountTipsModules from '../components/AppNoFoundTips/index.vue';
import AppCount from '../components/AppCount/index.vue';
</script>

<AppCount />

<div class="flex justify-center text-6xl font-bold my-48">
多说无益, 产品自会发声!
</div>

## 讨论

[FlyEnv项目：挑战与对未来的思考](https://github.com/xpf0000/FlyEnv/discussions/304)

## ✨ FlyEnv 的独特优势

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div class="flex flex-col">

### ⚡️ 极速多版本切换
告别繁琐的版本管理！FlyEnv 让您在 PHP、NodeJS、Java 等多种语言的不同版本之间**无缝切换**。例如，同时运行 PHP 5.6 和 PHP 8.3，或在 JDK 8 和 JDK 20 之间瞬间切换，一切尽在指尖。

</div>

<div class="flex flex-col">

### ⚙️ 全栈环境一键集成
从 Python/NodeJS/PHP/Go/Java 到  Nginx/Apache/Caddy，再到数据库, 消息队列，FlyEnv **无需命令** 即可搭建您的完整技术栈，省去复杂的配置过程。

</div>

<div class="flex flex-col">

### 🛡️ 项目级环境隔离
为每个项目定制专属的运行环境！FlyEnv 支持 NodeJS/PHP/Python 等语言的**项目级版本管理**。当您通过终端或 PowerShell 进入项目目录时，环境将自动切换，无需任何手动设置。

</div>

<div class="flex flex-col">

### 💪 原生性能，拒绝虚拟化
FlyEnv 以**原生静态二进制**方式运行，摆脱了虚拟容器的性能开销。这意味着更快的启动速度、更低的资源占用和更流畅的开发体验。

</div>

<div class="flex flex-col">

### 🌎 跨平台一致性
无论您使用 macOS、Windows 还是 Linux，FlyEnv 都确保**一致的开发环境**。告别“在我机器上可以运行”的困扰。

</div>

<div class="flex flex-col">

### 🍃 轻量高效
FlyEnv 经过精心优化，**资源占用极低**。同时运行 Nginx、PHP、MySQL 和 Redis，其资源消耗仅为传统 Docker 方案的三分之一。

</div>

<div class="flex flex-col">

### 👨‍💻 开发者友好工具
- **配置与日志管理**: 在 FlyEnv 中直接访问配置文件和日志。实时日志流和错误高亮让调试变得轻而易举。
- **本地 Web 托管**: 轻松创建具有自定义域名和 HTTPS 支持的本地站点。
- **一键 SSL 证书**: 一键生成自签名 SSL 证书。

</div>

<div class="flex flex-col">

### 🏭 面向生产环境
FlyEnv 的配置旨在**贴近真实的生产环境**，让您的开发到部署过程更加平滑。

</div>

</div>

## 🚀 核心模块

### 🤖 AI 助手
<AppModules :type="7" />

### 🌐 网络服务器
<AppModules :type="0" />

### 💾 数据库服务器
<AppModules :type="1" />

### 📧 邮件服务器
<AppModules :type="6" />

### 💻 编程语言
<AppModules :type="2" />

### 🔗 数据队列 & 缓存
<AppModules :type="3" />

### 🔍 搜索引擎
<AppModules :type="5" />

### 🗄️ 对象存储
<AppModules :type="8" />

### 🛠️ 实用工具
<AppModules :type="4" />

<AppNoFountTipsModules />
