---
title: 'Quy trình AI tự lưu trữ với n8n và Ollama'
head:
  - - meta
    - name: description
      content: 'Dựng tự động hóa AI local, riêng tư với n8n và Ollama trong FlyEnv, bao gồm dịch vụ native, HTTPS và truy cập từ xa có kiểm soát.'
---

# Dựng quy trình AI tự lưu trữ với n8n & Ollama (Không cần Docker)

Chạy n8n và Ollama trong FlyEnv, sau đó gửi yêu cầu POST cục bộ để chuyển lời nhắc tới mô hình đã tải và nhận phản hồi. Việc cài n8n, Ollama và tải mô hình cần kết nối mạng. Sau khi thiết lập, webhook qua địa chỉ loopback và quá trình suy luận có thể chạy ngoại tuyến.

---

## Vì sao quy trình AI tự lưu trữ lại quan trọng

FlyEnv quản lý hai tiến trình dịch vụ. Bạn tạo quy trình trong n8n và chọn mô hình ở node Ollama. Ví dụ này dùng bộ lưu trữ SQLite mặc định của n8n và API Ollama cục bộ. Các node gọi API bên thứ ba vẫn cần internet.

---

## Điều kiện tiên quyết

Trước khi bắt đầu, hãy bảo đảm bạn có:

1. **FlyEnv đã cài** trên macOS, Windows hoặc Linux ([Tải xuống tại đây](/vi/download))
2. Hiểu biết cơ bản về các khái niệm tự động hóa quy trình
3. Ít nhất 8GB RAM (khuyến nghị 16GB cho các model AI lớn hơn)

---

## Bước 1: Cài đặt và khởi động n8n

Cài phiên bản [Node.js](/vi/features/nodejs) tương thích với bản n8n sẽ dùng và kiểm tra `node`, `npm` trong terminal.

1. Mở [mô-đun n8n](/vi/features/n8n) trong FlyEnv và chọn **Version Manager**.
2. Cài một phiên bản. FlyEnv chạy npm trong terminal để bạn theo dõi kết quả.
3. Khởi động phiên bản đã cài từ mô-đun.

![Module n8n trong FlyEnv](https://oss.macphpstudy.com/image/n8n-1.webp)

![Module n8n trong FlyEnv](https://oss.macphpstudy.com/image/n8n-2.webp)

4. Truy cập giao diện web của n8n tại `http://localhost:5678`

![Bảng điều khiển n8n](https://oss.macphpstudy.com/image/n8n-3.webp)

---

## Bước 2: Cài Ollama và tải các model AI

Bây giờ hãy thiết lập "bộ não" AI cho quy trình của bạn bằng Ollama.

1. Trong FlyEnv, đi tới mục **AI Tools**
2. Chọn **Ollama** và nhấp **Install**
3. Khởi động dịch vụ Ollama

![Module Ollama trong FlyEnv](https://oss.macphpstudy.com/image/n8n-4.webp)

![Các model khả dụng trong Ollama](https://oss.macphpstudy.com/image/n8n-5.webp)

Tải mô hình phù hợp với máy và kiểm tra thẻ mô hình xuất hiện tại `http://127.0.0.1:11434/api/tags`. Chọn đúng mô hình cục bộ đó trong quy trình. [Thiết lập mô hình Ollama](/vi/guide/build-local-offline-ai-agent)

---

## Bước 3: Cấu hình quy trình AI đầu tiên

Giờ hãy dựng một quy trình nhận yêu cầu HTTP, xử lý chúng qua AI local của bạn, rồi trả về phản hồi thông minh.

### 3.1 Tạo một Webhook Trigger

1. Trong n8n, nhấp **"Add Workflow"**
2. Tìm **"Webhook"** và thêm nó làm trigger node
3. Cấu hình webhook:
   - **Method:** POST
   - **Path:** `ai-assistant`
   - **Response:** Chọn `When Last Node Finishes` (tùy chọn này trả về kết quả đầu ra của model AI)

![Cấu hình webhook](https://oss.macphpstudy.com/image/n8n-6.webp)

![Cấu hình webhook](https://oss.macphpstudy.com/image/n8n-7.webp)

> **Quan trọng:** Chọn "When Last Node Finishes" bảo đảm webhook trả về phản hồi do AI sinh ra thay vì một xác nhận ngay lập tức.

### 3.2 Thêm node AI Ollama

1. Thêm một node **Ollama** sau webhook
2. Cấu hình kết nối:
   - **Base URL:** `http://127.0.0.1:11434` (mặc định của Ollama)
   - **Model:** Chọn model bạn đã tải (ví dụ `qwen3.5`)
   
3. Thiết lập mẫu tin nhắn:
   - Trong trường **Messages**, thêm một tin nhắn người dùng
   - Với **Content**, dùng một biểu thức để lấy đầu vào của webhook: `\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Thiết lập node Ollama](https://oss.macphpstudy.com/image/n8n-8.webp)

![Thiết lập node Ollama](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 Kiểm thử quy trình của bạn

Để kiểm thử trong trình chỉnh sửa, chọn **Listen for Test Event** và sao chép **Test URL**. Muốn dùng endpoint cố định như ví dụ dưới đây, hãy xuất bản quy trình hoặc chuyển sang **Active** trên bản cũ. Sao chép **Production URL**. Với cổng mặc định và đường dẫn mẫu, URL là `http://127.0.0.1:5678/webhook/ai-assistant`.

```bash
curl -X POST "http://127.0.0.1:5678/webhook/ai-assistant" \
  -H "Content-Type: application/json" \
  -d '{"q": "Explain the benefits of local AI workflows"}'
```

Kiểm tra phản hồi HTTP có đầu ra của mô hình, rồi mở **Executions** trong n8n để xem lần chạy. Khi gặp `404`, kiểm tra lại URL và xác nhận quy trình đã xuất bản hoặc trình lắng nghe thử đang hoạt động. Nếu node Ollama lỗi, xác nhận `/api/tags` liệt kê mô hình đã chọn. [URL Webhook của n8n](https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.webhook/#webhook-urls)

---

## Bước 4: Bật HTTPS với Reverse Proxy

Ví dụ đã hoạt động qua loopback. Chỉ cần bước proxy tùy chọn này nếu muốn có địa chỉ HTTPS cục bộ. Nếu n8n phía sau proxy vẫn hiển thị URL nội bộ, hãy đặt địa chỉ webhook bên ngoài trong trình sửa biến môi trường n8n rồi khởi động lại dịch vụ. [Cài đặt proxy ngược cho n8n](https://docs.n8n.io/hosting/configuration/configuration-examples/webhook-url/)

### 4.1 Thêm một tên miền local

1. Mở mục **Site** của FlyEnv
2. Nhấp **"Add Site"**
3. Cấu hình:
   - **Domain:** `n8n.test` (hoặc bất kỳ tên miền `.test` nào)
   - **Type:** Reverse Proxy
   - **Target:** `http://127.0.0.1:5678`

![Cấu hình site trong FlyEnv](https://oss.macphpstudy.com/image/n8n-10.webp)

### 4.2 Bật SSL tự động

FlyEnv tự sinh và tự quản lý các chứng chỉ SSL local:

1. Trong phần cài đặt site, bật **"Auto SSL"**
2. FlyEnv cấu hình Nginx/Caddy/Apache với chứng chỉ này
3. Truy cập thực thể n8n của bạn tại `https://n8n.test`

![Cấu hình site trong FlyEnv](https://oss.macphpstudy.com/image/n8n-11.webp)

> **Không cần quản lý chứng chỉ thủ công!** FlyEnv tự xử lý tích hợp mkcert.

---

## Bước 5: Mở ra internet với Cloudflare Tunnel

Bỏ qua bước này khi dùng ngoại tuyến. Cloudflare Tunnel cần internet. Cấu hình xác thực cho node Webhook trước khi chia sẻ endpoint. Giữ trình chỉnh sửa n8n sau lớp kiểm soát truy cập và để API Ollama chỉ lắng nghe qua loopback.

### 5.1 Lấy API Token của Cloudflare

1. Đăng nhập vào [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Vào **My Profile** (góc trên bên phải) → **API Tokens**
3. Nhấp **Create Token**
4. Dùng mẫu **"Cloudflare Tunnel"**, hoặc tạo token tùy chỉnh với các quyền sau:
   - **Account:Cloudflare Tunnel:Edit** — Để quản lý tunnel
   - **Zone:Zone:Read** — Để liệt kê các tên miền của bạn
   - **Zone:DNS:Edit** — Để tạo bản ghi DNS
5. Chọn **Zone Resources** (các tên miền) bạn muốn dùng
6. Sao chép token đã sinh

> **Mẹo:** Nếu bạn chưa có tên miền, bạn có thể đăng ký một tên miền giá rẻ hoặc dùng các subdomain miễn phí của Cloudflare trên một số gói.

### 5.2 Cấu hình trong FlyEnv

1. Mở FlyEnv → module **Cloudflare Tunnel**, nhấp **Nút biểu tượng Plus**
2. Dán **API Token** của bạn
3. FlyEnv tự động tải các tên miền khả dụng của bạn

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### 5.3 Tạo Tunnel cho n8n

Sau khi các zone được tải:

1. **Select Zone**: Chọn tên miền bạn muốn dùng (ví dụ `yourdomain.com`)
2. **Set Subdomain**: Nhập subdomain bạn mong muốn (ví dụ `ai` → tạo ra `ai.yourdomain.com`)
3. **Set Local URL**: Nhập `http://localhost:5678` (cổng mặc định của n8n)
4. Nhấp **"Ok"**

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

Xong rồi đấy! FlyEnv tự xử lý mọi thứ bên trong:
- ✅ Tạo Cloudflare Tunnel
- ✅ Cấu hình bản ghi DNS
- ✅ Thiết lập các quy tắc định tuyến
- ✅ Sinh chứng chỉ SSL

### 5.4 Khởi động Tunnel

Nhấp nút **"Start"** trong module Cloudflare Tunnel.

Quy trình n8n của bạn giờ có thể truy cập tại `https://ai.yourdomain.com` từ bất cứ đâu trên thế giới qua HTTPS—không cần triển khai server, không cần port forwarding, không cần cấu hình mạng phức tạp.

![Module Cloudflare Tunnel của FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### Quản lý nhiều Tunnel

Tạo thêm các tunnel cho các quy trình khác nhau hoặc cho từng thành viên nhóm:

| Subdomain | Local URL | Mục đích |
|-----------|-----------|---------|
| `ai` | `http://localhost:5678` | Quy trình AI n8n chính |
| `ai-test` | `http://localhost:5678` | Môi trường kiểm thử |
| `webhook` | `http://localhost:5678/webhook` | Điểm cuối webhook công khai |

Tất cả được quản lý từ một giao diện duy nhất—khởi động, dừng hoặc xóa tunnel chỉ với một cú nhấp.

---

## Các ý tưởng quy trình nâng cao

Khi thiết lập cơ bản đã chạy ổn, hãy khám phá những mô hình tự động hóa mạnh mẽ sau:

### Bộ phân tích chăm sóc khách hàng
Kết nối CRM hoặc nền tảng chat của bạn với n8n, chuyển lịch sử hội thoại tới AI local, và nhận phân tích cảm xúc cùng các phản hồi gợi ý—tất cả mà không phải gửi dữ liệu khách hàng tới các API bên ngoài.

### Bot review code
Kích hoạt quy trình từ Git webhook, dùng DeepSeek Coder để phân tích pull request, và tự động đăng bình luận kèm gợi ý cải thiện.

### Pipeline xử lý tài liệu
Nhận tài liệu qua email hoặc tải lên, trích xuất văn bản bằng OCR local, xử lý qua Ollama để tóm tắt hoặc phân loại, rồi lưu kết quả vào cơ sở dữ liệu của bạn.

### Tích hợp nhà thông minh
Kết hợp với Home Assistant webhook để tạo các quy tắc tự động hóa hỗ trợ AI bằng các lệnh ngôn ngữ tự nhiên được xử lý hoàn toàn tại chỗ.

---

## Hướng dẫn bằng video

Xem [video quy trình n8n và Ollama](/vi/demos?video=n8n-ollama-workflow).

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Câu hỏi thường gặp (FAQ)

### Thiết lập này có tốn ít RAM hơn Docker không?
**Thường là có, nhưng tùy khối lượng công việc.** FlyEnv chạy n8n và Ollama trực tiếp trên hệ thống của bạn và tránh được máy ảo container. Kích thước model, các quy trình đang chạy, cơ sở dữ liệu và cấu hình Docker quyết định mức chênh lệch thực tế.

### Tôi có thể dùng hoàn toàn offline không?
Webhook cục bộ và mô hình Ollama đã tải có thể chạy ngoại tuyến sau khi cài đặt. Cloudflare Tunnel và node gọi dịch vụ từ xa vẫn cần internet.

### Tôi có thể kết nối nhiều model AI trong một quy trình không?
Có! n8n hỗ trợ rẽ nhánh và logic điều kiện. Bạn có thể định tuyến yêu cầu tới các model Ollama khác nhau theo loại tác vụ—dùng CodeLlama cho câu hỏi lập trình, Qwen cho kiến thức tổng quát, v.v.

---

## Bước tiếp theo

Nền tảng tự động hóa AI tự lưu trữ của bạn giờ đã sẵn sàng! Dưới đây là các bước tiếp theo được khuyến nghị:

- [Thiết lập trợ lý lập trình ngoại tuyến với Ollama](/vi/guide/build-local-offline-ai-agent)
2. **Bảo mật thiết lập của bạn** — Đọc [hướng dẫn Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) để có các mẹo triển khai production
3. **Tải xuống FlyEnv** — Nếu chưa có, [hãy lấy phiên bản mới nhất](/vi/download) cho hệ điều hành của bạn

Có câu hỏi hoặc muốn chia sẻ các quy trình bạn đã tạo? Hãy tham gia cộng đồng [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions) của chúng tôi!
