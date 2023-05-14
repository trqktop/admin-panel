import { Input, TreeSelect } from "antd";
import Form from "antd/lib/form";
import Select from "antd/lib/select";
import TextArea from "antd/es/input/TextArea";
import { Option } from "antd/es/mentions";

const ProductsUpdateForm = ({ product, brands, categories, onSubmit, update }: any) => {

  const categoriesChildren = categories.map((category: any) => category.children).flat()
  const initialValues = update ? ({
    name: product.name,
    price: product.price,
    image: product.image,
    brand_id: product.brand.id,
    category_id: product.category.id,
    description: product.description
  }) : null
  const key = update ? product.id : null

  return (
    <Form
      id={update ? 'updateItem' : 'createItem'}
      onFinish={onSubmit}
      key={key}
      initialValues={{ ...initialValues }}
    >
      <Form.Item label="name" name="name" >
        <Input />
      </Form.Item>
      <Form.Item label="price" name="price" >
        <Input />
      </Form.Item>
      <Form.Item label="image" name="image" >
        <Input />
      </Form.Item>
      <Form.Item label="brand" name="brand_id" >
        <Select
          options={brands.map((brand: any) => ({
            label: brand.name,
            value: brand.id,
          }))}
        />
      </Form.Item>
      <Form.Item label="category" name="category_id" >
        <Select
          options={categoriesChildren.map((category: any) => ({
            label: category.name,
            value: category.id,
          }))}
        />
      </Form.Item>
      {/* <Form.Item label="Категория" name="category">
    
      </Form.Item> */}
      {/* <Form.Item label="Категория" name="category">
        <Select>
          {categories.map((category: any) => (
            <Option key={category.id} value={category.id}>
              {category.name}
            </Option>
          ))}
        </Select>
      </Form.Item> */}

      {/* <Form.Item
        label="category"
        name="category_id"
        initialValue={product.category.id}
      >
        <Select
          options={categories.map((category: any) =>
          ({
            label: category.name,
            value: category.id,
          }))}
        />
      </Form.Item> */}
      <Form.Item
        label="description"
        name="description"
      >
        <TextArea rows={4} />
      </Form.Item>
    </Form>
  );
};

export default ProductsUpdateForm;
