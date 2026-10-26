---
layout: doc
titleTemplate: false
title: 'Plugin MariaDB Cluster: nhiều instance và replication GTID | FlyEnv'
description: 'Chạy nhiều instance MariaDB local trên các cổng riêng và tạo nhóm source/replica GTID với cấu hình, log và quản lý dữ liệu theo từng instance trong FlyEnv.'
---

# MariaDB Cluster trong FlyEnv

Plugin MariaDB Cluster chạy nhiều instance MariaDB cùng lúc trên các cổng riêng biệt. Giữ các cơ sở dữ liệu độc lập cho những dự án khác nhau hay tạo một nhóm source/replica GTID, với cấu hình, log và thư mục dữ liệu riêng cho từng thành viên.

Cài **MariaDB Cluster** từ **[Settings → Plugin Market](/vi/features/plugin-market)**. Các tab **MariaDB instances**, **Services** và **Versions** của nó khả dụng trên macOS, Windows và Linux; các phiên bản cơ sở dữ liệu cài được phụ thuộc vào nền tảng và nguồn của bạn.

![Plugin Market FlyEnv hiển thị plugin MariaDB Cluster và các điều khiển cài đặt của nó](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-market.webp)

## Nhiều instance từ các phiên bản MariaDB đã cài

Dùng **Versions** để cài MariaDB qua các nguồn sẵn có của FlyEnv, rồi chọn một bản cài khi tạo instance. Plugin đòi hỏi **MariaDB 10.4 trở lên**. Nhiều instance có thể dùng chung một bản cài chương trình nhưng dùng các thư mục dữ liệu riêng; các instance độc lập có thể chọn các phiên bản đã cài khác nhau. Các bản cài MySQL không được chấp nhận làm engine MariaDB.

Tab **Services** liệt kê các bản cài, còn **MariaDB instances** cung cấp các điều khiển khởi động, dừng và khởi động lại cho những cơ sở dữ liệu do plugin này tạo. Plugin chặn việc gỡ cài một phiên bản mà các instance đang chạy còn dùng.

![Khung nhìn instance MariaDB Cluster với một cơ sở dữ liệu độc lập và một nhóm source/replica](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-instances.webp)

## Tạo một cơ sở dữ liệu độc lập

Chọn **Create → Standalone**, nhập **Cluster name**, chọn **MariaDB version** và đặt **Root password** ban đầu. Xem lại **Instance name**, **TCP port**, **Socket** trên macOS/Linux hay **Named pipe** trên Windows, và **Data directory** được sinh. Nhập trực tiếp đường dẫn dữ liệu hay chọn nó bằng nút thư mục.

Biểu mẫu báo thiếu trường, tên trùng, cổng hay điểm cuối local xung đột, và thư mục dữ liệu chồng lấn ngay cạnh các trường liên quan. Mỗi instance cần một thư mục dữ liệu và một điểm cuối kết nối riêng.

![Hộp thoại tạo standalone MariaDB với chọn phiên bản, Root password và thiết lập instance](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-standalone.webp)

Plugin tạo **cơ sở dữ liệu local trống mới**. Nó không nhập hay nhân bản một cơ sở dữ liệu sẵn có. Trước khi chỉnh một instance, hãy dừng nó; tên, cổng và điểm cuối local có thể thay đổi, còn thư mục dữ liệu đã khởi tạo, phiên bản engine và cấu trúc topology không thể thay thế qua biểu mẫu. Một thư mục dữ liệu trống có thể được đổi trước khi khởi tạo.

## Một source với các replica GTID

Chọn **Source / replica** và đặt số replica, từ **1 đến 15**. Mọi thành viên phải dùng **cùng một bản cài MariaDB**. Xem lại cổng, Socket hay named pipe và thư mục dữ liệu được sinh của từng thành viên trước khi xác nhận.

FlyEnv chuẩn bị replication GTID, một tài khoản replication, các replica chỉ đọc và các kênh replication. Danh sách instance hiển thị vai trò source và replica cạnh trạng thái tiến trình và độ trễ replication.

![Hộp thoại tạo source/replica MariaDB với số replica và cổng, thư mục theo từng thành viên](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-replication.webp)

MariaDB tiếp tục các kênh replication đã lưu của nó sau khi khởi động lại. Khi cần cấu hình tường minh hay phục hồi, hãy khởi động mọi thành viên, chọn **Configure / recover replication** và cung cấp thông tin đăng nhập Root hiện tại. Các thao tác khởi động, dừng và khởi động lại thông thường không cần đăng nhập cơ sở dữ liệu.

Plugin cung cấp chế độ standalone và chế độ source/replica GTID. Nó không cấu hình Galera, không tự động thăng cấp một replica, và không cung cấp router hay cổng kết nối hợp nhất. Mọi thành viên chạy trên cùng một máy, nên một nhóm local không bảo vệ khỏi hỏng hóc của chính máy đó. Với Group Replication single-primary trên MySQL, hãy dùng **[MySQL Cluster](/vi/features/mysql-cluster)**.

## Điều khiển, cấu hình và log theo từng instance

Khởi động, dừng hay khởi động lại một cơ sở dữ liệu ngay từ hàng của nó, hay tác động lên mọi thành viên từ đầu nhóm. Công tắc thanh bên điều khiển tất cả instance MariaDB Cluster. Tiến trình thao tác hiển thị trên các điều khiển liên quan; cột **State** báo trạng thái tiến trình tách riêng với tình trạng replication.

Menu hành động mở cấu hình, log lỗi, log truy vấn chậm, thông tin kết nối của instance đang chọn và khung nhìn **Data management**. Thay đổi cấu hình có hiệu lực ở lần khởi động lại kế tiếp; các tùy chọn định danh và replication được quản lý vẫn được bảo vệ. Nhấp một địa chỉ Socket để sao chép nó cho client local.

Quản lý dữ liệu cung cấp danh sách cơ sở dữ liệu và người dùng, tạo cơ sở dữ liệu và cấp quyền người dùng, đổi mật khẩu, ghi chú, một thư mục sao lưu và xuất các cơ sở dữ liệu được chọn. Hãy dùng source cho việc ghi: plugin giữ nguyên hạn chế chỉ đọc của các replica. Thông tin đăng nhập được cô lập theo từng instance và có thể được ghi nhớ tường minh trên thiết bị; nếu không, mật khẩu Root của instance mới chỉ nằm trong phiên hiện tại.

### Duyệt với DbGate

Khi một instance đang chạy, biểu tượng DbGate cạnh tiêu đề khung nhìn instance sẽ mở khung duyệt cơ sở dữ liệu dùng chung của FlyEnv. Nó đòi hỏi một runtime **Node.js** đã cài và sẵn sàng dùng, kể cả khi module Node.js bị ẩn. Nếu thiếu DbGate, việc mở khung sẽ khởi động cài đặt của nó; một bản cài toàn cục sẵn có sẽ được tái sử dụng.

MariaDB Cluster dùng chung khung đó với MongoDB và MySQL Cluster. Dừng instance MariaDB Cluster cuối cùng sẽ đóng khung toàn cục; khi cần, hãy mở nó từ một module khác.

## Gỡ bỏ vẫn giữ các tệp cơ sở dữ liệu

Xóa một instance hay nhóm sẽ dừng các thành viên liên quan và gỡ bản ghi quản lý của chúng sau khi xác nhận. **Các tệp cơ sở dữ liệu được giữ lại**, và cấu hình cùng log vẫn xem được. Gỡ cài một engine qua plugin cũng giữ lại các cơ sở dữ liệu của instance. Sau một thao tác bị gián đoạn, hãy kiểm tra các tệp đã lưu và kết quả thành viên được báo trước khi thử lại.

Với quy trình một dịch vụ chuẩn, xem **[module MariaDB](/vi/features/mariadb)** tích hợp sẵn. Quay lại **[Plugin Market](/vi/features/plugin-market)** để cập nhật, vô hiệu hóa hay gỡ tích hợp plugin.
