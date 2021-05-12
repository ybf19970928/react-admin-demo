import React, { FC, useEffect, useState } from 'react';
import { Button } from 'antd';
import { useDispatch, useStore } from 'react-redux'
// import { getRouterMenu } from '../../redux/actions/routers';
import { dateTransform } from '../../utils/countDown'
const Page1: FC = () => {
    const future = new Date('2021/11/11 20:10:10').getTime() / 1000
    const [state, setState] = useState<string>(dateTransform(future - Date.now()/1000))
    useEffect(() => {
      let timer = setInterval(() => {
        setState(dateTransform(future - Date.now()/1000))
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }, [future])
    const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString())
    useEffect(() => {
      let timer = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString())
      }, 1000)
      return () => {
        clearInterval(timer)
      }
    }, [])
    const dispatch = useDispatch()
    const store = useStore().getState()
    const handleCollapsed = ():void => {
      dispatch({
        type: 'CHANGE_COLLAPSED'
      })
    }
    useEffect(() => {
      // dispatch(getRouterMenu())
      console.log(store.routerMenu)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        <h2>倒计时: {state}</h2>
        <h2>当前时间:{ currentTime }</h2>
        <Button type="primary"
        onClick={handleCollapsed}
        >切换侧边栏</Button>
      </div>
    )
}
export default Page1