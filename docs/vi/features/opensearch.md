---
layout: doc
titleTemplate: false
title: 'Plugin OpenSearch: tìm kiếm local và Dashboards | FlyEnv'
description: 'Cài các phiên bản OpenSearch, quản lý một dịch vụ tìm kiếm local, chỉnh cấu hình và mở OpenSearch Dashboards tương ứng qua plugin của FlyEnv.'
---

# OpenSearch trong FlyEnv

[OpenSearch](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) là một engine tìm kiếm và phân tích. Plugin OpenSearch của FlyEnv thêm quản lý phiên bản, điều khiển dịch vụ, chỉnh cấu hình và log, cùng một chế độ phát triển local và một cách tích hợp để khởi động OpenSearch Dashboards.

Cài **OpenSearch** từ **[Settings → Plugin Market](/vi/features/plugin-market)**, rồi mở module từ thanh bên. Các tab của nó là **Service**, **Version Manager**, **Config File** và **Log**.

## Quản lý phiên bản

Dùng **Version Manager** để cài và giữ các phiên bản OpenSearch song song, rồi chọn phiên bản cần chạy từ **Service**.

- **macOS:** cài qua Homebrew; tab gói tĩnh bị ẩn vì OpenSearch không phát hành bản phân phối macOS chính thức.
- **Linux và Windows:** dùng các bản phân phối tĩnh khả dụng. Phiên bản và kiến trúc phụ thuộc vào các gói upstream phát hành.
- **Bản cài tùy chỉnh:** module có thể quét các thư mục đã cấu hình để tìm các bản cài OpenSearch sẵn có.

![Danh sách phiên bản OpenSearch với các bản phát hành đã cài và khả dụng trong FlyEnv](https://oss.macphpstudy.com/image/features/plugin/opensearch-versions.png)

Khởi động, dừng và khởi động lại phiên bản được chọn qua các điều khiển dịch vụ chuẩn của FlyEnv. Công tắc thanh bên và mục khay hệ thống cũng cho tiếp cận trạng thái dịch vụ của nó.

![Tab Service OpenSearch hiển thị một instance local đang chạy và các điều khiển dịch vụ](https://oss.macphpstudy.com/image/features/plugin/opensearch-service.png)

## Cấu hình ngay trong FlyEnv

Tab **Config File** mở ba tệp cho bản cài được chọn:

- **`opensearch.yml`:** thiết lập node, cluster, mạng và bảo mật.
- **`jvm.options`:** thiết lập JVM, gồm cả cấu hình heap.
- **`log4j2.properties`:** cấu hình logging.

FlyEnv phân giải vị trí cấu hình cho cả bản cài archive lẫn Homebrew, nhờ đó trình chỉnh sửa mở đúng các tệp mà dịch vụ dùng. Cấu hình Homebrew có thể được dùng chung qua thư mục cấu hình được liên kết của chính nó. Hãy khởi động lại OpenSearch sau khi lưu những thay đổi cần khởi động lại dịch vụ.

![Trình chỉnh sửa cấu hình OpenSearch với các tab opensearch.yml, jvm.options và log4j2.properties](https://oss.macphpstudy.com/image/features/plugin/opensearch-configuration.png)

## Chế độ phát triển local

Khung thiết lập chung cho **`opensearch.yml`** có một công tắc **Local Development Mode**. Bật nó để tắt security plugin của OpenSearch và dùng HTTP thuần không cần xác thực; khi đó một node với cổng HTTP mặc định sẽ truy cập được ở cổng 9200.

FlyEnv chú thích hóa các thiết lập bảo mật đi kèm và giữ chúng để khôi phục khi bạn tắt chế độ này. Nó đề xuất một hành động khởi động lại để thay đổi có hiệu lực.

Chỉ dùng chế độ này trên một mạng phát triển local đáng tin cậy. Tắt nó sẽ bật lại security plugin; việc khởi động có bảo mật đi theo yêu cầu của bản phát hành OpenSearch đã cài, gồm cả mật khẩu admin ban đầu nơi bắt buộc.

## Mở Dashboards tương ứng

Với một phiên bản OpenSearch hợp lệ đang chạy ở chế độ phát triển local, nhấp **Open Dashboards** trong tab **Service**. FlyEnv xác minh backend đang chạy, cài một phiên bản Dashboards tương ứng khi cần, khởi động nó và mở giao diện trong trình duyệt của bạn.

Trên Linux và Windows, thành phần đi kèm đến từ các gói Dashboards upstream. Trên macOS, plugin phân giải một phiên bản Homebrew tương ứng và cần Node.js để chuẩn bị Dashboards. Nếu phiên bản tương ứng đó không có, nó sẽ báo vấn đề thay vì khởi động một thành phần đi kèm không khớp.

Dashboards bind trên local, dùng cổng 5601 hay một cổng thay thế sẵn có. Vòng đời của nó đi theo dịch vụ OpenSearch: dừng backend cũng dừng thành phần Dashboards do nó quản lý.

Tích hợp hiện tại hỗ trợ chế độ phát triển local qua HTTP. Các cụm OpenSearch có xác thực hay bảo mật TLS không được trình khởi chạy Dashboards này hỗ trợ.

## Log và tương thích

Tab **Log** phân giải log của node từ các thiết lập `path.logs` và `cluster.name`, gồm cả bố cục Homebrew. Hãy kiểm tra nó khi một node không khởi động được hay thay đổi cấu hình gây lỗi.

Plugin khả dụng trên macOS, Windows và Linux; tính khả dụng của runtime và Dashboards vẫn phụ thuộc vào nền tảng và bản phát hành được chọn. Module này quản lý các dịch vụ local và giao diện đi kèm của chúng, thay vì cấp phát một cụm sản xuất.

So sánh với tích hợp [Elasticsearch](/vi/features/elasticsearch) của FlyEnv, hay quay lại [Plugin Market](/vi/features/plugin-market) để khám phá các module tùy chọn khác.
