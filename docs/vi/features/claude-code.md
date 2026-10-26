---
layout: doc
titleTemplate: false
title: 'Trình quản lý Claude Code: Phiên, Plugins và MCP | FlyEnv'
description: 'Cài đặt Claude Code, chỉnh sửa cài đặt trực quan, tiếp tục phiên, quản lý plugins và MCP server ngay từ FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt Claude Code, chỉnh sửa cài đặt trực quan, tiếp tục phiên, quản lý plugins và MCP server ngay từ FlyEnv.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Claude Code: Phiên, Plugins và MCP | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt Claude Code, chỉnh sửa cài đặt trực quan, tiếp tục phiên, quản lý plugins và MCP server ngay từ FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/claude-code
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/claude-code
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Claude Code trong FlyEnv

Claude Code là AI coding agent dòng lệnh của Anthropic: nó đọc codebase của bạn, chỉnh sửa tệp và chạy lệnh để thực hiện các tác vụ phát triển ngay từ terminal. FlyEnv mang đến cho Claude Code một trung tâm điều khiển đồ họa: cài đặt chỉ với một cú nhấp thông qua script chính thức, trình soạn thảo trực quan cho `settings.json`, trình duyệt Sessions có thể tiếp tục các hội thoại trước đó, quản lý plugin và marketplace đầy đủ, cùng cấu hình MCP server — tất cả ngay trong module **Claude Code** trên sidebar. FlyEnv hòa hợp tự nhiên với quy trình làm việc có AI hỗ trợ; xem [cách FlyEnv làm việc với các công cụ AI](/vi/guide/flyenv-work-with-ai) để có bức tranh tổng thể.

![Module Claude Code trong FlyEnv với tab Service và terminal cài đặt](https://oss.macphpstudy.com/image/features/claude-code-1.webp)

## Cài đặt

Claude Code là một client dòng lệnh, không phải dịch vụ chạy nền — không có daemon để khởi động hay dừng, và module không có trình quản lý phiên bản. FlyEnv xử lý việc thiết lập như một tác vụ thực hiện một lần.

- **Script cài đặt chính thức:** khi nhấp cài đặt, FlyEnv chạy script của chính nhà phát triển — `curl -fsSL https://claude.ai/install.sh | bash` trên macOS và Linux, `irm https://claude.ai/install.ps1 | iex` trên Windows — bên trong terminal tích hợp của FlyEnv, nên bạn theo dõi được đầu ra thực tế ngay khi nó diễn ra. Môi trường proxy của FlyEnv được áp dụng cho việc cài đặt một cách tự động.
- **Tự động phát hiện:** nếu Claude Code đã được cài, FlyEnv tìm thấy nó bằng cách quét `PATH` cùng các vị trí cài đặt thường gặp — `/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` và các thư mục bin toàn cục của npm, yarn, pnpm, bun và volta trên macOS và Linux; `%APPDATA%\npm`, WinGet Links và `~/.local/bin` trên Windows — rồi hiển thị phiên bản được phát hiện.
- **Bảng cheat lệnh:** tab Service có sẵn bảng tra cứu nhanh các lệnh hữu ích như `claude doctor`, `claude update` và `claude setup-token`, mỗi lệnh kèm nút sao chép vào clipboard.

## Cấu hình

Tab **Config File** chỉnh sửa trực tiếp cài đặt của Claude Code, kết hợp form trực quan với trình soạn thảo raw đầy đủ.

- **Form cài đặt phổ biến:** điều chỉnh các trường `settings.json` thường xuyên đụng đến — theme, model, `includeCoAuthoredBy` và `cleanupPeriodDays` — thông qua các điều khiển của form thay vì sửa JSON bằng tay.
- **Trình soạn thảo JSON raw:** chuyển sang chế độ xem nguồn cho những gì form không bao phủ; các thay đổi được ghi ngược về đúng tệp thật.
- **Mọi tệp cấu hình trong tầm tay:** FlyEnv mở `~/.claude/settings.json`, `settings.local.json`, `plugins/known_marketplaces.json` và `~/.claude.json` từ cùng một nơi. Nếu bạn di chuyển thư mục home của Claude Code bằng `CLAUDE_CONFIG_DIR`, FlyEnv sẽ theo đúng thay đổi đó.

![Form trực quan settings.json của Claude Code với các trường theme và model](https://oss.macphpstudy.com/image/features/claude-code-2.webp)

## Phiên

Tab **Sessions** đọc lịch sử của Claude Code từ thư mục `~/.claude/projects`, phân tích các tệp transcript `.jsonl` của từng dự án.

- **Nhóm theo dự án:** các phiên được tổ chức theo thư mục làm việc, nhờ đó hội thoại của từng codebase luôn ở cùng nhau.
- **Tiếp tục chỉ với một cú nhấp:** chọn một phiên sẽ mở terminal hệ thống bên ngoài của bạn tại thư mục dự án đó và chạy `claude --resume <id>` — hoặc `claude --continue` cho hội thoại mới nhất. Các phiên luôn chạy trong terminal hệ thống, không phải bên trong FlyEnv.
- **Dọn dẹp:** xóa những phiên không còn cần đến ngay từ danh sách.

![Bảng Sessions được nhóm theo thư mục làm việc với các thao tác tiếp tục](https://oss.macphpstudy.com/image/features/claude-code-3.webp)

## Plugins

Tab **Plugins** là một trình quản lý plugin hoàn chỉnh được xây dựng trên hệ thống plugin của chính Claude Code, bao gồm cả hỗ trợ marketplace.

- **Khả dụng và đã cài:** FlyEnv truy vấn `claude plugin list --available --json` để hiển thị những gì mỗi marketplace cung cấp cạnh những gì bạn đang có.
- **Cài đặt với đầu ra thực tế:** việc cài plugin chạy trong terminal tích hợp, nên tiến trình tải xuống và thiết lập luôn hiển thị rõ.
- **Các thao tác vòng đời:** bật, tắt hoặc gỡ cài đặt plugin đã cài mà không cần động đến dòng lệnh.
- **Quản lý marketplace:** thêm marketplace plugin mới hoặc xóa những marketplace hiện có; danh sách đã đăng ký được lưu trong `known_marketplaces.json` dưới thư mục home của Claude Code.

![Tab Plugins liệt kê plugin của marketplace với các thao tác cài đặt và bật](https://oss.macphpstudy.com/image/features/claude-code-4.webp)

## MCP server

Tab **MCP** quản lý các Model Context Protocol server được lưu trong mục `mcpServers` của `~/.claude.json` — [hướng dẫn MCP và AI workspace](/vi/guide/ai-coding-workspace-mcp) giải thích cách các server này mở rộng khả năng cho công cụ AI coding.

- **Liệt kê và xóa:** xem mọi MCP server đã cấu hình và xóa những mục bạn không còn dùng.
- **Server HTTP và SSE:** server từ xa được thêm bằng cách ghi định nghĩa thẳng vào `~/.claude.json`.
- **Server stdio:** các server dựa trên lệnh local được đăng ký thông qua `claude mcp add`, nhờ đó chúng được tạo đúng theo cách CLI mong muốn.
- **Đăng ký FlyEnv chỉ với một cú nhấp:** [MCP Server](/vi/features/mcp-server) của chính FlyEnv có thể tự đăng ký vào danh sách này từ tab Client Config của nó.

![Danh sách MCP server với các nút thêm và xóa](https://oss.macphpstudy.com/image/features/claude-code-5.webp)

<FeatureRelatedLinks locale="vi" slug="claude-code" />

## Ghi chú tương thích

Claude Code trong FlyEnv là một lớp quản lý trên nền CLI, không phải runtime được lưu trữ. Module này không phải dịch vụ chạy nền — FlyEnv không chạy Claude Code thay bạn; các phiên tương tác luôn được khởi chạy trong terminal hệ thống bên ngoài với thư mục dự án làm thư mục làm việc. Việc cài đặt đi qua các script chính thức của Anthropic bên trong terminal tích hợp, và không có quản lý đa phiên bản. Lịch sử phiên được đọc từ các transcript JSONL trong `~/.claude/projects`, nên chỉ những phiên do chính Claude Code ghi lại mới có thể xuất hiện; các chỉnh sửa cấu hình áp dụng cho những tệp chuẩn dưới `~/.claude` (hoặc thư mục được chỉ định bởi `CLAUDE_CONFIG_DIR`). Phạm vi nền tảng theo bản dựng FlyEnv bạn đang chạy — xem [trang Tải xuống](/vi/download) để biết bản phát hành hiện tại cho từng hệ điều hành. FlyEnv quản lý các AI coding CLI khác theo cùng cách — xem các module [Codex](/vi/features/codex), [OpenCode](/vi/features/opencode) và [Kimi](/vi/features/kimi).
