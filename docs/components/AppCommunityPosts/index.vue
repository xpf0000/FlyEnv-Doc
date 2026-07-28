<template>
  <section class="community-library">
    <div class="community-shell">
      <header class="story-masthead">
        <div class="masthead-copy">
          <p class="story-kicker">{{ t.kicker }}</p>
          <h1>{{ t.title }}</h1>
          <p class="masthead-intro">{{ t.intro }}</p>
        </div>

        <dl class="story-index" :aria-label="t.coverageLabel">
          <div v-for="stat in stats" :key="stat.label" class="story-stat">
            <dt>{{ stat.label }}</dt>
            <dd>{{ stat.value }}</dd>
          </div>
        </dl>
      </header>

      <article v-if="leadPost" class="lead-story">
        <div class="lead-marker">
          <span>{{ t.leadLabel }}</span>
          <span>{{ formatDate(leadPost.date) }}</span>
        </div>

        <div class="lead-body">
          <div class="lead-source">
            <span class="source-name">{{ leadPost.platform }}</span>
            <span class="source-type">{{ contentType(leadPost) }}</span>
          </div>

          <a
            :href="leadPost.url"
            target="_blank"
            rel="noopener noreferrer ugc"
            class="lead-title"
          >
            {{ leadPost.title }}
          </a>
          <p class="lead-summary">{{ leadPost.summary }}</p>

          <div class="lead-footer">
            <div class="lead-meta">
              <span v-if="leadPost.author">{{ leadPost.author }}</span>
              <span>{{ languageLabel(leadPost.language) }}</span>
            </div>
            <div v-if="displayTags(leadPost).length" class="story-tags">
              <span v-for="tag in displayTags(leadPost)" :key="tag">{{ tag }}</span>
            </div>
          </div>
        </div>

        <a
          :href="leadPost.url"
          target="_blank"
          rel="noopener noreferrer ugc"
          class="lead-action"
        >
          {{ t.readStory }} <span aria-hidden="true">↗</span>
        </a>
      </article>

      <section class="browse-topics" :aria-labelledby="topicsId">
        <div class="section-copy">
          <h2 :id="topicsId">{{ t.browseTitle }}</h2>
          <p>{{ t.browseIntro }}</p>
        </div>
        <nav class="story-filters" :aria-label="t.filterLabel">
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            :aria-pressed="activeFilter === filter.value"
            :class="{ selected: activeFilter === filter.value }"
            @click="selectFilter(filter.value)"
          >
            {{ filter.label }}
            <span>{{ filter.count }}</span>
          </button>
        </nav>
      </section>

      <section class="story-library" :aria-labelledby="libraryId" aria-live="polite">
        <div class="library-heading">
          <h2 :id="libraryId">{{ activeFilter === 'all' ? t.libraryTitle : activeFilterLabel }}</h2>
          <p>{{ resultSummary }}</p>
        </div>

        <div v-if="visiblePosts.length" class="story-grid">
          <article v-for="post in visiblePosts" :key="post.id" class="story-card">
            <div class="card-topline">
              <span class="source-name">{{ post.platform }}</span>
              <span class="source-type">{{ contentType(post) }}</span>
            </div>

            <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="story-title">
              {{ post.title }}
            </a>
            <p class="story-summary">{{ post.summary }}</p>

            <footer class="story-footer">
              <div class="story-byline">
                <span v-if="post.author">{{ post.author }}</span>
                <span>{{ formatDate(post.date) }}</span>
                <span>{{ languageLabel(post.language) }}</span>
              </div>
              <div v-if="displayTags(post).length" class="story-tags">
                <span v-for="tag in displayTags(post)" :key="tag">{{ tag }}</span>
              </div>
            </footer>

            <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="story-action">
              {{ t.readStory }} <span aria-hidden="true">↗</span>
            </a>
          </article>
        </div>

        <div v-else class="story-empty">
          <h3>{{ t.emptyTitle }}</h3>
          <p>{{ t.emptyIntro }}</p>
          <button type="button" @click="selectFilter('all')">{{ t.resetFilter }}</button>
        </div>

        <button v-if="remainingCount > 0" type="button" class="show-more" @click="showMore = true">
          {{ t.showMore(remainingCount) }}
        </button>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface Post {
  id: string
  title: string
  url: string
  author?: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
  featured?: boolean
  quality_score?: number
  relevance_score?: number
}

interface FilterDefinition {
  value: string
  tags?: string[]
  label: string
}

const props = defineProps<{
  posts: Post[]
  locale?: 'en' | 'zh'
}>()

const locale = computed(() => props.locale || 'en')
const topicsId = 'community-topics'
const libraryId = 'community-story-library'
const activeFilter = ref('all')
const showMore = ref(false)
const pageSize = 9

const copy = {
  en: {
    kicker: 'Community stories',
    title: 'Stories from developers, gathered in one place',
    intro:
      'Public write-ups, tutorials, and reviews make it easier to see how other developers use FlyEnv before you try it yourself.',
    coverageLabel: 'Community story coverage',
    stories: 'Stories',
    authors: 'Authors',
    languages: 'Languages',
    platforms: 'Platforms',
    leadLabel: 'Latest story',
    browseTitle: 'Browse by the problem you are solving',
    browseIntro: 'Start with the experience closest to your own workflow.',
    filterLabel: 'Filter community stories',
    libraryTitle: 'Community library',
    resultSummary: (count: number) => `${count} ${count === 1 ? 'story' : 'stories'} to explore`,
    readStory: 'Read story',
    showMore: (count: number) => `Show ${count} more ${count === 1 ? 'story' : 'stories'}`,
    emptyTitle: 'No stories in this topic yet',
    emptyIntro: 'Try another topic to browse the full community library.',
    resetFilter: 'View all stories',
    filters: {
      all: 'All stories',
      switch: 'Switching stacks',
      php: 'PHP and Laravel',
      runtimes: 'Multiple runtimes',
      platforms: 'Cross-platform work',
      video: 'Video guides'
    },
    content: {
      video: 'Video',
      tutorial: 'Tutorial',
      comparison: 'Comparison',
      review: 'Review',
      story: 'Story'
    },
    tags: {
      tutorial: 'Tutorial',
      comparison: 'Comparison',
      review: 'Review',
      video: 'Video',
      php: 'PHP',
      laravel: 'Laravel',
      nodejs: 'Node.js',
      java: 'Java',
      docker: 'Docker',
      xampp: 'XAMPP',
      laragon: 'Laragon',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      wordpress: 'WordPress',
      postgresql: 'PostgreSQL',
      ai: 'AI',
      'case-study': 'Case study'
    }
  },
  zh: {
    kicker: '社区文章',
    title: '来自开发者的真实经验，集中在这里',
    intro: '将公开文章、教程和评测汇集起来，帮助你在尝试 FlyEnv 前了解其他开发者的实际使用方式。',
    coverageLabel: '社区内容覆盖范围',
    stories: '篇文章',
    authors: '位作者',
    languages: '种语言',
    platforms: '个平台',
    leadLabel: '最新文章',
    browseTitle: '从你正在解决的问题开始',
    browseIntro: '按贴近你当前工作流的使用场景浏览社区经验。',
    filterLabel: '筛选社区文章',
    libraryTitle: '社区文章库',
    resultSummary: (count: number) => `共 ${count} 篇文章`,
    readStory: '阅读原文',
    showMore: (count: number) => `展开另外 ${count} 篇文章`,
    emptyTitle: '这个主题还没有文章',
    emptyIntro: '切换到其他主题，继续浏览全部社区内容。',
    resetFilter: '查看全部文章',
    filters: {
      all: '全部文章',
      switch: '迁移与替代',
      php: 'PHP 与 Laravel',
      runtimes: '多运行时',
      platforms: '跨平台开发',
      video: '视频教程'
    },
    content: {
      video: '视频',
      tutorial: '教程',
      comparison: '对比',
      review: '评测',
      story: '文章'
    },
    tags: {
      tutorial: '教程',
      comparison: '对比',
      review: '评测',
      video: '视频',
      php: 'PHP',
      laravel: 'Laravel',
      nodejs: 'Node.js',
      java: 'Java',
      docker: 'Docker',
      xampp: 'XAMPP',
      laragon: 'Laragon',
      macos: 'macOS',
      windows: 'Windows',
      linux: 'Linux',
      wordpress: 'WordPress',
      postgresql: 'PostgreSQL',
      ai: 'AI',
      'case-study': '案例分享'
    }
  }
}

const t = computed(() => copy[locale.value])

const orderedPosts = computed(() =>
  [...props.posts].sort((first, second) => second.date.localeCompare(first.date))
)

const leadPost = computed(() => orderedPosts.value[0])

const stats = computed(() => [
  { label: t.value.stories, value: props.posts.length },
  { label: t.value.authors, value: new Set(props.posts.map((post) => post.author).filter(Boolean)).size },
  { label: t.value.languages, value: new Set(props.posts.map((post) => post.language).filter(Boolean)).size },
  { label: t.value.platforms, value: new Set(props.posts.map((post) => post.platform).filter(Boolean)).size }
])

const filterDefinitions = computed<FilterDefinition[]>(() => [
  { value: 'all', label: t.value.filters.all },
  { value: 'switch', tags: ['comparison', 'docker', 'xampp', 'laragon'], label: t.value.filters.switch },
  { value: 'php', tags: ['php', 'laravel'], label: t.value.filters.php },
  { value: 'runtimes', tags: ['nodejs', 'java'], label: t.value.filters.runtimes },
  { value: 'platforms', tags: ['macos', 'windows', 'linux'], label: t.value.filters.platforms },
  { value: 'video', tags: ['video'], label: t.value.filters.video }
])

const filters = computed(() =>
  filterDefinitions.value
    .filter(
      (filter) =>
        filter.value === 'all' ||
        props.posts.some((post) => filter.tags?.some((tag) => post.tags.includes(tag)))
    )
    .map((filter) => ({
      ...filter,
      count:
        filter.value === 'all'
          ? props.posts.length
          : props.posts.filter((post) => filter.tags?.some((tag) => post.tags.includes(tag))).length
    }))
)

const matchingPosts = computed(() => {
  if (activeFilter.value === 'all') {
    return orderedPosts.value.filter((post) => post.id !== leadPost.value?.id)
  }

  const filter = filterDefinitions.value.find((item) => item.value === activeFilter.value)
  return orderedPosts.value.filter((post) => filter?.tags?.some((tag) => post.tags.includes(tag)))
})

const visiblePosts = computed(() =>
  showMore.value ? matchingPosts.value : matchingPosts.value.slice(0, pageSize)
)

const remainingCount = computed(() => Math.max(matchingPosts.value.length - visiblePosts.value.length, 0))

const activeFilterLabel = computed(
  () => filters.value.find((filter) => filter.value === activeFilter.value)?.label || t.value.libraryTitle
)

const resultSummary = computed(() => t.value.resultSummary(matchingPosts.value.length))

function selectFilter(value: string) {
  activeFilter.value = value
  showMore.value = false
}

function contentType(post: Post) {
  if (post.tags.includes('video')) return t.value.content.video
  if (post.tags.includes('tutorial')) return t.value.content.tutorial
  if (post.tags.includes('comparison')) return t.value.content.comparison
  if (post.tags.includes('review')) return t.value.content.review
  return t.value.content.story
}

function displayTags(post: Post) {
  return post.tags
    .filter((tag) => !['tutorial', 'comparison', 'review', 'video'].includes(tag))
    .map((tag) => t.value.tags[tag as keyof typeof t.value.tags] || tag)
    .slice(0, 2)
}

function languageLabel(language: string) {
  return language.toUpperCase()
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  }).format(new Date(date))
}
</script>

<style scoped>
.community-library {
  --community-ink: #12312d;
  --community-muted: #61736f;
  --community-line: #d7e2de;
  --community-surface: #f4f8f6;
  --community-panel: #e5efeb;
  --community-accent: #0b7667;
  --community-accent-deep: #075c50;
  --community-accent-soft: #d5ece5;
  color: var(--community-ink);
  padding: 3rem 0 5rem;
}

.community-shell {
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 78rem;
  padding: 0 1.5rem;
}

.story-masthead {
  align-items: end;
  background: var(--community-surface);
  border: 1px solid var(--community-line);
  border-radius: 1rem;
  display: grid;
  gap: 2.5rem;
  grid-template-columns: minmax(0, 1.35fr) minmax(15rem, 0.65fr);
  overflow: hidden;
  padding: 3.5rem;
}

.story-kicker,
.lead-marker,
.source-name,
.source-type,
.story-stat dt {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  line-height: 1.2;
  text-transform: uppercase;
}

.story-kicker {
  color: var(--community-accent);
  margin: 0 0 1rem;
}

.masthead-copy h1,
.section-copy h2,
.library-heading h2,
.story-empty h3 {
  color: var(--community-ink);
  margin: 0;
}

.masthead-copy h1 {
  font-size: clamp(2.35rem, 5vw, 4.65rem);
  letter-spacing: -0.055em;
  line-height: 0.98;
  max-width: 10ch;
}

.masthead-intro {
  color: var(--community-muted);
  font-size: 1.05rem;
  line-height: 1.75;
  margin: 1.4rem 0 0;
  max-width: 38rem;
}

.story-index {
  display: grid;
  gap: 0;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  margin: 0;
}

.story-stat {
  border-bottom: 1px solid var(--community-line);
  padding: 1rem 0;
}

.story-stat:nth-last-child(-n + 2) {
  border-bottom: 0;
}

.story-stat:nth-child(odd) {
  padding-right: 1rem;
}

.story-stat:nth-child(even) {
  border-left: 1px solid var(--community-line);
  padding-left: 1rem;
}

.story-stat dt {
  color: var(--community-muted);
  margin: 0;
}

.story-stat dd {
  color: var(--community-accent-deep);
  font-size: clamp(1.85rem, 3vw, 2.6rem);
  font-variant-numeric: tabular-nums;
  font-weight: 700;
  letter-spacing: -0.06em;
  line-height: 1;
  margin: 0.5rem 0 0;
}

.lead-story {
  border-bottom: 1px solid var(--community-line);
  display: grid;
  gap: 2rem;
  grid-template-columns: 10rem minmax(0, 1fr) auto;
  padding: 3rem 0;
}

.lead-marker {
  color: var(--community-muted);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.lead-marker span:first-child {
  color: var(--community-accent);
}

.lead-body {
  min-width: 0;
}

.lead-source,
.card-topline {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.source-name {
  color: var(--community-accent-deep);
}

.source-type {
  color: var(--community-muted);
  font-weight: 600;
  letter-spacing: 0.04em;
}

.source-type::before {
  content: '/';
  margin-right: 0.6rem;
}

.lead-title,
.story-title {
  color: var(--community-ink);
  text-decoration: none;
}

.lead-title {
  display: inline-block;
  font-size: clamp(1.7rem, 2.8vw, 2.65rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 1.08;
  margin-top: 1rem;
}

.lead-title:hover,
.story-title:hover {
  color: var(--community-accent);
}

.lead-summary,
.story-summary {
  color: var(--community-muted);
  line-height: 1.72;
}

.lead-summary {
  font-size: 1rem;
  margin: 1rem 0 0;
  max-width: 53rem;
}

.lead-footer {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  justify-content: space-between;
  margin-top: 1.5rem;
}

.lead-meta,
.story-byline {
  color: var(--community-muted);
  display: flex;
  flex-wrap: wrap;
  font-size: 0.84rem;
  gap: 0.3rem 0.8rem;
}

.lead-meta span + span::before,
.story-byline span + span::before {
  color: var(--community-line);
  content: '/';
  margin-right: 0.8rem;
}

.story-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
}

.story-tags span {
  background: var(--community-accent-soft);
  border-radius: 999px;
  color: var(--community-accent-deep);
  font-size: 0.73rem;
  font-weight: 650;
  line-height: 1;
  padding: 0.45rem 0.65rem;
}

.lead-action,
.story-action,
.show-more,
.story-empty button {
  align-items: center;
  border-radius: 999px;
  display: inline-flex;
  font-size: 0.88rem;
  font-weight: 700;
  justify-content: center;
  text-decoration: none;
  transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease,
    transform 180ms ease;
}

.lead-action {
  align-self: start;
  background: var(--community-accent);
  color: #f5fffc;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  white-space: nowrap;
}

.lead-action:hover {
  background: var(--community-accent-deep);
  color: #f5fffc;
  transform: translateY(-2px);
}

.browse-topics {
  border-bottom: 1px solid var(--community-line);
  display: grid;
  gap: 1.5rem;
  padding: 3.5rem 0 2.5rem;
}

.section-copy h2,
.library-heading h2 {
  font-size: clamp(1.6rem, 3vw, 2.25rem);
  letter-spacing: -0.035em;
  line-height: 1.1;
}

.section-copy p,
.library-heading p {
  color: var(--community-muted);
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0.65rem 0 0;
}

.story-filters {
  display: flex;
  gap: 0.65rem;
  overflow-x: auto;
  padding-bottom: 0.3rem;
  scrollbar-width: thin;
}

.story-filters button,
.story-empty button,
.show-more {
  appearance: none;
  background: transparent;
  border: 1px solid var(--community-line);
  color: var(--community-ink);
  cursor: pointer;
  flex: 0 0 auto;
}

.story-filters button {
  align-items: center;
  border-radius: 999px;
  display: inline-flex;
  font-size: 0.86rem;
  font-weight: 650;
  gap: 0.55rem;
  padding: 0.64rem 0.8rem 0.64rem 0.95rem;
  transition: background-color 180ms ease, border-color 180ms ease, color 180ms ease,
    transform 180ms ease;
}

.story-filters button span {
  background: var(--community-panel);
  border-radius: 999px;
  color: var(--community-muted);
  font-size: 0.7rem;
  line-height: 1;
  padding: 0.27rem 0.4rem;
}

.story-filters button:hover,
.story-filters button.selected {
  background: var(--community-accent);
  border-color: var(--community-accent);
  color: #f5fffc;
}

.story-filters button:hover {
  transform: translateY(-1px);
}

.story-filters button.selected span,
.story-filters button:hover span {
  background: rgba(245, 255, 252, 0.2);
  color: #f5fffc;
}

.story-library {
  padding-top: 3.5rem;
}

.library-heading {
  align-items: end;
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  margin-bottom: 1.5rem;
}

.library-heading p {
  flex: 0 0 auto;
  margin: 0;
}

.story-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.story-card {
  border: 1px solid var(--community-line);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 1.35rem;
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.story-card:hover {
  border-color: color-mix(in srgb, var(--community-accent) 45%, var(--community-line));
  box-shadow: 0 1rem 2rem -1.65rem rgba(8, 57, 49, 0.45);
  transform: translateY(-3px);
}

.story-title {
  font-size: 1.16rem;
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.28;
  margin-top: 1rem;
}

.story-summary {
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  font-size: 0.9rem;
  margin: 0.85rem 0 0;
  overflow: hidden;
}

.story-footer {
  margin-top: auto;
  padding-top: 1.35rem;
}

.story-byline {
  border-top: 1px solid var(--community-line);
  line-height: 1.45;
  padding-top: 0.9rem;
}

.story-tags {
  margin-top: 0.8rem;
}

.story-action {
  color: var(--community-accent-deep);
  gap: 0.35rem;
  margin-top: 1.2rem;
  width: fit-content;
}

.story-action:hover {
  color: var(--community-accent);
  transform: translateX(2px);
}

.show-more {
  margin: 2rem auto 0;
  padding: 0.75rem 1rem;
}

.show-more:hover,
.story-empty button:hover {
  border-color: var(--community-accent);
  color: var(--community-accent);
  transform: translateY(-1px);
}

.story-empty {
  background: var(--community-surface);
  border: 1px solid var(--community-line);
  border-radius: 1rem;
  padding: 2.5rem;
  text-align: center;
}

.story-empty h3 {
  font-size: 1.2rem;
}

.story-empty p {
  color: var(--community-muted);
  margin: 0.65rem auto 1.2rem;
  max-width: 30rem;
}

.story-empty button {
  padding: 0.7rem 0.95rem;
}

.lead-title:focus-visible,
.story-title:focus-visible,
.lead-action:focus-visible,
.story-action:focus-visible,
.show-more:focus-visible,
.story-empty button:focus-visible,
.story-filters button:focus-visible {
  outline: 3px solid color-mix(in srgb, var(--community-accent) 45%, transparent);
  outline-offset: 3px;
}

.dark .community-library {
  --community-ink: #e4efeb;
  --community-muted: #9eb4ad;
  --community-line: #2b4942;
  --community-surface: #112a25;
  --community-panel: #1d4038;
  --community-accent: #36a994;
  --community-accent-deep: #74d4c1;
  --community-accent-soft: #1c4940;
}

.dark .lead-action {
  color: #06231d;
}

.dark .lead-action:hover {
  color: #06231d;
}

@media (max-width: 900px) {
  .story-masthead {
    grid-template-columns: 1fr;
  }

  .story-index {
    max-width: 32rem;
  }

  .lead-story {
    grid-template-columns: 1fr;
  }

  .lead-marker {
    flex-direction: row;
    justify-content: space-between;
  }

  .lead-action {
    justify-self: start;
  }

  .story-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 767px) {
  .community-library {
    padding: 1.5rem 0 3.5rem;
  }

  .community-shell {
    padding: 0 1rem;
  }

  .story-masthead {
    gap: 2rem;
    padding: 2rem 1.25rem;
  }

  .masthead-copy h1 {
    font-size: clamp(2.15rem, 12vw, 3.35rem);
    max-width: 12ch;
  }

  .masthead-intro {
    font-size: 0.98rem;
  }

  .lead-story {
    gap: 1.4rem;
    padding: 2.5rem 0;
  }

  .lead-title {
    font-size: 1.65rem;
  }

  .lead-footer,
  .library-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .browse-topics {
    padding: 2.75rem 0 2rem;
  }

  .story-library {
    padding-top: 2.75rem;
  }

  .story-grid {
    grid-template-columns: 1fr;
  }

  .story-card {
    padding: 1.2rem;
  }
}

@media (max-width: 480px) {
  .story-index {
    grid-template-columns: 1fr;
  }

  .story-stat,
  .story-stat:nth-last-child(-n + 2) {
    border-bottom: 1px solid var(--community-line);
    padding: 0.85rem 0;
  }

  .story-stat:nth-child(even) {
    border-left: 0;
    padding-left: 0;
  }

  .story-stat:last-child {
    border-bottom: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .community-library *,
  .community-library *::before,
  .community-library *::after {
    animation-duration: 0.01ms !important;
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
  }
}
</style>
