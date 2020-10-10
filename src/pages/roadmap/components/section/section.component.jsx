import React from 'react'
import classes from './section.module.scss'
import Typography from '../typography/typography.component'

export default function Section(props) {
    console.log(classes);
    return (
        <div className={classes.section}>
            <Typography.H1 text = {props.title}/>
            <div className={classes.card_container}>{props.children}</div>
        </div>
    )
}
