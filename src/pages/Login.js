import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../components/SignUp/Form';
import Button from '../components/utilities/Button';
import Illustration from '../components/utilities/Illustration';
import TextInput from '../components/utilities/TextInput';
import { useAuth } from '../contexts/AuthProvider';
import leftIcon from '../images/login.svg';
import classes from '../styles/login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { userLogin } = useAuth()

    const navigate = useNavigate();

    const handleUserLogin = e => {
        e.preventDefault();
        userLogin(email, password)
            .then(result => {
                if (result.user) {
                    navigate('/')
                }
            })
            .catch(error => {
                console.log(error.message);
            })
    }





    return (
        <div>
            <h1>Login to your account</h1>

            <div className="column">
                <Illustration leftIcon={ leftIcon } />
                <Form className={ `${ classes.login }` } onSubmit={ (e) => handleUserLogin(e) }>
                    <TextInput
                        type="text"
                        placeholder="Enter email"
                        icon="alternate_email"
                        value={ email }
                        onChange={ (e) => setEmail(e.target.value) }
                    />
                    <TextInput
                        type="password"
                        placeholder="Enter password"
                        icon="lock"
                        value={ password }
                        onChange={ (e) => setPassword(e.target.value) }
                    />

                    <Button type="submit">
                        <span>Submit Now</span>
                    </Button>

                    <div className="info">
                        Don't have an account? <Link to="/signup">Signup</Link> instead.
                    </div>
                </Form>
            </div>
        </div >
    );
};

export default Login;

