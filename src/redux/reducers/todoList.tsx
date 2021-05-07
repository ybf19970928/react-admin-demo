import { ADD_TODO_ITEM, COMPLETED_ITEM, REMOVE_ITEM } from "../actions/todoList";
import { ITodo, todo_list } from "../states/todoList";

interface IAction {
    type: string,
    item: ITodo
}
const useTodoItem = (state = todo_list, action: IAction) => {
    switch(action.type){
        case ADD_TODO_ITEM:
         return [...state, action.item];
        case REMOVE_ITEM:
            return state.filter(item => item.id !== action.item.id);
        case COMPLETED_ITEM: 
            const newState = state.map(item => {
                if (item.id === action.item.id) {
                    item.completed = !item.completed
                }
                return item
            })
            return newState
        default:
            return state
    }
}
export {
    useTodoItem
}