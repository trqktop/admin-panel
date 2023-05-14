import { useOutletContext } from "react-router-dom";
import { Badge, Button, Dropdown, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { OutletContextType } from "../AdminPageContainer";
import { DownOutlined } from "@ant-design/icons";
const AdminSiderTableCategoriesContainer = () => {
  const { state, openUpdateModal, openCreateModal, onDeleteItem }: OutletContextType = useOutletContext()
  const categories = state.categories
  const { name, items, isLoaded, page, length, limit, currentCategory } = categories

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => openUpdateModal({ record, type: 'categories' })}>
          update
        </Button>
        <Button disabled={record.products > 0} onClick={() => onDeleteItem({ record, type: 'categories' })}>
          delete
        </Button>
      </ButtonGroup>
    );
  };


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
    <div>
      <Button onClick={() => openCreateModal("categories")}>
        Create category
      </Button>
      <Table
        bordered
        size="small"
        // loading={state.isLoading}
        // pagination={false}
        // expandable={{ expandedRowRender, defaultExpandedRowKeys: ['0'] }}
        columns={columns}
        dataSource={items}
        rowKey={(record) => record.id}
        pagination={false}
      />
    </div>
  );
};

export default AdminSiderTableCategoriesContainer;
