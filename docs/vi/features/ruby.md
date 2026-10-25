---
layout: doc
titleTemplate: false
title: 'Ruby Version Manager cho phát triển local | FlyEnv'
description: 'Cài đặt và chuyển phiên bản Ruby, đặt binary ruby cho terminal, và chạy các dự án Ruby với runtime theo từng dự án.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển phiên bản Ruby, đặt binary ruby cho terminal, và chạy các dự án Ruby với runtime theo từng dự án.'
  - - meta
    - property: og:title
      content: 'Ruby Version Manager cho phát triển local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển phiên bản Ruby, đặt binary ruby cho terminal, và chạy các dự án Ruby với runtime theo từng dự án.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/ruby
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/ruby
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Ruby local với FlyEnv

Ruby là một ngôn ngữ lập trình động, hướng đối tượng, nổi tiếng với phát triển web, nổi bật nhất qua framework Ruby on Rails. Module Ruby của FlyEnv giữ việc phát triển Ruby local trong một nơi duy nhất: cài nhiều phiên bản Ruby, quyết định cái nào mà lệnh `ruby` trong terminal của bạn phân giải tới, và gắn mỗi dự án với runtime riêng của nó. Module có ba tab — Ruby Projects, Service và Version Manager — tập trung vào cài phiên bản, điều khiển PATH và runtime dự án.

![Tổng quan module Ruby của FlyEnv](https://oss.macphpstudy.com/image/features/ruby-1.webp)

## Quản lý phiên bản Ruby

Cài các phiên bản Ruby song song từ **Ruby → Version Manager** và giữ tất cả chúng khả dụng cùng lúc.

- **macOS:** cài từ Homebrew (formula `ruby` và các formula có phiên bản `ruby@x.y`) hay MacPorts; FlyEnv còn tự động quét thư mục library MacPorts để tìm các bản cài Ruby có sẵn.
- **Linux:** cài từ Homebrew.
- **Windows:** cài từ một danh sách trực tuyến tĩnh các gói RubyInstaller.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa bản build Ruby của riêng bạn và nó xuất hiện trong danh sách cạnh các phiên bản được quản lý.

![Ruby Version Manager với các nguồn Homebrew và MacPorts](https://oss.macphpstudy.com/image/features/ruby-2.webp)

## Chuyển phiên bản dòng lệnh

Bất chấp nhãn của nó, tab **Service** không chạy một dịch vụ nào — Ruby là một interpreter, nhờ đó không có daemon nào cho FlyEnv quản lý. Tab này là một bảng các phiên bản đã cài với nhiệm vụ điều khiển PATH.

- **Chuyển phiên bản terminal:** việc chọn một phiên bản ở đây quyết định bản cài nào mà lệnh `ruby` trong terminal phân giải tới; FlyEnv thêm thư mục bin của phiên bản đó vào `PATH` của bạn (hay xóa nó đi) và đánh dấu mục PATH hiện hành đến từ FlyEnv hay từ một công cụ khác. [Hướng dẫn môi trường PATH hệ thống](/vi/guide/setup-system-path-environment) giải thích cơ chế này chi tiết.
- **Alias và ghi chú theo từng phiên bản:** mỗi bản cài có thể mang một alias ngắn cộng ghi chú, nhờ đó các bản build gần như giống hệt nhau vẫn dễ phân biệt.
- **Dọn dẹp:** mỗi dòng hiển thị đường dẫn cài của phiên bản và cung cấp một hành động xóa cho những phiên bản bạn không còn cần.

## Runtime Ruby cấp dự án

Trong **Ruby → Projects**, đăng ký từng thư mục dự án và gắn nó với một phiên bản Ruby cụ thể thay vì dựa vào bất kỳ phiên bản nào tình cờ có trong PATH.

- **Runtime theo từng dự án:** lựa chọn phiên bản được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và trình soạn thảo mở từ FlyEnv nhận đúng Ruby tự động. Xem [hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) và [tính năng Per-Project Runtimes](/vi/features/per-project-runtimes) để hiểu cơ chế hoạt động, và các [video demo](/vi/demos) để có hướng dẫn về runtime dự án trong thực tế.
- **Chạy như dịch vụ:** tùy chọn chạy một dự án trực tiếp từ FlyEnv với một lệnh khởi động tùy chỉnh, một cổng TCP hiển thị dưới dạng liên kết `http://127.0.0.1:<port>`, các biến môi trường đặt trực tiếp hay từ một tệp, và một cờ sudo trên macOS và Linux. Công tắc thanh bên khởi động hay dừng tất cả các dự án Ruby có bật dịch vụ cùng lúc.
- **Công cụ mở trong:** nhảy từ một dòng dự án vào terminal hệ thống hay mở dự án trong RubyMine với môi trường của nó đã được nạp.

![Danh sách Ruby Projects với việc gắn phiên bản Ruby theo từng dự án](https://oss.macphpstudy.com/image/features/ruby-3.webp)

<FeatureRelatedLinks locale="vi" slug="ruby" />

## Lưu ý tương thích

FlyEnv quản lý việc cài phiên bản Ruby, chuyển PATH và runtime dự án; ứng dụng không đóng gói gem, bundler hay công cụ framework vượt ra ngoài những gì mỗi bản build Ruby tự cung cấp. Các nguồn cài khả dụng khác nhau theo nền tảng — không có nguồn Static trên macOS và Linux — nhờ đó hãy coi [trang tải xuống](/vi/download) và ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
