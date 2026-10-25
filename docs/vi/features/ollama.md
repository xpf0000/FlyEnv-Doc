---
layout: doc
titleTemplate: false
title: 'Chạy Ollama local với quản lý model | FlyEnv'
description: 'Cài đặt và chạy các phiên bản Ollama, pull và chạy model từ thư viện, và tinh chỉnh các thiết lập OLLAMA_* một cách trực quan.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chạy các phiên bản Ollama, pull và chạy model từ thư viện, và tinh chỉnh các thiết lập OLLAMA_* một cách trực quan.'
  - - meta
    - property: og:title
      content: 'Chạy Ollama local với quản lý model | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chạy các phiên bản Ollama, pull và chạy model từ thư viện, và tinh chỉnh các thiết lập OLLAMA_* một cách trực quan.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/ollama
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/ollama
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Chạy Ollama local với FlyEnv

Ollama là một công cụ mã nguồn mở để chạy các mô hình ngôn ngữ lớn ngay trên máy của bạn, phục vụ chúng qua một API local mà bất kỳ ứng dụng nào cũng có thể gọi. Nó là lựa chọn phổ biến khi bạn muốn các model chat, code hay embedding khả dụng ở local — kể cả hoàn toàn offline. FlyEnv quản lý Ollama như một dịch vụ local hạng nhất: cài Ollama từ bản build tĩnh hay Homebrew, khởi động `ollama serve` chỉ với một cú nhấp, tinh chỉnh các thiết lập môi trường `OLLAMA_*` qua một biểu mẫu trực quan, và quản lý model từ tab **Model** chuyên dụng — duyệt thư viện trực tuyến, pull model mới và chạy chúng trong terminal nhúng. Khi một model đã được pull, bạn có thể xây dựng trên nền nó với [hướng dẫn AI agent local offline](/vi/guide/build-local-offline-ai-agent).

![Tổng quan module Ollama của FlyEnv với các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/ollama-1.webp)

## Quản lý phiên bản

Tab **Version Manager** cài đặt và giữ các phiên bản Ollama song song với nhau, và bạn chọn phiên bản nào mà dịch vụ chạy.

- **Tải xuống tĩnh:** các tệp nén Ollama dựng sẵn (`.zip` / `.tgz`) được lấy qua version API của FlyEnv, có trên macOS, Linux và Windows.
- **Homebrew:** cài formula `ollama` qua Homebrew ở những nơi nó khả dụng, và quản lý nó cạnh các bản build tĩnh.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa bản cài Ollama của riêng bạn; nó quét tìm binary `ollama` (hay `ollama.exe`) và liệt kê nó cùng các phiên bản được quản lý.
- **Một phiên bản chạy:** mô hình dịch vụ chạy một phiên bản Ollama duy nhất mỗi thời điểm, nhờ đó API endpoint luôn thuộc về một bản build đã biết.

![Ollama Version Manager với các nguồn tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/ollama-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi chạy Ollama detached dưới dạng `ollama serve` và theo dõi tệp pid của nó để khởi động và dừng sạch sẽ. Công tắc bật tắt trên thanh bên và mục trên khay hệ thống điều khiển dịch vụ mà không cần mở trang module. Theo mặc định, server lắng nghe trên `0.0.0.0:11434`, cổng API tiêu chuẩn của Ollama.

Các biến môi trường được đọc từ `ollama.conf` trong thư mục gốc của FlyEnv — mọi dòng bắt đầu bằng `OLLAMA_` đều được truyền cho tiến trình server. Tab **Config File** chỉnh tệp này theo hai cách:

- **Biểu mẫu thiết lập chung:** điều chỉnh các biến hay thay đổi chẳng hạn như `OLLAMA_DEBUG`, `OLLAMA_HOST` và `OLLAMA_KEEP_ALIVE` từ một biểu mẫu trực quan thay vì tự tay chỉnh tệp.
- **Trình chỉnh sửa thô:** chuyển sang khung xem nguồn đầy đủ cho bất cứ thứ gì biểu mẫu chưa bao phủ; một bản sao `ollama.conf.default` được giữ cạnh đó làm mặc định tham chiếu.

![Tệp cấu hình Ollama với biểu mẫu thiết lập chung OLLAMA_*](https://oss.macphpstudy.com/image/features/ollama-3.webp)

## Quản lý model

Tab **Model** là nơi các model được pull, liệt kê và chạy.

- **Danh sách local:** hiển thị các model đã có trên máy của bạn, đọc từ `ollama list`.
- **Library:** một danh mục trực tuyến các model khả dụng được lấy từ API của FlyEnv và cache ở local, nhờ đó việc duyệt luôn nhanh giữa các phiên làm việc.
- **Pull và chạy trong terminal:** pull một Model mới từ Library hay chạy một model từ danh sách local — lệnh được thực thi trong terminal nhúng của FlyEnv, nhờ đó bạn thấy tiến trình tải xuống thật và đầu ra chat. Một nút sao chép lệnh đặt chính xác lệnh `ollama` vào clipboard của bạn để dùng ở nơi khác.
- **Báo cáo phần cứng:** một báo cáo tích hợp sẵn về GPU, CPU và RAM của máy giúp bạn đánh giá những model cỡ nào sẽ chạy êm ái.

![Tab Model của Ollama với các model local và thư viện trực tuyến](https://oss.macphpstudy.com/image/features/ollama-4.webp)

![Pull một model Ollama trong terminal nhúng](https://oss.macphpstudy.com/image/features/ollama-5.webp)

Một dịch vụ Ollama đang chạy trên cổng 11434 còn kết hợp tốt với các module FlyEnv khác — gọi API local từ các workflow dựng trong [n8n](/vi/features/n8n), lưu các embedding từ model local vào cơ sở dữ liệu vector [Qdrant](/vi/features/qdrant), hay chạy các tài khoản AI dạng CLI sau các endpoint tương thích OpenAI với [CLIProxyAPI](/vi/features/cliproxyapi). Hướng dẫn về [FlyEnv làm việc cùng trợ lý AI](/vi/guide/flyenv-work-with-ai) cho thấy những mảnh ghép này khớp vào một thiết lập rộng hơn thế nào.

## Log

Tab **Log** mở các log server theo từng phiên bản trực tiếp bên trong FlyEnv: `ollama-<version>-start-out.log` cho đầu ra chuẩn và `ollama-<version>-start-error.log` cho lỗi. Đây là nơi đầu tiên cần xem khi một phiên bản không khởi động nổi hay API trên cổng 11434 ngừng phản hồi.

<FeatureRelatedLinks locale="vi" slug="ollama" />

## Lưu ý tương thích

FlyEnv quản lý runtime Ollama local, tệp cấu hình và quy trình làm việc với model của nó; ứng dụng không đóng gói sẵn model — mọi lần pull đều tải xuống từ thư viện Ollama upstream và cần truy cập mạng cùng đủ dung lượng đĩa. Bản cài tĩnh được cung cấp trên macOS, Linux và Windows; tính khả dụng của Homebrew phụ thuộc vào nền tảng của bạn, còn các phiên bản hiển thị trong Version Manager phản ánh những gì các nguồn đó phát hành. Mỗi thời điểm chỉ một phiên bản Ollama chạy, và các thay đổi cấu hình trong `ollama.conf` có hiệu lực ở lần khởi động dịch vụ kế tiếp.
