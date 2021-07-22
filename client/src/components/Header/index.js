import React from 'react';
import { Link } from 'react-router-dom';

/* CSS styles */
import './styles.css';

const Header = ({userType, setUserType}) => {

    return (
        <header> 
            <h1 id="logo">Contra<span className='text-emphasis'>List</span></h1>
            <section id="navButtons">
                <Link to='/' className="navButton" style={{ textDecoration: 'none' }} > Home </Link>
                <Link to='/Login' className="navButton" style={{ textDecoration: 'none' }} onClick={() => setUserType('contractor')}>Contractor Login</Link>
                <Link to='/Login' className="navButton" style={{ textDecoration: 'none' }} onClick={() => setUserType('worker')}>Employee Login</Link>
            </section>
        </header>
    )
}

export default Header
