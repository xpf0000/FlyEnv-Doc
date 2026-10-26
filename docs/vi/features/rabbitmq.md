---
layout: doc
titleTemplate: false
title: 'RabbitMQ Server local với Management UI | FlyEnv'
description: 'Chạy các phiên bản RabbitMQ với cấu hình được quản lý, UI plugin quản lý, và log theo từng phiên bản.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản RabbitMQ với cấu hình được quản lý, UI plugin quản lý, và log theo từng phiên bản.'
  - - meta
    - property: og:title
      content: 'RabbitMQ Server local với Management UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản RabbitMQ với cấu hình được quản lý, UI plugin quản lý, và log theo từng phiên bản.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/rabbitmq
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/rabbitmq
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# RabbitMQ trong FlyEnv

RabbitMQ là một message broker mã nguồn mở: các ứng dụng đưa tin nhắn cho nó qua các giao thức như AMQP, và nó định tuyến chúng vào các hàng đợi để các dịch vụ khác tiêu thụ một cách bất đồng bộ. Nó là lựa chọn phổ biến để tách rời các dịch vụ — background job, task queue và các quy trình làm việc hướng sự kiện, chẳng hạn queue driver của một ứng dụng [Laravel](/vi/solutions/laravel); với nhu cầu hàng đợi nhẹ hơn, [Redis](/vi/features/redis) cũng có thể kiêm nhiệm luôn vai trò queue backend. FlyEnv chạy nó như một broker local được quản lý: cài các phiên bản từ Version Manager, khởi động broker với một cấu hình môi trường được sinh ra, bật sẵn plugin quản lý từ đầu, và đọc log server theo từng major version — tất cả từ các tab Service, Version Manager, Config File và Log của module RabbitMQ.

![Tổng quan module RabbitMQ của FlyEnv](https://oss.macphpstudy.com/image/features/rabbitmq-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản RabbitMQ từ **RabbitMQ → Version Manager**, và chọn phiên bản nào mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** Homebrew (`rabbitmq`) và MacPorts (`rabbitmq-server`) trên macOS, Homebrew trên Linux, và các gói tĩnh trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài RabbitMQ của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Một phiên bản dịch vụ hiện hành:** tab Service chạy một phiên bản duy nhất được chọn làm broker RabbitMQ chính.

![RabbitMQ Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/rabbitmq-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi động broker bằng `rabbitmq-server -detached`, trỏ `RABBITMQ_CONF_ENV_FILE` tới một tệp `rabbitmq-<major>.conf` được sinh ra (`rabbitmq-<major>.bat` trên Windows) ghim node vào `NODE_IP_ADDRESS=127.0.0.1` và `NODENAME=rabbit@localhost`, cùng thư mục log và mnesia của nó. Broker tự daemon hóa qua epmd của [Erlang](/vi/features/erlang), và FlyEnv phát hiện khởi động thành công bằng cách theo dõi tệp pid của node. AMQP lắng nghe trên cổng mặc định 5672.

Mỗi major version có một bộ tệp riêng dưới thư mục RabbitMQ của FlyEnv, chỉnh được từ tab **Config File** với một trình chỉnh sửa thô:

- **`rabbitmq-<major>.conf` / `.bat`:** cấu hình môi trường được sinh ra mà broker khởi động cùng.
- **`rabbitmq-<major>-default.conf`:** cấu hình mặc định cho major version đó.
- **`enabled_plugins-<major>`:** danh sách plugin được bật, nơi FlyEnv ghi `[rabbitmq_management].` nhờ đó plugin quản lý được kích hoạt.

![Trình chỉnh sửa tệp cấu hình RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-3.webp)

## Management UI (15672)

Plugin quản lý đã được bật sẵn cho bạn — FlyEnv ghi `[rabbitmq_management].` vào `enabled_plugins-<major>` (và trên macOS còn chạy `rabbitmq-plugins enable rabbitmq_management`), nhờ đó console sẵn sàng ngay khi broker đã lên.

- **Truy cập một cú nhấp:** tab Service hiển thị một nút mở management UI tại `http://localhost:15672/` mỗi khi broker đang chạy.
- **Console từ upstream:** các hàng đợi, exchange, kết nối và người dùng được quản lý trong giao diện quản lý riêng của RabbitMQ; FlyEnv không thêm một admin UI nào vượt ra ngoài nó.

![Nút management UI của RabbitMQ trên tab Service](https://oss.macphpstudy.com/image/features/rabbitmq-4.webp)

## Log

Tab **Log** mở `log-<major>/rabbit@localhost.log` trực tiếp bên trong FlyEnv. Vì log được giữ theo từng major version, mỗi dòng RabbitMQ đã cài giữ tệp log riêng — điểm dừng đầu tiên khi một phiên bản không khởi động nổi hay một hàng đợi ứng xử bất thường.

![Trình xem log server RabbitMQ](https://oss.macphpstudy.com/image/features/rabbitmq-5.webp)

<FeatureRelatedLinks locale="vi" slug="rabbitmq" />

## Lưu ý tương thích

Trên Windows, RabbitMQ đòi hỏi Erlang: FlyEnv phân giải `ERLANG_HOME` từ môi trường, `PATH` hay các thư mục ứng dụng và tự khởi động `epmd.exe`; nếu epmd ngừng hoạt động, bước dò phiên bản thất bại với lỗi "no epmd", nhờ đó một bản cài Erlang phải có mặt. RabbitMQ có trên macOS, Windows và Linux, nhưng các nguồn cài khác nhau — Homebrew và MacPorts trên macOS, chỉ Homebrew trên Linux, và các gói tĩnh trên Windows. Cấu hình được giới hạn theo từng major version, và FlyEnv không cung cấp admin UI nào ngoài console quản lý upstream cũng như không có tích hợp dự án. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn, và xem các [bản demo](/vi/demos) để thấy module trong thực tế.
