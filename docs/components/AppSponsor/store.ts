import { reactive } from 'vue'
import axios from 'axios'

type SponsorListItem = {
  name: string
  msg: string
  num: number
}

type AppSponsorStoreType = {
  list: SponsorListItem[]
  fetchList: () => void
}

export const AppSponsorStore: AppSponsorStoreType = reactive({
  list: [],
  fetchList() {
    axios({
      url: 'https://api.macphpstudy.com/api/site/sponsor_list_all',
      method: 'post'
    })
      .then((res) => {
        console.log('res: ', res)
        const list: SponsorListItem[] = res?.data?.data?.list ?? []
        this.list = reactive(list)
      })
      .catch(() => {
        this.fetchList()
      })
  }
})
