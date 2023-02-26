import React from 'react';
import classes from '../../styles/answers.module.css';
import Checkbox from './../utilities/Checkbox';

const Answers = ({ options = [], handleAnsChange }) => {
    return (
        <div className={ classes.answers }>
            { options.map((option, index) => {
                return <Checkbox
                    key={ index }
                    className={ classes.answer }
                    checkbox={ option.check }
                    text={ option.title }
                    value={ index }
                    onClick={ (e) => handleAnsChange(e, index) }
                ></Checkbox>
            })
            }
        </div>
    );
};

export default Answers;
