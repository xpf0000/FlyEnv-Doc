---
title: 'Reverse Proxy cho NestJS và Node.js với Nginx hoặc Caddy'
head:
  - - meta
    - name: description
      content: 'Cấu hình reverse proxy cho NestJS, Node.js, và Next.js với FlyEnv, bao gồm chuyển tiếp WebSocket, HTTPS, và khắc phục lỗi 502.'
---

# Thiết lập Reverse Proxy cho NestJS, Node.js, Next.js: Hướng dẫn Nginx, Apache, Caddy

Ứng dụng Node.js của bạn chạy hoàn hảo trên localhost:3000. Nhưng làm thế nào để triển khai nó đúng cách? Truy cập trực tiếp qua cổng là không an toàn, quản lý PM2 cùng các quy tắc tường lửa rất đau đầu, còn Docker thì thấy thừa thãi.

**Giải pháp: một reverse proxy.** Nó xử lý SSL termination, cân bằng tải, và URL sạch trong khi ứng dụng Node của bạn tập trung vào logic nghiệp vụ. Hướng dẫn này trình bày các cấu hình phát triển local thực tế cho Nginx, Apache, và Caddy—tất cả được quản lý qua giao diện trực quan của FlyEnv. Hãy tự xem xét về bảo mật, năng lực xử lý, và khả năng quan sát trước khi áp dụng chúng cho production.

## Vì sao dùng Reverse Proxy?

### Các vấn đề của truy cập trực tiếp qua cổng

```
# What developers often do (wrong)
http://yourserver.com:3000  # Exposes port, no SSL
```

**Các vấn đề:**
- Tường lửa phải mở các cổng không chuẩn
- Không có mã hóa SSL/TLS
- Không có cân bằng tải hay failover
- Xung đột cổng giữa các ứng dụng
- URL xấu xí cho người dùng

### Lợi ích của Reverse Proxy

```
# What you should do (right)
https://api.yourapp.com  ->  localhost:3000
https://app.yourapp.com  ->  localhost:3001
```

**Ưu điểm:**
- ✅ Một cổng duy nhất (80/443) cho mọi ứng dụng
- ✅ Chứng chỉ SSL tự động
- ✅ Cân bằng tải trên nhiều instance
- ✅ Định tuyến theo tên miền sạch sẽ
- ✅ Bộ đệm tệp tĩnh
- ✅ Bảo vệ DDoS và giới hạn tốc độ

## Tổng quan kiến trúc

```
User Request
     |
     v
[Cloudflare/Nginx/Apache/Caddy]  <-- Reverse Proxy (SSL, routing)
     |
     +---> Node.js App (port 3000)
     +---> PHP Site (port 80)
     +---> Static Files
     +---> Another Node App (port 3001)
```

## Thiết lập Reverse Proxy một chạm trong FlyEnv (Khuyến nghị)

FlyEnv cung cấp giao diện trực quan để cấu hình reverse proxy—không cần chỉnh sửa tệp cấu hình thủ công. Bạn có thể thiết lập nhiều quy tắc reverse proxy cho một site chỉ với vài cú nhấp.

### Thiết lập Reverse Proxy trong FlyEnv

1. Mở FlyEnv → module **Host**
2. Chọn site của bạn hoặc tạo một site mới
3. Cuộn tới phần **"Reverse Proxy"**
4. Nhấp **"Add"** để tạo một quy tắc proxy mới

![Phần Reverse Proxy](https://oss.macphpstudy.com/image/host-3.webp)

### Cấu hình quy tắc proxy

Với mỗi quy tắc reverse proxy, cấu hình:

| Trường | Mô tả | Ví dụ |
|-------|-------------|---------|
| **Match Path** | Đường dẫn URL cần khớp | `/api` hoặc `/` |
| **Target URL** | Địa chỉ server backend | `http://127.0.0.1:3000` |

**Các cấu hình ví dụ:**

| Tình huống | Match Path | Target URL |
|----------|-----------|------------|
| API server | `/api` | `http://127.0.0.1:3000` |
| WebSocket | `/ws` | `http://127.0.0.1:3001` |
| Bảng quản trị | `/admin` | `http://127.0.0.1:8080` |
| Proxy root | `/` | `http://127.0.0.1:3000` |

![Biểu mẫu quy tắc proxy](https://oss.macphpstudy.com/image/host-3.webp)

### Nhiều quy tắc proxy

FlyEnv hỗ trợ đặt nhiều quy tắc reverse proxy cho một site. Các quy tắc được khớp theo thứ tự:

1. `/api` → `http://127.0.0.1:3000` (Các yêu cầu API)
2. `/admin` → `http://127.0.0.1:3001` (Bảng điều khiển quản trị)
3. `/` → `http://127.0.0.1:3002` (Ứng dụng chính)

**Độ ưu tiên rất quan trọng**: Các đường dẫn cụ thể hơn nên đứng trước. `/api` phải nằm trước `/`.

![Nhiều quy tắc proxy](https://oss.macphpstudy.com/image/host-3.webp)

### Hỗ trợ WebSocket

Bật hỗ trợ WebSocket cho các ứng dụng real-time:

1. Khi thêm/chỉnh sửa một quy tắc proxy
2. Đánh dấu ô **"WebSocket"**
3. FlyEnv tự động cấu hình các header nâng cấp

Điều này thiết yếu cho Socket.io, GraphQL subscriptions, và các tính năng real-time khác.

![Ô WebSocket](https://oss.macphpstudy.com/image/host-3.webp)

### Đằng sau bức màn

Khi bạn lưu các quy tắc proxy trong FlyEnv, nó tự động:

1. Sinh ra cấu hình Nginx/Apache/Caddy đúng đắn
2. Thêm các header cần thiết (`X-Forwarded-For`, `X-Real-IP`, v.v.)
3. Cấu hình các header nâng cấp WebSocket (nếu bật)
4. Reload web server để áp dụng thay đổi

Không cần chỉnh sửa tệp thủ công hay khởi động lại server.

## Cấu hình thủ công (Nâng cao)

Với các tình huống nâng cao hoặc yêu cầu tùy chỉnh, bạn có thể tự chỉnh các tệp cấu hình. Dưới đây là cấu hình thủ công cho từng web server.

## Cấu hình Reverse Proxy Nginx

### Proxy NestJS/Node.js cơ bản

Chỉnh sửa vhost Nginx của site trong FlyEnv:

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

**Giải thích các header quan trọng:**
- `Host`: Tên miền gốc cho virtual hosting
- `X-Real-IP`: IP của client (dùng cho logging/giới hạn tốc độ)
- `X-Forwarded-*`: Báo cho ứng dụng biết nó đang nằm sau một proxy

### Hỗ trợ WebSocket (Socket.io, v.v.)

```nginx
location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    # ... other headers
}
```

Hai header `Upgrade` và `Connection` cho phép WebSocket đi xuyên qua.

### Bộ đệm tệp tĩnh

Phục vụ các tệp tĩnh Next.js trực tiếp từ Nginx:

```nginx
# Cache static assets
location /_next/static {
    alias /path/to/your/app/.next/static;
    expires 365d;
    access_log off;
}

# Proxy everything else to Node.js
location / {
    proxy_pass http://127.0.0.1:3000;
    # ... headers
}
```

### Nhiều ứng dụng trên cùng một tên miền

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

## Cấu hình Reverse Proxy Apache

### Bật các module cần thiết

Trong module Apache của FlyEnv, bảo đảm các module này được bật:
- `mod_proxy`
- `mod_proxy_http`
- `mod_proxy_wstunnel` (cho WebSockets)
- `mod_rewrite` (tùy chọn)

### Reverse Proxy cơ bản

Chỉnh sửa cấu hình vhost Apache:

```apache
<VirtualHost *:80>
    ServerName api.yourdomain.test
    DocumentRoot "/var/www/html"
    
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/
    
    # Headers
    RequestHeader set X-Real-IP %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-For %{REMOTE_ADDR}s
    RequestHeader set X-Forwarded-Proto "http"
</VirtualHost>
```

### Hỗ trợ WebSocket

```apache
<VirtualHost *:80>
    ServerName ws.yourdomain.test
    
    # WebSocket proxy
    ProxyPass / ws://127.0.0.1:3000/
    ProxyPassReverse / ws://127.0.0.1:3000/
    
    # Required for Socket.io
    RewriteEngine on
    RewriteCond %{HTTP:Upgrade} websocket [NC]
    RewriteRule ^/?(.*) "ws://127.0.0.1:3000/$1" [P,L]
    RewriteCond %{HTTP:Upgrade} !=websocket [NC]
    RewriteRule ^/?(.*) "http://127.0.0.1:3000/$1" [P,L]
</VirtualHost>
```

### Cân bằng tải (nhiều instance Node)

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

## Cấu hình Reverse Proxy Caddy

Caddy đơn giản hóa cấu hình reverse proxy một cách đáng kể.

### Proxy cơ bản (chỉ một dòng!)

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000
}
```

Chỉ vậy thôi. Caddy xử lý:
- HTTP/2 tự động
- Nâng cấp WebSocket một cách minh bạch
- HTTPS tự động (với Let's Encrypt trên production)
- Chuyển tiếp header

### Nhiều dịch vụ

```nginx
# API service
api.yourdomain.test {
    reverse_proxy localhost:3000
}

# WebSocket service
ws.yourdomain.test {
    reverse_proxy localhost:3001
}

# Static site with API fallback
app.yourdomain.test {
    root * /var/www/app
    file_server
    
    # API calls go to Node.js
    handle_path /api/* {
        reverse_proxy localhost:3002
    }
    
    # SPA fallback
    try_files {path} {path}/ /index.html
}
```

### Cân bằng tải

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 localhost:3001 localhost:3002 {
        lb_policy round_robin
        health_uri /health
        health_interval 30s
    }
}
```

### Tùy chỉnh header

```nginx
api.yourdomain.test {
    reverse_proxy localhost:3000 {
        header_up Host {host}
        header_up X-Real-IP {remote}
        header_up X-Forwarded-For {remote}
        header_up X-Forwarded-Proto {scheme}
        
        # Custom header for your app
        header_up X-Proxy-Server "Caddy"
    }
}
```

## Lưu ý riêng cho từng framework

### NestJS

**Tin tưởng các header proxy:**
```typescript
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Trust proxy headers from Nginx/Apache/Caddy
  app.set('trust proxy', true);
  
  await app.listen(3000);
}
```

**Global prefix cho các route /api:**
```typescript
app.setGlobalPrefix('api');
// Now your routes are /api/users, not /users
```

### Next.js

**Custom server có ý thức về proxy:**
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
    
    // Trust X-Forwarded-Proto for HTTPS detection
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

// Trust proxy
app.set('trust proxy', true);

// Now req.ip shows real client IP, not proxy IP
app.get('/', (req, res) => {
  res.json({
    ip: req.ip,
    forwarded: req.headers['x-forwarded-for']
  });
});
```

## Danh sách kiểm tra cho production

### Cấu hình SSL/HTTPS

**Với Auto SSL của FlyEnv:**
1. Bật SSL trong cài đặt Host
2. Dùng HTTPS trong các header proxy: `X-Forwarded-Proto https`

**Chứng chỉ thủ công:**
```nginx
# Nginx
listen 443 ssl;
ssl_certificate /path/to/cert.pem;
ssl_certificate_key /path/to/key.pem;
```

### Quản lý tiến trình

Dùng PM2 để giữ Node.js luôn chạy:

```bash
# Install PM2
npm install -g pm2

# Start with PM2
pm2 start app.js --name "api-server"
pm2 startup
pm2 save
```

### Kiểm tra tình trạng (Health Checks)

Thêm một endpoint health đơn giản:

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

Cấu hình proxy kiểm tra endpoint này để phục vụ cân bằng tải.

## Khắc phục sự cố

### Lỗi "Cannot GET /"

**Nguyên nhân**: Chưa cấu hình viết lại đường dẫn

**Giải pháp**:
```nginx
# Remove /api prefix before proxying
rewrite ^/api/(.*) /$1 break;
```

### Kết nối WebSocket thất bại

**Nguyên nhân**: Thiếu các header nâng cấp

**Giải pháp**: Bảo đảm cả hai header `Upgrade` và `Connection` được chuyển tiếp

### "502 Bad Gateway"

**Nguyên nhân:**
1. Ứng dụng Node.js không chạy trên cổng đã khai báo
2. Tường lửa chặn kết nối localhost
3. Địa chỉ IP sai trong proxy_pass

**Debug:**
```bash
# Check if app is listening
netstat -tlnp | grep 3000

# Test direct connection
curl http://127.0.0.1:3000
```

### Vòng lặp chuyển hướng vô hạn

**Nguyên nhân**: Vấn đề nhận diện giao thức

**Giải pháp**: Bảo đảm `X-Forwarded-Proto` được đặt và ứng dụng của bạn tôn trọng nó

### IP client hiện là 127.0.0.1

**Nguyên nhân**: Header `X-Forwarded-For` không được chuyển tiếp hoặc không được tin tưởng

**Giải pháp**: Cấu hình cả các header proxy và thiết lập tin tưởng của ứng dụng

## Câu hỏi thường gặp (FAQ)

**H: Reverse proxy nào là tốt nhất?**

Đ: Với người mới, Caddy là dễ nhất. Để có độ tương thích tối đa, Nginx là tiêu chuẩn của ngành. Apache hoạt động tốt nếu bạn vốn đã dùng nó cho PHP.

**H: Tôi có thể dùng nhiều reverse proxy không?**

Đ: Có. Mô hình phổ biến: Cloudflare (biên) -> Nginx (server) -> Node.js (ứng dụng).

**H: Làm thế nào để mở rộng lên nhiều server?**

Đ: Dùng một bộ cân bằng tải (AWS ALB, Nginx Plus, hoặc HAProxy) phân phối tới nhiều app server.

**H: Tôi có nên dùng PM2 với reverse proxy không?**

Đ: Có. PM2 xử lý các crash của tiến trình; reverse proxy xử lý kết nối của client. Chúng bổ trợ lẫn nhau.

**H: Tôi có thể proxy tới các server từ xa không?**

Đ: Có. Đổi `127.0.0.1` thành bất kỳ địa chỉ IP nào. Hữu ích cho kiến trúc microservices.

**H: Làm thế nào để xử lý việc tải lên tệp?**

Đ: Tăng `client_max_body_size` trong Nginx hoặc `LimitRequestBody` trong Apache.

## So sánh tóm tắt

| Tính năng | Nginx | Apache | Caddy |
|---------|-------|--------|-------|
| **Cấu hình** | Vừa phải | Dài dòng | Đơn giản |
| **Hỗ trợ WebSocket** | Thủ công | Dựa trên module | Tự động |
| **Auto HTTPS** | Cần Certbot | Cần Certbot | Tích hợp sẵn |
| **Hiệu năng** | Xuất sắc | Tốt | Xuất sắc |
| **Đường cong học tập** | Trung bình | Trung bình | Thấp |
| **Tích hợp PHP** | FastCGI | mod_php | FastCGI |

Sẵn sàng thiết lập reverse proxy đầu tiên của bạn? Bắt đầu với [cấu hình Host của FlyEnv](/vi/guide/host) để tạo site của bạn, rồi áp dụng các cấu hình ở trên.

Cần mở môi trường phát triển local của bạn ra internet? Hãy xem [hướng dẫn Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) của chúng tôi để có các URL công khai an toàn.
