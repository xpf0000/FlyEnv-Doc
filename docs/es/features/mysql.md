---
layout: doc
titleTemplate: false
title: 'Servidor MySQL local con Version Manager | FlyEnv'
description: 'Ejecuta versiones de MySQL con configuración visual, logs, phpMyAdmin, gestión de bases de datos y grupos multiinstancia.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de MySQL con configuración visual, logs, phpMyAdmin, gestión de bases de datos y grupos multiinstancia.'
  - - meta
    - property: og:title
      content: 'Servidor MySQL local con Version Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de MySQL con configuración visual, logs, phpMyAdmin, gestión de bases de datos y grupos multiinstancia.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mysql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mysql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con MySQL en FlyEnv

MySQL es una base de datos relacional de código abierto y, durante años, ha sido la opción predeterminada detrás de [WordPress](/es/solutions/wordpress), Laravel e innumerables stacks web. FlyEnv convierte MySQL en un servicio local gestionado que controlas desde una sola ventana: instala varias versiones, ejecuta `mysqld` con un `my-<version>.cnf` editable, vigila los logs de errores y de consultas lentas, y accede a tus datos a través de phpMyAdmin o del panel **Manage** integrado. Cuando un solo servidor no es suficiente, la función **Group** ejecuta varias instancias de MySQL en paralelo, cada una con su propia versión, puerto y directorio de datos.

![Vista general del módulo MySQL de FlyEnv](https://oss.macphpstudy.com/image/features/mysql-1.webp)

## Gestión de versiones de MySQL

Instala y mantén varias versiones de MySQL en paralelo desde **MySQL → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** Homebrew (`mysql`, `mysql@x.y`) y MacPorts (`mysqlN-server`) en macOS, Homebrew en Linux, y una lista estática en línea de paquetes listos para usar en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de MySQL; FlyEnv lo escanea y muestra esas compilaciones junto a las versiones gestionadas.
- **Una versión de servicio principal:** la pestaña **Service** ejecuta una única versión seleccionada como servicio principal de MySQL, mientras que las instancias adicionales simultáneas las gestiona la función **Group** que se describe más abajo.

![Version Manager de MySQL con fuentes de instalación](https://oss.macphpstudy.com/image/features/mysql-2.webp)

## Servicio y configuración

FlyEnv ejecuta el binario `mysqld` real en primer plano —no `mysqld_safe`— lanzado con `--defaults-file=my-<version>.cnf --port=...`. El puerto es 3306 de forma predeterminada y proviene del archivo de configuración. En Windows, el servicio se detiene limpiamente mediante `mysqladmin.exe ... shutdown`.

Cada versión obtiene su propio `my-<major.minor>.cnf` dentro del directorio MySQL de FlyEnv, editable desde la pestaña **Config File**:

- **Formulario de ajustes comunes:** ajusta las opciones que se modifican con frecuencia —puerto, `key_buffer_size`, `innodb_buffer_pool_size` y más— desde un formulario visual en lugar de editar el archivo a mano.
- **Editor en bruto:** cambia a la vista de código fuente completa para cualquier opción que el formulario no cubra.

![Archivo de configuración de MySQL con formulario de ajustes comunes](https://oss.macphpstudy.com/image/features/mysql-3.webp)

## Logs

Las pestañas **Log** y **Slow Log** abren los archivos `error.log` y `slow.log` del servidor directamente dentro de FlyEnv. El log de errores es el primer lugar donde mirar cuando una versión no arranca, y el log de consultas lentas muestra qué consultas superan el umbral de consulta larga una vez activado el registro de consultas lentas en la configuración: útil al perfilar una aplicación local con datos realistas.

![Visor del log de errores de MySQL](https://oss.macphpstudy.com/image/features/mysql-4.webp)

## phpMyAdmin

El botón **phpMyAdmin** de la barra de herramientas de **Service** configura un sitio phpMyAdmin completo en un solo paso: FlyEnv descarga phpMyAdmin, crea un sitio local `phpmyadmin.test` servido por tu servidor web y tu versión de PHP, y lo abre en el navegador. Funciona contra el servicio MySQL en ejecución, así que obtienes una interfaz web familiar para explorar tablas y ejecutar consultas sin instalar nada manualmente.

![Configurando phpMyAdmin desde el módulo MySQL](https://oss.macphpstudy.com/image/features/mysql-5.webp)

## Gestión de bases de datos

Para el trabajo diario no hace falta salir de la aplicación: el panel **Manage** de cada versión se comunica directamente con el servidor en ejecución.

- **Añadir base de datos:** crea una base de datos nueva desde la lista de bases de datos.
- **Contraseña de root:** cambia la contraseña de root de la instancia; la contraseña de root predeterminada en instalaciones nuevas es `root`. La [guía de usuario y contraseña de bases de datos](/es/guide/database-user-password) lo explica con más detalle.
- **Copias de seguridad:** exporta cualquier base de datos con `mysqldump` al directorio de copias de seguridad que elijas, directamente desde el panel.

## Varias instancias con Groups

La pestaña **Group** ejecuta varias instancias de MySQL simultáneamente junto al servicio principal. Cada instancia combina una versión de MySQL elegida con su propio puerto y su propio directorio de datos, y mantiene configuración y logs por instancia; así, un proyecto fijado a MySQL 5.7 puede ejecutarse junto a otro con MySQL 8.x sin tocar los datos del otro. El interruptor de encendido del grupo en la cabecera de la barra lateral —también disponible en la bandeja del sistema— inicia o detiene el servicio principal y todas las instancias del grupo a la vez.

![Pestaña Group de MySQL con varias instancias simultáneas](https://oss.macphpstudy.com/image/features/mysql-6.webp)

Los grupos resultan prácticos para reproducir entornos de producción en local; por ejemplo, cuando un proyecto [Laravel](/es/solutions/laravel) espera una versión mayor concreta de MySQL.

<FeatureRelatedLinks locale="es" slug="mysql" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de MySQL, sus archivos de configuración y sus directorios de datos; no garantiza que todas las versiones de MySQL estén disponibles en todos los sistemas operativos o fuentes de instalación. Las versiones que ofrece el **Version Manager** dependen de tu plataforma (Homebrew y MacPorts en macOS, Homebrew en Linux, paquetes estáticos en Windows) y de lo que publican esas fuentes. Si tu stack usa MariaDB como sustituto directo de MySQL, el [módulo MariaDB](/es/features/mariadb) ofrece el mismo flujo de trabajo de una sola ventana. Toma la lista de versiones de la aplicación y la [página de descarga](/es/download) como referencia de lo que se puede instalar en tu equipo.
