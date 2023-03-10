import React, {useState} from 'react'
import { render } from 'react-dom'

import data from './FranchiseData.json'


import "./Dropdown.css"



function DropdownElements() {
    return (
        <div>
        {data.franchises.map((prop : any) => (
            <div className="DropdownBtn">
              <h1 className="Title">{prop.title}</h1>
              <div className="imageContainer"><img src={prop.backdrop} alt=""/></div>
            </div>
          ))}
        </div>
        );
}

function Dropdown() {
    const [open, setopen] = useState(false)

    

    return (
        <div className='DropdownBtn' onClick={() => setopen(!open)}>
            <h1 className='Title'>Star Wars</h1>
            <div className="imageContainer"><img src="../src/assets/sw-bg-img.jpg" alt=""/></div>
            {open && (<div className='DropdownMenu'>
                {
                   DropdownElements()         
        }
            </div>) }

        </div>
    );
}

export default Dropdown;