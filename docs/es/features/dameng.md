---
layout: doc
titleTemplate: false
title: 'Complemento Dameng DM8: instalación e inicialización | FlyEnv'
description: 'Instala Dameng DM8, inicializa una base de datos y gestiona su servicio, configuración y registros en FlyEnv sobre Windows x64 y Ubuntu 22.04.'
---

# Dameng DM8 en FlyEnv

El complemento Dameng DM8 integra la instalación, la inicialización y los controles nativos del servicio de base de datos en FlyEnv. El módulo incluye las pestañas **Service**, **Version Manager**, **Config File** y **Log**, además de información sobre la versión y la licencia de la instancia.

Instala **Dameng DM8** desde **[Settings → Plugin Market](/es/features/plugin-market)**. El complemento admite **Windows x64 nativo** y **Ubuntu 22.04 x64**. Esta versión no admite macOS, ARM64 ni otras versiones de Linux.

## Elegir el directorio de instalación

Abre **Version Manager**, pulsa **Install** y selecciona o introduce el directorio definitivo del programa. Todos los nombres de carpeta de la ruta, incluidos los directorios superiores, deben contener únicamente **letras latinas sin acentos, dígitos y guiones bajos**. El instalador no admite espacios, caracteres chinos, puntos ni guiones.

El directorio de destino debe estar vacío. FlyEnv comprueba la ubicación y el espacio disponible antes de descargar el paquete oficial. La descarga empieza al confirmar el diálogo; si lo cancelas, no se inicia. Tras la instalación, FlyEnv añade automáticamente esa ruta exacta a **Custom version directories** para que la base de datos aparezca en la lista de servicios.

Los datos de la base de datos se guardan aparte del programa, dentro del directorio de datos de FlyEnv. Las restricciones de la ruta de instalación del programa no obligan a cambiar el nombre del directorio de datos de FlyEnv.

![Version Manager de Dameng DM8 con una versión de Windows x64 instalada](https://oss.macphpstudy.com/image/features/plugin/dameng-versions.png)

## Inicializar la base de datos

Al iniciar una instalación que aún no se ha inicializado, se abre el diálogo de inicialización. También puedes elegir **Initialize database** en el menú de acciones del servicio. Cancelar la inicialización no inicia la base de datos.

El diálogo incluye:

- **Contraseñas de SYSDBA y SYSAUDITOR:** credenciales independientes y obligatorias para las cuentas de administración y auditoría, cada una con un botón **Generate**.
- **Puerto:** el puerto de escucha de la base de datos.
- **Tamaño de página, tamaño de extent, juego de caracteres y distinción entre mayúsculas y minúsculas:** opciones de creación que no pueden cambiarse reinicializando los datos existentes.
- **Recursos de desarrollo:** tamaños del búfer y de los archivos redo, junto con una estimación del espacio inicial necesario.

Revisa estos valores antes de confirmar. FlyEnv inicializa la base de datos una sola vez y continúa el arranque cuando termina correctamente; no sobrescribe una base de datos existente para aplicar nuevas opciones de creación.

## Control del servicio y credenciales de sesión

Utiliza **Service** para iniciar, detener o reiniciar la instalación gestionada por el complemento. En Windows se utiliza el servicio nativo de DM8; en Ubuntu, la base de datos se ejecuta con el usuario actual.

![Pestaña Service de Dameng DM8 con una instancia de Windows en ejecución, su ruta y los controles](https://oss.macphpstudy.com/image/features/plugin/dameng-service.png)

Las contraseñas solo se conservan durante la sesión actual de FlyEnv. Después de reiniciar la aplicación, introduce la **contraseña actual de SYSDBA** cuando se solicite o abre **Session credentials / initialization defaults** desde la barra de herramientas del servicio. La contraseña que introduzcas aquí se utiliza para comprobar el arranque y realizar consultas; no modifica la cuenta de la base de datos.

![Diálogo de credenciales de sesión y valores predeterminados de inicialización de Dameng DM8](https://oss.macphpstudy.com/image/features/plugin/dameng-session-settings.png)

La acción **Version / license information** consulta la versión y la fecha de caducidad de la licencia en la base de datos activa. Inicia la instancia y proporciona la contraseña actual de SYSDBA antes de solicitar esa información.

## Configuración, registros y desinstalación

La pestaña **Config File** edita el archivo `dm.ini` de la instancia inicializada. **Log** permite consultar los diagnósticos de la base de datos y del arranque. Si una instalación o inicialización informa de un resultado incompleto, revisa sus archivos y registros antes de repetirla en el mismo directorio.

![Editor dm.ini de Dameng DM8 con la configuración de la instancia y sus rutas de datos](https://oss.macphpstudy.com/image/features/plugin/dameng-configuration.png)

Eliminar una versión instalada desde **Version Manager** ejecuta el desinstalador oficial después de detener la instancia. Los archivos de la base de datos se conservan. Deshabilitar o desinstalar el complemento de FlyEnv tampoco elimina los programas de la base de datos ni sus datos.

## Requisitos de plataforma

En Windows, la instalación y el registro del servicio requieren **aprobación de UAC**. En Ubuntu se necesita una sesión de escritorio con **udisks2**, `udisksctl` y `findmnt` para montar los medios oficiales; la instalación sin entorno de escritorio no está implementada. El complemento actual gestiona una sola instalación propia y no garantiza la coexistencia con instalaciones externas de DM8.

Vuelve al **[catálogo de complementos](/es/features/plugin-market)** para ver otros módulos opcionales, o compara la integración de **[SQL Server](/es/features/mssql)** de FlyEnv.
