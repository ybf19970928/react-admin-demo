import { SET_ROUTER_MENU } from "../actions/routers"
import { constantRouterMap, IRouter } from "../states/routers"
interface IAction {
    type: string,
    route: IRouter[]
}
const getRouterMenu = (state = constantRouterMap, action:IAction) => {
    if (action.type === SET_ROUTER_MENU) {
        return action.route
    }
    return state
}
export {
    getRouterMenu
}