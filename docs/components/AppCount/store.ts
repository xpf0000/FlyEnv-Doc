import { reactive } from 'vue'
import axios from 'axios'

type AppCountStoreType = {
  star: number
  user: number
  start: number
  timer?: any
  fetchList: () => void
  initTimer: () => void
  deinitTimer: () => void
}

export const AppCountStore: AppCountStoreType = reactive({
  star: 0,
  user: 0,
  start: 0,
  fetchList() {
    axios({
      url: 'https://api.macphpstudy.com/api/site/app_count',
      method: 'post'
    })
      .then((res) => {
        console.log('res: ', res)
        const data: any = res?.data?.data
        Object.assign(this, data)
      })
      .catch()
  },
  initTimer() {
    this.timer && clearInterval(this.timer)
    this.timer = setInterval(this.fetchList, 1000 * 60 * 2)
  },
  deinitTimer() {
    this.timer && clearInterval(this.timer)
    this.timer = undefined
  }
})
