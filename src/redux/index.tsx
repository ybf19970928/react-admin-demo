import { createStore, combineReducers } from 'redux'
import { changeCollapsed } from './reducers/changeCollapsed'
import { iscollapsed } from './states/collapsed'

const StoreReducer = combineReducers({
    collapsed: changeCollapsed
})
const StoreState = {
    collapsed: iscollapsed
}

const store = createStore(StoreReducer, StoreState)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store