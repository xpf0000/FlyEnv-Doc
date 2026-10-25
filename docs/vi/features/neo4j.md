---
layout: doc
titleTemplate: false
title: 'Neo4j Server local với Browser và liên kết Java | FlyEnv'
description: 'Chạy các phiên bản Neo4j gắn với một Java runtime tương thích của FlyEnv, với cấu hình được quản lý và Neo4j Browser.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản Neo4j gắn với một Java runtime tương thích của FlyEnv, với cấu hình được quản lý và Neo4j Browser.'
  - - meta
    - property: og:title
      content: 'Neo4j Server local với Browser và liên kết Java | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản Neo4j gắn với một Java runtime tương thích của FlyEnv, với cấu hình được quản lý và Neo4j Browser.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/neo4j
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/neo4j
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Neo4j local với FlyEnv

Neo4j là một cơ sở dữ liệu đồ thị mã nguồn mở lưu trữ dữ liệu dưới dạng node và quan hệ thay vì bảng, được truy vấn bằng ngôn ngữ Cypher riêng của nó — một mô hình dữ liệu khác với các document store như [MongoDB](/vi/features/mongodb). Nó phù hợp với những workload mà các kết nối giữa các thực thể là quan trọng — đồ thị xã hội, knowledge graph, hệ thống gợi ý và phát hiện gian lận. FlyEnv chạy Neo4j như một dịch vụ local được quản lý: cài các phiên bản từ danh sách trực tuyến tĩnh, gắn từng phiên bản với một Java runtime tương thích từ module Java của FlyEnv, chỉnh `neo4j.conf` của nó, và theo dõi log của nó — tất cả từ các tab **Service / Version Manager / Config File / Log** của module Neo4j. Nút **Neo4j Browser** mở web UI riêng của cơ sở dữ liệu ngay khi dịch vụ đã chạy.

![Tổng quan module Neo4j của FlyEnv](https://oss.macphpstudy.com/image/features/neo4j-1.webp)

## Quản lý phiên bản

Cài các phiên bản Neo4j từ **Neo4j → Version Manager**.

- **Chỉ danh sách trực tuyến tĩnh:** Neo4j được cài từ danh sách gói tĩnh của FlyEnv — tệp zip trên Windows, tar.gz ở những nơi khác. Các nguồn Homebrew và MacPorts không được cung cấp cho module này.
- **Các phiên bản được hỗ trợ:** chỉ Neo4j **5.23.0 trở lên** được hỗ trợ; các bản phát hành cũ hơn không được hỗ trợ.
- **Phiên bản tùy chỉnh:** thêm một thư mục chứa bản cài Neo4j của riêng bạn và FlyEnv sẽ quét nó, liệt kê các bản build đó cạnh các phiên bản được quản lý.

![Neo4j Version Manager với danh sách trực tuyến tĩnh](https://oss.macphpstudy.com/image/features/neo4j-2.webp)

## Gắn phiên bản Java

Neo4j chạy trên JVM, vì vậy mỗi phiên bản được cài đều cần một Java runtime. Bảng Service có một **cột Java** riêng nơi bạn chọn JDK cho từng phiên bản Neo4j, sử dụng các bản cài Java được quản lý bởi [module Java](/vi/features/java) của FlyEnv.

- **JAVA_HOME theo từng phiên bản:** JDK được chọn được gắn với phiên bản Neo4j đó và được truyền dưới dạng `JAVA_HOME` khi dịch vụ khởi động.
- **Chính sách tương thích:** Neo4j 5.x chạy trên Java 17 hoặc 21; Neo4j 2025.x đòi hỏi Java 21 hoặc 25. Hãy gắn một JDK tương thích trước khi khởi động dịch vụ — [hướng dẫn môi trường phát triển Java](/vi/guide/set-up-java-development-environment) trình bày từng bước cài JDK trong FlyEnv.

![Bảng dịch vụ Neo4j với cột Java theo từng phiên bản](https://oss.macphpstudy.com/image/features/neo4j-3.webp)

## Dịch vụ và cấu hình

FlyEnv khởi động Neo4j ở foreground với `neo4j console` — `neo4j.ps1 console` qua PowerShell trên Windows — với `JAVA_HOME` và `NEO4J_CONF` được đặt cho phiên bản được chọn. Mỗi phiên bản có thư mục instance riêng dưới thư mục Neo4j của FlyEnv.

- **`neo4j.conf` theo từng instance:** tab **Config File** chỉnh `conf/neo4j.conf` của instance — được sao chép từ bản phân phối — trong một trình chỉnh sửa thô kèm liên kết tới tài liệu chính thức của Neo4j.
- **Cổng lấy từ cấu hình:** cổng HTTP (mặc định **7474**), cổng HTTPS (7473) và cổng Bolt (mặc định **7687**) được đọc trực tiếp từ `neo4j.conf`, nhờ đó các cổng hiển thị trong FlyEnv luôn khớp với những gì server thực sự gắn vào.

![Chỉnh neo4j.conf trong trình chỉnh sửa cấu hình thô](https://oss.macphpstudy.com/image/features/neo4j-4.webp)

## Log

Tab **Log** chuyển đổi giữa các tệp log của server: đầu ra start-out và start-error, cùng `neo4j.log` và `debug.log` riêng của Neo4j. Log khởi động là điểm dừng đầu tiên khi một phiên bản không chạy nổi — ví dụ một liên kết Java không tương thích sẽ hiện ra ở đó ngay lập tức.

## Neo4j Browser

Neo4j đi kèm web interface riêng của nó, và FlyEnv không thay thế nó: nút **Neo4j Browser** trên thanh công cụ Service mở `http://127.0.0.1:<http port>` trong trình duyệt ngoài của bạn, nơi bạn có thể chạy các truy vấn Cypher và xem xét đồ thị trên instance đang chạy. Xem các [bản demo](/vi/demos) để thấy quy trình này trong thực tế.

<FeatureRelatedLinks locale="vi" slug="neo4j" />

## Lưu ý tương thích

FlyEnv quản lý runtime Neo4j local, cấu hình theo từng instance và liên kết Java của nó; ứng dụng không đảm bảo mọi phiên bản Neo4j đều khả dụng trên mọi hệ điều hành. Chỉ Neo4j 5.23.0 trở lên được hỗ trợ, bản cài lấy từ danh sách trực tuyến tĩnh (zip trên Windows, tar.gz trên macOS và Linux), và mỗi phiên bản đòi hỏi một JDK tương thích — Java 17/21 cho Neo4j 5.x, Java 21/25 cho Neo4j 2025.x — được cài qua module Java của FlyEnv. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài trên máy bạn.
