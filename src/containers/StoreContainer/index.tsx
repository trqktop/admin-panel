import Layout, { Content } from "antd/es/layout/layout";
import styles from "./StoreContainer.module.scss";
import { Outlet } from "react-router-dom";
import DrawerMenu from "../../components/StoreDrawerMenu";
import { useCallback, useState } from "react";
import StoreHeader from "../../components/StoreHeader";
import StoreBrandFilter from "../../components/StoreBrandFilter";

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

const StoreContainer: React.FC = () => {
  const [state, setState] = useState({
    isOpenedMenu: false,
    basketList: [],
    favoriteList: [],
    brandFilter: [],
  });

  const openDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: true }));
  }, []);

  const closeDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: false }));
  }, []);

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

  const brandFilterHandler = (e: any) => {
    setState((p: any) => ({ ...p, brandFilter: e }));
  };

  return (
    <Layout className={styles.page}>
      <StoreHeader
        openDrawerMenuHandler={openDrawerMenuHandler}
        favoriteListCount={state.favoriteList.length}
        basketListCount={state.basketList.length}
      />
      <Layout className={styles.contentContainer}>
        <DrawerMenu
          isOpen={state.isOpenedMenu}
          onClose={closeDrawerMenuHandler}
        />
        <StoreBrandFilter brandFilterHandler={brandFilterHandler} />
        <Content className={styles.content}>
          <Outlet
            context={[
              state,
              fovoriteHandler,
              basketListHandler,
              addItemToBacketListHandler,
              removeItemFromBacketListHandler,
              brandFilterHandler,
            ]}
          />
        </Content>
      </Layout>
    </Layout>
  );
};
export default StoreContainer; //<Outlet />
