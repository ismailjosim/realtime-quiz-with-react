import React from 'react';
import logo from '../../images/logo-bg.png';
import classes from '../../styles/nav.module.css';
import Account from './Account';


const Nav = () => {
    return (
        <nav className={ classes.nav }>
            <ul>
                <li>
                    <a href="/" className={ classes.brand }>
                        <img src={ logo } alt="logo" />
                        <h3>Learn with Sumit</h3>
                    </a>
                </li>
            </ul>
            <Account />
        </nav>
    );
};

export default Nav;
