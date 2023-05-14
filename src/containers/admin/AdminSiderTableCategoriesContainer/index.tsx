import { useOutletContext } from "react-router-dom";
import { Badge, Button, Dropdown, Space, Table } from "antd";
import ButtonGroup from "antd/es/button/button-group";
import { OutletContextType } from "../AdminPageContainer";
import { DownOutlined } from "@ant-design/icons";
const AdminSiderTableCategoriesContainer = () => {
  const { state, openUpdateModal, openCreateModal, onDeleteItem }: OutletContextType = useOutletContext()
  const categories = state.categories
  const { name, items, isLoaded, page, length, limit, currentCategory } = categories

  //   {
  //     "id": 1,
  //     "name": "Одежда",
  //     "children": [
  //         {
  //             "id": 3,
  //             "name": "Майки",
  //             "products": 64
  //         },
  //         {
  //             "id": 4,
  //             "name": "Штаны",
  //             "products": 64
  //         }
  //     ],
  //     "products": 0
  // }



  // const { tabData, onUpdate, onDelete, openCreateItemModal }: any =
  //   useOutletContext();
  // const state = tabData.categories;

  // const getFormatedData = (data: any) => {
  //   let isChildren = false;
  //   let result: any = [];
  //   const children: any = [];
  //   const parents: any = [];
  //   const formater = (item: any) => ({ ...item, key: item.id });
  //   data.forEach((item: any) => {
  //     const formated = formater(item);
  //     if (item.parent_id) {
  //       isChildren = true;
  //       children.push(formated);
  //     } else {
  //       parents.push(formated);
  //     }
  //   });

  //   result = parents;
  //   if (isChildren) {
  //     isChildren = false;
  //     result = parents.map((parent: any) => {
  //       let newParent = parent;
  //       const filteredChild = children.filter(
  //         (child: any) => child.parent_id === parent.id
  //       );
  //       newParent.children = filteredChild;
  //       return newParent;
  //     });
  //   }
  //   return result;
  // };

  const renderActions = (record: any) => {
    return (
      <ButtonGroup>
        <Button onClick={() => openUpdateModal({ record, type: 'categories' })}>
          update
        </Button>
        <Button onClick={() => onDeleteItem({ record, type: 'categories' })}>
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
