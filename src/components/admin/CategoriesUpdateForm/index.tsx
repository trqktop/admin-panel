import { Select } from "antd";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const CategoriesUpdateForm = ({ category, brands, categories, onSubmit, update }: any) => {
  const initialValues = update ? ({
    name: category.name,
  }) : null
  const key = update ? category.id : null

  return (
    <>
      <Form
        key={key}
        id={update ? 'updateItem' : 'createItem'}
        onFinish={onSubmit}
        initialValues={{ ...initialValues }}
      >
        <Form.Item label="name" name="name" >
          <Input />
        </Form.Item>
        {/* <Form.Item label="parent" name="parent_id">
          <Select
            style={{ width: "100%" }}
            options={categories.map((category: any) => ({
              label: category.name,
              value: category.id,
            }))}
          />
        </Form.Item> */}
      </Form>
    </>
  );
};

export default CategoriesUpdateForm;
