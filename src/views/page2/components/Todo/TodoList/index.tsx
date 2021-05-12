import React, { FC } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../redux'
import Item from './Item'
const TodoList: FC = React.memo(() => {
    const todoItem = useSelector((state: RootState) => state.todoItem)
    return (
        <>
        { todoItem.map(item => {
            return (
                <Item key={item.id} todoItem={item}></Item>
            )
        }) }
        </>
    )
})
export default TodoList