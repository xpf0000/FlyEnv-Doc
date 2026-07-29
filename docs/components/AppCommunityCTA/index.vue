<template>
  <section class="community-contribute" :aria-labelledby="contributeId">
    <div class="contribute-shell">
      <div class="contribute-copy">
        <h2 :id="contributeId" class="no-border">{{ t.title }}</h2>
        <p>{{ t.description }}</p>
      </div>

      <div class="contribute-side">
        <a :href="licensePath" class="contribute-action">
          {{ t.action }} <span aria-hidden="true">↗</span>
        </a>
        <p>{{ t.coverage(stats) }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale?: 'en' | 'zh'
  posts: Array<{ author?: string; language: string; platform: string }>
}>()

const isZh = computed(() => props.locale === 'zh')
const contributeId = 'community-contribute'

const stats = computed(() => ({
  authors: new Set(props.posts.map((post) => post.author).filter(Boolean)).size,
  languages: new Set(props.posts.map((post) => post.language).filter(Boolean)).size,
  platforms: new Set(props.posts.map((post) => post.platform).filter(Boolean)).size
}))

const licensePath = computed(() => (isZh.value ? '/zh/guide/about-license.html' : '/guide/about-license.html'))

const t = computed(() =>
  isZh.value
    ? {
        title: '写下你的 FlyEnv 使用经验',
        description: '公开发布的文章、教程或视频，可以帮助下一位开发者更快了解 FlyEnv 的实际使用场景。',
        action: '了解内容贡献说明',
        coverage: (value: typeof stats.value) =>
          `当前已收录 ${value.authors} 位作者、${value.languages} 种语言和 ${value.platforms} 个平台的公开内容。`
      }
    : {
        title: 'Share how you use FlyEnv',
        description:
          'A public article, tutorial, or video can help the next developer understand where FlyEnv fits in real work.',
        action: 'How stories are featured',
        coverage: (value: typeof stats.value) =>
          `This library currently brings together public writing from ${value.authors} authors across ${value.languages} languages and ${value.platforms} platforms.`
      }
)
</script>

<style scoped>
.community-contribute {
  --contribute-ink: #303242;
  --contribute-muted: #686b7d;
  --contribute-line: #e2e5f0;
  --contribute-panel: #eef0ff;
  --contribute-accent: #646cff;
  margin: 0 auto;
  max-width: 78rem;
  padding: 0 1.5rem 4.5rem;
}

.contribute-shell {
  align-items: center;
  background: var(--contribute-panel);
  border: 1px solid var(--contribute-line);
  border-radius: 1rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: minmax(0, 1.2fr) minmax(17rem, 0.8fr);
  padding: 2.2rem 2.4rem;
}

.contribute-copy h2 {
  color: var(--contribute-ink);
  font-size: clamp(1.5rem, 2.6vw, 2.1rem);
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
}

.contribute-copy p,
.contribute-side p {
  color: var(--contribute-muted);
  line-height: 1.65;
  margin: 0.7rem 0 0;
}

.contribute-copy p {
  max-width: 43rem;
}

.contribute-side {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
}

.contribute-action {
  align-items: center;
  background: var(--contribute-accent);
  border-radius: 999px;
  color: #f9faff;
  display: inline-flex;
  font-size: 0.88rem;
  font-weight: 700;
  gap: 0.45rem;
  padding: 0.75rem 1rem;
  text-decoration: none;
  transition: background-color 180ms ease, transform 180ms ease;
  white-space: nowrap;
}

.contribute-action:hover {
  background: #4d56d9;
  color: #f9faff;
  transform: translateY(-2px);
}

.contribute-action:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--contribute-accent) 45%, transparent);
  outline-offset: 3px;
}

.contribute-side p {
  font-size: 0.82rem;
}

.dark .community-contribute {
  --contribute-ink: #f0f1ff;
  --contribute-muted: #afb4d2;
  --contribute-line: #30365d;
  --contribute-panel: #202657;
  --contribute-accent: #8b90ff;
}

.dark .contribute-action,
.dark .contribute-action:hover {
  color: #151936;
}

@media (max-width: 767px) {
  .community-contribute {
    padding: 0 1rem 3.5rem;
  }

  .contribute-shell {
    grid-template-columns: 1fr;
    padding: 1.6rem 1.25rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .community-contribute *,
  .community-contribute *::before,
  .community-contribute *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
