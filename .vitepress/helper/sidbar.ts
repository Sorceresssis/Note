import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'


const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: 'base' });

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

export async function getSidebarItem(docRoot: string, fullPath: string): Promise<VPC.SidebarItem | void> {
    const stat = await fs.promises.stat(fullPath)
    if (stat.isFile()) {
        if (!fullPath.endsWith('.md')) {
            return
        }
        const f = await parseFrontmatter(fullPath)
        return {
            text: f.text ?? path.basename(fullPath, '.md'),
            isFrontmatter: Boolean(f.text),
            link: `/${path.relative(docRoot, fullPath).replace(/\\/g, '/')}`,
        } as VPC.SidebarItem
    }


    if (stat.isDirectory()) {
        const entries = await fs.promises.readdir(fullPath)
        const items = (await Promise.all(entries
            .filter(entry => {
                return !entry.startsWith('index')
                    && !entry.startsWith('.')
                    && !entry.startsWith('assets')
                    && !entry.startsWith('image')
            })
            .sort(((a, b) => collator.compare(a, b)))
            .map(async entry => getSidebarItem(docRoot, path.join(fullPath, entry)))))
            .filter(item => item !== void 0) as VPC.SidebarItem[]

        const item: VPC.SidebarItem = {
            text: path.basename(fullPath),
            isFrontmatter: false,
            collapsed: false,
            items,
        }
        const hasIndex = await fs.promises.readdir(fullPath).then(entries => entries.includes('index.md'))
        if (hasIndex) {
            const indexPath = path.join(fullPath, 'index.md')
            const f = await parseFrontmatter(indexPath)
            if (f.text) {
                item.text = f.text
                item.isFrontmatter = true
            }
            item.link = `/${path.relative(docRoot, fullPath).replace(/\\/g, '/')}`
        }

        return item
    }
}


export function findFirstLink(sidebarItem: VPC.SidebarItem): string | void {
    if (sidebarItem.link) return sidebarItem.link

    for (const item of sidebarItem.items) {
        const link = findFirstLink(item)
        if (link) {
            return link
        }
    }
}
