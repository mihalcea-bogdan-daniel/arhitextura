import React from "react";
import classes from "./list.module.scss";

/**
 *  @param counterStart Set the list counter start value
 */
export default class List extends React.Component {
  listContainer = (
    <div
      className={classes.listContainer}
      style={{ counterSet: `listCounter ${this.props.counterStart || 0}` }}
    >
      {this.props.children}
    </div>
  );
/**
 * I adds an item in the list without any bullets or numberings
 * @param {*} props.children - Return everything inside of the Component 
 */
  static BlankItem = (props) => (
    <div className={`${classes.listItem}`} style={{ ...props.style }}>
      {props.children}
    </div>
  );

/**
 * Dotted item e.g. ● Something, like a list
 */
  static DottedItem = (props) => (
    <div className={`${classes.listItem} ${classes.dotted}`}>
      {props.children}
    </div>
  );

/**
 * Numbered item e.g. a), b), c) .... only alphanumeric
 * @param {*} props.pad If pad than it will add padding top and bottom 
 * @example <List.NumberedItem pad><...></List.NumberedItem>
 */
  static NumberedItem = (props) => {
    return (
      <div
        className={`${classes.listItem} ${classes.numbered} 
        ${props.pad ? classes.pad : ""}`}
      >
        {props.children}
      </div>
    );
  };
  static Note = (props) => (
    <div className={`${classes.listItem} ${classes.note}`}>
      {props.children}
    </div>
  );
  render() {
    return this.listContainer;
  }
}
