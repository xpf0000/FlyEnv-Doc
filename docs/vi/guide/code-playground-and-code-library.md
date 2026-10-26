---
description: 'Chạy các đoạn code đa ngôn ngữ với FlyEnv Code Playground và tổ chức các ví dụ dùng lại được trong Code Library.'
---

# Code Playground & Thư viện mã

## Giới thiệu tính năng
FlyEnv v4.10.6 giới thiệu hai tính năng mạnh mẽ:
- Code Playground: Thực thi ngay các đoạn code đa ngôn ngữ
- Code Library: Lưu trữ và quản lý các đoạn code để dùng lại sau này

## Code Playground

### Giá trị mang lại
Quy trình truyền thống đòi hỏi:
1. Tạo các tệp tạm trong IDE
2. Thực thi lệnh trong terminal
3. Biên dịch thêm cho một số ngôn ngữ

FlyEnv đơn giản hóa quy trình này thành thực thi một cú nhấp.

### Hướng dẫn sử dụng
Truy cập: Tools → Code Playground

Giao diện:
- Panel trái: Trình soạn thảo code với tô sáng cú pháp
- Panel phải: Kết quả thực thi
- Thanh công cụ: Chọn ngôn ngữ, chuyển phiên bản, nút thực thi

![code-play1](https://oss.macphpstudy.com/image/code-play1.png)

### Các ngôn ngữ được hỗ trợ
Hiện hỗ trợ 10 ngôn ngữ lập trình:

#### 1. Java
```java
// class name must be Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World Java");
    }
}
```

#### 2. PHP
```php
<?php
echo "Hello World PHP";
?>
```

#### 3. Golang
```go
// package name must be main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello World Golang")
}
```

#### 4. Rust
```rust
fn main() {
    println!("Hello World Rust");
}
```

#### 5. Erlang
```erlang
-module(main).
-export([main/0]).

main() ->
    io:format("Hello World Erlang~n").
```

#### 6. Python
```python
from __future__ import print_function
print("Hello World Python")
```

#### 7. Ruby
```ruby
puts "Hello World Ruby"
```

#### 8. Perl
```perl
use strict;
use warnings;
print "Hello World Perl\n";
```

#### 9. TypeScript
```typescript
const message: string = "Hello World TypeScript";
console.log(message);
```

#### 10. JavaScript
```javascript
console.log("Hello World JavaScript");
```

### Tính năng nâng cao
- Hỗ trợ nhiều phiên bản
- Tính năng lưu một cú nhấp vào code library

![code-play2](https://oss.macphpstudy.com/image/code-play2.png)

## Code Library

### Giá trị cốt lõi
Giải quyết bài toán tái sử dụng code:
- Loại bỏ việc lục lại các dự án cũ
- Xây dựng kho tri thức code dùng lại được
- Nâng cao hiệu suất truy xuất

### Tính năng chính
1. **Lưu trữ code**
    - Phân loại theo ngôn ngữ/nhóm
    - Thêm tài liệu chi tiết
    - Lưu ảnh chụp kết quả thực thi

2. **Truy xuất nhanh**
    - Tìm kiếm theo từ khóa
    - Bộ lọc ngôn ngữ/thẻ
    - Đánh dấu các đoạn code ưa thích

### Sổ tay sử dụng
Truy cập: Tools → Code Library

Các giao diện chính:
1. Quản lý thư viện
   ![code-play5](https://oss.macphpstudy.com/image/code-play5.png)

2. Thêm đoạn code
- Tô sáng cú pháp
- Tài liệu chi tiết
- Ảnh chụp kết quả thực thi
  ![code-play4](https://oss.macphpstudy.com/image/code-play4.png)
- 
3. Chi tiết đoạn code
- Hiển thị toàn bộ code
- So sánh phiên bản
- Sao chép một cú nhấp
  ![code-play3](https://oss.macphpstudy.com/image/code-play3.png)

## Tóm tắt
FlyEnv cung cấp một giải pháp quản lý code hoàn chỉnh:
- Playground: Kiểm chứng code tức thì
- Library: Bảo toàn tri thức
- Kết hợp: Tạo thành quy trình "kiểm chứng-lưu trữ-tái sử dụng"

Lợi ích:

✓ Nâng cao hiệu suất hơn 50%

✓ Kho tri thức cá nhân/nhóm

✓ Tập trung vào phát triển cốt lõi

## Video hướng dẫn

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/yYSwnYC7V9M?si=-udYI2rgDKS2O155" title="Trình phát video YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
