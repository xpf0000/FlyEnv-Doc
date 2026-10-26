---
layout: doc
titleTemplate: false
title: 'Object storage tương thích S3 local với RustFS | FlyEnv'
description: 'Chạy các phiên bản RustFS với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và console RustFS.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản RustFS với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và console RustFS.'
  - - meta
    - property: og:title
      content: 'Object storage tương thích S3 local với RustFS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản RustFS với cấu hình trực quan, thư mục dữ liệu theo từng phiên bản và console RustFS.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/rustfs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/rustfs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Object storage RustFS local với FlyEnv

RustFS là một hệ thống object storage phân tán mã nguồn mở viết bằng Rust, bộc lộ một API tương thích S3. Nó phù hợp với những workload muốn có object storage trên hạ tầng riêng của mình — và trong phát triển, một bản thay thế S3 chạy local không cần container hay tài khoản đám mây. FlyEnv biến RustFS thành một dịch vụ local được quản lý, nhờ đó bạn có được kho lưu trữ đó mà không cần viết script shell. Cài các bản build RustFS từ bên trong ứng dụng, nắn `rustfs.conf` qua một biểu mẫu thiết lập phân nhóm, giữ đối tượng của từng phiên bản trong thư mục dữ liệu riêng của nó, và chạm tới console RustFS trong trình duyệt chỉ với một cú nhấp.

![Tổng quan module RustFS của FlyEnv](https://oss.macphpstudy.com/image/features/rustfs-1.webp)

## Quản lý phiên bản

Cài và giữ vài bản build RustFS từ **RustFS → Version Manager**, rồi chọn bản nào mà dịch vụ chạy.

- **Chỉ nguồn tĩnh:** các phiên bản RustFS lấy từ danh sách trực tuyến các bản build dựng sẵn của FlyEnv, đóng gói dưới dạng tệp zip cho Windows, macOS và Linux. Homebrew và MacPorts không được cung cấp như nguồn cài cho module này.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới một thư mục giữ binary RustFS của riêng bạn và nó xuất hiện trong danh sách đã cài cạnh các bản build được quản lý.
- **Một instance chạy duy nhất:** một tệp pid cố định giữ module chỉ có một server RustFS mỗi thời điểm.

![RustFS Version Manager với danh sách build trực tuyến tĩnh](https://oss.macphpstudy.com/image/features/rustfs-2.webp)

## Dịch vụ và cấu hình

Tab Service khởi chạy bản build đã chọn dưới dạng `rustfs server` với các tham số được chuyển dịch từ các khóa `RUSTFS_*` trong `rustfs/rustfs.conf` — các giá trị môi trường cũng được truyền qua cho tiến trình. Công tắc thanh bên (phản chiếu trên khay hệ thống) khởi động hay dừng dịch vụ.

- **Thư mục dữ liệu theo từng phiên bản:** mỗi bản build lưu đối tượng của mình trong một đường dẫn volume riêng (mặc định `rustfs/data` dưới thư mục RustFS của FlyEnv). Chọn một thư mục khác từ thanh công cụ Service và lựa chọn được ghi nhớ theo từng phiên bản.
- **Biểu mẫu thiết lập trực quan:** tab Config File bộc lộ khoảng 19 khóa `RUSTFS_*` dưới dạng một biểu mẫu phân nhóm qua Network, Security, General, Advanced và Performance — địa chỉ server, domain server, access và secret key (hay tệp key), bật console và địa chỉ console, obs endpoint, đường dẫn TLS, region, chế độ KMS (local hay vault) và các buffer profile.
- **Trình chỉnh sửa thô:** chuyển sang khung xem văn bản đầy đủ của `rustfs.conf` cho các khóa mà biểu mẫu không bộc lộ; các chỉnh sửa có hiệu lực ở lần khởi động kế tiếp.

![Tệp cấu hình RustFS với biểu mẫu thiết lập phân nhóm RUSTFS_*](https://oss.macphpstudy.com/image/features/rustfs-3.webp)

## Console

RustFS đi kèm web console riêng, và FlyEnv nối sẵn địa chỉ giúp bạn. Cổng console được phân tích từ `RUSTFS_CONSOLE_ADDRESS` trong cấu hình — mặc định là `http://127.0.0.1:9001/` — và nút console trên thanh công cụ Service mở nó thẳng trong trình duyệt của bạn. Từ đó bạn đăng nhập bằng thông tin truy cập từ cấu hình của mình và làm việc với bucket, đối tượng và chính sách truy cập trong web interface chính thức của RustFS, không cần công cụ riêng nào.

![Mở console RustFS trong trình duyệt từ tab Service](https://oss.macphpstudy.com/image/features/rustfs-4.webp)

## Log

RustFS có hai tab log chuyên dụng bên trong FlyEnv: **Log** hiển thị đầu ra `start-out` theo từng phiên bản và **Error Log** hiển thị tệp `start-error` tương ứng. Khi một bản build từ chối khởi động — một cổng bị chiếm, một thư mục dữ liệu không đọc được, một đường dẫn TLS sai — Error Log là nơi nguyên nhân lộ ra đầu tiên.

<FeatureRelatedLinks locale="vi" slug="rustfs" />

## Lưu ý tương thích

Module chạy một instance RustFS mỗi thời điểm — một phiên bản, một thư mục dữ liệu và một địa chỉ console duy nhất — nhờ đó hãy chuyển giữa các bản build từ tab Service thay vì cố chạy các server song song. Các bản build cài được phụ thuộc vào những gì danh sách trực tuyến tĩnh phát hành cho hệ điều hành của bạn; Homebrew và MacPorts không phải là nguồn cho RustFS. FlyEnv sở hữu tiến trình local, tệp `rustfs.conf` và các thư mục dữ liệu theo từng phiên bản; bucket, đối tượng và mọi thứ đằng sau API tương thích S3 thuộc về RustFS. Các ứng dụng nói tiếng S3 — chẳng hạn external storage của [Nextcloud](/vi/solutions/nextcloud) hay phần tải lên của [Strapi](/vi/solutions/strapi) — có thể trỏ tới endpoint này trong lúc phát triển, và FlyEnv còn đi kèm [MinIO](/vi/features/minio) như một module object storage tương thích S3 thay thế. Kiểm tra [trang tải xuống](/vi/download) để biết bản phát hành hiện tại, và duyệt [Demos](/vi/demos) để thấy module trong thực tế.
