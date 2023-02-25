import React from 'react';
import classes from '../../styles/answers.module.css';
import Checkbox from './../utilities/Checkbox';

const Answers = () => {
    return (
        <div className={ classes.answers }>
            <Checkbox className={ classes.answer } text={ "A New Hope 1" } ></Checkbox>
            <label className={ classes.answer } htmlFor="option2">
                <input type="checkbox" id="option2" />
                A New Hope 1
            </label>


        </div>
    );
};

export default Answers;
