---
layout: doc
titleTemplate: false
title: 'MySQL server local với Trình quản lý phiên bản | FlyEnv'
description: 'Chạy các phiên bản MySQL với cấu hình trực quan, log, phpMyAdmin, quản lý cơ sở dữ liệu và các nhóm đa instance.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản MySQL với cấu hình trực quan, log, phpMyAdmin, quản lý cơ sở dữ liệu và các nhóm đa instance.'
  - - meta
    - property: og:title
      content: 'MySQL server local với Trình quản lý phiên bản | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản MySQL với cấu hình trực quan, log, phpMyAdmin, quản lý cơ sở dữ liệu và các nhóm đa instance.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mysql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mysql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển MySQL local với FlyEnv

MySQL là một cơ sở dữ liệu quan hệ mã nguồn mở, và trong nhiều năm nó đã là lựa chọn mặc định đằng sau [WordPress](/vi/solutions/wordpress), Laravel cùng vô số stack web khác. FlyEnv biến MySQL thành một dịch vụ local được quản lý mà bạn điều khiển từ một cửa sổ duy nhất: cài nhiều phiên bản, chạy `mysqld` với `my-<version>.cnf` có thể chỉnh, theo dõi log lỗi và log chậm, và tiếp cận dữ liệu qua phpMyAdmin hay ngăn Manage tích hợp sẵn. Khi một server chưa đủ, tính năng Group chạy nhiều instance MySQL song song, mỗi instance với phiên bản, cổng và thư mục dữ liệu riêng.

![Tổng quan module MySQL của FlyEnv](https://oss.macphpstudy.com/image/features/mysql-1.webp)

## Quản lý phiên bản MySQL

Cài và giữ nhiều phiên bản MySQL song song từ **MySQL → Trình quản lý phiên bản**, và chọn phiên bản mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** Homebrew (`mysql`, `mysql@x.y`) và MacPorts (`mysqlN-server`) trên macOS, Homebrew trên Linux, và một danh sách tĩnh trực tuyến gồm các gói dựng sẵn trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài MySQL của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Một phiên bản dịch vụ hiện hành:** tab Dịch vụ chạy một phiên bản duy nhất được chọn làm dịch vụ MySQL chính, trong khi các instance chạy đồng thời bổ sung được xử lý bởi tính năng Group mô tả dưới đây.

![Trình quản lý phiên bản MySQL với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/mysql-2.webp)

## Dịch vụ và cấu hình

FlyEnv chạy binary `mysqld` thật ở foreground — chứ không phải `mysqld_safe` — được khởi chạy với `--defaults-file=my-<version>.cnf --port=...`. Cổng mặc định là 3306 và lấy từ tệp cấu hình. Trên Windows, dịch vụ được dừng một cách sạch sẽ qua `mysqladmin.exe ... shutdown`.

Mỗi phiên bản có tệp `my-<major.minor>.cnf` riêng dưới thư mục MySQL của FlyEnv, có thể chỉnh từ tab **Tệp cấu hình**:

- **Biểu mẫu thiết lập chung:** điều chỉnh các tùy chọn thường thay đổi — cổng, `key_buffer_size`, `innodb_buffer_pool_size` và nhiều hơn nữa — qua một biểu mẫu trực quan thay vì phải tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ.

![Tệp cấu hình MySQL với biểu mẫu thiết lập chung](https://oss.macphpstudy.com/image/features/mysql-3.webp)

## Log

Hai tab **Log** và **Log chậm** mở `error.log` và `slow.log` của server trực tiếp bên trong FlyEnv. Log lỗi là điểm dừng đầu tiên khi một phiên bản không khởi động được, còn log chậm cho thấy những truy vấn nào vượt ngưỡng long-query một khi logging truy vấn chậm đã được bật trong cấu hình — hữu ích khi đo hiệu năng một ứng dụng local trên dữ liệu thực tế.

![Trình xem log lỗi MySQL](https://oss.macphpstudy.com/image/features/mysql-4.webp)

## phpMyAdmin

Nút **phpMyAdmin** trên thanh công cụ Dịch vụ thiết lập một site phpMyAdmin đầy đủ chỉ trong một bước: FlyEnv tải phpMyAdmin, tạo một site local `phpmyadmin.test` được phục vụ bởi web server và phiên bản PHP của bạn, rồi mở nó trong trình duyệt. Nó làm việc với dịch vụ MySQL đang chạy, nhờ đó bạn có một web UI quen thuộc để duyệt bảng và chạy truy vấn mà không phải cài đặt thủ công thứ gì cả.

![Thiết lập phpMyAdmin từ module MySQL](https://oss.macphpstudy.com/image/features/mysql-5.webp)

## Quản lý cơ sở dữ liệu

Với công việc hằng ngày, không cần rời khỏi ứng dụng: ngăn **Manage** theo từng phiên bản nói chuyện trực tiếp với server đang chạy.

- **Thêm cơ sở dữ liệu:** tạo một cơ sở dữ liệu mới từ danh sách cơ sở dữ liệu.
- **Mật khẩu root:** đổi mật khẩu root cho instance — mật khẩu root mặc định trên các lần cài mới là `root`. [Hướng dẫn người dùng và mật khẩu cơ sở dữ liệu](/vi/guide/database-user-password) đề cập chi tiết hơn về phần này.
- **Sao lưu:** dump bất kỳ cơ sở dữ liệu nào bằng `mysqldump` vào một thư mục sao lưu bạn chọn, ngay từ ngăn này.

## Nhiều instance với Groups

Tab **Group** chạy nhiều instance MySQL đồng thời cạnh dịch vụ chính. Mỗi instance kết hợp một phiên bản MySQL được chọn với cổng và thư mục dữ liệu riêng của nó, và giữ cấu hình cùng log theo từng instance — nhờ đó một dự án ghim vào MySQL 5.7 có thể chạy cạnh một dự án trên MySQL 8.x mà không đụng chạm dữ liệu của nhau. Công tắc nguồn của nhóm trên đầu thanh bên — cũng có trong khay hệ thống — khởi động hay dừng dịch vụ chính cùng toàn bộ các instance Group.

![Tab Group của MySQL với nhiều instance chạy đồng thời](https://oss.macphpstudy.com/image/features/mysql-6.webp)

Groups rất tiện khi tái lập các thiết lập sản xuất ở local — ví dụ khi một dự án [Laravel](/vi/solutions/laravel) kỳ vọng một major version MySQL cụ thể.

<FeatureRelatedLinks locale="vi" slug="mysql" />

## Lưu ý tương thích

FlyEnv quản lý runtime MySQL local, các tệp cấu hình và thư mục dữ liệu của nó; module không đảm bảo mọi phiên bản MySQL đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Trình quản lý phiên bản phụ thuộc vào nền tảng của bạn (Homebrew và MacPorts trên macOS, Homebrew trên Linux, gói tĩnh trên Windows) và vào những gì các nguồn đó phát hành. Nếu stack của bạn dùng MariaDB như một bản thay thế MySQL ngay tức khắc, [module MariaDB](/vi/features/mariadb) cung cấp cùng quy trình một cửa sổ. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
