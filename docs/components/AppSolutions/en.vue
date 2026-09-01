<template>
  <main
    class="w-full overflow-hidden bg-white text-[#172033] dark:bg-[#0b1020] dark:text-[#e9edf5]"
  >
    <section class="py-11 md:py-16 lg:pb-[72px] lg:pt-[72px]" aria-labelledby="solutions-title">
      <div
        class="mx-auto grid w-full max-w-[1248px] items-center gap-[42px] px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:gap-12"
      >
        <div class="max-w-[660px]">
          <p
            class="!mb-5 !mt-0 inline-flex rounded-full bg-[#eef5ff] px-2.5 py-[5px] text-[11px] font-extrabold uppercase leading-none text-[#1769f9] dark:bg-[#15284d] dark:text-[#8fbcff]"
            >{{ copy.badge }}</p
          >
          <h1
            id="solutions-title"
            class="!mb-0 !mt-0 !border-0 !pt-0 text-[38px] font-extrabold leading-[1.12] text-[#172033] dark:text-[#e9edf5] md:text-5xl md:leading-[1.08] xl:text-[56px]"
          >
            {{ copy.heroTitle }}<br />{{ copy.heroTitleSecondLine }}
          </h1>
          <p
            class="!mb-0 !mt-[18px] max-w-[540px] text-[15px] leading-[1.65] text-[#5b6473] dark:text-[#b1bdcc] md:!mt-6 md:text-base md:leading-7"
          >
            {{ copy.heroDescription }}
          </p>
          <div class="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#solutions-catalog"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#1769f9] bg-[#1769f9] px-[17px] text-sm font-bold !text-white no-underline shadow-[0_8px_18px_rgb(23_105_249_/_18%)] transition-colors duration-150 hover:border-[#0d5be4] hover:bg-[#0d5be4] hover:!text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px"
              data-analytics-event="solutions_browse"
              data-analytics-surface="solutions-hero"
            >
              {{ copy.browseSolutions }}
              <ElIcon><ArrowRight /></ElIcon>
            </a>
            <a
              :href="downloadHref"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#cfd7e3] bg-white px-[17px] text-sm font-bold text-[#172033] no-underline transition-colors duration-150 hover:border-[#aab7c8] hover:text-[#172033] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#e9edf5] dark:hover:border-[#52627f] dark:hover:text-[#e9edf5]"
              data-analytics-event="download_click"
              data-analytics-surface="solutions-hero"
            >
              <ElIcon><Download /></ElIcon>
              {{ copy.downloadFlyEnv }}
            </a>
          </div>
        </div>

        <div class="grid min-w-0 justify-items-center pt-1 md:py-[22px]" aria-hidden="true">
          <div class="grid w-full grid-cols-3 gap-2.5 md:grid-cols-5">
            <div
              v-for="(project, index) in heroProjects"
              :key="project.name"
              class="grid min-h-[90px] min-w-0 justify-items-center rounded-[10px] border border-[#e6eaf0] bg-white px-2 pb-2.5 pt-3 shadow-[0_8px_22px_rgb(26_43_72_/_5%)] dark:border-[#2e3a4f] dark:bg-[#131d2d] md:min-h-[108px] md:px-2 md:pb-2.5 md:pt-3.5"
              :class="{ 'hidden md:grid': index >= 3 }"
            >
              <img
                :src="project.logo"
                alt=""
                class="block h-10 w-10 object-contain md:h-12 md:w-12"
              />
              <span
                class="mt-[7px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[10px] font-bold leading-[1.2] text-[#172033] dark:text-[#e9edf5]"
                >{{ project.name }}</span
              >
            </div>
          </div>
          <div
            class="relative mb-1 h-[34px] w-[78%] rounded-b-[44px] border-x-2 border-b-0 border-dashed border-[#4b83f4] md:h-11 md:w-[86%] md:max-w-[430px]"
          >
            <span
              class="absolute bottom-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#4b83f4_0_3px,transparent_3px_7px)]"
            ></span>
          </div>
          <div
            class="inline-flex min-h-[54px] items-center gap-3 rounded-xl border border-[#bfd3ff] bg-white px-6 py-2 text-[21px] text-[#172033] shadow-[0_10px_25px_rgb(23_105_249_/_10%)] dark:border-[#2a5eae] dark:bg-[#131d2d] dark:text-[#e9edf5] md:min-h-[62px] md:px-[30px] md:py-2.5 md:text-2xl"
          >
            <img src="/favicon.ico" alt="" class="h-8 w-8" />
            <strong>FlyEnv</strong>
          </div>
          <div
            class="relative mt-1 h-[34px] w-[78%] rounded-t-[44px] border-x-2 border-t-0 border-dashed border-[#4b83f4] md:h-11 md:w-[86%] md:max-w-[430px]"
          >
            <span
              class="absolute top-0 left-1/2 h-full w-0.5 -translate-x-1/2 bg-[repeating-linear-gradient(to_bottom,#4b83f4_0_3px,transparent_3px_7px)]"
            ></span>
          </div>
          <div class="grid w-full grid-cols-5 gap-2.5 md:grid-cols-4 xl:grid-cols-7">
            <div
              v-for="(service, index) in heroServices"
              :key="service.name"
              class="grid min-h-[76px] min-w-0 justify-items-center rounded-[10px] border border-[#e6eaf0] bg-white px-1 pb-2 pt-3 shadow-[0_8px_22px_rgb(26_43_72_/_5%)] dark:border-[#2e3a4f] dark:bg-[#131d2d] md:min-h-[88px] md:px-1 md:pb-2 md:pt-3"
              :class="{ 'hidden md:grid': index >= 5 }"
            >
              <img
                :src="service.logo"
                alt=""
                class="block h-8 w-8 object-contain md:h-[38px] md:w-[38px]"
              />
              <span
                class="mt-[7px] w-full overflow-hidden text-ellipsis whitespace-nowrap text-center text-[10px] font-bold leading-[1.2] text-[#172033] dark:text-[#e9edf5]"
                >{{ service.name }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-[72px]" aria-labelledby="solutions-catalog-title">
      <div class="mx-auto w-full max-w-[1248px] px-4 sm:px-6">
        <div
          class="rounded-xl border border-[#e6eaf0] bg-white p-2.5 shadow-[0_7px_22px_rgb(26_43_72_/_4%)] dark:border-[#2e3a4f] dark:bg-[#131d2d] sm:p-3"
        >
          <div
            class="flex gap-2 overflow-x-auto pb-2.5 [scrollbar-width:thin]"
            role="group"
            :aria-label="copy.filterAriaLabel"
          >
            <button
              v-for="category in solutionCategories"
              :key="category.value"
              type="button"
              class="min-h-[38px] shrink-0 rounded-lg border px-3.5 text-[13px] font-bold leading-none transition-colors duration-150 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px"
              :class="
                activeCategory === category.value
                  ? 'border-[#bfd6ff] bg-[#e7f0ff] text-[#1769f9] shadow-sm dark:border-[#2a5eae] dark:bg-[#15284d] dark:text-[#8fbcff]'
                  : 'border-[#e4e9f0] bg-white text-[#3d4858] hover:border-[#b9c9e7] dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#e9edf5] dark:hover:border-[#52627f]'
              "
              :aria-pressed="activeCategory === category.value"
              @click="selectCategory(category.value)"
            >
              {{ category.label }}
            </button>
          </div>

          <label
            class="flex min-h-11 items-center gap-2.5 rounded-lg border border-[#e4e9f0] px-[13px] text-[#697688] focus-within:outline focus-within:outline-3 focus-within:outline-offset-4 focus-within:outline-[#1769f9]/30 dark:border-[#3a4760] dark:bg-[#131d2d] dark:text-[#e9edf5]"
          >
            <span class="sr-only">{{ copy.searchDirectory }}</span>
            <ElIcon><Search /></ElIcon>
            <input
              v-model="searchQuery"
              type="search"
              :placeholder="copy.searchPlaceholder"
              :aria-label="copy.searchPlaceholder"
              autocomplete="off"
              class="min-w-0 w-full border-0 bg-transparent text-sm text-[#172033] outline-none placeholder:text-[#8490a0] dark:text-[#e9edf5] dark:placeholder:text-[#9eabbc]"
              @change="trackSearch"
            />
          </label>
        </div>

        <p class="sr-only" aria-live="polite">{{ resultSummary }}</p>

        <div
          class="mb-4 mt-[26px] flex items-start justify-between gap-5 md:mt-[30px] md:items-end"
        >
          <div>
            <h2
              id="solutions-catalog-title"
              class="!mb-0 !mt-0 !border-0 !pt-0 text-[22px] font-[780] leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-2xl"
              >{{ copy.exploreSolutions }}</h2
            >
            <p class="!mb-0 !mt-[7px] text-sm text-[#5b6473] dark:text-[#b1bdcc]"
              >{{ copy.catalogDescription }}</p
            >
          </div>
          <span class="shrink-0 text-[13px] text-[#6a7686] dark:text-[#b1bdcc]" aria-hidden="true"
            >{{ filteredSolutions.length }} {{ copy.projects }}</span
          >
        </div>

        <div
          v-if="filteredSolutions.length"
          id="solutions-catalog"
          class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <article
            v-for="solution in filteredSolutions"
            :key="solution.slug"
            class="flex min-h-[306px] min-w-0 flex-col items-center rounded-xl border border-[#e6eaf0] bg-white px-[18px] pb-[18px] pt-[23px] text-center transition duration-150 hover:-translate-y-0.5 hover:border-[#c8d8ef] hover:shadow-[0_11px_28px_rgb(26_43_72_/_8%)] dark:border-[#2e3a4f] dark:bg-[#131d2d] dark:hover:border-[#52627f] md:min-h-[330px]"
          >
            <div class="grid h-16 w-16 place-items-center">
              <img
                :src="solution.logo"
                :alt="`${solution.name} logo`"
                loading="lazy"
                class="block max-h-[58px] max-w-16 object-contain"
              />
            </div>
            <h3
              class="!mb-2 !mt-[13px] !border-0 !pt-0 text-lg font-[750] leading-[1.2] text-[#172033] dark:text-[#e9edf5]"
              >{{ solution.name }}</h3
            >
            <span
              class="inline-flex min-h-[23px] items-center rounded-full px-[9px] text-[11px] font-semibold leading-none"
              :class="categoryClass(solution.category)"
              >{{ categoryLabel(solution.category) }}</span
            >
            <p
              class="!mb-[13px] !mt-3 line-clamp-2 min-h-[45px] text-sm leading-[1.6] text-[#4b5565] dark:text-[#b1bdcc]"
              >{{ solution.description }}</p
            >
            <ul
              class="!mb-0 !mt-auto flex min-h-6 !list-none flex-wrap justify-center gap-1.5 !p-0"
              :aria-label="`${solution.name} local stack`"
            >
              <li
                class="!mt-0 rounded-[5px] bg-[#f3f5f7] px-[7px] py-1.5 text-[11px] leading-none text-[#5a6471] dark:bg-[#253146] dark:text-[#c4cfdd]"
                v-for="service in solution.stack"
                :key="service"
                >{{ service }}</li
              >
            </ul>
            <a
              :href="`${routePrefix}/solutions/${solution.slug}`"
              class="mt-4 inline-flex min-h-8 items-center rounded-md px-2 text-xs font-bold text-[#1769f9] no-underline transition-colors hover:bg-[#eef5ff] hover:text-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 dark:text-[#8fbcff] dark:hover:bg-[#15284d] dark:hover:text-[#b8d4ff]"
              data-analytics-event="solution_detail_click"
              data-analytics-surface="solutions-catalog"
              >{{ copy.viewSolution }}</a
            >
          </article>
        </div>

        <div
          v-else
          id="solutions-catalog"
          class="rounded-xl border border-dashed border-[#cbd5e1] px-6 py-12 text-center dark:border-[#52627f]"
          role="status"
        >
          <h3
            class="!mb-0 !mt-0 !border-0 !pt-0 text-lg font-bold text-[#172033] dark:text-[#e9edf5]"
            >{{ copy.noResultsTitle }}</h3
          >
          <p class="!mb-[18px] !mt-2 text-[#5b6473] dark:text-[#b1bdcc]"
            >{{ copy.noResultsDescription }}</p
          >
          <button
            type="button"
            class="min-h-[38px] rounded-lg bg-[#1769f9] px-[13px] text-[13px] font-bold text-white transition-colors hover:bg-[#0d5be4] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-[#1769f9]/30 active:translate-y-px"
            @click="resetDiscovery"
            >{{ copy.showAll }}</button
          >
        </div>
      </div>
    </section>

    <section class="pb-6" aria-labelledby="solutions-help-title">
      <div class="mx-auto w-full max-w-[1248px] px-4 sm:px-6">
        <div
          class="rounded-xl border border-[#e4edf9] bg-[#f8fbff] p-5 dark:border-[#283753] dark:bg-[#111a2a] sm:p-7"
        >
          <h2
            id="solutions-help-title"
            class="!mb-0 !mt-0 !border-0 !pt-0 text-[22px] font-[780] leading-[1.2] text-[#172033] dark:text-[#e9edf5] md:text-2xl"
            >{{ copy.howFlyEnvHelps }}</h2
          >
          <ol
            class="!mb-0 !mt-[22px] grid !list-none grid-cols-1 gap-y-[22px] !p-0 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-0"
          >
            <li
              class="!mt-0 grid min-w-0 grid-cols-[48px_minmax(0,1fr)] items-center gap-3 !p-0"
              v-for="(step, index) in helpSteps"
              :key="step.title"
              :class="helpStepClasses[index]"
            >
              <span
                class="grid h-12 w-12 place-items-center rounded-full border border-[#dce7f7] bg-white text-[22px] text-[#1769f9] dark:border-[#3a4760] dark:bg-[#131d2d]"
              >
                <ElIcon><component :is="step.icon" /></ElIcon>
              </span>
              <div>
                <h3
                  class="!mb-0 !mt-0 !border-0 !pt-0 text-[13px] font-[750] leading-[1.25] text-[#172033] dark:text-[#e9edf5]"
                  >{{ step.title }}</h3
                >
                <p
                  class="!mb-0 !mt-[5px] text-xs leading-[1.45] text-[#5b6473] dark:text-[#b1bdcc]"
                  >{{ step.description }}</p
                >
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>

    <section class="pb-[72px]" aria-labelledby="solutions-cta-title">
      <div class="mx-auto w-full max-w-[1248px] px-4 sm:px-6">
        <div
          class="grid gap-[22px] rounded-xl bg-gradient-to-r from-[#1769f9] to-[#3346be] p-5 text-white md:grid-cols-[auto_minmax(0,1fr)] md:p-7 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8"
        >
          <div
            class="grid h-16 w-16 place-items-center rounded-[10px] border border-white/70 bg-white text-4xl text-[#1769f9] md:h-[78px] md:w-[78px]"
          >
            <img src="/assets/rocket.svg" alt="" class="h-9 w-9 md:h-10 md:w-10" />
          </div>
          <div>
            <h2
              id="solutions-cta-title"
              class="!mb-0 !mt-0 !border-0 !pt-0 text-[22px] font-[780] leading-[1.2] text-white md:text-2xl"
              >{{ copy.readyTitle }}</h2
            >
            <p class="!mb-0 !mt-[9px] text-sm leading-[1.6] text-[#e5efff]"
              >{{ copy.readyDescription }}</p
            >
          </div>
          <div class="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center lg:flex-nowrap">
            <a
              :href="downloadHref"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white bg-white px-[17px] text-sm font-bold text-[#165ce0] no-underline transition-colors duration-150 hover:bg-[#eef5ff] hover:text-[#104fc8] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white/70 active:translate-y-px"
              data-analytics-event="download_click"
              data-analytics-surface="solutions-final-cta"
            >
              <ElIcon><Download /></ElIcon>
              {{ copy.downloadFlyEnv }}
            </a>
            <a
              :href="guideHref"
              class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-white/75 px-[17px] text-sm font-bold !text-white no-underline transition-colors duration-150 hover:border-white hover:bg-white/10 hover:!text-white focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-4 focus-visible:outline-white/70 active:translate-y-px"
              data-analytics-event="guide_click"
              data-analytics-surface="solutions-final-cta"
            >
              {{ copy.viewDocumentation }}
              <ElIcon><ArrowRight /></ElIcon>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { computed, ref } from 'vue'
  import {
    ArrowRight,
    Download,
    Promotion,
    Search,
    Setting,
    VideoPlay,
    View
  } from '@element-plus/icons-vue'
  import { ElIcon } from 'element-plus'
  import { solutions } from '../../data/solutions'
  import type { SolutionCategory } from '../../data/solutions'
  import {
    solutionCategoryLabelsByLocale,
    solutionContentByLocale
  } from '../../data/solution-locales'
  import { trackEvent } from '../../utils/analytics'

  type FilterValue = 'all' | SolutionCategory

  const props = withDefaults(
    defineProps<{
      locale?: 'en' | 'zh' | 'id'
    }>(),
    { locale: 'en' }
  )

  const copyByLocale = {
    en: {
      badge: 'Solutions', heroTitle: 'Run Your Projects', heroTitleSecondLine: 'Locally with FlyEnv',
      heroDescription: 'Explore frameworks, CMS platforms, e-commerce apps, ERP systems, CRM tools, and developer tools. FlyEnv manages the local runtimes, databases, and services they need on Windows, macOS, and Linux.',
      browseSolutions: 'Browse Solutions', downloadFlyEnv: 'Download FlyEnv', filterAriaLabel: 'Filter solutions by category', searchDirectory: 'Search the project directory', searchPlaceholder: 'Search projects...', exploreSolutions: 'Explore Solutions', catalogDescription: 'Projects and the local runtimes, databases, and services they typically need.', projects: 'projects', viewSolution: 'View solution', noResultsTitle: 'No matching solutions found.', noResultsDescription: 'Try another project name or category.', showAll: 'Show all solutions', howFlyEnvHelps: 'How FlyEnv Helps', readyTitle: 'Ready to run your next project?', readyDescription: 'Set up the runtimes, databases, and services your project needs with FlyEnv.', viewDocumentation: 'View Documentation', all: 'All', result: 'solutions shown', resultOne: 'solution shown'
    },
    zh: {
      badge: '解决方案', heroTitle: '用 FlyEnv', heroTitleSecondLine: '本地运行你的项目',
      heroDescription: '浏览开发框架、CMS、电商应用、ERP、CRM 和开发工具。FlyEnv 可在 Windows、macOS 和 Linux 上管理它们所需的本地运行时、数据库与服务。',
      browseSolutions: '浏览解决方案', downloadFlyEnv: '下载 FlyEnv', filterAriaLabel: '按分类筛选解决方案', searchDirectory: '搜索项目目录', searchPlaceholder: '搜索项目...', exploreSolutions: '浏览解决方案', catalogDescription: '了解项目通常需要的本地运行时、数据库与服务。', projects: '个项目', viewSolution: '查看方案', noResultsTitle: '没有找到匹配的解决方案。', noResultsDescription: '请尝试其他项目名称或分类。', showAll: '显示全部方案', howFlyEnvHelps: 'FlyEnv 如何提供帮助', readyTitle: '准备好运行下一个项目了吗？', readyDescription: '使用 FlyEnv 配置项目所需的运行时、数据库与服务。', viewDocumentation: '查看文档', all: '全部', result: '个方案已显示', resultOne: '个方案已显示'
    },
    id: {
      badge: 'Solusi', heroTitle: 'Jalankan Proyek Anda', heroTitleSecondLine: 'Secara Lokal dengan FlyEnv',
      heroDescription: 'Telusuri framework, CMS, aplikasi e-commerce, ERP, CRM, dan alat developer. FlyEnv mengelola runtime, database, dan layanan lokal yang mereka perlukan di Windows, macOS, serta Linux.',
      browseSolutions: 'Jelajahi Solusi', downloadFlyEnv: 'Unduh FlyEnv', filterAriaLabel: 'Filter solusi menurut kategori', searchDirectory: 'Cari direktori proyek', searchPlaceholder: 'Cari proyek...', exploreSolutions: 'Jelajahi Solusi', catalogDescription: 'Proyek serta runtime, database, dan layanan lokal yang biasanya dibutuhkan.', projects: 'proyek', viewSolution: 'Lihat solusi', noResultsTitle: 'Tidak ada solusi yang cocok.', noResultsDescription: 'Coba nama proyek atau kategori lain.', showAll: 'Tampilkan semua solusi', howFlyEnvHelps: 'Cara FlyEnv Membantu', readyTitle: 'Siap menjalankan proyek berikutnya?', readyDescription: 'Siapkan runtime, database, dan layanan yang dibutuhkan proyek Anda dengan FlyEnv.', viewDocumentation: 'Lihat Dokumentasi', all: 'Semua', result: 'solusi ditampilkan', resultOne: 'solusi ditampilkan'
    }
  } as const

  const copy = computed(() => copyByLocale[props.locale])
  const routePrefix = computed(() => (props.locale === 'en' ? '' : `/${props.locale}`))
  const downloadHref = computed(() => `${routePrefix.value}/download`)
  const guideHref = computed(() => `${routePrefix.value}/guide/getting-started`)
  const localizedSolutions = computed(() =>
    solutions.map((solution) => ({
      ...solution,
      description: solutionContentByLocale[props.locale][solution.slug]?.description ?? solution.description
    }))
  )
  const solutionCategories = computed(() => [
    { value: 'all', label: copy.value.all },
    ...Object.entries(solutionCategoryLabelsByLocale[props.locale]).map(([value, label]) => ({
      value: value as SolutionCategory,
      label
    }))
  ])

  const activeCategory = ref<FilterValue>('all')
  const searchQuery = ref('')

  const heroProjects = [
    { name: 'WordPress', logo: '/assets/demo-logos/wordpress.svg' },
    { name: 'Laravel', logo: '/assets/demo-logos/laravel.svg' },
    { name: 'Django', logo: '/assets/demo-logos/django.svg' },
    { name: 'ERPNext', logo: '/assets/demo-logos/erpnext.svg' },
    { name: 'Gitea', logo: '/assets/demo-logos/gitea.svg' }
  ]

  const heroServices = [
    { name: 'PHP', logo: '/assets/demo-logos/php.svg' },
    { name: 'Python', logo: '/assets/demo-logos/python.svg' },
    { name: 'Node.js', logo: '/assets/demo-logos/nodedotjs.svg' },
    { name: 'MySQL', logo: '/assets/demo-logos/mysql.svg' },
    { name: 'PostgreSQL', logo: '/assets/demo-logos/postgresql.svg' },
    { name: 'Redis', logo: '/assets/demo-logos/redis.svg' },
    { name: 'Nginx', logo: '/assets/demo-logos/nginx.svg' }
  ]

  const helpStepsByLocale = {
    en: [
      { title: 'Choose a project', description: 'See the runtimes and services it needs.', icon: View },
      { title: 'Set up the environment', description: 'Manage runtimes, databases, and web servers with FlyEnv.', icon: Setting },
      { title: 'Start the stack', description: 'Run the required services together.', icon: VideoPlay },
      { title: 'Develop locally', description: 'Open the project with a local domain and HTTPS.', icon: Promotion }
    ],
    zh: [
      { title: '选择项目', description: '查看项目所需的运行时和服务。', icon: View },
      { title: '配置本地环境', description: '使用 FlyEnv 管理运行时、数据库和 Web 服务器。', icon: Setting },
      { title: '启动技术栈', description: '一起运行项目所需的服务。', icon: VideoPlay },
      { title: '开始本地开发', description: '通过本地域名和 HTTPS 打开项目。', icon: Promotion }
    ],
    id: [
      { title: 'Pilih proyek', description: 'Lihat runtime dan layanan yang dibutuhkan.', icon: View },
      { title: 'Siapkan lingkungan lokal', description: 'Kelola runtime, database, dan server web dengan FlyEnv.', icon: Setting },
      { title: 'Jalankan stack', description: 'Jalankan layanan yang diperlukan bersama-sama.', icon: VideoPlay },
      { title: 'Mulai mengembangkan secara lokal', description: 'Buka proyek dengan domain lokal dan HTTPS.', icon: Promotion }
    ]
  } as const

  const helpSteps = computed(() => helpStepsByLocale[props.locale])

  const categoryClass = (category: SolutionCategory) => {
    const classes: Record<SolutionCategory, string> = {
      frameworks: 'bg-[#e8f8ef] text-[#218256] dark:bg-[#153d2d] dark:text-[#8ad5ad]',
      cms: 'bg-[#edf4ff] text-[#286ed6] dark:bg-[#152c52] dark:text-[#91bdff]',
      ecommerce: 'bg-[#fff1ea] text-[#c1542a] dark:bg-[#49261d] dark:text-[#ffb191]',
      erp: 'bg-[#f2edff] text-[#6945bd] dark:bg-[#312450] dark:text-[#c4b0ff]',
      crm: 'bg-[#eef8fa] text-[#237b8b] dark:bg-[#173944] dark:text-[#8ed9e8]',
      'developer-tools': 'bg-[#f1f3f6] text-[#566274] dark:bg-[#253146] dark:text-[#c4cfdd]',
      'data-analytics': 'bg-[#fff7df] text-[#9b6b12] dark:bg-[#4d3a12] dark:text-[#f2cf70]'
    }

    return classes[category]
  }

  const helpStepClasses = [
    'md:pr-5 lg:pr-5',
    'md:pl-5 lg:pl-5 lg:pr-5',
    'md:pr-5 lg:pl-5 lg:pr-5',
    'md:pl-5 lg:pl-5'
  ]

  const categoryLabel = (category: SolutionCategory) => solutionCategoryLabelsByLocale[props.locale][category]

  const filteredSolutions = computed(() => {
    const query = searchQuery.value.trim().toLowerCase()

    return localizedSolutions.value.filter((solution) => {
      const categoryMatches =
        activeCategory.value === 'all' || solution.category === activeCategory.value
      const searchable = [
        solution.name,
        solution.description,
        categoryLabel(solution.category),
        ...solution.stack
      ]
        .join(' ')
        .toLowerCase()

      return categoryMatches && (!query || searchable.includes(query))
    })
  })

  const resultSummary = computed(() => {
    const total = filteredSolutions.value.length
    return `${total} ${total === 1 ? copy.value.resultOne : copy.value.result}`
  })

  const selectCategory = (category: FilterValue) => {
    activeCategory.value = category
    trackEvent('solutions_filter_change', { category })
  }

  const resetDiscovery = () => {
    activeCategory.value = 'all'
    searchQuery.value = ''
  }

  const trackSearch = () => {
    trackEvent('solutions_search', { query_length: searchQuery.value.trim().length })
  }
</script>
