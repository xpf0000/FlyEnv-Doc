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
            >{{ tr('Comparison') }}</p
          >
          <h1
            class="!m-0 !border-0 !p-0 !text-4xl !leading-tight font-black tracking-tight text-slate-950 sm:!text-5xl lg:!text-6xl dark:text-white"
            >FlyEnv vs ServBay<span
              class="mt-3 block text-2xl font-bold leading-tight text-slate-700 sm:text-3xl lg:text-4xl dark:text-slate-200"
              >{{ tr('Two all-in-one local development workspaces. Which workflow fits you better?') }}</span
            ></h1
          >
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
            >{{ tr('FlyEnv and ServBay overlap substantially in runtimes, databases, web servers, local sites, HTTPS and MCP-based automation — much more than traditional local development tools. The differences are mainly in platform coverage, product emphasis and specific modules.') }}</p
          >
          <div class="mt-8 flex flex-wrap gap-3"
            ><a
              :href="localizedHref('/download')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold !text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
              >{{ tr('Download FlyEnv') }}</a
            ><a
              href="#comparison"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold !text-slate-800 no-underline transition hover:border-blue-400 dark:border-slate-700 dark:bg-slate-900/70 dark:!text-slate-100"
              >{{ tr('Read quick summary') }}</a
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
              ><span class="text-blue-600">✓</span> {{ tr('Free and open source') }}</span
            ></div
          >
        </div>
        <div class="grid items-stretch gap-5 sm:grid-cols-2">
          <article
            class="rounded-3xl border border-orange-200 bg-white/90 p-6 shadow-xl shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-900/90"
            ><div class="flex items-center gap-2.5"
              ><span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-xl font-black text-white"
                >S</span
              ><div
                ><h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">ServBay</h2
                ><p
                  class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400"
                  >{{ tr('macOS 12+ and Windows') }}</p
                ></div
              ></div
            ><ul class="mt-5 space-y-2.5"
              ><li
                v-for="platform in servbayPlatforms"
                :key="platform.name"
                class="flex items-center justify-between rounded-xl border border-orange-100 bg-orange-50/70 px-3.5 py-2.5 dark:border-orange-900/60 dark:bg-orange-950/30"
                ><span class="text-sm font-bold text-slate-800 dark:text-slate-100">{{
                  tr(platform.name)
                }}</span
                ><span
                  class="inline-flex min-w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-bold"
                  :class="
                    platform.ok
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                  "
                  >{{ platform.ok ? tr('Yes') : tr('No') }}</span
                ></li
              ></ul
            ><p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ tr('A strong all-in-one workspace for macOS and Windows developers.') }}</p
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
                ><p
                  class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400"
                  >{{ tr('macOS, Windows and Linux') }}</p
                ></div
              ></div
            ><ul class="mt-5 space-y-2.5"
              ><li
                v-for="platform in flyenvPlatforms"
                :key="platform"
                class="flex items-center justify-between rounded-xl border border-blue-100 bg-blue-50/70 px-3.5 py-2.5 dark:border-blue-950 dark:bg-blue-950/30"
                ><span class="text-sm font-bold text-slate-800 dark:text-slate-100">{{
                  tr(platform)
                }}</span
                ><span
                  class="inline-flex min-w-[4.5rem] justify-center rounded-full bg-emerald-100 px-2 py-0.5 text-[11px] font-bold text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300"
                  >{{ tr('Yes') }}</span
                ></li
              ></ul
            ><p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ tr('Native on all three desktop platforms, free and open source.') }}</p
            ></article
          >
        </div>
      </div>
    </section>

    <section
      id="comparison"
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="shared-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="shared-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('A large shared core, different priorities') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr('Both products cover the same foundation. Each then invests in a different set of strengths.') }}</p
          ></header
        ><div class="mt-12 grid gap-5 lg:grid-cols-3"
          ><article
            class="h-full rounded-3xl border border-orange-200 bg-white p-6 shadow-sm dark:border-orange-900/60 dark:bg-slate-950"
            ><div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >S</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                  >{{ tr('ServBay emphasis') }}</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400"
                  >{{ tr('Where ServBay goes deeper') }}</p
                ></div
              ></div
            ><ul class="mt-5 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li
                v-for="item in servbayEmphasis"
                :key="item.name"
                class="flex items-center gap-2 rounded-xl border border-orange-100 bg-orange-50/60 px-3 py-2 dark:border-orange-900/60 dark:bg-orange-950/20"
                ><img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="tr(item.name)"
                  class="h-4 w-4 shrink-0"
                /><span class="font-medium text-slate-700 dark:text-slate-200">{{
                  tr(item.name)
                }}</span></li
              ></ul
            ></article
          ><article
            class="h-full rounded-3xl border-2 border-slate-300 bg-white p-7 shadow-lg dark:border-slate-600 dark:bg-slate-900"
            ><div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-700 font-black text-white dark:bg-slate-600"
                >＝</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                  >{{ tr('Shared foundation') }}</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400"
                  >{{ tr('Both products include these') }}</p
                ></div
              ></div
            ><div class="mt-5 flex flex-wrap gap-2"
              ><span
                v-for="chip in sharedFoundation"
                :key="chip.name"
                class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                ><img
                  v-if="chip.icon"
                  :src="chip.icon"
                  :alt="tr(chip.name)"
                  class="h-4 w-4"
                />{{ tr(chip.name) }}</span
              ></div
            ><p class="mt-5 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >{{ tr('The shared core is genuinely large: runtimes, databases, web servers, local sites, managed HTTPS, local AI models, mail testing, tunnels and MCP support are present on both sides.') }}</p
            ></article
          ><article
            class="h-full rounded-3xl border border-sky-200 bg-white p-6 shadow-sm dark:border-sky-900/60 dark:bg-slate-950"
            ><div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                  >{{ tr('FlyEnv emphasis') }}</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400"
                  >{{ tr('Where FlyEnv goes further') }}</p
                ></div
              ></div
            ><ul class="mt-5 space-y-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li
                v-for="item in flyenvEmphasis"
                :key="item.name"
                class="flex items-center gap-2 rounded-xl border border-blue-100 bg-blue-50/60 px-3 py-2 dark:border-blue-950 dark:bg-blue-950/20"
                ><img
                  v-if="item.icon"
                  :src="item.icon"
                  :alt="tr(item.name)"
                  class="h-4 w-4 shrink-0"
                /><span class="font-medium text-slate-700 dark:text-slate-200">{{
                  tr(item.name)
                }}</span></li
              ></ul
            ></article
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="differences-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="differences-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('Three key differences') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr('Both are credible all-in-one workspaces. These are the differences that actually matter.') }}</p
          ></header
        ><div class="mt-12 grid gap-5 md:grid-cols-3"
          ><article
            v-for="(item, index) in differences"
            :key="item.title"
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >0{{ index + 1 }}</span
            ><h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr(item.title) }}</h3
            ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ tr(item.body) }}</p
            ></article
          ></div
        ></div
      ></section
    >

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="daily-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="daily-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('What this looks like in daily development') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr("See the same setup in FlyEnv's runtime, site, and service workflows.") }}</p
          ></header
        ><div class="mt-12 grid gap-6 md:grid-cols-3"
          ><article
            v-for="card in dailyCards"
            :key="card.title"
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><div class="aspect-[16/10] bg-slate-950 p-4"
              ><img
                :src="card.image"
                :alt="tr(card.imageAlt)"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              /></div
            ><div class="p-6"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr(card.title) }}</h3
              ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">{{ tr(card.body) }}</p></div
            ></article
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="table-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="table-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('Feature comparison') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr('A practical comparison: a large shared core, plus real strengths on each side.') }}</p
          ></header
        ><div
          class="mt-12 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr('Shared capabilities') }}</h3
          ><p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300"
            >{{ tr('Both products provide these — no winner here, just a genuinely overlapping core.') }}</p
          ><div class="mt-5 flex flex-wrap gap-2"
            ><span
              v-for="chip in sharedCapabilities"
              :key="chip.name"
              class="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              ><img
                v-if="chip.icon"
                :src="chip.icon"
                :alt="tr(chip.name)"
                class="h-4 w-4"
              />{{ tr(chip.name) }}</span
            ></div
          ></div
        ><div class="mt-6 grid items-stretch gap-6 lg:grid-cols-2"
          ><div
            class="flex h-full flex-col overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm dark:border-blue-900/60 dark:bg-slate-950"
            ><div class="border-b border-blue-100 px-6 py-5 dark:border-blue-950"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black text-blue-700 dark:text-blue-300"
                >{{ tr('Where FlyEnv goes further') }}</h3
              ></div
            ><div class="flex-1 overflow-x-auto"
              ><table class="!table !my-0 h-full w-full table-fixed border-collapse text-left text-sm leading-6"
                ><thead
                  class="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                  ><tr
                    ><th class="px-3 py-0 font-bold sm:px-6">{{ tr('Capability') }}</th
                    ><th class="px-3 py-0 font-bold sm:px-6">ServBay</th
                    ><th class="px-3 py-0 font-bold sm:px-6">FlyEnv</th></tr
                  ></thead
                ><tbody class="divide-y divide-slate-200 dark:divide-slate-800"
                  ><tr v-for="row in flyenvRows" :key="row.name"
                    ><th class="px-3 py-0 font-bold sm:px-6 text-slate-800 dark:text-slate-100">{{
                      tr(row.name)
                    }}</th
                    ><td
                      class="px-3 py-0 ![word-break:normal] text-slate-600 sm:px-6 dark:text-slate-300"
                    ><span :class="pillClass(row.servbay.status)">{{ tr(row.servbay.label) }}</span
                      ><span v-if="row.servbay.text">{{ tr(row.servbay.text) }}</span></td
                    ><td
                      class="px-3 py-0 ![word-break:normal] text-slate-600 sm:px-6 dark:text-slate-300"
                    ><span :class="pillClass(row.flyenv.status)">{{ tr(row.flyenv.label) }}</span
                      ><span v-if="row.flyenv.text">{{ tr(row.flyenv.text) }}</span></td
                    ></tr
                  ></tbody
                ></table
              ></div
            ></div
          ><div
            class="flex h-full flex-col overflow-hidden rounded-3xl border border-orange-200 bg-white shadow-sm dark:border-orange-900/60 dark:bg-slate-950"
            ><div class="border-b border-orange-100 px-6 py-5 dark:border-orange-950"
              ><h3
                class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black text-orange-700 dark:text-orange-300"
                >{{ tr('Where ServBay goes further') }}</h3
              ></div
            ><div class="flex-1 overflow-x-auto"
              ><table class="!table !my-0 h-full w-full table-fixed border-collapse text-left text-sm leading-6"
                ><thead
                  class="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
                  ><tr
                    ><th class="px-3 py-0 font-bold sm:px-6">{{ tr('Capability') }}</th
                    ><th class="px-3 py-0 font-bold sm:px-6">ServBay</th
                    ><th class="px-3 py-0 font-bold sm:px-6">FlyEnv</th></tr
                  ></thead
                ><tbody class="divide-y divide-slate-200 dark:divide-slate-800"
                  ><tr v-for="row in servbayRows" :key="row.name"
                    ><th class="px-3 py-0 font-bold sm:px-6 text-slate-800 dark:text-slate-100">{{
                      tr(row.name)
                    }}</th
                    ><td
                      class="px-3 py-0 ![word-break:normal] text-slate-600 sm:px-6 dark:text-slate-300"
                    ><span :class="pillClass(row.servbay.status)">{{ tr(row.servbay.label) }}</span
                      ><span v-if="row.servbay.text">{{ tr(row.servbay.text) }}</span></td
                    ><td
                      class="px-3 py-0 ![word-break:normal] text-slate-600 sm:px-6 dark:text-slate-300"
                    ><span :class="pillClass(row.flyenv.status)">{{ tr(row.flyenv.label) }}</span
                      ><span v-if="row.flyenv.text">{{ tr(row.flyenv.text) }}</span></td
                    ></tr
                  ></tbody
                ></table
              ></div
            ></div
          ></div
        ></div
      ></section
    >

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="workflow-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="workflow-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('Same goal, different workflow') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr('Managing several different local project stacks, side by side.') }}</p
          ></header
        ><div
          class="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800"
          ><div
            class="hidden grid-cols-2 border-b border-slate-200 bg-white md:grid dark:border-slate-800 dark:bg-slate-950"
            ><div
              class="flex items-center gap-3 border-r border-slate-200 px-6 py-5 dark:border-slate-800"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >S</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr('With ServBay') }}</h3></div
            ><div class="flex items-center gap-3 px-6 py-5"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr('With FlyEnv') }}</h3></div
            ></div
          ><div class="divide-y divide-slate-200 dark:divide-slate-800"
            ><div
              v-for="(row, index) in workflowRows"
              :key="index"
              class="grid gap-0 md:grid-cols-2"
              ><div
                class="border-b border-slate-200 bg-orange-50/60 px-5 py-4 dark:border-slate-800 dark:bg-orange-950/20 md:border-b-0 md:border-r"
                ><p
                  class="mb-1 text-[11px] font-bold uppercase tracking-wide text-orange-700 md:hidden dark:text-orange-300"
                  >{{ tr('With ServBay') }}</p
                ><div
                  class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                  ><span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white"
                    >{{ index + 1 }}</span
                  ><p class="!m-0">{{ tr(row.servbay) }}</p></div
                ></div
              ><div class="bg-blue-50/60 px-5 py-4 dark:bg-blue-950/20"
                ><p
                  class="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 md:hidden dark:text-blue-300"
                  >{{ tr('With FlyEnv') }}</p
                ><div
                  class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                  ><span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                    >{{ index + 1 }}</span
                  ><p class="!m-0">{{ tr(row.flyenv) }}</p></div
                ></div
              ></div
            ></div
          ></div
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="choice-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="choice-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('Which one should you choose?') }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ tr('Both tools can be useful; the right choice depends on your workflow.') }}</p
          ></header
        ><div class="mt-10 grid items-stretch gap-3 md:grid-cols-2"
          ><article
            class="h-full rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-md dark:border-orange-900/60 dark:bg-slate-950"
            ><h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-orange-700 sm:!text-3xl dark:text-orange-300"
              >{{ tr('Choose ServBay if') }}</h3
            ><ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200"
              ><li v-for="item in chooseServbay" :key="item" class="flex items-start gap-3"
                ><span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300"
                  >✓</span
                ><span>{{ tr(item) }}</span></li
              ></ul
            ></article
          ><article
            class="h-full rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-md dark:border-blue-900/60 dark:bg-slate-950"
            ><h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-blue-700 sm:!text-3xl dark:text-blue-300"
              >{{ tr('Choose FlyEnv if') }}</h3
            ><ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200"
              ><li v-for="item in chooseFlyenv" :key="item" class="flex items-start gap-3"
                ><span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300"
                  >✓</span
                ><span>{{ tr(item) }}</span></li
              ></ul
            ></article
          ></div
        ><p
          class="!mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
          >{{ tr('Both are capable all-in-one workspaces. If you are on macOS or Windows, the deciding factor is usually workflow preference and the specific modules you rely on.') }}</p
        ></div
      ></section
    >

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="faq-title"
      ><div class="mx-auto max-w-5xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="faq-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ tr('Frequently asked questions') }}</h2
          ></header
        ><div class="mt-10 grid items-stretch gap-3 md:grid-cols-2"
          ><article
            v-for="faq in faqs"
            :key="faq.question"
            class="h-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            ><h3
              class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-slate-800 dark:text-slate-100"
              >{{ tr(faq.question) }}</h3
            ><p class="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">{{
              tr(faq.answer)
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
            >{{ tr('Try a different all-in-one local development workflow') }}</h2
          ><p class="mt-2 max-w-2xl text-sm leading-6 text-blue-100"
            >{{ tr('FlyEnv brings runtimes, sites, services, database tools and MCP automation together on macOS, Windows and Linux.') }}</p
          ></div
        ><a
          :href="localizedHref('/download')"
          class="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold !text-blue-900 no-underline transition hover:bg-blue-50"
          >{{ tr('Download FlyEnv') }}</a
        ></div
      ></section
    >
  </main>
</template>

<script setup lang="ts">
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' | 'es' }>()
  const locale = props.locale || 'en'
  const localizedHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`)
  type Status = 'yes' | 'no' | 'partial'

  const servbayPlatforms = [
    { name: 'macOS', ok: true },
    { name: 'Windows', ok: true },
    { name: 'Linux', ok: false }
  ]

  const flyenvPlatforms = ['macOS', 'Windows', 'Linux']

  const logo = (name: string) => `https://oss.macphpstudy.com/image/assets/demo-logos/${name}.svg`

  const sharedFoundation = [
    { name: 'PHP', icon: logo('php') },
    { name: 'Node.js', icon: logo('nodedotjs') },
    { name: 'Python', icon: logo('python') },
    { name: 'Nginx', icon: logo('nginx') },
    { name: 'Apache', icon: logo('apache') },
    { name: 'Caddy', icon: logo('caddy') },
    { name: 'MySQL', icon: logo('mysql') },
    { name: 'PostgreSQL', icon: logo('postgresql') },
    { name: 'Redis', icon: logo('redis') },
    { name: 'Local Sites' },
    { name: 'HTTPS' },
    { name: 'Multiple versions' },
    { name: 'Ollama (local models)', icon: logo('ollama') },
    { name: 'Mail testing' },
    { name: 'Public tunnels' },
    { name: 'MCP' }
  ]

  const servbayEmphasis = [
    { name: 'AI Gateway (virtual keys, cost tracking)' },
    { name: 'PKI & ACME Certificates' },
    { name: 'Tunnels · 4 providers', icon: logo('cloudflare') },
    { name: 'Multiple DB instances (Pro)', icon: logo('mysql') }
  ]

  const flyenvEmphasis = [
    { name: 'Linux Support' },
    { name: 'Startup Groups' },
    { name: 'Integrated DB Tools', icon: logo('mysql') },
    { name: 'Broader Desktop Modules', icon: logo('flutter') },
    { name: 'Cross-platform Project Workflows' }
  ]

  const differences = [
    {
      title: 'macOS & Windows vs macOS, Windows & Linux',
      body: 'ServBay runs on macOS and Windows. FlyEnv runs natively on macOS, Windows and Linux — the clearest objective difference for cross-platform teams.'
    },
    {
      title: 'AI and model tooling vs project and service workflow',
      body: 'ServBay invests heavily in AI: a first-party AI Gateway with virtual keys, model and provider routing, and usage and cost tracking — a core selling point. FlyEnv covers local models and AI gateways through managed Ollama and CLIProxyAPI modules, and invests in the development workflow itself: Startup Groups, project and site management, integrated database tools and broader desktop modules.'
    },
    {
      title: 'Different strengths beyond the shared core',
      body: 'Beyond the shared core, ServBay goes further with a PKI/ACME public certificate system and four built-in tunnel providers. FlyEnv adds Linux support, Tomcat and Flutter modules, and database GUIs such as pgAdmin, DbGate and Redis Commander.'
    }
  ]

  const dailyCards = [
    {
      title: 'Integrated database tools',
      body: 'Open phpMyAdmin, pgAdmin, DbGate or Redis Commander for the database or cache a project uses — managed inside the same workspace.',
      image: 'https://oss.macphpstudy.com/image/database-1.webp',
      imageAlt: 'FlyEnv database management interface'
    },
    {
      title: 'Project sites with domains and HTTPS',
      body: 'Per-project sites, custom domains and managed local HTTPS.',
      image: 'https://oss.macphpstudy.com/image/host-1.webp',
      imageAlt: 'FlyEnv local site HTTPS configuration interface'
    },
    {
      title: 'Startup Groups for project stacks',
      body: 'Start exactly the services each project needs, in one click.',
      image: 'https://oss.macphpstudy.com/image/features/startup-groups-1.webp',
      imageAlt: 'FlyEnv service management interface'
    }
  ]

  const sharedCapabilities = [
    { name: 'PHP', icon: logo('php') },
    { name: 'Node.js', icon: logo('nodedotjs') },
    { name: 'Python', icon: logo('python') },
    { name: 'Go', icon: logo('go') },
    { name: 'Java', icon: logo('openjdk') },
    { name: 'Apache', icon: logo('apache') },
    { name: 'Nginx', icon: logo('nginx') },
    { name: 'Caddy', icon: logo('caddy') },
    { name: 'MySQL', icon: logo('mysql') },
    { name: 'MariaDB', icon: logo('mariadb') },
    { name: 'PostgreSQL', icon: logo('postgresql') },
    { name: 'MongoDB', icon: logo('mongodb') },
    { name: 'Redis', icon: logo('redis') },
    { name: 'Local sites & domains' },
    { name: 'Local HTTPS' },
    { name: 'Local DNS server' },
    { name: 'Local models (Ollama)', icon: logo('ollama') },
    { name: 'Local mail testing (SMTP/POP3)' },
    { name: 'Public tunnels' },
    { name: 'MCP Server' },
    { name: 'Per-project configuration' },
    { name: 'Multiple versions' }
  ]

  interface FeatureCell {
    label: string
    text: string
    status: Status
  }
  interface FeatureRow {
    name: string
    servbay: FeatureCell
    flyenv: FeatureCell
  }

  const flyenvRows: FeatureRow[] = [
    {
      name: 'Linux support',
      servbay: { label: 'Not available', text: '', status: 'no' },
      flyenv: { label: 'Native support', text: '', status: 'yes' }
    },
    {
      name: 'Startup Groups (per-project service stacks)',
      servbay: { label: 'Not available', text: '', status: 'no' },
      flyenv: { label: 'Built-in', text: '', status: 'yes' }
    },
    {
      name: 'Database GUI tools',
      servbay: { label: 'Built-in', text: 'phpMyAdmin, Adminer', status: 'yes' },
      flyenv: {
        label: 'Built-in',
        text: 'phpMyAdmin, pgAdmin, DbGate, Redis Commander and more',
        status: 'yes'
      }
    },
    {
      name: 'Java servlet server',
      servbay: { label: 'Not available', text: '', status: 'no' },
      flyenv: { label: 'Built-in', text: 'Tomcat module', status: 'yes' }
    },
    {
      name: 'Open source',
      servbay: { label: 'Closed source', text: 'Free tier plus paid Pro', status: 'no' },
      flyenv: {
        label: 'Open source',
        text: 'Core free; optional $10 license for premium tools',
        status: 'yes'
      }
    }
  ]

  const servbayRows: FeatureRow[] = [
    {
      name: 'AI Gateway (routing, virtual keys, cost tracking)',
      servbay: { label: 'Built-in', text: 'First-party, included in the free tier', status: 'yes' },
      flyenv: { label: 'Module', text: 'CLIProxyAPI local gateway and AI CLI tools', status: 'partial' }
    },
    {
      name: 'Public certificates (PKI/ACME)',
      servbay: { label: 'Built-in', text: '(Pro)', status: 'yes' },
      flyenv: { label: 'Partial', text: 'Local CA and mkcert — self-signed only', status: 'partial' }
    },
    {
      name: 'Tunnel providers',
      servbay: { label: 'Built-in', text: 'Cloudflared, FRP, Ngrok, Pinggy (Pro)', status: 'yes' },
      flyenv: { label: 'Module', text: 'Cloudflare Tunnel (managed named tunnels)', status: 'partial' }
    },
    {
      name: 'Multiple database instances',
      servbay: { label: 'Built-in', text: 'Multiple instances of any database (Pro)', status: 'yes' },
      flyenv: {
        label: 'Partial',
        text: 'MySQL group instances; multiple versions side by side',
        status: 'partial'
      }
    }
  ]

  const pillClass = (status: Status) => {
    const base =
      'mr-2 inline-flex min-w-[4.5rem] justify-center whitespace-nowrap rounded-full px-2 py-0.5 text-[11px] font-bold'
    if (status === 'yes')
      return `${base} bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300`
    if (status === 'no')
      return `${base} bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300`
    return `${base} bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300`
  }

  const workflowRows = [
    {
      servbay: 'Install the languages and services you need',
      flyenv: 'Install the runtimes and modules you need'
    },
    {
      servbay: 'Create websites for each project',
      flyenv: 'Create a local site per project'
    },
    {
      servbay: 'Assign per-project runtime versions',
      flyenv: 'Assign each project its runtime and web server'
    },
    {
      servbay: 'Enable SSL and local DNS per site',
      flyenv: 'Enable HTTPS per project'
    },
    {
      servbay: 'Optionally group websites and configure services (Pro)',
      flyenv: 'Start each project stack with Startup Groups'
    }
  ]

  const chooseServbay = [
    'You develop on macOS or Windows.',
    "You value ServBay's first-party AI Gateway with provider routing and cost tracking.",
    'You want its integrated PKI/ACME public certificates or four tunnel providers.',
    "ServBay's package/service model matches how you organize local environments.",
    'You need legacy runtimes such as PHP 5.3.'
  ]

  const chooseFlyenv = [
    'You need Linux as well as macOS and Windows.',
    "You prefer FlyEnv's Startup Groups and project/service workflow.",
    'You rely on FlyEnv-specific modules or integrated database management tools.',
    'You want one open-source workspace for your development and MCP workflows.'
  ]

  const faqs = [
    {
      question: 'Is FlyEnv a good ServBay alternative?',
      answer:
        'Yes, it is one of the closest peers: both are all-in-one local development workspaces. FlyEnv is the more direct alternative if you need Linux, Startup Groups or its specific modules; ServBay is stronger if you want its first-party AI Gateway, PKI/ACME certificates or multiple tunnel providers.'
    },
    {
      question: 'What is the biggest difference between FlyEnv and ServBay?',
      answer:
        'Platform coverage and product emphasis: FlyEnv adds Linux and focuses on development modules and project workflows; ServBay focuses on its AI Gateway, PKI/ACME public certificates, multi-provider tunnels and wider legacy version coverage.'
    },
    {
      question: 'Does ServBay support Linux?',
      answer:
        "ServBay's current desktop application is officially offered for macOS and Windows. FlyEnv supports macOS, Windows and Linux."
    },
    {
      question: 'Is FlyEnv really free?',
      answer:
        'The core is: FlyEnv is open source, and all runtimes, databases and environment management features are always accessible without paying. The free evaluation version limits you to 3 local sites, and a few premium tools (AI assistant, screenshot, image optimizer) are 3-day trials; a $10 Personal license removes those limits. ServBay similarly offers a free tier (5 websites) with Pro features such as the mail server, tunnels and PKI/ACME requiring a paid license.'
    },
    {
      question: 'Do both tools support MCP and AI workflows?',
      answer:
        'Yes. ServBay includes an MCP Server and a first-party AI Gateway with routing and cost tracking in its free tier. FlyEnv provides an MCP Server, a managed Ollama module for local models, a CLIProxyAPI local AI gateway and AI coding client modules — both let AI tools manage your local environment.'
    },
    {
      question: 'Can both run multiple PHP versions per project?',
      answer:
        'Yes. Both support multiple coexisting PHP versions with per-project/per-site assignment. ServBay covers older versions (from PHP 5.3); FlyEnv focuses on currently used versions.'
    },
    {
      question: 'Can I migrate from ServBay to FlyEnv?',
      answer:
        'Yes. Projects are plain directories; recreate the site in FlyEnv, assign the same runtime versions, and point the domain at the project. Databases can be exported/imported with standard tools.'
    },
    {
      question: 'Which one should a team standardize on?',
      answer:
        "If the team is macOS/Windows-only and wants ServBay's AI/PKI features, ServBay fits. If the team includes Linux developers or wants an open-source tool with per-project service stacks, FlyEnv fits better."
    }
  ]

  const maps: Record<string, Record<string, string>> = {
    zh: {
      Comparison: '比较', 'Two all-in-one local development workspaces. Which workflow fits you better?': '两个一体化本地开发工作区。哪种工作流更适合你？', 'Download FlyEnv': '下载 FlyEnv', 'Read quick summary': '查看快速摘要', 'Free and open source': '免费且开源', 'macOS 12+ and Windows': 'macOS 12+ 和 Windows', Yes: '是', No: '否', 'A strong all-in-one workspace for macOS and Windows developers.': '适合 macOS 和 Windows 开发者的一体化工作区。', 'macOS, Windows and Linux': 'macOS、Windows 和 Linux', 'Native on all three desktop platforms, free and open source.': '原生支持三大桌面平台，免费且开源。',
      'A large shared core, different priorities': '共享核心很大，但侧重点不同', 'Both products cover the same foundation. Each then invests in a different set of strengths.': '两款产品覆盖相同基础能力，但各自投入于不同优势。', 'ServBay emphasis': 'ServBay 的侧重点', 'Where ServBay goes deeper': 'ServBay 深耕的领域', 'Shared foundation': '共同基础', 'Both products include these': '两款产品都包含', 'The shared core is genuinely large: runtimes, databases, web servers, local sites, managed HTTPS, local AI models, mail testing, tunnels and MCP support are present on both sides.': '两者的共同核心非常广泛：运行时、数据库、Web 服务器、本地站点、托管 HTTPS、本地 AI 模型、邮件测试、隧道和 MCP 支持都已提供。', 'FlyEnv emphasis': 'FlyEnv 的侧重点', 'Where FlyEnv goes further': 'FlyEnv 扩展的领域',
      'Three key differences': '三个关键差异', 'Both are credible all-in-one workspaces. These are the differences that actually matter.': '两者都是可靠的一体化工作区，以下是实际重要的差异。', 'What this looks like in daily development': '日常开发中的实际体验', "See the same setup in FlyEnv's runtime, site, and service workflows.": '在 FlyEnv 的运行时、站点和服务工作流中查看相同配置。', 'Feature comparison': '功能对比', 'A practical comparison: a large shared core, plus real strengths on each side.': '实用对比：共同核心很大，同时各有真正的优势。', 'Shared capabilities': '共同能力', 'Both products provide these — no winner here, just a genuinely overlapping core.': '两款产品都提供这些能力——这里没有胜负，只有真正重叠的核心。', Capability: '能力', 'Same goal, different workflow': '目标相同，工作流不同', 'Managing several different local project stacks, side by side.': '并行管理多个不同的本地项目堆栈。', 'With ServBay': '使用 ServBay', 'With FlyEnv': '使用 FlyEnv', 'Which one should you choose?': '应该选择哪一个？', 'Both tools can be useful; the right choice depends on your workflow.': '两款工具都很有用，正确选择取决于你的工作流。', 'Choose ServBay if': '适合选择 ServBay 的情况', 'Choose FlyEnv if': '适合选择 FlyEnv 的情况', 'Both are capable all-in-one workspaces. If you are on macOS or Windows, the deciding factor is usually workflow preference and the specific modules you rely on.': '两者都是强大的一体化工作区。如果你使用 macOS 或 Windows，决定因素通常是工作流偏好和所依赖的具体模块。', 'Frequently asked questions': '常见问题', 'Try a different all-in-one local development workflow': '尝试另一种一体化本地开发工作流', 'FlyEnv brings runtimes, sites, services, database tools and MCP automation together on macOS, Windows and Linux.': 'FlyEnv 在 macOS、Windows 和 Linux 上将运行时、站点、服务、数据库工具和 MCP 自动化集中到一起。',
      'Linux support': 'Linux 支持', 'Native support': '原生支持', 'Not available': '不可用', 'Built-in': '内置', 'Database GUI tools': '数据库图形工具', 'Java servlet server': 'Java Servlet 服务器', 'Open source': '开源', 'Closed source': '闭源', 'Free tier plus paid Pro': '免费层级，Pro 版付费', 'AI Gateway (routing, virtual keys, cost tracking)': 'AI 网关（路由、虚拟密钥、成本追踪）', 'Public certificates (PKI/ACME)': '公共证书（PKI/ACME）', 'Tunnel providers': '隧道提供商', 'Multiple database instances': '多个数据库实例', 'Startup Groups (per-project service stacks)': '启动组（按项目的服务堆栈）', 'Integrated database tools': '集成数据库工具', 'Project sites with domains and HTTPS': '带域名和 HTTPS 的项目站点', 'Startup Groups for project stacks': '项目堆栈的启动组', 'Same purpose, different development scope.': '目标相同，开发范围不同。', 'macOS & Windows vs macOS, Windows & Linux': 'macOS 和 Windows 对比 macOS、Windows 和 Linux', 'Different strengths beyond the shared core': '共享核心之外的不同优势', 'Local sites & domains': '本地站点和域名', 'Local HTTPS': '本地 HTTPS', 'Local DNS server': '本地 DNS 服务器', 'Local models (Ollama)': '本地模型（Ollama）', 'Local mail testing (SMTP/POP3)': '本地邮件测试（SMTP/POP3）', 'Public tunnels': '公共隧道', 'MCP Server': 'MCP 服务器', 'Per-project configuration': '按项目配置', 'Multiple versions': '多个版本', 'Local Sites': '本地站点', HTTPS: 'HTTPS', 'Ollama (local models)': 'Ollama（本地模型）', 'Mail testing': '邮件测试', MCP: 'MCP', 'Linux Support': 'Linux 支持', 'Startup Groups': '启动组', 'Integrated DB Tools': '集成数据库工具', 'Broader Desktop Modules': '更丰富的桌面模块', 'Cross-platform Project Workflows': '跨平台项目工作流',
      'AI Gateway (virtual keys, cost tracking)': 'AI 网关（虚拟密钥、成本追踪）', 'PKI & ACME Certificates': 'PKI 和 ACME 证书', 'Tunnels · 4 providers': '隧道 · 4 个提供商', 'Multiple DB instances (Pro)': '多个数据库实例（Pro）', 'Install the languages and services you need': '安装所需的语言和服务', 'Install the runtimes and modules you need': '安装所需的运行时和模块', 'Create websites for each project': '为每个项目创建网站', 'Create a local site per project': '为每个项目创建本地站点', 'Assign per-project runtime versions': '为项目分配运行时版本', 'Assign each project its runtime and web server': '为每个项目分配运行时和 Web 服务器', 'Enable SSL and local DNS per site': '为每个站点启用 SSL 和本地 DNS', 'Enable HTTPS per project': '为每个项目启用 HTTPS', 'Optionally group websites and configure services (Pro)': '可选择对网站分组并配置服务（Pro）', 'Start each project stack with Startup Groups': '使用启动组启动每个项目堆栈', 'You develop on macOS or Windows.': '你在 macOS 或 Windows 上开发。', "You value ServBay's first-party AI Gateway with provider routing and cost tracking.": '你看重 ServBay 自有的 AI 网关、提供商路由和成本追踪。', 'You want its integrated PKI/ACME public certificates or four tunnel providers.': '你需要其集成的 PKI/ACME 公共证书或四个隧道提供商。', "ServBay's package/service model matches how you organize local environments.": 'ServBay 的软件包/服务模式符合你组织本地环境的方式。', 'You need legacy runtimes such as PHP 5.3.': '你需要 PHP 5.3 等旧版运行时。', 'You need Linux as well as macOS and Windows.': '你需要 Linux 以及 macOS 和 Windows。', "You prefer FlyEnv's Startup Groups and project/service workflow.": '你偏好 FlyEnv 的启动组和项目/服务工作流。', 'You rely on FlyEnv-specific modules or integrated database management tools.': '你依赖 FlyEnv 专属模块或集成数据库管理工具。', 'You want one open-source workspace for your development and MCP workflows.': '你希望使用一个开源工作区处理开发和 MCP 工作流。',
      'Is FlyEnv a good ServBay alternative?': 'FlyEnv 是 ServBay 的好替代品吗？', 'What is the biggest difference between FlyEnv and ServBay?': 'FlyEnv 和 ServBay 最大的区别是什么？', 'Does ServBay support Linux?': 'ServBay 支持 Linux 吗？', 'Is FlyEnv really free?': 'FlyEnv 真的是免费的吗？', 'Do both tools support MCP and AI workflows?': '两款工具都支持 MCP 和 AI 工作流吗？', 'Can both run multiple PHP versions per project?': '两款工具都能为每个项目运行多个 PHP 版本吗？', 'Can I migrate from ServBay to FlyEnv?': '可以从 ServBay 迁移到 FlyEnv 吗？', 'Which one should a team standardize on?': '团队应该统一采用哪一个？', 'Yes, it is one of the closest peers: both are all-in-one local development workspaces. FlyEnv is the more direct alternative if you need Linux, Startup Groups or its specific modules; ServBay is stronger if you want its first-party AI Gateway, PKI/ACME certificates or multiple tunnel providers.': '可以，它们都是非常接近的一体化本地开发工作区。如果你需要 Linux、启动组或 FlyEnv 的专属模块，FlyEnv 是更直接的替代方案；如果你需要自有 AI 网关、PKI/ACME 证书或多个隧道提供商，ServBay 更强。', 'Platform coverage and product emphasis: FlyEnv adds Linux and focuses on development modules and project workflows; ServBay focuses on its AI Gateway, PKI/ACME public certificates, multi-provider tunnels and wider legacy version coverage.': '平台覆盖和产品侧重点不同：FlyEnv 增加 Linux，专注开发模块和项目工作流；ServBay 则侧重 AI 网关、PKI/ACME 公共证书、多提供商隧道和更广泛的旧版本支持。', "ServBay's current desktop application is officially offered for macOS and Windows. FlyEnv supports macOS, Windows and Linux.": 'ServBay 当前桌面应用正式支持 macOS 和 Windows；FlyEnv 支持 macOS、Windows 和 Linux。', 'Yes. ServBay includes an MCP Server and a first-party AI Gateway with routing and cost tracking in its free tier. FlyEnv provides an MCP Server, a managed Ollama module for local models, a CLIProxyAPI local AI gateway and AI coding client modules — both let AI tools manage your local environment.': '支持。ServBay 在免费层级中提供 MCP 服务器和带路由与成本追踪的自有 AI 网关；FlyEnv 提供 MCP 服务器、托管 Ollama 本地模型模块、CLIProxyAPI 本地 AI 网关和 AI 编程客户端模块——两者都能让 AI 工具管理本地环境。', 'Yes. Both support multiple coexisting PHP versions with per-project/per-site assignment. ServBay covers older versions (from PHP 5.3); FlyEnv focuses on currently used versions.': '支持。两者都支持共存的多个 PHP 版本，并可按项目/站点分配。ServBay 覆盖 PHP 5.3 起的旧版本；FlyEnv 更关注当前常用版本。', 'Yes. Projects are plain directories; recreate the site in FlyEnv, assign the same runtime versions, and point the domain at the project. Databases can be exported/imported with standard tools.': '可以。项目就是普通目录；在 FlyEnv 中重新创建站点，分配相同运行时版本并将域名指向项目。数据库可使用标准工具导入导出。', "If the team is macOS/Windows-only and wants ServBay's AI/PKI features, ServBay fits. If the team includes Linux developers or wants an open-source tool with per-project service stacks, FlyEnv fits better.": '如果团队仅使用 macOS/Windows 且需要 ServBay 的 AI/PKI 功能，ServBay 更合适；如果团队包含 Linux 开发者，或需要按项目服务堆栈的开源工具，FlyEnv 更合适。'
    },
    id: {
      Comparison: 'Perbandingan', 'Two all-in-one local development workspaces. Which workflow fits you better?': 'Dua ruang kerja pengembangan lokal all-in-one. Alur mana yang lebih cocok?', 'Download FlyEnv': 'Unduh FlyEnv', 'Read quick summary': 'Baca ringkasan cepat', 'Free and open source': 'Gratis dan sumber terbuka', 'macOS 12+ and Windows': 'macOS 12+ dan Windows', Yes: 'Ya', No: 'Tidak', 'A strong all-in-one workspace for macOS and Windows developers.': 'Ruang kerja all-in-one yang kuat untuk developer macOS dan Windows.', 'macOS, Windows and Linux': 'macOS, Windows, dan Linux', 'Native on all three desktop platforms, free and open source.': 'Berjalan secara native di ketiga platform desktop, gratis dan sumber terbuka.',
      'A large shared core, different priorities': 'Inti bersama yang luas, prioritas berbeda', 'Both products cover the same foundation. Each then invests in a different set of strengths.': 'Keduanya mencakup fondasi yang sama, lalu berinvestasi pada keunggulan berbeda.', 'ServBay emphasis': 'Fokus ServBay', 'Where ServBay goes deeper': 'Keunggulan ServBay', 'Shared foundation': 'Fondasi bersama', 'Both products include these': 'Keduanya menyediakan ini', 'The shared core is genuinely large: runtimes, databases, web servers, local sites, managed HTTPS, local AI models, mail testing, tunnels and MCP support are present on both sides.': 'Inti bersama benar-benar luas: runtime, database, server web, situs lokal, HTTPS terkelola, model AI lokal, pengujian email, tunnel, dan dukungan MCP tersedia di kedua sisi.', 'FlyEnv emphasis': 'Fokus FlyEnv', 'Where FlyEnv goes further': 'Keunggulan FlyEnv',
      'Three key differences': 'Tiga perbedaan utama', 'Both are credible all-in-one workspaces. These are the differences that actually matter.': 'Keduanya adalah ruang kerja all-in-one yang mumpuni. Inilah perbedaan yang penting.', 'What this looks like in daily development': 'Dalam pengembangan sehari-hari', "See the same setup in FlyEnv's runtime, site, and service workflows.": 'Lihat konfigurasi yang sama dalam alur runtime, situs, dan layanan FlyEnv.', 'Feature comparison': 'Perbandingan fitur', 'A practical comparison: a large shared core, plus real strengths on each side.': 'Perbandingan praktis: inti bersama yang luas dan keunggulan nyata di tiap sisi.', 'Shared capabilities': 'Kemampuan bersama', 'Both products provide these — no winner here, just a genuinely overlapping core.': 'Keduanya menyediakan ini—tidak ada pemenang, hanya inti yang benar-benar tumpang tindih.', Capability: 'Kemampuan', 'Same goal, different workflow': 'Tujuan sama, alur kerja berbeda', 'Managing several different local project stacks, side by side.': 'Mengelola beberapa stack proyek lokal secara berdampingan.', 'With ServBay': 'Dengan ServBay', 'With FlyEnv': 'Dengan FlyEnv', 'Which one should you choose?': 'Mana yang harus dipilih?', 'Both tools can be useful; the right choice depends on your workflow.': 'Keduanya berguna; pilihan yang tepat bergantung pada alur kerja Anda.', 'Choose ServBay if': 'Pilih ServBay jika', 'Choose FlyEnv if': 'Pilih FlyEnv jika', 'Both are capable all-in-one workspaces. If you are on macOS or Windows, the deciding factor is usually workflow preference and the specific modules you rely on.': 'Keduanya adalah ruang kerja all-in-one yang mumpuni. Jika Anda memakai macOS atau Windows, penentunya biasanya preferensi alur kerja dan modul yang dibutuhkan.', 'Frequently asked questions': 'Pertanyaan umum', 'Try a different all-in-one local development workflow': 'Coba alur pengembangan lokal all-in-one lainnya', 'FlyEnv brings runtimes, sites, services, database tools and MCP automation together on macOS, Windows and Linux.': 'FlyEnv menyatukan runtime, situs, layanan, alat database, dan otomasi MCP di macOS, Windows, dan Linux.',
      'Linux support': 'Dukungan Linux', 'Native support': 'Dukungan native', 'Not available': 'Tidak tersedia', 'Built-in': 'Bawaan', 'Database GUI tools': 'Alat GUI database', 'Java servlet server': 'Server Java Servlet', 'Open source': 'Sumber terbuka', 'Closed source': 'Sumber tertutup', 'Free tier plus paid Pro': 'Tier gratis dan Pro berbayar', 'AI Gateway (routing, virtual keys, cost tracking)': 'AI Gateway (routing, kunci virtual, pelacakan biaya)', 'Public certificates (PKI/ACME)': 'Sertifikat publik (PKI/ACME)', 'Tunnel providers': 'Penyedia tunnel', 'Multiple database instances': 'Beberapa instance database', 'Startup Groups (per-project service stacks)': 'Startup Groups (stack layanan per proyek)', 'Integrated database tools': 'Alat database terintegrasi', 'Project sites with domains and HTTPS': 'Situs proyek dengan domain dan HTTPS', 'Startup Groups for project stacks': 'Startup Groups untuk stack proyek', 'Same purpose, different development scope.': 'Tujuan sama, cakupan pengembangan berbeda.', 'macOS & Windows vs macOS, Windows & Linux': 'macOS & Windows vs macOS, Windows & Linux', 'Different strengths beyond the shared core': 'Keunggulan berbeda di luar inti bersama', 'Local sites & domains': 'Situs & domain lokal', 'Local HTTPS': 'HTTPS lokal', 'Local DNS server': 'Server DNS lokal', 'Local models (Ollama)': 'Model lokal (Ollama)', 'Local mail testing (SMTP/POP3)': 'Pengujian email lokal (SMTP/POP3)', 'Public tunnels': 'Tunnel publik', 'MCP Server': 'Server MCP', 'Per-project configuration': 'Konfigurasi per proyek', 'Multiple versions': 'Beberapa versi', 'Local Sites': 'Situs lokal', HTTPS: 'HTTPS', 'Ollama (local models)': 'Ollama (model lokal)', 'Mail testing': 'Pengujian email', MCP: 'MCP', 'Linux Support': 'Dukungan Linux', 'Startup Groups': 'Startup Groups', 'Integrated DB Tools': 'Alat DB terintegrasi', 'Broader Desktop Modules': 'Modul desktop yang lebih luas', 'Cross-platform Project Workflows': 'Alur kerja proyek lintas platform',
      'AI Gateway (virtual keys, cost tracking)': 'AI Gateway (kunci virtual, pelacakan biaya)', 'PKI & ACME Certificates': 'Sertifikat PKI & ACME', 'Tunnels · 4 providers': 'Tunnel · 4 penyedia', 'Multiple DB instances (Pro)': 'Beberapa instance DB (Pro)', 'Install the languages and services you need': 'Instal bahasa dan layanan yang diperlukan', 'Install the runtimes and modules you need': 'Instal runtime dan modul yang diperlukan', 'Create websites for each project': 'Buat situs untuk setiap proyek', 'Create a local site per project': 'Buat situs lokal per proyek', 'Assign per-project runtime versions': 'Tetapkan versi runtime per proyek', 'Assign each project its runtime and web server': 'Tetapkan runtime dan server web untuk tiap proyek', 'Enable SSL and local DNS per site': 'Aktifkan SSL dan DNS lokal per situs', 'Enable HTTPS per project': 'Aktifkan HTTPS per proyek', 'Optionally group websites and configure services (Pro)': 'Kelompokkan situs dan konfigurasi layanan secara opsional (Pro)', 'Start each project stack with Startup Groups': 'Mulai setiap stack proyek dengan Startup Groups', 'You develop on macOS or Windows.': 'Anda mengembangkan di macOS atau Windows.', "You value ServBay's first-party AI Gateway with provider routing and cost tracking.": 'Anda menghargai AI Gateway pihak pertama ServBay dengan routing penyedia dan pelacakan biaya.', 'You want its integrated PKI/ACME public certificates or four tunnel providers.': 'Anda menginginkan sertifikat publik PKI/ACME terintegrasi atau empat penyedia tunnel.', "ServBay's package/service model matches how you organize local environments.": 'Model paket/layanan ServBay sesuai dengan cara Anda mengatur lingkungan lokal.', 'You need legacy runtimes such as PHP 5.3.': 'Anda memerlukan runtime lama seperti PHP 5.3.', 'You need Linux as well as macOS and Windows.': 'Anda memerlukan Linux selain macOS dan Windows.', "You prefer FlyEnv's Startup Groups and project/service workflow.": 'Anda menyukai Startup Groups dan alur proyek/layanan FlyEnv.', 'You rely on FlyEnv-specific modules or integrated database management tools.': 'Anda mengandalkan modul khusus FlyEnv atau alat manajemen database terintegrasi.', 'You want one open-source workspace for your development and MCP workflows.': 'Anda menginginkan satu ruang kerja sumber terbuka untuk pengembangan dan alur MCP.',
      'Is FlyEnv a good ServBay alternative?': 'Apakah FlyEnv alternatif ServBay yang baik?', 'What is the biggest difference between FlyEnv and ServBay?': 'Apa perbedaan terbesar FlyEnv dan ServBay?', 'Does ServBay support Linux?': 'Apakah ServBay mendukung Linux?', 'Is FlyEnv really free?': 'Apakah FlyEnv benar-benar gratis?', 'Do both tools support MCP and AI workflows?': 'Apakah keduanya mendukung alur MCP dan AI?', 'Can both run multiple PHP versions per project?': 'Apakah keduanya dapat menjalankan beberapa versi PHP per proyek?', 'Can I migrate from ServBay to FlyEnv?': 'Bisakah saya bermigrasi dari ServBay ke FlyEnv?', 'Which one should a team standardize on?': 'Mana yang sebaiknya distandarkan oleh tim?', 'Yes, it is one of the closest peers: both are all-in-one local development workspaces. FlyEnv is the more direct alternative if you need Linux, Startup Groups or its specific modules; ServBay is stronger if you want its first-party AI Gateway, PKI/ACME certificates or multiple tunnel providers.': 'Bisa, ini salah satu pesaing terdekat: keduanya adalah ruang kerja pengembangan lokal all-in-one. FlyEnv lebih cocok jika Anda memerlukan Linux, Startup Groups, atau modul khususnya; ServBay lebih kuat jika Anda memerlukan AI Gateway pihak pertama, sertifikat PKI/ACME, atau banyak penyedia tunnel.', 'Platform coverage and product emphasis: FlyEnv adds Linux and focuses on development modules and project workflows; ServBay focuses on its AI Gateway, PKI/ACME public certificates, multi-provider tunnels and wider legacy version coverage.': 'Cakupan platform dan fokus produk berbeda: FlyEnv menambahkan Linux serta berfokus pada modul pengembangan dan alur proyek; ServBay berfokus pada AI Gateway, sertifikat publik PKI/ACME, tunnel multi-penyedia, dan dukungan versi lama yang lebih luas.', "ServBay's current desktop application is officially offered for macOS and Windows. FlyEnv supports macOS, Windows and Linux.": 'Aplikasi desktop ServBay saat ini resmi tersedia untuk macOS dan Windows. FlyEnv mendukung macOS, Windows, dan Linux.', 'Yes. ServBay includes an MCP Server and a first-party AI Gateway with routing and cost tracking in its free tier. FlyEnv provides an MCP Server, a managed Ollama module for local models, a CLIProxyAPI local AI gateway and AI coding client modules — both let AI tools manage your local environment.': 'Ya. ServBay menyertakan Server MCP dan AI Gateway pihak pertama dengan routing serta pelacakan biaya di tier gratis. FlyEnv menyediakan Server MCP, modul Ollama terkelola untuk model lokal, gateway AI lokal CLIProxyAPI, dan modul klien coding AI—keduanya memungkinkan alat AI mengelola lingkungan lokal.', 'Yes. Both support multiple coexisting PHP versions with per-project/per-site assignment. ServBay covers older versions (from PHP 5.3); FlyEnv focuses on currently used versions.': 'Ya. Keduanya mendukung beberapa versi PHP yang hidup berdampingan dengan penetapan per proyek/situs. ServBay mencakup versi lama mulai PHP 5.3; FlyEnv berfokus pada versi yang umum digunakan.', 'Yes. Projects are plain directories; recreate the site in FlyEnv, assign the same runtime versions, and point the domain at the project. Databases can be exported/imported with standard tools.': 'Ya. Proyek berupa direktori biasa; buat ulang situs di FlyEnv, tetapkan versi runtime yang sama, dan arahkan domain ke proyek. Database dapat diekspor/diimpor dengan alat standar.', "If the team is macOS/Windows-only and wants ServBay's AI/PKI features, ServBay fits. If the team includes Linux developers or wants an open-source tool with per-project service stacks, FlyEnv fits better.": 'Jika tim hanya memakai macOS/Windows dan menginginkan fitur AI/PKI ServBay, pilih ServBay. Jika tim memiliki developer Linux atau menginginkan alat sumber terbuka dengan stack layanan per proyek, FlyEnv lebih cocok.'
    },
    es: {
      Comparison: 'Comparación', 'Two all-in-one local development workspaces. Which workflow fits you better?': 'Dos espacios de trabajo de desarrollo local todo en uno. ¿Qué flujo de trabajo te conviene más?', 'Download FlyEnv': 'Descargar FlyEnv', 'Read quick summary': 'Leer resumen rápido', 'Free and open source': 'Gratuito y de código abierto', 'macOS 12+ and Windows': 'macOS 12+ y Windows', Yes: 'Sí', No: 'No', 'A strong all-in-one workspace for macOS and Windows developers.': 'Un potente espacio de trabajo todo en uno para desarrolladores de macOS y Windows.', 'macOS, Windows and Linux': 'macOS, Windows y Linux', 'Native on all three desktop platforms, free and open source.': 'Nativo en las tres plataformas de escritorio, gratuito y de código abierto.',
      'A large shared core, different priorities': 'Un gran núcleo compartido, prioridades diferentes', 'Both products cover the same foundation. Each then invests in a different set of strengths.': 'Ambos productos cubren la misma base. Luego, cada uno invierte en un conjunto diferente de fortalezas.', 'ServBay emphasis': 'Enfoque de ServBay', 'Where ServBay goes deeper': 'Donde ServBay profundiza', 'Shared foundation': 'Base compartida', 'Both products include these': 'Ambos productos incluyen esto', 'The shared core is genuinely large: runtimes, databases, web servers, local sites, managed HTTPS, local AI models, mail testing, tunnels and MCP support are present on both sides.': 'El núcleo compartido es realmente amplio: runtimes, bases de datos, servidores web, sitios locales, HTTPS gestionado, modelos de IA locales, pruebas de correo, túneles y soporte de MCP están presentes en ambos lados.', 'FlyEnv emphasis': 'Enfoque de FlyEnv', 'Where FlyEnv goes further': 'Donde FlyEnv llega más lejos',
      'Three key differences': 'Tres diferencias clave', 'Both are credible all-in-one workspaces. These are the differences that actually matter.': 'Ambos son espacios de trabajo todo en uno confiables. Estas son las diferencias que realmente importan.', 'What this looks like in daily development': 'Cómo se ve esto en el desarrollo diario', "See the same setup in FlyEnv's runtime, site, and service workflows.": 'Mira la misma configuración en los flujos de trabajo de runtimes, sitios y servicios de FlyEnv.', 'Feature comparison': 'Comparación de funciones', 'A practical comparison: a large shared core, plus real strengths on each side.': 'Una comparación práctica: un gran núcleo compartido, además de fortalezas reales en cada lado.', 'Shared capabilities': 'Capacidades compartidas', 'Both products provide these — no winner here, just a genuinely overlapping core.': 'Ambos productos las ofrecen: no hay un ganador aquí, solo un núcleo que realmente se solapa.', Capability: 'Capacidad', 'Same goal, different workflow': 'Mismo objetivo, flujo de trabajo diferente', 'Managing several different local project stacks, side by side.': 'Gestiona varios stacks de proyectos locales diferentes, uno al lado del otro.', 'With ServBay': 'Con ServBay', 'With FlyEnv': 'Con FlyEnv', 'Which one should you choose?': '¿Cuál deberías elegir?', 'Both tools can be useful; the right choice depends on your workflow.': 'Ambas herramientas pueden ser útiles; la elección correcta depende de tu flujo de trabajo.', 'Choose ServBay if': 'Elige ServBay si', 'Choose FlyEnv if': 'Elige FlyEnv si', 'Both are capable all-in-one workspaces. If you are on macOS or Windows, the deciding factor is usually workflow preference and the specific modules you rely on.': 'Ambos son espacios de trabajo todo en uno muy capaces. Si usas macOS o Windows, el factor decisivo suele ser la preferencia de flujo de trabajo y los módulos específicos de los que dependes.', 'Frequently asked questions': 'Preguntas frecuentes', 'Try a different all-in-one local development workflow': 'Prueba un flujo de trabajo de desarrollo local todo en uno diferente', 'FlyEnv brings runtimes, sites, services, database tools and MCP automation together on macOS, Windows and Linux.': 'FlyEnv reúne runtimes, sitios, servicios, herramientas de bases de datos y automatización MCP en macOS, Windows y Linux.',
      'Linux support': 'Soporte de Linux', 'Native support': 'Soporte nativo', 'Not available': 'No disponible', 'Built-in': 'Integrado', 'Database GUI tools': 'Herramientas GUI de bases de datos', 'Java servlet server': 'Servidor de servlets Java', 'Open source': 'Código abierto', 'Closed source': 'Código cerrado', 'Free tier plus paid Pro': 'Nivel gratuito más Pro de pago', 'AI Gateway (routing, virtual keys, cost tracking)': 'AI Gateway (enrutamiento, claves virtuales, seguimiento de costes)', 'Public certificates (PKI/ACME)': 'Certificados públicos (PKI/ACME)', 'Tunnel providers': 'Proveedores de túneles', 'Multiple database instances': 'Múltiples instancias de bases de datos', 'Startup Groups (per-project service stacks)': 'Startup Groups (stacks de servicios por proyecto)', 'Integrated database tools': 'Herramientas de bases de datos integradas', 'Project sites with domains and HTTPS': 'Sitios de proyecto con dominios y HTTPS', 'Startup Groups for project stacks': 'Startup Groups para stacks de proyectos', 'Same purpose, different development scope.': 'Mismo propósito, diferente alcance de desarrollo.', 'macOS & Windows vs macOS, Windows & Linux': 'macOS y Windows frente a macOS, Windows y Linux', 'Different strengths beyond the shared core': 'Fortalezas diferentes más allá del núcleo compartido', 'Local sites & domains': 'Sitios locales y dominios', 'Local HTTPS': 'HTTPS local', 'Local DNS server': 'Servidor DNS local', 'Local models (Ollama)': 'Modelos locales (Ollama)', 'Local mail testing (SMTP/POP3)': 'Pruebas de correo local (SMTP/POP3)', 'Public tunnels': 'Túneles públicos', 'MCP Server': 'Servidor MCP', 'Per-project configuration': 'Configuración por proyecto', 'Multiple versions': 'Múltiples versiones', 'Local Sites': 'Sitios locales', HTTPS: 'HTTPS', 'Ollama (local models)': 'Ollama (modelos locales)', 'Mail testing': 'Pruebas de correo', MCP: 'MCP', 'Linux Support': 'Soporte de Linux', 'Startup Groups': 'Startup Groups', 'Integrated DB Tools': 'Herramientas de BD integradas', 'Broader Desktop Modules': 'Módulos de escritorio más amplios', 'Cross-platform Project Workflows': 'Flujos de trabajo de proyectos multiplataforma',
      'AI Gateway (virtual keys, cost tracking)': 'AI Gateway (claves virtuales, seguimiento de costes)', 'PKI & ACME Certificates': 'Certificados PKI y ACME', 'Tunnels · 4 providers': 'Túneles · 4 proveedores', 'Multiple DB instances (Pro)': 'Múltiples instancias de BD (Pro)', 'Install the languages and services you need': 'Instala los lenguajes y servicios que necesites', 'Install the runtimes and modules you need': 'Instala los runtimes y módulos que necesites', 'Create websites for each project': 'Crea sitios web para cada proyecto', 'Create a local site per project': 'Crea un sitio local por proyecto', 'Assign per-project runtime versions': 'Asigna versiones de runtime por proyecto', 'Assign each project its runtime and web server': 'Asigna a cada proyecto su runtime y servidor web', 'Enable SSL and local DNS per site': 'Activa SSL y DNS local por sitio', 'Enable HTTPS per project': 'Activa HTTPS por proyecto', 'Optionally group websites and configure services (Pro)': 'Opcionalmente, agrupa sitios web y configura servicios (Pro)', 'Start each project stack with Startup Groups': 'Inicia el stack de cada proyecto con Startup Groups', 'You develop on macOS or Windows.': 'Desarrollas en macOS o Windows.', "You value ServBay's first-party AI Gateway with provider routing and cost tracking.": 'Valoras el AI Gateway propio de ServBay con enrutamiento de proveedores y seguimiento de costes.', 'You want its integrated PKI/ACME public certificates or four tunnel providers.': 'Quieres sus certificados públicos PKI/ACME integrados o sus cuatro proveedores de túneles.', "ServBay's package/service model matches how you organize local environments.": 'El modelo de paquetes/servicios de ServBay coincide con tu forma de organizar los entornos locales.', 'You need legacy runtimes such as PHP 5.3.': 'Necesitas runtimes antiguos como PHP 5.3.', 'You need Linux as well as macOS and Windows.': 'Necesitas Linux además de macOS y Windows.', "You prefer FlyEnv's Startup Groups and project/service workflow.": 'Prefieres los Startup Groups y el flujo de trabajo de proyectos/servicios de FlyEnv.', 'You rely on FlyEnv-specific modules or integrated database management tools.': 'Dependes de módulos específicos de FlyEnv o de herramientas integradas de gestión de bases de datos.', 'You want one open-source workspace for your development and MCP workflows.': 'Quieres un único espacio de trabajo de código abierto para tus flujos de trabajo de desarrollo y MCP.',
      'Is FlyEnv a good ServBay alternative?': '¿Es FlyEnv una buena alternativa a ServBay?', 'What is the biggest difference between FlyEnv and ServBay?': '¿Cuál es la mayor diferencia entre FlyEnv y ServBay?', 'Does ServBay support Linux?': '¿ServBay es compatible con Linux?', 'Is FlyEnv really free?': '¿FlyEnv es realmente gratuito?', 'Do both tools support MCP and AI workflows?': '¿Ambas herramientas son compatibles con flujos de trabajo de MCP e IA?', 'Can both run multiple PHP versions per project?': '¿Pueden ambas ejecutar varias versiones de PHP por proyecto?', 'Can I migrate from ServBay to FlyEnv?': '¿Puedo migrar de ServBay a FlyEnv?', 'Which one should a team standardize on?': '¿Cuál debería estandarizar un equipo?', 'Yes, it is one of the closest peers: both are all-in-one local development workspaces. FlyEnv is the more direct alternative if you need Linux, Startup Groups or its specific modules; ServBay is stronger if you want its first-party AI Gateway, PKI/ACME certificates or multiple tunnel providers.': 'Sí, es uno de los competidores más cercanos: ambos son espacios de trabajo de desarrollo local todo en uno. FlyEnv es la alternativa más directa si necesitas Linux, Startup Groups o sus módulos específicos; ServBay es más fuerte si quieres su AI Gateway propio, certificados PKI/ACME o varios proveedores de túneles.', 'Platform coverage and product emphasis: FlyEnv adds Linux and focuses on development modules and project workflows; ServBay focuses on its AI Gateway, PKI/ACME public certificates, multi-provider tunnels and wider legacy version coverage.': 'Cobertura de plataformas y enfoque del producto: FlyEnv añade Linux y se centra en módulos de desarrollo y flujos de trabajo de proyectos; ServBay se centra en su AI Gateway, certificados públicos PKI/ACME, túneles multiprooveedor y una cobertura más amplia de versiones antiguas.', "ServBay's current desktop application is officially offered for macOS and Windows. FlyEnv supports macOS, Windows and Linux.": 'La aplicación de escritorio actual de ServBay se ofrece oficialmente para macOS y Windows. FlyEnv es compatible con macOS, Windows y Linux.', 'Yes. ServBay includes an MCP Server and a first-party AI Gateway with routing and cost tracking in its free tier. FlyEnv provides an MCP Server, a managed Ollama module for local models, a CLIProxyAPI local AI gateway and AI coding client modules — both let AI tools manage your local environment.': 'Sí. ServBay incluye un servidor MCP y un AI Gateway propio con enrutamiento y seguimiento de costes en su nivel gratuito. FlyEnv proporciona un servidor MCP, un módulo Ollama gestionado para modelos locales, una puerta de enlace de IA local CLIProxyAPI y módulos de clientes de programación con IA: ambos permiten que las herramientas de IA gestionen tu entorno local.', 'Yes. Both support multiple coexisting PHP versions with per-project/per-site assignment. ServBay covers older versions (from PHP 5.3); FlyEnv focuses on currently used versions.': 'Sí. Ambas admiten varias versiones de PHP coexistentes con asignación por proyecto/sitio. ServBay cubre versiones más antiguas (desde PHP 5.3); FlyEnv se centra en las versiones actualmente en uso.', 'Yes. Projects are plain directories; recreate the site in FlyEnv, assign the same runtime versions, and point the domain at the project. Databases can be exported/imported with standard tools.': 'Sí. Los proyectos son simples directorios; vuelve a crear el sitio en FlyEnv, asigna las mismas versiones de runtime y apunta el dominio al proyecto. Las bases de datos se pueden exportar e importar con herramientas estándar.', "If the team is macOS/Windows-only and wants ServBay's AI/PKI features, ServBay fits. If the team includes Linux developers or wants an open-source tool with per-project service stacks, FlyEnv fits better.": 'Si el equipo solo usa macOS/Windows y quiere las funciones de IA/PKI de ServBay, ServBay encaja. Si el equipo incluye desarrolladores de Linux o quiere una herramienta de código abierto con stacks de servicios por proyecto, FlyEnv encaja mejor.'
    }
  }
  Object.assign(maps.zh, {
    'Where ServBay goes further': 'ServBay 的优势领域',
    Module: '模块', Partial: '部分支持',
    'FlyEnv and ServBay overlap substantially in runtimes, databases, web servers, local sites, HTTPS and MCP-based automation — much more than traditional local development tools. The differences are mainly in platform coverage, product emphasis and specific modules.': 'FlyEnv 与 ServBay 在运行时、数据库、Web 服务器、本地站点、HTTPS 和基于 MCP 的自动化方面有大量重叠，远超传统本地开发工具。主要差异在于平台覆盖、产品侧重点和具体模块。',
    'FlyEnv database management interface': 'FlyEnv 数据库管理界面',
    'FlyEnv local site HTTPS configuration interface': 'FlyEnv 本地站点 HTTPS 配置界面',
    'FlyEnv service management interface': 'FlyEnv 服务管理界面',
    'Open phpMyAdmin, pgAdmin, DbGate or Redis Commander for the database or cache a project uses — managed inside the same workspace.': '在同一工作区中管理项目使用的数据库或缓存，并打开 phpMyAdmin、pgAdmin、DbGate 或 Redis Commander。',
    'Per-project sites, custom domains and managed local HTTPS.': '按项目配置站点、自定义域名和托管本地 HTTPS。',
    'Start exactly the services each project needs, in one click.': '一键启动每个项目确切需要的服务。',
    'macOS & Windows vs macOS, Windows & Linux': 'macOS 和 Windows 对比 macOS、Windows 和 Linux',
    'AI and model tooling vs project and service workflow': 'AI 与模型工具对比项目和服务工作流',
    'ServBay runs on macOS and Windows. FlyEnv runs natively on macOS, Windows and Linux — the clearest objective difference for cross-platform teams.': 'ServBay 运行于 macOS 和 Windows；FlyEnv 原生支持 macOS、Windows 和 Linux——这是跨平台团队最明显的客观差异。',
    'ServBay invests heavily in AI: a first-party AI Gateway with virtual keys, model and provider routing, and usage and cost tracking — a core selling point. FlyEnv covers local models and AI gateways through managed Ollama and CLIProxyAPI modules, and invests in the development workflow itself: Startup Groups, project and site management, integrated database tools and broader desktop modules.': 'ServBay 大力投入 AI：自有 AI 网关提供虚拟密钥、模型与提供商路由，以及用量和成本追踪，这是其核心卖点。FlyEnv 通过托管 Ollama 和 CLIProxyAPI 模块支持本地模型与 AI 网关，并将重点投入开发工作流本身：启动组、项目和站点管理、集成数据库工具以及更丰富的桌面模块。',
    'Different strengths beyond the shared core': '共享核心之外的不同优势',
    'Beyond the shared core, ServBay goes further with a PKI/ACME public certificate system and four built-in tunnel providers. FlyEnv adds Linux support, Tomcat and Flutter modules, and database GUIs such as pgAdmin, DbGate and Redis Commander.': '在共同核心之外，ServBay 还提供 PKI/ACME 公共证书系统和四个内置隧道提供商。FlyEnv 则增加 Linux 支持、Tomcat 和 Flutter 模块，以及 pgAdmin、DbGate、Redis Commander 等数据库图形工具。',
    'First-party, included in the free tier': '官方提供，包含在免费层级中',
    'CLIProxyAPI local gateway and AI CLI tools': 'CLIProxyAPI 本地网关和 AI CLI 工具',
    'Local CA and mkcert — self-signed only': '本地 CA 和 mkcert——仅支持自签名证书',
    'Cloudflare Tunnel (managed named tunnels)': 'Cloudflare Tunnel（托管命名隧道）',
    'Multiple instances of any database (Pro)': '任意数据库的多个实例（Pro）',
    'MySQL group instances; multiple versions side by side': 'MySQL 组实例；多个版本并行运行',
    'phpMyAdmin, pgAdmin, DbGate, Redis Commander and more': 'phpMyAdmin、pgAdmin、DbGate、Redis Commander 等',
    'Core free; optional $10 license for premium tools': '核心功能免费；高级工具可选购 10 美元许可证',
    'Cloudflared, FRP, Ngrok, Pinggy (Pro)': 'Cloudflared、FRP、Ngrok、Pinggy（Pro）',
    'The core is: FlyEnv is open source, and all runtimes, databases and environment management features are always accessible without paying. The free evaluation version limits you to 3 local sites, and a few premium tools (AI assistant, screenshot, image optimizer) are 3-day trials; a $10 Personal license removes those limits. ServBay similarly offers a free tier (5 websites) with Pro features such as the mail server, tunnels and PKI/ACME requiring a paid license.': '核心是：FlyEnv 开源，所有运行时、数据库和环境管理功能始终无需付费即可使用。免费评估版限制为 3 个本地站点，部分高级工具提供 3 天试用；10 美元个人许可证可解除这些限制。ServBay 同样提供免费层级（5 个网站），邮件服务器、隧道和 PKI/ACME 等 Pro 功能需要付费许可证。'
  })
  Object.assign(maps.id, {
    'Native on all three desktop platforms, free and open source.': 'Berjalan secara native di ketiga platform desktop, gratis dan sumber terbuka.',
    'Where ServBay goes further': 'Keunggulan ServBay',
    Module: 'Modul', Partial: 'Sebagian',
    'FlyEnv and ServBay overlap substantially in runtimes, databases, web servers, local sites, HTTPS and MCP-based automation — much more than traditional local development tools. The differences are mainly in platform coverage, product emphasis and specific modules.': 'FlyEnv dan ServBay memiliki banyak kesamaan dalam runtime, database, server web, situs lokal, HTTPS, dan otomasi berbasis MCP—jauh lebih luas daripada alat pengembangan lokal tradisional. Perbedaan utamanya adalah cakupan platform, fokus produk, dan modul tertentu.',
    'FlyEnv database management interface': 'Antarmuka pengelolaan database FlyEnv',
    'FlyEnv local site HTTPS configuration interface': 'Antarmuka konfigurasi HTTPS situs lokal FlyEnv',
    'FlyEnv service management interface': 'Antarmuka pengelolaan layanan FlyEnv',
    'Open phpMyAdmin, pgAdmin, DbGate or Redis Commander for the database or cache a project uses — managed inside the same workspace.': 'Buka phpMyAdmin, pgAdmin, DbGate, atau Redis Commander untuk database atau cache proyek—semuanya dikelola dalam ruang kerja yang sama.',
    'Per-project sites, custom domains and managed local HTTPS.': 'Situs per proyek, domain khusus, dan HTTPS lokal terkelola.',
    'Start exactly the services each project needs, in one click.': 'Mulai layanan yang benar-benar dibutuhkan tiap proyek dengan satu klik.',
    'macOS & Windows vs macOS, Windows & Linux': 'macOS dan Windows vs macOS, Windows, dan Linux',
    'AI and model tooling vs project and service workflow': 'Alat AI dan model vs alur proyek dan layanan',
    'ServBay runs on macOS and Windows. FlyEnv runs natively on macOS, Windows and Linux — the clearest objective difference for cross-platform teams.': 'ServBay berjalan di macOS dan Windows; FlyEnv berjalan native di macOS, Windows, dan Linux—perbedaan objektif paling jelas bagi tim lintas platform.',
    'ServBay invests heavily in AI: a first-party AI Gateway with virtual keys, model and provider routing, and usage and cost tracking — a core selling point. FlyEnv covers local models and AI gateways through managed Ollama and CLIProxyAPI modules, and invests in the development workflow itself: Startup Groups, project and site management, integrated database tools and broader desktop modules.': 'ServBay berinvestasi besar pada AI: AI Gateway pihak pertama dengan kunci virtual, routing model dan penyedia, serta pelacakan penggunaan dan biaya—ini adalah keunggulan utamanya. FlyEnv mendukung model lokal dan gateway AI melalui modul Ollama serta CLIProxyAPI terkelola, dan berfokus pada alur pengembangan: Startup Groups, pengelolaan proyek dan situs, alat database terintegrasi, serta modul desktop yang lebih luas.',
    'Different strengths beyond the shared core': 'Keunggulan berbeda di luar inti bersama',
    'Beyond the shared core, ServBay goes further with a PKI/ACME public certificate system and four built-in tunnel providers. FlyEnv adds Linux support, Tomcat and Flutter modules, and database GUIs such as pgAdmin, DbGate and Redis Commander.': 'Di luar inti bersama, ServBay menyediakan sistem sertifikat publik PKI/ACME dan empat penyedia tunnel bawaan. FlyEnv menambahkan dukungan Linux, modul Tomcat dan Flutter, serta alat GUI database seperti pgAdmin, DbGate, dan Redis Commander.',
    'First-party, included in the free tier': 'Disediakan pihak pertama dan termasuk dalam tier gratis',
    'CLIProxyAPI local gateway and AI CLI tools': 'Gateway lokal CLIProxyAPI dan alat AI CLI',
    'Local CA and mkcert — self-signed only': 'CA lokal dan mkcert—hanya sertifikat self-signed',
    'Cloudflare Tunnel (managed named tunnels)': 'Cloudflare Tunnel (tunnel bernama terkelola)',
    'Multiple instances of any database (Pro)': 'Beberapa instance database apa pun (Pro)',
    'MySQL group instances; multiple versions side by side': 'Instance grup MySQL; beberapa versi berdampingan',
    'phpMyAdmin, pgAdmin, DbGate, Redis Commander and more': 'phpMyAdmin, pgAdmin, DbGate, Redis Commander, dan lainnya',
    'Core free; optional $10 license for premium tools': 'Fitur inti gratis; lisensi $10 opsional untuk alat premium',
    'Cloudflared, FRP, Ngrok, Pinggy (Pro)': 'Cloudflared, FRP, Ngrok, Pinggy (versi Pro)',
    'The core is: FlyEnv is open source, and all runtimes, databases and environment management features are always accessible without paying. The free evaluation version limits you to 3 local sites, and a few premium tools (AI assistant, screenshot, image optimizer) are 3-day trials; a $10 Personal license removes those limits. ServBay similarly offers a free tier (5 websites) with Pro features such as the mail server, tunnels and PKI/ACME requiring a paid license.': 'Intinya: FlyEnv bersumber terbuka, dan semua runtime, database, serta fitur pengelolaan lingkungan dapat digunakan tanpa biaya. Versi evaluasi gratis membatasi 3 situs lokal, sementara beberapa alat premium tersedia sebagai uji coba 3 hari; lisensi Personal $10 menghapus batas tersebut. ServBay juga menawarkan tier gratis (5 situs), sedangkan fitur Pro seperti server email, tunnel, dan PKI/ACME memerlukan lisensi berbayar.'
  })
  Object.assign(maps.es, {
    'Where ServBay goes further': 'Donde ServBay llega más lejos',
    Module: 'Módulo', Partial: 'Parcial',
    'FlyEnv and ServBay overlap substantially in runtimes, databases, web servers, local sites, HTTPS and MCP-based automation — much more than traditional local development tools. The differences are mainly in platform coverage, product emphasis and specific modules.': 'FlyEnv y ServBay se solapan sustancialmente en runtimes, bases de datos, servidores web, sitios locales, HTTPS y automatización basada en MCP, mucho más que las herramientas tradicionales de desarrollo local. Las diferencias están principalmente en la cobertura de plataformas, el enfoque del producto y módulos específicos.',
    'FlyEnv database management interface': 'Interfaz de gestión de bases de datos de FlyEnv',
    'FlyEnv local site HTTPS configuration interface': 'Interfaz de configuración de HTTPS de sitios locales de FlyEnv',
    'FlyEnv service management interface': 'Interfaz de gestión de servicios de FlyEnv',
    'Open phpMyAdmin, pgAdmin, DbGate or Redis Commander for the database or cache a project uses — managed inside the same workspace.': 'Abre phpMyAdmin, pgAdmin, DbGate o Redis Commander para la base de datos o caché que usa un proyecto, gestionados dentro del mismo espacio de trabajo.',
    'Per-project sites, custom domains and managed local HTTPS.': 'Sitios por proyecto, dominios personalizados y HTTPS local gestionado.',
    'Start exactly the services each project needs, in one click.': 'Inicia exactamente los servicios que cada proyecto necesita, con un clic.',
    'AI and model tooling vs project and service workflow': 'Herramientas de IA y modelos frente a flujo de trabajo de proyectos y servicios',
    'ServBay runs on macOS and Windows. FlyEnv runs natively on macOS, Windows and Linux — the clearest objective difference for cross-platform teams.': 'ServBay se ejecuta en macOS y Windows. FlyEnv se ejecuta de forma nativa en macOS, Windows y Linux: la diferencia objetiva más clara para equipos multiplataforma.',
    'ServBay invests heavily in AI: a first-party AI Gateway with virtual keys, model and provider routing, and usage and cost tracking — a core selling point. FlyEnv covers local models and AI gateways through managed Ollama and CLIProxyAPI modules, and invests in the development workflow itself: Startup Groups, project and site management, integrated database tools and broader desktop modules.': 'ServBay invierte fuertemente en IA: un AI Gateway propio con claves virtuales, enrutamiento de modelos y proveedores, y seguimiento de uso y costes, un argumento de venta clave. FlyEnv cubre modelos locales y puertas de enlace de IA mediante los módulos gestionados Ollama y CLIProxyAPI, e invierte en el propio flujo de trabajo de desarrollo: Startup Groups, gestión de proyectos y sitios, herramientas de bases de datos integradas y módulos de escritorio más amplios.',
    'Beyond the shared core, ServBay goes further with a PKI/ACME public certificate system and four built-in tunnel providers. FlyEnv adds Linux support, Tomcat and Flutter modules, and database GUIs such as pgAdmin, DbGate and Redis Commander.': 'Más allá del núcleo compartido, ServBay llega más lejos con un sistema de certificados públicos PKI/ACME y cuatro proveedores de túneles integrados. FlyEnv añade soporte de Linux, módulos de Tomcat y Flutter, y GUI de bases de datos como pgAdmin, DbGate y Redis Commander.',
    'First-party, included in the free tier': 'Propio, incluido en el nivel gratuito',
    'CLIProxyAPI local gateway and AI CLI tools': 'Puerta de enlace local CLIProxyAPI y herramientas CLI de IA',
    'Local CA and mkcert — self-signed only': 'CA local y mkcert: solo autofirmados',
    'Cloudflare Tunnel (managed named tunnels)': 'Cloudflare Tunnel (túneles con nombre gestionados)',
    'Multiple instances of any database (Pro)': 'Múltiples instancias de cualquier base de datos (Pro)',
    'MySQL group instances; multiple versions side by side': 'Instancias de grupo de MySQL; varias versiones en paralelo',
    'phpMyAdmin, pgAdmin, DbGate, Redis Commander and more': 'phpMyAdmin, pgAdmin, DbGate, Redis Commander y más',
    'Core free; optional $10 license for premium tools': 'Núcleo gratuito; licencia opcional de $10 para herramientas premium',
    'Cloudflared, FRP, Ngrok, Pinggy (Pro)': 'Cloudflared, FRP, Ngrok, Pinggy (Pro)',
    'Tomcat module': 'Módulo Tomcat',
    'The core is: FlyEnv is open source, and all runtimes, databases and environment management features are always accessible without paying. The free evaluation version limits you to 3 local sites, and a few premium tools (AI assistant, screenshot, image optimizer) are 3-day trials; a $10 Personal license removes those limits. ServBay similarly offers a free tier (5 websites) with Pro features such as the mail server, tunnels and PKI/ACME requiring a paid license.': 'El núcleo sí lo es: FlyEnv es de código abierto, y todos los runtimes, bases de datos y funciones de gestión de entornos siempre son accesibles sin pagar. La versión de evaluación gratuita te limita a 3 sitios locales, y algunas herramientas premium (asistente de IA, capturas de pantalla, optimizador de imágenes) son pruebas de 3 días; una licencia Personal de $10 elimina esos límites. ServBay ofrece de forma similar un nivel gratuito (5 sitios web) con funciones Pro como el servidor de correo, los túneles y PKI/ACME que requieren una licencia de pago.'
  })
  const tr = (value: string) => maps[locale]?.[value] || value
  const translate = (value: any): any => {
    if (typeof value === 'string') return tr(value)
    if (Array.isArray(value)) return value.map(translate)
    if (value && typeof value === 'object') return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, translate(v)]))
    return value
  }
  if (locale !== 'en') {
    ;[servbayPlatforms, flyenvPlatforms, sharedFoundation, servbayEmphasis, flyenvEmphasis, differences, dailyCards, sharedCapabilities, flyenvRows, servbayRows, workflowRows, chooseServbay, chooseFlyenv, faqs].forEach((items) => {
      const translated = translate(items)
      items.splice(0, items.length, ...translated)
    })
  }
</script>
