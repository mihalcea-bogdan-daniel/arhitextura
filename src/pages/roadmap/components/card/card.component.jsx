import React, { Component } from "react";
import classes from "./card.module.scss";
import Typography from "../typography/typography.component";
import Label from '../label/label.component'

const ApiData = React.createContext();

class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className={classes.card}>
        <div className={classes.border}></div>
        <div className={classes.card_content}>
          <div className={classes.label_container}>
            <Label bgcolor="#0079bf"/>
            <Label bgcolor="#eb5a46"/>
            </div>
          <Typography.H2 text={this.props.title} />
          <Typography.P text={this.props.content}></Typography.P>
          
        </div>
      </div>
    );
  }
}

export default Card;
