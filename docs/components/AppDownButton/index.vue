<template>
  <div class="flex items-center justify-center px-[12px]">
    <ElButton
      style="--el-button-hover-link-text-color: var(--vp-c-brand-1)"
      :link="isLink"
      round
      class="self-center"
      @click="down"
      >{{ title }}</ElButton
    >
  </div>
</template>

<script setup lang="ts">
  import { ElButton } from 'element-plus'
  import { computed } from 'vue'

  const props = defineProps<{
    i18n: 'en' | 'zh'
    isLink?: boolean
  }>()

  const title = computed(() => {
    return props?.i18n === 'zh' ? '下载' : 'Download'
  })

  const detectOS = () => {
    const userAgent = window.navigator.userAgent
    const platform = window.navigator.platform
    const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K']
    const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE']

    if (macosPlatforms.indexOf(platform) !== -1) {
      if (userAgent.indexOf('Macintosh') !== -1 || userAgent.indexOf('MacIntel') !== -1) {
        return 'MacOS_X86'
      } else {
        return 'MacOS_ARM64'
      }
    } else if (windowsPlatforms.indexOf(platform) !== -1) {
      return 'Windows'
    }
    return 'unknown'
  }

  const down = () => {
    const os = detectOS()
    let downloadUrl = ''

    switch (os) {
      case 'Windows':
        downloadUrl =
          'https://github.com/xpf0000/FlyEnv/releases/download/v4.8.5/FlyEnv.Setup.4.8.5.exe'
        break
      case 'MacOS_X86':
        downloadUrl = 'https://github.com/xpf0000/FlyEnv/releases/download/v4.8.5/FlyEnv-4.8.5.dmg'
        break
      case 'MacOS_ARM64':
        downloadUrl =
          'https://github.com/xpf0000/FlyEnv/releases/download/v4.8.5/FlyEnv-4.8.5-arm64.dmg'
        break
      default:
        const url = window.location.href.includes('/zh/')
          ? '/zh/guide/getting-started.html'
          : '/guide/getting-started.html'
        window.location.href = url
        return
    }

    // Create an invisible a element and trigger download
    const link = document.createElement('a')
    link.href = downloadUrl
    // link.target = '_blank'
    link.download = downloadUrl.substring(downloadUrl.lastIndexOf('/') + 1)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
</script>
