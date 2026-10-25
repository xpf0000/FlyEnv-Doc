---
layout: doc
titleTemplate: false
title: 'Trình quản lý Java JDK và phiên bản Maven | FlyEnv'
description: 'Cài JDK từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, quản lý phiên bản Maven, và gắn runtime Java theo từng dự án.'
head:
  - - meta
    - name: description
      content: 'Cài JDK từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, quản lý phiên bản Maven, và gắn runtime Java theo từng dự án.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Java JDK và phiên bản Maven | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài JDK từ bản build tĩnh, Homebrew, MacPorts hay SDKMAN, quản lý phiên bản Maven, và gắn runtime Java theo từng dự án.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/java
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/java
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Java local với FlyEnv

Java là ngôn ngữ lập trình đa năng chạy trên JVM, được dùng rộng rãi cho các backend doanh nghiệp, ứng dụng Android và dịch vụ quy mô lớn, với Maven là một trong những công cụ build tiêu chuẩn của nó. FlyEnv quản lý phía Java của stack local trong một ứng dụng duy nhất: nhiều phiên bản JDK từ nhiều nguồn cài, một trình quản lý phiên bản Maven chuyên dụng, chuyển đổi phiên bản ở mức terminal, và gắn runtime Java theo từng dự án. Module Java được tổ chức thành bốn tab — Dự án Java, Dịch vụ, Trình quản lý phiên bản và Maven.

![Tổng quan module Java của FlyEnv](https://oss.macphpstudy.com/image/features/java-1.webp)

## Quản lý phiên bản JDK

Cài nhiều JDK song song từ **Java → Trình quản lý phiên bản** và chuyển đổi giữa chúng bất cứ lúc nào.

- **Nhiều nguồn cài đặt:** trên macOS, lựa chọn giữa các bản build JDK tĩnh `.tar.gz`, Homebrew (các formula `jdk` / `openjdk`), các port JDK của MacPorts và SDKMAN; trên Linux có bản build tĩnh, Homebrew và SDKMAN; trên Windows, JDK được cài từ danh sách tĩnh trực tuyến dưới dạng kho lưu trữ zip. Phần đầu của trình quản lý dẫn thẳng đến trang tải Microsoft OpenJDK.
- **Tự động phát hiện:** trên macOS, FlyEnv quét `/Library/Java/JavaVirtualMachines` và `~/.sdkman/candidates/java`, nên những JDK bạn đã cài qua hệ thống hay qua SDKMAN xuất hiện trong danh sách mà không cần thiết lập thủ công.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build JDK của riêng bạn để hiển thị nó cạnh các phiên bản được quản lý.
- **Alias và ghi chú theo từng phiên bản:** đặt cho mỗi lần cài một alias ngắn và ghi chú để các bản build tương tự vẫn dễ phân biệt trong danh sách.

![Trình quản lý phiên bản Java với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/java-2.webp)

![Các JDK được phát hiện từ thư mục hệ thống và SDKMAN](https://oss.macphpstudy.com/image/features/java-3.webp)

## Phiên bản Maven

Tab **Maven** bên trong module Java là một trình quản lý phiên bản đầy đủ riêng biệt, nhờ đó công cụ build của bạn cũng được quản lý phiên bản cùng với các JDK.

- Cài và giữ nhiều phiên bản Maven song song.
- Maven có thể cài từ Homebrew, MacPorts, bản build tĩnh và SDKMAN, tùy nền tảng của bạn.
- Thêm các bản cài Maven của riêng bạn từ các thư mục tùy chỉnh.
- Các nhóm chuẩn hóa trên Gradle nhận cùng kiểu quản lý phiên bản đa nguồn từ [module Gradle](/vi/features/gradle) chuyên dụng.

![Trình quản lý phiên bản Maven bên trong module Java](https://oss.macphpstudy.com/image/features/java-4.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Tab **Dịch vụ** liệt kê mọi JDK đã cài. Với Java, nó quản lý phiên bản và môi trường terminal của bạn — đây không phải bảng các dịch vụ nền đang chạy, vì bản thân JDK không chạy daemon nào.

- **Đặt phiên bản cho terminal:** chọn JDK nào mà các lệnh `java` và `javac` của bạn sẽ trỏ về. FlyEnv thêm hoặc xóa thư mục bin của phiên bản đó khỏi `PATH` của bạn và đánh dấu mục hiện tại do FlyEnv hay một công cụ khác đặt.
- **Alias lệnh và ghi chú:** đặt một alias ngắn cho từng phiên bản và gắn ghi chú để các bản build tương tự vẫn dễ phân biệt.
- **Thư mục tìm kiếm tùy chỉnh:** mở rộng nơi FlyEnv tìm kiếm các bản cài JDK sẵn có.

## Runtime Java cấp dự án

Các dự án khác nhau thường cần các JDK khác nhau. Trong **Java → Dự án Java**, đăng ký từng thư mục dự án và gắn nó với phiên bản Java riêng của nó.

- **Runtime theo từng dự án:** JDK được gắn được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nên các terminal và trình soạn thảo khởi chạy từ FlyEnv tự động nhận đúng Java.
- **Chạy như một dịch vụ:** khởi động dự án bằng lệnh chạy hoặc tệp chạy tùy chỉnh trực tiếp từ FlyEnv, với cổng dự án cấu hình được, sudo tùy chọn, tùy chọn chạy trong terminal, và biến môi trường cung cấp trực tiếp hoặc từ tệp env.
- **Cấu hình và log của dự án:** đăng ký tệp cấu hình và tệp log riêng cho từng dự án rồi xem chúng bằng các trình xem tích hợp sẵn.
- **Mở trong IDE:** nhảy từ một dòng dự án thẳng vào IntelliJ IDEA với môi trường dự án đã được nạp sẵn.

[Hướng dẫn môi trường phát triển Java](/vi/guide/set-up-java-development-environment) đi qua một thiết lập đầy đủ, và [giải pháp Spring Boot](/vi/solutions/spring-boot) cho thấy một JDK cấp dự án hòa vào một stack framework hoàn chỉnh thế nào. Với các bản triển khai trên servlet container, [module Tomcat](/vi/features/tomcat) chạy các ứng dụng kiểu WAR trên những JDK được quản lý ở đây, còn [giải pháp Metabase](/vi/solutions/metabase) là một ví dụ về stack ứng dụng Java dựng sẵn.

![Danh sách dự án Java với gắn JDK theo từng dự án](https://oss.macphpstudy.com/image/features/java-5.webp)

<FeatureRelatedLinks locale="vi" slug="java" />

## Lưu ý tương thích

FlyEnv quản lý các phiên bản JDK và Maven local cùng cấu hình môi trường xung quanh chúng; nó không đảm bảo mọi bản phân phối JDK, phiên bản Maven hay công cụ bên thứ ba đều khả dụng trên mọi hệ điều hành. Nguồn cài đặt khả dụng khác nhau giữa macOS, Linux và Windows, và các JDK do SDKMAN quản lý phụ thuộc vào bản cài SDKMAN của riêng bạn. Hãy đối chiếu yêu cầu của dự án với JDK đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
