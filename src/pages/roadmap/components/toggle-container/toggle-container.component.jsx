import React, { useState, useEffect } from "react";
import classes from "./toggle-container.module.scss";
import "./container.styles.scss";
import { ReactComponent as ToggleMore } from "../../../../icons/expand_more-24px.svg";
import { ReactComponent as ToggleLess } from "../../../../icons/expand_less-24px.svg";
// import Binary from "../binary-component/binary.component";
import Checklist from '../checklist/checklist.component';
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
  const [checkListItems, setCheckListItems] = useState([]);
  const [isErrorState, setErrorState] = useState("");
  useEffect(() => {
    fetchChecklistsData();
  }, []);

  const fetchChecklistsData = async () => {
    if (props.checklists.length) {
      props.checklists.forEach((checkList) => {
        if (typeof checkList === "string") {
          fetch(TRELLO_CONSTANTS.GET_CHECKLISTS_BY_ID(checkList))
            .then((res) => {
              return res.json();
            })
            .then((data) => {
              const checkObject = {
                title:data.name, 
                listOfItems:[... data.checkItems]
              }
              setCheckListItems(checkListItems=>[...checkListItems, checkObject]);
              
            })
            .catch((err) => {
              setErrorState(new Error(err));
              console.log(err);
            });
          }
        });

      }
  };
  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <div className={`contents ${toggle ? "on" : ""}`}>
          {checkListItems.map((elem, i)=>{
            return(
              <Checklist key={`checkList-${i}`} title={elem.title} items = {elem.listOfItems}/>
            )
          })}
        </div>
      <ToggleButton toggle={toggle && true} onClick={handleClick} />
    </div>
  );
};

export default ToggleContainer;
