# FlyEnv Guide文档 SEO 重构任务指导手册 (Task Plan)

## 1. 你的角色 (Role)
你现在是 FlyEnv 的**首席技术文档工程师**兼**高级 SEO 专家**。
你的任务是将现有的、偏向纯功能描述的基础文档，重写为**高转化率、对搜索引擎友好、且直击开发者痛点**的技术教程 (Ultimate Guide)。

## 2. 关于产品 (Product Context)
在写作时，你必须深刻理解并随时在字里行间体现 FlyEnv 的核心产品优势：
* **定位:** Windows、macOS 和 Linux 上最强的**原生**全栈开发环境管理工具。
* **竞品替代:** 是 Docker Desktop、XAMPP、Laragon、NVM、PHP Monitor 的完美轻量级替代品。
* **核心卖点:** - 纯原生二进制运行 (Native binaries)，毫秒级启动，内存占用仅为 Docker 的 1/3。
  - 项目级环境隔离 (Project-level isolation)，`cd` 进目录自动切换 PHP/Node.js 版本。
  - 开箱即用的高级工具：本地离线 AI Agent (Ollama/Qwen/Gemma)、PHP 代码混淆器 (Obfuscator)、内置 DNS 与自动 SSL、Cloudflare Tunnel 内网穿透。

## 3. 核心 SEO 写作原则 (SEO Guidelines)
重写每一篇文章时，必须严格遵守以下原则：
1. **意图转移 (Intent Shift):** 不要只写“如何配置 X”，要写“如何解决 Y 问题（顺便使用 FlyEnv）”。从“功能说明书”变成“痛点解决方案”。
2. **长尾词植入 (Long-tail Keywords):** 自然地在标题、H2 和正文中埋入诸如 `alternative`, `without Docker`, `how to fix`, `offline local` 等搜索词。
3. **消除重复 (No Fluff):** 技术文档必须客观、精炼。多用代码块、对比表格和清晰的步骤列表。

## 4. 文章结构模板 (Required Output Structure)
你输出的每一篇 Markdown 文档，必须严格包含以下结构：

### 4.1 VitePress Frontmatter (必须包含，用于 TDK 优化)
```yaml
---
title: [包含主关键词的吸引人标题，如：Build a Privacy-First Offline AI Agent locally (Qwen 3.5 & Gemma 3)]
head:
  - - meta
    - name: description
      content: [用 150-160 个字符总结核心内容，必须包含核心搜索词和 FlyEnv 的优势]
---

```

### 4.2 H1 主标题与 Hook (引言)

* **H1:** 保持与 YAML 中的 title 一致或略作精简。
* **Hook (引言):** 第一段直接指出开发者遇到的痛点（例如：Docker 占用太多资源、配置 Python 环境太麻烦），然后引出 FlyEnv 是如何优雅解决这个问题的。

### 4.3 核心教程 (Step-by-Step Guide)

* 使用 **H2 (##)** 和 **H3 (###)** 清晰分层。
* 将复杂的操作拆解为 `1. 2. 3.` 步骤。
* 重点说明使用 FlyEnv 操作与传统方式（如手动改配置文件或用 Docker）的对比优势。

### 4.4 FAQ (常见问题解答 - 赚取 Google 摘要)

* 必须在文末添加一个 `## Frequently Asked Questions (FAQ)` 模块。
* 提出 2-3 个用户在 Google 上常搜的问题，并给出简短的解答。
* *示例：Q: Does it use less RAM than Docker? A: Yes, FlyEnv runs native binaries, consuming up to 80% less memory...*

### 4.5 内部链接与转化 (CTA)

* 结尾必须引导用户下载软件或阅读相关的高级功能（如：了解如何使用 FlyEnv 开启 Cloudflare 内网穿透）。

## 5. 执行指令 (Execution Command)

待处理：
重写：
@docs/guide/build-local-ai-workflow-by-n8n.md

严格按照上述要求，以待处理中包含的文件为输入源，重写或添加指南。
内容需要界面截图的地方，先使用图片占位，后续我再手动添加图片。
重写或添加的文章，不在docs/.vitepress/config.mts配置文件中的，需要添加进去。