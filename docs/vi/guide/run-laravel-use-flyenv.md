---
title: 'Cách chạy Laravel tại local: Hướng dẫn thiết lập đầy đủ với FlyEnv'
head:
  - - meta
    - name: description
      content: 'Thiết lập Laravel tại local với FlyEnv dùng PHP, cơ sở dữ liệu, quy tắc viết lại URL, và HTTPS trên macOS, Windows, hoặc Linux.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Cách chạy Laravel tại local: Hướng dẫn thiết lập đầy đủ với FlyEnv

Việc thiết lập môi trường phát triển Laravel trước đây đồng nghĩa với vật lộn với các phiên bản PHP, cấu hình quy tắc viết lại Nginx, và đấu tranh với các vấn đề quyền truy cập. Với FlyEnv, bạn có thể đi từ con số không tới một ứng dụng Laravel đang chạy trong dưới 5 phút—không cần phép thuật terminal.

Hướng dẫn này bao gồm cả việc tạo dự án nhanh và thiết lập thủ công cho các dự án có sẵn.

## Bắt đầu nhanh: Tạo dự án Laravel trong FlyEnv

### Cách 1: Cài đặt Laravel một chạm (Khuyến nghị)

FlyEnv có thể tạo một dự án Laravel mới với toàn bộ các phụ thuộc được cài tự động.

#### Bước 1: Tạo dự án mới

1. Mở FlyEnv → module **Host**
2. Nhấp nút **"New Project"**

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

#### Bước 2: Cấu hình dự án

Chọn các thiết lập của bạn:
- **Project Path**: Nơi lưu dự án
- **PHP Version**: Chọn 8.1, 8.2, hoặc 8.3 (Laravel 10+ đòi hỏi PHP 8.1+)
- **Laravel Version**: Mới nhất (11.x) hoặc LTS (10.x)

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

Nhấp **OK** và FlyEnv sẽ:
- Cài Laravel qua Composer
- Cấu hình cấu trúc dự án
- Thiết lập kết nối cơ sở dữ liệu
- Chuẩn bị cấu hình site

#### Bước 3: Dự án đã được tạo

Khi hoàn tất, bạn sẽ thấy dự án trong thư mục đã chọn.

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

Nhấp **"Create Host"** để tự động cấu hình site, hoặc tiếp tục với thiết lập site thủ công bên dưới.

### Cách 2: Dự án Laravel có sẵn

Đã có sẵn một dự án Laravel? Bỏ qua tới phần [Tạo site](#tao-site).

## Tạo site

Dù bạn đã tạo dự án qua FlyEnv hay clone từ Git, bạn cần cấu hình một site để phục vụ nó.

### Bước 1: Thêm site trong FlyEnv

1. Mở module **Host**
2. Nhấp nút **"Add"** (hoặc "Create Host" từ bước tạo dự án)

### Bước 2: Cấu hình cài đặt site

**Quan trọng với Laravel**: Đặt thư mục gốc là thư mục `public`, không phải thư mục gốc dự án.

| Trường | Giá trị | Ví dụ |
|-------|-------|---------|
| **Host Name** | Tên miền local của bạn | `laravel.test` |
| **Root Path** | Đường dẫn tới thư mục `public` | `/Users/you/projects/example-app/public` |
| **PHP Version** | Khớp yêu cầu của dự án | 8.2, 8.3 |
| **Port** | Cổng HTTP | 80 |

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

**Vì sao là thư mục `public`?** Front controller của Laravel (`index.php`) nằm trong `public/`. Trỏ vào thư mục gốc dự án sẽ làm lộ các tệp nhạy cảm như `.env`.

### Bước 3: Cấu hình viết lại URL

Laravel đòi hỏi viết lại URL để định tuyến mọi yêu cầu qua `index.php`.

#### Nginx

Chọn **"Laravel"** từ dropdown **Nginx URL Rewrite**:

<img src="https://oss.macphpstudy.com/image/AF72C71F6596.png" data-x-image-preview="">

Thao tác này tự động thêm cấu hình đúng:

```nginx
location / {
    try_files $uri $uri/ /index.php$is_args$query_string;
}
```

**Đoạn cấu hình này làm gì:**
- Thử phục vụ tệp/thư mục nếu chúng tồn tại
- Nếu không, định tuyến tới `index.php` với các tham số truy vấn được giữ nguyên
- Thiết yếu để routing của Laravel hoạt động

#### Apache

Apache dùng các tệp `.htaccess`. Khi tạo dự án qua FlyEnv, tệp này được sinh tự động. Với thiết lập thủ công, tạo `public/.htaccess`:

```apache
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

#### Caddy

Caddy không đòi hỏi cấu hình bổ sung—Laravel chạy ngay lập tức với các thiết lập mặc định của Caddy.

### Bước 4: Cấu hình cơ sở dữ liệu (Tùy chọn)

Nếu ứng dụng Laravel của bạn dùng cơ sở dữ liệu:

1. Khởi động **MySQL** hoặc **PostgreSQL** trong FlyEnv
2. Tạo một cơ sở dữ liệu qua giao diện quản lý cơ sở dữ liệu
3. Cập nhật tệp `.env`:

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=root
DB_PASSWORD=root
```

4. Chạy migration:
```bash
php artisan migrate
```

## Khởi chạy ứng dụng Laravel của bạn

### Khởi động các dịch vụ cần thiết

Khởi động các module này trong FlyEnv:
- ✅ PHP (khớp phiên bản của dự án)
- ✅ Nginx hoặc Apache hoặc Caddy
- ✅ MySQL/PostgreSQL (nếu dùng cơ sở dữ liệu)

### Truy cập site của bạn

Nhấp vào liên kết site trong bảng Host:

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">

Bạn sẽ thấy trang chào mừng của Laravel:

<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

**Laravel đang chạy!** 🎉

## Debug và log

### Xem log ứng dụng

Log của Laravel nằm trong `storage/logs/laravel.log`:

```bash
tail -f storage/logs/laravel.log
```

### Xem log web server

FlyEnv cung cấp truy cập dễ dàng tới log server:

1. Chọn site của bạn trong module Host
2. Nhấp tab **Logs**

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">

Xem log truy cập và log lỗi theo thời gian thực:

<img src="https://oss.macphpstudy.com/image/D999E4BFEF0B.png" data-x-image-preview="">

**Các vấn đề phổ biến cần kiểm tra:**
- Lỗi 500 → Kiểm tra log Laravel
- Lỗi 404 → Xác minh viết lại URL đã được cấu hình
- Permission denied → Kiểm tra quyền của `storage/` và `bootstrap/cache/`

## Các vấn đề Laravel phổ biến và cách sửa

### Lỗi "The stream or file could not be opened"

**Nguyên nhân**: Vấn đề quyền với thư mục `storage/`

**Cách sửa**:
```bash
chmod -R 775 storage
chmod -R 775 bootstrap/cache
```

Trên Windows, bảo đảm người dùng của bạn có quyền ghi vào các thư mục này.

### "No application encryption key has been specified"

**Cách sửa**:
```bash
php artisan key:generate
```

### Kết nối cơ sở dữ liệu bị từ chối

**Danh sách kiểm tra**:
- [ ] Dịch vụ MySQL/PostgreSQL đang chạy trong FlyEnv
- [ ] Cơ sở dữ liệu đã tồn tại
- [ ] Thông tin đăng nhập khớp với tệp `.env`
- [ ] Dùng `127.0.0.1` thay vì `localhost` (tránh các vấn đề socket)

### CSS/JS không tải được (404 trên assets)

**Nguyên nhân**: Chưa chạy `npm run dev` hay `npm run build`

**Cách sửa**:
```bash
npm install
npm run dev
```

Hoặc cho bản build production:
```bash
npm run build
```

### "Vite manifest not found"

**Cách sửa**: Chạy `npm run build` để sinh tệp manifest.

## Cấu hình nâng cao

### Nhiều phiên bản PHP

Đang kiểm thử việc nâng cấp Laravel? FlyEnv cho bạn chuyển phiên bản PHP tức thì:

1. Cài nhiều phiên bản PHP (8.1, 8.2, 8.3)
2. Chỉnh sửa cài đặt site
3. Đổi dropdown phiên bản PHP
4. Khởi động lại các dịch vụ

### SSL/HTTPS cho phát triển local

Bật SSL trong cài đặt site:
1. Chỉnh sửa site → Bật **"Use SSL"**
2. Chọn **"Auto SSL"**
3. Truy cập qua `https://laravel.test`

Thiết yếu để kiểm thử:
- Service Workers
- Secure cookie
- Tích hợp thanh toán
- Tính năng PWA

### Queue Workers

Cho tính năng Laravel Queue:

```bash
php artisan queue:work
```

Hoặc dùng Supervisor để giữ các worker luôn chạy.

### Scheduler (Cron)

Thêm vào cron của hệ thống (mỗi phút một lần):

```bash
* * * * * cd /path/to/project && php artisan schedule:run >> /dev/null 2>&1
```

Hoặc dùng tính năng scheduler tích hợp sẵn của FlyEnv.

## Danh sách kiểm tra triển khai production

Khi chuyển từ FlyEnv local sang production:

- [ ] Cập nhật `.env`: `APP_ENV=production`, `APP_DEBUG=false`
- [ ] Đặt `APP_KEY` mạnh (đã được đặt nếu bạn đã chạy `key:generate`)
- [ ] Cấu hình thông tin đăng nhập cơ sở dữ liệu production
- [ ] Thiết lập queue workers (Supervisor)
- [ ] Cấu hình scheduler (cron)
- [ ] Chạy `composer install --optimize-autoloader --no-dev`
- [ ] Chạy `php artisan config:cache`
- [ ] Chạy `php artisan route:cache`
- [ ] Chạy `php artisan view:cache`
- [ ] Đặt quyền tệp đúng cách
- [ ] Cấu hình chứng chỉ SSL

## Câu hỏi thường gặp (FAQ)

**H: Tôi nên dùng phiên bản PHP nào cho Laravel?**

Đ: Laravel 11.x đòi hỏi PHP 8.2+. Laravel 10.x hoạt động với PHP 8.1+. Hãy dùng phiên bản PHP stable mới nhất mà phiên bản Laravel của bạn hỗ trợ.

**H: Tôi có thể dùng Laravel Sail với FlyEnv không?**

Đ: Có, nhưng sẽ dư thừa. FlyEnv cung cấp mọi thứ Sail có (PHP, MySQL, Redis) mà không có chi phí Docker. Bạn vẫn có thể chạy các lệnh `vendor/bin/sail` nếu cần, nhưng thiết lập FlyEnv native được khuyến nghị hơn.

**H: Làm thế nào để chuyển từ XAMPP/Laragon sang FlyEnv?**

Đ: 
1. Xuất cơ sở dữ liệu XAMPP của bạn
2. Dừng các dịch vụ XAMPP
3. Cài dự án trong FlyEnv theo hướng dẫn này
4. Nhập cơ sở dữ liệu qua tính năng quản lý cơ sở dữ liệu của FlyEnv
5. Cập nhật `.env` với thông tin đăng nhập cơ sở dữ liệu mới

**H: Vì sao chọn `public` làm thư mục gốc?**

Đ: Vì bảo mật. Chỉ các tệp trong `public/` mới nên được truy cập qua web. Thư mục gốc dự án chứa các tệp nhạy cảm như `.env` với mật khẩu cơ sở dữ liệu.

**H: Tôi có thể chạy nhiều dự án Laravel đồng thời không?**

Đ: Có. Tạo các site riêng với các tên miền khác nhau (ví dụ: `project1.test`, `project2.test`) và các cổng khác nhau nếu cần.

**H: FlyEnv có hỗ trợ Laravel Horizon không?**

Đ: Có. Horizon đòi hỏi Redis—khởi động module Redis trong FlyEnv, rồi chạy `php artisan horizon`.

**H: Làm thế nào để debug các truy vấn chậm?**

Đ: Bật query logging trong Laravel hoặc dùng debug bar. Log truy vấn chậm MySQL của FlyEnv cũng có sẵn trong module cơ sở dữ liệu.

**H: Tôi có thể dùng PostgreSQL thay cho MySQL không?**

Đ: Hoàn toàn được. FlyEnv hỗ trợ cả hai. Chỉ cần đổi `DB_CONNECTION=pgsql` trong `.env` và cấu hình các thiết lập PostgreSQL.

**H: `php artisan serve` khác FlyEnv thế nào?**

Đ: `php artisan serve` dùng web server tích hợp sẵn của PHP—chậm, đơn luồng, và không phù hợp cho phát triển với queue hay các tính năng real-time. FlyEnv cung cấp một thiết lập Nginx/Apache giống production.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.vi" locale="vi" post-id="why-i-finally-switched-from-laragon-to-flyenv" guide-path="/vi/guide/run-laravel-use-flyenv" />

## Bước tiếp theo

Giờ thì Laravel đã chạy:

- [Cô lập phiên bản theo dự án](/vi/guide/project-level-runtime-environment) — Quản lý nhiều phiên bản Laravel
- [Debug PHP với Xdebug](/vi/guide/php-debug-with-xdebug) — Debug từng bước
- [Kiểm thử email local](/vi/guide/local-email-testing-mailpit) — Kiểm thử email mà không phải gửi thật
- [Triển khai với Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development) — Chia sẻ tiến độ với khách hàng

Chúc bạn viết code vui vẻ cùng Laravel và FlyEnv!
