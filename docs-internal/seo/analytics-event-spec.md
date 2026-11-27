# FlyEnv GA4 事件规范

## 事件与触发点

| 事件 | 触发 | 参数与分析 |
| --- | --- | --- |
| `download_click` | 已有下载页导航，另外覆盖下载页面实际安装包链接 | `download_intent=navigation\|package`。包记录 `platform=windows\|macos\|linux`、`architecture=x64\|arm64`、`download_source=github`、`app_version`、`package_type=exe\|portable\|dmg\|deb\|rpm`。目标是点击的包，设备 OS 单独记录 |
| `download_nav_click` | 站内点击前往五语下载页 | `source_page` → `target_page`，`cta_position=hero\|nav\|inline\|footer`。与同次历史导航事件并存，按用途选其一 |
| `file_download` | GA4 增强型衡量实际识别的链接类型 | 保留现有自动事件。GA 支持的扩展名、代理链接与浏览器行为均影响覆盖 |
| `license_click` | 原链接规则与显式首页 Pro CTA | 许可导航和购买按钮分别看以下两项 |
| `license_nav_click` | 站内点击许可页 | 相同导航参数。许可帮助链接保留 Guide 事件 |
| `license_purchase_click` | 点击可用的 Paddle 购买按钮 | `license_method=purchase`，`cta_position=hero\|footer`。点击时发出，Paddle 加载失败亦计意向 |
| `github_click` / `video_click` / `guide_click` / `solution_click` | 现有链接规则或显式标记 | 目标 URL 去 query、fragment，内部目标用路径 |
| `demos_nav_click` | 站内点击演示库 | 去除过滤/搜索参数后识别路径。精确视频入口 surface 为 `demo_deep_link`，导航栏为 `primary_nav`，比较页普通演示入口为 `compare-demo` |
| `compare_nav_click` | 点击站内比较首页或任一详情链接 | `source_page`、`target_page`、`locale`。站点导航 `surface=primary_nav`，比较卡片和详情返回链接 `surface=compare-entry` |
| `compare_plugin_market_click` | 点击比较页内带标记的本语言插件市场入口 | `source_page`、`target_page`、`locale`、`surface=compare-plugin-market` |
| `compare_migration_click` | 点击比较页试迁区的本语言上手指南或功能说明 | `source_page`、`target_page`、`locale`、`surface=compare-migration`。指南链接同时维持原有 `guide_click` 口径 |
| `home_feature_click` | 点击首页全部功能、具体功能、Plugin Market、MCP 或 AI Memory 入口 | `content_id` 为公开功能标识，`surface` 分别为 `new-home-feature`、`new-home-plugin-market`、`new-home-mcp` 或 `new-home-ai-memory` |
| `home_section_click` | 首页首屏跳到同页的比较区 | `content_id=compare`、`cta_position=hero`。进入实际比较路由沿用 `compare_nav_click` |
| 首页转化上下文 | 首页具名下载、演示、功能、解决方案、比较、许可和指南入口复用现有事件 | `source_page`、`target_page`、`cta_position`、`content_id`、`locale`。项目演示标识来自目录的固定 ID，目标页仅保留规范路径。首屏下载和底部下载分别以 `hero` 与 `footer` 区分 |
| `demos_play`、`demos_platform_open`、`demos_guide_click` | 打开详情播放器、跳往视频平台、点击关联指南 | `demo_id`、`category`、已有 `position` / `platform` / `target`。播放器打开是原有定义 |
| `demos_filter_change`、`demos_search`、`solutions_filter_change`、`solutions_search` | 选择分类或交互搜索 | 搜索长度、结果数（Demos）；搜索原文仍可用于本地 UI 地址，埋点不采集 |
| `solution_detail_click` | 项目集合进入详情 | `content_id` 为项目 slug，`target_page` 为本地详情路径 |
| `page_view` | VitePress 首次成功路由与文档路径变化，含前进后退 | 一次路径一次。hash、分类、搜索 query 变化跳过。识别 404 时使用固定路径，支付返回页不主动上报 |

委托监听处理链接及购买按钮，单个组件原有事件继续用共享 `trackEvent`。分析仅在官网生产 origin 初始化。分析 payload 用已知路由相对路径，包含五语 `locale`、`page_type`、精选页面 `content_id` 与设备 `os`。停止上传原来的链接可见全文。初次页面位置白名单保留符合命名规则的六个公开 UTM 字段。外部 referrer 只取 origin，SPA referrer 用上一个规范路径。订单、收据邮箱、token、搜索及锚点留在实际浏览器 URL 以保持业务流程，排除于自定义分析上下文。

当前官方下载卡片直接使用 GitHub v4.21.1 的八个资产。下载链接带 `download` 属性，之前委托直接跳过，解释下载链接覆盖缺口；GA4 自动事件的实际覆盖仍待测试属性确认。旧全局 AppDownButton 未被文档调用，历史直接下载/启动定义可在组件源码查到。镜像或额外来源如后续恢复，应在真实链接上注明渠道及包元数据，再验证同一次激活仅上报一次。

## 发布前由 GA4 管理员完成

1. **先用测试属性。** 管理 → 数据流 → Web → 增强型衡量 → 网页浏览 → 高级设置，关闭「基于浏览器历史事件的网页更改」。本代码已用 `send_page_view: false` 禁止 config 自动首屏，并通过路由提交手动浏览。GA4 历史项若开启，会独立发出额外事件。保持自动文件下载用于历史口径。
2. 在同一数据流关闭会从 URL 采集任意搜索框内容的站内搜索增强事件，关闭或审查自动表单互动和出站点击字段。审查第三方 Tag/GTM 注入、Consent Mode 和 CDN HTML。源码未见已有 CMP，延续站点部署端同意配置，浏览器 DNT/GPC 时不加载。审批后可接入经确认的 consent 回调；若生产 CMP 依赖原 HTML 中 `gtag` 初始化顺序，需合并验证后上线。
3. 管理 → Web 数据流 → 配置标签设置 / 数据遮盖，打开邮箱遮盖并加站点实际敏感参数名，例如 Paddle 返回的交易相关键与 Demos 的 `q`。只记录键名。测试 `page_location`、`page_referrer`、`link_url`、`search_term` 和 `form_destination`，任何扩展事件仍带敏感数据时先停相应自动采集并复测。
4. 注册事件作用域维度。优先 `download_intent`（分离历史导航与包点击）、`platform`、`architecture`、`package_type`、`locale`、`cta_position`。仅有多来源时再注册 `download_source`，已有相同注册不重复。页面位置用内建维度，内容 ID / URL / app_version 默认不注册，避免高基数。
5. 管理 → 事件，为 `license_purchase_click` 设置关键事件。若需要纯包点击关键事件，在 GA4 基于 `download_click` 且 `download_intent=package` 派生专用事件并标为关键事件。历史 `download_click` 仍可做统一意图趋势，不能同时给两者求和。注册和关键事件标记生效时间记入变更日志。
6. 在 DebugView 对照浏览器网络使用不可识别的合成值。验证首载、站内跳转、前进后退、语言切换、刷新、外链、移动端、包点击、关闭/拒绝分析和支付返回。检查每一步 `page_view` 数量与 referrer 迁移，付款按钮可用性及同意状态。保持生产数据无测试流量。

[GA4 页面浏览](https://developers.google.com/analytics/devguides/collection/ga4/views) · [SPA 衡量](https://developers.google.com/analytics/devguides/collection/ga4/single-page-applications?implementation=browser-history) · [数据遮盖](https://support.google.com/analytics/answer/13544947)

## 旧许可证来源和数据缺口

客户端 `src/render/components/Setup/store.ts:98–99` 硬编码 EN/ZH 许可说明旧地址。已确认这类访问存在，不能用代码确认导出里全部 6,540 次、归于 Google 的 995 次或重访来源。建议客户端维护者在该入口用本语言 clean URL 加 `utm_source=flyenv_app&utm_medium=desktop&utm_campaign=license_help`，Release 切换后核对 GA4 的 Session source / medium 与着陆页。其它 help / update / plugin market 入口分开审计后再加相应 campaign。官网内部链接不用 UTM。

旧 `(not set)` 无法从 CSV 反推原因。旧代码未显式订阅路由，依赖 GA4 属性自动历史记录，当前无法从源码核实该开关、同意时序及归因窗口。上线前后对照 DebugView 与实际报告，按浏览器、来源媒介和周观察 `(not set)`，保留历史原始数据。

Paddle 按钮点击或返回页均不足以确认付款。后续另基于可信支付成功、订单去重、金额/币种和退款设计真正的 purchase。安装、首次启动及激活统计另行定义同意与匿名去重，当前没有相应统计。
