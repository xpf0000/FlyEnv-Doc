---
description: 'Tạo, kiểm tra và tải các gói ngôn ngữ JSON tùy chỉnh trong FlyEnv, kèm vị trí tệp và các bước khắc phục sự cố cho từng nền tảng.'
---

# Tải gói ngôn ngữ I18n một cách động

## Tổng quan

FlyEnv từ phiên bản 4.9.1 trở lên hỗ trợ tải động các gói ngôn ngữ I18n local. Hướng dẫn này cung cấp chỉ dẫn chi tiết về cách tạo và sử dụng các gói ngôn ngữ tùy chỉnh.

## Điều kiện tiên quyết

1. Bảo đảm FlyEnv đã được nâng cấp lên **phiên bản 4.9.1 hoặc cao hơn**
2. Cần kỹ năng chỉnh sửa tệp JSON cơ bản

## Chỉ dẫn từng bước

### 1. Truy cập cài đặt ngôn ngữ
- Đi tới `Settings` → `Setting`
- Khu vực cài đặt ngôn ngữ có hai nút:
    - `Load Local Language Pack`: Làm mới và tải các gói ngôn ngữ
    - `Open Language Pack Folder`: Truy cập thư mục gói ngôn ngữ

![Giao diện cài đặt ngôn ngữ](https://oss.macphpstudy.com/image/dynamica-i18n-1.png)

### 2. Tạo một gói ngôn ngữ
1. Nhấp `Open Language Pack Folder`
2. Xem cấu trúc gói ngôn ngữ mẫu

![Thư mục gói ngôn ngữ mẫu](https://oss.macphpstudy.com/image/dynamica-i18n-2.png)

3. Nhân đôi thư mục mẫu (khuyến nghị đặt lại tên theo mã ngôn ngữ đích, ví dụ `jp` cho tiếng Nhật)

![Ví dụ thư mục gói ngôn ngữ](https://oss.macphpstudy.com/image/dynamica-i18n-3.png)

4. Sửa tệp `index.json`:
   ```json
   {
     "lang": "jp",
     "label": "日本語"
   }
   ```

### 3. Dịch các tệp ngôn ngữ
Chỉnh sửa các tệp dịch JSON, chẳng hạn `base.json`:

```json
{
  "add": "追加",
  "open": "開く",
  "enable": "有効",
  "disable": "無効",
  // Other translation items...
}
```

### 4. Tải và sử dụng gói ngôn ngữ
1. Quay lại FlyEnv và nhấp `Load Local Language Pack`
2. Chọn ngôn ngữ mới thêm từ menu thả xuống

![Giao diện chọn ngôn ngữ](https://oss.macphpstudy.com/image/dynamica-i18n-4.png)

3. Giao diện sẽ ngay lập tức chuyển sang ngôn ngữ đã chọn

![Ví dụ giao diện tiếng Nhật](https://oss.macphpstudy.com/image/dynamica-i18n-5.png)

### 5. Debug và cập nhật
- Sau khi sửa các tệp dịch, nhấp lại `Load Local Language Pack` để làm mới
- Xem các thay đổi theo thời gian thực

## Thực hành tốt nhất
1. **Sao lưu**: Luôn sao lưu các tệp gốc trước khi thay đổi
2. **Dịch tăng dần**: Bắt đầu với các thuật ngữ dùng thường xuyên rồi mở rộng dần
3. **Quản lý phiên bản**: Dùng Git để quản lý các tệp dịch

## Chia sẻ bản dịch của bạn
Chúng tôi hoan nghênh các đóng góp qua:
- [GitHub Repository](https://github.com/xpf0000/FlyEnv) (qua PR)
- [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- [Discord Community](https://discord.gg/u5SuMGxjPE)
- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

## Lưu ý quan trọng
- Cách đặt tên thư mục gói ngôn ngữ khuyến nghị: các mã ngôn ngữ chuẩn (ví dụ en, jp, zh)
- Bảo đảm định dạng JSON luôn đúng khi chỉnh sửa tệp
- Chỉ sửa các giá trị, không đổi tên khóa (key)
