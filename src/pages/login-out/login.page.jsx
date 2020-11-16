import React from "react";
import classes from "./login.module.scss";
import { Link, Redirect } from "react-router-dom";
import Form from "../../components/text-input/inputs.component";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./userSlice";
import firebase from './firebase_functions'



export default function Login() {
  const [state, setState] = React.useState({});
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.password)
      .then((res) => {
        dispatch(setUser(res.user.displayName));
        console.log(res);
      })
      .catch((error) => {
        setState({ ...state, message: error.message });
      });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  return (
    <div className={classes.login}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
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
        <div>{user.uid}</div>
        {state.message && <div>Invalid credentials, please try again</div>}

        <Form.Submit value={"CONECTARE"} />
        <Link to="/signup">
          <Form.Button value={"ÎNREGISTRARE"} />
        </Link>
      </Form>
    </div>
  );
}
