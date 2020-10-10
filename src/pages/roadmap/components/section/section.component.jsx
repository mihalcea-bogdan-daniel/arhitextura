import React from 'react'
import classes from './section.modules.scss'
import Typography from '../typography/typography.component'
export default function Section(props) {
    return (
        <div className={classes.section}>
            <Typography.H1 text = {props.title}/>
            {props.children}
        </div>
    )
}
