---
description: 'Chẩn đoán và sửa các lỗi khởi động PHP của Homebrew do thiếu hoặc lệch phiên bản thư viện ICU trên macOS.'
---

# Sự cố icu4c của PHP

Với PHP được cài bằng Homebrew. Đôi khi bạn có thể gặp tình huống nó hiển thị được trong bảng Dịch vụ nhưng màu lại đỏ và không thể khởi động. Hiện ra một thông báo lỗi kiểu như thế này:

```sh
/opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
Error: Command failed: /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
dyld[1578]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib
Referenced from: <8225FD7D-2159-3B46-AB67-18AFF8F24255> /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm
Reason: tried: '/opt/homebrew/Cellar/php/8.2.10/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)
```

Đừng lo, đây là một sự cố phổ biến khi dùng homebrew

Bản chất là do phần mềm được cài bằng Homebrew. Có nhiều phần mềm phụ thuộc vào các phiên bản khác nhau của cùng một phần mềm. Phần mềm phụ thuộc đã được nâng cấp, trong khi chính phần mềm đó thì chưa được nâng cấp

Bạn cần chạy lệnh này để cập nhật Homebrew và các phần mềm đã lỗi thời

```sh
brew update && brew upgrade
```

Sau khi cập nhật, nếu vấn đề vẫn tồn tại, hãy cài lại phần mềm gặp sự cố
