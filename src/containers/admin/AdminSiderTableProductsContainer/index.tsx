import { Button, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useOutletContext } from "react-router-dom";
import { getFormatedData } from "../../../utils/tableDateFormater";
import { getProductColumns } from "../../../constants";
import { OutletContextType } from "../AdminPageContainer";
const AdminSiderTableProductsContainer = () => {
  const {
    state,
    // tabData,
    // onChangePagination,
    // onDelete,
    openUpdateModal,
    openCreateModal,
    onDeleteItem
    // openCreateItemModal,
  }: any = useOutletContext<OutletContextType>();
  // const state = tabData.products;
  const products = state.products
  const { items, length, name, isLoaded, page, limit, currentCategory } = products

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => openUpdateModal({ record, type: 'products' })}>
          update
        </Button>
        <Button onClick={() => onDeleteItem({ record, type: 'products' })}>
          delete
        </Button>
      </ButtonGroup>
    );
  };
  // onClick={() => onDelete({ id: record.id, type: "products" })}
  // onClick={() => onUpdate({ record, type: "products" })}
  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'category',
      key: 'category',
      render: (_: any, record: any) => record.category.name,
    },
    {
      title: 'brand',
      key: 'brand',
      render: (_: any, record: any) => record.brand.name,
    },
    {
      title: 'description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'image',
      render: (_: any, record: any) => <img src={record.image} style={{ maxWidth: '50px' }} alt={record.name} />,
      key: 'image',
    },
    {
      title: 'actions',
      key: 'actions',
      render: renderActions,
    },
  ];


  return (
    <div>
      <Button onClick={() => openCreateModal("products")}>
        create product
      </Button>
      <Table
        bordered
        size="small"
        pagination={{
          // onChange: onChangePagination,
          size: "small",
          simple: true,
          current: page,
          total: length,
          pageSize: limit,
        }}
        loading={!isLoaded}
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default AdminSiderTableProductsContainer;
