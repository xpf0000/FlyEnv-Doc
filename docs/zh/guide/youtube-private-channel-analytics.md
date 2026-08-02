# 分析自己的 YouTube 私人频道数据

这个本地工具会拉取你授权频道的私有只读运营数据，并生成 Markdown
数据报告。你可以把报告交给 AI 助手，获得基于真实数据的选题、内容和发布优化建议。

工具不会上传视频、修改频道、调用 AI 服务，也不会申请收入数据权限。

## Google Cloud 配置

1. 在 [Google Cloud](https://console.cloud.google.com/) 创建项目。
2. 打开 **APIs & Services → Library**，启用 **YouTube Analytics API** 和
   **YouTube Data API v3**。
3. 配置 OAuth consent screen；如果处于 Testing 模式，请将频道所属的 Google
   账号加入测试用户。
4. 打开 **APIs & Services → Credentials**，创建类型为 **Desktop app** 的
   OAuth 客户端，并把下载的 JSON 文件保存到本机私有路径。

命令只申请下列只读权限：

```text
https://www.googleapis.com/auth/yt-analytics.readonly
https://www.googleapis.com/auth/youtube.readonly
```

## 生成报告

在项目根目录运行：

```bash
yarn youtube:report -- --client-secrets /private/path/client_secret.json
```

首次运行会打开 Google 授权页面。完成授权后，命令默认拉取过去 90 个完整 UTC
自然日，并生成：

```text
reports/youtube/<timestamp>/channel-data.md
reports/youtube/<timestamp>/channel-data.json
```

可以用 `--days 30` 拉取不同的滚动区间；也可以同时使用
`--start-date YYYY-MM-DD` 与 `--end-date YYYY-MM-DD` 指定固定的闭区间。

```bash
yarn youtube:report -- --client-secrets /private/path/client_secret.json --days 30
```

## 保护私人数据

默认令牌文件是 `.youtube-analytics/token.json`，其中包含 refresh token，已被 Git
忽略。不要提交 `client_secret.json`、令牌文件或任何 `channel-data.json` 报告；也
不要把 OAuth 文件发给 AI 助手或其他人。

## 让 AI 分析报告

只分享 `channel-data.md`，并要求 AI 基于其中的日期范围、每日趋势、热门视频、
流量来源、国家/地区和设备分布给出建议。比如：

- 哪些视频选题或形式应该复用、停止或优先测试？
- 哪些标题或内容包装最应该先优化？
- 这段数据支持什么样的发布频率？
- 哪些流量来源或受众特征值得做一次专项实验？

YouTube Analytics 对当前日期的数据可能有延迟，比较表现时应使用完整的时间段。
