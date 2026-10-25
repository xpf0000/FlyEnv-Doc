---
layout: doc
titleTemplate: false
title: 'Python Version Manager và runtime dự án | FlyEnv'
description: 'Cài đặt và chuyển phiên bản Python, gắn một runtime với từng dự án, và dựng khung các dự án FastAPI hay Django trong FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Cài đặt và chuyển phiên bản Python, gắn một runtime với từng dự án, và dựng khung các dự án FastAPI hay Django trong FlyEnv.'
  - - meta
    - property: og:title
      content: 'Python Version Manager và runtime dự án | FlyEnv'
  - - meta
    - property: og:description
      content: 'Cài đặt và chuyển phiên bản Python, gắn một runtime với từng dự án, và dựng khung các dự án FastAPI hay Django trong FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/python
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/python
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Phát triển Python local với FlyEnv

Python là một ngôn ngữ lập trình đa mục đích được dùng cho web backend, kịch bản, phân tích dữ liệu, tự động hóa và machine learning. Module Python của FlyEnv kết hợp quản lý phiên bản với một quy trình runtime dự án: cài các interpreter bạn cần, quyết định cái nào terminal của bạn phân giải tới, và gắn một Python cụ thể với từng dự án. Khi một ứng dụng cần chạy liên tục, FlyEnv có thể chạy nó như một dịch vụ dự án được quản lý với cổng và biến môi trường riêng, còn các mẫu tích hợp sẵn dựng khung các framework Python thông dụng chỉ trong một bước.

![Tổng quan module Python của FlyEnv với các tab projects, service và version manager](https://oss.macphpstudy.com/image/features/python-1.webp)

## Quản lý phiên bản Python

Cài và quản lý nhiều phiên bản Python song song từ **Python → Version Manager**. FlyEnv phát hiện interpreter từ nhiều nguồn, nhờ đó các phiên bản bạn đã có hiện cạnh những phiên bản nó quản lý.

- **macOS:** cài Python trực tiếp từ Version Manager qua Homebrew hay MacPorts; FlyEnv còn tự động quét thư mục framework MacPorts (`/opt/local/Library/Frameworks/Python.framework/Versions`) để tìm các interpreter đã được cài ở đó.
- **Linux:** cài Python qua Homebrew.
- **Windows:** FlyEnv tải xuống các gói trình cài Python chính thức từ danh sách trực tuyến của nó, giải nén và cài vào thư mục ứng dụng, rồi tự động bootstrap pip, nhờ đó một bản cài mới sẵn sàng dùng ngay.
- **Thư mục tùy chỉnh:** trỏ FlyEnv tới bất kỳ thư mục nào chứa bản build Python của riêng bạn để liệt kê nó cạnh các phiên bản được quản lý.

![Python Version Manager liệt kê các phiên bản đã cài và khả dụng](https://oss.macphpstudy.com/image/features/python-2.webp)

## Chuyển phiên bản dòng lệnh

Tab **Service** điều khiển phiên bản Python nào mà các lệnh terminal của bạn phân giải tới. Bất chấp cái tên, tab này nói về quản lý phiên bản và PATH, chứ không phải các tiến trình dịch vụ chạy dài — bản thân module Python không chạy một dịch vụ nền.

- **Chuyển PATH:** chọn phiên bản mà FlyEnv đặt thư mục bin lên `PATH` của bạn, nhờ đó `python` và `pip` phân giải tới nó trong các terminal mới.
- **Alias và ghi chú:** đặt cho mỗi bản cài một alias ngắn cùng ghi chú, nhờ đó các bản build giống nhau vẫn phân biệt được trong danh sách phiên bản.

![Tab Service của Python quản lý phiên bản và các mục PATH](https://oss.macphpstudy.com/image/features/python-3.webp)

## Runtime Python cấp dự án

Các dự án khác nhau thường cần các phiên bản Python khác nhau. Trong **Python → Projects**, đăng ký từng thư mục dự án và gắn nó với interpreter riêng của nó.

- **Runtime theo từng dự án:** Python được chọn được lưu trong một tệp `.flyenv` bên trong thư mục dự án, nhờ đó các terminal và trình soạn thảo mở từ FlyEnv nạp đúng môi trường tự động. [Hướng dẫn môi trường runtime cấp dự án](/vi/guide/project-level-runtime-environment) giải thích cách tích hợp shell hoạt động.
- **Chạy như dịch vụ:** bật **Run as service** trong trình chỉnh sửa dự án khi ứng dụng cần chạy liên tục. Cấu hình lệnh khởi động, một cổng TCP, và các biến môi trường trực tiếp hay qua một tệp env; FlyEnv hiển thị các nút khởi động và dừng trong danh sách dự án cạnh log đầu ra của ứng dụng.
- **Mở trong công cụ:** nhảy từ một dòng dự án vào một terminal hay một IDE với môi trường dự án đã được nạp, gồm cả **Open in PyCharm**.

Để có hướng dẫn đầy đủ về mô hình dịch vụ dự án trên Python, Node.js và Go, xem [Triển khai Node.js, Python & Go mà không cần Docker](/vi/guide/deploy-nodejs-python-go-without-docker).

![Danh sách dự án Python với việc gắn interpreter theo từng dự án](https://oss.macphpstudy.com/image/features/python-4.webp)

## Các mẫu dự án mới

**Python → New Project** dựng khung các ứng dụng Python thông dụng mà không phải rời ứng dụng. FlyEnv chạy lệnh tạo dự án của framework trong terminal nhúng với các lệnh pip hay uv theo từng hệ điều hành, nhờ đó bạn thấy đầu ra thật trong khi dự án được tạo.

Các mẫu được hỗ trợ: [FastAPI](/vi/solutions/fastapi), [Django](/vi/solutions/django), Flask, Streamlit, Masonite, uv, Wagtail, Sanic, Litestar, Mezzanine và PDM. Các trang giải pháp được liên kết cho thấy từng framework chạy như một stack local hoàn chỉnh với một cơ sở dữ liệu và một site hướng trình duyệt.

![Hộp thoại dự án Python mới với lựa chọn mẫu framework](https://oss.macphpstudy.com/image/features/python-5.webp)

<FeatureRelatedLinks locale="vi" slug="python" />

## Lưu ý tương thích

FlyEnv quản lý việc chọn runtime Python local và điểm vào tiến trình của dự án; ứng dụng không đảm bảo mọi phiên bản Python, mẫu framework hay gói bên thứ ba đều khả dụng trên mọi hệ điều hành. Việc cài gói và quản lý dependency vẫn là trách nhiệm của dự án. Hãy đối chiếu yêu cầu của dự án với interpreter đã cài, và coi [trang tải xuống](/vi/download) cùng ghi chú phát hành hiện tại là nguồn về các gói được hỗ trợ.
