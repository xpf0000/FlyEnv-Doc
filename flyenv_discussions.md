# FlyEnv GitHub Discussions 汇总

**仓库**: https://github.com/xpf0000/FlyEnv/discussions

**总 Discussion 数**: 49

---

## 统计

- **总 Discussion 数**: 49
- **总评论数**: 115

**分类分布**:
- Q&A: 21
- General: 17
- Ideas: 10
- Show and tell: 1

---

## Discussions 列表

### 1. #574 - 这个怎么说安装不了

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2026-03-08
- **作者**: @Timid-yuluo
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/574

#### 正文

<img width="550" height="390" alt="1772948318932" src="https://github.com/user-attachments/assets/a0a5ca37-7ab3-4f4c-a56c-e923ce9714b3" />


#### 评论 (1 条)

**评论 1** - @Timid-yuluo (2026-03-08)

<img width="1200" height="800" alt="image" src="https://github.com/user-attachments/assets/c8ece690-bdcc-4567-b09a-320a023b1a8e" />


---

---

### 2. #558 - [LINUX] Hosting a local server for Web testing with PHP, HTML.. along with a database, prefarably Mysql to use phpmyadmin

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2026-02-25
- **作者**: @dygaz
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/558

#### 正文

Hey guys, I'm new to FlyEnv and i would like to know how to exactly host a server and start testing the files whatsoever. I've come across FlyEnv to try to replace Xampp, since I'm migrating from Windows to Linux for a while.

Using it for a school project where you need to conjugate PHP along with HTML, CSS and JS, integrating it with a database. Nothing too hard, I'm just trying to get used to the environment!

---

### 3. #538 - How to fix error listening port?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2026-02-05
- **作者**: @Kelenwa
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/538

#### 正文

Hello,

Trust you are doing well today, I have finally installed FlyEnv and setup some of the tools(Apache,MySQL and PHP) successfully on my CachyOS for a start. I can tell you for sure that, I didn't miss Laragon one bit having transitioned from Windows10 to Linux(CachyOS). 

That said, I am having some error notification each time I launch FlyEnv and hit **"One-click start all available services displayed on the panel"** with this notification -  `Error: listen EACCES: permission denied 0.0.0.0:21` having checked what tool might be the cause, I realised is ftp-srv. 

I myself have sort to, by recommendation change the port/Bind number in the ftp conf file: `pure-ftpd.conf ` with no positive effect, still displaying the error. Then looked into the ftp-srv folder and found a file inside: `ftp-srv.json` and opened the file, what I saw in the file is just [ ]. An empty square open and close bracket. Also noticed the DNS showing this error when clicked: `Error: bind EACCES 0.0.0.0:53`.

So, please how do I fix these error messages popping up?

Kind regards

#### 评论 (2 条)

**评论 1** - @xpf0000 (2026-02-05)

If you do not use these features, you can simply hide these modules in the settings.  
These two modules use ports below 1024. On Linux, higher permissions are required.  
There is likely an issue with the Linux permission handling for these two modules, which I will fix later.

---

**评论 2** - @Kelenwa (2026-02-05)

Alright, thank you for the response. But I will likely be using them in the future. Glad you mentioned you will be fixing that later.

---

---

### 4. #535 - What projects would you like FlyEnv to support for quick creation?

- **分类**: General
- **状态**: open
- **创建时间**: 2026-02-02
- **作者**: @xpf0000
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/535

#### 正文

Currently, FlyEnv supports the following projects for quick creation:

PHP: CakePHP, ClassicPress, CodeIgniter, Contao, Laravel, Slim, Symfony, ThinkPHP, WordPress, Yii2

Node.js: Expo, Gatsby, NestJS, Next.js, Remix, VitePress, Vue

![flyenv-capturer-1770041232](https://github.com/user-attachments/assets/e207142b-6280-4ebe-9935-da77e541a351)
![flyenv-capturer-1770041252](https://github.com/user-attachments/assets/439e2ff4-718f-4449-8b28-c900e0685d89)


I would like FlyEnv to support quick creation for more projects and more languages. If you have any suggestions or specific projects you'd like FlyEnv to support, please feel free to leave a comment and discuss.


#### 评论 (1 条)

**评论 1** - @NejLee (2026-02-26)

Could you create  quick app setup for Svelte projects this could be in the category with Next.js and Vue.js etc

---

---

### 5. #511 - How To Install FlyEnv in CachyOS

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2026-01-16
- **作者**: @Kelenwa
- **评论数**: 13
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/511

#### 正文

Hello Xpf000,

I have been trying to install FlyEnv on my CachyOS with no success. Although, somewhat new to Linux OSes(this time Arch-base) having moved from Windows 10 running Laragon, and since Laragon does not support Linux, I have been looking for the right tool for my local development, after many search, I bump into FlyEnv, and reading other peoples' review I found it to be a great tool especially for me going forward with Linux(CachyOS) as my permanent and daily driver.

 So, how and what do I do to get it installed on my CachyOS laptop. I just realized there is some level of contribution or some sort of payment to make, which I think might be the cause of it not being installed or something. Or is there anything I have missed along the way after following the instruction I found on Google page which is: 
 
Install via the Arch User Repository (AUR) 
A package named flyenv-bin is available in the AUR, which is a prebuilt version of the software. 
Prerequisites: You need git and makepkg installed. 

   * Install build dependencies (if not already installed):
    
        bash:
        sudo pacman -S --needed base-devel git
    
    * Clone the repository for flyenv-bin:
    
        bash:
        git clone https://aur.archlinux.org/flyenv-bin.git
        
    * Navigate to the cloned directory:

        bash:
        cd flyenv-bin

    * Build and install the package using makepkg:

        bash:
        makepkg -si

This command will download the source files, build the package, and install it with pacman after resolving dependencies. 

It is in the last step it stopped, citing error after 3 attempts as shown in the screenshot below
<img width="905" height="304" alt="FlyEnv_installation_error_message" src="https://github.com/user-attachments/assets/a53c03da-8e0b-4f80-855d-800273d3b654" />


Furthermore, in terms of payment/donation I do hope Nigeria is well supported. Because, I can't share my experience of what I have not used yet. 

I urgently await your response soon.

Cheers!

#### 评论 (13 条)

**评论 1** - @xpf0000 (2026-01-16)

1. FlyEnv installation is free of charge. Normal usage is completely unrestricted. A license is only required when users create more than three sites during use.

2. The FlyEnv download page [https://flyenv.com/download.html](https://flyenv.com/download.html) provides pre-packaged installation files for Debian/Ubuntu/Red Hat/Fedora/SUSE/CentOS systems. Simply install it using the standard method. For example: apt install ./FlyEnv-4.11.0-x64.deb.

3. I'm not very familiar with the CachyOS system either. Since there are too many Linux distributions, I don’t have the time or resources to test each one individually. If it cannot be installed normally, you may need to clone the FlyEnv GitHub source code and try packaging and building it locally yourself. The project is developed using Electron and requires a Node.js environment. First, configure Node.js and Python. Then, use git clone to clone the repository, followed by npm install.  
   • Use npm run dev for local debugging.  

   • Use npm run build for local building.

---

**评论 2** - @T2Player (2026-01-16)

@Kelenwa AUR is pretty dangerous place i heard :) Anyway, it's better if we could have official port for Arch... It's not my business, of course, but maybe if u ask him to do this for a decent donation, he will be fine about...
P.S. I'm not an Arch user, just like passing by.. )
@xpf0000 It will be great if you add some USDT, ETH or some else cryptocurr donation methods - not all non-chinese people can easely use Ko-fi.

---

**评论 3** - @Kelenwa (2026-01-17)

Thank you for your response, it is well appreciated. Great to know is completely free. I don't really mind as cited by you, donating in fund to get a license, as I will really need it going forward in my Linux(Arch-Base) Distro-CachyOS journey.

Again, as I said earlier, I am new as per how things work in Linux. I followed one of the guides I found online on how to clone and compile from git repo, but it didn't work.

Hopefully, "all things being equal", by next weekend I should have something to donate toward FlyEnv, but, I would want to have a clear direction or some guide to have it installed on my Laptop. Do you have a spare time to guide me on this? Some commands to follow?

Kind regards

---

**评论 4** - @Kelenwa (2026-01-17)

@T2Player I thank you also for your time also. I so agreed with you as having an official port for Arch-base Linux. I was kind of surprise no Arch-Base related package under Linux Installations.

I have already set up myself to donate my own token of appreciate for FlyEnv. If I donated for Laragon that served me well on Windows OS, FlyEnv should be a given, and I noticed the policy somewhat differs. FlyEnv kinda have some cool features I would really like when I eventually starts using it.

I do hope Ko-fi supports Nigeria payment system.

---

**评论 5** - @xpf0000 (2026-01-17)

If the installation fails using the installation file, here are the steps for local packaging. You can try following this guide.

## 1. Install Node.js
If Node.js is already installed on the system, you can skip this step.

```bash
sudo pacman -S nodejs npm
```

## 2. Install Python
If Python is already installed on the system, you can skip this step.

```bash
# Install a specific version (e.g., Python 3.11)
sudo pacman -S python311 python311-pip
```

If the above command doesn't work, check available Python versions:

```bash
sudo pacman -Ss python
```

## 3. Verify Installation

```bash
# Verify Node.js
node --version
npm --version

# Verify Python
python --version
pip --version
```

## 4. Clone the FlyEnv Repository

```bash
git clone git@github.com:xpf0000/FlyEnv.git
```

## 5. Navigate to the Cloned FlyEnv Folder and Install Project Dependencies

```bash
cd FlyEnv
npm install
```

## 6. Run the Project

```bash
npm run dev
```

## 7. Build the Project

```bash
npm run build
```

## Notes:
- Steps 1 and 2 can be skipped if the respective software is already installed
- Make sure you have Git installed before cloning the repository (`sudo pacman -S git` if needed)
- The Python package names may vary depending on available versions in the repository

---

**评论 6** - @Kelenwa (2026-01-17)

@xpf0000, 

Thank you for the reply of the detailed steps and command to guide me install FlyEnv. But, I am having challenge in cloning the git repository. That is where I am stuck. All the needed installation(node.js, npm, python,pip,git) are all installed. It gets to the cloning stage, it returned error of denied permission, etc. as shown in the screenshot below:
<img width="929" height="92" alt="git_clone_denial_error" src="https://github.com/user-attachments/assets/2aa01691-0786-425c-b7f8-06888ffb35fe" />

What do I do?

Kind regards

---

**评论 7** - @xpf0000 (2026-01-19)

Fork the project on GitHub, then clone your own forked project.

---

**评论 8** - @Kelenwa (2026-01-20)

Hello xpf0000,

Thank you again for the detail guidance and commands to install FlyEnv on CachyOS machine. But now somewhat worried with all the warnings of vulnerabilities I received when I run this command on the 5th steps:

> 5. Navigate to the Cloned FlyEnv Folder and Install Project Dependencies
> 
> cd FlyEnv
> npm install

On the console/konsole, I received series of warnings a show in the screenshots below:
<img width="1360" height="732" alt="npm_install_warning_1" src="https://github.com/user-attachments/assets/7a6f8ccb-be35-445e-8a3b-2c836112e496" />
<img width="1366" height="671" alt="npm_install_warning_2" src="https://github.com/user-attachments/assets/ba4de7b1-bddd-47bd-bf21-af449e8cd7b5" />
<img width="1350" height="668" alt="npm_install_warning_3" src="https://github.com/user-attachments/assets/cdac7587-df95-40a2-9dde-cf866db911da" />
<img width="1350" height="673" alt="npm_install_warning_4" src="https://github.com/user-attachments/assets/ab0abecc-9386-4c13-bd32-d0cd1c86f4fc" />
<img width="1349" height="673" alt="npm_install_warning_5" src="https://github.com/user-attachments/assets/18ba337d-3fdd-4a6e-8ae1-c879dab3399b" />
<img width="1348" height="666" alt="npm_install_warning_6" src="https://github.com/user-attachments/assets/6cffc675-d4e5-465e-a23e-ccdbeefc68b2" />
<img width="1347" height="674" alt="npm_install_warning_7" src="https://github.com/user-attachments/assets/6713cbfb-8474-4094-b348-1f3c34a13cba" />

Looking it up on Google it all this might open my machine up for malicious attacks including DOS attacks. Please what is your advice on this?

Kind regards

---

**评论 9** - @Kelenwa (2026-01-20)

Posted in the reply in the wrong place

---

**评论 10** - @Kelenwa (2026-01-20)

And when I ran this command:

> 6. Run the Project
> 
> npm run dev

I get this error message: 

<img width="1351" height="453" alt="npm_run_dev_error_msg" src="https://github.com/user-attachments/assets/7a465661-b277-4e20-a08d-8c5022b85c11" />

What do I do to fix and resolve this?



---

**评论 11** - @Kelenwa (2026-01-20)

Is being a couple of hours that I ran this:

> 7. Build the Project
> 
> npm run build

Nothing is happening

---

**评论 12** - @xpf0000 (2026-01-26)

Judging from your screenshot, it looks like an issue with the version of `vite-plugin-monaco-editor`. I previously didn't lock the library version. I have now updated it. You need to sync the code from the main repository to your forked repository.  

Then, try the following steps:  
1. Delete `node_modules` and `package-lock.json`.  
2. Install Yarn.  
```
npm install -g yarn
```  
3. Install dependencies using Yarn.  
```
yarn install
```  
4. Run the project with Yarn.  
```
yarn run dev
```

My local Node version is 24.1.0, and the Python version is 3.14.2. You can try using this version.

---

**评论 13** - @Kelenwa (2026-01-30)

Hello xpf000,

Thank you for the response once again. I am still facing error access denied message as shown in the screenshot below on installing the yarn in the second command:

Install Yarn.
npm install -g yarn
<img width="1335" height="453" alt="install-yarn" src="https://github.com/user-attachments/assets/807e5961-250a-4ea5-89ac-5bb35ad8dc0c" />

Will renaming the folder yarn to .yarn-LH7MXRbz resolve this issue?

---

---

### 6. #510 - How to Manually install & tune phpMyAdmin?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2026-01-16
- **作者**: @T2Player
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/510

#### 正文

My OS is Ubuntu Linux. I have trouble with auto download&install of the subject. Assume that classic install PMA into the system  via "apt install phpmyadmin" will not work properly because all the services was intalled & autotuned via FlyEnv & Homebrew. So, in the docs it is written: "You can also use the following database client: phpMyAdmin, Navicat, .....". But it isn't written how I can manually install & tune them into the all the others Homebrew-installed services. My working stack is: nginx+PHP+Mariadb. So, I downloaded PMA from off site in zip-archive. What should I do after? Thx for help.
P.S. Before starting this discussion I tried to find autoinstall script for PMA in FlyEnv soures, but failed with that :)

#### 评论 (2 条)

**评论 1** - @xpf0000 (2026-01-16)

1. Download phpMyAdmin  
2. Extract phpMyAdmin to the desktop  
3. In FlyEnv, create a new site and select the phpMyAdmin extraction directory as the site directory  
4. Start nginx, PHP, and MariaDB  
5. In the FlyEnv site list, click the link of the newly created site to open phpMyAdmin.

---

**评论 2** - @T2Player (2026-01-16)

So simple! Thank you! FlyEnv is great!

---

---

### 7. #506 - How to install FlyEnv Helper manually on terminal windows?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-12-27
- **作者**: @fachrydevs
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/506

#### 正文

Guys I can install FlyEnv Helper, it always says Helper installation program failed, and i must install it manually from terminal
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/3283ec8f-f39a-430c-9ec3-30ff8466423f" />


#### 评论 (1 条)

**评论 1** - @xpf0000 (2025-12-27)

Normally, manual installation is not required. Please try the following steps first.  
1. Ensure that PowerShell is included in the system environment variables. You can execute `where.exe powershell` in the command prompt (cmd) to check. If it prompts that PowerShell cannot be found, please manually add PowerShell to the environment variables. After added, restart FlyEnv and see if the helper program can be installed correctly.  
2. If the issue persists after the first step, try running FlyEnv with administrator privileges and check if the helper program can be installed correctly.  

If it still doesn’t work, please reply again.

---

---

### 8. #503 - 致开发者的一封信

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-12-23
- **作者**: @chenwenping1994
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/503

#### 正文

尊敬的 FlyEnv 开发团队：
您好！我是 FlyEnv 的忠实用户，目前在 Mac 环境下同时使用 FlyEnv 进行 PHP 项目开发，以及 macSvn 进行版本控制，但 macSvn 在实际使用中存在诸多体验痛点，因此希望 FlyEnv 能在后续版本中集成更完善的 Subversion（SVN）管理功能，甚至实现对 macSvn 的超越，让开发流程更高效统一。以下是具体建议：
一、当前 macSvn 的核心痛点（需 FlyEnv 针对性解决）
交互体验繁琐：macSvn 的 Finder 集成不够流畅，右键菜单层级复杂，常用的「提交、更新、对比」等操作需要多次点击才能找到，且图标状态反馈延迟；
功能割裂：版本控制与本地开发环境（PHP/MySQL）完全分离，切换项目时需同时操作 FlyEnv 和 macSvn 两个工具，上下文频繁断裂；
高级功能缺失 / 难用：搁置（Shelve）功能操作逻辑晦涩，合并分支、冲突解决的可视化程度低，缺乏直观的对比编辑界面；
兼容性与性能问题：在 macOS 最新版本（如 Sonoma/Ventura）的深色模式下偶发界面错乱，大文件提交时响应缓慢，且占用内存较高（安装包达 151M）；
缺陷追踪与协作不足：内置的 Issues 管理功能简陋，无法与项目开发环境联动，团队协作时需额外切换工具同步进度。
二、FlyEnv 集成 SVN 功能的核心需求（超越 macSvn 的关键方向）
1. 深度集成 FlyEnv 现有工作流，实现「开发 + 版本控制」一体化
建议在 FlyEnv 的「虚拟主机」模块中，为每个项目增加「SVN 关联」选项，支持一键绑定本地 SVN 工作副本或远程仓库；
启动项目时自动识别 SVN 状态（未提交 / 有更新 / 冲突），在 FlyEnv 主界面用醒目标识提示，无需切换工具即可感知版本状态；
常用操作直达：在项目列表右键菜单中直接添加「SVN 提交、更新、还原、查看日志」等快捷操作，无需额外打开独立客户端。
2. 优化 Finder 集成体验，简化操作路径
实现更轻量化的 Finder 同步扩展，支持图标徽章实时显示文件状态（未版本化 / 已修改 / 已添加 / 冲突），反馈速度优于 macSvn；
右键菜单精简分类：将「SVN 操作」整合为单独的一级菜单，包含「提交（带备注输入框）、更新、对比、搁置、分支切换」等核心功能，减少操作层级；
支持拖拽操作：允许直接将本地文件拖拽至 FlyEnv 项目的 SVN 面板，自动执行「添加到版本控制」操作，比 macSvn 的「Add」流程更便捷。
3. 强化核心功能，解决 macSvn 的功能短板
（1）可视化对比与冲突解决
内置高效文件对比工具，支持文本文件（含 PHP / 配置文件）的语法高亮对比，且允许直接在对比界面编辑冲突内容（macSvn 对比编辑功能卡顿且不支持语法高亮）；
支持图片、二进制文件的可视化对比，清晰展示差异，无需依赖第三方工具。
（2）灵活的搁置与分支管理
简化「搁置（Shelve）」功能：允许一键暂存未提交的修改，支持自定义搁置名称和备注，后续恢复时可选择性还原文件（macSvn 搁置操作步骤繁琐，还原时易误操作）；
分支 / 标签管理可视化：在 FlyEnv 中直接展示仓库的分支、标签结构，支持一键创建分支、合并分支，合并冲突时提供图形化引导，降低操作门槛。
（3）安全连接与仓库管理
内置 SSH/SSL 隧道客户端，支持私有密钥、客户端证书认证，轻松连接加密 SVN 服务器（macSvn 虽支持但配置复杂）；
支持直接操作远程仓库：无需检出工作副本即可完成文件复制、移动、删除、重命名等操作，提升仓库维护效率。
（4）缺陷追踪与协作联动
集成轻量 Issues 管理功能，支持在 FlyEnv 中创建、分配、跟踪项目缺陷 / 任务，缺陷数据与 SVN 提交关联（提交时可关联 Issue ID，自动更新状态）；
支持缺陷数据同步至远程仓库，团队成员可通过 FlyEnv 共享缺陷进度，无需额外使用第三方协作工具（macSvn 的 Issues 功能孤立，无联动性）。
4. 适配 macOS 生态，优化性能与兼容性
完美支持 macOS 浅色 / 深色模式，界面图标、配色与系统风格统一，避免 macSvn 存在的界面错乱问题；
优化性能：控制功能模块体积（目标小于 macSvn 的 151M），减少内存占用，大文件提交 / 更新时保持响应流畅，无卡顿；
兼容 Intel/Apple M 系列芯片，确保在不同 Mac 设备上稳定运行。
5. 与 FlyEnv 现有功能联动，打造差异化优势
SVN 提交时自动校验项目运行状态：若项目存在 PHP 语法错误、数据库连接异常（可通过 FlyEnv 环境检测），提供警告提示，避免提交有问题的代码；
支持「环境 + 版本」一键备份：备份项目时可选择同时备份 SVN 版本信息，恢复项目时自动还原对应的 SVN 关联配置，无需重新绑定；
日志联动：将 SVN 提交日志与 FlyEnv 项目运行日志关联展示，便于追溯代码提交与项目运行问题的关联。
三、预期价值
若 FlyEnv 能实现以上 SVN 功能集成与优化，将彻底解决当前「开发环境 + 版本控制」工具割裂的痛点，不仅能替代 macSvn 成为更易用的 SVN 客户端，还能让开发者在一个工具中完成「项目搭建、开发、版本管理、协作」全流程，大幅提升工作效率。同时，这也将成为 FlyEnv 区别于其他集成环境（如 MAMP、ServBay）的核心竞争力，吸引更多依赖 SVN 进行版本控制的 PHP 开发者选择 FlyEnv。
感谢开发团队一直以来对 FlyEnv 的打磨与优化，期待后续版本能带来更完善的 SVN 管理功能，让 FlyEnv 成为 Mac 平台下 PHP 开发的「一站式解决方案」！
建议人：FlyEnv 忠实用户

---

### 9. #493 - Does FlyEnv support being invoked via parameters in a batch file to start or stop a specific programming environment?

- **分类**: General
- **状态**: open
- **创建时间**: 2025-12-08
- **作者**: @XeroChina
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/493

#### 正文

Does FlyEnv support being invoked via parameters in a batch file to start or stop a specific programming environment?


---

### 10. #475 - Ko-fi's not available in your location

- **分类**: General
- **状态**: open
- **创建时间**: 2025-11-14
- **作者**: @mohif1995
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/475

#### 正文

I tried to donate to the project through Ko-fi' but it said its note available in my location 

#### 评论 (2 条)

**评论 1** - @mohif1995 (2025-11-14)

<img width="799" height="563" alt="image" src="https://github.com/user-attachments/assets/2cbc6cf6-fbf7-4992-9963-a52fbadfd7d3" />


---

**评论 2** - @xpf0000 (2025-12-01)

FlyEnv offers more than just donations as a way to obtain a license. You can also get a license by sharing your user experience. Take a look at the donation page on the official website—many of the links there are for non-donorship options.

[https://flyenv.com/sponsor.html](https://flyenv.com/sponsor.html)

---

---

### 11. #470 - flyenv  tomcat 无法启动

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-11-08
- **作者**: @Yintonghao
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/470

#### 正文

从 Homebrew 安装的tomcat@9 成功后，无法启动呢

---

### 12. #464 - Hosting a Static Php Web Page

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-10-28
- **作者**: @jfkn1ght
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/464

#### 正文

Hello. I wish to use FlyEnv to host a static php web page using NGINX and expose it to the internet with port forwarding.
Port 80 has already been opened on my router. What settings and/or configuration edits do I need to achieve this?

#### 评论 (4 条)

**评论 1** - @xpf0000 (2025-10-29)

If you have a static IP address:  
• Purchase a real domain and configure its DNS records to point to your static IP address.  

• Then, use this domain in FlyEnv to create your site.  

If you do not have a static IP address (dynamic IP):  
• You may need to use a tunneling service (e.g., Cloudflare Tunnel, Ngrok, or frp) to handle dynamic IP mapping.  

• First, deploy the tunneling client on your local network or server and associate it with a public endpoint.  

• Next, use the domain provided by the tunneling service or configure a custom domain (by setting a CNAME record) to point to the tunneling service’s address.  

• Finally, configure this domain in FlyEnv to complete the site setup.

---

**评论 2** - @jfkn1ght (2025-10-29)

Thank you for your response!
I would like to use my computer's dynamic ip address for now, security risks aside. If possible, I also prefer not to use any tunneling service as i'm going for the most economic option. I was able to achieve this with MAMP.
I want to know if there are some lines of code I must include in the 'Configuration-Nginx' of my website?

---

**评论 3** - @xpf0000 (2025-10-29)

The config file does not need to be modified.

**Option 1: Using the IP Address Directly (Simple, but Limited)**
*   **Best for**: Temporary testing, access only by yourself or a few users, no requirement for a domain name.
*   **Steps**:
    1.  Run your service on the local server.
    2.  Set up port forwarding on your router to direct traffic from a public port to your internal server's port.
*   **Access**: Use your **Public IP Address:Port** to access the site.
*   **Important Notes**:
    *   **Dynamic IP Issue**: Most residential broadband services use dynamic IPs, which can change periodically (e.g., after a router reboot). You will need to check your current public IP frequently.
    *   **Convenience & Security**: IP addresses are harder to remember than domain names, and exposing a service directly can pose security risks. Some networks may block common ports.

**Option 2: Using a Domain Name + Dynamic DNS (Recommended for Dynamic IPs)**
*   **Best for**: Wanting a fixed, memorable domain name for stable, long-term access.
*   **Steps**:
    1.  Purchase a domain name.
    2.  Use a **Dynamic DNS (DDNS)** service to solve the dynamic IP problem. The DDNS provider supplies a client (often installable on your router or local server) that frequently checks your public IP and automatically updates the provider's DNS records when it changes.
    3.  Configure your domain's CNAME record to point to the DDNS provider's hostname, or use an A record that the client updates.
*   **Access**: Use your domain name to access the service seamlessly, regardless of IP changes.
*   **This is the standard solution for non-static IP situations**, eliminating the need for manual, frequent DNS updates.

**In summary**:
*   **For a simple, temporary solution and don't mind the IP changing**: Use the **IP:Port** directly.
*   **For a stable, long-term solution with a proper name**: You must use a **Domain Name + Dynamic DNS (DDNS)**.

---

**评论 4** - @ilijastanek (2025-11-10)

Or the third option that works for me is https://pinggy.io/, pro sub is cheap and only solution that was work if your dynamic IP is behidn the NAT.

And also you can use custom domain just configre CNAME.

---

---

### 13. #454 - Free Plan

- **分类**: General
- **状态**: open
- **创建时间**: 2025-10-17
- **作者**: @sirnitooo-wq
- **评论数**: 6
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/454

#### 正文

The plan just allow 3 projects in panel of the managment.

#### 评论 (6 条)

**评论 1** - @xpf0000 (2025-10-17)

The current methods for obtaining a FlyEnv license are already very flexible. Whether it's a small donation, sharing your experience publicly, or contributing code, all options are clearly outlined on the license page.

I understand users' desire for it to be completely free, but developing and maintaining FlyEnv requires significant time and effort. If it were entirely free, would that imply these contributions aren’t worthy of recognition? I firmly believe that reasonable support is essential for the project’s sustainable development.

---

**评论 2** - @nplesa (2025-12-10)

If you have application installed and activated with license, and reinstall de windows OS, application will remain active, or you lose license? If remain what must to do for activating application again?

---

**评论 3** - @xpf0000 (2025-12-11)

> If you have application installed and activated with license, and reinstall de windows OS, application will remain active, or you lose license? If remain what must to do for activating application again?

The activated ones remain valid. Currently, you need to request a license again using the original request information. This will be optimized later so that re-requesting is not required.


---

**评论 4** - @nplesa (2025-12-11)

Thx for response! Have a nice day!

---

**评论 5** - @nplesa (2025-12-25)

Hi, can you help me please? I gave you 5 USD 2 months ago as a donation
(kofi) and these days I have a problem with the Windows installed on my
notebook that I had to reinstall. Now I wonder how I can reactivate my
FlyEnv license? If you want, I can send you all the documents received via
PayPal following the transaction.

On Thu, Dec 11, 2025 at 3:11 AM 徐鹏飞 ***@***.***> wrote:

> If you have application installed and activated with license, and
> reinstall de windows OS, application will remain active, or you lose
> license? If remain what must to do for activating application again?
> The activated ones remain valid. Currently, you need to request a license
> again using the original request information. This will be optimized later
> so that re-requesting is not required.
>
> —
> Reply to this email directly, view it on GitHub
> <https://github.com/xpf0000/FlyEnv/discussions/454#discussioncomment-15225595>,
> or unsubscribe
> <https://github.com/notifications/unsubscribe-auth/ABO3CUSLDGMAAX2NZ2QTIB34BDACLAVCNFSM6AAAAACJOVKO26VHI2DSMVQWIX3LMV43URDJONRXK43TNFXW4Q3PNVWWK3TUHMYTKMRSGU2TSNI>
> .
> You are receiving this because you commented.Message ID:
> ***@***.***>
>


---

**评论 6** - @xpf0000 (2025-12-26)

Thanks for your support. The license has been issued, please refresh the page to check the status.

---

---

### 14. #449 - Custom definition of the FlyEnv working directory!?

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-10-07
- **作者**: @aimpowerment
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/449

#### 正文

Hi Folks,
it there a possible to set a custom definition of the FlyEnv working directory. Instead of the path:
`C:\Users\Alberto\AppData\Local\Temp\PhpWebStudy-Data`
I wanna set an individual path.

Please set a config item in the settings tab to set this!
Congratulation for this very handy software with devtools. thanx
Alberto

---

### 15. #443 - Add Flutter SDK Management Support (Similar to FVM)

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-09-23
- **作者**: @jjdevzinho
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/443

#### 正文

Hello! I'd like to suggest adding support for Flutter SDK management in FlyEnv, similar to [FVM (Flutter Version Management)](https://fvm.app/). The idea is to allow FlyEnv to:

- Download and manage multiple Flutter SDK versions
- Set specific versions per project
- Automatically configure PATH for selected versions
- Easily update or switch SDK versions

This would be a great addition for mobile developers working with Flutter and would make FlyEnv even more versatile as a full-stack environment manager.

Thanks for the amazing work on FlyEnv! 👏

---

### 16. #437 - how to fix

- **分类**: General
- **状态**: open
- **创建时间**: 2025-09-06
- **作者**: @vlogg1527
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/437

#### 正文

FlyEnv needs to install a helper program

Helper program installation failed. Please try manually installing in the terminal window

FlyEnv needs to install a helper program

Helper program is installing, please wait

Helper program is installing, please wait

Helper program installation failed. Please try manually installing in the terminal window
<img width="1195" height="803" alt="image" src="https://github.com/user-attachments/assets/530dee39-dc76-4ad8-bb5c-21664ddad192" />


---

### 17. #435 - Available in scoop

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-09-03
- **作者**: @csolisre
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/435

#### 正文

I avoided permission issues installing apps from scoop at https://scoop.sh/. 

---

### 18. #426 - How can I add MariaDB 10.11

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-08-29
- **作者**: @christoferd
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/426

#### 正文

Hi, **How can I add MariaDB 10.11**
At the moment, the lowest version I can install is mariadb 11.1.6 ... and I'm not sure if this will cause me problems when I publish to production.

OS: Windows 11

Before using FlyEnv I would just download mariadb and install it and configure everything myself. But I'd like to incorporate that version in to FlyEnv if possible.

I'm on Cloudways with Digital Ocean servers, and they have MariaDB 10.11 is an LTS (Long Term Support) release.
As it is LTS, I assume it will be around for a while.

#### 评论 (1 条)

**评论 1** - @xpf0000 (2025-09-04)

Thank you for your feedback. I will work on the MariaDB version list to ensure that versions 10.xx are displayed and available.

---

---

### 19. #423 - Whats the way around aliases with .local/.dev?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-08-21
- **作者**: @abbeymaniak
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/423

#### 正文

my organisation requires us to use uses .local / .dev and the flyenv docs says to avoid both, is there a way forward?

#### 评论 (1 条)

**评论 1** - @xpf0000 (2025-08-22)

This content was generated by Google Gemini 2.5Pro, for reference only. Actual implementation may vary depending on your development environment.

## Can .local and .dev Domain Suffixes Be Used for Local Web Development?

When performing local web development on Windows, macOS, and Linux, choosing an appropriate local domain suffix is crucial. While `.local` and `.dev` are popular due to their intuitiveness, using them may introduce technical issues and specific requirements. Overall, **it is recommended to avoid using `.local`**, while **`.dev` can be used under certain conditions**.

### .local: Potential Conflict Risks

The `.local` suffix is officially reserved for use by multicast DNS (mDNS) in the Zeroconf (Zero Configuration Networking) protocol suite. This means that in many operating systems, `.local` is used for device discovery and resolution within local networks, rather than traditional DNS queries.

* **macOS**: macOS deeply integrates Bonjour (Apple's implementation of mDNS). Any address ending in `.local` is prioritized as a Bonjour service and attempts to resolve via mDNS, preventing it from correctly pointing to the IP address (e.g., `127.0.0.1`) set in your `hosts` file or local DNS service. This will directly cause your local development site to be inaccessible.

* **Linux**: Most modern Linux distributions provide mDNS functionality through the Avahi service, which behaves similarly to macOS's Bonjour. Therefore, using `.local` on Linux can also cause domain resolution conflicts, leading to an unstable development environment.

* **Windows**: Although Windows handles `.local` more leniently and may not immediately cause issues under certain network configurations, it also supports mDNS. In mixed network environments that include Apple or Linux devices (such as printers, NAS, etc.), using `.local` can easily lead to difficult-to-troubleshoot resolution problems.

**Conclusion**: Given the official status of `.local` as a special-use top-level domain and its widespread use in mDNS, it is strongly recommended **not** to use it for local web development on any operating system to avoid potential domain resolution conflicts.

### .dev: HTTPS Is Mandatory

`.dev` is a generic top-level domain (gTLD) owned by Google. To enhance network security, Google has added the entire `.dev` TLD to the HSTS (HTTP Strict Transport Security) preload list.

This means all modern browsers (Chrome, Firefox, Safari, Edge, etc.) will enforce the use of the `https://` protocol for any domain ending in `.dev`. If you attempt to access it via `http://`, the browser will automatically redirect to `https://`. If your local development server is not configured with an SSL/TLS certificate, the access will fail.

To use `.dev` domains for local development, you must:

1.  **Configure a local HTTPS environment**: You need to generate an SSL/TLS certificate for your local development site.
2.  **Establish local trust**: Since this certificate is self-signed and not issued by a browser-trusted certificate authority (CA), you need to add your own local CA to the operating system's trust store.

Fortunately, tools like `mkcert` can greatly simplify this process. With simple commands, `mkcert` can create a private certificate authority (CA) on your local machine and use it to issue trusted certificates for your local sites (e.g., `myproject.dev`).

**Conclusion**: You **can** use the `.dev` suffix on Windows, macOS, and Linux, but only if you have configured HTTPS for your local development environment.

### Recommended Alternatives

To avoid the issues mentioned above, it is recommended to choose safer, conflict-free domain suffixes for local development. Here are some excellent options:

* **`.test`**: This suffix is explicitly reserved by the IETF (Internet Engineering Task Force) for testing purposes, ensuring it will never be registered as a public TLD. It is currently the most recommended suffix for local development.
* **`.localhost`**: Also reserved by the IETF, `.localhost` always points to the loopback address `127.0.0.1`. Although its behavior is similar to directly using `localhost`, it allows you to create multiple subdomains (e.g., `project1.localhost`, `project2.localhost`), which is very useful in certain development scenarios.
* **Other custom suffixes**: You can also choose descriptive suffixes that are not yet generic top-level domains, such as `.wip` (work in progress) or `.app` (note that `.app` is also a gTLD that requires HTTPS, so caution is needed when using it).

**Summary Table**

| Domain Suffix | Platforms       | Advantages                                      | Disadvantages & Requirements                   | Recommendation        |
| :------------ | :-------------- | :---------------------------------------------- | :--------------------------------------------- | :-------------------- |
| **.local**    | Windows, macOS, Linux | Intuitive                                       | Conflicts with mDNS (Bonjour/Avahi), highly prone to resolution failures | **Not Recommended**   |
| **.dev**      | Windows, macOS, Linux | Concise, modern feel                            | Enforces HTTPS, requires local SSL certificate configuration | **Recommended (with HTTPS configured)** |
| **.test**     | Windows, macOS, Linux | Officially reserved for testing, no conflict risks | None                                           | **Highly Recommended** |
| **.localhost**| Windows, macOS, Linux | Officially reserved, always points to local, supports subdomains | None                                           | **Highly Recommended** |

---

---

### 20. #361 - Is this like a better Laragon/Herd version?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-07-09
- **作者**: @SHJordan
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/361

#### 正文

Asking because Many managed features of Laragon were nice, i moved to Laravel Herd and got hit with all the goodies but can't manage mysql and such w/o paying. Could you make a more throughout review comparing both?

#### 评论 (4 条)

**评论 1** - @RobiNN1 (2025-07-09)

FlyEnv is a much better alternative to Herd and Laragon.

- In FlyEnv, you can easily install and manage multiple programming languages. (Herd supports only PHP, in Laragon you have also multiple).

- You can choose HTTP server. (Herd only offers NGINX, in Laragon Apache and NGINX).

- Multiple databases. (In Herd its a paid feature, Laragon also supports multiple databases).

- Multiple cache systems. (In Herd only Redis and its paid, and in Laragon only Redis and Memcached).


FlyEnv includes essentially everything a web developer needs. Oh and almost forgot, FlyEnv is **open-source**. And if you need something, there's a good chance it will be added.

--- 

Herd is more geared toward Laravel developers. You can use it for other projects, but it’s clearly designed for Laravel, and many features requires a paid plan.

Laragon was great, but it still lacks many features available in FlyEnv and Herd. The last version I used was v6, it’s now at v8, but I haven’t noticed significant new features (I’m on a Mac now, so I haven’t tried the latest version).

Laragon has also become paid, though it’s more affordable compared to Herd.

FlyEnv limits you to 3 projects in the free version. However, you can purchase a license — and here’s the really cool part: you can get a license by donating any amount or by contributing to the project (e.g. code, translations, or promotion).

---

**评论 2** - @SHJordan (2025-07-09)

Thank's for your answer. I still miss that autoadd sites feature on Windows and that we can simply tag a folder that have many other projects in it and Herd will auto discover/add them on dnsmasq. I found it a bit confusing to setup on FlyEnv.

---

**评论 3** - @xpf0000 (2025-07-10)

> 谢谢你的回答。我仍然怀念 Windows 上的自动添加站点功能，我们只需标记一个包含许多其他项目的文件夹，Herd 就会在 dnsmasq 上自动发现并添加它们。我发现在 FlyEnv 上设置起来有点混乱。

This feature can be considered for addition, as it's completely achievable. It's just that no one has requested it before.

---

**评论 4** - @SHJordan (2025-07-10)

In this case I'll spread the word. Is the PT_BR translation finished? how can i help?

---

---

### 21. #327 - Is linux ubuntu version stoped?

- **分类**: General
- **状态**: open
- **创建时间**: 2025-06-14
- **作者**: @AlnThea
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/327

#### 正文

sir, i want to ask, is linuxe stoped at version 4?
im trying to learning using ubuntu for development, (10 years andmore using windows) 
its just after installing mysql, why i can't click the mysql start button? after installing i got message fail about mysql.service or something ... 

#### 评论 (2 条)

**评论 1** - @xpf0000 (2025-06-15)

No, it hasn't stopped. I'm currently undergoing structural adjustments to merge macOS, Windows, and Linux into a single branch. Once the restructuring is complete, the three platforms will be fully unified.  

---

**评论 2** - @AlnThea (2025-06-17)

> No, it hasn't stopped. I'm currently undergoing structural adjustments to merge macOS, Windows, and Linux into a single branch. Once the restructuring is complete, the three platforms will be fully unified.

i see, i will be waiting for that, once update 3 OS update too , for now i weill just using this version for now, cause im still learning using linux , thanks for your work

---

---

### 22. #326 - Postgres default password

- **分类**: General
- **状态**: open
- **创建时间**: 2025-06-13
- **作者**: @tojorodialson
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/326

#### 正文

Hello,
After install postgres and use default password root postgres
The credential doesnt work
Can you help?
Thank you

---

### 23. #320 - Merge Win/Mac branches into one and same?

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-06-07
- **作者**: @timint
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/320

#### 正文

Hi, I was comparing the `src/` folders between the **Mac** and **Windows** branches. And I can see how the two are more and more drifting away from eachother.

But at the same time, when files are pretty much up to date, I was surprised to see how much of the code was in fact identical.

So.. To remedy this, let's discuss the idea of merging the two branches.

What could be done is using a `switch`  statement to solve platform specific commands:

```
switch (platform) {

  case 'linux':
    ...commands here...
    break;

  case 'mac':
    ...commands here...
    break;

  case 'win':
    ...commands here...
    break;
}
```

It's even doable for importing libraries or submodules:
```
switch (platform) {

  case 'linux':
    const thing = await import('thing.linux.js');
    break;

  case 'mac':
    const thing = await import('thing.mac.js');
    break;

  case 'win':
    const thing = await import('thing.win.js');
    break;

  default:
    throw new Error('unsupported');
}
```

Is there a case example of when this would not be a good idea?

In terms of management there would be less branches, and less files to main. New features would be easier implemented as they go for all platforms in one place.

Comments anyone?

#### 评论 (4 条)

**评论 1** - @xpf0000 (2025-06-09)

I'm currently migrating the project to ESM format and implementing code isolation. The branches can theoretically be merged into one. Most functionalities can remain consistent. For the inconsistent parts, we can abstract out a middleware layer to maintain uniformity. The underlying execution logic can then be handled using conditional compilation. 

---

**评论 2** - @timint (2025-06-09)

Code isolation is goos news. It will bring the project to latest electron standards. 👍

If you can overlook the two branches and make them fairly up to date with eachother. Then I can assist with some of the field work of producing switch conditions. I believe they are too far off from eachother to just pull git updates from eachother? In that case a folder/file comparison program like WinMerge can be a solution for moving line updates to one another (Alt + Left/Right).

Would you want to see Win merge into master, or Win-ESM into Mac-ESM?

---

**评论 3** - @xpf0000 (2025-06-09)

You can create two new branches, ​Win-Merge-Test and ​macOS-Merge-Test, and then attempt to merge ​Win-Merge-Test into ​macOS-Merge-Test.

---

**评论 4** - @timint (2025-06-09)

The overall differences needs to be synced up first. You are probably the only one who knows what parts are the most recent. I'm not sure what the most efficient approach is. 

![image](https://github.com/user-attachments/assets/9d9616ec-a928-465c-a1cb-4a8bc8c2941c)


---

---

### 24. #315 - ci4 htaccess not work

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-31
- **作者**: @niranjan-wassan
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/315

#### 正文

i have create ci4 project and add /admin in url it shows No input file specified. but add index.php it works

---

### 25. #306 - Does FlyEnv work perfectly with WordPress?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-05-19
- **作者**: @abdullah1908
- **评论数**: 5
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/306

#### 正文

Hi, its been a decade since I am developing with WordPress where I got a chance to use many dev tools. Just heard about FlyEnv & would like to try out. Maybe we need to automate WordPress installation as Laragon does.

#### 评论 (5 条)

**评论 1** - @xpf0000 (2025-05-20)

![企业微信截图_da043e47-3538-4eb2-a8a7-a3f3ec29a362](https://github.com/user-attachments/assets/e8a1a316-6afd-4314-bd35-8cef6126c618)
![企业微信截图_bc1c484e-194d-49db-aa39-e5979fe9b84b](https://github.com/user-attachments/assets/d2dc86c7-ebb9-41e6-8dc5-f7d2a31b4bfa)

Yes, you can directly create a WordPress project.

---

**评论 2** - @abdullah1908 (2025-05-20)

Thanks @xpf0000 - I tried with different way by creating a PHP project & able to setup WP. But this is much quicker way.  Really love this tool & would start this across the teams from today onward.

Keep doing good work!

---

**评论 3** - @fr-timothe (2026-02-02)

I had somme troubles on my side and needed to do those fixes ( I wasnt able to upload large sized pictures ) :
### In the php.ini:
```
upload_max_filesize = 256M

post_max_size = 256M

memory_limit = 512M

max_execution_time = 300

max_input_time = 300
```

You also needed to enable these:

```
extension=gd

extension=intl

extension=mbstring
```

### But the core problem was Nginx:
You need to add this in the Nginx config of your domain ( Vhost Config File ) in the "server" section:
```
client_max_body_size 128M;
```


---

**评论 4** - @xpf0000 (2026-02-02)

> I had somme troubles on my side and needed to do those fixes ( I wasnt able to upload large sized pictures ) :
> 
> ### In the php.ini:
> ```
> upload_max_filesize = 256M
> 
> post_max_size = 256M
> 
> memory_limit = 512M
> 
> max_execution_time = 300
> 
> max_input_time = 300
> ```
> 
> You also needed to enable these:
> 
> ```
> extension=gd
> 
> extension=intl
> 
> extension=mbstring
> ```
> 
> ### But the core problem was Nginx:
> You need to add this in the Nginx config of your domain ( Vhost Config File ) in the "server" section:
> 
> ```
> client_max_body_size 128M;
> ```

These are common configurations for PHP and Nginx. So, do you think the default values should be set a bit larger?

---

**评论 5** - @fr-timothe (2026-02-02)

Yeah definitely especially for Wordpress usage or maybe a preset that can be put to help people that are new to those things to easily enable huge file for their wordpress.

---

---

### 26. #305 - Where docs repository FlyEnv?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-05-19
- **作者**: @lyrihkaesa
- **评论数**: 3
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/305

#### 正文

Can you tell me where is the repository containing the FlyEnv guide documentation, maybe we can contribute to the documentation instead of the code.

#### 评论 (3 条)

**评论 1** - @xpf0000 (2025-05-19)

The official website project is not on GitHub yet. I’ll create one shortly so we can collaborate on improving the documentation together. For now, everyone can edit the wiki here: https://github.com/xpf0000/FlyEnv/wiki. You’re also welcome to start creating documentation there now.

---

**评论 2** - @lyrihkaesa (2025-05-19)

Owh, okay, waiting for docs repository that are easy to collaborate, like docusaurus, etc. 

---

**评论 3** - @xpf0000 (2025-05-20)

https://github.com/xpf0000/FlyEnv-Doc.  This is FlyEnv docs repository

---

---

### 27. #304 - FlyEnv Project: Reflections on Challenges and Future

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-18
- **作者**: @xpf0000
- **评论数**: 11
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/304

#### 正文

### **FlyEnv Project: Reflections on Challenges and Future**  

#### **Project Background**  
As a solo full-stack developer based in China, I’ve built and maintained **FlyEnv**—an open-source tool designed to simplify local development workflows. While there have been contributions from others (visible on GitHub), the project remains **primarily my own effort**.  

What started as a **personal productivity tool** for macOS (focused on PHP) gradually expanded into a cross-platform solution, driven by community feedback. FlyEnv is **100% open-source** (no proprietary components), but the costs—server hosting, developer accounts, hardware, and most significantly, **time investment**—far outweigh the modest donations received. At its core, this is a **passion project**.  

---

#### **Current Challenges**  

**1. Trust and Perception Issues**  
- **"Why should we trust a Chinese developer?"**  
  Some responses on Reddit and other platforms were blunt: skepticism simply because of my location. While frustrating, I understand trust must be earned—especially for tools requiring system-level access.  
- **Security Concerns by Design**  
  FlyEnv needs to read/write local files and execute commands—a necessity for its functionality, but also a **natural red flag** for security-conscious users. Without corporate backing, overcoming this barrier is tough.  

**2. False Positives in Antivirus Software**  
  Tools like **Kaspersky aggressively block** FlyEnv’s CLI operations, labeling them as "suspicious." I’ve submitted reports to address these false alarms, but the process is slow. A **code-signing certificate** (~$350/year) might help, but it’s unclear if it’s worth the cost.  

**3. Competing with Docker’s Dominance**  
  The most common reaction: *"Just use Docker instead."*  
  - **FlyEnv’s niche**: Quick, lightweight setups for **local development** (no complex configs).  
  - **Docker’s strength**: Production-grade consistency and scalability.  
  If users don’t see the difference, why wouldn’t they default to the industry standard?  

---

#### **Doubts About the Future**  
These challenges have made me question whether continuing FlyEnv makes sense:  
- **Is "passion" enough** when costs (time, money) keep rising?  
- **Can trust barriers ever be overcome** without institutional support?  
- **Does the world need another dev tool** when Docker exists?  

Yet, there are moments that keep me going—a user’s thank-you note, a feature request that proves real demand. Still, I can’t ignore the hurdles.  

#### 评论 (11 条)

**评论 1** - @TanNhatCMS (2025-05-19)

Hello,

Thank you for sharing such an honest and insightful reflection on your journey developing FlyEnv. I truly empathize with the challenges you face, especially working solo and dealing with technical hurdles as well as community trust issues.

I believe FlyEnv is a very valuable project because it addresses the real needs of many developers who want a lightweight, fast, and easy-to-use tool for local development. Sometimes, these “small but mighty” solutions are exactly what help the community develop more efficiently alongside bigger tools like Docker.

Regarding trust and security concerns, this is indeed a significant barrier, especially when you don’t have organizational backing. But I believe that with transparency in your code, a loyal user community, and your positive engagement, FlyEnv can gradually build solid trust.

You might also consider calling on the community to help contribute toward the cost of obtaining a code-signing certificate — although it can be costly, this investment could help reduce false antivirus alerts, thereby increasing reliability and improving user experience for FlyEnv.

Finally, don’t worry too much about the comparison with Docker. Every tool has its place in the development ecosystem. FlyEnv’s strengths lie in simplicity and quick setup — something many people still need and appreciate.

I hope you keep your passion alive and continue to develop FlyEnv even better. If you ever need support or want to share more, I’m happy to help.

Wishing you good health and success!

---

**评论 2** - @xpf0000 (2025-05-19)

Thanks for the reply, bro! I’m really glad to see someone engaging with the project—it means people are still paying attention.

You made some great points, and trust definitely takes time to build. I appreciate you sharing your thoughts.

If you have any future requests or suggestions for the project,  always happy to discuss. Looking forward to more exchanges!

---

**评论 3** - @timint (2025-05-21)

I appreciate the honesty and will try to share mine.

>"Why should we trust a Chinese developer?"

I'm happy to see a chinese fellow making his footprint and being internationally engaged in an awesome project. The **code is open source** and can be reviewed and compiled by anyone. I personally don't see your origins as a problem. Maybe I would think twice if there were proprietary parts in closed source.


> Security Concerns by Design

I have no concerns as the design meets the natural use of it. If you need to run the code without system level access then let the user choose their setup during install:

[x] **Local user only** (%LocalAppData% and %AppData%) - Doesn't require sudo. Processes runs as %Username%
[ ] **All users on the machine** (%ProgramFiles% and %ProgramData%) - **Processes runs as system - can be launched before logon.**


> False Positives in Antivirus Software

I assume this question comes from the use case with Kaspersky. That could be a one time case. Poor heuristic detection tech? It might not be an issue with other vendors. You can scan your files with Virustotal. That way be certain that they don't contain bad signatures from library exploits. Does any one have up to date pricing for signing licenses today?

It's not entirely a bad thing to rely on third party dependencies. But you need to make sure **they are up to date**. Libraries will have flaws at times. **Keep them at minimal** as they quickly grow fat.


> Competing with Docker’s Dominance

I used Docker. I don't like it. **I choose FlyEnv** every day of the week and I love it. 🙂
I might choose docker if I worked a lot with **temporary projects and deployments**. It's possible to build a Docker manager UI if ppl want to **run Docker instances with FlyEnv**.

I come from the world of AMP stacks where FlyEnv is a natural selection. If I wanted to run 24 development websites. I don't want to run 24 docker instances with 24 apache daemons. For me FlyEnv is for stack management. While Docker is for stack isolation.


> Is "passion" enough when costs (time, money) keep rising?

If you aim to raise income then premium extras might be a thing to roll out. But don't go the other way and block features people fell in love with. Or raise income from package installers, e.g. "charge WooCommerce a yearly fee for providing a WooCommerce installer".


> Can trust barriers ever be overcome without institutional support?

Transparency is what I think keep trust level at high.


> Does the world need another dev tool when Docker exists?

Yes, yes, and yes! And again, it's possible to add docker management as a thing.


---

**评论 4** - @timint (2025-05-21)

One more thing. Your Github online presence.

Consider migrating the project to a free Github Organization account. It's free for public repositories. It allows you to use your current user as a maintainer. And by time you can assign team members. It might stand out as more prominent. You don't have to own a company for an organzation account.

Bummer, FlyTech was taken. 😄

---

**评论 5** - @xpf0000 (2025-05-21)

Thank you for sharing your thoughts. I truly appreciate all the contributions you've made to the project—thank you so much, bro.

Adding Docker management is an excellent suggestion. One persistent challenge with the Linux version is that many services lack reliable download sources, whereas Docker runs natively on Linux with minimal performance overhead. I'll carefully consider how to best implement this addition.

---

**评论 6** - @timint (2025-05-26)

Here are some ideas I had written down. I would love to hear some feedback on them.

Proposed project changes:
- Migrate project to Github Organization FlyEnv, FlyTech or similar.
- Move "FlyEnv Tools" to separate app (to get rid of a bunch of dependencies and shrink amount of code to maintain).
- Remove orphan libraries, and update existing ones. Get up to date, target ESM.
- Migrate to electron-vite (instead of using a bunch of seperates tscompile, esbuild, vite, electron-build, electron).
- Migrate to two package.json (https://www.electron.build/tutorials/two-package-structure.html).
- Migrate to IPC instead of deprecated nodeIntegration (both for security and future proof reasons).
- Separate the UI from the server process. Perhaps making them two separate apps "FlyEnv Server" and "FlyEnv UI". This would in the future enable FlyEnv to remote control a FlyEnv server. (Seems to go hand in hand with IPC after removing nodeIntegration) Run "FlyEnv Server" as "system" upon system boot and "FlyEnv UI" as "user".
- Merge Mac, Win, Linux branches to one and same. The current way has quickly left one another behind. Use if/switch conditions, separate imports, or separate directories for platform specific anomalies.
- Establishing dev branches for compatibility breaking updates: Branch "dev-feature" for x.X.x, Branch "dev-major" X.x.x).
- Use git `amend` instead of pushing same commit messages a zillion times. A git staging manager tool like SourceTree could be helpful.

Potential Premium upgrades:
- One click updates e.g. PHP 8.4.1 to 8.4.2
- Control more than one FlyEnv server remotely over TCP/IP socket. (Select which server from dropdown in the top left menu)
- Vhost template management

---

**评论 7** - @xpf0000 (2025-05-27)

Thank you for these great suggestions. Some of them can be implemented right away. For example:  
1. Remove orphan libraries and update existing ones. Get up to date, target ESM.  
2. Migrate to IPC instead of the deprecated nodeIntegration (both for security and future-proofing reasons).  
3. Establishing dev branches for compatibility-breaking updates: Branch "dev-feature" for x.X.x, Branch "dev-major" for X.x.x.  
4. One-click updates, e.g., PHP 8.4.1 to 8.4.2.  
5. Vhost template management (this already exists, but the menu location is somewhat hidden and may need optimization).  

Some may require further consideration to determine if a good solution can be found.  

For example, tools like FlyEnv Tools—there are already many similar utility software options available. If we were to spin it off as a separate application, I'm not sure if it would attract users to install yet another standalone app. Additionally, Electron has a critical drawback: the issue of large package sizes. Packaged applications are at least around 80MB, whereas many similar utility tools may only be a few MB in size, which could also be a concern. These are my current thoughts.  

In any case, I truly appreciate all these excellent suggestions. Thanks bro.

---

**评论 8** - @timint (2025-05-27)

I'm very happy to see you have already started to update some libraries to newer versions in the latest version. I did some experimental work on this myself and might be able to send you a pull request when ready. Among these the removal of fs-extra in favour of the already native fs..Sync functions.

>Electron has a critical drawback: the issue of large package sizes

Yes electron apps are indeed heavy weight because of the chrome bundle. But it's not unusual anymore as that is the nature of native web apps. I wouldn't worry about 80 MB. 250 MB would raise eybrows.

> If we were to spin it off as a separate application, I'm not sure if it would attract users to install yet another standalone app.

The disadvantage with keeping it inside FlyEnv is that it becomes dependant on FlyEnv. Not every developer is a FlyEnv users. Turn the idea around the other way. A standalone app could help spread awareness of the name" FlyEnv" to a bigger audience. Perhaps creating a poll to gain some community feedback is a good idea?

> there are already many similar utility software options available

Do you know any by name that I can look at? I haven't seen any before. I just want to see the competition you are referring to.

> One-click updates

Maybe an icon at the top left showing "3 updates" available. Clicking it shows a page where all detected updates are listed. The ability to handpick one update or do them all with a button click.


---

**评论 9** - @ink4art (2025-08-15)

Be nice if this were in SettApp. Any chance of a bundled Wordpress? That would be your biggest market.

---

**评论 10** - @xpf0000 (2025-08-16)

> Be nice if this were in SettApp. Any chance of a bundled Wordpress? That would be your biggest market.

Thank you for your advice. Regarding the built-in WordPress, what specific issues is it intended to address? To be honest, I don't use WordPress much, so I'm not entirely clear about the problems that may arise during WordPress development, deployment, and other stages, or how FlyEnv can help in these areas. If you have experience with this, I'd appreciate it if you could elaborate in detail.

---

**评论 11** - @liyujiang-gzu (2025-08-20)

> Do you know any by name that I can look at? I haven't seen any before. I just want to see the competition you are referring to.

Such as IT-Tools https://it-tools.tech/, uTools https://www.u-tools.cn/, Rubick https://github.com/rubickCenter/rubick/

---

---

### 28. #303 - can search any available models by brew  like mysql,Redis

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-05-17
- **作者**: @adaipan
- **评论数**: 1
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/303

#### 正文

can search any available models by brew  like mysql,Redis.but at term can brew search 

#### 评论 (1 条)

**评论 1** - @adaipan (2025-05-17)

macOS  15.5


---

---

### 29. #301 - Explanation Regarding False Positives by Kaspersky on Windows Versions

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-16
- **作者**: @xpf0000
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/301

#### 正文

Currently, when FlyEnv starts services, it uses the system's ​cmd or ​PowerShell to execute the respective startup commands. Similarly, when stopping services, it retrieves process information via ​PowerShell and terminates them. This process involves frequent execution of ​cmd and ​PowerShell, which has triggered false detections by Kaspersky.

This notice serves as clarification. If you have concerns, you may clone the project and test or build it locally. The project is fully open-source, and the official version is identical to a locally built one.

I will continue working on resolving this issue and welcome any assistance from the community.

#### 评论 (4 条)

**评论 1** - @timint (2025-05-16)

I see this a lot. There are two main things here.
- Unsigned executable gets flagged as potential danger.
- Then there is the heuristic part where anti viruses tries to determine a possible danger by vast estimations. As there is source code for stopping and starting processes I think that raises the hazardous score of potential malware.

If it's no problem signing the code and executables with a developer license I would start there. Report false positives to each and every anti virus vendor is a lengthy process.

---

**评论 2** - @timint (2025-05-16)

Oh, and third party libraries also plays a role. Some libraries might contain vulnerabilities. Just in general I recommend keeping the amount of third party dependencies at a minimum. Here are some words for motivation 🙂: https://github.com/LiteCore/framework/blob/master/NoNonsenseCoding.md#no-fat-third-party-libraries-for-small-features

---

**评论 3** - @xpf0000 (2025-05-17)

I installed Kaspersky locally. Then, while debugging a project with Kaspersky enabled, I found that I couldn't execute Node.js's `exec` at all. Even something as simple as outputting a character, like `exec(`echo "TEST !!!"`)`, would trigger a Kaspersky alert with the reason: "Behavior Analysis." It seems Kaspersky doesn't inspect the code or the commands being executed. It just checks whether a new cmd or PowerShell process is launched. This leaves almost no room for optimization. I've already reported this issue to Kaspersky to see if I can get a response from them.

---

**评论 4** - @TanNhatCMS (2025-05-18)

I don't need to install antivirus software

---

---

### 30. #300 - Found some text that still on original language (chinses)

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-16
- **作者**: @AlnThea
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/300

#### 正文

first, i can't do "pull request", so im post it here.
i found some text that still on original language, and need it to translate it, i know we can ignore it, but for english version need translateid to english
![Screenshot (2)](https://github.com/user-attachments/assets/b4bdf6e5-3f80-4f78-bb65-987cd68f356b)


#### 评论 (2 条)

**评论 1** - @openapphub (2025-06-20)

@dahlan1991 The latest version has been fixed.

---

**评论 2** - @AlnThea (2025-09-06)

> @dahlan1991 The latest version has been fixed.

yes, just now im done intalling thje new version on my linux ubuntu, now on installing the rest.
thank for the info

---

---

### 31. #298 - Guidance on using SMTP server for Local Mail Testing in PHP

- **分类**: Q&A
- **状态**: closed
- **创建时间**: 2025-05-15
- **作者**: @hardiklakhalani
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/298

#### 正文

I tried understanding documentation multiple times, even experimented with different things said there but still unable to get it working.
I'm currently using [mailtrap](https://mailtrap.io/) for live and [SMTP4Dev ](https://github.com/rnwood/smtp4dev) for local testing. and now since I found this All in One tool. I want to implement this to eliminate alternatives.

I have the following keys to fill in my PHP .env, but doc is so advanced level that getting these values sorted is like a puzzle to me right now.

```env
MAIL_MAILER=smtp
MAIL_HOST=
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM_ADDRESS="dummysender@example.com"
MAIL_FROM_NAME="John Doe The Sender"
MAIL_PORT=
MAIL_ENCRYPTION=
```

🙏 We'd really appreciate a simple example tutorial in the doc or somewhere you feel right. Thank you

---

### 32. #296 - How to serve with "xyz.test" over local network (not 127.0.0.1)

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-05-15
- **作者**: @hardiklakhalani
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/296

#### 正文

I'm developing a PHP/Laravel backend project, and for the front end, I want access with `xyz.test` instead of `192.168.x.x:yyyy`
What would be the closest solution I could get from expectation?
In my workplace IPs are dynamic so I want to use the backend on a fixed URL like xyz.test

![image](https://github.com/user-attachments/assets/a7c560ed-82a9-4ff3-8884-00513571e064)

|  |  |
|---------|---------|
| ![image](https://github.com/user-attachments/assets/fe346f4f-c574-4fad-b90d-e19fac7483cf) | ![image](https://github.com/user-attachments/assets/70c06d4b-945a-4217-b74e-334c7c53e62f) |


#### 评论 (4 条)

**评论 1** - @xpf0000 (2025-05-15)

Do you want to access **xyz.test** from other computers on the local network?  

Simply install **FlyEnv** on those machines as well. Then:  
1. Click **Hosts → Open hosts**  
2. In the opened `hosts` file, add an entry pointing **xyz.test** to the **LAN IP** of the server running xyz.test.  

---

**评论 2** - @hardiklakhalani (2025-05-15)

> Do you want to access xyz.test from other computers on the local network?

I want to access xyz.test URL from an Android mobile device, which can only access 192.168.. URLs.

---

**评论 3** - @xpf0000 (2025-05-15)

### Mobile Device Setup Guide:  
To access **xyz.test** on your mobile device, follow these steps:  

1. **In FlyEnv**:  
   - Start the **DNS service**.  

2. **On your mobile device**:  
   - Go to **Network Settings** → **DNS Configuration**.  
   - Set the DNS server to the **IP address displayed in FlyEnv's DNS service interface**.  

**How It Works**:  
When you visit **xyz.test** on your mobile device, the DNS query will be resolved by FlyEnv, which returns the **LAN IP** of the server hosting `xyz.test`. This achieves the same effect as manually editing the `hosts` file.  

---

**评论 4** - @hardiklakhalani (2025-05-15)

It keeps spinning. (I just updated with latest version)
No App Log being added.
![image](https://github.com/user-attachments/assets/656462d0-03d8-41dd-9254-10ba8f4e4a31)


---

---

### 33. #294 - Is there a setting to run the app minimized? I can't find it.

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-15
- **作者**: @arizainalf
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/294

#### 正文

Is there a setting to run the app minimized? I can't find it.

#### 评论 (2 条)

**评论 1** - @xpf0000 (2025-05-15)

Click the close button. That is equivalent to minimizing. Then on Windows, you can find it in the system tray at the bottom right. On macOS, you can find it in the menu bar at the top right.

---

**评论 2** - @syrian-dev (2025-06-22)

this close the programs on linux .
version on linux phpwebstudy 4.0.0 .
i can't find new version for linux !

---

---

### 34. #293 - Problems building project on Windows

- **分类**: General
- **状态**: open
- **创建时间**: 2025-05-14
- **作者**: @timint
- **评论数**: 5
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/293

#### 正文

I am having trouble building this project on Windows.

- The `master` branch don't seem to include the windows files
- The `Win` branch doesn't include web/ or lang/ the app expects it.

I assume I need to `git clone` both projects, and create symbolic links from Master to the missing directories in Win? But trying that gave me this error during `npm run build`.
> TypeError: The argument 'filename' must be a file URL object, file URL string, or absolute path string. Received undefined

Can somone uide me through what needs to be done?
I can help writing a wiki page with instructions.

#### 评论 (5 条)

**评论 1** - @xpf0000 (2025-05-15)

![image](https://github.com/user-attachments/assets/564d1f7d-4ad5-4fe7-85bb-3cb6b4e86c62)

The `web` folder exists only in the main branch. It was used to build an online simulation app but is now deprecated and will be deleted in the future.  

When cloning the repository, use the following command for the **Win branch**:  
```bash
git clone -b Win "git@github.com:xpf0000/FlyEnv.git"
```  

It is recommended to keep the **macOS branch** and **Win branch** in separate folders, as their codebases are independent and mostly incompatible for merging.  

After cloning the project, follow these steps:  
1. Install **Visual Studio**, then in the VS installer, add **Desktop Development with C++** and **Node.js Development**.  
2. Install **Python 3.12+** and configure the system environment variables.  
3. Navigate to the project directory (`cd`), then:  
   - Run `npm install -g node-gyp` to install **node-gyp** globally.  
   - Run `yarn install` or `npm install` to install dependencies.  
4. Run tests using `yarn run dev` or `npm run dev`.  
5. Build the project with `yarn run build` or `npm run build`.

---

**评论 2** - @timint (2025-05-15)

That didn't work :(

The first issue is node-pty doesn't seem compatible with Windows 11. Updating to 1.1.0-beta34 solves that.
But that unlocks new problems.

```
X:\FlyEnv\> npm run dev

> PhpWebStudy@4.9.10 dev
> npm run build-dev-runner && cross-env NODE_ENV=development TEST=electron node electron/dev-runner.js


> PhpWebStudy@4.9.10 build-dev-runner
> npx esbuild --platform=node --bundle --external:vite --external:esbuild --external:consolidate --external:@vue/compiler-sfc scripts/dev-runner.ts --outfile=electron/dev-runner.js


  electron\dev-runner.js  3.0mb ⚠️

⚡ Done in 1101ms
renderPath:  X:\FlyEnv\src\render
sharePath:  X:\FlyEnv\src\shared
process.env.TEST electron !!!!!!
sh:  X:\FlyEnv\scripts\electron-kill.ps1 X:\FlyEnv\scripts
index.dev.ts文件发生更新
sh:  X:\FlyEnv\scripts\electron-kill.ps1 X:\FlyEnv\scripts
module\host\Task.ts文件发生更新
sh:  X:\FlyEnv\scripts\electron-kill.ps1 X:\FlyEnv\scripts
(node:64744) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
(Use `node --trace-deprecation ...` to show where the warning was created)
node:fs:742
  return binding.read(fd, buffer, offset, length, position);
                 ^

Error: EISDIR: illegal operation on a directory, read
    at Object.readSync (node:fs:742:18)
    at tryReadSync (node:fs:419:20)
    at Object.readFileSync (node:fs:473:19)
    at FSWatcher.<anonymous> (X:\FlyEnv\electron\dev-runner.js:83679:75)
    at FSWatcher.emit (node:events:507:28)
    at FSWatcher._handle.onchange (node:internal/fs/watchers:215:12) {
  errno: -4068,
  code: 'EISDIR',
  syscall: 'read'
}

Node.js v23.11.0
```

---

**评论 3** - @xpf0000 (2025-05-18)

# My Environment Information

### **My System Info**
| Category                  | Value                                  |
|---------------------------|----------------------------------------|
| Version                   | Windows 11 Pro                         |
| Version                   | 24H2                                   |
| Install Date              | 3/22/2025                              |
| OS Build                  | 26100.3775                             |
| Experience                | Windows Feature Experience Pack 1000.26100.66.0 |

### **Runtime Environment**
| Component       | Version              |
|-----------------|----------------------|
| NodeJS          | v21.7.3              |
| node-gyp        | v11.1.0              |
| Python          | 3.12.9               |
| Visual Studio   | 2022 17.13.35913.81  |

### **PowerShell Environment Variables**
```
Name                           Value
----                           -----
ALLUSERSPROFILE                C:\ProgramData
APPDATA                        C:\Users\x\AppData\Roaming
CommonProgramFiles             C:\Program Files\Common Files
CommonProgramFiles(Arm)        C:\Program Files (Arm)\Common Files
CommonProgramFiles(x86)        C:\Program Files (x86)\Common Files
CommonProgramW6432             C:\Program Files\Common Files
COMPUTERNAME                   A634
ComSpec                        C:\WINDOWS\system32\cmd.exe
DriverData                     C:\Windows\System32\Drivers\DriverData
ERLANG_HOME                    C:\Users\x\Desktop\Git Hub\FlyEnv\data\env\erlang
FLYENV_ENV_FLUSH               0
HOMEDRIVE                      C:
HOMEPATH                       \Users\x
JAVA_HOME                      C:\Users\x\Desktop\Git Hub\FlyEnv\data\env\java
LOCALAPPDATA                   C:\Users\x\AppData\Local
LOGONSERVER                    \\A634
NUMBER_OF_PROCESSORS           4
OS                             Windows_NT
Path                           C:\Users\x\Desktop\Git Hub\FlyEnv\data\env\node;C:\Users\x\Desktop\Git Hub\FlyEnv\data\env\java\bin;C:\Users\x\Desk...
PATHEXT                        .COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.CPL
PROCESSOR_ARCHITECTURE         ARM64
PROCESSOR_IDENTIFIER           ARMv8 (64-bit) Family 8 Model 0 Revision   0,
PROCESSOR_LEVEL                0
PROCESSOR_REVISION             0000
ProgramData                    C:\ProgramData
ProgramFiles                   C:\Program Files
ProgramFiles(Arm)              C:\Program Files (Arm)
ProgramFiles(x86)              C:\Program Files (x86)
ProgramW6432                   C:\Program Files
PSModulePath                   \\Mac\Home\Documents\WindowsPowerShell\Modules;C:\Program Files\WindowsPowerShell\Modules;C:\WINDOWS\system32\Windo...
PUBLIC                         C:\Users\Public
SystemDrive                    C:
SystemRoot                     C:\WINDOWS
TEMP                           C:\Users\x\AppData\Local\Temp
TMP                            C:\Users\x\AppData\Local\Temp
USERDOMAIN                     A634
USERDOMAIN_ROAMINGPROFILE      A634
USERNAME                       x
USERPROFILE                    C:\Users\x
windir                         C:\WINDOWS
```

### **Visual Studio Info**
```json
[
  {
    "instanceId": "03d9ba2c",
    "installDate": "2025-03-22T15:23:55Z",
    "installationName": "VisualStudio/17.13.4+35913.81",
    "installationPath": "C:\\Program Files\\Microsoft Visual Studio\\2022\\Community",
    "installationVersion": "17.13.35913.81",
    "productId": "Microsoft.VisualStudio.Product.Community",
    "productPath": "C:\\Program Files\\Microsoft Visual Studio\\2022\\Community\\Common7\\IDE\\devenv.exe",
    "state": 4294967295,
    "isComplete": true,
    "isLaunchable": true,
    "isPrerelease": false,
    "isRebootRequired": false,
    "displayName": "Visual Studio Community 2022",
    "description": "Powerful IDE for students, open-source contributors and individuals (free for use)",
    "channelId": "VisualStudio.17.Release",
    "channelUri": "https://aka.ms/vs/17/release/channel",
    "enginePath": "C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\resources\\app\\ServiceHub\\Services\\Microsoft.VisualStudio.Setup.Service",
    "installedChannelId": "VisualStudio.17.Release",
    "installedChannelUri": "https://aka.ms/vs/17/release/channel",
    "releaseNotes": "https://docs.microsoft.com/en-us/visualstudio/releases/2022/release-notes-v17.13#17.13.4",
    "resolvedInstallationPath": "C:\\Program Files\\Microsoft Visual Studio\\2022\\Community",
    "thirdPartyNotices": "https://go.microsoft.com/fwlink/?LinkId=661288",
    "updateDate": "2025-03-22T15:23:55.8479805Z",
    "catalog": {
      "buildBranch": "d17.13",
      "buildVersion": "17.13.35913.81",
      "id": "VisualStudio/17.13.4+35913.81",
      "localBuild": "build-lab",
      "manifestName": "VisualStudio",
      "manifestType": "installer",
      "productDisplayVersion": "17.13.4",
      "productLine": "Dev17",
      "productLineVersion": "2022",
      "productMilestone": "RTW",
      "productMilestoneIsPreRelease": "False",
      "productName": "Visual Studio",
      "productPatchVersion": "4",
      "productPreReleaseMilestoneSuffix": "1.0",
      "productSemanticVersion": "17.13.4+35913.81",
      "requiredEngineVersion": "3.13.2069.59209"
    },
    "properties": {
      "campaignId": "2030:441648560cf0bca381104e2c55dd7ff1",
      "channelManifestId": "VisualStudio.17.Release/17.13.4+35913.81",
      "includeRecommended": "1",
      "nickname": "",
      "setupEngineFilePath": "C:\\Program Files (x86)\\Microsoft Visual Studio\\Installer\\setup.exe"
    }
  }
]
```

### **Installed Components in Visual Studio Installer**

**Node.js Development:**
- Node.js development tools
- JavaScript and TypeScript language diagnostics
- JavaScript diagnostics
- C++ core features
- MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)

**Desktop Development with C++:**
- C++ core desktop features
- MSVC v143 - VS 2022 C++ x64/x86 build tools (latest)
- C++ CMake tools for Windows
- Windows 11 SDK (10.0.22621.0)
- JavaScript diagnostics

**Individual Components:**
- MSVC v143 - VS 2022 C++ x64/x86 Spectre-mitigated libraries (latest)

### Screenshots

<img width="981" alt="image" src="https://github.com/user-attachments/assets/6ae4c123-0435-47ff-92df-5032a7b189a7" />
<img width="1217" alt="image" src="https://github.com/user-attachments/assets/fab6fbb2-13e3-44ca-80a5-af0625ac6dc9" />
<img width="1218" alt="image" src="https://github.com/user-attachments/assets/79d1fc49-e600-4c5a-bab4-670ecdd4ffac" />
<img width="1275" alt="image" src="https://github.com/user-attachments/assets/1e2bf2e7-4aa0-4d8b-aff7-77175b82eeab" />
<img width="1273" alt="image" src="https://github.com/user-attachments/assets/ad67ffef-ad61-427f-aca1-167007e5c520" />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/a01209a3-915c-4228-904d-9175ccb235b4" />
<img width="1469" alt="image" src="https://github.com/user-attachments/assets/7c8cb7b0-c92a-4c58-a244-feb4343da9b6" />
<img width="1920" alt="image" src="https://github.com/user-attachments/assets/f5ddce28-6c02-4f2d-87a7-882d132cc7fa" />


---

**评论 4** - @mhasanmeet (2025-05-18)

Does it support Windows operating systems running on a 64-bit processor? Seems like in documentation you only mention about x86_64 
![Screenshot_4](https://github.com/user-attachments/assets/3db3d37b-c1ea-4474-bf2d-71a049985de2)
 processor. 

---

**评论 5** - @xpf0000 (2025-05-19)

X86_64 is 64-bit processor. Only support 64-bit processor,  not support 32-bit processor. 

---

---

### 35. #263 - [Feature] Open projects directly in the code editor

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-04-29
- **作者**: @digital-skylines
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/263

#### 正文

Hello,

I’d like to suggest a feature that could streamline the workflow. What do you thing about the ability to open a project directly in the code editor. I think this would save time by reducing the steps required to start working on a project and improve productivity.

#### 评论 (2 条)

**评论 1** - @timint (2025-05-14)

This is done mainly by passing a directory as argument to an executable. Given that the directories are accepted.
E.g: /path/to/executable /path/to/workdir

Right now it would be a two click procedure.
1. Select Open
2. Right click the folder space and choose open with editor.
![image](https://github.com/user-attachments/assets/0818e948-74af-4545-9945-daaf67508010)

A minimal effort way would be to make this a setting:
(o) Open directory with File Explorer
(  ) Open directory with custom command: _______________________

A more complex way would be this.
![image](https://github.com/user-attachments/assets/6b3ac629-df83-427f-83a6-1ed00b3473d7)

My opinion.. it's good the way it is already. File Explorer already provides these options.

---

**评论 2** - @xpf0000 (2025-05-15)

![image](https://github.com/user-attachments/assets/2b066c15-708f-49bd-a35c-e0f3936b506a)
This feature is already available in the project management section of each language module.

---

---

### 36. #262 - What technical limitations does FlyEnv have compared to similar tools?

- **分类**: General
- **状态**: open
- **创建时间**: 2025-04-27
- **作者**: @xpf0000
- **评论数**: 6
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/262

#### 正文

First and foremost, thank you all for joining this discussion. Whether you're a fan of FlyEnv or not, your feedback is incredibly valuable to us.

Your presence here means you're either using or exploring similar tools. If you're already a FlyEnv user, I sincerely appreciate your support. If you've chosen an alternative solution, I'd love to understand why—your honest insights will help FlyEnv improve.

Looking forward to hearing your thoughts!

#### 评论 (6 条)

**评论 1** - @RobiNN1 (2025-04-28)

I haven't found any major issues. The only thing I would like is a simple button to update any PHP version with all extensions.




---

**评论 2** - @timint (2025-04-29)

I like this idea and had the same thought. The ability to update to the latest version within each milestone 8.4.x would be superior.

---

**评论 3** - @sirnitooo-wq (2025-10-12)

This tool only allows developers to add three PHP projects at a time. This is very limited for any developer, so Laragon is preferred over FlyEnv.

---

**评论 4** - @RobiNN1 (2025-10-12)

You can get a license for free if you contribute new language, fix some code, make videos, etc. Or if you donate any amount.

Laragon is very bad compared to this. By the way, I was a long-time user of Laragon.

---

**评论 5** - @sirnitooo-wq (2025-10-13)

So, i prefer waiting for free version, if one day is to come, in this moment i don’t time to contribute with code or another way with you.

 

De: Róbert Kelčák ***@***.***> 
Enviada: 12 de outubro de 2025 11:58
Para: xpf0000/FlyEnv ***@***.***>
Cc: sirnitooo-wq ***@***.***>; Comment ***@***.***>
Assunto: Re: [xpf0000/FlyEnv] What technical limitations does FlyEnv have compared to similar tools? (Discussion #262)

 

You can get a license for free if you contribute new language, fix some code, make videos, etc. Or if you donate any amount.

Laragon is very bad compared to this. By the way, I was a long-time user of Laragon.

—
Reply to this email directly, view it on GitHub <https://github.com/xpf0000/FlyEnv/discussions/262#discussioncomment-14657984> , or unsubscribe <https://github.com/notifications/unsubscribe-auth/BWCVZG2TVR5I5MVUIGQUIAL3XIX5FAVCNFSM6AAAAAB36SQR2KVHI2DSMVQWIX3LMV43URDJONRXK43TNFXW4Q3PNVWWK3TUHMYTINRVG44TQNA> .
You are receiving this because you commented.  <https://github.com/notifications/beacon/BWCVZG3FB7AWNKPQBXSTJL33XIX5FA5CNFSM6AAAAAB36SQR2KWGG33NNVSW45C7OR4XAZNRIRUXGY3VONZWS33OINXW23LFNZ2KUY3PNVWWK3TUL5UWJTQA36U4A.gif> Message ID: ***@***.*** ***@***.***> >



---

**评论 6** - @isharmaIND (2025-11-03)

How to move license if I need to reinstall FlyEnv or install to another PC/Laptop ?

---

---

### 37. #241 - [Feature] 000-default configuration

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-04-03
- **作者**: @timint
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/241

#### 正文

Apache has an annoying behavior of always defaulting to the first virtualhost configuration for domain names that point to the server but don't match a virtualhost directive. Therefore many platforms use the `000-default.conf` file. 000 is likely resolved before any other named configurations and therefore the name.

A proposal of always including 000-default.conf for fresh new installations. Visible in the list of sites, or hidden. Anything goes.
The default index.html could be a simple parking page just displaying the FlyEnv logo.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        svg {
            width: 150px;
            height: 150px;
        }
    </style>
</head>
<body>
    <svg xmlns="http://www.w3.org/2000/svg">
        ...
    </svg>
</body>
</html>
```


---

### 38. #240 - [Feature] Public or private access by default

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-04-03
- **作者**: @timint
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/240

#### 正文

I am coming from XAMPP and fell in love with FlyEnv right on the spot when I tried it. ❤️

One thing that wasn't obvious to me. XAMPP defaults deny traffic that is no local (Requre local). Luckily I found out rather soon that FlyEnv accepts traffic from all origins by default. So in this topic I'd like to discuss if this is a good thing as it is, or if it's something users should be aware of, or making an active the choice whether to.

This could also be related to the Templates discussion. One template for public domains, another for private/local.
https://github.com/xpf0000/FlyEnv/discussions/239

If this a configuration property it could be resolved with an If condition:
```conf
<If "env('MY_VAR') == 'some_value'">
    # Do something
</If>
```

---

### 39. #239 - [Feature] Binding virtualhosts to templates

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-04-03
- **作者**: @timint
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/239

#### 正文

I'm posting this idea as I came across a situation today where this would have been a good idea. :)

I had added around ~20 domains when I realized I needed to add an additional configuration directive (To all of them). So I thought it would be smart to do this in the vhost template. I then figured out the template is just for future domains being added and not those already added. Making it a "default config" rather than an actual "template".

So I am proposing... the ability to bind virtualhost configs to templates.

To do this we can use Apache Macros.

**VHostTemplate.conf**
```
# Load the macro module
LoadModule macro_module modules/mod_macro.so

# Define the Template
<Macro VHostTemplate $domain $docroot>
    <VirtualHost *:80>
        ServerName $domain
        DocumentRoot "$docroot"
        ...
    </VirtualHost>
</Macro>
```

And to use the macro:

**myhostname.local.conf**
```conf
Use VHostTemplate myhostname.local "/path/to/docroot"
```

When editing a site, a dropdown could be shown to:
[A] bind the site to a template
[B] use a custom config (defaulting to the way it does it today)
Similar to how we configure "Nginx URL Rewrites".
![image](https://github.com/user-attachments/assets/5d01869e-8b62-4c07-9b5a-19d8b93d5573)

---

### 40. #229 - Where do all the backend apps come from?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-03-27
- **作者**: @michacassola
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/229

#### 正文

Hey, the backend apps, mariadb and nginx, where are they built? What environment is used to build them natively for windows? MSYS2 and MinGW64?

Any info how you put this all together is highly appreciated!

#### 评论 (2 条)

**评论 1** - @xpf0000 (2025-03-28)

No, I didn’t build them. They were all provided by official sources or contributed by others on GitHub. FlyEnv supports a vast number of software packages, and building them natively for Windows would require significant effort.
﻿
For backend apps like MariaDB and Nginx on Windows, they are typically built using cross-compilation tools like MSYS2/MinGW64 or Microsoft’s own toolchains (e.g., MSVC). However, in FlyEnv’s case, I focus on integration rather than native builds—leveraging pre-compiled binaries from official distributions or trusted community sources.
﻿
My role is to unify these components into a cohesive architecture, ensuring compatibility and ease of use. If you’re curious about specific build processes, I’d recommend checking the official documentation of each project (e.g., MariaDB’s Windows build guides or Nginx’s Win32 port). Happy to share more details about the integration side though!

---

**评论 2** - @michacassola (2025-03-29)

Thanks for your detailed answer! 💪

---

---

### 41. #222 - How to  add different PHP version (rapbsberry PI 5)

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-03-23
- **作者**: @gcyrillus
- **评论数**: 5
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/222

#### 正文

Hi everyone,

I just got PHPwebstudy  running and it comes with PHP 8.2 

I am trying to replicate what i have on windows with laragon to easily switch from Apache to nginx and also PHP 5.6 / 7.3.33 / 8.3.4 / 8.4.3 
_Windows seems not to be the best to play with website, so this is why i enter the world of linux via rapsberry._

PHP 5.6 is for archeology :) ,so not really needed

So far, nginx+php 8.2 + virtualHost load fine phpinfo()  

**How can i add different PHP versions to choose one to run as seen on the screenshots ? or at least update to 8.3.4 ?**

It looks like a great tool :)


#### 评论 (5 条)

**评论 1** - @xpf0000 (2025-03-25)

![af16bd11dc1f](https://github.com/user-attachments/assets/4fd5f0be-500e-44b3-b3cb-aab0260cb114)

All modules contain these two tabs
Service:  Display the currently installed version and manage services
Version:  List all available versions and provide them for users to install

If you want to add different PHP versions Just install it in the Version tab of the PHP module

Additionally, FlyEnv also provides a method for selecting locally installed versions. Click this button, select the locally installed version, and it will be displayed

![556477c815bc](https://github.com/user-attachments/assets/0e829e2a-81aa-4b08-90be-bb4611de65a2)



---

**评论 2** - @xpf0000 (2025-03-25)

https://flyenv.com/zh/guide/getting-started.html

---

**评论 3** - @gcyrillus (2025-03-25)


Thanks , tried to follow those before asking :)

I should have notified that  i just start using Linux and that trying to install homebrew ends with: `Homebrew on Linux is not supported on ARM processors.`  

For the php module, there is only 2 tabs : Services | Version Manager

**Service** lists only : 
- 8.2.28 | /usr/

**Version Manager** lists : 
- *homebrew* (greyed, readonly option)
- apt
- static-php



---

**评论 4** - @xpf0000 (2025-03-26)

> Thanks , tried to follow those before asking :)
> 
> I should have notified that i just start using Linux and that trying to install homebrew ends with: `Homebrew on Linux is not supported on ARM processors.`
> 
> For the php module, there is only 2 tabs : Services | Version Manager
> 
> **Service** lists only :
> 
> * 8.2.28 | /usr/
> 
> **Version Manager** lists :
> 
> * _homebrew_ (greyed, readonly option)
> * apt
> * static-php

The Linux version hasn't been updated for a long time. At present, it is only equivalent to an initial version. There is currently no update plan in the short time. But adding custom version functionality should be available

---

**评论 5** - @gcyrillus (2025-03-26)

Okay, i understand.

**Once i managed otherwise to install different version of PHP , which file(s) am i supposed to edit to make them available in your app, configure the app ?**



---

---

### 42. #212 - How to use correct php version from command line?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-03-06
- **作者**: @aureliusm
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/212

#### 正文

Hi, 

if I add a project in hosts with e.g. PHP 7.4 as it's php version. How can use then this version of php also if I run command line prompts from the project's folder? Don't know how to do that :) Would be great if it would be automatic.

Thanks!

#### 评论 (2 条)

**评论 1** - @xpf0000 (2025-03-06)

At present, this feature is not available. I will consider how to achieve it

---

**评论 2** - @aureliusm (2025-03-06)

Thank you for your fast response. I checked and I think Laravel Herd does it by routing through their own command. So instead of calling for example `php artisan command`, you call `herd php artisan command`. And in the background you could check if there is a project at this path, get it's php version and route to the correct php file. So maybe this is an option.

---

---

### 43. #207 - Accessing project via localhost/projectname instead of virtual domain

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2025-02-28
- **作者**: @rheznendra
- **评论数**: 2
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/207

#### 正文

is there a way to see our project via `localhost/projectname` like we usually does with xampp/laragon, or like a configuration for the apache/nginx to do it.

Because if i tried to access from `http://localhost` it will somehow showing my login page project, and if i enable the phpmyadmin somehow it's showing the login page for the phpmyadmin.

#### 评论 (2 条)

**评论 1** - @RobiNN1 (2025-02-28)

Domains are way better but you can add localhost as project and point it to www folder and you have the same thing

<img width="465" alt="idk" src="https://github.com/user-attachments/assets/f89670c7-1166-4424-b8cd-9255353fd76f" />




---

**评论 2** - @rheznendra (2025-02-28)

i manage to make it work by doing this, but the only thing is that it only works if i'm using apache. With Nginx it just showing index on www directory and whenever to access project directories like `localhost/projectA`, `localhost/projectB` or `localhost/projectC/public` (for laravel) it just showing the index from www dir.

---

---

### 44. #186 - Adding more search engine

- **分类**: Ideas
- **状态**: open
- **创建时间**: 2025-02-09
- **作者**: @umefarooq
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/186

#### 正文

Hi,
FlyEnv look great a better alternative of Herd, I was Adding more search engine options like Typesense and Meilisearch these two opensource will be really helpful for developer community.

---

### 45. #185 - PHP Extension not show in Linux Fedora

- **分类**: General
- **状态**: open
- **创建时间**: 2025-02-09
- **作者**: @yuisa-scarlet
- **评论数**: 3
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/185

#### 正文

I have problem in my linux. My PHP Extension is not show in the app, anyone can help this problem?

I have install brew, and add brew in path..
![image](https://github.com/user-attachments/assets/0be9bcf5-0172-4012-a467-323cc05688b6)



#### 评论 (3 条)

**评论 1** - @xpf0000 (2025-02-09)

```
brew tap shivammathur/extensions
```
php extension use this.  https://github.com/shivammathur/homebrew-extensions

---

**评论 2** - @yuisa-scarlet (2025-02-10)

i have added shivamathur/extensions, it still not show in the app.

---

**评论 3** - @khandakershahi (2025-02-11)

I saw mine was working. I saw the extensions, but now it's also not showing any extension. I am on Debian 12 using apt and my repo is 
https://packages.sury.org/php bookworm InRelease
![2025-02-11_12-54](https://github.com/user-attachments/assets/daf26cd4-2098-49dd-b0b3-aa16ca3f843f)


---

---

### 46. #121 - Would love to contribute. Where to begin?

- **分类**: Q&A
- **状态**: open
- **创建时间**: 2024-09-19
- **作者**: @AkshatRamanathan
- **评论数**: 8
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/121

#### 正文

Im a Vue developer. Want to contribute. Please help with some English documentation and help, actively seeking issues to support and contribute to open source

#### 评论 (8 条)

**评论 1** - @xpf0000 (2024-09-19)

Thanks. I will write a detailed document.

---

**评论 2** - @AkshatRamanathan (2024-09-19)

Thank you. Will look forward to some english documentation and steps to work on. Also please raise any issues in english if possible. Will be easier for more people to contribute if possible

---

**评论 3** - @AkshatRamanathan (2024-09-21)

Hi @xpf0000, any update on the docs? I can begin somewhere if you point me in the right direction

---

**评论 4** - @xpf0000 (2024-09-21)

Not completely finished yet. Some are listed in [DEV.md](https://github.com/xpf0000/PhpWebStudy/blob/master/DEV.md).  The project structure is currently being adjusted to accommodate multi-person collaboration. Currently, a lot of code is mixed together. Adding or modifying modules requires modifying many files. It is currently being improved.

---

**评论 5** - @AkshatRamanathan (2024-09-21)

Thank you for the response. I will look forward to contribute. Please let me know when I can start. Thanks again for your help

---

**评论 6** - @xpf0000 (2024-09-23)

docs has updated. [Development Guide](https://github.com/xpf0000/PhpWebStudy/blob/master/DEV.md).  You can fork the repo and run/test in local.

---

**评论 7** - @AkshatRamanathan (2024-09-26)

Sounds good. Will start working immediately. Please ensure new issues created are in english and if possible translations for old issues is mentioned in comments. Thank you for the help. Will check the DEV.md guide out

---

**评论 8** - @whoami13apt (2025-02-09)

帮助推广项目 本人summer13top
https://blog.csdn.net/m0_69732192/article/details/145537150?sharetype=blogdetail&sharerId=145537150&sharerefer=PC&sharesource=m0_69732192&spm=1011.2480.3001.8118
尽快审核处理谢谢您

---

---

### 47. #107 - can add release binary to homebrew package?

- **分类**: General
- **状态**: open
- **创建时间**: 2024-09-01
- **作者**: @yangweijie
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/107

#### 正文

https://github.com/orgs/Homebrew/packages

https://docs.brew.sh.cn/Bottles

even add a mirror of brew 

the way get binary is still through a github link which very slow in china and can't be speed up through the mirror brew package. 

---

### 48. #95 - App icons

- **分类**: Show and tell
- **状态**: open
- **创建时间**: 2024-08-04
- **作者**: @frankyonnetti
- **评论数**: 0
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/95

#### 正文

Hi @xpf0000
I would like to contribute app icons. If the designs are not what you're looking for, no worries. Or, if you like the icons but want to suggest any changes, that would be great also. 

Here is what I created and can provide all the sizes needed.

![app-icon](https://github.com/user-attachments/assets/40a2fb04-ae6e-47aa-9419-08ec1c7ef306)

![mac-menubar](https://github.com/user-attachments/assets/8deadc5b-a3cf-4b57-8631-16ebf4d3dd71)

![win-system-tray](https://github.com/user-attachments/assets/7578a372-b8b8-45e0-a08f-99cdb7807e5a)


---

### 49. #54 - Hello, everybody. Welcome.

- **分类**: General
- **状态**: open
- **创建时间**: 2023-09-14
- **作者**: @xpf0000
- **评论数**: 4
- **链接**: https://github.com/xpf0000/FlyEnv/discussions/54

#### 正文

Here, you can talk freely, share your experience, suggest products, and ask any questions you may have.

#### 评论 (4 条)

**评论 1** - @russellorv (2024-11-13)

@xpf0000 thanks for your work, it would be cool to add another email testing service like MailHog

---

**评论 2** - @xpf0000 (2024-11-16)

> @xpf0000 thanks for your work, it would be cool to add another email testing service like MailHog

has added in lasted version. used Mailpit.

---

**评论 3** - @chrisnaadhi (2025-01-31)

hey thank you so much for flyenv, really wonderful and great project
just want to ask quick question (sorry i'm not yet read through all the docs nor website), can i add other programming language that not mentioned on the web or docs ? like ruby, erlang or elixir ?

---

**评论 4** - @xpf0000 (2025-02-01)

> hey thank you so much for flyenv, really wonderful and great project just want to ask quick question (sorry i'm not yet read through all the docs nor website), can i add other programming language that not mentioned on the web or docs ? like ruby, erlang or elixir ?

At present, users are unable to add it themselves. Erlang already has it, but it's in the mailpit module. You can create other issues Will consider adding it later

---

---

