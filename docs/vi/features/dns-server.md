---
layout: doc
titleTemplate: false
title: 'DNS server tích hợp sẵn cho tên miền local | FlyEnv'
description: 'Phân giải mọi tên miền site của FlyEnv mà không cần chỉnh tệp hosts nhờ DNS server tích hợp sẵn trên cổng 53.'
head:
  - - meta
    - name: description
      content: 'Phân giải mọi tên miền site của FlyEnv mà không cần chỉnh tệp hosts nhờ DNS server tích hợp sẵn trên cổng 53.'
  - - meta
    - property: og:title
      content: 'DNS server tích hợp sẵn cho tên miền local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Phân giải mọi tên miền site của FlyEnv mà không cần chỉnh tệp hosts nhờ DNS server tích hợp sẵn trên cổng 53.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/dns-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/dns-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# DNS server tích hợp sẵn trong FlyEnv

FlyEnv đi kèm DNS server riêng, được viết bằng Node.js ngay bên trong ứng dụng — không cần cài binary ngoài và không có phiên bản nào phải quản lý. Nó lắng nghe trên cổng 53 và trả lời cho mọi tên miền site bạn tạo trong FlyEnv, nên một khi hệ thống trỏ về nó, các tên miền local hoạt động mà không cần đụng đến tệp hosts. Log truy vấn trực tiếp trên tab Dịch vụ hiển thị từng lần tra cứu ngay khi diễn ra.

![Module DNS server của FlyEnv với dịch vụ đang chạy trên cổng 53](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Cách phân giải hoạt động

Khi một truy vấn đến, server tra cứu tên trong một bản đồ in-memory duy nhất được xây từ nhiều nguồn, và chỉ hỏi Internet khi không có gì khớp:

- **Tên miền site FlyEnv:** mọi host name và bí danh từ các [site local](/vi/features/local-sites-https) của bạn được tự động phân giải về địa chỉ IP local chính của bạn. Danh sách này được theo dõi trực tiếp, nên một site mới tạo sẽ phân giải được ngay lập tức — không cần khởi động lại, không cần ánh xạ thủ công.
- **Tệp hosts của hệ thống:** các mục trong tệp hosts của hệ điều hành tham gia vào cùng bản đồ; tệp được đọc lại nhiều nhất mỗi 60 giây một lần, nên các chỉnh sửa từ bên ngoài sẽ tự được ghi nhận.
- **Bản đồ tĩnh trong `dns.json`:** một bản đồ `resolveIP` trong tệp cấu hình ghim các tên cụ thể vào địa chỉ cố định do bạn chọn.
- **Thứ tự ưu tiên khi trùng:** khi cùng một tên xuất hiện ở nhiều hơn một nguồn, tên miền site thắng tệp hosts, còn tệp hosts thắng `resolveIP`. Tên khớp chính xác được trả lời trước; nếu không có, các mẫu wildcard như `*.test` trong bản đồ sẽ được thử, nên toàn bộ một hậu tố tên miền có thể được phủ bởi một quy tắc duy nhất.
- **Chuyển tiếp upstream:** bất kỳ thứ gì không khớp tên chính xác lẫn wildcard sẽ được chuyển tiếp đến các resolver công cộng — mặc định là 1.1.1.1 và 8.8.8.8 (AliDNS và 114DNS nằm trong bộ mặc định ở ngôn ngữ Trung) — nhờ đó server có thể đóng vai trò DNS duy nhất của máy mà không làm hỏng việc duyệt web bình thường. Nếu điều bạn cần thay vào đó là chặn quảng cáo qua DNS, module [Numa](/vi/features/numa) cung cấp kiểu DNS local như vậy.

Trỏ cài đặt DNS của hệ điều hành về địa chỉ local mà FlyEnv gắn vào, và tất cả những điều trên sẽ áp dụng cho toàn hệ thống. [Hướng dẫn quản lý host](/vi/guide/host) đề cập phần thiết lập liên quan đến site.

## Log truy vấn trực tiếp

Tab Dịch vụ không chỉ là công tắc khởi động/dừng — nó còn kiêm vai trò màn hình lưu lượng cho server.

- **Bảng truy vấn:** mọi lần tra cứu được hiển thị dưới dạng một dòng với host được yêu cầu, IP mà nó phân giải về và TTL được trả về.
- **Kiểm soát trọn vòng đời:** khởi động, dừng và khởi động lại server từ cùng một thanh công cụ, ngay cạnh log.
- **Xóa một cú nhấp:** dọn sạch bảng khi bạn muốn có cái nhìn gọn gàng trong lúc gỡ lỗi một tên miền cụ thể.

Vì log cập nhật ngay khi truy vấn đến, đây là cách nhanh nhất để xác nhận rằng một trình duyệt hay thiết bị nào đó thực sự đang dùng FlyEnv làm resolver.

![Log truy vấn DNS trực tiếp hiển thị host, IP phân giải và TTL cho mỗi truy vấn](https://oss.macphpstudy.com/image/features/dns-server-1.webp)

## Cấu hình

DNS server giữ các cài đặt của mình trong một tệp JSON duy nhất, `dns.json` (kèm `dns.default.json` bên cạnh làm tham chiếu gốc). Tab Tệp cấu hình cung cấp hai cách để thay đổi nó:

- **Danh sách thả xuống Bind IP:** tùy chọn hiển thị duy nhất — chọn địa chỉ local mà server lắng nghe. Giá trị mặc định `0.0.0.0` nhận truy vấn trên mọi giao diện mạng, là điều bạn muốn khi các thiết bị khác trong mạng cũng cần phân giải tên miền site của bạn; chọn một IP cụ thể sẽ giới hạn nó vào giao diện đó.
- **Trình chỉnh sửa JSON thô:** với mọi thứ còn lại, hãy chỉnh tệp trực tiếp — bao gồm bản đồ tĩnh `resolveIP` ghim từng tên vào địa chỉ bạn chọn.

![Tab cấu hình DNS với danh sách thả xuống bind IP và trình chỉnh sửa dns.json](https://oss.macphpstudy.com/image/features/dns-server-2.webp)

<FeatureRelatedLinks locale="vi" slug="dns-server" />

## Lưu ý tương thích

DNS server tích hợp sẵn chạy trên macOS, Windows và Linux, phục vụ cả UDP lẫn TCP trên cổng 53. Cổng 53 là cổng đặc quyền trên các hệ thống kiểu Unix, nên việc chạy server trên cổng này có thể đòi hỏi quyền nâng cao tùy nền tảng, và không resolver nào khác (chẳng hạn một công cụ DNS local khác) được chiếm cổng cùng lúc — nếu thao tác bind thất bại, việc khởi động server chỉ đơn giản báo lỗi. Server chỉ trả lời truy vấn khi đang chạy, và lịch sử truy vấn được hiển thị trực tiếp trên tab Dịch vụ mà không được ghi vào tệp log. Để biết hành vi chính xác của từng bản phát hành, hãy coi module trong ứng dụng và ghi chú phát hành của [trang tải xuống](/vi/download) là nguồn tham chiếu.
