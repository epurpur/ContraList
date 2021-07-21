import React, {useState} from 'react';

import { Link } from 'react-router-dom';

/* CSS styles */
import '../styles/HomepageStyle.css'

const Homepage = () => {

    const [userType, setUserType] = useState();

    return (
        <section id="homePageTop"> 
            <h1>Connecting construction jobs and labor. <span id="faster">Faster.</span></h1>
            <section id="register">
                <div className="homepageItem">
                    <Link className="links" to="/Register" style={{ "text-decoration": "none" }}>Are you a contractor looking for labor?</Link>
                    <Link className="links" to="/Register" style={{ "text-decoration": "none" }}>Are you a skilled laborer looking for work?</Link>

                </div>
            </section>
            <section id="returning">
                <div className="homepageItem">
                    <p>Returning Contractor?</p>
                    <Link className="links" to="/Login" style={{ "text-decoration": "none" }}>Login</Link>
                </div>
                <div className="homepageItem">
                    <p>Returning Employee?</p>
                    <Link className="links" to="/Login" style={{ "text-decoration": "none" }}>Login</Link>
                </div>
            </section>
        </section>
    )
}

export default Homepage;
