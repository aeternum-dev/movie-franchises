import React, {useState} from 'react'
import { render } from 'react-dom'

import { Franchise } from './types';
import data from './FranchiseData.json'
import "./Dropdown.css"


function Dropdown(props : any) {
    const [open, setopen] = useState(false)
    

    function currentFranchiseInfo(atr : string, data : any) {
    for (let index in data.franchises) {
        if (data.franchises[index].title == props.currentFranchise)
            return data.franchises[index][atr]
        }
    }

    const buttonList = [];
    
    for (let index in data.franchises) {
        if ( data.franchises[index].title != props.currentFranchise )
            buttonList.push(
                <div className="DropdownBtn" onClick={() => props.setcurrentFranchise(data.franchises[index].title)}>
                    <h1 className="Title">{data.franchises[index].title}</h1>
                    <div className="imageContainer"><img src={data.franchises[index].backdrop} alt=""/></div>
                </div>
            )
    }

    return (
        <div className='DropdownBtn' onClick={() => setopen(!open)}>
            <h1 className='Title'>{props.currentFranchise}</h1>
            <div className="imageContainer"><img src={currentFranchiseInfo("backdrop", data)} alt=""/></div>
            {open && (<div className='DropdownMenu'>
                {buttonList}
                       
                
            </div>) }

        </div>
    );
}

export default Dropdown;