import React from "react";
import classes from "./data-semnatura.module.scss";
import Input from "../inputs/input.component"

/**
 * React Functional Component which returns a table with date and signature wrapped inside grid table 1fr 1fr
 * @param {String} props.signText - It will show a custom text in the table
 * @default props.signText = "Semnatura"
 * @example <DataSemnatura signText = "Signature"/>  
 * @return {React.Component}
 */
export default function DataSemnatura(props) {
  return (
    <div className={classes.dataSemnatura}>
      <div>
        <div>
          Data
          <input type="date" name="data" id="data" style={{textAlign:"center"}}/>
        </div>
      </div>
      <div>
        <div>{props.signText||"Semnătură"}</div>
        <div>
          <Input
            className="centrat"
            id="semnatura"
            name="semnatura"
            style={{ width: "100%", margin: "0px" }}
          />
        </div>
        <div>L.S.</div>
      </div>
    </div>
  );
}
