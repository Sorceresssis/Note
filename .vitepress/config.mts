import { defineConfig } from 'vitepress'
import path from 'node:path'
import fs from 'node:fs'
import { getSidebarItem, type SidebarItem } from './helper/sidbar'

const docRoot = path.resolve(__dirname, '..')
const groups = [
  {
    text: 'Web',
    workerspaces: [
      { text: '前端', dir: 'Frontend' },
      { text: '后端', dir: 'Backend' },
      { text: '工具', dir: 'Tools' },
      { text: 'Language', dir: 'Language' },
      { text: '平台', dir: 'Platforms' },
    ]
  }
]

function findFirstLink(sidebarItem: SidebarItem) {
  if (!sidebarItem) {
    return '/'
  }

  if (sidebarItem.link) return sidebarItem.link

  for (const item of sidebarItem.items) {
    const link = findFirstLink(item)
    if (link) {
      return link
    }
  }
}



export default async () => {
  const workerspaces = await Promise.all(
    groups.flatMap(g => g.workerspaces).map(async ws => ({
      dir: ws.dir,
      text: ws.text,
      sidebar: await getSidebarItem(docRoot, path.join(docRoot, ws.dir))
    }))
  )

  const sidebar = workerspaces.reduce((acc, item) => {
    acc[item.dir] = item.sidebar
    return acc
  }, {})

  const nav = groups.map(group => ({
    text: group.text,
    items: group.workerspaces.map(ws => ({
      text: ws.text,
      link: findFirstLink(sidebar[ws.dir]) || '/',
    }))
  }))

  return defineConfig({
    title: "Sorceress's Note",
    description: '学习笔记',
    base: '/Note',
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/Note/favicon.ico' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Sorceress\'s Note' }],
    ],
    lang: 'zh-CN',
    themeConfig: {
      search: {
        provider: 'local'
      },
      nav,
      sidebar,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Sorceresssis/Note' }
      ]
    },
    ignoreDeadLinks: true,
    markdown: {
      image: {
        lazyLoading: true
      },
      config: (md) => {
        md.set({ html: false }) // 禁用所有 HTML 标签解析
      },
      languageAlias: {
        'svg': 'html',
        'mysql': 'sql',
      }
    },
    vite: {
      plugins: [
        {
          name: 'markdown-image-fallback',
          enforce: 'pre',
          transform(code, id) {
            if (!id.endsWith('.md')) return;

            const imageRegex = /!\[(.*?)\]\((.*?)\)/g;

            const replaced = code.replace(imageRegex, (match, alt, src) => {
              const resolvedPath = path.resolve(path.dirname(id), src);
              if (!fs.existsSync(resolvedPath)) {
                // 替换为 fallback 图像（放在 .vitepress/public/image/image-not-found.png）
                return `![${alt}](/image/404.svg)`;
              }
              return match;
            });

            return replaced;
          }
        }
      ]
    }
  })
}
