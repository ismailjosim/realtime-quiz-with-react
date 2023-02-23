import React from 'react';
import Nav from '../Nav/Nav';

import classes from '../../styles/main.module.css';

const Main = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={ classes.main }>
                <div className={ classes.container }>

                </div>
            </main>

        </>
    );
};

export default Main;
