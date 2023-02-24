import React from 'react';
import classes from '../../styles/signUpForm.module.css';

const SignupForm = ({ children, className, ...rest }) => {



    return (
        <form
            action="#"
            className={ `${ className } classes.form'` }
            { ...rest }
        >
            { children }
            <div className={ classes.textInput }>
                <input type="text" placeholder="Enter name" />
                <span className="material-icons-outlined"> person </span>
            </div>

            <div className="textInput">
                <input type="text" placeholder="Enter email" />
                <span className="material-icons-outlined"> alternate_email </span>
            </div>

            <div className="textInput">
                <input type="password" placeholder="Enter password" />
                <span className="material-icons-outlined"> lock </span>
            </div>

            <div className="textInput">
                <input type="password" placeholder="Confirm password" />
                <span className="material-icons-outlined"> lock_clock </span>
            </div>

            <label>
                <input type="checkbox" />
                <span>I agree to the Terms & Conditions</span>
            </label>

            <div className="button">
                <span>Submit now</span>
            </div>

            <div className="info">
                Already have an account? <a href="login.html">Login</a> instead.
            </div>
        </form>
    );
};

export default SignupForm;
