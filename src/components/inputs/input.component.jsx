import React, { Component } from "react";
import "./input.styles.scss";

/**
 * @param {String} props.name - Name of component
 * @param {id} props.id - Id 
 * @param {String} props.defaultValue - Default value of the input
 * @param {String} props.maxLength - Maximum number of characters
 * @param {String} props.minLength - Minimum number of characters
 * @param {String} props.suffix - If set it will display a string at the end of the default value
 * @param {String} className  - if set to center it will center the text className = {"center"}
 */

export default class Input extends Component {
  constructor() {
    super();
    this.state = { value: "" };
  }

  handleChange = (event) => {
    if (this.props.rememberdata) {
      localStorage.setItem(this.props.name, event.target.value);
    }
  };
  componentDidMount() {
    const data = localStorage.getItem(this.props.name);
    if (data) {
      this.setState({ value: data });
    }
  }

  render() {
    return (
      <>
        <input
          type={this.props.type ? "text" : this.props.type}
          name={this.props.name}
          id={this.props.id}
          defaultValue={this.state.value}
          maxLength={this.props.maxLength}
          minLength={this.props.minLength}
          style={this.props.style}
          onChange={this.handleChange}
          {...this.props}
        ></input>
        {<>{this.props.suffix ? this.props.suffix : ""}</>}
      </>
    );
  }
}

