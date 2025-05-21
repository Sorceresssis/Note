import { defineConfig } from 'vitepress'
import path from 'node:path'
import fs from 'node:fs'
import { getSidebarItem, findFirstLink, type SidebarItem } from './helper/sidbar'
import { docRoot } from './constant'
import { genHomeIndex } from './helper/home_page'

enum WorkspaceDir {
  FRONTEND = 'Frontend',
  BACKEND = 'Backend',
  LANGUAGE = 'Language',
  TOOLS = 'Tools',
}

type workspace = {
  label: string
  dir: WorkspaceDir
}

const workspaces: workspace[] = [
  { label: '工具', dir: WorkspaceDir.TOOLS },
  { label: '前端', dir: WorkspaceDir.FRONTEND },
  { label: '后端', dir: WorkspaceDir.BACKEND },
  { label: '语言', dir: WorkspaceDir.LANGUAGE },
]

type NavTreeItem = {
  label: string
  type: 'children' | 'link',
  workspaces: WorkspaceDir[]
}

const navTree: NavTreeItem[] = [
  {
    label: 'Web',
    type: 'children',
    workspaces: [
      WorkspaceDir.FRONTEND,
      WorkspaceDir.BACKEND,
    ]
  },
  {
    label: '工具',
    type: 'link',
    workspaces: [WorkspaceDir.TOOLS]
  }
]

type workspaceResolved = workspace & {
  sidebar: SidebarItem
  entryLink: string
}

export default async () => {
  const workspaceResolveds: workspaceResolved[] = await Promise.all(workspaces.map(async ws => {
    const sidebar = (await getSidebarItem(docRoot, path.join(docRoot, ws.dir)))!
    return {
      label: sidebar.isFrontmatter ? sidebar.text : ws.label,
      dir: ws.dir,
      sidebar,
      entryLink: findFirstLink(sidebar) || '/',
    }
  }))
  genHomeIndex(workspaceResolveds)

  const sidebarMulti = workspaceResolveds.reduce((acc, ws) => {
    acc[ws.dir] = ws.sidebar.items
    return acc
  }, {})

  const nav = navTree.map(item => {
    if (item.type === 'link') {
      if (item.workspaces.length !== 1) {
        throw new Error(`For navItem of type link, the length of its workspace must be 1, but got ${item.workspaces.length} in ${item.label}`)
      }
      const wsr = workspaceResolveds.find(ws => ws.dir === item.workspaces[0])
      if (!wsr) {
        throw new Error(`Cannot find workspace ${item.workspaces[0]} in ${item.label}`)
      }

      return {
        text: wsr.sidebar.isFrontmatter ? wsr.label : item.label,
        link: wsr.entryLink,
      }
    }

    if (item.type === 'children') {
      return {
        text: item.label,
        items: item.workspaces.map(wsDir => {
          const wsr = workspaceResolveds.find(ws => ws.dir === wsDir)
          if (!wsr) {
            throw new Error(`Cannot find workspace ${wsDir} in ${item.label}`)
          }
          return {
            text: wsr.label,
            link: wsr.entryLink,
          }
        })
      }
    }

    throw new Error(`Unknown navItem type ${item.type} in ${item.label}`)
  })

  return defineConfig({
    title: "Sorceress's Note",
    description: '学习笔记',
    head: [
      ['link', { rel: 'icon', type: 'image/x-icon', href: '/Note/favicon.ico' }],
      ['meta', { property: 'og:type', content: 'website' }],
      ['meta', { property: 'og:site_name', content: 'Sorceress\'s Note' }],
    ],
    lang: 'zh-CN',
    base: '/Note',
    themeConfig: {
      search: { provider: 'local' },
      nav,
      sidebar: sidebarMulti,
      socialLinks: [
        { icon: 'github', link: 'https://github.com/Sorceresssis/Note' }
      ]
    },
    ignoreDeadLinks: true,
    markdown: {
      image: { lazyLoading: true },
      config: (md) => {
        md.set({ html: false })
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
