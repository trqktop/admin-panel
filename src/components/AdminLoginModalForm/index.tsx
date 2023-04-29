import Modal from "antd/es/modal/Modal";
import Button from "antd/lib/button";
import AdminLoginForm from "../AdminLoginForm";

const AdminLoginModalForm = ({
  isOpenedModal,
  adminCloseModalHandler,
}: any) => {
  return (
    <Modal
      open={isOpenedModal}
      onOk={adminCloseModalHandler}
      onCancel={adminCloseModalHandler}
      footer={[
        <Button form="adminLogin" key="submit" htmlType="submit">
          Submit
        </Button>,
      ]}
    >
      <AdminLoginForm></AdminLoginForm>
    </Modal>
  );
};

export default AdminLoginModalForm;
