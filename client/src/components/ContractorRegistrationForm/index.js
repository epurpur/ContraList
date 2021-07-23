import React from 'react'

const ContractorRegistrationForm = () => {
    return (
        <section className="registrationForm">
            <h1 className="formTitle">Register as a licensed contractor</h1>
            <form>
                <label for="fname" required>First name:</label>
                <input type="text" />
                <label for="lname" required>Last name:</label>
                <input type="text"/>
                <label for="password" required>Password:</label>
                <input type="password"/>
                <label for="email" required>Email:</label>
                <input type="email"/>
                <label for="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>Phone:</label>
                <input type="tel"/>
                <label for="lname" required>Contractor License Number:</label>
                <input type="text"/>
                <button type="submit" form="nameform" value="Submit">Submit</button>
            </form>
        </section> 
    )
}

export default ContractorRegistrationForm;
