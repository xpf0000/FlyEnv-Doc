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
  >
    <g v-if="name === 'database'">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 4 16 4 16 0V5M4 12c0 4 16 4 16 0" />
    </g>
    <g v-else-if="name === 'server'">
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
    </g>
    <g v-else-if="name === 'chip'">
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v4m6-4v4M9 18v4m6-4v4M2 9h4m-4 6h4m12-6h4m-4 6h4" />
    </g>
    <g v-else-if="name === 'terminal'">
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 8 4 4-4 4m6 0h4" />
    </g>
    <path v-else :d="paths[name]" />
  </svg>
</template>

<script setup lang="ts">
  const paths = {
    arrow: 'M4 12h15m-6-6 6 6-6 6',
    brain:
      'M12 5a3 3 0 0 0-5-2 4 4 0 0 0-3 5 4 4 0 0 0 0 7 4 4 0 0 0 3 5 3 3 0 0 0 5-2V5Zm0 0a3 3 0 0 1 5-2 4 4 0 0 1 3 5 4 4 0 0 1 0 7 4 4 0 0 1-3 5 3 3 0 0 1-5-2M7 9l2 2m8-2-2 2M7 16l2-2m8 2-2-2',
    check: 'm5 12 4 4L19 6',
    code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-2-14-4 16',
    message: 'M4 4h16v12H9l-5 4z',
    package: 'm12 2 9 5v10l-9 5-9-5V7l9-5ZM3 7l9 5 9-5M12 12v10M7.5 4.5l9 5',
    play: 'm9 5 12 7-12 7z',
    puzzle:
      'M3 3h7v3a2 2 0 1 0 4 0V3h7v7h-3a2 2 0 1 0 0 4h3v7h-7v-3a2 2 0 1 0-4 0v3H3v-7h3a2 2 0 1 0 0-4H3z',
    wrench: 'M14 6a6 6 0 0 0-8 8l-4 4a2 2 0 0 0 3 3l4-4a6 6 0 0 0 8-8l-4 4-3-3z'
  }

  defineProps<{ name: keyof typeof paths | 'database' | 'server' | 'chip' | 'terminal' }>()
</script>
