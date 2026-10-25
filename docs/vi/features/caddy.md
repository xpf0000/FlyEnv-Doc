---
layout: doc
titleTemplate: false
title: 'Trình quản lý phiên bản Caddy với HTTPS tự động | FlyEnv'
description: 'Chạy Caddy với Caddyfile được quản lý, port theo từng site, HTTPS nội bộ tự động và reverse proxy.'
head:
  - - meta
    - name: description
      content: 'Chạy Caddy với Caddyfile được quản lý, port theo từng site, HTTPS nội bộ tự động và reverse proxy.'
  - - meta
    - property: og:title
      content: 'Trình quản lý phiên bản Caddy với HTTPS tự động | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy Caddy với Caddyfile được quản lý, port theo từng site, HTTPS nội bộ tự động và reverse proxy.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/caddy
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/caddy
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Caddy trong FlyEnv

Caddy là một web server mã nguồn mở được cấu hình thông qua một tệp Caddyfile duy nhất, với HTTPS tự động được tích hợp sẵn. FlyEnv biến Caddy thành một phần được quản lý trong stack local của bạn: cài các phiên bản từ nhiều nguồn, chạy một trong số chúng như một dịch vụ với việc tự động nạp lại cấu hình, và để FlyEnv sinh vhost cho mọi site kiểu PHP bạn tạo ra. Mỗi site như vậy có port Caddy riêng, HTTPS nội bộ tự động và các quy tắc reverse proxy theo từng site, tất cả được ghép nối bởi một Caddyfile được quản lý duy nhất.

![Tổng quan module Caddy của FlyEnv](https://oss.macphpstudy.com/image/features/caddy-1.webp)

## Quản lý phiên bản Caddy

Cài Caddy từ **Caddy → Version Manager** và giữ sẵn những phiên bản bạn cần.

- **Nhiều nguồn cài đặt:** bản dựng Static từ danh sách phiên bản trực tuyến của FlyEnv trên mọi nền tảng — các mục Windows dẫn liên kết ra GitHub releases — cộng với Homebrew trên macOS và Linux cùng MacPorts trên macOS.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến một thư mục chứa binary Caddy tự biên dịch hoặc cài từ nguồn bên ngoài, và nó sẽ xuất hiện trong danh sách phiên bản cạnh các phiên bản được quản lý.
- **Một phiên bản chạy tại một thời điểm:** có thể cài nhiều phiên bản nhưng chỉ một chạy tại một thời điểm với tư cách dịch vụ Caddy.

![Caddy Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/caddy-2.webp)

## Quản lý dịch vụ

Caddy chạy như một tiến trình foreground được FlyEnv giám sát, khởi chạy với `caddy run --config <baseDir>/caddy/Caddyfile --watch` — trên Linux thông qua root helper của FlyEnv để có thể bind các port đặc quyền.

- **Tự động nạp lại:** cờ `--watch` khiến Caddy tự nạp lại cấu hình mỗi khi nó thay đổi, nên việc chỉnh sửa Caddyfile hoặc vhost của site có hiệu lực mà không cần khởi động lại thủ công.
- **Điều khiển từ sidebar và khay hệ thống:** khởi động hoặc dừng Caddy từ công tắc của module trên sidebar, hoặc trực tiếp từ khay hệ thống mà không cần mở cửa sổ chính.
- **Sửa vhost khi khởi động:** khi dịch vụ khởi động, FlyEnv dựng lại bất kỳ tệp vhost nào còn thiếu cho các site của bạn, nên một site vừa được thêm hoặc khôi phục sẽ được phục vụ ngay lập tức.

![Tab dịch vụ Caddy với các nút khởi động và dừng](https://oss.macphpstudy.com/image/features/caddy-3.webp)

## Cấu hình

Caddy dùng một **Caddyfile** toàn cục duy nhất, do FlyEnv sinh ra từ một mẫu: nó thiết lập thư mục lưu trữ ssl và tệp log, và kết thúc bằng dòng `import vhost/caddy/*` kéo vào vhost của mọi site.

- **Trình soạn thảo nguồn:** tab **Config File** chỉnh sửa Caddyfile trực tiếp trong một trình soạn thảo nguồn đầy đủ; không có form cài đặt trực quan, nhờ đó bạn toàn quyền sử dụng cú pháp Caddyfile.
- **Được tự động nhận:** vì dịch vụ chạy với `--watch`, chỉ cần lưu tệp là đủ để Caddy áp dụng cấu hình mới.

## Tích hợp site

Caddy là một trong những web server có thể phục vụ các site bạn tạo trong module Host của FlyEnv. Chỉ các site kiểu PHP mới có vhost Caddy được sinh ra, nối với các phiên bản PHP-FPM từ [module PHP](/vi/features/php); các site Node, Java, Go và Python được truy cập thông qua reverse proxy — [hướng dẫn reverse proxy đa server](/vi/guide/reverse-proxy-nestjs-multi-servers) minh họa mẫu này trong thực tế — còn các site Tomcat nằm trong `server.xml`.

- **Port theo từng site:** mỗi site kiểu PHP có port Caddy riêng (mặc định 80/443), độc lập với các port mà [Nginx](/vi/features/nginx), Apache hay [FrankenPHP](/vi/features/frankenphp) sử dụng — nhờ đó cùng một site có thể được phục vụ bởi nhiều web server cùng lúc.
- **HTTPS tự động:** vhost của site dùng `tls internal` để Caddy cấp và tin tưởng một chứng chỉ local một cách tự động, hoặc bạn có thể trỏ site đến các tệp chứng chỉ của riêng mình, chẳng hạn những chứng chỉ do [module MkCert](/vi/features/mkcert) tạo ra. Domain và HTTPS được đề cập trong [Local Sites, Custom Domains & HTTPS](/vi/features/local-sites-https).
- **Reverse proxy theo từng site:** thêm các quy tắc reverse proxy vào một site để chuyển tiếp các đường dẫn đến các app server local; FlyEnv ghi chúng vào vhost Caddy của site đó.

![Vhost site Caddy với quy tắc reverse proxy](https://oss.macphpstudy.com/image/features/caddy-4.webp)

## Log

Trang module Caddy gồm một tab **Log** duy nhất hiển thị `caddy/caddy.log` toàn server. Các site cũng giữ log truy cập và log lỗi riêng, mở từ trình xem log của từng site trong module Host — rất tiện khi cần tách biệt lưu lượng của một domain cụ thể. Không có bảng quản trị tích hợp; tab log và Caddyfile được quản lý là toàn bộ diện tích vận hành.

<FeatureRelatedLinks locale="vi" slug="caddy" />

## Ghi chú tương thích

FlyEnv quản lý binary Caddy, vòng đời tiến trình và cấu hình được sinh ra; nó không đảm bảo mọi plugin Caddy hay biến thể bản dựng tùy chỉnh đều khả dụng trên mọi hệ điều hành. Caddyfile được chỉnh sửa trực tiếp — không có form trực quan — và vì dịch vụ chạy với `--watch`, thay đổi vừa lưu được nhận ngay lập tức, nên hãy kiểm chứng các chỉnh sửa trước khi dựa vào chúng. Các nguồn cài khả dụng khác nhau theo nền tảng (MacPorts chỉ có trên macOS, còn trên Windows nguồn Static là duy nhất). Hãy coi [trang Tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn tham chiếu về các gói được hỗ trợ.
