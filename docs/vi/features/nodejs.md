---
layout: doc
titleTemplate: false
title: 'Môi trường phát triển Node.js và dịch vụ dự án | FlyEnv'
description: 'Cài các phiên bản Node.js, gắn runtime với dự án và chạy dịch vụ Node với cổng, log và reverse proxy local trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài các phiên bản Node.js, gắn runtime với dự án và chạy dịch vụ Node với cổng, log và reverse proxy local trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'Môi trường phát triển Node.js và dịch vụ dự án | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài các phiên bản Node.js, gắn runtime với dự án và chạy dịch vụ Node với cổng, log và reverse proxy local trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/nodejs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/nodejs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Node.js trong FlyEnv

Node.js là một JavaScript runtime được xây dựng trên engine V8, chạy JavaScript bên ngoài trình duyệt, thường nhất là cho web server, API và công cụ dòng lệnh. Module Node.js của FlyEnv kết hợp quản lý phiên bản với một quy trình dịch vụ dự án. Chọn runtime mà dự án cần, chạy lệnh của nó từ thư mục dự án, và giữ cổng, biến môi trường cùng log của nó hiển thị cạnh các dịch vụ local khác của bạn.

## Quản lý phiên bản Node.js

Tab **Version Manager** liệt kê các phiên bản mà FlyEnv có thể cung cấp và các phiên bản đã được cài trên máy của bạn. Trên macOS và Linux, FlyEnv có thể làm việc với công cụ `fnm` hay `nvm` đã cấu hình; ứng dụng cũng có một quy trình runtime được quản lý mặc định. Trên Windows, các bản phát hành hiện tại dùng quy trình cài đặt tích hợp sẵn của FlyEnv thay vì vận hành các bản cài NVM hay FNM bên ngoài.

Dùng danh sách phiên bản để cài runtime trước khi gán nó cho một dự án. Các binary cụ thể và tính khả dụng của gói phụ thuộc vào hệ điều hành và metadata phát hành, vì vậy hãy kiểm tra danh sách trong bản build FlyEnv hiện tại của bạn thay vì giả định một phiên bản có thể dùng chung trên các nền tảng.

## Gắn một runtime với một dự án

Trong **Node.js → Projects**, thêm đường dẫn dự án và chọn binary đã cài. Mô hình dự án của FlyEnv lưu đường dẫn binary và phiên bản được chọn, sau đó tích hợp shell của nó có thể nạp môi trường dự án khi bạn đi vào thư mục đó. Điều này hữu ích khi một ứng dụng client cũ và một ứng dụng hiện đại đòi hỏi các phiên bản Node.js khác nhau.

[Hướng dẫn runtime cấp dự án](/vi/guide/project-level-runtime-environment) trình bày thiết lập và hành vi shell. Nó cũng bao phủ các dự án PHP, Python, Go, Ruby và Java dùng cùng mô hình cô lập đó.

## Chạy một ứng dụng Node.js như một dịch vụ được quản lý

Bật **Run as service** trong trình chỉnh sửa dự án khi ứng dụng cần chạy liên tục. Cấu hình:

- một lệnh chẳng hạn như `npm run dev`, `npm run start` hay script được ghi trong tài liệu của dự án;
- một cổng TCP, ví dụ `3000`;
- biến môi trường trực tiếp hay qua một tệp env;
- các đường dẫn tệp cấu hình và tệp log tùy chọn;
- một đường dẫn tệp PID khi tiến trình tạo ra nó.

FlyEnv cung cấp các nút khởi động và dừng trong danh sách dự án và có thể hiển thị log đầu ra cùng log lỗi của dự án. Lệnh chạy từ đường dẫn dự án, nhờ đó việc cài dependency và các bước build vẫn là trách nhiệm của dự án.

Với một stack tùy chỉnh, cùng mô hình dịch vụ dự án đó có thể chạy một tệp script hay một executable khác. Nó không giới hạn ở Express hay Next.js; yêu cầu quan trọng là một lệnh khởi động hợp lệ và một cổng lắng nghe mà ứng dụng có thể dùng ở local.

## Đặt Node.js sau một tên miền local

Một tiến trình Node có thể lắng nghe trên `127.0.0.1:3000` trong khi FlyEnv Host cung cấp địa chỉ hướng trình duyệt. Thêm một site, cấu hình một reverse proxy rule tới cổng dự án và bật HTTPS khi tích hợp cần một origin bảo mật. Điều này giữ vòng đời tiến trình của ứng dụng trong module Node.js và cấu hình tên miền/server trong Host.

Các liên kết hữu ích:

- [Thiết lập Reverse Proxy cho NestJS và Node.js](/vi/guide/reverse-proxy-nestjs-multi-servers) — cấu hình Nginx, Apache hay Caddy.
- [Site local, tên miền tùy chỉnh & HTTPS](/vi/features/local-sites-https) — hiểu về site root, cổng, chứng chỉ và alias.
- [Triển khai Node.js, Python & Go mà không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker) — hướng dẫn đầy đủ về dịch vụ dự án.
- [Giải pháp Directus](/vi/solutions/directus) và [giải pháp Strapi](/vi/solutions/strapi) — các ví dụ về stack local dựa trên Node.

## Xem quy trình làm việc

[Bản demo runtime dự án Node](/vi/demos) cho thấy việc chọn phiên bản, dịch vụ dự án và Nginx làm việc cùng nhau. [Bản demo dịch vụ Node.js, Python và Go native](/vi/demos) cho thấy cùng các nút điều khiển dịch vụ đó trên nhiều runtime.

<FeatureRelatedLinks locale="vi" slug="nodejs" />

## Lưu ý tương thích

Các trình quản lý gói Node.js, CLI framework và trình quản lý tiến trình production vẫn là những công cụ riêng biệt. FlyEnv quản lý việc chọn runtime local và điểm vào tiến trình; nó không thay thế các script trong `package.json`, lockfile, hay một nền tảng triển khai production. Dùng [trang tải xuống](/vi/download) để cài bản phát hành FlyEnv hiện tại cho hệ điều hành của bạn.
