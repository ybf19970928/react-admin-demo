import { iscollapsed } from '../states/collapsed'
import { CHANGE_COLLAPSED } from '../actions/changeCollapsed'

interface IAction {
    type: string
}
const changeCollapsed = (state = iscollapsed, action: IAction) => {
    if (action.type === CHANGE_COLLAPSED){
        return !state
    }
    return state
}
export {
    changeCollapsed
}