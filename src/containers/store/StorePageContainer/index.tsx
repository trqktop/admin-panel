import Layout, { Content } from "antd/es/layout/layout";
import styles from "./StoreContainer.module.scss";
import { Link, Outlet } from "react-router-dom";
import DrawerMenu from "../../../components/store/StoreDrawerMenu";
import { useCallback, useEffect, useMemo, useState } from "react";
import StoreHeader from "../../../components/store/StoreHeader";
import Modal from "antd/es/modal/Modal";
import Button from "antd/lib/button";
import AdminLoginForm from "../../../components/admin/AdminLoginForm";

// import StoreBrandFilter from "../../components/StoreBrandFilter";
import Service from "../../../service";
import { Pagination, Space, Spin } from "antd";

const stateChanger = (prevState: AppStoreState, product: any, listName: keyof AppStoreState): AppStoreState => {
  const state: any = { ...prevState };
  const list: any = state[listName];
  const isProductFavorite: any = list.some((item: any) => item.id === product.id);

  if (isProductFavorite) {
    state[listName] = list.filter((item: any) => item.id !== product.id);
  } else {
    state[listName] = [...list, product];
  }
  return state;
};


export type DataType = {
  name: string;
  items: any[];
  page: number;
  length: number;
  limit: number;
  isLoaded: boolean,
  currentCategory: string | null;
}


export interface AppStoreState {
  brands: DataType;
  categories: DataType
  products: DataType
  favoriteList: any[]
  brandFilter: any[]
  basketList: any[]
  isOpenedDrawerMenu: boolean
  // Add the rest of the state properties here if needed
}
interface FetchOptions {
  url: string;
  limit: number;
  page: number;
  currentCategory: string | null;
}



const StorePageContainer: React.FC = () => {
  const [state, setState] = useState<AppStoreState>({
    isOpenedDrawerMenu: false,
    basketList: [],
    favoriteList: [],
    brandFilter: [],
    // products: [],
    // categories: [],
    // brands: [],
    // page: 1,
    // limit: 20,
    // selectedProduct: null,
    // productLength: 0,
    // isProductsLoading: true,
    // isPaginationLoading: true,
    // isCategoriesLoading: true,
    // isBrandsLoading: true,
    // isPaginationVisible: true,
    // isLoginFormVisible: false,
    // currentCategory: null,

    brands: {
      name: 'brands',
      items: [],
      page: 1,
      isLoaded: false,
      length: 0,
      limit: 20,
      currentCategory: null
    },
    categories: {
      name: 'categories',
      items: [],
      isLoaded: false,
      page: 1,
      length: 0,
      limit: 20,
      currentCategory: null
    },
    products: {
      name: 'products',
      items: [],
      page: 1,
      length: 0,
      isLoaded: false,
      limit: 20,
      currentCategory: null
    }
  });
  const sources: DataType[] = [state.brands, state.categories, state.products]

  useEffect(() => {
    const setInitialData = async (options: FetchOptions) => {
      const service = new Service();
      service.options(options);
      try {
        const data = await service.get();
        setState((p) => ({
          ...p,
          [options.url]: {
            items: data?.items || [],
            length: data?.length || 0,
            name: options.url,
            isLoaded: true,
            page: 1,
            limit: 20,
            currentCategory: null
          },
        }));
      } catch (error) {
        console.error(error);
      }
    }

    sources.forEach((source) => {
      const options: FetchOptions = {
        url: source.name,
        limit: source.limit,
        page: source.page,
        currentCategory: source.currentCategory
      }
      setInitialData(options)
    })
  }, [])





  // const basketListHandler = useCallback((e: any, product: any) => {
  //   const order = { ...product, quantity: 1 };
  //   setState((p: any) => ({ ...p, basketList: [...p.basketList, order] }));
  // }, []);

  // const addItemToBasketListHandler = useCallback((product: any) => {
  //   setState((p: any) => {
  //     const index = p.basketList.findIndex(
  //       (item: any) => item.id === product.id
  //     );
  //     if (index !== -1) {
  //       const updatedItem = {
  //         ...p.basketList[index],
  //         quantity: p.basketList[index].quantity + 1,
  //       };
  //       const updatedBasketList = [
  //         ...p.basketList.slice(0, index),
  //         updatedItem,
  //         ...p.basketList.slice(index + 1),
  //       ];
  //       return { ...p, basketList: updatedBasketList };
  //     }
  //     return { ...p };
  //   });
  // }, []);

  // const removeItemFromBasketListHandler = useCallback((product: any) => {
  //   setState((p: any) => {
  //     const idx = p.basketList.findIndex((item: any) => item.id === product.id);
  //     if (idx > -1) {
  //       const currProduct = p.basketList[idx];
  //       if (currProduct.quantity <= 1) {
  //         const updatedBasketList = [
  //           ...p.basketList.slice(0, idx),
  //           ...p.basketList.slice(idx + 1),
  //         ];
  //         return { ...p, basketList: updatedBasketList };
  //       } else {
  //         const updatedItem = {
  //           ...p.basketList[idx],
  //           quantity: currProduct.quantity - 1,
  //         };
  //         const updatedBasketList = [
  //           ...p.basketList.slice(0, idx),
  //           updatedItem,
  //           ...p.basketList.slice(idx + 1),
  //         ];
  //         return { ...p, basketList: updatedBasketList };
  //       }
  //     }
  //     return { ...p };
  //   });
  // }, []);

  // const clearBasketList = useCallback(() => {
  //   setState((p) => ({ ...p, basketList: [] }));
  // }, []);

  // useEffect(() => {
  //   const getProductsLength = async (url: string) => {
  //     const service = new Service();
  //     service.options({
  //       url,
  //       page: state.page,
  //       limit: state.limit,
  //       currentCategory: state.currentCategory,
  //     });
  //     const length = await service.get();
  //     setState((p:any) => ({
  //       ...p,
  //       productLength: length,
  //       isPaginationLoading: false,
  //       isPaginationVisible: true,
  //     }));
  //   };
  //   getProductsLength("count");
  //   const getData = async (url: string) => {
  //     const service = new Service();
  //     service.options({
  //       url,
  //       page: state.page,
  //       limit: state.limit,
  //       currentCategory: state.currentCategory,
  //     });
  //     const products = await service.get();
  //     setState((p:any) => ({
  //       ...p,
  //       products: products,
  //       isProductsLoading: false,
  //       isPaginationVisible: true,
  //     }));
  //   };
  //   getData("products");
  // }, [state.page, state.currentCategory, state.limit]);

  // useEffect(() => {
  //   const getCategories = async (url: string) => {
  //     const service = new Service();
  //     service.options({ url });
  //     const categories = await service.get();
  //     setState((p:any) => ({
  //       ...p,
  //       isCategoriesLoading: false,
  //       categories: categories,
  //       isPaginationVisible: true,
  //     }));
  //   };
  //   getCategories("categories");

  //   const getBrands = async (url: string) => {
  //     const service = new Service();
  //     service.options({ url });
  //     const brands = await service.get();
  //     setState((p:any) => ({
  //       ...p,
  //       isBrandsLoading: false,
  //       brands: brands,
  //       isPaginationVisible: true,
  //     }));
  //   };
  //   getBrands("brands");
  // }, []);


  useEffect(() => {
    const updateProducts = async () => {
      const options: FetchOptions = {
        url: state.products.name,
        limit: state.products.limit,
        page: state.products.page,
        currentCategory: state.products.currentCategory
      }
      const service = new Service();
      service.options(options);
      try {
        const products = await service.get();
        setState((p) => ({
          ...p,
          products: {
            ...p.products,
            items: products?.items || [],
            length: products?.length || 0,
            name: options.url,
            isLoaded: true,
            page: state.products.page,
            limit: 20,
          },
        }));
      } catch (error) {
        console.error(error);
      }
    }
    updateProducts()
  }, [state.products.page, state.products.currentCategory])


  const onChangePagination = (page: any) => {
    setState((p) => ({
      ...p,
      products: {
        ...p.products, page: page
      }
    })
    )
  };

  const onChangeProductsCurrentCategory = (id: any) => {
    setState((p) => ({
      ...p, products: {
        ...p.products,
        currentCategory: id,
        page: 1
      }
    }));
  };

  // const onProductSelect = (product: any) => {
  //   setState((p: any) => ({
  //     ...p,
  //     selectedProduct: product,
  //     isPaginationVisible: false,
  //   }));
  // };

  // const setPaginationVisible = () => {
  //   setState((p: any) => ({ ...p, isPaginationVisible: true }));
  // };

  // const pagination = useMemo(() => {
  //   if (state.isPaginationVisible) {
  //     if (state.isPaginationLoading) {
  //       return <Spin />;
  //     } else {
  //       return (
  //         <Pagination
  //           size="small"
  //           simple
  //           current={state.page}
  //           total={state.productLength}
  //           pageSize={state.limit}
  //           onChange={onChangePagination}
  //         />
  //       );
  //     }
  //   }
  //   return null;
  // }, [
  //   state.isPaginationVisible,
  //   state.isPaginationLoading,
  //   state.page,
  //   state.productLength,
  //   state.limit,
  // ]);

  // const closeAdminLoginModal = () => {
  //   setState((p) => ({ ...p, isLoginFormVisible: false }));
  // };

  // const openAdminLoginModal = () => {
  //   setState((p) => ({ ...p, isLoginFormVisible: true }));
  // };


  const openDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedDrawerMenu: true }));
  }, []);
  const closeDrawerMenuHandler = useCallback(() => {
    setState((p: any) => ({ ...p, isOpenedDrawerMenu: false }));
  }, []);


  const favoriteHandler = useCallback((e: any, product: any) => {
    e.stopPropagation();
    setState((p) => stateChanger(p, product, "favoriteList"));
  }, []);

  const outletContext = {
    state,
    favoriteHandler,
    onChangePagination,
    onChangeProductsCurrentCategory
  }
  console.log(state)
  return (
    <Layout className={styles.page}>
      <StoreHeader
        openDrawerMenuHandler={openDrawerMenuHandler}
        favoriteListCount={state.favoriteList.length}
        basketListCount={state.basketList.length}
      // setPaginationVisible={setPaginationVisible}
      />
      <Layout className={styles.contentContainer}>
        <DrawerMenu
          isOpen={state.isOpenedDrawerMenu}
          onClose={closeDrawerMenuHandler}
          // categoriesLoading={state.categories.isLoaded}
          categories={state.categories}
        // onChange={onChangeProductsCurrentCategory}
        />
        {/*    <Space direction="horizontal" style={{ justifyContent: "flex-end" }}>
          <Button onClick={openAdminLoginModal}>admin</Button>
        </Space>
        <Modal
          open={state.isLoginFormVisible}
          onOk={closeAdminLoginModal}
          onCancel={closeAdminLoginModal}
          footer={[
            <Button form="adminLogin" key="submit" htmlType="submit">
              Submit
            </Button>,
          ]}
        >
          <AdminLoginForm></AdminLoginForm>
        </Modal>*/}
        <Content className={styles.content}>
          <Outlet
            // context={{
            //   state,
            //   // favoriteHandler,
            //   // onProductSelect,
            //   // basketListHandler,
            //   // addItemToBasketListHandler,
            //   // removeItemFromBasketListHandler,
            //   // brandFilterHandler,
            //   // clearBasketList,
            // }}
            context={outletContext}
          />
          {/* {pagination} */}
          {/* <Pagination
            size="small"
            simple
            current={state.page}
            total={state.productLength}
            pageSize={state.limit}
            onChange={onChangePagination}
          /> */}
        </Content>
      </Layout>
    </Layout>
  );
};

export default StorePageContainer;
