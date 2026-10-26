---
layout: doc
titleTemplate: false
title: 'Plugin Market: thêm module tùy chọn vào FlyEnv | FlyEnv'
description: 'Khám phá các plugin FlyEnv cho MySQL Cluster, MariaDB Cluster, Kafka, llama.cpp, OpenSearch, SQL Server, Dameng DM8 và command shortcuts.'
---

# Plugin Market trong FlyEnv

Plugin Market thêm các module tùy chọn vào workspace FlyEnv của bạn. Cài những công cụ mà dự án của bạn cần, và quản lý chúng ngay cạnh các runtime và dịch vụ sẵn có. Plugin có thể mang theo điều khiển dịch vụ, quản lý phiên bản, trình chỉnh sửa cấu hình và các khung nhìn chuyên biệt của riêng mình vào ứng dụng.

Mở **Settings → Plugin Market** để duyệt các plugin chính thức, quản lý các plugin đã cài hay thêm một nguồn bên thứ ba.

![Plugin Market FlyEnv hiển thị các plugin chính thức với điều khiển cài, cài lại và cập nhật](https://oss.macphpstudy.com/image/features/plugin/plugin-market-official.png)

## Các plugin khả dụng

Khám phá các module tùy chọn cho dịch vụ local, suy luận AI và các tác vụ terminal hằng ngày:

- **[MySQL Cluster](/vi/features/mysql-cluster):** chạy các instance MySQL độc lập trên cổng riêng, tạo nhóm source/replica GTID hay dựng Group Replication single-primary.
- **[MariaDB Cluster](/vi/features/mariadb-cluster):** chạy các instance MariaDB độc lập và tạo nhóm source/replica GTID với cấu hình, log và quản lý dữ liệu theo từng instance.
- **[Kafka](/vi/features/kafka):** chạy một broker KRaft local, gắn một runtime Java và tạo hay xóa topic ngay trong FlyEnv.
- **[llama.cpp](/vi/features/llama-cpp):** quản lý runtime suy luận, tải model GGUF và phục vụ một model qua một API local tương thích OpenAI.
- **[OpenSearch](/vi/features/opensearch):** quản lý một dịch vụ tìm kiếm, chỉnh cấu hình của nó và mở OpenSearch Dashboards tương ứng cho phát triển local.
- **[SQL Server](/vi/features/mssql):** cài và điều khiển Microsoft SQL Server trên Windows x64 và các bản Ubuntu được hỗ trợ, với thiết lập theo nền tảng và khung xem log.
- **[Dameng DM8](/vi/features/dameng):** cài DM8, khởi tạo một cơ sở dữ liệu và quản lý dịch vụ, cấu hình cùng log của nó trên Windows x64 hay Ubuntu 22.04.
- **[Command Shortcuts](/vi/features/command-shortcuts):** tổ chức các lệnh đã lưu thành các thẻ thư mục, sắp xếp lại và chạy một lệnh trong terminal hệ thống tại đường dẫn thư mục đó.

Trang của mỗi plugin giải thích các điều khiển nó thêm vào cùng yêu cầu nền tảng của phần mềm bên dưới.

### Plugin cụm cơ sở dữ liệu

MySQL Cluster và MariaDB Cluster thêm các khung nhìn instance chuyên dụng bên cạnh các module cơ sở dữ liệu tích hợp sẵn của FlyEnv. Tái sử dụng các phiên bản cơ sở dữ liệu đã cài để tạo instance local mới với cổng và thư mục dữ liệu riêng, rồi điều khiển từng thành viên hay cả nhóm từ plugin. MySQL Cluster còn cung cấp Group Replication; MariaDB Cluster cung cấp instance standalone và replication source/replica.

![Plugin Market FlyEnv liệt kê MySQL Cluster và MariaDB Cluster cạnh các plugin chính thức khác](https://oss.macphpstudy.com/image/features/plugin/plugin-market-clusters.webp)

## Cài module, rồi runtime của nó

Trong tab **Official**, làm mới danh mục và chọn **Install** trên một thẻ plugin. Danh mục hiển thị mô tả, tác giả và phiên bản của plugin. Cài và cập nhật plugin đòi hỏi một [giấy phép FlyEnv](/vi/license) còn hiệu lực.

Sau khi cài, plugin được bật sẽ thêm module của nó vào thanh bên. Với một plugin dịch vụ, hãy mở module đó để cài phần mềm mà nó quản lý, chẳng hạn một bản phân phối Kafka, một runtime llama.cpp hay một engine cơ sở dữ liệu. Gói plugin và runtime phần mềm có phiên bản riêng; cập nhật một plugin cập nhật tích hợp FlyEnv của nó. Command Shortcuts dùng terminal hệ thống sẵn có của bạn và không có service runtime riêng phải cài.

Các thay đổi plugin được áp dụng lên giao diện và backend mà không cần khởi động lại ứng dụng một cách định kỳ. Nếu một thay đổi cần khởi động lại để hoàn tất, FlyEnv sẽ đề xuất một lời nhắc khởi động lại.

## Cập nhật và quản lý plugin đã cài

Các thẻ danh mục hiển thị **Update** khi có phiên bản plugin mới hơn, và **Reinstall** cho một phiên bản đã cài. Dùng tab **Installed** để xem phiên bản của các plugin đã cài cùng trạng thái bật của chúng.

- **Enable:** đưa module của plugin vào workspace.
- **Disable:** dừng các dịch vụ plugin quản lý và gỡ module đang hoạt động của nó khỏi giao diện, nhưng vẫn giữ plugin được cài.
- **Uninstall:** xác nhận việc gỡ để dừng các dịch vụ nó quản lý và xóa các tệp plugin đã cài.

Các điều khiển này quản lý tích hợp FlyEnv. Việc quản lý runtime và model vẫn nằm trong từng trang module riêng.

## Nguồn bên thứ ba

Tab **Third-party sources** chấp nhận URL của một tệp JSON đăng ký plugin. Thêm một nguồn để khám phá các plugin của nó, duyệt mô tả và cài những module bạn chọn. Các nguồn đã cấu hình cũng có thể được gỡ khỏi tab này.

Plugin bên thứ ba có thể truy cập tệp local, tiến trình và mạng, nên FlyEnv hiển thị cảnh báo và hỏi xác nhận trước khi cài từ một nguồn bạn chưa từng xác nhận. Hãy chọn những nguồn bạn tin tưởng.

## Plugin và module tùy chỉnh

Dùng plugin khi bạn muốn một tích hợp đóng gói với giao diện chuyên dụng và thao tác riêng cho module. Dùng **[User Modules](/vi/features/user-modules)** khi bạn muốn mô tả lệnh hay script của riêng mình, gắn các tệp cấu hình và log, và quản lý vòng đời của nó mà không phải viết plugin.

Cả hai đều mở rộng workspace; Plugin Market là nơi khám phá và duy trì các tích hợp đóng gói. Quay lại [tổng quan tính năng](/vi/features#plugins) để khám phá lựa chọn plugin hiện tại.
