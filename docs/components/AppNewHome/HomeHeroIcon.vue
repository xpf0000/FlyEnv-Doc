<script setup lang="ts">
  const paths = {
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    download: 'M12 3v12m-5-5 5 5 5-5M4 17v4h16v-4',
    play: 'm9 5 12 7-12 7z',
    check: 'm5 12 4 4L19 6',
    code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-2-14-4 16',
    layers: 'm12 2 10 5-10 5L2 7l10-5ZM2 12l10 5 10-5M2 17l10 5 10-5',
    globe: 'M21 12a9 9 0 1 0-18 0 9 9 0 1 0 18 0ZM16 12a4 9 0 1 0-8 0 4 9 0 1 0 8 0ZM3 12h18',
    servers:
      'M5 3h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 11h14a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2ZM7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6',
    bolt: 'm13 2-9 12h7l-1 8 10-12h-7z',
    puzzle:
      'M3 3h7v3a2 2 0 1 0 4 0V3h7v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3z',
    brain:
      'M12 5a3 3 0 0 0-5-2 4 4 0 0 0-3 5 4 4 0 0 0 0 7 4 4 0 0 0 3 5 3 3 0 0 0 5-2V5Zm0 0a3 3 0 0 1 5-2 4 4 0 0 1 3 5 4 4 0 0 1 0 7 4 4 0 0 1-3 5 3 3 0 0 1-5-2M7 9l2 2m8-2-2 2M7 16l2-2m8 2-2-2',
    database: 'M20 5a8 3 0 1 0-16 0 8 3 0 1 0 16 0ZM4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0',
    wrench: 'M14 6a6 6 0 0 0-8 8l-4 4a2 2 0 0 0 3 3l4-4a6 6 0 0 0 8-8l-4 4-3-3z',
    folder: 'M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'
  }

  defineProps<{ name: keyof typeof paths }>()
</script>

<template>
  <svg
    class="icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.7"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
    focusable="false"
  >
    <path :d="paths[name]" />
  </svg>
</template>
