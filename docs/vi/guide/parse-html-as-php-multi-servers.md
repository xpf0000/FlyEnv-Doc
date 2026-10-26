---
title: 'Cho Nginx, Apache và Caddy phân tích HTML như PHP'
head:
  - - meta
    - name: description
      content: 'Tìm hiểu cách khiến Nginx, Apache và Caddy phân tích các tệp .html như PHP. Khắc phục các dự án cũ, đơn giản hóa việc chuyển đổi, và xử lý nội dung trộn lẫn mà không cần đổi tên tệp.'
---

# Phân tích HTML như PHP trong Nginx, Apache & Caddy: Hướng dẫn đầy đủ

Bạn có một site đầy các tệp .html đột nhiên cần xử lý PHP. Có thể đó là một site tĩnh cũ đang được bổ sung tính năng động. Có thể bạn đang chuyển đổi và không thể đổi tên hàng trăm tệp. Hoặc đơn giản bạn chỉ muốn những URL sạch không có đuôi .php.

Dù lý do là gì, việc buộc web server phân tích các tệp HTML qua PHP là một yêu cầu phổ biến. Hướng dẫn này bao gồm cấu hình cho Nginx, Apache, và Caddy—tất cả ngay trong giao diện đơn giản của FlyEnv.

## Vì sao phân tích HTML như PHP?

### Các kịch bản phổ biến

1. **Chuyển đổi site cũ**: Bổ sung PHP include vào các tệp HTML tĩnh
2. **Giữ SEO**: Giữ các URL .html hiện có trong khi bổ sung logic PHP
3. **Tái cấu trúc từ từ**: Đưa PHP vào mà không phải đổi tên tệp hàng loạt
4. **Tích hợp CMS**: Thêm header WordPress/Drupal vào các trang tĩnh

### Ví dụ tình huống sử dụng

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
    <?php include 'header.php'; ?>
</head>
<body>
    <h1><?php echo date('Y'); ?> Company Name</h1>
    <?php include 'navigation.php'; ?>
</body>
</html>
```

Tệp vẫn là .html, nhưng PHP xử lý các include và câu lệnh echo.

## Yêu cầu tiên quyết

Trước khi cấu hình web server:

1. **PHP-FPM đã được cấu hình** với giới hạn bảo mật mở rộng
2. **Web server đang chạy** (Nginx, Apache, hoặc Caddy)
3. **Site đã được tạo** trong FlyEnv trỏ tới dự án của bạn

## Cấu hình Nginx

### Bước 1: Chỉnh sửa cài đặt bảo mật PHP-FPM

Chỉnh sửa cấu hình pool PHP-FPM để cho phép xử lý tệp HTML:

```ini
; In php-fpm.conf [www] section
security.limit_extensions = .php .php3 .php4 .php5 .php7 .html .htm
```

Trong FlyEnv: Mở module PHP -> Version -> Configuration -> Edit php-fpm.conf

![Cấu hình PHP-FPM]
*(Ảnh chụp màn hình: trình chỉnh sửa cấu hình PHP-FPM trong FlyEnv)*

### Bước 2: Thêm khối location Nginx

Chỉnh sửa cấu hình vhost Nginx của site:

```nginx
location ~ [^/]\.html(/|$) {
    try_files $uri =404;
    fastcgi_pass unix:/tmp/phpwebstudy-php-cgi-83.sock;
    fastcgi_index index.php;
    include fastcgi.conf;
    include pathinfo.conf;
}
```

**Quan trọng**: Thay `phpwebstudy-php-cgi-83.sock` bằng tên socket phiên bản PHP thực tế của bạn.

Trong FlyEnv: Host -> Site -> Nginx Settings -> Edit VHost

![Cấu hình VHost Nginx]
*(Ảnh chụp màn hình: trình chỉnh sửa vhost Nginx với khối location)*

### Bước 3: Khởi động lại dịch vụ

1. Khởi động lại PHP-FPM trong FlyEnv
2. Reload cấu hình Nginx
3. Kiểm tra tệp HTML của bạn

## Cấu hình Apache

Apache xử lý việc này qua .htaccess hoặc cấu hình virtual host.

### Cách 1: Dùng .htaccess (Khuyến nghị)

Tạo hoặc chỉnh sửa `.htaccess` trong thư mục gốc site của bạn:

```apache
# Parse HTML files as PHP
AddType application/x-httpd-php .html .htm

# Alternative for PHP 7+
AddHandler application/x-httpd-php .html .htm
```

### Cách 2: Cấu hình Virtual Host

Chỉnh sửa tệp vhost Apache trong FlyEnv:

```apache
<VirtualHost *:80>
    DocumentRoot "/path/to/your/site"
    ServerName example.test
    
    <Directory "/path/to/your/site">
        AllowOverride All
        Require all granted
    </Directory>
    
    # Parse HTML as PHP
    AddType application/x-httpd-php .html .htm
</VirtualHost>
```

### Bước 3: Cấu hình mod_php hoặc PHP-FPM

**Với mod_php:**
Không cần cấu hình thêm.

**Với PHP-FPM qua mod_proxy_fcgi:**

```apache
# Add to vhost
<FilesMatch "\.(html|htm)$">
    SetHandler "proxy:unix:/tmp/phpwebstudy-php-cgi-83.sock|fcgi://localhost"
</FilesMatch>
```

## Cấu hình Caddy

CEL (Common Expression Language) của Caddy khiến việc này trở nên đơn giản.

### Bước 1: Chỉnh sửa Caddyfile

Trong FlyEnv: Host -> Site -> Caddy Settings -> Edit Caddyfile

```nginx
example.test {
    root * /path/to/your/site
    
    # PHP-FPM handler for PHP files
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    
    # Handle HTML files through PHP-FPM
    @htmlFiles {
        path *.html *.htm
    }
    
    route @htmlFiles {
        php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock
    }
    
    file_server
}
```

### Cách thay thế: Cấu hình đơn giản hơn

Với việc phân tích HTML-as-PHP cơ bản:

```nginx
example.test {
    root * /path/to/your/site
    
    # This handles both .php and .html
    php_fastcgi unix//tmp/phpwebstudy-php-cgi-83.sock {
        try_files {path} {path}/index.php index.php
    }
    
    file_server
}
```

Lưu ý: Bạn vẫn phải cập nhật giới hạn bảo mật PHP-FPM như đã trình bày trong phần Nginx.

## Khắc phục sự cố

### "File downloaded instead of executed"

**Nguyên nhân**: Giới hạn bảo mật PHP-FPM đang chặn các tệp .html

**Giải pháp**: Bảo đảm `security.limit_extensions` bao gồm `.html` trong php-fpm.conf

### "502 Bad Gateway" (Nginx)

**Nguyên nhân**: Đường dẫn socket PHP-FPM sai

**Giải pháp**: 
1. Kiểm tra tên socket thực tế trong `/tmp/`
2. Cập nhật fastcgi_pass với phiên bản đúng
3. Xác minh PHP-FPM đang chạy

### "Internal Server Error" (Apache)

**Nguyên nhân**: Handler chưa được cấu hình đúng

**Giải pháp**:
1. Xác minh module PHP đã được tải: `apachectl -M | grep php`
2. Kiểm tra log lỗi Apache
3. Bảo đảm AllowOverride được bật cho .htaccess

### "Trang trắng tinh"

**Nguyên nhân**: Lỗi PHP trong tệp HTML

**Giải pháp**:
1. Kiểm tra log lỗi PHP
2. Tạm thời bật display_errors
3. Thử trước với một câu lệnh `<?php echo "test"; ?>` đơn giản

### Lưu ý về hiệu năng

Phân tích HTML qua PHP tạo thêm chi phí:

| Cấu hình | Thời gian yêu cầu | Bộ nhớ |
|--------------|--------------|--------|
| HTML tĩnh | 1-5ms | Không |
| HTML qua PHP-FPM | 20-50ms | 10-30MB |

**Mẹo tối ưu:**
- Dùng bộ đệm opcode PHP (được bật mặc định trong FlyEnv)
- Cân nhắc chuyển hẳn sang đuôi .php về sau
- Dùng bộ đệm tệp tĩnh khi có thể

## Cảnh báo bảo mật

Phân tích HTML như PHP có thể tạo ra các rủi ro bảo mật:

1. **Tệp do người dùng tải lên**: Nếu người dùng có thể tải lên các tệp .html, họ có thể thực thi mã PHP
2. **Nội dung bên thứ ba**: HTML được include từ nguồn bên ngoài trở thành có thể thực thi

**Giảm thiểu:**
```nginx
# Deny PHP execution in upload directories
location /uploads/ {
    location ~ \.(html|htm|php)$ {
        deny all;
    }
}
```

## Câu hỏi thường gặp (FAQ)

**H: Việc này có ảnh hưởng tới hiệu năng không?**

Đ: Có, một chút. Các tệp HTML đi qua PHP-FPM thay vì được phục vụ trực tiếp. Hãy dùng bộ đệm opcode và coi đây là giải pháp tạm thời trong quá trình chuyển đổi.

**H: Tôi có thể phân tích các đuôi khác như PHP không?**

Đ: Có. Thêm bất kỳ đuôi nào vào giới hạn bảo mật PHP-FPM và cấu hình web server. Các lựa chọn phổ biến: `.phtml`, `.php5`.

**H: Việc này có làm hỏng các site HTML tĩnh không?**

Đ: Không. HTML tĩnh không có thẻ PHP vẫn hiển thị bình thường. Bộ xử lý PHP chỉ đơn giản đưa nội dung HTML đi qua mà không thay đổi.

**H: Làm thế nào để hoàn tác thay đổi này?**

Đ: Xóa cấu hình location/handler và khởi động lại web server. Các tệp sẽ lại được phục vụ như HTML tĩnh.

**H: Tôi có thể dùng cách này với WordPress không?**

Đ: Có, dù WordPress thường dùng các tệp .php. Cách này hữu ích hơn cho các site lai hoặc chuyển đổi từ dự án cũ.

**H: Cách này có hoạt động với mọi phiên bản PHP không?**

Đ: Có. Cấu hình giống hệt nhau từ PHP 5.6 đến 8.4+.

## Tóm tắt

| Server | Cấu hình chính |
|--------|------------------|
| **Nginx** | `location ~ [^/]\.html` với fastcgi_pass |
| **Apache** | `AddType application/x-httpd-php .html` |
| **Caddy** | route `php_fastcgi` cho *.html |

Tất cả các cách đều đòi hỏi cập nhật `security.limit_extensions` của PHP-FPM trước tiên.

Cần giúp đỡ với các cấu hình server khác? Hãy xem [Hướng dẫn thiết lập Reverse Proxy](/vi/guide/reverse-proxy-nestjs-multi-servers) hoặc [tài liệu Tên miền tùy chỉnh](/vi/guide/host).
