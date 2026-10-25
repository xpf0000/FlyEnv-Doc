---
layout: doc
titleTemplate: false
title: 'Temporal Server local với Web UI | FlyEnv'
description: 'Chạy một server Temporal local dựa trên SQLite với namespace được tạo tự động và Web UI được quản lý.'
head:
  - - meta
    - name: description
      content: 'Chạy một server Temporal local dựa trên SQLite với namespace được tạo tự động và Web UI được quản lý.'
  - - meta
    - property: og:title
      content: 'Temporal Server local với Web UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy một server Temporal local dựa trên SQLite với namespace được tạo tự động và Web UI được quản lý.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/temporal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/temporal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Temporal local với FlyEnv

Temporal là một nền tảng điều phối workflow bền vững: nó lưu trạng thái workflow xuống đĩa nhờ đó các quy trình dài hơi, nhiều bước sống sót qua các lần sập, thử lại và triển khai. Các ứng dụng mô hình hóa saga, job định kỳ và các quy trình nghiệp vụ khác dưới dạng code thay vì tự ghép nối [hàng đợi](/vi/features/rabbitmq) và [cron job](/vi/features/cron-jobs) thủ công. FlyEnv biến một thiết lập Temporal local thành một dịch vụ một cú nhấp: nó cài `temporal-server`, sinh một cấu hình sẵn sàng chạy dựa trên SQLite, tạo namespace `default` giúp bạn sau lần khởi động đầu tiên, và có thể khởi chạy Temporal Web UI như một tiến trình đồng hành được quản lý — tất cả gắn vào `127.0.0.1` để phát triển local an toàn.

![Tổng quan module Temporal của FlyEnv với tab Service](https://oss.macphpstudy.com/image/features/temporal-1.webp)

## Quản lý phiên bản

Cài các phiên bản Temporal server từ **Temporal → Version Manager** và giữ vài phiên bản song song.

- **Bản build trực tuyến tĩnh:** FlyEnv lấy các bản phát hành `temporal-server` khả dụng từ danh sách phiên bản trực tuyến của nó cho hệ điều hành và kiến trúc của bạn. Các tệp nén được giải nén tự động, với quyền thực thi được sửa và một bước kiểm tra `--version` chạy sau khi cài.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới một thư mục chứa binary `temporal-server` của riêng bạn và nó được liệt kê cạnh các bản cài được quản lý.
- **Mỗi thời điểm một phiên bản chạy:** khởi động, dừng hay khởi động lại phiên bản đã chọn từ tab Service hay công tắc thanh bên; việc chuyển phiên bản đòi hỏi dừng phiên bản đang chạy trước.

![Temporal Version Manager với danh sách phiên bản trực tuyến tĩnh](https://oss.macphpstudy.com/image/features/temporal-2.webp)

## Dịch vụ và cấu hình

Việc khởi động Temporal chạy `temporal-server` với một tệp cấu hình theo từng phiên bản mà FlyEnv sinh ở lần dùng đầu tiên: `config/temporal-v<version>.yaml`.

- **SQLite persistence có sẵn ngay:** cấu hình được sinh dùng một dual-store SQLite — `default.db` cho kho chính và `visibility.db` cho dữ liệu visibility — với việc thiết lập schema được xử lý tự động, nhờ đó không cần cơ sở dữ liệu bên ngoài.
- **Các cổng chỉ dành cho local:** frontend gRPC endpoint lắng nghe trên **7233**, với HTTP trên 7243, matching trên 7235, history trên 7234 và pprof trên 7936 — mọi dịch vụ đều gắn vào `127.0.0.1`.
- **Tạo namespace tự động:** sau khi server khởi động, FlyEnv dùng binary Temporal CLI mới nhất đã cài để đăng ký namespace `default`, thử lại vài lần trong khi server hoàn tất quá trình khởi động.
- **Cấu hình kép Server / UI:** tab Config File có hai tab con — **Server** chỉnh `config/temporal-v<version>.yaml`, **UI** chỉnh `config/temporal-ui.yaml` — cả hai trong một trình chỉnh sửa YAML thô với một bản sao `.default` được giữ làm tham chiếu. FlyEnv chỉ tạo những tệp còn thiếu; nó không bao giờ ghi đè các chỉnh sửa của bạn.

![Tab Config File của Temporal với các tab con Server và UI](https://oss.macphpstudy.com/image/features/temporal-3.webp)

## Temporal Web UI

Tab Service gồm một nút **Temporal UI** quản lý Temporal Web UI chính thức như một tiến trình riêng.

- **Tải xuống theo yêu cầu:** Web UI được phục vụ bởi binary `ui-server` độc lập, thứ không bị ràng buộc với bất kỳ phiên bản Temporal server nào. Lần đầu tiên bạn mở nó, FlyEnv truy vấn bản phát hành `temporalio/ui-server` mới nhất trên GitHub và tải xuống asset khớp cho nền tảng của bạn (macOS, Linux hay Windows; amd64 hay arm64).
- **Vòng đời được quản lý:** FlyEnv khởi động `ui-server` với tệp pid riêng và cấu hình riêng của nó (`temporal-ui.yaml`: cổng **8233**, gRPC endpoint `127.0.0.1:7233`), rồi mở `http://127.0.0.1:8233/` trong trình duyệt của bạn.
- **Dừng cùng server:** việc tắt dịch vụ Temporal cũng dừng tiến trình UI, nhờ đó không có gì còn chạy sót lại.
- Nút hiển thị trạng thái loading và lỗi trong khi UI server đang được cài hay khởi động.

![Temporal Web UI được mở từ FlyEnv trong trình duyệt](https://oss.macphpstudy.com/image/features/temporal-4.webp)

## Log

Tab Log cung cấp bốn trình xem để bạn phân biệt được đầu ra server và UI:

- **Đầu ra server** — đầu ra chuẩn của `temporal-server` đang chạy.
- **Lỗi server** — luồng lỗi của server, nơi đầu tiên cần xem khi một lần khởi động thất bại.
- **Đầu ra UI** — đầu ra chuẩn của tiến trình `ui-server`.
- **Lỗi UI** — luồng lỗi của Web UI, hữu ích khi UI không thể chạm tới gRPC endpoint trên 7233.

![Trình xem log của Temporal với lựa chọn log server và UI](https://oss.macphpstudy.com/image/features/temporal-5.webp)

<FeatureRelatedLinks locale="vi" slug="temporal" />

## Lưu ý tương thích

Module Temporal chỉ cài từ các bản build trực tuyến tĩnh — không có nguồn Homebrew hay MacPorts — trên macOS, Windows và Linux, và danh sách phiên bản chính xác phụ thuộc vào những gì được phát hành cho nền tảng và kiến trúc của bạn. Tải binary `ui-server` của Web UI đòi hỏi truy cập mạng tới GitHub releases. Tất cả các cổng server và UI đều gắn vào `127.0.0.1`; điều chỉnh các cấu hình YAML nếu bạn cần địa chỉ khác. Việc tự tạo namespace dựa vào một binary Temporal CLI đã được cài trong FlyEnv.

Nếu bạn thích một dev server tất-cả-trong-một thay thế, module **Temporal CLI** riêng của FlyEnv chạy `temporal server start-dev` — chế độ phát triển tích hợp sẵn của Temporal với Web UI riêng của nó (cổng mặc định 7233/8233, tệp SQLite `dev.db`), không cần tải UI riêng. Các worker viết bằng Node.js, Python hay Go kết nối tới frontend endpoint trên 7233; hướng dẫn về [triển khai dịch vụ Node.js, Python và Go mà không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker) trình bày cách chạy chúng local cạnh server. Xem [Demos](/vi/demos) để có các hướng dẫn về các module dịch vụ của FlyEnv, và lấy bản build mới nhất từ [trang tải xuống](/vi/download).
