import fs from 'node:fs'
import { docRoot } from '../constant'



export async function genHomeIndex(wsrs: VPC.WorkspaceResolved[]): Promise<void> {
    const indexPath = `${docRoot}/index.md`
    await fs.promises.writeFile(indexPath,
        `---
layout: home

hero:
    name: "Sorceress's Note"
    tagline: "Everything has its wonders, even darkness and silence."
    actions: ${wsrs.map(wsr => `
        - theme: alt
          text: ${wsr.label}
          link: ${wsr.entryLink}`
        ).join('')}
---
`
    )
}