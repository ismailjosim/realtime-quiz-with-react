import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthProvider';
import classes from '../../styles/account.module.css';

const Account = () => {
    const { user, userLogout } = useAuth();

    const handleLogout = () => {
        userLogout()
    }



    return (
        <div className={ classes.account } >
            <span className="material-icons-outlined" title="Account" >
                account_circle
            </span>
            { user ? <>
                <Link>{ user.email }</Link>
                <span className="material-icons-outlined" title="Logout" onClick={ handleLogout() }> logout </span>
            </> :
                <Link to="/login">Login</Link>
            }

        </div>
    );
};

export default Account;
