import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";
function App() {
  return (
    <div className="body">
      <form
        method="POST"
        action="authenticate"
        name="normal_login"
        className="form"
      >
        <img className="form_title" src="img/logo.jpg" />

        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Логин"
          type="text"
          name="login"
          className="form_input"
        />

        <Input
          className="form_input"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Пароль"
          type="password"
          name="pass"
        />

        <Button type="primary" htmlType="submit" className="form_button">
          Вход
        </Button>
      </form>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("App"));
