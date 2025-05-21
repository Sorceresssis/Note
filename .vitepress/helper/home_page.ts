import fs from 'node:fs'
import { docRoot } from '../constant'


export async function genHomeIndex(workerspaces: {}[]): Promise<void> {
    const indexPath = `${docRoot}/index.md`
    await fs.promises.writeFile(indexPath, '')
}