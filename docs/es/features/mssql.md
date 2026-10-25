---
layout: doc
titleTemplate: false
title: 'Complemento SQL Server: bases de datos en Windows y Ubuntu | FlyEnv'
description: 'Instala y gestiona Microsoft SQL Server en FlyEnv sobre Windows x64 y Ubuntu, con controles de servicio nativos, ajustes por plataforma y registros de la base de datos.'
---

# SQL Server en FlyEnv

El complemento SQL Server incorpora el motor de bases de datos de Microsoft a FlyEnv mediante las pestañas **Service**, **Version Manager** y **Log**. Instala **SQL Server** desde **[Settings → Plugin Market](/es/features/plugin-market)** y abre su entrada en la barra lateral para instalar y gestionar el software de base de datos.

El complemento admite **Windows x64** y **Ubuntu 22.04 o 24.04 x64**. No ofrece un runtime para macOS ni ARM64. La instalación y el funcionamiento del servicio son diferentes en Windows y Ubuntu.

## Gestión de versiones

Abre **Version Manager**, actualiza la lista de versiones disponibles e instala una compatible con tu plataforma.

- **Windows:** el catálogo ofrece ediciones Express y Developer de determinadas versiones de SQL Server. FlyEnv descarga los medios oficiales de Microsoft y ejecuta SQL Server Setup para instalar una instancia con nombre.
- **Ubuntu:** FlyEnv consulta los repositorios de paquetes de Microsoft disponibles para tu versión de Ubuntu, verifica la suma de comprobación del paquete y extrae el motor en el directorio de runtimes que gestiona. Para que aparezca una versión, debe estar disponible su repositorio.

El progreso de instalación se muestra en el módulo. Al terminar, la instancia aparece en **Service**; que esté instalada no significa que la base de datos ya esté en ejecución.

![Lista de versiones de SQL Server en Windows con opciones de instalación Express y Developer](https://oss.macphpstudy.com/image/features/plugin/sql-server-versions.png)

## Servicios y configuración en Windows

FlyEnv utiliza los controles nativos de servicios de Windows para iniciar y detener la instancia seleccionada. Las instancias instaladas por el complemento se configuran con inicio **Manual**, de modo que la base de datos arranca cuando se solicita. La instalación y la preparación del servicio pueden requerir aprobación de administrador. Si se indica que debes reiniciar Windows, hazlo antes de iniciar la nueva instancia.

El menú de acciones del servicio incluye **Configuration Management**, que abre SQL Server Configuration Manager para la versión seleccionada. Utiliza esa herramienta nativa para configurar los servicios y la red de SQL Server. El formulario de contraseña `sa` y puerto de Ubuntu no se utiliza en la instalación de Windows.

En las instancias compatibles gestionadas por el complemento, **Repair permissions** puede restaurar el acceso que FlyEnv necesita para controlar el servicio y leer los registros. Si el visor indica que el acceso está denegado, ejecuta esa acción y actualiza el registro.

## Ajustes de Ubuntu y primer arranque

En Ubuntu, el motor extraído se ejecuta mediante **Bubblewrap**, que mantiene sus archivos de sistema modificables y los de la base de datos dentro del directorio de datos de FlyEnv. Instala el paquete `bubblewrap` y comprueba que el sistema permite espacios de nombres de usuario sin privilegios antes de iniciar el servicio.

Utiliza el botón de ajustes de **Service** para definir la contraseña inicial **sa Password** y el **Port**. El puerto predeterminado es **1433**. La contraseña debe tener al menos ocho caracteres e incluir tres de estos cuatro grupos: mayúsculas, minúsculas, dígitos y símbolos. Si aún no hay una contraseña inicial, FlyEnv la solicita durante la instalación.

La contraseña inicializa la cuenta integrada `sa` en el primer arranque. Modificar este ajuste más adelante no restablece la contraseña de una cuenta existente. Utiliza los controles de servicio para iniciar, detener o reiniciar el motor instalado.

## Registros y retirada del runtime

La pestaña **Log** sigue el registro de errores de la instancia seleccionada. En Ubuntu, si aún no se ha creado el registro del motor, muestra los registros de salida o errores del arranque. Estas vistas ayudan a detectar fallos en el primer inicio y problemas de configuración o permisos.

En Ubuntu, **Version Manager** puede eliminar un runtime extraído y gestionado por el complemento tras la confirmación y la parada del servicio; los archivos de la base de datos se almacenan por separado. En Windows, la desinstalación utiliza las herramientas de instalación de SQL Server.

Que el complemento esté disponible no garantiza que todas las versiones de SQL Server funcionen en todas las versiones del sistema operativo admitido. Consulta la lista de versiones y los diagnósticos de instalación de la aplicación para tu equipo. Vuelve al **[catálogo de complementos](/es/features/plugin-market)** para gestionar la integración.
