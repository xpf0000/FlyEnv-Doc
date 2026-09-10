<template>
  <main
    class="ml-[calc(50%_-_50vw)] w-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white"
  >
    <section
      class="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-20 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/40"
    >
      <div
        class="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/10"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-500/10"
      ></div>
      <div class="mx-auto grid max-w-7xl items-center gap-10 xl:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <p
            class="mb-5 inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm dark:border-sky-800 dark:bg-slate-900/80 dark:text-sky-300"
            >{{ copy.kicker }}</p
          >
          <h1
            class="!m-0 !border-0 !p-0 !text-4xl !leading-tight font-black tracking-tight text-slate-950 sm:!text-5xl lg:!text-6xl dark:text-white"
            >{{ copy.title }}</h1
          >
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
            >{{ copy.description }}</p
          >
          <div class="mt-8 flex flex-wrap gap-3"
            ><a
              href="#comparisons"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold !text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >{{ copy.browse }} →</a
            ></div
          >
          <div
            class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300"
            ><span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> macOS</span
            ><span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> Windows</span
            ><span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> Linux</span
            ><span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> {{ copy.freeOpen }}</span
            ></div
          >
        </div>
        <div class="relative mx-auto hidden h-[420px] w-full max-w-[580px] lg:block">
          <svg
            class="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              v-for="tool in hubTools"
              :key="tool.name"
              :d="tool.d"
              fill="none"
              vector-effect="non-scaling-stroke"
              stroke-width="1.5"
              stroke-dasharray="4 4"
              class="stroke-slate-300 dark:stroke-slate-700"
            />
          </svg>
          <a
            v-for="tool in localizedHubTools"
            :key="tool.name"
            :href="localizedHref(tool.link)"
            class="absolute z-10 flex items-center gap-2.5 whitespace-nowrap rounded-2xl border border-slate-200 bg-white/95 px-4 py-3 no-underline shadow-md shadow-slate-950/5 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/95"
            :class="tool.pos"
            ><span
              class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-black text-white"
              :class="tool.color"
              >{{ tool.mark }}</span
            ><span
              ><span class="block text-sm font-bold leading-4 text-slate-800 dark:text-slate-100"
                >{{ tool.name }}</span
              ><span class="block text-[10px] text-slate-500 dark:text-slate-400">{{
                tool.tag
              }}</span></span
            ></a
          >
          <div
            class="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-3xl border border-sky-200 bg-white/95 px-8 py-9 shadow-xl shadow-blue-950/10 dark:border-sky-900/60 dark:bg-slate-900/95"
            ><span
              class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-2xl font-black text-white"
              >F</span
            ><span class="mt-3 text-lg font-black text-slate-900 dark:text-white">FlyEnv</span
            ><span
              class="mt-1 text-center text-[11px] leading-4 text-slate-500 dark:text-slate-400"
              >{{ copy.projects }}<br />{{ copy.environment }}</span
            ></div
          >
        </div>
      </div>
    </section>

    <section
      id="comparisons"
      class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
      aria-labelledby="comparisons-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="comparisons-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.start }}</h2
          >
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.select }}</p
          >
        </header>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <a
            v-for="tool in localizedTools"
            :key="tool.name"
            :href="localizedHref(tool.link)"
            class="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 no-underline shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900 dark:hover:border-blue-800"
            ><span
              class="flex h-12 w-12 items-center justify-center rounded-xl text-xl font-black text-white"
              :class="tool.color"
              >{{ tool.mark }}</span
            ><h3 class="!m-0 !mt-5 !border-0 !p-0 !text-xl !leading-7 font-black"
              >FlyEnv vs {{ tool.name }}</h3
            ><p class="mt-2 flex-1 leading-7 text-slate-600 dark:text-slate-300">{{
              tool.tagline
            }}</p
            ><span
              class="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 transition group-hover:gap-2.5 dark:text-blue-400"
              >{{ copy.view }} →</span
            ></a
          >
        </div>
      </div>
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="glance-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="glance-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.glance }}</h2
          >
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.glanceIntro }}</p
          >
        </header>
        <div
          class="mt-12 overflow-hidden rounded-2xl border-x border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <table class="!table !my-0 w-full table-fixed border-collapse text-left text-sm leading-6">
            <thead
              class="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
            >
              <tr>
                <th class="px-3 !py-4 font-bold sm:px-6 sm:py-5">{{ copy.tool }}</th>
                <th class="px-3 !py-4 font-bold sm:px-6 sm:py-5">{{ copy.bestFit }}</th>
                <th class="px-3 !py-4 font-bold sm:px-6 sm:py-5">{{ copy.difference }}</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              <tr v-for="tool in localizedTools" :key="tool.name">
                <th class="px-3 !py-5 sm:px-6 sm:py-5">
                  <a
                    :href="localizedHref(tool.link)"
                    class="flex items-center gap-2.5 font-bold !text-slate-800 no-underline hover:!text-blue-600 dark:!text-slate-100 dark:hover:!text-blue-400"
                    ><span
                      class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black !text-white"
                      :class="tool.color"
                      >{{ tool.mark }}</span
                    >{{ tool.name }}</a
                  >
                </th>
                <td
                  class="px-3 !py-5 ![word-break:normal] text-slate-600 sm:px-6 sm:py-5 dark:text-slate-300"
                  >{{ tool.bestFit }}</td
                >
                <td
                  class="px-3 !py-5 ![word-break:normal] text-slate-600 sm:px-6 sm:py-5 dark:text-slate-300"
                  >{{ tool.tagline }}</td
                >
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 sm:px-10 lg:px-16">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-sky-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-10"
      >
        <div>
          <p class="!m-0 text-xs font-bold uppercase tracking-[0.18em] text-sky-300"
            >{{ copy.ready }}</p
          >
          <h2 class="!m-0 !mt-3 !border-0 !p-0 !text-2xl !leading-8 font-black sm:!text-3xl"
            >{{ copy.ctaTitle }}</h2
          >
          <p class="mt-2 max-w-2xl text-sm leading-6 text-blue-100"
            >{{ copy.ctaText }}</p
          >
        </div>
        <div class="flex shrink-0 flex-wrap gap-3">
          <a
            :href="localizedHref('/download')"
            class="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold !text-blue-900 no-underline transition hover:bg-blue-50"
            >{{ copy.download }}</a
          >
          <a
            :href="localizedHref('/features')"
            class="inline-flex items-center justify-center rounded-xl border border-white/40 px-5 py-3 text-sm font-bold !text-white no-underline transition hover:bg-white/10"
            >{{ copy.features }}</a
          >
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' }>()
  const locale = props.locale || 'en'
  const localizedHref = (href: string) => locale === 'en' || href.startsWith('http') ? href : href.replace(/^\//, `/${locale}/`)
  const copy = computed(() => locale === 'zh'
    ? { kicker: '本地开发工具对比', title: '将 FlyEnv 与热门本地开发工具进行比较', description: '探索 FlyEnv 与 XAMPP、Laragon、MAMP / MAMP Pro、Laravel Herd、ServBay 和 Docker 的关键差异，为项目找到合适工具。', browse: '浏览对比', projects: '你的项目。', environment: '你的环境。', freeOpen: '免费且开源', start: '选择比较起点', select: '选择工具，查看 FlyEnv 的差异。', view: '查看对比', glance: '快速了解', glanceIntro: '快速概览，帮助你选择合适的对比。', tool: '工具', bestFit: '适合场景', difference: '与 FlyEnv 的主要差异', ready: '准备开始比较', ctaTitle: '尝试适合项目的工作流', ctaText: '比较工具并选择适合项目的工作流。', download: '下载 FlyEnv', features: '查看特性' }
    : locale === 'id'
      ? { kicker: 'Bandingkan alat pengembangan lokal', title: 'Bandingkan FlyEnv dengan alat pengembangan lokal populer', description: 'Jelajahi perbedaan utama FlyEnv dengan XAMPP, Laragon, MAMP / MAMP Pro, Laravel Herd, ServBay, dan Docker untuk menemukan alat yang tepat.', browse: 'Lihat perbandingan', projects: 'Proyek Anda.', environment: 'Lingkungan Anda.', freeOpen: 'Gratis dan sumber terbuka', start: 'Pilih titik awal', select: 'Pilih alat untuk melihat perbandingan FlyEnv.', view: 'Lihat perbandingan', glance: 'Sekilas', glanceIntro: 'Ringkasan cepat untuk membantu memilih perbandingan.', tool: 'Alat', bestFit: 'Paling cocok untuk', difference: 'Perbedaan utama dari FlyEnv', ready: 'Siap membandingkan', ctaTitle: 'Coba alur kerja yang sesuai proyek', ctaText: 'Bandingkan alat dan pilih alur kerja yang sesuai.', download: 'Unduh FlyEnv', features: 'Lihat fitur' }
      : { kicker: 'Compare local development tools', title: 'Compare FlyEnv with popular local development tools', description: 'Explore the key differences between FlyEnv and XAMPP, Laragon, MAMP / MAMP Pro, Laravel Herd, ServBay, and Docker to find the right tool for your projects.', browse: 'Browse comparisons', projects: 'Your projects.', environment: 'Your environment.', freeOpen: 'Free and open source', start: 'Choose your starting point', select: 'Select a tool to see how FlyEnv compares.', view: 'View comparison', glance: 'At a glance', glanceIntro: 'A quick overview to help you choose the right comparison.', tool: 'Tool', bestFit: 'Best fit', difference: 'Main difference from FlyEnv', ready: 'Ready to compare', ctaTitle: 'Try the workflow that fits your projects', ctaText: 'Compare tools and choose the workflow that fits your projects.', download: 'Download FlyEnv', features: 'View Features' })
  const tools = [
    {
      name: 'XAMPP',
      mark: 'X',
      color: 'bg-orange-500',
      tag: 'Shared stack',
      tagline: 'Shared PHP stack vs project-specific environments',
      bestFit: 'Developers who want a familiar PHP stack',
      link: '/compare/xampp'
    },
    {
      name: 'Laragon',
      mark: 'L',
      color: 'bg-rose-500',
      tag: 'Windows focused',
      tagline: 'Global switching vs project-specific configuration',
      bestFit: 'Windows developers who prefer a lightweight local environment',
      link: '/compare/laragon'
    },
    {
      name: 'MAMP / MAMP Pro',
      mark: 'M',
      color: 'bg-slate-600',
      tag: 'Web-host stack',
      tagline: 'Web-host style stack vs broader workspace',
      bestFit: 'PHP / WordPress developers, host-based workflows',
      link: '/compare/mamp'
    },
    {
      name: 'Laravel Herd',
      mark: 'H',
      color: 'bg-red-500',
      tag: 'Laravel focused',
      tagline: 'Laravel-first workflow vs framework-agnostic workspace',
      bestFit: 'Laravel developers',
      link: '/compare/herd'
    },
    {
      name: 'ServBay',
      mark: 'S',
      color: 'bg-blue-600',
      tag: 'All-in-one',
      tagline: 'Large shared core vs different priorities',
      bestFit: 'Broad all-in-one local development',
      link: '/compare/servbay'
    },
    {
      name: 'Docker',
      mark: 'D',
      color: 'bg-sky-500',
      tag: 'Containers',
      tagline: 'Native local services vs containers',
      bestFit: 'Developers familiar with containers',
      link: '/compare/docker'
    }
  ]
  const hubTools = [
    { ...tools[0], pos: 'left-[9%] top-[3%]', d: 'M 31 11 C 40 11, 44 24, 44 35' },
    { ...tools[2], pos: '-left-[3%] top-[42%]', d: 'M 27 49 C 31 49, 35 50, 37 50' },
    { ...tools[4], pos: 'left-[9%] top-[81%]', d: 'M 32 84 C 40 84, 44 76, 44 65' },
    { ...tools[1], pos: 'right-[9%] top-[3%]', d: 'M 65 11 C 60 11, 56 24, 56 35' },
    { ...tools[3], pos: 'right-0 top-[42%]', d: 'M 73 49 C 70 49, 66 50, 63 50' },
    { ...tools[5], pos: 'right-[9%] top-[81%]', d: 'M 68 84 C 60 84, 56 76, 56 65' }
  ]
  const localizedTools = computed(() => {
    if (locale === 'en') return tools
    const zh: Record<string, [string, string, string]> = {
      XAMPP: ['共享技术栈', '共享 PHP 技术栈 vs 项目专属环境', '希望使用熟悉 PHP 技术栈的开发者'],
      Laragon: ['专注 Windows', '全局切换 vs 项目专属配置', '偏好轻量本地环境的 Windows 开发者'],
      'MAMP / MAMP Pro': ['Web 主机技术栈', '主机式技术栈 vs 更广泛工作区', 'PHP / WordPress 开发者和主机式工作流'],
      'Laravel Herd': ['专注 Laravel', 'Laravel 优先工作流 vs 框架无关工作区', 'Laravel 开发者'],
      ServBay: ['一体化', '共享核心较大但侧重点不同', '需要广泛一体化本地开发的用户'],
      Docker: ['容器', '原生本地服务 vs 容器', '熟悉容器的开发者']
    }
    const id: Record<string, [string, string, string]> = {
      XAMPP: ['Stack bersama', 'Stack PHP bersama vs lingkungan khusus proyek', 'Pengembang yang ingin stack PHP familiar'],
      Laragon: ['Fokus Windows', 'Penggantian global vs konfigurasi khusus proyek', 'Pengembang Windows yang menyukai lingkungan ringan'],
      'MAMP / MAMP Pro': ['Stack host web', 'Stack bergaya host vs workspace lebih luas', 'Pengembang PHP / WordPress dengan alur berbasis host'],
      'Laravel Herd': ['Fokus Laravel', 'Alur Laravel-first vs workspace agnostik framework', 'Pengembang Laravel'],
      ServBay: ['All-in-one', 'Inti bersama besar dengan prioritas berbeda', 'Pengembangan lokal all-in-one yang luas'],
      Docker: ['Kontainer', 'Layanan lokal native vs kontainer', 'Pengembang yang familiar dengan kontainer']
    }
    const map = locale === 'zh' ? zh : id
    return tools.map((tool) => {
      const v = map[tool.name]
      return v ? { ...tool, tag: v[0], tagline: v[1], bestFit: v[2] } : tool
    })
  })
  const localizedHubTools = computed(() => localizedTools.value.map((tool) => ({ ...(hubTools.find((h) => h.name === tool.name) || {}), ...tool })))
</script>
