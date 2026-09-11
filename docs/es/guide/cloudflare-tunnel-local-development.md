---
title: 'Cloudflare Tunnel para desarrollo local'
head:
  - - meta
    - name: description
      content: 'Expón un servicio local de FlyEnv a través de Cloudflare Tunnel, configura hostnames públicos y dominios personalizados, y revisa los logs de acceso.'
---

# Expón tu localhost a internet: Cloudflare Tunnel como alternativa a ngrok

¿Necesitas compartir tu sitio de desarrollo local con un cliente? ¿Probar webhooks que requieren una URL pública? Seguramente has usado ngrok, y has pagado sus cuotas mensuales por funciones básicas como los dominios personalizados.

**Cloudflare Tunnel es otra opción.** Cloudflare Tunnel (antes Argo Tunnel) ofrece:
- ✅ Hostnames públicos en dominios que gestionas en Cloudflare
- ✅ Hostnames estables que pueden reutilizarse tras reiniciar un tunnel
- ✅ Uso sujeto a tu plan y políticas actuales de Cloudflare
- ✅ **Configuración en un clic en FlyEnv: sin línea de comandos**

## Por qué los desarrolladores están abandonando ngrok

| Función | ngrok Free | ngrok Pro (8 $/mes) | **Cloudflare Tunnel** |
|---------|------------|-------------------|----------------------|
| Dominios personalizados | ❌ | ✅ | ✅, según el plan |
| Hostnames estables | ❌ | ✅ | ✅, con DNS gestionado |
| Soporte HTTP/2 | ✅ | ✅ | ✅ |
| Límites de uso | Depende del plan | Depende del plan | Consulta las condiciones actuales de Cloudflare |
| Autenticación | ❌ | ✅ | Disponible a través de Cloudflare Access |
| **Complejidad de configuración** | Simple | Simple | **Un clic en FlyEnv** |

## Configuración en un clic con FlyEnv (recomendado)

FlyEnv integra Cloudflare Tunnel directamente en la interfaz. Sin comandos de terminal, sin archivos de configuración: solo apunta, haz clic y comparte.

### Paso 1: Obtén tu token de API de Cloudflare

1. Inicia sesión en el [Panel de Cloudflare](https://dash.cloudflare.com)

![Iniciar sesión en el panel de Cloudflare](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-1.webp)

2. Ve a **My Profile** (arriba a la derecha) → **API Tokens**

![Ir a My Profile](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-2.webp)

3. Haz clic en **Create Token**

![Hacer clic en Create Token](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-3.webp)

4. Usa la plantilla **"Cloudflare Tunnel"**, o crea un token personalizado con estos permisos:
   - **Account:Cloudflare Tunnel:Edit** — Para gestionar tunnels
   - **Zone:Zone:Read** — Para listar tus dominios
   - **Zone:DNS:Edit** — Para crear registros DNS

5. Selecciona los **Zone Resources** (dominios) que quieres usar

![Crear token personalizado](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-4.webp)
![Configurar permisos paso 1](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-5.webp)
![Configurar permisos paso 2](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-6.webp)
![Configurar permisos paso 3](https://oss.macphpstudy.com/image/Cloudflare-Tunnel-api-key-setup-7.webp)

6. Copia el token generado

### Paso 2: Configura FlyEnv

1. Abre FlyEnv → módulo **Cloudflare Tunnel** y haz clic en el **botón del icono de más**
2. Pega tu **API Token**
3. FlyEnv obtiene automáticamente tus dominios disponibles

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-1.webp)

### Paso 3: Crea tu tunnel

Una vez cargadas las zonas:

1. **Selecciona la zona**: Elige el dominio que quieres usar (p. ej., `yourdomain.com`)
2. **Define el subdominio**: Introduce el subdominio deseado (p. ej., `dev` → crea `dev.yourdomain.com`)
3. **Define la URL local**: Elige tu URL de desarrollo local (p. ej., `http://localhost:3000` o `https://myproject.test`)
4. Haz clic en **"Ok"**

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-2.webp)

¡Eso es todo! FlyEnv se encarga de todo internamente:
- ✅ Crea el Cloudflare Tunnel
- ✅ Configura los registros DNS
- ✅ Establece las reglas de enrutamiento
- ✅ Genera los certificados SSL

### Paso 4: Inicia el tunnel

Haz clic en el botón **"Start"** en el módulo Cloudflare Tunnel.

Tu sitio local ya está en línea en `https://dev.yourdomain.com`

![Módulo Cloudflare Tunnel de FlyEnv](https://oss.macphpstudy.com/image/cloud-tunnel-3.webp)

### Gestión de varios tunnels

Crea tantos tunnels como necesites:

| Subdominio | URL local | Propósito |
|-----------|-----------|---------|
| `dev` | `https://myapp.test` | Sitio principal de desarrollo |
| `api` | `http://localhost:3000` | Servidor de API |
| `admin` | `http://localhost:8080` | Panel de administración |
| `client-a` | `https://client-a.test` | Vista previa para el cliente |

Todo gestionado desde una única interfaz: inicia, detén o elimina tunnels con un clic.

## Configuración manual (línea de comandos)

Para usuarios avanzados que prefieren el control desde la línea de comandos, aquí está el método de configuración tradicional:

### Requisitos previos

1. Una cuenta de Cloudflare con un plan compatible con las funciones que necesitas
2. Un dominio añadido a Cloudflare
3. Cloudflared instalado (disponible en el módulo Cloudflared de FlyEnv)

### Paso 1: Autentícate con Cloudflare

```bash
cloudflared tunnel login
```

Esto abre una ventana del navegador para autorizar el acceso a Cloudflare.

### Paso 2: Crea tu tunnel

```bash
# Create a named tunnel
cloudflared tunnel create dev-localhost

# Output will show your Tunnel ID
# Save this - you'll need it for configuration
```

### Paso 3: Configura la ruta DNS

```bash
# Route your subdomain to the tunnel
cloudflared tunnel route dns dev-localhost dev.yourdomain.com
```

### Paso 4: Crea el archivo de configuración

Crea `config.yml`:

```yaml
tunnel: <your-tunnel-id>
credentials-file: /Users/username/.cloudflared/<tunnel-id>.json

ingress:
  - hostname: dev.yourdomain.com
    service: http://localhost:80
  - hostname: api.yourdomain.com
    service: http://localhost:3000
  - service: http_status:404
```

### Paso 5: Inicia el tunnel

```bash
cloudflared tunnel run dev-localhost
```

**Comparación:** El enfoque de la interfaz de FlyEnv elimina todos estos pasos: solo introduces el token de API, seleccionas la zona, defines el subdominio y haces clic en guardar.

## Casos de uso habituales

### 1. Vistas previas para clientes

**Antes:** "Déjame desplegarlo en staging... (30 minutos después)"

**Después:** Comparte `https://feature-branch.yourdomain.com` al instante: solo crea un tunnel e inícialo.

### 2. Desarrollo de webhooks

Probando webhooks de Stripe, GitHub o Slack en local:

**Configuración en FlyEnv:**
1. Crea el tunnel: `webhooks.yourdomain.com` → `http://localhost:3000/webhooks`
2. Inicia el tunnel
3. Configura el endpoint del webhook en el panel de Stripe/GitHub

### 3. Pruebas en dispositivos móviles

Prueba diseños responsivos en dispositivos reales:
- El iPhone accede a `https://mobile.yourdomain.com`
- Android accede a la misma URL
- Ambos llegan a tu servidor de desarrollo local

### 4. Desarrollo de API con HTTPS

Algunas API requieren callbacks HTTPS. Cloudflare Tunnel proporciona:
- Certificados SSL automáticos
- Terminación HTTPS en el edge de Cloudflare
- Conexión segura a tu localhost

### 5. Colaboración en equipo

Comparte el trabajo en curso con tus compañeros:
- Cada desarrollador crea su propio tunnel
- O usa un tunnel compartido que apunte a un servidor del equipo

## Solución de problemas

### "Cannot get zones" en FlyEnv

**Causa**: Token de API no válido o permisos insuficientes

**Solución**:
1. Comprueba que el token tiene estos permisos: Zone:Read, DNS:Edit, Cloudflare Tunnel:Edit
2. Asegúrate de que el token incluye la zona que quieres usar
3. Prueba a crear un token nuevo con la plantilla "Cloudflare Tunnel"

### "Tunnel creation failed"

**Causa**: Problemas de red o nombre de tunnel duplicado

**Solución**:
1. Comprueba la conexión a internet
2. Prueba con un subdominio diferente
3. Comprueba si el tunnel ya existe en el panel de Cloudflare

### "Tunnel started but site not accessible"

**Causa**: URL local incorrecta o servicio local no iniciado

**Solución**:
1. Verifica la URL local en la configuración del tunnel (p. ej., `http://localhost:3000`)
2. Asegúrate de que tu servidor de desarrollo local está realmente en ejecución
3. Prueba a acceder a la URL local directamente en el navegador primero

### El DNS no se propaga

**Causa**: Caché de DNS de Cloudflare

**Solución**:
1. Espera de 1 a 5 minutos después de crear el tunnel
2. Comprueba los registros DNS en el panel de Cloudflare
3. Asegúrate de que la nube naranja está activada (proxied)

## Configuración avanzada

### Autenticación (Zero Trust)

Añade inicio de sesión con Google/GitHub a tu tunnel:

1. En el [Panel de Cloudflare Zero Trust](https://one.dash.cloudflare.com)
2. Ve a **Access** → **Applications**
3. Crea una nueva aplicación para tu subdominio
4. Configura los proveedores de autenticación
5. Aplícala al hostname de tu tunnel

Ahora `dev.yourdomain.com` requiere iniciar sesión antes de mostrar tu sitio local.

### Balanceo de carga (varios tunnels)

Para alta disponibilidad durante demos:

```yaml
# config.yml - Manual configuration example
# On Machine A
tunnel: tunnel-id-1
# On Machine B  
tunnel: tunnel-id-2

# Both route to same hostname
# Cloudflare load balances between them
```

**Nota:** Para la mayoría de los casos de uso de desarrollo, un solo tunnel es suficiente.

## Comparación: FlyEnv frente a la configuración manual

| Aspecto | Manual (línea de comandos) | **Interfaz de FlyEnv** |
|--------|----------------------|---------------|
| **Tiempo de configuración** | 15-30 minutos | 2 minutos |
| **Comandos que recordar** | 10+ | 0 |
| **Archivos de configuración** | Varios archivos YAML | Ninguno |
| **Gestión de tunnels** | Comandos de terminal | Apuntar y hacer clic |
| **Varios tunnels** | Complejo | Fácil |
| **Iniciar/detener** | `cloudflared tunnel run` | Un botón |

## Preguntas frecuentes (FAQ)

**P: ¿Es Cloudflare Tunnel realmente gratis?**

R: Cloudflare ofrece un plan gratuito que puede ser suficiente para muchos tunnels de desarrollo. Los límites y las funciones de Access incluidas pueden cambiar, así que consulta la documentación actual de los planes de Cloudflare antes de depender de una función.

**P: ¿Necesito un plan de pago de Cloudflare?**

R: No necesariamente. Muchos flujos de trabajo de vista previa local funcionan con el plan gratuito, pero los requisitos dependen del hostname, las políticas de Access, el uso y las condiciones actuales de Cloudflare.

**P: ¿Puedo usar cualquier dominio?**

R: Necesitas controlar el DNS del dominio (añadirlo a Cloudflare). Los dominios gratuitos funcionan, o puedes usar un subdominio de un dominio que poseas.

**P: ¿Qué tan seguro es esto?**

R: El conector inicia una conexión saliente, por lo que no necesitas abrir ningún puerto de entrada en el router. El hostname público sigue siendo accesible desde internet a menos que añadas políticas de Cloudflare Access adecuadas, autenticación en la aplicación y controles en el origen.

**P: ¿Esto ralentizará mi desarrollo local?**

R: Impacto mínimo. El tunnel añade ~50-100ms de latencia: aceptable para vistas previas y webhooks. Para el desarrollo local, sigues usando `localhost` directamente.

**P: ¿Y los WebSockets?**

R: Cloudflare Tunnel admite WebSockets, pero el comportamiento de la aplicación sigue dependiendo de tu origen, la configuración del proxy y tu plan de Cloudflare.

**P: ¿Puedo usar el mismo tunnel en varias máquinas?**

R: No: cada tunnel está vinculado a una máquina. Crea tunnels separados para diferentes máquinas o desarrolladores.

**P: ¿Qué pasa cuando detengo el tunnel?**

R: La URL pública deja de ser accesible, pero los registros DNS permanecen. Cuando reinicies el tunnel (incluso días después), la misma URL volverá a funcionar.

**P: ¿Puedo compartir tunnels con miembros del equipo?**

R: Los miembros del equipo pueden crear sus propios tunnels apuntando a sus máquinas locales. Para entornos compartidos, considera desplegar en un servidor de staging.

**P: ¿Necesito mantener FlyEnv en ejecución?**

R: Sí. El tunnel se ejecuta a través del módulo Cloudflare Tunnel de FlyEnv. Cerrar FlyEnv detiene el tunnel.

## ¿Listo para abandonar ngrok?

Cloudflare Tunnel integrado con FlyEnv proporciona una interfaz cómoda para configurar hostnames públicos para el desarrollo local.

[Descarga FlyEnv](/es/download) para empezar con el soporte integrado de Cloudflare Tunnel.

¿Quieres explorar más funciones de red? Consulta nuestra guía sobre [configuración de proxy inverso](/es/guide/reverse-proxy-nestjs-multi-servers) o [dominios personalizados y SSL automático](/es/guide/host).
