import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Outlet, useNavigate } from "react-router-dom";
import AdminLoginControlPanel from "../../components/AdminLoginContolPanel";
import React, { useContext, useMemo, useRef } from "react";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Context } from "../../store";

const AdminLayoutContainer: React.FC = () => {
  const ctx = useContext(Context);
  const navigate = useNavigate();
  const selectedKey = useRef(1);
  const adminControlPanelHandler = () => {
    localStorage.clear();
    navigate("/");
  };

  const items = useMemo(
    () => [
      {
        key: 0,
        icon: <UserOutlined />,
        label: "Главная",
        onClick: (e: any) => {
          navigate("");
          selectedKey.current = 0;
        },
      },
      {
        key: 1,
        icon: <UserOutlined />,
        label: "Заказы",
        onClick: (e: any) => {
          navigate("orders");
          selectedKey.current = 1;
        },
      },
      {
        key: 2,
        icon: <VideoCameraOutlined />,
        label: "Товары",
        onClick: (e: any) => {
          navigate("products");
          selectedKey.current = 2;
        },
      },
      {
        key: 3,
        icon: <UploadOutlined />,
        label: "Категории",
        onClick: (e: any) => {
          navigate("categories");
          selectedKey.current = 3;
        },
      },
      {
        key: 4,
        icon: <UploadOutlined />,
        label: "Брэнды",
        onClick: (e: any) => {
          navigate("brands");
          selectedKey.current = 4;
        },
      },
    ],
    [navigate]
  );

  const setOutletContext = (selectedSider: number) => {
    switch (selectedSider) {
      case 1:
        break;
      case 2:
        return {
          id: 2,
          type: "allProducts",
          data: ctx.store.allProducts.data,
        };
      case 3:
        return {
          id: 3,
          type: "categories",
          data: ctx.store.categories.data,
        };
      case 4:
        return {
          id: 4,
          type: "brands",
          data: ctx.store.brands.data,
        };
    }
    return { id: null, data: null };
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {}}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[String(selectedKey.current)]}
          items={items}
        />
      </Sider>
      <Layout>
        <AdminLoginControlPanel
          adminControlPanelHandler={adminControlPanelHandler}
          buttonValue="Магазин"
        />
        <Header style={{ padding: 0, background: "#f3f3f3" }}></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, minHeight: 360, background: "#f3f3f3" }}>
            <Outlet context={setOutletContext(selectedKey.current)} />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayoutContainer;
