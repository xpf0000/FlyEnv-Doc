---
layout: doc
titleTemplate: false
title: 'Khám phá dịch vụ Consul local với Web UI | FlyEnv'
description: 'Chạy các phiên bản Consul như một server agent local với thư mục dữ liệu được quản lý và web UI tích hợp.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Consul như một server agent local với thư mục dữ liệu được quản lý và web UI tích hợp.'
  - - meta
    - property: og:title
      content: 'Khám phá dịch vụ Consul local với Web UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Consul như một server agent local với thư mục dữ liệu được quản lý và web UI tích hợp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/consul
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/consul
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Consul trong FlyEnv

Consul là nền tảng service discovery và service mesh của HashiCorp: các dịch vụ tự đăng ký, health check theo dõi tính khả dụng của chúng, và một kho key/value tích hợp phân phối cấu hình. Nó thường được các stack microservice cần một registry để tìm và giám sát dịch vụ sử dụng — chẳng hạn các ứng dụng [Spring Boot](/vi/solutions/spring-boot) với Spring Cloud Consul — kể cả khi chạy local, khi bạn muốn môi trường phát triển giống với production. FlyEnv vận hành HashiCorp Consul như một server agent local được quản lý: cài một hoặc nhiều phiên bản, khởi động agent với cấu hình server single-node được sinh ra, giữ dữ liệu của nó trong một thư mục dữ liệu theo từng phiên bản mà bạn có thể di chuyển, và mở web UI tích hợp của Consul trong trình duyệt chỉ với một cú nhấp. Cấu hình, log và các điều khiển dịch vụ đều nằm trên cùng một trang module.

![Tab Service của module Consul trong FlyEnv](https://oss.macphpstudy.com/image/features/consul-1.webp)

## Quản lý phiên bản

Cài đặt và giữ nhiều phiên bản Consul song song từ **Consul → Version Manager**, và chọn phiên bản mà dịch vụ sẽ chạy.

- **Nguồn cài theo từng nền tảng:** một danh sách static trực tuyến các gói dựng sẵn trên mọi nền tảng, cộng với Homebrew và MacPorts trên macOS cùng Homebrew trên Linux.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản cài Consul của riêng bạn; nó quét thư mục và liệt kê những bản dựng đó cạnh các phiên bản được quản lý.
- **Một phiên bản tại một thời điểm:** Consul chạy như một agent local đơn lẻ, nên việc khởi động một phiên bản bị chặn khi phiên bản khác đang chạy — hãy dừng phiên bản hiện tại trước khi chuyển đổi.

![Consul Version Manager với các nguồn cài đặt](https://oss.macphpstudy.com/image/features/consul-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi chạy binary `consul agent` thật ở chế độ tách biệt (detached), không cần đặc quyền root. Cấu hình mặc định được sinh ra mô tả một server local khép kín: `server: true`, `bootstrap_expect: 1`, `client_addr: 127.0.0.1` và `ui_config.enabled: true`, với agent được bind vào địa chỉ LAN chính của bạn.

- **Thư mục dữ liệu có thể chỉnh sửa:** mỗi phiên bản có thư mục dữ liệu riêng (mặc định là `consul-<major>-data` dưới thư mục Consul của FlyEnv), và bạn có thể đổi đường dẫn theo từng phiên bản trực tiếp từ tab Service. Thư mục được chọn được truyền cho agent với `-data-dir`, nhờ đó trạng thái được giữ nguyên qua các lần khởi động lại và các phiên bản không bao giờ dùng chung dữ liệu trừ khi bạn trỏ chúng đến cùng một đường dẫn.
- **Trình soạn thảo JSON raw:** tab **Config File** mở `consul-<major>.json` trong một trình soạn thảo nguồn — không có form trực quan, nhờ đó mọi tùy chọn của Consul đều sẵn sàng. FlyEnv chỉ sinh tệp khi nó còn thiếu và không bao giờ ghi đè các chỉnh sửa của bạn; một bản sao `.default` được giữ cạnh đó để tham chiếu.
- **Hành vi biết port:** port HTTP và các cài đặt khác được đọc lại từ cấu hình JSON này ở những nơi khác trong module, nhờ đó các giá trị tùy chỉnh bạn đặt luôn được tôn trọng.

![Chỉnh sửa cấu hình JSON và thư mục dữ liệu của Consul](https://oss.macphpstudy.com/image/features/consul-3.webp)

## Web UI

Consul đi kèm web UI riêng, và FlyEnv bật nó trong cấu hình được sinh ra (`ui_config.enabled: true`). Nút **Open UI** trên thanh công cụ Service khởi chạy nó trong trình duyệt mặc định của bạn tại `http://127.0.0.1:8500/ui/` — port được đọc từ `ports.http` trong cấu hình JSON, nên nếu bạn đổi port HTTP, nút bấm sẽ theo đúng cài đặt của bạn.

Từ UI, bạn có thể duyệt các dịch vụ và node đã đăng ký, kiểm tra health check, và chỉnh sửa kho key/value dựa trên agent local đang chạy.

![Web UI tích hợp của Consul được mở từ FlyEnv](https://oss.macphpstudy.com/image/features/consul-4.webp)

## Log

Tab **Log** mở `consul.log` của agent ngay bên trong FlyEnv. Vì FlyEnv khởi động agent với `-log-file=consul.log`, mọi thứ agent ghi ra — thông báo khởi động, sự kiện Raft, hoạt động join và sync — đều đổ vào tệp duy nhất này, biến nó thành nơi kiểm tra đầu tiên khi một phiên bản khởi động thất bại hay một dịch vụ không đăng ký như mong đợi.

![Trình xem log Consul trong FlyEnv](https://oss.macphpstudy.com/image/features/consul-5.webp)

<FeatureRelatedLinks locale="vi" slug="consul" />

## Ghi chú tương thích

FlyEnv quản lý agent Consul local, tệp cấu hình và thư mục dữ liệu của nó; nó không đảm bảo mọi phiên bản Consul đều khả dụng trên mọi hệ điều hành hay nguồn cài. Các phiên bản được cung cấp trong Version Manager phụ thuộc vào nền tảng của bạn (Homebrew và MacPorts trên macOS, Homebrew trên Linux, gói static trên Windows) và vào những gì các nguồn đó công bố. Trên Windows, FlyEnv thêm `raft_logstore.backend = boltdb` vào cấu hình được sinh ra để vượt qua lỗi fsync của Raft log riêng có trên nền tảng này. Module Consul quản lý chính agent — nó không có gắn kết phiên bản theo dự án hay tích hợp reverse proxy cho site. Với các mảnh ghép liên quan, FlyEnv cũng đi kèm [R-Nacos](/vi/features/r-nacos), một registry và trung tâm cấu hình theo giao thức Nacos, và [etcd](/vi/features/etcd), kho key/value nhất quán đứng sau nhiều stack; hướng dẫn về [chạy dịch vụ Node.js, Python và Go không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker) bao quát phần còn lại của một stack microservice local. Để biết những gì có thể cài trên máy của bạn, hãy xem danh sách phiên bản trong ứng dụng và [trang Tải xuống](/vi/download); để có bài hướng dẫn chạy được về một stack dịch vụ local, xem các [demo](/vi/demos).
