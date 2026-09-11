---
layout: doc
titleTemplate: false
title: 'Servidor MariaDB local con Version Manager | FlyEnv'
description: 'Ejecuta versiones de MariaDB con configuración visual, logs, phpMyAdmin y herramientas de gestión de bases de datos.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de MariaDB con configuración visual, logs, phpMyAdmin y herramientas de gestión de bases de datos.'
  - - meta
    - property: og:title
      content: 'Servidor MariaDB local con Version Manager | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de MariaDB con configuración visual, logs, phpMyAdmin y herramientas de gestión de bases de datos.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mariadb
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mariadb
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con MariaDB en FlyEnv

MariaDB es una base de datos relacional de código abierto que nació como un fork de MySQL y sigue siendo ampliamente compatible con él, así que [WordPress](/es/solutions/wordpress) y la mayoría de las demás aplicaciones escritas para MySQL funcionan sin cambios. Muchos equipos lo eligen como sustituto directo de MySQL. FlyEnv convierte MariaDB en un servicio local gestionado que controlas desde una sola ventana: instala varias versiones, ejecuta `mariadbd` con un `my-<version>.cnf` editable, vigila los logs de errores y de consultas lentas, y accede a tus datos a través de phpMyAdmin o del panel **Manage** integrado. Todo se ejecuta contra los binarios reales de MariaDB, así que lo que pruebas en local coincide con lo que despliegas.

![Vista general del módulo MariaDB de FlyEnv](https://oss.macphpstudy.com/image/features/mariadb-1.webp)

## Gestión de versiones de MariaDB

Instala y mantén varias versiones de MariaDB en paralelo desde **MariaDB → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** Homebrew (`mariadb`, `mariadb@x.y`) y MacPorts en macOS, Homebrew en Linux, y una lista estática en línea de paquetes listos para usar en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de MariaDB; FlyEnv lo escanea y muestra esas compilaciones junto a las versiones gestionadas.
- **Una única versión de servicio activa:** la pestaña **Service** ejecuta una sola versión seleccionada como servicio de MariaDB; al iniciar otra versión se detiene la anterior.

![Version Manager de MariaDB con fuentes de instalación](https://oss.macphpstudy.com/image/features/mariadb-2.webp)

## Servicio y configuración

FlyEnv ejecuta el binario `mariadbd` real en primer plano —no `mariadbd-safe`— lanzado con `--defaults-file=my-<version>.cnf --port=...`. El puerto es 3306 de forma predeterminada y proviene del archivo de configuración. En Windows, el servicio se detiene limpiamente mediante `mariadb-admin.exe ... shutdown`.

Cada versión obtiene su propio `my-<major.minor>.cnf` dentro del directorio MariaDB de FlyEnv, editable desde la pestaña **Config File**:

- **Formulario de ajustes comunes:** ajusta las opciones que se modifican con frecuencia dentro de la sección `[mariadbd]` desde un formulario visual en lugar de editar el archivo a mano.
- **Editor en bruto:** cambia a la vista de código fuente completa para cualquier opción que el formulario no cubra.

![Archivo de configuración de MariaDB con formulario de ajustes comunes](https://oss.macphpstudy.com/image/features/mariadb-3.webp)

## Logs

Dos pestañas dedicadas —**Log** y **Slow Log**— traen los archivos `error.log` y `slow.log` del servidor a FlyEnv. Revisa primero el log de errores siempre que una versión se niegue a arrancar; una vez activado el registro de consultas lentas en la configuración, el log de consultas lentas registra cada consulta que supera el umbral de consulta larga — muy útil al perfilar una aplicación local con datos realistas.

![Visores del log de errores y del log de consultas lentas de MariaDB](https://oss.macphpstudy.com/image/features/mariadb-4.webp)

## phpMyAdmin

El botón **phpMyAdmin** de la barra de herramientas de **Service** configura un sitio phpMyAdmin completo en un solo paso: FlyEnv descarga phpMyAdmin, crea un sitio local servido por tu servidor web y tu versión de PHP, y lo abre en el navegador. Funciona contra el servicio MariaDB en ejecución, así que obtienes una interfaz web familiar para explorar tablas y ejecutar consultas sin instalar nada manualmente.

![Configurando phpMyAdmin desde el módulo MariaDB](https://oss.macphpstudy.com/image/features/mariadb-5.webp)

## Panel Manage

Para el trabajo diario no hace falta salir de la aplicación: el panel **Manage** de cada versión se comunica directamente con el servidor en ejecución.

- **Añadir base de datos:** crea una base de datos nueva desde la lista de bases de datos.
- **Contraseña de root:** cambia la contraseña de root de la instancia — la contraseña de root predeterminada en instalaciones nuevas es `root`. La [guía de usuario y contraseña de bases de datos](/es/guide/database-user-password) lo explica con más detalle.
- **Copias de seguridad:** exporta cualquier base de datos con `mariadb-dump` al directorio de copias de seguridad que elijas, directamente desde el panel.

<FeatureRelatedLinks locale="es" slug="mariadb" />

## Notas de compatibilidad

El módulo MariaDB ejecuta una versión a la vez; a diferencia del [módulo MySQL](/es/features/mysql), no tiene la función **Group** para múltiples instancias simultáneas. FlyEnv gestiona el runtime local de MariaDB, sus archivos de configuración y sus directorios de datos; no garantiza que todas las versiones de MariaDB estén disponibles en todos los sistemas operativos o fuentes de instalación. Las versiones que ofrece el **Version Manager** dependen de tu plataforma (Homebrew y MacPorts en macOS, Homebrew en Linux, paquetes estáticos en Windows) y de lo que publican esas fuentes, y phpMyAdmin requiere además que haya un servidor web de FlyEnv y una versión de [PHP](/es/features/php) en ejecución. Toma la lista de versiones de la aplicación y la [página de descargas](/es/download) como referencia de lo que se puede instalar en tu equipo.
