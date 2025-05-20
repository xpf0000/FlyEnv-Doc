<template>
  <div class="mt-9 py-9">
    <div class="mt-9 py-9"></div>
    <template v-if="lang === 'zh-CN'">
      <div class="text-center">
        <span class="text-3xl font-bold md:text-6xl">没找到需要的功能?</span>
      </div>
      <div class="text-center mt-9">
        <span
          class="text-1xl md:text-2xl text-white px-8 cursor-pointer mt-6 py-2 bg-indigo-500 rounded-lg inline-flex justify-center hover:bg-indigo-400"
          @click.stop="showFeedback"
          >给我发信息</span
        >
      </div>
    </template>
    <template v-else>
      <div class="text-center">
        <span class="text-3xl font-bold md:text-6xl">No Found What You Need?</span>
      </div>
      <div class="text-center mt-9">
        <span
          class="text-1xl md:text-2xl text-white px-8 cursor-pointer mt-6 py-2 bg-indigo-500 rounded-lg inline-flex justify-center hover:bg-indigo-400"
          @click.stop="showFeedback"
          >Let me know</span
        >
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
  import { useData } from 'vitepress'
  import { AsyncComponentShow } from '../AsyncComponent'
  import Feedback from '../AppFeedback/feedback.vue'

  const { lang } = useData()

  const showFeedback = () => {
    AsyncComponentShow(Feedback).then(() => {
      console.log('end !!!')
    })
  }
</script>
