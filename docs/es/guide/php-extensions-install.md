---
description: 'Instala y activa extensiones de PHP en FlyEnv en macOS, Linux y Windows usando PECL, paquetes o la biblioteca de extensiones.'
---

# Instalación de extensiones de PHP

## macOS & Linux

FlyEnv ofrece la instalación rápida de extensiones de PHP.

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="" alt="Instalación rápida de extensiones de PHP">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="" alt="Lista de extensiones de PHP">

También puedes usar el comando `pecl` para instalar extensiones de PHP.

Haz clic en la ruta o cópiala, y luego ejecuta `cd` hacia esa ruta en el terminal.

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="" alt="Ruta de instalación de PHP">

Instala la extensión de PHP Xdebug:

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="" alt="Instalación de Xdebug">

## Windows

El panel de extensiones ofrece instalación rápida en Windows:

- **Catálogo en línea.** Abre **Extensions** desde la versión de PHP que vas a usar. FlyEnv muestra las versiones disponibles e instala una DLL PECL compatible con Windows o usa [PIE](https://github.com/php/pie), según el paquete. El instalador de PIE que descarga FlyEnv es para Windows x64.
- **Extensiones incluidas:** la carpeta de extensiones contiene por defecto la mayoría de las extensiones comunes. PHP no las activa automáticamente; actívalas o desactívalas directamente en el panel y FlyEnv actualizará `php.ini` por ti.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Carpeta de extensiones de PHP en Windows">

Para instalar manualmente, descarga de [PECL](https://pecl.php.net/packages.php) una DLL que coincida con la versión de PHP, la arquitectura y el tipo de seguridad de hilos (TS/NTS). Colócala en el `extension_dir` de esa versión y actívala en su configuración. El [manual de PHP](https://www.php.net/manual/en/install.pecl.windows.php) describe la compatibilidad de las DLL en Windows.

## Verifica la extensión en la versión de PHP elegida

Ejecuta estos comandos con el ejecutable de la versión de PHP que cambiaste. Si tienes varias instaladas, usa la ruta completa a `php` o `php.exe` de esa versión en lugar de `php`.

```text
php --ini
php -m
```

Comprueba qué archivo INI se ha cargado y busca el módulo en el listado. Si PHP emite un aviso de inicio, revisa la extensión, sus dependencias y la directiva INI. Para un sitio web, reinicia el proceso correspondiente desde el [módulo PHP-FPM](/es/features/php) y comprueba la extensión dentro del sitio. La salida de CLI solo describe ese proceso.
