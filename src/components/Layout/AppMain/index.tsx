import React, { FC, useEffect, useState } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useLocation } from 'react-router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import Home from '../../../views/Home'
import Page1 from '../../../views/page1'
import Page2 from '../../../views/page2'
import Page3 from '../../../views/page3'
import {
  Switch,
  Route
} from "react-router-dom";
import { RootState } from '../../../redux';

const { Content  } = Layout;
const AppMain:FC = () => {
  const [routeMatched, setRouteMatched] = useState<string[]>(['home'])
  const dispatch = useDispatch()
  const isCollapsed = useSelector((state: RootState) => state.collapsed)
  const handleCollapsed = ():void => {
    dispatch({
      type: 'CHANGE_COLLAPSED'
    })
  }
  const pathname = useLocation().pathname
  useEffect(() => {
    if (pathname === '/'){
      setRouteMatched(['home'])
    }else{
      setRouteMatched(pathname.slice(1).split('/'))
    }
  }, [pathname])
    return (
        <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} separator=">">
        <Breadcrumb.Item onClick={handleCollapsed}>
         {isCollapsed ? 
         <MenuFoldOutlined style={{ fontSize: '16px', color: '#08c' }} /> 
         : <MenuUnfoldOutlined style={{ fontSize: '16px', color: '#eb2f96' }} />}
        </Breadcrumb.Item>
          {
            routeMatched.map((ele, index)=> {
              return (
                <Breadcrumb.Item key={index}>{ele}</Breadcrumb.Item>
              )
            })
          }
        </Breadcrumb>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/page/page1">
            <Page1 />
          </Route>
          <Route exact path="/page/page2">
            <Page2 />
          </Route>
          <Route exact path="/page/page3">
            <Page3 />
          </Route>
          <Route exact path="" render={() => <h1>404页面</h1>} />
        </Switch>
      </Content>
    )
}
export default AppMain