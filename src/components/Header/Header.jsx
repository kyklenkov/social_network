import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://w7.pngwing.com/pngs/312/1018/png-transparent-orange-blue-and-black-logo-logo-circle-technology-circle-blue-text-information-technology.png'/>

        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}
export default Header;