---
layout: doc
titleTemplate: false
title: 'Meilisearch server local với cấu hình trực quan | FlyEnv'
description: 'Chạy các phiên bản Meilisearch với biểu mẫu cấu hình trực quan phong phú, thư mục dữ liệu theo từng phiên bản và dashboard tìm kiếm.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Meilisearch với biểu mẫu cấu hình trực quan phong phú, thư mục dữ liệu theo từng phiên bản và dashboard tìm kiếm.'
  - - meta
    - property: og:title
      content: 'Meilisearch server local với cấu hình trực quan | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Meilisearch với biểu mẫu cấu hình trực quan phong phú, thư mục dữ liệu theo từng phiên bản và dashboard tìm kiếm.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/meilisearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/meilisearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Meilisearch trong FlyEnv

Meilisearch là một công cụ tìm kiếm mã nguồn mở, nhẹ, phục vụ tìm kiếm toàn văn tức thời, tha lỗi chính tả qua một REST API. Nó thường được chọn để vận hành ô tìm kiếm của một site hay ứng dụng khi một bản triển khai [Elasticsearch](/vi/features/elasticsearch) đầy đủ sẽ quá nặng — cùng với các công cụ nhẹ anh em như [Typesense](/vi/features/typesense) và [ZincSearch](/vi/features/zincsearch). FlyEnv chạy nó như một dịch vụ local được quản lý: cài phiên bản từ Trình quản lý phiên bản, khởi động binary `meilisearch` thật dựa trên một tệp `meilisearch.toml` có thể chỉnh, và mở dashboard tìm kiếm tích hợp sẵn từ tab Dịch vụ. Mỗi phiên bản có thư mục làm việc riêng cho dữ liệu của nó, và cấu hình được bao phủ bởi cả một trình chỉnh sửa thô lẫn một biểu mẫu trực quan phong phú với khoảng 30 thiết lập.

![Tổng quan module Meilisearch của FlyEnv với tab Dịch vụ](https://oss.macphpstudy.com/image/features/meilisearch-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản Meilisearch song song từ **Meilisearch → Trình quản lý phiên bản**, và chọn phiên bản mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** bản build tĩnh và Homebrew (`meilisearch`) trên macOS và Linux; trên Windows là một bản tải xuống `meilisearch.exe` tĩnh mà FlyEnv sao chép vào vị trí và xác minh bằng cách chạy `--version`.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa binary Meilisearch của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Thư mục làm việc theo từng phiên bản:** tab Dịch vụ mang một trường thư mục làm việc có thể chỉnh cho mỗi phiên bản, mặc định là `<BaseDir>/meilisearch/<major.minor>`, nhờ đó các phiên bản khác nhau giữ dữ liệu tách biệt.

![Trình quản lý phiên bản Meilisearch với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/meilisearch-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi động dịch vụ bằng `meilisearch --config-file-path <BaseDir>/meilisearch/meilisearch.toml` với thư mục làm việc của phiên bản làm thư mục tiến trình. Template đi kèm mặc định là `http_addr = "localhost:7700"`, `db_path = "./data.ms"` và `env = "development"`.

Tab **Tệp cấu hình** chỉnh `meilisearch.toml` (kèm `meilisearch.default.toml` bên cạnh làm tham chiếu gốc) theo hai cách:

- **Biểu mẫu trực quan:** khoảng 30 thiết lập ánh xạ sang tệp TOML — `db_path`, `env`, `http_addr`, `master_key`, các tùy chọn SSL, dumps và snapshots, `log_level`, metrics và nhiều hơn nữa — điều chỉnh được mà không cần tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ.

![Biểu mẫu cấu hình trực quan Meilisearch ánh xạ sang meilisearch.toml](https://oss.macphpstudy.com/image/features/meilisearch-3.webp)

## Dashboard (7700)

Khi dịch vụ đang chạy, tab Dịch vụ hiển thị một nút web UI mở dashboard Meilisearch trong trình duyệt của bạn tại `http://127.0.0.1:<port từ meilisearch.toml>/` — mặc định là `7700`. Dashboard là giao diện tích hợp sẵn của chính Meilisearch để thử các yêu cầu tìm kiếm lên các index local của bạn, nhờ đó bạn có thể xác minh hành vi lập chỉ mục và truy vấn mà không phải kết nối một ứng dụng trước.

![Dashboard Meilisearch mở từ tab Dịch vụ trên cổng 7700](https://oss.macphpstudy.com/image/features/meilisearch-4.webp)

## Log

Tab **Log** mở log khởi động theo từng phiên bản trực tiếp bên trong FlyEnv. Log lỗi khởi động (`meilisearch-<version>-start-error.log`) là điểm dừng đầu tiên khi một phiên bản không chạy được — ví dụ khi cổng trong `meilisearch.toml` đã bị chiếm — còn đầu ra khởi động được ghi lại bên cạnh nó.

![Trình xem log lỗi khởi động Meilisearch](https://oss.macphpstudy.com/image/features/meilisearch-5.webp)

<FeatureRelatedLinks locale="vi" slug="meilisearch" />

## Lưu ý tương thích

FlyEnv quản lý runtime Meilisearch local, tệp `meilisearch.toml` và các thư mục làm việc theo từng phiên bản của nó; module không đảm bảo mọi phiên bản Meilisearch đều khả dụng trên mọi hệ điều hành hay nguồn cài. Nguồn tĩnh và Homebrew được cung cấp trên macOS và Linux, trong khi Windows chỉ dùng bản tải xuống tĩnh. Cũng lưu ý rằng Meilisearch dùng một tệp `meilisearch.toml` chung cho tất cả các phiên bản đã cài — khác với các module như [Redis](/vi/features/redis) giữ tệp cấu hình theo từng major version — nhờ đó thay đổi cấu hình áp dụng cho bất kể phiên bản nào bạn đang chạy. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn, và xem các [demo](/vi/demos) để thấy module vận hành.
