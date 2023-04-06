import React, { useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css'

import Navigation from './components/layout/Navigation';

function App() {
	const { Header, Sider, Content } = Layout;
	const { token: { colorBgContainer } } = theme.useToken();
	const [collapsed, setCollapsed] = useState(false);

	return (
		<Layout className="App">
			<Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Navigation />
			</Sider>
			<Layout className="site-layout">
				<Header style={{ padding: 0, background: colorBgContainer }}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
						style: { padding: '0 24px' },
						onClick: () => setCollapsed(!collapsed),
					})}
				</Header>
				<Content
					style={{
						margin: '24px 16px',
						padding: 24,
						minHeight: 280,
						background: colorBgContainer,
					}}
				>
					{/* children router view */}
					<Routes>
							<Route path={'/'} element={<Navigate replace to="/login" />} />
					</Routes>
					<Outlet></Outlet>
				</Content>
			</Layout>
		</Layout>
	)
}

export default App
