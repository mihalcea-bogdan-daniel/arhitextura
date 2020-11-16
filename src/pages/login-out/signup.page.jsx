import React from "react";
import classes from "./signup.module.scss";
import Form from "../../components/text-input/inputs.component";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import firebase from "./firebase_functions";

export default function SignUp() {
  const [state, setState] = React.useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((res) => {
        const userPayload = { email: res.user.email, uid:res.user.uid, displayName:res.user.displayName };
        dispatch(setUser(userPayload));
        console.log(res.user);
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        console.log(errorCode, errorMessage);
      });
  };
  return (
    <div className={classes.signup}>
      <Form
        title={"Înregistrare"}
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
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
