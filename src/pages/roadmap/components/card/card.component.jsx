import React, { Component } from 'react'
import classes from './card.module.scss'
import Typography from '../typography/typography.component'

class Card extends Component {
    constructor(props){
        super()
    }
    render() {
        return (
            <div className={classes.card}>
                <Typography.H2 text={this.props.title}/>
            </div>
        )
    }
}

export default Card;