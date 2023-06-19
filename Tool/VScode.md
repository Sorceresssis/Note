# 安装

## 插件安装位置

* 图标

在图标属性添加--extensions -dir "D:\Work\Microsoft VS Code Extensions"



* 控制台运行

```shell
code --extensions-dir "D:\Work\Microsoft VS Code Extensions"
```










# 工作

## HTML

### 格式化

* 属性换行

在settings.json添加属性

```json
"html.format.wrapAttributes": "force-aligned"
// Wrap attributes.
//  - auto: Wrap attributes only when line length is exceeded.
//  - force: Wrap each attribute except first.
//  - force-aligned: Wrap each attribute except first and keep aligned.
//  - force-expand-multiline: Wrap each attribute.
//  - aligned-multiple: Wrap when line length is exceeded, align attributes vertically.
```

