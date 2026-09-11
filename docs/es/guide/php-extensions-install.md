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

Actualmente no se ofrece instalación rápida en Windows, pero sí la posibilidad de abrir el sitio de PECL y la carpeta de extensiones de PHP.

Nota: la carpeta de extensiones contiene por defecto la mayoría de las extensiones comunes. PHP no activa estas extensiones de forma predeterminada; actívalas en `php.ini`.

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="" alt="Carpeta de extensiones de PHP en Windows">

Descarga el archivo `.dll` desde [https://pecl.php.net/packages.php](https://pecl.php.net/packages.php) y colócalo en la carpeta de extensiones de PHP.

La instalación rápida de extensiones de PHP en la versión de Windows es muy sencilla de implementar, pero la correspondencia entre la versión de PHP y la versión de la extensión de PHP es demasiado engorrosa. No tengo mucho tiempo para ocuparme de esto.

Si alguien quiere contribuir, puede hacer un fork del código y enviar un PR, o proporcionar la correspondencia entre la versión de PHP y la versión de la extensión de PHP.
