import React, {useState} from 'react'
import { render } from 'react-dom'

import {FranchiseList} from './types'
import franchisesRaw from './FranchiseData.json'
const franchises : FranchiseList = franchisesRaw 


import "./Dropdown.css"



function Dropdown(props : any) {
    const [open, setopen] = useState(false)

    function GenerateButtons( currentFranchise : string, franchises: FranchiseList) {
        const buttonList = []

        for (let i in franchises) {
            if (i != props.currentFranchise ) {
                buttonList.push(
                    <div className="DropdownBtn" onClick={() => props.setcurrentFranchise(i)}>
                        <h1 className="Title">{franchises[i].title}</h1>
                        <div className="imageContainer"><img src={franchises[i].backdrop} alt=""/></div>
                    </div>
                )
            }
        }
        return buttonList
    }

    

    return (
        <div className='DropdownBtn' onClick={() => setopen(!open)}>
            <h1 className='Title'>{franchises[props.currentFranchise].title}</h1>
            <div className="imageContainer"><img src={franchises[props.currentFranchise].backdrop} alt=""/></div>
            {open && (<div className='DropdownMenu'>
                {
                   GenerateButtons(props.currentFranchise,franchises)       
                }
            </div>) }

        </div>
    );
}

export default Dropdown;