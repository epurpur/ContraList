import React from 'react';

import './styles.css';

import ContractorLoginForm from '../../components/ContractorLoginForm';
import WorkerLoginForm from '../../components/WorkerLoginForm';

const Login = ( {userType} ) => {
    
    return (
        <div>
            {/* Either show contractor or worker login form depending on value of userType */}
            {userType=== 'contractor' ? <ContractorLoginForm /> : <WorkerLoginForm />}
        </div>
    )
}

export default Login
