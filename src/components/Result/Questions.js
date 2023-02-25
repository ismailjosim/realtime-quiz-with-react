import React from 'react';
import classes from '../../styles/questions.module.css';
import Answers from './../Quiz/Answers';


const Questions = () => {
    return (
        <div className={ classes.question }>
            <div className={ classes.qtitle }>
                <span className="material-icons-outlined"> help_outline </span>
                Here goes the question from Learn with Sumit?
            </div>
            <Answers></Answers>
        </div>
    )
}

export default Questions
