---
layout: doc
titleTemplate: false
title: 'Complemento AI Memory: memoria local persistente para agentes de programación | FlyEnv'
description: 'Proporciona memoria local persistente a tus agentes de programación mediante MCP. Gestiona conocimientos globales y por proyecto, explora un mapa 3D, conecta clientes y crea copias de seguridad.'
---

# AI Memory en FlyEnv

AI Memory ofrece a tus agentes de programación con IA un lugar compartido donde guardar preferencias, conocimientos del proyecto y decisiones de desarrollo entre sesiones. Conserva una convención de código para tu próxima conversación, guarda el motivo de una decisión de arquitectura o permite que otro cliente conectado recupere lo que guardó un agente anterior.

Las memorias se almacenan localmente en el directorio de datos del complemento de FlyEnv, con ámbitos separados para las preferencias globales y los conocimientos de cada proyecto. El complemento incluye un mapa de memorias en 3D, búsqueda y edición, configuración de conexiones de clientes, copias de seguridad y restauración, y un registro de la actividad de las herramientas de memoria.

Instala **AI Memory** desde **[Configuración → Catálogo de complementos](/es/features/plugin-market)** y abre su entrada en la barra lateral. No necesita descargar un runtime adicional ni iniciar una versión de servicio. Los agentes acceden a las memorias guardadas mediante el **[Servidor MCP](/es/features/mcp-server)** de FlyEnv.

![AI Memory en FlyEnv con el mapa 3D interactivo de memorias de un proyecto y sus categorías](https://oss.macphpstudy.com/image/features/plugin/ai-memory-map.webp)

## Mantén las preferencias globales y separa los conocimientos por proyecto

Utiliza **Global** para la información que se aplica a todos los proyectos, como tu idioma o estilo de código preferidos. Selecciona un proyecto para guardar su arquitectura, detalles de configuración, decisiones y soluciones reutilizables. Una conexión global de cliente funciona en distintos proyectos, pero no combina sus colecciones de memorias.

Las memorias de proyecto se asocian a un directorio raíz de proyecto confirmado. Dos proyectos sin relación que tengan el mismo nombre de carpeta permanecen separados. En la vista de gestión, selecciona un proyecto existente o elige una carpeta de proyecto para trabajar con su colección.

El complemento guarda el contenido y los metadatos de las memorias fuera de tu repositorio de código. Puedes utilizar instrucciones de proyecto para orientar el comportamiento de un agente sin añadir las propias memorias almacenadas a tu base de código.

![Selector de ámbito de AI Memory con Global, proyectos guardados y una opción de ruta de proyecto](https://oss.macphpstudy.com/image/features/plugin/ai-memory-project-selection.webp)

## Explora un mapa de memorias en 3D

La pestaña **Memorias** muestra la colección seleccionada como un mapa 3D interactivo. Las memorias se agrupan por tipo: preferencias, hechos, eventos, procedimientos, estados de proyecto, decisiones, observaciones y notas. Las conexiones indican temas o etiquetas compartidos y te ayudan a explorar conocimientos relacionados.

Arrastra para girar el mapa, acerca o aleja la vista, pausa la órbita o reduce el movimiento. Selecciona una categoría para explorar sus registros y elige una memoria para abrir sus detalles junto al mapa. La vista de lista ofrece otra forma de localizar y abrir un registro.

Busca por palabras clave para filtrar la colección. La búsqueda de los agentes encuentra coincidencias en títulos, resúmenes, temas y etiquetas; leer el contenido Markdown completo es una operación independiente. Asigna a cada memoria un título y un resumen útiles para poder encontrarla más adelante.

![Categoría de preferencias de AI Memory con una lista de registros, conexiones entre memorias relacionadas y los detalles de la memoria seleccionada](https://oss.macphpstudy.com/image/features/plugin/ai-memory-detail.webp)

## Crea, edita y mantén las memorias

Utiliza **Nueva memoria** para añadir un registro manualmente o deja que un agente conectado lo guarde mediante MCP. Una memoria incluye tipo, título, resumen, tema, etiquetas, contenido Markdown e información de origen.

Abre un registro para leer su contenido, consultar su origen y revisión o editarlo. Las actualizaciones conservan el historial de revisiones y el motivo del cambio. **Archivar** retira una memoria de los resultados activos habituales y la conserva para poder restaurarla más adelante. **Eliminar permanentemente** elimina el registro y su historial tras la confirmación.

El cuerpo de cada memoria admite hasta 16 KiB de texto UTF-8. Centra cada registro en un único hecho, decisión o procedimiento útil para que los agentes recuperen el conocimiento pertinente sin cargar una conversación entera.

![Diálogo Nueva memoria de AI Memory con campos de título, resumen, contenido Markdown, tipo, tema, etiquetas y origen](https://oss.macphpstudy.com/image/features/plugin/ai-memory-new-memory.webp)

## Conecta tu agente de programación

Abre **Conectar un agente** y elige un cliente instalado. La configuración con un clic está disponible para **[Claude Code](/es/features/claude-code)**, **[Antigravity CLI](/es/features/antigravity-cli)**, **[Codex](/es/features/codex)**, **[GitHub Copilot CLI](/es/features/github-copilot-cli)**, **[OpenCode](/es/features/opencode)** y **[Kimi](/es/features/kimi)**.

La configuración con un clic inicia el servidor MCP local si hace falta, activa las cinco herramientas de memoria, registra la conexión MCP global del cliente elegido e instala las instrucciones de memoria globales. Revisa el resultado de cada paso y reintenta los que queden pendientes. Los ajustes avanzados también permiten instalar instrucciones para un proyecto concreto.

![Página Conectar un agente de AI Memory con seis clientes compatibles, ajustes genéricos y tres pasos de configuración automática para Codex](https://oss.macphpstudy.com/image/features/plugin/ai-memory-connect-agent.webp)

Para otros clientes MCP, elige **Configuración genérica**. Copia la configuración HTTP o utiliza la opción stdio si tu cliente la necesita. Añade las instrucciones de memoria al archivo de instrucciones compatible con el cliente o a su prompt del sistema. La conexión stdio requiere Node.js local y el puente de FlyEnv.

Tras conectar los clientes, abre una sesión nueva desde la ruta absoluta a la raíz confirmada del proyecto. Pide al primer cliente que guarde un dato de ejemplo, como «El comando de la prueba de humo es `npm test`», y te indique el ID y la revisión devueltos. Abre una sesión nueva en el segundo cliente conectado con la misma raíz y pídele que busque «prueba de humo» y recupere el registro. Comprueba que coinciden el ID y la revisión y revisa ambas operaciones en **Registro de llamadas**.

La prueba de aceptación de la versión preliminar para desarrolladores verificó el intercambio en ambos sentidos entre Codex y Kimi. También recuperó un registro después de reiniciar FlyEnv. La configuración escribe los ajustes de conexión y las instrucciones. Guardar y recuperar conocimientos depende de las instrucciones del agente y de las llamadas a herramientas que realmente haga.

## Cinco herramientas MCP para memoria persistente

AI Memory añade cinco herramientas al servidor MCP de FlyEnv:

- **`flyenv_memory_search`:** busca resúmenes de memorias coincidentes en un ámbito global o de proyecto.
- **`flyenv_memory_get`:** lee una memoria completa, incluida una revisión seleccionada.
- **`flyenv_memory_store`:** guarda una memoria nueva con su origen.
- **`flyenv_memory_update`:** modifica un registro existente con un motivo y la revisión esperada.
- **`flyenv_memory_forget`:** elimina de forma permanente un registro y su historial.

Usa `include_global=true` en una búsqueda de proyecto para incluir memorias globales. Lee cada resultado en el ámbito que indique. Si una actualización devuelve un conflicto, consulta la última revisión antes de decidir qué cambiar. Si una escritura agota el tiempo de espera o devuelve `unknown`, repite la solicitud con el mismo `request_id` y los mismos parámetros para confirmar el resultado.

Gestiona la disponibilidad de las herramientas y sus políticas de aprobación en los ajustes MCP de FlyEnv. Mantén FlyEnv en ejecución, con el complemento habilitado y el servidor MCP disponible, mientras los agentes utilicen las herramientas. Distintos clientes conectados pueden acceder a la misma colección almacenada si utilizan el mismo ámbito y directorio raíz de proyecto.

![Pestaña Herramientas de MCP de FlyEnv con el grupo AI Memory, los interruptores de las cinco herramientas de memoria y las políticas de aprobación](https://oss.macphpstudy.com/image/features/plugin/ai-memory-mcp-tools.webp)

## Crea copias de seguridad, restaura y vuelve a asociar proyectos trasladados

Abre **Mantenimiento → Crear copia de seguridad ahora** para crear una carpeta de copia de seguridad completa con comprobaciones de integridad. Para trasladar las memorias a otro equipo, copia toda la carpeta y elige **Restaurar desde copia de seguridad** en una instalación compatible de AI Memory.

La restauración sustituye las colecciones de memorias actuales y guarda primero una copia de seguridad de los datos existentes. Las copias de seguridad de memoria incluyen los registros globales y de proyecto; los archivos de código de tus proyectos y las configuraciones de los clientes de IA son independientes.

Si has trasladado un proyecto, utiliza **Directorios de proyectos** en Mantenimiento para elegir su nueva carpeta. La reasociación conserva la identidad del proyecto, sus memorias y su historial de revisiones, y actualiza la ruta guardada. También puedes cambiar la carpeta de los proyectos disponibles desde **Mostrar todos los proyectos → Cambiar carpeta**.

Si la carpeta seleccionada ya tiene memorias de proyecto, FlyEnv pregunta si las colecciones pertenecen al mismo proyecto. Puedes combinarlas conservando todos los registros y revisiones, o mantenerlas separadas y elegir otro directorio. La combinación no sobrescribe ni elimina automáticamente las memorias duplicadas.

![Página Mantenimiento de AI Memory con copia de seguridad, restauración, comprobaciones de asociaciones de proyectos, directorios de proyectos y carpeta de datos](https://oss.macphpstudy.com/image/features/plugin/ai-memory-maintenance.webp)

## Revisa la actividad de los agentes

La pestaña **Registro de llamadas** muestra la actividad y los resultados de las herramientas de memoria durante la sesión actual de FlyEnv. Actualiza la lista después de utilizar un agente y despliega un registro para consultar los detalles de la petición y la respuesta.

La vista mantiene hasta 200 entradas detalladas en memoria y excluye los cuerpos completos de las memorias. Estos registros se borran al cerrar FlyEnv; las memorias guardadas permanecen en disco. El almacenamiento local describe dónde guarda los datos el complemento: el contenido recuperado mediante MCP se sigue enviando al cliente de IA que hayas elegido. Tu cliente puede enviar el contenido recuperado a su proveedor de modelos. Utiliza un registro de prueba sin información sensible para comprobar la conexión.

![Pestaña Registro de llamadas de AI Memory con la actividad de las herramientas durante la sesión, resultados, duraciones y un botón de actualización](https://oss.macphpstudy.com/image/features/plugin/ai-memory-call-records.webp)

Utiliza el **[Servidor MCP](/es/features/mcp-server)** para acceder al resto de herramientas de entorno de FlyEnv o vuelve al **[resumen de funcionalidades](/es/features#plugins)** para explorar otros complementos.
