import React from "react";
import classes from "./signup.module.scss";

import Form from "../../components/text-input/inputs.component";
export default function SignUp() {
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    // console.log(e.target.id);

    setState({ ...state, [e.target.id]: e.target.value });
  };
  return (
    <div className={classes.signup}>
      <Form
        title={"Înregistrare"}
        onSubmit={(e) => {
          e.preventDefault();
          console.log(state);
        }}
      >
        <Form.TextField
          id="nume"
          helpertext={"nume"}
          type={"text"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.TextField
          id="prenume"
          helpertext={"prenume"}
          type={"text"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.TextField
          id="e-mail"
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
        <Form.TextField
          id="confirma-parola"
          helpertext={"confirmă parola"}
          type={"password"}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <Form.Submit value={"TRIMITE"} />
      </Form>
    </div>
  );
}
