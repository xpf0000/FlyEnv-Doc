---
description: '比较 PHP 代码混淆方法、维护成本和局限，并了解分发前保护源码的实用方案。'
---

# PHP代码混淆

PHP 代码混淆会提高阅读发布后源码的难度。请在版本控制中保留原始源码，将生成文件作为构建产物处理。发布文件中应排除密钥和私有配置。

## 用测试副本运行 PHP 混淆工具

先备份项目或创建可丢弃的测试副本。在「工具 → PHP 代码混淆」中选择已安装的 PHP 版本、源文件或目录，再选一个独立输出位置。需要调整转换方式时打开「配置」，然后点击「生成」。

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="">

## 验证生成文件的行为一致

用同一 PHP 版本运行原始示例与生成的副本。将两个文件分别保存为临时目录中的 `source.php` 和 `output.php`，再比较输出。

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
 goto LtBfp; owOLm: $cRfp0 = $y7zSz->nztUz(); goto IKtKr; tIX85: class R1Y9H { private $I8L4A = ''; public function __construct($wTiwF) { $this->I8L4A = $wTiwF; } public function NzTUz() { return "\x20\x54\150\145\40\x54\145\170\164\x20\x69\163\x3a\40{$this->I8L4A}"; } } goto BW458; hxUVm: echo $cRfp0; goto xMa32; LtBfp: class nNmnL { private $MGe1P = 0; protected $Uvmg9 = 1; public $byk5B = 2; public function add() { return $this->Uvmg9 + $this->MGe1P + $this->byk5B; } } goto tIX85; BW458: $rkfS7 = new NNMnL(); goto rgLTA; rgLTA: $cRfp0 = $rkfS7->add(); goto hxUVm; xMa32: $y7zSz = new r1Y9H("\120\110\x50\x20\103\x6f\144\145\x20\x4f\x62\146\x75\x73\143\x61\164\x69\157\x6e\40\124\145\x73\164"); goto owOLm; IKtKr: echo $cRfp0;
```

```text
php source.php
php output.php
```

两次运行应输出相同结果。对项目还应使用生成文件运行测试，包括 Composer 自动加载，以及动态引用的路由、模板或类名。保留原始源码供调试使用。PHP 运行时仍可执行和检查输出，混淆只能增加阅读难度。
