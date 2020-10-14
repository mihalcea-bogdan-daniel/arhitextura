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
/**
 * It displays toggleable words, if clicked on word it will draw a linetrough on it
 * @param {Array} props.words - an array of words
 */
const TextLineTrough = (props)=>{
    
    return(
        props.words.map((word)=>{
            return(
                <CheckItem key={word + "k"} word = {word} />
            )
        })

    )
}

export default TextLineTrough;