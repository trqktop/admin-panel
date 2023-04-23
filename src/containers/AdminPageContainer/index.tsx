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

  const siderItems: MenuItem[] = [
    getItem('Главная', '1', <Link to=''><SolutionOutlined /></Link>),
    getItem('Товары', '2', <Link to='products'><SolutionOutlined /></Link>),
    getItem('Категории', '3', <ShoppingCartOutlined />),// [ getItem('Товары', '5', <Link to="products"><ShoppingCartOutlined /></Link>), getItem('Категории', '6', <Link to="products"><ShoppingCartOutlined /></Link>), getItem('Бренды', '7', <Link to="products"><ShoppingCartOutlined /></Link>)]
    getItem('Бренды', '5', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Заказы', '6', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Пользователи', '7', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Промокоды', '8', <Link to="setting"><SettingOutlined /></Link>),
    getItem('Настройки', '9', <Link to="setting"><SettingOutlined /></Link>),
  ];

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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider theme='light'>
        <Menu defaultSelectedKeys={['1']} mode="inline" items={siderItems} />
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
