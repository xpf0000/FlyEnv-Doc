---
layout: doc
titleTemplate: false
title: 'OpenCode Manager: Sessions, Stats và Providers | FlyEnv'
description: 'Cài đặt OpenCode, chỉnh cấu hình, duyệt sessions, xem stats theo model và providers từ FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt OpenCode, chỉnh cấu hình, duyệt sessions, xem stats theo model và providers từ FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenCode Manager: Sessions, Stats và Providers | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt OpenCode, chỉnh cấu hình, duyệt sessions, xem stats theo model và providers từ FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/opencode
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/opencode
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenCode trong FlyEnv

OpenCode là một AI coding agent mã nguồn mở chạy trong terminal và làm việc với nhiều nhà cung cấp model khác nhau, nhờ đó bạn không bị trói buộc vào model của một vendor duy nhất. FlyEnv trao cho OpenCode một trang quản lý chuyên dụng với sáu tab — Service, Config File, Sessions, MCP, Stats và Providers — bộ tab phong phú nhất trong số các công cụ code bằng AI của FlyEnv. Từ một nơi duy nhất, bạn có thể cài CLI, chỉnh cấu hình JSONC của nó, duyệt và tiếp tục các Session trước đây, xem Stats theo từng model, kiểm tra các Provider đã xác thực, và quản lý các MCP server. Nó khớp tự nhiên vào [quy trình code cùng AI rộng hơn với FlyEnv](/vi/guide/flyenv-work-with-ai).

![Module OpenCode trong FlyEnv với các tab Service, Config File, Sessions, MCP, Stats và Providers](https://oss.macphpstudy.com/image/features/opencode-1.webp)

## Cài đặt

OpenCode là một CLI code bằng AI, không phải một dịch vụ nền — không có gì để khởi động hay dừng, và không có cổng để quản lý. FlyEnv tự động phát hiện một bản cài có sẵn và đề nghị cài một phát khi không tìm thấy.

- **Một lệnh trên mọi nền tảng:** cài đặt chạy `npm install -g opencode-ai`, như nhau trên macOS, Windows và Linux.
- **Thực thi trong terminal nhúng:** lệnh cài chạy trong terminal tích hợp sẵn của FlyEnv nhờ đó bạn thấy đầu ra thật, với các biến môi trường proxy của FlyEnv được áp dụng để tải xuống hoạt động được sau proxy.
- **Phát hiện tự động:** FlyEnv tìm binary `opencode` trên `PATH` của bạn và ở các vị trí cài thông dụng — các thư mục bin hệ thống và các thư mục global của npm, yarn, pnpm, bun hay Volta trên macOS và Linux, cùng các vị trí npm hay WinGet trên Windows. Một OpenCode mà bạn tự cài sẽ được nhận diện mà không cần cài lại.
- **Lệnh nhanh có thể sao chép:** tab Service mang một bảng liệt kê lệnh — `opencode models`, `opencode upgrade`, `opencode agent list` và hơn nữa — mỗi lệnh có một nút sao chép vào clipboard.

## Cấu hình

OpenCode giữ các thiết lập của mình trong `~/.config/opencode/opencode.jsonc` — một tệp JSON-with-comments. FlyEnv nhận thức XDG và quay về `opencode.json` khi thiết lập của bạn dùng tệp đó.

- **Trình chỉnh sửa JSONC thô:** tab Config File mở tệp thật trong một trình chỉnh sửa nguồn đầy đủ. Ở đây cố ý không có biểu mẫu trực quan — bạn chỉnh đúng thứ mà OpenCode đọc.
- **Thân thiện với chú thích:** vì tệp là JSONC, các chú thích trong tệp được giữ nguyên khi bạn chỉnh.

![Cấu hình OpenCode](https://oss.macphpstudy.com/image/features/opencode-2.webp)

## Sessions

Tab Sessions liệt kê các cuộc hội thoại OpenCode trước đây của bạn bằng cách hỏi chính CLI: FlyEnv chạy `opencode session list --format json` và hiển thị kết quả.

- **Nhóm theo dự án:** các session được tổ chức dưới thư mục làm việc của chúng, nhờ đó các hội thoại từ cùng một codebase luôn ở cạnh nhau.
- **Chạy, tiếp tục, xóa:** mở một session mới trong thư mục dự án, tiếp tục một session cụ thể, nối tiếp session gần nhất, hay xóa những session bạn không còn cần.
- **Terminal ngoài:** các session luôn mở trong cửa sổ terminal của chính hệ thống, chạy `opencode`, `opencode --session <id>` hay `opencode --continue` từ thư mục làm việc của session — không bao giờ bên trong một pane nhúng, nhờ đó giao diện tương tác đầy đủ hoạt động đúng như thiết kế.

![Tab Sessions của OpenCode nhóm theo thư mục làm việc với các hành động tiếp tục và xóa](https://oss.macphpstudy.com/image/features/opencode-3.webp)

## Stats

Tab Stats biến phần báo cáo sử dụng của OpenCode thành một bảng dễ đọc. FlyEnv chạy `opencode stats --models` — tùy chọn với một khung thời gian `--days N` — và phân tích đầu ra bảng của CLI, gỡ các mã màu ANSI trong quá trình xử lý.

- **Phân rã theo model:** xem mỗi model đã xử lý bao nhiêu công việc cho bạn.
- **Khung thời gian điều chỉnh được:** thu hẹp báo cáo về những ngày gần đây để theo dõi các mẫu sử dụng hiện tại.

![Tab Stats của OpenCode hiển thị bảng sử dụng theo model](https://oss.macphpstudy.com/image/features/opencode-4.webp)

## Providers

Tab Providers cho thấy OpenCode của bạn đã xác thực với những nhà cung cấp model nào. FlyEnv đọc chúng từ credential store riêng của OpenCode tại `~/.local/share/opencode/auth.json`, nhờ đó danh sách luôn phản ánh đúng những gì CLI thực sự có thể dùng.

- **Providers đã xác thực trong tầm mắt:** xác nhận một API key hay một lần đăng nhập đã có hiệu lực mà không phải tự mở tệp.
- **Luôn đồng bộ:** vì dữ liệu lấy thẳng từ tệp auth của OpenCode, việc thêm một provider trong CLI sẽ hiện lên trong FlyEnv ngay lần đọc kế tiếp.

![Tab Providers của OpenCode liệt kê các nhà cung cấp model đã xác thực](https://oss.macphpstudy.com/image/features/opencode-5.webp)

## MCP servers

Tab MCP quản lý các Model Context Protocol server mà OpenCode kết nối tới — [hướng dẫn MCP và không gian làm việc AI](/vi/guide/ai-coding-workspace-mcp) trình bày các MCP server có thể bổ sung gì cho một thiết lập code bằng AI. FlyEnv đọc và ghi các mục MCP trực tiếp bên trong tệp cấu hình JSONC, gỡ chú thích trong lúc phân tích nhờ đó các tệp chỉnh tay vẫn hợp lệ.

- **Liệt kê, thêm, xóa:** xem xét các MCP server đã cấu hình và thêm hay xóa các mục mà không phải tự săn tìm trong cấu hình.
- **Lưu trữ ngay trong cấu hình:** các thay đổi nằm trong `opencode.jsonc`, giữ một nguồn chân lý duy nhất cho cả FlyEnv lẫn chỉnh tay.
- **Đăng ký FlyEnv một cú nhấp:** [MCP Server](/vi/features/mcp-server) riêng của FlyEnv có thể tự đăng ký vào danh sách này từ tab Client Config của nó.

![Các MCP server của OpenCode](https://oss.macphpstudy.com/image/features/opencode-6.webp)

<FeatureRelatedLinks locale="vi" slug="opencode" />

## Lưu ý tương thích

OpenCode không phải một dịch vụ nền: FlyEnv không khởi động, dừng hay giám sát nó, và công tắc dịch vụ trên thanh bên bị vô hiệu cho module này một cách có chủ ý. Cài đặt trên mọi nền tảng đi qua `npm install -g opencode-ai` chạy trong terminal nhúng của FlyEnv, nhờ đó một môi trường Node.js/npm hoạt động tốt — cài được từ [module Node.js](/vi/features/nodejs) của FlyEnv — là điều kiện tiên quyết, và việc phát hiện phụ thuộc vào binary nằm trên `PATH` của bạn hay ở một trong các vị trí cài chuẩn mà FlyEnv quét. Dữ liệu Sessions, Stats và Providers lấy từ OpenCode CLI và các tệp riêng của nó, nhờ đó độ chính xác phụ thuộc vào phiên bản OpenCode đã cài; nâng cấp OpenCode có thể thay đổi những gì các tab này báo cáo. Công việc tương tác diễn ra trong một terminal hệ thống bên ngoài, không phải bên trong FlyEnv. Về các nền tảng được hỗ trợ và bản phát hành hiện tại, kiểm tra [trang tải xuống](/vi/download).
