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

- **Danh mục trực tuyến.** Mở **Extensions** từ phiên bản PHP bạn định dùng. FlyEnv hiển thị các bản phát hành khả dụng và dùng DLL PECL tương thích với Windows hoặc [PIE](https://github.com/php/pie), tùy gói. Bộ cài PIE mà FlyEnv tải xuống dành cho Windows x64.
- **Extension có sẵn:** thư mục extension chứa sẵn hầu hết các extension phổ biến. PHP không tự bật chúng — hãy bật hoặc tắt trực tiếp trong bảng extension và FlyEnv sẽ cập nhật `php.ini` cho bạn.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

Khi cài thủ công, tải DLL từ [PECL](https://pecl.php.net/packages.php) phù hợp với phiên bản PHP, kiến trúc và chế độ thread safety (TS/NTS). Chép DLL vào `extension_dir` của phiên bản đó và bật trong cấu hình tương ứng. Xem [tài liệu PHP](https://www.php.net/manual/en/install.pecl.windows.php) về khả năng tương thích DLL trên Windows.

## Kiểm tra extension trong phiên bản PHP đã chọn

Chạy các lệnh sau với tệp thực thi của phiên bản PHP vừa thay đổi. Nếu cài nhiều phiên bản, thay `php` bằng đường dẫn đầy đủ đến `php` hoặc `php.exe` của phiên bản đó.

```text
php --ini
php -m
```

Kiểm tra đường dẫn INI đã nạp và tìm module trong danh sách. Nếu PHP báo lỗi khi khởi động, kiểm tra tệp extension, phần phụ thuộc và chỉ thị INI. Với website, khởi động lại web worker đã chọn trong [module PHP-FPM](/vi/features/php) rồi kiểm tra extension trong site. Kết quả CLI chỉ mô tả tiến trình CLI.
