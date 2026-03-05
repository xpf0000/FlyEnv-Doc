---
# 针对 SEO 优化的 VitePress 首页配置
layout: home

title: 'FlyEnv | Native PHP & Node.js Environment Manager | Best Docker Alternative'
titleTemplate: 'Fast, Native, and Lightweight Local Development Toolbox'

# 在 head 中显式添加 Meta Description，提升搜索结果的点击率 (CTR)
head:
  - - meta
    - name: description
      content: 'FlyEnv is a lightning-fast native alternative to Docker and XAMPP. Run PHP, Node.js, and Python with zero config. Includes built-in Offline AI Agent (Ollama, DeepSeek 3.2, Qwen 3.5, Gemma 3), PHP Obfuscator, and automatic SSL.'

hero:
  name: "FlyEnv"
  # 优化：直接点出“它是谁的替代品”，吸引正在寻找 Docker/XAMPP 替代方案的用户
  text: "The Native Alternative to Docker & XAMPP"
  # 优化：加入 "Offline AI Agent" 和 "Instant Setup"，对应 GSC 中的高印象词汇
  tagline: "High-performance local development environment for PHP, Node.js, and Python. Run Offline AI Agents and manage local sites with zero configuration."
  image:
    src: 'https://oss.macphpstudy.com/image/app-icon.png'
    alt: 'FlyEnv - Native PHP and AI Development Environment'
  actions:
    - theme: brand
      text: 'Get Started Free'
      link: /guide/getting-started
    - theme: alt
      text: 'Explore Features'
      link: /guide/what-is-flyenv

features:
  - icon:
      src: 'https://oss.macphpstudy.com/image/fast.svg'
      width: '32px'
      height: '32px'
    title: Native Speed (No Docker)
    # 优化：强调“低资源占用”，这是 Docker 用户最头疼的痛点
    details: Runs Nginx, PHP, and MySQL as native binaries. Starts in milliseconds and uses 80% less RAM than Docker Desktop.
  - icon:
      src: 'https://oss.macphpstudy.com/image/deep.svg'
      width: '32px'
      height: '32px'
    # 优化：针对 GSC 中 4500+ 曝光的 AI 词汇
    title: Private Offline AI Agents
    details: Build and run local AI Agents with integrated Ollama. Seamlessly deploy **Qwen 3.5, Gemma 3, and GLM-5**. Keep your code and data 100% private with zero latency.
  - icon:
      src: 'https://oss.macphpstudy.com/image/all.svg'
      width: '32px'
      height: '32px'
    title: Universal Native Stack
    # 优化：提及 NVM 和 PHP Monitor，覆盖更多工具类搜索词
    details: A unified replacement for NVM, XAMPP, and Laragon. Switch between PHP 5.6 to 8.4 and multiple Node.js versions instantly.
  - icon:
      src: 'https://oss.macphpstudy.com/image/same.svg'
      width: '32px'
      height: '32px'
    title: Pro Dev Utilities
    # 优化：提及 GSC 中排名较高的 PHP Obfuscator 工具
    details: Includes built-in PHP Obfuscator, SSL generator, Mailpit, and Cloudflare Tunneling for seamless local-to-web testing.
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