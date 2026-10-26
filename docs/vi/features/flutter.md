---
layout: doc
titleTemplate: false
title: 'Trình quản lý Flutter SDK, Flutter Doctor và bộ công cụ Android | FlyEnv'
description: 'Quản lý các phiên bản Flutter SDK, chạy Flutter Doctor, tạo và chỉnh sửa dự án, sửa bộ công cụ Android của bạn trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Quản lý các phiên bản Flutter SDK, chạy Flutter Doctor, tạo và chỉnh sửa dự án, sửa bộ công cụ Android của bạn trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Flutter SDK, Flutter Doctor và bộ công cụ Android | FlyEnv'
  - - meta
    - property: og:description
      content: 'Quản lý các phiên bản Flutter SDK, chạy Flutter Doctor, tạo và chỉnh sửa dự án, sửa bộ công cụ Android của bạn trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/flutter
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/flutter
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Flutter với FlyEnv

Flutter là bộ công cụ UI mã nguồn mở của Google dùng để xây dựng ứng dụng di động, web và desktop đa nền tảng từ một codebase Dart duy nhất. FlyEnv bao trọn toàn bộ thiết lập Flutter local trong một module: cài đặt và chuyển đổi các phiên bản Flutter SDK lấy thẳng từ danh sách phát hành chính thức của Google, ảnh chụp Flutter Doctor đã được phân tích, một Command Center cho các lệnh Flutter và Dart hằng ngày, tạo và chỉnh sửa dự án có hướng dẫn, cùng một bộ kiểm tra bộ công cụ Android với các bản sửa tự động.

![Tổng quan module Flutter của FlyEnv](https://oss.macphpstudy.com/image/features/flutter-1.webp)

## Quản lý phiên bản Flutter SDK

Tab **Trình quản lý phiên bản** chỉ cài Flutter SDK từ nguồn tĩnh — Homebrew và MacPorts không được cung cấp cho Flutter.

- **Danh sách phát hành chính thức:** các phiên bản được lấy trực tiếp từ các tệp `releases_{macos,linux,windows}.json` chính thức của Google lưu trên `storage.googleapis.com/flutter_infra_release`, chứ không phải từ một chỉ mục bên thứ ba.
- **Kênh stable và beta:** một bộ chọn kênh lọc danh sách theo các kênh stable và beta, và trên macOS danh sách nhận biết kiến trúc nên máy Apple Silicon và Intel mỗi bên nhận đúng bộ lưu trữ của mình.
- **Xử lý git checkout:** sau khi bộ lưu trữ SDK được giải nén, FlyEnv chạy `git init` bên trong thư mục SDK, vì Flutter kỳ vọng SDK của nó nằm trong một git checkout.
- **Chuyển đổi PATH:** tab **Dịch vụ** liệt kê mọi SDK được phát hiện và cho phép bạn thêm một phiên bản vào `PATH` của terminal hoặc xóa khỏi đó, đồng thời cho biết mục hiện tại do FlyEnv hay một công cụ khác đặt.

![Trình quản lý phiên bản Flutter với bộ chọn kênh stable và beta](https://oss.macphpstudy.com/image/features/flutter-2.webp)

## Trạng thái SDK và Flutter Doctor

Tab **Tổng quan** là bảng điều khiển cho môi trường Flutter của bạn.

- **Thẻ trạng thái:** nhìn một cái là thấy phiên bản Flutter, phiên bản Dart đi kèm, kênh hiện tại, trạng thái Android SDK và số thiết bị ADB đã kết nối.
- **Bảng chi tiết SDK:** hiển thị phiên bản SDK, kênh và nguồn — được tìm thấy trên `PATH`, ở vị trí mặc định, trong thư mục tùy chỉnh, hay do FlyEnv cài — cùng các thư mục tìm kiếm đã được quét. Phạm vi phát hiện bao gồm `PATH`, `FLUTTER_ROOT`, `~/development/flutter`, `~/flutter`, `/opt/flutter`, `/usr/local/flutter`, các vị trí Windows thường gặp như đường dẫn scoop và AppData, các thư mục tùy chỉnh của bạn, và các thư mục SDK do FlyEnv quản lý.
- **Ảnh chụp Flutter Doctor:** một khung xem đã phân tích đầu ra `flutter doctor -v`, để bạn đọc chẩn đoán đầy đủ mà không cần mở terminal.

![Tab Tổng quan với thẻ trạng thái và đầu ra Flutter Doctor đã phân tích](https://oss.macphpstudy.com/image/features/flutter-3.webp)

## Command Center

Cũng nằm trên tab **Tổng quan**, Command Center chạy các lệnh bạn dùng hằng ngày vào một SDK hoặc thư mục dự án đã chọn, với một khung console chung hiển thị stdout và stderr thật (giữ tối đa 120 KB đầu ra cuối cùng).

- **Flutter SDK:** chạy `flutter upgrade`, liệt kê các kênh khả dụng và chuyển đổi giữa stable, beta và master.
- **Pub Tools:** chạy `pub get`, `pub upgrade`, `pub outdated` và `pub deps` vào một thư mục dự án đã chọn.
- **Build:** `flutter build apk --debug` hoặc `--release`, `flutter build web`, `flutter build windows` và `flutter clean`.
- **Chất lượng:** `flutter analyze`, `flutter test` và `dart format`.
- **Doctor:** chạy lại Flutter Doctor từ chính console đó khi bạn cần chẩn đoán mới.

![Command Center chạy các lệnh pub và build với đầu ra console](https://oss.macphpstudy.com/image/features/flutter-4.webp)

## Tạo và chỉnh sửa dự án

Tab **Dự án Flutter** liệt kê các dự án của bạn và gắn mỗi dự án với phiên bản Flutter riêng của nó, theo cùng mô hình [môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) như các module ngôn ngữ khác.

**Create Project** dựng khung một dự án Flutter mới mà không cần rời khỏi ứng dụng:

1. Đặt tên dự án, thư mục đầu ra, organization và template — `app`, `package`, `plugin`, `module` hoặc `skeleton` — và tùy chọn ghim một phiên bản Flutter cụ thể.
2. Cấu hình định danh theo từng nền tảng: tên gói Android, iOS bundle ID, tên ứng dụng web và desktop bundle ID.
3. Tìm kiếm trên pub.dev và thêm các phần phụ thuộc (bao gồm dev dependencies) trước khi dự án tồn tại.
4. Gắn tệp cấu hình Firebase theo từng nền tảng và đặt biểu tượng ứng dụng cho từng nền tảng; dự án hoàn tất được thêm vào danh sách dự án tự động.

**Edit Project** mở lại cùng các thiết lập cho một dự án hiện có: cập nhật định danh và tên gói của nó, quản lý các phần phụ thuộc trong `pubspec.yaml` với báo cáo gói lỗi thời so sánh phiên bản hiện tại và phiên bản mới nhất cùng đánh dấu thứ gì có thể nâng cấp, và thay thế tệp Firebase hay biểu tượng ứng dụng.

![Tạo dự án Flutter với template, tên gói và các phần phụ thuộc pub.dev](https://oss.macphpstudy.com/image/features/flutter-5.webp)

## Bộ công cụ Android

Tab **Android** kiểm tra mọi thứ Flutter cần cho các bản build Android và giúp bạn sửa những thứ còn thiếu.

- **Biến môi trường:** hiển thị các giá trị `ANDROID_HOME`, `ANDROID_SDK_ROOT` và `JAVA_HOME` hiện tại. [Hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích cách FlyEnv quản lý loại biến và mục PATH này giữa các công cụ.
- **Kiểm tra độ sẵn sàng:** xác minh Android SDK, platform-tools, ADB, cmdline-tools, build-tools, JDK và Gradle, mỗi mục kèm gợi ý sửa khi có thứ gì đó bị thiếu hay cấu hình sai. Các module [Java](/vi/features/java) và [Gradle](/vi/features/gradle) của FlyEnv có thể cài đặt và quản lý cả hai phần phụ thuộc đó.
- **Sửa tự động:** các thao tác một cú nhấp đặt biến môi trường SDK và thêm platform-tools vào `PATH` của bạn.
- **Thiết bị ADB:** liệt kê các thiết bị đã kết nối với các thao tác chọn thiết bị đích, ngắt kết nối một thiết bị hoặc xem thông tin của nó.
- **Thao tác nhanh:** chạy `flutter run`, `flutter build apk` hay `flutter build appbundle` trên một dự án đã chọn, nhắm vào thiết bị đang chọn.

![Kiểm tra bộ công cụ Android với các thao tác sửa và danh sách thiết bị ADB](https://oss.macphpstudy.com/image/features/flutter-6.webp)

<FeatureRelatedLinks locale="vi" slug="flutter" />

## Lưu ý tương thích

Module Flutter quản lý việc cài đặt SDK, biến môi trường và thực thi lệnh; nó không đóng gói Android SDK, JDK hay các trình giả lập thiết bị, và không đảm bảo mọi phiên bản Flutter hay Dart đều build được trên mọi hệ điều hành. Đầu ra lệnh hiển thị trong console của tab Tổng quan thay vì trong các trình xem tệp log. Kiểm tra [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại để biết các nền tảng và gói được hỗ trợ.
