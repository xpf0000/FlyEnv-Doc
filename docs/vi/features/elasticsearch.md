---
layout: doc
titleTemplate: false
title: 'Elasticsearch local với trình quản lý phiên bản và cấu hình | FlyEnv'
description: 'Chạy các phiên bản Elasticsearch và chỉnh sửa elasticsearch.yml, jvm.options, log4j2.properties theo từng phiên bản.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Elasticsearch và chỉnh sửa elasticsearch.yml, jvm.options, log4j2.properties theo từng phiên bản.'
  - - meta
    - property: og:title
      content: 'Elasticsearch local với trình quản lý phiên bản và cấu hình | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Elasticsearch và chỉnh sửa elasticsearch.yml, jvm.options, log4j2.properties theo từng phiên bản.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/elasticsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/elasticsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Elasticsearch trong FlyEnv

Elasticsearch là một công cụ tìm kiếm và phân tích phân tán được xây dựng trên Apache Lucene, dùng cho tìm kiếm toàn văn, phân tích log và tổng hợp trên các tập dữ liệu lớn — nó cũng là công cụ tìm kiếm mà một stack [Magento](/vi/solutions/magento) local mong đợi. Nếu một cluster đầy đủ là quá mức cần thiết cho dự án của bạn, các module nhẹ hơn như [Meilisearch](/vi/features/meilisearch), [Typesense](/vi/features/typesense) và [ZincSearch](/vi/features/zincsearch) đảm nhận cùng phạm vi tìm kiếm tức thời. FlyEnv chạy Elasticsearch như một dịch vụ local được quản lý trên macOS, Windows và Linux: cài nhiều phiên bản song song, khởi động và dừng chúng từ một cửa sổ duy nhất, và chỉnh sửa `elasticsearch.yml`, `jvm.options`, `log4j2.properties` riêng của từng phiên bản mà không phải lùng sục trong các thư mục cài đặt. Log của node đang chạy mở ngay trong ứng dụng.

![Tổng quan module Elasticsearch của FlyEnv](https://oss.macphpstudy.com/image/features/elasticsearch-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản Elasticsearch song song từ **Elasticsearch → Trình quản lý phiên bản**.

- **Gói tĩnh trên mọi nền tảng:** Elasticsearch được cài từ danh sách gói tĩnh trực tuyến của FlyEnv trên cả macOS, Windows lẫn Linux — module này không có nguồn Homebrew hay MacPorts.
- **Vị trí cài đặt được quản lý:** mỗi phiên bản được giải nén từ kho lưu tar.gz hoặc zip vào thư mục riêng `elasticsearch/v<version>/` của FlyEnv, giữ các bản build do ứng dụng quản lý tách biệt với mọi thứ khác trên máy bạn.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản cài Elasticsearch của riêng bạn; nó quét tìm binary `bin/elasticsearch` (`elasticsearch.bat` trên Windows) và liệt kê các bản build đó cạnh các bản được quản lý.

![Trình quản lý phiên bản Elasticsearch với danh sách gói tĩnh](https://oss.macphpstudy.com/image/features/elasticsearch-2.webp)

## Quản lý dịch vụ

Tab **Dịch vụ** liệt kê mọi phiên bản đã cài cùng các nút khởi động, dừng và khởi động lại theo từng phiên bản. Công tắc ở thanh bên — cũng có trong khay hệ thống — khởi động hoặc dừng phiên bản hiện tại mà không cần mở trang module.

- **Mỗi lần một phiên bản:** khởi động một phiên bản sẽ dừng mọi phiên bản Elasticsearch đang chạy khác, nên node thứ hai không bao giờ tranh cổng với node đầu tiên.
- **Tiến trình Elasticsearch thật:** FlyEnv khởi chạy `bin/elasticsearch` của phiên bản đó với một tệp pid, đặt `ES_HOME` và `ES_PATH_CONF` về thư mục của phiên bản đó để nó khởi động với cấu hình đóng gói sẵn.
- **Cổng mặc định upstream:** vì FlyEnv không tự sinh cấu hình riêng, một lần cài mới sẽ trả lời trên các cổng mặc định của Elasticsearch — HTTP trên cổng 9200 và transport trên 9300 — cho đến khi bạn thay đổi.

![Tab Dịch vụ của Elasticsearch với một phiên bản đang chạy](https://oss.macphpstudy.com/image/features/elasticsearch-3.webp)

## Cấu hình

Elasticsearch có ba tab trình chỉnh sửa chuyên dụng trong FlyEnv — **elasticsearch.yml**, **jvm.options** và **log4j2.properties** — mỗi tab mở tệp nằm trong thư mục `config/` riêng của phiên bản đang chọn.

- **Tệp theo từng phiên bản:** chỉnh sửa áp dụng cho cấu hình đóng gói kèm phiên bản cụ thể đó, nên việc tinh chỉnh một lần cài không bao giờ lan sang lần cài khác.
- **Chỉnh sửa nguyên bản:** các trình chỉnh sửa làm việc trực tiếp trên tệp gốc, bao phủ mọi tùy chọn của Elasticsearch, JVM và logging thay vì một tập con hạn chế.
- **Không có bất ngờ tái sinh:** FlyEnv không bao giờ ghi đè các tệp này — những gì bạn lưu chính xác là những gì node đọc ở lần khởi động kế tiếp.

![Chỉnh sửa elasticsearch.yml cho một phiên bản đã cài](https://oss.macphpstudy.com/image/features/elasticsearch-4.webp)

## Log

Tab **Log** mở đầu ra log của node ngay trong FlyEnv. Khung xem chính hiển thị tệp `logs/elasticsearch.log` riêng của phiên bản — nơi đầu tiên cần xem khi một node không khởi động được hay một thay đổi cluster hoạt động sai. Các log server, deprecation và garbage-collector (`elasticsearch_server.json`, `elasticsearch_deprecation.json`, `gc.log`) do node ghi ra cũng có sẵn cạnh đó.

![Trình xem log Elasticsearch hiển thị log của node](https://oss.macphpstudy.com/image/features/elasticsearch-5.webp)

<FeatureRelatedLinks locale="vi" slug="elasticsearch" />

## Lưu ý tương thích

FlyEnv quản lý runtime Elasticsearch local và các tệp cấu hình đóng gói kèm từng phiên bản; nó không bổ sung bảng quản trị, và không đảm bảo mọi bản phát hành Elasticsearch đều được phát hành cho mọi hệ điều hành hay kiến trúc CPU — danh sách trong Trình quản lý phiên bản phản ánh các gói tĩnh thực tế khả dụng cho nền tảng của bạn. Elasticsearch khả dụng trên macOS, Windows và Linux. Tải ứng dụng từ [trang tải xuống](/vi/download) và xem module vận hành trong các [demo](/vi/demos).
