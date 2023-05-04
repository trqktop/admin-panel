import { Form, Input, Button, Typography } from "antd";
import styles from "./OrderForm.module.scss";
const OrderForm = ({ products }: any) => {

  return (
    <Form
      labelCol={{ span: 5 }}
      wrapperCol={{ span: 12 }}
      onFinish={(e: any) => console.log(e, products)}
      className={styles.container}
    >
      <Typography.Title className={styles.title} level={4}>
        Ваши данные
      </Typography.Title>
      <Form.Item label="Имя" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Телефон" name="phone">
        <Input />
      </Form.Item>
      <Form.Item label="Адрес" name="address">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
        <Button type="primary" htmlType="submit">
          Оформить заказ
        </Button>
      </Form.Item>
    </Form>
  );
};

export default OrderForm;
