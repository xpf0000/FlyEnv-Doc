---
title: 'Không gian viết code AI local với MCP, Claude Code và Codex'
head:
  - - meta
    - name: description
      content: Dựng không gian viết code AI local với FlyEnv. Quản lý runtime, dịch vụ, Claude Code, Codex và FlyEnv MCP server trong cùng một quy trình local thuần nhất.
---

# Dựng không gian viết code AI local với MCP cho Claude Code, Codex và hơn thế nữa

Claude Code, Codex và các AI coding client khác có thể đọc repository của bạn, nhưng đó mới chỉ là một phần của môi trường phát triển thực thụ. Chúng vẫn cần những phiên bản runtime, dịch vụ local, URL site, log và tệp cấu hình được quản lý mà dự án của bạn thực sự phụ thuộc.

FlyEnv biến tầng còn thiếu đó thành một quy trình local thuần nhất. Nó quản lý stack mà dự án của bạn thực sự chạy trên đó, khởi chạy các AI coding CLI, và mở chính môi trường đó ra thông qua **FlyEnv MCP Server** tích hợp sẵn.

## Vì sao AI client cần môi trường local thực sự

Một AI client hữu ích hơn nhiều khi nó có thể làm việc trên chính bối cảnh local mà bạn đang dùng:

- phiên bản PHP, Node.js hoặc Python đang kích hoạt
- MySQL, Redis hay các dịch vụ web có đang chạy hay không
- URL site local, tệp được quản lý, cấu hình và log
- một cách an toàn, có cấu trúc để kiểm tra hoặc thao tác trên stack đó

FlyEnv làm được điều đó bằng cách giữ tầng runtime và tầng truy cập AI trong cùng một workspace.

| AI cần gì | Thiết lập chỉ dùng shell thông thường | FlyEnv bổ sung gì |
|-------------------|--------------------------|------------------|
| Phiên bản runtime chính xác | Chuyển thủ công và dễ lệch cấu hình | Chuyển runtime theo từng dự án |
| Dịch vụ đang chạy | Tự tay khởi động từng thứ | Quản lý dịch vụ ngay trong cùng ứng dụng |
| Site, cấu hình và log local | Rải rác khắp terminal và tệp | Truy cập MCP có cấu trúc vào chi tiết site và tệp được quản lý |
| Kiểm soát máy an toàn | Quá nhiều quyền shell hoặc không có quyền nào | Công tắc công cụ, phê duyệt và audit log |

## FlyEnv bổ sung gì cho quy trình MCP local

FlyEnv lấp khoảng trống này ở hai tầng:

1. **Tầng stack local:** quản lý runtime, dịch vụ, tên miền local, SSL và chuyển đổi theo dự án từ một ứng dụng desktop duy nhất.
2. **Tầng cầu nối AI:** mở chính môi trường đó ra cho AI client qua MCP, với xác thực token, kiểm soát công cụ, chính sách phê duyệt và audit log.

Đây chính là quy trình đứng sau lời hứa trên trang chủ: **"Quản lý runtime local, dịch vụ, AI coding CLI và cầu nối MCP trong một nơi duy nhất."**

## Bước 1: Quản lý AI coding CLI trong một workspace

Trong ứng dụng FlyEnv, các AI coding CLI là những module hạng nhất đứng cạnh runtime và dịch vụ local. Hiện tại workspace có thể quản lý:

- Claude Code
- Codex
- OpenCode
- Kimi Code CLI
- GitHub Copilot CLI
- Antigravity CLI

Nghĩa là bạn có thể giữ runtime của dự án và AI client trong cùng một nơi, thay vì phải ghép nối thủ công các trình cài đặt riêng lẻ và các shell profile.

## Bước 2: Khởi động FlyEnv MCP Server

Mở panel **MCP Server** trong FlyEnv và cấu hình:

- **Host**
- **Port**
- **Token**
- **Auto Start**
- **Allow remote access**
- **Enabled Tools**
- **Approval policy** cho các công cụ rủi ro cao hơn

Theo mặc định, FlyEnv được thiết kế cho phát triển local:

- nó lắng nghe trên `127.0.0.1`
- nó dùng bearer token để xác thực client
- nó cho phép bạn bật/tắt từng công cụ riêng lẻ
- nó giữ một **audit log** về hoạt động MCP

Nhờ đó bạn có một cấu hình mặc định local thực dụng mà không phải phơi máy nhiều hơn mức cần thiết.

## Bước 3: Kết nối Claude Code, Codex, OpenCode và các client khác

FlyEnv hỗ trợ hai kiểu kết nối.

### HTTP MCP

FlyEnv có thể sinh trực tiếp các đoạn cấu hình HTTP MCP ngay trong ứng dụng. UI hiện hỗ trợ xuất cấu hình và đăng ký một cú nhấp cho:

- Claude Code
- Antigravity CLI
- Codex
- GitHub Copilot CLI
- OpenCode
- Kimi

Ví dụ cấu hình kiểu Claude Code:

```json
{
  "mcpServers": {
    "flyenv": {
      "type": "http",
      "url": "http://127.0.0.1:7682",
      "headers": {
        "Authorization": "Bearer <your-token>"
      }
    }
  }
}
```

Ví dụ cấu hình Codex:

```toml
[features]
rmcp_client = true

[mcp_servers.flyenv]
url = "http://127.0.0.1:7682"

[mcp_servers.flyenv.http_headers]
Authorization = "Bearer <your-token>"
```

### Phương án B: Dùng cầu nối stdio MCP cho client desktop

Với những client ưa chuộng stdio MCP server local, FlyEnv cũng cung cấp một bridge script. Ứng dụng có thể sinh đoạn cấu hình stdio cho các client như:

- Cursor
- Cline
- Windsurf
- Claude Desktop

Ví dụ cấu hình stdio:

```json
{
  "mcpServers": {
    "flyenv": {
      "command": "node",
      "args": ["<FlyEnv>/mcp/flyenv-mcp-stdio.mjs"],
      "env": {
        "FLYENV_MCP_URL": "http://127.0.0.1:7682",
        "FLYENV_MCP_TOKEN": "<your-token>"
      }
    }
  }
}
```

FlyEnv tự sinh các đoạn cấu hình này giúp bạn, nên trong đa số trường hợp bạn không phải tự viết cấu hình từ đầu.

## Bước 4: Quyết định AI được phép làm gì

Panel MCP của FlyEnv không chỉ là một công tắc bật/tắt. Nó còn cho phép bạn giới hạn những gì AI có thể truy cập.

Các công cụ đọc và kiểm tra thông thường bao gồm:

- liệt kê các dịch vụ do FlyEnv quản lý và các phiên bản đã cài
- kiểm tra trạng thái của một dịch vụ
- liệt kê các site local
- truy vấn runtime, URL và tệp được quản lý của một site
- liệt kê các tệp cấu hình và tệp log đã biết
- liệt kê các phiên bản dịch vụ có thể tải xuống
- đọc thông tin kết nối cơ sở dữ liệu hoặc cache

Các công cụ tác động cao hơn bao gồm:

- khởi động, dừng hoặc khởi động lại dịch vụ
- tạo hoặc cập nhật một site
- xóa một site
- cài đặt một phiên bản dịch vụ

Với những công cụ rủi ro cao hơn đó, FlyEnv hỗ trợ:

- **bật/tắt theo từng công cụ**
- **chế độ phê duyệt (approval mode)**
- **ghi audit log**

Nhờ đó bạn giữ cho AI agent hữu ích mà không phải mặc nhiên trao cho chúng một mặt phẳng điều khiển không giới hạn.

## Bước 5: Chạy một quy trình viết code AI local thực tế

Chọn một site PHP và MySQL đã đăng ký trong FlyEnv. Video bên dưới theo dõi một ứng dụng CRUD bằng PHP từ lúc thiết lập cơ sở dữ liệu đến khi tải được trang. Bạn có thể dùng cùng các công cụ chỉ đọc để kiểm tra những site PHP khác đã đăng ký.

1. Khởi động máy chủ web đã chọn, dịch vụ PHP của site và MySQL. Mở site trong trình duyệt để xác nhận tải được trang trước khi kết nối tác nhân.
2. Khởi động [FlyEnv MCP Server](/vi/features/mcp-server), kết nối ứng dụng khách và xác nhận danh sách công cụ có `list_sites`, `resolve_site_runtime` và `resolve_site_urls`. Giữ các công cụ ghi ở trạng thái tắt trong bước kiểm tra này.
3. Yêu cầu tác nhân gọi `list_sites` và dùng đúng tên site được trả về làm `siteName` cho `resolve_site_runtime` và `resolve_site_urls`. Đối chiếu phiên bản PHP với cấu hình site rồi mở URL trả về để xác nhận ứng dụng tải được.
4. Xem các lệnh gọi trong **MCP Server → Audit Log** ở FlyEnv. Nếu site không tải, hãy kiểm tra trạng thái máy chủ web và PHP trước khi sửa cấu hình site.

## Xem demo toàn trình

Nếu bạn muốn thấy quy trình này trong một dự án thật, demo sau đi từ thiết lập MySQL đến một site PHP CRUD chạy thật bằng cách kết hợp FlyEnv, một AI CLI và cầu nối MCP.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/frprHkD1_rQ" title="Demo toàn trình FlyEnv AI CLI + MCP: Từ MySQL đến một site PHP CRUD chạy thật" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Xem [video CRUD với PHP và MySQL](/vi/demos?video=ai-cli-mcp-crud) trong thư viện demo FlyEnv.

## Vì sao cách này hiệu quả mà không cần chi phí Docker-first

Nếu mục tiêu của bạn là một không gian viết code AI local, bạn không phải lúc nào cũng phải bắt đầu bằng việc container hóa quy trình. FlyEnv đã quản lý sẵn runtime native và dịch vụ local, rồi cung cấp cho AI client quyền truy cập MCP có cấu trúc vào stack đó.

Với những đội nhóm muốn một phương án nhẹ nhàng hơn thay vì tự tay nối Docker, shell script và cấu hình client lại với nhau, đây thường là con đường đơn giản hơn.

## Lưu ý bảo mật cho thiết lập MCP local

Với đa số thiết lập, hãy giữ các mặc định sau:

- giữ MCP trên `127.0.0.1`
- giữ token luôn bật
- chỉ bật những công cụ bạn cần
- dùng chế độ phê duyệt cho các thao tác rủi ro

Chỉ bật truy cập từ xa khi bạn hiểu rõ mức độ phơi nhiễm mạng và thực sự cần đến nó.

HTTP `401` nghĩa là ứng dụng khách thiếu token hoặc dùng token không hợp lệ. Hãy cập nhật cấu hình ứng dụng khách sau khi tạo lại token. Nếu ứng dụng trên trình duyệt nhận `403`, kiểm tra chính xác origin và tùy chọn truy cập từ xa. Nếu danh sách thiếu một công cụ, xem lại tùy chọn bật công cụ trong FlyEnv rồi kết nối lại. Khi hủy phê duyệt, FlyEnv sẽ bỏ qua thao tác đó.

Dùng [plugin AI Memory](/vi/features/ai-memory) nếu muốn tác nhân đã kết nối lưu quyết định dự án để dùng ở phiên sau. Plugin thêm bộ công cụ riêng vào cùng máy chủ MCP.

## Câu hỏi thường gặp (FAQ)

**H: FlyEnv có hoạt động như một giải pháp thay thế Docker cho việc viết code AI local không?**

Đ: Trong nhiều quy trình phát triển local, câu trả lời là có. FlyEnv quản lý runtime native, dịch vụ, site local và truy cập MCP mà không đòi hỏi thiết lập ưu tiên container.

**H: Những AI client nào có thể kết nối tới FlyEnv MCP Server?**

Đ: FlyEnv có thể sinh cấu hình HTTP MCP cho Claude Code, Codex, OpenCode, Kimi, GitHub Copilot CLI và Antigravity CLI, cùng cấu hình cầu nối stdio cho các client như Cursor, Cline, Windsurf và Claude Desktop.

**H: Tôi có thể giới hạn những gì một AI agent được thay đổi trên máy mình không?**

Đ: Có. FlyEnv hỗ trợ kiểm soát bật/tắt theo từng công cụ, chế độ phê duyệt cho các hành động rủi ro hơn, và audit log cho hoạt động MCP.

## Bước tiếp theo

Thiết lập trọn vẹn quy trình bằng cách cài FlyEnv, khởi động MCP Server, và kết nối AI coding client ưa thích của bạn vào chính stack local mà dự án đã dùng.

[Tải xuống FlyEnv](/vi/download) để dựng một không gian viết code AI local với runtime, dịch vụ, AI CLI và MCP trong một nơi duy nhất.

## Hướng dẫn liên quan

- Cần bài viết về năng suất rộng hơn? Đọc [Quy trình AI Coding Assistant](/vi/guide/flyenv-work-with-ai)
- Muốn quy trình LLM local? Đọc [Dựng AI Agent offline local](/vi/guide/build-local-offline-ai-agent)
- Muốn tự động hóa trên nền AI local? Đọc [Quy trình AI tự lưu trữ với n8n](/vi/guide/build-local-ai-workflow-by-n8n)
