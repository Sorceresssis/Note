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

![image-20230708162244910](image/tool/image-20230708162244910.png)

# Node.js

## 换源

```shell
// npm设置新淘宝源
npm config set registry https://registry.npmmirror.com
// npm设置回本源
npm config set registry https://registry.npmjs.org

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

**devDependencies**开发环境使用，就是项目开发时需要，生产运行时就不需要的插件库

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



## remote 授权

在settings.json中添加(github copilot举例)

```json
"remote.extensionKind": {
    "GitHub.copilot": [
        "ui"
    ]
}
```


# Powershell

## command history保存位置

```shell
C:\Users\[username]\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine
```

```shell
$directory = "C:\path\to\your\code\repository"
$totalLines = 0
$files = Get-ChildItem -Recurse -File -Path $directory -Include "*.js", "*.java", "*.py"  # 根据需要添加文件类型
foreach ($file in $files) {`
    $lineCount = (Get-Content $file.FullName | Measure-Object -Line).Lines`
    Write-Host "$($file.FullName): $lineCount lines"`
    $totalLines += $lineCount`
}
Write-Host "Total lines: $totalLines"


$directory = "F:\Project\Github\echo\src"
$totalLines = 0
$files = Get-ChildItem -Recurse -File -Path $directory -Include "*.ts", "*.vue", "*.css","*.js"  # 根据需要添加文件类型
foreach ($file in $files) {`
    $lineCount = (Get-Content $file.FullName | Measure-Object -Line).Lines`
    Write-Host "$($file.FullName): $lineCount lines"`
    $totalLines += $lineCount`
}
Write-Host "Total lines: $totalLines"
```
