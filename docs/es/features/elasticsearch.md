---
layout: doc
titleTemplate: false
title: 'Elasticsearch local con gestor de versiones y configuración | FlyEnv'
description: 'Ejecuta versiones de Elasticsearch y edita elasticsearch.yml, jvm.options y log4j2.properties por versión.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Elasticsearch y edita elasticsearch.yml, jvm.options y log4j2.properties por versión.'
  - - meta
    - property: og:title
      content: 'Elasticsearch local con gestor de versiones y configuración | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Elasticsearch y edita elasticsearch.yml, jvm.options y log4j2.properties por versión.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/elasticsearch
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/elasticsearch
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Elasticsearch en FlyEnv

Elasticsearch es un motor de búsqueda y análisis distribuido construido sobre Apache Lucene, utilizado para búsqueda de texto completo, análisis de logs y agregaciones sobre grandes conjuntos de datos; también es el motor de búsqueda que espera un stack local de [Magento](/es/solutions/magento). Si un clúster completo es más de lo que tu proyecto necesita, los módulos más ligeros [Meilisearch](/es/features/meilisearch), [Typesense](/es/features/typesense) y [ZincSearch](/es/features/zincsearch) cubren el mismo terreno de búsqueda instantánea. FlyEnv lo ejecuta como un servicio local gestionado en macOS, Windows y Linux: instala varias versiones en paralelo, inícialas y deténlas desde una sola ventana, y edita el `elasticsearch.yml`, `jvm.options` y `log4j2.properties` propios de cada versión sin buscar en los directorios de instalación. Los logs del nodo en ejecución se abren directamente dentro de la app.

![Vista general del módulo Elasticsearch de FlyEnv](https://oss.macphpstudy.com/image/features/elasticsearch-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de Elasticsearch en paralelo desde **Elasticsearch → Version Manager**.

- **Paquetes estáticos en todas las plataformas:** Elasticsearch se instala desde la lista de paquetes estáticos en línea de FlyEnv tanto en macOS como en Windows y Linux; este módulo no ofrece fuentes de Homebrew ni MacPorts.
- **Ubicación de instalación gestionada:** cada versión se descomprime desde su archivo tar.gz o zip en el directorio `elasticsearch/v<version>/` propio de FlyEnv, manteniendo las builds gestionadas por la app separadas de cualquier otra cosa en tu máquina.
- **Versiones personalizadas:** apunta FlyEnv a cualquier directorio que contenga tu propia instalación de Elasticsearch; escanea en busca del binario `bin/elasticsearch` (`elasticsearch.bat` en Windows) y lista esas builds junto a las gestionadas.

![Version Manager de Elasticsearch con la lista de paquetes estáticos](https://oss.macphpstudy.com/image/features/elasticsearch-2.webp)

## Gestión del servicio

La pestaña **Service** lista todas las versiones instaladas con controles de inicio, parada y reinicio por versión. El interruptor de la barra lateral —también disponible desde la bandeja del sistema— inicia o detiene la versión actual sin abrir la página del módulo.

- **Una versión a la vez:** iniciar una versión detiene cualquier otra versión de Elasticsearch en ejecución, de modo que un segundo nodo nunca compite con el primero por los mismos puertos.
- **Proceso Elasticsearch real:** FlyEnv lanza el `bin/elasticsearch` propio de la versión con un archivo pid, estableciendo `ES_HOME` y `ES_PATH_CONF` al directorio de esa versión para que arranque con su configuración incluida.
- **Puertos por defecto de upstream:** como FlyEnv no genera ninguna configuración propia, una instalación nueva responde en los puertos por defecto de Elasticsearch —HTTP en el puerto 9200 y transporte en el 9300— hasta que los cambies.

![Pestaña Service de Elasticsearch con una versión en ejecución](https://oss.macphpstudy.com/image/features/elasticsearch-3.webp)

## Configuración

Elasticsearch mantiene tres pestañas de editor dedicadas en FlyEnv —**elasticsearch.yml**, **jvm.options** y **log4j2.properties**—, cada una abriendo el archivo dentro del directorio `config/` propio de la versión seleccionada.

- **Archivos por versión:** las ediciones se aplican a la configuración incluida con esa versión específica, de modo que ajustar una instalación nunca se filtra a otra.
- **Edición completa del código fuente:** los editores trabajan directamente sobre los archivos en bruto, cubriendo todos los ajustes de Elasticsearch, JVM y logging en lugar de un subconjunto limitado.
- **Sin sorpresas de regeneración:** FlyEnv nunca reescribe estos archivos; lo que guardas es exactamente lo que el nodo lee en su siguiente inicio.

![Editando elasticsearch.yml para una versión instalada](https://oss.macphpstudy.com/image/features/elasticsearch-4.webp)

## Logs

La pestaña **Log** abre la salida de logs del nodo desde dentro de FlyEnv. La vista principal muestra el `logs/elasticsearch.log` propio de la versión, el primer lugar donde mirar cuando un nodo no arranca o un cambio de clúster se comporta mal. Los logs del servidor, de deprecación y del recolector de basura (`elasticsearch_server.json`, `elasticsearch_deprecation.json`, `gc.log`) que escribe el nodo están disponibles junto a él.

![Visor de logs de Elasticsearch mostrando el log del nodo](https://oss.macphpstudy.com/image/features/elasticsearch-5.webp)

<FeatureRelatedLinks locale="es" slug="elasticsearch" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Elasticsearch y los archivos de configuración incluidos con cada versión; no añade un panel de administración y no garantiza que cada versión de Elasticsearch se publique para cada sistema operativo o arquitectura de CPU: la lista del Version Manager refleja los paquetes estáticos realmente disponibles para tu plataforma. Elasticsearch está disponible en macOS, Windows y Linux. Descarga la app desde la [página de Descargas](/es/download) y mira el módulo en acción en las [demos](/es/demos).
