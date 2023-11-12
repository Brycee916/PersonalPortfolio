import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    
    return (
        <div className="navbar">
            
            <div className="links">
                <NavLink to="/" className="navbarLinks"> Home </NavLink>
                <NavLink to="/projects" className="navbarLinks"> Projects </NavLink>
                <NavLink to="/experience" className="navbarLinks"> Experience </NavLink>
            </div>
        </div>
    )
}

export default Navbar