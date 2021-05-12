import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { ITodo } from '../../../../../redux/states/todoList'
import { Checkbox, Button } from 'antd';
import { COMPLETED_ITEM, REMOVE_ITEM } from '../../../../../redux/actions/todoList';
import styles from './todoList.module.scss'

interface IPropsType {
    todoItem: ITodo
}

const Item:FC<IPropsType> = ({ todoItem }) => {
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
            <Checkbox onChange={() => onChange(todoItem)} style={{fontSize: 24}}>
                <span className={ todoItem.completed ? styles['completed'] : ''}>{todoItem.constext}</span>    
            </Checkbox> 
            <Button danger onClick={() => handeDelete(todoItem)}>删除</Button>
        </div>
    )
}

export default Item