import React from "react";
import "./Header.css";

function Header() {
    return (
        <header id="header">
            <div className="logo">LOGO</div>
            <nav>
                <a href="#about">About</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#demo">Demo</a>
            </nav>
            <button className="header-button">Start Now</button>
        </header>
    );
}

export default Header;