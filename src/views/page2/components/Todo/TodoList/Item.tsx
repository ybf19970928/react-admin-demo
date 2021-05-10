import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../../../../redux/states/todoList'
import { Checkbox, Button } from 'antd';
import { COMPLETED_ITEM, REMOVE_ITEM } from '../../../../../redux/actions/todoList';
import styles from './todoList.module.scss'

interface IPropsType {
    todoItem: ITodo
}
const Item:FC<IPropsType> = (item) => {
    const dispatch = useDispatch()

    const onChange = (item: ITodo) => {
        dispatch({
            type: COMPLETED_ITEM,
            item
        })
    }
    const handeDelete = (item: ITodo) => {
        dispatch({
            type: REMOVE_ITEM,
            item
        })
    }
    return (
        <div>
            <Checkbox onChange={() => onChange(item.todoItem)} style={{fontSize: 24}}>
                <span className={ item.todoItem.completed ? styles['completed'] : ''}>{item.todoItem.constext}</span>    
            </Checkbox> 
            <Button danger onClick={() => handeDelete(item.todoItem)}>删除</Button>
        </div>
    )
}

export default Item