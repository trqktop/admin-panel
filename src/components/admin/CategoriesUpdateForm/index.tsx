import { Select } from "antd";
import Form from "antd/lib/form";
import Input from "antd/lib/input";

const CategoriesUpdateForm = ({ onSubmit, state, update, create }: any) => {
  const category = state.openedItemData.record;

  const initialValues = { name: category.name };

  const inputsCreator = () => {
    const categories = state.categories.data.filter(
      (item: any) => !item.parent_id
    );
    return (
      <Select
        style={{ width: "100%" }}
        options={categories.map((category: any) => ({
          label: category.name,
          value: category.id,
        }))}
      />
    );
  };

  return (
    <>
      <Form
        key={state.openedItemData.record.id}
        id={update ? "updateItem" : "createItem"}
        onFinish={onSubmit}
        initialValues={initialValues}
      >
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="parent" name="parent_id">
          {create && inputsCreator()}
        </Form.Item>
      </Form>
    </>
  );
};

export default CategoriesUpdateForm;
