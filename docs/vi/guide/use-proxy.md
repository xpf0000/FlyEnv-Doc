---
description: 'Cấu hình các biến proxy HTTP, HTTPS, và SOCKS trong FlyEnv để việc tải xuống và cài đặt trên terminal có thể dùng proxy local của bạn.'
---

# Dùng Proxy

Tài liệu tham khảo này được viết dành riêng cho những người dùng có "vấn đề về mạng" (chẳng hạn như người dùng tại Trung Quốc). Nếu mạng của bạn hoàn toàn bình thường, bạn có thể bỏ qua tài liệu này

Hầu hết các VPN không tự động có hiệu lực trong terminal hay trong FlyEnv. Nếu bạn muốn VPN hoạt động trong FlyEnv, bạn cần thực hiện các thao tác sau:

1. Một số công cụ VPN như ClashX có tính năng 'Copy terminal proxy command'. Bạn có thể dùng luôn tính năng này. Sao chép lệnh proxy và dán vào FlyEnv->setup->Proxy Setting

2. Mọi VPN đều có một cổng proxy. Nhấp FlyEnv->setup->Proxy Setting->Quick Setup. Và nhập ip:port chẳng hạn 127.0.0.1:7890. Sau đó nhấp OK. FlyEnv sẽ tự sinh các lệnh proxy
