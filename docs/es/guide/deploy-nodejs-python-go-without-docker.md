---
title: 'Ejecuta Node.js, Python y Go en local sin Docker'
head:
  - - meta
    - name: description
      content: 'Ejecuta proyectos Node.js, Python y Go en local sin Docker, con runtimes nativos, cambio de versión por proyecto, HTTPS y proxies inversos.'
---

# Despliega proyectos Node.js, Python y Go sin Docker

¿Cansado de que Docker agote la batería de tu portátil y consuma más de 4 GB de RAM solo para ejecutar una sencilla app de Node.js? No eres el único. Aunque Docker es estupendo para producción, a menudo es excesivo para el desarrollo local: ralentiza tu velocidad de iteración y complica lo que deberían ser tareas simples.

**FlyEnv ofrece una forma mejor.** Como gestor de entornos nativo, te permite desplegar y gestionar proyectos de Node.js, Python, Go y otros usando binarios puros: sin contenedores y sin sobrecarga de virtualización. Con el **aislamiento de entorno a nivel de proyecto**, las versiones de los runtimes cambian automáticamente cuando haces `cd` a directorios diferentes. Combinado con el proxy inverso integrado, SSL automático y túneles con un clic, obtienes un desarrollo local similar a producción sin la complejidad de Docker.

Esta guía te lleva paso a paso por el despliegue de un proyecto Next.js (los principios se aplican a Python Flask/Django, apps de Go y más) usando los módulos personalizables de FlyEnv.

## ¿Por qué desplegar sin Docker?

| Característica | Docker Desktop | FlyEnv nativo |
|---------|---------------|---------------|
| Uso de memoria | 2-4 GB de sobrecarga | Sobrecarga casi nula |
| Arranque en frío | 10-30 segundos | Instantáneo (< 1 s) |
| Espacio en disco | Más de 10 GB en imágenes | Solo los binarios del runtime |
| Conflictos de puertos | Requiere mapeo manual | Detección y gestión automáticas |
| Cambio de versión | Reconstruir contenedores | Cambio instantáneo por proyecto |

## Requisitos previos

- FlyEnv instalado en tu equipo macOS, Windows o Linux
- Un proyecto Node.js/Python/Go listo para desplegar (o sigue nuestro ejemplo de Next.js)
- Conocimientos básicos del comando de arranque de tu proyecto

## Paso 1: Crea tu proyecto (ejemplo con Next.js)

Si ya tienes un proyecto, salta al paso 2.

1. Abre FlyEnv y ve al módulo **Node.js**
2. Haz clic en la pestaña **"New Project"**
3. Selecciona **Next.js** entre las plantillas
4. Elige el directorio del proyecto y completa la creación

Una vez creado, instala las dependencias y compila:

```bash
cd "/path/to/your/nextjs-project"
npm install
npm run build
```

![Crear proyecto NextJS 1](https://oss.macphpstudy.com/image/deploy-1.webp)

![Crear proyecto NextJS 2](https://oss.macphpstudy.com/image/deploy-2.webp)

![Crear proyecto NextJS 3](https://oss.macphpstudy.com/image/deploy-3.webp)

## Paso 2: Crea una categoría de módulo personalizada

FlyEnv organiza los proyectos mediante módulos personalizables. Piensa en ellos como carpetas para distintos stacks tecnológicos (ReactJS, Python, Go, etc.).

1. Ve a **Settings → Modules**
2. Haz clic en el icono **"+"** junto a "Sites" para crear una nueva categoría
3. Escribe un nombre (por ejemplo, `ReactJS`, `PythonApps` o `GoServices`)
4. Haz clic en **OK** para crearla

![Crear categoría de módulo](https://oss.macphpstudy.com/image/deploy-4.webp)

## Paso 3: Añade una entrada de proyecto

Dentro de tu nueva categoría, haz clic en **"Add"** para crear una entrada de proyecto:

**Opciones de configuración explicadas:**

| Opción | Descripción | Recomendación |
|--------|-------------|----------------|
| **Run as Service** | FlyEnv gestiona el estado de inicio/parada con controles de alternancia | ✅ Actívalo para la mayoría de los proyectos |
| **Single Instance** | Evita que varias versiones se ejecuten simultáneamente | ✅ Actívalo si los proyectos comparten puertos |
| **Executables** | Los proyectos/comandos reales a ejecutar | Añade aquí tu proyecto |
| **Config Files** | Se muestran como pestañas en el panel principal | Opcional |
| **Log Files** | Visibles directamente en FlyEnv | Opcional |

![Añadir entrada de proyecto 1](https://oss.macphpstudy.com/image/deploy-5.webp)

![Añadir entrada de proyecto 2](https://oss.macphpstudy.com/image/deploy-6.webp)

## Paso 4: Configura el comando de tu proyecto

Dentro de **"Executables"**, haz clic en **"Add"** para configurar cómo se ejecuta tu proyecto:

**Campos obligatorios:**

- **Name**: el nombre de tu proyecto (por ejemplo, `My Next.js Blog`)
- **Notes**: añade aquí el número de puerto (por ejemplo, `Port: 3000`) para detectar conflictos fácilmente
- **Run with sudo** (solo macOS/Linux): actívalo si tu proyecto necesita permisos elevados
- **Command/File**: el comando de shell o archivo de script a ejecutar

**Comandos de ejemplo:**

**Next.js (macOS/Linux):**
```bash
cd "/Users/username/projects/my-app"
npm run start
```

**Next.js (Windows PowerShell):**
```powershell
cd "F:\www\nextjs\my-app"
npm run start
```

**Python Flask:**
```
cd "/path/to/flask-app"
source venv/bin/activate
flask run --port=5000
```

**Aplicación Go:**
```
cd "/path/to/go-app"
go run main.go
```

**Campos opcionales:**
- **PID File Path**: para monitorizar el estado del servicio (si tu proyecto crea un archivo PID)
- **Config Files**: añade archivos de configuración para editarlos dentro de la app
- **Log Files**: especifica rutas de logs para verlos integrados

![Configurar comando del proyecto](https://oss.macphpstudy.com/image/deploy-7.webp)

## Paso 5: Accede a tu módulo personalizado

Tu nuevo módulo aparece en la barra lateral izquierda. Haz clic en él para ver la interfaz de gestión:

![Acceder a tu módulo personalizado](https://oss.macphpstudy.com/image/deploy-8.webp)

## Paso 6: Inicia tu aplicación

Haz clic en el botón **"Start"** junto a la entrada de tu proyecto:

![Iniciar tu aplicación](https://oss.macphpstudy.com/image/deploy-9.webp)

## Paso 7: Verifica que está en ejecución

Abre tu navegador y visita la dirección local (por ejemplo, `http://127.0.0.1:3000`):

![Verificar que está en ejecución](https://oss.macphpstudy.com/image/deploy-12.webp)

## Paso 8: Monitoriza los logs

Haz clic en los botones de acción para ver los logs de salida y de errores en tiempo real:

![Monitorizar logs 1](https://oss.macphpstudy.com/image/deploy-10.webp)

![Monitorizar logs 2](https://oss.macphpstudy.com/image/deploy-11.webp)

## Avanzado: dominios personalizados y HTTPS

¿Quieres acceder a tu app local mediante `https://myapp.test` en lugar de `localhost:3000`?

1. Ve al módulo **Sites** en FlyEnv
2. Crea un nuevo sitio con el dominio local que desees
3. Configura un proxy inverso hacia el puerto de tu app (3000)
4. FlyEnv genera y gestiona los certificados SSL automáticamente

→ [Más información sobre dominios personalizados y SSL automático](/es/guide/host)

## Avanzado: comparte tu app local (túneles)

¿Necesitas compartir tu localhost con un compañero o un cliente? FlyEnv se integra con Cloudflare Tunnel:

→ [Expón localhost con Cloudflare Tunnel](/es/guide/cloudflare-tunnel-local-development)

## Buenas prácticas

1. **Anota siempre el puerto**: añade los números de puerto en el campo Notes para evitar conflictos
2. **Usa rutas absolutas**: en los comandos, usa rutas completas para evitar problemas con el directorio de trabajo
3. **Variables de entorno**: define las variables de entorno en tu perfil de shell o usa la gestión de entornos de FlyEnv
4. **Aislamiento de proyectos**: crea categorías de módulos separadas para distintos stacks tecnológicos

## Vídeo tutorial

¿Prefieres verlo en vídeo? Mira Deja Docker para el desarrollo local: ejecuta Node, Python y Go como servicios nativos con FlyEnv en acción:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/SHK12kXApTM?si=YlgoKQQeXw86cCYN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Preguntas frecuentes (FAQ)

**P: ¿Esto usa menos RAM que Docker?**

FlyEnv evita la sobrecarga base de la máquina virtual de Docker Desktop ejecutando los binarios locales directamente. El uso real de memoria depende de los runtimes, servicios y configuración de contenedores que se comparen.

**P: ¿Puedo ejecutar varios proyectos con versiones diferentes de Node.js?**

Por supuesto. El aislamiento a nivel de proyecto de FlyEnv cambia automáticamente las versiones de Node.js cuando trabajas en directorios diferentes. No necesitas gestores de versiones manuales.

**P: ¿Qué pasa si dos proyectos necesitan el mismo puerto?**

Activa la opción **"Single Instance"** en la configuración del proyecto. Esto garantiza que solo una versión se ejecute a la vez, evitando conflictos de puertos.

**P: ¿Es adecuado para despliegues en producción?**

FlyEnv está diseñado para desarrollo y pruebas locales. Para producción, usa pipelines de despliegue adecuados con Docker, Kubernetes o las soluciones nativas de tu proveedor de nube.

**P: ¿Puedo desplegar PHP, Java u otros lenguajes también?**

¡Sí! El sistema de módulos personalizados funciona con cualquier lenguaje que pueda iniciarse desde la línea de comandos. FlyEnv tiene módulos dedicados para PHP, Java, Python, Go y más.

**P: ¿Cómo depuro si mi app no arranca?**

Revisa los logs de errores en la interfaz de FlyEnv (paso 8). Los problemas más comunes son:
- Puerto ya en uso (revisa el campo Notes en busca de conflictos)
- Dependencias faltantes (ejecuta `npm install` o el equivalente)
- Rutas incorrectas en el comando (usa rutas absolutas)

## ¿Listo para dejar Docker en el desarrollo local?

FlyEnv te ofrece lo mejor de ambos mundos: el aislamiento y la comodidad de los flujos de trabajo con contenedores, con la velocidad y la sencillez del desarrollo nativo. Se acabó esperar a que se construyan los contenedores y pelearse con las actualizaciones de Docker Desktop.

[**Descarga FlyEnv**](/es/download) y experimenta hoy un desarrollo local 10 veces más rápido.

---

**Guías relacionadas:**
- [FlyEnv vs Docker y XAMPP: ¿cuál es el adecuado para ti?](/es/guide/flyenv-vs-docker-xampp)
- [Aislamiento de versiones a nivel de proyecto explicado](/es/guide/project-level-runtime-environment)
- [Configuración de proxy inverso para NestJS/Node.js](/es/guide/reverse-proxy-nestjs-multi-servers)
