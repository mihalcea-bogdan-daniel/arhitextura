import React, { Component } from "react";
import classes from "./card.module.scss";
import Typography from "../typography/typography.component";

class Card extends Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div className={classes.card}>
        <div className={classes.border}></div>
        <div className={classes.card_content}>
          <Typography.H2 text={this.props.title} />
          <Typography.P text={this.props.content}></Typography.P>
        </div>
      </div>
    );
  }
}

export default Card;
