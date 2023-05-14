import { Button, Input, Layout, Menu, Modal } from "antd";
import Sider from "antd/es/layout/Sider";

import { Link, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { Content, Header } from "antd/es/layout/layout";
import styles from "./AdminPageContainer.module.scss";
import getMenuItems from "../../../utils/getMenunItems";
import Service from "../../../service";
import ProductsUpdateForm from "../../../components/admin/ProductsUpdateForm";
import BrandUpdateForm from "../../../components/admin/BrandUpdateForm";
import CategoriesUpdateForm from "../../../components/admin/CategoriesUpdateForm";




export interface StateAdmin {
  isCategoriesLoading: boolean;
  isUpdateModalOpened: boolean;
  isCreateModalOpened: boolean;
  createItemModalCtx: string;
  isModalOpened: boolean
  openedItemData: {
    type: string,
    record: any
  };
  count: {
    data: number;
    isLoading: boolean;
  };
  brands: {
    name: string;
    items: any[];
    page: number;
    isLoaded: boolean;
    length: number;
    limit: number;
    currentCategory: any;
  };
  categories: {
    name: string;
    items: any[];
    isLoaded: boolean;
    page: number;
    length: number;
    limit: number;
    currentCategory: any;
  };
  products: {
    name: string;
    items: any[];
    page: number;
    length: number;
    isLoaded: boolean;
    limit: number;
    currentCategory: any;
  };
  orders: {
    name: string;
    items: any[];
    page: number;
    length: number;
    isLoaded: boolean;
    limit: number;
    currentCategory: any;
  };
}
export type OutletContextType = {
  state: StateAdmin
  openUpdateModal: (record: any) => void
  openCreateModal: (record: any) => void
  onDeleteItem: (data: any) => any
};

// const getData = async (options: any, setState: any) => {
//   const service = new Service();
//   service.options(options);
//   const data = await service.get();
//   setState((p: any) => ({
//     ...p,
//     [options.url]: { ...p[options.url], data: data, isLoading: false },
//   }));
// };


const AdminPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<StateAdmin>({
    isModalOpened: false,
    isCategoriesLoading: true,
    isUpdateModalOpened: false,
    isCreateModalOpened: false,
    createItemModalCtx: "",
    openedItemData: {
      type: '',
      record: null
    },
    count: {
      data: 0,
      isLoading: true,
    },
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
    },
    orders: {
      name: 'orders',
      items: [],
      page: 1,
      length: 0,
      isLoaded: false,
      limit: 20,
      currentCategory: null
    },
  });


  const selectedKey = useRef(0);


  const selectedMenuCtx: any = useRef(null);
  const sources: any = [state.brands, state.categories, state.products, state.orders]

  useEffect(() => {
    const setInitialData = async (options: any) => {
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

    sources.forEach((source: any) => {
      const options: any = {
        url: source.name,
        limit: source.limit,
        page: source.page,
        currentCategory: source.currentCategory
      }
      setInitialData(options)
    })
  }, [])




  const menuItems = useMemo(
    () => getMenuItems(navigate, selectedKey, selectedMenuCtx),
    [navigate]
  );
  // const productOptions = useMemo(
  //   () => ({
  //     url: "products",
  //     page: state.products.page,
  //     limit: state.products.limit,
  //   }),
  //   [state.products.limit, state.products.page]
  // );

  // const productLengthOptions = useMemo(
  //   () => ({
  //     url: "count",
  //     page: state.products.page,
  //     limit: state.products.limit,
  //   }),
  //   [state.products.limit, state.products.page]
  // );

  // useEffect(() => {
  //   getData({ url: "categories" }, setState);
  //   getData({ url: "brands" }, setState);
  //   getData({ url: "orders" }, setState);
  // }, []);

  // useEffect(() => {
  //   getData(productOptions, setState);
  //   getData(productLengthOptions, setState);
  // }, [productLengthOptions, productOptions]);

  // const onChangePagination = (page: any) => {
  //   setState((p) => ({
  //     ...p,
  //     products: {
  //       ...p.products,
  //       data: [],
  //       page: page,
  //       limit: 20,
  //       isLoading: true,
  //     },
  //   }));
  // };

  // const onDelete = async (data: any) => {
  //   const service = new Service();
  //   switch (data.type) {
  //     case "brands":
  //       service.options({
  //         url: data.type,
  //       });
  //       const brands = await service.delete(data);
  //       setState((p: any) => ({
  //         ...p,
  //         brands: { ...p.brands, data: brands, isLoading: false },
  //       }));
  //       break;
  //     case "categories":
  //       service.options({
  //         url: data.type,
  //       });
  //       const categories = await service.delete(data);
  //       setState((p: any) => ({
  //         ...p,
  //         categories: { ...p.categories, data: categories, isLoading: false },
  //       }));
  //       break;
  //     case "products":
  //       service.options(productOptions);
  //       const products = await service.delete(data);
  //       setState((p: any) => ({
  //         ...p,
  //         products: { ...p.products, data: products, isLoading: false },
  //       }));
  //       getData(productLengthOptions, setState);
  //       break;
  //   }
  // };

  // const openUpdateItemModal = (record: any) => {
  //   setState((p: any) => ({
  //     ...p,
  //     isUpdateModalOpened: true,
  //     openedItemData: record,
  //   }));
  // };

  // const closeUpdateItemModal = () => {
  //   setState((p: any) => ({
  //     ...p,
  //     isUpdateModalOpened: false,
  //     openedItemData: {
  //       type: "",
  //       record: {
  //         name: "",
  //         price: "",
  //         brand: "",
  //         category: "",
  //         id: "",
  //       },
  //     },
  //   }));
  // };

  // const onUpdate = async (data: any) => {
  //   openUpdateItemModal(data);
  // };

  const onSubmitUpdateItem = async (data: FormData) => {
    const service = new Service();
    const type = state.openedItemData.type
    const id = state.openedItemData.record.id
    const source = sources.find((src: any) => src.name === type)
    console.log(data)
    const options: any = {
      url: source.name,
      limit: source.limit,
      page: source.page,
      currentCategory: source.currentCategory,
      id
    }
    service.options(options);
    try {
      const result = await service.patch({ data, id });
      setState((p) => ({
        ...p,
        [options.url]: {
          items: result?.items || [],
          length: result?.length || 0,
          name: options.url,
          isLoaded: true,
          page: source.page,
          limit: 20,
          currentCategory: source.currentCategory
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };



  const onSubmitCreateItem = async ({ data, type }: { data: FormData, type: string }) => {
    const service = new Service();
    const source = sources.find((src: any) => src.name === type)
    const options: any = {
      url: source.name,
      limit: source.limit,
      page: source.page,
      currentCategory: source.currentCategory,
    }
    service.options(options);
    try {
      const result = await service.post(data);
      setState((p) => ({
        ...p,
        [options.url]: {
          items: result?.items || [],
          length: result?.length || 0,
          name: options.url,
          isLoaded: true,
          page: source.page,
          limit: 20,
          currentCategory: source.currentCategory
        },
      }));
    } catch (error) {
      console.error(error);
    }
  };


  const onDeleteItem = async ({ record, type }: any) => {
    const service = new Service();
    const source = sources.find((src: any) => src.name === type)
    const options: any = {
      url: source.name,
      limit: source.limit,
      page: source.page,
      currentCategory: source.currentCategory,
    }
    service.options(options);
    try {
      const result = await service.delete(record);
      setState((p) => ({
        ...p,
        [options.url]: {
          items: result?.items || [],
          length: result?.length || 0,
          name: options.url,
          isLoaded: true,
          page: source.page,
          limit: 20,
          currentCategory: source.currentCategory
        },
      }));
    } catch (error) {
      console.error(error);
    }
  }


  // const onSubmitCreateItem = async (data: any) => {
  //   const service = new Service();
  //   service.options({ url: state.createItemModalCtx });
  //   await service.post(data);
  //   switch (state.createItemModalCtx) {
  //     case "products":
  //       getData(productOptions, setState);
  //       getData(productLengthOptions, setState);
  //       break;
  //     case "categories":
  //       getData({ url: "categories" }, setState);
  //       break;
  //     case "brands":
  //       getData({ url: "brands" }, setState);
  //       break;
  //   }
  // };

  // const getFormUpdate = (state: any) => {
  //   switch (state.openedItemData.type) {
  //     case "categories":
  //       return (
  //         <CategoriesUpdateForm
  //           update
  //           state={state}
  //         // onSubmit={onSubmitUpdateItem}
  //         />
  //       );
  //     case "products":
  //       return (
  //         <ProductsUpdateForm
  //           update
  //           state={state}
  //         // onSubmit={onSubmitUpdateItem}
  //         />
  //       );
  //     case "brands":
  //       return (
  //         <BrandUpdateForm update state={state} />// onSubmit={onSubmitUpdateItem}
  //       );
  //   }
  //   return null;
  // };

  // const getFormCreate = (ctx: string) => {
  //   switch (ctx) {
  //     case "categories":
  //       return (
  //         <CategoriesUpdateForm
  //           create
  //           state={state}
  //           onSubmit={onSubmitCreateItem}
  //         />
  //       );
  //     case "products":
  //       return (
  //         <ProductsUpdateForm
  //           create
  //           state={state}
  //           onSubmit={onSubmitCreateItem}
  //         />
  //       );
  //     case "brands":
  //       return (
  //         <BrandUpdateForm create state={state} onSubmit={onSubmitCreateItem} />
  //       );
  //   }
  //   return null;
  // };

  // const openCreateItemModal = (ctx: any) => {
  //   setState((p) => ({
  //     ...p,
  //     isCreateModalOpened: true,
  //     createItemModalCtx: ctx,
  //   }));
  // };

  // const closeCreateItemModal = () => {
  //   setState((p) => ({
  //     ...p,
  //     isCreateModalOpened: false,
  //     createItemModalCtx: "",
  //   }));
  // };

  // const updateItemForm = state.isUpdateModalOpened
  //   ? getFormUpdate(state)
  //   : null;

  // const createItemForm = state.isCreateModalOpened
  //   ? getFormCreate(state.createItemModalCtx)
  //   : null;


  const openUpdateModal = (record: any) => {
    setState((p) => ({ ...p, isUpdateModalOpened: true, openedItemData: record }))
  }

  const closeUpdateModal = () => {
    setState((p) => ({ ...p, isUpdateModalOpened: false, openedItemData: { type: '', record: null } }))
  }





  const UpdateForm = () => {
    switch (state.openedItemData.type) {
      case 'products':
        return <ProductsUpdateForm
          update
          product={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={onSubmitUpdateItem}
        />
      case 'categories':
        return <CategoriesUpdateForm
          update
          category={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={onSubmitUpdateItem}
        />
      case 'brands':
        return <BrandUpdateForm
          update
          brand={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={onSubmitUpdateItem}
        />
      default:
        return null
    }
  }


  const CreateForm = () => {
    switch (state.createItemModalCtx) {
      case 'products':
        return <ProductsUpdateForm
          create
          product={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={(data: FormData) => onSubmitCreateItem({ data, type: 'products' })}
        />
      case 'categories':
        return <CategoriesUpdateForm
          create
          category={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={(data: FormData) => onSubmitCreateItem({ data, type: 'categories' })}
        />
      case 'brands':
        return <BrandUpdateForm
          create
          brand={state.openedItemData.record}
          brands={state.brands.items}
          categories={state.categories.items}
          onSubmit={(data: FormData) => onSubmitCreateItem({ data, type: 'brands' })}
        />
      default:
        return null
    }
  }


  const openCreateModal = (ctx: string) => {
    setState((p) => ({ ...p, isCreateModalOpened: true, createItemModalCtx: ctx }))
  }
  const closeCreateModal = () => {
    setState((p) => ({ ...p, isCreateModalOpened: false, createItemModalCtx: '' }))
  }

  const outletContext: OutletContextType = {
    state,
    openUpdateModal,
    openCreateModal,
    onDeleteItem
    // selectedMenuCtx: selectedMenuCtx.current,
    // onChangePagination,
    // openCreateItemModal,
    // closeCreateItemModal,
    // onDelete,
    // onUpdate,
    // openUpdateItemModal,
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
        <Header className={styles.header}>
          <Link to="/">Store</Link>
        </Header>
        <Content className={styles.content}>
          <div className={styles.contentContainer}>
            <Outlet context={outletContext} />
          </div>
          <Modal
            onOk={closeUpdateModal}
            onCancel={closeUpdateModal}
            open={state.isUpdateModalOpened}
            footer={[
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                form="updateItem"
              >
                Submit
              </Button>,
            ]}
          >
            {
              <UpdateForm />
            }
          </Modal>
          <Modal
            onOk={closeCreateModal}
            onCancel={closeCreateModal}
            open={state.isCreateModalOpened}
            footer={[
              <Button
                key="submit"
                type="primary"
                htmlType="submit"
                form="createItem"
              >
                Submit
              </Button>,
            ]}
          >
            <CreateForm />
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPageContainer;
