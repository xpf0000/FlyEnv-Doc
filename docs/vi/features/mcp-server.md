---
layout: doc
titleTemplate: false
title: 'FlyEnv MCP Server cho các công cụ coding AI | FlyEnv'
description: 'Phơi bày môi trường local của bạn cho các công cụ coding AI qua Streamable HTTP với chính sách theo từng công cụ và log kiểm toán.'
head:
  - - meta
    - name: description
      content: 'Phơi bày môi trường local của bạn cho các công cụ coding AI qua Streamable HTTP với chính sách theo từng công cụ và log kiểm toán.'
  - - meta
    - property: og:title
      content: 'FlyEnv MCP Server cho các công cụ coding AI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Phơi bày môi trường local của bạn cho các công cụ coding AI qua Streamable HTTP với chính sách theo từng công cụ và log kiểm toán.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mcp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mcp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv MCP Server

FlyEnv đi kèm một MCP server tích hợp sẵn cho phép các trợ lý coding AI vận hành stack local của bạn — liệt kê và điều khiển dịch vụ, xem log và cấu hình, đọc chi tiết kết nối site và cơ sở dữ liệu — thông qua một giao diện có kiểm soát. Server nói MCP qua Streamable HTTP trên `127.0.0.1:7682` theo mặc định, xác thực bằng một Bearer token, và cung cấp 18 công cụ với chính sách phê duyệt theo từng công cụ. Mọi lệnh gọi đều ghi vào một Audit Log, nhờ đó bạn luôn biết trợ lý đã làm gì. [Hướng dẫn không gian làm việc coding AI](/vi/guide/ai-coding-workspace-mcp) cho thấy toàn bộ thiết lập trong một dự án thực tế.

![Tổng quan module FlyEnv MCP Server](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Tùy chọn dịch vụ

Server chạy ngay bên trong ứng dụng FlyEnv, nên không có gì phải cài — tab **Dịch vụ** chỉ điều khiển cách nó lắng nghe và thời điểm nó khởi động.

- **Bind host và cổng:** địa chỉ mặc định là `127.0.0.1:7682`; cổng nhận mọi giá trị từ 1024 đến 65535. Bind ngoài loopback bị từ chối trừ khi bạn bật truy cập từ xa một cách tường minh, hành động này sẽ hiện một hộp thoại cảnh báo trước.
- **Xác thực bằng Bearer token:** client phải trình token đã sinh trên mọi yêu cầu. Tái sinh token chỉ với một cú nhấp để thu hồi toàn bộ client hiện có cùng một lúc.
- **Tự khởi động khi mở ứng dụng:** server có thể lên tự động mỗi khi FlyEnv mở, nhờ đó các trợ lý của bạn không bao giờ bị bỏ lại trỏ vào một endpoint đã chết.
- **Dịch vụ độc lập:** FlyEnv MCP Server bị loại khỏi nhóm "start all" toàn cục, nên việc khởi động hàng loạt stack của bạn không bao giờ vô tình bật giao diện AI lên.
- **Cầu nối stdio:** cho các client ưa dùng stdio, FlyEnv sao chép một script cầu nối `flyenv-mcp-stdio.mjs` vào thư mục dữ liệu của nó, sẵn sàng được thực thi bởi một runtime [Node.js](/vi/features/nodejs) bên ngoài.

![Tab Dịch vụ với các tùy chọn host, cổng và token](https://oss.macphpstudy.com/image/features/mcp-server-1.webp)

## Client Config

Tab **Client Config** kết nối server vào sáu công cụ AI CLI mà FlyEnv đã quản lý: Claude Code, Antigravity CLI, Codex, GitHub Copilot CLI, OpenCode và Kimi.

- **Đăng ký một cú nhấp:** nút "Add to client" cho từng công cụ ghi mục server `flyenv` thẳng vào cấu hình MCP riêng của CLI đó — không phải chỉnh tệp thủ công, bất kể client là [Codex](/vi/features/codex), [OpenCode](/vi/features/opencode) hay [Kimi](/vi/features/kimi).
- **Đoạn mã có thể sao chép:** các khối JSON hay TOML dựng sẵn ở cả hai biến thể HTTP và stdio, để dán vào các client bạn tự cấu hình hay các công cụ ngoài phạm vi quản lý của FlyEnv.
- **Đi cùng các CLI được quản lý:** mỗi trợ lý trong số này có một module FlyEnv riêng — xem [Claude Code](/vi/features/claude-code) làm ví dụ về quản lý cài đặt, session và plugin mà chúng nhận được.

![Tab Client Config với đăng ký một cú nhấp cho sáu CLI](https://oss.macphpstudy.com/image/features/mcp-server-2.webp)

## Tools

Tab **Tools** liệt kê 18 công cụ mà server cung cấp và quyết định công cụ nào trợ lý được dùng.

- **Công cụ đọc** — kiểm kê và giám sát: `list_services`, `service_status`, `list_sites`, `resolve_site_runtime`, `resolve_site_urls`, `get_database_connection_info`, `get_service_exec_info`, `get_managed_file_map`, `list_log_files`, `list_config_files` và `list_online_versions`.
- **Công cụ hành động** — thay đổi môi trường của bạn: `start_service`, `stop_service`, `restart_service`, `create_site`, `update_site`, `delete_site` và `install_service`.
- **Công tắc bật theo từng công cụ:** tắt bất kỳ công cụ riêng lẻ nào để loại nó khỏi phạm vi client có thể gọi.
- **Chính sách phê duyệt cho công cụ rủi ro:** 7 công cụ vòng đời, ghi site và cài đặt mỗi cái mang một chính sách auto/confirm — mặc định là confirm, nên các thao tác nhạy cảm chờ phê duyệt của bạn trừ khi bạn chủ động nới lỏng.

![Tab Tools với công tắc theo từng công cụ và chính sách phê duyệt](https://oss.macphpstudy.com/image/features/mcp-server-3.webp)

## Audit Log

Tab **Audit Log** là một trình xem trực tiếp trên `audit.log` trong thư mục dữ liệu MCP của FlyEnv — một bản ghi dạng JSON-lines của mọi lệnh gọi công cụ mà server xử lý.

- **Lịch sử lệnh gọi đầy đủ:** mỗi mục ghi lại công cụ nào đã chạy và với dữ liệu gì, cho bạn một dấu vết có thể rà soát về mọi thứ các trợ lý AI của bạn đã chạm vào — bối cảnh thiết yếu khi bạn [làm việc với trợ lý AI](/vi/guide/flyenv-work-with-ai) hằng ngày.
- **Che giấu thông tin nhạy cảm:** token và mật khẩu được che trước khi vào log, nên việc rà soát hay chia sẻ tệp không làm rò rỉ thông tin đăng nhập.

![Tab Audit Log hiển thị các lệnh gọi công cụ đã ghi](https://oss.macphpstudy.com/image/features/mcp-server-4.webp)

<FeatureRelatedLinks locale="vi" slug="mcp-server" />

## Lưu ý tương thích

FlyEnv MCP Server chạy trong tiến trình chính của ứng dụng, điều này đặt ra ranh giới cứng của nó: nó chỉ tồn tại khi FlyEnv đang chạy, nên việc thoát ứng dụng sẽ tắt endpoint đối với mọi client đang kết nối. Nó hoạt động như nhau trên macOS, Windows và Linux, không có khác biệt theo nền tảng. Cầu nối stdio phụ thuộc vào một runtime Node.js bên ngoài để thực thi script `flyenv-mcp-stdio.mjs` được sinh ra. Truy cập từ xa luôn tắt trừ khi bạn chủ động bật — bind vào bất cứ thứ gì ngoài loopback đòi hỏi sự cho phép tường minh và đi qua một hộp thoại cảnh báo.
