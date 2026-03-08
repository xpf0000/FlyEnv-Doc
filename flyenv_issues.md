# FlyEnv GitHub Issues 汇总

**仓库**: https://github.com/xpf0000/FlyEnv

**总 Issue 数**: 403

---

## 统计

- Open: 24
- Closed: 379

---

## Issues 列表

### 🔴 Open Issues

#### 1. #572 - Run reactjs project from hosts section

- **状态**: open
- **创建时间**: 2026-03-06
- **作者**: @adarmawan117
- **链接**: https://github.com/xpf0000/FlyEnv/issues/572

**描述**:

```
Is there any way to run reactjs project like Laravel from hosts section?

![Image](https://github.com/user-attachments/assets/fa89c8cd-7dec-4bf5-81ce-5631c5994fe9)
```

---

#### 2. #569 - Disable IPv6 for hosts file

- **状态**: open
- **创建时间**: 2026-03-03
- **作者**: @Scorpio256
- **链接**: https://github.com/xpf0000/FlyEnv/issues/569

**描述**:

```
I found that if there is an IPv6 address in the hosts file, all requests are delayed by up to 2 seconds. If I remove them, everything speeds up significantly. Would it be possible to add this feature to the settings so that it can be turned off?
```

---

#### 3. #568 - 请增加新的对象存储中间件：rustfs

- **状态**: open
- **创建时间**: 2026-03-03
- **作者**: @leqq00
- **链接**: https://github.com/xpf0000/FlyEnv/issues/568

**描述**:

```
官网地址：https://rustfs.com.cn/
GitHub地址：https://github.com/rustfs/rustfs
希望增加一下，毕竟minio现在也不更新、不维护了
```

---

#### 4. #565 - env目录中文件链接原文件不存在时导致环境变量功能失效

- **状态**: open
- **创建时间**: 2026-03-01
- **作者**: @YiHui-Network
- **链接**: https://github.com/xpf0000/FlyEnv/issues/565

**描述**:

```
FlyEnv版本:4.13.2
系统平台:macOS 26.3
是否可以复现:可以复现
描述:
env目录中文件链接原文件不存在时导致环境变量功能失效.
brew upgrade后,环境变量程序更新,则Env目录里面的链接失效,将导致设置环境变量功能失效.
其他导致环境变量程序原始文件丢失的情况,亦导致设置环境变量功能失效.


临时解决办法:
方案一:到用户目录>资源库>PhpWebStudy>env目录,移除掉失效的链接,再到FlyEnv里面重新勾选环境变量,至此环境变量已经重新生效了.
方案二:brew update获取到需要更新的列表,如果有需要更新的环境变量先去FlyEnv里面取消设置,brew upgrade更新完成后,重新勾选环境变量.

永久解决办法:FlyEnv环境变量设置功能逻辑->每次设置环境变量时先删除之前的链接再重新建立链接

```

---

#### 5. #562 - Windows 10 LTSC 2019版本有问题

- **状态**: open
- **创建时间**: 2026-03-01
- **作者**: @xuzhengqiang
- **链接**: https://github.com/xpf0000/FlyEnv/issues/562

**描述**:

```
## Bug 报告：FlyEnv 在 Windows 10 LTSC 2019 上无法正确检测 PHP 服务状态

### 环境信息
- **操作系统**: Windows 10 Enterprise LTSC 2019 (版本 1809)
- **FlyEnv 版本**: 4.x (最新版)
- **系统架构**: x64

### 问题描述
FlyEnv 界面显示 PHP 服务"未启动"（灰色图标），但实际上 PHP 进程已经正常运行并且工作正常。此问题仅在 Windows 10 LTSC 2019 上出现，同样的 FlyEnv 版本在 Windows 11 上工作完全正常。

### 复现步骤
1. 在 Windows 10 Enterprise LTSC 2019 上安装 FlyEnv
2. 启动 PHP 服务（任意版本，如 PHP 7.4.33 或 PHP 8.0.30）
3. 观察界面状态指示器

### 期望行为
- PHP 服务状态应显示为"运行中"（蓝色勾选图标）
- 服务管理功能应正常工作

### 实际行为
- PHP 服务在界面中显示为"未运行"（灰色图标）
- 但是，PHP 进程实际上已经在运行：
  - `php-cgi-spawner.exe` 正在运行
  - 多个 `php-cgi.exe` 工作进程处于活动状态
  - PHP 正在监听正确的端口（如 9074、9080）
  - Web 请求被成功处理

### 根本原因分析

经过调查，发现问题与 `flyenv-helper.exe` 有关：

**debug.log 中的错误：**
[_fetchRawPATH][error]: Error: Connect helper failed
[_fetchRawPATH][error]: Error: exec: "powershell": executable file not found in %PATH%:

**手动运行 helper 时的错误：**
E:\flyenv\PhpWebStudy\resources\helper\flyenv-helper.exe --version
AppHelper terminated with error: failed to create named pipe: failed to listen on named pipe '\.\pipe\flyenv-helper_sock': Access is denied.

**根本原因：** 基于 Go 语言编写的 `flyenv-helper.exe` 无法在 Windows 10 LTSC 2019 上创建 Windows 命名管道（`\\.\pipe\flyenv-helper_sock`），这是由于 LTSC 版本更严格的安全策略导致的。

### 为什么只影响 LTSC 版本

Windows 10 LTSC（长期服务渠道）是精简版的企业版系统，具有以下特点：
- 更严格的安全策略
- 移除/禁用了部分 Windows 服务
- 命名管道权限要求不同

Windows 11 和常规的 Windows 10 版本没有此问题。

### 验证信息

**PHP 实际上正在工作：**
` ` `bash
# 进程正在运行
$ tasklist | grep php
php-cgi-spawner.exe           8756 Console                    1      3,224 K
php-cgi.exe                   1988 Console                    1     12,328 K
php-cgi.exe                  11240 Console                    1     18,396 K
...

# 端口正在监听
$ netstat -ano | grep 9074
TCP    127.0.0.1:9074         0.0.0.0:0              LISTENING       8756

# Web 服务器正常响应
$ curl -I http://localhost
HTTP/1.1 200 OK
Server: nginx/1.29.3
X-Powered-By: PHP/7.4.33


<img width="1150" height="325" alt="Image" src="https://github.com/user-attachments/assets/780df7e3-57e2-47c2-9570-a2560b0200ce" />

```

---

#### 6. #559 - Version 4.13.2 添加PHP項目按鈕點擊無響應，編輯也沒有響應

- **状态**: open
- **创建时间**: 2026-02-27
- **作者**: @miansword
- **链接**: https://github.com/xpf0000/FlyEnv/issues/559

**描述**:

```
系統環境：macOS 26.2
應用版本：Version 4.13.2
問題：
當前已有5個php項目的站點，也贊助了獲得了許可證激活的狀態，然後在站點php項目下，無論是點擊添加，還是編輯，均無反應
```

---

#### 7. #557 - A few errors in the app

- **状态**: open
- **创建时间**: 2026-02-25
- **作者**: @Makean35
- **链接**: https://github.com/xpf0000/FlyEnv/issues/557

**描述**:

```
Hi. I found a few issues in the configs. In PHP 8.3.30, the upload_max_filesize parameter appears twice.

<img width="1322" height="386" alt="Image" src="https://github.com/user-attachments/assets/a41be0a0-b588-4796-8c23-add32d99fbda" />

There are many inline comments in the PostgreSQL configs. They shouldn’t be there — we have to remove them before the server can start.
I checked PostgreSQL versions 14 and 16. It might be the same in other versions.

<img width="956" height="406" alt="Image" src="https://github.com/user-attachments/assets/03207094-0b91-42d2-9cd0-3f8ddb5d5545" />
```

---

#### 8. #555 - Security Issue: Antivirus blocking multiple actions(Files) of FlyEnv

- **状态**: open
- **创建时间**: 2026-02-24
- **作者**: @mavinothkumar
- **链接**: https://github.com/xpf0000/FlyEnv/issues/555

**描述**:

```
Hi,

Please find the below screenshots where the Antivirus (BitDefender Total Security) is blocking the files, so the FlyEnv services are not working.

<img width="674" height="435" alt="Image" src="https://github.com/user-attachments/assets/deb60c33-49b9-42ad-a268-8da0f00acca3" />

![Image](https://github.com/user-attachments/assets/e07da74f-4734-4629-8bf1-a365c6951e9f)

![Image](https://github.com/user-attachments/assets/df342411-4b04-4edf-b11e-4d0add6a2975)

Can you please help me to solve this problem.

Thanks
Vinoth Kumar
```

---

#### 9. #554 - 在站点中，添加GO项目站点，启动命令那里：./xxx.exe，会提示找不到

- **状态**: open
- **创建时间**: 2026-02-21
- **作者**: @zhaofawu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/554

**描述**:

```
<img width="778" height="189" alt="Image" src="https://github.com/user-attachments/assets/bebce4e0-0795-4dba-91f5-e40b9eb7a60d" />
```

---

#### 10. #549 - php 环境变量问题

- **状态**: open
- **创建时间**: 2026-02-15
- **作者**: @TonyHexin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/549

**描述**:

```
## 问题描述
在 macOS 系统下，我仅通过 Homebrew 安装了一个 PHP 版本，并尝试在 flyenv 中仅配置该 Homebrew 安装的 PHP 为环境变量，但 flyenv 会自动将以下两个路径添加到环境变量中，且这两个路径的优先级高于 Homebrew PHP 的路径：
- `/Users/tony/Library/PhpWebStudy/env/php`
- `/Users/tony/Library/PhpWebStudy/env/php/bin`

**核心矛盾**：执行 `php -v` 显示的是 Homebrew 安装的 PHP 版本（符合预期），但执行 `which php` 输出的却是上述 PhpWebStudy 路径下的 php 可执行文件（不符合预期），且我并未主动配置过这两个 PhpWebStudy 相关路径。

## 环境信息
- 操作系统：macOS 15.7 (aarch64)
- PHP 安装方式：Homebrew（仅这一个 PHP 版本）
- 环境变量查看方式：`echo $PATH`

## 复现步骤
1. 确认本地仅存在 Homebrew 安装的 PHP，无其他 PHP 版本；
2. 通过 flyenv 配置环境变量；
3. 执行 `echo $PATH` 查看环境变量，发现 `/Users/tony/Library/PhpWebStudy/env/php` 和 `/Users/tony/Library/PhpWebStudy/env/php/bin` 被自动添加，且排在 Homebrew PHP 路径之前；
4. 执行 `which php`，输出为 `/Users/tony/Library/PhpWebStudy/env/php/bin/php`（非 Homebrew 路径）；
5. 执行 `php -v`，输出为 Homebrew 安装的 PHP 版本。

## 预期行为
1. flyenv 仅添加我主动配置的 Homebrew PHP 路径到环境变量，不自动添加未配置的 `/Users/tony/Library/PhpWebStudy/env/php` 相关路径；
2. 若必须添加，`which php` 应输出手动配置的 Homebrew PHP 路径，且路径优先级符合配置逻辑。

## 实际行为
1. 未配置的 `/Users/tony/Library/PhpWebStudy/env/php` 和 `/Users/tony/Library/PhpWebStudy/env/php/bin` 被自动添加到 `$PATH`，且优先级高于手动配置的 Homebrew PHP 路径；
2. `which php` 输出 PhpWebStudy 路径，但 `php -v` 却显示 Homebrew PHP 版本，出现路径与版本不匹配的矛盾。

<img width="591" height="371" alt="Image" src="https://github.com/user-attachments/assets/1739e5dd-52f6-4666-94b4-a73ec59ff7cf" />
```

---

#### 11. #548 - macos系统下pgsql开启再关闭再开启会失败

- **状态**: open
- **创建时间**: 2026-02-15
- **作者**: @TonyHexin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/548

**描述**:

```
## 问题描述
在 macOS 系统下，PostgreSQL 服务执行「启动→关闭→再次启动」操作时，大概率会启动失败，提示 `pg_ctl: 无法启动服务器进程检查日志输出`；但紧接着再次执行启动命令，服务又能正常启动。

## 环境信息
- 操作系统：macOS 15.7 (aarch64)
- PostgreSQL 版本：18.1 (Homebrew 安装)
- 编译信息：aarch64-apple-darwin24.6.0, Apple clang version 17.0.0 (clang-1700.6.3.2), 64-bit
- 数据目录：/Users/tony/Library/PhpWebStudy/server/postgresql/postgresql18

## 复现步骤
1. 启动 PostgreSQL 服务：`pg_ctl start -D [数据目录]`
2. 关闭 PostgreSQL 服务：`pg_ctl stop -D [数据目录]`
3. 立即再次执行启动命令，大概率出现启动失败；
4. 再次执行启动命令，服务可正常启动。

## 错误提示

Error: pg_ctl: 无法启动服务器进程检查日志输出.

## 关键日志

2026-02-15 18:28:27.038 CST [73631] 日志:  正在启动 PostgreSQL 18.1 (Homebrew) on aarch64-apple-darwin24.6.0, compiled by Apple clang version 17.0.0 (clang-1700.6.3.2), 64-bit
2026-02-15 18:28:27.040 CST [73631] 日志:  正在监听IPv6地址"::1"，端口 5432
2026-02-15 18:28:27.040 CST [73631] 日志:  正在监听IPv4地址"127.0.0.1"，端口 5432
2026-02-15 18:28:27.040 CST [73631] 日志:  在Unix套接字 "/tmp/.s.PGSQL.5432"上侦听
2026-02-15 18:28:27.044 CST [73648] 日志:  数据库系统中断；上一次的启动时间是在2026-02-07 20:55:16 CST
2026-02-15 18:28:27.083 CST [73648] 日志:  数据库系统没有正确的关闭; 处于自动恢复状态中
2026-02-15 18:28:27.084 CST [73648] 日志:  redo 在 0/17DEF20 开始
2026-02-15 18:28:27.084 CST [73648] 日志:  invalid record length at 0/17DEF58: expected at least 24, got 0
2026-02-15 18:28:27.084 CST [73648] 日志:  redo done at 0/17DEF20 system usage: CPU:用户：0.00 s，系统：0.00 s，已用时间：0.00 s
2026-02-15 18:28:27.086 CST [73646] 日志:  checkpoint starting: end-of-recovery immediate wait
2026-02-15 18:28:27.087 CST [73646] 日志:  checkpoint complete: wrote 0 buffers (0.0%), wrote 3 SLRU buffers; 0 WAL file(s) added, 0 removed, 0 recycled; write=0.001 s, sync=0.001 s, total=0.002 s; sync files=2, longest=0.001 s, average=0.001 s; distance=0 kB, estimate=0 kB; lsn=0/17DEF58, redo lsn=0/17DEF58
2026-02-15 18:28:27.088 CST [73631] 日志:  数据库系统准备接受连接
2026-02-15 18:28:52.351 CST [74673] 致命错误:  先前存在的共享内存块 (key 15509983, ID 1179648) 仍在使用中
2026-02-15 18:28:52.351 CST [74673] 提示:  终止与数据目录"/Users/tony/Library/PhpWebStudy/server/postgresql/postgresql18"关联的任何旧服务器进程.
2026-02-15 18:28:52.351 CST [74673] 日志:  数据库系统已关闭
2026-02-15 18:29:27.089 CST [73631] 日志:  无法打开文件 "postmaster.pid": No such file or directory
2026-02-15 18:29:27.089 CST [73631] 日志:  由于数据目录锁文件非法而执行立即关闭
2026-02-15 18:29:27.089 CST [73631] 日志:  接收到立即 (immediate) 停止请求
2026-02-15 18:29:27.089 CST [73631] 日志:  无法打开文件 "postmaster.pid": No such file or directory
2026-02-15 18:29:27.094 CST [73631] 日志:  数据库系统已关闭

## 核心问题指向
从日志中可看到关键错误：`先前存在的共享内存块仍在使用中` 和 `postmaster.pid 文件不存在/非法`，推测是服务关闭时共享内存未及时释放、pid 文件清理不彻底导致重启冲突。
```

---

#### 12. #546 - Bulgarian language support?

- **状态**: open
- **创建时间**: 2026-02-12
- **作者**: @nimdassdev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/546

**描述**:

```
Hello Team,
Can you also add Bulgarian language support?
P.S. I will keep an eye on the German language as well, while presently it looks like ready.
Thank you for the consideration.
```

---

#### 13. #543 - 希望添加备注功能

- **状态**: open
- **创建时间**: 2026-02-10
- **作者**: @Y0n3er
- **链接**: https://github.com/xpf0000/FlyEnv/issues/543

**描述**:

```
能否给如下位置添加备注功能，有时候记不到哪些版本自己是用来干什么的了，导致自己可能会误删，当然其他语言能加个最好了

<img width="805" height="461" alt="Image" src="https://github.com/user-attachments/assets/4cb6adda-a26e-475f-9dc9-0692e62924b5" />
```

---

#### 14. #541 - Does not download the Postgresql module

- **状态**: open
- **创建时间**: 2026-02-09
- **作者**: @Zvizzz
- **链接**: https://github.com/xpf0000/FlyEnv/issues/541

**描述**:

```
Problem description: 
When you click on the Postgresql installation, the installation starts and that's it, then nothing happens. And more than one version is not downloaded or installed. 

Other modules are downloaded and working properly.
```

---

#### 15. #532 - MySQL Service Shows Failed Status on First Startup But Actually Running

- **状态**: open
- **创建时间**: 2026-02-01
- **作者**: @ibraimfarag
- **链接**: https://github.com/xpf0000/FlyEnv/issues/532

**描述**:

```
Issue Summary
When starting FlyEnv for the first time and launching all services simultaneously, MySQL service appears to fail in the UI, yet the process is actually running in the background.

Problem:
Click "Start All Services" in FlyEnv
MySQL shows  Failed status
But mysqld.exe is running in Task Manager
Must manually kill process and restart
Second attempt works fine

<img width="1790" height="930" alt="Image" src="https://github.com/user-attachments/assets/ead02587-3d0f-4c51-bb7e-34d783b69253" />
```

---

#### 16. #501 - add Persian Language

- **状态**: open
- **创建时间**: 2025-12-16
- **作者**: @mojtabasadegh10
- **链接**: https://github.com/xpf0000/FlyEnv/issues/501

**描述**:

```
add Persian Language
```

---

#### 17. #487 - PHP 8.5 version required

- **状态**: open
- **创建时间**: 2025-12-04
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/487

**描述**:

```
Now there is official version PHP 8.5 i think you need to update
In the list of PHP versions on Windows, I see lower versions like PHP 7 and PHP 5, but on Linux, I don't see older versions.
can you add option to allow using server to get list of third party versions as a json file link according to your standard, user can customize it by themselves
```

---

#### 18. #483 - 新增PHP7.2下面的phalcon组件

- **状态**: open
- **创建时间**: 2025-11-30
- **作者**: @tianfeng850
- **链接**: https://github.com/xpf0000/FlyEnv/issues/483

**描述**:

```
当前WIN下面7.2的该组件无效

[phalcon_x64_vc15_php7.2_3.4.5-4250.zip](https://github.com/user-attachments/files/23838364/phalcon_x64_vc15_php7.2_3.4.5-4250.zip)
这个是可以的，测试过了

仅仅这样体现不了价值，增加一个ARM芯片下的linux版本

[phalcon.zip](https://github.com/user-attachments/files/23838368/phalcon.zip)
```

---

#### 19. #482 - Issue with money contribution via PayPal

- **状态**: open
- **创建时间**: 2025-11-28
- **作者**: @amirsalihdev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/482

**描述**:

```
I am loving this tool very much and wanted to contribute to unlock the current limitation (3 projects max) but I am facing issue with PayPal. I live in Türkiye and PayPal has seized all of its operations here back in 2016. Due to this now I can't contribute to the project via ko-fi platform since it uses PayPal. I have tried different cards all of which I use for international payment with no luck. Are there any other ways to financially contribute other than PayPal, Alipay & WeChat ?
```

---

#### 20. #457 - Crowdin Project for FlyEnv

- **状态**: open
- **创建时间**: 2025-10-18
- **作者**: @vendeeglobe
- **链接**: https://github.com/xpf0000/FlyEnv/issues/457

**描述**:

```
FlyEnv has been translated by volunteers, and some translations might be incomplete. You can help us translate FlyEnv into your language by adding new translations or voting for existing ones.

Please join 
https://crowdin.com/project/flyenv

Existing translations can be maintained and improved.
- Arabic
- Azerbaijani
- Bengali
- Chinese Simplified
- French
- Indonesian
- [Italian](https://crowdin.com/project/flyenv/it)
- Japanese
- Portuguese
- Portuguese, Brazilian
- Spanish
- Swedish
- Turkish
- Ukrainian
- Vietnamese

New translations must be proofread and approved.
- Czech
- Danish
- Dutch
- Finnish
- German  (in work)
- Greek
- Norwegian
- Polish
- Romanian
- Russian (in work)
```

---

#### 21. #448 - could we push the app to scoop

- **状态**: open
- **创建时间**: 2025-10-03
- **作者**: @ropean
- **链接**: https://github.com/xpf0000/FlyEnv/issues/448

**描述**:

```
I have created a scoop bucket meta file as attached. 

[flyenv.json](https://github.com/user-attachments/files/22682425/flyenv.json)

Can use github action to update the scoop bucket meta file after the release
```

---

#### 22. #442 - Sugestão: Mais opções de personalização ao criar projetos Laravel

- **状态**: open
- **创建时间**: 2025-09-18
- **作者**: @lauro17
- **链接**: https://github.com/xpf0000/FlyEnv/issues/442

**描述**:

```
## Olá pessoal! 👋

Antes de mais nada, quero explicar que **não sou especialista em Laravel nem em scripts avançados**, mas sou profissional na área de sistemas e, estudando um pouco sobre Laravel, criei um **script PowerShell** para facilitar a criação de projetos com algumas opções de personalização. Pensei que isso poderia ajudar a melhorar a parte da ferramenta que lida com Laravel.

---

### Funcionalidades do Script

O script atual permite:

- Escolher o **idioma de mensagens** (`pt | en | es | zh | ja`)
- Personalizar **nome do projeto**
- Escolher **starter kit** (`none | breeze | jetstream`)
- Selecionar **stack do Breeze** (`blade | livewire | livewire-functional | react | vue | api`)
- Configurar **banco de dados** (`sqlite | mysql | mariadb | pgsql | sqlsrv`)
- Rodar **migrations automaticamente** (`yes | no`)
- Verificar **PHP, Composer, extensões PHP e conexão SSL**
- Evitar **sobrescrever pastas existentes**

---

### ⚠️ Observações importantes

- O script foi feito para **Laravel 12**, mas pode não funcionar corretamente em outras versões, porque as perguntas e comandos do Laravel podem mudar.
- Caso o Laravel altere a forma de criar projetos ou o comportamento de prompts, o script pode quebrar.
- Testei apenas **localmente**, e o foco é ajudar a melhorar a personalização de criação de projetos no **FlyEnv**.


**Segue o script versão 1.0.2 como exemplo (em PowerShell):**

`param ()

# ====================
# Escolha do idioma
# ====================
$Lang = Read-Host "Escolha o idioma (pt|en|es|zh|ja) [padrão: pt]"
if ([string]::IsNullOrWhiteSpace($Lang)) { $Lang = "pt" }

# ====================
# Pergunta inicial de personalização
# ====================
$customize = Read-Host "Deseja personalizar o projeto? (s/n)"
if ($customize -eq "s") {
    $ProjectName = Read-Host "Nome do projeto"
    if ([string]::IsNullOrWhiteSpace($ProjectName)) { $ProjectName = "meu-projeto" }

    $StarterKit  = Read-Host "Starter kit (none|breeze|jetstream)"
    if ([string]::IsNullOrWhiteSpace($StarterKit)) { $StarterKit = "breeze" }

    if ($StarterKit -eq "breeze") {
        $BreezeStack = Read-Host "Breeze stack (blade|livewire|livewire-functional|react|vue|api)"
        if ([string]::IsNullOrWhiteSpace($BreezeStack)) { $BreezeStack = "blade" }
    }

    $Database     = Read-Host "Banco de dados (sqlite|mysql|mariadb|pgsql|sqlsrv)"
    if ([string]::IsNullOrWhiteSpace($Database)) { $Database = "mysql" }

    $RunMigrations = Read-Host "Rodar migrations? (yes|no)"
    if ([string]::IsNullOrWhiteSpace($RunMigrations)) { $RunMigrations = "no" }
} else {
    # Valores padrão
    $ProjectName  = "meu-projeto"
    $StarterKit   = "breeze"
    $BreezeStack  = "blade"
    $Database     = "mysql"
    $RunMigrations = "no"
}

# ====================
# Mensagens multilíngues
# ====================
$messages = @{
    pt = @{
        phpNotFound        = "❌ PHP não encontrado no PATH."
        composerNotFound   = "❌ Composer não encontrado no PATH."
        extMissing         = "❌ A extensão '{0}' não está habilitada no PHP. Ative no php.ini."
        folderExists       = "⚠️ Pasta '{0}' já existe."
        sslError           = "⚠️ Problema SSL detectado! Pode ser arquivo PEM ausente ou antivírus interferindo."
        sslOk              = "✅ Conexão SSL OK!"
        creatingProject    = "🚀 Criando projeto Laravel '{0}'..."
        generatingKey      = "🔑 Gerando chave..."
        installingBreeze   = "🛠️ Instalando Laravel Breeze..."
        breezeStack        = "🛠️ Configurando Breeze ({0})..."
        npmInstalling      = "📦 Instalando dependências npm..."
        npmNotFound        = "⚠️ npm não encontrado, pule 'npm install'."
        npmError           = "❌ Erro no npm: {0}"
        apiInfo            = "ℹ️ Stack 'api' detectada, apenas endpoints, sem interface."
        runningMigrate     = "🛠️ Rodando migrations..."
        skippingMigrate    = "🛠️ Pulando migrations."
        avList             = "🛡️ Antivírus ativos:"
        finished           = "✅ Projeto Laravel '{0}' criado com sucesso!"
    }
    en = @{
        phpNotFound        = "❌ PHP not found in PATH."
        composerNotFound   = "❌ Composer not found in PATH."
        extMissing         = "❌ The extension '{0}' is not enabled in PHP. Enable it in php.ini."
        folderExists       = "⚠️ Folder '{0}' already exists."
        sslError           = "⚠️ SSL problem detected! PEM file missing or antivirus may be interfering."
        sslOk              = "✅ SSL connection OK!"
        creatingProject    = "🚀 Creating Laravel project '{0}'..."
        generatingKey      = "🔑 Generating key..."
        installingBreeze   = "🛠️ Installing Laravel Breeze..."
        breezeStack        = "🛠️ Setting up Breeze ({0})..."
        npmInstalling      = "📦 Installing npm dependencies..."
        npmNotFound        = "⚠️ npm not found, skipping 'npm install'."
        npmError           = "❌ npm error: {0}"
        apiInfo            = "ℹ️ 'api' stack detected, only endpoints, no interface."
        runningMigrate     = "🛠️ Running migrations..."
        skippingMigrate    = "🛠️ Skipping migrations."
        avList             = "🛡️ Active antivirus:"
        finished           = "✅ Laravel project '{0}' created successfully!"
    }
}

# ====================
# Função para exibir mensagens
# ====================
function Msg($key, [Parameter(ValueFromRemainingArguments=$true)]$args) {
    $text = $messages[$Lang][$key]
    if ($args -and $args.Count -gt 0) { 
        $strArgs = $args | ForEach-Object { $_.ToString() }
        return [string]::Format($text, $strArgs)
    }
    return $text
}

# ====================
# Funções auxiliares
# ====================
function Test-Command { param([string]$Command) return $null -ne (Get-Command $Command -ErrorAction SilentlyContinue) }

function Test-SSLAndAV {
    $url = "https://repo.packagist.org/packages.json"
    Write-Host "🔍 Testando conexão SSL com $url..."
    try {
        Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop | Out-Null
        Write-Host (Msg "sslOk") -ForegroundColor Green
    } catch {
        Write-Host (Msg "sslError") -ForegroundColor Yellow
        Write-Host "Detalhes: $($_.Exception.Message)" -ForegroundColor Red
    }
    Write-Host "`n$(Msg "avList")"
    $avList = Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct | Select-Object displayName,productState
    if ($avList) {
        foreach ($av in $avList) { Write-Host "• $($av.displayName) (Estado: $($av.productState))" }
    } else { Write-Host "Nenhum antivírus detectado via WMI." -ForegroundColor Yellow }
}

# ====================
# Verificações básicas
# ====================
if (-not (Test-Command "php")) { Write-Host (Msg "phpNotFound") -ForegroundColor Red; exit 1 }
if (-not (Test-Command "composer")) { Write-Host (Msg "composerNotFound") -ForegroundColor Red; exit 1 }
$phpPath = (Get-Command php).Source

$extensions = @("mbstring","openssl","pdo","pdo_mysql","pdo_sqlite","sqlite3")
foreach ($ext in $extensions) {
    if ((& $phpPath -r "echo extension_loaded('$ext') ? '1' : '0';").Trim() -ne '1') {
        Write-Host (Msg "extMissing" $ext) -ForegroundColor Red
        exit 1
    }
}

Test-SSLAndAV

# ====================
# Evitar sobrescrever pasta existente
# ====================
if (Test-Path $ProjectName) { Write-Host (Msg "folderExists" $ProjectName) -ForegroundColor Yellow; exit 1 }

# ====================
# Criar projeto Laravel
# ====================
Write-Host (Msg "creatingProject" $ProjectName)
composer create-project laravel/laravel $ProjectName "12.*" --prefer-dist --no-interaction
if (-not (Test-Path $ProjectName)) { Write-Host "❌ Falha ao criar projeto, verifique SSL/Composer."; exit 1 }

Set-Location $ProjectName

# Gerar chave
Write-Host (Msg "generatingKey")
& $phpPath artisan key:generate --ansi

# Configurar .env
$envFile = ".env"
if (Test-Path $envFile) {
    (Get-Content $envFile) | ForEach-Object {
        switch ($Database) {
            "mysql" { $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=mysql' `
                      -replace '^DB_HOST=.*','DB_HOST=127.0.0.1' `
                      -replace '^DB_PORT=.*','DB_PORT=3306' `
                      -replace '^DB_DATABASE=.*','DB_DATABASE=laravel' `
                      -replace '^DB_USERNAME=.*','DB_USERNAME=root' `
                      -replace '^DB_PASSWORD=.*','DB_PASSWORD=senha' }
            "sqlite" { $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=sqlite' }
            default { $_ }
        }
    } | Set-Content $envFile

    if ($Database -eq "sqlite" -and -not (Test-Path "database/database.sqlite")) { New-Item -ItemType File "database/database.sqlite" | Out-Null }
} else {
    Write-Host "⚠️ .env não encontrado, pulando configuração do DB." -ForegroundColor Yellow
}

# ====================
# Instalar Breeze
# ====================
if ($StarterKit -eq "breeze") {
    Write-Host (Msg "installingBreeze")
    composer require laravel/breeze --dev

    Write-Host (Msg "breezeStack" $BreezeStack)
    try { & $phpPath artisan breeze:install $BreezeStack --no-interaction } 
    catch { Write-Host "⚠️ Ignorando erro no Breeze: $_" -ForegroundColor Yellow }

    if ($BreezeStack -ne "api") {
        Write-Host (Msg "npmInstalling")
        if (Test-Command "npm") {
            try { npm ci; npm run build } catch { Write-Host (Msg "npmError" $_) -ForegroundColor Red }
        } else { Write-Host (Msg "npmNotFound") -ForegroundColor Yellow }
    } else { Write-Host (Msg "apiInfo") }
}

# ====================
# Rodar migrations
# ====================
if ($RunMigrations -eq "yes") {
    Write-Host (Msg "runningMigrate")
    & $phpPath artisan migrate:fresh --seed --ansi
} else { Write-Host (Msg "skippingMigrate") }

# ====================
# Final
# ====================
Write-Host (Msg "finished" $ProjectName) -ForegroundColor Green
`

**Segue o script versão 1.0.1 como exemplo (em PowerShell):**
`param (
    [string]$Lang = "pt",                   # pt | en | es | zh | ja
    [string]$ProjectName = "meu-projeto",
    [string]$StarterKit = "breeze",         # none | breeze | jetstream
    [string]$BreezeStack = "blade",         # blade | livewire | livewire-functional | react | vue | api
    [string]$Database = "mysql",            # sqlite | mysql | mariadb | pgsql | sqlsrv
    [string]$RunMigrations = "no"           # yes | no
)

# Mensagens multilíngues
$messages = @{
    pt = @{
        phpNotFound        = "❌ PHP não encontrado no PATH."
        composerNotFound   = "❌ Composer não encontrado no PATH."
        extMissing         = "❌ A extensão '{0}' não está habilitada no PHP. Ative no php.ini."
        folderExists       = "⚠️ Pasta '{0}' já existe."
        sslError           = "⚠️ Problema SSL detectado! Pode ser arquivo PEM ausente ou antivírus interferindo."
        sslOk              = "✅ Conexão SSL OK!"
        creatingProject    = "🚀 Criando projeto Laravel '{0}'..."
        generatingKey      = "🔑 Gerando chave..."
        installingBreeze   = "🛠️ Instalando Laravel Breeze..."
        breezeStack        = "🛠️ Configurando Breeze ({0})..."
        npmInstalling      = "📦 Instalando dependências npm..."
        npmNotFound        = "⚠️ npm não encontrado, pule 'npm install'."
        npmError           = "❌ Erro no npm: {0}"
        apiInfo            = "ℹ️ Stack 'api' detectada, apenas endpoints, sem interface."
        runningMigrate     = "🛠️ Rodando migrations..."
        skippingMigrate    = "🛠️ Pulando migrations."
        avList             = "🛡️ Antivírus ativos:"
        finished           = "✅ Projeto Laravel '{0}' criado com sucesso!"
    }
    en = @{
        phpNotFound        = "❌ PHP not found in PATH."
        composerNotFound   = "❌ Composer not found in PATH."
        extMissing         = "❌ The extension '{0}' is not enabled in PHP. Enable it in php.ini."
        folderExists       = "⚠️ Folder '{0}' already exists."
        sslError           = "⚠️ SSL problem detected! PEM file missing or antivirus may be interfering."
        sslOk              = "✅ SSL connection OK!"
        creatingProject    = "🚀 Creating Laravel project '{0}'..."
        generatingKey      = "🔑 Generating key..."
        installingBreeze   = "🛠️ Installing Laravel Breeze..."
        breezeStack        = "🛠️ Setting up Breeze ({0})..."
        npmInstalling      = "📦 Installing npm dependencies..."
        npmNotFound        = "⚠️ npm not found, skipping 'npm install'."
        npmError           = "❌ npm error: {0}"
        apiInfo            = "ℹ️ 'api' stack detected, only endpoints, no interface."
        runningMigrate     = "🛠️ Running migrations..."
        skippingMigrate    = "🛠️ Skipping migrations."
        avList             = "🛡️ Active antivirus:"
        finished           = "✅ Laravel project '{0}' created successfully!"
    }
    es = @{
        phpNotFound        = "❌ PHP no encontrado en el PATH."
        composerNotFound   = "❌ Composer no encontrado en el PATH."
        extMissing         = "❌ La extensión '{0}' no está habilitada en PHP. Actívala en php.ini."
        folderExists       = "⚠️ La carpeta '{0}' ya existe."
        sslError           = "⚠️ Problema SSL detectado! Archivo PEM ausente o antivirus interfiriendo."
        sslOk              = "✅ Conexión SSL OK!"
        creatingProject    = "🚀 Creando proyecto Laravel '{0}'..."
        generatingKey      = "🔑 Generando clave..."
        installingBreeze   = "🛠️ Instalando Laravel Breeze..."
        breezeStack        = "🛠️ Configurando Breeze ({0})..."
        npmInstalling      = "📦 Instalando dependencias npm..."
        npmNotFound        = "⚠️ npm no encontrado, omitiendo 'npm install'."
        npmError           = "❌ Error en npm: {0}"
        apiInfo            = "ℹ️ Stack 'api' detectada, solo endpoints, sin interfaz."
        runningMigrate     = "🛠️ Ejecutando migraciones..."
        skippingMigrate    = "🛠️ Omitiendo migraciones."
        avList             = "🛡️ Antivirus activos:"
        finished           = "✅ Proyecto Laravel '{0}' creado con éxito!"
    }
    zh = @{
        phpNotFound        = "❌ 在 PATH 中未找到 PHP。"
        composerNotFound   = "❌ 在 PATH 中未找到 Composer。"
        extMissing         = "❌ PHP 未启用扩展 '{0}'。请在 php.ini 中启用。"
        folderExists       = "⚠️ 文件夹 '{0}' 已存在。"
        sslError           = "⚠️ 检测到 SSL 问题！可能缺少 PEM 文件或杀毒软件干扰。"
        sslOk              = "✅ SSL 连接正常！"
        creatingProject    = "🚀 正在创建 Laravel 项目 '{0}'..."
        generatingKey      = "🔑 正在生成密钥..."
        installingBreeze   = "🛠️ 正在安装 Laravel Breeze..."
        breezeStack        = "🛠️ 配置 Breeze ({0})..."
        npmInstalling      = "📦 正在安装 npm 依赖..."
        npmNotFound        = "⚠️ 未找到 npm，跳过 'npm install'。"
        npmError           = "❌ npm 错误: {0}"
        apiInfo            = "ℹ️ 检测到 'api' 栈，仅包含端点，无界面。"
        runningMigrate     = "🛠️ 正在运行 migrations..."
        skippingMigrate    = "🛠️ 跳过 migrations。"
        avList             = "🛡️ 活跃的杀毒软件："
        finished           = "✅ Laravel 项目 '{0}' 创建成功！"
    }
    ja = @{
        phpNotFound        = "❌ PATH に PHP が見つかりません。"
        composerNotFound   = "❌ PATH に Composer が見つかりません。"
        extMissing         = "❌ PHP 拡張 '{0}' が有効になっていません。php.ini で有効化してください。"
        folderExists       = "⚠️ フォルダー '{0}' は既に存在します。"
        sslError           = "⚠️ SSL に問題があります！PEM ファイルが存在しないか、アンチウイルスが干渉している可能性があります。"
        sslOk              = "✅ SSL 接続が正常です！"
        creatingProject    = "🚀 Laravel プロジェクト '{0}' を作成中..."
        generatingKey      = "🔑 キーを生成中..."
        installingBreeze   = "🛠️ Laravel Breeze をインストール中..."
        breezeStack        = "🛠️ Breeze を設定中 ({0})..."
        npmInstalling      = "📦 npm 依存関係をインストール中..."
        npmNotFound        = "⚠️ npm が見つかりません。'npm install' をスキップします。"
        npmError           = "❌ npm エラー: {0}"
        apiInfo            = "ℹ️ 'api' スタックを検出、エンドポイントのみ、UI なし。"
        runningMigrate     = "🛠️ migrations を実行中..."
        skippingMigrate    = "🛠️ migrations をスキップ..."
        avList             = "🛡️ アクティブなアンチウイルス："
        finished           = "✅ Laravel プロジェクト '{0}' が正常に作成されました！"
    }
}

# Função para exibir mensagens corretamente com placeholders
function Msg($key, [Parameter(ValueFromRemainingArguments=$true)]$args) {
    $text = $messages[$Lang][$key]
    if ($args -and $args.Count -gt 0) { 
        $strArgs = $args | ForEach-Object { $_.ToString() }
        return [string]::Format($text, $strArgs)
    }
    return $text
}

# Testa se comando existe
function Test-Command { param([string]$Command) return $null -ne (Get-Command $Command -ErrorAction SilentlyContinue) }

# ====================
# Verificações básicas
# ====================
if (-not (Test-Command "php")) { Write-Host (Msg "phpNotFound") -ForegroundColor Red; exit 1 }
if (-not (Test-Command "composer")) { Write-Host (Msg "composerNotFound") -ForegroundColor Red; exit 1 }
$phpPath = (Get-Command php).Source

# Verificar extensões PHP
$extensions = @("mbstring","openssl","pdo","pdo_mysql","pdo_sqlite","sqlite3")
foreach ($ext in $extensions) {
    if ((& $phpPath -r "echo extension_loaded('$ext') ? '1' : '0';").Trim() -ne '1') {
        Write-Host (Msg "extMissing" $ext) -ForegroundColor Red
        exit 1
    }
}

# Testar SSL e antivírus
function Test-SSLAndAV {
    $url = "https://repo.packagist.org/packages.json"
    Write-Host "🔍 Testando conexão SSL com $url..."

    try {
        Invoke-WebRequest -Uri $url -UseBasicParsing -ErrorAction Stop | Out-Null
        Write-Host (Msg "sslOk") -ForegroundColor Green
    } catch {
        Write-Host (Msg "sslError") -ForegroundColor Yellow
        Write-Host "Detalhes: $($_.Exception.Message)" -ForegroundColor Red
    }

    Write-Host "`n$(Msg "avList")"
    $avList = Get-CimInstance -Namespace root/SecurityCenter2 -ClassName AntivirusProduct | Select-Object displayName,productState
    if ($avList) {
        foreach ($av in $avList) {
            Write-Host "• $($av.displayName) (Estado: $($av.productState))"
        }
    } else {
        Write-Host "Nenhum antivírus detectado via WMI." -ForegroundColor Yellow
    }
}
Test-SSLAndAV

# Evitar sobrescrever pasta existente
if (Test-Path $ProjectName) { 
    Write-Host (Msg "folderExists" "$ProjectName") -ForegroundColor Yellow
    exit 1
}

# Criar projeto Laravel
Write-Host (Msg "creatingProject" "$ProjectName")
composer create-project laravel/laravel $ProjectName "12.*" --prefer-dist --no-interaction
Set-Location $ProjectName

# Gerar chave
Write-Host (Msg "generatingKey")
& $phpPath artisan key:generate --ansi

# Configurar .env
$envFile = ".env"
(Get-Content $envFile) | ForEach-Object {
    switch ($Database) {
        "mysql" { $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=mysql' `
                  -replace '^DB_HOST=.*','DB_HOST=127.0.0.1' `
                  -replace '^DB_PORT=.*','DB_PORT=3306' `
                  -replace '^DB_DATABASE=.*','DB_DATABASE=laravel' `
                  -replace '^DB_USERNAME=.*','DB_USERNAME=root' `
                  -replace '^DB_PASSWORD=.*','DB_PASSWORD=senha' }
        "sqlite" { $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=sqlite' }
        default { $_ }
    }
} | Set-Content $envFile

if ($Database -eq "sqlite" -and -not (Test-Path "database/database.sqlite")) { 
    New-Item -ItemType File "database/database.sqlite" | Out-Null 
}

# Instalar Breeze
if ($StarterKit -eq "breeze") {
    Write-Host (Msg "installingBreeze")
    composer require laravel/breeze --dev

    Write-Host (Msg "breezeStack" $BreezeStack)
    try { & $phpPath artisan breeze:install $BreezeStack --no-interaction } 
    catch { Write-Host "⚠️ Ignorando erro no Breeze: $_" -ForegroundColor Yellow }

    if ($BreezeStack -ne "api") {
        Write-Host (Msg "npmInstalling")
        if (Test-Command "npm") {
            try { npm ci; npm run build } catch { Write-Host (Msg "npmError" $_) -ForegroundColor Red }
        } else { Write-Host (Msg "npmNotFound") -ForegroundColor Yellow }
    } else { Write-Host (Msg "apiInfo") }
}

# Rodar migrations
if ($RunMigrations -eq "yes") {
    Write-Host (Msg "runningMigrate")
    & $phpPath artisan migrate:fresh --seed --ansi
} else { Write-Host (Msg "skippingMigrate") }

# Final
Write-Host (Msg "finished" "$ProjectName") -ForegroundColor Green
`

**Segue o script versão 1.0.0 como exemplo (em PowerShell):**
`param (
    [string]$ProjectName = "meu-projeto",
    [string]$StarterKit = "breeze",         # none | breeze | jetstream
    [string]$BreezeStack = "blade",         # blade | livewire | livewire-functional | react | vue | api
    [string]$Database = "mysql",            # sqlite | mysql | mariadb | pgsql | sqlsrv
    [string]$RunMigrations = "no"           # yes | no
)

# Função para verificar comando
function Test-Command { param([string]$Command) return $null -ne (Get-Command $Command -ErrorAction SilentlyContinue) }

# Verificar PHP
if (-Not (Test-Command "php")) { Write-Host "❌ PHP não encontrado no PATH." -ForegroundColor Red; exit 1 }
$phpPath = (Get-Command php).Source

# Verificar Composer
if (-Not (Test-Command "composer")) { Write-Host "❌ Composer não encontrado no PATH." -ForegroundColor Red; exit 1 }

# Verificar extensões PHP necessárias
$extensions = @("mbstring","openssl","pdo","pdo_mysql","pdo_sqlite","sqlite3")
foreach ($ext in $extensions) {
    $loaded = (& $phpPath -r "echo extension_loaded('$ext') ? '1' : '0';").Trim()
    if ($loaded -ne '1') {
        Write-Host "❌ A extensão '$ext' não está habilitada no PHP. Ative no php.ini." -ForegroundColor Red
        exit 1
    }
}

# Evitar sobrescrever pasta existente
if (Test-Path $ProjectName) { Write-Host "⚠️ Pasta '$ProjectName' já existe." -ForegroundColor Yellow; exit 1 }

# Criar projeto Laravel
Write-Host "🚀 Criando projeto Laravel..."
composer create-project laravel/laravel $ProjectName "12.*" --prefer-dist --no-interaction
Set-Location $ProjectName

# Gerar chave
Write-Host "🔑 Gerando chave..."
& $phpPath artisan key:generate --ansi

# Ajustar .env para DB
$envFile = ".env"
(Get-Content $envFile) | ForEach-Object {
    switch ($Database) {
        "mysql" {
            $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=mysql' `
               -replace '^DB_HOST=.*','DB_HOST=127.0.0.1' `
               -replace '^DB_PORT=.*','DB_PORT=3306' `
               -replace '^DB_DATABASE=.*','DB_DATABASE=laravel' `
               -replace '^DB_USERNAME=.*','DB_USERNAME=root' `
               -replace '^DB_PASSWORD=.*','DB_PASSWORD=senha'
        }
        "sqlite" { $_ -replace '^DB_CONNECTION=.*','DB_CONNECTION=sqlite' }
        default { $_ }
    }
} | Set-Content $envFile

# Criar SQLite se necessário
if ($Database -eq "sqlite" -and -not (Test-Path "database/database.sqlite")) { 
    New-Item -ItemType File "database/database.sqlite" | Out-Null 
}

# Instalar Breeze se solicitado
if ($StarterKit -eq "breeze") {
    Write-Host "🛠️ Instalando Laravel Breeze..."
    composer require laravel/breeze --dev

    Write-Host "🛠️ Configurando Breeze ($BreezeStack)..."
    try { & $phpPath artisan breeze:install $BreezeStack --force } catch { Write-Host "⚠️ Ignorando erro no Breeze: $_" -ForegroundColor Yellow }

    # Instalar npm apenas se houver interface
    if ($BreezeStack -ne "api") {
        Write-Host "📦 Instalando dependências npm..."
        if (Test-Command "npm") {
            try { npm install; npm run build } catch { Write-Host "❌ Erro no npm: $_" -ForegroundColor Red }
        } else { Write-Host "⚠️ npm não encontrado, pule 'npm install'." -ForegroundColor Yellow }
    } else {
        Write-Host "ℹ️ Stack 'api' detectada, apenas endpoints, sem interface."
    }
}

# Rodar migrations se escolhido
if ($RunMigrations -eq "yes") {
    Write-Host "🛠️ Rodando migrations..."
    & $phpPath artisan migrate:fresh --seed --ansi
} else { Write-Host "🛠️ Pulando migrations." }

Write-Host "✅ Projeto Laravel '$ProjectName' criado com sucesso!" -ForegroundColor Green
`


```

---

#### 23. #440 - 可以考虑把以下搜索引擎也加入

- **状态**: open
- **创建时间**: 2025-09-12
- **作者**: @zzdboy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/440

**描述**:

```
也是用golang开发的，，支持跨平台

https://github.com/zincsearch/zincsearch
```

---

#### 24. #421 - 【idea】新增对frp工具支持

- **状态**: open
- **创建时间**: 2025-08-21
- **作者**: @tmd-user
- **链接**: https://github.com/xpf0000/FlyEnv/issues/421

**描述**:

```
在导航栏【其他】目录中新增frp工具，页面展示一些服务器安装教程和服务器对接配置表单，保存表单后在站点列表中就出现一个【映射】列，下面列数据中有一个开启按钮，旁边有个配置按钮来配置二级域名访问此本地站点，默认不配置则随机字符串生成。这样提高了在测试时外网访问本地站点项目的使用性。
```

---


### 🟢 Closed Issues

#### 1. #573 - flyenv help程序一直在后台运行

- **状态**: closed
- **创建时间**: 2026-03-07
- **关闭时间**: 2026-03-07
- **作者**: @Chandler1332
- **链接**: https://github.com/xpf0000/FlyEnv/issues/573

**描述**:

```
<img width="421" height="45" alt="Image" src="https://github.com/user-attachments/assets/f69563f8-19d2-4451-9f0e-0288b979300e" />
请问flyenv help是什么程序，这个程序为什么一直需要在后台运行，哪怕没有启动flyenv。
```

---

#### 2. #566 - [Bug] Incorrect IP address identification on a device with multiple IP addresses.

- **状态**: closed
- **创建时间**: 2026-03-02
- **关闭时间**: 2026-03-03
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/566

**描述**:

```
My device has multiple IP addresses, and it's incorrectly identifying the IP address on the LAN, resulting in the network not being able to broadcast or the DNS server not starting.
My current IP list

<img width="856" height="764" alt="Image" src="https://github.com/user-attachments/assets/6389dcae-f880-4e98-86c9-5cd66a2cb43c" />
The DNS server incorrectly identifies 172.23.144.1; it should correctly identify it as 192.168.2.16.
<img width="1305" height="767" alt="Image" src="https://github.com/user-attachments/assets/29cef4a8-7a61-4e1f-aa41-b0d13dee74b7" />
It cannot start.
<img width="1301" height="767" alt="Image" src="https://github.com/user-attachments/assets/8a2a7d99-81a8-471f-bc19-8c72b7815687" />
The FTP server restarted and displayed 172.23.144.1. It should be 192.168.2.16 for the network to work, because addresses starting with 172.x.x.x are only virtual IPs for virtual machines.
<img width="1306" height="768" alt="Image" src="https://github.com/user-attachments/assets/46accce4-0d68-49d8-b4aa-0ab61116483a" />
Do you have any solutions to overcome the problem of accurately identifying IP addresses?
Port 53 is often occupied by the system, making it impossible to close the processes currently using it. Do you have a solution to use it even when the system is occupying it?
<img width="1305" height="767" alt="Image" src="https://github.com/user-attachments/assets/38deb552-956a-4138-b15b-f1392710a94e" />
Task Manager only found 3 system processes, and it wouldn't let me kill them.
<img width="1244" height="617" alt="Image" src="https://github.com/user-attachments/assets/922e8f65-95a8-4c96-bddd-9dccf37b1562" />

<img width="1236" height="613" alt="Image" src="https://github.com/user-attachments/assets/7b51d329-7a24-4967-91cf-4809ae552774" />

<img width="1240" height="613" alt="Image" src="https://github.com/user-attachments/assets/f125d7bf-ad01-491b-9200-02789889b0cb" />

```

---

#### 3. #556 - please change from composer.bat to composer.exe or similar.

- **状态**: closed
- **创建时间**: 2026-02-24
- **关闭时间**: 2026-03-06
- **作者**: @adarmawan117
- **链接**: https://github.com/xpf0000/FlyEnv/issues/556

**描述**:

```
Hi. Im using antigravity.
When i choose gitbash on antigravity terminal, and type composer, its said "bash: composer: command not found". But when i type composer.bat, its working.


Here is the problem.
All AI Agent type composer not composer.bat. So, i need to tell the AI to type composer.bat every new conversations. I think its not good.

Thankyou.
```

---

#### 4. #550 - 最新的版本,redis mysql，nginx无法启动一直在加载

- **状态**: closed
- **创建时间**: 2026-02-15
- **关闭时间**: 2026-02-23
- **作者**: @print520
- **链接**: https://github.com/xpf0000/FlyEnv/issues/550

**描述**:

```
最新的版本,redis mysql，nginx无法启动一直在加载
```

---

#### 5. #545 - v4.13.1 所有服务都无法启动，一直在转圈

- **状态**: closed
- **创建时间**: 2026-02-12
- **关闭时间**: 2026-02-23
- **作者**: @imyellow
- **链接**: https://github.com/xpf0000/FlyEnv/issues/545

**描述**:

```
回退到 4.12.2 正常了


MacOS 26.2
```

---

#### 6. #542 - Trojan found

- **状态**: closed
- **创建时间**: 2026-02-10
- **关闭时间**: 2026-02-23
- **作者**: @WrdVdb
- **链接**: https://github.com/xpf0000/FlyEnv/issues/542

**描述**:

```
Yesterday I did an update, today I got an trojan found:

Trojan:Script/Wacatac.C!ml

<img width="968" height="492" alt="Image" src="https://github.com/user-attachments/assets/15b22837-f52d-4063-bad8-414b7f52f8bc" />

What is this about? Because this could be the end of this great tool!

I know that this could be a false positive, but we cannot risk this in a corporate invironment.
Without the helper flyenv does not start.

<img width="558" height="148" alt="Image" src="https://github.com/user-attachments/assets/aac9ea4e-e4ce-40ec-a5ce-d012ff817834" />
```

---

#### 7. #539 - After v4.13.1 macos version is slow and buggy

- **状态**: closed
- **创建时间**: 2026-02-09
- **关闭时间**: 2026-02-09
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/539

**描述**:

```
I installed latest version and its way slower than previous v4.13.0, it takes several seconds to open app and then another almost minute to  load app UI. 
```

---

#### 8. #536 - [Critical BUG] Windows Security Tool Detected a Trojan & Renders unusable

- **状态**: closed
- **创建时间**: 2026-02-03
- **关闭时间**: 2026-02-05
- **作者**: @hardiklakhalani
- **链接**: https://github.com/xpf0000/FlyEnv/issues/536

**描述**:

```
Just after today's update, restarting the services requireda  UAC prompt, and showing this as well and making FlyEnv Not usable at all.

<img width="1197" height="928" alt="Image" src="https://github.com/user-attachments/assets/6959fc75-dbba-4cb4-84ae-422d63933376" />
```

---

#### 9. #534 - Damn , wth new update

- **状态**: closed
- **创建时间**: 2026-02-02
- **关闭时间**: 2026-02-09
- **作者**: @re-LIF3
- **链接**: https://github.com/xpf0000/FlyEnv/issues/534

**描述**:

```
New Update Remove All my site , config and other from old version
```

---

#### 10. #530 - A JavaScript error occurred in the main process

- **状态**: closed
- **创建时间**: 2026-01-30
- **关闭时间**: 2026-02-09
- **作者**: @linwanlong
- **链接**: https://github.com/xpf0000/FlyEnv/issues/530

**描述**:

```
<img width="580" height="258" alt="Image" src="https://github.com/user-attachments/assets/cf69d7c4-06eb-440b-a42a-94d169247579" />

Install path is following:

<img width="742" height="482" alt="Image" src="https://github.com/user-attachments/assets/3b9a1046-a5e3-445f-9d4f-02d858bc6dcd" />

```

---

#### 11. #529 - 托盘右键后 部分按钮被遮挡

- **状态**: closed
- **创建时间**: 2026-01-30
- **关闭时间**: 2026-02-09
- **作者**: @KnightBlood
- **链接**: https://github.com/xpf0000/FlyEnv/issues/529

**描述**:

```
<img width="384" height="630" alt="Image" src="https://github.com/user-attachments/assets/66e1cb24-bff7-4dde-bc47-b1e28e4dd2d4" />
```

---

#### 12. #528 - 每次安装都会破坏系统环境变量，导致系统组件出现文件

- **状态**: closed
- **创建时间**: 2026-01-30
- **关闭时间**: 2026-01-30
- **作者**: @KnightBlood
- **链接**: https://github.com/xpf0000/FlyEnv/issues/528

**描述**:

```

每次安装都会破坏系统环境变量，导致系统组件出现文件
<img width="567" height="605" alt="Image" src="https://github.com/user-attachments/assets/b22f20ce-25fb-4de6-922d-548bd84795ce" />

<img width="1113" height="626" alt="Image" src="https://github.com/user-attachments/assets/05ece58d-d999-4925-a47c-bfd85e636d5a" />
```

---

#### 13. #527 - licenses question

- **状态**: closed
- **创建时间**: 2026-01-30
- **关闭时间**: 2026-01-30
- **作者**: @agusjanardana
- **链接**: https://github.com/xpf0000/FlyEnv/issues/527

**描述**:

```
Hi, thanks for making this project !

it's really helpful for Linux users
Just a small question here.

1. My licenses is already activated, but it's not showing in My Licenses table. How can i connect them to my github?
Thank you !

<img width="1267" height="695" alt="Image" src="https://github.com/user-attachments/assets/be1260ad-9a49-42c9-8570-869721eeead0" />
```

---

#### 14. #526 - DNS_PROBE_POSSIBLE

- **状态**: closed
- **创建时间**: 2026-01-29
- **关闭时间**: 2026-02-02
- **作者**: @fr-timothe
- **链接**: https://github.com/xpf0000/FlyEnv/issues/526

**描述**:

```
Hi, I used on my main computer FlyEnv and work perfectly ( as long as I removed Kaspersky that keeps blocking him for whatever reason ).
However on my second computer I have the exact same setup but here I keep getting DNS_PROBE_POSSIBLE error.
Here is my setup ( I use Brave also as main browser ):

<img width="1785" height="915" alt="Image" src="https://github.com/user-attachments/assets/c06312df-709f-455b-8af3-13e84abb46ba" />

<img width="1785" height="961" alt="Image" src="https://github.com/user-attachments/assets/72eb18e9-9d64-457c-82e2-a1ed4ffbcf8f" />

<img width="1784" height="965" alt="Image" src="https://github.com/user-attachments/assets/03717e12-e7ac-4f48-9469-10bdac538bb9" />

<img width="1788" height="963" alt="Image" src="https://github.com/user-attachments/assets/b3945bf9-15b5-4f38-8466-3a7d109fc03f" />
```

---

#### 15. #518 - Tomcat server does not start

- **状态**: closed
- **创建时间**: 2026-01-23
- **关闭时间**: 2026-01-25
- **作者**: @Makean35
- **链接**: https://github.com/xpf0000/FlyEnv/issues/518

**描述**:

```
When I try to start the tomcat server from the application, I receive a message saying Error. There is no detailed information about the error. There are no errors in the tomcat logs either. The server can only be started using the command brew services start tomcat.

My operating system is LMDE 7.
FlyEnv version 4.12.0
```

---

#### 16. #517 - How to see Progress Helper Program Installed/Downloading ?

- **状态**: closed
- **创建时间**: 2026-01-22
- **关闭时间**: 2026-01-22
- **作者**: @muhismail015
- **链接**: https://github.com/xpf0000/FlyEnv/issues/517

**描述**:

```
I want to install like Apache, PHP, or MySQL. But after i click install just appear **"Helper program is installing, please wait"**. And its to long for wait i think for the first time. 

And i dont see any progress what is installing... 

how can i see the progress or logs ?

<img width="1920" height="1040" alt="Image" src="https://github.com/user-attachments/assets/13344711-1ac9-4d1f-91c3-2c7e28eb8ff2" />
```

---

#### 17. #516 - [Bug] is it bug? black screen after deleting host with subdomain  inside

- **状态**: closed
- **创建时间**: 2026-01-21
- **关闭时间**: 2026-02-09
- **作者**: @AlnThea
- **链接**: https://github.com/xpf0000/FlyEnv/issues/516

**描述**:

```
im deleting some host to make it clean, cause too many host
but after im deleting around 5 host (success, nothing happen), but then  when deleting the 6th host (the one host that has subdomain) after deleting it, the apps suddenly became black screen, even im want to exit the app using "right click on mouse" at the taskbar, "nothing happen"

here the image
<img width="1199" height="1152" alt="Image" src="https://github.com/user-attachments/assets/e4b33d67-4d9c-4aa2-8232-846f53e81aab" />
```

---

#### 18. #515 - 4.9.12以上的版本，在语言选择php后，macports下提示无可用版本

- **状态**: closed
- **创建时间**: 2026-01-19
- **关闭时间**: 2026-01-20
- **作者**: @ran1990
- **链接**: https://github.com/xpf0000/FlyEnv/issues/515

**描述**:

```
1、电脑已经安装macports
2、flyenv在4.9.12版本下，macports下能发现很多php版本

下载安装4.10 、4.11 、4.12，macports 无版本，这只是其中之一，还要其他栏目通过macport安装也会提示无版本
```

---

#### 19. #514 - I only see a black screen after installation on Windows 11

- **状态**: closed
- **创建时间**: 2026-01-19
- **关闭时间**: 2026-02-09
- **作者**: @joginder89
- **链接**: https://github.com/xpf0000/FlyEnv/issues/514

**描述**:

```
I only see a black screen after installation on Windows 11.



<img width="1791" height="908" alt="Image" src="https://github.com/user-attachments/assets/78e5ac71-a1d9-4da5-b9ef-4360a53d8629" />
```

---

#### 20. #513 - Feature Request: Add a button to manually check for updates

- **状态**: closed
- **创建时间**: 2026-01-19
- **关闭时间**: 2026-02-15
- **作者**: @edikurniawan-dev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/513

**描述**:

```
I have a request, if you don't mind.
FlyEnv has an update, but I haven't received it automatically even though I've enabled auto-updates. Perhaps you could add a button to manually check for updates. Thank you.
```

---

#### 21. #512 - Mariadb 11.4.7 cannot start, Installed from Macport Source

- **状态**: closed
- **创建时间**: 2026-01-18
- **关闭时间**: 2026-01-19
- **作者**: @ardiwirawan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/512

**描述**:

```
Just installed Maria db 11.4.7 from macport source , but cannot start

`Error: Command failed: cd "/opt/local/lib/mariadb-11.4/bin" && ./mariadb-install-db --datadir="/Users/ardiwirawan/Library/PhpWebStudy/server/mariadb/data-11.4" --basedir="/opt/local/lib/mariadb-11.4/" --auth-root-authentication-method=normal --defaults-file="/Users/ardiwirawan/Library/PhpWebStudy/server/mariadb/my-11.4.cnf"`
```

---

#### 22. #509 - Proxy problem

- **状态**: closed
- **创建时间**: 2026-01-16
- **关闭时间**: 2026-02-23
- **作者**: @T2Player
- **链接**: https://github.com/xpf0000/FlyEnv/issues/509

**描述**:

```
Hello and thank you for the awesome product! I have trouble with the Server Proxy - after setup it drops "Socket hang up" error. Steps to reproduce: 1. Enter proxy service credentials (127.0.0.1:port) into the Quick Setup field. 2. It generates Curent Proxy field string. 3. Try to install any service (I tried for phpMyAdmin) through GUI.
P.S. OS Kubuntu Linux 24.04.
P.P.S. My proxy works if I enter it's addr:port into Firefox browser Proxy SOCKS 5 field. It really opens blocked sites.
```

---

#### 23. #507 - [Feature Request] Add Zig language

- **状态**: closed
- **创建时间**: 2026-01-12
- **关闭时间**: 2026-02-02
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/507

**描述**:

```
I want to propose adding Zig (the language Bun is written in).
https://ziglang.org/
```

---

#### 24. #505 - Mariadb doesn't work

- **状态**: closed
- **创建时间**: 2025-12-24
- **关闭时间**: 2026-01-17
- **作者**: @brazenvoid
- **链接**: https://github.com/xpf0000/FlyEnv/issues/505

**描述**:

```
Mariadb installation fail with command failure on services pages, env can be installed but service can't be installed, and these can't be deleted through force delete. Sometimes it works, sometimes it does not work,
```

---

#### 25. #502 - brew-cmd.sh 文件为何为丢失呀

- **状态**: closed
- **创建时间**: 2025-12-22
- **关闭时间**: 2026-01-17
- **作者**: @lifetin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/502

**描述**:

```
cd "/Users/ting/Library/PhpWebStudy/server/cache" && ./6GciXagyStmEy22bIfpzEqw6gIGCpID1.sh && wait && exit 0
ting@ting-macbook / % cd "/Users/ting/Library/PhpWebStudy/server/cache" && ./6GciXagyStmEy22bIfpzEqw6gIGCpID1.sh && wait && exit 
0
./6GciXagyStmEy22bIfpzEqw6gIGCpID1.sh: line 1: /Users/ting/Library/PhpWebStudy/server/cache/brew-cmd.sh: No such file or directory
Task-7CRDrbpGnI7bFcepU0iS6eG4thvaPRvO-END


```

---

#### 26. #500 - php是否可以增加一个禁用函数的窗口

- **状态**: closed
- **创建时间**: 2025-12-13
- **关闭时间**: 2026-01-27
- **作者**: @9456258
- **链接**: https://github.com/xpf0000/FlyEnv/issues/500

**描述**:

```
<img width="709" height="597" alt="Image" src="https://github.com/user-attachments/assets/4d8eec3d-cca5-4338-9c35-5df271a2238f" />
```

---

#### 27. #499 - 有考虑出个web版本吗

- **状态**: closed
- **创建时间**: 2025-12-12
- **关闭时间**: 2026-01-17
- **作者**: @stephen-a2z
- **链接**: https://github.com/xpf0000/FlyEnv/issues/499

---

#### 28. #498 - node服务无法显示

- **状态**: closed
- **创建时间**: 2025-12-11
- **关闭时间**: 2025-12-12
- **作者**: @YU-7
- **链接**: https://github.com/xpf0000/FlyEnv/issues/498

**描述**:

```
<img width="2235" height="533" alt="Image" src="https://github.com/user-attachments/assets/7e5668d7-3341-4a42-894a-c5e5bddd9cd5" />

在安装FlyEnv之前已经安装了nodejs，但是FlyEnv无法正确扫描出来。可能是我使用gnvm的原因

<img width="987" height="292" alt="Image" src="https://github.com/user-attachments/assets/8908bf9a-700e-402d-839a-74b2a1fe9dab" />
不知道作者是以什么方式来识别node的

<img width="373" height="134" alt="Image" src="https://github.com/user-attachments/assets/b3b82dc9-eb1b-4095-a23d-2a918123b800" />

使用`where node`的话无法识别
```

---

#### 29. #497 - windows11 24h2版本，右下角托盘图标右键没反应。

- **状态**: closed
- **创建时间**: 2025-12-11
- **关闭时间**: 2025-12-12
- **作者**: @jinrenxin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/497

**描述**:

```
windows11 24h2版本，右下角托盘图标右键会在任务栏出现一个右键菜单的窗口，但是没有在桌面显示，导致没法右键退出了。
```

---

#### 30. #496 - java jdk版本

- **状态**: closed
- **创建时间**: 2025-12-10
- **关闭时间**: 2026-01-17
- **作者**: @loveTHElife
- **链接**: https://github.com/xpf0000/FlyEnv/issues/496

**描述**:

```
java jdk版本25显示有两个，25和25.0.1下载的是同一个文件

<img width="529" height="529" alt="Image" src="https://github.com/user-attachments/assets/9c839310-d461-4d48-842b-ef973ffbff77" />
```

---

#### 31. #495 - Does not work on windows

- **状态**: closed
- **创建时间**: 2025-12-10
- **关闭时间**: 2026-01-17
- **作者**: @iffifan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/495

**描述**:

```
I am unable to install any version of any module. 
This app is totally useless on Windows because nothing can be installed. Maybe the documentation is missing any prerequisites for Flyenv for Windows?
Version : 4.11.0
Windows: 11
```

---

#### 32. #494 - Apache 2.4.66 - problem with .conf file

- **状态**: closed
- **创建时间**: 2025-12-08
- **关闭时间**: 2026-01-17
- **作者**: @SeraNox123
- **链接**: https://github.com/xpf0000/FlyEnv/issues/494

**描述**:

```
After installing Apache 2.4.66 and trying to launch it, it generates a default .conf file that contains lines like:

Example:
Line 35 – ServerRoot "C:/Apache24-64"

My previous Apache 2.4.65 .conf file had something different instead of that line:

Define SRVROOT "C:/Users/Administrator/AppData/Local/Programs/PhpWebStudy-Data/app/apache-2.4.65/Apache24"
ServerRoot "${SRVROOT}"


Since I don’t have Apache installed at C:/Apache24-64, it fails to launch.

So, as I understand it, this is just the default Apache .conf file, which is not suitable for FlyEnv.

Windows 11, 24H2

[2.4.66.conf.txt](https://github.com/user-attachments/files/24029878/2.4.66.conf.txt)
```

---

#### 33. #492 - 提示 "帮助程序正在安装, 请稍候 ." 但是一直安装不了

- **状态**: closed
- **创建时间**: 2025-12-08
- **关闭时间**: 2026-01-17
- **作者**: @KuiYang2017
- **链接**: https://github.com/xpf0000/FlyEnv/issues/492

**描述**:

```
系统: Windows 11 家庭中文版  26200.7309
FlyEnv:4.11.0 
```

---

#### 34. #491 - windows系统环境变量有中文时出现乱码

- **状态**: closed
- **创建时间**: 2025-12-08
- **关闭时间**: 2026-01-17
- **作者**: @Chandler1332
- **链接**: https://github.com/xpf0000/FlyEnv/issues/491

**描述**:

```
系统环境变量路径有中文路径时，通过flyenv查看，中文会变成乱码。
系统：windows 11
软件版本：4.11.0

<img width="1965" height="189" alt="Image" src="https://github.com/user-attachments/assets/b9640c6c-ef1b-47a6-869e-307169263052" />
```

---

#### 35. #490 - feature like wildcard for subdomain is available?

- **状态**: closed
- **创建时间**: 2025-12-07
- **关闭时间**: 2026-01-17
- **作者**: @AlnThea
- **链接**: https://github.com/xpf0000/FlyEnv/issues/490

**描述**:

```
is flyenv have feature like wildcard for subdomain? 

im on project that using using wildcard for first time, 
im already try using AI , but no one success, 
lets say i have domain called logipos.test, the subdomain is admin.logipos.test , gudang.logipos.test
but when im try serve laravel using like this
`php artisan serve --host=logipos.test --port=8000`

logipos.test => opened
admin.logipos.test/admin/login => opened , cause its using fillament
gudang.logipos.test => 403 forbidden , asking AI its say aboiut apache blocked it or somethink...
 its is because still blank? but on my route is like this

` ` `
<?php

use Illuminate\Support\Facades\Route;

Route::middleware([
    'auth',
    'role:warehouse',
])->group(function () {

    Route::get('/', function () {
        return "Gudang Dashboard";
    });

    // Tambahkan route gudang lain di sini
});

` ` `
its should return gudang Dashboard right? it what i got is  403 forbidden
here my host file
` ` `
 localhost name resolution is handled within DNS itself.
X-HOSTS-BEGIN
127.0.0.1     excel.test
::1     excel.test
127.0.0.1     fraktal.test
::1     fraktal.test
127.0.0.1     licensetor.test
::1     licensetor.test
127.0.0.1     phpmyadmin.test
::1     phpmyadmin.test
127.0.0.1     aivideo.test
::1     aivideo.test
127.0.0.1     avc.test
::1     avc.test
127.0.0.1     terra.test
::1     terra.test
127.0.0.1     prisma.test
::1     prisma.test
127.0.0.1     prisma-universitas.test
::1     prisma-universitas.test

127.0.0.1   logipos.test
127.0.0.1   pos.logipos.test
127.0.0.1   logistic.logipos.test
127.0.0.1   gudang.logipos.test
127.0.0.1   finance.logipos.test
127.0.0.1   admin.logipos.test
127.0.0.1   api.logipos.test

 Optional 
127.0.0.1   cashier.logipos.test
127.0.0.1   warehouse.logipos.test
127.0.0.1   courier.logipos.test

X-HOSTS-END

` ` `

(btw the host logipos.test get deleted when im closed the flyenv and open it again)


here my redirection by role
` ` `
<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class RedirectByRole
{
    public function handle(Request $request, Closure $next): Response
    {
        $user = auth()->user();

        if (!$user) {
            return $next($request);
        }

        $host = $request->getHost();

        // Host tujuan dinamis (tanpa protokol, tanpa port)
        $posDomain      = subdomain('pos');
        $gudangDomain   = subdomain('gudang');
        $logisticDomain = subdomain('logistic');
        $adminDomain    = subdomain('admin');

        // Port (opsional - hanya dipakai di DEV)
        $posPort        = env('POS_PORT',      8001);
        $gudangPort     = env('GUDANG_PORT',   8002);
        $logisticPort   = env('LOGISTIC_PORT', 8003);
        $adminPort      = env('ADMIN_PORT',    8005);

        // PRODUCTION tidak memakai port (Nginx/Apache port 80/443)
        $isLocal = app()->environment('local');

        // Generate URL dinamis
        $urlPos      = $isLocal ? "http://{$posDomain}:{$posPort}"           : "https://{$posDomain}";
        $urlGudang   = $isLocal ? "http://{$gudangDomain}:{$gudangPort}"     : "https://{$gudangDomain}";
        $urlLogistic = $isLocal ? "http://{$logisticDomain}:{$logisticPort}" : "https://{$logisticDomain}";
        $urlAdmin    = $isLocal ? "http://{$adminDomain}:{$adminPort}/admin" : "https://{$adminDomain}/admin";

        // === RULE A: Cashier → POS ===
        if ($user->hasRole('cashier') && $host !== $posDomain) {
            return redirect()->away($urlPos);
        }

        // === RULE B: Warehouse → Gudang ===
        if ($user->hasRole('warehouse') && $host !== $gudangDomain) {
            return redirect()->away($urlGudang);
        }

        // === RULE C: Logistic → Logistic Panel ===
        if ($user->hasRole('logistic') && $host !== $logisticDomain) {
            return redirect()->away($urlLogistic);
        }

        // === RULE D: Admin & Finance → Filament ===
        if ($user->hasRole(['admin', 'finance']) && $host !== $adminDomain) {
            return redirect()->away($urlAdmin);
        }

        return $next($request);
    }
}


` ` `


on the domain have a wildcard right? how about on flyEnv for local? or should i try creating domain using manual on flyenv? like logipos.test , gudang.logpos.test? cause its not on flyenv

<img width="870" height="553" alt="Image" src="https://github.com/user-attachments/assets/6d3716c0-92d4-4b8d-87bc-d13b741b8fd3" />

 
```

---

#### 36. #489 - 2个站点地址都是127.0.0.1

- **状态**: closed
- **创建时间**: 2025-12-05
- **关闭时间**: 2026-01-17
- **作者**: @flowerwOw0316
- **链接**: https://github.com/xpf0000/FlyEnv/issues/489

**描述**:

```
都是127.0.0.1的2个站点，端口不同，为什么第二个不能保存了，我第一个填8000，nginx，第二个填8001，域名都是写127.0.0.1，第二个一直提示域名那里划红线无法保存
```

---

#### 37. #485 - 需要安装帮助程序，帮助程序安装失败

- **状态**: closed
- **创建时间**: 2025-12-02
- **关闭时间**: 2026-01-17
- **作者**: @bjlf
- **链接**: https://github.com/xpf0000/FlyEnv/issues/485

**描述**:

```
之前每次打开都提示需要安装帮助程序，之后能自动安装，今天开始出现帮助程序安装失败，请尝试在弹出的终端中手动安装，但是不能正常弹出手动安装窗口，卸载重装后问题没有解决


<img width="1888" height="1139" alt="Image" src="https://github.com/user-attachments/assets/ac9e214d-fb7f-4860-a7eb-45fd35109ecc" />

```

---

#### 38. #484 - licensed of the flyenv

- **状态**: closed
- **创建时间**: 2025-12-01
- **关闭时间**: 2026-01-17
- **作者**: @ibraimfarag
- **链接**: https://github.com/xpf0000/FlyEnv/issues/484

**描述**:

```
hello everyone
i have a licensed of the flyenv on my computer
I'm tempted to sell my laptop  and get a new one
how can I keep or transfer the license to new one?

```

---

#### 39. #481 - Java8下载目录与库名不一致导致添加环境变量操作无效

- **状态**: closed
- **创建时间**: 2025-11-25
- **关闭时间**: 2025-11-26
- **作者**: @geelph
- **链接**: https://github.com/xpf0000/FlyEnv/issues/481

**描述**:

```
软件版本：
4.11.0

Java8下载目录名称与库名不一致，导致添加到环境变量操作一直无法生效
<img width="1420" height="361" alt="Image" src="https://github.com/user-attachments/assets/b186009d-54ce-4df6-b5b0-3b5ba3670442" />
添加到环境变量

<img width="870" height="470" alt="Image" src="https://github.com/user-attachments/assets/78e1318c-15f4-4c77-9bad-ec2f54064361" />

手动把 undefined 修改为：Java后再次修改立马成功。

<img width="1270" height="379" alt="Image" src="https://github.com/user-attachments/assets/810e9512-73d5-4643-a691-39f398a39a40" />
```

---

#### 40. #480 - 编译完成之后打开失败

- **状态**: closed
- **创建时间**: 2025-11-21
- **关闭时间**: 2026-01-17
- **作者**: @liuxiaojinla
- **链接**: https://github.com/xpf0000/FlyEnv/issues/480

**描述**:

```
<img width="1040" height="670" alt="Image" src="https://github.com/user-attachments/assets/4f164dcc-d131-4593-aeff-7bf34dc36c62" />

Uncaught Exception:
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Applications/FlyEnv.app/Contents/Resources/app.asar/node_modules/ajv/dist/2020.js' imported from /Applications/FlyEnv.app/Contents/Resources/app.asar/node_modules/conf/dist/source/index.js
at finalizeResolution (node:internal/modules/esm/resolve:279:11)
at moduleResolve (node:internal/modules/esm/resolve:870:10)
at defaultResolve (node:internal/modules/esm/resolve:994:11)
at ModuleLoader.defaultResolve (node:internal/modules/esm/loader:780:12)
at #cachedDefaultResolve (node:internal/modules/esm/loader:704:25)
at ModuleLoader.resolve (node:internal/modules/esm/loader:687:38)
at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:305:38)
at ModuleJob._link (node:internal/modules/esm/module_job:137:49)
```

---

#### 41. #478 - Helper not install (no env or services works)

- **状态**: closed
- **创建时间**: 2025-11-15
- **关闭时间**: 2026-01-17
- **作者**: @mohif1995
- **链接**: https://github.com/xpf0000/FlyEnv/issues/478

**描述**:

```
after fresh install for the FlyEnv
Version 4.10.8 
at first run it show helper installation failed 
as shown in image 
win 11 25h2

<img width="1265" height="804" alt="Image" src="https://github.com/user-attachments/assets/1d1af2c6-8367-41ed-b0f5-5bb343821fa8" />
```

---

#### 42. #476 - [提议] 激活关联github账号

- **状态**: closed
- **创建时间**: 2025-11-14
- **关闭时间**: 2026-01-17
- **作者**: @RuntimeBroker
- **链接**: https://github.com/xpf0000/FlyEnv/issues/476

**描述**:

```
如果重置机器，之前的绑定的激活就会作废，建议关联github账号，只要登陆激活关联过的github即可
```

---

#### 43. #471 - This project is illegal!

- **状态**: closed
- **创建时间**: 2025-11-10
- **关闭时间**: 2025-11-11
- **作者**: @p1xel007
- **链接**: https://github.com/xpf0000/FlyEnv/issues/471

**描述**:

```
This project is illegal to be free! This project is very underrated and under appreciated. 

Hats off to the developer, I've donated, and you should too. (sorry for the bait title)
```

---

#### 44. #469 - 安装成功后，再次安装就安装不成功了

- **状态**: closed
- **创建时间**: 2025-11-04
- **关闭时间**: 2026-01-17
- **作者**: @loveTHElife
- **链接**: https://github.com/xpf0000/FlyEnv/issues/469

**描述**:

```
<img width="370" height="270" alt="Image" src="https://github.com/user-attachments/assets/f62d379c-b638-40ad-a1b6-4d9c4427ad9a" />

```

---

#### 45. #468 - 【缺陷/改进】Windows 默认数据存储路径易被清理软件误删，导致服务异常

- **状态**: closed
- **创建时间**: 2025-11-03
- **关闭时间**: 2025-11-03
- **作者**: @nyzx0322
- **链接**: https://github.com/xpf0000/FlyEnv/issues/468

**描述**:

```
**问题描述：**
在 Windows 系统下，FlyEnv 的默认数据存储路径为 `C:\Users\[用户名]\AppData\Local\Temp\PhpWebStudy-Data\`。此目录位于系统临时文件夹中，是许多电脑清理工具（如 360、腾讯电脑管家、CCleaner 等）的默认清理目标。

当用户执行垃圾清理时，该目录下的文件（很可能是已安装的 PHP、Nginx、MySQL 等服务的核心文件、配置或日志）会被误删。这直接导致之前已安装并能正常使用的服务无法启动或运行，出现各种难以排查的异常，用户体验非常差。

**问题分析：**
`%TEMP%` 目录的设计初衷是存放临时文件，其内容可以被安全删除而不影响系统核心功能。将 FlyEnv 的持久化数据（如服务二进制文件、数据库数据）存储于此，从设计上是不合理的，因为它不具备持久化的特性。

**建议的解决方案：**
建议将默认的数据存储路径更改至一个更持久、更专用的位置。例如：

-   **方案一（推荐）：** 使用 `%APPDATA%` 目录。
    -   例如：`C:\Users\[用户名]\AppData\Roaming\FlyEnv\`
    -   此目录专为应用程序存储用户特定的设置和数据文件而设计，不会被清理工具清理。
-   **方案二：** 在用户主目录下创建专用文件夹。
    -   例如：`C:\Users\[用户名]\FlyEnv\` 或 `C:\Users\[用户名]\.flyenv\`
-   **方案三：** 使用 `%PROGRAMDATA%` 目录（需要管理员权限，但适合全用户）。
    -   例如：`C:\ProgramData\FlyEnv\`

通过修改默认路径，可以从根本上避免因清理工具误删而导致的服务失效问题。
```

---

#### 46. #467 - Error: nginx: [emerg] invalid value "true" in "gzip" directive, it must be "on" or "off"

- **状态**: closed
- **创建时间**: 2025-10-31
- **关闭时间**: 2025-11-16
- **作者**: @thaikolja
- **链接**: https://github.com/xpf0000/FlyEnv/issues/467

**描述**:

```
# Issue

I've brought this issue up [in a previous issue](https://github.com/xpf0000/FlyEnv/issues/204) previously in #204, which was marked as resolved. However, this seems not to be the case.

## Environment
- **OS:** macOS (`Tahoe 26.1 (25B77)`, but also previous versions)
- **FlyEnv Version:** `4.10.8` (latest)
- **Nginx Module:** Bundled with FlyEnv
- **Error Location:** `/Users/XXXXX/Library/PhpWebStudy/server/vhost/nginx/XXXXXXX.conf:7`

## Description

Upon starting the Nginx service through FlyEnv, the following error consistently appears:

` ` `
2025/10/05 05:58:55 [emerg] 21928#0: invalid value "true" in "gzip" directive, it must be "on" or "off" in /Users/XXXXXX/Library/PhpWebStudy/server/vhost/nginx/XXXXXX.test.conf:7
` ` `

Or, as an image:

![Image](https://github.com/user-attachments/assets/58e22f60-1975-4031-9930-c3e2fa80ee2e)


## Expected Behavior

Nginx should start successfully without configuration validation errors. The `gzip` directive should adhere to Nginx's syntax standards (`on` or `off`), which would fix it. The FlyEnv configuration generator appears to be writing `gzip true;` instead of the correct Nginx syntax `gzip on;` in the virtual host configuration file.

## Actual Behavior

Nginx fails to start due to an invalid boolean value (`true`) being used in the `gzip` directive. Nginx expects `on` or `off` (without quotes), not JavaScript/JSON-style boolean literals.

## Temporary Fix

Opening the site's "Vhost Config File" shows `gzip true;`. Setting it to `gzip on;` fixes the issue for this specific site.

![Vhost Config File](https://github.com/user-attachments/assets/50a63327-605d-4227-90d8-d5f31dc9342b)

## Steps to Reproduce

1. Install FlyEnv 4.10.8 on macOS
2. Configure a site
3. Attempt to start the Nginx service
4. Observe the configuration validation error

## Investigation

I attempted to locate the source of this misconfiguration in the FlyEnv repository (`src/render/components/Nginx/Config.vue:53`), but could not find any instances where `gzip on` or similar Nginx gzip directives are explicitly set to `true` in the codebase.
```

---

#### 47. #466 - Default storage location

- **状态**: closed
- **创建时间**: 2025-10-29
- **关闭时间**: 2026-03-06
- **作者**: @Overhead1387
- **链接**: https://github.com/xpf0000/FlyEnv/issues/466

**描述**:

```
Hi, first of all I want to thank you for making this reality. It's such an amazing project and it just works. I just have two things. First one being:
I installed this on arch Linux and in the beginning everything was perfect but at some point I don't exactly know when it happened. But instead of php and apache and mysql being installed in the default /.config location it's now in a home brew folder which I can't open or find anywhere on the system. I'm the beginning it was all installed in the config folder and I could click inside flyenv on the installed location and it opened but now that's not possible anymore. I can click all I want but it doesn't open that folder and it doesn't seem to exist. How is this possible? And there is a bug when I could open the folder location flyenv becomes unresponsive for a moment. 
The second point is about students. I'm a student and I recommended to use this for all the students but I can't seem to find any student program for the license. Will that be made possible in the near future? 

```

---

#### 48. #461 - rabbitmq 每次安装完是好的， 重启flyEnv后就无法使用

- **状态**: closed
- **创建时间**: 2025-10-23
- **关闭时间**: 2026-01-17
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/461

**描述**:

```
<img width="2390" height="556" alt="Image" src="https://github.com/user-attachments/assets/fe00ce0a-1b7d-493f-bb58-ce7a136360aa" />

**Macos** 26.0.1 

```

---

#### 49. #456 - Rename lang code for Ukrainian to 'uk'

- **状态**: closed
- **创建时间**: 2025-10-17
- **关闭时间**: 2025-11-12
- **作者**: @vendeeglobe
- **链接**: https://github.com/xpf0000/FlyEnv/issues/456

**描述**:

```
The correct two letter language ISO code for Urkainian is `uk`.

Important for correct language matching in Computer Assisted Translation tools.
```

---

#### 50. #455 - Add 'Error Log' tab to PHP module

- **状态**: closed
- **创建时间**: 2025-10-17
- **关闭时间**: 2025-11-19
- **作者**: @vendeeglobe
- **链接**: https://github.com/xpf0000/FlyEnv/issues/455

**描述**:

```
Add a 'Error Log' tab to the PHP module.

Showing:
error_log = /path/to/php_error.log

```

---

#### 51. #453 - postgresql服务启动失败

- **状态**: closed
- **创建时间**: 2025-10-17
- **关闭时间**: 2026-01-17
- **作者**: @bjlf
- **链接**: https://github.com/xpf0000/FlyEnv/issues/453

**描述**:

```
多个版本都是这样，启动时报错
Error: pg_ctl: could not start server
Examine the log output.
日志信息为
2025-10-17 14:57:44.372 CST [21620] 日志:  正在启动 PostgreSQL 16.10, compiled by Visual C++ build 1944, 64-bit
2025-10-17 14:57:44.375 CST [21620] 日志:  无法绑定IPv6地址"::1": Permission denied
2025-10-17 14:57:44.376 CST [21620] 日志:  无法绑定IPv4地址"127.0.0.1": Permission denied
2025-10-17 14:57:44.376 CST [21620] 警告:  无法为 "localhost" 创建监听套接字
2025-10-17 14:57:44.376 CST [21620] 致命错误:  无法创建TCP/IP套接字
2025-10-17 14:57:44.377 CST [21620] 日志:  数据库系统已关闭
确定5432端口没有被占用，并且尝试将端口改为5433，没有解决问题
修改配置listen_addresses = '*'，或listen_addresses = '0.0.0.0'，没有解决问题
```

---

#### 52. #451 - Apache Config Impossible - keeps reverting back to defaults

- **状态**: closed
- **创建时间**: 2025-10-09
- **关闭时间**: 2026-01-17
- **作者**: @christoferd
- **链接**: https://github.com/xpf0000/FlyEnv/issues/451

**描述**:

```
Hi, issue: Apache Config Impossible - keeps reverting back to defaults

For the last hour I have been trying to configure apache. 
No matter what I do, it keeps reverting back to the default.

I want to setup server root to my own root where I have all my projects.
I want to allow VirtualHosts so I can add one for each project.

Not even Copilot could figure out how to get this working. The instructions they supply are already outdated and/or not working.
```

---

#### 53. #450 - Rust语言服务页无限加载

- **状态**: closed
- **创建时间**: 2025-10-09
- **关闭时间**: 2026-01-17
- **作者**: @chansee97
- **链接**: https://github.com/xpf0000/FlyEnv/issues/450

**描述**:

```
<img width="1176" height="767" alt="Image" src="https://github.com/user-attachments/assets/67904d67-da2f-45bc-ae44-62cd880868b4" />

Rust服务页无限加载，无法使用
```

---

#### 54. #444 - Nodejs Module management exception

- **状态**: closed
- **创建时间**: 2025-09-28
- **关闭时间**: 2025-11-16
- **作者**: @openapphub
- **链接**: https://github.com/xpf0000/FlyEnv/issues/444

**描述**:

```
安装nvm，fnm 成功后，管理页面这里还是提示未安装。检查和排除环境变量，缓存等问题。客户端也重启。依旧可以复现。

https://github.com/user-attachments/assets/9cbd9628-9b1a-4ccc-81ab-f45b371e9577
```

---

#### 55. #438 - DNS server fails to start with “EADDRINUSE 0.0.0.0:53” on Windows 11

- **状态**: closed
- **创建时间**: 2025-09-08
- **关闭时间**: 2025-11-16
- **作者**: @ibraimfarag
- **链接**: https://github.com/xpf0000/FlyEnv/issues/438

**描述**:

```
Trying to start the built‑in DNS Server in FlyEnv/PhpWebStudy on Windows 11 results in the error: “Error: bind EADDRINUSE 0.0.0.0:53”, which indicates that port 53 is already in use.

Diagnostics with netstat/tasklist show that the listener on port 53 belongs to svchost.exe running the SharedAccess service (Windows Internet Connection Sharing, ICS). ICS includes a DNS proxy that binds to port 53 on all interfaces, and its port can't be changed or stop


<img width="1755" height="903" alt="Image" src="https://github.com/user-attachments/assets/f8443529-922e-4692-aaea-7a33791849b4" />
```

---

#### 56. #436 - Add custom fonts

- **状态**: closed
- **创建时间**: 2025-09-05
- **关闭时间**: 2025-11-16
- **作者**: @fishsixs
- **链接**: https://github.com/xpf0000/FlyEnv/issues/436

**描述**:

```
Suggestion: Add custom fonts. Both the interface and the editor need to select custom fonts
```

---

#### 57. #434 - Load failed: The term 'export' is not recognized as the name of a cmdlet, function, script file

- **状态**: closed
- **创建时间**: 2025-09-03
- **关闭时间**: 2025-11-16
- **作者**: @howest-ward
- **链接**: https://github.com/xpf0000/FlyEnv/issues/434

**描述**:

```
When accessing the folders of the hosts I get this warning/error with every command I type (even just a simple dir)

On windows 11
Powershell terminal
Version 4.10.8

` ` `
[FlyEnv] Loading environment variables...
[FlyEnv] Load failed: The term 'export' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
` ` `
Any way of disabling or fixing this error?
```

---

#### 58. #433 - 提一个并不合理的建议，希望作者适配linux-mips、linux-loong64、linux-riscv等架构

- **状态**: closed
- **创建时间**: 2025-09-03
- **关闭时间**: 2025-11-16
- **作者**: @huayuprophet
- **链接**: https://github.com/xpf0000/FlyEnv/issues/433

**描述**:

```
这个议题听起来并不合理，但无奈的是我工作所在的单位在做全设备国产化替代。x86和arm的设备越来越少了，我不得不在难用的国产化设备中运行各类服务。然而自己编译又过于麻烦和繁琐，而且有很多时候是无法起效的，，目前我暂时使用qemu在loong64设备中虚拟化为arm64架构再运行各类服务，这使我至少损失了30%的性能，在io场景甚至损失了超过50%的性能。

目前用的比较多的设备是loong64-abi2.0架构的。

谢谢开发者。
```

---

#### 59. #432 - 最新版安装包，安装完打开主文件一片空白

- **状态**: closed
- **创建时间**: 2025-09-02
- **关闭时间**: 2025-11-16
- **作者**: @yunuo-tech
- **链接**: https://github.com/xpf0000/FlyEnv/issues/432

**描述**:

```
<img width="2378" height="1588" alt="Image" src="https://github.com/user-attachments/assets/1e1a6ec4-9936-4f5d-9ecf-16cce33eaeae" />
```

---

#### 60. #430 - Either not display preview releases or mark them properly

- **状态**: closed
- **创建时间**: 2025-09-01
- **关闭时间**: 2025-11-16
- **作者**: @brazenvoid
- **链接**: https://github.com/xpf0000/FlyEnv/issues/430

**描述**:

```
The app shows preview / pre-release / unstable releases of Mariadb. Either mark them appropriately or not show them like it is for other services.

<img width="1474" height="324" alt="Image" src="https://github.com/user-attachments/assets/2a272541-093b-42b6-b3f3-46538033071b" />

Here the top one is a release candidate, not a stable release version for general use.
```

---

#### 61. #429 - 这个是不是没改过来

- **状态**: closed
- **创建时间**: 2025-09-01
- **关闭时间**: 2025-09-10
- **作者**: @RuntimeBroker
- **链接**: https://github.com/xpf0000/FlyEnv/issues/429

**描述**:

```
<img width="980" height="483" alt="Image" src="https://github.com/user-attachments/assets/fb177dde-e7e8-45a0-a8a7-f553aeafa933" />
```

---

#### 62. #428 - Bring back auto deletion

- **状态**: closed
- **创建时间**: 2025-08-31
- **关闭时间**: 2025-11-16
- **作者**: @brazenvoid
- **链接**: https://github.com/xpf0000/FlyEnv/issues/428

**描述**:

```
It was all fine and dandy with streamlined deletion and addition. Not every body cares about data. I am using it on my dev machine, all my data can be generated whenever and I have enough intelligence to backup when i want to.

Please bring back the feature and instead make it an option in the settings panel.
```

---

#### 63. #425 - Services Not Starting After Update to FlyEnvVersion 4.10.8

- **状态**: closed
- **创建时间**: 2025-08-27
- **关闭时间**: 2025-11-16
- **作者**: @entegreturk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/425

**描述**:

```
After updating from previous version to FlyEnvVersion 4.10.8, all services stopped working and getting PowerShell script errors.
Error Output:
Windows PowerShell
Copyright (C) Microsoft Corporation. All rights reserved.
Install the latest PowerShell for new features and improvements! https://aka.ms/PSWindows
PS D:\FlyEnv\PhpWebStudy> powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "try { Unblock-File -LiteralPath 'C:\Users\ENTEGR~1\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1'; & 'C:\Users\ENTEGR~1\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1' } finally { Remove-Item -LiteralPath 'C:\Users\ENTEGR~1\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC' -Recurse -Force -ErrorAction SilentlyContinue }"
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:55 
char:17
+     $xmlPath = "$env:TEMP\FlyEnvTask.xml"
+                 ~~~~~~~~~~~~~~~~~~~~~~~~~
Unexpected token '$env:TEMP\FlyEnvTask.xml"
    $xmlConfig | Out-File -FilePath $xmlPath -Encoding Unicode -Force
    schtasks /Create /XML "$xmlPath" /TN "$taskName" /F
    if (Test-Path -LiteralPath $xmlPath) {
        Remove-Item -LiteralPath $xmlPath -Force
    }
    if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
        Start-Sleep -Milliseconds 1500
        Write-Host "Task' in expression or statement.
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:55  
char:26
+     $xmlPath = "$env:TEMP\FlyEnvTask.xml"
+                          ~~~~~~~~~~~~~~~~
Unexpected token '\FlyEnvTask.xml"
    $xmlConfig | Out-File -FilePath $xmlPath -Encoding Unicode -Force
    schtasks /Create /XML "$xmlPath" /TN "$taskName" /F
    if (Test-Path -LiteralPath $xmlPath) {
        Remove-Item -LiteralPath $xmlPath -Force
    }
    if (Get-ScheduledTask -TaskName $taskName -ErrorAction SilentlyContinue) {
        Start-Sleep -Milliseconds 1500
        Write-Host "Task' in expression or statement.
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:73  
char:67
+     Write-Host "Task Create Failed, Error: $($_.Exception.Message)"
+                                                                   ~
The string is missing the terminator: ".
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:14  
char:24
+       if ($process.Id) {
+                        ~
Missing closing '}' in statement block or type definition.
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:12  
char:9
+     try {
+         ~
Missing closing '}' in statement block or type definition.
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:81  
char:1
+
The Try statement is missing its Catch or Finally block.
At C:\Users\EntegreTurk\AppData\Local\Temp\BNCPDB2DWa3NEHUnyr4wWv1WAzNvviAC\036rXSz3lHPbtzk4IHm0dTt1VCxB6BpT.ps1:3 c 
har:5
+ try {
+     ~
Missing closing '}' in statement block or type definition.
    + CategoryInfo          : ParserError: (:) [], ParseException
    + FullyQualifiedErrorId : UnexpectedToken
PS D:\FlyEnv\PhpWebStudy> echo "Task-eSsZGl0P1jbSrbVdX1qdiJEvDlTyHOVl-End"
Environment:

Version: FlyEnvVersion 4.10.8
OS: Windows
Installation Path: D:\FlyEnv\PhpWebStudy

Issue:
After updating to version 4.10.8, no services are working and PowerShell script has syntax errors during task creation process.
```

---

#### 64. #424 - MacOS using VPN PHP will have slow response times

- **状态**: closed
- **创建时间**: 2025-08-27
- **关闭时间**: 2025-08-28
- **作者**: @yactest
- **链接**: https://github.com/xpf0000/FlyEnv/issues/424

**描述**:

```
if i use shadowrocket vpn,my php can't use ,I suspect it's because the remote database connection time is too long

<img width="996" height="474" alt="Image" src="https://github.com/user-attachments/assets/e68d269a-b1fb-4d12-acb4-d71478a6d66f" />
```

---

#### 65. #422 - Suggestion: Request elevated privileges only when necessary

- **状态**: closed
- **创建时间**: 2025-08-21
- **关闭时间**: 2025-11-16
- **作者**: @jjdevzinho
- **链接**: https://github.com/xpf0000/FlyEnv/issues/422

**描述**:

```
## Suggestion: Request elevated privileges only when necessary

Hi, first of all — thank you for the amazing work on FlyEnv. It's a very promising project with great cross-platform potential.

I’ve noticed that on Windows, FlyEnv requests administrator privileges immediately upon startup, even when no privileged actions are being performed. This behavior can cause:

- Antivirus alerts (some engines flag it as a generic trojan due to elevated access)
- Distrust from new users unfamiliar with the project
- Slower startup times and reduced user experience

### 💡 Suggestion

Instead of requesting elevation at launch, consider prompting for admin access only when required — such as when editing the `hosts` file, downloading binaries, or performing system-level tasks.

This change could improve usability, reduce false positives from antivirus software, and increase trust among users.

Thanks again for your work — looking forward to seeing FlyEnv evolve!

```

---

#### 66. #420 - PostgreSql stop running because of postmaster.pid

- **状态**: closed
- **创建时间**: 2025-08-21
- **关闭时间**: 2025-09-03
- **作者**: @pramudyawibowo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/420

**描述**:

```
On the Linux version, I'm experiencing this issue constantly. Uninstalling and reinstalling it doesn't fix the problem, and deleting the PostgreSQL data directory doesn't fix it. I'm using Ubuntu 24.04.3 LTS (Noble Numbat).

<img width="691" height="212" alt="Image" src="https://github.com/user-attachments/assets/fe5650ae-aa5d-465b-ae18-af09f17323b7" />
```

---

#### 67. #419 - Add option to Choose PHP NTS / TS / ZTS when adding a php version

- **状态**: closed
- **创建时间**: 2025-08-21
- **关闭时间**: 2025-11-16
- **作者**: @raugadh
- **链接**: https://github.com/xpf0000/FlyEnv/issues/419

**描述**:

```
Currently ZTS is automatically being added, which for some reason is very slow on my PC, whereas NTS works fine but i have to manually add it.
```

---

#### 68. #418 - 关于 Programming Languages: PHP (Composer), Java (Maven), NodeJS, Python, Go, Erlang, Ruby, Rust (Rustup), Bun, Deno, Gradle. 的描述准确性

- **状态**: closed
- **创建时间**: 2025-08-20
- **关闭时间**: 2025-11-16
- **作者**: @liyujiang-gzu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/418

**描述**:

```
NodeJS/Bun/Deno/Gradle 准确来说是工具而不是编程语言，也许调整成这样会好点：

` ` `
Programming Languages: PHP (Composer), Java (Maven, Gradle), JavaScript (NodeJS, Bun, Deno), Python, Go, Erlang, Ruby, Rust (Rustup).
` ` `
```

---

#### 69. #417 - AI时代，需要向量数据库环境

- **状态**: closed
- **创建时间**: 2025-08-20
- **关闭时间**: 2025-08-20
- **作者**: @liyujiang-gzu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/417

**描述**:

```
如 chroma、qdrant
```

---

#### 70. #416 - How to add Ollama and Redis manually, Its too slowly to download from GitHub inside.

- **状态**: closed
- **创建时间**: 2025-08-20
- **关闭时间**: 2025-08-20
- **作者**: @liyujiang-gzu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/416

**描述**:

```
#415 正如这位兄弟所说，不能手动下载，在国内从 GitHub 下载很恼火
```

---

#### 71. #415 - How to add a new runingtime? just like dotnet

- **状态**: closed
- **创建时间**: 2025-08-20
- **关闭时间**: 2025-11-16
- **作者**: @jack-liew
- **链接**: https://github.com/xpf0000/FlyEnv/issues/415

**描述**:

```
1. How to add a new runingtime? just like dotnet, then add a new web site.
2. How to add a static site with only html pages.
3. How to add mariadb manually, Its too slowly to download from FlyEnv inside.
 
**Thanks for great job!**
```

---

#### 72. #414 - [bug] Portuguese (pt/pt-br) translation not working in Windows build v4.10.6

- **状态**: closed
- **创建时间**: 2025-08-19
- **关闭时间**: 2025-08-27
- **作者**: @jjdevzinho
- **链接**: https://github.com/xpf0000/FlyEnv/issues/414

**描述**:

```
Hi!

I noticed that in the latest Windows release ([v4.10.6](https://github.com/xpf0000/FlyEnv/releases/tag/v4.10.6)), the Portuguese translations (both `pt` and `pt-br`) are not working as expected.

- When running the app locally with `npm run dev`, both Portuguese and Brazilian Portuguese appear in the language selector and the translations work correctly.
- However, after installing the Windows build, only "PT" appears as an option, and when selected, the interface remains in English.
- Upon checking the installed files, the translation files for `pt` and `pt-br` are present, but their contents are still in English.
- Also, after switching to English, the "PT" option disappears from the language selector.

It seems the build process is either not including the correct translation files or not loading them properly at runtime.

**Steps to reproduce:**
1. Download and install the Windows version from [v4.10.6 release](https://github.com/xpf0000/FlyEnv/releases/tag/v4.10.6).
2. Open the app and check the language options and translations.
3. Compare with the behavior when running locally via `npm run dev`.

**Suggestion:**
- Please review the build process to ensure the correct translation files are included and loaded.
- Check if the language selector and i18n logic are correctly handling both `pt` and `pt-br`.

Thank you!
```

---

#### 73. #413 - [bug] Syntax error in package.json (missing comma on line 17) in Win branch

- **状态**: closed
- **创建时间**: 2025-08-19
- **关闭时间**: 2025-08-27
- **作者**: @jjdevzinho
- **链接**: https://github.com/xpf0000/FlyEnv/issues/413

**描述**:

```
Hi!
I found a syntax error in the `package.json` file on the Win branch.

There is a missing comma at the end of line 17, which causes `npm install` to fail with a JSON parse error.
This makes it impossible to install dependencies or run the project on Windows without manually fixing the file.

File:
https://github.com/xpf0000/FlyEnv/blob/Win/package.json

How to reproduce:
1. Clone the repository and checkout the `Win` branch.
2. Run `npm install`.
3. You will get an EJSONPARSE error due to the missing comma.

Suggestion:
Please add the missing comma on line 17 to fix the JSON syntax.

Thank you!
```

---

#### 74. #412 - PhpMyAdmin : Errors and deprecation warnings with PHP 8.4

- **状态**: closed
- **创建时间**: 2025-08-19
- **关闭时间**: 2025-08-21
- **作者**: @mrsof
- **链接**: https://github.com/xpf0000/FlyEnv/issues/412

**描述**:

```
- **Platform**
Window 11

- **Plugin**
PhpMyAdmin 

- **Current Behavior**
When using PhpMyAdmin in PHP 8.4.1, it throws a lot of erros and deprecation warnings.
[https://github.com/phpmyadmin/phpmyadmin/issues/19404](https://github.com/phpmyadmin/phpmyadmin/issues/19404)
Same behavior encoutered in Flyenv (V4.10.6).

- **Expected Behavior**
App start normally with new PHP 8.4

- **Recurrence Probability**
Always

- **Steps To Reproduce**
Install and activate PHP 8.4

- **Anything else?**
Solution : 
Run composer update in PhpAdmin root directory ([source](https://github.com/phpmyadmin/phpmyadmin/issues/19404#issuecomment-2841380557)):
`composer update --no-dev`

 **Note**  Using this solution will result in the following new deprecations error messages:
 `Use "parseExpression()" instead of "Twig/twig 3.21: Method "Twig\Parser::getExpressionParser()" as it is deprecated.`

 If PHP 8.4 is required for your project, I believe your best option is to continue using PHP 8.3 solely for PhpMyAdmin concurrently.

```

---

#### 75. #410 - Performance optimization suggestions on Windows 11

- **状态**: closed
- **创建时间**: 2025-08-19
- **关闭时间**: 2025-08-28
- **作者**: @adiatis
- **链接**: https://github.com/xpf0000/FlyEnv/issues/410

**描述**:

```
Hello,

First of all, thank you for the great work on this project. I really appreciate the effort that has gone into making FlyEnv/phpwebstudy such a helpful development environment.

I have been testing FlyEnv on both a desktop and a laptop (both running Windows 11), and I noticed that performance feels noticeably slower compared to Laravel Herd. Since I would like to continue working with FlyEnv, I would like to ask if there are additional optimization steps I might be missing.

What I have already tried

- PHP (php.ini) optimized according to recommended dev settings (OPcache enabled, zlib compression tested).
- MariaDB (my.cnf) tuned for local development.
- Windows Defender exclusions added for:
  * phpwebstudy folder
  * project folders (web/sites)
  * processes: mariadb.exe, php.exe, httpd.exe, phpwebstudy.exe

Despite these steps, requests in FlyEnv still feel noticeably slower compared to Herd.

Are there additional optimizations I can apply to improve performance under Windows 11?  Any FlyEnv-specific configuration I might have overlooked? Any guidance or advice would be greatly appreciated.

Best regards,

adiatis
```

---

#### 76. #408 - Support for Typesense Search Engine

- **状态**: closed
- **创建时间**: 2025-08-17
- **关闭时间**: 2025-08-21
- **作者**: @romeltech
- **链接**: https://github.com/xpf0000/FlyEnv/issues/408

**描述**:

```
Would really appreciate if we're able to run typesense on local development.
https://typesense.org/
```

---

#### 77. #407 - 除了phpMyadmin外，新加的任何站点都出现No input file specified.错误，求助

- **状态**: closed
- **创建时间**: 2025-08-16
- **关闭时间**: 2025-08-20
- **作者**: @SoMeTech
- **链接**: https://github.com/xpf0000/FlyEnv/issues/407

**描述**:

```
如题。
甚至我把phpMyadmin站点删除，依然如此
环境：
硬件：Mac mini
软件环境：
Nginx:1.28
php:8.2.29
mysql:8.0.43

```

---

#### 78. #406 - 软件图标和托盘图标不统一

- **状态**: closed
- **创建时间**: 2025-08-16
- **关闭时间**: 2025-08-21
- **作者**: @hpz1179011410
- **链接**: https://github.com/xpf0000/FlyEnv/issues/406

**描述**:

```
在Windows系统软件图标和托盘图标不统一，如果可以的，建议统一

<img width="728" height="77" alt="Image" src="https://github.com/user-attachments/assets/63055055-f276-4cba-a63a-7198e99c812d" />

<img width="644" height="369" alt="Image" src="https://github.com/user-attachments/assets/3c391c17-614b-491d-a76d-7a67abce5aa0" />
```

---

#### 79. #405 - phpMyAdmin 本地打开读取数据库很慢

- **状态**: closed
- **创建时间**: 2025-08-15
- **关闭时间**: 2025-08-28
- **作者**: @258692011
- **链接**: https://github.com/xpf0000/FlyEnv/issues/405

**描述**:

```
经过测试 EServer-4.7.0 小皮phpStudy v8.1，都没这种问题，本地打开读取数据库很快，支持开启了vpn访问
FlyEnv 打开读取数据库超级慢，而且不支持开启了vpn访问
```

---

#### 80. #404 - 开启apache，nginx不会自动先关闭，再开启apache

- **状态**: closed
- **创建时间**: 2025-08-15
- **关闭时间**: 2025-08-16
- **作者**: @258692011
- **链接**: https://github.com/xpf0000/FlyEnv/issues/404

**描述**:

```
<img width="1001" height="604" alt="Image" src="https://github.com/user-attachments/assets/bc4f709a-841c-4287-bc32-1ba6a8ba0a43" />
```

---

#### 81. #403 - http://phpmyadmin.test/ 网址打不开

- **状态**: closed
- **创建时间**: 2025-08-15
- **关闭时间**: 2025-08-28
- **作者**: @258692011
- **链接**: https://github.com/xpf0000/FlyEnv/issues/403

**描述**:

```
系统环境：windows 10 x64

安装好phpmyadmin，服务也全部启动了，打开不了，使用 Navicat Premium 访问数据库又没问题

下面这个问题已经确认是 FlyEnv 问题
删除 D:\PhpWebStudy\PhpWebStudy-Data\server\www\phpmyadmin 文件夹
删除站点 http://phpmyadmin.test/
重新安装 phpmyadmin 老半天卡住,下载进度显示0%不会下载
D:\PhpWebStudy\PhpWebStudy-Data\server\www 打开这个目录又看到重新下载好了
去站点查看没有 http://phpmyadmin.test/
需要 FlyEnv 整个退出，重新打开，站点才会显示出来 http://phpmyadmin.test/
```

---

#### 82. #402 - Added gpt-oss model from OpenAI

- **状态**: closed
- **创建时间**: 2025-08-14
- **关闭时间**: 2025-08-17
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/402

**描述**:

```
gpt-oss model from OpenAI just came out a few days ago but I can't find it in FlyEnv repository, it would be great if you added them
https://ollama.com/library/gpt-oss
```

---

#### 83. #401 - Add Rustup version to Rust module

- **状态**: closed
- **创建时间**: 2025-08-14
- **关闭时间**: 2025-09-22
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/401

**描述**:

```
FlyEnv makes installing Rust easier and more convenient which is great
I am currently building some cross-platform applications using Rust but it requires additional Toolchains to compile the application. Unfortunately, the Rust version installed by FlyEnv has a compilation error. I have to use Rustup to install a new Rust version to compile the application. It would be great if you added Rustup to the Rust installer.
more Rustup https://rustup.rs/
```

---

#### 84. #398 - 关于模块下载路径问题

- **状态**: closed
- **创建时间**: 2025-08-13
- **关闭时间**: 2025-08-14
- **作者**: @iamzuncle
- **链接**: https://github.com/xpf0000/FlyEnv/issues/398

**描述**:

```
默认下载路径是c盘的local下的temp里，这个位置我有程序会清除，而且C盘分配的空间也有限，我想问下有没有什么方式可以将下载路径修改为自定义方式
```

---

#### 85. #397 - 我试图安装mysql时，一直提示“可用版本获取中”，列表中没有任何版本

- **状态**: closed
- **创建时间**: 2025-08-12
- **关闭时间**: 2025-08-14
- **作者**: @SoMeTech
- **链接**: https://github.com/xpf0000/FlyEnv/issues/397

**描述**:

```
我试图安装mysql时，一直提示“可用版本获取中”，列表中没有任何版本
```

---

#### 86. #396 - Cannot start PostgreSQL service

- **状态**: closed
- **创建时间**: 2025-08-10
- **关闭时间**: 2025-08-12
- **作者**: @Fradd747
- **链接**: https://github.com/xpf0000/FlyEnv/issues/396

**描述**:

```
Hey,

I wanted to start a PostgreSQL database, I downloaded the latest package (v17.5), installed it, clicked the start button but it only says error message `Error: Data Dir E:/Program Files/PhpWebStudy-Data/server/postgresql/postgresql17 create faild`. Tried to delete pgsql, reinstall it. Also tried v16.9 pgsql version, still the same.

Running on Windows 11
FlyEnv v4.10.5
```

---

#### 87. #394 - 火绒报毒

- **状态**: closed
- **创建时间**: 2025-08-09
- **关闭时间**: 2025-08-14
- **作者**: @KnightBlood
- **链接**: https://github.com/xpf0000/FlyEnv/issues/394

**描述**:

```
<img width="476" height="320" alt="Image" src="https://github.com/user-attachments/assets/47ccf36f-3a8b-4beb-940a-9097b6f6a2e3" />
```

---

#### 88. #393 - 期望增加个consul的安装

- **状态**: closed
- **创建时间**: 2025-08-08
- **关闭时间**: 2025-08-15
- **作者**: @ieras
- **链接**: https://github.com/xpf0000/FlyEnv/issues/393

**描述**:

```
我想很多开发php的同学往往也会同时开发go，开发go的同学一般都会用到微服务，而业内consul用的蛮多的，期望增加它的安装和管理
```

---

#### 89. #392 - 无法启动php7.3 提示spawn EPERM!

- **状态**: closed
- **创建时间**: 2025-08-08
- **关闭时间**: 2025-11-16
- **作者**: @lait233
- **链接**: https://github.com/xpf0000/FlyEnv/issues/392

**描述**:

```
如题 这是为什么?

<img width="1011" height="687" alt="Image" src="https://github.com/user-attachments/assets/c42b45d0-5e1f-4e45-b5e6-75b4dee103aa" />
```

---

#### 90. #391 - Error: No Found Function: fetchAllOnlineVersion when enabling MariaDB

- **状态**: closed
- **创建时间**: 2025-08-02
- **关闭时间**: 2025-08-02
- **作者**: @akbariandev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/391

**描述**:

```
When I try to enable MariaDB, I get this error: `Error: No Found Function: fetchAllOnlineVersion`


**OS:** Windows11

**Flyenv Version:** 4.10.4
```

---

#### 91. #390 - 建议增加git拉取项目

- **状态**: closed
- **创建时间**: 2025-08-01
- **关闭时间**: 2025-11-16
- **作者**: @360060316
- **链接**: https://github.com/xpf0000/FlyEnv/issues/390

**描述**:

```
建议增加git拉取项目
```

---

#### 92. #389 - Mac brew 渠道安装 postgresql 账号问题

- **状态**: closed
- **创建时间**: 2025-07-30
- **关闭时间**: 2025-07-30
- **作者**: @Jwlmn
- **链接**: https://github.com/xpf0000/FlyEnv/issues/389

**描述**:

```
安装完后 brew 会自启动 pg 服务，但是软件内显示为关闭状态，使用系统用户名登录正常
如果我手动关闭 pg 服务 `brew services stop postgresql` 后启动软件内 pg 服务，登录就会报用户不存在
```

---

#### 93. #388 - Is it possible to add other services to “New Project” in PHP?

- **状态**: closed
- **创建时间**: 2025-07-30
- **关闭时间**: 2025-11-16
- **作者**: @bismawy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/388

**描述**:

```
Can we add “New Project” independently? For example, I want to add [ClassicPress](https://packagist.org/packages/classicpress/classicpress).

Thanks before

<img width="1188" height="798" alt="Image" src="https://github.com/user-attachments/assets/a0e76f9a-6fcb-4d91-83f8-bc2350d649d4" />
```

---

#### 94. #387 - Menu bar bug

- **状态**: closed
- **创建时间**: 2025-07-29
- **关闭时间**: 2025-07-31
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/387

**描述**:

```
After update to v4.10.4, menu bar on macos looks like this

<img width="171" height="277" alt="Image" src="https://github.com/user-attachments/assets/58d9e70e-7f76-430b-821b-96385eb7a29c" />

I'm not sure if this is intentional, but it's ugly compared to the previous one. If possible, could you please keep the previous design for MacOS?

The main problem though is that when I click on something like Apache, the menu bar closes and then I have to open it again to enable PHP and all the other services.

```

---

#### 95. #386 - Cant Install Ollama Version

- **状态**: closed
- **创建时间**: 2025-07-29
- **关闭时间**: 2025-07-31
- **作者**: @Mikoofficial404
- **链接**: https://github.com/xpf0000/FlyEnv/issues/386

**描述**:

```
I want to install Ollama, but when I install Ollama in the version section... in the service section it doesn't read the Ollama path.
```

---

#### 96. #385 - MariaDB cant be fetched. (v. 4.10.4)

- **状态**: closed
- **创建时间**: 2025-07-28
- **关闭时间**: 2025-07-31
- **作者**: @topfuel75
- **链接**: https://github.com/xpf0000/FlyEnv/issues/385

**描述**:

```
I just installed FlyEnv-Setup-4.10.4.exe.

When going to the "MariaDB" in the left menu I get the following message:
"Error: No Found Function: fetchAllOnlineVersion".

PHP and Apache worked fine, and could be fetched. I can also see that MySQL can be fetched.
```

---

#### 97. #384 - There cannot be more than one port. Multi-port can be configured in nginx.

- **状态**: closed
- **创建时间**: 2025-07-25
- **关闭时间**: 2025-11-16
- **作者**: @lifetin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/384

**描述**:

```

There cannot be more than one port. Multi-port can be configured in nginx. As follows

端口不能多个,在nginx中可以配置多端口的呢. 如下
` ` ` 
server {
    listen 80;
    listen 8216;
    server_name xxxxxxx.com;
}
` ` `
```

---

#### 98. #383 - Apache download dead link

- **状态**: closed
- **创建时间**: 2025-07-24
- **关闭时间**: 2025-07-28
- **作者**: @NemStudio18
- **链接**: https://github.com/xpf0000/FlyEnv/issues/383

**描述**:

```
after new install of flyenv, 
windows 10
https://www.apachelounge.com/download/VS17/binaries/httpd-2.4.64-250710-win64-VS17.zip <= url to download apache with flyenv .
is broken link !!!
```

---

#### 99. #382 - Error On Apache Service toggling ON. Error: AH00558: httpd.exe: Could not reliably determine the server's fully qualified domain name

- **状态**: closed
- **创建时间**: 2025-07-24
- **关闭时间**: 2025-07-24
- **作者**: @hardiklakhalani
- **链接**: https://github.com/xpf0000/FlyEnv/issues/382

**描述**:

```
`Error: AH00558: httpd.exe: Could not reliably determine the server's fully qualified domain name, using fe80::d244:1435:2dd4:2b33. Set the 'ServerName' directive globally to suppress this message`

Events Timeline:
1. FlyEnv launched
2. Attempted Group start (Apache, PHP, MySQL, Mailpit)
3. System Crashed with recovery percentage countdown
<img width="480" height="298" alt="Image" src="https://github.com/user-attachments/assets/cc79c0c9-fd4b-47c8-a313-01c24a4969ae" />  

4. System started again
5. FlyEnv launched
6. Attempted Group start (Apache, PHP, MySQL, Mailpit)
7. `Error: AH00558: httpd.exe: Could not reliably determine the server's fully qualified domain name, using fe80::d244:1435:2dd4:2b33. Set the 'ServerName' directive globally to suppress this message`

<img width="1789" height="814" alt="Image" src="https://github.com/user-attachments/assets/d2f41d01-529c-4cf0-8774-e02402cd61cf" />

Flyenv Version `4.10.3`

```

---

#### 100. #381 - Need a one-click cleanup of all log functions

- **状态**: closed
- **创建时间**: 2025-07-24
- **关闭时间**: 2025-11-16
- **作者**: @slionx
- **链接**: https://github.com/xpf0000/FlyEnv/issues/381

**描述**:

```
Need a one-click cleanup of all log functions，thx
```

---

#### 101. #380 - Windwos 下设置composer别名时，选择php环境目录路径错误

- **状态**: closed
- **创建时间**: 2025-07-23
- **关闭时间**: 2025-07-31
- **作者**: @gongxiaorong
- **链接**: https://github.com/xpf0000/FlyEnv/issues/380

**描述**:

```
Windwos FlyEnv Version 4.10.3

实际路径为：C:/Program Files/PhpWebStudy-Data/app/php-8.2.29
提供选择的路径为：C:/Program Files/PhpWebStudy-Data/app/php-8.2.29/bin/php
```

---

#### 102. #379 - Windows Failed to Write Log with Monolog library ?

- **状态**: closed
- **创建时间**: 2025-07-22
- **关闭时间**: 2025-11-16
- **作者**: @Mbahmo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/379

**描述**:

```
Writing to the log file failed: Write of 8976 bytes failed with errno=9 Bad file descriptor The exception occurred while attempting to log: {"httpMethod":"POST","headerCorrelationId":"fbd6e7ed-7003-41fe-b5ed-633d9da5c485","requestDetails":"{\"companyCode\":\"DEFAULT\",\"customerCode\":\"3807\",\"date\":\"2025-07-22\",\"type\":1,\"lines\":[{\"number\":1,\"quantity\":1,\"amount\":1,\"taxCode\":\"P0000000\",\"itemCode\":\"\",\"description\":\"Pumpkin Hat\"}],\"addresses\":{\"singleLocation\":{\"line1\":\"[ADDRESS REDACTED]\",\"line2\":\"\",\"line3\":\"\",\"city\":\"Altamonte Springs\",\"region\":\"FL\",\"postalCode\":\"32714\",\"country\":\"US\"}}}","responseDetails":{"id":85094460260944,"code":"cd41b9a7-17f5-4308-bd46-f42a1f81a5c4","companyId":8031771,"date":"2025-07-22","status":"Saved","type":"SalesInvoice","batchCode":"","currencyCode":"USD","exchangeRateCurrencyCode":"USD","customerUsageType":"","entityUseCode":"","customerVendorCode":"3807","customerCode":"3807","exemptNo":"","reconciled":false,"locationCode":"","reportingLocationCode":"","purchaseOrderNo":"","referenceCode":"","salespersonCode":"","taxOverrideType":"None","taxOverrideAmount":0,"taxOverrideReason":"","totalAmount":1,"totalExempt":0,"totalDiscount":0,"totalTax":0.07,"totalTaxable":1,"totalTaxCalculated":0.07,"adjustmentReason":"NotAdjusted","adjustmentDescription":"","locked":false,"region":"FL","country":"US","version":1,"softwareVersion":"25.7.2.0","originAddressId":85094460260945,"destinationAddressId":85094460260945,"exchangeRateEffectiveDate":"2025-07-22","exchangeRate":1,"email":"","businessIdentificationNo":"","modifiedDate":"2025-07-22T19:02:42.7192817Z","modifiedUserId":6593458,"taxDate":"2025-07-22","lines":[{"id":85094460260954,"transactionId":85094460260944,"lineNumber":"1","boundaryOverrideId":0,"customerUsageType":"","entityUseCode":"","description":"Pumpkin Hat","destinationAddressId":85094460260945,"originAddressId":85094460260945,"discountAmount":0,"discountTypeId":0,"exemptAmount":0,"exemptCertId":0,"exemptNo":"","isItemTaxable":true,"isSSTP":false,"itemCode":"","lineAmount":1,"quantity":1,"ref1":"","ref2":"","reportingDate":"2025-07-22","revAccount":"","sourcing":"Destination","tax":0.07,"taxableAmount":1,"taxCalculated":0.07,"taxCode":"P0000000","taxCodeId":8087,"taxDate":"2025-07-22","taxEngine":"","taxOverrideType":"None","businessIdentificationNo":"","taxOverrideAmount":0,"taxOverrideReason":"","taxIncluded":false,"details":[{"id":85094460260963,"transactionLineId":85094460260954,"transactionId":85094460260944,"addressId":85094460260945,"country":"US","region":"FL","countyFIPS":"","stateFIPS":"12","exemptAmount":0,"exemptReasonId":4,"exemptRuleId":0,"inState":true,"jurisCode":"12","jurisName":"FLORIDA","jurisdictionId":16,"signatureCode":"AKUY","stateAssignedNo":"","jurisType":"STA","jurisdictionType":"State","nonTaxableAmount":0,"nonTaxableRuleId":0,"nonTaxableType":"RateRule","rate":0.06,"rateRuleId":1441927,"rateSourceId":3,"serCode":"","sourcing":"Destination","tax":0.06,"taxableAmount":1,"taxType":"Sales","taxSubTypeId":"S","taxTypeGroupId":"SalesAndUse","taxName":"FL STATE TAX","taxAuthorityTypeId":45,"taxRegionId":4010518,"taxCalculated":0.06,"taxOverride":0,"rateType":"General","rateTypeCode":"G","taxableUnits":1,"nonTaxableUnits":0,"exemptUnits":0,"unitOfBasis":"PerCurrencyUnit","isNonPassThru":false,"isFee":false,"reportingTaxableUnits":1,"reportingNonTaxableUnits":0,"reportingExemptUnits":0,"reportingTax":0.06,"reportingTaxCalculated":0.06,"liabilityType":"Seller","chargedTo":"Buyer"},{"id":85094460260964,"transactionLineId":85094460260954,"transactionId":85094460260944,"addressId":85094460260945,"country":"US","region":"FL","countyFIPS":"","stateFIPS":"12","exemptAmount":0,"exemptReasonId":4,"exemptRuleId":0,"inState":true,"jurisCode":"117","jurisName":"SEMINOLE","jurisdictionId":427,"signatureCode":"AMJE","stateAssignedNo":"69","jurisType":"CTY","jurisdictionType":"County","nonTaxableAmount":0,"nonTaxableRuleId":0,"nonTaxableType":"RateRule","rate":0.01,"rateRuleId":3327613,"rateSourceId":4,"serCode":"","sourcing":"Destination","tax":0.01,"taxableAmount":1,"taxType":"Sales","taxSubTypeId":"S","taxTypeGroupId":"SalesAndUse","taxName":"FL COUNTY TAX","taxAuthorityTypeId":45,"taxRegionId":4010518,"taxCalculated":0.01,"taxOverride":0,"rateType":"General","rateTypeCode":"G","taxableUnits":1,"nonTaxableUnits":0,"exemptUnits":0,"unitOfBasis":"PerCurrencyUnit","isNonPassThru":false,"isFee":false,"reportingTaxableUnits":1,"reportingNonTaxableUnits":0,"reportingExemptUnits":0,"reportingTax":0.01,"reportingTaxCalculated":0.01,"liabilityType":"Seller","chargedTo":"Buyer"}],"nonPassthroughDetails":[],"lineLocationTypes":[{"documentLineLocationTypeId":85094460260956,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"ShipFrom"},{"documentLineLocationTypeId":85094460260957,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"ShipTo"},{"documentLineLocationTypeId":85094460260958,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"PointOfOrderAcceptance"},{"documentLineLocationTypeId":85094460260959,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"PointOfOrderOrigin"},{"documentLineLocationTypeId":85094460260960,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"GoodsPlaceOrServiceRendered"},{"documentLineLocationTypeId":85094460260961,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"Import"},{"documentLineLocationTypeId":85094460260962,"documentLineId":85094460260954,"documentAddressId":85094460260945,"locationTypeCode":"BillTo"}],"hsCode":"","costInsuranceFreight":0,"vatCode":"","vatNumberTypeId":0}],"addresses":[{"id":85094460260945,"transactionId":85094460260944,"boundaryLevel":"Address","line1":"[ADDRESS REDACTED]","line2":"","line3":"","city":"Altamonte Springs","region":"FL","postalCode":"32714-7035","country":"US","taxRegionId":4010518,"taxRegionIdAv":0,"latitude":"28.682724","longitude":"-81.419088"}],"locationTypes":[{"documentLocationTypeId":85094460260947,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"ShipFrom"},{"documentLocationTypeId":85094460260948,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"ShipTo"},{"documentLocationTypeId":85094460260949,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"PointOfOrderAcceptance"},{"documentLocationTypeId":85094460260950,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"PointOfOrderOrigin"},{"documentLocationTypeId":85094460260951,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"GoodsPlaceOrServiceRendered"},{"documentLocationTypeId":85094460260952,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"Import"},{"documentLocationTypeId":85094460260953,"documentId":85094460260944,"documentAddressId":85094460260945,"locationTypeCode":"BillTo"}],"summary":[{"country":"US","region":"FL","jurisType":"State","jurisCode":"12","jurisName":"FLORIDA","taxAuthorityType":45,"stateAssignedNo":"","taxType":"Sales","taxSubType":"S","taxName":"FL STATE TAX","rateType":"General","taxable":1,"rate":0.06,"tax":0.06,"taxCalculated":0.06,"nonTaxable":0,"exemption":0},{"country":"US","region":"FL","jurisType":"County","jurisCode":"117","jurisName":"SEMINOLE","taxAuthorityType":45,"stateAssignedNo":"69","taxType":"Sales","taxSubType":"S","taxName":"FL COUNTY TAX","rateType":"General","taxable":1,"rate":0.01,"tax":0.01,"taxCalculated":0.01,"nonTaxable":0,"exemption":0}]},"requestURI":"\/api\/v2\/transactions\/create","totalExecutionTime":761,"statusCode":201,"timestamp":"2025\/07\/22 19:00:36","exceptionMessage":null}

I have tried to change the permission of folder within log still not success, Were not having issues of this before on (Sorry) Laragon, Here's my configuration :

[phpinfo.pdf](https://github.com/user-attachments/files/21373859/phpinfo.pdf)

Let me know if you need other infos that I need to provide, Thanks in advance

```

---

#### 103. #378 - Auto Launch At Boot

- **状态**: closed
- **创建时间**: 2025-07-22
- **关闭时间**: 2025-07-31
- **作者**: @ethanzhao2001
- **链接**: https://github.com/xpf0000/FlyEnv/issues/378

**描述**:

```
1. The Auto Launch At Boot switch cannot be displayed normally, whether it is turned on or off to exit the page and then enter the display to turn off.
2. The StartHidden cannot hide the interface as expected.

macOS Sequoia 15.5
```

---

#### 104. #377 - RabbitMQ Path error

- **状态**: closed
- **创建时间**: 2025-07-22
- **关闭时间**: 2025-11-16
- **作者**: @ethanzhao2001
- **链接**: https://github.com/xpf0000/FlyEnv/issues/377

**描述**:

```
Click on the entry path and refresh it to display normally.macOS Sequoia 15.5
<img width="848" height="183" alt="Image" src="https://github.com/user-attachments/assets/0b7567d1-ba12-409f-b1e1-70ce378fd1e4" />
```

---

#### 105. #376 - FlyEnv[Windows 11] 无法识别 alpha 版本的 PHP？

- **状态**: closed
- **创建时间**: 2025-07-22
- **关闭时间**: 2025-07-28
- **作者**: @wolf-leo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/376

**描述**:

```
目前有两个PHP版本 8.4 / 8.5 都是官网下载的

8.4正常

添加8.5alpha2 无法识别

<img width="1184" height="501" alt="Image" src="https://github.com/user-attachments/assets/4e931b98-1dcb-42f3-b2c1-1070dff776af" />

<img width="1167" height="627" alt="Image" src="https://github.com/user-attachments/assets/483bda9b-3372-4390-a010-766d9a9019e3" />

<img width="882" height="259" alt="Image" src="https://github.com/user-attachments/assets/f9e0d47d-d0ff-4a27-a2ff-e15c01fa344e" />
```

---

#### 106. #374 - Apache is not reloaded when new project is added

- **状态**: closed
- **创建时间**: 2025-07-21
- **关闭时间**: 2025-08-28
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/374

**描述**:

```
As the title says. When I add a new project, Apache doesn't reload. 
V4.10.3 and macos 15.5
```

---

#### 107. #371 - PostgreSql 无法加载

- **状态**: closed
- **创建时间**: 2025-07-17
- **关闭时间**: 2025-11-16
- **作者**: @FiShelly
- **链接**: https://github.com/xpf0000/FlyEnv/issues/371

**描述**:

```
macos最新版。

使用macports安装了pgsql，切换到服务模块没有加载对应内容。

<img width="2240" height="1420" alt="Image" src="https://github.com/user-attachments/assets/642b465e-2ec9-4834-94c9-6079411256d5" />

<img width="2276" height="1490" alt="Image" src="https://github.com/user-attachments/assets/a1e3c8f7-bd7d-4e5b-a3be-6972aec3e6b1" />
```

---

#### 108. #370 - 【我有一个想法】新增一个快捷PHP代码测试运行框

- **状态**: closed
- **创建时间**: 2025-07-16
- **关闭时间**: 2025-08-15
- **作者**: @tmd-user
- **链接**: https://github.com/xpf0000/FlyEnv/issues/370

**描述**:

```
<img width="2181" height="925" alt="Image" src="https://github.com/user-attachments/assets/b3e77baa-a5b4-4d66-aa77-5484a55e04b0" />

如果觉得我这个想法有有的话希望新增上，当测试部分代码是否可用性时就不需要新建一个PHP去测试、环境不一样的话还得切换做这种繁琐的事情
```

---

#### 109. #369 - Build on linux failed

- **状态**: closed
- **创建时间**: 2025-07-15
- **关闭时间**: 2025-07-28
- **作者**: @tinkerbaj
- **链接**: https://github.com/xpf0000/FlyEnv/issues/369

**描述**:

```
✘ [ERROR] Could not resolve "../build/notarize"

    configs/electron-builder.ts:4:21:
      4 │ import Notarize from '../build/notarize'
        ╵                      ~~~~~~~~~~~~~~~~~~~

1 error
error Command failed with exit code 1.

I found this in gitignore 

/build/*.p8
/build/notarize.js
/build/JWT.js
/build/Legacy.js
/build/notarize.ts
/build/JWT.ts
/build/Legacy.ts
/build/pkg-scripts
/build/bin/arm
/build/bin/x86

probably this is issue

```

---

#### 110. #368 - windwos 很多本地扩展加载不了

- **状态**: closed
- **创建时间**: 2025-07-15
- **关闭时间**: 2025-11-16
- **作者**: @ayuayue
- **链接**: https://github.com/xpf0000/FlyEnv/issues/368

**描述**:

```
本地扩展 dll ，放置到对应目录后，php -m 还是无法加载，php pdo_oci 已经把扩展放到了 ext ,ini中也修改了，oracle客户端环境变量都设置了。
改过ini 去掉php前缀，dll后缀，简写名称。几种方式都试了，还是不行

<img width="1245" height="144" alt="Image" src="https://github.com/user-attachments/assets/78d1c175-5f2a-4d39-a281-9be3e03e66b0" />
```

---

#### 111. #367 - Auto Launch At Boot and Start Services Automatically are not working on windows.

- **状态**: closed
- **创建时间**: 2025-07-14
- **关闭时间**: 2025-08-21
- **作者**: @nmn-mehta
- **链接**: https://github.com/xpf0000/FlyEnv/issues/367

**描述**:

```
The Auto Launch At Boot, Start Services Automatically, and Start Hidden/Minimized to Tray settings aren’t working. To enable Auto Launch, I have to manually add it to Windows Task Scheduler. The app window doesn’t minimize automatically, and no service starts on automatically. The Minimized to Tray and Start Services Automatically were working on older versions.
OS: Windows 11
Processor: AMD Ryzen 5000 series

User Settings:
` ` `
{
	"last-check-update-time": 0,
	"update-channel": "latest",
	"window-state": {
		"index": {
			"x": 47,
			"y": 47,
			"width": 1584,
			"height": 804
		}
	},
	"server": {
		"nginx": {
			"current": {
				"version": "1.25.5",
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\nginx-1.25.5\\nginx.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\nginx-1.25.5",
				"num": 125,
				"enable": true,
				"run": true,
				"running": false,
				"isLocal7Z": true,
				"typeFlag": "nginx",
				"pid": "20348"
			}
		},
		"php": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.2.18\\php-cgi.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.2.18",
				"run": false,
				"running": true,
				"version": "8.2.18",
				"num": 82,
				"enable": true,
				"typeFlag": "php"
			}
		},
		"mysql": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\mysql-9.2.0\\mysql-9.2.0-winx64\\bin\\mysqld.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\mysql-9.2.0\\mysql-9.2.0-winx64",
				"run": false,
				"running": false,
				"version": "9.2.0",
				"num": 92,
				"enable": true,
				"typeFlag": "mysql"
			}
		},
		"mariadb": {
			"current": {}
		},
		"apache": {
			"current": {
				"version": "2.4.59",
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\apache-2.4.59\\bin\\httpd.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\apache-2.4.59",
				"num": 24,
				"enable": true,
				"run": true,
				"running": false,
				"isLocal7Z": true,
				"typeFlag": "apache",
				"pid": "25972"
			}
		},
		"memcached": {
			"current": {}
		},
		"redis": {
			"current": {
				"version": "7.2.4",
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\redis-7.2.4\\redis-server.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\redis-7.2.4",
				"num": 72,
				"enable": true,
				"run": false,
				"running": false,
				"isLocal7Z": true,
				"typeFlag": "redis"
			}
		},
		"mongodb": {
			"current": {}
		},
		"pure-ftpd": {
			"current": {}
		},
		"caddy": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\caddy-2.9.1\\caddy.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\caddy-2.9.1",
				"run": true,
				"running": false,
				"version": "2.9.1",
				"num": 29,
				"enable": true,
				"typeFlag": "caddy",
				"pid": "25388"
			}
		},
		"node": {
			"current": {
				"bin": "C:\\Program Files\\nodejs\\node.exe",
				"path": "C:\\Program Files\\nodejs",
				"run": false,
				"running": false,
				"version": "20.18.0",
				"num": 2018,
				"enable": true,
				"typeFlag": "node"
			}
		},
		"mailpit": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\mailpit-1.23.2\\mailpit.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\mailpit-1.23.2",
				"run": false,
				"running": false,
				"version": "1.23.2",
				"num": 123,
				"enable": true,
				"typeFlag": "mailpit"
			}
		},
		"composer": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\composer-2.8.6\\composer.phar",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\composer-2.8.6",
				"run": false,
				"running": false,
				"version": "2.8.6",
				"num": 28,
				"enable": true,
				"typeFlag": "composer"
			}
		},
		"ollama": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\ollama-0.8.0\\ollama.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\ollama-0.8.0",
				"run": false,
				"running": false,
				"version": "0.8.0",
				"num": 8,
				"enable": true,
				"typeFlag": "ollama"
			}
		},
		"golang": {
			"current": {
				"bin": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\static-go-1.24.3\\bin\\go.exe",
				"path": "C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\static-go-1.24.3",
				"run": false,
				"running": false,
				"version": "1.24.3",
				"num": 124,
				"enable": true,
				"typeFlag": "golang"
			}
		},
		"perl": {
			"current": {}
		},
		"deno": {
			"current": {}
		},
		"etcd": {
			"current": {}
		},
		"bun": {
			"current": {}
		}
	},
	"password": "",
	"showTour": true,
	"setup": {
		"common": {
			"showItem": {
				"elasticsearch": false,
				"tomcat": false,
				"postgresql": false,
				"rabbitmq": false,
				"java": false,
				"ruby": false,
				"erlang": false,
				"python": false,
				"mariadb": false,
				"dns": false,
				"pure-ftpd": false,
				"mongodb": false,
				"memcached": false,
				"httpserver": false,
				"minio": false,
				"meilisearch": false,
				"rust": false,
				"apache": false,
				"bun": false,
				"deno": false,
				"golang": false,
				"perl": false,
				"etcd": false,
				"ollama": false,
				"ftp-srv": false
			}
		},
		"nginx": {
			"dirs": []
		},
		"apache": {
			"dirs": []
		},
		"mysql": {
			"dirs": []
		},
		"mariadb": {
			"dirs": []
		},
		"php": {
			"dirs": [
				"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.1.32",
				"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.4.5"
			]
		},
		"memcached": {
			"dirs": []
		},
		"redis": {
			"dirs": []
		},
		"mongodb": {
			"dirs": []
		},
		"hosts": {
			"write": true,
			"ipv6": false
		},
		"proxy": {
			"on": false,
			"fastProxy": "",
			"proxy": ""
		},
		"autoCheck": true,
		"editorConfig": {
			"theme": "vs-dark",
			"fontSize": 16,
			"lineHeight": 2
		},
		"lang": "en",
		"phpGroupStart": {
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.1.32\\php-cgi.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\php-8.4.5\\php-cgi.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\caddy-2.8.4\\caddy.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\apache-2.4.63\\Apache24\\bin\\httpd.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\nginx-1.25.5\\nginx.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\apache-2.4.59\\bin\\httpd.exe": false,
			"C:\\Users\\Naman Mehta\\AppData\\Local\\Programs\\PhpWebStudy-Data\\app\\ollama-0.8.0\\ollama.exe": false
		},
		"license": "YCZ0LDPrnuuqxhcyCS4zj4YEyus12uZYd2+a3Aiy1LPQz+YpWX35auhtsLHiV1QHSC1GtYySL77Pd1tSLC4D93rD2+yRdPkByG43bMd//unFYRikEaswKTtFPAaKAQm8rwJ3kOTrLhiOrujl4WQd3DYjHDRyBU2W2U5kbXOdlWVsBjBoaslG6d1c/Rrmu0mUejF1Pk00dSMc2KW9DWg9pAk0w+npsLeKZt7zbrdOj5JP8OombFJu7MtGfbUebg6GO0aKqqBPjiFV2UEzMEHZn9V+wSFzENhFuoZU1bIJPSYufXYl6uc1sMqiJyJEGjcAHOs8mcXBHv+stWF3aMINqw==",
		"alias": {},
		"autoLunach": false,
		"theme": "system",
		"excludeLocalVersion": [
			"mysql-8.0.36",
			"caddy-2.8.4"
		],
		"serviceShowHide": {
			"mysql": false,
			"redis": false
		},
		"composer": {
			"dirs": [
				"C:\\Users\\Naman Mehta\\AppData\\Roaming\\Composer"
			]
		},
		"node": {
			"dirs": [
				"C:\\Program Files\\nodejs"
			]
		},
		"mailpit": {
			"dirs": []
		},
		"currentNodeTool": "default",
		"forceStart": true,
		"showTool": true,
		"showAIRobot": true,
		"autoStartService": true,
		"autoHide": true,
		"autoLaunch": true
	},
	"tools": {},
	"httpServe": [],
	"appFix": {
		"nginxEnablePhp": false
	}
}
` ` `
```

---

#### 112. #366 - [BUG] Incorrect vhost path in Apache configuration

- **状态**: closed
- **创建时间**: 2025-07-13
- **关闭时间**: 2025-07-17
- **作者**: @tasouza
- **链接**: https://github.com/xpf0000/FlyEnv/issues/366

**描述**:

```
The Apache configuration is using an incorrect path for the vhosts files.

The `IncludeOptional` line in the configuration file has a missing forward slash (`/`) before `*.conf`.

- **Current line:** `C:/Users/tasouza/AppData/Local/Programs/PhpWebStudy-Data/server/vhost/apache*.conf`
- **Correct line:** `C:/Users/tasouza/AppData/Local/Programs/PhpWebStudy-Data/server/vhost/apache/*.conf`

### **Environment**
- **Operating System:** Windows 11
- **Flyenv Version:** 4.10.2
```

---

#### 113. #365 - [BUG] MariaDB not start when using configuration panel : "Found option without preceding group in config file"

- **状态**: closed
- **创建时间**: 2025-07-12
- **关闭时间**: 2025-07-17
- **作者**: @Sof69100
- **链接**: https://github.com/xpf0000/FlyEnv/issues/365

**描述**:

```
**Platform**
Window 11

**Plugin**
MariaDB (maybe some others)

**Current Behavior**
When enabling parameters in configuration panel, MariaDB is unable to start and retunr errpr :
 **"Found option without preceding group in config file"**

Before checkbox checked :
<img width="1472" height="445" alt="Image" src="https://github.com/user-attachments/assets/0d24f9f3-bee4-4082-a601-02674dccf00f" />

<img width="803" height="258" alt="Image" src="https://github.com/user-attachments/assets/2ff01d27-927d-4807-9be4-89e285b9a59f" />

After checkbox checked :

<img width="821" height="253" alt="Image" src="https://github.com/user-attachments/assets/73649899-beaf-4337-89d7-bdd410676502" />

<img width="1355" height="504" alt="Image" src="https://github.com/user-attachments/assets/b1593f4a-0d5e-47c2-ac73-89e69ab00c3b" />

**Expected Behavior**
App start normally with new configuration

**Recurrence Probability**
Always

**Steps To Reproduce**
Just clic on a checkbox and restart MariaDB

**Anything else?**
Solution : I managed to get rid of the error by manually editing the my.cnf file and move the rules added by FlyEnv inside the MariaDB tag

` ` `
[mariadbd]
# Only allow connections from localhost
bind-address = 127.0.0.1
#bind-address = 0.0.0.0
sql-mode=NO_ENGINE_SUBSTITUTION
datadir="F:/flyenv/PhpWebStudy-Data/server/mariadb/data-11.8"
innodb_buffer_pool_size = 2048M  # <---------------- Moved here

` ` `

I spotted that the same behavior occurs when using FlyEnv panel to configure PHP module.


```

---

#### 114. #364 - 设置别名弹框异常

- **状态**: closed
- **创建时间**: 2025-07-11
- **关闭时间**: 2025-07-11
- **作者**: @toptopdj
- **链接**: https://github.com/xpf0000/FlyEnv/issues/364

**描述**:

```
点击设置别名按钮弹框未能正常显示，只有遮罩层

<img width="1805" height="1087" alt="Image" src="https://github.com/user-attachments/assets/409cc396-1a8c-4cfc-89bf-7e22744f203b" />

<img width="1805" height="1087" alt="Image" src="https://github.com/user-attachments/assets/ff3e18d2-c77d-4bb4-b7ed-b223b71e7bee" />
```

---

#### 115. #363 - Could you support Gradle?

- **状态**: closed
- **创建时间**: 2025-07-10
- **关闭时间**: 2025-08-21
- **作者**: @2539469416
- **链接**: https://github.com/xpf0000/FlyEnv/issues/363

**描述**:

```
Could you support Gradle?
```

---

#### 116. #362 - window版本  4.10.0、4.10.1版本 PATH 环境变量无法设置，也无法查看

- **状态**: closed
- **创建时间**: 2025-07-10
- **关闭时间**: 2025-07-11
- **作者**: @susimng
- **链接**: https://github.com/xpf0000/FlyEnv/issues/362

**描述**:

```
<img width="1184" height="761" alt="Image" src="https://github.com/user-attachments/assets/c968ad91-8517-4c53-b60c-23a31c739c27" />
```

---

#### 117. #360 - CNM的 居然把老子代码删除了

- **状态**: closed
- **创建时间**: 2025-07-05
- **关闭时间**: 2025-07-08
- **作者**: @tangniyuqi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/360

**描述**:

```
CNM的 居然把老子代码删除了CNM的 居然把老子代码删除了CNM的 居然把老子代码删除了CNM的 居然把老子代码删除了CNM的 居然把老子代码删除了
```

---

#### 118. #359 - mac最新版brew安装成功  但是全部软件都显示无可用版本

- **状态**: closed
- **创建时间**: 2025-06-29
- **关闭时间**: 2025-07-10
- **作者**: @youziyouzishu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/359

**描述**:

```
![Image](https://github.com/user-attachments/assets/867baee0-9152-4db3-8d7b-d1ba0dcf514c)

![Image](https://github.com/user-attachments/assets/30ed21a2-bd91-494a-a7d1-709db0bcb4cf)

![Image](https://github.com/user-attachments/assets/af902ce3-54fc-48ef-a07d-eeb0f17cb021)

![Image](https://github.com/user-attachments/assets/e364fbbe-41bb-4ae0-a0f5-bab87a81b161)
```

---

#### 119. #357 - Macos Sequoia15.5  Silicon chip Arm64  "FlyEnv needs to install a helper program"

- **状态**: closed
- **创建时间**: 2025-06-28
- **关闭时间**: 2025-07-11
- **作者**: @adelgamal60
- **链接**: https://github.com/xpf0000/FlyEnv/issues/357

**描述**:

```
Macos Sequoia15.5  Silicon chip Arm64  "FlyEnv needs to install a helper program"


After .dmg installation  selecting any option i.e Apache , enter password  ->> red error msg  "FlyEnv needs to install a helper program"

DNS enabling no erorr .

Installation of .dmg app came after many failed trials to install using 

arch -arm64 brew install flyenv   ended with checksum missmatch error


What should I do to fix ??

 
```

---

#### 120. #354 - [Feature] Perl

- **状态**: closed
- **创建时间**: 2025-06-21
- **关闭时间**: 2025-06-22
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/354

**描述**:

```
One of the older programming languages still being used is Perl. I think it would sit nicely next to the other friends in FlyEnv.
https://www.perl.org/
```

---

#### 121. #353 - Command failed: php-cgi.exe -n -v

- **状态**: closed
- **创建时间**: 2025-06-21
- **关闭时间**: 2025-08-09
- **作者**: @edikurniawan-dev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/353

**描述**:

```
how to solve this error?

![Image](https://github.com/user-attachments/assets/84e8c9d4-0b10-464a-a12a-1fb6af5985ea)
```

---

#### 122. #350 - The detail page has been enhanced with a service port.

- **状态**: closed
- **创建时间**: 2025-06-19
- **关闭时间**: 2025-11-16
- **作者**: @openapphub
- **链接**: https://github.com/xpf0000/FlyEnv/issues/350

**描述**:

```
The experience suggests that the service page could be improved, for instance, by adding the service running port. There are also more possibilities, such as for database services, where additional options like backups or other functionalities could be included.

>  running port

<img width="1440" alt="Image" src="https://github.com/user-attachments/assets/29415183-3336-4716-b0e1-a2fe4322eff9" />
```

---

#### 123. #348 - DNS Error

- **状态**: closed
- **创建时间**: 2025-06-18
- **关闭时间**: 2025-07-09
- **作者**: @audi63
- **链接**: https://github.com/xpf0000/FlyEnv/issues/348

**描述**:

```
Hello,

I'm encountering a blocking issue with FlyEnv on Windows (via PhpWebStudy).

After installing PhpWebStudy on a new development machine, it's **impossible to download any PHP version** from the interface. The app shows "No available version", and no folders are created under `PhpWebStudy-Data\server\php`.

### Investigation results:
- The download system seems to rely on: `cdn.codefly.dev`
- This domain is currently **not resolving**:
  ` ` `bash
  nslookup cdn.codefly.dev
  Server failed
  ` ` `
- The direct download link:
  - [https://cdn.codefly.dev/flyenv/php/8.3.6/flyenv-php-8.3.6-windows.zip](https://cdn.codefly.dev/flyenv/php/8.3.6/flyenv-php-8.3.6-windows.zip)  
    → fails with a `DNS_PROBE_FINISHED_NXDOMAIN` error

### Consequences:
- ❌ PhpWebStudy cannot fetch any versions of:
  - PHP
  - MariaDB
  - Apache
  - Nginx
- 🛑 FlyEnv becomes **non-functional on a fresh installation**

### Temporary workaround:
- ✅ I copied the `server/php/` folder from another working machine
- ✅ PhpWebStudy then detected the versions correctly
- ⚠️ But this is not a sustainable solution

### Request:
Would it be possible to:
- 🔁 Restore access to `cdn.codefly.dev`, **or**
- 🌐 Provide an updated CDN or mirror, **or**
- ⚙️ Allow custom download sources (URL override or manual import)

Thank you very much for your great project 🙏  
Looking forward to your feedback.

**Johan**
```

---

#### 124. #347 - Win环境  PHP项目站点域名BUG

- **状态**: closed
- **创建时间**: 2025-06-18
- **关闭时间**: 2025-07-08
- **作者**: @youziyouzishu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/347

**描述**:

```
站点域名从127.0.0.1:9001改成127.0.0.1 点保存一直等待

![Image](https://github.com/user-attachments/assets/d01af040-1b6d-4fdd-9ef2-86a79eed60f2)
```

---

#### 125. #346 - Win环境 实测 thinkphp项目 nginx伪静态不生效

- **状态**: closed
- **创建时间**: 2025-06-18
- **关闭时间**: 2025-07-10
- **作者**: @youziyouzishu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/346

**描述**:

```
**问题复现**   
站点访问出现404

![Image](https://github.com/user-attachments/assets/539cc6ff-57b5-40d0-b8ea-6b42b865abed)

**FlyEnv**
Version 4.9.12

fastadmin项目官网 https://www.fastadmin.net/

![Image](https://github.com/user-attachments/assets/1fd98337-2d29-4a74-a296-d6ab7dff3b57)
```

---

#### 126. #345 - Migrating from licensed to unlicensed only three sites can be created

- **状态**: closed
- **创建时间**: 2025-06-17
- **关闭时间**: 2025-06-17
- **作者**: @lovkrisz
- **链接**: https://github.com/xpf0000/FlyEnv/issues/345

**描述**:

```
Hi

I used the migration assistant on my macbook. The old one had a license the new one doesn't have one right now. I wanted to add a new site and got the without obtaining a license only 3 sites can be created error. After that i removed almost every site that came with the migration and tried to create a new one but got the same error message (The 1 i have on the image is came from the migration). I tried to reinstall the app but got the same error.

<img width="1066" alt="Image" src="https://github.com/user-attachments/assets/39f8ead1-2257-4c51-9cda-11c02bb84fc3" />
```

---

#### 127. #344 - TODO：复刻实现小皮MySql多库多用户管理

- **状态**: closed
- **创建时间**: 2025-06-17
- **关闭时间**: 2025-07-08
- **作者**: @XXGxiaoyu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/344

---

#### 128. #324 - 建议打包增加一个Linux可用的tar.gz格式

- **状态**: closed
- **创建时间**: 2025-06-13
- **关闭时间**: 2025-07-28
- **作者**: @richwxd
- **链接**: https://github.com/xpf0000/FlyEnv/issues/324

**描述**:

```
因为服务器是用linux托管的，windows上开发部署的时候总是会遇到某些问题，比如路径，验证启动脚本啥的，做两遍，费两道手。索性本地弄了个ubuntu桌面版虚拟机，直接验证。
能否打包的时候，也来个tar.gz格式？
为什么没有使用UOS，deepin？辛酸，nvm, pyenv安装可费了大劲了，各种缺少。idea的一个工具，依赖GLIBC_2.39， Deepin23底层还是太旧，弄不上，ACE兼容也不行。花太多时间了，算了。开发还是乖乖使用ubuntu24桌面版了。

希望增加打包linux的tar.gz格式。

```

---

#### 129. #323 - 换了新的电脑 旧版本软件迁移过来后 下载php8启动后。php-v 还是显示之前的7.4

- **状态**: closed
- **创建时间**: 2025-06-11
- **关闭时间**: 2025-07-11
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/323

**描述**:

```
<img width="1067" alt="Image" src="https://github.com/user-attachments/assets/e98d7d55-8767-4296-a328-0fe8ab08e5f2" />


(base) ➜  ~ php -v
Cannot load Xdebug - it was already loaded
PHP Warning:  Module 'openssl' already loaded in Unknown on line 0

Warning: Module 'openssl' already loaded in Unknown on line 0
PHP 7.4.33 (cli) (built: Oct 13 2024 07:48:54) ( NTS )
Copyright (c) The PHP Group
Zend Engine v3.4.0, Copyright (c) Zend Technologies
    with Xdebug v3.1.6, Copyright (c) 2002-2022, by Derick Rethans
```

---

#### 130. #322 - 重装后还有之前安装保留的信息

- **状态**: closed
- **创建时间**: 2025-06-11
- **关闭时间**: 2025-06-11
- **作者**: @FFF6055
- **链接**: https://github.com/xpf0000/FlyEnv/issues/322

**描述**:

```
之前安装在了C盘，想重新安装到D盘，用卸载文件卸载掉重装了之后却还有之前安装的信息，之前安装过删掉的python和nodejs也还显示在服务中，不知道如何解决。

![Image](https://github.com/user-attachments/assets/08f9a08d-13e4-42d0-a9b6-989cc3b62024)
```

---

#### 131. #317 - MACMINI M4  安装mysql 不管是homebrew还是Macprts 都显示无可用版本？

- **状态**: closed
- **创建时间**: 2025-06-03
- **关闭时间**: 2025-06-03
- **作者**: @tangyabo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/317

**描述**:

```
MACMINI M4  安装mysql 不管是homebrew还是Macprts 都显示无可用版本？请问这是什么问题。
```

---

#### 132. #316 - PostgreSql slow start on windows 11

- **状态**: closed
- **创建时间**: 2025-06-01
- **关闭时间**: 2025-07-08
- **作者**: @agusprayogi02
- **链接**: https://github.com/xpf0000/FlyEnv/issues/316

**描述**:

```
![Image](https://github.com/user-attachments/assets/4b74a0f4-4184-4d40-aeca-863123d946d5)

I suspect it’s because of forcibly shutting down the database, and I found the base code to stop the service is using “taskkill”

![Image](https://github.com/user-attachments/assets/863ade68-2c10-4664-bcec-4a117bf62aa8)

I have found that killing processes or tasks in PostgreSQL is not recommended. Killing processes can corrupt data, cause transitions to fail, or cause PostgreSQL to become unstable.

What if you add a stop command to the PostgreSQL module section, maybe like this, but you know best practice

![Image](https://github.com/user-attachments/assets/c0c33a22-f8da-4cfb-9644-65e291e22440)

Thank you in advance for your attention🙏🙏



```

---

#### 133. #309 - 无法安装PHP74

- **状态**: closed
- **创建时间**: 2025-05-29
- **关闭时间**: 2025-07-10
- **作者**: @hb2013
- **链接**: https://github.com/xpf0000/FlyEnv/issues/309

**描述**:

```
可以安装php8,不能安装PHP74，错误如下：
ld: symbol(s) not found for architecture x86_64
clang: error: linker command failed with exit code 1 (use -v to see invocation)
make: *** [sapi/phpdbg/phpdbg] Error 1
make: Leaving directory `/opt/local/var/macports/build/_opt_local_var_macports_sources_rsync.macports.org_macports_release_tarballs_ports_lang_php/php74/work/php-7.4.33'
Command failed:  cd "/opt/local/var/macports/build/_opt_local_var_macports_sources_rsync.macports.org_macports_release_tarballs_ports_lang_php/php74/work/php-7.4.33" && /usr/bin/make -j12 -w all 
Exit code: 2
Error: Failed to build php74: command execution failed
Error: See /opt/local/var/macports/logs/_opt_local_var_macports_sources_rsync.macports.org_macports_release_tarballs_ports_lang_php/php74/main.log for details.
Error: Follow https://guide.macports.org/#project.tickets if you believe there is a bug.
Error: Processing of port php74 failed
Task-MdCupFwQxUNnuvJX2CnHM8f1VtwseARA-END
```

---

#### 134. #308 - 无法使用openssl_decrypt

- **状态**: closed
- **创建时间**: 2025-05-26
- **关闭时间**: 2025-07-28
- **作者**: @yljphp
- **链接**: https://github.com/xpf0000/FlyEnv/issues/308

**描述**:

```
环境：php7.3.33
扩展：openssl已安装，其他常用的都安装了


` ` `php
 openssl_decrypt($password, 'DES-ECB', $secret);
` ` `

上面的方法执行返回 `false`
```

---

#### 135. #307 - 加了这么多冷门的工具，还不如把etcd加上，比较实用。

- **状态**: closed
- **创建时间**: 2025-05-24
- **关闭时间**: 2025-07-08
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/307

**描述**:

```
加了这么多罕见的工具如，Minio、MeiliSearch这些非开发用途的工具，还不如把开发过程使用频繁的etcd加上。
```

---

#### 136. #302 - 1 Gbytes of Git data

- **状态**: closed
- **创建时间**: 2025-05-16
- **关闭时间**: 2025-06-10
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/302

**描述**:

```
Hi, I have cloned this project a couple of times and the cloning process is a lengthy process. I just took the opportunity to look into it why.

The actual code is nothing but 80 MB.
But the .git/ directory is 1.05 GB. That's a lot for scripting.

![Image](https://github.com/user-attachments/assets/9604cd4f-7e36-4318-b759-69b11a6fc230)

If there were binaries in this repository once during history, that could explain the extreme amount of data.

To remedy this I read `git rebase` could be a solution? I haven't had the experience to use this myself. But due to this extreme heritage of data I think it's worth looking into.

@xpf0000 What are your thoughts on this?
```

---

#### 137. #299 - Mailpit is not actually being activated from FlyEnv

- **状态**: closed
- **创建时间**: 2025-05-15
- **关闭时间**: 2025-08-15
- **作者**: @hardiklakhalani
- **链接**: https://github.com/xpf0000/FlyEnv/issues/299

**描述**:

```
### Service is showing enabled in FlyEnv
![Image](https://github.com/user-attachments/assets/5912a9d1-37e5-4684-bba3-df851e79f075)

### Unable to Access from Browser or CLI

![Image](https://github.com/user-attachments/assets/2e42e458-1fd9-41dd-9d15-d804d208d35c)
![Image](https://github.com/user-attachments/assets/eabe54ae-bd06-458f-907a-00740bd08669)

### After Running this, mailpit service actually starts
![Image](https://github.com/user-attachments/assets/0e456960-11de-4647-8b02-b26906044632)
![Image](https://github.com/user-attachments/assets/23fafaaf-0b3a-4269-bfc4-2ae61b4bcce3)
```

---

#### 138. #297 - DNS Service Loader keeps spinning.

- **状态**: closed
- **创建时间**: 2025-05-15
- **关闭时间**: 2025-05-23
- **作者**: @hardiklakhalani
- **链接**: https://github.com/xpf0000/FlyEnv/issues/297

**描述**:

```
It keeps spinning. (I just updated with latest version 4.9.10)
No App Log being added.
![Image](https://github.com/user-attachments/assets/2080f63a-2d20-4717-abee-e4abfc4dc587)

_Originally posted by @hardiklakhalani in https://github.com/xpf0000/FlyEnv/discussions/296#discussioncomment-13157043_
```

---

#### 139. #295 - 建议增加自定义服务的功能

- **状态**: closed
- **创建时间**: 2025-05-15
- **关闭时间**: 2025-07-09
- **作者**: @richwxd
- **链接**: https://github.com/xpf0000/FlyEnv/issues/295

**描述**:

```
由于现在第三方服务比较多，都靠开发者也弄不过来。能否增加自定义服务，比如apache-activemq的artemis, 这软件非常适合开发环境，小型到中型生产环境使用，同时支持多种协议MQTT，AMQP这些，配置还比较友好。又或者apace-cassandra，kafka，zookeeper这些，如果可以把启动，停止，参数，配置文件，日志文件 这些允许配置了，是否能一下子就支持了一大票的软件，不用再零零散散的启动维护了。希望考虑一下。
```

---

#### 140. #290 - Feature Request: Support for Sharing Local Sites to the Internet (Expose / Ngrok Alternative)

- **状态**: closed
- **创建时间**: 2025-05-12
- **关闭时间**: 2025-08-21
- **作者**: @lyrihkaesa
- **链接**: https://github.com/xpf0000/FlyEnv/issues/290

**描述**:

```
Hi, thanks for the awesome tool!

I'm wondering if FlyEnv has (or plans to support) a feature for sharing local development sites to the internet, similar to:

* [Laravel Herd’s sharing feature](https://herd.laravel.com/docs/windows/advanced-usage/sharing-sites)
* [Expose by Beyond Code](https://expose.dev/)
* [Ngrok](https://ngrok.com/)

This would be helpful for quick previews, webhook testing, and remote collaboration.

Does FlyEnv currently support this kind of functionality out of the box? If not, is there any recommended or planned integration for sharing sites publicly? It would be great to have a built-in or plug-and-play solution for this.

Thanks again for the great work!

![Image](https://github.com/user-attachments/assets/6e53cd4e-5299-496c-8f76-da438ebae22d)
```

---

#### 141. #289 - 关于SSL证书设置的疑问

- **状态**: closed
- **创建时间**: 2025-05-12
- **关闭时间**: 2025-05-12
- **作者**: @binscor
- **链接**: https://github.com/xpf0000/FlyEnv/issues/289

**描述**:

```
![Image](https://github.com/user-attachments/assets/6d9a8922-aba4-4689-aabb-8528ac43a1de)
我使windows系统。如图，这个证书的选择为什么只能选择文件夹，而不是具体的证书呢？一旦我手动选择目录的话，nginx就无法启动，会报证书相关的错误。目前我只能在nginx配置中手动修改具体的证书路径。我使刚接触flyenv这个工具，是我设置的方式不对还是什么其他的原因呢？
下图是我手动添加的证书内容，是没有问题的：
![Image](https://github.com/user-attachments/assets/8d70e716-864b-4609-a32d-050185daeeb5)
```

---

#### 142. #288 - 可以增加搜索引擎Meilisearch吗

- **状态**: closed
- **创建时间**: 2025-05-11
- **关闭时间**: 2025-05-14
- **作者**: @zzdboy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/288

**描述**:

```
https://github.com/meilisearch
```

---

#### 143. #287 - node无法自动设置环境变量

- **状态**: closed
- **创建时间**: 2025-05-11
- **关闭时间**: 2025-05-22
- **作者**: @jianxiaobai999
- **链接**: https://github.com/xpf0000/FlyEnv/issues/287

**描述**:

```
%FNV_HOME%和%NVM_HOME%会在path中重复出现很多次，安装了flyenv版本的nodejs在D:\Programs\PhpWebStudy-Data\app\nodejs\v24.0.1这个目录中，设置环境变量后，实际并没有出现在path或者其他地方，导致node -v , npm -v 等命令无法使用
```

---

#### 144. #286 - php 项目无法访问

- **状态**: closed
- **创建时间**: 2025-05-10
- **关闭时间**: 2025-07-10
- **作者**: @jiayang949
- **链接**: https://github.com/xpf0000/FlyEnv/issues/286

---

#### 145. #285 - PostgreSQL fails to start on Windows 10 via FlyEnv (v4.9.8) due to log sharing violation and invalid PID — works with manual `pg_ctl`

- **状态**: closed
- **创建时间**: 2025-05-09
- **关闭时间**: 2025-05-12
- **作者**: @lyrihkaesa
- **链接**: https://github.com/xpf0000/FlyEnv/issues/285

**描述**:

```
I'm encountering a persistent issue running PostgreSQL (versions 17.5, 16.9, and 15) on Windows 10 using FlyEnv v4.9.8. When starting via FlyEnv, PostgreSQL fails with a sharing violation error on `pg.log` and then shuts down due to an invalid `postmaster.pid` (PID 0).

However, when I start PostgreSQL manually using `pg_ctl.exe`, it starts and runs without any issues.

**Relevant logs (when started via FlyEnv):**

` ` `txt
LOG:  could not open file "./pg.log": sharing violation  
DETAIL:  Continuing to retry for 30 seconds.  
HINT:  You might have antivirus, backup, or similar software interfering with the database system.  
...  
LOG:  lock file "postmaster.pid" contains wrong PID: 0 instead of 16004  
LOG:  performing immediate shutdown because data directory lock file is invalid  
FATAL:  the database system is shutting down
` ` `

**Manual startup (this works):**

` ` `bash
./pg_ctl.exe -D "C:\Users\kaesa\AppData\Local\Programs\PhpWebStudy-Data\server\postgresql\postgresql17" ^
 -l "C:\Users\kaesa\AppData\Local\Programs\PhpWebStudy-Data\server\postgresql\postgresql17\pg.log" ^
 start > "C:\Users\kaesa\AppData\Local\Programs\PhpWebStudy-Data\server\postgresql\start.out.log" ^
 2>"C:\Users\kaesa\AppData\Local\Programs\PhpWebStudy-Data\server\postgresql\start.error.log"
` ` `

**Tested PostgreSQL Versions (all fail via FlyEnv):**

* 17.5
* 16.9
* 15.x

**Environment:**

* **OS:** Windows 10
* **FlyEnv version:** 4.9.8
* **Antivirus:** Windows Defender (tried disabling — issue persists)

**Steps to Reproduce:**

1. Install FlyEnv and setup PostgreSQL.
2. Attempt to start PostgreSQL via FlyEnv interface or bundled service manager.
3. PostgreSQL fails with sharing violation and invalid PID logs.

**Expected Behavior:**
PostgreSQL should start successfully and accept connections.

**Actual Behavior:**
Startup fails with log file sharing error and `postmaster.pid` containing incorrect PID (`0`), leading to immediate shutdown.

**Notes:**

* No other PostgreSQL instances are running.
* Behavior is consistent across multiple PostgreSQL versions.
* Manual start via `pg_ctl.exe` bypasses the problem, suggesting FlyEnv’s process manager or wrapper might be involved.

Would appreciate any investigation or workaround. Thanks!
```

---

#### 146. #284 - 加速 ghcr.io 的下载

- **状态**: closed
- **创建时间**: 2025-05-09
- **关闭时间**: 2025-07-10
- **作者**: @yangweijie
- **链接**: https://github.com/xpf0000/FlyEnv/issues/284

**描述**:

```
homebrew 可以chsrc 镜像到清华等地址加速，但是php二进制下载 走ghcr.io 很慢。

可否加个开关 让想走加速镜像地址的，开了就走，不开就走原有的。


![Image](https://github.com/user-attachments/assets/638971aa-2a40-443d-8266-ac7c15acf726)

这里的ghcr.io是github的docker镜像地址
加速方法：将ghcr.io替换为ghcr.nju.edu.cn。
试验过 php二进制秒下。


```

---

#### 147. #282 - postgresql installation error

- **状态**: closed
- **创建时间**: 2025-05-08
- **关闭时间**: 2025-05-09
- **作者**: @agungprygi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/282

**描述**:

```
![Image](https://github.com/user-attachments/assets/fd4bf4c7-f681-4424-a6cf-72bb7ef78131)
```

---

#### 148. #281 - How to install manually phpMyAdmin?

- **状态**: closed
- **创建时间**: 2025-05-08
- **关闭时间**: 2025-07-09
- **作者**: @COD3BREAK3R
- **链接**: https://github.com/xpf0000/FlyEnv/issues/281

**描述**:

```
I can't find a way to do this, and flyenv fails to connect to the Internet through my proxy.
```

---

#### 149. #280 - 是否有计划增加 EMQX 的支持

- **状态**: closed
- **创建时间**: 2025-05-08
- **关闭时间**: 2025-07-09
- **作者**: @ooknight
- **链接**: https://github.com/xpf0000/FlyEnv/issues/280

**描述**:

```
是否有计划增加 EMQX 的支持
```

---

#### 150. #274 - php-fpm not bundled with flyenv php install on windows

- **状态**: closed
- **创建时间**: 2025-05-06
- **关闭时间**: 2025-05-20
- **作者**: @wizardofthewell
- **链接**: https://github.com/xpf0000/FlyEnv/issues/274

**描述**:

```
Had to manually download php zip from php.net and overwrite bundled version. 
```

---

#### 151. #273 - Feature request: Add environment and project management for Rust language

- **状态**: closed
- **创建时间**: 2025-05-06
- **关闭时间**: 2025-05-14
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/273

**描述**:

```
It would be great if you could open up more Rust lang features
details at https://www.rust-lang.org/learn/get-started
I see potential for websites running Rust, it's great that you support more environments to run websites with Rust
```

---

#### 152. #272 - 提个建议

- **状态**: closed
- **创建时间**: 2025-05-05
- **关闭时间**: 2025-05-09
- **作者**: @dddbyte
- **链接**: https://github.com/xpf0000/FlyEnv/issues/272

**描述**:

```
现在软件已经改名为 flyenv 了，但是 windows 端安装路径还是 PhpWebStudy，还有默认的的软件不能卸载，软件包的位置默认可以设在软件目录类或者自定义路径，保持系统的整洁 
```

---

#### 153. #269 - Dependency check results (depcheck)

- **状态**: closed
- **创建时间**: 2025-05-02
- **关闭时间**: 2025-05-05
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/269

**描述**:

```
I am new to this tool `depcheck` and don't know yet how useful it is. But I thought I would share the report in case there are a bunch of orphan libraries that are redundant. If it's irrellevant, just close the topic.

**Master-branch**
` ` `
Unused dependencies
* dohdec
* serve
* tangerine

Unused devDependencies
* @babel/plugin-proposal-function-bind
* @babel/plugin-syntax-class-properties
* @babel/plugin-transform-class-properties
* @babel/plugin-transform-nullish-coalescing-operator
* @babel/plugin-transform-optional-chaining
* @babel/preset-typescript
* @babel/register
* @electron/notarize
* @electron/osx-sign
* @mdit-vue/plugin-component
* @shikijs/core
* @typescript-eslint/typescript-estree
* @vscode/sudo-prompt
* autoprefixer
* babel-eslint
* babel-loader
* cfonts
* chalk
* concurrently
* eslint-friendly-formatter
* json-to-go
* php-parser
* rollup-plugin-typescript2
* sass-loader
* tar
* terser-webpack-plugin
* vue-tsc

Missing dependencies
* vue-eslint-parser: .\.eslintrc.js
* @shared/utils: .\src\shared\sudo.ts
* auto-bind: .\src\shared\Tangerine.js
* get-stream: .\src\shared\Tangerine.js
* hostile: .\src\shared\Tangerine.js
* ipaddr.js: .\src\shared\Tangerine.js
* merge-options: .\src\shared\Tangerine.js
* p-map: .\src\shared\Tangerine.js
* p-timeout: .\src\shared\Tangerine.js
* p-wait-for: .\src\shared\Tangerine.js
* dns-packet: .\src\shared\Tangerine.js
* semver: .\src\shared\Tangerine.js
* @ungap/structured-clone: .\src\shared\Tangerine.js
* port-numbers: .\src\shared\Tangerine.js
* private-ip: .\src\shared\Tangerine.js
* crypto-random-string: .\src\shared\dohdec\doh.js
* got: .\src\shared\dohdec\doh.js
* nofilter: .\src\shared\dohdec\dot.js
* nanoid: .\src\render\util\markdown\plugins\highlight.ts
* picocolors: .\src\render\util\markdown\plugins\highlight.ts
* serve-handler: .\src\main\Application.ts
* glob: .\src\lang\check.js
* rollup: .\configs\vite.plugs.assets.ts
` ` `

**Win-branch**
` ` `
Unused dependencies
* serve

Unused devDependencies
* @babel/plugin-proposal-function-bind
* @babel/plugin-syntax-class-properties
* @babel/plugin-transform-class-properties
* @babel/plugin-transform-nullish-coalescing-operator
* @babel/plugin-transform-optional-chaining
* @babel/preset-typescript
* @babel/register
* @electron/notarize
* @electron/osx-sign
* @mdit-vue/plugin-component
* @shikijs/core
* @tailwindcss/postcss
* @typescript-eslint/typescript-estree
* autoprefixer
* babel-eslint
* babel-loader
* cfonts
* chalk
* concurrently
* eslint-friendly-formatter
* eslint-loader
* json-to-go
* php-parser
* rollup-plugin-typescript2
* sass-loader
* tar
* terser-webpack-plugin
* vue-tsc

Missing dependencies
* vue-eslint-parser: .\.eslintrc.js
* glob: .\src\shared\lang\check.js
* nanoid: .\src\render\util\markdown\plugins\highlight.ts
* picocolors: .\src\render\util\markdown\plugins\highlight.ts
* serve-handler: .\src\main\core\HttpServer.ts
* builder-util-runtime: .\configs\publish.ts
* rollup: .\configs\vite.plugs.assets.ts
` ` `
```

---

#### 154. #268 - NPM library updates

- **状态**: closed
- **创建时间**: 2025-05-02
- **关闭时间**: 2025-05-05
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/268

**描述**:

```
I did some attempting of updating npm libraries and came far. I think you might find this useful. Hoping it could save you a lot of time. 😊

**"master"-Branch patch versions**
` ` `
  "engines": {
    "node": ">=22.15.0"
  },
  "dependencies": {
    "@ayonli/jsext": "^0.9.80",
    "@electron/remote": "^2.1.2",
    "@lzwme/get-physical-address": "^1.1.0",
    "@regexper/render": "^1.0.0",
    "axios": "^1.7.9",
    "child-process-promise": "^2.2.1",
    "compare-versions": "^6.1.1",
    "compressing": "^1.10.1",
    "dns2": "^2.1.0",
    "electron-is": "^3.0.0",
    "electron-log": "^5.3.4",
    "electron-store": "^8.2.0",
    "electron-updater": "^6.3.9",
    "fast-xml-parser": "^4.5.3",
    "fs-extra": "^10.1.0",
    "hpagent": "^1.2.0",
    "ip": "^2.0.1",
    "lodash": "^4.17.21",
    "node-forge": "^1.3.1",
    "node-machine-id": "^1.1.12",
    "node-pty": "1.1.0-beta34",
    "node-rsa": "^1.1.1",
    "normalize.css": "^8.0.1",
    "npm-check-updates": "^17.1.18",
    "randexp": "^0.5.3",
    "serve": "^14.2.4",
    "tangerine": "^1.6.0",
    "undici": "^5.28.5",
    "vue": "^3.5.13",
    "vue-i18n": "^9.14.4",
    "vue-shadow-dom": "^4.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.26.10",
    "@babel/plugin-transform-class-properties": "^7.25.9",
    "@babel/plugin-proposal-function-bind": "^7.25.9",
    "@babel/plugin-transform-nullish-coalescing-operator": "^7.26.6",
    "@babel/plugin-transform-optional-chaining": "^7.25.9",
    "@babel/plugin-syntax-class-properties": "^7.12.13",
    "@babel/plugin-transform-runtime": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-typescript": "^7.26.0",
    "@babel/register": "^7.25.9",
    "@electron/notarize": "^2.5.0",
    "@electron/osx-sign": "^1.3.3",
    "@element-plus/icons-vue": "^2.3.1",
    "@iarna/toml": "^2.2.5",
    "@mdit-vue/plugin-component": "^2.1.4",
    "@mdit-vue/plugin-frontmatter": "^2.1.4",
    "@mdit-vue/plugin-headers": "^2.1.4",
    "@mdit-vue/plugin-sfc": "^2.1.4",
    "@mdit-vue/plugin-title": "^2.1.4",
    "@mdit-vue/plugin-toc": "^2.1.4",
    "@mdit-vue/shared": "^2.1.4",
    "@prettier/plugin-php": "^0.22.4",
    "@shikijs/core": "^3.0.0",
    "@shikijs/transformers": "^3.0.0",
    "@shikijs/types": "^3.0.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/child-process-promise": "^2.2.6",
    "@types/crypto-js": "^4.2.2",
    "@types/dns2": "^2.0.9",
    "@types/ip": "^1.1.3",
    "@types/markdown-it": "^14.1.2",
    "@types/markdown-it-attrs": "^4.1.3",
    "@types/markdown-it-container": "^2.0.10",
    "@types/markdown-it-emoji": "^3.0.1",
    "@types/node": "^16.18.126",
    "@types/node-rsa": "^1.1.4",
    "@types/qrcode": "^1.5.5",
    "@types/yamljs": "^0.2.34",
    "@typescript-eslint/eslint-plugin": "^7.18.0",
    "@typescript-eslint/parser": "^7.18.0",
    "@typescript-eslint/typescript-estree": "^7.18.0",
    "@vitejs/plugin-vue": "^2.3.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "@vueuse/core": "^11.3.0",
    "@xterm/addon-fit": "^0.10.0",
    "@xterm/xterm": "^5.5.0",
    "autoprefixer": "^10.4.21",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.4.1",
    "cfonts": "^2.10.1",
    "chalk": "^4.1.2",
    "concurrently": "^7.6.0",
    "cross-env": "^7.0.3",
    "crypto-js": "^4.2.0",
    "electron": "^31.7.7",
    "electron-builder": "^24.13.3",
    "electron-debug": "^3.2.0",
    "electron-devtools-installer": "^4.0.0",
    "element-plus": "^2.9.9",
    "esbuild": "^0.25.3",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-vue": "^9.32.0",
    "generate-schema": "^2.6.0",
    "gofmt.js": "^0.0.2",
    "js-base64": "^3.7.7",
    "json-to-go": "^1.0.1",
    "json-to-ts": "^1.7.0",
    "json5": "^2.2.3",
    "json_typegen_wasm": "^0.7.0",
    "localforage": "^1.10.0",
    "markdown-it": "^14.1.0",
    "markdown-it-anchor": "^9.2.0",
    "markdown-it-async": "^2.0.0",
    "markdown-it-attrs": "^4.3.1",
    "markdown-it-container": "^4.0.0",
    "markdown-it-emoji": "^3.0.0",
    "markdown-it-mathjax3": "^4.3.2",
    "md5": "^2.3.0",
    "mime-types": "^2.1.35",
    "moment": "^2.29.4",
    "monaco-editor": "^0.52.2",
    "php-parser": "^3.1.5",
    "pinia": "^3.0.2",
    "plist": "^3.1.0",
    "prettier": "^3.5.3",
    "qrcode": "^1.5.4",
    "rollup-plugin-typescript2": "^0.31.2",
    "sass": "^1.84.0",
    "sass-loader": "^12.6.0",
    "shiki": "^3.0.0",
    "svg-inline-loader": "^0.8.2",
    "tailwindcss": "^3.4.17",
    "tar": "^6.2.1",
    "terser": "^5.38.2",
    "terser-webpack-plugin": "^5.3.14",
    "tiny-emitter": "^2.1.0",
    "typescript": "^5.8.3",
    "vite": "^4.5.13",
    "vite-plugin-monaco-editor": "^1.1.0",
    "vite-plugin-wasm": "^3.4.1",
    "vue-router": "^4.5.1",
    "vue-tsc": "^2.2.10",
    "yamljs": "^0.3.0"
  }
` ` `

**"master"-Branch minor versions**
` ` `
  "engines": {
    "node": ">=22.15.0"
  },
  "dependencies": {
    "@ayonli/jsext": "^0.9.80",
    "@electron/remote": "^2.1.2",
    "@lzwme/get-physical-address": "^1.1.0",
    "@regexper/render": "^1.0.0",
    "axios": "^1.9.0",
    "child-process-promise": "^2.2.1",
    "compare-versions": "^6.1.1",
    "compressing": "^1.10.1",
    "dns2": "^2.1.0",
    "electron-is": "^3.0.0",
    "electron-log": "^5.3.4",
    "electron-store": "^8.2.0",
    "electron-updater": "^6.6.3",
    "fast-xml-parser": "^4.5.3",
    "fs-extra": "^10.1.0",
    "hpagent": "^1.2.0",
    "ip": "^2.0.1",
    "lodash": "^4.17.21",
    "node-forge": "^1.3.1",
    "node-machine-id": "^1.1.12",
    "node-pty": "1.1.0-beta34",
    "node-rsa": "^1.1.1",
    "normalize.css": "^8.0.1",
    "npm-check-updates": "^17.1.18",
    "randexp": "^0.5.3",
    "serve": "^14.2.4",
    "tangerine": "^1.6.0",
    "undici": "^5.29.0",
    "vue": "^3.5.13",
    "vue-i18n": "^9.14.4",
    "vue-shadow-dom": "^4.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.26.10",
    "@babel/plugin-transform-class-properties": "^7.25.9",
    "@babel/plugin-proposal-function-bind": "^7.25.9",
    "@babel/plugin-transform-nullish-coalescing-operator": "^7.26.6",
    "@babel/plugin-transform-optional-chaining": "^7.25.9",
    "@babel/plugin-syntax-class-properties": "^7.12.13",
    "@babel/plugin-transform-runtime": "^7.26.10",
    "@babel/preset-env": "^7.26.9",
    "@babel/preset-typescript": "^7.27.0",
    "@babel/register": "^7.25.9",
    "@electron/notarize": "^2.5.0",
    "@electron/osx-sign": "^1.3.3",
    "@element-plus/icons-vue": "^2.3.1",
    "@iarna/toml": "^2.2.5",
    "@mdit-vue/plugin-component": "^2.1.4",
    "@mdit-vue/plugin-frontmatter": "^2.1.4",
    "@mdit-vue/plugin-headers": "^2.1.4",
    "@mdit-vue/plugin-sfc": "^2.1.4",
    "@mdit-vue/plugin-title": "^2.1.4",
    "@mdit-vue/plugin-toc": "^2.1.4",
    "@mdit-vue/shared": "^2.1.4",
    "@prettier/plugin-php": "^0.22.4",
    "@shikijs/core": "^3.3.0",
    "@shikijs/transformers": "^3.3.0",
    "@shikijs/types": "^3.3.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/child-process-promise": "^2.2.6",
    "@types/crypto-js": "^4.2.2",
    "@types/dns2": "^2.0.9",
    "@types/ip": "^1.1.3",
    "@types/markdown-it": "^14.1.2",
    "@types/markdown-it-attrs": "^4.1.3",
    "@types/markdown-it-container": "^2.0.10",
    "@types/markdown-it-emoji": "^3.0.1",
    "@types/node": "^16.18.126",
    "@types/node-rsa": "^1.1.4",
    "@types/qrcode": "^1.5.5",
    "@types/yamljs": "^0.2.34",
    "@typescript-eslint/eslint-plugin": "^7.18.0",
    "@typescript-eslint/parser": "^7.18.0",
    "@typescript-eslint/typescript-estree": "^7.18.0",
    "@vitejs/plugin-vue": "^2.3.4",
    "@vitejs/plugin-vue-jsx": "^3.1.0",
    "@vueuse/core": "^11.3.0",
    "@xterm/addon-fit": "^0.10.0",
    "@xterm/xterm": "^5.5.0",
    "autoprefixer": "^10.4.21",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.4.1",
    "cfonts": "^2.10.1",
    "chalk": "^4.1.2",
    "concurrently": "^7.6.0",
    "cross-env": "^7.0.3",
    "crypto-js": "^4.2.0",
    "electron": "^31.7.7",
    "electron-builder": "^24.13.3",
    "electron-debug": "^3.2.0",
    "electron-devtools-installer": "^4.0.0",
    "element-plus": "^2.9.9",
    "esbuild": "^0.25.3",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-vue": "^9.33.0",
    "generate-schema": "^2.6.0",
    "gofmt.js": "^0.0.2",
    "js-base64": "^3.7.7",
    "json-to-go": "^1.0.1",
    "json-to-ts": "^1.7.0",
    "json5": "^2.2.3",
    "json_typegen_wasm": "^0.7.0",
    "localforage": "^1.10.0",
    "markdown-it": "^14.1.0",
    "markdown-it-anchor": "^9.2.0",
    "markdown-it-async": "^2.2.0",
    "markdown-it-attrs": "^4.3.1",
    "markdown-it-container": "^4.0.0",
    "markdown-it-emoji": "^3.0.0",
    "markdown-it-mathjax3": "^4.3.2",
    "md5": "^2.3.0",
    "mime-types": "^2.1.35",
    "moment": "^2.30.1",
    "monaco-editor": "^0.52.2",
    "php-parser": "^3.2.3",
    "pinia": "^3.0.2",
    "plist": "^3.1.0",
    "prettier": "^3.5.3",
    "qrcode": "^1.5.4",
    "rollup-plugin-typescript2": "^0.36.0",
    "sass": "^1.87.0",
    "sass-loader": "^12.6.0",
    "shiki": "^3.3.0",
    "svg-inline-loader": "^0.8.2",
    "tailwindcss": "^3.4.17",
    "tar": "^6.2.1",
    "terser": "^5.39.0",
    "terser-webpack-plugin": "^5.3.14",
    "tiny-emitter": "^2.1.0",
    "typescript": "^5.8.3",
    "vite": "^4.5.14",
    "vite-plugin-monaco-editor": "^1.1.0",
    "vite-plugin-wasm": "^3.4.1",
    "vue-router": "^4.5.1",
    "vue-tsc": "^2.2.10",
    "yamljs": "^0.3.0"
  }
` ` `

**"master"-Branch major versions**
` ` `
  "engines": {
    "node": ">=22.15.0"
  },
  "dependencies": {
    "@ayonli/jsext": "^1.6.0",
    "@electron/remote": "^2.1.2",
    "@lzwme/get-physical-address": "^1.1.0",
    "axios": "^1.9.0",
    "child-process-promise": "^2.2.1",
    "compare-versions": "^6.1.1",
    "compressing": "^1.10.1",
    "dns2": "^2.1.0",
    "electron-is": "^3.0.0",
    "electron-log": "^5.3.4",
    "electron-store": "^10.0.0",
    "electron-updater": "^6.6.3",
    "fast-xml-parser": "^5.2.1",
    "fs-extra": "^11.3.0",
    "hpagent": "^1.2.0",
    "ip": "^2.0.1",
    "lodash": "^4.17.21",
    "node-forge": "^1.3.1",
    "node-machine-id": "^1.1.12",
    "node-pty": "1.1.0-beta34",
    "node-rsa": "^1.1.1",
    "normalize.css": "^8.0.1",
    "npm-check-updates": "^18.0.1",
    "randexp": "^0.5.3",
    "serve": "^14.2.4",
    "tangerine": "^1.6.0",
    "undici": "^7.8.0",
    "vue": "^3.5.13",
    "vue-i18n": "^10.0.7",
    "vue-shadow-dom": "^4.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.27.1",
    "@babel/plugin-proposal-function-bind": "^7.27.1",
    "@babel/plugin-syntax-class-properties": "^7.12.13",
    "@babel/plugin-transform-class-properties": "^7.27.1",
    "@babel/plugin-transform-nullish-coalescing-operator": "^7.27.1",
    "@babel/plugin-transform-optional-chaining": "^7.27.1",
    "@babel/plugin-transform-runtime": "^7.27.1",
    "@babel/preset-env": "^7.27.1",
    "@babel/preset-typescript": "^7.27.1",
    "@babel/register": "^7.27.1",
    "@electron/notarize": "^3.0.1",
    "@electron/osx-sign": "^2.0.0",
    "@element-plus/icons-vue": "^2.3.1",
    "@iarna/toml": "^2.2.5",
    "@mdit-vue/plugin-component": "^2.1.4",
    "@mdit-vue/plugin-frontmatter": "^2.1.4",
    "@mdit-vue/plugin-headers": "^2.1.4",
    "@mdit-vue/plugin-sfc": "^2.1.4",
    "@mdit-vue/plugin-title": "^2.1.4",
    "@mdit-vue/plugin-toc": "^2.1.4",
    "@mdit-vue/shared": "^2.1.4",
    "@prettier/plugin-php": "^0.22.4",
    "@regexper/render": "^1.0.0",
    "@shikijs/core": "^3.3.0",
    "@shikijs/transformers": "^3.3.0",
    "@shikijs/types": "^3.3.0",
    "@tailwindcss/postcss": "^4.1.5",
    "@tailwindcss/typography": "^0.5.16",
    "@types/child-process-promise": "^2.2.6",
    "@types/crypto-js": "^4.2.2",
    "@types/dns2": "^2.0.9",
    "@types/ip": "^1.1.3",
    "@types/markdown-it": "^14.1.2",
    "@types/markdown-it-attrs": "^4.1.3",
    "@types/markdown-it-container": "^2.0.10",
    "@types/markdown-it-emoji": "^3.0.1",
    "@types/node": "^22.15.3",
    "@types/node-rsa": "^1.1.4",
    "@types/qrcode": "^1.5.5",
    "@types/yamljs": "^0.2.34",
    "@typescript-eslint/eslint-plugin": "^8.31.1",
    "@typescript-eslint/parser": "^8.31.1",
    "@typescript-eslint/typescript-estree": "^8.31.1",
    "@vitejs/plugin-vue": "^3.2.0",
    "@vitejs/plugin-vue-jsx": "^4.1.2",
    "@vueuse/core": "^12.8.2",
    "@xterm/addon-fit": "^0.10.0",
    "@xterm/xterm": "^5.5.0",
    "autoprefixer": "^10.4.21",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^9.2.1",
    "cfonts": "^3.3.0",
    "chalk": "^5.4.1",
    "concurrently": "^9.1.2",
    "cross-env": "^7.0.3",
    "crypto-js": "^4.2.0",
    "electron": "^31.7.7",
    "electron-builder": "^24.13.3",
    "electron-debug": "^4.1.0",
    "electron-devtools-installer": "^4.0.0",
    "element-plus": "^2.9.9",
    "esbuild": "^0.25.3",
    "eslint": "^9.25.1",
    "eslint-config-prettier": "^10.1.2",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-vue": "^10.1.0",
    "generate-schema": "^2.6.0",
    "gofmt.js": "^0.0.2",
    "js-base64": "^3.7.7",
    "json-to-go": "^1.0.1",
    "json-to-ts": "^2.1.0",
    "json5": "^2.2.3",
    "json_typegen_wasm": "^0.7.0",
    "localforage": "^1.10.0",
    "markdown-it": "^14.1.0",
    "markdown-it-anchor": "^9.2.0",
    "markdown-it-async": "^2.2.0",
    "markdown-it-attrs": "^4.3.1",
    "markdown-it-container": "^4.0.0",
    "markdown-it-emoji": "^3.0.0",
    "markdown-it-mathjax3": "^4.3.2",
    "md5": "^2.3.0",
    "mime-types": "^3.0.1",
    "moment": "^2.30.1",
    "monaco-editor": "^0.52.2",
    "php-parser": "^3.2.3",
    "pinia": "^3.0.2",
    "plist": "^3.1.0",
    "prettier": "^3.5.3",
    "qrcode": "^1.5.4",
    "rollup-plugin-typescript2": "^0.36.0",
    "sass": "^1.87.0",
    "sass-loader": "^16.0.5",
    "shiki": "^3.3.0",
    "svg-inline-loader": "^0.8.2",
    "tailwindcss": "^4.1.5",
    "tar": "^7.4.3",
    "terser": "^5.39.0",
    "terser-webpack-plugin": "^5.3.14",
    "tiny-emitter": "^2.1.0",
    "typescript": "^5.8.3",
    "vite": "^5.4.19",
    "vite-plugin-monaco-editor": "^1.1.0",
    "vite-plugin-wasm": "^3.4.1",
    "vue-router": "^4.5.1",
    "vue-tsc": "^2.2.10",
    "yamljs": "^0.3.0"
  }
` ` `

**"Win"-Branch major versions**
` ` `
  "engines": {
    "node": ">=22.15.0"
  },
  "dependencies": {
    "7zip-min-electron": "^1.4.4",
    "@electron/remote": "^2.1.2",
    "@lzwme/get-physical-address": "^1.1.0",
    "axios": "^1.9.0",
    "chardet": "^2.1.0",
    "child-process-promise": "^2.2.1",
    "compare-versions": "^6.1.1",
    "dns2": "^2.1.0",
    "dohdec": "^5.0.3",
    "electron-is": "^3.0.0",
    "electron-log": "^5.3.4",
    "electron-store": "^10.0.0",
    "electron-updater": "^6.6.3",
    "fast-xml-parser": "^5.2.1",
    "fs-extra": "^11.3.0",
    "ftp-srv": "^4.6.3",
    "hpagent": "^1.2.0",
    "iconv-lite": "^0.6.3",
    "ip": "^2.0.1",
    "lodash": "^4.17.21",
    "node-forge": "^1.3.1",
    "node-machine-id": "^1.1.12",
    "node-pty": "1.1.0-beta34",
    "node-rsa": "^1.1.1",
    "normalize.css": "^8.0.1",
    "npm-check-updates": "^18.0.1",
    "serve": "^14.2.4",
    "tangerine": "^1.6.0",
    "undici": "^7.8.0",
    "vue": "^3.5.13",
    "vue-i18n": "^10.0.7"
  },
  "devDependencies": {
    "@babel/core": "^7.27.1",
    "@babel/plugin-proposal-function-bind": "^7.27.1",
    "@babel/plugin-syntax-class-properties": "^7.12.13",
    "@babel/plugin-transform-class-properties": "^7.27.1",
    "@babel/plugin-transform-nullish-coalescing-operator": "^7.27.1",
    "@babel/plugin-transform-optional-chaining": "^7.27.1",
    "@babel/plugin-transform-runtime": "^7.27.1",
    "@babel/preset-env": "^7.27.1",
    "@babel/preset-typescript": "^7.27.1",
    "@babel/register": "^7.27.1",
    "@electron/notarize": "^3.0.1",
    "@electron/osx-sign": "^2.0.0",
    "@element-plus/icons-vue": "^2.3.1",
    "@iarna/toml": "^2.2.5",
    "@mdit-vue/plugin-component": "^2.1.4",
    "@mdit-vue/plugin-frontmatter": "^2.1.4",
    "@mdit-vue/plugin-headers": "^2.1.4",
    "@mdit-vue/plugin-sfc": "^2.1.4",
    "@mdit-vue/plugin-title": "^2.1.4",
    "@mdit-vue/plugin-toc": "^2.1.4",
    "@mdit-vue/shared": "^2.1.4",
    "@prettier/plugin-php": "^0.22.4",
    "@regexper/render": "^1.0.0",
    "@shikijs/core": "^3.3.0",
    "@shikijs/transformers": "^3.3.0",
    "@shikijs/types": "^3.3.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/dns2": "^2.0.9",
    "@types/ip": "^1.1.3",
    "@types/markdown-it": "^14.1.2",
    "@types/markdown-it-attrs": "^4.1.3",
    "@types/markdown-it-container": "^2.0.10",
    "@types/markdown-it-emoji": "^3.0.1",
    "@types/node": "^22.15.3",
    "@types/node-rsa": "^1.1.4",
    "@types/yamljs": "^0.2.34",
    "@typescript-eslint/eslint-plugin": "^8.31.1",
    "@typescript-eslint/parser": "^8.31.1",
    "@typescript-eslint/typescript-estree": "^8.31.1",
    "@vitejs/plugin-vue": "^3.2.0",
    "@vitejs/plugin-vue-jsx": "^4.1.2",
    "@vscode/sudo-prompt": "^9.3.1",
    "@xterm/addon-fit": "^0.10.0",
    "@xterm/xterm": "^5.5.0",
    "autoprefixer": "^10.4.21",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^9.2.1",
    "cfonts": "^3.3.0",
    "chalk": "^5.4.1",
    "concurrently": "^9.1.2",
    "cross-env": "^7.0.3",
    "crypto-js": "^4.2.0",
    "electron": "^31.7.7",
    "electron-builder": "^24.13.3",
    "electron-debug": "^4.1.0",
    "electron-devtools-installer": "^4.0.0",
    "element-plus": "^2.9.9",
    "esbuild": "^0.25.3",
    "eslint": "^9.25.1",
    "eslint-config-prettier": "^10.1.2",
    "eslint-friendly-formatter": "^4.0.1",
    "eslint-plugin-prettier": "^5.2.6",
    "eslint-plugin-vue": "^10.1.0",
    "generate-schema": "^2.6.0",
    "gofmt.js": "^0.0.2",
    "iconv-lite": "^0.6.3",
    "js-base64": "^3.7.7",
    "json-to-go": "^1.0.1",
    "json-to-ts": "^2.1.0",
    "json5": "^2.2.3",
    "json_typegen_wasm": "^0.7.0",
    "localforage": "^1.10.0",
    "markdown-it": "^14.1.0",
    "markdown-it-anchor": "^9.2.0",
    "markdown-it-async": "^2.2.0",
    "markdown-it-attrs": "^4.3.1",
    "markdown-it-container": "^4.0.0",
    "markdown-it-emoji": "^3.0.0",
    "markdown-it-mathjax3": "^4.3.2",
    "md5": "^2.3.0",
    "mime-types": "^3.0.1",
    "moment": "^2.30.1",
    "monaco-editor": "^0.52.2",
    "php-parser": "^3.2.3",
    "pinia": "^3.0.2",
    "plist": "^3.1.0",
    "prettier": "^3.5.3",
    "qrcode": "^1.5.4",
    "randexp": "^0.5.3",
    "rollup-plugin-typescript2": "^0.31.2",
    "sass": "^1.87.0",
    "sass-loader": "^16.0.5",
    "shiki": "^3.3.0",
    "svg-inline-loader": "^0.8.2",
    "tailwindcss": "^4.1.5",
    "tar": "^7.4.3",
    "terser": "^5.39.0",
    "terser-webpack-plugin": "^5.3.14",
    "tiny-emitter": "^2.1.0",
    "typescript": "^5.8.3",
    "vite": "^5.4.19",
    "vite-plugin-monaco-editor": "^1.1.0",
    "vite-plugin-wasm": "^3.4.1",
    "vue-router": "^4.5.1",
    "vue-shadow-dom": "^4.2.0",
    "vue-tsc": "^2.2.10",
    "yamljs": "^0.3.0"
  }
` ` `


```

---

#### 155. #267 - php缺少pdo_pgsql扩展

- **状态**: closed
- **创建时间**: 2025-05-02
- **关闭时间**: 2025-07-28
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/267

**描述**:

```
php缺少pdo_pgsql扩展，在extensions列表里找不到，无法安装
```

---

#### 156. #265 - linux 4.9 ?

- **状态**: closed
- **创建时间**: 2025-04-29
- **关闭时间**: 2025-07-28
- **作者**: @NemStudio18
- **链接**: https://github.com/xpf0000/FlyEnv/issues/265

**描述**:

```
The Linux version is stuck at 4.0! 

Do we have any hope of seeing version 4.9 arrive at the Penguins?

Thx for this job !
```

---

#### 157. #264 - Set openssl.cafile for default PHP.ini

- **状态**: closed
- **创建时间**: 2025-04-29
- **关闭时间**: 2025-05-06
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/264

**描述**:

```
New PHP always default to a missing openssl.cafile. We have the CA file in PhpWebStudy-Data/server/CA/cacert.pem. So with this ticket I am proposing it gets added to the default php.ini.

**Why do we need this?**
Without it PHP can't make remote connections to access secure https:// domains.

**Yeah but other AMP stacks have this issue too, right?**
Right. And that's why we use FlyEnv. It's just less of the hassle, and more of the awesome ;)

![Image](https://github.com/user-attachments/assets/bb0db856-eccf-4329-abd9-54507bd9031f)
```

---

#### 158. #261 - 屏幕扩展问题

- **状态**: closed
- **创建时间**: 2025-04-25
- **关闭时间**: 2025-04-26
- **作者**: @leafmaple
- **链接**: https://github.com/xpf0000/FlyEnv/issues/261

**描述**:

```
笔记本扩展屏幕后，如果程序是在扩展屏幕上展示，关闭扩展后， 不能显示到当前屏幕，点击应用显示主界面，会有动画效果显示出屏幕了
```

---

#### 159. #260 - 无法自定义Nginx 伪静态

- **状态**: closed
- **创建时间**: 2025-04-25
- **关闭时间**: 2025-05-06
- **作者**: @leafmaple
- **链接**: https://github.com/xpf0000/FlyEnv/issues/260

**描述**:

```
创建网站的时候只能使用定义好的模板，自定义的规则无法写入
```

---

#### 160. #259 - Apache Failed to Start on Latest Version

- **状态**: closed
- **创建时间**: 2025-04-25
- **关闭时间**: 2025-04-25
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/259

**描述**:

```
Just updated, got this error while starting. 

ChildProcessError: Command failed: cd "/usr/sbin" && ./apachectl -f "/Users/xcrap/Library/PhpWebStudy/server/apache/common/conf/476bb4e4564853caa24284be38a93a41.conf" -c "PidFile "/Users/xcrap/Library/PhpWebStudy/server/apache/httpd.pid"" -c "CustomLog "/Users/xcrap/Library/PhpWebStudy/server/apache/common/logs/access_log" common" -k start
AH00557: httpd: apr_sockaddr_info_get() failed for MacBookPro
AH00558: httpd: Could not reliably determine the server's fully qualified domain name, using 127.0.0.1. Set the 'ServerName' directive globally to suppress this message
[Fri Apr 25 00:28:14.426025 2025] [core:emerg] [pid 23131] (2)No such file or directory: AH00023: Couldn't create the mpm-accept mutex (file /private/var/run/mpm-accept-0.23131)
(2)No such file or directory: could not create accept mutex
AH00015: Unable to open logs
 `cd "/usr/sbin" && ./apachectl -f "/Users/xcrap/Library/PhpWebStudy/server/apache/common/conf/476bb4e4564853caa24284be38a93a41.conf" -c "PidFile "/Users/xcrap/Library/PhpWebStudy/server/apache/httpd.pid"" -c "CustomLog "/Users/xcrap/Library/PhpWebStudy/server/apache/common/logs/access_log" common" -k start` (exited with error code 1)
```

---

#### 161. #258 - Add support for URL Query Params to Cross-Serializer

- **状态**: closed
- **创建时间**: 2025-04-23
- **关闭时间**: 2025-04-26
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/258

**描述**:

```
This tool is soo very useful. 👍

I would like to see URL query params supported.
![Image](https://github.com/user-attachments/assets/57f3dfb7-c68e-41c1-b6ba-68c53d41f63e)

I had a case today when I needed to parse `application/x-www-form-urlencoded` HTTP POST data.
```

---

#### 162. #257 - windows版本安装RabbitMQ后无法启动

- **状态**: closed
- **创建时间**: 2025-04-23
- **关闭时间**: 2025-04-23
- **作者**: @timelessonly
- **链接**: https://github.com/xpf0000/FlyEnv/issues/257

**描述**:

```
未找到epmd进程。请重新设置erlang环境变量

![Image](https://github.com/user-attachments/assets/1e23c16a-b213-4d99-a067-abdb353530a6)
```

---

#### 163. #255 - PHP7.4加载不了redis扩展

- **状态**: closed
- **创建时间**: 2025-04-22
- **关闭时间**: 2025-05-11
- **作者**: @ErikYee
- **链接**: https://github.com/xpf0000/FlyEnv/issues/255

**描述**:

```
PHP7.4加载不了redis扩展，即使已经打钩了也没加载
```

---

#### 164. #254 - Error installing PHP and MySQL

- **状态**: closed
- **创建时间**: 2025-04-16
- **关闭时间**: 2025-05-09
- **作者**: @AutoOrganize
- **链接**: https://github.com/xpf0000/FlyEnv/issues/254

**描述**:

```
Error installing PHP and MySQL

I installed FlyEnv on a new PC and when I install PHP and MySQL I get these errors and they won't start.

![Image](https://github.com/user-attachments/assets/cbbffaa7-8bff-4e49-8b62-8b6b90b7225a)

![Image](https://github.com/user-attachments/assets/79a0376f-f9f5-4936-8bbc-b1a4678efff2)
```

---

#### 165. #253 - Isolating PHP, Node or other CLI per host directory

- **状态**: closed
- **创建时间**: 2025-04-16
- **关闭时间**: 2025-05-20
- **作者**: @gdarko
- **链接**: https://github.com/xpf0000/FlyEnv/issues/253

**描述**:

```
Hello xpf0000,

I wanted to say thank you for the excellent work on this project. It's really nice!

I have been thinking that isolating the PHP/Node/NPM cli per host directory will make sense because there may be projects that use different  versions. I was wondering, how doable is creating a proxy scripts for those binaries and add the proxy script to the PATH. Then, once called, find the version per host (directory) and use it.

This example is with having `.php-version` file that holds the version in specific folder, but the version can be pulled from the database based on the host as well.

### Windows CMD

`php.cmd`

` ` `cmd
@echo off
setlocal enabledelayedexpansion

set "dir=%cd%"
:find_version
if exist "!dir!\.php-version" (
    for /f "usebackq delims=" %%v in ("!dir!\.php-version") do (
        set "version=%%v"
    )
    goto found
)
cd ..
if "!cd!"=="%cd%" goto notfound
set "dir=%cd%"
goto find_version

:found
set "PHP_EXE=C:\php\%version%\php.exe"
if exist "!PHP_EXE!" (
    "!PHP_EXE!" %*
    goto end
) else (
    echo PHP version !version! not found in C:\php\!version!
    exit /b 1
)

:notfound
echo No .php-version file found in current or parent folders.
exit /b 1

:end
endlocal
` ` `

### Linux/OSx Bash script

`php.sh`

` ` `bash
#!/usr/bin/env bash

DIR="$PWD"

while [[ "$DIR" != "/" ]]; do
  if [[ -f "$DIR/.php-version" ]]; then
    PHP_VERSION=$(<"$DIR/.php-version")
    break
  fi
  DIR=$(dirname "$DIR")
done

if [[ -z "$PHP_VERSION" ]]; then
  echo "No .php-version file found."
  exit 1
fi

PHP_BIN="/opt/php/${PHP_VERSION}/bin/php"

if [[ ! -x "$PHP_BIN" ]]; then
  echo "PHP version $PHP_VERSION not found at $PHP_BIN"
  exit 1
fi

exec "$PHP_BIN" "$@"
` ` `

This is just an idea, not thoroughly tested, i though something like this will be useful.

Best Regards,
Darko



```

---

#### 166. #252 - Missing icons in macos menu bar panel

- **状态**: closed
- **创建时间**: 2025-04-15
- **关闭时间**: 2025-04-16
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/252

**描述**:

```
After the last update v4.9.3 there are no icons on this panel

<img width="371" alt="Image" src="https://github.com/user-attachments/assets/4b70231b-06f7-4e82-96e5-36efa1233008" />

```

---

#### 167. #251 - Data storage directory on Windows to industry standard

- **状态**: closed
- **创建时间**: 2025-04-14
- **关闭时间**: 2025-04-19
- **作者**: @timint
- **链接**: https://github.com/xpf0000/FlyEnv/issues/251

**描述**:

```
Hi, in a future major version release the storage path on Windows should be adjusted to industry standard.

Instead of:
`C:\Program Files\PhpWebStudy-Data\`
Or more accurately:
`%ProgramFiles%\PhpWebStudy-Data\`

Should it be `%ProgramData%\FlyEnv\`?

%ProgramData% is local to the machine, regardless of who is using it.
If you need storage on a per user basis it's %appdata% (Roaming use) or %localappdata% (Non-roaming use).

I still love this app ❤️
```

---

#### 168. #250 - Nodejs versions not loading for NodeJS app

- **状态**: closed
- **创建时间**: 2025-04-13
- **关闭时间**: 2025-08-28
- **作者**: @agent306
- **链接**: https://github.com/xpf0000/FlyEnv/issues/250

**描述**:

```
Version 4.9.2
Platform: Windows 11

I can see the NodeJS versions installed:
![Image](https://github.com/user-attachments/assets/34df076f-a580-4c55-a6da-4d2333b8041f)

But when trying to register a NodeJS app, it doesn't show up:
![Image](https://github.com/user-attachments/assets/4da6f7e5-d6e8-4a91-bebe-bd7bf975655c)


```

---

#### 169. #249 - 捐赠了好几天了还没审核

- **状态**: closed
- **创建时间**: 2025-04-10
- **关闭时间**: 2025-04-10
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/249

**描述**:

```
订单：8022120186587622806
```

---

#### 170. #248 - Can't connect without password & run MariaDB.

- **状态**: closed
- **创建时间**: 2025-04-09
- **关闭时间**: 2025-07-11
- **作者**: @TuruSakthi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/248

**描述**:

```
FlyEnv Version: 4.9.2
MariaDB: 11.8.1

At first, it was working. I tried to update the configuration because I received this warning: (conn=7) Access denied for user 'root'@'localhost' (using password: NO).
I haven’t set or updated the password, but the warning appeared. I'm trying to connect to MariaDB using DBeaver. I've never encountered this warning before, even though I’ve installed MariaDB locally many times. How can I fix this?

So far, I’ve added the following line, although I’m not sure if it’s necessary:
` ` `
[mariadbd]
skip-grant-tables
` ` `

Later, I clicked **Load Default File** to reset the configuration file, and then this error showed up.
![Image](https://github.com/user-attachments/assets/4aedf8d1-b0fb-4849-847b-d3d98c217ddc)
```

---

#### 171. #247 - 静态编译的 php-cli 和 php-fpm ，以及nginx 二进制可执行文件

- **状态**: closed
- **创建时间**: 2025-04-09
- **关闭时间**: 2025-04-17
- **作者**: @jingjingxyk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/247

**描述**:

```
php-cli 和 php-fpm : https://github.com/swoole/build-static-php/releases/
nginx : https://github.com/jingjingxyk/build-static-nginx/releases/
```

---

#### 172. #246 - windows版本mysql问题

- **状态**: closed
- **创建时间**: 2025-04-08
- **关闭时间**: 2025-05-06
- **作者**: @feitxue
- **链接**: https://github.com/xpf0000/FlyEnv/issues/246

**描述**:

```
win11 ltsc  64位 新安装的系统
下载官网安装包后安装
mysql自带有8.0.36
无法运行
安装最新的8.0.41也报错无法运行

```

---

#### 173. #245 - mysql 可以启动多个版本吗

- **状态**: closed
- **创建时间**: 2025-04-06
- **关闭时间**: 2025-05-06
- **作者**: @flowerwOw0316
- **链接**: https://github.com/xpf0000/FlyEnv/issues/245

**描述**:

```
比如5.7和8.4的
```

---

#### 174. #244 - 可否增加一个版本升级功能？

- **状态**: closed
- **创建时间**: 2025-04-05
- **关闭时间**: 2025-11-16
- **作者**: @maliang
- **链接**: https://github.com/xpf0000/FlyEnv/issues/244

**描述**:

```
希望增加个版本升级功能，比如node或者python或者PHP，出了新版本，卸载再重新安装，配置还要重新配，如果能升级直接继承配置就好了。升级只升小版本就行，比如8.2.16升级到8.2.28
```

---

#### 175. #233 - 默认的http://phpmyadmin.phpwebstudy.test打不开phpMyAdmin

- **状态**: closed
- **创建时间**: 2025-03-28
- **关闭时间**: 2025-08-08
- **作者**: @f3liiix
- **链接**: https://github.com/xpf0000/FlyEnv/issues/233

**描述**:

```
只能使用 http://localhost 打开
```

---

#### 176. #232 - 请问clash打开时报502的问题怎么解决

- **状态**: closed
- **创建时间**: 2025-03-28
- **关闭时间**: 2025-04-10
- **作者**: @bigtailfish
- **链接**: https://github.com/xpf0000/FlyEnv/issues/232

**描述**:

```
关掉clash的系统代理就ok，打开就报502，请问有什么好方法解决？
我尝试在yaml里写上
  - DOMAIN-SUFFIX,localhost,DIRECT
  - DOMAIN-SUFFIX,127.0.0.1,DIRECT
  - DOMAIN-SUFFIX,.test,DIRECT
都不成功
请教一下，如何解决这个问题，谢谢！
```

---

#### 177. #231 - DNS Server error on windows

- **状态**: closed
- **创建时间**: 2025-03-28
- **关闭时间**: 2025-07-09
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/231

**描述**:

```
i think DNS Server function can not work well on windows
i am using windows 11 and i need other users to verify on other windows operating system
however the guide is noting that running `dig` command is a command on Linux so it is not available on windows
```

---

#### 178. #230 - Error running PHPMyAdmin on PHP 8.4.5

- **状态**: closed
- **创建时间**: 2025-03-28
- **关闭时间**: 2025-05-11
- **作者**: @TanNhatCMS
- **链接**: https://github.com/xpf0000/FlyEnv/issues/230

**描述**:

```
with default PHPmyAdmin installation option is now version 5.2.2 but can not launch the interface
I had to go to [https://www.phpmyadmin.net/downloads/](https://www.phpmyadmin.net/downloads/) download phpMyAdmin version 6.0+snapshot [https://files.phpmyadmin.net/snapshots/phpMyAdmin-6.0+snapshot-all-languages.zip](https://files.phpmyadmin.net/snapshots/phpMyAdmin-6.0+snapshot-all-languages.zip) then install manually and it works fine.
I think it would be better if the PHPMyAdmin installation menu would have a version option that matches the current PHP version
```

---

#### 179. #228 - PHP安装失败

- **状态**: closed
- **创建时间**: 2025-03-27
- **关闭时间**: 2025-04-15
- **作者**: @leafmaple
- **链接**: https://github.com/xpf0000/FlyEnv/issues/228

**描述**:

```
软件刚开始安装在C盘，卸载重装后，安装在D盘，但是安装php版本的时候一直往C盘的Program Files\PhpWebStudy-Data\server\php目录去下载解压，因为C盘没有这个目录，导致安装失败

app log 如下

[error]1743080544984:下载失败, 安装php-8.1.32失败, 原因: Error: ENOENT: no such file or directory, open 'C:\Program Files\PhpWebStudy-Data\server\cache\php-8.1.32.zip'
```

---

#### 180. #227 - 关闭许可证和新设备激活问题

- **状态**: closed
- **创建时间**: 2025-03-27
- **关闭时间**: 2025-03-31
- **作者**: @leafmaple
- **链接**: https://github.com/xpf0000/FlyEnv/issues/227

**描述**:

```
1. 捐赠后激活了公司工作使用的电脑，想问下，以后是否可以关闭该电脑的许可证，重新激活其他设备？
2. 一个许可证最多激活几台设备？
```

---

#### 181. #226 - Mysql进程无法关闭

- **状态**: closed
- **创建时间**: 2025-03-27
- **关闭时间**: 2025-05-06
- **作者**: @jademo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/226

**描述**:

```
应用界面停止Mysql后，后台进程没有结束，端口仍被占用
FlyEnv Version 4.9.1

![Image](https://github.com/user-attachments/assets/39d557d4-c2c4-4524-ad06-05b7aad4077f)

![Image](https://github.com/user-attachments/assets/0ae19aeb-fd75-4f0e-bdc4-03eb3fe01b9a)
```

---

#### 182. #220 - 在ai聊天框中添加停止按钮

- **状态**: closed
- **创建时间**: 2025-03-17
- **关闭时间**: 2025-07-09
- **作者**: @pivotf
- **链接**: https://github.com/xpf0000/FlyEnv/issues/220

---

#### 183. #219 - How to contribute to adding other languages?

- **状态**: closed
- **创建时间**: 2025-03-16
- **关闭时间**: 2025-07-09
- **作者**: @alfatihart
- **链接**: https://github.com/xpf0000/FlyEnv/issues/219

**描述**:

```
I want to add my country language translation option.
```

---

#### 184. #218 - 无法自动更新

- **状态**: closed
- **创建时间**: 2025-03-14
- **关闭时间**: 2025-03-28
- **作者**: @lysowc
- **链接**: https://github.com/xpf0000/FlyEnv/issues/218

**描述**:

```
![Image](https://github.com/user-attachments/assets/31620050-2e4a-4abe-b8f4-680aab912806)
点击是，无反应，下次进来还是显示。
Version 4.8.6
Win11
```

---

#### 185. #217 - FlyEnv需要安装帮助程序

- **状态**: closed
- **创建时间**: 2025-03-13
- **关闭时间**: 2025-03-13
- **作者**: @hetengji
- **链接**: https://github.com/xpf0000/FlyEnv/issues/217

**描述**:

```
![Image](https://github.com/user-attachments/assets/df1a3fc1-2556-4235-8c96-065bae0020e6)
```

---

#### 186. #216 - [window] 路径分隔符问题

- **状态**: closed
- **创建时间**: 2025-03-11
- **关闭时间**: 2025-03-13
- **作者**: @ichynul
- **链接**: https://github.com/xpf0000/FlyEnv/issues/216

**描述**:

```
使用的是最新版4.8.7
尝试手动修改\\、/，但保存后又自动换为\，遇到特殊的转义就有问题，比如：\t

![Image](https://github.com/user-attachments/assets/4c6e161b-d617-48c9-8ca6-b3d17a49dc96)

![Image](https://github.com/user-attachments/assets/33ea5ffa-0368-4916-9c48-4e1b91f3c427)

经测试，好像新添加的正常，编辑的时候，路径有改动就会出现
```

---

#### 187. #215 - 如何设置默认的php版本？

- **状态**: closed
- **创建时间**: 2025-03-10
- **关闭时间**: 2025-03-19
- **作者**: @HelplessMan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/215

**描述**:

```
FlyEnv: Version 4.8.7
MacOs: 14.5 (23F79)


今天更新系统并且更新最新版本以后，安装了一个php8.2版本
然后想设置命令行的php版本为8.2的，尝试设置环境变量没有生效(我记得以前可以设置全局变量，然后php-fpm和cli都会变更 如图1， 2)  
<img width="1078" alt="Image" src="https://github.com/user-attachments/assets/39a12f05-6498-4497-938c-bc3e585e52f5" />

<img width="786" alt="Image" src="https://github.com/user-attachments/assets/f8acad8e-feed-4faa-b4a7-ceaed9d936aa" />




图3的这个 我只记得我安装了php8.2 其他的貌似没有安装过，不知道是不是因为更新系统以后自动安装？

<img width="1073" alt="Image" src="https://github.com/user-attachments/assets/bb85da67-2fa3-4453-8fbc-def386370085" />
```

---

#### 188. #213 - 捐赠一次，可以多台电脑使用吗？

- **状态**: closed
- **创建时间**: 2025-03-09
- **关闭时间**: 2025-04-19
- **作者**: @a383359959
- **链接**: https://github.com/xpf0000/FlyEnv/issues/213

**描述**:

```
捐赠一次，可以多台电脑使用吗？
```

---

#### 189. #211 - License

- **状态**: closed
- **创建时间**: 2025-03-05
- **关闭时间**: 2025-03-06
- **作者**: @kaustuv90
- **链接**: https://github.com/xpf0000/FlyEnv/issues/211

**描述**:

```
hello, I have Requested a Licence. but nothing happens, I can't add more than 3 projects.
 Can you check please?
```

---

#### 190. #210 - PostgreSQL在windowsd电脑安装了服务启动失败

- **状态**: closed
- **创建时间**: 2025-03-03
- **关闭时间**: 2025-05-09
- **作者**: @gcming
- **链接**: https://github.com/xpf0000/FlyEnv/issues/210

**描述**:

```
启动的时候报错Error: Data Dir D:\Program Files\PhpWebStudy-Data\server\postgresql\postgresql17 create faild，以管理员身份运行也不行
```

---

#### 191. #208 - Apache always using port 80

- **状态**: closed
- **创建时间**: 2025-02-28
- **关闭时间**: 2025-03-30
- **作者**: @rheznendra
- **链接**: https://github.com/xpf0000/FlyEnv/issues/208

**描述**:

```
So basically i only had 1 project added with using port 8080/8443, then tried to start laragon with default port 80/443, somehow the laragon failed to start because port 80 is being used. I checked to configuration for the Apache on FlyEnv and it's there! Tried to manually delete > save > reload apache, and its there again.

![Image](https://github.com/user-attachments/assets/1319b21f-2d17-4f70-95fb-3e5efac64fd9)
```

---

#### 192. #205 - arch: Can't find any plists for brew

- **状态**: closed
- **创建时间**: 2025-02-23
- **关闭时间**: 2025-03-26
- **作者**: @21620564
- **链接**: https://github.com/xpf0000/FlyEnv/issues/205

**描述**:

```
homebrew 安装出现 arch: Can't find any plists for brew提示

全部提示

cd "/Users/mac/Library/PhpWebStudy/server/cache" && ./pKmu8zYkVpYVOpi0sTZMLRHwxjLsEA2s.sh && wait && exit 0
mac@MacBook-Pro-14 / % cd "/Users/mac/Library/PhpWebStudy/server/cache" && ./pKmu8zYkVpYVOpi
0sTZMLRHwxjLsEA2s.sh && wait && exit 0
 brew  --verbose 
arch: Can't find any plists for brew
Task-DNrU03ae48oTstQ7sNKhOEfhSW4npMZ5-END


怎么处理。
```

---

#### 193. #204 - nginx: [emerg] invalid value "true" in "gzip" directive

- **状态**: closed
- **创建时间**: 2025-02-22
- **关闭时间**: 2025-05-09
- **作者**: @thaikolja
- **链接**: https://github.com/xpf0000/FlyEnv/issues/204

**描述**:

```
On macOS 15.3.1 (24D70) using FlyEnv 4.8.5, whenever I create a new host, it comes with a faulty `nginx.conf` for this vhost.

The error message is:

> nginx: [emerg] invalid value "true" in "gzip" directive, it must be "on" or "off" in ...

![Image](https://github.com/user-attachments/assets/bb1ee49f-edf2-486f-9b05-b97032824ec1)

Going back to "Hosts" -> "Setup" -> "Configuration Nginx" shows the faulty directive on line 7:

![Image](https://github.com/user-attachments/assets/6700759e-dfc8-4dda-a732-19d2792ce56e)

However, all (template) files the FlyEnv uses have the value set to `on`, as it should. I assume this is a bug still not addressed for macOS builds because the web UI version doesn't have this problem and both macOS and FlyEnv are on the latest version.

Here's the error in a short video clip:

https://github.com/user-attachments/assets/c6d32ba0-2088-4257-aa54-e3b48ae3ef77

This happens with standard configurations of FlyEnv for macOS as well as with customized ones.
```

---

#### 194. #202 - SSL Privacy error on chrome or chome-based browsers

- **状态**: closed
- **创建时间**: 2025-02-21
- **关闭时间**: 2025-08-08
- **作者**: @xnhinzkyx
- **链接**: https://github.com/xpf0000/FlyEnv/issues/202

**描述**:

```
This is one of the best apps I have ever used, and I truly appreciate it.

I’m experiencing an issue with SSL—most of the time, while browsing the front pages or making updates in the backend, I encounter SSL errors. However, the page eventually loads if I refresh it multiple times.

Do you know how to fix this issue or have any workarounds?

` ` `
Your connection is not private
Attackers might be trying to steal your information from beta.bilnerden.no (for example, passwords, messages, or credit cards). [Learn more about this warning](chrome-error://chromewebdata/#)
net::ERR_CERT_COMMON_NAME_INVALID
` ` `

Certificate looks like this:

![Image](https://github.com/user-attachments/assets/a0a9e026-d8e1-4ea3-a49e-fd7ba938c5f3)

Chrome - 133.0.6943.127 (latest version)
FlyEnv Version 4.8.5

```

---

#### 195. #201 - 安装mysql后，启动提示输入密码，但是并没有设置密码

- **状态**: closed
- **创建时间**: 2025-02-20
- **关闭时间**: 2025-03-17
- **作者**: @hunyr
- **链接**: https://github.com/xpf0000/FlyEnv/issues/201

---

#### 196. #200 - 新建站点hosts会重置问题

- **状态**: closed
- **创建时间**: 2025-02-19
- **关闭时间**: 2025-03-30
- **作者**: @dadLJH
- **链接**: https://github.com/xpf0000/FlyEnv/issues/200

**描述**:

```
<img width="704" alt="Image" src="https://github.com/user-attachments/assets/e3829756-f865-411c-af1e-40a19c52ec94" />

全部修改成局域网内的ip后重启服务后新建站点会重置

<img width="690" alt="Image" src="https://github.com/user-attachments/assets/f5c6608a-c556-46ba-9926-eeccdbaff16e" />
```

---

#### 197. #199 - How to use Composer on Windows 11?

- **状态**: closed
- **创建时间**: 2025-02-17
- **关闭时间**: 2025-03-25
- **作者**: @bugnumber9
- **链接**: https://github.com/xpf0000/FlyEnv/issues/199

**描述**:

```
The command isn't recognized:

![Image](https://github.com/user-attachments/assets/0146afd0-3c52-4619-bb48-a95f9ac4fc3e)
```

---

#### 198. #198 - Can't install Python on Windows 11

- **状态**: closed
- **创建时间**: 2025-02-17
- **关闭时间**: 2025-04-04
- **作者**: @bugnumber9
- **链接**: https://github.com/xpf0000/FlyEnv/issues/198

**描述**:

```
The following error appears in the debug.log

` ` `
[python][python-install][error]: Error: Command failed: powershell.exe C:\Program Files\PhpWebStudy-Data\server\cache\python-install-5xAl02TXPxJVKEoIkWx65hleFWzPsauI.ps1
. : File C:\Users\Nazar\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1 cannot be loaded because running 
scripts is disabled on this system. For more information, see about_Execution_Policies at 
https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:3
+ . 'C:\Users\Nazar\Documents\WindowsPowerShell\Microsoft.PowerShell_pr ...
+   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    + CategoryInfo          : SecurityError: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
C:\Program : The term 'C:\Program' is not recognized as the name of a cmdlet, function, script file, or operable 
program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again.
At line:1 char:1
+ C:\Program Files\PhpWebStudy-Data\server\cache\python-install-5xAl02T ...
+ ~~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (C:\Program:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException

` ` `
```

---

#### 199. #197 - BUG?: phpMyadmin works only with PHP 8.2

- **状态**: closed
- **创建时间**: 2025-02-16
- **关闭时间**: 2025-04-19
- **作者**: @Gentleman03
- **链接**: https://github.com/xpf0000/FlyEnv/issues/197

**描述**:

```
As in title, phpMyadmin works only with PHP 8.2. Other versions like 8.3 displays service unavailable and 8.4 displays page with multiple errors.

Windows 11
FlyEnv 4.8.5 (but also previous versions)

```

---

#### 200. #196 - Feedback on FlyEnv – Amazing Tool!

- **状态**: closed
- **创建时间**: 2025-02-13
- **关闭时间**: 2025-02-13
- **作者**: @Sebastien-VZN
- **链接**: https://github.com/xpf0000/FlyEnv/issues/196

**描述**:

```
Hi team! Just a quick message to say that your tool is incredible. 

I tested it with Apache, MariaDB, and PHP 8.3, and everything is super smooth and fast, way better than Laragon. Great job on this project, it’s a must-have for PHP developers! 

Thank you for your hard work ! :)

________________________________________________

标题： 关于 FlyEnv 的反馈 – 很棒的工具！

内容：

    你好，团队！只是想快速地说一下，你们的工具非常棒。我使用 Apache、MariaDB 和 PHP 8.3 进行了测试，一切都非常流畅和快速，比 Laragon 好得多。为你们的项目点赞，这是 PHP 开发者的必备工具！感谢你们的辛勤工作！


```

---

#### 201. #195 - node.js 下载了重启电脑后nodejs服务列表中不显示并且终端输入node 也不显示

- **状态**: closed
- **创建时间**: 2025-02-13
- **关闭时间**: 2025-07-11
- **作者**: @dadLJH
- **链接**: https://github.com/xpf0000/FlyEnv/issues/195

**描述**:

```
<img width="1200" alt="Image" src="https://github.com/user-attachments/assets/2f393056-4256-4024-b50f-26f079c34ee0" />

<img width="1200" alt="Image" src="https://github.com/user-attachments/assets/83c3f865-cc5c-42ea-9719-1ebd94393f77" />

<img width="570" alt="Image" src="https://github.com/user-attachments/assets/42448f44-c935-4b19-8882-6c553abd0f51" />

```

---

#### 202. #194 - Cant create new wordpress project

- **状态**: closed
- **创建时间**: 2025-02-13
- **关闭时间**: 2025-04-19
- **作者**: @tinkerbaj
- **链接**: https://github.com/xpf0000/FlyEnv/issues/194

**描述**:

```
For some reason I cant  copy the text and I attach the screenshot

![Image](https://github.com/user-attachments/assets/0446aea5-3ff9-436d-8f09-604d6a146393)

I guess it just cant read windows path 
```

---

#### 203. #193 - 状态栏的操作按钮无效

- **状态**: closed
- **创建时间**: 2025-02-13
- **关闭时间**: 2025-05-29
- **作者**: @c4zo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/193

---

#### 204. #191 - 请问能不能打个免安装的包，我的电脑装不上这个软件。双击exe没有反应

- **状态**: closed
- **创建时间**: 2025-02-12
- **关闭时间**: 2025-07-10
- **作者**: @geekchenzx
- **链接**: https://github.com/xpf0000/FlyEnv/issues/191

---

#### 205. #190 - 最新版macos安装mongodb失败

- **状态**: closed
- **创建时间**: 2025-02-12
- **关闭时间**: 2025-02-12
- **作者**: @FiShelly
- **链接**: https://github.com/xpf0000/FlyEnv/issues/190

**描述**:

```
![Image](https://github.com/user-attachments/assets/63586769-ac30-4d21-9b6a-e31289d5a918)

尝试了安装其他的工具，好像也会出现curl: (8) Weird server reply
```

---

#### 206. #189 - Feature request: Portable version for Windows

- **状态**: closed
- **创建时间**: 2025-02-11
- **关闭时间**: 2025-05-11
- **作者**: @PixievoltNo1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/189

**描述**:

```
I'm looking to replace XAMPP, and FlyEnv looks like a fantastic alternative. However, I'd like to be able to download a .zip or .7z of the Windows version of FlyEnv and extract it to my USB drive, and plug it to any other PC to get a working development environment. It would need to keep its data folder within the application folder.
```

---

#### 207. #188 - Not being able to activate local PHP extensions.

- **状态**: closed
- **创建时间**: 2025-02-10
- **关闭时间**: 2025-07-09
- **作者**: @asajal
- **链接**: https://github.com/xpf0000/FlyEnv/issues/188

**描述**:

```
Not being able to activate local php extensions

![Image](https://github.com/user-attachments/assets/ea9f8397-be8b-4af2-a2b9-034bb344a3d6)

FNM is loading forever (as php extension loading screen)

![Image](https://github.com/user-attachments/assets/e8db4334-4193-4acc-9ab4-c0d774765dad)
```

---

#### 208. #187 - ubuntu24.04 没有4.8.3的deb格式,如何生成deb

- **状态**: closed
- **创建时间**: 2025-02-10
- **关闭时间**: 2025-07-28
- **作者**: @hermitguo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/187

**描述**:

```
感谢大佬提供怎么好用的软件 ,可惜少了 ubuntu24.04 下deb格式, 不知使用zip格式, 如何 生成deb来安装,或解压,要启动哪一个文件,谢谢
```

---

#### 209. #184 - Latest Windows Version

- **状态**: closed
- **创建时间**: 2025-02-08
- **关闭时间**: 2025-02-10
- **作者**: @asajal
- **链接**: https://github.com/xpf0000/FlyEnv/issues/184

**描述**:

```
why 4.8.2 is not available for windows?
```

---

#### 210. #183 - Unable to start apache

- **状态**: closed
- **创建时间**: 2025-02-07
- **关闭时间**: 2025-02-08
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/183

**描述**:

```
After last update it refuse to starts, its builtin apache in macos

` ` `
ChildProcessError: Command failed: cd "/usr/sbin" && ./apachectl -f "/Users/robo/Library/PhpWebStudy/server/apache/common/conf/476bb4e4564853caa24284be38a93a41.conf" -c "PidFile "/Users/robo/Library/PhpWebStudy/server/apache/httpd.pid"" -c "CustomLog "/Users/robo/Library/PhpWebStudy/server/apache/common/logs/access_log" common" -k start
[Fri Feb 07 23:37:44.838349 2025] [core:emerg] [pid 8577] (2)No such file or directory: AH00023: Couldn't create the mpm-accept mutex (file /private/var/run/mpm-accept-0.8577)
(2)No such file or directory: could not create accept mutex
AH00015: Unable to open logs
 `cd "/usr/sbin" && ./apachectl -f "/Users/robo/Library/PhpWebStudy/server/apache/common/conf/476bb4e4564853caa24284be38a93a41.conf" -c "PidFile "/Users/robo/Library/PhpWebStudy/server/apache/httpd.pid"" -c "CustomLog "/Users/robo/Library/PhpWebStudy/server/apache/common/logs/access_log" common" -k start` (exited with error code 1)
` ` `
```

---

#### 211. #182 - Linux version nginx conf has issue with wordpress REST API

- **状态**: closed
- **创建时间**: 2025-02-07
- **关闭时间**: 2025-07-28
- **作者**: @khandakershahi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/182

**描述**:

```
I was getting an error while restoring a backup of WordPress site.

Console show this error

` ` `
Object { cid: "c4", attributes: {…}, _changing: false, _previousAttributes: {…}, changed: {}, _pending: false, requireForceForDelete: true, apiRoot: "https://myphp.test/wp-json/", versionString: "wp/v2/", _events: {…} }
wp-api.min.js:2:10286
SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data main-bbbda89e.js:1153:164590
SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data main-bbbda89e.js:1153:165033
SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data main-bbbda89e.js:1153:165033
SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data main-bbbda89e.js:1153:165033
` ` `

After asking ChatGPT it says there is issue in nginx conf file below was the original 

` ` `

server
{
    listen 80;
    listen 443 ssl http2;
    server_name myphp.test www.myphp.test;
    index index.php index.html index.htm default.php default.htm default.html;
    root "/data/phpwebstudy-sites/myphp.test";

    ssl_certificate    "/home/shahi/.config/PhpWebStudy/server/CA/1738932715594/CA-1738932715594.crt";
    ssl_certificate_key    "/home/shahi/.config/PhpWebStudy/server/CA/1738932715594/CA-1738932715594.key";
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    #PHP-INFO-START
    include enable-php-83.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /home/shahi/.config/PhpWebStudy/server/vhost/rewrite/myphp.test.conf;
    #REWRITE-END

    #禁止访问的文件或目录
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md)
    {
        return 404;
    }

    #一键申请SSL证书验证目录相关设置
    location ~ \.well-known{
        allow all;
    }

    location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
    {
        expires      30d;
        error_log off;
        access_log /dev/null;
    }

    location ~ .*\.(js|css)?$
    {
        expires      12h;
        error_log off;
        access_log /dev/null;
    }
    access_log  /home/shahi/.config/PhpWebStudy/server/vhost/logs/myphp.test.log;
    error_log  /home/shahi/.config/PhpWebStudy/server/vhost/logs/myphp.test.error.log;
}
` ` `

Here is the modified version from ChatGPT
` ` `
server {
    listen 80;
    listen 443 ssl http2;
    server_name myphp.test www.myphp.test;
    index index.php index.html index.htm default.php default.htm default.html;
    root "/data/phpwebstudy-sites/myphp.test";

    ssl_certificate    "/home/shahi/.config/PhpWebStudy/server/CA/1738932715594/CA-1738932715594.crt";
    ssl_certificate_key    "/home/shahi/.config/PhpWebStudy/server/CA/1738932715594/CA-1738932715594.key";
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;
    ssl_prefer_server_ciphers on;
    ssl_session_cache shared:SSL:10m;
    ssl_session_timeout 10m;

    #PHP-INFO-START
    include enable-php-83.conf;
    #PHP-INFO-END

    #REWRITE-START URL重写规则引用,修改后将导致面板设置的伪静态规则失效
    include /home/shahi/.config/PhpWebStudy/server/vhost/rewrite/myphp.test.conf;
    #REWRITE-END

    # WordPress rewrite rules (fixes REST API and permalinks)
    location / {
        try_files $uri $uri/ /index.php?$args;
    }

    # PHP handling
    location ~ \.php$ {
        include fastcgi_params;
        fastcgi_pass 127.0.0.1:9000;  # Adjust if using a different PHP-FPM port
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    }

    # Block access to sensitive files
    location ~ ^/(\.user.ini|\.htaccess|\.git|\.svn|\.project|LICENSE|README.md) {
        return 404;
    }

    # Let's Encrypt SSL certificate verification directory
    location ~ /\.well-known {
        allow all;
    }

    # Static file caching
    location ~* \.(gif|jpg|jpeg|png|bmp|swf)$ {
        expires 30d;
        error_log off;
        access_log /dev/null;
    }

    location ~* \.(js|css)?$ {
        expires 12h;
        error_log off;
        access_log /dev/null;
    }

    access_log  /home/shahi/.config/PhpWebStudy/server/vhost/logs/myphp.test.log;
    error_log  /home/shahi/.config/PhpWebStudy/server/vhost/logs/myphp.test.error.log;
}

` ` `

Now it's working.

Your app mention it has Email Server Mailpit but for Linux version 4 doesn't have it, please update the Linux version. 🙏
```

---

#### 212. #181 - 好像没有在Linux中使用FlyEnv的教程？

- **状态**: closed
- **创建时间**: 2025-02-05
- **关闭时间**: 2025-02-12
- **作者**: @belongLMF
- **链接**: https://github.com/xpf0000/FlyEnv/issues/181

---

#### 213. #180 - 无法获取所有软件的版本数据。

- **状态**: closed
- **创建时间**: 2025-02-05
- **关闭时间**: 2025-03-30
- **作者**: @andyzu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/180

**描述**:

```
我的系统是 macOS Sonoma 14.7.3（这个系统是刚装好），紧接着就安装了 FlyEnv Version 4.7.2，并按照提示安装了brew，用的是推荐的阿里的源，但是无法获取相关版本数据。如下图：
<img width="1200" alt="Image" src="https://github.com/user-attachments/assets/fcf2dc2d-95ce-4fd3-b1bc-f640171a1c26" />
对应的服务里，也没有任何版本数据。
<img width="1200" alt="Image" src="https://github.com/user-attachments/assets/22cada29-5295-4992-b3e3-b060db947705" />

同理，apache，nginx，php，mysql，redis，java 等等所有的都是无法获取相关版本数据。
我在一台 windows 下测试是正常的。但是 macOS  14.7.3不行，因为在 13 版本下，是没问题的。

我尝试了科学上网也不行。如何解决？请指教。


这是我的 hosts 内容：
<img width="1013" alt="Image" src="https://github.com/user-attachments/assets/e3dc5001-d6c2-4689-aeeb-b2704691a507" />
```

---

#### 214. #179 - Python Installation Failed in Windows 11

- **状态**: closed
- **创建时间**: 2025-02-03
- **关闭时间**: 2025-03-18
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/179

**描述**:

```
This is what happened when I installed Python version 3.13.1 on Windows 11 24H2 Build 26100.3037, using FlyEnv version 4.7.1.
![Image](https://github.com/user-attachments/assets/dc33a264-9403-4d3b-942a-eb8807066074)
![Image](https://github.com/user-attachments/assets/f7c32329-86d3-490a-a37b-b3f016312230)
```

---

#### 215. #178 - Not able to Create Laravel Project

- **状态**: closed
- **创建时间**: 2025-01-30
- **关闭时间**: 2025-04-19
- **作者**: @joginder89
- **链接**: https://github.com/xpf0000/FlyEnv/issues/178

**描述**:

```
I freshly installed FlyEnv (4.7.1) on Windows 10, but I'm unable to create a Laravel project. Here is the process I followed:

1. First, I encountered an error on start:
Cannot find latest.yml in the latest release artifacts (https://github.com/xpf0000/PhpWebStudy/releases/download/v4.7.2/latest.yml): HttpError: 404 
"method: GET url: https://github.com/xpf0000/FlyEnv/releases/download/v4.7.2/latest.yml
Please double-check that your authentication token is correct. Due to security reasons, the actual status might not be reported, but 404.


2. Then, I started Nginx, PHP, and MySQL.


3. Next, I navigated to Hosts -> Add -> New Project -> Laravel -> Set Path -> PHP (8.4.3) -> Composer Version (2.8.5) -> Framework (Laravel latest) -> OK.


4. Then I received an error: Fail

I am sorry if I forgot any steps.
```

---

#### 216. #177 - Error: zsh:1: command not found: sudo

- **状态**: closed
- **创建时间**: 2025-01-25
- **关闭时间**: 2025-03-17
- **作者**: @WeiLin-Liao
- **链接**: https://github.com/xpf0000/FlyEnv/issues/177

**描述**:

```
input system password tips error

Error: zsh:1: command not found: sudo

![Image](https://github.com/user-attachments/assets/27ff8ccc-c23f-4ab1-bae4-70393ce63106)
```

---

#### 217. #176 - issue :unable to stop started services

- **状态**: closed
- **创建时间**: 2025-01-24
- **关闭时间**: 2025-04-19
- **作者**: @ibraimfarag
- **链接**: https://github.com/xpf0000/FlyEnv/issues/176

**描述**:

```
 issue of unable to stop started services
on least version for windows 4.7.1

![Image](https://github.com/user-attachments/assets/c774d009-a38d-4926-88a4-cbeb4198ecf9)

when trying to stop 

![Image](https://github.com/user-attachments/assets/f73c904f-7c0d-4b35-95b0-733ea79766b4)
```

---

#### 218. #175 - small code improvements-bugs

- **状态**: closed
- **创建时间**: 2025-01-16
- **关闭时间**: 2025-02-26
- **作者**: @gathlete
- **链接**: https://github.com/xpf0000/FlyEnv/issues/175

**描述**:

```
bugs fixed in following files..
FlyEnv/configs/electron-builder.ts

arch: ['x64', 'arm64'], // Added comma here


FlyEnv/configs/vite.plugs.assets.ts
improvement if file name contains multiple dots ie..(file.name.js)

import { extname } from 'path';

// Inside the writeBundle function
const ext = extname(file);


```

---

#### 219. #174 - brew 安装失败，使用brew cask 安装成功

- **状态**: closed
- **创建时间**: 2025-01-16
- **关闭时间**: 2025-02-20
- **作者**: @zhangsubo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/174

**描述**:

```
# 设备
MacBook Pro 16 2023（M2 Max）
# 操作系统
Mac OS Sequoia 15.2 (24C101)

# 问题
之前安装过PhpWebStudy，后删除（可能原因），使用`brew update && brew install flyenv`安装，会提示
` ` `
Error: flyenv: It seems the App source '/Applications/PhpWebStudy.app' is not there.
` ` `

# 解决
强制重新安装
` ` `
brew reinstall flyenv
` ` `
或者
` ` `
brew intall -cask flyenv
` ` `
```

---

#### 220. #173 - 界面显示和链接跳转问题

- **状态**: closed
- **创建时间**: 2025-01-14
- **关闭时间**: 2025-01-25
- **作者**: @yi4396
- **链接**: https://github.com/xpf0000/FlyEnv/issues/173

**描述**:

```
1. NodeJS界面， 版本库3个字是竖着排列的，fnm和nvm的下拉框只能看到首字母+... 尝试缩放界面都无法解决。
2. 设置--许可证界面，捐赠链接和提交PR链接，点击无法跳转也无法复制到剪贴板。
![Shot 2025-01-15 04 09 46@2x](https://github.com/user-attachments/assets/c5021305-b9c0-402e-acc6-5561fe53962e)

```

---

#### 221. #172 - 为什么我捐赠了还是不能创建更多站点

- **状态**: closed
- **创建时间**: 2025-01-13
- **关闭时间**: 2025-05-11
- **作者**: @dongamao
- **链接**: https://github.com/xpf0000/FlyEnv/issues/172

**描述**:

```
小董 支付宝名字 软件也提交了
```

---

#### 222. #170 - fatal: unable to access 'https://aomedia.googlesource.com/aom.git/': Failed to connect to aomedia.googlesource.com port 443 after 75095 ms: Couldn't connect to server

- **状态**: closed
- **创建时间**: 2025-01-04
- **关闭时间**: 2025-08-15
- **作者**: @pangyunxiu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/170

**描述**:

```
你好，我每次下载 PHP 的时候，都会报这个错，我的电脑是 macOS monterey 12.7.6版本的，翻墙软件我也开了，
![1736018319316](https://github.com/user-attachments/assets/fd56ef5e-b25c-4c22-9c27-f2aa9048c26e)
![1736018383781](https://github.com/user-attachments/assets/4797b829-edca-4c4b-a7fb-ab0084ce5663)
代理我也设置了，请问，该怎么解决呢？？
```

---

#### 223. #169 - cannot delete obsolete php

- **状态**: closed
- **创建时间**: 2024-12-28
- **关闭时间**: 2025-01-20
- **作者**: @3xploiton3
- **链接**: https://github.com/xpf0000/FlyEnv/issues/169

**描述**:

```
![image](https://github.com/user-attachments/assets/e8e18246-ed2f-4d37-a8e9-ed192becc037)
![image](https://github.com/user-attachments/assets/c24e3964-05be-4e5f-a6d5-552aa1d84b38)



cannot delete obsolete php 8.2.18
```

---

#### 224. #168 - 终端切换php版本需求

- **状态**: closed
- **创建时间**: 2024-12-23
- **关闭时间**: 2025-05-11
- **作者**: @ljyljy0211
- **链接**: https://github.com/xpf0000/FlyEnv/issues/168

**描述**:

```
由于我有许多不同php版本的项目，在终端需要经常切换版本，来执行不同的php版本命令，这个时候每次都需要去面板的php版本管理的地方，手动将php版本添加的环境变量，操作多了就很麻烦，是否可以增加终端直接切换php版本的功能，类似于mac的 brew-php-switcher php版本  这个命令，那就更方便了
![20241223185959](https://github.com/user-attachments/assets/1205d3cf-b089-4489-a0ad-1c7a2248f42d)

```

---

#### 225. #167 - Support for Auto Start of FlyEnv app on system boot and Auto Start of FlyEnv Services

- **状态**: closed
- **创建时间**: 2024-12-19
- **关闭时间**: 2025-02-14
- **作者**: @uwascan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/167

**描述**:

```
This feature will make usage very simple. Currently you have manually open the FlyEnv  app and start the relevant services 
```

---

#### 226. #166 - Some bugs & Suggestion

- **状态**: closed
- **创建时间**: 2024-12-18
- **关闭时间**: 2025-02-12
- **作者**: @SalzBytes
- **链接**: https://github.com/xpf0000/FlyEnv/issues/166

**描述**:

```
1. Clicked composer custom folder, but did not showing up, i already tried many times

![image](https://github.com/user-attachments/assets/b5371709-9e3f-4262-8f4b-3d19b16c57cd)

2. Service not found, after installing new version.
I have tried closing the app and reopening it

![image](https://github.com/user-attachments/assets/f0462ce8-e21d-452b-b408-d32afd709f97)
![image](https://github.com/user-attachments/assets/52d3a9e3-ccb0-471b-8e76-f0ce63ac14a7)

3. My suggestion, group the app to each folder like, apache\apache_v1, etc
**Currently**:
![image](https://github.com/user-attachments/assets/daae1add-134b-4c9b-bcd5-7c2080e7f857)

**Suggestion** :
![image](https://github.com/user-attachments/assets/22c7bcb3-9fe2-43d3-aaf2-55c4c0cda697)

```

---

#### 227. #165 - Cannot install php 8.3.x in windows 11

- **状态**: closed
- **创建时间**: 2024-12-18
- **关闭时间**: 2025-01-06
- **作者**: @3xploiton3
- **链接**: https://github.com/xpf0000/FlyEnv/issues/165

**描述**:

```
![image](https://github.com/user-attachments/assets/b5b50853-25dc-42fd-8b05-aa8d2d5752f8)

```

---

#### 228. #164 - FlyEnv(PhpWebStudy)：一站式PHP本地开发利器，释放你的创造力

- **状态**: closed
- **创建时间**: 2024-12-14
- **关闭时间**: 2025-02-12
- **作者**: @lichanghai
- **链接**: https://github.com/xpf0000/FlyEnv/issues/164

**描述**:

```
在当今高速迭代的Web开发领域，构建一个灵活、稳定且高效的本地开发环境对于提高开发效率和专注度至关重要。面对不断扩展的技术栈、分布式的项目协作以及多版本PHP应用的实际需求，开发者迫切需要一个既简单易用又功能丰富的本地部署解决方案。**FlyEnv(PhpWebStudy)**正是应运而生的全能工具，它为PHP开发者打造了一套完整的本地开发环境，让你从繁琐的环境搭建中解放出来，将更多精力投入到代码创意和功能实现中。

1. 一键整合，让环境搭建更简单
传统搭建本地开发环境往往要经历安装各种依赖、配置服务器与数据库、管理多版本PHP等繁杂步骤。FlyEnv内置Nginx、Apache、MySQL、Redis及多版本PHP支持，将繁琐的环境部署变得轻松自然。借助直观的可视化界面和自动化脚本，你只需轻轻几下点击，即可获得完善、稳定的本地开发环境。

2. 多版本PHP随心切换，应对多样化项目需求
真实的开发场景中，你可能同时负责维护多个项目，每个项目或许使用不同的PHP版本。FlyEnv支持在不同PHP版本间自由切换，无需再次安装或繁复配置。从经典的5.x版本到主流的7.x、8.x版本，无论你面对何种项目，都能轻松满足其环境要求。

3. 专注核心业务，加速项目迭代
当环境部署不再成为阻碍，你可以将更多时间和精力投入到核心业务逻辑与用户体验的提升上。FlyEnv提供了稳定且高性能的运行环境，为你的开发流程赋能，让你从开发到测试、再到项目迭代都能更加流畅。无论是初创企业的快速试错，还是成熟团队的持续交付，FlyEnv都为你提供坚实的底层支撑。

4. 深度面向PHP生态，扩展与兼容无忧
FlyEnv将重点放在PHP这一后端主力语言上，深度兼容PHP相关生态圈，从Laravel、ThinkPHP、Symfony到WordPress，都能无缝调试与运行。凭借对PHP生态的深度适配，你可以安心尝试新的框架和工具，快速迭代你的创意与灵感。

5. 开发者友好，透明可靠
作为一款由开发者为开发者打造的工具，FlyEnv注重用户体验与可维护性。不仅提供详尽的文档和技术支持，还拥有一个互帮互助的社区氛围。当你遇到问题或需要优化配置时，都能迅速找到解决方案。

结语：
在这个竞争激烈、节奏飞快的时代，FlyEnv(PhpWebStudy)让本地开发环境不再成为阻碍，而是助力你加速前进的助推器。无论你是新手开发者还是资深工程师，都能在FlyEnv的加持下，从容应对复杂多变的项目需求，用更少的时间和更低的成本，释放你的创造力。现在就试试FlyEnv，开启你的高效开发新篇章！
```

---

#### 229. #163 - 可以 支持 SQL Server 吗？

- **状态**: closed
- **创建时间**: 2024-12-13
- **关闭时间**: 2025-11-16
- **作者**: @ZhuMengyuan-Y
- **链接**: https://github.com/xpf0000/FlyEnv/issues/163

---

#### 230. #162 - brew  获取不到列表无法下载

- **状态**: closed
- **创建时间**: 2024-12-11
- **关闭时间**: 2024-12-30
- **作者**: @dadLJH
- **链接**: https://github.com/xpf0000/FlyEnv/issues/162

**描述**:

```
brew   php、mysql、nginx等等获取不到无法下载   ，切换源也不行
```

---

#### 231. #161 - 有没有mysql5.6

- **状态**: closed
- **创建时间**: 2024-12-10
- **关闭时间**: 2024-12-12
- **作者**: @qurge
- **链接**: https://github.com/xpf0000/FlyEnv/issues/161

**描述**:

```
目前项目还在用mysql5.6，有没有安装方法
```

---

#### 232. #160 - windows server2022 右下角图标没有反应

- **状态**: closed
- **创建时间**: 2024-12-06
- **关闭时间**: 2025-05-20
- **作者**: @35598253
- **链接**: https://github.com/xpf0000/FlyEnv/issues/160

**描述**:

```
如题，右下角点击没有反应，无论左右键，导致软件无法正常退出
```

---

#### 233. #159 - 项目太强了博主,给你提一个建议

- **状态**: closed
- **创建时间**: 2024-12-04
- **关闭时间**: 2025-04-08
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/159

**描述**:

```
建议做一个一键迁移功能,在网站配置的地方勾选数据,或者加一个一键迁移功能,用户勾选后,可以将项目和数据库,ngxin部分迁移到服务器一键,这个功能出来绝对王炸,我帮你免费推广,这样就能干倒宝塔了,在mac系统上
```

---

#### 234. #158 - macos15 系统自带的Python 安装路径识别错误

- **状态**: closed
- **创建时间**: 2024-11-29
- **关闭时间**: 2025-01-06
- **作者**: @glitter1105
- **链接**: https://github.com/xpf0000/FlyEnv/issues/158

**描述**:

```
![CleanShot 2024-11-29 at 22 27 32@2x](https://github.com/user-attachments/assets/601444e6-6121-49f7-a5a7-d034fe060ab1)
/usr 下并不存在 Python
```

---

#### 235. #157 - How does GroupStart work?

- **状态**: closed
- **创建时间**: 2024-11-26
- **关闭时间**: 2024-12-12
- **作者**: @uwascan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/157

**描述**:

```
 I want to be able to click a button to start several services once instead of doing it individually everytime
```

---

#### 236. #156 - Windows11下安装无反应

- **状态**: closed
- **创建时间**: 2024-11-26
- **关闭时间**: 2024-11-26
- **作者**: @lysowc
- **链接**: https://github.com/xpf0000/FlyEnv/issues/156

**描述**:

```
处理器	13th Gen Intel(R) Core(TM) i5-1340P   1.90 GHz
机带 RAM	32.0 GB (31.6 GB 可用)
系统类型	64 位操作系统, 基于 x64 的处理器
操作系统版本  22631.4460
制造商	HP Inc.

带了WSL，Ubuntu22的LTS版本
点击windows的安装包后，一点反应都莫得，也不报错，进程也没有，不知道是发生了什么，但是在其他的机子上是可以正常打开安装的
```

---

#### 237. #155 - 希望添加文件管理

- **状态**: closed
- **创建时间**: 2024-11-26
- **关闭时间**: 2024-11-26
- **作者**: @DevYangJC
- **链接**: https://github.com/xpf0000/FlyEnv/issues/155

**描述**:

```
目前不知道安装的服务都放在哪里了
```

---

#### 238. #154 - 希望增加安装日志

- **状态**: closed
- **创建时间**: 2024-11-24
- **关闭时间**: 2025-01-06
- **作者**: @iamdzk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/154

**描述**:

```
现在安装Maven、Java、nodejs之类的环境的时候，只看到进行中的图标，而且安装nvm的时候弹出nvm配置文件，也没提示要干啥，就会很懵B，只能傻傻的等，还是希望能在安装这些东西的时候，增加一个日志显示，好歹也能知道干了啥呀
```

---

#### 239. #153 - nodejs/nvm不支持指定目录指定版本

- **状态**: closed
- **创建时间**: 2024-11-24
- **关闭时间**: 2025-07-11
- **作者**: @iamdzk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/153

**描述**:

```
nvm本身是支持项目指定版本的，每个文件夹下的版本都可以不一样，因为前端开发切换版本太正常了，这个能在FlyEnv中实现吗？还是说想要做到还是只能在命令行中用nvm切换版本？
```

---

#### 240. #152 - Java的版本没有JDK8

- **状态**: closed
- **创建时间**: 2024-11-24
- **关闭时间**: 2024-12-06
- **作者**: @iamdzk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/152

**描述**:

```
虽然JDK8目前已经进入维护状态，但是还有很多项目是使用jdk8开发的。希望Java的版本管理能增加jdk8
```

---

#### 241. #151 - Maven安装之后变成了两行显示

- **状态**: closed
- **创建时间**: 2024-11-24
- **关闭时间**: 2024-12-06
- **作者**: @iamdzk
- **链接**: https://github.com/xpf0000/FlyEnv/issues/151

**描述**:

```
在安装完Maven之后，安装的那个版本会变成两行显示，虽然能正常操作，但会给人很疑惑的感觉
![image](https://github.com/user-attachments/assets/941086f9-a77e-4874-978e-5e3cb681de17)

```

---

#### 242. #150 - windows版本一些问题

- **状态**: closed
- **创建时间**: 2024-11-24
- **关闭时间**: 2025-01-20
- **作者**: @jack20211101
- **链接**: https://github.com/xpf0000/FlyEnv/issues/150

**描述**:

```
> Error: Command failed: mysqld.exe --defaults-file="D:\Program Files\PhpWebStudy-Data\server\mysql\my-9.1.cnf" --pid-file="D:\Program Files\PhpWebStudy-Data\server\mysql\mysql.pid" --user=mysql --slow-query-log=ON --slow-query-log-file="D:\Program Files\PhpWebStudy-Data\server\mysql\slow.log" --log-error="D:\Program Files\PhpWebStudy-Data\server\mysql\error.log" --initialize-insecure

>mongoDB版本显示
8.0只会显示最新版本，但是是个release版本，没法安装8.0.3
![image](https://github.com/user-attachments/assets/6aaafa56-6af0-4f2e-ad39-009fb1af9405)

>php8.3.14拓展无效

>停止服务进程还在运行

![image](https://github.com/user-attachments/assets/ca627d72-bc6a-4a72-9f3c-bc244884da76)


```

---

#### 243. #149 - macos更新到Sequoia 15.1.1版本后启动DNS Server报错（FlyEnv 版本Version 4.5.6）

- **状态**: closed
- **创建时间**: 2024-11-23
- **关闭时间**: 2025-02-26
- **作者**: @lfcheng92
- **链接**: https://github.com/xpf0000/FlyEnv/issues/149

**描述**:

```
具体报错如下：
SyntaxError: Unexpected token '??='
    at wrapSafe (internal/modules/cjs/loader.js:1029:16)
    at Module._compile (internal/modules/cjs/loader.js:1078:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1143:10)
    at Module.load (internal/modules/cjs/loader.js:979:32)
    at Function.Module._load (internal/modules/cjs/loader.js:819:12)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:75:12)
    at internal/main/run_main_module.js:17:47
```

---

#### 244. #148 - MySQL连接时间有点久

- **状态**: closed
- **创建时间**: 2024-11-23
- **关闭时间**: 2024-12-01
- **作者**: @tmd-user
- **链接**: https://github.com/xpf0000/FlyEnv/issues/148

**描述**:

```
目前正在使用MySQL8.0的版本，不管是在PHP还是使用Navicat Premium Lite 17工具连接时间都需要2s以上，在开发过程有点影响
```

---

#### 245. #147 - Linux版本不更新了吗？

- **状态**: closed
- **创建时间**: 2024-11-23
- **关闭时间**: 2025-01-20
- **作者**: @Jink92
- **链接**: https://github.com/xpf0000/FlyEnv/issues/147

**描述**:

```
Linux版本不更新了吗？
```

---

#### 246. #146 - Add to PATH doesn't work

- **状态**: closed
- **创建时间**: 2024-11-16
- **关闭时间**: 2024-11-16
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/146

**描述**:

```
It seems add to PATH doesn't work, tested in php and apache. It loads and nothing happens, it can't find `php -v` in the terminal.

Clean macos 15.1

<img width="384" alt="Snímka obrazovky 2024-11-16 o 12 49 41" src="https://github.com/user-attachments/assets/86e18040-931b-4e3f-8f50-1772554eb7c8">

I switched to mac and overall the app is a great alternative to laragon (win only).

```

---

#### 247. #145 - mac已经通过brew安装了GO ，但是 flyenv检测不出来，能否根据go env命令自动检测并且导入到flyenv管理中 

- **状态**: closed
- **创建时间**: 2024-11-16
- **关闭时间**: 2025-02-12
- **作者**: @askcms
- **链接**: https://github.com/xpf0000/FlyEnv/issues/145

**描述**:

```
自从用上这个软件，真心觉得好，希望能更完善，更强大，方便已经有开发环境的人更丝滑的切入到这个软件。

<img width="1004" alt="image" src="https://github.com/user-attachments/assets/3fbe9284-3da1-4a05-b1a0-0d5b025875ec">
<img width="478" alt="image" src="https://github.com/user-attachments/assets/373df27e-5930-4d41-91b4-7d75d68ed13f">

```

---

#### 248. #144 - Chinese text on english version

- **状态**: closed
- **创建时间**: 2024-11-15
- **关闭时间**: 2024-11-16
- **作者**: @RobiNN1
- **链接**: https://github.com/xpf0000/FlyEnv/issues/144

**描述**:

```
As title says

v4.5.1

<img width="734" alt="screenshot" src="https://github.com/user-attachments/assets/d8c4219f-a3c5-4f57-99c8-0c5da0a5a9ae">

```

---

#### 249. #143 - 无法设置环境变量

- **状态**: closed
- **创建时间**: 2024-11-15
- **关闭时间**: 2024-11-18
- **作者**: @JuanFaC
- **链接**: https://github.com/xpf0000/FlyEnv/issues/143

**描述**:

```
MacOs版本 15.1
phpWebStudy版本4.5.1
已正确输入电脑密码，使用homebrew安装的phpWebStudy
1. 设置php环境变量，redis环境变量，mysql环境变量，java环境变量一直转圈，无法一键快捷设置环境变量
2. NodeJs版本管理工具安装nvm，使用homebrew方式安装，查看.zprofile中，发现export NVM_DIR="/Users/orange/.nvm"，不是nvm实际安装路径
```

---

#### 250. #142 - nginx 同时设置HTTP和HTTPS Configuring HTTP and HTTPS

- **状态**: closed
- **创建时间**: 2024-11-13
- **关闭时间**: 2024-11-14
- **作者**: @NightFurySL2001
- **链接**: https://github.com/xpf0000/FlyEnv/issues/142

**描述**:

```
想请问如果需要nginx对某个域名（例如domain.test）同时接受 80 (HTTP) 和 443 (HTTPS) 端口，应该在软件内如何设置？

What is the current suggested way for nginx to accept both 80 (HTTP) and 443 (HTTPS) port for a domain (eg domain.test) in software?
```

---

#### 251. #141 - java项目添加后，无法获取。需要把软件重启后才能看见。

- **状态**: closed
- **创建时间**: 2024-11-13
- **关闭时间**: 2024-11-26
- **作者**: @maoyusan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/141

**描述**:

```
如题，
![Uploading 957b684f-0a21-4711-a3d7-ced40f8f60e9.png…]()

```

---

#### 252. #140 - 我就安装一个php5.6，怎么把其他软件都升级更新了一遍?

- **状态**: closed
- **创建时间**: 2024-11-08
- **关闭时间**: 2024-11-26
- **作者**: @Lxj96
- **链接**: https://github.com/xpf0000/FlyEnv/issues/140

**描述**:

```
我只是点击安装了php@5.6版本,没想到Brew把整个系统的软件升级了一遍,比如mysql从8.0.39升级到了8.0.42
<img width="934" alt="image" src="https://github.com/user-attachments/assets/8403b537-772f-4516-ad12-36d39f82586b">
<img width="841" alt="image" src="https://github.com/user-attachments/assets/9e1b9c91-d6e5-46fe-8a72-ec14713c4c3c">

```

---

#### 253. #139 - 我是安装了xdebug后 然后安装swool 出了问题 然后我删除了xdebug。在安装swool就正常了。然后我后面删除swool 删掉后 重新安装swool或者xdebug就不行了 就安装不了

- **状态**: closed
- **创建时间**: 2024-11-05
- **关闭时间**: 2024-11-05
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/139

**描述**:

```
我是安装了xdebug后 然后安装swool 出了问题 然后我删除了xdebug。在安装swool就正常了。然后我后面删除swool 删掉后 重新安装swool或者xdebug就不行了 就安装不了 怎么看报错日志啊 他日志没有 直接闪屏下但是下载不下载 

arch -x86_64 sudo port clean -v php74-swoole
--->  Cleaning php74-swoole
--->  Removing work directory for php74-swoole
arch -x86_64 sudo port install -v php74-swoole
```

---

#### 254. #138 - 有个问题博主,伪静态好像不生效啊

- **状态**: closed
- **创建时间**: 2024-11-05
- **关闭时间**: 2024-11-05
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/138

**描述**:

```
我用php跑fastadmin项目不行,其他的项目事可以的。他这个要配置下伪静态,在宝塔是可以的,是不是我更新了新版本有bug
https://doc.fastadmin.net/doc/install.html#toc-9 项目地址这个
<img width="1600" alt="截屏2024-11-05 08 45 41" src="https://github.com/user-attachments/assets/6205f7d2-ee99-446f-be01-28fd8c9e80fb">
访问404
```

---

#### 255. #137 - mysql@5.7 has been disabled because it is not supported upstream! It was disabled on 2024-08-01.

- **状态**: closed
- **创建时间**: 2024-10-31
- **关闭时间**: 2024-11-07
- **作者**: @ypf138199209
- **链接**: https://github.com/xpf0000/FlyEnv/issues/137

**描述**:

```
mysql@5.7 has been disabled because it is not supported upstream! It was disabled on 2024-08-01.
```

---

#### 256. #136 - 更新到4.5.0后，站点消失了。

- **状态**: closed
- **创建时间**: 2024-10-30
- **关闭时间**: 2024-10-31
- **作者**: @SyanH
- **链接**: https://github.com/xpf0000/FlyEnv/issues/136

**描述**:

```
如题，今天更新后，站点没有了，新增的可以显示出来，但是之前的没有了
```

---

#### 257. #135 - 服务无法正常启动

- **状态**: closed
- **创建时间**: 2024-10-28
- **关闭时间**: 2024-11-07
- **作者**: @biiiiiigmonster
- **链接**: https://github.com/xpf0000/FlyEnv/issues/135

**描述**:

```
平台：window
phpwebstudy：4.3.5
![image](https://github.com/user-attachments/assets/43b8593f-9ef5-4ac1-b7fb-7c0b0ee3a6e0)
![image](https://github.com/user-attachments/assets/a5edb178-544f-4b0d-87cd-5d0fa41d49a9)

```

---

#### 258. #134 - 使用默认的mysql ，网站很慢

- **状态**: closed
- **创建时间**: 2024-10-25
- **关闭时间**: 2024-10-25
- **作者**: @guugg
- **链接**: https://github.com/xpf0000/FlyEnv/issues/134

**描述**:

```
比如创建了一个wordpress，每次请求都要2~3秒的反应。 
- 默认的配置文件
` ` `
[mysqld]
# Only allow connections from localhost
bind-address = localhost
sql-mode=NO_ENGINE_SUBSTITUTION
#设置数据目录
#brew安装的mysql, 数据目录是一样的, 会导致5.x版本和8.x版本无法互相切换, 所以为每个版本单独设置自己的数据目录
#如果配置文件已更改, 原配置文件在: D:\pwa\PhpWebStudy-Data\server\mysql\my.cnf
#可以复制原配置文件的内容, 使用原来的配置
datadir="D:/pwa/PhpWebStudy-Data/server/mysql/data-8.0"
` ` `


## PhpWebStudy
Version 4.3.5

## PWS的mysql8.0.36， Nginx1.27.2， Caddy2.8.4， PHP8.1.30


启动日志
` ` `
2024-10-25T04:11:08.306989Z 0 [System] [MY-010116] [Server] D:\pwa\PhpWebStudy-Data\app\mysql-8.0.36\bin\mysqld.exe (mysqld 8.0.36) starting as process 17808
2024-10-25T04:11:08.315748Z 1 [System] [MY-013576] [InnoDB] InnoDB initialization has started.
2024-10-25T04:11:08.709660Z 1 [System] [MY-013577] [InnoDB] InnoDB initialization has ended.
2024-10-25T04:11:08.852518Z 0 [System] [MY-010229] [Server] Starting XA crash recovery...
2024-10-25T04:11:08.855845Z 0 [System] [MY-010232] [Server] XA crash recovery finished.
2024-10-25T04:11:08.944568Z 0 [Warning] [MY-013829] [Server] Missing data directory for ICU regular expressions: D:\pwa\PhpWebStudy-Data\app\mysql-8.0.36\lib\private\.
2024-10-25T04:11:08.951931Z 0 [Warning] [MY-010068] [Server] CA certificate ca.pem is self signed.
2024-10-25T04:11:08.952204Z 0 [System] [MY-013602] [Server] Channel mysql_main configured to support TLS. Encrypted connections are now supported for this channel.
2024-10-25T04:11:08.988927Z 0 [System] [MY-011323] [Server] X Plugin ready for connections. Bind-address: '::' port: 33060
2024-10-25T04:11:08.988994Z 0 [System] [MY-010931] [Server] D:\pwa\PhpWebStudy-Data\app\mysql-8.0.36\bin\mysqld.exe: ready for connections. Version: '8.0.36'  socket: ''  port: 3306  MySQL Community Server - GPL.


` ` `



## 尝试使用其他的数据库
使用PhpWebStudy创建网站 Nginx1.27.2  Caddy2.8.4  PHP8.1.30，
使用phpstudy的mysql 5.7 数据库。没有出现这个问题！
```

---

#### 259. #133 - 能不能增加 nginx 站点的反向代理管理功能，类似宝塔

- **状态**: closed
- **创建时间**: 2024-10-17
- **关闭时间**: 2024-11-07
- **作者**: @ftlh2005
- **链接**: https://github.com/xpf0000/FlyEnv/issues/133

---

#### 260. #132 - 自动管理证书，无法访问。如果要手动导入根CA证书那是在哪里呢？

- **状态**: closed
- **创建时间**: 2024-10-16
- **关闭时间**: 2024-11-18
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/132

**描述**:

```
RT
```

---

#### 261. #131 - apache如何配置伪静态

- **状态**: closed
- **创建时间**: 2024-10-10
- **关闭时间**: 2024-11-05
- **作者**: @zzZxby
- **链接**: https://github.com/xpf0000/FlyEnv/issues/131

**描述**:

```
apache如何配置伪静态呢，一直报无法访问.htaccess问题
![QQ_1728570133877](https://github.com/user-attachments/assets/1abba406-b575-4f61-927a-2c30943a738a)
You don't have permission to access this resource.Server unable to read htaccess file, denying access to be safe
给文件权限也没解决，htaccess就放在网站对应目录下，请教各位大佬一下
```

---

#### 262. #130 - sorry for high macos version

- **状态**: closed
- **创建时间**: 2024-10-09
- **关闭时间**: 2024-11-07
- **作者**: @zzZxby
- **链接**: https://github.com/xpf0000/FlyEnv/issues/130

**描述**:

```
Warning: You are using macOS 15.
We do not provide support for this pre-release version.
It is expected behaviour that some formulae will fail to build in this pre-release version.
It is expected behaviour that Homebrew will be buggy and slow.
Do not create any issues about this on Homebrew's GitHub repositories.
Do not create any issues even if you think this message is unrelated.
Any opened issues will be immediately closed without response.
Do not ask for help from Homebrew or its maintainers on social media.
You may ask for help in Homebrew's discussions but are unlikely to receive a response.
Try to figure out the problem yourself and submit a fix as a pull request.
We will review it but may or may not accept it.

Error: unknown or unsupported macOS version: :dunno
```

---

#### 263. #129 - 功能基本够用了，建议优化下界面！

- **状态**: closed
- **创建时间**: 2024-10-08
- **关闭时间**: 2025-02-26
- **作者**: @35598253
- **链接**: https://github.com/xpf0000/FlyEnv/issues/129

**描述**:

```
在mamp转来的，mamp7居然也按年订阅了有点坑！偶然间发现这个，所需功能基本够用！就是界面太突列了，比如主界面的阴影，尤其是在亮色界面下，不如其他mac应用那么迎合！建议优化下，希望越来越好！
```

---

#### 264. #128 - windows版本安装后，发现redis，mysql有默认的配置，无法自定义

- **状态**: closed
- **创建时间**: 2024-10-06
- **关闭时间**: 2024-11-07
- **作者**: @richwxd
- **链接**: https://github.com/xpf0000/FlyEnv/issues/128

**描述**:

```
删不掉这些配置，做不到自定义
```

---

#### 265. #127 - Windows版本修改站点，无法保存；且会清理hosts文件原有的内容

- **状态**: closed
- **创建时间**: 2024-09-30
- **关闭时间**: 2024-09-30
- **作者**: @zhxbing
- **链接**: https://github.com/xpf0000/FlyEnv/issues/127

**描述**:

```
Windows版本
1. 修改站点，无法保存；
   
![1727710436955](https://github.com/user-attachments/assets/110de25d-bf6f-4ca4-8e2e-4f9304ed60d4)

2. 且会清理hosts文件原有的内容；应该（检测并）追加
```

---

#### 266. #126 - 不能自定义数据或是扩展目录吗?

- **状态**: closed
- **创建时间**: 2024-09-27
- **关闭时间**: 2024-09-27
- **作者**: @lifetin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/126

**描述**:

```
软件挺好挺全,就是不能自定义数据或是扩展目录吗?
C盘空间一盘都不大,软件是安装在C盘,结果好像不能自定义数据目录
```

---

#### 267. #125 - windows版本安装后打不开程序

- **状态**: closed
- **创建时间**: 2024-09-26
- **关闭时间**: 2024-11-07
- **作者**: @Veke0715
- **链接**: https://github.com/xpf0000/FlyEnv/issues/125

**描述**:

```
操作系统：Win11 
系统版本：22631.4037

报错信息
![image](https://github.com/user-attachments/assets/f1966ebe-b24f-483a-a985-1bf91b00902d)

```

---

#### 268. #124 - 网站目录必须是你的那个lib下面的www目录吗,为什么我设置了自己的目录,我是thinkphp,设置后根本没有效果呢

- **状态**: closed
- **创建时间**: 2024-09-26
- **关闭时间**: 2024-09-26
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/124

**描述**:

```
我搭建使用的代码是开源的 萤火商城。在宝塔可以 在本地想跑下跑不起来 不知道为什么
<img width="1091" alt="截屏2024-09-26 上午10 52 39" src="https://github.com/user-attachments/assets/7b533333-f150-43bf-85ac-8b3654f46f5f">

```

---

#### 269. #123 - 东西非常好用,但是homebrew发现了一个bug

- **状态**: closed
- **创建时间**: 2024-09-23
- **关闭时间**: 2024-09-26
- **作者**: @SwpuEsine
- **链接**: https://github.com/xpf0000/FlyEnv/issues/123

**描述**:

```
我以为我的电脑坏了,我homebrew安装的是5.0.8
<img width="1091" alt="截屏2024-09-24 上午7 33 01" src="https://github.com/user-attachments/assets/c40e4eb9-868f-4441-b905-f21a9854ce5b">
然后你的软件显示的是7版本
<img width="1013" alt="截屏2024-09-24 上午7 33 47" src="https://github.com/user-attachments/assets/387a3c79-40ab-4c7c-80a7-1e973f11d88a">
并且我在redis-cli 启动redis的时候,你的软件显示我没有启动 没有检测到 
```

---

#### 270. #122 - 在设置中的电脑密码选项，建议加密

- **状态**: closed
- **创建时间**: 2024-09-19
- **关闭时间**: 2024-09-25
- **作者**: @C4skg
- **链接**: https://github.com/xpf0000/FlyEnv/issues/122

**描述**:

```
这里的密码可直接查看明文，感觉不太安全
![QQ_1726746831697](https://github.com/user-attachments/assets/5fab1fad-a6b9-40af-b794-530aa5c2744e)
```

---

#### 271. #120 - Does not find brew installed versions

- **状态**: closed
- **创建时间**: 2024-09-16
- **关闭时间**: 2024-09-17
- **作者**: @ejunker
- **链接**: https://github.com/xpf0000/FlyEnv/issues/120

**描述**:

```
I just upgraded to version 4.3.1 and it lost all my configuration. I go to the PHP tab and I click the reload button but it cannot find my installed version of PHP. I installed PHP using the standard Homebrew location.

` ` `
❯ which php
/opt/homebrew/bin/php
` ` `

I go to settings and try to change Brew Source Switch to Default but I get an error that just says "Failed".  I am using macOS Sonoma 14.7

I tried to manually add the path of `/opt/homebrew/bin` but it still did not find a php version to use.
```

---

#### 272. #119 - call version.bat<br/>Error: Command failed: call version.bat

- **状态**: closed
- **创建时间**: 2024-09-16
- **关闭时间**: 2024-10-16
- **作者**: @KnightBlood
- **链接**: https://github.com/xpf0000/FlyEnv/issues/119

**描述**:

```
![image](https://github.com/user-attachments/assets/663526f5-04c8-452f-bc1b-6bac8356f21f)

```

---

#### 273. #118 - Link for ? Icon (Documentation) is broken

- **状态**: closed
- **创建时间**: 2024-09-15
- **关闭时间**: 2024-09-15
- **作者**: @theChaosCoder
- **链接**: https://github.com/xpf0000/FlyEnv/issues/118

**描述**:

```
Clicking on the help icon (top left in app) opens https://www.macphpstudy.com/help-0-1.html which return 404
```

---

#### 274. #117 - PHP设置为全局版本按钮消失了

- **状态**: closed
- **创建时间**: 2024-09-10
- **关闭时间**: 2024-09-25
- **作者**: @yi4396
- **链接**: https://github.com/xpf0000/FlyEnv/issues/117

**描述**:

```
RT，将制定版本设置为全局版本的按钮取消了吗
```

---

#### 275. #116 - Windows新版设置里视乎没有隐藏Java和Tomact功能

- **状态**: closed
- **创建时间**: 2024-09-10
- **关闭时间**: 2024-09-25
- **作者**: @kan-din
- **链接**: https://github.com/xpf0000/FlyEnv/issues/116

**描述**:

```
![image](https://github.com/user-attachments/assets/450488ed-daab-4137-b213-ff7a6acf7f5c)
希望可以支持，谢谢。
```

---

#### 276. #115 - bug

- **状态**: closed
- **创建时间**: 2024-09-08
- **关闭时间**: 2024-10-08
- **作者**: @f3liiix
- **链接**: https://github.com/xpf0000/FlyEnv/issues/115

**描述**:

```
![screenshot-20240908-210009](https://github.com/user-attachments/assets/93926e0a-8672-4d60-8e7d-7a900d722059)

系统已经装了 homebrew，可是软件却提示未检测到。

另外，这个界面上的url是404
```

---

#### 277. #114 - 什么时候加上rabbitmq就更完美

- **状态**: closed
- **创建时间**: 2024-09-08
- **关闭时间**: 2024-11-07
- **作者**: @CoderHuu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/114

**描述**:

```
rabbitmq 使用越来越多了，希望加上
```

---

#### 278. #113 - 关于老版本php如何安装

- **状态**: closed
- **创建时间**: 2024-09-07
- **关闭时间**: 2025-01-06
- **作者**: @PrinceFPF
- **链接**: https://github.com/xpf0000/FlyEnv/issues/113

**描述**:

```
原工具提供的php版本并不是全部版本，请问如何获取php老版本，比如php5.4.5
```

---

#### 279. #112 - Bug: other version of node will not be installed after selected a version for active version

- **状态**: closed
- **创建时间**: 2024-09-04
- **关闭时间**: 2025-02-20
- **作者**: @nedaeidev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/112

**描述**:

```
in nvm mode i can install any version of node but when i selected a version of node (checked current) then other versions will not be installed
```

---

#### 280. #111 - new project option is not displayed in Windows

- **状态**: closed
- **创建时间**: 2024-09-02
- **关闭时间**: 2025-01-06
- **作者**: @nedaeidev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/111

**描述**:

```

![Untitled](https://github.com/user-attachments/assets/f0748590-8a68-4187-8165-558210c4cd95)


please fix it
```

---

#### 281. #110 - 希望工具箱可以加个自定义添加删除功能

- **状态**: closed
- **创建时间**: 2024-09-02
- **关闭时间**: 2024-10-12
- **作者**: @MageGojo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/110

**描述**:

```
这个集成环境太好了，可以在工具箱那里加个自定义添加工具的功能吗？哪怕是可以添加个链接跳转网站都可以
```

---

#### 282. #109 - Composer does not work on windows

- **状态**: closed
- **创建时间**: 2024-09-02
- **关闭时间**: 2024-09-04
- **作者**: @nedaeidev
- **链接**: https://github.com/xpf0000/FlyEnv/issues/109

**描述**:

```
After installing Composer, a folder will be created in which only the main file of Composer is located.
This file cannot be used alone for Windows and there must be a bat file with the same name in the folder, so that after adding the folder path to the system path, Windows can run the Composer.
Now we have access to composer out of the box as a command line.

tested with PhpWebStudy v4.2

Please add the bat file (composer.bat) with the following content in the Composer-x.x.x folder:

@echo off
php "%~dp0composer.phar" %*

```

---

#### 283. #108 - Windows: Add to path does not seem to work

- **状态**: closed
- **创建时间**: 2024-09-02
- **关闭时间**: 2024-11-07
- **作者**: @vesper8
- **链接**: https://github.com/xpf0000/FlyEnv/issues/108

**描述**:

```
Hi!

I've installed 4.2 on Windows and set up all the services. I added a host. Added php, mysql, composer.

I would like to run composer install now, or php artisan, but both commands fail because they can't find the binaries.

I've clicked on 'add to path' from the context menu inside PhpWebStudy. I've clicked on this many times, for PHP, for composer, for mysql.. and yet even after restarting the terminal, they are still not available on the path

Running `echo $env:PATH -split ';' in the terminal does not display them either.

Any idea what is going on?

Many thanks
```

---

#### 284. #106 - 请输入电脑用户密码，密码是正确的，可是一直提示错误。

- **状态**: closed
- **创建时间**: 2024-08-31
- **关闭时间**: 2024-09-08
- **作者**: @f3liiix
- **链接**: https://github.com/xpf0000/FlyEnv/issues/106

**描述**:

```
如题
```

---

#### 285. #105 - window版本的php的所有版本都没有redis扩展

- **状态**: closed
- **创建时间**: 2024-08-30
- **关闭时间**: 2024-10-08
- **作者**: @lvxiaoyan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/105

**描述**:

```
window版本的php的所有版本都没有redis扩展，这一点很糟糕，
没办法公司只让用windows自配机器，还有就似乎无法安装pecl去添加扩展，挣扎了两天。很无力
```

---

#### 286. #104 - 弹窗的滚动条又出现了

- **状态**: closed
- **创建时间**: 2024-08-28
- **关闭时间**: 2024-09-25
- **作者**: @baicaiit
- **链接**: https://github.com/xpf0000/FlyEnv/issues/104

**描述**:

```
![image](https://github.com/user-attachments/assets/8b49ce65-cf82-41e2-8598-323e39e0f50e)
这个问题在4.0修复了, 4.2又有了
```

---

#### 287. #103 - Issue Dtrabase and Phpmyadmin ( Windows Verison )

- **状态**: closed
- **创建时间**: 2024-08-26
- **关闭时间**: 2024-08-29
- **作者**: @re-LIF3
- **链接**: https://github.com/xpf0000/FlyEnv/issues/103

**描述**:

```
Windows Version:

MariaDB not working ( user root  pass: root )

MariaDB and Mysql very slow for access Phpmyadmin
```

---

#### 288. #102 - mac brew 安装 出现 SHA256 mismatch错误

- **状态**: closed
- **创建时间**: 2024-08-24
- **关闭时间**: 2024-08-28
- **作者**: @35598253
- **链接**: https://github.com/xpf0000/FlyEnv/issues/102

**描述**:

```
brew install phpwebstudy
Downloading https://github.com/xpf0000/PhpWebStudy/releases/download/v4.1.0/
Already downloaded: /Users/marc/Library/Caches/Homebrew/downloads/872088b6dce018d6894d7db50c80b6acea2de2fd708ab05f43eef242ff9e1aae--PhpWebStudy-4.1.0-arm64-mac.zip
Error: SHA256 mismatch
Expected: c695641943aa9eefa9ce08a46cda46edcdd71a2e3e9d7ebe6895ca6483b462d7
  Actual: ba02b4e4e66f5e7f48c2d60968836326c84a9f3cf060b6747c66b88002cec5d5
    File: /Users/marc/Library/Caches/Homebrew/downloads/872088b6dce018d6894d7db50c80b6acea2de2fd708ab05f43eef242ff9e1aae--PhpWebStudy-4.1.0-arm64-mac.zip
To retry an incomplete download, remove the file above.


brew 安装出现此错误

brew是重新安装的，macos 14.6.1
```

---

#### 289. #101 - 怎么安装PDO_PGSQL扩展？

- **状态**: closed
- **创建时间**: 2024-08-23
- **关闭时间**: 2024-09-25
- **作者**: @hb2013
- **链接**: https://github.com/xpf0000/FlyEnv/issues/101

**描述**:

```
在PHP安装扩展那里，就没有这个扩展，这个应该也比较常用吧？
```

---

#### 290. #100 - MAC版，同时安装Nginx和Caddy，在站点中设置不同端口。Nginx访问有问题

- **状态**: closed
- **创建时间**: 2024-08-20
- **关闭时间**: 2024-10-08
- **作者**: @hb2013
- **链接**: https://github.com/xpf0000/FlyEnv/issues/100

**描述**:

```
同时安装Nginx和Caddy，在站点中设置不同端口。Nginx访问有问题，也能访问，但是显示空白。Caddy可以访问。如果Caddy停掉，Nginx就正常了
```

---

#### 291. #99 - MAC版，安装PostgreSQL后，不能登陆

- **状态**: closed
- **创建时间**: 2024-08-20
- **关闭时间**: 2024-09-21
- **作者**: @hb2013
- **链接**: https://github.com/xpf0000/FlyEnv/issues/99

**描述**:

```
帐号：postgres密码：postgres，试过，帐号：postgres密码空，也试过，都提示FATAL:  role "postgres" does not exist

开始是16换成15还是不行。我看启动都正常

部分日志如下：
2024-08-20 22:29:01.433 CST [64071] LOG:  listening on IPv4 address "127.0.0.1", port 5432
2024-08-20 22:29:01.433 CST [64071] LOG:  listening on Unix socket "/tmp/.s.PGSQL.5432"
2024-08-20 22:29:01.437 CST [64074] LOG:  database system was shut down at 2024-08-20 22:29:00 CST
2024-08-20 22:29:01.440 CST [64071] LOG:  database system is ready to accept connections
2024-08-20 22:29:11.414 CST [64179] FATAL:  role "postgres" does not exist
2024-08-20 22:29:42.417 CST [64193] FATAL:  role "postgres" does not exist
```

---

#### 292. #98 - [建议]支持网站列表排序和置顶

- **状态**: closed
- **创建时间**: 2024-08-15
- **关闭时间**: 2024-09-20
- **作者**: @sunzehui
- **链接**: https://github.com/xpf0000/FlyEnv/issues/98

**描述**:

```
一些项目可能优先级更高，想要突出显示
```

---

#### 293. #96 - 建议增加roadrunner 用于加速PHP

- **状态**: closed
- **创建时间**: 2024-08-12
- **关闭时间**: 2025-04-08
- **作者**: @KnightBlood
- **链接**: https://github.com/xpf0000/FlyEnv/issues/96

**描述**:

```
建议增加roadrunner 用于加速PHP

顺便再加个tomcat？
```

---

#### 294. #94 - Windows安装后，集成环境都在C盘，希望默认就是安装时选择的路径

- **状态**: closed
- **创建时间**: 2024-07-25
- **关闭时间**: 2024-07-31
- **作者**: @sdkfuck
- **链接**: https://github.com/xpf0000/FlyEnv/issues/94

---

#### 295. #93 - You don't have permission to access this resource.

- **状态**: closed
- **创建时间**: 2024-07-22
- **关闭时间**: 2024-07-22
- **作者**: @Lupeiwen0
- **链接**: https://github.com/xpf0000/FlyEnv/issues/93

**描述**:

```
我添加了一个静态站点，配置好 nginx,和项目路径。打开配置好的域名，页面显示 "You don't have permission to access this resource."

I added a static site, configured nginx, and provided the project path. Open the configured domain name, and the page displays' You don't have permission to access this resource '

MacOS 14.5 | Apple M1 Pro

What should I do?
```

---

#### 296. #92 - Error: "User did not grant permission."

- **状态**: closed
- **创建时间**: 2024-07-09
- **关闭时间**: 2024-07-31
- **作者**: @DevinKuehn
- **链接**: https://github.com/xpf0000/FlyEnv/issues/92

**描述**:

```
Hi, first of all really nice app, it is really clean and easy to setup. I love it!

Nevertheless have a problem, i can't get it to work on Windows 11 Pro (22631.3737).

Whenever i try to start a service (except for DNS and FTP they start without problem) i get this toaster with "Error: User did not grant permission.".
![grafik](https://github.com/xpf0000/PhpWebStudy/assets/76881427/8a3d2803-076f-4968-bbd3-ca5d6badabdc)

There is nothing to be found regarding this problem in the logs.

And yes, i also tested it with admin privileges, but the same error.
```

---

#### 297. #91 - 工具箱能否新增生成随机字符串的工具 

- **状态**: closed
- **创建时间**: 2024-07-03
- **关闭时间**: 2024-10-12
- **作者**: @hellowhwei
- **链接**: https://github.com/xpf0000/FlyEnv/issues/91

**描述**:

```
工具箱能否新增生成随机字符串的工具  就是那种类似随机密码随机秘钥的那种
```

---

#### 298. #90 - menu 面板的选中复制感觉可以去掉

- **状态**: closed
- **创建时间**: 2024-06-23
- **关闭时间**: 2024-06-26
- **作者**: @baicaiit
- **链接**: https://github.com/xpf0000/FlyEnv/issues/90

**描述**:

```
![image](https://github.com/xpf0000/PhpWebStudy/assets/42630572/305a4d91-34ee-4405-a2df-d30a2adb6ec3)

```

---

#### 299. #89 - php突然就异常了

- **状态**: closed
- **创建时间**: 2024-06-08
- **关闭时间**: 2024-06-08
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/89

**描述**:

```
php81
/opt/homebrew/Cellar/php@8.1/8.1.23/sbin/php-fpm -n -v<br/>Error: Command failed: /opt/homebrew/Cellar/php@8.1/8.1.23/sbin/php-fpm -n -v<br/>dyld[1574]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib<br/> Referenced from: <98EDBA42-8747-3195-A8A6-1D329256A043> /opt/homebrew/Cellar/php@8.1/8.1.23/sbin/php-fpm<br/> Reason: tried: '/opt/homebrew/Cellar/php@8.1/8.1.23/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)

php82
/opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v<br/>Error: Command failed: /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v<br/>dyld[1578]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib<br/> Referenced from: <8225FD7D-2159-3B46-AB67-18AFF8F24255> /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm<br/> Reason: tried: '/opt/homebrew/Cellar/php/8.2.10/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)


	
/opt/homebrew/Cellar/php@8.1/8.1.23/	
/opt/homebrew/Cellar/php/8.2.10/	
/opt/homebrew/Cellar/php@7.2/7.2.34_9/	
/opt/homebrew/Cellar/php@7.3/7.3.33_7/	
/opt/homebrew/Cellar/php@7.4/7.4.33_4/	
/opt/homebrew/Cellar/php@8.0/8.0.30/	
/opt/homebrew/Cellar/php@8.3/8.3.0/	

全都突然这样了
```

---

#### 300. #88 - Problems Installing XDebug

- **状态**: closed
- **创建时间**: 2024-06-05
- **关闭时间**: 2024-06-06
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/88

**描述**:

```
When installing XDebug this happens. It's been like this for over 10 minutes and nothing happens, now sure how to "debug" this issue. 

<img width="1517" alt="Screenshot 2024-06-05 at 11 43 56" src="https://github.com/xpf0000/PhpWebStudy/assets/828596/1965d83f-101b-4de4-97f3-0aa1ecf88b94">

```

---

#### 301. #87 - mac 11.6 inter 安装存在问题？

- **状态**: closed
- **创建时间**: 2024-05-30
- **关闭时间**: 2024-06-26
- **作者**: @sujiewen
- **链接**: https://github.com/xpf0000/FlyEnv/issues/87

**描述**:

```

mac 11.6 inter 安装存在问题？安装nginx和mysql 一直卡在这里,下面是日志



# ------------------------------------------------------------------------------
Could not open file or uri for loading certificate to be updated from ../../../../test-runs/test_cmp_http/test.certout_newkey.pem: No such file or directory
cmp_main:apps/cmp.c:3384:CMP error: cannot set up CMP context
# cmp_main:apps/cmp.c:3225:CMP info: using section(s) 'Mock enrollment' of OpenSSL configuration file '../Mock/test.cnf'
# setup_request_ctx:apps/cmp.c:1694:CMP warning: given -subject '/C=AU/ST=Some-State/O=Internet Widgits Pty Ltd/CN=leaf' overrides the subject of '../../../../test-runs/test_cmp_http/test.certout_newkey.pem' for KUR
../../../../util/wrap.pl ../../../../apps/openssl cmp -config ../Mock/test.cnf -section 'Mock enrollment' -certout ../../../../test-runs/test_cmp_http/test.cert.pem -proxy '127.0.0.1:7890' -cmd kur -newkey new.key -newkeypass 'pass:' -certout ../../../../test-runs/test_cmp_http/test.certout_newkey.pem -out_trusted root.crt -oldcert ../../../../test-runs/test_cmp_http/test.certout_newkey.pem -server '[::1]:65259' => 1
    not ok 99 - kur certout overwriting oldcert
# ------------------------------------------------------------------------------
    #   Failed test 'kur certout overwriting oldcert'
    #   at test/recipes/80-test_cmp_http.t line 151.
    #          got: '0'
    #     expected: '1'
    # Looks like you failed 35 tests of 99.
not ok 5 - CMP app CLI Mock enrollment
# ------------------------------------------------------------------------------
# Looks like you failed 5 tests of 6.80-test_cmp_http.t ...................... 
Dubious, test returned 5 (wstat 1280, 0x500)
```

---

#### 302. #86 - Apache Access Logs

- **状态**: closed
- **创建时间**: 2024-05-07
- **关闭时间**: 2024-05-07
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/86

**描述**:

```
Hi there.

I was wondering if access logs are not being saved by default, my Apache access log is always empty.

I discovered this while having problems with cloudflared tunnels, it was working fine but after adding multiple tunnels (which also worked fine), when the computer went idle and i restarted I got 421 Misdirected Requests and tunnels stopped working, even restarting etc, searching for this it related so some Apache configuration but I'm trying to see access logs if I can debug ir further.

Any ideas ? 
```

---

#### 303. #85 - Github Changes when adding a New Host

- **状态**: closed
- **创建时间**: 2024-04-22
- **关闭时间**: 2024-04-23
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/85

**描述**:

```
This was a bummer, I just realised when adding hosts (projects), It must make a change to the files because all files in each project gets modified and my GIT says there are changes in all the files (even they are exactly the same, maybe it change the modified date of something...). I don't know why this happen but I had to return to MAMP because of this, each time I added a new host all the files in that project shows modified in GIT, this made a mess with my working projects...

I can't use it with this issue, wonder if you have any idea why this happened.

All the best.
```

---

#### 304. #84 - Apache Errors

- **状态**: closed
- **创建时间**: 2024-04-22
- **关闭时间**: 2024-07-31
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/84

**描述**:

```
I have everything working and the websites are displaying well and so but I seen some Apache Errors that seem off, I like to have everything clean maybe you know why this is happening:

[Mon Apr 22 06:49:59.896895 2024] [unixd:alert] [pid 76797] (9)Bad file descriptor: AH02155: getpwuid: couldn't determine user name from uid -1, you probably need to modify the User directive

I got a lot of this errors, not every single time I open pages but every now and then. 
```

---

#### 305. #83 - Error Installing MariaDB

- **状态**: closed
- **创建时间**: 2024-04-21
- **关闭时间**: 2024-04-21
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/83

**描述**:

```
I'm having the following error installing MariaDB 11.3.2

> Command: /opt/homebrew/Cellar/mariadb/11.3.2/bin/mysql_install_db --datadir=/Users/xcrap/Library/PhpWebStudy/server/mariadb/data-11.3 --basedir=/opt/homebrew/Cellar/mariadb/11.3.2/ --auth-root-authentication-method=normal
Installing MariaDB/MySQL system tables in '/Users/xcrap/Library/PhpWebStudy/server/mariadb/data-11.3' ...

2024-04-21  5:05:49 0 [ERROR] /opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadbd: unknown variable 'mysqlx-bind-address=127.0.0.1'
2024-04-21  5:05:49 0 [ERROR] Aborting


Installation of system tables failed!  Examine the logs in
/Users/xcrap/Library/PhpWebStudy/server/mariadb/data-11.3 for more information.

The problem could be conflicting information in an external

my.cnf files. You can ignore these by doing:

    shell> /opt/homebrew/Cellar/mariadb/11.3.2/bin/mysql_install_db --defaults-file=~/.my.cnf

You can also try to start the mariadbd daemon with:

    shell> /opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadbd --skip-grant-tables --general-log &

and use the command line tool /opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadb
to connect to the mysql database and look at the grant tables:

    shell> /opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadb -u root mysql
    MariaDB> show tables;

Try '/opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadbd --help' if you have problems with paths.  Using
--general-log gives you a log in /Users/xcrap/Library/PhpWebStudy/server/mariadb/data-11.3 that may be helpful.

The latest information about mariadb-install-db is available at
https://mariadb.com/kb/en/installing-system-tables-mysql_install_db
You can find the latest source at https://downloads.mariadb.org and
the maria-discuss email list at https://launchpad.net/~maria-discuss

Please check all of the above before submitting a bug report
at https://mariadb.org/jira


Error: 2024-04-21  5:05:49 0 [ERROR] /opt/homebrew/Cellar/mariadb/11.3.2//bin/mariadbd: unknown variable 'mysqlx-bind-address=127.0.0.1'
2024-04-21  5:05:49 0 [ERROR] Aborting
```

---

#### 306. #82 - Node Error on Start Services

- **状态**: closed
- **创建时间**: 2024-04-21
- **关闭时间**: 2024-04-21
- **作者**: @xcrap
- **链接**: https://github.com/xpf0000/FlyEnv/issues/82

**描述**:

```
Everything works fine except with this error every time I start my services (Apache, PHP, Mysql).

Error: DNS Server Start Fail: Need NodeJS, Not Found NodeJS In System Env

I do have node Installed as in NODEJS it appears the version 20.10.0 installed and checked as current.
I don't know if that's a specific NODE error, but since I'm not running any node services I thought it's strange.

Love the app, it's much better than MAMP just missing a Local Email Server for Testing and a NROK integration for creating Tunnels. Amazing work :)
```

---

#### 307. #81 - macos 14.4.1系统Intel芯片点击菜单栏报错

- **状态**: closed
- **创建时间**: 2024-04-02
- **关闭时间**: 2024-07-31
- **作者**: @canary920
- **链接**: https://github.com/xpf0000/FlyEnv/issues/81

**描述**:

```
如题，电脑是13-inch, 2020, Four Thunderbolt 3 ports  系统：最新版14.4.1
点击菜单栏图标报错：
Error processing argument at index 0, conversion failure from 
```

---

#### 308. #80 - Need Node

- **状态**: closed
- **创建时间**: 2024-04-01
- **关闭时间**: 2024-05-09
- **作者**: @imyellow
- **链接**: https://github.com/xpf0000/FlyEnv/issues/80

**描述**:

```
请问需要安装哪个Node版本才可以，启动服务时一直提示 Need Node，并且文件权限无法访问（目录已经`sudo chmod -R 755`），
<img width="993" alt="Snipaste_2024-04-01_13-17-34" src="https://github.com/xpf0000/PhpWebStudy/assets/3270774/91ea86ab-8d0f-4e44-8a94-0bf9b678daf5">

<img width="878" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/3270774/805e7f79-a7b3-477e-97b6-d6349311d732">

```

---

#### 309. #79 - 从v1.6.1升到v2.3.2后mysql启动报错，回退版本后正常

- **状态**: closed
- **创建时间**: 2024-03-17
- **关闭时间**: 2024-05-09
- **作者**: @hackbeex
- **链接**: https://github.com/xpf0000/FlyEnv/issues/79

**描述**:

```
v2.3.2的mysql启动报错：
` ` `
2024-03-17T03:44:12.739842Z 0 [ERROR] --initialize specified but the data directory has files in it. Aborting.
2024-03-17T03:44:12.739947Z 0 [ERROR] Aborting
` ` `

mysql版本5.7，配置文件没动，使用默认的
```

---

#### 310. #78 - 安装pdo_sqlsrv报错

- **状态**: closed
- **创建时间**: 2024-03-15
- **关闭时间**: 2024-03-20
- **作者**: @ctfang
- **链接**: https://github.com/xpf0000/FlyEnv/issues/78

**描述**:

```
Cannot find config.m4. 
Make sure that you run '/usr/local/Cellar/php@5.6/5.6.40_9//bin/phpize' in the top level source directory of the module

```

---

#### 311. #77 - 扩展列表，没有 pdo， mysql 等

- **状态**: closed
- **创建时间**: 2024-03-15
- **关闭时间**: 2024-03-15
- **作者**: @ctfang
- **链接**: https://github.com/xpf0000/FlyEnv/issues/77

---

#### 312. #76 - [BUG] Http Serve module was error working.

- **状态**: closed
- **创建时间**: 2024-03-15
- **关闭时间**: 2024-05-09
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/76

**描述**:

```
Http Serve module, i'll  get an http ip with port
it's 

> http://localhost:61879/   http://10.11.162.228:61879/

But  when open this url in web browser get wrong web site. always redirect to  noratel.com  content

<img width="256" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/5618679/53e2fde8-068f-4dfb-9e71-0c4d8be53332">
<img width="573" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/5618679/00daca4e-2edb-42ad-8194-10ea83bda931">
<img width="640" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/5618679/526e0230-d29f-4071-99b6-0e04b2f09a69">
<img width="1684" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/5618679/3ef9bef0-8697-4c4b-a975-f038c5888d68">

```

---

#### 313. #75 - 【已解决，请升级到v2.3.2】最新2.3.0版本更新后，编辑或新建站点保存一直在转圈

- **状态**: closed
- **创建时间**: 2024-03-13
- **关闭时间**: 2024-03-24
- **作者**: @RobertZSun
- **链接**: https://github.com/xpf0000/FlyEnv/issues/75

**描述**:

```
【本issue已解决】有问题的用户请升级到，当前v2.3.2问题已修复

----------

OS： MacOS 14.4 (23E214)

2.3.0之前的Version 2.2.5 没有任何问题，

升级后，编辑之前创建的站点，更改项目路径， 点击右上角保存，保存按钮一直在转圈，保存不上，

尝试删除这个站点，然后进行新建，新建的站点ssl证书都开启两个开关，ssl和自动管理证书，然后选择nginx 重写模板未 thinkphp，然后就还是保存不上，保存按钮在不停转圈
```

---

#### 314. #74 - 关于PHP7.4.33安装pdo_sqlsrv时的问题

- **状态**: closed
- **创建时间**: 2024-03-11
- **关闭时间**: 2024-03-24
- **作者**: @suu1923
- **链接**: https://github.com/xpf0000/FlyEnv/issues/74

**描述**:

```
2. pdo_sqlsrv扩展是区分PHP版本的, php版本小于7.0, pdo_sqlsrv扩展使用版本是3.0.1,php7.0-php7.2, pdo_sqlsrv扩展使用版本是4.3.0, php版本大于7.2, pdo_sqlsrv扩展使用版本是5.10.1

以上是文档上所说，但是我在本地安装好后，确是5.11.1

<img width="425" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/21141087/4c413d80-6837-4821-a3b6-d4fcd33350b2">
<img width="1100" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/21141087/944c8be2-47b5-4a6e-9dde-35a8b0c8aa41">

```

---

#### 315. #73 - phpwebstudy(nginx/php(7.2/7.3/7.4) 访问就是502

- **状态**: closed
- **创建时间**: 2024-03-05
- **关闭时间**: 2024-05-09
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/73

**描述**:

```
这套是使用的ci，支持php7.2~7.4，然后从去年开始使用phpwebstudy开始就一直有502的问题。
` ` `
#fastcgi都修改过
/tmp/phpwebstudy-php-cgi-72.sock
127.0.0.1:9000
` ` `
都是这样，然后没办法使用phpwebstudy进行开发。

目前如果要修改或者开发这套程序还得再开docker部署宝塔开发的。**使用宝塔部署正常访问（php7.2~8.1都试过可以）**
刚好看到有人发的类似的问题，想请教一下这个怎么来定位问题，怎么解决呢？

**谢谢！**

下面是使用phpwebstudy启用访问产生的日志
` ` `

nginx-access
127.0.0.1 - - [05/Mar/2024:15:08:50 +0900] "GET / HTTP/1.1" 502 559 "-" "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0"

nginx-error
2024/03/05 15:08:50 [error] 21948#0: *6 kevent() reported about an closed connection (54: Connection reset by peer) while reading response header from upstream, client: 127.0.0.1, server: dev1.local.test, request: "GET / HTTP/1.1", upstream: "fastcgi://127.0.0.1:9000", host: "dev1.local.test"

php-fpm日志
[05-Mar-2024 15:08:50] WARNING: [pool www] child 22202 exited on signal 11 (SIGSEGV) after 171.258840 seconds from start
[05-Mar-2024 15:08:50] NOTICE: [pool www] child 23009 started

redis
21390:M 05 Mar 2024 15:08:49.313 . 0 clients connected (0 replicas), 1030624 bytes in use
` ` `
```

---

#### 316. #72 - 升级2.1.1会把数据直接清了

- **状态**: closed
- **创建时间**: 2024-02-27
- **关闭时间**: 2024-02-27
- **作者**: @itlaosiji
- **链接**: https://github.com/xpf0000/FlyEnv/issues/72

**描述**:

```
升级2.1.1会把数据直接清了。。。

```

---

#### 317. #71 - phpwebstudy2.0.0 + nginx + php8.2 post提交就会报502

- **状态**: closed
- **创建时间**: 2024-02-21
- **关闭时间**: 2024-05-09
- **作者**: @classic-up
- **链接**: https://github.com/xpf0000/FlyEnv/issues/71

**描述**:

```
我安装了最新版phpwebstudy2.0.0
在phpwebstudy内安装了nginx
在phpwebstudy内安装了PHP8.2
phpwebstudy内redis使用7版本，安装并复制连接添加到php配置文件内

我是有phpwebstudy配置了两个站点，其中一个使用php7.3，运行起来完全没有问题
另一个PHP8.2的站点，正常get访问没有问题，但是当我需要post提交表单数据就会502，当我频繁刷新的情况下，可能会出现成功的情况，但是大部分post提交表单情况下都是502

下面是遇到502情况的日志，希望能帮助解决问题

站点日志
2024/02/21 13:12:38 [error] 51852#0: *6 upstream prematurely closed connection while reading response header from upstream, client: 127.0.0.1, server: 127.0.0.1, request: "POST /teachers/login HTTP/1.1", upstream: "fastcgi://unix:/tmp/phpwebstudy-php-cgi-82.sock:", host: "127.0.0.1", referrer: "http://127.0.0.1/teachers/login"
2024/02/21 13:12:38 [error] 51852#0: *6 upstream prematurely closed connection while reading response header from upstream, client: 127.0.0.1, server: 127.0.0.1, request: "POST /teachers/login HTTP/1.1", upstream: "fastcgi://unix:/tmp/phpwebstudy-php-cgi-82.sock:", host: "127.0.0.1", referrer: "http://127.0.0.1/teachers/login"

php日志
[21-Feb-2024 13:12:38] NOTICE: [pool www] child 51941 started
[21-Feb-2024 13:12:38] WARNING: [pool www] child 51939 exited on signal 11 (SIGSEGV) after 0.657027 seconds from start
[21-Feb-2024 13:12:38] NOTICE: [pool www] child 51942 started
[21-Feb-2024 13:12:38] WARNING: [pool www] child 51940 exited on signal 11 (SIGSEGV) after 0.640433 seconds from start
[21-Feb-2024 13:12:38] NOTICE: [pool www] child 51943 started
[21-Feb-2024 13:12:38] WARNING: [pool www] child 51941 exited on signal 11 (SIGSEGV) after 0.641604 seconds from start
[21-Feb-2024 13:12:38] NOTICE: [pool www] child 51944 started


```

---

#### 318. #70 - 升级2.0后，之前已安装的nginx,php,mysql,redis,node都不见了，并且版本也刷不出来，切换brew源也保存失败...

- **状态**: closed
- **创建时间**: 2024-02-18
- **关闭时间**: 2024-02-18
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/70

**描述**:

```
RT
```

---

#### 319. #69 - 新版本的 brew 切换是不是有问题，一直加载不出来

- **状态**: closed
- **创建时间**: 2024-01-31
- **关闭时间**: 2024-02-18
- **作者**: @bingxinti
- **链接**: https://github.com/xpf0000/FlyEnv/issues/69

**描述**:

```
新版本的 brew 切换是不是有问题，一直加载不出来
我是 mac m3 电脑，本地命令行都正常可以
brew search 和 install 但是 phpwebstudy 里面死活不行。
我检查了 brew 也升级了，反复卸载了几次，软件里面就是不行。
软件里面还配置了代理，切换了多次多个源都不行。。

气死我了这情况。。。。。。
```

---

#### 320. #68 - 请求增加hosts api接口

- **状态**: closed
- **创建时间**: 2024-01-16
- **关闭时间**: 2024-01-23
- **作者**: @Physton
- **链接**: https://github.com/xpf0000/FlyEnv/issues/68

**描述**:

```
希望能增加获取hosts（/etc/hosts 文本格式）的http接口。

使用自带的写入hosts可能会跟其他的一些hosts管理软件造成冲突。
所以希望能提供一个http接口。
或者提供一个生成好的hosts文件路径，修改站点后，程序能自动更新该文件。

感谢大大的辛苦付出~~
```

---

#### 321. #67 - 建议增加默认站内设置

- **状态**: closed
- **创建时间**: 2024-01-13
- **关闭时间**: 2024-02-27
- **作者**: @itlaosiji
- **链接**: https://github.com/xpf0000/FlyEnv/issues/67

**描述**:

```
建议增加设置默认站点
我设置默认站点后 这样我直接用我的内网IP访问的时候就会自动访问到默认站内。
这样我在不改NGINX的配置情况下就不需要把内网IP绑到站点上
```

---

#### 322. #66 - 所有模块的版本管理里面,一直显示可用版本获取中... 一直获取不到

- **状态**: closed
- **创建时间**: 2024-01-06
- **关闭时间**: 2024-01-07
- **作者**: @zxyaust
- **链接**: https://github.com/xpf0000/FlyEnv/issues/66

**描述**:

```
不管是否能翻墙,都是一直在获取可用版本,github访问肯定没问题的,打开测试过,检查新版本也能检查到
<img width="1019" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/16290254/d2b92a3f-7331-4983-8ab2-1cd59dacd196">
不论是php,nginx,mysql,等等,所有的都是如此
```

---

#### 323. #65 - 能再来个内网穿透不？方便开发的时候，别人直接访问测试。。。

- **状态**: closed
- **创建时间**: 2024-01-05
- **关闭时间**: 2024-01-05
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/65

**描述**:

```
如题
```

---

#### 324. #64 - 建议增加开机 不启动指定Php 版本

- **状态**: closed
- **创建时间**: 2023-12-01
- **关闭时间**: 2023-12-28
- **作者**: @ftlh2005
- **链接**: https://github.com/xpf0000/FlyEnv/issues/64

**描述**:

```
建议增加开机 不启动指定Php 版本
有的版本不需要开启就自动启动
```

---

#### 325. #63 - ftp

- **状态**: closed
- **创建时间**: 2023-11-16
- **关闭时间**: 2023-12-14
- **作者**: @pivotf
- **链接**: https://github.com/xpf0000/FlyEnv/issues/63

**描述**:

```
可以添加一个本地ftp功能吗
```

---

#### 326. #62 - hosts虚拟主机  过多  解析会很慢

- **状态**: closed
- **创建时间**: 2023-11-16
- **关闭时间**: 2023-12-14
- **作者**: @hellowhwei
- **链接**: https://github.com/xpf0000/FlyEnv/issues/62

**描述**:

```
hosts虚拟主机配置多了 解析会很慢 基本都在5s + 
```

---

#### 327. #61 - 版本更新v1.2.0之后出现了502了

- **状态**: closed
- **创建时间**: 2023-11-15
- **关闭时间**: 2023-12-14
- **作者**: @mezongzi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/61

**描述**:

```
<img width="1412" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/7627445/9910100f-0f3b-446b-af7e-f593423eca6d">
但是明明php是启动的状态哦
<img width="1158" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/7627445/a5b4ea16-719b-47f1-b585-1d97a39ecd31">

最后怎么解决的呢：需要手动启php-fpm74
<img width="719" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/7627445/8522aea2-6ae5-4d2a-a99e-596124150111">
我的电脑是： mac pro m2 max 16寸 96G内存

```

---

#### 328. #60 - sg11 在Apple M2 Pro 不行呢

- **状态**: closed
- **创建时间**: 2023-10-18
- **关闭时间**: 2023-11-12
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/60

**描述**:

```
extension==../Cellar/php@7.4/7.4.33_2/pecl/20190902/ixed.dar 
已放在php.ini里面
```

---

#### 329. #59 - http serve使用下来觉得应该加一个本机IP的链接地址

- **状态**: closed
- **创建时间**: 2023-10-10
- **关闭时间**: 2023-10-11
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/59

**描述**:

```
路径:/Users/xxx/HttpServe
链接:http://localhost:61574/

http serve使用下来觉得应该加一个本机IP的链接地址不然局内网访问的时候还要去找一下本机IP
建议优化一下
```

---

#### 330. #58 - TypeError: Cannot read properties of null (reading 'split')

- **状态**: closed
- **创建时间**: 2023-10-08
- **关闭时间**: 2023-11-12
- **作者**: @shijie1991
- **链接**: https://github.com/xpf0000/FlyEnv/issues/58

**描述**:

```
每次 启动 提示 TypeError: Cannot read properties of null (reading 'split')
```

---

#### 331. #57 - macos 14 设置PHP为全局版本失败

- **状态**: closed
- **创建时间**: 2023-10-05
- **关闭时间**: 2023-10-23
- **作者**: @yi4396
- **链接**: https://github.com/xpf0000/FlyEnv/issues/57

**描述**:

```
macos14.0系统  安装了php8.2.11和7.4.33两个版本，使用软件切换全局版本时，点击 设置为全局版本 按钮无反应。
```

---

#### 332. #56 - redis 多版本启动失败

- **状态**: closed
- **创建时间**: 2023-09-25
- **关闭时间**: 2023-10-11
- **作者**: @shijie1991
- **链接**: https://github.com/xpf0000/FlyEnv/issues/56

**描述**:

```
76553:C 25 Sep 2023 11:05:26.910 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
76553:C 25 Sep 2023 11:05:26.910 # Redis version=6.2.13, bits=64, commit=00000000, modified=0, pid=76553, just started
76553:C 25 Sep 2023 11:05:26.910 # Configuration loaded
76553:M 25 Sep 2023 11:05:26.911 * monotonic clock: POSIX clock_gettime
76553:M 25 Sep 2023 11:05:26.913 * Running mode=standalone, port=6379.
76553:M 25 Sep 2023 11:05:26.913 # Server initialized
76553:M 25 Sep 2023 11:05:26.913 # Can't handle RDB format version 11
76553:M 25 Sep 2023 11:05:26.913 # Fatal error loading the DB: Invalid argument. Exiting.



服务中 显示运行中
```

---

#### 333. #55 - PHP 安装 redis 扩展报错

- **状态**: closed
- **创建时间**: 2023-09-15
- **关闭时间**: 2023-09-26
- **作者**: @shijie1991
- **链接**: https://github.com/xpf0000/FlyEnv/issues/55

**描述**:

```
安装扩展执行命令:
/Users/ xxxx/Library/PhpWebStudy/server/cache/php-redis.sh /Users/xxxx/Library/PhpWebStudy/server/cache /usr/local/Cellar/php/8.2.10/ 5.3.7 -x86_64 ****
如安装失败, 可尝试复制命令自行尝试安装
curl: option -C: expected a positive numerical parameter
curl: try 'curl --help' or 'curl --manual' for more information
1
```

---

#### 334. #53 - 如何自定义 port 安装的 PHP 版本的路径？

- **状态**: closed
- **创建时间**: 2023-09-13
- **关闭时间**: 2023-09-15
- **作者**: @guanguans
- **链接**: https://github.com/xpf0000/FlyEnv/issues/53

**描述**:

```
检测不到用 port 安装的 PHP。我尝试配置自定版本路径似乎也不管用。可否支持一下 port。

<img width="809" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/22309277/7d78b1ff-521f-4382-be60-18bba64b68c5">

```

---

#### 335. #52 - 无法调用Redis

- **状态**: closed
- **创建时间**: 2023-09-09
- **关闭时间**: 2023-09-09
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/52

**描述**:

```
redis已安装，但是php   $redis = new redis();  程序直接死掉了

![截屏2023-09-09 下午5 23 45](https://github.com/xpf0000/PhpWebStudy/assets/131668725/b396f2b1-79b3-410b-89ca-5b767c4f5eb2)

```

---

#### 336. #51 - 软件出现重复的 php版本和报错

- **状态**: closed
- **创建时间**: 2023-09-01
- **关闭时间**: 2023-09-10
- **作者**: @woden234
- **链接**: https://github.com/xpf0000/FlyEnv/issues/51

**描述**:

```
 mac m1 电脑 phpwebstudy软件出现重复的 php版本,有以下问题：
开启时报错
<img width="1421" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/16451600/ed9f43bc-e09f-4ec6-90f5-409fdfeb5b75">
关闭时也报错
<img width="1429" alt="image" src="https://github.com/xpf0000/PhpWebStudy/assets/16451600/278028ff-4614-485f-ac56-a6dda2f1c173">



```

---

#### 337. #49 - swoole建议

- **状态**: closed
- **创建时间**: 2023-08-30
- **关闭时间**: 2023-08-31
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/49

**描述**:

```
建议安装swoole扩展时开启，--enable-openssl选择。
否则很多无法运行swoole项目,会报以下错误
` ` `
you must configure with `--enable-openssl` to support ssl connection when compiling Swoole 
` ` `
```

---

#### 338. #48 - Nginx pretty url / rewrite isn't working on mac

- **状态**: closed
- **创建时间**: 2023-08-23
- **关闭时间**: 2023-09-08
- **作者**: @pixluser
- **链接**: https://github.com/xpf0000/FlyEnv/issues/48

**描述**:

```
Hello,

// I just discovered your fantastic software, because I didn't want to use something like MAMP, or MAMP pro.
// Thank you for it, it's very fast and neat!

The problem I have :
Using urls like /xxxx/xxx with Nginx give me 404 Not Found.
From a fresh install  PhpWebStudy-1.0.46-arm64.dmg (on M1 pro)

I refreshed permalinks in wordpress too, two times. Didn't work for me.
---

Is there a config hack needed?


PS: Cannot use apache too, (basic version and brew version too) : got forbidden on 8080
```

---

#### 339. #47 - [建议] host站点支持分组

- **状态**: closed
- **创建时间**: 2023-06-16
- **关闭时间**: 2023-07-06
- **作者**: @laobei
- **链接**: https://github.com/xpf0000/FlyEnv/issues/47

**描述**:

```
二级树状归纳站点信息, 类似mamp pro
```

---

#### 340. #46 - 启动后会提示更新失败

- **状态**: closed
- **创建时间**: 2023-06-15
- **关闭时间**: 2023-07-06
- **作者**: @buildnewapp
- **链接**: https://github.com/xpf0000/FlyEnv/issues/46

**描述**:

```
macbook air m2 , 13.4 

检查更新
检查更新失败
好
```

---

#### 341. #45 - php 扩展sg11和fileinfo 能不能加进去？

- **状态**: closed
- **创建时间**: 2023-06-04
- **关闭时间**: 2023-06-08
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/45

**描述**:

```
php 扩展sg11能不能加扩展里面进去？
```

---

#### 342. #44 - PhpWebStudy 正常运行，重启动后，读不所有安装软件，不能正常运行

- **状态**: closed
- **创建时间**: 2023-05-16
- **关闭时间**: 2023-05-19
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/44

**描述**:

```
PhpWebStudy 正常运行，重启动后，读不所有安装软件，不能正常运行！我本机已安装php,nginx,mysql 先前正常工作
```

---

#### 343. #43 - 版本管理不显示可以下载的版本

- **状态**: closed
- **创建时间**: 2023-05-14
- **关闭时间**: 2023-05-15
- **作者**: @yi4396
- **链接**: https://github.com/xpf0000/FlyEnv/issues/43

**描述**:

```
系统版本：MacOS M1  13.3.1
安装ARM版本的APP，打开之后 
Nginx只展示本地之前通过brew安装的1.23.4的版本；
切换到PHP，展示了之前安装的7.4和8.2版本，版本管理tab一直转圈，显示：可用版本获取中...
切换到MongoDB，本地之前没有安装，版本管理一直转圈，显示：可用版本获取中...
```

---

#### 344. #42 - Mysql / Redis 等扩展如何修改为使用本地 Docker 已经安装好的

- **状态**: closed
- **创建时间**: 2023-05-08
- **关闭时间**: 2023-05-09
- **作者**: @hgx
- **链接**: https://github.com/xpf0000/FlyEnv/issues/42

---

#### 345. #41 - 如果不同的站点可以使用不同的端口就好了。

- **状态**: closed
- **创建时间**: 2023-04-26
- **关闭时间**: 2023-05-09
- **作者**: @xiaohu8728
- **链接**: https://github.com/xpf0000/FlyEnv/issues/41

**描述**:

```
比如：http://www.test1.com:8081
           http://www.test2.com:8082
```

---

#### 346. #40 - 请问命令行的php -v版本和composer对应的php版本这块如何适配

- **状态**: closed
- **创建时间**: 2023-04-25
- **关闭时间**: 2023-05-09
- **作者**: @MRchenao
- **链接**: https://github.com/xpf0000/FlyEnv/issues/40

---

#### 347. #39 - mongo安装使用失败

- **状态**: closed
- **创建时间**: 2023-04-18
- **关闭时间**: 2023-04-21
- **作者**: @ypf138199209
- **链接**: https://github.com/xpf0000/FlyEnv/issues/39

**描述**:

```
![WX20230418-110715@2x](https://user-images.githubusercontent.com/20056143/232661944-43cc7c5e-22cd-4abf-8138-7d4d9179aa8f.png)
![WX20230418-111351@2x](https://user-images.githubusercontent.com/20056143/232662069-58a8d436-7a26-4831-ac2c-61b60eca244b.png)
![WX20230418-110807@2x](https://user-images.githubusercontent.com/20056143/232662102-aa6665b0-99a7-47b3-b814-504cfcfbe09b.png)

```

---

#### 348. #38 - 开始安装能运行 ，电脑重启后提示权限问题

- **状态**: closed
- **创建时间**: 2023-04-13
- **关闭时间**: 2023-04-13
- **作者**: @lxc939134342
- **链接**: https://github.com/xpf0000/FlyEnv/issues/38

**描述**:

```
开始安装能运行 ，电脑重启后提示权限问题

<img width="260" alt="image" src="https://user-images.githubusercontent.com/13358254/231773762-ef0a7e72-5790-431f-b061-4baeaf5a2340.png">

设置了权限还是这个问题
<img width="410" alt="image" src="https://user-images.githubusercontent.com/13358254/231774097-c819147b-7889-47da-b67d-c6357da5855c.png">

```

---

#### 349. #37 - nginx ssl配置

- **状态**: closed
- **创建时间**: 2023-04-12
- **关闭时间**: 2023-04-17
- **作者**: @ioxuy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/37

**描述**:

```
选择路径后,如果路径有空格,会启动出错!
需要给路径加上引号
ssl_certificate
ssl_certificate_key
```

---

#### 350. #36 - 无法清除自定义路径历史

- **状态**: closed
- **创建时间**: 2023-03-25
- **关闭时间**: 2023-04-10
- **作者**: @AaronComo
- **链接**: https://github.com/xpf0000/FlyEnv/issues/36

**描述**:

```
在自定义版本路径里添加mysql路径后并删除后, 每次查看sql版本控制仍会出现这个路径, 在只能清除phpwebstudy的所有配置文件才能解决
```

---

#### 351. #35 - 第一次运行后，之前的Nginx配置没有了

- **状态**: closed
- **创建时间**: 2023-03-17
- **关闭时间**: 2023-03-17
- **作者**: @chentao1006
- **链接**: https://github.com/xpf0000/FlyEnv/issues/35

**描述**:

```
欲哭无泪
```

---

#### 352. #34 - 最新版本上没有PHP8.1的源

- **状态**: closed
- **创建时间**: 2023-03-03
- **关闭时间**: 2023-03-12
- **作者**: @DenisZheng
- **链接**: https://github.com/xpf0000/FlyEnv/issues/34

**描述**:

```
如题
```

---

#### 353. #33 - 新版本切换PHP

- **状态**: closed
- **创建时间**: 2023-02-27
- **关闭时间**: 2023-03-02
- **作者**: @HelplessMan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/33

**描述**:

```
更新新版本后，PHP可以同时启动2个版本的吗？设置全局切换也不管用。。 话说如果同时启动多个版本。具体是使用那个版本？

另外单独设置一个全局版本的话。感觉只有命令行生效了(因为以前那种切换方式, 例如我 php8.1的安装了扩展， 8.0的没安装。如果在使用的时候出错了我就知道当前是用的那个版本的。现在更新后，切换了8.1 ，命令行变了。但是 nginx这里没有变)
```

---

#### 354. #31 - 能否加一个mongodb服务的管理

- **状态**: closed
- **创建时间**: 2023-02-20
- **关闭时间**: 2023-03-12
- **作者**: @ZcPers
- **链接**: https://github.com/xpf0000/FlyEnv/issues/31

**描述**:

```
如题，希望能加一个mongodb服务的管理。
```

---

#### 355. #30 - 支持 Hosts 站点列表点击直接跳转

- **状态**: closed
- **创建时间**: 2023-02-14
- **关闭时间**: 2023-02-20
- **作者**: @ghost
- **链接**: https://github.com/xpf0000/FlyEnv/issues/30

**描述**:

```
目前 Hosts 页面想访问配置的站点，要么手动复制地址，要么点击站点后面菜单复制，很麻烦，可以支持一下站点列表点击后直接调用默认浏览器打开对应页面。
```

---

#### 356. #29 - 不支持macos 13.1 / Intel平台?

- **状态**: closed
- **创建时间**: 2023-02-13
- **关闭时间**: 2023-02-13
- **作者**: @xiusin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/29

**描述**:

```
<img width="503" alt="image" src="https://user-images.githubusercontent.com/36065131/218426701-aff5e4f6-8764-43e2-8080-b1fbd045519b.png">


<img width="277" alt="image" src="https://user-images.githubusercontent.com/36065131/218426839-4c0ed93d-68b0-4cc8-a9f7-21d2aeeebbbb.png">

```

---

#### 357. #28 - php多版本的时候，终端命令执行php的时候希望可以能指定版本

- **状态**: closed
- **创建时间**: 2023-02-03
- **关闭时间**: 2023-02-08
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/28

**描述**:

```
比如我安装了
PHP7.3
PHP7.4
PHP8.2

然后项目终端命令php start.php的时候是以PHP7.4去执行的，现在好像是以最后安装的那个版本。
如果可以在PhpWebStudy里能指定版本，或者可以设置多个
php73 start.php
php74 start.php
php82 start.php

以及默认指定的php start.php

然后现在卸载掉默认的PHP版本后，执行php命令会提示“command not found: php”
自己手动设置才可以

`brew link --overwrite --force php@7.4
`

还有一个问题，安装多个php版本后，我重启php会有起不来的情况。
An another FPM instance seems to already listen on /tmp/phpwebstudy-php-cgi-82.sock
```

---

#### 358. #27 - PhpWebStudy很好用，强烈支持推荐，提一点点后期优化功能

- **状态**: closed
- **创建时间**: 2023-02-03
- **关闭时间**: 2023-02-08
- **作者**: @by-addy
- **链接**: https://github.com/xpf0000/FlyEnv/issues/27

**描述**:

```
换mac后没有便捷的套件环境，所以直接一直使用docker来开发。
最近发现PhpWebStudy，这个对于mac上开发php来说，真的是太好用了。
已推荐他人使用，支持！


希望后面能有更好的优化得更好。
个人习惯把程序界面退出，但是程序别退了，然后希望把图标加到菜单栏，点击图标会有快捷启动,关闭，打开主界面便捷功能等。
然后希望tools可以做成插件，让大家一起贡献。FeHelper这个插件里面的功能都是非常合适复写的，好用。

```

---

#### 359. #26 - You don't have permission to access this resource

- **状态**: closed
- **创建时间**: 2023-01-08
- **关闭时间**: 2023-02-02
- **作者**: @oftenliu
- **链接**: https://github.com/xpf0000/FlyEnv/issues/26

**描述**:

```
设置host后，访问报“You don't have permission to access this resource”。
![image](https://user-images.githubusercontent.com/20364898/211188998-81d1abfe-189d-4ba9-a51d-43dacb2a8cdb.png)
![image](https://user-images.githubusercontent.com/20364898/211189020-89641a9e-1356-4b19-a971-d8da641d2cc3.png)
```

---

#### 360. #25 - Http Serve外网问题

- **状态**: closed
- **创建时间**: 2022-12-13
- **关闭时间**: 2023-02-02
- **作者**: @dcto
- **链接**: https://github.com/xpf0000/FlyEnv/issues/25

**描述**:

```
Http Serve功能，监听地址不应该是 localhost , 否则外部无法访问
```

---

#### 361. #24 - 安装后打开窗口弹出如下提示

- **状态**: closed
- **创建时间**: 2022-11-24
- **关闭时间**: 2022-11-25
- **作者**: @youlinmi
- **链接**: https://github.com/xpf0000/FlyEnv/issues/24

**描述**:

```
Cannot read properties of undefined (reading 'handleCommand')
```

---

#### 362. #23 - m1 打开后 版本控制没有安装选项

- **状态**: closed
- **创建时间**: 2022-11-02
- **关闭时间**: 2022-11-08
- **作者**: @askofcc
- **链接**: https://github.com/xpf0000/FlyEnv/issues/23

**描述**:

```
如题 
<img width="1200" alt="image" src="https://user-images.githubusercontent.com/44773069/199410748-6ed88f84-d03a-483e-8d5e-f210ea25c373.png">

```

---

#### 363. #22 - Feature: 会考虑出windows吗

- **状态**: closed
- **创建时间**: 2022-10-28
- **关闭时间**: 2022-11-08
- **作者**: @busyhe
- **链接**: https://github.com/xpf0000/FlyEnv/issues/22

---

#### 364. #21 - 系统版本12.6，m1芯片，卡在输入密码

- **状态**: closed
- **创建时间**: 2022-10-17
- **关闭时间**: 2022-10-18
- **作者**: @bilisheep
- **链接**: https://github.com/xpf0000/FlyEnv/issues/21

**描述**:

```
在将app移入application后，打开。输入正确密码后仍显示密码错误
```

---

#### 365. #20 - Host站点管理的目录和nginx配置里的root 目录有关系吗

- **状态**: closed
- **创建时间**: 2022-08-24
- **关闭时间**: 2022-11-08
- **作者**: @crkmythical
- **链接**: https://github.com/xpf0000/FlyEnv/issues/20

**描述**:

```
![image](https://user-images.githubusercontent.com/82789723/186414886-387bb334-ebdb-4949-aefb-d120d236e7a3.png)

```

---

#### 366. #19 - 利用应用中的brew下载失败

- **状态**: closed
- **创建时间**: 2022-07-24
- **关闭时间**: 2022-07-24
- **作者**: @fe1w0
- **链接**: https://github.com/xpf0000/FlyEnv/issues/19

**描述**:

```
<img width="712" alt="image" src="https://user-images.githubusercontent.com/50180586/180639435-c8c488b9-823e-49ff-a83f-69badb199417.png">

` ` `bash
Error: Oh My Zsh can't be loaded from: . You need to run zsh instead.
Here's the process tree:

 PPID   PID COMMAND
    1  9623 /Applications/PhpWebStudy.app/Contents/MacOS/PhpWebStudy
 9623 12928 /Applications/PhpWebStudy.app/Contents/Frameworks/PhpWebStudy Helper.app/Contents/MacOS/PhpWebStudy Helper /Applications/PhpWebStudy.app/Contents/Resources/app.asar/dist/electron/static/fork/brew.js
12928 12934 bash /Users/fe1w0/Library/PhpWebStudy/server/cache/brew-cmd.sh -arm64 install shivammathur/php/php@5.6

/Users/fe1w0/.p10k.zsh: line 16: local: can only be used in a function
/Users/fe1w0/.p10k.zsh: line 20: builtin: setopt: not a shell builtin
/Users/fe1w0/.p10k.zsh: line 22: syntax error near unexpected token `)'
/Users/fe1w0/.p10k.zsh: line 22: `() {'
-arm64 brew install --verbose shivammathur/php/php@5.6
` ` `
🤧难受，自己尝试修改，没有成功。
```

---

#### 367. #18 - 无法读取到pecl安装的扩展

- **状态**: closed
- **创建时间**: 2022-07-21
- **关闭时间**: 2022-11-08
- **作者**: @HelplessMan
- **链接**: https://github.com/xpf0000/FlyEnv/issues/18

**描述**:

```
有没有办法使PHP加载 本机brew安装的php.ini文件呢? 现在发现以前的 PHP 安装的扩展在使用 `phpwebstudy` 的 php 后无法加载到... 

` ` `
➜ lib php -m
[PHP Modules]
bcmath
bz2
calendar
Core
ctype
curl
date
dba
dom
exif
FFI
fileinfo
filter
ftp
gd
gettext
gmp
hash
iconv
intl
json
ldap
libxml
mbstring
mysqli
mysqlnd
odbc
openssl
pcntl
pcre
PDO
pdo_dblib
pdo_mysql
PDO_ODBC
pdo_pgsql
pdo_sqlite
pgsql
Phar
posix
pspell
readline
Reflection
session
shmop
SimpleXML
soap
sockets
sodium
SPL
sqlite3
standard
sysvmsg
sysvsem
sysvshm
tidy
tokenizer
xdebug
xlswriter     ----> 这里
xml
xmlreader
xmlwriter
xsl
zip
zlib

[Zend Modules]
Xdebug
` ` `

报错日志：

` ` `
[21-Jul-2022 20:00:42] NOTICE: reloading: execvp("/opt/homebrew/Cellar/php/8.1.8/sbin/php-fpm", {"/opt/homebrew/Cellar/php/8.1.8/sbin/php-fpm", "-p", "/Users/code/Library/PhpWebStudy/server/php/common/var", "-y", "/Users/code/Library/PhpWebStudy/server/php/common/conf/php-fpm.conf", "-c", "/Users/code/Library/PhpWebStudy/server/php/common/conf/php.ini"})
[21-Jul-2022 20:00:42] NOTICE: PHP message: PHP Warning:  PHP Startup: Unable to load dynamic library 'xlswriter' (tried: /opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter (dlopen(/opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter, 0x0009): tried: '/opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter' (no such file), '/usr/local/lib/xlswriter' (no such file), '/usr/lib/xlswriter' (no such file)), /opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter.so (dlopen(/opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter.so, 0x0009): tried: '/opt/homebrew/Cellar/php/8.1.8/lib/php/20210902/xlswriter.so' (no such file), '/usr/local/lib/xlswriter.so' (no such file), 
` ` `
```

---

#### 368. #17 - 大佬,发现一个严重问题,我尝试使用php7.1,发现能安装成功,但是切换的地方不能选择7.1

- **状态**: closed
- **创建时间**: 2022-07-07
- **关闭时间**: 2022-07-08
- **作者**: @ypf138199209
- **链接**: https://github.com/xpf0000/FlyEnv/issues/17

---

#### 369. #16 - 哈咯,基于nginx,hosts创建的站点能否设置不记录access日志?

- **状态**: closed
- **创建时间**: 2022-06-25
- **关闭时间**: 2022-11-08
- **作者**: @catw0rld
- **链接**: https://github.com/xpf0000/FlyEnv/issues/16

**描述**:

```
![image](https://user-images.githubusercontent.com/68625234/175763488-71ff46e6-0b7d-456f-afbc-5ecf41de36df.png)

```

---

#### 370. #15 - 未来会支持不同项目不同的php版本吗

- **状态**: closed
- **创建时间**: 2022-06-20
- **关闭时间**: 2023-02-02
- **作者**: @wcz0
- **链接**: https://github.com/xpf0000/FlyEnv/issues/15

**描述**:

```
未来会支持不同项目不同得php版本吗
```

---

#### 371. #14 - debug调试

- **状态**: closed
- **创建时间**: 2022-06-11
- **关闭时间**: 2022-11-08
- **作者**: @Tukali
- **链接**: https://github.com/xpf0000/FlyEnv/issues/14

**描述**:

```
拓展那里可以将XDebug的调试组件单独放出来，自动化配置嘛，就像phpstudy一样，调试是非常重要的一个功能
```

---

#### 372. #13 - macOS 13 测试版下会卡在「输入电脑密码」

- **状态**: closed
- **创建时间**: 2022-06-08
- **关闭时间**: 2022-11-08
- **作者**: @JJYing
- **链接**: https://github.com/xpf0000/FlyEnv/issues/13

**描述**:

```
好像其他需要电脑密码的 app 也有不少挂了的
```

---

#### 373. #9 - 安装服务失败,请看一下怎么解决,我百度了半天还是无法解决

- **状态**: closed
- **创建时间**: 2021-08-07
- **关闭时间**: 2022-05-07
- **作者**: @ypf138199209
- **链接**: https://github.com/xpf0000/FlyEnv/issues/9

**描述**:

```
redis-5.0.8 未安装,开始安装,请稍候...
Error: redis@5.0.8: Calling `cellar` in a bottle block is disabled! Use `brew style --fix` on the formula to update the style or use `sha256` with a `cellar:` argument instead.
Please report this issue to the homebrew/core tap (not Homebrew/brew or Homebrew/core), or even better, submit a PR to fix it:
  /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/redis@5.0.8.rb:9

安装失败

![image](https://user-images.githubusercontent.com/20056143/128609588-61bd87f4-a219-4493-8958-2bd74e7b5765.png)


按照错误提示,命令行:brew style --fix /usr/local/Homebrew/Library/Taps/homebrew/homebrew-core/Formula/redis@5.0.8.rb

![image](https://user-images.githubusercontent.com/20056143/128609888-576d49cf-1fea-4724-af30-8a988c241afd.png)

然后运行还是一样的报错,能是什么原因吗
```

---

#### 374. #8 - 可以使用mac自带的php和Apache环境吗？

- **状态**: closed
- **创建时间**: 2021-05-12
- **关闭时间**: 2022-05-07
- **作者**: @umqmrz
- **链接**: https://github.com/xpf0000/FlyEnv/issues/8

**描述**:

```
mac自带php和Apache，可以直接配置吗？  您的软件读不出来自带的配置啊
```

---

#### 375. #7 - 密码错误，请重新输入

- **状态**: closed
- **创建时间**: 2021-04-26
- **关闭时间**: 2021-07-29
- **作者**: @MrQiYin
- **链接**: https://github.com/xpf0000/FlyEnv/issues/7

**描述**:

```
大佬，我刚下载了Mac版的，然后在打开软件后第一步，【请输入电脑用户密码】，输入密码后显示【密码错误，请重新输入】
```

---

#### 376. #6 - 安装/切换php出现错误..以及安装redis出现错误

- **状态**: closed
- **创建时间**: 2021-04-08
- **关闭时间**: 2021-04-21
- **作者**: @ypf138199209
- **链接**: https://github.com/xpf0000/FlyEnv/issues/6

**描述**:

```
![image](https://user-images.githubusercontent.com/20056143/113974697-ef17b700-9870-11eb-9460-6884472c8b71.png)
![image](https://user-images.githubusercontent.com/20056143/113974730-fd65d300-9870-11eb-98b8-e04fe1e4de9f.png)
电脑是M1芯片,homebrew安装在/opt/homebrew/,这个大佬您没有去识别
```

---

#### 377. #5 - 如何添加扩展？比如swoole

- **状态**: closed
- **创建时间**: 2021-02-28
- **关闭时间**: 2021-03-21
- **作者**: @skystian
- **链接**: https://github.com/xpf0000/FlyEnv/issues/5

**描述**:

```
展示的扩展太少了，如何添加扩展？比如swoole
```

---

#### 378. #2 - 能否新增运行目录功能？

- **状态**: closed
- **创建时间**: 2020-07-01
- **关闭时间**: 2020-07-01
- **作者**: @scz-u
- **链接**: https://github.com/xpf0000/FlyEnv/issues/2

**描述**:

```
rt
```

---

#### 379. #1 - 点击重启按钮后就不能再次点击了。

- **状态**: closed
- **创建时间**: 2020-06-30
- **关闭时间**: 2020-07-04
- **作者**: @scz-u
- **链接**: https://github.com/xpf0000/FlyEnv/issues/1

**描述**:

```
点击重启按钮后就不能再次点击了，老板修复一下吧
```

---

