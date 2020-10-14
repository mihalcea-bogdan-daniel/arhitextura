import React, { Component } from "react";
import classes from "./card.module.scss";
//Constants
import {TRELLO_COLORS} from '../../constants'

import Typography from "../typography/typography.component";
import Label from "../label/label.component";

/**
 * @param {String} props.title - The title of the card
 * @param {String} props.content - The content of the card
 */
class Card extends Component {
  constructor() {
    super();
  }
  labelList() {
    const labelList = [];
    this.props.labels.forEach(label => {
      labelList.push(
        <Label 
        bgcolor={TRELLO_COLORS.labels[label.color]}
        text = {label.name}
        />
      )
    });
    return labelList;
  }
  render() {
    return (
      <div className={classes.card}>
        <div
          className={classes.border}
          style={{ backgroundColor: this.props.borderColor }}
        ></div>
        <div className={classes.card_content}>
          <div className={classes.label_container}>
            {this.labelList()}
            
          </div>
          <Typography.H2 text={this.props.title} />
          <Typography.P text={this.props.content}></Typography.P>
        </div>
      </div>
    );
  }
}

export default Card;
