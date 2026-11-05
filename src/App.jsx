import React from 'react'
import Navbar from './Navbar'
import AddDoctor from './AddDoctor'
import Home from './Home'
function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      {/* <AddDoctor/> */}
      {/* <Doctorcard 
        name="ravi" 
        age="23" 
        gender="male" 
        specialization="developer"
        salary="45000"/> 
      <Doctorcard/>
      <Doctorcard/> */}
    </div>
  )
}

export default App
