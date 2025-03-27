import React, { useState } from 'react';
import './nav-bar.css';
import logo from '/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <a href="/" className="logo">
                    <img src={logo} alt="Logo" className="logo-image" />
                </a>
            </div>
            <div className="navbar-right">
                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={faBars} className="menu-icon" />
                </button>
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/people">People</a></li>
                    <li><a href="/papers">Papers</a></li>
                    <li><a href="/news">News</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li className="contact-button">
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

