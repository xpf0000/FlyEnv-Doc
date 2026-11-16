---
layout: doc
titleTemplate: false
title: 'Plugin SamWaf: tường lửa ứng dụng web cho trang web cục bộ | FlyEnv'
description: 'Cài đặt và chạy SamWaf trong FlyEnv, quản lý phiên bản tường lửa, chỉnh cấu hình YAML, xem nhật ký và mở trang quản trị web để bảo vệ trang web cục bộ.'
---

# SamWaf trong FlyEnv

SamWaf bổ sung tường lửa ứng dụng web vào không gian phát triển cục bộ của bạn. Nó đứng trước website dưới dạng reverse proxy, kiểm tra các yêu cầu gửi đến và áp dụng những quy tắc bảo vệ bạn cấu hình. Dùng SamWaf cùng máy chủ web cục bộ để thử nghiệm bảo vệ website và kiểm tra lưu lượng trước khi áp dụng cách làm tương tự cho môi trường triển khai.

Plugin FlyEnv tập hợp quản lý phiên bản, điều khiển dịch vụ, tệp cấu hình và nhật ký runtime của SamWaf vào một mô-đun. Việc đăng ký website, thiết lập quy tắc bảo vệ và phân tích yêu cầu được thực hiện trong trang quản trị web riêng của SamWaf.

Cài **SamWaf** từ **[Cài đặt → Plugin Market](/vi/features/plugin-market)**, rồi mở **SamWaf** trên thanh bên. Plugin hỗ trợ macOS, Windows và Linux; các bản runtime có thể tải phụ thuộc vào hệ điều hành và kiến trúc máy của bạn.

## Cài runtime và khởi động tường lửa

Mở **Quản lý phiên bản** để tải một bản phát hành SamWaf phù hợp với máy tính. FlyEnv liệt kê các gói phát hành ổn định tương thích từ dự án gốc, dùng GitHub làm nguồn chính và Gitee làm nguồn dự phòng.

Sau khi cài, quay lại **Dịch vụ** để chọn phiên bản đã cài và khởi động. Dùng cùng khung dịch vụ này để dừng hoặc khởi động lại tường lửa và kiểm tra trạng thái chạy. Plugin cũng đưa SamWaf vào các điều khiển dịch vụ trên khay hệ thống của FlyEnv.

Mỗi phiên bản đã cài có cấu hình, dữ liệu và nhật ký riêng bên trong thư mục cài đặt. Hãy xem chúng là một phần của bản cài đó khi lên kế hoạch đổi phiên bản; cài một tệp thực thi khác không tự động di chuyển thiết lập website của bạn.

![Thẻ Dịch vụ của SamWaf trong FlyEnv với phiên bản đã cài, trạng thái chạy và các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/plugin/samwaf-service.webp)

## Mở trang quản trị web

Khi SamWaf đã chạy, nhấp biểu tượng trang web trong **Dịch vụ**. FlyEnv đọc cổng quản trị từ cấu hình của phiên bản đang chọn và mở trang quản trị trong trình duyệt. Địa chỉ mặc định là `http://127.0.0.1:26666`.

Ở lần cài mới, SamWaf tạo mật khẩu ban đầu ngẫu nhiên cho tài khoản `admin`. FlyEnv hiển thị mật khẩu này khi bạn mở trang quản trị lần đầu. Đăng nhập và đổi mật khẩu ngay. Thông tin đăng nhập ban đầu cũng được lưu trong `data/initial_password.txt` bên trong thư mục cài đặt của phiên bản đó.

Cấu hình ban đầu của FlyEnv giới hạn quyền truy cập quản trị ở các địa chỉ loopback cục bộ. Cổng quản trị tách biệt với những cổng HTTP hoặc HTTPS bạn chọn cho các website được bảo vệ.

## Đặt SamWaf trước một trang web cục bộ

Trong trang quản trị web của SamWaf, thêm website bạn muốn bảo vệ và trỏ upstream tới địa chỉ hiện có của ứng dụng. Các yêu cầu gửi đến phải tới địa chỉ lắng nghe của SamWaf trước; tạo trang web trong FlyEnv không tự động định tuyến nó qua tường lửa.

Ví dụ, một tên máy chủ cục bộ được bảo vệ có thể gửi yêu cầu tới SamWaf, rồi SamWaf chuyển tiếp lưu lượng được cho phép tới backend do **[Nginx](/vi/features/nginx)**, **[Apache](/vi/features/apache)** hoặc **[Caddy](/vi/features/caddy)** phục vụ trên cổng khác. Giữ địa chỉ lắng nghe của tường lửa và backend ở địa chỉ hoặc cổng riêng để tránh xung đột và vòng lặp proxy. Mô-đun **[Trang web cục bộ và HTTPS](/vi/features/local-sites-https)** của FlyEnv quản lý tên miền và thiết lập máy chủ web cho trang web backend.

Dùng trang quản trị của SamWaf để quản lý quy tắc bảo vệ website và xem các yêu cầu. SamWaf có khả năng phát hiện SQL injection và XSS, danh sách IP cho phép và chặn, quy tắc tùy chỉnh cùng nhật ký bảo vệ. Xem [tài liệu SamWaf](https://doc.samwaf.com/en/) để biết các điều khiển website và quy tắc.

## Chỉnh cấu hình và xem nhật ký

Thẻ **Tệp cấu hình** mở tệp `conf/config.yml` của phiên bản đang chọn trong trình chỉnh sửa YAML của FlyEnv. Tệp này chứa cổng quản trị (`local_port`), danh sách IP được phép truy cập quản trị, thiết lập cơ sở dữ liệu, bộ nhớ đệm và ghi nhật ký. FlyEnv tạo cấu hình ban đầu khi cần và giữ nguyên tệp đã có.

Cấu hình ban đầu dùng SQLite và bộ nhớ đệm trong RAM, vì vậy bạn có thể bắt đầu mà không cần dịch vụ cơ sở dữ liệu hoặc bộ nhớ đệm riêng. Các thiết lập riêng cho từng website vẫn nằm trong trang quản trị SamWaf.

![Trình chỉnh sửa cấu hình YAML của SamWaf trong FlyEnv với thiết lập cơ sở dữ liệu, bộ nhớ đệm, cổng quản trị và bảo mật](https://oss.macphpstudy.com/image/features/plugin/samwaf-configuration.webp)

Mở **Nhật ký** để xem nhật ký runtime. Nếu nhật ký chính chưa được tạo, khung xem sẽ dùng đầu ra hoặc lỗi khởi động thay thế. Dùng các nhật ký này khi một phiên bản không khởi động được hoặc không thể truy cập trang quản trị; dùng trang quản trị web của SamWaf để xem bản ghi yêu cầu website và bảo vệ.

Quay lại **[Plugin Market](/vi/features/plugin-market)** để cập nhật tích hợp FlyEnv, hoặc duyệt **[tổng quan tính năng](/vi/features#plugins)** để xem các mô-đun tùy chọn khác.
