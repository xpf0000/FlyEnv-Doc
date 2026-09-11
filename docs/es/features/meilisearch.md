---
layout: doc
titleTemplate: false
title: 'Servidor local de Meilisearch con configuración visual | FlyEnv'
description: 'Ejecuta versiones de Meilisearch con un completo formulario de configuración visual, directorio de datos por versión y el dashboard de búsqueda.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Meilisearch con un completo formulario de configuración visual, directorio de datos por versión y el dashboard de búsqueda.'
  - - meta
    - property: og:title
      content: 'Servidor local de Meilisearch con configuración visual | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Meilisearch con un completo formulario de configuración visual, directorio de datos por versión y el dashboard de búsqueda.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/meilisearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/meilisearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Meilisearch en FlyEnv

Meilisearch es un motor de búsqueda de código abierto y ligero que ofrece búsqueda de texto completo instantánea y tolerante a errores tipográficos a través de una API REST. Suele elegirse para alimentar el cuadro de búsqueda de un sitio o aplicación cuando un despliegue completo de [Elasticsearch](/es/features/elasticsearch) resultaría demasiado pesado, junto a otros motores ligeros como [Typesense](/es/features/typesense) y [ZincSearch](/es/features/zincsearch). FlyEnv lo ejecuta como un servicio local gestionado: instala versiones desde el Version Manager, inicia el binario real de `meilisearch` contra un `meilisearch.toml` editable y abre el dashboard de búsqueda integrado desde la pestaña Service. Cada versión tiene su propio directorio de trabajo para sus datos, y la configuración está cubierta tanto por un editor en bruto como por un completo formulario visual de unas 30 opciones.

![Vista general del módulo Meilisearch de FlyEnv con la pestaña Service](https://oss.macphpstudy.com/image/features/meilisearch-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de Meilisearch en paralelo desde **Meilisearch → Version Manager**, y elige cuál ejecuta el servicio.

- **Fuentes de instalación por plataforma:** builds estáticas y Homebrew (`meilisearch`) en macOS y Linux; en Windows, una descarga estática de `meilisearch.exe` que FlyEnv copia en su lugar y verifica ejecutando `--version`.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propio binario de Meilisearch; FlyEnv lo escanea y lista esas builds junto a las versiones gestionadas.
- **Directorio de trabajo por versión:** la pestaña Service incluye un campo de directorio de trabajo editable para cada versión, con el valor por defecto `<BaseDir>/meilisearch/<major.minor>`, de modo que las distintas versiones mantienen sus datos separados.

![Version Manager de Meilisearch con las fuentes de instalación](https://oss.macphpstudy.com/image/features/meilisearch-2.webp)

## Servicio y configuración

FlyEnv inicia el servicio como `meilisearch --config-file-path <BaseDir>/meilisearch/meilisearch.toml` con el directorio de trabajo de la versión como directorio del proceso. La plantilla incluida usa por defecto `http_addr = "localhost:7700"`, `db_path = "./data.ms"` y `env = "development"`.

La pestaña **Config File** edita `meilisearch.toml` (con `meilisearch.default.toml` al lado como referencia de fábrica) de dos formas:

- **Formulario visual:** unas 30 opciones mapeadas al archivo TOML —`db_path`, `env`, `http_addr`, `master_key`, opciones SSL, dumps y snapshots, `log_level`, métricas y más— ajustables sin editar el archivo a mano.
- **Editor en bruto:** cambia a la vista de código fuente completa para cualquier cosa que el formulario no cubra.

![Formulario de configuración visual de Meilisearch mapeado a meilisearch.toml](https://oss.macphpstudy.com/image/features/meilisearch-3.webp)

## Dashboard (7700)

Cuando el servicio está en ejecución, la pestaña Service muestra un botón de interfaz web que abre el dashboard de Meilisearch en tu navegador en `http://127.0.0.1:<puerto de meilisearch.toml>/` —`7700` por defecto. El dashboard es la interfaz integrada propia de Meilisearch para probar peticiones de búsqueda contra tus índices locales, de modo que puedes verificar la indexación y el comportamiento de las consultas sin conectar primero una aplicación.

![Dashboard de Meilisearch abierto desde la pestaña Service en el puerto 7700](https://oss.macphpstudy.com/image/features/meilisearch-4.webp)

## Logs

La pestaña **Log** abre los logs de inicio por versión directamente dentro de FlyEnv. El log de errores de inicio (`meilisearch-<version>-start-error.log`) es la primera parada cuando una versión no arranca —por ejemplo, cuando el puerto de `meilisearch.toml` ya está ocupado— y la salida del inicio se captura junto a él.

![Visor del log de errores de inicio de Meilisearch](https://oss.macphpstudy.com/image/features/meilisearch-5.webp)

<FeatureRelatedLinks locale="es" slug="meilisearch" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Meilisearch, su `meilisearch.toml` y sus directorios de trabajo por versión; no garantiza que cada versión de Meilisearch esté disponible en cada sistema operativo o fuente de instalación. Las fuentes estáticas y de Homebrew se ofrecen en macOS y Linux, mientras que Windows utiliza únicamente la descarga estática. Ten en cuenta también que Meilisearch usa un único `meilisearch.toml` compartido por todas las versiones instaladas —a diferencia de módulos como [Redis](/es/features/redis), que mantienen archivos de configuración por versión mayor—, por lo que los cambios de configuración se aplican a cualquier versión que ejecutes. Toma la lista de versiones de la app y la [página de Descargas](/es/download) como fuente de verdad sobre lo que se puede instalar en tu máquina, y mira las [demos](/es/demos) para ver el módulo en acción.
