---
layout: doc
titleTemplate: false
title: 'Trình quản lý dịch vụ Memcached local | FlyEnv'
description: 'Cài đặt và chạy các phiên bản Memcached từ Homebrew, MacPorts hay bản build tĩnh chỉ với một cú nhấp.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chạy các phiên bản Memcached từ Homebrew, MacPorts hay bản build tĩnh chỉ với một cú nhấp.'
  - - meta
    - property: og:title
      content: 'Trình quản lý dịch vụ Memcached local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chạy các phiên bản Memcached từ Homebrew, MacPorts hay bản build tĩnh chỉ với một cú nhấp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/memcached
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/memcached
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Memcached trong FlyEnv

Memcached là một bộ nhớ đệm key-value in-memory mã nguồn mở, thường được dùng để tăng tốc các ứng dụng web bằng cách giữ kết quả truy vấn cơ sở dữ liệu, các fragment đã render hay dữ liệu session trong RAM — một phiên bản đơn giản hơn, chỉ làm cache, của [Redis](/vi/features/redis). FlyEnv chạy nó như một dịch vụ local được quản lý: cài một hoặc nhiều phiên bản từ Trình quản lý phiên bản, khởi động và dừng daemon từ tab Dịch vụ, và tiếp cận cache trên cổng mặc định 11211 mà không phải đụng đến trình quản lý gói hay tự tay viết script khởi động.

![Tổng quan module Memcached của FlyEnv](https://oss.macphpstudy.com/image/features/memcached-1.webp)

## Quản lý phiên bản

Cài Memcached từ **Memcached → Trình quản lý phiên bản**. Các nguồn được cung cấp phụ thuộc nền tảng của bạn:

- **macOS:** formula `memcached` của Homebrew và các bản build MacPorts.
- **Linux:** formula của Homebrew.
- **Windows:** một bản zip tĩnh từ các bản phát hành GitHub `nono303/memcached`; FlyEnv trích xuất bản build `libevent-2.1/x64` hay `cygwin/x64` phù hợp giúp bạn.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài Memcached của riêng bạn; FlyEnv quét tìm binary `memcached` (hay `memcached.exe`) và liệt kê cạnh các phiên bản được quản lý.

![Trình quản lý phiên bản Memcached với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/memcached-2.webp)

## Quản lý dịch vụ

Tab Dịch vụ khởi động binary `memcached` thật của phiên bản đã chọn ở foreground với một tệp pid do FlyEnv quản lý (`memcached -P .../memcached.pid -vv`), nhờ đó trạng thái vòng đời trong ứng dụng luôn phản ánh đúng tiến trình thực tế. Không có tham số cổng nào được truyền, nghĩa là daemon lắng nghe trên cổng mặc định upstream của Memcached là 11211.

- **Khởi động và dừng một cú nhấp:** điều khiển dịch vụ từ tab Dịch vụ, công tắc ở thanh bên hay khay hệ thống, giống như mọi module dịch vụ khác trong FlyEnv.
- **Đầu ra chi tiết khi đang chạy:** daemon chạy với `-vv`, nên các client kết nối đến cổng 11211 nhận một memcached server chuẩn trong khi hoạt động đi vào các luồng đầu ra riêng của tiến trình.
- **Chuyển phiên bản:** chọn bất kỳ phiên bản đã cài nào làm phiên bản mà dịch vụ chạy; mỗi phiên bản giữ nguyên bản cài của mình.

Khi daemon đang chạy trên cổng 11211, hãy trỏ các ứng dụng của bạn đến nó như một object cache: các stack PHP như [WordPress](/vi/solutions/wordpress) (qua một object-cache drop-in) và [Magento](/vi/solutions/magento) đều hỗ trợ Memcached làm cache hay session backend, điều này khiến một instance Memcached local rất tiện để tái lập hành vi caching của môi trường sản xuất.

Ghép dịch vụ đang chạy với các ứng dụng local từ [demo](/vi/demos), hoặc tải FlyEnv cho nền tảng của bạn trên [trang tải xuống](/vi/download).

<FeatureRelatedLinks locale="vi" slug="memcached" />

## Lưu ý tương thích

- Module Memcached **không có chỉnh sửa tệp cấu hình**: Memcached được cấu hình hoàn toàn qua đối số dòng lệnh, và FlyEnv khởi động nó với bộ đối số tích hợp sẵn thay vì một tệp cấu hình được sinh ra.
- Module **không có tab trình xem log**: đầu ra đi ra stdout/stderr qua `-vv` và không tệp log nào được ghi, nên không có gì để theo dõi từ trong ứng dụng.
- Dịch vụ luôn lắng nghe trên **cổng mặc định 11211**; FlyEnv không truyền ghi đè cổng nào.
- Không có bảng quản trị và không có tích hợp dự án hay site cho module này — nó chỉ quản lý daemon. Các phiên bản khả dụng phụ thuộc nguồn cài của nền tảng bạn, như liệt kê trên [trang tải xuống](/vi/download).
