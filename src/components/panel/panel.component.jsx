import React from 'react'
import './panel.styles.scss'

const Panel = (props) => {
    return(
        <div className={"panel " + props.side}>
            <div>{props.children}</div>
        </div>
    )
}

export default Panel;
