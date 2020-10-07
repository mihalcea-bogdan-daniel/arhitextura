import React from 'react'
import './grid-container.styles.scss'

export default function GridContainer (props) {

        return (
            <div className = {`${props.className} grid-container-component`}
            style={
                {gridTemplateColumns: `repeat(${props.columns || 1}, auto)`,
                gridTemplateRows:`repeat(${props.rows}, auto)`,
                gridAutoFlow:props.autoFlow||"column", 
                display:"grid",
                ...props.style }
                }>
                {props.children}
            </div>
        )
    
}
