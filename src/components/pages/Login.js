import React from 'react';
import { Link } from 'react-router-dom';
import leftIcon from '../../images/login.svg';
import classes from '../../styles/login.module.css';
import Form from '../SignUp/Form';
import Illustration from '../SignUp/Illustration';
import Button from '../utilities/Button';
import TextInput from '../utilities/TextInput';

const Login = () => {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration leftIcon={ leftIcon } />
                <Form className={ `${ classes.login }` }>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                    />

                    <Button>
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>




                </Form>
            </div>
        </div>
    );
};

export default Login;

