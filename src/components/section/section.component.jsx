import React from 'react';
import styles from './section.module.scss'

const Section = (props) => {
    return (
        <section className = {`${styles.section} ${props.className||''}`} style={{borderLeftColor:props.color}} >
            {props.children}
        </section>
    );
}

export default Section;
