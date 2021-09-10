import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div className="login-shadow">
      <Form
        method="POST"
        action="/authenticate"
        name="normal_login"
        className="login-form "
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <img className="login-img" src="img/logo.jpg" />
        <Form.Item
          name="login"
          className="login-form-input"
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
          />
        </Form.Item>
        <Form.Item
          name="pass"
          className="login-form-input"
          rules={[
            {
              required: false,
              message: "Пожалуйста введите ваш пароль!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            placeholder="Пароль"
            type="password"
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Вход
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("App"));
