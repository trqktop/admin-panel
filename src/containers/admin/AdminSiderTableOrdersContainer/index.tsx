import { Table } from "antd";
import { useCallback } from "react";
import { useOutletContext } from "react-router-dom";
import { OrderType } from "../../../types";

const AdminSiderTableOrdersContainer = () => {
  const { tabData }: any = useOutletContext();
  const orders = tabData.orders;
  const data: OrderType[] = orders.data;

  const getFormatedData = useCallback(() => {
    if (!orders.isLoading) {
      return data.map((item) => ({ ...item, key: item.id }));
    }
  }, [orders, data]);

  const getColumns = useCallback(() => {
    if (!orders.isLoading) {
      const columns = [
        { title: "name", dataIndex: "name", key: "name" },
        { title: "phone", dataIndex: "phone", key: "phone" },
        { title: "address", dataIndex: "address", key: "address" },
      ];
      return columns;
    }
  }, [orders]);

  const expandedRowRender = (record: any) => {
    const products = record.orders;
    const columns = [
      { title: "id", dataIndex: "id", key: "id" },
      { title: "name", dataIndex: "name", key: "name" },
      { title: "quantity", dataIndex: "quantity", key: "quantity" },
      { title: "price", dataIndex: "price", key: "price" },
    ];
    const dataSource = products.map((product: any, index: any) => ({
      ...product,
      key: product.id + index,
    }));

    return (
      <Table columns={columns} dataSource={dataSource} pagination={false} />
    );
  };

  const columns: any = getColumns();
  const dataSource: any = getFormatedData();

  return (
    <Table
      loading={orders.isLoading}
      dataSource={dataSource}
      expandable={{ expandedRowRender }}
      columns={columns}
    />
  );

};

export default AdminSiderTableOrdersContainer;
