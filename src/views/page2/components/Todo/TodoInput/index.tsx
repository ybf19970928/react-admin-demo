import React, { FC, useState } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux'
import { ADD_TODO_ITEM } from '../../../../../redux/actions/todoList';
import { ITodo } from '../../../../../redux/states/todoList';
const { Search } = Input;

const TodoInput: FC= () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (e: any) => {
        setInputValue(e.target.value)
    }
    const handleAdd = () => {
        if (inputValue.trim().length){
            const item: ITodo = {
                 id: new Date().getTime(),
                 constext: inputValue,
                 completed: false
            }
            dispatch({
                type: ADD_TODO_ITEM,
                item
            })
            setInputValue('')
        }
    }
    return (
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        value={inputValue}
        onSearch={handleAdd}
        onChange={handleChange}
        onPressEnter={handleAdd}
      />
    )
}
export default TodoInput