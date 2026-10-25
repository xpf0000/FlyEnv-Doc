---
title: 'Kiểm thử email local không cần Mailhog: Hướng dẫn thiết lập Mailpit'
head:
  - - meta
    - name: description
      content: 'Dùng Mailpit trong FlyEnv để bắt, xem trước và kiểm thử email ứng dụng tại local mà không gửi thư tới người nhận thật.'
---

# Kiểm thử email local không cần Mailhog: Hướng dẫn thiết lập Mailpit

Kiểm thử chức năng email trong môi trường phát triển là một cơn ác mộng. Bạn không thể gửi email thật (nguy cơ spam), các API email bên ngoài thì chậm, và dự án Mailhog đã bỏ hoang kia thì ngừng hoạt động trên chiếc Mac mới của bạn.

**Hãy đến với Mailpit** — một công cụ kiểm thử email hiện đại, được bảo trì tích cực, nhanh hơn, đẹp hơn và thực sự chạy được trên Apple Silicon. Và nó được tích hợp ngay trong FlyEnv.

## Vấn đề với Mailhog (Và vì sao bạn cần một phương án thay thế)

Mailhog là công cụ kiểm thử email local được tin dùng suốt nhiều năm. Nhưng:
- **Dự án đã bị bỏ rơi** — bản cập nhật có ý nghĩa cuối cùng vào 2021
- **Không hỗ trợ Apple Silicon** — cần Rosetta trên các máy Mac M1/M2/M3
- **Rò rỉ bộ nhớ** — tiêu thụ RAM ngày càng nhiều theo thời gian
- **Giao diện web cồng kềnh** — chưa kịp theo kịp thời đại

Mailpit là sự thay thế hiện đại: cùng khái niệm, thực thi tốt hơn.

## Mailpit là gì?

Mailpit là một công cụ kiểm thử email và SMTP với một SMTP server giả lập. Nó:
- Bắt các email gửi đi từ ứng dụng của bạn
- Hiển thị chúng trong một giao diện web để xem trước
- Hỗ trợ hiển thị HTML, xem tệp đính kèm và truy cập API
- Chạy hoàn toàn local — không có gì rời khỏi máy của bạn

Hãy nghĩ về nó như một "hố đen" cho email phát triển.

## Mailpit vs Mailhog: So sánh tính năng

| Tính năng | Mailhog (Legacy) | **Mailpit** |
|---------|-----------------|-------------|
| **Phát triển tích cực** | Không | Có |
| **Apple Silicon** | Mô phỏng | ARM64 native |
| **UI hiện đại** | Lỗi thời | Sạch, responsive |
| **Xem trước HTML** | Cơ bản | Nâng cao kèm chế độ xem mobile |
| **Chế độ tối** | Không | Có |
| **API** | Hạn chế | REST API + WebSocket |
| **Lưu trữ tin nhắn** | Chỉ trong bộ nhớ | SQLite/Cơ sở dữ liệu |
| **SMTP relay** | Không | Chuyển tiếp tới SMTP thật |

## Thiết lập Mailpit trong FlyEnv

### Bước 1: Cài Mailpit

FlyEnv biến việc này thành chuyện nhỏ:

1. Mở FlyEnv -> module Mailpit
2. Chọn phiên bản (khuyến nghị bản mới nhất)
3. Nhấp **Install**

![Cài đặt Mailpit](https://oss.macphpstudy.com/image/mailpit-1.webp)

### Bước 2: Cấu hình ứng dụng của bạn

Trỏ các cài đặt SMTP của ứng dụng về Mailpit:

**Cho PHP (Laravel/Symfony/WordPress):**
```ini
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

**Cho Node.js (Nodemailer):**
```javascript
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false
});
```

**Cho Python (Django):**
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '127.0.0.1'
EMAIL_PORT = 1025
```

**Cho Ruby on Rails:**
```yaml
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: '127.0.0.1',
  port: 1025
}
```

### Bước 3: Khởi động dịch vụ Mailpit

Trong module Mailpit của FlyEnv, nhấp nút khởi động.

![Dịch vụ Mailpit](https://oss.macphpstudy.com/image/mailpit-2.webp)

Các điểm truy cập mặc định:
- **SMTP Server**: 127.0.0.1:1025 (bắt email)
- **Web Interface**: http://127.0.0.1:8025 (xem email)

### Bước 4: Kiểm tra việc bắt email

Gửi một email kiểm thử từ ứng dụng của bạn. Mở http://127.0.0.1:8025 để xem các thư đã được bắt.

## Dùng Mailpit để kiểm thử email

### Xem trước email HTML

Nhấp vào bất kỳ thư nào để thấy:
- **Xem trước HTML** — hiển thị chính xác như người nhận nhìn thấy
- **Chế độ văn bản thuần** — nội dung dự phòng
- **Chế độ xem nguồn** — header và thân email dạng thô
- **Xem trước mobile** — kiểm thử responsive

### Xử lý tệp đính kèm

Mailpit hiển thị tệp đính kèm ngay trong thư:
- Ảnh được vẽ thành hình thu nhỏ
- PDF, tài liệu có thể tải xuống
- Giới hạn kích thước có thể cấu hình

### Truy cập API

Tự động hóa kiểm thử email trong bộ kiểm thử của bạn:

```javascript
// Example: Checking email was sent
const waitForEmail = async () => {
  const response = await fetch('http://127.0.0.1:8025/api/v1/messages');
  const data = await response.json();
  return data.messages.find(m => m.To[0].Address === 'user@example.com');
};
```

## Tính năng nâng cao

### Chuyển tiếp tin nhắn (Relay)

Bạn cần thực sự nhận một email? Cấu hình relay trong cài đặt FlyEnv để chuyển tiếp các email cụ thể tới các SMTP server thật.

### Lưu trữ tin nhắn

Khác với bộ nhớ trong của Mailhog, Mailpit dùng SQLite theo mặc định:
- Email tồn tại qua các lần khởi động lại
- Cấu hình được các chính sách lưu giữ
- Xuất lịch sử tin nhắn

## Tích hợp với các framework phổ biến

### Laravel

Bảo đảm .env trỏ tới Mailpit:
```ini
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

### WordPress

Thêm vào wp-config.php hoặc một plugin:
```php
add_action('phpmailer_init', function($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = '127.0.0.1';
    $phpmailer->Port = 1025;
    $phpmailer->SMTPAuth = false;
});
```

### Symfony

```yaml
framework:
    mailer:
        dsn: 'smtp://127.0.0.1:1025'
```

## Khắc phục sự cố

### Lỗi từ chối kết nối

1. Xác nhận Mailpit đang chạy trong FlyEnv
2. Kiểm tra cổng 1025 không bị dịch vụ khác chiếm dụng
3. Bảo đảm tường lửa cho phép kết nối localhost

### Email không xuất hiện

1. Xác nhận cài đặt SMTP trong ứng dụng của bạn
2. Kiểm tra log của Mailpit để tìm các lần thử kết nối
3. Bảo đảm cổng đúng (1025 cho SMTP, không phải 8025)

## Câu hỏi thường gặp (FAQ)

**H: Mailpit có miễn phí không?**

Đ: Có. Hoàn toàn miễn phí và mã nguồn mở, giống như Mailhog—nhưng được bảo trì tích cực.

**H: Nó có chạy trên Windows không?**

Đ: Hoàn toàn có. FlyEnv cung cấp binary Windows native cùng hỗ trợ macOS và Linux.

**H: Tôi có thể chuyển tiếp email tới hộp thư thật của mình không?**

Đ: Có. Mailpit hỗ trợ SMTP relay để chuyển tiếp các email cụ thể tới các địa chỉ thật.

**H: Email được lưu trữ trong bao lâu?**

Đ: Theo mặc định, Mailpit lưu vào SQLite vô thời hạn. Cấu hình thời gian lưu giữ trong phần cài đặt.

**H: Nó có hỗ trợ tệp đính kèm không?**

Đ: Có. Ảnh, PDF, tài liệu—tất cả đều có thể xem trước và tải xuống.

**H: Tôi có thể dùng cái này cho kiểm thử tải (load testing) không?**

Đ: Có. Mailpit xử lý lưu lượng lớn tốt hơn Mailhog từng có.

## Sẵn sàng nâng cấp việc kiểm thử email của bạn?

Đừng vật lộn nữa với phần mềm bị bỏ rơi. Mailpit trong FlyEnv mang đến cho bạn việc kiểm thử email hiện đại, đáng tin cậy và thực sự hoạt động.

[Tải xuống FlyEnv](/vi/download) để bắt đầu với hỗ trợ Mailpit tích hợp sẵn.

Khám phá thêm các công cụ phát triển trong mục [AI & Công cụ năng suất](/vi/guide/build-local-offline-ai-agent) của chúng tôi.
