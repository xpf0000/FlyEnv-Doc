<template>
  <div
    class="bg-gray-100 flex flex-col items-center pt-10"
    style="min-height: calc(100vh - 64px - 89px)"
  >
    <div
      class="max-w-screen-xl container flex flex-col items-center justify-between gap-7 mx-auto p-5 py-8"
    >
      <h1 class="text-center text-5xl font-bold">{{ title }}</h1>
      <h4 class="text-center text-xl mb-6">{{ subtitle }}</h4>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6 w-full">
        <div class="text-center bg-white px-6 py-8 rounded-lg shadow-lg">
          <svg
            class="icon mx-auto mb-4 max-w-[100px]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 139.392L409.429333 81.92l0.170667 407.210667-409.216 2.389333L0 139.392z m409.301333 395.818667L409.6 942.08 0 884.181333V532.48l409.301333 2.730667z m41.258667-454.186667L1024 0v487.125333l-573.44 4.394667V81.024zM1024 533.333333L1023.872 1024l-572.501333-79.274667-0.810667-412.245333 573.44 0.896z"
              fill="#0078D7"
            ></path>
          </svg>
          <p class="mb-7 text-sm">Windows Installer</p>
          <a
            :href="urls.win"
            :download="name(urls.win)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >{{ down }}</a
          >
        </div>
        <div class="text-center bg-white px-6 py-8 rounded-lg shadow-lg">
          <svg
            class="icon mx-auto mb-4 max-w-[100px]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 139.392L409.429333 81.92l0.170667 407.210667-409.216 2.389333L0 139.392z m409.301333 395.818667L409.6 942.08 0 884.181333V532.48l409.301333 2.730667z m41.258667-454.186667L1024 0v487.125333l-573.44 4.394667V81.024zM1024 533.333333L1023.872 1024l-572.501333-79.274667-0.810667-412.245333 573.44 0.896z"
              fill="#0078D7"
            ></path>
          </svg>
          <p class="mb-7 text-sm">Windows Portable</p>
          <a
            :href="urls.winPortable"
            :download="name(urls.winPortable)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >{{ down }}</a
          >
        </div>
        <div class="text-center bg-white px-6 py-8 rounded-lg shadow-lg">
          <svg
            class="icon mx-auto mb-4 max-w-[100px]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M928.768 750.592c-1.536 4.096-21.504 74.24-70.656 145.92-43.008 62.464-87.04 124.928-156.672 125.952-68.608 1.024-90.624-40.96-168.96-40.96s-102.912 39.936-167.936 41.984c-67.072 2.56-118.784-68.096-161.792-130.048C115.2 767.488 47.616 534.528 138.24 378.88c44.544-77.824 124.928-127.488 211.968-129.024 65.536-1.024 128.512 44.544 168.448 44.544 40.96 0 116.736-55.296 196.608-47.104 33.28 1.536 126.976 13.824 186.88 101.376-4.608 3.072-111.616 66.56-110.592 195.072 1.024 155.136 135.68 206.336 137.216 206.848m-266.24-586.24c35.84-44.032 59.904-104.448 53.248-164.352-51.2 2.048-114.176 34.304-151.04 77.824-32.768 37.888-61.952 99.328-53.76 158.72 56.832 3.072 115.712-30.208 151.552-72.192"
              fill="#666666"
            ></path>
          </svg>
          <p class="mb-7 text-sm">macOS Apple Silicon</p>
          <a
            :href="urls.macArm"
            :download="name(urls.macArm)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >{{ down }}</a
          >
        </div>
        <div class="text-center bg-white px-6 py-8 rounded-lg shadow-lg">
          <svg
            class="icon mx-auto mb-4 max-w-[100px]"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M928.768 750.592c-1.536 4.096-21.504 74.24-70.656 145.92-43.008 62.464-87.04 124.928-156.672 125.952-68.608 1.024-90.624-40.96-168.96-40.96s-102.912 39.936-167.936 41.984c-67.072 2.56-118.784-68.096-161.792-130.048C115.2 767.488 47.616 534.528 138.24 378.88c44.544-77.824 124.928-127.488 211.968-129.024 65.536-1.024 128.512 44.544 168.448 44.544 40.96 0 116.736-55.296 196.608-47.104 33.28 1.536 126.976 13.824 186.88 101.376-4.608 3.072-111.616 66.56-110.592 195.072 1.024 155.136 135.68 206.336 137.216 206.848m-266.24-586.24c35.84-44.032 59.904-104.448 53.248-164.352-51.2 2.048-114.176 34.304-151.04 77.824-32.768 37.888-61.952 99.328-53.76 158.72 56.832 3.072 115.712-30.208 151.552-72.192"
              fill="#666666"
            ></path>
          </svg>
          <p class="mb-7 text-sm">macOS Intel x86_64</p>
          <a
            :href="urls.macX86"
            :download="name(urls.macX86)"
            class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
            >{{ down }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { computed } from 'vue'
  import { useData } from 'vitepress'

  const { lang } = useData()

  const urls = {
    win: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.10.2/FlyEnv.Setup.4.10.2.exe',
    winPortable:
      'https://github.com/xpf0000/FlyEnv/releases/download/v4.10.2/FlyEnv.Portable.4.10.2.exe',
    macX86: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.10.2/FlyEnv-4.10.2.dmg',
    macArm: 'https://github.com/xpf0000/FlyEnv/releases/download/v4.10.2/FlyEnv-4.10.2-arm64.dmg'
  }

  const title = computed(() => {
    return lang.value === 'zh-CN' ? '下载 FlyEnv' : 'Download FlyEnv'
  })

  const subtitle = computed(() => {
    return lang.value === 'zh-CN'
      ? '免费，建立在开源之上。强大的Web服务器和环境管理器'
      : 'Free and built on open source.Powerful Web Server and Environment Manager'
  })

  const down = computed(() => {
    return lang.value === 'zh-CN' ? '下载' : 'Download'
  })

  const name = (url: string) => {
    return url.substring(url.lastIndexOf('/') + 1)
  }
</script>
