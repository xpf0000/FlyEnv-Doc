# Podman模块使用指南

## 模块背景与价值

在使用FlyEnv进行环境部署时，虽然平台已提供多版本模块的一键安装功能，但在实际场景中仍存在部分需求难以通过常规方式满足，主要包括以下典型场景：

1. **依赖工具链兼容性问题**  
   在macOS和Linux系统中，模块安装通常依赖Homebrew或MacPorts等包管理工具。但对于一些较旧的软件版本（如PHP 5.5、MySQL 5.6等），Homebrew可能已停止维护对应版本的源，导致用户无法通过常规途径完成安装。

2. **强隔离的沙盒运行需求**  
   当需要运行来源未知或安全性待验证的代码时，用户往往需要一个与本机完全隔离的纯净运行环境，以避免潜在风险影响主机系统。传统方案可能无法提供足够彻底的隔离能力。

3. **预置Docker Compose项目的快速部署**  
   对于已基于Docker Compose预设好服务编排的项目，用户需要一个能无缝兼容此类配置的环境，以降低迁移和启动成本。

基于上述实际痛点，FlyEnv 4.11.0版本正式推出**Podman模块**，通过提供轻量级虚拟化容器管理能力，帮助用户高效解决旧版本软件安装、强隔离环境构建以及Docker Compose项目快速部署等核心需求。

## 使用指南 (User Guide)

### 一、Podman虚拟机管理

1. **启动虚拟机**
    - 在Podman模块中找到虚拟机管理界面。
    - 选择要启动的虚拟机名称。
    - 点击启动按钮，虚拟机将开始启动过程。

2. **停止虚拟机**
    - 在虚拟机列表中找到目标虚拟机。
    - 点击停止按钮，虚拟机将安全关闭。

3. **查看虚拟机详情**
    - 选择虚拟机，查看其详细信息，包括状态、配置参数等。

![podman-1](https://oss.macphpstudy.com/image/podman-1.webp)

![podman-2](https://oss.macphpstudy.com/image/podman-2.webp)

4. **自定义参数创建虚拟机**
    - 在创建新虚拟机时，可以根据需求自定义CPU、内存、存储等参数。
    - 填写相应信息后，点击创建，新的虚拟机将按照自定义参数生成。

![podman-3](https://oss.macphpstudy.com/image/podman-3.webp)

### 二、Docker Compose管理

1. **快速构建docker-compose**
    - 使用常用模块的docker-compose模板，快速构建服务。

![podman-4](https://oss.macphpstudy.com/image/podman-4.webp)

![podman-5](https://oss.macphpstudy.com/image/podman-5.webp)

![podman-6](https://oss.macphpstudy.com/image/podman-6.webp)

2. **添加已有的docker-compose**
    - 通过导入功能，可以将本地的docker-compose.yml文件添加到Podman中。

![podman-7](https://oss.macphpstudy.com/image/podman-7.webp)

![podman-8](https://oss.macphpstudy.com/image/podman-8.webp)

3. **启动/停止docker-compose**
    - 在docker-compose管理界面，可以一键启动或停止所有服务。

![podman-9](https://oss.macphpstudy.com/image/podman-9.webp)

![podman-10](https://oss.macphpstudy.com/image/podman-10.webp)

4. **查看docker-compose日志**
    - 查看docker-compose中各个服务的运行日志，便于监控和调试。

![podman-11](https://oss.macphpstudy.com/image/podman-11.webp)

![podman-12](https://oss.macphpstudy.com/image/podman-12.webp)

### 三、镜像管理

1. **拉取镜像**
    - 在镜像管理界面，输入要拉取的镜像名称和标签。
    - 点击拉取按钮，镜像将从远程仓库下载到本地。

![podman-13](https://oss.macphpstudy.com/image/podman-13.webp)

![podman-14](https://oss.macphpstudy.com/image/podman-14.webp)

2. **删除镜像**
    - 在镜像列表中选择要删除的镜像。
    - 点击删除按钮，确认后镜像将被移除。

![podman-15](https://oss.macphpstudy.com/image/podman-15.webp)

3. **导入镜像**
    - 通过导入功能，可以将本地的镜像文件导入到Podman中。
    - 选择导入文件，按照提示完成导入过程。

4. **导出镜像**
    - 选择要导出的镜像，点击导出按钮。
    - 选择保存位置，镜像将以文件形式导出。

![podman-16](https://oss.macphpstudy.com/image/podman-16.webp)

### 四、容器管理

1. **添加容器**
    - 在容器管理界面，选择或输入要添加的容器镜像。
    - 配置容器参数，如网络、存储等。
    - 点击添加，容器将根据配置创建。

![podman-17](https://oss.macphpstudy.com/image/podman-17.webp)

2. **删除容器**
    - 在容器列表中选择要删除的容器。
    - 点击删除按钮，确认后容器将被移除。

3. **查看容器详情**
    - 选择容器，查看其运行状态、配置、日志等详细信息。

![podman-18](https://oss.macphpstudy.com/image/podman-18.webp)

![podman-19](https://oss.macphpstudy.com/image/podman-19.webp)

4. **启动/停止容器**
    - 通过启动或停止按钮，控制容器的运行状态。

![podman-20](https://oss.macphpstudy.com/image/podman-20.webp)

![podman-21](https://oss.macphpstudy.com/image/podman-21.webp)

5. **导出容器**
    - 选择容器，点击导出按钮，将容器导出为文件。

6. **提交为镜像**
    - 将容器的当前状态提交为新的镜像，便于后续使用。

![podman-23](https://oss.macphpstudy.com/image/podman-23.webp)

7. **进入容器执行命令**
    - 选择容器，点击进入按钮，可以直接在容器内执行命令。

![podman-24](https://oss.macphpstudy.com/image/podman-24.webp)

![podman-25](https://oss.macphpstudy.com/image/podman-25.webp)

8. **查看容器日志**
    - 在容器详情页，可以查看容器的运行日志，便于问题排查。

![podman-22](https://oss.macphpstudy.com/image/podman-22.webp)

以上就是FlyEnv 4.11.0版本中Podman模块的详细使用指南，希望对您有所帮助。