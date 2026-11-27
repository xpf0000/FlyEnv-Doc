<script setup lang="ts">
  import { computed } from 'vue'
  import type { CompareLocale } from '../data/compare/types'
  import {
    compareOverviewCopy,
    compareOverviewSourceNote,
    compareOverviewTools
  } from '../data/compare/prototype-index'
  import CompareIndexDiagram from './CompareIndexDiagram.vue'
  import memoryIcon from './SVG/AIMemory.svg'
  import kafkaIcon from './SVG/Kafka.svg'
  import searchIcon from './SVG/OpenSearch.svg'
  import llamaIcon from './SVG/LlamaCpp.svg'
  import sqlServerIcon from './SVG/SqlServer.svg'

  const props = withDefaults(defineProps<{ locale?: CompareLocale }>(), { locale: 'en' })
  const copy = computed(() => compareOverviewCopy[props.locale])
  const localizedHref = (path: string) => (props.locale === 'en' ? path : `/${props.locale}${path}`)

  const modules = [
    { name: 'AI Memory', slug: 'ai-memory', icon: memoryIcon },
    { name: 'MySQL Cluster', slug: 'mysql-cluster', icon: '/assets/demo-logos/mysql.svg' },
    { name: 'Kafka', slug: 'kafka', icon: kafkaIcon },
    { name: 'OpenSearch', slug: 'opensearch', icon: searchIcon },
    { name: 'llama.cpp', slug: 'llama-cpp', icon: llamaIcon },
    { name: 'SQL Server', slug: 'mssql', icon: sqlServerIcon }
  ]
  const marketScreenshot = '/assets/compare/plugin-market-clusters.webp'

  const featureSections = [
    { copyKey: 'runtimes', slug: 'per-project-runtimes', variant: 'runtimes' },
    { copyKey: 'startup', slug: 'startup-groups', variant: 'startup' }
  ] as const
  const matrixGroups = computed(() => [copy.value.cells.slice(0, 3), copy.value.cells.slice(3)])
</script>

<template>
  <main class="comparison-page prototype-index">
    <section class="hero" aria-labelledby="compare-title">
      <div class="wrap">
        <div class="crumb"
          ><span>{{ copy.navigation }}</span></div
        >
        <div class="hero-grid">
          <div>
            <div class="eyebrow">{{ copy.kicker }}</div>
            <h1 id="compare-title">
              {{ copy.headline[0] }}<br />
              <span class="accent">{{ copy.headline[1] }}<br />{{ copy.headline[2] }}</span>
            </h1>
            <p class="lead">{{ copy.intro }}</p>
            <div class="hero-actions">
              <a
                class="btn primary"
                :href="localizedHref('/download')"
                data-analytics-surface="compare-hero"
              >
                <span>{{ copy.download }} <span aria-hidden="true">→</span></span>
              </a>
              <a class="btn ghost" href="#tools">{{ copy.browse }}</a>
            </div>
            <div class="trust">
              <span>macOS</span><span>Windows</span><span>Linux</span><span>{{ copy.source }}</span>
            </div>
          </div>
          <CompareIndexDiagram :copy="copy" :locale="locale" variant="workspace" />
        </div>
      </div>
    </section>

    <section id="tools" class="section" aria-labelledby="tools-title">
      <div id="comparisons" class="wrap">
        <header class="section-head">
          <div class="eyebrow">{{ copy.tools[0] }}</div>
          <h2 id="tools-title">{{ copy.tools[1] }}</h2>
          <p class="section-description">{{ copy.tools[2] }}</p>
        </header>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <a
            v-for="(tool, index) in compareOverviewTools"
            :key="tool.slug"
            class="panel tool-card"
            :href="localizedHref('/compare/' + tool.slug)"
            data-analytics-surface="compare-entry"
          >
            <div class="card-top" aria-hidden="true">
              <span class="tool-icon" :style="{ backgroundColor: tool.color }">{{
                tool.mark
              }}</span>
              <span class="arrow">↗</span>
            </div>
            <h3
              ><span lang="en">FlyEnv vs {{ tool.name }}</span></h3
            >
            <p>{{ copy.taglines[index] }}</p>
            <span class="link">{{ copy.tools[3] }} <span aria-hidden="true">→</span></span>
          </a>
        </div>
      </div>
    </section>

    <section id="comparison" class="section tinted" aria-labelledby="matrix-title">
      <div class="wrap">
        <header class="section-head">
          <div class="eyebrow">{{ copy.matrix[0] }}</div>
          <h2 id="matrix-title">{{ copy.matrix[1] }}</h2>
          <p class="section-description">{{ copy.matrix[2] }}</p>
        </header>
        <div class="matrix-wrap" role="region" aria-labelledby="matrix-title" tabindex="0">
          <table aria-labelledby="matrix-title" aria-describedby="compare-matrix-note">
            <thead>
              <tr>
                <th scope="col">{{ copy.matrix[3] }}</th>
                <th scope="col" class="flycol">FlyEnv</th>
                <th scope="col">Laragon</th>
                <th scope="col">ServBay</th>
              </tr>
            </thead>
            <tbody v-for="(rows, group) in matrixGroups" :key="group">
              <tr class="rowgroup">
                <th scope="rowgroup" colspan="4">{{ copy.matrix[4 + group] }}</th>
              </tr>
              <tr v-for="[label, flyenv, laragon, servbay] in rows" :key="label">
                <th scope="row">{{ label }}</th>
                <td class="flycol">{{ flyenv }}</td>
                <td>{{ laragon }}</td>
                <td>{{ servbay }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p id="compare-matrix-note" class="note">{{ compareOverviewSourceNote[locale] }}</p>
        <p class="source">
          {{ copy.sources[0] }}: <a href="https://laragon.org/docs">{{ copy.sources[1] }}</a> ·
          <a href="https://www.servbay.com/features">{{ copy.sources[2] }}</a> ·
          <a :href="localizedHref('/features')">{{ copy.sources[3] }}</a>
        </p>
        <div class="benefits">
          <div v-for="[title, description] in copy.benefits" :key="title" class="benefit">
            <h3>{{ title }}</h3>
            <p>{{ description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="workflow" class="section" aria-labelledby="workflow-title">
      <div class="wrap">
        <header class="section-head">
          <div class="eyebrow">{{ copy.workflow[0] }}</div>
          <h2 id="workflow-title">{{ copy.workflow[1] }}</h2>
        </header>
        <div
          v-for="feature in featureSections"
          :key="feature.slug"
          class="feature-split"
          :class="{ reverse: feature.variant === 'startup' }"
        >
          <div>
            <div class="eyebrow">{{ copy[feature.copyKey][0] }}</div>
            <h3>{{ copy[feature.copyKey][1] }}</h3>
            <p>{{ copy[feature.copyKey][2] }}</p>
            <a class="link" :href="localizedHref('/features/' + feature.slug)">
              {{ copy[feature.copyKey][3] }} <span aria-hidden="true">→</span>
            </a>
          </div>
          <div class="visual">
            <CompareIndexDiagram :copy="copy" :locale="locale" :variant="feature.variant" />
          </div>
        </div>
      </div>
    </section>

    <section id="plugins" class="section tinted" aria-labelledby="market-title">
      <div class="wrap">
        <div id="plugin-market" class="workspace">
          <div>
            <div class="eyebrow">{{ copy.market[0] }}</div>
            <h2 id="market-title">{{ copy.market[1] }}</h2>
            <p>{{ copy.market[2] }}</p>
            <div class="hero-actions">
              <a
                class="btn dark-btn"
                :href="localizedHref('/features/plugin-market')"
                data-analytics-surface="compare-plugin-market"
              >
                {{ copy.market[3] }}
              </a>
            </div>
            <div class="note">{{ copy.market[4] }}</div>
          </div>
          <div class="diagram">
            <div class="diagram-top">
              <span class="diagram-title">{{ copy.market[5] }}</span>
              <span class="tiny-tag uppercase">{{ copy.market[6] }}</span>
            </div>
            <div class="module-grid">
              <a
                v-for="module in modules"
                :key="module.slug"
                class="module"
                :href="localizedHref('/features/' + module.slug)"
              >
                <span class="module-icon"
                  ><img :src="module.icon" alt="" width="18" height="18" loading="lazy"
                /></span>
                <b>{{ module.name }}</b>
              </a>
            </div>
            <div class="diagram-bottom">
              <a class="market-reference" :href="marketScreenshot">{{ copy.market[7] }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="download" class="section section-tight" aria-labelledby="download-title">
      <div class="wrap">
        <div class="cta">
          <div>
            <div class="eyebrow">{{ copy.final[0] }}</div>
            <h2 id="download-title">{{ copy.final[1] }}</h2>
            <p>{{ copy.final[2] }}</p>
          </div>
          <div class="hero-actions">
            <a
              class="btn dark-btn"
              :href="localizedHref('/download')"
              data-analytics-surface="compare-final-cta"
            >
              <span>{{ copy.download }} <span aria-hidden="true">→</span></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style src="./CompareIndexPage.css"></style>
