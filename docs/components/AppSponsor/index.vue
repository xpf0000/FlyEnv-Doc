<template>
  <table tabindex="0">
    <thead>
      <tr>
        <th style="text-align: left">Sponsor</th>
        <th style="text-align: left">Message</th>
        <th style="text-align: center">Amount</th>
      </tr>
    </thead>
    <tbody id="tbody"> ##LIST## </tbody>
  </table>
</template>
<script lang="ts" setup>
  import { onMounted, computed, watch, onUnmounted } from 'vue'
  import { AppSponsorStore } from './store'

  const list = computed(() => {
    return AppSponsorStore.list
  })

  let watcher: any = undefined

  onMounted(() => {
    watcher = watch(list, (v) => {
      if (v && v.length > 0) {
        const str = v
          .map((l) => {
            return `<tr>
            <td style="text-align: left">${l.name}</td>
            <td style="text-align: left">${l.msg}</td>
            <td style="text-align: center">${l.num}</td>
          </tr>`
          })
          .join('\n')
        const tbody = document.querySelector('#tbody')
        tbody.innerHTML = str
      }
    })
    AppSponsorStore.fetchList()
  })

  onUnmounted(() => {
    watcher()
    watcher = undefined
  })
</script>
