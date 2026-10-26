---
layout: doc
titleTemplate: false
title: 'Plugin MySQL Cluster: nhiều instance và replication | FlyEnv'
description: 'Chạy nhiều instance MySQL local, tạo nhóm source/replica GTID và quản lý Group Replication single-primary với plugin MySQL Cluster của FlyEnv.'
---

# MySQL Cluster trong FlyEnv

Plugin MySQL Cluster chạy nhiều instance MySQL local cùng lúc, mỗi instance có cổng, Socket hay named pipe Windows, thư mục dữ liệu, cấu hình và log riêng. Dùng nó cho các cơ sở dữ liệu độc lập, một nhóm source/replica GTID hay Group Replication single-primary.

Cài **MySQL Cluster** từ **[Settings → Plugin Market](/vi/features/plugin-market)**. Module thêm các tab **MySQL instances**, **Services** và **Versions** trên macOS, Windows và Linux; các bản cài cơ sở dữ liệu khả dụng phụ thuộc vào nền tảng và nguồn cài của bạn.

![Khung nhìn instance MySQL Cluster với các phiên bản MySQL độc lập và một nhóm source/replica đang chạy](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-instances.webp)

## Tái sử dụng các phiên bản MySQL đã cài

Tab **Versions** dùng các nguồn cài MySQL sẵn có của FlyEnv. Cài một phiên bản ở đó, hay chọn một bản cài sẵn có khi tạo instance. Vài instance có thể dùng chung một bản cài chương trình nhưng giữ các tệp cơ sở dữ liệu riêng. Các instance standalone khác nhau có thể dùng các phiên bản MySQL khác nhau.

Tab **Services** liệt kê các bản cài cơ sở dữ liệu; các điều khiển vòng đời instance nằm trong **MySQL instances**. Một phiên bản đang được các instance cluster sử dụng không thể gỡ qua plugin cho tới khi những instance đó dừng.

## Tạo một instance độc lập

Chọn **Create → Standalone**. Nhập **Cluster name**, chọn **MySQL version**, đặt **Root password** ban đầu và xem lại các thiết lập instance được sinh:

- **Instance name** và **TCP port** định danh cơ sở dữ liệu mà bạn sẽ kết nối tới.
- **Socket** trên macOS/Linux, hay **Named pipe** trên Windows, cho mỗi instance một điểm cuối local riêng.
- **Data directory** có thể nhập trực tiếp hay chọn bằng nút thư mục.

Biểu mẫu xác hợp lệ tên, xung đột cổng, xung đột Socket hay pipe và thư mục dữ liệu chồng lấn. Instance standalone hỗ trợ các bản build MySQL 5.7 với `--initialize-insecure`, cùng các phiên bản mới hơn được hỗ trợ.

![Tạo một instance MySQL standalone với phiên bản, cổng, Socket và thư mục dữ liệu đã chọn](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-standalone.webp)

Việc tạo sẽ khởi tạo một cơ sở dữ liệu trống mới. Các cơ sở dữ liệu sẵn có không được nhập, nhân bản hay ghi đè. Hãy dừng instance trước khi chỉnh sửa; một thư mục dữ liệu đã khởi tạo và phiên bản engine đã chọn của nó không thể thay thế qua biểu mẫu này.

## Tạo một nhóm source/replica GTID

Chọn **Source / replica**, chọn một bản cài MySQL và đặt số replica. Plugin chuẩn bị một source và từ **1 đến 15 replica**, gồm replication GTID, tài khoản replication, các replica chỉ đọc và các kênh replication.

Mọi thành viên dùng **cùng một bản cài**, với yêu cầu **MySQL 8.0.13 trở lên**. Xem lại tên, cổng, Socket hay pipe và thư mục dữ liệu được sinh của từng thành viên trước khi tạo nhóm.

![Hộp thoại tạo source/replica MySQL với số replica và thiết lập kết nối theo từng thành viên](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-replication.webp)

Danh sách instance nhận diện vai trò source và replica và gồm cả độ trễ replication. Các thao tác khởi động, dừng và khởi động lại thông thường dùng trạng thái tiến trình và không cần thông tin đăng nhập Root. MySQL tiếp tục các kênh replication đã lưu sau khi khởi động lại; hãy dùng **Configure / recover replication** khi bạn cần cấu hình hay sửa replication một cách tường minh, chẳng hạn sau khi đổi cổng source. Khởi động mọi thành viên trước và cung cấp thông tin đăng nhập Root hiện tại của nó.

Nhóm source/replica không tự động thăng cấp một replica nếu source dừng.

## Group Replication single-primary

Chọn **Group Replication** để tạo **3, 5, 7 hay 9 thành viên local**. Chế độ này đòi hỏi **MySQL 8.0.27 trở lên** và một bản build có sẵn plugin Group Replication. FlyEnv dùng chế độ single-primary và giao tiếp XCom; các cổng SQL và các cổng giao tiếp GR phải duy nhất.

![Hộp thoại tạo Group Replication MySQL với số node và các cổng SQL, cổng giao tiếp GR riêng biệt](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-group-replication.webp)

MySQL tự xử lý bầu chọn primary trong một nhóm đang chạy. FlyEnv hiển thị vai trò các thành viên và cung cấp **Configure / recover replication** cho việc phục hồi tường minh sau khi thành viên rời nhóm hay cả nhóm dừng. Hãy khởi động mọi thành viên và cung cấp thông tin đăng nhập Root trước khi phục hồi. Plugin kiểm tra lịch sử giao dịch của các thành viên và từ chối bootstrap không an toàn khi lịch sử lệch nhau hay không xác nhận được trạng thái thành viên. Một thành viên ngoài nhóm vẫn chỉ đọc sau khi khởi động lại.

Đây là các nhóm phát triển local: mọi node chia sẻ cùng biên giới hỏng hóc của một máy. Plugin không thêm MySQL Router hay một điểm cuối kết nối duy nhất; hãy kết nối tới cổng của thành viên phù hợp. Nó không tạo NDB Cluster hay một triển khai nhiều máy.

## Điều khiển instance và kiểm tra dữ liệu

Dùng các điều khiển trên một hàng để khởi động, dừng hay khởi động lại instance đó, hay dùng đầu nhóm để tác động lên mọi thành viên của nó. Công tắc thanh bên khởi động hay dừng mọi instance của plugin. Cột **State** báo tiến trình có đang chạy hay không; tình trạng replication tách riêng với trạng thái tiến trình.

Menu hành động của từng instance cung cấp:

- **Edit configuration**, với thay đổi áp dụng ở lần khởi động lại kế tiếp và các thiết lập định danh/replication được quản lý vẫn được bảo vệ.
- Khung xem **Error log** và **Slow query log** cho instance đó.
- **Connection information**, cùng địa chỉ Socket nhấp được để sao chép.
- **Data management**, với danh sách cơ sở dữ liệu và người dùng, tạo cơ sở dữ liệu và cấp quyền, đổi mật khẩu, ghi chú, thư mục sao lưu và xuất các cơ sở dữ liệu được chọn.

Việc ghi trong quản lý cần source ghi được hay primary hiện tại. Các thành viên chỉ đọc giữ nguyên hạn chế ghi của chúng. Thông tin đăng nhập Root được cô lập theo instance; mật khẩu mới chỉ nằm trong phiên trừ khi bạn chọn ghi nhớ tường minh trên thiết bị.

### Mở DbGate trong trình duyệt

Khi một instance đang chạy, biểu tượng DbGate cạnh tiêu đề khung nhìn instance sẽ mở khung trình duyệt. Cần một runtime **Node.js** đã cài và sẵn sàng dùng; module Node.js có thể giữ ẩn trên thanh bên. Lần mở đầu cài DbGate nếu cần, các lần sau tái sử dụng bản DbGate dùng chung của FlyEnv.

![Khung DbGate trong trình duyệt kết nối tới một instance MySQL local với một bảng đang mở](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-dbgate.webp)

Khung này dùng chung với MongoDB và MariaDB Cluster. Dừng instance MySQL Cluster cuối cùng sẽ đóng khung toàn cục; một module khác có thể mở lại khi cần.

## Giữ tệp cơ sở dữ liệu khi gỡ nhóm

Xóa một instance hay nhóm sẽ dừng các thành viên của nó và gỡ bản ghi quản lý sau khi xác nhận. **Các tệp cơ sở dữ liệu được giữ lại**, cùng cấu hình và log vẫn xem được. Gỡ một bản cài cơ sở dữ liệu qua plugin cũng giữ lại các tệp cơ sở dữ liệu của instance. Sau một thao tác bị gián đoạn, hãy kiểm tra các tệp đã lưu và kết quả theo từng thành viên trước khi thử lại.

Dùng **[MariaDB Cluster](/vi/features/mariadb-cluster)** cho instance MariaDB và replication GTID, hay quay lại **[Plugin Market](/vi/features/plugin-market)** để quản lý tích hợp.
