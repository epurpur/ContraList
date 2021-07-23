import React, {useState} from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

import LoginForm from '../../components/LoginForm';

const Login = ( {userType} ) => {
    
    //WILL MAKE DB CALL HERE FOR USER BY EMAIL. I THINK THIS IS WHERE I PASS THE PROP OF 'userInfo' AND ALSO 'setUserInfo'

    return (
        <div>
            {/* Just show generic login form. userType will be determined upon login */}
            <LoginForm userType={userType} />
            <Link to='LandingPage'>Temporary link to LandingPage</Link>
        </div>
    )
}

export default Login;
