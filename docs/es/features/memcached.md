---
layout: doc
titleTemplate: false
title: 'Gestor del servicio local de Memcached | FlyEnv'
description: 'Instala y ejecuta versiones de Memcached desde Homebrew, MacPorts o builds estáticas con un solo clic.'
head:
  - - meta
    - name: description
      content: 'Instala y ejecuta versiones de Memcached desde Homebrew, MacPorts o builds estáticas con un solo clic.'
  - - meta
    - property: og:title
      content: 'Gestor del servicio local de Memcached | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala y ejecuta versiones de Memcached desde Homebrew, MacPorts o builds estáticas con un solo clic.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/memcached
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/memcached
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Memcached en FlyEnv

Memcached es una caché clave-valor en memoria de código abierto, utilizada normalmente para acelerar aplicaciones web manteniendo resultados de consultas a la base de datos, fragmentos renderizados o datos de sesión en RAM —un hermano más sencillo de [Redis](/es/features/redis), dedicado solo a caché. FlyEnv lo ejecuta como un servicio local gestionado: instala una o más versiones desde el Version Manager, inicia y detén el daemon desde la pestaña Service, y accede a la caché en el puerto por defecto 11211 sin tocar un gestor de paquetes ni un script de arranque a mano.

![Vista general del módulo Memcached de FlyEnv](https://oss.macphpstudy.com/image/features/memcached-1.webp)

## Gestión de versiones

Instala Memcached desde **Memcached → Version Manager**. Las fuentes ofrecidas dependen de tu plataforma:

- **macOS:** la fórmula `memcached` de Homebrew y builds de MacPorts.
- **Linux:** la fórmula de Homebrew.
- **Windows:** un zip estático de los releases de GitHub de `nono303/memcached`; FlyEnv extrae por ti la build `libevent-2.1/x64` o `cygwin/x64` correspondiente.
- **Versiones personalizadas:** añade cualquier directorio que contenga tu propia instalación de Memcached; FlyEnv lo escanea en busca del binario `memcached` (o `memcached.exe`) y lo lista junto a las versiones gestionadas.

![Version Manager de Memcached con las fuentes de instalación](https://oss.macphpstudy.com/image/features/memcached-2.webp)

## Gestión del servicio

La pestaña Service inicia el binario real de `memcached` de la versión seleccionada en primer plano con un archivo pid gestionado por FlyEnv (`memcached -P .../memcached.pid -vv`), de modo que el estado del ciclo de vida en la app siempre refleja el proceso real. No se pasa ningún argumento de puerto, lo que significa que el daemon escucha en el puerto por defecto de Memcached, el 11211.

- **Inicio y parada con un clic:** controla el servicio desde la pestaña Service, el interruptor de la barra lateral o la bandeja del sistema, como cualquier otro módulo de servicio de FlyEnv.
- **Salida detallada durante la ejecución:** el daemon se ejecuta con `-vv`, de modo que los clientes que se conectan al puerto 11211 obtienen un servidor memcached estándar mientras la actividad va a los flujos de salida propios del proceso.
- **Cambio de versión:** elige cualquier versión instalada como la que ejecuta el servicio; cada versión mantiene su propia instalación intacta.

Con el daemon en ejecución en el puerto 11211, apunta tus aplicaciones hacia él como caché de objetos: stacks de PHP como [WordPress](/es/solutions/wordpress) (mediante un drop-in de object-cache) y [Magento](/es/solutions/magento) soportan Memcached como backend de caché o de sesiones, lo que hace que una instancia local de Memcached sea útil para reproducir el comportamiento de caché de producción.

Combina el servicio en ejecución con las apps locales de las [demos](/es/demos), o consigue FlyEnv para tu plataforma en la [página de Descargas](/es/download).

<FeatureRelatedLinks locale="es" slug="memcached" />

## Notas de compatibilidad

- El módulo Memcached **no tiene edición de archivo de configuración**: Memcached se configura íntegramente mediante argumentos de línea de comandos, y FlyEnv lo inicia con su conjunto de argumentos integrado en lugar de un archivo de configuración generado.
- El módulo **no tiene pestaña de visor de logs**: la salida va a stdout/stderr a través de `-vv` y no se escribe ningún archivo de log, por lo que no hay nada que seguir desde dentro de la app.
- El servicio siempre escucha en el **puerto por defecto 11211**; FlyEnv no pasa ninguna sobreescritura de puerto.
- No hay panel de administración ni integración con proyectos o sitios para este módulo —solo gestiona el daemon. Las versiones disponibles dependen de las fuentes de instalación de tu plataforma, como se indica en la [página de Descargas](/es/download).
