# FlyEnv 官网流量增长合并优化方案

> 合并来源：`task/chat1.md`、`task/plan-projects-seo.md`、`task/chat1-growth-plan.md`。
> 制定日期：2026-08-25
>
> 这是方案评审稿，暂不包含代码改动。

## 1. 最终判断

FlyEnv 的主要问题不是功能不足，而是功能没有被组织成用户会搜索的入口。用户搜索的是“Run Laravel locally”“WordPress local development”“Laragon alternative”，而不是“支持多少运行时和数据库”。

增长模型应从：

```text
模块清单 → 官网 → 等待搜索流量
```

改为：

```text
真实项目/迁移问题 → 搜索与内容分发 → 项目页/迁移页 → 下载 FlyEnv
```

SEO 是长期主线，但不能是唯一验证手段。每个主题必须同时具备搜索需求、FlyEnv 的明确解决方式、真实可复现步骤，以及发布后 7 天内可观测的分发或转化信号。

## 2. 方案取舍

| 方案 | 优点 | 风险 | 结论 |
|---|---|---|---|
| 只做 SEO 内容矩阵 | 长期复利 | 反馈慢，容易盲目生产 | 不单独采用 |
| 只做广告/社媒 | 数天内看到点击 | 停止投入后流量消失 | 只用于验证 |
| SEO + 项目页 + 分发 + 转化埋点 | 既有即时反馈，又积累资产 | 需要每周复盘 | **采用** |

Kimi 方案中的 5 个项目页和 4 个迁移页保留为 90 天目标，但采用阶段闸门：第一轮先做 3 个项目页和 2 个迁移页，验证通过后再补齐其余页面。

## 3. 90 天目标

### 3.1 业务目标

建立并验证：

```text
非品牌搜索/外部内容 → 项目或迁移落地页 → 下载点击
```

不承诺某个具体流量数字，先验证：

- 能区分品牌词、非品牌词、Direct 和低质量流量。
- 至少 3 个项目页完成真实运行验证。
- 至少 1 个项目页和 1 个迁移页产生明确下载信号。
- 建立继续、修改、停止页面的统一规则。

### 3.2 目标 URL

```text
/projects/
/projects/laravel
/projects/wordpress
/projects/erpnext
/projects/gitea
/projects/django

/migrate/from-laragon
/migrate/from-xampp
/migrate/from-herd
/migrate/from-docker
```

英文和中文各有对应页面。未通过验证的主题不强行扩张，也不批量生成相似页面。

## 4. URL 与信息架构

### 4.1 文件结构

```text
docs/projects/index.md
docs/projects/laravel.md
docs/projects/wordpress.md
docs/projects/erpnext.md
docs/projects/gitea.md
docs/projects/django.md

docs/migrate/from-laragon.md
docs/migrate/from-xampp.md
docs/migrate/from-herd.md
docs/migrate/from-docker.md
```

中文镜像放在 `docs/zh/projects/` 和 `docs/zh/migrate/`。

### 4.2 旧 URL 保护

现有 `/guide/run-laravel-use-flyenv` 不删除。第一阶段：

1. 保留旧页面可访问。
2. 首屏增加指向 `/projects/laravel` 的明显入口。
3. 避免两页复制大段正文。
4. 确认部署环境支持永久重定向后，再决定 canonical 或 301。

在重定向能力未验证前，不贸然删除旧页面。

### 4.3 导航

英文：`Download | Projects | Migrate | Guide | Community | License`

中文：`下载 | 项目实战 | 迁移指南 | 指南 | 社区 | 许可证`

FlyPHPServer 是否移出主导航不预先决定，先依据实际点击和定位评估。导航只做最小改动。

## 5. 页面规范

### 5.1 Project 页面

```markdown
---
title: Run {Project} Locally on Windows, macOS & Linux | FlyEnv
head:
  - - meta
    - name: description
      content: ...
---

# Run {Project} Locally with FlyEnv

## What You Need
## Step-by-Step Setup
## Watch the Demo
## Common Issues
## FAQ
## What's Next
```

每页必须有：

- 项目适用人群和最终效果。
- 所需运行时、数据库、队列、邮件或 Web Server。
- 3～6 个真实可复现步骤。
- 当前版本的真实截图或录屏。
- Windows/macOS/Linux 的实际差异。
- 2～3 个真实搜索或用户反馈问题。
- 下载、GitHub、视频 CTA 和相关 Guide 内链。

写作红线：写“如何把项目跑起来”，不写“FlyEnv 支持哪些模块”；不堆关键词，不写空 FAQ，不使用未验证的截图、版本号或性能数字。

### 5.2 Migrate 页面

```markdown
# Move from {Tool} to FlyEnv

## When FlyEnv Is a Better Fit
## Feature and Workflow Comparison
## Migration Steps
## What Changes in Your Daily Workflow
## Common Issues
## FAQ
## Download FlyEnv
```

迁移页不攻击竞品，重点回答适用人群、项目保留方式、工作流变化和不建议迁移的情况。

## 6. 数据与验证基建

### 6.1 GA4 事件

统一检查或补充：

```text
download_click
github_click
project_cta_click
video_play
license_view
outbound_click
```

每个事件记录 `page`、`page_type`、`project`、`locale`、`os`、`source`、`campaign`。复用现有组件和站点脚本，不引入新的分析平台；下载事件在 GA4 后台标记为关键事件。

### 6.2 Search Console 周报

每周记录 `Query`、`Clicks`、`Impressions`、`CTR`、`Position`、`Landing page`、`Country`、`Device`。重点看非品牌词和排名 8～20 位的页面，不用总用户数代替 SEO 判断。

### 6.3 三个验证时钟

| 时间 | 指标 | 能回答什么 |
|---|---|---|
| 0～7 天 | 分发访问、CTA、视频播放、参与度 | 主题和卖点是否有人兴趣 |
| 2～6 周 | 索引、展示、CTR、查询词 | 页面是否被发现和理解 |
| 6～12 周 | 排名、自然点击、下载 | SEO 是否值得扩展 |

## 7. 分阶段执行

### Phase 0：基建与基线（第 1 周）

交付：数据口径、信息架构草案、首批主题评分。

- 检查 GA4 下载、GitHub、视频和外链事件。
- 建立 GSC/GA4 周报模板。
- 分析首页、License、Guide 和 Direct 流量质量。
- 从 GitHub、下载反馈和 YouTube 评论中整理 5～10 个真实用户案例。
- 按搜索需求、产品适配、素材可用性、竞争差距给候选主题评分。
- 在 `docs/.vitepress/config.mts` 中规划 Projects/Migrate 导航，但暂不大改首页视觉。

闸门：没有可复现步骤、真实素材或明确搜索意图的主题，不进入 Phase 1。

### Phase 1：首轮项目和迁移页（第 2～4 周）

首轮只做：

1. `/projects/laravel`
2. `/projects/wordpress`
3. `/projects/erpnext` 或 `/projects/gitea`
4. `/migrate/from-laragon`
5. `/migrate/from-xampp`

项目选择规则：Laravel 优先复用现有指南；WordPress 需求大但必须补真实流程；ERPNext/Gitea 优先选择已有实录素材；Django 作为下一轮候选，除非基线数据证明更优。

每页流程：实际安装运行 → 截图 → EN/ZH 页面 → 视频、Guide、GitHub 和下载内链 → 48 小时内分发 → 记录首周数据。

闸门：至少一个项目页和一个迁移页出现有效点击或下载信号，才进入下一批。

### Phase 2：第二轮扩展（第 5～8 周）

根据 Phase 1 数据补齐：

- `/projects/gitea`
- `/projects/erpnext`
- `/projects/django`
- `/migrate/from-herd`
- `/migrate/from-docker`

Docker 页以现有 [FlyEnv vs Docker & XAMPP](/Users/x/Desktop/WorkSpace/GitHub/FlyEnv-Doc/docs/guide/flyenv-vs-docker-xampp.md:1) 为基础扩展，不重复生产相同文章。

同时优化有展示但 CTR 低的页面，以及排名 8～20 位页面的首屏、内链和 CTA。

### Phase 3：规模化与淘汰（第 9～12 周）

- 决定下一批项目：Symfony、Next.js、Spring Boot、Nextcloud、Ghost 等。
- 只有通过验证的主题才复制页面模板。
- 合并意图重复、互相竞争的页面。
- Footer 增加少量高价值 SEO 入口。
- 评估 Technology 页面；不做没有搜索或产品差异的模块目录页。
- 复盘 90 天数据，确定下一季度重点。

## 8. 发布后的 48 小时分发

每个 Project/Migrate 页面发布后：

- YouTube 描述和置顶评论链接回落地页。
- GitHub README、Discussions 或 Release 说明添加链接。
- 发布一篇面向具体问题的社区短帖。
- 选择一个相关开发者社区做实用分享，不重复刷屏。
- 外链全部加 UTM。
- 从首页、导航和相关 Guide 建立内部链接。

如果允许投入预算，可用 300～500 美元短期验证：

```text
run laravel on windows
laragon alternative
php development environment windows
run wordpress locally
```

广告只用于验证标题、卖点和 CTA，不作为长期流量方案。

## 9. 页面判断规则

| 数据表现 | 判断 | 动作 |
|---|---|---|
| 没有展示 | 未索引、链接不足或意图错误 | 检查技术和分发，再决定是否改主题 |
| 有展示、CTR 低 | 标题/摘要不匹配 | 改标题、摘要和首屏 |
| 有点击、停留短 | 没有满足搜索意图 | 重写开头、步骤和结果展示 |
| 停留好、下载少 | CTA 或产品价值不清晰 | 调整 CTA、对比、截图和下载路径 |
| 有下载、无复访 | 安装/首次使用体验可能有问题 | 收集反馈，不继续单纯扩 SEO |

时间边界：14 天内不因无排名删除真实页面；28 天有展示但 CTR 低先改标题；6～8 周仍无展示、无分发访问、无转化，再停止扩展该主题。

## 10. 技术实施与验收

### 10.1 预计涉及文件

```text
docs/.vitepress/config.mts       # 导航和站点配置
docs/index.md                    # 首页微创调整
docs/projects/*.md               # Hub 和项目页
docs/zh/projects/*.md            # 中文镜像
docs/migrate/*.md                # 迁移页
docs/zh/migrate/*.md             # 中文镜像
docs/components/AppDownButton/*  # 下载事件（如现有埋点不足）
```

不先创建复杂卡片组件或独立 CMS，优先使用 Markdown、现有组件和 VitePress 能力。

### 10.2 SEO 基础要求

每个新页面具备唯一 title、description、H1、正确站内链接、EN/ZH 互链和 Open Graph 信息。页面内容真实存在时才添加 FAQ 或 Video Schema。

当前 VitePress 已有 sitemap 配置，首阶段不手工拆分 sitemap；规模和 Search Console 数据证明需要时再扩展。

### 10.3 构建与人工验收

仓库当前没有统一自动化测试命令，因此不假设已有 `tests/` 体系。每个阶段至少执行：

```bash
yarn docs:build
```

并人工检查新 URL、EN/ZH 链接、title/description/H1、下载和 GitHub CTA、图片视频、旧 Guide URL。页面数量增加后，再单独增加 frontmatter 校验脚本。

## 11. 每周工作节奏

- 周一：复盘 GA4、GSC 和 UTM 数据。
- 周二：优化一页现有内容或 CTA。
- 周三：制作一个真实项目或迁移页面。
- 周四：完成视频、GitHub 和社区分发。
- 周五：记录实验结果，决定继续、修改或停止。

每个实验记录：

```text
假设
改了什么
预期信号
观察周期
实际结果
继续 / 修改 / 停止
```

## 12. 需要负责人配合的事项

1. 每周导出 Search Console 的 Query、Clicks、Impressions、Position。
2. 在 GA4 中确认下载事件并标记关键事件。
3. 提供或补录 WordPress、Django、Laravel 等实测视频。
4. 检查新加坡、印尼、中国流量的参与质量和下载行为。
5. 确认服务器是否支持旧 Guide 页的 301 重定向。

## 13. 明确不做的事

- 不一次性批量生成 20 个以上 Project 页面。
- 不删除已收录的 `/guide/` 页面。
- 不大改首页视觉和组件结构。
- 不做与 FlyEnv 核心定位无关的 Tools SEO。
- 不为了 Schema 添加页面上没有的真实内容。
- 不继续单纯增加模块来替代内容和分发工作。

## 14. 最终成功标准

90 天后，成功不定义为“流量一定达到某个数字”，而定义为：

1. 知道哪些非品牌搜索词与 FlyEnv 有关。
2. 知道哪些项目页和迁移页能带来下载。
3. 知道哪些来源和国家带来高质量用户。
4. 有一套经过真实运行验证的项目页模板。
5. 每个新主题都有继续、修改或停止的依据。

最关键的验证是：

```text
真实项目需求 → 搜索/分发入口 → FlyEnv 页面 → 下载
```

这条链路被 2～3 个主题验证后，再扩大到 5 个项目页、4 个迁移页，以及更多 Technology/Use Case 页面。
