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
            <li class="!m-0"
              ><a href="/" class="!text-[#1769f9] no-underline hover:underline">FlyEnv</a></li
            >
            <li aria-hidden="true" class="!m-0 text-[#a9b9cc]">/</li>
            <li class="!m-0"
              ><a :href="localizedHref('/solutions')" class="!text-[#1769f9] no-underline hover:underline"
                >{{ copy.breadcrumbSolutions }}</a
              ></li
            >
            <li aria-hidden="true" class="!m-0 text-[#a9b9cc]">/</li>
            <li aria-current="page" class="!m-0">Laravel</li>
          </ol>
        </nav>

        <div
          class="mt-7 grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(310px,360px)] lg:gap-12"
        >
          <div class="min-w-0">
            <div class="flex items-start gap-4 sm:gap-5">
              <div
                class="grid h-[68px] w-[68px] shrink-0 place-items-center rounded-xl border border-[#dce7f7] bg-white p-3 shadow-[0_10px_26px_rgb(37_74_125_/_8%)] dark:border-[#34445e] dark:bg-[#151f31]"
              >
                <img
                  src="https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg"
                  alt="Laravel logo"
                  class="h-11 w-11 object-contain"
                />
              </div>
              <div class="min-w-0">
                <p
                  class="!m-0 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#1769f9] dark:text-[#8fbcff]"
                >
                  {{ copy.eyebrow }}
                </p>
                <h1
                  class="!m-0 !mt-1 !border-0 !p-0 text-3xl font-black leading-[1.08] tracking-[-0.03em] text-[#14213a] dark:text-white sm:text-4xl lg:text-[46px]"
                >
                  {{ copy.heroTitle }}
                </h1>
              </div>
            </div>
            <p
              class="!mb-0 !mt-5 max-w-[650px] text-base leading-7 text-[#5c687b] dark:text-[#b1bdcc]"
            >
              {{ copy.heroDescription }}
            </p>
            <div class="mt-6 flex flex-wrap gap-3">
              <a
                :href="localizedHref('/download')"
                class="inline-flex min-h-11 items-center justify-center rounded-lg bg-[#1769f9] px-4 text-sm font-bold !text-white no-underline shadow-[0_8px_18px_rgb(23_105_249_/_20%)] transition hover:-translate-y-px hover:bg-[#0d5be4] active:translate-y-px"
                data-analytics-event="download_click"
                data-analytics-surface="laravel-solution-hero"
              >
                {{ copy.download }} <SvgIcon name="arrowDown" class="ml-2 h-4 w-4" />
              </a>
              <a
                :href="localizedHref('/guide/run-laravel-use-flyenv')"
                class="inline-flex min-h-11 items-center justify-center rounded-lg border border-[#cfd9e7] bg-white px-4 text-sm font-bold !text-[#26344a] no-underline transition hover:border-[#1769f9] hover:!text-[#1769f9] dark:border-[#3a4962] dark:bg-[#151f31] dark:!text-[#e9edf5]"
              >
                {{ copy.guide }} <SvgIcon name="arrowUpRight" class="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <aside
            class="rounded-xl border border-[#c9dcf3] bg-white p-5 shadow-[0_14px_34px_rgb(37_74_125_/_10%)] dark:border-[#34445e] dark:bg-[#151f31]"
            aria-labelledby="hero-stack-title"
          >
            <h2
              id="hero-stack-title"
              class="!m-0 !border-0 !p-0 text-base font-extrabold text-[#26344a] dark:text-[#e9edf5]"
            >
              {{ copy.heroStackTitle }}
            </h2>
            <p class="!mb-0 !mt-1.5 text-sm leading-6 text-[#758197] dark:text-[#aebbd0]">
              {{ copy.heroStackDescription }}
            </p>
            <ul class="!mb-0 !mt-3 flex !list-none flex-wrap gap-1.5 !p-0">
              <li
                v-for="item in heroStack"
                :key="item.key"
                class="!m-0 rounded-md bg-[#eaf3ff] px-2.5 py-1 text-xs font-bold leading-5 text-[#1769f9] dark:bg-[#1a3158] dark:text-[#9bc5ff]"
              >
                <a
                  v-if="item.href"
                  :href="item.href"
                  class="!text-[#1769f9] no-underline hover:underline dark:!text-[#9bc5ff]"
                  >{{ item.label }}</a
                >
                <template v-else-if="item.links">
                  <template v-for="(part, index) in item.links" :key="`${part.label}-${index}`">
                    <a
                      v-if="part.href"
                      :href="part.href"
                      class="!text-[#1769f9] no-underline hover:underline dark:!text-[#9bc5ff]"
                      >{{ part.label }}</a
                    >
                    <span v-else>{{ part.label }}</span>
                  </template>
                </template>
                <span v-else>{{ item.label }}</span>
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <section class="px-4 py-9 sm:px-6 sm:py-11" aria-labelledby="requirements-title">
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="requirements-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.requirementsTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.requirementsDescription }}
        </p>

        <div
          class="mt-5 hidden overflow-hidden rounded-lg border border-[#dce7f2] md:block dark:border-[#34445e]"
        >
          <div
            class="grid grid-cols-[1.05fr_1fr_1.12fr] bg-[#edf5ff] text-sm font-extrabold text-[#26344a] dark:bg-[#182a49] dark:text-[#e9edf5]"
          >
            <div class="px-4 py-2.5">{{ copy.requirementHeaders[0] }}</div>
            <div class="px-4 py-2.5">{{ copy.requirementHeaders[1] }}</div>
            <div class="px-4 py-2.5">{{ copy.requirementHeaders[2] }}</div>
          </div>
          <div
            v-for="item in requirements"
            :key="item.title"
              class="grid grid-cols-[1.05fr_1fr_1.12fr] border-t border-[#e6edf5] text-[15px] leading-6 dark:border-[#2b3b55]"
            >
              <div
              class="flex items-center gap-2 px-4 py-3 font-semibold text-[#26344a] dark:text-[#e9edf5]"
              ><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div
            >
            <div class="px-4 py-3 font-medium text-[#526176] dark:text-[#b1bdcc]">
              <template v-for="(part, index) in item.serviceParts" :key="`${part.label}-${index}`">
                <a
                  v-if="part.href"
                  :href="part.href"
                  class="!text-[#526176] underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9] dark:!text-[#b1bdcc] dark:hover:!text-[#9bc5ff]"
                  >{{ part.label }}</a
                >
                <span v-else>{{ part.label }}</span>
              </template>
            </div>
            <div class="flex items-center gap-2 px-4 py-3 font-semibold text-[#40506a] dark:text-[#c4d2e5]"
              ><SvgIcon name="check" class="h-3.5 w-3.5 shrink-0 text-[#1aa86b]" />{{ item.support }}</div
            >
          </div>
        </div>
        <div
          class="mt-5 divide-y divide-[#e6edf5] overflow-hidden rounded-lg border border-[#dce7f2] md:hidden dark:divide-[#2b3b55] dark:border-[#34445e]"
        >
          <article v-for="item in requirements" :key="item.title" class="p-4">
            <div
              class="flex items-center gap-2 text-sm font-bold text-[#26344a] dark:text-[#e9edf5]"
              ><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div
            >
            <p class="!mb-0 !mt-2 text-sm leading-6 text-[#5d6a7d] dark:text-[#b1bdcc]">
              <template v-for="(part, index) in item.serviceParts" :key="`${part.label}-${index}`">
                <a
                  v-if="part.href"
                  :href="part.href"
                  class="!text-[#5d6a7d] underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9] dark:!text-[#b1bdcc] dark:hover:!text-[#9bc5ff]"
                  >{{ part.label }}</a
                >
                <span v-else>{{ part.label }}</span>
              </template>
            </p>
            <p
              class="!mb-0 !mt-1 flex items-center gap-2 text-sm leading-6 text-[#5d6a7d] dark:text-[#b1bdcc]"
              ><SvgIcon name="check" class="h-3.5 w-3.5 shrink-0 text-[#1aa86b]" />{{ item.support }}</p
            >
          </article>
        </div>
      </div>
    </section>

    <section
      class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]"
      aria-labelledby="stack-title"
    >
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="stack-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.stackTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.stackDescription }}
        </p>

        <div class="mt-6 grid gap-4 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div
            class="relative overflow-hidden rounded-lg border border-[#dce7f2] bg-white shadow-[0_8px_24px_rgb(37_74_125_/_5%)] dark:border-[#34445e] dark:bg-[#151f31]"
          >
            <div class="relative hidden min-h-[360px] lg:block">
              <div class="absolute left-1/2 top-0 h-[360px] w-[780px] max-w-full -translate-x-1/2">
              <svg
                class="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 780 360"
                fill="none"
                preserveAspectRatio="xMinYMin meet"
                aria-hidden="true"
              >
                <defs>
                  <marker id="stack-arrow" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
                    <path d="m0 0 6 3.5L0 7" fill="none" stroke="#8192aa" stroke-width="1.2" />
                  </marker>
                </defs>
                <path d="M124 104h56" stroke="#8192aa" stroke-width="1.2" marker-end="url(#stack-arrow)" />
                <path d="M284 104h56" stroke="#8192aa" stroke-width="1.2" marker-end="url(#stack-arrow)" />
                <path d="M466 80h42V39h32" stroke="#8192aa" stroke-width="1.2" marker-end="url(#stack-arrow)" />
                <path d="M466 146h42v-23h32" stroke="#8192aa" stroke-width="1.2" marker-end="url(#stack-arrow)" />
                <path d="M403 170v50" stroke="#8192aa" stroke-width="1.2" stroke-dasharray="4 4" marker-end="url(#stack-arrow)" />
              </svg>

              <article
                class="absolute left-5 top-[44px] flex h-[120px] w-[104px] flex-col items-center justify-center rounded-lg border border-[#dce7f2] bg-[#f6faff] px-2 text-center dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <SvgIcon name="globe" class="h-8 w-8 text-[#1769f9]" />
                <h3 class="!m-0 !mt-1 !border-0 !p-0 !text-[12px] !leading-5 font-extrabold"><a :href="featureLinks.https" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]" v-html="copy.diagram.domain"></a></h3>
                <p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]" v-html="`${copy.diagram.localDomain}<br />${copy.diagram.withHttps}`"></p>
              </article>

              <article
                class="absolute left-[180px] top-[44px] flex h-[120px] w-[104px] flex-col items-center justify-center rounded-lg border border-[#dce7f2] bg-[#f6faff] px-2 text-center dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <img src="/assets/demo-logos/nginx.svg" alt="Nginx" class="h-8 w-8 object-contain" />
                <h3 class="!m-0 !mt-1 !border-0 !p-0 !text-[12px] !leading-5 font-extrabold"><a :href="featureLinks.nginx" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">Nginx</a></h3>
                <p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]" v-html="`${copy.diagram.webServer}<br />${copy.diagram.port}`"></p>
              </article>

              <article
                class="absolute left-[340px] top-[38px] flex h-[132px] w-[126px] flex-col items-center justify-center rounded-lg border-2 border-[#ff6b61]/45 bg-[#fffdfd] px-2 text-center dark:border-[#ff8078]/50 dark:bg-[#211b25]"
              >
                <img src="/assets/demo-logos/laravel.svg" alt="Laravel" class="h-9 w-9 object-contain" />
                <h3 class="!m-0 !mt-1 !border-0 !p-0 !text-[12px] !leading-5 font-extrabold" v-html="copy.diagram.application"></h3>
                <p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]"><a :href="featureLinks.php" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]" v-html="copy.diagram.php"></a></p>
              </article>

              <article
                class="absolute left-[540px] top-4 flex h-[70px] w-[210px] items-center gap-3 rounded-lg border border-[#dce7f2] bg-[#f9fcff] px-4 dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <img src="/assets/demo-logos/mysql.svg" alt="MySQL" class="h-8 w-8 object-contain" />
                <div><h3 class="!m-0 !border-0 !p-0 !text-[12px] !leading-5 font-extrabold"><a :href="featureLinks.mysql" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">MySQL 8.4</a></h3><p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]">{{ copy.diagram.database }}</p></div>
              </article>

              <article
                class="absolute left-[540px] top-[88px] flex h-[70px] w-[210px] items-center gap-3 rounded-lg border border-[#dce7f2] bg-[#f9fcff] px-4 dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <img src="/assets/demo-logos/redis.svg" alt="Redis" class="h-8 w-8 object-contain" />
                <div><h3 class="!m-0 !border-0 !p-0 !text-[12px] !leading-5 font-extrabold"><a :href="featureLinks.redis" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">Redis 7</a></h3><p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]" v-html="copy.diagram.cacheQueues"></p></div>
              </article>

              <p class="absolute left-[340px] top-[230px] !m-0 text-xs font-semibold text-[#8b99ab]">{{ copy.diagram.additionalTools }}</p>
              <article
                class="absolute left-[330px] top-[258px] flex h-[64px] w-[160px] items-center gap-2 rounded-lg border border-[#dce7f2] bg-[#f9fcff] px-3 dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <img src="/assets/demo-logos/nodedotjs.svg" alt="Node.js" class="h-7 w-7 object-contain" />
                <div><h3 class="!m-0 !border-0 !p-0 !text-[11px] !leading-5 font-extrabold"><a :href="featureLinks.nodejs" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">Node.js / Vite</a></h3><p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]">{{ copy.diagram.frontendAssets }}</p></div>
              </article>
              <article
                class="absolute left-[510px] top-[258px] flex h-[64px] w-[220px] items-center gap-2 rounded-lg border border-[#dce7f2] bg-[#f9fcff] px-3 dark:border-[#34445e] dark:bg-[#182a49]"
              >
                <SvgIcon name="clock" class="h-7 w-7 shrink-0 text-[#1769f9]" />
                <div><h3 class="!m-0 !border-0 !p-0 !text-[11px] !leading-5 font-extrabold"><a :href="featureLinks.cron" class="!text-inherit underline decoration-[#b9c9dd] underline-offset-2 hover:!text-[#1769f9]">Cron / Scheduler</a></h3><p class="!mb-0 !mt-0.5 !text-[10px] !leading-4 text-[#68758a] dark:text-[#aebbd0]">{{ copy.diagram.taskScheduling }}</p></div>
              </article>
              </div>
            </div>

            <div class="grid gap-3 p-4 lg:hidden">
              <div class="grid grid-cols-3 gap-2">
                <article v-for="item in primaryStack" :key="item.title" class="flex min-h-[92px] flex-col items-center justify-center rounded-lg border border-[#dce7f2] bg-[#f6faff] p-2 text-center dark:border-[#34445e] dark:bg-[#182a49]">
                  <img v-if="item.logo" :src="item.logo" :alt="item.title" class="h-7 w-7 object-contain" />
                  <SvgIcon v-else :name="item.icon" class="h-7 w-7 text-[#1769f9]" />
                  <h3 class="!m-0 !mt-1 !border-0 !p-0 !text-[10px] !leading-4 font-extrabold"><a v-if="item.href" :href="item.href" class="!text-inherit no-underline hover:!text-[#1769f9]">{{ item.title }}</a><span v-else>{{ item.title }}</span></h3>
                </article>
              </div>
              <div class="grid grid-cols-2 gap-2">
                <article v-for="item in supportingServices" :key="item.title" class="flex items-center gap-2 rounded-lg border border-[#dce7f2] bg-[#f9fcff] p-3 dark:border-[#34445e] dark:bg-[#182a49]">
                  <img v-if="item.logo" :src="item.logo" :alt="item.title" class="h-6 w-6 object-contain" />
                  <SvgIcon v-else :name="item.icon" class="h-6 w-6 shrink-0 text-[#1769f9]" />
                  <span class="text-[10px] font-extrabold"><a v-if="item.href" :href="item.href" class="!text-inherit no-underline hover:!text-[#1769f9]">{{ item.title }}</a><span v-else>{{ item.title }}</span></span>
                </article>
              </div>
            </div>
          </div>

          <div class="grid gap-3">
            <article v-for="item in stackOutcomes" :key="item.title" class="flex gap-3 rounded-lg border border-[#dce7f2] bg-white px-3 py-3 dark:border-[#34445e] dark:bg-[#151f31]">
              <span class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#eaf3ff] text-[#1769f9] dark:bg-[#1a3158]"><SvgIcon :name="item.icon" class="h-4 w-4" /></span>
              <div><h3 class="!m-0 !border-0 !p-0 !text-sm !leading-6 font-extrabold">{{ item.title }}</h3><p class="!mb-0 !mt-0.5 !text-xs !leading-5 text-[#68758a] dark:text-[#aebbd0]">{{ item.description }}</p></div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="px-4 py-9 sm:px-6 sm:py-11" aria-labelledby="workspace-title">
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="workspace-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.workspaceTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.workspaceDescription }}
        </p>
        <div class="mt-6 grid items-stretch gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
          <figure
            class="!m-0 flex h-full flex-col overflow-hidden rounded-xl border border-[#dce7f2] bg-[#f7faff] shadow-[0_12px_30px_rgb(37_74_125_/_8%)] dark:border-[#34445e] dark:bg-[#151f31]"
          >
            <img
              src="https://oss.macphpstudy.com/image/features/startup-groups-1.webp"
              alt="FlyEnv Startup Groups managing a Laravel project stack"
              class="block w-full flex-1 object-cover"
              loading="lazy"
            />
            <figcaption
              class="border-t border-[#e4ebf4] px-4 py-3 text-base leading-7 text-[#59677b] dark:border-[#34445e] dark:text-[#b7c4d5]"
            >
              {{ copy.workspaceCaption }}
            </figcaption>
          </figure>
          <div class="grid h-full grid-rows-4 gap-3">
            <article
              v-for="item in proofPoints"
              :key="item.title"
              class="h-full rounded-xl border border-[#dce7f2] bg-white p-4 dark:border-[#34445e] dark:bg-[#151f31]"
            >
              <div
                class="flex items-center gap-2 text-base font-extrabold leading-6 text-[#26344a] dark:text-[#e9edf5]"
                ><SvgIcon :name="item.icon" class="h-4 w-4 shrink-0 text-[#1769f9]" />{{ item.title }}</div
              >
              <p class="!mb-0 !mt-1.5 text-sm leading-6 text-[#68758a] dark:text-[#aebbd0]">{{
                item.description
              }}</p>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section
      class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]"
      aria-labelledby="benefits-title"
    >
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="benefits-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.benefitsTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.benefitsDescription }}
        </p>
        <ul
          class="!mb-0 !mt-5 grid !list-none grid-cols-1 gap-3 !p-0 sm:grid-cols-2 lg:grid-cols-3"
        >
          <li
            v-for="item in benefits"
            :key="item.title"
            class="!m-0 rounded-xl border border-[#dce7f2] bg-white p-4 dark:border-[#34445e] dark:bg-[#151f31]"
            :class="item.emphasis ? 'border-[#b9d4f8] shadow-[0_12px_28px_rgb(37_74_125_/_10%)] ring-1 ring-[#e5f0ff] dark:border-[#416ea8] dark:ring-[#1d3d67]' : ''"
          >
            <div class="flex items-center gap-3"
              ><span
                class="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#eaf3ff] text-base text-[#1769f9]"
                ><SvgIcon :name="item.icon" class="h-4 w-4" /></span
              ><h3 class="!m-0 !border-0 !p-0 text-sm font-extrabold">{{ item.title }}</h3></div
            >
            <p class="!mb-0 !mt-2 text-sm leading-6 text-[#68758a] dark:text-[#aebbd0]">{{
              item.description
            }}</p>
            <p
              v-if="item.evidence"
              class="!mb-0 !mt-3 rounded-lg border-l-2 border-[#1769f9] bg-[#f2f7ff] px-3 py-2 text-sm font-bold leading-5 text-[#1769f9] dark:bg-[#172b50] dark:text-[#9bc5ff]"
            >
              {{ item.evidence }}
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section class="px-4 py-9 sm:px-6 sm:py-11" aria-labelledby="project-paths-title">
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="project-paths-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.projectPathsTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.projectPathsDescription }}
        </p>
        <div class="mt-5 grid gap-4 lg:grid-cols-2">
          <article
            v-for="path in projectPaths"
            :key="path.title"
            class="rounded-xl border border-[#dce7f2] bg-white p-5 shadow-sm dark:border-[#34445e] dark:bg-[#151f31]"
          >
            <div class="flex items-center gap-3"
              ><span
                class="grid h-10 w-10 place-items-center rounded-lg bg-[#eaf3ff] text-lg text-[#1769f9]"
                ><SvgIcon :name="path.icon" class="h-5 w-5" /></span
              ><h3 class="!m-0 !border-0 !p-0 text-base font-extrabold">{{ path.title }}</h3></div
            >
            <ol class="!mb-0 !mt-4 grid !list-none gap-2.5 !p-0">
              <li
                v-for="(step, index) in path.steps"
                :key="step"
                class="!m-0 flex items-start gap-3 text-sm leading-6 text-[#59677b] dark:text-[#b1bdcc]"
                ><span
                  class="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#eaf3ff] text-[10px] font-black text-[#1769f9]"
                  >{{ index + 1 }}</span
                ><span>{{ step }}</span></li
              >
            </ol>
          </article>
        </div>
        <div class="mt-5 text-center">
          <a
            :href="localizedHref('/guide/run-laravel-use-flyenv')"
            class="inline-flex items-center rounded-lg border border-[#1769f9] px-4 py-2 text-sm font-bold !text-[#1769f9] no-underline transition hover:bg-[#eef5ff] dark:hover:bg-[#172b50]"
          >
            {{ copy.setupGuide }} <SvgIcon name="arrowRight" class="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <section
      class="border-y border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]"
      aria-labelledby="comparison-title"
    >
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="comparison-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
        >
          {{ copy.comparisonTitle }}
        </h2>
        <p class="!mb-0 !mt-1.5 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
          {{ copy.comparisonDescription }}
        </p>
        <div
          class="mt-6 overflow-x-auto rounded-2xl border border-[#d5e3f2] bg-white shadow-[0_14px_34px_rgb(37_74_125_/_7%)] dark:border-[#34445e] dark:bg-[#151f31]"
        >
          <table
            class="!m-0 !table w-full min-w-[760px] table-fixed border-separate border-spacing-0 text-left text-sm"
          >
            <colgroup>
              <col class="w-[22%]" />
              <col class="w-[25%]" />
              <col class="w-[25%]" />
              <col class="w-[28%]" />
            </colgroup>
            <thead>
              <tr>
                  <th
                  scope="col"
                  class="rounded-tl-2xl border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]"
                >
                  {{ copy.comparisonHeaders[0] }}
                </th>
                <th
                  scope="col"
                  class="border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]"
                >
                  {{ copy.comparisonHeaders[1] }}
                </th>
                <th
                  scope="col"
                  class="border-0 !bg-[#edf5ff] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#52647d] dark:!bg-[#182a49] dark:text-[#cbd8eb]"
                >
                  {{ copy.comparisonHeaders[2] }}
                </th>
                <th
                  scope="col"
                  class="rounded-tr-2xl border-0 !bg-[#1769f9] px-5 py-4 text-xs font-black uppercase tracking-[0.08em] !text-white"
                >
                  {{ copy.comparisonHeaders[3] }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="group"
              >
                <th
                  scope="row"
                  class="border-t border-[#e1eaf4] px-5 py-4 text-sm font-extrabold leading-5 text-[#26344a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#e9edf5] dark:odd:bg-[#151f31] dark:even:bg-[#182236]"
                >
                  {{ row.feature }}
                </th>
                <td
                  class="border-t border-[#e1eaf4] px-5 py-4 text-sm leading-5 text-[#68758a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#b1bdcc] dark:odd:bg-[#151f31] dark:even:bg-[#182236]"
                >
                  {{ row.host }}
                </td>
                <td
                  class="border-t border-[#e1eaf4] px-5 py-4 text-sm leading-5 text-[#68758a] odd:bg-white even:bg-[#f8fbff] dark:border-[#2b3b55] dark:text-[#b1bdcc] dark:odd:bg-[#151f31] dark:even:bg-[#182236]"
                >
                  {{ row.container }}
                </td>
                <td
                  class="border-l border-t border-[#cfe2ff] bg-[#eef6ff] px-5 py-4 text-sm font-bold leading-5 text-[#1769f9] even:bg-[#e7f2ff] dark:border-[#2c568e] dark:bg-[#172b50] dark:text-[#9bc5ff] dark:even:bg-[#1b365e]"
                >
                  {{ row.flyenv }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section
      class="border-b border-[#dfe8f4] bg-white px-4 py-12 sm:px-6 sm:py-16 dark:border-[#26344b] dark:bg-[#0b1020]"
      aria-labelledby="faq-title"
    >
      <div class="mx-auto max-w-[1120px]">
        <header class="max-w-3xl text-left">
          <h2
            id="faq-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:!text-4xl"
          >
            {{ copy.faqTitle }}
          </h2>
          <p class="!mb-0 !mt-3 text-base leading-7 text-[#68758a] dark:text-[#aebbd0]">
            {{ copy.faqDescription }}
          </p>
        </header>
        <div class="mt-8 grid items-stretch gap-4 md:grid-cols-2">
          <article
            v-for="item in faqs"
            :key="item.question"
            class="h-full rounded-2xl border border-[#dce7f2] bg-white px-5 py-5 shadow-[0_10px_30px_rgb(37_74_125_/_6%)] dark:border-[#34445e] dark:bg-[#151f31]"
          >
            <h3
              class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-[#354153] dark:text-[#e9edf5]"
            >
              {{ item.question }}
            </h3>
            <p class="!mb-0 !mt-3 text-[15px] leading-7 text-[#68758a] dark:text-[#b1bdcc]">
              {{ item.answer }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="border-t-0 border-[#dfe8f4] bg-[#f5faff] px-4 py-9 sm:px-6 sm:py-11 dark:border-[#26344b] dark:bg-[#101827]"
      aria-labelledby="related-title"
    >
      <div class="mx-auto max-w-[1120px]">
        <h2
          id="related-title"
          class="!m-0 !border-0 !p-0 text-2xl font-black tracking-[-0.02em] text-[#172033] dark:text-white sm:text-3xl"
          >{{ copy.relatedTitle }}</h2
        >
        <div class="mt-4 grid gap-3 sm:grid-cols-3">
          <a
            v-for="solution in relatedSolutions"
            :key="solution.name"
            :href="solution.href"
            class="flex items-center gap-3 rounded-xl border border-[#dce7f2] bg-white px-4 py-3 no-underline transition hover:-translate-y-px hover:border-[#1769f9] dark:border-[#34445e] dark:bg-[#151f31]"
          >
            <img
              :src="solution.logo"
              :alt="`${solution.name} logo`"
              class="h-9 w-9 object-contain"
              loading="lazy"
            />
            <span class="min-w-0"
              ><span class="block text-sm font-extrabold !text-[#26344a] dark:!text-[#e9edf5]">{{
                solution.name
              }}</span
              ><span class="block text-xs text-[#68758a] dark:text-[#aebbd0]">{{
                solution.description
              }}</span></span
            >
            <SvgIcon name="arrowRight" class="ml-auto h-4 w-4 shrink-0 text-[#1769f9]" />
          </a>
        </div>
        <div
            class="mt-6 flex flex-col items-center justify-between gap-4 rounded-xl bg-[#1769f9] px-5 py-4 text-white sm:flex-row"
        >
          <div
            ><h2 class="!m-0 !border-0 !p-0 text-lg font-black text-white"
              >{{ copy.ctaTitle }}</h2
            ><p class="!mb-0 !mt-1 text-sm leading-6 text-blue-100"
              >{{ copy.ctaDescription }}</p
            ></div
          >
          <a
            :href="localizedHref('/download')"
            class="inline-flex shrink-0 items-center rounded-lg bg-white px-4 py-2.5 text-sm font-extrabold !text-[#1769f9] no-underline transition hover:bg-blue-50"
            >{{ copy.download }} <SvgIcon name="arrowDown" class="ml-2 h-4 w-4" /></a
          >
        </div>
        <div
          class="mt-5 flex flex-col items-center justify-between gap-2 border-t border-[#dce7f2] pt-4 text-sm text-[#68758a] sm:flex-row dark:border-[#34445e] dark:text-[#aebbd0]"
          ><span class="font-bold text-[#26344a] dark:text-[#e9edf5]"
            >{{ copy.haveQuestions }}</span
          ><div class="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
            ><a
              href="https://github.com/xpf0000/FlyEnv/issues"
              target="_blank"
              rel="noopener noreferrer"
              class="!text-[#1769f9] no-underline hover:underline"
              >GitHub Issues ↗</a
            ><a
              href="mailto:alexpengfeixu@gmail.com"
              class="!text-[#1769f9] no-underline hover:underline"
              >alexpengfeixu@gmail.com ↗</a
            ></div
          ></div
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  import { defineComponent, h } from 'vue'
  import { translateData, type LaravelSolutionLocale } from './laravel-solution-locales'

  const props = withDefaults(defineProps<{ locale?: LaravelSolutionLocale }>(), { locale: 'en' })
  const locale = props.locale
  const localizedHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`)

  const iconPaths: Record<string, string[]> = {
    runtime: ['M12 3v18M3 12h18M5.6 5.6l12.8 12.8M18.4 5.6 5.6 18.4'],
    dependencies: ['m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z', 'M12 3v9m8-4.5-8 4.5-8-4.5'],
    database: [
      'M5 5c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2Z',
      'M5 5v7c0 1.1 3.1 2 7 2s7-.9 7-2V5',
      'M5 12v7c0 1.1 3.1 2 7 2s7-.9 7-2v-7'
    ],
    cache: ['M4 8.5 12 4l8 4.5-8 4.5-8-4.5Z', 'M4 13l8 4.5 8-4.5', 'M4 17.5l8 4.5 8-4.5'],
    web: ['M4 5h16v14H4z', 'M4 9h16', 'M8 7h.01M11 7h.01'],
    frontend: ['M4 4h6v6H4z', 'M14 4h6v6h-6z', 'M4 14h6v6H4z', 'M14 14h6v6h-6z', 'M10 7h4M7 10v4M17 10v4M10 17h4'],
    clock: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 7v5l3 2'],
    lock: ['M6 10h12v10H6z', 'M8 10V7a4 4 0 0 1 8 0v3', 'M12 14v2'],
    globe: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M3 12h18', 'M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18'],
    code: ['m8 9-3 3 3 3M16 9l3 3-3 3M14 6l-4 12'],
    play: ['M8 5v14l11-7L8 5Z'],
    list: ['M8 6h11M8 12h11M8 18h11', 'M4 6h.01M4 12h.01M4 18h.01'],
    plus: ['M12 5v14M5 12h14'],
    arrowDown: ['M12 4v16', 'm6 14 6 6 6-6'],
    arrowRight: ['M4 12h16', 'm14 6 6 6-6 6'],
    arrowUpRight: ['M7 17 17 7', 'M8 7h9v9'],
    check: ['m5 12 4 4L19 6'],
    queue: ['M5 5h14v14H5z', 'M8 9h8M8 13h8M8 17h5']
  }

  const SvgIcon = defineComponent({
    props: { name: { type: String, required: true } },
    setup(props, { attrs }) {
      return () =>
        h(
          'svg',
          {
            ...attrs,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: 'currentColor',
            strokeWidth: 1.7,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            'aria-hidden': 'true'
          },
          (iconPaths[props.name] || iconPaths.code).map((d) => h('path', { d }))
        )
    }
  })

  const featureLinks = Object.fromEntries(
    Object.entries({
      php: '/features/php',
      mysql: '/features/mysql',
      postgresql: '/features/postgresql',
      redis: '/features/redis',
      nginx: '/features/nginx',
      apache: '/features/apache',
      caddy: '/features/caddy',
      nodejs: '/features/nodejs',
      cron: '/features/cron-jobs',
      https: '/features/local-sites-https'
    }).map(([key, path]) => [key, localizedHref(path)])
  ) as Record<string, string>

  const legacyHeroStack = [
    { key: 'php', label: 'PHP', href: featureLinks.php },
    { key: 'composer', label: 'Composer' },
    {
      key: 'databases',
      links: [
        { label: 'MySQL', href: featureLinks.mysql },
        { label: ' / ' },
        { label: 'PostgreSQL', href: featureLinks.postgresql }
      ]
    },
    { key: 'redis', label: 'Redis', href: featureLinks.redis },
    {
      key: 'web-servers',
      links: [
        { label: 'Nginx', href: featureLinks.nginx },
        { label: ' / ' },
        { label: 'Apache', href: featureLinks.apache },
        { label: ' / ' },
        { label: 'Caddy', href: featureLinks.caddy }
      ]
    },
    { key: 'nodejs', label: 'Node.js', href: featureLinks.nodejs },
    { key: 'cron', label: 'Cron', href: featureLinks.cron },
    { key: 'https', label: 'HTTPS', href: featureLinks.https }
  ]

  const legacyRequirements = [
    {
      icon: 'runtime',
      title: 'Application runtime',
      serviceParts: [{ label: 'PHP-FPM (e.g. PHP 8.3)', href: featureLinks.php }],
      support: 'Multiple PHP versions per project'
    },
    {
      icon: 'dependencies',
      title: 'Dependencies',
      serviceParts: [{ label: 'Composer' }],
      support: 'Built-in Composer, easy to use'
    },
    {
      icon: 'database',
      title: 'Database',
      serviceParts: [
        { label: 'MySQL', href: featureLinks.mysql },
        { label: ' or ' },
        { label: 'PostgreSQL', href: featureLinks.postgresql }
      ],
      support: 'Both supported, switch per project'
    },
    {
      icon: 'cache',
      title: 'Cache & queues',
      serviceParts: [{ label: 'Redis', href: featureLinks.redis }],
      support: 'Start when needed'
    },
    {
      icon: 'web',
      title: 'Web server',
      serviceParts: [
        { label: 'Nginx', href: featureLinks.nginx },
        { label: ' / ' },
        { label: 'Apache', href: featureLinks.apache },
        { label: ' / ' },
        { label: 'Caddy', href: featureLinks.caddy }
      ],
      support: 'Flexible web server support'
    },
    {
      icon: 'frontend',
      title: 'Frontend assets',
      serviceParts: [{ label: 'Node.js + Vite', href: featureLinks.nodejs }],
      support: 'Modern frontend toolchain'
    },
    {
      icon: 'clock',
      title: 'Scheduled tasks',
      serviceParts: [{ label: 'Cron', href: featureLinks.cron }],
      support: 'Manage Laravel scheduler'
    },
    {
      icon: 'lock',
      title: 'Local HTTPS',
      serviceParts: [{ label: 'Trusted local certificate', href: featureLinks.https }],
      support: 'Real local domain with HTTPS'
    }
  ]

  const legacyPrimaryStack = [
    { icon: 'globe', title: 'shop.test', logo: '', href: featureLinks.https },
    { icon: 'web', title: 'Nginx', logo: '/assets/demo-logos/nginx.svg', href: featureLinks.nginx },
    { icon: 'code', title: 'Laravel', logo: '/assets/demo-logos/laravel.svg' }
  ]

  const legacySupportingServices = [
    {
      icon: 'database',
      title: 'MySQL 8.4',
      description: 'Database',
      logo: '/assets/demo-logos/mysql.svg',
      href: featureLinks.mysql
    },
    {
      icon: 'cache',
      title: 'Redis 7',
      description: 'Cache & queues',
      logo: '/assets/demo-logos/redis.svg',
      href: featureLinks.redis
    },
    {
      icon: 'frontend',
      title: 'Node.js / Vite',
      description: 'Frontend assets',
      logo: '/assets/demo-logos/nodedotjs.svg',
      href: featureLinks.nodejs
    },
    { icon: 'clock', title: 'Cron / Scheduler', description: 'Task scheduling', logo: '', href: featureLinks.cron }
  ]

  const legacyStackOutcomes = [
    {
      icon: 'code',
      title: 'Project-level PHP version',
      description: 'Use the PHP version required by each Laravel project.'
    },
    {
      icon: 'globe',
      title: 'Local domain + HTTPS',
      description: 'Access your project with a trusted certificate.'
    },
    {
      icon: 'play',
      title: 'One-click startup group',
      description: 'Start all required services together and get to work.'
    },
    {
      icon: 'list',
      title: 'Queue workers / scheduler',
      description: 'Run workers and the Laravel scheduler easily.'
    }
  ]

  const legacyProofPoints = [
    {
      icon: 'check',
      title: 'Project-level runtime',
      description: 'Choose the PHP-FPM version required by this Laravel project.'
    },
    {
      icon: 'list',
      title: 'Laravel project group',
      description: 'Keep Nginx, PHP-FPM, MySQL, and Redis in one controlled startup order.'
    },
    {
      icon: 'database',
      title: 'Managed service stack',
      description: 'See the core Laravel services together in one FlyEnv view.'
    },
    {
      icon: 'play',
      title: 'Repeatable startup',
      description: 'Start the project’s Startup Group whenever you return to the app.'
    }
  ]

  const legacyBenefits = [
    {
      icon: 'code',
      title: 'Use different PHP versions per project',
      description:
        'Keep Laravel projects on the versions they require without changing a global runtime.',
      emphasis: true,
      evidence: 'Laravel 8 → PHP 7.4 · Laravel 11 → PHP 8.2 · Laravel 12 → PHP 8.3+'
    },
    {
      icon: 'play',
      title: 'Run the full stack with one click',
      description:
        'Start PHP, the database, Redis, the web server, and more from one Startup Group.',
      emphasis: true,
      evidence: 'PHP + Nginx + MySQL + Redis → Startup Group'
    },
    {
      icon: 'database',
      title: 'Choose MySQL or PostgreSQL',
      description:
        'Use the database that matches the project instead of adapting the project to the tool.'
    },
    {
      icon: 'cache',
      title: 'Add Redis only when needed',
      description:
        'Enable cache, sessions, or queues without carrying an unused service everywhere.'
    },
    {
      icon: 'lock',
      title: 'Use a real local domain and HTTPS',
      description: 'Test cookies, OAuth callbacks, webhooks, and secure browser features locally.',
      emphasis: true,
      evidence: 'https://shop.test'
    },
    {
      icon: 'clock',
      title: 'Run scheduler and queue workers',
      description: 'Keep background work close to the Laravel application during development.'
    }
  ]

  const legacyProjectPaths = [
    {
      icon: 'plus',
      title: 'Start a new Laravel project',
      steps: [
        'Open PHP → New Project.',
        'Choose Laravel template, framework version, PHP version, and Composer version.',
        'FlyEnv runs the Composer creation command and shows the terminal output.',
        'Create the matching local site in one click.',
        'Open the new project with a local domain and HTTPS.'
      ]
    },
    {
      icon: 'web',
      title: 'Run an existing Laravel project',
      steps: [
        'Import or open the existing Laravel project.',
        'Set the required PHP version.',
        'Configure the database, Redis, and other services if needed.',
        'Add the local site and choose the public directory.',
        'Start the project’s Startup Group and open the site.'
      ]
    }
  ]

  const legacyComparisonRows = [
    {
      feature: 'Environment model',
      host: 'Single PHP process',
      container: 'Docker containers',
      flyenv: 'Full local environment'
    },
    {
      feature: 'Database environment',
      host: 'Local or external',
      container: 'Containers',
      flyenv: 'MySQL or PostgreSQL modules'
    },
    {
      feature: 'Redis support',
      host: 'Manual setup',
      container: 'Container service',
      flyenv: 'Built-in, on demand'
    },
    {
      feature: 'Local domains',
      host: 'Manual setup',
      container: 'Project-dependent',
      flyenv: 'Managed local sites'
    },
    {
      feature: 'Multi-stack development',
      host: 'Manual switching',
      container: 'Docker Compose',
      flyenv: 'Project-level runtimes and services'
    }
  ]

  const legacyFaqs = [
    {
      question: 'Can I use different PHP versions for different Laravel projects?',
      answer:
        'Yes. FlyEnv manages multiple PHP versions and lets each project or local site use the version it requires.'
    },
    {
      question: 'Can I use MySQL or PostgreSQL with Laravel?',
      answer:
        'Yes. Choose the database module that matches the project and start it alongside the Laravel application.'
    },
    {
      question: 'Does FlyEnv support Redis queues?',
      answer:
        'Yes. Start Redis when the application uses cache, sessions, Horizon, or queue workers, then keep it in the project’s Startup Group.'
    },
    {
      question: 'Can I use a .test domain with HTTPS?',
      answer:
        'Yes. Create a local site with a readable domain and use FlyEnv’s trusted local HTTPS support.'
    },
    {
      question: 'Can I manage multiple Laravel projects?',
      answer:
        'Yes. Each project can keep its own PHP version, local site, database choice, Redis usage, and supporting services.'
    },
    {
      question: 'Does FlyEnv replace the Laravel installation guide?',
      answer:
        'No. The Solution page explains the environment and workflow; the Laravel Guide covers the detailed setup steps and configuration.'
    }
  ]

  const legacyRelatedSolutions = [
    {
      name: 'Symfony',
      description: 'Modern PHP framework',
      href: '/solutions/symfony',
      logo: 'https://cdn.simpleicons.org/symfony/000000'
    },
    {
      name: 'WordPress',
      description: 'CMS & websites',
      href: '/solutions/wordpress',
      logo: 'https://cdn.simpleicons.org/wordpress/21759B'
    },
    {
      name: 'Magento',
      description: 'E-commerce',
      href: '/solutions/magento',
      logo: '/assets/demo-logos/magento.svg'
    }
  ]

  const copy = translateData(locale)
  const {
    heroStack,
    requirements,
    primaryStack,
    supportingServices,
    stackOutcomes,
    proofPoints,
    benefits,
    projectPaths,
    comparisonRows,
    faqs,
    relatedSolutions
  } = copy
</script>
