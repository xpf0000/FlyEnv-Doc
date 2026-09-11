---
layout: doc
titleTemplate: false
title: 'Almacenamiento de objetos local compatible con S3 con RustFS | FlyEnv'
description: 'Ejecuta versiones de RustFS con configuración visual, directorio de datos por versión y la consola de RustFS.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de RustFS con configuración visual, directorio de datos por versión y la consola de RustFS.'
  - - meta
    - property: og:title
      content: 'Almacenamiento de objetos local compatible con S3 con RustFS | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de RustFS con configuración visual, directorio de datos por versión y la consola de RustFS.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/rustfs
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/rustfs
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Almacenamiento de objetos local con RustFS en FlyEnv

RustFS es un sistema de almacenamiento de objetos distribuido y de código abierto escrito en Rust que expone una API compatible con S3. Encaja en cargas de trabajo que quieren almacenamiento de objetos en su propia infraestructura — y, en desarrollo, un sustituto local de S3 sin contenedores ni cuentas en la nube. FlyEnv convierte RustFS en un servicio local gestionado, para que dispongas de ese almacenamiento sin scripting de shell. Instala compilaciones de RustFS desde la propia aplicación, configura `rustfs.conf` mediante un formulario de ajustes agrupados, guarda los objetos de cada versión en su propio directorio de datos y abre la consola de RustFS en el navegador con un solo clic.

![Vista general del módulo RustFS de FlyEnv](https://oss.macphpstudy.com/image/features/rustfs-1.webp)

## Gestión de versiones

Instala y conserva varias compilaciones de RustFS desde **RustFS → Version Manager**, y luego elige cuál ejecuta el servicio.

- **Solo fuente Static:** las versiones de RustFS provienen de la lista en línea de FlyEnv con compilaciones listas para usar, empaquetadas como archivos zip para Windows, macOS y Linux. Homebrew y MacPorts no se ofrecen como fuentes de instalación para este módulo.
- **Directorios personalizados:** apunta FlyEnv a una carpeta que contenga tu propio binario de RustFS y aparecerá en la lista de instalados junto a las compilaciones gestionadas.
- **Una sola instancia en ejecución:** un archivo pid fijo limita el módulo a un solo servidor RustFS a la vez.

![Version Manager de RustFS con la lista en línea de compilaciones estáticas](https://oss.macphpstudy.com/image/features/rustfs-2.webp)

## Servicio y configuración

La pestaña Service lanza la compilación seleccionada como `rustfs server` con argumentos traducidos de las claves `RUSTFS_*` de `rustfs/rustfs.conf` — los valores de entorno también se pasan al proceso. El interruptor de la barra lateral (replicado en la bandeja del sistema) inicia o detiene el servicio.

- **Directorio de datos por versión:** cada compilación guarda sus objetos en su propia ruta de volumen (por defecto `rustfs/data` dentro de la carpeta RustFS de FlyEnv). Elige otra carpeta desde la barra de herramientas de Service y la elección se recuerda por versión.
- **Formulario de ajustes visual:** la pestaña Config File expone unas 19 claves `RUSTFS_*` como formulario agrupado en Network, Security, General, Advanced y Performance — dirección del servidor, dominios del servidor, claves de acceso y secretas (o archivos de claves), activación y dirección de la consola, endpoint de obs, ruta TLS, región, modo KMS (local o vault) y perfiles de buffer.
- **Editor en bruto:** cambia a la vista de texto completo de `rustfs.conf` para las claves que el formulario no muestra; los cambios se aplican en el siguiente inicio.

![Archivo de configuración de RustFS con el formulario agrupado de ajustes RUSTFS_*](https://oss.macphpstudy.com/image/features/rustfs-3.webp)

## Consola

RustFS incluye su propia consola web, y FlyEnv prepara la dirección por ti. El puerto de la consola se extrae de `RUSTFS_CONSOLE_ADDRESS` en la configuración — `http://127.0.0.1:9001/` por defecto — y el botón de la consola en la barra de herramientas de Service lo abre directamente en tu navegador. Desde ahí inicias sesión con las credenciales de acceso de tu configuración y trabajas con buckets, objetos y políticas de acceso en la interfaz web oficial de RustFS, sin necesidad de herramientas adicionales.

![Apertura de la consola de RustFS en el navegador desde la pestaña Service](https://oss.macphpstudy.com/image/features/rustfs-4.webp)

## Logs

RustFS tiene dos pestañas de log dedicadas dentro de FlyEnv: **Log** muestra la salida `start-out` por versión y **Error Log** muestra el archivo `start-error` correspondiente. Cuando una compilación se niega a arrancar — un puerto ocupado, un directorio de datos ilegible, una ruta TLS incorrecta — el Error Log es donde la causa aparece primero.

<FeatureRelatedLinks locale="es" slug="rustfs" />

## Notas de compatibilidad

El módulo ejecuta una sola instancia de RustFS a la vez — una versión, un directorio de datos y una dirección de consola — así que cambia entre compilaciones desde la pestaña Service en lugar de intentar ejecutar servidores en paralelo. Las compilaciones instalables dependen de lo que la lista en línea estática publique para tu sistema operativo; Homebrew y MacPorts no son fuentes para RustFS. FlyEnv gestiona el proceso local, el archivo `rustfs.conf` y los directorios de datos por versión; los buckets, los objetos y todo lo que hay detrás de la API compatible con S3 pertenecen al propio RustFS. Las aplicaciones que hablan S3 — como el almacenamiento externo de [Nextcloud](/es/solutions/nextcloud) o las subidas de [Strapi](/es/solutions/strapi) — pueden apuntar a este endpoint durante el desarrollo, y FlyEnv también incluye [MinIO](/es/features/minio) como módulo alternativo de almacenamiento de objetos compatible con S3. Consulta la [página de descarga](/es/download) para la versión actual y explora las [Demos](/es/demos) para ver el módulo en acción.
