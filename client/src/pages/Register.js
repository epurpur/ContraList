import React from 'react';

/* CSS styles */
import '../styles/Registration.css';

import ContractorRegistrationForm from '../components/ContractorRegistrationForm';
import WorkerRegistrationForm from '../components/WorkerRegistrationForm';

const Register = ( {userType} ) => {

    console.log('here', userType);

    return (
        <div>
            {/* Either show contractor or worker registration form depending on value of userType */}
            {/* Contractor Registration form */}
            {userType === 'contractor' ? <ContractorRegistrationForm /> : <WorkerRegistrationForm />}
        </div>
    )
}

export default Register
