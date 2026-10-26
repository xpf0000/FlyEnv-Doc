---
title: 'Chạy các dự án PHP không cần Docker trong FlyEnv'
head:
  - - meta
    - name: description
      content: 'Triển khai WordPress, Laravel, Symfony, Workerman, Hyperf và hơn thế nữa mà không cần Docker. Dùng FlyEnv PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, SSL và cơ sở dữ liệu.'
---

# Triển khai dự án PHP không cần Docker trong FlyEnv: PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI và Workerman

Các dự án PHP không còn khuôn theo một mô hình triển khai local duy nhất. Một site WordPress cần một stack PHP-FPM ổn định, Laravel Octane cần một application server, Hyperf kỳ vọng Swoole, còn Workerman là một tiến trình PHP chạy dài, không nên bị nhét vào một cấu hình Apache giả lập. Docker có thể giải quyết việc này, nhưng nó thường kéo theo khởi động chậm, dùng nhiều RAM và một tầng mạng thứ hai.

FlyEnv mang đến cho bạn quy trình triển khai PHP native trên Windows, macOS và Linux: PHP CGI Service, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI, Composer, cơ sở dữ liệu, tên miền tùy chỉnh, SSL tự động, quy tắc reverse proxy, log và Cloudflare Tunnel — tất cả trong một ứng dụng desktop.

## Chọn đúng chế độ triển khai PHP của FlyEnv

Hãy dùng bảng này trước khi tạo dự án. Nó trả lời câu hỏi thực tế: "Tôi nên dùng runtime nào cho ứng dụng PHP này?"

| Loại dự án | Chế độ FlyEnv khuyến nghị | Phù hợp nhất | Vì sao hiệu quả |
| --- | --- | --- | --- |
| WordPress, ClassicPress, Contao | PHP-FPM + Host | Site CMS và nội dung | Mô hình request/response ổn định, tích hợp cơ sở dữ liệu, tên miền tùy chỉnh, HTTPS và định tuyến Nginx/Apache/Caddy quen thuộc |
| Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP, Slim | PHP-FPM + Host | Dự án MVC và API tiêu chuẩn | Định tuyến FastCGI gần production mà không cần Docker, với phiên bản PHP và kiểm soát extension theo từng dự án |
| PHP cũ hoặc script local đơn giản | PHP CGI Service | Kiểm thử tính tương thích | Hữu ích khi bạn cần một dịch vụ PHP dựa trên CGI nhẹ nhàng thay vì một application server đầy đủ |
| Ứng dụng PHP hiện đại dùng web serving nhúng | FrankenPHP | Laravel, Symfony, dịch vụ API | Chạy PHP qua runtime FrankenPHP và tích hợp với FlyEnv Host, auto SSL, log và reverse proxy |
| Laravel Octane, PHP worker PSR-7, API thông lượng cao | RoadRunner | Octane, PHP Worker, dự án có sẵn `.rr.yaml` | Chạy các PHP worker chạy dài, đồng bộ cổng và gắn với một runtime PHP do FlyEnv quản lý |
| Hyperf, EasySwoole, Swoole thuần, Laravel Octane trên Swoole | Swoole CLI | Dịch vụ PHP hướng sự kiện | Chạy các dự án Swoole CLI với các mẫu thiết lập sẵn, phát hiện cấu hình, biến môi trường, cổng và log |
| Workerman, GatewayWorker, dịch vụ PHP chạy dài tùy chỉnh | PHP Project Service | Ứng dụng WebSocket, TCP, queue và real-time | Chạy `php start.php start` hoặc một lệnh tùy chỉnh như một dịch vụ được quản lý, rồi mở ra qua Host reverse proxy |

## Thiết lập chung cho mọi dự án PHP

Trước khi chọn runtime, hãy chuẩn bị các phụ thuộc chung mà FlyEnv có thể quản lý giúp bạn.

1. Mở **PHP -> Version Manager** và cài các phiên bản PHP mà dự án của bạn cần.
2. Mở **PHP -> Composer** và cài Composer nếu dự án dùng các package.
3. Cài các PHP extension cần thiết từ **PHP -> Version Manager -> Extensions**.
4. Khởi động các module cơ sở dữ liệu hoặc cache cần dùng, chẳng hạn MySQL, MariaDB, PostgreSQL, Redis hoặc Memcached.
5. Thêm một tên miền local trong **Host**, ví dụ `myapp.test`, và bật SSL tự động nếu dự án cần HTTPS.
6. Dùng **Cloudflare Tunnel** khi bạn cần chia sẻ site local cho khách hàng, nhà cung cấp webhook hay thiết bị di động ngoài mạng LAN.

FlyEnv giữ các dịch vụ này ở dạng native. Bạn không cần một container Docker chỉ để thử một phiên bản PHP, đổi một cơ sở dữ liệu, mở một URL local hay xem log.

## Triển khai WordPress, ClassicPress và các dự án CMS

Các dự án CMS thường cần một web root, một cơ sở dữ liệu, một tên miền sạch và HTTPS. PHP-FPM + Host là cấu hình có thể dự đoán nhất.

### Bước 1: Tạo hoặc nhập dự án

FlyEnv có thể tạo các dự án PHP phổ biến qua Composer, bao gồm WordPress, ClassicPress, Contao, Laravel, Symfony, Yii2, ThinkPHP, CodeIgniter, CakePHP và Slim.

Với một dự án CMS có sẵn:

1. Đặt dự án vào workspace của bạn.
2. Chạy `composer install` nếu dự án có `composer.json`.
3. Nhập cơ sở dữ liệu qua client cơ sở dữ liệu ưa thích của bạn hoặc module cơ sở dữ liệu bạn dùng trong FlyEnv.

### Bước 2: Trỏ Host tới document root chính xác

Hãy dùng web root công khai, không phải lúc nào cũng là thư mục gốc của repository.

| Dự án | Document root điển hình |
| --- | --- |
| WordPress / ClassicPress | Thư mục gốc dự án |
| Contao | `public` |
| Laravel | `public` |
| Symfony | `public` |
| Yii2 basic | `web` |
| ThinkPHP | `public` |
| CodeIgniter 4 | `public` |
| CakePHP | `webroot` |
| Slim skeleton | `public` |

Trong FlyEnv:

1. Mở **Host**.
2. Thêm một site chẳng hạn `wordpress.test`.
3. Chọn document root của dự án.
4. Chọn phiên bản PHP.
5. Bật SSL khi site cần secure cookie, callback OAuth, payment webhook hay các browser API đòi hỏi HTTPS.
6. Lưu site và khởi động web server cùng PHP-FPM.

### Bước 3: Liên kết các module cơ sở dữ liệu và cache

Đa số dự án CMS dùng MySQL hoặc MariaDB.

```dotenv
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=wordpress_local
DB_USERNAME=root
DB_PASSWORD=your_password
```

Với các dự án nặng hơn, hãy khởi động Redis và cấu hình driver cache hoặc session cho dự án. Điều này giữ stack sát với production mà không cần chạy một cơ sở dữ liệu container hóa.

## Triển khai Laravel, Symfony và các framework MVC khác

Với các ứng dụng request/response thông thường, PHP-FPM vẫn là lựa chọn chất lượng cao và đơn giản nhất. Nó khởi động nhanh hơn Docker Desktop, dễ kiểm tra hơn một VM, và sát với các cấu hình Nginx/Caddy/Apache production phổ biến.

### Bước 1: Cài các phụ thuộc

```bash
composer install
```

Cho các tài nguyên frontend:

```bash
npm install
npm run dev
```

FlyEnv có thể quản lý Node.js và PHP song song, nên một dự án Laravel có thể dùng PHP 8.3 trong khi bước build dùng một phiên bản Node.js cụ thể.

### Bước 2: Cấu hình biến môi trường

Sao chép tệp môi trường mẫu và thiết lập các dịch vụ local:

```bash
cp .env.example .env
php artisan key:generate
```

Các giá trị local điển hình:

```dotenv
APP_URL=https://laravel.test
DB_HOST=127.0.0.1
DB_PORT=3306
REDIS_HOST=127.0.0.1
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

Dùng FlyEnv Mailpit để kiểm thử email local khi dự án gửi email đăng ký, đặt lại mật khẩu hay thông báo.

### Bước 3: Thêm site Host

1. Thêm `laravel.test`, `symfony.test` hoặc một tên miền `.test` khác.
2. Đặt document root vào thư mục public của framework.
3. Chọn phiên bản PHP và khởi động PHP-FPM.
4. Mở log từ FlyEnv nếu framework trả về lỗi 500.

Xem quy trình riêng cho Laravel chi tiết tại [Chạy Laravel trên FlyEnv](/vi/guide/run-laravel-use-flyenv).

## Dùng PHP CGI Service cho các quy trình tương thích

PHP CGI Service hữu ích khi bạn cần một dịch vụ PHP local nhẹ nhàng cho các dự án cũ, các stack hướng Windows, hoặc kiểm thử tính tương thích.

Dùng nó khi:

1. Dự án là một ứng dụng PHP đơn giản với định tuyến hạn chế.
2. Bạn cần kiểm thử hành vi CGI thay vì một worker chạy dài.
3. Bạn muốn một dịch vụ tối giản trước khi chuyển dự án sang PHP-FPM.

Với đa số dự án MVC và CMS mới, hãy chọn PHP-FPM trước. Dùng PHP CGI Service khi dự án hay quy trình của hệ điều hành thực sự hưởng lợi từ tính tương thích CGI.

## Triển khai với FrankenPHP mà không cần cấu hình Caddy thủ công

FrankenPHP là một application server PHP hiện đại. Đây là lựa chọn mạnh khi bạn muốn quy trình app-server native không cần Docker và không phải tự tay nối PHP-FPM với một web server riêng.

### Các dự án phù hợp nhất với FrankenPHP

| Dự án | Mức phù hợp |
| --- | --- |
| Laravel | Tốt cho web serving PHP hiện đại và phát triển API |
| Symfony | Tốt cho các ứng dụng hưởng lợi từ PHP server dựa trên Caddy |
| Slim và API tùy chỉnh | Tốt cho các dịch vụ HTTP nhẹ nhàng |
| Site PHP thông thường | Tốt khi ứng dụng hoạt động với runtime PHP đi kèm của FrankenPHP |

### Quy trình FlyEnv

1. Cài FrankenPHP từ module FlyEnv của nó.
2. Thêm hoặc chỉnh sửa dự án trong **Host**.
3. Xác nhận FlyEnv đã sinh cấu hình vhost FrankenPHP.
4. Bật SSL nếu site cần HTTPS.
5. Khởi động FrankenPHP và mở tên miền local.

Lưu ý quan trọng: FrankenPHP dùng runtime PHP đi kèm của riêng nó. Nếu dự án đòi hỏi một binary PHP cụ thể do FlyEnv quản lý, PHP-FPM hoặc RoadRunner có thể phù hợp hơn.

## Triển khai Laravel Octane và PHP worker với RoadRunner

RoadRunner được thiết kế cho các PHP worker chạy dài và các ứng dụng HTTP thông lượng cao. Trong FlyEnv, module RoadRunner hỗ trợ cấu hình có sẵn, dự án PHP Worker, Laravel Octane, chế độ fileserver và lệnh tùy chỉnh.

### Laravel Octane với RoadRunner

Dùng cách này khi bạn muốn hiệu năng Octane mà không cần Docker:

```bash
composer require laravel/octane spiral/roadrunner-cli spiral/roadrunner-http
php artisan octane:install --server=roadrunner
```

Trong FlyEnv:

1. Mở module **RoadRunner**.
2. Thêm một dự án và chọn **Laravel Octane**.
3. Chọn runtime PHP của FlyEnv.
4. Đặt cổng dự án, ví dụ `3000`.
5. Khởi động dịch vụ dự án.
6. Tùy chọn thêm một Host reverse proxy từ `https://octane.test` tới `http://127.0.0.1:3000`.

### PHP Worker hoặc cấu hình RoadRunner có sẵn

Với một dự án worker, FlyEnv có thể sinh cấu hình kiểu `.rr.yaml` và giữ cổng được đồng bộ.

```yaml
version: "3"

server:
  command: 'php -d display_startup_errors=0 -d display_errors=stderr worker.php'
  relay: pipes

http:
  address: 127.0.0.1:3000
```

Chọn **Existing Config** khi dự án của bạn đã có `.rr.yaml`, `.rr.yml`, `rr.yaml`, `rr.yml` hoặc `rr.json`.

## Triển khai Hyperf, EasySwoole và Swoole thuần với Swoole CLI

Swoole CLI là chế độ FlyEnv phù hợp nhất cho các dịch vụ PHP hướng sự kiện. Nó tránh được vấn đề thường gặp khi trộn các PHP extension của hệ thống, các bản build Homebrew và các yêu cầu Swoole riêng của framework.

### Các mẫu Swoole CLI được hỗ trợ

| Mẫu | Dạng lệnh |
| --- | --- |
| Swoole thuần | `swoole-cli server.php 3000` |
| Hyperf | `swoole-cli bin/hyperf.php start` |
| EasySwoole | `swoole-cli easyswoole server start` |
| Laravel Octane | `swoole-cli artisan octane:start --server=swoole --host=127.0.0.1 --port=3000` |
| PHP Script | `swoole-cli server.php` |
| Tùy chỉnh | Lệnh của riêng bạn |

### Quy trình FlyEnv

1. Cài Swoole CLI trong FlyEnv.
2. Thêm dự án vào module **Swoole CLI**.
3. Chọn mẫu khớp với framework của bạn.
4. Xác nhận cổng và lệnh của dự án.
5. Thêm biến môi trường hoặc tệp env nếu dịch vụ cần.
6. Khởi động dịch vụ và xem log từ FlyEnv.
7. Dùng Host reverse proxy nếu bạn muốn một tên miền sạch thay vì `http://127.0.0.1:3000`.

FlyEnv có thể phát hiện các đường dẫn cấu hình hữu ích như cấu hình server/routes của Hyperf, các tệp cấu hình EasySwoole, cấu hình Laravel Octane và `server.php`.

## Triển khai Workerman và GatewayWorker trong FlyEnv

Workerman là lựa chọn phổ biến cho các dịch vụ PHP WebSocket, TCP, queue, gateway và real-time. Nó nên chạy như một tiến trình chạy dài được quản lý, không phải như một request PHP-FPM thông thường.

### Chế độ khuyến nghị

Dùng **PHP -> Project Service** với một lệnh tùy chỉnh.

Lệnh Workerman điển hình:

```bash
php start.php start
```

Đừng dùng chế độ daemon cho việc quản lý dịch vụ local của FlyEnv trừ khi bạn có lý do cụ thể. Một tiến trình foreground giúp FlyEnv dễ dừng, khởi động lại và ghi log hơn.

### Quy trình FlyEnv

1. Cài phiên bản PHP mà dự án Workerman yêu cầu.
2. Cài các phụ thuộc:

```bash
composer install
```

3. Mở **PHP -> Project Service**.
4. Thêm đường dẫn dự án.
5. Đặt lệnh thành `php start.php start` hoặc lệnh khởi động được ghi trong tài liệu dự án.
6. Đặt cổng dịch vụ thành cổng mà ứng dụng Workerman của bạn lắng nghe, ví dụ `8787`.
7. Thêm các biến môi trường cần thiết.
8. Khởi động dịch vụ dự án.

Với một ứng dụng Workerman HTTP hoặc WebSocket hướng trình duyệt, hãy tạo một Host reverse proxy:

| Tên miền Host | Đích reverse proxy |
| --- | --- |
| `https://socket.test` | `http://127.0.0.1:8787` |

Cách này giúp ứng dụng có một URL HTTPS sạch trong khi Workerman vẫn chạy như một tiến trình PHP native.

## Kết nối các dự án PHP với các module FlyEnv khác

Chế độ triển khai chỉ là một phần của môi trường local. Đa số dự án PHP còn cần các dịch vụ bao quanh nó.

| Nhu cầu | Module FlyEnv | Ví dụ |
| --- | --- | --- |
| Cài phụ thuộc | Composer | `composer install`, `composer create-project` |
| Cách ly phiên bản PHP | PHP Version Manager | Chạy Laravel trên PHP 8.3 và WordPress trên PHP 8.2 |
| Extension | PHP Extensions | Cài hoặc bật Redis, OpenSSL, Intl, GD, Imagick, driver PDO |
| Cơ sở dữ liệu | MySQL, MariaDB, PostgreSQL | Cơ sở dữ liệu local cho CMS và framework |
| Cache và queue | Redis, Memcached | Laravel cache/session/queue, Symfony cache |
| Build frontend | Node.js | Vite, Webpack, Tailwind, Symfony Encore |
| Tên miền tùy chỉnh | Host | `https://api.test`, `https://wordpress.test` |
| HTTPS tự động | Host SSL | Callback OAuth, secure cookie, kiểm thử webhook |
| Reverse proxy | Host | Map `https://octane.test` tới `127.0.0.1:3000` |
| Chia sẻ công khai | Cloudflare Tunnel | Chia sẻ các dịch vụ WordPress, Laravel, Workerman hoặc Swoole local |
| Debug | Trình xem log và cấu hình | Kiểm tra log của PHP, PHP-FPM, FrankenPHP, RoadRunner, Swoole CLI và dự án |
| Trợ giúp AI local | Offline AI Agent | Xem lại cấu hình, giải thích lỗi hay sinh ghi chú migration mà không phải gửi code cho một model đám mây |

## Khuyến nghị thực tế

1. Dùng **PHP-FPM + Host** cho đa số dự án WordPress, CMS và framework MVC.
2. Dùng **FrankenPHP** khi bạn muốn một app server PHP native hiện đại và runtime PHP đi kèm đáp ứng được ứng dụng.
3. Dùng **RoadRunner** cho Laravel Octane, PHP worker PSR-7 và các API thông lượng cao.
4. Dùng **Swoole CLI** cho Hyperf, EasySwoole, Octane trên Swoole và các ứng dụng Swoole thuần.
5. Dùng **PHP Project Service** cho Workerman, GatewayWorker, queue worker và các lệnh PHP chạy dài tùy chỉnh.
6. Dùng **Cloudflare Tunnel** khi một webhook bên thứ ba hay khách hàng cần truy cập dịch vụ local của bạn.

## Hướng dẫn bằng video

Bạn thích xem? Xem Deploy PHP Apps Without Docker in FlyEnv: Laravel Octane, RoadRunner, Swoole & Workerman trong thực tế:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/5NqSag8c4YY?si=fBlpEHxBKjKR7nX1" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Câu hỏi thường gặp (FAQ)

### FlyEnv có phải là giải pháp thay thế Docker cho phát triển PHP không?

Có. FlyEnv chạy PHP native, web server, cơ sở dữ liệu, cache và dịch vụ tunnel trên Windows, macOS và Linux. Nó tránh được chi phí của Docker Desktop trong khi vẫn cung cấp runtime cách ly, tên miền local, SSL, log và quản lý dịch vụ.

### Tôi nên dùng chế độ FlyEnv nào cho Laravel?

Dùng PHP-FPM + Host cho phát triển Laravel thông thường. Dùng RoadRunner hoặc Swoole CLI khi chạy Laravel Octane. Dùng FrankenPHP nếu dự án Laravel của bạn phù hợp với mô hình runtime của FrankenPHP.

### FlyEnv có chạy được Workerman không?

Có. Thêm Workerman như một PHP Project Service và dùng một lệnh chẳng hạn `php start.php start`. Nếu ứng dụng phục vụ lưu lượng HTTP hoặc WebSocket, hãy mở nó ra qua một Host reverse proxy với SSL tự động.

### Cách này có hoạt động trên Windows, macOS và Linux không?

Có. FlyEnv được xây dựng để quản lý môi trường full-stack native trên Windows, macOS và Linux. Một số đường dẫn cấp thấp và nguồn package khác nhau theo hệ điều hành, nhưng quy trình dự án vẫn nhất quán.

## Bước tiếp theo

Cài FlyEnv từ [trang tải xuống](/vi/download), rồi tạo site PHP đầu tiên của bạn với [Tên miền tùy chỉnh & Auto SSL](/vi/guide/host). Để kiểm thử webhook công khai hoặc bản xem trước cho khách hàng, hãy tiếp tục với [Mở Localhost ra internet với Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development).
