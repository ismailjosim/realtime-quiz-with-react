import React from 'react';
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

                    <Button>Submit Now</Button>

                    <div className="info">
                        Don't have an account? <a href="signup.html">Signup</a> instead.
                    </div>




                </Form>
            </div>
        </div>
    );
};

export default Login;

/*


 <SignupForm className={ `${ classes.signup } form` } >
                    <TextInput type="text" placeholder="Enter name" icon="person" />
                    <TextInput type="text" placeholder="Enter email" icon="alternate_email" />
                    <TextInput type="password" placeholder="Enter password" icon="lock" />
                    <TextInput type="password" placeholder="Confirm password" icon="lock_clock" />
                    <Checkbox text="I agree to the Terms & Conditions" />
                    <Button>Submit Now</Button>
                    <div className="info">
                        Already have an account? <a href="login.html">Login</a> instead.
                    </div>
                </SignupForm>






*/
