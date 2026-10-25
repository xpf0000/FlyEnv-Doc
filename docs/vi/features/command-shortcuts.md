---
layout: doc
titleTemplate: false
title: 'Plugin Command Shortcuts: lệnh đã lưu theo thư mục | FlyEnv'
description: 'Tổ chức các lệnh terminal trong các thẻ thư mục, kéo để sắp xếp lại và chạy lệnh đã lưu trong đúng thư mục với plugin Command Shortcuts của FlyEnv.'
---

# Command Shortcuts trong FlyEnv

Command Shortcuts giữ các lệnh terminal thường dùng ngay cạnh những thư mục mà bạn chạy chúng. Mỗi thư mục có một thẻ chứa đường dẫn và các lệnh đã lưu của nó, nhờ đó bạn có thể khởi động một tác vụ của dự án mà không phải lặp lại việc tìm thư mục và gõ lại cùng một lệnh.

Cài **Command Shortcuts** từ **[Settings → Plugin Market](/vi/features/plugin-market)**, rồi mở mục thanh bên của nó. Nó dùng terminal hệ thống sẵn có của bạn trên macOS, Windows hay Linux và không có service runtime nào phải cài thêm.

![Các thẻ thư mục Command Shortcuts với các lệnh đã lưu, nút chạy và hành động thư mục](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-folder-cards.png)

## Thêm một thư mục và các lệnh của nó

Chọn **Add folder**, nhập một tên rồi chọn hay gõ đường dẫn tuyệt đối của một thư mục sẵn có. Biểu tượng thẻ tự động dùng ký tự đầu của tên thư mục.

Bên trong thẻ thư mục, chọn **Add command**. Đặt một mô tả cho lệnh và nhập nội dung lệnh; lệnh nhiều dòng được hỗ trợ. Bạn có thể giữ vài tác vụ trong cùng một thẻ, chẳng hạn một development server, một lệnh build và một lệnh test.

Dùng các điều khiển chỉnh sửa để cập nhật tên hay đường dẫn của thư mục, hay đổi mô tả và nội dung của một lệnh đã lưu. Lệnh chạy trong thư mục hiện đang được gắn với thẻ của nó.

![Hộp thoại Edit command của Command Shortcuts với mô tả, nội dung lệnh và gợi ý PowerShell trên Windows](https://oss.macphpstudy.com/image/features/plugin/command-shortcuts-edit-command.png)

## Chạy trong terminal hệ thống

Nhấp nút **Run in terminal** của một lệnh để mở terminal hệ thống tại đường dẫn của thư mục và thi hành lệnh đó. FlyEnv xác minh thư mục trước khi bàn giao tác vụ; một lần đổi thư mục thất bại sẽ chặn việc thi hành lệnh.

Cú pháp lệnh theo shell của nền tảng:

- **macOS:** Terminal với shell mặc định của nó.
- **Windows:** PowerShell.
- **Linux:** Bash trong một terminal hệ thống được hỗ trợ và sẵn có.

Hãy đọc đầu ra, trả lời các prompt và kiểm tra trạng thái thoát của lệnh trong cửa sổ terminal. Thông báo bàn giao của FlyEnv chỉ xác nhận yêu cầu đã được gửi tới terminal; terminal cho thấy bản thân lệnh có thành công hay không.

Lệnh chỉ chạy khi bạn nhấp nút chạy của chúng. Các terminal đã mở vẫn nằm trong tầm kiểm soát của bạn; rời module hay thoát FlyEnv không chấm dứt chúng.

## Mở một thư mục mà không chạy lệnh

Nhấp vào đường dẫn thư mục màu vàng để mở thư mục trong trình quản lý tệp của hệ thống. Dùng **Open in terminal** ở chân thẻ để mở một terminal tại thư mục đó mà không chạy lệnh đặt sẵn. Hành động này cũng hoạt động khi thẻ chưa chứa lệnh nào.

## Sắp xếp lại và duy trì bộ sưu tập

Kéo tay cầm cạnh tiêu đề một thư mục để sắp xếp lại các thẻ thư mục. Kéo tay cầm của một lệnh để sắp xếp lại các lệnh trong thư mục đó. Cả hai thứ tự đều được lưu tự động; việc kéo không di chuyển lệnh giữa các thư mục.

Xóa một lệnh sẽ gỡ bỏ mục đã lưu của nó. Xóa một thư mục sẽ hỏi xác nhận và gỡ thẻ cùng toàn bộ lệnh đã lưu của nó, trong khi vẫn giữ các tệp trên đĩa. Bản ghi thư mục, nội dung lệnh và thứ tự được giữ qua các lần cập nhật plugin; plugin không chủ động xóa chúng khi bị vô hiệu hóa hay gỡ cài đặt.

Dùng **[Startup Groups](/vi/features/startup-groups)** để khởi động workspace theo nhóm, hay **[User Modules](/vi/features/user-modules)** cho một lệnh kèm điều khiển vòng đời dịch vụ được quản lý. Command Shortcuts dành cho các tác vụ mà bạn khởi động và tương tác ngay trong terminal.
