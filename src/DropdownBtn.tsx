import React, {useState} from 'react'
import { render } from 'react-dom';


import "./DropdownBtn.css"

function DropdownBtn() {
    const [open, setopen] = useState(false)

    return (
        <div className='DropdownBtn' onClick={() => setopen(!open)}>
            <h1 className='Title'>Star Wars</h1>
            <div className="imageContainer"></div>
            {open && (<div className='DropdownMenu'>
                <p>bru</p>
                <p>bree</p>
                <p>lool</p>
            </div>) }

        </div>
    );
}

export default DropdownBtn;