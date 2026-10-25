---
layout: doc
titleTemplate: false
title: 'Complemento Kafka: broker KRaft local y gestión de temas | FlyEnv'
description: 'Instala versiones de Kafka, asigna runtimes de Java, ejecuta un broker KRaft local y gestiona temas, configuración y registros desde FlyEnv.'
---

# Kafka en FlyEnv

[Apache Kafka](https://kafka.apache.org/documentation/) es una plataforma de transmisión de eventos en la que las aplicaciones publican y consumen registros a través de temas. El complemento de Kafka integra un broker local en FlyEnv con gestión de versiones, un selector de Java, controles de temas y vistas de configuración y registros.

Instala **Kafka** desde **[Settings → Plugin Market](/es/features/plugin-market)** y abre el módulo en la barra lateral. Incluye las pestañas **Service**, **Version Manager**, **Topics**, **Config File** y **Log**.

## Versiones de Kafka y asignación de Java

**Version Manager** instala distribuciones de Kafka desde los servidores de descarga y archivo de Apache. Puedes conservar varias versiones y elegir cuál ejecutar desde **Service**. El módulo también examina los directorios de instalación personalizados que hayas configurado.

![Lista de versiones de Kafka en FlyEnv con el estado de instalación y las acciones disponibles](https://oss.macphpstudy.com/image/features/plugin/kafka-versions.png)

Cada instalación de Kafka dispone de su propio control **Select Java** en la lista de servicios. El complemento muestra los runtimes detectados de Java 17 o posterior y recuerda la elección para esa instalación. Si no hay ninguno compatible, **Install compatible Java** abre el [módulo de Java](/es/features/java).

Detén el servicio antes de cambiar el runtime de Java asignado. Antes de iniciar Kafka, el complemento comprueba el ejecutable y la versión principal de Java. El JDK elegido también debe cumplir los requisitos de la versión de Kafka que vayas a utilizar.

![Pestaña Service de Kafka con un broker instalado, el selector de Java y el botón de inicio](https://oss.macphpstudy.com/image/features/plugin/kafka-service.png)

## Un broker KRaft local

Inicia, detén y reinicia Kafka mediante los controles de servicio habituales. FlyEnv prepara una configuración KRaft de un solo nodo que reúne las funciones de broker y controlador, por lo que no hace falta un servicio ZooKeeper independiente.

- **Dirección para clientes:** la configuración generada anuncia `127.0.0.1:9092`.
- **Listener del controlador:** la configuración utiliza `127.0.0.1:9093`.
- **Inicialización del almacenamiento:** FlyEnv crea un UUID de clúster y formatea el almacenamiento KRaft si aún no está inicializado.
- **Archivos por versión:** la configuración, los datos y los registros se guardan en el directorio de la instancia de la versión seleccionada.

La configuración predeterminada utiliza un factor de replicación de uno para los temas internos, adecuado para desarrollo local. Conecta los productores y consumidores de tu aplicación a la dirección anunciada para clientes.

## Gestión de temas

La pestaña **Topics** utiliza la versión de Kafka seleccionada en **Service** y el runtime de Java asignado a ella. Inicia el broker antes de utilizar estos controles.

- **Actualizar la lista:** consulta los nombres de los temas del broker local.
- **Create Topic:** introduce un nombre y elige entre 1 y 100 particiones; el complemento crea el tema con un factor de replicación de uno.
- **Delete:** confirma la eliminación de un tema de la lista.

Esta vista permite crear, consultar y eliminar temas. Para producir y consumir registros, utiliza tu aplicación o las herramientas de Kafka.

## Configuración y registros

La pestaña **Config File** edita directamente el archivo `server.properties` de la instancia. También está disponible un archivo generado, `server-default.properties`, como referencia de los valores predeterminados. Ajusta aquí los listeners o las opciones del broker y reinicia el servicio para aplicar los cambios.

![Editor server.properties de Kafka con los listeners KRaft locales y las opciones de almacenamiento](https://oss.macphpstudy.com/image/features/plugin/kafka-configuration.png)

La pestaña **Log** abre `server.log` cuando está disponible; de lo contrario, muestra los registros de errores o de salida del arranque. Consúltalos si el broker no se inicia, el runtime de Java no es adecuado o una aplicación no consigue conectarse.

## Compatibilidad

El complemento está disponible en macOS, Windows y Linux. Gestiona un broker KRaft local, no el despliegue de un clúster de producción distribuido. La compatibilidad entre Kafka y el JDK depende de la versión instalada; el selector del complemento exige como mínimo Java 17.

Explora otros módulos opcionales en el [catálogo de complementos](/es/features/plugin-market), o consulta la integración de colas de mensajes [RabbitMQ](/es/features/rabbitmq) de FlyEnv.
