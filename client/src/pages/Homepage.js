import React from 'react'

import { Link } from 'react-router-dom';

/* CSS styles */
import '../styles/HomepageStyle.css'

const Homepage = () => {
    return (
        <section id="homePageTop"> 
            <h1>Connecting construction jobs and labor. <span id="faster">Faster.</span></h1>
            <section id="register">
                <div className="returningUser">
                    <p> Are you a contractor looking for labor? </p>
                    <Link className="links" to="/ContractorRegistration" style={{ "text-decoration": "none" }}>Sign Up</Link>
                </div>
                <div className="returningUser">
                    <p> Are you a skilled laborer looking for work? </p>
                    <Link className="links" to="/EmployeeRegistration" style={{ "text-decoration": "none" }}>Sign Up</Link>
                </div> 
            </section>
            <section id="returning">
                <div className="returningUser">
                    <p>Returning Contractor?</p>
                    <Link className="links" to="/ContractorLogin" style={{ "text-decoration": "none" }}>Login</Link>
                </div>
                <div className="returningUser">
                    <p>Returning Employee?</p>
                    <Link className="links" to="/EmployeeLogin" style={{ "text-decoration": "none" }}>Login</Link>
                </div>
            </section>
            
        </section>
    )
}

export default Homepage;
