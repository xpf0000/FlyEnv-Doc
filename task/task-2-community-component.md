# Task 2: 开发社区文章展示组件 AppCommunityPosts

**优先级**: P0  
**预估耗时**: 3-4 小时  
**前置依赖**: Task 1（数据结构确定）  
**阻塞任务**: Task 3

---

## 任务目标

新建 `AppCommunityPosts` 组件，实现分类过滤、搜索、响应式卡片网格，完全复用项目现有的 Tailwind CSS + Vue3 Composition API 技术栈。

---

## 执行步骤

### Step 1: 新建组件目录和文件

```
docs/components/AppCommunityPosts/
├── index.vue          # 主组件
└── platform-icons.ts  # 平台图标映射（可选，也可内联）
```

### Step 2: 编写组件代码

**`docs/components/AppCommunityPosts/index.vue`**

```vue
<template>
  <div class="community-posts">
    <!-- Filter & Search Bar -->
    <div class="bg-white rounded-2xl border border-slate-200 p-4 mb-10 shadow-sm">
      <div class="flex flex-col md:flex-row gap-4 items-center">
        <!-- Category Tags -->
        <div class="flex flex-wrap gap-2 flex-1">
          <button
            v-for="cat in categories"
            :key="cat.value"
            :class="[
              'px-4 py-2 rounded-full text-sm font-medium border transition-all',
              activeCategory === cat.value
                ? 'bg-indigo-600 text-white border-indigo-600'
                : 'border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600'
            ]"
            @click="activeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
        <!-- Search -->
        <div class="relative w-full md:w-64">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search articles..."
            class="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <svg
            class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"
            fill="none" stroke="currentColor" viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          </svg>
        </div>
      </div>
    </div>

    <!-- Article Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <article
        v-for="post in displayedPosts"
        :key="post.id"
        class="card-hover bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
      >
        <!-- Cover / Platform Icon -->
        <div
          class="h-40 flex items-center justify-center relative"
          :class="getGradientClass(post.platform)"
        >
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-semibold px-2.5 py-1 rounded-md"
            :class="getTagColor(post.platform)"
          >
            {{ getContentTypeLabel(post.tags) }}
          </span>
          <span class="text-white/90 font-bold text-2xl tracking-tight">
            {{ getPlatformShortName(post.platform) }}
          </span>
        </div>

        <div class="p-5">
          <!-- Meta -->
          <div class="flex items-center gap-2 text-xs text-slate-500 mb-3">
            <span class="flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
              </svg>
              {{ post.author }}
            </span>
            <span>•</span>
            <span>{{ post.platform }}</span>
            <span>•</span>
            <span>{{ formatDate(post.date) }}</span>
          </div>

          <!-- Title -->
          <h3 class="text-lg font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
            {{ post.title }}
          </h3>

          <!-- Summary -->
          <p class="text-sm text-slate-600 mb-4 line-clamp-3 leading-relaxed">
            {{ post.summary }}
          </p>

          <!-- Tags -->
          <div class="flex flex-wrap gap-1.5 mb-4">
            <span
              v-for="tag in post.tags.slice(0, 4)"
              :key="tag"
              class="px-2 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-md font-medium capitalize"
            >
              {{ tag }}
            </span>
          </div>

          <!-- Link -->
          <a
            :href="post.url"
            target="_blank"
            rel="noopener noreferrer ugc"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
          >
            {{ post.platform === 'YouTube' || post.platform === 'Bilibili' ? 'Watch Video' : 'Read Article' }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </div>
      </article>
    </div>

    <!-- Load More / Empty State -->
    <div v-if="filteredPosts.length === 0" class="text-center py-20 text-slate-400">
      No articles found matching your criteria.
    </div>
    <div v-else-if="displayedPosts.length < filteredPosts.length" class="text-center mt-12">
      <button
        class="px-6 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-indigo-300 hover:text-indigo-600 transition-all shadow-sm"
        @click="loadMore"
      >
        Load More Articles
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

interface Post {
  id: string
  title: string
  url: string
  author: string
  platform: string
  language: string
  date: string
  summary: string
  tags: string[]
  cover?: string
  featured?: boolean
}

const props = defineProps<{
  posts: Post[]
}>()

const categories = [
  { label: 'All', value: 'all' },
  { label: 'macOS', value: 'macos' },
  { label: 'Windows', value: 'windows' },
  { label: 'Tutorials', value: 'tutorial' },
  { label: 'Reviews', value: 'review' },
  { label: 'Videos', value: 'video' },
  { label: 'Docker Alt', value: 'docker' },
]

const activeCategory = ref('all')
const searchQuery = ref('')
const pageSize = ref(9)

const filteredPosts = computed(() => {
  let result = props.posts

  // Category filter
  if (activeCategory.value !== 'all') {
    result = result.filter(p =>
      p.tags.includes(activeCategory.value) ||
      p.platform.toLowerCase().includes(activeCategory.value)
    )
  }

  // Search filter
  const q = searchQuery.value.trim().toLowerCase()
  if (q) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.author.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q))
    )
  }

  // Featured first, then by date desc
  return result.sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

const displayedPosts = computed(() => filteredPosts.value.slice(0, pageSize.value))

const loadMore = () => {
  pageSize.value += 6
}

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

const getGradientClass = (platform: string) => {
  const map: Record<string, string> = {
    'DEV.to': 'bg-gradient-to-br from-indigo-500 to-purple-600',
    'Medium': 'bg-gradient-to-br from-emerald-500 to-teal-600',
    'YouTube': 'bg-gradient-to-br from-red-500 to-rose-600',
    'Bilibili': 'bg-gradient-to-br from-pink-400 to-rose-500',
    '掘金': 'bg-gradient-to-br from-blue-500 to-cyan-500',
    '知乎': 'bg-gradient-to-br from-blue-600 to-indigo-600',
    'Reddit': 'bg-gradient-to-br from-orange-500 to-red-500',
  }
  return map[platform] || 'bg-gradient-to-br from-slate-500 to-gray-600'
}

const getTagColor = (platform: string) => {
  const map: Record<string, string> = {
    'DEV.to': 'text-indigo-700',
    'Medium': 'text-emerald-700',
    'YouTube': 'text-red-700',
    'Bilibili': 'text-pink-700',
    '掘金': 'text-blue-700',
  }
  return map[platform] || 'text-slate-700'
}

const getPlatformShortName = (platform: string) => {
  return platform.slice(0, 2).toUpperCase()
}

const getContentTypeLabel = (tags: string[]) => {
  if (tags.includes('video')) return 'Video'
  if (tags.includes('tutorial')) return 'Tutorial'
  if (tags.includes('review')) return 'Review'
  if (tags.includes('comparison')) return 'Comparison'
  return 'Article'
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
```

### Step 3: 样式兼容性处理

注意：项目使用 Tailwind CSS 3，但 `line-clamp` 在 Tailwind 3.3+ 才内置。如果当前版本不支持，上面的 `<style scoped>` 兜底方案已生效。

检查 Tailwind 版本：
```bash
grep "tailwindcss" package.json
```

如果版本 < 3.3，保留组件内的 `.line-clamp-*` 自定义样式；如果 >= 3.3，可以移除 scoped style，改用 `class="line-clamp-2"`。

---

## 验收标准

- [ ] 组件渲染正常，无 TypeScript 报错
- [ ] 分类过滤切换时列表实时更新
- [ ] 搜索框支持标题/作者/摘要/标签模糊匹配
- [ ] Featured 文章始终排在最前
- [ ] 卡片包含：平台色块、内容类型标签、作者、平台、日期、标题、摘要、标签、外链按钮
- [ ] 外链带有 `rel="noopener noreferrer ugc"`
- [ ] 响应式：移动端 1 列，平板 2 列，桌面 3 列
- [ ] "Load More" 按钮每次加载 6 条
- [ ] 空搜索状态显示友好提示

---

## 联调说明

此组件开发时可用临时测试数据联调：

```vue
<script setup>
import AppCommunityPosts from './components/AppCommunityPosts/index.vue'
import posts from './data/community-posts.json'
</script>

<AppCommunityPosts :posts="posts" />
```
