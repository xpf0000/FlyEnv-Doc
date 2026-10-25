---
title: 'Tên miền tùy chỉnh và HTTPS tự động với FlyEnv'
head:
  - - meta
    - name: description
      content: 'Thiết lập phát triển local chuyên nghiệp với tên miền tùy chỉnh và chứng chỉ SSL tự động. Tìm hiểu cách dùng tên miền .test với HTTPS trong FlyEnv mà không có cảnh báo trình duyệt.'
---

# Tên miền tùy chỉnh & Auto SSL cho phát triển local: Hướng dẫn đầy đủ

Truy cập dự án của bạn qua `http://localhost:8080/myproject` trông thật thiếu chuyên nghiệp khi chia sẻ cho khách hàng. Các lập trình viên chuyên nghiệp dùng những tên miền sạch như `https://clientproject.test`—với chứng chỉ SSL hợp lệ mà trình duyệt tin tưởng.

Hướng dẫn này cho bạn thấy cách thiết lập tên miền local tùy chỉnh với HTTPS tự động, khiến môi trường phát triển của bạn không thể phân biệt được với production.

## Vì sao tên miền tùy chỉnh lại quan trọng

### Vấn đề của các URL localhost:port

```
❌ http://localhost:3000
❌ http://127.0.0.1:8080/project
❌ http://192.168.1.50:9000
```

**Các vấn đề:**
- Khó nhớ
- Số cổng xuất hiện trong URL
- Xung đột cookie giữa các dự án
- Sự cố CORS khi kiểm thử API
- Không có HTTPS để kiểm thử các tính năng bảo mật

### Cách làm chuyên nghiệp

```
✅ https://myapp.test
✅ https://api.myapp.test
✅ https://admin.myapp.test
```

**Lợi ích:**
- URL sạch, dễ nhớ
- Cookie và lưu trữ riêng cho từng dự án
- Kiểm thử HTTPS đúng chuẩn
- Định tuyến dựa trên subdomain
- Cấu hình ngang bằng với production

## Tên miền local hoạt động như thế nào

FlyEnv dùng **tệp Hosts** (ghi đè DNS ở cấp hệ thống) để ánh xạ các tên miền về máy local của bạn:

```
# /etc/hosts (macOS/Linux) or C:\Windows\System32\drivers\etc\hosts
127.0.0.1  myproject.test
127.0.0.1  api.myproject.test
```

Kết hợp với một web server local, điều này tạo ra một môi trường hosting local hoàn chỉnh.

## Tạo site tên miền tùy chỉnh đầu tiên của bạn

### Bước 1: Chọn một tên miền

**Các TLD được khuyến nghị cho phát triển local:**
- `.test` — IETF dành riêng cho kiểm thử (khuyến nghị)
- `.local` — Phổ biến nhưng có thể xung đột với mDNS trên macOS
- `.localhost` — Rõ ràng là không định tuyến được
- `.invalid` — Một tùy chọn dành riêng khác

**Nên tránh:**
- `.dev` — Sở hữu bởi Google, bắt buộc HTTPS trong Chrome
- TLD thật (.com, .io) — Có thể xung đột với các site thực

**Ví dụ tốt:**
- `laravel-project.test`
- `client-site.test`
- `api.myapp.test`
- `wordpress.test`

### Bước 2: Tạo site trong FlyEnv

1. Mở module **Host**
2. Nhấp **"Add Site"**
3. Cấu hình:
   - **Host Name**: `myproject.test`
   - **Host Root**: `/Users/you/code/myproject/public`
   - **PHP Version**: Chọn phiên bản đã cài
   - **Port**: 80 (mặc định HTTP)

![Biểu mẫu thêm site](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Bước 3: Cấu hình thư mục gốc dự án

Đường dẫn root phụ thuộc vào framework của bạn:

| Framework | Thư mục gốc |
|-----------|----------------|
| Laravel | `/project/public` |
| WordPress | `/project` (chứa wp-config.php) |
| Symfony | `/project/public` |
| Yii2 | `/project/web` |
| PHP thuần | `/project` (nơi chứa index.php) |
| HTML tĩnh | `/project` (nơi chứa index.html) |

**Quan trọng**: Đặt quyền truy cập đúng cách:
- Owner: Tài khoản người dùng của bạn
- Group: Người dùng của web server (www-data, _www, v.v.)
- Quyền: 755 cho thư mục, 644 cho tệp

### Bước 4: Bật Auto SSL

SSL là điều thiết yếu cho việc kiểm thử:
- Service Workers đòi hỏi HTTPS
- Secure cookie chỉ hoạt động qua HTTPS
- WebRTC đòi hỏi HTTPS
- Các API hiện đại (Geolocation, Camera) đòi hỏi HTTPS

**Bật trong FlyEnv:**

1. Trong cài đặt site, đánh dấu **"Use SSL"**
2. Chọn **"Auto SSL"** (khuyến nghị)
3. Nhấp **Save**

![Cấu hình SSL](https://oss.macphpstudy.com/image/host-1.webp)

**Những gì sẽ xảy ra:**
- FlyEnv sinh một chứng chỉ CA local
- Tạo chứng chỉ riêng cho site được CA ký
- Thêm CA vào kho tin cậy của hệ thống
- Cấu hình web server cho HTTPS

**Lưu ý cho Linux**: Trình duyệt có thể đòi hỏi nhập CA thủ công. FlyEnv cung cấp đường dẫn đến tệp chứng chỉ.

### Bước 5: Khởi động dịch vụ và kiểm tra

1. Khởi động web server của bạn (Nginx/Apache/Caddy)
2. Khởi động PHP-FPM (nếu dùng PHP)
3. Mở `https://myproject.test` trong trình duyệt

Bạn sẽ thấy biểu tượng ổ khóa màu xanh—không có cảnh báo trình duyệt nào.

## Các tùy chọn cấu hình site

### Cấu hình cổng

**Các cổng chuẩn:**
- Cổng 80 — HTTP (không có cổng trong URL)
- Cổng 443 — HTTPS (không có cổng trong URL)
- Cổng tùy chỉnh — `http://site.test:8080`

**Khi nào nên dùng cổng tùy chỉnh:**
- Chạy nhiều web server cùng lúc
- Tránh xung đột với các dịch vụ hệ thống
- Kiểm thử các tình huống cổng cụ thể

### Alias tên miền Host

Thêm nhiều tên miền cùng trỏ tới một site:

```
Primary: myproject.test
Alias: www.myproject.test
Alias: alternate.test
```

Tất cả alias dùng chung chứng chỉ SSL một cách tự động.

### Tự động phát hiện subdomain (tính năng Park)

Tính năng **Park** tự tạo subdomain từ tên thư mục:

```
Root: /Users/you/projects/myapp
Subdirectories:
  - /api -> api.myapp.test
  - /admin -> admin.myapp.test
  - /docs -> docs.myapp.test
```

Bật trong cài đặt site bằng cách đánh dấu tùy chọn **"Park"**.

### Viết lại URL (URL Rewriting)

Đa số framework đòi hỏi viết lại URL. FlyEnv tích hợp sẵn các mẫu:

**Cho Nginx:**
```nginx
# Laravel rewrite
location / {
    try_files $uri $uri/ /index.php?$query_string;
}

# WordPress rewrite
location / {
    try_files $uri $uri/ /index.php;
}
```

**Chọn mẫu trong FlyEnv:**
1. Chỉnh sửa site
2. Nhấp **"Rewrite Rules"**
3. Chọn mẫu cho framework
4. Lưu lại

![Các mẫu rewrite](https://oss.macphpstudy.com/image/host-2.webp)

## Cấu hình SSL nâng cao

### Hiểu về SSL local

Auto SSL của FlyEnv dùng một Certificate Authority (CA) local:

```
Local CA (trusted by system)
    |
    +-- Site Certificate (myproject.test)
    +-- Site Certificate (api.myproject.test)
```

Điều này cho phép tạo không giới hạn chứng chỉ local mà không bị giới hạn tốc độ của Let's Encrypt hay cần xác thực DNS.

### Nhập chứng chỉ thủ công (Linux)

Nếu trình duyệt hiện cảnh báo:

```bash
# Find the CA certificate in FlyEnv settings
# Typically: ~/.flyenv/ssl/rootCA.pem

# Import to system trust (Ubuntu/Debian)
sudo cp rootCA.pem /usr/local/share/ca-certificates/flyenv.crt
sudo update-ca-certificates

# For Chrome specifically
# Settings -> Privacy -> Security -> Manage Certificates -> Authorities -> Import
```

### Dùng chứng chỉ tùy chỉnh

Để kiểm thử với các chứng chỉ thật:

1. Có được các tệp chứng chỉ (.crt và .key)
2. Trong cài đặt site, chọn **"Custom SSL"**
3. Tải lên các tệp chứng chỉ
4. Lưu lại

Hữu ích cho:
- Kiểm thử chứng chỉ production tại local
- Chứng chỉ do khách hàng cung cấp
- Kiểm thử chứng chỉ wildcard

## Thiết lập multi-server

### Chạy nhiều web server

Bạn có thể chạy Apache, Nginx và Caddy đồng thời trên các cổng khác nhau:

| Server | Cổng | Tình huống sử dụng |
|--------|------|----------|
| Nginx | 80/443 | Phát triển chính |
| Apache | 8080/8443 | Kiểm thử các quy tắc .htaccess |
| Caddy | 3000 | Tạo mẫu thử nhanh |

Cấu hình mỗi site với server và cổng ưa thích của nó.

### Mô phỏng cân bằng tải

Kiểm thử các thiết lập cân bằng tải tại local:

```
User Request
    |
    v
Nginx (load balancer) -> localhost:3001 (Instance 1)
                      -> localhost:3002 (Instance 2)
                      -> localhost:3003 (Instance 3)
```

Cấu hình trong khối upstream của Nginx để kiểm thử sát thực tế.

## Khắc phục sự cố

### "This site cannot be reached"

**Cần kiểm tra:**
1. Web server đã chạy chưa?
2. Cổng có đúng không?
3. Tệp Hosts đã cập nhật chưa? (FlyEnv tự làm việc này)
4. Bộ nhớ đệm DNS: `sudo killall -HUP mDNSResponder` (macOS)

### "Your connection is not private" (Lỗi SSL)

**macOS:**
1. FlyEnv sẽ tự động tin tưởng CA
2. Nếu không, hãy tin tưởng thủ công trong Keychain Access

**Windows:**
1. Nhập chứng chỉ CA vào "Trusted Root Certification Authorities"

**Linux:**
```bash
# Update CA store
sudo update-ca-certificates

# Restart browser
```

### "502 Bad Gateway" hoặc "504 Gateway Timeout"

**Nguyên nhân:**
1. PHP-FPM chưa chạy
2. Đường dẫn socket PHP-FPM sai
3. Lỗi ứng dụng

**Giải pháp:**
1. Khởi động PHP trong FlyEnv
2. Kiểm tra phiên bản PHP khớp với cấu hình site
3. Xem lại các log lỗi của ứng dụng

### "403 Forbidden"

**Nguyên nhân**: Quyền tệp hoặc tính năng liệt kê thư mục bị tắt

**Giải pháp:**
1. Kiểm tra quyền thư mục (755 cho thư mục)
2. Bảo đảm index.php/index.html tồn tại
3. Bật liệt kê thư mục trong cấu hình web server (nếu muốn)

### Tên miền phân giải sai IP

**Nguyên nhân**: DNS bên ngoài đè lên hosts local

**Giải pháp:**
1. Dùng TLD `.test` (dành riêng, không bao giờ có DNS công khai)
2. Kiểm tra `/etc/hosts` có các mục đúng không
3. Xả bộ nhớ đệm DNS

## Câu hỏi thường gặp (FAQ)

**H: Tôi có thể dùng tên miền thật như mysite.com tại local không?**

Đ: Có, nhưng không khuyến nghị. Nó khiến bạn không thể truy cập site thật. Hãy dùng .test thay thế.

**H: Các chứng chỉ SSL này có dùng được cho người khác không?**

Đ: Không. Chứng chỉ local chỉ được tin tưởng trên máy của bạn. Để chia sẻ, hãy dùng [Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development).

**H: Tôi có thể tạo bao nhiêu site?**

Đ: Không giới hạn. Chỉ bị giới hạn bởi tài nguyên hệ thống của bạn.

**H: Tôi có thể chia sẻ các site local với nhóm mình không?**

Đ: Các site local chỉ chạy trên localhost. Để nhóm truy cập, hãy dùng Cloudflare Tunnel hoặc triển khai lên một server dùng chung.

**H: Tôi có cần gia hạn chứng chỉ SSL local không?**

Đ: Không. Các chứng chỉ local do FlyEnv sinh ra không hết hạn và không cần gia hạn.

**H: Tôi có thể dùng wildcard như *.test không?**

Đ: Có. Tạo một site với `*.myproject.test` để khớp với bất kỳ subdomain nào.

**H: Còn IPv6 thì sao?**

Đ: FlyEnv hỗ trợ cả IPv4 (127.0.0.1) và IPv6 (::1) cho localhost.

## Thực hành tốt nhất

1. **Dùng TLD .test** — Tránh xung đột với các website thật
2. **Khớp cấu trúc production** — Giữ tên miền local giống với production
3. **Luôn bật SSL** — Kiểm thử với HTTPS ngay từ ngày đầu
4. **Tổ chức bằng subdomain** — api.myapp.test, admin.myapp.test
5. **Đưa cấu hình vào quản lý phiên bản** — Xuất và commit cấu hình các site

## Bước tiếp theo

Giờ khi bạn đã có một hệ thống hosting local chuyên nghiệp:

- [Reverse Proxy cho Node.js](/vi/guide/reverse-proxy-nestjs-multi-servers) — Host ứng dụng Node với URL sạch
- [Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) — Chia sẻ site một cách an toàn
- [Kiểm thử email với Mailpit](/vi/guide/local-email-testing-mailpit) — Môi trường phát triển hoàn chỉnh

[Tải xuống FlyEnv](/vi/download) để bắt đầu với tên miền tùy chỉnh ngay hôm nay.
