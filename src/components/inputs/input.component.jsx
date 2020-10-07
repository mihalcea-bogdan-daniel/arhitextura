import React, { Component } from 'react'
import './input.styles.scss'

export default class Input extends Component {
    constructor(){
        super();
        this.state={value:""}
    }

    handleChange = (event) =>{
        if(this.props.rememberdata==="true"){
            localStorage.setItem(this.props.name, event.target.value)
        }
    
    }
    componentDidMount(){
        const data = localStorage.getItem(this.props.name);
        if(data){
            this.setState({value:data})
        }
        
    }
    
    render (){
        return(
        <>
            <input 
            type={this.props.type ? "text" : this.props.type} 
            name={this.props.name} 
            id={this.props.id} 
            defaultValue = {this.state.value} 
            maxLength={this.props.maxLength}
            minLength={this.props.minLength}
            style={this.props.style}
            onChange = {this.handleChange} 
            rememberdata = {this.props.rememberdata}
            {...this.props}
            >
            
            </input>
            {<>{this.props.suffix ? this.props.suffix : ""}</>}
        </>
        )
    }
}
