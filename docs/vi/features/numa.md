---
layout: doc
titleTemplate: false
title: 'DNS Server local và chặn quảng cáo với Numa | FlyEnv'
description: 'Chạy Numa như một DNS server local với web UI, các danh sách chặn quảng cáo và chuyển tiếp upstream.'
head:
  - - meta
    - name: description
      content: 'Chạy Numa như một DNS server local với web UI, các danh sách chặn quảng cáo và chuyển tiếp upstream.'
  - - meta
    - property: og:title
      content: 'DNS Server local và chặn quảng cáo với Numa | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy Numa như một DNS server local với web UI, các danh sách chặn quảng cáo và chuyển tiếp upstream.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/numa
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/numa
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Numa DNS trong FlyEnv

Numa là một DNS server bên thứ ba (bởi razvandimescu, [numa.rs](https://numa.rs/)) phân giải truy vấn ngay tại local, chuyển tiếp chúng tới các resolver upstream, và có thể chặn các tên miền quảng cáo và theo dõi — hữu ích khi bạn muốn một lớp DNS riêng tư, có thể lọc cho máy hay mạng của chính mình. FlyEnv cài đặt và chạy nó như một dịch vụ local được quản lý: từ module Numa bạn có thể cài các phiên bản, khởi động server chỉ với một cú nhấp, chỉnh cấu hình TOML của nó, mở web UI tích hợp sẵn và đọc log của nó — với các danh sách chặn quảng cáo và chuyển tiếp upstream có sẵn ngay từ đầu.

![Tổng quan module Numa của FlyEnv với các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/numa-1.webp)

## Quản lý phiên bản

Cài đặt và chuyển đổi các phiên bản Numa từ **Numa → Version Manager**.

- **Danh sách trực tuyến tĩnh:** các tệp nén dựng sẵn từ GitHub releases của dự án — `.tgz` cho macOS và Linux, `.zip` cho Windows — được cài vào thư mục ứng dụng của FlyEnv.
- **Homebrew:** trên macOS và Linux, FlyEnv cài Numa qua custom tap `razvandimescu/tap`.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới một thư mục chứa bản build Numa của riêng bạn và nó sẽ liệt kê binary đó cạnh các phiên bản được quản lý.

![Numa Version Manager với các nguồn tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/numa-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi động Numa dưới dạng `numa <numa.toml>`, một instance duy nhất được theo dõi qua một tệp pid cố định, nhờ đó mỗi thời điểm chỉ một phiên bản chạy. Trên Linux, tiến trình được khởi chạy với quyền cao hơn (gắn vào cổng DNS đòi hỏi điều đó), trên macOS nó chạy như một tiến trình spawn thông thường, còn trên Windows là qua CMD.

Tab **Config File** chỉnh `numa/numa.toml` trong một trình chỉnh sửa TOML thô — không có biểu mẫu trực quan. Một bản `numa.default.toml` nguyên vẹn được giữ cạnh đó để tham khảo hay khôi phục, và mẫu mặc định được bản địa hóa cho tiếng Anh và tiếng Trung. Các mặc định đi kèm gồm:

- **DNS listener:** `0.0.0.0:53` — trỏ DNS của hệ thống hay trình duyệt về máy này để định tuyến mọi truy vấn qua Numa.
- **Web UI / API:** `api_port = 5380`.
- **HTTP proxy tích hợp sẵn:** cổng 80/443 với TLD local là `numa` — cùng các cổng mà một web server như [Nginx](/vi/features/nginx) sẽ chiếm, vì vậy hãy ánh xạ lại một phía nếu bạn chạy cả hai.
- **Danh sách chặn quảng cáo:** mẫu đi kèm đã bật blocklist HaGeZi.
- **Chuyển tiếp upstream:** chế độ forward qua 9.9.9.9 và 1.1.1.1, với 8.8.8.8 làm fallback, cộng thêm caching phản hồi và một mục `[mobile]`.

![Chỉnh numa.toml trong trình chỉnh sửa cấu hình TOML thô](https://oss.macphpstudy.com/image/features/numa-3.webp)

## Web UI (5380)

Numa đi kèm giao diện quản trị riêng, được phục vụ bởi chính server. Khi dịch vụ đang chạy, tab Service hiển thị nút **open in browser** khởi chạy `http://127.0.0.1:<api_port>` — mặc định là cổng 5380. FlyEnv đọc cổng trực tiếp từ `numa.toml`, nhờ đó nếu bạn đổi `api_port` thì nút sẽ theo cấu hình của bạn.

![Web UI của Numa mở trong trình duyệt trên cổng 5380](https://oss.macphpstudy.com/image/features/numa-4.webp)

## Log

Tab **Log** hiển thị log start-error theo từng phiên bản `numa/numa-<version>-start-error.log` — nơi đầu tiên cần xem khi một phiên bản Numa không khởi động nổi. FlyEnv còn lập chỉ mục mọi tệp `numa-*.log` nó tìm thấy trong thư mục Numa, nhờ đó log từ các lần chạy trước vẫn truy cập được.

![Log của Numa](https://oss.macphpstudy.com/image/features/numa-5.webp)

<FeatureRelatedLinks locale="vi" slug="numa" />

## Lưu ý tương thích

Numa có mặt trên macOS, Linux và Windows. Trên Linux, dịch vụ cần đặc quyền cao để gắn vào cổng 53. MacPorts không được cung cấp như một nguồn cài cho module này — hãy dùng danh sách tĩnh hay Homebrew thay thế. Trình chỉnh sửa cấu hình chỉ là TOML thô, và web UI là giao diện riêng của Numa, nhờ đó các tính năng và bố cục của nó bám theo dự án upstream chứ không phải FlyEnv. FlyEnv còn đi kèm một [DNS server tích hợp sẵn](/vi/features/dns-server) phân giải các [tên miền site local](/vi/guide/host) bạn cấu hình cho các dự án mà không cần cài thêm gì. Để biết nền tảng của bạn có thể cài những phiên bản Numa nào, hãy kiểm tra Version Manager trong ứng dụng sau khi lấy FlyEnv từ [trang tải xuống](/vi/download); các hướng dẫn thực hành được tổng hợp trên [trang Demos](/vi/demos).
