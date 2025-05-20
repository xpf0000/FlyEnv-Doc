# Dynamically Load I18n Language Packs

## Overview

FlyEnv version 4.9.1 and above supports dynamic loading of local I18n language packs. This guide provides detailed instructions on how to create and use custom language packs.

## Prerequisites

1. Ensure FlyEnv is upgraded to **version 4.9.1 or higher**
2. Basic JSON file editing skills are required

## Step-by-Step Instructions

### 1. Access Language Settings
- Navigate to `Settings` → `Setting`
- The language settings area contains two buttons:
    - `Load Local Language Pack`: Refreshes and loads language packs
    - `Open Language Pack Folder`: Accesses the language pack directory

![Language Settings Interface](https://oss.macphpstudy.com/image/dynamica-i18n-1.png)

### 2. Create a Language Pack
1. Click `Open Language Pack Folder`
2. View the example language pack structure

![Example Language Pack Folder](https://oss.macphpstudy.com/image/dynamica-i18n-2.png)

3. Duplicate the example folder (recommended to rename using target language code, e.g., `jp` for Japanese)

![Language Pack Folder Example](https://oss.macphpstudy.com/image/dynamica-i18n-3.png)

4. Modify the `index.json` file:
   ```json
   {
     "lang": "jp",
     "label": "日本語"
   }
   ```

### 3. Translate Language Files
Edit JSON translation files, such as `base.json`:

```json
{
  "add": "追加",
  "open": "開く",
  "enable": "有効",
  "disable": "無効",
  // Other translation items...
}
```

### 4. Load and Use Language Packs
1. Return to FlyEnv and click `Load Local Language Pack`
2. Select the newly added language from the dropdown menu

![Language Selection Interface](https://oss.macphpstudy.com/image/dynamica-i18n-4.png)

3. The interface will immediately switch to the selected language

![Japanese Interface Example](https://oss.macphpstudy.com/image/dynamica-i18n-5.png)

### 5. Debugging and Updates
- After modifying translation files, click `Load Local Language Pack` again to refresh
- View changes in real-time

## Best Practices
1. **Backup**: Always backup original files before making changes
2. **Incremental Translation**: Start with frequently used terms and expand gradually
3. **Version Control**: Use Git to manage translation files

## Share Your Translations
We welcome contributions to:
- [GitHub Repository](https://github.com/xpf0000/FlyEnv) (via PR)
- [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- [Discord Community](https://discord.gg/u5SuMGxjPE)
- [GitHub Discussions](https://github.com/xpf0000/FlyEnv/discussions)

## Important Notes
- Recommended language pack folder naming: standard language codes (e.g., en, jp, zh)
- Ensure JSON format remains correct when editing files
- Only modify values, do not change key names