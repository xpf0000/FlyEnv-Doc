---
description: 'Convierte un binario o comando personalizado en un módulo de FlyEnv con gestión de versiones, controles de servicio, configuración y logs.'
---

# Guía de Módulos Personalizados

## Introducción

FlyEnv ya incluye numerosos módulos integrados, pero todavía hay muchos módulos funcionales de uso común en el desarrollo que aún no están integrados. Si necesitas un módulo específico en FlyEnv, te recomendamos enviar primero tu solicitud a través de [Discussions](https://github.com/xpf0000/FlyEnv/discussions) o [Issues](https://github.com/xpf0000/FlyEnv/issues).

Para cubrir esta necesidad, FlyEnv ahora presenta los **Custom Modules**, que permiten a los usuarios añadir sus propios módulos manteniendo la misma experiencia fluida que con los módulos del sistema integrados.

Esta guía muestra el proceso usando [etcd](https://github.com/etcd-io/etcd) como ejemplo. En el momento de escribir esta guía, FlyEnv no incluye un módulo nativo de etcd, aunque ya existe una solicitud abierta (#307). Agradecemos todos los comentarios de los usuarios: cada sugerencia ayuda a mejorar FlyEnv para todos.

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="https://www.youtube-nocookie.com/embed/ViKMVkh3TL8?si=whaQ5nXE1fhiT5gw" title="Reproductor de video de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Añadir un Módulo Personalizado

### Paso 1: Prepara el Binario

Descarga el paquete binario de etcd y extrae los archivos.

![Preparar el binario del módulo personalizado](https://oss.macphpstudy.com/image/custom-module-screen1.png)

### Paso 2: Crea la Configuración

Crea un archivo de configuración `etcd.yaml`:

```yaml
name: "etcd-flyenv-test"
listen-client-urls: "http://0.0.0.0:2379"
listen-peer-urls: "http://0.0.0.0:2380"
advertise-client-urls: "http://127.0.0.1:2379"
initial-advertise-peer-urls: "http://127.0.0.1:2380"
log-level: "info"
log-outputs: ["stdout"]
```

### Paso 3: Crea una Categoría de Módulo

1. Ve a **Settings -> Modules**.
2. Haz clic en el icono junto a **Site** para crear una nueva categoría de módulo.

![Crear una categoría de módulo](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### Paso 4: Añade un Módulo Nuevo

Dentro de tu nueva categoría, haz clic en **Add** para crear un módulo.

Opciones de configuración:

- **Is Module a Service?**: permite a FlyEnv gestionar el arranque/apagado y añade controles de interruptor.
- **Only one service can run at a time**: para servicios que no deberían ejecutar varias versiones simultáneamente.
- **Module Execution Items**: diferentes versiones o configuraciones del módulo.
- **Configuration Files**: aparecen como pestañas en el panel principal.
- **Log Files**: aparecen como pestañas en el panel principal.

![Añadir un módulo nuevo](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### Paso 5: Añade un Elemento de Ejecución

Haz clic en **Add** bajo Execution Items para configurar:

- **Run with sudo** (solo macOS): para comandos que requieren privilegios elevados.
- **Command/File**: el comando ejecutable o archivo de script (`.sh`/`.ps1`/`.cmd`/`.bat`).
- **PID File Path**: para monitorizar el estado del servicio.
- **Configuration Files**: editables a través del popup de operaciones.
- **Log Files**: visibles a través del popup de operaciones.

Para nuestro ejemplo de etcd:

```shell
cd "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64" && ./etcd --config-file "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64/etcd.yaml"
```

![Añadir un elemento de ejecución](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### Paso 6: Accede a tu Módulo

Tu módulo personalizado ahora aparece en la barra lateral izquierda. Haz clic en él para acceder a su interfaz.

![Acceder al módulo personalizado](https://oss.macphpstudy.com/image/custom-module-screen5.png)

Ver y editar archivos de configuración:

![Editar la configuración del módulo](https://oss.macphpstudy.com/image/custom-module-screen6.png)

### Paso 7: Inicia el Servicio

Haz clic en el botón **Start** de tu elemento de ejecución.

![Iniciar el servicio](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### Paso 8: Verifica el Funcionamiento

Ve a **Tools -> Process Kill** para confirmar que etcd está en ejecución.

![Verificar el servicio](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### Paso 9: Monitoriza los Logs

Consulta los logs de salida y de errores mediante los botones de operación.

![Logs de salida del módulo](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![Logs de errores del módulo](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## Conclusión

¡Ya has añadido con éxito un módulo personalizado a FlyEnv! Agradecemos tus comentarios y que compartas tu experiencia. Para cualquier pregunta o solicitud de funcionalidad, visita nuestras páginas de [Discussions](https://github.com/xpf0000/FlyEnv/discussions) o [Issues](https://github.com/xpf0000/FlyEnv/issues).
