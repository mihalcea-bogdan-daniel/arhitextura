import React from "react";
import "./simple-table.styles.scss";
import COLORS from "../../theme/colors";
import Input from "../inputs/input.component";
import Grid from "../grid-container/grid-container.component";

export default function SimpleTable(props) {
  const _columns = props.columns || 4;
  const _data = props.data;
  const _columnArray = [];
  try {
    for (let i = 0; i < _columns; i++) {
      const _rowArray = [];
      for (let j = 0; j < _data.length; j++) {
        _rowArray.push(
          <div key={j}>
            <Input
              className= {`centrat ${!props.noSuffix ?"sp-input":"long-input"}`}
              key={`${_data[j]["id"]}-corp-${j + 1}`}
              name={`${_data[j]["id"]}-corp-${j + 1}`}
              suffix={`${props.noSuffix? "" : "m"}`}
            />
          </div>
        );
      }
      _columnArray.push(
        <div key={i}>
          <div className="corp-wrapper">
            <span>Corp</span>
            <Input
              key={`corp-c${i + 1}`}
              name={`corp-c${i + 1}`}
              className="centrat sp-input"
              defaultValue={`C${i + 1}`}
            />
          </div>
          {_rowArray}
        </div>
      );
    }
    return (
      <Grid className="simple-table" columns={_columns}>
        <div style={{width:props.width ? `${props.width}px`: "220px"}}>
          <div
            className="first-column"
            style={{ flexGrow: "1", border: "none" }}
          ></div>
          {_data.map((elem, i) => {
            return (
              <div className="first-column" key={i}>
                {elem.content}
              </div>
            );
          })}
        </div>
        {_columnArray}
      </Grid>
    );
  } catch (error) {
    if (!props.data) {
      return (
        <div
          style={{ backgroundColor: COLORS.error, borderLeft: "5px solid red" }}
        >
          data prop was not set, please specify a data prop as a JSON
        </div>
      );
    } else {
      return <div>Something went wrong, {`${error}`}</div>;
    }
  }
}
