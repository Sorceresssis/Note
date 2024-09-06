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

### 远程分支覆盖

git fetch --all
git reset --hard origin/master (这里 master 要修改为对应的分支名)
git pull

### 创建分支远程

创建一个新分支（如果你还没有创建分支）：

bash
复制代码
git checkout -b new-branch-name
将新分支推送到远程仓库：

bash
复制代码
git push -u origin new-branch-name

### 创建并切换到远程分支：

使用 checkout 命令创建并切换到远程分支（假设远程分支名为 feature-branch）：

bash
复制代码
git checkout -b feature-branch origin/feature-branch

git push $remote `<branch-name>`

本地分支名和 远程分支名不一样怎么解决
ChatGPT 说：
ChatGPT
如果本地分支名和远程分支名不一样，但你希望推送本地分支到远程，并使其对应远程的特定分支，你可以通过指定推送的目标分支来解决这个问题。

方案 1: 手动指定推送目标分支
当本地和远程分支名不一样时，你可以手动指定推送的目标分支。

bash
复制代码
git push origin 本地分支名:远程分支名
例如，你本地分支名为 my-local-branch，远程分支名为 dev，你可以这样推送：

bash
复制代码
git push origin my-local-branch:dev
这会将你本地的 my-local-branch 分支推送到远程，并将其作为远程的 dev 分支更新。

方案 2: 重命名本地分支以匹配远程分支名
如果你希望本地分支名和远程分支名保持一致，你可以直接重命名本地分支。

切换到目标分支：

bash
复制代码
git checkout my-local-branch
重命名本地分支：

bash
复制代码
git branch -m 新的分支名
例如，将 my-local-branch 重命名为 dev：

bash
复制代码
git branch -m dev
推送重命名后的分支到远程：

bash
复制代码
git push origin dev
设置上游分支（可选）：

为了简化后续操作，你可以设置远程分支为该本地分支的上游分支：

bash
复制代码
git push --set-upstream origin dev
这样，之后在 dev 分支上执行 git push 和 git pull 时，就会自动推送或拉取到远程的 dev 分支。

方案 3: 强制将本地分支推送为远程的新分支
如果你想将本地分支推送为远程的一个新分支（不同名），可以直接推送并创建远程分支：

bash
复制代码
git push origin my-local-branch:new-remote-branch
这会在远程创建一个名为 new-remote-branch 的分支。




git checkout -b  feat/vitem_group origin/feat/vitem_group

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

- 只对 github 加代理

```shell
git config --global http.https://github.com.proxy 'socks5://127.0.0.1:1080'
git config --global http.https://github.com.proxy 'http://127.0.0.1:代理的port'
```

- 取消代理

```shell
git config --global --unset http.https://github.com.proxy
```

### **所有网址**

- 加代理

```shell
# 代理是socks5:127.0.0.1:1080
git config --global http.proxy 'socks5://127.0.0.1:1080'
git config --global https.proxy 'socks5://127.0.0.1:1080'
```

### 大小写敏感

```shell
git config core.ignorecase false
```
