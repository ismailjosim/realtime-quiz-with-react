import React from 'react';
import classes from '../../styles/progressbar.module.css';
import Button from './../utilities/Button';

const ProgressBar = ({ NextQuestion, PrevQuestion, progress, submitQuestion }) => {
    return (
        <div className={ classes.progressBar }>
            <Button onClick={ PrevQuestion } className={ classes.backButton }>
                <span className="material-icons-outlined"> arrow_back </span>
            </Button>
            <div className={ classes.rangeArea }>
                <div className={ classes.tooltip }>{ progress }% Complete!</div>
                <div className={ classes.rangeBody }>
                    <div className={ classes.progress } style={ { width: `${ progress }%` } } />
                </div>
            </div>
            <Button onClick={ progress === 100 ? submitQuestion : NextQuestion } className={ classes.next }>
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>

    );
};

export default ProgressBar;
