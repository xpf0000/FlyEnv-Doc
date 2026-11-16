---
layout: doc
titleTemplate: false
title: 'Complemento SamWaf: firewall de aplicaciones web para sitios locales | FlyEnv'
description: 'Instala y ejecuta SamWaf en FlyEnv, gestiona sus versiones, edita la configuración YAML, consulta los registros y abre su panel web para proteger sitios locales.'
---

# SamWaf en FlyEnv

SamWaf añade un firewall de aplicaciones web a tu espacio de desarrollo local. Actúa como proxy inverso delante de un sitio web, inspecciona las peticiones entrantes y aplica las reglas de protección que configures. Utilízalo junto con tu servidor web local para probar la protección de sitios e inspeccionar el tráfico antes de aplicar esas mismas ideas en un entorno desplegado.

El complemento de FlyEnv reúne la gestión de versiones de SamWaf, los controles del servicio, el archivo de configuración y los registros de ejecución en un único módulo. El registro de sitios, las reglas de protección y el análisis de peticiones se realizan en el propio panel de administración web de SamWaf.

Instala **SamWaf** desde **[Configuración → Catálogo de complementos](/es/features/plugin-market)** y abre **SamWaf** en la barra lateral. El complemento es compatible con macOS, Windows y Linux; las descargas de runtime disponibles dependen de tu sistema operativo y arquitectura.

## Instala un runtime e inicia el firewall

Abre **Gestor de versiones** para descargar una versión de SamWaf para tu equipo. FlyEnv muestra los paquetes de versiones estables del proyecto original que corresponden a tu sistema, con GitHub como fuente principal y Gitee como alternativa.

Tras la instalación, vuelve a **Servicio** para seleccionar la versión instalada e iniciarla. Desde esa misma vista puedes detener o reiniciar el firewall y comprobar su estado. El complemento también incorpora SamWaf a los controles de servicios del icono de FlyEnv en la bandeja del sistema.

Cada versión instalada tiene su propia configuración, datos y registros dentro de su directorio de instalación. Tenlos en cuenta al planificar un cambio de versión: instalar otro binario no migra automáticamente la configuración de tus sitios.

![Pestaña Servicio de SamWaf en FlyEnv con una versión instalada, su estado de ejecución y los controles del servicio](https://oss.macphpstudy.com/image/features/plugin/samwaf-service.webp)

## Abre el panel de administración web

Cuando SamWaf esté en ejecución, pulsa el icono del panel web en **Servicio**. FlyEnv lee el puerto de administración de la configuración de la versión seleccionada y abre el panel en tu navegador. La dirección predeterminada es `http://127.0.0.1:26666`.

En una instalación nueva, SamWaf genera una contraseña inicial aleatoria para la cuenta `admin`. FlyEnv la muestra cuando abres el panel por primera vez. Inicia sesión y cambia la contraseña de inmediato. Las credenciales iniciales también se guardan en `data/initial_password.txt`, dentro del directorio de instalación de esa versión.

La configuración inicial de FlyEnv restringe el acceso de administración a las direcciones de bucle local. El puerto de administración es independiente de los puertos HTTP o HTTPS que elijas para los sitios protegidos.

## Coloca SamWaf delante de un sitio local

En el panel web de SamWaf, añade el sitio que quieras proteger y configura como destino upstream la dirección actual de tu aplicación. Las peticiones entrantes deben llegar primero al punto de escucha de SamWaf; crear un sitio en FlyEnv no lo enruta automáticamente a través del firewall.

Por ejemplo, un nombre de host local protegido puede enviar las peticiones a SamWaf, que reenvía el tráfico permitido a un backend servido por **[Nginx](/es/features/nginx)**, **[Apache](/es/features/apache)** o **[Caddy](/es/features/caddy)** en otro puerto. Mantén los puntos de escucha del firewall y del backend en direcciones o puertos distintos para evitar conflictos y bucles de proxy. El módulo **[Sitios locales y HTTPS](/es/features/local-sites-https)** de FlyEnv gestiona el dominio y los ajustes del servidor web del sitio backend.

Utiliza el panel de SamWaf para gestionar las reglas de protección del sitio y revisar las peticiones. SamWaf incluye detección de inyección SQL y XSS, listas de direcciones IP permitidas y bloqueadas, reglas personalizadas y registros de protección. Consulta la [documentación de SamWaf](https://doc.samwaf.com/en/) para conocer sus controles de sitios y reglas.

## Edita la configuración y consulta los registros

La pestaña **Archivo de configuración** abre el archivo `conf/config.yml` de la versión seleccionada en el editor YAML de FlyEnv. Este archivo incluye el puerto de administración (`local_port`), la lista de IP permitidas para la administración y los ajustes de base de datos, caché y registro. FlyEnv crea una configuración inicial cuando es necesario y conserva intacto cualquier archivo existente.

La configuración inicial utiliza SQLite y una caché en memoria, por lo que puedes empezar sin un servicio de base de datos o caché adicional. Los ajustes específicos de cada sitio permanecen en el panel de SamWaf.

![Editor de configuración YAML de SamWaf en FlyEnv con los ajustes de base de datos, caché, puerto de administración y seguridad](https://oss.macphpstudy.com/image/features/plugin/samwaf-configuration.webp)

Abre **Registro** para consultar el registro de ejecución. Si el registro principal aún no se ha creado, la vista muestra la salida o los errores de inicio. Utiliza estos registros cuando una versión no se inicie o no puedas acceder al panel; para los registros de peticiones y protección de los sitios, utiliza el panel web de SamWaf.

Vuelve al **[catálogo de complementos](/es/features/plugin-market)** para actualizar la integración con FlyEnv o consulta el **[resumen de funcionalidades](/es/features#plugins)** para descubrir otros módulos opcionales.
