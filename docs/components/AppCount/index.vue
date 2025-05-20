<template>
  <ClientOnly>
    <div class="grid grid-cols-1 gap-8 md:grid-cols-3 select-text mt-10 font-bold">
      <div
        class="aspect-[4/3] rounded-lg shadow-md bg-zinc-100 flex flex-col items-center gap-6 dark:bg-gray-800 justify-center"
      >
        <Number :key="`star-${AppCountStore.star}`" class="text-6xl" :value="AppCountStore.star" />
        <span class="text-lg">GitHub Star</span>
      </div>
      <div
        class="aspect-[4/3] rounded-lg shadow-md bg-zinc-100 flex flex-col items-center gap-6 dark:bg-gray-800 justify-center"
      >
        <Number :key="`star-${AppCountStore.user}`" class="text-6xl" :value="AppCountStore.user" />
        <span class="text-lg">User Count</span>
      </div>
      <div
        class="aspect-[4/3] rounded-lg shadow-md bg-zinc-100 flex flex-col items-center gap-6 dark:bg-gray-800 justify-center"
      >
        <Number
          :key="`star-${AppCountStore.start}`"
          class="text-6xl"
          :value="AppCountStore.start"
        />
        <span class="text-lg">App Start</span>
      </div>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
  import { onMounted } from 'vue'
  import { AppCountStore } from './store'
  import Number from './number.vue'

  onMounted(() => {
    AppCountStore.fetchList()
  })
</script>
