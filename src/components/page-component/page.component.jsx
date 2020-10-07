import React from 'react';
import './page.styles.scss'

const Page = (props) => {
    return (
        <section id={props.id} className="pagina">
            <p className="nr-pagina">Pag. {props.id[props.id.length - 1]}</p>
            {props.children}
        </section>
    );
}

export default Page;
