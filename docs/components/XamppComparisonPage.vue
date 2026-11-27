<script setup lang="ts">
  import ComparisonLoopPage from './ComparisonLoopPage.vue'
  import type { CompareLocale } from '../data/compare/types'

  defineProps<{ locale?: CompareLocale }>()
</script>

<template>
  <ComparisonLoopPage comparison="xampp" :locale="locale" />
</template>
