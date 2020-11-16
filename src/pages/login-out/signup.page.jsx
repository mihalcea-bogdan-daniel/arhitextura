import React from "react";
import classes from "./signup.module.scss";
import Form from "../../components/text-input/inputs.component";
import firebase from "../../app/firebase_functions";
export default function SignUp() {
  const [state, setState] = React.useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.id]: e.target.value });
  };
  const handleSubmit = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then((res) => {
        
        if(res.user){
          res.user.updateProfile({
            displayName:`${state.nume} ${state.prenume}`
          })
        }
      })
      .catch((e) => {
        const errorCode = e.code;
        const errorMessage = e.message;
        alert(errorCode, errorMessage);
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
