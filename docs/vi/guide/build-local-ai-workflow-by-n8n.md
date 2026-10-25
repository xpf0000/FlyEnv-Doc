---
title: 'Quy trình AI tự lưu trữ với n8n và Ollama'
head:
  - - meta
    - name: description
      content: 'Dựng tự động hóa AI local, riêng tư với n8n và Ollama trong FlyEnv, bao gồm dịch vụ native, HTTPS và truy cập từ xa có kiểm soát.'
---

# Dựng quy trình AI tự lưu trữ với n8n & Ollama (Không cần Docker)

Bạn có mệt vì phải trả phí hàng tháng cho các công cụ tự động hóa AI như Zapier hay Coze? Bạn có lo ngại khi phải gửi dữ liệu nhạy cảm cho các dịch vụ đám mây của bên thứ ba? Nhiều lập trình viên muốn dựng các quy trình hỗ trợ AI nhưng lại vướng vào cấu hình Docker phức tạp, những cơn ác mộng cấu hình thủ công và nỗi lo thường trực về quyền riêng tư dữ liệu.

Hướng dẫn này sẽ cho bạn thấy cách tạo một quy trình AI tự lưu trữ hoàn toàn, có khả năng chạy offline bằng **n8n** (phương án mã nguồn mở thay thế Zapier) và **Ollama** (trình chạy LLM local)—tất cả được quản lý dễ dàng bằng FlyEnv. Không cần Docker, không phụ thuộc đám mây, và bạn thậm chí có thể mở các quy trình của mình ra internet một cách an toàn khi cần.

---

## Vì sao quy trình AI tự lưu trữ lại quan trọng

| Công cụ tự động hóa đám mây | Tự lưu trữ với FlyEnv |
|------------------------|-------------------------|
| Phí đăng ký hàng tháng | Thiết lập một lần, miễn phí mãi |
| Dữ liệu gửi tới server của bên thứ ba | 100% riêng tư, chạy hoàn toàn local |
| Tùy chỉnh hạn chế | Toàn quyền kiểm soát quy trình |
| Đòi hỏi kết nối internet | Hoạt động hoàn toàn offline |
| Giới hạn gọi API phức tạp | Gọi API local không giới hạn |

FlyEnv chạy n8n và Ollama dưới dạng tiến trình local, tránh được chi phí máy ảo nền của Docker Desktop. Mức tài nguyên thực tế phụ thuộc vào model, quy trình và dịch vụ bạn chọn.

---

## Điều kiện tiên quyết

Trước khi bắt đầu, hãy bảo đảm bạn có:

1. **FlyEnv đã cài** trên macOS, Windows hoặc Linux ([Tải xuống tại đây](/vi/download))
2. Hiểu biết cơ bản về các khái niệm tự động hóa quy trình
3. Ít nhất 8GB RAM (khuyến nghị 16GB cho các model AI lớn hơn)

---

## Bước 1: Cài đặt và khởi động n8n

FlyEnv tích hợp sẵn n8n như một module, loại bỏ hoàn toàn nhu cầu thiết lập Node.js thủ công hay container Docker.

1. Mở FlyEnv và đi tới mục **Tools**
2. Tìm **n8n** trong danh sách các module khả dụng
3. Nhấp **Install**—FlyEnv tự xử lý toàn bộ các phụ thuộc
4. Sau khi cài xong, nhấp **Start** để khởi chạy dịch vụ n8n

![Module n8n trong FlyEnv](https://oss.macphpstudy.com/image/n8n-1.webp)

![Module n8n trong FlyEnv](https://oss.macphpstudy.com/image/n8n-2.webp)

5. Truy cập giao diện web của n8n tại `http://localhost:5678`

![Bảng điều khiển n8n](https://oss.macphpstudy.com/image/n8n-3.webp)

> **Mẹo:** FlyEnv tự quản lý runtime Node.js giúp bạn. Bạn không cần lo về xung đột phiên bản hay các gói npm toàn cục.

---

## Bước 2: Cài Ollama và tải các model AI

Bây giờ hãy thiết lập "bộ não" AI cho quy trình của bạn bằng Ollama.

1. Trong FlyEnv, đi tới mục **AI Tools**
2. Chọn **Ollama** và nhấp **Install**
3. Khởi động dịch vụ Ollama
4. Tải model bạn ưa thích. Hãy chọn theo cấu hình máy tính của bạn. Xem chi tiết tại [Dựng AI Agent offline local](/vi/guide/build-local-offline-ai-agent).

![Module Ollama trong FlyEnv](https://oss.macphpstudy.com/image/n8n-4.webp)

![Các model khả dụng trong Ollama](https://oss.macphpstudy.com/image/n8n-5.webp)

Các model khả dụng bao gồm:
- **Qwen 3.5** - Xuất sắc cho tác vụ tổng quát và lập trình
- **Kimi k2.5** - Tuyệt vời cho tác vụ tổng quát và lập trình
- **Gemma 3** - Các model mở hiệu quả của Google
- **Llama 4** - Mới nhất của Meta với năng lực suy luận mạnh
- **DeepSeek Coder** - Chuyên biệt cho các tác vụ lập trình

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
   - **Base URL:** `http://localhost:11434` (mặc định của Ollama)
   - **Model:** Chọn model bạn đã tải (ví dụ `qwen3.5`)
   
3. Thiết lập mẫu tin nhắn:
   - Trong trường **Messages**, thêm một tin nhắn người dùng
   - Với **Content**, dùng một biểu thức để lấy đầu vào của webhook: `\{\{ $json.query?.q ?? $json.body?.q ?? 'Hello' \}\}`

![Thiết lập node Ollama](https://oss.macphpstudy.com/image/n8n-8.webp)

![Thiết lập node Ollama](https://oss.macphpstudy.com/image/n8n-9.webp)

### 3.3 Kiểm thử quy trình của bạn

1. Lưu quy trình và bật nó sang trạng thái **Active**
2. Sao chép URL webhook (n8n cung cấp cả URL test và production)
3. Kiểm thử bằng curl hoặc bất kỳ HTTP client nào:
   ```bash
   curl -X POST "http://localhost:5678/webhook/ai-assistant" \
     -H "Content-Type: application/json" \
     -d '{"q": "Explain the benefits of local AI workflows"}'
   ```

4. Bạn sẽ nhận được một phản hồi do model AI local của mình sinh ra!

---

## Bước 4: Bật HTTPS với Reverse Proxy

Để dùng trong môi trường production hoặc truy cập từ bên ngoài, bạn cần HTTPS. Site Manager tích hợp sẵn của FlyEnv khiến việc này trở nên cực kỳ đơn giản.

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

Bạn muốn truy cập quy trình AI của mình từ xa? Module Cloudflare Tunnel của FlyEnv có thể công bố nó mà không cần mở cổng inbound trên tường lửa. Named tunnel có thể dùng hostname tùy chỉnh ổn định khi tài khoản Cloudflare và vùng DNS của bạn đã được cấu hình; giới hạn gói dịch vụ vẫn tuân theo điều khoản hiện hành của Cloudflare.

| Tính năng | ngrok Free | **Cloudflare Tunnel** |
|---------|------------|----------------------|
| Tên miền tùy chỉnh | ❌ URL ngẫu nhiên | ✅ MIỄN PHÍ |
| Hostname tùy chỉnh ổn định | Gói trả phí hoặc tên miền đặt trước | Khả dụng với named tunnel đã cấu hình |
| Giới hạn băng thông | 1GB/tháng | Không giới hạn, MIỄN PHÍ |
| Thiết lập trong FlyEnv | CLI thủ công | **UI một cú nhấp** |

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

Bạn thích xem? Xem Build a 100% Free Self-Hosted AI Workflow: n8n + Ollama (No Docker!) qua FlyEnv trong thực tế:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/YnA1B3qmDJU?si=8trvnWn7JUxDQeLA" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Câu hỏi thường gặp (FAQ)

### Thiết lập này có tốn ít RAM hơn Docker không?
**Thường là có, nhưng tùy khối lượng công việc.** FlyEnv chạy n8n và Ollama trực tiếp trên hệ thống của bạn và tránh được máy ảo container. Kích thước model, các quy trình đang chạy, cơ sở dữ liệu và cấu hình Docker quyết định mức chênh lệch thực tế.

### Tôi có thể dùng hoàn toàn offline không?
**Hoàn toàn được.** Khi n8n và Ollama đã được cài, toàn bộ quy trình chạy local mà không cần kết nối internet nào. Đây là lựa chọn lý tưởng cho môi trường cách ly mạng hoặc các ứng dụng nhạy cảm về quyền riêng tư.

### n8n với Ollama có tốt hơn các công cụ tự động hóa trả phí không?
Với lập trình viên muốn kiểm soát tại chỗ: **thường là có.** n8n tự lưu trữ và các model local có thể giảm chi phí dịch vụ định kỳ và giữ dữ liệu được chọn trên máy của bạn, nhưng các API bên thứ ba, dịch vụ nhắn tin và hạ tầng vẫn có thể có giới hạn hoặc phí riêng. Cái giá phải đánh đổi là tự quản lý, và FlyEnv giúp điều đó đơn giản hơn.

### Cloudflare Tunnel so với ngrok thì sao?
Cloudflare Tunnel (qua tích hợp của FlyEnv) cung cấp URL bền vững, tên miền tùy chỉnh, SSL tích hợp sẵn, và hoàn toàn miễn phí cho mục đích cá nhân—khác với URL ngẫu nhiên và giới hạn kết nối của ngrok. Hơn nữa, nó không đòi hỏi cài thêm phần mềm nào ngoài FlyEnv.

### Tôi có thể kết nối nhiều model AI trong một quy trình không?
Có! n8n hỗ trợ rẽ nhánh và logic điều kiện. Bạn có thể định tuyến yêu cầu tới các model Ollama khác nhau theo loại tác vụ—dùng CodeLlama cho câu hỏi lập trình, Qwen cho kiến thức tổng quát, v.v.

---

## Bước tiếp theo

Nền tảng tự động hóa AI tự lưu trữ của bạn giờ đã sẵn sàng! Dưới đây là các bước tiếp theo được khuyến nghị:

1. **Khám phá thêm công cụ AI** — Tìm hiểu cách [dựng AI agent offline](/vi/guide/build-local-offline-ai-agent) với đầy đủ năng lực RAG
2. **Bảo mật thiết lập của bạn** — Đọc [hướng dẫn Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) để có các mẹo triển khai production
3. **Tải xuống FlyEnv** — Nếu chưa có, [hãy lấy phiên bản mới nhất](/vi/download) cho hệ điều hành của bạn

Có câu hỏi hoặc muốn chia sẻ các quy trình bạn đã tạo? Hãy tham gia cộng đồng [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions) của chúng tôi!
