# FlyEnv 官网流量增长方案（Use-Case Driven 改版）

> 基于 `task/chat1.md` 的诊断，结合本仓库（FlyEnv-Doc）实际情况制定。
> 制定日期：2026-08-25

---

## 0. 我的核心判断（与 chat1.md 的差异）

chat1.md 的大方向是对的：**从 Feature-driven 转向 Use-case-driven**。但照单全收它的 90 天计划会有问题，我调整如下：

| chat1.md 的建议 | 我的调整 | 理由 |
|---|---|---|
| 第一批做 20 个 Project 页 | **只做 5 个**（Laravel / WordPress / ERPNext / Gitea / Django） | 它自己也反对"批量 AI 生成垃圾页面"。20 个页面同时做必然牺牲真实性。5 个做透，跑通模板和数据后再复制 |
| P0 重写首页 Hero 和信息架构 | **降级为 P1，只做微创** | 首页改动有既有测试约束（`tests/homepage-core-modules.test.mjs` 等），风险高收益慢；新 URL 的 SEO 收益不依赖首页改版 |
| Migration 页面列为 P1 | **提前到与 Project 页并行** | `flyenv-vs-docker-xampp.md` 已有基础，"laragon alternative" 类词意图最强、转化最高，且内容可以基于已有素材快速产出 |
| Search Console 数据闭环 | **保留，但明确边界** | GSC/GA4 后台只有你能操作，我负责把埋点和页面结构做好，给你一份可执行清单 |

**我独有的优势**：我有 FlyEnv 的 MCP 工具，可以真实安装服务、跑通流程、截取真实界面。每个项目页的教程步骤都经过真实验证——这正是 chat1.md 强调的"别的纯 SEO 站做不到的事"。

---

## 1. 目标

90 天内，让非品牌词（non-brand）自然搜索流量成为新增用户的主要来源。

可验证的中间指标：
- 上线 `/projects/` 体系：5 个项目页 + 1 个 Hub 索引页（EN + ZH 各一套）
- 上线 `/migrate/` 体系：4 个迁移页（Laragon / XAMPP / Herd / Docker）
- 所有新页面符合统一 SEO frontmatter 规范，构建零错误，现有测试全绿

---

## 2. URL 与信息架构

不改现有 `/guide/` 结构（避免已收录页面 404），新增两个顶级栏目：

```
/projects/                    ← Hub 索引页（新增）
/projects/laravel             ← 由 guide/run-laravel-use-flyenv.md 升级迁移
/projects/wordpress           ← 新增
/projects/erpnext             ← 新增（挂已有视频）
/projects/gitea               ← 新增（挂已有视频）
/projects/django              ← 新增

/migrate/from-laragon         ← 新增
/migrate/from-xampp           ← 新增
/migrate/from-herd            ← 新增
/migrate/from-docker          ← 基于 guide/flyenv-vs-docker-xampp.md 扩展
```

对应文件结构（zh 镜像）：

```
docs/projects/index.md, laravel.md, wordpress.md, erpnext.md, gitea.md, django.md
docs/zh/projects/...（同名镜像）
docs/migrate/from-laragon.md, ...
docs/zh/migrate/...
```

**旧 URL 处理**：`guide/run-laravel-use-flyenv` 已被 Google 收录（chat1.md 引用的就是它），不能删。做法：保留旧页，在顶部加显著提示 + canonical 指向新页，或在 VitePress 层面做 rewrite。倾向后者，实施时验证构建产物。

**导航调整**（`docs/.vitepress/config.mts`）：

```
EN: Download | Projects | Migrate | Guide | Community | License
ZH: 下载 | 项目实战 | 迁移指南 | 指南 | 社区 | 许可证
```

FlyPHPServer 从主导航移入 footer（流量数据显示它不是核心入口）。

---

## 3. 页面模板（所有 Project 页统一）

遵循 `skills/flyenv-docs-seo` 规范，每页固定结构：

```markdown
---
title: Run Laravel Locally on Windows, macOS & Linux (No Docker) | FlyEnv
head:
  - - meta
    - name: description
      content: ...
---

# Run {Project} Locally with FlyEnv

<!-- Hook：痛点开场，2-3 句，不用产品架构语言 -->

## What You Need            ← 技术栈清单（PHP 8.3 / MySQL / Redis / Node...）
## Step-by-Step Setup       ← 3-6 步，每步有真实截图（我用 MCP 实跑截取）
## Watch the Demo           ← 嵌入已有 YouTube 视频（有则放）
## Common Issues            ← 真实踩坑（来自 flyenv_issues.md）
## FAQ                      ← 2-3 个真实搜索问题
## What's Next              ← 内链到相关 guide + Download CTA（AppDownButton 组件）
```

写作红线（来自 SEO skill + Guide-Task.md）：
- 意图转移：写"如何跑起 Laravel"，不是"FlyEnv 支持 PHP"
- 不堆关键词，不写空 FAQ，每篇必须有第一手操作细节
- 每篇 EN 1500+ 字，截图必须是当前版本真实界面

---

## 4. 执行计划

### Phase 0：基建（1-2 天）

- [ ] 导航加 Projects / Migrate（EN+ZH）
- [ ] 建 `docs/projects/index.md` Hub 页（卡片式索引，纯 markdown + 简单组件，不新造复杂组件）
- [ ] 定 frontmatter 模板，写一个校验脚本/测试（仿 `tests/page-title-metadata.test.mjs`）保证所有 projects/migrate 页面规范
- [ ] GA4 事件埋点检查：下载按钮、GitHub 点击是否已有事件；没有则在 `AppDownButton` 补 `gtag('event', ...)`

### Phase 1：5 个 Project 页（第 1-3 周，每周 ~2 篇）

顺序：**Laravel → WordPress → Gitea → ERPNext → Django**

每篇流程：
1. 我用 FlyEnv MCP 真实装环境、跑项目、截图
2. 按模板写 EN 版
3. 翻 ZH 版
4. 挂视频（Gitea/ERPNext 已有；其余后续补录后补挂，不阻塞上线）
5. 跑 `yarn docs:build` + 现有测试 + 新增规范测试

### Phase 2：4 个 Migrate 页（第 3-4 周）

- from-laragon（最高优先，搜索意图最强）
- from-xampp / from-herd / from-docker
- 结构：迁移理由 → 功能对比表 → 迁移步骤 → FAQ
- 已有 `flyenv-vs-docker-xampp.md` 和社区故事作为素材

### Phase 3：收尾与迭代（第 5 周起）

- [ ] 首页微创：Hero 副标题改为用户需求语言 + 加 "What can you run with FlyEnv?" 项目卡片区（保持现有测试通过，必要时同步更新测试）
- [ ] 根据 GSC 数据（你导出给我）决定下一批项目页：Symfony / Next.js / Spring Boot / Nextcloud / Ghost
- [ ] Footer 加 SEO 链接区

---

## 5. 明确不做的事

- 不做 Tools SEO（Base64/二维码之类，稀释定位）
- 不大改首页视觉和 UI 组件
- 不批量生成 20+ 页面
- 不动已收录的旧 guide URL（只做迁移/重定向）
- 不为了 Schema 而加页面上不存在的结构化数据

---

## 6. 需要你来做的（我无法代劳）

1. **GSC 数据**：每周导出 Query/Clicks/Impressions/Position，发我，我据此调整页面优先级
2. **GA4 后台**：确认 download 转化事件是否配置（我做好埋点后你在后台标记为转化）
3. **视频**：WordPress/Django/Laravel 的演示视频需要后续补录（页面先上线，视频位预留）
4. **Singapore/Indonesia 流量甄别**：chat1.md 提的 engagement 检查，需要你在 GA4 里看

---

## 7. 验收标准

每个 Phase 完成的定义：
- `yarn docs:build` 零错误
- `tests/` 全部通过（含新增规范测试）
- EN/ZH 双版本齐全、互链正确
- 每篇 Project 页的步骤经过 FlyEnv 实跑验证
