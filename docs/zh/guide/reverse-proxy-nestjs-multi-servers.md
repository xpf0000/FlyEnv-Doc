---
title: 'NestJS、Node.js、Next.js 反向代理配置：Nginx、Apache、Caddy 指南'
head:
  - - meta
    - name: description
      content: '使用 Nginx、Apache 或 Caddy 部署 Node.js 应用反向代理。学习适用于 NestJS、Next.js、Express 的生产环境配置，无需 Docker 复杂性。'
---

# NestJS、Node.js、Next.js 反向代理配置：Nginx、Apache、Caddy 指南

你的 Node.js 应用在 localhost:3000 上运行完美。但如何正确部署它呢？直接访问端口不安全，管理 PM2 加防火墙规则很痛苦，而 Docker 又显得过于复杂。

**解决方案：反向代理。** 它处理 SSL 终止、负载均衡和干净的 URL，而你的 Node 应用专注于业务逻辑。本指南展示了适用于 Nginx、Apache 和 Caddy 的生产环境配置——全部通过 FlyEnv 的可视化界面进行管理。

## 为什么要使用反向代理？

### 直接端口访问的问题

```
# 开发者经常这样做（错误）
http://yourserver.com:3000  # 暴露端口，无 SSL
```

**问题：**
- 防火墙必须开放非标准端口
- 没有 SSL/TLS 加密
- 没有负载均衡或故障转移
- 应用之间的端口冲突
- 用户使用丑陋的 URL

### 反向代理的优势

```
# 你应该这样做（正确）
https://api.yourapp.com  ->  localhost:3000
https://app.yourapp.com  ->  localhost:3001
```

**优势：**
- ✅ 所有应用使用单一端口（80/443）
- ✅ 自动 SSL 证书
- ✅ 跨多个实例的负载均衡
- ✅ 基于域名的干净路由
- ✅ 静态文件缓存
- ✅ DDoS 防护和速率限制

## 架构概览

```
用户请求
     |
     v
[Cloudflare/Nginx/Apache/Caddy]  <-- 反向代理（SSL、路由）
     |
     +---> Node.js 应用（端口 3000）
     +---> PHP 站点（端口 80）
     +---> 静态文件
     +---> 另一个 Node 应用（端口 3001）
```

## FlyEnv 一键反向代理配置（推荐）

FlyEnv 提供可视化界面用于配置反向代理——无需手动编辑配置文件。你可以通过几次点击为单个站点设置多个反向代理规则。

### 在 FlyEnv 中设置反向代理

1. 打开 FlyEnv → **Host** 模块
2. 选择你的站点或创建一个新站点
3. 滚动到 **"Reverse Proxy"** 部分
4. 点击 **"Add"** 创建新的代理规则

![Reverse Proxy Section](https://oss.macphpstudy.com/image/host-3.webp)

### 配置代理规则

对于每个反向代理规则，配置：

| 字段 | 描述 | 示例 |
|------|------|------|
| **Match Path** | 要匹配的 URL 路径 | `/api` 或 `/` |
| **Target URL** | 后端服务器地址 | `http://127.0.0.1:3000` |

**示例配置：**

| 使用场景 | Match Path | Target URL |
|----------|-----------|------------|
| API 服务器 | `/api` | `http://127.0.0.1:3000` |
| WebSocket | `/ws` | `http://127.0.0.1:3001` |
| 管理面板 | `/admin` | `http://127.0.0.1:8080` |
| 根代理 | `/` | `http://127.0.0.1:3000` |

![Proxy Rule Form](https://oss.macphpstudy.com/image/host-3.webp)

### 多个代理规则

FlyEnv 支持为单个站点设置多个反向代理规则。规则按顺序匹配：

1. `/api` → `http://127.0.0.1:3000`（API 请求）
2. `/admin` → `http://127.0.0.1:3001`（管理后台）
3. `/` → `http://127.0.0.1:3002`（主应用）

**优先级很重要**：更具体的路径应该排在前面。`/api` 必须在 `/` 之前。

![Multiple Proxy Rules](https://oss.macphpstudy.com/image/host-3.webp)

### WebSocket 支持

为实时应用启用 WebSocket 支持：

1. 添加/编辑代理规则时
2. 勾选 **"WebSocket"** 复选框
3. FlyEnv 自动配置 upgrade 头信息

这对 Socket.io、GraphQL subscriptions 和其他实时功能至关重要。

![WebSocket Checkbox](https://oss.macphpstudy.com/image/host-3.webp)

### 幕后原理

当你在 FlyEnv 中保存代理规则时，它会自动：

1. 生成正确的 Nginx/Apache/Caddy 配置
2. 添加必需的请求头（`X-Forwarded-For`、`X-Real-IP` 等）
3. 配置 WebSocket upgrade 头（如果启用）
4. 重新加载 Web 服务器以应用更改

无需手动编辑文件或重启服务器。

## 手动配置（高级）

对于高级用例或自定义需求，你可以手动编辑配置文件。以下是每个 Web 服务器的手动配置。

## Nginx 反向代理配置

### 基本的 NestJS/Node.js 代理

在 FlyEnv 中编辑你站点的 Nginx vhost：

```nginx
server {
    listen 80;
    server_name api.yourdomain.test;
    
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }
}
```

**关键请求头说明：**
- `Host`：用于虚拟主机的原始主机名
- `X-Real-IP`：客户端 IP（用于日志/速率限制）
- `X-Forwarded-*`：告诉你的应用它在代理后面

### WebSocket 支持（Socket.io 等）

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    # ... 其他请求头
}
```

`Upgrade` 和 `Connection` 请求头启用 WebSocket 透传。

### 静态文件缓存

直接从 Nginx 提供 Next.js 静态文件：

```nginx
# 缓存静态资源
location /_next/static {
    alias /path/to/your/app/.next/static;
    expires 365d;
    access_log off;
}

# 其他所有请求代理到 Node.js
location / {
    proxy_pass http://127.0.0.1:3000;
    # ... 请求头
}
```

### 同一域名下的多个应用

```nginx
server {
    server_name yourdomain.test;
    
    # API -> NestJS
    location /api {
        proxy_pass http://127.0.0.1:3000;
        rewrite ^/api/(.*) /$1 break;
    }
    
    # Admin -> Express
    location /admin {
        proxy_pass http://127.0.0.1:3001;
        rewrite ^/admin/(.*) /$1 break;
    }
    
    # Main -> Next.js
    location / {
        proxy_pass http://127.0.0.1:3002;
    }
}
```

## Apache 反向代理配置

### 启用必需模块

在 FlyEnv 的 Apache 模块中，确保启用以下模块：
- `mod_proxy`
- `mod_proxy_http`
- `mod_proxy_wstunnel`（用于 WebSockets）
- `mod_rewrite`（可选）

### 基本反向代理

编辑 Apache vhost 配置：

```apache
<VirtualHost *:80>
    ServerName api.yourdomain.test
    DocumentRoot "/var/www/html"
    
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    # 请求头
    RequestHeader set X-Real-IP %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-For %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
```

### WebSocket 支持

```apache
<VirtualHost *:80>
    ServerName ws.yourdomain.test
    
    # WebSocket 代理
    ProxyPass / ws://127.0.0.1:3000/
    ProxyPassReverse / ws://127.0.0.1:3000/
    
    # Socket.io 必需
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule ^/?(.*) "ws://127.0.0.1:3000/$1" [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule ^/?(.*) "http://127.0.0.1:3000/$1" [P,L]
</VirtualHost>
```

### 负载均衡（多个 Node 实例）

```apache
<Proxy balancer://nodes>
    BalancerMember http://127.0.0.1:3000
    BalancerMember http://127.0.0.1:3001
    BalancerMember http://127.0.0.1:3002
</Proxy>

<VirtualHost *:80>
    ProxyPass / balancer://nodes/
    ProxyPassReverse / balancer://nodes/
</VirtualHost>
```

## Caddy 反向代理配置

Caddy 极大地简化了反向代理配置。

### 基本代理（一行代码！）

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000
}
```

就这些。Caddy 自动处理：
- HTTP/2 自动启用
- WebSocket upgrade 透明处理
- 自动 HTTPS（生产环境使用 Let's Encrypt）
- 请求头转发

### 多个服务

```nginx
# API 服务
api.yourdomain.test {
    reverse_proxy localhost:3000
}

# WebSocket 服务
ws.yourdomain.test {
    reverse_proxy localhost:3001
}

# 带 API 回退的静态站点
app.yourdomain.test {
    root * /var/www/app
    file_server
    
    # API 调用转到 Node.js
    handle_path /api/* {
        reverse_proxy localhost:3002
    }
    
    # SPA 回退
    try_files {path} {path}/ /index.html
}
```

### 负载均衡

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 localhost:3001 localhost:3002 {
        lb_policy round_robin
        health_uri /health
        health_interval 30s
    }
}
```

### 请求头自定义

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 {
        header_up Host {host}
        header_up X-Real-IP {remote}
        header_up X-Forwarded-For {remote}
        header_up X-Forwarded-Proto {scheme}
        
        # 为你的应用添加自定义请求头
        header_up X-Proxy-Server "Caddy"
    }
}
```

## 框架特定注意事项

### NestJS

**信任代理请求头：**
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // 信任来自 Nginx/Apache/Caddy 的代理请求头
  app.set('trust proxy', true);
  
  await app.listen(3000);
}
```

**为 /api 路由设置全局前缀：**
```typescript
app.setGlobalPrefix('api');
// 现在你的路由是 /api/users，而不是 /users
```

### Next.js

**带代理感知的自定义服务器：**
```javascript
// server.js
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    
    // 信任 X-Forwarded-Proto 用于 HTTPS 检测
    if (req.headers['x-forwarded-proto'] === 'https') {
      req.isSecure = true;
    }
    
    handle(req, res, parsedUrl);
  }).listen(3000);
});
```

### Express.js

```javascript
const express = require('express');
const app = express();

// 信任代理
app.set('trust proxy', true);

// 现在 req.ip 显示真实客户端 IP，而不是代理 IP
app.get('/', (req, res) => {
  res.json({
    ip: req.ip,
    forwarded: req.headers['x-forwarded-for']
  });
});
```

## 生产环境检查清单

### SSL/HTTPS 配置

**使用 FlyEnv 自动 SSL：**
1. 在 Host 设置中启用 SSL
2. 在代理请求头中使用 HTTPS：`X-Forwarded-Proto https`

**手动证书：**
```nginx
# Nginx
listen 443 ssl;
ssl_certificate /path/to/cert.pem;
ssl_certificate_key /path/to/key.pem;
```

### 进程管理

使用 PM2 保持 Node.js 运行：

```bash
# 安装 PM2
npm install -g pm2

# 使用 PM2 启动
pm2 start app.js --name "api-server"
pm2 startup
pm2 save
```

### 健康检查

添加一个简单的健康检查端点：

```javascript
// NestJS
@Get('health')
health() {
  return { status: 'ok', timestamp: new Date() };
}

// Express
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});
```

配置代理检查此端点用于负载均衡。

## 故障排除

### "Cannot GET /" 错误

**原因**：路径重写未配置

**解决方案**：
```nginx
# 在代理前移除 /api 前缀
rewrite ^/api/(.*) /$1 break;
```

### WebSocket 连接失败

**原因**：缺少 upgrade 请求头

**解决方案**：确保 `Upgrade` 和 `Connection` 请求头都被传递

### "502 Bad Gateway"

**原因：**
1. Node.js 应用未在指定端口运行
2. 防火墙阻止 localhost 连接
3. proxy_pass 中的 IP 地址错误

**调试：**
```bash
# 检查应用是否在监听
netstat -tlnp | grep 3000

# 测试直接连接
curl http://127.0.0.1:3000
```

### 无限重定向循环

**原因**：协议检测问题

**解决方案**：确保 `X-Forwarded-Proto` 已设置，且你的应用尊重它

### 客户端 IP 显示为 127.0.0.1

**原因**：`X-Forwarded-For` 请求头未传递或未被信任

**解决方案**：同时配置代理请求头和应用信任设置

## 常见问题解答（FAQ）

**Q: 哪个反向代理最好？**

A: 对于初学者，Caddy 最容易。为了最大兼容性，Nginx 是行业标准。如果你已经在使用 Apache 处理 PHP，它也能很好地工作。

**Q: 我可以使用多个反向代理吗？**

A: 可以。常见模式：Cloudflare（边缘）-> Nginx（服务器）-> Node.js（应用）。

**Q: 如何扩展到多台服务器？**

A: 使用负载均衡器（AWS ALB、Nginx Plus 或 HAProxy）分发到多个应用服务器。

**Q: 我应该将 PM2 与反向代理一起使用吗？**

A: 应该。PM2 处理进程崩溃；反向代理处理客户端连接。它们相互补充。

**Q: 我可以代理到远程服务器吗？**

A: 可以。将 `127.0.0.1` 更改为任何 IP 地址。对微服务架构很有用。

**Q: 如何处理文件上传？**

A: 增加 Nginx 中的 `client_max_body_size` 或 Apache 中的 `LimitRequestBody`。

## 对比总结

| 特性 | Nginx | Apache | Caddy |
|------|-------|--------|-------|
| **配置** | 中等 | 冗长 | 简单 |
| **WebSocket 支持** | 手动 | 基于模块 | 自动 |
| **自动 HTTPS** | 需要 Certbot | 需要 Certbot | 内置 |
| **性能** | 优秀 | 良好 | 优秀 |
| **学习曲线** | 中等 | 中等 | 低 |
| **PHP 集成** | FastCGI | mod_php | FastCGI |

准备好设置你的第一个反向代理了吗？从 [FlyEnv 的 Host 配置](/zh/guide/host) 开始创建你的站点，然后应用上述配置。

需要将你的本地开发环境暴露到互联网？查看我们的 [Cloudflare Tunnel 指南](/zh/guide/cloudflare-tunnel-local-development) 获取安全的公共 URL。
