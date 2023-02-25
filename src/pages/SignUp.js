import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/SignUp/Form';
import Button from '../components/utilities/Button';
import Checkbox from '../components/utilities/Checkbox';
import Illustration from '../components/utilities/Illustration';
import TextInput from '../components/utilities/TextInput';
import leftIcon from '../images/signup.svg';
import classes from '../styles/signup.module.css';

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
                        Already have an account? <Link to="/login">Login</Link> instead.
                    </div>
                </Form>
            </div>
        </>
    );
};

export default SignUp;
