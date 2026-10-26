---
layout: doc
titleTemplate: false
title: 'n8n Automation Server local với Quản lý người dùng | FlyEnv'
description: 'Cài đặt các phiên bản n8n qua npm, chạy server với cấu hình môi trường được quản lý, và quản lý người dùng trực tiếp.'
head:
  - - meta
    - name: description
      content: 'Cài đặt các phiên bản n8n qua npm, chạy server với cấu hình môi trường được quản lý, và quản lý người dùng trực tiếp.'
  - - meta
    - property: og:title
      content: 'n8n Automation Server local với Quản lý người dùng | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt các phiên bản n8n qua npm, chạy server với cấu hình môi trường được quản lý, và quản lý người dùng trực tiếp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/n8n
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/n8n
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tự động hóa n8n local với FlyEnv

n8n là một công cụ tự động hóa quy trình làm việc mã nguồn mở với trình chỉnh sửa trực quan dựa trên node để kết nối các API, cơ sở dữ liệu và dịch vụ. Các nhóm tự host n8n để xây dựng tích hợp và tự động hóa — từ đồng bộ dữ liệu đến pipeline AI — mà không cần một nền tảng tự động hóa hosted. FlyEnv chạy n8n như một automation server local được quản lý: chọn một phiên bản từ npm registry và cài đặt nó trong terminal nhúng, khởi chạy `n8n start` với cấu hình môi trường trực quan, và quản trị tài khoản trong tab Users mà không cần mở công cụ cơ sở dữ liệu. Server lắng nghe trên cổng 5678 theo mặc định, và FlyEnv thậm chí có thể nhận diện một instance n8n mà bạn khởi động bên ngoài ứng dụng thông qua health endpoint của nó.

![Tổng quan module n8n của FlyEnv với các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/n8n-1.webp)

## Quản lý phiên bản

Không giống các module đi kèm bản tải xuống binary, tab **n8n → Version Manager** làm việc thông qua package registry, vì vậy một bản cài [Node.js](/vi/features/nodejs) hoạt động tốt với npm là điều kiện tiên quyết.

- **Danh sách phiên bản lấy từ registry:** FlyEnv kéo 20 bản phát hành stable mới nhất của n8n trực tiếp từ `registry.npmjs.org`, nhờ đó các phiên bản được cung cấp luôn bám theo những gì upstream phát hành.
- **Cài đặt trong terminal nhúng:** việc cài đặt một phiên bản chạy `npm install -g n8n@<version>` bên trong terminal tích hợp sẵn của FlyEnv, nơi bạn theo dõi đầu ra npm thật thay vì một thanh tiến trình.
- **Phát hiện bản cài global rộng rãi:** FlyEnv cũng nhận diện n8n được cài bởi các công cụ khác — nó quét các vị trí npm-global thông dụng (`/usr/local/bin`, `/opt/homebrew/bin`, `~/.nvm`, `~/.volta`, và `%APPDATA%\npm` trên Windows) cũng như `PATH` của bạn.

![n8n Version Manager liệt kê các bản phát hành từ npm registry](https://oss.macphpstudy.com/image/features/n8n-2.webp)

## Dịch vụ và cấu hình

Việc khởi động dịch vụ sẽ chạy `n8n start` với mọi biến môi trường được đọc từ tệp `n8n.env` riêng của FlyEnv, nhờ đó hành vi runtime hoàn toàn có thể tái lập từ một tệp do bạn kiểm soát.

- **Biểu mẫu trực quan cho các khóa thông dụng:** điều chỉnh `N8N_PORT`, `N8N_HOST`, `N8N_PROTOCOL` và `N8N_PATH`, chọn `DB_TYPE`, đặt `N8N_USER_FOLDER` và `N8N_ENCRYPTION_KEY`, định nghĩa `WEBHOOK_URL`, tinh chỉnh log level và đầu ra, chuyển đổi `EXECUTIONS_PROCESS`/`EXECUTIONS_MODE`, và bật tắt `N8N_METRICS` — tất cả mà không cần tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** một khung xem nguồn đầy đủ của `n8n.env` bao phủ mọi biến mà biểu mẫu không hiển thị.
- **Thiết lập owner tự động:** khi `N8N_OWNER_EMAIL` và `N8N_OWNER_PASSWORD` đã được đặt và chưa có cơ sở dữ liệu nào tồn tại, FlyEnv hoàn tất việc đăng ký owner ban đầu giúp bạn ngay sau khi server khởi động.
- **Lối thoát reset owner:** một hành động trong vùng nguy hiểm sẽ xóa `database.sqlite` khi bạn chủ ý muốn bắt đầu lại từ đầu.
- **Vòng đời được quản lý:** các công tắc trên thanh bên và khay hệ thống khởi động và dừng server, trạng thái đang chạy được xác nhận qua endpoint `/healthz`, và trên Windows FlyEnv kết thúc tiến trình một cách đáng tin cậy qua tệp pid, trình lắng nghe cổng và so khớp lệnh.

![Trình chỉnh sửa trực quan cho các biến môi trường n8n.env](https://oss.macphpstudy.com/image/features/n8n-3.webp)

## Quản lý người dùng

Tab **Users** nói chuyện trực tiếp với `database.sqlite` của n8n, nhờ đó việc quản trị tài khoản vẫn hoạt động ngay cả khi server đang dừng.

- **Xác định dữ liệu:** tự chọn thư mục dữ liệu n8n, hoặc để FlyEnv tự động quét các vị trí ứng viên nơi n8n lưu giữ cơ sở dữ liệu SQLite của nó.
- **Kiểm soát tài khoản đầy đủ:** liệt kê, tạo và xóa người dùng, đổi vai trò của một người dùng, vô hiệu hóa tài khoản, và đặt lại mật khẩu — bao gồm cả mật khẩu owner.
- **Băm mật khẩu đúng chuẩn:** mật khẩu được ghi bằng bcrypt, y hệt cách n8n tự lưu trữ, nhờ đó các tài khoản bạn sửa offline sẽ hoạt động ngay lần kế tiếp server khởi động.

![Tab Users của n8n liệt kê các tài khoản từ cơ sở dữ liệu SQLite](https://oss.macphpstudy.com/image/features/n8n-4.webp)

## Dashboard

Khi dịch vụ đang chạy, nút dashboard trên tab Service mở trình chỉnh sửa n8n trong trình duyệt của bạn tại địa chỉ được ghép từ cấu hình của bạn — protocol, host, port và path đều được đọc từ `n8n.env`, nhờ đó một `N8N_PATH` tùy chỉnh hay một cổng không mặc định sẽ được phản ánh tự động trong liên kết. Từ đó bạn xây dựng các workflow trên stack local của mình — các node SMTP có thể trỏ tới [Mailpit](/vi/features/mailpit) để các workflow thông báo không bao giờ gửi thư thật trong lúc kiểm thử; [hướng dẫn workflow AI local](/vi/guide/build-local-ai-workflow-by-n8n) cho thấy n8n kết hợp cùng các model được phục vụ bởi [module Ollama](/vi/features/ollama).

![Dashboard trình chỉnh sửa n8n được mở từ FlyEnv](https://oss.macphpstudy.com/image/features/n8n-5.webp)

## Log

Mỗi phiên bản được cài có log khởi động riêng — `n8n-<version>-start-out.log` và `n8n-<version>-start-error.log` — xem được từ tab Log bên trong FlyEnv. Khi một phiên bản từ chối khởi động hoặc health check không bao giờ qua được, hai tệp này là nơi đầu tiên cần xem.

<FeatureRelatedLinks locale="vi" slug="n8n" />

## Lưu ý tương thích

FlyEnv quản lý tiến trình n8n local, tệp môi trường và cơ sở dữ liệu người dùng của nó; ứng dụng không đóng gói sẵn n8n. Việc cài đặt hay cập nhật một phiên bản đòi hỏi Node.js và npm trên máy và kết nối tới npm registry công cộng, còn hành vi workflow của một bản phát hành n8n cụ thể tuân theo các yêu cầu riêng của n8n. FlyEnv cũng không kiểm soát các instance n8n mà nó không khởi động — nó phát hiện một server được khởi động từ bên ngoài qua health endpoint và hiển thị nó là đang chạy, nhưng các hành động vòng đời chỉ áp dụng cho bản cài mà FlyEnv quản lý. Về những gì đi kèm ứng dụng trên nền tảng của bạn, hãy tham khảo [trang tải xuống](/vi/download).
