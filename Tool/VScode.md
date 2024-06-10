<link rel="stylesheet" href="../.style/auto-number-headers.css">
<link rel="stylesheet" href="../.style/reader-adapt.css">

<title>VS Code</title>

# vs code

## 安装

<a href="../Windows/Software.md#microsoft-visual-studio-code" target="_blank">安装教程</a>

## 插件

### 📦 C/C++ | C/C++ Extension Pack

by Microsoft

### 📦 C/C++ Themes | C/C++ Extension Pack

by Microsoft

### Chinese (Simplified) (简体中文) Language Pack

by Microsoft

### Code Translate

by w88975

### Comment Anchors

by Starlane Studios

### Dev Containers

by Microsoft

### Docker

by Microsoft

### GitHub Copilot

by GitHub

### GitHub Copilot Chat

by GitHub

### gitignore

by CodeZombie

### GitLens — Git supercharged

by GitKraken

### license-snippets

by issammain

### Live Server

by Ritwick Dey

### Material Icon Theme

by Philipp Kief

### Office Viewer(Markdown Editor)

by Weijan Chen

> 配置

```json
"vscode-office.openOutline": true, // 打开大纲
"vscode-office.editorTheme": "Auto" // 主题 auto
"vscode-office.pasterImgPath": "assets/${fileName}/images/${now}.png", // 修改粘贴图片的位置
```

### Paste Image

by mushan

### Path Intellisense

by Christian Kohler

### Prettier - Code formatter

by Prettier

### Project Manager

by Alessandro Fragnani

### Python

by Microsoft

### 🔗 Pylance | Python

by Microsoft

### 🔗 Python Debugger | Python

by Microsoft

### Todo Tree

by Gruntfuggly

```json

```

### Vue - Official

by Vue

### WSL

by Microsoft

## 配置 Settings

### HTML | Vue Template

- 属性换行

```json
"html.format.wrapAttributes": "force-aligned"
// Wrap attributes.
//  - auto: Wrap attributes only when line length is exceeded.
//  - force: Wrap each attribute except first.
//  - force-aligned: Wrap each attribute except first and keep aligned.
//  - force-expand-multiline: Wrap each attribute.
//  - aligned-multiple: Wrap when line length is exceeded, align attributes vertically.
```

### Vue

```json
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    },
```

### CSS

```json
    "[css]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
```

### Markdown

```json
"[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
 },
```

### UI

```json
  "workbench.colorTheme": "Visual Studio 2017 Light - C++",
  "workbench.iconTheme": "material-icon-theme",
```

### 插件远程代理

在 settings.json 中添加

```json
"remote.extensionKind": {
    "GitHub.copilot": [
        "ui"
    ]
}
```

### Minimap(缩略图)

```json
    "editor.minimap.size": "fit"
```

## 操作

### 副侧边（右侧边）

【Ctrl + Alt+ B】

### 格式化代码

【Shift + Alt + F】

### 跨行选中

【ALT + SHIFT + 左键选择多行】 / 【中键(按下滚轮) + 拖动选择多行】
