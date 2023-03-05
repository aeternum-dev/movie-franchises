import React, {useState} from 'react'
import { render } from 'react-dom';


import "./Dropdown.css"

function Dropdown() {
    const [open, setopen] = useState(false)

    return (
        <div className='DropdownBtn' onClick={() => setopen(!open)}>
            <h1 className='Title'>Star Wars</h1>
            <div className="imageContainer"><img src="../src/assets/sw-bg-img.jpg" alt=""></img></div>
            {open && (<div className='DropdownMenu'>
                <div className="DropdownBtn">
                    <h1 className="Title">Lord of the Rings</h1>
                    <div className="imageContainer"><img src="../src/assets/lotr-bg-img.jpg" alt=""></img></div>
                </div>
                <div className="DropdownBtn">
                    <h1 className="Title">Planet of the Apes</h1>
                    <div className="imageContainer"><img src="../src/assets/poa-bg-img.jpg" alt=""></img></div>
                </div>
                <div className="DropdownBtn">
                    <h1 className="Title">Godfather</h1>
                    <div className="imageContainer"><img src="../src/assets/gf-bg-img.jpg" alt=""></img></div>
                </div>
                
            </div>) }

        </div>
    );
}

export default Dropdown;