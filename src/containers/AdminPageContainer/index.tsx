import { Avatar, Breadcrumb, Button, Divider, Dropdown, Layout, Menu, Space, theme, ConfigProvider, App } from "antd";
import AnchorLink from "antd/es/anchor/AnchorLink";
import MenuDivider from "antd/es/menu/MenuDivider";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  ShoppingOutlined,
  PieChartOutlined,
  ShoppingCartOutlined,
  TeamOutlined,
  UploadOutlined,
  SolutionOutlined,
  SettingOutlined,
  UserOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DownOutlined,
  ContainerTwoTone,
} from '@ant-design/icons';
import styles from "./AdminPageContainer.module.scss";



import type { MenuProps } from 'antd';
import Item from "antd/es/list/Item";


const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
const { adminMenu, adminPage, adminContent }: any = { ...styles };
const AdminPageContainer = ({ children }: any) => {

  // const [collapsed, setCollapsed] = useState(false);
  const items1: MenuItem[] = [
    getItem('Главная', '1', <Link to='orders'><SolutionOutlined /></Link>),
    getItem('Товары', '2', <Link to='orders'><SolutionOutlined /></Link>),
    getItem('Категории', '3', <ShoppingCartOutlined />),// [ getItem('Товары', '5', <Link to="products"><ShoppingCartOutlined /></Link>), getItem('Категории', '6', <Link to="products"><ShoppingCartOutlined /></Link>), getItem('Бренды', '7', <Link to="products"><ShoppingCartOutlined /></Link>)]
    getItem('Бренды', '5', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Заказы', '6', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Пользователи', '7', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Промокоды', '8', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Настройки', '9', <Link to="setting"><SettingOutlined /></Link>),
  ];

  // const items: MenuItem[] = [
  //   getItem('Настройки профиля', '1', <Link to='ыыыы'><SolutionOutlined /></Link>),
  //   getItem('Выйти', '2', <Link to='ыыыыы'><SolutionOutlined /></Link>),
  // ]


  const items: MenuProps['items'] = [
    {
      label: <Link to='setting'><SolutionOutlined style={{ paddingRight: 8 }} />Настройки профиля</Link>,
      key: '0',
    },
    {
      label: <Link to='/'><SolutionOutlined style={{ paddingRight: 8 }} />Выйти</Link>,
      key: '1',
    },
  ];

  return (
    // <Layout style={{ minHeight: '100vh' }}>
    //   {/* <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
    //     <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
    //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
    //   </Sider> */}
    //   <Sider>
    //     {/* <Link to="orders">Заказы</Link>
    //     <Link to="customers">Покупатели</Link>
    //     <Link to="products">Товары</Link>
    //     <Link to="setting">Настройки</Link> */}
    //     <Menu defaultSelectedKeys={['1']} mode="inline" items={menuItems} />
    //   </Sider>
    //   <Content>
    //     <div>
    //       <Outlet />
    //     </div>
    //   </Content>
    // </Layout>
    // collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}




    // <Layout>
    //   <Sider>
    //     <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} />
    //     <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={siderMenuItems} />
    //   </Sider>
    //   <Layout className="site-layout" >
    //     <Header style={{ padding: '0 30px 0', display: 'flex', justifyContent: 'flex-end' }}>
    //       <div>
    //         <Avatar style={{ verticalAlign: 'middle' }} size='default' icon={<UserOutlined />} />
    //         <Dropdown menu={{ items }}>
    //           <a onClick={(e) => e.preventDefault()}>
    //             <Space>
    //               Ширин Павел
    //               <DownOutlined />
    //             </Space>
    //           </a>
    //         </Dropdown>
    //       </div>
    //     </Header>
    //     <Content style={{ margin: '0 16px' }}>
    //       <Outlet />
    //     </Content>
    //   </Layout>
    // </Layout>
    // <Header className="header" style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
    //     <Menu style={{ padding: '8px 0' }}>
    //       <Avatar src='https://bugaga.ru/uploads/posts/2019-05/1557238299_beznosye-1.jpg' style={{ marginRight: 16 }} size='large' icon={<UserOutlined />} />
    //       <Dropdown menu={{ items }} trigger={['click']}>
    //         <a onClick={(e) => e.preventDefault()}>
    //           <Space align='end'>
    //             User Name
    //             <DownOutlined />
    //           </Space>
    //         </a>
    //       </Dropdown>
    //     </Menu>
    //   </Header>
    //   <Layout>
    //     <Sider>
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['1']}
    //         style={{ height: '100%', borderRight: 0 }}
    //         items={items1}
    //       />
    //     </Sider>
    //     <Layout style={{ padding: '0 24px 24px' }}>
    //       <Content
    //         style={{
    //           padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //         }}
    //       >
    //         <Outlet />
    //       </Content>
    //     </Layout>
    //   </Layout>

    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light'>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={items1} />
      </Sider>
      <Layout className="site-layout">
        <Header style={{ padding: 0, background: '#f5f5f5', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 111 }}>
          <Avatar style={{ verticalAlign: 'middle', margin: 8 }} size='default' icon={<UserOutlined />} />
          <Dropdown menu={{ items }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                USER NAME
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#fff' }}>
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout >

  );
};

export default AdminPageContainer;
