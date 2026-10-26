---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Erlang/OTP cho phát triển local | FlyEnv'
description: 'Cài đặt các phiên bản Erlang/OTP từ Homebrew, MacPorts hoặc bản build tĩnh, và gắn một phiên bản cho từng dự án.'
head:
  - - meta
    - name: description
      content: 'Cài đặt các phiên bản Erlang/OTP từ Homebrew, MacPorts hoặc bản build tĩnh, và gắn một phiên bản cho từng dự án.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Erlang/OTP cho phát triển local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt các phiên bản Erlang/OTP từ Homebrew, MacPorts hoặc bản build tĩnh, và gắn một phiên bản cho từng dự án.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/erlang
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/erlang
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Erlang local với FlyEnv

Erlang/OTP là ngôn ngữ lập trình hàm và nền tảng runtime được xây dựng cho các hệ thống đồng thời cao, chịu lỗi tốt. Nó thường được dùng cho hạ tầng viễn thông, nền tảng nhắn tin và các dịch vụ khác phải luôn khả dụng dưới tải lớn. Module Erlang của FlyEnv gom việc phát triển Erlang/OTP local về một nơi: cài nhiều phiên bản Erlang, quyết định lệnh `erl` trong terminal của bạn trỏ về phiên bản nào, và gắn từng dự án với runtime riêng của nó. Module gồm ba tab — Dự án Erlang, Dịch vụ và Trình quản lý phiên bản — tập trung vào cài đặt phiên bản, kiểm soát PATH và runtime cho dự án.

![Tổng quan module Erlang của FlyEnv](https://oss.macphpstudy.com/image/features/erlang-1.webp)

## Quản lý phiên bản Erlang

Cài các phiên bản Erlang/OTP song song từ **Erlang → Trình quản lý phiên bản** và giữ tất cả luôn khả dụng.

- **macOS:** cài từ Homebrew (formula `erlang` và các formula có phiên bản `erlang@<ver>`) hoặc MacPorts; FlyEnv cũng tự quét thư mục library của MacPorts để tìm các bản cài Erlang sẵn có. Điều này đáp ứng phần lớn nhu cầu local, kể cả việc chạy một dịch vụ dựa trên Erlang như [RabbitMQ](/vi/features/rabbitmq) song song với các dự án của riêng bạn.
- **Linux:** cài từ Homebrew; MacPorts chỉ là nguồn dành cho macOS. Không có nguồn tĩnh trên macOS hay Linux.
- **Windows:** cài từ danh sách tĩnh trực tuyến gồm các bản build đóng gói sẵn, mỗi bản chứa tệp thực thi `bin/erl.exe`.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build Erlang của riêng bạn và nó sẽ xuất hiện trong danh sách cạnh các phiên bản được quản lý.
- **Tự động phát hiện phiên bản:** trên macOS và Linux, mỗi lần cài được kiểm tra bằng `erl -version`; trên Windows, phiên bản được đọc từ tên thư mục cài đặt.

![Trình quản lý phiên bản Erlang với nguồn Homebrew và MacPorts](https://oss.macphpstudy.com/image/features/erlang-2.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Tab **Dịch vụ** không chứa bất kỳ dịch vụ nào — Erlang không có tiến trình daemon bên trong FlyEnv. Đây là một bảng các phiên bản đã cài dùng để quản lý phiên bản và PATH.

- **Chuyển đổi phiên bản cho terminal:** chọn phiên bản đã cài mà lệnh `erl` trong terminal sẽ trỏ về. FlyEnv sau đó cập nhật `PATH` của bạn, thêm hoặc xóa thư mục bin của phiên bản, và đánh dấu mục PATH hiện tại do FlyEnv hay một công cụ khác đặt. [Hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích chi tiết cách chỉnh sửa PATH này hoạt động.
- **Alias và ghi chú theo từng phiên bản:** gán cho mỗi lần cài một alias ngắn và một ghi chú để các bản build tương tự vẫn dễ phân biệt trong danh sách.
- **Bảo trì:** đường dẫn cài đặt của từng phiên bản hiển thị ngay trong bảng, và các phiên bản không còn cần đến có thể xóa từ đó.

## Runtime Erlang cấp dự án

Trong **Erlang → Dự án**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Erlang cụ thể thay vì phụ thuộc vào phiên bản tình cờ đang có trong PATH.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nên các terminal và trình soạn thảo khởi chạy từ FlyEnv tự động nhận đúng Erlang. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và tính năng [Runtime theo từng dự án](/vi/features/per-project-runtimes) để hiểu cách cơ chế này hoạt động.
- **Chạy như một dịch vụ:** tùy chọn chạy dự án trực tiếp từ FlyEnv với lệnh khởi động tùy chỉnh, một cổng TCP hiển thị dưới dạng liên kết `http://127.0.0.1:<port>`, biến môi trường đặt trực tiếp hoặc từ tệp, và cờ sudo trên macOS và Linux. Công tắc ở thanh bên khởi động hoặc dừng toàn bộ các dự án Erlang đã bật dịch vụ cùng một lúc.
- **Mở bằng công cụ:** nhảy từ một dòng dự án vào terminal hệ thống với môi trường dự án đã được nạp sẵn.

![Danh sách Dự án Erlang với gắn phiên bản Erlang theo từng dự án](https://oss.macphpstudy.com/image/features/erlang-3.webp)

<FeatureRelatedLinks locale="vi" slug="erlang" />

## Lưu ý tương thích

FlyEnv quản lý việc cài đặt phiên bản Erlang, chuyển đổi PATH và runtime cho dự án; nó không đóng gói công cụ build hay công cụ framework ngoài những gì từng bản build Erlang/OTP tự cung cấp, và module không có trình chỉnh sửa tệp cấu hình hay trình xem log riêng. Nguồn cài đặt khả dụng khác nhau tùy nền tảng — Homebrew và MacPorts trên macOS, Homebrew trên Linux, bản build tĩnh trên Windows — vì vậy hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
