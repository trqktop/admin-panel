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

export type OutletContextType = {
  selectedMenuCtx: any;
  tabData: any;
};

const getData = async (options: any, setState: any) => {
  const service = new Service();
  service.options(options);
  const data = await service.get();
  setState((p: any) => ({
    ...p,
    [options.url]: { ...p[options.url], data: data, isLoading: false },
  }));
};

const AdminPageContainer: React.FC = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    isCategoriesLoading: true,
    isUpdateModalOpened: false,
    isCreateModalOpened: false,
    createItemModalCtx: "",
    openedItemData: {
      type: "",
      record: {
        name: "",
        price: "",
        brand: "",
        category: "",
        id: "",
      },
    },
    count: {
      data: 0,
      isLoading: true,
    },
    categories: {
      data: [],
      isLoading: true,
    },
    brands: {
      data: [],
      isLoading: true,
    },
    orders: {
      data: [],
      isLoading: true,
    },
    products: {
      data: [],
      page: 1,
      limit: 20,
      productLength: 0,
      isLoading: true,
    },
    isPaginationVisible: false,
  });
  const selectedKey = useRef(0);

  const selectedMenuCtx: any = useRef(null);
  const menuItems = useMemo(
    () => getMenuItems(navigate, selectedKey, selectedMenuCtx),
    [navigate]
  );
  const productOptions = useMemo(
    () => ({
      url: "products",
      page: state.products.page,
      limit: state.products.limit,
    }),
    [state.products.limit, state.products.page]
  );

  const productLengthOptions = useMemo(
    () => ({
      url: "count",
      page: state.products.page,
      limit: state.products.limit,
    }),
    [state.products.limit, state.products.page]
  );

  useEffect(() => {
    getData({ url: "categories" }, setState);
    getData({ url: "brands" }, setState);
    getData({ url: "orders" }, setState);
  }, []);

  useEffect(() => {
    getData(productOptions, setState);
    getData(productLengthOptions, setState);
  }, [productLengthOptions, productOptions]);

  const onChangePagination = (page: any) => {
    setState((p) => ({
      ...p,
      products: {
        ...p.products,
        data: [],
        page: page,
        limit: 20,
        isLoading: true,
      },
    }));
  };

  const onDelete = async (data: any) => {
    const service = new Service();
    switch (data.type) {
      case "brands":
        service.options({
          url: data.type,
        });
        const brands = await service.delete(data);
        setState((p: any) => ({
          ...p,
          brands: { ...p.brands, data: brands, isLoading: false },
        }));
        break;
      case "categories":
        service.options({
          url: data.type,
        });
        const categories = await service.delete(data);
        setState((p: any) => ({
          ...p,
          categories: { ...p.categories, data: categories, isLoading: false },
        }));
        break;
      case "products":
        service.options(productOptions);
        const products = await service.delete(data);
        setState((p: any) => ({
          ...p,
          products: { ...p.products, data: products, isLoading: false },
        }));
        getData(productLengthOptions, setState);
        break;
    }
  };

  const openUpdateItemModal = (record: any) => {
    setState((p: any) => ({
      ...p,
      isUpdateModalOpened: true,
      openedItemData: record,
    }));
  };

  const closeUpdateItemModal = () => {
    setState((p: any) => ({
      ...p,
      isUpdateModalOpened: false,
      openedItemData: {
        type: "",
        record: {
          name: "",
          price: "",
          brand: "",
          category: "",
          id: "",
        },
      },
    }));
  };

  const onUpdate = async (data: any) => {
    openUpdateItemModal(data);
  };

  const onSubmitUpdateItem = async (data: FormData) => {
    const service = new Service();
    service.options({ url: state.openedItemData.type });
    await service.patch({ data: data, id: state.openedItemData.record.id });
  };

  const onSubmitCreateItem = async (data: any) => {
    const service = new Service();
    service.options({ url: state.createItemModalCtx });
    await service.post(data);
    switch (state.createItemModalCtx) {
      case "products":
        getData(productOptions, setState);
        getData(productLengthOptions, setState);
        break;
      case "categories":
        getData({ url: "categories" }, setState);
        break;
      case "brands":
        getData({ url: "brands" }, setState);
        break;
    }
  };

  const getFormUpdate = (state: any) => {
    switch (state.openedItemData.type) {
      case "categories":
        return (
          <CategoriesUpdateForm
            update
            state={state}
            onSubmit={onSubmitUpdateItem}
          />
        );
      case "products":
        return (
          <ProductsUpdateForm
            update
            state={state}
            onSubmit={onSubmitUpdateItem}
          />
        );
      case "brands":
        return (
          <BrandUpdateForm update state={state} onSubmit={onSubmitUpdateItem} />
        );
    }
    return null;
  };

  const getFormCreate = (ctx: string) => {
    switch (ctx) {
      case "categories":
        return (
          <CategoriesUpdateForm
            create
            state={state}
            onSubmit={onSubmitCreateItem}
          />
        );
      case "products":
        return (
          <ProductsUpdateForm
            create
            state={state}
            onSubmit={onSubmitCreateItem}
          />
        );
      case "brands":
        return (
          <BrandUpdateForm create state={state} onSubmit={onSubmitCreateItem} />
        );
    }
    return null;
  };

  const openCreateItemModal = (ctx: any) => {
    setState((p) => ({
      ...p,
      isCreateModalOpened: true,
      createItemModalCtx: ctx,
    }));
  };

  const closeCreateItemModal = () => {
    setState((p) => ({
      ...p,
      isCreateModalOpened: false,
      createItemModalCtx: "",
    }));
  };

  const updateItemForm = state.isUpdateModalOpened
    ? getFormUpdate(state)
    : null;

  const createItemForm = state.isCreateModalOpened
    ? getFormCreate(state.createItemModalCtx)
    : null;

  const outletContext: any = {
    tabData: state,
    selectedMenuCtx: selectedMenuCtx.current,
    onChangePagination,
    openCreateItemModal,
    closeCreateItemModal,
    onDelete,
    onUpdate,
    openUpdateItemModal,
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
            onOk={closeUpdateItemModal}
            onCancel={closeUpdateItemModal}
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
            {updateItemForm}
          </Modal>
          <Modal
            onOk={closeCreateItemModal}
            onCancel={closeCreateItemModal}
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
            {createItemForm}
          </Modal>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminPageContainer;
