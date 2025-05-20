import { defineConfig } from 'vitepress'
import path from 'node:path'
import { getSidebarItem, type SidebarItem } from './helper/sidbar'

const docRoot = path.resolve(__dirname, '..')
const groups = [
  {
    text: 'Web',
    workerspaces: [
      { text: '前端', dir: 'Frontend' },
      { text: '后端', dir: 'Backend' },
      { text: '工具', dir: 'Tools' },
    ]
  },
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
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
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
    markdown: {
      image: {
        lazyLoading: true
      },
      languageAlias: {
        'svg': 'html',
        'mysql': 'sql',
      }
    }
  })
}
