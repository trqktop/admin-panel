import Form from "antd/lib/form";
import TextArea from "antd/es/input/TextArea";
import { Input } from "antd";
import { useContext } from "react";
import { Context } from "../../store";

// {
//   "id": 1,
//   "name": "Футболка Nike Dri-FIT Academy",
//   "price": 10,
//   "category_id": 3,
//   "brand_id": 1,
//   "description": "Отличная майка, подойдет для любых случаев жизни. Подари себе две и никогда не думай, что надеть на завтра!",
//   "image": "https://basket-03.wb.ru/vol390/part39014/39014942/images/big/1.jpg",
//   "key": 1
// }

// {
//   "id": 1,
//   "name": "Одежда",
//   "parent_id": null,
//   "key": 1,
//   "children": [
//       {
//           "id": 3,
//           "name": "Майки",
//           "parent_id": 1,
//           "key": 3
//       },
//       {
//           "id": 4,
//           "name": "Штаны",
//           "parent_id": 1,
//           "key": 4
//       }
//   ]
// }
// {
//   "id": 1,
//   "name": "Nike",
//   "key": 1
// }

const AdminUpdateItemForm: React.FC<any> = ({
  formData,
  onSubmitUpdateItem,
}) => {
  const { ctx, data }: any = { ...formData };
  const {
    store: { brands, categories, products },
  }: any = useContext(Context);

  const renderInputs = (currentElement: any) => {
    const pairs = Object.entries(currentElement);
    return pairs.map(([key, value]: any[], index) => {
      return (
        <Form.Item key={index} label={key} name={key} initialValue={value}>
          {key === "description" ? (
            <TextArea></TextArea>
          ) : (
            <Input placeholder={key} />
          )}
        </Form.Item>
      );
    });
  };

  return (
    <Form id="updateForm" onFinish={onSubmitUpdateItem}>
      {renderInputs(data)}
    </Form>
  );
};
export default AdminUpdateItemForm;
