import React from 'react'

/* CSS styles */
import '../styles/Registration.css';

const ContractorRegistrationForm = () => {
    return (
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
    )
}

export default ContractorRegistrationForm
