---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Apache và server cho local site | FlyEnv'
description: 'Chạy Apache từ Homebrew, MacPorts hoặc bản dựng static, chỉnh sửa cấu hình theo từng phiên bản và phục vụ local site.'
head:
  - - meta
    - name: description
      content: 'Chạy Apache từ Homebrew, MacPorts hoặc bản dựng static, chỉnh sửa cấu hình theo từng phiên bản và phục vụ local site.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Apache và server cho local site | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy Apache từ Homebrew, MacPorts hoặc bản dựng static, chỉnh sửa cấu hình theo từng phiên bản và phục vụ local site.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/apache
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/apache
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Apache trong FlyEnv

Apache HTTP Server (`httpd`) là một web server mã nguồn mở với lịch sử lâu đời, vẫn phổ biến trong các stack kiểu LAMP cổ điển và ở bất kỳ đâu cần `.htaccess` hoặc cấu hình dựa trên module. FlyEnv vận hành Apache như một web server local được quản lý: cài đặt nhiều bản dựng Apache từ trình quản lý gói hoặc danh sách tải xuống static, chỉnh sửa trực tiếp cấu hình của từng phiên bản, và phục vụ local site thông qua các tệp vhost riêng cho từng site. Dịch vụ `httpd` khởi chạy ở chế độ foreground dưới sự điều khiển của FlyEnv, và phần wiring port, log cùng module được tạo lại tự động cho bạn mỗi khi khởi động. Nếu bạn chuyển từ một bộ bundle kiểu XAMPP, [bài so sánh FlyEnv vs XAMPP](/vi/compare/xampp) giải thích cách tiếp cận được quản lý này khác biệt như thế nào.

![Tổng quan module Apache của FlyEnv](https://oss.macphpstudy.com/image/features/apache-1.webp)

## Quản lý phiên bản Apache

Cài đặt các bản dựng Apache song song từ **Apache → Version Manager** và chuyển đổi phiên bản đang chạy bất cứ lúc nào.

- **Nguồn từ trình quản lý gói:** trên macOS, cài Apache từ Homebrew (formula `httpd`) hoặc MacPorts; trên Linux, Homebrew là nguồn cài đặt. FlyEnv phát hiện các bản cài đặt mà những trình quản lý gói này đã quản lý.
- **Bản dựng static trên Windows:** danh sách cài đặt trên Windows tải trực tiếp các bản dựng Apache Lounge.
- **Phiên bản tùy chỉnh:** đã có sẵn bản dựng Apache của riêng bạn? Thêm thư mục của nó và FlyEnv sẽ phát hiện binary rồi liệt kê cùng với các bản cài đặt khác.

![Apache Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/apache-2.webp)

## Quản lý dịch vụ

Apache là một dịch vụ đơn thể (single-instance) trong FlyEnv: có thể cài nhiều phiên bản nhưng chỉ một chạy tại một thời điểm, nên việc gán port cho site luôn rõ ràng, không mơ hồ.

- **Vòng đời theo từng phiên bản:** khởi động, dừng hoặc khởi động lại phiên bản Apache đang chạy từ tab Service, công tắc trên sidebar hoặc khay hệ thống.
- **Chạy ở chế độ foreground:** trên macOS, FlyEnv khởi chạy `httpd` với tệp cấu hình riêng cùng đường dẫn pid và log tường minh; trên Linux nó chạy thông qua root helper của FlyEnv; trên Windows server được khởi chạy với cấu hình của phiên bản đó. Việc khởi chạy một phiên bản khác khi đang có phiên bản chạy bị chặn ở tab Service — hãy dừng phiên bản đang chạy trước để chuyển đổi.
- **Tích hợp PATH:** bảng Service hiển thị đường dẫn, trạng thái môi trường, alias và ghi chú theo từng phiên bản của mỗi bản cài đặt.

## Cấu hình

Mỗi phiên bản Apache đã cài đều có tệp cấu hình chính riêng, được tạo tự động và lưu trữ theo từng phiên bản, nên các bản dựng không bao giờ dùng chung hay ghi đè cài đặt của nhau.

- **Tệp cấu hình theo từng phiên bản:** cấu hình được sinh từ đầu ra `httpd -V` của chính phiên bản đó và được lưu cùng với dữ liệu Apache khác của FlyEnv, gắn với binary cụ thể.
- **Form cài đặt chung:** điều chỉnh các directive thường thay đổi — `Timeout`, `KeepAlive`, `KeepAliveTimeout`, `MaxKeepAliveRequests` và `LimitRequestBody` — qua form trực quan mà không cần sửa tệp bằng tay.
- **Trình soạn thảo nguồn đầy đủ:** chuyển sang trình soạn thảo raw cho những gì form không bao phủ, với khả năng khôi phục về cấu hình mặc định chỉ bằng một cú nhấp.
- **Tự động bật module:** khi cấu hình được sinh ra, FlyEnv chủ động bật các module mà local site cần đến, bao gồm headers, deflate, proxy, proxy_fcgi, ssl, rewrite và access_compat, đồng thời nối vào thư mục include vhost.
- **Ghi lại directive Listen khi khởi động:** FlyEnv thu thập port Apache của mọi site và ghi lại các directive `Listen` giữa các đánh dấu quản lý của nó mỗi khi dịch vụ khởi động, nhờ đó thay đổi port ở các site không bao giờ để lại listener cũ.

![Form cài đặt chung và trình soạn thảo cấu hình của Apache](https://oss.macphpstudy.com/image/features/apache-3.webp)

## Tích hợp site

Mỗi site trong module Host mà Apache phục vụ đều có tệp vhost riêng với các trường port riêng (mặc định 80/443), nhờ đó Apache có thể phục vụ cùng một site song song với Nginx hoặc Caddy, mỗi server trên các port riêng. Các site PHP được chuyển giao cho PHP-FPM thông qua module proxy_fcgi, sử dụng bất kỳ phiên bản nào bạn đã cài trong [module PHP](/vi/features/php); các stack cổ điển như [WordPress](/vi/solutions/wordpress) chạy mượt mà trên thiết lập này ngay lập tức. Việc tạo site được trình bày trong [hướng dẫn Host](/vi/guide/host). Domain của site, chứng chỉ HTTPS và việc kiểm tra vhost theo từng site được đề cập trong [Local Sites, Custom Domains & HTTPS](/vi/features/local-sites-https), còn [hướng dẫn HTML-as-PHP đa server](/vi/guide/parse-html-as-php-multi-servers) cho thấy Apache phù hợp vào một stack nơi nhiều server cùng phục vụ một site như thế nào.

![Cài đặt vhost và port của site cho Apache](https://oss.macphpstudy.com/image/features/apache-4.webp)

## Log

Tab **Error Log** và **Log(access)** hiển thị log lỗi và log truy cập dùng chung của Apache, với tìm kiếm và làm mới được tích hợp sẵn. Mỗi site còn có log riêng cho từng site, xem được từ module Host, nên một site đông lưu lượng không bao giờ làm chìm những site còn lại.

<FeatureRelatedLinks locale="vi" slug="apache" />

## Ghi chú tương thích

Apache **không có nguồn cài Static trên macOS và Linux** — trên những nền tảng này FlyEnv làm việc với các bản cài từ Homebrew (macOS và Linux) hoặc MacPorts (macOS), hoặc với các thư mục tùy chỉnh do bạn tự đăng ký. Danh sách bản dựng static trực tuyến (các gói Apache Lounge) chỉ dành cho Windows. Việc chạy trên các port đặc quyền như 80/443 trên Linux đòi hỏi root helper của FlyEnv. Hãy kiểm tra [trang Tải xuống](/vi/download) và ghi chú phát hành hiện tại để biết các nền tảng và phiên bản mà bản dựng FlyEnv của bạn hỗ trợ.
