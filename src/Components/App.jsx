import React, { useState } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Input, Button, Form } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./App.css";
import "./Helpers";
import { ApiFetch } from "./Helpers";
function App() {
  const [profile, setProfile] = useState({ login: null, pass: null });
  const ChangeHandler = (Action, Data) => {
    //изменяет значение при изменении строки
    let newProfile = { ...profile };
    switch (Action) {
      case "ChangeLogin":
        newProfile.login = Data;
        setProfile(newProfile);
        break;
      case "ChangePassword":
        newProfile.pass = Data;
        setProfile(newProfile);
        break;
    }
  };
  return (
    <div className="body">
      <Form
        onFinish={() => {
          ApiFetch(`model/authenticate`, "POST", profile, (Response) => {});
        }}
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
          onChange={(Event) => {
            ChangeHandler("ChangeLogin", Event.target.value);
          }}
        />

        <Input
          className="form_input"
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Пароль"
          type="password"
          name="pass"
          onChange={(Event) => {
            ChangeHandler("ChangePassword", Event.target.value);
          }}
        />

        <Button type="primary" htmlType="submit" className="form_button">
          Вход
        </Button>
      </Form>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("App"));
