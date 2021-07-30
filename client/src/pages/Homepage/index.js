import React from 'react';

import { Link } from 'react-router-dom';

/* CSS styles */
import './styles.css'

const Homepage = ({userType, setUserType}) => {


    return (
        <section id="homePageTop"> 
            <h1>Connecting construction jobs and labor. <span id="faster">Faster.</span></h1>
            <section id="register">
                <div className="homepageItem">
                    <Link className="links" to="/Register" style={{ textDecoration: 'none' }} onClick={() => setUserType('contractor')}>Are you a contractor looking for labor?</Link>
                    <Link className="links" to="/Register" style={{ textDecoration: 'none' }} onClick={() => setUserType('worker')}>Are you a skilled laborer looking for work?</Link>
                </div>
            </section>
            <section id="returning">
                <div className="homepageItem">
                    <p>Returning User?</p>
                    <Link className="links" to="/Login" style={{ textDecoration: 'none' }}>Login</Link>
                </div>
            </section>
        </section>
    )
}

export default Homepage;
