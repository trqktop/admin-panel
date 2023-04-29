import { Input, Modal } from "antd";
import Button from "antd/lib/button";
import Form from "antd/lib/form";

const UpdateItemModal = ({
  opened,
  currentElement,
  closeModalHandler,
  submitUpdatehandler,
}: any) => {
  return (
    <Modal
      open={opened}
      // open={isOpenedModal}
      //  onOk={adminCloseModalHandler}
      onCancel={closeModalHandler}
      footer={[
        <Button form="updateForm" key="submit" htmlType="submit">
          Submit
        </Button>,
      ]}
    >
      <Form onFinish={submitUpdatehandler} id="updateForm">
        <Form.Item>
          <Input placeholder="username" value={currentElement?.name??null} />
        </Form.Item>
      </Form>
    </Modal>
  );
};
export default UpdateItemModal;
