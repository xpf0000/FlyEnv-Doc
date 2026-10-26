---
layout: doc
titleTemplate: false
title: 'Tích hợp Terminal và Shell | FlyEnv'
description: 'FlyEnv gặp gỡ terminal của bạn: shell hook cho môi trường dự án, thao tác mở trong terminal và các terminal tích hợp.'
head:
  - - meta
    - name: description
      content: 'FlyEnv gặp gỡ terminal của bạn: shell hook cho môi trường dự án, thao tác mở trong terminal và các terminal tích hợp.'
  - - meta
    - property: og:title
      content: 'Tích hợp Terminal và Shell | FlyEnv'
  - - meta
    - property: og:description
      content: 'FlyEnv gặp gỡ terminal của bạn: shell hook cho môi trường dự án, thao tác mở trong terminal và các terminal tích hợp.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/cli-terminal
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/cli-terminal
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tích hợp Terminal trong FlyEnv

FlyEnv không kèm theo ứng dụng terminal riêng — thay vào đó, nó tự kết nối vào những terminal bạn đang dùng. Một shell hook nạp đúng môi trường dự án khi bạn `cd` vào một dự án, các dịch vụ và dự án có thể được khởi chạy trong một cửa sổ terminal thực chỉ với một cú nhấp, các bản cài kéo dài chạy trong những terminal xterm tích hợp bên trong ứng dụng, và một tiện ích trên trang Tools mở các tệp cùng mục PATH đứng sau biến môi trường của bạn để chỉnh sửa.

![Danh sách dự án của FlyEnv với các phiên bản runtime được gắn kết và các thao tác terminal](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## Shell hook và tích hợp PATH

FlyEnv cài một shell hook nhỏ để terminal hàng ngày của bạn tự động nhận môi trường dự án. Trên macOS và Linux, script trợ giúp `flyenv.sh` được source từ `~/.zshrc` hoặc `~/.bashrc`; trên Windows, FlyEnv tích hợp với PowerShell profile thay thế, bao phủ cả Windows PowerShell cổ điển lẫn bản `pwsh` đa nền tảng.

- **Kích hoạt theo thư mục:** hook phản ứng với thay đổi thư mục. Khi bạn đi vào một thư mục dự án mà FlyEnv quản lý, nó sẽ source tệp `.flyenv` của dự án đó; các thư mục nằm ngoài whitelist đồng bộ của FlyEnv được giữ nguyên vẹn.
- **Tệp môi trường `.flyenv`:** mỗi dự án đã đăng ký nhận một tệp `.flyenv` ở thư mục gốc, tệp này đặt các thư mục bin của runtime được gắn lên trước `PATH` — cú pháp `export PATH="..."` trên macOS và Linux, `$env:PATH = ...` trên Windows. Mỗi dòng được gắn thẻ với ID dự án, nên FlyEnv có thể ghi lại tệp một cách idempotent bất cứ khi nào bạn thay đổi gắn kết. Xem [Per-Project Runtime Environments](/vi/features/per-project-runtimes) để biết cách tạo các gắn kết.
- **Kiểm soát PATH theo từng phiên bản:** từ bảng phiên bản của một module ngôn ngữ, bạn quyết định phiên bản đã cài nào chiếm `PATH`, và bảng đánh dấu mục hiện tại do FlyEnv hay do công cụ khác đặt vào.
- **Thiết lập PATH từng bước:** [hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) đi qua toàn bộ quy trình kèm ảnh chụp màn hình.

![Bảng phiên bản với các công tắc PATH hiển thị các mục do FlyEnv đặt](https://oss.macphpstudy.com/image/features/cli-terminal-2.webp)

## Mở trong Terminal

Đôi khi một tiến trình cần nằm trong một cửa sổ terminal thực — để theo dõi đầu ra, trả lời các prompt, hoặc giữ nó sống sau khi FlyEnv đóng. Các dự án và dịch vụ có thể được khởi chạy đúng theo cách đó.

- **Dự án:** bật tùy chọn chạy trong terminal trên một dự án ngôn ngữ và lệnh run hoặc tệp run của nó sẽ mở trong một cửa sổ terminal hệ thống, với thư mục dự án làm thư mục làm việc và môi trường dự án được áp dụng.
- **Khởi chạy theo cách native của từng nền tảng:** macOS điều khiển Terminal.app thông qua AppleScript, Linux khởi chạy thông qua một script trợ giúp đi kèm, còn Windows tạo ra một cửa sổ PowerShell chạy script nội tuyến — cùng một thao tác, ba cách triển khai native.
- **Module tùy chỉnh và khởi chạy với quyền cao:** [các module dịch vụ do người dùng định nghĩa](/vi/features/user-modules) cũng cung cấp cách khởi chạy terminal tương tự, và những mục cần sudo có thể chuyển sang mở lệnh trong một terminal nơi hộp thoại mật khẩu hệ thống hoạt động bình thường.

![Open in Terminal của FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-3.webp)

## Terminal xterm tích hợp

Cho những tác vụ tương tác dùng một lần, FlyEnv nhúng các phiên terminal dựa trên xterm ngay trong cửa sổ của mình, nhờ đó bạn thấy đầu ra lệnh chân thực mà không cần rời khỏi ứng dụng.

- **Cài đặt một cú nhấp:** runtime và công cụ được khởi tạo thông qua trình cài chính thức của chúng trong terminal tích hợp — rustup cho Rust, GVM cho Go, Podman qua Homebrew trên macOS và Linux, cùng các script của nhà phát triển cho công cụ AI dòng lệnh với môi trường proxy của FlyEnv được chèn sẵn.
- **Thao tác gói:** biên dịch extension pgvector của [PostgreSQL](/vi/features/postgresql), tải về và chạy model [Ollama](/vi/features/ollama), hay cài [n8n](/vi/features/n8n) qua npm đều stream đầu ra thực tế vào khung xem tích hợp.
- **Bảng lệnh:** các module kiểu gateway như [OpenClaw](/vi/features/openclaw) và [Hermes](/vi/features/hermes-agent) cung cấp các bảng lệnh được phân loại, những mục trong đó được thực thi ngay trong terminal tích hợp, với các lệnh cần tham số được điền sẵn.
- **Thao tác Podman:** các phiên exec container và thao tác với image hay container mở trong một hộp thoại terminal tích hợp chuyên dụng.

## Công cụ biến môi trường hệ thống

Trang Tools bao gồm một tiện ích biến môi trường hệ thống có hình dạng theo từng nền tảng, nhờ đó những cài đặt thường nằm sau các hộp thoại của hệ điều hành hoặc rải rác trong các tệp shell đều chạm tới được từ cùng cửa sổ với các runtime của bạn.

- **Trên Windows — trình soạn thảo PATH:** các thư mục trên `PATH` của bạn được liệt kê trong một bảng nơi bạn có thể thêm, sửa, xóa và sắp xếp lại các mục trước khi lưu — quy trình đi kèm với các công tắc trong bảng phiên bản đã mô tả ở trên. Một nút tắt mở hộp thoại biến môi trường của chính hệ điều hành khi bạn cần đụng đến nhiều hơn PATH.
- **Trên macOS và Linux — chính các tệp shell:** công cụ liệt kê những tệp khởi động nơi biến môi trường thực sự được định nghĩa — `~/.zshrc`, `~/.bashrc`, `/etc/paths` và họ hàng của chúng — và mở từng tệp trong trình soạn thảo, hoặc reveal nó trong trình quản lý tệp.
- **Kết hợp với shell hook:** các tệp và mục PATH được chỉnh ở đây tạo nên lớp môi trường nền, còn các tệp `.flyenv` và shell hook xử lý lớp theo từng dự án bên trên.

![Trình chỉnh sửa biến môi trường hệ thống trên trang Tools của FlyEnv](https://oss.macphpstudy.com/image/features/cli-terminal-4.webp)

<FeatureRelatedLinks locale="vi" slug="cli-terminal" />

## Ghi chú tương thích

Tích hợp terminal trong FlyEnv là một tập capability trải khắp ứng dụng thay vì một module terminal độc lập duy nhất. Shell hook được cài cho zsh và bash trên macOS và Linux thông qua các tệp rc của shell; trên Windows, tích hợp tương đương nhắm vào PowerShell profile ở cả hai bản Windows PowerShell và `pwsh`, còn các shell khác không được gắn hook. Việc tự động nạp `.flyenv` chỉ áp dụng cho các thư mục dự án đã đăng ký và được FlyEnv đưa vào whitelist. Cửa sổ terminal dùng cho các thao tác mở-trong-terminal là của chính nền tảng — Terminal.app trên macOS, script trợ giúp terminal trên Linux, PowerShell trên Windows — nên giao diện và hành vi của nó theo hệ điều hành, không phải FlyEnv. Các phiên xterm tích hợp chỉ tồn tại cho những tác vụ cài đặt, chạy và exec cụ thể đã nêu ở trên, không phải một shell đa dụng. Hãy coi [trang Tải xuống](/vi/download) và hành vi trong ứng dụng trên nền tảng của bạn là nguồn chuẩn về những gì khả dụng.
