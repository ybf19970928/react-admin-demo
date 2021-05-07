import React, { FC } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList/index';
const Todo: FC= () => {
    return (
        <>
            <TodoInput />
            <TodoList />
        </>
    )
}
export default Todo