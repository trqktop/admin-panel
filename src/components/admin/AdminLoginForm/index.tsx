import { Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import Form from "antd/lib/form";
// import fetch from "../../server";
import { useNavigate } from "react-router-dom";
// import { OptionsType } from "../../server";
import Service from "../../../service";

const AdminLoginForm: React.FC = () => {
  const navigate = useNavigate();

  const loginHandler = async (data: FormData) => {
    const getToken = async (url: string) => {
      const service = new Service();
      service.options({ url });
      const user:any = await service.post(data);
      if (user.token) {
        localStorage.setItem("token", user.token);
        navigate("admin");
      }
    };
    getToken("login");
  };

  return (
    <Form
      // disabled={loading}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={loginHandler}
      id="adminLogin"
      style={{ padding: 33 }}
    >
      <Form.Item
        hasFeedback
        // validateStatus={validateStatus}
        name="username"
        // help={helpMessage}
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="username"
        />
      </Form.Item>
      <Form.Item
        hasFeedback
        // validateStatus={validateStatus}
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input
          autoComplete=""
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item
          name="remember"
          valuePropName="checked"
          noStyle
          // validateStatus={validateStatus}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/">
          Forgot password
        </a>
      </Form.Item>
    </Form>
  );
};

export default AdminLoginForm;
