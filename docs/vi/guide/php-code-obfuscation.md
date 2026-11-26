---
description: 'So sánh các kỹ thuật làm rối mã (obfuscation) PHP, sự đánh đổi về bảo trì của chúng, và những cách thực tế để bảo vệ mã nguồn trước khi phân phối.'
---

# Làm rối mã PHP (PHP Code Obfuscation)

Làm rối mã khiến mã nguồn PHP đã phân phối khó đọc hơn. Giữ mã gốc trong hệ thống quản lý phiên bản và xem tệp kết quả là sản phẩm build. Loại bỏ bí mật và cấu hình riêng tư khỏi các tệp phân phối.

## Chạy Php Obfuscator trên bản sao thử nghiệm

Tạo bản sao lưu hoặc bản sao có thể bỏ đi. Trong **Tools → Php Obfuscator**, chọn phiên bản PHP đã cài, tệp hoặc thư mục nguồn và nơi lưu kết quả riêng. Mở **Config** nếu cần chỉnh cách biến đổi, rồi chọn **Generate**.

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="">

## Kiểm tra kết quả có hành vi như cũ

Dùng cùng một phiên bản PHP để chạy ví dụ gốc và bản được tạo. Lưu hai tệp thành `source.php` và `output.php` trong một thư mục tạm, sau đó đối chiếu đầu ra.

```php
<?php
class Test {
    private $a = 0;
    protected $b = 1;
    public $c = 2;

    public function add() {
        return $this->b + $this->a + $this->c;
    }
}

class Text {
    private $str = '';

    public function __construct($str){
        $this->str = $str;
    }

    public function toString() {
        return " The Text is: {$this->str}";
    }
}

$test = new Test();
$value = $test->add();
echo $value;

$text = new Text('PHP Code Obfuscation Test');
$value = $text->toString();
echo $value;
```

```php
<?php
 goto LtBfp; owOLm: $cRfp0 = $y7zSz->nztUz(); goto IKtKr; tIX85: class R1Y9H { private $I8L4A = ''; public function __construct($wTiwF) { $this->I8L4A = $wTiwF; } public function NzTUz() { return "\x20\x54\150\145\40\x54\145\170\164\x20\x69\163\x3a\40{$this->I8L4A}"; } } goto BW458; hxUVm: echo $cRfp0; goto xMa32; LtBfp: class nNmnL { private $MGe1P = 0; protected $Uvmg9 = 1; public $byk5B = 2; public function add() { return $this->Uvmg9 + $this->MGe1P + $this->byk5B; } } goto tIX85; BW458: $rkfS7 = new NNMnL(); goto rgLTA; rgLTA: $cRfp0 = $rkfS7->add(); goto hxUVm; xMa32: $y7zSz = new r1Y9H("\120\110\x50\x20\103\x6f\144\145\x20\x4f\x62\146\x75\x73\143\141\164\151\157\156\40\124\145\x73\164"); goto owOLm; IKtKr: echo $cRfp0;
```

```text
php source.php
php output.php
```

Hai lần chạy phải in ra cùng một kết quả. Với dự án, hãy chạy thêm bộ kiểm thử trên các tệp được tạo, gồm Composer autoloading và các route, template hoặc lớp được tham chiếu động. Giữ mã nguồn gốc để gỡ lỗi. PHP vẫn có thể chạy và kiểm tra mã đã tạo, nên việc làm rối chỉ tăng độ khó khi đọc.
