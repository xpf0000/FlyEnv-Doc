---
layout: doc
titleTemplate: false
title: 'Cron Jobs với tích hợp bộ lập lịch hệ thống | FlyEnv'
description: 'Lập lịch lệnh bằng bộ lập lịch thực của hệ điều hành (crontab / Task Scheduler), lịch sử chạy, và tổng quan tác vụ hệ thống.'
head:
  - - meta
    - name: description
      content: 'Lập lịch lệnh bằng bộ lập lịch thực của hệ điều hành (crontab / Task Scheduler), lịch sử chạy, và tổng quan tác vụ hệ thống.'
  - - meta
    - property: og:title
      content: 'Cron Jobs với tích hợp bộ lập lịch hệ thống | FlyEnv'
  - - meta
    - property: og:description
      content: 'Lập lịch lệnh bằng bộ lập lịch thực của hệ điều hành (crontab / Task Scheduler), lịch sử chạy, và tổng quan tác vụ hệ thống.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/vi/features/cron-jobs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/vi/features/cron-jobs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Cron Jobs trong FlyEnv

Module **Cron Jobs** của FlyEnv biến bộ lập lịch của chính hệ điều hành thành một công cụ trực quan: bạn định nghĩa một tên, một biểu thức cron năm trường, một lệnh shell và một thư mục làm việc, và FlyEnv cài job vào `crontab` của người dùng trên macOS/Linux hoặc vào Task Scheduler trên Windows. Mỗi lần thực thi được bọc bởi một script được sinh ra, ghi lại đầu ra, mã thoát (exit code) và thời lượng, nhờ đó mọi job đều có lịch sử chạy có thể duyệt qua mà không cần bất kỳ thiết lập thêm nào. Module nằm trên sidebar như một mục kiểu console; nếu bạn vừa cài FlyEnv, [hướng dẫn bắt đầu](/vi/guide/getting-started) cho thấy cách mở các module từ sidebar.

![Tab Cron Jobs của FlyEnv liệt kê các job đã lập lịch với biểu thức và lệnh của chúng](https://oss.macphpstudy.com/image/features/cron-jobs-1.webp)

## Tạo job

Nhấp **Add** trên tab Cron Jobs để mở trình chỉnh sửa job.

- **Tên và công tắc bật/tắt:** mọi job đều có tên hiển thị và có thể bật hoặc tắt mà không cần xóa nó.
- **Biểu thức với kiểm tra trực tiếp:** biểu thức cron năm trường được kiểm tra ngay khi bạn gõ, kèm bản xem trước ý nghĩa của lịch, các thẻ preset nhanh và một bộ chọn lịch hỗ trợ để bạn không phải thuộc lòng thứ tự các trường.
- **Preset lệnh:** textarea lệnh cung cấp các điểm khởi đầu dựng sẵn cho những stack phổ biến — `php artisan schedule:run` (điểm vào bộ lập lịch cổ điển của [Laravel](/vi/solutions/laravel); xem [chạy Laravel trên FlyEnv](/vi/guide/run-laravel-use-flyenv) để biết phần thiết lập xung quanh), node, python và bash — mà bạn sau đó điều chỉnh cho dự án của mình.
- **Thư mục làm việc và phạm vi:** một job có thể toàn cục hoặc gắn với một site cụ thể; với job theo phạm vi site, thư mục làm việc được tự động điền từ thư mục gốc của site đó trong danh sách [local site](/vi/features/local-sites-https) của bạn.
- **Chạy thử trước khi lập lịch:** nút chạy thử trong trình chỉnh sửa job thực thi lệnh ngay lập tức trong thư mục làm việc của nó và hiển thị đầu ra, mã thoát cùng thời lượng được ghi lại, nhờ đó các sai sót về dấu ngoặc kép hay đường dẫn bộc lộ trước khi job kịp đến bộ lập lịch.

![Trình chỉnh sửa cron job với kiểm tra biểu thức, thẻ preset và textarea lệnh](https://oss.macphpstudy.com/image/features/cron-jobs-2.webp)

## Tích hợp bộ lập lịch của hệ điều hành

FlyEnv không chạy daemon nền riêng — các job được cài vào bộ lập lịch mà hệ điều hành vốn đã cung cấp, nghĩa là chúng tiếp tục chạy ngay cả khi FlyEnv đã đóng.

- **macOS và Linux:** job được ghi vào crontab của người dùng bên trong một khối đánh dấu `# FlyEnv Cron Start/End <id>`, nhờ đó các mục của FlyEnv dễ phân biệt với bất cứ thứ gì bạn tự tay thêm.
- **Windows:** mỗi job trở thành một mục Task Scheduler có tên `FlyEnv-Cron-<id>` gọi đến một wrapper PowerShell được mã hóa base64.
- **Script wrapper được sinh ra:** thay vì gọi lệnh của bạn trực tiếp, mục bộ lập lịch chạy một wrapper thu nhận stdout, stderr, mã thoát và thời lượng vào các log dạng JSON-lines, đồng thời giữ một tệp khóa để một lần chạy chậm không bao giờ chồng lên lần tiếp theo.

## Lịch sử chạy và chạy ngay

Mỗi lần thực thi đều để lại một bản ghi, cho dù nó kích hoạt đúng lịch hay được khởi chạy bằng tay.

- **Lịch sử chạy theo từng job:** mỗi job lưu đến 50 lần chạy gần nhất, xem được từ dòng job với đầu ra, mã thoát và thời gian chạy được ghi lại.
- **Chạy ngay:** một bộ kích hoạt thủ công trên mỗi dòng thực thi job ngay lập tức qua cùng wrapper đó — cách nhanh nhất để xác nhận lịch hoạt động đúng trước khi chờ nhịp tiếp theo.
- **Hiển thị thất bại:** vì wrapper ghi lại mã thoát và stderr, một lệnh thất bại sẽ xuất hiện trong lịch sử chạy thay vì biến mất vào một log hệ thống mà bạn chẳng bao giờ xem.

![Lịch sử chạy của một cron job hiển thị đầu ra, mã thoát và thời lượng cho từng lần chạy](https://oss.macphpstudy.com/image/features/cron-jobs-3.webp)

## Tab System Tasks

Tab thứ hai, **System Tasks**, là một cửa sổ chỉ đọc vào bộ lập lịch thực của hệ điều hành.

- Nó liệt kê các mục thực tế hiện có trên máy của bạn — các dòng crontab của người dùng trên macOS/Linux, các tác vụ đã đăng ký trên Windows.
- Các mục do FlyEnv tạo được gắn thẻ là sở hữu bởi FlyEnv, nhờ đó bạn nhìn thoáng qua là biết tác vụ nào thuộc về module và mục nào đến từ phần mềm khác.
- Các mục sở hữu bởi FlyEnv có thể bị xóa trực tiếp từ tab này, giúp bạn kiểm soát việc dọn dẹp mà không cần mở `crontab -e` hay console Task Scheduler của Windows.

![Tab System Tasks hiển thị các mục bộ lập lịch thực của hệ điều hành với các tác vụ sở hữu bởi FlyEnv được gắn thẻ](https://oss.macphpstudy.com/image/features/cron-jobs-4.webp)

<FeatureRelatedLinks locale="vi" slug="cron-jobs" />

## Ghi chú tương thích

Module chỉnh sửa bộ lập lịch của người dùng hệ điều hành hiện tại: crontab của người dùng trên macOS và Linux, và Task Scheduler trên Windows. Do đó các job chạy dưới tài khoản người dùng của bạn với các quyền của nó, và hỗ trợ biểu thức theo định dạng cron năm trường cổ điển — không có trường giây và không có extension kiểu `@reboot`. Định nghĩa job được lưu trong `cron-jobs.json` của riêng FlyEnv; giới hạn lịch sử chạy là 50 mục cho mỗi job. Những nền tảng mà một bản phát hành FlyEnv cụ thể hỗ trợ được liệt kê trên [trang Tải xuống](/vi/download).
