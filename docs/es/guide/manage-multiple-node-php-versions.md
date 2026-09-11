---
title: 'Gestiona versiones de Node.js y PHP por proyecto'
head:
  - - meta
    - name: description
      content: 'Instala varias versiones de Node.js y PHP en FlyEnv y cámbialas automáticamente para cada proyecto mediante la integración con el shell.'
---

<script setup>
import AppGuideCommunityProof from '../../components/AppCommunityEvidence/GuideProof.vue'
import communityPosts from '../../data/community-posts.json'
import { communityEvidence } from '../../data/community-evidence'
</script>

# Cómo gestionar varias versiones de Node.js y PHP sin NVM ni PHP Monitor

Si alguna vez has escrito `nvm use 18` por centésima vez, o has peleado con el enlazado de versiones de PHP de Homebrew, conoces el dolor de la gestión de versiones. Proyectos distintos exigen versiones distintas, y cambiar entre ellas mata la productividad.

**Hay una forma mejor.** El aislamiento de versiones por proyecto elimina por completo el cambio manual. Tu entorno se adapta automáticamente al proyecto en el que estés trabajando.

## El problema de los gestores de versiones tradicionales

### Los quebraderos de cabeza de NVM
```bash
# ¿Te suena?
cd ~/projects/legacy-app
nvm use 14  # Error: version not installed
nvm install 14
cd ~/projects/new-app  
nvm use 20  # Olvidaste cambiar, ahora depuras errores extraños
```

### Las pesadillas de las versiones de PHP
```bash
# Cambio de PHP con Homebrew
brew unlink php@8.1
brew link php@8.3 --force
# Reinicia el terminal, comprueba la versión, reza para que funcione
```

### Los costes ocultos
- **Sobrecarga por cambio de contexto**: más de 30 segundos cada vez que cambias de proyecto
- **Conflictos de versiones**: las instalaciones globales chocan entre proyectos
- **Fricción en el equipo**: "en mi máquina funciona" porque las versiones difieren
- **Desajustes con CI/CD**: el entorno local difiere del de despliegue

## La solución de FlyEnv: cambio de versión automático por proyecto

FlyEnv elimina la gestión manual de versiones mediante la **detección automática del entorno**:

### Cómo funciona

1. **Crea un proyecto** en la interfaz de FlyEnv
2. **Asigna versiones** a ese proyecto (PHP 7.4, Node 14, etc.)
3. **Navega a la carpeta** en el terminal
4. **Las versiones cambian automáticamente** — sin comandos

```bash
cd ~/projects/client-legacy-wordpress
php -v  # PHP 7.4.33 (cargado automáticamente)
node -v # v14.21.3 (cargado automáticamente)

cd ~/projects/client-modern-laravel  
php -v  # PHP 8.3.4 (cargado automáticamente)
node -v # v20.11.1 (cargado automáticamente)
```

## Configurar la gestión de versiones por proyecto

### Paso 1: Crea tu proyecto

Abre FlyEnv y navega al módulo del lenguaje (PHP, Node.js, Python, etc.):

![Interfaz de gestión de proyectos](https://oss.macphpstudy.com/image/project-env1.png)

Haz clic en **"Add Project"** e introduce:
- Nombre del proyecto
- Ruta del proyecto
- Versión de runtime predeterminada

![Interfaz para añadir un proyecto](https://oss.macphpstudy.com/image/project-env2.png)

### Paso 2: Configura las variables de entorno

Cada proyecto dispone de sus propias variables de entorno aisladas:

![Configuración de variables de entorno](https://oss.macphpstudy.com/image/project-env3.png)

Las configuraciones habituales incluyen:
- `DATABASE_URL`
- `APP_ENV=local`
- `API_KEYS`
- Adiciones personalizadas al `PATH`

![Configuración de variables de entorno personalizadas](https://oss.macphpstudy.com/image/project-env4.png)

![Información de la configuración de variables de entorno personalizadas](https://oss.macphpstudy.com/image/project-env5.png)

### Paso 3: Instala varias versiones

FlyEnv permite instalar versiones ilimitadas en paralelo:

| Lenguaje | Versiones soportadas |
|----------|-------------------|
| PHP | 5.6, 7.0, 7.1, 7.2, 7.3, 7.4, 8.0, 8.1, 8.2, 8.3, 8.4+ |
| Node.js | 10.x hasta 22.x+ (todas las LTS y current) |
| Python | 2.7, 3.6, 3.7, 3.8, 3.9, 3.10, 3.11, 3.12+ |
| Java | 8, 11, 17, 21 (versiones LTS) |
| Go | 1.19, 1.20, 1.21, 1.22+ |

Instala versiones con un clic, sin compilación ni configuración compleja.

## Ejemplos de flujos de trabajo reales

### Escenario 1: Agencia que gestiona varios clientes

```
~/clients/
├── client-a-wordpress/     # PHP 7.4, Node 14
├── client-b-laravel/       # PHP 8.2, Node 18
├── client-c-symfony/       # PHP 8.3, Node 20
└── client-d-custom/        # PHP 8.1, Node 16
```

**Con herramientas tradicionales:** comandos `nvm use` y `brew switch` constantes. Frustración diaria.

**Con FlyEnv:** haz `cd` a cualquier carpeta y las versiones correctas quedan activas al instante.

### Escenario 2: Proyecto de migración de framework

Actualizando una aplicación Laravel de la versión 9 a la 11:

1. Clona el proyecto en `project-laravel11/`
2. Configúralo con PHP 8.3 en FlyEnv
3. Mantén el original en `project-laravel9/` con PHP 8.1
4. Cambia entre ambos al instante para comparar

### Escenario 3: Colaborador de open source

Contribuyendo a proyectos con requisitos distintos:

| Proyecto | Versión de PHP | Versión de Node |
|---------|------------|--------------|
| WordPress Core | 7.4 | 14 |
| Laravel | 8.3 | 20 |
| Symfony | 8.2 | 18 |
| Paquete propio | 8.1 | 16 |

Se acabó el tener que recordar qué proyecto necesita qué versión.

## Funciones avanzadas de gestión de versiones

### Integración con el terminal

FlyEnv modifica automáticamente la configuración de tu shell:

**macOS/Linux (.zshrc/.bashrc):**
```bash
# Added by FlyEnv - loads project environment on cd
source "/Applications/FlyEnv.app/Contents/Resources/helper/flyenv.sh"
```

**Windows (perfil de PowerShell):**
```powershell
# Added by FlyEnv - loads project environment on cd
# FlyEnv Auto-Load
. "{FlyEnv Data Folder}/server/bin/flyenv.ps1"
```

### Compatibilidad con IDE

Los entornos por proyecto funcionan sin fricción con:
- Terminal de VS Code
- Terminal de PHPStorm
- iTerm/Terminal.app
- Windows Terminal
- Cualquier terminal que respete las variables de entorno

### Versiones de PHP específicas por sitio

Crea sitios con versiones de PHP dedicadas:

1. Añade un sitio en el módulo Host de FlyEnv
2. Selecciona la versión de PHP por sitio
3. Cada sitio se ejecuta de forma independiente

Perfecto para probar el mismo código en varias versiones de PHP.

## Comparativa: FlyEnv frente a NVM y PHP Monitor

| Función | NVM | PHP Monitor | **FlyEnv** |
|---------|-----|-------------|------------|
| Cambio por línea de comandos | ✅ | ✅ | No necesario (automático) |
| Interfaz gráfica | ❌ | ✅ | ✅ |
| Soporte multilenguaje | Solo Node | Solo PHP | PHP, Node, Python, Go, Java, Ruby |
| Aislamiento por proyecto | Manual | Manual | Automático |
| Instalación de versiones | Por comando | Solo Homebrew | GUI con un clic |
| Soporte de Windows | ✅ | ❌ | ✅ |
| Variables de entorno | ❌ | ❌ | ✅ |
| Compartir con el equipo | ❌ | ❌ | Archivos de configuración del proyecto |

## Solución de problemas de versiones

### "Versión incorrecta en el terminal"

1. Asegúrate de que la integración con el shell de FlyEnv esté activada
2. Reinicia el terminal tras la configuración inicial
3. Comprueba que el proyecto esté registrado en FlyEnv

### "Versión no disponible"

1. Instala la versión en la interfaz del módulo de FlyEnv
2. Las descargas provienen de fuentes oficiales (sin compilación)

### "Conflictos con gestores de versiones existentes"

1. Elimina NVM de `.zshrc` (FlyEnv lo sustituye)
2. Desenlaza el PHP de Homebrew: `brew unlink php`
3. Deja que FlyEnv gestione todas las versiones

## Preguntas frecuentes (FAQ)

**P: ¿Necesito desinstalar NVM o RVM para usar FlyEnv?**

R: No es obligatorio, pero sí recomendable para evitar conflictos. FlyEnv sustituye por completo su funcionalidad con una solución más elegante.

**P: ¿Cómo funciona técnicamente el cambio automático?**

R: FlyEnv añade shims a tu `PATH` que detectan el directorio actual y cargan las versiones adecuadas según la configuración de tu proyecto.

**P: ¿Puedo seguir usando comandos de versiones si lo necesito?**

R: Sí. Aunque el cambio automático cubre el 99 % de los casos, puedes seleccionar versiones manualmente en la interfaz gráfica de FlyEnv o usar los comandos tradicionales.

**P: ¿Funciona en pipelines de CI/CD?**

R: FlyEnv está pensado para el desarrollo local. Para CI/CD, usa Docker o las versiones específicas que requiera tu entorno de producción.

**P: ¿Qué pasa si hago cd fuera de cualquier carpeta de proyecto?**

R: FlyEnv usa las versiones predeterminadas del sistema o un valor global que tú configures.

**P: ¿Pueden los miembros del equipo usar otros gestores de versiones?**

R: Sí. La configuración del proyecto en FlyEnv no interfiere con compañeros que usen otras herramientas.

<AppGuideCommunityProof :posts="communityPosts" :evidence="communityEvidence.es" locale="es" post-id="flyenv-on-linux-actually-fixed-my-php-version-headache" guide-path="/es/guide/manage-multiple-node-php-versions" />

## ¿Listo para dejar de gestionar versiones manualmente?

Recupera las horas perdidas cambiando entre versiones de Node y PHP. Deja que tu entorno se adapte a tu trabajo, y no al revés.

[Descarga FlyEnv gratis](/es/download) — Funciona en macOS, Windows y Linux

Descubre más sobre el [Aislamiento de entorno por proyecto](/es/guide/project-level-runtime-environment) o ve directamente a la [Guía de inicio rápido](/es/guide/getting-started).
