---
layout: doc
titleTemplate: false
title: 'Servidor Neo4j local con Neo4j Browser y vinculación de Java | FlyEnv'
description: 'Ejecuta versiones de Neo4j vinculadas a un runtime de Java compatible de FlyEnv, con configuración gestionada y Neo4j Browser.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Neo4j vinculadas a un runtime de Java compatible de FlyEnv, con configuración gestionada y Neo4j Browser.'
  - - meta
    - property: og:title
      content: 'Servidor Neo4j local con Neo4j Browser y vinculación de Java | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Neo4j vinculadas a un runtime de Java compatible de FlyEnv, con configuración gestionada y Neo4j Browser.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/neo4j
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/neo4j
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Desarrollo local con Neo4j en FlyEnv

Neo4j es una base de datos de grafos de código abierto que almacena los datos como nodos y relaciones en lugar de tablas, y se consulta con su lenguaje Cypher: un modelo de datos distinto al de los almacenes de documentos como [MongoDB](/es/features/mongodb). Es ideal para cargas de trabajo en las que importan las conexiones entre entidades: grafos sociales, grafos de conocimiento, recomendaciones y detección de fraude. FlyEnv ejecuta Neo4j como un servicio local gestionado: instala versiones desde la lista estática en línea, vincula cada una a un runtime de Java compatible del módulo Java de FlyEnv, edita su `neo4j.conf` y supervisa sus logs, todo desde las pestañas **Service / Version Manager / Config File / Log** del módulo Neo4j. El botón **Neo4j Browser** abre la interfaz web propia de la base de datos una vez que el servicio está en marcha.

![Vista general del módulo Neo4j de FlyEnv](https://oss.macphpstudy.com/image/features/neo4j-1.webp)

## Gestión de versiones

Instala versiones de Neo4j desde **Neo4j → Version Manager**.

- **Solo lista estática en línea:** Neo4j se instala desde la lista estática de paquetes de FlyEnv: archivos zip en Windows y tar.gz en el resto de sistemas. Las fuentes de Homebrew y MacPorts no se ofrecen para este módulo.
- **Versiones compatibles:** solo se admite Neo4j **5.23.0 y versiones posteriores**; las versiones anteriores no son compatibles.
- **Versiones personalizadas:** añade un directorio que contenga tu propia instalación de Neo4j y FlyEnv lo escaneará, mostrando esas compilaciones junto a las versiones gestionadas.

![Version Manager de Neo4j con la lista estática en línea](https://oss.macphpstudy.com/image/features/neo4j-2.webp)

## Vinculación de la versión de Java

Neo4j se ejecuta sobre la JVM, por lo que cada versión instalada necesita un runtime de Java. La tabla de **Service** tiene una columna **Java** dedicada donde eliges el JDK de cada versión de Neo4j, usando las instalaciones de Java gestionadas por el [módulo Java](/es/features/java) de FlyEnv.

- **JAVA_HOME por versión:** el JDK seleccionado se vincula a esa versión de Neo4j y se pasa como `JAVA_HOME` cuando el servicio se inicia.
- **Política de compatibilidad:** Neo4j 5.x funciona con Java 17 o 21; Neo4j 2025.x requiere Java 21 o 25. Vincula un JDK compatible antes de iniciar el servicio: la [guía del entorno de desarrollo Java](/es/guide/set-up-java-development-environment) explica cómo instalar JDKs en FlyEnv.

![Tabla de servicios de Neo4j con la columna Java por versión](https://oss.macphpstudy.com/image/features/neo4j-3.webp)

## Servicio y configuración

FlyEnv inicia Neo4j en primer plano con `neo4j console` —`neo4j.ps1 console` a través de PowerShell en Windows— con `JAVA_HOME` y `NEO4J_CONF` configurados para la versión seleccionada. Cada versión dispone de su propio directorio de instancia dentro del directorio Neo4j de FlyEnv.

- **`neo4j.conf` por instancia:** la pestaña **Config File** edita el `conf/neo4j.conf` de la instancia, copiado de la distribución, en un editor en bruto con un enlace a la documentación oficial de Neo4j.
- **Puertos desde la configuración:** el puerto HTTP (predeterminado **7474**), el puerto HTTPS (7473) y el puerto Bolt (predeterminado **7687**) se leen en tiempo real desde `neo4j.conf`, de modo que los puertos que muestra FlyEnv siempre coinciden con los que el servidor realmente vincula.

![Editando neo4j.conf en el editor de configuración en bruto](https://oss.macphpstudy.com/image/features/neo4j-4.webp)

## Logs

La pestaña **Log** cambia entre los archivos de log del servidor: la salida de inicio y de errores de inicio, además de los propios `neo4j.log` y `debug.log` de Neo4j. Los logs de inicio son el primer lugar donde mirar cuando una versión no arranca: una vinculación de Java incompatible, por ejemplo, aparece ahí de inmediato.

## Neo4j Browser

Neo4j incluye su propia interfaz web, y FlyEnv no la reemplaza: el botón **Neo4j Browser** de la barra de herramientas de **Service** abre `http://127.0.0.1:<http port>` en tu navegador externo, donde puedes ejecutar consultas Cypher e inspeccionar el grafo sobre la instancia en ejecución. Consulta las [demos](/es/demos) para ver este flujo de trabajo en acción.

<FeatureRelatedLinks locale="es" slug="neo4j" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Neo4j, su configuración por instancia y su vinculación de Java; no garantiza que todas las versiones de Neo4j estén disponibles en todos los sistemas operativos. Solo se admite Neo4j 5.23.0 y versiones posteriores, las instalaciones provienen de la lista estática en línea (zip en Windows, tar.gz en macOS y Linux), y cada versión requiere un JDK compatible —Java 17/21 para Neo4j 5.x, Java 21/25 para Neo4j 2025.x— instalado a través del módulo Java de FlyEnv. Toma la lista de versiones de la aplicación y la [página de descarga](/es/download) como referencia de lo que se puede instalar en tu equipo.
