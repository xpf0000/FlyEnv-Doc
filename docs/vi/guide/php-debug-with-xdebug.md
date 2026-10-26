---
title: 'Debug PHP với Xdebug trong PhpStorm và VS Code'
head:
  - - meta
    - name: description
      content: 'Cài đặt và cấu hình Xdebug cho PHP của FlyEnv, rồi kết nối PhpStorm hoặc VS Code để dùng breakpoint, kiểm tra biến, và profiling.'
---

# Debug PHP với Xdebug: Hướng dẫn từng bước cho PhpStorm & VSCode

Chán việc chèn các câu lệnh `var_dump()` và `dd()` khắp mọi nơi? Xdebug biến việc debug PHP từ phỏng đoán thành điều tra chính xác, từng bước. Bạn sẽ thấy chính xác code của mình làm gì, kiểm tra biến tại bất kỳ điểm nào, và theo dõi luồng thực thi—tất cả mà không cần sửa code.

Với tính năng cài Xdebug một chạm của FlyEnv, bạn có thể thiết lập debug chuyên nghiệp trong vài phút thay vì hàng giờ chỉnh sửa tệp cấu hình.

## Vì sao Xdebug thay đổi mọi thứ

### Debug truyền thống (không có Xdebug)

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price;
        var_dump($price); // Remove this later
        $total += $price;
    }
    dd($total); // Die and dump
    return $total;
}
```

**Các vấn đề:**
- Code lộn xộn với các câu lệnh debug
- Quên xóa code debug trước khi commit
- Khó nhìn thấy các giá trị trung gian
- Không có khả năng quan sát luồng thực thi

### Debug với Xdebug

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price; // Set breakpoint here
        $total += $price;
    }
    return $total;
}
```

Đặt một breakpoint. Xong. Kiểm tra biến, đi từng bước qua các vòng lặp, xem call stack—tất cả ngay trong IDE của bạn.

## Cài đặt Xdebug trong FlyEnv

### macOS & Linux: Cài đặt một chạm

FlyEnv cung cấp cách nhanh nhất để cài Xdebug—không cần tải xuống thủ công hay săn lùng cấu hình.

1. Mở module **PHP** của FlyEnv
2. Chọn phiên bản PHP của bạn
3. Nhấp tab **"Extensions"**
4. Tìm **Xdebug** trong danh sách
5. Nhấp **Install**

<img src="https://oss.macphpstudy.com/image/2fdcb21372c6.png" data-x-image-preview="">

Xdebug được tải xuống và cài đặt tự động:

<img src="https://oss.macphpstudy.com/image/6ed17cba5620.png" data-x-image-preview="">

Bạn sẽ thấy Xdebug được liệt kê là đã cài đặt:

<img src="https://oss.macphpstudy.com/image/e459c21168db.png" data-x-image-preview="">

### Windows: Cài đặt thủ công

Windows đòi hỏi tải xuống thủ công (do tính tương thích binary của PHP):

1. Trong module PHP của FlyEnv, nhấp nút **"Extension"**
2. Thao tác này mở website PECL và thư mục extension PHP của bạn

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

3. Truy cập [https://pecl.php.net/package/xdebug](https://pecl.php.net/package/xdebug)
4. Tải xuống tệp `xdebug.dll` khớp với phiên bản PHP của bạn (TS/NTS, x64/x86)
5. Đặt `xdebug.dll` vào thư mục extension PHP của bạn (đã mở ở bước 2)

**Mẹo:** Dùng [Xdebug Wizard](https://xdebug.org/wizard) nếu bạn không chắc nên tải DLL nào.

## Cấu hình Xdebug

### Cấu hình nhanh với các mẫu có sẵn

FlyEnv đi kèm các mẫu Xdebug được cấu hình sẵn—không cần nhớ thuộc lòng các thiết lập.

1. Trong module PHP, nhấp **"Conf"** để chỉnh sửa `php.ini`
2. Tìm tới phần cấu hình Xdebug
3. Nhấp **nút template/copy** để chèn các thiết lập được khuyến nghị

<img src="https://oss.macphpstudy.com/image/a32559287475.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/f67b14ef9aa3.png" data-x-image-preview="">

### Cấu hình Xdebug được khuyến nghị

Dán đoạn này vào `php.ini` của bạn (macOS/Linux):

```ini
[xdebug]
zend_extension = "xdebug.so"
xdebug.idekey = "PHPSTORM"
xdebug.client_host = localhost
xdebug.client_port = 9003
xdebug.mode = debug
xdebug.profiler_append = 0
xdebug.profiler_output_name = cachegrind.out.%p
xdebug.start_with_request = yes
xdebug.trigger_value = StartProfileForMe
xdebug.output_dir = /tmp
```

**Với Windows**, đổi dòng extension thành:
```ini
zend_extension = "xdebug.dll"
```

### Giải thích cấu hình

| Thiết lập | Giá trị | Mục đích |
|---------|-------|---------|
| `xdebug.mode` | `debug` | Bật debug (không phải profiling) |
| `xdebug.client_port` | `9003` | Cổng IDE lắng nghe (mặc định của PhpStorm) |
| `xdebug.idekey` | `PHPSTORM` | Định danh để khớp với IDE |
| `xdebug.start_with_request` | `yes` | Tự động bắt đầu debug với mọi yêu cầu |
| `xdebug.client_host` | `localhost` | Nơi IDE đang chạy |

### Khởi động lại PHP

Sau khi lưu `php.ini`:

1. Khởi động lại dịch vụ PHP trong FlyEnv
2. Tạo một tệp kiểm tra `phpinfo.php`:
   ```php
   <?php phpinfo(); ?>
   ```
3. Truy cập tệp đó trong trình duyệt
4. Tìm kiếm "Xdebug"—bạn sẽ thấy thông tin phiên bản

## Cấu hình IDE

### Thiết lập PhpStorm

#### Bước 1: Đặt PHP Interpreter

1. Mở **Preferences** → **PHP**
2. Đặt CLI Interpreter thành phiên bản PHP của FlyEnv

<img src="https://oss.macphpstudy.com/image/4b91c7af97cf.png" data-x-image-preview="">

#### Bước 2: Cấu hình cổng Xdebug

1. Đi tới **Preferences** → **PHP** → **Debug**
2. Đặt Debug port thành `9003` (khớp với `php.ini`)

<img src="https://oss.macphpstudy.com/image/9b600b0b0275.png" data-x-image-preview="">

#### Bước 3: Đặt IDE Key và Host

1. Trong cài đặt Debug, đặt:
   - **IDE key**: `PHPSTORM` (khớp với `php.ini`)
   - **Host**: `localhost`

<img src="https://oss.macphpstudy.com/image/EFC867333484.jpg" data-x-image-preview="">

#### Bước 4: Bắt đầu lắng nghe

Nhấp nút **"Start Listening for PHP Debug Connections"** (biểu tượng điện thoại) trên thanh công cụ:

<img src="https://oss.macphpstudy.com/image/dad7b890d719.png" data-x-image-preview="">

#### Bước 5: Đặt breakpoint và debug

1. Mở một tệp PHP trong dự án của bạn
2. Nhấp vào phần lề để đặt breakpoint (xuất hiện chấm đỏ)
3. Truy cập site của bạn trong trình duyệt
4. PhpStorm sẽ nhắc bạn chấp nhận kết nối:

<img src="https://oss.macphpstudy.com/image/bc0823efa076.png" data-x-image-preview="">

Nhấp **"Accept"**—bây giờ bạn đang ở chế độ debug:

<img src="https://oss.macphpstudy.com/image/72ba6834f455.png" data-x-image-preview="">

**Các bảng điều khiển của trình gỡ lỗi:**
- **Frames**: Call stack hiển thị đường dẫn thực thi
- **Variables**: Kiểm tra mọi biến trong phạm vi
- **Watches**: Theo dõi các biểu thức cụ thể
- **Console**: Thực thi mã PHP trong ngữ cảnh hiện tại

### Thiết lập VSCode

#### Bước 1: Cài đặt extension PHP Debug

1. Mở view Extensions (Ctrl+Shift+X)
2. Tìm kiếm **"PHP Debug"**
3. Cài đặt extension của Felix Becker

<img src="https://oss.macphpstudy.com/image/php-debug-package.png" data-x-image-preview="">

4. Tải lại cửa sổ VSCode sau khi cài đặt

#### Bước 2: Thêm cấu hình debug

1. Chuyển sang view Debug (Ctrl+Shift+D)
2. Nhấp **"create a launch.json file"**

<img src="https://oss.macphpstudy.com/image/configure-xdebug.png" data-x-image-preview="">

3. Chọn **"PHP"** làm môi trường

<img src="https://oss.macphpstudy.com/image/launch-json.png" data-x-image-preview="">

#### Bước 3: Cấu hình launch.json

VSCode tạo tệp `.vscode/launch.json`. Thêm thuộc tính `runtimeExecutable` trỏ tới PHP của FlyEnv:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "runtimeExecutable": "/Users/username/.flyenv/php/8.3.11/bin/php"
        }
    ]
}
```

**Tìm đường dẫn PHP của bạn:**
```bash
which php
# or
flyenv php path
```

#### Bước 4: Bắt đầu debug

1. Nhấp nút **"Start Debugging"** màu xanh lá (biểu tượng play)
2. Đặt breakpoint trong code của bạn
3. Truy cập site của bạn trong trình duyệt

<img src="https://oss.macphpstudy.com/image/vscode-xdebug.png" data-x-image-preview="">

#### Bước 5: Các phím điều khiển debug

Khi một breakpoint bị chạm tới:

<img src="https://oss.macphpstudy.com/image/breakpoints-vscode.png" data-x-image-preview="">

**Debug Console** hiển thị giá trị biến và chi tiết thực thi.

**Phím tắt:**

| Phím | Hành động |
|-----|--------|
| F5 | Tiếp tục / Chạy tới breakpoint kế tiếp |
| F10 | Step Over (thực thi dòng, không đi vào hàm) |
| F11 | Step Into (đi vào lời gọi hàm) |
| Shift + F11 | Step Out (trở về từ hàm hiện tại) |

<img src="https://oss.macphpstudy.com/image/controls-xdebug.png" data-x-image-preview="">

## Các kỹ thuật debug thiết yếu

### 1. Breakpoint có điều kiện

Chỉ dừng khi các điều kiện cụ thể được thỏa mãn:

```php
// Right-click breakpoint → More → Condition
$user->id === 123
$total > 1000
!empty($items)
```

### 2. Theo dõi biểu thức

Giám sát các biến hoặc biểu thức cụ thể:

- `$user->email`
- `count($cart->items)`
- `$request->input('search')`

### 3. Đánh giá mã

Thực thi mã PHP trong khi debug:

```php
// In PhpStorm Console or VSCode Debug Console
$user->refresh();
DB::table('logs')->where('id', 1)->first();
```

### 4. Truy vết stack

Xem cách bạn đi tới dòng hiện tại:

```
#0 app/Http/Controllers/OrderController.php(45)
#1 vendor/laravel/framework/src/Routing/ControllerDispatcher.php(48)
#2 vendor/laravel/framework/src/Routing/Route.php(262)
...
```

Nhấp vào bất kỳ frame nào để kiểm tra các biến tại điểm đó của quá trình thực thi.

## Khắc phục sự cố

### "Xdebug not loading" trong phpinfo()

**Nguyên nhân:**
- Đường dẫn extension sai
- Phiên bản không khớp (TS so với NTS)
- PHP chưa được khởi động lại sau khi thay đổi cấu hình

**Cách sửa:**
1. Xác minh đường dẫn `zend_extension` chính xác
2. Kiểm tra log lỗi PHP để tìm lỗi tải
3. Bảo đảm PHP đã được khởi động lại trong FlyEnv

### "Cannot accept external Xdebug connection"

**Nguyên nhân:** Cổng không khớp hoặc tường lửa

**Cách sửa:**
1. Xác minh cổng 9003 ở cả `php.ini` và IDE
2. Kiểm tra tường lửa không chặn localhost:9003
3. Bảo đảm IDE đang lắng nghe trước khi gửi yêu cầu

### "Connection refused" hoặc timeout

**Nguyên nhân:** Xdebug không kết nối được tới IDE

**Cách sửa:**
```ini
; Try these settings in php.ini
xdebug.client_host = 127.0.0.1
xdebug.discover_client_host = 1
xdebug.client_port = 9003
```

### Debug không khởi động

**Nguyên nhân:** Thiết lập `start_with_request`

**Cách sửa:**
- `xdebug.start_with_request = yes` — Debug mọi yêu cầu (chỉ dành cho phát triển)
- `xdebug.start_with_request = trigger` — Chỉ khi được kích hoạt (thêm `?XDEBUG_TRIGGER=1` vào URL)

### Breakpoint không bị chạm tới

**Danh sách kiểm tra:**
- [ ] Đã cấu hình path mapping chính xác (PhpStorm)
- [ ] Tệp trên server khớp với tệp local
- [ ] Breakpoint nằm trên dòng có thể thực thi (không phải dòng trống/chú thích)
- [ ] Chế độ Xdebug là `debug` (không phải `profile` hay `off`)

## Profiling hiệu năng (Bonus)

Xdebug cũng có thể profile code của bạn để tìm các điểm nghẽn:

```ini
xdebug.mode = profile
xdebug.start_with_request = trigger
xdebug.output_dir = /tmp
```

Kích hoạt profiling bằng cách thêm `?XDEBUG_PROFILE=1` vào bất kỳ URL nào. Phân tích kết quả bằng:
- **KCachegrind** (Linux)
- **QCachegrind** (macOS/Windows)
- **PhpStorm** (profiler tích hợp sẵn)

## Câu hỏi thường gặp (FAQ)

**H: Xdebug có làm chậm ứng dụng của tôi không?**

Đ: Có, từ 10-50% khi đang bật. Chỉ bật nó cho việc phát triển, không bao giờ dùng cho production. Dùng `xdebug.mode = off` để tắt mà không cần gỡ cài đặt.

**H: Tôi có thể dùng Xdebug với Laravel Sail không?**

Đ: Có, nhưng khá phức tạp. Với FlyEnv, Xdebug hoạt động native mà không có các phức tạp về mạng Docker.

**H: Xdebug 2 và 3 khác nhau thế nào?**

Đ: FlyEnv cài Xdebug 3.x vốn có cấu hình đơn giản hóa. Các thiết lập như `remote_enable` được thay bằng `mode = debug`.

**H: Tôi có thể debug các script CLI không?**

Đ: Có. Trong PhpStorm, dùng "Run > Debug" trên script của bạn. Trong VSCode, cấu hình một cấu hình "Launch currently open script".

**H: Vì sao dùng cổng 9003 thay vì 9000?**

Đ: Xdebug 3 đã đổi cổng mặc định từ 9000 thành 9003 để tránh xung đột với PHP-FPM vốn thường dùng 9000.

**H: Tôi có thể debug các yêu cầu AJAX không?**

Đ: Có. Xdebug hoạt động với bất kỳ yêu cầu HTTP nào—tải trang, AJAX, lời gọi API. Chỉ cần bảo đảm IDE của bạn đang lắng nghe.

**H: Làm thế nào để chỉ debug những yêu cầu cụ thể?**

Đ: Đổi thành `xdebug.start_with_request = trigger` và thêm `?XDEBUG_TRIGGER=1` vào các URL bạn muốn debug.

**H: Tôi có thể dùng Xdebug với các bài kiểm thử PHPUnit không?**

Đ: Hoàn toàn được. Đặt breakpoint trong các phương thức kiểm thử hay mã nguồn, rồi chạy kiểm thử với debug được bật trong IDE của bạn.

**H: Xdebug có hoạt động với PHP 8+ không?**

Đ: Có. Xdebug 3.0+ hỗ trợ đầy đủ PHP 8.0, 8.1, 8.2, và 8.3 bao gồm các tính năng mới như named arguments và attributes.

## Tóm tắt

Xdebug + FlyEnv mang lại cho bạn khả năng debug PHP chuyên nghiệp:

- ✅ **Cài đặt một chạm** trên macOS/Linux
- ✅ **Các mẫu cấu hình sẵn** trong FlyEnv
- ✅ **Debug từng bước** trong PhpStorm và VSCode
- ✅ **Kiểm tra biến** và đánh giá biểu thức
- ✅ **Truy vết call stack** cho các ứng dụng phức tạp

Đừng đoán mò code của bạn làm gì nữa. Hãy trực tiếp nhìn thấy nó.

[Tải xuống FlyEnv](/vi/download) — Có sẵn cho macOS, Windows, và Linux

Các hướng dẫn liên quan:
- [Chạy Laravel với FlyEnv](/vi/guide/run-laravel-use-flyenv) — Thiết lập riêng cho Laravel
- [Cô lập phiên bản theo dự án](/vi/guide/project-level-runtime-environment) — Quản lý nhiều phiên bản PHP
- [Cài đặt PHP Extensions](/vi/guide/php-extensions-install) — Các extension hữu ích khác
