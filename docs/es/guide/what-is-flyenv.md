---
title: '¿Qué es FlyEnv? Un entorno de desarrollo local nativo todo en uno'
head:
  - - meta
    - name: description
      content: 'Descubre cómo FlyEnv reúne runtimes, servidores web, bases de datos, entornos por proyecto, complementos y herramientas de desarrollo con IA en un espacio de trabajo nativo para Windows, macOS y Linux.'
---

# ¿Qué es FlyEnv?

FlyEnv es un **entorno de desarrollo local nativo** de código abierto y todo en uno para Windows, macOS y Linux.

Reúne runtimes de lenguajes, servidores web, bases de datos, servicios locales, herramientas de desarrollo y funciones de desarrollo con IA en un espacio de trabajo de escritorio que puedes ampliar.

Desde un mismo lugar puedes elegir el software que necesitan tus proyectos, configurar sus entornos y organizar sus dependencias en grupos de inicio reutilizables. Para el desarrollo local del día a día, FlyEnv ejecuta los servicios directamente en tu equipo sin requerir contenedores.

**De las herramientas dispersas a un solo espacio de trabajo.**

[Descarga FlyEnv](/es/download) · [Guía de inicio rápido](/es/guide/getting-started) · [Ver demos](/es/demos)

<div id="por-que-los-desarrolladores-lo-usan"></div>

## Por qué existe FlyEnv

Un entorno de desarrollo moderno suele incluir mucho más que un servidor web y una base de datos.

Una aplicación web típica puede usar PHP para el backend, Node.js para el frontend, MySQL para almacenar datos, Redis como caché, Mailpit para probar el correo y Nginx para servir la aplicación. Otro proyecto en el mismo equipo podría requerir versiones de runtime y servicios completamente distintos.

Cada herramienta es útil por sí sola. La dificultad está en gestionarlas juntas. Hay que instalar versiones, editar archivos de configuración, llevar un registro de los puertos, cambiar de proyecto, configurar HTTPS local y recordar qué servicios deben estar en ejecución.

FlyEnv centraliza estas tareas cotidianas en una sola capa de gestión. Los lenguajes, las bases de datos y los servidores web siguen siendo los mismos. FlyEnv te ayuda a usarlos en conjunto como un entorno de desarrollo operativo.

<div id="compatibilidad-de-plataformas"></div>

## Cómo funciona FlyEnv

Piensa en FlyEnv como un espacio de trabajo entre tus proyectos y el software que se ejecuta en tu equipo.

```text
Tus proyectos
  Laravel · WordPress · Node.js · Python · Java · IA
                             │
                Espacio de trabajo de FlyEnv
                             │
  ┌─────────────────────────────────────────────────────┐
  │ Entornos por proyecto                               │
  │ Versiones de runtime · Sitios locales · HTTPS       │
  ├─────────────────────────────────────────────────────┤
  │ Startup Groups                                      │
  │ Organiza e inicia las dependencias del proyecto     │
  ├─────────────────────────────────────────────────────┤
  │ Gestión de módulos                                  │
  │ Instalar · Configurar · Ejecutar · Actualizar       │
  ├──────────────────────────┬──────────────────────────┤
  │ Catálogo de complementos │ Herramientas de IA y MCP │
  │ Amplía el entorno        │ Conecta agentes de IA    │
  └──────────────────────────┴──────────────────────────┘
                             │
                  Windows · macOS · Linux
```

*Modelo conceptual del espacio de trabajo de FlyEnv que omite los detalles de implementación.*

FlyEnv se basa en cuatro principios.

### Ejecuta los servicios de forma nativa

FlyEnv gestiona runtimes nativos y servicios locales. Puedes trabajar directamente con sus archivos de configuración, registros y puertos de red con las herramientas que ya usas en tu sistema operativo. Este flujo funciona sin una capa de contenedores.

### Instala solo lo que necesitas

Puedes empezar con un entorno sencillo de PHP o Node.js y añadir bases de datos, cachés, servidores web y otras herramientas cuando un proyecto las requiera. Elige qué runtimes y servicios compatibles instalar.

### Usa el runtime adecuado para cada proyecto

Distintos proyectos pueden requerir distintas versiones de un lenguaje. Para los lenguajes compatibles, FlyEnv admite varias versiones instaladas y permite seleccionar el runtime por proyecto. Así reduces la necesidad de cambiar una y otra vez tu entorno global.

Consulta [Runtimes por proyecto](/es/features/per-project-runtimes) y la [guía de runtimes a nivel de proyecto](/es/guide/project-level-runtime-environment).

La gestión de versiones por proyecto no proporciona la seguridad ni el aislamiento del sistema de archivos propios de los contenedores.

### Inicia juntas las dependencias de un proyecto

Además del runtime, el entorno de un proyecto puede necesitar un servidor web, una base de datos, una caché y otros servicios en segundo plano.

[Startup Groups](/es/features/startup-groups) te permite organizar los servicios gestionados en grupos reutilizables e iniciarlos o detenerlos juntos. Configura un grupo para tu proyecto y reutilízalo para ahorrarte la misma serie de operaciones manuales cada día.

<div id="lo-que-flyenv-hace-realmente"></div>

## Un espacio de trabajo que crece contigo {#what-flyenv-actually-does}

FlyEnv puede cubrir desde un stack web local pequeño hasta un flujo de desarrollo mucho más amplio. El espacio de trabajo crece según lo que decidas instalar y usar.

| Categoría | Ejemplos |
| --- | --- |
| Runtimes de lenguajes | PHP, Node.js, Python, Java, Go, Rust |
| Servidores web y sitios | Nginx, Apache, Caddy, FrankenPHP, dominios locales y HTTPS |
| Bases de datos y servicios locales | MySQL, PostgreSQL, MariaDB, Redis, RabbitMQ, Mailpit |
| Flujos de trabajo por proyecto | Runtimes por proyecto, Startup Groups, módulos personalizados |
| Desarrollo con IA | CLI de programación con IA, servidor MCP, Ollama, CLIProxyAPI, complemento AI Memory |
| Complementos opcionales | Kafka, OpenSearch, MySQL Cluster, llama.cpp, Command Shortcuts |

Estos son algunos ejemplos. Las versiones del software, la disponibilidad por plataforma y los requisitos de licencia varían según el módulo. Consulta el [resumen de funciones](/es/features) para ver la lista actual.

### Amplía tu espacio de trabajo con complementos

La instalación de software bajo demanda y el [catálogo de complementos](/es/features/plugin-market) cubren dos necesidades distintas.

- La instalación bajo demanda te permite elegir qué runtimes y servicios quieres instalar.
- El catálogo de complementos te permite añadir integraciones opcionales a FlyEnv, incluidos paneles de gestión específicos y herramientas especializadas.

Puedes empezar con PHP, Nginx y MySQL. Más adelante, puedes añadir Node.js y Redis para una aplicación nueva o instalar Kafka, OpenSearch o AI Memory cuando los necesites.

Puedes gestionar complementos del catálogo oficial o de fuentes externas de confianza. Para instalar y actualizar complementos necesitas una licencia activa de FlyEnv. Consulta la página de cada complemento para conocer sus requisitos y las plataformas compatibles.

**Muchas posibilidades en un espacio de trabajo sencillo.**

Puedes mantener un entorno pequeño para el uso diario y ampliarlo más adelante cuando lo necesites.

<div id="el-verdadero-poder-cuando-todo-funciona-en-conjunto"></div>

## Un flujo de desarrollo real {#the-real-power-when-everything-works-together}

Imagina una aplicación Laravel con un frontend en Vue. Su entorno local podría incluir estos componentes.

| Componente | Función en el proyecto |
| --- | --- |
| PHP 8.4 | Runtime del backend |
| Node.js | Herramientas de desarrollo y compilación del frontend |
| Nginx y PHP-FPM | Sirven la aplicación PHP |
| MySQL | Base de datos de la aplicación |
| Redis | Caché y colas |
| Mailpit | Pruebas de correo en local |
| `https://myapp.test` | URL local de la aplicación con HTTPS |

Esta configuración es un ejemplo. Elige las versiones y los servicios que encajen con tu proyecto.

Con FlyEnv, puedes preparar ese entorno en seis pasos.

1. Instala las versiones de software necesarias.
2. Configura los entornos de PHP y Node.js del proyecto.
3. Prepara la base de datos y actualiza la configuración de entorno de la aplicación.
4. Crea un sitio local con un dominio personalizado y HTTPS.
5. Crea un grupo en Startup Groups con los servicios gestionados.
6. Ejecuta los comandos de configuración y desarrollo que requiera el proyecto.

Una vez configurado, puedes reutilizar el grupo de servicios cada vez que vuelvas al proyecto. Desde el mismo espacio de trabajo puedes acceder al sitio local, gestionar sus dependencias y consultar los registros de los servicios.

Los comandos de configuración específicos de cada framework siguen siendo necesarios cuando el proyecto los requiere. FlyEnv facilita la preparación, la gestión y la reutilización del entorno de desarrollo en el que se ejecutan.

Lee [Cómo ejecutar Laravel en FlyEnv](/es/guide/run-laravel-use-flyenv), aprende a configurar [sitios locales con HTTPS](/es/features/local-sites-https) o explora otras [soluciones para proyectos](/es/solutions).

<div id="mira-las-funciones-principales-de-flyenv-en-13-minutos"></div>

### Recorre las funciones principales de FlyEnv en 13 minutos {#watch-flyenv-s-core-features-in-13-minutes}

Este vídeo muestra cómo instalar módulos, gestionar versiones y servicios, usar Startup Groups, configurar sitios locales y aprovechar las herramientas de desarrollo de FlyEnv.

<div style="position: relative; width: 100%; aspect-ratio: 16 / 9; overflow: hidden; border-radius: 8px; background: #111827;">
  <iframe src="https://www.youtube.com/embed/TA2NA0JeGdo" title="Funciones de FlyEnv - Desarrollo local nativo sin Docker" style="position: absolute; inset: 0; width: 100%; height: 100%; border: 0;" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

[Ver en YouTube](https://www.youtube.com/watch?v=TA2NA0JeGdo) · [Explorar más demos cortas](/es/demos)

<div id="por-que-la-ia-cambia-la-definicion-de-un-entorno-local"></div>

## Diseñado para el desarrollo con IA {#why-ai-changes-the-definition-of-a-local-environment}

Los agentes de programación con IA necesitan acceder al código fuente y, en muchos casos, al contexto del entorno. Para trabajar en un proyecto real, quizá necesiten conocer sus runtimes activos, bases de datos, URL locales, estado de los servicios, configuración y registros.

FlyEnv incorpora estos flujos de trabajo al mismo entorno de desarrollo local. Las herramientas de IA son opcionales para el desarrollo tradicional.

### Gestión de CLI de programación con IA

FlyEnv te ayuda a gestionar clientes de programación compatibles como Claude Code, Codex, OpenCode y Kimi junto con tus demás herramientas de desarrollo.

### Servidor MCP integrado

El [servidor MCP de FlyEnv](/es/features/mcp-server) ofrece a los agentes compatibles acceso estructurado a información del entorno gestionado y a determinadas operaciones. Las herramientas disponibles y los ajustes de aprobación determinan qué puede consultar o modificar un agente.

Además de escribir código, un agente puede ayudarte a preparar un entorno, inspeccionar un servicio o diagnosticar problemas en una aplicación local.

### AI Memory compartida

El complemento opcional [AI Memory](/es/features/ai-memory) ofrece a los agentes conectados un lugar persistente en el equipo para guardar y recuperar información útil entre sesiones. Puedes guardar preferencias de desarrollo, decisiones de proyecto, procedimientos de configuración y soluciones reutilizables. Las memorias globales y las de proyecto se mantienen en ámbitos separados.

Un agente puede recuperar información guardada por otro cliente conectado cuando ambos usan la colección de memoria adecuada. Que se guarde o recupere información depende de las instrucciones del cliente y de las llamadas a herramientas que haga.

**La IA escribe tu código. FlyEnv la ayuda a ejecutar tu stack.**

Para configurarlo, consulta la [guía del espacio de trabajo con IA y MCP de FlyEnv](/es/guide/ai-coding-workspace-mcp).

<div id="en-que-se-diferencia-flyenv-de-docker-y-de-los-stacks-tipo-xampp"></div>

## Cómo se compara FlyEnv con otras herramientas {#how-flyenv-differs-from-docker-and-xampp-style-stacks}

FlyEnv se centra en un flujo de desarrollo nativo y ampliable que admite distintos frameworks y combinaciones de software. Puedes configurar el entorno sin tener que empezar por los contenedores.

| Modelo de desarrollo | Enfoque principal |
| --- | --- |
| Stacks tradicionales preconfigurados | Poner en marcha un stack web local con un conjunto de componentes conocidos |
| Entornos basados en contenedores | Entornos de contenedores aislados y reproducibles, y flujos de despliegue |
| FlyEnv | Gestionar runtimes por proyecto, servicios locales, sitios web y herramientas de desarrollo en un espacio de trabajo nativo |

Si ya usas XAMPP, Laragon, MAMP, Laravel Herd o ServBay, FlyEnv te ofrece otra forma de organizar y ampliar tu entorno local a medida que cambian tus proyectos.

También puedes usar FlyEnv junto con Docker. Los servicios locales nativos son prácticos para muchas tareas cotidianas. Los contenedores siguen siendo útiles cuando necesitas aislamiento, imágenes reproducibles o paridad con el entorno de despliegue.

Explora las [comparativas](/es/compare/) o lee [FlyEnv vs Docker y XAMPP](/es/guide/flyenv-vs-docker-xampp) para saber más.

<div id="construido-e-impulsado-por-su-comunidad"></div>

## Código abierto y licencias flexibles {#built-and-driven-by-its-community}

FlyEnv se desarrolla de forma abierta. Las solicitudes de la comunidad, los informes de errores, las traducciones y los pull requests ayudan a definir el producto y a ampliar los flujos de trabajo que admite.

Puedes consultar el [código fuente en GitHub](https://github.com/xpf0000/FlyEnv), [solicitar una función](https://github.com/xpf0000/FlyEnv/issues) o [enviar un pull request](https://github.com/xpf0000/FlyEnv/pulls).

Las funciones básicas de desarrollo local están disponibles gratis. Una licencia de pago elimina los límites aplicables de la versión gratuita y desbloquea las funciones que requieren licencia. FlyEnv ofrece licencias de pago único y opciones para obtener una licencia si tus contribuciones a la comunidad o el contenido que compartes cumplen los requisitos.

Consulta la [página de licencias](/es/license) para conocer las condiciones vigentes y las opciones disponibles.

## Preguntas frecuentes {#preguntas-frecuentes}

### ¿FlyEnv es solo para desarrolladores de PHP?

No. PHP es uno de los muchos runtimes compatibles. FlyEnv también admite flujos de desarrollo con Node.js, Python, Java, Go y otros lenguajes, además de bases de datos y servicios locales.

### ¿Necesito Docker para usar FlyEnv?

No. Los servicios nativos de FlyEnv funcionan sin Docker. Puedes usar Docker junto con FlyEnv en proyectos que necesiten contenedores.

### ¿Tengo que instalar todas las herramientas compatibles?

No. Instala lo que necesites y añade más herramientas cuando tus proyectos lo requieran. Puedes ampliar aún más el espacio de trabajo con complementos opcionales.

### ¿Pueden distintos proyectos usar versiones de runtime diferentes?

Sí, con los lenguajes y flujos de trabajo compatibles. Puedes instalar varias versiones y seleccionar el runtime por proyecto. Consulta la [guía de runtimes](/es/guide/project-level-runtime-environment) para más detalles.

### ¿Puedo usar FlyEnv sin herramientas de programación con IA?

Sí. Los clientes de programación con IA, las integraciones MCP y AI Memory son opcionales. Puedes usar FlyEnv exclusivamente como entorno de desarrollo local.

### ¿FlyEnv es gratis y de código abierto?

FlyEnv es de código abierto y ofrece gratis las funciones básicas de desarrollo. Algunas herramientas y límites de uso más altos requieren licencia. La [página de licencias](/es/license) explica las condiciones actuales.

<div id="proximos-pasos"></div>

<div id="para-quien-es-flyenv"></div>

## Primeros pasos {#next-steps}

Elige el paso que corresponda a lo que quieres hacer.

| Quiero… | Dónde ir |
| --- | --- |
| Instalar FlyEnv y configurar mi primer entorno | [Descarga](/es/download) y [guía de inicio rápido](/es/guide/getting-started) |
| Comprobar si mis herramientas son compatibles | [Funciones](/es/features) |
| Ejecutar una aplicación existente | [Soluciones](/es/solutions) |
| Ver el producto en acción | [Demos](/es/demos) |
| Cambiar desde otro entorno de desarrollo | [Comparativas](/es/compare/) |
| Ampliar mi espacio de trabajo | [Catálogo de complementos](/es/features/plugin-market) |
| Conectar un agente de programación con IA | [Guía del espacio de trabajo con IA y MCP](/es/guide/ai-coding-workspace-mcp) |

Empieza con un proyecto y las herramientas que necesita. Puedes ampliar tu espacio de trabajo en FlyEnv a medida que evolucione tu flujo de desarrollo.
