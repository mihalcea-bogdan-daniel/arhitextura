import React, { useState } from "react";
import classes from "./toggle-container.module.scss";
import './container.styles.scss'
import { ReactComponent as ToggleMore } from "../../../../icons/expand_more-24px.svg";
import { ReactComponent as ToggleLess } from "../../../../icons/expand_less-24px.svg";

const ToggleButton = (props) => {
  return (
    <div className={classes.button} {...props}>
      {props.toggle ? (
        <ToggleLess className={classes.button_icon} />
      ) : (
        <ToggleMore className={classes.button_icon} />
      )}
    </div>
  );
};

const ToggleContainer = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };
  
  return (
    <div>
            <div className={`contents ${toggle ? "on" : ""}`}>
                <p>Hy</p>
            </div>
      <ToggleButton toggle={toggle && true} onClick={handleClick} />
    </div>
  );
};

export default ToggleContainer;
