import React from 'react'

const WorkerLoginForm = () => {
    return (
        <section className="loginForm">
            <h1 className="formTitle">Login as skilled laborer</h1>
            <form>
                <label for="email">Email:</label>
                <input type="email"/>
                <label for="lname">Password:</label>
                <input type="phone"/>
                <button type="submit" form="nameform" value="Submit">Submit</button>
            </form>
        </section> 
    )
}

export default WorkerLoginForm
