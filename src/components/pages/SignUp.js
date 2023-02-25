import React from 'react';
import leftIcon from '../../images/signup.svg';
import classes from '../../styles/signup.module.css';
import Form from '../SignUp/Form';
import Illustration from '../SignUp/Illustration';
import Button from '../utilities/Button';
import Checkbox from '../utilities/Checkbox';
import TextInput from '../utilities/TextInput';

const SignUp = () => {
    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration leftIcon={ leftIcon } />
                <Form className={ `${ classes.signup } form` } >
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
                </Form>
            </div>
        </>
    );
};

export default SignUp;
