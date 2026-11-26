---
layout: doc
titleTemplate: false
title: 'Runtime theo từng dự án và cô lập môi trường | FlyEnv'
description: 'Gắn mỗi dự án với phiên bản runtime riêng của nó; terminal và IDE kế thừa qua tệp .flyenv và shell hook.'
head:
  - - meta
    - name: description
      content: 'Gắn mỗi dự án với phiên bản runtime riêng của nó; terminal và IDE kế thừa qua tệp .flyenv và shell hook.'
  - - meta
    - property: og:title
      content: 'Runtime theo từng dự án và cô lập môi trường | FlyEnv'
  - - meta
    - property: og:description
      content: 'Gắn mỗi dự án với phiên bản runtime riêng của nó; terminal và IDE kế thừa qua tệp .flyenv và shell hook.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/per-project-runtimes
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/per-project-runtimes
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Runtime theo từng dự án trong FlyEnv

FlyEnv cho phép mỗi thư mục dự án mang theo phiên bản runtime riêng của nó, nhờ đó một codebase PHP cũ và một ứng dụng Node.js hiện đại có thể sống cạnh nhau trên cùng một máy — xem [quản lý nhiều phiên bản Node và PHP](/vi/guide/manage-multiple-node-php-versions) để biết phía trình quản lý phiên bản của việc này. Đăng ký một dự án trong tab **Projects** của bất kỳ module ngôn ngữ nào, chọn chính xác phiên bản binary mà nó nên dùng, và FlyEnv ghi lại lựa chọn đó ngay bên trong dự án. Từ đó về sau, các terminal, trình soạn thảo và lệnh chạy được mở cho dự án đó sẽ tự động phân giải đúng toolchain — quy trình từng bước được trình bày trong [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment).

Ví dụ, gán Node.js 22 cho một dự án và Node.js 24 cho dự án khác. Mở từng dự án từ **Projects** hoặc vào thư mục đã đăng ký trong shell được hỗ trợ và đã bật hook của FlyEnv. Chạy `node -v` để kiểm tra phiên bản mỗi dự án đang dùng. [Xem demo chuyển đổi theo dự án](/vi/demos?video=project-environment-switching).

![Tab Projects của FlyEnv liệt kê các dự án đã đăng ký cùng phiên bản runtime được gắn](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## .flyenv hoạt động thế nào

Trình soạn thảo hay terminal mở riêng có thể giữ môi trường ban đầu. Hãy mở từ mục dự án của FlyEnv hoặc dùng shell được hỗ trợ có tải cấu hình dự án.

- **Đặt PATH lên trước:** trên macOS và Linux tệp chứa một dòng `export PATH="<bin>:<bin>/bin:<bin>/sbin:$PATH"` trỏ tới các thư mục của runtime được gắn; trên Windows nó dùng phép gán `$env:PATH` tương đương trong PowerShell.
- **Có gắn nhãn và idempotent:** mọi dòng FlyEnv ghi đều được đánh dấu bằng thẻ `#FlyEnv-ID-<projectId>`, nhờ đó việc chỉnh lại dự án ghi đè đúng những dòng cũ tại chỗ thay vì nối thêm bản trùng.
- **Theo từng module ngôn ngữ:** tab Projects được dùng chung giữa các module ngôn ngữ — PHP, [NodeJS](/vi/features/nodejs), [Python](/vi/features/python), Go, Ruby, Rust, Java, .NET, Bun, Deno và hơn nữa — mỗi module giữ danh sách dự án riêng với phiên bản được gắn hiển thị cạnh đường dẫn dự án.
- **Chỉnh được trong ứng dụng:** bản thân tệp `.flyenv` có thể được mở và điều chỉnh từ khung xem cấu hình của dự án khi bạn cần thứ gì vượt ra ngoài mục PATH mặc định.

![Một tệp .flyenv do FlyEnv ghi với dòng export PATH có gắn nhãn](https://oss.macphpstudy.com/image/features/per-project-runtimes-2.webp)

## Shell hook cho zsh, bash và PowerShell

Tệp `.flyenv` có hiệu lực qua một shell hook mà FlyEnv cài vào các tệp khởi động shell của bạn.

- **zsh và bash trên macOS/Linux:** FlyEnv source script trợ giúp của nó từ `~/.zshrc` và `~/.bashrc`. Hook theo dõi các thay đổi thư mục và khi bạn `cd` vào một dự án đã đăng ký, nó source tệp `.flyenv` của dự án đó — nhờ đó `php -v` hay `node -v` lập tức báo phiên bản được gắn.
- **Chỉ các thư mục trong allowlist:** hook chỉ kích hoạt các tệp `.flyenv` cho những thư mục dự án mà FlyEnv đã đăng ký và đồng bộ vào danh sách cho phép, nhờ đó một tệp lạc chỗ nào đó trên đĩa không bao giờ bị thực thi.
- **PowerShell trên Windows:** cùng cơ chế đó được nối vào PowerShell profile, bao phủ cả Windows PowerShell lẫn PowerShell (pwsh).

![Shell hook nạp tệp .flyenv của một dự án sau khi đổi thư mục](https://oss.macphpstudy.com/image/features/per-project-runtimes-3.webp)

## Tích hợp IDE và terminal

Vì việc gắn kết nằm trong dự án chứ không phải trong một thiết lập toàn cục, mọi công cụ được mở cho thư mục đó đều kế thừa môi trường đúng.

- **Các hành động mở trong:** mỗi dòng dự án cung cấp lối tắt để mở thư mục trong một terminal hay một IDE — Terminal và PowerShell, cộng các trình soạn thảo như VSCode, PhpStorm, WebStorm, PyCharm hay Sublime tùy theo module ngôn ngữ — với môi trường dự án đã được áp dụng sẵn.
- **Chạy như một dịch vụ:** một dự án có thể tùy chọn chạy trực tiếp từ FlyEnv với một lệnh khởi động hay tệp run tùy chỉnh, một cổng được chọn (mặc định 3000, được liên kết dưới dạng `http://127.0.0.1:<port>`), và các biến môi trường bổ sung cung cấp trực tiếp hay từ một tệp env — tiện để giữ một dev server sống sót mà không cần cửa sổ terminal.
- **Chỉnh nhanh:** nhấp đúp một dòng dự án mở một trình chỉnh sửa gọn cho phiên bản được gắn, cổng và ghi chú, nhờ đó việc đổi runtime của một dự án chỉ mất vài giây.

## Chọn phiên bản theo từng site

Mỗi site tạo trong [Host](/vi/features/local-sites-https) có thể chọn phiên bản PHP đã cài để phục vụ site. Nhiều phiên bản có thể phục vụ các site khác nhau cùng lúc. macOS và Linux dùng Unix socket riêng, Windows dùng các cổng lắng nghe FastCGI riêng. Xem [tính năng PHP](/vi/features/php) để biết chi tiết theo nền tảng.

![Danh sách site của module Host hiển thị phiên bản PHP được gắn cho từng site](https://oss.macphpstudy.com/image/features/per-project-runtimes-4.webp)

<FeatureRelatedLinks locale="vi" slug="per-project-runtimes" />

## Lưu ý tương thích

Shell hook đòi hỏi một login shell được hỗ trợ: zsh hay bash trên macOS và Linux, và PowerShell (Windows PowerShell hay pwsh) trên Windows; các shell khác không được nối tự động. Hook chỉ source các tệp `.flyenv` cho những thư mục đã đăng ký trong FlyEnv, và nó điều chỉnh PATH cho phiên shell hiện tại — nó không đổi các biến môi trường toàn hệ thống của bạn. Gắn phiên bản chỉ chọn giữa các runtime đã được cài hay thêm trong FlyEnv; nó không thể cung cấp một phiên bản không có mặt trên máy. Lựa chọn PHP theo từng site áp dụng cho các site được phục vụ qua PHP-FPM (FastCGI trên Windows); site tĩnh và runtime không phải PHP không dùng cơ chế này. Các khác biệt nền tảng — chẳng hạn unix socket trên macOS/Linux so với FastCGI worker trên Windows — bám theo hành vi của [module PHP](/vi/features/php) bên dưới, còn [trang tải xuống](/vi/download) phản ánh những gì khả dụng cho hệ điều hành của bạn.
