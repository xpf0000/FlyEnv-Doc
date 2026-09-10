---
layout: doc
titleTemplate: false
title: 'FlyEnv Python：本地开发模块与配置指南'
description: '安装和切换 Python、为项目绑定运行时，并创建 FastAPI 或 Django 项目。'
head:
  - - meta
    - name: description
      content: '安装和切换 Python、为项目绑定运行时，并创建 FastAPI 或 Django 项目。'
  - - meta
    - property: og:title
      content: 'FlyEnv Python：本地开发模块与配置指南'
  - - meta
    - property: og:description
      content: '安装和切换 Python、为项目绑定运行时，并创建 FastAPI 或 Django 项目。'
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:url
      content: https://flyenv.com/zh/features/python
  - - meta
    - property: og:image
      content: https://oss.macphpstudy.com/image/app-icon.png
  - - link
    - rel: canonical
      href: https://flyenv.com/zh/features/python
---

<script setup>
import FeatureRelatedLinks from '../../components/FeatureRelatedLinks.vue'
</script>

# 使用 FlyEnv 进行本地 Python 开发（FlyPython）

Python 是通用编程语言，广泛用于 Web 后端、脚本、数据分析、自动化和机器学习。FlyEnv 的 Python 模块结合版本管理与项目运行时流程：安装所需解释器，决定终端使用的版本，并为每个项目绑定特定 Python。应用需要持续运行时，FlyEnv 可将其作为托管项目服务运行，配置独立端口和环境变量，并通过内置模板一键创建常见 Python 框架项目。

![FlyEnv Python 模块概览，包含项目、服务和版本管理器选项卡](https://oss.macphpstudy.com/image/features/python-1.webp)

## Python 版本管理

从 **Python → 版本管理器** 并行安装和管理多个 Python 版本。FlyEnv 会从多个来源发现解释器，现有版本与托管版本一起显示。

- **macOS：** 可通过版本管理器使用 Homebrew 或 MacPorts 安装 Python；FlyEnv 还会自动扫描 MacPorts 框架目录（`/opt/local/Library/Frameworks/Python.framework/Versions`）。
- **Linux：** 通过 Homebrew 安装 Python。
- **Windows：** FlyEnv 从在线列表下载官方 Python 安装包，解压到应用目录并自动初始化 pip，新安装即可使用。
- **自定义目录：** 指定包含自有 Python 构建的目录，与托管版本一起列出。

![FlyEnv Python 版本管理器列出已安装和可用版本](https://oss.macphpstudy.com/image/features/python-2.webp)

## 命令行版本切换

**服务**选项卡控制终端命令使用的 Python 版本。尽管名称为“服务”，这里管理的是版本和路径，而不是长期运行的服务进程；Python 模块本身不会运行后台服务。

- **路径切换：** 选择版本后，FlyEnv 将其 bin 目录加入 `PATH`，新终端中的 `python` 和 `pip` 即指向该版本。
- **别名和备注：** 为每个安装设置简短别名和备注，便于在版本列表中区分相似构建。

![FlyEnv Python 服务选项卡管理版本和 PATH 条目](https://oss.macphpstudy.com/image/features/python-3.webp)

## 项目级 Python 运行时

不同项目通常需要不同 Python 版本。在 **Python → 项目**中注册项目文件夹并绑定专用解释器。

- **按项目运行时：** 选定的 Python 写入项目目录中的 `.flyenv` 文件，因此从 FlyEnv 启动的终端和编辑器会自动加载正确环境。详情请参阅[项目级运行时环境指南](/zh/guide/project-level-runtime-environment)。
- **作为服务运行：** 应用需要持续运行时，在项目编辑器中启用**作为服务运行**，配置启动命令、TCP 端口和环境变量（可直接填写或使用 env 文件）；项目列表会显示启动/停止控件及输出日志。
- **在工具中打开：** 从项目行打开终端或 IDE，项目环境会自动加载，包括**在 PyCharm 中打开**。

有关 Python、Node.js 和 Go 项目服务模型的完整流程，请参阅[无需 Docker 部署 Node.js、Python 和 Go](/zh/guide/deploy-nodejs-python-go-without-docker)。

![FlyEnv Python 项目列表及按项目绑定的解释器](https://oss.macphpstudy.com/image/features/python-4.webp)

## 新项目模板

**Python → 新建项目**可在不离开应用的情况下创建常见 Python 应用。FlyEnv 在内置终端运行框架创建命令，并根据操作系统使用 pip 或 uv，你可以看到项目创建的真实输出。

支持的模板包括：[FastAPI](/zh/solutions/fastapi)、[Django](/zh/solutions/django)、Flask、Streamlit、Masonite、uv、Wagtail、Sanic、Litestar、Mezzanine 和 PDM。相关解决方案页面展示每个框架与数据库及浏览器站点组成的完整本地技术栈。

![FlyEnv 新建 Python 项目对话框和框架模板选择](https://oss.macphpstudy.com/image/features/python-5.webp)

<FeatureRelatedLinks locale="zh" slug="python" />

## 兼容性说明

FlyEnv 管理本地 Python 运行时选择和项目进程入口，但不保证每个 Python 版本、框架模板或第三方包都能在所有操作系统上使用。软件包安装和依赖管理由项目自行负责。请根据项目需求确认已安装解释器，并以[下载页面](/zh/download)和当前发行说明为支持信息来源。
