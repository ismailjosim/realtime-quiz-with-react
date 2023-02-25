import React from 'react';
import classes from '../../styles/signup.module.css';
import Illustration from '../SignUp/Illustration';
import SignupForm from '../SignUp/SignupForm';
import Button from '../utilities/Button';
import Checkbox from '../utilities/Checkbox';
import TextInput from '../utilities/TextInput';

import leftIcon from '../../images/signup.svg';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration leftIcon={ leftIcon } />
                <SignupForm className={ `${ classes.signup } form` } >
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button>
                        <span>Submit Now</span>
                    </Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </SignupForm>
            </div>
        </>
    );
};

export default SignUp;
