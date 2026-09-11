---
title: Aislamiento de versiones por proyecto sin Docker - Guía de FlyEnv
head:
  - - meta
    - name: description
      content: 'Vincula versiones de Node.js, PHP, Python y otros runtimes a cada proyecto para que los terminales y las sesiones de shell de FlyEnv cambien de entorno automáticamente.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Aislamiento de versiones por proyecto sin Docker

¿Cansado de escribir `nvm use` o de editar manualmente el `PATH` cada vez que cambias de proyecto? ¿Ejecutas `node -v` en carpetas distintas y obtienes la versión equivocada? ¿Docker Desktop consume tu RAM solo para gestionar un simple cambio de entorno?

FlyEnv resuelve esto con **un verdadero aislamiento de entorno por proyecto**. Es una alternativa nativa y ligera a Docker Desktop y NVM: carga automáticamente la versión correcta de Node.js, PHP, Python, Go, Ruby o Java en el momento en que haces `cd` al directorio de un proyecto. Sin contenedores, sin peso extra: solo binarios nativos que arrancan en milisegundos.

## Por qué necesitas aislamiento por proyecto

### Los problemas de gestionar versiones manualmente

| Problema | Solución tradicional | El inconveniente |
|---------|---------------------|----------|
| Varios proyectos necesitan versiones distintas de Node.js | NVM + cambio manual | Olvidas cambiar y depuras durante horas |
| Proyecto antiguo con PHP 7.4 + proyecto nuevo con PHP 8.3 | Editar los perfiles del shell constantemente | Es fácil romper el PATH global |
| Miembros del equipo con versiones diferentes | Docker Compose | Más de 2 GB de RAM de sobrecarga para herramientas CLI simples |
| Variables de entorno por proyecto | Archivos `.env` + scripts de export | Configuración dispersa, difícil de mantener |

### Cómo FlyEnv cambia las reglas del juego

FlyEnv ofrece **cambio de entorno nativo e instantáneo** sin la sobrecarga de Docker:

- ✅ **Cambio sin configuración**: entra en la carpeta de un proyecto y la versión correcta se carga automáticamente
- ✅ **Menor sobrecarga de virtualización**: los binarios nativos se ejecutan sin una máquina virtual de contenedores
- ✅ **Configuración con un clic**: no hay comandos de terminal que memorizar
- ✅ **Multiplataforma**: el mismo flujo de trabajo en macOS y Windows
- ✅ **6 lenguajes compatibles**: Node.js, PHP, Python, Go, Ruby, Java

## Paso a paso: configurar el aislamiento por proyecto

### Paso 1: accede a la gestión de proyectos

Abre FlyEnv y selecciona la pestaña de tu lenguaje:

1. Inicia el panel de control de FlyEnv
2. Haz clic en la pestaña **Node.js**, **PHP**, **Python**, **Go**, **Ruby** o **Java**
3. Ve a la sección Project

![Interfaz de gestión de proyectos - pestañas de lenguajes con las opciones Node.js, PHP, Python, Go, Ruby y Java](https://oss.macphpstudy.com/image/project-env1.png)

### Paso 2: añade tu proyecto

Registra un proyecto para que su entorno se cargue automáticamente:

1. Haz clic en el botón **"Add Project"**
2. Introduce un nombre de proyecto fácil de recordar (por ejemplo, "legacy-api" o "new-dashboard")
3. Selecciona o escribe la ruta absoluta de la carpeta de tu proyecto
4. Guarda

![Diálogo para añadir proyecto - campo de nombre y selector de ruta](https://oss.macphpstudy.com/image/project-env2.png)

### Paso 3: fija la versión del runtime

Aquí es donde ocurre la magia: bloquea una versión específica para este proyecto:

1. Haz doble clic en el proyecto que acabas de añadir a la lista
2. En el desplegable **Version**, selecciona la versión exacta del runtime que necesita este proyecto:
   - Node.js: `18.19.0`, `20.11.0`, `21.6.0`, etc.
   - PHP: `7.4.33`, `8.2.15`, `8.3.2`, etc.
   - Python: `3.9.18`, `3.11.7`, `3.12.1`, etc.
3. Haz clic en **Save** — ¡y listo!

![Desplegable de selección de versión - ajustes del proyecto con selector de versión](https://oss.macphpstudy.com/image/project-env3.png)

::: tip Consejo
Puedes instalar varias versiones del mismo lenguaje desde la interfaz principal de FlyEnv. Todas las versiones instaladas aparecerán en el desplegable a nivel de proyecto.
:::

### Paso 4: configura las variables de entorno específicas del proyecto

Muchos proyectos necesitan un `PATH`, `DATABASE_URL` o claves de API personalizados:

1. Selecciona tu proyecto y haz clic en **"Project Environment"**
2. Revisa las variables del sistema heredadas actualmente
3. Añade o sobrescribe variables:
   - Haz clic en **"Add Variable"**
   - Introduce pares clave-valor (por ejemplo, `NODE_ENV=production`, `PHP_MEMORY_LIMIT=512M`)
4. Las variables se guardan por proyecto y se cargan automáticamente

![Panel de variables de entorno - lista de variables de entorno configuradas](https://oss.macphpstudy.com/image/project-env4.png)

![Editor de variables de entorno - diálogo para añadir/editar variables](https://oss.macphpstudy.com/image/project-env5.png)

## La magia: carga automática en el terminal

Aquí es donde FlyEnv destaca frente a herramientas manuales como NVM o Pyenv.

Una vez configurado, simplemente abre tu terminal:

```bash
# Navigate to your project
cd ~/work/legacy-php-project

# Check PHP version - automatically correct!
php -v
# PHP 7.4.33 (cli) (built: ...)

cd ~/work/modern-node-app

node -v
# v20.11.0

which node
# /Users/you/.flyenv/versions/node/20.11.0/bin/node
```

La integración con el shell de FlyEnv detecta tu directorio actual e inyecta las rutas correctas **antes** de que se ejecute tu comando. Sin `nvm use`, sin `source venv/bin/activate`, sin olvidarte de cambiar de versión.

![Demostración en terminal - cambio automático de versión al hacer cd](https://oss.macphpstudy.com/image/project-env6.png)

## Ejemplos por lenguaje

### Proyectos Node.js

Perfecto para agencias que gestionan proyectos de varios clientes:

| Proyecto | Versión recomendada | Por qué |
|---------|---------------------|-----|
| Mantenimiento de sistemas antiguos | Node.js 16.x | Compatibilidad con webpack antiguo |
| Producción estable | Node.js 18.x LTS | AWS Lambda, ecosistema estable |
| Desarrollo moderno | Node.js 20.x+ | Test runner nativo, rendimiento |

### Proyectos PHP

Cambia entre frameworks sin esfuerzo:

| Framework | Versión de PHP | Notas |
|-----------|-------------|-------|
| WordPress antiguo | 7.4 | Compatibilidad con plugins antiguos |
| Laravel 10+ | 8.2+ | Funciones más recientes, rendimiento |
| Symfony 7 | 8.3 | Funciones de PHP de vanguardia |

### Proyectos Python

Sustituye virtualenv/conda en los casos sencillos:

```bash
cd ~/data-science-project
python --version
# Python 3.11.7

cd ~/legacy-django
python --version  
# Python 3.8.18
```

## Vídeo explicativo

¿Prefieres verlo en acción? Mira el aislamiento por proyecto de FlyEnv en funcionamiento:

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube.com/embed/Cpq6i9T6IK4?si=E-47n3AQwJEBygoh" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Preguntas frecuentes (FAQ)

**P: ¿FlyEnv usa contenedores Docker?**  
R: No. FlyEnv ejecuta binarios compilados para tu sistema operativo (macOS/Windows/Linux), evitando la sobrecarga base de la máquina virtual de Docker Desktop. El tiempo de arranque real y el uso de memoria dependen de los runtimes y servicios de tu proyecto.

**P: ¿Puedo usarlo como alternativa a NVM?**  
R: Por supuesto. FlyEnv gestiona las versiones de Node.js con cambio automático basado en el directorio y sin configuración: no tendrás que volver a escribir `nvm use` ni a preocuparte por olvidar cambiar de versión.

**P: ¿Es mejor que XAMPP para el desarrollo con PHP?**  
R: Para flujos de trabajo multiproyecto, sí. XAMPP usa una única versión global de PHP. FlyEnv permite que cada proyecto use su propia versión de PHP y se integra de forma nativa con Nginx/Apache/Caddy.

**P: ¿Funciona con pipelines de CI/CD?**  
R: La configuración del proyecto se guarda en los ajustes de FlyEnv. Para CI/CD, normalmente especificas las versiones en tus archivos de workflow. FlyEnv destaca en la consistencia del desarrollo local.

**P: ¿Qué pasa si un miembro del equipo no usa FlyEnv?**  
R: Puede seguir usando el proyecto con su propio gestor de versiones. FlyEnv no modifica los archivos de tu proyecto: no requiere `.nvmrc`, ni trucos en `composer.json`, ni Dockerfiles.

**P: ¿Cómo desinstalo una versión?**  
R: Ve a la pestaña principal del lenguaje en FlyEnv, haz clic derecho sobre la versión y selecciona "Uninstall". Los proyectos que usen esa versión recurrirán a otra de forma automática o te pedirán seleccionar una nueva.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.es" locale="es" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/es/guide/project-level-runtime-environment" />

## Próximos pasos

¿Listo para dejar de pelearte con los gestores de versiones?

1. **[Descarga FlyEnv](/es/download)** — Gratis para macOS, Windows y Linux
2. **[Comparación con Docker y XAMPP](/es/guide/flyenv-vs-docker-xampp)** — Descubre por qué los desarrolladores están cambiando
3. **[Gestiona múltiples versiones](/es/guide/manage-multiple-node-php-versions)** — Instala y mantén tu biblioteca de runtimes

¿Quieres ir más allá? Aprende a [desplegar Node.js/Python/Go sin Docker](/es/guide/deploy-nodejs-python-go-without-docker) usando el proxy inverso y la gestión de procesos integrados de FlyEnv.
