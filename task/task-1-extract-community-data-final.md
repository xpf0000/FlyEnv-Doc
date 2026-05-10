# Task 1: 社区文章数据自动化提取与结构化流水线

**优先级**: P0（最高）  
**预估耗时**: 3-4 小时  
**前置依赖**: 无  
**阻塞任务**: Task 2, Task 3  
**执行模式**: 脚本自动化（禁止手工逐条处理）

---

## 任务目标

编写并运行一套 Node.js 自动化脚本流水线，从 Sponsor API 全量提取含链接的留言，经过去重、验证、质量评分后，输出 15-30 篇高质量文章的结构化 JSON 数据，供 Community 页面使用。

> **关键原则**：不要让 AI 在对话框里"手工"读网页、写摘要。而是让 AI **编写脚本**，让脚本全自动完成提取、抓取、验证、评分、格式化。代码的 `for` 循环是唯一能杜绝抽样和遗漏的工业级手段。

---

## 核心原则

| # | 原则 | 说明 |
|---|------|------|
| 1 | **强制全量扫描** | 必须遍历 sponsor_raw.json 中的**全部记录**，禁止抽样，禁止只扫描前 N 条 |
| 2 | **分阶段管道** | 必须遵循 `RAW → EXTRACT → VALIDATE → SCORE → FILTER → EXPORT → AUDIT` 七阶段流水线 |
| 3 | **每阶段有产物** | 每个阶段必须输出独立的 JSON 文件，作为下一阶段的输入和审计依据 |
| 4 | **禁止作弊** | 任何阶段不得跳过、不得伪造、不得基于 URL 推断内容，必须实际访问正文 |
| 5 | **失败可追溯** | 所有被过滤、被跳过、被判定为无效的记录，必须记录原因 |

---

## 技术方案

采用**脚本自动化 + LLM API 逐篇处理**方案：

- **爬虫层**：`puppeteer` 或 `playwright`（无头浏览器，绕过 Medium / LinkedIn 反爬）
- **并发控制**：`p-limit`（推荐并发数 2，避免触发反爬）
- **代理**：`http://127.0.0.1:17891`
- **LLM 提炼**：由执行 AI 自身处理；每处理一篇, 追加到结果JSON文件里. 如果因为上下文长度限制, 一次处理不完, 后续每次都从未处理的继续.

---

## 数据管道（七阶段）

### Stage 1: RAW — 导出原始数据

**输入**: Sponsor API  
**输出**: `task/sponsor_raw.json`

```bash
curl -X POST https://api.macphpstudy.com/api/site/sponsor_list_all \
  -H "Content-Type: application/json" \
  -o task/sponsor_raw.json
```

**执行约束**:
- 必须等待 curl 完成并确认文件存在
- 必须记录 `totalSponsors`（根数）

---

### Stage 2: EXTRACT — 提取全部链接

**输入**: `task/sponsor_raw.json`  
**输出**: `task/stage2_all_links.json`

编写脚本 `scripts/1_extract_links.js`，要求：

1. 读取 `sponsor_raw.json`，**遍历全部记录**（禁止抽样）
2. 使用正则 `https?:\/\/[^\s<>"{}|\\^\`\[\]]+` 提取 `msg` 字段中的 URL
3. **过滤非文章链接**：排除 `.png`, `.jpg`, `.gif`, `github.com`, `twitter.com`, `x.com`, `youtube.com/channel`, `linkedin.com/in/` 等
4. **过滤个人主页/频道页**：排除以 `/`, `/about`, `/profile` 结尾的 URL
5. 输出格式：

```json
[
  {
    "sponsorName": "xxx",
    "sponsorMsg": "original message...",
    "url": "https://...",
    "amount": 10,
    "extractedAt": "2025-01-15T10:00:00Z"
  }
]
```

**执行约束**:
- 必须记录提取统计：`totalSponsors`, `withLinks`, `filteredOut`, `remaining`
- 禁止跳过任何含链接的记录

---

### Stage 3: VALIDATE — 验证链接可访问性

**输入**: `task/stage2_all_links.json`  
**输出**: `task/stage3_validated_links.json`

编写脚本 `scripts/2_validate_links.js`，要求：

1. **使用无头浏览器**（puppeteer/playwright）遍历每个 URL，禁止使用纯 curl
2. **代理设置**：`http://127.0.0.1:17891`
3. **反爬头部注入**：
   - 域名含 `medium.com` → 注入 Medium 请求头（见附录）
   - 域名含 `linkedin.com` → 注入 LinkedIn 请求头（见附录）
   - 其他平台若触发反爬，使用相同 User-Agent 策略
4. **失败重试机制**：
   - 首次 403 / Cloudflare → 等待 3 秒后重试
   - 仍失败 → 切换代理重试
   - 仍失败 → 标记 `accessible: false`，记录失败原因
5. **有效文章判定标准**（必须同时满足）：
   - HTTP 状态码 200
   - 页面存在 `<title>` 标签
   - 页面正文长度 > 200 字符
   - 正文内容**确实提及 FlyEnv**（关键词匹配：flyenv）
6. 输出格式：

```json
[
  {
    "url": "https://...",
    "status": 200,
    "platform": "medium",
    "accessible": true,
    "containsFlyEnv": true,
    "title": "原始页面标题",
    "bodyContent": "完整正文内容",
    "publishedAt": "2024-03-15",
    "validationMethod": "browser",
    "retryCount": 1,
    "failedReason": null
  }
]
```

**执行约束**:
- 必须实际打开每个链接的正文，禁止仅根据 URL 推断内容
- bodyContent 必须是**完整的正文内容**
- 必须确认正文提及 FlyEnv，未提及的标记为 `containsFlyEnv: false`
- 必须记录重试次数和最终失败原因

---

### Stage 4: SCORE — 质量评分（LLM 提炼）

**输入**: `task/stage3_validated_links.json`  
**输出**: `task/stage4_scored_links.json`

编写脚本 `scripts/3_score_articles.js`，要求：

1. 对 `accessible: true` 且 `containsFlyEnv: true` 的记录，进行逐篇质量评分和内容提炼
2. **LLM 处理方案**：
   - 执行 AI（Agent）自身承担 LLM 提炼工作。脚本循环读取每篇文章的 `bodyContent`，通过子代理或函数调用让执行 AI 逐篇返回结构化 JSON。无需外部 API Key，无额外费用。
3. **LLM Prompt / System Instruction**：

```
你是一个资深的 SEO 专家和技术编辑。请阅读以下文章内容，提取关键信息并返回 JSON。

要求：
1. title: 优化后的文章标题（如果原标题 SEO 价值低，请改写，保留原意）
2. author: 作者名（找不到则留空）
3. platform: 发布平台（DEV.to / Medium / 掘金 / Bilibili / YouTube / Blog 等）
4. language: 语言代码（en / zh / id / es 等）
5. date: 发布日期 (YYYY-MM-DD，找不到则用当前日期)
6. summary: 用你自己的话写的 2-3 句话高质量摘要（120字内），强调 FlyEnv 核心优势
7. tags: 从规范列表中选择 1-4 个最相关的标签
8. cover: 封面图 URL（找不到则留空）
9. relevance_score: 1-10 分，评估与 FlyEnv 的相关度
10. quality_score: 按以下规则计算

质量评分规则：
- FlyEnv 为主体内容: +30
- 深度教程（含步骤/截图）: +20
- 对比分析（vs XAMPP/Docker/Laragon）: +15
- 原创经验分享: +15
- 含多图/截图: +10
- SEO 长尾价值高: +10
- 发布时间距今 < 6 个月: +10
- 发布时间距今 6-12 个月: +5
- 发布时间 > 12 个月: 0
- 内容浅薄/仅有提及: -20
- 疑似广告/软文: -30

总分低于 60 分 → invalid
```

4. 输出格式（保留原始验证信息 + LLM 提取信息）：

```json
[
  {
    "url": "https://...",
    "status": 200,
    "accessible": true,
    "containsFlyEnv": true,
    "title": "优化后的标题",
    "author": "作者名",
    "platform": "medium",
    "language": "en",
    "date": "2024-03-15",
    "summary": "高质量摘要...",
    "tags": ["macos", "tutorial", "php"],
    "cover": "",
    "relevance_score": 9,
    "quality_score": 85,
    "valid": true,
    "featured": false,
    "scoredAt": "2025-01-15T10:30:00Z"
  }
]
```

**执行约束**:
- 必须逐篇调用 LLM，禁止批量合并请求
- 必须记录 `scoredAt` 时间戳
- `quality_score < 60` 必须标记 `valid: false`
- 每完成一篇,追加到输出JSON文件里. 如果因为上下文长度限制, 无法一次执行完. 方便后续从未处理的继续执行. 

---

### Stage 5: FILTER — 去重与精选

**输入**: `task/stage4_scored_links.json`  
**输出**: `task/stage5_filtered_candidates.json`

编写脚本 `scripts/4_filter_articles.js`，要求：

1. **去重策略**：
   - 同一篇文章发布在多个平台（Medium / DEV.to / LinkedIn），只保留 SEO 价值最高的平台版本
   - 判定标准：优先保留域名权重高的平台（Medium > DEV.to > 个人博客）
   - 使用标题相似度（Levenshtein 距离 < 0.3）判定是否为同一篇文章
2. **时间过滤**：
   - 排除发布时间 > 12 个月前的文章（`date < 当前日期 - 12 个月`）
   - 若无明确日期，按抓取到的页面元数据推断
3. **数量目标**：
   - 最终保留 15-30 篇有效文章
   - 英文/国际文章：10-20 篇（`community-posts.json`）
   - 中文文章：5-10 篇（`community-posts-zh.json`）
   以上数量目标为暂定. 如果确实文章质量很好, 超出数量的也可以保留.
4. **Featured 标记**：
   - 从有效文章中，按 `quality_score` 排序，前 3 篇自动标记 `featured: true`
5. 输出格式：

```json
[
  {
    "id": "flyenv-vs-xampp-macos",
    "title": "...",
    "url": "https://...",
    "author": "...",
    "platform": "...",
    "language": "en",
    "date": "2024-03-15",
    "summary": "...",
    "tags": ["..."],
    "cover": "",
    "featured": true,
    "quality_score": 85,
    "relevance_score": 9
  }
]
```

**执行约束**:
- `id` 字段必须 URL-safe（小写、连字符分隔、无特殊字符）
- 必须按 `date` 字段降序排序
- 同内容多平台只保留 1 个版本

---

### Stage 6: EXPORT — 输出最终数据

**输入**: `task/stage5_filtered_candidates.json`  
**输出**: `docs/data/community-posts.json` + `docs/data/community-posts-zh.json`

编写脚本 `scripts/5_export_data.js`，要求：

1. 按 `language` 字段分流：
   - `language === 'zh'` → `docs/data/community-posts-zh.json`
   - 其他 → `docs/data/community-posts.json`
2. 确保输出目录 `docs/data/` 存在
3. 按 `date` 降序排序后写入
4. **格式规范**：

```json
[
  {
    "id": "flyenv-vs-xampp-macos",
    "title": "FlyEnv: A Modern Alternative to XAMPP on macOS",
    "url": "https://dev.to/xxx/flyenv-modern-alternative-xampp",
    "author": "Alex Chen",
    "platform": "DEV.to",
    "language": "en",
    "date": "2024-03-15",
    "summary": "A comprehensive guide on why FlyEnv replaces XAMPP for PHP development on macOS, with performance benchmarks and setup instructions.",
    "tags": ["macos", "xampp", "php", "tutorial"],
    "cover": "",
    "featured": true
  }
]
```

**执行约束**:
- 文件必须为合法 JSON，可通过 `JSON.parse()` 验证
- 必须包含 `featured: true` 的文章 ≥ 3 篇
- `tags` 全部来自规范标签列表

---

### Stage 7: AUDIT — 生成审计报告

**输入**: 全部阶段产物  
**输出**: `task/stage7_audit_report.md`

编写脚本 `scripts/6_generate_audit.js`，要求输出以下统计：

```markdown
# Task 1 执行审计报告

## 执行统计

| 指标 | 数值 |
|------|------|
| 总 Sponsor 数量 | 1328 |
| 含链接的 Sponsor | 186 |
| 提取到的 URL 总数 | 203 |
| 通过可访问性验证 | 87 |
| 正文提及 FlyEnv | 64 |
| 质量评分 ≥ 50 | 45 |
| 去重后有效文章 | 38 |
| 最终入选（15-30篇） | 28 |
| 死链/不可访问 | 116 |
| 无关内容（未提及 FlyEnv） | 23 |
| 低质量（< 50 分） | 19 |
| 重复内容（被去重） | 7 |
| 超期（> 12 个月） | 3 |

## 平台分布

| 平台 | 数量 |
|------|------|
| Medium | 8 |
| DEV.to | 6 |
| 掘金 | 4 |
| ... | ... |

## 语言分布

| 语言 | 数量 |
|------|------|
| en | 20 |
| zh | 8 |

## 标签分布

| 标签 | 数量 |
|------|------|
| tutorial | 12 |
| macos | 10 |
| ... | ... |

## Featured 文章（Top 3）

1. `flyenv-vs-xampp-macos` — Score: 92
2. `flyenv-laravel-setup-guide` — Score: 88
3. `flyenv-docker-alternative` — Score: 85

## 过滤原因明细

| 原因 | 数量 | 示例 |
|------|------|------|
| 403/Cloudflare | 45 | https://... |
| 404/页面不存在 | 12 | https://... |
| 未提及 FlyEnv | 23 | https://... |
| 质量分 < 50 | 19 | https://... |
| 重复内容 | 7 | https://... |
| 超期 > 12 个月 | 3 | https://... |

## 执行时间

- 开始: 2025-01-15T10:00:00Z
- 结束: 2025-01-15T11:30:00Z
- 总计: 90 分钟

## 校验结果

- [x] 全量扫描完成（无抽样）
- [x] 所有 URL 已实际访问
- [x] 所有摘要为 LLM 原创（非复制 meta description）
- [x] tags 全部来自规范列表
- [x] 包含 ≥ 3 篇 featured 文章
- [x] 文件格式合法 JSON
```

**执行约束**:
- 必须包含过滤原因明细（每条至少一个示例 URL）
- 必须包含 Featured 文章列表及评分
- 必须包含开始/结束时间

---

## 数据字段规范

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | URL-safe 唯一标识，小写，连字符分隔 |
| `title` | string | ✅ | 文章标题（可优化，但需忠于原意） |
| `url` | string | ✅ | 原文链接 |
| `author` | string | ✅ | 作者名（找不到则留空字符串） |
| `platform` | string | ✅ | 平台名称：DEV.to / Medium / 掘金 / Bilibili / YouTube / Blog 等 |
| `language` | string | ✅ | `en` / `zh` / `id` / `es` 等 |
| `date` | string | ✅ | ISO 日期格式 `YYYY-MM-DD` |
| `summary` | string | ✅ | 2-3 句话摘要，120 字以内，LLM 原创总结 |
| `tags` | string[] | ✅ | 1-4 个标签，全部小写，来自规范列表 |
| `cover` | string | ❌ | 封面图 URL，空字符串表示使用默认平台图标 |
| `featured` | boolean | ❌ | 是否置顶推荐（Top 3 自动标记） |

## 标签规范（统一使用）

```
# 平台标签
macos, windows, linux

# 内容类型
tutorial, review, comparison, video, case-study

# 技术栈
php, laravel, wordpress, nodejs, python, java, ai

# 对比对象
xampp, docker, laragon, herd, mamp
```

---

## 执行约束（REQUIRED EXECUTION RULES）

> 以下规则为**硬性约束**，任何违反均视为任务失败。

- [ ] **禁止抽样（Sampling）**：必须遍历 sponsor_raw.json 中的**全部记录**
- [ ] **禁止只处理前 N 条**：无论数据量多大，必须处理完整数据集
- [ ] **禁止随机跳过**：不得因"看起来不相关"就跳过任何含链接的记录
- [ ] **禁止仅根据 URL 推断内容**：必须实际打开文章正文，确认内容
- [ ] **禁止复制 meta description**：摘要必须由 LLM 阅读后原创总结
- [ ] **禁止跳过反爬平台**：Medium / LinkedIn 必须使用无头浏览器 + 代理 + 请求头
- [ ] **禁止合并 LLM 请求**：必须逐篇调用 LLM，禁止多篇文章合并为一个 prompt
- [ ] **禁止伪造数据**：所有字段必须基于实际抓取内容，不得编造
- [ ] **必须输出中间产物**：每个阶段必须有独立的 JSON 输出文件
- [ ] **必须生成审计报告**：最终必须有 `stage7_audit_report.md`

---

## 执行检查点（EXECUTION CHECKPOINTS）

每完成 50 条 sponsor 记录，必须在控制台输出：

```
[Checkpoint] 已扫描: 150 / 1328
  - 已发现链接: 23
  - 有效文章: 8
  - 当前平台分布: { medium: 3, devto: 2, blog: 3 }
```

每完成一个 Stage，必须输出：

```
[Stage Complete] Stage 3: VALIDATE
  - 输入: 203 条
  - 输出: 87 条
  - 过滤: 116 条（原因: 403=45, 404=12, timeout=59）
```

---

## 验收标准

- [ ] `docs/data/community-posts.json` 包含 10-20 条英文/国际文章
- [ ] `docs/data/community-posts-zh.json` 包含 5-10 条中文文章
- [ ] 两文件合计 15-30 条，按 `date` 升序排列
- [ ] 所有 `url` 字段已通过无头浏览器验证可访问
- [ ] 所有 `summary` 字段为 LLM 原创摘要，非直接复制原文
- [ ] `tags` 全部来自规范标签列表
- [ ] 至少有 3 篇标记 `featured: true`
- [ ] `task/stage7_audit_report.md` 已生成，包含完整统计
- [ ] 审计报告中 `totalSponsors` 与 `sponsor_raw.json` 根数一致
- [ ] 无抽样证据（中间产物数量 = 总数量 - 过滤数量）

---

## 附录：反爬请求头

### Medium 请求头

```
authority: medium.com
method: GET
path: /@xxx/xxx
scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
accept-encoding: gzip, deflate, br, zstd
accept-language: en,zh-CN;q=0.9,zh;q=0.8
cache-control: max-age=0
priority: u=0, i
sec-ch-ua: "Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
```

### LinkedIn 请求头

```
authority: www.linkedin.com
method: GET
path: /pulse/xxx
scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
accept-encoding: gzip, deflate, br, zstd
accept-language: en,zh-CN;q=0.9,zh;q=0.8
cache-control: max-age=0
priority: u=0, i
sec-ch-ua: "Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
```

> 其他平台如果需要请求头，请在执行过程中补充。

---

## 注意事项

1. **脚本崩溃处理**：脚本必须支持断点续跑。如果中途崩溃，重新运行时应从上次未完成的记录继续，而非从头开始。
2. **数据持久化**：Stage 4-5 每处理完一篇文章，立即追加写入文件，避免程序崩溃导致数据丢失。
3. **敏感数据清理**：任务完成后，删除 `task/sponsor_raw.json`（含 sponsor 敏感信息），保留审计报告和最终数据文件。
4. **摘要原创性**：LLM 生成的摘要不得与原文 meta description 相似度超过 50%（可通过简单字符串匹配检查）。
5. **日期推断**：如果页面无明确发布日期，可通过 URL 模式、页面元数据或最近修改时间推断，必须在审计报告中标注推断比例。
6. **多语言处理**：非英文/中文文章（如印尼语、西班牙语），若质量评分高，也可收录，但语言字段标记为实际语言代码（如 `id`, `es`）。
7. **最终产物清单**：
   - `docs/data/community-posts.json`
   - `docs/data/community-posts-zh.json`
   - `task/stage7_audit_report.md`
   - （可选保留）`task/stage2_all_links.json` ~ `task/stage5_filtered_candidates.json`
