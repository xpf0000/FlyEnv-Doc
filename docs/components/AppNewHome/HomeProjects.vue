<script setup lang="ts">
  import { computed } from 'vue'
  import type { DemoLocale } from '../../data/demos'
  import {
    flyEnvRepository,
    homeComparisons,
    homeProjects,
    homeProjectsCopy,
    homeRepositoryLinks
  } from '../../data/home/projects'

  const props = defineProps<{ locale: DemoLocale }>()
  const copy = computed(() => homeProjectsCopy[props.locale])
  const prefix = computed(() => (props.locale === 'en' ? '' : `/${props.locale}`))
  const iconPaths = {
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    play: 'm9 5 12 7-12 7z',
    github:
      'M9 19c-4 1-4-2-6-2m12 5v-3a3 3 0 0 0-1-2c4-.5 7-2 7-6a5 5 0 0 0-1.3-3.5c.4-1 .3-2.2-.2-3.5 0 0-1.2-.4-3.6 1.3a13 13 0 0 0-7.8 0C5.7 3.6 4.5 4 4.5 4c-.5 1.3-.6 2.5-.2 3.5A5 5 0 0 0 3 11c0 4 3 5.5 7 6a3 3 0 0 0-1 2v3',
    code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-2-14-4 16',
    package: 'm12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5',
    message: 'M4 4h16v12H9l-5 4z'
  }
  const iconAttributes = {
    class: 'icon',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    'stroke-width': '1.7',
    'stroke-linecap': 'round' as const,
    'stroke-linejoin': 'round' as const,
    'aria-hidden': true as const
  }
</script>

<template>
  <section id="projects" class="section tinted" aria-labelledby="home-projects-heading">
    <div class="wrap">
      <div class="head-row">
        <div class="section-head">
          <span class="eyebrow">{{ copy.projects.eyebrow }}</span>
          <h2 id="home-projects-heading">{{ copy.projects.title }}</h2>
          <p>{{ copy.projects.description }}</p>
        </div>
        <a
          class="text-link"
          :href="`${prefix}/solutions`"
          data-analytics-surface="new-home-solution"
          data-analytics-content-id="solutions"
        >
          {{ copy.projects.allSolutions }}
          <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
        </a>
      </div>
      <div class="project-grid grid">
        <article v-for="project in homeProjects" :key="project.slug" class="project-card panel">
          <div class="project-art project-thumbnail">
            <img
              class="project-cover"
              :src="`/assets/home/projects/${project.slug}.webp`"
              width="768"
              height="432"
              loading="lazy"
              decoding="async"
              alt=""
            />
          </div>
          <div class="project-copy">
            <h3>{{ copy.projects.cards[project.slug].title }}</h3>
            <p>{{ copy.projects.cards[project.slug].description }}</p>
            <div class="project-actions flex flex-wrap items-center">
              <a
                class="text-link"
                :href="`${prefix}/demos?video=${project.demoId}`"
                :aria-label="`${copy.projects.watchDemo} · ${copy.projects.cards[project.slug].demoTitle}`"
                data-analytics-surface="new-home-project-demo"
                :data-analytics-content-id="project.demoId"
              >
                <svg v-bind="iconAttributes"><path :d="iconPaths.play" /></svg>
                {{ copy.projects.watchDemo }}
              </a>
              <a
                class="text-link"
                :href="`${prefix}${project.workflow}`"
                data-analytics-surface="new-home-solution"
                :data-analytics-content-id="project.slug"
              >
                {{
                  project.slug === 'local-ai-agent'
                    ? copy.projects.viewWorkflow
                    : copy.projects.viewSolution
                }}
                <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
              </a>
            </div>
          </div>
        </article>
      </div>
      <div class="demo-strip">
        <div class="demo-icon">
          <svg v-bind="iconAttributes"><path :d="iconPaths.play" /></svg>
        </div>
        <div>
          <b>{{ copy.projects.demosTitle }}</b>
          <p>{{ copy.projects.demosDescription }}</p>
        </div>
        <a
          class="btn secondary"
          :href="`${prefix}/demos`"
          data-analytics-surface="new-home-project-demo"
          data-analytics-content-id="demos"
        >
          {{ copy.projects.allDemos }}
          <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
        </a>
      </div>
    </div>
  </section>
  <section id="compare" class="section compare-section" aria-labelledby="home-comparisons-heading">
    <div class="wrap">
      <div class="head-row">
        <div class="section-head">
          <span class="eyebrow">{{ copy.comparisons.eyebrow }}</span>
          <h2 id="home-comparisons-heading">{{ copy.comparisons.title }}</h2>
          <p>{{ copy.comparisons.description }}</p>
        </div>
        <a
          class="text-link"
          :href="`${prefix}/compare/`"
          data-analytics-surface="new-home-compare"
          data-analytics-content-id="compare"
        >
          {{ copy.comparisons.allTools }}
          <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
        </a>
      </div>
      <div class="compare-grid grid">
        <a
          v-for="comparison in homeComparisons"
          :key="comparison.slug"
          class="compare-card panel"
          :href="`${prefix}/compare/${comparison.slug}`"
          data-analytics-surface="new-home-compare"
          :data-analytics-content-id="comparison.slug"
        >
          <span class="tech-dot" :style="{ '--tech': comparison.color }" aria-hidden="true">{{
            comparison.mark
          }}</span>
          <b>{{ comparison.name }}</b>
          <small>{{ copy.comparisons.cards[comparison.slug] }}</small>
          <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
        </a>
      </div>
    </div>
  </section>
  <section class="section open-section" aria-labelledby="home-open-source-heading">
    <div class="wrap open-grid">
      <div>
        <span class="eyebrow">{{ copy.openSource.eyebrow }}</span>
        <h2 id="home-open-source-heading">
          {{ copy.openSource.title[0] }}<br />{{ copy.openSource.title[1] }}
        </h2>
        <p class="lead">{{ copy.openSource.description }}</p>
        <div class="hero-actions flex flex-wrap items-center">
          <a class="btn dark-solid" :href="flyEnvRepository">
            <svg v-bind="iconAttributes"><path :d="iconPaths.github" /></svg>
            {{ copy.openSource.github }}
          </a>
          <a
            class="btn secondary"
            :href="`${prefix}/community`"
            data-analytics-surface="new-home-community"
          >
            {{ copy.openSource.community }}
            <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
          </a>
        </div>
      </div>
      <div class="repo-card panel">
        <div class="repo-top">
          <svg v-bind="iconAttributes"><path :d="iconPaths.github" /></svg>
          <span>xpf0000 / <b>FlyEnv</b></span>
          <span class="repo-public">{{ copy.openSource.public }}</span>
        </div>
        <div class="repo-desc">
          <b>{{ copy.openSource.repositoryDescription }}</b>
          <p>macOS · Windows · Linux</p>
        </div>
        <div class="repo-links">
          <a
            v-for="link in homeRepositoryLinks"
            :key="link.id"
            :href="`${flyEnvRepository}${link.path}`"
          >
            <svg v-bind="iconAttributes"><path :d="iconPaths[link.icon]" /></svg>
            <span>
              <b>{{ copy.openSource.repositoryLinks[link.id].label }}</b>
              <small>{{ copy.openSource.repositoryLinks[link.id].description }}</small>
            </span>
            <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
          </a>
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="community-strip">
        <div>
          <span class="section-label">{{ copy.openSource.community }}</span>
          <h3>{{ copy.openSource.communityTitle }}</h3>
          <p>{{ copy.openSource.communityDescription }}</p>
        </div>
        <a
          class="text-link"
          :href="`${prefix}/community`"
          data-analytics-surface="new-home-community"
        >
          {{ copy.openSource.exploreCommunity }}
          <svg v-bind="iconAttributes"><path :d="iconPaths.arrow" /></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .project-card,
  .project-copy {
    display: flex;
    flex-direction: column;
  }

  .project-art.project-thumbnail {
    padding: 0;
    min-height: 0;
    background: var(--soft);
  }

  .project-cover {
    width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  .project-copy {
    flex: 1;
  }

  .project-actions {
    column-gap: 16px;
    row-gap: 8px;
    margin-top: auto;
  }
</style>
