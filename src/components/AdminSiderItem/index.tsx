import { Button, Space, Table } from "antd";
import { useContext, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "../../store";
import getTableData from "../../utils/getTableData";
import UpdateItemModal from "../UpdateItemModal";

const rowSelection: any = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    // console.log(
    //   `selectedRowKeys: ${selectedRowKeys}`,
    //   "selectedRows: ",
    //   selectedRows
    // );
  },
  onSelect: (record: any, selected: any, selectedRows: any) => {
    // console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
    // console.log(selected, selectedRows, changeRows);
  },
};

const AdminSiderItem = () => {
  const outletCtx: any = useOutletContext();
  const { requestHandlers } = useContext(Context);
  const [updateModalState, setUpdateModalState] = useState({
    opened: false,
    currentElement: null,
  });

  const deleteItemHandler = (text: any, record: any, index: any) => {
    requestHandlers.delete({ ...record, type: outletCtx.type });
  };
  const updateItemHandler = (text: any, record: any, index: any) => {
    setUpdateModalState((p: any) => ({
      ...p,
      opened: true,
      currentElement: record,
    }));
    // requestHandlers.update({ ...record, type: outletCtx.type });
  };
  const closeModalHandler = () => {
    setUpdateModalState((p: any) => ({ ...p, opened: false }));
  };

  const submitUpdatehandler = (e: any) => {
    console.log(e);
  };

  if (outletCtx.id) {
    const updateDeletePanel = (text: any, record: any, index: any) => {
      return (
        <Space size="middle">
          <Space>
            <Button onClick={() => deleteItemHandler(text, record, index)}>
              delete
            </Button>
            <Button onClick={() => updateItemHandler(text, record, index)}>
              update
            </Button>
          </Space>
        </Space>
      );
    };
    const [columns, dataSource]: any = getTableData(
      outletCtx,
      updateDeletePanel
    );

    return (
      <>
        <Table
          dataSource={dataSource}
          columns={columns}
          rowSelection={rowSelection}
        />
        <UpdateItemModal
          currentElement={updateModalState.currentElement}
          opened={updateModalState.opened}
          closeModalHandler={closeModalHandler}
          submitUpdatehandler={submitUpdatehandler}
        />
      </>
    );
  } else {
    return null;
  }
};
export default AdminSiderItem;
