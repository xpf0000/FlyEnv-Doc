---
layout: doc
titleTemplate: false
title: 'Trình quản lý AI Gateway local CLIProxyAPI | FlyEnv'
description: 'Chạy các phiên bản CLIProxyAPI như một AI gateway local với config.yaml được quản lý, backend env và giao diện quản lý.'
head:
  - - meta
    - name: description
      content: 'Chạy các phiên bản CLIProxyAPI như một AI gateway local với config.yaml được quản lý, backend env và giao diện quản lý.'
  - - meta
    - property: og:title
      content: 'Trình quản lý AI Gateway local CLIProxyAPI | FlyEnv'
  - - meta
    - property: og:description
      content: 'Chạy các phiên bản CLIProxyAPI như một AI gateway local với config.yaml được quản lý, backend env và giao diện quản lý.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/cliproxyapi
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/cliproxyapi
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# CLIProxyAPI trong FlyEnv

CLIProxyAPI là một proxy local mã nguồn mở đặt các công cụ AI dựa trên CLI — như Gemini CLI, [Claude Code](/vi/features/claude-code) và [Codex](/vi/features/codex), cả hai đều do FlyEnv quản lý — đằng sau các API endpoint tương thích chuẩn OpenAI, Gemini và Claude. Nó cho phép các ứng dụng vốn mong đợi một API model hosted gọi các tài khoản CLI này như thể chúng là những dịch vụ HTTP bình thường, với nhiều nhà cung cấp được hợp nhất sau một gateway local duy nhất. FlyEnv vận hành CLIProxyAPI như một AI gateway local được quản lý: cài các phiên bản từ Version Manager, khởi chạy tiến trình `cli-proxy-api` từ sidebar hoặc trang module, chỉnh sửa `config.yaml` và tệp môi trường backend ngay trong ứng dụng, và mở panel quản lý tích hợp trong trình duyệt. Đầu ra khởi động được ghi vào các tệp log theo từng phiên bản, nên một lần khởi động thất bại rất dễ chẩn đoán.

![Tổng quan module CLIProxyAPI trong FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-1.webp)

## Quản lý phiên bản

Cài đặt và giữ nhiều phiên bản CLIProxyAPI song song từ **CLIProxyAPI → Version Manager**, sau đó chọn phiên bản mà dịch vụ sẽ chạy.

- **Tải xuống static:** một danh sách trực tuyến các gói `.zip` và `.tgz` liên kết đến GitHub releases của dự án, được tải về cho nền tảng và kiến trúc của bạn.
- **Homebrew:** formula `cliproxyapi` xuất hiện như một nguồn cài đặt trên các hệ thống có Homebrew; MacPorts không được cung cấp cho module này.
- **Thư mục tùy chỉnh:** thêm bất kỳ thư mục nào chứa binary `cli-proxy-api` hoặc `cliproxyapi` của riêng bạn và FlyEnv sẽ liệt kê nó cạnh các phiên bản được quản lý.
- **Xử lý quarantine trên macOS:** sau khi cài static, FlyEnv loại bỏ thuộc tính quarantine khỏi binary để nó khởi chạy mà không gặp hộp thoại Gatekeeper.

![CLIProxyAPI Version Manager với các nguồn static và Homebrew](https://oss.macphpstudy.com/image/features/cliproxyapi-2.webp)

## Dịch vụ và cấu hình

Tab Service khởi chạy phiên bản đã chọn dưới dạng `cli-proxy-api -config <config.yaml>`, trỏ đến `config.yaml` bên trong thư mục CLIProxyAPI của FlyEnv, với các biến môi trường được nạp từ `cliproxyapi.env`. Chỉ một phiên bản chạy tại một thời điểm, id tiến trình của nó được theo dõi trong một tệp pid dưới cùng thư mục đó, và công tắc trên sidebar — cũng có trên khay hệ thống — khởi động và dừng nó.

- **Tab Config File:** một trình soạn thảo raw cho `config.yaml`. Các thiết lập mới được khởi tạo từ một mẫu đi kèm, nhờ đó tệp luôn tồn tại với các giá trị mặc định hoạt động được trước khi bạn thay đổi bất cứ thứ gì.
- **Tab Env:** một trình soạn thảo raw cho `cliproxyapi.env`, nơi chứa các biến backend mà CLIProxyAPI đọc khi khởi động — `GITSTORE_*` cho kho lưu trữ dựa trên git, `PGSTORE_*` cho PostgreSQL, `OBJECTSTORE_*` cho object storage, cộng thêm `MANAGEMENT_PASSWORD` cho panel quản lý.

![Chỉnh sửa config.yaml của CLIProxyAPI trong FlyEnv](https://oss.macphpstudy.com/image/features/cliproxyapi-3.webp)

## Giao diện quản lý trên port 8317

Khi dịch vụ đang chạy, tab Service hiển thị một nút mở panel quản lý tích hợp của CLIProxyAPI trong trình duyệt của bạn tại `http://127.0.0.1:<port>/management.html`. FlyEnv đọc port từ `config.yaml`; với mẫu mặc định thì đó là 8317. Hãy đặt `MANAGEMENT_PASSWORD` trong tab Env trước khi mở panel cho bất cứ thứ gì ngoài việc dùng local.

![Mở panel quản lý CLIProxyAPI từ tab Service](https://oss.macphpstudy.com/image/features/cliproxyapi-4.webp)

## Log

Tab Log hiển thị đầu ra được thu nhận của từng phiên bản dưới dạng `cliproxyapi-<version>-start-out.log` và `cliproxyapi-<version>-start-error.log`, với một công tắc chuyển giữa hai luồng. Khi một phiên bản từ chối khởi động hoặc trang quản lý không phản hồi, log lỗi là nơi đầu tiên cần xem.

![Trình xem log khởi động CLIProxyAPI với công tắc chuyển giữa out và error](https://oss.macphpstudy.com/image/features/cliproxyapi-5.webp)

<FeatureRelatedLinks locale="vi" slug="cliproxyapi" />

## Ghi chú tương thích

FlyEnv quản lý binary CLIProxyAPI, lệnh khởi chạy của nó và các tệp trong thư mục module; hành vi gateway — quy tắc định tuyến, hỗ trợ nhà cung cấp và tính tương thích model — đến từ phiên bản CLIProxyAPI bạn cài, nên hãy xem GitHub releases của dự án để biết một phiên bản cụ thể làm được gì. Những nguồn cài đặt nào xuất hiện phụ thuộc vào nền tảng của bạn và việc Homebrew có đang hiện diện hay không. Nếu bạn còn muốn các model self-hosted hoàn toàn trên cùng một máy, module [Ollama](/vi/features/ollama) phục vụ chúng thông qua API local riêng, và hướng dẫn về [FlyEnv làm việc với các trợ lý AI](/vi/guide/flyenv-work-with-ai) bao quát bức tranh AI local tổng thể. [Trang Tải xuống](/vi/download) liệt kê các bản dựng FlyEnv hiện tại theo nền tảng, và các [demo](/vi/demos) cho thấy module hoạt động trong thực tế.
