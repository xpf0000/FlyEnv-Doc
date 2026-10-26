---
title: 'Dựng AI Agent offline với Ollama, Qwen và Llama'
head:
  - - meta
    - name: description
      content: 'Chạy các model AI local với Ollama và FlyEnv để được trợ giúp lập trình offline bằng Qwen, DeepSeek hoặc Llama ngay trên phần cứng của bạn.'
---

# Dựng AI Agent offline ưu tiên quyền riêng tư ngay tại local (Qwen, DeepSeek, Llama)

Mỗi dòng code bạn gửi tới ChatGPT hay GitHub Copilot đều rời khỏi máy của bạn. Với các codebase độc quyền, ứng dụng y tế hay hệ thống tài chính, đây là điều không thể chấp nhận. Nhưng chạy AI tại local trước đây đòi hỏi bằng tiến sĩ về machine learning.

**Giờ thì không nữa.** Với Ollama và FlyEnv, bạn có thể chạy các ngôn ngữ model hiện đại nhất hoàn toàn offline—trong vài phút chứ không phải vài ngày.

## Vì sao AI offline lại quan trọng

### Vấn đề quyền riêng tư của AI đám mây

Khi bạn dùng các trợ lý lập trình AI trên đám mây:
- Code độc quyền của bạn được truyền tới server bên ngoài
- Dữ liệu huấn luyện có thể lưu giữ các đoạn mã nhạy cảm
- Vi phạm tuân thủ (HIPAA, GDPR, SOC2)
- Độ trễ mạng làm chậm phản hồi
- Chi phí API tích lũy dần

### Lợi thế của AI offline

| Khía cạnh | AI đám mây | AI local (Ollama) |
|--------|----------|-------------------|
| Quyền riêng tư dữ liệu | Gửi cho bên thứ ba | Không bao giờ rời khỏi máy bạn |
| Cần internet | Có | Không |
| Tốc độ phản hồi | 500ms-2s | 50-500ms (local) |
| Chi phí hàng tháng | $10-20/người dùng | Miễn phí |
| Tùy biến | Hạn chế | Toàn quyền kiểm soát model |
| Tuân thủ | Phức tạp | Trực tiếp, đơn giản |

## Bạn sẽ dựng được gì

Một trợ lý AI hoàn toàn local có thể:
- Trả lời các câu hỏi lập trình
- Giải thích các hàm phức tạp
- Sinh các đoạn code mẫu
- Review pull request
- Tất cả mà không cần kết nối internet

## Điều kiện tiên quyết

### Yêu cầu phần cứng

| Kích thước model | RAM cần thiết | Phù hợp nhất cho |
|------------|--------------|----------|
| 3B tham số | 4GB | Trợ giúp lập trình cơ bản |
| 7B tham số | 8GB | Phát triển tổng quát |
| 13B tham số | 16GB | Suy luận phức tạp |
| 70B tham số | 64GB+ | Cấp doanh nghiệp |

**Khuyến nghị**: 16GB+ RAM để có trợ giúp lập trình đa dụng

### Phần mềm

- FlyEnv đã cài (macOS, Windows hoặc Linux)
- Khoảng 10GB dung lượng đĩa trống cho các model

## Thiết lập từng bước

### Bước 1: Cài Ollama

FlyEnv biến việc này thành một cú nhấp chuột:

1. Mở FlyEnv
2. Đi tới module **Ollama**
3. Nhấp **Install**

![Cài đặt Ollama](https://oss.macphpstudy.com/image/ollama-1.webp)

Ollama được cài như một dịch vụ native—không cần container Docker, không cần cấu hình môi trường Python.

### Bước 2: Khởi động dịch vụ Ollama

Trong module Ollama:

1. Nhấp nút **Start**
2. Xác nhận trạng thái dịch vụ hiển thị "Running"

![Dịch vụ Ollama](https://oss.macphpstudy.com/image/ollama-2.png)

API của Ollama giờ khả dụng tại `http://127.0.0.1:11434`

### Bước 3: Tải các model AI

FlyEnv cung cấp lối truy cập dễ dàng tới các model phổ biến:

| Model | Kích thước | Điểm mạnh |
|-------|------|-----------|
| **DeepSeek-R1** | 7B-70B | Sinh code, suy luận |
| **Llama 3.3** | 8B-70B | Đa mục đích, cân bằng |
| **Qwen 2.5** | 7B-72B | Đa ngôn ngữ, lập trình |
| **Phi-4** | 14B | Model nghiên cứu của Microsoft |
| **Mixtral** | 8x7B | Mixture of experts |

**Để cài một model:**

1. Trong module Ollama, chuyển sang tab **Models**
2. Chọn một model (bắt đầu với 7B nếu RAM 16GB)
3. Nhấp **Pull**

Tiến trình tải xuống hiển thị theo thời gian thực. Lần tải đầu tiên có thể mất 10-30 phút tùy kích thước model và kết nối.

![Cài đặt model](https://oss.macphpstudy.com/image/ollama-3.png)

**Mẹo hay**: Hãy bắt đầu với Qwen 2.5 7B hoặc DeepSeek-R1 7B để có trợ giúp lập trình xuất sắc mà không ngốn quá nhiều tài nguyên.

### Bước 4: Bật giao diện AI Assistant

1. Mở **Settings** của FlyEnv
2. Tìm mục **AI Assistant**
3. Bật công tắc **Enable AI Assistant**

![Cài đặt AI Assistant](https://oss.macphpstudy.com/image/ollama-4.png)

### Bước 5: Mở giao diện chat

Nhấp biểu tượng **AI Assistant** ở góc dưới bên phải:

![Biểu tượng AI Assistant](https://oss.macphpstudy.com/image/ollama-5.png)

Giao diện chat mở ra, sẵn sàng để tương tác.

### Bước 6: Cấu hình kết nối Ollama

Trong panel AI Assistant:

1. Nhấp **Settings** (biểu tượng bánh răng)
2. Đặt API URL: `http://127.0.0.1:11434`
3. Chọn model đã cài từ danh sách thả xuống
4. Nhấp **Save**

![Cấu hình Ollama](https://oss.macphpstudy.com/image/ollama-6.png)

**Thiết lập cho nhóm**: Để dùng chung tài nguyên AI, hãy nhập địa chỉ IP của server Ollama của đồng nghiệp. Một máy trạm mạnh có thể phục vụ cả nhóm.

### Bước 7: Bắt đầu buổi chat đầu tiên

Nhấp **New Chat** và hỏi bất cứ điều gì:

```
You: Explain this PHP function: array_reduce()
AI: array_reduce() iteratively reduces an array to a single value using a callback function...

You: Generate a React component for a modal dialog
AI: [Generates complete, styled component code]
```

![Giao diện chat](https://oss.macphpstudy.com/image/ollama-7.png)

![Giao diện chat 2](https://oss.macphpstudy.com/image/ollama-8.png)

## Dùng AI cho các quy trình phát triển

### Giải thích code

Dán code phức tạp và yêu cầu giải thích:
```
"Explain what this Laravel Eloquent query does..."
"What is the time complexity of this algorithm?"
"How does this recursive function work?"
```

### Sinh code

Sinh code khung sườn một cách nhanh chóng:
```
"Create a NestJS controller for user CRUD operations"
"Write a Python script to parse CSV and insert to MySQL"
"Generate a Docker Compose file for PHP, MySQL, Redis"
```

### Review code

Dán code để nhận phản hồi ngay lập tức:
```
"Review this function for security issues"
"How can I optimize this database query?"
"Is this the idiomatic way to do this in Go?"
```

### Hỗ trợ học tập

```
"Explain React hooks like I'm 5"
"What's the difference between var, let, and const?"
"Teach me about dependency injection in PHP"
```

## Tính năng nâng cao

### Prompt theo vai trò

AI Assistant hỗ trợ nhiều tính cách (persona) khác nhau:

1. Nhấp vào bộ chọn **Role**
2. Chọn từ các mẫu có sẵn:
   - **Code Reviewer**: Phân tích phản biện chất lượng code
   - **Teacher**: Giải thích khái niệm một cách kiên nhẫn
   - **Architect**: Tư vấn thiết kế hệ thống ở tầm cao
   - **Debugger**: Tập trung tìm và sửa lỗi

3. Hoặc tự tạo vai trò tùy chỉnh:
   ```
   Role: Laravel Expert
   Prompt: You are a senior Laravel developer with 10 years experience. 
   Provide best-practice solutions and explain the "Laravel way."
   ```

![Chọn vai trò](https://oss.macphpstudy.com/image/ollama-10.png)

### Các hành động trên phản hồi

Mỗi phản hồi của AI đều có:
- **Copy**: Sao chép các khối code hoặc toàn bộ phản hồi
- **Read Aloud**: Chuyển văn bản thành giọng nói để tăng khả năng tiếp cận
- **Regenerate**: Thử một phản hồi khác
- **Continue**: Mở rộng với các câu trả lời còn dang dở

![Các hành động trên phản hồi](https://oss.macphpstudy.com/image/ollama-9.png)

### So sánh nhiều model

Chạy các model khác nhau cạnh nhau:

1. Mở nhiều tab chat
2. Cấu hình mỗi tab với một model khác nhau
3. Đặt cùng một câu hỏi
4. So sánh các phản hồi

Cách này giúp bạn xác định model nào hoạt động tốt nhất cho tình huống sử dụng cụ thể của mình.

## Tối ưu hiệu năng

### Kích thước model so với chất lượng

| Tình huống | Model khuyến nghị | Thời gian phản hồi |
|----------|------------------|---------------|
| Tra cứu nhanh | Qwen 2.5 3B | <100ms |
| Lập trình hằng ngày | DeepSeek-R1 7B | 200-500ms |
| Kiến trúc phức tạp | Llama 3.3 13B | 500ms-1s |
| Review code | Qwen 2.5 32B | 1-3s |

### Tăng tốc GPU

Trên macOS, Ollama tự động dùng Apple Silicon Neural Engine.

Trên Linux/Windows với GPU NVIDIA:
```bash
# Ollama uses CUDA automatically if available
# Verify GPU usage:
ogpu-smi  # or nvidia-smi
```

### Quản lý model

Giải phóng dung lượng đĩa bằng cách xóa các model không dùng:

```bash
# In terminal
ollama rm llama2:13b  # Remove specific model
ollama list            # See installed models
```

## Câu hỏi thường gặp (FAQ)

**H: Cái này có thực sự hoàn toàn offline không?**

Đ: Có. Khi các model đã được tải xuống, không cần kết nối internet nào. Dữ liệu của bạn không bao giờ rời khỏi máy.

**H: So với GitHub Copilot thì thế nào?**

Đ: Copilot có tích hợp IDE và được huấn luyện trên code công khai. AI local mang lại quyền riêng tư và chi phí bằng không. Nhiều lập trình viên dùng cả hai: Copilot cho dự án công khai, AI local cho công việc độc quyền.

**H: Tôi có thể dùng các model fine-tune của riêng mình không?**

Đ: Có. Ollama hỗ trợ các model định dạng GGUF. Hãy đặt chúng vào thư mục models của Ollama.

**H: Vì sao chất lượng phản hồi thấp hơn ChatGPT?**

Đ: Các model local 7B nhỏ hơn GPT-4. Với tác vụ lập trình, chúng lại đáng ngạc nhiên là khá giỏi. Với suy luận phức tạp, các model lớn hơn (13B-70B) thu hẹp khoảng cách đáng kể.

**H: AI có thể truy cập các tệp dự án của tôi không?**

Đ: Không tự động. Bạn dán code vào khung chat. Các phiên bản FlyEnv tương lai có thể bổ sung tích hợp IDE.

**H: Cái này có hợp pháp cho mục đích thương mại không?**

Đ: Có. Các model như Llama, Qwen và DeepSeek có giấy phép mở cho các ứng dụng thương mại.

**H: Cái này tốn bao nhiêu điện?**

Đ: Rất ít. Suy luận bằng CPU dùng khoảng ~10-30W. Suy luận bằng GPU dùng 50-150W và chỉ khi đang hoạt động.

## Quy trình phát triển ưu tiên quyền riêng tư

1. **Code độc quyền**: Chỉ dùng AI local
2. **Dự án mã nguồn mở**: Dùng cái nào cũng được
3. **Công việc cho khách hàng**: Luôn dùng AI local với code của họ
4. **Học tập**: AI local cho tài liệu và hướng dẫn

## Sẵn sàng lập trình với AI bảo mật dữ liệu?

Hãy kiểm soát dữ liệu phát triển của mình. Thiết lập trợ lý AI offline trong vài phút.

[Tải xuống FlyEnv](/vi/download) với hỗ trợ Ollama tích hợp sẵn

---

## 🚀 Tầng cao hơn: Từ chat đến tự động hóa

Bạn đang hài lòng với trợ lý AI riêng tư của mình? Đưa nó xa hơn bằng cách dựng các **quy trình AI tự động** chạy 24/7 mà không cần bạn can thiệp.

**Bạn sẽ có được:**
- **Webhooks** — Kích hoạt xử lý AI từ các ứng dụng bên ngoài (Slack, GitHub, Stripe)
- **Tự động hóa quy trình** — Xích nhiều hành động AI thành pipeline
- **API endpoints** — Cho các ứng dụng của bạn truy cập các model AI local
- **Truy cập từ xa** — Điều khiển các quy trình AI của bạn từ bất cứ đâu

👉 **[Dựng quy trình AI tự lưu trữ với n8n & Ollama](/vi/guide/build-local-ai-workflow-by-n8n)** — Biến AI offline của bạn thành một cỗ máy tự động hóa

---

## 🤖 Dựng AI Agent biết hành động

Bạn muốn một AI không chỉ biết chat—mà còn thực sự **làm được việc** giúp bạn? OpenClaw kết nối AI local của bạn với các ứng dụng nhắn tin và trao cho nó năng lực:

- **Đọc/ghi tệp** trên máy tính của bạn
- **Thực thi lệnh** và chạy script
- **Gửi tin nhắn** qua WhatsApp, Telegram, Discord
- **Gửi yêu cầu HTTP** và tương tác với API

👉 **[Hướng dẫn thiết lập OpenClaw + Ollama](/vi/guide/openclaw)** — Dựng một AI agent tự lưu trữ quanh một model local

---

Khám phá thêm các công cụ năng suất:
- [PHP Code Obfuscation](/vi/guide/php-code-obfuscation) — Bảo vệ code của bạn
- [Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) — Chia sẻ an toàn
- [Quản lý phiên bản dự án](/vi/guide/manage-multiple-node-php-versions) — Quy trình tinh gọn
