import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import { Layout, Menu } from 'antd';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { RootState } from '../../../redux';
import logo from '../../../logo.svg';
import { Link, useLocation} from 'react-router-dom'
import { routers, IRouter } from '../../../router/routers'

const {  Sider } = Layout;
const { SubMenu } = Menu;

const SideBar:FC = () => {
  const [currentOpenKeys, setOpenKeys] = useState<string[]>([])
  const pathname = useLocation().pathname
  const isCollapsed = useSelector((state: RootState) => state.collapsed)
  // 只有一级菜单
  const renderMenuItem = (router: IRouter) => {
    return (
      <Menu.Item key={router.key} icon={<PieChartOutlined />}>
         <Link to={router.key}>{router.title}</Link>
      </Menu.Item>
    )
  }
  // 多级菜单
  const renderSubMenu = (router: IRouter, children: IRouter[]) => {
    return (
      <SubMenu key={router.key} icon={<UserOutlined />} title={router.title}>
       {children&&children.map(router => {
         return router.children && router.children.length> 0?
         renderSubMenu(router,router.children)
         : renderMenuItem(router)
       })}
      </SubMenu>
    )
  }
  const openChange  = (openKeys: any[]) => {
    setOpenKeys(openKeys)
  }
  useEffect(() => {
    setOpenKeys([pathname.split('/').slice(0, pathname.split('/').length-1).join('/')])
  },[pathname])
    return (
        <Sider collapsible trigger={null} collapsed={isCollapsed}>
        <div className="logo" style={{height: '60px', display: 'flex', justifyContent: 'center'}}>
          <img src={logo} alt="logo"/>
        </div>
        <Menu theme="dark" selectedKeys={[useLocation().pathname]}
        openKeys={currentOpenKeys} onOpenChange={openChange}
        mode="inline">
          { routers && routers.map(route => {
              return route.children?
                renderSubMenu(route, route.children)
                :
                renderMenuItem(route)
          }) }
        </Menu>
      </Sider>
    )
}
export default SideBar