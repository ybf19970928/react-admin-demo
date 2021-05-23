import React, { FC, useEffect, useState } from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import Header from './Header';
import AppMian from './AppMain';
import Footer from './Footer'
import { useLocation } from 'react-router-dom';
import Login from '../../views/login'
const LayoutComponent:FC = () => {
    const [isNeedLogin, setIsNeedLogin] = useState<boolean>(false)
    const pathname = useLocation().pathname
    const LayOutMain = () => {
        return (
            <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
              <Header />
              <AppMian />
              <Footer />
            </Layout>
        </Layout>
        
        )
    }
    useEffect(() => {
        localStorage.getItem('reactToken')?setIsNeedLogin(true): setIsNeedLogin(false)
    }, [pathname])
    return (
        // <Router>
        <>
        {
          isNeedLogin ? <LayOutMain /> : <Login />
        }
        </>
        // </Router>
        // <Layout style={{ minHeight: '100vh' }}>
        //     <SideBar />
        //     <Layout className="site-layout">
        //       <Header />
        //       <AppMian />
        //       <Footer />
        //     </Layout>
        // </Layout>
    )
}

export default LayoutComponent