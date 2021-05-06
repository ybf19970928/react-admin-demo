import React, { FC } from 'react';
import { Layout } from 'antd';
const { Header  } = Layout;
const HeaderComponent:FC = () => {
    return (
        <Header className="site-layout-background" style={{ padding: 0 }} />
    )
}
export default HeaderComponent