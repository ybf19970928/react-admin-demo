import React, { FC } from 'react';
import { useSelector } from 'react-redux'
import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { RootState } from '../../../redux';
import logo from '../../../logo.svg';
import { Link, useLocation, withRouter } from 'react-router-dom'

const {  Sider } = Layout;
const { SubMenu } = Menu;

const SideBar:FC = () => {
  const isCollapsed = useSelector((state: RootState) => state.collapsed)
    return (
        <Sider collapsible trigger={null} collapsed={isCollapsed}>
        <div className="logo" style={{height: '60px', display: 'flex', justifyContent: 'center'}}>
          <img src={logo} alt="logo"/>
        </div>
        <Menu theme="dark" defaultSelectedKeys={[useLocation().pathname]} 
        mode="inline">
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            <Link to="/">Option 1</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key="/page" icon={<UserOutlined />} title="测试侧边栏">
            <Menu.Item key="/page1">
              <Link to="/page/page1">测试侧边栏1</Link>
            </Menu.Item>
            <Menu.Item key="/page2">
              <Link to="/page/page2">测试侧边栏2</Link>
            </Menu.Item>
            <Menu.Item key="/page3">
              <Link to="/page/page3">测试侧边栏3</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
    )
}
export default withRouter(SideBar)