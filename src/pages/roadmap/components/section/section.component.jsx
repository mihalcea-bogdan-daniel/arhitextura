import React from "react";
//Constants
import { TRELLO_CONSTANTS , ROADMAP_COLORS} from "../../constants";

import classes from "./section.module.scss";
import Typography from "../typography/typography.component";
import Card from "../card/card.component";

export default class Section extends React.Component {
  constructor() {
    super();
    this.state = { cards: [], isLoading: true, errorState: false };
  }
  componentDidMount() {
    //Check if the ID is not undefined before we start fetching.
    if (this.props.id) {
      fetch(TRELLO_CONSTANTS.GET_CARDS_ON_LIST(this.props.id))
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          this.setState({ cards: data, isLoading: false });
        })
        .catch((err) => {
          this.setState({ errorState: true });
          console.log(err);
          return <div>Something is wrong ...</div>
        });
    }
  }

  cardComponentsList() {
    const list = [];
    
    this.state.cards.forEach((card) => {
      
      list.push(
      <Card 
        title={card.name} 
        key={card.id} 
        id={card.id} 
        content={card.desc} 
        borderColor={ROADMAP_COLORS.sections[this.props.title]}
        labels={card.labels}
        date={card.dateLastActivity}
        checklists = {card.idChecklists}
        />
        );
    });
    return list;
  }
  render() {
    if(this.state.isLoading) return <div>Se încarcă ...</div>
    return (
      <div className={classes.section}>
        <Typography.H1 text={this.props.title} />
        <div className={classes.card_container}>{this.cardComponentsList()}</div>
      </div>
    );
  }
}
