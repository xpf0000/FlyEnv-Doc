---
layout: doc
titleTemplate: false
title: 'FlyEnv 按项目运行时：本地开发模块与配置指南'
description: '通过 .flyenv 文件和 Shell Hook 为每个项目绑定独立运行时，让终端和 IDE 自动继承。'
head:
  - - meta
    - name: description
      content: '通过 .flyenv 文件和 Shell Hook 为每个项目绑定独立运行时，让终端和 IDE 自动继承。'
  - - meta
    - property: og:title
      content: 'FlyEnv 按项目运行时：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '通过 .flyenv 文件和 Shell Hook 为每个项目绑定独立运行时，让终端和 IDE 自动继承。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/per-project-runtimes
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/per-project-runtimes
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# FlyEnv 项目级运行时

FlyEnv 允许每个项目文件夹使用自己的运行时版本，因此旧版 PHP 代码库和现代 Node.js 应用可以在同一台机器上并行运行。版本管理部分请参阅[管理多个 Node 和 PHP 版本](/zh/guide/manage-multiple-node-php-versions)。在任意语言模块的**项目**选项卡中注册项目，选择要使用的确切二进制版本，FlyEnv 会将选择记录在项目本身。此后，从 FlyEnv 为该项目启动的终端、编辑器和命令都会自动解析正确工具链；分步流程请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)。

![FlyEnv 项目选项卡列出已注册项目及绑定的运行时版本](https://oss.macphpstudy.com/image/flyenv-version-switch.webp)

## .flyenv 的工作原理

添加项目或更改绑定版本时，FlyEnv 会在项目目录写入小型 `.flyenv` 文件。该文件是项目环境的唯一依据。

- **路径置前：** macOS 和 Linux 文件包含 `export PATH="<bin>:<bin>/bin:<bin>/sbin:$PATH"`，指向绑定运行时目录；Windows 使用等效的 PowerShell `$env:PATH` 赋值。
- **带标签且幂等：** FlyEnv 写入的每一行都带有 `#FlyEnv-ID-<projectId>` 标签，重新编辑项目时会原地改写，不会重复追加。
- **按语言模块：** 项目选项卡在 PHP、[NodeJS](/zh/features/nodejs)、[Python](/zh/features/python)、Go、Ruby、Rust、Java、.NET、Bun、Deno 等语言模块间共享；每个模块维护自己的项目列表，并在项目路径旁显示绑定版本。
- **可在应用中编辑：** 需要默认路径之外的设置时，可从项目配置视图打开并调整 `.flyenv` 文件。

![FlyEnv 写入的 .flyenv 文件及带标签的 PATH 导出行](https://oss.macphpstudy.com/image/features/per-project-runtimes-2.webp)

## zsh、bash 和 PowerShell 的 Shell 钩子

`.flyenv` 文件通过 FlyEnv 安装到 shell 启动文件中的钩子生效。

- **macOS/Linux 的 zsh 和 bash：** FlyEnv 从 `~/.zshrc` 和 `~/.bashrc` 加载辅助脚本。钩子监视目录变化，进入已注册项目时加载其 `.flyenv`，因此 `php -v` 或 `node -v` 会立即显示绑定版本。
- **仅限允许列表目录：** 钩子只会为 FlyEnv 注册并同步到允许列表的项目目录启用 `.flyenv`，磁盘其他位置的文件不会被执行。
- **Windows 的 PowerShell：** 同样机制接入 PowerShell 配置文件，同时覆盖 Windows PowerShell 和 PowerShell（pwsh）。

![切换目录后 shell 钩子加载项目 .flyenv 文件](https://oss.macphpstudy.com/image/features/per-project-runtimes-3.webp)

## IDE 和终端集成

由于绑定保存在项目而不是全局设置中，针对该文件夹启动的任何工具都会继承正确环境。

- **打开方式：** 每个项目行提供快捷方式，可在终端或 IDE 中打开文件夹（Terminal、PowerShell，以及根据语言模块提供的 VSCode、PhpStorm、WebStorm、PyCharm 或 Sublime），并自动应用项目环境。
- **作为服务运行：** 项目可从 FlyEnv 直接运行自定义启动命令或运行文件，选择端口（默认 3000，并链接为 `http://127.0.0.1:<port>`），还可内联或从 env 文件提供额外环境变量，无需终端窗口即可保持开发服务器运行。
- **快速编辑：** 双击项目行打开简洁编辑器，可修改绑定版本、端口和备注，几秒即可切换运行时。

## 站点版本选择

项目绑定负责命令行，面向浏览器的站点则有独立版本选择。在 [Host](/zh/features/local-sites-https) 模块创建的每个站点都可选择提供服务的 PHP-FPM 版本（或设为静态站点），多个 PHP-FPM 版本可同时运行且各自使用独立 socket，因此不同站点可由不同 PHP 构建提供服务。站点列表会显示服务该站点的版本，版本启动时会重新生成 Web 服务器集成配置。完整能力请参阅 [PHP 特性页面](/zh/features/php)。

![FlyEnv Host 模块站点列表显示每个站点绑定的 PHP 版本](https://oss.macphpstudy.com/image/features/per-project-runtimes-4.webp)

<FeatureRelatedLinks locale="zh" slug="per-project-runtimes" />

## 兼容性说明

Shell 钩子要求支持登录 shell：macOS 和 Linux 使用 zsh 或 bash，Windows 使用 PowerShell（Windows PowerShell 或 pwsh）；其他 shell 不会自动接入。钩子只为 FlyEnv 注册目录加载 `.flyenv`，并仅调整当前 shell 会话的路径，不会修改系统级环境变量。版本绑定只能选择已安装或在 FlyEnv 中添加的运行时，无法提供机器上不存在的版本。按站点选择 PHP 仅适用于通过 PHP-FPM（Windows 上为 FastCGI）提供服务的站点；静态站点和非 PHP 运行时不使用此功能。平台差异（如 macOS/Linux 的 Unix socket 与 Windows 的 FastCGI 工作进程）遵循底层 [PHP 模块](/zh/features/php) 行为，可用性请查看[下载页面](/zh/download)。
