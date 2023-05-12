import { useOutletContext } from "react-router-dom";
import { Button, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
const AdminSiderTableCategoriesContainer = () => {
  const { tabData, onUpdate, onDelete, openCreateItemModal }: any =
    useOutletContext();
  const state = tabData.categories;

  const getFormatedData = (data: any) => {
    let isChildren = false;
    let result: any = [];
    const children: any = [];
    const parents: any = [];
    const formater = (item: any) => ({ ...item, key: item.id });
    data.forEach((item: any) => {
      const formated = formater(item);
      if (item.parent_id) {
        isChildren = true;
        children.push(formated);
      } else {
        parents.push(formated);
      }
    });

    result = parents;
    if (isChildren) {
      isChildren = false;
      result = parents.map((parent: any) => {
        let newParent = parent;
        const filteredChild = children.filter(
          (child: any) => child.parent_id === parent.id
        );
        newParent.children = filteredChild;
        return newParent;
      });
    }
    return result;
  };

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => onUpdate({ record, type: "categories" })}>
          update
        </Button>
        <Button
          onClick={() => onDelete({ id: record.id, type: "categories" })}
          disabled={!record.parent_id}
        >
          delete
        </Button>
      </ButtonGroup>
    );
  };

  const getColumns = (brands: any) => {
    if (!state.isLoading) {
      const action: any = {
        title: "Action",
        key: "action",
        width: "150px",
        render: renderActions,
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

  return (
    <div>
      <Button onClick={() => openCreateItemModal("categories")}>
        Create category
      </Button>
      <Table
        bordered
        size="small"
        loading={state.isLoading}
        pagination={false}
        columns={getColumns(state.data)}
        dataSource={getFormatedData(state.data)}
      />
    </div>
  );
};

export default AdminSiderTableCategoriesContainer;
