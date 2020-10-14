import React from "react";
import classes from "./label.module.scss";
import Typography from "../typography/typography.component";
import COLOR from "../../../../theme/colors";

function calcLuminance(rgb) {
    if (typeof rgb === "string") {
    const r = (parseInt("0x" + rgb.replace("#", "")) & 0xff0000) >> 16;
    const g = (parseInt("0x" + rgb.replace("#", "")) & 0xff00) >> 8;
    const b = parseInt("0x" + rgb.replace("#", "")) & 0xff;

    return (r * 0.299 + g * 0.587 + b * 0.114) / 256;
  }
}

export default function Label(props) {
  return (
    <div
      className={classes.label}
      style={{
        backgroundColor: `${props.bgcolor}`,
        color: `${
          calcLuminance(props.bgcolor) > 0.4
            ? COLOR.arhitexturaDark
            : COLOR.arhitexturaLight
        }`,
      }}
    >
      <Typography.P2 text={props.text} />
    </div>
  );
}
