# CMD

## 配置代理

```shell
# 配置代理
set http_proxy=http://127.0.0.1:1080
set http_proxys=http://127.0.0.1:1080

# 清除代理
set http_proxy=
set http_proxys=
```



# Git

## 配置代理
> 设置针对github.com本身
```shell
# 只对github.com
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.https://github.com.proxy socks5://127.0.0.1:1080
#上面是别人的，如果你的代理是http类型的，如下设置：
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'

#取消代理
git config --global --unset http.https://github.com.proxy
```

> 针对所有仓库
```shell
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'

#上面是别人的，如果你的代理是http类型的，如下设置：
# 找到自己的代理的port的4个数字的端口就行，不一定是1080口的
git config --global http.proxy  'http://127.0.0.1:代理的port'
git config --global https.proxy  'http://127.0.0.1:代理的port'

```

## git clone

```shell
git clone https://克隆账号：克隆密码@仓库地址 克隆到的地址
```



## gitbash历史记录位置

```shell
C:/user/admin(本机用户名)/.bash_history
```



# Node.js

## 换源

```shell
// npm设置新淘宝源
npm config set registry https://registry.npmmirror.com
// npm设置回本源
npm config set registry https://registry.npmjs.org

// yarn设置淘宝源
yarn config set registry https://registry.npmmirror.com
// yarn 设置回本源
yarn config set registry https://registry.yarnpkg.com/
```



## npm配置代理

```shell
# 配置代理
npm config set proxy http://server:port
npm config set https-proxy http://server:port
# 如果需要认证
npm config set proxy http://username:password@server:port
npm config set https-proxy http://username:pawword@server:port

# 查看config配置
npm config list

# 清除代理
npm config delete proxy
npm config delete https-proxy
```

## -S -D -G

-D -save-dev

-S -sa

```shell
npm install moduleName # 安装模块到项目目录下
 
npm install -g moduleName # -g 的意思是将模块安装到全局，具体安装到磁盘哪个位置，要看 npm config prefix 的位置。
 
npm install -save moduleName # -save 的意思是将模块安装到项目目录下，并在package文件的dependencies节点写入依赖。
 
npm install -save-dev moduleName # -save-dev 的意思是将模块安装到项目目录下，并在package文件的devDependencies节点写入依赖。
```

> devDependencies和dependencies 

**devDependencies**开发环境使用，就是项目开发时需要，运行，不舒适时就不需要的插件库

**dependencies**像 `express` `jquery`这些模块是项目运行必备的。





# Idea

## 竖着选中

alt + 左键

按住滚轮

## 变大写

ctrl+shift+u

# VsCode

## 竖着选中

alt + shift + 左键

按住滚轮
