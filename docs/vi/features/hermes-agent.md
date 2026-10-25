---
layout: doc
titleTemplate: false
title: 'Gateway, Skills và Sessions của Hermes Agent | FlyEnv'
description: 'Cài Hermes, quản lý gateway, duyệt và cài Skills từ nhiều nguồn, và quản lý các session.'
head:
  - - meta
    - name: description
      content: 'Cài Hermes, quản lý gateway, duyệt và cài Skills từ nhiều nguồn, và quản lý các session.'
  - - meta
    - property: og:title
      content: 'Gateway, Skills và Sessions của Hermes Agent | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài Hermes, quản lý gateway, duyệt và cài Skills từ nhiều nguồn, và quản lý các session.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/hermes-agent
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/hermes-agent
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Hermes Agent trong FlyEnv

Hermes là một AI agent tự chủ mã nguồn mở đến từ Nous Research: một agent vận hành qua terminal với tiến trình gateway riêng, một hệ thống skill có thể mở rộng và các session bền vững. FlyEnv bọc CLI của Hermes agent trong một module chuyên dụng: cài đặt một lần qua script chính thức, kiểm soát khởi động/dừng gateway của Hermes, chỉnh sửa trực tiếp các tệp cấu hình của nó, một trình quản lý Skills với duyệt trực tuyến qua nhiều nguồn, và một khung xem Sessions với tính năng dọn dẹp. Module được tổ chức thành năm tab — Service, Config File, Log, Skills và Sessions. Để xem FlyEnv nói chung hòa vào các quy trình làm việc có AI hỗ trợ thế nào, xem [FlyEnv làm việc với AI](/vi/guide/flyenv-work-with-ai). Kết hợp Hermes với một runtime mô hình local như [Ollama](/vi/features/ollama) — như được minh họa trong [hướng dẫn AI agent offline local](/vi/guide/build-local-offline-ai-agent) — để chạy toàn bộ stack mà không cần mô hình trên cloud.

![Tổng quan module Hermes của FlyEnv với các tab Service, Config File, Log, Skills và Sessions](https://oss.macphpstudy.com/image/features/hermes-agent-1.webp)

## Cài đặt

Hermes được cài từ script của nhà cung cấp, được thực thi trong terminal nhúng của FlyEnv để bạn thấy đầu ra thật trong khi nó chạy.

- **Một lệnh cho mỗi nền tảng:** trên macOS và Linux, FlyEnv chạy `curl -fsSL https://hermes-agent.nousresearch.com/install.sh | bash`; trên Windows nó chạy bản PowerShell tương đương `irm .../install.ps1 | iex`.
- **Không có trình quản lý phiên bản:** không có danh sách phiên bản trực tuyến và không có chuyển đổi phiên bản song song cho Hermes. Sau khi cài, tab Service hiển thị phiên bản được phát hiện.
- **Nền tảng được hỗ trợ:** Hermes có thể cài trên macOS, Windows và Linux — cũng là các nền tảng FlyEnv phát hành, xem [trang tải xuống](/vi/download).

## Quản lý gateway

Công tắc ở thanh bên của module Hermes — và các nút điều khiển trên tab Service — điều khiển trực tiếp gateway của Hermes thông qua CLI.

- **Khởi động và dừng:** FlyEnv chạy `hermes gateway start` và `hermes gateway stop` khi bạn gạt công tắc.
- **Trạng thái trực tiếp:** tab Service hiển thị phiên bản đã cài cùng trạng thái gateway, được phân tích từ đầu ra của `hermes gateway status`.
- **Bảng lệnh:** tab Service còn cung cấp một bảng lệnh phân loại với khoảng 78 lệnh Hermes chia theo 12 nhóm — chat/session, gateway, config, xác thực model, skills/plugins, memory/tools, MCP, system/logs, backup/update, dashboard/TUI và profile — mỗi lệnh được thực thi trong terminal nhúng. Nhóm MCP kết hợp tốt với [MCP Server](/vi/features/mcp-server) của chính FlyEnv, công cụ phơi bày các dịch vụ local của bạn cho các agent hỗ trợ MCP.

![Tab Service của Hermes với phiên bản, trạng thái gateway và bảng lệnh phân loại](https://oss.macphpstudy.com/image/features/hermes-agent-2.webp)

## Cấu hình

Tab Config File mở các tệp cấu hình Hermes từ thư mục home của bạn trong các trình chỉnh sửa thô, mỗi tệp có tô sáng cú pháp khớp với loại tệp.

- **`~/.hermes/config.yaml`:** cấu hình chính của Hermes, chỉnh dưới dạng YAML.
- **`~/.hermes/.env`:** biến môi trường cho agent, chỉnh dưới dạng tệp env.
- **`~/.hermes/SOUL.md`:** tệp nhân cách (persona) của agent, chỉnh dưới dạng Markdown.

![Chỉnh sửa ~/.hermes/config.yaml trong trình chỉnh sửa cấu hình của FlyEnv](https://oss.macphpstudy.com/image/features/hermes-agent-3.webp)

## Skills

Tab Skills quản lý các skill của agent cả local lẫn trực tuyến.

- **Skills đã cài:** bật hoặc tắt một skill bằng công tắc — việc tắt sẽ ghi mục này vào `skills.disabled` trong `config.yaml` — và cập nhật, gỡ cài đặt hay đặt lại các skill từ cùng danh sách đó.
- **Kiểm tra và định vị:** một hộp thoại kiểm tra hiển thị chi tiết của một skill, và một cú nhấp mở thư mục skills trong trình quản lý tệp của bạn.
- **Duyệt trực tuyến:** duyệt skill trực tuyến với phân trang và tìm kiếm theo từ khóa trên sáu nguồn — nguồn chính thức, skills.sh, well-known, GitHub, ClawHub và LobeHub — rồi cài những skill bạn muốn.

![Duyệt skill Hermes trực tuyến trên nhiều nguồn với tìm kiếm](https://oss.macphpstudy.com/image/features/hermes-agent-4.webp)

## Sessions

Tab Sessions liệt kê các session do `hermes sessions list` báo cáo, được phân tích thành một bảng bên trong FlyEnv. Xóa một session sẽ chạy lệnh tương ứng trong terminal nhúng, nhờ đó thao tác và kết quả của nó luôn hiển thị rõ.

![Tab Sessions của Hermes liệt kê các session với các thao tác xóa](https://oss.macphpstudy.com/image/features/hermes-agent-5.webp)

## Log

Tab Log đọc trực tiếp các tệp dưới `~/.hermes/logs/`, với một trình xem cho mỗi tệp `*.log`. Khi một tệp log không khả dụng trên đĩa, FlyEnv sẽ chuyển sang dùng `hermes logs <type> -n <lines>` để lấy đầu ra gần đây từ CLI.

<FeatureRelatedLinks locale="vi" slug="hermes-agent" />

## Lưu ý tương thích

Hermes không phải một dịch vụ nền do FlyEnv quản lý: module không đăng ký daemon hay tiến trình tray nào, và công tắc ở thanh bên chỉ điều khiển gateway thông qua CLI `hermes`. Cài đặt là một lần chạy duy nhất script chính thức của nhà cung cấp trong terminal nhúng — shell script trên macOS và Linux, PowerShell trên Windows — và FlyEnv không cung cấp danh sách phiên bản hay quản lý đa phiên bản cho nó. Cấu hình, log và skills đều nằm dưới `~/.hermes` trong thư mục home của bạn và thuộc về chính agent; FlyEnv chỉnh và hiển thị các tệp đó nhưng không định nghĩa schema của chúng. Những nền tảng và bản phát hành đang được cung cấp được phản ánh trên [trang tải xuống](/vi/download) và trong chính ứng dụng. FlyEnv quản lý một trợ lý cá nhân dựa trên gateway khác theo cùng cách — xem module [OpenClaw](/vi/features/openclaw).
