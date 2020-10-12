import React, { Component } from 'react'
import classes from './typography.module.scss'

export default class Typography extends Component {
    
    static H1 = (props)=>{return(<div className={`${classes.heading1} ${classes.global}`}>{props.text}</div>)}
    static H2 = (props)=>{return(<div className={`${classes.heading2} ${classes.global}`}>{props.text}</div>)}
    static P = (props)=>{return(<div className={`${classes.paragraph} ${classes.global}`}>{props.text}</div>)}
    static P2 = (props)=>{return(<div className={`${classes.paragraph2}`}>{props.text}</div>)}
    
}
