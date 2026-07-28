<template>
  <div class="max-w-6xl mx-auto px-6 mb-16">
    <div class="cta-banner">
      <div class="cta-glow cta-glow-tr"></div>
      <div class="cta-glow cta-glow-bl"></div>
      <div class="cta-content">
        <h2 class="cta-title no-border">{{ t.title }}</h2>
        <p class="cta-desc">{{ t.desc }}</p>
        <a :href="licensePath" class="cta-btn no-underline">
          {{ isZh ? '了解内容贡献与许可证' : 'Learn about community contributions and licensing' }}
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </a>
        <div class="cta-footer">
          <template v-if="isZh">
            已展示：<span class="cta-stat">{{ stats.authors }} 位作者</span> ·
            <span class="cta-stat">{{ stats.languages }} 种语言</span> ·
            <span class="cta-stat">{{ stats.platforms }} 个平台</span>
          </template>
          <template v-else>
            Already featured: <span class="cta-stat">{{ stats.authors }} authors</span> ·
            <span class="cta-stat">{{ stats.languages }} languages</span> ·
            <span class="cta-stat">{{ stats.platforms }} platforms</span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  locale?: 'en' | 'zh'
  posts: Array<{ author: string; language: string; platform: string }>
}>()

const isZh = props.locale === 'zh'

const stats = computed(() => ({
  authors: new Set(props.posts.map((post) => post.author).filter(Boolean)).size,
  languages: new Set(props.posts.map((post) => post.language)).size,
  platforms: new Set(props.posts.map((post) => post.platform)).size
}))

const licensePath = computed(() =>
  isZh ? '/zh/guide/about-license.html' : '/guide/about-license.html'
)

const t = {
  title: isZh ? '公开分享你的 FlyEnv 使用体验' : 'Share your FlyEnv experience publicly',
  desc: isZh
    ? '阅读社区内容贡献与许可证说明，了解公开文章如何作为真实开发者经验被引用。'
    : 'Read how community contributions and licensing work for public articles used as real developer evidence.',
  btn: isZh ? '提交你的文章' : 'Submit Your Article',
  footer: isZh
    ? '已展示：\u200b7+ 位作者\u200b · \u200b1 种语言\u200b · \u200b5 个平台\u200b'
    : 'Already featured: \u200b18 authors\u200b · \u200b8 languages\u200b · \u200b6 platforms\u200b'
}

</script>

<style scoped>
.cta-banner {
  background: linear-gradient(to right, #4f46e5, #9333ea, #ec4899);
  border-radius: 20px;
  padding: 48px 32px;
  text-align: center;
  color: #fff;
  position: relative;
  overflow: hidden;
}
@media (min-width: 768px) {
  .cta-banner {
    padding: 64px 48px;
  }
}
.cta-glow {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(60px);
  pointer-events: none;
}
.cta-glow-tr {
  top: 0;
  right: 0;
  width: 384px;
  height: 384px;
  transform: translate(30%, -30%);
}
.cta-glow-bl {
  bottom: 0;
  left: 0;
  width: 256px;
  height: 256px;
  transform: translate(-30%, 30%);
}
.cta-content {
  position: relative;
  z-index: 1;
}
.cta-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
  line-height: 1.3;
}
@media (min-width: 768px) {
  .cta-title {
    font-size: 30px;
  }
}
.cta-desc {
  color: #c7d2fe;
  max-width: 640px;
  margin: 0 auto 32px;
  line-height: 1.625;
}
.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  background: #fff;
  color: #4f46e5;
  border-radius: 14px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
  box-shadow: 0 10px 30px -10px rgba(0,0,0,0.2);
}
.cta-btn:hover {
  background: #eef2ff;
}
.cta-footer {
  margin-top: 24px;
  font-size: 14px;
  color: #c7d2fe;
}
.cta-stat {
  font-weight: 600;
  color: #fff;
}
</style>
