---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Gradle với hỗ trợ SDKMAN | FlyEnv'
description: 'Cài đặt và chuyển đổi phiên bản Gradle từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, và đặt phiên bản mặc định cho terminal.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển đổi phiên bản Gradle từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, và đặt phiên bản mặc định cho terminal.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Gradle với hỗ trợ SDKMAN | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển đổi phiên bản Gradle từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, và đặt phiên bản mặc định cho terminal.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/gradle
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/gradle
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Quản lý phiên bản Gradle với FlyEnv

Gradle là công cụ tự động hóa build được dùng chủ yếu cho các dự án Java, Kotlin và Android, đảm nhận biên dịch, quản lý phần phụ thuộc, kiểm thử và đóng gói — đây là công cụ build tiêu chuẩn đằng sau các framework như [Spring Boot](/vi/solutions/spring-boot). FlyEnv giữ nhiều phiên bản Gradle trên một máy và chuyển đổi phiên bản mà terminal của bạn dùng. Module Gradle tập trung vào hai việc: cài đặt phiên bản từ nhiều nguồn, và kiểm soát binary `gradle` nào mà shell của bạn trỏ về. Nó không chạy dịch vụ nền nào — không có gì để khởi động hay dừng.

![Tổng quan module Gradle của FlyEnv](https://oss.macphpstudy.com/image/features/gradle-1.webp)

## Quản lý phiên bản Gradle

Mở **Gradle → Trình quản lý phiên bản** để cài và quản lý các bản phân phối Gradle song song.

- **Nhiều nguồn cài đặt:** bản build tĩnh trên macOS, Linux và Windows, Homebrew và MacPorts trên macOS, và SDKMAN trên macOS và Linux — chọn nguồn nào đang quản lý các công cụ trên máy của bạn thì dùng nguồn đó.
- **Phát hiện SDKMAN:** FlyEnv tự động quét `~/.sdkman/candidates/gradle`, nên các phiên bản bạn cài bằng SDKMAN sẽ xuất hiện trong danh sách cạnh những phiên bản do FlyEnv quản lý.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản phân phối Gradle của riêng bạn; nó phát hiện binary `bin/gradle` (`gradle.bat` trên Windows) và liệt kê cạnh các phiên bản được quản lý.
- **Cài sạch sẽ:** bản build tĩnh được giải nén vào thư mục ứng dụng riêng của FlyEnv dưới dạng `gradle/<version>/`, được xác minh bằng `gradle --version`, và thuộc tính cách ly của macOS được xóa tự động sau khi giải nén.

![Trình quản lý phiên bản Gradle với nguồn tĩnh, Homebrew, MacPorts và SDKMAN](https://oss.macphpstudy.com/image/features/gradle-2.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Tab **Dịch vụ** là một bảng các phiên bản đã cài — bất chấp tên gọi, Gradle không phải một dịch vụ đang chạy, nên tab này quản lý phiên bản và PATH thay vì các tiến trình.

- **Phiên bản mặc định cho terminal:** đặt phiên bản đã cài nào mà lệnh `gradle` trong terminal của bạn sẽ trỏ về. FlyEnv thêm hoặc xóa thư mục `bin` của phiên bản đó khỏi `PATH` của bạn và đánh dấu mục hiện tại do FlyEnv hay một công cụ khác đặt.
- **Alias theo từng phiên bản:** đặt cho mỗi lần cài một alias ngắn để các bản build tương tự vẫn dễ phân biệt trong danh sách.
- **Ghi chú theo từng phiên bản:** gắn một ghi chú tự do vào bất kỳ phiên bản nào để ghi lại nó dùng để làm gì.
- **Xóa dễ dàng:** xóa các phiên bản không còn cần đến trực tiếp từ bảng.

Gradle cần một runtime [Java](/vi/features/java) trên `PATH`; [hướng dẫn thiết lập môi trường Java](/vi/guide/set-up-java-development-environment) trình bày cách cài JDK với FlyEnv. Tải chính ứng dụng từ [trang tải xuống](/vi/download).

<FeatureRelatedLinks locale="vi" slug="gradle" />

## Lưu ý tương thích

Trang Gradle chỉ bao gồm quản lý phiên bản và PATH — nó không có cơ chế gắn dự án riêng. Việc gắn runtime theo từng dự án do các module ngôn ngữ đảm nhiệm; xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment). Nguồn cài đặt khả dụng khác nhau tùy hệ điều hành, vì vậy hãy coi Trình quản lý phiên bản trong bản FlyEnv bạn đã cài là danh sách chuẩn xác.
