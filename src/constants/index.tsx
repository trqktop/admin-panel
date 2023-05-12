const initialState = {
  events: {
    loading: true,
    success: false,
    error: false,
  },
  store: {
    products: {
      ctxId: 1,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    categories: {
      ctxId: 2,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
    brands: {
      ctxId: 3,
      events: {
        loading: true,
        success: false,
        error: false,
      },
      data: null,
    },
  },
};
export const getProductColumns = (renderActions: any) => {
  return [
    { title: "id", dataIndex: "id", key: "id" },
    { title: "name", dataIndex: "name", key: "name" },
    { title: "price", dataIndex: "price", key: "price" },
    { title: "brand", dataIndex: "brandName", key: "brandName" },
    { title: "category", dataIndex: "categoryName", key: "categoryName" },
    {
      title: "Action",
      key: "action",
      render: renderActions,
      width: "150px",
    },
  ];
};
export { initialState };
