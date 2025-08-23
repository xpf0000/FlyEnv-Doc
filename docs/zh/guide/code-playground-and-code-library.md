# 代码演练场 & 代码图书馆

## 产品介绍
FlyEnv 4.10.6版本全新推出了代码演练场和代码图书馆两大实用功能。
- 代码演练场：支持快速执行多种编程语言代码片段
- 代码图书馆：提供代码片段的存储与管理功能，便于后续查找复用

## 代码演练场

### 功能价值 (Value Proposition)
在日常开发和代码学习过程中，开发者经常需要快速运行代码片段来验证功能或测试方法。传统方式需要：
1. 在IDE中创建临时文件
2. 通过终端执行相应命令（如`php test.php`或`node test.js`）
3. 某些语言还需额外编译步骤

FlyEnv代码演练场简化了这一流程，只需点击执行按钮即可运行代码，极大提升了开发效率。

### 使用指南 (User Guide)
访问路径：工具箱 → 代码演练场

界面说明：
- 左侧：代码编辑区（支持语法高亮）
- 右侧：执行结果输出区
- 顶部工具栏：语言选择、版本切换、执行按钮

![code-play1](https://oss.macphpstudy.com/image/code-play1.png)

### 支持语言 (Supported Languages)
当前版本支持以下10种编程语言：

#### 1. Java
```java
// 文件名必须是 Main.java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello World Java");
    }
}
```

#### 2. PHP
```php
<?php
echo "Hello World PHP";
?>
```

#### 3. Golang
```go
// 文件名必须是 main.go
package main

import "fmt"

func main() {
    fmt.Println("Hello World Golang")
}
```

#### 4. Rust
```rust
fn main() {
    println!("Hello World Rust");
}
```

#### 5. Erlang
```erlang
-module(main).
-export([main/0]).

main() ->
    io:format("Hello World Erlang~n").
```

#### 6. Python
```python
from __future__ import print_function
print("Hello World Python")
```

#### 7. Ruby
```ruby
puts "Hello World Ruby"
```

#### 8. Perl
```perl
use strict;
use warnings;
print "Hello World Perl\n";
```

#### 9. TypeScript
```typescript
const message: string = "Hello World TypeScript";
console.log(message);
```

#### 10. JavaScript
```javascript
console.log("Hello World JavaScript");
```

### 进阶功能 (Advanced Features)
- 多版本支持：可切换不同语言运行时版本, 可以用来验证兼容性, 执行效率等
- 一键存储：一键存储代码到代码图书馆

![code-play2](https://oss.macphpstudy.com/image/code-play2.png)

## 代码图书馆

### 核心价值
解决开发者在不同项目间复用代码片段的痛点：
- 避免重复查找历史项目
- 建立可复用的代码知识库
- 通过分类管理提高检索效率

### 功能详解 (Features)
1. **代码存储**
    - 支持按语言/群组分类
    - 可添加代码说明文档
    - 保存执行结果作为参考

2. **快速检索**
    - 支持关键词搜索
    - 按语言/标签过滤
    - 收藏常用代码片段

### 操作指南 (User Manual)
访问路径：工具箱 → 代码图书馆

主要界面：
1. 库管理界面
   ![code-play5](https://oss.macphpstudy.com/image/code-play5.png)

2. 添加代码片段
- 支持多语言语法高亮
- 可添加详细说明文档
- 保存执行结果快照
  ![code-play4](https://oss.macphpstudy.com/image/code-play4.png)

3. 代码详情页
- 完整代码展示
- 一键复制功能
  ![code-play3](https://oss.macphpstudy.com/image/code-play3.png)

## 总结 (Summary)
FlyEnv代码演练场和代码图书馆组成了一套高效的代码管理解决方案：
- 演练场：即时验证代码的试验田
- 图书馆：知识沉淀的代码仓库
- 双剑合璧：形成"验证-存储-复用"的完整闭环

通过这两个功能，开发者可以：

✓ 提升50%以上的代码验证效率

✓ 建立个人/团队的代码知识库

✓ 减少重复劳动，专注核心开发

## 视频教程

<iframe style="width: 100%; aspect-ratio: 16 / 9;" src="//player.bilibili.com/player.html?isOutside=true&aid=115078313545240&bvid=BV14Je6zhECW&cid=31896635236&p=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>