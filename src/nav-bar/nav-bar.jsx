import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';
import logo from '/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <Link to="/" className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </Link>
            </div>
            <div className="navbar-right">
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="menu-icon" />
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/people">People</Link></li>
                    <li><Link to="/papers">Papers</Link></li>
                    <li><Link to="/news">News</Link></li>
                    <li><Link to="/software">Software</Link></li>
                    <li className="contact-button">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;


