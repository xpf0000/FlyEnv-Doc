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

Các thành viên chạy theo thứ tự chúng được liệt kê trong nhóm, nhờ đó hạ tầng lên trước các ứng dụng phụ thuộc vào nó.

- **Khởi động chạy từ trên xuống dưới:** mỗi thành viên được khởi động theo thứ tự liệt kê, và những thành viên đã đang chạy bị bỏ qua thay vì khởi động lại.
- **Một lỗi dừng cả chuỗi:** nếu một thành viên không khởi động nổi, các thành viên còn lại được đánh dấu là chưa chạy thay vì bị phóng vào một môi trường nửa vời.
- **Dừng chạy ngược và luôn hoàn tất:** việc tắt đi ngược danh sách, và nó vẫn tiếp tục ngay cả khi một thành viên không dừng nổi.

## Nhóm mặc định, auto-start và khay

Chính xác một nhóm có thể là nhóm mặc định, và nó trở thành mục tiêu của các điều khiển toàn cục của FlyEnv.

- **Công tắc thanh bên:** nút khởi động/dừng nhóm trên thanh bên chính điều khiển nhóm mặc định. Nếu chưa có nhóm mặc định nào được đặt, nút đó quay về hành vi cổ điển là khởi động hay dừng tất cả dịch vụ cùng lúc.
- **Auto-start khi mở ứng dụng:** khi "auto-start services" được bật trong Setup, việc mở FlyEnv tự động khởi động nhóm mặc định — stack làm việc của bạn đã sẵn sàng vào lúc bạn ngồi xuống.
- **Điều khiển từ khay:** menu khay hệ thống liệt kê các nhóm của bạn, mỗi nhóm với công tắc khởi động/dừng riêng, nhờ đó bạn có thể hạ cả một stack xuống — hay chuyển giữa các stack — mà không cần mở cửa sổ chính.

![Menu khay liệt kê các startup group với các hành động khởi động và dừng](https://oss.macphpstudy.com/image/features/startup-groups-3.webp)

<FeatureRelatedLinks locale="vi" slug="startup-groups" />

## Lưu ý tương thích

Startup Groups thuần túy là điều phối: nó xếp trình tự các thao tác khởi động và dừng mà mỗi module vốn đã cung cấp, và nó không tự cài phiên bản hay runtime nào — một nhóm chỉ có thể chứa các phiên bản dịch vụ và dự án mà các module riêng của chúng đã quản lý. Tính năng hoạt động như nhau trên macOS, Windows và Linux, không có hành vi riêng theo nền tảng; mọi giới hạn nền tảng đến từ các module bên dưới. Việc ẩn mục Startup Groups trong cài đặt thanh bên trước tiên dừng mọi thành viên của mọi nhóm, nhờ đó không có gì còn chạy ngầm trong nền. Duyệt các [trang tính năng](/vi/features) khác để biết khả năng của từng dịch vụ mà bạn gom vào nhóm.
