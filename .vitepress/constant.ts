export const REPOSITORY = 'https://github.com/Sorceresssis/Note'


enum WorkspaceDir {
    L10_JAVASCRIPT = 'L10_JavaScript',
    L11_PYTHON = 'L11_Python',

    TOOLS = '30_Tools',
    COMPUTER_NETWORK = '1_ComputerNetwork',
    BACKEND = '9_Backend',
    FRONTEND = '10_Frontend',
    INTERVIEW = '100_Interview',
    LIFE = '105_Life',



}

export const workspaces: VPC.Workspace[] = [
    { label: 'JavaScript', dir: WorkspaceDir.L10_JAVASCRIPT },
    { label: 'Python', dir: WorkspaceDir.L11_PYTHON },
    { label: '工具', dir: WorkspaceDir.TOOLS },
    { label: '前端', dir: WorkspaceDir.FRONTEND },
    { label: '后端', dir: WorkspaceDir.BACKEND },
    { label: '计算机网络', dir: WorkspaceDir.COMPUTER_NETWORK },
    { label: '面试', dir: WorkspaceDir.INTERVIEW },
    { label: '生活', dir: WorkspaceDir.LIFE },
]

export const navTree: VPC.NavTreeItem[] = [
    {
        label: 'Language',
        type: 'children',
        workspaceDirs: [
            WorkspaceDir.L10_JAVASCRIPT,
            WorkspaceDir.L11_PYTHON
        ]
    },
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
    },
    {
        label: '基础知识',
        type: 'children',
        workspaceDirs: [
            WorkspaceDir.COMPUTER_NETWORK
        ]
    }
]
