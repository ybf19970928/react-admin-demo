
export interface IRouter {
    title: string,
    key: string,
    children?: IRouter[]
}
export const routers: IRouter[] = [
    {
        title: '首页',
        key: '/'
    },
    {
        title: '测试侧边栏',
        key: '/page',
        children: [
            {
                title: '测试侧边栏1',
                key: '/page/page1'
            },
            {
                title: '测试侧边栏2',
                key: '/page/page2',
                children: [
                    {
                        title: '测试侧边栏2-2',
                        key: '/page/page2/page2-2'
                    }
                ]
            },
            {
                title: '测试侧边栏3',
                key: '/page/page3'
            },
        ]
    },
    {
        title: '功能组件',
        key: '/tools',
        children: [
            {
                title: '功能组件1',
                key: '/tools/tools1'
            },
            {
                title: '功能组件2',
                key: '/tools/tools2'
            },
            {
                title: '功能组件3',
                key: '/tools/tools3'
            },
        ]
    }
]