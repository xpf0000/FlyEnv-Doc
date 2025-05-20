# 运行Laravel

## 创建Laravel项目

如果你想使用已存在的项目. 你可以跳过此步骤. 继续 <a href="#创建站点">创建站点</a>

你可以使用[Composer](https://getcomposer.org/)创建[Laravel](https://laravel.com/)项目

```shell
composer create-project laravel/laravel example-app
```

当然，FlyEnv也提供了快速创建laravel项目的方法。

1. 在站点面板中. 点击 '新建项目'

<img src="https://oss.macphpstudy.com/image/F74AA939C46A.png" data-x-image-preview="">

2. 选择项目保存位置, 项目使用的PHP版本, Laravel的版本. 点击 '确定' 按钮.

<img src="https://oss.macphpstudy.com/image/8E783623E2F8.png" data-x-image-preview="">

3. 项目创建成功后, 你可以继续下一个步骤. 创建站点

<img src="https://oss.macphpstudy.com/image/BAAB108613E2.png" data-x-image-preview="">

## 创建站点

单击“站点”面板中的“添加”按钮。或者单击前面步骤中的“创建站点”按钮。进入添加站点界面

字段描述可以在这个参考中找到 [Hosts](/guide/host)

1. 选择站点根目录。对于 Laravel 项目，选择public目录。如果来自上一步，则会自动选择它。

<img src="https://oss.macphpstudy.com/image/E53248FED5BC.png" data-x-image-preview="">

2. 设置 url rewrite

- Nginx

在“Nginx Url Rewrite”块中选择 laravel。如果来自上一步，则会自动选择它

<img src="https://oss.macphpstudy.com/image/AF72C71F6596.png" data-x-image-preview="">

或者使用这个

```sh
location / {
	try_files $uri $uri/ /index.php$is_args$query_string;
}
```

- Apache

创建项目时，.htaccess 文件已自动创建。或者使用下面的内容手动创建它

```sh
<IfModule mod_rewrite.c>
    <IfModule mod_negotiation.c>
        Options -MultiViews -Indexes
    </IfModule>

    RewriteEngine On

    # Handle Authorization Header
    RewriteCond %{HTTP:Authorization} .
    RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]

    # Redirect Trailing Slashes If Not A Folder...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_URI} (.+)/$
    RewriteRule ^ %1 [L,R=301]

    # Send Requests To Front Controller...
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteRule ^ index.php [L]
</IfModule>
```

- Caddy

无需额外设置

## 启动并运行

- 启动 PHP / Apache / Nginx / Caddy. 单击“站点”面板中的链接。在浏览器中打开

<img src="https://oss.macphpstudy.com/image/4373D117408E.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/4FCCC65341EC.png" data-x-image-preview="">

- 在这里查看站点日志

<img src="https://oss.macphpstudy.com/image/14C9AD3814FA.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/D999E4BFEF0B.png" data-x-image-preview="">



