---
description: 'So sánh các kỹ thuật làm rối mã (obfuscation) PHP, sự đánh đổi về bảo trì của chúng, và những cách thực tế để bảo vệ mã nguồn trước khi phân phối.'
---

# Làm rối mã PHP (PHP Code Obfuscation)

Làm rối mã PHP (PHP code obfuscation) là việc chuyển đổi mã PHP sang một dạng khó hiểu nhằm bảo vệ tính bảo mật và bảo mật thông tin của mã. Dưới đây là các kỹ thuật làm rối mã PHP phổ biến:

1. Nén mã: nén mã thành một dòng duy nhất bằng cách loại bỏ khoảng trắng, ngắt dòng, chú thích, v.v. để khiến mã khó hiểu.

2. Thay thế biến: thay tên biến bằng các chuỗi ngẫu nhiên để khiến mã khó nhận diện và giải mã.

3. Thay thế tên hàm: thay tên hàm bằng các chuỗi ngẫu nhiên để khiến chúng khó nhận diện và giải mã.

4. Mã hóa chuỗi: mã hóa chuỗi và giải mã tại thời điểm chạy để bảo vệ chuỗi khỏi bị xâm phạm.

5. Làm rối luồng điều khiển: khiến mã khó hiểu và khó giải mã bằng cách thay đổi thứ tự thực thi, thêm mã vô dụng, v.v.

Cần lưu ý rằng mặc dù làm rối mã PHP có thể tăng tính bảo mật và bảo mật thông tin của mã, nó cũng làm tăng độ khó khi bảo trì mã và giảm hiệu suất vận hành.

Do đó, bạn nên lựa chọn và sử dụng tùy theo nhu cầu và tình huống thực tế của mình. Ngoài ra, cần cẩn thận chọn một công cụ làm rối mã PHP đáng tin cậy để tránh những vấn đề khó lường.

Bên cạnh đó, cần lưu ý rằng làm rối mã PHP không bảo vệ mã hoàn toàn khỏi bị bẻ khóa, mà chỉ làm tăng độ khó của việc bẻ khóa.

Vì vậy, cũng cần kết hợp các biện pháp bảo mật khác, chẳng hạn như kiểm soát quyền, xác thực đầu vào, mã hóa truyền dẫn, v.v., để nâng cao tính bảo mật và bảo mật thông tin của mã.

Dưới đây là một số công cụ làm rối mã PHP phổ biến:

1. Zend Guard: Zend Guard là một công cụ làm rối mã PHP thương mại, biên dịch mã PHP thành các tệp nhị phân, cung cấp nhiều tùy chọn bảo vệ và làm rối mã.

2. IonCube: IonCube là một công cụ làm rối mã PHP thương mại, biên dịch mã PHP thành các tệp nhị phân, cung cấp nhiều tùy chọn bảo vệ và làm rối mã.

3. PHP Obfuscator: PHP Obfuscator là một công cụ làm rối mã PHP trực tuyến miễn phí, làm rối mã PHP bằng cách nén, thay thế tên biến, tên hàm, v.v.

4. SourceGuardian: SourceGuardian là một công cụ làm rối mã PHP thương mại, biên dịch mã PHP thành các tệp nhị phân, cung cấp nhiều tùy chọn bảo vệ và làm rối mã.

5. PHP Protect: PHP Protect là một công cụ làm rối mã PHP thương mại, làm rối mã PHP bằng cách nén và thay thế tên biến, tên hàm, đồng thời cung cấp các tính năng như mã hóa chuỗi và làm rối luồng điều khiển.

6. PHPPacker: PHPPacker là một công cụ làm rối mã PHP trực tuyến miễn phí, nén mã PHP thành một dòng duy nhất và thực hiện thay thế tên biến, tên hàm để làm rối mã.

FlyEnv tích hợp tính năng làm rối mã PHP để giúp các lập trình viên làm rối mã PHP thành một dạng khó bẻ khóa, nhờ đó tăng tính bảo mật và bảo mật thông tin của mã.

Tính năng làm rối mã của chúng tôi có thể làm rối mã PHP bằng cách nén, thay thế tên biến, tên hàm, v.v., và cung cấp nhiều tùy chọn bảo vệ như mã hóa chuỗi, làm rối luồng điều khiển, v.v.

Các kỹ thuật làm rối này có thể ngăn mã bị bẻ khóa và đánh cắp một cách hiệu quả, đồng thời nâng cao tính bảo mật và bảo mật thông tin của mã.

Để dùng công cụ làm rối mã PHP, nhấp Tools->Php Obfuscator để vào công cụ làm rối mã PHP

Chọn một tệp php đơn lẻ hoặc thư mục dự án, bạn có thể làm rối một tệp php đơn lẻ hoặc toàn bộ dự án

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="">

Mã PHP như thế này:

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

sẽ được làm rối thành mã sau

```php
<?php
 goto LtBfp; owOLm: $cRfp0 = $y7zSz->nztUz(); goto IKtKr; tIX85: class R1Y9H { private $I8L4A = ''; public function __construct($wTiwF) { $this->I8L4A = $wTiwF; } public function NzTUz() { return "\x20\x54\150\145\40\x54\145\170\164\x20\x69\163\x3a\40{$this->I8L4A}"; } } goto BW458; hxUVm: echo $cRfp0; goto xMa32; LtBfp: class nNmnL { private $MGe1P = 0; protected $Uvmg9 = 1; public $byk5B = 2; public function add() { return $this->Uvmg9 + $this->MGe1P + $this->byk5B; } } goto tIX85; BW458: $rkfS7 = new NNMnL(); goto rgLTA; rgLTA: $cRfp0 = $rkfS7->add(); goto hxUVm; xMa32: $y7zSz = new r1Y9H("\120\110\x50\x20\103\x6f\144\145\x20\x4f\x62\146\x75\x73\143\141\164\151\157\156\40\124\145\x73\164"); goto owOLm; IKtKr: echo $cRfp0;
```
