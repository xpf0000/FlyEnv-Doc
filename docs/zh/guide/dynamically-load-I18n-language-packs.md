# 动态加载I18n语言包

## 概述

FlyEnv 4.9.1及以上版本支持动态加载本地I18n语言包功能。本指南将详细介绍如何创建和使用自定义语言包。

## 准备工作

1. 确保FlyEnv已升级至**4.9.1或更高版本**
2. 确认您有基本的JSON文件编辑能力

## 操作步骤

### 1. 访问语言设置
- 进入 `设置` → `通用`
- 语言设置区域有两个功能按钮：
    - `加载本地语言包`：用于刷新和加载语言包
    - `打开语言包文件夹`：访问语言包目录

![语言设置界面](https://oss.macphpstudy.com/image/dynamica-i18n-1.png)

### 2. 创建语言包
1. 点击`打开语言包文件夹`
2. 查看示例语言包结构

![示例语言包文件夹](https://oss.macphpstudy.com/image/dynamica-i18n-2.png)

3. 复制示例文件夹（建议重命名为目标语言代码，如`jp`表示日语）

![示例语言包文件夹](https://oss.macphpstudy.com/image/dynamica-i18n-3.png)

4. 修改`index.json`文件：
   ```json
   {
     "lang": "jp",
     "label": "日本語"
   }
   ```

### 3. 翻译语言文件
编辑各JSON翻译文件，如`base.json`：

```json
{
  "add": "追加",
  "open": "開く",
  "enable": "有効",
  "disable": "無効",
  // 其他翻译项...
}
```

### 4. 加载和使用语言包
1. 返回FlyEnv点击`加载本地语言包`
2. 在语言选择下拉菜单中选取新添加的语言

![语言选择界面](https://oss.macphpstudy.com/image/dynamica-i18n-4.png)

3. 界面将立即切换至所选语言

![日语界面效果](https://oss.macphpstudy.com/image/dynamica-i18n-5.png)

### 5. 调试与更新
- 修改翻译文件后，需重新点击`加载本地语言包`刷新
- 实时查看修改效果

## 最佳实践
1. **备份工作**：修改前备份原始文件
2. **增量翻译**：可先翻译常用部分，逐步完善
3. **版本控制**：建议使用Git管理翻译文件

## 分享您的翻译
欢迎将您的语言包分享至：
- [GitHub仓库](https://github.com/xpf0000/FlyEnv)（通过PR提交）
- [GitHub Issues](https://github.com/xpf0000/FlyEnv/issues)
- [Discord社区](https://discord.gg/u5SuMGxjPE)
- [GitHub讨论区](https://github.com/xpf0000/FlyEnv/discussions)

## 注意事项
- 语言包文件夹名称建议使用标准语言代码（如en, jp, zh等）
- 修改配置文件时请确保JSON格式正确
- 仅修改值部分，不要改动键名