import React from "react";
import classes from "./checklist.module.scss";
import { ReactComponent as CheckedIcon } from "../../../../icons/check_box-24px.svg";
import { ReactComponent as UncheckedIcon } from "../../../../icons/check_box_outline_blank-24px.svg";

import Typography from "../typography/typography.component";
import Binary from "../binary-component/binary.component";

export function CheckItem(props) {
  return (
    <div className={classes.check_list_item}>
      <Binary
        trueComponent={<CheckedIcon />}
        falseComponent={<UncheckedIcon />}
        toggle={props.toggle}
      />
      <Typography.P2 text={props.text} color={"#111111"}/>
    </div>
  );
}

export default function Checklist(props) {
  const defaultProps = {
    title: "Some nice title",
    checkItems: [],
  };
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography.H2 text={props.title || defaultProps.title} />
      </div>
        {props.items.map((elem) => {
          return (
            <CheckItem
              text={elem.name}
              toggle={elem.state === "complete" ? true : false}
            />
          );
        })}
      {props.children}
    </div>
  );
}
