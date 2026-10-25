---
description: 'Tìm hiểu vì sao FlyEnv Helper cần quyền quản trị, nó thực hiện những tác vụ hệ thống nào, và cách cài đặt hoặc gỡ bỏ một cách an toàn.'
---

# 📜 Hướng dẫn chi tiết về FlyEnv Helper

Khi sử dụng FlyEnv, hệ thống thường nhắc người dùng cài đặt **FlyEnv Helper**. Bài viết này sẽ giải thích chi tiết vì sao FlyEnv cần chương trình hỗ trợ này, các chức năng cụ thể của nó, cùng cách cài đặt và gỡ bỏ trên từng hệ điều hành.

## 1. Vì sao bạn cần cài đặt FlyEnv Helper?

Chương trình chính của FlyEnv chạy với **quyền người dùng chuẩn (standard user)** theo mặc định. Tuy nhiên, để mang lại trải nghiệm phát triển local trọn vẹn và liền mạch, một số tính năng cốt lõi đòi hỏi **quyền quản trị viên (Administrator/Root)** mới thực thi được. Bao gồm bốn khía cạnh sau:

* **Đọc và ghi tệp hosts của hệ thống**
* **Đường dẫn tệp:** macOS (`/private/etc/hosts`), Windows (`C:\Windows\System32\drivers\etc\hosts`), Linux (`/etc/hosts`).
* **Lý do:** Theo mặc định, người dùng chuẩn không thể sửa các tệp này. Để mô phỏng môi trường production thực tế càng sát càng tốt, FlyEnv không giới hạn tên miền site (khác với một số phần mềm bắt buộc dùng tên miền `.test`), nên nó phải ghi các tên miền tùy chỉnh vào tệp hosts của hệ thống để phân giải local.


* **Gắn (bind) các cổng mạng thấp hơn 1024**
* **Lý do:** Trên macOS và Linux, do cơ chế bảo mật, chương trình chạy bằng người dùng chuẩn không thể trực tiếp bind vào các cổng đặc quyền 1-1023. Nếu bạn muốn truy cập site trực tiếp qua tên miền mà không phải gõ số cổng trong trình duyệt khi dùng Apache, Nginx, Caddy hay Tomcat, bạn phải bind vào các cổng mặc định 80 và 443, và điều này đòi hỏi quyền quản trị viên.


* **Quản lý biến môi trường `$PATH` trên Windows**
* **Lý do:** Một trong những tính năng cốt lõi của FlyEnv là đưa các môi trường như PHP, Node.js, Python, Java, Go và Ruby vào `$PATH` toàn cục của hệ thống chỉ với một cú nhấp. Công cụ quản lý biến môi trường trực quan (hiển thị/thêm/sửa/xóa) mà FlyEnv cung cấp cũng âm thầm đòi hỏi quyền quản trị viên để sửa trực tiếp các biến môi trường cấp hệ thống.


* **Tự động cài chứng chỉ gốc HTTPS vào kho chứng chỉ của hệ thống**
* **Lý do:** FlyEnv cung cấp hỗ trợ HTTPS tự động. Khi bạn tạo hoặc chỉnh sửa một site, hệ thống sẽ tự sinh chứng chỉ SSL local. Để trình duyệt tin tưởng chứng chỉ này, "chứng chỉ gốc" (root certificate) tương ứng phải được cài đặt và tin tưởng trong kho chứng chỉ của hệ thống (Keychain / Credential Manager), một thao tác cũng đòi hỏi quyền quản trị viên.



**💡 Ưu điểm của phương án tách quyền:**
Nếu không có chương trình hỗ trợ này, FlyEnv buộc phải "cắt gọn" tính năng (ví dụ chỉ truy cập qua IP kèm số cổng, hoặc bắt bạn tự tay cấu hình biến môi trường và chứng chỉ SSL), hoặc liên tục bật cửa sổ xin cấp quyền cho từng thao tác nhạy cảm, ảnh hưởng nghiêm trọng đến trải nghiệm phát triển.
Vì vậy, FlyEnv áp dụng **phương án tách quyền (privilege separation)** theo chuẩn ngành: những thao tác cần quyền nâng cao được tách ra vào FlyEnv Helper. Bạn **chỉ cần cấp quyền cho nó một lần duy nhất lúc khởi tạo**, mọi thao tác nhạy cảm về sau đều được Helper xử lý ngầm một cách liền mạch. Cách làm này vừa bảo đảm đầy đủ tính năng, vừa mang lại trải nghiệm người dùng xuất sắc.

---

## 2. Hướng dẫn cài đặt và gỡ bỏ

Cách FlyEnv Helper tồn tại trong hệ thống khác nhau tùy hệ điều hành. Nếu cài Helper thất bại, bạn có thể thử đi tới các thư mục liệt kê bên dưới và tự chạy tệp thực thi với quyền quản trị viên. Nếu cần gỡ bỏ, hãy tham khảo hướng dẫn tương ứng cho từng hệ điều hành dưới đây.

### Windows

Trên Windows, FlyEnv tạo một "Scheduled Task" (tác vụ theo lịch) để tự khởi động Helper chạy nền sau khi người dùng đăng nhập.

* **Vị trí tệp thực thi:** `[Thư mục cài FlyEnv]\resources\helper\flyenv-helper.exe`

**Cách gỡ bỏ:**
Hãy mở PowerShell với quyền Administrator và thực thi các lệnh sau để xóa các tác vụ theo lịch:

```powershell
schtasks.exe /delete /tn "FlyEnvHelperTask" /f
schtasks.exe /delete /tn "flyenv-helper" /f

```

### macOS

Trên macOS, FlyEnv tạo một startup item thông qua `launchd`.

* **Vị trí tệp thực thi:** `/Library/Application Support/FlyEnv/Helper/flyenv-helper`
* **Lưu ý đặc biệt:** Trong quá trình cài đặt, hệ thống sẽ hiện thông báo "Background Items Added"; hãy nhớ chọn **Allow**.

**Cách gỡ bỏ:**
Hãy mở Terminal và thực thi các lệnh sau để gỡ startup item cùng các tệp chương trình:

```bash
sudo launchctl enable "system/com.flyenv.helper"
sudo launchctl bootout system "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/LaunchDaemons/com.flyenv.helper.plist"
sudo rm -rf "/Library/Application Support/FlyEnv/Helper"

```

### Linux

Trên Linux, FlyEnv đăng ký một dịch vụ hệ thống qua `systemd`, thiết lập khởi động cùng hệ thống.

* **Vị trí tệp thực thi:** `/usr/local/bin/flyenv-helper`

**Cách gỡ bỏ:**
Hãy mở Terminal và thực thi các lệnh sau để dừng dịch vụ và dọn dẹp tệp:

```bash
sudo systemctl stop "flyenv-helper"
sudo systemctl disable "flyenv-helper"
sudo rm -f "/etc/systemd/system/flyenv-helper.service"
sudo rm -rf "/usr/local/bin/flyenv-helper"

```

---

## Tóm tắt

FlyEnv Helper là người hùng thầm lặng bảo đảm các tính năng cốt lõi của FlyEnv vận hành trơn tru (như phân giải tên miền tùy chỉnh, HTTPS local, truy cập không cần gõ cổng, và cấu hình biến môi trường tự động). Chỉ với một lần cấp quyền an toàn duy nhất, nó loại bỏ các thao tác cấu hình thủ công rườm rà cùng những hộp thoại hỏi mật khẩu liên tục, tạo cho bạn một môi trường phát triển local sạch sẽ và hiệu quả.
