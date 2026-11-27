<script setup lang="ts">
  import { computed } from 'vue'
  import { communityEvidence } from '../../data/community-evidence'
  import communityPosts from '../../data/community-posts.json'
  import communityPostsZh from '../../data/community-posts-zh.json'
  import HomepageProof from '../AppCommunityEvidence/HomepageProof.vue'
  import HomeHero from './HomeHero.vue'
  import HomePricing from './HomePricing.vue'
  import HomeProjects from './HomeProjects.vue'
  import HomeStack from './HomeStack.vue'

  const props = withDefaults(defineProps<{ locale?: keyof typeof communityEvidence }>(), {
    locale: 'en'
  })
  const posts = computed(() => (props.locale === 'zh' ? communityPostsZh : communityPosts))
</script>

<template>
  <main class="home-landing">
    <HomeHero :locale="locale" />
    <HomeStack :locale="locale" />
    <HomeProjects :locale="locale" />
    <HomepageProof
      id="developer-stories"
      :posts="posts"
      :evidence="communityEvidence[locale]"
      :locale="locale"
    />
    <HomePricing :locale="locale" />
  </main>
</template>

<style src="./home.css"></style>
