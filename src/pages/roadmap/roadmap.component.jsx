import React, { Component } from "react";
import classes from "./roadmap.module.scss";

//components
import Section from "./components/section/section.component";
import Card from "./components/card/card.component";
import Typography from "./components/typography/typography.component";

export default class Roadmap extends Component {
  // static Title = (props)=>{return(<div className={classes.title}><span>{props.title}</span></div>)}
  render() {
    const lorem = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus optio assumenda eius aut impedit. Quis, ratione incidunt hic facere quo nihil eligendi necessitatibus voluptas minus officia repellat adipisci! Quo, beatae!"
    return (
      <div className={classes.card_container}>
        <Section title="Noutati">
            <Card title="Short title for the update" />
        </Section>
        <Section title="Implementat">
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
        </Section>
        <Section title="Implementat">
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
            <Card 
            title="Short title for the implementations"
            content={lorem}/>
        </Section>
        
      </div>
    );
  }
}
