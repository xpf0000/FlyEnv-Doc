---
layout: doc
titleTemplate: false
title: 'OpenClaw Gateway và trung tâm điều khiển lệnh | FlyEnv'
description: 'Cài đặt OpenClaw, quản lý gateway của nó như một dịch vụ hệ điều hành, và chạy command palette của nó từ FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt OpenClaw, quản lý gateway của nó như một dịch vụ hệ điều hành, và chạy command palette của nó từ FlyEnv.'
  - - meta
    - property: og:title
      content: 'OpenClaw Gateway và trung tâm điều khiển lệnh | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt OpenClaw, quản lý gateway của nó như một dịch vụ hệ điều hành, và chạy command palette của nó từ FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/openclaw
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/openclaw
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# OpenClaw trong FlyEnv

OpenClaw là một trợ lý AI cá nhân mã nguồn mở chạy ngay trên máy của bạn: một gateway local kết nối các kênh chat như WhatsApp và Telegram với một coding agent, nhờ đó bạn có thể nhắn tin cho trợ lý từ bất cứ đâu. FlyEnv bọc OpenClaw CLI trong một bảng điều khiển gọn gàng: nó cài OpenClaw qua script chính thức, đăng ký và quản lý OpenClaw gateway như một dịch vụ hệ điều hành thực thụ, và trình bày khoảng 110 sub-command của CLI dưới dạng một palette phân loại chạy trong terminal nhúng của FlyEnv. Module này cố ý mỏng — FlyEnv không cản đường và điều khiển chính binary `openclaw` mà bạn vẫn có thể tự tay dùng. Để có một hướng dẫn theo hướng tác vụ, xem [Hướng dẫn OpenClaw](/vi/guide/openclaw); để thấy bức tranh lớn về các trợ lý AI trong FlyEnv, xem [FlyEnv Work with AI](/vi/guide/flyenv-work-with-ai).

![Module OpenClaw của FlyEnv hiển thị tab Service với trạng thái gateway](https://oss.macphpstudy.com/image/features/openclaw-1.webp)

## Cài đặt

OpenClaw được cài bằng cách chạy script cài đặt chính thức của nó bên trong terminal nhúng của FlyEnv, nhờ đó bạn theo dõi đầu ra trình cài thật thay vì tin vào một thanh tiến trình.

- **Chỉ script chính thức:** trên macOS và Linux FlyEnv chạy `curl -fsSL https://openclaw.ai/install.sh | bash`; trên Windows nó chạy trình cài PowerShell tương ứng (`iwr ... install.ps1 | iex`). FlyEnv không tự tải xuống bất kỳ binary nào.
- **Không có trình quản lý phiên bản:** module OpenClaw cố ý không có danh sách phiên bản và không có chuyển đổi đa phiên bản. Phiên bản được cài được đọc trực tiếp từ `openclaw --version`.
- **Công tắc gateway trên thanh bên:** mục OpenClaw trên thanh bên mang một công tắc bật tắt cho gateway. Nó bị vô hiệu cho đến khi cả CLI và gateway đã được cài, nhờ đó bảng điều khiển không bao giờ đưa ra một hành động mà máy không thể thực hiện.

## Quản lý gateway

Gateway là mảnh sống lâu nhất trong một thiết lập OpenClaw, và FlyEnv đăng ký nó với hệ điều hành thay vì tự trông nom một tiến trình.

- **Đăng ký dịch vụ cấp hệ điều hành:** việc cài gateway chạy `openclaw gateway install --force`, rồi đăng ký nó như một dịch vụ hệ thống — một LaunchAgent trên macOS (`ai.openclaw.gateway.plist` qua `launchctl bootstrap`) hay một systemd unit cấp người dùng trên Linux (`openclaw-gateway.service` qua `systemctl --user enable/start`). Nhờ vậy gateway sống sót qua các lần khởi động lại mà không cần FlyEnv đang chạy.
- **Khởi động, dừng và trạng thái từ bảng điều khiển:** công tắc thanh bên và tab Service phát lệnh `openclaw gateway start/stop`, với phương án dự phòng kill tiến trình nếu CLI không thể dừng nó một cách sạch sẽ.
- **Trạng thái trực tiếp và liên kết dashboard:** FlyEnv phân tích đầu ra `openclaw gateway status` để hiển thị trạng thái hiện tại và trích xuất URL dashboard, mở trong trình duyệt ngoài của bạn.

![Các nút điều khiển OpenClaw gateway với trạng thái dịch vụ trong FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-2.webp)

## Command palette

Tab Service gồm một command palette phân loại phủ khoảng 110 lệnh OpenClaw trên 13 danh mục — thông tin cơ bản, config, gateway, agents, browser, channels, nodes và devices, models, skills, system, sessions, backup và update, và plugins. Danh mục models kết hợp tự nhiên với một runtime model local như [Ollama](/vi/features/ollama) — xem [hướng dẫn AI agent local offline](/vi/guide/build-local-offline-ai-agent) — nếu bạn muốn gateway trả lời mà không cần model đám mây.

- **Chạy trong terminal nhúng:** mỗi lệnh được thực thi trong xterm tích hợp sẵn của FlyEnv, nhờ đó toàn bộ đầu ra CLI vẫn hiển thị và cuộn được.
- **Điền sẵn tham số:** các lệnh cần tham số được gõ sẵn vào terminal giúp bạn, chỉ việc hoàn thiện và chạy.
- **Ánh xạ trực tiếp tới CLI:** palette phản chiếu đúng OpenClaw CLI thực tế — không có gì được viết lại, nhờ đó lệnh bạn nhấp chính là lệnh bạn có thể tự gõ.

![Command palette OpenClaw phân loại trong FlyEnv](https://oss.macphpstudy.com/image/features/openclaw-3.webp)

## Cấu hình

Tab **Config File** chỉnh các tệp riêng của OpenClaw tại chỗ — không có biểu mẫu cài đặt, chỉ có các trình chỉnh sửa thô.

- **`~/.openclaw/openclaw.json`:** tệp cấu hình chính của OpenClaw, chỉnh sửa như nguồn thuần túy.
- **Tệp dịch vụ gateway trên macOS:** tệp `ai.openclaw.gateway.plist` được sinh ra cũng được mở để chỉnh trực tiếp.
- Các thay đổi được ghi ngược về chính những tệp mà OpenClaw CLI đọc, nhờ đó các chỉnh tay bên ngoài FlyEnv không bao giờ xung đột với một bản sao riêng.

![Cấu hình OpenClaw](https://oss.macphpstudy.com/image/features/openclaw-4.webp)

<FeatureRelatedLinks locale="vi" slug="openclaw" />

## Lưu ý tương thích

Module OpenClaw là một lớp bọc mỏng quanh CLI: nó không phải một module dịch vụ nền riêng và không có mục trên khay — tiến trình tồn tại duy nhất là gateway, và mảnh đó thuộc sở hữu của trình quản lý dịch vụ hệ điều hành một khi đã đăng ký. Đăng ký dịch vụ gateway dựa vào `launchctl` trên macOS và một systemd unit cấp người dùng trên Linux; trên Windows không có bước đăng ký dịch vụ hệ điều hành nào như vậy, và gateway được điều khiển thuần túy qua các lệnh `openclaw gateway start/stop` của CLI. FlyEnv không cung cấp trình xem log cho OpenClaw (`openclaw gateway status` và đầu ra riêng của CLI là nguồn thông tin runtime), và không có trình quản lý phiên bản — script cài đặt chính thức mang lại gì thì bạn chạy thứ đó. Kiểm tra [trang tải xuống](/vi/download) để biết bản phát hành FlyEnv hiện tại đi kèm module này. FlyEnv quản lý một trợ lý cá nhân dựa trên gateway khác theo cùng cách — xem module [Hermes Agent](/vi/features/hermes-agent).
