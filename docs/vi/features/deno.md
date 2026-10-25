---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Deno và runtime dự án | FlyEnv'
description: 'Cài đặt các phiên bản Deno từ bản build tĩnh hoặc Homebrew, chuyển đổi binary đang hoạt động và chạy các dự án Deno local.'
head:
  - - meta
    - name: description
      content: 'Cài đặt các phiên bản Deno từ bản build tĩnh hoặc Homebrew, chuyển đổi binary đang hoạt động và chạy các dự án Deno local.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Deno và runtime dự án | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt các phiên bản Deno từ bản build tĩnh hoặc Homebrew, chuyển đổi binary đang hoạt động và chạy các dự án Deno local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/deno
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/deno
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Deno local với FlyEnv

Deno là một runtime cho JavaScript và TypeScript được xây dựng trên nền V8, do chính tác giả gốc của [Node.js](/vi/features/nodejs) tạo ra, hỗ trợ TypeScript ngay từ đầu và áp dụng mô hình phân quyền mặc định là từ chối. Nó thường được dùng cho server, script và các công cụ mà một binary tự chứa duy nhất mang lại sự thuận tiện. Module Deno của FlyEnv được thiết kế có trọng tâm rõ ràng: nó cài đặt các phiên bản Deno, quyết định lệnh `deno` trong terminal của bạn trỏ về phiên bản nào, và gắn mỗi dự án với runtime riêng của nó. Module gồm ba tab — Dự án, Dịch vụ và Trình quản lý phiên bản — bao phủ việc cài đặt phiên bản, kiểm soát PATH và runtime cho dự án, mà không có tệp cấu hình hay trình xem log nào cần quản lý.

![Tổng quan module Deno của FlyEnv](https://oss.macphpstudy.com/image/features/deno-1.webp)

## Quản lý phiên bản Deno

Cài đặt các phiên bản Deno song song từ **Deno → Trình quản lý phiên bản** và giữ tất cả luôn khả dụng.

- **Bản build tĩnh:** danh sách trực tuyến các gói Deno có sẵn trên mọi nền tảng; FlyEnv tải từng phiên bản về thư mục riêng của nó trong ứng dụng (`deno/<version>`) và tự động xóa thuộc tính cách ly (quarantine) trên macOS.
- **Homebrew (macOS và Linux):** cài đặt formula `deno`. Homebrew chỉ phát hành formula không kèm phiên bản này, nên không có biến thể có phiên bản `deno@x.y` nào để lựa chọn.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build Deno của riêng bạn; nó phát hiện phiên bản bằng cách chạy `deno --version` và hiển thị binary đó cạnh các phiên bản được quản lý.

![Trình quản lý phiên bản Deno với nguồn cài đặt tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/deno-2.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Tab **Dịch vụ** không khởi động gì cả — Deno là một binary runtime chứ không phải daemon, nên thứ tab này thực sự hiển thị là một bảng quản lý phiên bản và PATH.

- **Chuyển đổi phiên bản cho terminal:** chọn phiên bản đã cài mà lệnh `deno` trong terminal của bạn sẽ trỏ về. FlyEnv thêm hoặc xóa thư mục bin của phiên bản đó khỏi `PATH` của bạn tương ứng và cho biết mục PATH hiện tại thuộc về FlyEnv hay một công cụ khác. [Hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích chi tiết việc chỉnh sửa PATH này.
- **Alias và ghi chú theo từng phiên bản:** mỗi lần cài đặt có thể đặt một alias ngắn và một ghi chú, giúp các bản build tương tự vẫn dễ phân biệt trong danh sách.
- **Bảo trì:** bảng hiển thị đường dẫn cài đặt của từng phiên bản và cho phép bạn xóa những phiên bản không còn cần đến.

## Runtime Deno cấp dự án

Trong **Deno → Dự án**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Deno cụ thể thay vì phụ thuộc vào phiên bản tình cờ đang có trong PATH.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nên các terminal và trình soạn thảo khởi chạy từ FlyEnv tự động nhận đúng Deno. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và tính năng [Runtime theo từng dự án](/vi/features/per-project-runtimes) để hiểu cách cơ chế này hoạt động.
- **Chạy như một dịch vụ:** tùy chọn chạy dự án trực tiếp từ FlyEnv với lệnh khởi động tùy chỉnh; liên kết dự án là một địa chỉ `http://127.0.0.1:<port>` đơn giản, không tích hợp reverse proxy hay site.
- **Mở bằng công cụ:** nhảy từ một dòng dự án sang terminal hoặc trình soạn thảo với môi trường dự án đã được nạp sẵn.

![Danh sách Dự án Deno với gắn phiên bản Deno theo từng dự án](https://oss.macphpstudy.com/image/features/deno-3.webp)

<FeatureRelatedLinks locale="vi" slug="deno" />

## Lưu ý tương thích

FlyEnv quản lý việc cài đặt phiên bản Deno, chuyển đổi PATH và runtime cho dự án; nó không kèm theo các công cụ Deno ngoài những gì từng bản build Deno tự cung cấp, và module không có trình chỉnh sửa cấu hình, trình xem log hay bảng quản trị riêng. Nguồn cài đặt khả dụng khác nhau tùy nền tảng — Homebrew chỉ dành cho macOS và Linux, còn Windows dùng bản build tĩnh cùng các thư mục tùy chỉnh — vì vậy hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
