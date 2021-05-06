import React, { FC } from 'react';
import { Layout } from 'antd';
import SideBar from './SideBar';
import Header from './Header';
import AppMian from './AppMain';
import Footer from './Footer'
import {
  BrowserRouter as Router,
} from 'react-router-dom'

const LayoutComponent:FC = () => {
    return (
      <Router>
        <Layout style={{ minHeight: '100vh' }}>
            <SideBar />
            <Layout className="site-layout">
              <Header />
              <AppMian />
              <Footer />
            </Layout>
        </Layout>
      </Router>
    )
}

export default LayoutComponent