import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { changeCollapsed } from './reducers/changeCollapsed'
import { iscollapsed } from './states/collapsed'
import { useTodoItem } from './reducers/todoList'
import { todo_list } from './states/todoList'
import { getRouterMenu } from './reducers/routers'
import { constantRouterMap } from './states/routers'
const StoreReducer = combineReducers({
    collapsed: changeCollapsed,
    todoItem: useTodoItem,
    routerMenu: getRouterMenu
})
const StoreState = {
    collapsed: iscollapsed, 
    todoItem: todo_list,
    routerMenu: constantRouterMap
}

const store = createStore(StoreReducer, StoreState, applyMiddleware(thunkMiddleware))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store