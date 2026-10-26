---
layout: doc
titleTemplate: false
title: 'Site local, tên miền tùy chỉnh và HTTPS | FlyEnv'
description: 'Tạo site local với tên miền tùy chỉnh, cổng web server, reverse proxy và chứng chỉ HTTPS bằng FlyEnv Host.'
head:
  - - meta
    - name: description
      content: 'Tạo site local với tên miền tùy chỉnh, cổng web server, reverse proxy và chứng chỉ HTTPS bằng FlyEnv Host.'
  - - meta
    - property: og:title
      content: 'Site local, tên miền tùy chỉnh và HTTPS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Tạo site local với tên miền tùy chỉnh, cổng web server, reverse proxy và chứng chỉ HTTPS bằng FlyEnv Host.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/local-sites-https
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/local-sites-https
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Site local, tên miền tùy chỉnh và HTTPS trong FlyEnv

Module Host ánh xạ một dự án local đến một địa chỉ thân thiện với trình duyệt cùng cấu hình web server nên phục vụ nó. Một mục site có thể bao gồm document root, các bí danh, cổng theo từng server, phiên bản PHP tùy chọn, quy tắc rewrite, quy tắc reverse proxy và thiết lập chứng chỉ HTTPS.

## Một mục site kiểm soát những gì

- **Tên miền và bí danh:** chọn một hostname chẳng hạn như `myapp.test` và thêm bí danh khi cùng một dự án cần nhiều hơn một tên local.
- **Document root:** trỏ một site tĩnh hay ứng dụng PHP đến thư mục nên được phục vụ. Các framework thường dùng thư mục `public`.
- **Cổng server:** cấu hình cổng HTTP và HTTPS cho Nginx, Apache, Caddy hay FrankenPHP; phần cài đặt nâng cao hiển thị cổng của từng server riêng biệt.
- **Gắn PHP:** chọn một phiên bản PHP đã cài cho một site PHP, hoặc để nguyên dạng site tĩnh khi không cần bộ xử lý PHP.
- **Quy tắc rewrite:** chỉnh cấu hình rewrite Nginx được sinh ra cho các framework định tuyến qua một front controller.
- **Reverse proxy:** ánh xạ một đường dẫn như `/api` đến một URL dịch vụ local như `http://127.0.0.1:3000`.
- **HTTPS:** bật Auto SSL để có chứng chỉ được sinh local, hoặc cung cấp tệp chứng chỉ và khóa cho một thiết lập tùy chỉnh.

FlyEnv ghi các ánh xạ host đã cấu hình vào tệp hosts của hệ điều hành khi site cần một tên local — [DNS server tích hợp sẵn](/vi/features/dns-server) là một phương án thay thế, phân giải các tên miền site mà hoàn toàn không đụng đến tệp hosts. Quyền helper chính là lý do thiết lập lần đầu có thể yêu cầu mật khẩu quản trị viên.

## Một quy trình site local dễ dự đoán

1. Khởi động web server và runtime mà dự án cần (ví dụ Nginx cùng PHP-FPM).
2. Mở **Host** và chọn **Add Site**.
3. Nhập tên miền local và document root chính xác; với Laravel và nhiều PHP framework, dùng thư mục `public` của dự án.
4. Chọn phiên bản PHP hay chế độ site tĩnh và đặt cổng server.
5. Bật Auto SSL khi dự án cần HTTPS, cookie bảo mật, callback OAuth hay các API trình duyệt đòi hỏi một origin an toàn.
6. Thêm quy tắc rewrite hay điểm đến reverse proxy nếu dự án có front controller hoặc một dịch vụ ứng dụng riêng biệt.
7. Lưu site, khởi động các dịch vụ đã chọn và mở liên kết site từ danh sách Host.

[Hướng dẫn Host](/vi/guide/host) chứa ảnh chụp màn hình cùng phần thiết lập đầy đủ theo từng trường. Nó cũng giải thích về bí danh, `localhost` với cổng tường minh, các template rewrite và cách xử lý sự cố.

## Kết nối một dịch vụ dự án vào một tên miền

Host không nhất thiết phải tự khởi chạy tiến trình ứng dụng. Hãy giữ tiến trình trong module ngôn ngữ của nó, rồi proxy đến cổng local của nó:

| Dịch vụ ứng dụng | Trình lắng nghe local | Quy tắc Host |
| --- | --- | --- |
| Node.js / NestJS | `127.0.0.1:3000` | `https://api.test` → `http://127.0.0.1:3000` |
| PHP Worker hoặc RoadRunner | `127.0.0.1:8787` | `https://worker.test` → `http://127.0.0.1:8787` |
| Frontend tĩnh | document root của web server | `https://frontend.test` → thư mục dự án |

Dùng [trang tính năng Node.js](/vi/features/nodejs) cho phía dịch vụ dự án của mô hình này và [trang tính năng PHP](/vi/features/php) cho các lựa chọn PHP-FPM và worker.

## HTTPS và chứng chỉ

Auto SSL tạo một Certificate Authority local của FlyEnv khi cần, cấp chứng chỉ cho các bí danh của site và lưu chứng chỉ/khóa cùng cấu hình site. Tích hợp [MkCert](/vi/features/mkcert) cũng có thể sinh các chứng chỉ phát triển được tin cậy local. Nếu một trình duyệt hay hệ điều hành không tự tin cậy CA, hãy làm theo hướng dẫn chứng chỉ dành riêng cho từng nền tảng trong [Hướng dẫn Host](/vi/guide/host).

Đừng dùng một chứng chỉ local làm bằng chứng rằng một site được tin cậy công khai: những chứng chỉ này dành cho phát triển và kiểm thử local. Để xem trước công khai, ghép dịch vụ local với [Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) hoặc triển khai nó vào một môi trường dành cho lưu lượng bên ngoài.

<FeatureRelatedLinks locale="vi" slug="local-sites-https" />

## Lưu ý tương thích

Các tính năng site phụ thuộc vào web server và runtime bạn đã cài trong FlyEnv, và việc tin cậy chứng chỉ đòi hỏi CA của FlyEnv phải được cài trên hệ thống của bạn. Hãy xác minh hành vi của bí danh, cổng và HTTPS trên chính máy của bạn, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
