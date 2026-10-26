---
layout: doc
titleTemplate: false
title: 'Module tùy chỉnh: định nghĩa dịch vụ của riêng bạn | FlyEnv'
description: 'Biến bất kỳ lệnh hay script nào thành một module FlyEnv được quản lý với mục thanh bên, trình xem cấu hình và log riêng.'
head:
  - - meta
    - name: description
      content: 'Biến bất kỳ lệnh hay script nào thành một module FlyEnv được quản lý với mục thanh bên, trình xem cấu hình và log riêng.'
  - - meta
    - property: og:title
      content: 'Module tùy chỉnh: định nghĩa dịch vụ của riêng bạn | FlyEnv'
  - - meta
    - property: og:description
      content: 'Biến bất kỳ lệnh hay script nào thành một module FlyEnv được quản lý với mục thanh bên, trình xem cấu hình và log riêng.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/user-modules
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/user-modules
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Module tùy chỉnh trong FlyEnv

FlyEnv đi kèm nhiều module tích hợp sẵn, nhưng nó không thể bao phủ mọi công cụ mà một lập trình viên có thể chạy ở local. Một module tùy chỉnh lấp khoảng trống đó: bạn mô tả dịch vụ của riêng mình một lần, và FlyEnv trao cho nó một mục trên thanh bên, một trang dịch vụ với các nút khởi động/dừng/khởi động lại, và các tab cho tệp cấu hình và log của nó — trải nghiệm làm việc y như một module tích hợp sẵn.

![Một module tùy chỉnh do người dùng định nghĩa với mục thanh bên riêng trong FlyEnv](https://oss.macphpstudy.com/image/features/user-modules-1.webp)

## Tạo một module

Các module tùy chỉnh được định nghĩa trong **Settings → Modules**. Mỗi module bạn tạo trở thành một mục hạng nhất trên thanh bên của FlyEnv với trang riêng của nó.

- **Nhận diện:** đặt cho module một nhãn và một biểu tượng để dễ nhận ra trên thanh bên.
- **Công tắc dịch vụ:** quyết định module có chạy các dịch vụ được quản lý hay không. Khi được bật, FlyEnv thêm các nút điều khiển vòng đời và theo dõi tiến trình của từng mục.
- **Chế độ single-instance:** đánh dấu module để chỉ một mục trong số các mục của nó chạy mỗi thời điểm — hữu ích cho các công cụ gắn vào một cổng cố định. Khởi động một mục lúc đó tự động dừng các mục khác trước, và FlyEnv ghi nhớ mục nào bạn khởi động sau cùng.
- **Danh sách tệp cấu hình và log:** khai báo trước các tệp cấu hình và tệp log của module; mỗi tệp trở thành một tab trên trang của module.

Việc ẩn một module tùy chỉnh khỏi thanh bên sẽ dừng các dịch vụ đang chạy của nó, nhờ đó một module bị ẩn không bao giờ bỏ lại các tiến trình mồ côi. [Hướng dẫn module tùy chỉnh](/vi/guide/user-customizable-modules) đi qua một ví dụ hoàn chỉnh được xây dựng quanh [etcd](/vi/features/etcd).

![Định nghĩa một module tùy chỉnh trong Settings → Modules](https://oss.macphpstudy.com/image/features/user-modules-2.webp)

## Các mục Exec

Một module giữ một hay nhiều exec item — các lệnh riêng lẻ tạo nên dịch vụ, chẳng hạn các phiên bản hay cấu hình khác nhau của cùng một công cụ. Tab Service liệt kê chúng với các nút khởi động, dừng và khởi động lại.

Mỗi mục định nghĩa:

- **Lệnh hay tệp:** hoặc là một dòng lệnh shell gõ trực tiếp, hoặc là một tệp script chọn từ đĩa mà FlyEnv thực thi.
- **Tên và ghi chú:** giữ cho các mục giống nhau vẫn phân biệt được trong danh sách.
- **Chạy với sudo:** với các lệnh cần đặc quyền cao hơn, FlyEnv hỏi mật khẩu, với phương án dự phòng "open in Terminal" khi cần nâng quyền tương tác.
- **Đường dẫn tệp PID:** tệp pid cho phép FlyEnv theo dõi mục có đang chạy hay không và dừng nó một cách sạch sẽ — trên Unix, stop gửi SIGTERM rồi đến SIGINT tới pid đã ghi lại.
- **Tệp cấu hình và log theo từng mục:** mỗi mục có thể đính kèm các tệp cấu hình và tệp log riêng, mở từ popup thao tác của mục.

Các mục thường chạy headlessly trong nền; ở những nơi một tiến trình cần một phiên hiển thị, FlyEnv có thể khởi chạy nó trong một cửa sổ terminal thật thay thế (Terminal.app trên macOS, một script terminal trên Linux) — cùng [tích hợp terminal](/vi/features/cli-terminal) mà phần còn lại của ứng dụng sử dụng.

![Thêm một exec item với các thiết lập lệnh, sudo và tệp pid](https://oss.macphpstudy.com/image/features/user-modules-3.webp)

## Các tab Config và Log

Trang module được dựng động từ những gì bạn đã khai báo: một tab **Service** với danh sách mục, cộng một tab cho mỗi tệp cấu hình đã khai báo và một cho mỗi tệp log.

- **Các tab cấu hình:** mở mỗi tệp đã khai báo trong một trình chỉnh sửa thô bên trong FlyEnv, nhờ đó bạn điều chỉnh cấu hình của dịch vụ mà không phải săn tìm tệp trên đĩa.
- **Các tab log:** theo dõi mỗi tệp log đã khai báo trực tiếp trong ứng dụng.
- **Thu thập đầu ra tích hợp sẵn:** với mọi mục được khởi động, FlyEnv tự động ghi lại đầu ra chuẩn và đầu ra lỗi của nó vào `<BaseDir>/module-customer/<id>.out.log` và `.error.log`, nhờ đó luôn có một log để kiểm tra ngay cả khi bạn không tự khai báo mục nào.

![Các tab cấu hình và log trên một trang module tùy chỉnh](https://oss.macphpstudy.com/image/features/user-modules-4.webp)

<FeatureRelatedLinks locale="vi" slug="user-modules" />

## Lưu ý tương thích

Các module tùy chỉnh bọc các lệnh và script mà bạn cung cấp; FlyEnv không cài hay quản lý phiên bản cho công cụ bên dưới — không có trình quản lý phiên bản, không có nguồn tải xuống trực tuyến và không có admin web UI cho một module tùy chỉnh, nhờ đó binary phải đã tồn tại sẵn trên máy của bạn — và phân giải được trên [PATH hệ thống](/vi/guide/setup-system-path-environment) hay được tham chiếu bằng đường dẫn tuyệt đối. Trạng thái dịch vụ chính xác phụ thuộc vào tệp pid bạn cấu hình, nhờ đó lệnh nên thực sự ghi pid của mình vào đường dẫn đó. Việc khởi chạy terminal khác nhau theo nền tảng (AppleScript trên macOS, một shell script trên Linux), và hành vi quanh đặc quyền cao theo quy tắc của hệ điều hành chủ. Các module tùy chỉnh khả dụng trên mọi nền tảng mà FlyEnv chạy — xem [trang tải xuống](/vi/download) để biết các hệ điều hành được hỗ trợ — và hãy coi những gì lệnh hay script của riêng bạn hỗ trợ là ranh giới thật sự của những gì module có thể làm.
