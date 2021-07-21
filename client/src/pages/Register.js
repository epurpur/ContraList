import React from 'react'

const Register = ( {userType} ) => {

    console.log('here', userType);

    return (
        <div>
            {/* Either show contractor or worker registration form depending on value of userType */}
            {userType === 'contractor' ? 
            
            <div id="contractorRegistrationForm">
                <h1 id='contractorTitle'>Register as a licensed contractor</h1>
                <p>Another</p>
            </div> 
            
            : <div>Worker Registration</div>
            
            }
        </div>
    )
}

export default Register
