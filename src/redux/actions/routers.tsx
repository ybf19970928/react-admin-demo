import { testApi } from '../../apis/testRequest'
import { IRouter } from '../states/routers'
import store from '../index'

export const SET_ROUTER_MENU = 'SETROUTERMENU'
const setRouterMenu = (route: IRouter) => {
    return {
        type: SET_ROUTER_MENU,
        route
    }
}
const getRouterMenu = () => {
    return () => {
        testApi().then(res => {
            store.dispatch(setRouterMenu(res.data))
        })
    }
}
export {
    getRouterMenu
}