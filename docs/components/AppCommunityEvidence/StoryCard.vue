<template>
  <article
    :class="[
      'rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900',
      { 'p-5': compact }
    ]"
  >
    <p class="mb-3 text-sm font-semibold text-indigo-600 dark:text-indigo-300">{{ evidence.scenario }}</p>
    <h3 class="mb-3 text-xl font-bold leading-snug text-slate-900 dark:text-white">
      {{ post.title }}
    </h3>
    <p class="mb-4 leading-7 text-slate-600 dark:text-slate-300">{{ evidence.editorialSummary }}</p>
    <p class="mb-5 text-sm text-slate-500 dark:text-slate-400">
      {{ post.author }} · {{ post.platform }} · {{ post.language.toUpperCase() }} · {{ formattedDate }}
    </p>
    <div class="flex flex-wrap gap-x-5 gap-y-3 text-sm font-semibold">
      <a
        :href="post.url"
        target="_blank"
        rel="noopener noreferrer"
        class="text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-300 dark:hover:text-indigo-200"
        @click="trackSource"
      >
        {{ labels.original }}
      </a>
      <a
        v-if="guidePath"
        :href="guidePath"
        class="text-slate-700 hover:text-indigo-700 hover:underline dark:text-slate-200 dark:hover:text-indigo-200"
        @click="trackGuide"
      >
        {{ labels.guide }}
      </a>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { CommunityEvidence, CommunityLocale, CommunityPost } from './types'
import { trackEvidenceEvent } from './track'

const props = defineProps<{
  post: CommunityPost
  evidence: CommunityEvidence
  locale: CommunityLocale
  placement: 'community' | 'home' | 'guide'
  guidePath?: string
  compact?: boolean
}>()

const labels = computed(() =>
  props.locale === 'zh'
    ? { original: '阅读原文', guide: '查看相关指南' }
    : { original: 'Read the original story', guide: 'See the related guide' }
)

const formattedDate = computed(() =>
  new Intl.DateTimeFormat(props.locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(props.post.date))
)

const sourceEvent = computed(() =>
  props.placement === 'home'
    ? 'home_community_story_source_click'
    : props.placement === 'guide'
      ? 'guide_community_story_source_click'
      : 'community_story_source_click'
)

const guideEvent = computed(() =>
  props.placement === 'home' ? 'home_community_story_guide_click' : 'community_story_guide_click'
)

function trackSource() {
  trackEvidenceEvent(sourceEvent.value, props.post.id, props.placement)
}

function trackGuide() {
  trackEvidenceEvent(guideEvent.value, props.post.id, props.placement)
}
</script>
