---
layout: doc
titleTemplate: false
title: 'Complementos de FlyEnv: añade módulos según tu proyecto'
description: 'Añade clústeres MySQL y MariaDB, Kafka, llama.cpp, OpenSearch, SQL Server, Dameng DM8 y comandos rápidos desde el catálogo de complementos de FlyEnv.'
---

# Catálogo de complementos de FlyEnv

El catálogo de complementos permite añadir módulos a tu espacio de trabajo según las necesidades de cada proyecto. Una vez instalados, puedes gestionarlos junto con los runtimes y servicios que ya utilizas. Los complementos pueden incorporar controles de servicio, gestión de versiones, editores de configuración y vistas específicas dentro de la aplicación.

Abre **Settings → Plugin Market** para explorar los complementos oficiales, gestionar los instalados o añadir una fuente de terceros.

![Catálogo oficial de complementos de FlyEnv con opciones para instalar, reinstalar y actualizar](https://oss.macphpstudy.com/image/features/plugin/plugin-market-official.png)

## Complementos disponibles

Los módulos opcionales cubren servicios locales, inferencia de IA y tareas habituales del terminal:

- **[MySQL Cluster](/es/features/mysql-cluster):** ejecuta instancias independientes en puertos distintos, crea grupos de replicación GTID con origen y réplicas o configura Group Replication con un único primario.
- **[MariaDB Cluster](/es/features/mariadb-cluster):** ejecuta instancias independientes y crea grupos de replicación GTID con configuración, registros y gestión de datos por instancia.
- **[Kafka](/es/features/kafka):** ejecuta un broker KRaft local, asígnale un runtime de Java y crea o elimina temas desde FlyEnv.
- **[llama.cpp](/es/features/llama-cpp):** gestiona runtimes de inferencia, descarga modelos GGUF y ofrece un modelo a través de una API local compatible con OpenAI.
- **[OpenSearch](/es/features/opensearch):** gestiona un servicio de búsqueda, edita su configuración y abre una versión compatible de OpenSearch Dashboards para desarrollo local.
- **[SQL Server](/es/features/mssql):** instala y controla Microsoft SQL Server en Windows x64 y versiones compatibles de Ubuntu, con ajustes y registros específicos de cada plataforma.
- **[Dameng DM8](/es/features/dameng):** instala DM8, inicializa una base de datos y gestiona su servicio, configuración y registros en Windows x64 o Ubuntu 22.04.
- **[Comandos rápidos](/es/features/command-shortcuts):** organiza comandos guardados en tarjetas de carpetas, cambia su orden y ejecútalos en el terminal del sistema desde el directorio correspondiente.

La página de cada complemento explica los controles que añade y los requisitos de plataforma del software que gestiona.

### Complementos para clústeres de bases de datos

MySQL Cluster y MariaDB Cluster añaden vistas específicas para gestionar instancias junto a los módulos de bases de datos integrados de FlyEnv. Reutiliza las versiones instaladas para crear instancias locales nuevas con puertos y directorios de datos separados. Después puedes controlar cada miembro o todo el grupo desde el complemento. MySQL Cluster también ofrece Group Replication; MariaDB Cluster proporciona instancias independientes y replicación con origen y réplicas.

![MySQL Cluster y MariaDB Cluster junto a otros complementos oficiales en el catálogo de FlyEnv](https://oss.macphpstudy.com/image/features/plugin/plugin-market-clusters.webp)

## Instala primero el complemento y después su runtime

En la pestaña **Official**, actualiza el catálogo y pulsa **Install** en la tarjeta del complemento. Cada tarjeta muestra su descripción, autor y versión. Para instalar o actualizar complementos necesitas una [licencia de FlyEnv](/es/license) activa.

Una vez instalado y habilitado, el complemento añade su módulo a la barra lateral. En los complementos de servicios, abre ese módulo para instalar el software que gestiona, como una distribución de Kafka, un runtime de llama.cpp o un motor de base de datos. El paquete del complemento y el runtime tienen versiones independientes: actualizar el complemento actualiza su integración con FlyEnv. Comandos rápidos utiliza el terminal del sistema y no requiere instalar un runtime de servicio adicional.

Los cambios en los complementos suelen aplicarse directamente a la interfaz y al backend, sin reiniciar la aplicación. Si algún cambio requiere un reinicio para completarse, FlyEnv te lo indicará.

## Actualizar y gestionar los complementos instalados

Las tarjetas muestran **Update** cuando hay una versión nueva y **Reinstall** para una versión ya instalada. En la pestaña **Installed** puedes consultar las versiones instaladas y comprobar si están habilitadas.

- **Enable:** incorpora el módulo del complemento al espacio de trabajo.
- **Disable:** detiene los servicios que gestiona y retira el módulo activo de la interfaz, pero conserva el complemento instalado.
- **Uninstall:** tras la confirmación, detiene los servicios gestionados y elimina los archivos de instalación del complemento.

Estas opciones gestionan la integración con FlyEnv. Los runtimes y los modelos se siguen administrando desde las páginas de sus respectivos módulos.

## Fuentes de terceros

La pestaña **Third-party sources** admite la URL de un archivo de registro de complementos en formato JSON. Añade una fuente para descubrir sus complementos, leer sus descripciones e instalar los módulos que elijas. También puedes eliminar las fuentes configuradas desde esta pestaña.

Los complementos de terceros pueden acceder a archivos locales, procesos y a la red. Por eso, FlyEnv muestra una advertencia y pide confirmación antes de instalar desde una fuente que aún no hayas aceptado. Elige fuentes de confianza.

## Complementos y módulos de usuario

Utiliza un complemento si buscas una integración empaquetada con una interfaz propia y operaciones específicas. Recurre a **[Módulos de usuario](/es/features/user-modules)** si quieres definir tu propio comando o script, asociar archivos de configuración y registros y gestionar su ciclo de vida sin programar un complemento.

Ambas opciones amplían el espacio de trabajo; el catálogo permite descubrir y mantener las integraciones empaquetadas. Vuelve al [resumen de funcionalidades](/es/features#plugins) para explorar la selección actual.
