import React from 'react';
import Illustration from '../SignUp/Illustration';
import leftIcon from '../../images/login.svg';

const Login = () => {
    return (
        <div>
            <h1>Login to your account</h1>
            <div className="column">
                <Illustration leftIcon={ leftIcon } />


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
