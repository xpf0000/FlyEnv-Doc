<template>
  <ClientOnly>
    <div
      v-show="show"
      class="w-12 h-12 z-40 cursor-pointer rounded-full bg-slate-200 shadow-md flex items-center justify-center fixed right-6 bottom-20 text-purple-500 hover:bg-purple-500 hover:text-white hover:shadow-lg dark:bg-slate-500 dark:text-white"
      @click.stop="showFeedback"
    >
      <svg
        class="icon w-6 h-6 fill-current"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        width="256"
        height="256"
      >
        <path
          d="M800.038 960.01H223.962c-52.98 0-95.984-43.003-95.984-95.983V224.134c0-52.98 43.004-95.983 95.984-95.983h447.925c17.718 0 31.995 14.277 31.995 31.994s-14.277 31.995-31.995 31.995H223.962c-17.545 0-31.994 14.449-31.994 31.994v639.893c0 17.717 14.449 31.995 31.994 31.995h575.904c17.717 0 31.994-14.278 31.994-31.995V351.94c0-17.718 14.277-31.995 31.995-31.995 17.717 0 31.994 14.277 31.994 31.995v511.914c0.173 52.98-43.003 96.156-95.811 96.156zM612.026 447.926c-8.256 0-16.341-3.097-22.706-9.461a31.873 31.873 0 0 1 0-45.24L907.374 75.342c12.557-12.557 32.683-12.557 45.24 0s12.557 32.683 0 45.24L634.56 438.636c-6.192 6.192-14.45 9.289-22.534 9.289z m-132.107 0H287.952c-17.718 0-31.995-14.277-31.995-31.995s14.277-31.995 31.995-31.995h191.967c17.718 0 31.995 14.278 31.995 31.995 0 17.718-14.277 31.995-31.995 31.995z m192.14 191.967H287.952c-17.718 0-31.995-14.277-31.995-31.994s14.277-31.995 31.995-31.995h383.935c17.718 0 31.995 14.277 31.995 31.995s-14.277 31.994-31.823 31.994z"
        ></path>
      </svg>
    </div>
  </ClientOnly>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import Feedback from './feedback.vue'
  import { AsyncComponentShow } from '../AsyncComponent'

  const show = ref(true)

  const showFeedback = () => {
    show.value = false
    AsyncComponentShow(Feedback).then(() => {
      console.log('end !!!')
      show.value = true
    })
  }
</script>
