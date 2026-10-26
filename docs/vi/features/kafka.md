---
layout: doc
titleTemplate: false
title: 'Plugin Kafka: broker KRaft local và quản lý topic | FlyEnv'
description: 'Cài các phiên bản Kafka, gắn runtime Java, chạy một broker KRaft local và quản lý topic, cấu hình cùng log qua plugin Kafka của FlyEnv.'
---

# Kafka trong FlyEnv

[Apache Kafka](https://kafka.apache.org/documentation/) là một nền tảng event streaming cho các ứng dụng xuất bản và tiêu thụ bản ghi qua các topic. Plugin Kafka của FlyEnv đưa một broker local vào workspace của bạn cùng quản lý phiên bản, bộ chọn Java, điều khiển topic và các khung xem cấu hình, log.

Cài **Kafka** từ **[Settings → Plugin Market](/vi/features/plugin-market)**, rồi mở mục thanh bên của nó. Module cung cấp các tab **Service**, **Version Manager**, **Topics**, **Config File** và **Log**.

## Phiên bản Kafka và gắn Java

**Version Manager** cài các bản phân phối Kafka từ máy chủ tải xuống và lưu trữ của Apache. Giữ nhiều phiên bản được cài song song và chọn bản cần chạy từ tab **Service**. Module cũng quét các thư mục cài đặt tùy chỉnh đã cấu hình.

![Danh sách phiên bản Kafka với các phiên bản đã cài và điều khiển cài đặt trong FlyEnv](https://oss.macphpstudy.com/image/features/plugin/kafka-versions.png)

Mỗi bản cài Kafka có điều khiển **Select Java** riêng trong danh sách dịch vụ. Plugin liệt kê các runtime Java từ phiên bản 17 trở lên được phát hiện và ghi nhớ liên kết cho bản cài đó. Nếu không có runtime tương thích, **Install compatible Java** sẽ mở [module Java](/vi/features/java).

Hãy dừng dịch vụ trước khi đổi liên kết Java của nó. Plugin kiểm tra tệp thực thi Java và major version trước khi khởi động; JDK được chọn cũng phải đáp ứng yêu cầu của bản phát hành Kafka bạn chọn.

![Tab Service Kafka với một broker đã cài, bộ chọn runtime Java và nút khởi động](https://oss.macphpstudy.com/image/features/plugin/kafka-service.png)

## Một broker KRaft local

Khởi động, dừng và khởi động lại Kafka qua các điều khiển dịch vụ chuẩn. FlyEnv chuẩn bị một thiết lập KRaft đơn node kết hợp vai trò broker và controller, nhờ đó thiết lập local này không cần một dịch vụ ZooKeeper riêng.

- **Điểm cuối client:** cấu hình được sinh quảng bá `127.0.0.1:9092`.
- **Controller listener:** cấu hình được sinh dùng `127.0.0.1:9093`.
- **Khởi tạo lưu trữ:** FlyEnv tạo một cluster UUID và định dạng KRaft storage khi nó chưa được khởi tạo.
- **Tệp theo từng phiên bản:** cấu hình, dữ liệu và log nằm dưới thư mục instance của phiên bản được chọn.

Các giá trị mặc định dùng replication factor bằng một cho các topic nội bộ, khiến broker phù hợp cho phát triển ứng dụng local. Kết nối producer và consumer của riêng bạn vào điểm cuối được quảng bá.

## Quản lý topic

Tab **Topics** thao tác trên phiên bản Kafka được chọn trong tab **Service** và runtime Java được gắn với nó. Hãy khởi động broker trước khi dùng các điều khiển này.

- **Làm mới danh sách:** xem các tên topic trên broker local.
- **Create Topic:** nhập một tên và chọn từ 1 đến 100 partition; plugin tạo topic với replication factor bằng một.
- **Delete:** xác nhận việc gỡ một topic khỏi danh sách.

Khung nhìn này bao phủ việc tạo, liệt kê và xóa topic. Hãy dùng ứng dụng của bạn hay chính công cụ của Kafka để xuất bản và tiêu thụ bản ghi.

## Cấu hình và log

Tab **Config File** chỉnh trực tiếp `server.properties` của instance. Có sẵn một tệp `server-default.properties` được sinh làm tham chiếu mặc định. Điều chỉnh listener hay thiết lập broker tại đây, rồi khởi động lại dịch vụ để áp dụng.

![Trình chỉnh sửa server.properties Kafka hiển thị listener KRaft local và thiết lập lưu trữ](https://oss.macphpstudy.com/image/features/plugin/kafka-configuration.png)

Tab **Log** mở `server.log` khi tệp có sẵn, quay sang log lỗi khởi động hay log đầu ra khi thiếu. Hãy kiểm tra các tệp này khi broker không khởi động được, một runtime Java không phù hợp, hay một ứng dụng không kết nối nổi broker.

## Lưu ý tương thích

Plugin khả dụng trên macOS, Windows và Linux. Nó quản lý một broker KRaft local thay vì cấp phát một cụm sản xuất phân tán. Tính tương thích giữa bản phân phối Kafka và JDK vẫn phụ thuộc vào bản phát hành bạn cài; bộ chọn Java của plugin áp dụng mức tối thiểu là Java 17.

Khám phá [Plugin Market](/vi/features/plugin-market) cho các module tùy chọn khác, hay [RabbitMQ](/vi/features/rabbitmq) cho tích hợp message queue của FlyEnv.
