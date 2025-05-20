# Nginx反向代理NestJS/NodeJS

![nest-big-logo.png](https://oss.macphpstudy.com/image/nest-big-logo.png)

使用[NestJS](https://nestjs.com/)可以很轻松的构建一个服务端应用. 但是部署时稍微有些麻烦. 因为NestJS打包出来的文件. 并没有像 PHP 项目或静态 HTML 项目那样, 有一个 index.php / index.html文件.

要在Nginx后面运行NestJS应用，你需要确保NestJS应用正在监听一个端口，然后配置Nginx作为反向代理。以下是一个基本的Nginx配置示例，它将流量代理到运行在端口3000的NestJS应用：

1. 首先，确保你的NestJS应用正在监听一个端口，例如3000。

2. 在 站点的 Nginx VHost 的配置文件 server 块中 添加反向代理配置

```sh
location / {
    proxy_pass http://localhost:3000; 
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_redirect off;
}
```

<img src="https://oss.macphpstudy.com/image/6800bed68acd.gif" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/538a79e9e3c9.gif" data-x-image-preview="">

3. 重启 Nginx 或者 重新加载 Nginx 配置

现在，当你通过站点域名访问你的服务器时，所有的请求都会被Nginx转发到在端口3000上运行的NestJS应用。
