---
layout: doc
titleTemplate: false
title: 'Trình quản lý chứng chỉ MkCert cho HTTPS local | FlyEnv'
description: 'Cài mkcert, tin cậy CA local của nó, và sinh các chứng chỉ HTTPS được tin cậy cho các site FlyEnv của bạn.'
head:
  - - meta
    - name: description
      content: 'Cài mkcert, tin cậy CA local của nó, và sinh các chứng chỉ HTTPS được tin cậy cho các site FlyEnv của bạn.'
  - - meta
    - property: og:title
      content: 'Trình quản lý chứng chỉ MkCert cho HTTPS local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài mkcert, tin cậy CA local của nó, và sinh các chứng chỉ HTTPS được tin cậy cho các site FlyEnv của bạn.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/mkcert
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/mkcert
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Chứng chỉ HTTPS local với FlyEnv

mkcert là một công cụ mã nguồn mở nhỏ gọn dành cho các chứng chỉ phát triển được tin cậy local: nó tự tạo một root CA riêng, và một khi CA đó được cài vào kho tin cậy hệ thống, mọi chứng chỉ nó ký đều được các trình duyệt của bạn chấp nhận mà không có cảnh báo. FlyEnv tích hợp [mkcert](https://github.com/FiloSottile/mkcert) và biến nó thành một quy trình chỉ cần trỏ và nhấp: cài binary, tin cậy root CA một lần, rồi sinh chứng chỉ cho bất kỳ [site local](/vi/features/local-sites-https) nào của bạn mà không cần chạm đến dòng lệnh.

![Tổng quan module MkCert của FlyEnv](https://oss.macphpstudy.com/image/features/mkcert-1.webp)

## Quản lý phiên bản

Tab **Trình quản lý phiên bản** cài đặt và giữ binary mkcert luôn được cập nhật.

- **Bản build tĩnh:** cài các bản phát hành mkcert chính thức từ danh sách phiên bản trực tuyến của FlyEnv, tải thẳng từ bản phát hành GitHub của dự án.
- **Homebrew:** trên macOS và Linux, các phiên bản cài bằng `brew install mkcert` được phát hiện và liệt kê cạnh các bản build được quản lý.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa binary `mkcert` của riêng bạn và nó cũng được quét vào.
- **Sẵn sàng chạy:** các binary tải về được giải nén vào thư mục riêng của FlyEnv, với thuộc tính cách ly của macOS được loại bỏ và quyền thực thi được đặt tự động.

![Trình quản lý phiên bản MkCert với các bản build tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/mkcert-2.webp)

## CA local và tab Certificates

Tab **Certificates** là trái tim của module. Nó hiển thị **CA Root Path** của mkcert (đọc trực tiếp từ `mkcert -CAROOT`, nhấp vào để hiện thư mục trong trình quản lý tệp của bạn) và cung cấp một thao tác **Install CA** chạy `mkcert -install` trong terminal nhúng của FlyEnv — đăng ký root CA local vào kho tin cậy hệ thống để mọi chứng chỉ nó ký đều được các trình duyệt của bạn tin cậy.

- **Bộ chọn binary:** chọn bản build mkcert đã cài nào sẽ chạy các lệnh; FlyEnv ưu tiên phiên bản đang có trên PATH môi trường của riêng nó.
- **Thực thi minh bạch:** cả cài CA lẫn sinh chứng chỉ đều chạy rõ ràng trong terminal nhúng, để bạn thấy chính xác mkcert làm gì.

## Sinh chứng chỉ theo từng site

Tab Certificates liệt kê các site bạn đã tạo trong FlyEnv, mỗi site với đường dẫn chứng chỉ và khóa của nó cùng một thao tác **Generate**.

- **Phủ cả tên miền và bí danh:** chứng chỉ được sinh bao gồm tên miền của site cùng mọi bí danh bạn đã cấu hình, qua `mkcert -cert-file … -key-file …`.
- **Lưu trữ được quản lý:** chứng chỉ và khóa được ghi vào thư mục `CA` riêng của FlyEnv, một thư mục cho mỗi site.
- **SSL được bật giúp bạn:** nếu site chưa bật HTTPS, FlyEnv bật nó với chứng chỉ vừa được sinh ngay khi việc sinh hoàn tất — không phải tự tay kết nối vào [thiết lập site của bạn](/vi/guide/host). Các tệp chứng chỉ được vhosts của site tham chiếu trực tiếp trong [Nginx](/vi/features/nginx), [Apache](/vi/features/apache) và [Caddy](/vi/features/caddy).

![Sinh một chứng chỉ HTTPS cho một site FlyEnv](https://oss.macphpstudy.com/image/features/mkcert-3.webp)

<FeatureRelatedLinks locale="vi" slug="mkcert" />

## Lưu ý tương thích

- mkcert là một công cụ dòng lệnh chạy một lần, không phải dịch vụ nền: không có gì để khởi động hay dừng, và module không có trình chỉnh sửa tệp cấu hình hay trình xem log theo chủ ý thiết kế.
- Các chứng chỉ được sinh là chứng chỉ phát triển được tin cậy local — dành cho chính máy của bạn, không phải cho môi trường sản xuất hay các thiết bị khác.
- Tin cậy root CA (`mkcert -install`) sẽ thay đổi kho tin cậy hệ thống và sẽ yêu cầu mật khẩu hệ thống của bạn, việc mà mkcert xử lý ngay trong terminal nhúng.
- Nguồn cài khác nhau tùy nền tảng: bản build tĩnh trên mọi nơi, Homebrew trên macOS và Linux. Xem [trang tải xuống](/vi/download) để biết các nền tảng mà chính FlyEnv hỗ trợ.
