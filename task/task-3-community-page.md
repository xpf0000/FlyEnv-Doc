# Task 3: 重写 Community 页面（含中英文 + SEO Schema）

**优先级**: P0  
**预估耗时**: 2-3 小时  
**前置依赖**: Task 1（数据就绪）, Task 2（组件就绪）  
**阻塞任务**: 无

---

## 任务目标

重写 `docs/community.md` 和 `docs/zh/community.md`，将现有社交链接列表升级为**结构化社区内容中心**，并注入完整的 JSON-LD Schema。

---

## 执行步骤

### Step 1: 重写英文 Community 页面

**文件**: `docs/community.md`

```markdown
---
head:
  - - meta
    - name: description
      content: "Discover real developer stories, tutorials, and reviews about FlyEnv. Learn how teams replace XAMPP, Docker, and Laragon with FlyEnv on macOS and Windows."
  - - meta
    - property: og:title
      content: "FlyEnv Community Stories & Tutorials"
  - - meta
    - property: og:description
      content: "Real community articles, tutorials, and videos about FlyEnv from developers around the world."
---

# FlyEnv Community Stories

Discover how developers around the world use FlyEnv to streamline their local development workflow. From macOS to Windows, from Laravel to WordPress — these are real stories written by real users.

<script setup>
import AppCommunityPosts from './components/AppCommunityPosts/index.vue'
import posts from './data/community-posts.json'
</script>

<AppCommunityPosts :posts="posts" />

## Community Channels

Prefer to connect directly? Join our community on these platforms:

- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)
- [Facebook Group](https://www.facebook.com/groups/908637655411162)
- [Discord](https://discord.gg/u5SuMGxjPE)
- QQ群: 540738893

## Share Your Story

Written a tutorial or review about FlyEnv? We'd love to feature it here.

[Submit Your Article →](mailto:support@flyenv.com)

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "FlyEnv Community Articles",
  "description": "Community-driven tutorials, reviews, and stories about FlyEnv from developers worldwide.",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "TechArticle",
        "headline": "FlyEnv: A Modern Alternative to XAMPP on macOS",
        "description": "A comprehensive guide on why FlyEnv replaces XAMPP for PHP development on macOS...",
        "author": { "@type": "Person", "name": "Alex Chen" },
        "publisher": { "@type": "Organization", "name": "DEV.to" },
        "datePublished": "2024-03-15",
        "about": {
          "@type": "SoftwareApplication",
          "name": "FlyEnv",
          "applicationCategory": "DeveloperApplication",
          "operatingSystem": ["macOS", "Windows", "Linux"]
        }
      }
    }
  ]
}
</script>
```

> **注意**：JSON-LD 中的文章数据需要与 `community-posts.json` 保持同步。如果文章数量多，可以只放前 5-10 篇 featured 文章到 Schema 中，避免 HTML 过大。

### Step 2: 重写中文 Community 页面

**文件**: `docs/zh/community.md`

```markdown
---
head:
  - - meta
    - name: description
      content: "发现全球开发者使用 FlyEnv 的真实故事、教程和评测。了解如何在 macOS 和 Windows 上用 FlyEnv 替代 XAMPP、Docker 和 Laragon。"
  - - meta
    - property: og:title
      content: "FlyEnv 社区故事与教程"
  - - meta
    - property: og:description
      content: "来自全球开发者的 FlyEnv 真实文章、教程和视频。"
---

# FlyEnv 社区故事

发现全球开发者如何使用 FlyEnv 简化本地开发工作流。从 macOS 到 Windows，从 Laravel 到 WordPress —— 这些都是真实用户撰写的真实故事。

<script setup>
import AppCommunityPosts from '../components/AppCommunityPosts/index.vue'
import posts from '../data/community-posts-zh.json'
</script>

<AppCommunityPosts :posts="posts" />

## 社区渠道

想要直接交流？加入我们的社区：

- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)
- [Facebook Group](https://www.facebook.com/groups/908637655411162)
- [Discord](https://discord.gg/u5SuMGxjPE)
- QQ群: 540738893

## 分享你的故事

撰写过关于 FlyEnv 的教程或评测？我们很乐意在这里展示。

[提交你的文章 →](mailto:support@flyenv.com)
```

### Step 3: 在 config.mts 中优化 Community 页面元信息

**文件**: `docs/.vitepress/config.mts`

查找 `locales.root.themeConfig.nav` 中 Community 的 link，确保指向 `/community`（无需修改，但确认存在）。

无需修改 config.mts 的 nav 配置，但如有需要可在 `themeConfig` 中为 Community 页面添加自定义描述（通常 frontmatter 已足够）。

### Step 4: 添加内部反向链接

在相关 Guide 页面中适当位置添加指向 Community 页面的链接，提升页面权重：

**`docs/guide/flyenv-vs-docker-xampp.md`**（或其他合适页面）末尾添加：

```markdown
---

> 💬 **Community Perspective**: See what developers are saying about [FlyEnv vs XAMPP and Docker](/community?tag=xampp) in real-world reviews and tutorials.
```

同理在中文对应页面添加指向 `/zh/community` 的链接。

---

## 验收标准

- [ ] `docs/community.md` 渲染正常，包含顶部介绍 + AppCommunityPosts 组件 + 社区渠道 + 投稿 CTA
- [ ] `docs/zh/community.md` 渲染正常，内容完整中文本地化
- [ ] 页面包含 `meta description` frontmatter
- [ ] 页面包含 JSON-LD `ItemList` + `TechArticle` Schema（至少前 5 篇）
- [ ] 现有的社交链接（GitHub Discussions / Facebook / Discord / QQ）仍然保留在页面底部
- [ ] 至少 2 个 Guide 页面增加了指向 Community 页面的内部链接
- [ ] `yarn docs:dev` 本地预览无报错
- [ ] 移动端显示正常

---

## 注意事项

1. **VitePress 中导入 JSON**：`import posts from './data/community-posts.json'` 在 VitePress 中直接可用（Vite 原生支持 JSON 导入）
2. **相对路径**：英文页面在 `docs/community.md`，组件路径是 `./components/...`；中文页面在 `docs/zh/community.md`，组件路径是 `../components/...`
3. **frontmatter 语法**：VitePress 的 `head` frontmatter 格式是数组嵌套，注意与示例保持一致
4. **JSON-LD 位置**：放在 markdown 底部即可，VitePress 会将其原样输出到 HTML
