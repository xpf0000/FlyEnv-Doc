<script setup lang="ts">
  import type { CompareLocale, ComparisonMigration } from '../data/compare/migrations'

  const props = defineProps<{
    migration: ComparisonMigration
    locale: CompareLocale
  }>()

  const labels = {
    en: {
      rollback: 'Roll back',
      checked: 'Official sources checked',
      demo: 'Watch the related FlyEnv demo'
    },
    zh: { rollback: '回退', checked: '官方资料核对日期', demo: '观看相关 FlyEnv 演示' },
    id: {
      rollback: 'Kembali ke lingkungan awal',
      checked: 'Sumber resmi diperiksa pada',
      demo: 'Tonton demo FlyEnv terkait'
    },
    es: {
      rollback: 'Vuelve al entorno original',
      checked: 'Fuentes oficiales consultadas el',
      demo: 'Mira la demo relacionada de FlyEnv'
    },
    vi: {
      rollback: 'Quay lại môi trường cũ',
      checked: 'Nguồn chính thức được kiểm tra ngày',
      demo: 'Xem bản demo FlyEnv liên quan'
    }
  }[props.locale]

  const copy = props.migration.copy[props.locale]
  const localizedHref = (path: string) => (props.locale === 'en' ? path : `/${props.locale}${path}`)
</script>

<template>
  <section class="px-6 py-20 sm:px-10 sm:py-24 lg:px-16" aria-labelledby="migration-title">
    <div class="mx-auto max-w-5xl">
      <h2
        id="migration-title"
        class="!m-0 !border-0 !p-0 !text-3xl font-black tracking-tight sm:!text-4xl"
      >
        {{ copy.title }}
      </h2>
      <p class="mt-4 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">{{
        copy.intro
      }}</p>
      <ol
        class="mt-6 list-decimal space-y-3 pl-6 text-base leading-7 text-slate-700 dark:text-slate-200"
      >
        <li v-for="step in copy.steps" :key="step" class="pl-2">{{ step }}</li>
      </ol>
      <p
        class="mt-6 rounded-xl bg-slate-50 p-4 text-base leading-7 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
      >
        <strong>{{ labels.rollback }}.</strong> {{ copy.rollback }}
      </p>
      <p v-if="copy.terms" class="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ copy.terms }}
        <a
          v-if="copy.license"
          :href="localizedHref('/license')"
          class="font-semibold !text-blue-700 underline dark:!text-blue-300"
          >{{ copy.license }}</a
        >
      </p>
      <p class="mt-6 text-sm leading-6 text-slate-600 dark:text-slate-300">
        {{ labels.checked }} <time datetime="2026-11-25">2026-11-25</time>.
      </p>
      <ul class="mt-1 flex flex-wrap gap-x-5 gap-y-1 text-sm leading-6">
        <li v-for="source in migration.sources" :key="source.href">
          <a :href="source.href" class="!text-blue-700 underline dark:!text-blue-300">{{
            source.label
          }}</a>
        </li>
      </ul>
      <div class="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm">
        <a
          :href="localizedHref(migration.guidePath)"
          class="font-bold !text-blue-700 underline dark:!text-blue-300"
          >{{ copy.guide }}</a
        >
        <a
          :href="localizedHref('/demos?video=' + migration.demoId)"
          class="font-semibold !text-blue-700 underline dark:!text-blue-300"
          >{{ labels.demo }}</a
        >
      </div>
    </div>
  </section>
</template>
