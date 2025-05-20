# Apache解析.html文件为php

如果你的html文件包含php代码。而且您不想将文件类型更改为php。只是想让Apache将html文件视为php文件。可以按照这个操作

1. 创建 index.html 文件

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
</head>
<body>
<?php echo "This is PHP Code"; ?>
</body>
</html>
```

2. 使用 FlyEnv 创建一个测试站点. 选择一个 PHP 版本, 例如8.2. 添加这些到 php-fpm.conf 的 \[www\] 区域.

```sh
security.limit_extensions = .php .php3 .php4 .php5 .php7 .html .htm
```

<img src="https://oss.macphpstudy.com/image/632d15be2187.png" data-x-image-preview="">

3. 添加这些到站点的 apache vhost 文件. 需要把 'phpwebstudy-php-cgi-82.sock' 更改为你选择的 PHP 版本

```sh
<FilesMatch .html$>
    SetHandler "proxy:unix:/tmp/phpwebstudy-php-cgi-82.sock|fcgi://localhost"
</FilesMatch>
```

<img src="https://oss.macphpstudy.com/image/2a86b2e2c69c.png" data-x-image-preview="">

4. 启动 Apache 和 PHP. 在浏览器中打开网站并查看结果



