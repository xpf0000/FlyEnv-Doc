---
description: 'Compara las técnicas de ofuscación de código PHP, sus implicaciones de mantenimiento y formas prácticas de proteger el código fuente antes de distribuirlo.'
---

# Ofuscación de código PHP

La ofuscación de código PHP consiste en convertir el código PHP en una forma ininteligible para proteger su seguridad y confidencialidad. A continuación se presentan las técnicas más comunes de ofuscación de código PHP:

1. Compresión del código: comprimir el código en una sola línea eliminando espacios, saltos de línea, comentarios, etc., para hacerlo difícil de entender.

2. Sustitución de variables: reemplazar los nombres de las variables por cadenas aleatorias para dificultar su reconocimiento y descifrado.

3. Sustitución de nombres de funciones: reemplazar los nombres de las funciones por cadenas aleatorias para dificultar su identificación y descifrado.

4. Cifrado de cadenas: cifrar las cadenas y descifrarlas en tiempo de ejecución para protegerlas de posibles filtraciones.

5. Ofuscación del flujo de control: hacer que el código sea difícil de entender y descifrar cambiando el orden en el que se ejecuta, añadiendo código inútil, etc.

Cabe señalar que, aunque la ofuscación de código PHP puede aumentar la seguridad y confidencialidad del código, también aumenta la dificultad de mantenerlo y reduce la eficiencia de ejecución.

Por lo tanto, debes elegirla y usarla según tus necesidades y tu situación reales. Además, es importante elegir una herramienta de ofuscación de código PHP fiable para evitar problemas imprevisibles.

También hay que tener en cuenta que la ofuscación de código PHP no protege el código por completo frente a la ingeniería inversa, solo aumenta la dificultad de descifrarlo.

Por eso también es necesario combinarla con otras medidas de seguridad, como el control de permisos, la validación de entradas, la transmisión cifrada, etc., para mejorar la seguridad y confidencialidad del código.

Estas son algunas herramientas comunes de ofuscación de código PHP:

1. Zend Guard: Zend Guard es una herramienta comercial de ofuscación de código PHP que compila el código PHP en archivos binarios y ofrece diversas opciones de protección y ofuscación.

2. IonCube: IonCube es una herramienta comercial de ofuscación de código PHP que compila el código PHP en archivos binarios y ofrece diversas opciones de protección y ofuscación.

3. PHP Obfuscator: PHP Obfuscator es una herramienta en línea gratuita de ofuscación de código PHP que ofusca el código PHP comprimiéndolo y reemplazando nombres de variables, nombres de funciones, etc.

4. SourceGuardian: SourceGuardian es una herramienta comercial de ofuscación de código PHP que compila el código PHP en archivos binarios y ofrece diversas opciones de protección y ofuscación.

5. PHP Protect: PHP Protect es una herramienta comercial de ofuscación de código PHP que ofusca el código PHP comprimiéndolo y reemplazando nombres de variables y funciones, y además ofrece funciones como el cifrado de cadenas y la ofuscación del flujo de control.

6. PHPPacker: PHPPacker es una herramienta en línea gratuita de ofuscación de código PHP que comprime el código PHP en una sola línea y realiza la sustitución de nombres de variables y funciones para ofuscarlo.

FlyEnv integra la ofuscación de código PHP para ayudar a los desarrolladores a ofuscar el código PHP en una forma difícil de descifrar, aumentando así la seguridad y confidencialidad del código.

Nuestra función de ofuscación de código puede ofuscar el código PHP comprimiéndolo y reemplazando nombres de variables y funciones, y ofrece diversas opciones de protección como el cifrado de cadenas, la ofuscación del flujo de control, etc.

Estas técnicas de ofuscación pueden evitar eficazmente que el código sea descifrado y robado, y mejorar la seguridad y confidencialidad del código.

Para usar la herramienta de ofuscación de código PHP, haz clic en **Tools -> Php Obfuscator** para abrir la herramienta de ofuscación de código PHP.

Selecciona un archivo php individual o la carpeta de un proyecto; puedes ofuscar un solo archivo php o todo el proyecto.

<img src="https://oss.macphpstudy.com/image/98d80872b153.png" data-x-image-preview="" alt="Seleccionar archivo PHP o carpeta de proyecto">
<p/>
<img src="https://oss.macphpstudy.com/image/003391cd543e.png" data-x-image-preview="" alt="Herramienta de ofuscación de código PHP en FlyEnv">

Un código PHP como este:

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

se ofuscará en el siguiente código:

```php
<?php
 goto LtBfp; owOLm: $cRfp0 = $y7zSz->nztUz(); goto IKtKr; tIX85: class R1Y9H { private $I8L4A = ''; public function __construct($wTiwF) { $this->I8L4A = $wTiwF; } public function NzTUz() { return "\x20\x54\150\145\40\x54\145\170\164\x20\x69\163\x3a\40{$this->I8L4A}"; } } goto BW458; hxUVm: echo $cRfp0; goto xMa32; LtBfp: class nNmnL { private $MGe1P = 0; protected $Uvmg9 = 1; public $byk5B = 2; public function add() { return $this->Uvmg9 + $this->MGe1P + $this->byk5B; } } goto tIX85; BW458: $rkfS7 = new NNMnL(); goto rgLTA; rgLTA: $cRfp0 = $rkfS7->add(); goto hxUVm; xMa32: $y7zSz = new r1Y9H("\120\110\x50\x20\103\x6f\144\145\x20\x4f\x62\146\x75\x73\143\x61\164\x69\157\x6e\40\124\145\x73\164"); goto owOLm; IKtKr: echo $cRfp0;
```
