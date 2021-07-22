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
            
            <section className="registrationForm">
                <h1 className="formTitle">Register as a licensed contractor</h1>
                <form>
                    <label for="fname">First name:</label>
                    <input type="text" />
                    <label for="lname">Last name:</label>
                    <input type="text"/>
                    <label for="email">Email:</label>
                    <input type="email"/>
                    <label for="lname">Phone:</label>
                    <input type="phone"/>
                    <label for="lname">Contractor License Number:</label>
                    <input type="text"/>
                    <button type="submit" form="nameform" value="Submit">Submit</button>
                </form>
            </section> 
            
            // Worker registration form
            :   <div>
                    <section className="registrationForm">
                        <h1 className="formTitle">Register as a skilled laborer</h1>
                        <form>
                            <label for="fname">First name:</label>
                            <input type="text" />
                            <label for="lname">Last name:</label>
                            <input type="text"/>
                            <label for="email">Email:</label>
                            <input type="email"/>
                            <label for="lname">Phone:</label>
                            <input type="phone"/>
                            <button type="submit" form="nameform" value="Submit">Submit</button>
                        </form>
                    </section>
                </div>
            
            }
        </div>
    )
}

export default Register
