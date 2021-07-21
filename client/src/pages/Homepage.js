import React from 'react'
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <section style={{ textAlign: "center" }}>
            <div id="homepageTop" >
                <h1 style={{ "font-size": "80px" }}>Connecting construction jobs and labor. <span className='text-emphasis-orange'>Faster.</span></h1>
            </div>
            <div id='homepageMiddle' style={{ "font-size": "40px" }}>
                New User ? <Link className="inline-button text-emphasis" 
                style={{ "background-color" : "var(--background-header)",
                    "border-radius" : "10px",
                    "padding": "10px",
                    "text-decoration" : "none"  }}>Register</Link>
            </div>
        </section> 

        

    )
}

export default Homepage
