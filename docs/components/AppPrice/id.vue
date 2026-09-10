<template>
  <section
    aria-labelledby="pricing-title"
    class="pricing-section relative isolate overflow-hidden border-y border-sky-100 bg-[radial-gradient(circle_at_50%_12%,rgba(207,235,255,0.9),transparent_34%),linear-gradient(180deg,#f8fcff_0%,#eef8ff_52%,#f9fcff_100%)] py-20 text-slate-950 dark:border-slate-800 dark:bg-[radial-gradient(circle_at_50%_10%,rgba(37,99,235,0.2),transparent_34%),linear-gradient(180deg,#071222_0%,#0a172a_52%,#07111f_100%)] dark:text-slate-50 sm:py-24 lg:py-28"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.72),transparent)] opacity-80 dark:opacity-10"
    ></div>

    <div class="relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
      <header class="mx-auto max-w-4xl text-center">
        <p class="text-sm font-extrabold tracking-[0.04em] text-blue-600 dark:text-blue-300">
          LISENSI SEDERHANA
        </p>
        <h2
          id="pricing-title"
          class="no-border !mb-0 !mt-4 !text-4xl !font-extrabold !leading-[1.06] !tracking-[-0.055em] text-slate-950 sm:!text-5xl lg:!text-[3.45rem] dark:!text-white"
        >
          Mulai gratis. Upgrade ke Pro dengan cara Anda.
        </h2>
        <p
          class="mx-auto mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-xl sm:leading-8 dark:text-slate-300"
        >
          Fitur inti pengembangan lokal FlyEnv dapat digunakan secara gratis. Lisensi Pro menghapus
          batas penggunaan dan membuka seluruh alat bawaan.
        </p>

        <ul
          aria-label="Keunggulan lisensi"
          class="mt-7 pt-7 flex list-none flex-wrap justify-center gap-3 !pl-0"
        >
          <li
            v-for="highlight in highlights"
            :key="highlight.label"
            class="inline-flex items-center gap-2.5 rounded-full border border-white/80 bg-white/85 px-5 py-2.5 text-sm font-semibold text-slate-700 shadow-[0_8px_24px_rgba(63,126,184,0.08)] backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-200"
          >
            <component
              :is="highlight.icon"
              class="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-300"
              aria-hidden="true"
            />
            {{ highlight.label }}
          </li>
        </ul>
      </header>

      <div class="mt-12 grid items-stretch gap-5 xl:grid-cols-[0.72fr_1.28fr] xl:gap-6">
        <article
          data-pricing-tier="free"
          class="flex min-w-0 flex-col rounded-2xl border border-slate-200/90 bg-white/95 p-6 shadow-[0_22px_70px_rgba(53,108,158,0.1)] dark:border-slate-700 dark:bg-slate-900/95 sm:p-8"
        >
          <div>
            <p
              class="inline-flex rounded-lg bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
            >
              GRATIS
            </p>
            <h3 class="no-border sr-only">Gratis</h3>
            <p
              class="mt-4 text-[4.25rem] font-extrabold leading-none tracking-[-0.07em] text-slate-950 dark:text-white"
            >
              $0
            </p>
            <p class="mt-1 text-xl font-semibold text-slate-700 dark:text-slate-200"
              >Gratis digunakan</p
            >
            <p class="mt-2 max-w-sm text-base leading-6 text-slate-600 dark:text-slate-300">
              Gunakan FlyEnv untuk pengembangan lokal dengan lingkungan inti yang sudah disertakan.
            </p>
          </div>

          <div class="mt-6 border-t border-slate-200 pt-5 dark:border-slate-700">
            <h4 class="text-sm font-extrabold text-slate-950 dark:text-white">
              Fitur inti yang disertakan
            </h4>
            <ul class="mt-3 grid list-none grid-cols-1 gap-2 !pl-0 sm:grid-cols-2">
              <li
                v-for="feature in freeFeatures"
                :key="feature.label"
                class="flex min-w-0 items-center gap-3 rounded-xl bg-slate-100/90 px-4 py-3 text-sm font-semibold text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <component
                  :is="feature.icon"
                  class="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-300"
                  aria-hidden="true"
                />
                {{ feature.label }}
              </li>
            </ul>
          </div>

          <div class="mt-5 border-t border-slate-200 pt-5 dark:border-slate-700">
            <h4 class="text-sm font-extrabold text-slate-950 dark:text-white">Batas penggunaan</h4>
            <ul class="mt-3 list-none space-y-2 !pl-0">
              <li
                v-for="limit in freeLimits"
                :key="limit.label"
                class="rounded-xl bg-slate-100/90 px-4 py-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <div class="flex items-center gap-3">
                  <component
                    :is="limit.icon"
                    class="h-5 w-5 shrink-0 text-blue-600 dark:text-blue-300"
                    aria-hidden="true"
                  />
                  <span
                    ><strong class="font-extrabold">{{ limit.value }}</strong>
                    {{ limit.label }}</span
                  >
                </div>
                <ul
                  v-if="limit.tools"
                  aria-label="Alat uji coba"
                  class="mt-3 pt-2 flex list-none flex-wrap gap-2 !pl-8"
                >
                  <li
                    v-for="tool in limit.tools"
                    :key="tool"
                    class="rounded-lg bg-white px-2.5 py-1 text-xs font-semibold text-slate-500 shadow-sm dark:bg-slate-900 dark:text-slate-300"
                  >
                    {{ tool }}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <a
            href="/id/download"
            data-analytics-event="download_click"
            data-analytics-surface="new-home-pricing-free"
            class="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-3 text-sm font-extrabold !text-slate-800 no-underline transition hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px dark:bg-slate-800 dark:!text-slate-100 dark:hover:bg-slate-700"
          >
            <Download class="h-5 w-5" aria-hidden="true" />
            Unduh FlyEnv
          </a>
        </article>

        <article
          data-pricing-tier="pro"
          class="flex min-w-0 flex-col rounded-2xl border-2 border-blue-400 bg-white/95 p-6 shadow-[0_26px_90px_rgba(37,99,235,0.14)] dark:border-blue-500 dark:bg-slate-900/95 sm:p-8"
        >
          <div>
            <p
              class="inline-flex rounded-lg bg-blue-50 px-4 py-2 text-xs font-extrabold text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
            >
              LISENSI PRO
            </p>
            <h3
              class="no-border !mb-0 !mt-5 !text-3xl !font-extrabold !leading-[1.08] !tracking-[-0.04em] text-slate-950 sm:!text-[2.15rem] dark:!text-white"
            >
              Semua yang ada di versi Gratis, tanpa batasan.
            </h3>
            <p class="mt-2 text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
              Nikmati FlyEnv sepenuhnya sekaligus mendukung pengembangannya.
            </p>
          </div>

          <div class="mt-7 grid gap-7 md:grid-cols-3 md:gap-0">
            <section
              v-for="(group, index) in benefitGroups"
              :key="group.title"
              data-benefit-group
              :class="[
                'min-w-0',
                index > 0
                  ? 'border-t border-slate-200 pt-7 dark:border-slate-700 md:border-l md:border-t-0 md:px-6 md:pt-0'
                  : 'md:pr-6'
              ]"
            >
              <div class="flex items-center gap-3">
                <component
                  :is="group.icon"
                  class="h-8 w-8 shrink-0 text-blue-600 dark:text-blue-300"
                  aria-hidden="true"
                />
                <h4 class="text-lg font-extrabold text-slate-950 dark:text-white">
                  {{ group.title }}
                </h4>
              </div>
              <ul class="mt-5 list-none space-y-4 !pl-0">
                <li
                  v-for="item in group.items"
                  :key="item"
                  class="flex items-start gap-3 text-sm leading-6 text-slate-600 dark:text-slate-300"
                >
                  <CircleCheckFilled
                    class="mt-0.5 h-5 w-5 shrink-0 text-blue-600 dark:text-blue-300"
                    aria-hidden="true"
                  />
                  {{ item }}
                </li>
              </ul>
            </section>
          </div>

          <section
            aria-labelledby="support-open-source-title"
            class="mt-7 rounded-2xl bg-[linear-gradient(115deg,#f4f9ff_0%,#eaf5ff_100%)] p-5 dark:bg-[linear-gradient(115deg,#101f35_0%,#102946_100%)] sm:p-6"
          >
            <p class="text-xs font-extrabold tracking-[0.04em] text-blue-600 dark:text-blue-300">
              DUKUNG OPEN SOURCE
            </p>
            <h4
              id="support-open-source-title"
              class="mt-2 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-slate-950 dark:text-white"
            >
              Dukung dengan dana, kode, atau cerita Anda.
            </h4>
            <p class="mt-1 text-sm leading-6 text-slate-600 sm:text-base dark:text-slate-300">
              Tiga cara untuk mendukung pengembangan open-source FlyEnv sekaligus mendapatkan
              Lisensi Pro.
            </p>

            <div class="mt-5 grid gap-3 sm:grid-cols-3">
              <a
                v-for="path in licensePaths"
                :key="path.title"
                :href="path.href"
                data-license-path
                class="group flex min-w-0 items-center gap-3 rounded-xl border border-white bg-white/90 p-4 !text-slate-800 no-underline shadow-[0_8px_22px_rgba(63,126,184,0.06)] transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-[0_12px_28px_rgba(63,126,184,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px dark:border-slate-700 dark:bg-slate-900/85 dark:!text-slate-100 dark:hover:border-blue-500"
              >
                <span
                  class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-400/10 dark:text-blue-300"
                  aria-hidden="true"
                >
                  <component :is="path.icon" class="h-6 w-6" />
                </span>
                <span class="min-w-0">
                  <strong class="block text-sm font-extrabold leading-5">{{ path.title }}</strong>
                  <span class="mt-0.5 block text-xs leading-5 text-slate-500 dark:text-slate-400">{{
                    path.description
                  }}</span>
                </span>
              </a>
            </div>
          </section>

          <a
            href="/id/license"
            data-pricing-cta
            data-analytics-event="license_click"
            data-analytics-surface="new-home-pricing-pro"
            class="mt-7 inline-flex min-h-14 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-base font-extrabold !text-white no-underline shadow-[0_16px_34px_rgba(37,99,235,0.24)] transition hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 active:translate-y-px sm:text-lg"
          >
            Lihat Pilihan Lisensi
            <ArrowRight class="h-5 w-5" aria-hidden="true" />
          </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import {
    ArrowRight,
    Box,
    CircleCheckFilled,
    Clock,
    Coin,
    CollectionTag,
    DataLine,
    Discount,
    Document,
    Download,
    Link,
    Lock,
    Monitor,
    Present,
    PriceTag,
    ShoppingCart,
    Tools,
    User
  } from '@element-plus/icons-vue'

  const highlights = [
    { label: 'Gratis $0', icon: Present },
    { label: '$10 sekali bayar', icon: PriceTag },
    { label: 'Tanpa langganan', icon: Discount }
  ]

  const freeFeatures = [
    { label: 'Runtime', icon: Box },
    { label: 'Database', icon: Coin },
    { label: 'HTTPS', icon: Lock },
    { label: 'Grup Startup', icon: User }
  ]

  const freeLimits = [
    { value: '3', label: 'situs lokal', icon: Monitor },
    { value: '3', label: 'proyek kustom per runtime', icon: CollectionTag },
    { value: '1', label: 'Cloudflare Tunnel', icon: Link },
    {
      value: '3 hari',
      label: 'masa uji coba alat bawaan',
      icon: Clock,
      tools: ['AI', 'Screenshot', 'Image Optimizer']
    }
  ]

  const benefitGroups = [
    {
      title: 'Tanpa batas',
      icon: DataLine,
      items: ['Situs lokal tanpa batas', 'Proyek kustom tanpa batas', 'Beberapa Cloudflare Tunnel']
    },
    {
      title: 'Semua alat',
      icon: Tools,
      items: [
        'AI Assistant versi lengkap',
        'Utilitas Screenshot versi lengkap',
        'Image Optimizer versi lengkap'
      ]
    },
    {
      title: 'Lisensi',
      icon: Lock,
      items: ['Pembaruan mendatang disertakan', 'Satu perangkat aktif', 'Lisensi dapat dipindahkan']
    }
  ]

  const licensePaths = [
    {
      title: 'Beli',
      description: '$10 sekali bayar',
      href: '/id/license',
      icon: ShoppingCart
    },
    {
      title: 'Kontribusi Kode',
      description: 'Kontribusi open-source',
      href: 'https://github.com/xpf0000/FlyEnv/blob/main/CONTRIBUTING.md',
      icon: Tools
    },
    {
      title: 'Bagikan Pengalaman',
      description: 'Artikel atau kisah orisinal',
      href: '/id/community',
      icon: Document
    }
  ]
</script>
