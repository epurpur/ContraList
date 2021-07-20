import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

    const goHome = () => {
        // redirects to home page
        window.location = '/';
    }

    const contractorLogin = () => {
        // redirects to contractor login page
        window.location = '/ContractorLogin';
    }

    const employeeLogin = () => {
        // redirects to employee login page
        window.location = '/EmployeeLogin';
    }

    return (
        <header id='header'> 
            <h1 id="logo">Contra<span id='logo2'>List</span></h1>
            <section id="navButtons">
                <Link to='/' id="testing" className="navButton" style={{ textDecoration: 'none' }}>Home</Link>
                <Link to='/ContractorLogin' className="navButton" style={{ textDecoration: 'none' }}>Contractor Login</Link>
                <Link to='/EmployeeLogin' className="navButton" style={{ textDecoration: 'none' }}>Employee Login</Link>
                {/* <button className="navButton" onClick={goHome}> Home </button>
                <button className="navButton" onClick={contractorLogin}> Contractor Login </button>
                <button className="navButton" onClick={employeeLogin}> Employee Login </button> */}
            </section>
        </header>
    )
}

export default Header
