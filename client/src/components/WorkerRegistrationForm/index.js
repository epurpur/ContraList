import React from 'react'

const WorkerRegistrationForm = () => {
    return (
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
    )
}

export default WorkerRegistrationForm
