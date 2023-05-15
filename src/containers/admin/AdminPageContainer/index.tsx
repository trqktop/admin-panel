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
import SearchForm from "../../../components/SearchForm";




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
  searchText: string | null
}
export type OutletContextType = {
  state: StateAdmin
  openUpdateModal: (record: any) => void
  openCreateModal: (record: any) => void
  onDeleteItem: (data: any) => any
  onSearch: (text: string) => void
};



const AdminPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState<StateAdmin>({
    isModalOpened: false,
    searchText: null,
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
            currentCategory: null,
            searchText: state.searchText
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

  useEffect(() => {
    const updateProducts = async () => {
      const options: any = {
        url: state.products.name,
        limit: state.products.limit,
        page: state.products.page,
        currentCategory: state.products.currentCategory,
        searchText: state.searchText
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
            name: state.products.name,
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
  }, [state.searchText])





  const menuItems = useMemo(
    () => getMenuItems(navigate, selectedKey, selectedMenuCtx),
    [navigate]
  );


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



  const onSearch = (text: string) => setState((p) => ({ ...p, searchText: text }))

  const outletContext: OutletContextType = {
    state,
    openUpdateModal,
    openCreateModal,
    onDeleteItem,
    onSearch
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
