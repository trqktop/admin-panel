import { HeartOutlined, MenuOutlined } from "@ant-design/icons";
import Layout, { Header, Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet } from "react-router-dom";
import { Badge, Button, Space } from "antd";
import DrawerMenu from "../../components/StoreDrawerMenu";
import { useCallback, useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
const StoreContainer = () => {
  const [state, setState] = useState({
    isOpenedMenu: false,
    basketList: [],
    favoriteList: [],
  });

  const openDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: true }));
  }, []);
  const closeDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: false }));
  }, []);

  const stateChanger = (prevState: any, product: any, listName: any) => {
    const state = { ...prevState };
    if (state[listName].length) {
      const isProductFavorite = state[listName].find(
        (item: any) => item.id === product.id
      );
      if (isProductFavorite) {
        state[listName] = state[listName].filter(
          (item: any) => item.id !== product.id
        );
        return state;
      }
      state[listName] = [...state[listName], product];
      return state;
    }
    state[listName] = [...state[listName], product];
    return state;
  };

  const fovoriteHandler = (e: any, product: any) => {
    e.stopPropagation();
    setState((p) => {
      return stateChanger(p, product, "favoriteList");
    });
  };

  const basketListHandler = (e: any, product: any) => {
    const order: any = { ...product, quantity: 1 };
    setState((p: any) => ({ ...p, basketList: [...p.basketList, order] }));
  };

  const addItemToBacketListHandler = (product: any) => {
    setState((p: any) => {
      const index = p.basketList.findIndex(
        (item: any) => item.id === product.id
      );
      if (index !== -1) {
        const updatedItem = {
          ...p.basketList[index],
          quantity: p.basketList[index].quantity + 1,
        };
        const updatedBasketList = [
          ...p.basketList.slice(0, index),
          updatedItem,
          ...p.basketList.slice(index + 1),
        ];
        return { ...p, basketList: updatedBasketList };
      }
      return { ...p };
    });
  };

  const removeItemFromBacketListHandler = (product: any) => {
    setState((p: any) => {
      const state = { ...p };
      const idx = state.basketList.findIndex(
        (item: any) => item.id === product.id
      );
      if (idx > -1) {
        const currProduct = state.basketList[idx];
        if (currProduct.quantity <= 1) {
          const updatedBasketList = [
            ...p.basketList.slice(0, idx),
            ...p.basketList.slice(idx + 1),
          ];
          return { ...p, basketList: updatedBasketList };
        } else {
          currProduct.quantity -= 1;
          console.log(currProduct.quantity);
        }
      }
      return state;
    });
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Header style={{ justifyContent: "space-between", display: "flex " }}>
        <Space style={{ margin: 10 }}>
          <Link to="/">
            <span>LOGO</span>
          </Link>
          <Button ghost onClick={openDrawerMenuHandler}>
            <MenuOutlined />
          </Button>
        </Space>
        <Space>
          <Link to="/favorite">
            <Badge count={state.favoriteList.length}>
              <Button ghost icon={<HeartOutlined />} size="large" />
            </Badge>
          </Link>
          <Link to="/basket">
            <Badge count={state.basketList.length}>
              <Button ghost icon={<ShoppingCartOutlined />} size="large" />
            </Badge>
          </Link>
        </Space>
      </Header>
      <Layout>
        <DrawerMenu
          isOpen={state.isOpenedMenu}
          onClose={closeDrawerMenuHandler}
        />
        <Content
          style={{
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            maxWidth: "100vw",
          }}
        >
          <Outlet
            context={[
              state,
              fovoriteHandler,
              basketListHandler,
              addItemToBacketListHandler,
              removeItemFromBacketListHandler,
            ]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default StoreContainer; //<Outlet />
