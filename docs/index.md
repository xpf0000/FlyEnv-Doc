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
      text: Download Now
      link: /guide/getting-started
    - theme: alt
      text: Why FlyEnv?
      link: /guide/what-is-flyenv

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
import AppModules from './components/AppModules/index.vue';
import AppNoFountTipsModules from './components/AppNoFoundTips/index.vue';
</script>

<div class="flex flex-col items-center justify-center my-12">
  <div class="text-3xl md:text-[40px] font-bold mb-6 text-center">100% Open Source & Community Driven</div>
  <p class="text-lg text-gray-500 max-w-2xl text-center mb-8">
    Transparent, auditable, and built by developers for developers. Join us on GitHub.
  </p>

  <div class="flex gap-4 mb-8">
    <a href="https://github.com/xpf0000/FlyEnv/stargazers"><img src="https://img.shields.io/github/stars/xpf0000/FlyEnv?style=social" alt="GitHub stars" /></a>
    <a href="https://github.com/xpf0000/FlyEnv/network/members"><img src="https://img.shields.io/github/forks/xpf0000/FlyEnv?style=social" alt="GitHub forks" /></a>
<a href="https://github.com/xpf0000/FlyEnv/network/members"><img src="https://img.shields.io/github/downloads/xpf0000/FlyEnv/total?style=social" alt="Total Downloads" /></a>
  </div>

  <a href="https://github.com/xpf0000/FlyEnv/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=xpf0000/FlyEnv" alt="FlyEnv Contributors" />
  </a>
</div>

<div class="my-16">
  <div class="text-3xl font-bold text-center mb-12">Loved by Developers</div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
    <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-100">
      <div class="flex items-center mb-4">
        <div class="text-xl">⭐⭐⭐⭐⭐</div>
      </div>
      <p class="mb-4 text-gray-600 dark:text-gray-300">"Finally, a real alternative to Laragon on Windows! Docker Desktop was eating up all my RAM. FlyEnv is blazing fast."</p>
      <div class="font-bold text-sm">— Full Stack Developer</div>
    </div>
    <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-100">
      <div class="flex items-center mb-4">
        <div class="text-xl">⭐⭐⭐⭐⭐</div>
      </div>
      <p class="mb-4 text-gray-600 dark:text-gray-300">"The project-level isolation is a game changer. I can work on a legacy PHP 5.6 project and a modern Node 20 app simultaneously without any config hell."</p>
      <div class="font-bold text-sm">— Agency Owner</div>
    </div>
    <div class="p-6 rounded-2xl bg-gray-50 dark:bg-gray-100">
      <div class="flex items-center mb-4">
        <div class="text-xl">⭐⭐⭐⭐⭐</div>
      </div>
      <p class="mb-4 text-gray-600 dark:text-gray-300">"I love the 'Pay with Code' license model. Fixed a small translation issue and got a full license. This is the true spirit of Open Source."</p>
      <div class="font-bold text-sm">— Open Source Contributor</div>
    </div>
  </div>
</div>

<hr class="border-gray-200 dark:border-gray-700 my-12 opacity-50" />
<div class="my-16 px-4">
  <div class="text-center max-w-3xl mx-auto mb-12">
    <h2 class="text-3xl font-bold mb-4">Fair & Flexible Licensing</h2>
    <p class="text-lg text-gray-500">
      FlyEnv is free to download and use. We believe in fair exchange—support the project to unlock unlimited potential.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
    <div class="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 flex flex-col">
      <h3 class="text-2xl font-bold mb-2">Community Edition</h3>
      <div class="text-4xl font-bold mb-6">$0 <span class="text-lg font-normal text-gray-500">/ forever</span></div>
      <p class="text-gray-500 mb-6">Perfect for hobbyists and learners.</p>
      <ul class="space-y-3 mb-8 flex-1">
        <li class="flex items-center">✅ Native Speed & All Modules</li>
        <li class="flex items-center">✅ Create up to 3 Local Sites</li>
        <li class="flex items-center">✅ 3-Day AI Assistant Trial</li>
        <li class="flex items-center">✅ Community Support</li>
      </ul>
      <a href="/guide/getting-started" class="block text-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 py-3 rounded-lg font-semibold transition">Get Started</a>
    </div>
    <div class="border-2 border-brand rounded-2xl p-8 flex flex-col relative overflow-hidden">
      <div class="absolute top-0 right-0 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">RECOMMENDED</div>
      <h3 class="text-2xl font-bold mb-2">Pro License</h3>
      <div class="text-lg font-bold mb-6 text-green-600">Pay with Money, Code, or Voice</div>
      <p class="text-gray-500 mb-6">For professional developers & heavy users.</p>
      <ul class="space-y-3 mb-8 flex-1">
        <li class="flex items-center">🚀 <strong>Unlimited</strong> Local Sites</li>
        <li class="flex items-center">🤖 <strong>Unlimited</strong> AI Assistant Access</li>
        <li class="flex items-center">🛡️ Multi-Device Sync Support</li>
        <li class="flex items-center">❤️ Support Open Source Development</li>
      </ul>
      <div class="space-y-2">
         <div class="text-sm text-center text-gray-500 mb-2">How to get a Pro License? Choose one:</div>
         <div class="grid grid-cols-3 gap-2 text-center text-xs">
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
                <div class="font-bold">💰 Donate</div>
                <div class="scale-90 text-gray-500">Any amount</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
                <div class="font-bold">💻 Contribute</div>
                <div class="scale-90 text-gray-500">Submit a PR</div>
            </div>
            <div class="bg-gray-50 dark:bg-white/10 p-2 rounded">
                <div class="font-bold">📢 Promote</div>
                <div class="scale-90 text-gray-500">Write a Post</div>
            </div>
         </div>
      </div>
    </div>
  </div>
</div>

<hr class="border-gray-200 dark:border-gray-700 my-12 opacity-50" />

<div class="my-16">
  <h2 class="text-3xl font-bold text-center mb-12">Everything You Need, Nothing You Don't</h2>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <div class="flex flex-col">
      <h3>⚡️ Instant Version Switching</h3>
      <p class="text-sm text-gray-500">Run PHP 5.6 and PHP 8.3 simultaneously, or switch between JDK 8 and JDK 20 instantly.</p>
    </div>
    <div class="flex flex-col">
      <h3>⚙️ Full-Stack One-Click Setup</h3>
      <p class="text-sm text-gray-500">From Python/Node/Go to Nginx/Redis. Build your complete stack without complex commands.</p>
    </div>
    <div class="flex flex-col">
      <h3>🛡️ Project-Level Isolation</h3>
      <p class="text-sm text-gray-500">Environments auto-switch when you enter project directories. Zero manual setup required.</p>
    </div>
    <div class="flex flex-col">
      <h3>🍃 Resource Efficiency</h3>
      <p class="text-sm text-gray-500">Optimized for minimal RAM usage. Running a full stack consumes 1/3 resources of Docker.</p>
    </div>
    <div class="flex flex-col">
      <h3>🌎 Cross-Platform</h3>
      <p class="text-sm text-gray-500">Consistent behavior on Windows, macOS, and Linux. No "works on my machine" issues.</p>
    </div>
    <div class="flex flex-col">
      <h3>👨‍💻 Developer Tools</h3>
      <p class="text-sm text-gray-500">Real-time logs, config editor, and local HTTPS/SSL support out of the box.</p>
    </div>
  </div>
</div>

<div class="mt-24">
  <h2 class="text-3xl font-bold text-center mb-8">Supported Modules Library</h2>
  <p class="text-center text-gray-500 mb-12">Click to see supported versions. Only install what you need.</p>

<h3 class="text-xl font-bold mt-8 mb-4">🤖 AI Assistant</h3>
<AppModules :type="7" />

<h3 class="text-xl font-bold mt-8 mb-4">🐳 Containers</h3>
<AppModules :type="9" />

<h3 class="text-xl font-bold mt-8 mb-4">🌐 Web Servers</h3>
<AppModules :type="0" />

<h3 class="text-xl font-bold mt-8 mb-4">💾 Database Servers</h3>
<AppModules :type="1" />

<h3 class="text-xl font-bold mt-8 mb-4">📧 Mail Servers</h3>
<AppModules :type="6" />

<h3 class="text-xl font-bold mt-8 mb-4">💻 Programming Languages</h3>
<AppModules :type="2" />

<h3 class="text-xl font-bold mt-8 mb-4">🔗 Data Queues & Caching</h3>
<AppModules :type="3" />

<h3 class="text-xl font-bold mt-8 mb-4">🔍 Search Engines</h3>
<AppModules :type="5" />

<h3 class="text-xl font-bold mt-8 mb-4">🗄️ Object Storage</h3>
<AppModules :type="8" />

<h3 class="text-xl font-bold mt-8 mb-4">🛠️ Utilities</h3>
<AppModules :type="4" />

  <AppNoFountTipsModules />
</div>