import React from 'react';
import classes from './header.module.scss';
import {Link} from "react-router-dom";
import {useSelector} from 'react-redux'
import {ReactComponent as ArhiLogo} from '../../images/logo/Web_logo_Logo_patrat_negru.svg'
import LoggedIn from '../LogInOutButton/LogInOut.component'
function scrollUp(){
    window.scrollTo(0,0)
}



export default function Header(props) {
const currentUser = useSelector(state => state.user.currentUser)
const handleClick = ()=>{
    console.log(currentUser);
}
        return (
            <header className={classes.header_bar}>
                <ArhiLogo className={classes.logo}
                onClick={scrollUp}
                />
                <div className={classes.link_container}>
                {props.children}
                </div>
                <div className={classes.authentication} onClick={handleClick}>
                    <Link to="/login" exact>Log In</Link>
                </div>
                <LoggedIn/>
            </header>
        )
}
