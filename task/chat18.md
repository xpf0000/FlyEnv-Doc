需要，而且我认为**不能只依赖顶部导航里的 `Demos`**。

首页的用户通常不会先研究导航，而是在顺着页面理解 FlyEnv。你现在首页已经有非常好的内容路径：

> FlyEnv 是什么 → 为什么更省事 → 能跑哪些完整项目 → 开发者怎么用 → 支持哪些技术 → AI/MCP

而新的 Demos 页正好可以承担：

> **“你说这些都能做，那我想实际看看。”**

所以首页应该至少有一个**上下文里的 Demos 入口**。

我会优先放在两个位置，但主入口只需要一个。

### 最推荐：放在 `Start the whole stack, not just one runtime` 这里

这是最自然的位置。

你这里已经展示：

* Laravel
* Django
* ERPNext
* Gitea

用户看到这些真实项目时，最容易产生的下一步需求就是：

> “有没有实际运行的视频？”

所以建议把 section 标题右边或者说明下面加一个：

**Browse all demos →**

变成类似：

```text
REAL PROJECT STACKS

Start the whole stack, not just one runtime              Browse all demos →
These are practical local recipes built from...
```

或者下面：

> These are practical local recipes built from the runtimes, databases, web servers, and services already available in FlyEnv.
> **Browse all demos →**

我更喜欢**标题右侧 CTA**，不会增加页面高度，也非常自然。

这会把首页的项目展示和 Demos 页直接连接起来。

---

### 第二个值得考虑的位置：Hero

你现在 Hero 是：

**Run your complete local development stack natively.**

然后：

`Download Free` `Star it`

我其实会认真考虑把第二个 CTA 从：

**Star it**

调整为：

**View demos**

或者：

`Download Free` `See demos`

原因是首次访问者的产品路径通常是：

> 这是什么 → 它真的能做到吗 → 看实际效果 → 下载

而 `Star it` 是一个对 FlyEnv 有价值的行为，但对用户理解产品本身帮助不大。

从**转化逻辑**来说：

> `See demos`

明显比：

> `Star it`

更接近用户此刻的需求。

GitHub Star 可以通过 GitHub icon、Open Source section、footer 等继续承接。

所以如果你愿意调整 Hero CTA，我最推荐：

**Download Free**
**See demos**

甚至：

**Download Free**
**Watch demos**

我更倾向 `See demos`，因为 Demos 页面不只是一个播放器，而是完整 Demo 目录。

---

## 但不要到处都塞 Demos 链接

我不建议：

* Hero 一个
* Less setup 一个
* Project 一个
* How Developers Use 一个
* Supported Technologies 一个
* MCP 一个
* Bottom CTA 又一个

这样反而会显得 Demos 被刻意推广。

这个页面里 **1～2 个入口足够**。

如果只让我选一个：

> **在 `Start the whole stack, not just one runtime` section 添加 `Browse all demos →`**

如果选两个：

> **Hero：`See demos`**
> **Project Stack section：`Browse all demos →`**

这两个位置分别承担：

* Hero：还不了解 FlyEnv → 先看看实际效果
* Project section：已经对能力产生兴趣 → 看更多真实演示

路径非常顺。

---

还有一点：你现在首页的 **How Developers Use FlyEnv** 下面已经有 `Explore all developer stories →` 这种“查看更多”的设计语言。

所以在：

**Start the whole stack, not just one runtime**

这里增加：

**Browse all demos →**

视觉和交互语言也是一致的，不会像硬塞进去的新入口。

我会优先这么改，然后再考虑 Hero 的 `Star it` 是否值得让位给 `See demos`。
