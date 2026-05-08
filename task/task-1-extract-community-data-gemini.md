这是一个非常典型的问题。当让 AI（如 ChatGPT、Claude 或 Gemini）在对话框里直接执行这种“批量抓取 + 深度阅读 + 总结提炼 + 严格格式化”的任务时，它必然会“偷懒”（抽样执行）或“幻觉”（编造数据）。

### 💡 为什么 AI 会执行失败？

1. **上下文与工具调用限制**：AI 在单次对话中无法连续调用浏览器插件访问 30 个以上的独立网页。遇到超时或反爬限制，它就会中断并开始“脑补”剩余内容。
2. **“批量疲劳”**：面对重复性极高的长列表，大模型底层机制倾向于输出“示例（Sample）”而不是“穷举（Exhaustive）”。
3. **流程设计冲突**：你的 Task 描述是写给“人类实习生”的（比如：“打开文件、筛选、阅读、用自己的话总结”），而不是写给“AI 智能体”或“自动化脚本”的。

---

### 🚀 破局方案：从“让 AI 手工做”改为“让 AI 写脚本全自动做”

要把这个任务完美落地，我们需要改变策略：**不要让 AI 在对话框里去读网页，而是让 AI 帮你写一个 Node.js/Python 脚本。这个脚本会自动抓取网页内容，然后通过调用大模型 API（如 OpenAI/DeepSeek API）对每一篇文章进行“逐一”总结和打标。**

以下是我为你重构的 **面向 AI 程序员（如 Cursor, GitHub Copilot）或自动化工作流的 Task 文档**。

你可以把下面这段全新的 Markdown 发给 AI，它就能帮你写出绝对不会漏掉任何一篇文章的自动化代码：

---

# 🤖 重构后的 Task 1：开发社区文章自动化提取与总结脚本

**任务目标**：编写一个 Node.js 脚本流水线，自动提取 Sponsor API 中的文章链接，使用无头浏览器（绕过反爬）抓取文章正文，并调用 LLM API 逐篇生成高质量的结构化 JSON 数据。

## 阶段一：数据提取脚本 (Step 1 & 2)

请编写一个 Node.js 脚本 `scripts/1_extract_links.js`，要求：

1. 请求 `https://api.macphpstudy.com/api/site/sponsor_list_all`。
2. 使用正则提取 `msg` 字段中的 http/https 链接。
3. 过滤掉 `.png`, `.jpg`, `github.com`, `twitter.com` 等非文章链接。
4. 将提取结果保存为 `task/sponsor_urls.json`，格式如下：
   `[{ "sponsorName": "xxx", "url": "https://...", "amount": 10 }]`

## 阶段二：内容抓取与 LLM 结构化脚本 (Step 3 & 4) - 核心难点

请编写核心脚本 `scripts/2_process_articles.js`，要求实现以下流水线逻辑：

### 1. 网页内容抓取 (爬虫模块)

* 读取 `task/sponsor_urls.json`，**使用 `p-limit` 控制并发（推荐并发数为 2）**，遍历每个 URL。
* 由于包含 Medium 和 LinkedIn，必须使用 `puppeteer` 或 `playwright` 配合全局 HTTP 代理提取网页文本。
* **代理设置**：`http://127.0.0.1:17891`
* **反爬头部注入**：
* 如果域名包含 `medium.com`，注入指定的 Medium Headers（见附件要求）。
* 如果域名包含 `linkedin.com`，注入指定的 LinkedIn Headers（见附件要求）。


* 提取网页的 `<title>` 和 `<body>` 里的纯文本（去除 HTML 标签，截取前 3000 字符即可，为了省 token）。

### 2. LLM 数据提炼 (AI 处理模块)

对于成功抓取到文本的网页，调用 LLM API（如 OpenAI API），使用 `response_format: { type: "json_object" }` 强制输出 JSON。
**System Prompt 设定如下：**

> "你是一个资深的 SEO 专家和技术编辑。请阅读以下文章内容，提取关键信息并返回 JSON。
> 要求：
> 1. `title`: 优化后的文章标题（如果原标题 SEO 价值低，请改写，保留原意）。
> 2. `author`: 作者名（如果找不到则留空）。
> 3. `platform`: 发布平台（如 DEV.to, Medium, 掘金, 知乎, 个人博客）。
> 4. `language`: 语言代码（只允许 'en' 或 'zh'）。
> 5. `date`: 发布日期 (YYYY-MM-DD，找不到则用当前日期)。
> 6. `summary`: 用你自己的话写的 2-3 句话高质量摘要（120字内），强调 FlyEnv 的核心优势（如替代 Docker/XAMPP）。
> 7. `tags`: 从以下列表中选择 1-4 个最相关的标签：[macos, windows, linux, tutorial, review, comparison, video, case-study, php, laravel, wordpress, nodejs, python, ai, xampp, docker, laragon, herd, mamp]。
> 8. `relevance_score`: 1-10分，评估与 FlyEnv/MacPHPStudy 的相关度。低于 5 分的视为无效文章。"
>
>

### 3. 数据分发与存储 (文件模块)

* 接收 LLM 返回的 JSON。如果 `relevance_score >= 5`，则根据 `language` 字段进行分发。
* 英文存入 `docs/data/community-posts.json`。
* 中文存入 `docs/data/community-posts-zh.json`。
* 每次处理完一条，追加写入文件（避免程序崩溃导致数据丢失）。
* 为评分最高的前 3 篇文章自动加上 `"featured": true` 标记。

## 附件与环境配置要求

1. 使用 `dotenv` 读取 `OPENAI_API_KEY`。
2. [在此处附上你前面提供的 Medium 和 LinkedIn 的 Request Headers]

---

### 💡 为什么这样改能 100% 成功？

1. **解除 AI 限制**：AI 不再受限于单次对话的超时时间，它只是帮你写代码。代码跑在你自己的电脑上，哪怕花 30 分钟慢慢爬，也能全部跑完。
2. **强制规则引擎**：用代码的 `for` 循环代替大模型的“自然语言循环”，彻底杜绝“抽样遗漏”。
3. **利用 LLM 最擅长的事**：只让大模型做“单篇文章的摘要和打标”，这是大模型最强大的能力。通过限制提取前 3000 个字符，极大节省了 Token，且不会遗漏核心信息。
4. **稳定落盘**：写一条存一条，哪怕断网了，重新跑脚本也能从断点继续。

你只需要把上面这段新的 Task 交给 Cursor 或直接发给通义千问/Claude，让它给你输出这 **两个完整的 `.js` 脚本**，你直接在本地 `node 2_process_articles.js`，喝杯咖啡，完美的数据文件就会自动生成好了。