import { reactive } from 'vue';
import axios from 'axios';
import { ElMessage } from 'element-plus';

type RenameListItem = {
  name: string;
  msg: string;
  num: number;
  percentage: number;
};

type AppRenameStoreType = {
  name: string;
  msg: string;
  time: number;
  loading: boolean;
  disabled: () => boolean;
  list: RenameListItem[];
  run: (time?: number) => void;
  init: () => void;
  send: () => void;
  fetchList: () => void;
};

export const AppRenameStore: AppRenameStoreType = reactive({
  name: '',
  msg: '',
  time: 0,
  loading: false,
  list: [],
  disabled() {
    const length = this.name.trim();
    return length < 3 || length > 50;
  },
  run(time?: number) {
    this.time = time ?? 30;
    let timer: any;
    const doRun = () => {
      if (this.time === 0) {
        clearInterval(timer);
        timer = undefined;
        return;
      }
      this.time -= 1;
    };
    timer = setInterval(doRun, 1000);
  },
  init() {
    const cache = localStorage.getItem('App-Rename-Send');
    if (cache) {
      const obj = JSON.parse(cache);
      Object.assign(this, obj);
      const time = Math.round(new Date().getTime() / 1000);
      const diffTime = time - obj.sendTime;
      if (diffTime < 30) {
        this.time = 30 - diffTime;
        this.run(this.time);
      }
    }
  },
  send() {
    if (this.time > 0 || this.loading) {
      return;
    }
    if (this.name.length < 3 || this.name.length > 50) {
      ElMessage.error('name length is 3 - 50');
      return;
    }
    this.loading = true;
    const data = {
      name: this.name,
      msg: this.msg,
    };
    axios({
      url: 'https://api.macphpstudy.com/api/app/rename',
      method: 'post',
      data,
    })
      .then(() => {
        localStorage.setItem(
          'App-Rename-Send',
          JSON.stringify({
            sendTime: Math.round(new Date().getTime() / 1000),
          }),
        );
        ElMessage.success('Message Send Success');
        this.run();
        this.fetchList();
        this.loading = false;
      })
      .catch((e) => {
        ElMessage.error('Message Send Failed');
        this.loading = false;
      });
  },
  fetchList() {
    axios({
      url: 'https://api.macphpstudy.com/api/app/rename_list',
      method: 'post',
    })
      .then((res) => {
        const list: RenameListItem[] = res?.data?.data ?? [];
        let count = 0;
        list.forEach((item) => {
          count += item.num;
        });
        list.forEach((item) => {
          item.percentage = Math.round((item.num / count) * 100.0);
        });
        this.list = reactive(list.reverse());
      })
      .catch();
  },
});
