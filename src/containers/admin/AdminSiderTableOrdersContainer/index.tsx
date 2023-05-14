import { Button, Space, Table } from "antd";
import { useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { OrderType } from "../../../types";
import { OutletContextType } from "../AdminPageContainer";
import { title } from "process";

const AdminSiderTableOrdersContainer = () => {
  const { state }: OutletContextType = useOutletContext()
  const orders = state.orders
  const {
    currentCategory, isLoaded, items, length, limit, name, page } = orders


  // const { tabData }: any = useOutletContext();
  // const orders = tabData.orders;
  // const data: OrderType[] = orders.data;

  // const getFormatedData = useCallback(() => {
  //   if (!orders.isLoading) {
  //     return data.map((item) => ({ ...item, key: item.id }));
  //   }
  // }, [orders, data]);

  // const getColumns = useCallback(() => {
  //   if (!orders.isLoading) {
  //     const columns = [
  //       { title: "name", dataIndex: "name", key: "name" },
  //       { title: "phone", dataIndex: "phone", key: "phone" },
  //       { title: "address", dataIndex: "address", key: "address" },
  //     ];
  //     return columns;
  //   }
  // }, [orders]);

  // const expandedRowRender = (record: any) => {
  //   const products = record.orders;
  //   const columns = [
  //     { title: "id", dataIndex: "id", key: "id" },
  //     { title: "name", dataIndex: "name", key: "name" },
  //     { title: "quantity", dataIndex: "quantity", key: "quantity" },
  //     { title: "price", dataIndex: "price", key: "price" },
  //   ];
  //   const dataSource = products.map((product: any, index: any) => ({
  //     ...product,
  //     key: product.id + index,
  //   }));

  //   return (
  //     <Table columns={columns} dataSource={dataSource} pagination={false} />
  //   );
  // };

  // const columns: any = getColumns();
  // const dataSource: any = getFormatedData();


  // const columns = [
  //   {
  //     title: 'id',
  //     dataIndex: 'id',
  //     key: 'id',
  //   },
  //   {
  //     title: 'name',
  //     dataIndex: 'name',
  //     key: 'name',
  //   },
  //   {
  //     title: 'products length',
  //     dataIndex: 'products',
  //     key: 'products',
  //   },
  // ];


  // const columns = [
  //   {
  //     tittle: 'id',
  //     dataIndex: 'id',
  //     key: 'id'
  //   },
  //   {
  //     tittle: 'summ',
  //     dataIndex: 'summ',
  //     key: 'summ'
  //   },
  //   {
  //     tittle: 'customer',
  //     key: 'customer',
  //     render: (_: any, record: any) => record.customer.name
  //   },
  //   {
  //     tittle: 'address',
  //     key: 'address',
  //     render: (_: any, record: any) => record.customer.address
  //   },
  //   {
  //     tittle: 'phone',
  //     key: 'phone',
  //     render: (_: any, record: any) => record.customer.phone
  //   }
  // ]

  const OrderDetails = ({ order }: any) => {
    const columns = [
      {
        title: 'Наименование товара',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Количество',
        dataIndex: 'quantity',
        key: 'quantity',
      },
      {
        title: 'Цена',
        dataIndex: 'price',
        key: 'price',
      },
      {
        title: 'Бренд',
        dataIndex: 'brand',
        key: 'brand',
        render: (brand: any) => <span>{brand.name}</span>,
      },
      {
        title: 'Категория',
        dataIndex: 'category',
        key: 'category',
        render: (category: any) => <span>{category.name}</span>,
      },
    ];

    return (
      <Table
        columns={columns}
        bordered
        rowKey={(record) => record.id * Math.random()}
        dataSource={order.products}
        pagination={false}
      />
    );
  };

  const columns = [
    {
      title: 'Имя покупателя',
      dataIndex: 'customer',
      key: 'customer',
      render: (customer: any) => <span>{customer.name}</span>,
    },
    {
      title: 'Сумма заказа',
      dataIndex: 'summ',
      key: 'summ',
    },
    {
      title: 'Заказ',
      key: 'Order',
      render: (text: any, record: any) => (
        <Space size="middle">
          <OrderDetails order={record} />
        </Space>
      ),
    },
  ];




  return (
    <div>
      <Table columns={columns} dataSource={items} rowKey={(record) => record.id} bordered loading={!isLoaded} />
    </div>

  );

};

export default AdminSiderTableOrdersContainer;
