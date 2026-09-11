---
layout: doc
titleTemplate: false
title: 'Servidor PostgreSQL local con pgAdmin 4 | FlyEnv'
description: 'Ejecuta versiones de PostgreSQL con un directorio de datos gestionado, initdb automático, pgAdmin 4 e instalación de la extensión pgvector.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de PostgreSQL con un directorio de datos gestionado, initdb automático, pgAdmin 4 e instalación de la extensión pgvector.'
  - - meta
    - property: og:title
      content: 'Servidor PostgreSQL local con pgAdmin 4 | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de PostgreSQL con un directorio de datos gestionado, initdb automático, pgAdmin 4 e instalación de la extensión pgvector.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/postgresql
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/postgresql
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con PostgreSQL en FlyEnv

PostgreSQL es una base de datos relacional de código abierto conocida por su estricto cumplimiento de los estándares SQL y su rico ecosistema de extensiones. Es una opción habitual para aplicaciones que necesitan consultas complejas, transacciones sólidas o extensiones como pgvector. FlyEnv ejecuta PostgreSQL como un servicio local gestionado que controlas desde una sola ventana: instala varias versiones, deja que FlyEnv inicialice el directorio de datos con `initdb` en el primer arranque, edita `postgresql.conf` directamente y vigila `pg.log` sin salir de la app. Un lanzador integrado de pgAdmin 4 te da una consola web completa con un clic, y el panel Extension instala pgvector para cargas de trabajo de búsqueda vectorial.

![Vista general del módulo PostgreSQL de FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de PostgreSQL en paralelo desde **PostgreSQL → Version Manager**.

- **Fuentes de instalación por plataforma:** Homebrew (`postgresql@x`) y MacPorts (`postgresqlN-server`) en macOS, Homebrew en Linux, y una lista estática en línea de paquetes listos para usar en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de PostgreSQL; FlyEnv lo escanea y lista esas builds junto a las versiones gestionadas.

![Version Manager de PostgreSQL con las fuentes de instalación](https://oss.macphpstudy.com/image/features/postgresql-2.webp)

## Servicio y directorio de datos

La pestaña Service ejecuta la versión seleccionada como tu servidor PostgreSQL local. En macOS y Linux, FlyEnv lanza el binario real `postgres -D <directorio de datos>` en primer plano; en Windows inicia el servidor con `pg_ctl -D ... -l pg.log start`. El puerto se lee de `postgresql.conf` y por defecto es 5432.

Cada versión tiene su propio directorio de datos —`postgresql<major>` dentro del directorio PostgreSQL de FlyEnv por defecto— y la ruta es editable por versión directamente en la barra de herramientas de Service. Cuando el directorio de datos está vacío en el primer arranque, FlyEnv ejecuta automáticamente `initdb -U root`, de modo que el clúster se crea por ti con el superusuario `root`, codificación UTF-8 y la configuración regional de tu sistema. `initdb` se invoca con `-U root` y sin opción de contraseña, así que el superusuario listo para usar es `root` sin contraseña; la [guía de usuario y contraseña de bases de datos](/es/guide/database-user-password) cubre las credenciales por defecto de todos los módulos de bases de datos de FlyEnv.

![Pestaña Service de PostgreSQL con directorio de datos editable](https://oss.macphpstudy.com/image/features/postgresql-3.webp)

Apunta tu aplicación a `127.0.0.1:5432` —las soluciones [Django](/es/solutions/django) y [Strapi](/es/solutions/strapi) muestran stacks locales completos conectados a PostgreSQL de esta forma.

## Configuración

La pestaña **Config File** abre el `postgresql.conf` de la versión, que vive dentro de su directorio de datos. FlyEnv lo edita con un editor de texto plano completo —aquí no hay formulario visual— y mantiene una copia `postgresql.conf.default` junto a él para que puedas restaurar la configuración original en cualquier momento. Los cambios de puerto, las direcciones de escucha y los parámetros de ajuste pasan todos por este archivo.

![Editando postgresql.conf en la pestaña Config File](https://oss.macphpstudy.com/image/features/postgresql-4.webp)

## Logs

La pestaña **Log** abre `pg.log` desde el directorio de datos directamente dentro de FlyEnv —la primera parada cuando una versión no arranca. Los propios logs de pgAdmin (`pgadmin4.log` más su salida de arranque y sus logs de error) están disponibles junto a él, de modo que los problemas de la consola web se pueden diagnosticar desde el mismo lugar.

![Visor de pg.log de PostgreSQL](https://oss.macphpstudy.com/image/features/postgresql-5.webp)

## pgAdmin 4

El botón **pgAdmin 4** de la barra de herramientas de Service configura la consola web completa de pgAdmin en un solo paso. pgAdmin 4 es una aplicación Python, así que en el primer uso FlyEnv instala `pgadmin4` con pip en la versión de [Python](/es/features/python) de FlyEnv que tengas seleccionada —verás un aviso de "installing web panel" mientras ocurre. Después inicia `pgAdmin4.py` en el puerto 5050 (con reintentos), registra automáticamente el servidor PostgreSQL de FlyEnv en ejecución como conexión y abre la consola en tu navegador.

![Consola web de pgAdmin 4 lanzada desde FlyEnv](https://oss.macphpstudy.com/image/features/postgresql-6.webp)

## Extensión pgvector

La acción **Extension** en la fila de un servicio abre un panel que instala pgvector —la extensión de PostgreSQL para almacenamiento de vectores y búsqueda por similitud usada por cargas de trabajo de IA y embeddings (para una base de datos vectorial dedicada, consulta el [módulo Qdrant](/es/features/qdrant)). FlyEnv clona el último tag de pgvector desde su repositorio git y ejecuta `sudo make` / `make install` en el terminal integrado, así ves la salida real de la compilación. El flujo de instalación está orientado a macOS (usa `sudo` y la shell zsh).

![Instalación de pgvector ejecutándose en el terminal integrado del panel Extension](https://oss.macphpstudy.com/image/features/postgresql-7.webp)

<FeatureRelatedLinks locale="es" slug="postgresql" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de PostgreSQL, su archivo de configuración y su directorio de datos; no garantiza que cada versión de PostgreSQL esté disponible en cada sistema operativo o fuente de instalación. Las versiones ofrecidas en Version Manager dependen de tu plataforma (Homebrew y MacPorts en macOS, Homebrew en Linux, paquetes estáticos en Windows) y de lo que esas fuentes publiquen. pgAdmin 4 requiere una versión de Python de FlyEnv seleccionada, y el flujo de instalación de pgvector está diseñado para macOS. Toma la lista de versiones dentro de la app y la [página de Descargas](/es/download) como la fuente de verdad sobre lo que se puede instalar en tu máquina.
