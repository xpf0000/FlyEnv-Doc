---
layout: doc
titleTemplate: false
title: 'Zig Version Manager cho phát triển local | FlyEnv'
description: 'Cài đặt và chuyển phiên bản Zig từ bản build tĩnh, Homebrew hay MacPorts, và giới hạn một phiên bản cho từng dự án.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển phiên bản Zig từ bản build tĩnh, Homebrew hay MacPorts, và giới hạn một phiên bản cho từng dự án.'
  - - meta
    - property: og:title
      content: 'Zig Version Manager cho phát triển local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển phiên bản Zig từ bản build tĩnh, Homebrew hay MacPorts, và giới hạn một phiên bản cho từng dự án.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/zig
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/zig
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Zig local với FlyEnv

Zig là một ngôn ngữ lập trình hệ thống đa mục đích cùng toolchain của nó, với quản lý bộ nhớ thủ công và cross-compilation tích hợp sẵn. Nó được dùng cho các thành phần hệ thống, nền tảng nhúng và công cụ nhạy cảm về hiệu năng ở những nơi truyền thống người ta chọn C hay C++, và nó nằm trong cùng không gian lập trình hệ thống với [Rust](/vi/features/rust), thứ mà FlyEnv cũng quản lý. Module Zig của FlyEnv giữ các toolchain Zig local được tổ chức trong một nơi duy nhất: cài nhiều phiên bản Zig song song, quyết định cái nào mà lệnh `zig` trong terminal của bạn phân giải tới, và gắn mỗi dự án với phiên bản compiler riêng của nó. Module có ba tab — Projects, Service và Version Manager — tập trung vào cài phiên bản, điều khiển PATH và toolchain dự án.

![Tổng quan module Zig của FlyEnv](https://oss.macphpstudy.com/image/features/zig-1.webp)

## Quản lý phiên bản Zig

Cài các phiên bản Zig song song từ **Zig → Version Manager** và giữ tất cả chúng khả dụng cùng lúc. FlyEnv phát hiện mỗi bản cài bằng cách chạy `zig version`, nhờ đó danh sách luôn phản ánh các toolchain thật, chạy được.

- **Bản build tĩnh trên mọi nền tảng:** chọn từ một danh sách trực tuyến các bản build Zig cho macOS, Linux và Windows; chúng được giải nén vào thư mục `zig/<version>` riêng của FlyEnv. Trên macOS, FlyEnv xóa thuộc tính quarantine sau khi giải nén nhờ đó binary chạy không gặp các hộp thoại Gatekeeper.
- **Trình quản lý gói trên macOS:** cài qua Homebrew (formula `zig` và các formula có phiên bản `zig@<version>`) hay MacPorts cạnh nguồn Static.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa bản build Zig của riêng bạn và nó xuất hiện trong danh sách cạnh các phiên bản được quản lý.

![Zig Version Manager với các nguồn Static, Homebrew và MacPorts](https://oss.macphpstudy.com/image/features/zig-2.webp)

## Chuyển phiên bản dòng lệnh

Tab **Service** quản lý phiên bản và PATH, chứ không phải một tiến trình: Zig là một toolchain compiler, và FlyEnv không chạy daemon Zig nào. Sau cái tên là một bảng các phiên bản đã cài đơn giản.

- **Chuyển phiên bản terminal:** quyết định phiên bản đã cài nào mà lệnh `zig` trong terminal phân giải tới. FlyEnv sửa `PATH` của bạn bằng cách thêm hay xóa thư mục của phiên bản và đánh dấu mục PATH hiện tại do FlyEnv hay một công cụ khác tạo ra — [hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích các chi tiết.
- **Alias và ghi chú theo từng phiên bản:** một alias ngắn cùng một ghi chú tùy chọn cho mỗi bản cài giúp các bản build giống nhau vẫn phân biệt được trong danh sách.
- **Dọn dẹp:** các đường dẫn cài được hiển thị trong bảng, và việc xóa một phiên bản bạn không còn cần là một hành động một cú nhấp.

## Toolchain Zig cấp dự án

Trong **Zig → Projects**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Zig cụ thể thay vì dựa vào bất kỳ phiên bản nào tình cờ có trong PATH.

- **Toolchain theo từng dự án:** lựa chọn phiên bản được ghi vào một tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và trình soạn thảo mở từ FlyEnv nhận đúng Zig tự động. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và [tính năng Per-Project Runtimes](/vi/features/per-project-runtimes) để hiểu cơ chế hoạt động.
- **Chạy như dịch vụ:** tùy chọn chạy một dự án trực tiếp từ FlyEnv với một lệnh khởi động tùy chỉnh, một cổng TCP hiển thị dưới dạng liên kết `http://127.0.0.1:<port>`, và các biến môi trường đặt trực tiếp hay từ một tệp. Công tắc thanh bên khởi động hay dừng tất cả các dự án Zig có bật dịch vụ cùng lúc.

![Danh sách Zig Projects với việc gắn phiên bản Zig theo từng dự án](https://oss.macphpstudy.com/image/features/zig-3.webp)

<FeatureRelatedLinks locale="vi" slug="zig" />

## Lưu ý tương thích

FlyEnv quản lý việc cài phiên bản Zig, chuyển PATH và toolchain dự án; nó không đóng gói công cụ build-system hay gói vượt ra ngoài những gì mỗi bản build Zig tự cung cấp. Các nguồn cài khả dụng khác nhau theo nền tảng — Homebrew và MacPorts chỉ là nguồn trên macOS, trong khi Windows dùng danh sách trực tuyến tĩnh — nhờ đó hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
