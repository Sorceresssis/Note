import path from 'path'

export const docRoot = path.resolve(__dirname, '..')


enum WorkspaceDir {
    FRONTEND = 'Frontend',
    BACKEND = 'Backend',
    LANGUAGE = 'Language',
    TOOLS = 'Tools',
}

export const workspaces: VPC.Workspace[] = [
    { label: '工具', dir: WorkspaceDir.TOOLS },
    { label: '前端', dir: WorkspaceDir.FRONTEND },
    { label: '后端', dir: WorkspaceDir.BACKEND },
    { label: '语言', dir: WorkspaceDir.LANGUAGE },
]

export const navTree: VPC.NavTreeItem[] = [
    {
        label: 'Web',
        type: 'children',
        workspaceDirs: [
            WorkspaceDir.FRONTEND,
            WorkspaceDir.BACKEND,
        ]
    },
    {
        label: '工具',
        type: 'link',
        workspaceDirs: [WorkspaceDir.TOOLS]
    }
]