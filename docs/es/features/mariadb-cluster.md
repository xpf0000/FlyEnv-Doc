---
layout: doc
titleTemplate: false
title: 'MariaDB Cluster: múltiples instancias y replicación GTID | FlyEnv'
description: 'Ejecuta varias instancias locales de MariaDB y crea grupos de replicación GTID con configuración, registros y gestión de datos por instancia en FlyEnv.'
---

# MariaDB Cluster en FlyEnv

El complemento MariaDB Cluster ejecuta varias instancias de MariaDB a la vez en puertos diferentes. Puedes mantener bases de datos independientes para cada proyecto o crear un grupo de replicación GTID con origen y réplicas. Cada miembro tiene su propia configuración, registros y directorio de datos.

Instala **MariaDB Cluster** desde **[Settings → Plugin Market](/es/features/plugin-market)**. Sus pestañas **MariaDB instances**, **Services** y **Versions** están disponibles en macOS, Windows y Linux. Las versiones de la base de datos que puedes instalar dependen de la plataforma y de las fuentes de instalación.

![MariaDB Cluster en el catálogo de complementos de FlyEnv con sus controles de instalación](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-market.webp)

## Demostración en vídeo

Primero observa un entorno local de MariaDB con origen y réplica en funcionamiento y después su configuración en FlyEnv. Una aplicación de pedidos independiente y DbGate permiten verificar las lecturas de la réplica y la recuperación de la replicación.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/OI5P39-LLes?rel=0" title="Replicación local de MariaDB más sencilla con FlyEnv" loading="lazy" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Ver en [YouTube](https://www.youtube.com/watch?v=OI5P39-LLes) o [Bilibili](https://www.bilibili.com/video/BV1P1HP6yE7h/).

## Varias instancias a partir de las versiones instaladas

Utiliza **Versions** para instalar MariaDB desde las fuentes de FlyEnv y elige esa instalación al crear una instancia. El complemento requiere **MariaDB 10.4 o posterior**. Varias instancias pueden compartir los binarios del motor con directorios de datos separados; las instancias independientes también pueden elegir versiones distintas. Las instalaciones de MySQL no se aceptan como motores MariaDB.

La pestaña **Services** muestra las instalaciones, mientras que **MariaDB instances** permite iniciar, detener y reiniciar las bases de datos creadas por el complemento. No se puede desinstalar a través del complemento una versión que esté siendo utilizada por instancias en ejecución.

![Lista de MariaDB Cluster con una base de datos independiente y un grupo de origen y réplica](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-instances.webp)

## Crea una base de datos independiente

Pulsa **Create**, selecciona **Standalone**, introduce el **Cluster name**, elige la **MariaDB version** y establece la **Root password** inicial. Revisa los campos generados: **Instance name**, **TCP port**, **Socket** en macOS/Linux o **Named pipe** en Windows, y **Data directory**. Escribe la ruta de los datos o elígela con el botón de carpeta.

El formulario muestra los motivos de error junto a los campos afectados: datos obligatorios sin rellenar, nombres duplicados, conflictos de puertos o direcciones de conexión local, y directorios de datos solapados. Cada instancia necesita su propio directorio de datos y su propia dirección de conexión.

![Creación de una instancia MariaDB independiente con versión, contraseña de root y ajustes de la instancia](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-standalone.webp)

El complemento crea **bases de datos locales nuevas y vacías**; no importa ni clona bases de datos existentes. Detén la instancia antes de editarla. Puedes modificar el nombre, el puerto y la dirección de conexión local, pero el formulario no permite sustituir directorios ya inicializados, versiones del motor ni topologías. Un directorio vacío aún puede cambiarse antes de la inicialización.

## Un origen con réplicas GTID

Selecciona **Source / replica** e indica el número de réplicas, entre **1 y 15**. Todos los miembros deben usar **la misma instalación de MariaDB**. Revisa el puerto, el Socket o canal con nombre y el directorio de datos de cada miembro antes de confirmar.

FlyEnv prepara la replicación GTID, la cuenta de replicación, las réplicas de solo lectura y los canales de replicación. La lista de instancias muestra los roles de origen y réplica, el estado del proceso y el retraso de replicación.

![Formulario de replicación MariaDB con número de réplicas, puertos y directorios de cada miembro](https://oss.macphpstudy.com/image/features/plugin/mariadb-cluster-create-replication.webp)

MariaDB reanuda los canales guardados después de reiniciarse. Para configurar o recuperar la replicación de forma explícita, inicia todos los miembros, elige **Configure / recover replication** e introduce las credenciales de root actuales. Las operaciones habituales de inicio, parada y reinicio del proceso no requieren iniciar sesión en la base de datos.

El complemento ofrece los modos independiente y replicación GTID con origen y réplicas. No configura Galera, no promociona réplicas automáticamente y no proporciona un router ni un puerto de conexión único. Todos los miembros se ejecutan en una máquina, de modo que el grupo local no protege frente a un fallo de esa máquina. Para Group Replication de MySQL con un único primario, utiliza **[MySQL Cluster](/es/features/mysql-cluster)**.

## Controles, configuración y registros por instancia

Inicia, detén o reinicia una base de datos desde su fila, o actúa sobre todos los miembros desde la cabecera del grupo. El interruptor de la barra lateral controla todas las instancias de MariaDB Cluster. Los botones afectados muestran el progreso de la operación. La columna **State** refleja el estado del proceso, por separado del estado de la replicación.

El menú de acciones abre la configuración, el registro de errores, el de consultas lentas, la información de conexión y **Data management** de la instancia seleccionada. Los cambios de configuración se aplican en el siguiente reinicio; los ajustes de identidad y replicación gestionados por el complemento están protegidos. Haz clic en la dirección Socket para copiarla y usarla desde un cliente local.

La gestión de datos incluye listas de bases de datos y usuarios, creación de bases de datos y concesión de permisos, cambios de contraseña, notas, directorio de copias de seguridad y exportación de las bases de datos seleccionadas. Realiza las escrituras en el origen: el complemento mantiene las restricciones de solo lectura de las réplicas. Las credenciales se guardan por instancia y puedes elegir expresamente recordarlas en el dispositivo; en caso contrario, la contraseña de root de una instancia nueva solo permanece en la sesión.

### Explora los datos con DbGate

Cuando hay una instancia en ejecución, el icono de DbGate junto al título de la vista de instancias abre el panel de bases de datos compartido de FlyEnv en el navegador. Se necesita un runtime de **Node.js** instalado y disponible, aunque el módulo Node.js esté oculto. Si DbGate no está instalado, se inicia su instalación al abrir el panel; si ya existe una instalación global, se reutiliza.

MariaDB Cluster comparte el panel con MongoDB y MySQL Cluster. Al detener la última instancia de MariaDB Cluster se cierra el panel global. Puedes abrirlo de nuevo desde otro módulo cuando lo necesites.

## La eliminación conserva los archivos de datos

Al confirmar la eliminación de una instancia o grupo, el complemento detiene los miembros y retira sus registros de gestión. **Los archivos de las bases de datos se conservan**, junto con la configuración y los logs que puedes revisar. Desinstalar un motor a través del complemento tampoco elimina las bases de datos de sus instancias. Si una operación se interrumpe, revisa los archivos guardados y el resultado de cada miembro antes de volver a intentarlo.

Para el flujo habitual con un solo servicio, consulta el **[módulo MariaDB](/es/features/mariadb)** integrado. Vuelve al **[catálogo de complementos](/es/features/plugin-market)** para actualizar, desactivar o desinstalar la integración.
