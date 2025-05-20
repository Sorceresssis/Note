import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

export interface SidebarItem {
    text: string,
    collapsed?: boolean,
    items: SidebarItem[],
    link?: string,
}


interface Frontmatter {
    title: string,
    text: string,

}

async function parseFrontmatter(filePath: string) {
    const fullPath = path.resolve(filePath)
    const content = await fs.promises.readFile(fullPath, 'utf-8')

    const { data } = matter(content)
    const frontmatter: Frontmatter = data as Frontmatter

    return frontmatter
}

export async function getSidebarItem(docRoot: string, fullPath: string): Promise<SidebarItem | void> {
    const stat = await fs.promises.stat(fullPath)
    if (stat.isFile()) {
        if (!fullPath.endsWith('.md')) {
            return
        }
        const f = await parseFrontmatter(fullPath)
        return {
            text: f.text ?? path.basename(fullPath, '.md'),
            link: `/${path.relative(docRoot, fullPath).replace(/\\/g, '/')}`,
        } as SidebarItem
    }


    if (stat.isDirectory()) {
        const entries = await fs.promises.readdir(fullPath)
        const items = (await Promise.all(entries.filter(entry => {
            return !entry.startsWith('index')
                && !entry.startsWith('.')
                && !entry.startsWith('assets')
        }).map(async entry => getSidebarItem(docRoot, path.join(fullPath, entry))))
        ).filter(item => item !== void 0)

        const item: SidebarItem = {
            text: path.basename(fullPath),
            collapsed: false,
            items
        }
        const hasIndex = await fs.promises.readdir(fullPath).then(entries => entries.includes('index.md'))
        if (hasIndex) {
            const indexPath = path.join(fullPath, 'index.md')
            const f = await parseFrontmatter(indexPath)
            if (f.text) {
                item.text = f.text
            }
            item.link = `/${path.relative(docRoot, fullPath).replace(/\\/g, '/')}`
        }

        return item
    }
}
