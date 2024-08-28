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
import { Link } from 'react-router-dom'
import Filter from './Filter';
const { Header, Sider, Content } = Layout;




const DefaultLayout = (props) => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    function logoutUser(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'))
        localStorage.removeItem('user');

        window.location.href = "/login";

    }

    const user = JSON.parse(localStorage.getItem('user'))


    return (


        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}
                style={{ position: 'sticky', overflow: 'auto', height: '100%', top: 0 }}
            >

                <div className="logo">

                    {collapsed ? <h1>RJ</h1> : <h1> CareerLink</h1>}


                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={[window.location.pathname]}
                    items={[
                        {
                            key: '/',
                            icon: <HomeOutlined />,
                            label: <Link to="/">Home</Link>,
                        },
                        {
                            key: '/profile',
                            icon: <UserOutlined />,
                            label: <Link to="/profile">My Profile</Link>,
                        },
                        {
                            key: '/appliedjobs',
                            icon: <UploadOutlined />,
                            label: <Link to='/appliedjobs'>AppliedJob</Link>,
                        },

                        {
                            key: '/postjob',
                            icon: <PlusOutlined />,
                            label: <Link to="/postjob">Post Job</Link>,
                        },


                        {
                            key: '/posted',
                            icon: <CheckOutlined />,
                            label: <Link to="/posted">Posted</Link>,
                        },
                        {
                            key: '/logout',
                            icon: <LogoutOutlined />,
                            label: <Link onClick={logoutUser}>Logout</Link>,
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header

                    style={{
                        padding: 0,
                        background: colorBgContainer,
                        position: 'sticky',
                        zIndex: 9999,
                        top: 0,

                    }}

                >

                    <div className="flex justify-content-between m-3">


                        <Button
                            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '15px',
                                width: 34,
                                height: 64,
                                background: colorBgContainer,

                            }}
                        />


                        <Filter />


                        <div style={{ display: collapsed ? 'none' : 'inline' }} class="circle">
                            <Link to="/profile">
                                <h5 className="circle-inner"><b>{user.username ? user.username.slice(0, 1).toUpperCase() : ""}</b></h5>
                            </Link>
                        </div>

                    </div>

                </Header>
                <Content
                    style={{

                        padding: 13,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    {props.children}
                </Content>
            </Layout>
        </Layout >
    );
};
export default DefaultLayout;