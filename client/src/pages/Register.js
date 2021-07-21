import React from 'react';

/* CSS styles */
import '../styles/Registration.css';


const Register = ( {userType} ) => {

    console.log('here', userType);

    return (
        <div>
            {/* Either show contractor or worker registration form depending on value of userType */}
            {/* Contractor Registration form */}
            {userType === 'contractor' ? 
            
            <section id="contractorRegistrationForm">
                <h1 id='contractorTitle'>Register as a licensed contractor</h1>
                <form>
                    <label for="fname">First name:</label>
                    <input type="text" />
                    <label for="lname">Last name:</label>
                    <input type="text"/>
                    <label for="email">Email:</label>
                    <input type="email"/>
                    <label for="lname">Phone:</label>
                    <input type="phone"/>
                    <label for="lname">Contractor License #:</label>
                    <input type="text"/>
                </form>
            </section> 
            
            // Worker registration form
            : <div>Worker Registration</div>
            
            }
        </div>
    )
}

export default Register
