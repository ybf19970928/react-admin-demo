import React, { FC, useState, ChangeEvent } from 'react';
import { Input } from 'antd';
import { useDispatch } from 'react-redux'
import { addTodoItem } from '../../../../../redux/actions/todoList';
import { ITodo } from '../../../../../redux/states/todoList';
const { Search } = Input;

const TodoInput: FC= () => {
    const [inputValue, setInputValue] = useState('')
    const dispatch = useDispatch()
    const handleChange = (event: ChangeEvent<HTMLInputElement> | undefined) => {
        setInputValue(event!.target.value)
    }

    const handleAdd = () => {
        if (inputValue.trim().length){
            const item: ITodo = {
                 id: new Date().getTime(),
                 constext: inputValue,
                 completed: false
            }
            dispatch(addTodoItem(item))
            setInputValue('')
        }
    }
    const onSearch = (value:string, event: ChangeEvent<HTMLInputElement> | React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent> | undefined) => {
        if (!value) return
        handleAdd()
    }
    return (
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        value={inputValue}
        onSearch={onSearch}
        onChange={handleChange}
        onPressEnter={handleAdd}
      />
    )
}
export default TodoInput