---
layout: doc
titleTemplate: false
title: 'Kiểm thử email local với Mailpit SMTP và Web UI | FlyEnv'
description: 'Bắt email gửi đi ngay local với Mailpit: SMTP trên 1025, web UI trên 8025, cấu hình trực quan và log.'
head:
  - - meta
    - name: description
      content: 'Bắt email gửi đi ngay local với Mailpit: SMTP trên 1025, web UI trên 8025, cấu hình trực quan và log.'
  - - meta
    - property: og:title
      content: 'Kiểm thử email local với Mailpit SMTP và Web UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Bắt email gửi đi ngay local với Mailpit: SMTP trên 1025, web UI trên 8025, cấu hình trực quan và log.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mailpit
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mailpit
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Kiểm thử email local với FlyEnv

Mailpit là một công cụ kiểm thử SMTP mã nguồn mở dành cho nhà phát triển: nó đóng vai trò một máy chủ thư giả, bắt mọi email ứng dụng của bạn gửi đi và hiển thị chúng trong một hộp thư web, nhờ đó các thư kiểm thử không bao giờ đến được người nhận thật. FlyEnv chạy nó như một dịch vụ local được quản lý: cài một phiên bản từ Trình quản lý phiên bản, khởi động binary bằng một công tắc, và mọi thư ứng dụng của bạn gửi qua SMTP sẽ rơi vào hộp thư web của Mailpit thay vì đến tay người nhận thật. Bộ lắng nghe SMTP mặc định trên cổng 1025, web UI trên cổng 8025, và cả cấu hình lẫn log đều có thể chỉnh và xem trực tiếp trong ứng dụng.

![Tổng quan module Mailpit của FlyEnv](https://oss.macphpstudy.com/image/features/mailpit-1.webp)

## Quản lý phiên bản

Cài và giữ các phiên bản Mailpit song song từ **Mailpit → Trình quản lý phiên bản**.

- **Nguồn cài theo từng nền tảng:** bản build tĩnh và Homebrew (`mailpit`) trên macOS và Linux, và một danh sách tĩnh trực tuyến gồm các kho lưu trữ phát hành chính thức `axllent/mailpit` trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài Mailpit của riêng bạn; FlyEnv quét nó và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Xử lý khi cài:** trên macOS, FlyEnv xóa thuộc tính cách ly khi cài để binary chạy được, và mỗi phiên bản được nhận diện bằng cách kiểm tra qua `mailpit version`.

![Trình quản lý phiên bản Mailpit với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/mailpit-2.webp)

## Dịch vụ và cấu hình

Tab **Dịch vụ** khởi động và dừng phiên bản Mailpit đã chọn. FlyEnv khởi chạy binary `mailpit` trần và truyền từng dòng `MP_*` từ `mailpit.conf` cho nó dưới dạng biến môi trường, nhờ đó tệp bạn chỉnh chính xác là những gì tiến trình nhận được. Template mặc định lắng nghe `0.0.0.0:1025` cho SMTP, `0.0.0.0:8025` cho web UI và `0.0.0.0:1110` cho POP3, và giữ tối đa 500 thư (`MP_MAX_MESSAGES`).

Cấu hình nằm trong tab **Tệp cấu hình**, nơi cung cấp hai khung nhìn của cùng tệp `mailpit.conf`:

- **Biểu mẫu trực quan:** bật/tắt và điều chỉnh khoảng 45 thiết lập `MP_*` mà không cần tự tay chỉnh tệp — giới hạn cơ sở dữ liệu và lưu trữ, bind/TLS/xác thực của web UI, SpamAssassin, bind/TLS/xác thực/relay của SMTP, POP3 và thẻ thư.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ, với `mailpit.conf.default` được giữ cạnh làm template tham chiếu.

Cấu hình được chia sẻ giữa tất cả các phiên bản Mailpit đã cài, nên việc chuyển phiên bản giữ nguyên cổng và giới hạn của bạn.

![Tệp cấu hình Mailpit với biểu mẫu thiết lập MP_* trực quan](https://oss.macphpstudy.com/image/features/mailpit-3.webp)

## Web UI

Khi dịch vụ đang chạy, tab Dịch vụ hiển thị một nút mở trong trình duyệt đưa bạn thẳng đến web UI của Mailpit. FlyEnv phân tích cổng từ `MP_UI_BIND_ADDR` trong cấu hình của bạn và mở `http://127.0.0.1:<port>/` — mặc định là 8025. Ở đó bạn có thể xem kỹ từng thư bị bắt, header của nó, bản hiển thị HTML và văn bản thuần, cùng các tệp đính kèm.

Để bắt thư, trỏ thiết lập SMTP của ứng dụng về `127.0.0.1:1025`. [Hướng dẫn kiểm thử email local](/vi/guide/local-email-testing-mailpit) đi qua toàn bộ thiết lập, và [giải pháp Laravel](/vi/solutions/laravel) cho thấy một dự án framework điển hình kết nối mailer với Mailpit thế nào; các site [WordPress](/vi/solutions/wordpress) cũng có thể dẫn thư thông báo qua một plugin SMTP theo cùng cách.

![Mở web UI Mailpit từ tab Dịch vụ](https://oss.macphpstudy.com/image/features/mailpit-4.webp)

## Log

Tab **Log** mở log Mailpit trực tiếp bên trong FlyEnv. Đường dẫn được suy ra từ thiết lập `MP_LOG_FILE` trong cấu hình của bạn — mặc định là `mailpit.log` dưới thư mục Mailpit của FlyEnv — nhờ đó trình xem luôn theo đúng tệp mà dịch vụ đang chạy thực sự ghi vào. Đây là điểm dừng đầu tiên khi dịch vụ không khởi động được hay thư không đến như mong đợi.

![Trình xem log Mailpit](https://oss.macphpstudy.com/image/features/mailpit-5.webp)

<FeatureRelatedLinks locale="vi" slug="mailpit" />

## Lưu ý tương thích

FlyEnv quản lý runtime Mailpit local, cấu hình `mailpit.conf` và tệp log của nó; module không tự kết nối Mailpit vào các dự án hay thiết lập [PHP](/vi/features/php) của bạn — hãy tự trỏ host và cổng SMTP của từng ứng dụng về `127.0.0.1:1025`. Các phiên bản được cung cấp trong Trình quản lý phiên bản phụ thuộc vào nền tảng của bạn (bản tĩnh và Homebrew trên macOS và Linux, các kho lưu trữ phát hành tĩnh trên Windows) và vào những gì các nguồn đó phát hành. Mailpit dùng một cấu hình toàn cục chung cho tất cả các phiên bản đã cài thay vì tệp cấu hình theo từng phiên bản. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
