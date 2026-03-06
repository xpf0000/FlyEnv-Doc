# FlyEnv 部署任意Node.JS/Python/Go项目使用指南

## 概述

FlyEnv支持部署任意ReactJS/VUE/NEXTJS(填充常见项目)等Node.JS/Python/Go项目。通过FlyEnv的自定义模块， 用户可以创建栏目，管理部署项目， 管理项目服务。
结合FlyEnv的站点管理，反向代理，自动SSL证书， 网络隧道等功能。 实现本地以及远程的https域名访问部署。

本指南以ReactJS的NextJS项目为例，介绍如何部署和设置项目

---

## 新建NextJS项目

已有项目可直接查看下一章节

进入NodeJS模块， 点击新建项目tab， 点击 Next.js。新建项目

项目创建成功后， 进入项目目录，执行安装和构建

```
cd "项目目录"
npm install
npm run build
```

## 使用自定义模块部署项目

### 步骤1：创建模块分类

1. 进入 设置 → 模块
2. 点击"站点"旁的"+"图标创建新模块分类
3. 输入分类名。比如 ReactJS。
4. 点击确定创建分类。

![创建分类](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### 步骤2：创建项目分类

在新建分类下点击"添加"创建项目分类。

配置选项说明：
- **作为服务运行**：FlyEnv 将管理启停状态并添加开关控件。这里选择打开
- **单实例运行**：适用于不能同时运行多个版本的服务。如果有多个项目使用同一个端口，这里需要打开。
- **执行项**：各个需要部署的项目
- **配置文件**：在主面板以标签页形式显示，用不到， 忽略
- **日志文件**：可在主面板查看， 用不到， 忽略

![添加模块](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### 步骤3：添加待部署项目

在"执行项"下点击"添加"进行配置：

- **名称** 项目名称
- **备注** 项目备注。推荐填写运行端口号，方便后续排查端口冲突问题
- **使用sudo运行**（仅macOS）：需要提权的命令。项目是否需要sudo权限执行。
- **运行命令/文件**：可执行命令(Shell(macOS/Linux)/Powershell(Windows))或脚本文件（.sh/.ps1/.cmd/.bat）
- **PID文件路径**：用于服务状态监控. 具体看项目是否会创建PID文件
- **配置文件**：可通过操作弹窗编辑。 项目的配置文件，有的话可以添加，后续方便直接在FlyEnv里管理
- **日志文件**：可通过操作弹窗查看。 项目的日志文件，有的话可以添加，后续方便直接在FlyEnv里查看

nextJS 示例配置：
```shell
cd "/Users/xxx/Downloads/NextJS-Test" && npm run start"
```

```powershell
cd "F:\www\nextjs\my-app"
npm run start
```

![配置执行项](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### 步骤4：使用模块
自定义模块会显示在左侧栏，点击即可进入模块界面。

![模块界面](https://oss.macphpstudy.com/image/custom-module-screen5.png)

### 步骤5：启动服务
点击执行项的"启动"按钮。

![启动服务](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### 步骤6：验证运行
浏览器里访问 `http://127.0.0.1:3000` 查看是否运行

![验证运行](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### 步骤7：查看日志
通过操作按钮查看输出日志和错误日志。

![查看日志](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![错误日志](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## 使用域名和https访问

## 使用网络隧道分享

## 常见问题