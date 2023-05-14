import { useOutletContext } from "react-router-dom";
import styles from "./AdminSiderTableBrandsContainer.module.scss";
import { Button, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { OutletContextType, StateAdmin } from "../AdminPageContainer";

const AdminSiderTableBrandsContainer: React.FC = () => {
  // const { tabData, onDelete, onUpdate, openCreateItemModal }: any =
  //   useOutletContext();
  const { state, openUpdateModal, openCreateModal, onDeleteItem }: OutletContextType = useOutletContext()
  // const state = tabData.brands;
  const brands = state.brands
  const { currentCategory, isLoaded, items, length, limit, name, page } = brands

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => openUpdateModal({ record, type: 'brands' })} >
          update
        </Button>
        <Button onClick={() => onDeleteItem({ record, type: 'brands' })} disabled={record.products > 0} >
          delete
        </Button>
      </ButtonGroup>
    );
  };
  //onClick={() => onUpdate({ record, type: "brands" })}
  //        onClick={() => onDelete({ id: record.id, type: "brands" })}



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
      title: 'products length',
      dataIndex: 'products',
      key: 'products',
    },
    {
      title: 'actions',
      key: 'actions',
      render: renderActions,
    },
  ];



  return (
    <div className={styles.container}>
      {/* <Button
        // loading={state.isLoading}
        // onClick={() => openCreateItemModal("brands")}
      >
        create brand
      </Button> */}
      <Button onClick={() => openCreateModal("brands")}>
        create product
      </Button>
      <Table
        bordered
        className={styles.table}
        size="small"
        pagination={false}
        loading={!isLoaded}
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default AdminSiderTableBrandsContainer;
