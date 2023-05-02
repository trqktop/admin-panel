import { MenuOutlined } from "@ant-design/icons";
import Layout, { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Outlet } from "react-router-dom"
import { Button } from 'antd';

import DrawerMenu from "../../components/StoreDrawerMenu";
import { useCallback, useState } from "react";

const StoreContainer = () => {
    const [state, setState] = useState({
        isOpenedMenu: false
    })
    const openDrawerMenuHandler = useCallback(() => {
        setState((p: any) => ({ ...p, isOpenedMenu: true }))
    }, [])
    const closeDrawerMenuHandler = useCallback(() => {
        setState((p: any) => ({ ...p, isOpenedMenu: false }))
    }, [])

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header>
                <Button ghost onClick={openDrawerMenuHandler}>
                    <MenuOutlined />
                </Button>
            </Header>
            <Layout>
                <DrawerMenu isOpen={state.isOpenedMenu} onClose={closeDrawerMenuHandler} />
                <Sider >left sidebar </Sider>
                <Content>main content <Outlet /></Content>
            </Layout>
        </Layout>
    )

}
export default StoreContainer//<Outlet />