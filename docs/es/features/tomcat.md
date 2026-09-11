---
layout: doc
titleTemplate: false
title: 'Gestor de versiones de Tomcat y alojamiento de sitios Java | FlyEnv'
description: 'Ejecuta versiones de Tomcat con CATALINA_BASE por versión, edita server.xml y web.xml, y aloja sitios Java directamente.'
head:
  - - meta
    - name: description
      content: 'Ejecuta versiones de Tomcat con CATALINA_BASE por versión, edita server.xml y web.xml, y aloja sitios Java directamente.'
  - - meta
    - property: og:title
      content: 'Gestor de versiones de Tomcat y alojamiento de sitios Java | FlyEnv'
  - - meta
    - property: og:description
      content: 'Ejecuta versiones de Tomcat con CATALINA_BASE por versión, edita server.xml y web.xml, y aloja sitios Java directamente.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/tomcat
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/tomcat
  - - link
    - rel: alternate
      hreflang: en
      href: https://flyenv.com/features/tomcat
  - - link
    - rel: alternate
      hreflang: zh-CN
      href: https://flyenv.com/zh/features/tomcat
  - - link
    - rel: alternate
      hreflang: id-ID
      href: https://flyenv.com/id/features/tomcat
  - - link
    - rel: alternate
      hreflang: es-ES
      href: https://flyenv.com/es/features/tomcat
  - - link
    - rel: alternate
      hreflang: x-default
      href: https://flyenv.com/features/tomcat
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Tomcat en FlyEnv

Apache Tomcat es un contenedor de servlets Java de código abierto: ejecuta aplicaciones web Java empaquetadas como archivos WAR, y es lo que un proyecto necesita cuando se distribuye como una aplicación web basada en servlets en lugar de un jar autocontenido. FlyEnv ejecuta Apache Tomcat como un servicio gestionado: instala varias versiones de Tomcat en paralelo, asigna a cada una su propio CATALINA_BASE, edita `server.xml` y `web.xml` desde los editores integrados y vigila `catalina.out` sin abrir una terminal. Como Tomcat necesita un JDK, FlyEnv toma JAVA_HOME del entorno del módulo Java. Los sitios locales de tipo Tomcat se escriben directamente en `server.xml` como entradas Host, de modo que las aplicaciones web Java las sirve el propio Tomcat en lugar de pasar por otro servidor web.

![Vista general del módulo Tomcat de FlyEnv](https://oss.macphpstudy.com/image/features/tomcat-1.webp)

## Gestión de versiones de Tomcat

Instala varias versiones de Tomcat en paralelo desde la pestaña **Version Manager** (Gestor de versiones) y cambia entre ellas en cualquier momento.

- **Fuentes de instalación:** builds estáticos en macOS, Linux y Windows, además de Homebrew en macOS y Linux (FlyEnv busca las fórmulas `tomcat` y `tomcat@x`). MacPorts y SDKMAN no se utilizan para Tomcat.
- **Directorio base por versión:** cada versión obtiene su propio CATALINA_BASE (por defecto, una carpeta por versión mayor dentro del directorio de datos de FlyEnv), de modo que varias versiones de Tomcat mantienen configuraciones independientes.

![Version Manager de Tomcat con las fuentes de instalación Static y Homebrew](https://oss.macphpstudy.com/image/features/tomcat-2.webp)

## Gestión del servicio

Inicia, detén y reinicia cada versión de Tomcat desde la pestaña **Service** (Servicio), con la gestión del entorno por versión integrada.

- **CATALINA_BASE por versión:** la pestaña Service muestra una fila de encabezado adicional con la ruta del CATALINA_BASE de la versión, que puedes modificar; la elección se guarda por versión. En el primer inicio, FlyEnv crea el directorio base copiando los archivos `conf` de la instalación.
- **JAVA_HOME desde el módulo Java:** Tomcat requiere Java, y FlyEnv suministra JAVA_HOME a través del entorno que sincroniza desde el [módulo Java](/es/features/java), de modo que el Tomcat en ejecución usa el JDK que gestionas en FlyEnv. La [guía del entorno de desarrollo Java](/es/guide/set-up-java-development-environment) explica cómo instalar y cambiar de JDK.
- **Arranque nativo de cada plataforma:** en macOS, Tomcat se ejecuta en primer plano mediante `catalina.sh run` con CATALINA_BASE, CATALINA_PID y JAVA_HOME definidos, y la salida de consola se captura en `logs/catalina.out`; en Windows se inicia a través de `startup.bat` y FlyEnv detecta el proceso de la JVM; en Linux se ejecuta a través del helper de root.

![Pestaña Service de Tomcat con la fila editable de CATALINA_BASE](https://oss.macphpstudy.com/image/features/tomcat-3.webp)

## Configuración

Cada versión de Tomcat guarda su configuración en su CATALINA_BASE, editable desde FlyEnv sin tener que rebuscar entre directorios.

- **Pestañas `server.xml` y `web.xml`:** el módulo tiene pestañas dedicadas con editores de texto plano para los dos archivos que cambias con más frecuencia.
- **Más archivos de configuración:** el soporte de configuración subyacente también cubre `context.xml`, `tomcat-users.xml`, `logging.properties`, `catalina.properties` y `catalina.policy`.

![Editando server.xml para una versión de Tomcat](https://oss.macphpstudy.com/image/features/tomcat-4.webp)

## Integración con sitios

Los sitios que creas en FlyEnv con el tipo **Tomcat** no son vhosts servidos mediante proxy inverso: se convierten en entradas `<Host>` reales de Tomcat reconciliadas directamente en el `server.xml` de la versión. La creación del sitio funciona igual que para cualquier otro tipo; consulta la [guía de Host](/es/guide/host).

- **Reconciliación con rollback:** al guardar un sitio, FlyEnv reescribe `server.xml` con la entrada Host del sitio, guardando una instantánea para poder revertir el archivo si la actualización falla.
- **SSL por sitio:** los sitios Tomcat admiten HTTPS con certificado y clave, incluido el certificado automático de FlyEnv; al eliminar un sitio también se limpia su certificado generado automáticamente.
- **Fuera del flujo de los demás servidores web:** los sitios Tomcat quedan excluidos de la generación de vhosts de Nginx, Apache, Caddy y FrankenPHP: los sirve el propio Tomcat. Para sitios en los demás servidores, consulta [Sitios locales, dominios personalizados y HTTPS](/es/features/local-sites-https), y para un recorrido completo por un stack web Java, la [solución Spring Boot](/es/solutions/spring-boot).

![Un sitio de tipo Tomcat reconciliado en server.xml como entrada Host](https://oss.macphpstudy.com/image/features/tomcat-5.webp)

## Logs

La pestaña **Log** abre el log de consola de Tomcat con búsqueda y actualización integradas. En macOS y Linux es `logs/catalina.out` dentro del CATALINA_BASE de la versión; en Windows, FlyEnv lee los archivos `catalina.<yyyy-MM-dd>.log` con fecha.

<FeatureRelatedLinks locale="es" slug="tomcat" />

## Notas de compatibilidad

FlyEnv gestiona el runtime local de Tomcat, su configuración por versión y las entradas Host de los sitios; no incluye la aplicación web Tomcat Manager ni garantiza que cada versión de Tomcat esté disponible desde cada fuente de instalación en todos los sistemas operativos. Verifica el JDK requerido por tu versión de Tomcat contra las versiones de Java instaladas, y toma la [página de descargas](/es/download) y las notas de la versión actual como referencia de los paquetes soportados.
