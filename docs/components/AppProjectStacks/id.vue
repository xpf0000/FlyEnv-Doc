<template>
  <section class="mx-auto max-w-7xl rounded-3xl bg-slate-50/70 px-6 py-16 dark:bg-slate-950/40 sm:py-20" aria-labelledby="project-stacks-title-id">
    <div class="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Stack proyek nyata</p>
        <h2 id="project-stacks-title-id" class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">Jalankan seluruh stack, bukan hanya satu runtime</h2>
        <p class="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">Berikut adalah konfigurasi lokal praktis yang memanfaatkan runtime, database, server web, dan alat HTTPS yang sudah tersedia di FlyEnv.</p>
      </div>
      <a href="/id/demos" data-analytics-surface="project-stacks" class="inline-flex shrink-0 font-semibold text-indigo-600 no-underline hover:text-indigo-700 dark:text-indigo-300">Lihat semua demo →</a>
    </div>
    <div class="mt-10 grid gap-5 md:grid-cols-2">
      <article v-for="stack in stacks" :key="stack.name" class="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900">
        <div class="mb-5 overflow-hidden rounded-xl border border-slate-200 bg-slate-950 dark:border-slate-700"><img :src="stack.image" :alt="`Pratinjau stack lokal ${stack.name}`" class="h-auto w-full" loading="lazy" /></div>
        <div class="flex items-start justify-between gap-4"><div><p class="text-sm font-semibold text-indigo-600 dark:text-indigo-300">{{ stack.kind }}</p><h3 class="mt-2 no-border !text-2xl font-bold">{{ stack.name }}</h3></div><span class="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-300">{{ stack.platforms }}</span></div>
        <p class="mt-4 leading-7 text-slate-600 dark:text-slate-300">{{ stack.description }}</p>
        <div class="mt-5 flex flex-wrap gap-2"><span v-for="item in stack.services" :key="item" class="rounded-full border border-slate-200 px-3 py-1 text-sm text-slate-700 dark:border-slate-600 dark:text-slate-200">{{ item }}</span></div>
        <a :href="stack.href" data-analytics-event="solution_click" data-analytics-surface="project-stacks" class="mt-6 inline-flex font-semibold text-indigo-600 no-underline hover:text-indigo-700 dark:text-indigo-300">{{ stack.link }} -></a>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const stacks = [
  { kind: 'Aplikasi PHP', name: 'Laravel', image: '/home/stacks/laravel.svg', platforms: 'macOS · Windows · Linux', description: 'Konfigurasi Laravel lokal yang dapat diulang dengan layanan yang dibutuhkan sebagian besar tim untuk pengembangan sehari-hari.', services: ['PHP', 'MySQL', 'Redis', 'Nginx', 'HTTPS'], href: '/id/guide/run-laravel-use-flyenv', link: 'Jalankan Laravel secara lokal' },
  { kind: 'Aplikasi Python', name: 'Django', image: '/home/stacks/django.svg', platforms: 'macOS · Windows · Linux', description: 'Kelola proyek web Python, database, cache, reverse proxy, dan domain lokalnya dalam satu ruang kerja.', services: ['Python', 'PostgreSQL', 'Redis', 'Nginx', 'HTTPS'], href: '/id/guide/deploy-nodejs-python-go-without-docker', link: 'Jalankan Python secara lokal' },
  { kind: 'Platform bisnis Python', name: 'ERPNext', image: '/home/stacks/erpnext.svg', platforms: 'macOS · Windows · Linux', description: 'Jalankan ERPNext bersama runtime Python, MariaDB, Redis, reverse proxy, dan situs lokalnya dalam satu ruang kerja.', services: ['Python', 'MariaDB', 'Redis', 'Nginx'], href: 'https://www.youtube.com/watch?v=ZhvJ8a9Fp_4', link: 'Lihat alur kerja ERPNext' },
  { kind: 'Layanan Git yang di-host sendiri', name: 'Gitea', image: '/home/stacks/gitea.svg', platforms: 'macOS · Windows · Linux', description: 'Simpan layanan Git privat dekat dengan kode Anda, lengkap dengan database, reverse proxy, dan HTTPS lokal tepercaya.', services: ['Gitea', 'MySQL', 'Nginx', 'HTTPS'], href: 'https://www.youtube.com/watch?v=hKIx2LdNz0Y', link: 'Lihat alur kerja Gitea' }
]
</script>
