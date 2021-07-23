import React from 'react';

import './styles.css';

import ContractorRegistrationForm from '../../components/ContractorRegistrationForm';
import WorkerRegistrationForm from '../../components/WorkerRegistrationForm';

const Register = ( {userType} ) => {

    return (
        <div>
            {/* Either show contractor or worker registration form depending on value of userType */}
            {userType === 'contractor' ? <ContractorRegistrationForm /> : <WorkerRegistrationForm />}
        </div>
    )
}

export default Register;
