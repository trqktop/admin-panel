import { useOutletContext } from "react-router-dom";
import styles from "./AdminSiderTableBrandsContainer.module.scss";
import { Button, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";

const AdminSiderTableBrandsContainer: React.FC = () => {
  const { tabData, onDelete, onUpdate, openCreateItemModal }: any =
    useOutletContext();

  const state = tabData.brands;

  const getFormatedData = (brands: any) => {
    if (!state.isLoading) {
      return brands.map((item: any) => ({ ...item, key: item.id }));
    }
  };

  const getColumns = (brands: any) => {
    if (!state.isLoading) {
      const action: any = {
        title: "Action",
        key: "action",
        render: renderActions,
        width: "150px",
      };
      const columns = Object.keys(brands[0]).map((key: any) => ({
        title: key,
        dataIndex: key,
        value: key,
        key: key,
      }));
      return columns.concat(action);
    }
  };

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => onUpdate({ record, type: "brands" })}>
          update
        </Button>
        <Button
          onClick={() => onDelete({ id: record.id, type: "brands" })}
          disabled
        >
          delete
        </Button>
      </ButtonGroup>
    );
  };

  return (
    <div className={styles.container}>
      <Button
        loading={state.isLoading}
        onClick={() => openCreateItemModal("brands")}
      >
        create brand
      </Button>
      <Table
        bordered
        className={styles.table}
        size="small"
        pagination={false}
        loading={state.isLoading}
        columns={getColumns(state.data)}
        dataSource={getFormatedData(state.data)}
      />
    </div>
  );
};

export default AdminSiderTableBrandsContainer;
