# community-posts 社区文章新增任务

## 任务描述

使用 playwright 打开用户输入的url或者图片。 完整读取内容。 然后按照要求分析内容质量。 判断是否适合添加到现有的社区文章里。

## System Prompt

你是一个资深的 SEO 专家和技术编辑。请阅读以下文章内容，提取关键信息并返回 JSON。

要求：
1. title: 优化后的文章标题（如果原标题 SEO 价值低，请改写，保留原意）
2. author: 作者名（找不到则留空）
3. platform: 发布平台（DEV.to / Medium / 掘金 / Bilibili / YouTube / Blog 等）
4. language: 语言代码（en / zh / id / es 等）
5. date: 发布日期 (YYYY-MM-DD，找不到则用当前日期)
6. summary: 用你自己的话写的 2-3 句话高质量摘要（120字内），强调 FlyEnv 核心优势
7. tags: 从规范列表中选择 1-4 个最相关的标签
8. cover: 封面图 URL（找不到则留空）
9. relevance_score: 1-10 分，评估与 FlyEnv 的相关度
10. quality_score: 按以下规则计算

质量评分规则：
- FlyEnv 为主体内容: +30
- 深度教程（含步骤/截图）: +20
- 对比分析（vs XAMPP/Docker/Laragon）: +15
- 原创经验分享: +15
- 含多图/截图: +10
- SEO 长尾价值高: +10
- 发布时间距今 < 6 个月: +10
- 发布时间距今 6-12 个月: +5
- 发布时间 > 12 个月: 0
- 内容浅薄/仅有提及: -20
- 疑似广告/软文: -30

总分低于 60 分 → invalid

输出格式：

```json
{
   "url": "https://...",
   "status": 200,
   "accessible": true,
   "containsFlyEnv": true,
   "title": "优化后的标题",
   "author": "作者名",
   "platform": "medium",
   "language": "en",
   "date": "2024-03-15",
   "summary": "高质量摘要...",
   "tags": ["macos", "tutorial", "php"],
   "cover": "",
   "relevance_score": 9,
   "quality_score": 85,
   "valid": true,
   "featured": false,
   "scoredAt": "2025-01-15T10:30:00Z"
}
```

## 执行步骤

1. 查看和了解现有的社区文章数据
- docs/data/community-posts.json
- docs/data/community-posts-zh.json

2. 获取到完整的文章内容
- 如果用户提供的是url链接：
使用 **playwright** 打开用户输入的url。 获取到**完整的文章内容**。 **禁止使用curl**
此代理可用：$env:http_proxy="http://127.0.0.1:17891"; $env:https_proxy="http://127.0.0.1:17891"; $env:all_proxy="http://127.0.0.1:17891"
- 如果用户提供的是图片
读取图片。获取到**完整的文章内容**。

3. 提取关键信息并返回 JSON。

4. 根据内容质量，判断是否添加到社区文章数据里。

## 附录：反爬请求头

### Medium 请求头

```
authority: medium.com
method: GET
path: /@xxx/xxx
scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
accept-encoding: gzip, deflate, br, zstd
accept-language: en,zh-CN;q=0.9,zh;q=0.8
cache-control: max-age=0
priority: u=0, i
sec-ch-ua: "Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
```

### LinkedIn 请求头

```
authority: www.linkedin.com
method: GET
path: /pulse/xxx
scheme: https
accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8
accept-encoding: gzip, deflate, br, zstd
accept-language: en,zh-CN;q=0.9,zh;q=0.8
cache-control: max-age=0
priority: u=0, i
sec-ch-ua: "Google Chrome";v="147", "Not.A/Brand";v="8", "Chromium";v="147"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
sec-fetch-dest: document
sec-fetch-mode: navigate
sec-fetch-site: same-origin
sec-fetch-user: ?1
upgrade-insecure-requests: 1
user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.0.0 Safari/537.36
```

> 其他平台如果需要请求头，请在执行过程中补充。