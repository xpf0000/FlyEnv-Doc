<template>
  <ClientOnly>
    <NumberFlow ref="dom" :value="useValue" />
  </ClientOnly>
</template>
<script setup lang="ts">
  import { type Ref, ref, onMounted, onUnmounted, watch } from 'vue'
  import NumberFlow from '@number-flow/vue'

  const props = defineProps<{
    value: number
  }>()

  const useValue = ref(0)

  const dom: Ref<any> = ref()

  let observer: IntersectionObserver | undefined

  let visabled = false

  const init = () => {
    observer = new IntersectionObserver(
      (entries) => {
        console.log('entries: ', entries)
        if (entries[0].intersectionRatio > 0.999) {
          useValue.value = props.value
          visabled = true
        } else {
          visabled = false
          useValue.value = 0
        }
      },
      {
        threshold: [0.0, 1.0]
      }
    )
    console.log('dom.value: ', dom.value.el)
    observer.observe(dom.value.el)
  }
  const deinit = () => {
    observer.disconnect()
    observer = undefined
  }

  onMounted(() => {
    init()
    watch(
      () => props.value,
      (v) => {
        console.log('value: ', v)
        if (visabled) {
          useValue.value = v
          console.log('useValue.value: ', useValue.value)
        }
      }
    )
  })

  onUnmounted(() => {
    deinit()
  })
</script>
