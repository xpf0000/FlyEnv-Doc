<script setup lang="ts">
  import { computed, ref } from 'vue'
  import type { CompareLocale } from '../data/compare/types'
  import type { CompareOverviewCopy } from '../data/compare/prototype-index'

  const props = defineProps<{
    locale: CompareLocale
    copy: CompareOverviewCopy
    variant: 'workspace' | 'runtimes' | 'startup'
  }>()

  const technologies = [
    ['PHP 8.3', 'Nginx', 'MySQL', 'Redis'],
    ['Node.js', 'Python', 'PostgreSQL'],
    ['MCP', 'AI Memory', 'Local models'],
    ['PHP 7.4', 'MySQL']
  ]
  const localModels = {
    en: 'Local models',
    zh: '本地模型',
    id: 'Model lokal',
    es: 'Modelos locales',
    vi: 'Mô hình cục bộ'
  }
  const projectIndexes = computed(() => (props.variant === 'workspace' ? [0, 1, 2] : [0, 1, 3]))
  const services = ['Nginx', 'PHP-FPM', 'MySQL', 'Redis']
  const running = ref(true)
</script>

<template>
  <div class="diagram">
    <div class="diagram-top">
      <div class="flex items-center gap-2">
        <img
          class="overview-logo"
          src="/assets/home/newhome/FlyEnv-Icon.webp"
          alt=""
          width="29"
          height="29"
        />
        <span class="diagram-title">{{
          variant === 'startup' ? copy.startup[0] : copy.projects[0]
        }}</span>
      </div>
      <span class="tiny-tag uppercase">{{ copy.projects[1] }}</span>
    </div>

    <template v-if="variant === 'startup'">
      <div class="project">
        <div class="project-head">
          <span>{{ copy.simulation[0] }}</span>
          <button
            type="button"
            class="mini-btn"
            data-compare-startup-toggle
            @click="running = !running"
          >
            {{ running ? copy.simulation[1] : copy.simulation[2] }}
          </button>
        </div>
        <ul class="service-list" :class="{ 'is-stopped': !running }">
          <li v-for="service in services" :key="service" class="service">
            <span>{{ service }}</span>
            <span class="status">{{ running ? copy.simulation[3] : copy.simulation[4] }}</span>
          </li>
        </ul>
        <span class="sr-only" role="status">{{
          running ? copy.simulation[3] : copy.simulation[4]
        }}</span>
      </div>
      <div class="diagram-foot">{{ copy.simulation[5] }}</div>
    </template>

    <template v-else>
      <div v-for="index in projectIndexes" :key="index" class="project">
        <div class="project-head">
          <span>{{ copy.projectNames[index] }}</span>
          <span class="tiny-tag">{{ copy.projectLabels[index] }}</span>
        </div>
        <div class="flex flex-wrap gap-2">
          <span
            v-for="(technology, column) in technologies[index]"
            :key="technology"
            class="chip"
            :class="{ green: column === 1, purple: column === 2 }"
          >
            <i aria-hidden="true"></i
            >{{ technology === 'Local models' ? localModels[locale] : technology }}
          </span>
        </div>
      </div>
      <div class="diagram-bottom">
        <span>{{ copy.diagramBottom }}</span>
        <div class="platforms"> <span>Win</span><span>Mac</span><span>Linux</span> </div>
      </div>
      <div class="diagram-foot">{{ copy.illustration }}</div>
    </template>
  </div>
</template>
