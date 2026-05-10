# Task 4: 精简 Sponsor 赞助页面

## 任务目标

将 Sponsor 页面恢复为**纯赞助/致谢页面**，移除文章链接展示，优化表格展示形式，避免主题混淆。

### 改造方向

将 sponsor 页面恢复为**纯赞助页**，参考 Vite / Vue / Laravel 的 Sponsor 页面风格：

- 保留 ko-fi / 微信 / 支付宝 赞助方式
- 添加 Sponsor Wall 视觉展示（而非表格）
- 保留 "Special thanks" 区块
- **移除所有文章外链**，避免主题混淆

### 表格优化

如果必须展示赞助名单：
- 只展示**有留言内容**的赞助者（过滤空 msg）
- 或只展示**近期 / 大额**赞助者
- 对长名单做**分页**或**折叠**
- 减少页面体积，提升 crawl efficiency

---

## 执行步骤

### Stage 1: EXTRACT — 提取全部有留言的捐赠信息

**输入**: `task/sponsor_raw.json`  
**输出**: `docs/data/sponsor.json`, `docs/data/sponsor-zh.json`

1. 读取 `sponsor_raw.json`. 
2. 把 msg 非空, num 为美元金额的数据, 过滤到 `docs/data/sponsor.json`.
3. 把 msg 非空, num 为人民币金额的数据, 过滤到 `docs/data/sponsor-zh.json`.

### Step 2: 重构英文 Sponsor 页面文案

**文件**: `docs/sponsor.md`

页面可参照 `task/mockup-sponsor.html`. 具体效果可截图 http://localhost:63342/FlyEnv-Doc/task/mockup-sponsor.html?_ijt=1em0sqj6dutupan0d0f8stln2u&_ij_reload=RELOAD_ON_SAVE 查看
http://localhost:4000/community.html 这个链接可用于测试. 不需要启动测试服务器.
修改后等待3秒, 然后截图查看效果. 持续修复直到没有问题.

**执行约束**:
- 需要支持JSON-LD
- 需要支持暗色模式

### Step 2: 精简中文 Sponsor 页面文案

**文件**: `docs/zh/sponsor.md`

参照英文页面处理


## 验收标准

- [ ] 英文/中文 Sponsor 页面不再展示任何文章链接
- [ ] 页面顶部保留 ko-fi / 微信 / 支付宝 捐赠方式
- [ ] 页面包含 Special Thanks 区块
- [ ] AppSponsor 组件展示头像墙 + 有留言的赞助者列表
- [ ] 含 URL 的 msg 被自动过滤，不在 Sponsor 页面显示
- [ ] 留言列表支持展开/收起
- [ ] Sponsor 页面和 Community 页面主题互不重叠
