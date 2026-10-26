---
layout: doc
titleTemplate: false
title: 'Trình quản lý Codex CLI: Phiên, Plugins và MCP | FlyEnv'
description: 'Cài đặt Codex, chỉnh sửa config.toml trực quan, tiếp tục phiên, và quản lý plugins cùng MCP server ngay từ FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt Codex, chỉnh sửa config.toml trực quan, tiếp tục phiên, và quản lý plugins cùng MCP server ngay từ FlyEnv.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Codex CLI: Phiên, Plugins và MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt Codex, chỉnh sửa config.toml trực quan, tiếp tục phiên, và quản lý plugins cùng MCP server ngay từ FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/codex
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/codex
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Codex CLI trong FlyEnv

Codex là coding agent mã nguồn mở của OpenAI dành cho terminal — nó nhận các tác vụ bằng ngôn ngữ tự nhiên và chỉnh sửa, chạy cùng review code bên trong các dự án của bạn. FlyEnv mang đến cho Codex CLI một console quản lý: cài đặt một cú nhấp thông qua script thiết lập chính thức, form trực quan cho `config.toml`, bảng Sessions có thể tiếp tục các hội thoại trước đó trong terminal của bạn, cộng thêm quản lý plugin và MCP server. Để có bức tranh tổng thể về việc điều khiển các trợ lý AI từ FlyEnv, xem [cách FlyEnv làm việc với AI](/vi/guide/flyenv-work-with-ai).

![Tổng quan module Codex của FlyEnv](https://oss.macphpstudy.com/image/features/codex-1.webp)

## Cài đặt

Codex là một client dòng lệnh, không phải dịch vụ chạy nền — FlyEnv không khởi động, dừng hay daemonize nó, và không có port hay tiến trình nào cần theo dõi. Tab **Service** cho biết Codex đã được cài hay chưa và phiên bản nào đang có trên máy của bạn.

- **Script cài đặt chính thức, chạy giúp bạn:** việc cài đặt là một thao tác thực hiện một lần, chạy script của chính nhà phát triển — `curl -fsSL https://chatgpt.com/codex/install.sh | sh` trên macOS và Linux, `irm https://chatgpt.com/codex/install.ps1 | iex` trên Windows — bên trong terminal tích hợp của FlyEnv, nên bạn theo dõi được đầu ra thực tế. Môi trường proxy của FlyEnv được áp dụng cho việc cài đặt một cách tự động.
- **Tự động phát hiện:** FlyEnv tìm binary `codex` trên `PATH` của bạn và ở các vị trí cài phổ biến (Homebrew và các thư mục bin chuẩn, các gói toàn cục npm/yarn/pnpm/bun trên macOS và Linux; các vị trí npm và WinGet trên Windows), nhờ đó một bản cài bạn đã có sẽ hiển thị mà không cần cài lại.
- **Bảng cheat lệnh:** một bảng tra cứu các lệnh hàng ngày có thể sao chép vào clipboard — `codex exec`, `codex review`, `codex login` và nhiều lệnh khác — được tích hợp ngay trong trang.

## Cấu hình

Tab **Config File** chỉnh sửa trực tiếp cấu hình của Codex; sau đó không cần khởi động lại gì cả.

- **Form trực quan cho `config.toml`:** điều chỉnh `~/.codex/config.toml` qua form thay vì tự viết TOML — model, `model_reasoning_effort`, `approval_policy` và `sandbox_mode` đều là các trường có thể chỉnh sửa.
- **Trình soạn thảo raw:** toàn bộ nguồn `config.toml` và `auth.json` đều chỉnh được như văn bản thuần cho những gì form không bao phủ.
- **Tôn trọng thư mục home tùy chỉnh:** nếu bạn trỏ Codex đến nơi khác bằng `CODEX_HOME`, FlyEnv sẽ đọc và ghi cấu hình từ vị trí đó thay thế.

![Form config.toml trực quan cho Codex](https://oss.macphpstudy.com/image/features/codex-2.webp)

## Phiên

Tab **Sessions** đọc lịch sử của Codex từ các tệp `.jsonl` phân theo ngày dưới `~/.codex/sessions/` và nhóm chúng theo thư mục làm việc, nhờ đó hội thoại của từng dự án luôn ở cùng nhau.

- **Tiếp tục từ nơi bạn dừng lại:** chọn một phiên và FlyEnv mở terminal hệ thống của bạn trong thư mục của phiên đó với `codex resume <id>` — hoặc quay thẳng vào hội thoại mới nhất với `codex resume --last`.
- **Bắt đầu hội thoại mới:** chạy `codex` cho bất kỳ thư mục làm việc nào được liệt kê ngay từ cùng bảng đó.
- **Dọn dẹp:** xóa các phiên cũ khỏi danh sách khi bạn không còn cần đến chúng.

Các phiên luôn chạy trong một cửa sổ terminal hệ thống bên ngoài, không bao giờ bên trong chính FlyEnv — FlyEnv chuẩn bị lệnh và thư mục làm việc, sau đó trao cuộc hội thoại cho terminal của bạn.

![Bảng Codex Sessions được nhóm theo dự án](https://oss.macphpstudy.com/image/features/codex-3.webp)

## Plugins

Tab **Plugins** hiển thị các plugin mà Codex báo cáo, liệt kê cả các mục khả dụng lẫn đã cài qua `codex plugin list --available --json`. Từ cùng tab đó, bạn có thể cài plugin trong terminal tích hợp và quản lý những plugin đã cài. Khác với một marketplace plugin đầy đủ, Codex không cung cấp nguồn marketplace nào để thêm hay xóa, nên FlyEnv quản lý plugin trực tiếp với CLI.

![Quản lý Plugins của Codex](https://oss.macphpstudy.com/image/features/codex-4.webp)

## MCP server

Tab **MCP** quản lý các Model Context Protocol server mà Codex có thể gọi, với các thao tác liệt kê, thêm và xóa — xem [hướng dẫn MCP và AI workspace](/vi/guide/ai-coding-workspace-mcp) để biết cách các MCP server cắm công cụ AI coding vào môi trường local của bạn.

- **Được ghi vào `config.toml`:** các MCP server HTTP bạn thêm được lưu dưới `mcp_servers` trong `~/.codex/config.toml`, giữ mọi thứ trong một tệp cấu hình duy nhất.
- **Client từ xa được bật tự động:** việc thêm một server HTTP cũng bật luôn `features.rmcp_client = true` để Codex có thể chạm tới các MCP endpoint từ xa.
- **Đăng ký FlyEnv chỉ với một cú nhấp:** [MCP Server](/vi/features/mcp-server) của chính FlyEnv có thể tự đăng ký vào danh sách này từ tab Client Config của nó.

![Quản lý MCP server của Codex](https://oss.macphpstudy.com/image/features/codex-5.webp)

<FeatureRelatedLinks locale="vi" slug="codex" />

## Ghi chú tương thích

Codex chạy như một CLI tương tác trong terminal của riêng bạn; FlyEnv quản lý việc cài đặt, cấu hình, lịch sử phiên, plugin và MCP server của nó, nhưng bản thân các cuộc hội thoại luôn diễn ra trong terminal hệ thống bên ngoài, trên mọi nền tảng được hỗ trợ. Việc cài đặt dùng script chính thức của nhà phát triển, nên cái gì được cài — và việc cài có thành công hay không — phụ thuộc vào script đó và mạng của bạn. Phạm vi phát hiện bao phủ `PATH` cùng các vị trí cài phổ biến; một binary đặt ở vị trí bất thường có thể cần được cài theo cách chuẩn trước. Không có quản lý đa phiên bản cho Codex, và các đường dẫn cấu hình nêu trên tuân theo `CODEX_HOME` khi nó được đặt. Để biết các nền tảng mà chính FlyEnv hỗ trợ, xem [trang Tải xuống](/vi/download). FlyEnv quản lý các AI coding CLI khác theo cùng cách — xem các module [Claude Code](/vi/features/claude-code) và [Kimi](/vi/features/kimi).
