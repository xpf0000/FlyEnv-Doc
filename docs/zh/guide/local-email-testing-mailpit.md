---
title: '无需 Mailhog 的本地邮件测试：Mailpit 设置指南'
head:
  - - meta
    - name: description
      content: '使用 Mailpit 替代 Mailhog 进行本地邮件测试。学习如何捕获、预览和测试开发环境中的邮件，无需发送真实邮件或使用外部服务。'
---

# 无需 Mailhog 的本地邮件测试：Mailpit 设置指南

在开发环境中测试邮件功能是一场噩梦。你不能发送真实邮件（垃圾邮件风险），外部邮件 API 很慢，而且那个被遗弃的 Mailhog 项目在你的新 Mac 上已经无法工作。

**Mailpit 登场** —— 一个现代化、积极维护的邮件测试工具，它更快、更美观，而且在 Apple Silicon 上真正可用。而且它已内置在 FlyEnv 中。

## Mailhog 的问题（以及为什么你需要替代方案）

Mailhog 多年来一直是本地邮件测试的首选工具。但是：
- **项目已被遗弃** —— 最后一次有意义的更新在 2021 年
- **不支持 Apple Silicon** —— 在 M1/M2/M3 Mac 上需要 Rosetta
- **内存泄漏** —— 随着时间推移消耗越来越多的 RAM
- **笨拙的 Web 界面** —— 已经过时

Mailpit 是现代化的替代品：同样的概念，更好的实现。

## 什么是 Mailpit？

Mailpit 是一个邮件和 SMTP 测试工具，带有一个模拟的 SMTP 服务器。它可以：
- 捕获应用程序发出的邮件
- 在 Web 界面中显示以供预览
- 支持 HTML 渲染、附件查看和 API 访问
- 在本地运行 —— 没有任何内容会离开你的机器

把它想象成开发邮件的"黑洞"。

## Mailpit vs Mailhog：功能对比

| 功能 | Mailhog（旧版） | **Mailpit** |
|---------|-----------------|-------------|
| **积极开发** | 否 | 是 |
| **Apple Silicon** | 模拟运行 | 原生 ARM64 |
| **现代界面** | 过时 | 简洁、响应式 |
| **HTML 预览** | 基础 | 高级，支持移动端视图 |
| **暗黑模式** | 否 | 是 |
| **API** | 有限 | REST API + WebSocket |
| **消息持久化** | 仅内存 | SQLite/数据库 |
| **SMTP 中继** | 否 | 转发到真实 SMTP |

## 在 FlyEnv 中设置 Mailpit

### 步骤 1：安装 Mailpit

FlyEnv 让这个过程变得非常简单：

1. 打开 FlyEnv -> Mailpit 模块
2. 选择版本（推荐使用最新版）
3. 点击**安装**

![Mailpit Installation](https://oss.macphpstudy.com/image/mailpit-1.webp)

### 步骤 2：配置你的应用程序

将你应用的 SMTP 设置指向 Mailpit：

**PHP（Laravel/Symfony/WordPress）：**
```ini
MAIL_MAILER=smtp
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
MAIL_USERNAME=null
MAIL_PASSWORD=null
MAIL_ENCRYPTION=null
```

**Node.js（Nodemailer）：**
```javascript
const transporter = nodemailer.createTransport({
  host: '127.0.0.1',
  port: 1025,
  secure: false
});
```

**Python（Django）：**
```python
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = '127.0.0.1'
EMAIL_PORT = 1025
```

**Ruby on Rails：**
```yaml
config.action_mailer.delivery_method = :smtp
config.action_mailer.smtp_settings = {
  address: '127.0.0.1',
  port: 1025
}
```

### 步骤 3：启动 Mailpit 服务

在 FlyEnv 的 Mailpit 模块中，点击启动按钮。

![Mailpit Service](https://oss.macphpstudy.com/image/mailpit-2.webp)

默认访问点：
- **SMTP 服务器**：127.0.0.1:1025（捕获邮件）
- **Web 界面**：http://127.0.0.1:8025（查看邮件）

### 步骤 4：测试邮件捕获

从你的应用程序发送测试邮件。打开 http://127.0.0.1:8025 查看捕获的消息。

## 使用 Mailpit 进行邮件测试

### HTML 邮件预览

点击任意消息可查看：
- **HTML 预览** —— 完全按照收件人看到的方式渲染
- **纯文本视图** —— 备用内容
- **源代码视图** —— 原始邮件头部和正文
- **移动端预览** —— 响应式测试

### 附件处理

Mailpit 内联显示附件：
- 图片以缩略图形式渲染
- PDF、文档可供下载
- 大小限制可配置

### API 访问

在你的测试套件中自动化邮件测试：

```javascript
// 示例：检查邮件是否已发送
const waitForEmail = async () => {
  const response = await fetch('http://127.0.0.1:8025/api/v1/messages');
  const data = await response.json();
  return data.messages.find(m => m.To[0].Address === 'user@example.com');
};
```

## 高级功能

### 消息中继

需要真正接收邮件？在 FlyEnv 设置中配置中继，将特定邮件转发到真实 SMTP 服务器。

### 消息持久化

与 Mailhog 的内存存储不同，Mailpit 默认使用 SQLite：
- 邮件在重启后仍然保留
- 可配置保留策略
- 导出消息历史记录

## 与流行框架集成

### Laravel

确保 .env 指向 Mailpit：
```ini
MAIL_HOST=127.0.0.1
MAIL_PORT=1025
```

### WordPress

添加到 wp-config.php 或插件中：
```php
add_action('phpmailer_init', function($phpmailer) {
    $phpmailer->isSMTP();
    $phpmailer->Host = '127.0.0.1';
    $phpmailer->Port = 1025;
    $phpmailer->SMTPAuth = false;
});
```

### Symfony

```yaml
framework:
    mailer:
        dsn: 'smtp://127.0.0.1:1025'
```

## 故障排除

### 连接被拒绝错误

1. 确认 Mailpit 正在 FlyEnv 中运行
2. 检查端口 1025 是否未被其他服务占用
3. 确保防火墙允许本地连接

### 邮件未出现

1. 确认应用程序中的 SMTP 设置
2. 检查 Mailpit 日志中的连接尝试
3. 确保使用正确的端口（SMTP 使用 1025，不是 8025）

## 常见问题（FAQ）

**Q：Mailpit 免费吗？**

A：是的。完全免费且开源，就像 Mailhog 一样 —— 但是积极维护中。

**Q：它能在 Windows 上运行吗？**

A：当然可以。FlyEnv 提供原生 Windows 二进制文件，同时支持 macOS 和 Linux。

**Q：我可以将邮件转发到我的真实收件箱吗？**

A：可以。Mailpit 支持 SMTP 中继，将特定邮件转发到真实地址。

**Q：邮件存储多长时间？**

A：默认情况下，Mailpit 会无限期地持久化到 SQLite。可在设置中配置保留策略。

**Q：它支持附件吗？**

A：支持。图片、PDF、文档 —— 都可以预览和下载。

**Q：我可以将它用于负载测试吗？**

A：可以。Mailpit 处理高流量的能力比 Mailhog 强得多。

## 准备好升级你的邮件测试了吗？

不要再与遗弃的软件作斗争了。FlyEnv 中的 Mailpit 为你提供现代化、可靠的邮件测试，开箱即用。

[下载 FlyEnv](/download) 开始使用内置的 Mailpit 支持。

在我们的 [AI 与生产力工具](/guide/build-local-offline-ai-agent) 部分探索更多开发工具。
