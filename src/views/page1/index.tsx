import React, { FC } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux'
const Page1: FC = () => {
    const dispatch = useDispatch()
    const handleCollapsed = ():void => {
      dispatch({
        type: 'CHANGE_COLLAPSED'
      })
    }
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h2>这是page1页面</h2>
        <Button type="primary"
        onClick={handleCollapsed}
        >切换侧边栏</Button>
      </div>
    )
}
export default Page1