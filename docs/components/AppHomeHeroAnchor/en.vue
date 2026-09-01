<template>
  <p
    v-if="heroAnchorCopy"
    class="mt-5 max-w-xl text-base font-medium leading-7 text-slate-700 dark:text-slate-200"
  >
    {{ heroAnchorCopy }}
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vitepress'

const route = useRoute()
const heroAnchorCopy = computed(() => {
  if (route.path === '/' || route.path === '/index.html') {
    return 'A modern alternative to XAMPP, MAMP, Laragon and Laravel Herd — built for more than PHP.'
  }

  if (route.path === '/zh/' || route.path === '/zh/index.html') {
    return '现代化的 XAMPP、MAMP、Laragon 和 Laravel Herd 替代方案，支持的不止 PHP。'
  }

  if (route.path === '/id/' || route.path === '/id/index.html') {
    return 'Alternatif modern untuk XAMPP, MAMP, Laragon, dan Laravel Herd — dibuat untuk lebih dari sekadar PHP.'
  }

  return ''
})
</script>
