### -S -D -G

-D -save-dev

-S -sa

```shell
npm install moduleName # 安装模块到项目目录下
 
npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
 
npm install -save moduleName # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
 
npm install -save-dev moduleName # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
```

> devDependencies和dependencies

**devDependencies**开发环境使用，就是项目开发时需要，生产运行时就不需要的插件库

**dependencies**像 `express` `jquery`这些模块是项目运行必备的。
