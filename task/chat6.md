这一版已经明显比前两版成熟，开始有“产品首页”而不是“功能目录”的感觉了。我会比上一轮更严格一点：**主结构基本可以定，但还没到直接冻结不动的程度。**目前我会给 **8/10 左右**。

最明显的进步有三点：Hero 终于把产品定义压缩成了 **“A Native Local Development Environment”**；真实 FlyEnv UI 已经进入第一屏；“Start the whole stack, not just one runtime” 也终于用 Laravel / Django / ERPNext / Gitea 这种完整项目场景来证明能力。这三点都对。

但还有几个问题值得继续收。

首先，**Hero 还是有点“产品定义清楚，但价值不够强”**。现在 H1：

> A Native Local Development Environment

是清楚的，但仍然偏品类词。副标题里信息太密，PHP、Node.js、Python、Java、Go、databases、web servers、local sites、HTTPS、AI coding tools、MCP 一口气全塞进来，用户还是需要读一段才能抓住重点。我建议再压一下，比如：

> **Run your complete local development stack natively.**

然后副标题再说：

> Manage runtimes, databases, web servers, local sites and HTTPS from one desktop app on Windows, macOS and Linux. AI coding tools and MCP are built in.

这样更像“价值 → 能力”，而不是“能力清单”。

第二，**第二屏现在有点空**。你把原先那四个抽象分类卡片删掉，这个方向是对的，但现在：

> One native workspace for the project you are actually building

下面只有两三行解释，然后马上进入 Why FlyEnv。

这造成一个明显断层。这个标题本来应该承担“完整项目工作区”的解释，但目前没有视觉证据。

我会二选一：要么直接删掉这一屏，把标题并入后面的“Start the whole stack”；要么这里放一个非常简短的结构图，例如：

```text
Project
├ Runtime
├ Database
├ Web Server
├ Local Domain + HTTPS
└ AI / MCP
```

目前这种“只有标题和一小段字”的独立 section，我认为价值不够，反而拉长页面。

第三，**“Less setup. More project time.” 已经很好，但文案还可以再具体一点。**现在四项分别是 No container setup、One workspace、Per-project versions、Local domains & HTTPS，这比上一版已经准确很多了。这一块我基本认可。

但每项正文最好减少概念描述，多说实际动作。例如不是：

> Keep runtimes, databases, services...

而可以更具体：

> Start PHP, MySQL, Redis and Nginx from the same app without building a container stack first.

这种文案会更有“我今天能用它干什么”的感觉。

第四，**Before / After 终于有了，但还不够有冲击力。**现在这块已经明显比上一版好，左右两个浅色盒子：

> Without FlyEnv
> With FlyEnv

逻辑清晰了。

问题是信息仍然太小，而且视觉权重很低。整页扫下来这块很容易跳过。

我建议不用再添加东西，反而要做得更简单、更大：

**Without FlyEnv**

`nvm · pyenv · PHP manager · DB installers · Nginx · mkcert · hosts · terminals`

→

**With FlyEnv**

`Runtimes · Databases · Web servers · HTTPS · Local sites · AI`

这样一眼看完。现在列表比较长，反而弱化了对比。

第五，**真实项目区域现在是整页最成功的部分。**

> Start the whole stack, not just one runtime

这句话建议保留。

Laravel / Django / ERPNext / Gitea 也比上一版正确很多，而且每张卡都有最终网页效果截图，这非常重要。

不过这里有一个需要严格检查的问题：

### 卡片里的技术栈必须完全真实。

比如 ERPNext 到底展示：

* Python
* MariaDB
* Redis
* Nginx

Gitea 到底是：

* Gitea
* MySQL
* Nginx
* HTTPS

不要为了视觉统一强行给每张卡塞一样数量的标签。

这类页面越具体，越容易被开发者检查细节。宁可少，也必须准。

另外，这四张卡我建议未来直接链接到真实页面/视频，而不是做纯展示。

第六，**Developer Stories 已经位置正确，但卡片仍然太像“小文章”。**三张卡的信息量还是比较多，标题、摘要、元信息、两个链接，全部塞进去以后，视觉上还是很碎。

我更推荐：

* 一行场景标签
* 一句大标题
* 2 行摘要
* Read story →

就结束。

例如：

> `Laravel · Windows · PHP`

> **A Laravel developer replaces a scattered local stack with FlyEnv**

> Managing multiple PHP versions, databases and local HTTPS from one workspace.

> Read the story →

用户案例的价值是“别人真的这样用”，不是在首页把文章内容读完。

第七，**Core Modules 这一版终于差不多了。**从原来的巨大 logo 墙变成了：

* Languages & runtimes
* Databases & queues
* Web servers
* AI & automation

这基本就是正确形态。

这里我只挑两个点。

标题：

> **The modules developers reach for first**

还是有一点“我们知道开发者最常用什么”的暗示。如果没有真实使用数据支持，我还是建议改为：

> **Core runtimes, databases and services**

或者：

> **Supported technologies**

更稳。

还有现在模块全部变成小 pill，视觉上稍微有点太轻。如果这个 section 本意是告诉用户“FlyEnv 覆盖面很广”，那么 `View all modules →` 要更明显一点，现在有点像辅助链接。

第八，**AI/MCP 终于被压缩到合理长度了。**这一版我基本满意。

一张核心图 + 一段说明 + 几个 bullet + CTA。

已经不像产品文档了。

不过标题：

> Connect your local stack to AI coding clients with MCP

很好，但正文最好明确最独特的价值：

> **AI 使用的是你实际正在运行的本地环境，而不是另起一套虚拟环境。**

比如：

> Let Claude Code, Codex and other MCP clients work with the runtimes, services and local sites already managed by FlyEnv.

这句值得强调。

第九，**Open Source 现在压得太狠了。**

上一版太大，这一版又有一点从一个极端走到另一个极端。

现在 Contributors 头像已经小到几乎只是一个彩色条。

这样就失去了“真实社区”的价值。

我建议稍微放回来一点，但不要恢复大头像墙。

比较理想的是：

> **100% Open Source & Community Driven**

下面：

`GitHub Stars · Forks · Contributors`

然后展示大约 25～40 个头像，尺寸能辨认出是不同人。

现在这个大小看不出来“社区”，更像一个装饰元素。

第十，**底部 CTA 现在是正确的，可以冻结。**

> Ready to run your local stack with FlyEnv?

搭配 Download FlyEnv / View documentation，是自然的收尾。

这一块我不建议再折腾。

---

## 现在还有一个整页级的问题

这一版比之前短了很多，这是好事，但页面仍然有：

> **大量 section 使用相似的视觉语言。**

基本都是：

* 蓝色小 eyebrow
* 黑色标题
* 灰色说明
* 白底
* 蓝线 / 淡色卡片

因此滚动过程中节奏有点平。

特别是：

1. One native workspace
2. Less setup
3. Before/After
4. Start the whole stack

连续四个 section 都是白底。

我不建议加花哨渐变，但至少可以让“真实项目栈”这一块有一个非常淡的背景区分，或者稍微扩大截图视觉，让它成为页面的第一个真正视觉高潮。

目前最吸睛的东西还是 Hero 右边的小 UI。

而实际上最应该吸睛的是：

> **Laravel / Django / ERPNext / Gitea 正在运行。**

---

# 如果这一版准备进入最后一轮，我只改 6 件事

我不会再让本地 AI 做结构重构了：

1. **Hero 副标题压缩，减少模块枚举感。**
2. **删除或合并第二个“One native workspace”空 section。**
3. **Before/After 再视觉化、再简化。**
4. **Developer Stories 卡片正文砍掉约 30%～40%。**
5. **Open Source 头像稍微放大，加入真实 GitHub 数字。**
6. **让 Real Project Stacks 成为页面视觉重点。**

然后停止改首页。

接下来应该进入真正有价值的工作：

> **埋点 → 上线 → 测量 Homepage → Download conversion。**

因为现在继续纠结字号、卡片、section 顺序，很容易陷入无休止优化。

这版已经足够达到“上线跑数据”的门槛。后面真正决定它好不好的，不再是我们主观觉得哪版更漂亮，而是：

> **旧版首页每 100 个访问者有多少人点击 Download，新版是多少。**

如果新版没有提升，再基于行为数据改。现在已经不值得继续纯靠 AI 猜了。
