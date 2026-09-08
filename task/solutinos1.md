# FlyEnv 解决方案页面「关于 XXX」内容专项重构

## 任务目标

目前 FlyEnv 的 Solution / 解决方案页面已经完成整体页面结构和视觉设计。

其中 `Next.js` 页面里的「关于 Next.js」区域已经调整得比较合理，可以作为本次任务的**质量参考**。

当前其他解决方案页面中的「关于 XXX」区域存在明显问题：

- 大量页面使用同一套内容模板；
- 只是替换技术名称、核心能力标签和少量名词；
- “真实的 XXX 本地环境不只有一个进程”下面的内容高度雷同；
- 数据库、Redis、HTTPS、邮件、存储等内容被机械地套到不同技术中；
- 熟悉该技术的开发者看不出页面是专门针对这个技术编写的；
- 页面虽然内容变多了，但技术信息价值不高。

本次任务只解决这个问题：

> **重新编写除 Next.js 外其他 Solution 页面中的「关于 XXX」部分，使每个页面真正体现该技术自己的开发模型、核心能力、典型用途和本地开发特点。**

不要大范围改版页面，也不要重写整个 Solution 页面。

---

# 一、参考页面

重点参考当前 `Next.js` Solution 页面中的「关于 Next.js」部分。

参考的是：

- 内容密度；
- 信息层次；
- 技术准确性；
- 对真实开发工作流的描述方式；
- 从“技术是什么”自然过渡到“为什么本地开发需要这些服务”的逻辑。

## 重要

**不要把 Next.js 页面本身变成新的统一内容模板。**

Next.js 只是质量基准，不是要求所有页面都必须：

1. 两段介绍；
2. 6 个核心能力；
3. 5 个应用场景；
4. 5 个本地服务；

机械复制这种数量和结构。

不同技术本身就应该有不同重点。

---

# 二、本次修改范围

## 只重点修改

每个 Solution 页面的：

```text
关于 XXX
````

这一整个内容区域。

包括其中已有的：

* 技术简介；
* 核心能力；
* 常见使用场景；
* “真实的 XXX 本地环境……”说明区块；
* 该区域内部的标签、短描述、小标题等。

## 原则上不要修改

除非为了修复明显技术错误，否则不要改：

* Hero；
* 页面标题；
* 本地项目技术栈；
* FlyEnv 如何提供帮助；
* 配置本地环境；
* 相关解决方案；
* CTA；
* Footer；
* 页面整体布局；
* CSS / 视觉样式。

本任务是**内容专项重构，不是页面重新设计**。

---

# 三、最重要的原则：统一 UI，不统一内容逻辑

Solution 页面可以拥有统一的视觉骨架。

但：

> **UI Schema 可以统一，Content Schema 不能机械统一。**

禁止通过下面这种方式批量生成内容：

```text
Laravel -> PHP + Database + Redis + HTTPS + Storage
Django -> Python + Database + Redis + HTTPS + Storage
NestJS -> Node.js + Database + Redis + HTTPS + Storage
...
```

也禁止：

```text
复制一个 about 数据对象
→ 替换 framework name
→ 替换 capabilities
→ 替换几个 service 名称
```

这正是本次需要修复的问题。

---

# 四、每个技术必须先理解，再写页面

在修改某一个 Solution 前，先在内部回答下面这些问题。

不要求把分析过程写进页面，但最终页面内容必须建立在这些答案之上。

## 1. 这个技术本质上是什么？

例如：

* Web framework？
* Backend framework？
* CMS？
* E-commerce system？
* Runtime？
* Database？
* Development tool？
* Self-hosted application？

不要使用过度宽泛的定义。

---

## 2. 这个技术最有辨识度的核心能力是什么？

必须选择真正能代表该技术的能力。

例如 Next.js：

* App Router
* Server Components
* SSR / SSG / ISR
* Route Handlers
* Middleware

而不是：

* Web Development
* Database
* Performance
* Security

后者太泛，没有识别度。

---

## 3. 开发者通常用它来做什么？

使用符合这个技术真实生态的场景。

不要所有页面都写：

```text
SaaS
后台管理
企业应用
API
MVP
```

除非这些确实是该技术非常典型的用途。

---

## 4. 一个真实的本地开发环境通常包含什么？

这是最重要的一步。

要考虑：

* Runtime
* Package manager
* Development server
* Database
* Cache
* Queue
* Worker
* Scheduler
* Message broker
* Frontend build tool
* SMTP
* Object storage
* Search engine
* Reverse proxy
* HTTPS
* Static / media files
* CLI tools
* framework-specific processes

但：

> **不是要求全部写进去。**

只选择这个技术实际常见、有意义的内容。

---

## 5. 这个技术有哪些特有的本地开发工作流？

优先体现这些信息。

比如：

### Laravel

应自然想到：

* PHP
* Composer
* `.env`
* Artisan
* Migration
* Queue Worker
* Scheduler
* Redis
* Vite
* MySQL / PostgreSQL
* Mail

而不只是：

```text
PHP + Database + Redis + HTTPS
```

### Django

应自然想到：

* Python
* venv
* pip / uv / Poetry
* `manage.py`
* migrations
* PostgreSQL / MySQL
* Redis
* Celery
* RabbitMQ
* static files
* media files
* SMTP

### NestJS

应自然想到：

* Node.js
* npm / pnpm
* Modules
* Dependency Injection
* REST
* GraphQL
* WebSocket
* Prisma / TypeORM
* Redis
* BullMQ
* RabbitMQ
* Microservices

### WordPress

应该更多围绕：

* PHP
* MySQL / MariaDB
* WordPress Core
* themes
* plugins
* uploads
* permalinks
* local domain
* HTTPS
* WP-CLI

而不是照 Laravel 的逻辑去写。

### Magento

应考虑它真实开发环境里的：

* PHP
* Composer
* MySQL
* Elasticsearch / OpenSearch
* Redis
* Cron
* queues
* static content
* cache
* frontend build

Magento 的本地环境复杂度明显高于普通 PHP 项目，页面应该体现这种区别。

---

# 五、「关于 XXX」区域应该回答什么？

用户看完这一块以后，应该至少理解三个问题：

### 1.

> XXX 是什么，它与同类技术相比有什么典型特征？

### 2.

> 开发者通常拿 XXX 来构建什么？

### 3.

> 真正开发一个 XXX 项目时，本地电脑上通常不仅仅运行 XXX 本身，还会运行哪些相关组件？

这三个问题比“把 FlyEnv 支持的模块列一遍”重要得多。

---

# 六、内容结构要求

保留当前页面大体视觉布局。

可以继续使用类似：

```text
关于 XXX

简介

核心能力

常见使用场景

一个真实的 XXX 本地开发环境……
```

这种视觉结构。

但是每块内容必须根据技术重新决定。

---

## A. 简介

建议 1～2 个短段落。

第一段：

解释这个技术是什么。

第二段：

说明它在真实开发中通常和哪些工作流、基础服务或者工具产生关系。

不要写百科式长篇介绍。

不要写营销话术。

不要单纯重复 Hero Description。

---

## B. 核心能力

核心能力标签必须具有**技术辨识度**。

例如：

Laravel：

```text
Eloquent ORM
Artisan
Queues
Events
Scheduler
Blade
```

Django：

```text
ORM
Admin
Authentication
Forms
Migrations
ASGI
```

NestJS：

```text
Modules
Dependency Injection
REST & GraphQL
Guards
WebSockets
Microservices
```

不要为了保持数量一致强行凑 6 个。

4～7 个均可。

---

## C. 常见使用场景

必须符合该技术真实定位。

例如 NestJS 可以突出：

```text
REST / GraphQL API
Microservices
WebSocket Services
Backend for Frontend
Queue Workers
```

而 Laravel 可以偏：

```text
SaaS Applications
Business Systems
E-commerce Backends
Content Applications
API Backends
```

不要所有框架都生成完全一样的场景。

---

# 七、重点重写「真实本地环境」区域

当前页面普遍存在的问题是：

```text
运行时
数据库
缓存与后台任务
HTTPS 与本地域名
邮件与存储
```

大量页面完全一致。

必须重构。

---

## 这一块的目的

不是介绍 FlyEnv 有什么。

而是告诉开发者：

> **“一个真实的 XXX 项目在本地开发时，通常到底有哪些东西在一起工作？”**

---

## Laravel 示例思路

可以围绕：

```text
PHP + Composer
Laravel Application
MySQL / PostgreSQL
Redis
Queue Worker
Scheduler
Vite
Mail
```

例如：

### PHP 与 Composer

运行 Laravel 应用并管理 PHP 项目依赖。

### 数据库

Laravel 项目通常通过 Eloquent 连接 MySQL 或 PostgreSQL，并使用 Migration 管理结构变化。

### Redis、Queue 与 Cache

Redis 经常承担缓存、Session 或 Queue 后端，开发过程中还可能需要同时运行 `queue:work`。

### Scheduler

包含定时任务的项目需要运行 Laravel Scheduler。

### Vite

带前端资源的 Laravel 项目通常还需要 Node.js 与 Vite 开发服务器。

这里明显就是 Laravel。

---

## Django 示例思路

可以围绕：

```text
Python Environment
manage.py
Database
Redis
Celery
RabbitMQ
Static / Media
SMTP
```

例如可以出现：

```text
python manage.py migrate
Celery Worker
Redis / RabbitMQ broker
static files
media uploads
```

而不是继续套 Laravel 的描述。

---

## NestJS 示例思路

围绕：

```text
Node.js
Nest dev server
Database + ORM
Redis
BullMQ
RabbitMQ
Microservices
WebSocket
```

如果项目使用 Prisma / TypeORM，可以自然提到它们。

---

# 八、不要为了 FlyEnv 强行添加依赖

非常重要。

不能因为：

```text
FlyEnv 支持 Redis
```

就在所有 Solution 里写 Redis。

不能因为：

```text
FlyEnv 支持 Nginx
```

就在所有项目中把 Nginx 描述成必需组件。

不能因为：

```text
FlyEnv 支持 Node.js
```

就在所有 PHP / Python 项目中把 Node.js 当作核心依赖。

---

## 需要区分

### Core

大部分此类项目基本都会使用。

### Common

很常见，但并非必须。

### Optional

只有某些项目需要。

页面文字不一定必须显式写 `Core / Common / Optional`，但内容逻辑中必须有这种区分。

不要暗示所有列出的组件都是强制依赖。

---

# 九、FlyEnv 的出现方式

「关于 XXX」主要是在讲 XXX，而不是讲 FlyEnv。

FlyEnv 只需要自然出现，用于连接到后面的页面内容。

例如：

```text
一个简单的 Laravel 项目可能只需要 PHP、Composer 和数据库。
随着项目加入缓存、队列、定时任务、前端构建或邮件功能，本地开发环境通常会同时运行 Redis、Queue Worker、Scheduler、Node.js 或本地 SMTP 服务。
FlyEnv 可以把这些本地服务集中到一个环境中管理。
```

这是合理的。

不要每一个小项都写：

```text
FlyEnv 可以……
FlyEnv 可以……
FlyEnv 可以……
FlyEnv 可以……
```

后面已经有专门的：

```text
FlyEnv 如何提供帮助
```

这里不要重复营销。

---

# 十、技术准确性要求

这是本任务的硬性要求。

对每一个 Solution：

1. 先阅读现有页面内容；
2. 判断它具体是什么技术；
3. 根据该技术真实生态重新写；
4. 如果项目仓库中已有 Guide、Demo、Feature、文档介绍，优先参考现有信息；
5. 如果本地资料不足且允许联网，可以优先参考该项目官方文档；
6. 不确定的信息不要编造；
7. 不要把“不常见但技术上能用”的组合写成“典型环境”。

例如：

```text
Django technically can use X
```

不代表：

```text
X is a typical Django local development dependency
```

必须区分。

---

# 十一、文案风格

保持当前官网风格：

* 简洁；
* 技术导向；
* 开发者语气；
* 不营销；
* 不夸张；
* 不写“强大”“领先”“革命性”；
* 不写无意义 SEO 堆词；
* 不写百科长文。

优先写：

```text
是什么
实际做什么
为什么本地开发需要它
```

而不是：

```text
帮助开发者提高效率
提供强大的开发体验
满足现代应用开发需求
```

后者全部属于空话。

---

# 十二、不要机械追求页面完全一致

不同技术允许出现合理差异。

例如：

Laravel 可能重点讲：

```text
Queue
Scheduler
Vite
```

Django：

```text
Celery
Static / Media
```

Magento：

```text
OpenSearch
Redis
Cron
```

WordPress：

```text
Themes
Plugins
Uploads
WP-CLI
```

Next.js：

```text
SSR
Server Components
Route Handlers
```

这种差异是正确的。

不要为了视觉统一把内容强行压成完全相同的概念。

---

# 十三、页面质量验收规则

每修改一个页面，都进行以下自检。

## Test 1：技术名称替换测试

把页面里的技术名称替换成另一个框架。

例如：

```text
Laravel -> Django
```

如果大部分内容仍然成立：

> 说明内容过于泛化，必须继续重写。

---

## Test 2：专业开发者识别测试

隐藏页面标题和 Logo。

只看「关于 XXX」内容。

熟悉该技术的开发者应该能够大致判断出：

> 这是 Laravel / Django / NestJS / Magento / WordPress……

如果无法判断，说明内容不够具体。

---

## Test 3：专有概念测试

每个页面应自然出现若干这个技术真正有代表性的概念。

例如 Laravel：

```text
Composer
Artisan
Eloquent
Migration
Queue Worker
Scheduler
Vite
```

不要求全部出现，但必须有足够的技术特征。

---

## Test 4：重复内容测试

对多个 Solution 的「关于 XXX」区域进行横向比较。

尤其检查：

* 相同句式；
* 相同段落结构；
* 相同小标题；
* 只换名词的句子；
* 通用描述。

不要让 20 个页面看起来像 AI 批量改写。

---

## Test 5：依赖真实性测试

逐项确认：

```text
这个组件真的是该技术本地开发中的典型组成吗？
```

如果只是“可以使用”，但实际并不常见，不要强行加入。

---

# 十四、Next.js 页面处理规则

当前 Next.js 页面已经调整完成。

## 默认不要修改 Next.js 页面。

只把它作为：

* 信息密度参考；
* 技术具体程度参考；
* 内容与 FlyEnv 衔接方式参考。

不要因为本任务再次批量生成而把 Next.js 覆盖掉。

---

# 十五、执行步骤

## Step 1

找到所有 Solution 页面及其数据来源。

先了解：

* 页面是 Markdown 独立维护；
* Vue/VitePress 数据驱动；
* JSON / TS / JS 配置驱动；
* 还是共享组件 + 数据对象生成。

不要一开始就批量替换。

---

## Step 2

列出需要修改的 Solution。

排除：

```text
Next.js
```

---

## Step 3

逐个分析技术。

为每个技术在内部形成一个简短 profile：

```yaml
name:
type:
runtime:
package_manager:
distinctive_features:
common_use_cases:
core_local_components:
common_local_components:
optional_local_components:
framework_specific_workflows:
```

这个 profile 用于帮助写页面。

**不要求新增到项目仓库中，除非现有架构适合保存这些数据。**

---

## Step 4

基于 profile 重写「关于 XXX」。

不要使用统一文本生成器机械替换变量。

---

## Step 5

完成所有页面后进行横向 review。

至少随机选择：

* 一个 PHP 技术；
* 一个 Python 技术；
* 一个 Node.js 技术；
* 一个 CMS / application；
* 一个复杂系统；

比较其 About 内容。

确认它们明显属于不同技术。

---

## Step 6

运行项目已有的：

* lint；
* typecheck；
* build；
* relevant tests。

确保内容修改没有造成页面构建问题。

---

# 十六、特别注意已有错误

本次修改过程中如果发现明显错误，例如：

* 技术名称大小写不对；
* 框架定位错误；
* 把可选组件写成必须组件；
* 错误的数据库 / runtime；
* 错误的官方概念；
* framework capability 描述错误；

可以在「关于 XXX」范围内一并修复。

不要借机进行无关页面重构。

---

# 十七、最终输出

完成后给出：

1. 修改过的 Solution 列表；
2. 每个 Solution 的 About 内容主要调整点；
3. 发现并修复的技术错误；
4. 没有修改但存在疑问的内容；
5. build / lint / test 执行结果。

同时确认：

> Next.js 页面没有被本次批量操作覆盖。

---

# 最终验收标准

本任务最重要的验收标准只有一句话：

> **如果把页面标题、Logo 和技术名称隐藏，仅通过「关于 XXX」区域的内容，也应该能够明显判断出页面讲的是哪一种技术。**

如果做不到，就继续修改，不视为完成。