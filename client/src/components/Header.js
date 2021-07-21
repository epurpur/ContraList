import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header> 
            <h1 id="logo">Contra<span className='text-emphasis'>List</span></h1>
            <section id="navButtons">
                <Link to='/' id="testing" className="navButton" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to='/ContractorLogin' className="navButton" style={{ textDecoration: 'none' }}>Contractor Login</Link>
                <Link to='/EmployeeLogin' className="navButton" style={{ textDecoration: 'none' }}>Employee Login</Link>
            </section>
        </header>
    )
}

export default Header
