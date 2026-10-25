---
layout: doc
titleTemplate: false
title: 'Cơ sở dữ liệu vector Qdrant local với Dashboard | FlyEnv'
description: 'Chạy các phiên bản Qdrant với cấu hình được quản lý và web dashboard tích hợp sẵn cho tìm kiếm vector local.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Qdrant với cấu hình được quản lý và web dashboard tích hợp sẵn cho tìm kiếm vector local.'
  - - meta
    - property: og:title
      content: 'Cơ sở dữ liệu vector Qdrant local với Dashboard | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Qdrant với cấu hình được quản lý và web dashboard tích hợp sẵn cho tìm kiếm vector local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/qdrant
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/qdrant
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Qdrant local với FlyEnv

Qdrant là một cơ sở dữ liệu vector mã nguồn mở: nó lưu trữ các embedding vector và tìm ra những vector giống nhất một cách nhanh chóng. Nó là một khối xây dựng phổ biến cho các ứng dụng tìm kiếm ngữ nghĩa, hệ thống gợi ý và retrieval-augmented generation (RAG) — thường ghép cặp với một trình chạy model local như [Ollama](/vi/features/ollama); [hướng dẫn AI agent local offline](/vi/guide/build-local-offline-ai-agent) cho thấy loại stack đó từ đầu đến cuối. Module Qdrant của FlyEnv chạy nó như một dịch vụ local được quản lý: cài các phiên bản từ một danh sách trực tuyến được tuyển chọn, khởi động và dừng chúng từ thanh bên, và chỉnh cấu hình YAML của từng phiên bản trong một trình chỉnh sửa tích hợp sẵn. Mỗi instance nhận một cấu hình được sinh ra, log theo từng phiên bản, và web dashboard của Qdrant được phục vụ trên cổng 6333 — không cần thiết lập thủ công nào.

![Tổng quan module Qdrant của FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-1.webp)

## Quản lý phiên bản Qdrant

Cài các phiên bản Qdrant song song từ **Qdrant → Version Manager** và giữ tất cả chúng khả dụng cùng lúc.

- **Danh sách trực tuyến tĩnh:** Qdrant chỉ được phân phối qua nguồn Static của FlyEnv — một danh sách phiên bản tải xuống được (tệp nén zip hay tar.gz) trên macOS, Linux và Windows. Homebrew và MacPorts không được cung cấp cho module này.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa binary Qdrant của riêng bạn và nó xuất hiện trong danh sách cạnh các phiên bản được quản lý.
- **Mỗi thời điểm một phiên bản:** nhiều phiên bản có thể cùng được cài, nhưng chỉ một instance Qdrant chạy mỗi thời điểm; khởi động một phiên bản sẽ dừng phiên bản đang chạy trước đó.

![Qdrant Version Manager với danh sách phiên bản trực tuyến Static](https://oss.macphpstudy.com/image/features/qdrant-2.webp)

## Dịch vụ và cấu hình

Tab **Service** là bảng các instance đang chạy: khởi động hay dừng một phiên bản, chọn phiên bản hiện hành, và mở thư mục cài của nó. FlyEnv khởi chạy binary `qdrant` trần như một tiến trình được quản lý, nhờ đó việc khởi động và tắt hoạt động như nhau trên mọi nền tảng.

Mỗi phiên bản đã cài có cấu hình riêng: ở lần dùng đầu tiên FlyEnv sinh `config/config.yaml` từ một mẫu và đặt nó cạnh binary của phiên bản đó. Vì tệp nằm cạnh binary, các thay đổi cấu hình là theo từng phiên bản — chỉnh YAML của phiên bản này không bao giờ ảnh hưởng phiên bản khác. Tab **Config File** mở tệp này trong một trình chỉnh sửa YAML thô, và mẫu mặc định đặt cổng REST và web là 6333.

![Cấu hình Qdrant](https://oss.macphpstudy.com/image/features/qdrant-3.webp)

## Log

Qdrant ghi hai tệp log cho mỗi phiên bản đã cài, cả hai đều xem được mà không phải rời FlyEnv:

- **Tab Log:** đầu ra khởi động chuẩn của phiên bản (`qdrant-<version>-start-out.log`).
- **Tab Error Log:** đầu ra lỗi của phiên bản (`qdrant-<version>-start-error.log`).

Việc tách thành log out và error theo từng phiên bản giúp bạn dễ thấy chính xác một bản build Qdrant cụ thể đã in gì trong lúc khởi động hay khi phục vụ các request.

![Log của Qdrant](https://oss.macphpstudy.com/image/features/qdrant-4.webp)

## Web dashboard

Khi một phiên bản Qdrant đang chạy, tab Service hiển thị một nút dashboard mở `http://127.0.0.1:6333/dashboard` trong trình duyệt của bạn.

FlyEnv thiết lập điều này tự động: khi khởi động hay cài đặt, nó tải qdrant-web-ui chính thức từ GitHub và để Qdrant phục vụ nó qua thiết lập `QDRANT__SERVICE__STATIC_CONTENT_DIR`, nhờ đó dashboard chạy được ngay từ đầu với instance trên cổng 6333 — không cần web server riêng hay tải asset thủ công.

![Web dashboard của Qdrant được mở từ FlyEnv](https://oss.macphpstudy.com/image/features/qdrant-5.webp)

<FeatureRelatedLinks locale="vi" slug="qdrant" />

## Lưu ý tương thích

FlyEnv quản lý việc cài phiên bản Qdrant, vòng đời dịch vụ, cấu hình và log theo từng phiên bản, cùng dashboard đi kèm; nó không quản lý collection, snapshot hay API key — những thứ đó vẫn nằm bên trong Qdrant. Người dùng PostgreSQL có thể có tìm kiếm vector tương tự bên trong một cơ sở dữ liệu quan hệ qua pgvector — xem [module PostgreSQL](/vi/features/postgresql). Nút dashboard luôn nhắm tới cổng mặc định 6333, nhờ đó hãy giữ cổng đó trong cấu hình nếu bạn dựa vào nó. Về các gói mà FlyEnv có thể cài, hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn chuẩn xác, và xem các [bản demo](/vi/demos) để thấy module trong thực tế.
