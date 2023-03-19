import React from 'react'

import './FranchiseInfo.css'
import {FranchiseList} from './types'
import franchisesRaw from './FranchiseData.json'
const franchises : FranchiseList = franchisesRaw 

function FranchiseInfo(props : any) {
    return ( 
        <div className='FranchiseInfo'>
          
        {props.currentFranchise}

        {franchises[props.currentFranchise].movies[1].description}


          <div className='column'>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{franchises.gf.movies[0].title}</h2>
              <img className='Poster' src={franchises.gf.movies[0].poster} alt="f" />
              <p className='Description'>{franchises.gf.movies[0].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{franchises.gf.movies[1].title}</h2>
              <img className='Poster' src={franchises.gf.movies[1].poster} alt="g" />
              <p className='Description'>{franchises.gf.movies[1].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{franchises.gf.movies[2].title}</h2>
              <img className='Poster' src={franchises.gf.movies[2].poster} alt="w" />
              <p className='Description'>{franchises.gf.movies[2].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{franchises.gf.movies[0].title}</h2>
              <p className='Description'>{franchises.gf.movies[0].description}</p>
            </div>
          </div>
          
          
            
        </div>
     );
}

export default FranchiseInfo;