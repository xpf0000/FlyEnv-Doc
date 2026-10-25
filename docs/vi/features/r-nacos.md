---
layout: doc
titleTemplate: false
title: 'R-NACOS Console cho service discovery local | FlyEnv'
description: 'Chạy các phiên bản R-NACOS với cấu hình dựa trên env và console tích hợp sẵn cho service discovery và cấu hình.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản R-NACOS với cấu hình dựa trên env và console tích hợp sẵn cho service discovery và cấu hình.'
  - - meta
    - property: og:title
      content: 'R-NACOS Console cho service discovery local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản R-NACOS với cấu hình dựa trên env và console tích hợp sẵn cho service discovery và cấu hình.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/r-nacos
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/r-nacos
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# R-NACOS trong FlyEnv

R-NACOS là một service registry và configuration center mã nguồn mở viết bằng Rust, tương thích với giao thức Nacos được dùng khắp hệ sinh thái Java microservice của Alibaba — cùng thế giới với các dịch vụ [Spring Boot](/vi/solutions/spring-boot) được xây dựng trên một [môi trường Java local](/vi/guide/set-up-java-development-environment). Các stack microservice dùng nó để đăng ký và khám phá các service instance, và để phát hành cấu hình động mà client theo dõi tại runtime. FlyEnv chạy R-NACOS như một dịch vụ local được quản lý: cài các phiên bản từ bản build tĩnh hay Homebrew, khởi động binary `rnacos` với một tệp `rnacos.env` được sinh ra, chỉnh cấu hình đó trong một trình chỉnh sửa tích hợp sẵn, và mở console R-NACOS để làm việc với service discovery và cấu hình chỉ với một cú nhấp. Để lấy FlyEnv, hãy tới [trang tải xuống](/vi/download); các hướng dẫn thực hành nằm trong [bản demo](/vi/demos).

![Tổng quan module R-Nacos của FlyEnv với các tab Service, Version Manager, Config File và Log](https://oss.macphpstudy.com/image/features/r-nacos-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản R-Nacos song song từ **R-Nacos → Version Manager**, rồi chọn phiên bản nào mà dịch vụ chạy.

- **Bản build trực tuyến tĩnh:** danh sách phiên bản lấy từ danh mục trực tuyến của FlyEnv, với các gói theo hệ điều hành và kiến trúc; trên macOS thuộc tính quarantine được gỡ tự động sau khi cài.
- **Homebrew với tap tự động:** trên macOS và Linux, FlyEnv tap `r-nacos/r-nacos` giúp bạn nếu nó còn thiếu, nhờ đó các formula Homebrew hiện ra mà không cần làm gì thủ công trên terminal.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa binary `rnacos` của riêng bạn và nó xuất hiện trong danh sách cạnh các phiên bản được quản lý.
- **Một phiên bản chạy:** việc khởi động một phiên bản bị chặn khi một phiên bản R-Nacos khác đang chạy, nhờ đó luôn có một bản build duy nhất, đã biết đứng sau các cổng.

![R-Nacos Version Manager với các nguồn cài tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/r-nacos-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi chạy binary thật dưới dạng `rnacos -e rnacos.env`: nó phân tích tệp env, bơm mọi mục vào môi trường tiến trình, và ép `RNACOS_DATA_DIR` về thư mục dữ liệu riêng của FlyEnv nhờ đó tất cả các phiên bản được quản lý dùng chung một vị trí lưu trữ đã biết.

- **Mẫu env được sinh ra:** `rnacos.env` mặc định ghi lại các cổng chuẩn — HTTP API trên 8848, gRPC trên 9848, console trên 10848 — cộng với tài khoản console mặc định `admin/admin` và mức ghi log `RUST_LOG`.
- **Trình chỉnh sửa thô:** tab **Config File** chỉnh `rnacos.env` trực tiếp theo kiểu `.env`, giữ mẫu làm tham chiếu khôi phục, và liên kết ra tài liệu biến môi trường chính thức của R-Nacos.
- **Không bao giờ ghi đè chỉnh sửa của bạn:** FlyEnv chỉ sinh tệp env khi nó còn thiếu; một khi bạn đã tùy chỉnh nó, phiên bản của bạn không bị đụng tới.

![Cấu hình R-Nacos](https://oss.macphpstudy.com/image/features/r-nacos-3.webp)

## Console (10848)

R-NACOS đi kèm web console tích hợp sẵn của riêng nó, và FlyEnv nối nó vào tab Service. Khi dịch vụ đang chạy, nút console mở `http://127.0.0.1:10848/rnacos/` trong trình duyệt của bạn — đăng nhập bằng tài khoản từ `rnacos.env` (`admin/admin` theo mặc định) để đăng ký instance, theo dõi tình trạng dịch vụ, và phát hành hay chỉnh các mục cấu hình.

![Console R-Nacos mở trong trình duyệt từ FlyEnv](https://oss.macphpstudy.com/image/features/r-nacos-4.webp)

## Log

Tab **Log** chuyển đổi giữa các luồng khởi động theo từng phiên bản — `rnacos-<version>-start-out.log` và `rnacos-<version>-start-error.log`. Khi một phiên bản không khởi động nổi hay một client không thể kết nối trên 8848, log lỗi là nơi đầu tiên cần xem.

<FeatureRelatedLinks locale="vi" slug="r-nacos" />

## Lưu ý tương thích

FlyEnv quản lý runtime R-Nacos local, tệp env và thư mục dữ liệu của nó; ứng dụng không đảm bảo mọi phiên bản R-Nacos đều khả dụng trên mọi hệ điều hành hay nguồn cài. Bản cài Homebrew được cung cấp trên macOS và Linux, bản build tĩnh trên mọi nền tảng, còn nguồn MacPorts không được bật cho module này. FlyEnv còn đi kèm [Consul](/vi/features/consul) như một module service discovery thay thế khi một stack kỳ vọng công cụ HashiCorp thay vì giao thức Nacos. Lưu ý nút console quyết định cổng cần mở độc lập với tệp `rnacos.env`, nhờ đó nếu bạn đổi cổng console ra khỏi 10848, hãy mở console thủ công tại địa chỉ bạn đã cấu hình. Về những gì thực sự cài được trên máy bạn, hãy dựa vào danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download).
