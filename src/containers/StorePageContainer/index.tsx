import Layout, { Content } from "antd/es/layout/layout";
import styles from "./StoreContainer.module.scss";
import { Link, Outlet, useNavigate } from "react-router-dom";
import DrawerMenu from "../../components/StoreDrawerMenu";
import { useCallback, useEffect, useMemo, useState } from "react";
import StoreHeader from "../../components/StoreHeader";
import StoreBrandFilter from "../../components/StoreBrandFilter";
import Service from "../../service";
import { Pagination, Spin } from "antd";

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

const StorePageContainer: React.FC = () => {
  const [state, setState] = useState({
    isOpenedMenu: false,
    basketList: [],
    favoriteList: [],
    brandFilter: [],
    products: [],
    categories: [],
    brands: [],
    page: 1,
    limit: 20,
    selectedProduct: null,
    productLength: 0,
    isProductsLoading: true,
    isPaginationLoading: true,
    isCategoriesLoading: true,
    isBrandsLoading: true,
    isPaginationVisible: true,
    currentCategory: null
  });

  const openDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: true }));
  }, []);
  const closeDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedMenu: false }));
  }, []);

  const favoriteHandler = useCallback((e: any, product: any) => {
    e.stopPropagation();
    setState((p) => stateChanger(p, product, "favoriteList"));
  }, []);


  const basketListHandler = useCallback((e: any, product: any) => {
    const order = { ...product, quantity: 1 };
    setState((p: any) => ({ ...p, basketList: [...p.basketList, order] }));
  }, []);

  const addItemToBasketListHandler = useCallback((product: any) => {
    setState((p: any) => {
      const index = p.basketList.findIndex((item: any) => item.id === product.id);
      if (index !== -1) {
        const updatedItem = { ...p.basketList[index], quantity: p.basketList[index].quantity + 1 };
        const updatedBasketList = [...p.basketList.slice(0, index), updatedItem, ...p.basketList.slice(index + 1)];
        return { ...p, basketList: updatedBasketList };
      }
      return { ...p };
    });
  }, []);

  const removeItemFromBasketListHandler = useCallback((product: any) => {
    setState((p: any) => {
      const idx = p.basketList.findIndex((item: any) => item.id === product.id);
      if (idx > -1) {
        const currProduct = p.basketList[idx];
        if (currProduct.quantity <= 1) {
          const updatedBasketList = [...p.basketList.slice(0, idx), ...p.basketList.slice(idx + 1)];
          return { ...p, basketList: updatedBasketList };
        } else {
          const updatedItem = { ...p.basketList[idx], quantity: currProduct.quantity - 1 };
          const updatedBasketList = [...p.basketList.slice(0, idx), updatedItem, ...p.basketList.slice(idx + 1)];
          return { ...p, basketList: updatedBasketList };
        }
      }
      return { ...p };
    });
  }, []);

  const clearBasketList = useCallback(() => {
    setState((p) => ({ ...p, basketList: [] }));
  }, []);

  useEffect(() => {
    const getProductsLength = async (url: string) => {
      const service = new Service()
      service.options(url, state.page, state.limit, state.currentCategory)
      const length = await service.get()
      setState((p) => ({ ...p, productLength: length, isPaginationLoading: false, isPaginationVisible: true }))
    }
    getProductsLength('count')
    const getData = async (url: string) => {
      const service = new Service()
      service.options(url, state.page, state.limit, state.currentCategory)
      const products = await service.get()
      setState((p) => ({ ...p, products: products, isProductsLoading: false, isPaginationVisible: true }))
    }
    getData('products')
  }, [state.page, state.currentCategory])

  useEffect(() => {
    const getCategories = async (url: string) => {
      const service = new Service()
      service.options(url, 0, 0, null)
      const categories = await service.get()
      setState((p) => ({ ...p, isCategoriesLoading: false, categories: categories, isPaginationVisible: true }))
    }
    getCategories('categories')

    const getBrands = async (url: string) => {
      const service = new Service()
      service.options(url, 0, 0, null)
      const brands = await service.get()
      setState((p) => ({ ...p, isBrandsLoading: false, brands: brands, isPaginationVisible: true }))
    }
    getBrands('brands')
  }, [])

  const onChangePagination = (page: any) => {
    setState((p) => ({ ...p, page }))
  }

  const onChangeCurrentCategory = (id: any) => {
    setState((p) => ({ ...p, currentCategory: id, page: 1 }))
  }

  const onProductSelect = (product: any) => {
    setState((p: any) => ({ ...p, selectedProduct: product, isPaginationVisible: false }))
  }

  const setPaginationVisible = () => {
    setState((p: any) => ({ ...p, isPaginationVisible: true }))
  }




  const pagination = useMemo(() => {
    if (state.isPaginationVisible) {
      if (state.isPaginationLoading) {
        return <Spin />;
      } else {
        return (
          <Pagination
            size="small"
            simple
            current={state.page}
            total={state.productLength}
            pageSize={state.limit}
            onChange={onChangePagination}
          />
        );
      }
    }
    return null;
  }, [
    state.isPaginationVisible,
    state.isPaginationLoading,
    state.page,
    state.productLength,
    state.limit,
  ]);


  
  return (
    <Layout className={styles.page}>
      <StoreHeader
        openDrawerMenuHandler={openDrawerMenuHandler}
        favoriteListCount={state.favoriteList.length}
        basketListCount={state.basketList.length}
        setPaginationVisible={setPaginationVisible}
      />
      <Layout className={styles.contentContainer}>
        <DrawerMenu
          isOpen={state.isOpenedMenu}
          onClose={closeDrawerMenuHandler}
          categoriesLoading={state.isCategoriesLoading}
          categories={state.categories}
          onChangeCurrentCategory={onChangeCurrentCategory}
        />
        {/* <StoreBrandFilter brandFilterHandler={brandFilterHandler} /> */}
        <Link to="admin">adminka</Link>
        <Content className={styles.content}>
          <Outlet
            context={{
              state,
              favoriteHandler,
              onProductSelect,
              basketListHandler,
              addItemToBasketListHandler,
              removeItemFromBasketListHandler,
              // brandFilterHandler,
              clearBasketList,
            }}
          />
          {pagination}
        </Content>
      </Layout>
    </Layout>
  );
};

export default StorePageContainer;
