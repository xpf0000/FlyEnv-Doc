<template>
  <section class="mx-auto max-w-7xl px-6 py-16 sm:py-20" aria-labelledby="featured-modules-title">
    <div class="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Supported technologies</p>
        <h2 id="featured-modules-title" class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">Core runtimes, databases and services</h2>
        <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">A focused set of runtimes, databases, servers, and AI tools on the homepage. The full catalog stays one click away.</p>
      </div>
      <a href="/guide/what-is-flyenv" data-analytics-event="guide_click" data-analytics-surface="featured-modules" class="inline-flex shrink-0 items-center rounded-full border border-indigo-200 px-4 py-2 font-semibold text-indigo-600 no-underline transition-colors hover:border-indigo-300 hover:text-indigo-700 dark:border-indigo-400/40 dark:text-indigo-300 dark:hover:border-indigo-300">View all modules →</a>
    </div>

    <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <article v-for="group in groups" :key="group.name" class="border-t-2 border-indigo-500 pt-5">
        <h3 class="no-border !text-lg font-bold">{{ group.name }}</h3>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="module in group.modules" :key="module" class="rounded-full bg-slate-100 px-3.5 py-2 text-base text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ module }}</span>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const groups = [
  { name: 'Languages & runtimes', modules: ['PHP', 'Node.js', 'Python', 'Java', 'Go'] },
  { name: 'Databases & queues', modules: ['MySQL', 'MariaDB', 'PostgreSQL', 'MongoDB', 'Redis', 'RabbitMQ'] },
  { name: 'Web servers', modules: ['Nginx', 'Apache', 'Caddy', 'Tomcat'] },
  { name: 'AI & automation', modules: ['Claude Code', 'Codex', 'OpenCode', 'Ollama', 'n8n'] }
]
</script>
