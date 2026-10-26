---
layout: doc
titleTemplate: false
title: 'Trình quản lý kho key-value etcd local | FlyEnv'
description: 'Chạy các phiên bản etcd với etcd.yaml được quản lý và log theo từng phiên bản trên cổng 2379/2380.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản etcd với etcd.yaml được quản lý và log theo từng phiên bản trên cổng 2379/2380.'
  - - meta
    - property: og:title
      content: 'Trình quản lý kho key-value etcd local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản etcd với etcd.yaml được quản lý và log theo từng phiên bản trên cổng 2379/2380.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/etcd
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/etcd
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Etcd trong FlyEnv

etcd là một kho key-value phân tán, nhất quán mạnh — chính là kho mà Kubernetes dùng để lưu trạng thái cluster. Đây là khối xây dựng tiêu chuẩn cho service discovery, cấu hình phân tán và bầu chọn leader. FlyEnv chạy etcd như một dịch vụ local được quản lý: cài một hoặc nhiều phiên bản etcd, khởi động phiên bản đã chọn từ công tắc ở thanh bên hay khay hệ thống, chỉnh sửa tệp cấu hình `etcd.yaml` tại chỗ, và đọc log khởi động theo từng phiên bản mà không cần rời khỏi ứng dụng. Các giá trị mặc định được sinh ra lắng nghe lưu lượng client trên cổng 2379 và lưu lượng peer trên cổng 2380, sẵn sàng cho các công việc service discovery và cấu hình phân tán local.

![Tổng quan module etcd của FlyEnv](https://oss.macphpstudy.com/image/features/etcd-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản etcd song song từ **Etcd → Trình quản lý phiên bản**, rồi chọn phiên bản mà dịch vụ sẽ chạy.

- **Nguồn cài đặt:** một danh sách tĩnh trực tuyến gồm các gói etcd dựng sẵn trên mọi nền tảng, cùng formula `etcd` của Homebrew trên macOS và Linux.
- **Phiên bản tùy chỉnh:** trỏ FlyEnv đến bất kỳ thư mục nào chứa bản build etcd của riêng bạn; nó được quét và liệt kê cạnh các phiên bản được quản lý.
- **Mỗi lần một phiên bản:** việc khởi động một phiên bản etcd trong khi phiên bản khác đang chạy sẽ bị chặn — hãy dừng phiên bản hiện tại trước, rồi khởi động phiên bản mới.

![Trình quản lý phiên bản etcd với nguồn tĩnh và Homebrew](https://oss.macphpstudy.com/image/features/etcd-2.webp)

## Dịch vụ và cấu hình

Tab Dịch vụ kiểm soát tiến trình etcd đang chạy. FlyEnv khởi chạy binary `etcd` thật với `--config-file etcd.yaml`, nên mọi hành vi của server đều do một tệp cấu hình duy nhất đó quyết định.

- **Giá trị mặc định được sinh sẵn:** ở lần khởi động đầu tiên, FlyEnv ghi một tệp `etcd.yaml` lắng nghe `0.0.0.0:2379` cho các yêu cầu client và `0.0.0.0:2380` cho lưu lượng peer, tự quảng bá trên `127.0.0.1`, và ghi log ở mức `info` ra stdout. Các tệp đã có không bao giờ bị ghi đè — FlyEnv chỉ sinh cấu hình khi nó còn thiếu.
- **Trình chỉnh sửa thô:** tab **Tệp cấu hình** mở `etcd.yaml` trực tiếp, với một bản sao `.default` nằm cạnh để bạn luôn có thể đối chiếu hoặc khôi phục bản gốc.
- **Không có lớp ẩn:** vì etcd đọc `etcd.yaml` nguyên văn, mọi tùy chọn etcd — clustering, TLS, quota — đều hoạt động đúng như tài liệu upstream mô tả.

![Dịch vụ và cấu hình etcd](https://oss.macphpstudy.com/image/features/etcd-3.webp)

## Log

Hai tab **Log** và **Log lỗi** cung cấp cho mỗi phiên bản etcd đã cài một cặp trình xem riêng: `etcd-<version>-start-out.log` ghi lại luồng stdout của server, còn `etcd-<version>-start-error.log` ghi lại stderr. Khi một phiên bản từ chối khởi động, log lỗi là nơi đầu tiên cần xem — xung đột cổng trên 2379 hay một tệp `etcd.yaml` sai cú pháp đều hiện ra ở đó ngay lập tức.

![Trình xem log khởi động và log lỗi etcd theo từng phiên bản](https://oss.macphpstudy.com/image/features/etcd-4.webp)

<FeatureRelatedLinks locale="vi" slug="etcd" />

## Lưu ý tương thích

- Module etcd không cung cấp nguồn cài đặt MacPorts trên macOS; hãy dùng danh sách tĩnh, Homebrew hoặc thư mục tùy chỉnh thay thế.
- FlyEnv chỉ quản lý tiến trình etcd, tệp `etcd.yaml` và các tệp log của nó — module không kèm trình duyệt etcd hay bảng quản trị, nên việc xem key và thao tác dữ liệu phải đi qua `etcdctl` hoặc client của riêng bạn.
- Những phiên bản etcd nào được cung cấp phụ thuộc vào nền tảng của bạn và vào những gì danh sách trực tuyến cùng Homebrew phát hành; kiểm tra Trình quản lý phiên bản trong ứng dụng hoặc [trang tải xuống](/vi/download) để biết thứ gì cài được trên máy bạn.
- Một số module khác của FlyEnv xây dựng trên một etcd đang chạy: cấu hình [MinIO](/vi/features/minio) hiển thị các khóa tinh chỉnh etcd cho các thiết lập phân tán, và các module anh em như [Consul](/vi/features/consul) hay [R-Nacos](/vi/features/r-nacos) đáp ứng các nhu cầu service discovery và cấu hình tương tự. Để xem etcd trong một stack local thực tế, xem các [demo](/vi/demos).
