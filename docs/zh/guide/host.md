---
title: '本地开发自定义域名与自动 SSL：完整指南'
head:
  - - meta
    - name: description
      content: '使用自定义域名和自动 SSL 证书设置专业本地开发环境。了解如何在 FlyEnv 中使用 .test 域名和 HTTPS，无需浏览器警告。'
---

# 本地开发自定义域名与自动 SSL：完整指南

当与客户分享时，通过 `http://localhost:8080/myproject` 访问你的项目显得很业余。专业开发者使用干净的域名，如 `https://clientproject.test`——并且浏览器信任的 SSL 证书。

本指南向你展示如何设置带有自动 HTTPS 的自定义本地域名，使你的开发环境与生产环境无异。

## 为什么自定义域名很重要

### localhost:port URL 的问题

```
❌ http://localhost:3000
❌ http://127.0.0.1:8080/project
❌ http://192.168.1.50:9000
```

**问题：**
- 难以记忆
- URL 中包含端口号
- 项目之间的 Cookie 冲突
- 测试 API 时的 CORS 问题
- 无法测试安全功能所需的 HTTPS

### 专业的做法

```
✅ https://myapp.test
✅ https://api.myapp.test
✅ https://admin.myapp.test
```

**好处：**
- 干净、易记的 URL
- 每个项目独立的 Cookie 和存储
- 正确的 HTTPS 测试
- 基于子域名的路由
- 与生产环境一致的配置

## 本地域名如何工作

FlyEnv 使用 **Hosts 文件**（系统级 DNS 覆盖）将域名映射到你的本地机器：

```
# /etc/hosts (macOS/Linux) 或 C:\Windows\System32\drivers\etc\hosts
127.0.0.1  myproject.test
127.0.0.1  api.myproject.test
```

结合本地 Web 服务器，这创建了一个完整的本地托管环境。

## 创建你的第一个自定义域名站点

### 第一步：选择域名

**本地开发推荐的 TLD：**
- `.test` — IETF 保留用于测试（推荐）
- `.local` — 常用，但可能与 macOS 上的 mDNS 冲突
- `.localhost` — 明确不可路由
- `.invalid` — 另一个保留选项

**避免使用：**
- `.dev` — Google 所有，Chrome 中强制使用 HTTPS
- 真实 TLD（.com、.io）— 可能与实际站点冲突

**好的示例：**
- `laravel-project.test`
- `client-site.test`
- `api.myapp.test`
- `wordpress.test`

### 第二步：在 FlyEnv 中创建站点

1. 打开 **Host** 模块
2. 点击 **"添加站点"**
3. 配置：
   - **主机名**：`myproject.test`
   - **主机根目录**：`/Users/you/code/myproject/public`
   - **PHP 版本**：选择已安装的版本
   - **端口**：80（HTTP 默认）

![Add Site Form](https://oss.macphpstudy.com/image/quick-start-4.webp)

### 第三步：配置项目根目录

根路径取决于你的框架：

| 框架 | 根目录 |
|-----------|----------------|
| Laravel | `/project/public` |
| WordPress | `/project`（包含 wp-config.php） |
| Symfony | `/project/public` |
| Yii2 | `/project/web` |
| 原生 PHP | `/project`（index.php 所在位置） |
| 静态 HTML | `/project`（index.html 所在位置） |

**重要**：设置正确的权限：
- 所有者：你的用户账户
- 组：Web 服务器用户（www-data、_www 等）
- 权限：目录 755，文件 644

### 第四步：启用自动 SSL

SSL 对于以下场景必不可少：
- Service Workers 需要 HTTPS
- 安全 Cookie 仅在 HTTPS 下工作
- WebRTC 需要 HTTPS
- 现代 API（地理位置、摄像头）需要 HTTPS

**在 FlyEnv 中启用：**

1. 在站点设置中，勾选 **"使用 SSL"**
2. 选择 **"自动 SSL"**（推荐）
3. 点击 **保存**

![SSL Configuration](https://oss.macphpstudy.com/image/host-1.webp)

**会发生什么：**
- FlyEnv 生成本地 CA 证书
- 创建由 CA 签名的站点特定证书
- 将 CA 添加到系统信任存储
- 为 HTTPS 配置 Web 服务器

**Linux 注意事项**：浏览器可能需要手动导入 CA。FlyEnv 提供证书文件路径。

### 第五步：启动服务并测试

1. 启动你的 Web 服务器（Nginx/Apache/Caddy）
2. 启动 PHP-FPM（如果使用 PHP）
3. 在浏览器中打开 `https://myproject.test`

你应该看到绿色的锁图标——没有浏览器警告。

## 站点配置选项

### 端口配置

**标准端口：**
- 端口 80 — HTTP（URL 中不显示端口）
- 端口 443 — HTTPS（URL 中不显示端口）
- 自定义端口 — `http://site.test:8080`

**何时使用自定义端口：**
- 运行多个 Web 服务器
- 避免与系统服务冲突
- 测试特定端口场景

### 主机别名

添加多个指向同一站点的域名：

```
主域名：myproject.test
别名：www.myproject.test
别名：alternate.test
```

所有别名自动共享相同的 SSL 证书。

### 子域名自动发现（Park 功能）

**Park** 功能根据文件夹名自动创建子域名：

```
根目录：/Users/you/projects/myapp
子目录：
  - /api -> api.myapp.test
  - /admin -> admin.myapp.test
  - /docs -> docs.myapp.test
```

在站点设置中勾选 **"Park"** 选项启用。

### URL 重写

大多数框架需要 URL 重写。FlyEnv 包含模板：

**Nginx 配置：**
```nginx
# Laravel 重写
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

# WordPress 重写
location / {
    try_files $uri $uri/ /index.php;
}
```

**在 FlyEnv 中选择模板：**
1. 编辑站点
2. 点击 **"重写规则"**
3. 选择框架模板
4. 保存

![Rewrite Templates](https://oss.macphpstudy.com/image/host-2.webp)

## 高级 SSL 配置

### 理解本地 SSL

FlyEnv 的自动 SSL 使用本地证书颁发机构（CA）：

```
本地 CA（被系统信任）
    |
    +-- 站点证书（myproject.test）
    +-- 站点证书（api.myproject.test）
```

这允许无限数量的本地证书，无需 Let's Encrypt 速率限制或 DNS 验证。

### 手动证书导入（Linux）

如果浏览器显示警告：

```bash
# 在 FlyEnv 设置中找到 CA 证书
# 通常位于：~/.flyenv/ssl/rootCA.pem

# 导入到系统信任存储（Ubuntu/Debian）
sudo cp rootCA.pem /usr/local/share/ca-certificates/flyenv.crt
sudo update-ca-certificates

# Chrome 特定设置
# 设置 -> 隐私 -> 安全 -> 管理证书 -> 授权机构 -> 导入
```

### 使用自定义证书

用于测试真实证书：

1. 获取证书文件（.crt 和 .key）
2. 在站点设置中，选择 **"自定义 SSL"**
3. 上传证书文件
4. 保存

适用于：
- 在本地测试生产证书
- 客户提供的证书
- 通配符证书测试

## 多服务器设置

### 运行多个 Web 服务器

你可以在不同的端口上同时运行 Apache、Nginx 和 Caddy：

| 服务器 | 端口 | 使用场景 |
|--------|------|----------|
| Nginx | 80/443 | 主要开发 |
| Apache | 8080/8443 | 测试 .htaccess 规则 |
| Caddy | 3000 | 快速原型开发 |

为每个站点配置其首选的服务器和端口。

### 负载均衡模拟

在本地测试负载均衡设置：

```
用户请求
    |
    v
Nginx（负载均衡器）-> localhost:3001（实例 1）
                      -> localhost:3002（实例 2）
                      -> localhost:3003（实例 3）
```

在 Nginx upstream 块中配置以进行真实测试。

## 故障排除

### "无法访问此站点"

**检查：**
1. Web 服务器是否运行？
2. 端口是否正确？
3. Hosts 文件是否已更新？（FlyEnv 自动执行）
4. DNS 缓存：`sudo killall -HUP mDNSResponder`（macOS）

### "您的连接不是私密连接"（SSL 错误）

**macOS：**
1. FlyEnv 应该自动信任 CA
2. 如果没有，在钥匙串访问中手动信任

**Windows：**
1. 将 CA 证书导入"受信任的根证书颁发机构"

**Linux：**
```bash
# 更新 CA 存储
sudo update-ca-certificates

# 重启浏览器
```

### "502 Bad Gateway" 或 "504 Gateway Timeout"

**原因：**
1. PHP-FPM 未运行
2. PHP-FPM socket 路径错误
3. 应用程序错误

**解决方案：**
1. 在 FlyEnv 中启动 PHP
2. 检查 PHP 版本与站点配置匹配
3. 查看应用程序错误日志

### "403 Forbidden"

**原因**：文件权限或目录索引被禁用

**解决方案：**
1. 检查文件夹权限（目录 755）
2. 确保 index.php/index.html 存在
3. 在 Web 服务器配置中启用目录列表（如果需要）

### 域名解析到错误的 IP

**原因**：外部 DNS 覆盖本地 hosts

**解决方案：**
1. 使用 `.test` TLD（保留，永远没有公共 DNS）
2. 检查 `/etc/hosts` 中的条目是否正确
3. 刷新 DNS 缓存

## 常见问题（FAQ）

**Q：我可以在本地使用真实域名如 mysite.com 吗？**

A：可以，但不推荐。这会阻止访问真实站点。改用 .test。

**Q：这些 SSL 证书对其他人有效吗？**

A：无效。本地证书只在你机器上被信任。要分享，请使用 [Cloudflare Tunnel](/zh/guide/cloudflare-tunnel-local-development)。

**Q：我可以创建多少个站点？**

A：无限。仅受系统资源限制。

**Q：我可以与团队分享本地站点吗？**

A：本地站点仅限本地。要团队访问，请使用 Cloudflare Tunnel 或部署到共享服务器。

**Q：我需要续期本地 SSL 证书吗？**

A：不需要。FlyEnv 生成的本地证书不会过期或需要续期。

**Q：我可以使用通配符如 *.test 吗？**

A：可以。创建站点时使用 `*.myproject.test` 可匹配任何子域名。

**Q：IPv6 呢？**

A：FlyEnv 支持 IPv4（127.0.0.1）和 IPv6（::1）本地主机。

## 最佳实践

1. **使用 .test TLD** — 避免与真实网站冲突
2. **匹配生产结构** — 保持本地域名与生产环境相似
3. **始终启用 SSL** — 从第一天起就用 HTTPS 测试
4. **用子域名组织** — api.myapp.test、admin.myapp.test
5. **版本控制配置** — 导出并提交站点配置

## 下一步

现在你已经设置了专业的本地托管环境：

- [Node.js 反向代理](/zh/guide/reverse-proxy-nestjs-multi-servers) — 使用干净 URL 托管 Node 应用
- [Cloudflare Tunnel](/zh/guide/cloudflare-tunnel-local-development) — 安全分享站点
- [使用 Mailpit 测试邮件](/zh/guide/local-email-testing-mailpit) — 完整的开发环境

立即[下载 FlyEnv](/zh/download)开始使用自定义域名。
