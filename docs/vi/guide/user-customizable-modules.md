---
description: 'Biến một binary hay lệnh tùy chỉnh thành một module FlyEnv với quản lý phiên bản, điều khiển dịch vụ, cấu hình, và log.'
---

# Hướng dẫn module tùy chỉnh

## Giới thiệu

FlyEnv hiện bao gồm rất nhiều module tích hợp sẵn, nhưng vẫn còn nhiều module chức năng thường dùng trong phát triển chưa được tích hợp. Nếu bạn cần một module cụ thể nào đó trong FlyEnv, chúng tôi khuyến nghị trước hết hãy gửi yêu cầu của bạn qua [Discussions](https://github.com/xpf0000/FlyEnv/discussions) hoặc [Issues](https://github.com/xpf0000/FlyEnv/issues).

Để đáp ứng nhu cầu này, FlyEnv giới thiệu Custom Modules - cho phép người dùng thêm module của riêng mình trong khi vẫn giữ trải nghiệm liền mạch như các module hệ thống tích hợp sẵn.

Hướng dẫn này minh họa quy trình bằng [etcd](https://github.com/etcd-io/etcd) làm ví dụ. Tại thời điểm viết bài, FlyEnv chưa có module etcd native, dù đã có một yêu cầu đang mở (#307). Chúng tôi trân trọng mọi phản hồi của người dùng - mỗi góp ý đều giúp cải thiện FlyEnv cho tất cả mọi người.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ViKMVkh3TL8?si=whaQ5nXE1fhiT5gw" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Thêm một module tùy chỉnh

### Bước 1: Chuẩn bị binary
Tải gói binary etcd về và giải nén các tệp.

![custom-module-screen1](https://oss.macphpstudy.com/image/custom-module-screen1.png)

### Bước 2: Tạo cấu hình
Tạo một tệp cấu hình `etcd.yaml`:

```yaml
name: "etcd-flyenv-test"
listen-client-urls: "http://0.0.0.0:2379"
listen-peer-urls: "http://0.0.0.0:2380"
advertise-client-urls: "http://127.0.0.1:2379"
initial-advertise-peer-urls: "http://127.0.0.1:2380"
log-level: "info"
log-outputs: ["stdout"]
```

### Bước 3: Tạo danh mục module
1. Chuyển tới Settings → Modules
2. Nhấp vào biểu tượng cạnh "Site" để tạo một danh mục module mới

![custom-module-screen2](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### Bước 4: Thêm module mới
Trong danh mục mới của bạn, nhấp "Add" để tạo một module.

Các tùy chọn cấu hình:
- **Is Module a Service?**: Cho phép FlyEnv quản lý khởi động/dừng và thêm các công tắc điều khiển
- **Only one service can run at a time**: Dành cho các dịch vụ không nên chạy nhiều phiên bản đồng thời
- **Module Execution Items**: Các phiên bản/cấu hình khác nhau của module
- **Configuration Files**: Xuất hiện dưới dạng các tab trong bảng chính
- **Log Files**: Xuất hiện dưới dạng các tab trong bảng chính

![custom-module-screen3](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### Bước 5: Thêm Execution Item
Nhấp "Add" dưới mục Execution Items để cấu hình:

- **Run with sudo** (chỉ trên macOS): Cho các lệnh đòi hỏi đặc quyền nâng cao
- **Command/File**: Lệnh có thể thực thi hay tệp script (.sh/.ps1/.cmd/.bat)
- **PID File Path**: Dùng để giám sát trạng thái dịch vụ
- **Configuration Files**: Có thể chỉnh sửa qua popup thao tác
- **Log Files**: Có thể xem qua popup thao tác

Với ví dụ etcd của chúng ta:
```shell
cd "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64" && ./etcd --config-file "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64/etcd.yaml"
```

![custom-module-screen4](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### Bước 6: Truy cập module của bạn
Module tùy chỉnh của bạn giờ xuất hiện trong thanh bên trái. Nhấp để truy cập giao diện của nó.

![custom-module-screen5](https://oss.macphpstudy.com/image/custom-module-screen5.png)

Xem và chỉnh sửa các tệp cấu hình:

![custom-module-screen6](https://oss.macphpstudy.com/image/custom-module-screen6.png)

### Bước 7: Khởi động dịch vụ
Nhấp nút "Start" trên execution item của bạn.

![custom-module-screen7](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### Bước 8: Xác minh hoạt động
Kiểm tra Tools → Process Kill để xác nhận etcd đang chạy.

![custom-module-screen8](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### Bước 9: Giám sát log
Xem log đầu ra và log lỗi qua các nút thao tác.

![custom-module-screen9](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![custom-module-screen10](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## Kết luận
Bạn đã thêm thành công một module tùy chỉnh vào FlyEnv! Chúng tôi hoan nghênh các phản hồi và chia sẻ trải nghiệm của bạn. Với bất kỳ câu hỏi hay yêu cầu tính năng nào, vui lòng ghé các trang [Discussions](https://github.com/xpf0000/FlyEnv/discussions) hoặc [Issues](https://github.com/xpf0000/FlyEnv/issues) của chúng tôi.
