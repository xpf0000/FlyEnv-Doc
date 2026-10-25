---
layout: doc
titleTemplate: false
title: 'MariaDB server local với Trình quản lý phiên bản | FlyEnv'
description: 'Chạy các phiên bản MariaDB với cấu hình trực quan, log, phpMyAdmin và các công cụ quản lý cơ sở dữ liệu.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản MariaDB với cấu hình trực quan, log, phpMyAdmin và các công cụ quản lý cơ sở dữ liệu.'
  - - meta
    - property: og:title
      content: 'MariaDB server local với Trình quản lý phiên bản | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản MariaDB với cấu hình trực quan, log, phpMyAdmin và các công cụ quản lý cơ sở dữ liệu.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mariadb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mariadb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển MariaDB local với FlyEnv

MariaDB là một cơ sở dữ liệu quan hệ mã nguồn mở, khởi đầu như một fork của MySQL và vẫn tương thích rộng với MySQL, nên [WordPress](/vi/solutions/wordpress) cùng phần lớn các ứng dụng khác được viết cho MySQL chạy trên nó mà không cần thay đổi. Nhiều nhóm chọn nó như một bản thay thế MySQL ngay tức khắc. FlyEnv biến MariaDB thành một dịch vụ local được quản lý mà bạn điều khiển từ một cửa sổ duy nhất: cài nhiều phiên bản, chạy `mariadbd` với `my-<version>.cnf` có thể chỉnh, theo dõi log lỗi và log chậm, và tiếp cận dữ liệu qua phpMyAdmin hay ngăn Manage tích hợp sẵn. Mọi thứ chạy trên chính các binary MariaDB thật, nên điều bạn kiểm thử local khớp với điều bạn triển khai.

![Tổng quan module MariaDB của FlyEnv](https://oss.macphpstudy.com/image/features/mariadb-1.webp)

## Quản lý phiên bản MariaDB

Cài và giữ nhiều phiên bản MariaDB song song từ **MariaDB → Trình quản lý phiên bản**, và chọn phiên bản mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** Homebrew (`mariadb`, `mariadb@x.y`) và MacPorts trên macOS, Homebrew trên Linux, và một danh sách tĩnh trực tuyến gồm các gói dựng sẵn trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài MariaDB của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Một phiên bản dịch vụ hiện hành:** tab Dịch vụ chạy một phiên bản duy nhất được chọn làm dịch vụ MariaDB; khởi động một phiên bản khác sẽ dừng phiên bản trước đó.

![Trình quản lý phiên bản MariaDB với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/mariadb-2.webp)

## Dịch vụ và cấu hình

FlyEnv chạy binary `mariadbd` thật ở foreground — chứ không phải `mariadbd-safe` — được khởi chạy với `--defaults-file=my-<version>.cnf --port=...`. Cổng mặc định là 3306 và lấy từ tệp cấu hình. Trên Windows, dịch vụ được dừng một cách sạch sẽ qua `mariadb-admin.exe ... shutdown`.

Mỗi phiên bản có tệp `my-<major.minor>.cnf` riêng dưới thư mục MariaDB của FlyEnv, có thể chỉnh từ tab **Tệp cấu hình**:

- **Biểu mẫu thiết lập chung:** điều chỉnh các tùy chọn thường thay đổi trong mục `[mariadbd]` qua một biểu mẫu trực quan thay vì phải tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ.

![Tệp cấu hình MariaDB với biểu mẫu thiết lập chung](https://oss.macphpstudy.com/image/features/mariadb-3.webp)

## Log

Hai tab chuyên dụng — **Log** và **Log chậm** — đưa `error.log` và `slow.log` của server vào FlyEnv. Hãy kiểm tra log lỗi trước mỗi khi một phiên bản không khởi động được; một khi logging truy vấn chậm đã được bật trong cấu hình, log chậm ghi lại mọi truy vấn vượt ngưỡng long-query — rất tiện khi đo hiệu năng một ứng dụng local trên dữ liệu thực tế.

![Trình xem log lỗi và log chậm của MariaDB](https://oss.macphpstudy.com/image/features/mariadb-4.webp)

## phpMyAdmin

Nút **phpMyAdmin** trên thanh công cụ Dịch vụ thiết lập một site phpMyAdmin đầy đủ chỉ trong một bước: FlyEnv tải phpMyAdmin, tạo một site local được phục vụ bởi web server và phiên bản PHP của bạn, rồi mở nó trong trình duyệt. Nó làm việc với dịch vụ MariaDB đang chạy, nhờ đó bạn có một web UI quen thuộc để duyệt bảng và chạy truy vấn mà không phải cài đặt thủ công thứ gì cả.

![Thiết lập phpMyAdmin từ module MariaDB](https://oss.macphpstudy.com/image/features/mariadb-5.webp)

## Ngăn Manage

Với công việc hằng ngày, không cần rời khỏi ứng dụng: ngăn **Manage** theo từng phiên bản nói chuyện trực tiếp với server đang chạy.

- **Thêm cơ sở dữ liệu:** tạo một cơ sở dữ liệu mới từ danh sách cơ sở dữ liệu.
- **Mật khẩu root:** đổi mật khẩu root cho instance — mật khẩu root mặc định trên các lần cài mới là `root`. [Hướng dẫn người dùng và mật khẩu cơ sở dữ liệu](/vi/guide/database-user-password) đề cập chi tiết hơn về phần này.
- **Sao lưu:** dump bất kỳ cơ sở dữ liệu nào bằng `mariadb-dump` vào một thư mục sao lưu bạn chọn, ngay từ ngăn này.

<FeatureRelatedLinks locale="vi" slug="mariadb" />

## Lưu ý tương thích

Module MariaDB chạy một phiên bản mỗi lúc; khác với [module MySQL](/vi/features/mysql), nó không có tính năng Group cho nhiều instance chạy đồng thời. FlyEnv quản lý runtime MariaDB local, các tệp cấu hình và thư mục dữ liệu của nó; module không đảm bảo mọi phiên bản MariaDB đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Trình quản lý phiên bản phụ thuộc vào nền tảng của bạn (Homebrew và MacPorts trên macOS, Homebrew trên Linux, gói tĩnh trên Windows) và vào những gì các nguồn đó phát hành, còn phpMyAdmin ngoài ra còn đòi hỏi một web server FlyEnv và một phiên bản [PHP](/vi/features/php) đang chạy. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
