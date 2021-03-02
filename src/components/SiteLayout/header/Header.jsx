import React from 'react';
import "./header.scss";
import Navbar from "../../navbar/navbar";
import logo from "./Logo.jpg";

function Header() {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
            <Navbar />
        </div>
    )
}

export default Header;