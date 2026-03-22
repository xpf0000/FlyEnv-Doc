---
title: 使用 n8n 和 Ollama 构建本地自托管 AI 工作流（无需 Docker）
head:
  - - meta
    - name: description
      content: 学习如何使用 n8n 和 Ollama 在本地构建隐私优先的 AI 自动化工作流。FlyEnv 让部署变得简单，支持原生二进制运行、自动 SSL 和 Cloudflare Tunnel 安全远程访问。
---

# 使用 n8n 和 Ollama 构建本地自托管 AI 工作流（无需 Docker）

厌倦了为 Zapier 或 Coze 等 AI 自动化工具支付月费？担心将敏感数据发送到第三方云服务？许多开发者希望构建 AI 驱动的工作流，但被复杂的 Docker 配置、繁琐的手动设置以及对数据隐私的持续担忧所困扰。

本指南将向你展示如何使用 **n8n**（Zapier 的开源替代品）和 **Ollama**（本地 LLM 运行器）创建一个完全自托管、支持离线运行的 AI 工作流——全部通过 FlyEnv 轻松管理。无需 Docker，无需依赖云服务，而且在需要时还可以安全地将你的工作流暴露到互联网。

---

## 为什么自托管 AI 工作流很重要

| 云端自动化工具 | 使用 FlyEnv 自托管 |
|---------------|-------------------|
| 每月订阅费用 | 一次性设置，永久免费 |
| 数据发送到第三方服务器 | 100% 私有，本地运行 |
| 定制化受限 | 完全控制工作流 |
| 需要互联网连接 | 完全支持离线运行 |
| 复杂的 API 速率限制 | 无限的本地 API 调用 |

FlyEnv 的原生运行方式意味着 n8n 和 Ollama 作为原生二进制文件运行——而非臃肿的容器——相比基于 Docker 的解决方案可节省高达 80% 的内存占用。

---

## 准备工作

在开始之前，请确保你已具备：

1. **已安装 FlyEnv** 在 macOS、Windows 或 Linux 上（[点击下载](/zh/download)）
2. 对工作流自动化概念有基本了解
3. 至少 8GB 内存（推荐使用 16GB 运行更大的 AI 模型）

---

## 第一步：安装并启动 n8n

FlyEnv 将 n8n 作为内置模块包含在内，无需手动设置 Node.js 或 Docker 容器。

1. 打开 FlyEnv，导航到 **工具** 部分
2. 在可用模块列表中找到 **n8n**
3. 点击 **安装**——FlyEnv 自动处理所有依赖项
4. 安装完成后，点击 **启动** 运行 n8n 服务

![FlyEnv 中的 n8n 模块](https://oss.macphpstudy.com/image/n8n-1.webp)

![FlyEnv 中的 n8n 模块](https://oss.macphpstudy.com/image/n8n-2.webp)

5. 在浏览器中访问 n8n 网页界面：`http://localhost:5678`

![n8n 模块管理面板](https://oss.macphpstudy.com/image/n8n-3.webp)

> **提示：** FlyEnv 自动管理 Node.js 运行时。你无需担心版本冲突或全局 npm 包的问题。

---

## 第二步：安装 Ollama 并下载 AI 模型

现在让我们使用 Ollama 设置工作流的 AI 大脑。

1. 在 FlyEnv 中，进入 **AI 工具** 部分
2. 选择 **Ollama** 并点击 **安装**
3. 启动 Ollama 服务
4. 下载你喜欢的模型. 需要根据电脑配置来选择适合的模型. 具体可查看 [本地离线AI智能体](/zh/guide/build-local-offline-ai-agent)

![FlyEnv 中的 Ollama 模块](https://oss.macphpstudy.com/image/n8n-4.webp)

![FlyEnv 中的 Ollama 可用模型](https://oss.macphpstudy.com/image/n8n-5.webp)

可用模型包括：
- **Qwen 3.5** - 适用于一般任务和编程
- **Kimi k2.5** - 适用于一般任务和编程
- **Gemma 3** - Google 的高效开源模型
- **Llama 4** - Meta 的最新模型，推理能力强
- **DeepSeek Coder** - 专为编程任务优化

---

## 第三步：配置你的第一个 AI 工作流

现在让我们构建一个工作流：接收 HTTP 请求，通过本地 AI 处理，并返回智能响应。

### 3.1 创建 Webhook 触发器

1. 在 n8n 中，点击 **"添加工作流"**
2. 搜索 **"Webhook"** 并将其添加为触发节点
3. 配置 webhook：
   - **方法：** POST
   - **路径：** `ai-assistant`
   - **响应：** 选择 `When Last Node Finishes`（这将返回 AI 模型的输出）

![n8n Webhook 配置](https://oss.macphpstudy.com/image/n8n-6.webp)

![n8n Webhook 配置](https://oss.macphpstudy.com/image/n8n-7.webp)

> **重要：** 选择 "When Last Node Finishes" 确保 webhook 返回 AI 生成的响应，而不是立即确认。

### 3.2 添加 Ollama AI 节点

1. 在 webhook 后添加一个 **Ollama** 节点
2. 配置连接：
   - **基础 URL：** `http://localhost:11434`（Ollama 默认端口）
   - **模型：** 选择你下载的模型（例如 `qwen3.5`）
   
3. 设置消息模板：
   - 在 **Messages** 字段中，添加一条用户消息
   - 对于 **Content**，使用表达式捕获 webhook 输入：`\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Ollama 节点设置](https://oss.macphpstudy.com/image/n8n-8.webp)

![Ollama 节点设置](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 测试你的工作流

1. 保存工作流并将其切换为 **激活** 状态
2. 复制 webhook URL（n8n 提供测试和生产 URL）
3. 使用 curl 或任何 HTTP 客户端进行测试：
   ```bash
   curl -X POST "http://localhost:5678/webhook/ai-assistant" \
     -H "Content-Type: application/json" \
     -d '{"q": "解释本地 AI 工作流的优势"}'
   ```

4. 你应该会收到由本地 AI 模型生成的响应！

---

## 第四步：通过反向代理启用 HTTPS

对于生产使用或外部访问，你需要 HTTPS。FlyEnv 内置的站点管理器让这变得非常简单。

### 4.1 添加本地域名

1. 打开 FlyEnv 的 **站点** 部分
2. 点击 **"添加站点"**
3. 配置：
   - **域名：** `n8n.test`（或任何 `.test` 域名）
   - **类型：** 反向代理
   - **目标：** `http://127.0.0.1:5678`

![FlyEnv 中的站点配置](https://oss.macphpstudy.com/image/n8n-10.webp)

### 4.2 启用自动 SSL

FlyEnv 自动生成和管理本地 SSL 证书：

1. 在站点设置中，启用 **"自动 SSL"**
2. FlyEnv 使用证书配置 Nginx/Caddy/Apache
3. 通过 `https://n8n.test` 访问你的 n8n 实例

![FlyEnv 中的站点配置](https://oss.macphpstudy.com/image/n8n-11.webp)

> **无需手动管理证书！** FlyEnv 自动处理 mkcert 集成。

---

## 第五步：使用 Cloudflare Tunnel 暴露到互联网

想从任何地方访问你的 AI 工作流？FlyEnv 集成的 Cloudflare Tunnel 模块提供安全隧道，无需开放防火墙端口。与 ngrok 不同，你可以获得**固定 URL、自定义域名和无限带宽——完全免费**。

| 功能 | ngrok 免费版 | **Cloudflare Tunnel** |
|------|-------------|----------------------|
| 自定义域名 | ❌ 随机 URL | ✅ 免费 |
| 固定 URL | ❌ 每次重启变化 | ✅ 免费 |
| 带宽限制 | 1GB/月 | 无限免费 |
| FlyEnv 设置 | 手动 CLI | **一键 UI** |

### 5.1 获取 Cloudflare API Token

1. 登录 [Cloudflare 控制台](https://dash.cloudflare.com)
2. 点击右上角 **我的个人资料** → **API 令牌**
3. 点击 **创建令牌**
4. 使用 **"Cloudflare Tunnel"** 模板，或创建自定义令牌并设置以下权限：
   - **Account:Cloudflare Tunnel:Edit** — 管理隧道
   - **Zone:Zone:Read** — 列出你的域名
   - **Zone:DNS:Edit** — 创建 DNS 记录
5. 选择你要使用的 **区域资源**（域名）
6. 复制生成的令牌

> **提示：** 如果你没有域名，可以注册一个便宜的域名，或在某些套餐中使用 Cloudflare 的免费子域名。

### 5.2 在 FlyEnv 中配置

1. 打开 FlyEnv → **Cloudflare Tunnel** 模块，点击 **加号按钮**
2. 粘贴你的 **API Token**
3. FlyEnv 自动获取你可用的域名

![FlyEnv Cloudflare Tunnel 模块](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### 5.3 为 n8n 创建隧道

区域加载完成后：

1. **选择区域**：选择你要使用的域名（例如 `yourdomain.com`）
2. **设置子域名**：输入你想要的子域名（例如 `ai` → 创建 `ai.yourdomain.com`）
3. **设置本地 URL**：输入 `http://localhost:5678`（n8n 的默认端口）
4. 点击 **"确定"**

![FlyEnv Cloudflare Tunnel 模块](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

就这些！FlyEnv 在内部处理所有事情：
- ✅ 创建 Cloudflare Tunnel
- ✅ 配置 DNS 记录
- ✅ 设置路由规则
- ✅ 生成 SSL 证书

### 5.4 启动隧道

点击 Cloudflare Tunnel 模块中的 **"启动"** 按钮。

你的 n8n 工作流现在可以通过 `https://ai.yourdomain.com` 从世界任何地方通过 HTTPS 访问——无需服务器部署，无需端口转发，无需复杂的网络配置。

![FlyEnv Cloudflare Tunnel 模块](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### 管理多个隧道

你可以为不同的工作流或团队成员创建额外的隧道：

| 子域名 | 本地 URL | 用途 |
|--------|---------|------|
| `ai` | `http://localhost:5678` | 主 n8n AI 工作流 |
| `ai-test` | `http://localhost:5678` | 测试环境 |
| `webhook` | `http://localhost:5678/webhook` | 公共 webhook 端点 |

所有隧道都在一个界面中管理——一键启动、停止或删除隧道。

---

## 高级工作流创意

一旦你完成了基本设置，可以探索这些强大的自动化模式：

### 客户支持分析器
将 CRM 或聊天平台连接到 n8n，传递对话历史给本地 AI，接收情感分析以及建议的回复——所有客户数据都不会发送到外部 API。

### 代码审查机器人
从 Git webhook 触发工作流，使用 DeepSeek Coder 分析拉取请求，并发布带有改进建议的自动评论。

### 文档处理管道
通过邮件或上传接收文档，使用本地 OCR 提取文本，通过 Ollama 处理进行摘要或分类，并将结果存储到你的数据库。

### 智能家居集成
与 Home Assistant webhook 结合，创建完全本地处理的 AI 驱动自动化规则，使用自然语言命令。

---

## 常见问题解答 (FAQ)

### 这个设置比 Docker 使用更少的内存吗？
**是的。** FlyEnv 将 n8n 和 Ollama 作为原生二进制文件直接在你的系统上运行。与 Docker Desktop + 容器相比，你通常会看到低 60-80% 的内存使用。在 macOS 上，仅 Docker Desktop 就消耗 2-4GB 的虚拟机内存——FlyEnv 零开销。

### 这可以完全离线使用吗？
**当然可以。** 一旦安装了 n8n 和 Ollama，整个工作流可以在没有任何互联网连接的情况下本地运行。这非常适合隔离环境或对隐私敏感的应用。

### n8n 配合 Ollama 比付费自动化工具更好吗？
对于开发者和注重隐私的用户：**是的。** 你获得无限工作流、无使用限制、零订阅费用和完全的数据隐私。代价是自我管理，而 FlyEnv 大大简化了这一点。

### Cloudflare Tunnel 与 ngrok 相比如何？
Cloudflare Tunnel（通过 FlyEnv 集成）提供固定 URL、自定义域名、内置 SSL，并且个人使用完全免费——不像 ngrok 的随机 URL 和连接限制。而且，除了 FlyEnv 之外不需要安装额外的软件。

### 我可以在一个工作流中连接多个 AI 模型吗？
可以！n8n 支持分支和条件逻辑。你可以根据任务类型将请求路由到不同的 Ollama 模型——使用 CodeLlama 处理编程问题，使用 Qwen 处理一般知识等。

---

## 下一步

你的自托管 AI 自动化平台现已准备就绪！以下是推荐的后续步骤：

1. **探索更多 AI 工具** —— 了解如何构建具有完整 RAG 功能的[本地离线 AI 智能体](/zh/guide/build-local-offline-ai-agent)
2. **保护你的设置** —— 阅读 [Cloudflare Tunnel 指南](/zh/guide/cloudflare-tunnel-local-development) 获取生产部署技巧
3. **下载 FlyEnv** —— 如果你还没有安装，[获取最新版本](/zh/download) 适配你的操作系统

有问题或想分享你创建的工作流？加入我们的 [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions) 社区！
