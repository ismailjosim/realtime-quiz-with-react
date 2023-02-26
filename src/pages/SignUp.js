import React from 'react';
import SignUpForm from '../components/SignUp/SignUpForm';
import Illustration from '../components/utilities/Illustration';
import leftIcon from '../images/signup.svg';

const SignUp = () => {

    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <Illustration leftIcon={ leftIcon } />
                <SignUpForm />
            </div>
        </>
    );
};

export default SignUp;
