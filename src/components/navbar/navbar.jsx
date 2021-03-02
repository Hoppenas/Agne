import React from 'react';
import { Link } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
    return (
        <nav className="navbar__button-container">
            <Link to="/" className="navbar-button">
                About me
            </Link>
            <Link to="/Gallery" className="navbar-button">
                Gallery
            </Link>
            <Link to="/contacts" className="navbar-button">
                Contacts
            </Link>
        </nav>
    )
}

export default Navbar;
