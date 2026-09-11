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
            {{ tr('Comparison') }}
          </p>
          <h1
            class="!m-0 !border-0 !p-0 !text-4xl !leading-tight font-black tracking-tight text-slate-950 sm:!text-5xl lg:!text-6xl dark:text-white"
          >
            {{ tr('FlyEnv vs Docker') }}
            <span
              class="mt-3 block text-2xl font-bold leading-tight text-slate-700 sm:text-3xl lg:text-4xl dark:text-slate-200"
            >
              {{ tr('Native services or containerized environments?') }}
            </span>
          </h1>
          <p
            class="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300"
          >
            {{ tr('FlyEnv runs development runtimes and services natively on your machine. Docker packages applications and dependencies into containers. Both can build complete local environments, but they optimize for different goals.') }}
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <a
              :href="localizedHref('/download')"
              class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold !text-white no-underline shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              {{ tr('Download FlyEnv') }}
            </a>
            <a
              href="#comparison"
              class="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white/80 px-5 py-3 text-sm font-bold !text-slate-800 no-underline transition hover:border-blue-400 hover:text-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:border-slate-700 dark:bg-slate-900/70 dark:!text-slate-100 dark:hover:border-blue-400 dark:hover:text-blue-300"
            >
              {{ tr('Read quick summary') }}
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
              ><span class="text-blue-600">✓</span> {{ tr('Free and open source') }}</span
            >
          </div>
        </div>

        <div class="grid items-stretch gap-5 sm:grid-cols-2">
          <article
            class="rounded-3xl border border-orange-200 bg-white/90 p-6 shadow-xl shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-900/90"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-orange-500 text-xl font-black text-white"
                >D</span
              >
              <div>
                <h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">Docker</h2>
                <p
                  class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400"
                >
                  {{ tr('Containerized stack') }}
                </p>
              </div>
            </div>
            <div
              class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
            >
              <p
                class="!m-0 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                {{ tr('Host OS') }}
              </p>
              <div class="flex h-5 items-center justify-center text-sm font-bold text-orange-400">
                ↓
              </div>
              <div
                class="rounded-xl border border-orange-200 bg-white p-3 dark:border-orange-900/60 dark:bg-slate-900"
              >
                <p
                  class="!m-0 text-[10px] font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300"
                >
                  Docker
                </p>
                <div class="mt-2 grid grid-cols-4 gap-1">
                  <span
                    v-for="service in nativeServices"
                    :key="service.name"
                    class="flex flex-col items-center gap-0.5 rounded-md border border-orange-100 bg-orange-50/70 px-1 py-1.5 text-center text-[9px] text-slate-600 dark:border-orange-900/60 dark:bg-orange-950/30 dark:text-slate-300"
                    ><img :src="service.icon" :alt="service.name" class="h-3.5 w-3.5" />{{
                      service.name
                    }}</span
                  >
                </div>
              </div>
            </div>
            <p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
            >
              {{ tr('Images, containers, networks and volumes defined as code.') }}
            </p>
          </article>

          <article
            class="rounded-3xl border border-sky-200 bg-white/90 p-6 shadow-xl shadow-blue-950/5 dark:border-sky-900/60 dark:bg-slate-900/90"
          >
            <div class="flex items-center gap-2.5">
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 text-xl font-black text-white"
                >F</span
              >
              <div>
                <h2 class="!m-0 !border-0 !p-0 !text-base !leading-5 font-black">FlyEnv</h2>
                <p
                  class="!m-0 text-[11px] font-medium !leading-4 text-slate-500 dark:text-slate-400"
                >
                  {{ tr('Native services on the host OS') }}
                </p>
              </div>
            </div>
            <div
              class="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800/70"
            >
              <p
                class="!m-0 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400"
              >
                {{ tr('Host OS') }}
              </p>
              <div class="mt-2 grid grid-cols-4 gap-1">
                <span
                  v-for="service in nativeServices"
                  :key="service.name"
                  class="flex flex-col items-center gap-0.5 text-center text-[10px] text-slate-600 dark:text-slate-300"
                  ><img :src="service.icon" :alt="service.name" class="h-4 w-4" />{{
                    service.name
                  }}</span
                >
              </div>
            </div>
            <p
              class="!m-0 mt-3 text-center text-[10px] font-medium leading-4 text-slate-600 dark:text-slate-300"
            >
              {{ tr('Runtimes and services run directly as native processes.') }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      id="comparison"
      class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
      aria-labelledby="model-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="model-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('Same Laravel project, two models') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('Same application, different execution model.') }}
          </p>
        </header>
        <div class="relative mt-12 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
          <article
            class="h-full rounded-3xl border border-orange-200 bg-white p-5 shadow-sm dark:border-orange-900/60 dark:bg-slate-950"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >D</span
              >
              <div>
                <h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">Docker</h3>
                <p class="!m-0 text-sm text-slate-500 dark:text-slate-400">
                  {{ tr('Containerized stack defined in compose.yaml') }}
                </p>
              </div>
            </div>
            <div
              class="mt-6 rounded-2xl border border-orange-100 bg-orange-50/70 p-4 dark:border-orange-950 dark:bg-orange-950/30"
            >
              <p
                class="!m-0 text-[11px] font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300"
              >
                {{ tr('Host OS') }}
              </p>
              <div class="flex h-6 items-center justify-center text-sm font-bold text-orange-400">
                ↓
              </div>
              <div
                class="rounded-xl border border-orange-200 bg-white p-3 dark:border-orange-900/60 dark:bg-slate-900"
              >
                <p
                  class="!m-0 text-[11px] font-bold uppercase tracking-wide text-orange-700 dark:text-orange-300"
                >
                  Docker
                </p>
                <div class="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  <div
                    v-for="service in nativeServices"
                    :key="service.name"
                    class="flex flex-col items-center gap-1 rounded-xl border border-orange-100 bg-orange-50/70 px-2 py-2.5 text-center dark:border-orange-900/60 dark:bg-slate-950"
                  >
                    <img :src="service.icon" :alt="service.name" class="h-5 w-5" />
                    <span class="text-[10px] font-medium text-slate-700 dark:text-slate-200"
                      >{{ service.name }} {{ tr('container') }}</span
                    >
                  </div>
                </div>
                <div class="mt-3 grid gap-1.5">
                  <p
                    class="!m-0 rounded-lg bg-orange-100/70 px-2.5 py-1.5 text-[10px] font-bold text-orange-800 dark:bg-orange-950/60 dark:text-orange-200"
                  >
                    {{ tr('network: app-net') }}
                  </p>
                  <p
                    class="!m-0 rounded-lg bg-orange-100/70 px-2.5 py-1.5 text-[10px] font-bold text-orange-800 dark:bg-orange-950/60 dark:text-orange-200"
                  >
                    {{ tr('volumes: db-data, redis-data') }}
                  </p>
                  <p
                    class="!m-0 inline-flex items-center gap-1.5 rounded-lg border border-dashed border-orange-300 px-2.5 py-1.5 font-mono text-[10px] font-bold text-orange-800 dark:border-orange-800 dark:text-orange-200"
                  >
                    <span class="text-orange-400 dark:text-orange-500">▤</span>compose.yaml
                  </p>
                </div>
              </div>
            </div>
            <p
              class="!m-0 mt-4 text-center text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {{ tr('Containerized stack defined in compose.yaml.') }}
            </p>
          </article>

          <div
            class="hidden h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-sm font-black text-white shadow-lg shadow-blue-600/20 md:flex"
          >
            VS
          </div>

          <article
            class="h-full rounded-3xl border border-sky-200 bg-white p-5 shadow-sm dark:border-sky-900/60 dark:bg-slate-950"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              >
              <div>
                <h3 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black">FlyEnv</h3>
                <p class="!m-0 text-sm text-slate-500 dark:text-slate-400">
                  {{ tr('Native services on the host OS') }}
                </p>
              </div>
            </div>
            <div
              class="mt-6 rounded-2xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-950 dark:bg-blue-950/30"
            >
              <p
                class="!m-0 text-[11px] font-bold uppercase tracking-wide text-blue-700 dark:text-blue-300"
              >
                {{ tr('Host OS') }}
              </p>
              <div class="mt-3 grid gap-2">
                <div
                  v-for="service in nativeServices"
                  :key="service.name"
                  class="flex items-center justify-between rounded-xl border border-blue-100 bg-white px-3 py-2.5 dark:border-blue-900/60 dark:bg-slate-900"
                >
                  <span
                    class="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                    ><img :src="service.icon" :alt="service.name" class="h-4 w-4" />{{
                      service.name
                    }}</span
                  >
                  <span
                    class="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                    >{{ tr('native') }}</span
                  >
                </div>
                <div
                  class="flex items-center justify-between rounded-xl border border-blue-100 bg-white px-3 py-2.5 dark:border-blue-900/60 dark:bg-slate-900"
                >
                  <span
                    class="inline-flex items-center gap-2 text-xs font-bold text-slate-700 dark:text-slate-200"
                    ><img
                      src="https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg"
                      alt="Laravel"
                      class="h-4 w-4"
                    />{{ tr('Project files') }}</span
                  >
                  <span
                    class="rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                    >{{ tr('normal filesystem') }}</span
                  >
                </div>
              </div>
            </div>
            <p
              class="!m-0 mt-4 text-center text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {{ tr('Native services on the host OS.') }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="differences-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="differences-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('Three key differences') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('The tools share a goal — a working environment — but take different paths to get there.') }}
          </p>
        </header>
        <div class="mt-12 grid items-stretch gap-5 md:grid-cols-3">
          <article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >01</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black">
              {{ tr('Native processes vs containers') }}
            </h3>
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {{ tr('FlyEnv runs PHP, MySQL, Redis, and Nginx directly as native host services. Docker organizes the same pieces as images, containers, networks, and volumes — with strong isolation between them and the host.') }}
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >02</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black">
              {{ tr('Local simplicity vs environment portability') }}
            </h3>
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {{ tr("FlyEnv offers a faster mental model for local development — no Dockerfile or Compose file is required for ordinary local services. Docker's environment definition travels with the project and can align development with CI, staging, and production.") }}
            </p>
          </article>
          <article
            class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <span
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-lg font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300"
              >03</span
            >
            <h3 class="!mt-5 !border-0 !p-0 !text-xl !leading-7 font-black">
              {{ tr('GUI-managed services vs infrastructure-as-code') }}
            </h3>
            <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
              {{ tr('FlyEnv — pick a version in the GUI, start the service, create a site. Docker — define services in compose.yaml and start the whole stack with one command.') }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="daily-title">
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="daily-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('What this looks like in daily development') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('The same stack, experienced through two different workflows.') }}
          </p>
        </header>
        <div class="mt-12 grid items-stretch gap-6 md:grid-cols-3">
          <article
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="aspect-[16/10] bg-slate-950 p-4">
              <img
                src="https://oss.macphpstudy.com/image/quick-start-3.webp"
                :alt="tr('FlyEnv service management interface')"
                class="h-full w-full rounded-2xl object-cover object-top"
                loading="lazy"
              />
            </div>
            <div class="p-6">
              <h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">
                {{ tr('Native service management') }}
              </h3>
              <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {{ tr('FlyEnv services are installed, started, and stopped from the desktop app — versions, ports, and configuration included.') }}
              </p>
            </div>
          </article>
          <article
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="aspect-[16/10] bg-slate-950 p-4">
              <div
                class="flex h-full w-full flex-col justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 font-mono text-xs leading-6 text-slate-300"
              >
                <p class="!m-0"><span class="text-sky-400">services:</span></p>
                <p class="!m-0 pl-4">
                  <span class="text-emerald-400">app:</span>
                  <span class="text-slate-500"> # image, ports, volumes</span>
                </p>
                <p class="!m-0 pl-4">
                  <span class="text-emerald-400">db:</span>
                  <span class="text-slate-500"> # image, environment</span>
                </p>
                <p class="!m-0 pl-4">
                  <span class="text-emerald-400">redis:</span>
                  <span class="text-slate-500"> # image, networks</span>
                </p>
              </div>
            </div>
            <div class="p-6">
              <h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">
                {{ tr('Containerized service definition') }}
              </h3>
              <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {{ tr('Docker services are declared as images, ports, volumes, and networks in YAML — a precise, version-controlled definition of the environment.') }}
              </p>
            </div>
          </article>
          <article
            class="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <div class="aspect-[16/10] bg-slate-950 p-4">
              <div
                class="flex h-full w-full flex-col items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
              >
                <span
                  class="rounded-lg bg-orange-500/20 px-3 py-1 text-xs font-bold text-orange-300"
                  >compose.yaml</span
                >
                <span class="text-slate-500">↓</span>
                <div class="flex flex-wrap items-center justify-center gap-1.5">
                  <span
                    class="rounded-md border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300"
                    >{{ tr('Development') }}</span
                  >
                  <span class="text-slate-500">→</span>
                  <span
                    class="rounded-md border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300"
                    >CI</span
                  >
                  <span class="text-slate-500">→</span>
                  <span
                    class="rounded-md border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300"
                    >{{ tr('Staging') }}</span
                  >
                  <span class="text-slate-500">→</span>
                  <span
                    class="rounded-md border border-slate-700 px-2 py-1 text-[10px] font-bold text-slate-300"
                    >{{ tr('Production') }}</span
                  >
                </div>
              </div>
            </div>
            <div class="p-6">
              <h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">
                {{ tr('Development/production parity') }}
              </h3>
              <p class="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                {{ tr("Docker's strength: the same definitions can run in CI, staging, and production. FlyEnv optimizes for the local machine instead.") }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="feature-table-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="feature-table-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('Feature comparison') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('A comparison of models, not feature counts — both sides can build a complete local environment.') }}
          </p>
        </header>
        <div
          class="mt-12 overflow-x-auto rounded-2xl border-x border-b border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-950"
        >
          <table
            class="!table !my-0 min-w-[760px] w-full border-collapse text-left text-base leading-6 lg:min-w-[860px]"
          >
            <thead
              class="bg-slate-100 text-sm uppercase tracking-wide text-slate-600 dark:bg-slate-900 dark:text-slate-300"
            >
              <tr>
                <th class="px-6 py-0 font-bold">{{ tr('Capability') }}</th>
                <th class="px-6 py-0 font-bold">{{ tr('Docker / Docker Compose') }}</th>
                <th class="px-6 py-0 font-bold">FlyEnv</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
              <tr v-for="row in featureRows" :key="row.name">
                <th class="px-6 py-0 font-bold text-slate-800 dark:text-slate-100">{{ tr(row.name) }}</th>
                <td class="px-6 py-0 text-slate-600 dark:text-slate-300">{{ tr(row.docker) }}</td>
                <td class="px-6 py-0 text-slate-600 dark:text-slate-300">{{ tr(row.flyenv) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="workflow-title">
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="workflow-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('A typical Laravel project, two ways') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('A side-by-side look at the same kind of work.') }}
          </p>
        </header>
        <div
          class="mt-10 overflow-hidden rounded-3xl border border-slate-200 shadow-sm dark:border-slate-800"
        >
          <div
            class="hidden grid-cols-2 border-b border-slate-200 bg-white md:grid dark:border-slate-800 dark:bg-slate-950"
          >
            <div
              class="flex items-center gap-3 border-r border-slate-200 px-6 py-5 dark:border-slate-800"
            >
              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-orange-500 font-black text-white"
                >D</span
              >
              <h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr('With Docker') }}</h3>
            </div>
            <div class="flex items-center gap-3 px-6 py-5">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 font-black text-white"
                >F</span
              >
              <h3 class="!m-0 !border-0 !p-0 !text-xl !leading-7 font-black">{{ tr('With FlyEnv') }}</h3>
            </div>
          </div>
          <div class="divide-y divide-slate-200 dark:divide-slate-800">
            <div
              v-for="(row, index) in workflowRows"
              :key="`${row.docker}-${index}`"
              class="grid gap-0 md:grid-cols-2"
            >
              <div
                class="border-b border-slate-200 bg-orange-50/60 px-5 py-4 dark:border-slate-800 dark:bg-orange-950/20 md:border-b-0 md:border-r"
              >
                <p
                  class="mb-1 text-[11px] font-bold uppercase tracking-wide text-orange-700 md:hidden dark:text-orange-300"
                >
                  {{ tr('With Docker') }}
                </p>
                <div
                  class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-bold text-white"
                    >{{ index + 1 }}</span
                  >
                  <p class="!m-0">{{ tr(row.docker) }}</p>
                </div>
              </div>
              <div class="bg-blue-50/60 px-5 py-4 dark:bg-blue-950/20">
                <p
                  class="mb-1 text-[11px] font-bold uppercase tracking-wide text-blue-700 md:hidden dark:text-blue-300"
                >
                  {{ tr('With FlyEnv') }}
                </p>
                <div
                  class="flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-200"
                >
                  <span
                    class="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white"
                    >{{ index + 1 }}</span
                  >
                  <p class="!m-0">{{ tr(row.flyenv) }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p
          class="!mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
        >
          {{ tr("Docker's additional configuration is also what makes the environment portable and reproducible across machines and deployment stages.") }}
        </p>
      </div>
    </section>

    <section
      class="bg-slate-50 px-6 py-20 sm:px-10 sm:py-24 lg:px-16 dark:bg-slate-900/50"
      aria-labelledby="choice-title"
    >
      <div class="mx-auto max-w-7xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="choice-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('Which one should you choose?') }}
          </h2>
          <p class="mt-3 text-base leading-7 text-slate-600 dark:text-slate-300">
            {{ tr('Both tools can be useful; the right choice depends on your workflow.') }}
          </p>
        </header>
        <div class="mt-10 grid items-stretch gap-3 md:grid-cols-3">
          <article
            class="h-full rounded-3xl border-2 border-orange-200 bg-white p-8 shadow-md shadow-orange-950/5 dark:border-orange-900/60 dark:bg-slate-950"
          >
            <h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-orange-700 dark:text-orange-300"
            >
              {{ tr('Choose Docker if') }}
            </h3>
            <ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200">
              <li
                v-for="item in dockerChoiceItems"
                :key="item"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-600 dark:bg-orange-950/60 dark:text-orange-300"
                  >✓</span
                >
                <span>{{ tr(item) }}</span>
              </li>
            </ul>
          </article>
          <article
            class="h-full rounded-3xl border-2 border-blue-200 bg-white p-8 shadow-md shadow-blue-950/5 dark:border-blue-900/60 dark:bg-slate-950"
          >
            <h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-blue-700 dark:text-blue-300"
            >
              {{ tr('Choose FlyEnv if') }}
            </h3>
            <ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200">
              <li
                v-for="item in flyenvChoiceItems"
                :key="item"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 text-sm font-black text-blue-600 dark:bg-blue-950/60 dark:text-blue-300"
                  >✓</span
                >
                <span>{{ tr(item) }}</span>
              </li>
            </ul>
          </article>
          <article
            class="h-full rounded-3xl border-2 border-emerald-200 bg-white p-8 shadow-md shadow-emerald-950/5 dark:border-emerald-900/60 dark:bg-slate-950"
          >
            <h3
              class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black text-emerald-700 dark:text-emerald-300"
            >
              {{ tr('Consider both if') }}
            </h3>
            <ul class="mt-6 space-y-4 text-base leading-6 text-slate-700 dark:text-slate-200">
              <li
                v-for="item in bothChoiceItems"
                :key="item"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-300"
                  >✓</span
                >
                <span>{{ tr(item) }}</span>
              </li>
            </ul>
          </article>
        </div>
        <p
          class="!mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
        >
          {{ tr('FlyEnv and Docker are not mutually exclusive — many teams use native services locally and containers everywhere else.') }}
        </p>
      </div>
    </section>

    <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="faq-title">
      <div class="mx-auto max-w-5xl">
        <header class="mx-auto max-w-3xl text-center">
          <h2
            id="faq-title"
            class="!m-0 !border-0 !p-0 !text-3xl !leading-tight font-black tracking-tight sm:!text-4xl"
          >
            {{ tr('Frequently asked questions') }}
          </h2>
        </header>
        <div class="mt-10 grid items-stretch gap-3 md:grid-cols-2">
          <article
            v-for="faq in faqs"
            :key="faq.question"
            class="h-full rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm dark:border-slate-800 dark:bg-slate-950"
          >
            <h3
              class="!m-0 !border-0 !p-0 text-base font-bold leading-6 text-slate-800 dark:text-slate-100"
            >
              {{ tr(faq.question) }}
            </h3>
            <p class="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
              {{ tr(faq.answer) }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="px-6 py-16 sm:px-10 lg:px-16">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-7 rounded-3xl bg-gradient-to-r from-blue-950 via-blue-800 to-sky-700 px-7 py-12 text-white shadow-2xl shadow-blue-950/20 sm:flex-row sm:items-center sm:justify-between sm:px-10"
      >
        <div>
          <h2 class="!m-0 !border-0 !p-0 !text-2xl !leading-8 font-black sm:!text-3xl">
            {{ tr('Try native local development with FlyEnv') }}
          </h2>
          <p class="mt-2 max-w-2xl text-sm leading-6 text-blue-100">
            {{ tr('Create a local site, select the runtimes and services it needs, and start working — no containers required.') }}
          </p>
        </div>
        <a
          :href="localizedHref('/download')"
          class="inline-flex shrink-0 items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold !text-blue-900 no-underline transition hover:bg-blue-50"
          >{{ tr('Download FlyEnv') }}</a
        >
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
  const props = defineProps<{ locale?: 'en' | 'zh' | 'id' | 'es' }>()
  import { computed } from 'vue'

  const locale = props.locale ?? 'en'
  const localizedHref = (path: string) => (locale === 'en' ? path : `/${locale}${path}`)
  const translations: Record<string, Record<string, string>> = {
    zh: {
      Comparison: '比较', 'FlyEnv vs Docker': 'FlyEnv 与 Docker', 'Native services or containerized environments?': '原生服务，还是容器化环境？',
      'FlyEnv runs development runtimes and services natively on your machine. Docker packages applications and dependencies into containers. Both can build complete local environments, but they optimize for different goals.': 'FlyEnv 在你的计算机上以原生方式运行开发运行时和服务。Docker 将应用及其依赖打包到容器中。两者都能构建完整的本地环境，但优化目标不同。',
      'Download FlyEnv': '下载 FlyEnv', 'Read quick summary': '阅读快速摘要', 'Free and open source': '免费且开源', 'Containerized stack': '容器化堆栈', 'Host OS': '主机操作系统', 'Native services on the host OS': '主机操作系统上的原生服务', 'Native services on the host OS.': '主机操作系统上的原生服务。', 'Images, containers, networks and volumes defined as code.': '通过代码定义镜像、容器、网络和卷。', 'Runtimes and services run directly as native processes.': '运行时和服务直接作为原生进程运行。',
      'Same Laravel project, two models': '同一个 Laravel 项目，两种模式', 'Same application, different execution model.': '相同应用，不同执行模型。', 'Containerized stack defined in compose.yaml': '在 compose.yaml 中定义的容器化堆栈', 'Containerized stack defined in compose.yaml.': '在 compose.yaml 中定义的容器化堆栈。', container: '容器', 'network: app-net': '网络：app-net', 'volumes: db-data, redis-data': '卷：db-data、redis-data', native: '原生', 'Project files': '项目文件', 'normal filesystem': '普通文件系统',
      'Three key differences': '三个关键差异', 'The tools share a goal — a working environment — but take different paths to get there.': '两款工具的目标都是提供可用环境，但实现路径不同。', 'Native processes vs containers': '原生进程 vs 容器', 'FlyEnv runs PHP, MySQL, Redis, and Nginx directly as native host services. Docker organizes the same pieces as images, containers, networks, and volumes — with strong isolation between them and the host.': 'FlyEnv 直接将 PHP、MySQL、Redis 和 Nginx 作为主机原生服务运行。Docker 则将它们组织为镜像、容器、网络和卷，与主机之间保持强隔离。', 'Local simplicity vs environment portability': '本地简洁性 vs 环境可移植性', "FlyEnv offers a faster mental model for local development — no Dockerfile or Compose file is required for ordinary local services. Docker's environment definition travels with the project and can align development with CI, staging, and production.": 'FlyEnv 为本地开发提供更简单的思路，普通本地服务无需编写 Dockerfile 或 Compose 文件。Docker 的环境定义随项目一起保存，可让开发环境与 CI、预发布和生产保持一致。', 'GUI-managed services vs infrastructure-as-code': '图形界面管理服务 vs 基础设施即代码', 'FlyEnv — pick a version in the GUI, start the service, create a site. Docker — define services in compose.yaml and start the whole stack with one command.': 'FlyEnv：在图形界面选择版本、启动服务、创建站点。Docker：在 compose.yaml 中定义服务，再用一条命令启动整个堆栈。',
      'What this looks like in daily development': '日常开发中的实际体验', 'The same stack, experienced through two different workflows.': '相同堆栈，两种不同工作流。', 'Native service management': '原生服务管理', 'FlyEnv services are installed, started, and stopped from the desktop app — versions, ports, and configuration included.': 'FlyEnv 服务可在桌面应用中安装、启动和停止，并统一管理版本、端口和配置。', 'Containerized service definition': '容器化服务定义', 'Docker services are declared as images, ports, volumes, and networks in YAML — a precise, version-controlled definition of the environment.': 'Docker 服务以 YAML 中的镜像、端口、卷和网络声明，形成精确且可版本控制的环境定义。', 'Development/production parity': '开发与生产一致性', "Docker's strength: the same definitions can run in CI, staging, and production. FlyEnv optimizes for the local machine instead.": 'Docker 的优势在于同一套定义可运行于 CI、预发布和生产环境；FlyEnv 则专注于本地计算机体验。',
      'Feature comparison': '功能对比', 'A comparison of models, not feature counts — both sides can build a complete local environment.': '比较的是运行模式，而不是功能数量——两者都能构建完整的本地环境。', Capability: '能力', 'Docker / Docker Compose': 'Docker / Docker Compose',
      'A typical Laravel project, two ways': '典型 Laravel 项目的两种方式', 'A side-by-side look at the same kind of work.': '并排查看同类工作的处理方式。', 'With Docker': '使用 Docker', 'With FlyEnv': '使用 FlyEnv', "Docker's additional configuration is also what makes the environment portable and reproducible across machines and deployment stages.": 'Docker 的额外配置也正是环境能够在不同计算机和部署阶段之间移植并复现的原因。',
      'Which one should you choose?': '应该选择哪一个？', 'Both tools can be useful; the right choice depends on your workflow.': '两款工具都很有用，正确选择取决于你的工作流。', 'Choose Docker if': '选择 Docker 的情况', 'Choose FlyEnv if': '选择 FlyEnv 的情况', 'Consider both if': '考虑结合使用的情况', 'FlyEnv and Docker are not mutually exclusive — many teams use native services locally and containers everywhere else.': 'FlyEnv 和 Docker 并不互斥——许多团队在本地使用原生服务，在其他环境使用容器。',
      'Frequently asked questions': '常见问题', 'Try native local development with FlyEnv': '使用 FlyEnv 尝试原生本地开发', 'Create a local site, select the runtimes and services it needs, and start working — no containers required.': '创建本地站点，选择所需运行时和服务，然后开始工作——无需容器。', Development: '开发', Staging: '预发布', Production: '生产', CI: 'CI',
      'Execution model': '执行模式', Containers: '容器', 'Native host processes': '主机原生进程', 'Environment definition': '环境定义', 'Dockerfile / Compose YAML': 'Dockerfile / Compose YAML', 'GUI and project configuration': '图形界面和项目配置', Isolation: '隔离', 'Strong container isolation': '强容器隔离', 'Host-level services': '主机级服务', 'Production portability': '生产环境可移植性', Strong: '强', 'Not the primary goal': '不是主要目标', 'CI/CD portability': 'CI/CD 可移植性', 'Limited / not primary': '有限 / 非主要目标', 'Local domains / HTTPS': '本地域名 / HTTPS', 'Configure via stack or proxy': '通过堆栈或代理配置', 'Built-in local site workflow': '内置本地站点工作流', 'Runtime versions': '运行时版本', 'Container image tags': '容器镜像标签', 'Managed local versions': '托管的本地版本', 'Database services': '数据库服务', 'Container images': '容器镜像', 'Managed native modules': '托管的原生模块', Networking: '网络', 'Docker networks': 'Docker 网络', 'Host networking': '主机网络', Volumes: '卷', 'Docker volumes / bind mounts': 'Docker 卷 / 绑定挂载', 'Native filesystem': '原生文件系统', 'Project startup': '项目启动', 'docker compose up': 'docker compose up', 'UI and Startup Groups': '图形界面和启动组', 'Resource overhead': '资源开销', 'Docker runtime or VM depending on OS': '取决于操作系统的 Docker 运行时或虚拟机', 'Native processes': '原生进程', 'GUI management': '图形界面管理', 'Docker Desktop and tools': 'Docker Desktop 和工具', 'Best suited for': '最适合', 'Portable, reproducible container environments': '可移植、可复现的容器环境', 'Native local development': '原生本地开发',
      'Write or select Dockerfiles and images': '编写或选择 Dockerfile 和镜像', 'Create compose.yaml': '创建 compose.yaml', 'Configure ports': '配置端口', 'Configure volumes': '配置卷', 'Configure networks': '配置网络', 'Start with docker compose up': '使用 docker compose up 启动', 'Select the PHP version': '选择 PHP 版本', 'Create a local site': '创建本地站点', 'Start the database and cache': '启动数据库和缓存', 'Enable HTTPS': '启用 HTTPS', 'Start the project services': '启动项目服务', 'Continue with the project setup': '继续项目设置', 'Open the site and start developing': '打开站点并开始开发',
      'Production parity matters.': '需要与生产环境保持一致。', 'Your team already deploys containers.': '团队已经使用容器部署。', 'You need strong environment isolation.': '需要强环境隔离。', 'You need reproducible CI, staging and dev environments.': '需要可复现的 CI、预发布和开发环境。', 'Your project already includes a Dockerfile or compose.yaml.': '项目已经包含 Dockerfile 或 compose.yaml。', 'You mainly need a fast native local development environment.': '主要需要快速的原生本地开发环境。', "You don't need container isolation.": '不需要容器隔离。', 'You want to manage runtimes and services through a desktop UI.': '希望通过桌面界面管理运行时和服务。', 'You prefer native filesystem and network performance with direct local tooling.': '偏好原生文件系统和网络性能，以及直接使用本地工具。', 'You work on projects that do not already require containers.': '项目本身不要求使用容器。', 'Use FlyEnv for native day-to-day development, while keeping Docker for CI, deployment, integration tests, or projects that require container parity.': '日常开发使用 FlyEnv 原生环境，同时为 CI、部署、集成测试或要求容器一致性的项目保留 Docker。', 'You develop natively but the team standardizes on containers for delivery.': '你使用原生方式开发，但团队以容器作为交付标准。', 'Different projects on the same machine have different requirements.': '同一台计算机上的不同项目有不同需求。',
      'Is FlyEnv a replacement for Docker?': 'FlyEnv 能替代 Docker 吗？', 'No. FlyEnv manages native local services; Docker packages apps into containers. They solve different problems and can be used together.': '不能。FlyEnv 管理原生本地服务；Docker 将应用打包到容器中。两者解决不同问题，也可以结合使用。', 'When should I use Docker instead of FlyEnv?': '什么时候应该使用 Docker 而不是 FlyEnv？', 'When production parity, isolation, or reproducible CI/staging environments matter, or when the project already ships a compose.yaml.': '当生产一致性、隔离性或可复现的 CI/预发布环境很重要，或者项目已经提供 compose.yaml 时。', 'When is FlyEnv the better fit?': '什么时候 FlyEnv 更合适？', 'When you want a fast native local environment with managed runtimes, local domains and HTTPS, without writing Dockerfiles or Compose files.': '当你希望获得快速的原生本地环境，统一管理运行时、本地域名和 HTTPS，且不想编写 Dockerfile 或 Compose 文件时。', 'Can I use FlyEnv and Docker together?': '可以同时使用 FlyEnv 和 Docker 吗？', 'Yes — a common setup is FlyEnv for day-to-day native development and Docker for CI, integration tests, or projects that require container parity. Avoid port conflicts between the two.': '可以——常见做法是日常原生开发使用 FlyEnv，CI、集成测试或要求容器一致性的项目使用 Docker；请避免两者端口冲突。', 'Does FlyEnv use containers internally?': 'FlyEnv 内部使用容器吗？', 'No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.': '不使用。FlyEnv 在 macOS、Windows 和 Linux 上以主机原生进程运行运行时和服务。', 'Does Docker provide local domains and HTTPS automatically?': 'Docker 会自动提供本地域名和 HTTPS 吗？', 'Not out of the box. You typically add a reverse proxy (Traefik, nginx-proxy) and certificates (mkcert or a CA) yourself; FlyEnv includes a built-in local site workflow for domains and HTTPS.': '默认不会。通常需要自行添加反向代理（Traefik、nginx-proxy）和证书（mkcert 或 CA）；FlyEnv 内置了用于域名和 HTTPS 的本地站点工作流。', 'Which is easier for a team to standardize on?': '团队更容易统一采用哪一个？', "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.": '如果团队使用容器部署，Docker 的 compose.yaml 是最强的共享契约；对于在 macOS、Windows 和 Linux 上进行原生开发的团队，FlyEnv 可提供一致的桌面工作流。', 'Does FlyEnv work with projects that already have a compose.yaml?': 'FlyEnv 能与已有 compose.yaml 的项目配合使用吗？', "Yes — the compose file stays untouched; you can still run the app's runtime and services natively in FlyEnv, or just keep using Docker for that project.": '可以——compose 文件保持不变；你可以在 FlyEnv 中原生运行应用的运行时和服务，也可以继续为该项目使用 Docker。'
    },
    id: {
      Comparison: 'Perbandingan', 'FlyEnv vs Docker': 'FlyEnv vs Docker', 'Native services or containerized environments?': 'Layanan native atau lingkungan berbasis container?',
      'FlyEnv runs development runtimes and services natively on your machine. Docker packages applications and dependencies into containers. Both can build complete local environments, but they optimize for different goals.': 'FlyEnv menjalankan runtime dan layanan pengembangan secara native di komputer Anda. Docker mengemas aplikasi dan dependensinya ke dalam container. Keduanya dapat membangun lingkungan lokal lengkap, tetapi dioptimalkan untuk tujuan berbeda.',
      'Download FlyEnv': 'Unduh FlyEnv', 'Read quick summary': 'Baca ringkasan cepat', 'Free and open source': 'Gratis dan sumber terbuka', 'Containerized stack': 'Stack berbasis container', 'Host OS': 'OS host', 'Native services on the host OS': 'Layanan native pada OS host', 'Native services on the host OS.': 'Layanan native pada OS host.', 'Images, containers, networks and volumes defined as code.': 'Image, container, jaringan, dan volume didefinisikan sebagai kode.', 'Runtimes and services run directly as native processes.': 'Runtime dan layanan berjalan langsung sebagai proses native.',
      'Same Laravel project, two models': 'Proyek Laravel yang sama, dua model', 'Same application, different execution model.': 'Aplikasi sama, model eksekusi berbeda.', 'Containerized stack defined in compose.yaml': 'Stack berbasis container yang didefinisikan di compose.yaml', 'Containerized stack defined in compose.yaml.': 'Stack berbasis container yang didefinisikan di compose.yaml.', container: 'container', 'network: app-net': 'jaringan: app-net', 'volumes: db-data, redis-data': 'volume: db-data, redis-data', native: 'native', 'Project files': 'File proyek', 'normal filesystem': 'sistem berkas biasa',
      'Three key differences': 'Tiga perbedaan utama', 'The tools share a goal — a working environment — but take different paths to get there.': 'Keduanya bertujuan menyediakan lingkungan kerja, tetapi melalui jalur yang berbeda.', 'Native processes vs containers': 'Proses native vs container', 'FlyEnv runs PHP, MySQL, Redis, and Nginx directly as native host services. Docker organizes the same pieces as images, containers, networks, and volumes — with strong isolation between them and the host.': 'FlyEnv menjalankan PHP, MySQL, Redis, dan Nginx langsung sebagai layanan native host. Docker mengaturnya sebagai image, container, jaringan, dan volume dengan isolasi kuat dari host.', 'Local simplicity vs environment portability': 'Kesederhanaan lokal vs portabilitas lingkungan', "FlyEnv offers a faster mental model for local development — no Dockerfile or Compose file is required for ordinary local services. Docker's environment definition travels with the project and can align development with CI, staging, and production.": 'FlyEnv menawarkan alur lokal yang lebih sederhana tanpa Dockerfile atau Compose untuk layanan biasa. Definisi lingkungan Docker ikut bersama proyek dan menyelaraskan pengembangan dengan CI, staging, dan produksi.', 'GUI-managed services vs infrastructure-as-code': 'Layanan melalui GUI vs infrastructure-as-code', 'FlyEnv — pick a version in the GUI, start the service, create a site. Docker — define services in compose.yaml and start the whole stack with one command.': 'FlyEnv: pilih versi di GUI, mulai layanan, dan buat situs. Docker: definisikan layanan di compose.yaml lalu mulai seluruh stack dengan satu perintah.',
      'What this looks like in daily development': 'Dalam pengembangan sehari-hari', 'The same stack, experienced through two different workflows.': 'Stack sama, alur kerja berbeda.', 'Native service management': 'Manajemen layanan native', 'FlyEnv services are installed, started, and stopped from the desktop app — versions, ports, and configuration included.': 'Layanan FlyEnv dipasang, dimulai, dan dihentikan dari aplikasi desktop, termasuk versi, port, dan konfigurasi.', 'Containerized service definition': 'Definisi layanan berbasis container', 'Docker services are declared as images, ports, volumes, and networks in YAML — a precise, version-controlled definition of the environment.': 'Layanan Docker dinyatakan sebagai image, port, volume, dan jaringan dalam YAML — definisi lingkungan yang presisi dan berversi.', 'Development/production parity': 'Konsistensi pengembangan/produksi', "Docker's strength: the same definitions can run in CI, staging, and production. FlyEnv optimizes for the local machine instead.": 'Keunggulan Docker: definisi yang sama dapat berjalan di CI, staging, dan produksi. FlyEnv berfokus pada mesin lokal.',
      'Feature comparison': 'Perbandingan fitur', 'A comparison of models, not feature counts — both sides can build a complete local environment.': 'Perbandingan model, bukan jumlah fitur—keduanya dapat membangun lingkungan lokal lengkap.', Capability: 'Kemampuan', 'Docker / Docker Compose': 'Docker / Docker Compose', 'A typical Laravel project, two ways': 'Proyek Laravel umum, dua cara', 'A side-by-side look at the same kind of work.': 'Perbandingan berdampingan untuk pekerjaan yang sama.', 'With Docker': 'Dengan Docker', 'With FlyEnv': 'Dengan FlyEnv', "Docker's additional configuration is also what makes the environment portable and reproducible across machines and deployment stages.": 'Konfigurasi tambahan Docker membuat lingkungan portabel dan dapat direproduksi di berbagai mesin serta tahap penerapan.',
      'Which one should you choose?': 'Mana yang harus dipilih?', 'Both tools can be useful; the right choice depends on your workflow.': 'Keduanya berguna; pilihan tepat bergantung pada alur kerja Anda.', 'Choose Docker if': 'Pilih Docker jika', 'Choose FlyEnv if': 'Pilih FlyEnv jika', 'Consider both if': 'Pertimbangkan keduanya jika', 'FlyEnv and Docker are not mutually exclusive — many teams use native services locally and containers everywhere else.': 'FlyEnv dan Docker tidak saling eksklusif—banyak tim memakai layanan native secara lokal dan container di lingkungan lain.', 'Frequently asked questions': 'Pertanyaan umum', 'Try native local development with FlyEnv': 'Coba pengembangan lokal native dengan FlyEnv', 'Create a local site, select the runtimes and services it needs, and start working — no containers required.': 'Buat situs lokal, pilih runtime dan layanan yang diperlukan, lalu mulai bekerja—tanpa container.', Development: 'Pengembangan', Staging: 'Staging', Production: 'Produksi', CI: 'CI',
      'Execution model': 'Model eksekusi', Containers: 'Container', 'Native host processes': 'Proses native host', 'Environment definition': 'Definisi lingkungan', 'Dockerfile / Compose YAML': 'Dockerfile / Compose YAML', 'GUI and project configuration': 'GUI dan konfigurasi proyek', Isolation: 'Isolasi', 'Strong container isolation': 'Isolasi container yang kuat', 'Host-level services': 'Layanan tingkat host', 'Production portability': 'Portabilitas produksi', Strong: 'Kuat', 'Not the primary goal': 'Bukan tujuan utama', 'CI/CD portability': 'Portabilitas CI/CD', 'Limited / not primary': 'Terbatas / bukan utama', 'Local domains / HTTPS': 'Domain lokal / HTTPS', 'Configure via stack or proxy': 'Konfigurasi melalui stack atau proxy', 'Built-in local site workflow': 'Alur situs lokal bawaan', 'Runtime versions': 'Versi runtime', 'Container image tags': 'Tag image container', 'Managed local versions': 'Versi lokal terkelola', 'Database services': 'Layanan database', 'Container images': 'Image container', 'Managed native modules': 'Modul native terkelola', Networking: 'Jaringan', 'Docker networks': 'Jaringan Docker', 'Host networking': 'Jaringan host', Volumes: 'Volume', 'Docker volumes / bind mounts': 'Volume Docker / bind mount', 'Native filesystem': 'Sistem berkas native', 'Project startup': 'Memulai proyek', 'docker compose up': 'docker compose up', 'UI and Startup Groups': 'UI dan Startup Groups', 'Resource overhead': 'Overhead sumber daya', 'Docker runtime or VM depending on OS': 'Runtime Docker atau VM bergantung OS', 'Native processes': 'Proses native', 'GUI management': 'Manajemen GUI', 'Docker Desktop and tools': 'Docker Desktop dan alatnya', 'Best suited for': 'Paling cocok untuk', 'Portable, reproducible container environments': 'Lingkungan container yang portabel dan dapat direproduksi', 'Native local development': 'Pengembangan lokal native',
      'Write or select Dockerfiles and images': 'Tulis atau pilih Dockerfile dan image', 'Create compose.yaml': 'Buat compose.yaml', 'Configure ports': 'Konfigurasikan port', 'Configure volumes': 'Konfigurasikan volume', 'Configure networks': 'Konfigurasikan jaringan', 'Start with docker compose up': 'Mulai dengan docker compose up', 'Select the PHP version': 'Pilih versi PHP', 'Create a local site': 'Buat situs lokal', 'Start the database and cache': 'Mulai database dan cache', 'Enable HTTPS': 'Aktifkan HTTPS', 'Start the project services': 'Mulai layanan proyek', 'Continue with the project setup': 'Lanjutkan penyiapan proyek', 'Open the site and start developing': 'Buka situs dan mulai mengembangkan',
      'Production parity matters.': 'Konsistensi dengan produksi penting.', 'Your team already deploys containers.': 'Tim Anda sudah menerapkan kontainer di lingkungan produksi.', 'You need strong environment isolation.': 'Anda memerlukan isolasi lingkungan yang kuat.', 'You need reproducible CI, staging and dev environments.': 'Anda memerlukan lingkungan CI, staging, dan pengembangan yang dapat direproduksi.', 'Your project already includes a Dockerfile or compose.yaml.': 'Proyek Anda sudah memiliki Dockerfile atau compose.yaml.', 'You mainly need a fast native local development environment.': 'Anda terutama memerlukan lingkungan pengembangan lokal native yang cepat.', "You don't need container isolation.": 'Anda tidak memerlukan isolasi kontainer.', 'You want to manage runtimes and services through a desktop UI.': 'Anda ingin mengelola runtime dan layanan melalui UI desktop.', 'You prefer native filesystem and network performance with direct local tooling.': 'Anda mengutamakan performa sistem berkas dan jaringan native dengan alat lokal langsung.', 'You work on projects that do not already require containers.': 'Anda mengerjakan proyek yang tidak memerlukan kontainer.', 'Use FlyEnv for native day-to-day development, while keeping Docker for CI, deployment, integration tests, or projects that require container parity.': 'Gunakan FlyEnv untuk pengembangan harian native, sambil mempertahankan Docker untuk CI, penerapan, pengujian integrasi, atau proyek yang memerlukan konsistensi kontainer.', 'You develop natively but the team standardizes on containers for delivery.': 'Anda mengembangkan secara native, tetapi tim menstandarkan kontainer untuk pengiriman rilis.', 'Different projects on the same machine have different requirements.': 'Proyek berbeda pada mesin yang sama memiliki kebutuhan berbeda.',
      'Is FlyEnv a replacement for Docker?': 'Apakah FlyEnv pengganti Docker?', 'No. FlyEnv manages native local services; Docker packages apps into containers. They solve different problems and can be used together.': 'Tidak. FlyEnv mengelola layanan lokal native; Docker mengemas aplikasi ke dalam kontainer. Keduanya memecahkan masalah berbeda dan dapat digunakan bersama.', 'When should I use Docker instead of FlyEnv?': 'Kapan saya harus memakai Docker, bukan FlyEnv?', 'When production parity, isolation, or reproducible CI/staging environments matter, or when the project already ships a compose.yaml.': 'Saat konsistensi produksi, isolasi, atau lingkungan CI/staging yang dapat direproduksi penting, atau proyek sudah menyediakan compose.yaml.', 'When is FlyEnv the better fit?': 'Kapan FlyEnv lebih cocok?', 'When you want a fast native local environment with managed runtimes, local domains and HTTPS, without writing Dockerfiles or Compose files.': 'Saat Anda menginginkan lingkungan lokal native yang cepat dengan runtime, domain lokal, dan HTTPS terkelola tanpa menulis Dockerfile atau file Compose.', 'Can I use FlyEnv and Docker together?': 'Bisakah FlyEnv dan Docker digunakan bersama?', 'Yes — a common setup is FlyEnv for day-to-day native development and Docker for CI, integration tests, or projects that require container parity. Avoid port conflicts between the two.': 'Bisa—umumnya FlyEnv dipakai untuk pengembangan harian native dan Docker untuk CI, pengujian integrasi, atau proyek yang memerlukan konsistensi kontainer. Hindari konflik port.', 'Does FlyEnv use containers internally?': 'Apakah FlyEnv menggunakan kontainer secara internal?', 'No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.': 'Tidak. FlyEnv menjalankan runtime dan layanan sebagai proses native host di macOS, Windows, dan Linux.', 'Does Docker provide local domains and HTTPS automatically?': 'Apakah Docker otomatis menyediakan domain lokal dan HTTPS?', 'Not out of the box. You typically add a reverse proxy (Traefik, nginx-proxy) and certificates (mkcert or a CA) yourself; FlyEnv includes a built-in local site workflow for domains and HTTPS.': 'Tidak secara bawaan. Anda biasanya perlu menambahkan reverse proxy (Traefik, nginx-proxy) dan sertifikat (mkcert atau CA); FlyEnv memiliki alur situs lokal bawaan untuk domain dan HTTPS.', 'Which is easier for a team to standardize on?': 'Mana yang lebih mudah distandarkan oleh tim?', "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.": 'Jika tim menerapkan kontainer, compose.yaml Docker adalah kesepakatan bersama yang paling jelas. Untuk tim yang mengembangkan secara native di macOS, Windows, dan Linux, FlyEnv memberi semua orang alur desktop yang sama.', 'Does FlyEnv work with projects that already have a compose.yaml?': 'Apakah FlyEnv bekerja dengan proyek yang sudah memiliki compose.yaml?', "Yes — the compose file stays untouched; you can still run the app's runtime and services natively in FlyEnv, or just keep using Docker for that project.": 'Bisa—file compose tetap utuh; Anda dapat menjalankan runtime dan layanan aplikasi secara native di FlyEnv, atau tetap menggunakan Docker untuk proyek tersebut.'
    },
    es: {
      Comparison: 'Comparación', 'FlyEnv vs Docker': 'FlyEnv vs Docker', 'Native services or containerized environments?': '¿Servicios nativos o entornos en contenedores?',
      'FlyEnv runs development runtimes and services natively on your machine. Docker packages applications and dependencies into containers. Both can build complete local environments, but they optimize for different goals.': 'FlyEnv ejecuta runtimes y servicios de desarrollo de forma nativa en tu máquina. Docker empaqueta las aplicaciones y sus dependencias en contenedores. Ambos pueden crear entornos locales completos, pero optimizan para objetivos distintos.',
      'Download FlyEnv': 'Descargar FlyEnv', 'Read quick summary': 'Leer el resumen rápido', 'Free and open source': 'Gratuito y de código abierto', 'Containerized stack': 'Stack en contenedores', 'Host OS': 'SO anfitrión', 'Native services on the host OS': 'Servicios nativos en el SO anfitrión', 'Native services on the host OS.': 'Servicios nativos en el SO anfitrión.', 'Images, containers, networks and volumes defined as code.': 'Imágenes, contenedores, redes y volúmenes definidos como código.', 'Runtimes and services run directly as native processes.': 'Los runtimes y servicios se ejecutan directamente como procesos nativos.',
      'Same Laravel project, two models': 'El mismo proyecto Laravel, dos modelos', 'Same application, different execution model.': 'La misma aplicación, distinto modelo de ejecución.', 'Containerized stack defined in compose.yaml': 'Stack en contenedores definido en compose.yaml', 'Containerized stack defined in compose.yaml.': 'Stack en contenedores definido en compose.yaml.', container: 'contenedor', 'network: app-net': 'red: app-net', 'volumes: db-data, redis-data': 'volúmenes: db-data, redis-data', native: 'nativo', 'Project files': 'Archivos del proyecto', 'normal filesystem': 'sistema de archivos normal',
      'Three key differences': 'Tres diferencias clave', 'The tools share a goal — a working environment — but take different paths to get there.': 'Ambas herramientas comparten un objetivo —un entorno funcional— pero toman caminos distintos para lograrlo.', 'Native processes vs containers': 'Procesos nativos vs contenedores', 'FlyEnv runs PHP, MySQL, Redis, and Nginx directly as native host services. Docker organizes the same pieces as images, containers, networks, and volumes — with strong isolation between them and the host.': 'FlyEnv ejecuta PHP, MySQL, Redis y Nginx directamente como servicios nativos del anfitrión. Docker organiza las mismas piezas como imágenes, contenedores, redes y volúmenes, con un aislamiento fuerte entre ellos y el anfitrión.', 'Local simplicity vs environment portability': 'Simplicidad local vs portabilidad del entorno', "FlyEnv offers a faster mental model for local development — no Dockerfile or Compose file is required for ordinary local services. Docker's environment definition travels with the project and can align development with CI, staging, and production.": 'FlyEnv ofrece un modelo mental más rápido para el desarrollo local: los servicios locales habituales no requieren Dockerfile ni archivo Compose. La definición del entorno de Docker viaja con el proyecto y puede alinear el desarrollo con CI, staging y producción.', 'GUI-managed services vs infrastructure-as-code': 'Servicios gestionados por GUI vs infraestructura como código', 'FlyEnv — pick a version in the GUI, start the service, create a site. Docker — define services in compose.yaml and start the whole stack with one command.': 'FlyEnv: elige una versión en la GUI, inicia el servicio y crea un sitio. Docker: define los servicios en compose.yaml e inicia todo el stack con un solo comando.',
      'What this looks like in daily development': 'Cómo se ve esto en el desarrollo diario', 'The same stack, experienced through two different workflows.': 'El mismo stack, vivido a través de dos flujos de trabajo distintos.', 'Native service management': 'Gestión de servicios nativos', 'FlyEnv services are installed, started, and stopped from the desktop app — versions, ports, and configuration included.': 'Los servicios de FlyEnv se instalan, inician y detienen desde la aplicación de escritorio, incluidas las versiones, los puertos y la configuración.', 'Containerized service definition': 'Definición de servicios en contenedores', 'Docker services are declared as images, ports, volumes, and networks in YAML — a precise, version-controlled definition of the environment.': 'Los servicios de Docker se declaran como imágenes, puertos, volúmenes y redes en YAML: una definición precisa del entorno y bajo control de versiones.', 'Development/production parity': 'Paridad desarrollo/producción', "Docker's strength: the same definitions can run in CI, staging, and production. FlyEnv optimizes for the local machine instead.": 'La fortaleza de Docker: las mismas definiciones pueden ejecutarse en CI, staging y producción. FlyEnv, en cambio, optimiza para la máquina local.',
      'Feature comparison': 'Comparación de características', 'A comparison of models, not feature counts — both sides can build a complete local environment.': 'Una comparación de modelos, no de cantidad de funciones: ambos pueden crear un entorno local completo.', Capability: 'Capacidad', 'Docker / Docker Compose': 'Docker / Docker Compose',
      'A typical Laravel project, two ways': 'Un proyecto Laravel típico, de dos maneras', 'A side-by-side look at the same kind of work.': 'Una mirada lado a lado al mismo tipo de trabajo.', 'With Docker': 'Con Docker', 'With FlyEnv': 'Con FlyEnv', "Docker's additional configuration is also what makes the environment portable and reproducible across machines and deployment stages.": 'La configuración adicional de Docker es también lo que hace que el entorno sea portátil y reproducible entre máquinas y etapas de despliegue.',
      'Which one should you choose?': '¿Cuál deberías elegir?', 'Both tools can be useful; the right choice depends on your workflow.': 'Ambas herramientas pueden ser útiles; la elección correcta depende de tu flujo de trabajo.', 'Choose Docker if': 'Elige Docker si', 'Choose FlyEnv if': 'Elige FlyEnv si', 'Consider both if': 'Considera ambos si', 'FlyEnv and Docker are not mutually exclusive — many teams use native services locally and containers everywhere else.': 'FlyEnv y Docker no son mutuamente excluyentes: muchos equipos usan servicios nativos en local y contenedores en todos los demás entornos.',
      'Frequently asked questions': 'Preguntas frecuentes', 'Try native local development with FlyEnv': 'Prueba el desarrollo local nativo con FlyEnv', 'Create a local site, select the runtimes and services it needs, and start working — no containers required.': 'Crea un sitio local, selecciona los runtimes y servicios que necesita y empieza a trabajar, sin contenedores.', Development: 'Desarrollo', Staging: 'Staging', Production: 'Producción', CI: 'CI',
      'Execution model': 'Modelo de ejecución', Containers: 'Contenedores', 'Native host processes': 'Procesos nativos del anfitrión', 'Environment definition': 'Definición del entorno', 'Dockerfile / Compose YAML': 'Dockerfile / Compose YAML', 'GUI and project configuration': 'GUI y configuración del proyecto', Isolation: 'Aislamiento', 'Strong container isolation': 'Aislamiento fuerte de contenedores', 'Host-level services': 'Servicios a nivel de anfitrión', 'Production portability': 'Portabilidad a producción', Strong: 'Fuerte', 'Not the primary goal': 'No es el objetivo principal', 'CI/CD portability': 'Portabilidad CI/CD', 'Limited / not primary': 'Limitada / no principal', 'Local domains / HTTPS': 'Dominios locales / HTTPS', 'Configure via stack or proxy': 'Configurar mediante el stack o un proxy', 'Built-in local site workflow': 'Flujo de sitios locales integrado', 'Runtime versions': 'Versiones de runtime', 'Container image tags': 'Etiquetas de imágenes de contenedor', 'Managed local versions': 'Versiones locales gestionadas', 'Database services': 'Servicios de base de datos', 'Container images': 'Imágenes de contenedor', 'Managed native modules': 'Módulos nativos gestionados', Networking: 'Redes', 'Docker networks': 'Redes de Docker', 'Host networking': 'Red del anfitrión', Volumes: 'Volúmenes', 'Docker volumes / bind mounts': 'Volúmenes de Docker / bind mounts', 'Native filesystem': 'Sistema de archivos nativo', 'Project startup': 'Inicio del proyecto', 'docker compose up': 'docker compose up', 'UI and Startup Groups': 'UI y Startup Groups', 'Resource overhead': 'Sobrecarga de recursos', 'Docker runtime or VM depending on OS': 'Runtime de Docker o VM según el SO', 'Native processes': 'Procesos nativos', 'GUI management': 'Gestión por GUI', 'Docker Desktop and tools': 'Docker Desktop y herramientas', 'Best suited for': 'Más adecuado para', 'Portable, reproducible container environments': 'Entornos de contenedores portátiles y reproducibles', 'Native local development': 'Desarrollo local nativo',
      'Write or select Dockerfiles and images': 'Escribir o seleccionar Dockerfiles e imágenes', 'Create compose.yaml': 'Crear compose.yaml', 'Configure ports': 'Configurar puertos', 'Configure volumes': 'Configurar volúmenes', 'Configure networks': 'Configurar redes', 'Start with docker compose up': 'Iniciar con docker compose up', 'Select the PHP version': 'Seleccionar la versión de PHP', 'Create a local site': 'Crear un sitio local', 'Start the database and cache': 'Iniciar la base de datos y la caché', 'Enable HTTPS': 'Activar HTTPS', 'Start the project services': 'Iniciar los servicios del proyecto', 'Continue with the project setup': 'Continuar con la configuración del proyecto', 'Open the site and start developing': 'Abrir el sitio y empezar a desarrollar',
      'Production parity matters.': 'La paridad con producción es importante.', 'Your team already deploys containers.': 'Tu equipo ya despliega contenedores.', 'You need strong environment isolation.': 'Necesitas un aislamiento fuerte del entorno.', 'You need reproducible CI, staging and dev environments.': 'Necesitas entornos de CI, staging y desarrollo reproducibles.', 'Your project already includes a Dockerfile or compose.yaml.': 'Tu proyecto ya incluye un Dockerfile o compose.yaml.', 'You mainly need a fast native local development environment.': 'Principalmente necesitas un entorno de desarrollo local nativo y rápido.', "You don't need container isolation.": 'No necesitas aislamiento de contenedores.', 'You want to manage runtimes and services through a desktop UI.': 'Quieres gestionar runtimes y servicios desde una interfaz de escritorio.', 'You prefer native filesystem and network performance with direct local tooling.': 'Prefieres el rendimiento nativo del sistema de archivos y la red con herramientas locales directas.', 'You work on projects that do not already require containers.': 'Trabajas en proyectos que aún no requieren contenedores.', 'Use FlyEnv for native day-to-day development, while keeping Docker for CI, deployment, integration tests, or projects that require container parity.': 'Usa FlyEnv para el desarrollo nativo del día a día, manteniendo Docker para CI, despliegue, pruebas de integración o proyectos que requieran paridad de contenedores.', 'You develop natively but the team standardizes on containers for delivery.': 'Desarrollas de forma nativa, pero el equipo estandariza los contenedores para la entrega.', 'Different projects on the same machine have different requirements.': 'Distintos proyectos en la misma máquina tienen requisitos diferentes.',
      'Is FlyEnv a replacement for Docker?': '¿FlyEnv reemplaza a Docker?', 'No. FlyEnv manages native local services; Docker packages apps into containers. They solve different problems and can be used together.': 'No. FlyEnv gestiona servicios locales nativos; Docker empaqueta aplicaciones en contenedores. Resuelven problemas distintos y pueden usarse juntos.', 'When should I use Docker instead of FlyEnv?': '¿Cuándo debería usar Docker en lugar de FlyEnv?', 'When production parity, isolation, or reproducible CI/staging environments matter, or when the project already ships a compose.yaml.': 'Cuando importan la paridad con producción, el aislamiento o los entornos de CI/staging reproducibles, o cuando el proyecto ya incluye un compose.yaml.', 'When is FlyEnv the better fit?': '¿Cuándo es FlyEnv la mejor opción?', 'When you want a fast native local environment with managed runtimes, local domains and HTTPS, without writing Dockerfiles or Compose files.': 'Cuando quieres un entorno local nativo rápido con runtimes gestionados, dominios locales y HTTPS, sin escribir Dockerfiles ni archivos Compose.', 'Can I use FlyEnv and Docker together?': '¿Puedo usar FlyEnv y Docker juntos?', 'Yes — a common setup is FlyEnv for day-to-day native development and Docker for CI, integration tests, or projects that require container parity. Avoid port conflicts between the two.': 'Sí: una configuración habitual es FlyEnv para el desarrollo nativo diario y Docker para CI, pruebas de integración o proyectos que requieran paridad de contenedores. Evita conflictos de puertos entre ambos.', 'Does FlyEnv use containers internally?': '¿FlyEnv usa contenedores internamente?', 'No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.': 'No. FlyEnv ejecuta runtimes y servicios como procesos nativos del anfitrión en macOS, Windows y Linux.', 'Does Docker provide local domains and HTTPS automatically?': '¿Docker proporciona dominios locales y HTTPS automáticamente?', 'Not out of the box. You typically add a reverse proxy (Traefik, nginx-proxy) and certificates (mkcert or a CA) yourself; FlyEnv includes a built-in local site workflow for domains and HTTPS.': 'No de forma predeterminada. Normalmente debes añadir un proxy inverso (Traefik, nginx-proxy) y certificados (mkcert o una CA) por tu cuenta; FlyEnv incluye un flujo de sitios locales integrado para dominios y HTTPS.', 'Which is easier for a team to standardize on?': '¿Cuál es más fácil de estandarizar para un equipo?', "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.": 'Si el equipo despliega contenedores, el compose.yaml de Docker es el contrato compartido más sólido. Para equipos que desarrollan de forma nativa en macOS, Windows y Linux, FlyEnv ofrece a todos el mismo flujo de trabajo de escritorio.', 'Does FlyEnv work with projects that already have a compose.yaml?': '¿FlyEnv funciona con proyectos que ya tienen un compose.yaml?', "Yes — the compose file stays untouched; you can still run the app's runtime and services natively in FlyEnv, or just keep using Docker for that project.": 'Sí: el archivo compose permanece intacto; puedes seguir ejecutando el runtime y los servicios de la aplicación de forma nativa en FlyEnv, o simplemente seguir usando Docker para ese proyecto.',
      'FlyEnv service management interface': 'Interfaz de gestión de servicios de FlyEnv'
    }
  }
  Object.assign(translations.zh, {
    'FlyEnv service management interface': 'FlyEnv 服务管理界面',
    'No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.': '不使用。FlyEnv 在 macOS、Windows 和 Linux 上以宿主机上的原生进程方式运行各运行时和服务。',
    "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.": '如果团队使用容器部署，Docker 的 compose.yaml 是最明确的团队统一配置约定；对于在 macOS、Windows 和 Linux 上进行原生开发的团队，FlyEnv 可提供一致的桌面工作流。'
  })
  Object.assign(translations.id, {
    'FlyEnv service management interface': 'Antarmuka pengelolaan layanan FlyEnv',
    "Docker's additional configuration is also what makes the environment portable and reproducible across machines and deployment stages.": 'Konfigurasi tambahan Docker membuat lingkungan portabel dan dapat direproduksi di berbagai mesin serta tahap penerapan.',
    'Your team already deploys containers.': 'Tim Anda sudah menerapkan container di lingkungan produksi.',
    'Use FlyEnv for native day-to-day development, while keeping Docker for CI, deployment, integration tests, or projects that require container parity.': 'Gunakan FlyEnv untuk pengembangan harian native, sambil mempertahankan Docker untuk CI, penerapan, pengujian integrasi, atau proyek yang memerlukan konsistensi container.',
    'You develop natively but the team standardizes on containers for delivery.': 'Anda mengembangkan secara native, tetapi tim menstandarkan container untuk pengiriman rilis.',
    "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow.": 'Jika tim menerapkan container di lingkungan produksi, compose.yaml Docker menjadi konfigurasi bersama yang paling jelas. Untuk tim yang mengembangkan secara native di macOS, Windows, dan Linux, FlyEnv memberi semua orang alur desktop yang sama.'
  })
  const tr = (value: string) => translations[locale]?.[value] ?? value

  interface Service {
    name: string
    icon: string
  }

  interface FeatureRow {
    name: string
    docker: string
    flyenv: string
  }

  interface Faq {
    question: string
    answer: string
  }

  const nativeServices: Service[] = [
    { name: 'Nginx', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/nginx.svg' },
    { name: 'PHP', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/php.svg' },
    { name: 'MySQL', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/mysql.svg' },
    { name: 'Redis', icon: 'https://oss.macphpstudy.com/image/assets/demo-logos/redis.svg' }
  ]

  const featureRows: FeatureRow[] = [
    {
      name: 'Execution model',
      docker: 'Containers',
      flyenv: 'Native host processes'
    },
    {
      name: 'Environment definition',
      docker: 'Dockerfile / Compose YAML',
      flyenv: 'GUI and project configuration'
    },
    {
      name: 'Isolation',
      docker: 'Strong container isolation',
      flyenv: 'Host-level services'
    },
    {
      name: 'Production portability',
      docker: 'Strong',
      flyenv: 'Not the primary goal'
    },
    {
      name: 'CI/CD portability',
      docker: 'Strong',
      flyenv: 'Limited / not primary'
    },
    {
      name: 'Local domains / HTTPS',
      docker: 'Configure via stack or proxy',
      flyenv: 'Built-in local site workflow'
    },
    {
      name: 'Runtime versions',
      docker: 'Container image tags',
      flyenv: 'Managed local versions'
    },
    {
      name: 'Database services',
      docker: 'Container images',
      flyenv: 'Managed native modules'
    },
    {
      name: 'Networking',
      docker: 'Docker networks',
      flyenv: 'Host networking'
    },
    {
      name: 'Volumes',
      docker: 'Docker volumes / bind mounts',
      flyenv: 'Native filesystem'
    },
    {
      name: 'Project startup',
      docker: 'docker compose up',
      flyenv: 'UI and Startup Groups'
    },
    {
      name: 'Resource overhead',
      docker: 'Docker runtime or VM depending on OS',
      flyenv: 'Native processes'
    },
    {
      name: 'GUI management',
      docker: 'Docker Desktop and tools',
      flyenv: 'FlyEnv'
    },
    {
      name: 'Best suited for',
      docker: 'Portable, reproducible container environments',
      flyenv: 'Native local development'
    }
  ]

  const dockerSteps: string[] = [
    'Write or select Dockerfiles and images',
    'Create compose.yaml',
    'Configure ports',
    'Configure volumes',
    'Configure networks',
    'Start with docker compose up'
  ]

  const flyenvSteps: string[] = [
    'Select the PHP version',
    'Create a local site',
    'Start the database and cache',
    'Enable HTTPS',
    'Start the project services'
  ]

  const workflowRows = computed(() => {
    const length = Math.max(dockerSteps.length, flyenvSteps.length)
    return Array.from({ length }, (_, index) => ({
      docker: dockerSteps[index] ?? 'Continue with the project setup',
      flyenv: flyenvSteps[index] ?? 'Open the site and start developing'
    }))
  })

  const dockerChoiceItems: string[] = [
    'Production parity matters.',
    'Your team already deploys containers.',
    'You need strong environment isolation.',
    'You need reproducible CI, staging and dev environments.',
    'Your project already includes a Dockerfile or compose.yaml.'
  ]

  const flyenvChoiceItems: string[] = [
    'You mainly need a fast native local development environment.',
    "You don't need container isolation.",
    'You want to manage runtimes and services through a desktop UI.',
    'You prefer native filesystem and network performance with direct local tooling.',
    'You work on projects that do not already require containers.'
  ]

  const bothChoiceItems: string[] = [
    'Use FlyEnv for native day-to-day development, while keeping Docker for CI, deployment, integration tests, or projects that require container parity.',
    'You develop natively but the team standardizes on containers for delivery.',
    'Different projects on the same machine have different requirements.'
  ]

  const faqs: Faq[] = [
    {
      question: 'Is FlyEnv a replacement for Docker?',
      answer:
        'No. FlyEnv manages native local services; Docker packages apps into containers. They solve different problems and can be used together.'
    },
    {
      question: 'When should I use Docker instead of FlyEnv?',
      answer:
        'When production parity, isolation, or reproducible CI/staging environments matter, or when the project already ships a compose.yaml.'
    },
    {
      question: 'When is FlyEnv the better fit?',
      answer:
        'When you want a fast native local environment with managed runtimes, local domains and HTTPS, without writing Dockerfiles or Compose files.'
    },
    {
      question: 'Can I use FlyEnv and Docker together?',
      answer:
        'Yes — a common setup is FlyEnv for day-to-day native development and Docker for CI, integration tests, or projects that require container parity. Avoid port conflicts between the two.'
    },
    {
      question: 'Does FlyEnv use containers internally?',
      answer:
        'No. FlyEnv runs runtimes and services as native host processes on macOS, Windows and Linux.'
    },
    {
      question: 'Does Docker provide local domains and HTTPS automatically?',
      answer:
        'Not out of the box. You typically add a reverse proxy (Traefik, nginx-proxy) and certificates (mkcert or a CA) yourself; FlyEnv includes a built-in local site workflow for domains and HTTPS.'
    },
    {
      question: 'Which is easier for a team to standardize on?',
      answer:
        "If the team deploys containers, Docker's compose.yaml is the strongest shared contract. For teams that develop natively on macOS, Windows and Linux, FlyEnv gives everyone the same desktop workflow."
    },
    {
      question: 'Does FlyEnv work with projects that already have a compose.yaml?',
      answer:
        "Yes — the compose file stays untouched; you can still run the app's runtime and services natively in FlyEnv, or just keep using Docker for that project."
    }
  ]
</script>
