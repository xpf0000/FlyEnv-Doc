<template>
  <section class="mx-auto max-w-7xl rounded-3xl bg-slate-50/70 px-6 py-16 dark:bg-slate-950/40 sm:py-20" aria-labelledby="project-stacks-title-zh">
    <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">真实项目栈</p>
        <h2 id="project-stacks-title-zh" class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">运行完整项目，而不只是安装一个运行时</h2>
        <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">这些是基于 FlyEnv 已有运行时、数据库、Web 服务器和 HTTPS 工具整理的本地开发方案。</p>
      </div>
      <a href="/zh/demos" data-analytics-surface="project-stacks" class="inline-flex shrink-0 font-semibold text-indigo-600 no-underline hover:text-indigo-700 dark:text-indigo-300">浏览全部演示 →</a>
    </div>

    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <article v-for="stack in stacks" :key="stack.name" class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <div class="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-slate-700"><img :src="stack.image" :alt="`${stack.name} 本地技术栈预览`" class="h-auto w-full" loading="lazy" /></div>
        <div class="flex items-start justify-between gap-4"><div><p class="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{{ stack.kind }}</p><h3 class="mt-2 no-border !text-2xl font-bold">{{ stack.name }}</h3></div><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ stack.platforms }}</span></div>
        <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">{{ stack.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2"><span v-for="item in stack.services" :key="item" class="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:text-slate-200">{{ item }}</span></div>
        <a :href="stack.href" data-analytics-event="solution_click" data-analytics-surface="project-stacks" class="mt-6 inline-flex font-semibold text-indigo-600 no-underline hover:text-indigo-700 dark:text-indigo-300">{{ stack.link }} →</a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const stacks = [
  { kind: 'PHP 应用', name: 'Laravel', image: 'https://oss.macphpstudy.com/image/assets/home/stacks/laravel.svg', platforms: 'macOS · Windows · Linux', description: '用日常开发需要的服务，搭建可重复的本地 Laravel 环境。', services: ['PHP', 'MySQL', 'Redis', 'Nginx', 'HTTPS'], href: '/zh/guide/run-laravel-use-flyenv', link: '本地运行 Laravel' },
  { kind: 'Python 应用', name: 'Django', image: 'https://oss.macphpstudy.com/image/assets/home/stacks/django.svg', platforms: 'macOS · Windows · Linux', description: '在一个工作区中管理 Python 项目、数据库、缓存、反向代理和本地域名。', services: ['Python', 'PostgreSQL', 'Redis', 'Nginx', 'HTTPS'], href: '/zh/guide/deploy-nodejs-python-go-without-docker', link: '本地部署 Python' },
  { kind: 'Python 业务平台', name: 'ERPNext', image: 'https://oss.macphpstudy.com/image/assets/home/stacks/erpnext.svg', platforms: 'macOS · Windows · Linux', description: '在一个工作区中运行 ERPNext 所需的 Python、MariaDB、Redis、反向代理和本地域名。', services: ['Python', 'MariaDB', 'Redis', 'Nginx'], href: 'https://www.youtube.com/watch?v=ZhvJ8a9Fp_4', link: '查看 ERPNext 工作流' },
  { kind: '自托管 Git 服务', name: 'Gitea', image: 'https://oss.macphpstudy.com/image/assets/home/stacks/gitea.svg', platforms: 'macOS · Windows · Linux', description: '让私有 Git 服务与代码保持在一起，并配置数据库、反向代理和可信本地 HTTPS。', services: ['Gitea', 'MySQL', 'Nginx', 'HTTPS'], href: 'https://www.youtube.com/watch?v=hKIx2LdNz0Y', link: '查看 Gitea 工作流' }
]
</script>
