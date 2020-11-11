import React from "react";
import styles from "./inputs.module.scss";
import Typography from "../../pages/roadmap/components/typography/typography.component";
export function TextField(props) {
  const inputRef = React.useRef();
  const [focused, setFocused] = React.useState(false);

  const handleChange = (e) => {
    if (e.target.value == "") {
      setFocused(false);
    } else {
      setFocused(true);
    }
  };

  return (
    <div>
      <input
        className={styles.input}
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
        className={`${styles.inputTextLabel} ${focused ? styles.focused : ""}`}
        htmlFor={props.id}
      >
        {props.helpertext || props.type}
      </label>
    </div>
  );
}
function Submit(props) {
  return <input type="submit" value={props.value} />;
}

function Form(props) {
  const { children } = props;
  return (
    <form className={styles.form} {...props}>
      {children}
    </form>
  );
}

Form.TextField = TextField;
Form.Submit = Submit;

export default Form;
