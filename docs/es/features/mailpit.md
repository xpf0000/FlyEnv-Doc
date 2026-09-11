---
layout: doc
titleTemplate: false
title: 'Pruebas de correo electrónico local con Mailpit en FlyEnv'
description: 'Instala, configura y gestiona Mailpit en FlyEnv para probar el correo electrónico localmente.'
head:
  - - meta
    - name: description
      content: 'Instala, configura y gestiona Mailpit en FlyEnv para probar el correo electrónico localmente.'
  - - meta
    - property: og:title
      content: 'Pruebas de correo electrónico local con Mailpit en FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala, configura y gestiona Mailpit en FlyEnv para probar el correo electrónico localmente.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mailpit
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mailpit
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Pruebas de correo electrónico local con FlyEnv

Mailpit es una herramienta de pruebas SMTP de código abierto para desarrolladores: actúa como un servidor de correo falso que captura los correos que envía tu aplicación y los muestra en una bandeja de entrada web, de modo que los mensajes de prueba nunca llegan a destinatarios reales. FlyEnv lo ejecuta como un servicio local gestionado: instala una versión desde el Gestor de versiones, inicia el binario con un solo interruptor, y cada mensaje que tu aplicación envíe por SMTP llegará a la bandeja de entrada web de Mailpit en lugar de llegar a destinatarios reales. El listener SMTP usa el puerto 1025 por defecto, la interfaz web el puerto 8025, y tanto la configuración como el registro se pueden editar y consultar directamente dentro de la aplicación.

![Vista general del módulo Mailpit de FlyEnv](https://oss.macphpstudy.com/image/features/mailpit-1.webp)

## Gestión de versiones

Instala y mantén varias versiones de Mailpit en paralelo desde **Mailpit → Gestor de versiones**.

- **Fuentes de instalación por plataforma:** builds estáticos y Homebrew (`mailpit`) en macOS y Linux, y una lista en línea estática de los archivos de lanzamiento oficiales de `axllent/mailpit` en Windows.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de Mailpit; FlyEnv lo escaneará y mostrará esos builds junto a las versiones gestionadas.
- **Gestión de la instalación:** en macOS, FlyEnv elimina el atributo de cuarentena durante la instalación para que el binario pueda ejecutarse, y cada versión se identifica comprobándola con `mailpit version`.

![Gestor de versiones de Mailpit con las fuentes de instalación](https://oss.macphpstudy.com/image/features/mailpit-2.webp)

## Servicio y configuración

La pestaña **Servicio** inicia y detiene la versión de Mailpit seleccionada. FlyEnv ejecuta el binario `mailpit` directamente y le pasa cada línea `MP_*` de `mailpit.conf` como variables de entorno, de modo que el archivo que editas es exactamente lo que recibe el proceso. La plantilla por defecto escucha en `0.0.0.0:1025` para SMTP, `0.0.0.0:8025` para la interfaz web y `0.0.0.0:1110` para POP3, y conserva un máximo de 500 mensajes (`MP_MAX_MESSAGES`).

La configuración se encuentra en la pestaña **Archivo de configuración**, que ofrece dos vistas del mismo `mailpit.conf`:

- **Formulario visual:** activa y ajusta unos 45 ajustes `MP_*` sin editar el archivo a mano: límites de base de datos y almacenamiento, bind/TLS/autenticación de la interfaz web, SpamAssassin, bind/TLS/autenticación/relay de SMTP, POP3 y etiquetas de mensajes.
- **Editor sin procesar:** cambia a la vista de código fuente completa para cualquier ajuste que el formulario no cubra, con `mailpit.conf.default` junto a él como plantilla de referencia.

La configuración se comparte entre todas las versiones de Mailpit instaladas, por lo que al cambiar de versión se mantienen tus puertos y límites sin cambios.

![Archivo de configuración de Mailpit con el formulario visual de ajustes MP_*](https://oss.macphpstudy.com/image/features/mailpit-3.webp)

## Interfaz web

Mientras el servicio está en ejecución, la pestaña Servicio muestra un botón para abrir en el navegador que te lleva directamente a la interfaz web de Mailpit. FlyEnv lee el puerto de `MP_UI_BIND_ADDR` en tu configuración y abre `http://127.0.0.1:<port>/` — 8025 por defecto. Allí puedes inspeccionar cada mensaje capturado, sus cabeceras, su representación en HTML y texto plano, y sus archivos adjuntos.

Para capturar el correo, apunta los ajustes SMTP de tu aplicación a `127.0.0.1:1025`. La [guía de pruebas de correo electrónico local](/es/guide/local-email-testing-mailpit) explica la configuración completa, y la [solución para Laravel](/es/solutions/laravel) muestra cómo un proyecto de framework típico conecta su mailer a Mailpit; los sitios de [WordPress](/es/solutions/wordpress) pueden enrutar su correo de notificaciones a través de un plugin SMTP de la misma manera.

![Abrir la interfaz web de Mailpit desde la pestaña Servicio](https://oss.macphpstudy.com/image/features/mailpit-4.webp)

## Registros

La pestaña **Registro** abre el registro de Mailpit directamente dentro de FlyEnv. La ruta se resuelve a partir del ajuste `MP_LOG_FILE` de tu configuración — por defecto `mailpit.log` en el directorio de Mailpit de FlyEnv — de modo que el visor siempre sigue el archivo en el que el servicio en ejecución escribe realmente. Es el primer lugar donde mirar cuando el servicio no se inicia o los mensajes no llegan como se esperaba.

![Visor de registros de Mailpit](https://oss.macphpstudy.com/image/features/mailpit-5.webp)

<FeatureRelatedLinks locale="es" slug="mailpit" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Mailpit, su configuración `mailpit.conf` y su archivo de registro; no conecta Mailpit a tus proyectos ni a los ajustes de [PHP](/es/features/php) automáticamente: apunta el host y el puerto SMTP de cada aplicación a `127.0.0.1:1025` tú mismo. Las versiones ofrecidas en el Gestor de versiones dependen de tu plataforma (builds estáticos y Homebrew en macOS y Linux, archivos de lanzamiento estáticos en Windows) y de lo que esas fuentes publiquen. Mailpit usa una única configuración global compartida por todas las versiones instaladas, en lugar de archivos de configuración por versión. Toma la lista de versiones dentro de la aplicación y la [página de descarga](/es/download) como la fuente de referencia sobre lo que se puede instalar en tu máquina.
