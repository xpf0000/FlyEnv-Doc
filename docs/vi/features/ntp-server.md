---
layout: doc
titleTemplate: false
title: 'Plugin NTP Server để mô phỏng thời gian khi kiểm thử | FlyEnv'
description: 'Chạy máy chủ NTP cục bộ trong FlyEnv để cung cấp giờ đồng bộ, áp dụng độ lệch cố định hoặc đóng băng tại một thời điểm phục vụ kiểm thử.'
---

# NTP Server trong FlyEnv

Dùng plugin NTP Server khi ứng dụng hoặc thiết bị cần kiểm thử lấy giờ qua NTP. Cho đồng hồ chạy nhanh hơn bảy ngày để kiểm tra cách thiết bị xử lý khi hết hạn, hoặc đóng băng thời gian tại một thời điểm cụ thể để tái hiện lỗi phụ thuộc vào ngày. Thời gian mô phỏng được gửi trong phản hồi NTP, còn máy chạy FlyEnv vẫn giữ nguyên giờ hệ thống.

## Cài plugin và khởi động dịch vụ

1. Cài **NTP Server** từ **[Cài đặt → Chợ plugin](/vi/features/plugin-market)**, rồi mở module trong thanh bên của FlyEnv.
2. Mở **Phiên bản** và cài một bản phát hành của máy chủ. FlyEnv cung cấp các bản x64 và ARM64 tương ứng cho Windows, macOS và Linux, đồng thời xác minh từng tệp tải xuống bằng mã kiểm tra SHA-256.
3. Mở **Cấu hình** để chọn chế độ đồng hồ, địa chỉ và cổng lắng nghe. Lưu thay đổi, sau đó chọn phiên bản đã cài và khởi động từ **Dịch vụ**. Khi lưu trong lúc dịch vụ đang chạy, FlyEnv sẽ khởi động lại dịch vụ để áp dụng cấu hình.

![NTP Server được đánh dấu đã cài trong thẻ plugin chính thức trên Chợ plugin FlyEnv](https://oss.macphpstudy.com/image/features/plugin/ntp-server-plugin-market.webp)

Dùng **Dịch vụ** để xem trạng thái, dừng hoặc khởi động lại máy chủ. Các bản cập nhật plugin được quản lý trong Chợ plugin.

## Chọn thời gian trả về cho máy khách

Trong **Cấu hình**, chuyển sang **Cài đặt chung** rồi chọn chế độ đồng hồ (**Clock mode**). Chế độ xem **Tệp thô** cho phép chỉnh sửa trực tiếp cùng một cấu hình JSON.

- **Real time** trả về thời gian hiện tại. Tính năng đồng bộ với máy chủ thời gian nguồn (**Upstream synchronization**) được bật mặc định. Trong **Upstream servers**, nhập tên máy chủ hoặc các mục `máy_chủ:cổng` và phân tách bằng dấu phẩy. Khi chưa đồng bộ được với nguồn, dịch vụ có thể báo đồng hồ chưa đồng bộ và một số máy khách sẽ bỏ qua phản hồi.
- **Offset** trả về thời gian vẫn chạy với một độ lệch cố định so với đồng hồ của máy chạy FlyEnv. Nhập số giây nguyên dương hoặc âm, hoặc chọn một trong các mức có sẵn **+7 days**, **−2 hours** hoặc **+365 days**.
- **Frozen** trả về cùng một thời điểm cho mọi yêu cầu. Chọn ngày giờ theo múi giờ địa phương. FlyEnv lưu thời điểm đó theo UTC.

![Cài đặt chung của NTP Server hiển thị chế độ Offset, các mức lệch có sẵn, địa chỉ lắng nghe và cổng UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-configuration.webp)

**Reset to real time** đưa chế độ đồng hồ trong trình chỉnh sửa về thời gian hiện tại. Lưu cấu hình để áp dụng thay đổi. Một số máy khách NTP của hệ thống từ chối các bước nhảy thời gian lớn hoặc dấu thời gian lặp lại. Để kiểm tra hai chế độ mô phỏng, hãy dùng máy khách kiểm thử có thể hiển thị dấu thời gian trong phản hồi NTP.

## Kết nối máy khách cục bộ hoặc trong mạng LAN

Theo mặc định, máy chủ lắng nghe trên địa chỉ `0.0.0.0` ở cổng UDP `12300`. Khi máy chủ đang chạy, bấm biểu tượng mạng màu xanh trong **Dịch vụ** để mở **How to use NTP Server** và xem địa chỉ cùng cổng đã cấu hình.

![Thẻ Dịch vụ của NTP Server hiển thị phiên bản đang chạy và nút xanh để xem thông tin kết nối](https://oss.macphpstudy.com/image/features/plugin/ntp-server-service.webp)

- **Trên máy chạy FlyEnv**, dùng `127.0.0.1` và cổng UDP `12300` nếu dùng cấu hình mặc định. Đặt **Listen IP restriction** thành `127.0.0.1` nếu máy chủ chỉ nên nhận yêu cầu từ chính máy đó.
- **Từ một thiết bị khác trong mạng LAN**, đặt địa chỉ lắng nghe thành IP nội bộ của máy chạy FlyEnv hoặc giữ cấu hình mặc định để lắng nghe trên tất cả giao diện IPv4. Nhập IP nội bộ của máy chạy FlyEnv và cổng UDP đã cấu hình vào máy khách.
- **Nếu máy khách yêu cầu cổng NTP chuẩn**, đặt **UDP port** thành `123` và kiểm tra cổng này còn trống trên giao diện mạng đã chọn.

## Xem yêu cầu và lỗi khởi động

Trong **Cấu hình**, dùng **Log client requests** để bật hoặc tắt ghi nhật ký yêu cầu của máy khách và thời gian được trả về. Mở **Nhật ký (Log) → Service log** để xem máy khách kiểm thử đã gửi được yêu cầu đến máy chủ hay chưa và nhận dấu thời gian nào. Nếu dịch vụ khởi động thất bại, mở **Nhật ký (Log) → Startup errors** để xem chi tiết, chẳng hạn khi cổng đã được sử dụng.

![Nhật ký dịch vụ NTP Server hiển thị thông tin khởi động, chế độ đồng hồ và địa chỉ lắng nghe UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-log.webp)

FlyEnv lưu `config.json`, `ntp.log` và `ntp-start-error.log` trong thư mục `server/ntp-server` bên dưới thư mục dữ liệu. Cấu hình được giữ lại khi bạn cài lại tệp thực thi của máy chủ.

Xem [tài liệu dự án NTP Server](https://github.com/xpf0000/ntp-server#local-test-clock-and-flyenv-configuration) để biết các thiết lập đồng hồ trong tệp cấu hình JSON của máy chủ.
