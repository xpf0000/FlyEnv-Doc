# Task 5: 新建 Testimonials 用户评价页面（后续阶段）

**优先级**: P2（延后执行）  
**预估耗时**: 3-4 小时  
**前置依赖**: Task 3（Community 页面上线且流量稳定）  
**阻塞任务**: 无

---

## 任务目标

新建 `/testimonials`（或 `/love`）页面，汇聚用户对 FlyEnv 的真实评价，作为社交背书提升转化率。此任务**不建议与 Community 页面同时上线**，等 Community 页面 SEO 效果稳定后再执行。

---

## 执行步骤

### Step 1: 新建页面文件

```
docs/testimonials.md
docs/zh/testimonials.md
```

### Step 2: 新建组件（可选，也可直接写在 markdown 中）

```
docs/components/AppTestimonials/index.vue
```

参考 `task/mockup-testimonials.html` 效果图实现：
- 顶部数据指标（用户数、评分、Stars、国家数）
- Featured Reviews 卡片网格（2 列）
- 社交媒体口碑引用（X/Twitter、Reddit、GitHub）
- 底部 CTA

### Step 3: 添加导航

在 `docs/.vitepress/config.mts` 的 nav 数组中增加：

```typescript
// 英文
{ text: 'Love', link: '/testimonials' }

// 中文
{ text: '好评', link: '/zh/testimonials' }
```

> 注意：导航文案要轻量，避免过于商业化。英文可用 "Love"、"Reviews"、"Wall of Love"；中文可用 "用户评价"、"好评"。

### Step 4: 添加 Schema

页面注入 `Review` + `SoftwareApplication` JSON-LD：

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "FlyEnv",
  "applicationCategory": "DeveloperApplication",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "500"
  },
  "review": [
    {
      "@type": "Review",
      "author": {"@type": "Person", "name": "Sarah Kim"},
      "reviewBody": "I manage a team of 8 developers and we were all using Docker Desktop...",
      "reviewRating": {"@type": "Rating", "ratingValue": "5"}
    }
  ]
}
```

---

## 验收标准

- [ ] 页面设计参考 `task/mockup-testimonials.html`
- [ ] 包含至少 4 条精选用户评价
- [ ] 包含 X / Reddit / GitHub 的社区口碑引用
- [ ] 注入 `SoftwareApplication` + `Review` JSON-LD Schema
- [ ] 已添加导航入口
- [ ] 中英文页面内容完整

---

## 暂不执行的原因

1. **避免同时上线过多新页面**，分散搜索引擎爬取预算
2. **Community 页面是 SEO 核心**，应先集中资源让其收录和排名
3. **Testimonials 内容需要收集**，需要时间整理真实评价素材
