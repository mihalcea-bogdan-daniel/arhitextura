import React, { useState } from 'react';
import './text-linetrough.styles.scss';

const CheckItem = (props) => {
    const [checked, setChecked] = useState(0);
    return (
        <span 
        onClick={()=> setChecked(!checked)} 
        className={`toggle-text${checked ? " linetrough" : ""}` } >{props.word}</span>
    )
}

const TextLineTrough = (props)=>{
    
    return(
        props.words.map((e)=>{
            return(
                <CheckItem key={e + "k"} word ={e} />
            )
        })

    )
}

export default TextLineTrough;