<template>
  <section class="community-channels" :aria-labelledby="channelsId">
    <div class="channels-shell">
      <header class="channels-heading">
        <h2 :id="channelsId" class="no-border">{{ title }}</h2>
        <p>{{ t.intro }}</p>
      </header>

      <div class="channel-grid">
        <component
          :is="channel.url ? 'a' : 'div'"
          v-for="channel in channels"
          :key="channel.name"
          :href="channel.url || undefined"
          :target="channel.url ? '_blank' : undefined"
          :rel="channel.url ? 'noopener noreferrer' : undefined"
          :class="['channel-card', { 'is-link': channel.url }]"
        >
          <span class="channel-mark" aria-hidden="true">{{ channel.mark }}</span>
          <div class="channel-copy">
            <h3>{{ channel.name }}</h3>
            <p>{{ channel.description }}</p>
          </div>
          <span v-if="channel.url" class="channel-action">{{ t.open }} <span aria-hidden="true">↗</span></span>
          <span v-else class="channel-action channel-group-number">{{ channel.groupNumber }}</span>
        </component>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  title: string
  locale?: 'en' | 'zh'
}>()

const isZh = computed(() => props.locale === 'zh')
const channelsId = 'community-channels'

const t = computed(() =>
  isZh.value
    ? {
        intro: '在适合你的地方提问、分享经验，或与其他开发者一起交流。',
        open: '进入社区'
      }
    : {
        intro: 'Ask questions, share what you learn, and meet other developers where it suits you.',
        open: 'Open community'
      }
)

const channels = computed(() => [
  {
    mark: 'GH',
    name: 'GitHub Discussions',
    url: 'https://github.com/xpf0000/FlyEnv/discussions',
    description: isZh.value ? '提问、报告想法并参与产品讨论。' : 'Ask questions, share ideas, and join product discussions.'
  },
  {
    mark: 'f',
    name: 'Facebook Group',
    url: 'https://www.facebook.com/groups/908637655411162',
    description: isZh.value ? '加入 Facebook 社区，交流日常使用经验。' : 'Join the Facebook group for everyday tips and conversation.'
  },
  {
    mark: 'D',
    name: 'Discord',
    url: 'https://discord.gg/u5SuMGxjPE',
    description: isZh.value ? '与开发者实时交流 FlyEnv 的使用问题。' : 'Chat with developers about using FlyEnv in real time.'
  },
  {
    mark: 'QQ',
    name: isZh.value ? 'QQ 群' : 'QQ Group',
    url: '',
    description: isZh.value ? '面向中文用户的 FlyEnv 交流群。' : 'A FlyEnv discussion group for Chinese-speaking users.',
    groupNumber: isZh.value ? '群号：540738893' : 'Group number: 540738893'
  }
])
</script>

<style scoped>
.community-channels {
  --channel-ink: #12312d;
  --channel-muted: #61736f;
  --channel-line: #d7e2de;
  --channel-surface: #f4f8f6;
  --channel-accent: #0b7667;
  margin: 0 auto;
  max-width: 78rem;
  padding: 0 1.5rem 4rem;
}

.channels-shell {
  border-top: 1px solid var(--channel-line);
  padding-top: 4rem;
}

.channels-heading h2 {
  color: var(--channel-ink);
  font-size: clamp(1.7rem, 3vw, 2.3rem);
  letter-spacing: -0.04em;
  line-height: 1.1;
  margin: 0;
}

.channels-heading p {
  color: var(--channel-muted);
  line-height: 1.65;
  margin: 0.75rem 0 0;
  max-width: 43rem;
}

.channel-grid {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin-top: 1.75rem;
}

.channel-card {
  background: var(--channel-surface);
  border: 1px solid var(--channel-line);
  border-radius: 1rem;
  color: inherit;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.25rem;
  text-decoration: none;
}

.channel-card.is-link {
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.channel-card.is-link:hover {
  border-color: color-mix(in srgb, var(--channel-accent) 45%, var(--channel-line));
  box-shadow: 0 1rem 2rem -1.65rem rgba(8, 57, 49, 0.42);
  transform: translateY(-3px);
}

.channel-mark {
  align-items: center;
  background: var(--channel-ink);
  border-radius: 0.55rem;
  color: #f5fffc;
  display: inline-flex;
  font-size: 0.72rem;
  font-weight: 800;
  height: 2rem;
  justify-content: center;
  letter-spacing: -0.04em;
  width: 2rem;
}

.channel-copy {
  margin-top: 1.2rem;
}

.channel-copy h3 {
  color: var(--channel-ink);
  font-size: 1rem;
  letter-spacing: -0.02em;
  line-height: 1.2;
  margin: 0;
}

.channel-copy p {
  color: var(--channel-muted);
  font-size: 0.87rem;
  line-height: 1.6;
  margin: 0.55rem 0 0;
}

.channel-action {
  color: var(--channel-accent);
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: auto;
  padding-top: 1.25rem;
}

.channel-group-number {
  color: var(--channel-muted);
  font-weight: 600;
}

.channel-card.is-link:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--channel-accent) 45%, transparent);
  outline-offset: 3px;
}

.dark .community-channels {
  --channel-ink: #e4efeb;
  --channel-muted: #9eb4ad;
  --channel-line: #2b4942;
  --channel-surface: #112a25;
  --channel-accent: #74d4c1;
}

.dark .channel-mark {
  color: #08251f;
}

@media (max-width: 900px) {
  .channel-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .community-channels {
    padding: 0 1rem 3rem;
  }

  .channels-shell {
    padding-top: 3rem;
  }
}

@media (max-width: 480px) {
  .channel-grid {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .community-channels *,
  .community-channels *::before,
  .community-channels *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
