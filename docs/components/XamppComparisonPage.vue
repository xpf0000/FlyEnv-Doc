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
          >
            {{ copy.badge }}
          </p>
          <h1
            class="!m-0 !border-0 !p-0 !text-4xl !leading-tight font-black tracking-tight text-slate-950 sm:!text-5xl lg:!text-6xl dark:text-white"
          >
            FlyEnv vs XAMPP
            <span
              class="mt-3 block text-2xl font-bold leading-tight text-slate-700 sm:text-3xl lg:text-4xl dark:text-slate-200"
            >
              {{ copy.heroTagline }}
            </span>
          </h1>
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {{ copy.heroDesc }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="localizedHref('/download')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold !text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {{ copy.download }}
            </a>
            <a
              href="#comparison"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold !text-slate-800 no-underline transition hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:!text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              {{ copy.readSummary }}
            </a>
          </div>
          <div
            class="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-slate-600 dark:text-slate-300"
          >
            <span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> macOS</span
            >
            <span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> Windows</span
            >
            <span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> Linux</span
            >
            <span class="inline-flex items-center gap-2"
              ><span class="text-blue-600">✓</span> {{ copy.freeOpen }}</span
            >
          </div>
        </div>

        <div class="grid items-stretch gap-5 sm:grid-cols-2">
          <article
            class="rounded-3xl border border-orange-200 bg-white/90 p-6 shadow-xl shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-900/90"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500 text-xl font-black text-white"
                >X</span
              >
              <div class="min-w-0">
                <h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">XAMPP</h2>
                <p class="!m-0 truncate text-[12px] font-medium text-slate-500 dark:text-slate-400"
                  >{{ copy.xamppShared }}</p
                >
              </div>
            </div>
            <div
              class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
            >
              <div class="grid grid-cols-3 gap-1.5">
                <div
                  class="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-white px-1.5 py-2.5 shadow-sm dark:bg-slate-900"
                >
                <img src="https://oss.macphpstudy.com/image/assets/demo-logos/apache.svg" alt="Apache" class="h-6 w-6" />
                  <span class="text-[12px] font-semibold text-slate-600 dark:text-slate-300"
                    >Apache</span
                  >
                </div>
                <div
                  class="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-white px-1.5 py-2.5 shadow-sm dark:bg-slate-900"
                >
                <img src="https://oss.macphpstudy.com/image/assets/demo-logos/php.svg" alt="PHP" class="h-6 w-6" />
                  <span class="text-[12px] font-semibold text-slate-600 dark:text-slate-300"
                    >PHP</span
                  >
                </div>
                <div
                  class="flex min-w-0 flex-col items-center gap-1 rounded-xl bg-white px-1.5 py-2.5 shadow-sm dark:bg-slate-900"
                >
                <img src="https://oss.macphpstudy.com/image/assets/demo-logos/mariadb.svg" alt="MariaDB" class="h-6 w-6" />
                  <span class="text-[12px] font-semibold text-slate-600 dark:text-slate-300"
                    >MariaDB</span
                  >
                </div>
              </div>
              <div class="flex flex-col items-center py-1 text-slate-400 dark:text-slate-500">
                <span class="h-3 w-px bg-slate-300 dark:bg-slate-600"></span>
                <span class="text-xs leading-3">↓</span>
              </div>
              <div
                class="rounded-xl border border-orange-100 bg-orange-50 px-3 py-2.5 dark:border-orange-900/50 dark:bg-orange-950/40"
              >
                <div class="flex items-center gap-2">
                  <span
                    class="relative h-4 w-5 shrink-0 rounded-sm bg-sky-400 before:absolute before:-top-1 before:left-0 before:h-1.5 before:w-2.5 before:rounded-t-sm before:bg-sky-300"
                  ></span>
                  <div>
                    <p class="!m-0 text-[10px] font-bold text-orange-900 dark:text-orange-200"
                      >htdocs</p
                    >
                    <p class="!m-0 text-[9px] text-orange-700/80 dark:text-orange-300/80"
                    >({{ copy.webRoot }})</p
                    >
                  </div>
                </div>
                <div class="mt-2 space-y-1 border-l border-orange-200 pl-3 dark:border-orange-800">
                  <p class="!m-0 text-[12px] text-slate-600 dark:text-slate-300">/project-a</p>
                  <p class="!m-0 text-[12px] text-slate-600 dark:text-slate-300">/project-b</p>
                  <p class="!m-0 text-[12px] text-slate-600 dark:text-slate-300">/project-c</p>
                </div>
              </div>
            </div>
            <p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ copy.xamppCaption }}</p
            >
          </article>

          <article
              class="rounded-3xl border border-sky-200 bg-white/90 p-6 shadow-xl shadow-blue-950/5 dark:border-sky-900/60 dark:bg-slate-900/90"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-black text-white"
                >F</span
              >
              <div class="min-w-0">
                <h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">FlyEnv</h2>
                <p class="!m-0 truncate text-[12px] font-medium text-slate-500 dark:text-slate-400"
                  >{{ copy.flyenvDedicated }}</p
                >
              </div>
            </div>
            <div class="mt-5 space-y-2.5">
              <div
                class="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5 dark:border-blue-950 dark:bg-blue-950/30"
              >
                <div class="flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                  <p class="!m-0 text-[12px] font-bold text-blue-700 dark:text-blue-300"
                    >{{ projectLabel('A') }}
                    <span class="font-medium text-slate-500 dark:text-slate-400">· Laravel</span></p
                  >
                </div>
                <div class="mt-2 grid grid-cols-4 gap-1">
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg" alt="Nginx" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >Nginx</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/php.svg" alt="PHP 8.3" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >PHP 8.3</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg" alt="MySQL" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >MySQL</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg" alt="Redis" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >Redis</span
                    ></div
                  >
                </div>
              </div>
              <div
                class="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5 dark:border-blue-950 dark:bg-blue-950/30"
              >
                <div class="flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                  <p class="!m-0 text-[12px] font-bold text-blue-700 dark:text-blue-300"
                    >{{ projectLabel('B') }}
                    <span class="font-medium text-slate-500 dark:text-slate-400"
                      >· WordPress</span
                    ></p
                  >
                </div>
                <div class="mt-2 grid grid-cols-4 gap-1">
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/apache.svg" alt="Apache" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >Apache</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/php.svg" alt="PHP 7.4" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >PHP 7.4</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/mariadb.svg" alt="MariaDB" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >MariaDB</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><span
                      class="flex h-4 w-4 items-center justify-center rounded bg-rose-100 text-[10px] font-bold text-rose-600 dark:bg-rose-950/60 dark:text-rose-300"
                      >M</span
                    ><span class="text-[10px] text-slate-600 dark:text-slate-300">Mailpit</span></div
                  >
                </div>
              </div>
              <div
                class="rounded-xl border border-blue-100 bg-blue-50/70 p-2.5 dark:border-blue-950 dark:bg-blue-950/30"
              >
                <div class="flex items-center gap-1.5">
                  <span class="h-1.5 w-1.5 rounded-full bg-violet-500"></span>
                  <p class="!m-0 text-[12px] font-bold text-blue-700 dark:text-blue-300"
                    >{{ projectLabel('C') }}
                    <span class="font-medium text-slate-500 dark:text-slate-400"
                      >· {{ projectType('node') }}</span
                    ></p
                  >
                </div>
                <div class="mt-2 grid grid-cols-4 gap-1">
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/caddy.svg" alt="Caddy" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >Caddy</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img
                      src="https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg"
                      alt="Node.js"
                      class="h-4 w-4"
                    /><span class="text-[10px] text-slate-600 dark:text-slate-300"
                      >Node.js</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img
                      src="https://oss.macphpstudy.com/image/assets/demo-logos/postgresql.svg"
                      alt="PostgreSQL"
                      class="h-4 w-4"
                    /><span class="text-[10px] text-slate-600 dark:text-slate-300"
                      >PostgreSQL</span
                    ></div
                  >
                  <div class="flex flex-col items-center gap-0.5"
                    ><img src="https://oss.macphpstudy.com/image/assets/demo-logos/minio.svg" alt="MinIO" class="h-4 w-4" /><span
                      class="text-[10px] text-slate-600 dark:text-slate-300"
                      >MinIO</span
                    ></div
                  >
                </div>
              </div>
            </div>
            <p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
              >{{ copy.flyenvCaption }}</p
            >
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="differences-title">
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-2xl text-center">
          <h2
            id="differences-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.differencesTitle }}</h2
          >
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.differencesSubtitle }}</p
          >
        </header>
        <div class="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          <article
            class="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >01</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black"
              >{{ copy.diff1Title }}</h3
            >
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
              >{{ copy.diff1Desc }}</p
            ><div
              class="mt-5 rounded-xl border border-blue-100 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 dark:border-blue-950 dark:bg-blue-950/50 dark:text-blue-200"
              >PHP 7.4 <span class="px-1 text-blue-400">|</span> PHP 8.1
              <span class="px-1 text-blue-400">|</span> PHP 8.3</div
            >
          </article>
          <article
            class="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-100 text-xl font-black text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300"
              >02</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black"
              >{{ copy.diff2Title }}</h3
            >
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
              >{{ copy.diff2Desc }}</p
            ><div
              class="mt-5 rounded-xl border border-indigo-100 bg-indigo-50 px-3 py-2 text-xs font-bold text-indigo-700 dark:border-indigo-950 dark:bg-indigo-950/50 dark:text-indigo-200"
              >Nginx + PHP + MySQL + Redis</div
            >
          </article>
          <article
            class="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              class="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-100 text-xl font-black text-sky-700 dark:bg-sky-950 dark:text-sky-300"
              >03</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black"
              >{{ copy.diff3Title }}</h3
            >
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
              >{{ copy.diff3Desc }}</p
            ><div
              class="mt-5 rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-xs font-bold text-sky-700 dark:border-sky-950 dark:bg-sky-950/50 dark:text-sky-200"
              >https://shop.test</div
            >
          </article>
        </div>
      </div>
    </section>

    <section
      id="comparison"
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="model-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="model-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.modelTitle }}</h2
          >
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.modelSubtitle }}</p
          >
        </header>
        <div class="relative mt-12 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <article
            class="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm sm:p-8 dark:border-orange-900/60 dark:bg-slate-950"
          >
            <div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >X</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">XAMPP</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400">{{ copy.sharedPhp }}</p></div
              ></div
            >
            <div
              class="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-950 dark:bg-orange-950/30"
            >
              <div class="grid grid-cols-4 gap-1.5">
                <div
                  v-for="service in xamppComparisonServices"
                  :key="service.name"
                  class="flex flex-col items-center gap-1 rounded-xl bg-white px-1 py-3 shadow-sm dark:bg-slate-900"
                >
                  <img :src="service.icon" :alt="service.name" class="h-6 w-6" />
                  <span class="text-[10px] font-semibold text-slate-600 dark:text-slate-300">{{
                    service.name
                  }}</span>
                </div>
              </div>
              <div class="my-2 flex justify-center text-slate-400">↓</div>
              <div
                class="rounded-xl border border-orange-200 bg-white px-4 py-4 dark:border-orange-900/60 dark:bg-slate-900"
              >
                <div class="flex items-center gap-2"
                  ><span class="h-4 w-5 rounded-sm bg-sky-400"></span
                  ><span class="text-xs font-bold"
                    >htdocs <span class="font-normal text-slate-500">({{ copy.webRoot }})</span></span
                  ></div
                >
                <div
                  class="mt-3 grid grid-cols-3 gap-1 text-center text-[10px] text-slate-600 dark:text-slate-300"
                >
                  <span
                    v-for="project in xamppProjects"
                    :key="project"
                    class="rounded bg-orange-50 py-1.5 dark:bg-orange-950/40"
                    >{{ project }}</span
                  >
                </div>
              </div>
            </div>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li class="flex gap-3"
                ><span class="text-orange-600">•</span>{{ copy.xamppBullets[0] }}</li
              ><li class="flex gap-3"
                ><span class="text-orange-600">•</span>{{ copy.xamppBullets[1] }}</li
              ><li class="flex gap-3"
                ><span class="text-orange-600">•</span>{{ copy.xamppBullets[2] }}</li
              ></ul
            >
          </article>
          <div
            class="hidden h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/20 lg:flex"
            >VS</div
          >
          <article
            class="rounded-3xl border border-blue-200 bg-white p-6 shadow-sm sm:p-8 dark:border-blue-900/60 dark:bg-slate-950"
          >
            <div class="flex items-center gap-3"
              ><span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              ><div
                ><h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">FlyEnv</h3
                ><p class="!m-0 text-sm text-slate-500 dark:text-slate-400"
                  >{{ copy.projectEnv }}</p
                ></div
              ></div
            >
            <div class="mt-6 grid gap-2 sm:grid-cols-3">
              <div
                v-for="project in flyenvComparisonProjects"
                :key="project.name"
                class="rounded-2xl border border-blue-100 bg-blue-50 p-4 dark:border-blue-950 dark:bg-blue-950/30"
              >
                <p class="flex items-center gap-1.5 text-[11px] font-bold text-blue-700 dark:text-blue-300">
                  <span class="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>{{ projectDisplayName(project.name) }}
                </p>
                <div class="mt-2 space-y-1.5 text-slate-600 dark:text-slate-300">
                  <p v-for="service in project.services" :key="service.name" class="!mb-0 flex items-center gap-1.5 text-[10px] leading-4">
                    <img v-if="service.icon" :src="service.icon" :alt="service.name" class="h-4 w-4 shrink-0" />
                    <span v-else class="flex h-4 w-4 shrink-0 items-center justify-center rounded bg-rose-100 text-[9px] font-bold text-rose-600">M</span>
                    <span>{{ service.name }}</span>
                  </p>
                </div>
              </div>
            </div>
            <ul class="mt-6 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              ><li class="flex gap-3"
                ><span class="text-emerald-600">✓</span>{{ copy.flyenvBullets[0] }}</li
              ><li class="flex gap-3"
                ><span class="text-emerald-600">✓</span>{{ copy.flyenvBullets[1] }}</li
              ><li class="flex gap-3"
                ><span class="text-emerald-600">✓</span>{{ copy.flyenvBullets[2] }}</li
              ></ul
            >
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="daily-title">
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center"
          ><h2
            id="daily-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.dailyTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.dailySubtitle }}</p
          ></header
        >
        <div class="mt-12 grid gap-6 md:grid-cols-3">
          <article
            class="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><div class="aspect-[16/10] bg-slate-950 p-4"
              ><img
                src="https://oss.macphpstudy.com/image/quick-start-2.webp"
                :alt="locale === 'zh' ? 'FlyEnv 运行时版本安装界面' : locale === 'id' ? 'Antarmuka instalasi versi runtime FlyEnv' : 'FlyEnv runtime version installation interface'"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              /></div
            ><div class="flex h-full flex-col p-6"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                >{{ copy.card1Title }}</h3
              ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
                >{{ copy.card1Desc }}</p
              ><a
                :href="localizedHref('/features/php')"
                class="mt-auto pt-5 inline-flex font-bold !text-blue-600 no-underline hover:text-blue-700 dark:!text-blue-300"
                >{{ copy.card1Link }} →</a
              ></div
            ></article
          >
          <article
            class="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><div class="aspect-[16/10] bg-slate-950 p-4"
              ><img
                src="https://oss.macphpstudy.com/image/host-1.webp"
                :alt="locale === 'zh' ? 'FlyEnv 本地站点 HTTPS 配置界面' : locale === 'id' ? 'Antarmuka konfigurasi HTTPS situs lokal FlyEnv' : 'FlyEnv local site HTTPS configuration interface'"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              /></div
            ><div class="flex h-full flex-col p-6"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                >{{ copy.card2Title }}</h3
              ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
                >{{ copy.card2Desc }}</p
              ><a
                :href="localizedHref('/features/local-sites-https')"
                class="mt-auto pt-5 inline-flex font-bold !text-blue-600 no-underline hover:text-blue-700 dark:!text-blue-300"
                >{{ copy.card2Link }} →</a
              ></div
            ></article
          >
          <article
            class="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><div class="aspect-[16/10] bg-slate-950 p-4"
              ><img
                src="https://oss.macphpstudy.com/image/features/startup-groups-1.webp"
                :alt="locale === 'zh' ? 'FlyEnv 服务管理界面' : locale === 'id' ? 'Antarmuka pengelolaan layanan FlyEnv' : 'FlyEnv service management interface'"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              /></div
            ><div class="flex h-full flex-col p-6"
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black"
                >{{ copy.card3Title }}</h3
              ><p class="mt-3 leading-7 text-slate-600 dark:text-slate-300"
                >{{ copy.card3Desc }}</p
              ><a
                :href="localizedHref('/guide/project-level-runtime-environment')"
                class="mt-auto pt-5 inline-flex font-bold !text-blue-600 no-underline hover:text-blue-700 dark:!text-blue-300"
                >{{ copy.card3Link }} →</a
              ></div
            ></article
          >
        </div>
      </div>
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="feature-table-title"
    >
      <div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="feature-table-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.featureTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.featureSubtitle }}</p
          ></header
        ><div
          class="mt-12 overflow-x-auto rounded-2xl border-x border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
          ><table class="!table !my-0 min-w-[760px] w-full border-collapse text-left text-base leading-6 lg:min-w-[860px]"
            ><thead
              class="bg-slate-100 text-sm uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
              ><tr
                ><th class="px-6 py-0 font-bold">{{ copy.capability }}</th
                ><th class="px-6 py-0 font-bold">XAMPP</th
                ><th class="px-6 py-0 font-bold">FlyEnv</th></tr
              ></thead
            ><tbody class="divide-y divide-slate-200 dark:divide-slate-800"
              ><tr v-for="row in featureRows" :key="row.name"
                ><th class="px-6 py-0 font-bold text-slate-800 dark:text-slate-100">{{
                    tr(row.name)
                }}</th
                ><td class="px-6 py-0 text-slate-600 dark:text-slate-300"
                  ><span
                    :class="row.xamppOk
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : row.xampp.includes('Not included')
                        ? 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                        : 'bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300'"
                    class="mr-2 inline-flex min-w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-bold"
                    >{{ statusLabel(row.xampp, row.xamppOk) }}</span
                  >{{ tr(row.xampp) }}</td
                ><td class="px-6 py-0 text-slate-600 dark:text-slate-300"
                  ><span
                    :class="row.flyenvOk
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'"
                    class="mr-2 inline-flex min-w-[4.5rem] justify-center rounded-full px-2 py-0.5 text-[11px] font-bold"
                    >{{ statusLabel(row.flyenv, row.flyenvOk) }}</span
                  >{{ tr(row.flyenv) }}</td
                ></tr
              ></tbody
            ></table
          ></div
        ></div
      >
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="workflow-title">
      <div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="workflow-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.workflowTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.workflowSubtitle }}</p
          ></header
        ><div class="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800"
          ><div class="hidden grid-cols-2 border-b border-slate-200 bg-white md:grid dark:border-slate-800 dark:bg-slate-950"
            ><div class="flex items-center gap-3 border-r border-slate-200 px-6 py-5 dark:border-slate-800"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >X</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ copy.withXampp }}</h3></div
            ><div class="flex items-center gap-3 px-6 py-5"
              ><span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              ><h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ copy.withFlyenv }}</h3></div
            ></div
          ><div class="divide-y divide-slate-200 dark:divide-slate-800"
            ><div
              v-for="(step, index) in workflowSteps"
              :key="step.xampp"
              class="grid gap-0 md:grid-cols-2"
            ><div
                class="border-b border-slate-200 bg-orange-50/60 px-5 py-4 dark:border-slate-800 dark:bg-orange-950/20 md:border-b-0 md:border-r"
              ><p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-orange-700 md:hidden dark:text-orange-300"
                >{{ copy.withXampp }}</p
              ><div class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                ><span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white"
                  >{{ index + 1 }}</span
                ><p class="!m-0">{{ tr(step.xampp) }}</p></div
              ></div
            ><div class="bg-blue-50/60 px-5 py-4 dark:bg-blue-950/20"
              ><p class="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 md:hidden dark:text-blue-300"
                >{{ copy.withFlyenv }}</p
              ><div class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                ><span
                  class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                  >{{ index + 1 }}</span
                ><p class="!m-0">{{ tr(step.flyenv) }}</p></div
              ></div
            ></div
          ></div
        ></div
        ></div
      >
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="choice-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="choice-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.choiceTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.choiceSubtitle }}</p
          ></header
        ><div class="mt-10 grid items-start gap-3 md:grid-cols-2"
          ><article
            class="h-full rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-md shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-950"
            ><h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-orange-700 dark:text-orange-300 sm:!text-3xl"
              >{{ copy.chooseXampp }}</h3
            ><ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200"
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300">✓</span
                ><span>{{ copy.xamppChoices[0] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300">✓</span
                ><span>{{ copy.xamppChoices[1] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300">✓</span
                ><span>{{ copy.xamppChoices[2] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300">✓</span
                ><span>{{ copy.xamppChoices[3] }}</span></li></ul
            ></article
          ><article
            class="h-full rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-md shadow-blue-950/5 dark:border-blue-900/60 dark:bg-slate-950"
            ><h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-blue-700 dark:text-blue-300 sm:!text-3xl"
              >{{ copy.chooseFlyenv }}</h3
            ><ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200"
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">✓</span
                ><span>{{ copy.flyenvChoices[0] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">✓</span
                ><span>{{ copy.flyenvChoices[1] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">✓</span
                ><span>{{ copy.flyenvChoices[2] }}</span></li
              ><li class="flex items-start gap-3"
                ><span class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300">✓</span
                ><span>{{ copy.flyenvChoices[3] }}</span></li></ul
            ></article
          ></div
        ><p
          class="!mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
          >{{ copy.choiceNote }}</p
        ></div
      ></section
    >

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="migration-title"
      ><div class="mx-auto max-w-7xl"
        ><header class="mx-auto max-w-3xl text-center"
          ><h2
            id="migration-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
            >{{ copy.migrationTitle }}</h2
          ><p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300"
            >{{ copy.migrationSubtitle }}</p
          ></header
        ><div class="mt-12 grid gap-5 md:grid-cols-3"
          ><article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white"
              >1</span
            ><h3 class="!mt-5 !border-0 !p-0 !text-lg !leading-6 font-black">{{ copy.migrationSteps[0].title }}</h3
            ><p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >{{ copy.migrationSteps[0].desc }}</p
            ></article
          ><article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white"
              >2</span
            ><h3 class="!mt-5 !border-0 !p-0 !text-lg !leading-6 font-black">{{ copy.migrationSteps[1].title }}</h3
            ><p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >{{ copy.migrationSteps[1].desc }}</p
            ></article
          ><article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            ><span
              class="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white"
              >3</span
            ><h3 class="!mt-5 !border-0 !p-0 !text-lg !leading-6 font-black"
              >{{ copy.migrationSteps[2].title }}</h3
            ><p class="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
              >{{ copy.migrationSteps[2].desc }}</p
            ></article
          ></div
        ><p class="mt-8 text-center text-sm text-slate-600 dark:text-slate-300"
          >{{ copy.guideLead }}
          <a
            :href="localizedHref('/guide/flyenv-vs-docker-xampp')"
            class="font-bold !text-blue-600 no-underline hover:text-blue-700 dark:!text-blue-300"
            >{{ copy.guideLink }}</a
          >.</p
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
            >{{ copy.faqTitle }}</h2
          ></header
        ><div class="mt-10 grid items-stretch gap-3 md:grid-cols-2"
          ><article
            v-for="faq in faqs"
            :key="faq.question"
            class="h-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
            ><h3 class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-slate-800 dark:text-slate-100">{{
              tr(faq.question)
            }}</h3
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
            >{{ copy.ctaTitle }}</h2
          ><p class="mt-2 max-w-2xl text-sm leading-6 text-blue-100"
            >{{ copy.ctaDesc }}</p
          ></div
        ><div class="flex shrink-0 flex-wrap gap-3"
          ><a
            :href="localizedHref('/download')"
            class="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-bold !text-blue-900 no-underline transition hover:-translate-y-0.5 hover:bg-blue-50"
            >{{ copy.download }}</a
          ><a
            :href="localizedHref('/guide/getting-started')"
            class="inline-flex items-center justify-center rounded-xl border border-blue-200/70 px-6 py-3.5 text-sm font-bold !text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/10"
            >{{ copy.quickStart }}</a
          ></div
        ></div
      ></section
    >
  </main>
</template>

<script setup lang="ts">
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' }>()
  const locale = props.locale || 'en'
  const localizedHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`)
  const copy = props.locale === 'zh'
    ? {
        badge: '比较', heroTagline: '共享堆栈，还是每个项目独立环境？', heroDesc: 'XAMPP 是适合通用场景的简单一体化 PHP 堆栈。FlyEnv 让每个本地项目使用所需的运行时、Web 服务器、数据库和服务。', download: '下载 FlyEnv', readSummary: '阅读快速摘要', freeOpen: '免费且开源', xamppShared: '所有项目共享一个堆栈', webRoot: '一个网站根目录', xamppCaption: '所有项目共享相同的堆栈和配置。', flyenvDedicated: '每个项目独立环境', flyenvCaption: '每个项目拥有独立的运行时、服务、端口和配置。', differencesTitle: '三个实际差异', differencesSubtitle: '不仅是堆栈不同，更是开发方式不同。', diff1Title: '多版本运行时', diff1Desc: '可并行运行不同版本的 PHP、Node.js、Python 等，同时保持项目彼此独立。', diff2Title: '按项目构建所需堆栈', diff2Desc: '选择 Nginx、Apache、Caddy、数据库、缓存、邮件测试、对象存储或自定义项目服务。', diff3Title: '自定义域名和 HTTPS', diff3Desc: '为每个本地站点设置独立域名，并在一个地方管理证书、端口、重写规则和日志。', modelTitle: '共享堆栈 vs 每个项目独立环境', modelSubtitle: '理念相近，开发体验却完全不同。', sharedPhp: '共享 PHP 堆栈', projectEnv: '按项目划分的环境', xamppBullets: ['项目通常共享相同的运行时版本。', '不同需求需要额外配置。', '运行时和服务器配置通常是共享的。'], flyenvBullets: ['每个项目可匹配所需的运行时和服务。', '本地站点、端口、日志和 HTTPS 集中管理。', '项目需要时可同时启动相关服务。'], dailyTitle: '日常开发中的实际体验', dailySubtitle: '通过 FlyEnv 的运行时、站点和服务工作流查看相同的配置。', card1Title: '多版本运行时', card1Desc: '安装并运行多个 PHP 版本及其他运行时，互不冲突。', card1Link: '探索 FlyEnv 中的 PHP', card2Title: '本地域名和 HTTPS', card2Desc: '创建带自定义域名的本地站点并管理证书，无需遵循 htdocs 约定。', card2Link: '探索本地站点', card3Title: '全栈本地服务', card3Desc: '在项目旁运行数据库、缓存、邮件测试、对象存储等服务。', card3Link: '查看项目环境', featureTitle: '功能对比', featureSubtitle: '常用本地开发能力的实用对比。', capability: '能力', workflowTitle: '典型 Laravel 开发流程', workflowSubtitle: '这些环境在实际使用中的一种常见差异。', withXampp: '使用 XAMPP', withFlyenv: '使用 FlyEnv', choiceTitle: '应该选择哪一个？', choiceSubtitle: '两款工具都有用，正确选择取决于项目组织方式。', chooseXampp: '选择 XAMPP 的情况', xamppChoices: ['希望使用熟悉的 Apache + PHP + MariaDB 套件。', '项目可以使用大致相同的 PHP 环境。', '主要开发传统 PHP 应用。', '偏好简单、成熟的本地堆栈。'], chooseFlyenv: '选择 FlyEnv 的情况', flyenvChoices: ['项目需要不同版本的 PHP、Node.js 或其他运行时。', '使用 Nginx、Caddy、PostgreSQL、Redis 或其他本地服务。', '希望在一个地方管理自定义域名和 HTTPS。', '使用 AI 编程客户端或 Ollama 等本地 AI 服务，并希望与项目堆栈一起管理。'], choiceNote: '两者都是有效选择——关键在于你需要简单的共享 PHP 堆栈，还是项目专属环境。', migrationTitle: '从 XAMPP 迁移到 FlyEnv', migrationSubtitle: '迁移现有项目很简单，大多数情况下无需重写应用。', migrationSteps: [{ title: '移动项目', desc: '将项目移动或保留在任意位置，不再必须放在 `htdocs` 中。' }, { title: '创建本地站点', desc: '在 FlyEnv 中导入或创建站点，并选择所需的运行时和服务设置。' }, { title: '导入数据库', desc: '使用文档中的凭据导入数据库转储，然后运行应用测试并调整扩展或环境变量。' }], guideLead: '需要更多背景？阅读', guideLink: 'FlyEnv 与 Docker、XAMPP 的综合指南', faqTitle: '常见问题', ctaTitle: '在 FlyEnv 中尝试下一个项目', ctaDesc: '创建本地站点，选择所需的运行时和服务，然后开始工作。'
      }
    : props.locale === 'id'
      ? {
          badge: 'Perbandingan', heroTagline: 'Satu stack bersama atau lingkungan khusus tiap proyek?', heroDesc: 'XAMPP adalah stack PHP all-in-one yang sederhana untuk penggunaan umum. FlyEnv memungkinkan setiap proyek lokal memakai runtime, server web, database, dan layanan yang dibutuhkannya.', download: 'Unduh FlyEnv', readSummary: 'Baca ringkasan cepat', freeOpen: 'Gratis dan sumber terbuka', xamppShared: 'Satu stack bersama untuk semua proyek', webRoot: 'satu direktori root web', xamppCaption: 'Semua proyek berbagi stack dan konfigurasi yang sama.', flyenvDedicated: 'Lingkungan khusus tiap proyek', flyenvCaption: 'Setiap proyek memiliki runtime, layanan, port, dan konfigurasi sendiri.', differencesTitle: 'Tiga perbedaan praktis', differencesSubtitle: 'Bukan sekadar stack yang berbeda, melainkan cara pengembangan yang berbeda.', diff1Title: 'Beberapa versi runtime', diff1Desc: 'Jalankan berbagai versi PHP, Node.js, Python, dan lainnya secara berdampingan sambil menjaga proyek tetap independen.', diff2Title: 'Bangun stack sesuai kebutuhan proyek', diff2Desc: 'Pilih Nginx, Apache, Caddy, database, cache, pengujian email, penyimpanan objek, atau layanan proyek sendiri.', diff3Title: 'Domain khusus dan HTTPS', diff3Desc: 'Beri setiap situs lokal domain sendiri dan kelola sertifikat, port, aturan penulisan ulang, serta log dari satu tempat.', modelTitle: 'Satu stack bersama vs lingkungan per proyek', modelSubtitle: 'Idenya sama, pengalaman pengembangannya sangat berbeda.', sharedPhp: 'Stack PHP bersama', projectEnv: 'Lingkungan berbasis proyek', xamppBullets: ['Proyek biasanya berbagi versi runtime yang sama.', 'Kebutuhan berbeda memerlukan konfigurasi tambahan.', 'Konfigurasi runtime dan server umumnya dibagi bersama.'], flyenvBullets: ['Setiap proyek dapat memakai runtime dan layanan yang sesuai.', 'Situs lokal, port, log, dan HTTPS tetap terkelola bersama.', 'Mulai layanan terkait secara bersamaan saat dibutuhkan proyek.'], dailyTitle: 'Seperti apa dalam pengembangan sehari-hari', dailySubtitle: 'Lihat konfigurasi yang sama dalam alur runtime, situs, dan layanan FlyEnv.', card1Title: 'Beberapa versi runtime', card1Desc: 'Instal dan jalankan beberapa versi PHP serta runtime lain tanpa konflik.', card1Link: 'Jelajahi PHP di FlyEnv', card2Title: 'Domain lokal dan HTTPS', card2Desc: 'Buat situs lokal dengan domain khusus dan kelola sertifikat tanpa aturan htdocs.', card2Link: 'Jelajahi situs lokal', card3Title: 'Layanan lokal full-stack', card3Desc: 'Jalankan database, cache, pengujian email, penyimpanan objek, dan lainnya di samping proyek.', card3Link: 'Lihat lingkungan proyek', featureTitle: 'Perbandingan fitur', featureSubtitle: 'Perbandingan praktis kemampuan pengembangan lokal yang umum digunakan.', capability: 'Kemampuan', workflowTitle: 'Alur kerja Laravel umum', workflowSubtitle: 'Salah satu perbedaan lingkungan ini dalam praktik.', withXampp: 'Dengan XAMPP', withFlyenv: 'Dengan FlyEnv', choiceTitle: 'Mana yang harus dipilih?', choiceSubtitle: 'Keduanya berguna; pilihan tepat bergantung pada cara proyek Anda diatur.', chooseXampp: 'Pilih XAMPP jika', xamppChoices: ['Anda ingin bundel Apache + PHP + MariaDB yang familier.', 'Proyek dapat memakai lingkungan PHP yang hampir sama.', 'Anda terutama mengerjakan aplikasi PHP tradisional.', 'Anda menyukai stack lokal yang sederhana dan mapan.'], chooseFlyenv: 'Pilih FlyEnv jika', flyenvChoices: ['Proyek memerlukan versi PHP, Node.js, atau runtime lain yang berbeda.', 'Anda memakai Nginx, Caddy, PostgreSQL, Redis, atau layanan lokal lain.', 'Anda ingin mengelola domain khusus dan HTTPS dari satu tempat.', 'Anda menggunakan klien pengodean AI atau layanan AI lokal seperti Ollama dan ingin mengelolanya bersama stack proyek.'], choiceNote: 'Keduanya adalah pilihan yang valid—kecocokannya bergantung pada kebutuhan akan stack PHP bersama yang sederhana atau lingkungan khusus proyek.', migrationTitle: 'Beralih dari XAMPP ke FlyEnv', migrationSubtitle: 'Memindahkan proyek yang ada itu mudah; biasanya tidak perlu menulis ulang aplikasi.', migrationSteps: [{ title: 'Pindahkan proyek', desc: 'Pindahkan atau simpan proyek di lokasi mana pun. Proyek tidak lagi harus berada di dalam `htdocs`.' }, { title: 'Buat situs lokal', desc: 'Impor atau buat situs di FlyEnv lalu pilih runtime dan layanan yang diperlukan.' }, { title: 'Impor database', desc: 'Impor dump dengan kredensial yang didokumentasikan, jalankan pengujian aplikasi, lalu sesuaikan ekstensi atau variabel lingkungan.' }], guideLead: 'Butuh konteks lebih? Baca', guideLink: 'panduan lengkap FlyEnv vs Docker & XAMPP', faqTitle: 'Pertanyaan umum', ctaTitle: 'Coba proyek berikutnya di FlyEnv', ctaDesc: 'Buat situs lokal, pilih runtime dan layanan yang dibutuhkan, lalu mulai bekerja.'
        }
      : {
          badge: 'Comparison', heroTagline: 'One shared stack or one environment per project?', heroDesc: 'XAMPP is a simple, all-in-one PHP stack for general use. FlyEnv lets each local project use the runtimes, web servers, databases, and services it needs.', download: 'Download FlyEnv', readSummary: 'Read quick summary', freeOpen: 'Free and open source', xamppShared: 'One shared stack for all projects', webRoot: 'one web root', xamppCaption: 'All projects share the same stack and configuration.', flyenvDedicated: 'A dedicated environment per project', flyenvCaption: 'Each project has its own runtimes, services, ports, and configuration.', differencesTitle: 'Three practical differences', differencesSubtitle: 'Not just a different stack, but a different way to develop.', diff1Title: 'Multiple runtime versions', diff1Desc: 'Run different versions of PHP, Node.js, Python, and more side by side while keeping projects independent.', diff2Title: 'Build the stack each project needs', diff2Desc: 'Choose Nginx, Apache, Caddy, databases, caches, mail testing, object storage, or your own project service.', diff3Title: 'Custom domains and HTTPS', diff3Desc: 'Give every local site its own domain and manage local certificates, ports, rewrite rules, and logs from one place.', modelTitle: 'One shared stack vs one environment per project', modelSubtitle: 'Same idea, very different development experience.', sharedPhp: 'Shared PHP stack', projectEnv: 'Project-based environments', xamppBullets: ['Projects typically share the same runtime versions.', 'Different requirements need additional configuration.', 'Runtime and server configuration is generally shared.'], flyenvBullets: ['Each project can match its required runtimes and services.', 'Local sites, ports, logs, and HTTPS stay together.', 'Start related services together when a project needs them.'], dailyTitle: 'What this looks like in daily development', dailySubtitle: "See the same setup in FlyEnv's runtime, Host, and service workflows.", card1Title: 'Multiple runtime versions', card1Desc: 'Install and run multiple PHP versions, plus other runtimes, without conflicts.', card1Link: 'Explore PHP in FlyEnv', card2Title: 'Local domains and HTTPS', card2Desc: 'Create local sites with custom domains and manage local certificates without editing htdocs conventions.', card2Link: 'Explore local sites', card3Title: 'Full-stack local services', card3Desc: 'Run databases, caching, mail testing, object storage, and more beside the project.', card3Link: 'See project environments', featureTitle: 'Feature comparison', featureSubtitle: 'A practical comparison of commonly used local-development capabilities.', capability: 'Capability', workflowTitle: 'A typical Laravel workflow', workflowSubtitle: 'One common way these environments differ in practice.', withXampp: 'With XAMPP', withFlyenv: 'With FlyEnv', choiceTitle: 'Which one should you choose?', choiceSubtitle: 'Both tools can be useful; the right choice depends on how your projects are organised.', chooseXampp: 'Choose XAMPP if', xamppChoices: ['You want a familiar Apache + PHP + MariaDB bundle.', 'Your projects can use roughly the same PHP environment.', 'You mainly work with traditional PHP applications.', 'You prefer a simple, established local stack.'], chooseFlyenv: 'Choose FlyEnv if', flyenvChoices: ['Your projects need different PHP, Node.js, or other runtime versions.', 'You use Nginx, Caddy, PostgreSQL, Redis, or other local services.', 'You want custom domains and HTTPS managed from one place.', 'You use AI coding clients or local AI services such as Ollama and want them managed alongside your project stack.'], choiceNote: 'Both are valid choices—the better fit depends on whether you need a simple shared PHP stack or project-specific environments.', migrationTitle: 'Moving from XAMPP to FlyEnv', migrationSubtitle: 'It is easy to move your existing projects. No application rewrite is required in most cases.', migrationSteps: [{ title: 'Move your project', desc: 'Move or keep your project anywhere you prefer. Your project no longer needs to live inside `htdocs`.' }, { title: 'Create a local site', desc: 'Import or create a site in FlyEnv and select the required runtime and service settings.' }, { title: 'Import your database', desc: 'Import a dump with the documented credentials, then run your application tests and adjust extensions or environment variables.' }], guideLead: 'Need more context? Read the', guideLink: 'broader FlyEnv vs Docker & XAMPP guide', faqTitle: 'Frequently asked questions', ctaTitle: 'Try your next project in FlyEnv', ctaDesc: 'Create a local site, select the runtimes and services it needs, and start working.'
        }
  const xamppComparisonServices = [
    { name: 'Apache', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/apache.svg' },
    { name: 'PHP', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
    { name: 'MariaDB', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/mariadb.svg' },
    { name: 'phpMyAdmin', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' }
  ]

  const labels: Record<string, Record<string, string>> = {
    zh: {
      Available: '可用',
      'Not included': '未包含',
      Manual: '需手动配置',
      'Not available': '不可用',
      'Built-in': '内置',
      'Built-in option': '内置选项',
      'Bundled version': '捆绑版本',
      'Multiple managed versions': '多个托管版本',
      'MariaDB included': '包含 MariaDB',
      'Multiple database modules': '多个数据库模块',
      Bundled: '已捆绑',
      'Available through local tools': '可通过本地工具使用',
      'Built-in module': '内置模块',
      'Additional install': '需额外安装',
      'Built-in runtime modules': '内置运行时模块',
      'Built-in Host workflow': '内置站点工作流',
      'Manual or additional setup': '需手动或额外配置',
      'Manual configuration': '手动配置',
      'Managed local-site workflow': '托管的本地站点工作流',
      'Built-in project services': '内置项目服务',
      'Mailpit module': 'Mailpit 模块',
      'phpMyAdmin, pgAdmin, DbGate, Redis Commander': 'phpMyAdmin、pgAdmin、DbGate、Redis Commander',
      'FlyEnv MCP Server and AI CLI modules': 'FlyEnv MCP 服务器和 AI CLI 模块',
      Apache: 'Apache',
      PHP: 'PHP',
      'MariaDB / MySQL': 'MariaDB / MySQL',
      phpMyAdmin: 'phpMyAdmin',
      Nginx: 'Nginx',
      Caddy: 'Caddy',
      PostgreSQL: 'PostgreSQL',
      Redis: 'Redis',
      'Node.js / Python / Go': 'Node.js / Python / Go',
      'Local custom domains': '本地自定义域名',
      'Local HTTPS': '本地 HTTPS',
      'Startup groups': '启动组',
      'Mail testing': '邮件测试',
      'Database GUI tools': '数据库图形工具',
      'AI / MCP integration': 'AI / MCP 集成',
      'Start Apache and MariaDB.': '启动 Apache 和 MariaDB。',
      'Create or import a local site.': '创建或导入本地站点。',
      'Place or link the project into the local web root.': '将项目放入或链接到本地网站根目录。',
      'Select the PHP version and choose Apache, Nginx, or Caddy.': '选择 PHP 版本，并选择 Apache、Nginx 或 Caddy。',
      'Use the bundled PHP version and configure the application.': '使用捆绑的 PHP 版本并配置应用。',
      'Add a custom domain and enable local HTTPS when needed.': '添加自定义域名，并在需要时启用本地 HTTPS。',
      'Configure a virtual host if a custom domain is needed.': '需要自定义域名时配置虚拟主机。',
      'Start Redis, Mailpit, or other project services.': '启动 Redis、Mailpit 或其他项目服务。',
      'Configure HTTPS, Redis, or mail testing separately when required.': '需要时单独配置 HTTPS、Redis 或邮件测试。',
      'Save related services as a startup group if desired.': '如有需要，将相关服务保存为启动组。',
      'Do I need to change my project code?': '需要修改项目代码吗？',
      'Usually no. Recreate the local runtime, site, database, and environment variables, then run the application tests before switching daily work.': '通常不需要。重新创建本地运行时、站点、数据库和环境变量，然后运行应用测试即可开始日常工作。',
      'Do I have to move my projects out of htdocs?': '必须将项目移出 htdocs 吗？',
      'No. FlyEnv can use an existing project directory; it does not require the project to live inside the XAMPP web root.': '不需要。FlyEnv 可以使用现有项目目录，不要求项目位于 XAMPP 网站根目录内。',
      'Can I still use Apache with FlyEnv?': 'FlyEnv 还能使用 Apache 吗？',
      'Yes. Apache is available alongside Nginx and Caddy for local sites and project services.': '可以。Apache 与 Nginx、Caddy 一样可用于本地站点和项目服务。',
      'Does FlyEnv replace XAMPP completely?': 'FlyEnv 能完全替代 XAMPP 吗？',
      'It can replace the local workflow for many projects, but container-based production parity or a team standard may still call for another tool.': '它可以替代许多项目的本地工作流，但生产环境容器一致性或团队标准可能仍需要其他工具。',
      'Can I run different PHP versions for different projects?': '不同项目可以运行不同 PHP 版本吗？',
      'Yes. FlyEnv can manage multiple PHP versions and bind a project or local site to the version it needs.': '可以。FlyEnv 可管理多个 PHP 版本，并将项目或本地站点绑定到所需版本。',
      'Is XAMPP suitable for team usage?': 'XAMPP 适合团队使用吗？',
      'It can be a practical shared baseline for traditional PHP applications when everyone follows the same bundle and web-root conventions.': '如果团队遵循相同的软件包和网站根目录约定，它可以成为传统 PHP 应用的实用共享基线。',
      'Is FlyEnv free for local development?': 'FlyEnv 本地开发免费吗？',
      'FlyEnv is free and open source; see the licensing guide for the current details.': 'FlyEnv 免费且开源，详情请参阅许可证指南。',
      'Is XAMPP’s database MySQL or MariaDB?': 'XAMPP 使用 MySQL 还是 MariaDB？',
      'Current Apache Friends documentation identifies MariaDB in current XAMPP generations and notes compatibility with common MySQL workflows.': 'Apache Friends 当前文档显示，新版 XAMPP 使用 MariaDB，并兼容常见的 MySQL 工作流。'
    },
    id: {
      Available: 'Tersedia',
      'Not included': 'Tidak termasuk',
      Manual: 'Manual',
      'Not available': 'Tidak tersedia',
      'Built-in': 'Bawaan',
      'Built-in option': 'Opsi bawaan',
      'Bundled version': 'Versi bundel',
      'Multiple managed versions': 'Beberapa versi terkelola',
      'MariaDB included': 'MariaDB disertakan',
      'Multiple database modules': 'Berbagai modul database',
      Bundled: 'Terbundel',
      'Available through local tools': 'Tersedia melalui alat lokal',
      'Built-in module': 'Modul bawaan',
      'Additional install': 'Perlu instalasi tambahan',
      'Built-in runtime modules': 'Modul runtime bawaan',
      'Built-in Host workflow': 'Alur situs bawaan',
      'Manual or additional setup': 'Penyiapan manual atau tambahan',
      'Manual configuration': 'Konfigurasi manual',
      'Managed local-site workflow': 'Alur situs lokal terkelola',
      'Built-in project services': 'Layanan proyek bawaan',
      'Mailpit module': 'Modul Mailpit',
      'phpMyAdmin, pgAdmin, DbGate, Redis Commander': 'phpMyAdmin, pgAdmin, DbGate, Redis Commander',
      'FlyEnv MCP Server and AI CLI modules': 'Server MCP FlyEnv dan modul AI CLI',
      Apache: 'Apache',
      PHP: 'PHP',
      'MariaDB / MySQL': 'MariaDB / MySQL',
      phpMyAdmin: 'phpMyAdmin',
      Nginx: 'Nginx',
      Caddy: 'Caddy',
      PostgreSQL: 'PostgreSQL',
      Redis: 'Redis',
      'Node.js / Python / Go': 'Node.js / Python / Go',
      'Local custom domains': 'Domain lokal khusus',
      'Local HTTPS': 'HTTPS lokal',
      'Startup groups': 'Startup Groups',
      'Mail testing': 'Pengujian email',
      'Database GUI tools': 'Alat GUI database',
      'AI / MCP integration': 'Integrasi AI / MCP',
      'Start Apache and MariaDB.': 'Mulai Apache dan MariaDB.',
      'Create or import a local site.': 'Buat atau impor situs lokal.',
      'Place or link the project into the local web root.': 'Tempatkan atau tautkan proyek ke direktori root web lokal.',
      'Select the PHP version and choose Apache, Nginx, or Caddy.': 'Pilih versi PHP lalu gunakan Apache, Nginx, atau Caddy.',
      'Use the bundled PHP version and configure the application.': 'Gunakan versi PHP bundel dan konfigurasikan aplikasi.',
      'Add a custom domain and enable local HTTPS when needed.': 'Tambahkan domain khusus dan aktifkan HTTPS lokal bila perlu.',
      'Configure a virtual host if a custom domain is needed.': 'Konfigurasikan virtual host jika memerlukan domain khusus.',
      'Start Redis, Mailpit, or other project services.': 'Mulai Redis, Mailpit, atau layanan proyek lainnya.',
      'Configure HTTPS, Redis, or mail testing separately when required.': 'Konfigurasikan HTTPS, Redis, atau pengujian email secara terpisah bila perlu.',
      'Save related services as a startup group if desired.': 'Simpan layanan terkait sebagai Startup Group bila diinginkan.',
      'Do I need to change my project code?': 'Apakah saya perlu mengubah kode proyek?',
      'Usually no. Recreate the local runtime, site, database, and environment variables, then run the application tests before switching daily work.': 'Biasanya tidak. Buat ulang runtime lokal, situs, database, dan variabel lingkungan, lalu jalankan pengujian aplikasi sebelum mulai bekerja harian.',
      'Do I have to move my projects out of htdocs?': 'Apakah proyek harus dipindahkan dari htdocs?',
      'No. FlyEnv can use an existing project directory; it does not require the project to live inside the XAMPP web root.': 'Tidak. FlyEnv dapat memakai direktori proyek yang ada dan tidak mengharuskan proyek berada di direktori root web XAMPP.',
      'Can I still use Apache with FlyEnv?': 'Apakah saya masih bisa memakai Apache dengan FlyEnv?',
      'Yes. Apache is available alongside Nginx and Caddy for local sites and project services.': 'Bisa. Apache tersedia bersama Nginx dan Caddy untuk situs lokal dan layanan proyek.',
      'Does FlyEnv replace XAMPP completely?': 'Apakah FlyEnv sepenuhnya menggantikan XAMPP?',
      'It can replace the local workflow for many projects, but container-based production parity or a team standard may still call for another tool.': 'FlyEnv dapat menggantikan alur lokal banyak proyek, tetapi kesamaan produksi berbasis container atau standar tim mungkin tetap memerlukan alat lain.',
      'Can I run different PHP versions for different projects?': 'Bisakah proyek berbeda menjalankan versi PHP berbeda?',
      'Yes. FlyEnv can manage multiple PHP versions and bind a project or local site to the version it needs.': 'Bisa. FlyEnv dapat mengelola beberapa versi PHP dan mengikat proyek atau situs lokal ke versi yang diperlukan.',
      'Is XAMPP suitable for team usage?': 'Apakah XAMPP cocok untuk penggunaan tim?',
      'It can be a practical shared baseline for traditional PHP applications when everyone follows the same bundle and web-root conventions.': 'XAMPP dapat menjadi dasar bersama yang praktis untuk aplikasi PHP tradisional jika semua orang mengikuti bundel dan konvensi direktori root web yang sama.',
      'Is FlyEnv free for local development?': 'Apakah FlyEnv gratis untuk pengembangan lokal?',
      'FlyEnv is free and open source; see the licensing guide for the current details.': 'FlyEnv gratis dan sumber terbuka; lihat panduan lisensi untuk detail terbaru.',
      'Is XAMPP’s database MySQL or MariaDB?': 'Database XAMPP MySQL atau MariaDB?',
      'Current Apache Friends documentation identifies MariaDB in current XAMPP generations and notes compatibility with common MySQL workflows.': 'Dokumentasi Apache Friends saat ini menyebut MariaDB pada generasi XAMPP terbaru dan kompatibilitas dengan alur MySQL umum.'
    }
  }
  const tr = (value: string) => labels[props.locale ?? 'en']?.[value] ?? value

  const xamppProjects = ['/project-a', '/project-b', '/project-c']
  const projectLabel = (letter: string) => props.locale === 'zh' ? `项目 ${letter}` : props.locale === 'id' ? `Proyek ${letter}` : `Project ${letter}`
  const projectType = (type: 'node') => props.locale === 'zh' ? 'Node.js 应用' : props.locale === 'id' ? 'Aplikasi Node.js' : 'Node.js app'
  const projectDisplayName = (name: string) => props.locale === 'zh' ? name.replace(/^Project /, '项目 ') : props.locale === 'id' ? name.replace(/^Project /, 'Proyek ') : name

  const flyenvComparisonProjects = [
    {
      name: 'Project A',
      services: [
        { name: 'Nginx', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg' },
        { name: 'PHP 8.3', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
        { name: 'MySQL', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
        { name: 'Redis', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' }
      ]
    },
    {
      name: 'Project B',
      services: [
        { name: 'Apache', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/apache.svg' },
        { name: 'PHP 7.4', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
        { name: 'MariaDB', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/mariadb.svg' },
        { name: 'Mailpit' }
      ]
    },
    {
      name: 'Project C',
      services: [
        { name: 'Caddy', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/caddy.svg' },
        { name: 'Node.js', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/nodedotjs.svg' },
        { name: 'PostgreSQL', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/postgresql.svg' },
        { name: 'MinIO', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/minio.svg' }
      ]
    }
  ]

  const workflowSteps = [
    {
      xampp: 'Start Apache and MariaDB.',
      flyenv: 'Create or import a local site.'
    },
    {
      xampp: 'Place or link the project into the local web root.',
      flyenv: 'Select the PHP version and choose Apache, Nginx, or Caddy.'
    },
    {
      xampp: 'Use the bundled PHP version and configure the application.',
      flyenv: 'Add a custom domain and enable local HTTPS when needed.'
    },
    {
      xampp: 'Configure a virtual host if a custom domain is needed.',
      flyenv: 'Start Redis, Mailpit, or other project services.'
    },
    {
      xampp: 'Configure HTTPS, Redis, or mail testing separately when required.',
      flyenv: 'Save related services as a startup group if desired.'
    }
  ]

  const statusLabel = (value: string, available: boolean) => {
    if (available) return tr('Available')
    return value.includes('Not included') ? tr('Not included') : tr('Manual')
  }

  const featureRows = [
    { name: 'Apache', xampp: 'Built-in', flyenv: 'Built-in option', xamppOk: true, flyenvOk: true },
    {
      name: 'PHP',
      xampp: 'Bundled version',
      flyenv: 'Multiple managed versions',
      xamppOk: true,
      flyenvOk: true
    },
    {
      name: 'MariaDB / MySQL',
      xampp: 'MariaDB included',
      flyenv: 'Multiple database modules',
      xamppOk: true,
      flyenvOk: true
    },
    {
      name: 'phpMyAdmin',
      xampp: 'Bundled',
      flyenv: 'Available through local tools',
      xamppOk: true,
      flyenvOk: true
    },
    {
      name: 'Nginx',
      xampp: 'Not included',
      flyenv: 'Built-in option',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Caddy',
      xampp: 'Not included',
      flyenv: 'Built-in option',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'PostgreSQL',
      xampp: 'Not included',
      flyenv: 'Built-in module',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Redis',
      xampp: 'Additional install',
      flyenv: 'Built-in module',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Node.js / Python / Go',
      xampp: 'Not included',
      flyenv: 'Built-in runtime modules',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Local custom domains',
      xampp: 'Manual configuration',
      flyenv: 'Built-in Host workflow',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Local HTTPS',
      xampp: 'Manual or additional setup',
      flyenv: 'Managed local-site workflow',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Startup groups',
      xampp: 'Not available',
      flyenv: 'Built-in project services',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Mail testing',
      xampp: 'Additional install',
      flyenv: 'Mailpit module',
      xamppOk: false,
      flyenvOk: true
    },
    {
      name: 'Database GUI tools',
      xampp: 'phpMyAdmin',
      flyenv: 'phpMyAdmin, pgAdmin, DbGate, Redis Commander',
      xamppOk: true,
      flyenvOk: true
    },
    {
      name: 'AI / MCP integration',
      xampp: 'Not included',
      flyenv: 'FlyEnv MCP Server and AI CLI modules',
      xamppOk: false,
      flyenvOk: true
    }
  ]

  const faqs = [
    {
      question: 'Do I need to change my project code?',
      answer:
        'Usually no. Recreate the local runtime, site, database, and environment variables, then run the application tests before switching daily work.'
    },
    {
      question: 'Do I have to move my projects out of htdocs?',
      answer:
        'No. FlyEnv can use an existing project directory; it does not require the project to live inside the XAMPP web root.'
    },
    {
      question: 'Can I still use Apache with FlyEnv?',
      answer:
        'Yes. Apache is available alongside Nginx and Caddy for local sites and project services.'
    },
    {
      question: 'Does FlyEnv replace XAMPP completely?',
      answer:
        'It can replace the local workflow for many projects, but container-based production parity or a team standard may still call for another tool.'
    },
    {
      question: 'Can I run different PHP versions for different projects?',
      answer:
        'Yes. FlyEnv can manage multiple PHP versions and bind a project or local site to the version it needs.'
    },
    {
      question: 'Is XAMPP suitable for team usage?',
      answer:
        'It can be a practical shared baseline for traditional PHP applications when everyone follows the same bundle and web-root conventions.'
    },
    {
      question: 'Is FlyEnv free for local development?',
      answer: 'FlyEnv is free and open source; see the licensing guide for the current details.'
    },
    {
      question: 'Is XAMPP’s database MySQL or MariaDB?',
      answer:
        'Current Apache Friends documentation identifies MariaDB in current XAMPP generations and notes compatibility with common MySQL workflows.'
    }
  ]
</script>
