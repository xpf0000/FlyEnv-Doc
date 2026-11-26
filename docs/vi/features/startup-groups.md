---
layout: doc
titleTemplate: false
title: 'Startup Groups: khởi động stack cùng nhau | FlyEnv'
description: 'Gom các dịch vụ và runtime dự án vào các nhóm khởi động có thứ tự, với một nhóm mặc định, điều khiển từ khay và tự khởi động.'
head:
  - - meta
    - name: description
      content: 'Gom các dịch vụ và runtime dự án vào các nhóm khởi động có thứ tự, với một nhóm mặc định, điều khiển từ khay và tự khởi động.'
  - - meta
    - property: og:title
      content: 'Startup Groups: khởi động stack cùng nhau | FlyEnv'
  - - meta
    - property: og:description
      content: 'Gom các dịch vụ và runtime dự án vào các nhóm khởi động có thứ tự, với một nhóm mặc định, điều khiển từ khay và tự khởi động.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/startup-groups
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/startup-groups
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Startup Groups trong FlyEnv

Một dự án thực tế hiếm khi chỉ cần một dịch vụ — chẳng hạn một ứng dụng [Laravel](/vi/solutions/laravel) cần cơ sở dữ liệu, cache và runtime ứng dụng cùng chạy lên một lúc. Startup Groups cho phép bạn gom những mảnh đó vào một nhóm có tên và dựng cả bộ lên hay hạ xuống chỉ với một hành động, theo thứ tự bạn chọn. Một nhóm có thể được đánh dấu là nhóm mặc định, thứ mà công tắc thanh bên, menu khay và auto-start của ứng dụng đều điều khiển. Nếu bạn mới làm quen với FlyEnv, [hướng dẫn bắt đầu](/vi/guide/getting-started) trình bày trước việc cài đặt và khởi động từng module riêng lẻ.

![Trang Startup Groups với một lưới thẻ các nhóm](https://oss.macphpstudy.com/image/features/startup-groups-1.webp)

## Tạo nhóm

Mở **Startup Groups** từ thanh bên và thêm một nhóm; mỗi nhóm xuất hiện dưới dạng một thẻ với công tắc khởi động/dừng riêng, các công tắc theo từng thành viên, và các hành động chỉnh sửa, xóa và đặt làm mặc định.

Một thành viên nhóm là chính xác một trong hai thứ sau:

- **Một phiên bản dịch vụ:** một phiên bản đã cài của một module dịch vụ — cơ sở dữ liệu, web server, hàng đợi và tương tự. PHP-FPM cũng được tính: nó ánh xạ tới các phiên bản PHP bạn đã cài, nhờ đó một phiên bản PHP-FPM cụ thể có thể ngồi trong nhóm cạnh [Nginx](/vi/features/nginx) và [MySQL](/vi/features/mysql).
- **Một runtime dự án:** một dự án thuộc module ngôn ngữ đã bật "run as service" — ứng dụng Node.js, Python, Go hay tương tự của bạn với lệnh chạy và cổng riêng, được quản lý qua [runtime theo từng dự án](/vi/features/per-project-runtimes).

Trình chỉnh sửa nhóm theo dõi các xung đột trong khi bạn chọn thành viên và cảnh báo bạn khi hai mục đến từ cùng một module hay sẽ chiếm cùng một cổng, nhờ đó một tổ hợp hỏng bị bắt trước khi bạn kịp nhấn khởi động.

![Trình chỉnh sửa nhóm chọn các phiên bản dịch vụ và runtime dự án làm thành viên](https://oss.macphpstudy.com/image/features/startup-groups-2.webp)

## Khởi động và dừng có thứ tự

- **Khởi động theo thứ tự danh sách.** FlyEnv chạy các thành viên từ trên xuống và bỏ qua thành viên đang chạy. Thành viên không khả dụng được đánh dấu không hợp lệ, sau đó quy trình tiếp tục.
- **Chọn cách xử lý khi khởi động lỗi.** Theo mặc định, FlyEnv dừng chuỗi sau khi một thao tác khởi động báo lỗi. Bật tùy chọn tiếp tục khởi động các thành viên còn lại nếu một thành viên thất bại.
- **Dừng theo thứ tự ngược lại.** FlyEnv vẫn thử dừng các thành viên khác nếu một lần dừng thất bại. Nhóm có thể dừng cả thành viên đã chạy trước khi nhóm khởi động, nên việc dừng Nginx hoặc Redis dùng chung có thể ảnh hưởng nhóm khác.

[Demo ERPNext](/vi/demos?video=erpnext-local-project) cho thấy nhóm trên macOS gồm Nginx, Redis, MariaDB và dự án Python ERPNext. Video ghi lại quá trình khởi động lại và mở được ERPNext trong trình duyệt. FlyEnv thực hiện thao tác khởi động của từng thành viên theo thứ tự. Mở URL ứng dụng để kiểm tra stack đã sẵn sàng.

## Nhóm mặc định, auto-start và khay

Chính xác một nhóm có thể là nhóm mặc định, và nó trở thành mục tiêu của các điều khiển toàn cục của FlyEnv.

- **Công tắc thanh bên:** nút khởi động/dừng nhóm trên thanh bên chính điều khiển nhóm mặc định. Nếu chưa có nhóm mặc định nào được đặt, nút đó quay về hành vi cổ điển là khởi động hay dừng tất cả dịch vụ cùng lúc.
- **Auto-start khi mở ứng dụng:** khi "auto-start services" được bật trong Setup, việc mở FlyEnv tự động khởi động nhóm mặc định — stack làm việc của bạn đã sẵn sàng vào lúc bạn ngồi xuống.
- **Điều khiển từ khay:** menu khay hệ thống liệt kê các nhóm của bạn, mỗi nhóm với công tắc khởi động/dừng riêng, nhờ đó bạn có thể hạ cả một stack xuống — hay chuyển giữa các stack — mà không cần mở cửa sổ chính.

![Menu khay liệt kê các startup group với các hành động khởi động và dừng](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks locale="vi" slug="startup-groups" />

## Lưu ý tương thích

Startup Groups dùng các thao tác của module khả dụng trên nền tảng đang dùng. Hãy cài phiên bản dịch vụ và cấu hình dự án trước khi thêm vào nhóm. Khi ẩn Startup Groups trong cài đặt thanh bên, FlyEnv sẽ thử dừng các dịch vụ trong nhóm. Mục này vẫn hiển thị nếu thao tác dừng thất bại.
