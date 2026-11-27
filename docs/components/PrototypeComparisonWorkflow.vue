<script setup lang="ts">
  import { ref } from 'vue'
  import type { CompareLocale } from '../data/compare/types'
  import type { PrototypeDiagram } from '../data/compare/prototype-details'
  import { getComparisonText } from '../data/compare/prototype-detail-locales'

  const props = defineProps<{ diagram: PrototypeDiagram; locale: CompareLocale }>()
  const tr = (text: string) => getComparisonText(text, props.locale)
  const running = ref(true)
</script>

<template>
  <div class="diagram">
    <div class="diagram-top">
      <div class="flex min-w-0 items-center gap-2">
        <img
          class="logo"
          src="/assets/home/newhome/FlyEnv-Icon.webp"
          alt=""
          width="29"
          height="29"
        />
        <span class="diagram-title">{{ tr(diagram.title) }}</span>
      </div>
      <span class="tiny-tag">{{ tr(diagram.tag) }}</span>
    </div>

    <div v-if="diagram.flow" class="flow-grid">
      <div v-for="[title, description] in diagram.flow" :key="title" class="flow-cell">
        <strong>{{ tr(title) }}</strong>
        <p>{{ tr(description) }}</p>
      </div>
    </div>

    <div v-for="project in diagram.projects" :key="project.name" class="project">
      <div class="project-head">
        <span>{{ tr(project.name) }}</span>
        <span class="tiny-tag">{{ tr(project.tag) }}</span>
      </div>
      <div class="flex flex-wrap gap-2">
        <span v-for="[chip, tone] in project.chips" :key="chip" class="chip" :class="tone">
          <i aria-hidden="true" />{{ tr(chip) }}
        </span>
      </div>
    </div>

    <div v-if="diagram.group" class="project">
      <div class="project-head">
        <span>{{ tr(diagram.group.name) }}</span>
        <button type="button" class="mini-btn" data-compare-startup @click="running = !running">
          {{ tr(running ? 'Stop group' : 'Start group') }}
        </button>
      </div>
      <div class="service-list" :data-running="running">
        <div v-for="service in diagram.group.services" :key="service" class="service">
          <span>{{ service }}</span>
          <span class="status" :class="{ 'is-stopped': !running }">
            {{ tr(running ? 'Running' : 'Stopped') }}
          </span>
        </div>
      </div>
      <span class="sr-only" role="status">
        {{ tr(running ? 'Group running' : 'Group stopped') }}
      </span>
    </div>

    <div v-if="diagram.foot || diagram.platforms" class="diagram-bottom">
      <span>{{ tr(diagram.foot ?? '') }}</span>
      <div v-if="diagram.platforms" class="platforms">
        <span v-for="platform in diagram.platforms" :key="platform">{{ platform }}</span>
      </div>
    </div>

    <div class="diagram-foot">
      {{
        tr(
          diagram.group
            ? 'Interactive concept · click to preview group state'
            : 'Illustrative workflow · not an application screenshot'
        )
      }}
    </div>
  </div>
</template>
