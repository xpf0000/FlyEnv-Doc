<template>
  <section class="demos-library" :data-locale="props.locale">
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

        <div class="demos-filter-group" role="group" :aria-label="t.categoryLabel">
          <button
            v-for="filter in filters"
            :key="filter.value"
            type="button"
            class="demos-filter-button"
            :aria-pressed="activeCategory === filter.value"
            :class="{ selected: activeCategory === filter.value }"
            @click="selectCategory(filter.value)"
          >
            <span>{{ filter.label }}</span>
            <span class="demos-filter-count">{{ filter.count }}</span>
          </button>
        </div>
      </section>

      <p class="visually-hidden" aria-live="polite">{{ resultSummary }}</p>

      <section v-if="showFeatured" class="demos-section" :aria-labelledby="featuredHeadingId">
        <div class="demos-section-heading">
          <h2 :id="featuredHeadingId" class="no-border">{{ t.featuredTitle }}</h2>
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

      <div v-if="categorySections.length" class="demos-catalog">
        <section
          v-for="section in categorySections"
          :key="section.category"
          class="demos-section demos-catalog-section"
          :aria-labelledby="section.headingId"
        >
          <div class="demos-section-heading">
            <div class="demos-section-title">
              <h2 :id="section.headingId" class="no-border">{{ categoryLabel(section.category) }}</h2>
              <span class="demos-section-count">{{ section.total }}</span>
            </div>
            <button
              v-if="section.hasMore"
              type="button"
              class="demos-section-view-all"
              @click="selectCategory(section.category)"
            >
              {{ t.viewAll() }}
            </button>
          </div>
          <div class="demos-grid">
            <article v-for="demo in section.demos" :key="demo.id" class="demo-card" :data-demo-id="demo.id">
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
      </div>
      <div v-else class="demos-empty">
        <h3>{{ t.emptyTitle }}</h3>
        <p>{{ t.emptyIntro }}</p>
        <button type="button" @click="resetDiscovery">{{ t.reset }}</button>
      </div>
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
            v-if="alternatePlatform && props.locale !== 'zh'"
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
import base64Logo from '../SVG/base64-string.svg'
import bunLogo from '../SVG/bun.svg'
import chmodLogo from '../SVG/chmod.svg'
import claudeCodeLogo from '../SVG/claude-code.svg'
import clickHouseLogo from '../SVG/ClickHouse.svg'
import codeLibraryLogo from '../SVG/code-library.svg'
import codeLogo from '../SVG/code.svg'
import codexLogo from '../SVG/codex.svg'
import consulLogo from '../SVG/Consul.svg'
import elasticsearchLogo from '../SVG/Elasticsearch.svg'
import encryptLogo from '../SVG/encrypt.svg'
import envLogo from '../SVG/env.svg'
import etcdLogo from '../SVG/etcd.svg'
import fileInfoLogo from '../SVG/fileinfo.svg'
import flutterLogo from '../SVG/Flutter.svg'
import goLogo from '../SVG/Go.svg'
import hashTextLogo from '../SVG/hash-text.svg'
import httpStatusLogo from '../SVG/httpstatus.svg'
import imageCompressLogo from '../SVG/imagecompress.svg'
import jsonLogo from '../SVG/json1.svg'
import kimiLogo from '../SVG/kimi.svg'
import mailpitLogo from '../SVG/Mailpit.svg'
import mcpLogo from '../SVG/mcp.svg'
import meilisearchLogo from '../SVG/Meilisearch.svg'
import mimeTypesLogo from '../SVG/mime-types.svg'
import minioLogo from '../SVG/Minio.svg'
import nacosLogo from '../SVG/R-NACOS.svg'
import n8nLogo from '../SVG/n8n.svg'
import neo4jLogo from '../SVG/Neo4j.svg'
import ollamaLogo from '../SVG/Ollama.svg'
import openClawLogo from '../SVG/OpenClaw.svg'
import openCodeLogo from '../SVG/opencode.svg'
import podmanLogo from '../SVG/Podman.svg'
import portKillLogo from '../SVG/portkill.svg'
import processLogo from '../SVG/process.svg'
import pythonLogo from '../SVG/Python.svg'
import qdrantLogo from '../SVG/qdrant.svg'
import qrCodeLogo from '../SVG/qrcodemake.svg'
import rabbitMqLogo from '../SVG/RabbitMQ.svg'
import regexTesterLogo from '../SVG/regextester.svg'
import rsaLogo from '../SVG/rsa.svg'
import rubyLogo from '../SVG/Ruby.svg'
import rustfsLogo from '../SVG/RustFS.svg'
import rustLogo from '../SVG/Rust.svg'
import screenshotLogo from '../SVG/screenshot.svg'
import sslMakeLogo from '../SVG/sslmake.svg'
import temporalLogo from '../SVG/Temporal.svg'
import timeLogo from '../SVG/time.svg'
import tokenLogo from '../SVG/tokenmake.svg'
import typesenseLogo from '../SVG/Typesense.svg'
import urlParseLogo from '../SVG/urlparse.svg'

type DemoPosition = 'featured' | 'catalog'
type FilterValue = 'all' | DemoCategory

const props = defineProps<{
  locale: DemoLocale
}>()

const copy = {
  en: {
    kicker: 'FlyEnv demonstrations',
    title: 'See what runs locally with FlyEnv',
    intro: 'Browse demos of real projects, runtimes, databases, developer tools, and AI workflows running locally with FlyEnv.',
    controlsLabel: 'Browse FlyEnv demonstrations',
    categoryLabel: 'Filter by category',
    searchLabel: 'Search demos',
    searchPlaceholder: 'Search projects, stacks, and tools',
    all: 'All demos',
    featuredTitle: 'Featured demos',
    catalogTitle: 'All demonstrations',
    viewAll: () => 'View all →',
    tagsLabel: 'Demo tags',
    emptyTitle: 'No demonstrations match this search',
    emptyIntro: 'Clear the current filters to return to the complete catalog.',
    reset: 'Clear filters',
    play: 'Play demo',
    relatedLink: 'Related guide →',
    close: 'Close video player',
    resultSummary: (count: number, categoryCount: number) =>
      `${count} ${count === 1 ? 'demo' : 'demos'} across ${categoryCount} ${categoryCount === 1 ? 'category' : 'categories'}`,
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
    searchPlaceholder: '搜索项目、技术栈和工具',
    all: '全部演示',
    featuredTitle: '精选演示',
    catalogTitle: '全部演示',
    viewAll: () => '查看全部 →',
    tagsLabel: '演示标签',
    emptyTitle: '没有匹配的演示',
    emptyIntro: '清除当前筛选条件以返回完整目录。',
    reset: '清除筛选',
    play: '播放演示',
    relatedLink: '相关指南 →',
    close: '关闭视频播放器',
    resultSummary: (count: number, categoryCount: number) => `共 ${count} 个演示，分为 ${categoryCount} 类`,
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
    searchPlaceholder: 'Cari proyek, stack, dan alat',
    all: 'Semua demo',
    featuredTitle: 'Demo pilihan',
    catalogTitle: 'Semua demo',
    viewAll: () => 'Lihat semua →',
    tagsLabel: 'Tag demo',
    emptyTitle: 'Tidak ada demo yang cocok',
    emptyIntro: 'Hapus filter saat ini untuk kembali ke katalog lengkap.',
    reset: 'Hapus filter',
    play: 'Putar demo',
    relatedLink: 'Panduan terkait →',
    close: 'Tutup pemutar video',
    resultSummary: (count: number, categoryCount: number) => `${count} demo dalam ${categoryCount} kategori`,
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
const DEMOS_PER_CATEGORY = 6

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
  { match: /flyenv-feature-overview/, mark: 'FlyEnv', src: 'https://oss.macphpstudy.com/image/app-icon.png' },
  { match: /system-environment-tool/, mark: 'ENV', src: envLogo },
  { match: /ssl-certificate-generator/, mark: 'SSL', src: sslMakeLogo },
  { match: /base64-file-converter|base64-encoder-decoder/, mark: 'B64', src: base64Logo },
  { match: /code-playground-library/, mark: 'CODE', src: codeLibraryLogo },
  { match: /rsa-key-pair-generator/, mark: 'RSA', src: rsaLogo },
  { match: /html-entity-tool/, mark: 'HTML', src: codeLogo },
  { match: /token-generator/, mark: 'TOKEN', src: tokenLogo },
  { match: /string-encryption-tool/, mark: 'ENC', src: encryptLogo },
  { match: /chmod-calculator/, mark: 'CHMOD', src: chmodLogo },
  { match: /timestamp-converter/, mark: 'TIME', src: timeLogo },
  { match: /qr-code-generator/, mark: 'QR', src: qrCodeLogo },
  { match: /mime-type-lookup/, mark: 'MIME', src: mimeTypesLogo },
  { match: /screen-capture-tool/, mark: 'CAPTURE', src: screenshotLogo },
  { match: /http-status-codes/, mark: 'HTTP', src: httpStatusLogo },
  { match: /hash-string-tool/, mark: 'HASH', src: hashTextLogo },
  { match: /regex-tool/, mark: 'REGEX', src: regexTesterLogo },
  { match: /process-kill-tool/, mark: 'PROC', src: processLogo },
  { match: /port-kill-tool/, mark: 'PORT', src: portKillLogo },
  { match: /data-format-converter/, mark: 'JSON', src: jsonLogo },
  { match: /url-timing-analyzer/, mark: 'URL', src: urlParseLogo },
  { match: /file-metadata-hash/, mark: 'FILE', src: fileInfoLogo },
  { match: /batch-image-processor/, mark: 'IMG', src: imageCompressLogo },
  { match: /caddy-php-mysql/, mark: 'CD', src: 'https://oss.macphpstudy.com/image/caddy.svg' },
  { match: /apache-native/, mark: 'AP', src: 'https://oss.macphpstudy.com/image/apache.png' },
  { match: /nginx-module/, mark: 'NG', src: 'https://oss.macphpstudy.com/image/nginx.png' },
  { match: /node-project-runtime/, mark: 'JS', src: 'https://oss.macphpstudy.com/image/Node.js.svg' },
  { match: /openmrs-local-project/, mark: 'TC', src: 'https://oss.macphpstudy.com/image/tomcat.svg' },
  { match: /erpnext/, mark: 'ERP', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/erpnext.svg' },
  { match: /gitea/, mark: 'GT', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/gitea.svg' },
  { match: /nextcloud/, mark: 'NC', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/nextcloud.svg' },
  { match: /keycloak/, mark: 'KC', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/keycloak.svg' },
  { match: /snipe-it/, mark: 'SNIPE', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/snipeit.png' },
  { match: /wordpress/, mark: 'WP', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/wordpress.svg' },
  { match: /laravel/, mark: 'LV', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/laravel.svg' },
  { match: /postgresql/, mark: 'PG', src: 'https://oss.macphpstudy.com/image/postgresql.svg' },
  { match: /redis/, mark: 'RD', src: 'https://oss.macphpstudy.com/image/redis.png' },
  { match: /rabbitmq/, mark: 'RMQ', src: rabbitMqLogo },
  { match: /minio/, mark: 'MINIO', src: minioLogo },
  { match: /meilisearch/, mark: 'MEILI', src: meilisearchLogo },
  { match: /elasticsearch/, mark: 'ES', src: elasticsearchLogo },
  { match: /mailpit/, mark: 'MAIL', src: mailpitLogo },
  { match: /nacos/, mark: 'NACOS', src: nacosLogo },
  { match: /numa/, mark: 'Numa' },
  { match: /typesense/, mark: 'TYPE', src: typesenseLogo },
  { match: /cliproxyapi/, mark: 'CLIProxyAPI' },
  { match: /mcp/, mark: 'MCP', src: mcpLogo },
  { match: /php/, mark: 'PHP', src: 'https://oss.macphpstudy.com/image/php.png' },
  { match: /mysql/, mark: 'SQL', src: 'https://oss.macphpstudy.com/image/mysql.png' },
  { match: /mariadb/, mark: 'MDB', src: 'https://oss.macphpstudy.com/image/mariadb.svg' },
  { match: /mongodb/, mark: 'MDB', src: 'https://oss.macphpstudy.com/image/MongoDB.svg' },
  { match: /neo4j/, mark: 'N4J', src: neo4jLogo },
  { match: /clickhouse/, mark: 'CH', src: clickHouseLogo },
  { match: /qdrant/, mark: 'Q', src: qdrantLogo },
  { match: /temporal/, mark: 'TMP', src: temporalLogo },
  { match: /consul/, mark: 'CSL', src: consulLogo },
  { match: /etcd/, mark: 'ETC', src: etcdLogo },
  { match: /zincsearch/, mark: 'ZS', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/zincsearch.svg' },
  { match: /rustfs/, mark: 'RFS', src: rustfsLogo },
  { match: /podman/, mark: 'PDM', src: podmanLogo },
  { match: /caddy/, mark: 'CD', src: 'https://oss.macphpstudy.com/image/caddy.svg' },
  { match: /nginx/, mark: 'NG', src: 'https://oss.macphpstudy.com/image/nginx.png' },
  { match: /apache/, mark: 'AP', src: 'https://oss.macphpstudy.com/image/apache.png' },
  { match: /node\.js|nodejs/, mark: 'JS', src: 'https://oss.macphpstudy.com/image/Node.js.svg' },
  { match: /python/, mark: 'PY', src: pythonLogo },
  { match: /\bgo\b/, mark: 'GO', src: goLogo },
  { match: /java/, mark: 'JV', src: 'https://oss.macphpstudy.com/image/java.svg' },
  { match: /tomcat/, mark: 'TC', src: 'https://oss.macphpstudy.com/image/tomcat.svg' },
  { match: /bun/, mark: 'BUN', src: bunLogo },
  { match: /ruby/, mark: 'RB', src: rubyLogo },
  { match: /rust/, mark: 'RS', src: rustLogo },
  { match: /flutter/, mark: 'FLT', src: flutterLogo },
  { match: /n8n/, mark: 'N8N', src: n8nLogo },
  { match: /openclaw/, mark: 'OCL', src: openClawLogo },
  { match: /ollama/, mark: 'OL', src: ollamaLogo },
  { match: /claude/, mark: 'CC', src: claudeCodeLogo },
  { match: /opencode/, mark: 'OC', src: openCodeLogo },
  { match: /kimi/, mark: 'K', src: kimiLogo },
  { match: /codex/, mark: 'CODEX', src: codexLogo },
  { match: /django/, mark: 'DJ', src: 'https://oss.macphpstudy.com/image/assets/demo-logos/django.svg' },
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
const matchedDemos = computed(() => {
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
const categorySections = computed(() => {
  const shouldLimitCategory = !searchQuery.value.trim() && activeCategory.value === 'all'

  return categoryValues
    .filter((category) => activeCategory.value === 'all' || category === activeCategory.value)
    .map((category) => {
      const categoryDemos = matchedDemos.value.filter((demo) => demo.category === category)
      const unfeaturedDemos = categoryDemos.filter((demo) => !demo.featured)
      const shouldShowWholeCategory = categoryDemos.length <= DEMOS_PER_CATEGORY
      const displayedDemos = shouldLimitCategory && !shouldShowWholeCategory
        ? unfeaturedDemos.slice(0, DEMOS_PER_CATEGORY)
        : categoryDemos

      return {
        category,
        demos: displayedDemos,
        hasMore: shouldLimitCategory && categoryDemos.length > displayedDemos.length,
        headingId: `demos-${category}-heading`,
        total: categoryDemos.length
      }
    })
    .filter((section) => section.demos.length)
})
const featuredDemos = computed(() =>
  demos
    .filter((demo) => demo.featured && typeof demo.featuredRank === 'number')
    .sort((first, second) => first.featuredRank! - second.featuredRank!)
)
const showFeatured = computed(() => activeCategory.value === 'all' && !searchQuery.value.trim())
const resultSummary = computed(() => t.value.resultSummary(matchedDemos.value.length, categorySections.value.length))
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
    result_count: matchedDemos.value.length
  })
}

function scheduleSearchTracking() {
  syncDiscoveryUrl()
  if (searchTimer) window.clearTimeout(searchTimer)

  searchTimer = window.setTimeout(() => {
    trackEvent('demos_search', {
      query_length: searchQuery.value.trim().length,
      result_count: matchedDemos.value.length
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
  --demos-control-muted: #e8eef8;
  --demos-tag-ink: #3b4d66;
  --demos-tag-surface: #edf2f8;
  --demos-wash: #f4f7fb;
  background: var(--demos-wash);
  color: var(--demos-ink);
  padding: 64px 24px 88px;
}

:global(html.dark .demos-library) {
  --demos-accent: #60a5fa;
  --demos-accent-dark: #bfdbfe;
  --demos-control-muted: #26364d;
  --demos-ink: #e5edf9;
  --demos-line: #314158;
  --demos-muted: #b7c3d5;
  --demos-surface: #151f30;
  --demos-tag-ink: #d9e4f2;
  --demos-tag-surface: #22314a;
  --demos-wash: #0f1726;
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
  display: flex;
  flex-wrap: wrap;
  column-gap: 12px;
  margin-top: 36px;
  padding-bottom: 22px;
  row-gap: 12px;
}

.demos-filter-group {
  display: contents;
}

.demos-filter-button {
  flex: 0 0 auto;
}

.demos-filter-button,
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

.demos-filter-button:hover,
.demos-filter-button.selected,
.demos-empty button:hover,
.demo-platform-switch:hover {
  border-color: var(--demos-accent);
  color: var(--demos-accent-dark);
}

.demos-filter-button.selected {
  background: var(--demos-accent);
  border-color: var(--demos-accent);
  color: #ffffff;
}

.demos-filter-count {
  background: var(--demos-control-muted);
  border-radius: 999px;
  color: var(--demos-muted);
  font-size: 12px;
  line-height: 1;
  min-width: 20px;
  padding: 3px 5px;
  text-align: center;
}

.demos-filter-button.selected .demos-filter-count {
  background: rgba(255, 255, 255, 0.18);
  color: #ffffff;
}

.demos-search-label {
  display: grid;
  flex: 0 1 280px;
  gap: 7px;
  max-width: 280px;
  min-width: 220px;
  margin-right: 8px;
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

.demos-section {
  margin-top: 44px;
}

.demos-catalog-section {
  border-top: 1px solid var(--demos-line);
  margin-top: 72px;
  padding-top: 28px;
}

.demos-section-heading {
  align-items: baseline;
  display: flex;
  gap: 18px;
  justify-content: space-between;
  margin-bottom: 18px;
}

.demos-section-title {
  align-items: baseline;
  display: flex;
  gap: 10px;
  min-width: 0;
}

.demos-section-heading h2 {
  font-size: 24px;
  line-height: 1.25;
  margin: 0;
}

.demos-section-count {
  background: var(--demos-control-muted);
  border-radius: 999px;
  color: var(--demos-muted);
  flex: 0 0 auto;
  font-size: 12px;
  font-weight: 700;
  line-height: 1;
  min-width: 24px;
  padding: 4px 6px;
  text-align: center;
}

.demos-section-view-all {
  background: transparent;
  border: 0;
  color: var(--demos-accent-dark);
  cursor: pointer;
  flex: 0 0 auto;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.4;
  padding: 4px 0;
  text-align: right;
}

.demos-section-view-all:hover {
  color: var(--demos-accent);
  text-decoration: underline;
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
  height: 40%;
  max-height: 88px;
  max-width: 38%;
  object-fit: contain;
  width: 38%;
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
  height: 40%;
  max-height: 116px;
  max-width: 34%;
  width: 34%;
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
  min-height: 2.7em;
  overflow-wrap: anywhere;
}

.demo-card:not(.demo-card-featured) h3 {
  min-height: 2.7em;
}

.demos-library[data-locale='id'] .demo-card:not(.demo-card-featured) h3 {
  min-height: 4.05em;
}

.demo-summary {
  color: var(--demos-muted);
  font-size: 14px;
  line-height: 1.55;
  margin: 10px 0 0;
}

.demo-card-featured .demo-summary {
  min-height: 3.1em;
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
  background: var(--demos-tag-surface);
  border-radius: 4px;
  color: var(--demos-tag-ink);
  font-size: 12px;
  line-height: 1.3;
  overflow-wrap: anywhere;
  padding: 4px 6px;
}

.demos-library .demo-tags li + li {
  margin-top: 0;
}

.demo-related-link {
  color: var(--demos-accent-dark);
  font-size: 13px;
  font-weight: 600;
  margin-top: 16px;
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

:global(.dark .demo-dialog) {
  background: #151f30;
  color: #e5edf9;
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

:global(.dark .demo-dialog-close) {
  background: #1c2940;
  border-color: #42546f;
  color: #e5edf9;
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
  }

  .demos-search-label {
    flex: 1 1 100%;
    max-width: none;
    min-width: 0;
    margin-right: 0;
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

  .demos-catalog-section {
    margin-top: 52px;
    padding-top: 22px;
  }

  .demos-section-heading {
    align-items: flex-start;
    gap: 12px;
  }

  .demos-section-heading h2 {
    font-size: 22px;
  }

  .demo-card h3,
  .demo-card-featured .demo-summary {
    min-height: 0;
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
