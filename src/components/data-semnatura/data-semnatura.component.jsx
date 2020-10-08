import React from "react";
import classes from "./data-semnatura.module.scss";
import Input from "../inputs/input.component"
export default function DataSemnatura(props) {
  return (
    <div className={classes.dataSemnatura}>
      <div>
        <div>
          Data
          <input type="date" name="data" id="data" style={{textAlign:"center"}}/>
          {/* <Input
            className="centrat"
            id="data"
            name="data"
            style={{ width: "100%", margin: "0px" }}
          /> */}
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
