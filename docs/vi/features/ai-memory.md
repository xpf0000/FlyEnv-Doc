---
layout: doc
titleTemplate: false
title: 'Plugin AI Memory: bộ nhớ cục bộ bền vững cho tác nhân lập trình | FlyEnv'
description: 'Cung cấp bộ nhớ cục bộ bền vững cho tác nhân lập trình AI qua MCP. Quản lý kiến thức toàn cục và theo dự án, khám phá bản đồ bộ nhớ 3D, kết nối ứng dụng khách và sao lưu dữ liệu.'
---

# AI Memory trong FlyEnv

AI Memory cung cấp cho các tác nhân lập trình AI một nơi dùng chung để lưu sở thích, kiến thức dự án và quyết định phát triển qua nhiều phiên làm việc. Giữ một quy ước lập trình cho cuộc trò chuyện tiếp theo, lưu lại lý do chọn một kiến trúc, hoặc cho phép ứng dụng khách khác đã kết nối truy xuất những gì tác nhân trước đó lưu.

Bộ nhớ được lưu cục bộ trong thư mục dữ liệu plugin của FlyEnv, với sở thích toàn cục và kiến thức dự án được giữ ở các phạm vi riêng. Plugin cung cấp bản đồ bộ nhớ 3D, tìm kiếm và chỉnh sửa, thiết lập kết nối ứng dụng khách, sao lưu và khôi phục, cùng bản ghi hoạt động của các công cụ bộ nhớ.

Cài **AI Memory** từ **[Cài đặt → Plugin Market](/vi/features/plugin-market)**, rồi mở mục của nó trên thanh bên. Plugin không có runtime riêng cần tải hoặc phiên bản dịch vụ cần khởi động. Các tác nhân truy cập bộ nhớ đã lưu thông qua **[MCP Server](/vi/features/mcp-server)** của FlyEnv.

![AI Memory trong FlyEnv hiển thị bản đồ bộ nhớ 3D tương tác của một dự án và các loại bộ nhớ](https://oss.macphpstudy.com/image/features/plugin/ai-memory-map.webp)

## Giữ sở thích ở phạm vi toàn cục và kiến thức dự án riêng biệt

Dùng **Toàn cục** cho thông tin áp dụng cho nhiều dự án, chẳng hạn ngôn ngữ hoặc phong cách lập trình bạn thích. Chọn một dự án để lưu kiến trúc, chi tiết thiết lập, quyết định và cách sửa lỗi có thể tái sử dụng của riêng nó. Kết nối ứng dụng khách toàn cục hoạt động trên nhiều dự án; nó không gộp các bộ sưu tập bộ nhớ của chúng.

Bộ nhớ dự án được liên kết với thư mục gốc dự án đã xác nhận. Hai dự án không liên quan có cùng tên thư mục vẫn tách biệt. Trong khung quản lý, chọn một dự án hiện có hoặc chọn thư mục dự án để làm việc với bộ sưu tập đó.

Plugin lưu nội dung và siêu dữ liệu bộ nhớ bên ngoài kho mã nguồn của bạn. Bạn có thể dùng chỉ dẫn dự án để hướng dẫn hành vi của tác nhân mà không cần thêm các bộ nhớ đã lưu vào mã nguồn.

![Bộ chọn phạm vi AI Memory với Toàn cục, các dự án đã lưu và tùy chọn đường dẫn dự án](https://oss.macphpstudy.com/image/features/plugin/ai-memory-project-selection.webp)

## Khám phá bản đồ bộ nhớ 3D

Thẻ **Bộ nhớ** hiển thị bộ sưu tập đang chọn dưới dạng bản đồ 3D tương tác. Các bộ nhớ được nhóm theo loại: sở thích, sự thật, sự kiện, quy trình, trạng thái dự án, quyết định, quan sát và ghi chú. Các đường kết nối thể hiện chủ đề hoặc thẻ chung, giúp bạn khám phá kiến thức liên quan.

Kéo để xoay, phóng to hoặc thu nhỏ, tạm dừng chuyển động quỹ đạo hoặc giảm chuyển động. Chọn một loại để duyệt các bản ghi, rồi chọn một bộ nhớ để mở chi tiết bên cạnh bản đồ. Chế độ danh sách cung cấp một cách khác để tìm và mở bản ghi.

Tìm theo từ khóa để thu hẹp bộ sưu tập. Tìm kiếm của tác nhân khớp với tiêu đề, tóm tắt, chủ đề và thẻ; đọc toàn bộ nội dung Markdown là một thao tác riêng. Đặt tiêu đề và tóm tắt hữu ích cho mỗi bộ nhớ để có thể tìm lại sau này.

![Loại sở thích trong AI Memory với danh sách bản ghi, kết nối tới bộ nhớ liên quan và chi tiết bộ nhớ đang chọn](https://oss.macphpstudy.com/image/features/plugin/ai-memory-detail.webp)

## Tạo, chỉnh sửa và duy trì bộ nhớ

Dùng **Bộ nhớ mới** để tự thêm bản ghi, hoặc để tác nhân đã kết nối lưu qua MCP. Một bộ nhớ gồm loại, tiêu đề, tóm tắt, chủ đề, thẻ, nội dung Markdown và thông tin nguồn.

Mở một bản ghi để đọc nội dung, xem nguồn và phiên bản sửa đổi, hoặc chỉnh sửa nó. Các cập nhật giữ lại lịch sử phiên bản và lý do thay đổi. **Lưu trữ** loại bộ nhớ khỏi kết quả đang hoạt động thông thường nhưng vẫn giữ lại để khôi phục sau. **Xóa vĩnh viễn** xóa bản ghi và lịch sử của nó sau khi xác nhận.

Nội dung mỗi bộ nhớ hỗ trợ tối đa 16 KiB văn bản UTF-8. Giữ mỗi bản ghi tập trung vào một sự thật, quyết định hoặc quy trình hữu ích để các tác nhân truy xuất được kiến thức liên quan mà không phải tải cả cuộc trò chuyện.

![Hộp thoại Bộ nhớ mới của AI Memory với các trường tiêu đề, tóm tắt, nội dung Markdown, loại, chủ đề, thẻ và nguồn](https://oss.macphpstudy.com/image/features/plugin/ai-memory-new-memory.webp)

## Kết nối tác nhân lập trình của bạn

Mở **Kết nối tác nhân** và chọn một ứng dụng khách đã cài. Thiết lập một cú nhấp có sẵn cho **[Claude Code](/vi/features/claude-code)**, **[Antigravity CLI](/vi/features/antigravity-cli)**, **[Codex](/vi/features/codex)**, **[GitHub Copilot CLI](/vi/features/github-copilot-cli)**, **[OpenCode](/vi/features/opencode)** và **[Kimi](/vi/features/kimi)**.

Thiết lập bằng một cú nhấp sẽ khởi động máy chủ MCP cục bộ nếu cần, bật năm công cụ bộ nhớ, đăng ký kết nối MCP toàn cục cho ứng dụng khách đã chọn và cài chỉ dẫn bộ nhớ toàn cục. Bạn có thể xem kết quả từng bước và thử lại bước chưa xong. Phần thiết lập nâng cao cũng cho phép cài chỉ dẫn riêng cho một dự án.

![Trang Kết nối tác nhân của AI Memory với sáu ứng dụng khách được hỗ trợ, thiết lập chung và ba bước thiết lập tự động cho Codex](https://oss.macphpstudy.com/image/features/plugin/ai-memory-connect-agent.webp)

Với các ứng dụng khách MCP khác, chọn **Thiết lập chung**. Sao chép cấu hình HTTP hoặc dùng tùy chọn stdio khi ứng dụng khách yêu cầu. Thêm chỉ dẫn bộ nhớ vào tệp chỉ dẫn hoặc lời nhắc hệ thống mà ứng dụng khách hỗ trợ. Kết nối stdio yêu cầu Node.js cục bộ và cầu nối của FlyEnv.

Sau khi thiết lập, mở một phiên mới từ đường dẫn tuyệt đối tới thư mục gốc đã xác nhận của dự án. Yêu cầu ứng dụng khách đầu tiên lưu một thông tin mẫu, chẳng hạn “Lệnh kiểm thử nhanh là `npm test`”, rồi báo ID và phiên bản sửa đổi được trả về. Trong phiên mới của ứng dụng khách thứ hai đã kết nối, dùng cùng thư mục gốc và yêu cầu tìm “kiểm thử nhanh” rồi truy xuất bản ghi. Đối chiếu ID, phiên bản sửa đổi và kiểm tra cả hai thao tác trong **Lịch sử gọi công cụ**.

Bài nghiệm thu bản xem trước cho nhà phát triển của FlyEnv đã xác minh việc chia sẻ hai chiều giữa Codex và Kimi, đồng thời đọc lại một bản ghi sau khi khởi động lại FlyEnv. Thiết lập phía ứng dụng khách ghi cấu hình kết nối và chỉ dẫn. Việc lưu và truy xuất kiến thức phụ thuộc vào chỉ dẫn của tác nhân và các lệnh gọi công cụ thực tế.

## Năm công cụ MCP cho bộ nhớ bền vững

AI Memory bổ sung năm công cụ vào máy chủ MCP của FlyEnv:

- **`flyenv_memory_search`:** tìm các bản tóm tắt bộ nhớ phù hợp trong phạm vi toàn cục hoặc dự án.
- **`flyenv_memory_get`:** đọc một bộ nhớ đầy đủ, bao gồm một phiên bản sửa đổi được chọn.
- **`flyenv_memory_store`:** lưu bộ nhớ mới cùng nguồn của nó.
- **`flyenv_memory_update`:** sửa đổi bản ghi hiện có với lý do và phiên bản sửa đổi dự kiến.
- **`flyenv_memory_forget`:** xóa vĩnh viễn bản ghi và lịch sử của nó.

Tìm kiếm trong dự án có thể dùng `include_global=true` để bao gồm bộ nhớ toàn cục. Đọc từng kết quả theo phạm vi được trả về. Khi cập nhật báo xung đột, đọc phiên bản sửa đổi mới nhất trước khi quyết định thay đổi. Khi thao tác ghi hết thời gian chờ hoặc trả về `unknown`, gửi lại cùng yêu cầu, giữ nguyên `request_id` và các tham số để xác nhận kết quả.

Quản lý tính khả dụng của công cụ và chính sách phê duyệt trong thiết lập MCP của FlyEnv. Giữ FlyEnv chạy, plugin được bật và máy chủ MCP sẵn sàng trong khi tác nhân dùng các công cụ. Các ứng dụng khách đã kết nối khác nhau có thể truy cập cùng bộ sưu tập đã lưu khi dùng cùng phạm vi và thư mục gốc dự án.

![Thẻ Công cụ MCP của FlyEnv hiển thị nhóm AI Memory, năm công tắc công cụ bộ nhớ và chính sách phê duyệt](https://oss.macphpstudy.com/image/features/plugin/ai-memory-mcp-tools.webp)

## Sao lưu, khôi phục và kết nối lại dự án đã di chuyển

Mở **Bảo trì → Sao lưu ngay** để tạo thư mục sao lưu đầy đủ kèm kiểm tra tính toàn vẹn. Để chuyển bộ nhớ sang máy tính khác, sao chép toàn bộ thư mục sao lưu và chọn **Khôi phục từ bản sao lưu** trong bản cài AI Memory tương thích.

Khôi phục thay thế các bộ sưu tập bộ nhớ hiện tại và trước tiên lưu một bản sao lưu dữ liệu đang có. Bản sao lưu bộ nhớ bao gồm bản ghi toàn cục và dự án; tệp mã nguồn dự án và cấu hình ứng dụng khách AI là những phần riêng biệt.

Khi dự án đã di chuyển, dùng **Thư mục dự án** trong Bảo trì để chọn thư mục mới. Việc liên kết lại giữ nguyên danh tính dự án, bộ nhớ và lịch sử phiên bản sửa đổi, đồng thời cập nhật đường dẫn đã lưu. Các dự án còn khả dụng cũng có thể đổi thư mục qua **Hiển thị tất cả dự án → Đổi thư mục**.

Nếu thư mục đã chọn đã có bộ nhớ dự án, FlyEnv hỏi các bộ sưu tập có thuộc cùng một dự án hay không. Bạn có thể gộp chúng mà vẫn giữ mọi bản ghi và phiên bản sửa đổi, hoặc giữ riêng và chọn thư mục khác. Việc gộp không ghi đè hoặc tự động loại bỏ bộ nhớ trùng lặp.

![Trang Bảo trì của AI Memory với sao lưu, khôi phục, kiểm tra liên kết dự án, thư mục dự án và thư mục dữ liệu](https://oss.macphpstudy.com/image/features/plugin/ai-memory-maintenance.webp)

## Xem hoạt động của tác nhân

Thẻ **Lịch sử gọi công cụ** hiển thị hoạt động và kết quả của công cụ bộ nhớ trong phiên FlyEnv hiện tại. Làm mới danh sách sau khi dùng tác nhân, rồi mở rộng một bản ghi để xem chi tiết yêu cầu và phản hồi.

Khung xem giữ tối đa 200 mục chi tiết trong bộ nhớ và không chứa toàn bộ nội dung bộ nhớ. Các bản ghi này bị xóa khi FlyEnv thoát; bộ nhớ đã lưu vẫn tồn tại trên đĩa. Lưu trữ cục bộ mô tả nơi plugin giữ dữ liệu: nội dung được truy xuất qua MCP vẫn được gửi tới ứng dụng khách AI bạn chọn. Ứng dụng khách có thể gửi nội dung truy xuất cho nhà cung cấp mô hình của nó. Hãy dùng bản ghi mẫu không chứa dữ liệu nhạy cảm khi kiểm tra kết nối.

![Thẻ Lịch sử gọi công cụ của AI Memory hiển thị hoạt động công cụ trong phiên, kết quả, thời gian thực hiện và nút làm mới](https://oss.macphpstudy.com/image/features/plugin/ai-memory-call-records.webp)

Dùng **[MCP Server](/vi/features/mcp-server)** để truy cập các công cụ môi trường rộng hơn của FlyEnv, hoặc quay lại **[tổng quan tính năng](/vi/features#plugins)** để khám phá các plugin khác.
