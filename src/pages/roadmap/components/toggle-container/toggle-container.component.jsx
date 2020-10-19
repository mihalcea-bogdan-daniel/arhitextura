import React, { useState, useEffect } from "react";
import classes from "./toggle-container.module.scss";
import "./container.styles.scss";
import { ReactComponent as ToggleMore } from "../../../../icons/expand_more-24px.svg";
import { ReactComponent as ToggleLess } from "../../../../icons/expand_less-24px.svg";
import Binary from "../binary-component/binary.component";
import { TRELLO_CONSTANTS } from "../../constants";
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

const ToggleContainer = (props) => {
  const [toggle, setToggle] = useState(false);
  const [checkListItems, setCheckListItems] = useState(props.checklists || []);
  const [isErrorState, setErrorState] = useState("");
  useEffect(() => {
    fetchChecklistsData();
    console.log("CHECKLIST PROPS",props.checklists)
    console.log("CHECKLISTITEM IN STATE:",checkListItems)
    
  }, []);

  //TODO Some evry strange thing is happening here ... needs fix
  const fetchChecklistsData = async () => {
    if (props.checklists.length) {
      props.checklists.forEach((checkList) => {
        fetch(TRELLO_CONSTANTS.GET_CHECKLISTS_BY_ID(checkList))
          .then((res) => {
            return res.json();
          })
          .then((data) => {
            console.log("DATA:", data.checkItems)
            const checkItems = data.checkItems;
            checkItems.forEach((checkItem)=>{
              if(typeof checkItem === "object"){
              setCheckListItems(
                checkListItems.push(checkItem)
                );
              }
              })
            })
            .catch((err) => {
              setErrorState(new Error(err));
              console.log(err);
          });
      });
    }
  };
  const handleClick = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <div>
      <div className={`contents ${toggle ? "on" : ""}`}>
        {checkListItems}
        </div>
      <ToggleButton toggle={toggle && true} onClick={handleClick} />
    </div>
  );
};

export default ToggleContainer;
