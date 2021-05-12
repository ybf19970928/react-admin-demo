import React, { FC, useEffect, useState, Suspense, lazy  } from 'react';
import { Layout, Breadcrumb } from 'antd';
import { useLocation } from 'react-router';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux'
import { scrollTo } from '../../../utils/scrollTo'
import {
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { RootState } from '../../../redux';

const Home = lazy(() => import('../../../views/Home'))
const Page1 = lazy(() => import('../../../views/page1'))
const Page2 = lazy(() => import('../../../views/page2'))
const Page3 = lazy(() => import('../../../views/page3'))
const NoFoundPage = lazy(() => import('../../../views/error-page/404'))

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
    scrollTo()
  }, [pathname])
    return (
        <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0', cursor: 'pointer' }} separator=">">
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
        <Suspense fallback={<div>loading...</div>}>
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
            <Route path='/404' component={NoFoundPage} />
            <Redirect from='*' to='/404' />
          </Switch>
        </Suspense>
      </Content>
    )
}
export default AppMain