export interface IRouter {
    title: string,
    key: string,
    hidden?: boolean,
    children?: IRouter[]
}

export const constantRouterMap: IRouter[]= []
