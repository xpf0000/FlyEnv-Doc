<template>
  <section class="mx-auto max-w-7xl px-6 py-20 sm:py-24" aria-labelledby="home-positioning-title-id">
    <div>
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Mengapa FlyEnv</p>
        <h2 id="home-positioning-title-id" class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">Lebih sedikit penyiapan. Lebih banyak waktu untuk proyek.</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">Tanpa konfigurasi container</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Mulai PHP, MySQL, Redis, dan Nginx dari aplikasi yang sama tanpa harus membangun stack container terlebih dahulu.</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">Satu ruang kerja</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Buka proyek sekali lalu kelola runtime, layanan, situs lokal, dan konteks AI dari satu tampilan.</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">Versi per proyek</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Ganti versi PHP, Node.js, atau Python untuk satu proyek tanpa mengubah proyek lainnya.</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">Domain lokal dan HTTPS</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Buat situs lokal dan URL HTTPS tepercaya tanpa mengedit file hosts atau menjalankan mkcert secara manual.</p></article>
      </div>
    </div>

    <div class="mt-24 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1.25fr_0.75fr] md:p-10">
      <div><p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Sebelum / sesudah</p><h2 class="no-border !text-3xl font-bold">Dari alat yang terpisah ke satu ruang kerja</h2><img src="https://oss.macphpstudy.com/image/one-workspace.webp" alt="Perbandingan sebelum dan sesudah: alat pengembangan lokal yang terpisah disatukan dalam satu ruang kerja FlyEnv" class="mt-8 w-full rounded-2xl border border-slate-200 object-cover shadow-sm dark:border-slate-700" data-x-image-preview="" loading="lazy" /></div>
      <div class="grid gap-4"><div class="rounded-2xl bg-slate-50 p-6 dark:bg-slate-950/70"><p class="text-base font-bold uppercase tracking-wide text-slate-500">Tanpa FlyEnv</p><div class="mt-4 flex flex-wrap gap-2"><span v-for="item in ['nvm', 'pyenv', 'Pengelola PHP', 'Penginstal DB', 'Nginx', 'mkcert', 'hosts', 'terminal']" :key="item" class="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">{{ item }}</span></div></div><div class="rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/40"><p class="text-base font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">Dengan FlyEnv</p><div class="mt-4 flex flex-wrap gap-2"><span v-for="item in ['Runtime', 'Database', 'Server web', 'HTTPS', 'Situs lokal', 'AI']" :key="item" class="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-indigo-200 dark:bg-slate-900/70 dark:text-slate-100 dark:ring-indigo-400/40">{{ item }}</span></div></div></div>
    </div>
  </section>
</template>
