---
title: '将本地服务暴露到互联网：Cloudflare Tunnel 替代 ngrok'
head:
  - - meta
    - name: description
      content: 'ngrok 的免费替代方案：学习如何在 FlyEnv 中使用 Cloudflare Tunnel 将本地服务暴露到互联网。获取永久 URL、自定义域名和增强的安全性，全部免费，一键设置。'
---

# 将本地服务暴露到互联网：Cloudflare Tunnel 替代 ngrok

需要与客户端分享您的本地开发站点？测试需要公共 URL 的 Webhooks？您可能用过 ngrok——并且为自定义域名等基础功能支付了月费。

**有一个免费且更好的选择。** Cloudflare Tunnel（原 Argo Tunnel）提供：
- ✅ 免费自定义域名
- ✅ 永久 URL（非随机字符串）
- ✅ 无带宽限制
- ✅ **FlyEnv 一键设置——无需命令行**

## 开发者为何从 ngrok 切换

| 功能 | ngrok 免费版 | ngrok 专业版 ($8/月) | **Cloudflare Tunnel** |
|---------|------------|-------------------|----------------------|
| 自定义域名 | ❌ | ✅ | ✅ 免费 |
| 永久 URL | ❌ | ✅ | ✅ 免费 |
| HTTP/2 支持 | ✅ | ✅ | ✅ 免费 |
| 带宽限制 | 1GB/月 | 无限 | 无限 免费 |
| 身份验证 | ❌ | ✅ | ✅ 免费 |
| **设置复杂度** | 简单 | 简单 | **FlyEnv 一键设置** |

**年度节省：** 每位开发者 $96+

## FlyEnv 一键设置（推荐）

FlyEnv 将 Cloudflare Tunnel 直接集成到界面中。无需终端命令，无需配置文件——只需点击，即可分享。

### 步骤 1：获取您的 Cloudflare API Token

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 前往 **我的资料**（右上角）→ **API Tokens**
3. 点击 **创建令牌**
4. 使用 **"Cloudflare Tunnel"** 模板，或使用以下权限创建自定义令牌：
   - **Account:Cloudflare Tunnel:Edit** — 用于管理 tunnels
   - **Zone:Zone:Read** — 用于列出您的域名
   - **Zone:DNS:Edit** — 用于创建 DNS 记录
5. 选择您要使用的 **Zone Resources**（域名）
6. 复制生成的令牌

### 步骤 2：在 FlyEnv 中配置

1. 打开 FlyEnv → **Cloudflare Tunnel** 模块，点击 **加号按钮**
2. 粘贴您的 **API Token**
3. FlyEnv 自动获取您的可用域名

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### 步骤 3：创建您的 Tunnel

加载 zones 后：

1. **选择 Zone**：选择您要使用的域名（例如 `yourdomain.com`）
2. **设置子域名**：输入您想要的子域名（例如 `dev` → 创建 `dev.yourdomain.com`）
3. **设置本地 URL**：选择您的本地开发 URL（例如 `http://localhost:3000` 或 `https://myproject.test`）
4. 点击 **"确定"**

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

完成！FlyEnv 在内部处理一切：
- ✅ 创建 Cloudflare Tunnel
- ✅ 配置 DNS 记录
- ✅ 设置路由规则
- ✅ 生成 SSL 证书

### 步骤 4：启动 Tunnel

在 Cloudflare Tunnel 模块中点击 **"启动"** 按钮。

您的本地站点现已上线于 `https://dev.yourdomain.com`

![FlyEnv Cloudflare Tunnel Module](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### 管理多个 Tunnels

创建您需要的任意数量的 tunnels：

| 子域名 | 本地 URL | 用途 |
|-----------|-----------|---------|
| `dev` | `https://myapp.test` | 主开发站点 |
| `api` | `http://localhost:3000` | API 服务器 |
| `admin` | `http://localhost:8080` | 管理后台 |
| `client-a` | `https://client-a.test` | 客户端预览 |

全部通过一个界面管理——一键启动、停止或删除 tunnels。

## 手动配置（命令行）

对于偏好命令行控制的高级用户，以下是传统设置方法：

### 先决条件

1. 一个 Cloudflare 账户（免费版完全可用）
2. 一个已添加到 Cloudflare 的域名
3. 已安装 Cloudflared（可在 FlyEnv 的 Cloudflared 模块中找到）

### 步骤 1：使用 Cloudflare 进行身份验证

```bash
cloudflared tunnel login
```

这将打开浏览器窗口以授权 Cloudflare 访问。

### 步骤 2：创建您的 Tunnel

```bash
# 创建一个命名的 tunnel
cloudflared tunnel create dev-localhost

# 输出将显示您的 Tunnel ID
# 保存它——配置时需要用到
```

### 步骤 3：配置 DNS 路由

```bash
# 将您的子域名路由到 tunnel
cloudflared tunnel route dns dev-localhost dev.yourdomain.com
```

### 步骤 4：创建配置文件

创建 `config.yml`：

```yaml
tunnel: <your-tunnel-id>
credentials-file: /Users/username/.cloudflared/<tunnel-id>.json

ingress:
  - hostname: dev.yourdomain.com
    service: http://localhost:80
  - hostname: api.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
```

### 步骤 5：启动 Tunnel

```bash
cloudflared tunnel run dev-localhost
```

**对比：** FlyEnv 的 UI 方法省去了所有这些步骤——您只需输入 API token、选择 zone、设置子域名，然后点击保存。

## 常见使用场景

### 1. 客户端预览

**以前：** "让我部署到 staging...（30 分钟后）"

**现在：** 即时分享 `https://feature-branch.yourdomain.com`——只需创建一个 tunnel 并启动它。

### 2. Webhook 开发

本地测试 Stripe、GitHub 或 Slack webhooks：

**FlyEnv 设置：**
1. 创建 tunnel：`webhooks.yourdomain.com` → `http://localhost:3000/webhooks`
2. 启动 tunnel
3. 在 Stripe/GitHub 后台配置 webhook 端点

### 3. 移动设备测试

在实际设备上测试响应式设计：
- iPhone 访问 `https://mobile.yourdomain.com`
- Android 访问相同 URL
- 两者都连接到您的本地开发服务器

### 4. 带 HTTPS 的 API 开发

某些 API 需要 HTTPS 回调。Cloudflare Tunnel 提供：
- 自动 SSL 证书
- 在 Cloudflare 边缘终止 HTTPS
- 到您本地服务的安全连接

### 5. 团队协作

与团队成员分享进行中的工作：
- 每位开发者创建自己的 tunnel
- 或使用指向团队服务器的共享 tunnel

## 故障排除

### FlyEnv 中显示 "Cannot get zones"

**原因**：API Token 无效或权限不足

**解决方案**：
1. 验证令牌是否具有以下权限：Zone:Read、DNS:Edit、Cloudflare Tunnel:Edit
2. 确保令牌包含您要使用的 zone
3. 尝试使用 "Cloudflare Tunnel" 模板创建新令牌

### "Tunnel creation failed"

**原因**：网络问题或 tunnel 名称重复

**解决方案**：
1. 检查网络连接
2. 尝试不同的子域名
3. 检查 Cloudflare 后台中是否已存在该 tunnel

### "Tunnel started but site not accessible"

**原因**：本地 URL 错误或本地服务未运行

**解决方案**：
1. 验证 tunnel 设置中的本地 URL（例如 `http://localhost:3000`）
2. 确保您的本地开发服务器确实在运行
3. 先在浏览器中直接尝试访问本地 URL

### DNS 未生效

**原因**：Cloudflare DNS 缓存

**解决方案**：
1. 创建 tunnel 后等待 1-5 分钟
2. 在 Cloudflare 后台检查 DNS 记录
3. 确保橙色云朵已启用（已代理）

## 高级配置

### 身份验证（Zero Trust）

为您的 tunnel 添加 Google/GitHub 登录：

1. 在 [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com)
2. 前往 **Access** → **Applications**
3. 为您的子域名创建新应用程序
4. 配置身份验证提供商
5. 应用到您的 tunnel 主机名

现在 `dev.yourdomain.com` 在显示您的本地站点之前需要登录。

### 负载均衡（多个 Tunnels）

为了在演示期间实现高可用性：

```yaml
# config.yml - 手动配置示例
# 在机器 A 上
tunnel: tunnel-id-1
# 在机器 B 上
tunnel: tunnel-id-2

# 两者路由到相同的主机名
# Cloudflare 在它们之间进行负载均衡
```

**注意：** 对于大多数开发用例，单个 tunnel 就足够了。

## 对比：FlyEnv vs 手动设置

| 方面 | 手动（命令行） | **FlyEnv UI** |
|--------|----------------------|---------------|
| **设置时间** | 15-30 分钟 | 2 分钟 |
| **需要记忆的命令** | 10+ | 0 |
| **配置文件** | 多个 YAML 文件 | 无 |
| **Tunnel 管理** | 终端命令 | 点击操作 |
| **多个 tunnels** | 复杂 | 简单 |
| **启动/停止** | `cloudflared tunnel run` | 一个按钮 |

## 常见问题（FAQ）

**Q: Cloudflare Tunnel 真的免费吗？**

A: 是的。所有讨论的功能——自定义域名、无限带宽、身份验证——都包含在 Cloudflare 的免费版中。FlyEnv 的集成也是完全免费的。

**Q: 我需要付费的 Cloudflare 套餐吗？**

A: 不需要。免费的 Cloudflare 套餐与 tunnels 完美配合。

**Q: 我可以使用任何域名吗？**

A: 您需要控制该域名的 DNS（将其添加到 Cloudflare）。免费域名可以，或使用您拥有的域名的子域名。

**Q: 这有多安全？**

A: 非常安全。tunnel 是从您的机器单向出去的。Cloudflare 的基础设施处理 DDoS 防护、WAF 和 SSL。您的本地机器永远不会直接暴露。

**Q: 这会降低我的本地开发速度吗？**

A: 影响很小。Tunnel 增加约 50-100ms 延迟——对于预览和 webhooks 来说可以接受。对于本地开发，您仍然直接使用 `localhost`。

**Q: WebSockets 呢？**

A: Cloudflare Tunnel 完全支持。实时应用运行良好。

**Q: 我可以在多台机器上使用同一个 tunnel 吗？**

A: 不行——每个 tunnel 绑定到一台机器。为不同的机器或开发者创建单独的 tunnels。

**Q: 当我停止 tunnel 时会发生什么？**

A: 公共 URL 变得无法访问，但 DNS 记录保留。当您重新启动 tunnel（即使几天后），相同的 URL 仍然有效。

**Q: 我可以与团队成员共享 tunnels 吗？**

A: 团队成员可以创建指向他们自己本地机器的 tunnels。对于共享环境，考虑部署到 staging 服务器。

**Q: 我需要保持 FlyEnv 运行吗？**

A: 是的。Tunnel 通过 FlyEnv 的 Cloudflare Tunnel 模块运行。关闭 FlyEnv 会停止 tunnel。

## 准备放弃 ngrok？

停止为基本 tunneling 功能付费。Cloudflare Tunnel 与 FlyEnv 集成，为您提供企业级网络，一键即可使用。

[下载 FlyEnv](/download) 开始使用内置的 Cloudflare Tunnel 支持。

想要探索更多网络功能？查看我们的指南 [反向代理设置](/guide/reverse-proxy-nestjs-multi-servers) 或 [自定义域名和自动 SSL](/guide/host)。
