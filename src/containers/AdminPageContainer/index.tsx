import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useMemo, useRef } from "react";
import { Content, Header } from "antd/es/layout/layout";
import styles from "./AdminPageContainer.module.scss";
import getMenuItems from "../../utils/getMenunItems";
export type OutletContextType = {
  tabContext: string;
};

const AdminLayoutContainer: React.FC = () => {
  const navigate = useNavigate();
  const selectedKey = useRef(0);
  const selectedMenuCtx: any = useRef(null);
  const menuItems = useMemo(
    () => getMenuItems(navigate, selectedKey, selectedMenuCtx),
    [navigate]
  );
  const outletContext: OutletContextType = {
    tabContext: selectedMenuCtx.current,
  };

  return (
    <Layout className={styles.container}>
      <Sider>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[String(selectedKey.current)]}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#f3f3f3" }}>
          <Link to="/">Store</Link>
        </Header>
        <Content style={{ margin: "24px 16px 0" }} className={styles.content}>
          <div style={{ padding: 24, minHeight: 360, background: "#f3f3f3" }}>
            <Outlet context={outletContext} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminLayoutContainer;
