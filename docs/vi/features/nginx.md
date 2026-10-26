---
layout: doc
titleTemplate: false
title: 'Nginx Version Manager và server site local | FlyEnv'
description: 'Cài đặt và chuyển đổi phiên bản Nginx, chỉnh nginx.conf trực quan, và phục vụ các site local với rewrite rule và reverse proxy.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển đổi phiên bản Nginx, chỉnh nginx.conf trực quan, và phục vụ các site local với rewrite rule và reverse proxy.'
  - - meta
    - property: og:title
      content: 'Nginx Version Manager và server site local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển đổi phiên bản Nginx, chỉnh nginx.conf trực quan, và phục vụ các site local với rewrite rule và reverse proxy.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/nginx
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/nginx
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Nginx trong FlyEnv

Nginx là một web server và reverse proxy mã nguồn mở, được dùng cả để phục vụ site trực tiếp lẫn định tuyến lưu lượng tới các application server như PHP-FPM. FlyEnv biến Nginx thành một phần được quản lý của stack local của bạn: cài nhiều phiên bản song song, chạy một trong số chúng như một dịch vụ nền từ thanh bên hay khay hệ thống, và chỉnh `nginx.conf` qua một biểu mẫu trực quan hay một trình chỉnh sửa nguồn đầy đủ. Mỗi site kiểu PHP bạn tạo trong FlyEnv đều nhận vhost Nginx riêng được sinh tự động với cổng theo từng site, rewrite rule nhận biết framework và hỗ trợ reverse proxy. Các site trên FlyEnv được trình bày trọn vẹn trong [Hướng dẫn Host](/vi/guide/host).

![Tổng quan module Nginx của FlyEnv](https://oss.macphpstudy.com/image/features/nginx-1.webp)

## Quản lý phiên bản Nginx

Cài nhiều phiên bản Nginx từ **Nginx → Version Manager** và giữ chúng song song với nhau.

- **Nhiều nguồn cài đặt:** các bản build tĩnh trên mọi nền tảng, cộng thêm Homebrew trên macOS và Linux, và MacPorts trên macOS.
- **Phiên bản tùy chỉnh:** đăng ký một thư mục chứa bản build Nginx của riêng bạn; FlyEnv tìm binary bên trong nó và hiển thị cạnh các phiên bản được quản lý.
- **Cấu hình dùng chung:** tất cả các phiên bản được cài dùng chung một `nginx.conf`, nhờ đó việc chuyển phiên bản không bao giờ làm mất cài đặt của bạn.

![Nginx Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/nginx-2.webp)

## Quản lý dịch vụ

Nginx là một dịch vụ nền thực thụ trong FlyEnv, chứ không chỉ là một danh sách phiên bản.

- **Mỗi thời điểm chỉ một phiên bản chạy:** có thể cài nhiều phiên bản, nhưng chỉ một chạy; việc khởi động một phiên bản khi phiên bản khác đang chạy bị chặn trong tab Service.
- **Điều khiển từ thanh bên và khay:** khởi động hay dừng Nginx từ công tắc module trên thanh bên, hoặc trực tiếp từ khay hệ thống mà không cần mở cửa sổ chính.
- **Tự sửa cấu hình khi khởi động:** FlyEnv sửa chỉ thị `user` và các đường dẫn tạm trong cấu hình, và sinh lại include `enable-php-<version>.conf` cho mọi phiên bản PHP mà các site của bạn dùng, nhờ đó tích hợp PHP-FPM luôn khớp với thiết lập hiện hành.

![Bảng dịch vụ Nginx với các nút khởi động và dừng](https://oss.macphpstudy.com/image/features/nginx-3.webp)

## Cấu hình

Tab **Config File** chỉnh `nginx.conf` dùng chung theo hai cách.

- **Biểu mẫu thiết lập chung:** điều chỉnh các chỉ thị hay thay đổi mà không cần đụng tới tệp — `keepalive_timeout`, `gzip`, `gzip_min_length`, `gzip_comp_level`, `client_max_body_size`, `server_names_hash_bucket_size` và `server_names_hash_max_size`, cộng thêm kích thước buffer cho header và body của client.
- **Trình chỉnh sửa nguồn đầy đủ:** chuyển sang trình chỉnh sửa thô cho bất cứ thứ gì biểu mẫu chưa bao phủ, với khôi phục một cú nhấp về cấu hình mặc định.

![Chỉnh nginx.conf với biểu mẫu thiết lập chung](https://oss.macphpstudy.com/image/features/nginx-4.webp)

## Tích hợp site

Module Host của FlyEnv không có một web server mặc định duy nhất: các site kiểu PHP nhận cấu hình vhost từ cả bốn web server — Nginx, [Apache](/vi/features/apache), [Caddy](/vi/features/caddy) và [FrankenPHP](/vi/features/frankenphp) — cùng một lúc, và server nào đang chạy thì phục vụ site. Việc tạo site được trình bày trong [Hướng dẫn Host](/vi/guide/host).

- **Vhost và cổng theo từng site:** mỗi site kiểu PHP nhận tệp vhost Nginx riêng được sinh tự động cùng cổng Nginx riêng (mặc định 80/443), độc lập với các cổng mà Apache, Caddy hay FrankenPHP dùng — nhờ đó cùng một site có thể được phục vụ bởi nhiều web server cùng lúc, như [hướng dẫn multi-server HTML-as-PHP](/vi/guide/parse-html-as-php-multi-servers) minh họa. Các site kiểu khác thì khác: site Node, Java, Go và Python được truy cập qua reverse proxy, còn site Tomcat nằm trong `server.xml`. Tên miền và HTTPS cho site được trình bày trong [Site local, tên miền tùy chỉnh & HTTPS](/vi/features/local-sites-https).
- **Rewrite rule tự động:** FlyEnv nhận diện các dự án [WordPress](/vi/solutions/wordpress), [Laravel](/vi/solutions/laravel) và Yii và điền sẵn các URL rewrite rule tương ứng vào vhost của site.
- **Reverse proxy theo từng site:** thêm các reverse proxy rule vào một site để chuyển tiếp các path tới app server local — [hướng dẫn reverse proxy multi-server cho NestJS](/vi/guide/reverse-proxy-nestjs-multi-servers) đi qua một ví dụ hoàn chỉnh.
- **PHP qua PHP-FPM:** các site PHP được phục vụ qua các include PHP-FPM theo từng phiên bản, cho phép mỗi site chọn phiên bản PHP riêng từ những bản đã cài trong [module PHP](/vi/features/php).

## Log

Trang module Nginx gồm các tab **Error Log** và **Log (access)** chuyên dụng cho log toàn server. Mỗi site còn tự ghi log access và log error của riêng nó, mở được từ trình xem log của site trong module Host — tiện khi debug một tên miền duy nhất mà không phải lọc qua log toàn cục.

![Trình xem log lỗi và log access của Nginx](https://oss.macphpstudy.com/image/features/nginx-5.webp)

<FeatureRelatedLinks locale="vi" slug="nginx" />

## Lưu ý tương thích

FlyEnv quản lý binary Nginx, vòng đời tiến trình và cấu hình được sinh ra của nó. Tất cả các phiên bản được cài dùng chung một `nginx.conf`, nhờ đó những thay đổi thực hiện qua biểu mẫu trực quan hay trình chỉnh sửa thô sẽ có hiệu lực bất kể bạn khởi động phiên bản nào — hãy ghi nhớ điều này trước khi dựa vào một chỉ thị chỉ tồn tại ở các bản phát hành mới hơn. Các nguồn cài khả dụng khác nhau theo nền tảng (MacPorts chỉ có trên macOS, còn Windows dùng bản build tĩnh). Hãy đối chiếu yêu cầu của site với bản build Nginx đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
