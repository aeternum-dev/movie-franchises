import React from 'react'

import './FranchiseInfo.css'
import data from "./FranchiseData.json"

function FranchiseInfo(props : any) {

    function currentFranchiseInfo(atr : string, data : any) {
        for (let index in data.franchises) {
            if (data.franchises[index].title == props.currentFranchise)
                return data.franchises[index][atr]
            }
        }


    return ( 
        <div className='FranchiseInfo'>
          
        {props.currentFranchise}
        {data.franchises[2].movies[2].description}
        {data.franchises[currentFranchiseInfo("movies",data)].movies.map((prop : any) => (
            <div>
                <h1 className="Title">{prop.title}</h1>
                <p className="Description">{prop.descrption}</p>
                <div className="imageContainer"><img src={prop.poster} alt=""/></div>
            </div>
        
        ))}
        

       
          
            
        </div>
     );
}

export default FranchiseInfo;