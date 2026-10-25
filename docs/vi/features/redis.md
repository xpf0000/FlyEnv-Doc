---
layout: doc
titleTemplate: false
title: 'Redis Server local với UI Redis Commander | FlyEnv'
description: 'Chạy các phiên bản Redis với cấu hình trực quan, log, và một web UI Redis Commander một cú nhấp.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Redis với cấu hình trực quan, log, và một web UI Redis Commander một cú nhấp.'
  - - meta
    - property: og:title
      content: 'Redis Server local với UI Redis Commander | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Redis với cấu hình trực quan, log, và một web UI Redis Commander một cú nhấp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/redis
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/redis
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Redis local với FlyEnv

Redis là một kho dữ liệu in-memory mã nguồn mở, thường được dùng như một cache, session store, queue backend hay kênh pub/sub trong các ứng dụng web — ở những nơi một daemon nhẹ chỉ làm cache như [Memcached](/vi/features/memcached) là chưa đủ. FlyEnv biến nó thành một dịch vụ local được quản lý mà bạn điều khiển từ một cửa sổ: cài nhiều phiên bản, chạy `redis-server` với cấu hình theo từng phiên bản sinh tự động, điều chỉnh cổng và thiết lập bộ nhớ từ một biểu mẫu trực quan, theo dõi log server, và duyệt các key của bạn trong một web UI Redis Commander chỉ với một cú nhấp. Nếu bạn mới làm quen với FlyEnv, [hướng dẫn bắt đầu](/vi/guide/getting-started) cho thấy cách các module được cài đặt và khởi động.

![Tổng quan module Redis của FlyEnv](https://oss.macphpstudy.com/image/features/redis-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản Redis song song từ **Redis → Version Manager**, và chọn phiên bản nào mà dịch vụ chạy.

- **Nguồn cài theo từng nền tảng:** Homebrew (`redis`, `redis@x.y`) và MacPorts trên macOS, Homebrew trên Linux, và một danh sách tĩnh gồm các bản build Windows dựng sẵn trên Windows.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản cài Redis của riêng bạn; FlyEnv quét nó để tìm binary `redis-server` và liệt kê các bản build đó cạnh các phiên bản được quản lý.
- **Mỗi thời điểm một phiên bản chạy:** khởi động một phiên bản sẽ dừng mọi phiên bản Redis khác đang chạy, nhờ đó dịch vụ luôn phục vụ một bản build duy nhất, đã biết.

![Redis Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/redis-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi chạy binary `redis-server` thật với một tệp cấu hình được sinh ra — `redis-server redis-<major>.conf` — và theo dõi tệp pid của nó để khởi động và dừng sạch sẽ. Cấu hình mặc định lắng nghe trên cổng 6379 và giữ dữ liệu của mỗi major version trong thư mục `db-<major>` riêng.

Mỗi major version có tệp `redis-<major>.conf` riêng, chỉnh được từ tab **Config File**:

- **Biểu mẫu thiết lập chung:** điều chỉnh các tùy chọn hay thay đổi — cổng, timeout, maxclients, databases, `requirepass` và `maxmemory` — từ một biểu mẫu trực quan thay vì tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ, với một tệp `redis-<major>-default.conf` được giữ cạnh đó làm mặc định tham chiếu.

![Tệp cấu hình Redis với biểu mẫu thiết lập chung](https://oss.macphpstudy.com/image/features/redis-3.webp)

## Log

Tab **Log** mở `redis-<major>.log` của server trực tiếp bên trong FlyEnv — điểm dừng đầu tiên khi một phiên bản không khởi động nổi hay ứng xử bất thường. Đầu ra log từ tiến trình trợ giúp Redis Commander được thu thập riêng, nhờ đó các sự cố khởi động web UI không bao giờ bị trộn vào log của Redis server.

## Redis Commander

Nút **Redis Commander** xuất hiện trên thanh công cụ Service mỗi khi Redis đang chạy và mở một web UI đầy đủ để duyệt key, chỉnh giá trị và chạy lệnh trên server local.

- **Thiết lập một cú nhấp:** ở lần mở đầu tiên, FlyEnv cài gói `redis-commander` bằng npm và khởi động nó giúp bạn — không cần công cụ thủ công nào. Nó dùng phiên bản [Node.js](/vi/features/nodejs) được chọn trong FlyEnv, nhờ đó [quản lý nhiều phiên bản Node.js](/vi/guide/manage-multiple-node-php-versions) cũng điều khiển runtime nào mà web UI được khởi chạy trên đó.
- **Kết nối được cấu hình sẵn:** Redis Commander kết nối tới server đang chạy tự động, với cổng và mật khẩu `requirepass` được đọc từ cấu hình Redis hiện hành.
- **Bảo mật ngay từ đầu:** UI chạy trên 127.0.0.1 sau HTTP authentication, và FlyEnv mở trình duyệt của bạn với một liên kết auto-login dùng một lần. Redis Commander tự dừng khi dịch vụ Redis dừng.

Điều này kết hợp tốt với công việc framework local — chẳng hạn kiểm tra các key cache và hàng đợi của một dự án [Laravel](/vi/solutions/laravel) trong khi nó chạy.

![Web UI Redis Commander được mở từ FlyEnv](https://oss.macphpstudy.com/image/features/redis-4.webp)

<FeatureRelatedLinks locale="vi" slug="redis" />

## Lưu ý tương thích

FlyEnv quản lý runtime Redis local, các tệp cấu hình và thư mục dữ liệu của nó; ứng dụng không đảm bảo mọi phiên bản Redis đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Version Manager phụ thuộc vào nền tảng của bạn — Homebrew và MacPorts trên macOS, Homebrew trên Linux, bản build tĩnh trên Windows — và vào những gì các nguồn đó phát hành. Các tệp cấu hình là theo từng major version (`redis-<major>.conf`), nhờ đó các thiết lập như cổng, `requirepass` và `maxmemory` được giữ riêng biệt cho Redis 7 và Redis 8. Redis Commander đòi hỏi một phiên bản Node.js đã được cài và chọn trong FlyEnv trước lần khởi chạy đầu tiên. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
