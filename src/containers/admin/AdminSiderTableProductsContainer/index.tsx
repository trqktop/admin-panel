import { Button, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { useOutletContext } from "react-router-dom";
import { getFormatedData } from "../../../utils/tableDateFormater";
import { getProductColumns } from "../../../constants";

const AdminSiderTableProductsContainer = () => {
  const {
    tabData,
    onChangePagination,
    onDelete,
    onUpdate,
    openCreateItemModal,
  }: any = useOutletContext();
  const state = tabData.products;

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => onUpdate({ record, type: "products" })}>
          update
        </Button>
        <Button onClick={() => onDelete({ id: record.id, type: "products" })}>
          delete
        </Button>
      </ButtonGroup>
    );
  };

  const columns: any = !state.isLoading
    ? getProductColumns(renderActions)
    : null;
  const dataSource: any = !state.isLoading ? getFormatedData(state.data) : null;

  return (
    <div>
      <Button onClick={() => openCreateItemModal("products")}>
        create product
      </Button>
      <Table
        bordered
        size="small"
        pagination={{
          onChange: onChangePagination,
          size: "small",
          simple: true,
          current: state.page,
          total: tabData.count.data,
          pageSize: state.limit,
        }}
        loading={state.isLoading}
        columns={columns}
        dataSource={dataSource}
      />
    </div>
  );
};

export default AdminSiderTableProductsContainer;
