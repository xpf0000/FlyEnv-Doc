---
layout: doc
titleTemplate: false
title: 'Complemento OpenSearch: búsqueda local y Dashboards | FlyEnv'
description: 'Instala versiones de OpenSearch, gestiona la búsqueda local, edita la configuración y abre una versión compatible de OpenSearch Dashboards desde FlyEnv.'
---

# OpenSearch en FlyEnv

[OpenSearch](https://docs.opensearch.org/latest/install-and-configure/install-opensearch/index/) es un motor de búsqueda y análisis. Su complemento para FlyEnv añade gestión de versiones, controles de servicio, edición de configuración y registros, además de un modo de desarrollo local y una forma integrada de iniciar OpenSearch Dashboards.

Instala **OpenSearch** desde **[Settings → Plugin Market](/es/features/plugin-market)** y abre el módulo en la barra lateral. Incluye las pestañas **Service**, **Version Manager**, **Config File** y **Log**.

## Gestión de versiones

Utiliza **Version Manager** para instalar y conservar varias versiones de OpenSearch; después, elige en **Service** cuál quieres ejecutar.

- **macOS:** la instalación se realiza mediante Homebrew. La pestaña de paquetes estáticos permanece oculta porque OpenSearch no publica distribuciones oficiales para macOS.
- **Linux y Windows:** utiliza las distribuciones estáticas disponibles. Las versiones y arquitecturas dependen de los paquetes publicados por el proyecto.
- **Instalaciones personalizadas:** el módulo puede examinar los directorios configurados para localizar instalaciones existentes de OpenSearch.

![Lista de versiones de OpenSearch en FlyEnv con las instaladas y las disponibles](https://oss.macphpstudy.com/image/features/plugin/opensearch-versions.png)

Inicia, detén y reinicia la versión elegida con los controles de servicio habituales de FlyEnv. El interruptor de la barra lateral y la entrada de la bandeja del sistema también dan acceso al estado del servicio.

![Pestaña Service de OpenSearch con una instancia local en ejecución y sus controles](https://oss.macphpstudy.com/image/features/plugin/opensearch-service.png)

## Configuración desde FlyEnv

La pestaña **Config File** abre tres archivos de la instalación seleccionada:

- **`opensearch.yml`:** ajustes del nodo, el clúster, la red y la seguridad.
- **`jvm.options`:** opciones de la JVM, incluida la configuración de la memoria heap.
- **`log4j2.properties`:** configuración de los registros.

FlyEnv localiza la configuración tanto en instalaciones desde archivos como en las de Homebrew, de modo que los editores abren los archivos utilizados por el servicio. Homebrew puede compartir la configuración a través de su directorio enlazado. Si guardas opciones que requieren reiniciar el servicio, reinicia OpenSearch para aplicarlas.

![Editor de OpenSearch con las pestañas opensearch.yml, jvm.options y log4j2.properties](https://oss.macphpstudy.com/image/features/plugin/opensearch-configuration.png)

## Modo de desarrollo local

La vista de ajustes comunes de **`opensearch.yml`** incluye el interruptor **Local Development Mode**. Al activarlo, se deshabilita el complemento de seguridad de OpenSearch y se utiliza HTTP sin autenticación. Un nodo con el puerto HTTP predeterminado queda accesible en el puerto 9200.

FlyEnv comenta los ajustes de seguridad incluidos y los conserva para restaurarlos cuando desactives este modo. La interfaz ofrece una acción de reinicio para aplicar el cambio.

Utiliza este modo únicamente en una red de desarrollo local de confianza. Al desactivarlo, vuelve a habilitarse el complemento de seguridad. El arranque seguro sigue los requisitos de la versión instalada de OpenSearch, incluida la contraseña inicial de administrador cuando sea necesaria.

## Abrir una versión compatible de Dashboards

Con una versión válida de OpenSearch en ejecución en modo de desarrollo local, pulsa **Open Dashboards** en **Service**. FlyEnv verifica el backend activo, instala una versión compatible de Dashboards si es necesario, la inicia y abre la interfaz en el navegador.

En Linux y Windows se utilizan los paquetes de Dashboards publicados por el proyecto. En macOS, el complemento busca una versión de Homebrew que coincida y necesita Node.js para preparar Dashboards. Si no encuentra esa versión, informa del problema en lugar de iniciar una versión incompatible.

Dashboards escucha en una dirección local, en el puerto 5601 o en otro puerto disponible. Su ciclo de vida está ligado al servicio OpenSearch: detener el backend también detiene la instancia de Dashboards que gestiona FlyEnv.

La integración actual admite el modo de desarrollo local mediante HTTP. Este lanzador de Dashboards no admite clústeres OpenSearch que requieran autenticación o utilicen TLS.

## Registros y compatibilidad

La pestaña **Log** localiza el registro del nodo a partir de `path.logs` y `cluster.name`, también en instalaciones de Homebrew. Consúltalo si un nodo no arranca o si aparecen errores después de cambiar la configuración.

El complemento está disponible en macOS, Windows y Linux. La disponibilidad del runtime y de Dashboards depende de la plataforma y la versión elegida. Este módulo gestiona servicios locales y su interfaz asociada, no el despliegue de un clúster de producción.

Compara la integración de [Elasticsearch](/es/features/elasticsearch) de FlyEnv, o vuelve al [catálogo de complementos](/es/features/plugin-market) para explorar otros módulos opcionales.
