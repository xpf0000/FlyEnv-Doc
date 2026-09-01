# FlyEnv 流量增长合并方案（执行版）

> 合并 `task/plan-projects-seo.md`（工程执行）与 `task/chat1-growth-plan.md`（测量与验证）。
> 制定日期：2026-08-25
>
> 原则：**工程上以可落地为准，策略上以数据验证为准。**

---

## 1. 核心思路

```text
真实项目/问题
    ↓
搜索 + 分发（YouTube/GitHub/社区）
    ↓
项目页 / 迁移页
    ↓
下载 FlyEnv
    ↓
GA4/GSC 数据反馈 → 决定扩展、修改或停止
```

- 内容生产走工程化路线：统一模板、统一 URL 架构、测试保障、MCP 实跑验证
- 内容去留走数据路线：每个页面都有明确的"继续 / 修改 / 停止"依据
- SEO 是长期资产，分发是即时信号，两者一起跑

## 2. 目标与非目标

### 目标（90 天）

1. 上线 `/projects/` 体系：Hub 索引页 + 3 个项目页（EN + ZH）
2. 上线 `/migrate/from-laragon` 迁移页（EN + ZH）
3. 跑通至少 1 条完整的"发布 → 分发 → 下载转化"链路
4. GA4 关键事件可用，能区分品牌词 / 非品牌词 / 低质量 Direct 流量
5. 建立页面去留的数据规则，并用它做出第一次扩展决策

### 非目标

- 不做 20+ 批量 SEO 页面
- 不大改首页视觉和 UI 组件
- 不做 Tools SEO（Base64/二维码等，稀释定位）
- 不动已收录的旧 guide URL（只迁移/重定向）
- 不为了 Schema 加页面上不存在的结构化数据

## 3. URL 与信息架构

不改现有 `/guide/` 结构，新增两个顶级栏目：

```text
/projects/                  ← Hub 索引页（新增）
/projects/laravel           ← 由 guide/run-laravel-use-flyenv.md 升级迁移
/projects/wordpress         ← 新增
/projects/gitea             ← 新增（挂已有视频）

/migrate/from-laragon       ← 新增（素材：vs 页 + 社区故事）
```

文件结构（zh 同名镜像）：

```text
docs/projects/index.md, laravel.md, wordpress.md, gitea.md
docs/zh/projects/...
docs/migrate/from-laragon.md
docs/zh/migrate/from-laragon.md
```

**旧 URL 处理**：`guide/run-laravel-use-flyenv` 已被 Google 收录，不删。用 VitePress rewrite 或保留旧页 + canonical 指向新页，实施时验证构建产物后二选一。

**导航调整**（`docs/.vitepress/config.mts`，EN + ZH）：

```text
EN: Download | Projects | Migrate | Guide | Community | License
ZH: 下载 | 项目实战 | 迁移指南 | 指南 | 社区 | 许可证
```

FlyPHPServer 从主导航移至 footer。

## 4. 页面模板（所有 Project / Migrate 页统一）

遵循 `skills/flyenv-docs-seo` 规范：

```markdown
---
title: Run Laravel Locally on Windows, macOS & Linux (No Docker) | FlyEnv
head:
  - - meta
    - name: description
      content: ...
---

# Run {Project} Locally with FlyEnv

<!-- Hook：痛点开场 2-3 句，不用产品架构语言 -->

## What You Need            ← 技术栈清单
## Step-by-Step Setup       ← 3-6 步，每步真实截图（MCP 实跑截取）
## Watch the Demo           ← 嵌入已有视频（有则放，无则预留）
## Common Issues            ← 真实踩坑（来源：flyenv_issues.md）
## FAQ                      ← 2-3 个真实搜索问题
## What's Next              ← 内链 + Download CTA（AppDownButton）
```

Migrate 页结构：迁移理由 → 功能对比表 → 迁移步骤 → FAQ。不攻击竞品，只做事实对比。

写作红线：
- 意图转移：写"如何跑起 X 项目"，不是"FlyEnv 支持 Y"
- 每篇 EN 1500+ 字，截图必须是当前版本真实界面
- 不堆关键词，不写空 FAQ，每篇必须有第一手操作细节

## 5. GA4 事件埋点

在代码侧实现以下事件（`AppDownButton` 及相关组件），GA4 后台配置由你完成：

```text
download_click      ← 下载按钮（带 os、page、locale）
github_click        ← GitHub 外链
project_cta_click   ← 项目页 CTA
outbound_click      ← 其他外链
```

每个事件携带：`page / page_type / project / locale / os`。

每周看数口径（你在 GA4/GSC 操作）：
- 品牌词 / 非品牌词分开统计
- Direct / Organic / Referral 分开
- Singapore / Indonesia / China 的流量结合参与时间、下载行为判断质量，不只看用户数

## 6. 执行计划

### Phase 0：基建（第 1 周）

- [ ] 导航加 Projects / Migrate（EN+ZH）
- [ ] 建 `docs/projects/index.md` Hub 页（卡片索引，不新造复杂组件）
- [ ] 定 frontmatter 模板 + 新增规范测试（仿 `tests/page-title-metadata.test.mjs`）
- [ ] 实现 GA4 事件埋点（见第 5 节）
- [ ] 旧 Laravel 页的迁移方案落地（rewrite 或 canonical）

### Phase 1：3 个项目页 + 1 个迁移页（第 2-4 周）

顺序：**Laravel → WordPress → Gitea**，然后 **from-laragon**

每篇流程：
1. 用 FlyEnv MCP 真实装环境、跑项目、截图
2. 按模板写 EN 版 → 翻 ZH 版
3. 挂视频（Gitea 已有；Laravel/WordPress 预留位）
4. `yarn docs:build` + 全部测试通过后上线

### Phase 2：48 小时分发（每篇发布后固定执行）

需要你配合的部分标 ⚠️：

- [ ] ⚠️ YouTube 视频描述 + 置顶评论链接回项目页（带 UTM）
- [ ] ⚠️ GitHub Discussions / README 链接
- [ ] ⚠️ 社区短帖一篇（X / V2EX / Reddit / 掘金等）
- [ ] 首页、导航、相关 Guide 加内部链接（我做）
- [ ] 所有外部链接带 UTM 参数

### Phase 3：数据复盘与扩展（第 5 周起）

- 每两周按第 7 节的规则复盘一次
- 数据决定下一批：ERPNext / Django / Next.js / Symfony / Nextcloud 候选
- 数据决定迁移页是否扩展：from-xampp / from-herd / from-docker
- 首页微创（Hero 副标题 + "What can you run" 项目卡片区）在有第一批数据后再做，同步更新受影响测试

## 7. 数据决策规则（页面去留标准）

| 表现 | 可能原因 | 动作 |
|---|---|---|
| 没有展示 | 未索引或意图不成立 | 检查索引、内链、主题 |
| 有展示、CTR 低 | 标题/摘要不吸引 | 改 title 和 description |
| 有点击、停留短 | 页面没满足意图 | 重写开头和步骤 |
| 停留好、下载少 | CTA 或价值不清晰 | 调 CTA、截图、对比表 |

时间规则：
- 14 天内不因没排名删页面
- 28 天有展示但 CTR 低 → 改标题摘要
- 6-8 周无展示、无外部访问、无转化 → 停止该主题扩展

每个实验记录：假设 / 改了什么 / 预期信号 / 观察周期 / 实际结果 / 继续·修改·停止。

## 8. 分工

**我做（本仓库可完成的）**：
- 导航、URL 架构、Hub 页、重定向
- 全部页面 EN+ZH 写作（MCP 实跑验证 + 截图）
- GA4 事件埋点代码
- 规范测试 + 构建验证

**你做（我无法代劳的）**：
- GA4 后台：转化事件标记、品牌/非品牌词口径
- GSC：每周导出 Query/Clicks/Impressions/Position 发我
- 分发：YouTube 描述、GitHub、社媒发帖
- 补录 Laravel / WordPress 演示视频（不阻塞页面上线）

## 9. 验收标准

每个 Phase 完成的定义：
- `yarn docs:build` 零错误，`tests/` 全绿（含新增规范测试）
- EN/ZH 双版本齐全、互链正确
- 每篇项目页步骤经 FlyEnv 实跑验证
- 每篇发布后 48 小时分发清单执行完毕

90 天成功的定义：
1. 知道哪些非品牌搜索词与 FlyEnv 有关
2. 知道哪些项目页能带来下载
3. 能用同一模板稳定生产真实项目页
4. 每个页面都有明确的继续/修改/停止依据
