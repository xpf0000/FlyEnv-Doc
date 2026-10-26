---
title: 'Quản lý phiên bản Node.js và PHP theo từng dự án'
head:
  - - meta
    - name: description
      content: 'Cài nhiều phiên bản Node.js và PHP trong FlyEnv và chuyển đổi tự động cho từng dự án thông qua tích hợp shell.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Cách quản lý nhiều phiên bản Node.js & PHP mà không cần NVM hay PHP Monitor

Nếu bạn đã từng gõ `nvm use 18` đến lần thứ một trăm, hay vật lộn với việc liên kết (link) phiên bản PHP của Homebrew, bạn chắc hẳn hiểu nỗi đau của việc quản lý phiên bản. Các dự án khác nhau đòi hỏi các phiên bản khác nhau, và việc chuyển đổi qua lại giữa chúng là một kẻ giết chết năng suất.

**Có một cách tốt hơn.** Cách ly phiên bản theo dự án loại bỏ hoàn toàn việc chuyển đổi thủ công. Môi trường của bạn tự động khớp với bất kỳ dự án nào bạn đang làm.

## Vấn đề của các trình quản lý phiên bản truyền thống

### Cơn đau đầu với NVM
```bash
# Sound familiar?
cd ~/projects/legacy-app
nvm use 14  # Error: version not installed
nvm install 14
cd ~/projects/new-app  
nvm use 20  # Forgot to switch, now debugging weird errors
```

### Ác mộng phiên bản PHP
```bash
# Homebrew PHP switching
brew unlink php@8.1
brew link php@8.3 --force
# Restart terminal, check version, pray it works
```

### Những cái giá ẩn
- **Chi phí chuyển ngữ cảnh**: 30+ giây mỗi lần đổi dự án
- **Xung đột phiên bản**: Các bản cài toàn cục xung đột giữa các dự án
- **Ma sát trong nhóm**: "Chạy được trên máy tôi" vì các phiên bản khác nhau
- **Lệch CI/CD**: Môi trường local khác với môi trường triển khai

## Giải pháp của FlyEnv: Chuyển phiên bản tự động theo dự án

FlyEnv loại bỏ việc quản lý phiên bản thủ công thông qua **phát hiện môi trường tự động**:

### Cách nó hoạt động

1. **Tạo một dự án** trong giao diện FlyEnv
2. **Gán các phiên bản** cho dự án đó (PHP 7.4, Node 14, v.v.)
3. **Điều hướng tới thư mục** trong terminal
4. **Các phiên bản tự chuyển** — không cần gõ lệnh nào

```bash
cd ~/projects/client-legacy-wordpress
php -v  # PHP 7.4.33 (auto-loaded)
node -v # v14.21.3 (auto-loaded)

cd ~/projects/client-modern-laravel  
php -v  # PHP 8.3.4 (auto-loaded)
node -v # v20.11.1 (auto-loaded)
```

## Thiết lập quản lý phiên bản theo dự án

### Bước 1: Tạo dự án của bạn

Mở FlyEnv và điều hướng tới module ngôn ngữ (PHP, Node.js, Python, v.v.):

![Giao diện quản lý dự án](https://oss.macphpstudy.com/image/project-env1.png)

Nhấp **"Add Project"** và nhập:
- Tên dự án
- Đường dẫn dự án
- Phiên bản runtime mặc định

![Giao diện thêm dự án](https://oss.macphpstudy.com/image/project-env2.png)

### Bước 2: Cấu hình biến môi trường

Mỗi dự án có bộ biến môi trường cách ly riêng:

![Cấu hình biến môi trường](https://oss.macphpstudy.com/image/project-env3.png)

Các cấu hình phổ biến bao gồm:
- `DATABASE_URL`
- `APP_ENV=local`
- `API_KEYS`
- Các phần bổ sung `PATH` tùy chỉnh

![Cấu hình biến môi trường tùy chỉnh](https://oss.macphpstudy.com/image/project-env4.png)

![Thông tin cấu hình biến môi trường tùy chỉnh](https://oss.macphpstudy.com/image/project-env5.png)

### Bước 3: Cài nhiều phiên bản

FlyEnv hỗ trợ cài không giới hạn số phiên bản song song:

| Ngôn ngữ | Các phiên bản được hỗ trợ |
|----------|-------------------|
| PHP | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4+ |
| Node.js | 10.x đến 22.x+ (tất cả LTS và bản hiện hành) |
| Python | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12+ |
| Java | 8, 11, 17, 21 LTS |
| Go | 1.19, 1.20, 1.21, 1.22+ |

Cài các phiên bản chỉ với một cú nhấp—không cần biên dịch hay thiết lập phức tạp.

## Các ví dụ quy trình thực tế

### Tình huống 1: Agency quản lý nhiều khách hàng

```
~/clients/
├── client-a-wordpress/     # PHP 7.4, Node 14
├── client-b-laravel/       # PHP 8.2, Node 18
├── client-c-symfony/       # PHP 8.3, Node 20
└── client-d-custom/        # PHP 8.1, Node 16
```

**Với công cụ truyền thống:** Liên tục gõ `nvm use` và `brew switch`. Nhức đầu hằng ngày.

**Với FlyEnv:** `cd` vào bất kỳ thư mục nào, đúng phiên bản được kích hoạt ngay lập tức.

### Tình huống 2: Dự án nâng cấp framework

Nâng cấp một ứng dụng Laravel từ phiên bản 9 lên 11:

1. Clone dự án vào `project-laravel11/`
2. Thiết lập với PHP 8.3 trong FlyEnv
3. Giữ bản gốc trong `project-laravel9/` với PHP 8.1
4. Chuyển qua lại giữa hai bản một cách tức thì để so sánh

### Tình huống 3: Người đóng góp mã nguồn mở

Đóng góp cho các dự án với yêu cầu khác nhau:

| Dự án | Phiên bản PHP | Phiên bản Node |
|---------|------------|--------------|
| WordPress Core | 7.4 | 14 |
| Laravel | 8.3 | 20 |
| Symfony | 8.2 | 18 |
| Package tùy chỉnh | 8.1 | 16 |

Không còn phải nhớ dự án nào cần phiên bản nào.

## Các tính năng quản lý phiên bản nâng cao

### Tích hợp terminal

FlyEnv tự động sửa cấu hình shell của bạn:

**macOS/Linux (.zshrc/.bashrc):**
```bash
# Added by FlyEnv - loads project environment on cd
source "/Applications/FlyEnv.app/Contents/Resources/helper/flyenv.sh"
```

**Windows (PowerShell profile):**
```powershell
# Added by FlyEnv - loads project environment on cd
# FlyEnv Auto-Load
. "{FlyEnv Data Folder}/server/bin/flyenv.ps1"
```

### Tương thích IDE

Môi trường theo dự án hoạt động liền mạch với:
- Terminal của VS Code
- Terminal của PHPStorm
- iTerm/Terminal.app
- Windows Terminal
- Bất kỳ terminal nào tôn trọng biến môi trường

### Phiên bản PHP riêng cho từng site

Tạo các site với phiên bản PHP chuyên dụng:

1. Thêm site trong module Host của FlyEnv
2. Chọn phiên bản PHP cho từng site
3. Mỗi site chạy độc lập

Hoàn hảo để kiểm thử cùng một bộ code trên nhiều phiên bản PHP.

## So sánh: FlyEnv vs NVM vs PHP Monitor

| Tính năng | NVM | PHP Monitor | **FlyEnv** |
|---------|-----|-------------|------------|
| Chuyển phiên bản bằng dòng lệnh | ✅ | ✅ | Không cần thiết (tự động) |
| Giao diện đồ họa | ❌ | ✅ | ✅ |
| Hỗ trợ đa ngôn ngữ | Chỉ Node | Chỉ PHP | PHP, Node, Python, Go, Java, Ruby |
| Cách ly theo dự án | Thủ công | Thủ công | Tự động |
| Cài phiên bản | Qua lệnh | Chỉ Homebrew | GUI một cú nhấp |
| Hỗ trợ Windows | ✅ | ❌ | ✅ |
| Biến môi trường | ❌ | ❌ | ✅ |
| Chia sẻ trong nhóm | ❌ | ❌ | Tệp cấu hình dự án |

## Khắc phục các sự cố phiên bản

### "Phiên bản sai trong terminal"

1. Bảo đảm tích hợp shell của FlyEnv đã được bật
2. Khởi động lại terminal sau khi thiết lập lần đầu
3. Kiểm tra dự án đã được đăng ký trong FlyEnv chưa

### "Không có phiên bản khả dụng"

1. Cài phiên bản trong giao diện module của FlyEnv
2. Các bản tải xuống đến từ nguồn chính thức (không cần biên dịch)

### "Xung đột với các trình quản lý phiên bản hiện có"

1. Xóa NVM khỏi `.zshrc` (FlyEnv thay thế nó)
2. Unlink PHP của Homebrew: `brew unlink php`
3. Để FlyEnv quản lý toàn bộ các phiên bản

## Câu hỏi thường gặp (FAQ)

**H: Tôi có cần gỡ NVM hay RVM để dùng FlyEnv không?**

Đ: Không bắt buộc, nhưng nên gỡ để tránh xung đột. FlyEnv thay thế hoàn toàn chức năng của chúng bằng một giải pháp thanh lịch hơn.

**H: Về mặt kỹ thuật, việc chuyển phiên bản tự động hoạt động thế nào?**

Đ: FlyEnv thêm các shim vào PATH của bạn, những shim này phát hiện thư mục hiện tại và tải các phiên bản phù hợp từ cấu hình dự án của bạn.

**H: Tôi vẫn có thể dùng các lệnh phiên bản nếu cần không?**

Đ: Có. Dù chuyển phiên bản tự động xử lý được 99% trường hợp, bạn vẫn có thể tự chọn phiên bản trong GUI của FlyEnv hay dùng các lệnh truyền thống.

**H: Cách này có hoạt động trong pipeline CI/CD không?**

Đ: FlyEnv được thiết kế cho phát triển local. Với CI/CD, hãy dùng Docker hoặc các phiên bản cụ thể mà môi trường production của bạn yêu cầu.

**H: Điều gì xảy ra nếu tôi cd ra ngoài mọi thư mục dự án?**

Đ: FlyEnv dùng các phiên bản mặc định của hệ thống hoặc một mặc định toàn cục mà bạn cấu hình.

**H: Các thành viên nhóm có thể dùng các trình quản lý phiên bản khác không?**

Đ: Có. Cấu hình dự án trong FlyEnv không can thiệp vào việc đồng nghiệp dùng các công cụ khác.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.vi" locale="vi" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/vi/guide/manage-multiple-node-php-versions" />

## Sẵn sàng ngừng quản lý phiên bản thủ công?

Lấy lại những giờ đồng hồ đã mất cho việc chuyển đổi giữa các phiên bản Node và PHP. Hãy để môi trường thích nghi với công việc của bạn, chứ không phải ngược lại.

[Tải xuống FlyEnv miễn phí](/vi/download) — Hoạt động trên macOS, Windows và Linux

Tìm hiểu thêm về [Cách ly môi trường theo dự án](/vi/guide/project-level-runtime-environment) hoặc đi thẳng vào [Hướng dẫn bắt đầu nhanh](/vi/guide/getting-started).
