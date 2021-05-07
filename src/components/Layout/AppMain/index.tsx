import React, { FC } from 'react';
import { Layout, Breadcrumb } from 'antd';
import Home from '../../../views/Home'
import Page1 from '../../../views/page1'
import Page2 from '../../../views/page2'
import Page3 from '../../../views/page3'
import {
  Switch,
  Route
} from "react-router-dom";
const { Content  } = Layout;
const AppMain:FC = () => {
    return (
        <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/page/page1">
            <Page1 />
          </Route>
          <Route path="/page/page2">
            <Page2 />
          </Route>
          <Route path="/page/page3">
            <Page3 />
          </Route>
        </Switch>
      </Content>
    )
}
export default AppMain