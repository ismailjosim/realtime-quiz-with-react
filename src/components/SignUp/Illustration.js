import React from 'react';
import classes from '../../styles/illustration.module.css';

const Illustration = ({ leftIcon }) => {
    return (
        <div className={ classes.illustration }>
            <img src={ leftIcon } alt="Signup" />
        </div>
    );
};

export default Illustration;
