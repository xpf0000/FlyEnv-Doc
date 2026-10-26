---
layout: doc
titleTemplate: false
title: 'Typesense Server local cho macOS và Linux | FlyEnv'
description: 'Chạy các phiên bản Typesense trên macOS và Linux với tệp cấu hình và log được quản lý.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Typesense trên macOS và Linux với tệp cấu hình và log được quản lý.'
  - - meta
    - property: og:title
      content: 'Typesense Server local cho macOS và Linux | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Typesense trên macOS và Linux với tệp cấu hình và log được quản lý.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/typesense
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/typesense
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Typesense trong FlyEnv

Typesense là một search engine mã nguồn mở tập trung vào tìm kiếm nhanh, tha thứ lỗi chính tả với một API đơn giản, thường được dùng cho site search và các trải nghiệm instant search-as-you-type — một lựa chọn nhẹ hơn [Elasticsearch](/vi/features/elasticsearch), cùng họ với [Meilisearch](/vi/features/meilisearch) và [ZincSearch](/vi/features/zincsearch). FlyEnv chạy nó như một search server local được quản lý trên macOS và Linux: cài các phiên bản từ một danh sách tĩnh hay Homebrew, khởi động `typesense-server` với một tệp cấu hình do FlyEnv quản lý, và theo dõi log của nó mà không phải rời ứng dụng. Module Typesense chỉ khả dụng trên macOS và Linux.

![Tổng quan module Typesense của FlyEnv](https://oss.macphpstudy.com/image/features/typesense-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản Typesense song song từ **Typesense → Version Manager**, và chọn phiên bản nào mà dịch vụ chạy.

- **Nguồn cài đặt:** một danh sách trực tuyến tĩnh, cộng thêm Homebrew dùng formula `typesense/tap/typesense-server` cùng các biến thể có phiên bản `@x.y` của nó.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa binary `typesense-server` của riêng bạn, và nó được liệt kê cạnh các phiên bản được quản lý.
- **Khởi động và dừng:** điều khiển phiên bản đang chạy từ tab Service hay công tắc thanh bên (cũng có trên khay hệ thống).

![Typesense Version Manager với các nguồn tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/typesense-2.webp)

## Dịch vụ và cấu hình

FlyEnv khởi động binary `typesense-server` thật với `--config=<BaseDir>/typesense/typesense-server.ini --log-dir=<BaseDir>/typesense/log`, nhờ đó tệp cấu hình là nguồn chân lý duy nhất cho dịch vụ.

- **Cấu hình sinh tự động:** ở lần khởi động đầu tiên FlyEnv ghi một `typesense-server.ini` mặc định với `api-port = 8108`, `api-key = xyz`, một thư mục dữ liệu dưới thư mục Typesense riêng của FlyEnv, và `enable-cors = true`, nhờ đó server trả lời trên cổng 8108 ngay từ đầu.
- **Tab Config File:** một trình chỉnh sửa nguồn thô cho `typesense-server.ini`, với `typesense-server.ini.default` được giữ cạnh đó làm tham chiếu nguyên vẹn. Một cấu hình được dùng chung giữa tất cả các phiên bản Typesense đã cài.

![Chỉnh typesense-server.ini trong trình chỉnh sửa cấu hình của FlyEnv](https://oss.macphpstudy.com/image/features/typesense-3.webp)

## Log

Tab **Log** mở tệp log của server tại `typesense/log/typesense.log` trực tiếp bên trong FlyEnv. Vì FlyEnv truyền thư mục log cho `typesense-server` khi khởi động, mọi phiên bản bạn chạy đều ghi vào cùng một nơi — điểm dừng đầu tiên khi một phiên bản không khởi động nổi hay một request tìm kiếm ứng xử bất thường.

<FeatureRelatedLinks locale="vi" slug="typesense" />

## Lưu ý tương thích

**Module Typesense chỉ khả dụng trên macOS và Linux; nó không xuất hiện trên Windows.** FlyEnv quản lý runtime local, tệp cấu hình và thư mục log của nó; nó không đi kèm một admin UI cho Typesense, và module không có tích hợp dự án — hãy tự trỏ Typesense client của ứng dụng tới cổng đã cấu hình (mặc định 8108). Bộ tính năng chính xác của mỗi bản build đến từ bản phát hành Typesense upstream. Kiểm tra [trang tải xuống](/vi/download) để biết bản phát hành FlyEnv hiện tại, và xem [Demos](/vi/demos) để có các hướng dẫn về các module dịch vụ của FlyEnv trong thực tế.
