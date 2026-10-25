---
layout: doc
titleTemplate: false
title: 'Trình quản lý Kimi CLI: Sessions, Log và MCP | FlyEnv'
description: 'Cài Kimi CLI, chỉnh cấu hình bằng biểu mẫu trực quan, tiếp tục và xuất session, đọc log và quản lý các MCP server.'
head:
  - - meta
    - name: description
      content: 'Cài Kimi CLI, chỉnh cấu hình bằng biểu mẫu trực quan, tiếp tục và xuất session, đọc log và quản lý các MCP server.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Kimi CLI: Sessions, Log và MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài Kimi CLI, chỉnh cấu hình bằng biểu mẫu trực quan, tiếp tục và xuất session, đọc log và quản lý các MCP server.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/kimi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/kimi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Kimi CLI trong FlyEnv

Kimi là coding agent dòng lệnh của Moonshot AI, được vận hành bởi các mô hình Kimi. FlyEnv dành cho coding CLI của Kimi một trang quản lý riêng: cài từ thẻ Service, chỉnh `config.toml` qua một biểu mẫu trực quan, tiếp tục hay xuất các Session đã qua, đọc chính các tệp log của Kimi mà không cần rời khỏi ứng dụng, và quản lý các MCP server HTTP/SSE. Đây là một trong số các AI coding client mà FlyEnv quản lý — cùng với [Claude Code](/vi/features/claude-code) và [OpenCode](/vi/features/opencode) — và [hướng dẫn quy trình làm việc với trợ lý AI](/vi/guide/flyenv-work-with-ai) cho thấy các module này hòa vào việc phát triển hằng ngày ra sao.

![Module Kimi của FlyEnv với các tab Service, Config File, Log, Sessions và MCP](https://oss.macphpstudy.com/image/features/kimi-1.webp)

## Cài đặt

Kimi không phải một dịch vụ nền — không có daemon nào để khởi động hay dừng, và không có trình quản lý phiên bản. Module phát hiện bản cài có sẵn trên PATH của bạn và ở các vị trí cài thường gặp, rồi hiển thị phiên bản được phát hiện trên thẻ Service.

- **Cài đặt một cú nhấp:** FlyEnv chạy script cài đặt chính thức trong terminal nhúng của nó, để bạn theo dõi đầu ra thật ngay khi diễn ra — `curl -fsSL https://code.kimi.com/kimi-code/install.sh | bash` trên macOS và Linux, `irm https://code.kimi.com/kimi-code/install.ps1 | iex` trên Windows.
- **Bảng ghi nhanh lệnh:** thẻ Service cung cấp các lệnh nhanh có thể sao chép như `kimi --plan`, `kimi --yolo`, `kimi vis` và `kimi provider list/add/remove`, nhờ đó các cách gọi thường dùng luôn cách bạn một cú nhấp.
- **Khởi chạy từ FlyEnv:** các session mở trong terminal hệ thống bên ngoài của bạn — FlyEnv trao `kimi`, `kimi --session "<id>"` hay `kimi --continue` cho terminal của hệ điều hành thay vì tự tổ chức cuộc trò chuyện.

## Cấu hình

Tab **Tệp cấu hình** chỉnh các tệp dưới config home của Kimi (`~/.kimi-code/`, có thể ghi đè qua `KIMI_CODE_HOME`): `config.toml`, `tui.toml` và `mcp.json`.

- **Biểu mẫu trực quan cho `config.toml`:** điều chỉnh các giá trị mặc định quan trọng nhất — `default_permission_mode`, `default_thinking`, `default_plan_mode` và `telemetry` — qua các trường biểu mẫu thay vì phải tự tay chỉnh TOML.
- **Trình chỉnh sửa thô:** mọi tệp cũng có thể mở trong trình chỉnh sửa nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ.

![Biểu mẫu trực quan chỉnh các giá trị mặc định config.toml của Kimi](https://oss.macphpstudy.com/image/features/kimi-2.webp)

## Sessions

Tab **Sessions** đọc kho session tại `~/.kimi-code/sessions/` và liệt kê mọi cuộc hội thoại đã ghi lại, nhóm theo thư mục làm việc.

- **Tiếp tục từ nơi bạn dừng lại:** chọn một session và FlyEnv mở nó trong terminal hệ thống bên ngoài với `kimi --session "<id>"`; `kimi --continue` nhảy thẳng vào session gần nhất.
- **Xuất:** Kimi là AI client duy nhất trong FlyEnv có thao tác xuất tích hợp sẵn — nó chạy `kimi export "<id>"` trong terminal nhúng để bạn có thể lưu hoặc chia sẻ bản ghi một session.
- **Dọn dẹp:** xóa các session không còn cần đến trực tiếp từ bảng.

![Tab Sessions của Kimi nhóm theo thư mục làm việc với các thao tác tiếp tục và xuất](https://oss.macphpstudy.com/image/features/kimi-3.webp)

## Log

Kimi là module AI coding CLI duy nhất trong FlyEnv có tab **Log** chuyên dụng. Nó gom mọi tệp `*.log` dưới `~/.kimi-code/logs/` vào trình xem log dùng chung, nên khi CLI hoạt động sai, bạn có thể đọc chính đầu ra log của nó ngay tại chỗ thay vì lùng sục trong thư mục cấu hình.

## MCP server

Tab **MCP** liệt kê các server được đăng ký cho Kimi và cho phép bạn thêm hay gỡ các mục — [hướng dẫn MCP và không gian làm việc AI](/vi/guide/ai-coding-workspace-mcp) cho thấy các MCP server mở rộng các công cụ coding AI thế nào. Kimi chỉ chấp nhận MCP server HTTP/SSE — các server stdio bị từ chối một cách có chủ ý — và FlyEnv ghi các mục thêm mới vào `mcp.json` trong config home, chính là tệp mà CLI đọc. [MCP Server](/vi/features/mcp-server) của FlyEnv có thể tự đăng ký vào đây chỉ với một cú nhấp từ tab Client Config của nó.

![Quản lý MCP server HTTP/SSE cho Kimi](https://oss.macphpstudy.com/image/features/kimi-4.webp)

<FeatureRelatedLinks locale="vi" slug="kimi" />

## Lưu ý tương thích

Module Kimi quản lý các tệp và cấu hình của CLI; nó không chạy Kimi như một dịch vụ nền, và các session tương tác luôn diễn ra trong terminal của riêng hệ thống bạn, chứ không phải bên trong FlyEnv. Cài đặt đi qua script chính thức của nhà cung cấp, nên khả năng khả dụng trên một nền tảng cụ thể phụ thuộc vào những gì script đó hỗ trợ — kiểm tra [trang tải xuống](/vi/download) để biết các nền tảng FlyEnv được phủ. Hỗ trợ MCP bị giới hạn ở các transport HTTP và SSE vì bản thân Kimi không đọc các tệp cấu hình MCP stdio.
