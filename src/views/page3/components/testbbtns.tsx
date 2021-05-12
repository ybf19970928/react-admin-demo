import React, { FC, useContext } from 'react'
import { ThemeContext } from '../index'

const TestBtns:FC = (props) => {
    // useContext 返回的是React.createContext的当前值
    const themes = useContext(ThemeContext)
    return (
        <button style={{ background: themes.background, color: themes.foreground }}>
        I am styled by theme context!
        </button>
    )
}

export default TestBtns

