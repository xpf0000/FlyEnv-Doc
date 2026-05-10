<template>
  <div class="community-posts">
    <!-- Hero Section -->
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t.heroTitle }}</h1>
        <p class="hero-subtitle">{{ t.heroSubtitle }}</p>

        <!-- Stats Dashboard -->
        <div class="stats-dashboard">
          <div class="stat-card">
            <div class="stat-value stat-indigo">{{ stats.articles }}</div>
            <div class="stat-label">{{ t.articles }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value stat-violet">{{ stats.authors }}</div>
            <div class="stat-label">{{ t.authors }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value stat-pink">{{ stats.languages }}</div>
            <div class="stat-label">{{ t.languages }}</div>
          </div>
          <div class="stat-card">
            <div class="stat-value stat-amber">{{ stats.platforms }}</div>
            <div class="stat-label">{{ t.platforms }}</div>
          </div>
        </div>

        <!-- Category Filter -->
        <div class="filter-bar">
          <button
            v-for="cat in categories"
            :key="cat.value"
            :class="['filter-tag', { active: activeCategory === cat.value }]"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <!-- Featured Article -->
      <div v-if="featuredPost && activeCategory === 'all'" class="featured-section">
        <div class="featured-header">
          <span class="featured-icon">🏆</span>
          <h2 class="featured-heading no-border">{{ t.featuredStory }}</h2>
        </div>
        <article class="featured-card">
          <div class="featured-gradient">
            <div class="featured-glow featured-glow-tr"></div>
            <div class="featured-glow featured-glow-bl"></div>
            <div class="featured-body">
              <div class="featured-tags-row">
                <span v-for="tag in getSEOTags(featuredPost.tags).slice(0, 2)" :key="tag" class="featured-tag-pill">{{ tag }}</span>
              </div>
              <a :href="featuredPost.url" target="_blank" rel="noopener noreferrer ugc" class="featured-title">{{ featuredPost.seoTitle || featuredPost.title }}</a>
              <p class="featured-summary">{{ featuredPost.seoSummary || featuredPost.summary }}</p>
              <div class="featured-meta">
                <div class="featured-author">
                  <div class="author-avatar">{{ (featuredPost.author || 'A').charAt(0) }}</div>
                  <span class="author-name">{{ featuredPost.author || t.unknownAuthor }}</span>
                </div>
                <span class="meta-sep">·</span>
                <span class="featured-platform">
                  <span v-html="getPlatformIcon(featuredPost.platform)" />
                  {{ featuredPost.platform }}
                </span>
                <span class="meta-sep">·</span>
                <span>{{ formatDate(featuredPost.date) }}</span>
                <span class="meta-sep">·</span>
                <span>⏱ {{ getReadTime(featuredPost) }}</span>
              </div>
              <a :href="featuredPost.url" target="_blank" rel="noopener noreferrer ugc" class="featured-btn">
                {{ t.readFullArticle }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </a>
            </div>
          </div>
        </article>
      </div>

      <!-- Trending Topics -->
      <div v-if="activeCategory === 'all'" class="trending-section">
        <div class="section-header">
          <span class="section-icon">🔥</span>
          <h2 class="section-heading no-border">{{ t.trendingTopics }}</h2>
        </div>
        <div class="topics-grid">
          <div
            v-for="topic in topics"
            :key="topic.value"
            class="topic-card"
            :class="topic.cardClass"
            @click="activeCategory = topic.filter"
          >
            <div class="topic-emoji">{{ topic.emoji }}</div>
            <div class="topic-name">{{ topic.label }}</div>
            <div class="topic-count">{{ topic.count }} {{ t.articlesLabel }}</div>
          </div>
        </div>
      </div>

      <!-- Grouped Posts -->
      <template v-if="activeCategory === 'all'">
        <!-- Latest Posts -->
        <div class="post-group">
          <h2 class="group-title group-latest no-border mb-6">{{ t.latestPosts }}</h2>
          <div class="article-grid">
            <article v-for="post in latestPosts" :key="post.id" class="article-card">
              <div class="card-topbar" :class="getTopBarGradient(post.tags)"></div>
              <div class="card-body">
                <div class="card-header-row">
                  <div class="card-platform">
                    <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                    {{ post.platform }}
                  </div>
                  <span class="type-badge" :class="getTypeBadgeClass(post.tags)">
                    {{ getContentTypeLabel(post.tags) }}
                  </span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
                <p class="card-summary">{{ post.seoSummary || post.summary }}</p>
                <div class="card-meta">
                  <span v-if="post.author">{{ post.author }}</span>
                  <span v-if="post.author" class="meta-dot">·</span>
                  <span>{{ formatDate(post.date) }}</span>
                  <span class="meta-dot">·</span>
                  <span>⏱ {{ getReadTime(post) }}</span>
                </div>
                <div class="card-tags">
                  <span v-for="tag in getSEOTags(post.tags)" :key="tag" class="card-tag">{{ tag }}</span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-link">
                  {{ post.platform === 'YouTube' || post.platform === 'Bilibili' ? t.watchVideo : t.readArticle }}
                  <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>

        <!-- Popular Posts -->
        <div class="post-group">
          <h2 class="group-title group-popular no-border mb-6">{{ t.popularPosts }}</h2>
          <div class="article-grid">
            <article v-for="post in popularPosts" :key="post.id" class="article-card">
              <div class="card-topbar" :class="getTopBarGradient(post.tags)"></div>
              <div class="card-body">
                <div class="card-header-row">
                  <div class="card-platform">
                    <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                    {{ post.platform }}
                  </div>
                  <span class="type-badge" :class="getTypeBadgeClass(post.tags)">
                    {{ getContentTypeLabel(post.tags) }}
                  </span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
                <p class="card-summary">{{ post.seoSummary || post.summary }}</p>
                <div class="card-meta">
                  <span v-if="post.author">{{ post.author }}</span>
                  <span v-if="post.author" class="meta-dot">·</span>
                  <span>{{ formatDate(post.date) }}</span>
                  <span class="meta-dot">·</span>
                  <span>⏱ {{ getReadTime(post) }}</span>
                </div>
                <div class="card-tags">
                  <span v-for="tag in getSEOTags(post.tags)" :key="tag" class="card-tag">{{ tag }}</span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-link">
                  {{ post.platform === 'YouTube' || post.platform === 'Bilibili' ? t.watchVideo : t.readArticle }}
                  <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>

        <!-- Docker Alternatives -->
        <div v-if="dockerPosts.length" class="post-group">
          <div class="group-header">
            <h2 class="group-title group-docker no-border">{{ t.dockerAlt }}</h2>
            <a href="#" class="view-all" @click.prevent="activeCategory = 'docker'">
              {{ t.viewAll }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="article-grid">
            <article v-for="post in dockerPosts" :key="post.id" class="article-card compact">
              <div class="card-topbar group-bar-docker"></div>
              <div class="card-body">
                <div class="card-platform-line">
                  <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                  {{ post.platform }}
                  <span class="meta-dot">·</span>
                  <span>⏱ {{ getReadTime(post) }}</span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
                <p class="card-summary compact">{{ post.seoSummary || post.summary }}</p>
                <div class="card-tags">
                  <span v-for="(tag, idx) in getSEOTags(post.tags, 'docker')" :key="tag" :class="['card-tag', idx === 0 ? 'tag-themed-docker' : '']">{{ tag }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Laravel & PHP -->
        <div v-if="laravelPosts.length" class="post-group">
          <div class="group-header">
            <h2 class="group-title group-laravel no-border">{{ t.laravelPHP }}</h2>
            <a href="#" class="view-all view-laravel" @click.prevent="activeCategory = 'laravel'">
              {{ t.viewAll }}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
              </svg>
            </a>
          </div>
          <div class="article-grid">
            <article v-for="post in laravelPosts" :key="post.id" class="article-card compact">
              <div class="card-topbar group-bar-laravel"></div>
              <div class="card-body">
                <div class="card-platform-line">
                  <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                  {{ post.platform }}
                  <span class="meta-dot">·</span>
                  <span>⏱ {{ getReadTime(post) }}</span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
                <p class="card-summary compact">{{ post.seoSummary || post.summary }}</p>
                <div class="card-tags">
                  <span v-for="(tag, idx) in getSEOTags(post.tags, 'laravel')" :key="tag" :class="['card-tag', idx === 0 ? 'tag-themed-laravel' : '']">{{ tag }}</span>
                </div>
              </div>
            </article>
          </div>
        </div>

        <!-- Load More -->
        <div v-if="remainingPosts.length && !showAll" class="load-more-wrap">
          <button class="load-more-btn" @click="showAll = true">
            {{ t.loadMore }}
          </button>
        </div>

        <!-- Remaining posts -->
        <div v-if="showAll" class="post-group">
          <div class="article-grid">
            <article v-for="post in remainingPosts" :key="post.id" class="article-card">
              <div class="card-topbar" :class="getTopBarGradient(post.tags)"></div>
              <div class="card-body">
                <div class="card-header-row">
                  <div class="card-platform">
                    <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                    {{ post.platform }}
                  </div>
                  <span class="type-badge" :class="getTypeBadgeClass(post.tags)">
                    {{ getContentTypeLabel(post.tags) }}
                  </span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
                <p class="card-summary">{{ post.seoSummary || post.summary }}</p>
                <div class="card-meta">
                  <span v-if="post.author">{{ post.author }}</span>
                  <span v-if="post.author" class="meta-dot">·</span>
                  <span>{{ formatDate(post.date) }}</span>
                  <span class="meta-dot">·</span>
                  <span>⏱ {{ getReadTime(post) }}</span>
                </div>
                <div class="card-tags">
                  <span v-for="tag in getSEOTags(post.tags)" :key="tag" class="card-tag">{{ tag }}</span>
                </div>
                <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-link">
                  {{ post.platform === 'YouTube' || post.platform === 'Bilibili' ? t.watchVideo : t.readArticle }}
                  <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              </div>
            </article>
          </div>
        </div>
      </template>

      <!-- Filtered view -->
      <template v-else>
        <div class="article-grid">
          <article v-for="post in filteredPosts" :key="post.id" class="article-card">
            <div class="card-topbar" :class="getTopBarGradient(post.tags)"></div>
            <div class="card-body">
              <div class="card-header-row">
                <div class="card-platform">
                  <span class="platform-icon" v-html="getPlatformIcon(post.platform)" />
                  {{ post.platform }}
                </div>
                <span class="type-badge" :class="getTypeBadgeClass(post.tags)">
                  {{ getContentTypeLabel(post.tags) }}
                </span>
              </div>
              <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-title">{{ post.seoTitle || post.title }}</a>
              <p class="card-summary">{{ post.seoSummary || post.summary }}</p>
              <div class="card-meta">
                <span v-if="post.author">{{ post.author }}</span>
                <span v-if="post.author" class="meta-dot">·</span>
                <span>{{ formatDate(post.date) }}</span>
                <span class="meta-dot">·</span>
                <span>⏱ {{ getReadTime(post) }}</span>
              </div>
              <div class="card-tags">
                <span v-for="tag in getSEOTags(post.tags)" :key="tag" class="card-tag">{{ tag }}</span>
              </div>
              <a :href="post.url" target="_blank" rel="noopener noreferrer ugc" class="card-link">
                {{ post.platform === 'YouTube' || post.platform === 'Bilibili' ? t.watchVideo : t.readArticle }}
                <svg class="link-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                </svg>
              </a>
            </div>
          </article>
        </div>
        <div v-if="filteredPosts.length === 0" class="empty-state">
          {{ t.noArticles }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Post {
  id: string
  title: string
  url: string
  author: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
  cover?: string
  featured?: boolean
  quality_score?: number
  relevance_score?: number
  seoTitle?: string
  seoSummary?: string
}

const props = defineProps<{
  posts: Post[]
  locale?: 'en' | 'zh'
}>()

const locale = computed(() => props.locale || 'en')

const t = computed(() => {
  const isZh = locale.value === 'zh'
  return {
    heroTitle: isZh ? 'FlyEnv 社区故事' : 'FlyEnv Community Stories',
    heroSubtitle: isZh
      ? '发现全球开发者如何使用 FlyEnv 简化本地开发工作流。从 macOS 到 Windows，从 Laravel 到 WordPress —— 这些都是真实用户撰写的真实故事。'
      : 'Discover how developers around the world use FlyEnv to streamline their local development workflow. From macOS to Windows, from Laravel to WordPress — these are real stories written by real users.',
    articles: isZh ? '文章' : 'Articles',
    authors: isZh ? '作者' : 'Authors',
    languages: isZh ? '语言' : 'Languages',
    platforms: isZh ? '平台' : 'Platforms',
    trendingTopics: isZh ? '热门主题' : 'Trending Topics',
    articlesLabel: isZh ? '篇文章' : 'articles',
    featuredStory: isZh ? '精选社区故事' : 'Featured Community Story',
    unknownAuthor: isZh ? '匿名' : 'Unknown',
    readFullArticle: isZh ? '阅读全文' : 'Read Full Article',
    readArticle: isZh ? '阅读文章' : 'Read Article',
    watchVideo: isZh ? '观看视频' : 'Watch Video',
    latestPosts: isZh ? '最新社区文章' : 'Latest Community Posts',
    popularPosts: isZh ? '最受欢迎' : 'Most Popular',
    dockerAlt: isZh ? 'Docker 替代方案' : 'Docker Alternatives',
    laravelPHP: isZh ? 'Laravel & PHP' : 'Laravel & PHP',
    loadMore: isZh ? '加载更多文章' : 'Load More Articles',
    noArticles: isZh ? '未找到符合条件的文章。' : 'No articles found matching your criteria.',
    viewAll: isZh ? '查看全部' : 'View All'
  }
})

const categories = computed(() => {
  const isZh = locale.value === 'zh'
  return [
    { label: isZh ? '全部' : 'All', value: 'all' },
    { label: 'macOS', value: 'macos' },
    { label: 'Windows', value: 'windows' },
    { label: 'Linux', value: 'linux' },
    { label: isZh ? '教程' : 'Tutorials', value: 'tutorial' },
    { label: isZh ? '评测' : 'Reviews', value: 'review' },
    { label: isZh ? '视频' : 'Videos', value: 'video' },
    { label: isZh ? 'Docker 替代' : 'Docker Alt', value: 'docker' },
    { label: 'Laravel', value: 'laravel' },
    { label: isZh ? 'XAMPP 替代' : 'XAMPP Alt', value: 'xampp' }
  ]
})

const activeCategory = ref('all')
const showAll = ref(false)

// Stats
const stats = computed(() => {
  const posts = props.posts
  const authors = new Set(posts.map((p) => p.author).filter(Boolean))
  const languages = new Set(posts.map((p) => p.language))
  const platforms = new Set(posts.map((p) => p.platform))
  return {
    articles: posts.length,
    authors: authors.size,
    languages: languages.size,
    platforms: platforms.size
  }
})

// Featured post
const featuredPost = computed(() => {
  const eligible = props.posts.filter(
    (p) => (p.quality_score || 0) >= 100 && (p.relevance_score || 0) >= 9
  )
  if (eligible.length === 0) return null
  return eligible.sort((a, b) => (b.quality_score || 0) - (a.quality_score || 0))[0]
})

// Latest posts
const latestPosts = computed(() => {
  const featuredId = featuredPost.value?.id
  return props.posts
    .filter((p) => p.id !== featuredId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 6)
})

// Popular posts
const popularPosts = computed(() => {
  const excluded = new Set([featuredPost.value?.id, ...latestPosts.value.map((p) => p.id)])
  return props.posts
    .filter((p) => !excluded.has(p.id))
    .sort((a, b) => (b.quality_score || 0) - (a.quality_score || 0))
    .slice(0, 3)
})

// Docker posts
const dockerPosts = computed(() => {
  const excluded = new Set([
    featuredPost.value?.id,
    ...latestPosts.value.map((p) => p.id),
    ...popularPosts.value.map((p) => p.id)
  ])
  return props.posts
    .filter((p) => !excluded.has(p.id) && p.tags.includes('docker'))
    .slice(0, 3)
})

// Laravel posts
const laravelPosts = computed(() => {
  const excluded = new Set([
    featuredPost.value?.id,
    ...latestPosts.value.map((p) => p.id),
    ...popularPosts.value.map((p) => p.id),
    ...dockerPosts.value.map((p) => p.id)
  ])
  return props.posts
    .filter((p) => !excluded.has(p.id) && (p.tags.includes('laravel') || p.tags.includes('php')))
    .slice(0, 3)
})

// Remaining posts
const usedPostIds = computed(() => {
  const ids = new Set<string>()
  if (featuredPost.value) ids.add(featuredPost.value.id)
  latestPosts.value.forEach((p) => ids.add(p.id))
  popularPosts.value.forEach((p) => ids.add(p.id))
  dockerPosts.value.forEach((p) => ids.add(p.id))
  laravelPosts.value.forEach((p) => ids.add(p.id))
  return ids
})

const remainingPosts = computed(() => {
  return props.posts.filter((p) => !usedPostIds.value.has(p.id))
})

// Filtered posts
const filteredPosts = computed(() => {
  let result = props.posts
  if (activeCategory.value !== 'all') {
    result = result.filter(
      (p) =>
        p.tags.includes(activeCategory.value) ||
        p.platform.toLowerCase().includes(activeCategory.value)
    )
  }
  return result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
})

// Topics
const topics = computed(() => {
  const isZh = locale.value === 'zh'
  const defs = [
    { label: isZh ? 'Docker 替代方案' : 'Docker Alternative', value: 'docker', filter: 'docker', emoji: '🐳', cardClass: 'topic-docker' },
    { label: isZh ? 'Laravel 开发' : 'Laravel Dev', value: 'laravel', filter: 'laravel', emoji: '🚀', cardClass: 'topic-laravel' },
    { label: isZh ? 'XAMPP 替代' : 'XAMPP Replacement', value: 'xampp', filter: 'xampp', emoji: '⚡', cardClass: 'topic-xampp' },
    { label: isZh ? 'macOS PHP' : 'macOS PHP', value: 'macos', filter: 'macos', emoji: '🍎', cardClass: 'topic-macos' },
    { label: isZh ? 'Linux 配置' : 'Linux Setup', value: 'linux', filter: 'linux', emoji: '🐧', cardClass: 'topic-linux' },
    { label: isZh ? '视频教程' : 'Video Tutorials', value: 'video', filter: 'video', emoji: '📹', cardClass: 'topic-video' }
  ]
  return defs.map((d) => ({
    ...d,
    count: props.posts.filter((p) => p.tags.includes(d.value) || p.tags.includes(d.filter)).length
  }))
})

// Helpers
const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString(locale.value === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}

const getReadTime = (post: Post) => {
  const wordCount = post.summary.length
  const isCJK = /[\u4e00-\u9fff]/.test(post.summary)
  const wpm = isCJK ? 400 : 200
  const minutes = Math.max(1, Math.ceil(wordCount / wpm))
  return `${minutes} ${locale.value === 'zh' ? '分钟' : 'min'}`
}

const getContentTypeLabel = (tags: string[]) => {
  if (tags.includes('video')) return 'Video'
  if (tags.includes('tutorial')) return 'Tutorial'
  if (tags.includes('review')) return 'Review'
  if (tags.includes('comparison')) return 'Comparison'
  if (tags.includes('case-study')) return 'Case Study'
  return 'Article'
}

const getTopBarGradient = (tags: string[]) => {
  if (tags.includes('tutorial')) return 'bar-tutorial'
  if (tags.includes('comparison')) return 'bar-comparison'
  if (tags.includes('review')) return 'bar-review'
  if (tags.includes('video')) return 'bar-video'
  return 'bar-article'
}

const getTypeBadgeClass = (tags: string[]) => {
  if (tags.includes('video')) return 'badge-red'
  if (tags.includes('tutorial')) return 'badge-indigo'
  if (tags.includes('review')) return 'badge-green'
  if (tags.includes('comparison')) return 'badge-orange'
  return 'badge-blue'
}

const getPlatformIcon = (platform: string) => {
  const map: Record<string, string> = {
    Medium: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>',
    YouTube: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    Bilibili: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.659.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/></svg>',
    'DEV.to': '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M0 0h24v24H0V0zm9.06 11.16c.18.09.33.27.33.48v4.02c0 .21-.15.39-.33.48l-3.07 1.84c-.18.09-.42.09-.6 0L2.32 16.14c-.18-.09-.33-.27-.33-.48v-4.02c0-.21.15-.39.33-.48l3.07-1.84c.18-.09.42-.09.6 0l3.05 1.84zM7.5 10.2L5.17 11.6v2.8l2.33 1.4 2.33-1.4v-2.8L7.5 10.2zm10.53-.25l-1.73 10.15h-2.15L13.9 12.6l-1.12 7.5h-2.15L9.12 9.95h2.3l1.08 7.5 1.12-7.5h2.15l1.08 7.5 1.12-7.5h2.28z"/></svg>',
    Blog: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>',
    CSDN: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="1" y="17" font-size="11" font-weight="bold">CSDN</text></svg>',
    掘金: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="1" y="17" font-size="11" font-weight="bold">掘金</text></svg>',
    今日头条: '<svg viewBox="0 0 24 24" fill="currentColor"><text x="1" y="17" font-size="10" font-weight="bold">头条</text></svg>',
    Reddit: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
    Facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    Discord: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>'
  }
  return map[platform] || map.Blog
}

const seoTagMapEn: Record<string, string> = {
  tutorial: 'Tutorial',
  comparison: 'Comparison',
  review: 'Review',
  video: 'Video',
  php: 'PHP',
  docker: 'Docker Alternative',
  laravel: 'Laravel Setup',
  xampp: 'XAMPP Replacement',
  macos: 'macOS Dev',
  windows: 'Windows Stack',
  linux: 'Linux Setup',
  wordpress: 'WordPress Local',
  nodejs: 'Node.js Manager',
  ai: 'AI Integration',
  laragon: 'Laragon',
  java: 'Java'
}

const seoTagMapZh: Record<string, string> = {
  tutorial: '教程',
  comparison: '对比',
  review: '评测',
  video: '视频',
  php: 'PHP',
  docker: 'Docker 替代',
  laravel: 'Laravel',
  xampp: 'XAMPP 替代',
  macos: 'macOS 开发',
  windows: 'Windows 开发',
  linux: 'Linux 配置',
  wordpress: 'WordPress 本地',
  nodejs: 'Node.js 管理',
  ai: 'AI 集成',
  laragon: 'Laragon',
  java: 'Java'
}

const getSEOTags = (tags: string[], theme?: string) => {
  const map = locale.value === 'zh' ? seoTagMapZh : seoTagMapEn
  const mapped = tags.map((tag) => map[tag] || tag)
  // Ensure theme tag is first for themed sections
  if (theme && tags.includes(theme)) {
    const themeLabel = map[theme] || theme
    const rest = mapped.filter((t) => t !== themeLabel)
    return [themeLabel, ...rest].slice(0, 3)
  }
  return mapped.slice(0, 3)
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  padding: 64px 0 48px;
  margin-bottom: 0;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  text-align: center;
}

.hero-title {
  font-size: 36px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 16px 0;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 48px;
  }
}

.hero-subtitle {
  font-size: 18px;
  color: #64748b;
  max-width: 640px;
  margin: 0 auto 40px;
  line-height: 1.625;
}

/* Stats Dashboard */
.stats-dashboard {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-bottom: 40px;
}

.stat-card {
  background: #fff;
  border-radius: 16px;
  padding: 20px 28px;
  min-width: 140px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  border: 1px solid #f1f5f9;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 4px;
  font-variant-numeric: tabular-nums;
}

.stat-indigo { color: #4f46e5; }
.stat-violet { color: #7c3aed; }
.stat-pink { color: #db2777; }
.stat-amber { color: #d97706; }

.stat-label {
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
}

/* Filter Bar */
.filter-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.filter-tag {
  padding: 8px 18px;
  border-radius: 9999px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #e2e8f0;
  background: #fff;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.filter-tag:hover {
  border-color: #c7d2fe;
  color: #4f46e5;
}

.filter-tag.active {
  background: #4f46e5;
  color: #fff;
  border-color: #4f46e5;
}

/* Main Content */
.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 48px 24px;
}

/* Featured Section */
.featured-section {
  margin-bottom: 56px;
}

.featured-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.featured-icon {
  font-size: 20px;
}

.featured-heading {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.featured-card {
  background: #fff;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.featured-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.15);
}

.featured-gradient {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%);
  padding: 40px;
  position: relative;
  min-height: 280px;
  display: flex;
  align-items: flex-end;
}

@media (min-width: 768px) {
  .featured-gradient {
    padding: 48px 56px;
  }
}

.featured-glow {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  filter: blur(60px);
  pointer-events: none;
}

.featured-glow-tr {
  top: 0;
  right: 0;
  width: 256px;
  height: 256px;
  transform: translate(30%, -30%);
}

.featured-glow-bl {
  bottom: 0;
  left: 0;
  width: 192px;
  height: 192px;
  transform: translate(-30%, 30%);
}

.featured-body {
  position: relative;
  z-index: 1;
  color: #fff;
  max-width: 700px;
}

.featured-tags-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.featured-tag-pill {
  padding: 5px 14px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(8px);
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
}

.featured-title {
  font-size: 22px;
  font-weight: 700;
  color: #fff;
  line-height: 1.3;
  margin: 0 0 12px 0;
  display: block;
  text-decoration: none;
}

@media (min-width: 768px) {
  .featured-title {
    font-size: 30px;
  }
}

.featured-summary {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.6;
  margin: 0 0 20px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.featured-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 24px;
}

.featured-author {
  display: flex;
  align-items: center;
  gap: 8px;
}

.author-avatar {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
}

.author-name {
  font-weight: 500;
}

.featured-platform {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.featured-platform :deep(svg) {
  width: 16px;
  height: 16px;
}

.meta-sep {
  opacity: 0.5;
}

.featured-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #fff;
  color: #4f46e5;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;
}

.featured-btn:hover {
  background: #eef2ff;
}

/* Trending Topics */
.trending-section {
  margin-bottom: 56px;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
}

.section-icon {
  font-size: 20px;
}

.section-heading {
  font-size: 18px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (min-width: 640px) {
  .topics-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1024px) {
  .topics-grid {
    grid-template-columns: repeat(6, 1fr);
  }
}

.topic-card {
  border-radius: 14px;
  padding: 18px 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
}

.topic-card:hover {
  transform: scale(1.02);
}

.topic-docker {
  background: linear-gradient(135deg, #fff7ed 0%, #fef3c7 100%);
  border-color: #fed7aa;
}

.topic-laravel {
  background: linear-gradient(135deg, #fef2f2 0%, #ffe4e6 100%);
  border-color: #fecaca;
}

.topic-xampp {
  background: linear-gradient(135deg, #eff6ff 0%, #cffafe 100%);
  border-color: #bfdbfe;
}

.topic-macos {
  background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
  border-color: #ddd6fe;
}

.topic-linux {
  background: linear-gradient(135deg, #f0fdf4 0%, #d1fae5 100%);
  border-color: #bbf7d0;
}

.topic-video {
  background: linear-gradient(135deg, #eef2ff 0%, #dbeafe 100%);
  border-color: #c7d2fe;
}

.topic-emoji {
  font-size: 24px;
  margin-bottom: 8px;
}

.topic-name {
  font-size: 14px;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 4px;
}

.topic-count {
  font-size: 12px;
  color: #64748b;
}

/* Post Groups */
.post-group {
  margin-bottom: 56px;
}

.group-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}

.group-title {
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
  padding-left: 16px;
  position: relative;
}

.group-title.no-border.mb-6{
  margin-bottom: 1.5rem;
}

.group-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 4px;
  bottom: 4px;
  width: 4px;
  border-radius: 2px;
}

.group-latest::before { background: #6366f1; }
.group-popular::before { background: #eab308; }
.group-docker::before { background: #f97316; }
.group-laravel::before { background: #ef4444; }

.view-all {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  color: #f97316;
  text-decoration: none;
  transition: color 0.2s;
}

.view-all:hover {
  color: #ea580c;
}

.view-laravel {
  color: #ef4444;
}

.view-laravel:hover {
  color: #dc2626;
}

/* Article Grid */
.article-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 24px;
}

@media (min-width: 768px) {
  .article-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .article-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Article Card */
.article-card {
  background: #fff;
  border-radius: 16px;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.article-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.15);
  border-color: #cbd5e1;
}

.card-topbar {
  height: 8px;
}

.bar-tutorial {
  background: linear-gradient(to right, #6366f1, #a855f7);
}

.bar-comparison {
  background: linear-gradient(to right, #f97316, #ef4444);
}

.bar-review {
  background: linear-gradient(to right, #22c55e, #10b981);
}

.bar-video {
  background: linear-gradient(to right, #ef4444, #ec4899);
}

.bar-article {
  background: linear-gradient(to right, #3b82f6, #06b6d4);
}

.group-bar-docker {
  background: linear-gradient(to right, #fb923c, #f87171);
}

.group-bar-laravel {
  background: linear-gradient(to right, #f87171, #f472b6);
}

.card-body {
  padding: 20px;
}

.card-header-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}

.card-platform {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #64748b;
}

.platform-icon {
  display: inline-flex;
  align-items: center;
}

.platform-icon :deep(svg) {
  width: 16px;
  height: 16px;
}

.type-badge {
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 999px;
}

.badge-indigo {
  background: #eef2ff;
  color: #4338ca;
}

.badge-orange {
  background: #fff7ed;
  color: #c2410c;
}

.badge-green {
  background: #f0fdf4;
  color: #15803d;
}

.badge-red {
  background: #fef2f2;
  color: #b91c1c;
}

.badge-blue {
  background: #eff6ff;
  color: #1d4ed8;
}

.card-title {
  font-size: 15px;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.4;
  margin: 0 0 8px 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-decoration: none;
  cursor: pointer;
}

.card-summary {
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  margin: 0 0 12px 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-summary.compact {
  -webkit-line-clamp: 2;
}

.card-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 12px;
}

.meta-dot {
  opacity: 0.5;
}

.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 14px;
}

.card-tag {
  padding: 3px 10px;
  background: #f1f5f9;
  color: #475569;
  font-size: 11px;
  font-weight: 500;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.2s;
}

.card-tag:hover {
  background: #e0e7ff;
  color: #4338ca;
}

.tag-themed-docker {
  background: #fff7ed;
  color: #c2410c;
}

.tag-themed-laravel {
  background: #fef2f2;
  color: #b91c1c;
}

.card-title:hover {
  color: #4f46e5;
}

.card-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 600;
  color: #4f46e5;
  text-decoration: none;
  transition: color 0.2s;
}

.card-link:hover {
  color: #4338ca;
}

.link-icon {
  width: 14px;
  height: 14px;
}

/* Compact card for Docker/Laravel sections */
.article-card.compact .card-platform-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #94a3b8;
  margin-bottom: 10px;
}

.card-platform-line .platform-icon :deep(svg) {
  width: 14px;
  height: 14px;
}

/* Load More */
.load-more-wrap {
  text-align: center;
  margin-bottom: 64px;
}

.load-more-btn {
  padding: 12px 32px;
  background: #fff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 500;
  color: #475569;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
}

.load-more-btn:hover {
  border-color: #c7d2fe;
  color: #4f46e5;
  background: #f5f7ff;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: #94a3b8;
  font-size: 15px;
}

</style>

<style>
/* Dark Mode Overrides */
.dark .hero-section {
  background: linear-gradient(135deg, #1a1a1e 0%, #16161a 100%);
}
.dark .hero-title {
  color: #f1f5f9;
}
.dark .hero-subtitle {
  color: #94a3b8;
}
.dark .stat-card {
  background: #1e1e20;
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
.dark .stat-label {
  color: #94a3b8;
}
.dark .filter-tag {
  background: #1e1e20;
  border-color: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
}
.dark .filter-tag:hover {
  border-color: #6366f1;
  color: #818cf8;
}
.dark .filter-tag.active {
  background: #4f46e5;
  color: #fff;
  border-color: #4f46e5;
}
.dark .featured-heading,
.dark .section-heading,
.dark .group-title {
  color: #f1f5f9;
}
.dark .topic-docker {
  background: linear-gradient(135deg, #2a1f14 0%, #2a2310 100%);
  border-color: rgba(251, 146, 60, 0.25);
}
.dark .topic-laravel {
  background: linear-gradient(135deg, #2a1818 0%, #2a1a1c 100%);
  border-color: rgba(248, 113, 113, 0.25);
}
.dark .topic-xampp {
  background: linear-gradient(135deg, #131e2a 0%, #10242a 100%);
  border-color: rgba(56, 189, 248, 0.25);
}
.dark .topic-macos {
  background: linear-gradient(135deg, #1e1a2a 0%, #1c1a2a 100%);
  border-color: rgba(167, 139, 250, 0.25);
}
.dark .topic-linux {
  background: linear-gradient(135deg, #0f1f17 0%, #0f2a1c 100%);
  border-color: rgba(52, 211, 153, 0.25);
}
.dark .topic-video {
  background: linear-gradient(135deg, #14182a 0%, #131a2a 100%);
  border-color: rgba(129, 140, 248, 0.25);
}
.dark .topic-name {
  color: #f1f5f9;
}
.dark .topic-count {
  color: #94a3b8;
}
.dark .article-card {
  background: #1e1e20;
  border-color: rgba(255, 255, 255, 0.08);
}
.dark .article-card:hover {
  border-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 20px 40px -12px rgba(0, 0, 0, 0.5);
}
.dark .card-platform,
.dark .card-summary {
  color: #94a3b8;
}
.dark .card-title {
  color: #f1f5f9;
}
.dark .card-title:hover {
  color: #818cf8;
}
.dark .card-meta {
  color: #64748b;
}
.dark .card-tag {
  background: rgba(255, 255, 255, 0.06);
  color: #94a3b8;
}
.dark .card-tag:hover {
  background: rgba(99, 102, 241, 0.2);
  color: #a5b4fc;
}
.dark .tag-themed-docker {
  background: rgba(251, 146, 60, 0.12);
  color: #fdba74;
}
.dark .tag-themed-laravel {
  background: rgba(248, 113, 113, 0.12);
  color: #fca5a5;
}
.dark .badge-indigo {
  background: rgba(99, 102, 241, 0.12);
  color: #a5b4fc;
}
.dark .badge-orange {
  background: rgba(251, 146, 60, 0.12);
  color: #fdba74;
}
.dark .badge-green {
  background: rgba(34, 197, 94, 0.12);
  color: #86efac;
}
.dark .badge-red {
  background: rgba(239, 68, 68, 0.12);
  color: #fca5a5;
}
.dark .badge-blue {
  background: rgba(59, 130, 246, 0.12);
  color: #93c5fd;
}
.dark .card-link {
  color: #818cf8;
}
.dark .card-link:hover {
  color: #a5b4fc;
}
.dark .view-all {
  color: #fb923c;
}
.dark .view-all:hover {
  color: #fdba74;
}
.dark .view-laravel {
  color: #f87171;
}
.dark .view-laravel:hover {
  color: #fca5a5;
}
.dark .load-more-btn {
  background: #1e1e20;
  border-color: rgba(255, 255, 255, 0.1);
  color: #cbd5e1;
}
.dark .load-more-btn:hover {
  background: #252529;
  border-color: #6366f1;
  color: #818cf8;
}
.dark .empty-state {
  color: #64748b;
}
.dark .card-platform-line {
  color: #64748b;
}
</style>
