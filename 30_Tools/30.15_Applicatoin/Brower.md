---
text: 浏览器
---

# 浏览器

## 浏览器扩展

### Markdown Reader

Home Page: https://md-reader.github.io/

Github Repo: https://github.com/md-reader/md-reader

#### 配置

**自定义 css**

```css
h1 {
    counter-reset: h2counter;
}

h2 {
    counter-reset: h3counter;
}

h3 {
    counter-reset: h4counter;
}

h4 {
    counter-reset: h5counter;
}

h5 {
    counter-reset: h6counter;
}

h2::before {
    counter-increment: h2counter;
    content: counter(h2counter) ". " !important;
}

h3::before {
    counter-increment: h3counter;
    content: counter(h2counter) "." counter(h3counter) ". " !important;
}

h4::before {
    counter-increment: h4counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) ". " !important;
}

h5::before {
    counter-increment: h5counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "."
        counter(h5counter) ". " !important;
}

h6::before {
    counter-increment: h6counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "."
        counter(h5counter) "." counter(h6counter) ". " !important;
}

.mdr .mdr__markdown-content {
    max-width: none !important;
}

.mdr h2,
.mdr h3,
.mdr h4,
.mdr h5,
.mdr h6 {
    display: flex;
    align-items: baseline;
}

.mdr h2::before,
.mdr h3::before,
.mdr h4::before,
.mdr h5::before,
.mdr h6::before {
    padding-right: 6px;
}

.mdr-side .level-1 {
    counter-reset: h2counter;
}

.mdr-side .level-2 {
    counter-reset: h3counter;
}

.mdr-side .level-3 {
    counter-reset: h4counter;
}

.mdr-side .level-4 {
    counter-reset: h5counter;
}

.mdr-side .level-5 {
    counter-reset: h6counter;
}

.mdr-side .level-2 > .tree-node-item .tree-node-content::before {
    counter-increment: h2counter;
    content: counter(h2counter) ". " !important;
}

.mdr-side .level-3 > .tree-node-item .tree-node-content::before {
    counter-increment: h3counter;
    content: counter(h2counter) "." counter(h3counter) ". " !important;
}

.mdr-side .level-4 > .tree-node-item .tree-node-content::before {
    counter-increment: h4counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) ". " !important;
}

.mdr-side .level-5 > .tree-node-item .tree-node-content::before {
    counter-increment: h5counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "."
        counter(h5counter) ". " !important;
}

.mdr-side .level-6 > .tree-node-item .tree-node-content::before {
    counter-increment: h6counter;
    content: counter(h2counter) "." counter(h3counter) "." counter(h4counter) "."
        counter(h5counter) "." counter(h6counter) ". " !important;
}
```
