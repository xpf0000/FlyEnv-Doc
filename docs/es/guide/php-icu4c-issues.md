---
description: 'Diagnostica y repara los fallos de arranque de PHP instalado con Homebrew causados por bibliotecas ICU ausentes o incompatibles en macOS.'
---

# Problemas de PHP con icu4c

Para PHP instalado con Homebrew. A veces puede ocurrir que el servicio se muestre en el panel de servicios pero aparezca en rojo y no se pueda iniciar. Muestra un mensaje de error como este:

```sh
/opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
Error: Command failed: /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
dyld[1578]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib
Referenced from: <8225FD7D-2159-3B46-AB67-18AFF8F24255> /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm
Reason: tried: '/opt/homebrew/Cellar/php/8.2.10/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)
```

No te preocupes, es un problema habitual al usar Homebrew

En esencia, ocurre con el software instalado mediante Homebrew. Hay varios programas que dependen de versiones diferentes de un mismo paquete. La dependencia se ha actualizado, mientras que el software que la utiliza no.

Necesitas ejecutar esto para actualizar Homebrew y el software que está desactualizado

```sh
brew update && brew upgrade
```

Si después de actualizar el problema persiste, reinstala el software afectado
