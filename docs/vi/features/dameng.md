---
layout: doc
titleTemplate: false
title: 'Plugin Dameng DM8: cài đặt và khởi tạo cơ sở dữ liệu | FlyEnv'
description: 'Cài Dameng DM8, khởi tạo một cơ sở dữ liệu và quản lý dịch vụ, cấu hình cùng log của nó trong FlyEnv trên Windows x64 và Ubuntu 22.04.'
---

# Dameng DM8 trong FlyEnv

Plugin Dameng DM8 đưa việc cài đặt cơ sở dữ liệu, khởi tạo và các điều khiển dịch vụ native vào FlyEnv. Module của nó gồm các tab **Service**, **Version Manager**, **Config File** và **Log**, cộng thêm thông tin phiên bản instance và giấy phép.

Cài **Dameng DM8** từ **[Settings → Plugin Market](/vi/features/plugin-market)**. Plugin hỗ trợ **Windows x64 native** và **Ubuntu 22.04 x64**. macOS, ARM64 và các bản Linux khác không được bản build này hỗ trợ.

## Chọn thư mục cài đặt

Mở **Version Manager**, chọn **Install** rồi chọn hay nhập thư mục chương trình cuối cùng. Mỗi tên thư mục trong đường dẫn, kể cả các thư mục cha, chỉ được dùng **chữ cái tiếng Anh, chữ số và dấu gạch dưới**. Khoảng trắng, ký tự tiếng Trung, dấu chấm và dấu gạch nối không được trình cài đặt hỗ trợ.

Đích đến phải trống. FlyEnv kiểm tra đích và dung lượng trống trước khi tải gói chính thức. Xác nhận hộp thoại để bắt đầu; hủy bỏ thì việc tải sẽ không được khởi động. Sau khi cài, FlyEnv thêm chính xác đường dẫn đó vào **Custom version directories** để cơ sở dữ liệu xuất hiện trong danh sách dịch vụ.

Dữ liệu cơ sở dữ liệu được lưu tách biệt với thư mục chương trình, bên trong thư mục dữ liệu của FlyEnv. Các hạn chế về đường dẫn cài đặt chương trình không đòi hỏi phải đổi tên thư mục dữ liệu của FlyEnv.

![Version Manager Dameng DM8 hiển thị một bản phát hành Windows x64 đã cài](https://oss.macphpstudy.com/image/features/plugin/dameng-versions.png)

## Khởi tạo cơ sở dữ liệu

Khởi động một bản cài chưa khởi tạo sẽ mở hộp thoại khởi tạo. Bạn cũng có thể chọn **Initialize database** từ menu hành động dịch vụ. Hủy khởi tạo thì cơ sở dữ liệu sẽ không khởi động.

Hộp thoại gồm:

- **Mật khẩu SYSDBA và SYSAUDITOR:** hai bộ thông tin đăng nhập bắt buộc riêng cho tài khoản quản trị cơ sở dữ liệu và tài khoản audit, mỗi tài khoản có một nút **Generate**.
- **Cổng:** cổng lắng nghe của cơ sở dữ liệu.
- **Page size, extent size, bảng mã và phân biệt hoa thường:** các tùy chọn tạo cơ sở dữ liệu không thể thay đổi bằng cách khởi tạo lại dữ liệu sẵn có.
- **Thiết lập tài nguyên cho phát triển:** kích thước buffer và redo log, kèm một ước tính dung lượng ban đầu.

Hãy xem lại các giá trị này trước khi xác nhận. FlyEnv khởi tạo cơ sở dữ liệu một lần và tiếp tục khởi động sau khi khởi tạo thành công; nó không ghi đè một cơ sở dữ liệu sẵn có để áp dụng các thiết lập tạo mới.

## Điều khiển dịch vụ và thông tin đăng nhập phiên

Dùng **Service** để khởi động, dừng hay khởi động lại bản cài do plugin sở hữu. Windows dùng dịch vụ DM8 native, còn Ubuntu chạy cơ sở dữ liệu dưới người dùng hiện tại.

![Tab Service Dameng DM8 với một instance Windows đang chạy, đường dẫn chương trình và các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/plugin/dameng-service.png)

Mật khẩu chỉ nằm trong phiên FlyEnv hiện tại. Sau khi khởi động lại FlyEnv, hãy nhập **mật khẩu SYSDBA hiện tại** khi được hỏi, hay mở **Session credentials / initialization defaults** từ thanh công cụ dịch vụ. Nhập mật khẩu ở đây cấp thông tin đăng nhập cho việc kiểm tra khi khởi động và các truy vấn; nó không đổi tài khoản của cơ sở dữ liệu.

![Hộp thoại thông tin đăng nhập phiên và mặc định khởi tạo của Dameng DM8](https://oss.macphpstudy.com/image/features/plugin/dameng-session-settings.png)

Hành động **Version / license information** truy vấn cơ sở dữ liệu đang chạy về phiên bản và ngày hết hạn giấy phép của nó. Hãy cung cấp mật khẩu SYSDBA hiện tại và khởi động instance trước khi yêu cầu thông tin đó.

## Cấu hình, log và gỡ bỏ

Tab **Config File** chỉnh `dm.ini` của instance đã khởi tạo; **Log** cho tiếp cận chẩn đoán cơ sở dữ liệu và khởi động. Nếu một lần cài đặt hay khởi tạo báo kết quả chưa hoàn tất, hãy kiểm tra tệp và log của nó trước khi thử lại trên cùng thư mục đó.

![Trình chỉnh sửa dm.ini Dameng DM8 hiển thị cấu hình instance và các đường dẫn dữ liệu](https://oss.macphpstudy.com/image/features/plugin/dameng-configuration.png)

Gỡ một phiên bản đã cài khỏi **Version Manager** sẽ chạy trình gỡ cài đặt chính thức sau khi instance dừng. Các tệp cơ sở dữ liệu được giữ lại. Vô hiệu hóa hay gỡ plugin FlyEnv cũng để nguyên chương trình và dữ liệu của cơ sở dữ liệu.

## Yêu cầu nền tảng

Cài đặt và đăng ký dịch vụ trên Windows cần **phê duyệt UAC**. Cài đặt trên Ubuntu cần một phiên desktop có **udisks2**, `udisksctl` và `findmnt` để gắn phương tiện cài đặt chính thức; cài đặt headless chưa được hỗ trợ. Plugin hiện tại quản lý một bản cài do nó sở hữu và không cam kết chung sống với các bản cài DM8 bên ngoài.

Quay lại **[Plugin Market](/vi/features/plugin-market)** cho các module tùy chọn khác, hay so sánh với tích hợp **[SQL Server](/vi/features/mssql)** của FlyEnv.
