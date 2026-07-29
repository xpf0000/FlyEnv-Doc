<template>
  <section class="mx-auto max-w-7xl px-6 py-16 sm:py-20">
    <div class="mx-auto max-w-3xl text-center">
      <h2
        class="no-border !text-3xl md:!text-[40px] font-bold tracking-tight text-slate-900 dark:text-white"
      >
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
        placement="home"
        :guide-path="item.evidence.relatedGuides[0]"
      />
    </div>
    <div class="mt-10 text-center">
      <a
        :href="copy.hubPath"
        class="font-semibold text-indigo-600 hover:text-indigo-700 hover:underline dark:text-indigo-300 dark:hover:text-indigo-200"
        @click="trackHub"
      >
        {{ copy.hub }} →
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getEvidencePost } from '../../data/community-evidence'
import { trackEvidenceEvent } from './track'
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
        subtitle: '来自 PHP、Laravel、Linux 与多服务本地开发场景的公开开发者故事。',
        hub: '查看全部开发者故事',
        hubPath: '/zh/community.html'
      }
    : {
        title: 'How Developers Use FlyEnv',
        subtitle:
          'Public stories from developers using FlyEnv across local PHP, Laravel, Linux, and multi-service workflows.',
        hub: 'Explore all developer stories',
        hubPath: '/community.html'
      }
)

const stories = computed(() =>
  props.evidence
    .filter((item) => item.featuredPlacements.includes('home'))
    .map((evidence) => ({ evidence, post: getEvidencePost(props.posts, evidence) }))
)

function trackHub() {
  trackEvidenceEvent('community_hub_click', 'homepage', 'home')
}
</script>
