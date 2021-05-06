import React, { FC, KeyboardEvent, useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

const TodoInput: FC= () => {
    const [inputValue, setInputValue] = useState('')
    const handleChange = (e: any) => {
        if (e.target.value.trim().length){
            setInputValue(e.target.value)
        }
    }
    const handleAdd = (e: KeyboardEvent<HTMLInputElement>) => {
        setInputValue('')
    }
    return (
        <Search
        placeholder="input search text"
        allowClear
        enterButton="Search"
        size="large"
        value={inputValue}
        onChange={handleChange}
        onPressEnter={handleAdd}
      />
    )
}
export default TodoInput