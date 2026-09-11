---
layout: doc
titleTemplate: false
title: 'Servidor FTP local con gestión de cuentas | FlyEnv'
description: 'Ejecuta un servidor FTP local con cuentas gestionadas: Pure-FTPd en macOS/Linux o el servidor ftp-srv integrado en todas las plataformas.'
head:
  - - meta
    - name: description
      content: 'Ejecuta un servidor FTP local con cuentas gestionadas: Pure-FTPd en macOS/Linux o el servidor ftp-srv integrado en todas las plataformas.'
  - - meta
    - property: og:title
      content: 'Servidor FTP local con gestión de cuentas | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta un servidor FTP local con cuentas gestionadas: Pure-FTPd en macOS/Linux o el servidor ftp-srv integrado en todas las plataformas.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/ftp-server
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/ftp-server
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/ftp-server
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/ftp-server
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/ftp-server
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/ftp-server
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/ftp-server
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Servidor FTP en FlyEnv

FlyEnv incluye dos formas de ejecutar un servidor FTP local y expone ambas a través de la misma tabla de cuentas: Pure-FTPd como servicio gestionado e instalable en macOS y Linux, y ftp-srv como un servidor basado en Node integrado que funciona en todas partes, incluido Windows. En ambos casos obtienes directorios raíz por cuenta, una dirección `ftp://` copiable mientras el servidor está activo y ninguna configuración manual del daemon. Descarga el build más reciente desde la [página de descarga](/es/download) para obtener ambos módulos.

![Vista general del módulo de servidor FTP de FlyEnv](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Dos implementaciones, una tabla de cuentas

Ambos módulos aparecen en la barra lateral de FlyEnv como servicios que puedes iniciar, detener y fijar a la bandeja del sistema — y al igual que otros servicios pueden unirse a un [grupo de inicio](/es/features/startup-groups) para que el servidor FTP arranque junto con el resto de tu stack. La diferencia está en de dónde procede el binario del servidor y qué plataformas cubre.

- **Pure-FTPd (solo macOS y Linux):** un daemon `pure-ftpd` real que FlyEnv instala, lanza y supervisa por ti. Su página tiene tres pestañas — **Service**, **Version Manager** y **Config File**. Las versiones provienen de Homebrew y MacPorts, y también se admiten directorios personalizados que contengan tu propio build de Pure-FTPd. Solo una versión puede ejecutarse a la vez.
- **ftp-srv (todas las plataformas):** la opción multiplataforma, incluido Windows. El servidor es la biblioteca npm `ftp-srv` integrada, que se ejecuta sobre el runtime de [Node.js](/es/features/nodejs) de la propia app dentro de FlyEnv, por lo que no hay nada que instalar y no existe Version Manager — la página solo tiene la pestaña **Service**.
- **El mismo flujo de trabajo con cuentas:** uses la implementación que uses, la pestaña **Service** muestra la misma tabla de usuario / contraseña / directorio raíz, de modo que cambiar entre ellas no altera tu forma de trabajar.

![Pestaña Service de Pure-FTPd con la tabla de cuentas FTP](https://oss.macphpstudy.com/image/features/ftp-server-1.webp)

## Gestión de cuentas

Cada cuenta FTP es una fila en la tabla de la pestaña **Service**, con los diálogos **Add** y **Edit** para crear y modificar credenciales.

- **Usuario, contraseña y directorio raíz:** cada cuenta obtiene sus propias credenciales y su propia carpeta raíz. La tabla permite copiar los valores con un clic y puede abrir el directorio raíz directamente en el gestor de archivos.
- **Usuarios virtuales en Pure-FTPd:** las cuentas son usuarios virtuales de Pure-FTPd creados mediante `pure-pw useradd`, con el uid y el gid tomados de la carpeta que elijas como raíz, y se almacenan en el PureDB del servidor (`pureftpd.pdb`) — no son cuentas del sistema operativo. FlyEnv también replica la lista de cuentas en `pureftpd.json` para su propio registro.
- **Cuentas basadas en JSON en ftp-srv:** las credenciales se almacenan en `ftp-srv.json` dentro del directorio de datos de FlyEnv y las valida el manejador de login del servidor. En Windows, las entradas antiguas de `pureftpd.json` se migran automáticamente.
- **Dirección copiable mientras está en ejecución:** la cabecera en ejecución muestra un enlace `ftp://<ip>:<port>` que puedes copiar, con un selector de IP para elegir qué dirección local entregar a un cliente.

![Añadir una cuenta FTP con usuario, contraseña y directorio raíz](https://oss.macphpstudy.com/image/features/ftp-server-2.webp)

## Configuración

Pure-FTPd se ejecuta desde un archivo `pure-ftpd.conf` que FlyEnv genera a partir de su plantilla y contra el que arranca el daemon.

- **Editor de configuración de texto plano:** la pestaña **Config File** abre `pure-ftpd.conf` en un editor completo, con una copia `.default` al lado como referencia. Este módulo no tiene formulario visual de ajustes.
- **Puerto desde la configuración:** el puerto de escucha se extrae de la directiva `Bind …,port` y por defecto es el puerto 21. La plantilla también predefine un rango de puertos pasivos de 39000–40000.
- **ftp-srv no tiene ningún archivo de ajustes del servidor que editar:** el servidor integrado escucha en el puerto fijo 21 con puertos pasivos 49152–65535, y elige su dirección PASV dinámicamente — 127.0.0.1 para clientes loopback y, en caso contrario, la IP principal de la LAN. El único JSON que mantiene es `ftp-srv.json`, el almacén de cuentas que gestiona la tabla de la pestaña **Service**, no un archivo de configuración que edites a mano.

![Edición de pure-ftpd.conf en la pestaña Config File](https://oss.macphpstudy.com/image/features/ftp-server-3.webp)

<FeatureRelatedLinks locale="es" slug="ftp-server" />

## Notas de compatibilidad

FlyEnv gestiona el runtime FTP local, sus cuentas y sus archivos de configuración; lo que está disponible depende de tu plataforma. **Pure-FTPd está restringido a macOS y Linux**, y sus versiones instalables dependen de lo que publiquen Homebrew o MacPorts. **ftp-srv funciona en todas las plataformas que soporta FlyEnv**, lo que lo convierte en la única opción en Windows — a costa de no tener gestión de versiones ni configuración del servidor editable. Pure-FTPd se inicia con privilegios elevados (`sudo`) y escribe su salida de log en syslog, por lo que FlyEnv no muestra un visor de logs integrado para él; ftp-srv tampoco expone archivos de log. Ambas implementaciones escuchan en el puerto 21 por defecto, así que solo una de ellas puede atender ese puerto a la vez. Apunta el directorio raíz de una cuenta donde quieras — por ejemplo, a una carpeta de sitio que gestiones en [Host](/es/guide/host) como parte de tu configuración de [sitios locales](/es/features/local-sites-https).
