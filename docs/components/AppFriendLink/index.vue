<script setup lang="ts">
import { useData } from 'vitepress'
import { computed } from 'vue'

const { lang } = useData()

const isZh = computed(() => lang.value.startsWith('zh'))

const label = computed(() => (isZh.value ? '友情链接：' : 'Links: '))
</script>

<template>
  <div class="friend-link-wrapper">
    <div class="friend-link-content">
      <span class="friend-link-label">{{ label }}</span>
      <a
        href="https://www.fastadmin.net/"
        target="_blank"
        rel="noopener noreferrer"
        class="friend-link-item"
      >
        FastAdmin
      </a>

      <a
        href="https://doc.buildadmin.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="friend-link-item"
      >
        BuildAdmin
      </a>
    </div>
  </div>
</template>

<style scoped>
.friend-link-wrapper {
  border-top: 1px solid var(--vp-c-divider);
  padding: 24px;
  text-align: center;
}

.friend-link-content {
  font-size: 14px;
  color: var(--vp-c-text-2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 16px;
}

.friend-link-label {
  margin-right: 4px;
}

.friend-link-item {
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: color 0.25s;
}

.friend-link-item:hover {
  color: var(--vp-c-brand-2);
  text-decoration: underline;
}
</style>
