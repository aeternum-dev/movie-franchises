import React from 'react'

import './App.css'
import text from './FranchiseData.json'

import Header from './Header'
import FranchiseInfo from './FranchiseInfo'
import Footer from './Footer'

function App() {

  return (
    <div className="App">
      <Header/> 
      <FranchiseInfo/>
      {text.franchises.gf.title}
      <Footer/>
    </div>
  )
}

export default App

