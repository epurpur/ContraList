import React from 'react';

const Header = () => {
    return (
    <nav> 
        <h1 id="logo">ContraList</h1>
        <section id="navButtons">
            <button className="navButton"> Contractor Login </button>
            <button className="navButton"> Employee Login </button>
        </section>
    </nav>
    )
}

export default Header
