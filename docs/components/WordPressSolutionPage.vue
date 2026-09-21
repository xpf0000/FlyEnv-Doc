<template>
  <main
    class="w-full overflow-hidden bg-white text-[#172033] dark:bg-[#0b1020] dark:text-[#e9edf5]"
  >
    <section
      class="border-b border-[#dfe8f4] bg-gradient-to-b from-[#f6fbff] to-white px-4 pb-10 pt-6 dark:border-[#26344b] dark:from-[#101827] dark:to-[#0b1020] sm:px-6 sm:pt-8 lg:pb-12"
    >
      <div class="mx-auto max-w-[1120px]">
        <nav aria-label="Breadcrumb">
          <ol
            class="!m-0 flex !list-none flex-wrap items-center gap-x-2 gap-y-1 !p-0 text-xs font-semibold text-[#758197] dark:text-[#9aa9bf]"
          >
            <li class="!m-0"><a href="/" class="!text-[#1769f9] no-underline hover:underline">FlyEnv</a></li>
            <li aria-hidden="true" class="!m-0 text-[#a9b9cc]">/</li>
            <li class="!m-0"><a :href="localizedHref('/solutions')" class="!text-[#1769f9] no-underline hover:underline">{{ copy.breadcrumbSolutions }}</a></li>
            <li aria-hidden="true" class="!m-0 text-[#a9b9cc]">/</li>
            <li aria-current="page" class="!m-0">WordPress</li>
          </ol>
        </nav>

        <div class="mt-7 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,360px)] lg:gap-12">
          <div class="min-w-0">
            <div class="flex items-start gap-4 sm:gap-5">
              <div class="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-xl border border-[#dce7f7] bg-white p-3 shadow-[0_10px_26px_rgb(37_74_125_/_8%)] dark:border-[#34445e] dark:bg-[#151f31]">
                <img src="/assets/demo-logos/wordpress.svg" alt="WordPress logo" class="h-11 w-11 object-contain" />
              </div>
              <div class="min-w-0">
                <p class="!m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1769f9] dark:text-[#8fbcff]">{{ copy.eyebrow }}</p>
                <h1 class="!m-0 !mt-1 !border-0 !p-0 text-3xl font-black leading-[1.08] tracking-[-0.03em] text-[#14213a] dark:text-white sm:text-4xl lg:text-[46px]">{{ copy.heroTitle }}</h1>
              </div>
            </div>
            <p class="!mb-0 !mt-5 max-w-[650px] text-base leading-7 text-[#5c687b] dark:text-[#b1bdcc]">{{ copy.heroDescription }}</p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a :href="localizedHref('/download')" class="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1769f9] px-4 text-sm font-bold !text-white no-underline shadow-[0_8px_18px_rgb(23_105_249_/_20%)] transition hover:-translate-y-px hover:bg-[#0d5be4] active:translate-y-px" data-analytics-event="download_click" data-analytics-surface="wordpress-solution-hero">{{ copy.download }} <SvgIcon name="arrowDown" class="ml-2 h-4 w-4" /></a>
              <a :href="localizedHref('/guide/host')" class="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#cfd9e7] bg-white px-4 text-sm font-bold !text-[#26344a] no-underline transition hover:border-[#1769f9] hover:!text-[#1769f9] dark:border-[#3a4962] dark:bg-[#151f31] dark:!text-[#e9edf5]">{{ copy.guide }} <SvgIcon name="arrowUpRight" class="ml-2 h-4 w-4" /></a>
            </div>
          </div>

          <aside class="rounded-xl border border-[#c9dcf3] bg-white p-5 shadow-[0_14px_34px_rgb(37_74_125_/_10%)] dark:border-[#34445e] dark:bg-[#151f31]" aria-labelledby="wordpress-stack-title">
            <h2 id="wordpress-stack-title" class="!m-0 !border-0 !p-0 text-base font-extrabold text-[#26344a] dark:text-[#e9edf5]">{{ copy.heroStackTitle }}</h2>
            <p class="!mb-0 !mt-1.5 text-sm leading-6 text-[#758197] dark:text-[#aebbd0]">{{ copy.heroStackDescription }}</p>
            <ul class="!mb-0 !mt-3 flex !list-none flex-wrap gap-1.5 !p-0">
              <li v-for="item in copy.heroStack" :key="item.label" class="!m-0 rounded-md bg-[#eaf3ff] px-2.5 py-1 text-xs font-bold leading-5 text-[#1769f9] dark:bg-[#1a3158] dark:text-[#9bc5ff]"><a :href="item.href" class="!text-[#1769f9] no-underline hover:underline dark:!text-[#9bc5ff]">{{ item.label }}</a></li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section class="px-4 py-9 sm:px-6 sm:py-11" aria-labelledby="requirements-title">
      <div class="mx-auto max-w-[1120px]">
        <h2 id="requirements-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.requirementsTitle }}</h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.requirementsDescription }}</p>
        <div class="mt-5 hidden overflow-hidden rounded-lg border border-[#dce7f2] md:block dark:border-[#34445e]">
          <div class="grid grid-cols-[1.05fr_1fr_1.12fr] bg-[#edf5ff] text-sm font-extrabold text-[#26344a] dark:bg-[#182a49] dark:text-[#e9edf5]"><div class="px-4 py-2.5">{{ copy.requirementHeaders[0] }}</div><div class="px-4 py-2.5">{{ copy.requirementHeaders[1] }}</div><div class="px-4 py-2.5">{{ copy.requirementHeaders[2] }}</div></div>
          <div v-for="item in copy.requirements" :key="item.title" class="grid grid-cols-[1.05fr_1fr_1.12fr] border-t border-[#e6edf5] text-[15px] leading-6 dark:border-[#2b3b55]"><div class="flex items-center gap-2 px-4 py-3 font-semibold text-[#26344a] dark:text-[#e9edf5]"><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div><div class="px-4 py-3 font-medium text-[#526176] dark:text-[#b1bdcc]"><template v-for="(part, index) in item.parts" :key="`${part.label}-${index}`"><a v-if="part.href" :href="part.href" class="!text-[#526176] underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9] dark:!text-[#b1bdcc] dark:hover:!text-[#9bc5ff]">{{ part.label }}</a><span v-else>{{ part.label }}</span></template></div><div class="flex items-center gap-2 px-4 py-3 font-semibold text-[#40506a] dark:text-[#c4d2e5]"><SvgIcon name="check" class="h-3.5 w-3.5 shrink-0 text-[#1aa86b]" />{{ item.support }}</div></div>
        </div>
        <div class="mt-5 divide-y divide-[#e6edf5] overflow-hidden rounded-lg border border-[#dce7f2] md:hidden dark:divide-[#2b3b55] dark:border-[#34445e]"><article v-for="item in copy.requirements" :key="item.title" class="p-4"><div class="flex items-center gap-2 text-sm font-bold text-[#26344a] dark:text-[#e9edf5]"><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div><p class="!mb-0 !mt-2 text-sm leading-6 text-[#5d6a7d] dark:text-[#b1bdcc]"><template v-for="(part, index) in item.parts" :key="`${part.label}-${index}`"><a v-if="part.href" :href="part.href" class="!text-[#5d6a7d] underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9] dark:!text-[#b1bdcc] dark:hover:!text-[#9bc5ff]">{{ part.label }}</a><span v-else>{{ part.label }}</span></template></p><p class="!mb-0 !mt-1 flex items-center gap-2 text-sm leading-6 text-[#5d6a7d] dark:text-[#b1bdcc]"><SvgIcon name="check" class="h-3.5 w-3.5 shrink-0 text-[#1aa86b]" />{{ item.support }}</p></article></div>
      </div>
    </section>

    <section class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]" aria-labelledby="sites-title">
      <div class="mx-auto max-w-[1120px]"><h2 id="sites-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.sitesTitle }}</h2><p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.sitesDescription }}</p><div class="mt-6 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_320px]"><figure class="!m-0 flex h-full flex-col overflow-hidden rounded-xl border border-[#dce7f2] bg-[#f7faff] shadow-[0_12px_30px_rgb(37_74_125_/_8%)] dark:border-[#34445e] dark:bg-[#151f31]"><img src="https://oss.macphpstudy.com/image/features/php-10.webp" alt="FlyEnv PHP projects with per-project runtime selection" class="block w-full flex-1 object-cover" loading="lazy" /><figcaption class="border-t border-[#e4ebf4] px-4 py-3 text-base leading-7 text-[#59677b] dark:border-[#34445e] dark:text-[#b7c4d5]">{{ copy.sitesCaption }}</figcaption></figure><div class="grid h-full grid-rows-4 gap-3"><article v-for="item in copy.siteProof" :key="item.title" class="h-full rounded-xl border border-[#dce7f2] bg-white p-4 dark:border-[#34445e] dark:bg-[#151f31]"><div class="flex items-center gap-2 text-base font-extrabold leading-6 text-[#26344a] dark:text-[#e9edf5]"><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div><p class="!mb-0 !mt-1.5 text-sm leading-6 text-[#68758a] dark:text-[#aebbd0]">{{ item.description }}</p></article></div></div></div>
    </section>

    <section class="border-y border-[#dfe8f4] bg-white px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#0b1020]" aria-labelledby="site-lifecycle-title">
      <div class="mx-auto max-w-[1120px]">
        <h2 id="site-lifecycle-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.lifecycleTitle }}</h2>
        <p class="!mb-0 !mt-1.5 max-w-3xl text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.lifecycleDescription }}</p>
        <div class="relative mt-6 overflow-hidden rounded-2xl border border-[#dce7f2] bg-white shadow-[0_12px_30px_rgb(37_74_125_/_6%)] dark:border-[#34445e] dark:bg-[#151f31]">
          <div class="relative hidden px-6 py-7 lg:block">
            <ol class="relative z-10 !m-0 grid !list-none grid-cols-6 gap-3 !p-0">
              <li v-for="(step, index) in copy.lifecycleSteps" :key="step.title" class="!m-0 min-h-[190px] rounded-xl border border-[#dce7f2] bg-[#f8fbff] p-4 text-center dark:border-[#34445e] dark:bg-[#182a49]"><span class="mx-auto grid h-7 w-7 place-items-center rounded-full bg-[#1769f9] text-xs font-black text-white">{{ index + 1 }}</span><SvgIcon :name="step.icon" class="mx-auto mt-3 h-8 w-8 text-[#1769f9]" /><h3 class="!m-0 !mt-3 !border-0 !p-0 text-sm font-extrabold leading-5"><a v-if="step.href" :href="step.href" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">{{ step.title }}</a><span v-else>{{ step.title }}</span></h3><p class="!mb-0 !mt-2 text-xs leading-5 text-[#68758a] dark:text-[#aebbd0]">{{ step.description }}</p></li>
            </ol>
          </div>
          <ol class="!m-0 grid !list-none gap-3 !p-4 sm:grid-cols-2 lg:hidden"><li v-for="(step, index) in copy.lifecycleSteps" :key="step.title" class="!m-0 rounded-xl border border-[#dce7f2] bg-[#f8fbff] p-4 dark:border-[#34445e] dark:bg-[#182a49]"><div class="flex items-start gap-3"><span class="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#1769f9] text-xs font-black text-white">{{ index + 1 }}</span><div><h3 class="!m-0 !border-0 !p-0 text-sm font-extrabold leading-5"><a v-if="step.href" :href="step.href" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">{{ step.title }}</a><span v-else>{{ step.title }}</span></h3><p class="!mb-0 !mt-1.5 text-xs leading-5 text-[#68758a] dark:text-[#aebbd0]">{{ step.description }}</p></div></div></li></ol>
          <div class="border-t border-[#e2eaf4] bg-[#f8fbff] px-4 py-4 dark:border-[#34445e] dark:bg-[#182236]"><p class="!mb-0 text-xs font-extrabold uppercase tracking-[0.08em] text-[#758197] dark:text-[#aebbd0]">{{ copy.lifecycleOptionalTitle }}</p><div class="mt-3 grid gap-3 sm:grid-cols-2"><article v-for="item in copy.lifecycleOptional" :key="item.title" class="flex items-center gap-3 rounded-xl border border-[#dce7f2] bg-white px-4 py-3 dark:border-[#34445e] dark:bg-[#151f31]"><img v-if="item.logo" :src="item.logo" :alt="item.title" class="h-7 w-7 object-contain" /><SvgIcon v-else :name="item.icon" class="h-7 w-7 shrink-0 text-[#1769f9]" /><div><h3 class="!m-0 !border-0 !p-0 text-sm font-extrabold"><a v-if="item.href" :href="item.href" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">{{ item.title }}</a><span v-else>{{ item.title }}</span></h3><p class="!mb-0 !mt-0.5 text-xs leading-5 text-[#68758a] dark:text-[#aebbd0]">{{ item.description }}</p></div></article></div></div>
        </div>
      </div>
    </section>

    <section class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]" aria-labelledby="benefits-title"><div class="mx-auto max-w-[1120px]"><h2 id="benefits-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.benefitsTitle }}</h2><p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.benefitsDescription }}</p><ul class="!mb-0 !mt-5 grid !list-none grid-cols-1 gap-3 !p-0 sm:grid-cols-2 lg:grid-cols-3"><li v-for="item in copy.benefits" :key="item.title" class="!m-0 rounded-xl border border-[#dce7f2] bg-white p-4 dark:border-[#34445e] dark:bg-[#151f31]" :class="item.emphasis ? 'border-[#b9d4f8] shadow-[0_12px_28px_rgb(37_74_125_/_10%)] ring-1 ring-[#e5f0ff] dark:border-[#416ea8] dark:ring-[#1d3d67]' : ''"><div class="flex items-center gap-3"><span class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#eaf3ff] text-base text-[#1769f9]"><SvgIcon :name="item.icon" class="h-4 w-4" /></span><h3 class="!m-0 !border-0 !p-0 text-sm font-extrabold">{{ item.title }}</h3></div><p class="!mb-0 !mt-2 text-sm leading-6 text-[#68758a] dark:text-[#aebbd0]">{{ item.description }}</p><p v-if="item.evidence" class="!mb-0 !mt-3 rounded-lg border-l-2 border-[#1769f9] bg-[#f2f7ff] px-3 py-2 text-sm font-bold leading-5 text-[#1769f9] dark:bg-[#172b50] dark:text-[#9bc5ff]">{{ item.evidence }}</p></li></ul></div></section>

    <section class="px-4 py-9 sm:px-6 sm:py-11" aria-labelledby="workflow-title"><div class="mx-auto max-w-[1120px]"><h2 id="workflow-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.workflowTitle }}</h2><p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.workflowDescription }}</p><div class="mt-5 grid gap-4 lg:grid-cols-2"><article v-for="path in copy.workflows" :key="path.title" class="rounded-xl border border-[#dce7f2] bg-white p-5 shadow-sm dark:border-[#34445e] dark:bg-[#151f31]"><div class="flex items-center gap-3"><span class="grid h-10 w-10 place-items-center rounded-lg bg-[#eaf3ff] text-lg text-[#1769f9]"><SvgIcon :name="path.icon" class="h-5 w-5" /></span><h3 class="!m-0 !border-0 !p-0 text-base font-extrabold">{{ path.title }}</h3></div><ol class="!mb-0 !mt-4 grid !list-none gap-2.5 !p-0"><li v-for="(step, index) in path.steps" :key="step" class="!m-0 flex items-start gap-3 text-sm leading-6 text-[#59677b] dark:text-[#b1bdcc]"><span class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#eaf3ff] text-[10px] font-black text-[#1769f9]">{{ index + 1 }}</span><span>{{ step }}</span></li></ol></article></div><div class="mt-5 text-center"><a :href="localizedHref('/guide/host')" class="inline-flex items-center rounded-lg border border-[#1769f9] px-4 py-2 text-sm font-bold !text-[#1769f9] no-underline transition hover:bg-[#eef5ff] dark:hover:bg-[#172b50]">{{ copy.setupGuide }} <SvgIcon name="arrowRight" class="ml-2 h-4 w-4" /></a></div></div></section>

    <section class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]" aria-labelledby="comparison-title"><div class="mx-auto max-w-[1120px]"><h2 id="comparison-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.comparisonTitle }}</h2><p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.comparisonDescription }}</p><div class="mt-6 overflow-hidden rounded-2xl border border-[#d5e3f2] bg-white shadow-[0_14px_34px_rgb(37_74_125_/_7%)] dark:border-[#34445e] dark:bg-[#151f31]"><table class="!m-0 !table w-full min-w-0 lg:min-w-[760px] table-fixed border-separate border-spacing-0 text-left text-sm"><colgroup><col class="w-[22%]" /><col class="w-[25%]" /><col class="w-[25%]" /><col class="w-[28%]" /></colgroup><thead><tr><th scope="col" class="rounded-tl-2xl border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]">{{ copy.comparisonHeaders[0] }}</th><th scope="col" class="border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]">{{ copy.comparisonHeaders[1] }}</th><th scope="col" class="border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]">{{ copy.comparisonHeaders[2] }}</th><th scope="col" class="rounded-tr-2xl border-0 !bg-[#1769f9] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] !text-white">{{ copy.comparisonHeaders[3] }}</th></tr></thead><tbody><tr v-for="row in copy.comparisonRows" :key="row.feature"><th scope="row" class="border-t border-[#e1eaf4] px-5 py-4 text-sm font-extrabold leading-5 text-[#26344a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#e9edf5] dark:odd:bg-[#151f31] dark:even:bg-[#182236]">{{ row.feature }}</th><td class="border-t border-[#e1eaf4] px-5 py-4 text-sm leading-5 text-[#68758a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#b1bdcc] dark:odd:bg-[#151f31] dark:even:bg-[#182236]">{{ row.manual }}</td><td class="border-t border-[#e1eaf4] px-5 py-4 text-sm leading-5 text-[#68758a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#b1bdcc] dark:odd:bg-[#151f31] dark:even:bg-[#182236]">{{ row.container }}</td><td class="border-l border-t border-[#cfe2ff] bg-[#eef6ff] px-5 py-4 text-sm font-bold leading-5 text-[#1769f9] even:bg-[#e7f2ff] dark:border-[#2c568e] dark:bg-[#172b50] dark:text-[#9bc5ff] dark:even:bg-[#1b365e]">{{ row.flyenv }}</td></tr></tbody></table></div></div></section>

    <section class="border-b border-[#dfe8f4] bg-white px-4 py-12 sm:px-6 sm:py-16 dark:border-[#26344b] dark:bg-[#0b1020]" aria-labelledby="faq-title"><div class="mx-auto max-w-[1120px]"><header class="max-w-3xl text-left"><h2 id="faq-title" class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:!text-4xl">{{ copy.faqTitle }}</h2><p class="!mb-0 !mt-3 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">{{ copy.faqDescription }}</p></header><div class="mt-8 grid items-stretch gap-4 md:grid-cols-2"><article v-for="item in copy.faqs" :key="item.question" class="h-full rounded-2xl border border-[#dce7f2] bg-white px-5 py-5 shadow-[0_10px_30px_rgb(37_74_125_/_6%)] dark:border-[#34445e] dark:bg-[#151f31]"><h3 class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-[#354153] dark:text-[#e9edf5]">{{ item.question }}</h3><p class="!mb-0 !mt-3 text-[15px] leading-7 text-[#68758a] dark:text-[#b1bdcc]">{{ item.answer }}</p></article></div></div></section>

    <section class="border-t-0 border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]" aria-labelledby="related-title"><div class="mx-auto max-w-[1120px]"><h2 id="related-title" class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl">{{ copy.relatedTitle }}</h2><div class="mt-4 grid gap-3 sm:grid-cols-3"><a v-for="solution in copy.relatedSolutions" :key="solution.name" :href="solution.href" class="flex items-center gap-3 rounded-xl border border-[#dce7f2] bg-white px-4 py-3 no-underline transition hover:-translate-y-px hover:border-[#1769f9] dark:border-[#34445e] dark:bg-[#151f31]"><img :src="solution.logo" :alt="`${solution.name} logo`" class="h-9 w-9 object-contain" loading="lazy" /><span class="min-w-0"><span class="block text-sm font-extrabold !text-[#26344a] dark:!text-[#e9edf5]">{{ solution.name }}</span><span class="block text-xs text-[#68758a] dark:text-[#aebbd0]">{{ solution.description }}</span></span><SvgIcon name="arrowRight" class="ml-auto h-4 w-4 shrink-0 text-[#1769f9]" /></a></div><div class="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl bg-[#1769f9] px-5 py-5 text-white sm:flex-row"><div><h2 class="!m-0 !border-0 !p-0 text-lg font-black text-white">{{ copy.ctaTitle }}</h2><p class="!mb-0 !mt-1 text-sm leading-6 text-blue-100">{{ copy.ctaDescription }}</p></div><a :href="localizedHref('/download')" class="inline-flex shrink-0 items-center rounded-lg bg-white px-4 py-2.5 text-sm font-extrabold !text-[#1769f9] no-underline transition hover:bg-blue-50">{{ copy.download }} <SvgIcon name="arrowDown" class="ml-2 h-4 w-4" /></a></div><div class="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#dce7f2] pt-5 text-sm text-[#68758a] sm:flex-row dark:border-[#34445e] dark:text-[#aebbd0]"><span class="font-bold text-[#26344a] dark:text-[#e9edf5]">{{ copy.haveQuestions }}</span><div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"><a href="https://github.com/xpf0000/FlyEnv/issues" target="_blank" rel="noopener noreferrer" class="!text-[#1769f9] no-underline hover:underline">GitHub Issues ↗</a><a href="mailto:alexpengfeixu@gmail.com" class="!text-[#1769f9] no-underline hover:underline">alexpengfeixu@gmail.com ↗</a></div></div></div></section>
  </main>
</template>

<script setup lang="ts">
  import { defineComponent, h } from 'vue'
  import { translateData, type WordPressSolutionLocale } from './wordpress-solution-locales'

  const props = withDefaults(defineProps<{ locale?: WordPressSolutionLocale }>(), { locale: 'en' })
  const locale = props.locale
  const localizedHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`)
  const copy = translateData(locale)

  const iconPaths: Record<string, string[]> = {
    folder: ['M4 6h6l2 2h8v10H4z', 'M4 8h16'],
    runtime: ['M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4'],
    extension: ['M6 4h12v16H6z', 'M9 8h6M9 12h6M9 16h4'],
    database: ['M5 5c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2Z', 'M5 5v7c0 1.1 3.1 2 7 2s7-.9 7-2V5', 'M5 12v7c0 1.1 3.1 2 7 2s7-.9 7-2v-7'],
    web: ['M4 5h16v14H4z', 'M4 9h16', 'M8 7h.01M11 7h.01'],
    globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3 12h18', 'M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18'],
    cache: ['M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z', 'M4 13l8 4.5 8-4.5', 'M4 17.5l8 4.5 8-4.5'],
    frontend: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h6v6h-6z', 'M10 7h4M7 10v4M17 10v4M10 17h4'],
    clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7v5l3 2'],
    lock: ['M6 10h12v10H6z', 'M8 10V7a4 4 0 0 1 8 0v3', 'M12 14v2'],
    code: ['m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12'],
    play: ['M8 5v14l11-7L8 5Z'],
    list: ['M8 6h11M8 12h11M8 18h11', 'M4 6h.01M4 12h.01M4 18h.01'],
    plus: ['M12 5v14M5 12h14'],
    arrowDown: ['M12 4v16', 'm6 14 6 6 6-6'],
    arrowRight: ['M4 12h16', 'm14 6 6 6-6 6'],
    arrowUpRight: ['M7 17 17 7', 'M8 7h9v9'],
    check: ['m5 12 4 4L19 6']
  }

  const SvgIcon = defineComponent({
    props: { name: { type: String, required: true } },
    setup(props, { attrs }) {
      return () => h('svg', { ...attrs, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': 'true' }, (iconPaths[props.name] || iconPaths.code).map((d) => h('path', { d })))
    }
  })

</script>
