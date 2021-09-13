import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";
import { ApiFetch } from "./Helpers";
function App() {
  const [form] = Form.useForm();

  return (
    <div className="body">
      <form
        form={form}
        onFinish={() => {
          form.submit();
        }}
        method="POST"
        action="authenticate"
        name="normal_login"
        className="form "
        initialValues={{
          remember: true,
        }}
      >
        <img className="form_title" src="img/logo.jpg" />
        <Form.Item
          name="login"
          rules={[
            {
              required: false,
              message: "Пожалуйста введите ваш логин!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Логин"
            type="text"
            className="form_input"
          />
        </Form.Item>
        <Form.Item
          name="pass"
          rules={[
            {
              required: false,
              message: "Пожалуйста введите ваш пароль!",
            },
          ]}
        >
          <Input
            className="form_input"
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Пароль"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="form_button">
            Вход
          </Button>
        </Form.Item>
      </form>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("App"));
