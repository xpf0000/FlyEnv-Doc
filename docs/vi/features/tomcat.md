---
layout: doc
titleTemplate: false
title: 'Tomcat Version Manager và host site Java | FlyEnv'
description: 'Chạy các phiên bản Tomcat với CATALINA_BASE theo từng phiên bản, chỉnh server.xml và web.xml, và host các site Java trực tiếp.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Tomcat với CATALINA_BASE theo từng phiên bản, chỉnh server.xml và web.xml, và host các site Java trực tiếp.'
  - - meta
    - property: og:title
      content: 'Tomcat Version Manager và host site Java | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Tomcat với CATALINA_BASE theo từng phiên bản, chỉnh server.xml và web.xml, và host các site Java trực tiếp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/tomcat
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/tomcat
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tomcat trong FlyEnv

Apache Tomcat là một Java servlet container mã nguồn mở: nó chạy các ứng dụng web Java được đóng gói dưới dạng tệp WAR, và nó là thứ một dự án cần khi dự án phát hành dưới dạng web app dựa trên servlet chứ không phải một jar tự chứa. FlyEnv chạy Apache Tomcat như một dịch vụ được quản lý: cài nhiều phiên bản Tomcat song song, trao cho mỗi phiên bản CATALINA_BASE riêng, chỉnh `server.xml` và `web.xml` từ các trình chỉnh sửa tích hợp sẵn, và theo dõi `catalina.out` mà không cần mở terminal. Vì Tomcat cần một JDK, FlyEnv lấy JAVA_HOME từ môi trường của module Java. Các site local kiểu Tomcat được ghi thẳng vào `server.xml` dưới dạng các mục Host, nhờ đó các ứng dụng web Java được phục vụ bởi chính Tomcat chứ không phải qua một web server khác.

![Tổng quan module Tomcat của FlyEnv](https://oss.macphpstudy.com/image/features/tomcat-1.webp)

## Quản lý phiên bản Tomcat

Cài nhiều phiên bản Tomcat song song từ tab **Version Manager** và chuyển qua lại giữa chúng bất cứ lúc nào.

- **Nguồn cài đặt:** bản build tĩnh trên macOS, Linux và Windows, cộng thêm Homebrew trên macOS và Linux (FlyEnv tìm kiếm các formula `tomcat` và `tomcat@x`). MacPorts và SDKMAN không được dùng cho Tomcat.
- **Thư mục base theo từng phiên bản:** mỗi phiên bản có CATALINA_BASE riêng (mặc định là một thư mục theo major version dưới thư mục dữ liệu của FlyEnv), nhờ đó vài phiên bản Tomcat giữ các cấu hình độc lập với nhau.

![Tomcat Version Manager với các nguồn cài Static và Homebrew](https://oss.macphpstudy.com/image/features/tomcat-2.webp)

## Quản lý dịch vụ

Khởi động, dừng và khởi động lại từng phiên bản Tomcat từ tab **Service**, với việc xử lý môi trường theo từng phiên bản tích hợp sẵn.

- **CATALINA_BASE theo từng phiên bản:** tab Service hiển thị một dòng tiêu đề bổ sung với đường dẫn CATALINA_BASE của phiên bản, thứ bạn có thể đổi; lựa chọn được lưu theo từng phiên bản. Ở lần khởi động đầu tiên, FlyEnv tạo thư mục base bằng cách sao chép các tệp `conf` từ bản cài đặt.
- **JAVA_HOME từ module Java:** Tomcat đòi hỏi Java, và FlyEnv cung cấp JAVA_HOME qua môi trường nó đồng bộ từ [module Java](/vi/features/java), nhờ đó Tomcat đang chạy dùng JDK mà bạn quản lý trong FlyEnv. [Hướng dẫn môi trường phát triển Java](/vi/guide/set-up-java-development-environment) trình bày việc cài và chuyển JDK.
- **Khởi động theo kiểu nền tảng:** trên macOS, Tomcat chạy ở foreground qua `catalina.sh run` với CATALINA_BASE, CATALINA_PID và JAVA_HOME đã đặt, với đầu ra console được thu về `logs/catalina.out`; trên Windows nó khởi động qua `startup.bat` và FlyEnv tìm ra tiến trình JVM; trên Linux nó chạy qua root helper.

![Tab Service của Tomcat với dòng CATALINA_BASE chỉnh được](https://oss.macphpstudy.com/image/features/tomcat-3.webp)

## Cấu hình

Mỗi phiên bản Tomcat giữ cấu hình của mình trong CATALINA_BASE, chỉnh được từ FlyEnv mà không phải săn tìm qua các thư mục.

- **Các tab `server.xml` và `web.xml`:** module có các tab chuyên dụng với trình chỉnh sửa thô cho hai tệp bạn hay thay đổi nhất.
- **Thêm các tệp cấu hình khác:** hỗ trợ cấu hình bên dưới còn bao phủ `context.xml`, `tomcat-users.xml`, `logging.properties`, `catalina.properties` và `catalina.policy`.

![Chỉnh server.xml cho một phiên bản Tomcat](https://oss.macphpstudy.com/image/features/tomcat-4.webp)

## Tích hợp site

Các site bạn tạo trong FlyEnv với kiểu **Tomcat** không phải là vhost reverse proxy — chúng trở thành các mục `<Host>` Tomcat thật được đối chiếu trực tiếp vào `server.xml` của phiên bản. Việc tạo site hoạt động như với bất kỳ kiểu nào khác; xem [Hướng dẫn Host](/vi/guide/host).

- **Đối chiếu với rollback:** khi một site được lưu, FlyEnv viết lại `server.xml` với mục Host của site, giữ một bản snapshot để tệp có thể được khôi phục nếu việc cập nhật thất bại.
- **SSL theo từng site:** các site Tomcat hỗ trợ HTTPS với một chứng chỉ và key, gồm cả chứng chỉ tự động của FlyEnv; xóa một site cũng dọn dẹp chứng chỉ tự sinh của nó.
- **Ngoài pipeline của các web server khác:** các site Tomcat bị loại khỏi việc sinh vhost cho Nginx, Apache, Caddy và FrankenPHP — Tomcat tự phục vụ chúng. Với các site trên các server khác, xem [Site local, tên miền tùy chỉnh & HTTPS](/vi/features/local-sites-https), và để có một hướng dẫn đầy đủ về web stack Java, xem [giải pháp Spring Boot](/vi/solutions/spring-boot).

![Một site kiểu Tomcat được đối chiếu vào server.xml dưới dạng mục Host](https://oss.macphpstudy.com/image/features/tomcat-5.webp)

## Log

Tab **Log** mở log console của Tomcat với tìm kiếm và làm mới tích hợp sẵn. Trên macOS và Linux đây là `logs/catalina.out` dưới CATALINA_BASE của phiên bản; trên Windows, FlyEnv đọc các tệp `catalina.<yyyy-MM-dd>.log` theo ngày.

<FeatureRelatedLinks locale="vi" slug="tomcat" />

## Lưu ý tương thích

FlyEnv quản lý runtime Tomcat local, cấu hình theo từng phiên bản và các mục Host của site; nó không đóng gói web app Tomcat manager hay đảm bảo mọi phiên bản Tomcat đều khả dụng từ mọi nguồn cài trên mọi hệ điều hành. Hãy đối chiếu JDK mà phiên bản Tomcat của bạn đòi hỏi với các phiên bản Java đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
