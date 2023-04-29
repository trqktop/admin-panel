import { Link, Outlet, useNavigate } from "react-router-dom";
import Layout, { Header, Content, Footer } from "antd/es/layout/layout";
import { Space, theme } from "antd";
import { Typography } from "antd";
import type { MenuProps } from "antd";
import { useCallback, useContext, useState } from "react";
import { Context } from "../../store";
import { MenuInfo } from "rc-menu/lib/interface";
import AdminLoginModalForm from "../../components/AdminLoginModalForm";
import "./StoreLayout.css";
import AdminLoginControlPanel from "../../components/AdminLoginContolPanel";
import CatalogDropDown from "../../components/CatalogDropDown";
const { Title } = Typography;
const StoreLayoutContainer: React.FC = () => {
  const state = useContext(Context);
  const [isOpenedModal, openModal] = useState(false);
  const { token } = theme.useToken();
  const { categories } = state.store;
  const navigate = useNavigate();
  const onClick: MenuProps["onClick"] = useCallback(
    (e: MenuInfo) => {
      navigate(`products/${e.key}`);
    },
    [navigate]
  );

  const adminControlPanelHandler = useCallback(() => {
    openModal(true);
  }, []);

  const adminCloseModalHandler = useCallback(() => {
    openModal(false);
  }, []);

  return (
    <Layout style={{ minHeight: "100vh", maxWidth: "100%" }}>
      <AdminLoginControlPanel
        adminControlPanelHandler={adminControlPanelHandler}
        buttonValue="Админка"
      />
      <Header style={{ background: token.colorBgContainer }}>
        <Space
          size={20}
          direction="horizontal"
          align="center"
          style={{ maxHeight: "100%" }}
        >
          <Title level={3} style={{ alignItems: "center", margin: "0" }}>
            <Link to="/">Logo</Link>
          </Title>
          <CatalogDropDown categories={categories} onClick={onClick} />
        </Space>
      </Header>
      <Content>
        <AdminLoginModalForm
          isOpenedModal={isOpenedModal}
          adminCloseModalHandler={adminCloseModalHandler}
        />
        <Outlet />
      </Content>
      <Footer>footer</Footer>
    </Layout>
  );
  // }
  // return <Spin></Spin>;
};

export default StoreLayoutContainer;
