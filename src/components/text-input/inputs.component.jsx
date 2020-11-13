import React from "react";
import styles from "./inputs.module.scss";
import Typography from "../../pages/roadmap/components/typography/typography.component";
export function TextField(props) {
  const inputRef = React.useRef();
  const [focused, setFocused] = React.useState(false);

  function statusClassName(){
    switch (props.status) {
      case "error":
        return styles.error
      case "disabled":
        return "disabled"
      default:
        break;
    }
  }
  
  const handleChange = (e) => {
    if (e.target.value === "") {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <div>
      <input
        className={`${styles.input}`}
        type={props.type || "text"}
        id={props.id}
        ref={inputRef}
        onFocus={() => {
          setFocused(true);
        }}
        onBlur={(e) => {
          e.target.value ? setFocused(true) : setFocused(false);
        }}
        onChange={(e) => {
          handleChange(e);
        }}
        {...props}
      ></input>
      <label
        className={`${styles.inputTextLabel} ${focused ? styles.focused : ""} ${statusClassName()}`}
        htmlFor={props.id}
      >
        {props.helpertext || props.type}
      </label>
    </div>
  );
}
function Submit(props) {
  return <input className = {styles.input} type="submit" value={props.value} />;
}
function Button(props) {
  return <input className = {styles.input} type="button" value={props.value} />;
}

function Form(props) {
  const { children } = props;
  return (
    <form className={styles.form} {...props}>
          <Typography.H1 text={props.title}/>
      {children}
    </form>
  );
}

Form.TextField = TextField;
Form.Submit = Submit;
Form.Button = Button;

export default Form;
