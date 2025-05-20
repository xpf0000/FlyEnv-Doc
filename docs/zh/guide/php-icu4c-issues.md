# PHP icu4c 问题

适用于使用Homebrew安装的PHP。有时可能会遇到，它可以显示在服务面板中，但颜色是红色，无法启动。它显示了类似这样的错误消息：

```sh
/opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
Error: Command failed: /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm -n -v
dyld[1578]: Library not loaded: @loader_path/../../../../opt/icu4c/lib/libicuio.73.dylib
Referenced from: <8225FD7D-2159-3B46-AB67-18AFF8F24255> /opt/homebrew/Cellar/php/8.2.10/sbin/php-fpm
Reason: tried: '/opt/homebrew/Cellar/php/8.2.10/sbin/../../../../opt/icu4c/lib/libicuio.73.dylib' (no such file), '/usr/local/lib/libicuio.73.dylib' (no such file), '/usr/lib/libicuio.73.dylib' (no such file, not in dyld cache)
```

别担心，这是Homebrew的一个常见问题

本质上，这是因为使用Homebrew安装的软件。有多个软件依赖于一个软件的不同版本。依赖项目已升级，但软件本身尚未升级

您需要运行此命令来更新Homebrew和已过时的软件

```sh
brew update && brew upgrade
```

更新后，如果问题仍然存在，请重新安装有问题的软件
