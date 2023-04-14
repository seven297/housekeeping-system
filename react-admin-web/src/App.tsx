import React, { useState } from 'react';
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { Layout, theme } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import './App.css'

import Navigation from './components/layout/Navigation';
import loginStore from './store/login';
import useStorage, { StorageKey } from './hooks/useStorage';

function App() {
	const { Header, Sider, Content } = Layout
	const { token: { colorBgContainer } } = theme.useToken()
	const loginStorage = useStorage(StorageKey.login)

	const [collapsed, setCollapsed] = useState(false)
	const [loginState, setLoginState] = useState(loginStorage.get<boolean>())

	loginStore.subscribe(() => setLoginState(loginStore.getState() as boolean))
	return (
		loginState
			? <Layout className="App">
					<Sider trigger={null} collapsible collapsed={collapsed}>
						<div className="logo">后台管理系统</div>
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
							<Outlet></Outlet>
						</Content>
					</Layout>
				</Layout>
			: <Outlet></Outlet>
	)
	
}

export default App
