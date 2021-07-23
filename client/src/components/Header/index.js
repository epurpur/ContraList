import React from 'react';
import { Link } from 'react-router-dom';

/* CSS styles */
import './styles.css';

const Header = ({userType, setUserType}) => {

// TO DO: ADD SOME LOGIC TO CHECK IF USER IS LOGGED IN, RENDER DIFFERENT BUTTONS IF YES

    return (
        <header> 
            <h1 id="logo">Contra<span className='text-emphasis'>List</span></h1>
            <section id="navButtons">
                <Link to='/' className="navButton" style={{ textDecoration: 'none' }} > Home </Link>
                <Link to='/Login' className="navButton" style={{ textDecoration: 'none' }}>Login</Link>
            </section>
        </header>
    )
}

export default Header;
