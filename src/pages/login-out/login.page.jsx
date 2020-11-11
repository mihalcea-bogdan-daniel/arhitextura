import React from "react";
import classes from "./login.module.scss";

import Form from "../../components/text-input/inputs.component";

export default function Login() {
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    // console.log(e.target.id);

    setState({ ...state, [e.target.id]: e.target.value });
  };
  return (
    <div className={classes.login}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state);
        }}
      >
        <Form.TextField
          id="email"
          helpertext={"e-mail"}
          type={"email"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.TextField
          id="password"
          helpertext={"parolă"}
          type="password"
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.Submit value={"LOG IN"} />
      </Form>
    </div>
  );
}
