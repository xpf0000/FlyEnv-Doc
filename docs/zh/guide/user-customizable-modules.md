# 自定义模块使用指南

## 概述

FlyEnv 已经内置了大量常用模块，但开发者可能需要更多功能模块。如果您有特定需求，建议优先通过 [讨论区](https://github.com/xpf0000/FlyEnv/discussions) 或 [问题追踪](https://github.com/xpf0000/FlyEnv/issues) 提交请求。

为此，FlyEnv 推出了自定义模块功能，让您可以添加自己的模块，同时保持与内置模块一致的使用体验。

本指南以 [etcd](https://github.com/etcd-io/etcd) 为例进行说明。截至本文撰写时，FlyEnv 尚未内置 etcd 模块（已有相关需求 #307）。感谢所有提出建议的用户，您的反馈让 FlyEnv 变得更好, 最终回馈到更多用户.

## 添加自定义模块

### 第一步：准备二进制文件
下载 etcd 二进制包并解压文件。

![准备文件](https://oss.macphpstudy.com/image/custom-module-screen1.png)

### 第二步：创建配置文件
创建 `etcd.yaml` 配置文件：

```yaml
name: "etcd-flyenv-test"
listen-client-urls: "http://0.0.0.0:2379"
listen-peer-urls: "http://0.0.0.0:2380"
advertise-client-urls: "http://127.0.0.1:2379"
initial-advertise-peer-urls: "http://127.0.0.1:2380"
log-level: "info"
log-outputs: ["stdout"]
```

### 第三步：创建模块分类
1. 进入 设置 → 模块
2. 点击"站点"旁的"+"图标创建新分类

![创建分类](https://oss.macphpstudy.com/image/custom-module-screen2.png)

### 第四步：添加新模块
在新建分类下点击"添加"创建模块。

配置选项说明：
- **作为服务运行**：FlyEnv 将管理启停状态并添加开关控件
- **单实例运行**：适用于不能同时运行多个版本的服务
- **执行项**：模块的不同版本/配置
- **配置文件**：在主面板以标签页形式显示
- **日志文件**：可在主面板查看

![添加模块](https://oss.macphpstudy.com/image/custom-module-screen3.png)

### 第五步：添加执行项
在"执行项"下点击"添加"进行配置：

- **使用sudo运行**（仅macOS）：需要提权的命令
- **运行命令/文件**：可执行命令或脚本文件（.sh/.ps1/.cmd/.bat）
- **PID文件路径**：用于服务状态监控
- **配置文件**：可通过操作弹窗编辑
- **日志文件**：可通过操作弹窗查看

etcd 示例配置：
```shell
cd "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64" && ./etcd --config-file "/Users/x/Downloads/etcd-v3.6.0-darwin-amd64/etcd.yaml"
```

![配置执行项](https://oss.macphpstudy.com/image/custom-module-screen4.png)

### 第六步：使用模块
自定义模块会显示在左侧栏，点击即可进入模块界面。

![模块界面](https://oss.macphpstudy.com/image/custom-module-screen5.png)

可直接查看和编辑配置文件：

![配置文件](https://oss.macphpstudy.com/image/custom-module-screen6.png)

### 第七步：启动服务
点击执行项的"启动"按钮。

![启动服务](https://oss.macphpstudy.com/image/custom-module-screen7.png)

### 第八步：验证运行
通过 工具 → 进程管理 确认 etcd 是否正常运行。

![验证运行](https://oss.macphpstudy.com/image/custom-module-screen8.png)

### 第九步：查看日志
通过操作按钮查看输出日志和错误日志。

![查看日志](https://oss.macphpstudy.com/image/custom-module-screen9.png)
![错误日志](https://oss.macphpstudy.com/image/custom-module-screen10.png)

## 结语
您已成功在 FlyEnv 中添加了自定义模块！欢迎分享使用体验，如有任何问题或建议，请访问 [讨论区](https://github.com/xpf0000/FlyEnv/discussions) 或 [问题追踪](https://github.com/xpf0000/FlyEnv/issues)。
