<template>
  <main
    v-if="solution && detail"
    class="w-full overflow-hidden bg-white text-[#172033] dark:bg-[#0b1020] dark:text-[#e9edf5]"
  >
    <section
      class="border-b border-[#e6eaf0] bg-[#f8fbff] py-12 dark:border-[#2e3a4f] dark:bg-[#101827] md:py-16"
    >
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <nav aria-label="Breadcrumb" class="mb-3">
          <ol
            class="!mb-0 !mt-0 flex !list-none flex-wrap items-center gap-x-2 gap-y-1 !p-0 text-sm font-semibold text-[#6d7788] dark:text-[#a4b0c1]"
          >
            <li class="!mt-0"
              ><a
                :href="homeHref"
                class="text-[#1769f9] no-underline hover:text-[#0d5be4] dark:text-[#8fbcff] dark:hover:text-[#b8d4ff]"
                >FlyEnv</a
              ></li
            >
            <li aria-hidden="true" class="!mt-0 text-[#aab7c8] dark:text-[#52627f]">/</li>
            <li class="!mt-0"
              ><a
                :href="solutionsHref"
                class="text-[#1769f9] no-underline hover:text-[#0d5be4] dark:text-[#8fbcff] dark:hover:text-[#b8d4ff]"
                >{{ copy.solutions }}</a
              ></li
            >
            <li aria-hidden="true" class="!mt-0 text-[#aab7c8] dark:text-[#52627f]">/</li>
            <li aria-current="page" class="!mt-0">{{ solution.name }}</li>
          </ol>
        </nav>
        <a
          :href="solutionsHref"
          class="inline-flex min-h-9 items-center rounded-md text-sm font-semibold text-[#1769f9] no-underline transition-colors hover:text-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 dark:text-[#8fbcff] dark:hover:text-[#b8d4ff]"
          >&larr; {{ copy.allSolutions }}</a
        >
        <div
          class="mt-7 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:items-center"
        >
          <div class="min-w-0">
            <div class="flex min-w-0 flex-col gap-6 sm:flex-row sm:items-start sm:gap-7">
              <div
                class="grid h-[76px] w-[76px] shrink-0 place-items-center rounded-[10px] border border-[#dce7f7] bg-white p-3 shadow-[0_8px_22px_rgb(26_43_72_/_5%)] dark:border-[#3a4760] dark:bg-[#131d2d]"
              >
                <img
                  :src="solution.logo"
                  :alt="`${solution.name} logo`"
                  class="max-h-12 max-w-12 object-contain"
                />
              </div>
              <div class="min-w-0">
                <p
                  class="!mb-3 !mt-0 text-xs font-bold uppercase leading-none text-[#1769f9] dark:text-[#8fbcff]"
                >
                  {{ categoryLabel }} {{ copy.solution }}
                </p>
                <h1
                  class="!mb-0 !mt-0 !border-0 !pt-0 text-4xl font-extrabold leading-[1.12] text-[#172033] dark:text-[#e9edf5] md:text-5xl"
                >
                  {{ projectTitle }}
                </h1>
                <p
                  class="!mb-0 !mt-5 max-w-[680px] text-base leading-7 text-[#5b6473] dark:text-[#b1bdcc]"
                >
                  {{ detail.summary }}
                </p>
              </div>
            </div>
            <div class="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                :href="downloadHref"
                class="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#1769f9] bg-[#1769f9] px-[17px] text-sm font-bold !text-white no-underline transition-colors hover:border-[#0d5be4] hover:bg-[#0d5be4] hover:!text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px"
                data-analytics-event="download_click"
                data-analytics-surface="solution-detail-hero"
                >{{ copy.downloadFlyEnv }}</a
              >
              <a
                :href="documentationHref"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#cfd7e3] bg-white px-[17px] text-sm font-bold text-[#172033] no-underline transition-colors hover:border-[#aab7c8] hover:text-[#172033] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#e9edf5] dark:hover:border-[#52627f] dark:hover:text-[#e9edf5]"
                data-analytics-event="solution_official_docs_click"
                data-analytics-surface="solution-detail-hero"
                >{{ copy.officialDocumentation }}</a
              >
            </div>
          </div>
          <section
            class="min-w-0 rounded-lg border border-[#e3ebf6] bg-[#fbfdff] p-4 dark:border-[#334155] dark:bg-[#111a2a]"
            aria-labelledby="hero-stack-title"
          >
            <h2
              id="hero-stack-title"
              class="!mb-0 !mt-0 !border-0 !pt-0 text-base font-bold leading-[1.25] text-[#354153] dark:text-[#d4deeb]"
            >
              {{ copy.localProjectStack }}
            </h2>
            <p class="!mb-0 !mt-2 text-xs leading-5 text-[#6d7788] dark:text-[#a4b0c1]">
              {{ copy.managedServices }} {{ solution.name }}
            </p>
            <ul
              class="!mb-0 !mt-3 flex !list-none flex-wrap gap-1.5 !p-0"
              aria-label="Project stack components"
            >
              <li
                v-for="item in detail.stack"
                :key="item.component"
                class="!mt-0 rounded-md bg-[#edf4ff] px-2.5 py-1 text-xs font-semibold leading-5 text-[#1769f9] dark:bg-[#172b50] dark:text-[#9bc5ff]"
              >
                {{ item.component }}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-12" aria-labelledby="about-project-title">
      <div
        class="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-9 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(300px,360px)] lg:items-start"
      >
        <div>
          <h2
            id="about-project-title"
            class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
          >
            {{ copy.about }} {{ solution.name }}
          </h2>
          <p
            v-for="paragraph in aboutParagraphs"
            :key="paragraph"
            class="!mb-0 !mt-4 max-w-[720px] text-base leading-7 text-[#4b5565] dark:text-[#b1bdcc]"
          >
            {{ paragraph }}
          </p>
          <section
            v-if="aboutContent?.capabilities.length"
            class="mt-7"
            aria-labelledby="solution-capabilities-title"
          >
            <h3
              id="solution-capabilities-title"
              class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold leading-[1.25] text-[#172033] dark:text-[#e9edf5]"
            >
              {{ copy.coreCapabilities }}
            </h3>
            <ul class="!mb-0 !mt-4 flex !list-none flex-wrap gap-2 !p-0">
              <li
                v-for="capability in aboutContent.capabilities"
                :key="capability"
                class="!mt-0 rounded-md bg-[#edf4ff] px-3 py-1.5 text-sm font-semibold text-[#1769f9] dark:bg-[#172b50] dark:text-[#9bc5ff]"
              >
                {{ capability }}
              </li>
            </ul>
          </section>
          <section v-if="aboutContent?.useCases.length" class="mt-7" aria-labelledby="solution-use-cases-title">
            <h3 id="solution-use-cases-title" class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold leading-[1.25] text-[#172033] dark:text-[#e9edf5]">
              {{ copy.commonUseCases }}
            </h3>
            <ul class="!mb-0 !mt-4 grid !list-none grid-cols-1 gap-2 !p-0 sm:grid-cols-2">
              <li v-for="useCase in aboutContent.useCases" :key="useCase" class="!mt-0 border-l-2 border-[#1769f9] pl-3.5 text-sm leading-6 text-[#4b5565] dark:text-[#b1bdcc]">
                {{ useCase }}
              </li>
            </ul>
          </section>
          <section v-if="aboutContent?.localEnvironment?.items.length" class="mt-7 rounded-lg border border-[#dfe6ef] bg-[#f8fbff] p-5 dark:border-[#3a4760] dark:bg-[#131d2d]" aria-labelledby="solution-local-environment-title">
            <h3 id="solution-local-environment-title" class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold leading-[1.25] text-[#172033] dark:text-[#e9edf5]">
              {{ aboutContent.localEnvironment.title }}
            </h3>
            <p class="!mb-0 !mt-3 text-sm leading-6 text-[#4b5565] dark:text-[#b1bdcc]">{{ aboutContent.localEnvironment.description }}</p>
            <dl class="!mb-0 !mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div v-for="item in aboutContent.localEnvironment.items" :key="item.title" class="min-w-0">
                <dt class="text-sm font-bold text-[#172033] dark:text-[#e9edf5]">{{ item.title }}</dt>
                <dd class="!ml-0 !mt-1 text-sm leading-6 text-[#5b6473] dark:text-[#b1bdcc]">{{ item.description }}</dd>
              </div>
            </dl>
          </section>
        </div>
        <div
          class="rounded-lg border border-[#dfe6ef] bg-[#f8fbff] p-5 dark:border-[#3a4760] dark:bg-[#131d2d]"
        >
          <h3
            class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold leading-[1.25] text-[#172033] dark:text-[#e9edf5]"
          >
            {{ copy.projectResources }}
          </h3>
          <ul class="!mb-0 !mt-4 grid !list-none grid-cols-1 gap-2 !p-0">
            <li v-for="resource in detail.resources" :key="resource.href" class="!mt-0 min-w-0">
              <a
                :href="resource.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex min-h-10 items-center rounded-md border border-[#dfe6ef] bg-white px-3.5 text-sm font-semibold text-[#1769f9] no-underline transition-colors hover:border-[#adc5ea] hover:bg-[#eef5ff] hover:text-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 dark:border-[#3a4760] dark:bg-[#101827] dark:text-[#8fbcff] dark:hover:border-[#52627f] dark:hover:bg-[#15284d] dark:hover:text-[#b8d4ff]"
                data-analytics-event="solution_resource_click"
                data-analytics-surface="solution-detail-resources"
                >{{ resource.label }}</a
              >
            </li>
          </ul>
          <p class="!mb-0 !mt-4 text-sm leading-6 text-[#5b6473] dark:text-[#b1bdcc]">
            {{ copy.resourcesDescriptionStart }} {{ solution.name }}
            {{ copy.resourcesDescriptionEnd }}
          </p>
        </div>
      </div>
    </section>

    <section
      class="border-y border-[#e6eaf0] bg-[#f8fbff] py-12 dark:border-[#2e3a4f] dark:bg-[#101827] md:py-16"
      aria-labelledby="typical-stack-title"
    >
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2
          id="typical-stack-title"
          class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
        >
          {{ copy.typicalLocalStack }}
        </h2>
        <p class="!mb-0 !mt-4 max-w-[720px] text-base leading-7 text-[#4b5565] dark:text-[#b1bdcc]">
          {{ copy.typicalStackDescription }}
        </p>
        <ul
          class="!mb-0 !mt-6 flex !list-none flex-wrap gap-2 !p-0"
          aria-label="Typical local stack components"
        >
          <li
            v-for="item in detail.stack"
            :key="item.component"
            class="!mt-0 rounded-md border border-[#d4e1f5] bg-white px-3 py-1.5 text-sm font-semibold leading-5 text-[#354153] dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#d4deeb]"
          >
            {{ item.component }}
          </li>
        </ul>
        <div
          class="mt-7 overflow-hidden rounded-lg border border-[#dfe6ef] bg-white dark:border-[#3a4760] dark:bg-[#131d2d]"
        >
          <table class="!mb-0 !mt-0 w-full table-fixed border-collapse text-left">
            <thead
              class="bg-[#eef5ff] text-sm text-[#172033] dark:bg-[#15284d] dark:text-[#e9edf5]"
            >
              <tr>
                <th scope="col" class="w-[36%] border-0 px-3 py-3 font-bold sm:px-4">{{
                  copy.component
                }}</th>
                <th scope="col" class="border-0 px-3 py-3 font-bold sm:px-4">{{
                  copy.typicalRole
                }}</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="item in detail.stack"
                :key="item.component"
                class="border-t border-[#e6eaf0] dark:border-[#2e3a4f]"
              >
                <th
                  scope="row"
                  class="border-0 break-words px-3 py-3 text-sm font-bold text-[#172033] dark:text-[#e9edf5] sm:px-4"
                  >{{ item.component }}</th
                >
                <td
                  class="border-0 break-words px-3 py-3 text-sm leading-6 text-[#5b6473] dark:text-[#b1bdcc] sm:px-4"
                  >{{ item.role }}</td
                >
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16" aria-labelledby="flyenv-helps-title">
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2
          id="flyenv-helps-title"
          class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
        >
          {{ copy.howFlyEnvHelps }}
        </h2>
        <ul class="!mb-0 !mt-7 grid !list-none grid-cols-1 gap-x-10 gap-y-7 !p-0 md:grid-cols-2">
          <li v-for="item in detail.help" :key="item.title" class="!mt-0 min-w-0">
            <h3
              class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold leading-[1.3] text-[#172033] dark:text-[#e9edf5]"
              >{{ item.title }}</h3
            >
            <p class="!mb-0 !mt-2 text-sm leading-6 text-[#5b6473] dark:text-[#b1bdcc]">{{
              item.description
            }}</p>
          </li>
        </ul>
      </div>
    </section>

    <section
      class="border-y border-[#e6eaf0] bg-[#f8fbff] py-12 dark:border-[#2e3a4f] dark:bg-[#101827] md:py-16"
      aria-labelledby="setup-environment-title"
    >
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2
          id="setup-environment-title"
          class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
        >
          {{ copy.setupLocalEnvironment }}
        </h2>
        <p class="!mb-0 !mt-4 max-w-[720px] text-base leading-7 text-[#4b5565] dark:text-[#b1bdcc]">
          {{ copy.setupDescription }}
        </p>
        <ol class="!mb-0 !mt-7 grid !list-none grid-cols-1 gap-3 !p-0 md:grid-cols-2">
          <li
            v-for="(step, index) in detail.setupSteps"
            :key="step"
            class="!mt-0 grid h-full grid-cols-[30px_minmax(0,1fr)] items-start gap-3 rounded-lg border border-[#dfe6ef] bg-white px-4 py-3.5 text-sm leading-6 text-[#4b5565] dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#b1bdcc]"
          >
            <span
              class="grid h-[30px] w-[30px] place-items-center rounded-full bg-[#e7f0ff] text-xs font-extrabold text-[#1769f9] dark:bg-[#15284d] dark:text-[#8fbcff]"
              >{{ index + 1 }}</span
            >
            <span>{{ step }}</span>
          </li>
        </ol>
        <a
          v-if="detail.guide"
          :href="detail.guide.href"
          class="mt-7 inline-flex min-h-11 items-center rounded-lg border border-[#cfd7e3] bg-white px-[17px] text-sm font-bold text-[#1769f9] no-underline transition-colors hover:border-[#adc5ea] hover:bg-[#eef5ff] hover:text-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#8fbcff] dark:hover:border-[#52627f] dark:hover:bg-[#15284d] dark:hover:text-[#b8d4ff]"
          >{{ detail.guide.label }}</a
        >
      </div>
    </section>

    <section v-if="demo" class="py-12 md:py-16" aria-labelledby="solution-demo-title">
      <div
        class="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-[minmax(0,1fr)_minmax(260px,420px)] md:items-center"
      >
        <div>
          <h2
            id="solution-demo-title"
            class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
          >
            {{ copy.watchDemo }}
          </h2>
          <p
            class="!mb-0 !mt-4 max-w-[600px] text-base leading-7 text-[#4b5565] dark:text-[#b1bdcc]"
          >
            {{ demo.locales[props.locale].summary }}
          </p>
        </div>
        <a
          :href="demo.platforms.youtube"
          target="_blank"
          rel="noopener noreferrer"
          class="group block overflow-hidden rounded-lg border border-[#dfe6ef] bg-white no-underline transition-colors hover:border-[#adc5ea] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 dark:border-[#3a4760] dark:bg-[#131d2d] dark:hover:border-[#52627f]"
          data-analytics-event="solution_demo_click"
          data-analytics-surface="solution-detail-demo"
        >
          <img
            :src="`https://i.ytimg.com/vi/${demo.youtubeId}/hqdefault.jpg`"
            :alt="`${copy.thumbnailFor} ${demo.locales[props.locale].title}`"
            width="480"
            height="360"
            loading="lazy"
            class="aspect-video w-full object-cover"
          />
          <span
            class="block px-4 py-3 text-sm font-bold leading-6 text-[#1769f9] group-hover:text-[#0d5be4] dark:text-[#8fbcff] dark:group-hover:text-[#b8d4ff]"
          >
            {{ demo.locales[props.locale].title }}
          </span>
        </a>
      </div>
    </section>

    <section class="py-12 md:py-16" aria-labelledby="related-solutions-title">
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2
          id="related-solutions-title"
          class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
        >
          {{ copy.relatedSolutions }}
        </h2>
        <ul
          class="!mb-0 !mt-7 grid !list-none grid-cols-1 gap-3 !p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li v-for="related in relatedSolutions" :key="related.slug" class="!mt-0 min-w-0">
            <a
              :href="`${routePrefix}/solutions/${related.slug}`"
              class="flex min-h-[86px] items-center gap-3 rounded-lg border border-[#dfe6ef] bg-white px-4 py-3 no-underline transition-colors hover:border-[#adc5ea] hover:bg-[#f8fbff] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 dark:border-[#3a4760] dark:bg-[#131d2d] dark:hover:border-[#52627f] dark:hover:bg-[#15284d]"
              data-analytics-event="solution_related_click"
              data-analytics-surface="solution-detail-related"
            >
              <img :src="related.logo" alt="" class="h-9 w-9 shrink-0 object-contain" />
              <span class="min-w-0">
                <span class="block text-sm font-bold text-[#172033] dark:text-[#e9edf5]">{{
                  related.name
                }}</span>
                <span
                  class="mt-0.5 block text-xs font-medium leading-4 text-[#6d7788] dark:text-[#a4b0c1]"
                  >{{ categoryLabels[related.category] }}</span
                >
              </span>
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="py-12 md:py-16" aria-labelledby="solution-cta-title">
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div
          class="flex flex-col gap-6 rounded-xl bg-[#1769f9] p-6 text-white md:flex-row md:items-center md:justify-between md:p-8"
        >
          <div>
            <h2
              id="solution-cta-title"
              class="!mb-0 !mt-0 !border-0 !pt-0 text-[25px] font-extrabold leading-[1.2] text-white"
            >
              {{ copy.readyToRun }} {{ solution.name }} {{ copy.locallyQuestion }}
            </h2>
            <p class="!mb-0 !mt-3 max-w-[560px] text-sm leading-6 text-[#e5efff]">
              {{ copy.finalCtaDescriptionStart }} {{ solution.name }}
              {{ copy.finalCtaDescriptionEnd }}
            </p>
          </div>
          <a
            :href="downloadHref"
            class="inline-flex min-h-11 shrink-0 items-center justify-center rounded-lg border border-white bg-white px-[17px] text-sm font-bold text-[#165ce0] no-underline transition-colors hover:bg-[#eef5ff] hover:text-[#104fc8] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white/70 active:translate-y-px"
            data-analytics-event="download_click"
            data-analytics-surface="solution-detail-final-cta"
            >{{ copy.downloadFlyEnv }}</a
          >
        </div>
      </div>
    </section>

    <section
      class="border-t border-[#e6eaf0] bg-[#f8fbff] py-12 dark:border-[#2e3a4f] dark:bg-[#101827] md:py-16"
      aria-labelledby="solution-support-title"
    >
      <div class="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <h2
          id="solution-support-title"
          class="!mb-0 !mt-0 !border-0 !pt-0 text-[26px] font-extrabold leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-3xl"
        >
          {{ copy.supportTitle }}
        </h2>
        <div class="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="https://github.com/xpf0000/FlyEnv/issues"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-[#cfd7e3] bg-white px-4 text-sm font-bold text-[#1769f9] no-underline transition-colors hover:border-[#adc5ea] hover:bg-[#eef5ff] hover:text-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#8fbcff] dark:hover:border-[#52627f] dark:hover:bg-[#15284d] dark:hover:text-[#b8d4ff]"
            data-analytics-surface="solution-detail-support"
          >
            <el-icon :size="20" aria-hidden="true"><ChatDotSquare /></el-icon>
            <span>{{ copy.githubIssues }}</span>
          </a>
          <div
            class="flex min-h-12 min-w-0 items-center gap-3 rounded-lg border border-[#cfd7e3] bg-white px-3 dark:border-[#3a4760] dark:bg-[#131d2d]"
          >
            <el-icon
              :size="20"
              class="shrink-0 text-[#1769f9] dark:text-[#8fbcff]"
              aria-hidden="true"
              ><Message
            /></el-icon>
            <a
              :href="`mailto:${supportEmail}`"
              class="min-w-0 flex-1 cursor-pointer break-all text-sm font-bold text-[#172033] no-underline transition-colors hover:text-[#1769f9] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1769f9]/30 dark:text-[#e9edf5] dark:hover:text-[#8fbcff]"
            >
              {{ supportEmail }}
            </a>
            <button
              type="button"
              :aria-label="copiedEmail ? copy.emailCopied : copy.copyEmail"
              :title="copiedEmail ? copy.emailCopied : copy.copyEmail"
              class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-md border transition focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[#1769f9]/30"
              :class="
                copiedEmail
                  ? 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-400/15 dark:text-emerald-300'
                  : 'border-[#cfd7e3] bg-white text-[#1769f9] hover:border-[#adc5ea] hover:bg-[#eef5ff] hover:text-[#0d5be4] dark:border-[#3a4760] dark:bg-[#101827] dark:text-[#8fbcff] dark:hover:border-[#52627f] dark:hover:bg-[#15284d] dark:hover:text-[#b8d4ff]'
              "
              @click="copySupportEmail"
            >
              <Check v-if="copiedEmail" class="h-5 w-5" aria-hidden="true" />
              <CopyDocument v-else class="h-5 w-5" aria-hidden="true" />
            </button>
            <span class="sr-only" aria-live="polite">{{
              copiedEmail ? copy.emailCopied : ''
            }}</span>
          </div>
        </div>
      </div>
    </section>
  </main>

  <main v-else class="mx-auto w-full max-w-[1120px] px-4 py-16 sm:px-6">
    <h1
      class="!mb-0 !mt-0 !border-0 !pt-0 text-3xl font-extrabold text-[#172033] dark:text-[#e9edf5]"
      >{{ copy.notFound }}</h1
    >
    <a
      :href="solutionsHref"
      class="mt-5 inline-flex text-sm font-semibold text-[#1769f9] no-underline hover:text-[#0d5be4]"
      >{{ copy.browseAllSolutions }}</a
    >
  </main>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import { ChatDotSquare, Check, CopyDocument, Message } from '@element-plus/icons-vue'
  import { demos } from '../../data/demos'
  import { solutions } from '../../data/solutions'
  import { solutionDetails } from '../../data/solution-details'
  import { solutionAboutContentByLocale } from '../../data/solution-use-cases'
  import type { SolutionSlug } from '../../data/solution-details'
  import {
    solutionCategoryLabelsByLocale,
    solutionContentByLocale
  } from '../../data/solution-locales'

  const props = withDefaults(
    defineProps<{
      slug: string
      locale?: 'en' | 'zh' | 'id'
    }>(),
    { locale: 'en' }
  )

  const solution = computed(() => solutions.find((item) => item.slug === props.slug))
  const routePrefix = computed(() => (props.locale === 'en' ? '' : `/${props.locale}`))
  const homeHref = computed(() => routePrefix.value || '/')
  const solutionsHref = computed(() => `${routePrefix.value}/solutions`)
  const downloadHref = computed(() => `${routePrefix.value}/download`)
  const categoryLabels = computed(() => solutionCategoryLabelsByLocale[props.locale])
  const aboutContent = computed(() => solutionAboutContentByLocale[props.locale][props.slug])
  const aboutParagraphs = computed(() => {
    if (!detail.value) return []
    if (aboutContent.value?.replaceOverview) {
      return aboutContent.value.paragraphs ?? [detail.value.overview]
    }

    return [detail.value.overview, aboutContent.value?.introduction].filter(
      (paragraph): paragraph is string => Boolean(paragraph)
    )
  })
  const detail = computed(() => {
    const source = solutionDetails[props.slug as SolutionSlug]
    const localized = solutionContentByLocale[props.locale][props.slug]
    if (!source || !localized) return source ?? null

    const name = solution.value?.name ?? 'project'
    const isChinese = props.locale === 'zh'
    const role = (component: string) =>
      isChinese
        ? `用于本地 ${name} 环境的 ${component} 服务。`
        : `Menjalankan ${component} untuk lingkungan ${name} lokal.`
    const help = isChinese
      ? [
          { title: '匹配项目运行时', description: `为 ${name} 选择项目所需的运行时版本。` },
          { title: '管理本地服务', description: '仅在项目需要时启动数据库、缓存和其他服务。' },
          { title: '保持项目隔离', description: '让不同项目使用各自的版本和服务配置。' },
          { title: '配置本地域名', description: '需要时可通过本地域名和 HTTPS 访问项目。' }
        ]
      : [
          {
            title: 'Cocokkan runtime proyek',
            description: `Pilih versi runtime yang dibutuhkan ${name}.`
          },
          {
            title: 'Kelola layanan lokal',
            description:
              'Jalankan database, cache, dan layanan lain hanya saat proyek membutuhkannya.'
          },
          {
            title: 'Jaga isolasi proyek',
            description: 'Gunakan versi dan konfigurasi layanan tersendiri untuk setiap proyek.'
          },
          {
            title: 'Atur domain lokal',
            description: 'Akses proyek melalui domain lokal dan HTTPS saat diperlukan.'
          }
        ]
    const setupSteps = isChinese
      ? [
          `按照 ${name} 官方文档安装项目和依赖。`,
          '在 FlyEnv 中选择项目需要的运行时版本。',
          '启动项目配置中指定的数据库服务。',
          '仅在项目需要时启动缓存、搜索或其他辅助服务。',
          '按需配置本地 Web 服务器、域名和 HTTPS。',
          '将相关服务加入启动组，方便重复启动。'
        ]
      : [
          `Pasang proyek dan dependensinya mengikuti dokumentasi resmi ${name}.`,
          'Pilih versi runtime yang dibutuhkan proyek di FlyEnv.',
          'Jalankan layanan database yang ditentukan dalam konfigurasi proyek.',
          'Mulai cache, pencarian, atau layanan pendukung lain hanya bila diperlukan.',
          'Konfigurasikan server web, domain lokal, dan HTTPS sesuai kebutuhan.',
          'Kelompokkan layanan terkait agar mudah dijalankan kembali bersama-sama.'
        ]

    return {
      ...source,
      summary: localized.summary,
      overview: localized.overview,
      stack: source.stack.map((item) => ({ ...item, role: role(item.component) })),
      help,
      setupSteps,
      guide: source.guide
        ? {
            ...source.guide,
            label: isChinese ? `阅读 ${name} 指南` : `Baca panduan ${name}`,
            href: `${routePrefix.value}${source.guide.href}`
          }
        : undefined
    }
  })
  const categoryLabel = computed(() =>
    solution.value ? categoryLabels.value[solution.value.category] : 'FlyEnv'
  )
  const copyByLocale = {
    en: {
      solutions: 'Solutions',
      allSolutions: 'All solutions',
      solution: 'solution',
      downloadFlyEnv: 'Download FlyEnv',
      officialDocumentation: 'Official documentation',
      localProjectStack: 'Local project stack',
      managedServices: 'Services FlyEnv can manage around',
      about: 'About',
      commonUseCases: 'Common use cases',
      coreCapabilities: 'Core capabilities',
      projectResources: 'Project resources',
      resourcesDescriptionStart:
        'For installation commands, supported versions, and project-specific configuration, refer to the official',
      resourcesDescriptionEnd: 'documentation.',
      typicalLocalStack: 'Typical local stack',
      typicalStackDescription:
        'The exact services depend on the project, its release, and its local configuration. This is a common local setup, not a fixed requirement.',
      component: 'Component',
      typicalRole: 'Typical role',
      howFlyEnvHelps: 'How FlyEnv helps',
      setupLocalEnvironment: 'Set up the local environment',
      setupDescription:
        'Project installation stays with the upstream documentation. FlyEnv manages the runtimes, databases, web servers, and supporting services around it.',
      watchDemo: 'Watch the demo',
      thumbnailFor: 'Thumbnail for',
      relatedSolutions: 'Related solutions',
      readyToRun: 'Ready to run',
      locallyQuestion: 'locally?',
      finalCtaDescriptionStart:
        'Use FlyEnv to manage the runtimes, databases, web servers, and services around your local',
      finalCtaDescriptionEnd: 'environment.',
      supportTitle: 'Have questions using FlyEnv?',
      githubIssues: 'GitHub Issues',
      copyEmail: 'Copy email address',
      emailCopied: 'Email address copied',
      notFound: 'Solution not found',
      browseAllSolutions: 'Browse all solutions'
    },
    zh: {
      solutions: '解决方案',
      allSolutions: '全部解决方案',
      solution: '方案',
      downloadFlyEnv: '下载 FlyEnv',
      officialDocumentation: '官方文档',
      localProjectStack: '本地项目技术栈',
      managedServices: 'FlyEnv 可管理的服务：',
      about: '关于',
      commonUseCases: '常见使用场景',
      coreCapabilities: '核心能力',
      projectResources: '项目资源',
      resourcesDescriptionStart: '安装命令、支持版本和项目配置请参阅',
      resourcesDescriptionEnd: '官方文档。',
      typicalLocalStack: '典型本地技术栈',
      typicalStackDescription:
        '具体服务取决于项目、发布版本及本地配置。这里展示的是常见配置，而非固定要求。',
      component: '组件',
      typicalRole: '典型作用',
      howFlyEnvHelps: 'FlyEnv 如何提供帮助',
      setupLocalEnvironment: '配置本地环境',
      setupDescription:
        '项目安装请遵循上游官方文档；FlyEnv 负责管理其所需的运行时、数据库、Web 服务器和辅助服务。',
      watchDemo: '观看演示',
      thumbnailFor: '缩略图：',
      relatedSolutions: '相关解决方案',
      readyToRun: '准备好本地运行',
      locallyQuestion: '吗？',
      finalCtaDescriptionStart: '使用 FlyEnv 管理本地',
      finalCtaDescriptionEnd: '环境所需的运行时、数据库、Web 服务器和服务。',
      supportTitle: '有任何使用问题？',
      githubIssues: 'GitHub Issues',
      copyEmail: '复制邮箱地址',
      emailCopied: '邮箱地址已复制',
      notFound: '未找到解决方案',
      browseAllSolutions: '浏览全部解决方案'
    },
    id: {
      solutions: 'Solusi',
      allSolutions: 'Semua solusi',
      solution: 'solusi',
      downloadFlyEnv: 'Unduh FlyEnv',
      officialDocumentation: 'Dokumentasi resmi',
      localProjectStack: 'Stack proyek lokal',
      managedServices: 'Layanan yang dapat dikelola FlyEnv untuk',
      about: 'Tentang',
      commonUseCases: 'Kasus penggunaan umum',
      coreCapabilities: 'Kemampuan inti',
      projectResources: 'Sumber daya proyek',
      resourcesDescriptionStart:
        'Untuk perintah instalasi, versi yang didukung, dan konfigurasi proyek, lihat dokumentasi resmi',
      resourcesDescriptionEnd: '.',
      typicalLocalStack: 'Stack lokal umum',
      typicalStackDescription:
        'Layanan yang tepat bergantung pada proyek, rilis, dan konfigurasi lokalnya. Ini adalah konfigurasi umum, bukan persyaratan tetap.',
      component: 'Komponen',
      typicalRole: 'Peran umum',
      howFlyEnvHelps: 'Cara FlyEnv Membantu',
      setupLocalEnvironment: 'Siapkan lingkungan lokal',
      setupDescription:
        'Instalasi proyek mengikuti dokumentasi upstream. FlyEnv mengelola runtime, database, server web, dan layanan pendukung di sekitarnya.',
      watchDemo: 'Tonton demo',
      thumbnailFor: 'Thumbnail untuk',
      relatedSolutions: 'Solusi terkait',
      readyToRun: 'Siap menjalankan',
      locallyQuestion: 'secara lokal?',
      finalCtaDescriptionStart:
        'Gunakan FlyEnv untuk mengelola runtime, database, server web, dan layanan di sekitar lingkungan lokal',
      finalCtaDescriptionEnd: 'Anda.',
      supportTitle: 'Ada pertanyaan saat menggunakan FlyEnv?',
      githubIssues: 'GitHub Issues',
      copyEmail: 'Salin alamat email',
      emailCopied: 'Alamat email disalin',
      notFound: 'Solusi tidak ditemukan',
      browseAllSolutions: 'Jelajahi semua solusi'
    }
  } as const
  const copy = computed(() => copyByLocale[props.locale])
  const projectTitle = computed(() => {
    if (!solution.value) return ''
    if (props.locale === 'zh') return `在 FlyEnv 中本地运行 ${solution.value.name}`
    if (props.locale === 'id') return `Jalankan ${solution.value.name} Lokal dengan FlyEnv`
    return `Run ${solution.value.name} Locally with FlyEnv`
  })
  const documentationHref = computed(
    () =>
      detail.value?.resources.find((resource) => resource.label.includes('Documentation'))?.href ??
      '#'
  )
  const demo = computed(() => demos.find((item) => item.id === detail.value?.demoId) ?? null)
  const relatedSolutions = computed(() => {
    if (!detail.value) return []

    return detail.value.relatedSlugs
      .map((slug) => solutions.find((item) => item.slug === slug))
      .filter((item): item is (typeof solutions)[number] => Boolean(item))
  })

  const supportEmail = 'alexpengfeixu@gmail.com'
  const copiedEmail = ref(false)
  let copyResetTimer: ReturnType<typeof setTimeout> | undefined

  function copyWithFallback(value: string) {
    const textarea = document.createElement('textarea')
    textarea.value = value
    textarea.setAttribute('readonly', '')
    textarea.className = 'fixed -left-[9999px] top-0 opacity-0'
    document.body.appendChild(textarea)
    textarea.select()
    const copied = document.execCommand('copy')
    textarea.remove()
    return copied
  }

  async function copySupportEmail() {
    let copied = false

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(supportEmail)
        copied = true
      } catch {
        copied = copyWithFallback(supportEmail)
      }
    } else {
      copied = copyWithFallback(supportEmail)
    }

    if (!copied) return

    copiedEmail.value = true
    if (copyResetTimer) window.clearTimeout(copyResetTimer)
    copyResetTimer = window.setTimeout(() => {
      copiedEmail.value = false
    }, 2000)
  }
</script>
