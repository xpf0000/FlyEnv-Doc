---
layout: doc
titleTemplate: false
title: 'Rust Toolchain Manager cho phát triển local | FlyEnv'
description: 'Cài các toolchain Rust, chuyển cargo và rustc đang hoạt động bằng rustup hay PATH, và chạy các dự án Rust ở local.'
head:
  - - meta
    - name: description
      content: 'Cài các toolchain Rust, chuyển cargo và rustc đang hoạt động bằng rustup hay PATH, và chạy các dự án Rust ở local.'
  - - meta
    - property: og:title
      content: 'Rust Toolchain Manager cho phát triển local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài các toolchain Rust, chuyển cargo và rustc đang hoạt động bằng rustup hay PATH, và chạy các dự án Rust ở local.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/rust
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/rust
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Rust local với FlyEnv

Rust là một ngôn ngữ lập trình hệ thống tập trung vào an toàn bộ nhớ và hiệu năng, được dùng cho các công cụ dòng lệnh, thành phần hệ thống, WebAssembly và các dịch vụ đòi hỏi hiệu năng cao — [kho đối tượng RustFS tương thích S3](/vi/features/rustfs) là một dịch vụ được xây dựng bằng Rust mà FlyEnv quản lý. Module Rust của FlyEnv giữ việc phát triển Rust local trong một nơi duy nhất: cài các toolchain Rust song song, quản lý toolchain và nền tảng target của rustup, quyết định toolchain nào mà các lệnh `cargo` và `rustc` trong terminal của bạn phân giải tới, và gắn mỗi dự án với toolchain riêng của nó. Module có bốn tab — Rust Projects, Service, Version Manager và Rustup — bao phủ cài đặt, điều khiển PATH, tích hợp rustup và runtime dự án.

![Tổng quan module Rust của FlyEnv](https://oss.macphpstudy.com/image/features/rust-1.webp)

## Quản lý toolchain Rust

Cài các toolchain Rust từ **Rust → Version Manager** và giữ vài toolchain khả dụng cùng lúc.

- **macOS:** cài từ một danh sách trực tuyến tĩnh các trình cài `.tar.xz` độc lập hay từ Homebrew (formula `rust`); nguồn MacPorts không được cung cấp cho Rust.
- **Linux:** cài từ danh sách trực tuyến tĩnh hay Homebrew.
- **Windows:** cài từ danh sách trực tuyến tĩnh.
- **Toolchain rustup:** FlyEnv tự phát hiện các toolchain được cài bởi rustup dưới `RUSTUP_HOME` / `~/.rustup/toolchains`, cạnh các toolchain trong thư mục ứng dụng riêng của FlyEnv, nhờ đó các bản cài do rustup quản lý và do FlyEnv quản lý xuất hiện trong cùng một danh sách.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa toolchain Rust của riêng bạn và nó xuất hiện cạnh các phiên bản được quản lý.

Tab **Rustup** chuyên dụng phát hiện một bản cài rustup có sẵn (tôn trọng `CARGO_HOME` và `RUSTUP_HOME`) hay đề nghị một cú nhấp cài rustup trong terminal nhúng. Từ đó bạn có thể cài, đặt mặc định, hay gỡ các toolchain rustup, và thêm hay xóa các nền tảng target biên dịch.

![Rust Version Manager và quản lý toolchain rustup](https://oss.macphpstudy.com/image/features/rust-2.webp)

## Chuyển phiên bản dòng lệnh

Tên của tab **Service** chỉ là một quy ước còn sót lại — Rust không có tiến trình nền nào bên trong FlyEnv, nhờ đó không có gì ở đây khởi động hay dừng. Nó là một bảng các toolchain đã cài kết hợp với quản lý PATH.

- **Chuyển phiên bản terminal:** chọn toolchain nào mà các lệnh `cargo` và `rustc` trong terminal phân giải tới. Việc chuyển đổi thêm thư mục bin của toolchain vào `PATH` của bạn hay rút nó ra, và mỗi mục được đánh dấu để cho thấy FlyEnv hay một công cụ khác đã đặt nó. [Hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) trình bày cơ chế bên dưới.
- **Alias và ghi chú theo từng phiên bản:** dán nhãn cho mỗi toolchain bằng một alias ngắn cùng ghi chú để các bản build giống nhau vẫn phân biệt được trong danh sách.
- **Dọn dẹp:** bảng liệt kê đường dẫn cài của mọi toolchain, và các toolchain không dùng nữa có thể bị xóa trực tiếp từ đó.

## Toolchain Rust cấp dự án

Trong **Rust → Projects**, đăng ký từng thư mục dự án và gắn nó với một toolchain Rust cụ thể thay vì dựa vào bất kỳ phiên bản nào tình cờ có trong PATH.

- **Toolchain theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và trình soạn thảo mở từ FlyEnv nhận đúng Rust tự động. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và [tính năng Per-Project Runtimes](/vi/features/per-project-runtimes) để hiểu cơ chế hoạt động.
- **Chạy như dịch vụ:** tùy chọn chạy một dự án trực tiếp từ FlyEnv với một lệnh khởi động tùy chỉnh, một cổng TCP hiển thị dưới dạng liên kết `http://127.0.0.1:<port>`, các biến môi trường đặt trực tiếp hay từ một tệp, và một cờ sudo trên macOS và Linux. Công tắc thanh bên khởi động hay dừng tất cả các dự án Rust có bật dịch vụ cùng lúc.
- **Công cụ mở trong:** nhảy từ một dòng dự án vào terminal hệ thống hay mở dự án trong RustRover với môi trường của nó đã được nạp.

![Danh sách Rust Projects với việc gắn toolchain theo từng dự án](https://oss.macphpstudy.com/image/features/rust-3.webp)

<FeatureRelatedLinks locale="vi" slug="rust" />

## Lưu ý tương thích

FlyEnv quản lý việc cài toolchain Rust, tích hợp rustup, chuyển PATH và runtime dự án; nó không cung cấp trình chỉnh sửa tệp cấu hình hay trình xem log ở cấp module vượt ra ngoài những gì mỗi toolchain Rust tự mang lại. Các nguồn cài khả dụng khác nhau theo nền tảng, nhờ đó hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
