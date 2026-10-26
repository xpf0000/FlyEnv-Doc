---
layout: doc
titleTemplate: false
title: 'Trình quản lý Cloudflare Tunnel cho local site | FlyEnv'
description: 'Tạo tunnel do Cloudflare quản lý, ánh xạ hostname công khai đến dịch vụ local, và kiểm tra log theo từng tunnel ngay trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Tạo tunnel do Cloudflare quản lý, ánh xạ hostname công khai đến dịch vụ local, và kiểm tra log theo từng tunnel ngay trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'Trình quản lý Cloudflare Tunnel cho local site | FlyEnv'
  - - meta
    - property: og:description
      content: 'Tạo tunnel do Cloudflare quản lý, ánh xạ hostname công khai đến dịch vụ local, và kiểm tra log theo từng tunnel ngay trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/cloudflare-tunnel
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/cloudflare-tunnel
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cloudflare Tunnel với FlyEnv

Cloudflare Tunnel là một dịch vụ của Cloudflare kết nối một dịch vụ local với một hostname công khai qua một tunnel chỉ đi ra ngoài (outbound-only) từ máy của bạn — không cần port forwarding trên router hay IP công khai, điều này làm nó trở nên tiện dụng cho việc demo và truy cập từ xa vào môi trường dev. Module Cloudflare Tunnel của FlyEnv đưa các dịch vụ local lên các hostname công khai mà không cần đụng đến router hay tường lửa của bạn. Bạn kết nối tài khoản Cloudflare một lần, thêm các quy tắc DNS ánh xạ subdomain đến các đích `host:port` local, và FlyEnv điều phối toàn bộ thiết lập thông qua Cloudflare API — tạo tunnel, ghi bản ghi CNAME và đẩy các quy tắc ingress giúp bạn. Mỗi tunnel chạy như một tiến trình được quản lý với log riêng.

![Module Cloudflare Tunnel của FlyEnv với danh sách tunnel](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-1.webp)

## Thiết lập tunnel

Mở **Cloudflare Tunnel** từ sidebar và thêm một tunnel. Hộp thoại thiết lập hỏi bốn thứ:

- **cloudflared binary:** tiến trình tunnel chính là tệp thực thi `cloudflared`, nên ít nhất một phiên bản của [module Cloudflared](/vi/features/cloudflared) phải được cài trước. Chọn phiên bản từ dropdown; nếu chưa có bản nào được cài, FlyEnv sẽ yêu cầu bạn cài một bản trước khi tiếp tục.
- **API Token:** một Cloudflare API Token có quyền quản lý tunnel và DNS trên tài khoản của bạn. FlyEnv dùng nó để giao tiếp với Cloudflare API v4.
- **Account ID:** tài khoản Cloudflare sở hữu zone.
- **Zone / Zone ID:** domain mà tunnel sẽ dùng các bản ghi DNS và subdomain của nó.

Khi khởi động, FlyEnv tìm — hoặc tạo nếu chưa tồn tại — một tunnel được cấu hình từ xa trên tài khoản của bạn có tên `FlyEnv-Tunnel-<token hash>`, sau đó khởi chạy `cloudflared tunnel run --token <token>` như một tiến trình nền tách biệt. Không có tệp cấu hình tunnel local nào cần duy trì: cấu hình nằm trên Cloudflare và được quản lý hoàn toàn thông qua API.

![Thêm một tunnel với cloudflared binary, API Token, Account ID và Zone](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-2.webp)

## Quy tắc DNS trỏ đến dịch vụ local

Mỗi dòng tunnel mở rộng thành một bảng các quy tắc DNS. Một quy tắc ánh xạ một hostname công khai đến một dịch vụ local:

- **Subdomain và zone:** hostname công khai, ví dụ `demo.example.com`.
- **Giao thức và đích:** `http` hoặc `https` — với các đích `https`, chứng chỉ từ [module MkCert](/vi/features/mkcert) hoạt động rất ổn — cộng với `host:port` local sẽ nhận lưu lượng, thường là một site từ module [Local Sites & HTTPS](/vi/features/local-sites-https).

Khi bạn lưu một quy tắc, FlyEnv ghi cả hai phía của cấu hình thông qua Cloudflare API: nó tạo hoặc cập nhật một bản ghi CNAME proxied trỏ hostname đến `<tunnelId>.cfargotunnel.com`, và đẩy các quy tắc ingress của tunnel — mỗi hostname được định tuyến đến đích `http(s)://host:port` của nó với header `Host` được đặt, kết thúc bằng một quy tắc 404 catch-all cho mọi thứ không khớp. Việc sửa hoặc xóa một quy tắc sẽ cập nhật các mục CNAME và ingress tương ứng.

![Quy tắc DNS ánh xạ một subdomain đến host và port local](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-3.webp)

Để có bài hướng dẫn hoàn chỉnh về việc đưa một site bạn đã tạo thông qua quy trình [hướng dẫn Host](/vi/guide/host) lên công khai, xem [hướng dẫn Cloudflare Tunnel cho lập trình local](/vi/guide/cloudflare-tunnel-local-development).

## Log tunnel

Mỗi tunnel giữ log đầu ra và log lỗi riêng của mình dưới thư mục dữ liệu của FlyEnv, cạnh tệp pid của nó. Trình xem log tích hợp liệt kê các tệp log theo từng tunnel, nhờ đó bạn có thể xác nhận kết nối đến edge của Cloudflare đã được thiết lập và chẩn đoán các vấn đề DNS hay ingress mà không cần rời khỏi ứng dụng.

![Trình xem log out và error theo từng tunnel](https://oss.macphpstudy.com/image/features/cloudflare-tunnel-4.webp)

<FeatureRelatedLinks locale="vi" slug="cloudflare-tunnel" />

## Ghi chú tương thích

Module Cloudflare Tunnel khả dụng trên macOS, Windows và Linux. Nó yêu cầu module Cloudflared để có binary `cloudflared`, và một tài khoản Cloudflare với API Token có thể quản lý tunnel và DNS trên zone đã chọn. Vì toàn bộ cấu hình được lưu trên Cloudflare, các thay đổi thực hiện trong dashboard Cloudflare trên cùng một tunnel có thể tương tác với những gì FlyEnv quản lý; hãy coi FlyEnv là nguồn sự thật duy nhất cho các tunnel của nó. Xem [trang Tải xuống](/vi/download) và ghi chú phát hành để biết các nền tảng và gói được hỗ trợ.
