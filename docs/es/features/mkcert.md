---
layout: doc
titleTemplate: false
title: 'Gestor de certificados MkCert para HTTPS local | FlyEnv'
description: 'Instala mkcert, confía en su CA local y genera certificados HTTPS de confianza para tus sitios de FlyEnv.'
head:
  - - meta
    - name: description
      content: 'Instala mkcert, confía en su CA local y genera certificados HTTPS de confianza para tus sitios de FlyEnv.'
  - - meta
    - property: og:title
      content: 'Gestor de certificados MkCert para HTTPS local | FlyEnv'
  - - meta
    - property: og:description
      content: 'Instala mkcert, confía en su CA local y genera certificados HTTPS de confianza para tus sitios de FlyEnv.'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/es/features/mkcert
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/es/features/mkcert
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# Certificados HTTPS locales con FlyEnv

mkcert es una pequeña herramienta de código abierto para crear certificados de desarrollo de confianza local: crea su propia CA raíz y, una vez que esa CA está instalada en el almacén de confianza de tu sistema, todos los certificados que firma son aceptados por tus navegadores sin advertencias. FlyEnv integra [mkcert](https://github.com/FiloSottile/mkcert) y lo convierte en un flujo de trabajo de apuntar y hacer clic: instala el binario, confía en su CA raíz una sola vez y luego genera certificados para cualquiera de tus [sitios locales](/es/features/local-sites-https) sin tocar la línea de comandos.

![Vista general del módulo MkCert de FlyEnv](https://oss.macphpstudy.com/image/features/mkcert-1.webp)

## Gestión de versiones

La pestaña **Version Manager** instala el binario de mkcert y lo mantiene actualizado.

- **Builds estáticos:** instala las versiones oficiales de mkcert desde la lista de versiones en línea de FlyEnv, descargadas directamente de los releases del proyecto en GitHub.
- **Homebrew:** en macOS y Linux, las versiones instaladas con `brew install mkcert` se detectan y se muestran junto a los builds gestionados.
- **Directorios personalizados:** apunta FlyEnv a cualquier carpeta que contenga tu propio binario de `mkcert` y también se escaneará.
- **Listo para ejecutar:** los binarios descargados se descomprimen en el propio directorio de FlyEnv, con el atributo de cuarentena de macOS eliminado y los permisos de ejecución establecidos automáticamente.

![Version Manager de MkCert con builds estáticos y de Homebrew](https://oss.macphpstudy.com/image/features/mkcert-2.webp)

## CA local y la pestaña Certificates

La pestaña **Certificates** es el corazón del módulo. Muestra la **CA Root Path** de mkcert (leída en directo desde `mkcert -CAROOT`; haz clic para revelar la carpeta en tu gestor de archivos) y ofrece la acción **Install CA**, que ejecuta `mkcert -install` en la terminal integrada de FlyEnv: registra la CA raíz local en el almacén de confianza de tu sistema para que todos los certificados que firma sean de confianza para tus navegadores.

- **Selector de binario:** elige qué build de mkcert instalado ejecuta los comandos; FlyEnv prefiere la versión presente en el PATH de su propio entorno.
- **Ejecución transparente:** tanto la instalación de la CA como la generación de certificados se ejecutan de forma visible en la terminal integrada, para que veas exactamente lo que hace mkcert.

## Generación de certificados por sitio

La pestaña Certificates enumera los sitios que has creado en FlyEnv, cada uno con las rutas de su certificado y su clave, y una acción **Generate**.

- **Dominios y alias cubiertos:** el certificado generado incluye el dominio del sitio y todos los alias que hayas configurado, mediante `mkcert -cert-file … -key-file …`.
- **Almacenamiento gestionado:** los certificados y las claves se escriben en el propio directorio `CA` de FlyEnv, una carpeta por sitio.
- **SSL activado por ti:** si el sitio no tenía HTTPS activado, FlyEnv lo habilita con el certificado recién generado en cuanto termina la generación, sin necesidad de configurarlo manualmente en [los ajustes de tu sitio](/es/guide/host). Los archivos de certificado son referenciados directamente por los vhosts del sitio en [Nginx](/es/features/nginx), [Apache](/es/features/apache) y [Caddy](/es/features/caddy).

![Generación de un certificado HTTPS para un sitio de FlyEnv](https://oss.macphpstudy.com/image/features/mkcert-3.webp)

<FeatureRelatedLinks locale="es" slug="mkcert" />

## Notas de compatibilidad

- mkcert es una herramienta de línea de comandos de ejecución puntual, no un servicio en segundo plano: no hay nada que iniciar o detener, y por diseño el módulo no tiene editor de archivos de configuración ni visor de logs.
- Los certificados generados son certificados de desarrollo de confianza local: están pensados para tu propia máquina, no para producción ni para otros dispositivos.
- Confiar en la CA raíz (`mkcert -install`) modifica el almacén de confianza de tu sistema y te pedirá tu contraseña del sistema, algo que mkcert gestiona en la terminal integrada.
- Las fuentes de instalación varían según la plataforma: builds estáticos en todas, Homebrew en macOS y Linux. Consulta la [página de descarga](/es/download) para ver las plataformas que admite el propio FlyEnv.
