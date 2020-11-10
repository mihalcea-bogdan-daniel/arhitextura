import React from 'react';
import classes from './header.module.scss';
import { Link } from "react-router-dom";

import {ReactComponent as ArhiLogo} from '../../images/logo/Web_logo_Logo_patrat_negru.svg'

function scrollUp(){
    
    window.scrollTo(0,0)
}
export default function Header(props) {
        return (
            <div className={classes.header_bar}>
                <ArhiLogo className={classes.logo}
                onClick={scrollUp}
                />
                <div className={classes.link_container}>
                {props.children}
                </div>
                <div className={classes.authentication}>
                    <Link to="/login" exact>Log In</Link>
                </div>
            </div>
        )
}
