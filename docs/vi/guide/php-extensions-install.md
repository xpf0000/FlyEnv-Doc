---
description: 'Cài đặt và bật các PHP extension trong FlyEnv trên macOS, Linux, và Windows bằng PECL, các nguồn gói, hoặc thư viện extension.'
---

# Cài đặt PHP Extensions

## macOS & Linux

FlyEnv cung cấp cài đặt nhanh các php extension

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="">

Bạn cũng có thể dùng lệnh pecl để cài các php extension

Nhấp hoặc sao chép đường dẫn. cd tới đường dẫn đó trong terminal

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="">

Cài php extension xdebug

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="">

## Windows

Hiện tại chưa có cài đặt nhanh. Nhưng FlyEnv cung cấp khả năng mở trang pecl và thư mục php extension

Lưu ý. Thư mục extension chứa sẵn hầu hết các extension phổ biến. PHP không bật các extension này theo mặc định. Vui lòng bật chúng trong php.ini.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

Tải xuống tệp .dll tại [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) và đặt nó vào thư mục php extension

Cài đặt nhanh PHP extension cho bản Windows thực ra rất đơn giản để hiện thực hóa. Nhưng mối quan hệ tương ứng giữa phiên bản php và phiên bản php extension lại quá rối rắm. Tôi không có nhiều thời gian để xử lý việc này.

Nếu ai đó muốn đóng góp. Bạn có thể fork code và gửi PR. Hoặc cung cấp mối tương ứng giữa phiên bản php và phiên bản php extension
