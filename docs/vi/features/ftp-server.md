---
layout: doc
titleTemplate: false
title: 'FTP server local với quản lý tài khoản | FlyEnv'
description: 'Chạy một FTP server local với tài khoản được quản lý: Pure-FTPd trên macOS/Linux hoặc ftp-srv tích hợp sẵn trên mọi nền tảng.'
head:
  - - meta
    - name: description
      content: 'Chạy một FTP server local với tài khoản được quản lý: Pure-FTPd trên macOS/Linux hoặc ftp-srv tích hợp sẵn trên mọi nền tảng.'
  - - meta
    - property: og:title
      content: 'FTP server local với quản lý tài khoản | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy một FTP server local với tài khoản được quản lý: Pure-FTPd trên macOS/Linux hoặc ftp-srv tích hợp sẵn trên mọi nền tảng.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/ftp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/ftp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FTP server trong FlyEnv

FlyEnv cung cấp hai cách để chạy một FTP server local và hiển thị cả hai qua cùng một bảng tài khoản: Pure-FTPd như một dịch vụ có thể cài đặt được quản lý trên macOS và Linux, và ftp-srv như một server dựa trên Node đi kèm ứng dụng chạy trên mọi nền tảng, kể cả Windows. Dù chọn cách nào, bạn cũng có thư mục gốc theo từng tài khoản, một địa chỉ `ftp://` có thể sao chép trong khi server đang chạy, và không phải thiết lập daemon thủ công. Tải bản build mới nhất từ [trang tải xuống](/vi/download) để có cả hai module.

![Tổng quan module FTP server của FlyEnv](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Hai bản triển khai, một bảng tài khoản

Cả hai module xuất hiện trong thanh bên của FlyEnv như các dịch vụ bạn có thể khởi động, dừng và ghim vào khay hệ thống — và giống các dịch vụ khác, chúng có thể tham gia một [nhóm khởi động](/vi/features/startup-groups) để FTP server cùng lên với phần còn lại của stack. Điểm khác biệt nằm ở chỗ binary server đến từ đâu và nó phủ những nền tảng nào.

- **Pure-FTPd (chỉ macOS và Linux):** một daemon `pure-ftpd` thật mà FlyEnv cài đặt, khởi chạy và theo dõi giúp bạn. Trang của nó có ba tab — Dịch vụ, Trình quản lý phiên bản và Tệp cấu hình. Phiên bản đến từ Homebrew và MacPorts, đồng thời các thư mục tùy chỉnh chứa bản build Pure-FTPd của riêng bạn cũng được hỗ trợ. Mỗi lúc chỉ một phiên bản chạy.
- **ftp-srv (mọi nền tảng):** phương án đa nền tảng, kể cả Windows. Server là thư viện npm `ftp-srv` đi kèm ứng dụng, chạy trên runtime [Node.js](/vi/features/nodejs) của chính FlyEnv bên trong FlyEnv, nên không có gì phải cài và không có Trình quản lý phiên bản — trang chỉ có một tab Dịch vụ.
- **Cùng một quy trình tài khoản:** bất kể dùng bản triển khai nào, tab Dịch vụ đều hiển thị cùng một bảng tên người dùng / mật khẩu / thư mục gốc, nên việc chuyển đổi giữa chúng không thay đổi cách bạn làm việc.

![Tab Dịch vụ Pure-FTPd với bảng tài khoản FTP](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Quản lý tài khoản

Mỗi tài khoản FTP là một dòng trong bảng tab Dịch vụ, với các hộp thoại Thêm và Chỉnh sửa để tạo và thay đổi thông tin đăng nhập.

- **Tên người dùng, mật khẩu và thư mục gốc:** mỗi tài khoản có thông tin đăng nhập và thư mục gốc riêng. Bảng hỗ trợ nhấp để sao chép các giá trị và có thể mở thư mục gốc trực tiếp trong trình quản lý tệp.
- **Người dùng ảo dưới Pure-FTPd:** các tài khoản là người dùng ảo Pure-FTPd được tạo qua `pure-pw useradd`, với uid và gid lấy từ thư mục bạn chọn làm thư mục gốc, và được lưu trong PureDB của server (`pureftpd.pdb`) — chúng không phải tài khoản hệ điều hành. FlyEnv cũng đồng bộ danh sách tài khoản vào `pureftpd.json` cho việc ghi sổ riêng của nó.
- **Tài khoản lưu dưới JSON với ftp-srv:** thông tin đăng nhập được lưu trong `ftp-srv.json` bên trong thư mục dữ liệu FlyEnv và được xác thực bởi bộ xử lý đăng nhập của server. Trên Windows, các mục cũ từ `pureftpd.json` được di chuyển tự động.
- **Địa chỉ có thể sao chép khi đang chạy:** phần đầu trang khi đang chạy hiển thị một liên kết `ftp://<ip>:<port>` để bạn sao chép, kèm một bộ chọn IP để chọn địa chỉ local nào sẽ đưa cho client.

![Thêm một tài khoản FTP với tên người dùng, mật khẩu và thư mục gốc](https://oss.macphpstudy.com/image/features/ftp-server-2.webp)

## Cấu hình

Pure-FTPd chạy từ một tệp `pure-ftpd.conf` mà FlyEnv sinh ra từ template của nó và khởi động daemon dựa trên tệp đó.

- **Trình chỉnh sửa cấu hình thô:** tab Tệp cấu hình mở `pure-ftpd.conf` trong một trình chỉnh sửa đầy đủ, với một bản sao `.default` được giữ cạnh làm tham chiếu. Module này không có biểu mẫu cài đặt trực quan.
- **Cổng lấy từ cấu hình:** cổng lắng nghe được phân tích từ directive `Bind …,port` và mặc định là cổng 21. Template cũng đặt sẵn một dải cổng passive 39000–40000.
- **ftp-srv không có tệp cài đặt server để chỉnh:** server đi kèm lắng nghe cố định cổng 21 với các cổng passive 49152–65535, và tự chọn địa chỉ PASV một cách linh hoạt — 127.0.0.1 cho client loopback, nếu không thì địa chỉ IP LAN chính. Tệp JSON duy nhất nó giữ là `ftp-srv.json`, kho tài khoản mà bảng tab Dịch vụ quản lý giúp bạn, chứ không phải một tệp cấu hình để bạn tự tay chỉnh.

![Chỉnh sửa pure-ftpd.conf trong tab Tệp cấu hình](https://oss.macphpstudy.com/image/features/ftp-server-3.webp)

<FeatureRelatedLinks locale="vi" slug="ftp-server" />

## Lưu ý tương thích

FlyEnv quản lý runtime FTP local, các tài khoản và tệp cấu hình của nó; những gì khả dụng phụ thuộc nền tảng của bạn. **Pure-FTPd bị giới hạn ở macOS và Linux**, và các phiên bản có thể cài phụ thuộc vào những gì Homebrew hay MacPorts phát hành. **ftp-srv chạy trên mọi nền tảng FlyEnv hỗ trợ**, điều này khiến nó trở thành lựa chọn duy nhất trên Windows — đổi lại là không có quản lý phiên bản và không có cấu hình server có thể chỉnh. Pure-FTPd khởi động với quyền nâng cao (`sudo`) và ghi đầu ra log vào syslog, nên FlyEnv không hiển thị trình xem log trong ứng dụng cho nó; ftp-srv cũng không cung cấp tệp log nào. Cả hai bản triển khai đều lắng nghe cổng 21 theo mặc định, nên mỗi lúc chỉ một trong hai có thể phục vụ cổng đó. Trỏ thư mục gốc của một tài khoản đến bất cứ đâu bạn thích — ví dụ đến một thư mục site bạn quản lý trong [Host](/vi/guide/host) như một phần của thiết lập [site local](/vi/features/local-sites-https).
