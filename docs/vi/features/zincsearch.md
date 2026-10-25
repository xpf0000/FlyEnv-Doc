---
layout: doc
titleTemplate: false
title: 'ZincSearch Server local với Web UI | FlyEnv'
description: 'Chạy các phiên bản ZincSearch với cấu hình dựa trên env và web UI tích hợp sẵn trên cổng 4080.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản ZincSearch với cấu hình dựa trên env và web UI tích hợp sẵn trên cổng 4080.'
  - - meta
    - property: og:title
      content: 'ZincSearch Server local với Web UI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản ZincSearch với cấu hình dựa trên env và web UI tích hợp sẵn trên cổng 4080.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/zincsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/zincsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# ZincSearch trong FlyEnv

ZincSearch là một search engine mã nguồn mở viết bằng [Go](/vi/features/go), được định vị là một lựa chọn nhẹ nhàng thay thế [Elasticsearch](/vi/features/elasticsearch) cho việc lập chỉ mục toàn văn và tìm kiếm log — cùng họ search nhẹ với [Meilisearch](/vi/features/meilisearch) và [Typesense](/vi/features/typesense). Nó chạy như một binary duy nhất với một web console tích hợp sẵn, điều khiến việc đưa nó vào các dự án nhỏ và phát triển local trở nên dễ dàng. FlyEnv chạy nó như một dịch vụ tìm kiếm local được quản lý: cài các phiên bản từ Version Manager, khởi động server với một `zincsearch.env` chỉnh được, và mở web UI ZincSearch tích hợp sẵn chỉ với một cú nhấp. Các giá trị mặc định được ghi sẵn giúp bạn — server lắng nghe trên `127.0.0.1:4080` với một tài khoản admin ban đầu, và dữ liệu của nó nằm bên trong thư mục riêng của FlyEnv.

![Tổng quan module ZincSearch của FlyEnv](https://oss.macphpstudy.com/image/features/zincsearch-1.webp)

## Quản lý phiên bản

Cài và giữ nhiều phiên bản ZincSearch song song từ **ZincSearch → Version Manager**.

- **Chỉ nguồn tĩnh:** ZincSearch được cài từ danh sách trực tuyến tĩnh trên mọi nền tảng — macOS, Linux và Windows. Các gói là binary phát hành chính thức từ GitHub, với tệp nén theo từng hệ điều hành được lấy từ URL tải xuống của bản phát hành. Các nguồn Homebrew và MacPorts không được cung cấp cho module này.
- **Sửa quarantine trên macOS:** sau khi cài một bản build tĩnh trên macOS, FlyEnv gỡ thuộc tính quarantine nhờ đó binary có thể khởi động mà không bị Gatekeeper chặn.
- **Phiên bản tùy chỉnh:** thêm bất kỳ thư mục nào chứa bản build ZincSearch của riêng bạn; FlyEnv quét nó và liệt kê các binary đó cạnh các phiên bản được quản lý.
- **Tệp môi trường theo từng phiên bản:** FlyEnv tự động tạo một tệp `.env` cạnh mỗi binary đã cài, nhờ đó mỗi phiên bản mang các giá trị môi trường mặc định riêng.

![ZincSearch Version Manager với danh sách trực tuyến tĩnh](https://oss.macphpstudy.com/image/features/zincsearch-2.webp)

## Dịch vụ và cấu hình

Tab **Service** khởi động phiên bản ZincSearch đã chọn như một tiến trình binary thuần túy, với các biến môi trường của nó được phân tích từ `<BaseDir>/zincsearch/zincsearch.env`. Ở lần chạy đầu tiên FlyEnv ghi các giá trị mặc định hợp lý: `ZINC_FIRST_ADMIN_USER=admin`, `ZINC_FIRST_ADMIN_PASSWORD=admin`, `ZINC_SERVER_ADDRESS=127.0.0.1`, `ZINC_SERVER_PORT=4080`, và thư mục dữ liệu dưới `<BaseDir>/zincsearch/data`.

Tab **Config File** là một trình chỉnh sửa thô cho `zincsearch.env` — đổi địa chỉ gắn vào, cổng, thông tin đăng nhập admin hay đường dẫn dữ liệu bằng cách chỉnh trực tiếp các mục môi trường, với một bản sao `zincsearch.env.default` sẵn có để tham khảo. Lưu ý cấu hình này là toàn cục: một tệp `zincsearch.env` được dùng chung giữa tất cả các phiên bản ZincSearch đã cài.

![Chỉnh zincsearch.env trong tab Config File](https://oss.macphpstudy.com/image/features/zincsearch-3.webp)

## Web UI

ZincSearch đi kèm web UI riêng, và FlyEnv đưa nó ra tận tay bạn: khi dịch vụ đang chạy, tab Service hiển thị nút **ZincSearch UI** mở console trong trình duyệt của bạn. Địa chỉ được phân tích từ tệp env, nhờ đó nó theo host và port bạn đã cấu hình — mặc định là `http://127.0.0.1:4080/`. Đăng nhập bằng thông tin đăng nhập admin từ `zincsearch.env` để quản lý index, chạy tìm kiếm và kiểm tra tài liệu.

## Log

ZincSearch có hai tab log riêng biệt — **Log** và **Error Log**. Chúng mở các log khởi động theo từng phiên bản `zincsearch-<version>-start-out.log` và `zincsearch-<version>-start-error.log` bên trong FlyEnv, nhờ đó đầu ra chuẩn và lỗi khởi động dễ phân biệt khi một phiên bản không chạy nổi.

<FeatureRelatedLinks locale="vi" slug="zincsearch" />

## Lưu ý tương thích

FlyEnv quản lý các binary ZincSearch local, các tệp môi trường và thư mục dữ liệu của chúng; nó không kiểm soát những phiên bản ZincSearch nào mà dự án upstream phát hành. Vì ZincSearch chỉ có mặt từ nguồn tĩnh, các phiên bản cài được phụ thuộc vào những gì các bản phát hành GitHub chính thức cung cấp cho hệ điều hành của bạn. Thông tin đăng nhập admin mặc định (`admin` / `admin`) dành cho phát triển local — hãy đổi chúng trong `zincsearch.env` trước khi bộc lộ server ra ngoài máy của bạn. Hãy coi danh sách phiên bản trong ứng dụng và [trang tải xuống](/vi/download) là nguồn chuẩn xác về những gì có thể cài, và xem các [bản demo](/vi/demos) để có ví dụ về các module FlyEnv trong thực tế.
