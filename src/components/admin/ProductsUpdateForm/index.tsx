import { Input } from "antd";
import Form from "antd/lib/form";

import Select from "antd/lib/select";
import TextArea from "antd/es/input/TextArea";

const ProductsUpdateForm = ({ state, onSubmit, update }: any) => {
  const product = state.openedItemData.record;
  const categories = state.categories.data.filter(
    (category: any) => category.parent_id
  );
  const brands = state.brands.data;
  const { name, price, description, image }: any = {
    ...product,
  };

  return (
    <Form
      id={update ? "updateItem" : "createItem"}
      onFinish={onSubmit}
      key={state.openedItemData.record.id}
    >
      <Form.Item label="name" name="name" initialValue={name}>
        <Input />
      </Form.Item>
      <Form.Item label="price" name="price" initialValue={price}>
        <Input />
      </Form.Item>
      <Form.Item label="image" name="image" initialValue={image}>
        <Input />
      </Form.Item>
      <Form.Item label="brand" name="brand_id" initialValue={product.brand_id}>
        <Select
          options={brands.map((brand: any) => ({
            label: brand.name,
            value: brand.id,
          }))}
        />
      </Form.Item>
      <Form.Item
        label="category"
        name="category_id"
        initialValue={product.category_id}
      >
        <Select
          options={categories.map((category: any) => ({
            label: category.name,
            value: category.id,
          }))}
        />
      </Form.Item>
      <Form.Item
        label="description"
        name="description"
        initialValue={description}
      >
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default ProductsUpdateForm;
