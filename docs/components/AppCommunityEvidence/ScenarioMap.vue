<template>
  <section class="mx-auto max-w-7xl px-6 py-16 sm:py-20">
    <div class="max-w-3xl">
      <h2 class="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
        {{ copy.title }}
      </h2>
      <p class="mt-4 text-lg leading-8 text-slate-600 dark:text-slate-300">{{ copy.subtitle }}</p>
    </div>
    <div class="mt-10 grid gap-6 lg:grid-cols-3">
      <AppStoryCard
        v-for="item in stories"
        :key="item.evidence.postId"
        :post="item.post"
        :evidence="item.evidence"
        :locale="locale"
        placement="community"
        :guide-path="item.evidence.relatedGuides[0]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getEvidencePost } from '../../data/community-evidence'
import type { CommunityEvidence, CommunityLocale, CommunityPost } from './types'
import AppStoryCard from './StoryCard.vue'

const props = defineProps<{
  posts: CommunityPost[]
  evidence: CommunityEvidence[]
  locale: CommunityLocale
}>()

const copy = computed(() =>
  props.locale === 'zh'
    ? {
        title: '开发者如何使用 FlyEnv',
        subtitle: '按开发者实际解决的本地开发问题浏览公开故事。'
      }
    : {
        title: 'How developers use FlyEnv',
        subtitle: 'Explore public stories by the local-development problem each developer was solving.'
      }
)

const stories = computed(() =>
  props.evidence
    .filter((item) => item.featuredPlacements.includes('community-hero'))
    .map((evidence) => ({ evidence, post: getEvidencePost(props.posts, evidence) }))
)
</script>
