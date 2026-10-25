---
layout: doc
titleTemplate: false
title: 'Trình quản lý Antigravity CLI: Phiên và Skills | FlyEnv'
description: 'Cài đặt Antigravity CLI, chỉnh sửa cài đặt trực quan, tiếp tục hội thoại và duyệt skills với bản xem trước Markdown.'
head:
  - - meta
    - name: description
      content: 'Cài đặt Antigravity CLI, chỉnh sửa cài đặt trực quan, tiếp tục hội thoại và duyệt skills với bản xem trước Markdown.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Antigravity CLI: Phiên và Skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt Antigravity CLI, chỉnh sửa cài đặt trực quan, tiếp tục hội thoại và duyệt skills với bản xem trước Markdown.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/antigravity-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/antigravity-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Antigravity CLI trong FlyEnv

Antigravity CLI (`agy`) là AI coding agent chạy trên terminal của Google, phiên bản dòng lệnh đi kèm của IDE Antigravity. FlyEnv mang đến cho nó một bảng điều khiển xứng đáng: cài đặt binary `agy` thông qua terminal tích hợp, điều chỉnh cài đặt từ form trực quan, tiếp tục các hội thoại trước đó từ danh sách Phiên (Sessions) được nhóm gọn gàng, và duyệt các Skills của người dùng lẫn builtin với bản xem trước Markdown được hiển thị đẹp. Module này thuộc bộ công cụ AI của FlyEnv — xem [cách FlyEnv làm việc với các công cụ AI coding](/vi/guide/flyenv-work-with-ai) để có bức tranh tổng thể.

![Tổng quan module Antigravity CLI trong FlyEnv](https://oss.macphpstudy.com/image/features/antigravity-cli-1.webp)

## Cài đặt

Antigravity CLI không phải là một dịch vụ chạy nền và FlyEnv không kèm theo các binary của nó. Việc cài đặt là một thao tác thực hiện một lần trên thẻ **Service**: FlyEnv mở terminal tích hợp và chạy script cài đặt chính thức của nhà phát triển — `curl -fsSL https://antigravity.google/cli/install.sh | bash` trên macOS và Linux, hoặc script PowerShell tương đương trên Windows — với môi trường proxy của FlyEnv được áp dụng để quá trình tải xuống hoạt động ngay cả khi đứng sau proxy.

- **Tự động phát hiện:** FlyEnv tìm binary `agy` sẵn có trên `PATH` của bạn và ở các vị trí cài đặt thường gặp (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.local/bin` và các thư mục bin toàn cục của npm/yarn/pnpm/bun trên macOS và Linux; `%APPDATA%\npm`, WinGet Links và `~/.local/bin` trên Windows), sau đó hiển thị phiên bản được phát hiện trên thẻ Service.
- **Bảng cheat lệnh:** thẻ Service có sẵn các nút sao chép vào clipboard cho những lệnh `agy` hữu ích như `agy plugin list`, `agy plugin import`, `agy install` và `agy models`.

## Cấu hình

Tab **Config File** cho phép chỉnh sửa các tệp mà Antigravity CLI thực sự đọc. Tệp cài đặt chính nằm tại `~/.gemini/antigravity-cli/settings.json`, còn các MCP server được lưu riêng trong `~/.gemini/config/mcp_config.json`.

- **Form trực quan cho các cài đặt phổ biến:** điều chỉnh model, công tắc sandbox của terminal và mức quyền công cụ thông qua các trường trong form thay vì tự tay chỉnh sửa JSON.
- **Trình soạn thảo raw:** chuyển sang chế độ xem toàn bộ tệp cho bất kỳ khóa nào mà form không hiển thị.
- **Thư mục cấu hình Gemini dùng chung:** Antigravity CLI đọc từ thư mục cấu hình của Gemini CLI; nếu bạn di chuyển nó bằng biến môi trường `GEMINI_HOME`, FlyEnv sẽ theo đúng thay đổi đó.

![Form cài đặt trực quan cho Antigravity CLI](https://oss.macphpstudy.com/image/features/antigravity-cli-2.webp)

## Phiên

Tab **Sessions** liệt kê các hội thoại trước đó của bạn để bạn có thể quay lại một hội thoại mà không cần nhớ id của nó.

- **Nhóm theo thư mục làm việc:** các hội thoại được tổ chức theo thư mục mà chúng chạy trong đó, và mỗi mục hiển thị id cùng thời gian sửa đổi lần cuối. Vì Antigravity lưu payload tin nhắn dưới dạng protobuf nên tiêu đề và prompt đầu tiên chỉ được khôi phục ở mức cố gắng tối đa (best-effort).
- **Tiếp tục trong terminal của riêng bạn:** chạy hoặc tiếp tục một phiên sẽ mở terminal hệ thống của bạn — không phải một panel bên trong FlyEnv — với lệnh `agy --conversation <id>` (hoặc `agy --continue` cho phiên mới nhất) đã được gõ sẵn trong đúng thư mục.
- **Xóa gọn gàng:** xóa các hội thoại lỗi thời ngay từ danh sách.

![Các phiên được nhóm theo thư mục làm việc](https://oss.macphpstudy.com/image/features/antigravity-cli-3.webp)

## Skills

Tab **Skills** duyệt trực tiếp các thư mục skill trên đĩa — khác với module [GitHub Copilot CLI](/vi/features/github-copilot-cli) mà tab Skills của nó truy vấn bản thân CLI, danh sách của Antigravity được đọc thẳng từ hệ thống tệp.

- **Skills của người dùng và builtin:** các skill của riêng bạn từ `antigravity-cli/skills` được liệt kê cạnh các skill builtin từ `antigravity-cli/builtin/skills`, những skill builtin được đánh dấu bằng thẻ builtin.
- **Drawer xem trước Markdown:** khi mở một skill, nội dung Markdown của nó được hiển thị trong một drawer với các chế độ xem code, preview và chia đôi, để bạn có thể đọc hướng dẫn của skill ở định dạng hoàn chỉnh trước khi quyết định sử dụng hay chỉnh sửa.
- **Mở thư mục skills:** một nút bấm sẽ đưa bạn đến thư mục skills trong trình quản lý tệp khi bạn muốn thêm hoặc chỉnh sửa tệp trực tiếp.

![Skill](https://oss.macphpstudy.com/image/features/antigravity-cli-4.webp)

## MCP server

Tab **MCP** quản lý các Model Context Protocol server mà Antigravity CLI kết nối đến, được đọc từ và ghi vào `~/.gemini/config/mcp_config.json` — [hướng dẫn MCP và AI workspace](/vi/guide/ai-coding-workspace-mcp) giải thích vai trò của các MCP server trong một AI coding workspace. Bạn có thể liệt kê các server đang được cấu hình, thêm server mới hoặc xóa những mục không còn cần đến — không cần chỉnh sửa JSON thủ công. [MCP Server](/vi/features/mcp-server) của chính FlyEnv có thể tự đăng ký vào danh sách này chỉ với một cú nhấp từ tab Client Config của nó.

![MCP server](https://oss.macphpstudy.com/image/features/antigravity-cli-5.webp)

<FeatureRelatedLinks locale="vi" slug="antigravity-cli" />

## Ghi chú tương thích

Antigravity CLI trong FlyEnv là ứng dụng desktop đồng hành cho công cụ dòng lệnh `agy`, khả dụng trên macOS, Windows và Linux; script cài đặt và các đường dẫn phát hiện khác nhau theo từng nền tảng như đã mô tả ở trên. Đây không phải một dịch vụ: không có vòng đời start/stop, không có port và không có trình quản lý phiên bản — FlyEnv quản lý phiên bản `agy` mà trình cài đặt chính thức hoặc trình quản lý gói của bạn đã đặt trên máy. Các hội thoại luôn được mở trong terminal hệ thống bên ngoài; FlyEnv liệt kê và khởi chạy chúng nhưng không phải nơi lưu trữ cuộc trò chuyện. Chi tiết phiên bị giới hạn bởi định dạng lưu trữ của Antigravity (cơ sở dữ liệu SQLite với payload protobuf), nên FlyEnv có thể hiển thị đáng tin cậy id, thư mục làm việc và thời gian sửa đổi, còn tiêu đề chỉ được khôi phục ở mức best-effort. Để biết bản dựng FlyEnv hiện tại và các gói theo nền tảng, hãy xem [trang Tải xuống](/vi/download). FlyEnv quản lý các AI coding CLI khác theo cùng cách — xem các module [Claude Code](/vi/features/claude-code) và [Codex](/vi/features/codex).
