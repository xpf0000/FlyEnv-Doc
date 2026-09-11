---
title: 'Gestiona contenedores Podman en FlyEnv'
head:
  - - meta
    - name: description
      content: 'Gestiona máquinas, imágenes, contenedores y proyectos Compose de Podman en FlyEnv manteniendo el uso de contenedores separado de los servicios locales nativos.'
---

# Gestión de contenedores Podman en FlyEnv: alternativa a Docker sin root

¿Docker Desktop consume demasiada RAM? ¿Necesitas ejecutar versiones antiguas de PHP 5.5 o MySQL 5.6 que ya no se instalan de forma nativa? ¿Quieres aislamiento con contenedores sin dar acceso root a tu sistema?

**Podman es la respuesta.** Y FlyEnv lo hace tan fácil como pulsar botones.

A diferencia de Docker, Podman ejecuta contenedores en modo rootless por defecto: sin daemon ejecutándose como root, sin riesgos de seguridad por escapes de contenedores. Combinado con la interfaz visual de FlyEnv, obtienes todas las ventajas de la contenedorización sin la complejidad.

## ¿Por qué usar Podman en lugar de Docker?

### Problemas de Docker Desktop

| Problema | Docker Desktop | Podman + FlyEnv |
|-------|---------------|-----------------|
| **Uso de recursos** | 2-4 GB de RAM en reposo | 200-500 MB |
| **Privilegios root** | El daemon se ejecuta como root | Rootless por defecto |
| **Suscripción** | 5-21 $/mes para empresas | Completamente gratis |
| **Dependencia del proveedor** | Ecosistema solo Docker | Compatible con OCI (interoperable) |
| **Complejidad** | Muchos componentes | Un solo binario |

### Cuándo usar contenedores en FlyEnv

**1. Soporte de software antiguo**

¿Necesitas PHP 5.5 o MySQL 5.6 para un proyecto viejo? Los gestores de paquetes modernos (Homebrew, MacPorts) dejaron de darles soporte hace años. Los contenedores Podman conservan estas versiones indefinidamente:

```yaml
# docker-compose.yml para un stack antiguo
version: '3'
services:
  php55:
    image: php:5.5-apache
    volumes:
      - ./legacy-app:/var/www/html
  
  mysql56:
    image: mysql:5.6
    environment:
      MYSQL_ROOT_PASSWORD: root
```

**2. Entornos de desarrollo aislados**

Prueba código no confiable sin riesgo:
- ¿Descargaste un repositorio de GitHub dudoso? Ejecútalo en un contenedor.
- ¿El viejo sitio de WordPress de un cliente con plugins sospechosos? Ponlo en un contenedor.
- ¿Experimentando con software nuevo? Aíslalo de tu sistema principal.

**3. Proyectos Docker Compose**

¿Ya tienes un `docker-compose.yml`? Impórtalo y ejecútalo directamente, sin cambios.

## Primeros pasos con Podman en FlyEnv

### Requisitos previos

FlyEnv 4.11.0+ incluye el módulo Podman. No se requiere instalación por separado.

**Plataformas compatibles:**
- macOS (Intel y Apple Silicon)
- Windows (a través de WSL2)
- Linux

### Crear tu primera VM

Podman en macOS/Windows requiere una VM Linux. FlyEnv se encarga de esto automáticamente:

1. Abre FlyEnv → módulo **Podman**
2. Ve a la pestaña **VM**
3. Haz clic en **"Create VM"**
4. Configura los recursos:
   - **CPU**: 2-4 núcleos (por defecto: 2)
   - **Memory**: 2-8 GB (por defecto: 2 GB)
   - **Disk**: 20-100 GB (por defecto: 50 GB)
5. Haz clic en **Create** y espera a que termine el aprovisionamiento

![Diálogo de creación de VM](https://oss.macphpstudy.com/image/podman-3.webp)

6. Selecciona la VM y haz clic en **Start**

![Gestión de VM](https://oss.macphpstudy.com/image/podman-2.webp)

### Inicio rápido con plantillas

FlyEnv proporciona plantillas preconfiguradas para stacks comunes:

| Plantilla | Incluye | Caso de uso |
|----------|----------|----------|
| **LAMP** | Apache + PHP + MySQL | Aplicaciones PHP antiguas |
| **LEMP** | Nginx + PHP + MySQL | Frameworks PHP modernos |
| **Node.js** | Node + MongoDB | Aplicaciones JavaScript |
| **Redis** | Servidor Redis | Capa de caché |
| **PostgreSQL** | Postgres + pgAdmin | Desarrollo de bases de datos |

**Para usar una plantilla:**

1. Ve a la pestaña **Compose**
2. Haz clic en **"From Template"**
3. Selecciona una plantilla
4. Elige la carpeta de destino
5. Haz clic en **Create**

![Selección de plantilla](https://oss.macphpstudy.com/image/podman-5.webp)

La plantilla genera un `docker-compose.yml` listo para ejecutar.

## Gestión de proyectos Docker Compose

### Importar proyectos existentes

¿Ya tienes un `docker-compose.yml`? Impórtalo en segundos:

1. Pestaña **Compose** → **"Import"**
2. Selecciona tu archivo `docker-compose.yml`
3. El proyecto aparece en la lista
4. Haz clic en **Start** para lanzar todos los servicios

![Importar Compose](https://oss.macphpstudy.com/image/podman-8.webp)

### Gestión de proyectos en ejecución

La vista de gestión de Compose muestra:
- Estado de ejecución/detenido
- Estado de cada servicio
- Mapeo de puertos
- Montajes de volúmenes

**Acciones:**
- **Start/Stop**: controlar todo el stack
- **Restart**: reiniciar servicios específicos
- **Logs**: ver logs en tiempo real por servicio
- **Delete**: eliminar el stack (conserva los archivos)

![Gestión de Compose](https://oss.macphpstudy.com/image/podman-9.webp)

![Gestión de Compose 2](https://oss.macphpstudy.com/image/podman-10.webp)

### Visualización de logs

1. Selecciona un proyecto Compose
2. Haz clic en la pestaña **Logs**
3. Selecciona el servicio en el menú desplegable
4. Observa la salida en tiempo real

Filtra por:
- Todos los servicios
- Un servicio específico
- Palabras clave de búsqueda

![Logs de Compose](https://oss.macphpstudy.com/image/podman-11.webp)

![Logs de Compose 2](https://oss.macphpstudy.com/image/podman-12.webp)

## Gestión de contenedores

### Crear contenedores

Para contenedores individuales (sin Compose):

1. Pestaña **Containers** → **"Add"**
2. Configura:
   - **Image**: selecciona o escribe (p. ej., `nginx:latest`)
   - **Name**: identificador del contenedor
   - **Ports**: mapeos Host:Contenedor
   - **Volumes**: carpeta del host:ruta del contenedor
   - **Environment**: variables de entorno
3. Haz clic en **Create**

![Añadir contenedor](https://oss.macphpstudy.com/image/podman-17.webp)

### Operaciones con contenedores

| Acción | Descripción | Cuándo usarla |
|--------|-------------|-------------|
| **Start/Stop** | Controlar la ejecución | Operaciones diarias |
| **Restart** | Detener y luego iniciar | Aplicar cambios de configuración |
| **Delete** | Eliminar el contenedor | Limpiar contenedores sin usar |
| **Export** | Guardar en un archivo | Copia de seguridad o transferencia |
| **Commit** | Guardar como imagen | Conservar modificaciones |
| **Exec** | Abrir una shell | Ejecutar comandos dentro |

### Ejecutar comandos en contenedores

¿Necesitas ejecutar un comando dentro de un contenedor en ejecución?

1. Selecciona el contenedor
2. Haz clic en **"Exec"**
3. Elige la shell (`/bin/bash` o `/bin/sh`)
4. Ejecuta comandos de forma interactiva

![Exec en contenedor](https://oss.macphpstudy.com/image/podman-24.webp)

![Exec en contenedor 2](https://oss.macphpstudy.com/image/podman-25.webp)

**Comandos habituales:**
```bash
# Check PHP version
php -v

# Install packages
apt-get update && apt-get install -y vim

# Check running processes
ps aux

# View environment variables
env
```

## Gestión de imágenes

### Descargar imágenes

1. Pestaña **Images** → **"Pull"**
2. Introduce el nombre de la imagen y la etiqueta:
   - `nginx:latest`
   - `php:8.2-apache`
   - `mysql:8.0`
3. Haz clic en **Pull**

Las imágenes se descargan desde Docker Hub o desde el registro que hayas configurado.

![Descargar imagen](https://oss.macphpstudy.com/image/podman-14.webp)

### Gestión de imágenes locales

La pestaña Images muestra:
- Nombre del repositorio
- Etiqueta/versión
- Tamaño en disco
- Fecha de creación

**Acciones:**
- **Run**: crear un contenedor a partir de la imagen
- **Delete**: eliminar para liberar espacio
- **Export**: guardar como archivo tar
- **Import**: cargar desde un archivo tar

![Lista de imágenes](https://oss.macphpstudy.com/image/podman-15.webp)

**Consejo para ahorrar espacio:** elimina periódicamente las imágenes sin usar. Una imagen típica ocupa entre 100 MB y 1 GB.

## Casos de uso reales

### Ejecutar PHP 5.5 antiguo

Un cliente tiene un sitio WordPress de hace 10 años que solo funciona con PHP 5.5:

```yaml
version: '3'
services:
  wordpress:
    image: php:5.5-apache
    volumes:
      - ./client-site:/var/www/html
    ports:
      - "8080:80"
  
  mysql55:
    image: mysql:5.5
    environment:
      MYSQL_ROOT_PASSWORD: root
      MYSQL_DATABASE: wordpress
```

1. Guárdalo como `docker-compose.yml`
2. Impórtalo en Podman de FlyEnv
3. Inicia los servicios
4. Accede en `http://localhost:8080`

### Aislar código no confiable

¿Descargaste un script sospechoso de Stack Overflow?

```bash
# Instead of running directly on your machine...
# Run in a throwaway container

1. Create container with `ubuntu:latest`
2. Mount only the script folder
3. Run the script
4. Delete container when done
```

Tu sistema anfitrión permanece intacto.

### Probar software sin instalarlo

¿Quieres probar Elasticsearch sin una configuración compleja?

1. Descarga la imagen `elasticsearch:8.x`
2. Crea un contenedor con el puerto 9200 mapeado
3. Prueba tu aplicación
4. Eliminalo cuando termines, sin limpieza adicional

## Solución de problemas

### "VM not starting" (macOS/Windows)

**Causas:**
- Espacio en disco insuficiente para la VM
- Virtualización no habilitada en la BIOS (Windows)
- Otra VM en conflicto

**Soluciones:**
1. Libera espacio en disco (al menos 20 GB)
2. Habilita la virtualización en la BIOS/UEFI
3. Detén otro software de VM (VirtualBox, VMware)

### "Cannot connect to Docker daemon"

**Causa**: la VM no está en ejecución

**Solución**: inicia primero la VM en el módulo Podman.

### "Port already in use"

**Causa**: el puerto del host entra en conflicto con otro servicio

**Solución**: cambia el puerto del host en la configuración del contenedor/Compose:
```yaml
ports:
  - "8080:80"  # Instead of 80:80
```

### "Permission denied" al acceder a volúmenes

**Causa**: permisos del contenedor rootless

**Solución**: 
1. Usa volúmenes con nombre en lugar de bind mounts
2. O establece el UID/GID correcto en las opciones del contenedor

### Rendimiento lento en macOS

**Causa**: sobrecarga de la traducción del sistema de archivos

**Soluciones:**
1. Usa las banderas de montaje `:cached` o `:delegated`
2. Excluye `node_modules` de los montajes
3. Usa un SSD para el almacenamiento de la VM

## Podman vs Docker Desktop: comparación de funciones

| Función | Docker Desktop | Podman + FlyEnv |
|---------|---------------|-----------------|
| **Rootless** | ❌ No | ✅ Sí |
| **Daemon** | Requerido | Sin daemon |
| **Docker Compose** | ✅ Sí | ✅ Sí |
| **Compatibilidad de imágenes** | Docker Hub | Docker Hub + OCI |
| **Uso de recursos** | 2-4 GB | 200-500 MB |
| **Costo** | 5-21 $/mes (empresas) | Gratis |
| **Kubernetes** | Integrado | A través de minikube |
| **Gestión con GUI** | Solo dashboard | Integración completa |

## Preguntas frecuentes (FAQ)

**P: ¿Puedo usar imágenes de Docker Hub con Podman?**

R: Sí. Podman es totalmente compatible con Docker Hub y con registros compatibles con OCI. Descarga y ejecuta cualquier imagen pública de Docker.

**P: ¿Necesito aprender comandos nuevos?**

R: No. La CLI de Podman es compatible con Docker. `podman run` = `docker run`, `podman ps` = `docker ps`, etc. Pero con la GUI de FlyEnv rara vez necesitarás la CLI.

**P: ¿Podman es más lento que Docker?**

R: No. El rendimiento es comparable. En Linux, Podman suele ser más rápido porque no hay sobrecarga del daemon. En macOS/Windows, ambos usan VMs, así que el rendimiento es similar.

**P: ¿Puedo migrar proyectos Docker existentes?**

R: Sí. Los archivos Docker Compose funcionan sin modificaciones. Simplemente impórtalos y ejecútalos.

**P: ¿Funciona con VS Code Dev Containers?**

R: Sí. Instala la CLI de Podman y configura VS Code para usarla en lugar de Docker.

**P: ¿Cómo accedo a los contenedores desde mi red local?**

R: Mapea los puertos al crear los contenedores (p. ej., host 8080 → contenedor 80). Luego accede a través de `http://localhost:8080`.

**P: ¿Puedo ejecutar aplicaciones con GUI en contenedores?**

R: Sí, con configuración adicional para el reenvío de X11 (macOS/Linux). En general, está mejor orientado a aplicaciones de servidor.

**P: ¿Cuál es la diferencia entre una VM y un contenedor?**

R: En el módulo Podman de FlyEnv: la VM es la máquina virtual Linux (solo macOS/Windows). Los contenedores se ejecutan dentro de la VM. En Linux, los contenedores se ejecutan directamente sin VM.

**P: ¿Cuánto espacio en disco necesito?**

R: VM: 20-50 GB. Cada imagen: típicamente 100 MB-1 GB. Planifica unos 100 GB en total para un uso cómodo.

## Resumen

El módulo Podman de FlyEnv tiende un puente entre el desarrollo nativo y la contenedorización:

- ✅ **Ejecuta software antiguo** que ya no está disponible en los gestores de paquetes
- ✅ **Aísla código no confiable** sin riesgo para tu sistema
- ✅ **Despliega proyectos Docker Compose** con un clic
- ✅ **Rootless por defecto** para mayor seguridad
- ✅ **Gratis para siempre**, sin cuotas de suscripción

¿Listo para reducir el consumo de recursos de Docker Desktop? Prueba Podman en FlyEnv hoy mismo.

[Descargar FlyEnv](/es/download) — Disponible para macOS, Windows y Linux

Explora más funciones:
- [Dominios personalizados y SSL](/es/guide/host) — Desarrollo local profesional
- [Configuración de proxy inverso](/es/guide/reverse-proxy-nestjs-multi-servers) — Conecta contenedores a servidores web
- [FlyEnv vs Docker](/es/guide/flyenv-vs-docker-xampp) — Comparación completa
