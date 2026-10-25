---
title: 'Chạy OpenClaw với Ollama tại local'
head:
  - - meta
    - name: description
      content: 'Thiết lập OpenClaw với Ollama trong FlyEnv, kết nối các kênh nhắn tin đã chọn, và giữ việc thực thi mô hình trên phần cứng bạn kiểm soát.'
---

# Hướng dẫn thiết lập OpenClaw + Ollama cho một AI agent tự host

Hãy tưởng tượng có một trợ lý AI làm được nhiều hơn là trò chuyện. Nó có thể đọc các tệp được cấp quyền, thực thi lệnh, và kết nối tới các nền tảng nhắn tin như WhatsApp hay Telegram. Với một mô hình Ollama chạy local, việc suy luận có thể nằm hoàn toàn trên máy của bạn và tránh các khoản phí API mô hình tính theo từng yêu cầu; các nền tảng được kết nối và công cụ bên thứ ba vẫn có điều khoản riêng về quyền riêng tư và giá cả.

Đó chính xác là những gì **OpenClaw** mang lại. Khác với ChatGPT hay các công cụ AI đám mây khác vốn chỉ đơn thuần phản hồi prompt, OpenClaw là một **framework AI agent** hoàn chỉnh, có thể thực hiện các hành động thật trên máy tính của bạn. Kết hợp với **Ollama** để chạy LLM local, bạn có được một hệ thống tự động hóa mạnh mẽ hoạt động hoàn toàn ngoại tuyến.

Trong hướng dẫn này, bạn sẽ học cách xây dựng hệ thống này bằng **FlyEnv**—cách nhanh nhất để đưa OpenClaw và Ollama vào chạy mà không cần các thiết lập Docker phức tạp hay cấu hình thủ công.

## Bạn sẽ xây dựng được gì

Khi kết thúc hướng dẫn này, bạn sẽ có:

- Một gateway AI agent tự host chạy trên máy của bạn
- Tích hợp với các ứng dụng nhắn tin (WhatsApp, Telegram, Discord, iMessage và nhiều hơn nữa)
- Xử lý LLM local qua Ollama—không cần API key, không giới hạn sử dụng
- Một agent có thể đọc/ghi tệp, thực thi lệnh, và tự động hóa các tác vụ
- Việc thực thi mô hình local có thể giữ các prompt nằm trên phần cứng của bạn khi không bật tích hợp nào dựa trên đám mây

![Bảng điều khiển OpenClaw](https://oss.macphpstudy.com/image/openclaw-1.webp)

## OpenClaw là gì?

OpenClaw là một **gateway mã nguồn mở, tự host** kết nối các ứng dụng nhắn tin của bạn với các AI coding agent. Hãy nghĩ về nó như một cây cầu nối giữa nơi bạn giao tiếp (WhatsApp, Telegram, v.v.) và một AI có thể thực sự thực hiện các tác vụ.

### Các năng lực chính

| Tính năng | Mô tả |
|---------|-------------|
| **Multi-Channel** | Kết nối WhatsApp, Telegram, Discord, iMessage, Slack đồng thời |
| **Tool Use** | Đọc/ghi tệp, thực thi lệnh shell, gửi yêu cầu HTTP |
| **Session Management** | Hội thoại liên tục với ngữ cảnh được giữ xuyên suốt các phiên |
| **Memory** | Agent ghi nhớ các tương tác và sở thích trước đó |
| **Multi-Agent Routing** | Định tuyến các tác vụ khác nhau tới các agent chuyên biệt |

### OpenClaw so với ChatGPT

| Năng lực | ChatGPT | OpenClaw + Ollama |
|------------|---------|-------------------|
| **Thực thi hành động** | Chỉ văn bản | Tệp, lệnh, tin nhắn |
| **Tích hợp nhắn tin** | Không có | WhatsApp, Telegram, Discord, v.v. |
| **Quyền riêng tư dữ liệu** | Xử lý trên đám mây | 100% local |
| **Chi phí API** | Phí theo token | Bằng không (sau khi thiết lập) |
| **Dùng ngoại tuyến** | Không | Có |

## Yêu cầu tiên quyết

Trước khi bắt đầu, hãy bảo đảm bạn có:

- **FlyEnv** đã cài đặt ([Tải xuống tại đây](/vi/download))
- **RAM 8GB trở lên** (khuyến nghị 16GB cho các mô hình lớn hơn)
- Khoảng 10GB dung lượng đĩa trống để lưu trữ mô hình
- Một tài khoản ứng dụng nhắn tin (WhatsApp, Telegram, hoặc Discord)

## Bước 1: Cài đặt Node.js 24

OpenClaw yêu cầu **Node.js 24** (hoặc Node.js 22 LTS `22.16+` để đảm bảo tương thích).

1. Mở **FlyEnv** và chuyển tới phần **Node.js**
2. Chọn **Node.js 24** từ danh sách phiên bản (khuyến nghị)
3. Nhấp **Install** và chờ hoàn tất
4. Đặt Node.js 24 làm phiên bản đang hoạt động

> **Lợi thế của FlyEnv:** Khác với việc cài Node.js thủ công, FlyEnv tự động xử lý cấu hình PATH và chuyển đổi phiên bản. Không còn các lỗi `command not found`.

![Cài đặt Node.js](https://oss.macphpstudy.com/image/openclaw-2.webp)

## Bước 2: Cài đặt Ollama

Ollama vận hành bộ não AI của agent OpenClaw của bạn.

1. Trong FlyEnv, mở phần **Library/Tools**
2. Tìm **Ollama** trong danh sách các ứng dụng khả dụng
3. Nhấp **Install**—FlyEnv tự động xử lý mọi phụ thuộc
4. Khởi động dịch vụ Ollama

![Cài đặt Ollama](https://oss.macphpstudy.com/image/openclaw-3.webp)

## Bước 3: Tải xuống một mô hình AI

Chọn mô hình dựa trên khả năng phần cứng của bạn:

### Với hệ thống RAM 8-16GB

| Mô hình | Kích thước | Phù hợp nhất cho |
|-------|------|----------|
| `qwen2.5-coder:7b` | ~4GB | Sinh mã, tác vụ kỹ thuật |
| `llama3.2` | ~4GB | Đa mục đích, suy luận |
| `deepseek-r1:7b` | ~4GB | Suy luận từng bước |

### Với hệ thống RAM 16GB+ hoặc có GPU

| Mô hình | Kích thước | Phù hợp nhất cho |
|-------|------|----------|
| `qwen2.5-coder:32b` | ~20GB | Lập trình phức tạp, ngữ cảnh lớn |
| `gpt-oss:20b` | ~12GB | Sử dụng công cụ, tác vụ agent |
| `glm-4.7-flash` | ~25GB | Suy luận nâng cao |

### Tải xuống qua FlyEnv

1. Chuyển tới **Ollama Models** trong FlyEnv
2. Chọn mô hình bạn muốn từ danh sách
3. Nhấp **Download** và chờ hoàn tất

> **Khuyến nghị:** Bắt đầu với `qwen2.5-coder:7b` để thử nghiệm. Nó nhanh, đủ khả năng, và chạy tốt trên đa số hệ thống.

![Tải xuống mô hình](https://oss.macphpstudy.com/image/openclaw-4.webp)

## Bước 4: Cài đặt OpenClaw

Giờ hãy cài đặt gateway kết nối tất cả lại với nhau:

1. Trong **Library** của FlyEnv, tìm **OpenClaw**
2. Nhấp **Install** và làm theo các hướng dẫn
3. Sau khi cài xong, nhấp **Start** để khởi chạy gateway

OpenClaw sẽ khởi chạy một gateway local (mặc định: `http://127.0.0.1:18789/`) và mở Control UI trong trình duyệt của bạn.

![OpenClaw Gateway](https://oss.macphpstudy.com/image/openclaw-5.webp)

## Bước 5: Cấu hình OpenClaw để dùng Ollama

### Trình hướng dẫn thiết lập ban đầu

Khi lần đầu mở OpenClaw, bạn sẽ thấy một cảnh báo bảo mật—**hãy đọc kỹ**. Khác với các chatbot đơn giản, OpenClaw có thể:

- Đọc và ghi tệp trên máy tính của bạn
- Thực thi các lệnh hệ thống
- Gửi tin nhắn thay bạn
- Gửi các yêu cầu web

Quyền năng này đòi hỏi cấu hình có trách nhiệm.

### Các bước cấu hình

1. **Chọn Quick Start** (khuyến nghị cho người mới bắt đầu)
2. **Chọn AI Provider:** Chọn **Ollama** hoặc **Local / Self-Hosted**
3. **Nhập API Endpoint:** `http://localhost:11434`
4. **Chọn mô hình của bạn:** Chọn mô hình đã tải xuống (ví dụ: `qwen2.5-coder:7b`)
5. **Hoàn tất thiết lập**

### Xác minh cấu hình

Tệp cấu hình của bạn được lưu tại `~/.openclaw/openclaw.json`. Một thiết lập cơ bản trông như sau:

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

![Cấu hình](https://oss.macphpstudy.com/image/openclaw-6.webp)

## Bước 6: Kết nối các ứng dụng nhắn tin

Giờ hãy kết nối các nền tảng nhắn tin yêu thích của bạn để điều khiển agent từ xa:

### Tùy chọn A: WhatsApp

```bash
openclaw configure --section channels
```

Chọn WhatsApp và quét mã QR bằng điện thoại của bạn.

### Tùy chọn B: Telegram

1. Tạo một bot qua [@BotFather](https://t.me/botfather)
2. Thêm token của bot vào cấu hình OpenClaw
3. Bắt đầu trò chuyện với bot của bạn

### Tùy chọn C: Discord

1. Tạo một ứng dụng Discord
2. Thêm token của bot vào OpenClaw
3. Mời bot vào server của bạn

> **Mẹo bảo mật:** Bắt đầu với whitelist **allowFrom** để giới hạn những ai có thể tương tác với agent của bạn:

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

## Bước 7: Kiểm thử AI agent của bạn

Gửi lệnh đầu tiên qua ứng dụng nhắn tin đã kết nối:

### Các lệnh ví dụ

| Lệnh | Tác dụng |
|---------|--------------|
| `Read the file ~/Documents/notes.txt` | Đọc và tóm tắt tệp |
| `Create a Python script that calculates fibonacci numbers` | Ghi code vào tệp |
| `List files in the current directory` | Thực thi lệnh shell |
| `Send an email to team@example.com about the project update` | Soạn và gửi email |

### Từ terminal

Bạn cũng có thể tương tác qua TUI (Terminal User Interface) tích hợp sẵn:

```bash
openclaw
```

Hoặc dùng web dashboard tại `http://127.0.0.1:18789/`

![Tương tác với agent ]

## Nâng cao: Thiết lập hybrid đám mây + local

Với các tác vụ phức tạp, hãy kết hợp mô hình local và đám mây:

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

- **Mô hình local:** Xử lý đọc tệp, chỉnh sửa đơn giản, tác vụ thường ngày (tiết kiệm chi phí API)
- **Mô hình đám mây:** Xử lý debug, kiến trúc, suy luận phức tạp (dùng tiết kiệm)

Cách tiếp cận hybrid này có thể giảm hóa đơn API từ $20-50/ngày xuống còn $2-5/ngày.

## Khắc phục sự cố

| Sự cố | Giải pháp |
|-------|----------|
| **Mô hình tải chậm hoặc crash** | Hết bộ nhớ. Dùng bản lượng tử hóa nhỏ hơn: `qwen2.5-coder:7b-q4_K_M` |
| **Lời gọi công cụ thất bại** | Đặt `"reasoning": false` trong cấu hình. Một số mô hình local gặp khó với định dạng tool |
| **Lỗi context window** | Mô hình local có context nhỏ hơn. Đặt `contextWindow` chính xác trong cấu hình |
| **Không kết nối được tới Ollama** | Xác minh Ollama đang chạy: `curl http://localhost:11434/api/tags` |
| **Không nhận được tin nhắn** | Kiểm tra cấu hình kênh và quyền |

## Thực hành bảo mật tốt nhất

⚠️ **OpenClaw được thiết kế chủ đích để mạnh mẽ và cấp quyền rộng rãi.**

1. **Chạy trong môi trường cô lập** khi có thể
2. **Dùng whitelist allowFrom** để giới hạn nguồn tin nhắn
3. **Xem xét các skill bên thứ ba** trước khi bật
4. **Yêu cầu mention trong group chat** để tránh kích hoạt ngoài ý muốn
5. **Thường xuyên kiểm tra quyền hệ thống tệp**

## Video hướng dẫn

Thích xem? Hãy xem Build a 100% Local AI Agent: OpenClaw + Ollama Setup via FlyEnv In 5 Minutes:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/j7_B-VzIyEU?si=20WeZTZMPIAYcXpJ" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Câu hỏi thường gặp (FAQ)

### H: OpenClaw có miễn phí sau khi thiết lập không?

**Đ:** Có. OpenClaw là mã nguồn mở (giấy phép MIT), và Ollama chạy mô hình tại local. Sau khi cấu hình, sẽ **không có phí API phát sinh** hay giới hạn sử dụng. Chi phí duy nhất của bạn là điện năng để chạy máy tính.

### H: Dữ liệu của tôi có rời khỏi máy không?

**Đ:** Không. Khi dùng OpenClaw + Ollama, toàn bộ xử lý diễn ra **tại local**. Tin nhắn, tệp, và dữ liệu của bạn không bao giờ rời khỏi phần cứng của bạn trừ khi bạn chủ động bật các tích hợp đám mây.

### H: Tôi cần phần cứng nào?

**Đ:** Tối thiểu 8GB RAM cho các mô hình nhỏ (tham số 7B). Để sử dụng thoải mái:
- **Cơ bản:** 8GB RAM + CPU (mô hình 7B)
- **Khuyến nghị:** 16GB RAM + GPU (mô hình 13B)
- **Người dùng cao cấp:** 32GB+ RAM + GPU mạnh (mô hình 32B+)

### H: Tôi có thể dùng mô hình đám mây nếu cần không?

**Đ:** Có. OpenClaw hỗ trợ các thiết lập hybrid. Bạn có thể đặt mô hình local làm mặc định và chuyển sang các nhà cung cấp đám mây (Anthropic, OpenAI, v.v.) cho những tác vụ cụ thể đòi hỏi năng lực cao hơn.

### H: So với ChatGPT có plugin thì thế nào?

**Đ:** Các trợ lý đám mây xử lý yêu cầu trên hạ tầng từ xa. OpenClaw có thể chạy trên phần cứng của bạn với quyền truy cập trực tiếp vào các tài nguyên local được phép và có thể hoạt động ngoại tuyến với một mô hình local. Quyền riêng tư vẫn phụ thuộc vào những kênh nhắn tin, API, và tích hợp nào bạn bật, và việc thiết lập đòi hỏi nhiều thao tác quản trị hơn.

### H: Cái này có phù hợp cho mục đích doanh nghiệp không?

**Đ:** OpenClaw hiện là **phần mềm thử nghiệm**. Dù mạnh mẽ, nó thiếu các cơ chế bảo vệ cấp doanh nghiệp. Nó phù hợp nhất cho sử dụng cá nhân, môi trường phát triển, hoặc các kịch bản được kiểm soát chặt chẽ mà bạn hiểu và chấp nhận các hàm ý bảo mật.

## Bước tiếp theo

Giờ khi bạn đã có một AI agent tự host đang chạy:

- **[Thiết lập kiểm thử email local với Mailpit](/vi/guide/local-email-testing-mailpit)** - Kiểm thử các quy trình tự động hóa email
- **[Mở localhost ra ngoài với Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development)** - Truy cập agent của bạn từ xa ở bất cứ đâu
- **[Xây dựng thêm các AI agent](/vi/guide/build-local-offline-ai-agent)** - Khám phá các công cụ AI khác trong hệ sinh thái FlyEnv

---

**Sẵn sàng xây dựng AI agent cá nhân của bạn?** [Tải xuống FlyEnv](/vi/download) và bắt đầu với một mô hình local, rồi chỉ thêm những kênh nhắn tin và tích hợp bạn cần.
