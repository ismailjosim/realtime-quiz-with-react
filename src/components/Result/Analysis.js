import React from 'react';
import classes from '../../styles/analysis.module.css';
import Questions from './Questions';

const Analysis = () => {
    return (
        <div className={ classes.analysis }>
            <h1>Question Analysis</h1>
            <h4>You answerd 5 out of 10 questions correctly</h4>
            <Questions />
        </div>
    );
};

export default Analysis;
