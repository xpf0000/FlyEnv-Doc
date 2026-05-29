<template>
  <div>
    <div class="sponsor-container">
      <div class="sponsor-wall" :class="{ 'sponsor-wall-compact': !showAvatars }">
        <div class="wall-header">
          <h2 class="wall-title no-border">{{ title }}</h2>
          <a
            v-if="headerLinkHref"
            :href="headerLinkHref"
            target="_blank"
            rel="noopener noreferrer"
            class="wall-count wall-link no-underline"
          >
            {{ headerLinkText || subtitle }}
          </a>
          <span v-else class="wall-count">{{ subtitle }}</span>
        </div>

        <div v-if="showAvatars" class="avatar-list">
          <div
            v-for="(item, index) in displayedAvatars"
            :key="index"
            class="avatar-item"
            :style="{ background: gradients[index % gradients.length] }"
            :title="item.name"
          >
            {{ getInitials(item.name) }}
          </div>
          <div v-if="list.length > maxAvatars" class="avatar-item avatar-more">
            +{{ list.length - maxAvatars }}
          </div>
        </div>
      </div>

      <!-- Messages List -->
      <div class="messages-section">
        <div class="messages-list">
          <div
            v-for="(item, index) in paginatedList"
            :key="index"
            class="message-card"
          >
            <div
              class="message-avatar"
              :style="{ background: gradients[(startIndex + index) % gradients.length] }"
            >
              {{ getInitials(item.name) }}
            </div>
            <div class="message-body">
              <div class="message-meta">
                <span class="message-name">{{ item.name }}</span>
                <span class="message-amount">{{ item.num }}</span>
              </div>
              <p class="message-text">{{ item.msg }}</p>
            </div>
          </div>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="currentPage--"
          >
            {{ prevText }}
          </button>
          <template v-for="page in visiblePages" :key="page">
            <span v-if="page === -1" class="page-ellipsis">...</span>
            <button
              v-else
              class="page-btn"
              :class="{ active: page === currentPage }"
              @click="currentPage = page"
            >
              {{ page }}
            </button>
          </template>
          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="currentPage++"
          >
            {{ nextText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface SponsorItem {
  name: string
  num: string
  msg: string
}

const props = withDefaults(defineProps<{
  list?: SponsorItem[]
  title?: string
  subtitle?: string
  headerLinkText?: string
  headerLinkHref?: string
  showAvatars?: boolean
  prevText?: string
  nextText?: string
  maxAvatars?: number
  pageSize?: number
}>(), {
  list: () => [],
  title: 'Recent Supporters',
  subtitle: '',
  headerLinkText: '',
  headerLinkHref: '',
  showAvatars: true,
  prevText: 'Prev',
  nextText: 'Next',
  maxAvatars: 12,
  pageSize: 10
})

const currentPage = ref(1)
const pageSize = computed(() => props.pageSize)
const maxAvatars = computed(() => props.maxAvatars)
const showAvatars = computed(() => props.showAvatars)
const prevText = computed(() => props.prevText)
const nextText = computed(() => props.nextText)

const totalPages = computed(() => Math.ceil(props.list.length / pageSize.value))

const startIndex = computed(() => (currentPage.value - 1) * pageSize.value)

const paginatedList = computed(() => {
  return props.list.slice(startIndex.value, startIndex.value + pageSize.value)
})

const displayedAvatars = computed(() => {
  return props.list.slice(0, maxAvatars.value)
})

const visiblePages = computed(() => {
  const pages: number[] = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i)
  } else if (current <= 3) {
    for (let i = 1; i <= 5; i++) pages.push(i)
    pages.push(-1)
    pages.push(total)
  } else if (current >= total - 2) {
    pages.push(1)
    pages.push(-1)
    for (let i = total - 4; i <= total; i++) pages.push(i)
  } else {
    pages.push(1)
    pages.push(-1)
    for (let i = current - 1; i <= current + 1; i++) pages.push(i)
    pages.push(-1)
    pages.push(total)
  }
  return pages
})

function getInitials(name: string): string {
  if (!name) return '?'
  const clean = name.trim()
  const first = clean.charAt(0).toUpperCase()
  if (/[\u4e00-\u9fa5]/.test(first)) {
    return first
  }
  const parts = clean.split(/\s+/)
  if (parts.length > 1) {
    const last = parts[parts.length - 1].charAt(0).toUpperCase()
    return first + last
  }
  return first
}

const gradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
  'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
  'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
  'linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
  'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
  'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
]
</script>

<style scoped>
.sponsor-container {
  border-radius: 1rem;
  border: 1px solid #e2e8f0;
  overflow: hidden;
  background: #fff;
}

.dark .sponsor-container {
  background: var(--vp-c-bg);
  border-color: var(--vp-c-divider);
}

.sponsor-wall {
  padding: 1.5rem;
  border-bottom: 1px solid #f1f5f9;
}

.sponsor-wall-compact .wall-header {
  margin-bottom: 0;
}

.dark .sponsor-wall {
  border-bottom-color: var(--vp-c-divider);
}

.wall-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.wall-title {
  font-size: 1.125rem;
  font-weight: 700;
  color: var(--vp-c-text-1);
  margin: 0;
}

.wall-count {
  font-size: 0.75rem;
  color: var(--vp-c-text-2);
}

.wall-link {
  color: var(--vp-c-brand-1);
  font-weight: 600;
}

.wall-link:hover {
  color: var(--vp-c-brand-2);
}

.avatar-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.avatar-item {
  width: 2.75rem;
  height: 2.75rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
  user-select: none;
}

.avatar-more {
  background: #f1f5f9 !important;
  color: #94a3b8;
  border: 1px dashed #cbd5e1;
}

.dark .avatar-more {
  background: var(--vp-c-bg-soft) !important;
  color: var(--vp-c-text-2);
  border-color: var(--vp-c-divider);
}

.messages-section {
  padding: 1.5rem;
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message-card {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.25rem;
  border-radius: 0.75rem;
  background: rgba(248, 250, 252, 0.8);
  transition: background 0.2s;
}

.message-card:hover {
  background: #f1f5f9;
}

.dark .message-card {
  background: rgba(255, 255, 255, 0.03);
}

.dark .message-card:hover {
  background: rgba(255, 255, 255, 0.05);
}

.message-avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 0.75rem;
  font-weight: 700;
  flex-shrink: 0;
}

.message-body {
  flex: 1;
  min-width: 0;
}

.message-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
  flex-wrap: wrap;
}

.message-name {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.message-amount {
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--vp-c-brand-1);
  flex-shrink: 0;
}

.message-text {
  font-size: 0.9375rem;
  color: var(--vp-c-text-2);
  line-height: 1.625;
  margin: 0;
  word-break: break-word;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  padding: 1rem 0 0;
  margin-top: 1rem;
  border-top: 1px solid #f1f5f9;
  flex-wrap: wrap;
}

.dark .pagination {
  border-top-color: var(--vp-c-divider);
}

.page-btn {
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  background: transparent;
  color: #64748b;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}

.page-btn:hover:not(:disabled) {
  background: #f1f5f9;
  color: #334155;
}

.page-btn.active {
  background: #e0e7ff;
  color: #4f46e5;
}

.page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.page-ellipsis {
  padding: 0.375rem 0.25rem;
  font-size: 0.875rem;
  color: #94a3b8;
  user-select: none;
}
</style>
