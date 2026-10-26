---
layout: doc
titleTemplate: false
title: 'PostgreSQL Server local với pgAdmin 4 | FlyEnv'
description: 'Chạy các phiên bản PostgreSQL với thư mục dữ liệu được quản lý, initdb tự động, pgAdmin 4 và cài extension pgvector.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản PostgreSQL với thư mục dữ liệu được quản lý, initdb tự động, pgAdmin 4 và cài extension pgvector.'
  - - meta
    - property: og:title
      content: 'PostgreSQL Server local với pgAdmin 4 | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản PostgreSQL với thư mục dữ liệu được quản lý, initdb tự động, pgAdmin 4 và cài extension pgvector.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/postgresql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/postgresql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển PostgreSQL local với FlyEnv

PostgreSQL là một cơ sở dữ liệu quan hệ mã nguồn mở nổi tiếng với việc hỗ trợ chuẩn SQL nghiêm ngặt và một hệ sinh thái extension phong phú. Nó là lựa chọn phổ biến cho các ứng dụng cần truy vấn phức tạp, giao dịch mạnh hay các extension như pgvector. FlyEnv chạy PostgreSQL như một dịch vụ local được quản lý mà bạn điều khiển từ một cửa sổ: cài nhiều phiên bản, để FlyEnv khởi tạo thư mục dữ liệu bằng `initdb` ở lần khởi động đầu tiên, chỉnh `postgresql.conf` tại chỗ, và theo dõi `pg.log` mà không phải rời ứng dụng. Một trình khởi chạy pgAdmin 4 tích hợp sẵn trao cho bạn một web console đầy đủ chỉ với một cú nhấp, còn ngăn Extension cài pgvector cho các workload tìm kiếm vector.

![Tổng quan module PostgreSQL của FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản PostgreSQL song song từ **PostgreSQL → Version Manager**.

- **Nguồn cài theo từng nền tảng:** Homebrew (`postgresql@x`) và MacPorts (`postgresqlN-server`) trên macOS, Homebrew trên Linux, và một danh sách trực tuyến tĩnh gồm các gói dựng sẵn trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài PostgreSQL của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.

![PostgreSQL Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/postgresql-2.webp)

## Dịch vụ và thư mục dữ liệu

Tab Service chạy phiên bản được chọn như server PostgreSQL local của bạn. Trên macOS và Linux, FlyEnv khởi chạy binary `postgres -D <data directory>` thật ở foreground; trên Windows nó khởi động server bằng `pg_ctl -D ... -l pg.log start`. Cổng được đọc từ `postgresql.conf` và mặc định là 5432.

Mỗi phiên bản có thư mục dữ liệu riêng — `postgresql<major>` dưới thư mục PostgreSQL của FlyEnv theo mặc định — và đường dẫn chỉnh được theo từng phiên bản ngay trên thanh công cụ Service. Khi thư mục dữ liệu còn trống ở lần khởi động đầu tiên, FlyEnv tự động chạy `initdb -U root`, nhờ đó cluster được tạo sẵn cho bạn với superuser `root`, mã hóa UTF-8 và locale hệ thống của bạn. `initdb` được gọi với `-U root` và không có tùy chọn mật khẩu, nhờ đó superuser ngay từ đầu là `root` không mật khẩu; [hướng dẫn người dùng và mật khẩu cơ sở dữ liệu](/vi/guide/database-user-password) trình bày các thông tin đăng nhập mặc định trên các module cơ sở dữ liệu của FlyEnv.

![Tab Service của PostgreSQL với thư mục dữ liệu chỉnh được](https://oss.macphpstudy.com/image/features/postgresql-3.webp)

Trỏ ứng dụng của bạn tới `127.0.0.1:5432` — các giải pháp [Django](/vi/solutions/django) và [Strapi](/vi/solutions/strapi) cho thấy những stack local hoàn chỉnh được nối với PostgreSQL theo cách này.

## Cấu hình

Tab **Config File** mở `postgresql.conf` của phiên bản, tệp nằm bên trong thư mục dữ liệu của nó. FlyEnv chỉnh nó bằng một trình chỉnh sửa thô đầy đủ — ở đây không có biểu mẫu trực quan — và giữ một bản sao `postgresql.conf.default` cạnh đó để bạn có thể khôi phục cấu hình gốc bất cứ lúc nào. Đổi cổng, địa chỉ lắng nghe và các tham số tinh chỉnh đều đi qua tệp này.

![Chỉnh postgresql.conf trong tab Config File](https://oss.macphpstudy.com/image/features/postgresql-4.webp)

## Log

Tab **Log** mở `pg.log` từ thư mục dữ liệu trực tiếp bên trong FlyEnv — điểm dừng đầu tiên khi một phiên bản không khởi động nổi. Log riêng của pgAdmin (`pgadmin4.log` cộng đầu ra khởi động và log lỗi của nó) được hiển thị cạnh đó, nhờ đó các sự cố web console chẩn đoán được từ cùng một nơi.

![Trình xem pg.log của PostgreSQL](https://oss.macphpstudy.com/image/features/postgresql-5.webp)

## pgAdmin 4

Nút **pgAdmin 4** trên thanh công cụ Service thiết lập web console pgAdmin đầy đủ chỉ trong một bước. pgAdmin 4 là một ứng dụng Python, vì vậy ở lần dùng đầu tiên FlyEnv pip-cài `pgadmin4` vào phiên bản [Python](/vi/features/python) đang được chọn trong FlyEnv của bạn — bạn sẽ thấy thông báo "installing web panel" trong lúc việc này diễn ra. Sau đó nó khởi động `pgAdmin4.py` trên cổng 5050 (có retry), tự động đăng ký server PostgreSQL đang chạy của FlyEnv như một kết nối, và mở console trong trình duyệt của bạn.

![Web console pgAdmin 4 được khởi chạy từ FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-6.webp)

## Extension pgvector

Hành động **Extension** trên một dòng dịch vụ mở một ngăn cài pgvector — PostgreSQL extension cho lưu trữ vector và tìm kiếm tương đồng được dùng bởi các workload AI và embedding (để có một cơ sở dữ liệu vector chuyên dụng, xem [module Qdrant](/vi/features/qdrant)). FlyEnv clone tag pgvector mới nhất từ git repository của nó và chạy `sudo make` / `make install` trong terminal nhúng, nhờ đó bạn thấy đầu ra build thật. Quy trình cài đặt hướng về macOS (nó dùng `sudo` và shell zsh).

![Cài pgvector chạy trong terminal nhúng của ngăn Extension](https://oss.macphpstudy.com/image/features/postgresql-7.webp)

<FeatureRelatedLinks locale="vi" slug="postgresql" />

## Lưu ý tương thích

FlyEnv quản lý runtime PostgreSQL local, tệp cấu hình và thư mục dữ liệu của nó; ứng dụng không đảm bảo mọi phiên bản PostgreSQL đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Version Manager phụ thuộc vào nền tảng của bạn (Homebrew và MacPorts trên macOS, Homebrew trên Linux, gói tĩnh trên Windows) và vào những gì các nguồn đó phát hành. pgAdmin 4 đòi hỏi một phiên bản Python đã chọn trong FlyEnv, còn quy trình cài pgvector được thiết kế cho macOS. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
