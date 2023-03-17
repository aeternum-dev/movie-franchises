import React from 'react'

import './FranchiseInfo.css'
import data from "./FranchiseData.json"

function FranchiseInfo() {
    return ( 
        <div className='FranchiseInfo'>
          

        rrgrgrg
        rgrgrgr
        grgr
        grgrg
        rgrgrgrrgrgrg
        rgrgrgrgrgrgh
        ej
        net
        efrgrgrg
        htjrtjrt
        trhjtrhtr
        hehehe
        fefef
        efefe
        fefefef
        eferher
        z
        jzjzjzj
        zkzzk
        ef
        zkzkzk
        kz
        net
        efrgrgrg
        htjrtjrt
        trhjtrhtr
        hehehe
        fefef
        efefe
        fefefef
        eferher
        z
        jzjzjzj
        zkzzk
        ef
        zkzkzk
        kz
        kzk
        zkzkzkzkzkz
        k5i77i
        7i7i7i
        7i7ii7i
        i
        7i7i7i7i
        7i7ii7i7i
        7i7i7i
        htjtje
        erzher


          <div className='column'>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{data.franchises.gf.movies[0].title}</h2>
              <img className='Poster' src={data.franchises.gf.movies[0].poster} alt="f" />
              <p className='Description'>{data.franchises.gf.movies[0].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{data.franchises.gf.movies[1].title}</h2>
              <img className='Poster' src={data.franchises.gf.movies[1].poster} alt="g" />
              <p className='Description'>{data.franchises.gf.movies[1].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{data.franchises.gf.movies[2].title}</h2>
              <img className='Poster' src={data.franchises.gf.movies[2].poster} alt="w" />
              <p className='Description'>{data.franchises.gf.movies[2].description}</p>
            </div>
            <div className="MovieInfo">
              <h2 className="MovieTitle">{data.franchises.gf.movies[0].title}</h2>
              <p className='Description'>{data.franchises.gf.movies[0].description}</p>
            </div>
          </div>
          
          
            
        </div>
     );
}

export default FranchiseInfo;