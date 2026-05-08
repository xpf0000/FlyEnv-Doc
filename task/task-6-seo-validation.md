# Task 6: SEO 验证与上线检查清单

**优先级**: P1（随 Task 3/4 同步执行）  
**预估耗时**: 1 小时  
**前置依赖**: Task 3, Task 4 完成  
**阻塞任务**: 无

---

## 任务目标

在所有页面改动完成后，进行系统性的 SEO 技术验证，确保优化措施正确落地。

---

## 执行步骤

### Step 1: 本地构建验证

```bash
yarn docs:build
```

确认构建无报错，输出目录：`docs/.vitepress/dist/`

### Step 2: 页面 Title / Meta 检查

检查以下页面的 `<title>` 和 `<meta name="description">`：

| 页面 | 预期 Title | 预期 Description |
|------|-----------|------------------|
| `/community.html` | FlyEnv Community Stories & Tutorials \| FlyEnv | Discover real developer stories... |
| `/zh/community.html` | FlyEnv 社区故事与教程 \| FlyEnv | 发现全球开发者使用 FlyEnv 的真实故事... |
| `/sponsor.html` | Sponsorship \| FlyEnv | Support FlyEnv development... |
| `/zh/sponsor.html` | 捐赠 \| FlyEnv | 支持 FlyEnv 开发... |

检查命令（在构建输出目录中）：
```bash
grep -o '<title>.*</title>' docs/.vitepress/dist/community.html
grep -o '<meta name="description" content="[^"]*">' docs/.vitepress/dist/community.html
```

### Step 3: Schema 验证

检查 JSON-LD 是否正确嵌入：
```bash
grep -o '<script type="application/ld+json">.*</script>' docs/.vitepress/dist/community.html
```

使用 [Google Rich Results Test](https://search.google.com/test/rich-results) 线上验证：
1. 部署后访问线上 `/community` 页面
2. 复制 URL 到 Rich Results Test
3. 确认检测到 `ItemList` 和 `TechArticle`

### Step 4: 外链属性检查

确认 Community 页面的所有外部文章链接都包含：
```html
target="_blank" rel="noopener noreferrer ugc"
```

检查命令：
```bash
grep -o 'rel="[^"]*"' docs/.vitepress/dist/community.html | sort | uniq -c
```

### Step 5: 语义化 HTML 检查

确认文章卡片使用正确的语义标签：
- 卡片外层应为 `<article>`
- 标题应为 `<h3>`
- 摘要应为 `<p>`

检查命令：
```bash
grep -c '<article' docs/.vitepress/dist/community.html
grep -c '<h3' docs/.vitepress/dist/community.html
```

### Step 6: 响应式测试

```bash
yarn docs:dev
```

在浏览器 DevTools 中测试：
- [ ] iPhone SE (375px) — 单列布局
- [ ] iPad (768px) — 两列布局
- [ ] Desktop (1440px) — 三列布局

### Step 7: 性能检查

使用 Chrome Lighthouse 对 `/community` 跑分：
- Performance >= 90
- SEO >= 95
- Accessibility >= 90

优化建议：
- 如果图片过多，考虑懒加载（`loading="lazy"`）
- 如果 JSON 数据过大，考虑分页加载而非一次性渲染

### Step 8: 部署与收录监控

1. 部署到生产环境
2. 提交 sitemap 到 [Google Search Console](https://search.google.com/search-console)
3. 使用 URL Inspection 工具请求收录 `/community` 和 `/zh/community`
4. 记录基线数据：
   - 当前收录页面数
   - 当前 `site:flyenv.com` 搜索结果数
   - 当前品牌词排名位置

### Step 9: 后续监控（每周检查）

| 检查项 | 工具 | 频率 |
|--------|------|------|
| 收录状态 | Google Search Console | 每周 |
| 排名变化 | GSC + 手动搜索 | 每周 |
| Schema 有效性 | Rich Results Test | 每月 |
| 页面性能 | Lighthouse | 每月 |
| 外链增长 | GSC Links Report | 每月 |

---

## 验收标准

- [ ] `yarn docs:build` 构建成功
- [ ] 所有目标页面的 Title 和 Meta Description 正确
- [ ] Community 页面包含 JSON-LD Schema
- [ ] 所有外链有 `rel="noopener noreferrer ugc"`
- [ ] 语义化标签数量符合预期（article/h3）
- [ ] Lighthouse SEO 分数 >= 95
- [ ] 已提交 Google Search Console 收录
- [ ] 基线数据已记录

---

## 常见问题排查

| 问题 | 原因 | 解决 |
|------|------|------|
| JSON-LD 未出现在构建输出 | VitePress 转义了 script 标签 | 确保使用 `<script type="application/ld+json">` 而非代码块 |
| 组件不渲染 | 路径错误 | 检查中英文页面的相对路径差异 |
| 样式丢失 | Tailwind 类未识别 | 确认类名拼写正确，且 Tailwind 配置包含相关颜色 |
| 搜索不工作 | 中文字符编码 | 确保 `toLowerCase()` 处理正确，搜索词 trim 后匹配 |
| Schema 验证失败 | 缺少必填字段 | TechArticle 必须包含 headline、author、datePublished |
