---
layout: doc
titleTemplate: false
title: 'MongoDB server local với DbGate UI | FlyEnv'
description: 'Chạy các phiên bản MongoDB với cấu hình và thư mục dữ liệu được quản lý, cùng một web UI DbGate một cú nhấp.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản MongoDB với cấu hình và thư mục dữ liệu được quản lý, cùng một web UI DbGate một cú nhấp.'
  - - meta
    - property: og:title
      content: 'MongoDB server local với DbGate UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản MongoDB với cấu hình và thư mục dữ liệu được quản lý, cùng một web UI DbGate một cú nhấp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mongodb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mongodb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển MongoDB local với FlyEnv

MongoDB là một cơ sở dữ liệu tài liệu mã nguồn mở lưu bản ghi dưới dạng các tài liệu giống JSON thay vì các hàng trong bảng. Nó phù hợp với các ứng dụng có mô hình dữ liệu linh hoạt hay hay thay đổi, chẳng hạn nền tảng nội dung và các backend API. FlyEnv chạy MongoDB như một dịch vụ local được quản lý: cài phiên bản từ Trình quản lý phiên bản, khởi động `mongod` với một tệp `mongodb-<version>.conf` được sinh sẵn, giữ dữ liệu của mỗi phiên bản trong thư mục riêng, và đọc log server mà không cần rời khỏi ứng dụng. Một nút DbGate một cú nhấp bổ sung trọn bộ web UI để duyệt và truy vấn các cơ sở dữ liệu của bạn.

![Tổng quan module MongoDB của FlyEnv](https://oss.macphpstudy.com/image/features/mongodb-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản MongoDB song song từ **MongoDB → Trình quản lý phiên bản**, và chọn phiên bản mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** Homebrew (`mongodb-community`, `mongodb-enterprise@x`) và MacPorts trên macOS, Homebrew trên Linux, và một danh sách tĩnh trực tuyến gồm các gói `mongod.exe` dựng sẵn trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài MongoDB của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Mỗi lúc một phiên bản chạy:** tab Dịch vụ khởi động phiên bản đã chọn làm dịch vụ MongoDB; khởi động một phiên bản khác sẽ dừng phiên bản trước đó.
- **Phần thêm trên Windows:** song song với `mongod.exe`, FlyEnv tải shell **mongosh**, dùng nó để tắt server một cách nhẹ nhàng qua `db.shutdownServer()`.

![Trình quản lý phiên bản MongoDB với nguồn Homebrew và MacPorts](https://oss.macphpstudy.com/image/features/mongodb-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi chạy binary `mongod` thật với `--config mongodb-<version>.conf --logpath mongodb-<version>.log --pidfilepath ...`. Tệp cấu hình được sinh từ một template chỉ gắn MongoDB vào localhost (`127.0.0.1` và `::1`) và không đặt cổng tường minh, nhờ đó server lắng nghe trên cổng mặc định **27017**. Mỗi phiên bản lưu dữ liệu trong thư mục `data-<version>` riêng dưới thư mục MongoDB của FlyEnv, nên các phiên bản không bao giờ dùng chung tệp dữ liệu.

Tab **Tệp cấu hình** mở tệp `mongodb-<version>.conf` của phiên bản trong một trình chỉnh sửa YAML thô, nhờ đó mọi tùy chọn `mongod` đều có thể chỉnh trực tiếp.

![Chỉnh sửa mongodb.conf trong trình chỉnh sửa YAML thô](https://oss.macphpstudy.com/image/features/mongodb-3.webp)

## Log

Tab **Log** mở tệp `mongodb-<version>.log` của phiên bản đang chạy bên trong FlyEnv. Vì FlyEnv truyền `--logpath` một cách tường minh khi khởi động, log server luôn nằm ở một vị trí đã biết — điểm dừng đầu tiên khi một phiên bản không khởi động được hay một kết nối bị từ chối.

## DbGate

Nút **DbGate** trên thanh công cụ Dịch vụ thiết lập một web UI hoàn chỉnh chỉ trong một bước. Nó đòi hỏi một phiên bản Node đã chọn trong [module Node](/vi/features/nodejs) của FlyEnv: FlyEnv dùng nó để npm-install `dbgate-serve` vào thư mục riêng của mình, rồi phục vụ DbGate trên cổng 3000 (quét một cổng trống nếu cần). Truy cập được bảo vệ bằng HTTP basic auth — người dùng đăng nhập là `flyenv` với một mật khẩu được sinh ra, được nhúng trong URL mà FlyEnv mở trong trình duyệt của bạn. [Hướng dẫn người dùng và mật khẩu cơ sở dữ liệu](/vi/guide/database-user-password) trình bày cách thông tin đăng nhập được xử lý xuyên suốt các module cơ sở dữ liệu của FlyEnv.

![Web UI DbGate mở từ module MongoDB](https://oss.macphpstudy.com/image/features/mongodb-4.webp)

<FeatureRelatedLinks locale="vi" slug="mongodb" />

## Lưu ý tương thích

FlyEnv quản lý runtime MongoDB local, cấu hình được sinh ra và các thư mục dữ liệu theo từng phiên bản của nó; module không đảm bảo mọi phiên bản MongoDB đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Trình quản lý phiên bản phụ thuộc vào nền tảng của bạn (Homebrew và MacPorts trên macOS, Homebrew trên Linux, gói tĩnh trên Windows) và vào những gì các nguồn đó phát hành. DbGate ngoài ra còn phụ thuộc vào một phiên bản Node được cài qua FlyEnv. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn. Để có một stack ứng dụng đầy đủ xây trên một cơ sở dữ liệu local, xem giải pháp [Strapi](/vi/solutions/strapi), và xem các [demo](/vi/demos) để thấy module vận hành.
