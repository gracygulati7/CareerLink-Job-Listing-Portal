import {
	MenuFoldOutlined,
	UploadOutlined,
	UserOutlined,
	HomeOutlined,
	MenuUnfoldOutlined,
	LogoutOutlined,
	PlusOutlined,
	CheckOutlined
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Filter from './Filter';

const { Header, Sider, Content } = Layout;

const DefaultLayout = props => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, colorTextBase }
	} = theme.useToken();

	function logoutUser(e) {
		e.preventDefault();
		localStorage.removeItem('user');
		window.location.href = '/login';
	}

	const user = JSON.parse(localStorage.getItem('user'));

	return (
		<Layout>
			<Sider
				trigger={null}
				collapsible
				collapsed={collapsed}
				style={{
					position: 'sticky',
					overflow: 'auto',
					height: '100%',
					top: 0,
					backgroundColor: '#001529', // Dark theme background color
					color: '#fff' // Light text color
				}}
			>
				<div className="logo" style={{ color: '#fff' }}>
					{' '}
					{/* Adjust logo color */}
					{collapsed ? <h1>CL</h1> : <h1>CareerLink</h1>}
				</div>
				<Menu
					theme="dark"
					mode="inline"
					defaultSelectedKeys={[window.location.pathname]}
					items={[
						{
							key: '/',
							icon: <HomeOutlined style={{ color: '#fff' }} />, // Icon color
							label: <Link to="/">Home</Link>
						},
						{
							key: '/profile',
							icon: <UserOutlined style={{ color: '#fff' }} />,
							label: <Link to="/profile">My Profile</Link>
						},
						{
							key: '/appliedjobs',
							icon: <UploadOutlined style={{ color: '#fff' }} />,
							label: <Link to="/appliedjobs">Applied Jobs</Link>
						},
						{
							key: '/postjob',
							icon: <PlusOutlined style={{ color: '#fff' }} />,
							label: <Link to="/postjob">Post Job</Link>
						},
						{
							key: '/posted',
							icon: <CheckOutlined style={{ color: '#fff' }} />,
							label: <Link to="/posted">Posted</Link>
						},
						{
							key: '/logout',
							icon: <LogoutOutlined style={{ color: '#fff' }} />,
							label: <Link onClick={logoutUser}>Logout</Link>
						}
					]}
				/>
			</Sider>
			<Layout>
				<Header
					style={{
						padding: 0,
						background: '#fff', // Header background color
						position: 'sticky',
						zIndex: 9999,
						top: 0,
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
					}}
				>
					<Button
						icon={
							collapsed ? (
								<MenuUnfoldOutlined />
							) : (
								<MenuFoldOutlined />
							)
						}
						onClick={() => setCollapsed(!collapsed)}
						style={{
							fontSize: '16px',
							width: 48,
							height: 64,
							background: '#001529', // Button background color
							color: '#fff' // Button icon color
						}}
					/>
					<Filter />
					<div style={{ display: collapsed ? 'none' : 'inline' }}>
						<Link to="/profile">
							<div
								style={{
									display: 'inline-block',
									width: 40,
									height: 40,
									borderRadius: '50%',
									backgroundColor: '#e6f7ff', // User icon background color
									color: '#1890ff', // User icon text color
									textAlign: 'center',
									lineHeight: '40px',
									fontSize: '16px',
									fontWeight: 'bold'
								}}
							>
								{user.username
									? user.username.slice(0, 1).toUpperCase()
									: ''}
							</div>
						</Link>
					</div>
				</Header>
				<Content
					style={{
						padding: '24px',
						minHeight: 'calc(100vh - 64px)',
						background: '#f0f2f5' // Content background color
					}}
				>
					{props.children}
				</Content>
			</Layout>
		</Layout>
	);
};

export default DefaultLayout;
