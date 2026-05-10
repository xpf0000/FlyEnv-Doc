<template>
  <div class="max-w-6xl mx-auto px-6 mb-16">
    <h2 class="text-xl font-bold channel-title text-center mb-8 no-border">{{ title }}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      <a
        v-for="channel in channels"
        :key="channel.name"
        :href="channel.url || undefined"
        :target="channel.url ? '_blank' : undefined"
        :rel="channel.url ? 'noopener noreferrer' : undefined"
        :class="['channel-card', channel.url ? 'group' : 'cursor-default']"
      >
        <div class="channel-icon-wrap" :class="[channel.bgClass, channel.url ? 'group-hover:scale-110' : '']">
          <span class="channel-svg" v-html="channel.icon" />
        </div>
        <div class="channel-name">{{ channel.name }}</div>
        <div class="channel-desc">{{ channel.desc }}</div>
        <div class="channel-stat">{{ channel.stat }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  locale?: 'en' | 'zh'
}>()

const isZh = props.locale === 'zh'

const channels = [
  {
    name: 'GitHub Discussions',
    url: 'https://github.com/xpf0000/FlyEnv/discussions',
    bgClass: 'bg-slate-800',
    icon: '<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>',
    desc: isZh ? '提问和交流想法' : 'Ask questions & share ideas',
    stat: '⭐ 2.8k stars'
  },
  {
    name: 'Facebook Group',
    url: 'https://www.facebook.com/groups/908637655411162',
    bgClass: 'bg-blue-600',
    icon: '<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    desc: isZh ? '加入社区' : 'Join the community',
    stat: isZh ? '👥 500+ 成员' : '👥 500+ members'
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/u5SuMGxjPE',
    bgClass: 'bg-indigo-500',
    icon: '<svg class="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>',
    desc: isZh ? '与开发者交流' : 'Chat with developers',
    stat: isZh ? '🟢 200+ 在线' : '🟢 200+ online'
  },
  {
    name: isZh ? 'QQ 群' : 'QQ Group',
    url: '',
    bgClass: 'bg-rose-500',
    icon: '<svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>',
    desc: isZh ? '中文社区' : 'Chinese community',
    stat: '👥 540738893'
  }
]
</script>

<style scoped>
.channel-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 24px 16px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  transition: all 0.25s ease;
  text-decoration: none;
}
.channel-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.1);
  border-color: #cbd5e1;
}
.channel-icon-wrap {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  transition: transform 0.25s ease;
}
.channel-svg :deep(svg) {
  width: 24px;
  height: 24px;
}
.channel-name {
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;
}
.channel-desc {
  font-size: 12px;
  color: #64748b;
  margin-bottom: 6px;
}
.channel-stat {
  font-size: 12px;
  color: #94a3b8;
}

.channel-title {
  color: #0f172a;
}
</style>

<style>
.dark .channel-card {
  background: #1e1e20;
  border-color: rgba(255, 255, 255, 0.08);
}
.dark .channel-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 12px 32px -8px rgba(0, 0, 0, 0.5);
}
.dark .channel-name {
  color: #f1f5f9;
}
.dark .channel-desc {
  color: #94a3b8;
}
.dark .channel-stat {
  color: #64748b;
}
.dark .channel-title {
  color: #f1f5f9;
}
</style>
