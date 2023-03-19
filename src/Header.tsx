import React from 'react'
import "./Header.css"
import Dropdown from "./Dropdown"

function Header(props : any) {
    return (
        <header>
            <p>My Movie Franchises</p>
            <Dropdown setcurrentFranchise={props.setcurrentFranchise} currentFranchise={props.currentFranchise}/>
        </header>
    );
}

export default Header;