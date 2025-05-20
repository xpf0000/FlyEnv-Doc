# PHP扩展安装

## macOS & Linux

FlyEnv提供了PHP扩展的快捷安装

<img src="https://oss.macphpstudy.com/image/4e4fab8b6a43.png" data-x-image-preview="">
<p/>
<img src="https://oss.macphpstudy.com/image/f05dd95d81fc.png" data-x-image-preview="">

你也可以使用pecl命令来安装 PHP扩展

点击或拷贝路径. 在终端中 cd 到路径

<img src="https://oss.macphpstudy.com/image/c462e1c31e6.png" data-x-image-preview="">

安装 PHP xdebug扩展

```sh
./bin/pecl install xdebug
```

<img src="https://oss.macphpstudy.com/image/eb4e7fd0e2fd.png" data-x-image-preview="">

## Windows

当前未提供PHP扩展的快捷安装. 但是提供了pecl站点和PHP扩展文件夹的快速打开

注意. 扩展文件夹中, 已默认包含了大多数常用扩展.PHP默认并未启用这些扩展. 请自行在php.ini中启用

<img src="https://oss.macphpstudy.com/image/a4e9e0dd1b67.png" data-x-image-preview="">

在[https://pecl.php.net/packages.php](https://pecl.php.net/packages.php)站点下载.dll文件, 然后放到PHP扩展文件夹

Windows版本的PHP扩展的快捷安装实现起来很简单. 但是PHP版本和PHP扩展版本的对应关系很麻烦. 我没有时间和精力去处理这些

如果有人想要做出贡献. 您可以fork代码并提交PR。或者提供PHP版本和PHP扩展版本的对应关系







