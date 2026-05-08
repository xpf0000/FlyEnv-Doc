# Task 4: 精简 Sponsor 赞助页面

**优先级**: P1  
**预估耗时**: 2-3 小时  
**前置依赖**: Task 3（Community 页面上线，文章已迁移）  
**阻塞任务**: 无

---

## 任务目标

将 Sponsor 页面恢复为**纯赞助/致谢页面**，移除文章链接展示，优化表格展示形式，避免主题混淆。

---

## 执行步骤

### Step 1: 精简英文 Sponsor 页面文案

**文件**: `docs/sponsor.md`

```markdown
# Sponsorship

If FlyEnv has helped your workflow, consider supporting the project. Your sponsorship keeps the development going and the community growing.

## Sponsorship Methods

If you are an international friend, please sponsor from the ko-fi platform. If you can use WeChat/Alipay, you can scan the QR code to donate.

<div class="sponsorship-methods">

| [ko-fi](https://ko-fi.com/xpf0000) | WeChat | Alipay |
|:----------------------------------:|:------:|:------:|
| <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode3@2x.png" width="180"> | <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode1@2x.png" width="180"> | <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode2@2x.png" width="180"> |

</div>

## Special Thanks

**F4nniu**, founder of [FastAdmin](https://www.fastadmin.net/), for sponsoring the flyenv.com domain.

## Our Supporters

Thank you to every friend who supports the FlyEnv project.

<script setup>
import AppSponsor from './components/AppSponsor/index.vue';
</script>

<AppSponsor />
```

### Step 2: 精简中文 Sponsor 页面文案

**文件**: `docs/zh/sponsor.md`

```markdown
# 捐赠

如果 FlyEnv 对你的工作有所帮助，欢迎支持这个项目。你的捐赠将帮助我们持续开发和维护。

## 捐赠方式

如果你是国际友人，请从 ko-fi 平台进行捐赠。如果你可以使用微信/支付宝，可以扫描二维码进行捐赠。

<div class="sponsorship-methods">

| [ko-fi](https://ko-fi.com/xpf0000) | 微信 | 支付宝 |
|:----------------------------------:|:----:|:------:|
| <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode3@2x.png" width="180"> | <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode1@2x.png" width="180"> | <img class="shadow-sm rounded-xl" src="https://oss.macphpstudy.com/image/qrcode2@2x.png" width="180"> |

</div>

## 特别致谢

**F4nniu**，[FastAdmin](https://www.fastadmin.net/) 的创始人，赞助了 flyenv.com 域名。

## 支持者名单

感谢每一个支持 FlyEnv 项目的朋友。

<script setup>
import AppSponsor from '../components/AppSponsor/index.vue';
</script>

<AppSponsor />
```

### Step 3: 改造 AppSponsor 组件

**文件**: `docs/components/AppSponsor/index.vue`

当前组件从 API 拉取数据后直接渲染完整表格。需要优化为：
1. **过滤掉含 URL 的 msg**（文章链接已迁移到 Community 页面）
2. **优先展示有留言的赞助者**
3. **添加头像墙视觉效果**
4. **长列表分页/折叠**

替换组件代码：

```vue
<template>
  <div class="sponsor-section">
    <!-- Avatar Wall -->
    <div class="flex flex-wrap gap-2 mb-6">
      <div
        v-for="(s, i) in recentSponsors.slice(0, 24)"
        :key="i"
        class="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold"
        :class="avatarColors[i % avatarColors.length]"
        :title="s.name"
      >
        {{ s.name.slice(0, 2).toUpperCase() }}
      </div>
      <div
        v-if="recentSponsors.length > 24"
        class="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold"
      >
        +{{ recentSponsors.length - 24 }}
      </div>
    </div>

    <!-- Messages List (only sponsors with non-URL messages) -->
    <div v-if="sponsorsWithMessages.length > 0" class="space-y-2 mb-6">
      <div
        v-for="s in sponsorsWithMessages.slice(0, showAllMessages ? undefined : 5)"
        :key="s.name + s.num"
        class="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100"
      >
        <div class="flex items-center gap-3 min-w-0">
          <div
            class="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
            :class="avatarColors[s.name.length % avatarColors.length]"
          >
            {{ s.name.slice(0, 2).toUpperCase() }}
          </div>
          <div class="min-w-0">
            <p class="text-sm font-medium text-slate-900 truncate">{{ s.name }}</p>
            <p class="text-xs text-slate-500 truncate">{{ s.msg }}</p>
          </div>
        </div>
        <span class="text-sm font-semibold text-slate-700 shrink-0 ml-4">{{ formatAmount(s.num) }}</span>
      </div>
    </div>

    <!-- Show More / Less -->
    <div v-if="sponsorsWithMessages.length > 5" class="text-center">
      <button
        class="text-sm text-indigo-600 font-medium hover:text-indigo-700 transition-colors"
        @click="showAllMessages = !showAllMessages"
      >
        {{ showAllMessages ? 'Show Less' : `Show All ${sponsorsWithMessages.length} Messages` }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, onMounted, watch, onUnmounted } from 'vue'
import { AppSponsorStore } from './store'

const urlRegex = /https?:\/\/[^\s<>"{}|\\^`\[\]]+/gi

const list = computed(() => AppSponsorStore.list)
const showAllMessages = ref(false)

const avatarColors = [
  'bg-gradient-to-br from-indigo-400 to-purple-500',
  'bg-gradient-to-br from-emerald-400 to-teal-500',
  'bg-gradient-to-br from-orange-400 to-red-500',
  'bg-gradient-to-br from-blue-400 to-cyan-500',
  'bg-gradient-to-br from-pink-400 to-rose-500',
  'bg-gradient-to-br from-violet-400 to-fuchsia-500',
  'bg-gradient-to-br from-lime-400 to-green-500',
  'bg-gradient-to-br from-yellow-400 to-amber-500',
]

// Filter out messages containing URLs (migrated to Community page)
const cleanSponsors = computed(() => {
  return list.value.filter(s => !s.msg || !urlRegex.test(s.msg))
})

const recentSponsors = computed(() => cleanSponsors.value.slice(0, 50))

const sponsorsWithMessages = computed(() => {
  return cleanSponsors.value
    .filter(s => s.msg && s.msg.trim().length > 0)
    .sort((a, b) => b.num - a.num)
})

const formatAmount = (num: number) => {
  return num >= 1 ? `$${num.toFixed(0)}` : `¥${(num * 100).toFixed(0)}` // Adjust based on your currency logic
}

let watcher: any = undefined

onMounted(() => {
  watcher = watch(list, () => { /* reactive update */ }, { immediate: true })
  AppSponsorStore.fetchList()
})

onUnmounted(() => {
  watcher?.()
  watcher = undefined
})
</script>
```

### Step 4: 检查并更新 AppSponsor Store

**文件**: `docs/components/AppSponsor/store.ts`

当前代码无需修改，但确认 API 返回的数据结构没有变化。

---

## 验收标准

- [ ] 英文/中文 Sponsor 页面不再展示任何文章链接
- [ ] 页面顶部保留 ko-fi / 微信 / 支付宝 捐赠方式
- [ ] 页面包含 Special Thanks 区块
- [ ] AppSponsor 组件展示头像墙 + 有留言的赞助者列表
- [ ] 含 URL 的 msg 被自动过滤，不在 Sponsor 页面显示
- [ ] 留言列表支持展开/收起
- [ ] `yarn docs:dev` 预览无报错
- [ ] Sponsor 页面和 Community 页面主题互不重叠

---

## 注意事项

1. **货币格式**：当前 `store.ts` 中的 `num` 字段含义不确定（可能是美元或人民币），`formatAmount` 函数需要根据实际情况调整
2. **头像墙颜色**：使用 Tailwind 的 gradient 类，确保项目已配置
3. **过滤逻辑**：`urlRegex` 在客户端过滤，避免将文章链接展示在 Sponsor 页面
4. 如果未来 sponsor API 返回的数据需要服务器端过滤，请联系后端 API 开发者添加 `type` 字段区分留言类型
