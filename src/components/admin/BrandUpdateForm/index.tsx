import { Input } from "antd";
import Form from "antd/lib/form";

const BrandUpdateForm = ({ state, onSubmit, create, update }: any) => {
  const brand: any = state.openedItemData.record;
  const id: any = brand.id;
  const initialValues: any = { name: brand.name };
  return (
    <Form
      key={state.openedItemData.record.id}
      id={update ? "updateItem" : "createItem"}
      onFinish={onSubmit}
      initialValues={initialValues}
    >
      <Form.Item label="name" name="name">
        <Input value={id} />
      </Form.Item>
    </Form>
  );
};

export default BrandUpdateForm;
