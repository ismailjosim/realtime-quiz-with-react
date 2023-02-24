import React from 'react';
import classes from '../../styles/signup.module.css';
import Illustration from '../SignUp/Illustration';
import SignupForm from '../SignUp/SignupForm';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration />
                <SignupForm
                    className={ `${ classes.signup } form` }

                />
            </div>
        </>
    );
};

export default SignUp;
