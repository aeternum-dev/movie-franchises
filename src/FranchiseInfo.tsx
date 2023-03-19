import React from 'react'

import './FranchiseInfo.css'
import {FranchiseList} from './types'
import franchisesRaw from './FranchiseData.json'
const franchises : FranchiseList = franchisesRaw 


function MovieInfo(index: number, column: string) {
  return (
    <div className="MovieInfo">
      
    </div>
  )
}

function FranchiseInfo(props : any) {

  

  const rows = []
  const ms = franchises[props.currentFranchise].movies
  for (let i = 0; i< ms.length; i += 2) {
    if (i != ms.length-1 || i % 2 != 0) {
      rows.push(
        <div className="row">
          <div className="left">
            <h2>{ms[i].title}</h2>
            <img src={ms[i].poster} alt="" />
            <p>{ms[i].description}</p>
          </div>
          <div className='right'>
            <h2>{ms[i+1].title}</h2>
            <img src={ms[i+1].poster} alt="" />
            <p>{ms[i+1].description}</p>
          </div>
        </div>
      )
    } else {
      rows.push (
        <div className="row">
          <div className="left">
            <h2>{ms[i].title}</h2>
            <img src={ms[i].poster} alt="" />
            <p>{ms[i].description}</p>
          </div>
          <div className='right'></div>
        </div>
      )
    }
    
    
  }


    return ( 
        <div className='FranchiseInfo'>
        {rows}  
        </div>
     );
}

export default FranchiseInfo;