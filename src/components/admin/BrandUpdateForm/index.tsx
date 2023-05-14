import { Input } from "antd";
import Form from "antd/lib/form";

const BrandUpdateForm = ({ brand, brands, categories, update, onSubmit }: any) => {
  const initialValues = update ? ({
    name: brand.name,
  }) : null
  const key = update ? brand.id : null
  return (
    <Form
      key={key}
      id={update ? 'updateItem' : 'createItem'}
      onFinish={onSubmit}
      initialValues={{ ...initialValues }}
    // initialValues={initialValues}
    >
      <Form.Item label="name" name="name">
        <Input />
      </Form.Item>
    </Form>
  );
};

export default BrandUpdateForm;
