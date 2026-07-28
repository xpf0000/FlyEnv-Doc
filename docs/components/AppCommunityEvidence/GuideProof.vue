<template>
  <aside v-if="proof && story" class="my-12 rounded-2xl bg-slate-50 p-6 dark:bg-slate-800/50">
    <h2 class="mb-5 text-2xl font-bold text-slate-900 dark:text-white">{{ heading }}</h2>
    <AppStoryCard
      :post="story"
      :evidence="proof"
      :locale="locale"
      placement="guide"
      compact
    />
  </aside>
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
  postId: string
  guidePath: string
}>()

const proof = computed(() =>
  props.evidence.find(
    (item) => item.postId === props.postId && item.relatedGuides.includes(props.guidePath)
  )
)

const story = computed(() => (proof.value ? getEvidencePost(props.posts, proof.value) : undefined))
const heading = computed(() => (props.locale === 'zh' ? '来自社区的真实使用场景' : 'From the community'))
</script>
