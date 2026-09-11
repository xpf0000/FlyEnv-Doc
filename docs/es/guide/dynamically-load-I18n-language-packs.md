---
description: 'Crea, valida y carga paquetes de idioma JSON personalizados en FlyEnv, con las ubicaciones de los archivos y pasos de resolución de problemas para cada plataforma.'
---

# Cargar paquetes de idioma I18n dinámicamente

## Descripción general

FlyEnv versión 4.9.1 y superiores admiten la carga dinámica de paquetes de idioma I18n locales. Esta guía ofrece instrucciones detalladas sobre cómo crear y usar paquetes de idioma personalizados.

## Requisitos previos

1. Asegúrate de que FlyEnv esté actualizado a la **versión 4.9.1 o superior**
2. Se requieren conocimientos básicos de edición de archivos JSON

## Instrucciones paso a paso

### 1. Accede a la configuración de idioma
- Ve a `Settings` → `Setting`
- El área de configuración de idioma contiene dos botones:
    - `Load Local Language Pack`: actualiza y carga los paquetes de idioma
    - `Open Language Pack Folder`: abre el directorio de paquetes de idioma

![Interfaz de configuración de idioma](https://oss.macphpstudy.com/image/dynamica-i18n-1.png)

### 2. Crea un paquete de idioma
1. Haz clic en `Open Language Pack Folder`
2. Revisa la estructura del paquete de idioma de ejemplo

![Carpeta del paquete de idioma de ejemplo](https://oss.macphpstudy.com/image/dynamica-i18n-2.png)

3. Duplica la carpeta de ejemplo (se recomienda renombrarla con el código del idioma de destino, por ejemplo, `jp` para japonés)

![Ejemplo de carpeta de paquete de idioma](https://oss.macphpstudy.com/image/dynamica-i18n-3.png)

4. Modifica el archivo `index.json`:
   ```json
   {
     "lang": "jp",
     "label": "日本語"
   }
   ```

### 3. Traduce los archivos de idioma
Edita los archivos JSON de traducción, como `base.json`:

```json
{
  "add": "追加",
  "open": "開く",
  "enable": "有効",
  "disable": "無効",
  // Other translation items...
}
```

### 4. Carga y usa los paquetes de idioma
1. Vuelve a FlyEnv y haz clic en `Load Local Language Pack`
2. Selecciona el idioma recién añadido en el menú desplegable

![Interfaz de selección de idioma](https://oss.macphpstudy.com/image/dynamica-i18n-4.png)

3. La interfaz cambiará inmediatamente al idioma seleccionado

![Ejemplo de interfaz en japonés](https://oss.macphpstudy.com/image/dynamica-i18n-5.png)

### 5. Depuración y actualizaciones
- Después de modificar los archivos de traducción, haz clic de nuevo en `Load Local Language Pack` para actualizar
- Observa los cambios en tiempo real

## Mejores prácticas
1. **Copia de seguridad**: haz siempre una copia de seguridad de los archivos originales antes de modificarlos
2. **Traducción incremental**: empieza por los términos más utilizados y amplía gradualmente
3. **Control de versiones**: usa Git para gestionar los archivos de traducción

## Comparte tus traducciones
Aceptamos contribuciones a través de:
- [Repositorio de GitHub](https://github.com/xpf0000/FlyEnv) (mediante PR)
- [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- [Comunidad de Discord](https://discord.gg/u5SuMGxjPE)
- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

## Notas importantes
- Nomenclatura recomendada para las carpetas de paquetes de idioma: códigos de idioma estándar (por ejemplo, en, jp, zh)
- Asegúrate de que el formato JSON siga siendo correcto al editar los archivos
- Modifica solo los valores; no cambies los nombres de las claves
