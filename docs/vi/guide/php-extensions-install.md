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

Bảng extension trên Windows đã hỗ trợ cài đặt nhanh:

- **Thư viện trực tuyến:** tìm trong danh mục extension (dữ liệu từ Packagist) và cài đặt bằng một cú nhấp. FlyEnv tải [PIE](https://github.com/php/pie) — trình cài extension chính thức của PHP — và dùng nó để cài extension đúng với phiên bản PHP của bạn, nên việc khớp phiên bản được xử lý tự động. Việc tải PIE yêu cầu Windows x64.
- **Extension có sẵn:** thư mục extension chứa sẵn hầu hết các extension phổ biến. PHP không tự bật chúng — hãy bật hoặc tắt trực tiếp trong bảng extension và FlyEnv sẽ cập nhật `php.ini` cho bạn.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

Bạn cũng có thể cài thủ công: tải tệp `.dll` tại [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) và đặt nó vào thư mục php extension.
