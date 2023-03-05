import React from 'react'
import "./Header.css"
import Dropdown from "./Dropdown"

function Header() {
    return (
        <header>
            <p>My Movie Franchises</p>
            <Dropdown/>
        </header>
    );
}

export default Header;