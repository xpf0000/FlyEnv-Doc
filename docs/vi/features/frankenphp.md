---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản FrankenPHP và PHP app server | FlyEnv'
description: 'Chạy các phiên bản FrankenPHP và phục vụ các site PHP trực tiếp với cổng theo từng site cùng HTTPS tự động, không cần PHP-FPM.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản FrankenPHP và phục vụ các site PHP trực tiếp với cổng theo từng site cùng HTTPS tự động, không cần PHP-FPM.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản FrankenPHP và PHP app server | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản FrankenPHP và phục vụ các site PHP trực tiếp với cổng theo từng site cùng HTTPS tự động, không cần PHP-FPM.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/frankenphp
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/frankenphp
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FrankenPHP trong FlyEnv

FrankenPHP là một PHP application server hiện đại được xây dựng trên nền [Caddy](/vi/features/caddy): nó nhúng một runtime PHP đầy đủ và phục vụ các ứng dụng PHP trực tiếp, không cần tiến trình PHP-FPM riêng. FlyEnv quản lý nó như một module chuyên dụng: cài nhiều phiên bản FrankenPHP, khởi động và dừng chúng như các dịch vụ, chỉnh sửa Caddyfile, và đọc log mà không cần rời khỏi ứng dụng. Các site của bạn có cổng riêng và HTTPS tự động ngay từ đầu, không cần cấu hình PHP-FPM nào.

![Tổng quan module FrankenPHP trong FlyEnv](https://oss.macphpstudy.com/image/features/frankenphp-1.webp)

## Quản lý phiên bản FrankenPHP

Cài và giữ nhiều phiên bản FrankenPHP song song từ tab **Trình quản lý phiên bản**.

- **Nguồn cài đặt:** bản build tĩnh trên macOS, Linux và Windows, cùng Homebrew trên macOS và Linux — FlyEnv tự động tap `dunglas/frankenphp` để formula khả dụng. MacPorts và SDKMAN không được dùng cho FrankenPHP.
- **Cài tĩnh trên macOS và Linux:** FlyEnv tải binary FrankenPHP đơn lẻ, sao chép vào vị trí, đánh dấu có thể thực thi và xóa thuộc tính cách ly của macOS để nó chạy được.
- **Cài tĩnh trên Windows:** FrankenPHP được đóng gói dưới dạng một kho lưu trữ nhúng trọn bộ runtime PHP. Trong quá trình cài đặt, FlyEnv tự động sinh `php.ini` từ một template, chỉ bật những extension thực sự có mặt trong thư mục `ext/` đi kèm.
- **Hai cột phiên bản PHP và Caddy:** bảng phiên bản phân tích `frankenphp --version` và hiển thị cả phiên bản PHP nhúng lẫn phiên bản Caddy cho mỗi bản build đã cài, để bạn luôn biết chính xác từng phiên bản FrankenPHP mang runtime nào.
- **Thao tác theo từng phiên bản:** mở thư mục của phiên bản trong trình quản lý tệp, và trên Windows còn có thể chỉnh `php.ini` đi kèm thông qua cùng hộp thoại cấu hình mà [module PHP](/vi/features/php) sử dụng.

![Trình quản lý phiên bản FrankenPHP với hai cột phiên bản PHP và Caddy](https://oss.macphpstudy.com/image/features/frankenphp-2.webp)

## Quản lý dịch vụ

Tab **Dịch vụ** liệt kê mọi phiên bản FrankenPHP đã cài với các nút khởi động, dừng và khởi động lại, cùng thông tin phiên bản PHP và Caddy đã mô tả ở trên.

- FlyEnv khởi chạy một phiên bản bằng `frankenphp run --config <baseDir>/frankenphp/Caddyfile --pidfile …`, nên tiến trình được theo dõi qua pidfile và có thể dừng một cách sạch sẽ.
- Trên Linux, dịch vụ được khởi động thông qua root helper của FlyEnv khi cần quyền nâng cao.
- FrankenPHP phục vụ các site PHP trực tiếp qua engine Caddy nhúng của nó — không có tiến trình PHP-FPM nào để cài, cấu hình hay giữ chạy.

![Tab Dịch vụ của FrankenPHP với phiên bản đang chạy](https://oss.macphpstudy.com/image/features/frankenphp-3.webp)

## Cấu hình

Tab **Tệp cấu hình** chỉnh sửa Caddyfile toàn cục mà FrankenPHP chạy với.

- **Trình chỉnh sửa thô:** Caddyfile được chỉnh như văn bản thuần — FlyEnv không bọc nó trong một biểu mẫu.
- **Dựa trên template:** tệp được sinh từ một template (có bản tiếng Anh và tiếng Trung) và import mọi vhost site từ `vhost/frankenphp/*`, nhờ đó cấu hình site tách biệt với các thiết lập toàn cục.
- **`php.ini` trên Windows:** vì các bản build FrankenPHP trên Windows nhúng runtime PHP riêng, `php.ini` của phiên bản có thể được mở và điều chỉnh từ menu thao tác của phiên bản bằng hộp thoại cấu hình của module PHP.

![Trình xem log FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-4.webp)

## Tích hợp site

Các site kiểu PHP tạo trong **Host** tự động nhận một vhost FrankenPHP dùng directive `php_server`, nên chúng chạy như các ứng dụng FrankenPHP thật thay vì chỉ phục vụ tệp tĩnh — [giải pháp Laravel](/vi/solutions/laravel) cho thấy một stack framework hoàn chỉnh chạy trên kiểu thiết lập này.

- **Cổng theo từng site:** mỗi site có một cổng FrankenPHP riêng (`port.frankenphp`), nên FrankenPHP có thể phục vụ cùng một site song song với [Nginx](/vi/features/nginx), Apache hay Caddy. Các site được tạo trước khi hành vi này tồn tại sẽ quay về dùng cổng Caddy dùng chung.
- **HTTPS tự động:** các vhost bao gồm `tls internal`, cấp cho mỗi site một chứng chỉ được tin cậy local mà không cần thiết lập thêm; tên miền và chứng chỉ site được đề cập trong [Site local, tên miền tùy chỉnh & HTTPS](/vi/features/local-sites-https).
- **Reverse proxy theo từng site:** một site thay vào đó có thể reverse proxy đến một dịch vụ local khác thông qua vhost FrankenPHP của nó.
- **Vhost tự chữa lành:** khi một phiên bản FrankenPHP khởi động, FlyEnv tái sinh mọi vhost site còn thiếu trước khi chạy tiến trình.

Để có cái nhìn rộng hơn về khi nào nên chọn FrankenPHP thay vì PHP-FPM, RoadRunner hay Swoole, xem [hướng dẫn triển khai PHP](/vi/guide/deploy-php-projects-without-docker).

## Log

Tab **Log** theo dõi `frankenphp.log` và đồng thời liệt kê mọi tệp `frankenphp-*.log` trong thư mục gốc FrankenPHP, nhờ đó các tệp log theo phiên bản và theo site đều đọc được tại một nơi.

![Trình xem log FrankenPHP](https://oss.macphpstudy.com/image/features/frankenphp-5.webp)

<FeatureRelatedLinks locale="vi" slug="frankenphp" />

## Lưu ý tương thích

FlyEnv quản lý runtime FrankenPHP, cấu hình của nó và tích hợp site; module không đảm bảo mọi bản phát hành FrankenPHP hay extension PHP đi kèm đều khả dụng trên mọi hệ điều hành. MacPorts và SDKMAN không phải là nguồn cài đặt cho module này, và FrankenPHP không cung cấp bảng quản trị — việc đối chiếu yêu cầu framework và extension với bản build đã cài vẫn là trách nhiệm của dự án bạn. Hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
