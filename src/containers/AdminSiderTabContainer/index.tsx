import { useCallback, useContext, useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Context } from "../../store";
import { OutletContextType } from "../AdminPageContainer";
import styles from "./AdminSiderTabContainer.module.scss";
import tableDateFormater from "../../utils/tableDateFormater";
import AdminTabItemButtonGroup from "../../components/AdminTabItemButtonGroup";
import { Button, Modal, Table } from "antd";
import AdminUpdateItemForm from "../../components/AdminUpdateItemForm";

const AdminSiderTableContainer: React.FC = () => {
  const { tabContext }: OutletContextType = useOutletContext();
  const ctx: any = useContext(Context);
  const [state, setState] = useState({
    loading: true,
    hasData: false,
    isOpenedUpdateModalForm: false,
    modalData: null,
    columns: [],
    dataSource: [],
  });

  const openUpdateModal = (tabContext: any, record: any) => {
    setState((p: any) => ({
      ...p,
      isOpenedUpdateModalForm: true,
      modalData: {
        ctx: tabContext,
        data: record,
      },
    }));
  };

  const closeUpdateModal = () => {
    setState((p: any) => ({
      ...p,
      isOpenedUpdateModalForm: false,
      modalData: null,
    }));
  };

  useEffect(() => {
    if (ctx.events.success && tabContext) {
      const onDelete = (tabContext: any, record: any) => {
        console.log(tabContext, record);
        ctx.requestHandlers.deleteItem(tabContext, record);
      };

      const [columns, dataSource]: any = tableDateFormater(
        ctx.store,
        tabContext,
        (render: any, record: any) => {
          return (
            <AdminTabItemButtonGroup
              record={record}
              render={render}
              tabContext={tabContext}
              onDelete={onDelete}
              openUpdateModal={openUpdateModal}
            />
          );
        }
      );
      setState((p) => ({
        ...p,
        loading: false,
        hasData: true,
        columns: columns,
        dataSource: dataSource,
      }));
    }
  }, [ctx.events.success, ctx.store, tabContext, ctx.requestHandlers]);

  const onSubmitUpdateItem = (e: any) => {
    console.log(e);
    // ctx.requestHandlers.updateItem(e);
  };

  return (
    <div className={styles.container}>
      <Table
        bordered
        className={styles.table}
        size="small"
        loading={state.loading}
        columns={state.columns}
        dataSource={state.dataSource}
      />
      <Modal
        open={state.isOpenedUpdateModalForm}
        onCancel={closeUpdateModal}
        footer={[
          <Button form="updateForm" key="submit" htmlType="submit">
            Submit
          </Button>,
        ]}
      >
        <AdminUpdateItemForm
          formData={state.modalData}
          onSubmitUpdateItem={onSubmitUpdateItem}
        />
      </Modal>
    </div>
  );
};

export default AdminSiderTableContainer;
