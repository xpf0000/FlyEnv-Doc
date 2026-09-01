<template>
  <section class="mx-auto max-w-7xl px-6 py-20 sm:py-24" aria-labelledby="home-positioning-title-zh">
    <div>
      <div class="max-w-3xl"><p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-indigo-600 dark:text-indigo-300">为什么选择 FlyEnv</p><h2 class="no-border !text-3xl font-bold tracking-tight md:!text-[42px]">少一点配置，多一点项目时间。</h2></div>
      <div class="mt-10 grid gap-6 md:grid-cols-2">
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">无需容器配置</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">在同一个应用中启动 PHP、MySQL、Redis 和 Nginx，不必先搭建容器技术栈。</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">一个工作区</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">打开项目后，从一个视图管理运行时、服务、本地站点和 AI 上下文。</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">按项目切换版本</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">只为当前项目切换 PHP、Node.js 或 Python 版本，不影响其他项目。</p></article>
        <article class="border-t-2 border-indigo-500 pt-5"><h3 class="no-border !text-xl font-bold">本地域名与 HTTPS</h3><p class="mt-2 leading-7 text-slate-600 dark:text-slate-300">创建本地站点和可信 HTTPS 地址，无需手动编辑 hosts 文件或运行 mkcert。</p></article>
      </div>
    </div>

    <div class="mt-24 grid gap-8 rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-700 dark:bg-slate-900 md:grid-cols-[1.25fr_0.75fr] md:p-10">
      <div><p class="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">之前 / 之后</p><h2 class="no-border !text-3xl font-bold">从零散工具到一个工作区</h2><img src="https://oss.macphpstudy.com/image/one-workspace.webp" alt="前后对比：将零散的本地开发工具整合到一个 FlyEnv 工作区" class="mt-8 w-full rounded-2xl border border-slate-200 object-cover shadow-sm dark:border-slate-700" data-x-image-preview="" loading="lazy" /></div>
      <div class="grid gap-4"><div class="rounded-2xl bg-slate-50 p-6 dark:bg-slate-950/70"><p class="text-base font-bold uppercase tracking-wide text-slate-500">没有 FlyEnv</p><div class="mt-4 flex flex-wrap gap-2"><span v-for="item in ['nvm', 'pyenv', 'PHP 管理器', 'DB 安装器', 'Nginx', 'mkcert', 'hosts', '终端']" :key="item" class="rounded-full bg-white px-3 py-1.5 text-sm font-medium text-slate-700 ring-1 ring-slate-200 dark:bg-slate-900 dark:text-slate-200 dark:ring-slate-700">{{ item }}</span></div></div><div class="rounded-2xl bg-indigo-50 p-6 dark:bg-indigo-950/40"><p class="text-base font-bold uppercase tracking-wide text-indigo-600 dark:text-indigo-300">使用 FlyEnv</p><div class="mt-4 flex flex-wrap gap-2"><span v-for="item in ['运行时', '数据库', 'Web 服务器', 'HTTPS', '本地站点', 'AI']" :key="item" class="rounded-full bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-800 ring-1 ring-indigo-200 dark:bg-slate-900/70 dark:text-slate-100 dark:ring-indigo-400/40">{{ item }}</span></div></div></div>
    </div>

  </section>
</template>
