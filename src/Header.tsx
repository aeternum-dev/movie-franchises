import React from 'react'
import "./Header.css"
import DropdownBtn from "./DropdownBtn"

function Header() {
    return (
        <header>
            <p>My Favorite Movie Franchises</p>
            <DropdownBtn/>
        </header>
    );
}

export default Header;