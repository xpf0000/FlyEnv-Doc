---
layout: doc
titleTemplate: false
title: 'MySQL Cluster: múltiples instancias y replicación | FlyEnv'
description: 'Ejecuta varias instancias locales de MySQL y crea grupos de replicación GTID o Group Replication con un único primario desde FlyEnv.'
---

# MySQL Cluster en FlyEnv

El complemento MySQL Cluster permite ejecutar varias instancias locales de MySQL a la vez. Cada una tiene su propio puerto, Socket o canal con nombre de Windows, directorio de datos, configuración y registros. Puedes crear bases de datos independientes, un grupo de replicación GTID con origen y réplicas, o un grupo de Group Replication con un único primario.

Instala **MySQL Cluster** desde **[Settings → Plugin Market](/es/features/plugin-market)**. El módulo añade las pestañas **MySQL instances**, **Services** y **Versions** en macOS, Windows y Linux. Las versiones de la base de datos disponibles dependen de la plataforma y de las fuentes de instalación.

![Lista de MySQL Cluster con instancias independientes de distintas versiones y un grupo de origen y réplica en ejecución](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-instances.webp)

## Aprovecha las versiones de MySQL ya instaladas

La pestaña **Versions** utiliza las fuentes de instalación de MySQL disponibles en FlyEnv. Instala una versión desde esa pestaña o selecciona una instalación existente al crear una instancia. Varias instancias pueden compartir los binarios del servidor y mantener sus archivos de datos separados. Las instancias independientes también pueden usar versiones distintas de MySQL.

**Services** muestra las instalaciones del motor; las instancias se inician y detienen desde **MySQL instances**. Antes de desinstalar una versión a través del complemento, debes detener las instancias del clúster que la estén utilizando.

## Crea una instancia independiente

Pulsa **Create** y elige el modo **Standalone**. Introduce el **Cluster name**, selecciona la **MySQL version**, establece la **Root password** inicial y revisa los ajustes generados:

- **Instance name** y **TCP port** identifican la base de datos a la que te vas a conectar.
- **Socket** en macOS/Linux o **Named pipe** en Windows proporciona una dirección de conexión local propia para cada instancia.
- **Data directory** permite escribir la ruta de los datos o elegirla con el botón de carpeta.

El formulario comprueba los nombres, los conflictos de puertos, Socket o canales con nombre, y el solapamiento de directorios de datos. Las instancias independientes admiten instalaciones de MySQL 5.7 que incluyan `--initialize-insecure`, además de las versiones posteriores compatibles.

![Creación de una instancia MySQL independiente con versión, puerto, Socket y directorio de datos](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-standalone.webp)

Al crearla se inicializa una base de datos nueva y vacía. No se importan, clonan ni sobrescriben bases de datos existentes. Detén la instancia antes de editarla: el formulario no permite sustituir un directorio de datos ya inicializado ni cambiar la versión del motor seleccionada.

## Crea un grupo de replicación GTID

Selecciona **Source / replica**, elige una instalación de MySQL e indica cuántas réplicas necesitas. El complemento prepara un origen y entre **1 y 15 réplicas**, incluida la configuración GTID, la cuenta de replicación, las réplicas de solo lectura y los canales de replicación.

Todos los miembros deben usar **la misma instalación**, con **MySQL 8.0.13 o posterior**. Antes de crear el grupo, revisa el nombre, el puerto, el Socket o canal con nombre y el directorio de datos generado para cada miembro.

![Formulario de replicación MySQL con número de réplicas y ajustes de conexión de cada miembro](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-replication.webp)

La lista de instancias muestra los roles de origen y réplica, junto con el retraso de replicación. Las operaciones habituales de inicio, parada y reinicio comprueban el estado del proceso y no requieren credenciales de root. MySQL reanuda los canales guardados tras un reinicio. Si necesitas configurar o reparar la replicación de forma explícita, por ejemplo después de cambiar el puerto del origen, inicia todos los miembros y utiliza **Configure / recover replication** con las credenciales de root actuales de cada uno.

Estos grupos no promocionan automáticamente una réplica cuando se detiene el origen.

## Group Replication con un único primario

Selecciona **Group Replication** para crear **3, 5, 7 o 9 miembros locales**. Se necesita **MySQL 8.0.27 o posterior** y una instalación que incluya el complemento Group Replication. FlyEnv utiliza el modo de primario único y la comunicación XCom. Los puertos SQL y de comunicación GR deben ser únicos.

![Creación de un grupo MySQL Group Replication con número de nodos y puertos separados para SQL y comunicación GR](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-create-group-replication.webp)

MySQL se encarga de elegir el primario dentro de un grupo en ejecución. FlyEnv muestra los roles y ofrece **Configure / recover replication** para recuperar el grupo cuando algún miembro ha salido o todos se han detenido. Antes de la recuperación, inicia todos los miembros y proporciona sus credenciales de root. El complemento compara los historiales de transacciones y rechaza un arranque inicial inseguro si los historiales divergen o no se puede confirmar el estado de algún miembro. Un miembro que aún no se haya reincorporado al grupo permanece en modo de solo lectura después de reiniciarse.

Son grupos para desarrollo local: todos los nodos comparten una máquina y se ven afectados si esta falla. El complemento no añade MySQL Router ni una dirección de conexión única; debes conectar con el puerto del miembro adecuado. Tampoco crea NDB Cluster ni despliegues entre varias máquinas.

## Controla las instancias y gestiona sus datos

Usa los botones de cada fila para iniciar, detener o reiniciar una instancia, o los de la cabecera del grupo para actuar sobre todos sus miembros. El interruptor de la barra lateral inicia o detiene todas las instancias del complemento. La columna **State** indica si el proceso está en ejecución; el estado de la replicación se comprueba por separado.

El menú de acciones de cada instancia incluye:

- **Edit configuration**: los cambios se aplican en el siguiente reinicio. Los ajustes de identidad y replicación gestionados por el complemento están protegidos.
- **Error log** y **Slow query log**: registros de errores y consultas lentas de esa instancia.
- **Connection information**: información de conexión, además de una dirección Socket que puedes copiar con un clic.
- **Data management**: listas de bases de datos y usuarios, creación de bases de datos y concesión de permisos, cambios de contraseña, notas, directorio de copias de seguridad y exportación de las bases de datos seleccionadas.

Las operaciones de escritura deben realizarse en el origen que admita escrituras o en el primario actual. Se mantienen las restricciones de solo lectura de los demás miembros. Las credenciales de root se guardan por instancia; las contraseñas nuevas solo permanecen en la sesión, salvo que elijas expresamente recordarlas en el dispositivo.

### Abre DbGate en el navegador

Cuando hay una instancia en ejecución, el icono de DbGate junto al título de la vista de instancias abre el panel en el navegador. Necesitas un runtime de **Node.js** instalado y disponible, aunque su módulo esté oculto en la barra lateral. La primera vez se instala DbGate si hace falta; después se reutiliza la instalación compartida de FlyEnv.

![Panel de DbGate en el navegador conectado a una instancia MySQL local con una tabla abierta](https://oss.macphpstudy.com/image/features/plugin/mysql-cluster-dbgate.webp)

El panel se comparte con MongoDB y MariaDB Cluster. Al detener la última instancia de MySQL Cluster se cierra el panel global; otro módulo puede abrirlo de nuevo cuando lo necesite.

## Elimina un grupo y conserva sus archivos de datos

Al confirmar la eliminación de una instancia o grupo, el complemento detiene los miembros y retira sus registros de gestión. **Los archivos de las bases de datos se conservan**, al igual que la configuración y los logs que puedes revisar. Desinstalar un motor a través del complemento también conserva las bases de datos de sus instancias. Si una operación se interrumpe, revisa los archivos guardados y el resultado de cada miembro antes de intentarlo de nuevo.

Para instancias MariaDB y replicación GTID, utiliza **[MariaDB Cluster](/es/features/mariadb-cluster)**. Vuelve al **[catálogo de complementos](/es/features/plugin-market)** para gestionar la integración.
