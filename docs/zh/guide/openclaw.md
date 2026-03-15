---
title: OpenClaw + Ollama 配置指南 - 零 API 费用搭建自托管 AI 代理
head:
  - - meta
    - name: description
      content: 使用 OpenClaw 和 Ollama 创建强大的自托管 AI 代理，通过 WhatsApp、Telegram、Discord 消息控制。零 API 费用，完全隐私，FlyEnv 让你的硬件上完全本地运行。
---

# OpenClaw + Ollama 配置指南：搭建你的自托管 AI 代理（零 API 费用）

想象一下，拥有一个不仅能聊天——还能**实际为你做事**的 AI 助手。它可以读取你的文件、执行命令、代你发送消息，并与 QQ,微信,飞书 等你喜欢的消息应用集成。所有这些都**在你自己的机器上本地运行**，**零 API 费用**，**数据完全私密**。

这正是 **OpenClaw** 所提供的。与 ChatGPT 或其他仅响应提示词的云端 AI 工具不同，OpenClaw 是一个功能齐全的 **AI 代理框架**，可以在你的计算机上执行真实操作。配合 **Ollama** 进行本地 LLM 执行，你可以获得一个完全离线的强大自动化系统。

在本指南中，你将学习如何使用 **FlyEnv** 构建这个系统——这是无需复杂 Docker 设置或手动配置即可运行 OpenClaw 和 Ollama 的最快方式。

## 你将搭建什么

完成本指南后，你将拥有：

- 在你机器上运行的自托管 AI 代理网关
- 与消息应用（QQ,微信,飞书 等）的集成
- 通过 Ollama 进行本地 LLM 处理——无需 API 密钥，无使用限制
- 能够读写文件、执行命令和自动化任务的代理
- 完整的数据隐私——你的消息和文件永远不会离开你的硬件

![OpenClaw 仪表板](https://oss.macphpstudy.com/image/openclaw-1.webp)

## OpenClaw 是什么？

OpenClaw 是一个**开源、自托管的网关**，将消息应用连接到 AI 编码代理。可以把它看作是你交流的地方（QQ,微信,飞书 等）与能够实际执行任务的 AI 之间的桥梁。

### 核心能力

| 功能 | 描述 |
|------|------|
| **多频道** | 同时连接 WhatsApp、Telegram、Discord、iMessage、Slack |
| **工具使用** | 读/写文件、执行 shell 命令、发起 HTTP 请求 |
| **会话管理** | 跨会话保持上下文的一致对话 |
| **记忆** | 代理记住过去的交互和偏好 |
| **多代理路由** | 将不同任务路由到专门的代理 |

### OpenClaw vs ChatGPT

| 能力 | ChatGPT | OpenClaw + Ollama |
|------|---------|-------------------|
| **操作执行** | 仅文本 | 文件、命令、消息 |
| **消息集成** | 无 | WhatsApp、Telegram、Discord 等 |
| **数据隐私** | 云端处理 | 100% 本地 |
| **API 费用** | 按 token 收费 | 零（设置后） |
| **离线使用** | 不支持 | 支持 |

## 前置要求

开始之前，请确保你已具备：

- **FlyEnv** 已安装（[点击下载](/zh/download)）
- **8GB+ 内存**（运行更大模型建议 16GB）
- 约 10GB 可用磁盘空间用于模型存储
- 一个消息应用账号（WhatsApp、Telegram 或 Discord）

## 第一步：安装 Node.js 24

OpenClaw 需要 **Node.js 24**（或兼容的 Node.js 22 LTS `22.16+`）。

1. 打开 **FlyEnv**，导航至 **Node.js** 部分
2. 从版本列表中选择 **Node.js 24**（推荐）
3. 点击**安装**，等待安装完成
4. 将 Node.js 24 设置为活动版本

> **FlyEnv 优势：** 与手动安装 Node.js 不同，FlyEnv 自动处理 PATH 配置和版本切换。不再出现"命令未找到"错误。

![Node.js 安装](https://oss.macphpstudy.com/image/openclaw-2.webp)

## 第二步：安装 Ollama

Ollama 为你的 OpenClaw 代理提供 AI 大脑。

1. 在 FlyEnv 中，打开**工具库**（Library）部分
2. 在可用应用中找到 **Ollama**
3. 点击**安装**——FlyEnv 自动处理所有依赖
4. 启动 Ollama 服务

![Ollama 安装](https://oss.macphpstudy.com/image/openclaw-3.webp)

## 第三步：下载 AI 模型

根据你的硬件能力选择模型：

### 8-16GB 内存系统

| 模型 | 大小 | 最适合 |
|------|------|--------|
| `qwen2.5-coder:7b` | ~4GB | 代码生成、技术任务 |
| `llama3.2` | ~4GB | 通用、推理 |
| `deepseek-r1:7b` | ~4GB | 逐步推理 |

### 16GB+ 内存或 GPU 系统

| 模型 | 大小 | 最适合 |
|------|------|--------|
| `qwen2.5-coder:32b` | ~20GB | 复杂编码、大上下文 |
| `gpt-oss:20b` | ~12GB | 工具使用、代理任务 |
| `glm-4.7-flash` | ~25GB | 高级推理 |

### 通过 FlyEnv 下载

1. 在 FlyEnv 中导航至 **Ollama 模型**
2. 从列表中选择你偏好的模型
3. 点击**下载**并等待完成

> **推荐：** 从 `qwen2.5-coder:7b` 开始测试。它速度快、能力强，适用于大多数系统。
> 
![模型下载](https://oss.macphpstudy.com/image/openclaw-4.webp)

## 第四步：安装 OpenClaw

现在安装连接一切的网关：

1. 在 FlyEnv 的**工具库**中，找到 **OpenClaw**
2. 点击**安装**并按照提示操作
3. 安装完成后，点击**启动**运行网关

OpenClaw 将启动本地网关（默认：`http://127.0.0.1:18789/`）并在浏览器中打开控制界面。

![OpenClaw 网关](https://oss.macphpstudy.com/image/openclaw-5.webp)

## 第五步：配置 OpenClaw 使用 Ollama

### 初始设置向导

当你第一次打开 OpenClaw 时，会看到一个安全警告——**请仔细阅读**。与简单的聊天机器人不同，OpenClaw 可以：

- 在你的计算机上读写文件
- 执行系统命令
- 代你发送消息
- 发起网络请求

这种能力需要负责任的配置。

### 配置步骤

1. **选择快速开始**（推荐给初学者）
2. **选择 AI 提供商：**选择 **Ollama** 或 **本地 / 自托管**
3. **输入 API 端点：**`http://localhost:11434`
4. **选择你的模型：**选择你下载的模型（如 `qwen2.5-coder:7b`）
5. **完成设置**

### 验证配置

你的配置文件存储在 `~/.openclaw/openclaw.json`。基本设置如下：

```json
{
   "models": {
      "providers": {
         "ollama": {
            "baseUrl": "http://127.0.0.1:11434",
            "api": "ollama",
            "models": [
               {
                  "id": "qwen3.5:0.8b",
                  "name": "qwen3.5:0.8b",
                  "api": "ollama",
                  "reasoning": false,
                  "input": [
                     "text"
                  ],
                  "cost": {
                     "input": 0,
                     "output": 0,
                     "cacheRead": 0,
                     "cacheWrite": 0
                  },
                  "contextWindow": 32000,
                  "maxTokens": 32000
               }
            ]
         }
      }
   }
}
```

![配置](https://oss.macphpstudy.com/image/openclaw-6.webp)

## 第六步：连接消息应用

现在连接你喜欢的消息平台，远程控制代理：

### 选项 A：WhatsApp

```bash
openclaw configure --section channels
```

选择 WhatsApp 并用手机扫描二维码。

### 选项 B：Telegram

1. 通过 [@BotFather](https://t.me/botfather) 创建机器人
2. 将机器人令牌添加到 OpenClaw 配置
3. 开始与你的机器人聊天

### 选项 C：Discord

1. 创建 Discord 应用
2. 将机器人令牌添加到 OpenClaw
3. 邀请机器人到你的服务器

> **安全提示：** 从 **allowFrom** 白名单开始，限制谁可以与你的代理交互：

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15555550123"],
      "groups": {
        "*": { "requireMention": true }
      }
    }
  },
  "messages": {
    "groupChat": {
      "mentionPatterns": ["@openclaw"]
    }
  }
}
```

## 第七步：测试你的 AI 代理

通过连接的消息应用发送你的第一条命令：

### 示例命令

| 命令 | 功能 |
|------|------|
| `读取文件 ~/Documents/notes.txt` | 读取并总结文件 |
| `创建一个计算斐波那契数的 Python 脚本` | 将代码写入文件 |
| `列出当前目录的文件` | 执行 shell 命令 |
| `发送邮件给 team@example.com 关于项目更新` | 起草并发送邮件 |

### 从终端使用

你也可以通过内置的 TUI（终端用户界面）进行交互：

```bash
openclaw
```

或使用网页仪表板 `http://127.0.0.1:18789/`

## 高级：混合云 + 本地设置

对于复杂任务，结合本地和云端模型：

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/qwen2.5-coder:32b",
        "thinking": "anthropic/claude-sonnet-4-20250514"
      }
    }
  }
}
```

- **本地模型：**处理文件读取、简单编辑、常规任务（节省 API 成本）
- **云端模型：**处理调试、架构、复杂推理（少量使用）

这种混合方法可以将 API 费用从每天 $20-50 降低到 $2-5。

## 故障排除

| 问题 | 解决方案 |
|------|----------|
| **模型加载慢或崩溃** | 内存不足。使用较小的量化版本：`qwen2.5-coder:7b-q4_K_M` |
| **工具调用失败** | 在配置中设置 `"reasoning": false`。某些本地模型难以处理工具格式 |
| **上下文窗口错误** | 本地模型的上下文较小。在配置中设置准确的 `contextWindow` |
| **无法连接到 Ollama** | 验证 Ollama 是否运行：`curl http://localhost:11434/api/tags` |
| **未收到消息** | 检查频道配置和权限 |

## 安全最佳实践

⚠️ **OpenClaw 有意设计得功能强大且权限广泛。**

1. **尽可能在隔离环境中运行**
2. **使用 allowFrom 白名单**限制消息来源
3. **启用第三方技能前进行审查**
4. **在群聊中要求提及**以防止意外触发
5. **定期审核文件系统权限**

## 视频教程

更喜欢观看？看看 手把手教你 搭建 OpenClaw 本地 AI 智能体：FlyEnv 5分钟 一键部署 OpenClaw + Ollama 实际演示：

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?isOutside=true&aid=116233441774626&bvid=BV1ciwMzUEGH&cid=36721068455&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>

## 常见问题解答 (FAQ)

### Q: 设置完成后 OpenClaw 可以免费使用吗？

**A:** 是的。OpenClaw 是开源的（MIT 许可证），Ollama 在本地运行模型。一旦配置完成，**没有持续的 API 费用**或使用限制。你唯一的成本是运行计算机的电费。

### Q: 我的数据会离开我的机器吗？

**A:** 不会。使用 OpenClaw + Ollama 时，所有处理都在**本地**进行。你的消息、文件和数据永远不会离开你的硬件，除非你明确启用云集成。

### Q: 我需要什么硬件？

**A:** 运行较小模型（7B 参数）最低需要 8GB 内存。舒适使用的配置：
- **基础：**8GB 内存 + CPU（7B 模型）
- **推荐：**16GB 内存 + GPU（13B 模型）
- **高级用户：**32GB+ 内存 + 高端 GPU（32B+ 模型）

### Q: 需要时可以使用云端模型吗？

**A:** 可以。OpenClaw 支持混合设置。你可以将本地模型配置为默认，并在需要更多能力的特定任务上切换到云提供商（Anthropic、OpenAI 等）。

### Q: 这与带插件的 ChatGPT 相比如何？

**A:** ChatGPT 插件在 OpenAI 的云环境中运行。OpenClaw 在你的**硬件上运行**，具有直接的文件系统访问权限。对于本地操作更快、支持离线工作并保持完全隐私。但是，它需要更多的技术设置。

### Q: 这适合商业/企业使用吗？

**A:** OpenClaw 目前是**实验性软件**。虽然功能强大，但缺乏企业级安全保障。它最适合个人使用、开发环境或你理解并接受安全影响的受控场景。

## 下一步

现在你已经运行了自托管 AI 代理：

- **[使用 Mailpit 设置本地邮件测试](/zh/guide/local-email-testing-mailpit)** - 测试邮件自动化工作流
- **[使用 Cloudflare Tunnel 内网穿透](/zh/guide/cloudflare-tunnel-local-development)** - 从任何地方远程访问你的代理
- **[搭建更多 AI 代理](/zh/guide/build-local-offline-ai-agent)** - 发现 FlyEnv 生态系统中的其他 AI 工具

---

**准备好搭建你的个人 AI 代理了吗？** 立即[下载 FlyEnv](/zh/download)，加入自托管 AI 革命——零 API 成本，完全隐私，无限可能。
