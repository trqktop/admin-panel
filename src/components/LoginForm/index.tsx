import styles from "./LoginForm.module.scss";
import React from "react";
import { Button, Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
type Props = {
  onFinish: (value: any) => void;
  loading: boolean;
  validateStatus:
  | ""
  | "error"
  | "validating"
  | "success"
  | "warning"
  | undefined;
  helpMessage: string;
};

const LoginForm: React.FunctionComponent<Props> = ({
  onFinish,
  loading,
  validateStatus,
  helpMessage,
}) => {
  return (
    <div className={styles.loginForm}>
      <Form
        disabled={loading}
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          hasFeedback
          validateStatus={validateStatus}
          name="username"
          help={helpMessage}
          rules={[{ required: true, message: "Please input your Username!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="username"
          />
        </Form.Item>
        <Form.Item
          hasFeedback
          validateStatus={validateStatus}
          name="password"
          rules={[{ required: true, message: "Please input your Password!" }]}
        >
          <Input
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
            validateStatus={validateStatus}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <a className="login-form-forgot" href="/">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item validateStatus={validateStatus}>
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      <div>Username : a</div>
      <div>Password : a</div>
    </div>
  );
};
export default LoginForm;
