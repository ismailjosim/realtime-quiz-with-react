import React from 'react';
import { Outlet } from 'react-router-dom';
import classes from '../../styles/layout.module.css';
import Nav from './../Nav/Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Nav></Nav>
            <main className={ classes.main }>
                <div className={ classes.container }>
                    <Outlet />
                </div>
            </main>

        </>
    );
};

export default Layout;
