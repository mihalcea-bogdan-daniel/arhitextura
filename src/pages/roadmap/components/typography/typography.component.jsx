import React, { Component } from "react";
import classes from "./typography.module.scss";
import COLORS from "../../../../theme/colors.js";

import parse from './utils.js'
export default class Typography extends Component {
  static defaultProps = {
    textColor: COLORS.arhitexturaDark,
  };
//TODO

  static H1 = (props) => {
    return (
      <div className={`${classes.heading1} ${classes.global}`}
      style={{ color: props.color || this.defaultProps.textColor}}
      >
        {parse(props.text)}
      </div>
    );
  };
  static H2 = (props) => {
    return (
      <div className={`${classes.heading2} ${classes.global}`}
      style={{ color: props.color || this.defaultProps.textColor}}
      >
        {parse(props.text)}
      </div>
    );
  };
  static P = (props) => {
    return (
      <div 
      className={`${classes.paragraph} ${classes.global}`}
      style={{ color: props.color || this.defaultProps.textColor}}
      >
        {parse(props.text)}
      </div>
    );
  };
  static P2 = (props) => {
    return (
      <div
        className={`${classes.paragraph2} ${classes.global}`}
        style={{
             color: props.color || this.defaultProps.textColor,
             paddingTop: props.paddingTop || 0,
             paddingBottom: props.paddingBottom || 0,
             paddingLeft: props.paddingLeft || 0,
             paddingRight: props.paddingRight || 0,
            }}
      >
        {parse(props.text)}
      </div>
    );
  };
}
