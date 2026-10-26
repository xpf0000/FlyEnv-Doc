---
layout: doc
titleTemplate: false
title: 'Server ClickHouse local với CH-UI | FlyEnv'
description: 'Chạy ClickHouse trên macOS và Linux với các tệp config.xml và users.xml được quản lý cùng client CH-UI một cú nhấp.'
head:
  - - meta
    - name: description
      content: 'Chạy ClickHouse trên macOS và Linux với các tệp config.xml và users.xml được quản lý cùng client CH-UI một cú nhấp.'
  - - meta
    - property: og:title
      content: 'Server ClickHouse local với CH-UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy ClickHouse trên macOS và Linux với các tệp config.xml và users.xml được quản lý cùng client CH-UI một cú nhấp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/clickhouse
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/clickhouse
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Lập trình ClickHouse local với FlyEnv

ClickHouse là một cơ sở dữ liệu cột (columnar) mã nguồn mở được xây dựng cho các truy vấn phân tích nhanh trên những bộ dữ liệu rất lớn, bổ trợ cho các cơ sở dữ liệu hướng hàng như [PostgreSQL](/vi/features/postgresql). Nó thường được dùng cho phân tích log, metrics và các workload dữ liệu sự kiện, nơi các phép tổng hợp trên hàng tỷ dòng phải trả kết quả trong vài giây, và các công cụ BI như [Metabase](/vi/solutions/metabase) có thể đặt lên trên nó. FlyEnv vận hành ClickHouse như một dịch vụ local được quản lý trên macOS và Linux: cài các phiên bản từ danh sách trực tuyến, khởi động server với cấu hình được sinh tự động, và cung cấp cho bạn các tệp cấu hình có thể chỉnh sửa, trình xem log cùng client web CH-UI một cú nhấp. Module ClickHouse chỉ khả dụng trên macOS và Linux.

![Tổng quan module ClickHouse của FlyEnv](https://oss.macphpstudy.com/image/features/clickhouse-1.webp)

## Quản lý phiên bản ClickHouse

Cài các phiên bản ClickHouse từ **ClickHouse → Version Manager** và chuyển đổi giữa chúng bất cứ lúc nào.

- **Chỉ có danh sách static trực tuyến:** các phiên bản đến từ danh sách tải xuống trực tuyến của FlyEnv; nguồn Homebrew và MacPorts không được cung cấp cho ClickHouse. Trên macOS, bản tải xuống là một binary trần, còn trên Linux binary được giải nén từ tệp lưu trữ `clickhouse-common-static`.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa binary `clickhouse` của riêng bạn, và nó sẽ được liệt kê cạnh các phiên bản được quản lý.
- **Một phiên bản chạy tại một thời điểm:** khởi động, dừng hoặc khởi động lại một phiên bản từ tab Service hoặc công tắc trên sidebar (cũng có trong khay hệ thống); chỉ một phiên bản ClickHouse chạy tại một thời điểm.

![ClickHouse Version Manager với danh sách phiên bản trực tuyến](https://oss.macphpstudy.com/image/features/clickhouse-2.webp)

## Dịch vụ và cấu hình

ClickHouse được phân phối dưới dạng binary multi-call, và FlyEnv khởi chạy nó như `clickhouse server` với một cấu hình mà FlyEnv quản lý giúp bạn.

- **Cấu hình sinh tự động:** ở lần khởi động đầu tiên, FlyEnv tạo `config.xml` và `users.xml` trong thư mục ClickHouse của nó, được cấu hình sẵn với port HTTP 8123, port TCP native 9000, và địa chỉ listen chỉ loopback là 127.0.0.1.
- **Hai tệp cấu hình trong một trình soạn thảo:** tab Config File chuyển đổi giữa `config.xml` và `users.xml`, mỗi tệp được mở như một trình soạn thảo nguồn XML đầy đủ, nhờ đó port, đường dẫn, user và profile đều chỉnh được mà không phải đi tìm tệp; [hướng dẫn user và mật khẩu cơ sở dữ liệu](/vi/guide/database-user-password) giải thích các tài khoản mặc định trên các module cơ sở dữ liệu của FlyEnv.

![Chỉnh sửa config.xml của ClickHouse trong trình soạn thảo nguồn](https://oss.macphpstudy.com/image/features/clickhouse-3.webp)

## Log

Tab Log chuyển đổi giữa các tệp log mà FlyEnv thu nhận cho dịch vụ ClickHouse: log chính của server, log lỗi của server, log stdout và stderr khi khởi động, cùng log khởi động của client CH-UI. Khung xem tự động làm mới khi tệp thay đổi, và thanh công cụ có thể mở tệp trong trình quản lý tệp của bạn, nạp lại theo yêu cầu hoặc xóa nội dung — nhờ đó một lần khởi động thất bại hay một truy vấn chậm đều dễ dàng truy vết.

![Chuyển đổi giữa log server và log khởi động của ClickHouse](https://oss.macphpstudy.com/image/features/clickhouse-4.webp)

## CH-UI

CH-UI là một client ClickHouse chạy trên web, và FlyEnv thiết lập nó giúp bạn.

- **Thiết lập một cú nhấp:** nút CH-UI tải binary CH-UI từ GitHub releases của nó và chạy trên port 3488.
- **Kết nối được cấu hình sẵn:** FlyEnv thêm một kết nối có tên "FlyEnv ClickHouse" trỏ đến thực thể đang chạy, sau đó mở CH-UI trong trình duyệt của bạn — không cần nhập host hay port thủ công.

<FeatureRelatedLinks locale="vi" slug="clickhouse" />

## Ghi chú tương thích

Module ClickHouse chỉ khả dụng trên macOS và Linux; nó không xuất hiện trên Windows. FlyEnv quản lý runtime local và cấu hình được sinh ra; bộ tính năng chính xác của từng bản dựng ClickHouse đến từ bản phát hành thượng nguồn. Xem [trang Tải xuống](/vi/download) để biết bản phát hành FlyEnv hiện tại, và xem [Demos](/vi/demos) để có các bài hướng dẫn chi tiết về các module dịch vụ của FlyEnv trong thực tế.
