---
layout: doc
titleTemplate: false
title: 'Trình quản lý .NET SDK cho phát triển local | FlyEnv'
description: 'Cài đặt và chuyển đổi các phiên bản .NET SDK, gắn runtime với từng dự án trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển đổi các phiên bản .NET SDK, gắn runtime với từng dự án trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'Trình quản lý .NET SDK cho phát triển local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển đổi các phiên bản .NET SDK, gắn runtime với từng dự án trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/dotnet
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/dotnet
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển .NET local với FlyEnv

.NET là nền tảng phát triển mã nguồn mở của Microsoft dùng để xây dựng ứng dụng web, desktop, di động và đám mây, với C# là ngôn ngữ chính. FlyEnv quản lý các .NET SDK local tại một nơi duy nhất: cài nhiều phiên bản SDK song song, chuyển đổi lệnh `dotnet` giữa chúng, và gắn từng dự án với một SDK cụ thể để các terminal và trình soạn thảo nhận đúng runtime. Module .NET được tổ chức thành ba tab — Dự án .NET, Dịch vụ và Trình quản lý phiên bản.

![Module .NET của FlyEnv với các tab Dự án, Dịch vụ và Trình quản lý phiên bản](https://oss.macphpstudy.com/image/features/dotnet-1.webp)

## Quản lý phiên bản .NET SDK

Cài nhiều phiên bản .NET SDK song song từ **.NET → Trình quản lý phiên bản** và chuyển đổi giữa chúng bất cứ lúc nào.

- **Siêu dữ liệu phát hành của Microsoft:** khác với các module ngôn ngữ khác, danh sách tĩnh của .NET được lấy trực tiếp từ siêu dữ liệu phát hành chính thức của Microsoft, chọn SDK mới nhất cho từng kênh và tạo URL tải xuống cho từng nền tảng (`win-x64`, `osx-arm64`, `osx-x64`, `linux-arm64`, `linux-x64`).
- **Nguồn Homebrew:** trên macOS và Linux, .NET cũng có thể cài từ formula `dotnet` của Homebrew, dành cho các SDK do trình quản lý gói này quản lý.
- **Phát hiện phiên bản chính xác:** FlyEnv đọc từng lần cài đặt bằng `dotnet --version`, nếu cần sẽ chuyển sang phân tích đầu ra của `dotnet --info`, nhờ đó phiên bản hiển thị luôn khớp với SDK trên đĩa.
- **Xử lý cách ly trên macOS:** sau khi cài tĩnh trên macOS, FlyEnv xóa thuộc tính cách ly để SDK chạy mà không gặp hộp thoại chặn của Gatekeeper.

![Trình quản lý phiên bản .NET với danh sách kênh của Microsoft](https://oss.macphpstudy.com/image/features/dotnet-2.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Tab **Dịch vụ** là bảng các phiên bản đã cài cho .NET — bất chấp tên gọi, nó quản lý phiên bản, mục PATH và alias, chứ không quản lý tiến trình nền đang chạy.

- **Chuyển đổi PATH:** đặt SDK .NET nào mà lệnh `dotnet` trong terminal của bạn sẽ trỏ về. FlyEnv thêm hoặc xóa thư mục của phiên bản đó khỏi `PATH` của bạn và đánh dấu mục hiện tại do FlyEnv hay một công cụ khác đặt; [hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích cách hoạt động này.
- **Alias và ghi chú theo từng phiên bản:** đặt cho mỗi lần cài một alias ngắn và một ghi chú để các SDK tương tự vẫn dễ phân biệt trong danh sách.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build .NET SDK của riêng bạn để hiển thị nó cạnh các phiên bản được quản lý.

## Runtime .NET cấp dự án

Trong **.NET → Dự án**, đăng ký từng thư mục dự án và gắn nó với .NET SDK riêng — hoặc để nguyên phiên bản hệ thống. Xem [hướng dẫn runtime cấp dự án](/vi/guide/project-level-runtime-environment) và tính năng [Runtime theo từng dự án](/vi/features/per-project-runtimes) cho quy trình đầy đủ.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nên các terminal và trình soạn thảo khởi chạy từ FlyEnv tự động nhận đúng SDK.
- **Chạy như một dịch vụ:** đánh dấu một dự án là dịch vụ với lệnh khởi động hoặc tệp chạy tùy chỉnh, một cổng TCP, biến môi trường và cờ sudo tùy chọn; công tắc ở thanh bên khởi động hoặc dừng toàn bộ các dự án .NET đã bật dịch vụ cùng một lúc.
- **Mở trong VS Code:** nhảy từ một dòng dự án thẳng vào VS Code với môi trường dự án đã được nạp sẵn.

![Danh sách Dự án .NET với gắn SDK theo từng dự án](https://oss.macphpstudy.com/image/features/dotnet-3.webp)

<FeatureRelatedLinks locale="vi" slug="dotnet" />

## Lưu ý tương thích

Nguồn cài đặt phụ thuộc nền tảng: bản build tĩnh trên mọi hệ điều hành, kèm Homebrew trên macOS và Linux; Windows chỉ dùng nguồn tĩnh (zip). FlyEnv quản lý runtime local và cấu hình PATH; hãy đối chiếu yêu cầu SDK của dự án với bản build đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
