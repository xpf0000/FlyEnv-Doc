---
layout: doc
titleTemplate: false
title: 'Complemento NTP Server para simular la hora en pruebas locales | FlyEnv'
description: 'Ejecuta un servidor NTP local en FlyEnv para entregar la hora sincronizada, aplicar un desfase constante o congelar la hora en un instante para tus pruebas.'
---

# NTP Server en FlyEnv

Usa el complemento NTP Server cuando la aplicación o el dispositivo que estés probando consulte la hora mediante NTP. Adelanta el reloj siete días para comprobar cómo responde un dispositivo a una fecha de caducidad, o congela las respuestas en un instante concreto para reproducir un fallo que dependa de la fecha. La hora simulada se entrega en las respuestas NTP, mientras el equipo que ejecuta FlyEnv conserva su hora habitual del sistema.

## Instala el complemento e inicia el servicio

1. Instala **NTP Server** desde **[Configuraciones → Mercado de plugins](/es/features/plugin-market)** y abre el módulo en la barra lateral de FlyEnv.
2. Abre **Versión** e instala una versión del servidor. FlyEnv ofrece paquetes x64 y ARM64 para Windows, macOS y Linux, y verifica cada descarga con su suma de comprobación SHA-256.
3. Abre **Configuración** para elegir el modo de reloj y ajustar la dirección y el puerto de escucha. Guarda los cambios, selecciona la versión instalada e iníciala desde **Servicio**. Si guardas los cambios mientras el servicio está en ejecución, se reinicia para aplicar la configuración.

![NTP Server aparece como instalado en la pestaña de complementos oficiales del mercado de FlyEnv](https://oss.macphpstudy.com/image/features/plugin/ntp-server-plugin-market.webp)

En **Servicio** puedes consultar el estado del servidor, detenerlo o reiniciarlo. Las actualizaciones del complemento se gestionan en el mercado de plugins.

## Elige la hora que reciben los clientes

En **Configuración**, cambia a **Ajustes Comunes** y selecciona el modo de reloj (**Clock mode**). La vista **Archivo Original** permite editar directamente la misma configuración JSON.

- **Real time** entrega la hora actual. La sincronización con servidores de referencia (**Upstream synchronization**) está activada por defecto. En **Upstream servers** puedes indicar nombres de host o entradas `host:puerto` separadas por comas. Si no se ha sincronizado con una fuente de referencia, el servicio puede indicar que su reloj está sin sincronizar y algunos clientes ignorarán la respuesta.
- **Offset** entrega la hora de un reloj que sigue avanzando con un desfase constante respecto al reloj del equipo. Introduce un número entero de segundos, positivo o negativo, o elige uno de los valores predefinidos **+7 days**, **−2 hours** o **+365 days**.
- **Frozen** devuelve el mismo instante en cada solicitud. Elige una fecha y hora en tu zona horaria local. FlyEnv guarda ese instante en UTC.

![Los ajustes comunes de NTP Server muestran el modo Offset, los desfases predefinidos, la dirección de escucha y el puerto UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-configuration.webp)

**Reset to real time** restablece el modo de hora actual en el editor. Guarda la configuración para aplicar el cambio. Algunos clientes NTP del sistema rechazan saltos de tiempo grandes o marcas de tiempo repetidas. Un cliente de pruebas que permita ver la marca de tiempo de la respuesta NTP resulta práctico para comprobar ambos modos de simulación.

## Conecta un cliente local o de la red local

Por defecto, el servidor escucha en `0.0.0.0` en el puerto UDP `12300`. Cuando esté en ejecución, haz clic en el icono verde de red en **Servicio** para abrir **How to use NTP Server** y consultar la dirección y el puerto configurados.

![La pestaña Servicio de NTP Server muestra una versión en ejecución y el botón verde para consultar los datos de conexión](https://oss.macphpstudy.com/image/features/plugin/ntp-server-service.webp)

- **En el equipo que ejecuta FlyEnv**, usa `127.0.0.1` con el puerto UDP `12300` si conservas la configuración predeterminada. Configura **Listen IP restriction** en `127.0.0.1` si el servidor solo debe aceptar solicitudes locales.
- **Desde otro dispositivo de la red local**, haz que el servidor escuche en la IP local del equipo con FlyEnv o conserva la dirección predeterminada que escucha en todas las interfaces IPv4. En el cliente, introduce la IP local del equipo y el puerto UDP configurado.
- **Si el cliente requiere el puerto NTP estándar**, establece **UDP port** en `123` y comprueba que esté disponible en la interfaz seleccionada.

## Consulta las solicitudes y los errores de inicio

En **Configuración**, usa **Log client requests** para decidir si el servicio registra las solicitudes y la hora que devuelve. Abre **Registro → Service log** para comprobar si el cliente de pruebas se comunicó con el servidor y qué marca de tiempo recibió. Si el servicio no arranca, abre **Registro → Startup errors** para ver detalles, como que el puerto ya esté en uso.

![El registro del servicio NTP Server muestra el arranque, el modo de reloj y la dirección de escucha UDP](https://oss.macphpstudy.com/image/features/plugin/ntp-server-log.webp)

FlyEnv guarda `config.json`, `ntp.log` y `ntp-start-error.log` en la carpeta `server/ntp-server` de su directorio de datos. La configuración se conserva al reinstalar el ejecutable del servidor.

Consulta la [documentación del proyecto NTP Server](https://github.com/xpf0000/ntp-server#local-test-clock-and-flyenv-configuration) para ver los ajustes de reloj en la configuración JSON del servidor.
