import React from 'react';
import classes from '../../styles/textInput.module.css';

const TextInput = () => {
    return (
        <div className={ classes.textInput }>
            <input type="text" placeholder="Enter name" />
            <span className="material-icons-outlined"> person </span>
        </div>
    );
};

export default TextInput;
