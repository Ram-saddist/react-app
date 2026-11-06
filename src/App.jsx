import React from 'react'
import Navbar from './Navbar'
import AddDoctor from './AddDoctor'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add-doctor" element={<AddDoctor/>}/>
      </Routes>
    </div>
  )
}
export default App