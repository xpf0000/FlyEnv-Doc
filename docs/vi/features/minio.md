---
layout: doc
titleTemplate: false
title: 'Lưu trữ đối tượng tương thích S3 local với MinIO | FlyEnv'
description: 'Chạy các phiên bản MinIO với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và MinIO Console trên 9001.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản MinIO với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và MinIO Console trên 9001.'
  - - meta
    - property: og:title
      content: 'Lưu trữ đối tượng tương thích S3 local với MinIO | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản MinIO với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và MinIO Console trên 9001.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/minio
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/minio
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Lưu trữ đối tượng local với FlyEnv

MinIO là một object storage server mã nguồn mở nói ngôn ngữ Amazon S3 API. Các nhà phát triển tìm đến nó khi một ứng dụng cần lưu trữ tương thích S3 trong lúc phát triển và kiểm thử mà không phải dựng các bucket cloud thật. FlyEnv chạy MinIO như một dịch vụ local được quản lý, mang lại cho bạn kiểu lưu trữ đó mà không cần Docker hay thiết lập thủ công. Cài các phiên bản MinIO từ ứng dụng, chỉnh `minio.conf` qua một biểu mẫu cài đặt trực quan, cấp cho mỗi phiên bản thư mục dữ liệu riêng, và mở MinIO Console trong trình duyệt chỉ với một cú nhấp.

![Tổng quan module MinIO của FlyEnv](https://oss.macphpstudy.com/image/features/minio-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản MinIO từ **MinIO → Trình quản lý phiên bản**, và chọn phiên bản mà dịch vụ chạy.

- **Nguồn cài đặt:** một danh sách tĩnh trực tuyến gồm các bản build MinIO dựng sẵn, cùng Homebrew trên các nền tảng có cung cấp.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài MinIO của riêng bạn; FlyEnv liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Xử lý khi cài:** sau khi cài trên macOS, FlyEnv sửa quyền của binary (`chmod 0755`) và xóa thuộc tính cách ly để server khởi động được ngay.

![Trình quản lý phiên bản MinIO với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/minio-2.webp)

## Dịch vụ và cấu hình

Tab Dịch vụ khởi động phiên bản MinIO đã chọn như một tiến trình foreground thật — `minio server <dataDir>` với các cờ `--address`, `--console-address` và `--certs-dir` được dựng từ cấu hình của bạn. Một tệp pid cố định giữ module ở một instance đang chạy duy nhất, và công tắc ở thanh bên (cũng có trong khay hệ thống) khởi động hay dừng dịch vụ.

- **Thư mục dữ liệu theo từng phiên bản:** mỗi phiên bản MinIO lưu các đối tượng của mình trong thư mục riêng (mặc định `minio/data` dưới thư mục MinIO của FlyEnv). Thay nó bằng bộ chọn thư mục trên thanh công cụ Dịch vụ; lựa chọn được ghi nhớ cho từng phiên bản.
- **Biểu mẫu Common Settings trực quan:** tab Tệp cấu hình chỉnh `minio/minio.conf` qua một biểu mẫu nhóm khoảng 30 khóa theo Network, Security, Storage, Cluster, Performance và General — `MINIO_ADDRESS`, `MINIO_CONSOLE_ADDRESS`, `MINIO_ROOT_USER` và `MINIO_ROOT_PASSWORD` (mặc định `minioadmin`/`minioadmin`), thư mục chứng chỉ, bật/tắt trình duyệt, các lớp erasure-code, tùy chọn tinh chỉnh [etcd](/vi/features/etcd) và API.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ của `minio.conf` cho bất cứ thứ gì biểu mẫu chưa bao phủ; các dòng `MINIO_*` được áp dụng cho server ở lần khởi động kế tiếp.

![Tệp cấu hình MinIO với biểu mẫu Common Settings](https://oss.macphpstudy.com/image/features/minio-3.webp)

## MinIO Console

MinIO đi kèm một web Console riêng, và FlyEnv kết nối sẵn giúp bạn. Địa chỉ console được chuẩn hóa về `127.0.0.1:9001` theo mặc định (có thể điều chỉnh qua `MINIO_CONSOLE_ADDRESS` trong cấu hình), và nút Console trên thanh công cụ Dịch vụ mở nó trực tiếp trong trình duyệt của bạn — không cần cài thêm gì, không phải săn cổng. Đăng nhập bằng thông tin root từ cấu hình để quản lý bucket, đối tượng và chính sách truy cập qua web UI chính thức của MinIO.

![MinIO Console](https://oss.macphpstudy.com/image/features/minio-4.webp)

## Log

Tab Log mở các tệp log theo từng phiên bản trực tiếp bên trong FlyEnv: `minio-<version>-start-out.log` cho đầu ra chuẩn và `minio-<version>-start-error.log` cho lỗi. Khi một phiên bản không khởi động được, log lỗi là nơi đầu tiên cần xem — xung đột cổng và sự cố thư mục dữ liệu đều hiện ra ở đó ngay lập tức.

![Trình xem log MinIO theo từng phiên bản](https://oss.macphpstudy.com/image/features/minio-5.webp)

<FeatureRelatedLinks locale="vi" slug="minio" />

## Lưu ý tương thích

Module MinIO chạy một instance mỗi lúc — một phiên bản, một thư mục dữ liệu, một địa chỉ console — nên hãy chuyển phiên bản hay thư mục dữ liệu từ tab Dịch vụ thay vì khởi động vài server cùng lúc. Các phiên bản được cung cấp trong Trình quản lý phiên bản phụ thuộc vào danh sách tĩnh trực tuyến và vào những gì Homebrew phát hành cho nền tảng của bạn; MacPorts không phải là nguồn cài cho MinIO. FlyEnv quản lý tiến trình MinIO local, tệp cấu hình và các thư mục dữ liệu của nó; nội dung bucket, chính sách truy cập và mọi thứ bên trong API tương thích S3 thuộc về chính MinIO. Các ứng dụng nói ngôn ngữ S3 API — chẳng hạn trình cung cấp tải lên của một site [Strapi](/vi/solutions/strapi) hay bộ lưu trữ ngoài của một instance [Nextcloud](/vi/solutions/nextcloud) — có thể nhắm vào endpoint local này trong lúc phát triển, và [RustFS](/vi/features/rustfs) khả dụng như một module tương thích S3 thay thế nếu bạn thích một bản triển khai bằng Rust. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài, và xem [Demos](/vi/demos) để có hướng dẫn chi tiết về module khi vận hành.
