import React from 'react'

export default function Binary(props) {
    
    return (
        <div>
      {props.toggle ? (
        props.trueComponent 
      ) : (
        props.falseComponent
      )}
    </div>
    )
}
