<link rel="stylesheet" href="../.style/enhance.css"> 
<link rel="stylesheet" href="../.style/reader-adapt.css">

<title>VS Code</title>

# vs code

## 安装

<a href="../Windows/Software.md#microsoft-visual-studio-code" target="_blank">Windows-Software#Microsoft-Visual-Studio-Code</a>

## 备份配置



### Settings.json

#### 完整内容

```json
{
    "workbench.colorTheme": "Visual Studio 2017 Light - C++",
    "workbench.iconTheme": "material-icon-theme",
    "editor.minimap.size": "fit",
    "editor.formatOnSave": true,
    "remote.extensionKind": {
        "GitHub.copilot": ["ui"]
    },
    "html.format.wrapAttributes": "force-aligned",
    "[markdown]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode",
        "editor.quickSuggestions": {
            "other": "on",
            "comments": "off",
            "strings": "off"
        }
    },
    "[css]": {
        "editor.defaultFormatter": "vscode.css-language-features"
    },
    "[vue]": {
        "editor.defaultFormatter": "Vue.volar"
    },
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "files.associations": {
        "*.json": "jsonc"
    },
    "[json]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[jsonc]": {
        "editor.defaultFormatter": "vscode.json-language-features"
    },
    "[python]": {},
    "github.copilot.enable": {
        "*": true,
        "plaintext": false,
        "markdown": true,
        "scminput": false
    },
    "vscode-office.openOutline": true,
    "vscode-office.editorTheme": "Light",
    "vscode-office.pasterImgPath": "./assets/${fileName}/images/${now}.png",
    "pasteImage.defaultName": "X",
    "prettier.htmlWhitespaceSensitivity": "ignore",
    "[html]": {
        "editor.defaultFormatter": "vscode.html-language-features"
    },
    "python.createEnvironment.trigger": "off",
    "github.copilot.editor.enableAutoCompletions": true,
    "editor.wordWrap": "on",
    "prettier.tabWidth": 4,
    "[javascript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
    "workbench.startupEditor": "none",
    "diffEditor.ignoreTrimWhitespace": true,
    "terminal.integrated.defaultProfile.windows": "PowerShell",
    "Codegeex.Privacy": true
}
```

#### 属性解释

##### html.format.wrapAttributes

```json
"html.format.wrapAttributes": "force-aligned"
// Wrap attributes.
//  - auto: Wrap attributes only when line length is exceeded.
//  - force: Wrap each attribute except first.
//  - force-aligned: Wrap each attribute except first and keep aligned.
//  - force-expand-multiline: Wrap each attribute.
//  - aligned-multiple: Wrap when line length is exceeded, align attributes vertically.
```

### Code Snippets

#### Markdown

```json
{
    "custom-component_images": {
        "prefix": "cc_img",
        "body": [
            "<div class=\"custom-component images\">",
            "    <div class=\"container\">",
            "        <img src=\"\">",
            "    </div>",
            "    <p class=\"title\">  </p>",
            "    <p class=\"from\"><span class=\"inline-list-title\">From</span>",
            "        <span class=\"idx\"></span>",
            "    </p>",
            "</div>"
        ],
        "description": "自定义的图片容器"
    },
    "custom-component_videos": {
        "prefix": "cc_video",
        "body": [
            "<div class=\"custom-component videos\">",
            "    <div class=\"container\">",
            "        <video src=\"\"",
            "               poster=\"\"",
            "               controls=\"controls\"",
            "               muted=\"muted\"> </video>",
            "    </div>",
            "    <p class=\"title\">  </p>",
            "    <p class=\"from\"><span class=\"inline-list-title\">From</span>",
            "        <span class=\"idx\"></span>",
            "    </p>",
            "</div>"
        ],
        "description": "自定义的视频容器"
    }
}
```

#### Vue

```json
{
    "vue3-ts": {
        "prefix": "vue3-ts",
        "body": [
            "<template>",
            "</template>",
            "",
            "<script setup lang=\"ts\">",
            "</script>",
            "",
            "<style scoped>",
            "</style>"
        ],
        "description": "Vue3 template"
    }
}
```

## 操作

### 副侧边（右侧边）

【Ctrl + Alt+ B】

### 格式化代码

【Shift + Alt + F】

### 跨行选中

【ALT + SHIFT + 左键选择多行】 / 【中键(按下滚轮) + 拖动选择多行】
