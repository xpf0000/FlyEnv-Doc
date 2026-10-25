---
title: 'Hướng dẫn bắt đầu nhanh FlyEnv: Chạy được trong 5 phút'
head:
  - - meta
    - name: description
      content: 'Hướng dẫn thiết lập FlyEnv hoàn chỉnh cho macOS, Windows và Linux. Cài đặt, cấu hình site đầu tiên, và bắt đầu phát triển trong vòng 5 phút với quản lý phiên bản tự động.'
---

# Hướng dẫn bắt đầu nhanh FlyEnv: Chạy được trong 5 phút

Bạn đã tải FlyEnv. Giờ làm gì tiếp? Hướng dẫn này sẽ đưa bạn từ khâu cài đặt đến một website local đang chạy trong vòng chưa tới năm phút—không cần tài thuật terminal nào.

## Cài đặt

### macOS

**Phương án 1: Homebrew (Khuyến nghị)**
```bash
brew update && brew install flyenv
```

**Phương án 2: Tải DMG**

| Kiến trúc | Tải xuống |
|-------------|----------|
| Intel (x86_64) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Apple Silicon (M1/M2/M3) | [GitHub Release](https://github.com/xpf0000/FlyEnv/releases/latest) |

**Lưu ý cho người dùng macOS:** Nếu bạn chỉ cần hosting PHP đơn giản, hãy xem qua [FlyPHPServer](/vi/flyphpserver) trên Mac App Store—một ứng dụng đồng hành gọn nhẹ.

### Windows

Tải xuống và giải nén tệp ZIP:

| Nguồn tải | Liên kết |
|----------------|------|
| GitHub Release | [Tải xuống](https://github.com/xpf0000/FlyEnv/releases/latest) |
| Baidu Netdisk | [Tải xuống](https://pan.baidu.com/s/1tqHN9piZVVuTyTD3FXI71A?pwd=mnb4) |

Chạy `FlyEnv.exe` sau khi giải nén.

### Linux

Hỗ trợ Debian/Ubuntu (.deb) và Red Hat/Fedora/SUSE/CentOS (.rpm):

| Bản phân phối | Kiến trúc | Gói |
|-------------|-------------|---------|
| Debian/Ubuntu | x86_64 | .deb |
| Debian/Ubuntu | arm64 | .deb |
| Red Hat/Fedora | x86_64 | .rpm |
| Red Hat/Fedora | arm64 | .rpm |

Tải xuống từ [GitHub Releases](https://github.com/xpf0000/FlyEnv/releases/latest).

## Thiết lập lần đầu khởi chạy

### 1. Cài FlyEnv Helper

Ở lần khởi chạy đầu tiên, FlyEnv cài một chương trình hỗ trợ để tích hợp với hệ thống:
- **macOS/Linux**: Có thể yêu cầu nhập mật khẩu
- **Windows**: Chạy với quyền Administrator nếu cài đặt thất bại

Chương trình hỗ trợ này quản lý các dịch vụ và đường dẫn hệ thống. Nó chỉ cần thiết một lần duy nhất.

### 2. Tùy chỉnh giao diện của bạn

FlyEnv hiển thị tất cả module theo mặc định. Hãy tinh gọn giao diện:

1. Nhấp **Settings** (biểu tượng bánh răng)
2. Tắt các module bạn KHÔNG cần
3. Sắp xếp lại các module còn lại bằng kéo-thả

**Khuyến nghị cho lập trình viên PHP:** Giữ hiển thị Apache/Nginx, PHP, MySQL, Redis.

**Khuyến nghị cho lập trình viên Node.js:** Giữ hiển thị Node.js, Nginx, MongoDB.

![Thiết lập giao diện](https://oss.macphpstudy.com/image/quick-start-1.webp)

### 3. Cài phiên bản đầu tiên

Mỗi module cần ít nhất một phiên bản được cài:

1. Nhấp một module (ví dụ **PHP**)
2. Chuyển sang tab **Versions**
3. Chọn một phiên bản (ví dụ PHP 8.3)
4. Nhấp **Install**

FlyEnv tự tải xuống và cấu hình phiên bản đó.

![Cài đặt phiên bản](https://oss.macphpstudy.com/image/quick-start-2.webp)

**Mẹo hay:** Cài nhiều phiên bản nếu bạn làm việc trên các dự án khác nhau. Chúng cùng tồn tại hòa bình.

## Tạo website đầu tiên của bạn

### Bước 1: Khởi động các dịch vụ cần thiết

Trước khi tạo site, hãy khởi động web server và PHP của bạn:

1. Mở module **Apache** hoặc **Nginx**
2. Chọn phiên bản đã cài
3. Nhấp nút **Start**

Làm tương tự cho **PHP** và **MySQL** nếu cần.

![Khởi động dịch vụ](https://oss.macphpstudy.com/image/quick-start-3.webp)

### Bước 2: Tạo một site

1. Mở module **Host**
2. Nhấp **"Add Site"**
3. Điền các thông tin:
   - **Domain**: `myproject.test` (bất kỳ tên miền nào cũng được)
   - **Root Path**: `/Users/you/projects/myproject`
   - **PHP Version**: Chọn phiên bản đã cài
   - **Port**: 80 (mặc định)

4. Bật **Auto SSL** để truy cập qua HTTPS
5. Nhấp **Save**

![Biểu mẫu thêm site](https://oss.macphpstudy.com/image/quick-start-4.webp)

### Bước 3: Truy cập site của bạn

Sau khi lưu:
1. Khởi động web server (nếu chưa chạy)
2. Nhấp vào liên kết site trong danh sách Host
3. Hoặc mở `https://myproject.test` trong trình duyệt

Chứng chỉ SSL được hệ thống của bạn tự động tin tưởng.

## Thiết lập biến môi trường

FlyEnv có thể quản lý PATH hệ thống của bạn để truy cập từ terminal:

1. Mở bất kỳ module nào
2. Nhấp **"Set to System Path"**
3. Chọn các phiên bản cần thêm

Với PHP, bạn cũng có thể tạo các alias:
- `php74` -> PHP 7.4
- `php83` -> PHP 8.3

![Biến môi trường](https://oss.macphpstudy.com/image/get-start-13.png)
![Alias biến môi trường](https://oss.macphpstudy.com/image/get-start-15.png)

**Khởi động lại terminal** sau khi đặt PATH để các thay đổi có hiệu lực.

## Các ví dụ thiết lập dự án nhanh

### Dự án Laravel

```bash
# Create project
composer create-project laravel/laravel myproject

# In FlyEnv Host module
# - Domain: myproject.test
# - Root: /path/to/myproject/public
# - PHP: 8.2 or 8.3
# - Nginx rewrite: Select "Laravel" template
```

### Site WordPress

```bash
# Download WordPress
curl -O https://wordpress.org/latest.tar.gz
tar -xzf latest.tar.gz

# In FlyEnv
# - Create database in MySQL module
# - Domain: wordpress.test
# - Root: /path/to/wordpress
# - Enable URL rewrite
```

### Site HTML tĩnh

```bash
# Create folder
mkdir mystaticsite
echo "<h1>Hello FlyEnv</h1>" > mystaticsite/index.html

# In FlyEnv
# - Domain: static.test
# - Root: /path/to/mystaticsite
# - Set as "Static Site" (no PHP)
```

### Dự án Node.js/NestJS

```bash
# Create NestJS app
npm i -g @nestjs/cli
nest new myapi

# In FlyEnv
# - Start Node.js service
# - Use Nginx reverse proxy to port 3000
# - See reverse proxy guide for details
```

## Quản lý dịch vụ

### Khởi động tất cả cùng lúc

Bật **GroupStart** cho các module bạn muốn khởi chạy cùng nhau:

1. Mở panel dịch vụ của module
2. Đánh dấu ô **GroupStart**
3. Dùng công tắc chính "Start All"

![Cài đặt GroupStart](https://oss.macphpstudy.com/image/get-start-8.png)

### Kiểm tra log

Nếu một dịch vụ không khởi động được:

1. Nhấp nút **Logs** trong module
2. Xem lại các thông báo lỗi
3. Các vấn đề thường gặp: xung đột cổng, thiếu phụ thuộc

## Nâng cấp FlyEnv

FlyEnv tích hợp chức năng tự cập nhật:

1. Kiểm tra cập nhật tại **Settings** -> **About**
2. Hoặc tải bản phát hành mới nhất thủ công

**Dữ liệu của bạn an toàn:** Các tệp chương trình và dữ liệu được lưu tách biệt. Việc nâng cấp không bao giờ xóa site hay cơ sở dữ liệu của bạn.

## Gỡ cài đặt

Nếu cần gỡ bỏ FlyEnv:

### macOS
```bash
# Remove app
rm -rf /Applications/FlyEnv.app

# Remove data (optional)
rm -rf ~/Library/FlyEnv
rm -rf ~/Library/PhpWebStudy
```

### Windows
1. Xóa thư mục FlyEnv
2. Thư mục dữ liệu là `FlyEnv-Data` nằm cùng thư mục

### Linux
```bash
# Remove package
sudo apt remove flyenv  # or rpm equivalent

# Remove data
rm -rf ~/.config/FlyEnv
```

## Khắc phục sự cố

### Lỗi "Port already in use"

**Nguyên nhân**: Một ứng dụng khác đang dùng cổng 80, 443 hoặc 3306

**Giải pháp**:
```bash
# Find process using port 80
sudo lsof -i :80

# Or change FlyEnv ports in settings
```

### Lỗi "Permission denied" trên macOS

**Giải pháp**: Cấp Full Disk Access cho FlyEnv trong System Preferences -> Security & Privacy

### Site hiển thị "502 Bad Gateway"

**Nguyên nhân**:
1. PHP-FPM chưa chạy
2. Chọn sai phiên bản PHP cho site
3. Cấu hình nginx/apache sai

**Giải pháp**: Kiểm tra PHP-FPM đã được khởi động và xem log để tìm lỗi.

### Thay đổi không có hiệu lực

**Giải pháp**: 
1. Xóa bộ nhớ đệm trình duyệt
2. Khởi động lại web server
3. Kiểm tra quyền truy cập tệp

## Câu hỏi thường gặp (FAQ)

**H: Tôi có cần biết dòng lệnh để dùng FlyEnv không?**

Đ: Không. Dù có thể truy cập terminal, mọi thứ đều có thể thực hiện qua giao diện đồ họa.

**H: Tôi có thể dùng các bản cài Homebrew hiện có của mình không?**

Đ: Có. FlyEnv tự động phát hiện các bản cài từ Homebrew và Macports.

**H: Làm sao sao lưu các site của tôi?**

Đ: Các tệp dự án nằm trong các thư mục bạn đã chọn. Xuất cơ sở dữ liệu có thể thực hiện qua module MySQL.

**H: Tôi có thể nhập một dự án hiện có không?**

Đ: Hoàn toàn được. Chỉ cần trỏ root path của Host tới thư mục dự án hiện có của bạn.

**H: Tôi có thể dùng những tên miền nào?**

Đ: Bất kỳ tên miền nào kết thúc bằng .test, .local, .dev, hoặc các TLD tùy chỉnh. Tránh .local trên một số mạng do xung đột mDNS.

## Bước tiếp theo

Giờ khi mọi thứ đã chạy, hãy khám phá các tính năng sau:

- [Cách ly phiên bản theo dự án](/vi/guide/project-level-runtime-environment) — Chuyển phiên bản tự động
- [Tên miền tùy chỉnh & SSL](/vi/guide/host) — Phát triển local chuyên nghiệp
- [Dựng AI Agent local](/vi/guide/build-local-offline-ai-agent) — AI offline với Ollama

[Tải xuống FlyEnv](/vi/download) nếu bạn chưa có, và chúc bạn viết code vui vẻ!

---

> 💬 **Góc nhìn cộng đồng**: Xem các câu chuyện và hướng dẫn thực tế về FlyEnv từ lập trình viên tại [trang Cộng đồng](/vi/community) của chúng tôi.
