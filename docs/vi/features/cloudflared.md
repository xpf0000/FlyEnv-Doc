---
layout: doc
titleTemplate: false
title: 'Trình quản lý binary Cloudflared | FlyEnv'
description: 'Cài đặt và chuyển đổi các phiên bản cloudflared, giữ binary trên PATH của bạn cho module Cloudflare Tunnel.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển đổi các phiên bản cloudflared, giữ binary trên PATH của bạn cho module Cloudflare Tunnel.'
  - - meta
    - property: og:title
      content: 'Trình quản lý binary Cloudflared | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển đổi các phiên bản cloudflared, giữ binary trên PATH của bạn cho module Cloudflare Tunnel.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/cloudflared
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/cloudflared
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflared trong FlyEnv

cloudflared là client dòng lệnh mã nguồn mở của Cloudflare cho Cloudflare Tunnel — daemon kết nối một dịch vụ local với edge của Cloudflare để dịch vụ đó có thể được truy cập qua một hostname công khai. Module Cloudflared của FlyEnv quản lý binary dòng lệnh `cloudflared`: cài nhiều phiên bản song song, quyết định phiên bản nào terminal của bạn trỏ về, và đăng ký các bản dựng của riêng bạn từ các thư mục tùy chỉnh. Nhiệm vụ chính của nó trong FlyEnv là cung cấp binary mà [module Cloudflare Tunnel](/vi/features/cloudflare-tunnel) dùng để chạy các tunnel của bạn — bản thân module này không có daemon, không có tệp cấu hình và không có log, chỉ có hai tab: Service và Version Manager.

![Tổng quan module Cloudflared của FlyEnv](https://oss.macphpstudy.com/image/features/cloudflared-1.webp)

## Quản lý phiên bản Cloudflared

Cài các phiên bản cloudflared song song từ **Cloudflared → Version Manager** và giữ tất cả luôn sẵn sàng.

- **Danh sách static trực tuyến:** tải trực tiếp các bản dựng cloudflared chính thức — một tệp lưu trữ `.tgz` trên macOS (FlyEnv giải nén và xóa thuộc tính quarantine giúp bạn), một tệp `.exe` trên Windows, và một binary thuần trên Linux.
- **Homebrew:** trên macOS và Linux, cài cloudflared từ Homebrew bên cạnh các bản dựng static.
- **Thư mục tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản dựng cloudflared của riêng bạn và nó sẽ xuất hiện trong danh sách đã cài cạnh các phiên bản được quản lý.

![Quản lý phiên bản Cloudflared](https://oss.macphpstudy.com/image/features/cloudflared-2.webp)

## Chuyển đổi phiên bản qua dòng lệnh

Tab **Service** không chạy một dịch vụ nền — cloudflared ở đây chỉ là một binary, nên không có daemon nào để FlyEnv quản lý. Tab này là một bảng các phiên bản đã cài với nhiệm vụ kiểm soát PATH.

- **Chuyển đổi phiên bản trong terminal:** chọn một phiên bản ở đây sẽ đăng ký binary của bản cài đó lên `PATH` của bạn (hoặc gỡ nó đi), nhờ đó lệnh `cloudflared` trong terminal trỏ về phiên bản bạn đã chọn — cùng cơ chế được mô tả trong [hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment).
- **Alias theo từng phiên bản:** đặt cho các bản dựng gần giống nhau một alias ngắn để chúng luôn dễ phân biệt trong danh sách.
- **Dọn dẹp:** mỗi dòng hiển thị đường dẫn cài đặt của phiên bản và cung cấp thao tác xóa cho những phiên bản bạn không còn cần.

<FeatureRelatedLinks locale="vi" slug="cloudflared" />

## Ghi chú tương thích

Module này cố ý dừng lại ở binary và PATH: nó cung cấp và chuyển đổi các phiên bản cloudflared, nhưng không tự tạo hay chạy tunnel. Các thực thể tunnel, quy tắc DNS và log theo từng tunnel nằm trong [module Cloudflare Tunnel](/vi/features/cloudflare-tunnel) riêng biệt, module này sẽ yêu cầu bạn chọn một trong các phiên bản cloudflared đã cài ở đây khi bạn thêm một tunnel. Để có bài hướng dẫn end-to-end về việc đưa một [local site](/vi/features/local-sites-https) lên công khai qua tunnel, xem [hướng dẫn lập trình local với Cloudflare Tunnel](/vi/guide/cloudflare-tunnel-local-development).
