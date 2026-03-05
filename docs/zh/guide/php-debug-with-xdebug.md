---
title: '使用 Xdebug 调试 PHP：PhpStorm 和 VSCode 的分步指南'
head:
  - - meta
    - name: description
      content: '在 FlyEnv 中使用 Xdebug 在 PhpStorm 和 VSCode 中设置 PHP 逐步调试。一键安装 Xdebug、IDE 配置、以及 Laravel 和 PHP 项目的断点调试。'
---

# 使用 Xdebug 调试 PHP：PhpStorm 和 VSCode 的分步指南

厌倦了到处添加 `var_dump()` 和 `dd()` 语句？Xdebug 将 PHP 调试从猜测转变为精确的逐步调查。准确了解代码的执行过程，在任意位置检查变量，追踪执行流程——所有这些都无需修改代码。

借助 FlyEnv 的一键式 Xdebug 安装，您可以在几分钟内完成专业调试环境的搭建，而无需花费数小时编辑配置文件。

## Xdebug 带来的改变

### 传统调试（不使用 Xdebug）

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price;
        var_dump($price); // 稍后删除
        $total += $price;
    }
    dd($total); // 打印并终止
    return $total;
}
```

**问题：**
- 代码充斥着调试语句
- 提交前忘记删除调试代码
- 难以查看中间值
- 无法看到执行流程

### Xdebug 调试

```php
public function calculateTotal($items)
{
    $total = 0;
    foreach ($items as $item) {
        $price = $item->price; // 在此设置断点
        $total += $price;
    }
    return $total;
}
```

设置一个断点。完成。在 IDE 中检查变量、逐步执行循环、查看调用堆栈。

## 在 FlyEnv 中安装 Xdebug

### macOS 和 Linux：一键安装

FlyEnv 提供了安装 Xdebug 的最快方式——无需手动下载或查找配置。

1. 打开 FlyEnv → **PHP** 模块
2. 选择您的 PHP 版本
3. 点击 **"扩展"** 标签页
4. 在列表中找到 **Xdebug**
5. 点击 **安装**

<img src="https://oss.macphpstudy.com/image/2fdcb21372c6.png" data-x-image-preview="">

Xdebug 将自动下载并安装：

<img src="https://oss.macphpstudy.com/image/6ed17cba5620.png" data-x-image-preview="">

您将看到 Xdebug 显示为已安装：

<img src="https://oss.macphpstudy.com/image/e459c21168db.png" data-x-image-preview="">

### Windows：手动安装

Windows 需要手动下载（由于 PHP 二进制兼容性）：

1. 在 FlyEnv PHP 模块中，点击 **"扩展"** 按钮
2. 这将打开 PECL 网站和您的 PHP 扩展文件夹

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

3. 访问 [https://pecl.php.net/package/xdebug](https://pecl.php.net/package/xdebug)
4. 下载与您的 PHP 版本匹配的 `xdebug.dll`（TS/NTS，x64/x86）
5. 将 `xdebug.dll` 放入您的 PHP 扩展文件夹（在步骤 2 中打开的）

**提示：** 如果不确定下载哪个 DLL，请使用 [Xdebug Wizard](https://xdebug.org/wizard)。

## 配置 Xdebug

### 使用模板快速配置

FlyEnv 包含预配置的 Xdebug 模板——无需记忆设置。

1. 在 PHP 模块中，点击 **"配置"** 编辑 `php.ini`
2. 查找 Xdebug 配置部分
3. 点击 **模板/复制按钮** 插入推荐设置

<img src="https://oss.macphpstudy.com/image/a32559287475.png" data-x-image-preview="">

<img src="https://oss.macphpstudy.com/image/f67b14ef9aa3.png" data-x-image-preview="">

### 推荐的 Xdebug 配置

将以下内容粘贴到您的 `php.ini` 中（macOS/Linux）：

```ini
[xdebug]
zend_extension = "xdebug.so"
xdebug.idekey = "PHPSTORM"
xdebug.client_host = localhost
xdebug.client_port = 9003
xdebug.mode = debug
xdebug.profiler_append = 0
xdebug.profiler_output_name = cachegrind.out.%p
xdebug.start_with_request = yes
xdebug.trigger_value = StartProfileForMe
xdebug.output_dir = /tmp
```

**对于 Windows**，修改扩展行：
```ini
zend_extension = "xdebug.dll"
```

### 配置说明

| 设置 | 值 | 用途 |
|---------|-------|---------|
| `xdebug.mode` | `debug` | 启用调试（非性能分析） |
| `xdebug.client_port` | `9003` | IDE 监听的端口（PhpStorm 默认） |
| `xdebug.idekey` | `PHPSTORM` | 用于 IDE 匹配的标识符 |
| `xdebug.start_with_request` | `yes` | 每个请求自动启动调试 |
| `xdebug.client_host` | `localhost` | IDE 运行的位置 |

### 重启 PHP

保存 `php.ini` 后：

1. 在 FlyEnv 中重启 PHP 服务
2. 创建一个测试文件 `phpinfo.php`：
   ```php
   <?php phpinfo(); ?>
   ```
3. 在浏览器中访问它
4. 搜索 "Xdebug"——您应该能看到版本信息

## IDE 配置

### PhpStorm 设置

#### 步骤 1：设置 PHP 解释器

1. 打开 **首选项** → **PHP**
2. 将 CLI 解释器设置为您的 FlyEnv PHP 版本

<img src="https://oss.macphpstudy.com/image/4b91c7af97cf.png" data-x-image-preview="">

#### 步骤 2：配置 Xdebug 端口

1. 转到 **首选项** → **PHP** → **调试**
2. 将调试端口设置为 `9003`（与 `php.ini` 匹配）

<img src="https://oss.macphpstudy.com/image/9b600b0b0275.png" data-x-image-preview="">

#### 步骤 3：设置 IDE Key 和 Host

1. 在调试设置中，设置：
   - **IDE key**：`PHPSTORM`（与 `php.ini` 匹配）
   - **Host**：`localhost`

<img src="https://oss.macphpstudy.com/image/EFC867333484.jpg" data-x-image-preview="">

#### 步骤 4：开始监听

点击工具栏中的 **"Start Listening for PHP Debug Connections"** 按钮（电话图标）：

<img src="https://oss.macphpstudy.com/image/dad7b890d719.png" data-x-image-preview="">

#### 步骤 5：设置断点并调试

1. 在项目中打开一个 PHP 文件
2. 在编辑器行号区域点击设置断点（出现红点）
3. 在浏览器中访问您的站点
4. PhpStorm 将提示您接受连接：

<img src="https://oss.macphpstudy.com/image/bc0823efa076.png" data-x-image-preview="">

点击 **"Accept"**——您现在处于调试模式：

<img src="https://oss.macphpstudy.com/image/72ba6834f455.png" data-x-image-preview="">

**调试器面板：**
- **Frames**：显示执行路径的调用堆栈
- **Variables**：检查作用域内的所有变量
- **Watches**：跟踪特定表达式
- **Console**：在当前上下文中执行 PHP 代码

### VSCode 设置

#### 步骤 1：安装 PHP Debug 扩展

1. 打开扩展视图（Ctrl+Shift+X）
2. 搜索 **"PHP Debug"**
3. 安装 Felix Becker 开发的扩展

<img src="https://oss.macphpstudy.com/image/php-debug-package.png" data-x-image-preview="">

4. 安装后重新加载 VSCode 窗口

#### 步骤 2：添加调试配置

1. 切换到调试视图（Ctrl+Shift+D）
2. 点击 **"create a launch.json file"**

<img src="https://oss.macphpstudy.com/image/configure-xdebug.png" data-x-image-preview="">

3. 选择 **"PHP"** 作为环境

<img src="https://oss.macphpstudy.com/image/launch-json.png" data-x-image-preview="">

#### 步骤 3：配置 launch.json

VSCode 会创建 `.vscode/launch.json`。添加 `runtimeExecutable` 属性指向您的 FlyEnv PHP：

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Listen for Xdebug",
            "type": "php",
            "request": "launch",
            "port": 9003,
            "runtimeExecutable": "/Users/username/.flyenv/php/8.3.11/bin/php"
        }
    ]
}
```

**查找您的 PHP 路径：**
```bash
which php
# 或
flyenv php path
```

#### 步骤 4：开始调试

1. 点击绿色的 **"Start Debugging"** 按钮（播放图标）
2. 在代码中设置断点
3. 在浏览器中访问您的站点

<img src="https://oss.macphpstudy.com/image/vscode-xdebug.png" data-x-image-preview="">

#### 步骤 5：调试控制

当命中断点时：

<img src="https://oss.macphpstudy.com/image/breakpoints-vscode.png" data-x-image-preview="">

**调试控制台** 显示变量值和执行详情。

**键盘快捷键：**

| 按键 | 操作 |
|-----|--------|
| F5 | 继续 / 运行到下一个断点 |
| F10 | 单步跳过（执行当前行，不进入函数） |
| F11 | 单步进入（进入函数调用） |
| Shift + F11 | 单步跳出（返回当前函数） |

<img src="https://oss.macphpstudy.com/image/controls-xdebug.png" data-x-image-preview="">

## 基本调试技巧

### 1. 条件断点

仅在满足特定条件时才中断：

```php
// 右键点击断点 → More → Condition
$user->id === 123
$total > 1000
!empty($items)
```

### 2. 监视表达式

监视特定变量或表达式：

- `$user->email`
- `count($cart->items)`
- `$request->input('search')`

### 3. 评估代码

调试期间执行 PHP 代码：

```php
// 在 PhpStorm 控制台或 VSCode 调试控制台中
$user->refresh();
DB::table('logs')->where('id', 1)->first();
```

### 4. 堆栈追踪

查看如何到达当前行：

```
#0 app/Http/Controllers/OrderController.php(45)
#1 vendor/laravel/framework/src/Routing/ControllerDispatcher.php(48)
#2 vendor/laravel/framework/src/Routing/Route.php(262)
...
```

点击任意帧以检查该执行点的变量。

## 故障排除

### phpinfo() 中 "Xdebug not loading"

**原因：**
- 扩展路径错误
- 版本不匹配（TS 与 NTS）
- 配置更改后未重启 PHP

**解决方法：**
1. 验证 `zend_extension` 路径是否正确
2. 检查 PHP 错误日志中的加载错误
3. 确保已在 FlyEnv 中重启 PHP

### "Cannot accept external Xdebug connection"

**原因：** 端口不匹配或防火墙

**解决方法：**
1. 验证 `php.ini` 和 IDE 中的端口 9003
2. 检查防火墙是否未阻止 localhost:9003
3. 确保在发出请求之前 IDE 正在监听

### "Connection refused" 或超时

**原因：** Xdebug 无法连接到 IDE

**解决方法：**
```ini
; 在 php.ini 中尝试这些设置
xdebug.client_host = 127.0.0.1
xdebug.discover_client_host = 1
xdebug.client_port = 9003
```

### 调试未启动

**原因：** `start_with_request` 设置

**解决方法：**
- `xdebug.start_with_request = yes` — 调试每个请求（仅开发环境）
- `xdebug.start_with_request = trigger` — 仅在触发时调试（在 URL 中添加 `?XDEBUG_TRIGGER=1`）

### 断点未命中

**检查清单：**
- [ ] 路径映射配置正确（PhpStorm）
- [ ] 服务器上的文件与本地文件匹配
- [ ] 断点位于可执行行（非空行/注释）
- [ ] Xdebug 模式为 `debug`（非 `profile` 或 `off`）

## 性能分析（额外功能）

Xdebug 还可以分析代码以找出瓶颈：

```ini
xdebug.mode = profile
xdebug.start_with_request = trigger
xdebug.output_dir = /tmp
```

通过在任意 URL 添加 `?XDEBUG_PROFILE=1` 来触发性能分析。使用以下工具分析结果：
- **KCachegrind**（Linux）
- **QCachegrind**（macOS/Windows）
- **PhpStorm**（内置性能分析器）

## 常见问题（FAQ）

**Q：Xdebug 会降低应用程序速度吗？**

A：是的，激活时会降低 10-50%。仅在开发环境启用，生产环境切勿使用。使用 `xdebug.mode = off` 可在不卸载的情况下禁用。

**Q：我可以在 Laravel Sail 中使用 Xdebug 吗？**

A：可以，但比较复杂。使用 FlyEnv，Xdebug 可以原生工作，无需 Docker 网络配置的麻烦。

**Q：Xdebug 2 和 3 有什么区别？**

A：FlyEnv 安装 Xdebug 3.x，配置更加简化。`remote_enable` 等设置已被 `mode = debug` 取代。

**Q：我可以调试 CLI 脚本吗？**

A：可以。在 PhpStorm 中，对脚本使用 "Run > Debug"。在 VSCode 中，配置 "Launch currently open script" 配置。

**Q：为什么使用端口 9003 而不是 9000？**

A：Xdebug 3 将默认端口从 9000 更改为 9003，以避免与通常使用 9000 的 PHP-FPM 冲突。

**Q：我可以调试 AJAX 请求吗？**

A：可以。Xdebug 适用于任何 HTTP 请求——页面加载、AJAX、API 调用。只需确保您的 IDE 正在监听。

**Q：如何仅调试特定请求？**

A：将 `xdebug.start_with_request = trigger` 并在要调试的 URL 中添加 `?XDEBUG_TRIGGER=1`。

**Q：我可以在 PHPUnit 测试中使用 Xdebug 吗？**

A：当然可以。在测试方法或源代码中设置断点，然后在 IDE 中启用调试运行测试。

**Q：Xdebug 支持 PHP 8+ 吗？**

A：支持。Xdebug 3.0+ 完全支持 PHP 8.0、8.1、8.2 和 8.3，包括命名参数和属性等新特性。

## 总结

Xdebug + FlyEnv 为您提供专业的 PHP 调试体验：

- ✅ **一键安装**（macOS/Linux）
- ✅ FlyEnv 中的**预配置模板**
- ✅ 在 PhpStorm 和 VSCode 中**逐步调试**
- ✅ **变量检查**和表达式评估
- ✅ 复杂应用的**调用堆栈追踪**

不再猜测代码的执行情况。开始直观地查看它。

[下载 FlyEnv](/zh/download) —— 适用于 macOS、Windows 和 Linux

相关指南：
- [使用 FlyEnv 运行 Laravel](/zh/guide/run-laravel-use-flyenv) —— Laravel 特定设置
- [项目级版本隔离](/zh/guide/project-level-runtime-environment) —— 管理多个 PHP 版本
- [PHP 扩展安装](/zh/guide/php-extensions-install) —— 其他有用的扩展
