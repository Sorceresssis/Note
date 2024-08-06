# 使用案例

## 清除所有提交记录

1. 切换到新的分支

```shell
git checkout --orphan latest_branch
```

> 说明：`git checkout --orphan`的核心用途是 `以类似git init的状态创建新的非父分支`，也就是创建一个无提交记录的分支。

2. 缓存所有文件（除了.gitignore 中声明排除的）

```shell
git add -A
```

3. 提交跟踪过的文件（Commit the changes）\

```shell
git commit -am “commit message”
```

4. 删除 main 分支（Delete the branch）

```shell
git branch -D main
```

5. 重命名当前分支为 master（Rename the current branch to master）

```shell
git branch -m main
```

6. 提交到远程 master 分支 （Finally, force update your repository）

```shell
git push -f origin main
```

# 教程

## git 输入历史保存位置

```shell
C:/user/admin(本机用户名)/.bash_history
```

## git clone

```shell
git clone https://[克隆账号]:[克隆密码]@仓库地址 克隆到的地址
```

## 配置代理

### **对单个网址**

-   只对 github 加代理

```shell
git config --global http.https://github.com.proxy 'socks5://127.0.0.1:1080'
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'
```

-   取消代理

```shell
git config --global --unset http.https://github.com.proxy
```

### **所有网址**

-   加代理

```shell
# 代理是socks5:127.0.0.1:1080
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

### 大小写敏感

```shell
git config core.ignorecase false
```
