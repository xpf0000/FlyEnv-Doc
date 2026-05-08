# Task 1: 提取并整理社区文章数据

**优先级**: P0（最高）  
**预估耗时**: 2-3 小时  
**前置依赖**: 无  
**阻塞任务**: Task 2, Task 3

---

## 任务目标

从现有 Sponsor API 数据中筛选出含文章链接的留言，精选 15-30 篇高质量内容，整理为结构化 JSON 数据文件，供 Community 页面使用。

---

## 执行步骤

### Step 1: 调用 API 导出原始数据

在项目根目录执行以下命令，获取 sponsor 列表并保存：

```bash
curl -X POST https://api.macphpstudy.com/api/site/sponsor_list_all \
  -H "Content-Type: application/json" \
  -o task/sponsor_raw.json
```

### Step 2: 运行提取脚本

在 `task/` 目录下创建并运行 `extract-links.js`：

```javascript
const fs = require('fs');
const data = JSON.parse(fs.readFileSync('sponsor_raw.json', 'utf8'));
const list = data?.data?.list ?? [];

// 匹配 http/https URL
const urlRegex = /https?:\/\/[^\s<>"{}|\\^`\[\]]+/gi;

const withLinks = list
  .map(item => {
    const urls = item.msg?.match(urlRegex) ?? [];
    return urls.length > 0 ? { name: item.name, msg: item.msg, num: item.num, urls } : null;
  })
  .filter(Boolean);

fs.writeFileSync('sponsor_with_links.json', JSON.stringify(withLinks, null, 2));
console.log(`Found ${withLinks.length} sponsors with links`);
```

运行：
```bash
node task/extract-links.js
```

### Step 3: 精选与整理

打开 `task/sponsor_with_links.json`，筛选 **15-30 篇高质量文章**，按以下标准判断：

- ✅ 链接可访问，内容确实与 FlyEnv 相关
- ✅ 不是单纯的广告/垃圾链接
- ✅ 优先保留：教程、评测、对比类文章
- ✅ 优先保留：英文 + 中文内容（覆盖多语言 SEO）
- ❌ 过滤掉：个人主页、无关网站、404 链接, 半年以前的

以下代理可使用
export http_proxy=http://127.0.0.1:17891 https_proxy=http://127.0.0.1:17891 all_proxy=http://127.0.0.1:17891
可使用无头浏览器查看
medium.com 的 请求头:
:authority
medium.com
:method
GET
:path
/@imranbru99/beyond-laragon-why-flyenv-is-the-definitive-local-development-powerhouse-for-2026-68745f1aad50
:scheme
https
accept
text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding
gzip, deflate, br, zstd
accept-language
en,zh-CN;q=0.9,zh;q=0.8
cache-control
max-age=0
cookie
uid=1a8d0657b510; _ga=GA1.1.978639579.1667373999; sid=1:A87fC4XvsQCMM+AaNeA9r4Hu4Lp+PVSfVw+SeHAyBYtTu1lgaNKtxVC7RebR+kKq; xsrf=d10c9f1e3634; _cfuvid=Knd4tLFakWNp2MD2zuodADTBKjaNMmKMlPda6.1IKSs-1778249091.7404475-1.0.1.1-p8Oq3O_FK54Q0jLWLqNBJwtn7p27yHV2HcnvAIjpcHs; cf_clearance=fiOOwkCBv8nYqhiJ6HrgsUsTmtM8962Zpg9eF1Ccgxo-1778254780-1.2.1.1-MUTZTzPOCvU2LFKYLDO._1fUUe_KIhGJGzjLJ6WTSLm3yCFpU39S.1_QatfiC3bSR2Q38rNvBZ0z6h8i8xvKd4bQo5GVGkfWagEnr0w7S3rDVMT40DKHEjEcnM46Mzq3Z7m1zMYyTfnl5w5g4sx9QdVKf.ebTDKxbpE8bhLqM9pQBAGdrJgyrYZPakzca.bGAqfoEmXo099RdDtMD_7Vt72vRsdGyUPn2LC.8Xs6zt_AaHMirqNnt5tqRY2ZShFEY9EVim1lQuQnhiZxVXem1.AXwrg0hMm14TfIsWkPEQqCvgDlvsE7T3DA5eePdNtALDsmIxTKfQqTalagb56zQlno6FluJST6jXbEKIoIfWgeMDdp2RvO6zRCHotNw9JC0Ns.w8Ccybd197AR.oxt2quo8ZvsWJyEQml.el0os_s; _ga_7JY7T788PK=GS2.1.s1778254782$o58$g0$t1778254782$j60$l0$h0; _dd_s=rum=0&expire=1778256181116
priority
u=0, i
sec-ch-ua
"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-arch
"arm"
sec-ch-ua-bitness
"64"
sec-ch-ua-full-version
"147.0.7727.138"
sec-ch-ua-full-version-list
"Google Chrome";v="147.0.7727.138", "Not.A/Brand";v="8.0.0.0", "Chromium";v="147.0.7727.138"
sec-ch-ua-mobile
?0
sec-ch-ua-model
""
sec-ch-ua-platform
"macOS"
sec-ch-ua-platform-version
"15.0.1"
sec-fetch-dest
document
sec-fetch-mode
navigate
sec-fetch-site
same-origin
sec-fetch-user
?1
upgrade-insecure-requests
1
user-agent
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36

linkedin的请求头:
:authority
www.linkedin.com
:method
GET
:path
/pulse/flyenv-c%C3%B3mo-empezar-con-tu-entorno-de-desarrollo-sin-salcedo-otero-njwie/
:scheme
https
accept
text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding
gzip, deflate, br, zstd
accept-language
en,zh-CN;q=0.9,zh;q=0.8
cache-control
max-age=0
cookie
bcookie="v=2&88e12044-c82a-4e21-8047-efd7746fb388"; li_sugr=4fb92bea-8d8d-417b-9c9c-3dd2dfa51b32; bscookie="v=1&2024031113044514d06477-cfed-455e-8e78-f629b0f2495bAQFSljri3Xt17je6pfBBARVbDdnBvKca"; g_state={"i_l":0}; liap=true; JSESSIONID="ajax:5732849570327551834"; li_theme=light; li_theme_set=app; dfpfpt=7544a7bfe6a944f6b9887ab1d233de75; _gcl_au=1.1.470028152.1770632410; _guid=a5df7af5-e609-4c53-af9b-69584f48845e; sdui_ver=sdui-flagship:0.1.38699+SduiFlagship0; li_at=AQEDAUxvLDUEnQ9GAAABmsXpvMwAAAGeIPCHGVYARY-AWKi-diReW4VpZGpE8Ic85v0n4xnylM0fb4SkVATV6RWLa2tk79QJLYI5FYfeqMLEEYl2cSkDQassH-Fc_jU7EFdTpP6zm1cGHCG5dTO80WLW; timezone=Asia/Shanghai; AnalyticsSyncHistory=AQJpg87mV1AtXAAAAZ385Bj1H56AZokGx3I68jmGe2S9EsEBXiVtyd-fxD-k50xMhlpm7j0fIvSRSr44xGSl2g; lms_ads=AQF5JJyUJMnWUAAAAZ385BpyTVGd2clWRtE7njFzJsLZ1XYwqqFIqyfu4b2uMY3HMeiADjuah8LTcPyZA80UrF4DG8UrvL_y; lms_analytics=AQF5JJyUJMnWUAAAAZ385BpyTVGd2clWRtE7njFzJsLZ1XYwqqFIqyfu4b2uMY3HMeiADjuah8LTcPyZA80UrF4DG8UrvL_y; AMCV_14215E3D5995C57C0A495C55%40AdobeOrg=-637568504%7CMCIDTS%7C20580%7CMCMID%7C68721176456562417411729707561613032169%7CMCAAMLH-1778669100%7C7%7CMCAAMB-1778669100%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1778071500s%7CNONE%7CvVersion%7C5.1.1%7CMCCIDH%7C34172574; aam_uuid=68864322705677530941787375861816789282; lang=v=2&lang=en-us; __cf_bm=G_HuhFb1.xkNTCSd17y2C27ygLwIyelyPJ1HAIg.duA-1778254419.9926815-1.0.1.1-3forjK6jfmLFffhPj7QAc5reBFSSEaYRAgGZd2WT1s8uzpZk4QMGdMXIwJoxLGmFXDOEoJJySdZw2oA922EoHA0yYzD_lLCtGC3x4ggEqMlZkiPoADU5zb0fHZyGqgly; fptctx2=AQHwTJ%252bcvscXYZdmGXCPN8PvC3NZsZugqFWg9zIfmy0KHlwGLzZG%252fGADyTZqCkUe4qR0lxHI6iLcK4D58tWhkJgsX0%252fEcwOTVH2CUp3rpLun0etNdaCTY%252bBcKvZW6Le4vRSGktEmj5YSsXo%252fuSJHTYdZac5AAsLy2GTYw0H2NKTpNQYd6dGsuJVOb5x47poTB9yxwt%252fQclLHrUPJbdR%252fE3tNfpMW%252fYgC1D9AmXFDpsFihmwEWO%252fcomOhJcG5fq3fLCqRTACZk%252fUjJ2rPouZFjTYOa9jQEQV2Trh1HWrBJiEtOi7t1T3BEutwpNwzP0OfvAvbDUEvCewTeZ8O6aOZFAtc3ifvr5%252bC6wgiBJl%252b%252f%252bl1zhrU4u0%252b3BFiy2I%252bejZnTD4%253d; UserMatchHistory=AQKIq423k8hIrQAAAZ4IQ4K4JQzwfDYvCJGlXLo-RL3-XY2XWsZkFM16NQG26AZfYRco09RiCCoYivE3F_sXjleZ2I03qnpQWXtNWlZRty30w8MfZLBtA82yDioRWjauYZglbr6DBmzBLckNgntIRJFClxhstxX2MGvSg5kD5lnVacArlQhvQviI3XfNYBwKIQawjoG26L4vde8gnzW8GcEdD-xeUQMoVSwKnpb_MeiEb64NPPDtJunbXAziNdRQ4i07WbHJcgiUH1l3Px7MNu_BOr-f7G44CS6vuUwSCdf2-MazRJfPVRRgHdzuNNm9XdUtEdPUYpd6dAI84UcGimpMM295y1hDBMcjhFdfNAyr6pT7FQ; lidc="b=OB29:s=O:r=O:a=O:p=O:g=9056:u=13:x=1:i=1778255107:t=1778340820:v=2:sig=AQGJAYgkVYUgacQM8cyDKpdYOogb7QTi"
priority
u=0, i
sec-ch-prefers-color-scheme
light
sec-ch-ua
"Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-mobile
?0
sec-ch-ua-platform
"macOS"
sec-fetch-dest
document
sec-fetch-mode
navigate
sec-fetch-site
same-origin
sec-fetch-user
?1
upgrade-insecure-requests
1
user-agent
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36

其他平台如果需要请求头, 到时候在告诉我

### Step 4: 创建结构化数据文件

新建 `docs/data/` 目录，创建两个文件：

**`docs/data/community-posts.json`**（英文为主 + 国际内容）

```json
[
  {
    "id": "flyenv-vs-xampp-macos",
    "title": "FlyEnv: A Modern Alternative to XAMPP on macOS",
    "url": "https://dev.to/xxx/flyenv-modern-alternative-xampp",
    "author": "Alex Chen",
    "platform": "DEV.to",
    "language": "en",
    "date": "2024-03-15",
    "summary": "A comprehensive guide on why FlyEnv replaces XAMPP for PHP development on macOS, with performance benchmarks and setup instructions.",
    "tags": ["macos", "xampp", "php", "tutorial"],
    "cover": "",
    "featured": true
  }
]
```

**`docs/data/community-posts-zh.json`**（中文内容）

```json
[
  {
    "id": "flyenv-laravel-tutorial",
    "title": "使用 FlyEnv 搭建 Laravel 本地开发环境最佳实践",
    "url": "https://juejin.cn/post/xxx",
    "author": "李明",
    "platform": "掘金",
    "language": "zh",
    "date": "2024-01-20",
    "summary": "详细介绍了如何在 macOS 上使用 FlyEnv 配置 Laravel 项目，包括多版本 PHP 切换、Redis 配置等高级用法。",
    "tags": ["macos", "laravel", "tutorial", "php"],
    "cover": "",
    "featured": false
  }
]
```

按照文章发表日期排序

### Step 5: 数据字段规范

| 字段 | 类型 | 必填 | 说明 |
|------|------|------|------|
| `id` | string | ✅ | URL-safe 唯一标识，用于锚点和过滤 |
| `title` | string | ✅ | 文章标题 |
| `url` | string | ✅ | 原文链接 |
| `author` | string | ✅ | 作者名 |
| `platform` | string | ✅ | 平台名称：DEV.to / Medium / 掘金 / Bilibili / YouTube / Blog 等 |
| `language` | string | ✅ | `en` / `zh` / `id` / `es` 等 |
| `date` | string | ✅ | ISO 日期格式 `YYYY-MM-DD` |
| `summary` | string | ✅ | 2-3 句话摘要，120 字以内 |
| `tags` | string[] | ✅ | 分类标签，全部小写 |
| `cover` | string | ❌ | 封面图 URL，空字符串表示使用默认平台图标 |
| `featured` | boolean | ❌ | 是否置顶推荐 |

### Step 6: 标签规范（统一使用）

```
# 平台标签
macos, windows, linux

# 内容类型
tutorial, review, comparison, video, case-study

# 技术栈
php, laravel, wordpress, nodejs, python, java, ai

# 对比对象
xampp, docker, laragon, herd, mamp
```

---

## 验收标准

- [ ] `docs/data/community-posts.json` 包含 10-20 条英文/国际文章
- [ ] `docs/data/community-posts-zh.json` 包含 5-10 条中文文章
- [ ] 所有 `url` 字段已验证可访问
- [ ] 所有 `summary` 字段为原创摘要，非直接复制原文
- [ ] `tags` 全部来自规范标签列表
- [ ] 至少有 3 篇标记 `featured: true`

---

## 注意事项

1. **摘要不要直接复制**原文的 meta description，应阅读后用自己的话总结
2. **标题可优化**：如果原文标题 SEO 价值低，可以适当改写（但需忠于原意）
3. **封面图**：如果有条件，可以截图文章头图；否则留空，组件会显示平台默认图标
4. 数据整理完成后，**删除** `task/sponsor_raw.json` 和 `task/extract-links.js`（敏感数据不外泄）
