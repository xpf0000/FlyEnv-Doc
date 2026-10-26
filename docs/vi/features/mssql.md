---
layout: doc
titleTemplate: false
title: 'Plugin SQL Server: quản lý cơ sở dữ liệu trên Windows và Ubuntu | FlyEnv'
description: 'Cài đặt và quản lý Microsoft SQL Server trong FlyEnv trên Windows x64 và Ubuntu. Dùng điều khiển dịch vụ native, thiết lập theo nền tảng và log cơ sở dữ liệu.'
---

# SQL Server trong FlyEnv

Plugin SQL Server thêm engine cơ sở dữ liệu của Microsoft vào FlyEnv, với các tab **Service**, **Version Manager** và **Log**. Cài **SQL Server** từ **[Settings → Plugin Market](/vi/features/plugin-market)**, rồi mở mục thanh bên của nó để cài và quản lý phần mềm cơ sở dữ liệu.

Plugin hỗ trợ **Windows x64** và **Ubuntu 22.04 hay 24.04 x64**. Nó không cung cấp runtime cho macOS hay ARM64. Việc cài đặt và hành vi dịch vụ khác nhau giữa Windows và Ubuntu.

## Quản lý phiên bản

Mở **Version Manager** để làm mới các bản phát hành khả dụng và cài một phiên bản cho nền tảng của bạn.

- **Windows:** danh mục cung cấp các mục Express và Developer cho những bản phát hành SQL Server được chọn. FlyEnv tải phương tiện cài đặt chính thức của Microsoft và chạy SQL Server Setup để cài một named instance.
- **Ubuntu:** FlyEnv đọc các kho gói Microsoft khả dụng cho bản Ubuntu của bạn, xác minh checksum của gói và giải nén engine vào thư mục runtime do nó quản lý. Một kho phải khả dụng thì một phiên bản mới xuất hiện.

Tiến trình cài đặt hiển thị trong module. Khi cài xong, instance được liệt kê trong **Service**; việc cài nó không có nghĩa là cơ sở dữ liệu đã chạy sẵn.

![Danh sách phiên bản SQL Server trên Windows với các tùy chọn cài Express và Developer](https://oss.macphpstudy.com/image/features/plugin/sql-server-versions.png)

## Dịch vụ và cấu hình trên Windows

FlyEnv dùng các điều khiển dịch vụ Windows native để khởi động và dừng instance được chọn. Các instance do plugin cài dùng chế độ khởi động dịch vụ **Manual**, nên cơ sở dữ liệu chỉ khởi động khi được yêu cầu. Việc cài đặt và chuẩn bị dịch vụ có thể cần phê duyệt quản trị viên Windows; hãy làm theo mọi thông báo khởi động lại trước khi khởi động một instance mới cài.

Menu hành động dịch vụ có **Configuration Management**, mở SQL Server Configuration Manager cho bản phát hành được chọn. Hãy dùng công cụ native đó cho cấu hình dịch vụ và mạng của SQL Server. Biểu mẫu mật khẩu và cổng `sa` trên Ubuntu của plugin không dùng cho việc cài đặt trên Windows.

Với các instance do plugin quản lý và đủ điều kiện, **Repair permissions** có thể khôi phục quyền truy cập mà thao tác dịch vụ và log của FlyEnv cần. Nếu trình xem log báo truy cập bị từ chối, hãy chạy hành động đó rồi làm mới log.

## Thiết lập Ubuntu và lần khởi động đầu

Ubuntu chạy engine đã giải nén qua **Bubblewrap**, giữ các tệp hệ thống và cơ sở dữ liệu ghi được bên trong thư mục dữ liệu của FlyEnv. Hãy cài gói `bubblewrap` và bảo đảm hệ thống cho phép unprivileged user namespace trước khi khởi động dịch vụ.

Dùng nút thiết lập trên tab **Service** để đặt **sa Password** và **Port** ban đầu. Cổng mặc định là **1433**. Mật khẩu phải chứa ít nhất tám ký tự và gồm ba trong số chữ hoa, chữ thường, chữ số và ký hiệu. FlyEnv yêu cầu các thiết lập này trong lúc cài nếu mật khẩu ban đầu còn thiếu.

Mật khẩu khởi tạo tài khoản `sa` tích hợp ở lần khởi động đầu. Chỉnh thiết lập này về sau không đặt lại một tài khoản cơ sở dữ liệu sẵn có. Dùng các điều khiển dịch vụ để khởi động, dừng hay khởi động lại engine đã cài.

## Log và gỡ runtime

Tab **Log** theo dõi log lỗi cơ sở dữ liệu của instance được chọn. Trên Ubuntu, nó quay sang đầu ra khởi động hay log lỗi khi log của engine chưa được tạo. Các khung nhìn này giúp nhận diện lỗi lần khởi động đầu cùng các vấn đề cấu hình hay phân quyền.

Trên Ubuntu, **Version Manager** có thể gỡ một runtime đã giải nén do plugin quản lý sau khi xác nhận và sau khi dịch vụ dừng; các tệp cơ sở dữ liệu được lưu tách biệt. Việc gỡ phần mềm trên Windows dùng chính công cụ cài đặt của SQL Server.

Việc plugin khả dụng không đảm bảo mọi bản phát hành SQL Server đều chạy trên mọi phiên bản OS được hỗ trợ. Hãy dùng danh sách phiên bản trong ứng dụng và chẩn đoán cài đặt cho máy của bạn. Quay lại **[Plugin Market](/vi/features/plugin-market)** để quản lý chính tích hợp này.
