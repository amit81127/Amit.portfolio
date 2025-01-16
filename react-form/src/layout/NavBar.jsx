import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">MyApp</div>
            <ul className="navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#login">Login</a></li>
                <li><a href="#signup">Sign Up</a></li>
                <li><a href="#logout">Logout</a></li>
            </ul>
        </nav>
    );
};

export default NavBar;