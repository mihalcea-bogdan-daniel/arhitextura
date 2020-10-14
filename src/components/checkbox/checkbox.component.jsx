import React, { Component } from 'react'
import './checkbox.styles.scss'

const PseudoCheckBox = (props) => {
    return(
        <div className= "checkbox-arhUI" style={{marginLeft:props.margin}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className = {`${props.checked ? "checked" : ""}`} >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>

            <div className={`circle ${props.focused ? "focused" : ""}`}></div>
        </div>
    )
}

export default class Checkbox extends Component {
    constructor(){
        super()
        this.state = {}
        this.inputRef = React.createRef();
    }
    componentDidMount(){
        this.setState({checked: this.inputRef.current.checked})
    }
    handleChange = () => {
        this.setState({checked: this.inputRef.current.checked})
    }
    handleFocus = () => {
        this.setState({focused: true})
    }
    handleBlur = () => {
        this.setState({focused: false})
    }
    render() {
        return (
            <label style={{textAlign:"justify",...this.props.style}}>
                <input 
                type="checkbox" 
                name={ this.props.name } 
                id = { this.props.name }
                ref = { this.inputRef }
                onFocus = { this.handleFocus }
                onBlur = { this.handleBlur }
                onChange = {this.handleChange} 
                />
                <PseudoCheckBox
                margin={this.props.margin}
                {...this.state}
                />
                <span>{this.props.children}</span>
            </label>
        )
    }
}
