import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import classes from '../../styles/signup.module.css';
import Button from '../utilities/Button';
import Checkbox from '../utilities/Checkbox';
import TextInput from '../utilities/TextInput';
import Form from './Form';


const SignUpForm = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agree, setAgree] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()


    const { userSignUP } = useAuth();

    const handleSignUP = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return setError("Password don't match!")
        }

        setError('');
        userSignUP(email, password)
            .then(result => {
                console.log(result);
                navigate('/');

            })
            .catch(error => {
                console.log(error.message);
            })

    }




    return (
        <Form className={ `${ classes.signup } form` } onSubmit={ (e) => handleSignUP(e) } >
            <TextInput type="text" placeholder="Enter name" icon="person"
                required
                value={ username }
                onChange={ (e) => setUsername(e.target.value) } />
            <TextInput type="text" placeholder="Enter email" icon="alternate_email"
                required
                value={ email }
                onChange={ (e) => setEmail(e.target.value) } />
            <TextInput type="password" placeholder="Enter password" icon="lock"
                required
                value={ password }
                onChange={ (e) => setPassword(e.target.value) } />
            <TextInput type="password" placeholder="Confirm password" icon="lock_clock"
                required
                value={ confirmPassword }
                onChange={ (e) => setConfirmPassword(e.target.value) } />
            <Checkbox text="I agree to the Terms & Conditions"
                required
                value={ agree }
                onChange={ (e) => setAgree(e.target.value) } />

            <Button type="submit">
                <span>Submit Now</span>
            </Button>
            { error && <p className='error'>{ error }</p> }
            <div className="info">
                Already have an account? <Link to="/login">Login</Link> instead.
            </div>
        </Form>
    );
};

export default SignUpForm;
