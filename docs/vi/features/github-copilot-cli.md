---
layout: doc
titleTemplate: false
title: 'Trình quản lý GitHub Copilot CLI: Sessions và Skills | FlyEnv'
description: 'Cài GitHub Copilot CLI qua npm, chỉnh cấu hình, tiếp tục session, và quản lý Skills cùng các MCP server.'
head:
  - - meta
    - name: description
      content: 'Cài GitHub Copilot CLI qua npm, chỉnh cấu hình, tiếp tục session, và quản lý Skills cùng các MCP server.'
  - - meta
    - property: og:title
      content: 'Trình quản lý GitHub Copilot CLI: Sessions và Skills | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài GitHub Copilot CLI qua npm, chỉnh cấu hình, tiếp tục session, và quản lý Skills cùng các MCP server.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/github-copilot-cli
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/github-copilot-cli
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# GitHub Copilot CLI trong FlyEnv

GitHub Copilot CLI là AI coding agent dành cho terminal của GitHub, thuộc dòng sản phẩm Copilot. FlyEnv dành cho nó một trang quản lý riêng: cài đặt một cú nhấp, một trình chỉnh sửa thô cho các tệp cấu hình JSON, một trình duyệt Sessions với khả năng tiếp tục và dọn dẹp, một danh sách Skills với các thao tác theo từng skill, và quản lý MCP server. Copilot vẫn là một công cụ terminal bình thường — FlyEnv sắp xếp mọi thứ quanh nó. Để xem bức tranh rộng hơn về việc điều khiển FlyEnv từ các trợ lý AI, xem [FlyEnv làm việc với AI](/vi/guide/flyenv-work-with-ai).

![Tổng quan module GitHub Copilot CLI trong FlyEnv hiển thị thẻ Dịch vụ với lệnh cài đặt, phiên bản được phát hiện và bảng ghi nhanh các lệnh hữu ích](https://oss.macphpstudy.com/image/features/github-copilot-cli-1.webp)

## Cài đặt

Tab **GitHub Copilot CLI → Dịch vụ** phát hiện binary `copilot` sẵn có và hiển thị phiên bản của nó, hoặc đưa ra lựa chọn cài đặt một cú nhấp khi không tìm thấy.

- **Một lệnh duy nhất đa nền tảng:** cài đặt chạy `npm install -g @github/copilot`, cùng một lệnh trên macOS, Linux và Windows, nên một môi trường Node.js/npm hoạt động được là điều kiện tiên quyết duy nhất — [quản lý phiên bản Node.js](/vi/guide/manage-multiple-node-php-versions) của FlyEnv có thể cung cấp một nếu cần.
- **Terminal nhúng:** lệnh npm chạy trong terminal tích hợp sẵn của FlyEnv, với các biến môi trường proxy của FlyEnv được áp dụng, để bạn theo dõi đầu ra cài đặt thật thay vì một thanh tiến trình im lặng.
- **Nhận diện các bản cài có sẵn:** FlyEnv quét `PATH` cùng các vị trí cài toàn cục thường gặp — trong đó có các thư mục global bin của npm, yarn, pnpm, bun và volta — nên một Copilot CLI bạn tự cài sẽ được nhận diện mà không cần cài lại.
- **Bảng ghi nhanh lệnh:** các phím tắt có thể sao chép cho những lệnh hằng ngày như `copilot login`, `copilot init`, `copilot skill list` và `copilot mcp list` nằm ngay trên thẻ Dịch vụ.

## Cấu hình

Tab **Tệp cấu hình** chỉnh cấu hình của Copilot CLI dưới dạng JSON thô — module này không có biểu mẫu cài đặt trực quan.

- **Hai tệp:** `~/.copilot/config.json` cho cấu hình chính và `~/.copilot/mcp-config.json` cho các định nghĩa MCP server, cả hai đều mở trong trình chỉnh sửa đầy đủ.
- **Tôn trọng home tùy chỉnh:** nếu bạn chuyển vị trí home của Copilot bằng biến môi trường `COPILOT_CONFIG_DIR`, FlyEnv đi theo và chỉnh các tệp tại vị trí thật của chúng.
- **Không gì bị ghi lại giúp bạn:** FlyEnv mở các tệp nguyên trạng trên đĩa; chính Copilot CLI sở hữu schema và các giá trị mặc định của chúng.

![Cấu hình](https://oss.macphpstudy.com/image/features/github-copilot-cli-2.webp)

## Sessions

Các Copilot Session được đọc từ kho SQLite riêng của CLI tại `~/.copilot/session-store.db`, nhờ đó tiêu đề và prompt được hiển thị gọn gàng, nhóm theo thư mục làm việc.

- **Tiếp tục từ nơi bạn dừng lại:** các thao tác chạy và tiếp tục mở terminal hệ thống bên ngoài của bạn tại thư mục làm việc của session rồi khởi chạy `copilot --resume` hay `copilot --continue` — bản thân cuộc hội thoại tương tác luôn diễn ra trong terminal đó, chứ không phải bên trong FlyEnv.
- **Xóa sạch sẽ:** gỡ một session cũng xóa luôn thư mục `session-state/<id>` của nó, nên không còn trạng thái mồ côi bị bỏ lại.

![Bảng Sessions nhóm theo thư mục làm việc với các thao tác chạy, tiếp tục và xóa](https://oss.macphpstudy.com/image/features/github-copilot-cli-3.webp)

## Skills

Tab **Skills** liệt kê các Skills mà Copilot CLI biết được bằng cách truy vấn trực tiếp CLI với `copilot skill list --json`, với tên của mỗi skill được gắn hậu tố là nguồn của nó — khác với module [Antigravity CLI](/vi/features/antigravity-cli) đọc thẳng các thư mục skill từ đĩa, danh sách này luôn đến từ chính CLI.

- **Thao tác theo từng skill:** mở thư mục của skill, hiển thị tệp skill trong trình quản lý tệp của bạn, hoặc xem trước nội dung mà không cần rời FlyEnv.
- **Luôn cập nhật:** vì danh sách đến từ CLI thay vì một ảnh chụp đã lưu cache, các Skills mới thêm xuất hiện ngay khi `copilot skill list` nhìn thấy chúng.

![Tab Skills liệt kê các skill Copilot với nhãn nguồn và các thao tác mở, hiển thị và xem trước](https://oss.macphpstudy.com/image/features/github-copilot-cli-4.webp)

## MCP server

Tab **MCP** quản lý các MCP server mà Copilot CLI kết nối đến, dựa trên tệp `~/.copilot/mcp-config.json`.

- **Liệt kê, thêm, gỡ:** xem các server đang được đăng ký và thêm hoặc gỡ các mục từ giao diện; thay đổi được ghi ngược vào tệp cấu hình MCP.
- **Hoạt động cùng MCP server của FlyEnv:** module [FlyEnv MCP Server](/vi/features/mcp-server) có thể tự đăng ký vào danh sách MCP của Copilot CLI, để Copilot có thể kiểm tra và vận hành các dịch vụ cùng site local của bạn.
- **Xác minh trong terminal:** lệnh nhanh `copilot mcp list` trên thẻ Dịch vụ là cách nhanh nhất để xác nhận CLI thực sự đã nạp những gì.

![Tab MCP server liệt kê các server đã đăng ký với các thao tác thêm và gỡ](https://oss.macphpstudy.com/image/features/github-copilot-cli-5.webp)

<FeatureRelatedLinks locale="vi" slug="github-copilot-cli" />

## Lưu ý tương thích

GitHub Copilot CLI không phải một dịch vụ nền: FlyEnv không thêm công tắc khởi động/dừng, cổng hay vòng đời tiến trình nào cho nó, và mọi session tương tác đều chạy trong một terminal hệ thống bên ngoài. Cài đặt dựa trên npm và giống nhau trên macOS, Linux và Windows, nghĩa là Node.js với npm phải có trước — nếu bạn cần, hãy cài từ [module Node.js](/vi/features/nodejs) của FlyEnv hoặc tải FlyEnv từ [trang tải xuống](/vi/download). Cấu hình chỉ được hiển thị dưới dạng JSON thô; không có biểu mẫu trực quan, và các câu hỏi về từng khóa cụ thể thuộc về tài liệu riêng của Copilot CLI. Dữ liệu session nằm trong kho SQLite của CLI dưới `~/.copilot` (hoặc bất cứ nơi đâu `COPILOT_CONFIG_DIR` trỏ đến), và FlyEnv chỉ đọc và xóa những gì Copilot CLI đã ghi vào đó.
