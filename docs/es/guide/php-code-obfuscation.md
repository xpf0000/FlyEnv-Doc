---
description: 'Compara las técnicas de ofuscación de código PHP, sus implicaciones de mantenimiento y formas prácticas de proteger el código fuente antes de distribuirlo.'
---

# Ofuscación de código PHP

La ofuscación dificulta la lectura del código fuente de PHP distribuido. Guarda el código original en control de versiones y conserva el resultado como artefacto de compilación. Excluye los secretos y la configuración privada de los archivos que distribuyas.

## Ejecuta Php Obfuscator sobre una copia de prueba

Haz una copia de seguridad o una copia desechable. En **Tools → Php Obfuscator**, selecciona una versión de PHP instalada, elige un archivo o directorio de origen e indica un destino separado. Abre **Config** si necesitas ajustar las transformaciones y pulsa **Generate**.

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="" alt="Seleccionar archivo PHP o carpeta de proyecto">

<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="" alt="Herramienta de ofuscación de código PHP en FlyEnv">

## Comprueba que el resultado se comporta igual

Usa la misma versión de PHP para ejecutar el ejemplo original y la copia generada. Guarda los archivos como `source.php` y `output.php` en una carpeta temporal y compara la salida.

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

Ambos comandos deben imprimir el mismo resultado. Para un proyecto, ejecuta también sus pruebas sobre los archivos generados, incluida la carga automática de Composer y las rutas, plantillas o clases que se referencien dinámicamente. Guarda el código original para depurar. PHP puede seguir ejecutando e inspeccionando el resultado, por lo que la ofuscación solo dificulta su lectura.
