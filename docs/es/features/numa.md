---
layout: doc
titleTemplate: false
title: 'Servidor DNS local y bloqueo de anuncios con Numa | FlyEnv'
description: 'Ejecuta Numa como servidor DNS local con una interfaz web, listas de bloqueo de anuncios y reenvío a resolvers upstream.'
head:
  - - meta
    - name: description
      content: 'Ejecuta Numa como servidor DNS local con una interfaz web, listas de bloqueo de anuncios y reenvío a resolvers upstream.'
  - - meta
    - property: og:title
      content: 'Servidor DNS local y bloqueo de anuncios con Numa | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta Numa como servidor DNS local con una interfaz web, listas de bloqueo de anuncios y reenvío a resolvers upstream.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/numa
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/numa
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Numa DNS en FlyEnv

Numa es un servidor DNS de terceros (de razvandimescu, [numa.rs](https://numa.rs/)) que resuelve consultas localmente, las reenvía a resolvers upstream y puede bloquear dominios de publicidad y rastreo — útil cuando quieres una capa DNS privada y filtrable para tu propia máquina o red. FlyEnv lo instala y lo ejecuta como un servicio local gestionado: desde el módulo Numa puedes instalar versiones, iniciar el servidor con un clic, editar su configuración TOML, abrir su interfaz web integrada y leer sus logs — con listas de bloqueo de anuncios y reenvío upstream disponibles desde el primer momento.

![Vista general del módulo Numa de FlyEnv con los controles del servicio](https://oss.macphpstudy.com/image/features/numa-1.webp)

## Gestión de versiones

Instala y cambia de versión de Numa desde **Numa → Version Manager**.

- **Lista estática en línea:** archivos precompilados de los releases de GitHub del proyecto — `.tgz` para macOS y Linux, `.zip` para Windows — instalados en el directorio de la aplicación de FlyEnv.
- **Homebrew:** en macOS y Linux, FlyEnv instala Numa a través del tap personalizado `razvandimescu/tap`.
- **Directorios personalizados:** apunta FlyEnv a una carpeta que contenga tu propia build de Numa y listará ese binario junto a las versiones gestionadas.

![Version Manager de Numa con las fuentes estática y Homebrew](https://oss.macphpstudy.com/image/features/numa-2.webp)

## Servicio y configuración

FlyEnv inicia Numa como `numa <numa.toml>`, una única instancia controlada mediante un archivo pid fijo, de modo que solo se ejecuta una versión a la vez. En Linux el proceso se lanza con permisos elevados (vincular el puerto DNS los requiere), en macOS se ejecuta como un proceso normal y en Windows a través de CMD.

La pestaña **Config File** edita `numa/numa.toml` en un editor TOML en bruto — no hay formulario visual. Se conserva un `numa.default.toml` impecable al lado como referencia o para restaurar, y la plantilla por defecto está localizada en inglés y chino. Los valores incluidos por defecto son:

- **Listener DNS:** `0.0.0.0:53` — apunta el DNS de tu sistema o navegador a la máquina para enrutar todas las consultas a través de Numa.
- **Web UI / API:** `api_port = 5380`.
- **Proxy HTTP integrado:** puertos 80/443 con el TLD local `numa` — los mismos puertos que reclamaría un servidor web como [Nginx](/es/features/nginx), así que reasigna uno de los dos si ejecutas ambos.
- **Listas de bloqueo de anuncios:** la plantilla incluye la blocklist HaGeZi activada.
- **Reenvío upstream:** modo forward a través de 9.9.9.9 y 1.1.1.1, con 8.8.8.8 como fallback, además de caché de respuestas y una sección `[mobile]`.

![Edición de numa.toml en el editor de configuración TOML en bruto](https://oss.macphpstudy.com/image/features/numa-3.webp)

## Web UI (5380)

Numa incluye su propia interfaz de administración, servida por el propio servidor. Cuando el servicio está en ejecución, la pestaña Service muestra un botón **open in browser** que abre `http://127.0.0.1:<api_port>` — por defecto el puerto 5380. FlyEnv lee el puerto en directo desde `numa.toml`, así que si cambias `api_port` el botón sigue tu configuración.

![Interfaz web de Numa abierta en el navegador en el puerto 5380](https://oss.macphpstudy.com/image/features/numa-4.webp)

## Logs

La pestaña **Log** muestra el log de errores de inicio por versión `numa/numa-<version>-start-error.log` — el primer lugar donde mirar cuando una versión de Numa no arranca. FlyEnv también indexa todos los archivos `numa-*.log` que encuentra en el directorio de Numa, de modo que los logs de ejecuciones anteriores siguen accesibles.

![Logs de Numa](https://oss.macphpstudy.com/image/features/numa-5.webp)

<FeatureRelatedLinks locale="es" slug="numa" />

## Notas de compatibilidad

Numa está disponible en macOS, Linux y Windows. En Linux el servicio necesita permisos elevados para vincular el puerto 53. MacPorts no se ofrece como fuente de instalación para este módulo — usa la lista estática o Homebrew en su lugar. El editor de configuración es solo TOML en bruto, y la interfaz web es la propia de Numa, por lo que sus funciones y diseño siguen al proyecto upstream en lugar de a FlyEnv. FlyEnv también incluye un [servidor DNS integrado](/es/features/dns-server) que resuelve los [dominios de sitios locales](/es/guide/host) que configures para tus proyectos sin ninguna instalación adicional. Para ver qué versiones de Numa puede instalar tu plataforma, consulta el Version Manager de la app tras descargar FlyEnv desde la [página de Descargas](/es/download); los tutoriales prácticos están recopilados en la [página de Demos](/es/demos).
