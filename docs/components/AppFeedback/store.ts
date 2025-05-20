import { reactive } from 'vue'
import axios from 'axios'
import { ElMessage } from 'element-plus'

export const AppFeedbackStore = reactive({
  email: '',
  country: '',
  message: '',
  time: 0,
  loading: false,
  run(time?: number) {
    this.time = time ?? 30
    let timer: any
    const doRun = () => {
      if (this.time === 0) {
        clearInterval(timer)
        timer = undefined
        return
      }
      this.time -= 1
    }
    timer = setInterval(doRun, 1000)
  },
  init() {
    const cache = localStorage.getItem('App-Feedback')
    if (cache) {
      const obj = JSON.parse(cache)
      Object.assign(this, obj)
      const time = Math.round(new Date().getTime() / 1000)
      const diffTime = time - obj.sendTime
      if (diffTime < 30) {
        this.time = 30 - diffTime
        this.run(this.time)
      }
    }
  },
  send() {
    return new Promise((resolve, reject) => {
      if (this.time > 0 || this.loading) {
        reject(new Error('Wait'))
        return
      }
      if (this.message.length < 5 || this.message.length > 1024) {
        ElMessage.error('Message length is 5 - 1024')
        reject(new Error('Message length is 5 - 1024'))
        return
      }
      this.loading = true
      const data = {
        email: this.email,
        country: this.country,
        message: this.message
      }
      axios({
        // url: 'http://localhost:8081/api/app/feedback_site',
        url: 'https://api.macphpstudy.com/api/app/feedback_site',
        method: 'post',
        data
      })
        .then(() => {
          localStorage.setItem(
            'App-Feedback',
            JSON.stringify({
              email: data.email,
              country: data.country,
              sendTime: Math.round(new Date().getTime() / 1000)
            })
          )
          ElMessage.success('Message Send Success')
          this.run()
          this.loading = false
          resolve(true)
        })
        .catch((e) => {
          ElMessage.error('Message Send Failed')
          this.loading = false
          reject(e)
        })
    })
  }
})
AppFeedbackStore.init()
