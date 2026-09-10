<template>
  <main
    class="ml-[calc(50%_-_50vw)] w-screen overflow-hidden bg-white text-slate-900 dark:bg-slate-950 dark:text-white"
  >
    <section
      class="relative isolate overflow-hidden bg-gradient-to-br from-sky-50 via-white to-indigo-50 px-6 py-14 sm:px-10 sm:py-20 lg:px-16 lg:py-16 dark:from-slate-950 dark:via-slate-950 dark:to-indigo-950/40"
    >
      <div
        class="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-sky-200/50 blur-3xl dark:bg-sky-500/10"
      ></div>
      <div
        class="pointer-events-none absolute -bottom-40 left-1/3 -z-10 h-96 w-96 rounded-full bg-indigo-200/50 blur-3xl dark:bg-indigo-500/10"
      ></div>
      <div class="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-16">
        <div>
          <p
            class="mb-5 inline-flex rounded-full border border-sky-200 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-sky-700 shadow-sm dark:border-sky-800 dark:bg-slate-900/80 dark:text-sky-300"
            >{{ copy.comparison }}</p
          >
          <h1
            class="!m-0 !border-0 !p-0 !text-4xl !leading-tight font-black tracking-tight text-slate-950 sm:!text-5xl lg:!text-6xl dark:text-white"
            >FlyEnv vs {{ competitor.name
            }}<span
              class="mt-3 block text-2xl font-bold leading-tight text-slate-700 sm:text-3xl lg:text-4xl dark:text-slate-200"
              >{{ competitor.heroTitle }}</span
            ></h1
          >
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
            >{{ competitor.heroDescription }}</p
          >
          <div class="mt-8 flex flex-wrap gap-3"
            ><a
              :href="localizedHref('/download')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold !text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >{{ copy.download }}</a
            ><a
              href="#comparison"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold !text-slate-800 no-underline transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900/70 dark:!text-slate-100"
              >{{ copy.summary }}</a
            ></div
          >
          <div
            class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300"
            ><span
              v-for="platform in competitor.platforms"
              :key="platform"
              class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span>{{ platform }}</span
            ></div
          >
        </div>
        <div class="grid items-stretch gap-5 sm:grid-cols-2">
          <article
            class="rounded-3xl border border-orange-200 bg-white/90 p-6 shadow-xl shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-900/90"
            ><div class="flex items-center gap-2.5"
              ><span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-xl font-black text-white"
                >{{ competitor.mark }}</span
              ><div
                ><h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">{{
                  competitor.name
                }}</h2
                ><p class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400">{{
                  competitor.heroModelCaption || competitor.model
                }}</p></div
              ></div
            ><div
              class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
              ><div class="grid gap-2"
                ><div
                  v-for="scope in competitor.scopes"
                  :key="scope.title"
                  class="rounded-xl border border-white bg-white p-2.5 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                  ><p class="!m-0 text-[10px] font-bold text-slate-800 dark:text-slate-100">{{
                    scope.title
                  }}</p
                  ><p class="!m-0 mt-1 text-[9px] text-slate-500 dark:text-slate-400">{{
                    scope.detail
                  }}</p
                  ><div class="mt-2 flex flex-wrap gap-2"
                    ><span
                      v-for="service in scope.services"
                      :key="service.name"
                      class="inline-flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300"
                      ><img
                        v-if="service.icon"
                        :src="service.icon"
                        :alt="service.name"
                        class="h-3.5 w-3.5"
                      />{{ service.name }}</span
                    ></div
                  ></div
                ></div
              ></div
            ><p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ competitor.scopeNote }}</p
            ></article
          >
          <article
            class="rounded-3xl border border-sky-200 bg-white/90 p-6 shadow-xl shadow-blue-950/5 dark:border-sky-900/60 dark:bg-slate-900/90"
            ><div class="flex items-center gap-2.5"
              ><span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-black text-white"
                >F</span
              ><div
                ><h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">FlyEnv</h2
                ><p class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400"
                  >{{ competitor.heroFlyenvCaption || (locale === 'zh' ? '每个项目独立的环境' : locale === 'id' ? 'Lingkungan khusus tiap proyek' : 'A dedicated environment per project') }}</p
                ></div
              ></div
            ><div class="mt-5 space-y-2.5"
              ><div
                v-for="project in flyenvProjects"
                :key="project.name"
                class="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5 dark:border-blue-950 dark:bg-blue-950/30"
                ><p class="!m-0 text-[12px] font-bold text-blue-700 dark:text-blue-300"
                  >{{ projectDisplayName(project.name) }}
                  <span class="font-medium text-slate-500 dark:text-slate-400"
                    >· {{ locale === 'zh' ? '项目' : locale === 'id' ? 'Proyek' : project.kind }}</span
                  ></p
                ><div class="mt-2 grid grid-cols-4 gap-1"
                  ><span
                    v-for="service in project.services"
                    :key="service.name"
                    class="flex flex-col items-center gap-0.5 text-center text-[10px] text-slate-600 dark:text-slate-300"
                    ><img :src="service.icon" :alt="service.name" class="h-4 w-4" />{{
                      service.name
                    }}</span
                  ></div
                ></div
              ></div
            ><p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ competitor.flyenvProjectsNote || (locale === 'zh' ? '每个项目都有自己的运行时、服务、端口和配置。' : locale === 'id' ? 'Setiap proyek memiliki runtime, layanan, port, dan konfigurasi sendiri.' : 'Each project has its own runtimes, services, ports, and configuration.') }}</p
            ></article
          >
        </div>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="differences-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="differences-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ competitor.differencesTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">{{
            competitor.differencesIntro
          }}</p></header
        ><div class="mt-12 grid gap-5 md:grid-cols-3"
          ><article
            v-for="(item, index) in competitor.differences"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >0{{ index + 1 }}</span
            ><h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black">{{ item.title }}</h3
            ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{
              item.body
            }}</p></article
          ></div
        ></div
      ></section
    >

    <section
      id="comparison"
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="model-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="model-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ competitor.scopeTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.scopeIntro }}</p
          ></header
        ><div class="relative mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center"
          ><article
            class="h-full rounded-3xl border border-orange-200 bg-white p-5 shadow-sm dark:border-orange-900/60 dark:bg-slate-950"
            ><div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >{{ competitor.mark }}</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">{{
                  competitor.name
                }}</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400">{{
                  competitor.modelCaption || competitor.model
                }}</p></div
              ></div
            ><div
              v-if="competitor.modelTree"
              class="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-950 dark:bg-orange-950/30"
              ><div
                class="rounded-xl border border-orange-100 bg-white px-3 py-2.5 text-center dark:border-orange-900/60 dark:bg-slate-900"
                ><p class="!m-0 !leading-4 text-[11px] font-bold text-slate-700 dark:text-slate-200"
                  >{{ competitor.modelTree.root }}</p
                ></div
              ><div class="flex h-6 items-center justify-center text-sm font-bold text-orange-400">↓</div
              ><div
                class="rounded-xl border border-orange-100 bg-white px-3 py-2.5 dark:border-orange-900/60 dark:bg-slate-900"
                ><p class="!m-0 !leading-4 text-[10px] font-bold text-orange-700 dark:text-orange-300"
                  >{{ competitor.modelTree.node }}</p
                ><div class="ml-3 mt-2 space-y-1.5 border-l border-orange-100 pl-3 dark:border-orange-900/60"
                  ><p
                    v-for="branch in competitor.modelTree.branches"
                    :key="branch"
                    class="!m-0 !leading-4 relative flex items-center gap-1.5 pl-3 text-[10px] text-slate-600 dark:text-slate-300"
                    ><span
                      class="absolute -left-3 top-1/2 h-px w-2 bg-orange-100 dark:bg-orange-900/60"
                    ></span
                    ><span class="text-slate-300 dark:text-slate-600">▸</span>{{ branch }}</p
                  ></div
                ></div
              ></div
            ><div
              v-else-if="competitor.modelServices"
              class="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-950 dark:bg-orange-950/30"
              ><div class="grid grid-cols-2 gap-2 sm:grid-cols-4"
                ><div
                  v-for="service in competitor.modelServices"
                  :key="service.name"
                  class="flex flex-col items-center gap-1 rounded-xl border border-orange-100 bg-white px-2 py-2.5 text-center dark:border-orange-900/60 dark:bg-slate-900"
                  ><img :src="service.icon" :alt="service.name" class="h-5 w-5" />
                  <span class="text-[10px] font-medium text-slate-700 dark:text-slate-200">{{
                    service.name
                  }}</span></div
                ></div
              ><div class="flex h-6 items-center justify-center text-sm font-bold text-orange-400">↓</div
              ><div
                class="rounded-xl border border-orange-100 bg-white px-3 py-2.5 dark:border-orange-900/60 dark:bg-slate-900"
                ><p class="!m-0 !leading-4 flex items-center gap-2 text-[10px] font-bold text-slate-700 dark:text-slate-200"
                  ><span
                    class="relative h-3.5 w-4 shrink-0 rounded-sm bg-sky-400 before:absolute before:-top-0.5 before:left-0 before:h-1 before:w-2 before:rounded-t-sm before:bg-sky-300"
                  ></span>{{ competitor.modelRoot }}</p
                ><div class="ml-3 mt-2 space-y-1.5 border-l border-orange-100 pl-3 dark:border-orange-900/60"
                  ><p
                    v-for="project in competitor.modelProjects"
                    :key="project"
                    class="!m-0 !leading-4 relative flex items-center gap-1.5 pl-3 text-[10px] text-slate-600 dark:text-slate-300"
                    ><span
                      class="absolute -left-3 top-1/2 h-px w-2 bg-orange-100 dark:bg-orange-900/60"
                    ></span
                    ><span class="text-slate-300 dark:text-slate-600">▸</span>{{ project }}</p
                  ></div
                ></div
              ></div
            ><div
              v-else
              class="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-950 dark:bg-orange-950/30"
              ><div class="grid gap-2 sm:grid-cols-2"
                ><div
                  v-for="scope in competitor.scopes"
                  :key="scope.title"
                  class="rounded-xl border border-orange-100 bg-white px-3 py-3 dark:border-orange-900/60 dark:bg-slate-900"
                  ><p class="!m-0 text-xs font-bold text-orange-900 dark:text-orange-200">{{
                    scope.title
                  }}</p
                  ><p class="!m-0 mt-1 text-[10px] text-slate-500 dark:text-slate-400">{{
                    scope.detail
                  }}</p
                  ><div class="mt-2 flex flex-wrap gap-2"
                    ><span
                      v-for="service in scope.services"
                      :key="service.name"
                      class="inline-flex items-center gap-1 text-[10px] text-slate-600 dark:text-slate-300"
                      ><img
                        v-if="service.icon"
                        :src="service.icon"
                        :alt="service.name"
                        class="h-4 w-4"
                      />{{ service.name }}</span
                    ></div
                  ></div
                ></div
              ></div
            ><ul class="mt-5 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li v-for="item in modelBulletItems" :key="item.text" class="flex gap-2"
                ><span :class="item.tone === 'warn' ? 'text-red-500' : 'text-emerald-600'">{{
                  item.tone === 'warn' ? '×' : '✓'
                }}</span>{{ item.text }}</li
              ></ul
            ></article
          ><div
            class="hidden h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/20 md:flex"
            >VS</div
          ><article
            class="h-full rounded-3xl border border-blue-200 bg-white p-5 shadow-sm dark:border-blue-900/60 dark:bg-slate-950"
            ><div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">FlyEnv</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400"
                  >{{ competitor.flyenvCaption || (locale === 'zh' ? '按项目划分的环境' : locale === 'id' ? 'Lingkungan berbasis proyek' : 'Project-based environments') }}</p
                ></div
              ></div
            ><div class="mt-6 grid min-h-[210px] items-stretch gap-2 sm:grid-cols-3"
              ><div
                v-for="project in flyenvProjects"
                :key="project.name"
                class="flex h-full flex-col rounded-xl border border-blue-100 bg-blue-50 p-3 dark:border-blue-950 dark:bg-blue-950/30"
                ><p class="!m-0 !leading-4 flex items-center gap-1 text-[10px] font-bold text-blue-700 dark:text-blue-300"
                  ><img
                    v-if="project.icon"
                    :src="project.icon"
                    :alt="project.name"
                    class="h-4 w-4 shrink-0"
                  />{{ projectDisplayName(project.name) }}</p
                ><div class="mt-8 flex flex-1 flex-col justify-between"
                  ><p
                    v-for="service in project.services"
                    :key="service.name"
                    class="!m-0 !leading-4 flex items-center gap-1.5 text-[10px] text-slate-600 dark:text-slate-300"
                    ><img :src="service.icon" :alt="service.name" class="h-4 w-4 shrink-0" />{{
                      service.name
                    }}</p
                  ></div
                ></div
              ></div
            ><ul class="mt-5 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li v-for="item in flyenvBullets" :key="item" class="flex gap-2"
                ><span class="text-emerald-600">✓</span>{{ item }}</li
              ></ul
            ></article
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="daily-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="daily-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.dailyTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.dailyIntro }}</p
          ></header
        ><div class="mt-12 grid gap-6 md:grid-cols-3"
          ><article
            v-for="(card, index) in competitor.dailyCards"
            :key="card.title"
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><div class="aspect-[16/10] bg-slate-950 p-4"
              ><img
                :src="card.image || dailyImageFallbacks[index]"
                :alt="localizedImageAlt(card.imageAlt)"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              /></div
            ><div class="p-6"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ card.title }}</h3
              ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ card.body }}</p></div
            ></article
          ></div
        ></div
      ></section
    >

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="table-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="table-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.featureTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.featureIntro }}</p
          ></header
        ><div
          class="mt-12 overflow-x-auto rounded-2xl border-x border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
          ><table class="!table !my-0 min-w-[760px] w-full border-collapse text-left text-base leading-6 lg:min-w-[860px]"
            ><thead
              class="bg-slate-100 text-sm uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              ><tr
                ><th class="px-6 py-0 font-bold">{{ copy.capability }}</th
                ><th class="px-6 py-0 font-bold">{{ competitor.name }}</th
                ><th class="px-6 py-0 font-bold">FlyEnv</th></tr
              ></thead
            ><tbody class="divide-y divide-slate-200 dark:divide-slate-800"
              ><tr v-for="row in competitor.featureRows" :key="row.name"
                ><th class="px-6 py-0 font-bold text-slate-800 dark:text-slate-100">{{
                  row.name
                }}</th
                ><td class="px-6 py-0 text-slate-600 dark:text-slate-300"
                  ><span
                    :class="row.competitorOk
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : isNotIncluded(row.competitor)
                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300'"
                    class="mr-2 inline-flex min-w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-bold"
                    >{{ statusLabel(row.competitor, row.competitorOk) }}</span
                  >{{ cellText(row.competitor, row.competitorOk) }}</td
                ><td class="px-6 py-0 text-slate-600 dark:text-slate-300"
                  ><span
                    :class="row.flyenvOk === false
                      ? isNotIncluded(row.flyenv)
                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300'
                      : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'"
                    class="mr-2 inline-flex min-w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-bold"
                    >{{ statusLabel(row.flyenv, row.flyenvOk !== false) }}</span
                  >{{ cellText(row.flyenv, row.flyenvOk !== false) }}</td
                ></tr
              ></tbody
            ></table
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="workflow-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="workflow-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ competitor.workflowTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.workflowIntro }}</p
          ></header
        ><div class="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800"
          ><div class="hidden grid-cols-2 border-b border-slate-200 bg-white md:grid dark:border-slate-800 dark:bg-slate-950"
            ><div class="flex items-center gap-3 border-r border-slate-200 px-6 py-5 dark:border-slate-800"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >{{ competitor.workflow.mark }}</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ copy.with }} {{ competitor.name }}</h3></div
            ><div class="flex items-center gap-3 px-6 py-5"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >{{ flyenvWorkflow.mark }}</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ copy.with }} FlyEnv</h3></div
            ></div
          ><div class="divide-y divide-slate-200 dark:divide-slate-800"
            ><div
              v-for="(row, index) in workflowRows"
              :key="`${row.competitor}-${index}`"
              class="grid gap-0 md:grid-cols-2"
            ><div
                class="border-b border-slate-200 bg-orange-50/60 px-5 py-4 dark:border-slate-800 dark:bg-orange-950/20 md:border-b-0 md:border-r"
              ><p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-orange-700 md:hidden dark:text-orange-300"
                >{{ copy.with }} {{ competitor.name }}</p
              ><div class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                ><span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white"
                  >{{ index + 1 }}</span
                ><p class="!m-0">{{ row.competitor }}</p></div
              ></div
            ><div class="bg-blue-50/60 px-5 py-4 dark:bg-blue-950/20"
              ><p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 md:hidden dark:text-blue-300"
                >{{ copy.with }} FlyEnv</p
              ><div class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                ><span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                  >{{ index + 1 }}</span
                ><p class="!m-0">{{ row.flyenv }}</p></div
              ></div
            ></div
          ></div
        ></div
        ></div
      ></section
    >

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="choice-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="choice-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.chooseTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.chooseIntro }}</p
          ></header
        ><div class="mt-10 grid items-stretch gap-3 md:grid-cols-2"
          ><article
            v-for="choice in competitor.choices"
            :key="choice.title"
            class="h-full rounded-3xl border-2 bg-white p-8 shadow-md dark:bg-slate-950"
            :class="
              choice.kind === 'competitor'
                ? 'border-orange-200 dark:border-orange-900/60'
                : 'border-blue-200 dark:border-blue-900/60'
            "
            ><h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black sm:!text-3xl"
              :class="
                choice.kind === 'competitor'
                  ? 'text-orange-700 dark:text-orange-300'
                  : 'text-blue-700 dark:text-blue-300'
              "
              >{{ choice.title }}</h3
            ><ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200"
              ><li v-for="item in choice.items" :key="item" class="flex items-start gap-3"
                ><span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-black"
                  :class="
                    choice.kind === 'competitor'
                      ? 'bg-orange-100 text-orange-600 dark:bg-orange-950/60 dark:text-orange-300'
                      : 'bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300'
                  "
                  >✓</span
                ><span>{{ item }}</span></li></ul
            ></article
          ></div
        ><p
          class="!mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
          >{{ competitor.choiceNote || (locale === 'zh' ? '如果生产一致性依赖容器，Docker Desktop 和项目的 Compose 文件仍是更直接的参考。' : locale === 'id' ? 'Jika kesamaan produksi bergantung pada container, Docker Desktop dan file Compose proyek tetap menjadi rujukan yang lebih langsung.' : 'If production parity depends on containers, Docker Desktop and the project\'s Compose files remain the more direct reference.') }}</p
        ></div
      ></section
    >

    <section
      v-if="competitor.faqs?.length"
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="faq-title"
      ><div class="mx-auto max-w-5xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="faq-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ locale === 'zh' ? '常见问题' : locale === 'id' ? 'Pertanyaan umum' : 'Frequently asked questions' }}</h2
          ></header
        ><div class="mt-10 grid items-stretch gap-3 md:grid-cols-2"
          ><article
            v-for="faq in competitor.faqs"
            :key="faq.question"
            class="h-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            ><h3 class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-slate-800 dark:text-slate-100">{{
              faq.question
            }}</h3
            ><p class="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">{{
              faq.answer
            }}</p></article
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-16 sm:px-10 lg:px-16"
      ><div
        class="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-sky-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-10"
        ><div
          ><h2 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black sm:!text-3xl"
            >{{ competitor.ctaTitle || (locale === 'zh' ? '在 FlyEnv 中尝试按项目开发' : locale === 'id' ? 'Coba pengembangan berbasis proyek di FlyEnv' : 'Try project-based development in FlyEnv') }}</h2
          ><p class="mt-2 max-w-2xl text-sm leading-6 text-blue-100"
            >{{ competitor.ctaDescription || (locale === 'zh' ? '创建本地站点，选择所需运行时和服务，然后开始工作。' : locale === 'id' ? 'Buat situs lokal, pilih runtime dan layanan yang diperlukan, lalu mulai bekerja.' : 'Create a local site, select the runtimes and services it needs, and start working.') }}</p
          ></div
        ><a
          :href="localizedHref('/download')"
          class="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold !text-blue-900 no-underline transition hover:bg-blue-50"
          >{{ copy.download }}</a
        ></div
      ></section
    >
  </main>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  interface Service {
    name: string
    icon?: string
  }
  interface Scope {
    title: string
    detail: string
    services: Service[]
  }
  interface Project {
    name: string
    kind: string
    services: Service[]
    icon?: string
  }
  interface FeatureRow {
    name: string
    competitor: string
    flyenv: string
    competitorOk: boolean
    flyenvOk?: boolean
  }
  interface Workflow {
    title: string
    mark: string
    kind: 'competitor' | 'flyenv'
    steps: string[]
  }
  interface Choice {
    title: string
    kind: 'competitor' | 'flyenv'
    items: string[]
  }
  interface Faq {
    question: string
    answer: string
  }
  interface Competitor {
    name: string
    mark: string
    model: string
    heroModelCaption?: string
    heroFlyenvCaption?: string
    heroTitle: string
    heroDescription: string
    platforms: string[]
    scopes: Scope[]
    scopeNote: string
    modelCaption?: string
    modelServices?: Service[]
    modelRoot?: string
    modelProjects?: string[]
    modelTree?: {
      root: string
      node: string
      branches: string[]
    }
    flyenvCaption?: string
    differencesTitle: string
    differencesIntro: string
    differences: { title: string; body: string }[]
    scopeTitle: string
    modelBullets: (string | { text: string; tone?: 'good' | 'warn' })[]
    dailyCards: {
      title: string
      placeholder: string
      body: string
      image: string
      imageAlt: string
    }[]
    featureRows: FeatureRow[]
    workflowTitle: string
    workflow: Workflow
    choices: Choice[]
    faqs?: Faq[]
    ctaTitle?: string
    ctaDescription?: string
    choiceNote?: string
    flyenvProjectsNote?: string
  }

  const props = defineProps<{
    competitor: Competitor
    flyenvProjects: Project[]
    flyenvBullets: string[]
    flyenvWorkflow: Workflow
    locale?: 'en' | 'zh' | 'id'
  }>()
  const { competitor, flyenvProjects, flyenvBullets, flyenvWorkflow } = props
  const locale = props.locale || 'en'
  const localizedHref = (href: string) => locale === 'en' || href.startsWith('http') ? href : href.replace(/^\//, `/${locale}/`)
  const localizedImageAlt = (value: string) => {
    const translations: Record<string, string> = locale === 'zh'
      ? {
          'FlyEnv runtime version installation interface': 'FlyEnv 运行时版本安装界面',
          'FlyEnv local site HTTPS configuration interface': 'FlyEnv 本地站点 HTTPS 配置界面',
          'FlyEnv service management interface': 'FlyEnv 服务管理界面'
        }
      : locale === 'id'
        ? {
            'FlyEnv runtime version installation interface': 'Antarmuka instalasi versi runtime FlyEnv',
            'FlyEnv local site HTTPS configuration interface': 'Antarmuka konfigurasi HTTPS situs lokal FlyEnv',
            'FlyEnv service management interface': 'Antarmuka pengelolaan layanan FlyEnv'
          }
        : {}
    return translations[value] || value
  }
  const projectDisplayName = (name: string) => {
    if (locale === 'zh') return name.replace('Laravel Project', 'Laravel 项目').replace('Node.js App', 'Node.js 应用').replace('Java App', 'Java 应用').replace(/^Project /, '项目 ')
    if (locale === 'id') return name.replace('Laravel Project', 'Proyek Laravel').replace('Node.js App', 'Aplikasi Node.js').replace('Java App', 'Aplikasi Java').replace(/^Project /, 'Proyek ')
    return name
  }
  const copy = computed(() => locale === 'zh'
    ? { comparison: '对比', download: '下载 FlyEnv', summary: '查看快速摘要', scopeIntro: '目标相同，开发范围不同。', dailyTitle: '日常开发中的实际体验', dailyIntro: '查看 FlyEnv 运行时、站点和服务工作流中的相同配置。', featureTitle: '功能对比', featureIntro: '常用能力的实用对比。', capability: '能力', workflowIntro: '并排查看同类工作的处理方式。', with: '使用', chooseTitle: '应该选择哪一个？', chooseIntro: '两种工具各有价值，正确选择取决于你的工作流。' }
    : locale === 'id'
      ? { comparison: 'Perbandingan', download: 'Unduh FlyEnv', summary: 'Lihat ringkasan', scopeIntro: 'Tujuan sama, cakupan pengembangan berbeda.', dailyTitle: 'Dalam pengembangan sehari-hari', dailyIntro: 'Lihat alur runtime, situs, dan layanan FlyEnv.', featureTitle: 'Perbandingan fitur', featureIntro: 'Perbandingan praktis kemampuan umum.', capability: 'Kemampuan', workflowIntro: 'Perbandingan berdampingan untuk pekerjaan yang sama.', with: 'Dengan', chooseTitle: 'Mana yang harus dipilih?', chooseIntro: 'Keduanya berguna; pilihan tepat bergantung pada alur kerja Anda.' }
      : { comparison: 'Comparison', download: 'Download FlyEnv', summary: 'Read quick summary', scopeIntro: 'Same purpose, different development scope.', dailyTitle: 'What this looks like in daily development', dailyIntro: "See the same setup in FlyEnv's runtime, Host, and service workflows.", featureTitle: 'Feature comparison', featureIntro: 'A practical comparison of commonly used capabilities.', capability: 'Capability', workflowIntro: 'A side-by-side look at the same kind of work.', with: 'With', chooseTitle: 'Which one should you choose?', chooseIntro: 'Both tools can be useful; the right choice depends on your workflow.' })
  const modelBulletItems = computed(() =>
    competitor.modelBullets.map((item) =>
      typeof item === 'string'
        ? { text: item, tone: item === 'Windows only' ? ('warn' as const) : ('good' as const) }
        : { text: item.text, tone: item.tone ?? ('good' as const) }
    )
  )
  const dailyImageFallbacks = [
    'https://oss.macphpstudy.com/image/quick-start-2.webp',
    'https://oss.macphpstudy.com/image/host-1.webp',
    'https://oss.macphpstudy.com/image/quick-start-3.webp'
  ]
  const workflowRows = computed(() => {
    const length = Math.max(competitor.workflow.steps.length, flyenvWorkflow.steps.length)
    return Array.from({ length }, (_, index) => ({
      competitor: competitor.workflow.steps[index] ?? (locale === 'zh' ? '继续项目设置' : locale === 'id' ? 'Lanjutkan penyiapan proyek' : 'Continue with the project setup'),
      flyenv: flyenvWorkflow.steps[index] ?? (locale === 'zh' ? '继续项目设置' : locale === 'id' ? 'Lanjutkan penyiapan proyek' : 'Continue with the project setup')
    }))
  })
  const isNotIncluded = (value: string) =>
    ['Not included', '未包含', 'Tidak termasuk'].some((label) => value.includes(label))
  const statusLabel = (value: string, ok: boolean) => {
    if (ok) return locale === 'zh' ? '可用' : locale === 'id' ? 'Tersedia' : 'Available'
    if (isNotIncluded(value)) return locale === 'zh' ? '未包含' : locale === 'id' ? 'Tidak termasuk' : 'Not included'
    return locale === 'zh' ? '有限' : locale === 'id' ? 'Terbatas' : 'Limited'
  }
  const cellText = (value: string, ok: boolean) =>
    value.trim() === statusLabel(value, ok) ? '' : value
</script>
