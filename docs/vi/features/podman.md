---
layout: doc
titleTemplate: false
title: 'Podman Machines, Compose và Containers | FlyEnv'
description: 'Quản lý các Podman machine, sinh các stack Compose, và pull image cùng chạy container từ FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Quản lý các Podman machine, sinh các stack Compose, và pull image cùng chạy container từ FlyEnv.'
  - - meta
    - property: og:title
      content: 'Podman Machines, Compose và Containers | FlyEnv'
  - - meta
    - property: og:description
      content: 'Quản lý các Podman machine, sinh các stack Compose, và pull image cùng chạy container từ FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/podman
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/podman
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Quản lý container Podman với FlyEnv

Podman là một container engine mã nguồn mở để build và chạy các OCI container, tương thích với Docker image và tệp Compose, và có thể chạy rootless mà không cần daemon nền. FlyEnv biến Podman thành một không gian làm việc trực quan: tạo và tinh chỉnh các Podman machine, sinh các dự án Compose từ một thư viện stack, pull image từ danh mục chính thức, và chạy cùng kiểm tra container — tất cả mà không cần ghi nhớ các cờ CLI. FlyEnv tự động phát hiện Podman hệ thống của bạn và, trên macOS và Linux có Homebrew, có thể cài nó chỉ với một cú nhấp từ terminal nhúng. Để có hướng dẫn từng bước, xem [hướng dẫn module Podman](/vi/guide/podman-module); để biết cách tiếp cận dựa trên container này so với các module native của FlyEnv ra sao, xem [FlyEnv vs Docker và XAMPP](/vi/guide/flyenv-vs-docker-xampp).

![Tổng quan module Podman của FlyEnv với danh sách machine](https://oss.macphpstudy.com/image/features/podman-1.webp)

## Quản lý machine

Panel bên trái liệt kê mọi Podman machine, với các hành động thêm, chỉnh, khởi động, dừng và xóa machine. Mỗi machine mở thành các tab riêng: Dashboard, Compose, Image và Container.

- **Thêm và chỉnh machine:** đặt tên machine, số CPU (1–16 nhân), bộ nhớ (512–32768 MB), dung lượng đĩa, và machine có phải mặc định hay không.
- **Chế độ rootful:** chạy một machine dưới dạng rootful khi workload của bạn cần.
- **Rosetta trên macOS:** bật Rosetta cho một machine để chạy các image x86_64 trên Apple Silicon.
- **Chi tiết kết nối từ xa:** cấu hình đường dẫn SSH identity và tên người dùng từ xa cho từng machine.
- **Linux chạy native:** trên Linux, Podman không cần máy ảo, nhờ đó các hành động machine bị ẩn và container chạy trực tiếp trên host.
- **Thiết lập dễ dàng:** FlyEnv phát hiện binary `podman` hệ thống; nếu nó bị thiếu và Homebrew khả dụng trên macOS hay Linux, một nút cài đặt chạy brew install trong terminal nhúng.

![Thêm một Podman machine với các thiết lập CPU, bộ nhớ và đĩa](https://oss.macphpstudy.com/image/features/podman-2.webp)

## Các dự án Compose và trình sinh stack

Tab **Compose** quản lý các dự án docker-compose có sẵn của bạn — FlyEnv giữ một danh sách dự án được lưu và kiểm tra trạng thái chạy của chúng — và gồm một trình sinh **Compose Build** lắp ghép một stack qua các biểu mẫu theo từng service thay vì YAML viết tay.

Trình sinh phủ khoảng 29 technology stack, gồm [PHP](/vi/features/php), [Nginx](/vi/features/nginx), Apache, Caddy, [MySQL](/vi/features/mysql), MariaDB, PostgreSQL, MongoDB, Redis, Memcached, RabbitMQ, Elasticsearch, Meilisearch, MinIO, Consul, Etcd, Mailpit, NodeJS, Bun, Deno, Go, Java, Python, Ruby, Rust, Perl, Erlang và Tomcat. Mỗi service có biểu mẫu riêng, nhờ đó bạn chỉ cấu hình những tùy chọn mà stack đó bộc lộ. Các thao tác Compose đòi hỏi `docker-compose` hay plugin `docker compose` đã được cài.

![Trình sinh Compose Build với các biểu mẫu stack theo từng service](https://oss.macphpstudy.com/image/features/podman-3.webp)

## Image

Tab **Image** là một client pull trực quan được xây dựng trên danh mục image chính thức.

- **Danh mục image chính thức:** duyệt các image chính thức chuẩn mà không phải rời ứng dụng.
- **Lấy tag trực tuyến:** các tag cho từng image được lấy trực tuyến, nhờ đó bạn có thể chọn một phiên bản chính xác thay vì đoán tên tag.
- **Pull một cú nhấp:** pull image và tag đã chọn thẳng vào kho image local của machine.

![Pull một image với danh mục chính thức và tag trực tuyến](https://oss.macphpstudy.com/image/features/podman-4.webp)

## Container

Tab **Container** phủ vòng đời container hằng ngày trên machine đã chọn.

- **Tạo container** từ bất kỳ image nào đã pull qua một biểu mẫu thay vì một lệnh `podman run` dài.
- **Kiểm tra và xem trước** cấu hình và trạng thái của từng container.
- **Thực thi trong terminal nhúng:** mở một shell bên trong container đang chạy bằng [terminal tích hợp sẵn](/vi/features/cli-terminal) của FlyEnv, nhờ đó việc debug diễn ra đúng nơi container sống.

![Danh sách container với các hành động inspect và terminal exec](https://oss.macphpstudy.com/image/features/podman-5.webp)

<FeatureRelatedLinks locale="vi" slug="podman" />

## Lưu ý tương thích

FlyEnv vận hành Podman qua CLI `podman` hệ thống; nó không đi kèm một trình quản lý phiên bản Podman hay tự đóng gói runtime. Trên macOS và Linux, cài đặt một cú nhấp được đề nghị khi có Homebrew; người dùng Windows tự cài Podman. Các hành động Podman machine áp dụng cho macOS và Windows — trên Linux, Podman chạy native không cần máy ảo. Kiểm tra [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại để biết chi tiết hỗ trợ nền tảng.
