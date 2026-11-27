<script setup lang="ts">
  import { computed } from 'vue'
  import PrototypeComparisonWorkflow from './PrototypeComparisonWorkflow.vue'
  import type { CompareLocale } from '../data/compare/types'
  import {
    prototypeComparisons,
    type PrototypeComparisonSlug
  } from '../data/compare/prototype-details'
  import { getComparisonText } from '../data/compare/prototype-detail-locales'

  const props = withDefaults(
    defineProps<{ comparison: PrototypeComparisonSlug; locale?: CompareLocale }>(),
    { locale: 'en' }
  )

  const data = computed(() => prototypeComparisons[props.comparison])
  const tr = (text: string) => getComparisonText(text, props.locale)
  const href = (path: string) =>
    path.startsWith('/') && props.locale !== 'en' ? `/${props.locale}${path}` : path

  const faqAnswers = computed(() =>
    data.value.faq.map(({ question, answer, link }) => {
      const translated = tr(answer)
      const label = link ? tr(link.label) : ''
      const index = label ? translated.indexOf(label) : -1
      return {
        question: tr(question),
        answer: translated,
        reference:
          link && index >= 0
            ? {
                before: translated.slice(0, index),
                label,
                href: href(link.href),
                after: translated.slice(index + label.length)
              }
            : null
      }
    })
  )
</script>

<template>
  <main class="prototype-comparison comparison-page">
    <section class="hero" aria-labelledby="compare-heading">
      <div class="wrap">
        <nav class="crumb" :aria-label="tr('Breadcrumb')">
          <a :href="href('/compare/')" data-analytics-surface="compare-entry">{{
            tr('Compare')
          }}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{{ data.competitor }}</span>
        </nav>

        <div class="hero-grid">
          <div>
            <p class="eyebrow">{{ tr(data.hero.eyebrow) }}</p>
            <h1 id="compare-heading">
              {{ tr(data.hero.title) }}<br />
              <span class="accent accent-line">
                <template v-for="(line, index) in data.hero.headline" :key="line">
                  <br v-if="index" />{{ tr(line) }}
                </template>
              </span>
            </h1>
            <p class="lead">{{ tr(data.hero.description) }}</p>
            <div class="hero-actions">
              <a
                :href="href('/download')"
                class="btn primary"
                data-analytics-surface="compare-hero"
              >
                {{ tr('Download FlyEnv →') }}
              </a>
              <a href="#comparison" class="btn ghost">{{ tr('Compare capabilities') }}</a>
            </div>
            <div class="trust">
              <span>macOS</span><span>Windows</span><span>Linux</span>
              <span>{{ tr('Open source') }}</span>
            </div>
          </div>
          <PrototypeComparisonWorkflow :diagram="data.hero.diagram" :locale="locale" />
        </div>
      </div>
    </section>

    <nav class="feature-nav" :aria-label="tr('On this page')">
      <div class="wrap">
        <a v-for="link in data.jump" :key="link.href" :href="link.href">{{ tr(link.label) }}</a>
      </div>
    </nav>

    <section id="comparison" class="section tinted" aria-labelledby="table-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">{{ tr('The key differences') }}</p>
          <h2 id="table-title">{{ tr(data.matrix.title) }}</h2>
          <p>{{ tr(data.matrix.description) }}</p>
        </div>
        <div
          class="matrix-wrap"
          role="region"
          :aria-label="tr('Capability comparison')"
          tabindex="0"
        >
          <table>
            <thead>
              <tr>
                <th scope="col">{{ tr('Capability') }}</th>
                <th scope="col">{{ data.competitor }}</th>
                <th scope="col" class="flycol">FlyEnv</th>
              </tr>
            </thead>
            <tbody v-for="group in data.matrix.groups" :key="group.title">
              <tr class="rowgroup"
                ><th colspan="3" scope="rowgroup">{{ tr(group.title) }}</th></tr
              >
              <tr v-for="[capability, competitor, flyenv] in group.rows" :key="capability">
                <th scope="row">{{ tr(capability) }}</th>
                <td>{{ tr(competitor) }}</td>
                <td class="flycol">{{ tr(flyenv) }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="source">
          {{ tr('Product references:') }}
          <template v-for="(source, i) in data.matrix.sources" :key="source.href">
            <span v-if="i" aria-hidden="true"> · </span>
            <a :href="href(source.href)">{{ tr(source.label) }}</a>
          </template>
        </div>
        <div v-if="data.matrix.note" class="note">
          {{
            tr(
              'Capabilities and package availability vary by edition, operating system and release. Check the official documentation for your setup.'
            )
          }}
        </div>
        <div class="hero-actions">
          <a class="btn primary" :href="href('/download')" data-analytics-surface="compare-table">
            {{ tr('Try FlyEnv') }}
          </a>
          <a
            class="btn ghost"
            :href="href('/demos?video=' + data.demo)"
            data-analytics-surface="compare-demo"
          >
            {{ tr('Watch demos') }}
          </a>
        </div>
      </div>
    </section>

    <section id="advantages" class="section" aria-labelledby="advantages-title">
      <div class="wrap">
        <div class="section-head">
          <p class="eyebrow">{{ tr('What you gain') }}</p>
          <h2 id="advantages-title">{{ tr(data.advantages.title) }}</h2>
        </div>
        <div
          v-for="(feature, index) in data.advantages.features"
          :key="feature.title"
          class="feature-split"
          :class="{ reverse: index === 1 }"
        >
          <div>
            <p class="eyebrow">{{ tr(feature.label) }}</p>
            <h3>{{ tr(feature.title) }}</h3>
            <p>{{ tr(feature.description) }}</p>
            <a class="link" :href="href(feature.link.href)">{{ tr(feature.link.label) }}</a>
          </div>
          <div class="visual">
            <PrototypeComparisonWorkflow :diagram="feature.diagram" :locale="locale" />
          </div>
        </div>
      </div>
    </section>

    <section id="plugins" class="section tinted" aria-labelledby="plugin-market">
      <div class="wrap">
        <div class="workspace">
          <div>
            <p class="eyebrow">{{ tr(data.plugins.eyebrow) }}</p>
            <h2 id="plugin-market">{{ tr(data.plugins.title) }}</h2>
            <p>{{ tr(data.plugins.description) }}</p>
            <div class="hero-actions">
              <a
                :href="href('/features/plugin-market')"
                class="btn dark-btn"
                data-analytics-surface="compare-plugin-market"
                >{{ tr('Explore Plugin Market') }}</a
              >
            </div>
            <div class="note">
              {{ tr('Installing and updating plugins requires an active FlyEnv license.') }}
            </div>
          </div>
          <div class="diagram">
            <div class="diagram-top">
              <span class="diagram-title">{{ tr(data.plugins.heading) }}</span>
              <span class="tiny-tag">{{ tr('ON DEMAND') }}</span>
            </div>
            <div class="module-grid">
              <div v-for="[mark, module] in data.plugins.items" :key="module" class="module">
                <span class="module-icon" aria-hidden="true">{{ mark }}</span
                ><b>{{ module }}</b>
              </div>
            </div>
            <div class="diagram-bottom">{{ tr('Official catalog · third-party sources') }}</div>
          </div>
        </div>
      </div>
    </section>

    <section id="migration" class="section" aria-labelledby="migration-title">
      <div class="wrap">
        <div class="step-grid">
          <div>
            <p class="eyebrow">{{ tr('Try with a real project') }}</p>
            <h2 id="migration-title">{{ tr(data.migration.title) }}</h2>
            <p class="lead">{{ tr(data.migration.description) }}</p>
            <div class="hero-actions">
              <a
                class="btn primary"
                :href="href('/download')"
                data-analytics-surface="compare-migration"
              >
                {{ tr('Download FlyEnv') }}
              </a>
              <a
                class="btn ghost"
                :href="href('/guide/getting-started')"
                data-analytics-surface="compare-migration"
              >
                {{ tr('Getting started') }}
              </a>
            </div>
          </div>
          <div class="panel">
            <ol class="steps" role="list">
              <li v-for="step in data.migration.steps" :key="step.title" class="step">
                <h3>{{ tr(step.title) }}</h3>
                <p>{{ tr(step.description) }}</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" class="section tinted" aria-labelledby="faq-title">
      <div class="wrap">
        <div class="faq mx-auto">
          <div class="section-head">
            <p class="eyebrow">{{ tr('Questions') }}</p>
            <h2 id="faq-title">{{ tr('Frequently asked questions') }}</h2>
          </div>
          <details v-for="faq in faqAnswers" :key="faq.question">
            <summary>{{ faq.question }}</summary>
            <p v-if="faq.reference"
              >{{ faq.reference.before
              }}<a class="link" :href="faq.reference.href">{{ faq.reference.label }}</a
              >{{ faq.reference.after }}</p
            >
            <p v-else>{{ faq.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <section id="download" class="section section-tight" aria-labelledby="compare-download-title">
      <div class="wrap">
        <div class="cta">
          <div>
            <p class="eyebrow">{{ tr('Make it yours') }}</p>
            <h2 id="compare-download-title">{{ tr(data.download.title) }}</h2>
            <p>{{ tr(data.download.description) }}</p>
          </div>
          <div class="hero-actions">
            <a
              class="btn dark-btn"
              :href="href('/download')"
              data-analytics-surface="compare-final-cta"
            >
              {{ tr('Download FlyEnv →') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style src="./prototype-comparison-detail.css"></style>
