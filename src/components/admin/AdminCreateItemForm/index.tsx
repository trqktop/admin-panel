import Form from "antd/lib/form";

const AdminCreateItemForm: React.FC<any> = ({
  formData,
  onSubmitUpdateItem,
}) => {

  return (
    <Form id="s" onFinish={onSubmitUpdateItem}>
    </Form>
  );
};
export default AdminCreateItemForm;
