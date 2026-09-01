<template>
  <section class="mx-auto max-w-7xl px-6 py-20 sm:py-24" aria-labelledby="home-positioning-title">
    <div>
      <div class="max-w-3xl">
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">Why FlyEnv</p>
        <h2 class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">Less setup. More project time.</h2>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article class="border-t-2 border-indigo-500 pt-5">
          <h3 class="no-border !text-xl font-bold">No container setup</h3>
          <p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Start PHP, MySQL, Redis and Nginx from the same app without building a container stack first.</p>
        </article>
        <article class="border-t-2 border-indigo-500 pt-5">
          <h3 class="no-border !text-xl font-bold">One workspace</h3>
          <p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Open a project once and manage its runtimes, services, local site and AI context from one view.</p>
        </article>
        <article class="border-t-2 border-indigo-500 pt-5">
          <h3 class="no-border !text-xl font-bold">Per-project versions</h3>
          <p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Switch the PHP, Node.js or Python version for one project without changing every other project.</p>
        </article>
        <article class="border-t-2 border-indigo-500 pt-5">
          <h3 class="no-border !text-xl font-bold">Local domains & HTTPS</h3>
          <p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">Create a local site and trusted HTTPS URL without editing the hosts file or running mkcert by hand.</p>
        </article>
      </div>
    </div>

    <div class="mt-24 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1.25fr_0.75fr] md:p-10">
      <div>
        <p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">Before / after</p>
        <h2 class="no-border !text-3xl font-bold">From scattered tools to one workspace</h2>
        <img
          src="https://oss.macphpstudy.com/image/one-workspace.webp"
          alt="Before and after comparison showing scattered local development tools consolidated into one FlyEnv workspace"
          class="mt-8 w-full rounded-2xl border border-slate-200 object-cover shadow-sm dark:border-slate-700"
          data-x-image-preview=""
          loading="lazy"
        />
      </div>
      <div class="grid gap-4">
        <div class="rounded-2xl bg-slate-50 p-6 dark:bg-slate-950/70">
          <p class="text-base font-bold uppercase tracking-wide text-slate-500">Without FlyEnv</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="item in ['nvm', 'pyenv', 'PHP manager', 'DB installers', 'Nginx', 'mkcert', 'hosts', 'terminals']" :key="item" class="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">{{ item }}</span>
          </div>
        </div>
        <div class="rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/40">
          <p class="text-base font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">With FlyEnv</p>
          <div class="mt-4 flex flex-wrap gap-2">
            <span v-for="item in ['Runtimes', 'Databases', 'Web servers', 'HTTPS', 'Local sites', 'AI']" :key="item" class="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-indigo-200 dark:bg-slate-900/70 dark:text-slate-100 dark:ring-indigo-400/40">{{ item }}</span>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
