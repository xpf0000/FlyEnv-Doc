---
description: 'Compare PHP code obfuscation techniques, their maintenance tradeoffs, and practical ways to protect source code before distribution.'
---

# PHP Code Obfuscation

PHP code obfuscation makes source code harder to read after distribution. Keep the original source in version control and treat the generated files as build artifacts. Secrets and private configuration should stay out of the distributed files.

## Run Php Obfuscator on a test copy

Make a backup or disposable copy of the project. In **Tools → Php Obfuscator**, choose an installed PHP version, select a source PHP file or folder, and select a separate destination. Open **Config** if you need to adjust the transformations, then click **Generate**.

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="">

## Verify that the output behaves the same

Use the same PHP version to run the original example and the generated copy. Save them as `source.php` and `output.php` in a scratch directory, then compare the two outputs.

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

Both runs should print the same result. For a project, also run its test suite against the generated files, including Composer autoloading and any routes, templates or class names that are referenced dynamically. Keep the original sources available for debugging. A PHP runtime can still execute and inspect the output, so obfuscation only raises the effort needed to read it.
