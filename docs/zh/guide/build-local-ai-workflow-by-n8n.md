---
title: 使用 n8n 和 Ollama 构建本地自托管 AI 工作流（无需 Docker）
head:
  - - meta
    - name: description
      content: 学习如何使用 n8n 和 Ollama 在本地构建隐私优先的 AI 自动化工作流。FlyEnv 让部署变得简单，支持原生二进制运行、自动 SSL 和 Cloudflare Tunnel 安全远程访问。
---

# 使用 n8n 和 Ollama 构建本地自托管 AI 工作流（无需 Docker）

在 FlyEnv 中运行 n8n 和 Ollama，再通过本地 POST 请求将提示词交给已下载的模型并获取回复。安装 n8n、Ollama 和下载模型需要联网。设置完成后，回环地址上的 Webhook 和模型推理可以离线运行。

---

## 为什么自托管 AI 工作流很重要

FlyEnv 管理两个服务进程。工作流在 n8n 中搭建，模型在 Ollama 节点里选择。本示例使用 n8n 默认的 SQLite 存储和本机 Ollama API。调用第三方 API 的节点仍需联网。

---

## 准备工作

在开始之前，请确保你已具备：

1. **已安装 FlyEnv** 在 macOS、Windows 或 Linux 上（[点击下载](/zh/download)）
2. 对工作流自动化概念有基本了解
3. 至少 8GB 内存（推荐使用 16GB 运行更大的 AI 模型）

---

## 第一步：安装并启动 n8n

先安装你的 n8n 版本支持的 [Node.js](/zh/features/nodejs) 版本，并在终端确认 `node` 和 `npm` 可用。

1. 在 FlyEnv 中打开 [n8n 模块](/zh/features/n8n)，进入 **版本管理**。
2. 选择并安装一个版本。FlyEnv 在内置终端中运行 npm，可直接查看安装输出。
3. 在模块中启动已安装的版本。

![FlyEnv 中的 n8n 模块](https://oss.macphpstudy.com/image/n8n-1.webp)

![FlyEnv 中的 n8n 模块](https://oss.macphpstudy.com/image/n8n-2.webp)

4. 在浏览器中访问 n8n 网页界面：`http://localhost:5678`

![n8n 模块管理面板](https://oss.macphpstudy.com/image/n8n-3.webp)

---

## 第二步：安装 Ollama 并下载 AI 模型

现在让我们使用 Ollama 设置工作流的 AI 大脑。

1. 在 FlyEnv 中，进入 **AI 工具** 部分
2. 选择 **Ollama** 并点击 **安装**
3. 启动 Ollama 服务

![FlyEnv 中的 Ollama 模块](https://oss.macphpstudy.com/image/n8n-4.webp)

![FlyEnv 中的 Ollama 可用模型](https://oss.macphpstudy.com/image/n8n-5.webp)

下载适合本机配置的模型，然后在 `http://127.0.0.1:11434/api/tags` 核对模型标签。工作流中选择这个已下载的本地模型。[Ollama 模型设置](/zh/guide/build-local-offline-ai-agent)

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
   - **基础 URL：** `http://127.0.0.1:11434`（Ollama 默认端口）
   - **模型：** 选择你下载的模型（例如 `qwen3.5`）
   
3. 设置消息模板：
   - 在 **Messages** 字段中，添加一条用户消息
   - 对于 **Content**，使用表达式捕获 webhook 输入：`\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Ollama 节点设置](https://oss.macphpstudy.com/image/n8n-8.webp)

![Ollama 节点设置](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 测试你的工作流

在编辑器里测试时，选择 **Listen for Test Event**，复制 **Test URL**。若要使用下例中的固定入口，请发布工作流，旧版可将工作流切换为 **激活**。复制 **Production URL**。使用默认端口和示例路径时，地址为 `http://127.0.0.1:5678/webhook/ai-assistant`。

```bash
curl -X POST "http://127.0.0.1:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "解释本地 AI 工作流的优势"}'
```

检查 HTTP 响应中是否有模型输出，并在 n8n 的 **Executions** 中查看运行记录。如果收到 `404`，先核对使用的 URL，并检查流程是否已发布或测试监听是否已启动。如果 Ollama 节点报错，请检查 `/api/tags` 中是否有选中的模型。[n8n Webhook URL 文档](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls)

---

## 第四步：通过反向代理启用 HTTPS

上面的示例可直接通过回环地址运行。如需本地 HTTPS 地址，可以按下列可选步骤添加代理。如果代理后的 n8n 显示内部 URL，请在 n8n 环境变量编辑器中设置代理侧的 Webhook 地址并重启服务。[n8n 反向代理设置](https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/)

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

离线使用时请跳过此步骤。Cloudflare Tunnel 需要互联网连接。分享入口之前，请为 Webhook 节点设置身份验证，对 n8n 编辑器设置访问控制，并让 Ollama API 继续监听回环地址。

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

## 视频教程

观看 [n8n 和 Ollama 工作流演示](/zh/demos?video=n8n-ollama-workflow)。

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?bvid=BV1qGXFBfE7U&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

## 常见问题解答 (FAQ)

### 这个设置比 Docker 使用更少的内存吗？
**通常可以，但取决于工作负载。** FlyEnv 直接在系统上运行 n8n 和 Ollama，避免容器虚拟机的基础开销；模型大小、活动工作流、数据库和容器配置都会影响实际差异。

### 这可以完全离线使用吗？
安装服务并下载模型后，本地 Webhook 和 Ollama 模型可以离线运行。Cloudflare Tunnel 及调用远程服务的节点仍需联网。

### 我可以在一个工作流中连接多个 AI 模型吗？
可以！n8n 支持分支和条件逻辑。你可以根据任务类型将请求路由到不同的 Ollama 模型——使用 CodeLlama 处理编程问题，使用 Qwen 处理一般知识等。

---

## 下一步

你的自托管 AI 自动化平台现已准备就绪！以下是推荐的后续步骤：

- [用 Ollama 配置离线编程助手](/zh/guide/build-local-offline-ai-agent)
2. **保护你的设置** —— 阅读 [Cloudflare Tunnel 指南](/zh/guide/cloudflare-tunnel-local-development) 获取生产部署技巧
3. **下载 FlyEnv** —— 如果你还没有安装，[获取最新版本](/zh/download) 适配你的操作系统

有问题或想分享你创建的工作流？加入我们的 [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions) 社区！
