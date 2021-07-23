import React from 'react';

import './styles.css';

import LoginForm from '../../components/LoginForm';

const Login = ( {userType} ) => {
    
    return (
        <div>
            {/* Just show generic login form. userType will be determined upon login */}
            <LoginForm userType={userType} />
        </div>
    )
}

export default Login
