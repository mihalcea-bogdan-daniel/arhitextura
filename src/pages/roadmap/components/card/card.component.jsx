import React, { Component } from "react";
import classes from "./card.module.scss";
//Constants
import {TRELLO_COLORS, TRELLO_CONSTANTS} from '../../constants'
import COLORS from '../../../../theme/colors'
import Typography from "../typography/typography.component";
import Label from "../label/label.component";

/**
 * @param {String} props.title - The title of the card
 * @param {String} props.content - The content of the card
 * @param {Date} props.date - The date last modified
 */
class Card extends Component {
  labelList() {
    const labelList = [];
    this.props.labels.forEach((label,i) => {
      labelList.push(
        <Label 
        key={`${label.name}-${i}`}
        bgcolor={TRELLO_COLORS.labels[label.color]}
        text = {label.name}
        />
      )
    });
    return labelList;
  }
  parseDate(){
    const rawDate = new Date(this.props.date);
    return `${rawDate.getDate()} ${rawDate.getMonth()+1} ${rawDate.getFullYear()}`
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
          <Typography.P2 text={this.parseDate()} color={"#AAAAAA"} paddingTop={10}></Typography.P2>
        </div>
      </div>
    );
  }
}

export default Card;
