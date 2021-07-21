import React from 'react'

import { Link } from 'react-router-dom';

/* CSS styles */
import '../styles/HomepageStyle.css'

const Homepage = () => {
    return (
        <section id="homePageTop"> 
            <h1>Connecting construction jobs and labor. <span id="faster">Faster.</span></h1>
            <section id="register">
                New User?
            </section>
            <section id="returning">
                <div id="returnContractor">
                    <p>Returning Contractor?</p>
                    <p>Login</p>
                </div>
                <div id="returnEmployee">
                    <p>Returning Employee?</p>
                    <p>Login</p>
                </div>
            </section>
            
        </section>
    )
}

export default Homepage;
