import React from 'react'
import './panel.styles.scss'
import classes from './panel.module.scss'
const Panel = (props) => {
    return(
        <div className={`panel ${props.side} ${classes.panel}`}>
            <div>{props.children}</div>
        </div>
    )
}

export default Panel;
