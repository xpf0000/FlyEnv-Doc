---
title: 'FlyEnv là gì? Môi trường phát triển cục bộ tất cả trong một'
head:
  - - meta
    - name: description
      content: 'Tìm hiểu cách FlyEnv tập hợp runtime, máy chủ web, cơ sở dữ liệu, môi trường dự án, plugin và công cụ phát triển AI vào một không gian làm việc chạy trực tiếp trên Windows, macOS và Linux.'
---

# FlyEnv là gì?

FlyEnv là **môi trường phát triển cục bộ tất cả trong một** có mã nguồn mở, chạy trực tiếp trên Windows, macOS và Linux.

FlyEnv tập hợp runtime của các ngôn ngữ, máy chủ web, cơ sở dữ liệu, dịch vụ cục bộ, công cụ lập trình và tính năng phát triển AI vào một không gian làm việc trên máy tính có thể mở rộng.

Bạn có thể chọn phần mềm mà từng dự án cần, cấu hình môi trường và sắp xếp các dịch vụ phụ thuộc thành những nhóm khởi động có thể dùng lại. Trong công việc phát triển cục bộ hằng ngày, FlyEnv chạy các dịch vụ trực tiếp trên máy của bạn mà không cần container.

**Tất cả công cụ trong một không gian làm việc.**

[Tải xuống FlyEnv](/vi/download) · [Hướng dẫn bắt đầu nhanh](/vi/guide/getting-started) · [Xem video demo](/vi/demos)

<div id="vi-sao-lap-trinh-vien-dung-no"></div>

## Vì sao FlyEnv ra đời?

Một môi trường phát triển ngày nay thường cần nhiều thành phần ngoài máy chủ web và cơ sở dữ liệu.

Một ứng dụng web có thể dùng PHP cho backend, Node.js cho frontend, MySQL để lưu dữ liệu, Redis làm bộ nhớ đệm, Mailpit để kiểm thử email và Nginx để phục vụ ứng dụng. Một dự án khác trên cùng máy có thể cần những phiên bản runtime và dịch vụ hoàn toàn khác.

Từng công cụ đều hữu ích. Việc khó là quản lý chúng cùng nhau, từ cài các phiên bản, sửa tệp cấu hình, theo dõi cổng, chuyển đổi giữa các dự án và thiết lập HTTPS cục bộ đến việc nhớ dịch vụ nào cần chạy.

FlyEnv tập trung những việc hằng ngày này vào một lớp quản lý chung. Bạn vẫn sử dụng chính các ngôn ngữ, cơ sở dữ liệu và máy chủ web của mình, còn FlyEnv giúp chúng hoạt động cùng nhau trong một môi trường phát triển.

<div id="ho-tro-nen-tang"></div>

## FlyEnv hoạt động như thế nào?

Hãy hình dung FlyEnv là không gian làm việc kết nối các dự án với phần mềm đang chạy trên máy của bạn.

```text
Dự án của bạn
  Laravel · WordPress · Node.js · Python · Java · AI
                           │
                Không gian làm việc FlyEnv
                           │
  ┌─────────────────────────────────────────────────┐
  │ Môi trường dự án                                │
  │ Phiên bản runtime · Site cục bộ · HTTPS         │
  ├─────────────────────────────────────────────────┤
  │ Startup Groups                                  │
  │ Nhóm và khởi động các dịch vụ của dự án         │
  ├─────────────────────────────────────────────────┤
  │ Quản lý module                                  │
  │ Cài đặt · Cấu hình · Chạy · Cập nhật            │
  ├───────────────────────┬─────────────────────────┤
  │ Plugin Market         │ Công cụ AI và MCP       │
  │ Mở rộng FlyEnv        │ Kết nối tác nhân AI     │
  └───────────────────────┴─────────────────────────┘
                           │
                Windows · macOS · Linux
```

*Sơ đồ khái niệm về cách FlyEnv tổ chức không gian làm việc.*

FlyEnv được xây dựng theo bốn nguyên tắc sau.

### Chạy dịch vụ trực tiếp trên máy

FlyEnv quản lý các runtime và dịch vụ chạy trực tiếp trên máy. Bạn có thể làm việc với tệp cấu hình, log và cổng mạng của chúng bằng các công cụ quen thuộc trên hệ điều hành của mình. Quy trình này không cần lớp container.

### Chỉ cài những gì bạn cần

Hãy bắt đầu với một môi trường PHP hoặc Node.js gọn nhẹ rồi bổ sung cơ sở dữ liệu, bộ nhớ đệm, máy chủ web và công cụ khác khi dự án cần. Bạn tự chọn các runtime và dịch vụ cần cài trong số những thành phần được hỗ trợ.

### Dùng runtime phù hợp cho từng dự án

Các dự án có thể cần những phiên bản ngôn ngữ khác nhau. FlyEnv cho phép cài song song nhiều phiên bản và chọn runtime theo từng dự án đối với các ngôn ngữ được hỗ trợ. Nhờ đó, bạn ít phải thay đổi môi trường toàn cục khi chuyển dự án.

Xem [Runtime theo từng dự án](/vi/features/per-project-runtimes) và [hướng dẫn cấu hình runtime theo dự án](/vi/guide/project-level-runtime-environment).

Việc chọn phiên bản theo dự án chỉ quản lý runtime. Khả năng cách ly hệ thống tệp và bảo mật ở cấp container thuộc về môi trường container.

### Khởi động các dịch vụ của dự án cùng nhau

Ngoài runtime, môi trường của một dự án có thể cần máy chủ web, cơ sở dữ liệu, bộ nhớ đệm và các dịch vụ chạy nền khác.

Với [Startup Groups](/vi/features/startup-groups), bạn có thể gom các dịch vụ do FlyEnv quản lý thành những nhóm dùng lại được để khởi động hoặc dừng chúng cùng lúc. Chỉ cần cấu hình nhóm cho dự án một lần để dùng lại những lần sau.

<div id="flyenv-thuc-su-lam-đuoc-gi"></div>

## Không gian làm việc mở rộng theo nhu cầu {#what-flyenv-actually-does}

FlyEnv hỗ trợ từ một stack web cục bộ nhỏ đến quy trình phát triển phức tạp hơn. Bạn có thể mở rộng không gian làm việc bằng cách cài và sử dụng những thành phần mình cần.

| Danh mục | Ví dụ |
| --- | --- |
| Runtime của ngôn ngữ | PHP, Node.js, Python, Java, Go, Rust |
| Máy chủ web và site | Nginx, Apache, Caddy, FrankenPHP, tên miền cục bộ và HTTPS |
| Cơ sở dữ liệu và dịch vụ cục bộ | MySQL, PostgreSQL, MariaDB, Redis, RabbitMQ, Mailpit |
| Quy trình phát triển dự án | Runtime theo từng dự án, Startup Groups, module tùy chỉnh |
| Phát triển với AI | CLI lập trình AI, MCP Server, Ollama, CLIProxyAPI, plugin AI Memory |
| Plugin tùy chọn | Kafka, OpenSearch, MySQL Cluster, llama.cpp, Command Shortcuts |

Bảng trên liệt kê một số ví dụ tiêu biểu. Phiên bản phần mềm, nền tảng được hỗ trợ và yêu cầu về giấy phép tùy thuộc vào từng module. Xem [tổng quan tính năng](/vi/features) để biết danh sách hiện tại.

### Mở rộng không gian làm việc bằng plugin

Bạn có thể chọn phần mềm cần cài và bổ sung các tích hợp vào FlyEnv theo hai cách.

- Cài đặt theo nhu cầu cho phép bạn chọn runtime và dịch vụ cần cài.
- [Plugin Market](/vi/features/plugin-market) cho phép bạn thêm các tích hợp tùy chọn vào FlyEnv, bao gồm bảng quản lý riêng và công cụ chuyên dụng.

Ví dụ, bạn có thể bắt đầu với PHP, Nginx và MySQL. Sau đó, bạn có thể thêm Node.js và Redis cho một ứng dụng mới hoặc cài Kafka, OpenSearch hay AI Memory khi công việc cần đến.

Bạn có thể quản lý plugin từ danh mục chính thức hoặc các nguồn bên thứ ba đáng tin cậy. Để cài và cập nhật plugin, bạn cần giấy phép FlyEnv còn hiệu lực. Xem trang của từng plugin để biết yêu cầu và nền tảng được hỗ trợ.

**Dùng những gì bạn cần hôm nay, bổ sung khi cần thêm.**

Bạn có thể giữ không gian làm việc hằng ngày gọn nhẹ và mở rộng khi nhu cầu thay đổi.

<div id="suc-manh-thuc-su-khi-moi-thu-van-hanh-cung-nhau"></div>

## Ví dụ về quy trình phát triển thực tế {#the-real-power-when-everything-works-together}

Giả sử bạn có một ứng dụng Laravel với frontend viết bằng Vue. Môi trường cục bộ của ứng dụng có thể gồm những thành phần sau.

| Thành phần | Vai trò trong dự án |
| --- | --- |
| PHP 8.4 | Runtime cho backend |
| Node.js | Công cụ phát triển và build frontend |
| Nginx và PHP-FPM | Phục vụ ứng dụng PHP |
| MySQL | Cơ sở dữ liệu của ứng dụng |
| Redis | Bộ nhớ đệm và hàng đợi |
| Mailpit | Kiểm thử email cục bộ |
| `https://myapp.test` | URL cục bộ của ứng dụng có HTTPS |

Đây là một cấu hình minh họa. Hãy chọn phiên bản và dịch vụ phù hợp với dự án của bạn.

Bạn có thể chuẩn bị môi trường trong FlyEnv theo các bước sau.

1. Cài các phiên bản phần mềm cần thiết.
2. Cấu hình môi trường PHP và Node.js cho dự án.
3. Chuẩn bị cơ sở dữ liệu và cập nhật cấu hình môi trường của ứng dụng.
4. Tạo site cục bộ với tên miền tùy chỉnh và HTTPS.
5. Đưa các dịch vụ do FlyEnv quản lý vào một Startup Group.
6. Chạy các lệnh thiết lập và phát triển mà dự án yêu cầu.

Sau khi cấu hình, bạn có thể sử dụng lại nhóm dịch vụ mỗi khi quay lại dự án. Bạn có thể truy cập site cục bộ, quản lý các thành phần phụ thuộc và xem log dịch vụ từ cùng một không gian làm việc.

Bạn vẫn chạy các lệnh thiết lập riêng mà framework yêu cầu. FlyEnv giúp bạn chuẩn bị, quản lý và dùng lại môi trường phát triển dễ dàng hơn.

Xem [Cách chạy Laravel với FlyEnv](/vi/guide/run-laravel-use-flyenv), tìm hiểu về [site local và HTTPS](/vi/features/local-sites-https) hoặc khám phá các [giải pháp cho dự án khác](/vi/solutions).

<div id="xem-cac-tinh-nang-cot-loi-cua-flyenv-trong-13-phut"></div>

### Xem các tính năng cốt lõi của FlyEnv trong 13 phút {#watch-flyenv-s-core-features-in-13-minutes}

Video giới thiệu cách cài module, quản lý phiên bản, điều khiển dịch vụ, dùng Startup Groups, thiết lập site cục bộ và sử dụng các công cụ lập trình trong FlyEnv.

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background: #111827;">
  <iframe src="https://www.youtube.com/embed/TA2NA0JeGdo" title="Tổng quan tính năng FlyEnv - Phát triển cục bộ trực tiếp trên máy mà không cần Docker" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Xem trên YouTube](https://www.youtube.com/watch?v=TA2NA0JeGdo) · [Xem thêm video demo ngắn](/vi/demos)

<div id="vi-sao-ai-thay-đoi-đinh-nghia-ve-moi-truong-local"></div>

## Hỗ trợ quy trình phát triển với AI {#why-ai-changes-the-definition-of-a-local-environment}

Để làm việc hiệu quả trên một dự án thực tế, tác nhân lập trình AI có thể cần biết runtime nào đang hoạt động, cơ sở dữ liệu, URL cục bộ, trạng thái dịch vụ, cấu hình và log, bên cạnh quyền truy cập mã nguồn.

FlyEnv bổ sung các tính năng AI vào cùng không gian phát triển cục bộ. Bạn có thể dùng chúng theo nhu cầu và tiếp tục các quy trình phát triển thông thường.

### Quản lý CLI lập trình AI

FlyEnv giúp bạn quản lý các công cụ lập trình AI được hỗ trợ như Claude Code, Codex, OpenCode và Kimi trong cùng không gian với các công cụ phát triển khác.

### MCP Server tích hợp

[FlyEnv MCP Server](/vi/features/mcp-server) cung cấp cho các tác nhân tương thích quyền truy cập có cấu trúc vào thông tin về môi trường do FlyEnv quản lý và một số thao tác được hỗ trợ. Tác nhân có thể xem hoặc thay đổi những gì tùy theo các công cụ hiện có và thiết lập phê duyệt.

Ngoài việc viết mã, tác nhân có thể giúp chuẩn bị môi trường, kiểm tra dịch vụ hoặc xử lý sự cố của ứng dụng cục bộ.

### AI Memory dùng chung

[Plugin AI Memory](/vi/features/ai-memory) là tùy chọn lưu trữ lâu dài trên máy để các tác nhân đã kết nối có thể lưu và truy xuất kiến thức hữu ích qua nhiều phiên làm việc. Bạn có thể lưu tùy chọn phát triển, quyết định của dự án, quy trình thiết lập và các cách khắc phục có thể dùng lại. Bộ nhớ toàn cục và bộ nhớ dự án có phạm vi riêng.

Một tác nhân có thể truy xuất thông tin do một ứng dụng đã kết nối khác lưu khi cả hai dùng đúng kho bộ nhớ. Việc lưu và truy xuất thực tế phụ thuộc vào chỉ dẫn và các lệnh gọi công cụ của ứng dụng.

**AI viết mã. FlyEnv giúp AI chạy stack của bạn.**

Để biết cách thiết lập, hãy đọc [Hướng dẫn FlyEnv AI Workspace & MCP](/vi/guide/ai-coding-workspace-mcp).

<div id="flyenv-khac-gi-so-voi-docker-va-cac-stack-kieu-xampp"></div>

## So sánh FlyEnv với các công cụ khác {#how-flyenv-differs-from-docker-and-xampp-style-stacks}

FlyEnv tập trung vào quy trình phát triển chạy trực tiếp trên máy và có thể mở rộng. Bạn có thể chọn framework, phần mềm và dịch vụ phù hợp với từng dự án mà không cần thiết lập container trước.

| Mô hình phát triển | Trọng tâm |
| --- | --- |
| Các gói phần mềm tích hợp truyền thống | Chạy stack web cục bộ với một bộ thành phần quen thuộc |
| Môi trường dựa trên container | Tạo môi trường container có tính cách ly, dễ tái tạo và hỗ trợ quy trình triển khai |
| FlyEnv | Quản lý runtime theo dự án, dịch vụ cục bộ, website và công cụ phát triển trong một không gian làm việc chạy trực tiếp trên máy |

Nếu đang dùng XAMPP, Laragon, MAMP, Laravel Herd hoặc ServBay, bạn có thể dùng FlyEnv để tổ chức và mở rộng môi trường cục bộ theo nhu cầu của từng dự án.

Bạn cũng có thể dùng FlyEnv cùng với Docker. Dịch vụ chạy trực tiếp trên máy thuận tiện cho nhiều tác vụ hằng ngày. Container hữu ích khi bạn cần cách ly ở cấp container, tạo lại image một cách nhất quán hoặc giữ môi trường phát triển tương đồng với môi trường triển khai.

Khám phá [các trang so sánh](/vi/compare/) hoặc đọc [FlyEnv so với Docker & XAMPP](/vi/guide/flyenv-vs-docker-xampp) để tìm hiểu chi tiết.

<div id="đuoc-xay-dung-va-dan-dat-boi-cong-đong"></div>

## Mã nguồn mở và giấy phép linh hoạt {#built-and-driven-by-its-community}

FlyEnv được phát triển công khai. Đề xuất tính năng, báo cáo lỗi, bản dịch và pull request từ cộng đồng góp phần định hình sản phẩm và mở rộng các quy trình mà FlyEnv hỗ trợ.

Bạn có thể xem [mã nguồn trên GitHub](https://github.com/xpf0000/FlyEnv), [đề xuất tính năng](https://github.com/xpf0000/FlyEnv/issues) hoặc [đóng góp qua pull request](https://github.com/xpf0000/FlyEnv/pulls).

Các tính năng phát triển cục bộ cốt lõi được cung cấp miễn phí. Giấy phép trả phí gỡ bỏ các giới hạn áp dụng cho bản miễn phí và mở khóa những tính năng yêu cầu giấy phép. Bạn có thể mua giấy phép FlyEnv một lần hoặc nhận giấy phép thông qua đóng góp cho cộng đồng hay chia sẻ nội dung nếu đáp ứng điều kiện.

Xem [trang Giấy phép](/vi/license) để biết các điều khoản và lựa chọn hiện hành.

## Câu hỏi thường gặp {#cau-hoi-thuong-gap}

### FlyEnv có chỉ dành cho lập trình viên PHP không?

Không. PHP là một trong nhiều runtime được hỗ trợ. FlyEnv cũng hỗ trợ các quy trình phát triển với Node.js, Python, Java, Go và những ngôn ngữ khác, cùng với cơ sở dữ liệu và dịch vụ cục bộ.

### Tôi có cần Docker để dùng FlyEnv không?

Không. FlyEnv quản lý các dịch vụ chạy trực tiếp trên máy mà không cần Docker. Bạn vẫn có thể dùng Docker cùng với FlyEnv cho các dự án cần container.

### Tôi có phải cài tất cả công cụ được hỗ trợ không?

Không. Bạn chỉ cần cài những gì đang dùng và bổ sung khi dự án cần. Các plugin tùy chọn cho phép bạn mở rộng không gian làm việc.

### Các dự án khác nhau có thể dùng các phiên bản runtime khác nhau không?

Có, với các ngôn ngữ và quy trình được hỗ trợ. Bạn có thể cài nhiều phiên bản rồi chọn runtime cho từng dự án. Xem [hướng dẫn về runtime](/vi/guide/project-level-runtime-environment) để biết chi tiết.

### Tôi có thể dùng FlyEnv mà không cần công cụ lập trình AI không?

Có. Các công cụ lập trình AI, tích hợp MCP và AI Memory đều là tính năng tùy chọn. Bạn có thể dùng FlyEnv chỉ để phát triển cục bộ.

### FlyEnv có miễn phí và mã nguồn mở không?

FlyEnv là phần mềm mã nguồn mở và cung cấp miễn phí các tính năng phát triển cốt lõi. Một số công cụ và mức sử dụng cao hơn yêu cầu giấy phép. Xem chính sách hiện tại trên [trang Giấy phép](/vi/license).

<div id="buoc-tiep-theo"></div>

<div id="flyenv-danh-cho-ai"></div>

## Bắt đầu sử dụng {#next-steps}

Chọn bước tiếp theo phù hợp với việc bạn muốn làm.

| Tôi muốn… | Xem ở đâu |
| --- | --- |
| Cài FlyEnv và thiết lập môi trường đầu tiên | [Tải xuống](/vi/download) và [Bắt đầu nhanh](/vi/guide/getting-started) |
| Kiểm tra công cụ của mình có được hỗ trợ không | [Tính năng](/vi/features) |
| Chạy một ứng dụng có sẵn | [Giải pháp](/vi/solutions) |
| Xem FlyEnv hoạt động thực tế | [Video demo](/vi/demos) |
| Chuyển từ một môi trường phát triển khác | [So sánh](/vi/compare/) |
| Mở rộng không gian làm việc | [Plugin Market](/vi/features/plugin-market) |
| Kết nối tác nhân lập trình AI | [Hướng dẫn AI Workspace & MCP](/vi/guide/ai-coding-workspace-mcp) |

Hãy bắt đầu với một dự án và những công cụ mà dự án đó cần. Bạn có thể mở rộng không gian làm việc FlyEnv khi quy trình phát triển thay đổi.
