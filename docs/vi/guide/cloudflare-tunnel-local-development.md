---
title: 'Cloudflare Tunnel cho phát triển local'
head:
  - - meta
    - name: description
      content: 'Mở một dịch vụ local của FlyEnv ra internet qua Cloudflare Tunnel, cấu hình public hostname và tên miền tùy chỉnh, và xem lại access log.'
---

# Mở Localhost ra internet: Cloudflare Tunnel — phương án thay thế ngrok

Bạn cần chia sẻ site phát triển local với khách hàng? Đang kiểm thử các webhook đòi hỏi URL công khai? Có lẽ bạn đã dùng ngrok—và trả phí hàng tháng của họ cho những tính năng cơ bản như tên miền tùy chỉnh.

**Cloudflare Tunnel là một phương án khác.** Cloudflare Tunnel (trước đây là Argo Tunnel) cung cấp:
- ✅ Public hostname trên các tên miền bạn quản lý trong Cloudflare
- ✅ Hostname ổn định, có thể tái sử dụng sau khi tunnel khởi động lại
- ✅ Mức sử dụng phụ thuộc gói và chính sách Cloudflare hiện tại của bạn
- ✅ **Thiết lập một cú nhấp trong FlyEnv—không cần dòng lệnh**

## Vì sao lập trình viên đang chuyển từ ngrok

| Tính năng | ngrok Free | ngrok Pro ($8/tháng) | **Cloudflare Tunnel** |
|---------|------------|-------------------|----------------------|
| Tên miền tùy chỉnh | ❌ | ✅ | ✅, tùy gói dịch vụ |
| Hostname ổn định | ❌ | ✅ | ✅, với DNS được quản lý |
| Hỗ trợ HTTP/2 | ✅ | ✅ | ✅ |
| Giới hạn sử dụng | Tùy gói | Tùy gói | Xem điều khoản Cloudflare hiện hành |
| Xác thực | ❌ | ✅ | Khả dụng qua Cloudflare Access |
| **Độ phức tạp thiết lập** | Đơn giản | Đơn giản | **Một cú nhấp trong FlyEnv** |

## Thiết lập một cú nhấp với FlyEnv (Khuyến nghị)

FlyEnv tích hợp Cloudflare Tunnel trực tiếp vào UI. Không lệnh terminal, không tệp cấu hình—chỉ cần trỏ, nhấp và chia sẻ.

### Bước 1: Lấy API Token của Cloudflare

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com)

![Đăng nhập Cloudflare Dashboard](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-1.webp)

2. Vào **My Profile** (góc trên bên phải) → **API Tokens**

![Vào My Profile](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-2.webp)

3. Nhấp **Create Token**

![Nhấp Create Token](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-3.webp)

4. Dùng mẫu **"Cloudflare Tunnel"**, hoặc tạo token tùy chỉnh với các quyền sau:
   - **Account:Cloudflare Tunnel:Edit** — Để quản lý tunnel
   - **Zone:Zone:Read** — Để liệt kê các tên miền của bạn
   - **Zone:DNS:Edit** — Để tạo bản ghi DNS

5. Chọn **Zone Resources** (các tên miền) bạn muốn dùng

![Tạo token tùy chỉnh](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-4.webp)
![Thiết lập quyền bước 1](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-5.webp)
![Thiết lập quyền bước 2](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-6.webp)
![Thiết lập quyền bước 3](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-7.webp)

6. Sao chép token đã sinh

### Bước 2: Cấu hình trong FlyEnv

1. Mở FlyEnv → module **Cloudflare Tunnel**, và nhấp **Nút biểu tượng Plus**
2. Dán **API Token** của bạn
3. FlyEnv tự động tải các tên miền khả dụng của bạn

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### Bước 3: Tạo Tunnel của bạn

Sau khi các zone được tải:

1. **Select Zone**: Chọn tên miền bạn muốn dùng (ví dụ `yourdomain.com`)
2. **Set Subdomain**: Nhập subdomain bạn mong muốn (ví dụ `dev` → tạo ra `dev.yourdomain.com`)
3. **Set Local URL**: Chọn URL phát triển local của bạn (ví dụ `http://localhost:3000` hoặc `https://myproject.test`)
4. Nhấp **"Ok"**

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

Xong rồi đấy! FlyEnv tự xử lý mọi thứ bên trong:
- ✅ Tạo Cloudflare Tunnel
- ✅ Cấu hình bản ghi DNS
- ✅ Thiết lập các quy tắc định tuyến
- ✅ Sinh chứng chỉ SSL

### Bước 4: Khởi động Tunnel

Nhấp nút **"Start"** trong module Cloudflare Tunnel.

Site local của bạn giờ đã trực tuyến tại `https://dev.yourdomain.com`

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### Quản lý nhiều Tunnel

Tạo bao nhiêu tunnel tùy nhu cầu:

| Subdomain | Local URL | Mục đích |
|-----------|-----------|---------|
| `dev` | `https://myapp.test` | Site phát triển chính |
| `api` | `http://localhost:3000` | Server API |
| `admin` | `http://localhost:8080` | Bảng điều khiển quản trị |
| `client-a` | `https://client-a.test` | Bản xem trước cho khách hàng |

Tất cả được quản lý từ một giao diện duy nhất—khởi động, dừng hoặc xóa tunnel chỉ với một cú nhấp.

## Cấu hình thủ công (Dòng lệnh)

Dành cho người dùng nâng cao thích kiểm soát bằng dòng lệnh, đây là phương pháp thiết lập truyền thống:

### Điều kiện tiên quyết

1. Một tài khoản Cloudflare với gói hỗ trợ các tính năng bạn cần
2. Một tên miền đã được thêm vào Cloudflare
3. Cloudflared đã cài (có sẵn trong module Cloudflared của FlyEnv)

### Bước 1: Xác thực với Cloudflare

```bash
cloudflared tunnel login
```

Lệnh này mở một cửa sổ trình duyệt để cấp quyền truy cập Cloudflare.

### Bước 2: Tạo Tunnel của bạn

```bash
# Create a named tunnel
cloudflared tunnel create dev-localhost

# Output will show your Tunnel ID
# Save this - you'll need it for configuration
```

### Bước 3: Cấu hình định tuyến DNS

```bash
# Route your subdomain to the tunnel
cloudflared tunnel route dns dev-localhost dev.yourdomain.com
```

### Bước 4: Tạo tệp cấu hình

Tạo `config.yml`:

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

### Bước 5: Khởi động Tunnel

```bash
cloudflared tunnel run dev-localhost
```

**So sánh:** Cách tiếp cận UI của FlyEnv loại bỏ tất cả các bước này—bạn chỉ cần nhập API token, chọn zone, đặt subdomain và nhấp lưu.

## Các tình huống sử dụng phổ biến

### 1. Bản xem trước cho khách hàng

**Trước:** "Để tôi triển khai lên staging... (30 phút sau)"

**Sau:** Chia sẻ `https://feature-branch.yourdomain.com` ngay lập tức—chỉ cần tạo một tunnel và khởi động nó.

### 2. Phát triển Webhook

Kiểm thử webhook Stripe, GitHub hay Slack tại local:

**Thiết lập FlyEnv:**
1. Tạo tunnel: `webhooks.yourdomain.com` → `http://localhost:3000/webhooks`
2. Khởi động tunnel
3. Cấu hình điểm cuối webhook trong dashboard Stripe/GitHub

### 3. Kiểm thử trên thiết bị di động

Kiểm thử thiết kế responsive trên thiết bị thật:
- iPhone truy cập `https://mobile.yourdomain.com`
- Android truy cập cùng URL đó
- Cả hai đều trỏ tới server phát triển local của bạn

### 4. Phát triển API với HTTPS

Một số API đòi hỏi callback HTTPS. Cloudflare Tunnel cung cấp:
- Chứng chỉ SSL tự động
- Chấm dứt HTTPS tại biên (edge) của Cloudflare
- Kết nối an toàn tới localhost của bạn

### 5. Cộng tác nhóm

Chia sẻ công việc đang tiến hành với đồng nghiệp:
- Mỗi lập trình viên tự tạo tunnel của riêng mình
- Hoặc dùng chung một tunnel trỏ tới server của nhóm

## Khắc phục sự cố

### "Cannot get zones" trong FlyEnv

**Nguyên nhân**: API Token không hợp lệ hoặc thiếu quyền

**Giải pháp**:
1. Xác nhận token có các quyền sau: Zone:Read, DNS:Edit, Cloudflare Tunnel:Edit
2. Bảo đảm token bao gồm zone bạn muốn dùng
3. Thử tạo token mới bằng mẫu "Cloudflare Tunnel"

### "Tunnel creation failed"

**Nguyên nhân**: Sự cố mạng hoặc trùng tên tunnel

**Giải pháp**:
1. Kiểm tra kết nối internet
2. Thử một subdomain khác
3. Kiểm tra xem tunnel đã tồn tại trong dashboard Cloudflare chưa

### "Tunnel started but site not accessible"

**Nguyên nhân**: Local URL sai hoặc dịch vụ local chưa chạy

**Giải pháp**:
1. Xác nhận local URL trong cài đặt tunnel (ví dụ `http://localhost:3000`)
2. Bảo đảm server phát triển local của bạn thực sự đang chạy
3. Thử truy cập trực tiếp local URL trong trình duyệt trước

### DNS chưa lan truyền

**Nguyên nhân**: Bộ nhớ đệm DNS của Cloudflare

**Giải pháp**:
1. Chờ 1-5 phút sau khi tạo tunnel
2. Kiểm tra bản ghi DNS trong dashboard Cloudflare
3. Bảo đảm đám mây màu cam đã bật (proxied)

## Cấu hình nâng cao

### Xác thực (Zero Trust)

Thêm đăng nhập Google/GitHub cho tunnel của bạn:

1. Trong [Cloudflare Zero Trust Dashboard](https://one.dash.cloudflare.com)
2. Vào **Access** → **Applications**
3. Tạo ứng dụng mới cho subdomain của bạn
4. Cấu hình các nhà cung cấp xác thực
5. Áp dụng cho hostname tunnel của bạn

Giờ `dev.yourdomain.com` đòi hỏi đăng nhập trước khi hiển thị site local của bạn.

### Cân bằng tải (Nhiều Tunnel)

Cho tính khả dụng cao khi demo:

```yaml
# config.yml - Manual configuration example
# On Machine A
tunnel: tunnel-id-1
# On Machine B  
tunnel: tunnel-id-2

# Both route to same hostname
# Cloudflare load balances between them
```

**Lưu ý:** Với đa số tình huống phát triển, một tunnel duy nhất là đủ.

## So sánh: FlyEnv với thiết lập thủ công

| Khía cạnh | Thủ công (Dòng lệnh) | **FlyEnv UI** |
|--------|----------------------|---------------|
| **Thời gian thiết lập** | 15-30 phút | 2 phút |
| **Số lệnh phải nhớ** | 10+ | 0 |
| **Tệp cấu hình** | Nhiều tệp YAML | Không có |
| **Quản lý tunnel** | Lệnh terminal | Trỏ và nhấp |
| **Nhiều tunnel** | Phức tạp | Dễ dàng |
| **Khởi động/dừng** | `cloudflared tunnel run` | Một nút duy nhất |

## Câu hỏi thường gặp (FAQ)

**H: Cloudflare Tunnel có thực sự miễn phí không?**

Đ: Cloudflare cung cấp gói miễn phí có thể đủ dùng cho nhiều tunnel phát triển. Các giới hạn và tính năng Access đi kèm có thể thay đổi, nên hãy kiểm tra tài liệu gói Cloudflare hiện hành trước khi dựa vào một tính năng nào đó.

**H: Tôi có cần gói Cloudflare trả phí không?**

Đ: Không nhất thiết. Nhiều quy trình xem trước local chạy tốt trên gói miễn phí, nhưng yêu cầu cụ thể phụ thuộc vào hostname, chính sách Access, mức sử dụng và điều khoản Cloudflare hiện hành.

**H: Tôi có thể dùng bất kỳ tên miền nào không?**

Đ: Bạn cần kiểm soát DNS của tên miền đó (thêm nó vào Cloudflare). Tên miền miễn phí dùng được, hoặc dùng một subdomain của tên miền bạn sở hữu.

**H: Cái này an toàn đến mức nào?**

Đ: Connector chủ động tạo kết nối outbound, nên bạn không cần mở cổng inbound trên router. Public hostname vẫn có thể truy cập từ internet trừ khi bạn bổ sung các chính sách Cloudflare Access phù hợp, xác thực ứng dụng và kiểm soát origin.

**H: Cái này có làm chậm việc phát triển local của tôi không?**

Đ: Tác động tối thiểu. Tunnel cộng thêm độ trễ khoảng ~50-100ms—chấp nhận được cho bản xem trước và webhook. Với phát triển local, bạn vẫn dùng `localhost` trực tiếp.

**H: Còn WebSockets thì sao?**

Đ: Cloudflare Tunnel hỗ trợ WebSockets, nhưng hành vi ứng dụng vẫn phụ thuộc vào origin, cài đặt proxy và gói Cloudflare của bạn.

**H: Tôi có thể dùng cùng một tunnel trên nhiều máy không?**

Đ: Không—mỗi tunnel gắn với một máy. Hãy tạo các tunnel riêng cho các máy hoặc lập trình viên khác nhau.

**H: Điều gì xảy ra khi tôi dừng tunnel?**

Đ: URL công khai không thể truy cập nữa, nhưng bản ghi DNS vẫn còn. Khi bạn khởi động lại tunnel (dù là nhiều ngày sau), cùng URL đó lại hoạt động bình thường.

**H: Tôi có thể chia sẻ tunnel với thành viên nhóm không?**

Đ: Thành viên nhóm có thể tự tạo tunnel của riêng họ trỏ tới máy local của họ. Với môi trường dùng chung, hãy cân nhắc triển khai lên một server staging thay thế.

**H: Tôi có cần giữ FlyEnv luôn chạy không?**

Đ: Có. Tunnel chạy qua module Cloudflare Tunnel của FlyEnv. Đóng FlyEnv đồng nghĩa với dừng tunnel.

## Sẵn sàng từ bỏ ngrok?

Cloudflare Tunnel tích hợp với FlyEnv cung cấp một UI tiện lợi để cấu hình public hostname cho phát triển local.

[Tải xuống FlyEnv](/vi/download) để bắt đầu với hỗ trợ Cloudflare Tunnel tích hợp sẵn.

Muốn khám phá thêm các tính năng mạng? Hãy xem hướng dẫn [Thiết lập Reverse Proxy](/vi/guide/reverse-proxy-nestjs-multi-servers) hoặc [Tên miền tùy chỉnh & Auto SSL](/vi/guide/host) của chúng tôi.
