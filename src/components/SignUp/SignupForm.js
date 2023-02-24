import React from 'react';
import classes from '../../styles/signUpForm.module.css';

const SignupForm = ({ children, className, ...rest }) => {
    return (
        <form
            action="#"
            className={ `${ className } ${ classes.form }` }
            { ...rest }
        >
            { children }
        </form>
    );
};

export default SignupForm;
