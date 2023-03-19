import React from 'react'
import {useState} from 'react'

import './App.css'
import text from './FranchiseData.json'

import Header from './Header'
import FranchiseInfo from './FranchiseInfo'
import Footer from './Footer'

function App() {

  const [currentFranchise, setcurrentFranchise] = useState("sw")
  
  return (
    <div className="App">
      <Header setcurrentFranchise={setcurrentFranchise} currentFranchise={currentFranchise}/> 
      <FranchiseInfo currentFranchise={currentFranchise}/>
      <Footer/>
    </div>
  )
}

export default App

