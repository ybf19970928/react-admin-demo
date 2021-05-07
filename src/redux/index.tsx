import { createStore, combineReducers } from 'redux'
import { changeCollapsed } from './reducers/changeCollapsed'
import { iscollapsed } from './states/collapsed'
import { useTodoItem } from './reducers/todoList'
import { todo_list } from './states/todoList'

const StoreReducer = combineReducers({
    collapsed: changeCollapsed,
    todoItem: useTodoItem
})
const StoreState = {
    collapsed: iscollapsed, 
    todoItem: todo_list
}

const store = createStore(StoreReducer, StoreState)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store