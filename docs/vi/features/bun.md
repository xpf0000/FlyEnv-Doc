---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Bun và runtime cho dự án | FlyEnv'
description: 'Cài đặt các phiên bản Bun từ bản dựng static, chuyển đổi binary đang hoạt động và chạy các dự án Bun như những dịch vụ được quản lý.'
head:
  - - meta
    - name: description
      content: 'Cài đặt các phiên bản Bun từ bản dựng static, chuyển đổi binary đang hoạt động và chạy các dự án Bun như những dịch vụ được quản lý.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Bun và runtime cho dự án | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt các phiên bản Bun từ bản dựng static, chuyển đổi binary đang hoạt động và chạy các dự án Bun như những dịch vụ được quản lý.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/bun
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/bun
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Lập trình Bun local với FlyEnv

Bun là một runtime JavaScript và TypeScript, đồng thời tích hợp sẵn trình quản lý gói, bundler và test runner trong một tệp thực thi duy nhất. Nó được dùng thay thế cho [Node.js](/vi/features/nodejs) cho các server, script và công cụ frontend. Module Bun của FlyEnv gom các việc thiết yếu khi làm việc với Bun local vào một nơi: cài đặt các phiên bản Bun từ bản dựng static, quyết định lệnh `bun` trong terminal của bạn trỏ về phiên bản nào, và gắn từng dự án với runtime riêng của nó. Module có ba tab — Projects, Service và Version Manager — tập trung vào cài đặt phiên bản, kiểm soát PATH và runtime của dự án.

![Tổng quan module Bun của FlyEnv](https://oss.macphpstudy.com/image/features/bun-1.webp)

## Quản lý phiên bản Bun

Cài đặt các phiên bản Bun song song từ **Bun → Version Manager** và giữ tất cả luôn sẵn sàng.

- **Chỉ có bản dựng static:** Bun được cài từ danh sách Static trực tuyến trên mọi nền tảng — macOS, Linux lẫn Windows. Các nguồn Homebrew và MacPorts được cung cấp cho các runtime khác không có sẵn cho Bun.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản dựng Bun của riêng bạn và nó sẽ xuất hiện trong danh sách cạnh các phiên bản được quản lý.
- **Vị trí cài được quản lý:** các phiên bản được giải nén vào thư mục ứng dụng của FlyEnv dưới `bun/<version>/`, và mỗi bản cài được phát hiện qua đầu ra `bun --version` thực tế của nó.
- **Thiết lập sau cài đặt:** sau khi cài một phiên bản, FlyEnv chạy `bun completions` để tính năng hoàn thành lệnh của shell hoạt động, và trên macOS nó xóa thuộc tính quarantine khỏi binary vừa tải xuống.

![Bun Version Manager với danh sách Static trực tuyến](https://oss.macphpstudy.com/image/features/bun-2.webp)

## Chuyển đổi phiên bản qua dòng lệnh

Ở đây không có gì chạy như một dịch vụ: FlyEnv không có daemon cho Bun, nên tab **Service** thực chất là một bảng liệt kê các phiên bản đã cài, tập trung vào việc quản lý PATH.

- **Chuyển đổi phiên bản trong terminal:** chọn phiên bản đã cài mà lệnh `bun` trong terminal sẽ trỏ về. FlyEnv lo phần `PATH` giúp bạn — thêm thư mục bin của phiên bản khi bạn chọn nó, gỡ đi khi bạn chuyển sang phiên bản khác — và hiển thị mục PATH đang hoạt động do FlyEnv hay do công cụ khác đặt. Xem [hướng dẫn thiết lập biến môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) để hiểu cách quản lý PATH hoạt động.
- **Alias và ghi chú theo từng phiên bản:** đặt cho mỗi bản cài một alias ngắn và một ghi chú riêng, để các bản dựng giống nhau không bị nhầm lẫn trong danh sách.
- **Dọn dẹp:** mỗi dòng hiển thị vị trí cài đặt của phiên bản, và những phiên bản không còn cần đến có thể bị xóa ngay từ bảng.

## Runtime Bun cấp dự án

Trong **Bun → Projects**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Bun cụ thể thay vì phụ thuộc vào phiên bản bất kỳ đang có trong PATH.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và editor khởi chạy từ FlyEnv tự động dùng đúng Bun. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và [tính năng Per-Project Runtimes](/vi/features/per-project-runtimes) để hiểu cơ chế này hoạt động ra sao.
- **Chạy như dịch vụ:** tùy chọn chạy một dự án trực tiếp từ FlyEnv với lệnh khởi chạy hoặc tệp run tùy chỉnh, một port TCP được hiển thị thành liên kết `http://127.0.0.1:<port>`, biến môi trường đặt ngay tại chỗ hoặc từ tệp, và cờ sudo trên macOS và Linux.
- **Công cụ mở nhanh:** từ một dòng dự án, nhảy thẳng vào terminal hệ thống hoặc editor với môi trường dự án đã được nạp.

![Danh sách Bun Projects với gắn kết phiên bản Bun theo từng dự án](https://oss.macphpstudy.com/image/features/bun-3.webp)

<FeatureRelatedLinks locale="vi" slug="bun" />

## Ghi chú tương thích

FlyEnv quản lý việc cài đặt phiên bản Bun, chuyển đổi PATH và runtime của dự án; bản thân module Bun không có tệp cấu hình cấp module, trình xem log hay bảng quản trị nào ngoài những gì binary Bun cung cấp. Các bản cài đến từ bản dựng Static trên mọi nền tảng, nên hãy coi [trang Tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham chiếu về các gói được hỗ trợ.
