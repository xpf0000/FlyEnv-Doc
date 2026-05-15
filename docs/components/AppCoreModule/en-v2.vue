<template>
  <div class="transition-colors duration-300  text-gray-900 dark:bg-[#0B1020] dark:text-white">

    <div class="max-w-7xl mx-auto px-6 py-3">

      <!-- Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center rounded-full px-4 py-2 text-sm mb-6 border border-cyan-200 bg-cyan-50 text-cyan-700 dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-cyan-300">
          FlyEnv • Native AI Development Platform
        </div>

        <h1 class="text-5xl md:text-6xl font-black tracking-tight">
          🚀 Core Modules
        </h1>

        <p class="w-full flex justify-center mt-6 text-lg leading-8 text-gray-600 dark:text-slate-300">
          A unified native development stack for runtimes, databases, AI agents, infrastructure and modern workflows.
        </p>
      </div>

      <!-- AI Banner -->
      <div class="mb-14 rounded-3xl p-8 border shadow-lg border-cyan-200 bg-gradient-to-br from-cyan-50 to-violet-50 shadow-gray-200 dark:border-cyan-400/20 dark:from-cyan-500/10 dark:to-violet-500/10 dark:shadow-cyan-500/10">

        <div class="flex flex-col lg:flex-row gap-8 justify-between">
          <div class="max-w-3xl">
            <div class="inline-flex rounded-full bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 text-sm text-cyan-300 mb-5">
              AI-Native Development
            </div>
            <h2 class="text-4xl font-black mb-4 no-border">Built for the AI Development Era</h2>
            <p class="text-lg leading-8 text-gray-600 dark:text-slate-300">
              FlyEnv integrates native runtimes, vector databases, AI agents and infrastructure into one platform.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-4 min-w-[280px] flex-shrink-0">
            <div v-for="item in aiItems" :key="item"
                 class="flex-shrink-0 flex items-center justify-center rounded-2xl px-4 py-3 text-center font-semibold border transition border-cyan-200 bg-white hover:bg-gray-100 dark:border-cyan-400/20 dark:bg-white/5 dark:hover:bg-white/10">
              {{ item }}
            </div>
          </div>
        </div>
      </div>

      <!-- Sections -->
      <div class="grid gap-8 lg:grid-cols-2">

        <div v-for="section in sections" :key="section.title"
             :class="{
          'border-cyan-300 dark:border-cyan-400/30 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 shadow-cyan-500/10': section.highlight,
          'border-gray-200 dark:border-white/10': !section.highlight
             }"
             class="rounded-3xl p-8 border transition hover:-translate-y-1  bg-white  dark:bg-white/5">

          <div class="flex items-start justify-between gap-4 mb-5">
            <div>
              <h3 class="text-2xl font-black mb-2 no-border">{{ section.title }}</h3>
              <p class="text-gray-500 dark:text-slate-400">{{ section.desc }}</p>
            </div>
            <span v-if="section.highlight"
                  :class="{
                    'border-cyan-300 dark:border-cyan-400/30': !section.highlight,
                    'border-cyan-400/20 bg-cyan-400/10': section.highlight
                  }"
                  class="flex-shrink-0 inline-block text-xs px-3 py-1 rounded-full border  text-cyan-700  dark:text-cyan-300">
              CORE DIFFERENTIATOR
            </span>
          </div>

          <div class="flex flex-wrap gap-3">
            <div v-for="item in section.items" :key="item"
                 :class="{
                    'border-gray-200 bg-gray-50 hover:bg-gray-100 dark:border-white/10 dark:bg-black/20 dark:hover:bg-white/10': !section.highlight,
                    'border-cyan-400/20 bg-cyan-400/10 hover:bg-cyan-400/20': section.highlight
                 }"
                 class="flex-shrink-0 px-4 py-2 rounded-xl text-sm border transition  text-gray-700   dark:text-slate-200 ">
              {{ item }}
            </div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <div class="mt-20 rounded-3xl p-10 text-center border border-gray-200 bg-white dark:border-white/10 dark:bg-white/5">
        <h2 class="text-3xl font-black mb-4 no-border">
          One Platform. Full Native Development Stack.
        </h2>
        <p class="w-full flex justify-center text-lg leading-8 text-gray-600 dark:text-slate-300">
          From runtimes to AI agents, FlyEnv unifies the modern development workflow into a single native platform.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup>
  const aiItems = ['Ollama', 'Hermes Agent', 'Qdrant', 'OpenClaw']

  const sections = [
    {
      title: '🚀 Runtime & Languages',
      desc: 'Foundation of modern native development.',
      items: ['PHP','Node.js','Bun','Deno','Python','Go', 'Flutter', 'Java','Ruby','Rust','Zig'],
      highlight: false
    },
    {
      title: '🌐 Web Servers',
      desc: 'Production-grade web and application servers.',
      items: ['Nginx','Apache','Caddy','FrankenPHP','Tomcat'],
      highlight: false
    },
    {
      title: '🗄 Data Infrastructure',
      desc: 'Databases, queues, search and storage systems.',
      items: ['MySQL','PostgreSQL','MongoDB','Redis','RabbitMQ','Elasticsearch','Qdrant','MinIO'],
      highlight: false
    },
    {
      title: '🤖 AI & Agents',
      desc: 'AI-native development workspace inside FlyEnv.',
      items: ['Ollama','Hermes Agent','OpenClaw','n8nAI'],
      highlight: true
    },
    {
      title: '🏗 Infrastructure & Networking',
      desc: 'Service governance and local infrastructure tools.',
      items: ['Podman','Consul','etcd','Cloudflare Tunnel','DNS'],
      highlight: false
    },
    {
      title: '🛠 Developer Utilities',
      desc: 'Developer helper tools and services.',
      items: ['Mailpit','Static Server','FTP','SSL Toolkit','CLI Proxy API'],
      highlight: false
    }
  ]
</script>
