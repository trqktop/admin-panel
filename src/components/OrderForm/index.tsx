import { Form, Input, Button } from "antd";

const OrderForm = ({ products }: any) => {
  console.log(products)
  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 12 }}
      onFinish={(e: any) => console.log(e)}
    >
      <Form.Item label="Имя">
        <Input />
      </Form.Item>
      <Form.Item label="Телефон">
        <Input />
      </Form.Item>
      <Form.Item label="Адрес">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
