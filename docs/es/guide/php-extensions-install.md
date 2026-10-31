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

- **Biblioteca en línea:** busca en el catálogo de extensiones (con datos de Packagist) e instala con un clic. FlyEnv descarga [PIE](https://github.com/php/pie), el instalador oficial de extensiones de PHP, y lo usa para instalar la extensión para tu versión exacta de PHP, por lo que la correspondencia de versiones se resuelve automáticamente. La descarga de PIE requiere Windows x64.
- **Extensiones incluidas:** la carpeta de extensiones contiene por defecto la mayoría de las extensiones comunes. PHP no las activa automáticamente; actívalas o desactívalas directamente en el panel y FlyEnv actualizará `php.ini` por ti.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Carpeta de extensiones de PHP en Windows">

También puedes instalar una extensión manualmente: descarga el archivo `.dll` desde [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) y colócalo en la carpeta de extensiones de PHP.
