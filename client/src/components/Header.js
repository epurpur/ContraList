import React from 'react';

const Header = () => {

    const contractorLogin = () => {
        // redirects to contractor login page
        window.location = '/ContractorLogin'
    }

    const employeeLogin = () => {
        // redirects to employee login page
        window.location = '/EmployeeLogin'
    }

    return (
        <div id='header'> 
            <h1 id="logo">ContraList</h1>
            <section id="navButtons">
                <button className="navButton" onClick={contractorLogin}> Contractor Login </button>
                <button className="navButton" onClick={employeeLogin}> Employee Login </button>
            </section>
        </div>
    )
}

export default Header
