import React from 'react'
import { useState } from 'react'

import './App.css'
import text from './FranchiseData.json'

import Header from './Header'
import FranchiseInfo from './FranchiseInfo'
import Footer from './Footer'

// 1.import useState
// 2. create State hook ( 1 for reading state, 1 for changing it)
// 3. pass them down as component properties
// 4. pass reading and changing accross header, and dropdown
// 5. pass reader to FranchiseInfo
// 6. get the bloody buttons working with onClick
// 7. change dropdown menu rendering to not display current state, potentially with a for cycle


function App() {
  
  const [currentFranchise, setcurrentFranchise] = useState("Star Wars")

  return (
    <div className="App">
      <Header setcurrentFranchise={setcurrentFranchise} currentFranchise={currentFranchise}/> 
      <FranchiseInfo currentFranchise={currentFranchise}/>
      <Footer/>
    </div>
  )
}

export default App

