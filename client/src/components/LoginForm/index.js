import React from 'react'

const LoginForm = () => {
    return (
        <section className="loginForm">
            <h1 className="formTitle">Login</h1>
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

export default LoginForm
