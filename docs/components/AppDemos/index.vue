<template>
  <section class="demos-library">
    <div class="demos-shell">
      <header class="demos-masthead">
        <p class="demos-kicker">{{ t.kicker }}</p>
        <h1>{{ t.title }}</h1>
        <p class="demos-intro">{{ t.intro }}</p>
      </header>

      <section class="demos-controls demos-browse-bar" :aria-label="t.controlsLabel">
        <label class="demos-search-label">
          <span>{{ t.searchLabel }}</span>
          <input
            v-model="searchQuery"
            type="search"
            :placeholder="t.searchPlaceholder"
            autocomplete="off"
            @input="scheduleSearchTracking"
          />
        </label>

        <div class="demos-filter-scroll">
          <div class="demos-filter-row" role="group" :aria-label="t.categoryLabel">
            <button
              v-for="filter in filters"
              :key="filter.value"
              type="button"
              :aria-pressed="activeCategory === filter.value"
              :class="{ selected: activeCategory === filter.value }"
              @click="selectCategory(filter.value)"
            >
              <span>{{ filter.label }}</span>
              <span class="demos-filter-count">{{ filter.count }}</span>
            </button>
          </div>
        </div>
      </section>

      <p class="demos-result-summary" aria-live="polite">{{ resultSummary }}</p>

      <section v-if="showFeatured" class="demos-section" :aria-labelledby="featuredHeadingId">
        <div class="demos-section-heading">
          <h2 :id="featuredHeadingId">{{ t.featuredTitle }}</h2>
        </div>
        <div class="demos-featured-grid">
          <article
            v-for="demo in featuredDemos"
            :key="demo.id"
            class="demo-card demo-card-featured"
            :data-demo-id="demo.id"
          >
            <button
              type="button"
              class="demo-cover"
              :aria-label="playLabel(demo)"
              @click="openDemo(demo, 'featured', $event.currentTarget)"
            >
              <img
                class="demo-cover-thumbnail"
                :src="thumbnailUrl(demo)"
                alt=""
                width="480"
                height="270"
                loading="lazy"
                @error="hideBrokenThumbnail"
              />
              <span class="demo-cover-scrim" aria-hidden="true"></span>
              <span class="demo-cover-native" :class="coverToneClass(demo.category)">
                <span class="demo-cover-brand" aria-hidden="true">FlyEnv</span>
                <span class="demo-cover-category">{{ categoryLabel(demo.category) }}</span>
                <span
                  class="demo-cover-visual"
                  :class="{ 'no-logo': !coverVisual(demo).src }"
                  aria-hidden="true"
                >
                  <img
                    v-if="coverVisual(demo).src"
                    class="demo-cover-logo"
                    :src="coverVisual(demo).src"
                    alt=""
                    loading="lazy"
                    @error="hideBrokenCoverLogo"
                  />
                  <span class="demo-cover-fallback">
                    {{ coverVisual(demo).mark }}
                  </span>
                </span>
              </span>
              <span class="demo-play" aria-hidden="true"></span>
            </button>
            <div class="demo-card-body">
              <p class="demo-category">{{ categoryLabel(demo.category) }}</p>
              <h3>{{ demoCopy(demo).title }}</h3>
              <p class="demo-summary">{{ demoCopy(demo).summary }}</p>
              <ul class="demo-tags" :aria-label="t.tagsLabel">
                <li v-for="tag in demoCopy(demo).tags" :key="tag">{{ tag }}</li>
              </ul>
              <a
                v-for="guide in localizedGuideLinks(demo)"
                :key="guide.href"
                :href="guide.href"
                class="demo-related-link"
                @click="trackGuide(demo, guide.href)"
              >
                {{ guide.label }}
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="demos-section demos-all-section" :aria-labelledby="catalogHeadingId">
        <div class="demos-section-heading">
          <h2 :id="catalogHeadingId">{{ t.catalogTitle }}</h2>
        </div>
        <div v-if="visibleDemos.length" class="demos-grid">
          <article v-for="demo in visibleDemos" :key="demo.id" class="demo-card" :data-demo-id="demo.id">
            <button
              type="button"
              class="demo-cover"
              :aria-label="playLabel(demo)"
              @click="openDemo(demo, 'catalog', $event.currentTarget)"
            >
              <img
                class="demo-cover-thumbnail"
                :src="thumbnailUrl(demo)"
                alt=""
                width="480"
                height="270"
                loading="lazy"
                @error="hideBrokenThumbnail"
              />
              <span class="demo-cover-scrim" aria-hidden="true"></span>
              <span class="demo-cover-native" :class="coverToneClass(demo.category)">
                <span class="demo-cover-brand" aria-hidden="true">FlyEnv</span>
                <span class="demo-cover-category">{{ categoryLabel(demo.category) }}</span>
                <span
                  class="demo-cover-visual"
                  :class="{ 'no-logo': !coverVisual(demo).src }"
                  aria-hidden="true"
                >
                  <img
                    v-if="coverVisual(demo).src"
                    class="demo-cover-logo"
                    :src="coverVisual(demo).src"
                    alt=""
                    loading="lazy"
                    @error="hideBrokenCoverLogo"
                  />
                  <span class="demo-cover-fallback">
                    {{ coverVisual(demo).mark }}
                  </span>
                </span>
              </span>
              <span class="demo-play" aria-hidden="true"></span>
            </button>
            <div class="demo-card-body">
              <p class="demo-category">{{ categoryLabel(demo.category) }}</p>
              <h3>{{ demoCopy(demo).title }}</h3>
              <p class="demo-summary">{{ demoCopy(demo).summary }}</p>
              <ul class="demo-tags" :aria-label="t.tagsLabel">
                <li v-for="tag in demoCopy(demo).tags" :key="tag">{{ tag }}</li>
              </ul>
              <a
                v-for="guide in localizedGuideLinks(demo)"
                :key="guide.href"
                :href="guide.href"
                class="demo-related-link"
                @click="trackGuide(demo, guide.href)"
              >
                {{ guide.label }}
              </a>
            </div>
          </article>
        </div>
        <div v-else class="demos-empty">
          <h3>{{ t.emptyTitle }}</h3>
          <p>{{ t.emptyIntro }}</p>
          <button type="button" @click="resetDiscovery">{{ t.reset }}</button>
        </div>
      </section>
    </div>
  </section>

  <Teleport to="body">
    <div v-if="selectedDemo" class="demo-dialog-backdrop" @mousedown.self="closeDialog">
      <section
        ref="dialogElement"
        class="demo-dialog"
        role="dialog"
        aria-modal="true"
        :aria-label="demoCopy(selectedDemo).title"
        @keydown="trapDialogFocus"
      >
        <div class="demo-dialog-header">
          <p>{{ demoCopy(selectedDemo).title }}</p>
          <button
            ref="dialogCloseButton"
            type="button"
            class="demo-dialog-close"
            :aria-label="t.close"
            @click="closeDialog"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="demo-dialog-player">
          <iframe
            v-if="selectedDemo"
            :src="embedUrl"
            :title="demoCopy(selectedDemo).title"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="demo-dialog-actions">
          <button
            v-if="alternatePlatform"
            type="button"
            class="demo-platform-switch"
            @click="selectPlatform(alternatePlatform)"
          >
            {{ t.watchOn(alternatePlatform) }}
          </button>
          <a
            :href="currentPlatformUrl"
            target="_blank"
            rel="noopener noreferrer"
            @click="trackPlatform(selectedDemo, selectedPlatform)"
          >
            {{ t.openOn(selectedPlatform) }}
          </a>
        </div>
      </section>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { trackEvent } from '../../utils/analytics'
import { demos, demoCategories, getDemoCopy, getDemoEmbedUrl, getDemoPlatform } from '../../data/demos'
import type { Demo, DemoCategory, DemoLocale, DemoPlatform } from '../../data/demos'

type DemoPosition = 'featured' | 'catalog'
type FilterValue = 'all' | DemoCategory

const props = defineProps<{
  locale: DemoLocale
}>()

const copy = {
  en: {
    kicker: 'FlyEnv demonstrations',
    title: 'See what runs locally with FlyEnv',
    intro: 'Browse demo videos for real projects, runtimes, databases, developer tools, and AI workflows running locally with FlyEnv.',
    controlsLabel: 'Browse FlyEnv demonstrations',
    categoryLabel: 'Filter by category',
    searchLabel: 'Search demos',
    searchPlaceholder: 'Search a task, stack, or tool',
    all: 'All demos',
    featuredTitle: 'Featured demonstrations',
    catalogTitle: 'All demonstrations',
    tagsLabel: 'Demo tags',
    emptyTitle: 'No demonstrations match this search',
    emptyIntro: 'Clear the current filters to return to the complete catalog.',
    reset: 'Clear filters',
    play: 'Play demo',
    relatedLink: 'Open related guide',
    close: 'Close video player',
    resultSummary: (count: number) => `${count} ${count === 1 ? 'demo' : 'demos'} found`,
    watchOn: (platform: DemoPlatform) => `Watch on ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `Open on ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`
  },
  zh: {
    kicker: 'FlyEnv 演示',
    title: '查看 FlyEnv 可在本地运行的内容',
    intro: '浏览 FlyEnv 在本地运行真实项目、运行时、数据库、开发工具和 AI 工作流的演示视频。',
    controlsLabel: '浏览 FlyEnv 演示',
    categoryLabel: '按分类筛选',
    searchLabel: '搜索演示',
    searchPlaceholder: '搜索任务、技术栈或工具',
    all: '全部演示',
    featuredTitle: '精选演示',
    catalogTitle: '全部演示',
    tagsLabel: '演示标签',
    emptyTitle: '没有匹配的演示',
    emptyIntro: '清除当前筛选条件以返回完整目录。',
    reset: '清除筛选',
    play: '播放演示',
    relatedLink: '打开相关指南',
    close: '关闭视频播放器',
    resultSummary: (count: number) => `找到 ${count} 个演示`,
    watchOn: (platform: DemoPlatform) => `切换到 ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `在 ${platform === 'youtube' ? 'YouTube' : 'Bilibili'} 打开`
  },
  id: {
    kicker: 'Demo FlyEnv',
    title: 'Lihat apa yang berjalan lokal dengan FlyEnv',
    intro: 'Jelajahi video demo FlyEnv untuk proyek, runtime, database, alat developer, dan alur kerja AI yang berjalan secara lokal.',
    controlsLabel: 'Telusuri demo FlyEnv',
    categoryLabel: 'Filter berdasarkan kategori',
    searchLabel: 'Cari demo',
    searchPlaceholder: 'Cari tugas, stack, atau alat',
    all: 'Semua demo',
    featuredTitle: 'Demo pilihan',
    catalogTitle: 'Semua demo',
    tagsLabel: 'Tag demo',
    emptyTitle: 'Tidak ada demo yang cocok',
    emptyIntro: 'Hapus filter saat ini untuk kembali ke katalog lengkap.',
    reset: 'Hapus filter',
    play: 'Putar demo',
    relatedLink: 'Buka panduan terkait',
    close: 'Tutup pemutar video',
    resultSummary: (count: number) => `${count} demo ditemukan`,
    watchOn: (platform: DemoPlatform) => `Tonton di ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`,
    openOn: (platform: DemoPlatform) => `Buka di ${platform === 'youtube' ? 'YouTube' : 'Bilibili'}`
  }
}

const categoryValues: DemoCategory[] = [
  'getting-started',
  'projects',
  'runtimes',
  'databases-services',
  'developer-tools',
  'ai-mcp'
]

const coverToneClasses: Record<DemoCategory, string> = {
  'getting-started': 'demo-cover-tone-getting-started',
  projects: 'demo-cover-tone-projects',
  runtimes: 'demo-cover-tone-runtimes',
  'databases-services': 'demo-cover-tone-databases-services',
  'developer-tools': 'demo-cover-tone-developer-tools',
  'ai-mcp': 'demo-cover-tone-ai-mcp'
}

type DemoCoverRule = {
  match: RegExp
  mark: string
  src?: string
}

const coverFallbackMarks: Record<DemoCategory, string> = {
  'getting-started': '+',
  projects: '[]',
  runtimes: '>>',
  'databases-services': '<>',
  'developer-tools': '{}',
  'ai-mcp': '*'
}

const coverVisualRules: DemoCoverRule[] = [
  { match: /erpnext/, mark: 'ERP', src: '/assets/demo-logos/erpnext.svg' },
  { match: /gitea/, mark: 'GT', src: '/assets/demo-logos/gitea.svg' },
  { match: /nextcloud/, mark: 'NC', src: '/assets/demo-logos/nextcloud.svg' },
  { match: /wordpress/, mark: 'WP', src: '/assets/demo-logos/wordpress.svg' },
  { match: /laravel/, mark: 'LV', src: '/assets/demo-logos/laravel.svg' },
  { match: /postgresql/, mark: 'PG', src: '/assets/demo-logos/postgresql.svg' },
  { match: /redis/, mark: 'RD', src: '/assets/demo-logos/redis.svg' },
  { match: /rabbitmq/, mark: 'RMQ', src: '/assets/demo-logos/rabbitmq.svg' },
  { match: /php/, mark: 'PHP', src: '/assets/demo-logos/php.svg' },
  { match: /mysql/, mark: 'SQL', src: '/assets/demo-logos/mysql.svg' },
  { match: /mariadb/, mark: 'MDB', src: '/assets/demo-logos/mariadb.svg' },
  { match: /mongodb/, mark: 'MDB', src: '/assets/demo-logos/mongodb.svg' },
  { match: /neo4j/, mark: 'N4J', src: '/assets/demo-logos/neo4j.svg' },
  { match: /clickhouse/, mark: 'CH', src: '/assets/demo-logos/clickhouse.svg' },
  { match: /qdrant/, mark: 'Q', src: '/assets/demo-logos/qdrant.svg' },
  { match: /temporal/, mark: 'TMP', src: '/assets/demo-logos/temporal.svg' },
  { match: /consul/, mark: 'CSL', src: '/assets/demo-logos/consul.svg' },
  { match: /etcd/, mark: 'ETC', src: '/assets/demo-logos/etcd.svg' },
  { match: /zincsearch/, mark: 'ZS', src: '/assets/demo-logos/zincsearch.svg' },
  { match: /rustfs/, mark: 'RFS', src: '/assets/demo-logos/rustfs.svg' },
  { match: /podman/, mark: 'PDM', src: '/assets/demo-logos/podman.svg' },
  { match: /caddy/, mark: 'CD', src: '/assets/demo-logos/caddy.svg' },
  { match: /nginx/, mark: 'NG', src: '/assets/demo-logos/nginx.svg' },
  { match: /apache/, mark: 'AP', src: '/assets/demo-logos/apache.svg' },
  { match: /node\.js|nodejs/, mark: 'JS', src: '/assets/demo-logos/nodedotjs.svg' },
  { match: /python/, mark: 'PY', src: '/assets/demo-logos/python.svg' },
  { match: /\bgo\b/, mark: 'GO', src: '/assets/demo-logos/go.svg' },
  { match: /java|tomcat/, mark: 'JV', src: '/assets/demo-logos/openjdk.svg' },
  { match: /bun/, mark: 'BUN', src: '/assets/demo-logos/bun.svg' },
  { match: /ruby/, mark: 'RB', src: '/assets/demo-logos/ruby.svg' },
  { match: /rust/, mark: 'RS', src: '/assets/demo-logos/rust.svg' },
  { match: /flutter/, mark: 'FLT', src: '/assets/demo-logos/flutter.svg' },
  { match: /n8n/, mark: 'N8N', src: '/assets/demo-logos/n8n.svg' },
  { match: /ollama/, mark: 'OL', src: '/assets/demo-logos/ollama.svg' },
  { match: /claude/, mark: 'CC', src: '/assets/demo-logos/claude.svg' },
  { match: /django/, mark: 'DJ', src: '/assets/demo-logos/django.svg' },
  { match: /mcp/, mark: 'MCP' },
  { match: /startup|environment|runtime/, mark: '[]' }
]

const activeCategory = ref<FilterValue>('all')
const searchQuery = ref('')
const selectedDemo = ref<Demo | null>(null)
const selectedPlatform = ref<DemoPlatform>('youtube')
const playerTrigger = ref<HTMLElement | null>(null)
const dialogElement = ref<HTMLElement | null>(null)
const dialogCloseButton = ref<HTMLButtonElement | null>(null)
const featuredHeadingId = 'demos-featured-heading'
const catalogHeadingId = 'demos-catalog-heading'
let searchTimer: ReturnType<typeof window.setTimeout> | undefined

const t = computed(() => copy[props.locale])
const filters = computed(() => [
  { value: 'all' as const, label: t.value.all, count: demos.length },
  ...categoryValues.map((value) => ({
    value,
    label: demoCategories[props.locale][value],
    count: demos.filter((demo) => demo.category === value).length
  }))
])
const visibleDemos = computed(() => {
  const query = searchQuery.value.trim().toLocaleLowerCase()

  return demos.filter((demo) => {
    const demoCopy = getDemoCopy(demo, props.locale)
    const haystack = [
      demoCopy.title,
      demoCopy.summary,
      ...demoCopy.tags,
      demoCategories[props.locale][demo.category]
    ]
      .join(' ')
      .toLocaleLowerCase()

    return (activeCategory.value === 'all' || demo.category === activeCategory.value) &&
      (!query || haystack.includes(query))
  })
})
const featuredDemos = computed(() => demos.filter((demo) => demo.featured))
const showFeatured = computed(() => activeCategory.value === 'all' && !searchQuery.value.trim())
const resultSummary = computed(() => t.value.resultSummary(visibleDemos.value.length))
const embedUrl = computed(() => {
  if (!selectedDemo.value) return ''
  return getDemoEmbedUrl(selectedDemo.value, selectedPlatform.value)
})
const currentPlatformUrl = computed(() => {
  if (!selectedDemo.value) return ''
  return selectedDemo.value.platforms[selectedPlatform.value]
})
const alternatePlatform = computed<DemoPlatform | null>(() => {
  if (!selectedDemo.value?.platforms.bilibili) return null
  return selectedPlatform.value === 'youtube' ? 'bilibili' : 'youtube'
})

function demoCopy(demo: Demo) {
  return getDemoCopy(demo, props.locale)
}

function categoryLabel(category: DemoCategory) {
  return demoCategories[props.locale][category]
}

function coverToneClass(category: DemoCategory) {
  return coverToneClasses[category]
}

function coverVisual(demo: Demo) {
  const copy = demoCopy(demo)
  const haystack = [demo.id, copy.title, ...copy.tags].join(' ').toLocaleLowerCase()
  const rule = coverVisualRules.find((candidate) => candidate.match.test(haystack))

  return {
    mark: rule?.mark || coverFallbackMarks[demo.category],
    src: rule?.src
  }
}

function thumbnailUrl(demo: Demo) {
  return `https://i.ytimg.com/vi/${demo.youtubeId}/hqdefault.jpg`
}

function playLabel(demo: Demo) {
  return `${t.value.play}: ${demoCopy(demo).title}`
}

function localizedGuideLinks(demo: Demo) {
  const prefix = props.locale === 'en' ? '' : `/${props.locale}`
  return demo.relatedGuides.concat(demo.relatedModules).map((href) => ({
    href: `${prefix}${href}`,
    label: t.value.relatedLink
  }))
}

function syncDiscoveryUrl() {
  if (typeof window === 'undefined') return

  const url = new URL(window.location.href)
  const query = searchQuery.value.trim()

  if (activeCategory.value === 'all') url.searchParams.delete('category')
  else url.searchParams.set('category', activeCategory.value)

  if (query) url.searchParams.set('q', query)
  else url.searchParams.delete('q')

  window.history.replaceState({}, '', url)
}

function selectCategory(category: FilterValue) {
  activeCategory.value = category
  syncDiscoveryUrl()
  trackEvent('demos_filter_change', {
    category,
    result_count: visibleDemos.value.length
  })
}

function scheduleSearchTracking() {
  syncDiscoveryUrl()
  if (searchTimer) window.clearTimeout(searchTimer)

  searchTimer = window.setTimeout(() => {
    trackEvent('demos_search', {
      query_length: searchQuery.value.trim().length,
      result_count: visibleDemos.value.length
    })
  }, 250)
}

function resetDiscovery() {
  activeCategory.value = 'all'
  searchQuery.value = ''
  syncDiscoveryUrl()
}

function openDemo(demo: Demo, position: DemoPosition, trigger: EventTarget | null) {
  playerTrigger.value = trigger instanceof HTMLElement ? trigger : null
  selectedDemo.value = demo
  selectedPlatform.value = getDemoPlatform(demo, props.locale)
  trackEvent('demos_play', {
    demo_id: demo.id,
    category: demo.category,
    position,
    platform: selectedPlatform.value
  })
  nextTick(() => dialogCloseButton.value?.focus())
}

function hideBrokenThumbnail(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.classList.add('is-unavailable')
}

function hideBrokenCoverLogo(event: Event) {
  const image = event.currentTarget as HTMLImageElement
  image.classList.add('is-unavailable')
  image.parentElement?.classList.add('logo-missing')
}

function selectPlatform(platform: DemoPlatform) {
  if (!selectedDemo.value || platform === selectedPlatform.value) return
  selectedPlatform.value = platform
}

function trackPlatform(demo: Demo, platform: DemoPlatform) {
  trackEvent('demos_platform_open', {
    demo_id: demo.id,
    category: demo.category,
    platform
  })
}

function trackGuide(demo: Demo, target: string) {
  trackEvent('demos_guide_click', {
    demo_id: demo.id,
    category: demo.category,
    target
  })
}

function dialogFocusableElements() {
  return Array.from(dialogElement.value?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]') || [])
}

function trapDialogFocus(event: KeyboardEvent) {
  if (event.key !== 'Tab') return

  const elements = dialogFocusableElements()
  if (!elements.length) return

  const first = elements[0]
  const last = elements[elements.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

function closeDialog() {
  selectedDemo.value = null
  selectedPlatform.value = 'youtube'
  nextTick(() => playerTrigger.value?.focus())
}

function handleDialogKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeDialog()
}

onMounted(() => {
  const params = new URLSearchParams(window.location.search)
  const category = params.get('category')

  if (category && categoryValues.includes(category as DemoCategory)) {
    activeCategory.value = category as DemoCategory
  }

  searchQuery.value = params.get('q') || ''
})

watch(selectedDemo, (demo) => {
  if (typeof document === 'undefined') return
  if (demo) document.addEventListener('keydown', handleDialogKeydown)
  else document.removeEventListener('keydown', handleDialogKeydown)
})

onUnmounted(() => {
  if (typeof document !== 'undefined') document.removeEventListener('keydown', handleDialogKeydown)
  if (searchTimer) window.clearTimeout(searchTimer)
})
</script>

<style scoped>
.demos-library {
  --demos-accent: #1d4ed8;
  --demos-accent-dark: #1e3a8a;
  --demos-ink: #172033;
  --demos-muted: #526072;
  --demos-line: #d9e1ec;
  --demos-surface: #ffffff;
  --demos-wash: #f4f7fb;
  background: var(--demos-wash);
  color: var(--demos-ink);
  padding: 64px 24px 88px;
}

.demos-shell {
  margin: 0 auto;
  max-width: 1240px;
}

.demos-masthead {
  max-width: 760px;
}

.demos-kicker {
  color: var(--demos-accent-dark);
  font-size: 13px;
  font-weight: 700;
  margin: 0 0 12px;
}

.demos-masthead h1,
.demos-section-heading h2,
.demos-empty h3 {
  color: var(--demos-ink);
  letter-spacing: 0;
}

.demos-masthead h1 {
  font-size: 48px;
  line-height: 1.08;
  margin: 0;
  max-width: 700px;
}

.demos-intro {
  color: var(--demos-muted);
  font-size: 17px;
  line-height: 1.65;
  margin: 18px 0 0;
  max-width: 680px;
}

.demos-controls {
  align-items: end;
  border-bottom: 1px solid var(--demos-line);
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(240px, 360px) minmax(0, 1fr);
  margin-top: 42px;
  padding-bottom: 24px;
}

.demos-filter-scroll {
  grid-column: 2;
  grid-row: 1;
  min-width: 0;
}

.demos-filter-row {
  display: flex;
  gap: 8px;
  justify-content: flex-end;
  overflow-x: auto;
  padding-bottom: 2px;
  scrollbar-width: thin;
}

.demos-filter-row button,
.demos-empty button,
.demo-platform-switch {
  align-items: center;
  background: var(--demos-surface);
  border: 1px solid var(--demos-line);
  border-radius: 6px;
  color: var(--demos-ink);
  cursor: pointer;
  display: inline-flex;
  font: inherit;
  font-size: 14px;
  font-weight: 650;
  gap: 7px;
  justify-content: center;
  min-height: 40px;
  padding: 8px 11px;
  white-space: nowrap;
}

.demos-filter-row button:hover,
.demos-filter-row button.selected,
.demos-empty button:hover,
.demo-platform-switch:hover {
  border-color: var(--demos-accent);
  color: var(--demos-accent-dark);
}

.demos-filter-row button.selected {
  background: var(--demos-accent);
  border-color: var(--demos-accent);
  color: #ffffff;
}

.demos-filter-count {
  background: #e8eef8;
  border-radius: 999px;
  color: var(--demos-muted);
  font-size: 12px;
  line-height: 1;
  min-width: 20px;
  padding: 3px 5px;
  text-align: center;
}

.demos-filter-row button.selected .demos-filter-count {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.demos-search-label {
  display: grid;
  gap: 7px;
  grid-column: 1;
  grid-row: 1;
  justify-self: stretch;
  width: 100%;
}

.demos-search-label > span {
  color: var(--demos-muted);
  font-size: 13px;
  font-weight: 650;
}

.demos-search-label input {
  background: var(--demos-surface);
  border: 1px solid #b9c6d8;
  border-radius: 6px;
  color: var(--demos-ink);
  font: inherit;
  font-size: 15px;
  min-height: 40px;
  padding: 8px 11px;
  width: 100%;
}

.demos-search-label input::placeholder {
  color: #64748b;
}

.demos-result-summary {
  color: var(--demos-muted);
  font-size: 14px;
  margin: 18px 0 0;
}

.demos-section {
  margin-top: 52px;
}

.demos-section-heading {
  align-items: baseline;
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;
}

.demos-section-heading h2 {
  font-size: 24px;
  line-height: 1.25;
  margin: 0;
}

.demos-featured-grid,
.demos-grid {
  display: grid;
  gap: 18px;
}

.demos-featured-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.demos-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.demo-card {
  background: var(--demos-surface);
  border: 1px solid var(--demos-line);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 0;
  overflow: hidden;
}

.demo-card:hover {
  border-color: #aebed4;
}

.demo-cover {
  aspect-ratio: 16 / 9;
  background: #e7edf5;
  border: 0;
  cursor: pointer;
  display: block;
  isolation: isolate;
  overflow: hidden;
  padding: 0;
  position: relative;
  width: 100%;
}

.demo-cover-thumbnail,
.demo-cover-scrim,
.demo-cover-native {
  inset: 0;
  position: absolute;
}

.demo-cover-thumbnail {
  height: 100%;
  object-fit: cover;
  opacity: 0.18;
  transition: opacity 180ms ease, transform 180ms ease;
  width: 100%;
  z-index: 0;
}

.demo-cover-thumbnail.is-unavailable {
  opacity: 0;
}

.demo-cover-scrim {
  background: rgba(255, 255, 255, 0.7);
  z-index: 1;
}

.demo-cover-native {
  background: var(--cover-tint);
  border-top: 4px solid var(--cover-accent);
  color: var(--cover-ink);
  display: flex;
  flex-direction: column;
  padding: 18px;
  z-index: 2;
}

.demo-cover-brand {
  color: var(--cover-accent);
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1.2;
  opacity: 0.9;
  text-transform: uppercase;
}

.demo-cover-category {
  color: var(--cover-accent);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  margin-top: 8px;
  overflow-wrap: anywhere;
  text-transform: uppercase;
}

.demo-cover-visual {
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  min-height: 0;
  padding: 12px 24px 4px;
  position: relative;
}

.demo-cover-logo {
  display: block;
  height: auto;
  max-height: 88px;
  max-width: 38%;
  min-height: 48px;
  object-fit: contain;
  width: auto;
}

.demo-cover-logo.is-unavailable {
  display: none;
}

.demo-cover-fallback {
  color: var(--cover-accent);
  display: none;
  font-size: 44px;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  opacity: 0.16;
  text-align: center;
}

.demo-cover-visual.no-logo .demo-cover-fallback,
.demo-cover-visual.logo-missing .demo-cover-fallback {
  display: block;
  opacity: 0.84;
}

.demo-card-featured .demo-cover-native {
  padding: 22px;
}

.demo-card-featured .demo-cover-logo {
  max-height: 116px;
  max-width: 34%;
}

.demo-card-featured .demo-cover-fallback {
  font-size: 58px;
}

.demo-cover-tone-getting-started {
  --cover-accent: #1d4ed8;
  --cover-tint: rgba(219, 234, 254, 0.9);
  --cover-ink: #172554;
}

.demo-cover-tone-projects {
  --cover-accent: #047857;
  --cover-tint: rgba(209, 250, 229, 0.9);
  --cover-ink: #064e3b;
}

.demo-cover-tone-runtimes {
  --cover-accent: #b45309;
  --cover-tint: rgba(254, 243, 199, 0.9);
  --cover-ink: #78350f;
}

.demo-cover-tone-databases-services {
  --cover-accent: #4338ca;
  --cover-tint: rgba(224, 231, 255, 0.9);
  --cover-ink: #312e81;
}

.demo-cover-tone-developer-tools {
  --cover-accent: #be185d;
  --cover-tint: rgba(252, 231, 243, 0.9);
  --cover-ink: #831843;
}

.demo-cover-tone-ai-mcp {
  --cover-accent: #7c3aed;
  --cover-tint: rgba(237, 233, 254, 0.9);
  --cover-ink: #4c1d95;
}

.demo-cover:hover .demo-cover-thumbnail {
  opacity: 0.24;
  transform: scale(1.025);
}

.demo-cover:hover .demo-cover-thumbnail.is-unavailable {
  opacity: 0;
}

.demo-play {
  background: rgba(15, 23, 42, 0.84);
  border: 1px solid rgba(255, 255, 255, 0.82);
  border-radius: 50%;
  height: 42px;
  bottom: 18px;
  left: auto;
  position: absolute;
  right: 18px;
  top: auto;
  width: 42px;
  z-index: 3;
}

.demo-play::after {
  border-bottom: 7px solid transparent;
  border-left: 11px solid #ffffff;
  border-top: 7px solid transparent;
  content: '';
  left: 17px;
  position: absolute;
  top: 13px;
}

.demo-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
  padding: 18px;
}

.demo-category {
  color: var(--demos-accent-dark);
  font-size: 12px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0 0 9px;
}

.demo-card h3 {
  color: var(--demos-ink);
  font-size: 18px;
  line-height: 1.35;
  margin: 0;
  overflow-wrap: anywhere;
}

.demo-summary {
  color: var(--demos-muted);
  font-size: 14px;
  line-height: 1.55;
  margin: 10px 0 0;
}

.demo-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  list-style: none;
  margin: 16px 0 0;
  padding: 0;
}

.demo-tags li {
  background: #edf2f8;
  border-radius: 4px;
  color: #3b4d66;
  font-size: 12px;
  line-height: 1.3;
  overflow-wrap: anywhere;
  padding: 4px 6px;
}

.demo-related-link {
  color: var(--demos-accent-dark);
  font-size: 14px;
  font-weight: 700;
  margin-top: 17px;
  overflow-wrap: anywhere;
}

.demo-related-link:hover,
.demo-dialog-actions a:hover {
  color: var(--demos-accent);
}

.demos-empty {
  background: var(--demos-surface);
  border: 1px solid var(--demos-line);
  border-radius: 8px;
  padding: 32px;
  text-align: center;
}

.demos-empty h3 {
  font-size: 20px;
  margin: 0;
}

.demos-empty p {
  color: var(--demos-muted);
  margin: 8px auto 18px;
  max-width: 500px;
}

.demos-empty button {
  color: var(--demos-accent-dark);
}

:global(.demo-dialog-backdrop) {
  align-items: center;
  background: rgba(15, 23, 42, 0.72);
  display: flex;
  inset: 0;
  justify-content: center;
  padding: 16px;
  position: fixed;
  z-index: 100;
}

:global(.demo-dialog) {
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 22px 60px rgba(15, 23, 42, 0.35);
  color: #172033;
  max-height: calc(100vh - 32px);
  max-width: min(960px, calc(100vw - 32px));
  overflow: auto;
  width: 100%;
}

:global(.demo-dialog-header) {
  align-items: center;
  display: flex;
  gap: 18px;
  justify-content: space-between;
  padding: 16px 18px;
}

:global(.demo-dialog-header p) {
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  overflow-wrap: anywhere;
}

:global(.demo-dialog-close) {
  align-items: center;
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  color: #172033;
  cursor: pointer;
  display: inline-flex;
  flex: 0 0 auto;
  font-size: 24px;
  height: 36px;
  justify-content: center;
  line-height: 1;
  padding: 0;
  width: 36px;
}

:global(.demo-dialog-player) {
  aspect-ratio: 16 / 9;
  background: #0f172a;
}

:global(.demo-dialog-player iframe) {
  border: 0;
  display: block;
  height: 100%;
  width: 100%;
}

:global(.demo-dialog-actions) {
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: flex-end;
  padding: 16px 18px;
}

:global(.demo-dialog-actions a) {
  align-items: center;
  background: #1d4ed8;
  border: 1px solid #1d4ed8;
  border-radius: 6px;
  color: #ffffff;
  display: inline-flex;
  font-size: 14px;
  font-weight: 700;
  min-height: 40px;
  padding: 8px 12px;
  text-decoration: none;
}

:global(.demo-dialog-actions a:hover) {
  background: #1e3a8a;
  border-color: #1e3a8a;
  color: #ffffff;
}

button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid #f59e0b;
  outline-offset: 2px;
}

@media (max-width: 960px) {
  .demos-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 700px) {
  .demos-library {
    padding: 44px 16px 64px;
  }

  .demos-masthead h1 {
    font-size: 34px;
  }

  .demos-controls {
    align-items: stretch;
    grid-template-columns: minmax(0, 1fr);
  }

  .demos-filter-scroll {
    grid-column: 1;
    grid-row: 1;
    margin: 0 -16px;
    overflow-x: auto;
    order: 1;
    padding: 0 16px;
  }

  .demos-filter-row {
    justify-content: flex-start;
    width: max-content;
  }

  .demos-search-label {
    grid-column: 1;
    grid-row: 2;
    justify-self: stretch;
    order: 2;
    width: 100%;
  }

  .demos-featured-grid,
  .demos-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .demo-cover-native,
  .demo-card-featured .demo-cover-native {
    padding: 14px;
  }

  .demo-cover-category {
    font-size: 10px;
    margin-top: 6px;
  }

  .demo-cover-visual {
    padding: 8px 16px 0;
  }

  .demo-cover-logo {
    max-height: 72px;
    max-width: 34%;
    min-height: 36px;
  }

  .demo-cover-fallback {
    font-size: 36px;
  }

  .demo-card-featured .demo-cover-fallback {
    font-size: 44px;
  }

  .demo-play {
    bottom: 12px;
    right: 12px;
  }

  .demos-section {
    margin-top: 40px;
  }

  :global(.demo-dialog-actions) {
    align-items: stretch;
    flex-direction: column;
  }

  :global(.demo-dialog-actions a),
  :global(.demo-platform-switch) {
    justify-content: center;
    width: 100%;
  }
}
</style>
