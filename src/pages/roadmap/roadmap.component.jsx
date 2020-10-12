import React, { Component } from "react";
import classes from "./roadmap.module.scss";

//components
import Section from "./components/section/section.component";
import Card from "./components/card/card.component";
import Typography from "./components/typography/typography.component";


export default class Roadmap extends Component {
  constructor(){
    super()
    this.state = {sections:[], isLoading:true}
  
  }  
  componentDidMount(){
    fetch('https://api.arhitextura.ro/trello/lists')
    .then((res)=>{
      return res.json()
    })
    .then((data) => {
      this.setState({sections:data, isLoading:false}, ()=>console.log((this.state)))
    })
    .catch(err => {
      console.log(err)
    })
    
  }


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
