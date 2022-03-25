import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { Outlet } from 'react-router-dom';
const { Header, Content, Sider } = Layout;
import React, { useState } from 'react';
import MenuComponent from './components/Menu';
import User from './components/User';
import Bread from './components/Bread';

function BaseLayout () {
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {setCollapsed(!collapsed)}

  return (
    <Layout className="h-100vh">
        <Sider trigger={null} collapsible collapsed={collapsed} className="overflow-auto h-full">
          <div className="logo" />
          <MenuComponent />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background flex justify-between" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: toggle,
            })}
            <User />
          </Header>
          <Bread />
          <Content
            className="site-layout-background"
            style={{
              margin: '0 16px 24px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
  )
}

export default BaseLayout