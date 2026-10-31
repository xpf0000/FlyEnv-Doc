---
title: 'Quản lý người dùng và mật khẩu cơ sở dữ liệu trong FlyEnv'
head:
  - - meta
    - name: description
      content: 'Quản lý người dùng và mật khẩu cho MySQL, MariaDB, PostgreSQL và MongoDB trong FlyEnv, bao gồm tạo cơ sở dữ liệu và đặt lại mật khẩu.'
---

# Quản lý người dùng cơ sở dữ liệu & cấu hình mật khẩu trong FlyEnv

Quản lý người dùng và mật khẩu cơ sở dữ liệu là một phần then chốt của phát triển local. FlyEnv đơn giản hóa việc này bằng các công cụ quản lý tích hợp sẵn cho mọi cơ sở dữ liệu được hỗ trợ—không cần dòng lệnh.

## Mật khẩu tài khoản ban đầu

Khi lần đầu cài một cơ sở dữ liệu qua FlyEnv, các thông tin đăng nhập mặc định được thiết lập vì lý do bảo mật và tiện lợi:

| Cơ sở dữ liệu | Tên người dùng | Mật khẩu ban đầu              |
|----------|-------|-------------------------------|
| **MySQL** | root  | root                          |
| **MariaDB** | root  | root                          |
| **PostgreSQL** | root  | Không có (mặc định không đặt mật khẩu) |
| **MongoDB** | -     | Không có (mặc định không bật xác thực)     |

**Quan trọng**: Hãy đổi mật khẩu mặc định trước khi mở cơ sở dữ liệu ra mạng.

## Giao diện quản lý cơ sở dữ liệu tích hợp sẵn (MySQL & MariaDB)

FlyEnv hiện bao gồm một giao diện quản lý tích hợp mạnh mẽ cho MySQL và MariaDB—không cần công cụ bên ngoài cho các thao tác thông thường.

### Truy cập giao diện quản lý

1. Mở FlyEnv → module **MySQL** hoặc **MariaDB**
2. Nhấp menu popover **"Manage"**
3. Giao diện quản lý tự động tải lên

![Giao diện quản lý cơ sở dữ liệu](https://oss.macphpstudy.com/image/database-1.webp)

### Các thao tác cơ sở dữ liệu một cú nhấp

#### Tạo cơ sở dữ liệu mới

Nhanh chóng tạo cơ sở dữ liệu mà không phải viết SQL:

1. Nhấp nút **"Create Database"**
2. Nhập tên cơ sở dữ liệu
3. Nhập tên người dùng của cơ sở dữ liệu
4. Chọn bộ ký tự (khuyến nghị utf8mb4)
5. Nhấp **"Save"**

Cơ sở dữ liệu được tạo ngay lập tức—sẵn sàng cho ứng dụng của bạn.

![Hộp thoại tạo cơ sở dữ liệu](https://oss.macphpstudy.com/image/database-2.webp)

#### Đặt lại mật khẩu root

Quên mật khẩu root? Đặt lại chỉ với một cú nhấp:

1. Nhấp **"Reset Root Password"**
2. Nhập mật khẩu mới
3. Xác nhận mật khẩu
4. Nhấp **"Update"**

Không cần dừng dịch vụ hay tự tay sửa các tệp cấu hình.

![Đặt lại mật khẩu root](https://oss.macphpstudy.com/image/database-3.webp)

### Vì sao nên dùng giao diện tích hợp?

| Tác vụ | Dòng lệnh | Giao diện FlyEnv |
|------|-------------|------------------|
| Tạo cơ sở dữ liệu | Viết SQL + thực thi | 2 cú nhấp |
| Đặt lại mật khẩu root | Dừng dịch vụ, sửa tệp, khởi động lại | 1 cú nhấp |
| Liệt kê người dùng | Truy vấn SQL | Hiển thị tự động |
| Đổi mật khẩu người dùng | Truy vấn SQL | 1 cú nhấp |

**Tiết kiệm thời gian**: Những thao tác từng đòi hỏi nhiều lệnh nay chỉ còn mất vài giây.

## Các client cơ sở dữ liệu bên ngoài

Dù giao diện tích hợp của FlyEnv đáp ứng phần lớn nhu cầu, bạn có thể ưa chuộng các client cơ sở dữ liệu chuyên dụng cho những thao tác phức tạp:

### Các client được khuyến nghị

| Client | Nền tảng | Phù hợp nhất cho |
|--------|----------|----------|
| [phpMyAdmin](https://www.phpmyadmin.net/) | Web | Giao diện web quen thuộc |
| [Navicat](https://www.navicat.com/) | Win/Mac | Tính năng chuyên nghiệp |
| [MySQL Workbench](https://www.mysql.com/products/workbench/) | Tất cả | Công cụ MySQL chính chủ |
| [DataGrip](https://www.jetbrains.com/datagrip/) | Tất cả | Tích hợp IDE |
| [DbGate](https://dbgate.org/) | Web | Web UI hiện đại |
| [DBeaver](https://dbeaver.io/) | Tất cả | Miễn phí, đa cơ sở dữ liệu |

### Kết nối tới cơ sở dữ liệu của FlyEnv

Dùng các thông tin kết nối sau với client bên ngoài:

```
Host: 127.0.0.1 (or localhost)
Port: 3306 (MySQL/MariaDB)
      5432 (PostgreSQL)
      27017 (MongoDB)
Username: root (MySQL/MariaDB)
          root (PostgreSQL)
Password: [Your configured password]
```

## Thực hành bảo mật tốt nhất

### Phát triển local

1. **Đổi mật khẩu mặc định** - Đừng dùng "root" hay thông tin đăng nhập mặc định
2. **Giới hạn host truy cập** - Dùng 'localhost' thay vì '%' (bất kỳ host nào)
3. **Tạo người dùng riêng cho từng ứng dụng** - Đừng dùng root cho các ứng dụng
4. **Sao lưu định kỳ** - Xuất cơ sở dữ liệu trước các thay đổi lớn

### Trước khi mở ra mạng

Nếu buộc phải mở cơ sở dữ liệu ra mạng:

1. **Mật khẩu mạnh** - Tối thiểu 16 ký tự, hoa-thường xen kẽ, số, ký hiệu
2. **Quy tắc tường lửa** - Giới hạn cho các địa chỉ IP cụ thể
3. **Kết nối SSL** - Bật kết nối mã hóa
4. **Tắt truy cập root từ xa** - Tạo người dùng giới hạn quyền cho truy cập từ xa

## Khắc phục sự cố

### "Access denied for user 'root'@'localhost'"

**Giải pháp**: Dùng tính năng "Reset Root Password" của FlyEnv trong tab Database.

### "Can't connect to MySQL server"

**Cần kiểm tra**:
1. Dịch vụ MySQL/MariaDB đang chạy trong FlyEnv
2. Cổng đúng (mặc định 3306)
3. Tường lửa không chặn kết nối localhost

### Lỗi "Unknown database"

**Giải pháp**: Tạo cơ sở dữ liệu trước bằng giao diện tích hợp của FlyEnv hoặc công cụ migration của ứng dụng bạn.

### Mật khẩu không hoạt động sau khi đặt lại

**Giải pháp**: 
1. Bảo đảm dịch vụ MySQL/MariaDB đang chạy trong lúc đặt lại mật khẩu
2. Thử khởi động lại dịch vụ cơ sở dữ liệu
3. Kiểm tra xem có nhiều bản cài MySQL xung đột nhau không

## Câu hỏi thường gặp (FAQ)

**H: Tôi có thể dùng giao diện tích hợp cho PostgreSQL hoặc MongoDB không?**
Đ: Hiện tại, giao diện quản lý trực quan chỉ khả dụng cho MySQL và MariaDB. PostgreSQL và MongoDB cần client bên ngoài hoặc quản lý bằng dòng lệnh.

**H: Việc đặt lại mật khẩu root có ảnh hưởng đến các cơ sở dữ liệu hiện có của tôi không?**
Đ: Không. Đặt lại mật khẩu chỉ thay đổi thông tin xác thực—toàn bộ dữ liệu của bạn vẫn nguyên vẹn.

**H: Tôi có thể nhập cơ sở dữ liệu hiện có vào FlyEnv không?**
Đ: Có. Hãy dùng client bên ngoài tùy chọn của bạn để kết nối tới cơ sở dữ liệu của FlyEnv và nhập các SQL dump.

**H: Làm sao sao lưu cơ sở dữ liệu của tôi?**
Đ: Dùng các client bên ngoài như DBeaver hoặc công cụ dòng lệnh: `mysqldump -u root -p database_name > backup.sql`

**H: Tôi có thể chạy nhiều phiên bản cơ sở dữ liệu cùng lúc không?**
Đ: Có. FlyEnv hỗ trợ chạy các phiên bản MySQL/MariaDB khác nhau trên các cổng khác nhau.

**H: Giao diện tích hợp có an toàn không?**
Đ: Có. Nó chỉ kết nối qua localhost và tuân thủ toàn bộ hệ thống phân quyền của MySQL.

## Tóm tắt

Quản lý cơ sở dữ liệu tích hợp sẵn của FlyEnv mang lại sự tiện lợi cho phát triển local:
- ✅ Tạo cơ sở dữ liệu một cú nhấp
- ✅ Quản lý người dùng trực quan
- ✅ Đặt lại mật khẩu tức thì
- ✅ Quản lý phân quyền không cần SQL

Với phần lớn tác vụ phát triển, có thể bạn sẽ không bao giờ cần đến một client cơ sở dữ liệu bên ngoài nữa.
