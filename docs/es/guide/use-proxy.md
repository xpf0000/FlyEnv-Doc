---
description: 'Configura las variables de proxy HTTP, HTTPS y SOCKS en FlyEnv para que las descargas del terminal y los instaladores puedan usar tu proxy local.'
---

# Usar proxy

Esta referencia está creada específicamente para usuarios con "problemas de red" (como los usuarios de China). Si tu red funciona con normalidad, puedes omitir esta referencia.

La mayoría de las VPN no se aplican automáticamente en el terminal ni en FlyEnv. Si quieres que la VPN funcione en FlyEnv, debes realizar las siguientes operaciones:

1. Algunas herramientas VPN, como ClashX, tienen la función **"Copy terminal proxy command"** (copiar comando de proxy para el terminal). Simplemente usa esa función, copia el comando de proxy y pégalo en **FlyEnv -> Settings -> Proxy Setting**.

2. Todas las VPN tienen un puerto de proxy. Haz clic en **FlyEnv -> Settings -> Proxy Setting -> Quick Setup** e introduce `ip:puerto`, por ejemplo `127.0.0.1:7890`. Luego haz clic en **OK**. FlyEnv generará los comandos de proxy automáticamente.
