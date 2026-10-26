---
title: 'Cô lập phiên bản theo dự án mà không cần Docker - Hướng dẫn FlyEnv'
head:
  - - meta
    - name: description
      content: 'Gắn các phiên bản Node.js, PHP, Python và runtime khác vào từng dự án để các terminal và phiên shell của FlyEnv tự động chuyển đổi môi trường.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Cô lập phiên bản theo dự án mà không cần Docker

Chán việc gõ `nvm use` hay phải chỉnh sửa `PATH` thủ công mỗi khi đổi dự án? Chạy `node -v` trong các thư mục khác nhau và nhận về sai phiên bản? Docker Desktop ngốn RAM của bạn chỉ để quản lý việc chuyển đổi môi trường đơn giản?

FlyEnv giải quyết điều này bằng **cách ly môi trường cấp dự án thực thụ**. Đây là một lựa chọn thay thế native, nhẹ nhàng cho Docker Desktop và NVM—tự động nạp đúng phiên bản Node.js, PHP, Python, Go, Ruby, hay Java ngay khoảnh khắc bạn `cd` vào thư mục dự án. Không container, không phình to, chỉ là các binary native khởi động trong vài mili giây.

## Vì sao bạn cần cách ly cấp dự án

### Những điểm đau của việc quản lý phiên bản thủ công

| Vấn đề | Giải pháp truyền thống | Nỗi đau |
|---------|---------------------|----------|
| Nhiều dự án cần các phiên bản Node.js khác nhau | NVM + chuyển đổi thủ công | Quên chuyển, mất hàng giờ debug |
| Dự án cũ PHP 7.4 + dự án mới PHP 8.3 | Chỉnh shell profile liên tục | Dễ làm hỏng PATH toàn cục |
| Thành viên nhóm dùng các phiên bản khác nhau | Docker Compose | Chi phí RAM hơn 2GB cho những công cụ CLI đơn giản |
| Biến môi trường theo từng dự án | Tệp `.env` + script export | Cấu hình phân tán, khó bảo trì |

### FlyEnv thay đổi cuộc chơi như thế nào

FlyEnv mang đến **chuyển đổi môi trường native, tức thì** mà không có chi phí Docker:

- ✅ **Chuyển đổi không cần cấu hình**: Bước vào một thư mục dự án, đúng phiên bản được nạp tự động
- ✅ **Chi phí ảo hóa thấp hơn**: Binary native chạy mà không cần máy ảo container
- ✅ **Thiết lập một chạm**: Không có lệnh terminal nào phải học thuộc
- ✅ **Đa nền tảng**: Quy trình giống hệt nhau trên macOS và Windows
- ✅ **Hỗ trợ 6 ngôn ngữ**: Node.js, PHP, Python, Go, Ruby, Java

## Từng bước: Thiết lập cách ly theo dự án

### Bước 1: Truy cập quản lý dự án

Mở FlyEnv và chọn tab ngôn ngữ của bạn:

1. Khởi chạy Bảng điều khiển FlyEnv
2. Nhấp vào tab **Node.js**, **PHP**, **Python**, **Go**, **Ruby**, hoặc **Java**
3. Chuyển tới phần Project

![Giao diện quản lý dự án - Các tab ngôn ngữ hiển thị tùy chọn Node.js, PHP, Python, Go, Ruby, Java](https://oss.macphpstudy.com/image/project-env1.png)

### Bước 2: Thêm dự án của bạn

Đăng ký một dự án để tự động nạp môi trường:

1. Nhấp nút **"Add Project"**
2. Nhập một tên dự án dễ nhớ (ví dụ: "legacy-api" hoặc "new-dashboard")
3. Chọn hoặc gõ đường dẫn tuyệt đối tới thư mục dự án của bạn
4. Lưu lại

![Hộp thoại thêm dự án - Trường tên và trình chọn đường dẫn](https://oss.macphpstudy.com/image/project-env2.png)

### Bước 3: Ghim phiên bản runtime

Đây là nơi phép màu xảy ra—khóa một phiên bản cụ thể vào dự án này:

1. Nhấp đúp vào dự án vừa thêm trong danh sách
2. Từ **dropdown Version**, chọn đúng phiên bản runtime mà dự án này cần:
   - Node.js: `18.19.0`, `20.11.0`, `21.6.0`, v.v.
   - PHP: `7.4.33`, `8.2.15`, `8.3.2`, v.v.
   - Python: `3.9.18`, `3.11.7`, `3.12.1`, v.v.
3. Nhấp **Save** — xong!

![Dropdown chọn phiên bản - Cài đặt dự án với trình chọn phiên bản](https://oss.macphpstudy.com/image/project-env3.png)

::: tip Mẹo hay
Bạn có thể cài đặt nhiều phiên bản của cùng một ngôn ngữ qua giao diện chính của FlyEnv. Tất cả các phiên bản đã cài sẽ xuất hiện trong dropdown cấp dự án.
:::

### Bước 4: Cấu hình biến môi trường riêng của dự án

Nhiều dự án cần `PATH`, `DATABASE_URL`, hay API key tùy chỉnh:

1. Chọn dự án của bạn và nhấp **"Project Environment"**
2. Xem các biến hệ thống đang được kế thừa
3. Thêm hoặc ghi đè biến:
   - Nhấp **"Add Variable"**
   - Nhập các cặp khóa-giá trị (ví dụ: `NODE_ENV=production`, `PHP_MEMORY_LIMIT=512M`)
4. Các biến được lưu theo từng dự án và nạp tự động

![Bảng biến môi trường - Danh sách các biến env đã cấu hình](https://oss.macphpstudy.com/image/project-env4.png)

![Trình chỉnh sửa biến môi trường - Hộp thoại thêm/sửa biến](https://oss.macphpstudy.com/image/project-env5.png)

## Điểm kỳ diệu: Tự động nạp trong terminal

Đây là nơi FlyEnv tỏa sáng so với các công cụ thủ công như NVM hay Pyenv.

Sau khi cấu hình, đơn giản chỉ cần mở terminal của bạn:

```bash
# Navigate to your project
cd ~/work/legacy-php-project

# Check PHP version - automatically correct!
php -v
# PHP 7.4.33 (cli) (built: ...)

cd ~/work/modern-node-app

node -v
# v20.11.0

which node
# /Users/you/.flyenv/versions/node/20.11.0/bin/node
```

Tích hợp shell của FlyEnv phát hiện thư mục hiện tại của bạn và chèn đúng các đường dẫn **trước khi** lệnh của bạn chạy. Không `nvm use`, không `source venv/bin/activate`, không quên chuyển đổi.

![Demo terminal - Hiển thị chuyển đổi phiên bản tự động khi cd](https://oss.macphpstudy.com/image/project-env6.png)

## Ví dụ theo từng ngôn ngữ

### Các dự án Node.js

Hoàn hảo cho các agency phải xoay xở nhiều dự án khách hàng:

| Dự án | Phiên bản khuyến nghị | Lý do |
|---------|---------------------|-----|
| Bảo trì hệ thống cũ | Node.js 16.x | Tương thích với webpack cũ hơn |
| Production ổn định | Node.js 18.x LTS | AWS Lambda, hệ sinh thái ổn định |
| Phát triển hiện đại | Node.js 20.x+ | Test runner native, hiệu năng |

### Các dự án PHP

Chuyển đổi giữa các framework một cách nhẹ nhàng:

| Framework | Phiên bản PHP | Ghi chú |
|-----------|-------------|-------|
| WordPress cũ | 7.4 | Tương thích plugin cũ |
| Laravel 10+ | 8.2+ | Tính năng mới nhất, hiệu năng |
| Symfony 7 | 8.3 | Các tính năng PHP tiên tiến nhất |

### Các dự án Python

Thay thế virtualenv/conda cho các trường hợp đơn giản:

```bash
cd ~/data-science-project
python --version
# Python 3.11.7

cd ~/legacy-django
python --version  
# Python 3.8.18
```

## Video hướng dẫn

Thích xem? Hãy xem cách ly dự án của FlyEnv trong thực tế:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/Cpq6i9T6IK4?si=E-47n3AQwJEBygoh" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Câu hỏi thường gặp (FAQ)

**H: FlyEnv có dùng container Docker không?**  
Đ: Không. FlyEnv chạy các binary được biên dịch cho hệ điều hành của bạn (macOS/Windows/Linux), tránh được chi phí máy ảo nền của Docker Desktop. Thời gian khởi động thực tế và mức dùng bộ nhớ phụ thuộc vào các runtime và dịch vụ trong dự án của bạn.

**H: Tôi có thể dùng nó như một giải pháp thay thế NVM không?**  
Đ: Hoàn toàn được. FlyEnv xử lý việc quản lý phiên bản Node.js với cách chuyển đổi theo thư mục không cần cấu hình—không còn phải gõ `nvm use` hay quên chuyển phiên bản.

**H: Cái này có tốt hơn XAMPP cho phát triển PHP không?**  
Đ: Với quy trình nhiều dự án, thì có. XAMPP dùng một phiên bản PHP toàn cục duy nhất. FlyEnv cho phép mỗi dự án dùng phiên bản PHP riêng của mình, và tích hợp native với Nginx/Apache/Caddy.

**H: Nó có hoạt động với các pipeline CI/CD không?**  
Đ: Cấu hình dự án được lưu trong cài đặt của FlyEnv. Với CI/CD, bạn thường khai báo phiên bản trong các tệp workflow. FlyEnv vượt trội ở việc giữ tính nhất quán khi phát triển local.

**H: Nếu một thành viên trong nhóm không dùng FlyEnv thì sao?**  
Đ: Họ vẫn có thể làm việc với dự án bằng trình quản lý phiên bản của riêng họ. FlyEnv không sửa các tệp của dự án bạn—không cần `.nvmrc`, mẹo `composer.json`, hay yêu cầu Dockerfile.

**H: Làm thế nào để gỡ cài đặt một phiên bản?**  
Đ: Đi tới tab ngôn ngữ chính trong FlyEnv, nhấp chuột phải vào phiên bản, và chọn "Uninstall". Các dự án đang dùng phiên bản đó sẽ lùi về một phiên bản dự phòng một cách êm đẹp hoặc nhắc bạn chọn phiên bản mới.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.vi" locale="vi" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/vi/guide/project-level-runtime-environment" />

## Bước tiếp theo

Sẵn sàng ngừng vật lộn với các trình quản lý phiên bản?

1. **[Tải xuống FlyEnv](/vi/download)** — Miễn phí cho macOS, Windows, và Linux
2. **[So sánh với Docker & XAMPP](/vi/guide/flyenv-vs-docker-xampp)** — Xem vì sao các lập trình viên đang chuyển sang
3. **[Quản lý nhiều phiên bản](/vi/guide/manage-multiple-node-php-versions)** — Cài đặt và duy trì kho runtime của bạn

Muốn đi xa hơn? Tìm hiểu cách [triển khai Node.js/Python/Go không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker) bằng reverse proxy và quản lý tiến trình tích hợp sẵn của FlyEnv.
