---
layout: doc
titleTemplate: false
title: 'PHP Version Manager, PHP-FPM và công cụ Composer | FlyEnv'
description: 'Cài đặt và chuyển phiên bản PHP, quản lý PHP-FPM, php.ini và extension, cô lập runtime dự án, quản lý Composer và tạo dự án WordPress hay Laravel trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển phiên bản PHP, quản lý PHP-FPM, php.ini và extension, cô lập runtime dự án, quản lý Composer và tạo dự án WordPress hay Laravel trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'PHP Version Manager, PHP-FPM và công cụ Composer | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển phiên bản PHP, quản lý PHP-FPM, php.ini và extension, cô lập runtime dự án, quản lý Composer và tạo dự án WordPress hay Laravel trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/php
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/php
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển PHP local với FlyEnv

PHP là một ngôn ngữ kịch bản phía server dùng để xây dựng website động và ứng dụng web, từ các site WordPress đến các ứng dụng trên framework như Laravel và Symfony. FlyEnv quản lý toàn bộ phía PHP của stack local của bạn trong một ứng dụng duy nhất: nhiều phiên bản PHP, PHP-FPM theo từng phiên bản, quản lý `php.ini` và extension trực quan, runtime cấp dự án, Composer, và scaffolding một cú nhấp cho các ứng dụng PHP thông dụng.

![Tổng quan module PHP của FlyEnv](https://oss.macphpstudy.com/image/features/php-1.webp)

## Quản lý phiên bản PHP

Cài nhiều phiên bản PHP song song từ **PHP → Version Manager** và chuyển qua lại giữa chúng bất cứ lúc nào.

- **Nhiều nguồn cài đặt:** bản build tĩnh trên mọi nền tảng, cộng thêm Homebrew (macOS và Linux) và MacPorts (macOS) cho các bản cài PHP được quản lý bởi những trình quản lý gói đó.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa bản build PHP của riêng bạn; nó quét tìm các binary `php` và `php-fpm` và liệt kê chúng cạnh các phiên bản được quản lý.
- **Chuyển phiên bản CLI:** đặt phiên bản PHP nào mà lệnh `php` trong terminal của bạn phân giải tới. FlyEnv thêm hay xóa thư mục bin của phiên bản khỏi `PATH` và đánh dấu mục hiện tại do FlyEnv hay một công cụ khác đặt.
- **Alias và ghi chú theo từng phiên bản:** đặt cho mỗi bản cài một alias ngắn cùng ghi chú để các bản build giống nhau vẫn phân biệt được trong danh sách.

![PHP Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/php-2.webp)

![Bảng dịch vụ PHP với các cột phiên bản, đường dẫn, env và alias](https://oss.macphpstudy.com/image/features/php-3.webp)

## Quản lý dịch vụ PHP-FPM

PHP-FPM là một module chuyên dụng trong FlyEnv, được xây dựng để phục vụ site qua Nginx, Apache hay Caddy.

- **Vòng đời theo từng phiên bản:** khởi động, dừng hay khởi động lại từng phiên bản PHP-FPM riêng lẻ, hay dùng công tắc thanh bên (cũng có trên khay hệ thống) để khởi động hay dừng tất cả các phiên bản đã cài cùng lúc.
- **Dựa trên socket trên macOS và Linux:** mỗi phiên bản lắng nghe trên unix socket riêng, nhờ đó nhiều phiên bản PHP-FPM có thể chạy đồng thời và mỗi site có thể được định tuyến tới một phiên bản khác nhau. FlyEnv sinh lại cấu hình tích hợp web server khi một phiên bản khởi động.
- **`php-fpm.conf` chỉnh được:** mở và chỉnh cấu hình FPM pool theo từng phiên bản (macOS và Linux), với trình xem FPM log và slow log tích hợp sẵn.
- **Windows chạy dưới dạng FastCGI:** PHP phục vụ web server qua FastCGI, và số tiến trình FastCGI worker (`PHP_FCGI_CHILDREN`, 1–64) điều chỉnh được theo từng phiên bản.

![Module PHP-FPM với các nút điều khiển dịch vụ theo từng phiên bản](https://oss.macphpstudy.com/image/features/php-4.webp)

![Chỉnh php-fpm.conf cho một phiên bản PHP](https://oss.macphpstudy.com/image/features/php-5.webp)

## Cấu hình php.ini

Mỗi phiên bản PHP đã cài có `php.ini` riêng, chỉnh được từ menu hành động của phiên bản.

- **Biểu mẫu thiết lập chung:** bật tắt hay điều chỉnh các chỉ thị hay thay đổi — `memory_limit`, `max_execution_time`, `upload_max_filesize`, `post_max_size`, `max_file_uploads`, `display_errors`, `log_errors`, `error_reporting`, `short_open_tag`, `date.timezone`, đường dẫn CA bundle và hơn nữa — mà không cần tự tay chỉnh tệp.
- **Trình chỉnh sửa nguồn đầy đủ:** chuyển sang khung xem tệp thô cho bất cứ thứ gì biểu mẫu chưa bao phủ, với khôi phục một cú nhấp về cấu hình mặc định.
- **Trình quản lý `disable_functions`:** gia cố một phiên bản bằng cách tắt các hàm nguy hiểm từ một danh sách kiểm tra có tìm kiếm gồm khoảng 170 mục thông dụng; các thay đổi được ghi ngược vào `php.ini`.

![Biểu mẫu thiết lập chung php.ini](https://oss.macphpstudy.com/image/features/php-6.webp)

![Quản lý disable_functions với một danh sách kiểm tra có tìm kiếm](https://oss.macphpstudy.com/image/features/php-7.webp)

## Quản lý extension

Mở **Extensions** từ bất kỳ phiên bản PHP nào để xem cái gì đang được nạp và cài cái gì còn thiếu. [Hướng dẫn cài extension](/vi/guide/php-extensions-install) đi qua một ví dụ đầy đủ.

- **Extension đã nạp:** một danh sách có tìm kiếm các module mà phiên bản hiện đang nạp.
- **PHP từ Homebrew và MacPorts:** duyệt các extension formula khả dụng cho phiên bản PHP đó, cài hay gỡ chúng trong terminal nhúng, và sao chép một đoạn `extension=xxx.so` làm sẵn — hay một mẫu cấu hình Xdebug hoàn chỉnh — thẳng vào `php.ini`.
- **Windows:** bật hay tắt các DLL đã có trong thư mục extension, hay tải extension từ thư viện trực tuyến chỉ với một cú nhấp.
- **Điều hướng nhanh:** nhảy thẳng tới `php.ini` hay mở thư mục extension trong trình quản lý tệp.

![Danh sách extension đã nạp của một phiên bản PHP](https://oss.macphpstudy.com/image/features/php-8.webp)

![Cài một extension PHP từ Homebrew](https://oss.macphpstudy.com/image/features/php-9.webp)

## Cô lập PHP cấp dự án

Các dự án khác nhau thường cần các phiên bản PHP khác nhau. Trong **PHP → Projects**, đăng ký từng thư mục dự án và gắn nó với binary PHP riêng của nó — hay giữ nó trên phiên bản hệ thống.

- **Runtime theo từng dự án:** nhấp đúp một dự án để đổi phiên bản PHP của nó; lựa chọn được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và trình soạn thảo mở từ FlyEnv nhận đúng PHP ngay lập tức.
- **Công cụ mở trong:** nhảy từ một dòng dự án vào Terminal, PowerShell, VSCode, PhpStorm, WebStorm hay Sublime với môi trường dự án đã được nạp.
- **Phiên bản PHP theo từng site:** mỗi site trong **Host** chọn phiên bản PHP-FPM riêng (hay giữ nguyên là site tĩnh), và danh sách site cho thấy phiên bản nào phục vụ site nào.

![Danh sách dự án PHP với việc gắn phiên bản PHP theo từng dự án](https://oss.macphpstudy.com/image/features/php-10.webp)

## Quản lý Composer

Tab **Composer** quản lý Composer như bất kỳ công cụ có phiên bản nào khác trong FlyEnv.

- Cài và giữ nhiều phiên bản Composer, từ bản build tĩnh hay Homebrew tùy theo nền tảng của bạn.
- Thêm các bản cài Composer của riêng bạn từ thư mục tùy chỉnh.
- Gắn một phiên bản Composer cụ thể với một dự án cùng với phiên bản PHP của nó, nhờ đó việc cài dependency dùng một toolchain nhất quán.

![Trình quản lý phiên bản Composer](https://oss.macphpstudy.com/image/features/php-11.webp)

## Tạo dự án nhanh

**PHP → New Project** dựng khung các ứng dụng PHP thông dụng mà không phải rời ứng dụng. Các mẫu được hỗ trợ: WordPress, Laravel, Yii2, ThinkPHP, Symfony, CodeIgniter, CakePHP, Slim, ClassicPress và Contao.

1. Chọn một mẫu rồi chọn phiên bản framework, phiên bản PHP và phiên bản Composer.
2. FlyEnv chạy lệnh tạo dự án Composer trong terminal nhúng của nó, nhờ đó bạn thấy đầu ra thật.
3. Khi dự án đã sẵn sàng, tạo một site tương ứng chỉ với một cú nhấp — các rewrite rule web server cho framework đó được điền sẵn.

![Lưới mẫu dự án PHP](https://oss.macphpstudy.com/image/features/php-12.webp)

![Tạo một dự án Laravel với việc chọn phiên bản](https://oss.macphpstudy.com/image/features/php-13.webp)

## Thêm các công cụ PHP khác

- **Trình xem log:** mở PHP error log, PHP-FPM log hay FPM slow log theo từng phiên bản, với tìm kiếm và làm mới tích hợp sẵn.
- **phpMyAdmin:** từ module MySQL hay MariaDB, thiết lập phpMyAdmin trong một bước — FlyEnv tải nó xuống và tạo một site local được phục vụ bởi phiên bản PHP cao nhất bạn đã cài.
- **PHP Obfuscator:** một tiện ích trên trang Tools làm rối mã nguồn PHP bằng một phiên bản PHP đã chọn, hữu ích trước khi bàn giao code cho bên thứ ba.

## PHP Application Servers

Với PHP theo kiểu application server, FlyEnv có các module chuyên dụng bổ trợ cho thiết lập PHP-FPM cổ điển:

- **FrankenPHP** — PHP được đóng gói cùng một mô hình phục vụ web hiện đại.
- **RoadRunner** — PHP workers, Laravel Octane và các preset fileserver.
- **Swoole CLI** — Swoole native, Hyperf, EasySwoole, Laravel Octane và các preset script tùy chỉnh.

[Hướng dẫn triển khai PHP](/vi/guide/deploy-php-projects-without-docker) giải thích cách chọn giữa chúng. Với các site hướng trình duyệt, hãy tiếp tục với [Site local, tên miền tùy chỉnh & HTTPS](/vi/features/local-sites-https); các stack theo từng framework được trình bày trong các giải pháp [Laravel](/vi/solutions/laravel) và [WordPress](/vi/solutions/wordpress).

<FeatureRelatedLinks locale="vi" slug="php" />

## Lưu ý tương thích

FlyEnv quản lý runtime local và cấu hình tiến trình; ứng dụng không đảm bảo mọi PHP extension, phiên bản framework hay binary bên thứ ba đều khả dụng trên mọi hệ điều hành. Hãy đối chiếu yêu cầu của dự án với bản build PHP đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
