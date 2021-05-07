import { ITodo } from "../states/todoList"
export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const COMPLETED_ITEM = 'COMPLETED_ITEM'

const addTodoItem = (item: ITodo) => {
    return {
        type: ADD_TODO_ITEM,
        item
    }
}

const removeTodoItem = (id: number) => {
    return {
        type: REMOVE_ITEM,
        id
    }
}

const completedItem = (id: number) => {
    return {
        type: COMPLETED_ITEM,
        id
    }
}
export {
    addTodoItem,
    removeTodoItem,
    completedItem
}