---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Go và runtime dự án | FlyEnv'
description: 'Cài đặt và chuyển đổi phiên bản Go bằng bản build tĩnh, Homebrew hay GVM, và chạy các dự án Go với runtime theo từng dự án.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển đổi phiên bản Go bằng bản build tĩnh, Homebrew hay GVM, và chạy các dự án Go với runtime theo từng dự án.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Go và runtime dự án | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển đổi phiên bản Go bằng bản build tĩnh, Homebrew hay GVM, và chạy các dự án Go với runtime theo từng dự án.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/go
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/go
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Go local với FlyEnv

Go là ngôn ngữ lập trình biên dịch, kiểu tĩnh thường được dùng cho các dịch vụ mạng, công cụ dòng lệnh và phần mềm hạ tầng đám mây. FlyEnv gom việc phát triển Go local vào một ứng dụng: cài nhiều phiên bản Go song song, quyết định lệnh `go` trong terminal của bạn trỏ về phiên bản nào, tích hợp với GVM trên macOS và Linux, và gắn từng dự án với runtime Go riêng của nó. Module Go gồm năm tab — Dự án Go, Dịch vụ, Trình quản lý phiên bản, Dự án mới và GVM — bao phủ cài đặt phiên bản, kiểm soát PATH, runtime cho dự án và việc dựng khung dự án.

![Tổng quan module Go của FlyEnv](https://oss.macphpstudy.com/image/features/go-1.webp)

## Quản lý phiên bản Go

Cài các phiên bản Go song song từ **Go → Trình quản lý phiên bản** và giữ tất cả luôn khả dụng.
[gradle.md](gradle.md)
- **Bản build tĩnh trên mọi nền tảng:** FlyEnv tải các bản phát hành Go chính thức — kho lưu `.tar.gz` từ danh sách phát hành go.dev trên macOS và Linux, gói zip trên Windows — và giải nén vào thư mục quản lý riêng của nó.
- **Nguồn từ trình quản lý gói:** trên macOS bạn cũng có thể cài formula `go` từ Homebrew hay MacPorts; trên Linux, Homebrew là một nguồn bổ sung.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build Go của riêng bạn và nó sẽ xuất hiện trong danh sách cạnh các phiên bản được quản lý.
- **Phát hiện GVM:** trên macOS và Linux, FlyEnv tự động tìm các phiên bản Go được cài qua GVM và liệt kê chúng cạnh các phiên bản được quản lý.

![Trình quản lý phiên bản Go với nguồn tĩnh, Homebrew và MacPorts](https://oss.macphpstudy.com/image/features/go-2.webp)

Trên macOS và Linux, tab **GVM** chuyên dụng tích hợp trực tiếp với một bản cài GVM sẵn có: FlyEnv phát hiện GVM trong `~/.gvm` hoặc qua `GVM_ROOT`, đưa ra lựa chọn cài GVM một cú nhấp trong terminal nhúng của nó khi chưa có, và liệt kê các phiên bản do GVM quản lý với các thao tác cài và sử dụng.

![Tab GVM liệt kê các phiên bản Go do GVM quản lý](https://oss.macphpstudy.com/image/features/go-3.webp)

## Chuyển đổi phiên bản bằng dòng lệnh

Cái tên **Dịch vụ** khá dễ gây hiểu nhầm với Go: tab này không bao giờ khởi động hay dừng bất cứ thứ gì, vì FlyEnv không chạy daemon Go nào. Thứ bạn nhận được là một bảng các phiên bản đã cài với quản lý PATH tích hợp sẵn.

- **Chuyển đổi phiên bản cho terminal:** chọn phiên bản đã cài mà lệnh `go` trong terminal của bạn nên trỏ về. FlyEnv viết lại `PATH` của bạn bằng cách thêm hoặc xóa thư mục bin của phiên bản, và gán nhãn cho từng mục để bạn biết đó là FlyEnv hay một công cụ khác đặt vào.
- **Alias và ghi chú theo từng phiên bản:** gắn một alias ngắn và một ghi chú tự do vào bất kỳ lần cài nào, giúp các bản build tương tự vẫn dễ phân biệt trong danh sách.
- **Bảo trì:** đường dẫn cài đặt hiển thị ngay trong bảng, và các phiên bản không còn cần đến có thể xóa ngay tại đó.

## Runtime Go cấp dự án

Trong **Go → Dự án**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Go cụ thể thay vì phụ thuộc vào phiên bản tình cờ đang có trong PATH. [Hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) giải thích chi tiết cơ chế này.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nên các terminal và trình soạn thảo khởi chạy từ FlyEnv tự động nhận đúng bộ công cụ Go.
- **Chạy như một dịch vụ:** tùy chọn chạy dự án trực tiếp từ FlyEnv với lệnh chạy hoặc tệp chạy tùy chỉnh, một cổng dự án hiển thị dưới dạng liên kết `http://127.0.0.1:<port>`, biến môi trường đặt trực tiếp hoặc từ tệp env, và công tắc sudo trên macOS và Linux. Để đặt cổng đó sau một tên miền local có HTTPS, [hướng dẫn reverse proxy](/vi/guide/reverse-proxy-nestjs-multi-servers) trình bày cách thiết lập Nginx, Apache và Caddy.
- **Mở bằng công cụ:** nhảy từ một dòng dự án vào terminal hệ thống hoặc mở dự án trong GoLand với môi trường đã được nạp sẵn.
- **Template Dự án mới:** dựng khung một module `go mod init` thuần hoặc một dự án dựa trên Gin, Echo, Fiber, Iris, GoFrame hay Buffalo mà không cần rời khỏi ứng dụng. [Giải pháp Gitea](/vi/solutions/gitea) cho thấy một ứng dụng Go cấp sản xuất được phục vụ qua quản lý site của FlyEnv.

![Danh sách Dự án Go với gắn phiên bản Go theo từng dự án](https://oss.macphpstudy.com/image/features/go-4.webp)

Để chạy các dự án này như các dịch vụ nền bền vững, xem hướng dẫn [triển khai dự án Node.js, Python và Go không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker).

<FeatureRelatedLinks locale="vi" slug="go" />

## Lưu ý tương thích

FlyEnv quản lý cài đặt phiên bản Go, chuyển đổi PATH và runtime cho dự án; nó không đóng gói công cụ framework ngoài những gì từng bản build Go cùng hệ sinh thái module Go tự cung cấp. Nguồn cài đặt khả dụng khác nhau tùy nền tảng — tab GVM và tính năng tự phát hiện GVM chỉ có trên macOS và Linux, còn Windows dùng bản build tĩnh — vì vậy hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham khảo về các gói được hỗ trợ.
